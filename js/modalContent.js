//HTML blocks for creating modal windows
const modalContent = {
    modalNewListInput: `
    <div class="modal__input">
        <p><input id="inputNewTitleList" type="text" placeholder="Title"></p>
        <p><input id="inputNewTask"type="text" placeholder="Your first task(not necessarily)"></p>
    `,
    modalNewListButtons: `
    <p><button class="yellowButton" id ="createNewToDo">OK</button><button class="yellowButton" id="removeNewListModal">Cancel</button></p>
    `
}

export default modalContent