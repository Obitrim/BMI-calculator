
//DOM elements to be manipulated
var screens = document.getElementsByClassName("screen");
var startBtn = document.getElementsByClassName("btn-start")[0];
var nextBtn = document.getElementsByClassName("btn-next")[0];
var backBtns = document.getElementsByClassName("btn-back");
var resetBtn = document.getElementsByClassName("btn-reset")[0];
var numberInputFields = document.getElementsByTagName("input");
var calcBtn = document.querySelector(".btn-calculateBMI");

var currentSlide = 0;
showSlide(0);

startBtn.addEventListener("click", function () {
    reset();
    showSlide(1);
});

calcBtn.addEventListener("click", function () {
        var inputField = this.parentNode.parentElement.getElementsByTagName("input")[0];

        if( inputField.value > 0){
            calculateBMI();
        } else {
            inputField.focus();
        }
});

resetBtn.addEventListener("click", function () {
    reset();
});

nextBtn.addEventListener("click", function (event) {
    var screen = nextBtn.parentNode.parentElement;
    var inputField = screen.getElementsByTagName("input")[0];
    
    if(inputField.value > 0){
        showSlide(1);
    }else{
        inputField.select();
    }
    
});


for (var i = 0; i < backBtns.length; i++) {
    backBtns[i].addEventListener("click", function () {
        showSlide(-1);
    });
}


// FUNCTION DISPLAYS SLIDES
function showSlide(n) {
    currentSlide += n;

    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.add("hide");
    }

    screens[currentSlide].classList.remove("hide");
}

// FUNCTION RESETS THE BMI CALCULATOR
function reset() {
    clearInputFields();
    currentSlide = 0;
    showSlide(currentSlide);
}

// FUNCTION CLEARS THE INPUT FIELDS
function clearInputFields() {
    for (var i = 0; i < numberInputFields.length; i++) {
        numberInputFields[i].value = "";
    }
}


// BMI CALCULATIONS
var bmiSlideBar = document.getElementById("bar");
var maxBMI = 50;

function calculateBMI() {
    //getting values from the input fields 
    var weight = Number.parseFloat(numberInputFields[0].value);
    var height = Number.parseFloat(numberInputFields[1].value);

    //height shoudn't be less or equal to zero
    if ( height > 0 && weight > 0 ) {
        var bmiValue = ( weight / Math.pow(height, 2) ).toFixed(2);

        updateBMIValue(bmiValue);
        updateSlider(bmiValue);
        updateMessage(bmiValue);
        showSlide(1);
    } else {
        alert("Your height can not be zero\n\nInput valid height");
    }

}




var bmiValueTag = document.getElementById("bmi-value");

function updateBMIValue(bmiValue) {
    bmiValueTag.innerText = bmiValue + " kg/m";
    var sup = document.createElement("sup");
    sup.innerText = 2;
    bmiValueTag.appendChild(sup);
}




var bmiSlideBar = document.getElementById("bar");

function updateSlider(bmiValue) {
    // calculating percentage
    var color;
    if (bmiValue < 18.5 || bmiValue >= 30) {
        color = "red"
    } else if (bmiValue >= 18.5 && bmiValue <= 25) {
        color = "green"
    } else {
        color = "orange";
    }
    var sliderValue = 420 * (bmiValue / maxBMI);
    bmiSlideBar.style.width = sliderValue + "px";
    bmiSlideBar.style.background = color;
}




var bmiMsgTag = document.getElementById("rate");

function updateMessage(bmiValue) {
    var message;

    if (bmiValue < 18.5) {
        message = "Underweight"
    } else if (bmiValue >= 18.5  && bmiValue <= 25 ) {
        message = "Normal"
    } else if (bmiValue > 25 && bmiValue <= 29.9) {
        message = "Overweight"
    } else message = "Obese";

    bmiMsgTag.innerText = message;


    //formatting bmiMsgTag
    if (message === "Underweight" || message === "Obese") {
        bmiMsgTag.style.color = "red";
    } else if (message === "Normal") {
        bmiMsgTag.style.color = "green";
    } else {
        bmiMsgTag.style.color = "Orange";
    }
}