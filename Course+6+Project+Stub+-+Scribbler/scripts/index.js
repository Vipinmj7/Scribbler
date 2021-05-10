
function createfunction() {
    var modal = document.getElementById("createModal");
    var btn = document.getElementById("createpost");
    var span = document.getElementsByClassName("create-signin")[0];
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
