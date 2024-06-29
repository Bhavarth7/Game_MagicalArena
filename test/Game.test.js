
// import { assert } from 'chai';
const Player = require('../src/Player');
const Game = require('../src/Game');
const assert = require('chai');

describe('Player', function() {
    let player1;
    let player2;

    beforeEach(function() {
        player1 = new Player(50, 5, 10);
        player2 = new Player(100, 10, 5);
    });

    it('should initialize player attributes correctly', function() {
        assert.strictEqual(player1.getHealth(), 50);
        assert.strictEqual(player1.getStrength(), 5);
        assert.strictEqual(player1.getAttack(), 10);

        assert.strictEqual(player2.getHealth(), 100);
        assert.strictEqual(player2.getStrength(), 10);
        assert.strictEqual(player2.getAttack(), 5);
    });

    //Here we Add more tests for game logic, edge cases, etc.
});
