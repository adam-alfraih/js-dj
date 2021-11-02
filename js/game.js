class Game {
    constructor() {

    }

    setup() {
        this.background = new Background();
        this.cd1 = new Cds(250, 600);
        this.cd2 = new Cds(470, 600);
        this.cd3 = new Cds(690, 600);
        this.djBooth = new DjBoothClass();
        this.player = new PlayersClass();
        this.npc = new Npc();
        this.chatBubble = new ChatBubble();
    }

    preload() {
        this.backgroundImage = loadImage("../assets/background/club-background.png");

        this.cd = loadImage("../assets/cd/cdgif.gif");

        this.djBooth = loadImage("../assets/djbooth/djbooth.png");

        this.player = loadImage("../assets/player/player.png");

        this.npc = loadImage("../assets/npc/npc.png")

        this.chatBubble = loadImage("../assets/chat-bubbles/chatBubble1.png")
    }

    draw() {
        clear()
        this.background.draw();
        this.cd1.draw();
        this.cd2.draw();
        this.cd3.draw();
        this.djBooth.draw();
        this.npc.draw();
        this.chatBubble.draw();
        this.player.draw();
        this.cdPlayerInteraction();

    }

    cdPlayerInteraction() {

        if (dist(this.player.x, this.player.y, this.cd1.x, this.cd1.y) <= 40) {
            console.log("C1 CHOOSEN")
        } else if (dist(this.player.x, this.player.y, this.cd2.x, this.cd2.y) <= 40) {
            console.log("C2 CHOOSEN")
        } else if (dist(this.player.x, this.player.y, this.cd3.x, this.cd3.y) <= 40) {
            console.log("C3 CHOOSEN")
        }

    }
}

