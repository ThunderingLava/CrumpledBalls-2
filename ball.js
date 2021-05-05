class Ball {

    constructor(x, y, radius) {
         
         var options = {
              isStatic: false,
              restituition: 0.5,
              density: 0.5,
              friction: 0.5
              
         }
         
         this.body = Bodies.circle(x, y, radius, options)
         World.add(world, this.body)

              this.width = radius
              this.height = radius
              this.image = loadImage ("paperImage.png")
    }

    display() {
         fill("white")
         var pos = this.body.position
         image(this.image, pos.x, pos.y, this.width, this.height)
         
    }
}