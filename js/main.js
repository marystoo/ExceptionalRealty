$(document).ready(function(){

	////mobile menu////

	$('a.menu-icon').click(function(){
		$('#menu-links').slideToggle();
	});

	// fix hidden links on window resize

	$(window).resize(function() {
		if ($(window).width() > 700px) {
			$('menu-links').removeAttr('style');
		}
	});

});