
class ModalWindow {
    constructor(h1, mainContent, buttons){
        this.h1 = h1
        this.mainContent = mainContent
        this.buttons = buttons
        this.createMain()
    }

    createMain() {
        const getTag = document.body
        getTag.insertAdjacentHTML('beforeend',
            `
            <div class="modal">
                <div class="modal__window">
                    <h1 class ="modal__window__h1">${this.h1}</h1>
                        ${this.mainContent}
                        ${this.buttons}
                    </div>
                </div>
            </div>
            `
        )
    }

    static remove(){
        const getRemoveEl = document.getElementById('removeNewListModal')
        getRemoveEl.style.display = 'none'
    }
}


export default ModalWindow


/* <div class="modal">
                <div class="modal__window">
                    <h1 class ="modal__window__h1">Create New To-Do List</h1>
                        <div class="modal__input">
                        <p><input type="text" placeholder="Title"></p>
                        <p><input type="text" placeholder="Your first list (not necessarily)"></p>
                        <p><button class="yellowButton">Create</button><button class="yellowButton">Cancel</button></p>
                    </div>
                </div>
            </div> */

