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
  return (navigator.userAgent.indexOf('IEMobile') !== -1)
    || (window.innerWidth < 768)
    // || (typeof window.orientation !== "undefined") 
}

// Words cloud
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end


var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.tooltipText = "{word}: {value}";
series.fontFamily = "Courier New";
series.maxFontSize = am4core.percent(30);

series.text = "Node Javascript PHP Sass Webpack WordPress Vue React Postgres MySql Laravel Express Koa RabbitMQ Less Redis"; 

}); // end am4core.ready()