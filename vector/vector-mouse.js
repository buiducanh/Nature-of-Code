class VectorWalkerChaseMouse {
  constructor() {
    this.location = createVector(width / 2, height / 2);
    this.acceleration = createVector(0.05, 0.05);
    this.velocity = createVector(2.5, 5);
    this.velocity.limit(10);
    this.xoff = 0;
    this.yoff = 10000;
}
  step() {
    if (this.location.x > width) {
      this.location.x = width;
    }
    if (this.location.x < 0) {
      this.location.x = 0
    }
    if (this.location.y > height) {
      this.location.y = height;
    }
    if (this.location.y < 0) {
      this.location.y = 0;
    }
    const mouseLocation = createVector(mouseX, mouseY);
    const dirToMouse = p5.Vector.sub(mouseLocation, this.location).normalize();
    this.velocity.add(p5.Vector.mult(dirToMouse, this.acceleration));
    this.location.add(this.velocity);
  }

  display() {
    stroke(0);
    clear();
    ellipse(this.location.x, this.location.y, 16, 16);
  }
}

let walker;
function setup() {
  createCanvas(400, 400);
  walker = new VectorWalkerChaseMouse();
}

function draw() {
  walker.step();
  walker.display();
}

