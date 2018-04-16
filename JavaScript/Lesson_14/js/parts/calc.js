function calc() {
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
}

module.exports = calc;