from .db import db
from werkzeug.security import generate_password_hash, check_password_hash       #password hasher/unhasher.
from flask_login import UserMixin


class User(db.Model, UserMixin):        #Usermixin allows us to use the current user (self)
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)             #Becuase we store the hashed version of their password into the database.

    @property
    def password(self):
        return self.hashed_password

    @password.setter                #when setting a password, we go through the password property   Getter erturns the hashed password. Setter sets it.
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)     #checks password, used in the form. check_password_hash used with the security import.

    def to_dict(self):          #Put on every model class you have.
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
