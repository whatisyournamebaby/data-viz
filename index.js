$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  // $('.main *').css('transform','translateY(' + (scrolled*(-0.12)) + 'px)');
	
	// $('.main:before').css('height', (scrolled*(-0.15)) + 'px');
	$('.style').html('<style>.do::before{height:' + scrolled*(.2) + 'px;}</style>');
	
	// body.md or lger
	$('.plx').each( function () {
  var z = parseInt($(this).data("z"));
  $(this).css('transform','translateY(' + (scrolled * (z * (-.01))) + 'px)')
});
}
