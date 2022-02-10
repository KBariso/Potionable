from app.models import db, Comment


def seed_comments():
    # comment1 = Comment(
    #     comment="This soap works wonders! Made me speak to snakes for a day!!",
    #     user_id=2,
    #     project_id=1
    # )
    # comment2 = Comment(
    #     comment="This made me LevioSAHHED not Leviosa'd!! Would not recommend!!",
    #     user_id=3,
    #     project_id=1
    # )

    beauty_comment1 = Comment(
        comment="Be careful when using this! It eventually wears off. I was so embarrassed!",
        user_id=2,
        project_id=2
    )

    beauty_comment2 = Comment(
        comment="Works great! Almost too well!",
        user_id=1,
        project_id=2
    )

    beauty_comment3 = Comment(
        comment="Where did you get fairy wings from!?",
        user_id=2,
        project_id=2
    )

    wit_comment1 = Comment(
        comment="Works great! I used this during my a/A assessment!",
        user_id=1,
        project_id=3
    )

    sleep_comment1 = Comment(
        comment="I love making this before long flights!",
        user_id=1,
        project_id=4
    )

    truth_comment1 = Comment(
        comment="This potion always makes me say something that I shouldn't!!!",
        user_id=2,
        project_id=5
    )

    truth_comment2 = Comment(
        comment="As a prosecutor, this makes my work so much easier!",
        user_id=3,
        project_id=5
    )

    forget_comment1 = Comment(
        comment="I definitely don\'t need this potion! I already forget everything.",
        user_id=2,
        project_id=1
    )

    forget_comment2 = Comment(
        comment="This potion was so easy to make!",
        user_id=1,
        project_id=1
    )





    # db.session.add(comment1)
    # db.session.add(comment2)
    db.session.add(beauty_comment1)
    db.session.add(beauty_comment2)
    db.session.add(beauty_comment3)
    db.session.add(wit_comment1)
    db.session.add(sleep_comment1)
    db.session.add(truth_comment1)
    db.session.add(truth_comment2)
    db.session.add(forget_comment1)
    db.session.add(forget_comment2)


    db.session.commit()


def undo_comments():
    # db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
