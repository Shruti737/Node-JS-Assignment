
let tasks = [];
let taskId = 1; 


function addTask(title, description, priority, status) {
  const task = {
    id: taskId++, 
    title,
    description,
    priority,
    status
  };
  tasks.push(task); 
  return task;
}

function getTask(id) {
  return tasks.find(task => task.id === id) || "Task not found";
}

function updateTask(id, title, description, priority, status) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.priority = priority || task.priority;
    task.status = status || task.status;
    return task;
  }
  return "Task not found";
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1); 
    return "Task deleted";
  }
  return "Task not found";
}

let task1 = addTask("Task 1", "First task description", "High", "Pending");
let task2 = addTask("Task 2", "Second task description", "Medium", "Completed");

console.log("All tasks:", tasks);
console.log("Get Task 1:", getTask(task1.id));
console.log("Update Task 1:", updateTask(task1.id, "Updated Task 1", null, "Low", "Completed"));
console.log("Delete Task 2:", deleteTask(task2.id));
console.log("All tasks after deletion:", tasks);
