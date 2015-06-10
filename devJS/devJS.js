

$(document).ready(function() {
	$("#welcomePage").fadeTo(0 , 0);
	$("#welcomePage").fadeTo(6500 , 1, function() {
			$("#welcomePage").fadeTo(2000 , 0.6, function() {
				$("#welcomePage").fadeTo(1000, 1, function() {
					$("#welcomePage").css("background-color", "rgba(102, 204, 255, 0.4)");
				});
			});
	});

	$(window).on('scroll', function() {
		var y_scroll = window.pageYOffset;

		if(y_scroll > 100) {
			$("#logo").css("width", "50%");
			$("#logo").css("position", "fixed");
			$("#logo").css("left", "-15%");
			$("#logo").css("top", "1%");
			$("#row1").css("height","30em");
		}
		if(y_scroll < 10) {
			$("#logo").css("width", "100%");
			$("#logo").css("position", "static");
			$("#row1").css("height","45em");
		}
	});


});




/*
		$("#welcomePage").fadeTo(1000, 0.2, function(){
	})*/