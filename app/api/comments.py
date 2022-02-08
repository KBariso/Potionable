from flask import Blueprint, jsonify, redirect, request
from app.forms.comments import NewComment
from app.models import db, Comment
from flask_login import current_user


comments = Blueprint(
    'comments',__name__, url_prefix='/comments'
)


@comments.route('/', methods=["GET"])
def get_all_comments():
    # comments = Comment.query.order_by(Comment.id.desc()).all()
    # return {"comments": [comment.to_dict() for comment in comments]}
    print(current_user, "HELLOOOO!!!!!dfgaesgGEagfa")

    comments = [comment.to_dict() for comment in Comment.query.all()]
    # return print(comments, "I AM HERE!!!!!!!!!")
    return jsonify(comments)


@comments.route('/new', methods=["POST"])
def comment_form_submit(project_id):
    form = NewComment()
    print("I AM HERE!!!!!")
    form['csrf_token'].data = request.cookies['csrf_token']

    new_comment = form['comment'].data

    if form.validate_on_submit():
        data = form.data
        new_comment = Comment(comment = data["comment"],
                              user_id = current_user.id,
                              project_id = data["project_id"])
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
        return redirect("/")

    else:
        return "Bad Data"
