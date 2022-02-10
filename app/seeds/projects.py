from app.models import db, Project

def seed_projects():

    harry_potter= Project(
        title='Harry Potters Fancy Bar Soap',
        description='A bar of soap made by Harry Potter himself. Have a fight with they who shall not be named? Clean up with Harry Potters Fancy Bar Soap.',
        media_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9Eo7Q35K449TfpC5zBQPYtR0YsB1jvYRw&usqp=CAU',
        user_id=1
    )
    harry_potter2= Project(
        title='Harry Potters Fancy Bar Soap dupe',
        description='A bar of soap made by Harry Potter himself. Have a fight with they who shall not be named? Clean up with Harry Potters Fancy Bar Soap.',
        media_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9Eo7Q35K449TfpC5zBQPYtR0YsB1jvYRw&usqp=CAU',
        user_id=1
    )
    harry_potter3= Project(
        title='Harry Potters Fancy Bar Soap dupe again',
        description='A bar of soap made by Harry Potter himself. Have a fight with they who shall not be named? Clean up with Harry Potters Fancy Bar Soap.',
        media_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9Eo7Q35K449TfpC5zBQPYtR0YsB1jvYRw&usqp=CAU',
        user_id=1
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


    db.session.add(harry_potter)
    db.session.add(harry_potter2)
    db.session.add(harry_potter3)
    db.session.add(Issac_Newton1)
    db.session.add(eleusinian_mysteries1)
    db.session.add(alien_spaceship)
    db.session.add(gandoff)
    db.session.add(ron)

    db.session.commit()


def undo_projects():
    # db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
