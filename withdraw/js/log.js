export function log(){

  var txHref;
  var node = "https://rinkeby.etherscan.io";
  var account="0x7Cf8b0Bebd11EE69D8CE5F4E80d33a914d067c62";
  var multWallet="0xb42E17Bfd102613CaBe98A8f07874c029996cF95";

  setInterval(function() {

   $.getJSON(node + "/api?module=account&action=txlist&address=" + account + "&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken", function(data) {
     var length = data.result.length;

  $(".remove").remove(); // this clear the last record

     for (length = length-1; length > 1; length--) {
       if (data.result[length].to == multWallet.toLowerCase()) {

     //  $("#tbody").remove();
         showLog(data.result[length]);

       }
     }

   });

  }, 100);



  var id = 0;
  function  showLog(element){
  id++;
  var ts = new Date();

    createTr(id, "remove");
    createTh(id,"tableSmallFont text-center remove","1");
    createTd(id,"tableSmallFont text-center remove",ts.toLocaleDateString() + "<br>" + ts.toLocaleTimeString());
    createTd(id,"tableSmallFont text-center remove","0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe")
    createTd(id,"tableSmallFont text-center remove","10");
    createTd(id,"tableSmallFont text-center remove","21000");
    createTd(id,"tableSmallFont text-center remove",1230);

  }

  function rand(){
     return Math.floor((Math.random() * 8995) + 10);
  }

  function createTr(id,classname){

  var tr = document.createElement('tr');
  tr.setAttribute('id', id);
  tr.setAttribute('class', classname);
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

}
