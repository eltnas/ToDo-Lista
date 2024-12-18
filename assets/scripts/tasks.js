const addButton = document.getElementById('addTaskBtn');

// Função para marcar a tarefa como concluída
function completeTask(event) {
    const taskItem = event.target.closest('li'); // Obtém o elemento 'li' mais próximo
    taskItem.classList.remove('add'); // Remove a classe 'add'
    taskItem.classList.add('complete'); // Adiciona a classe 'complete'
}

// Função para remover a tarefa
function undoTask(event) {
    const taskItem = event.target.closest('li'); // Obtém o elemento 'li' mais próximo
    taskItem.remove(); // Remove o elemento 'li' da lista
}

// Evento de clique no botão de adicionar tarefa
addButton.addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim(); // Remove espaços extras
    const taskList = document.getElementById('taskList');

    if (!task) {
        alert('Digite a tarefa.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task', 'add'); // Adiciona as classes 'task' e 'add'

    // Cria o conteúdo HTML da tarefa
    taskItem.innerHTML = `
        <div class="task_added">
            <span class="task_name">${task}</span>
        </div>
        <div class="task_btn">
            <button class="task_complete">
                <span class="icon-check"></span>
            </button>
            <button class="task_undo">
                <span class="icon-trash"></span>
            </button>
        </div>
    `;

    // Adiciona os eventos aos botões criados dinamicamente
    taskItem.querySelector('.task_complete').addEventListener('click', completeTask);
    taskItem.querySelector('.task_undo').addEventListener('click', undoTask);

    // Adiciona a tarefa à lista
    taskList.appendChild(taskItem);

    // Limpa o campo de entrada
    taskInput.value = '';
});
