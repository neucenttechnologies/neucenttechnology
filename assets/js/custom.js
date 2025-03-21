// tech-guide
    $('.autoplay_blog').slick({  
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow:"<img class='slick-prev' src='assets/images/arrow_blue_left.png' alt='arrow_blue_left'>",
        nextArrow:"<img class='slick-next' src='assets/images/arrow_blue_right.png' alt='arrow_blue_right'>",
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }    
        ]
    });

// Front page
    $('.autoplay').slick({  
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow:"<img class='slick-prev' src='assets/images/arrow_blue_left.png' alt='arrow_blue_left'>",
        nextArrow:"<img class='slick-next' src='assets/images/arrow_blue_right.png' alt='arrow_blue_right'>",
        responsive: [
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                 }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }    
        ] 
    });

// About page
    $('.histrory_slider').slick({
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        variableWidth:true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left prev slick-prev' src='images/t_arrow_left.png' alt='left_arrow' >",
        nextArrow: "<img class='a-right next slick-next' src='images/t_arrow_right.png' alt='right_arrow'>",
        adaptiveHeight: true,          
    });

// Portfolio page
    $(function () {         
        var filterList = {          
            init: function () { 
                $('#portfoliolist').mixItUp({
                    selectors: {
                      target: '.filert-port',
                      filter: '.filter' 
                    },
                    load: {
                       filter: '.app, .case-study, .portfolio, .website'
                    }     
                });
            }   
        };
        filterList.init();
    });

// Single page list on sroll
    jQuery('.able-of-list-2 a[href^="#"]' ).on( "click", function ( e ) {
        var t = jQuery( this.getAttribute( "href" ) );
        var $headerH = jQuery('header').height();
        t.length && (e.preventDefault(), jQuery( "html, body" ).stop().animate( {
          scrollTop: t.offset().top - $headerH + "px"
        }, 500 ))  
    });     

    function fixTitle() {
        jQuery('.able-of-list-2 li').removeClass('active');
        jQuery('.scroll_div').each(function(i) {
            var $this = jQuery(this);
            var $headerH = jQuery('header').height();
            var offset = $this.offset().top - $headerH - 20;
            var scrollTop = jQuery(window).scrollTop();

            if (scrollTop > offset) {
                jQuery('.able-of-list-2 li.active').removeClass('active');
                jQuery('.able-of-list-2 li').eq(i).addClass('active');
            }
        });
    }
    jQuery(window).scroll(fixTitle);
   
    jQuery('.blog-data img').click(function(){
        var modalimg = jQuery(this).attr('src');
        jQuery('#set_image').attr('src', modalimg);           
    })

// 
    function setCookie(cname,cvalue,exdays)   {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname+"="+cvalue+"; "+expires+"; path=/";
    }
   
    function getCookie(cname)  {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = jQuery.trim(ca[i]);
            if (c.indexOf(name)==0) return c.substring(name.length,c.length);
        }
        return "";
    }

// New blog add class on header
    jQuery(window).load(function(){   
       if(jQuery('.page_Wrapper').find(".new_blog_banner, .portfolio-banner, .cicd-banner, .thank_for_appling, .blue_header").length > 0){
          jQuery('body').addClass('New_blog_header portfolio_new cicd-banner-bg');
       }
    });

// onscroll move banner on market research page
    jQuery(window).on("load resize scroll", function() {
        jQuery(".bg-static").each(function() {
            var windowTop = jQuery(window).scrollTop();
            var elementTop = jQuery(this).offset().top;
            var leftPosition = windowTop - elementTop;
            jQuery(this)
                .find(".bg-move")
                .css({ left: leftPosition });
        });
    });

