const todo_list = document.getElementById("ft_list")

$("#create-btn").click(function(){
    let content = window.prompt("Adicionar tarefa: ")
    createTask(content)
})

function createTask(text){
    const new_task = document.createElement("div")
    new_task.innerText = text

    if (new_task.innerText){
        todo_list.appendChild(new_task)
        todo_list.prepend(new_task)
        saveTasks()
    } else {
        alert("Você não pode adicionar uma tarefa vazia.")
    }

    $(new_task).click(function(){
        if (window.confirm("Deseja deletar essa tarefa?")){
            new_task.remove()
            saveTasks()
        }
    })
}

function saveTasks(){
    const tasks = []
    const task_list = todo_list.children
    
    for (let i = 0; i < task_list.length; i++){
        tasks.push(task_list[i].textContent)
    }
    document.cookie = `tasks=${JSON.stringify(tasks)}; path=/; max-age=31536000`
    
    console.log(document.cookie)
}

function loadTasks(){
    const cookies = document.cookie.split(";").find(row => row.startsWith("tasks="))

    if(cookies){
        let tasks = cookies.split("=")[1]
        tasks = JSON.parse(tasks)
        tasks.reverse()

        tasks.forEach(taskText => {
            createTask(taskText)
        })
    }
}

window.onload = loadTasks()