// script.js

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      li.remove();
    };
  
    li.appendChild(deleteButton);
  
    // Append the new task to the list
    document.getElementById("taskList").appendChild(li);
  
    // Clear the input field
    taskInput.value = "";
  }
  