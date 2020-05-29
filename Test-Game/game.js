const gameState = {
    rects: [],

    }

function preload() {
    this.load.image('background', 'assets/background.jpg')

    
}

function create() {
    gameState.background = this.add.image(0,0,'background').setOrigin(0,0);
    const rectV = this.add.group();
    for (i=0; i<22;i++) {
        x= 2.4+(i*30)
        for(r=0; r<21; r++) {
            y= 17.5+(r*30)
            rectV.create(this.add.rectangle(x,y, 5, 25, 0x000000).setInteractive());     
            }
    }
    for (i=0; i<21;i++) {
        x=17.4+(i*30)
        for(r=0; r<21; r++) {
            y= 2.5+(r*30)
            let rectV = this.add.rectangle(x,y, 25, 5, 0x000000).setInteractive();     
            gameState.rects.push(rectV)
        }
    }   

}
function update() {
gameState.rects.forEach(rect => rect.on('pointerup', function() {
    rect.fillColor = 0xff0000
}))
};




const config = {
    type: Phaser.AUTO,
    width: 660,
    height: 625, 
    backgroundColor: 'ffffff',
    scene: 
    {
        preload,
        create,
        update,
    }
}
const game = new Phaser.Game(config);