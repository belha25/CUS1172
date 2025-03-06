document.addEventListener('DOMContentLoaded', function() {
    const todolist = [];
    document.querySelector("#new-task").onsubmit = function () {
     // Adds a new task to the list and displays it
    const li = document.createElement('li');
     let task_text = document.querySelector('#task-title').value;
    let task_priority = document.querySelector('#task-priority').value;
    let task_status = document.querySelector('input[name="task-status"]:checked').value;
    let new_task_html = `
    <span>Title ${task_text}</span>
   <span> Priority ${task_priority}</span>
   <span> Status ${task_status}</span>
   <button class="remove">Remove</button>
   <button class="completed">Completed</button>`
    }


li.innerHTML = new_task_html;
if(task_priority=="low"){
    li.classList.add("low-priority");
}
else if (task_priority=="medium") {
    li.classList.add("med-priority");
}
else if(task_priority=="high"){
    li.classList.add("high-priority");
}
// Append the new task item to the todo list
document.querySelector("#todo").append(li);

// Optionally clear the task title input field
document.querySelector("#task-title").value = '';

// Add the task details to the list (if required)
let newtdlitem = {title: task_text, priority: task_priority, status: task_status};
todolist.push(newtdlitem);
console.log(todolist);

return false; // Prevent the form from reloading the page
});

    document.addEventListener('click',function(event){
        element = event.target;
        if (element.className == 'remove'){
            element.parentElement.remove();
            const index = todolist.indexOf(element.parentElement);
            todolist.splice(index,1);
            console.log(todolist);
        }
        if (element.className == 'completed'){
            element.parentElement.style.textDecoration = "line-through";
        }
    });
