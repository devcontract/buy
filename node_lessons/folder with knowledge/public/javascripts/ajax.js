



document.addEventListener("click", function(event){
    event = event || window.event;
    console.log(event.srcElement.id );
    if (event.srcElement.tagName == 'BUTTON'){

        if(event.srcElement.id === 'done'){
            event.path[1].children[0].className = 'done';
        } else if (event.srcElement.id === 'notdone'){
            event.path[1].children[0].className = 'notdone';
        } else if (event.srcElement.id === 'remove') {
          console.log() ;
            event.path[1].remove();
        }



        var elementId = event.srcElement.id;


        var todoTitle = event.path[1].children[1].innerHTML;
       // console.log(event.path[1].children[1].innerHTML);
       // console.log(event);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //alert(this.responseText);
            }
        };
        xhttp.open("POST", "/todoList", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("status="+elementId+"&title="+todoTitle+"");
    }


});


