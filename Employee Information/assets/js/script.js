var popup = document.getElementById("wrap");
var btn = document.querySelector(".tuychon");
var confirm = document.getElementById("confirm-btn");
var cancel = document.getElementById("cancel-btn");
var startDate = document.getElementById("startDate");
var endDate = document.getElementById("endDate");
let hasChanged = false;
let accept;

function displayPopup(){
    popup.style.display = "inline";
}

function exit(){
    popup.style.display = "none";
}

startDate.onchange = () => {
    hasChanged = true;
}

endDate.onchange = () => {
    if (hasChanged) {
        accept = document.querySelector('confirm-btn');
        accept.style.backgroundColor = 'green';
        accept.disabled = false;
        accept.addEventListener('click', () => {
            popup.style.display = 'none';
        })
    }
}


