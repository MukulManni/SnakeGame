var snake = document.getElementById('snake');
var food = document.getElementById('food');
var check = 0;
var first = 0;

var l = window.getComputedStyle(document.getElementById("screen")).getPropertyValue("left");
var r = l + document.getElementById("screen").clientWidth;

var b = document.getElementById("screen").clientHeight;

document.addEventListener("keydown", function(event){
	
	if(event.key == "ArrowUp"){
		if(check != 1 && check != 2){
			
			var tmp = snake.clientWidth;
			snake.style.width = snake.clientHeight + "px";
			snake.style.height = tmp + "px";

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");
			
			snake.removeAttribute('class');
			snake.classList.add("up");

			check = 1;	
			first = 1;
		}
	}

	else if(event.key == "ArrowDown"){
		if(check != 2 && check != 1){
			
			var tmp = snake.clientWidth;
			snake.style.width = snake.clientHeight + "px";
			snake.style.height = tmp + "px";

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

			snake.removeAttribute('class');
			snake.classList.add("down");
		
			check = 2;
			first = 1;
		}

	}

	else if(event.key == "ArrowLeft"){
		if(check != 3 && check != 4){
			if(first != 0){	
				var tmp = snake.clientWidth;
				snake.style.width = snake.clientHeight + "px";
				snake.style.height = tmp + "px";
			}
			else first = 1;

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

			snake.removeAttribute('class');
			snake.classList.add("left");

			check = 3;
		}
	
	}

	else if(event.key == "ArrowRight"){
		if(check != 4 && check != 3){
			if(first != 0){	
				var tmp = snake.clientWidth;
				snake.style.width = snake.clientHeight + "px";
				snake.style.height = tmp + "px";
			}
			else first = 1;

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

			snake.removeAttribute('class');
			snake.classList.add("right");

			check = 4;
		}

	}

});

document.addEventListener("keydown", function(){

	setInterval(function(){

		var sTop = parseInt(window.getComputedStyle(snake).getPropertyValue("top"));
		var fTop = parseInt(window.getComputedStyle(food).getPropertyValue("top"));

		var sLeft = parseInt(window.getComputedStyle(snake).getPropertyValue("left"));
		var fLeft = parseInt(window.getComputedStyle(food).getPropertyValue("left"));

		var swid = snake.clientWidth;
		var sheight = snake.clientHeight;
		
		if(check == 1 && (sTop <= fTop+15 && sTop >= fTop) && (sLeft+20 >= fLeft && sLeft <= fLeft+15)){
			food.style.left = Math.floor((Math.random() * r-l-15) + l);
			food.style.top = Math.floor((Math.random() * b-15) + 15);

			//snake.style.height = snake.clientHeight + 20;
		}
		
		else if(check == 2 && (sTop+sheight >= fTop && sTop+sheight <= fTop+15) && (sLeft+20 >= fLeft && sLeft <= fLeft+15)){
			food.style.left = Math.floor((Math.random() * r-l-15) + l);
			food.style.top = Math.floor((Math.random() * b-15) + 15);

			//snake.style.height = snake.clientHeight + 20;
		}

		else if(check == 3 && (sTop+20 >= fTop && sTop <= fTop+15) && (sLeft <= fLeft+15 && sLeft >= fLeft)){
			food.style.left = Math.floor((Math.random() * r-l-15) + l);
			food.style.top = Math.floor((Math.random() * b-15) + 15);

			//snake.style.width = snake.clientWidth + 20;
		}

		else if(check == 4 && (sTop+20 >= fTop && sTop <= fTop+15) && (sLeft+swid >= fLeft && sLeft+swid <= fLeft+15)){
			food.style.left = Math.floor((Math.random() * r-l-15) + l);
			food.style.top = Math.floor((Math.random() * b-15) + 15);

			//snake.style.width = snake.clientWidth + 20;
		}
		
	}, 100);

});
