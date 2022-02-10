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
        project_id=1,

)

    beauty1 = Step(
        title = 'First, gather the necessary ingredients',
        body = 'For this beautificaiton potion we will need: Fairy wings, Morning dew, A fresh rose, Lady\'s Mantle, Unicorn hair, Ginger roots, Boomslang skin',
        project_id = 2
    )

    beauty2 = Step(
        title = 'Now, let\'s start mixing our ingredients!',
        body = 'We will begin by grinding the wings of three fairies into our cauldron. Don\'t worry! We\'re not judging how you obtained these fairy wings.',
        project_id = 2
    )

    beauty3 = Step(
        title = 'Continue adding new ingredients',
        body = 'Next, we\'ll start stirring our cauldron slowly while adding freshly gathered morning dew. Once the morning dew is added, begin stirring vigorously while applying heat!',
        project_id = 2
    )

    beauty4 = Step(
        title = 'More ingredients!',
        body = 'Now we must gather exactly seven petals from our fresh rose. Be careful, these can be quite sharp! Now let\'s add our seven rose petals to the cauldron.',
        project_id = 2
    )

    beauty5 = Step(
        title = 'Final steps!',
        body = ' Now add dried Lady\'s mantle, a lock of unicorn hair, and powdered ginger root to the cauldron. Stir while adding each ingredient and apply heat! Lastly, wave your wand over the cauldron to finish this potion! ',
        project_id = 2
    )

    beauty6 = Step(
        title = 'Effects',
        body = 'Remember, these effects are temporary!',
        project_id = 2
    )

    wit1 = Step(
        title = 'Gather ingredients',
        body = 'To make this potion we will need the following items: Ground scarab beetles, cut ginger roots, armadillo bile, and new spleens',
        project_id = 3
    )

    wit2 = Step(
        title = 'Let\'s start mixing!',
        body = 'This potion is easy to make! You just mix in ingredients until it changes colors! Start by adding enough ginger root until it is lime green',
        project_id = 3
    )

    wit3 = Step(
        title = 'Follow the colors!',
        body = 'Mix in enough armadillo bile until your potion looks blue. Next, add in ground scarab beetles until it\'s red',
        project_id = 3
    )

    wit4 = Step(
        title = 'Remix! Same ingredients, different color!',
        body = 'Now let\'s add armadillo bile again until the red liquid becomes yellow! Make sure it\'s yellow, not dark green!',
        project_id = 3
    )

    wit5 = Step(
        title = 'We\'re almost there!',
        body = 'Add ginger root again until the potion is lime green. Now let\'s add armadillo bile again until the potion is purple!',
        project_id = 3
    )

    wit6 = Step(
        title = 'Enjoy!',
        body = 'Now go enjoy beind productive with your clear thinking!',
        project_id = 3
    )

    sleep1 = Step(
        title = 'Needed materials',
        body = 'Wormwood, powdered Asphodel petals, flobberworm mucus, sophophorous bean, valerian springs, nettle essence',
        project_id = 4
    )

    sleep2 = Step(
        title = 'Let\'s get started!',
        body = 'Crush the wormwood and add it to your cauldron. Begin stirring slowly! Now add your chopped valerian while adding high heat',
        project_id = 4
    )

    sleep3 = Step(
        title = 'This step can get messy',
        body = 'You will need to juice the Flobberworm to get two blob of mucus, YUCK! Now add that mucus to your cauldron',
        project_id = 4
    )

    sleep4 = Step(
        title = 'Watch your heat levels!',
        body = 'Start stirring vigorously, lower your heat levels, and stir some more! While quickly stirring, chop the sopophorous bean and add it to the cauldron. Return to normal heat',
        project_id = 4
    )

    sleep5 = Step(
        title = 'Almost done!',
        body = 'Add a sprinkle of powdered asphodel petals and a dash of essence of nettle. Heat the potion one final time, then stir slowly.',
        project_id = 4
    )

    sleep6 = Step(
        title = 'Final step!',
        body = 'Wave your wand over the cauldron to complete this potion. Now enjoy your much needed nap!',
        project_id = 4
    )

    truth1 = Step(
        title = 'Ingredients needed',
        body = 'This is a very difficult potion! You will need: Standard potioning water, ptolemy, powdered moonstone, adder\'s fork, jobberknoll feathers, sopophorous beans',
        project_id = 5
    )

    truth2 = Step(
        title = 'Follow closely!',
        body = 'You must start this on the day of the new moon. Pour standard potioning water into a cauldron and bring it to a simmer',
        project_id = 5
    )

    truth3 = Step(
        title = 'Counter clockwise!',
        body = 'Pour a vial of ptolemy into the cauldron with an counter-clockwise motion and allow it to simmer for ten minutes.',
        project_id = 5
    )

    truth4 = Step(
        title = 'We\'re halfway there',
        body = 'While the mixture is simmering, carefully slice Adder\'s fork lengthwise to divide the tongue into halves and drop into the cauldron',
        project_id = 5
    )

    truth5 = Step(
        title = 'Up the heat!',
        body = 'Bring your mixture to a rolling boil. Drop 12 Jobberknoll feathers into the cauldron, stirring clockwise one time between each feather',
        project_id = 5
    )

    truth6 = Step(
        title = 'Remove cauldron from flame',
        body = 'Once the cauldron reaches a rolling boil remove it from the flame. Now quickly crush sopophorous beans and add to the mixture',
        project_id = 5
    )

    truth7 = Step(
        title = 'Maturation',
        body = 'Allow the mixture to cool before straining into a bottle for maturation. Leave the bottle in a dark, cool location for the duration of the cycle',
        project_id = 5
    )

    truth7 = Step(
        title = 'Full moon',
        body = 'On the night of the full moon, place the bottle in the moonlight to abosrb the light. If you cannot follow this last step, the potency will suffer',
        project_id = 5
    )

    truth8 = Step(
        title = 'All done!',
        body = 'Now go enjoy getting the truth out of people!',
        project_id = 5
    )

    forget1 = Step(
        title = 'Gather ingredients',
        body = 'For this potion we will need: Lethe river water, Valerian sprigs, Standard Ingredient(dried herbs), mistletoe berries.',
        project_id = 1
    )

    forget2 = Step(
        title = 'Very easy potion!',
        body = 'Begin by adding 2 drops of Lether river water to your cauldron and gently heat for 20 seconds.',
        project_id = 1
    )

    forget3 = Step(
        title = 'Add and stir',
        body = 'Add 2 Valerian springs into your cauldron and stir 3 times, clockwise.',
        project_id = 1
    )

    forget3 = Step(
        title = 'Wave and wait!',
        body = 'Wave your wand around the cauldron and leave it to brew for 60 minutes.',
        project_id = 1
    )

    forget4 = Step(
        title = 'Time to make mortar',
        body = 'Add 2 measures of Standard ingredient and 4 mistletoe berries to the mortar.',
        project_id = 1
    )

    forget5 = Step(
        title = 'Crush and mix',
        body = 'Crush the mortar into a fine powder using the pestle. Add 2 pinches of the crushed mixture to your cauldron.',
        project_id = 1
    )

    forget6 = Step(
        title = 'Final steps',
        body = 'Stir your mixture 5 times, counter-clockwise. Wave your wand around the cauldron to complete the potion. You\'re done!',
        project_id = 1
    )



    # db.session.add(hp1)
    # db.session.add(hp2)
    # db.session.add(hp3)
    db.session.add(beauty1)
    db.session.add(beauty2)
    db.session.add(beauty3)
    db.session.add(beauty4)
    db.session.add(beauty5)
    db.session.add(beauty6)
    db.session.add(wit1)
    db.session.add(wit2)
    db.session.add(wit3)
    db.session.add(wit4)
    db.session.add(wit5)
    db.session.add(wit6)
    db.session.add(sleep1)
    db.session.add(sleep2)
    db.session.add(sleep3)
    db.session.add(sleep4)
    db.session.add(sleep5)
    db.session.add(sleep6)
    db.session.add(truth1)
    db.session.add(truth2)
    db.session.add(truth3)
    db.session.add(truth4)
    db.session.add(truth5)
    db.session.add(truth6)
    db.session.add(truth7)
    db.session.add(truth8)
    db.session.add(forget1)
    db.session.add(forget2)
    db.session.add(forget3)
    db.session.add(forget4)
    db.session.add(forget5)
    db.session.add(forget6)

    db.session.commit()


def undo_steps():
    # db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
