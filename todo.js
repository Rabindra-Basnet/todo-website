const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value.trim()=== ''){
        alert('you need to write something')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        // li.setAttribute('class', 'checked')
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        listContainer.insertBefore(li, listContainer.firstChild);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData();
    }
}, false)

inputBox.addEventListener('keypress', (e)=>{
    if(e.key === 'ctrl + Enter'){
        e.preventDefault();
        addTask();
    }
});


const saveData = () =>{
    localStorage.setItem('data', listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');

}
showTask();