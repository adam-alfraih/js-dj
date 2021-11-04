class PlayersClass {
    constructor() {
        this.player = game.player
        this.x = 70;
        this.y = 430;
        this.image;

    }  

    draw() {
       image(this.player, this.x, this.y, 45, 100)
       

       if (keyIsDown(40)){
        
            this.moveDown()
          } 
       
       if (keyIsDown(38)){
            this.moveUp()
        }
        if (keyIsDown(37)){
            this.moveLeft()
        }
        if (keyIsDown(39)){
            this.moveRight()
        }
       
    }


    moveRight() {
		if (this.x < 950) {
            this.x += 2
        }
	} 
	
	moveLeft() {
        if (this.x > 0) {
		this.x -= 2
        }
	}
	

	moveUp() {
        if (this.y > 400){
        this.y -= 2
        }
    }
	        
	
	moveDown() {
        if (this.y < 600) {
        this.y += 2
        }
    }
    
}


class Npc {
    constructor() {
        this.npc = game.npc
        this.x = 200;
        this.y = 430;
        this.image;
    }

    draw() {

        image(this.npc, 800, this.y, 45, 100)
    }
}