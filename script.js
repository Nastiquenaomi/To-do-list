// Get the form element and add an event listener for form submission
document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    const taskInput = document.getElementById('task-input'); // Get the input element
    const taskText = taskInput.value.trim(); // Get the trimmed input value

    if (taskText !== '') { // Check if the input is not empty
        const taskList = document.getElementById('tasks'); // Get the task list element
        const newTask = document.createElement('li'); // Create a new list item

        // Create a span to hold the task text
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-task');

        // Append the task text and delete button to the new task
        newTask.appendChild(taskContent);
        newTask.appendChild(deleteButton);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = '';

        // Toggle task completion when the task text is clicked
        taskContent.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        // Remove the task when the delete button is clicked
        deleteButton.addEventListener('click', function() {
            newTask.remove();
        });
    }
});
