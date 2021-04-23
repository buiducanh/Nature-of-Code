class PerlinWalker {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.x = this.width / 2;
    this.y = this.height / 2;
    this.xoff = 0.0;
    // different from xoff so that we don't just move along a diagonal because x and y would be equal to each other
    this.yoff = 100.0;
  }

  step() {
    this.x = noise(this.xoff) * this.width;
    this.y = noise(this.yoff) * this.height;
    this.xoff += 0.001;
    this.yoff += 0.001;
  }

  draw() {
    clear();
    fill(10, 50);
    ellipse(this.x, this.y, 16, 16);
  }
}

let w;
function setup() {
  createCanvas(640, 360);
  w = new PerlinWalker(width / 2, height / 2);
}

let t = 0.0;
function draw() {
  w.step();
  w.draw();
}
