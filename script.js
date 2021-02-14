const addTodoBtn = document.querySelector(".add-btn")
const todoListEl = document.querySelector(".todos")
const todoInput = document.querySelector(".todo-input")
const trashBtn = document.querySelector(".trash-btn")

//Event Listeners
addTodoBtn.addEventListener("click", () => {
    addTodo()
})

function addTodo(){
    //add todo div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-div")
    //add text and todo
    const todo = document.createElement("li")
    todo.innerText = todoInput.value
    todo.classList.add("todo")
    todoDiv.appendChild(todo)
    //add completed button
    const completedBtn = document.createElement("button")
    completedBtn.innerText = '✔️'
    completedBtn.classList.add("complete-btn")
    todo.appendChild(completedBtn)
    //add trash button
    const trashBtn = document.createElement("button")
    trashBtn.innerText = '❌'
    trashBtn.classList.add("trash-btn")
    todo.appendChild(trashBtn)
    //append to todoList
    todoListEl.appendChild(todoDiv)
    //complete todo
    completedBtn.addEventListener("click", () => {
        todo.style.textDecoration = 'line-through'
        todo.style.opacity = '0.5'
    })
    //delete todo
    trashBtn.addEventListener("click", () => {
        todoDiv.remove()
    })
    //add to local storage
    saveTodos(todoDiv)
}

function saveTodos(todo){
    let todos = []

    if(localStorage.getItem("todos") === null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }

    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}