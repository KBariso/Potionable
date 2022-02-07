from flask import Blueprint, request
from app.models import db, Media
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("medias", __name__)


@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    if "media" not in request.files:
        return {"errors": "media required"}, 400
    media = request.files["media"]

    if not allowed_file(media.filename):
        return {"errors": "file type not permitted"}, 400
    media.filename = get_unique_filename(media.filename)

    upload = upload_file_to_s3(media)

    if "media_url" not in upload:
        # if the dictionary doesn't have a filename key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        print(upload)
        return upload, 400

    media_url = upload["media_url"]
    # we can use the
    new_media = Media(steps=current_user, media_url=media_url)
    db.session.add(new_media)
    db.session.commit()
    return {"media_url": media_url}


@image_routes.route("")
def get_all_images():
    medias = Media.query.order_by(Media.id.desc()).all()
    return {"media": [media.to_dict() for media in medias]}
