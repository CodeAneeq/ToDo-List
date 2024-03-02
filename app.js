let input = document.getElementById("input");
let ul = document.getElementById("ul");
let editIndex = -1;

function addTask() {
  let inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter a task");
  }

  if (inputValue !== "") {
    // create list

    let li = document.createElement("li");

    li.addEventListener("dblclick", () => {
      li.classList.add("line-through");
      editIcon.style.display = "none";
    });

    li.classList.add("adding-task-animation");
    let liValue = document.createTextNode(inputValue);
    li.appendChild(liValue);

    // create div for icons

    let div = document.createElement("div");

    // first icon in div (edit)

    let editIcon = document.createElement("i");
    editIcon.setAttribute("class", "fa-solid fa-pen edit");
    editIcon.setAttribute("onClick", "editItem(this)");

    // second icon in div (delete)

    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-trash trash");
    deleteIcon.setAttribute("onClick", "delItem(this)");

    // append child icons in div, div in lis, list in ul, and list is complete

    div.appendChild(editIcon);
    div.appendChild(deleteIcon);
    li.appendChild(div);
    ul.appendChild(li);

    // when click on add input field empty

    input.value = "";
    console.log(li);
  }
}

// function for delete all lists.

function delAll() {
  ul.innerHTML = "";
}

// function for delete specific list.

function delItem(e) {
  let delItem = e.parentNode.parentNode.remove();
}

// function for edit list

function editItem(e) {
  let editedValue = prompt(
    "Enter edited Value",
    e.parentNode.parentNode.firstChild.nodeValue
  );
  e.parentNode.parentNode.firstChild.nodeValue = editedValue;
}