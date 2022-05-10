function logOut(out) {
    if(out.innerText == "Login") {
        out.innerText = "Logout";
    } else {
        out.innerText = "Login";
    }
}

function remove(hide) {
    hide.remove();
}

function message() {
    alert("Ninja was liked");
}