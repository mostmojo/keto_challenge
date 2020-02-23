// Initialize the slick slideshow plugins. Responsive breakpoints for mobile added.

(function($) {
"use strict";

$('.one-time').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
});

$('.slider-how-to').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	dots: false,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}
		}
	]
});

// Hide green button and show form on mobile

$("#cta-mobile").click(function(e) {
	e.preventDefault();

	$(this).hide();
	$("form").show();
});

// Cookie value change to 'clicked' on click event

$("#cta-button-1").click(function(e) {
	e.preventDefault();
	createCookie("cta_button_1", "clicked", 365);
});

$("#cta-button-2").click(function(e) {
	e.preventDefault();
	createCookie("cta_button_2", "clicked", 365);
});

$("#cta-button-3").click(function(e) {
	e.preventDefault();
	createCookie("cta_button_3", "clicked", 365);
});


// Geoplugin for IP detection. It only works locally or on http. Paid version works with https.

$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
	$("#country-id").text(data.geoplugin_countryName);
});


// Reading time cookie

var startTime = new Date().getTime();

var time = setInterval(function() {
	var endTime = new Date().getTime();

	var timestamp = endTime - startTime;
	var reading_time = new Date(timestamp).getMinutes() + "min" + "" + new Date(timestamp).getSeconds() + "sec";

	createCookie("time_reading", reading_time, 365);
}, 1000);

/*
	var time = new Date().getTime();
	var timestamp = (time + 3600) - time;
	console.log(new Date(timestamp).getHours() + "hrs");
	console.log(new Date(timestamp).getMinutes() + "mins");
	console.log(new Date(timestamp).getSeconds() + "secs");
*/

// Scroll cookie function

$(window).scroll(function (event) {
	var h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight';

	var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
	createCookie("scrolled", parseInt(percent) + "percent", 365);
	//console.log(percent + "%");
});

})(jQuery);

// Create cookie with name, value and expiration date

function createCookie(name, value, expires) {
  var cookie = name + "=" + escape(value) + ";";

  if (expires) {
    if(expires instanceof Date) {
      if (isNaN(expires.getTime()))
       expires = new Date();
    }
    else
      expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);
    cookie += "expires=" + expires.toGMTString() + ";";
  }

  document.cookie = cookie;
}

// Timer to boot the 10 minute countdown

function timerBoot(duration, display) {
	var countdown = duration,
			mins, secs;
	setInterval(function() {
			mins = parseInt(countdown / 60, 10);
			secs = parseInt(countdown % 60, 10);
			mins = mins < 10 ? "0" + mins : mins;
			secs = secs < 10 ? "0" + secs : secs;
			display.textContent = mins + ":" + secs;
			if (--countdown < 0) {
					countdown = duration;
			}
	}, 1000);
}
window.onload = function() {
	var tenMins = 60 * 10,
			display = document.querySelector('#countdown');
	timerBoot(tenMins, display);
};