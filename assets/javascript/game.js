// global vars
var targetScore = Math.floor(Math.random() * 50);
var roundScore = 0;
var wins = 0;
var losses = 0;
var counter = 0;
var clicks = 0; 

var crystalValue = Math.floor(Math.random() * 10);

// function startGame(){}


$("#crystals").on("click", function(){
        console.log("button clicked");
        //need something to track the amount of clicks 
        clicks++
console.log(clicks);

        var imageCrystal = $(".crystal-image");
    
        imageCrystal.attr("value" , crystalValue); //sets to random value    
        console.log(crystalValue);

        var roundScore = crystalValue * clicks ;

        $("#total-score").text("Your Total Score: " + roundScore);

    console.log(roundScore);
    
    if (roundScore === targetScore) {
        alert("You win!");
    } else if (roundScore > targetScore) {
            alert("You lose!!");
            return 
    }
})



    // var imageCrystal = $(".crystal-image");
    // //sets value and gives it a random #
    // imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 4));

    $("#crystal").text("Crystals Go Here");
    $("#target-score").text("Your Target is: " + targetScore);
    $("#total-score").text("Your Total Score: " + roundScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);























































































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