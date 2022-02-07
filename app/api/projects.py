from flask import Blueprint, jsonify, request
from app.models import db, Project


projects = Blueprint(
    'projects',__name__, url_prefix='/projects'
)


@projects.route('/<int:id>')

def project(id):
    project = Project.query.get(id)
    return project.to_dict()
