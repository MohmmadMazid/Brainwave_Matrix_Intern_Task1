let input = document.querySelector(".entertask");
let addbutton = document.querySelector(".add");
let todoDiv = document.querySelector(".tasks");

console.log(" input value", input.value);
addbutton.addEventListener("click", (event) => {
  console.log("button is clicked");
  console.log("input value is ", input.value);
  console.log("inputvalue is = ", input.value);
  let div = document.createElement("div");
  div.classList.add("task");
  let h3 = document.createElement("h3");
  h3.classList.add("todoItem");
  h3.innerHTML = input.value.style = "fontSize:x-large";
  let button = document.createElement("button");
  button.innerHTML = "delete";
  div.appendChild(h3);
  console.log();
  div.appendChild(button);
  todoDiv.appendChild(div);
  input.value = "";
});
