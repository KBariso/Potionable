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
@projects.route('/', methods=['GET'], strict_slashes=False)



def get_all_projects():
    # projects = Project.query.all()
    # print(projects, 'look here')
    # return {'projects': [project.to_dict() for project in projects]}
    projects = [project.to_dict() for project in Project.query.all()]


    # return print('PRINT STATEMENT HERE', projects)
    # return projects.to_dict()
    return jsonify(projects)

@projects.route("/<int:id>", methods=["DELETE"])
def delete_project(id):
    # project = Project.query.get(id)
    deleteProject= Project.query.filter(Project.id == id).first()
    db.session.delete(deleteProject)
    db.session.commit()
    # return "True", 201
    return flask.redirect("/")


@projects.route('/<id>/edit', methods=["PUT"])
def edit_project(id):
    # project = Project.query.filter_by(id=id).first()
    # # print(comment, "I AM THE COMMENT")
    # project_id = request.json
    # # project.project = project_id['project']
    # db.session.commit()
    # return jsonify(project.project)
    form= 
