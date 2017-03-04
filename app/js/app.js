'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);


$(function() {
		var selectedClass = '';
		$('p').click(function(){
		selectedClass = $(this).attr('data-rel');
    $('#portfolio').fadeTo(100, 0.1);
		$('#portfolio div').not('.'+selectedClass).fadeOut();
    setTimeout(function() {
      $('.'+selectedClass).fadeIn();
      $('#portfolio').fadeTo(500, 1);
    }, 500);

	});
});

(function() {
	app.init();
})();
