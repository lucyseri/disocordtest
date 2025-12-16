//tab bar
$('#tabBar-include').load('html/tabBar.html',function(){
  $('#tab-bar ul li:nth-child(3)').addClass('active');
});
//section shop
$('section.shop .title span.close-btn').click(function(){
  $('section.shop').hide();
});
//section profile - id
$('section.profile h2 span.name img').click(function(){
  $('section.profile .profile-name').toggleClass('close');
});