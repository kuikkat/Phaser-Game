var menuState = {

	create: function() { 
		// Name of the game
		// todo ändra labeln inte satanistiska svärdomar
		var nameLabel = game.add.text(game.world.centerX, 80, 'Helvete Welcome', { font: '50px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

		// How to start the game
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);	
		

		

		// Start the game when the up arrow key is pressed
		// todo or button start
		this.start
	},



	start: function() {
		game.state.start('play');	
	}
};