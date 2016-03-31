var Preloader = function (game) {
    this.asset = null;
    this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

    preload: function () {
        this.asset = this.add.sprite(320, 240, 'preloader');
        this.asset.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.asset);
        this.load.image('testsprite', 'assets/test.png');
        this.load.image('contra2', 'assets/pics/contra2.png');
        this.load.image('bunny', 'assets/sprites/bunny.png');
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('wizball', 'assets/sprites/wizball.png');
        this.load.image('asuna_by_vali233', 'assets/sprites/asuna_by_vali233.png');
        this.load.image('terrain','assets/terrain/map.jpg');
        this.load.image('obstacles','assets/terrain/obstacles.png');
        this.load.image('blank_map','assets/terrain/blank_map.png');
        this.load.image('player_blue', 'assets/sprites/player_blue.png');
        this.load.image('player_green', 'assets/sprites/player_green.png');
        this.load.image('player_magenta', 'assets/sprites/player_magenta.png');
        this.load.image('player_orange', 'assets/sprites/player_orange.png');
        this.load.image('player_yellow', 'assets/sprites/player_yellow.png');

        this.load.physics('physicsData', 'assets/physics/map.json');
    },

    create: function () {
        this.asset.cropEnabled = false;
    },

    update: function () {
        if (!!this.ready) {
            this.game.state.start('Menu');
        }
    },

    onLoadComplete: function () {
        this.ready = true;
    }
};
