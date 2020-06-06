var database;
var form;
var user;
var peopleCount=0;

function setup() {
  createCanvas(1000, 1100);
  database = firebase.database();
  form = new Form();
  form.display();
  User = new UserData();
  User.getCount();
 
}

function draw() {
  background(4,186,228);
  
  text("x:"+mouseX,50,650); text("y:"+mouseY,50,670);
}