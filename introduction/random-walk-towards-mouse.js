class WalkerWeightedBottomRight {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
}
  step() {

    const quadrantTransform = {2: {x: 1, y: 1},
                               1: {x: -1, y: 1},
                               3: {x: -1, y: -1},
                               4: {x: 1, y: -1}};
    // Dynamically bias the walk towards chasing after the mouse
    const randomQuadrant = int(random(100));
    const isChasingMouse = randomQuadrant < 30;
    if (isChasingMouse) {
      this.x += random(0, 1);
      this.y -= random(-1, 0);
    } else {
      const chosenQuadrant = int(random(1, 4));
      this.x += random(0, 1) * quadrantTransform[chosenQuadrant]['x'];
      this.y -= random(0, 1) * quadrantTransform[chosenQuadrant]['y'];
    }
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
  walker = new WalkerWeightedBottomRight();
}

function draw() {
  walker.step();
  walker.display();
}

