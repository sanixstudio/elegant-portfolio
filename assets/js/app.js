const toggleBtn = document.querySelector('#toggle-menu-bars');
const nav = document.querySelector('.nav');

toggleBtn.onclick = ()=> {
  toggleBtn.classList.toggle('fa-times');
  nav.style.display !== "flex" ? nav.style.display = 'flex' : nav.style.display = 'none'
}