class Scene1 extends Phaser.Scene{
    construction(){
        super("bootGame");
    }

    create(){
        this.add.text(20,20, "Loading game...")
        this.scene.start("playGame");
    }
}