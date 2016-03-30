var Terrain = function (game, x, y, sprite) {
    Phaser.Sprite.call(this, game, x, y, sprite);
    game.add.existing(this);
};

Terrain.prototype = Object.create(Phaser.Sprite.prototype);
Terrain.prototype.constructor = Terrain;

/**
 * Automatically called by World.update
 */
Terrain.prototype.update = function() {
};

module.exports = Terrain;
