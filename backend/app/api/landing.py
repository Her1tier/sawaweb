from typing import List, Optional

from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.models.artist import Artist
from app.models.artwork import Artwork

router = APIRouter()


class PortfolioWorkOut(BaseModel):
    id: str
    title: str
    artist: str
    size: Optional[str] = None
    medium: Optional[str] = None
    image: Optional[str] = None
    client: Optional[str] = None


class NewInWorkOut(BaseModel):
    id: str
    title: str
    medium: Optional[str] = None
    size: Optional[str] = None
    price: Optional[float] = None
    available: bool
    emoji: Optional[str] = None
    year: Optional[int] = None
    image_url: Optional[str] = None


class LandingArtistOut(BaseModel):
    slug: str
    name: str
    role: str
    since: Optional[str] = None
    medium: Optional[str] = None
    specialty: Optional[List[str]] = None
    bio: Optional[str] = None
    quote: Optional[str] = None
    emoji: Optional[str] = None
    bg: Optional[str] = None
    order: int
    image_url: Optional[str] = None


@router.get("/landing/portfolio", response_model=List[PortfolioWorkOut])
async def landing_portfolio(
    limit: int = Query(default=3, ge=1, le=12),
    db: AsyncSession = Depends(get_db),
) -> List[PortfolioWorkOut]:
    stmt = (
        select(Artwork, Artist)
        .outerjoin(Artist, Artwork.artist_id == Artist.id)
        .where(Artwork.in_portfolio.is_(True))
        .order_by(Artwork.portfolio_order.asc(), Artwork.created_at.desc())
        .limit(limit)
    )
    rows = (await db.execute(stmt)).all()

    out: List[PortfolioWorkOut] = []
    for artwork, artist in rows:
        out.append(
            PortfolioWorkOut(
                id=str(artwork.public_id),
                title=artwork.title,
                artist=artist.name if artist is not None else "",
                size=artwork.size,
                medium=artwork.medium,
                image=artwork.image_url,
                client=artwork.portfolio_client,
            )
        )
    return out


@router.get("/landing/new-in", response_model=List[NewInWorkOut])
async def landing_new_in(
    limit: int = Query(default=8, ge=1, le=24),
    db: AsyncSession = Depends(get_db),
) -> List[NewInWorkOut]:
    stmt = (
        select(Artwork, Artist)
        .outerjoin(Artist, Artwork.artist_id == Artist.id)
        .where(Artwork.is_available.is_(True))
        .where(Artwork.year.is_not(None))
        .order_by(Artwork.year.desc(), Artwork.portfolio_order.asc())
        .limit(limit)
    )
    rows = (await db.execute(stmt)).all()

    out: List[NewInWorkOut] = []
    for artwork, _artist in rows:
        price: Optional[float] = float(artwork.price) if artwork.price is not None else None
        out.append(
            NewInWorkOut(
                id=str(artwork.public_id),
                title=artwork.title,
                medium=artwork.medium,
                size=artwork.size,
                price=price,
                available=bool(artwork.is_available),
                emoji=artwork.emoji,
                year=artwork.year,
                image_url=artwork.image_url,
            )
        )
    return out


@router.get("/landing/artists", response_model=List[LandingArtistOut])
async def landing_artists(
    limit: Optional[int] = Query(default=None, ge=1, le=100),
    db: AsyncSession = Depends(get_db),
) -> List[LandingArtistOut]:
    stmt = select(Artist).order_by(Artist.display_order.asc())
    if limit is not None:
        stmt = stmt.limit(limit)

    rows = (await db.execute(stmt)).scalars().all()
    return [
        LandingArtistOut(
            slug=a.slug,
            name=a.name,
            role=a.role,
            since=a.since,
            medium=a.medium,
            specialty=list(a.specialty) if a.specialty is not None else None,
            bio=a.bio,
            quote=a.quote,
            emoji=a.emoji,
            bg=a.bg,
            order=int(a.display_order or 0),
            image_url=a.image_url,
        )
        for a in rows
    ]

