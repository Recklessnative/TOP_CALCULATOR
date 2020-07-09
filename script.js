let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let screen = document.querySelector("#screen");
let clear = document.querySelector("#clear");
let operate = document.querySelector("#operate")
let displayValue = "";
let operator = "";
let num1=[];
let num2=[];



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
        if(num2[0] != 0){
        displayValue = divide(num1[0], num2[0]);}
        else{displayValue="Dividing by zero is not possible my friend!"}
        }
    
    return displayValue;
    
    }

function clearAll(){
        displayValue = "";
        screen.textContent="";
        num1 = [];
        num2 = [];
}

function showOnScreen(){
    screen.textContent=displayValue;


}

clear.addEventListener("click", clearAll)

document.addEventListener('keydown', logKey); //USE KEYINPUT

numbers.forEach(btn =>{
btn.addEventListener("click", (e)=>{
if (e.target.value == "." && displayValue.indexOf(".")==-1){
    displayValue += e.target.value;
    showOnScreen();
}

else if(e.target.value!=".") {
    displayValue += e.target.value;
    showOnScreen();
}
})

})



operators.forEach(btn =>{
btn.addEventListener("click",(e)=>{
if(num1.length==0){operator = e.target.value;
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


function keyCodeToNumber(target) {
    switch (target) {
        case 96:
          return 0;
        case 97:
          return 1;
        case 98:
          return 2;
        case 99:
           return 3;
        case 100:
          return 4;
          break;
        case 101:
          return 5;
        case 102:
          return 6;
        case 103:
          return 7;
        case 104:
            return 8;
        case 105:
            return 9;
        case 107:
            return "+";
        case 109:
            return "-";
        case 110:
            return ".";
        case 111:
            return "/";
       case 13:
           calculateResult();
        case 8:
            clearAll();
      }


}
