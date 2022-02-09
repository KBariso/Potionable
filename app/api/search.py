from flask import Blueprint, jsonify, request
from app.models import db, Project
from sqlalchemy import func


search = Blueprint(
    'search',__name__, url_prefix='/search'
)



# TODO: Get all projects (Displays on the splash page)
@search.route('/', methods=['GET'], strict_slashes=False)

def search_projects():
    search_keyword = request.args.get('searchKeyword')
    result = [project.to_dict() for project in Project.query.filter(func.lower(Project.title).like('%'+search_keyword.lower()+'%')).all()]
    return jsonify(result)
