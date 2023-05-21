// sourcing in the pg library
const pg = require("pg");
let pool;
// configuring DB communication channel to allow pg to use either hosted or local databases.
if (process.env.DATABASE_URL) {
	pool = new pg.Pool({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false,
		},
	});
} else {
	pool = new pg.Pool({
		host: "localhost",
		port: 5432,
		database: "weekend-to-do-app",
	});
}
// exporting pool module so it can be sourced into the task.router.js module.
module.exports = pool;
