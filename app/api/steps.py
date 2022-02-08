from flask import Blueprint, jsonify, request
from app.models import db, Step


steps = Blueprint(
    'steps',__name__, url_prefix='/steps'
)


@projects.route('/<int:id>')

def steps(id):
    steps = Step.query.get(id)
    return steps.to_dict()
