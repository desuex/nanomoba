var Player = function (game, x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);
    game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {
};

module.exports = Player;
