const toggleBtn = document.querySelector('#toggle-menu-bars');
const nav = document.querySelector('.nav');
const header = document.querySelector('header');
const headerBarInner = document.querySelector('.header-bar-inner');
const headerBar = document.querySelector('.header-bar');
const stickyMenu = document.querySelector('.sticky-menu-container');
const home = document.querySelector('#home');
const anchors = document.querySelectorAll('.nav li a');

// hide responsive menu on click
const BrowserWidthIsSmall = window.matchMedia("(max-width: 600px)").matches;
if (BrowserWidthIsSmall) {
  for (let link of anchors) {
    link.onclick = () => {
      nav.style.display = 'none'
      toggleBtn.classList.remove('fa-times')
    }
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

// Copy to Clipboard
function copyText(target) {
  const element = document.getElementById(target);
  const text = element.value;

  copyToClipBoard(text);
  const msg = "Copied to clipboard"
  let oldText = element.previousElementSibling.textContent;

  element.previousElementSibling.textContent = msg;
  element.previousElementSibling.previousSibling.classList.add("spin")
  setTimeout(() => {
    element.previousElementSibling.textContent = oldText;
    element.previousElementSibling.previousSibling.classList.remove("spin")
  }, 1500)

}

// copyToClipBoard function
function copyToClipBoard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return clipboardData.setData("Text", text);
  } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported("copy")
  ) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();

      try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
      } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
      } finally {
          document.body.removeChild(textarea);
      }
  }
}