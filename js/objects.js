class Cds {
    constructor(x, y) {
        this.cd = game.cd
        this.djBooth = game.djBooth

        this.x = x
        this.y = y
    }

    draw() {
       image(this.cd, this.x, this.y, 70, 70)

    }

}



class DjBoothClass {
    constructor() {
        this.djBooth = game.djBooth
    }

    draw() {
        image(this.djBooth, 360, 360, 270, 150)
    }
}


class ChatBubble {
    constructor() {
        this.chatBubble = game.chatBubble
    }

    draw() {
        image(this.chatBubble, 835, 290, 150, 150)
    }
}