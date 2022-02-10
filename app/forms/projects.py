from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Project


def no_title(form,field):
    title = field.data
    if len(title) < 1:
        raise ValidationError("Must provide a title!!")




class NewProject(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    media_url = StringField("media_url")
