let circles = [{x: width/2, y: height/2, fill: `rgb(100,${random(100,200)},200)`}];

function draw() {

  level = amplitude.getLevel();
  size = map(level, 0, 1, 0, width/2);

  fill('rgb(255,230,230)');
  ellipse(width/2, height/2, size, size);

  circles.forEach((circle) => {
    fill(circle.fill);
    ellipse(circle.x, circle.y, size, size);
  });


  if (level > 0.28) {
    circles.shift();
    circles.push({x: random(0,width),y: random(0,height),fill: `rgb(100,${random(100,200)},200)`})
  }

};
