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
 

//accessing the un ordered list element
const orderedList = document.querySelector(".ordered-list")

submit.addEventListener("click", () =>{
 
    if(enterTask.value == ""){
        error.innerText = "Enter a task"
        error.style.color = "red"
        return errorSection.append(error)
    }else{
        setTask(enterTask.value)
      arrayIndex =  incrementIndex(arrayIndex)
    }
})

deleteAll.addEventListener("click", e =>{

})

//creating a function which will place the task in an object
const setTask = (task) =>{
    //creating a list item element
    const listItem = document.createElement("li");
        taskItem = {
            "specifiedTask": task
        }
        tasks.push(taskItem)
        listItem.innerText = tasks[arrayIndex].specifiedTask
        return orderedList.append( listItem)
         
}

const incrementIndex = (arrayIndex) =>{
    return ++arrayIndex
}
