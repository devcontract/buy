var currencyRate;
var symbol;

export function showFiatPrice() {
  setInterval(function() {
    $.getJSON('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR', // getting Json from APi
      function(jd) {
        if (jd != null) {
          if ($("#usd").is(':checked')) {
            symbol = 'USD';
            $(".currency").text(symbol);
          }
          if ($("#eur").is(':checked')) {
            symbol = 'EUR';
            $(".currency").text(symbol);
          }
          currencyRate = jd.ETH[symbol];

          formatFiat("#raised", "#eth_convert_raised", 2);
          formatFiat("#softCap", "#eth_convert_soft", 2);
          formatFiat("#hardCap", "#eth_convert_hard", 2);
        }
      }); // Displaying Jason object that we want
  }, 100);
}; // Interval in MiliSeconds

function formatFiat(from, to, dec) {
  var temp;
  if (temp = $(from).text()) {
    var data = temp * currencyRate;
    var fi = data.toFixed(dec);
    $(to).text("(" + fi + " " + symbol + ")");
  }

}
