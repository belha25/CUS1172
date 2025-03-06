document.addEventListener('DOMContentLoaded', function() {
    const todolist = [];
    document.querySelector("#new-task").onsubmit = function () {
     // Adds a new task to the list and displays it
    const li = document.createElement('li');
     let task_text = document.querySelector('#task-title').value;
    let task_priority = document.querySelector('#task-priority').value;
    let task_status = document.querySelector('input[name="task-status"]:checked').value;
    //creates the new task
    let new_task_html = `
    <span>Title ${task_text}</span>
   <span> Priority ${task_priority}</span>
   <span> Status ${task_status}</span>
   <button class="remove">Remove</button>
   <button class="completed">Completed</button>`

//Li won't display, moving the brackets around to see if it is a logic error
li.innerHTML = new_task_html;
    }
if(task_priority=="low"){
    li.classList.add("low-priority");
}
else if (task_priority=="medium") {
    li.classList.add("med-priority");
}
else if(task_priority=="high"){
    li.classList.add("high-priority");
}
document.querySelector("#todo").append(li);
document.querySelector("#task-title").value = '';

let newtdlitem = {title: task_text, priority: task_priority, status: task_status};
todolist.push(newtdlitem);
console.log(todolist);

return false;
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
