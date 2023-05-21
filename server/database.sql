------------ SQL command used to create database table for this project. ------------
CREATE TABLE "weekend-to-do-app" (
    "id" SERIAL PRIMARY KEY,
    "task_body" VARCHAR (250) NOT NULL,
    "status" BOOLEAN DEFAULT FALSE,
    "time_completed" DATE
    );
-------------------------------------------------------------------------------------

------- compilation of pg queries used in the router module of this project. -------
SELECT * FROM "weekend-to-do-app" ORDER BY "id";

SELECT * FROM "weekend-to-do-app" WHERE "id" = $1;

INSERT INTO "weekend-to-do-app" ("task_body")
VALUES ($1);

DELETE FROM "weekend-to-do-app" WHERE "id" = $1;

UPDATE "weekend-to-do-app" SET "status" = TRUE WHERE "id" = $1;
-------------------------------------------------------------------------------------