function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
let color1 = 0;
let color2 = 0;
let color3 = 0;
function draw() {
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  noFill();
  strokeWeight(5);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let colorsSC = ["#450920", "#a53860", "#da627d", "#ffa5ab", "#f9dbbd"]; //seconds arc starts here
  if (frameCount % 60 == 0) {
    color1 = random(colorsSC);
  }
  stroke(color1);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle); //seconds arc ends here
  push(); //seconds line start here
  rotate(secondAngle);
  stroke(color1);
  line(0, 0, 150, 0);
  pop(0); //seconds line ends here
  let colorsMN = ["#5fa8d3", "#cae9ff", "#1b4965", "#62b6cb", "#bee9e8"]; //minutes arc starts here
  if (frameCount % 60 == 0) {
    color2 = random(colorsMN);
  }
  stroke(color2);
  let minuteAngle = map(mn, 0, 60, 0, 360) + map(sc, 0, 60, 0, 6);
  arc(0, 0, 250, 250, 0, minuteAngle); //minutes arc ends here
  push(); //minutes line starts here
  rotate(minuteAngle);
  stroke(color2);
  line(0, 0, 125, 0);
  pop(); //minutes line ends here
  let colorsHR = ["#73d2de", "#218380", "#8f2d56", "#d81159", "#ffbc42"]; //hours arc starts here
  if (frameCount % 60 == 0) {
    color3 = random(colorsHR);
  }
  stroke(color3);
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(mn, 0, 60, 0, 6);
  arc(0, 0, 200, 200, 0, hourAngle); //hours arc ends here
  push(); //hours line starts here
  rotate(hourAngle);
  stroke(color3);
  line(0, 0, 100, 0);
  pop(); //hours line ends here
  strokeWeight(9);
  stroke("white");
  point(0, 0);

  push();
  rotate(90);
  textSize(18);
  strokeWeight(0.5);
  text("12", -5.5, -165);
  pop();

  push();
  rotate(90);
  textSize(18);
  strokeWeight(0.5);
  text("6", -5.5, 165);
  pop();

  push();
  rotate(90);
  textSize(18);
  strokeWeight(0.5);
  text("9", -165, 5.5);
  pop();

  push();
  rotate(90);
  textSize(18);
  strokeWeight(0.5);
  text("3", 180, 5.5);
  pop();
}
