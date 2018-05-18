let circles = [];
let lastLevel = 0;
let newMax = 200;
function draw() {
  level = amplitude.getLevel();
  size1 = map(level, 0, 1, 0, newMax);

  fill('rgb(255,200,200)');
  ellipse(width/2, height/2, size1, size1);

  size2 = map(level, 0,1,0,width/3);
  circles.forEach((circle) => {
    fill(circle.fill);
    ellipse(circle.x, circle.y, size2, size2);
  });


  if (level - lastLevel > 0.2) {
    circles.push({x: random(0,width),y: random(0,height),fill: `rgb(100,${random(100,200)},200)`});
    newMax = newMax * 1.1;
  }
  lastLevel = level;
};

// {x: width/2, y: height/2, fill: `rgb(100,${random(100,200)},200)`}
