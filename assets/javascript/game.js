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
    $("#total-score").text("Your Total Score: " + roundScore);

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
    $("#total-score").text("Your Total Score: " + roundScore);

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
    $("#total-score").text("Your Total Score: " + roundScore);

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
    $("#total-score").text("Your Total Score: " + roundScore);

    scoreChecker();
})

$("#total-score").text("Your Total Score: "  + roundScore)
$("#target-score").text("Your Target is: " + targetScore);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);













//going to have 4 values
//one for image0
//one for image1
//one for image2
//one for image3
//need to add value of image0 to image1 to image2 to image3
//





















































// var crystals = [
// "crystal1", value]


// for (var i = 0; i < 4; i++){
    //     // create crystal image 
    //     var imageCrystal = $("<img>");
    
    //     //add same class to each
    //     imageCrystal.addClass("crystal-image");
    
    //     //add src link (gives us random images)
    //     imageCrystal.attr("src", crystalImages[Math.floor(Math.random() * crystalImages.length)]);
    
    
    //     $("#crystals").append(imageCrystal);
    // }
    
    
    
    // var crystalImages = ["x"]; //replace with actual images
    

    
    // $("#crystal").on("click", function(){
    //     alert("You clicked me");
    //     // var crystalValue = ($(this).attr("data-crystalvalue"));
    //     // crystalValue = parseInt(crystalValue);
        
    //     // //adds to counter each click
    //     // counter += crystalValue;
        
    //     // alert("New score: " + counter);
        

                
    //         })
            
    //         $("#target-score").text(targetScore);
    //         var counter = 0;
            
            
    //         // functions
    //         function generateRandomNumber() {}
    //         function gameReset(){}
    //         function ifWon(){}








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