// Web pages js
    jQuery('.list li').on('click', function(){
        jQuery('li.current').removeClass('current');
        jQuery(this).addClass('current');
    });
    
    jQuery('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    jQuery('.portfolio_logo').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    jQuery('.box_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
// End Web pages js

// Mobile toggle
    jQuery(document).ready(function() {

        // Apply now button on click close popup
        jQuery('.apply_btn').click(function(){
            //jQuery('.career_job').removeClass('show');
            jQuery('.career_job').modal('hide');
        });

        jQuery(".mob_toggle_btn").click(function() {
            jQuery(".header-nav-cls").addClass('active');
            jQuery(".overlay-mobile").addClass('active');
            jQuery("body").addClass('active');
        });

        jQuery(".nav-close-mobile a, .overlay-mobile").click(function() {
            jQuery(".header-nav-cls").removeClass('active');
            jQuery(".overlay-mobile").removeClass('active');
            jQuery("body").removeClass('active');
        });

        if(jQuery(window).width() < 1250) {       

            jQuery(".header_wrap .header_menu>li> .sub-menu-block ").before('<span class="icon"> </span>');

            jQuery(".header_wrap .header_menu>li .icon").on('click', function(e) {

              jQuery(this).parent().children('.sub-menu-block').slideToggle(500);

              jQuery(this).parent().siblings('li').find('.sub-menu-block').slideUp(500);

              jQuery(this).parent().siblings('li').removeClass('active');

              jQuery(this).parent().toggleClass('active');

              e.stopPropagation();

            });

        } else {
            // change functionality for larger screens
        }  

    });

    jQuery(function() {
      var loc = window.location.href; // returns the full URL
      if(/hire-angularjs-developers/.test(loc)) {
        jQuery('body').addClass('angular-page');
      }
    });

// Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });


// market research counter
$('.number_counter .count_n .counter_n').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// icon on click change text color in market inner pages
    $(function() {
        $('.left_icons a').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            higlight = $(this).attr('href'); 
            select_para = $(higlight);
            $('.list_box_survay li').removeClass('grey-bg'); 
            $(select_para).toggleClass('grey-bg');
            // change icon color
            $('.left_icons a').removeClass('active-tab');
            $(this).addClass('active-tab'); 

        });
    });


// toggle dropdown on mouse hover
    $('.dropdown').on('mouseenter ', function(event) {
        if (!$('.navbar-toggle').is(':visible')) {
            /* Toggle dropdown open/ close  */
            $('.dropdown-toggle').trigger("show.bs.dropdown")
        }
    });

// toggle dropdown on mouse hover
    $('.dropdown').on('mouseleave ', function(event) {
        if (!$('.navbar-toggle').is(':visible')) {
            $('.dropdown-toggle').trigger("hide.bs.dropdown")
        }
    });

// Banner Slider
    $('.banner_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/t_arrow_left.png' alt='left_arrow' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/t_arrow_right.png' alt='right_arrow'>",
        adaptiveHeight: true,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a class="dot">' + `0${i+1}` + '</a>';
        },
    });

    $('.banner_slider-2').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        dots:false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/arrow_blue_left.png' alt='arrow_blue_left' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/arrow_blue_right.png' alt='arrow_blue_right' >",
        adaptiveHeight: true,
    });

// Tech-stack Slider
    $('.tech_slider_main').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/t_arrow_left.png' alt='left_arrow' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/t_arrow_right.png' alt='right_arrow' >",
            responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }
        ]
    });


    $('.tech_slider_main-2').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow:5,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/t_arrow_left.png' alt='left_arrow' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/t_arrow_right.png' alt='right_arrow' >",
        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]

    });

    $('.tech_slider_main-3').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow:1,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/t_arrow_left-1.png' alt='left_arrow'>",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/t_arrow_right-1.png' alt='right_arrow'>",

        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

// Our Project Slider

    $('.center').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/t_arrow_left.png' alt='left_arrow' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/t_arrow_right.png' alt='right_arrow'>",
    });

    $('.project_wrapper').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/arrow_blue_left.png' alt='arrow_blue_left' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/arrow_blue_right.png' alt='arrow_blue_right'>"
    });

