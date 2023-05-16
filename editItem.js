export function editItem(element) {
  element.addEventListener("click", (item) => {
    if (item.target.classList.contains("edit-button")) {
      // target the task in the task list
      let task = item.target.previousElementSibling;
      // get the task value
      let taskValue = task.textContent;
      // append the task value in the input field
      let editTaskValue = document.getElementById("new-task");
      editTaskValue.value = taskValue;
      // remove the task
      element.removeChild(item.target.parentElement);
    }
  });
}
