class Cds {
    constructor() {
        this.cd1 = game.cd1
        this.djBooth = game.djBooth
    }

    draw() {
       image(this.cd1, 470, 600, 70, 70)
       image(this.cd1, 250, 600, 70, 70)
       image(this.cd1, 690, 600, 70, 70)
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