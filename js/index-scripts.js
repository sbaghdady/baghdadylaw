$(window).load(function() {
	
	var slideIndex = 0;
	// $($('.officeSlides')[1]).hide();
	// $($('.officeSlides')[2]).hide();
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName('officeSlides');
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = 'none'; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = 'block'; 
	    setTimeout(carousel, 3000); // Change image every 2 seconds
	}

	// function fadingCarousel() {
	// 	var x = $('.officeSlides');
	// 	$(x[slideIndex]).fadeOut(1000, function() {
	// 		slideIndex++;
	// 		if (slideIndex == x.length) {slideIndex = 0};
	// 		$(x[slideIndex]).fadeIn(1000, function() {
	// 			setTimeout(fadingCarousel, 2000);	
	// 		});				
	// 	});				
	// }	
});
