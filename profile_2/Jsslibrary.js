
// close Cookie

function closeCookie() {
    var to delete = document.getElementById("cookie");
    toDelete.remove();
}

// Alert

function navigateTo(el) {
    alert("you are trying to navigate to " + el.innertext);
}

// hoverOn and Hover this with pictures

function hoveron(el){
    el.src = "./images/office-workers.png"
    el.alt = "office workers"
}

function hoverOff(el){
    el.src = "./images/building.png"
    el.alt = "Building with clouds"
}