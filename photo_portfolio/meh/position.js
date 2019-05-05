// var tris = [];
// let x1 = 0;
// let x2 = 0;
// let x3 = 0;
// let y1 = 0;
// let y2 = 0;
// let y3 = 0;
// var u;
// var l;
// var a;
// var mods = [];
// var x;
// var y;
// var count;
// var r, g, b, a;
// // var colors;
// // randomColor = getRandomColor(0, colors.length - 1);
// // randomItem = colors[randomColor];
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noLoop();
//   // var tris = [];
//   // colors = [color('#ff0000'), color('#ee863a'), color('#b4280c'), color('#ffab03'), color('#ffd503'), color('#eab22f')];
//   // frameRate(2);
//   // var overlapping = false;
//   // var protection = 0;
//   background(0);
// }
//
// function draw() {
//   background(51);
//
//
//  for (let i = 0; i < random(10,70); i++) {
//   // let r = random(130);
//
//   let x1 = random(width);
//   let x2 = random(width);
//   let x3 = random(width);
//   let y1 = random(height);
//   let y2 = random(height);
//   let y3 = random(height);
//   // fill(204, 101, 192, 127);
//   fill(r, g, b, a);
//   stroke(127, 63, 120);
//   triangle(x1, y1, x2, y2, x3, y3);
// }
//   }

  // function getRandomPosition(element) {
  // 	var x = document.body.offsetHeight-element.clientHeight;
  // 	var y = document.body.offsetWidth-element.clientWidth;
  //   var a = element.style.opacity;
  //   var randomA = Math.floor(Math.random()*a);
  // 	var randomX = Math.floor(Math.random()*x);
  // 	var randomY = Math.floor(Math.random()*y);
  // 	return [randomX,randomY];
  //   return [randomA];
  // }
  // window.onload = function() {
  // 	var img = document.createElement('img');
  // 	img.setAttribute("style", "position:absolute;");
  // 	img.setAttribute("src", "./Sølve Sundsbø — Archive_files/solvesundsbo-4013-h700-w700-q90-rz3-b75.jpg");
  // 	document.body.appendChild(img);
  //   var a = getRandomOpacity(img);
  // 	var xy = getRandomPosition(img);
  // 	img.style.top = xy[0] + 'px';
  // 	img.style.left = xy[0] + 'px';
  //   img.style.opacity = a[0];
  // }


  (function makeDiv(){
    // vary size for fun
    var divsize = ((Math.random()*100) + 50).toFixed();
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'opacity':'.'+divopacity,
        // 'background-color': color
    });

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
    var opacity = (Math.random() * ($(document).style.opacity() - divopacity)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
        // 'opacity':'.'+opacity;
    }).appendTo( 'body' ).fadeIn(100).delay(1000).fadeOut(500, function(){
      $(this).remove();
      makeDiv();
    });
})();
