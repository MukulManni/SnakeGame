var snake = document.getElementById('snake');

document.addEventListener("keydown", function(event){
	
	if(event.key == "ArrowUp"){
		var tmp = snake.clientWidth;
		snake.style.width = snake.clientHeight + "px";
		snake.style.height = tmp + "px";

		snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");
		
		snake.removeAttribute('class');
		snake.classList.add("up");
		
	}

	else if(event.key == "ArrowDown"){
		var tmp = snake.clientWidth;
		snake.style.width = snake.clientHeight + "px";
		snake.style.height = tmp + "px";

		snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

		snake.removeAttribute('class');
		snake.classList.add("down");
		
	}

	else if(event.key == "ArrowLeft"){
		var tmp = snake.clientWidth;
		snake.style.width = snake.clientHeight + "px";
		snake.style.height = tmp + "px";

		snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

		snake.removeAttribute('class');
		snake.classList.add("left");
		
	}

	else if(event.key == "ArrowRight"){
		var tmp = snake.clientWidth;
		snake.style.width = snake.clientHeight + "px";
		snake.style.height = tmp + "px";

		snake.style.top = window.getComputedStyle(snake).getPropertyValue("top");
        snake.style.left = window.getComputedStyle(snake).getPropertyValue("left");

		snake.removeAttribute('class');
		snake.classList.add("right");

	}

})
