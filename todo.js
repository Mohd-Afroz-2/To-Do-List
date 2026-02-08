const form =document.querySelector('form'); // using complete form tag
const taskList =document.querySelector('#task-list'); // using id

function addTask(task) {
    const listItems = document.createElement('li')
    listItems.innerHTML =`<input type="checkbox"/> <span>${task}</span> <button class="delete">Delete</button> `;
    taskList.appendChild(listItems)
    
}
form.addEventListener('submit',(event)=>{
    event.preventDefault(); // to stop page to refresh
    const input =document.querySelector('#task-input');
    const task = input.value;

    if (task.trim()!=="") { // added to check to prevent empty tasks
        addTask(task);
        input.value = '';
        
    }
    

})

taskList.addEventListener('click', (event)=>{
    if (event.target.classList.contains('delete')) {
        const listItems=event.target.parentElement
        taskList.removeChild(listItems)
        
    }

})
