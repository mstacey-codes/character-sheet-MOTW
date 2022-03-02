# Monster of the Week - Interactive Character Sheet

Using the **Monster of the Week Interactive Character Sheet** the game Monster of the Week is more accessible than ever! Using the **Monster of the Week Interactive Character Sheet** a player can fill out a form to create a new character from any of the original hunter archetypes; recording stats, looks, moves, and more along the way! Once a character is created, the player will have access to their interactive character sheet which allows users to make rolls according to their stats. The clean interface of the character sheet is designed to only show the player the relevant information they require for the character they have created.

Please note, the **Monster of the Week Interactive Character Sheet** is currently a work in progress. Features are constantly being developed to further comply with the rules and sequence of the game. Currently the ability to increment health, experience, and luck is under way. Specific forms to log character traits are also being developed.

This project was developed in Javascript, React, NodeJs, and Express with a PostGres database designed using Knex and Objection. It was developed after completing the core curriculum at Launch Academy, a boot-camp in Boston with a comprehensive curriculum to teach the basics of Javascript and Web App development. A minimum viable product was produced in a two week period, and I have been adding onto the project since then.

The live version is currently available at [motw-character-sheet.herokuapp.com](https://motw-character-sheet.herokuapp.com)

## Running the App

**Monster of the Week Interactive Character Sheet** was created using Node 14.15. Please make sure you have the proper packages installed using

> yarn install

The database is designed to work with Postgres/SQL. Create the database using

> $ createdb pastabilities_development

Run the following commands in your server folder to populate the database with some of the necessary data and some sample user profiles:

> $ yarn migrate:latest

> $ yarn db:seed

To run the website, make sure you are in your root file and run:

> $ yarn run dev

The home page will automatically render when you navigate to your https://localhost:3000

Once you have properly seeded the database you may log in with the following credentials:

username: poppy@gmail.com
password: poppy

username: jinjo@gmail.com
password: jinjo

### Licenses:

This project was created as a portfolio piece for Launch Academy. This project is licensed under the terms of the MIT license.

### Acknowledgements:

Monster of the Week is copyrighted by Evil Hat Productions, LLC and Generic Games. Please support the official release in whatever ways you can. Thanks to the MoTW API by Sam McCall. Special thanks to Michael Sands for creating this game.

Thanks to the players of the **Nothing Normal in Nimbus** campaign that I was part of. Playing that game with you gave me a lot inspiration for a pretty wild side-project.
