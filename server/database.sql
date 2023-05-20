-- Create a Database
-- Be sure to create a new database through Postico. Use the name weekend-to-do-app. You will need to use this name in your database connection configuration on your server.

-- Database Structure
-- Please include a database.sql text file in your repo that includes all of your CREATE TABLE queries. This is so we can re-create your database while testing your app.

CREATE TABLE "weekend-to-do-app" (
    "id" SERIAL PRIMARY KEY,
    "task_body" VARCHAR (250) NOT NULL,
    "status" BOOLEAN DEFAULT FALSE,
    "time_completed" DATE
    );


SELECT * FROM "weekend-to-do-app" ORDER BY "id";













































