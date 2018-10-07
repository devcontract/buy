export function getLogin(){
  var http = new XMLHttpRequest();
  var url = '/admin/php/admin_log.php';
  var name = $("#input").val();
  var params = 'login=' + name;
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          document.getElementById('txtHint').innerHTML = http.responseText;

      }
  }
  http.send(params);
}
