let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour')
let deg = 6;


setInterval(clockHandler , 1000);

function clockHandler(){
    let d = new Date();
    let m=d.getMinutes()*6;
    let s= d.getSeconds();
    let h= d.getHours()*30;
    
    
sec.style.transform=`rotatez(${d.getSeconds()*6}deg)`;
min.style.transform=`rotatez(${m}deg)`;
hour.style.transform=`rotatez(${h + (m/12)}deg)`;




}

