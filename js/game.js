class Game {
    constructor() {
        this.correctCd = false
        this.checkedCd = 'noCd'
    }

    setup() {
        this.background = new Background();
        this.cd1 = new Cds(250, 600);
        this.cd2 = new Cds(470, 600);
        this.cd3 = new Cds(690, 600);
        this.djBooth = new DjBoothClass(360, 360);
        this.player = new PlayersClass();
        this.npc = new Npc();
        this.chatBubble = new ChatBubble();
        this.canGrabOrDrop = false;
        this.hasCd = false;
        this.grabbedCd
        this.currentCd
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
        this.djBooth.draw();
        this.cd1.draw();
        this.cd2.draw();
        this.cd3.draw();
        this.npc.draw();
        this.chatBubble.draw();
        this.player.draw();
        this.moveGrabbedCd()
        this.canGrabOrDrop = this.cdPlayerInteraction();
        this.djBoothInteraction();

    }
    moveGrabbedCd() {
        if (this.hasCd) {
            this.grabbedCd.x = this.player.x + 45
            this.grabbedCd.y = this.player.y
        }
    }

    grabOrDrop() {

        if (this.canGrabOrDrop) {
            this.hasCd = !this.hasCd;
            if (this.hasCd) {
                this.grabbedCd = this.currentCd
            } else {
                this.grabbedCd = ""
            }

        }
    }

    cdPlayerInteraction() {
        let nextToCD = false;
        if (dist(this.player.x, this.player.y, this.cd1.x, this.cd1.y) <= 45) {
            this.correctCd = false;
            this.currentCd = this.cd1
            nextToCD = true
        } else if (dist(this.player.x, this.player.y, this.cd2.x, this.cd2.y) <= 45) {
            this.correctCd = false;
            this.currentCd = this.cd2
            nextToCD = true
        } else if (dist(this.player.x, this.player.y, this.cd3.x, this.cd3.y) <= 45) {
            this.correctCd = true;
            this.currentCd = this.cd3
            nextToCD = true
        }
        return nextToCD;
    }

    djBoothInteraction() {

        if (dist(this.cd1.x, this.cd1.y, this.djBooth.x + 120, this.djBooth.y + 50) <= 20) {
            console.log("djBooth")
            this.checkedCd = 'wrongCd'
            console.log(this.checkedCd)
        }

    }
}

