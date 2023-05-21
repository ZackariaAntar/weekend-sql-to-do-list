// sourcing in libraries and router module.

const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require("./routes/task.router");

// configuring express to use body-parser
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// configuring express path to router module.
app.use("/task", taskRouter);

// configuring express to serve static files within the public folder of this project.
app.use(express.static("server/public"));

// configuring port to broadcast from.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("listening on port", PORT);
});
