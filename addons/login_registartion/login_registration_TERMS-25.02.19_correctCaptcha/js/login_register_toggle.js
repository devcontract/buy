
document.onclick = function(event){
        event = window.event;
       console.log(event.target.name);
       if(event.target.name == "register"){
         document.getElementById('container').style.minWidth = "500px";
         document.getElementById('container').style.maxWidth = "500px";
       } else if (event.target.name == "login") {
         document.getElementById('container').style.minWidth = "245px";
         document.getElementById('container').style.maxWidth = "245px";

       }

}
