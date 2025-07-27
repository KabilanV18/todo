let tasks = [];

document.getElementById('addBtn').addEventListener('click', () => {
  document.getElementById('taskModal').style.display = 'flex';
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const title = document.getElementById('titleInput').value;
  const description = document.getElementById('descInput').value;

  if (!title || !description) {
    alert('Please fill both fields!');
    return;
  }

  const task = {
    title,
    description,
    isComplete: false
  };

  tasks.push(task);
  updateTaskList();
  document.getElementById('taskModal').style.display = 'none';
  document.getElementById('titleInput').value = '';
  document.getElementById('descInput').value = '';
});

function updateTaskList() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.isComplete) li.classList.add('complete');
    li.innerHTML = `
      <div>
        <strong>${task.title}</strong><br/>
        ${task.description}
      </div>
      <div>
        <button onclick="toggleComplete(${index})">✔️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].isComplete = !tasks[index].isComplete;
  updateTaskList();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}
