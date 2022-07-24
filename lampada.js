const ligar = document.getElementById('on');
const desligar = document.getElementById('off');
const lamp = document.getElementById('lamp');
const backg = document.getElementById('backg')

function verify (){
    return lamp.src.indexOf('quebrada') > -1;
}


function lampon (){
    if (!verify()){
    lamp.src = './img/ligada.png';}
}

function lampOFF (){
    if (!verify()){
    lamp.src = './img/desligada.png';}
}

function broken (){
    lamp.src = './img/quebrada.png'
}

on.addEventListener('click',lampon);
off.addEventListener('click',lampOFF);
lamp.addEventListener ('mouseover',lampon);
lamp.addEventListener('mouseleave',lampOFF)
lamp.addEventListener ('dblclick',broken)