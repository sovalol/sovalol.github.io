$(document).ready(function() {

	$('li:eq(-5)').on('click',choose);
	$('.main_btna').on('click',choose);
	$('.main_btn').on('click',choose);
	
	function choose() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	
	}

	$('.close').on('click', function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').slideUp('slow');
	});


});