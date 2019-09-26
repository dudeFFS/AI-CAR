function main_road(x, y) {
  this.middle_lane_pos = createVector(x, y);
  this.road_width = 80;
  this.acc = 2;
  this.max_acc = 6;
}

main_road.prototype.show = function() {
  this.input();
  this.side_lanes_draw();
  this.middle_lane_draw();
}

main_road.prototype.middle_lane_draw = function() {
  this.middle_lane_pos.y += this.acc;
  if (this.middle_lane_pos.y > height) this.middle_lane_pos.y = -300;
  rect(this.middle_lane_pos.x, this.middle_lane_pos.y, 5, 20);
}

main_road.prototype.side_lanes_draw = function() {
  stroke(255);
  strokeWeight(4);
  line(this.road_width, height, this.road_width, -height);
  line(-this.road_width, height, -this. road_width, -height)
}

main_road.prototype.input = function() {
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
// main_car.prototype.line_cross = function() {
//   if (this.pos.x > this.road_width || car.pos.x < this.road_width) fill(255,0,0);
//     else fill(255);
// }
