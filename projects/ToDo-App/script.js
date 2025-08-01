let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    input.value = '';
    saveTasks();
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
