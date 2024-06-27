
$(document).ready(function(){
    
  //stoy vaiabules
  let storyMark;
  storyMark = 0;
  let location = 'land';

  //code vaibuls
  function resetText() {$('input').val('>').focus();} //add focase at the end once done
  function wrongInp() {
    $('#wrong').show().fadeOut(1500);
    resetText();} //show popup with wrong imput



   $('#hintPop').hide()
   $('#wrong').hide()
    //remove when done
    //$("#open").hide();
    //$("#start").hide();
    //resetText();

   //Remove starting screen
  $("#start").click(function(){
    $("#open").fadeOut(3000);
    $("#start").fadeOut(400);
    resetText();
  });

    //click hint Button 
  $("#hint").click(function(){
     $('#hintPop').fadeIn(300);
  });

   //remove hint popup
  $("#hint").mouseleave(function(){
    $("#hintPop").fadeOut(500);
  }); 

  //on press enter key
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      console.log($('input').val())

      switch(storyMark){
        case 0:
          //see if input matchs story
          if($('input').val() == '>hi' ) {
          $('p').text('story progress 1');
          storyMark = 1;
          resetText();
          } else { wrongInp();}
          break
      
        case 1:
          if($('input').val() == '>go' ) {
            $('p').text('story progress 2');
            storyMark = 2;
            resetText();
            } else if ($('input').val() == '>stop') {
              $('p').text('story progress diff');
             storyMark = 3;
             resetText();
            } else { wrongInp(); }
          break

      }
     
    }

   });

});



 