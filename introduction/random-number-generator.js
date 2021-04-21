
function setup() {
  createCanvas(640, 240);
}

let randomCounts = [];
for (let i = 0; i < 20; i++) {
  randomCounts[i] = 0;
}
function draw() {
  background(250);
  stroke(0);
  fill(175);
  
  const chosenIndex = int(random(randomCounts.length));
  randomCounts[chosenIndex]++;
  const widthPerRec = int(width / randomCounts.length);
  for (let i = 0; i < randomCounts.length; i++) {
    rect(i * widthPerRec, height - randomCounts[i], widthPerRec - 1, randomCounts[i]);
  }
}
