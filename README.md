# BNTA Frontend Project

This was a seven day group project as part of the BNTA bootcamp where we had to create a frontend application using a backend API that was created from another group during the BNTA Backend Project.

## The API

The API revolves around the Dungeon and Dragon's game and stores information on players, spells, classes, schools, etc.
<br>
It allows users to perform CRUD operations on a database to store and manipulate information.
<br>
More information about the API and pathways/endpoints can be found [here](http://...).

## The Planning

On the first day (Friday 26th December 2021) we spent the whole day planning out our design using the website (Miro) and assigning tasks using Github's built in projects.
<br>
For modelling, we created an outline of how our design would look like, and the key features that each section would have.
<br>
Before the end of the work day, we would all come together in a group call and talk about what we had done and how we would move forward with the project. After, we would plan our next goals around what we needed to do next.

## The challenges we faced

Player Tracker Page - For the player tracker page, we faced some challenges revolving around being able to add a particular spell into a players list of current spells/spellbook. The idea was to use a post method to add the spell into the players spellbook however it wasnt possible to access the players id prop. As a solution, we got around it by using a form, however when there was an error with the code not being able to recognise the fetch request as a function. Due to time constraints of the project, we didn't manage to fix this bug. Another issue with the player tracker page is that the API doesn't support a delete feature for players. As a solution, there is a button to track whether a player is dead or alive during the period of the game. 

List of all spells page - (Vinh)

Homepage - (Rashid)

## Key Features:

Application fetches data from API and renders it on the page.
User can add players to track their dnd game, search through all dnd spells, retrieve a list of current players spells(spellbook) and a dice roller to complement game playing.
Light and dark mode on every page.
Mobile friendly, responsive design for each page of the application.
React router(V6) linking all the pages together. 

## Future Implementations:

Currently the dice roller has an even chance to get every number so in the future with more time, possibly a different function can be used to get more realistic  and fair dice roll. 

