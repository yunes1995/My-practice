
var x = prompt("who is there?");

if(x=="Admin"){
    var pass = prompt("enter your password:");
    if(pass == "yunes"){
        alert("welcome admin");
    } else{
        alert("your are not Admin, Wait!!");
    }
}
else{
    alert("i dont know!!");
}

