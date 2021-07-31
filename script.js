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

 
submit.addEventListener("click", () =>{
 
   const listItem = document.createElement("li");
    if(enterTask.value == ""){
        error.innerText = "Enter a task"
        error.style.color = "red"
        return errorSection.append(error)
    }else{
     // console.log(submit.id)
      listItem.innerText = setTask(enterTask.value)
      let lol = addButtons(arrayIndex)
      listItem.append(lol)
      listItem.setAttribute('id', arrayIndex)
      listItems.push(listItem)
      orderedList.append(listItem)
      arrayIndex =  incrementIndex(arrayIndex)
      taskCompleted.addEventListener('click', () =>{
          console.log(buttonList[taskCompleted.id])
       //   orderedList.removeChild(orderedList.listItems[this.id])
      //  orderedList.removeChild(buttonList[arrayIndex])
    })
    }
})

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

