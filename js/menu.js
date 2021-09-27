var menuState = {

	create: function() { 

		var nameLabel = game.add.text(game.world.centerX, 80, 'Press the button to start', { font: '40px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

        var button = game.add.button(game.world.centerX, 235, 'button', this.start, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);
    
        button.onInputDown.add(this.start);

		this.muteButton = game.add.button(10, 10, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;

		if (game.sound.mute) {

			this.muteButton.frame = 1;
		}
	},

	toggleSound: function() {

		game.sound.mute = !game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1 : 0;
	},

	start: function() {
		
		game.state.start('play');	
	}

};