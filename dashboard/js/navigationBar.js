
$(document).ready(function(){

  $("#openNavBtn").hide();
});
  function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
    $("#openNavBtn").hide();
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    $("#openNavBtn").show();
  }
