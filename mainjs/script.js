'use strict';

const createBtn = document.getElementById('create');

createBtn.addEventListener('click', () =>{
  const sheet = document.createElement('section');
  sheet.className = 'sheet';
  document.querySelector('body').appendChild(sheet);

  const input = document.createElement('div');
  input.className = 'input';
  sheet.appendChild(input);

  const inputText = document.createElement('input');
  inputText.setAttribute("type","text");
  inputText.id = 'txt';
  input.appendChild(inputText);

  const addBtn = document.createElement('button');
  addBtn.id = 'add';
  addBtn.textContent = 'add';
  input.appendChild(addBtn);

    addBtn.addEventListener('click', () => {
      const task = document.createElement('li');
      task.textContent = inputText.value;
      // task.className = 'task';
      document.querySelector('ul').appendChild(task);
    
      inputText.value = '';
      inputText.focus();
      
      task.addEventListener('click', () =>{
        document.querySelector('li').className = 'checked';
      });
    });

  const tasks = document.createElement('ul');
  tasks.className = 'tasks'
  sheet.appendChild(tasks);

  const deleteBtn = document.createElement('button');
  deleteBtn.id = 'del';
  deleteBtn.textContent = 'All delete';
  sheet.appendChild(deleteBtn);

  createBtn.className = 'clicked';

  deleteBtn.addEventListener('click', () => {
    document.querySelector('body').removeChild(sheet);

    createBtn.classList.remove('clicked');
  });

});