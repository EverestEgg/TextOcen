

$(document).ready(function(){
  
  //
  var showText = function(target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function() {
        showText(target, message, index, interval);
      }, interval);
    }
  }
 $(function() {
    showText("#responce",'', '', '');
  });
    
  //stoy vaiabules
  let storyMark;
  storyMark = 0;
  //let location = 'land';

  //code vaibuls
  function resetText() {
    $('input').val('>').focus(); 
  } //add focase at the end once done
  
  function wrongInp() {
    $('#wrong').show();
    showText('#wrong',"Unrecongnised Input",0,50)
    $('#wrong').fadeOut(3500)
    resetText();
    $('#wrong').text('U');
  } //show popup with wrong imput


   $('#hintPop').hide()
   $('#wrong').hide()
    //remove when done
    //$("#open").hide();
    //$("#start").hide();
    //resetText();

   //Remove starting screen
  $("#start").click(function(){
    $("#open").fadeOut(3000);
    $("#start").fadeOut(800);
    showText("#responce", "The Ocean stretches out before you, seemingly endlessly though you know that is not true. In front of you sits your future home, bobbing calmly in the waves. To your left your two crewmates that you will spend the next few months with, Synthia and _____. Directly in front of you is _____, your main contact to civilization for the mission, they are speaking now", 0, 22);
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
          if($('input').val() == '>next' || ">Next" ||'>n'||'>N'||'n'||'N') {
            $('p').text('')
            showText("#responce", 'Focus up LandCon says. ‘We are sending the three of you to explore territory that has been inaccessible until now, The depths of the ocean. This specially built Submarine “The (greek myth name)” and deep sea suits have been developed to survive depths of up to (number km). You are our mission leader, pilot and communications expert, Synthia is our biologist, going out to document new sealife and plants. ____ is our mechanic, and geologist documenting the landscape of the ocean floor.', 0, 25)
          typeWriter();
          storyMark = 1;
          resetText();
          } else { wrongInp();}
          break
      
        case 1:
          if($('input').val() == '>next' || ">Next" ||'>n'||'>N'||'n'||'N' ) {
            showText("#responce", 'No More has been Written', 0, 50)
            storyMark = 2;
            resetText();
            } else if ($('input').val() == '>stop' || ">Stop" ||'>s'||'>S'||'s'||'S') {
              showText("#responce", 'All done (for now)', 0, 50)
             storyMark = 3;
             resetText();
            } else { wrongInp(); }
          break

      }
     
    }

   });

});



 