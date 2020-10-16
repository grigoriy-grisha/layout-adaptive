
const menuButton = document.querySelector('[data-menu="open"]');
const menu = document.querySelector('[data-menu="menu"]');
const closeButton = document.querySelector('[data-menu="close"]')

function openMenu(menu) {
    menu.classList.add('navigation-menu_open');

}
function closeMenu(menu) {
    menu.classList.remove('navigation-menu_open');

}

if (menuButton) {
    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        openMenu(menu)
    })
}

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu(menu)
})
