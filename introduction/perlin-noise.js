function setup() {
  createCanvas(640, 360);
}

let t = 0.0;
function draw() {
  noStroke();
  clear();
  fill(10)
  ellipse(noise(t) * 360, 180, 16, 16);
  t += 0.01;
}
