const blocks = {
    //HTML blocks for creating modal windows
    modalNewListInput: `
    <div class="modal__input">
        <p><input class="inputNewTitleList" type="text" placeholder="Title" value="Title without name"></p>
    `
    ,
    modalNewListButtons: `
    <p><button class="yellowButton" id ="createNewToDo">OK</button><button class="yellowButton" id="removeNewListModal">Cancel</button></p>
    `,
    newTask: `
    <li>
        <a href="#" class="check">⚪</a>
        <span class="taskText">New Task</span>
        <a href="#" class="close">⛔</a>
    </li>
    `,
    changeTaskText:`
    <div class="modal__input">
        <p><input class="inputNewTitleList" type="text" placeholder="Your text"></p>
    `,
    changedTextTaskButtons: `
    <p><button class="yellowButton" id ="changedTextTask">OK</button><button class="yellowButton" id="removeNewListModal">Cancel</button></p>
    `
}

export default blocks