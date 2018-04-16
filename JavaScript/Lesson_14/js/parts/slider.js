function slider() {
	let sllideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(sllideIndex);

		function showSlides(n) {
			if (n > slides.length) {
				sllideIndex = 1;
			};
			if (n < 1) {
				sllideIndex = slides.length;
			};

			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			};

			for (let i = 0; i< dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[sllideIndex - 1].style.display = 'block';
			dots[sllideIndex - 1].classList.add('dot-active');
		}

		function plusSlides (n) {
			showSlides(sllideIndex += n)
		}

		function currentSlides (n) {
			showSlides(sllideIndex = n)
		}


		prev.addEventListener('click', function() {
			plusSlides(-1);
		});

		next.addEventListener('click', function() {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlides(i);
				}
			}
		});
}

module.exports = slider;