from .db import db
from sqlalchemy import ForeignKey

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    media_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populate="project")
    steps = db.relationship("Step", back_populate="project")
    comments = db.relationship("Comment", back_populate="project")
    medias = db.relationship("Media", back_populate="project")
