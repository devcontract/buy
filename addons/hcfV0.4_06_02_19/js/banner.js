$(document).ready(function() {
      $(window).scroll(function(event) {
          let scroll = $(this).scrollTop();
          let opacity = 0.350 + (scroll / 1000);
  $('#opacity').text(opacity);
          if (opacity > 0) {

              $('#banner').css('opacity', opacity);

          }
      });
  });
