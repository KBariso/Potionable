from flask import Blueprint, jsonify
from app.models import db, Comment


comments = Blueprint(
    'comments',__name__, url_prefix='/comments'
)


@comments.route('/', methods=["GET"])
def get_all_comments():
    # comments = Comment.query.order_by(Comment.id.desc()).all()
    # return {"comments": [comment.to_dict() for comment in comments]}

    comments = [comment.to_dict() for comment in Comment.query.all()]
    return jsonify(comments)
