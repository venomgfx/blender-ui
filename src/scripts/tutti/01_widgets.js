$('.js-bool').on('click', function(){
	$('.js-bool').removeClass('enabled');
	$(this).addClass('enabled');
});

$('.tabs-bar__tab').on('click', function(){
	$('.tabs-bar__tab').removeClass('enabled');
	$(this).addClass('enabled');
});

$('.js-panel-collapse').on('click', function(){
	$(this).parent().parent().toggleClass('enabled');
});
