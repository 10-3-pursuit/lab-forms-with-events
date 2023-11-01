

//add event listener to submit button, and add to the todo list when clicked
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todo = event.target.todo.value;
    console.log("Todo: ", todo)
    generateTodo(todo);
    form.reset();
});

const generateTodo = (todo) => {
    if (todo) {
        //task template
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" class="box" unchecked> ${todo}`;
        document.querySelector('ul').append(li);
        if (document.querySelector('#error')) {
            document.querySelector('#error').remove();
        }
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.id = 'error'
        errorMessage.textContent = "Error! Please fill out a todo item."
        document.querySelector('ul').prepend(errorMessage);
    }

    //strikethrough if box is checked
    const checkBoxes = document.querySelectorAll('.box');
    checkBoxes.forEach((box) => {
        box.addEventListener('change', (event) => {
            event.target.checked = box.checked ? true : false;
            if (box.checked) {
                box.closest('li').style.textDecoration = "line-through";
            } else
                box.closest('li').style.textDecoration = "none";
        })
    })

    //strikethrough if text is clicked
    const todoItems = document.querySelectorAll('li');
    todoItems.forEach((todo) => {
        todo.addEventListener('click', () => {
            currentDecoration = todo.style.textDecoration;
            todo.style.textDecoration = currentDecoration === "line-through" ? "none" : "line-through";
        })
    });
}



