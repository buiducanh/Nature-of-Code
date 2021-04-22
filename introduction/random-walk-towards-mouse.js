class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  unit() {
    return new Vector(this.x / this.length(), this.y / this.length());
  }

  minus(otherVector) {
    return new Vector(this.x - otherVector.x, this.y - otherVector.y);
  }
}

class WalkerChaseMouse {
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
      let mouseVec = new Vector(mouseX, mouseY);
      let walkToMouseVec = mouseVec.minus(new Vector(this.x, this.y)).unit();
      this.x += walkToMouseVec.x;
      this.y += walkToMouseVec.y;
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
  walker = new WalkerChaseMouse();
}

function draw() {
  walker.step();
  walker.display();
}


