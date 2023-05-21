$(document).ready(onReady) // on page load run onReady function.


function onReady(){
	getTasks(); // run getTasks to bring any data from DB client side and render it to the DOM.
	$("#submit").on("click", postTask); // registering the #submit button with the postTask event.
	$("#display-tasks").on("click", ".edit-btn", updateTask); // registering the .edit-btn buttons in the #display-tasks table with the updateTask event.
	$("#display-tasks").on("click", ".delete-btn", deleteTask); // registering the .delete-btn buttons in the #display-tasks table with the deleteTask event.
}

function getTasks(){
	// using ajax along the /task route to request data stored server-side and make it available to the client-side.
	$.ajax({
		method: "GET",
		url: "/task",
	})
		.then(function (response) {
            // once data is recieved from server-side make it available in the renderToDOM function.
			console.log("got tasks");
			renderToDOM(response);
		})
		.catch(function (error) {
			console.log("Whoops, failed to get tasks", error);
		});
}

function postTask(){
    // using ajax to bring the client-side user generated data along the /task route to the server where it can be stored as permanent data on the DB.
    const taskToAdd = $('#task-body').val()
    $.ajax({
		method: "POST",
		url: "/task",
        data: {task:taskToAdd},

	})
		.then(function (response) {
            // after data is successfully stored in the database, run the getTasks function so it can be rendered to the DOM,
            // and display instructional blurb to user to guide them on how to use the interactive elements in the table.
			console.log("added tasks");
			getTasks();
             $("#info").text(
					"Click the check to mark your task as complete, or click the X to delete your task from the list."
				);
		})
		.catch(function (error) {
			console.log("Whoops, failed to post tasks", error);
		});
}

function updateTask(){
    // using ajax to communicate server-side that the user wants to edit a specific existing entry in the DB by using that entry's DB id value.
    let targetId =$(this).closest("tr").data("id")
    $.ajax({
        method: 'PUT',
        url:`/task/${targetId}`
    }).then(function(response){
        // after entry has been successfully updated in the DB, run getTasks function to render the change in state.
        getTasks()
    }).catch(function (error){
        console.log('Error', error);

    })


}

function deleteTask(){
	// using ajax to communicate server-side that the user wants to delete a specific existing entry in the DB by using that entry's DB id value.
	let targetId = $(this).closest("tr").data("id");
	$.ajax({
		method: "DELETE",
		url: `/task/${targetId}`,
	})
		.then(function (response) {
			// after entry has been successfully deleted in the DB, run getTasks function to render the change in state.
			getTasks();
		})
		.catch(function (error) {
			console.log("Error", error);
		});
}

function renderToDOM(storedTasks){
	$("#display-tasks").empty(); // clearing the table of its contents before elements are appended allows for elements to be appended to the DOM by looping over the data returned from the DB.
	$("#task-body").val(""); // clear the user input field.

	// using a for of loop to append elements to the DOM as data structure recieved from the DB is as an array of objects
	for (let task of storedTasks) {
		// applying DB entry id value to each table row dynamically with jQuery enabling each table row on the DOM to be targeted by its element id.
		// data received from the DB uses column headings for object properties
		$("#display-tasks").append(`
        <tr id=${task.id} data-id=${task.id}>
            <td>${task.task_body}</td>
            <td><button class="edit-btn">✅</button></td>
            <td><button class="delete-btn">❌</button></td>
        </tr>
        `);
		if (task.status === true) {
			$(`#${task.id}`).css("background-color", "green");
		}
	}
}



// Stretch Goals
// For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands.
// Each branch will be merged into main using --no-ff. This will allow us to see that you branched your feature when you turn in your code.

// feature-styling-bootstrap
// [ ] Add Bootstrap to the front end and style it up!
// Buttons -- make the creation buttons and completion buttons green and the delete red.
// Inputs -- make your text inputs styled in the bootstrap way
// Responsive -- make your app responsive to different screen sizes -- check out the Layout section

// feature-confirm-delete
// [ ] In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task.
// Some styled options are Bootstrap Modal or Sweet Alerts: Use the CDN option.


// feature-ordering-task-query
// [ ] Research Query Params to have the request reverse the order of the returned todos.

// feature-time-completed
// [ ] Add the ability to record when a task was completed. Show the completed date on the frontend in a pretty format.