const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    // fade out the intro screen, fade in the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };

    //Start Round
    const startRound = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        //Remove animation from hands so the animation will alwasy be readded later i.e. replay
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        //Generate the computer's choice
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=> {
            option.addEventListener("click", function() {
                const randNum = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[randNum];
                
                //Delay game logic for two seconds while the animation plays
                setTimeout(() => {
                    //Compare choices to find winner
                    findWinner(this.textContent, computerChoice);

                    //Update hand images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                
                //Animate hands moving
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
        

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const findWinner = (playerChoice, computerChoice) =>{
        const winnerMsg = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winnerMsg.textContent = "It's a tie!";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winnerMsg.textContent = "You win!";
                pScore++;
        return;
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
        return;
            }
        }else if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winnerMsg.textContent = "You win!";
                pScore++;
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
            }
        }else{
            if(computerChoice === 'rock'){
                winnerMsg.textContent = "You win!";
                pScore++;
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
            }
        }

        updateScore();
        return;
    }    
        

    }

    // call
    startGame();
    startRound();
};

//initiate the game
game();