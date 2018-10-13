
export function minInput(){  setInterval(function() {                //this function calculates % and bonus
    var x = (0.3 * 1 + 0.2 * 1) / 100;
  if ($("#inputAmount").val() <= x) {
      $("#inputAmount").css("border", "2px solid red");

      //token_calc.innerHTML = "Min Limit";
    } else {
$("#inputAmount").css("border", "none");
}
  }, 10)}
