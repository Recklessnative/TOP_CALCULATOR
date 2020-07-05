let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let screen = document.querySelector("#screen");
let clear = document.querySelector("#clear");
let operate = document.querySelector("#operate")
let displayValue = "";
let operator = "";
let num1=[];
let num2=[];
let counter=0;


operate.addEventListener("click",function(){
    showOnScreen(calculateResult());
});


function calculateResult(){
    num2[0]=screen.textContent;
    if(operator == "+"){
    displayValue = add(num1[0], num2[0]);
    }
    
    else if(operator == "-"){
        displayValue = substract(num1[0], num2[0]);
        }
    
    else if(operator == "*"){
        displayValue = multiply(num1[0], num2[0]);
        }
    
    else if(operator == "/"){
        displayValue = divide(num1[0], num2[0]);
        }
    
    return displayValue;
    
    }

function clearAll(){
        displayValue = "";
        displayValue2= "";
        screen.textContent="";
        num1 = [];
        num2 = [];
}

function showOnScreen(){
    screen.textContent=displayValue;


}

clear.addEventListener("click", clearAll)



numbers.forEach(btn =>{
btn.addEventListener("click", (e)=>{
displayValue += e.target.textContent;
showOnScreen();

})

})


operators.forEach(btn =>{
btn.addEventListener("click",(e)=>{
if(num1.length==0){operator = e.target.textContent;
num1[0]=screen.textContent;
displayValue = "";}

else{
showOnScreen(calculateResult());
num1[0]=displayValue;
displayValue="";
}



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

