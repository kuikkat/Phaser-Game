var score = 0;
var scoreText;
var emitter;

var playState = {

	create: function() { 

		game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 250;

		this.enemy = game.add.sprite(game.world.centerX, 0, 'enemy');
		this.enemy.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.enemy);
		this.enemy.body.bounce.x = 1;
		this.enemy.body.gravity.y = 1000;
		this.enemy.body.velocity.x = -200;

		this.coin = game.add.sprite(460, 300, 'coin');
		game.physics.arcade.enable(this.coin);
		this.coin.anchor.setTo(0.5, 0.5);

		this.createWorld();

		var music = game.add.audio('main');
		music.play();

		scoreText = game.add.text(30, 30, 'Score: 0', { fontSize: '32px', fill: '#000000' });
	},
	

	update: function() {

		game.physics.arcade.collide(this.player, this.walls);
		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
		game.physics.arcade.collide(this.enemy, this.walls);
		game.physics.arcade.overlap(this.enemy, this.coin);
		game.physics.arcade.collide(this.enemy, this.player, this.playerDie);
		game.physics.arcade.collide(this.player, this.blocks);
 		game.physics.arcade.collide(this.enemy, this.blocks);

		this.movePlayer();

		if(!this.player.inWorld) {

			this.playerDie();
		}
	},

	takeCoin: function(player, coin) {

		var coinaudio = game.add.audio('coinaudio');
		coinaudio.play();
		score += 1;
		scoreText.text = 'Score: ' + score;
		this.scoreFull;
		this.updateCoinPosition();
	},

	updateCoinPosition: function() {

		var coinPosition = [

			{x: 140, y: 60}, {x: 360, y: 60},
			{x:60, y: 140}, {x: 60, y: 300},
			{x: 460, y: 300}, {x: 450, y: 135},
			{x: 330, y: 215}, {x: 170, y: 215}
		];

		for(var i = 0; i < this.updateCoinPosition.length; i++) {
			if(coinPosition[i].x === this.coin.x) {

				coinPosition.splice(i, 1);
			}
		}

		var newPosition = coinPosition[game.rnd.integerInRange(0, coinPosition.length -1)];
		this.coin.reset(newPosition.x, newPosition.y);

	},

	movePlayer: function() {

		this.cursor = game.input.keyboard.createCursorKeys();

		if (this.cursor.left.isDown) {
    	this.player.body.velocity.x = -200;
		this.player.animations.play('left');
		}
		else if (this.cursor.right.isDown) {
    	this.player.body.velocity.x = 200;
		this.player.animations.play('right');
		}
		else {
    	this.player.body.velocity.x = 0;
		this.player.animations.play('idle');
		}

		if (this.cursor.up.isDown && this.player.body.touching.down) {
    	this.player.body.velocity.y = -240;
		this.player.animations.play('jump');
		}
	},

	playerAnimation: function() {

		this.player.animations.add('right', [1, 2], 8, true);
		this.player.animations.add('left', [1, 3], 8, true);
		this.player.animations.add('idle', [1], 8, true);
		this.player.animations.add('jump', [4], 8, true);
	},

	playerDie: function() {

		//Make delay on gameover state so death sound effect can play

		var death = game.add.audio('death');
		death.play();
		this.explosion;
		game.state.start('gameover');
		game.sound.stopAll();
	},

	createNewWorld: function() {

		this.map = game.add.tilemap('map');
		this.map.addTileSetImage('tileset');
		this.background = this.map.createLayer('background');
		this.blocks = this.map.createLayer('blocks');

		this.layer.resizeWorld();
		this.map.setCollision(1);
	},

	createWorld: function() {

		this.walls = game.add.group();
		this.walls.enableBody = true;

		game.add.sprite(0, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(480, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(0, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(300, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(0, 330, 'WallHorizontal', 0, this.walls);
		game.add.sprite(320, 330, 'WallHorizontal', 0, this.walls);
		game.add.sprite(-100, 160, 'WallHorizontal', 0, this.walls);
		game.add.sprite(400, 160, 'WallHorizontal', 0, this.walls);
		game.add.sprite(150, 240, 'WallHorizontal', 0, this.walls);
		game.add.sprite(150, 90, 'WallHorizontal', 0, this.walls);
		
		this.walls.setAll('body.immovable', true);

	},

	createBigWorld: function() {

	},

	particleBurst: function(pointer) {

		emitter.x = pointer.x;
		emitter.y = pointer.y;
	
		emitter.start(true, 4000, null, 10);

		game.time.events.add(2000, destroyEmitter, this);
	
	},
	
	destroyEmitter: function() {
	
		emitter.destroy();

	},

	explosion: function() {

		emitter = game.add.emitter(0, 0, 100);

		emitter.makeParticles('explosion');
		emitter.gravity = 200;
	
	},
	

	scoreFull: function() {
	if (score === 100) {

		this.createNewWorld();
		}
	}
};