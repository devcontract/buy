



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

$("#timeText").text("Sale opens in:");


let obj = {10: 1, 20: 10, 50: 45, 100: 80 };

count = Object.keys(obj).length;
var progressBarLength = $("img").attr("alt")
for (let [key, value] of Object.entries(obj)) {

  //  console.log(key, value);
}
//function bonusBar(array){
//  if (array[]){

//  }else{

//  }
//$("#progresBarValue").css("width", progressvalue + "%");
//}

});
