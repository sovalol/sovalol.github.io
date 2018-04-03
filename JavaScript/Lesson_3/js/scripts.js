let budj,
 	name,
 	time,
 	price

function start() {
	budj = prompt('Ваш бюджет?', '');
	name = prompt('Название вашего магазина?', '');

	while (isNaN(budj) || budj == "" || budj == null) {
	 	budj = prompt('Ваш бюджет?', '');
	}
}

start();

let mainList = {
	budget: budj,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: true,
	discount: true
};

function chooseGoods() {
	for(let i = 0; i < 5; i++) {

		let a = prompt('Какой тип товаров будем продавать?', '');
		
		if ((typeof(a)) === 'string' /*&& (typeof(a)) === null*/ && a != '' && a.length < 50 ) {
			console.log('Vse verno');
			mainList.shopGoods[i] = a;
		} else {

		}

	}
}
chooseGoods();

time = 19;

function workTime(time) {
	if (time < 0) {
		console.log('Takogo ne mozhet bit');
	} else if (time > 8 && time < 20) {
		console.log('Vremya rabotat');
	} else if (time < 24) {
		console.log('Yzhe sliwkom pozdno');
	} else {
		console.log('V sytkah vsego 24 chasa!');
	}
}

workTime();

function dailyMoney() {
	daily = budj/30;
	alert("Ежедневный бюджет " + daily);
}

dailyMoney();

function discount(price) {
	price = prompt('Vvedite stoimost tovara', '');
	if (mainList.discount == true) {
		console.log('Stoimost tovara so skodkoi ' + price * 0.8 + ' rub');
	} else if (mainList.discount == false) {
		console.log('Mi vam skidky ne dadim!');
	}
}

discount();

function employers() {
	for(let i = 0; i < 4;) {
		let a = prompt('Как тебя зовут?', '');

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
			mainList.employers[i] = a;
			i++;
			console.log(a);
		} else {
			console.log('Vi dopustili owibky');
		}
	}
	console.log(mainList.employers);
}

employers();

console.log(mainList);

/*let i = 0;

while (i < 5) {

	let a = prompt('Какой тип товаров будем продавать?', '');
	mainList.shopGoods = [a];
	i++;
	console.log(mainList.shopGoods);
}*/

/*let i = 0;

do {
	let a = prompt('Какой тип товаров будем продавать?', '');
	mainList.shopGoods = [a];
	console.log(mainList.shopGoods);
	i++;
} 

while (i < 5);*/


