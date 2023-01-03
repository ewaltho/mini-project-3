//make timer that starts when button is clicked: DONE

//make an array of words to use: DONE

//make selector to pick a word from the array for the user to guess

//hide the word by setting all individual letters to underscores

//use a setAttribute method to hide and show letters upon proper key press

//show answer when timer runs out and the word is not complete

//use local storage for scores

var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start");
var wordGuess = document.querySelector(".word")
var wordOptions = ["keyboard", "mouse", "monitor", "mousepad", "headphones"];

// timeEl.textContent = "Hello";

function startGame(){
    
    var secondsLeft = 31;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining!";
        
        if(secondsLeft === 1) {
            timeEl.textContent = secondsLeft + " second remaining!";
        } else if(secondsLeft === 0) {
            //results when timer runs out.
            clearInterval(timerInterval);
            secondsLeft = 31;
            sendMessage();
        } else {
            //add in word stuff idk. run word functions here in else if statements.
        }
        
    }, 1000);

};

//make new function for the word guesser

function sendMessage() {
    timeEl.textContent = "Time's up!"
}

startEl.addEventListener('click', function(){
    startGame();
})