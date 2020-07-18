; (function () {
	"use strict";
	const body = document.querySelector('body');
	const preloader = document.querySelector('.ba-preloader');
	const hamb = document.querySelector('.ba-hamb');
	const nav = document.querySelector('.ba-nav');


	// hide loader
	window.addEventListener('load', () => {
		preloader.classList.add('ba-hidden');
		body.classList.remove('ba-loading');
	});


	// show mob menu
	hamb.addEventListener('click', () => {
		hamb.classList.toggle('ba-hamb--active');
		nav.classList.toggle('ba-nav--active');
	});
	// remove acive classes from menu items after resize
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1024) {
			if (hamb.classList.contains('ba-hamb--active')) {
				hamb.classList.remove('ba-hamb--active');
			}
			if (nav.classList.contains('ba-nav--active')) {
				nav.classList.remove('ba-nav--active');
			}
		}
	});


	// header color on scroll
	const header = document.querySelector('.ba-header');

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 100) {
			header.classList.add('scrolls');
		} else if (window.scrollY == 0) {
			if (header.classList.contains('scrolls')) {
				header.classList.remove('scrolls');
			}

		}
	});

	// smooth scroll after click on anchor
	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});



	// products slider

	$('.ba-products__slider').slick({
		prevArrow: '.ba-products__prev',
		nextArrow: '.ba-products__next',
		mobileFirst: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}

		]
	});

})();

