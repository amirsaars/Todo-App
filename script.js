const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask(){
    if (inputBox.value === ''){
        alert('You must write something!')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        saveData();
    }else if (event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem('data');
}


showList();