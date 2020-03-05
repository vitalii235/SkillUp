$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__nav-bottons,.header__title').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
