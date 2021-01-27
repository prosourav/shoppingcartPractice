
const buttonA1 = document.getElementById("btnA1");
buttonA1.addEventListener("click",function(){
    calculate(1,'number1');
    calculate2(1219,"cost1");
    calculate2(1219,"final"); 
    calculate2(1219,"totalFinal"); 
});
const buttonM1 = document.getElementById("btnM1");
buttonM1.addEventListener("click",function(event){
    calculate(-1,'number1');
    calculate2(-1219,"cost1");
    calculate2(-1219,"final");
    calculate2(-1219,"totalFinal");
});
const buttonA2 = document.getElementById("btnA2");
buttonA2.addEventListener("click",function(event){
    calculate(1,'number2');
    calculate2(59,"cost2");
    calculate2(59,"final");
    calculate2(59,"totalFinal");
});
const buttonM2 = document.getElementById("btnM2");
buttonM2.addEventListener("click",function(event){
    calculate(-1,'number2');
    calculate2(-59,"cost2");
    calculate2(-59,"final");
    calculate2(-59,"totalFinal");
});
function calculate(number,id){
    const currentValue = document.getElementById(id).value;
    const currentValueNumber = parseInt(currentValue);
    const totalNumber = currentValueNumber + number;
    document.getElementById(id).value = totalNumber;
}
function calculate2(number,id){
    const currentValue = document.getElementById(id).innerText;
    console.log(currentValue);
    const currentValueNumber = parseInt(currentValue);
    const totalNumber = currentValueNumber + number;
  
    document.getElementById(id).innerText = totalNumber;
}