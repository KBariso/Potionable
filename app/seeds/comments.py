from app.models import db, Comment


def seed_comments():
    comment1 = Comment(
        comment="This soap works wonders! Made me speak to snakes for a day!!",
        user_id=2,
        project_id=1
    )
    comment2 = Comment(
        comment="This made me LevioSAHHED not Leviosa'd!! Would not recommend!!",
        user_id=3,
        project_id=1
    )


    db.session.add(comment1)
    db.session.add(comment2)


    db.session.commit()


def undo_projects():
    # db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
