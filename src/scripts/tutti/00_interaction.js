function swapTheme(themeFile, linkIndex) {
	var cssLink = document.getElementsByTagName("link").item(linkIndex);
	cssLink.href = themeFile;

	document.body.classList.toggle('alt');

	gtag('event', 'theme', {
		'event_category': 'swap',
		'event_label': themeFile
	});
}

if (window.location.search.indexOf('?theme=light') === 0){
	swapTheme('assets/css/main_alt.css', 0);
}
