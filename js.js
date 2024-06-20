
$(document).ready(function(){
    
  let storyMark = 0
  var checkText = $('input:text').val()

   $('#hintPop').hide()
    //remove when done
    //$("#open").hide();
   //$("#start").hide();

   //Remove starting screen
  $("#start").click(function(){
    $("#open").fadeOut(3000);
    $("#start").fadeOut(400);
    $('input').focus();
    $('input:text').val('>')
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
    
      $('input:text').val()
      $('input:text').val('>')

      if(storyMark == 0) {
        $('p').text('hears your typing saskia');
        storyMark += 1
      } else {
        $('p').text('no more');
      }
    }

   });

});



 