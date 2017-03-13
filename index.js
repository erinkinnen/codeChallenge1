var count = 0;
var globalCounter=0;


function onReady(){

  $(".button").append("<button class = 'genButton'> Generate </button>");


  $(".button").on("click", function(){
    var counter = count++;
    console.log(" local Counter " + counter);
    var globalCounter = counter;
    $(".container").append("<div class= 'step2Div'></div>");
                  $(".step2Div").append("<p></p>");
  });//end of on click
  console.log("Count " + count);
  console.log("globalCounter " + globalCounter);
  $(".container").append("<p>" + globalCounter + "</p>");
  $(".container").append("<button class = 'swap'> Swap </button>");
  $(".container").append("<button class = 'remove'> Delete </button>");


  $(".swap").on("click", function(){
    console.log("h");
    $(".button").addClass("colorswap");
  });//end of swap click

  $(".remove").on("click", function(){
    console.log("h");
    $(".button").remove();
    $(".container").remove();
  });//end of swap click

} //end of onReady

console.log(globalCounter);
$(document).ready(onReady);
