document.getElementById('add-task').addEventListener('click', function() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
    }
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});

function addTask(taskText) {
    var taskList = document.getElementById('task-list');

    var li = document.createElement('li');
    li.className = 'box is-flex is-align-items-center is-justify-content-space-between'; // Estilo compacto Bulma
    li.textContent = taskText;

    var deleteButton = document.createElement('button');
    deleteButton.className = 'button is-danger is-small'; // Estilo Bulma para el botón de eliminar
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}