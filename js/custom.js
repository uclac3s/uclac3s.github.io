/*global jQuery:false */
(function ($) {
	$(window).load(function(){
      $("#navigation").sticky({ topSpacing: 0 });
    });
	

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       0
      }
    );
    wow.init();

	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(400).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(400).fadeOut(500);
	});	

	
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});
	
	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			var nav = $($anchor.attr('href'));
			if (nav.length) {
			$('html, body').stop().animate({				
				scrollTop: $($anchor.attr('href')).offset().top				
			}, 1500, 'easeInOutExpo');
			
			event.preventDefault();
			}
		});
		$('a.totop,a#btn-scroll,a.btn-slide,.carousel-inner .item a.btn').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	
	$('.testimonialslide').flexslider({
	animation: "slide",
	slideshow: false,
	directionNav:false,
	controlNav: true
	});
	
	//owl carousel
	$('#owl-works').owlCarousel({
            items : 4,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
	
	//nivo lightbox
	$('.owl-carousel .item a').nivoLightbox({
		effect: 'fadeScale',                        // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});
	

	jQuery('.appear').appear();
	jQuery(".appear").on("appear", function(data) {
			var id = $(this).attr("id");
			jQuery('.nav li').removeClass('active');
			jQuery(".nav a[href='#" + id + "']").parent().addClass("active");					
		});

	$('.nav a').on('click', function(){
		$('.btn-navbar').click(); //bootstrap 2.x
		$('.navbar-toggle').click(); //bootstrap 3.x by Richard
	});

	var isSeminarLinksSet = false;
	function setSeminarLinks() {
		if (isSeminarLinksSet) {
			return;
		}

		isSeminarLinksSet = true;
		$.ajax({
	        url: "http://uclac3s-seminars.appspot.com/getseminarlinks"
	    }).then(function(seminar_links) {
		   	for (var key in seminar_links) {
				if (seminar_links.hasOwnProperty(key)) {
					$('#' + key).attr('href', seminar_links[key]);
				}
				console.log(key + " link processed!");
			}
	    });
	}

	$(window).scroll(function() {
		var hT = $('#seminars-load').offset().top,
		hH = $('#seminars-load').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		//console.log((hT-wH) , wS);
		if (wS > (hT+hH-wH)){
			setSeminarLinks();
		}
	});

})(jQuery);