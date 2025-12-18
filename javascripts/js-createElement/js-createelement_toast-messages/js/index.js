console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const messageContainer = document.querySelector(".toast-container__message")
addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const li = document.createElement("li")
  li.classList.add("toast-container__message")
  li.textContent = "Hii, i'm new message"
  toastContainer.append(li)

});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  document.body.innerHTML="";

});