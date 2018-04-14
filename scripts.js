
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = bothDigits(h);
    m = bothDigits(m);
    s = bothDigits(s);
    document.getElementById('txt').innerHTML =
    "#" + h + m + s;
    var t = setTimeout(startTime, 500);
}
function bothDigits(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}





