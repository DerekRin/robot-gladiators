//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots 
//  * Defeat each enemy-robots
//"LOSE" - Player robot's health is zero or less

//Window Fight
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can log muliple values at once like this console.log(playerName, playerAttack, playerHealth);
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];



// fight();
var fight = function (enemyName) {
    window.alert("Welcome to Robot Gladiators!");

var promptFight = window.prompt("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.");

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracking the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
    } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
); 

//check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

//if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to QUIT?");

    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    playerMoney = playerMoney -2;
    }
    else {
        fight();
    }
    } else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};