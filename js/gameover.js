var overState = {

	preload: function () {

	},

    create: function() {

    game.stage.backgroundColor = "#000000";

    var overLabel = game.add.text(game.world.centerX, 100, 'Game Over', { font: '40px Arial', fill: '#ffffff' });
    overLabel.anchor.setTo(0.5, 0.5);

    var againLabel = game.add.text(game.world.centerX, 140, 'Play Again?', { font: '25px Arial', fill: '#ffffff' });
    againLabel.anchor.setTo(0.5, 0.5);

    var againButton = game.add.button(game.world.centerX, 240, 'button', this.again, 2, 1, 0);
    againButton.anchor.setTo(0.5, 0.5);

    againButton.onInputDown.add(this.again);

    var gameover = game.add.audio('gameover');
	gameover.play();

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

    again: function() {

        game.sound.stopAll();
        game.state.start('play');
    }
};