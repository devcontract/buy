

$(document).ready(function(){

$(".login_class").click(function(){

$("#user_login_hiden_input").val($(this).html());

getLoginLog("dyn_table");

});

})
