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
        this.chatBubbleFail = game.chatBubbleFail
        this.chatBubble2 = game.chatBubble2
        this.chatBubbleSuccess = game.chatBubbleSuccess
        this.playAgain = game.playAgain

    }



    draw() {
        // if there is no cd then display this image
        if (game.checkedCd === 'wrongCd' && !game.hasCd)  {
            //console.log(game.checkedCd)
            image(this.chatBubbleFail, 735, 320, 200, 100)
            game.isGameOver = true

        }
        else if (game.checkedCd === 'rightCd' && !game.hasCd )  {
            //console.log(game.checkedCd)
            image(this.chatBubbleSuccess, 735, 320, 200, 100)
            game.isGameOver = true
        }
        else if (game.checkedCd === 'undefined') {
            //console.log(game.checkedCd)

            image(this.chatBubble2, 735, 320, 200, 100)

        } else {
            image(this.chatBubble, 735, 320, 200, 100)
        }
        // if checkedCd = 'true'
        //   image(this.chatBubble, 835, 290, 150, 150)

    }

    drawPlayAgain() {
        image(this.playAgain, 350, 150, 300, 100)
    }
}