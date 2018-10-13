var raised = 200;
var hardcap = 300;
var calcbonus  = 10;
var saleBonus2 = 20;
const BASE_RATE = 0.2;

$(document).ready(function() {
  setInterval(function() {
    swowSaleStatus();
    calcAmount();
  }, 200);

  $("#ether-button").click(function() {
    $("#multiCollapseExample1").collapse('hide');

  });
  $("#bitcoin-button").click(function() {
    $("#multiCollapseExample1").collapse('hide');

  });
  $("#usd-button").click(function() {
    $("#multiCollapseExample1").collapse('show');
    $("#currency").text("USD");
    $("#currency1").text("USD");
  });
  $("#eur-button").click(function() {
    $("#multiCollapseExample1").collapse('show');
    $("#currency").text("EUR");
    $("#currency1").text("EUR");
  });

  function swowSaleStatus() {
    $("#timeText").text("Sale opens in:");
  }

  function swowBonusBar() {
    if (bonusBool == false) {
      $("#show_bonus_bar").hide();
    } else {
      $("#show_bonus_bar").show();
      var inputVal = $("#inputAmount").val();
      var progressvalue = (raised * 100) / hardcap
      $("#progresBar").text(progressvalue.toFixed(1) + "%");
      $("#progresBar").css("width", progressvalue + "%");
    }
    return 20;
  }

  function calcAmount() {
    var ethVal = $("#inputAmount").val();
    ethVal = ethVal.replace(',', '.').replace(/[^0-9.]+/, ' '.trim());
    for (var i = 0; i < ethVal.length; i++) {
      if (ethVal.charAt(i) == ".") {
        for (var v = i+1; v < ethVal.length; v++) {
          if (ethVal.charAt(v) == ".") {
            ethVal = ethVal.substring(0, v);
          }
        }
      }
    }
  $("#inputAmount").val(ethVal);
  var tokenAmount = ethVal / BASE_RATE;
$("#tokenAmount").text(tokenAmount);
}



});
