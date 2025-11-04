// Select DOM elements
const taskInput = document.getElementById('new-todo');
const addTaskButton = document.getElementById('add-todo');
const taskList = document.getElementById('todo-list');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.textContent = taskText;

    // Create a container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');

    // Add done button to each task
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Add delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append buttons to the container
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);

    // Append the container to the list item
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear input field
});

// Allow adding task by pressing Enter key