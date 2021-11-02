const game = new Game();

function setup() {
    createCanvas(1000, 700);
   game.setup();
}

function draw() {
    game.draw()
}

function preload() {
    game.preload();

}

function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight();
	
	}
	if (keyCode === 37) {
		// move the player to the left
		game.player.moveLeft();
	}
	if (keyCode === 38) {
		console.log(keyCode)
		// move the player up
		game.player.moveUp();
	}
	if (keyCode === 40) {
		console.log(keyCode)
	 	// move the player up
            game.player.moveDown();
         }
		
	}
