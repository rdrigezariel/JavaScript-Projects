function mySecondFunction() {    //Defining a function and naming it.
    var str = "This string is orange."; //Defining a variable and giving it a string value
    str += " This second sentence is concatenated." //Using the += operator to concatenate a string in the str variable.
    var result = str.fontcolor("orange"); //Using the fontcolor method on str variable
    document.getElementById("orangeText").innerHTML = result; //Putting the value of result into HTML element with "orangeText" id
}


function add(num1, num2){   //Defining the add function
    result = num1 + num2;   //Adding the two numbers and storing them in the result variable.
    document.getElementById("result").innerHTML = result;   //Putting the result value into HTML element id result
}