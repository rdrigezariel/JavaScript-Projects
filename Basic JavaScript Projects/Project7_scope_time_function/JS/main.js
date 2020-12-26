var global = 10;

function functionOne() { //Define functionOne
    var local = 20; //Declare local variable with a value of 20
    console.log(local); //Log to value for local variable
}

function functionTwo() { //Define functionTwo (warning: this will throw an error)
    console.log(local); //log the value for local variable (Warning: will throw error since local variable is declared locally within the functionOne function)
}

function getTime() { //Define getTime function
    var currentHour = new Date().getHours(); //Store current hour in currentHour variable
    
    if (currentHour > 17) { //If currentHour is greater than 17 display "Good evening!"
        document.getElementById("greeting").innerHTML = "Good evening!"
    }
    if (currentHour > 11) { //If currentHour is greater than 11 display "Good afternon!"
        document.getElementById("greeting").innerHTML = "Good afternoon!"
    }
    if (currentHour < 12) { //If currentHour is less than 12 display "Good morning!"
        document.getElementById("greeting").innerHTML = "Good morning!"
    }
}

// Own if statement example

var age = 28; //Define age variable an store users age in it

if (age >= 18) { //Checks to see if age is greater than or equal to 18 to determine if the user is an adult.
    console.log("You are an adult!")
} else {
    console.log("You are a minor")
}

function checkAge() {
    var age = document.getElementById("users_age").value;
    
    if (age >= 18) {
        document.getElementById("response").innerHTML = "You are an adult!"
    } else {
        document.getElementById("response").innerHTML = "You are NOT an adult!"
    }
}

functionOne();
functionTwo();