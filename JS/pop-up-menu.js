let pop = Array.from(document.getElementsByClassName('pop'));
let menu = Array.from(document.getElementsByClassName('menu-item'));
let sideMenu = document.getElementById('pop-up-menu');



function toggle() {
    sideMenu.classList.toggle('hide');
}



menu.forEach((menuItem)=>{
    menuItem.addEventListener('click', ()=> {
        let index = menu.indexOf(menuItem)
        pop[index-1].classList.toggle('hide')
    })
})



