// !!!! /task ROUTE!!

$(document).ready(onReady)


function onReady(){
    getTasks();
    $('#submit').on('click', postTask)
    $("#display-tasks").on('click', '.edit-btn', updateTask);
    $("#display-tasks").on('click', '.delete-btn', deleteTask);


}

function getTasks(){
    $.ajax({
        method: 'GET',
        url: '/task'
    }).then(function(response){
        console.log('got tasks');
        renderToDOM(response)
    }).catch(function(error){
        console.log('Whoops, failed to get tasks', error);
    })

}

function postTask(){
    const taskToAdd = $('#task-body').val()
    $.ajax({
		method: "POST",
		url: "/task",
        data: {task:taskToAdd},

	})
		.then(function (response) {
			console.log("added tasks");
			getTasks();
		})
		.catch(function (error) {
			console.log("Whoops, failed to post tasks", error);
		});
}

function updateTask(){
    let targetId =$(this).closest("tr").data("id")

    $.ajax({
        method: 'PUT',
        url:`/task/${targetId}`
    }).then(function(response){
        getTasks()
    }).catch(function (error){
        console.log('Error', error);

    })


}

function deleteTask(){
    let targetId = $(this).closest("tr").data("id");
    $.ajax({
        method: "DELETE",
        url: `/task/${targetId}`,
    })
        .then(function (response) {
            getTasks();
        })
        .catch(function (error) {
            console.log("Error", error);
        });



}

function renderToDOM(storedTasks){
    $("#display-tasks").empty();
    $("#task-body").val('');
    for (let task of storedTasks){
        $("#display-tasks").append(`
        <tr class="task-row" data-id=${task.id}>
        <td>${task.task_body}</td>
        <td><button class="edit-btn">✅</button><td>
        <td><button class="delete-btn">❌</button><td>
        </tr>
        `);
        if(task.status === true){
            $('.task-row').css("background-color", 'green')


        }else if (task.status === false) {
            $(".task-row").css("background-color", "grey");

		} else {

		}

    }

}


//Create a front end experience that allows a user to create a Task.
// When the Task is created, it should be stored inside of a database (SQL)
// Each Task should have an option to 'Complete' or 'Delete'.
        // When a Task is complete, its visual representation should change on the front end.
        // For example, the background of the task container could change from gray to green.
        // The complete option should be 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.































// Stretch Goals
// For each of your strech goals, you will be practicing git branching. Please refer to the branching notes for a reminder on commands. Each branch will be merged into main using --no-ff. This will allow us to see that you branched your feature when you turn in your code.

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