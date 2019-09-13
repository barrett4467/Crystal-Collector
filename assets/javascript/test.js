// global vars 
var targetScore = Math.floor(Math.random() * (120 - 19) + 19);
var roundScore = 0;
var wins = 0;
var losses = 0;
var clicks0 = 1; 
var clicks1 = 1; 
var clicks2 = 1; 
var clicks3 = 1; 
var value0 = 0;
var value1 = 0;
var value2 = 0; 
var value3 = 0; 

var crystalImages = ["./assets/images/crystalBlue.png", "./assets/images/crystalRed.png", "./assets/images/crystalBlue.png", "./assets/images/crystalRed.png"];

for (var i = 0; i < 4; i++) {

    var imageCrystal = $("<img>"); //sets image 

    imageCrystal.addClass("crystal-image"); //adds class so we can style

    imageCrystal.attr("id", "image" + (i));

    imageCrystal.attr("src", crystalImages[i]);
    //may select multiples of the same picture 

    // This data attribute will be ****set equal to the array value.***
    imageCrystal.attr("data-value", Math.floor(Math.random() * 13 + 1));
    
    $("#crystals").append(imageCrystal); //adds to page 
}

function gameReset(){
    
    $("#crystal-image").html("<img src='./assets/images/crystalBlue.png' alt='Blue Crystal'/>");
    alert("Next Round!!");
    $("#total-score").text("Your Total Score: " + 0);
    // crystalValue = Math.floor(Math.random() * (10 - 1) + 1) + 1;
    
    $("#image0").empty();
    $("#image1").empty();
    $("#image2").empty();
    $("#image3").empty();
    
    targetScore = Math.floor(Math.random() * (200 - 50) + 50);
    
    $("#target-score").text("Your Target is: " + targetScore);
    clicks0 = 1; 
    clicks1 = 1; 
    clicks2 = 1; 
    clicks3 = 1; 
    value0 = 0;
    value1 = 0;
    value2 = 0; 
    value3 = 0; 
    roundScore = 0;
}

function scoreChecker(){
    if (roundScore === targetScore) {
        alert("You win!");
        wins++
        gameReset();
        $("#wins").text("Wins: " + wins)
    } else if (roundScore >= targetScore) {
        alert("You lose!!");
        losses++
        $("#losses").text("Losses: " + losses)
        gameReset();
    console.log("Losses: " + losses);
    }
}


$("#image0").on("click", function(){

    var image0 = $("#image0").attr("data-value");
    
    value0 = image0 * clicks0
    console.log(image0)
   
    clicks0++
    console.log("Clicks0: " + clicks0);
    console.log("Value0: " + value0);

    roundScore = value0 + value1 + value2 + value3;
    console.log(roundScore)
    scoreChecker();
})
$("#image1").on("click", function(){

    var image1 = $("#image1").attr("data-value");

    value1 = image1 * clicks1
    console.log(image1)


    clicks1++
    console.log("Clicks1: " + clicks1);
    console.log("Value1: " + value1);

    roundScore = value0 + value1 + value2 + value3;
    console.log(roundScore)

    scoreChecker();
})
$("#image2").on("click", function(){

    var image2 = $("#image2").attr("data-value");
   
    value2 = image2 * clicks2
    console.log(image2)
   

    clicks2++
    console.log("Clicks2: " + clicks2);
    console.log("Value2: " + value2);

    roundScore = value0 + value1 + value2 + value3;
    console.log(roundScore)

    scoreChecker();
})
$("#image3").on("click", function(){

    var image3 = $("#image3").attr("data-value");

    value3 = image3 * clicks3
    console.log(image3)
    
    clicks3++
    console.log("Clicks3: " + clicks3);
    console.log("Value3: " + value3);

    roundScore = value0 + value1 + value2 + value3;
    console.log(roundScore)

    scoreChecker();
})

$("#total-score").text("Total Score: " + roundScore)
$("#target-score").text("Your Target is: " + targetScore);
// $("#total-score").text("Your Total Score: " + roundScore);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);
