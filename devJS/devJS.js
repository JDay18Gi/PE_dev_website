

$(document).ready(function() {

/* ------ Welcome Page -----  */

//scroll for click welcome logo
	$("#logo").on("click", function() {
		var y = $(window).scrollTop();
		$(window).scrollTop(y+150);
	});

//front page background fading on startup
	$("#welcomePage").fadeTo(0 , 0);
	$("#welcomePage").fadeTo(6500 , 1, function() {
			$("#welcomePage").fadeTo(2000 , 0.6, function() {
				$("#welcomePage").fadeTo(1000, 1, function() {
					$("#welcomePage").css("background-color", "rgba(102, 204, 255, 0.4)");
				});
			});
	});

//logo animation upon scroll
	$(window).on("scroll", function() {
		var y_scroll = window.pageYOffset;

		if(y_scroll > 100) {
			$("#logo").css("width", "20%");
			$("#logo").css("position", "fixed");
			$("#logo").css("left", "1%");
			$("#logo").css("top", "1%");
			$("#logo").css("margin", "0");
			$("#row1").css("height","23em");
		}
		if(y_scroll < 10) {
			$("#logo").css("width", "50%");
			$("#logo").css("position", "static");
			$("#row1").css("height","45em");
			$("#logo").css("margin", "10% auto 30% auto");
		}
	});

// projectImage sliders
	setInterval(function() {
		$("#pSlider a:last-child").fadeTo(1000, 0, function() {
			$("#pSlider a:last-child").delay(3000).fadeTo(1000, 1);
		});
	}, 8000);

// background color alternating

	$("#workPage #p3, #workPage #p1").delay(5000).queue(function (next) {
			$(this).css("background-color", "rgba(255, 255, 255, 0.5)");
			next();
			});

	setInterval( function() {
		$("#workPage #p3, #workPage #p1").queue(function (next) {
			$(this).css("background-color", "rgba(102, 204, 255, 0.9)");
			next();
			});

		$("#workPage #p3, #workPage #p1").delay(10000).queue(function (next) {
			$(this).css("background-color", "rgba(255, 255, 255, 0.5)");
			next();
			});
		}, 20000);
});


	/*var projectSlider = function(projectNum) {
		var id = "'#p"+projectNum+" #pSlider'";
		var slider = $(id).css("background-image", "url(devImages/genSite2.png)");
		setInterval(slider, 3000);
	}

	projectSlider(1);*/