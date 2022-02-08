from app.models import db, Step

def seed_steps():

    harry_potter_soap_steps= Step(
        title='Step 1',
        body='The first step is collect 3 ingredients. Those ingredients are the following: Harry Potters tears, the whiskers of an orange cat, and rose water. ',
        project_id=1,
        title='Step 2',
        body='The second step is to boil the ingredients for 200 hours.',
        project_id=1,
        title='Step 3',
        body='200 hours. The last step is pour the liquid into the mold you choose and let solidify.'
        project_id=1
)

    db.session.add(harry_potter_soap_steps)

    db.session.commit()


def undo_steps():
    # db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
