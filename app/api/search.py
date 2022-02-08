
from flask import Blueprint, jsonify
from app.forms.search_form import SearchForm
from app.models import db, Project

search = Blueprint("search", __name__, url_prefix='/search')


@search.route('/', methods=["GET", "POST"])
def search_projects():
    form = SearchForm()

    if form.validate_on_submit():
        search_term = form.data['search']
        query = Project.query.filter(Project.title.lower().like('%'+search_term.lower()+'%')).all()
        return jsonify(query)
