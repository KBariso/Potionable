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
    wolf1 = Step(
        title = 'Ingredients',
        body = 'For this potion, you will need: 1 hair of a Northern Rocky Mounain Wolf, 1 hair of user, lavender, soil, water',
        project_id = 10
    )
    wolf2 = Step(
        title = 'Grind',
        body = 'With a mortar and pestle, grind all ingredients into a paste. If it is too dry, the soil is not good',
        project_id = 10
    )
    wolf3 = Step(
        title = 'Mix',
        body = 'Mix paste into water. Dilute until drinkable',
        project_id = 10
    )
    wolf4 = Step(
        title = 'Drink',
        body = 'On a full moon, drink the concoction. The second full moon that comes, be far away from loved ones. WARNING: You must drink ALL of it on one go. It will be disgusting. This is to ensure it enters the body at full potency.',
        project_id = 10
    )
    witcher1 = Step(
        title = 'Items Needed',
        body = 'Veratrum, Stamonium, Hawthorn, and Spurge',
        project_id = 11
    )
    witcher2 = Step(
        title = 'Step 1',
        body = 'Assuming that you have survived getting these items: n\
                boil all the ingredients in a couldron EXCEPT the Stamonium',
        project_id = 11
    )
    witcher3 = Step(
        title = 'Step 2',
        body = 'Strip the Stamonium of its leaves and grind up the flower',
        project_id = 11
    )
    witcher4 = Step(
        title = 'Step 3',
        body = 'Once the initial items have been boiled down to a syrup, mix everything together in a vial',
        project_id = 11
    )
    witcher5 = Step(
        title = 'Step 4',
        body = 'Prepare for your next encounter until you meet a monster, go to war, or a deceitful human. Only then can you drink the potion',
        project_id = 11
    )
    young1 = Step(
        title = 'Items Needed',
        body = 'The first tooth that fell out when you were young, abyssal soul, elixir, and aloe vera',
        project_id = 12
    )
    young2 = Step(
        title = 'First step:',
        body = 'In a small pot, cut up the aloe vera and scrape its aloe into the pot, you will need about 1 cup',
        project_id = 12
    )
    young3 = Step(
        title = 'Second Step:',
        body = 'Take your first tooth, and grind it up to a powder. Mix into the aloe vera',
        project_id = 12
    )
    young4 = Step(
        title = 'Third Step:',
        body = 'With the elixir, fold into the aloe vera. At this point the concoction should be a very thick paste',
        project_id = 12
    )
    young5 = Step(
        title = 'Fourth Step:',
        body = 'This is the most crucial step. The abyssal soul that is trapped in a vial already, you must open and store the paste mixture inside with it. Doing it slowly will possibly cause the soul to escape',
        project_id = 12
    )
    young6 = Step(
        title = 'Final Step',
        body = 'If all is done correctly, shake the vial. You will notice the potion is now a liquid, not a paste. n\
                Caution: DO NOT DRINK ALL AT ONCE. WILL CAUSE PERMANENT AGE REVERSAL',
        project_id = 12
    )
    old1 = Step(
        title = 'Ingredients Needed',
        body = 'A tooth of an ancestor, abyssal soul, elixir, and sand',
        project_id = 13
    )
    old2 = Step(
        title = 'First Step',
        body = 'Take the tooth of your ancestor, and grind it up to a powder. Mix into the sand to create a dry powder',
        project_id = 13
    )
    old3 = Step(
        title = 'Second Step',
        body = 'Mix in elixir with the dry powder',
        project_id = 13
    )
    old4 = Step(
        title = 'Third Step',
        body = 'Boil the ingredients in a couldron',
        project_id = 13
    )
    old5 = Step(
        title = 'Fourth Step',
        body = 'Like the counterpart of this potion, quickly store the boiled items in the vial of the abyssal soul',
        project_id = 13
    )
    old6 = Step(
        title = 'Final Step',
        body = 'Shake the vial and drink with caution. n\
                CAUTION: DO NOT DRINK ALL AT ONCE. WILL TURN YOU INTO A BABY',
        project_id = 13
    )
    apple1 = Step(
        title = 'Ingredients:',
        body = 'Rotted apple, Witching spell, Caramel',
        project_id = 14
    )
    apple2 = Step(
        title = 'Enchantment',
        body = 'Assuming that you have either captured a witch, friends with one, or are one: n\
                In the book of One Trick Witches vol. 8, on page 43, recite the spell in front of the rotted apple',
        project_id = 14
    )
    apple3 = Step(
        title = 'Growth',
        body = 'As soon as the spell is over, the apple will soon be fresh and bright red',
        project_id = 14
    )
    apple4 = Step(
        title = 'Flavor',
        body = 'Dip in caramel for better flavor',
        project_id = 14
    )
    apple5 = Step(
        title = 'Givings',
        body = 'Give to someone to certainly cast them into a spell that will light their tastebuds!',
        project_id = 14
    )
    issac1= Step(
     title = 'The Worms',
     body = 'Go out to the yard and digg up some local worms!',
     project_id = 6
    )
    issac2= Step(
     title = 'The hole',
     body = 'Go out to the yard and dig a hole!',
     project_id = 6
    )
    issac3= Step(
     title = 'The generator',
     body = 'Spin the worms inside the hole that you dug nearing as close as you can to the speed of light. Once the worms are moving fast enough, add olive oil and boom, you have got your self a worm hole!',
     project_id = 6
    )
    eleusinian1= Step(
     title = 'The grapes',
     body = 'Go find some grapes, any grapes will do!',
     project_id = 7
    )
    eleusinian2= Step(
     title = 'The location',
     body = 'You must be in greece!',
     project_id = 7
    )
    eleusinian3= Step(
     title = 'The special sauce',
     body = 'Ferment the grapes over a 6 month period. Once fermented, do all of the usual wine processing stuff. Then, add the special sauce!',
     project_id = 7
    )
    potion1= Step(
     title = 'The location',
     body = 'Go to the location of Area 51!',
     project_id = 8
    )
    potion2= Step(
     title = 'Alien room',
     body = 'Once you are at Area 51, find the alien room!',
     project_id = 8
    )
    potion3= Step(
     title = 'Final step',
     body = 'Once in the alien room, take the potion from the alien!',
     project_id = 8
    )
    gandalf1= Step(
     title = 'The brisket',
     body = 'Go to the store and buy some brisket!',
     project_id = 9
    )
    gandalf2= Step(
     title = 'Step 2',
     body = 'Put the brisket in the oven!',
     project_id = 9
    )
    gandalf3= Step(
     title = 'Special step',
     body = 'Read to the hobbits while the brisket cooks. The laughter from the hobbits will seep into the brisket and give it a unique flavor!',
     project_id = 9
    )





    # db.session.add(hp1)
    # db.session.add(hp2)
    # db.session.add(hp3)
    db.session.add(issac1)
    db.session.add(issac2)
    db.session.add(issac3)
    db.session.add(eleusinian1)
    db.session.add(eleusinian2)
    db.session.add(eleusinian3)
    db.session.add(potion1)
    db.session.add(potion2)
    db.session.add(potion3)
    db.session.add(gandalf1)
    db.session.add(gandalf2)
    db.session.add(gandalf3)
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
    db.session.add(wolf1)
    db.session.add(wolf2)
    db.session.add(wolf3)
    db.session.add(wolf4)
    db.session.add(witcher1)
    db.session.add(witcher2)
    db.session.add(witcher3)
    db.session.add(witcher4)
    db.session.add(witcher5)
    db.session.add(young1)
    db.session.add(young2)
    db.session.add(young3)
    db.session.add(young4)
    db.session.add(young5)
    db.session.add(young6)
    db.session.add(old1)
    db.session.add(old2)
    db.session.add(old3)
    db.session.add(old4)
    db.session.add(old5)
    db.session.add(old6)
    db.session.add(apple1)
    db.session.add(apple2)
    db.session.add(apple3)
    db.session.add(apple4)
    db.session.add(apple5)


    db.session.commit()


def undo_steps():
    # db.session.execute('TRUNCATE steps RESTART IDENTITY CASCADE;')  #Remove everything from the users table and restarts the identity cascade.
    db.session.commit()
