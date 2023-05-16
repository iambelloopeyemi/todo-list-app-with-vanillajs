export function addItem(element) {
  element.addEventListener("click", (item) => {
    // create an element for a task
    item = document.createElement("li");
    // create the children elements
    let addedTask = document.createElement("p");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    addedTask.classList = "added-task";
    editButton.classList = "edit-button";
    deleteButton.classList = "delete-button";
    editButton.appendChild(document.createTextNode("Edit"));
    deleteButton.appendChild(document.createTextNode("Delete"));
    item.appendChild(addedTask);
    item.appendChild(editButton);
    item.appendChild(deleteButton);
    // create a text node to collect the task value
    let newTask = document.createTextNode(
      document.getElementById("new-task").value
    );
    addedTask.appendChild(newTask);
    // create the logic for adding the task value
    if (document.getElementById("new-task").value === "") {
      alert("Input a task");
    } else {
      // append the task in the task list
      let newAddedTask = document
        .getElementById("incomplete-tasks")
        .appendChild(item);
      document.getElementById("incomplete-tasks").prepend(newAddedTask);
      // task value reset
      document.getElementById("new-task").value = "";
    }
  });
}
