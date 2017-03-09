
var toggleEnabled = function() {
    widgetCheckbox.classList.toggle('enabled');
    console.log('sup');
};

$('.js-bool').on('click', function(){
	$(this).toggleClass('enabled');
});

$('.tabs-bar__tab').on('click', function(){
	$('.tabs-bar__tab').removeClass('enabled');
	$(this).addClass('enabled');
});
