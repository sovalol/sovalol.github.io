window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});


// Timer 

let deadline = '2018-04-14';

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
};

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

		};

		updateClock();

		let timeInterval = setInterval(updateClock, 1000);

};

setClock('timer', deadline);

let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close'),
	btn_modal = document.getElementsByClassName('description-btn');

more.addEventListener('click', function() {
	this.classList.add('more-splash');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden';
});
close.addEventListener('click', function() {
	overlay.style.display = 'none';
	more.classList.remove('more-splash');
	document.body.style.overflow = '';
});

for (i = 0; i < 4; i++) {
	btn_modal[i].addEventListener('click', function() {
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
}

});

// let about = document.querySelectorAll('a')[0],
// 	photo = document.querySelectorAll('a')[1],
// 	price = document.querySelectorAll('a')[2],
// 	contacts = document.querySelectorAll('a')[3];


// about.addEventListener('click', () => {

// 	let aboutScroll = setInterval(scroll, 2000);

// 	function scroll () {
// 		about.scrollBy (0, 0);
// 		about.scrollTo(0, 800);
// 	}

// });


// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		alert("Hello" + this.name);
// 	}
// }

// User.prototype.exit = function(name) {
// 	alert("Пользователь " + this.name + " покинул сайт");
// }

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();
