 
    var words = ['bird', 'cow', 'trees'];
    
    var word = words[Math.floor(Math.random() * 3)];        
    console.log(word);
    var answerArray = [];

    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.addEventListener('keydown', event => {

        let userText = document.getElementById('lettersGuess');
        let a = [];
        let letterPress = event.key;
        // a.push(letterPress);
        // a.splice(', ');
        console.log(letterPress);

        // b.join(', ');
      userText.textContent = letterPress;
    
        
    
        for (i = 0; i < word.length; i++) {
            let beez = document.getElementById('displayWordz');
        let x = answerArray[i] = "_"; 

                beez.innerText = x;
              
          }
          console.log(answerArray);
               

        });

        // while (word.length < letter){
        //     add to #thispart
        // } else if(guess !== letter) {
        //     add to #wrongpart
        // } else if(guess === 0) {
        //     gameOver
        //     restart
        // }

    // var remainingLetters = word.length;
    // //game loop

    //     while (remainingLetters > 0) {
    //         return(answerArray.join(" "));
    
    //         var guess = prompt("Guess a letter");

    //         if (guess == null) {
    //             break;
    //         } else if (guess.length !==1) {
    //                 return("Pick a letter");
    //         }  else {
    //             //udpate game status
    //          for (var i =0; i< word.length; i++){
    //                 if (word[i] === guess) {
    //                     answerArray[i] = guess;
    //                     remainingLetters--;
    //                     }
    //                 }
    //                 }
    //             }
            
     
    // alert(answerArray.join(" "));
    // alert("Good job! The answer is " + word);
        
        