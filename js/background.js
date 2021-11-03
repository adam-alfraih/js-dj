class Background {
    draw() {
      if(game.checkedCd === 'noCd' || game.checkedCd === 'undefined') {
      image(game.backgroundImage, 0, 0, width, height);
    } else if (game.checkedCd === 'wrongCd') {
      image(game.backgroundFail, 0, 0, width, height);
    } else if (game.checkedCd === 'rightCd') {
      image(game.backgroundSuccess, 0, 0, width, height);
    }
  }
}