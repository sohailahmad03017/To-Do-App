var list = document.getElementById("list")

function createItem(){
    var inputValue = document.getElementById("inputValue");
    
    //Create list item with text
    var li = document.createElement("LI");
    li.setAttribute("class","listItem");
    var liText = document.createTextNode(inputValue.value); 
    li.appendChild(liText);

    //Clear input value
    inputValue.value = "";
    
    //Create Edit Button
    var editBtn = document.createElement("SPAN");
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("class","edit");
    editBtn.setAttribute("onclick","editItem(this)");
    li.appendChild(editBtn);

    //Create Delete Button 
    var delBtn = document.createElement("SPAN");
    var delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("class","del");
    delBtn.setAttribute("onclick","deleteItem(this)");
    li.appendChild(delBtn);

    list.appendChild(li);
    console.log(list);
}

function deleteItem(delBtn){
    delBtn.parentNode.remove();
}

function editItem(editBtn){
    var val = prompt("Enter Updated value", editBtn.parentNode.firstChild.nodeValue);
    editBtn.parentNode.firstChild.nodeValue = val;
}

function deleteAll(){
    list.innerHTML = "";
}