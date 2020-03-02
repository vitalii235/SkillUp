$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__nav-bottons').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
