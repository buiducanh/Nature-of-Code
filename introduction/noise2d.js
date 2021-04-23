let d;
function setup() {
  createCanvas(200, 200);
  d = pixelDensity();

  loadPixels();
  let xoff = 0.0;
  let yoff = 100000.0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      for (let i = 0; i < d; i++) {
        for (let j = 0; j < d; j++) {
          const index = 4 * (y * width * d * d +  i * width * d + (x * d + j));
          let c = color(noise(xoff, yoff) * 255);
          pixels[index] = red(c);
          pixels[index + 1] = green(c);
          pixels[index + 2] = blue(c);
          pixels[index + 3] = alpha(c);
                xoff += 0.01;

        }
            yoff += 0.01;

      }
    }
  }
  updatePixels();
}

function draw() {
}
