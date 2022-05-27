D&D Dice Roll
You're playing Dungeons and Dragons, but you accidentally dropped your 20-sided die underneath the couch before the final battle, and there's a tangled, sticky mess of Cheeto dust, maple syrup (don't ask), and cat hair down there, so there's no way you're picking that thing up.

No worries! You can just go with the next best solution: writing a program in JavaScript that can figure out your attack rolls for you!

In your js-practice folder, touch a file called dungeons.js.
In your index.html file, change the src or the JavaScript to dungeons.js.
Define a function called fight. It doesn't need to take any parameters.
Use prompt() to ask the user the name of the monster they're fighting. Save it to a variable called monster.
Do the same with the hero's name and save it to a variable called hero.
Create variables for monsterHealth and heroHealth. Set them both to 50.
Using a while loop, have the hero and monster attack each other in rounds until one of them has a health at or below 0.
Using Math.random(), generate a random number between 1 and 20 to represent the hero's dice roll. Save that number to a variable.
Do the same for the monster.
To decide if the hero and monster hit each other and for how much damage, using the following criteria:
If an attacker rolls a 1 or 2, they accidentally stab themselves for 5 damage.
If an attacker rolls between 3 and 10, they miss and do 0 damage.
If an attacker rolls between 11 and 18, they hit and do 10 damage.
If an attacker rolls a 19 or 20, they get a critical hit and do 20 damage.
Use alert() with string interpolation after each attack to inform the user what happened and how much of each fighter's health remains.
Continue the battle until one of the fighters' health has been reduced to zero. When this happens, use string interpolation to declare the winner and loser by name.
Bonus: Add an additional condition in case they kill each other on the final blow!
Below your newly defined function, invoke fight().
Go to the browser and run the file you just created.
BONUS

After each battle, ask if the user if they'd like to play again.
If they answer "yes" restart the game,
If they type "no", thank them for playing and end the game.
If they type anything else, ask them again.
The end result should look something like this:

Name your hero:
David Magicbeard

Name the monster:
Hungover Bri-Guy

Hit! David Magicbeard strikes Hungover Bri-Guy!
Critical failure! Hungover Bri-Guy accidentally stabs self!
David Magicbeard has 50 hitpoints left. Drake on Coffee has 35 hitpoints left.

David Magicbeard misses!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 40 hitpoints left. Drake on Coffee has 35 hitpoints left.

Hit! David Magicbeard strikes Hungover Bri-Guy!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 30 hitpoints left. Drake on Coffee has 25 hitpoints left.

Critical hit! David Magicbeard does double damage!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 20 hitpoints left. Drake on Coffee has 5 hitpoints left.

Hit! David Magicbeard strikes Hungover Bri-Guy!
Hit! Hungover Bri-Guy strikes David Magicbeard!
David Magicbeard has 10 hitpoints left. Drake on Coffee has -5 hitpoints left.

Hungover Bri-Guy has lost to David Magicbeard. The world is safe!... for now.
