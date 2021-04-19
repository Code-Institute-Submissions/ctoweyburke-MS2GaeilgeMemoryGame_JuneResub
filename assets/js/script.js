const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var totalSeconds = 0;
var timerFunc = null
var matchCount = 0

function setTime() {
  document.getElementById('timer').textContent = ++totalSeconds;
}

function startGame(){
  if(timerFunc == null){
    timerFunc = setInterval(setTime, 1000);
  }
  cards.forEach(card => card.addEventListener('click', flipCard));
}

function resetGame(){
  if(timerFunc != null){
    clearInterval(timerFunc);
  }
  timerFunc = null;
  totalSeconds = 0;
  document.getElementById('flips').textContent = 0;
  document.getElementById('timer').textContent = 0;
  location.reload()
}

function increamentFlipCount(){
  document.getElementById('flips').textContent = parseInt(document.getElementById('flips').textContent) + 1;
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  increamentFlipCount()

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
  if(matchCount == 6){
    if(timerFunc != null){
      clearInterval(timerFunc);
    }
    let flips = document.getElementById('flips').textContent
    document.getElementById('finished_messsage').textContent = "You completed the game in " + totalSeconds + " seconds using " + flips + " flips"
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  document.getElementById('matched').textContent = ++matchCount;
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
