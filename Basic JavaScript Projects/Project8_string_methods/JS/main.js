// Assignment 1
function sliceMethod() { //Define sliceMethod function
    var string = "The Tech Academy"; //Set value to string variable
    var section = string.slice(4,8); //Slice desired value from string variable (i.e. "Tech") and set value in section variable
    console.log(section); //Log the results of section variable
}

function upperCaseMethod() { //Define upperCaseMethod function
    var string = "the tech academy"; //Set value to string variable
    var editString = string.toUpperCase(); //Use toUpperCase method to set value to editString variable (i.e. it will set all characters to upper case)
    console.log(editString); //Log the results of editString variable
}

function searchMethod() { //Define searchMethod function
    var string = "The Tech Academy"; //Set value to string variable
    var searchString = string.search("Academy"); //Use search method to see where the desired search starts
    console.log(searchString) //Log the results of searchString variable
}

function toStringMethod() { //Define toStringMethod function
    var x = 777;    //Declare and set value to x variable.
    document.getElementById("numberToString").innerHTML = x.toString(); //Display results in numberToString element ID using toString method on the x variable
}

function toPrecisionMethod() { //Define toPrecisionMethod function
    var x = 123.45678; //Declare and set value to x variable.
    document.getElementById("precision").innerHTML = x.toPrecision(6); //Display results in precision elementy ID using toPrecision method on the x variable.
}

function toFixedMethod() { //Define toFixedMethod function
    var x = 123.456; //Declare and set value to x variable.
    document.getElementById("fixed").innerHTML = x.toFixed(2); //Display results in fixed element id using toFixedMethod function on the x variable. toFixed rounds by the users input.
}

function valueOfMethod() { //Define valueOfMethod function
    var x = ["A", "B", "C"]; //Declare and set value to x variable.
    document.getElementById("valueOf").innerHTML = x.valueOf(); //Display results in valueOf element id using the valueOf method. valueOf returns the primitive value of the specified input.
}

sliceMethod(); //Execute sliceMethod function
upperCaseMethod(); //Execute upperCaseMethod function
searchMethod(); //Execute searchMethod function