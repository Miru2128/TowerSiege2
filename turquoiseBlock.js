class turquoiseBlock{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("turquoiseBlock.png");
        World.add(world, this.body);
        this.visibility = 255
      }
      display(){
        //console.log(this.body.speed);

        if(this.body.speed<5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,30,40);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }

        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          pop();
        }
      }
}
