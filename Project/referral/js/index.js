

function copyClip(){
  var copyText = document.getElementById('addrInput');
  copyText.select();
  document.execCommand("copy");
}
