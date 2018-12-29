//function cop(element){

//  var $temp = $("<input>");
// $("body").append($temp);
// $temp.val($(element).text()).select();
// document.execCommand("copy");
// $temp.remove();
//}
var id = 1;

$(document).ready(function(){
checkConfig();
document.getElementById('addButton').addEventListener('click' , function(){ // Слушаем  событие нажатие кнопки
  $('#tbody > tr > td').remove();
  $('#tbody > tr > button').remove();
  var bonus = document.getElementById('bonus').value;
  var amount = document.getElementById('amount').value;
  var status = {id: id, bonus : bonus, amount: amount};
  $.post('/admin/config/config.php' , status);    // jquery post method
checkConfig();
});


function checkConfig(){

  $.ajax({url:'/admin/config/config.txt',success: function(result){                                            // делаем запрос и запрашиваем фаил
      var data = JSON.parse(result); // преобращование в массив JSON тк дата с сервера возрашается как строка

      if (data != 0){
      createTr(id, 'tableSmallFont');
      createTd(id, "tableSmallFont text-center");
      createTd(data['bonus'],"tableSmallFont text-center");
      createTd(data['amount'],"tableSmallFont text-center");
      createTd('',"tableSmallFont text-center");
      createBtn( "Remove","btn btn-sm myBtn");
      createBtn( "Edit","btn btn-sm myBtn");
      }


}  })}

function createTr(id,classname){
var tr = document.createElement('tr');
tr.setAttribute('id', id);
tr.setAttribute('class', classname);
document.getElementById('tbody').appendChild(tr);
}

function createTd(data,classname){
  var td = document.createElement('td');
  td.setAttribute('scope', "col");
  td.setAttribute('class',classname);
  td.innerHTML = data;
  document.getElementById(id).appendChild(td);
}

function createBtn(label,classname){
  var button = document.createElement('button');
  button.setAttribute('scope', "col");
  button.setAttribute('class',classname);
  button.innerHTML = label;
  document.getElementById(id).appendChild(button);
}

})
