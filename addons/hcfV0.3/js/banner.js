window.addEventListener("scroll", function() {
  var elementTarget = document.getElementById("banner");

  if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {

  $("#banner").fadeOut('slow',function(){});
} else {

}
});
