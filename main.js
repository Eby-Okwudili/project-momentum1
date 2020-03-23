/* Todo List */
window,onload = function () {
    //vRIABLES
    let form = document.getElementById("form");
     let input = document.getElementById("input");
     let btn = document.getElementById("btn");
     let list = document.getElementById("list");
     let btnclr = document.getElementById("btnclr");
     letid = 1;
     //listItem = {item: "todo item",checked: false}
     let liItem = "";
     let todoList = [];
     //button event listener
    btn.addEventListener("click",addTodoItem);
    
    //list event listener
    list.addEventListener("click",boxchecked);

    //event listener for clear list
    btnclr.addEventListener("click",clearList);

    //input.addEventListener("keydown", addTodoItem);



    if (this.localStorage.length < 0) 
    {btnclr.style.display = "none"; // hide clearbtn
    this.console.log("button");
}

//checking local storage has data
if (this.localStorage.length <= 0) {
    btnclr.style.display = "none"; //hide clear btn

}

//add todo item to list
function addTodoItem() {
if(input.value === "") {
alert("You must enter some value!");
}
else {
    if(list.style.borderTop=== ") {
        console.log("here!")
list.style.borderTop = "2px solid white";
btnclr.style.display ="inline";
    }
    let text = input.value;
    let item ='<li id="box-${id}">${text}<input id="li-${id}"class="checkboxes"type="checkbox"></li>';
     list.insertAdjacentHTML('beforeend', item);
     liItem = {item: text, checked:false};
     todoList.push(liItem);
     id++;
     addToLocalstorage();
     form.requestFullscreen();
}
}
//adding string through style to list item
function boxChecked(event) {
    const element = event.taget;
    if(element.type ==="checkbox") {
        element.parentNode.style.textDecoration = "line-through";
        todoList = JSON.parse(localStorage.getItem("todoList"));
        todoList[element.id.split('-')[1] - 1].checked element.checked.tostring();
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}

//adding data to local storage
function addToLocalstorage() {
    if (typeof (storage) !=="undefined") {
        localStorage.setItem("todoList",JSON.stringify(todoList));
    }else{
        alert("browser doesn't support local storage!");
    }
}

//display all todo List 
function displayList() {
    list.style.borderTop = "2px solid white";
    todoList = JSON.parse(localStorage.getItem(todoList"));
    todoList.forEach(function(element) {
    console.log(element.item)
    let text = element.item;
    let item = '<li id="li-${id}">${text}<inputid="box-${id}"class"checkboxes"type="checkbox"></li>';
    list.insertAdjacentHTML("beforeend", item);

    //if there is a checked box, then style
    if (element.checked) {
    let li = document.getElementById("li-" + id);
    li.style.textDecoration = line-through";
    li.childNodes[1].checked = element.checked;
    }
    id++;
}); 
}

//clear list event listener
function clearList() {
    todoList = [];
    localStorage.clear();
    list.innerHTML = "";
    btnclr.style.display = "none";
    list.style,borderTop="";
}
}
/#li-${id}