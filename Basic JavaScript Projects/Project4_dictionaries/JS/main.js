function myDictionary() { //Define myDictionary function
    var Person = { //Define Person object
        Name: "Ariel",
        Age: 28,
        DOB: "06/30/92",
        DOB: "June 30, 1992"
    };

    delete Person.DOB; //Remove the DOB key from the Person object

    document.getElementById("dictionary").innerHTML = "Hi my name is " + Person.Name + "<br>My DOB is " + Person.DOB;
}