
calculate("phoneAdd","phoneNum",true);
calculate("phoneLess","phoneNum",false);
calculate("caseAdd","caseNum",true);
calculate("caseLess","caseNum",false);
function calculate(id, name, isIncrease){
    document.getElementById(id).addEventListener("click",function(){
        const phoneAdd = document.getElementById(name).value;
        const numberOfPhone = parseInt(phoneAdd);
        let newNumberPhone = numberOfPhone;
        if(isIncrease == true){
         newNumberPhone = numberOfPhone + 1;
        }
        if(isIncrease == false && newNumberPhone > 0){
         newNumberPhone = numberOfPhone - 1;
            }
        document.getElementById(name).value = newNumberPhone;

        if(name == "phoneNum"){
         const costN1 = 1219 * newNumberPhone;
         document.getElementById("cost1").innerText = costN1;
        }
        if(name == "caseNum"){
            const costN2 = 59 * newNumberPhone;
            document.getElementById("cost2").innerText = costN2;
           }
           final();
           
    })
}
// const final = document.getElementById("final").innerText;
function final(){
const f1 = document.getElementById("cost1").innerText;
const valueNum1 = parseInt(f1);
const f2 = document.getElementById("cost2").innerText;
const valueNum2 = parseInt(f2);
const finalValue = valueNum1 + valueNum2;
document.getElementById("final").innerText = finalValue;

const tax = document.getElementById("final").innerText;
const taxNumber = parseInt(tax);
let finalTax = taxNumber * 0.05;
finalTax = Math.round(finalTax);
document.getElementById("tax").innerText = finalTax;
const grandTotal = finalTax + taxNumber;
document.getElementById("totalFinal").innerText = grandTotal;
}

