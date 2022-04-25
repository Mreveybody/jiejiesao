$(function() {
	//erx:Navbar
	var erxUrl = location.href;
	$(".erx-menu > li > a").each(function() {
		if (this.href == erxUrl.toString().split("#")[0]) {
			$(this).parent().addClass("cu");
			return false;
		}
	});
	$(".erx-menu > li:has('ul')").each(function() {
		$(this).children("a").append("<i></i>");
	});
	$(".erx-menu > li:has('ul')").mouseenter(function(){
		$(this).addClass("cu").children("ul").stop(true, true).delay(50).fadeIn(erxIsmobile()?0:200);
	}).mouseleave(function(){
		$(this).removeClass("cu").children("ul").stop(true, true).delay(50).hide(0);
	});
	$('.erx-mb-nav-ctrl').click(function(){
		$(".erx-menu").toggleClass("active");
	});
    $(document).bind("click",function(e){
        if($('.erx-mb-nav-ctrl').is(":visible") && !$(e.target).closest(".erx-mb-nav-ctrl").length && !$(e.target).closest(".erx-menu").length){
			$(".erx-menu").removeClass("active");
        }
    });
	//Mobile
	$(window).resize(function(){
		erxWritingMobileNav();
	});
	function erxWritingMobileNav(){
		if(erxIsmobile()){
			$(".erx-menu>li:has(ul)").each(function(){
				$(this).attr("data-minav", 0);
			});
		}else{
			$(".erx-menu>li:has(ul)").removeAttr("data-minav");
			$(".erx-search-form .sint").focus(function(){
				$(".erx-menu").addClass("blur");
			}).blur(function(){
				$(".erx-menu").removeClass("blur");
			});
		}
	}
	erxWritingMobileNav();
	$(".erx-menu > li:has('ul') > a").click(function(){
		var minav = $(this).parent().attr("data-minav")*1;
		if(!minav && erxIsmobile()){
			$(this).parent().attr("data-minav", 1).siblings().attr("data-minav", 0);
			return false;
		}
	});
    //erx:Catalog
    $("#divCatalog .function_c > ul > li:has('ul')").each(function(){
        $(this).append('<i></i>');
    });
	$('#divCatalog .function_c > ul > li').hoverDelay({
        hoverEvent:function(){
        	$(this).children("ul").stop(true, false).slideDown();
        },
        outEvent: function(){
            $(this).children("ul").slideUp();
        }
    });
    //erx:Gotop
	$(".erx-gotop").click(function(){
		$("html, body").animate({ scrollTop: 0 },300);
		return false;
	});
	var erxSctop = $(window).scrollTop(), erxSnum = 500;
	if(erxSctop > erxSnum){
		$(".erx-gotop").addClass("active");
	}
	$(window).scroll(function(){
		erxSctop = $(window).scrollTop();
		if(erxSctop > erxSnum){
			$(".erx-gotop").addClass("active");
		}else{
			$(".erx-gotop").removeClass("active");
		}		
	});
	//erx:Qrcode
	var bloghost = location.href;
	if($(".erx-qrcode").length){
		if($(".erx-qrcode .q").length){
		    $.getScript(bloghost+"wordpress/script/jquery-qrcode.min.js",function() {
		        $(".erx-qrcode .q").qrcode({
		        	text:erxUrl,
		        	size:90
		        });
		        $(".erx-qrcode").animate({opacity:1}, 500);
		    });
		}else{
			$(".erx-qrcode").animate({opacity:1}, 500);
		}
	}
	//erx:CanvasBg
	if($("#banner-canvasbg").length){
	    $.getScript(bloghost+"wordpress/script/canvasbg.js",function() {
			var waves = new Waves('#banner-canvasbg');
			waves.animate();
	    	$("#banner-canvasbg").delay(600).animate({opacity:1}, 1500);
	    });
	}
	//erx:Sidebar
	if($(window).width()>1080){
		$('.erx-sidebar').theiaStickySidebar({
			additionalMarginTop: 20
		});
	}
	function erxIsmobile(){
		var pwt = $(window).width();
		if (pwt < 1080 || /Android|Windows Phone|iPhone|iPod/i.test(navigator.userAgent)) {
			return true;
		}else{
			return false;
		}
	}
});
$.fn.hoverDelay = function(options){
    var defaults = {
        hoverDuring: 300,
        outDuring: 1,
        hoverEvent: function(){
            $.noop();
        },
        outEvent: function(){
            $.noop();
        }
    };
    var sets = $.extend(defaults,options || {});
    var hoverTimer, outTimer;
    return $(this).each(function(){
        var that = this;
        $(this).mouseenter(function(){
            clearTimeout(outTimer);
            hoverTimer = setTimeout(function () { if (typeof sets.hoverEvent == 'function') sets.hoverEvent.call(that) }, sets.hoverDuring);
        }).mouseleave(function(){
            clearTimeout(hoverTimer);
            outTimer = setTimeout(function () { if (typeof sets.outEvent == 'function') sets.outEvent.call(that) }, sets.outDuring);
        });    
    });
}
if(window.console && window.console.log){
    console.log('\n %c Wordpress二次开发定制 %c \u9020\u798f\u4eba\u7c7b \n', 'color:#fff;background:#f80;padding:5px 0;', 'color:#fff;background:#333;padding:5px 0;');
    console.log("%c \u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0062\u0061\u0069\u0064\u0075\u002e\u0063\u006f\u006d", "");
};
//Data Analysis
var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?e3ab77b323939ccd692307b2e548afd0";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();

//Friendly Tips
var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
	if (document.hidden) {
		document.title = "📚如何才能提升学习效率?";
		clearTimeout(titleTime)
	} else {
		document.title = "🎉又回来奖励自己了?";
		titleTime = setTimeout(function() {
			document.title = OriginTitile
		},
		2000)
	}
});
//xs
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 3=\'5://ぬ.ひ.みんな/6\';7($){$(0(){$(\'8[9-1]\').c(0(i){2 b=4;$.d(3+4.e.1+\'.1\',{},0(a){b.f=g.h.j(a)})})})}k{}',21,21,'function|txt|var|baseurl|this|https|art|if|div|data|||each|get|dataset|innerHTML|window|Base64||decode|else'.split('|'),0,{}));

//img
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1 2=\'5://ぬ.ひ.みんな/3\';6($){$(0(){$(\'3[7-8=9]\').c(0(i){1 b=4;$.d(2+4.e.f+\'.g\',0(a){b.h=a.j+a.k})})})}l{}',22,22,'function|var|imgurl|img|this|https|if|data|aes|true|||each|getJSON|dataset|original|json|src||imgtype|imgdata|else'.split('|'),0,{}));