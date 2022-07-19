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
        const inputNewTitleList = document.getElementsByClassName('inputNewTitleList')[0].value
        const newToDo = new ToDoList(inputNewTitleList)
        newToDo.createToDoList()
        //closing modal window after pressing "OK"
        ModalWindow.removeModal()
    }
    //cancel new To-Do List
    else if (e.target.getAttribute('id') == 'removeNewListModal' || e.target.getAttribute('class') == 'modal' ) {
        ModalWindow.removeModal()
    }
    //TO-DO LIST MANIPULATION
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
    //edit title and task
    else if (e.target.getAttribute('class') == 'taskText' || e.target.getAttribute('class') == 'title') {
        let modalChangeTaskText = new ModalWindow('Change name:', blocks.changeTaskText, blocks.changedTextTaskButtons)
        modalChangeTaskText.create()

        const taskInnerText = document.getElementsByClassName('inputNewTitleList')[0]
        const target = e.target
        const changeTextBtn = document.getElementById('changedTextTask')

        taskInnerText.value = target.innerText
        
        changeTextBtn.onclick = () => {
            target.innerText = taskInnerText.value
            //closing modal window after pressing "OK"
            ModalWindow.removeModal()
        }
    }
    //remove task
    else if (e.target.getAttribute('class') == 'close') {
        e.target.parentElement.remove()
    } 
    //BUTTONS LOGIC
    else if (e.target.getAttribute('class') == 'yellowButton') {
        const target = e.target

        switch (target.innerText) {
            case 'Add task':
                target.parentElement.parentElement.previousElementSibling.insertAdjacentHTML('afterBegin', blocks.newTask)
                break
            
            case 'Delete marked':
                const taskList = target.parentElement.parentElement.previousElementSibling.querySelectorAll('li > a.check')
                taskList.forEach((element) => {
                    if (element.innerText == '⚫') {
                        element.parentElement.remove()
                    }
                })
                break

            case 'Remove list':
                target.parentElement.parentElement.parentElement.remove()
                break
        } 
    }
})