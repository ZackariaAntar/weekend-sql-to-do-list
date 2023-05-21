// sourcing in express library and pool module and configuring express routing.
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// server side logic of GET request from client along the /task path
router.get("/", (req, res) => {
	// storing the SQL command to capture all rows of data stored on the DB in a queryText variable.
	let queryText = `SELECT * FROM "weekend-to-do-app" ORDER BY "id";`;
	// using pg as "pool" to communicate the queryText command to the DB.
	pool.query(queryText)
		.then((result) => {
			// after successful query is made, make the data returned by the pool query available along the /task path
			res.send(result.rows);
		})
		.catch((error) => {
			console.log("Opps", error);
			res.sendStatus(500);
		});
});

// establishing /task/:id path to access DB row by its DB id value.
router.get("/:id", (req, res) => {
	// storing the id used as input in the /task/:id path for GET requests in an idToGet variable.
	let idToGet = req.params.id;
	// storing the SQL command to capture a row of data stored on the DB by its unique DB id in a queryText variable.
	let queryText = `SELECT * FROM "weekend-to-do-app" WHERE "id" = $1;`;
	// using pg as "pool" to communicate the queryText command to the DB and assigning $1 with a protected value using "[idToGet]" to prevent SQL injection.
	pool.query(queryText, [idToGet]).then((result) => {
		// after successful query is made, make the data returned by the pool query available along the /task/:id path
		console.log("got ids");
		res.send(result.rows);
	});
});

// server side logic of POST request from client along the /task path
router.post("/", (req, res) => {
	// storing the client side user input data in a taskObject variable.
	let taskObj = req.body.task;
	// storing the SQL command to add the client side user input data intended to be stored on the DB in a queryText variable.
	let queryText = `INSERT INTO "weekend-to-do-app" ("task_body")
                   VALUES ($1);
                   `;
	// using pg as "pool" to communicate the queryText command to the DB and assigning $1 with a protected value using "[taskObj]" to prevent SQL injection.
	pool.query(queryText, [taskObj])
		.then((result) => {
			// after user input data has been successfully added to the DB, return a 201 status for successfully created.
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
});
// server side logic of DELETE request from client along the /task/:id path
router.delete("/:id", (req, res) => {
	// storing the id used as input in the /task/:id path for DELETE requests in an idToDelete variable.
	let idToDelete = req.params.id;
	// storing the SQL command to delete a specific row of data stored on the DB based on its DB id in a queryText variable.
	let queryText = `DELETE FROM "weekend-to-do-app" WHERE "id" = $1`;
	// using pg as "pool" to communicate the queryText command to the DB and assigning $1 with a protected value using "[idToDelete]" to prevent SQL injection.
	pool.query(queryText, [idToDelete])
		.then((result) => {
			// upon success return a 200 status to client.
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
});
// server side logic of PUT request from client along the /task/:id path
router.put("/:id", (req, res) => {
	// storing the id used as input in the /task/:id path for PUT requests in an idToEdit variable.
	let idToEdit = req.params.id;
	// storing the SQL command to update the value of a specific cell in a row of data stored on the DB by targeting that row's DB id and cell's column header in a queryText variable.
	let queryText = `UPDATE "weekend-to-do-app" SET "status" = TRUE WHERE "id" = $1`;
	// using pg as "pool" to communicate the queryText command to the DB and assigning $1 with a protected value using "[idToEdit]" to prevent SQL injection.
	pool.query(queryText, [idToEdit])
		.then((result) => {
			// after targeted data has been successfully updated on the DB, return a 201 status for successfully created.
			res.sendStatus(201);
		})
		.catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
});

// export the router module to make it available to be sourced in on server.js.
module.exports = router;
