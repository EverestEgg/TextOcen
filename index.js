
$(document).ready(function(){
    
    $('#hintPop').hide()
    //remove when done
    $("#open").hide();
    $("#start").hide();
   //Remove starting screen
    $("#start").click(function(){
      $("#open").fadeOut(3000);
      $("#start").fadeOut(400);
    });

    //click hint Button 
    $("#hint").click(function(){
        $('#hintPop').fadeIn(300);
    });

    //remove hint popup
    $("#hint").mouseleave(function(){
        $("#hintPop").fadeOut(500);
      }); 
  });