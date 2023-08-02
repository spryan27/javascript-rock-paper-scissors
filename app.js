const game = ()=> {
    const winnerMsg = document.querySelector('.winner');
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

        //Clear any animation to ensure animation can be added further down i.e. replay each round
        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        //Generate the computer's choice
        const computerOptions = ['rock', 'paper', 'scissors'];

        //Add event listener to each button to run game logic when clicked
        options.forEach(option=> {
            option.addEventListener("click", function() {
                const randNum = Math.floor(Math.random() * 3); 
                const computerChoice = computerOptions[randNum];

                //Reset hand images to default
                playerHand.src = './assets/rock.png';
                computerHand.src = './assets/rock.png';
                
                //Delay game logic for two seconds while the animation plays
                setTimeout(() => {
                    //Compare choices to find winner
                    findWinner(this.textContent, computerChoice);

                    //Update hand images to selection
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                
                //Animate hands moving
                winnerMsg.textContent = "Rock, paper, scissors...";
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
        

    // Increment score at the top of the page    
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


    // Compare choices and update display accordingly
    const findWinner = (playerChoice, computerChoice) =>{       
        if(playerChoice === computerChoice){
            winnerMsg.textContent = "It's a tie!";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winnerMsg.textContent = "You win!";
                pScore++;
                updateScore();
        return;
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
                updateScore();
        return;
            }
        }else if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winnerMsg.textContent = "You win!";
                pScore++;
                updateScore();
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
                updateScore();
            }
        }else{
            if(computerChoice === 'rock'){
                winnerMsg.textContent = "You win!";
                pScore++;
                updateScore();
            }else{
                winnerMsg.textContent = "Computer wins... :(";
                cScore++;
                updateScore();
            }
        }
        return;
    }    
        

    }

    // call
    startGame();
    startRound();
};

//initiate the game
game();