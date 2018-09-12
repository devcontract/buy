export function checkSoftCap(){
setInterval(function(){
var raised = Number($("#raised").html());
var soft = Number($("#softCap").html());

if (raised < soft) {
$("#purchaseTokenButton").addClass('disabled');
$(".deactivate").attr('onclick','return false');
setCookie('softacapreached','false',365);
} else {
$("#purchaseTokenButton").removeClass('disabled');
$(".deactivate").attr('onclick','');
setCookie('softacapreached','true',365);
}

},100);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
}
