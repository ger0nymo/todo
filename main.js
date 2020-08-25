const SELECTORS = {
    newTask: document.querySelector('.new-task-input'),
    centerDiv: document.querySelector('.center'),
    trashIcons: document.querySelectorAll('.fa-trash-alt')
}
let init = (function() {
    SELECTORS.newTask.addEventListener("keyup", function(event) {
        if(event.keyCode === 13) {
            addNewTask();
            SELECTORS.newTask.value = '';
        }
    });
})();
function Task(title, id) {
    this.title = title;
    this.id = id;
}
function addNewTask(task, id) {
    createAndAppendChildElements();
}
function createAndAppendChildElements() {
    let currentTask = new Task(SELECTORS.newTask.value, SELECTORS.centerDiv.childElementCount);
    let taskNode = document.createElement('DIV');
    taskNode.classList.add('task');
    taskNode.classList.add('id-' + currentTask.id);

    let taskNodeFirstChild = document.createElement('DIV');
    taskNodeFirstChild.classList.add('task-left');
    taskNodeFirstChild.textContent = currentTask.title;

    let taskNodeSecondChild = document.createElement('DIV');
    taskNodeSecondChild.classList.add('task-middle');
    
    let taskNodeThirdChild = document.createElement('DIV');
    taskNodeThirdChild.classList.add('task-right');
    
    let childOfThirdChild = document.createElement('I');
    childOfThirdChild.classList.add('fas');
    childOfThirdChild.classList.add('fa-trash-alt');
    childOfThirdChild.classList.add('remove-id-' + currentTask.id);
    taskNodeThirdChild.appendChild(childOfThirdChild);
    taskNodeThirdChild.addEventListener('click', function() {
        let currentNode = document.querySelector('.id-' + currentTask.id);
        SELECTORS.centerDiv.removeChild(currentNode);
    });
    taskNode.appendChild(taskNodeFirstChild);
    taskNode.appendChild(taskNodeSecondChild);
    taskNode.appendChild(taskNodeThirdChild);
    SELECTORS.centerDiv.append(taskNode);
}
