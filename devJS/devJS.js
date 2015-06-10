

$(document).ready(function() {
	$("#welcomePage").fadeTo(0 , 0);
	$("#welcomePage").fadeTo(6500 , 1, function() {
			$("#welcomePage").fadeTo(6000 , 0.6, function() {
				$("#welcomePage").fadeTo(1000, 1, function() {
					$("#welcomePage").css("background-color", "rgba(102, 204, 255, 0.4)");
				});
			});
	});

/*	$("#logo").on("scroll", function(){
		$("#logo").css("width", "50%");
	})
*/

});




/*
		$("#welcomePage").fadeTo(1000, 0.2, function(){
	})*/