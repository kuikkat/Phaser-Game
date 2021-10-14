var loadState = {

	preload: function() {		

		var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading...', { font: '30px Arial', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);

		game.add.sprite(game.world.centerX, 200, 'progress');

		game.load.image('background', 'assets/images/background.png');
		game.load.image('coin', 'assets/images/coin.png');
		game.load.spritesheet('player', 'assets/images/player.png', 30, 26);
		game.load.image('enemy', 'assets/images/enemy.png');
		game.load.image('pixel', 'assets/images/pixel.png');
		game.load.image('WallHorizontal', 'assets/images/WallHorizontal.png');
		game.load.image('WallVertical', 'assets/images/WallVertical.png');
		game.load.image('button', 'assets/images/button.png');
		game.load.image('progress', 'assets/images/progress.png');
		game.load.image('mute', 'assets/images/mute.png');
		game.load.audio('main', 'assets/audio/main.mp3');
		game.load.audio('coinaudio', 'assets/audio/coin.mp3');
		game.load.audio('death', 'assets/audio/death.mp3');
		game.load.audio('gameover', 'assets/audio/gameover.wav');
		game.load.image('tileset', 'assets/images/tileset.png');
		game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		
	},

	create: function() { 
		
		game.state.start('menu');
	}
};