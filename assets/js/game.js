var playerInfo.name = window.prompt("What is your robot's name?")
var playerInfo.health = 100;
var playerAttack = 10;
var playerInfo.money = 10;

var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
var enemy.health = 50;
var enemyAttack = 12;


console.log(enemy.names);
console.log(enemy.names.length);
console.log(enemy.names[0]);
console.log(enemy.names[3]);

//window.alert("Welcome to Robot Gladiators!");


// fight();
var fight = function (enemy) {
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (isPlayerTurn) {
            if (fightOrSkip()) {
                break;
            }
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(
            playerInfo.name + " attacked " + 
            enemy.name + ". " + 
            enemy.name + " now has " + 
            enemy.health + " health remaining."
            );

            if (enemy.health <=0) {
            window.alert(enemy.name + " has died!");

            playerInfo.money = playerInfo.money + 20;
            break;
            } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
            } 
            } else {
                var damage = randomNumber(enemyAttack - 3, enemyAttack);

                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
                ); 
                if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
                } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }                
};



//function to start a new game
var startGame = function () { 
        //reset player stats
        playerInfo.health = 100;
        playerAttack = 10;
        playerInfo.money = 10;

for(var i = 0; i < enemy.names.length; i++) {
    if (playerInfo.health > 0 ) {
    window.alert("Welcome to Robot Gladiators! Round " + (i +1));

    var pickedenemy.name = enemy.names[i];
    enemy.health = randomNumber(40, 60);
    fight(pickedenemy.name);
    if (playerInfo.health > 0 && i < enemy.names.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) { 
        shop();
        }
    }
} else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
        }
    }
    //play again
    endGame();
};



var endGame = function () {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
    window.alert("You've lost your robot in battle.");
}
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladitors! Come back soon!");
    }
}



var shop = function() {
    var shop0ptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attack, or LEAVE?");

    switch (shop0ptionPrompt) {
        case "REFILL": //New case
        case "refill":
            if (playerInfo.money >= 7) { 
            window.alert("Refilling player's health by 20 for 7 dollars.");

            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE": //New case
        case "upgrade":
            if (playerInfo.money >= 7) { 
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerInfo.money = playerInfo.money - 7;
        } else {
            window.alert("You don't have enough money!");
        }
            break;

        case "LEAVE": //New case
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            break;
    }
};



var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}



//start the game when the page loads
startGame();

