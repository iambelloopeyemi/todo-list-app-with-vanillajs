import "./style.css";
import { addItem } from "./addItem.js";
import { deleteItem } from "./deleteItem.js";
import { editItem } from "./editItem.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
  <h2>TODO LIST</h2>
  <h3>Add Item</h3>
    <div class="new-task-container">
        <input id="new-task" type="text" />
        <button id="add-button">Add</button>
    </div>

    <h3>Todo</h3>
    <ul id="incomplete-tasks"></ul>
  </div>
`;

addItem(document.querySelector("#add-button"));
deleteItem(document.querySelector("#incomplete-tasks"));
editItem(document.querySelector("#incomplete-tasks"));


