function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");  
  if (taskInput.value.trim() !== "") {
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        span.style.textDecoration = "line-through";
      } else {
        span.style.textDecoration = "none";
      }
    });
    var span = document.createElement("span");
    span.textContent = taskInput.value;
    var deleteButton = document.createElement("img");
    deleteButton.src = "./images/img.webp"; // Corrected typo here
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}
