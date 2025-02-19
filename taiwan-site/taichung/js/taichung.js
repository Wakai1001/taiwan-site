'use strict';


const mo1= document.getElementById('modal1');
const mo2= document.getElementById('modal2');
const mo3= document.getElementById('modal3');
const mo4= document.getElementById('modal4');

document.getElementById('bt1').onclick=function(){
    mo1.style.display="flex";
}
document.getElementById('close1').onclick=function(){
    mo1.style.display="none";
}

document.getElementById('bt2').onclick=function(){
    mo2.style.display="flex";
}
document.getElementById('close2').onclick=function(){
    mo2.style.display="none";
}

document.getElementById('bt3').onclick=function(){
    mo3.style.display="flex";
}
document.getElementById('close3').onclick=function(){
    mo3.style.display="none";
}

document.getElementById('bt4').onclick=function(){
    mo4.style.display="flex";
}
document.getElementById('close4').onclick=function(){
    mo4.style.display="none";
}
