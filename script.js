const inputField = document.getElementById('inputField');
const listContainer = document.getElementById('list-container');

function addTask(){
    if (inputField.value === ''){
        alert('You must write something')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputField.value; //add text as input into the li variable
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);  
    }
    inputField.value = '';
    saveData();
}

listContainer.addEventListener('click', function(i){
    if (i.target.tagName === 'LI'){
        i.target.classList.toggle('checked');
        saveData();
    }
    else if (i.target.tagName === 'SPAN'){
        i.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

