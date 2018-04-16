function modal() {
	let description_btn = document.getElementsByClassName('description-btn'),
		info = document.getElementsByClassName('info-header')[0],
		overlay = document.querySelector('.overlay'), 
		close = document.querySelector('.popup-close'); 

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
	 	statusMessage.remove(); // удалить сообщение
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
}

module.exports = modal;