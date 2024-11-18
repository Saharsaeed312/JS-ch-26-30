// Question:no:01:
let number1 = prompt("Enter a positive integer:");
        number1 = parseFloat(number1);
        let result1 = document.createElement("div");
        result1.innerHTML = `
          <p>Number: ${number1}</p>
          <p>Rounded Value: ${Math.round(number1)}</p>
          <p>Floor Value: ${Math.floor(number1)}</p>
          <p>Ceil Value: ${Math.ceil(number1)}</p>
        `;
        document.body.appendChild(result1);
        // Question:no:02:
        let number2 = prompt("Enter a positive integer:");
        number2 = parseFloat(number2);
        let result2 = document.createElement("div");
        result2.innerHTML = `
          <p>Number: ${number2}</p>
          <p>Rounded Value: ${Math.round(number2)}</p>
          <p>Floor Value: ${Math.floor(number2)}</p>
          <p>Ceil Value: ${Math.ceil(number2)}</p>
        `;
        document.body.appendChild(result2);
        // Question:no:03:
        let number3 = prompt("Enter a number:");
        number3 = parseFloat(number3);
        let absValue = Math.abs(number3);
        let result3 = document.createElement("div");
        result3.innerHTML = `<p>The absolute value of ${number3} is ${absValue}</p>`;
        document.body.appendChild(result3);
        // Question:no:04:
        let diceValue = Math.floor(Math.random() * 6) + 1;
        let result4 = document.createElement("div");
        result4.innerHTML = `<p>Random dice value: ${diceValue}</p>`;
        document.body.appendChild(result4);
        // Questio:no:05:
        let coinValue = Math.random() < 0.5 ? "Heads" : "Tails";
        let result5 = document.createElement("div");
        result5.innerHTML = `<p>Random coin value: ${coinValue}</p>`;
        document.body.appendChild(result5);
        // Question:no:06:
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        let result6 = document.createElement("div");
        result6.innerHTML = `<p>Random Number (1 to 100): ${randomNumber}</p>`;
        document.body.appendChild(result6)
        // Question:no:07:
        let userInput7 = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
        let weight = parseFloat(userInput7);
        let result7 = document.createElement("div");
        result7.innerHTML = `<p>Your weight is: ${weight} kg</p>`;
        document.body.appendChild(result7);
        // Question:no:08:
        let secretNumber = Math.floor(Math.random() * 10) + 1;
        let userInput8 = prompt("Guess the secret number (between 1 and 10):");
        let userNumber = parseInt(userInput8);
        let result8 = document.createElement("div");
        if (userNumber === secretNumber) {
            result8.innerHTML = `<p>Congratulations! You guessed the secret number: ${secretNumber}!</p>`;
        } else {
            result8.innerHTML = `<p>Sorry, the secret number was: ${secretNumber}. Better luck next time!</p>`;
        }
        document.body.appendChild(result8);