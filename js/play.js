var playState = {

	create: function() { 

		game.add.image(game.world.centerX, game.world.centerY, 'background').anchor.set(0.5);

		this.walls = game.add.group();
		this.walls.enableBody = true;

		this.player = game.add.sprite(400, 150, 'player');
		this.createWorld;

		game.add.sprite(0, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(480, 0, 'WallVertical', 0, this.walls);
		game.add.sprite(0, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(300, 0, 'WallHorizontal', 0, this.walls);
		game.add.sprite(0, 320, 'WallHorizontal', 0, this.walls);
		game.add.sprite(300, 320, 'WallHorizontal', 0, this.walls);
		game.add.sprite(-100, 160, 'WallHorizontal', 0, this.walls);
		game.add.sprite(400, 160, 'WallHorizontal', 0, this.walls);

		console.log("Spelet har startat");
	},

	update: function() {

	},

	createWorld: function() {

		/*console.log('Visa väggen');
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
		*/

	}
};