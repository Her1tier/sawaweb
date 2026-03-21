from sqlalchemy import Column, String, Text, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
import uuid
from app.models.base import Base

class CommissionRequest(Base):
    __tablename__ = "commission_requests"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    animal = Column(String, nullable=True)
    medium = Column(String, nullable=True)
    size = Column(String, nullable=True)
    budget = Column(String, nullable=True)
    timeline = Column(String, nullable=True)
    notes = Column(Text, nullable=True)
    status = Column(String, default="Pending") # Pending, Contacted, Accepted
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
