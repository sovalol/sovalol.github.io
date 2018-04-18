document.addEventListener("DOMContentLoaded", function(event) { 
  
	var closeBtn = document.querySelector('.close'),
		modal = document.querySelector('.popup'),
		modalPicture = document.querySelector('.bgc-img'),
		item = document.getElementsByClassName('item');
		


	for (i = 0; i < item.length; i++) {
		let newItem = item[i];


		newItem.addEventListener('click', () => {

			modal.style.display = 'block';

			closeBtn.addEventListener('click', () => {
				
				modal.style.display = 'none';

			});

			let image = window.getComputedStyle(newItem).background;
			let size = window.getComputedStyle(modalPicture).backgroundSize;

			modalPicture.style.background = image;
			modalPicture.style.backgroundSize = size;
			
		});
	}

});