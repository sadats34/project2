let inputs=document.querySelectorAll('input[type=radio]');
let btn=document.querySelector('button');
let p=document.querySelector('p');
let input1=document.querySelector('select[name=city]');
let day=document.getElementById('day');
let month=document.getElementById('month');



btn.addEventListener('click' , handler2);
function handler2(){
    let gender;
    for (let input of inputs) {
        if(input.checked == true){
        gender = input.value;
        break;
    }
    }

    p.innerHTML=`شما ${gender} و ساکن ${input1.value}  . در روز ${day.value} ماه ${month.value}بدنیا آمدید `
}


day.addEventListener('blur' , handler)

function handler(){
    
if(!(day.value>=1 && day.value<=31)){
    day.nextElementSibling.innerHTML='عدد باید بین 1 و 31 باشد'
}
else{
    day.nextElementSibling.innerHTML='';

}
}




month.addEventListener('blur' , handler1)

function handler1(){
    
if(!(month.value>=1 && month.value<=12)){
    month.nextElementSibling.innerHTML='عدد باید بین 1 و 12 باشد'
}
else{
    month.nextElementSibling.innerHTML='';

}
}









let p1 =document.getElementById('time');
let start=document.getElementById('start');
let end= document.getElementById('end');
let timer;

start.addEventListener('click', ()=>{
   timer= setInterval( timerHandler , 1000);
} )


end.addEventListener('click',()=>{
    clearInterval(timer);
})
function timerHandler(){
    let number = Number(p1.innerHTML) + 1;
    p1.innerHTML = number;
   
}


