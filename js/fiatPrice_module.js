var currencyRate;
var symbol;

export function showFiatPrice() {
  setInterval(function() {
    $.getJSON('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR', // getting Json from APi
      function(jd) {
        if (jd != null) {

          if (getCookie('currency') == "USD") {
            symbol = 'USD';
            $(".currency").text(symbol);
          }
          if (getCookie('currency') == "EUR") {
            symbol = 'EUR';
            $(".currency").text(symbol);
          } else if(getCookie('currency') == ""){
            symbol = 'USD';
            $(".currency").text(symbol);
            document.cookie = "currency=USD; path=/;";
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

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
