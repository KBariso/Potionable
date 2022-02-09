import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.projects import projects
from .api.steps import steps
from .api.comments import comments
from .api.search import search

from .seeds import seed_commands

from .config import Config

app = Flask(__name__)

# Setup login manager
login = LoginManager(app)   #Setting up login manager for application. From the flask_login package, does all user auth for you.
login.login_view = 'auth.unauthorized' #Setting login_view property on login manager class. This is a route displayed if a user tries to access a route they cannot access.


@login.user_loader
def load_user(id):
    return User.query.get(int(id))  #loads as current_user


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users') #anytime we want to get to user or auth routes we have to access them with this. (For our backend)
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(projects, url_prefix='/api/projects')
app.register_blueprint(steps, url_prefix='/api/steps')
app.register_blueprint(comments, url_prefix='/api/comments')
app.register_blueprint(search, url_prefix='/api/search')
db.init_app(app)
Migrate(app, db)

# Application Security
CORS(app) #How we enable CORS for a flask application.


# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request                #Flask app decorator. Calls a function before each request hits the backend. redirect all requests over https. Encrypts the request.
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request          #Does something after the request is processed. Allows us to modify the response from our flask back end. This is how we get csrf validation to work with flask backend w/ react frontend
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):                                                               #Loading favicon.
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
