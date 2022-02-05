from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):              # Function is on the user model itself.     #For flask form custom validator functions, they take in implicit arugments. similar to self. or this.  ,this is to pass in arugments to the function.
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):                         #Login form. only requires email/pass
    email = StringField('email', validators=[DataRequired(), user_exists])  #Custom validators! user_exists!
    password = StringField('password', validators=[
                           DataRequired(), password_matches])       #Custom validator!
