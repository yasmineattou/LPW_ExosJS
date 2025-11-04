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
    listItem.textContent = taskText;

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

    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear input field
});

