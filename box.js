class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle  = this.body.angle;
    //Push captures new settings 
    push();
    //translate changes 0 of the axis to given x and y position =remaps position the canvas
    translate(pos.x,pos.y);
    //rotate rotates the body at a given angle 
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    //pop reverts back to the old settings 
    pop();
    //we use push and pop so that rotate and translate do not apply to the entire game 
    //we want change to be applicable only to the box so we write push and pop here
  }
};
