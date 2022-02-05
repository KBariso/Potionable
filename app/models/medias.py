from .db import db
from sqlalchemy import ForeignKey

class Media(db.Model):
    __tablename__ = 'medias'

    id = db.Column(db.Integer, primary_key=True)
    media_url = db.Column(db.String(255))
    step_id = db.Column(db.Integer, db.ForeignKey("steps.id"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
