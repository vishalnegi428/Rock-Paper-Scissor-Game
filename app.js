const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const CHOICE_DEFAULT = ROCK;
const PLAYER_WON = "PLAYER WON";
const COMPUTER_WON = "COMPUTER WON";
const DRAW = "DRAW";

const userSelection = () => {
	let choice = prompt(
		`Enter ${ROCK}, ${PAPER} or ${SCISSOR}`,
		""
	).toUpperCase();
	if (choice !== ROCK && choice !== PAPER && choice !== SCISSOR) {
		alert("Invalid choice. Default value set to Rock.");
		return CHOICE_DEFAULT;
	}
	return choice;
};

const computerSelection = () => {
	const choice = Math.random();
	if (choice < 0.34) {
		return ROCK;
	} else if (choice < 0.67) {
		return PAPER;
	} else {
		return SCISSOR;
	}
};

const winnerSelection = (pChoice, cChoice) =>
	pChoice === cChoice
		? DRAW
		: (pChoice === ROCK && cChoice === SCISSOR) ||
		  (pChoice === PAPER && cChoice === ROCK) ||
		  (pChoice === SCISSOR && cChoice === PAPER)
		? PLAYER_WON
		: COMPUTER_WON;

/*	if (pChoice === cChoice) {
		return DRAW;
	} else if (
		(pChoice === ROCK && cChoice === SCISSOR) ||
		(pChoice === PAPER && cChoice === ROCK) ||
		(pChoice === SCISSOR && cChoice === PAPER)
	) {
		return PLAYER_WON;
	} else {
		return COMPUTER_WON;
	}*/

startGameBtn.addEventListener("click", () => {
	const player = userSelection();
	const computer = computerSelection();
	const winner = winnerSelection(player, computer);
	let message = `Yo chose ${player} and Computer chose ${computer}. So `;
	if (winner === PLAYER_WON) {
		alert(message + "YOU WON!");
	} else if (winner === COMPUTER_WON) {
		alert(message + "COMPUTER WON!");
	} else {
		alert(message + "ITS A DRAW.");
	}
});
