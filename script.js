	//var canvas = document.getElementById('c1');
//var ctx = canvas.getContext('2d');	
	//document.querySelector(``).addEventListener(`click`,function() {
		
	//});
	var timer1 = 46;
	var timer2 = 60;
	
	setInterval(function() {
		if(timer2 == 0) {
		timer1 = timer1 - 1;
		timer2 = 60;
		}
		timer2 = timer2 - 1;
		
		tablo.innerHTML = "Скидки Продлятся Ещё: " + timer1 + ":" + timer2;
	},1000);
	
	document.querySelector(`body`).onkeypress = function(event) {
		
	}