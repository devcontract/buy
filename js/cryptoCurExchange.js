export function getCurrancyRate(raised,softcap,hardcap){
setInterval(function(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
      var response = JSON.parse(this.responseText);

     $("#eth_convert_raised").html(response.valueRaised + " " + response.symbol);
     $("#eth_convert_soft").html(response.valueSoft + " " + response.symbol);
     $("#eth_convert_hard").html(response.valueHard + " " + response.symbol);
    }
  };
  xmlhttp.open("GET", "/php/cryptoExchangeRate.php?raised=" + raised + "&softcap=" + softcap + "&hardcap=" + hardcap ,true);
  xmlhttp.send();
},1000)

}
