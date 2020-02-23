import gallery from 'gallery'

// Init galleries found inside document
gallery(document)

let menuIcon = document.querySelector('.menu-icon')
let menuItemList = document.querySelectorAll('.menu__item')

menuIcon.onclick = toggleMenu
menuItemList.forEach(item => {
  item.onclick = toggleMenu
})

function toggleMenu(event) {
  if (!isMobileDevice())
    return

  let menuItemsElem = document.querySelector('.menu__items')
  let menuIcon = menuItemsElem.firstElementChild

  if (menuItemsElem.classList.contains('menu_clicked')) {
    menuItemsElem.classList.remove('menu_clicked')
    menuIcon.firstElementChild.innerHTML = 'menu'
  }
  else {
    menuItemsElem.classList.add('menu_clicked')
    menuIcon.firstElementChild.innerHTML = 'clear'
  }
}

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") 
    || (navigator.userAgent.indexOf('IEMobile') !== -1)
    || (window.innerWidth <= 800)
}