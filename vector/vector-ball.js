class PerlinVectorWalker {
  constructor(width, height) {
    this.location = createVector(width/2, height/2);
    this.velocity = createVector(2.5, 5);
    this.width = width;
    this.height = height;
    this.xoff = 0.0;
    // different from xoff so that we don't just move along a diagonal because x and y would be equal to each other
    this.yoff = 100.0;
  }

  step() {
    if (this.location.x < 0 || this.location.x > this.width) {
      this.velocity.mult(createVector(-1, 1));
    }

    if (this.location.y < 0 || this.location.y > this.height) {
      this.velocity.mult(createVector(1, -1));
    }
    this.location.add(Vector.mult(this.velocity, createVector(noise(this.xoff), noise(this.yoff))));
    this.xoff += 0.001;
    this.yoff += 0.001;
  }

  draw() {
    clear();
    fill(10, 50);
    ellipse(this.location.x, this.location.y, 16, 16);
  }
}

let w;
function setup() {
  createCanvas(640, 360);
  w = new PerlinVectorWalker(width / 2, height / 2);
}

let t = 0.0;
function draw() {
  w.step();
  w.draw();
}
