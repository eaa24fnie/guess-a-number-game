"use strict";

let targetNum = Math.floor(Math.random() * 101);

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value, 10);
    let message = document.getElementById("message");
    
    if (isNaN(guess)) {
        message.textContent = "Gæt et gyldigt tal.";
        return;
    }
    
    if (guess < targetNum) {
        message.textContent = "FOR LAVT!! GÆT IGEN!!!";
    } else if (guess > targetNum) {
        message.textContent = "ALT FOR HØJT! GÆT IGEN!!!";
    } else {
        message.textContent = "GZ! Du vandt!";
        alert("Du vandt! Det rigtige tal var " + targetNum);
        targetNum = Math.floor(Math.random() * 101); // Ny runde
    }
}

  





































