
class ModalWindow {
    constructor(h1, mainContent, buttons){
        this.h1 = h1
        this.mainContent = mainContent
        this.buttons = buttons
    }

    create() {
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

    static removeModal(){
        const getRemoveModal = document.getElementsByClassName('modal')[0]
        getRemoveModal.remove()
    }
}


export default ModalWindow

