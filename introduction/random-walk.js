const Transforms = {x: [0, 1, 0, -1], y: [1, 0, -1, 0]};

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
}
  step() {
    const choose = int(random(4));
    this.x += Transforms['x'][choose];
    this.y += Transforms['y'][choose];
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
