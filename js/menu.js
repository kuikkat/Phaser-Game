var menuState = {

	create: function() { 

		this.cursor = game.input.keyboard.createCursorKeys();

		// Name of the game
		// todo ändra labeln inte satanistiska svärdomar
		var nameLabel = game.add.text(game.world.centerX, 80, 'Welcome', { font: '50px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

		// How to start the game
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);	
		
		// Start the game when the up arrow key is pressed
		// todo or button start

		game.state.start('play')

		if (this.cursor.up.isDown) {
			this.start
		}

	},

	start: function() {
		game.state.start('play');	
	}
};