var budj = prompt('Ваш бюджет?', '');
var shopname = prompt('Название вашего магазина?', '');
var shopGoods = ([prompt('Какой тип товаров будем продавать?', ''),
				  prompt('Какой тип товаров будем продавать?', ''),
				  prompt('Какой тип товаров будем продавать?', '')]);
employers = {
	Сотрудник: "Сотрудник-1",
	Имя: "Кирилл",
	Возраст: 22,
	Пол: "мужской",
	open: true,
	Сотрудник: "Сотрудник-2",
	Имя: "Александр",
	Возраст: 31,
	Пол: "мужской",
	open: true,
	Сотрудник: "Сотрудник-3",
	Имя: "Ольга",
	Возраст: 28,
	Пол: "женский",
	open: false
};

console.log(budj, 'рублей');
console.log(shopname);

var mainList = {
	budj,
	shopname,
	shopGoods,
	employers,
	open: true
};

console.log(mainList);

console.log(shopGoods);

alert(budj/30);