let middle_lanes = [];
let other_cars = [];
let car;
let road;

let choseHeight = [-600, -1000, -1400, -1800, -2200, -2600, -3000];
let choseSide = [-40,40];

function setup() {
  createCanvas(700,500);
  frameRate(60);
  rectMode(CENTER);
  //Cars
  create_other_cars();
  create_middle_lanes();
  car = new Car(0, 100);
  //Road
  road = new main_road(0, 0);
}

function draw() {
  translate(350,250);
  background(51);

  //Updating
  show_middle_lanes();
  car.update();
  road.show();
  show_other_cars();
}
//Other_cars.js

function create_other_cars() {
  for (var i = 0; i < 7; i++) {
    other_cars[i] = new OtherCars(choseSide[Math.floor(random(0,2))], choseHeight[i]);


  }
}
function show_other_cars() {
    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 7; j++) {
        if (other_cars[i].pos.y > height /2 + other_cars[i].size.y /2) if (other_cars[i].pos.y > choseHeight[j]-50 && other_cars[i].pos.y < choseHeight[j]+50) choseHeight[Math.floor(random(0,7))]
      }
    other_cars[i].update();
  }
}

//Road.js
function create_middle_lanes() {
  let spacing = height;
  for (var i = 0; i < 8; i++, spacing -= 100) {
    middle_lanes[i] = new main_road(0, spacing);
  }
}
function show_middle_lanes() {
  for (var i = 0; i < 8; i++) {
    middle_lanes[i].show();
  }
}
