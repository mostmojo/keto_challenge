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

  $("#cta-mobile").click(function(e) {
    e.preventDefault();

    $(this).hide();
    $("form").show();
  });

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

  $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
    $("#country-id").text(data.geoplugin_countryName);
  });


  //var time = new Date().getTime();
  //var timestamp = (time + 3600) - time;
  //console.log(new Date(timestamp).getHours() + "hrs");
  //console.log(new Date(timestamp).getMinutes() + "mins");
  //console.log(new Date(timestamp).getSeconds() + "secs");


  //READING TIME COOKIE
  var startTime = new Date().getTime();

  var time = setInterval(function() {
    var endTime = new Date().getTime();

    var timestamp = endTime - startTime;
    var reading_time = new Date(timestamp).getMinutes() + "min" + "" + new Date(timestamp).getSeconds() + "sec";

    createCookie("time_reading", reading_time, 365);
  }, 1000);

  //SCROLL COOKIE
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

// /* ----------- Timer to boot the 10 minute countdown ----------- */

function timerBoot(duration, display) {
	let timer = duration;
	let minutes;
	let seconds;
	setInterval(() => {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? `0${minutes}` : minutes;
			seconds = seconds < 10 ? `0${seconds}` : seconds;
			display.textContent = `${minutes}:${seconds}`;
			if (--timer < 0) {
					timer = duration;
			}
	}, 1000);
}
window.onload = () => {
	const tenMinutes = 60 * 10;
	const display = document.querySelector('#countdown');
	timerBoot(tenMinutes, display);
};