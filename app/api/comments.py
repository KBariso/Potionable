from flask import Blueprint, jsonify, redirect
from app.forms.comments import NewComment
from app.models import db, Comment


comments = Blueprint(
    'comments',__name__, url_prefix='/comments'
)


@comments.route('/', methods=["GET"])
def get_all_comments():
    # comments = Comment.query.order_by(Comment.id.desc()).all()
    # return {"comments": [comment.to_dict() for comment in comments]}

    comments = [comment.to_dict() for comment in Comment.query.all()]
    # return print(comments, "I AM HERE!!!!!!!!!")
    return jsonify(comments)


@comments.route('/', methods=["POST"])
def comment_form_submit():
    form = NewComment()

    if form.validate_on_submit():
        data = form.data
        new_comment = Comment(comment = data["comment"])

        db.session.add(new_comment)
        db.session.commit()
        # return redirect("/")

    else:
        return "Bad Data"
