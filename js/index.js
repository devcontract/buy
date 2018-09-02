$(document).ready(function(){




  document.getElementById('ether-button');
  document.getElementById('bitcoin-button');
$("#saleStatus").text("going to finish in");


  $(".currencyName").text("ETH");
  $(".tokenName").text("TES");
  $("#tokenPerEth").text("1000");
  $("#stage-1pct").text("50%");
  $("#stage-2pct").text("30%");
  $("#stage-3pct").text("20%");
  $("#stage-4pct").text("0%");

var bonusBarVisible = true;
var stageBar = true;


  $("#bonus-1pct").text("50%");
  $("#bonus-2pct").text("30%");
  $("#bonus-3pct").text("20%");
  $("#bonus-4pct").text("0%");

  $("#ether-1E").text("E1");
  $("#ether-2E").text("E5");
  $("#ether-3E").text("E5");
  $("#ether-4E").text("E10");

  $("#standartPrice").text("10");
  $("#calcbonus").text("2222");
  $("#tokenAmount").text("200");
  $("#saleBonus1").text("1232");
  $("#saleBonus2").text("8888");


  $("#minimumInvestment").text("500");
  $("#paymentAddressInput");

  $("#gasLimitValue").text("21000");
  $("#gasPriceValue").text("9");
  $("#paymentCurrency").text("Ethereum");



  $("#bitcoin-button").click(function() {
    $("#etherButtonsHide").hide();
    $("#paymentCurrency").text("Bitcoin");
  });
  $("#ether-button").click(function() {
    $("#etherButtonsHide").show();
    $("#paymentCurrency").text("Ethereum");
  });



});
