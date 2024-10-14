const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let tasks = [
  {
    id: 1,
    title: 'Task A',
    description: 'Description for task A',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Task B',
    description: 'Description for task B',
    priority: 'Low',
    status: 'Completed',
  },
];

app.use(express.static('public'));
app.use(express.json()); 
function emitTaskUpdates() {
  io.emit('taskUpdate', tasks);
}

function updateTaskStatus() {
  const taskId = document.getElementById('taskId').value;
  const taskStatus = document.getElementById('taskStatus').value;

  fetch(`http://localhost:3000/updateTask/${taskId}`, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: taskStatus })
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Failed to update task');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
}


io.on('connection', (socket) => {
  console.log('A client connected');

  socket.emit('taskUpdate', tasks);

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
