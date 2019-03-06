
export function progressBarCalcualtion(){setInterval(function(){
  var x = ( $("#raised").html() / $("#hardCap").html() )*100;
  var pBarVal = x +"%";
  $("#dashboardProgressBar").css("width",pBarVal);
  var  fixedpbarVal = x.toFixed(0);
  fixedpbarVal += "%";
  $("#pbarOutput").text(fixedpbarVal);

},500);
}




//---------------------------------------------------//
var i = 0;
export function timerId(){setInterval(function() {
if (i >= 5) {i = -1};i++;
$("#bar_state" + i).show();
$("#bar_state" + (i - 1) ).hide();
if (i == 5){$("#bar_state0").show();}
},500);};
