
$('.menu-icon').click(function(e){
	$('body').addClass('show-menu');
	$('.menu-popup').addClass('skip-active');
});
$(document).on('click touchend','.overlay-bg, .btn-close, .menu-subscribe-link',function(){
	$('body').removeClass('show-menu');
	$('.menu-popup').removeClass('skip-active');
});