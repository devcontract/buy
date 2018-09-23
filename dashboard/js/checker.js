export function checkSoftCap(raised,softcap,deactive_element_class){

setInterval(function(){

if (raised < softcap) {
$(deactive_element_class).addClass('disabled');
$(deactive_element_class).css('pointer-events', 'none');

setCookie('softacapreached','false',365);
} else {
$(deactive_element_class).removeClass('disabled');
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
