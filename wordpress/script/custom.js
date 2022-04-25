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
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 3=0.1,2;0.6("7",4(){8(0.9){0.1="📚\\a\\b\\c\\d\\e\\f\\g\\h\\i\\j?";k(2)}l{0.1="🎉\\m\\n\\o\\p\\q\\r\\s\\t?";2=u(4(){0.1=3},v)}});',32,32,'document|title|titleTime|OriginTitile|function|var|addEventListener|visibilitychange|if|hidden|u5982|u4f55|u624d|u80fd|u63d0|u5347|u5b66|u4e60|u6548|u7387|clearTimeout|else|u53c8|u56de|u6765|u5956|u52b1|u81ea|u5df1|u4e86|setTimeout|2000'.split('|'),0,{}));
//xs
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2 3=\'5://ぬ.ひ.みんな/6\';7($){$(0(){$(\'8[9-1]\').c(0(i){2 b=4;$.d(3+4.e.1+\'.1\',{},0(a){b.f=g.h.j(a)})})})}k{}',21,21,'function|txt|var|baseurl|this|https|art|if|div|data|||each|get|dataset|innerHTML|window|Base64||decode|else'.split('|'),0,{}));

//img
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1 2=\'5://ぬ.ひ.みんな/3\';6($){$(0(){$(\'3[7-8=9]\').c(0(i){1 b=4;$.d(2+4.e.f+\'.g\',0(a){b.h=a.j+a.k})})})}l{}',22,22,'function|var|imgurl|img|this|https|if|data|aes|true|||each|getJSON|dataset|original|json|src||imgtype|imgdata|else'.split('|'),0,{}));

//base64
!function(t,n){var r,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r=t.Base64,(e=n()).noConflict=function(){return t.Base64=r,e},t.Meteor&&(Base64=e),t.Base64=e)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:this,(function(){"use strict";var t,n="3.7.2",r="function"==typeof atob,e="function"==typeof btoa,o="function"==typeof Buffer,u="function"==typeof TextDecoder?new TextDecoder:void 0,i="function"==typeof TextEncoder?new TextEncoder:void 0,f=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),c=(t={},f.forEach((function(n,r){return t[n]=r})),t),a=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,d=String.fromCharCode.bind(String),s="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):function(t,n){return void 0===n&&(n=function(t){return t}),new Uint8Array(Array.prototype.slice.call(t,0).map(n))},l=function(t){return t.replace(/=/g,"").replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"}))},h=function(t){return t.replace(/[^A-Za-z0-9\+\/]/g,"")},p=function(t){for(var n,r,e,o,u="",i=t.length%3,c=0;c<t.length;){if((r=t.charCodeAt(c++))>255||(e=t.charCodeAt(c++))>255||(o=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");u+=f[(n=r<<16|e<<8|o)>>18&63]+f[n>>12&63]+f[n>>6&63]+f[63&n]}return i?u.slice(0,i-3)+"===".substring(i):u},y=e?function(t){return btoa(t)}:o?function(t){return Buffer.from(t,"binary").toString("base64")}:p,A=o?function(t){return Buffer.from(t).toString("base64")}:function(t){for(var n=[],r=0,e=t.length;r<e;r+=4096)n.push(d.apply(null,t.subarray(r,r+4096)));return y(n.join(""))},b=function(t,n){return void 0===n&&(n=!1),n?l(A(t)):A(t)},g=function(t){if(t.length<2)return(n=t.charCodeAt(0))<128?t:n<2048?d(192|n>>>6)+d(128|63&n):d(224|n>>>12&15)+d(128|n>>>6&63)+d(128|63&n);var n=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return d(240|n>>>18&7)+d(128|n>>>12&63)+d(128|n>>>6&63)+d(128|63&n)},B=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,x=function(t){return t.replace(B,g)},C=o?function(t){return Buffer.from(t,"utf8").toString("base64")}:i?function(t){return A(i.encode(t))}:function(t){return y(x(t))},m=function(t,n){return void 0===n&&(n=!1),n?l(C(t)):C(t)},v=function(t){return m(t,!0)},U=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,F=function(t){switch(t.length){case 4:var n=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return d(55296+(n>>>10))+d(56320+(1023&n));case 3:return d((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return d((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},w=function(t){return t.replace(U,F)},S=function(t){if(t=t.replace(/\s+/g,""),!a.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));for(var n,r,e,o="",u=0;u<t.length;)n=c[t.charAt(u++)]<<18|c[t.charAt(u++)]<<12|(r=c[t.charAt(u++)])<<6|(e=c[t.charAt(u++)]),o+=64===r?d(n>>16&255):64===e?d(n>>16&255,n>>8&255):d(n>>16&255,n>>8&255,255&n);return o},E=r?function(t){return atob(h(t))}:o?function(t){return Buffer.from(t,"base64").toString("binary")}:S,D=o?function(t){return s(Buffer.from(t,"base64"))}:function(t){return s(E(t),(function(t){return t.charCodeAt(0)}))},R=function(t){return D(T(t))},z=o?function(t){return Buffer.from(t,"base64").toString("utf8")}:u?function(t){return u.decode(D(t))}:function(t){return w(E(t))},T=function(t){return h(t.replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})))},Z=function(t){return z(T(t))},j=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}},I=function(){var t=function(t,n){return Object.defineProperty(String.prototype,t,j(n))};t("fromBase64",(function(){return Z(this)})),t("toBase64",(function(t){return m(this,t)})),t("toBase64URI",(function(){return m(this,!0)})),t("toBase64URL",(function(){return m(this,!0)})),t("toUint8Array",(function(){return R(this)}))},O=function(){var t=function(t,n){return Object.defineProperty(Uint8Array.prototype,t,j(n))};t("toBase64",(function(t){return b(this,t)})),t("toBase64URI",(function(){return b(this,!0)})),t("toBase64URL",(function(){return b(this,!0)}))},P={version:n,VERSION:"3.7.2",atob:E,atobPolyfill:S,btoa:y,btoaPolyfill:p,fromBase64:Z,toBase64:m,encode:m,encodeURI:v,encodeURL:v,utob:x,btou:w,decode:Z,isValid:function(t){if("string"!=typeof t)return!1;var n=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(n)||!/[^\s0-9a-zA-Z\-_]/.test(n)},fromUint8Array:b,toUint8Array:R,extendString:I,extendUint8Array:O,extendBuiltins:function(){I(),O()},Base64:{}};return Object.keys(P).forEach((function(t){return P.Base64[t]=P[t]})),P}));
//# sourceMappingURL=/sm/79de78edcfa94236e4c8354f91262971e185c3633bb865b6fc17942e93a40207.map