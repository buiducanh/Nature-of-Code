class WalkerWeightedBottomRight {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
}
  step() {
    // Choose a quadrant
    // 1 | 2
    // - - -
    // 3 | 4
    // with a bias toward the 4th quadrant.
    // We want the 4th quadrant to be chosen X% (X>25) of the time and
    // the rest is evenly distributed over the other 3 quadrants.
    const randomQuadrant = int(random(100));
    const isFourthQuadrant = randomQuadrant < 30;
    if (isFourthQuadrant) {
      this.x += random(0, 1);
      this.y -= random(-1, 0);
    } else {
      const quadrantTransform = {2: {x: 1, y: 1},
                                 1: {x: -1, y: 1},
                                 3: {x: -1, y: -1}};
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

