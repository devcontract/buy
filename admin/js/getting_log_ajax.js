

export  function askGeth(elementId){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(elementId).innerHTML = this.responseText;
      }
    }
    xmlhttp.open("GET", "../php/admin_log.php",true);
    xmlhttp.send();
  }
