class ToDoList {
    constructor(title){
        this.title = title
    }

    createToDoList() {
        const getTag = document.getElementsByClassName('notion')[0]
        getTag.insertAdjacentHTML('beforeend',
            `
            <div class="notion__item">
                <ul>
                    <li class="title">${this.title}</li>
                </ul>
                <ul>
                </ul>
                <ul>
                    <li class="listMenu">
                        <button class="yellowButton">Add task</button>
                        <button class="yellowButton">Delete marked</button>
                        <button class="yellowButton">Remove list</button>
                    </li>
                </ul>
            </div>   
            `
        )
    }

    removeTask() {
        
    }
}

export default ToDoList