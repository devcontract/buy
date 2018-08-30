



$(document).ready(function() {
var countdown;
  $(function(){
  //  FlipClock.Lang.Custom = { days:'', hours:'', minutes:'', seconds:'' };
    var opts = {
      clockFace: 'DailyCounter',
      countdown: true,
      language: 'Custom'
    };
     countdown = 1535742540 - ((new Date().getTime())/1000); // from: 08/31/2018 10:09 pm +0300
    countdown = Math.max(1, countdown);
    $('.clock-builder-output').FlipClock(countdown, opts);
  });

  $("#ether-button").click(function(){
        $("#multiCollapseExample1").collapse('hide');
        $("#currency").text("ETH");
    });
    $("#bitcoin-button").click(function(){
        $("#multiCollapseExample1").collapse('hide');
        $("#currency").text("BTC");
    });
    $("#usd-button").click(function(){
        $("#multiCollapseExample1").collapse('show');
        $("#currency").text("USD");
    });
    $("#eur-button").click(function(){
        $("#multiCollapseExample1").collapse('show');
        $("#currency").text("EUR");
    });

$("#timeText").text("Sale opens in:");




});
