const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav');

toggleMenu.onclick = ()=> {
  toggleMenu.toggleAttribute('fa-bars');
}