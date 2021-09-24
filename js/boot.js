var bootState = {

	preload: function () {
		
	},

	create: function() { 
		// Set a background color and the physic system
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
};