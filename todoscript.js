function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="button" onclick="removeTodo(this)">Delete</button>
        `;
        li.addEventListener("click", toggleComplete);
        todoList.appendChild(li);
        todoInput.value = "";
    }
}
function removeTodo(button) {
    const li = button.parentElement;
    li.remove();
}
function toggleComplete() {
    this.classList.toggle("completed");
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("todo-input").focus();
});
