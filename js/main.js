import blocks from "./blocks.js"
import ModalWindow from "./ModalWindow.js"
import ToDoList from "./TooDoList.js"

document.addEventListener('click', (e) => {
    //A modal window for creating a new To-Do List
    if (e.target.getAttribute('id') == 'addNewList') {
        const newModalForToDo = new ModalWindow(`Let's create a new To-Do List:`, blocks.modalNewListInput, blocks.modalNewListButtons)
        newModalForToDo.create()
    } 
    //new To-Do List
    else if (e.target.getAttribute('id') == 'createNewToDo') {
        let inputNewTitleList = document.getElementsByClassName('inputNewTitleList')[0].value
        const newToDo = new ToDoList(inputNewTitleList)
        newToDo.createToDoList()
        //closing modal window after pressing "OK"
        ModalWindow.removeModal()
    }
    //cancel new To-Do List
    else if (e.target.getAttribute('id') == 'removeNewListModal' || e.target.getAttribute('class') == 'modal' ) {
        ModalWindow.removeModal()
    }
    //To-Do List manipulation
    //check validator
    else if (e.target.getAttribute('class') == 'check') {
        if (e.target.innerText == '⚪') {
            e.target.innerText = '⚫'
            e.target.nextSibling.nextSibling.style.textDecoration = 'line-through'
        } else {
            e.target.innerText = '⚪'
            e.target.nextSibling.nextSibling.style.textDecoration = 'none'
        } 
    }
    //add task
    else if (e.target.getAttribute('class') == 'yellowButton Add') {
        e.target.parentElement.insertAdjacentHTML('beforebegin', blocks.newTask) 
    }  
    //remove task
    else if (e.target.getAttribute('class') == 'close') {
        e.target.parentElement.remove()
    }  

    //edit task
    else if (e.target.getAttribute('class') == 'taskText') {
        let changeTextBlock = e.target
        let modalChangeTaskText = new ModalWindow('Change task:', blocks.changeTaskText, blocks.changedTextTaskButtons)
        modalChangeTaskText.create()
        let taskInnerText = document.getElementsByClassName('inputNewTitleList')[0]
        taskInnerText.value = changeTextBlock.innerText
        let changeTextBtn = document.getElementById('changedTextTask')
        changeTextBtn.onclick = () => {
            changeTextBlock.innerText = taskInnerText.value
            //closing modal window after pressing "OK"
            ModalWindow.removeModal()
        }
    }
})