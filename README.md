# To-Do List App

## Description
_Base mode duration: 4 hours_

A full stack web app that allows a user to create and manipulate a to-do list, by adding new tasks, marking tasks as complete, and/or deleting tasks as desired.

### Prerequisites
* [NODE.js](https://nodejs.org/en)
* [Postgres](https://www.postgresql.org/)
    * a [Postgres Client](https://wiki.postgresql.org/wiki/PostgreSQL_Clients) like [Postico](https://eggerapps.at/postico/v1.php) _(optional but helpful for continuity)_.

## Installation
1. Create a database named `weekend-to-do-app`
    * use the `CREATE TABLE` query _(lines 2-7)_ of database.sql file to populate the table for this app. The project is built on [Postgres](https://www.postgresql.org/download/), so make sure to have that installed. I used [Postico](https://eggerapps.at/postico/v1.php) to create the inital query.
2. From your terminal run `npm install` in this project's root directory.
    * Then run `npm start` to start your server.

### Usage
1. Open a web browser and enter **`http://localhost:5000`** in the address bar.
2. Enter a task in the input field that you want to add to your to-do list.
3. Click the ✅ button to mark a task as complete.
4. Click the ❌ button to remove a task from the list.

## Acknowledgement
* Huge thanks to [Liz Kerber](https://github.com/emkerber), [Emma Stout](https://github.com/emmastout01), and [Dane Smith](https://github.com/DoctorHowser) for sharing their knowledge and preparing me to make this application a reality, and to the community of staff, partners, alumni, and mentors from [Prime Digital Academy](www.primeacademy.io) who have made my learning experience possible.

* To my fellow [Diamond Cohort](https://github.com/orgs/PrimeAcademy/teams/diamond) members for their support and daily commitment to growth. Special thanks to [Isaac Faulkner](https://github.com/50hp) for his support in conceptualizing how to append unique table row ids.


