function rideFunction() {   //Define function
    var height, canRide;    //Define height and carRide variables
    height = document.getElementById("height").value;   //Fetch value from element id "height"
    canRide = (height < 52) ? "You are too short" : "You are tall enough"; //Check value of height variable
    document.getElementById("ride").innerHTML = canRide + " to ride.";  //Display value
}

function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are NOT old enough" : "You ARE old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote!";
}

function Vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Ariel = new Vehicle("Honda", "Accord", 2014, "Grey");

function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML =
    "Erik drives a " + Erik.vehicleColor + "-colored " + Erik.vehicleModel +
    " manufactured in " + Erik.vehicleYear;
}

function mySecondFunction() {
    document.getElementById("newAndThis").innerHTML =
    "Ariel drives a " + Ariel.vehicleColor + "-colored " + Ariel.vehicleModel +
    " manufactured in " + Ariel.vehicleYear;
}

// function reservedWordFunc() {
//     var true = true;
//     document.getElementById("reservedWord").innerHTML = true;
// }

function Person(firstName, lastName, age, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.dob = dob
}

function nestedFunction() {
    document.getElementById("nestFunction").innerHTML = count();
    function count() {
        var startingPoint = 0;
        function plusOne() {
            startingPoint += 1;
        }
        plusOne();
        return startingPoint;
    }
}