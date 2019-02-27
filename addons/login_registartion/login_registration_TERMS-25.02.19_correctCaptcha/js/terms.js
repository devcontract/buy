// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var checkBox = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var button = document.getElementById("submitButton");

// When the user clicks on the button, open the modal
checkBox.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    button.removeAttribute("disabled");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        checkBox.checked = false;
        button.addAttribute("disabled");
    }
}