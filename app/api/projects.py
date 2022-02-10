from flask import Blueprint, jsonify, request
from app.models import db, Project
from app.forms.projects import NewProject
from flask_login import current_user


projects = Blueprint(
    'projects',__name__, url_prefix='/projects'
)

# ---------------GET ONE PROJECT -------------------
@projects.route('/<int:id>')

def project(id):
    project = Project.query.get(id)
    return project.to_dict()



# -----------------CREATE A PROJECT ----------------

@projects.route('/new', methods=["POST"], strict_slashes=False)
def comment_form_submit():
    form = NewProject()
    req_body = request.json #To get the info we need from front to back
    # print(test["project_id"], "TESTTINNGGGGGGGGG")
    form['csrf_token'].data = request.cookies['csrf_token']

    # new_project = form['project'].data

    if form.validate_on_submit():
        data = form.data
        new_project = Project(title = data["title"],
                              description = data["description"],
                              media_url = data["media_url"],
                              user_id = current_user.id)
        db.session.add(new_project)

        db.session.commit()
        return new_project.to_dict()

    else:
        return "Bad Data"

# -------------GET ALL PROJECTS ---------------------
# TODO: Get all projects (Displays on the splash page)
@projects.route('/', methods=['GET'], strict_slashes=False)
def get_all_projects():
    projects = Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}





# --------------DELETE A PROJECT -----------------------
@projects.route("/<int:id>", methods=["DELETE"])
def delete_project(id):
    # project = Project.query.get(id)
    deleteProject= Project.query.filter(Project.id == id).first()
    db.session.delete(deleteProject)
    db.session.commit()
    # return "True", 201
    return flask.redirect("/")


@projects.route('/<id>/edit', methods=["PUT"], strict_slashes=False)
def edit_project(id):
    form = NewProject()
    project= Project.query.get(id)

    # return project.to_dict()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        project.title= form.data['title']
        project.description= form.data['description']
        project.media_url= form.data['media_url']

        db.session.commit()
        # return jsonify(project)
        return project.to_dict()
    return {'errors':'form not good'}
