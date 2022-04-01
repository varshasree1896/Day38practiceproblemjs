//Three digit 5 random numbers
let num1 = Math.floor(Math.random()*900+100);
let num2 = Math.floor(Math.random()*900+100);
let num3 = Math.floor(Math.random()*900+100);
let num4 = Math.floor(Math.random()*900+100);
let num5 = Math.floor(Math.random()*900+100);

if((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)){
    console.log("Maximum number is: "+num1);
}else if((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)){
    console.log("Maximum number is: "+num2);
}else if((num3 > num1) && (num3 > num2) && (num3 > num4) && (num2 > num5)){
    console.log("Maximum number is: "+num3);
}else if((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)){
    console.log("Maximum number is: "+num4);
}else if((num5 > num1) && (num5 > num2) && (num5 > num3) && (num5 > num4)){
    console.log("Maximum number is: "+num5);
} 
