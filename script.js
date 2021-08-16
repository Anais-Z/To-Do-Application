//accessing the document's body
body = document.body



//creating a var tp access the text input
const enterTask = document.querySelector("input[name='enterTask']")

//creating a var tp access the submit button
const submit = document.querySelector(".submit")

//creating a var tp access the delete all button
const deleteAll = document.querySelector(".deleteAll")

//creating the object to list the task
const tasks = []

//creating the error message if user doesn't enter task
const error = document.createElement("p")

//creating the var to access to div to place error message
const errorSection = document.querySelector(".error-section")

//creating a var to represent the index of the array
let arrayIndex = 0;
 
//create an array for lists
const listItems = [];

const divItems = [];

const buttonList = [];
let taskCompleted;

//accessing the un ordered list element
const orderedList = document.querySelector(".ordered-list")

 
 
submit.addEventListener("click", (e) =>{
 
   const listItem = document.createElement("li");
  // listItem.className = "list-item"
    if(enterTask.value == ""){
        error.innerText = "Enter a task"
        error.style.color = "red"
        return errorSection.append(error)
    }else{
      listItem.innerText = setTask(enterTask.value)
      taskCompleted  = document.createElement("button")
      taskCompleted.innerText = "COMPLETED"
      buttonList.push(taskCompleted)
      listItem.append(taskCompleted)
      listItem.setAttribute('id', arrayIndex)
      listItems.push(listItem)
      orderedList.append(listItem)
    }
    deleteListItem()
} 
)

const deleteListItem = () =>{

    //accessing all the buttons in the ordered list
    let deleteButton = orderedList.querySelectorAll('button')

    //iterating through every button
    deleteButton.forEach((e) => {
        //if the button is click, then the parent element (list item) will be deleted 
        e.addEventListener('click', () =>{
             e.parentElement.remove()
            
        })
    })
    }

  


deleteAll.addEventListener("click", () =>{
    //removes the first child of the ordered list (list item)  while the first child exists
    while(orderedList.firstChild){
        //removes first list item
        orderedList.removeChild(orderedList.firstChild)
        //second list item now becomes the first child
    }
   }
)

//creating a function which will place the task in an object
const setTask = (task) =>{
        taskItem = {
            "specifiedTask": task
        }
        return taskItem.specifiedTask + " "
         
}

const incrementIndex = (arrayIndex) =>{
    return ++arrayIndex
}


const addButtons= (arrayIndex) =>{
  taskCompleted  = document.createElement("button")
taskCompleted.innerText = "COMPLETED"
taskCompleted.setAttribute('id', arrayIndex)
    buttonList.push(taskCompleted)
    return buttonList[arrayIndex]


}

