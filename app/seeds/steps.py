from app.models import db, Step

def seed_steps():

    hp1= Step(
        title='Step 1',
        body='The first step is collect 3 ingredients. Those ingredients are the following: Harry Potters tears, the whiskers of an orange cat, and rose water. ',
        project_id=1,

)
    hp2= Step(
        title='Step 2',
        body='The second step is to sing Elvis songs ',
        project_id=1,

)
    hp3= Step(
        title='Step 3',
        body='The second step is to take a nap ',
        project_id=3,

)

    db.session.add(hp1)
    db.session.add(hp2)
    db.session.add(hp3)

    db.session.commit()


def undo_steps():
    # db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
