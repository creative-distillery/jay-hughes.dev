$(document).ready(function() {


		var theWindow        = $(window),
		    $bg              = $("#hughes_family"),
		    aspectRatio      = $bg.width() / $bg.height();

		function resizeBg() {

			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			    $bg
			    	.removeClass()
			    	.addClass('bgheight');
			} else {
			    $bg
			    	.removeClass()
			    	.addClass('bgwidth');
			}

		}

		theWindow.resize(resizeBg).trigger("resize");


});
