$(function() {
	$('.aj-nav').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings().find('ul').slideUp();
		$(this).next().slideToggle();
	});

	// Bootstrap Table Class
	$('table').addClass('table');

    $('#pharDownload').click(function() {
        ga('send', 'event', 'download', 'phar', 'Downloaded Phar File');
    });

    $('#zipDownload').click(function() {
        ga('send', 'event', 'download', 'zip', 'Downloaded Zip File');
    });
});