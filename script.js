var snake = document.getElementById('snake');
var food = document.getElementById('food');
var check = 0;
var first = 0;

document.addEventListener("keydown", function(event){
	
	if(event.key == "ArrowUp"){
		if(check != 1 && check != 2){
			if(first != 0){
				var tmp = snake.clientWidth;
				snake.style.width = snake.clientHeight + "px";
				snake.style.height = tmp + "px";
			}
			else first = 1;

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");
			
			snake.removeAttribute('class');
			snake.classList.add("up");

			check = 1;	
		}
	}

	else if(event.key == "ArrowDown"){
		if(check != 2 && check != 1){
			if(first != 0){	
				var tmp = snake.clientWidth;
				snake.style.width = snake.clientHeight + "px";
				snake.style.height = tmp + "px";
			}
			else first = 1;

			snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
	        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

			snake.removeAttribute('class');
			snake.classList.add("down");
		
			check = 2;
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

	//var sTop = window.getComputedStyle(snake).getPropertyValue("top");
	//var sBot = window.getComputedStyle(snake).getPropertyValue("bottom");
	//var fTop = window.getComputedStyle(food).getPropertyValue("top");
	//var fBot = window.getComputedStyle(food).getPropertyValue("bottom");

	//var sLeft = window.getComputedStyle(snake).getPropertyValue("left");
	//var sRight = window.getComputedStyle(snake).getPropertyValue("right");
	//var fLeft = window.getComputedStyle(food).getPropertyValue("left");
	//var fRight = window.getComputedStyle(food).getPropertyValue("right");
	
	//if(sTop <= fTop && sBot >= fBot && sLeft >= fLeft && sRight)
});
