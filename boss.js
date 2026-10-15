class Boss extends Opponent {
    /**
        Initializes the final boss
        @param game {Game} The instance of the game to which the boss belongs
    */

    constructor (game) {
        super(game);
        this.speed = BOSS_SPEED;
        this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.image.src = this.myImage;
        this.image.style.width = `${this.width}px`;
        this.image.style.height = `${this.height}px`;
        this.width = BOSS_WIDTH * game.width / 100;
        this.height = BOSS_HEIGHT * game.width / 100;
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