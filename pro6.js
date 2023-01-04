const currentNum =document.getElementById("num");
const increaseBtn=document.getElementById("increase");
const resetBtn=document.getElementById("reset");
const decreaseBtn=document.getElementById("decrese");
let newNum;

increaseBtn.addEventListener('click' , function(){
   newNum = Number(currentNum.innerHTML) + 1;
   currentNum.innerHTML = newNum;
});

resetBtn.addEventListener('click' , function(){
    currentNum.innerHTML = 0;

});

decreaseBtn.addEventListener('click' , function(){
    newNum = Number(currentNum.innerHTML) - 1;
    currentNum.innerHTML = newNum;
});