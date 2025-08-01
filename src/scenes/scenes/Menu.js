class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // load assets
        this.load.path = "./assets/"

        // load JSON (ie dialog text)
        this.load.json('dialog', 'json/dialog.json')

        // load images
        this.load.image('dialogbox', 'img/dialogbox.png')
        this.load.image('giffany', 'img/giffanytalk1.png')
        this.load.image('giffany2', 'img/giffanytalk2.png')
        this.load.image('play', 'img/play_button.png')
        this.load.video('intro', 'img/game_intro.mp4', true)

        // load bitmap font
        this.load.bitmapFont('gem_font', 'font/gem.png', 'font/gem.xml')
        
        //decoration
        this.load.image('flowers', 'img/flowers.png')
        this.load.image('stars', 'img/stars.png')
    }

    create() {
        // add title text
        this.intro = (this.add.video(0, -20, 'intro').setOrigin(0,0)).setScale(0.5, 0.5)
        this.intro.play()

        this.playButton = (this.add.image(1400, 550, 'play').setScale(0.2, 0.2)).setOrigin(0.5,0.5)
        this.playButton.setInteractive()

        this.flowers = this.add.tileSprite(0, 0, 1280, 720, 'flowers').setOrigin(0,0)
        this.stars = this.add.tileSprite(0, 0, 1280, 720, 'stars').setOrigin(0,0)

        this.intro.on('complete', () => {
            this.tweens.add({
                targets:this.playButton,
                x: 980,
                duration: 500,
                ease: 'power2'})

        }) 
       

        // create input
        //cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        //decoration
        this.flowers.tilePositionX -= 1
        this.stars.tilePositionX -= 2

        // wait for player input
        this.playButton.on('pointerover',() => { ((this.playButton).setScale(0.23,0.23)).setOrigin(0.5, 0.5) })
        this.playButton.on('pointerout',() => { ((this.playButton).setScale(0.2,0.2)).setOrigin(0.5, 0.5) })
        this.playButton.on('pointerdown',() => { this.scene.start("cutScene1") })
        



        // if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
        //     this.scene.start("cutScene1")
        // }

    }
}