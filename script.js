document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
        
        // Marcar tarefa como concluída ao clicar
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Remover tarefa ao clicar no botão "X"
        li.querySelector(".delete-btn").addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que a tarefa seja marcada como concluída ao excluir
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }

    // Adicionar tarefa ao clicar no botão
    addTaskBtn.addEventListener("click", addTask);

    // Adicionar tarefa ao pressionar Enter no teclado
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
