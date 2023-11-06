const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const task = document.createElement("span");
    task.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(task);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        task.classList.add("completed");
      } else {
        task.classList.remove("completed");
      }
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    taskInput.value = "";
  }
});
