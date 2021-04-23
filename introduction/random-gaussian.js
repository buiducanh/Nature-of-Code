function setup() {
  createCanvas(640, 360);
}

function draw() {
  // generate a standardized gaussian {mean: 0, std: 1}
  let gaussian = randomGaussian();
  const sd = 60.0;
  const mean = 320.0;
  // get a random gaussian with {mean: mean, std: sd}
  let x = sd * gaussian + mean;
  noStroke();
  fill(10, 10);
  ellipse(x, 180, 16, 16);
}
