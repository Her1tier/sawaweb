from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Optional
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, ConfigDict
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.models.career import CareerApplication
from app.models.commission import CommissionRequest

router = APIRouter(prefix="/admin", tags=["admin"])


class CareerStatus(str, Enum):
    PENDING = "Pending"
    REVIEWED = "Reviewed"
    REJECTED = "Rejected"


class CommissionStatus(str, Enum):
    PENDING = "Pending"
    CONTACTED = "Contacted"
    ACCEPTED = "Accepted"


class CareerCreateIn(BaseModel):
    type: str
    name: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    details: Optional[Dict[str, Any]] = None


class CareerStatusUpdateIn(BaseModel):
    status: CareerStatus


class CareerOut(BaseModel):
    id: UUID
    type: str
    name: str
    email: str
    phone: Optional[str] = None
    location: Optional[str] = None
    details: Optional[Dict[str, Any]] = None
    status: CareerStatus
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


class CommissionCreateIn(BaseModel):
    name: str
    email: str
    animal: Optional[str] = None
    medium: Optional[str] = None
    size: Optional[str] = None
    budget: Optional[str] = None
    timeline: Optional[str] = None
    notes: Optional[str] = None


class CommissionStatusUpdateIn(BaseModel):
    status: CommissionStatus


class CommissionOut(BaseModel):
    id: UUID
    name: str
    email: str
    animal: Optional[str] = None
    medium: Optional[str] = None
    size: Optional[str] = None
    budget: Optional[str] = None
    timeline: Optional[str] = None
    notes: Optional[str] = None
    status: CommissionStatus
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)


@router.post("/career", response_model=CareerOut)
async def create_career_application(
    payload: CareerCreateIn, db: AsyncSession = Depends(get_db)
) -> CareerOut:
    row = CareerApplication(
        type=payload.type,
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        location=payload.location,
        details=payload.details,
        status=CareerStatus.PENDING.value,
    )
    db.add(row)
    await db.commit()
    await db.refresh(row)
    return CareerOut.model_validate(row)


@router.get("/career", response_model=List[CareerOut])
async def list_career_applications(
    status: Optional[CareerStatus] = None,
    limit: int = Query(default=50, ge=1, le=200),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> List[CareerOut]:
    stmt = select(CareerApplication).order_by(CareerApplication.created_at.desc()).offset(offset).limit(limit)
    if status is not None:
        stmt = stmt.where(CareerApplication.status == status.value)
    rows = (await db.execute(stmt)).scalars().all()
    return [CareerOut.model_validate(row) for row in rows]


@router.patch("/career/{career_id}/status", response_model=CareerOut)
async def update_career_status(
    career_id: UUID, payload: CareerStatusUpdateIn, db: AsyncSession = Depends(get_db)
) -> CareerOut:
    row = await db.get(CareerApplication, career_id)
    if row is None:
        raise HTTPException(status_code=404, detail="Career application not found")
    row.status = payload.status.value
    await db.commit()
    await db.refresh(row)
    return CareerOut.model_validate(row)


@router.post("/commission", response_model=CommissionOut)
async def create_commission_request(
    payload: CommissionCreateIn, db: AsyncSession = Depends(get_db)
) -> CommissionOut:
    row = CommissionRequest(
        name=payload.name,
        email=payload.email,
        animal=payload.animal,
        medium=payload.medium,
        size=payload.size,
        budget=payload.budget,
        timeline=payload.timeline,
        notes=payload.notes,
        status=CommissionStatus.PENDING.value,
    )
    db.add(row)
    await db.commit()
    await db.refresh(row)
    return CommissionOut.model_validate(row)


@router.get("/commission", response_model=List[CommissionOut])
async def list_commission_requests(
    status: Optional[CommissionStatus] = None,
    limit: int = Query(default=50, ge=1, le=200),
    offset: int = Query(default=0, ge=0),
    db: AsyncSession = Depends(get_db),
) -> List[CommissionOut]:
    stmt = (
        select(CommissionRequest)
        .order_by(CommissionRequest.created_at.desc())
        .offset(offset)
        .limit(limit)
    )
    if status is not None:
        stmt = stmt.where(CommissionRequest.status == status.value)
    rows = (await db.execute(stmt)).scalars().all()
    return [CommissionOut.model_validate(row) for row in rows]


@router.patch("/commission/{commission_id}/status", response_model=CommissionOut)
async def update_commission_status(
    commission_id: UUID,
    payload: CommissionStatusUpdateIn,
    db: AsyncSession = Depends(get_db),
) -> CommissionOut:
    row = await db.get(CommissionRequest, commission_id)
    if row is None:
        raise HTTPException(status_code=404, detail="Commission request not found")
    row.status = payload.status.value
    await db.commit()
    await db.refresh(row)
    return CommissionOut.model_validate(row)
