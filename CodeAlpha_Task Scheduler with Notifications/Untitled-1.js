// Sample tasks data (to be fetched from a backend in real scenario)
let tasks = [
    { id: 1, title: 'Task 1', deadline: '2023-11-25', notificationType: 'email' },
    { id: 2, title: 'Task 2', deadline: '2023-11-27', notificationType: 'push' },
    // More tasks...
];

// Function to display tasks
function displayTasks() {
    const tasksSection = document.getElementById('tasks');
    tasksSection.innerHTML = '';

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>Deadline: ${task.deadline}</p>
            <p>Notification Type: ${task.notificationType}</p>
        `;
        tasksSection.appendChild(taskDiv);
    });
}

// Function to add a new task
function addTask() {
    // Get input values for new task and add it to the tasks array
    // Refresh task list after adding
    displayTasks();
}

// Display tasks when the page loads
displayTasks();
