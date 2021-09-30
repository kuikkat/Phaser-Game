var loadState = {

	preload: function() {		

		var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		game.load.image('background', 'assets/images/background.png');
		game.load.image('coin', 'assets/images/coin.png');
		game.load.image('player', 'assets/images/player.png');
		game.load.image('enemy', 'assets/images/enemy.png');
		game.load.image('pixel', 'assets/images/pixel.png');
		game.load.image('WallHorizontal', 'assets/images/WallHorizontal.png');
		game.load.image('WallVertical', 'assets/images/WallVertical.png');
		game.load.image('button', 'assets/images/button.png');
		game.load.image('mute', 'assets/images/mute.png');
		game.load.audio('main', 'assets/audio/main.mp3');
		game.load.audio('coinaudio', 'assets/audio/coin.mp3');
		game.load.audio('death', 'assets/audio/death.mp3');
		game.load.audio('gameover', 'assets/audio/gameover.wav');
		
	},

	create: function() { 
		
		game.state.start('menu');
	}
};