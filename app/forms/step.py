from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.fields.html5 import URLField
from wtforms.validators import DataRequired, URL


class StepForm(FlaskForm):
    title = TextAreaField('Title', validators=[DataRequired()])
    body = TextAreaField('Body', validators=[DataRequired()])
    project_id = IntegerField('project_id')
