class Box1 {

    constructor(x, y, width, height) {
         
         var options = {
              isStatic: true
              
         }
         
         this.body = Bodies.rectangle(x, y, width, height, options)
         World.add(world, this.body)

              this.width = width
              this.height= height
              this.image = loadImage ("Dustbin.png")
    }

    display() {
         fill("green")
         var pos = this.body.position
         image(this.image, pos.x, pos.y, 180, 100)
         
    }
}