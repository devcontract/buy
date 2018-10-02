export function checkInput() {
  var inputDollars = [5, 10, 20, 40];
  var bonusBarPosition = ["10%", "35%", "75%", "100%"];

  setInterval(function() {

    if ($("#inputAmount").val() >= inputDollars[0] && $("#inputAmount").val() < inputDollars[1]) {
      $("#progresBarValue").css("width", bonusBarPosition[0]);
    } else if ($("#inputAmount").val() >= inputDollars[1] && $("#inputAmount").val() < inputDollars[2]) {
      $("#progresBarValue").css("width", bonusBarPosition[1]);
    } else if ($("#inputAmount").val() >= inputDollars[2] && $("#inputAmount").val() < inputDollars[3]) {
      $("#progresBarValue").css("width", bonusBarPosition[2]);

    } else if ($("#inputAmount").val() >= inputDollars[3]) {
      $("#progresBarValue").css("width", bonusBarPosition[3]);

    } else {
      $("#progresBarValue").css("width", "0%");
    }


  }, 100);

}
