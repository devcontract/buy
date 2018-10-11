import {log} from './log.js'
import {log_automat} from './log_automat.js'
import * as cookie from '/dashboard/js/cookie.js'

$(document).ready(function(){
$(".basic-addon2").text("TES");
log_automat();

if (cookie.getCookie('softacapreached') == 'false'){
  $("#with-myetherwallet").addClass('disabled');
  $("#with-metamask").addClass('disabled');
  $(".deactivate").attr('onclick','return false');


} else {
  $("#with-myetherwallet").removeClass('disabled');
  $("#with-metamask").removeClass('disabled');
    $(".deactivate").attr('onclick','');
}


})
