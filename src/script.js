"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor((Math.random() * 11));
}

// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random()*2);
    return (randNum === 0 ? opt1 : opt2);
}

// console.log(chooseOption("Ian", "Kristina"));

const attackPlayer = function(health) {
    return (health - randomDamage());
}

// console.log(attackPlayer(50));

const logHealth = (player, health) => console.log(`${player}'s health: ${health}.`);

// console.log(logHealth("Ian", 69));

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}.`);

// console.log(logDeath("Ian", "Jack"));

const isDead = (health) => {
    return health <= 0 ? true : false;
}

// console.log(isDead(0));

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker == player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health) == true) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) == true) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
    
// fight("Ian", "Kristina", 80, 100);

function printSquare(width) {
    for (let i = 0; i < width; i++) {
        console.log("###");
    }
}

// printSquare(3);

function printTriangle(width) {
    for (let i = 1; i <= width; i++) {
        let newLine = "";
        for(let j = i; j > 0; j--) {
            newLine += "#";
        }
        console.log(newLine);
    }
}

// printTriangle(4);

function getGrade(number) {
    if (number >= 90) {
        return "A";
    } else if (number <= 89 && number >= 80) {
        return "B";
    } else if (number <= 79 && number >= 70) {
        return "C";
    } else if (number <= 69 && number >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(getGrade(75));