$(document).ready(function(){



  if (document.cookie == "currency=USD"){
    $("#usd").attr('checked',true);
  } else {
    $("#eur").attr('checked',true);
  }

setInterval(function(){
  if ($("#usd").is(':checked')) {
  document.cookie = "currency=USD; path=/;";
    } else if ($("#eur").is(':checked')){
  document.cookie = "currency=EUR; path=/;";
  }


},100);



$("#showme").click(function(){
var cookie = document.cookie;
alert(cookie);
})



});
