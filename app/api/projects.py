from flask import Blueprint, jsonify, request
from app.models import db, Project


projects = Blueprint(
    'projects',__name__, url_prefix='/projects'
)


@projects.route('/<int:id>')

def project(id):
    project = Project.query.get(id)
    return project.to_dict()


# TODO: Get all projects (Displays on the splash page)
@projects.route('/', methods=["GET"])
# @projects.route('/', methods=['GET'], strict_slashes=False)

def get_all_projects():
    # projects = Project.query.all()
    # print(projects, 'look here')
    # return {'projects': [project.to_dict() for project in projects]}
    projects = [project.to_dict() for project in Project.query.all()]

    # return print('PRINT STATEMENT HERE', projects)
    # return projects.to_dict()
    return jsonify(projects)
