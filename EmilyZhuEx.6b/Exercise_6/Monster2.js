function Monster2(xloc, yloc) {
  var x = xloc; //x location of monster
  var y = yloc;//y location of monster
  var r, g, b; //color of monster
  position = createVector(500, 500); //starting point of the monster
  velocity = createVector(2, 5);//
  acceleration= createVector(-.01,.1);
  topspeed= 7;

  this.display = function(x, y, r, g, b) {
      position.add(velocity);
      velocity.add(acceleration);

      if ((position.x > width) || (position.x < 0)) {
        velocity.x*=-1;
      }
      if ((position.y > height) || (position.y < 0)) {
        velocity.y*=-1;
      }

      //body
      //fill(139, 14, 200);
      fill(r, g, b); //yahya
      strokeWeight(10); //yahya
      stroke(10, 0, 80); //yahya
      rectMode(CENTER); //yahya
      rect(x, y, 330, 300); //yahya

      //eyes
      fill(233, 0, 0); //yahya
      stroke(0); //yahya
      strokeWeight(4); //yahya
      ellipseMode(CENTER); //yahya
      ellipse(x, y - 70, 32, 30); //yahya
      ellipse(x + 70, y - 65, 32, 30); //yahya
      ellipse(x - 70, y - 63, 32, 30); //yahya

      //eyebrows
      line(x - 20, y - 100, x + 20, y - 100); //yahya
      line(x - 90, y - 100, x - 60, y - 90); //yahya
      line(x + 90, y - 100, x + 60, y - 90); //yahya

      //mouth
      fill(0, 50, 0); //yahya
      triangle(x - 100, y + 50, x, y + 100, x + 100, y + 50); //yahya

      //horns
      fill(150); //yahya
      triangle(x - 70, y - 155, x - 110, y - 155, x - 120, y - 240); //yahya
      triangle(x + 70, y - 155, x + 110, y - 155, x + 120, y - 240); //yahya

      //legs
      strokeWeight(20); //yahya
      stroke(30, 0, 40); //yahya
      line(x - 100, y + 160, x - 130, y + 250); //yahya
      line(x - 60, y + 160, x - 70, y + 250); //yahya
      line(x + 100, y + 160, x + 130, y + 250); //yahya
      line(x + 60, y + 160, x + 70, y + 250); //yahya

      //feet
      strokeWeight(8); //yahya
      fill(139, 14, 200); //yahya
      stroke(10, 0, 80); //yahya
      ellipse(x - 70, y + 260, 38, 25); //yahya
      ellipse(x - 130, y + 260, 38, 25); //yahya
      ellipse(x + 130, y + 260, 38, 25); //yahya
      ellipse(x + 70, y + 260, 38, 25); //yahya
    } //end display

} //end monster2