const toggleBtn =  document.querySelector('.toggle-btn');
const menu =  document.querySelector('.menu');
const menuNav =  document.querySelector('.right');
const logo =  document.querySelector('.left');
const navItems = document.querySelectorAll('.nav-items');

let showMenu = false;

toggleBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        toggleBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        logo.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu=true;
    }else{
        toggleBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        logo.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu=false;
    }
}