import {log} from './log.js'
import * as cookie from '/js/cookie.js'

$(document).ready(function(){
$("#basic-addon2").text("TES");
log();

if (cookie.getCookie('softacapreached') == 'false'){
  $("#with-myetherwallet").addClass('disabled');
  $("#with-metamask").addClass('disabled');



} else {
  $("#with-myetherwallet").removeClass('disabled');
  $("#with-metamask").removeClass('disabled');
}


})
