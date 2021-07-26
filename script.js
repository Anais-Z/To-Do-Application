//accessing the document's body
body = document.body



//creating a var tp access the text input
const enterTask = document.querySelector("input[name='enterTask']")

//creating a var tp access the submit button
const submit = document.querySelector(".submit")

//creating a var tp access the delete all button
const deleteAll = document.querySelector(".deleteAll")

//creating the object to list the task
const arrays = []

//creating the error message if user doesn't enter task
const error = document.createElement("p")

//creating the var to access to div to place error message
const errorSection = document.querySelector(".error-section")

submit.addEventListener("click", e =>{
 
    if(enterTask.value == ""){
        error.innerText = "Enter a task"
        error.style.color = "red"
        return errorSection.append(error)
    }
})

deleteAll.addEventListener("click", e =>{

})