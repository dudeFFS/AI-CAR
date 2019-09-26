  function OtherCars(x, y) {
  this.pos = createVector(x, y);
  this.size = createVector(40, 80);
  this.acc = 2;
  this.max_acc = 6;
}

OtherCars.prototype.show = function() {
  fill(255);
  noStroke();
  this.pos.y += this.acc;
  rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
}

OtherCars.prototype.update = function() {
  this.input();
  this.death();
  this.show();
}

OtherCars.prototype.input = function() {
  if (keyIsDown(UP_ARROW) && this.acc < this.max_acc) {
      this.acc += 0.1;
  }
  else if (keyIsDown(DOWN_ARROW) && this.acc > 2) {
      this.acc -= 0.1;
  }
  else if (this.acc > 2 && this.acc < 2.04) this.acc = 2;
    else if (this.acc > 2) this.acc -= 0.03;
      // else if (this.acc < 0) this.acc += 0.05;
}

OtherCars.prototype.death = function() {
  if (car.pos.y - car.size.y /2 < this.pos.y + this.size.y /2 &&
          car.pos.y + car.size.y /2 > this.pos.y - this.size.y /2 &&
          car.pos.x + car.size.x /2 > this.pos.x - this.size.x /2 &&
          car.pos.x - car.size.x /2 < this.pos.x + this.size.x /2) { this.gameOver(); }
          else return false;
}

OtherCars.prototype.gameOver = function() {
  frameRate(0);
  fill(0,0,0,170);
  background(0,0,0,170);
}
