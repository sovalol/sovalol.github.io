let item = document.querySelectorAll('.menu-item')[1];
var	item_1 = document.querySelectorAll('.menu-item')[3];
var	item_last = document.getElementsByClassName('menu-item')[3];
// var item_new = item_last.cloneNode(true);
var body = document.querySelector('body');
var text = document.querySelector('.title');
var adv = document.querySelector('.adv');
var question = document.getElementById('prompt');
var menu = document.querySelector('.menu');
// var path = document.body.menu;
// var	item_copy = item_last.cloneNode(true);
// let bgc = document.getElementsByTagName('body');

item.style.order = '1';
item_1.style.order = '4';

body.style.background = "url(../img/apple_true.jpg)"
text.textContent = "Мы продаем только подлинную технику Apple";
adv.style.display = "none";

console.log(question);

let newItem = document.createElement('li');
menu.appendChild(newItem);
newItem.classList.add('menu-item');

newItem.innerHTML = ('Пятый пункт');

newItem.style.order = '5';

for (let i = 0; i < 1; i++) {
	let a = prompt('Как вы относитесь к технике Apple?', '');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 150) {
		question.innerHTML = a;
	} else i--;
}

// document.body.menu.appendChild(item_new);

// bgc.style.background = 'url(img/apple_true.jpg)';