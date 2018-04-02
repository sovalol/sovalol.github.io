var budj = prompt('Ваш бюджет?', '');
var name = prompt('Название вашего магазина?', '');

let mainList = {
	budget: budj,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: true
};


/*for(let i = 0; i < 5; i++) {

	let a = prompt('Какой тип товаров будем продавать?', '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
		console.log('Vse verno');
		mainList.shopGoods[i] = a;
	} else {

	}

}*/

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





