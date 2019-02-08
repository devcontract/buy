$(document).on('scroll', function() {
	$(".slideText").css("top", Math.max(280 - 0.2*window.scrollY, 0) + "px");
  $(".static").css("opacity", Math.max(1 - 0.004*window.scrollY, 0));
})
