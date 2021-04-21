class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
}
  step() {
    this.x += int(random(3)) - 1;
    this.y += int(random(3)) - 1;
  }
  
  display() {
    stroke(0);
    point(this.x, this.y);
  }
}

let walker;
function setup() {
  createCanvas(400, 400);
  background(220);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.display();
}
