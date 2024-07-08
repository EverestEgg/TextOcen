

$(document).ready(function(){

  //stoy vaiabules
  let storyMark;
  storyMark = 0;
 

  
  function showText(target, message, index, interval, ) {
    noType();
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function() {
        showText(target, message, index, interval,);
      }, interval);
    } else {
      resetText();
    }
  }


  //code vaibuls
  function resetText() {
    $("#TypeBox").prop('readonly', false).focus().val('');
    console.log('yes typing');
  }

  function noType(){
    $("#TypeBox").blur().prop('readonly', true).val('');
    console.log('no typing');
  }
  //show popup with wrong imput
  function wrongInp() {
    showText('#wrong','Unrecongnised Input', 0, 30);
    $('#wrong').show().delay(1000).fadeOut(800).text('U');
    resetText();
  } 

// at very begining
   $('#hintPop').hide()
   $('#wrong').hide()
  

   //Remove starting screen
  $("#start").click(function(){
    $("#open").fadeOut(3000);
    $("#start").fadeOut(800);
    showText("#responce", "The Ocean stretches out before you, seemingly endlessly though you know that is not true. In front of you sits your future home, bobbing calmly in the waves. [submarine appears in image?] to your left your two crewmates that you will spend the next few months with, Synthia and ELEPHANT. Directly in front of you is PARROT, your main contact to civilization for the mission, they are speaking now.", 0, 50,);
  
  });

    //click hint Button 
  $("#hint").click(function(){
     $('#hintPop').fadeIn(300);
  });

   //remove hint popup
  $("#hint").mouseleave(function(){
    $("#hintPop").fadeOut(1000);
  }); 

  //on press enter key
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
    var checkT = $('input').val();

    switch(storyMark){
      case 0:
        //see if input matchs story
        if(checkT == '>next' || checkT =='>Next' ||checkT == '>n'|| checkT == '>N'|| checkT =='n'||checkT == 'N') {
          $('p').text('');
          showText("#responce",'Focus up PARROT says. ‘We are sending the three of you to explore territory that has been inaccessible until now, The depths of the ocean. This specially built Submarine “The (greek myth name)” and deep sea suits have been developed to survive depths of up to (number km). You are our mission leader, pilot and communications expert, Synthia is our biologist, going out to document new sealife and plants. ELEPHANT is our mechanic, and geologist documenting the landscape of the ocean floor. ', 0, 40,)
          storyMark = 1;
        } else { wrongInp();}
     break
      
      case 1:
        if(checkT == '>next' || checkT =='>Next' ||checkT == '>n'|| checkT == '>N'|| checkT =='n'||checkT == 'N' ) {
          $('p').text('');
          showText("#responce", 'No More has been Written', 0, 100,)
          storyMark = 2;
        } else if (checkT == '>stop' || checkT == '>Stop' ||checkT == '>s'|| checkT == '>S'|| checkT =='s'||checkT =='S') {
          $('p').text('');
          showText("#responce", 'All done (for now)', 0, 100,)
         storyMark = 3;
        } else { wrongInp(); }
      break

      }
     
    }

   });

});



 