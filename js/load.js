var loadState = {

	preload: function() {		
		// Add a loading label 
		var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		game.load.image('background', 'assets/images/background.png');

		// Load all assets
		
		// ...
	},

	create: function() { 
		game.add.image('background');
		game.state.start('menu');
	}
};