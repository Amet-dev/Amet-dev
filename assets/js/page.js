$(document).ready(function() {
//шапка stick	
let $window = $(window);
let top_header = $('.header__body').offset().top;

	window.addEventListener('scroll', function() {
		if ($window.scrollTop()>top_header){
			$('.header__body').addClass('active');
			$('.header__contact-list').addClass('scroll');
		}
		else {
			$('.header__body').removeClass('active');
			$('.header__contact-list').removeClass('scroll');
		}
	});
//бургер
  $('.header__burger').click(function(event) {
     $('.header__burger,.header__menu').toggleClass('active');
  $('body').toggleClass('lock')
  });
});