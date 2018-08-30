$(document).ready(function() {

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


});
