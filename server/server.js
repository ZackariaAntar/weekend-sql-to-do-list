const express = require("express");
const bodyParser = require("body-parser");
const taskRouter = require('./routes/task.router')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/task", taskRouter);

app.use(express.static("server/public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("listening on port", PORT);
});

