document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task!');
    }
});