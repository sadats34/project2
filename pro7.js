const acc = document.querySelector('.accordion');
const panel=document.querySelector('.panel');

acc.addEventListener('click' , function(){
    acc.classList.toggle("active");

    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }
    else{
        panel.style.maxHeight= panel.scrollHeight + 'px';

    }

})


const sidebar = document.querySelector('.sidebar');
const cntrl =document.querySelector('.cntrl');

cntrl.addEventListener('click' , function(){
    cntrl.classList.toggle('open');
    sidebar.classList.toggle('show');

})