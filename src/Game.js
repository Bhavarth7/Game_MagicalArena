const Player = require('./Player');

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    start() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.takeTurn(this.player1, this.player2);
            if (this.player2.isAlive()) {
                this.takeTurn(this.player2, this.player1);
            }
        }

        if (!this.player1.isAlive()) {
            console.log("Player 1 has died. Player 2 wins!");
        } else {
            console.log("Player 2 has died. Player 1 wins!");
        }
    }

    takeTurn(attacker, defender) {
        const attackRoll = this.rollDie();
        const defenseRoll = this.rollDie();

        const damage = Math.max(attacker.getAttack() * attackRoll - defender.getStrength() * defenseRoll, 0);

        defender.reduceHealth(damage);
        console.log(`Attacker rolled: ${attackRoll}, Defender rolled: ${defenseRoll}`);
        console.log(`Damage dealt: ${damage}`);
        console.log(`Defender's remaining health: ${defender.getHealth()}`);
    }

    rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

module.exports = Game;
