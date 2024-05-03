let btnMenu = document.getElementById('bntAbri')
let menu= document.getElementById('menuMobile')
let fundoDesfoc = document.getElementById('fundoDesfoc')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('menuAberto')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('menuAberto')
})

fundoDesfoc.addEventListener('click',()=>{
    menu.classList.remove('menuAberto')
})


