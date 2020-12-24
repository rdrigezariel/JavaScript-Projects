function myThirdFunction() {
    var result = 1 + 2;
    document.getElementById("Math").innerHTML = "1 + 2 = " + result;
}

function myFourthFunction() {
    var result = 2 - 1;
    document.getElementById("MathTwo").innerHTML = "2 - 1 = " + result;
}

function multiplication() {
    var result = 5 * 1;
    document.getElementById("MathThree").innerHTML = "5 * 1 = " + result;
}

function division() {
    var result = 1 / 2;
    document.getElementById("MathFour").innerHTML = "1 / 2 = " + result;
}

function moreMath() {
    var result = (1 / 2) * 2 - 1;
    document.getElementById("MathFive").innerHTML = "(1 / 2) * 2 - 1 = " + result;
}

function modulusOperator() {
    var result = 30 % 4;
    document.getElementById("MathSix").innerHTML = "When you divide 30 by 4 you have a remainder of " + result + ".";
}

function negationOperator() {
    var x = 5;
    document.getElementById("MathSeven").innerHTML = -x;
}

var x = 10;
var y = 1;
x++;
y--;
document.write("Using the increment operator on 10, I get: " + x + "<br><br>");
document.write("Using the decrement operator on 1, I get: " + y);

window.alert(Math.random() * 2);

window.alert("Using the Math object and the Math abs method on -10, I get: " + Math.abs(-10))