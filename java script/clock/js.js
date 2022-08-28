
function show_time(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var second = d.getSeconds();
    var years = d.getFullYear();
    var month = d.getMonth();
    var days = d.getDay();

    if(hours<10){hours = "0" + hours};
    if(minutes<10){ minutes ="0" + minutes};
    if(second<10){second ="0"+second};
    if(month<10){month = "0"+ month};
    if(days<10){days = "0"+ days}
    document.getElementById("show_time").innerText = hours + ":" + minutes + ":" + second;
    document.getElementById("show_date").innerText = years + "-" + month + "-" + days;
    setTimeout(show_time,1000);
}
show_time();