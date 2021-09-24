var loadState = {

	preload: function() {		
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		// Load all assets
		game.load.image('background', 'assets/images/background.png');
		game.load.image('coin', 'assets/images/coin.png');
		game.load.image('player', 'assets/images/player.png');
		game.load.image('enemy', 'assets/images/enemy.png');
		game.load.image('pixel', 'assets/images/pixel.png');
		game.load.image('WallHorizontal', 'assets/images/WallHorizontal.png');
		game.load.image('WallVertical', 'assets/images/WallVertical.png');
		
		// ...
	},

	create: function() { 
		game.state.start('menu');
	}
};