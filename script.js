let inputs = document.getElementById("inputs");
let addBtn = document.getElementById("add");
let display = document.getElementById("display");
let emptyCell = document.getElementById("empty");

const todoList = [];

let renderTodoList = () => {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name1 = todoObject.name1;
    // const date = todoObject.date;
    const { name1, date1 } = todoObject;


    let html = `
    <div class="contents">
    <div class="name">${name1}</div> 
    <div class="date">${date1}</div>
    <button class="delBtn" onclick="
        todoList.splice(${i}, 1);
    renderTodoList();
    ">Delete</button>
    </div>`;
    todoListHtml += html;
    console.log(todoListHtml);
      
  }
  display.innerHTML = todoListHtml;

};

let addTodo = () => {
  let dates = document.getElementById("dates");

  let dates1 = dates.value;
  let name1 = inputs.value;

  if (name1 === '') {
    emptyCell.style.display = 'block';
    setTimeout(() => {
    emptyCell.style.display = 'none';
    }, 2000);
    
    todoList.splice(todoList[i], 1);
    renderTodoList();
    
    } else {
      renderTodoList();
    }

  todoList.push({ name1: name1, date1: dates1 });
  console.log(todoList);

  inputs.value = "";

  renderTodoList();
};
addBtn.addEventListener("click", addTodo);

inputs.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
// deleting button functionality

// texts.addEventListener('dbclick', () => {
//     html.style.textdecoration = 'linethrough';
// })
