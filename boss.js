class Boss extends Opponent {
    /**
     * Initializes the final boss
     * @param game {Game} The instance of the game to which the boss belongs
     */
    constructor (game) {
        const height = BOSS_HEIGHT * game.width / 100,
            width = BOSS_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = BOSS_SPEED,
            myImage = BOSS_PICTURE,
            myImageDead = BOSS_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.direction = "R"; // Direction in which the boss is moving
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }
     
    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
        }
    }
}
    