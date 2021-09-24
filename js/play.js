var playState = {

	create: function() { 

		game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 250;

		this.createWorld();
	},

	update: function() {

		game.physics.arcade.collide(this.player, this.walls);

		//Move Player
		this.movePlayer();

		if(!this.player.inWorld) {

			this.playerDie();
		}
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

	playerDie: function() {

		game.state.start('menu');
	},

	createWorld: function() {

		//Walls

		this.walls = game.add.group();
		this.walls.enableBody = true;

		game.add.sprite(0, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(480, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(0, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(300, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(0, 320, 'WallHorizontal', 0, this.walls);
		game.add.sprite(300, 320, 'WallHorizontal', 0, this.walls);
		game.add.sprite(-100, 160, 'WallHorizontal', 0, this.walls);
		game.add.sprite(400, 160, 'WallHorizontal', 0, this.walls);
		game.add.sprite(150, 230, 'WallHorizontal', 0, this.walls);
		game.add.sprite(150, 90, 'WallHorizontal', 0, this.walls);
		
		this.walls.setAll('body.immovable', true);

	}
};