from app.models import db, Project

def seed_projects():

harry_potter= Project(
    title='Harry Potters Fancy Bar Soap',
    description='A bar of soap made by Harry Potter himself. Have a fight with they who shall not be named? Clean up with Harry Potters Fancy Bar Soap.',
    media_url= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw9Eo7Q35K449TfpC5zBQPYtR0YsB1jvYRw&usqp=CAU',
    user_id=1
)
