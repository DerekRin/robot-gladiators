//Window Fight

function fight () {
    window.alert("The fight has begun!");
}

// fight();

var playerName = window.prompt("What is your robot's name?")

var playerHealth = 100;
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

var playerAttack = 10;

//You can log muliple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!")
};

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracking the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " health remaining."
);

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
} else if (promptFight === "skip" || promptFight === "SKIP"){
    window.alert(playerName + " still has " + playerHealth + " health left.");
} else {
    window.alert("You need to choose a valid option. Try again!");
}


var promptFight = window.alert("Would you like to FIGHT or SKIP? Enter 'FIGHT' or 'SKIP' to choose.");

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

//put new code under this
console.log (
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

//check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " had died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

//put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

//check player's health
if (playerHealth <=0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}