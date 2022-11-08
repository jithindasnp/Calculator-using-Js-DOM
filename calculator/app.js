

function display(data) {
    document.getElementById("displayInp").value += data
}
function clr() {
    document.getElementById("displayInp").value = ""
}
function equalTo() {
    let onScreen = document.getElementById("displayInp").value
    document.getElementById("displayInp").value = eval(onScreen);
}
function bkSpace() {
    var value = document.getElementById("displayInp").value;
    document.getElementById("displayInp").value = value.substr(0, value.length - 1);
}