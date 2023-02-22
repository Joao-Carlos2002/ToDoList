const main = document.getElementById('main')
const checked = '<i id="checked" class="fa-solid fa-check"></i>'
let indice = 0

document.getElementById('add-task').addEventListener('click', (ev) => {
    // Pegando valor do input
    const taskInput = document.getElementById('task-input')
    // Evitando que a página recarregue
    ev.preventDefault()
    // Criando novos elementos
    if (taskInput.value != '') {
        const containerTasks = document.querySelector('.container-tasks')
        const taskContainer = document.createElement('div');
        const tasks = document.createElement('div');
        const taskText = document.createElement('div');
        const newTask = document.createElement('h4');
        const hr = document.createElement('hr');
        const toolbar = document.createElement('div');
        const confirm = document.createElement('button');
        const edit = document.createElement('button');
        const delet = document.createElement('button');
        // Adicionando classes e valores para os elementos novos
        taskContainer.className = 'task-container-' + indice;
        taskContainer.id = 'taskContainer';
        taskContainer.setAttribute('status', 'incomplete');

        tasks.className = 'tasks-' + indice;
        tasks.id = 'Tasks';

        taskText.className = 'task-text-' + indice;
        taskText.id = 'TaskText';

        newTask.className = 'title-task-' + indice;
        newTask.id = 'titleTask'
        newTask.innerText = taskInput.value

        hr.className = 'line-task-' + indice;
        hr.id = 'lineTask'

        toolbar.className = 'toolbar-' + indice;
        toolbar.id = 'Toolbar'

        confirm.className = 'confirm-' + indice;
        confirm.id = 'confirm'
        confirm.innerHTML = '<i class="fa-solid fa-check"></i>'

        edit.className = 'edit-' + indice;
        edit.id = 'edit'
        edit.innerHTML = '<i class="fa-solid fa-pencil"></i>'

        delet.className = 'delete-' + indice;
        delet.id = 'delete'
        delet.innerHTML = '<i class="fa-solid fa-xmark"></i>'

        indice++

        taskInput.value = ''
        // Adicionando elementos no HTML
        main.appendChild(taskContainer)
        containerTasks.appendChild(taskContainer)
        taskContainer.appendChild(tasks)
        tasks.appendChild(taskText)
        taskText.appendChild(newTask)
        tasks.appendChild(hr)
        tasks.appendChild(toolbar)
        toolbar.appendChild(confirm)
        toolbar.appendChild(edit)
        toolbar.appendChild(delet)
        const confirmButton = document.querySelectorAll('#confirm')
        confirmButton.forEach(element => {
            element.addEventListener('click', () => {
                const checked = document.createElement('p');
                checked.innerHTML = '<i id="checked" class="fa-solid fa-check"></i>'
                checked.id = 'checked'
                element.parentElement.appendChild(checked)
                element.parentNode.parentNode.parentNode.setAttribute('status', 'complete')
            })
        }
        )
        const deleteButton = document.querySelectorAll('#delete')
        deleteButton.forEach(element => {
            element.addEventListener('click', () => {
                element.parentNode.parentNode.parentNode.remove()
            })
        })

        const editButton = document.querySelectorAll('#edit')
        editButton.forEach(element => {
            element.addEventListener('click', () => {
                const containerAddTask = document.getElementById('container-add-task')
                const containerEdit = document.getElementById('container-edit')
                containerAddTask.className = 'hide'
                containerEdit.className = ''
                const taskEdit = document.getElementById('task-edit')
                const task = element.parentNode.parentNode.firstChild.firstChild
                taskEdit.value = task.innerText
                const editTask = document.querySelector('.edit-task')
                taskEdit.focus();
                // Edição da atividade
                editTask.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    if (taskEdit.value != '') {
                        containerEdit.className = 'hide'
                        containerAddTask.className = ''
                        task.innerText = taskEdit.value
                        taskEdit.value = ''
                    }
                })
            })
        })
    }
    return
})

const searchInput = document.getElementById('search-input')
searchInput.addEventListener('input', (e) => {
    const titles = document.querySelectorAll('#titleTask');
    let searchText = searchInput.value.toLowerCase();
    titles.forEach((title) => {
        let text = title.innerText.toLowerCase();
        if (text.includes(searchText)) {
            title.parentNode.parentNode.parentNode.style.display = 'block';
        } else {
            title.parentNode.parentNode.parentNode.style.display = 'none';
        }
        if (searchInput.value == '') {
            title.parentNode.parentNode.parentNode.style.display = 'block';
        }
    })
})

const filter = document.getElementById('select-filter');

filter.addEventListener('change', (e) => {
    const taskContainer = document.querySelectorAll('#taskContainer')
    if (filter.value === 'All') {
        taskContainer.forEach((task) => {
            if (task.getAttribute('status') == 'complete') {
                task.style.display = 'block';
            } else {
                task.style.display = 'block';
            }
        })
    }
    
    if (filter.value === 'Complete') {
        console.log('Complete')
        taskContainer.forEach((task) => {
                if (task.getAttribute('status') == 'complete') {
                    task.style.display = 'block';
                } else {
                    task.style.display = 'none';
                }
            })
    } if (filter.value === 'Incomplete') {
            taskContainer.forEach((task) => {
                if (task.getAttribute('status') == 'incomplete') {
                    task.style.display = 'block';
                } else {
                    task.style.display = 'none';
                }
            })
        }
})