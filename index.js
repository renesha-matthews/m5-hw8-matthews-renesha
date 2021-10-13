// Create an Array of at least 3 losing messages
var losingMessages = ["Oops, better luck next time.", "Sorry, but you lost this one.", "Nope, try again."]

// Create variables to count wins and losses
var countWins = 0
var countLosses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message = document.getElementById('message')
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')


for (i = 0; i < boxElements.length; i++) {
    boxElements[i].addEventListener('click', function() {
        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a Number and store it to a variable
        var boxNumber = Number(this.textContent) 

        // create a random number between 1-3 and store it to a variable
        // This number will represent the winning box
        var winningBox = Math.floor(Math.random() * 3) + 1
        
        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        // if the numbers match, increment wins and display the win count in div#wins
        if (boxNumber === winningBox) {
            message.textContent = "Hooray! You're a winner!"
            countWins++
            wins.textContent = "Wins: " + countWins 
        }

        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
        // if the numbers don't match, increment losses and display the loss count in div#losses
        if (boxNumber !== winningBox) {
            var randomMessage = losingMessages[Math.floor(Math.random()*losingMessages.length)]
            message.textContent = randomMessage
            countLosses++
            losses.textContent = "Losses: " + countLosses
        }
    }
    )      
}










