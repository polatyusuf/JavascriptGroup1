// 1. Analyze the problem and understand the requirements
// 2. Always have a plan before you start coding
// 3. Start with what you know
// 4. Break the problem into smaller problems
// 5. Reduce the problem to a simpler problem
// 6. Look for analogies (similar problems) to help you solve the problem
// 7. Experiment

function compareChoices(humanChoice, computerChoice) {
    // 1. get the value of the selected option
    humanChoice = document.getElementById("3").value;
    // 2. get the value of the computer's choice
    const choices = []; // Get the choices from the select element into an array options
    // 3. get a random value from the array
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // 3. compare the two values
    // scissors cut paper,
    if ((humanChoice === "scissors" && computerChoice == "paper") 
        || (humanChoice == "paper" && computerChoice == "scissors")) {
    
        if (humanChoice == "scissors") {
            document.getElementById("1").innerHTML = "scissors cut paper, You win!";            
        } else {
            document.getElementById("1").innerHTML = "scissors cut paper, Computer wins!";
        }
    }
    // paper covers rock 
    else if ((humanChoice === "paper" && computerChoice == "rock") 
        || (humanChoice == "rock" && computerChoice == "paper")) {
    
            const elem = document.getElementById("2");

        if (humanChoice == "paper") {
            elem.innerHTML = "paper covers rock, You win!";
            
        } else {
            elem.innerHTML = "paper covers rock, Computer wins!";
        }
    } else {
        document.getElementById("1").innerHTML = "No winner, it's a tie!";
    }
    
    // lizard poisens Spock,

    // Spock smashes scissors,

    // scissors decapotates lizard,

    // lizard eats paper,

    // paper disproves Spock,

    // Spock vaporises rock,

    // rock crushes scissors.
}