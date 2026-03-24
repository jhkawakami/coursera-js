const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim(); // retrieve text from text field, trimming whitespace

    // if text field is not empty
    if (taskText !== ""){
        tasks.push({text: taskText}); // add task to array
        taskInput.value = ""; // clear text field
        displayTasks(); // display tasks in TaskList <ul>
    };
}

function displayTasks(){
    // clear task list
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        // create <li>
        const li = document.createElement("li");

        // within <li>, add check box and task text
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        
        // Event listener that changes for any task where the checkbox is changed
        li.querySelector("input").addEventListener("change", () => toggleTask(index));

        // add the newly created and formatted <li> to the task list
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    // reverse the status of the task
    tasks[index].completed = !tasks[index].completed;
    // refresh <ul> display
    displayTasks();
}

function clearCompletedTasks(){
    // filter out tasks that are completed, reassign "tasks" with the newly filtered array
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    // clearing an entire array
    tasks.length = 0;
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);