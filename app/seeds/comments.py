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
    wolf1= Comment(
        comment="If I'm not getting any sleep cuz of these dogs, they're not getting any sleep either! It's my turn!!!",
        user_id=2,
        project_id=10
    )
    wolf2 = Comment(
        comment="Instructions unclear, I now turn into a chihuahua on a half moon",
        user_id=3,
        project_id=10
    )
    witcher1 = Comment(
        comment="WHY DID THIS NOT TURN ME INTO HENRY CAVILL!!!!",
        user_id=3,
        project_id=11
    )
    witcher2 = Comment(
        comment="The description literally says it won't turn you into Henry Cavill smh",
        user_id=1,
        project_id=11
    )
    witcher3 = Comment(
        comment="I DONT CARE!!! IT SHOULD'VE BEEN MORE EXPLICIT!!!",
        user_id=3,
        project_id=11
    )
    young1 = Comment(
        comment="THE GREATEST POTION!!!! IM SO BEAUTIFUL!!!!!",
        user_id=2,
        project_id=12
    )
    apple1 = Comment(
        comment="Highly recommend! My husband is obsessed!!",
        user_id=1,
        project_id=14
    )
    apple2 = Comment(
        comment="I gave this to a friend and she definitely wants the recipe!",
        user_id=2,
        project_id=14
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
    db.session.add(wolf1)
    db.session.add(wolf2)
    db.session.add(wolf1)
    db.session.add(wolf1)
    db.session.add(witcher1)
    db.session.add(witcher2)
    db.session.add(witcher3)
    db.session.add(young1)
    db.session.add(apple1)
    db.session.add(apple2)



    db.session.commit()


def undo_comments():
    # db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
