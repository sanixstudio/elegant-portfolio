const toggleBtn = document.querySelector('#toggle-menu-bars');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');
const headerBarInner = document.querySelector('.header-bar-inner');
const headerBar = document.querySelector('.header-bar');
const stickyMenu = document.querySelector('.sticky-menu-container');
const home = document.querySelector('#home');
const anchors = document.querySelectorAll('.nav li a');

// hide responsive menu on click
for (let link of anchors) {
  link.onclick = () => {
    nav.style.display = 'none'
    toggleBtn.classList.remove('fa-times')
  }
}

// toggle responsive menu
toggleBtn.onclick = () => {
  toggleBtn.classList.toggle('fa-times');
  nav.style.display !== "flex" ? nav.style.display = 'flex' : nav.style.display = 'none'
}

// show hide Sticky Menu
document.addEventListener('scroll',(e) => {
  let HeaderHeight = header.offsetHeight;
  if (scrollY >= HeaderHeight) {
    headerBar.style.position = 'fixed'
    headerBar.style.width = '100%'
    headerBar.style.padding = '0 1em'
    headerBar.style.backgroundImage = 'linear-gradient(to right, #503EBC, #4F76D3)'
    headerBarInner.style.maxWidth = '960px'
    headerBarInner.style.margin = '0 auto'
  } else {
    headerBar.style.position = 'initial'
    headerBar.style.backgroundImage = 'unset';
    headerBar.style.padding = 'unset'
  }
})