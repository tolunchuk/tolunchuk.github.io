	var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
	var randomColor;
	var PageX;
	var PageY;
	
		setInterval(function() {
	randomColor = Math.random() * 999999;
	randomColor = Math.floor(randomColor);
		randomColor = `#` + randomColor;
		},1);
	
	canvas.onmousedown = function() {
		var PageX = event.offsetX;
			var PageY = event.offsetY;
   ctx.fillStyle = randomColor;
    ctx.strokeStyle = "#F00";
    ctx.font = "italic 30pt Arial";
    ctx.fillText("ЖЕНЯ ГЕЙ", PageX-15, PageY+15);
	
		canvas.onmousemove = function() {
			PageX = event.offsetX;
			PageY = event.offsetY;
			ctx.fillStyle = randomColor;
    ctx.strokeStyle = "#F00";
    ctx.font = "italic 30pt Arial";
    ctx.fillText("ЖЕНЯ ГЕЙ", PageX-15, PageY+15);
		}
		
		canvas.onmouseup = function() {
			canvas.onmousemove = null;
		}
	}
	
	document.querySelector(`body`).onkeypress = function(event) {

	}