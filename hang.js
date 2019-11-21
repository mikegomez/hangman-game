 
    let words = ['bird', 'cow', 'trees'];
    
    let word = words[Math.floor(Math.random() * 3)];        
    console.log(word);
    let guessesLeft = word.length;
    console.log(guessesLeft);
    let wins = 0;
    let losses = 0;
    let answerArray = [];
    let letterToGuess = null;


    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.addEventListener('keydown', event => {      

        let userText = document.getElementById('lettersGuess');
        let guessedLetters = [];
        let letterPress = event.key;
        console.log(letterPress);
        // a.push(userGuess);
        userText.textContent = letterPress;
    
        let bb = [];
        for (i = 0; i < word.length; i++) {
            bb[i] = "_ "; 
              }

        //    let userGuess =  String.fromCharCode(event.keyCode);

        //    a.push(letterPress);

           let updateGuess = function() {
             
                  console.log(bb);
        
               document.querySelector('#displayWordz').innerHTML = bb;
           };

            let updateGuessesSoFar = function(){

                document.querySelector('#lettersGuess').innerHTML = answerArray.join(' ');

            }

updateGuess();
updateGuessesSoFar();


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  answerArray.push(userGuess);
  updateGuessesSoFar();

if (guessesLeft > 0){
    if (userGuess == letterToGuess){
        wins++;
        document.querySelector('#win').innerHTML = "Wins: " + wins;
        reset();
    }

}
}
    })

        


        // while (word.length < letter){
        //     add to #thispart
        // } else if(guess !== letter) {
        //     add to #wrongpart
        // } else if(guess === 0) {
        //     gameOver
        //     restart
        // }

    // let remainingLetters = word.length;
    // //game loop

    //     while (remainingLetters > 0) {
    //         return(answerArray.join(" "));
    
    //         let guess = prompt("Guess a letter");

    //         if (guess == null) {
    //             break;
    //         } else if (guess.length !==1) {
    //                 return("Pick a letter");
    //         }  else {
    //             //udpate game status
    //          for (let i =0; i< word.length; i++){
    //                 if (word[i] === guess) {
    //                     answerArray[i] = guess;
    //                     remainingLetters--;
    //                     }
    //                 }
    //                 }
    //             }
            
     
    // alert(answerArray.join(" "));
    // alert("Good job! The answer is " + word);
        
        