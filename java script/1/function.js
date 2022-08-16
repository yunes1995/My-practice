var x = +prompt("enter your number 1:");
var y = +prompt("enter your number 2:");


function jam(a,b){
    var z = x + y;
    document.getElementById("dis").innerHTML = z;
    document.getElementById("paragraph_dis").innerHTML =  `${x} + ${y} =`;
}

function menha(a,b){
    var z = x - y;
    document.getElementById("dis").innerHTML = z;
    document.getElementById("paragraph_dis").innerHTML =  `${x} - ${y} =`;
}

function taghsim(a,b){
    var z = x / y;
    document.getElementById("dis").innerHTML = z;
    document.getElementById("paragraph_dis").innerHTML =  `${x} / ${y} =`;
}

function zarb(a,b){
    var z = x * y;
    document.getElementById("dis").innerHTML = z;
    document.getElementById("paragraph_dis").innerHTML =  `${x} * ${y} =`;
}

