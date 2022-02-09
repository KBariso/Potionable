from .db import db
# from sqlalchemy import ForeignKey
# from sqlalchemy.orm import backref

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    media_url = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="projects")
    steps = db.relationship("Step", back_populates="projects", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates="projects", cascade="all, delete-orphan")
    medias = db.relationship("Media", back_populates="projects", cascade="all, delete-orphan")


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "media_url": self.media_url,
            "user_id": self.user_id
        }
