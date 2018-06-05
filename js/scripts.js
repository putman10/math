$(document).ready(function() {
  $("form#math").submit(function(event){
      event.preventDefault();


      var countTo = parseInt($("#countTo").val());
      var countBy = parseInt($("#countBy").val());
      var quotient = (countTo/countBy);
      var remainder = (quotient % 1 );
      var numbers = [];


      for (var x = countBy ; x <= countTo ; x += countBy ) {
        if( x === 0 ) {
          break;
      } else if (x <= countTo) {
        numbers.push(x);
      } else {};
    };

      $("#result").text(numbers);

  });
  $("form#puzzle").submit(function(event){
      event.preventDefault();
      var sentence = $("input#sentence").val();

      var vowels = ['a','e','i','o','u'];
      var letters = sentence.split("");
      var array = []

      for (x = 0; x < letters.length; x ++) {
        for (j = 0; j < vowels.length; j ++ )
        if (letters[x] === vowels[j]) {
           letters[x] = ("-")
           array.push(j)
        } else {
         array.push()}
      };

      var finalanswer = letters.join('');

      $('#result2').text(finalanswer);


  });
});
