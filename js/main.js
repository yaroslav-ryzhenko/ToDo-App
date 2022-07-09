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
                        <li>${this.list}<a href="#" class="close">❌</a></li>
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

const addNewList = document.getElementById('addNewList')

addNewList.addEventListener('click', (e) => {
    const someList = new ToDoList('Some shit', 'Hello world')
    console.log(someList);
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