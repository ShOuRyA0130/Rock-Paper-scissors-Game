document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const playerChoiceDisplay = document.getElementById('player-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const resultDisplay = document.getElementById('result');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);
            playerChoiceDisplay.textContent = capitalize(playerChoice);
            computerChoiceDisplay.textContent = capitalize(computerChoice);
            resultDisplay.textContent = result;
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(player, computer) {
        if (player === computer) {
            return 'It\'s a tie!';
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
