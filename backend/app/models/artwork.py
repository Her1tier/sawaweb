from sqlalchemy import Column, String, Text, Boolean, Numeric, DateTime, ForeignKey, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid
from app.models.base import Base

class Artwork(Base):
    __tablename__ = "artworks"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    # Public identifier used by frontend routes like `/shop/[id]`.
    public_id = Column(String, nullable=False, unique=True)

    title = Column(String, nullable=False)
    artist_id = Column(UUID(as_uuid=True), ForeignKey("artists.id"), nullable=True)
    description = Column(Text, nullable=True)
    medium = Column(String, nullable=True)
    price = Column(Numeric(10, 2), nullable=True)
    size = Column(String, nullable=True)
    emoji = Column(String, nullable=True)
    image_url = Column(String, nullable=True)
    animal = Column(String, nullable=True)

    # Landing fields
    kw = Column(String, nullable=True)
    year = Column(Integer, nullable=True)
    
    is_available = Column(Boolean, default=True)
    is_featured = Column(Boolean, default=False)
    in_portfolio = Column(Boolean, default=False)
    portfolio_client = Column(String, nullable=True)

    # Ordering for the portfolio/featured sections.
    portfolio_order = Column(Integer, nullable=False, default=0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
