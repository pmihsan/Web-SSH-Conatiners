var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1; // To Create a random number
var guess_num = [];
var no_of_guesses = 0;

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Enter a Valid Number(between 1 - 100)");
    }
    else{
        guess_num.push(user_guess);
        no_of_guesses += 1;
        if(user_guess < answer){
            msg1.textContent = "Your Guess Is Too LOW";
            msg2.textContent = "No Of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are: " + guess_num;
        }
        else if(user_guess > answer){
            msg1.textContent = "Your Guess Is Too HIGH";
            msg2.textContent = "No Of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers Are: " + guess_num;
        }
        else if(user_guess == answer){
            msg1.textContent = "You Found The Number!!...";
            msg2.textContent = "The Number was: " + answer;
            msg3.textContent = "You guessed the number in: " + no_of_guesses + " guesses";
        }
    }
}
