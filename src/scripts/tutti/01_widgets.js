// e.g. Checkboxes
$(document).on('click', 'body .js-bool', function(){

	var $this = $(this);

	// If the parent element has js-bool-exclusive, it means that
	// only one element should have the status 'enabled' at a time
	if ($this.parent().hasClass('js-bool-exclusive')){

		// Remove 'enabled' from all siblings of the element
		$this.siblings().removeClass('enabled');

		// Only toggle 'enabled' if it's not already enabled
		// This prevents from having radio buttons without one as active
		if (!$this.hasClass('enabled')){
			$this.toggleClass('enabled');
		}

	} else {

		// A regular js-bool non exclusive, like checkboxes
		$this.toggleClass('enabled');
	}

	gtag('event', 'button', {
		'event_category': 'boolean',
		'event_label': $(this).attr('class')
	});
});


// Tabs: there can only be 1 tab enabled, so disable the rest
$(document).on('click', 'body .tabs-bar__tab', function(){
	$('.tabs-bar__tab').removeClass('enabled');
	$(this).addClass('enabled');

	gtag('event', 'button', {
		'event_category': 'tab-enable',
		'event_label': $(this).attr('class')
	});
});



// Panels toggle collapse
function panelCollapse(panel_element){
	$(panel_element).parent().toggleClass('enabled');
}

$('.js-panel-collapse')
	.on('mouseenter', function(e){
		Mousetrap.bind('a', function(event, combo) {
			panelCollapse($(e.target));
		});
	})
	.on('mouseleave', function(e){
		Mousetrap.unbind('a');
});

$(document).on('click', 'body .js-panel-collapse', function(){
	panelCollapse($(this));

	gtag('event', 'button', {
		'event_category': 'panel-collapse',
		'event_label': $(this).attr('class')
	});
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

	var $parent = $(this).parent();

	if ($parent.hasClass('has-children')){
		$parent.toggleClass('collapsed');
		toggleImages($(this), '_right.png', '_down.png');
	};

	gtag('event', 'button', {
		'event_category': 'list-item-collapse',
		'event_label': $(this).attr('class')
	});
});


// Swap icons on/off
$(document).on('click', 'body .js-icon-toggle-onoff', function(){

	toggleImages($(this), '_off.png', '_on.png');

	gtag('event', 'button', {
		'event_category': 'icon-toggle',
		'event_label': $(this).attr('class')
	});
});
