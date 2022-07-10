import modalContent from "./modalContent.js"
import ModalWindow from "./ModalWindow.js"
import ToDoList from "./TooDoList.js"

document.addEventListener('click', (e) => {
    //A modal window for creating a new To-Do List
    if (e.target.getAttribute('id') == 'addNewList') {
        new ModalWindow(`Let's create a new To-Do List:`, modalContent.modalNewListInput, modalContent.modalNewListButtons)
        
    } 
    //new To-Do List
    else if (e.target.getAttribute('id') == 'createNewToDo') {
        let inputNewTitleList = document.getElementById('inputNewTitleList').value
        let inputNewTask = document.getElementById('inputNewTask').value

        new ToDoList(inputNewTitleList, inputNewTask)

    }
})





// function createToDoList(title, list) {
//     const headerTag = document.getElementsByClassName('notion')[0]
//     headerTag.insertAdjacentHTML('beforeend',
//     `
//         <div class="notion__item">
//             <ul>
//                 <li class="title">${title}</li>
//                 <li>${list}<a href="#" class="close">❌</a></li>
//                 <li class="listMenu">
//                     <button class="yellowButton">Add</button>
//                     <button class="yellowButton">Remove all</button>
//                 </li>
//             </ul>
//         </div>    
//         `
//         )
//         console.log(headerTag);
// }

// createToDoList('sex', 'test')


// document.addEventListener("click", (e) => {
//     const tagName = e.target.tagName
//     const textStyleChecker = e.target.style
//     const titleTag = e.target.getAttribute('class')
//     const deleteTask = e.target.getElementsByClassName('close')


//     if (textStyleChecker.textDecoration == 'line-through') {
//         textStyleChecker.textDecoration = 'none'
//     }

//     else if (tagName === 'LI' && titleTag !== 'title') {
//         textStyleChecker.textDecoration = 'line-through'
//     }
//     else if (deleteTask) {
//         console.log('close')
//         this.remove()
//     }
// })