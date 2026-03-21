from sqlalchemy import Column, String, Text, DateTime, Integer
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.sql import func
import uuid
from app.models.base import Base

class Artist(Base):
    __tablename__ = "artists"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    # Public identifier used by the frontend route `/artists/[slug]`.
    slug = Column(String, nullable=False, unique=True)
    name = Column(String, nullable=False)

    # Landing page + profile fields
    role = Column(String, nullable=False)
    since = Column(String, nullable=True)
    medium = Column(String, nullable=True)
    specialty = Column(JSONB, nullable=True)  # list[string]
    quote = Column(Text, nullable=True)
    emoji = Column(String, nullable=True)
    bg = Column(String, nullable=True)  # background color (hex/string)

    # Ordering for "featured artists" section.
    display_order = Column(Integer, nullable=False, default=0)

    bio = Column(Text, nullable=True)
    image_url = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
