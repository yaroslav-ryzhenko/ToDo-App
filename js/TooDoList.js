class ToDoList {
    constructor(title, text){
        this.title = title
        this.list = text
        this.createToDoList()
    }

    createToDoList(title, list) {
        const getTag = document.getElementsByClassName('notion')[0]
        getTag.insertAdjacentHTML('beforeend',
            `
                <div class="notion__item">
                    <ul>
                        <li class="title">${this.title}</li>
                        <li>${this.list}<a href="#" class="close">&#10006</a></li>
                        <li class="listMenu">
                            <button class="yellowButton">Add</button>
                            <button class="yellowButton">Remove all</button>
                        </li>
                    </ul>
                </div>    
            `
        )
    }

}

export default ToDoList