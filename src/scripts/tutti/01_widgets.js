// e.g. Checkboxes
$(document).on('click', 'body .js-bool', function(){
	$(this).toggleClass('enabled');
});


// Tabs: there can only be 1 tab enabled, so disable the rest
$(document).on('click', 'body .tabs-bar__tab', function(){
	$('.tabs-bar__tab').removeClass('enabled');
	$(this).addClass('enabled');
});


// Tabs: there can only be 1 tab enabled, so disable the rest
$(document).on('click', 'body .wgt-list-item', function(e){
	e.stopPropagation();

	$('.wgt-list-item').removeClass('enabled');
	$(this).addClass('enabled');

	if ($(this).hasClass('viewlayer')){
		$(".js-add-template[data-template='list-viewlayer']")
			.addClass('disabled');

		$(".js-add-template[data-template='list-collection'], \
			 .js-add-template[data-template='list-override']")
			.removeClass('disabled');
	};

	if ($(this).hasClass('collection')){
		$(".js-add-template[data-template='list-viewlayer']")
			.addClass('disabled');

		$(".js-add-template[data-template='list-collection'], \
			 .js-add-template[data-template='list-override']")
			.removeClass('disabled');
	};

	if ($(this).hasClass('override')){
		$(".js-add-template[data-template='list-viewlayer'], \
			 .js-add-template[data-template='list-collection'], \
			 .js-add-template[data-template='list-override']")
			.addClass('disabled');
	};

});


$(document).on('click', 'body .wgt-list', function(){

	$('.wgt-list-item').removeClass('enabled');

	$(".js-add-template[data-template='list-viewlayer']")
		.removeClass('disabled');

	$(".js-add-template[data-template='list-collection'], \
		 .js-add-template[data-template='list-override']")
		.addClass('disabled');
});

// Panels collapse
$(document).on('click', 'body .js-panel-collapse', function(){
	$(this).parent().toggleClass('enabled');
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
$(document).on('click', 'body .js-list-item-collapse', function(){
	$(this).parent().siblings('ul').toggleClass('expanded');

	toggleImages($(this), '_right.png', '_down.png');
});


// Swap icons on/off
$(document).on('click', 'body .js-icon-toggle-onoff', function(){

	toggleImages($(this), '_off.png', '_on.png');
});
