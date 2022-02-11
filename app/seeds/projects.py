from app.models import db, Project

def seed_projects():

    # harry_potter= Project(
    #     title='Harry Potters Fancy Bar Soap',
    #     description='A bar of soap made by Harry Potter himself. Have a fight with they who shall not be named? Clean up with Harry Potters Fancy Bar Soap.',
    #     media_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9Eo7Q35K449TfpC5zBQPYtR0YsB1jvYRw&usqp=CAU',
    #     user_id=1
    # )

    forgetfulness_potion = Project(
        title = 'Forgetfullness potion',
        description = 'This potion causes a memory loss in the drinker.',
        media_url = 'https://res.cloudinary.com/dd9qejhag/image/upload/v1644531967/Potionable/1fa8d7b23d2c9c74c9456f202dbce2ed6989bfb5_hq_xglgot.jpg',
        user_id = 3
    )

    beauty_potion= Project(
        title = 'Beautification potion',
        description = 'A potion that transforms the appearance of the drinker, making them seem attractive, even if they are not.',
        media_url = 'https://res.cloudinary.com/dd9qejhag/image/upload/v1644524388/Potionable/a09dc79612b3e60c56bef5613f64f841_f0mkqq_eldkmm.png',
        user_id = 1
    )

    wit_sharpening_potion = Project(
        title = 'Wit-Sharpening potion',
        description = 'This potions allows the drinker to think more clearly. Intelligence not guaranteed!',
        media_url = 'https://res.cloudinary.com/dd9qejhag/image/upload/v1644526139/Potionable/wit-sharpening-potion_g79vt4.png',
        user_id = 1
    )

    sleeping_potion = Project(
        title = 'Sleeping Potion',
        description = 'This is a potion that allows the drinker to fall almost instantaneously into a deep but temporary sleep',
        media_url = 'https://res.cloudinary.com/dd9qejhag/image/upload/v1644527592/Potionable/Sleeping-draught-reisze_tjnhdp.jpg',
        user_id = 3
    )

    truth_potion = Project(
        title = 'Veritaserum',
        description = 'This is a powerful truth serum. The potion forces the drinker to answer any questions truthfully.',
        media_url = 'https://res.cloudinary.com/dd9qejhag/image/upload/v1644529855/Potionable/veri-resize_mrqzzq.jpg',
        user_id = 1
    )
    Issac_Newton1= Project(
        title='Issac Newtons crystal worm hole generator',
        description="The first think you need is a crystal that has passed through a pregnant sheep",
        media_url= 'https://i.pinimg.com/originals/0b/8a/3a/0b8a3a0f440d3e09c20dff3d085e6faf.jpg',
        user_id=1
    )
    eleusinian_mysteries1= Project(
        title='Eleusinian mysteries magic wine recipe',
        description="The first think you need is grapes",
        media_url= 'https://panacascom.files.wordpress.com/2020/04/eleusinian-mysteries.jpg',
        user_id=1
    )
    alien_spaceship= Project(
        title='Potion from area 51 alien spacecraft',
        description="The first think you need is axis to area 51.",
        media_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85OMMyPnccqiRKb4HcbNJPjybGurCl76o4Q&usqp=CAU",
        user_id=1
    )
    gandoff= Project(
        title="Gandalf's secret brisket recipe",
        description="The first think you need brisket.",
        media_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb8IlLib2b8z9CbJIpKxchxDOnaNIwjj6LQ&usqp=CAU",
        user_id=1
    )
    ron= Project(
        title="Ron Weasley's 'make anyone funny' potion",
        description="The first think you need brisket.",
        media_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUhXl30xtdERimASBSlFEZewY6VlB06Tnlg&usqp=CAU",
        user_id=1
    )
    werewolf = Project(
        title="Hair of the Wolf",
        description="Tired of just staring at the moon? Now you can howl at it.",
        media_url="https://jayengrave.com/images/products/500ml_wolfsbane_the_lost_crow_brown_glass_apothecary_lamp_01.jpg",
        user_id=1
    )
    witcher = Project(
        title="Witcher Switcher",
        description="You might not look as good as Henry Cavill when you drink this, but you can be just as strong.",
        media_url="https://sites.create-cdn.net/siteimages/29/1/0/291047/16/5/1/16517022/500x375.JPG?1529420458",
        user_id=2
    )
    lookYoung = Project(
        title="Ye ol' Benjamin Button",
        description="Want to reverse time? Look good? Well now you can! Stay young!....but not forever (results may vary).",
        media_url="https://i.pinimg.com/736x/c6/1d/d2/c61dd26609caf917026af0291071b796--stay-young-fantasy-world.jpg",
        user_id=1
    )
    lookOld = Project(
        title="Benjie Button Switcharoo",
        description="Tired of people saying you look like you're 10? With this you can be older!! (Drink with caution. Results may vary)",
        media_url="https://images.creativemarket.com/0.1.0/ps/3984821/1820/1213/m1/fpnw/wm1/qunovbtwvq76vcngyl9igahb5nxiitmkhsvix3lahhmjvoxwt6dbplphn0zend7r-.jpg?1518308347&s=2f3d2c4ad861c1228ce25d35cf889ee0",
        user_id=2
    )
    apple = Project(
        title="Snow Whites Apple (Pre-cursed Recipe)",
        description="Drinking a potion can be a drag! Take a bite out of this",
        media_url="https://live.staticflickr.com/5679/30528525832_53994976b4_b.jpg",
        user_id=3
    )



#     db.session.add(harry_potter)
#     db.session.add(harry_potter2)
#     db.session.add(harry_potter3)



    # db.session.add(harry_potter)
    db.session.add(forgetfulness_potion)
    db.session.add(beauty_potion)
    db.session.add(wit_sharpening_potion)
    db.session.add(sleeping_potion)
    db.session.add(truth_potion)
    db.session.add(Issac_Newton1)
    db.session.add(eleusinian_mysteries1)
    db.session.add(alien_spaceship)
    db.session.add(gandoff)
    db.session.add(werewolf)
    db.session.add(witcher)
    db.session.add(lookYoung)
    db.session.add(lookOld)
    db.session.add(apple)

    db.session.commit()


def undo_projects():
    # db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
