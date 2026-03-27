// Initialize colors (2x each)
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'brown'];

let cards = shuffle(colors.concat(colors)); // duplicate color list, shuffle.
let selectedCards = []; // array that temporarily holds each card
let score = 0; // score
let timeLeft = 30; // start time
let gameInterval;

// retrieve HTML elements from the site
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// generate "cards" using div elements styled in the "card" class
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div'); // create div node
        card.classList.add('card'); // add the "card" class to the div node
        card.dataset.color = color; // custom dataset field sets field "color" to the color of the card
        card.textContent = '?'; // set the text inside the div to be "?"
        gameContainer.appendChild(card); // add child node to the parent node, gameContainer
    }
}

// shuffle cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { // iterate through array (cards) backwards
        const j = Math.floor(Math.random() * (i + 1)); // assign random index from 0 - current idx + 1
        [array[i], array[j]] = [array[j], array[i]]; // swaps items between array[j] and array[i]
    }
    return array; // return the now-shuffled array
}

// event handler function for when a card is clicked
function handleCardClick(event) {
    const card = event.target; // Assign the target (where the user clicked) as the card
    if (!card.classList.contains('card') || card.classList.contains('matched')) { // If the card does not have the class "Card" or is already matched, do nothing.
        return;
    }
    card.textContent = card.dataset.color; // Change the text content of the div to list the color
    card.style.backgroundColor = card.dataset.color; // Change the background color of the div to the color
    selectedCards.push(card); // Push card to selected card array
    if (selectedCards.length === 2) { // If there are two cards in the selected cards array, check if they match, 0.5 seconds
        setTimeout(checkMatch, 500);
    }
}

// check if the cards match
function checkMatch() {
    const [card1, card2] = selectedCards; // assign card 1 and card 2 from the two cards in selected Cards 
    if (card1.dataset.color === card2.dataset.color) { // matched
        card1.classList.add('matched'); // add class "matched" to each card to activate the "matched" style
        card2.classList.add('matched');
        score += 2; // increment score by two
        scoreElement.textContent = `Score: ${score}`; // update score text element
    } else { // revert cards back to gray '?'
        card1.textContent = '?'; 
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = []; // empty selected cards
}


// start game
function startGame() {
    let timeLeft = 30; // set remaining time to 30 seconds
    startbtn.disabled = true; // disable the start button so it cannot be restarted mid-game
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`; // Display score (initially 0)
    startGameTimer(timeLeft); // start game timer function
    cards = shuffle(colors.concat(colors)); // shuffle cards again
    selectedCards = []; // reset array of selected cards
    gameContainer.innerHTML = ''; // reset gameContainer (empty)
    generateCards(); // repopulate gameContainer
    gameContainer.addEventListener('click', handleCardClick); // add new event Listener that activates handleCardClick method
}

// game timer
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`; // update time left to 30 seconds
    gameInterval = setInterval(() => { // function for time every second
        timeLeft--; // decrement by 1
        timerElement.textContent = `Time Left: ${timeLeft}`; // show time left
        if (timeLeft === 0) { // when timeLeft reaches zero
            clearInterval(gameInterval); // stop the time interval from counting down further
            let timeLeft = 30; // reset time left
            alert('Game Over!'); // end game
            startbtn.disabled = false; // reset start button
        }
    }, 1000); // occurs every second
}

startbtn.addEventListener('click', startGame);