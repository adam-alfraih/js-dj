class Cds {
    constructor(x, y) {
        this.cd = game.cd
       
        this.x = x
        this.y = y
    }

    draw() {
       image(this.cd, this.x, this.y, 70, 70)

    }

}



class DjBoothClass {
    constructor(x, y) {
        this.djBooth = game.djBooth
        this.x = x
        this.y = y
    }

    draw() {
        image(this.djBooth, this.x, this.y, 270, 150)
    }
}


class ChatBubble {
    constructor() {
       
        this.chatBubble = game.chatBubble
        
    }

    draw() {
        // if there is no cd then display this image
        if(game.checkedCd = 'noCd') {
            console.log(game.checkedCd)
        image(this.chatBubble, 835, 290, 150, 150)
    } else if (game.checkedCd = 'wrongCd') {
        image(this.djBooth, 835, 290, 150, 150)
    }
        // if checkedCd = 'true'
        //   image(this.chatBubble, 835, 290, 150, 150)
        
    }
}