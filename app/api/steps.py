from flask import Blueprint, jsonify, request
from app.models import db, Step


steps = Blueprint(
    'steps',__name__, url_prefix='/steps'
)


@steps.route('/', methods=['GET'], strict_slashes=False)
def get_all_steps():
    # projects = Project.query.all()
    # print(projects, 'look here')
    # return {'projects': [project.to_dict() for project in projects]}
    steps = [step.to_dict() for step in Step.query.all()]

    # return print('HAHAHHAHAHAHHA', steps)
    # return projects.to_dict()
    return jsonify(steps)