// Testimonial Slider
    $('.testimonial_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        asNavFor: '.slider_profile',
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/arrow_white_left.png'>",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/arrow_black_right.png'>",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

// Front page slider
    $('.slider_profile').slick({
        asNavFor: '.testimonial_slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

// Award Slider
    $(document).ready(function() {
        $('.award_slide').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            arrows: true,
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

// blog details page
    $('.service_slides').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 3,
        prevArrow: "<img class='a-left prev slick-prev' src='../assets/images/arrow_blue_left.png' alt='arrow_blue_left'>",

        nextArrow: "<img class='a-right next slick-next' src='../assets/images/arrow_blue_right.png' alt='arrow_blue_right' >",

        responsive: [{
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
// Add div in table
    $('.blog-data table').wrap('<div id="outer_table"></div>');

// single services
    $('.blog-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 300,
        dots:false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<img class='a-left prev slick-prev' src='assets/images/arrow_blue_left.png' alt='arrow_blue_left' >",
        nextArrow: "<img class='a-right next slick-next' src='assets/images/arrow_blue_right.png' alt='arrow_blue_right' >",
        adaptiveHeight: true, 
        responsive: [{
            breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
            }
        ]
    });


    $('.faq_container li .head').click(function() {
        $(this).parent('li').toggleClass('active').siblings('li').removeClass('active');
        if ($('.faq-content-wrap').is(':visible')) {
            $(".faq-content-wrap").slideUp(300);
        }
        if ($(this).next(".faq-content-wrap").is(':visible')) {
            $(this).next(".faq-content-wrap").slideUp(300);
        } else {
            $(this).next(".faq-content-wrap").slideDown(300);
        }
    });


    $('.get-btn a').click(function() {
        jQuery(".hidden-slider").addClass("active");
    });

    $('.ply-icon-hidden a').click(function() {
        jQuery(".hidden-slider").removeClass("active");
    });

    $('.ply-icon a').click(function() {
        jQuery(".ncontact_img .video").addClass("active");
    });

    // Dating app slider for dating page 
    if($(window).width() > 767) {
        $('.on_demand_list_slider').slick({
          centerPadding: '60px',
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
    }
    


    // Datting app slider
    $(".slider_number").slick({
        autoplay: true,
        vertical: true,
        dots: true,
        arrows: false,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            var pageNumber = (i + 1).toString().padStart(2, '0'); // Add leading zeros
            return '<a class="dot">' + pageNumber + '</a>';
        }
       
    });

    $('.tech-stack-slider').slick({
      dots: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,  
      autoplay: true,
      infinite: true,   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }        
      ]
    });

    $('.screen-shout').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }        
      ]
    });



// Click event for next button

  jQuery('.tabContent div:not(:first)').toggle();  
    jQuery('.tabs li').click(function () {   
        var position = jQuery(this).position();
        var corresponding = jQuery(this).data("id");
        scroll = jQuery('.tabs').scrollLeft();
        jQuery('.tabs').animate({
            'scrollLeft': scroll + position.left - 30
        }, 200);
        jQuery('.tabContent div').hide();
        jQuery('div.' + corresponding).toggle();
        jQuery('.tabs li').removeClass('active');
        jQuery(this).addClass('active');
    });

// Ktor page slider
    $('.single-item').slick({
      dots: false,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 1, 
      autoplay: true, 
    });

// CI/CD
    $('.aws-certified-slider').slick({
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


$(document).ready(function() {
    var $sectionScrollOption = $('.section_scroll_option');
    var $links = $('.scroll_option a');
    var headerHeight = $('header').outerHeight(); 
    var $objective = $('#objective');
    var $footerContactForm = $('#footer-contact-form');
    
    $sectionScrollOption.hide();
    
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if ($objective.length && $footerContactForm.length) {
            var objectiveTop = $objective.offset().top;
            var footerContactFormTop = $footerContactForm.offset().top;
            var sectionScrollOptionHeight = $sectionScrollOption.outerHeight();

            var showPosition = objectiveTop - headerHeight - 100; 
            var hidePosition = footerContactFormTop - sectionScrollOptionHeight + 150; 

            if (scrollPosition >= showPosition && scrollPosition + windowHeight < hidePosition) {
                $sectionScrollOption.fadeIn();
            } else {
                $sectionScrollOption.fadeOut();
            }
        }
        
        $links.each(function() {
            var target = $(this).attr('href');
            var $targetSection = $(target);

            if ($targetSection.length) { // Check if the section exists
                var targetTop = $targetSection.offset().top;
                var targetBottom = targetTop + $targetSection.outerHeight();

                if (scrollPosition >= targetTop - windowHeight / 2 + headerHeight && scrollPosition < targetBottom - windowHeight / 2 + headerHeight) {
                    $links.removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            }
        });
    });

    // Smooth scrolling with offset
    $('.scroll_option a').click(function(event) {
        event.preventDefault(); 
        var target = $(this).attr('href');
        var $target = $(target);

        if ($target.length) { // Check if target exists
            var targetPosition = $target.offset().top - headerHeight; 
            window.scroll({
                top: targetPosition,
                left: 0,
                behavior: 'smooth'
            });
        }
    });    

    $(window).trigger('scroll');
});




// chalanges section height 
$(document).ready(function() {
    function setCustomSectionHeight() {
        var technicalChallengesHeight = $('.technical-challenges-class').outerHeight();
        $('.custom_section').css('height', technicalChallengesHeight);
    }
    
    setCustomSectionHeight();
    
    $(window).resize(function() {
        setCustomSectionHeight();
    });
});


$(document).ready(function(){
    function addClassToSpecificColumns() {
        $('.custom-row').each(function() {
            var columns = $(this).children('div[class^="stable_main"]');
            
            columns.removeClass('specific-column');
            
            columns.each(function(index) {
                if ((index + 1) % 3 == 2) { 
                    $(this).addClass('specific-column');
                }
            });
        });
    }
    
    addClassToSpecificColumns();
    
    $(window).resize(function() {
        addClassToSpecificColumns();
    });
});



// Leads pages jquery
var headerHeight = jQuery('.whitelable-header-bg, .home_header').outerHeight();
jQuery('.whitelable-hero-section, .order-form-main').css('margin-top', headerHeight + 'px')

var header = jQuery('.whitelable-header-bg');
var toggleClass = 'is-sticky';

jQuery(window).on('scroll', function() {
    var currentScroll = jQuery(window).scrollTop();
    if (currentScroll > 150) {
        header.addClass(toggleClass);
    } else {
        header.removeClass(toggleClass);
    }
});


if (
  window.location.href.indexOf('well-architected-framework-review-order-form') !== -1 ||
  window.location.href.indexOf('aws-well-architected-framework-review') !== -1
) {
  jQuery('body').addClass('aws-page');
}


jQuery('.mockup-screen-slider').slick({
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 639,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }
  ]
});

