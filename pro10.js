let addBtn=document.querySelector('button');
let tasklist=document.querySelector('ul');
let input=document.querySelector('input');



addBtn.addEventListener('click', ()=>{
    if(!(input.value==='')){
    let text=input.value;
    let task= createTask(text);
    task.innerHTML += '<span class="closebtn"><i class="fa fa-trash-o"></i></span>';
    tasklist.appendChild(task);
    input.value='';
    }
})

function createTask(text){
     let li =document.createElement('li');
     li.textContent= text;
     return li;

}
tasklist.addEventListener('click',(e)=>{
    if(e.target.nodeName === 'I'){
    e.target.parentElement.parentElement.style='display : none';
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
})