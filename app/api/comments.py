from flask import Blueprint
from app.models import db, Comment


comments = Blueprint(
    'comments',__name__, url_prefix='/comments'
)


@comments.route("")
def get_all_comments():
    comments = Comment.query.order_by(Comment.id.desc()).all()
    return {"comments": [comment.to_dict() for comment in comments]}
