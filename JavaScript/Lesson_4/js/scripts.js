// let str = 'урок-3-был слишком легким ';

// newStr = str[0].toUpperCase();

// for (let x = 1; x < 25; x++) {

// 	newStr += str[x];
// }



// console.log(newStr);



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
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for(let i = 0; i < 5; i++) {

		let a = prompt('Какой тип товаров будем продавать?', '');
				
			if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
				console.log('Vse verno');
				mainList.shopGoods[i] = a;
			} else {

			}

		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Takogo ne mozhet bit');
		} else if (time > 8 && time < 20) {
			console.log('Vremya rabotat');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Yzhe sliwkom pozdno');
		} else {
			console.log('V sytkah vsego 24 chasa!');
		}
	},
	dailyMoney: function dailyMoney() {
		daily = budj/30;
		alert("Ежедневный бюджет " + daily);
	},
	discount: function discount(price) {
		price = prompt('Vvedite stoimost tovara', '');
		if (mainList.discount == true) {
			console.log('Stoimost tovara so skodkoi ' + price * 0.8 + ' rub');
		} else if (mainList.discount == false) {
			console.log('Mi vam skidky ne dadim!');
		}
	},
	hireEmplyers: function hireEmployers() {
		for(let i = 1; i < 4; i++) {
			let name = prompt('Как тебя зовут?', '');

			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечислите через запятую ваши товары', '');

		if ((typeof(items)) === 'string' && items != '' && (typeof(items)) != null) {
			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt('Вы ничего не забыли купить? ', ''));
			mainList.shopItems.sort();
		} else {
			alert('Вы ошиблись');
		}
	}
};


mainList.chooseShopItems();

mainList.shopItems.forEach(function(item,i,shopItems) {
	i++;
	console.log( i + ": " + item + ": " + " (товар: " + shopItems + ")" );
});

// mainList.shopItems.reduce(function(item, i, shopItems) {
// 	console.log( item + ": " + i + ": " + " (товар: " + shopItems + ")" );
// }, 1);

for (let key in mainList) {
	console.log('Наш магазин включает в себя: ' + key);
}

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

