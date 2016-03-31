var Player = require('../entities/player');
var Terrain = require('../terrain/terrain');

var Game = function () {
    this.testentity = null;
};

module.exports = Game;

Game.prototype = {
    releaseInput: false,
    map_bias_x: 0,
    map_bias_y: 0,
    input_x: null,
    input_y: null,
    create: function () {
        //var x = (this.game.width / 2) - 100;
        //var y = (this.game.height / 2) - 50;
        //this.terrain = new Terrain(this.game, 0, 0, 'terrain');

        this.world.setBounds(0, 0, 2500, 2386);
        this.physics.startSystem(Phaser.Physics.P2JS);
        this.physics.p2.defaultRestitution = 0.9;
        this.terrain = new Terrain(this.game,0,0,'terrain');
        //this.terrain.fixedToCamera = true;
        this.green = new Player(this.game, 100, 100, 'player_green');
        this.blue = new Player(this.game, 100, 200, 'player_blue');
        this.magenta = new Player(this.game, 100, 300, 'player_magenta');
        this.yellow = new Player(this.game, 100, 400, 'player_yellow');
        this.orange = new Player(this.game, 100, 500, 'player_orange');
        //this.terrain = this.add.sprite(0,0,2500,2386,'terrain');



        //this.green.enableBody = true;
        //this.green.physicsBodyType = Phaser.Physics.P2JS;
        this.physics.p2.enable(this.green,false);
        this.green.body.setCircle(28);
        this.camera.follow(this.green);
        this.cursors = this.input.keyboard.createCursorKeys();


        //this.input.onDown.add(this.onInputDown, this);
        //this.input.onUp.add(this.onInputUp, this);
    },

    update: function () {
        this.green.body.setZeroVelocity();
        if (this.cursors.left.isDown)
        {
            this.green.body.moveLeft(200);
        }
        else if (this.cursors.right.isDown)
        {
            this.green.body.moveRight(200);
        }

        if (this.cursors.up.isDown)
        {
            this.green.body.moveUp(200);
        }
        else if (this.cursors.down.isDown)
        {
            this.green.body.moveDown(200);
        }
        //
        //if (!this.camera.atLimit.x)
        //{
        //    this.terrain.position.x -= (this.green.body.velocity.x * this.time.physicsElapsed);
        //}
        //
        //if (!this.camera.atLimit.y)
        //{
        //    this.terrain.position.y -= (this.green.body.velocity.y * this.time.physicsElapsed);
        //}


        //if (this.releaseInput) {
        //    if (this.input_x === null) {
        //        this.input_x = this.input.position.x;
        //    }
        //    if (this.input_y === null) {
        //        this.input_y = this.input.position.y;
        //    }
        //    this.terrain.position.x -= 2*(this.input_x - this.input.position.x);
        //    this.terrain.position.y -= 2*(this.input_y - this.input.position.y);
        //    this.input_x = this.input.position.x;
        //    this.input_y = this.input.position.y;
        //}
;
    },

    onInputDown: function () {
        this.releaseInput = true;
        //this.game.state.start('Menu');
    },

    onInputUp: function () {
        this.releaseInput = false;
        this.input_x=null;
        this.input_y=null;
    }
};
