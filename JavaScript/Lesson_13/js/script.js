window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0],
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	//Modal

	let description_btn = document.getElementsByClassName('description-btn');

    	for (let i = 0; i < description_btn.length; i++) {
       	 description_btn[i].addEventListener('click', showModal);

   	 	}
   	let more = document.querySelector('.more');
	
	more.addEventListener('click', showModal);
   	 	
    function showModal() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';
    }

	close.addEventListener('click', function() {
	 	overlay.style.display = "none";
	 	this.classList.remove('more-splash');
	 	document.body.style.overflow = '';
	 	statusMessage.remove();
	});

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}

	});


	//Timer

	let deadline = '2018-04-20';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;

				if (t.total <= 0) {
					clearInterval(timeInterval);
				}

			}

			updateClock();
			let timeInterval = setInterval(updateClock, 1000);

	}

	setClock('timer', deadline);
	
	//Form

	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName('main-form')[0],
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		contactForm = document.getElementById('form');

		form.addEventListener('submit', userContacts);

		contactForm.addEventListener('submit', userContacts);

		 function userContacts(event) {
			event.preventDefault();
			this.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php');

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страницу
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			};
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
				// Очищаем поля ввода
			}
		};

		//Slider 

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

		//Calc

		let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = parseInt(this.value);
				this.value = personsSum;
				total = (daysSum + personsSum)*4000;
				if (restDays.value == '' || persons.value == '' || persons.value <= 0 || restDays.value <=0) {
					totalValue.innerHTML = 0;
				} 
				 else {
					totalValue.innerHTML = total * place.options[place.selectedIndex].value;
				}
			});

			restDays.addEventListener('change', function() {
				daysSum = parseInt(this.value);
				this.value = daysSum;
				total = (daysSum + personsSum)*4000;
				if (restDays.value == '' || persons.value == '' || persons.value <= 0 || restDays.value <=0) {
					totalValue.innerHTML = 0;
				} 
				 else {
					totalValue.innerHTML = total * place.options[place.selectedIndex].value;
				}
			});

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '' || persons.value <= 0 || restDays.value <=0) {
					totalValue.innerHTML = 0;
				} else{
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});


});