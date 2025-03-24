function displayInputField() {
  document.querySelector('.js-add').classList.remove('display-add-btn');

  document.querySelector('.js-input-box').classList.add('display-input-field');
}

function resetAddBtn() {
  document
    .querySelector('.js-input-box')
    .classList.remove('display-input-field');

  document.querySelector('.js-add').classList.add('display-add-btn');
}

let tasks = JSON.parse(localStorage.getItem('tasks'));

if (!tasks || tasks.length === 0) {
  tasks = [];
  displayInputField();
}

function addTask() {
  const taskData = document.querySelector('.js-input').value;

  let taskDate = document.querySelector('.js-date').value;

  if (taskData === '') {
    alert('Please enter a task.');
    return;
  }

  if (taskDate === '') {
    taskDate = '[Empty]';
  }

  tasks.push({
    taskData: taskData,
    date: taskDate,
  });

  document.querySelector('.js-input').value = '';

  renderTaskList();

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTaskList() {
  let taskHTML = ``;

  for (let i = 0; i < tasks.length; i++) {
    taskHTML += `
      <p class="list-text">${tasks[i].taskData}</p>
      <p class="list-date">${tasks[i].date}</p>
      <button class="js-delete list-delete" onClick="deleteTask(${i});" >Delete</button>
    `;
  }

  // console.log(taskHTML);

  document.querySelector('.js-list-data').innerHTML = taskHTML;
}

renderTaskList();

function deleteTask(i) {
  tasks.splice(i, 1);
  renderTaskList();

  if (tasks.length === 0) {
    displayInputField();
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
