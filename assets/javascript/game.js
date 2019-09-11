// global vars
var targetScore = " ";
var roundScore = " ";
var wins = " ";
var losses = " ";
// var crystals = [
// "crystal1", value]

var crystalImages = ["images/crystalRed.png,",];

for (var i = 0; i < 4; i++){
    // create crystal image 
    var imageCrystal = $("<img>");

    //add same class to each
    imageCrystal.addClass("crystal-image");

    //add src link (gives us random images)
    imageCrystal.attr("src", crystalImages[Math.floor(Math.random() * crystalImages.length)]);

    //sets value and gives it a random #
    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 3));

    $("#crystals").append(imageCrystal);
}



$(".crystal-image").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    //adds to counter each click
    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter > targetNumber) {
        alert("You lose!!");
    }

})

$("#target-score").text(targetScore);
var counter = 0;


// functions
    function generateRandomNumber() {}
    function startGame(){}
    function gameReset(){}
    function ifWon(){}





// crystals
// target-score
// wins
// losses




// jQuery click events
// $("crystal1").on("click", function(){})
// $("crystal2").on("click", function(){})
// $("crystal3").on("click", function(){})
// $("crystal4").on("click", function(){})

// use the this to select onclick for crystals 

// crystals will be the same put same class data-value=randomValueOfCrystal find value of each crystal  -->

// <!-- $(".crystal").on("click", function(){
//     alert("clicked!!");
// })