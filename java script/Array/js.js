
let studentName = [];

let i = 0;
// console.log(Array.isArray(studentName));
let num1 = document.getElementById("vorodi");
function AddNewMember(){
    i++;
    if(i>5){
        alert("not okay");
    }else{
        let name = num1.value;
        studentName.push(name);
        num1.value = "";
        console.log(studentName);
    }
   console.log(i);
//     for(var i=0; i<4 ; i++){
//     var num1 = document.getElementById("vorodi").value;
//     studentName.push(num1);
// }
}
