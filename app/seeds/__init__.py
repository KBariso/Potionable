from flask.cli import AppGroup #This is where we implement our seed command. flask runner comes with a command interface.
from .users import seed_users, undo_users
from .projects import seed_projects, undo_projects

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')            #Initializing the class with seed => Flask seed ___


# Creates the `flask seed all` command
@seed_commands.command('all')               #Can cause this to seed all by adding seed_comments() etc etc
def seed():
    seed_users()
    seed_projects()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_projects()
    # Add other undo functions here

