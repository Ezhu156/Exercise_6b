function Monster(xloc, yloc) {
  var x = xloc;
  var y = yloc;
  this.position = createVector(width / 2, height / 2);
  this.velocity = createVector();
  acceleration = createVector();
  this.topspeed = 10;

  this.move = function() {
      var m = createVector(mouseX, mouseY);
      this.acceleration = p5.Vector.sub(m, this.position);
      var k = acceleration.mag(.8);

      //stops the moster from moving once it has reached the mouse location
      var pause = p5.Vector.sub(acceleration, this.velocity);
      pause.limit(this.topspeed);
      this.acceleration.add(pause);

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity);
    } //end move
/*
  this.repel = function() {
      var y = createVector(mouseX, mouseY);
      this.acceleration = p5.Vector.add(y, this.position);
      var k = acceleration.mag(.8);

      //stops the moster from moving once it has reached the mouse location
      var pause = p5.Vector.sub(acceleration, this.velocity);
      pause.limit(this.topspeed);
      this.acceleration.add(pause);

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.position.add(this.velocity);
    } //end repel
    */
  this.display = function(r, g, b) { //morphed monster
      x = this.position.x * 2;
      y = this.position.y * 2;
      //legs
      strokeWeight(20);
      stroke(30, 0, 40);
      line(x - 100, y + 160, x - 130, y + 250);
      line(x - 60, y + 160, x - 70, y + 250);
      line(x + 100, y + 160, x + 130, y + 250);
      line(x + 60, y + 160, x + 70, y + 250);

      // feet
      strokeWeight(8);
      fill(139, 14, 200);
      stroke(10, 0, 80);
      ellipse(x - 70, y + 260, 38, 25);
      ellipse(x - 130, y + 260, 38, 25);
      ellipse(x + 130, y + 260, 38, 25);
      ellipse(x + 70, y + 260, 38, 25);

      //top horn, left horn, right horn
      noStroke();
      fill(255, 246, 215);
      triangle(x - 8, y - 180, x + 2, y - 230, x + 12, y - 180);
      triangle(x - 48, y - 150, x - 42, y - 210, x - 28, y - 160);
      triangle(x + 32, y - 160, x + 47, y - 210, x + 52, y - 150);

      //left arm, right arm
      stroke(255, 151, 148);
      strokeWeight(20);
      noFill();
      arc(x + 130, y + 70, 67, 200, 0, PI / 2, OPEN);
      arc(x - 130, y + 70, 67, 200, PI / 2, PI, OPEN);

      // Body
      noStroke();
      fill(r, g, b);
      ellipse(x, y, 360, 360);

      //eyes
      fill(random(255), 0, random(255));
      strokeWeight(4);
      stroke(0);
      ellipse(x, y - 70, 32, 30);
      ellipse(x + 70, y - 65, 32, 30);
      ellipse(x - 70, y - 63, 32, 30);

      //eyebrows
      line(x - 20, y - 100, x + 20, y - 100);
      line(x - 90, y - 100, x - 60, y - 90);
      line(x + 90, y - 100, x + 60, y - 90);

      //mouth
      stroke(0);
      strokeWeight(4);
      fill(0, 50, 0);
      triangle(x - 100, y + 50, x, y + 100, x + 100, y + 50);

      //teeth
      noStroke();
      fill(255);
      triangle(x - 53, y + 51, x - 43, y + 66, x - 33, y + 51);
      triangle(x - 23, y + 51, x - 13, y + 66, x - 3, y + 51);
      triangle(x + 7, y + 51, x + 17, y + 66, x + 27, y + 51);
      triangle(x + 37, y + 51, x + 47, y + 66, x + 57, y + 51);
    } //end display
} // end monster
