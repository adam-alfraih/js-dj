class Game {
    constructor() {
        this.correctCd = false
        this.checkedCd = 'noCd'
        this.gameStart = false;
        this.isGameOver = false;
    }



    setup() {

        this.background = new Background();
        // this.backgroundFail = new Background();
        this.cdCoords = [
            { "x": 250, "y": 600 },
            { "x": 470, "y": 600 },
            { "x": 690, "y": 600 }
        ]
        this.shuffleArray(this.cdCoords)
        this.cd1 = new Cds(this.cdCoords[0].x, this.cdCoords[0].y);
        this.cd2 = new Cds(this.cdCoords[1].x, this.cdCoords[1].y);
        this.cd3 = new Cds(this.cdCoords[2].x, this.cdCoords[2].y);

        // create an instance of each class
        this.djBooth = new DjBoothClass(360, 360); // DjBooth
        this.player = new PlayersClass(); // Player
        this.npc = new Npc();
        this.chatBubble = new ChatBubble();


        //MUSIC
        this.clubSound = new Audio("assets/music/clubSound.mp3");
        this.cd1Sound = new Audio("assets/music/cd1.mp3");
        this.cd2Sound = new Audio("assets/music/cd2.mp3");
        this.cd3Sound = new Audio("assets/music/cd3.mp3");


        draw();
        // this.chatBubbleFail = new ChatBubble();
        // this.chatBubble2 = new ChatBubble();
        // this.chatBubbleSuccess = new ChatBubble();

        this.canGrabOrDrop = false;
        this.hasCd = false;
        this.grabbedCd
        this.currentCd
    }
    // run a function on each CD (or to be more specific...)
    // run the changePosition method on each CD
    shuffleArray(cdsPositions) {

        for (let i = 0; i < cdsPositions.length; i++) {
            this.changePosition(i)
        }
    }

    changePosition(currentIndex) {
        const rndIndex = Math.floor(Math.random() * currentIndex)
        const holder = this.cdCoords[currentIndex];
        // left side = right side
        // location = thing that lives in a location
        // position in the cdCoords array = object from a random cdCoords position
        this.cdCoords[currentIndex] = this.cdCoords[rndIndex];
        this.cdCoords[rndIndex] = holder;
    }
    // where I upload all images
    preload() {
        this.startScreen = loadImage("assets/start-screen/startScreen2.gif");

        // this.backgroundImage = loadImage("../assets/background/club-background.png");
        this.backgroundImage = loadImage("assets/background/club-background.gif");
        this.backgroundFail = loadImage("assets/background/club-backgroundRed.png");
        this.backgroundSuccess = loadImage("assets/background/club-backgroundBright2.gif");

        this.cd = loadImage("assets/cd/cdgif.gif");

        this.djBooth = loadImage("assets/djbooth/djbooth.png");

        this.player = loadImage("assets/player/player.png");

        this.npc = loadImage("assets/npc/npc.png")

        this.chatBubble = loadImage("assets/chat-bubbles/chatBubble1.gif")
        this.chatBubbleFail = loadImage("assets/chat-bubbles/chatBubbleFail.gif")
        this.chatBubble2 = loadImage(("assets/chat-bubbles/chatBubble2.gif"))
        this.chatBubbleSuccess = loadImage(("assets/chat-bubbles/chatBubbleSuccess.gif"))

        this.playAgain = loadImage("assets/text/playAgain.png")
    }

    draw() {
        // game start and game over
        console.log(this.gameStart, this.isGameOver)
        if (this.gameStart === false && !this.isGameOver) {
            clear()
            this.background.draw();
            image(this.startScreen, 0, 0, 1000, 700)
        } else if (this.gameStart && !this.isGameOver) {
            clear()
            this.clubSound.play();
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
        } else if (this.isGameOver) {
            clear()
            this.background.draw();
            this.djBooth.draw();
            this.cd1.draw();
            this.cd2.draw();
            this.cd3.draw();
            this.npc.draw();
            this.chatBubble.draw();
            this.player.draw();
            this.chatBubble.drawPlayAgain();
        }


    }
    moveGrabbedCd() {
        if (this.hasCd) {
            this.grabbedCd.x = this.player.x + 45
            this.grabbedCd.y = this.player.y
        }
    }

    grabOrDrop() {

        if (this.canGrabOrDrop && !this.isGameOver) {
            // left side = right side
            // container = thing that goes in container
            // if we grabbed last time, drop this time (and vice versa)
            this.hasCd = !this.hasCd;
            // if we have a CD, then we're dropping
            if (this.hasCd) {
                this.grabbedCd = this.currentCd
                // the way to do this would be
                // this.checkedCd = null 
                this.checkedCd = "undefined" 
            // else, we're grabbing a CD
            } else {
                this.grabbedCd = ""
                this.checkedCd = "noCd"
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

        if (dist(this.cd1.x, this.cd1.y, this.djBooth.x + 150, this.djBooth.y + 50) <= 100) {
            this.checkedCd = 'wrongCd'

            if (!game.hasCd) {
                this.clubSound.pause();
                this.cd1Sound.play();
            }


        }

        if (dist(this.cd2.x, this.cd2.y, this.djBooth.x + 150, this.djBooth.y + 50) <= 100) {
            this.checkedCd = 'wrongCd'
            if (!game.hasCd) { 
                this.clubSound.pause();
                this.cd2Sound.play();
            }

        }
        if (dist(this.cd3.x, this.cd3.y, this.djBooth.x + 150, this.djBooth.y + 50) <= 100) {
            this.checkedCd = 'rightCd'

            if (!game.hasCd) {
                this.clubSound.pause();
                this.cd3Sound.play();
            } 

        }
    }

    gameReset() {
        location.reload();
    }
}

