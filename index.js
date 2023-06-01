let taskList = [];
let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask() {
  taskList.push(input.value);
  displayList();
  // input.addEventListener('click', function(){
  //     input.style.textDecoration = "Line-through"
  // })
}

function displayList() {
  list.innerHTML = "";
  taskList.forEach((task) => {
    list.innerHTML +=
      `<li>
      <input class="check-input" type="checkbox" value="" id="checkbox">` 
      + task +
      `<span><button class="delete" onclick="deleteTask()">x</button></span> 
      </li>`;
  });
  console.log(list);
}
