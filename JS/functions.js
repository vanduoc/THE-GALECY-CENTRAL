window.onload = function() {
    $('#loading').addClass('hidden');
    setTimeout(function() {
           $(".outer-intro,#fpc_effect-back").animate({ "top": "-100%" }, 1000);
        }, 2000);
};

var QueryString = function() {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();
jQuery(document).ready(function($) {

        document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
		var landingUrl = window.location.href.substring(window.location.href.indexOf('?') + 1);
		
        $('.news-content img').wrap('<div class="news-img"></div>');
        var window_w = $(window).width();
        var window_h = $(window).height();


        if (QueryString.nocover) {
            $(".outer-intro,#fpc_effect-back").addClass('hidden');
        }


        $(".use-bg").each(function() {
            var img = $(this).attr("data-bg");
            var pos = $(this).attr("data-width");
            if (pos == '')
                pos = 'right 0';
            $(this).css({
                "background-image": "url(" + img + ")",
                "background-size": pos
            });
        });


        /*	$("#index-slider").slick({
        		slidesToShow:1,
        		slidesToScroll:1,
        		arrows:false,
        		dots:true,
        		autoPlay:true
        	}); */

        var video_h = $("#videos .active-video").innerHeight();
        $("#videos .right").height(video_h);

        $("#videos .list a").click(function(e) {
            e.preventDefault();
            var video_id = $(this).attr("data-videoid"),
                title = $(this).attr("data-title"),
                desc = $(this).attr("data-desc");
            if (video_id != "") {
                var v_iframe = '<iframe src="https://www.youtube.com/embed/' + video_id + '" frameborder="0" allowfullscreen></iframe>';
                $("#videos .active-video").html(v_iframe);
                $("#videos .left .title").html(title);
                $("#videos .left .desc").html(desc);
            }

        });

        /*
        $("#struc-slider").slick({
        	slidesToShow:1,
        	slidesToScroll:1,
        	arrows:false,
        	dots:true,
        	
        });
	
        $("#furniture-slider").slick({
        	slidesToShow:1,
        	slidesToScroll:1,
        	arrows:false,
        	dots:true,
        	
        });
	
        $("#convenience").slick({
        	slidesToShow:1,
        	slidesToScroll:1,
        	arrows:false,
        	dots:true,
        	
        }); */

        $("#position .fts .lbl").click(function() {
            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");
                $(this).next().stop().slideUp();
            } else {
                $("#position .fts .item.active .content").stop().slideUp();
                $("#position .fts .item.active").removeClass("active");
                $(this).parent().addClass("active");
                $(this).next().stop().slideDown();
            }
        });

        /*	$("#life-style").slick({
        		slidesToShow:1,
        		slidesToScroll:1,
        		arrows:false,
        		dots:true,
        		
        	});
        	
        	$("#our-team").slick({
        		slidesToShow:1,
        		slidesToScroll:1,
        		arrows:false,
        		dots:true,
        		
        	});
        */




        var anchors = ['sec-intro-slider','sec-videos', 'sec-struc-slider','sec-furniture-slider','sec-convenience','sec-position','sec-life-style','sec-our-team','sec-investors','sec-news'];
	$length = $('#sec_process .sub-menu li').length;
	for (var i = 1; i <= $length; i++) {
		anchors.push('sec-process'+i);
	}
	anchors.push('sec-contact');
	//'sec-process','sec-contact']
	
	var max = -1;
	$('#text-intro-slider .item').each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$( "#text-intro-slider .item" ).height(max);
	
	var max = -1;
	$('#text-struc-slider .item').each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$( "#text-struc-slider .item" ).height(max);
	
	var max = -1;
	$('#text-life-style .item').each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$( "#text-life-style .item" ).height(max);
	
	var max = -1;
	$('#text-convenience .item').each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$( "#text-convenience .item" ).height(max);
	
	var max = -1;
	$('#text-furniture-slider .item').each(function() {
	    var h = $(this).height(); 
	    max = h > max ? h : max;
	});
	$( "#text-furniture-slider .item" ).height(max);
	
	
	$('#primary.index').fullpage({
			
			easing: 'easeInOutCubic',
			menu: '#primary-menu',
			sectionSelector: '.section',
			slidesNavigation: false,
			anchors: anchors,
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['Introduction', 'Videos','Structure','Furniture','Convenience','Position','Life Style','Our Team','investors','News','Process','Contact'],
			sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
			responsiveWidth: 1200,
			responsiveHeight: 600,
			responsiveSlides: true,
			verticalCentered:true,
            css3: true,
			bigSectionsDestination:'top',
			animateAnchor:'false',
			autoScrolling:true,
			controlArrows:true,
			keyboardScrolling:true,
			paddingTop: '66px',
			onLeave: function(index, nextIndex, direction){
			},
			afterLoad: function(anchorLink, index){
				
				/*
				if("sec-struc-slider"==anchorLink) {
					$('html, body').animate({
	                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
	                }, 600);
				}
				
				*/
				if ($('#primary.index').width() <= 1200) {
					if("sec-struc-slider"==anchorLink) {
						$('html, body').animate({
		                    scrollTop: $('#primary.index #struc-slider').offset().top
		                }, 0);
					}
					if("sec-life-style"==anchorLink) { 
						$('html, body').animate({
		                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
		                }, 0);
					}
					if("sec-furniture-slider"==anchorLink) {
						$('html, body').animate({
		                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
		                }, 0);
					}
					if("sec-convenience"==anchorLink) {
						$('html, body').animate({
		                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
		                }, 0);
					}
					if("sec-process1"==anchorLink) {
						$('html, body').animate({
		                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
		                }, 0);
					}
					if("sec-videos"==anchorLink) {
						$('html, body').animate({
		                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
		                }, 0);
					}
				}
				$("ul#primary-menu li.active-child").removeClass("active-child");
				$("ul#primary-menu li.active").closest(".menu-item-has-children").addClass("active-child");
				var section = $('#primary.index .section[data-anchor="'+anchorLink+'"]');
				//$("#site-header .curent-page #title").html($("ul#primary-menu li.active").last().text());

				if (section.find('.fp-slides').length > 0){
					//$.fn.fullpage.moveTo(anchorLink,0);
					return false;
				}
				//history.pushState("", document.title, window.location.pathname);
				
				
			},
			afterRender: function(){
				var autoSlide = setInterval(function(){ $.fn.fullpage.moveSlideRight(); }, 50000000);	

			},
			afterResize: function(){
				
			},
			afterResponsive: function(isResponsive){
			},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
	        	
				/*$('.fp-section').find('.fp-slidesContainer').fadeOut().fadeIn(1500);
				$.fn.fullpage.setScrollingSpeed(1500);*/
				var slide = $('.fp-section.active').find('.slide.active');
				var text_slides = $('#text-intro-slider .item');
				
				if("sec-intro-slider"==anchorLink) {
					$('#text-intro-slider .item').hide();
					var max = -1;
					$('#text-intro-slider .item').each(function() {
					    var h = $(this).height(); 
					    max = h > max ? h : max;
					});
					$( "#text-intro-slider .item" ).height(max);
					$('#text-intro-slider .item').eq(slideIndex).show();
				}
				if("sec-struc-slider"==anchorLink) {
					
					$('#text-struc-slider .item').hide();
					var max = -1;
					$('#text-struc-slider .item').each(function() {
					    var h = $(this).height(); 
					    max = h > max ? h : max;
					});
					$( "#text-struc-slider .item" ).height(max);
					$('#text-struc-slider .item').eq(slideIndex).show();
				}
				if("sec-life-style"==anchorLink) {
					$('#text-life-style .item').hide();
					var max = -1;
					$('#text-life-style .item').each(function() {
					    var h = $(this).height(); 
					    max = h > max ? h : max;
					});
					$( "#text-life-style .item" ).height(max);
					$('#text-life-style .item').eq(slideIndex).show();
				}
				if("sec-convenience"==anchorLink) {
					/*$('html, body').animate({
	                    scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
	                }, 600);*/
					$('#text-convenience .item').hide();
					var max = -1;
					$('#text-convenience .item').each(function() {
					    var h = $(this).height(); 
					    max = h > max ? h : max;
					});
					$( "#text-convenience .item" ).height(max);
					$('#text-convenience .item').eq(slideIndex).show();
				}
				if("sec-furniture-slider"==anchorLink) {
					$('#text-furniture-slider .item').hide();
					var max = -1;
					$('#text-furniture-slider .item').each(function() {
					    var h = $(this).height(); 
					    max = h > max ? h : max;
					});
					$( "#text-furniture-slider .item" ).height(max);
					$('#text-furniture-slider .item').eq(slideIndex).show();
				}
			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
				/*$.fn.fullpage.setScrollingSpeed(0);
				$('.fp-section').find('.fp-slidesContainer').hide();*/
				
			}
			
	}); 
	
	
        $(".copyR .arrow-btn").click(function(e) {
            e.preventDefault();
            $.fn.fullpage.moveSectionDown();
        });

        //$($(".copyR").detach()).insertBefore("#primary");
        $("body").prepend($(".copyR").detach());
        
        $("#main-logo a").click(function(e) {
            var target = $(this).attr("href");
            if (target == '#') {
                e.preventDefault();
                $.fn.fullpage.moveTo(1);
            }

        })
        
        $("#site-header .menu-icon").click(function() {
            $(this).toggleClass("active");
            $("body,#site-header,.main-nav-menu").toggleClass("push");
        });

        $("ul#primary-menu a").click(function() {
            $(".menu-icon").removeClass("active");
            $("body,#site-header,.main-nav-menu").removeClass("push");
        });



        $(".process .title-tabs .tab").each(function(){
		if($(this).hasClass("current")){
			var pos = $(this).index();
			$(".process .content-tabs .tab:eq("+pos+")").fadeIn().addClass("current");
			
		}
	})
	
	$(".process .title-tab").click(function(e){
		
		if($(this).hasClass("opening")){
			$(this).removeClass("opening");
			$(this).next().stop().slideUp();
		}else{
			$(".process .title-tab.opening").next().stop().slideUp();
			$(".process .title-tab.opening").removeClass("opening");
			$(this).addClass("opening");
			$(this).next().stop().slideDown();
		}
	})
	
	$(".process .title-tabs .tab").click(function(){
		var pos = $(this).index();
		var title = $(this).html();
		$(".process .content-box .month").html(title);
		
		$(".process .content-tabs .tab.current").slideUp().removeClass("current");
		$(".process .content-tabs .tab:eq("+pos+")").slideDown().addClass("current");
		
		$(".process .title-tabs").stop().slideUp();
		
		$(".process .month").removeClass("opening");
	});

        //Check click outside of div


        $(document).mouseup(function(e) {
            var process_tab = $("#process .title-tabs");

            if (!process_tab.is(e.target) // if the target of the click isn't the container...
                &&
                process_tab.has(e.target).length === 0) // ... nor a descendant of the container
            {
                process_tab.slideUp();
            }


            var main_nav = $(".main-nav-menu");
            // if the target of the click isn't the container...
            if (!main_nav.is(e.target) 
                &&
                main_nav.has(e.target).length === 0 || ($(".menu-icon").is(e.target))) {
                $("body,.main-nav-menu,#site-header").removeClass("push");
                $(".menu-icon").removeClass("active");
            }



        });


        //Popup contact
        $("#contact .btnSubmit").click(function(e) {
             e.preventDefault();
            $("#contact .btnSubmit").attr("disabled",true);
            var kind_villa =[];
            $('input[name="kind_villa[]"]:checked + .labelCheckbox').each(function(i){
                kind_villa[i] = $(this).text();
            });
            var know_our =[];
            $('input[name="know_our[]"]:checked + .labelCheckbox').each(function(i){
                know_our[i] = $(this).text();
            });

            var fullname = $('input[name="fullname"]').val();
            var phone = $('input[name="phone"]').val();
            var email = $('input[name="email"]').val();
            var request = $('textarea[name="request"]').val();
            $.post('http://serenity.vn/home/submitcontact_ajax', {
                kind_villa: kind_villa,
                know_our: know_our,
                fullname: fullname,
                phone: phone,
                email: email,
                request: request
            }, function(data) {
                $("#contact .btnSubmit").attr("disabled",false);
                if (data=='1') {
                    $("#contact .success-msg").addClass("show");
                }
                else{
                    alert(data);
                }
            });

        });



        $("#contact .success-msg .close-btn").click(function(e) {
            e.preventDefault();
            $("#contact .success-msg").removeClass("show");
        });

        $(".event-banner .close-btn").click(function(e) {
            e.preventDefault();
            $(".event-banner").fadeOut();
        })




        // $("#fpc_effect-back").click(function() {
            // 	$("#fpc_corner-box").addClass("move1");
            // 	$(".outer-intro .intro").addClass("move1");

            // 	setTimeout(function(){
            // 		$("#fpc_corner-box").addClass("move2");
            // 	},800);


            // 	setTimeout(function(){
            // 		$(".outer-intro .intro").addClass("move2");
            // 	},850);

            // 	/*
            // 	setTimeout(function(){
            // 		$("#fpc_corner-box").addClass("move3");
            // 	},1400)

            // 	setTimeout(function(){
            // 		$(".outer-intro .intro").addClass("move3");
            // 	},1500) */

            // 	setTimeout(function(){
            // 		$(".outer-intro,#fpc_effect-back").animate({"top":"-100%","left":"-100%"},1000);
            // 	},2000)
        	
           

        // });
        
        lightbox.option({
  	      'resizeDuration': 200,
  	      'wrapAround': true,
  	      'maxWidth':$('#primary.index').width(),
  	      
        });
        
        if ($('#primary.index').width() <= 1200) {
        	
        	(function($){
        		  $(window).on("load",function(){
        		    $("#horizontal-news-right").mCustomScrollbar({
        		      axis:"x",
        		      theme:"dark-3",
        		      advanced:{
        		        autoExpandHorizontalScroll:true //optional (remove or set to false for non-dynamic/static elements)
        		      }
        		    });
        		    
        		    $("#video-right").mCustomScrollbar({
        		    	axis:"x",
          		      theme:"dark-3",
          		      advanced:{
          		        autoExpandHorizontalScroll:true //optional (remove or set to false for non-dynamic/static elements)
          		      }
        	        });
        		    
        		  });
        		})(jQuery);
        	
        	
        	$(window).scroll(function() {
        	    var windscroll = $(window).scrollTop();
        	    if (windscroll >= 100) {
        	        $('.fp-section').each(function(i) {
        	        	
        	        	
        	            if ($(this).position().top <= windscroll - 100) {
        	            	var anchorLink = $("ul#primary-menu li.active").last().attr("data-menuanchor");
        	            	//alert(anchorLink);
        	            	 //$('#primary.index .section[data-anchor="'+anchorLink+'"]');
        	            	/*
        	            	$('html, body').animate({
                                scrollTop: $('#primary.index .section[data-anchor="'+anchorLink+'"]').offset().top
                            }, 2000);
                            */
        	                //$('nav a').eq(i).addClass('active');
        	                if($("body").hasClass("fp-viewing-sec-process1-0")) {
        	                	$("#site-header .curent-page #title").html($("ul#primary-menu li#sec_process a").html());
        	                } else {
        	                	$("#site-header .curent-page #title").html($("ul#primary-menu li.active").last().text());	
        	                }
        	                
        	                
        	            }
        	        });

        	    } else {

        	    }

        	}).scroll();
        	
        	$(".mobile-hidden").remove();
        	
        } else {
        	$(".desktop-hidden").remove();
        	
        	
	        $("#video-right").mCustomScrollbar({
	            setHeight: $(window).height() - 180,
	            theme: "dark-3",
	            mouseWheel: { preventDefault: true }
	        });
	
	        $('#news-right').mCustomScrollbar({
	            setHeight: $(window).height() - 180,
	            theme: "dark-3",
	            mouseWheel: { preventDefault: true }
	        });
	        
	
	        $('#news-left').mCustomScrollbar({
	            setHeight: $(window).height() - 180,
	            theme: "dark-3",
	            mouseWheel: { preventDefault: true }
	        });
	        /*
	        $('#contact-right').mCustomScrollbar({
	            setHeight: $(window).height() - 40,
	            theme: "dark-3",
	            mouseWheel: { preventDefault: true }
	        });
	        */
        }
        // $('#our-team-right').mCustomScrollbar({
        // 	setHeight: $(window).height() - 140,
        // 	theme:"dark-3"
        // });

        // if ($('#our-team-right').offsetHeight < $('#our-team-right').scrollHeight ||
        //     $('#our-team-right').offsetWidth < $('#our-team-right').scrollWidth) {
        //     $('#our-team-right').mCustomScrollbar({
        //         setHeight: $(window).height() - 140,
        //         theme: "dark-3",
        //         mouseWheel: { preventDefault: true }
        //     });
        // }

        // $('#develop-right').mCustomScrollbar({
        //     setHeight: $(window).height() - 140,
        //     theme: "dark-3",
        //     mouseWheel: { preventDefault: true }
        // });

    }) //End jQuery