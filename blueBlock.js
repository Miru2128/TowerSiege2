class Block extends whiteBlock{
  constructor(x, y,width,height){
    super(x,y,width,height);
    this.image = loadImage("blueBlock.png");
  }

  display(){
    super.display();
  }
}
