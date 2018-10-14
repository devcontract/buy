$(document).ready(function(){

  $(".currencyName").text("EUR");
  $(".cryptoCurrencyName").text("ETH");
  $(".tokenName").text("TES");



  function cop(element){

    var $temp = $("<input>");
   $("body").append($temp);
   $temp.val($(element).text()).select();
   document.execCommand("copy");
   $temp.remove();

  }


})
