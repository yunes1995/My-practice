var x = prompt("who is there?");
if(x=="Admin"){
    var pass = prompt("enter your password:");
    switch(pass){
        case "yunes":
        alert("welcom Admin");
        break;
        default:
            alert("i dont khnow");
            break;
    }
}
else{
    alert("i dont know!!");
}
