import {log} from './log.js'
import * as cookie from '/dashboard/js/cookie.js'

$(document).ready(function(){
$("#basic-addon2").text("ETH");
log();

if (cookie.getCookie('softacapreached') == 'false'){
  $("#refund-myetherwallet").addClass('disabled');
  $("#refund-metamask").addClass('disabled');


} else {
  $("#refund-myetherwallet").removeClass('disabled');
  $("#refund-metamask").removeClass('disabled');
}

})
