/* SCROLL */

var parallax = document.querySelectorAll(".parallax");
var	speed = -0.25;

window.onscroll = function() {
	[].slice.call(parallax).forEach(function(el, i) {

		var windowYOffset = window.pageYOffset, elBackgroundPos = "50% " + (windowYOffset * speed + i * 200) + "px";

		el.style.backgroundPosition = elBackgroundPos;

	});
};

/* CLICK SCROLL */

jQuery(document).ready(function($)
{
    $('.container a[href^="#"]').on('click', function(evt){
	   var target = $(this).attr('href');
       $('html, body').stop().animate({scrollTop: $(target).offset().top}, 800 );
       evt.preventDefault(); 
    });


});