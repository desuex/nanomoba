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

        this.load.physics('physicsData', 'assets/physics/sprites.json');
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
