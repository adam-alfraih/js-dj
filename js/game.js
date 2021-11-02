class Game {
    constructor() {
        
    }

    setup() {
        this.background = new Background();
        this.cd = new Cds();
        this.djBooth = new DjBoothClass();
        this.player = new PlayersClass();
    }

    preload() {
        this.backgroundImage = loadImage("../assets/background/club-background.png");

        this.cd1 = loadImage("../assets/cd/cdgif.gif");

        this.djBooth = loadImage("../assets/djbooth/djbooth.png");

        this.player = loadImage("../assets/player/player.png");
    }
    
    draw() {
        this.background.draw();
        this.cd.draw();
        this.djBooth.draw();
        this.player.draw();
    }
}


