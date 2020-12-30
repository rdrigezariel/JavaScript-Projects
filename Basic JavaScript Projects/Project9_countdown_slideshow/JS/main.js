function countdown() { // define countdown function
    var seconds = document.getElementById("seconds").value; //declare and set value in 'seconds' element to seconds variable

    function tick() { //define tick function
        seconds = seconds - 1; //subtract seconds by 1 and store it back in the variable
        timer.innerHTML = seconds; // display value of seconds in 'timer' html element
        setTimeout(tick, 1000); //setTimeout function pauses the progrtam for 1 second.

        if (seconds == -1) { //constraint to check if seconds equals -1
            alert("Time's up"); //alert the user when countdown finishes
        }
    }

    tick(); //call tick function
}

//Slideshow code

var slideIndex = 1;
showSlides(slideIndex); 

function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

function currentSlide(n) { 
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}