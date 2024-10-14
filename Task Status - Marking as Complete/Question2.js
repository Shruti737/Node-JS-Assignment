const nodemailer = require('nodemailer');

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

function markTaskAsComplete(id, userEmail) {
  const task = tasks.find(task => task.id === id);

  if (task) {
    task.status = "Completed"; 
    sendCompletionEmail(userEmail, task);

    return `Task with ID ${id} marked as complete.`;
  }

  return `Task with ID ${id} not found.`;
}
function sendCompletionEmail(userEmail, task) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'your-email@gmail.com', 
      pass: 'your-email-password'   
    }
  });
  const mailOptions = {
    from: 'your-email@gmail.com', 
    to: userEmail, 
    subject: `Task "${task.title}" Completed`,
    text: `The task "${task.title}" has been marked as completed.`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("Error while sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
let task1 = addTask("Task 1", "First task description", "High", "Pending");
console.log(markTaskAsComplete(task1.id, "recipient-email@example.com"));