$('.mr-partner-section .partner').slick({
    speed: 5000,                    
    autoplay: true,                 
    autoplaySpeed: 0,                
    cssEase: 'linear',               
    infinite: true,                  
    slidesToShow: 5,                
    slidesToScroll: 1,              
    arrows: false,                   
    dots: false,                     
    pauseOnHover: false,             
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }    
    ]
});

// js used for testimonial page
    if (window.location.href.indexOf("testimonial/index.html") > -1) {
        $("body").addClass("testimonial-page");
    }
    var blogheaderHeight = jQuery('.testimonial-page .home_header').outerHeight();
    jQuery('.testimonial-page .blog-details-page').css('margin-top', blogheaderHeight + 'px')

// For MR pages
    $('.new-mr-logos').slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true, 
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }    
        ]
    });

    const targetURLs = ["/market-research/", "crm-software-development/index.html", "doctor-on-demand-app", "e-learning-app-development"];

    if (targetURLs.some(url => window.location.href.indexOf(url) > -1)) {
        $("body").addClass("Custom-header-color");
    }
    var blogheaderHeight = jQuery('.Custom-header-color .home_header').outerHeight();
    jQuery('.Custom-header-color .mr-landing-hero, .Custom-header-color .custom-hero').css('padding-top', blogheaderHeight + 'px')

    // Blog page js
    $(document).ready(function () {
        if ($('.blog-listing-page').length > 0) {
            $('body').addClass('Custom-header-color-blog');
            
            // Calculate the header height
            var blogheaderHeight = $('.Custom-header-color-blog .home_header').outerHeight();
            
            // Apply padding-top to the .blog-listing-page
            $('.blog-listing-page').css('padding-top', blogheaderHeight + 'px');
        }
    });

    // Add Class on service page header
    $(document).ready(function() {
        if (window.location.href.indexOf("services/index.html") > -1) {
            $("body").addClass("services-page");
            var serviceheaderHeight = $('.services-page .home_header').outerHeight();
            $('.service-page-hero').css('margin-top', serviceheaderHeight + 'px');
        }
    });

    // Add Class on blockchain-solution page header
    $(document).ready(function () {
        if (window.location.href.match(/blockchain|blockchain-development|blockchain-development-company/)) {
            $("body").addClass("blockchain-page");
            var serviceheaderHeight = $('.blockchain-page .home_header').outerHeight();
            $('.service-page-hero').css('margin-top', serviceheaderHeight + 'px');
        }
    });

    // Service page trusted by slider
    $('.trusted-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplaySpeed: 3000,
                autoplay: true, 
                speed: 2000,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                autoplaySpeed: 3000,
                autoplay: true, 
                speed: 2000,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                autoplaySpeed: 3000,
                autoplay: true, 
                speed: 2000,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }        
        ]
    });

    $(".modern-slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: true,
    });


$('.testimonials-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
});



// service page custom accordion
$(".process-accordion").on("click", function (e) {
    e.preventDefault(); 
    $(".process-accordion").removeClass("active");
    $(this).addClass("active");
});
$('.process-accordion').each(function(index) {
    $(this).find('.numbers').first().text(`${index + 1}.`);
    $(this).find('.numbers.large').text(`${index + 1}.`);
});


$('.footer-counter-item h2').each(function () {
    var $this = $(this);
    var text = $this.text();
    var sign = text.replace(/[0-9]/g, ''); // Sign aur non-numeric characters alag karein
    var finalValue = parseInt(text.replace(/[^0-9]/g, '')); // Sirf numeric part nikaalein

    if (!isNaN(finalValue)) { // Agar numeric part valid hai
        $this.prop('Counter', 0).animate({
            Counter: finalValue
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $this.text(Math.ceil(now) + sign); // Animate hote waqt sign add karein
            },
            complete: function () {
                $this.text(finalValue.toLocaleString() + sign); // Final value ke sath formatting rakhein
            }
        });
    }
});
AOS.init({
    duration: 1200,
});



