var score = 0;
var scoreText;

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

		if (this.cursor.left.isDown) 
    	this.player.body.velocity.x = -200;
		else if (this.cursor.right.isDown) 
    	this.player.body.velocity.x = 200;
		else 
    	this.player.body.velocity.x = 0;

		if (this.cursor.up.isDown && this.player.body.touching.down)
    	this.player.body.velocity.y = -240;
		
	},

	playerAnimation: function() {

		player.animations.add('left', [2, 3], 10, true);
    	player.animations.add('turn', [0], 20, true);
    	player.animations.add('right', [2, 3], 10, true);
	},

	playerDie: function() {

		//Make delay on gameover state so death sound effect can play

		var death = game.add.audio('death');
		death.play();
		game.state.start('gameover');
		game.sound.stopAll();
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

		if(score === 100) {
			
		}
	}
};