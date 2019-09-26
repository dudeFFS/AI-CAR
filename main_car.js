function Car(x, y) {
  this.pos = createVector(x, y);
  this.size = createVector(40, 80);
  this.steer = 0;
  this.max_steer = 4;
}

Car.prototype.show = function() {
  fill(255);
  noStroke();
  this.line_cross();
  this.pos.x += this.steer;
  rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
}

Car.prototype.update = function() {
  this.input();
  this.show();
}

Car.prototype.input = function() {
  if (keyIsDown(RIGHT_ARROW) && this.steer < this.max_steer) {
      this.steer += 0.2;
  }
  else if (keyIsDown(LEFT_ARROW) && this.steer > -this.max_steer) {
      this.steer -= 0.2;
  }
  else if (this.steer > 0 && this.steer < 0.1 || this.steer < 0 && this.steer > -0.1) this.steer = 0;
    else if (this.steer > 0) this.steer -= 0.05;
      else if (this.steer < 0) this.steer += 0.05;
}

Car.prototype.line_cross = function() {
  if (this.pos.x > main_road.road_width || this.pos.x < main_road.road_width) fill(255,0,0);
    else fill(255);
}
