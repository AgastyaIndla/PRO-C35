var gameState = 0;
var playerCount;
var database;
var canvas

var form,player,game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
}

function draw(){

  var r = Math.round(random(0,255));
  var g = Math.round(random(0,255));
  var b = Math.round(random(0,255));

  background(r,g,b);
}