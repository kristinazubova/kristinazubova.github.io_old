document.querySelector('.menu-icon').onclick = function(event) {
  var menuItemsElem = this.parentElement

  if (menuItemsElem.classList.contains('menu_clicked')) {
    menuItemsElem.classList.remove('menu_clicked')
  }
  else {
    menuItemsElem.classList.add('menu_clicked')
  }
}