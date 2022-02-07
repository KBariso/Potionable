from .db import db
from sqlalchemy import ForeignKey

class Media(db.Model):
    __tablename__ = 'medias'

    id = db.Column(db.Integer, primary_key=True)
    media_url = db.Column(db.String(255))
    step_id = db.Column(db.Integer, db.ForeignKey("steps.id"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)

    step = db.relationship("Step", back_populates="medias")
    projects = db.relationship("Project", back_populates="medias")


    def to_dict(self):
        return {
            "id": self.id,
            "media_url": self.media_url,
            "step_id": self.step_id,
            "project_id": self.project_id
        }
