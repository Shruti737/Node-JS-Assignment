
let tasks = [
    {
      id: 1,
      title: "Task A",
      description: "Description for task A",
      priority: "High",
      status: "Pending",
      date: new Date('2024-10-14T09:00:00'),
    },
    {
      id: 2,
      title: "Task B",
      description: "Description for task B",
      priority: "Low",
      status: "Completed",
      date: new Date('2024-10-13T11:00:00'), 
    },
    {
      id: 3,
      title: "Task C",
      description: "Description for task C",
      priority: "Medium",
      status: "Pending",
      date: new Date('2024-10-14T10:00:00'), 
    },
    {
      id: 4,
      title: "Task D",
      description: "Description for task D",
      priority: "High",
      status: "Completed",
      date: new Date('2024-10-12T12:00:00'), 
    },
  ];

  function filterTasks(status = null, priority = null) {
    return tasks.filter(task => {
      let statusMatch = status ? task.status === status : true;
      let priorityMatch = priority ? task.priority === priority : true;
      return statusMatch && priorityMatch;
    });
  }
  
  function listAllTasks(page = 1, pageSize = 5) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return tasks.slice(start, end);
  }
  
 
  function sortTasks(field = "date", order = "asc") {
    return tasks.sort((a, b) => {
      if (field === "date" || field === "time") {
        return order === "asc" ? a.date - b.date : b.date - a.date;
      } else if (field === "name") {
        return order === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
  }
  
 
  function filterAndListTasks({ status = null, priority = null, page = 1, pageSize = 5, sortBy = "date", sortOrder = "asc" }) {

    let filteredTasks = filterTasks(status, priority);
    

    let sortedTasks = filteredTasks.sort((a, b) => {
      if (sortBy === "date" || sortBy === "time") {
        return sortOrder === "asc" ? a.date - b.date : b.date - a.date;
      } else if (sortBy === "name") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return sortedTasks.slice(start, end);
  }
  

  console.log("Filtered Tasks (Pending):", filterAndListTasks({ status: "Pending", page: 1, pageSize: 2 }));
  console.log("Sorted Tasks (by Name, Descending):", filterAndListTasks({ sortBy: "name", sortOrder: "desc", page: 1, pageSize: 5 }));
  