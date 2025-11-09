const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value;

    // if its blank, do alert
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // make a new list element and set its text
    const li = document.createElement('li');
    li.innerText = taskText;
    li.onclick = toggleTask;
    taskList.appendChild(li);
    taskInput.value = "";
}


function toggleTask(event) {
    event.target.classList.toggle('completed');
}
addButton.onclick = addTask;

