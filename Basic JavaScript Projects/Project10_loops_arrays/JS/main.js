function call_loop() { //Define call_loop function
    var digit = ""; //Declare digit variable with an empty string
    var x = 1; //Declare x variable with a value of 1
    while (x < 6) { //Declare while loop to iterate 5 times.
        digit += x + "<br>"; //Digit variable will add the following line of code each iteration
        x++; //Add 1 to x at the end of the while loop
    }
    document.getElementById("loop").innerHTML = digit; //When the while loops finishes, display value stored in digit variable via loop element id.
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //declare instruments variable and store the following array of strings in it.
var content = ""; //declare content variable and store an empty string in it.
var y; //declare y variable with no value in it.

function forLoop() { //define forLoop function
    for (y = 0; y < instruments.length; y++) { //declare for loop that iterates over the length of elements in instruments array.
        content += instruments[y] + "<br>"; //content variable will add the following line of code each iteration.
    }
    document.getElementById("listOfInstruments").innerHTML = content; //When for loop finishes, display value stored in content via listOfInstruments element id.
}

function arrayFunction() { //declare arrayFunction function
    var dogPicture = ["sleeping", "playing", "eating", "barking"]; //declare dogPicture variable with an array of strings
    document.getElementById("array").innerHTML = "In this picture, the dog is " + dogPicture[3] + "."; //display the following string with the 3rd element stored in the dogPicture variable on the array element.
}

function constantFunction() { //declare constantFunction function
    const computer = { type:"laptop", brand: "Dell", color: "white" } //declare computer constant with an object in it.
    computer.color = "blue"; //change the value of the color property in the computer object
    computer.memory = "16GB"; //add memory property to computer object with a value

    //display the following in the constant element id
    document.getElementById("constant").innerHTML = 
    "I have a " + computer.type + " by " + computer.brand + ". It is " + computer.color + " and has " + computer.memory + " of memory.";
}

// Utilize let keyword challenge
document.write("Utilize let keyword <br>")
var x = 100;
document.write(x + "<br>");
{
    let x = 50;
    document.write(x + "<br>");
}
document.write(x + "<br>");

//Object assignment
function objAssignment() {
    let computer = {
        make: "Dell ",
        model: "XPS 13 ",
        year: "2018 ",
        color: "black ",
        description: function() {
            return "The computer is a " + this.year + this.color + this.make + this.model; 
        }
    }
    
    document.getElementById("computerObject").innerHTML = computer.description();
}

