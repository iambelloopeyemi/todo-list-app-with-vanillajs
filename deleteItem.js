export function deleteItem(element) {
  element.addEventListener("click", (item) => {
    if (item.target.classList.contains("delete-button")) {
      // remove the task
      element.removeChild(item.target.parentElement);
    }
  });
}
