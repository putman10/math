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
});
