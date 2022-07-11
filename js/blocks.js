const blocks = {
    //HTML blocks for creating modal windows
    modalNewListInput: `
    <div class="modal__input">
        <p><input id="inputNewTitleList" type="text" placeholder="Title"></p>
    `
    ,
    modalNewListButtons: `
    <p><button class="yellowButton" id ="createNewToDo">OK</button><button class="yellowButton" id="removeNewListModal">Cancel</button></p>
    `,
    newTask: `
    <li>
        <a href="#" class="check">⚪</a>
        <span class="taskText">I have a bike</span>
        <a href="#" class="close">⛔</a>
    </li>
    `
}

export default blocks