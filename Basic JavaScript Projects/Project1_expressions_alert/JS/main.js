window.alert("Hello, World!");

document.write("Hello, World!")

var A = "This is a string";

document.write(A);

var B = "This is another string";

window.alert(B);

document.write("<br><br>Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.<br><br>");

document.write("\"Be who you are and say what you feel," + " because those who mind don\'t matter and those matter don\'t mind. \"" + " -Dr. Seuss");

var C = "Concatenated" + " String";

document.write("<br><br> "+C);

var family = "The Arezzinis", dad = "Jeremiah", mom = "Hermoine", daughter = "Penny", son = "Zorro";

document.write(dad);

var family = family.fontcolor("red");
var dad = dad.fontcolor("green");
var mom = mom.fontcolor("yellow");
var daughter = daughter.fontcolor("orange");
var son = son.fontcolor("brown");

document.write(family,dad,mom,daughter,son);

document.write("<br><br>" + (3+3));

function myFirstFunction() {    //Defining a function and naming it.
    var str = "This text is green."; //Defining a variable and giving it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("greenText").innerHTML = result; //Putting the value of result into HTML element with "greenText" id
}