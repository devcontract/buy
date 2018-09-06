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


/*
var txHref;
var node = "https://rinkeby.etherscan.io";
var account="0x7Cf8b0Bebd11EE69D8CE5F4E80d33a914d067c62";
var multWallet="0xb42E17Bfd102613CaBe98A8f07874c029996cF95";
export function showTransaction(app) {
 setInterval(function() {
  $.getJSON(node + "/api?module=account&action=txlist&address=" + account + "&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken", function(data) {
    var length = data.result.length;
    var i=0;
    for (length = length-1; length > 1; length--) {
      if (data.result[length].to == multWallet.toLowerCase()) {
        i++;
      $("#tran_hist_stringbase").remove();
        renderTransaction(data.result[length], i);

      }
    }

  });

}, 500);
}


function renderTransaction(element, index) {

  var date = Math.random() //new Date(element.timeStamp * 1000); // chenaged the date generation to Math.random() to hav an example . now we are displayin only very last string
//  date = date.toLocaleString();

  txHref = node + "/tx/" + element.hash;
  createBaseTrans();
  createDivTrans(index, 20);
  createDivTrans(date, 150);
  createDivTrans(element.hash, 420);
  createDivTrans(element.blockNumber, 50);
  createDivTrans(element.value / 1e18, 150);

  if (element.confirmations <= 1) {
    createButtonTrans(txHref, "Pending", "blue", 150);
  } else {

    if (element.txreceipt_status == 1) {
      createButtonTrans(txHref, "Success", "green", 150);
    } else {
      createButtonTrans(txHref, "Fail", "red", 150);
    }

  }
  createReturnTrans();
}

function createButtonTrans(txHref, data, color, elemWidth) {
  var a = document.createElement("a");
  a.innerHTML = data + "<br><br>";
  a.style.color = color;
  a.style.cursor = "pointer";
  a.style.backgroundColor = color;
  a.style.border = 'none';
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.height = "20px";
  a.style.verticalAlign = "middle";
  a.style.paddingTop = "4px";
  a.style.marginLeft = "20px";
  a.style.textShadow = '2px 2px black';
  a.setAttribute('class', 'tran_hist_grid2');
  a.style.width = elemWidth + "px";
  a.setAttribute('href', txHref);
  a.setAttribute('target', '_blank');
  document.getElementById('tran_hist_stringbase').appendChild(a);
}

function createDivTrans(data, elemWidth, marginLeft) {
  var div = document.createElement("div");
  div.innerHTML = data;
  div.style.color = 'black';
  div.setAttribute('class', "tran_hist_grid2");
  div.style.width = elemWidth + "px";
  div.style.marginLeft = marginLeft + "px";
  document.getElementById('tran_hist_stringbase').appendChild(div);
}

function createReturnTrans() {
  var newElem = document.createElement("BR");
  document.getElementById('tran_hist_stringbase').appendChild(newElem);
}

function createBaseTrans() {
  var div = document.createElement("div");
  div.style.backgroundColor = "none";
  div.style.color = 'black';
  div.id = 'tran_hist_stringbase';
  div.setAttribute('class', 'grid2');
  document.getElementById('tran_hist_string').appendChild(div);
}
*/
