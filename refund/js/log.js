setInterval(function(){
  log();
},1000);

function log(){
   showLog();
}

var id = 0;
function  showLog(){
id++;
  createTr(id);
  createTh(id,"tableSmallFont text-center","1");
  createTd(id,"tableSmallFont text-center",rand());
  createTd(id,"tableSmallFont text-center","0xXXXXXXXX21856b7c900f9d7f6a54cd3367020aa478f2074c04exxxxxxxxxxxxx")
  createTd(id,"tableSmallFont text-center","340");
  createTd(id,"tableSmallFont text-center","34");
  createTd(id,"tableSmallFont text-center","5");

}

function rand(){
   return Math.floor((Math.random() * 8995) + 10);
}

function createTr(id){

var tr = document.createElement('tr');
tr.setAttribute('id', id);
document.getElementById('tbody').appendChild(tr);
}
function createTh(id,classname,index){
var th = document.createElement('th');
th.setAttribute('class', classname);
th.innerHTML = index;
document.getElementById(id).appendChild(th);
}
function createTd(id,classname,data){
  var td = document.createElement('td');
  td.setAttribute('class',classname);
  td.setAttribute('href',"https://rinkeby.etherscan.io")
  td.innerHTML = "<a href='https://rinkeby.etherscan.io'>"+ data +"</a>";
  document.getElementById(id).appendChild(td);
}
