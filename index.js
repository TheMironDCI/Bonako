const menu = document.getElementById('menu');
const bars = document.getElementById('bars');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})