


var a = +prompt("1-son -> ")
var b = +prompt("2-son -> ")
var c = +prompt("3-son -> ")


if (isNaN(a)) {
    alert('Son kiriting !!!');
}else if (isNaN(b)) {
    alert('Son kiriting !!!');
}else if(isNaN(c)){
    alert('Son kiriting !!!');
}

if (a <= b && a >= c || a >= b && a <=c) {
    alert(a + " o'rta son")
}else if (b <= a && b >= c || b >= a && b <=c) {
    alert(b + " o'rta son")
}else if (c <= b && c >= a || c >= b && c <= a) {
    alert(c + " o'rta son")
}