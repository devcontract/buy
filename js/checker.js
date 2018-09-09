 function checkSoftCap(){

  setInterval(function(){

if ( $('#raised').html() <= $('#softCap').html() )
{
  $('#purchaseTokenButton').addClass('disabled');
} else {
$('#purchaseTokenButton').removeClass('disabled');
}


},500);
}
