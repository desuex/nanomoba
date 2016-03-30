var Player = require('../entities/player');
var Terrain = require('../terrain/terrain');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
    //var x = (this.game.width / 2) - 100;
    //var y = (this.game.height / 2) - 50;
    this.terrain =new Terrain(this.game,0,0,'terrain');
    this.green=new Player(this.game,100,100,'player_green');
    this.blue=new Player(this.game,100,200,'player_blue');
    this.magenta=new Player(this.game,100,300,'player_magenta');
    this.yellow=new Player(this.game,100,400,'player_yellow');
    this.orange=new Player(this.game,100,500,'player_orange');
    //this.testentity.anchor.setTo(0.5, 0.5);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
    var x, y, cx, cy, dx, dy, angle, scale;

    //x = this.input.position.x;
    //y = this.input.position.y;
    //cx = this.world.centerX;
    //cy = this.world.centerY;

    //angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
    //this.testentity.angle = angle;

    //dx = x - cx;
    //dy = y - cy;
    //scale = Math.sqrt(dx * dx + dy * dy) / 100;
    this.terrain.position.x=this.input.position.x-1000;
    this.terrain.position.y=this.input.position.y-1000;
    //this.testentity.scale.x = scale * 0.6;
    //this.testentity.scale.y = scale * 0.6;
  },

  onInputDown: function () {
    //this.game.state.start('Menu');
  }
};
