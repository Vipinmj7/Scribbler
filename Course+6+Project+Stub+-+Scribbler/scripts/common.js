
// Sign up modal function
function signupfunction() {
    var modal = document.getElementById("signupModal");
    var btn = document.getElementById("signup");
    var span = document.getElementsByClassName("close-signup")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//Signin modal function
function signinfunction() {
    var modal = document.getElementById("signinModal");
    var btn = document.getElementById("signin");
    var span = document.getElementsByClassName("close-signin")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Link to signup from signin

function signupshow(){
    var modal = document.getElementById("signupModal");
    modal.style.display = "block";
    signupfunction();
}
function hidesignin(){
    var modal = document.getElementById("signinModal");
    modal.style.display = "none";
}