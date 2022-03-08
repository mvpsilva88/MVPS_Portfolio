const btmenu = document.getElementsByClassName ('btmenu');

function toggleMenu() {
	const menu = document.getElementsByClassName('menu');
	menu.classList.toggle('active')
}



btmenu.addEventListener ('click', toggleMenu);