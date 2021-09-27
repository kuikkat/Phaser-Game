var menuState = {

	create: function() { 

		var nameLabel = game.add.text(game.world.centerX, 80, 'Press the button to start', { font: '40px Arial', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);

        var button = game.add.button(game.world.centerX, 235, 'button', this.start, 2, 1, 0);
        button.anchor.setTo(0.5, 0.5);

		var mute = game.add.button(20, 20, 'mute', this.mute, 2, 1, 0);
        mute.anchor.setTo(0.5, 0.5);
    
        button.onInputDown.add(this.start);
		mute.onInputDown.add(this.mute);
	},

	start: function() {
		
		game.state.start('play');	
	},

	mute: function() {

		
	}


};