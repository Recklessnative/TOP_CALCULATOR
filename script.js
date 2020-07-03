let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let screen = document.querySelector("#screen");
let clear = document.querySelector("#clear");
let operate = document.querySelector("#operate")
let displayvalue = "";
let operator = "";
let num1=[];
let num2=[];
let counter=0;


operate.addEventListener("click",calculateResult)


function calculateResult(){
    num2[0]=screen.textContent;
    if(operator == "+"){
    displayvalue = add(num1[0], num2[0]);
    screen.textContent=displayvalue;
    }
    
    else if(operator == "-"){
        displayvalue = substract(num1[0], num2[0]);
        screen.textContent=displayvalue;
        }
    
    else if(operator == "*"){
        displayvalue = multiply(num1[0], num2[0]);
         screen.textContent=displayvalue;
        }
    
    else if(operator == "/"){
        displayvalue = divide(num1[0], num2[0]);
        screen.textContent=displayvalue;
        }
    
    
    
    }

function clearAll(){
        displayvalue = "";
        screen.textContent="";
        num1 = [];
        num2 = [];
}

clear.addEventListener("click", clearAll)


numbers.forEach(btn =>{
btn.addEventListener("click", (e)=>{
displayvalue += e.target.textContent;
screen.textContent=displayvalue;

})

})


operators.forEach(btn =>{
btn.addEventListener("click",(e)=>{
operator = e.target.textContent;
if(counter==0){
num1[0]=screen.textContent;
screen.textContent="";
displayvalue = "";
}

else {
    
screen.textContent=""

}

counter++;

})

})

function add(num1, num2){
return +num1 + +num2;


}

function substract(num1, num2){
return +num1 - +num2;

}

function multiply(num1,num2){
return +num1*+num2;

}

function divide(num1,num2){
return +num1/+num2;

}

