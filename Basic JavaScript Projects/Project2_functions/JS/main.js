function mySecondFunction() {    //Defining a function and naming it.
    var str = "This string is orange."; //Defining a variable and giving it a string value
    str += " This second sentence is concatenated." //Using the += operator to concatenate a string in the str variable.
    var result = str.fontcolor("orange"); //Using the fontcolor method on str variable
    document.getElementById("orangeText").innerHTML = result; //Putting the value of result into HTML element with "orangeText" id
}