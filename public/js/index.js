const menu = document.querySelector('.fa-bars')
const navList = document.querySelector('.topNav')

menu.addEventListener('click', ()=>{
    console.log('1')
    navList.classList.toggle('active')
})