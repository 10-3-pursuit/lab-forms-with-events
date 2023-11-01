const form = document.querySelector("form")
const ul = document.querySelector("ul");
const body = document.querySelector("body")
const toDoList = document.querySelectorAll("li");

form.addEventListener("submit",(event) =>{
    event.preventDefault();
    const listItem = document.querySelector("#item").value;
    let errorMessage = document.querySelector("p")
    if(!listItem){
        if(!errorMessage){
            errorMessage = document.createElement("p");
            errorMessage.textContent = "Error, no text submitted!"
            body.append(errorMessage);
            form.reset();
        }
    }else{
        const newLi = createNewLi(listItem);
        newLi.classList.add("unfinished")
        errorMessage ? errorMessage.remove():""
        newLi.addEventListener("click",() => checkList(newLi))
        ul.append(newLi);
        form.reset();
    }
})


function createNewLi(item){
    const newLi = document.createElement("li")
    newLi.innerText = item
    return newLi
}

for(let item of toDoList){
   item.addEventListener("click",() => checkList(item))
}


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