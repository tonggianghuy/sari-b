"use strict";function _defineProperty(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}!function(a){function e(){a(window).width()<=991&&a(".dropdown-submenu a").on("click",function(e){a(this).next("ul").toggle(),e.stopPropagation(),e.preventDefault()})}var o,t,s,i,n,l,r,d,c,u,p;function f(){jQuery(".height-emulator").css({height:jQuery(".footer--fixed").outerHeight(!0)})}function g(e,o){for(var t=""+e;t.length<o;)t="0"+t;return t}a(document).ready(function(){e(!0),a(window).resize(function(){e(!1)})}),function(){a('[data-toggle="navbarToggler"]').click(function(){a(".navbar").toggleClass("active"),a("body").toggleClass("offcanvas--open")}),a(".navbar-toggler").click(function(){a(".navbar-toggler-icon").toggleClass("active")});var o=a(".navbar-sticky");a(window).on("scroll load",function(){var e=a(window).scrollTop();120<=e?o.addClass("navbar-sticky--moved-up"):o.removeClass("navbar-sticky--moved-up"),250<=e?o.addClass("navbar-sticky--transitioned"):o.removeClass("navbar-sticky--transitioned"),500<=e?o.addClass("navbar-sticky--on"):o.removeClass("navbar-sticky--on")})}(),function(){var e=a(".sticky-block");if(0<e.length){var t=e.position(),s=a(".sticky-elements"),i=a(".stickyBlockEndPoint"),n=i.position();a(window).on("scroll load",function(){var e=a(window).scrollTop(),o=n.top-parseInt(i.height(),10);e>=t.top&&e<=o?s.addClass("sticky-elements--on"):s.removeClass("sticky-elements--on")})}}(),a(".navbar .nav-item .nav-link, .smooth-scroll  a").on("click",function(e){var o=a(this);a(".header").outerHeight(),a("html, body").stop().animate({scrollTop:a(o.attr("href")).offset().top-"5"+"px"},1200,"easeInOutExpo"),e.preventDefault()}),a.extend(a.easing,{easeInOutExpo:function(e,o,t,s,i){return 0==o?t:o==i?t+s:(o/=i/2)<1?s/2*Math.pow(2,10*(o-1))+t:s/2*(2-Math.pow(2,-10*--o))+t}}),window.sr=ScrollReveal(),sr.reveal(".reveal",{duration:1e3,delay:0,scale:1,opacity:.2,easing:"ease-in-out"}),o=a(".lang-dropdown"),a(".lang-selector__button").on("click",function(e){o.slideToggle("fast"),e.stopPropagation()}),a(".lang-dropdown__item").on("click",function(e){o.hide(),e.stopPropagation()}),a("body").on("click",function(){o.hide()}),a(".background-image-holder").each(function(){var e=a(this).attr("src");a(this).parent().css("background-image","url("+e+")"),a(this).parent().css("background-repeat","no-repeat"),a(this).hide()}),a(".lightbox").venobox(),t=a(".swipe-tabs"),s=a(".swipe-tab"),i=a(".swipe-tabs-container"),n=0,l="active-tab",t.on("init",function(e,o){i.removeClass("invisible"),t.removeClass("invisible"),n=o.getCurrent(),s.removeClass(l),a(".swipe-tab[data-slick-index="+n+"]").addClass(l)}),t.slick({slidesToShow:2,slidesToScroll:1,arrows:!1,infinite:!1,swipeToSlide:!0,touchThreshold:10}),i.slick({asNavFor:t,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!1,swipeToSlide:!0,draggable:!1,touchThreshold:10}),s.on("click",function(e){n=a(this).data("slick-index"),s.removeClass(l),a(".swipe-tab[data-slick-index="+n+"]").addClass(l),t.slick("slickGoTo",n),i.slick("slickGoTo",n)}),i.on("swipe",function(e,o,t){n=a(this).slick("slickCurrentSlide"),s.removeClass(l),a(".swipe-tab[data-slick-index="+n+"]").addClass(l)}),a(".features--slider-2 .slider-tabs").slick({slidesToShow:2,slidesToScroll:1,asNavFor:".features--slider-2 .slider-contents",dots:!1,arrows:!1,centerMode:!1,autoplay:!0,autoplaySpeed:5e3,autoplayTimeout:5e3,focusOnSelect:!0,responsive:[{breakpoint:500,settings:{slidesToShow:2}},{breakpoint:992,settings:{slidesToShow:3}}]}),a(".features--slider-2 .slider-contents").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,autoplayTimeout:5e3,dots:!1,arrows:!1,asNavFor:".features--slider-2 .slider-tabs"}),a('a[data-toggle="tab"]').on("shown.bs.tab",function(e){a(e.target).find(".slider").each(function(){a(this).slick("setPosition")})}),a(".people-image").slick((_defineProperty(r={slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,dots:!1,infinite:!0},"autoplay",!0),_defineProperty(r,"arrows",!1),_defineProperty(r,"responsive",[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]),r)),a(".branch-image").slick({dots:!1,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0,arrows:!1,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),d=a(".card__value"),c=a(".card__value--focused"),a(".pricing-tab .btn").on("click",function(){a(".pricing-tab .btn").removeClass("btn--bg-primary"),a(this).addClass("btn--bg-primary")}),a(".data-type-monthly").on("click",function(){d.fadeIn("fast"),c.css("display","none")}),a(".data-type-yearly").on("click",function(){d.css("display","none"),c.fadeIn("fast")}),a(".testimonial-carousel .testimonial-content").slick({slidesToShow:1,slidesToScroll:1,asNavFor:".testimonial-carousel .testimonial-image",dots:!1,arrows:!1,centerMode:!1,focusOnSelect:!0}),a(".testimonial-carousel .testimonial-image").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,asNavFor:".testimonial-carousel .testimonial-content",dots:!0,customPaging:function(e,o){return'<button class="slick-dots--long" id='+o+"></button>"},arrows:!1}),a('a[data-toggle="tab"]').on("shown.bs.tab",function(e){a(e.target).find(".slider").each(function(){a(this).slick("setPosition")})}),f(),jQuery(window).resize(function(){f()}),u=a("#date").data("date"),p=new Date(u).getTime(),setInterval(function(){var e=(new Date).getTime(),o=p-e;document.getElementById("days")&&(document.getElementById("days").innerText=g(Math.floor(o/864e5)),document.getElementById("hours").innerText=g(Math.floor(o%864e5/36e5),2),document.getElementById("minutes").innerText=g(Math.floor(o%36e5/6e4),2),document.getElementById("seconds").innerText=g(Math.floor(o%6e4/1e3),2))},1e3),a(window).on("load",function(){a(".preloader-wapper").addClass("loaded"),a(".preloader-wapper").hasClass("loaded")&&a(".preloader-main").delay(1200).queue(function(){a(this).remove()})})}(jQuery);