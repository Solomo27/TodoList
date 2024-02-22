const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addBtn = document.querySelector('.add-btn');

showTask();

function addTask() {
    if (inputBox.value === '') {
        alert('You must type a task!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
};

addBtn.addEventListener('click', () => {
    addTask();
});

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    };
});

document.body.addEventListener('keydown', (e) => {
     if (e.key === 'Enter') {
        addTask();
        saveData();
     }
})

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}