



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


let test = {10: 1, 20: 10, 50: 45, 100: 80 };

for (let [key, value] of Object.entries(test)) {
  
  //  console.log(key, value);
}
//function bonusBar(array){
//  if (array[]){

//  }else{

//  }
//$("#progresBarValue").css("width", progressvalue + "%");
//}

});
