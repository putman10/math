$(document).ready(function() {
  $("form#fortunequiz").submit(function(event){
      event.preventDefault();

      var userResponses = []

      $(".results").show();
      $("input:checkbox[name=unlucky-events]:checked").each(function(){
            var unluckyEvent = $(this).val();
            userResponses.push(unluckyEvent);
          });
      $("input:checkbox[name=lucky-events]:checked").each(function(){
            var luckyEvent = $(this).val();
            userResponses.push(luckyEvent);
          });
      $("input:checkbox[name=religion]:checked").each(function(){
            var religionType = $(this).val();
            userResponses.push(religionType);
          });

      var points = 0;

      for (x = 0 ; x < userResponses.length ; x++ ) {
        if(userResponses[x] === "a") {
        points++;
      } else if(userResponses[x] === 'b') {
        points+=2;
      } else if(userResponses[x] === 'c') {
        points+=3;
      }
    }
      console.log(points);
      $("#fortunequiz").hide();

      if (points <= 6) {
        $('.result').html('Cool Dude' + "<br>" + "<img src='img/not-scary.gif'>")
      } else if (points >= 7, points <=15) {
        $('.result').html('Woah Dude' + "<br>" + "<img src='img/semi-creepy.gif'>")
      } else if (points >= 16) {
        $('.result').html('Yo Man' + "<br>" + "<img src='img/creepy.gif'>")
      } else {

      }

  });
});
