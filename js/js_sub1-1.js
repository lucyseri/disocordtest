//tab-bar
$('#tabBar-include').load('html/tabBar.html',function(){
  $('#tab-bar ul li:first-child').addClass('active');
});
//header
$('#header-include').load('html/header.html', function(){
  $('header ul li:nth-child(3)').addClass('active');
  $('header ul li:nth-child(3)').addClass('sound');
  $('header ul li:nth-child(3) a').css("borderRadius", "14px");
});
//main
$('section.slide-menu h2').click(function(){
  $(this).toggleClass('toggle-menu');
  $(this).siblings().toggleClass('toggle-menu');
});