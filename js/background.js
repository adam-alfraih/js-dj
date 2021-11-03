class Background {
    draw() {
       if (game.checkedCd === 'wrongCd' && !game.hasCd) {
      image(game.backgroundFail, 0, 0, width, height);
    } else if (game.checkedCd === 'rightCd' && !game.hasCd) {
      image(game.backgroundSuccess, 0, 0, width, height);
    } else {
      image(game.backgroundImage, 0, 0, width, height);
    }
  }
}