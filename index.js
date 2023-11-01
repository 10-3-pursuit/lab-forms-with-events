const form = document.querySelector("form")
const ul = document.querySelector("ul");
const body = document.querySelector("body")
const toDoList = document.querySelectorAll("li");

let index = 0

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const listItem = document.querySelector("#item").value;
    let errorMessage = document.querySelector("p")
    if(!listItem){
        if(!errorMessage){
            errorMessage = document.createElement("p");
            errorMessage.textContent = "Error, no text submitted!"
            body.append(errorMessage);
            ul.before(errorMessage)
            form.reset();
        }
    }else{
        const newLi = createNewLi(listItem);
        newLi.classList.add("unfinished")
        errorMessage ? errorMessage.remove():""
        newLi.addEventListener("click",() => checkList(newLi))
        const newRow = document.createElement("li");
        index++
        newLi.style.gridRow = index
        newLi.style.gridColumn = 4
        ul.append(newLi);
        form.reset();
    }
})


function createNewLi(item){
    const newLi = document.createElement("li")
    newLi.innerText = item
    return newLi
}

toDoList.forEach((item,key) =>{

    item.addEventListener("click",() => checkList(item))
    item.style.gridRow = key+1
    item.style.gridColumn = 4
})
   



function checkList(item){
    if(item.classList.contains("unfinished")){
        item.style.textDecoration = "line-through"
        item.classList.remove("unfinished")
        item.classList.add("completed")
    }else{
        item.style.textDecoration = "none"
        item.classList.remove("completed")
        item.classList.add("unfinished")
    }
}