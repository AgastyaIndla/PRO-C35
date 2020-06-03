
var personCount;
var database;
var canvas

var form,person;


function setup(){
  canvas = createCanvas(500,600);
  database = firebase.database();
}

function draw(){

  var r = Math.round(random(0,255));
  var g = Math.round(random(0,255));
  var b = Math.round(random(0,255));

  var form = new Form();

  background(0,100);
}