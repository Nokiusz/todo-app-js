const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoUL = document.getElementById('todoUL');
let database = JSON.parse(localStorage.getItem('database'));

if (database) {
    database.forEach((todo) => {
        addTask(todo);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});


function addTask(todo) {
    let taskText = taskInput.value;
    if (todo) {
        taskText = todo.task;
    }




    if (taskText) {
        const todoListElement = document.createElement('li');
        const divTools = document.createElement('div');
        const divTask = document.createElement('div');
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        divTools.className = "tools"
        divTools.classList.add('hide');

        divTask.className = "task-element"
        divTask.innerText = taskText;

        doneButton.innerHTML = '<i class="fas fa-check"></i>';
        doneButton.type = 'button'
        doneButton.className = '';

        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.type = 'button'
        deleteButton.className = 'delete-btn';

        if (todo && todo.status) {
            todoListElement.classList.add("done");
            doneButton.classList.add('done-btn-alt');
            doneButton.innerHTML = '<i class="fas fa-undo"></i>';
        } else {
            doneButton.classList.add('done-btn');
        }

        divTools.appendChild(doneButton);
        divTools.appendChild(deleteButton);
        todoListElement.appendChild(divTask);
        todoListElement.appendChild(divTools);

        doneButton.onclick = () => {

            todoListElement.classList.toggle('done');

            if (todoListElement.classList.contains('done')) {
                doneButton.innerHTML = '<i class="fas fa-undo-alt"></i>';
                doneButton.style.backgroundColor = '#E67E22';
                doneButton.classList.toggle('done-btn-alt');
                doneButton.classList.toggle('done-btn');

            }
            if (!todoListElement.classList.contains('done')) {
                doneButton.innerHTML = '<i class="fas fa-check"></i>';
                doneButton.style.backgroundColor = '#27AE60';
                doneButton.classList.toggle('done-btn-alt');
                doneButton.classList.toggle('done-btn');
            }

            update();
        }

        deleteButton.onclick = () => {
            todoListElement.remove();
            update();
        }

        todoListElement.addEventListener("mouseover", () => {
            divTools.classList.remove('hide');
        });

        todoListElement.addEventListener("mouseout", () => {
            divTools.classList.add('hide');
        });

        todoUL.appendChild(todoListElement);

        taskInput.value = '';
        update();

    }
}


function update() {
    const form = document.getElementById('todoForm');
    const taskInput = document.getElementById('taskInput');
    const todoUL = document.getElementById('todoUL');
    let database = JSON.parse(localStorage.getItem('database'));

    if (database) {
        database.forEach((todo) => {
            addTask(todo);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });


    function addTask(todo) {
        let taskText = taskInput.value;
        if (todo) {
            taskText = todo.task;
        }




        if (taskText) {
            const todoListElement = document.createElement('li');
            const divTools = document.createElement('div');
            const divTask = document.createElement('div');
            const doneButton = document.createElement('button');
            const deleteButton = document.createElement('button');

            divTools.className = "tools"
            divTools.classList.add('hide');

            divTask.className = "task-element"
            divTask.innerText = taskText;

            doneButton.innerHTML = '<i class="fas fa-check"></i>';
            doneButton.type = 'button'
            doneButton.className = '';

            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteButton.type = 'button'
            deleteButton.className = 'delete-btn';

            if (todo && todo.status) {
                todoListElement.classList.add("done");
                doneButton.classList.add('done-btn-alt');
                doneButton.innerHTML = '<i class="fas fa-undo"></i>';
            } else {
                doneButton.classList.add('done-btn');
            }

            divTools.appendChild(doneButton);
            divTools.appendChild(deleteButton);
            todoListElement.appendChild(divTask);
            todoListElement.appendChild(divTools);

            doneButton.onclick = () => {

                todoListElement.classList.toggle('done');

                if (todoListElement.classList.contains('done')) {
                    doneButton.innerHTML = '<i class="fas fa-undo-alt"></i>';
                    doneButton.style.backgroundColor = '#E67E22';
                    doneButton.classList.toggle('done-btn-alt');
                    doneButton.classList.toggle('done-btn');

                }
                if (!todoListElement.classList.contains('done')) {
                    doneButton.innerHTML = '<i class="fas fa-check"></i>';
                    doneButton.style.backgroundColor = '#27AE60';
                    doneButton.classList.toggle('done-btn-alt');
                    doneButton.classList.toggle('done-btn');
                }

                update();
            }

            deleteButton.onclick = () => {
                todoListElement.remove();
                update();
            }

            todoListElement.addEventListener("mouseover", () => {
                divTools.classList.remove('hide');
            });

            todoListElement.addEventListener("mouseout", () => {
                divTools.classList.add('hide');
            });

            todoUL.appendChild(todoListElement);

            taskInput.value = '';
            update();

        }
    }


    function update() {

        const todoListElements = document.querySelectorAll('li');
        const database = new Array();
        const date = new Date();

        todoListElements.forEach((todoListElements) => {
            database.push({
                task: todoListElements.innerText,
                createdAt: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                status: todoListElements.classList.contains('done'),
            });
        });

        localStorage.setItem('database', JSON.stringify(database));
    }

    const todoListElements = document.querySelectorAll('li');
    const database = new Array();
    const date = new Date();

    todoListElements.forEach((todoListElements) => {
        database.push({
            task: todoListElements.innerText,
            createdAt: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            status: todoListElements.classList.contains('done'),
        });
    });

    localStorage.setItem('database', JSON.stringify(database));
}