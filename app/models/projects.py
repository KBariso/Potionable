from .db import db
from sqlalchemy import ForeignKey

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    media_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="project")
    steps = db.relationship("Step", back_populates="project")
    comments = db.relationship("Comment", back_populates="project")
    medias = db.relationship("Media", back_populates="project")
