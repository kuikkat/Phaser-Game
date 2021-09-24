var menuState = {

	create: function() { 

		this.cursor = game.input.keyboard.createCursorKeys();

		// Name of the game

		var nameLabel = game.add.text(game.world.centerX, 80, 'Press the button to start', { font: '40px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

		// How to start the game

        var button = game.add.button(game.world.centerX, 235, 'button', this.start, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
    
        button.onInputDown.add(this.start);

	},

	start: function() {
		game.state.start('play');	
	}
};