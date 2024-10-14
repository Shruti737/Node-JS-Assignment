
let tasks = [
    {
      id: 1,
      title: "Task A",
      description: "Description for task A",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Task B",
      description: "Description for task B",
      priority: "Low",
      status: "Completed",
    },
    {
      id: 3,
      title: "Important Task C",
      description: "Description for task C",
      priority: "Medium",
      status: "Pending",
    },
    {
      id: 4,
      title: "Task D",
      description: "Another description for task D",
      priority: "High",
      status: "Completed",
    },
  ];
  function searchTasks(searchTerm) {
    const term = searchTerm.toLowerCase();
  
    return tasks.filter(task => {
      return task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term);
    });
  }
  const searchResult1 = searchTasks('task');
  console.log("Search Results for 'task':", searchResult1);
  
  const searchResult2 = searchTasks('Important');
  console.log("Search Results for 'Important':", searchResult2);
  
  const searchResult3 = searchTasks('description for task A');
  console.log("Search Results for 'description for task A':", searchResult3);
  
  const searchResult4 = searchTasks('Task D');
  console.log("Search Results for 'Task D':", searchResult4);
  