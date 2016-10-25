var position;
var velocity;

function setup() {
  createCanvas(900, 900);
  bob = new Monster(500, 500);
  jim = new Monster(300, 300);
  bill = new Monster2(700, 700);
  jack = new Monster2(300, 700);

} //end setup

function draw() {
  scale(.5, .5);
  background(0);

  bob.display(215, 193, 255);
  jim.display(203, 251, 255);
  bill.display(position.x, position.y, 70, 150, 200);
  jack.display(position.y * 2, position.x * 2, 139, 14, 200);

  bob.move();
  //jim.repel();

} //end draw