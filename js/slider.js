
var pkslider = function(){

var prevSpan = document.getElementById("prev"); 	prevSpan.addEventListener("click", prev);
		
		var nextSpan = document.getElementById("next");
		nextSpan.addEventListener("click", next);

		function next() {
			var current = document.getElementsByClassName("active")[0];
			var nxtSib = current.nextElementSibling;

			if (nxtSib == null) {
				current.classList.remove("active");
				var imgs = document.getElementById("slider-imgs").children;
				imgs[0].classList.add("active");
			} else {

				current.classList.remove("active");

				nxtSib.classList.add("active");
			}

		}

		function prev() {
			var current = document.getElementsByClassName("active")[0];
			var preSib = current.previousElementSibling;

			if (preSib == null) {
				current.classList.remove("active");
				var imgs = document.getElementById("slider-imgs").children;
				imgs[imgs.length - 1].classList.add("active");
			} else {
				current.classList.remove("active");

				preSib.classList.add("active");
			}
		}
		var fadeDuration = 4000;
		var domLoaded = setInterval(next, fadeDuration);


		var sliderImgs = document.getElementById("slider-imgs");
		sliderImgs.addEventListener("mouseover", function () {
			clearInterval(domLoaded)
		});

		sliderImgs.addEventListener("mouseout", function () {
			domLoaded = setInterval(next, fadeDuration);
		});
		
		prevSpan.addEventListener("mouseover", function () {
			clearInterval(domLoaded)
		});
		prevSpan.addEventListener("mouseout", function () {
			domLoaded = setInterval(next, fadeDuration);
		});
		
		nextSpan.addEventListener("mouseover", function () {
			clearInterval(domLoaded)
		});
		nextSpan.addEventListener("mouseout", function () {
			domLoaded = setInterval(next, fadeDuration);
		});
		
		

		
	
};
pkslider();