$(document).ready(function() {

  var riderHeight = parseInt(prompt("Please enter your height in inches: "));
  function between(x, min, max) {
    return x >= min && x <= max;
  }
   if (riderHeight <=36) {
     $('.short').addClass("highlight");
   } else if (riderHeight >= 64) {
     $('.tall').addClass("highlight");
   } else if (37 <= riderHeight <= 63) {
     $('.average').addClass("highlight");
   } else {
     alert("Sorry, there are no rides you can take.");
   }

});
