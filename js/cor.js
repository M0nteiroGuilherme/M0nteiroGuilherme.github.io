let nav1 = document.getElementById('nav1');
let bntDark = document.getElementById('bntDark');
let body = document.getElementById('body');
let separacao = document.getElementById('separacao');
let menutab = document.getElementById('menutab');
let rodape = document.getElementById('rodape')
let logo = document.querySelector('.logo')
let enti2 = document.querySelector('.enti2')

let roxo1 = '#242440';
let roxo2 = '#48456B';
let salmao = '#F3968A';      
let white = '#ffffff';

bntDark.addEventListener('click', () => {
    separacao.style.backgroundColor = roxo2
    nav1.style.backgroundColor = roxo1
    body.style.backgroundColor =roxo1
    menutab.style.backgroundColor = roxo2
    rodape.style.backgroundColor = roxo1
    logo.style.color = salmao

})