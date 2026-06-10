//tab-bar
$('#tabBar-include').load('html/tabBar.html',function(){
  const activeTabMenu = document.querySelector('#tab-bar ul li:first-child');
  activeTabMenu.classList.add('active');
  activeTabMenu.classList.add('alarm');
  const alarmTabmenu = document.querySelector('#tab-bar ul li:first-child span.state');
  alarmTabmenu.innerText = 1;
});
//header
$('#header-include').load('html/header.html', function(){
  $('header ul li:first-child').addClass('active');
  $('header ul li:nth-child(3)').addClass('alarm');
  $('header ul li:nth-child(3) span.badge').text('1');
});