let todocont=document.getElementById("todoItemsContainer");
let addbutt=document.getElementById("addbutton");

let arr=[{text:"Learn HTML",
          number:1
           },
           {text:"Learn CSS"
            ,number:2
            },
            {text:"Learn JS",
                number:3
            }];

 addbutt.onclick=function()
 {
    createToDoFromUser();
 }           
function ToDoStatusChange(id1,id2)
{
     let checkboxelement=document.getElementById(id1);
     let labelelement=document.getElementById(id2);
     if(checkboxelement.checked===true)
     {
        labelelement.classList.add("checked");
     }
     else{
        labelelement.classList.remove("checked");
     }
}
function DeleteLi(id)
{
    let a=document.getElementById(id);
    todocont.removeChild(a);
}
function createAndAppendToDo(arr)
{
    let todoId="todo"+arr.number;
    let checkboxID="checkbox"+arr.number;
    let labelID="label"+arr.number;
    let todoel=document.createElement("li");
    todoel.id=todoId;
todoel.classList.add("todo-item-container","d-flex","flex-row");
todocont.append(todoel);
let inputelement=document.createElement("input");
inputelement.type="checkbox";
inputelement.id=checkboxID;
todoel.appendChild(inputelement);
inputelement.classList.add("checkbox-input");
let labelContainer=document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
todoel.appendChild(labelContainer);
let labelelement=document.createElement("label");
labelelement.id=labelID;
inputelement.onclick=function()
{
    ToDoStatusChange(checkboxID,labelID);
}
labelelement.setAttribute("for",checkboxID);
labelelement.classList.add("checkbox-label");
labelelement.textContent=arr.text;
labelContainer.appendChild(labelelement);
let deletecontainer=document.createElement("div");
deletecontainer.classList.add("delete-icon-container");
labelContainer.appendChild(deletecontainer);
let deleteIcon=document.createElement("i");
deleteIcon.classList.add("fa-solid","fa-trash-can","delete-icon");
deleteIcon.onclick=function()
{
    DeleteLi(todoId);
}
deletecontainer.appendChild(deleteIcon);

}
for (let i of arr)
{
    createAndAppendToDo(i);

}

function createToDoFromUser()
{
    let  inputelementfromuser=document.getElementById("todoUserInput");
    let value=inputelementfromuser.value;
    let count=arr.length+1;
    let obj={
        text:value,
        number:count
    };
    createAndAppendToDo(obj);
    inputelementfromuser.value="";
}
