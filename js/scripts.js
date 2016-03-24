$(document).ready(function() {

  var riderHeight = parseInt(prompt("Please enter your height in inches: "));


   if (30 <= riderHeight && riderHeight <= 50) {
     $('.short').addClass("highlight");
   } else if (64 <= riderHeight && riderHeight <= 88) {
     $('.tall').addClass("highlight");
   } else if (51 <= riderHeight && riderHeight <= 63) {
     $('.average').addClass("highlight");
   } else {
     alert("Sorry, there are no rides you can take.");
   }

});
