// e.g. Checkboxes
$('.js-bool').on('click', function(){
	$(this).toggleClass('enabled');
});


// Tabs: there can only be 1 tab enabled, so disable the rest
$('.tabs-bar__tab').on('click', function(){
	$('.tabs-bar__tab').removeClass('enabled');
	$(this).addClass('enabled');
});


// Panels collapse
$('.js-panel-collapse').on('click', function(){
	$(this).parent().parent().toggleClass('enabled');
});


function toggleImages(image, from, to){

	// var image = $(this);
	var icon_src = image.attr('src');

	var status_off = '_off.png';
	var status_on = '_on.png';

	if (icon_src.endsWith(from)){
		icon_src = icon_src.replace(from, to);
	} else {
		icon_src = icon_src.replace(to, from);
	}

	image.attr('src', icon_src);

}


// UI List item collapse
$('.js-list-item-collapse').on('click', function(){
	$(this).parent().siblings('ul').toggle();

	toggleImages($(this), '_right.png', '_down.png');
});


// Swap icons on/off
$('.js-icon-toggle-onoff').on('click', function(){

	toggleImages($(this), '_off.png', '_on.png');
});
