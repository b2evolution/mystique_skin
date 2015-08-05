if (isIE == 'undefined') var isIE = false;
if (isIE6 == 'undefined') var isIE6 = false;
if (lightbox == 'undefined') var lightbox = 0;

/* easing */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) { //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, - 10 * t / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, - 10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, - 10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);
    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, - 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});

/*
  	loopedSlider 0.5.4 - jQuery plugin
 	written by Nathan Searles
 	http://nathansearles.com/loopedslider/

 	Copyright (c) 2009 Nathan Searles (http://nathansearles.com/)
 	Dual licensed under the MIT (MIT-LICENSE.txt)
 	and GPL (GPL-LICENSE.txt) licenses.

 	Built for jQuery library
 	http://jquery.com

    - MODIFIED FOR MYSTIQUE! BE CAREFUL WHEN UPDATING! */

(function (jQuery) {
  jQuery.fn.loopedSlider = function (options) {
    var defaults = {
      container: '.slide-container',
      slides: '.slides',
      pagination: '.pagination',
      containerClick: false,
      // Click container for next slide
      autoStart: 0,
      // Set to positive number for auto start and interval time
      restart: 0,
      // Set to positive number for restart and restart time
      slidespeed: 333,
      // Speed of slide animation
      fadespeed: 133,
      // Speed of fade animation
      autoHeight: true,
      // Set to positive number for auto height and animation speed
      easing: 'easeOutQuart'
    };
    this.each(function () {
      var obj = jQuery(this);
      var o = jQuery.extend(defaults, options);
      var pagination = jQuery(o.pagination + ' li a', obj);
      var m = 0;
      var t = 1;
      var s = jQuery(o.slides, obj).find('li.slide').size();
      var w = jQuery(o.slides, obj).find('li.slide').outerWidth();
      var p = 0;
      var u = false;
      var n = 0;
      var interval = 0;
      var restart = 0;
      jQuery(o.slides, obj).css({
        width: (s * w)
      });
      jQuery(o.slides, obj).find('li.slide').each(function () {
        jQuery(this).css({
          position: 'absolute',
          left: p,
          display: 'block'
        });
        p = p + w;
      });
      jQuery(pagination, obj).each(function () {
        n = n + 1;
        jQuery(this).attr('rel', n);
        jQuery(pagination.eq(0), obj).parent().addClass('active');
      });
      jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
        position: 'absolute',
        left: - w
      });
      if (s > 3) {
        jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
          position: 'absolute',
          left: - w
        });
      }
      if (o.autoHeight) {
        autoHeight(t);
      }
      jQuery('.next', obj).click(function () {
        if (u === false) {
          animate('next', true);
          if (o.autoStart) {
            if (o.restart) {
              autoStart();
            } else {
              clearInterval(sliderIntervalID);
            }
          }
        }
        return false;
      });
      jQuery('.previous', obj).click(function () {
        if (u === false) {
          animate('prev', true);
          if (o.autoStart) {
            if (o.restart) {
              autoStart();
            } else {
              clearInterval(sliderIntervalID);
            }
          }
        }
        return false;
      });
      if (o.containerClick) {
        jQuery(o.container, obj).click(function () {
          if (u === false) {
            animate('next', true);
            if (o.autoStart) {
              if (o.restart) {
                autoStart();
              } else {
                clearInterval(sliderIntervalID);
              }
            }
          }
          return false;
        });
      }
      jQuery(pagination, obj).click(function () {
        if (jQuery(this).parent().hasClass('active')) {
          return false;
        } else {
          t = jQuery(this).attr('rel');
          jQuery(pagination, obj).parent().siblings().removeClass('active');
          jQuery(this).parent().addClass('active');
          animate('fade', t);
          if (o.autoStart) {
            if (o.restart) {
              autoStart();
            } else {
              clearInterval(sliderIntervalID);
            }
          }
        }
        return false;
      });
      if (o.autoStart) {
        sliderIntervalID = setInterval(function () {
          if (u === false) {
            animate('next', true);
          }
        }, o.autoStart);

        function autoStart() {
          if (o.restart) {
            clearInterval(sliderIntervalID);
            clearInterval(interval);
            clearTimeout(restart);
            restart = setTimeout(function () {
              interval = setInterval(function () {
                animate('next', true);
              }, o.autoStart);
            }, o.restart);
          } else {
            sliderIntervalID = setInterval(function () {
              if (u === false) {
                animate('next', true);
              }
            }, o.autoStart);
          }
        };
      }

      function current(t) {
        if (t === s + 1) {
          t = 1;
        }
        if (t === 0) {
          t = s;
        }
        jQuery(pagination, obj).parent().siblings().removeClass('active');
        jQuery(pagination + '[rel="' + (t) + '"]', obj).parent().addClass('active');
      };

      function autoHeight(t) {
        if (t === s + 1) {
          t = 1;
        }
        if (t === 0) {
          t = s;
        }
        var getHeight = jQuery(o.slides, obj).find('li.slide:eq(' + (t - 1) + ')', obj).outerHeight();
        jQuery(o.container, obj).animate({
          height: getHeight
        }, o.autoHeight, o.easing);
      };

      function animate(dir, clicked) {
        u = true;
        switch (dir) {
        case 'next':
          t = t + 1;
          m = (-(t * w - w));
          current(t);
          if (o.autoHeight) {
            autoHeight(t);
          }
          if (s < 3) {
            if (t === 3) {
              jQuery(o.slides, obj).find('li.slide:eq(0)').css({
                left: (s * w)
              });
            }
            if (t === 2) {
              jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
                position: 'absolute',
                left: (w)
              });
            }
          }
          jQuery(o.slides, obj).animate({
            left: m
          }, o.slidespeed, o.easing, function () {
            if (t === s + 1) {
              t = 1;
              jQuery(o.slides, obj).css({
                left: 0
              }, function () {
                jQuery(o.slides, obj).animate({
                  left: m
                })
              });
              jQuery(o.slides, obj).find('li.slide:eq(0)').css({
                left: 0
              });
              jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
                position: 'absolute',
                left: - w
              });
            }
            if (t === s) jQuery(o.slides, obj).find('li.slide:eq(0)').css({
              left: (s * w)
            });
            if (t === s - 1) jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
              left: s * w - w
            });
            u = false;
          });
          break;
        case 'prev':
          t = t - 1;
          m = (-(t * w - w));
          current(t);
          if (o.autoHeight) {
            autoHeight(t);
          }
          if (s < 3) {
            if (t === 0) {
              jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
                position: 'absolute',
                left: (-w)
              });
            }
            if (t === 1) {
              jQuery(o.slides, obj).find('li.slide:eq(0)').css({
                position: 'absolute',
                left: 0
              });
            }
          }
          jQuery(o.slides, obj).animate({
            left: m
          }, o.slidespeed, o.easing, function () {
            if (t === 0) {
              t = s;
              jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
                position: 'absolute',
                left: (s * w - w)
              });
              jQuery(o.slides, obj).css({
                left: - (s * w - w)
              });
              jQuery(o.slides, obj).find('li.slide:eq(0)').css({
                left: (s * w)
              });
            }
            if (t === 2) jQuery(o.slides, obj).find('li.slide:eq(0)').css({
              position: 'absolute',
              left: 0
            });
            if (t === 1) jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
              position: 'absolute',
              left: - w
            });
            u = false;
          });
          break;
        case 'fade':
          t = [t] * 1;
          m = (-(t * w - w));
          current(t);
          if (o.autoHeight) {
            autoHeight(t);
          }
          jQuery(o.slides, obj).find('li:slide').fadeOut(o.fadespeed, function () {
            jQuery(o.slides, obj).css({
              left: m
            });
            jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
              left: s * w - w
            });
            jQuery(o.slides, obj).find('li.slide:eq(0)').css({
              left: 0
            });
            if (t === s) {
              jQuery(o.slides, obj).find('li.slide:eq(0)').css({
                left: (s * w)
              });
            }
            if (t === 1) {
              jQuery(o.slides, obj).find('li.slide:eq(' + (s - 1) + ')').css({
                position: 'absolute',
                left: - w
              });
            }
            jQuery(o.slides, obj).find('li:slide').fadeIn(o.fadespeed);
            u = false;
          });
          break;
        default:
          break;
        }
      };
    });
  };
})(jQuery);

/* "clearField" by Stijn Van Minnebruggen
   http://www.donotfold.be  */
(function (jQuery) {
  jQuery.fn.clearField = function (settings) {
    settings = jQuery.extend({
      blurClass: 'clearFieldBlurred',
      activeClass: 'clearFieldActive'
    }, settings);
    jQuery(this).each(function () {
      var el = jQuery(this);
      if (el.hasClass('password') && el.hasClass('label')) {
        el.show();
        var $target = jQuery('#' + el.attr('alt'));
        $target.hide();

        $target.blur(function () {
          if (el.hasClass('password') && el.hasClass('label') && (jQuery(this).val() == (''))) {
            jQuery(this).hide();
            el.show();
            el.val(el.attr('rel')).removeClass(settings.activeClass).addClass(settings.blurClass);
          }
        });

      }

      if (el.attr('rel') == undefined) {
        el.attr('rel', el.val()).addClass(settings.blurClass);
      }
      el.focus(function () {
        if (el.val() == el.attr('rel')) {
          var v = '';
          if (el.attr('name') == 'url') v = 'http://';

          if (el.hasClass('password') && el.hasClass('label')) {
            el.hide();
            $target.show();
            $target.focus();
          }

          el.val(v).removeClass(settings.blurClass).addClass(settings.activeClass);
        }
      });
      el.blur(function () {
        if ((el.val() == ('')) || ((el.attr('name') == 'url') && (el.val() == ('http://')))) {
          el.val(el.attr('rel')).removeClass(settings.activeClass).addClass(settings.blurClass);
        }
      });
    });
    return jQuery;
  };
})(jQuery);


/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 
 - MODIFIED FOR MYSTIQUE! BE CAREFUL WHEN UPDATING!

 */
(function (jQuery) {

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');


		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));
})(jQuery);

function liteboxCallback() {
  jQuery('.flickrGallery li a').fancyboxlite({
    'zoomSpeedIn': 333,
    'zoomSpeedOut': 333,
    'zoomSpeedChange': 133,
    'easingIn': 'easeOutQuart',
    'easingOut': 'easeInQuart',
    'overlayShow': true,
    'overlayOpacity': 0.75
  });
}

/*
 * jQuery Flickr - jQuery plug-in
 * Version 1.0, Released 2008.04.17
 *
 * Copyright (c) 2008 Daniel MacDonald (www.projectatomic.com)
 * Dual licensed GPL http://www.gnu.org/licenses/gpl.html
 * and MIT http://www.opensource.org/licenses/mit-license.php
 */
(function (jQuery) {
  jQuery.fn.flickr = function (o) {
    var s = {
      api_key: null,
      // [string]    required, see http://www.flickr.com/services/api/misc.api_keys.html
      type: null,
      // [string]    allowed values: 'photoset', 'search', default: 'flickr.photos.getRecent'
      photoset_id: null,
      // [string]    required, for type=='photoset'
      text: null,
      // [string]    for type=='search' free text search
      user_id: null,
      // [string]    for type=='search' search by user id
      group_id: null,
      // [string]    for type=='search' search by group id
      tags: null,
      // [string]    for type=='search' comma separated list
      tag_mode: 'any',
      // [string]    for type=='search' allowed values: 'any' (OR), 'all' (AND)
      sort: 'relevance',
      // [string]    for type=='search' allowed values: 'date-posted-asc', 'date-posted-desc', 'date-taken-asc', 'date-taken-desc', 'interestingness-desc', 'interestingness-asc', 'relevance'
      thumb_size: 's',
      // [string]    allowed values: 's' (75x75), 't' (100x?), 'm' (240x?)
      size: null,
      // [string]    allowed values: 'm' (240x?), 'b' (1024x?), 'o' (original), default: (500x?)
      per_page: 100,
      // [integer]   allowed values: max of 500
      page: 1,
      // [integer]   see paging notes
      attr: '',
      // [string]    optional, attributes applied to thumbnail <a> tag
      api_url: null,
      // [string]    optional, custom url that returns flickr JSON or JSON-P 'photos' or 'photoset'
      params: '',
      // [string]    optional, custom arguments, see http://www.flickr.com/services/api/flickr.photos.search.html
      api_callback: '?',
      // [string]    optional, custom callback in flickr JSON-P response
      callback: null // [function]  optional, callback function applied to entire <ul>
      // PAGING NOTES: jQuery Flickr plug-in does not provide paging functionality, but does provide hooks for a custom paging routine
      // within the <ul> created by the plug-in, there are two hidden <input> tags,
      // input:eq(0): current page, input:eq(1): total number of pages, input:eq(2): images per page, input:eq(3): total number of images
      // SEARCH NOTES: when setting type to 'search' at least one search parameter  must also be passed text, user_id, group_id, or tags
      // SIZE NOTES: photos must allow viewing original size for size 'o' to function, if not, default size is shown
    };
    if (o) jQuery.extend(s, o);
    return this.each(function () { // create unordered list to contain flickr images
      var list = jQuery('<ul class="clearfix">').appendTo(this);
      var url = jQuery.flickr.format(s);
      jQuery.getJSON(url, function (r) {
        if (r.stat != "ok") {
          for (i in r) {
            jQuery('<li>').text(i + ': ' + r[i]).appendTo(list);
          };
        } else {
          if (s.type == 'photoset') r.photos = r.photoset; // add hooks to access paging data
          list.append('<input type="hidden" value="' + r.photos.page + '" />');
          list.append('<input type="hidden" value="' + r.photos.pages + '" />');
          list.append('<input type="hidden" value="' + r.photos.perpage + '" />');
          list.append('<input type="hidden" value="' + r.photos.total + '" />');
          for (var i = 0; i < r.photos.photo.length; i++) {
            var photo = r.photos.photo[i]; // format thumbnail url
            var t = 'http://farm' + photo['farm'] + '.static.flickr.com/' + photo['server'] + '/' + photo['id'] + '_' + photo['secret'] + '_' + s.thumb_size + '.jpg'; //format image url
            var h = 'http://farm' + photo['farm'] + '.static.flickr.com/' + photo['server'] + '/' + photo['id'] + '_';
            switch (s.size) {
            case 'm':
              h += photo['secret'] + '_m.jpg';
              break;
            case 'b':
              h += photo['secret'] + '_b.jpg';
              break;
            case 'o':
              if (photo['originalsecret'] && photo['originalformat']) {
                h += photo['originalsecret'] + '_o.' + photo['originalformat'];
              } else {
                h += photo['secret'] + '_b.jpg';
              };
              break;
            default:
              h += photo['secret'] + '.jpg';
            };
            list.append('<li><a class="thumb" rel="flickr" href="' + h + '" ' + s.attr + ' title="' + photo['title'] + '"><img src="' + t + '" alt="' + photo['title'] + '" /></a></li>'); //galleryPreview("#flickrGallery li a.thumb","tooltip");
          };
          if (s.callback) s.callback(list);
        };
      });
    });
  }; // static function to format the flickr API url according to the plug-in settings
  jQuery.flickr = {
    format: function (s) {
      if (s.url) return s.url;
      var url = 'http://api.flickr.com/services/rest/?format=json&jsoncallback=' + s.api_callback + '&api_key=' + s.api_key;
      switch (s.type) {
      case 'photoset':
        url += '&method=flickr.photosets.getPhotos&photoset_id=' + s.photoset_id;
        break;
      case 'search':
        url += '&method=flickr.photos.search&sort=' + s.sort;
        if (s.user_id) url += '&user_id=' + s.user_id;
        if (s.group_id) url += '&group_id=' + s.group_id;
        if (s.tags) url += '&tags=' + s.tags;
        if (s.tag_mode) url += '&tag_mode=' + s.tag_mode;
        if (s.text) url += '&text=' + s.text;
        break;
      default:
        url += '&method=flickr.photos.getRecent';
      };
      if (s.size == 'o') url += '&extras=original_format';
      url += '&per_page=' + s.per_page + '&page=' + s.page + s.params;
      return url;
    }
  };
})(jQuery);

/* twitter functions  */
/* http://jquery-howto.blogspot.com/2009/04/jquery-twitter-api-plugin.html */
(function (jQuery) {
  jQuery.extend({
    jTwitter: function (username, fnk) {
      var url = "http://twitter.com/status/user_timeline/" + username + ".json?count=1&callback=?";
      var info = {};
      jQuery.getJSON(url, function (data) {
        if (typeof fnk == 'function') fnk.call(this, data[0].user);
      });
    }
  });
})(jQuery);



// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
// Modified by Stan Scates for https://github.com/StanScates/Tweet.js-Mod

(function (factory) {
	if (typeof define === 'function' && define.amd)
	define(['jquery'], factory); // AMD support for RequireJS etc.
	else
	factory(jQuery);
}(function ($) {
	$.fn.tweet = function(o){
		var s = $.extend({
			modpath: "/twitter/",                     // [string]   relative URL to Tweet.js mod (see https://github.com/StanScates/Tweet.js-Mod)
			username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
			list_id: null,                            // [integer]  ID of list to fetch when using list functionality
			list: null,                               // [string]   optional slug of list belonging to username
			favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
			query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
			avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
			count: 3,                                 // [integer]  how many tweets to display?
			fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
			page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
			retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
			intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
			outro_text: null,                         // [string]   do you want text AFTER your tweets?
			join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
			auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
			auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
			auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
			auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
			auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
			loading_text: null,                       // [string]   optional loading text, displayed while tweets load
			refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
			twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
			twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
			twitter_search_url: "api.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
			template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
			comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
				return tweet2["tweet_time"] - tweet1["tweet_time"];
			},
			filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
				return true;
			}
		// You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
		//   "loaded" -- triggered when tweets have been fetched and rendered
		}, o);

		// See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
		var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

		// Expand values inside simple string templates with {placeholders}
		function t(template, info) {
			if (typeof template === "string") {
				var result = template;
				for(var key in info) {
					var val = info[key];
					result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
				}
				return result;
			} else return template(info);
		}
		// Export the t function for use when passing a function as the 'template' option
		$.extend({tweet: {t: t}});

		function replacer (regex, replacement) {
			return function() {
				var returning = [];
				this.each(function() {
					returning.push(this.replace(regex, replacement));
				});
				return $(returning);
			};
		}

		function escapeHTML(s) {
			return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
		}

		$.fn.extend({
			linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
			// Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
			linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
				' <a href="https://twitter.com/search?q=%23$1'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'" class="tweet_hashtag">#$1</a>'),
			makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
		});

		function linkURLs(text, entities) {
			return text.replace(url_regexp, function(match) {
				var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
				var text = match;
				for(var i = 0; i < entities.length; ++i) {
					var entity = entities[i];
					if (entity.url == url && entity.expanded_url) {
						url = entity.expanded_url;
						text = entity.display_url;
						break;
					}
				}
				return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
			});
		}

		function parse_date(date_str) {
			// The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
			// cannot handle in IE. We therefore perform the following transformation:
			// "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
			return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
		}

		function relative_time(date) {
			var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
			var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
			var r = '';
			if (delta < 1) {
				r = 'just now';
			} else if (delta < 60) {
				r = delta + ' seconds ago';
			} else if(delta < 120) {
				r = 'about a minute ago';
			} else if(delta < (45*60)) {
				r = 'about ' + (parseInt(delta / 60, 10)).toString() + ' minutes ago';
			} else if(delta < (2*60*60)) {
				r = 'about an hour ago';
			} else if(delta < (24*60*60)) {
				r = 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
			} else if(delta < (48*60*60)) {
				r = 'about a day ago';
			} else {
				r = 'about ' + (parseInt(delta / 86400, 10)).toString() + ' days ago';
			}
			return r;
		}

		function build_auto_join_text(text) {
			if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
				return s.auto_join_text_reply;
			} else if (text.match(url_regexp)) {
				return s.auto_join_text_url;
			} else if (text.match(/^((\w+ed)|just) .*/im)) {
				return s.auto_join_text_ed;
			} else if (text.match(/^(\w*ing) .*/i)) {
				return s.auto_join_text_ing;
			} else {
				return s.auto_join_text_default;
			}
		}

		function build_api_request() {
			var modpath = s.modpath,
				count = (s.fetch === null) ? s.count : s.fetch,
				defaults = {
					include_entities: 1
				};

			if (s.list) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/lists/statuses.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						slug: s.list,
						owner_screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else if (s.favorites) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/favorites/list.json",
					parameters: $.extend({}, defaults, {
						list_id: s.list_id,
						screen_name: s.username,
						page: s.page,
						count: count
					})
				};
			} else if (s.query === null && s.username.length === 1) {
				return {
					host: s.twitter_api_url,
					url: "/1.1/statuses/user_timeline.json",
					parameters: $.extend({}, defaults, {
						screen_name: s.username,
						page: s.page,
						count: count,
						include_rts: (s.retweets ? 1 : 0)
					})
				};
			} else {
				var query = (s.query || 'from:'+s.username.join(' OR from:'));
				return {
					host: s.twitter_search_url,
					url: "/1.1/search/tweets.json",
					parameters: $.extend({}, defaults, {
						q: query,
						count: count
					})
				};
			}
		}

		function extract_avatar_url(item, secure) {
			if (secure) {
				return ('user' in item) ?
					item.user.profile_image_url_https :
					extract_avatar_url(item, false).
					replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
			} else {
				return item.profile_image_url || item.user.profile_image_url;
			}
		}

		// Convert twitter API objects into data available for
		// constructing each tweet <li> using a template
		function extract_template_data(item) {
			var o = {};
			o.item = item;
			o.source = item.source;
			// The actual user name is not returned by all Twitter APIs, so please do not file an issue if it is empty.
			o.name = item.from_user_name || item.user.name;
			o.screen_name = item.from_user || item.user.screen_name;
			o.avatar_size = s.avatar_size;
			o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
			o.retweet = typeof(item.retweeted_status) != 'undefined';
			o.tweet_time = parse_date(item.created_at);
			o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
			o.tweet_id = item.id_str;
			o.twitter_base = "http://"+s.twitter_url+"/";
			o.user_url = o.twitter_base+o.screen_name;
			o.tweet_url = o.user_url+"/status/"+o.tweet_id;
			o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
			o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
			o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
			o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
			o.tweet_relative_time = relative_time(o.tweet_time);
			o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
			o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
			o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
			o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

			// Default spans, and pre-formatted blocks for common layouts
			o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
			o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
			o.avatar = o.avatar_size ?
				t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
			o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
			o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
			o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
			o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
			o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
			return o;
		}

		return this.each(function(i, widget){
			var list = $('<ul class="tweet_list">');
			var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
			var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
			var loading = $('<p class="loading">'+s.loading_text+'</p>');

			if(s.username && typeof(s.username) == "string"){
				s.username = [s.username];
			}

			$(widget).unbind("tweet:load").bind("tweet:load", function(){
				if (s.loading_text) $(widget).empty().append(loading);

				$.ajax({
					dataType: "json",
					type: "post",
					async: false,
					url: s.modpath || "/twitter/",
					data: { request: build_api_request() },
					success: function(data, status) {

						if(data.message) {
							console.log(data.message);
						}

						var response = data.response;
						$(widget).empty().append(list);
						if (s.intro_text) list.before(intro);
						list.empty();

						if(response.statuses !== undefined) {
							resp = response.statuses;
						} else if(response.results !== undefined) {
							resp = response.results;
						} else {
							resp = response;
						}

						var tweets = $.map(resp, extract_template_data);
							tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);

						list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
							children('li:first').addClass('tweet_first').end().
							children('li:odd').addClass('tweet_even').end().
							children('li:even').addClass('tweet_odd');

						if (s.outro_text) list.after(outro);
						$(widget).trigger("loaded").trigger((tweets ? "empty" : "full"));
						if (s.refresh_interval) {
							window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
						}
					}
				});
			}).trigger("tweet:load");
		});
	};
}));

// cookie functions
jQuery.cookie = function (name, value, options) {
  if (typeof value != 'undefined') { // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options = jQuery.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
      options.expires = -1;
    }
    var expires = '';
    if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    } // NOTE Needed to parenthesize options.path and options.domain
    // in the following expressions, otherwise they evaluate to undefined
    // in the packed version for some reason...
    var path = options.path ? '; path=' + (options.path) : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    var secure = options.secure ? '; secure' : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
  } else { // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]); // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

// The 'browser' property has been removed in jQuery 1.9 so this is a temporal work around to
// get it back only for IE detection. 
// http://n33.co/2013/03/23/browser-on-jquery-19x-for-legacy-ie-detection
if (typeof jQuery != 'undefined') 
{
    var version = $.fn.jquery.split('.');
    var verint = parseInt(version[0] + version[1]);

    if ( verint >= 19 ) 
    {
      jQuery.browser={};(function(){jQuery.browser.msie=false;
      jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
      jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
    }
}


// fixes for IE-7/8 cleartype bug on fade in/out
jQuery.fn.fadeIn = function (speed, callback) {
  return this.animate({
    opacity: 'show'
  }, speed, function () {
    if (jQuery.browser.msie) this.style.removeAttribute('filter');
    if (jQuery.isFunction(callback)) callback();
  });
};
jQuery.fn.fadeOut = function (speed, callback) {
  return this.animate({
    opacity: 'hide'
  }, speed, function () {
    if (jQuery.browser.msie) this.style.removeAttribute('filter');
    if (jQuery.isFunction(callback)) callback();
  });
};
jQuery.fn.fadeTo = function (speed, to, callback) {
  return this.animate({
    opacity: to
  }, speed, function () {
    if (to == 1 && jQuery.browser.msie) this.style.removeAttribute('filter');
    if (jQuery.isFunction(callback)) callback();
  });
};

// nundge effect
jQuery.fn.nudge = function (params) { //set default parameters
  params = jQuery.extend({
    amount: 20,
    //amount of pixels to pad / marginize
    duration: 300,
    //amount of milliseconds to take
    property: 'padding',
    //the property to animate (could also use margin)
    direction: 'left',
    //direction to animate (could also use right)
    toCallback: function () {},
    //function to execute when MO animation completes
    fromCallback: function () {} //function to execute when MOut animation completes
  }, params); //For every element meant to nudge...
  this.each(function () { //variables
    var $t = jQuery(this);
    var $p = params;
    var dir = $p.direction;
    var prop = $p.property + dir.substring(0, 1).toUpperCase() + dir.substring(1, dir.length);
    var initialValue = $t.css(prop);
    /* fx */
    var go = {};
    go[prop] = parseInt($p.amount) + parseInt(initialValue);
    var bk = {};
    bk[prop] = initialValue; //Proceed to nudge on hover
    $t.hover(function () {
      $t.stop().animate(go, $p.duration, '', $p.toCallback);
    }, function () {
      $t.stop().animate(bk, $p.duration, '', $p.fromCallback);
    });
  });
  return this;
};

// bubble
(function (jQuery) {
  jQuery.fn.bubble = function (options) {
    jQuery.fn.bubble.defaults = {
      timeout: 0,
      offset: 22
    };
    var o = jQuery.extend({}, jQuery.fn.bubble.defaults, options);
    return this.each(function () {
      var showTip = function () {
        var el = jQuery(this).find('.bubble').css('display', 'block')[0];
        var ttHeight = jQuery(el).height();
        var ttOffset = el.offsetHeight;
        var ttTop = ttOffset + ttHeight;
        jQuery(this).find('.bubble').stop().css({
          'opacity': 0,
          'top': 2 - ttOffset
        }).animate({
          'opacity': 1,
          'top': o.offset - ttOffset
        }, 250);
      };
      var hideTip = function () {
        var self = this;
        var el = jQuery('.bubble', this).css('display', 'block')[0];
        var ttHeight = jQuery(el).height();
        var ttOffset = el.offsetHeight;
        var ttTop = ttOffset + ttHeight;
        jQuery(this).find('.bubble').stop().animate({
          'opacity': 0,
          'top': 12 - ttOffset
        }, 250, 'swing', function () {
          el.hiding = false;
          jQuery(this).css('display', 'none');
        })
      }
      jQuery(this).find('.bubble').hover(function () {
        return false;
      }, function () {
        return true;
      });
      jQuery(this).hover(function () {
        var self = this;
        showTip.apply(this);
        if (o.timeout > 0) this.tttimeout = setTimeout(function () {
          hideTip.apply(self)
        }, o.timeout);
      }, function () {
        clearTimeout(this.tttimeout);
        hideTip.apply(this);
      });
    });
  };
})(jQuery);

//Private function for setting cookie

function updateCookie(target, data) {
  var cookie = target.replace(/[#. ]/g, '');
  jQuery.cookie(cookie, data, {
    path: '/'
  });
}

function fontControl(container, target, minSize, maxSize) {
  jQuery(container).append('<a href="javascript:void(0);" class="fontSize bubble" title="Increase or decrease text size"></a>');
  var cookie = 'page-font-size';
  var value = jQuery.cookie(cookie);
  if (value != null) {
    jQuery(target).css('fontSize', parseInt(value));
  } //on clicking small font button, font size is decreased by 1px
  jQuery(container + " .fontSize").click(function () {
    curSize = parseInt(jQuery(target).css("fontSize"));
    newSize = curSize + 1;
    if (newSize > maxSize) newSize = minSize;
    if (newSize >= minSize) //jQuery(target).css('fontSize', newSize);
    jQuery(target).animate({
      fontSize: newSize
    }, 333, 'swing');
    updateCookie(cookie, newSize); //sets the cookie
  });
}

function pageWidthControl(container, target, fullWidth, fixedWidth, fluidWidth) {
  jQuery(container).append('<a href="javascript:void(0);" class="pageWidth bubble" title="switch from fixed to fluid page width"></a>');
  var cookie = 'page-max-width';
  var value = jQuery.cookie(cookie);
  if (value != null) {
    jQuery(target).css('maxWidth', value);
  }
  jQuery(container + " .pageWidth").click(function () {
    curMaxWidth = jQuery(target).css('maxWidth');
    newMaxWidth = curMaxWidth;
    switch (curMaxWidth) {
    case fullWidth:
      newMaxWidth = fixedWidth;
      break;
    case fixedWidth:
      newMaxWidth = fluidWidth;
      break;
    case fluidWidth:
      newMaxWidth = fullWidth;
      break;
    default:
      newMaxWidth = fluidWidth;
    }
    jQuery(target).animate({
      maxWidth: newMaxWidth
    }, 333, 'easeOutQuart');
    updateCookie(cookie, newMaxWidth); //sets the cookie
  });
}


/*
 * Superfish v1.4.8 - jQuery menu widget
 * Copyright (c) 2008 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 * 	http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 *
 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt

- MODIFIED FOR MYSTIQUE! BE CAREFUL WHEN UPDATING!

 */
;
(function (jQuery) {
  jQuery.fn.superfish = function (op) {
    var sf = jQuery.fn.superfish,
      c = sf.c,
      $arrow = jQuery(['<span class="', c.arrowClass, '"> &#187;</span>'].join('')),
      over = function () {
      var $$ = jQuery(this),
        menu = getMenu($$);
      clearTimeout(menu.sfTimer);
      $$.showSuperfishUl().siblings().hideSuperfishUl();
    },
      out = function () {
      var $$ = jQuery(this),
        menu = getMenu($$),
        o = sf.op;
      clearTimeout(menu.sfTimer);
      menu.sfTimer = setTimeout(function () {
        o.retainPath = (jQuery.inArray($$[0], o.$path) > - 1);
        $$.hideSuperfishUl();
        if (o.$path.length && $$.parents(['li.', o.hoverClass].join('')).length < 1) {
          over.call(o.$path);
        }
      }, o.delay);
    },
      getMenu = function ($menu) {
      var menu = $menu.parents(['ul.', c.menuClass, ':first'].join(''))[0];
      sf.op = sf.o[menu.serial];
      return menu;
    },
      addArrow = function ($a) {
      $a.addClass(c.anchorClass).append($arrow.clone());
    };
    return this.each(function () {
      var s = this.serial = sf.o.length;
      var o = jQuery.extend({}, sf.defaults, op);
      o.$path = jQuery('li.' + o.pathClass, this).slice(0, o.pathLevels).each(function () {
        jQuery(this).addClass([o.hoverClass, c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass);
      });
      sf.o[s] = sf.op = o;
      jQuery('li:has(ul)', this)[(jQuery.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over, out).each(function () {
        if (o.autoArrows) addArrow(jQuery('>a:first-child', this));
      }).not('.' + c.bcClass).hideSuperfishUl();
      var $a = jQuery('a', this);
      $a.each(function (i) {
        var $li = $a.eq(i).parents('li');
        $a.eq(i).focus(function () {
          over.call($li);
        }).blur(function () {
          out.call($li);
        });
      });
      o.onInit.call(this);
    }).each(function () {
      var menuClasses = [c.menuClass];
      jQuery(this).addClass(menuClasses.join(' '));
    });
  };
  var sf = jQuery.fn.superfish;
  sf.o = [];
  sf.op = {};
  sf.c = {
    bcClass: 'sf-breadcrumb',
    menuClass: 'sf-js-enabled',
    anchorClass: 'sf-with-ul',
    arrowClass: 'arrow'
  };
  sf.defaults = {
    hoverClass: 'sfHover',
    pathClass: 'overideThisToUse',
    pathLevels: 1,
    delay: 500,
    speed: 'normal',
    autoArrows: true,
    disableHI: false,
    // true disables hoverIntent detection
    onInit: function () {},
    // callback functions
    onBeforeShow: function () {},
    onShow: function () {},
    onHide: function () {}
  };
  jQuery.fn.extend({
    hideSuperfishUl: function () {
      var o = sf.op,
        not = (o.retainPath === true) ? o.$path : '';
      o.retainPath = false;
      if (isIE) {
        css1 = {
          marginLeft: 20
        };
      } else {
        css1 = {
          opacity: 0,
          marginLeft: 20
        };
      }
      var $ul = jQuery(['li.', o.hoverClass].join(''), this).add(this).not(not).removeClass(o.hoverClass).find('>ul').animate(css1, 150, 'swing', function () {
        jQuery(this).css({
          display: "none"
        })
      });
      o.onHide.call($ul);
      return this;
    },
    showSuperfishUl: function () {
      var o = sf.op,
        $ul = this.addClass(o.hoverClass).find('>ul:hidden').css('visibility', 'visible');
      o.onBeforeShow.call($ul);
      if (isIE) {
        css1 = {
          display: "block",
          marginLeft: 20
        };
        css2 = {
          marginLeft: 0
        };
      } else {
        css1 = {
          display: "block",
          opacity: 0,
          marginLeft: 20
        };
        css2 = {
          opacity: 1,
          marginLeft: 0
        };
      }
      $ul.css(css1).animate(css2, 150, 'swing', function () {
        o.onShow.call($ul);
      });
      return this;
    }
  });
})(jQuery);


/*
 * Url preview script v 1.0.0
 * Powered by jQuery (http://www.jquery.com)
 * 
 * Written by Alex (http://www.thumbshots.ru)
 * For more info visit http://www.thumbshots.ru/api
 *
 */
function ThumbshotPopups( tclass, target ) {
	if( ! target ) {
		target = jQuery("a[href^=\'http:\']").not("[class~=\'thumbshot-no-popup\']").not("[href*=\'" + window.location.host + "\']").get();
		target = target.concat(jQuery("a.thumbshot-popup[href^=\'http:\']").get());
		target = jQuery.unique(target);
	}
	if (target.length < 1) return;
	
	var img_height = 90;
	var host = 'http://get.thumbshots.ru/';
	var params = new Array();
	params['size'] = 'M'; // XS, S, M, L
	params['lang'] = 'en'; // ru
	//params['w'] = 400;
	//params['h'] = 300;
	//params['key'] = '';
	
	jQuery('<style type="text/css"> .' + tclass + ' {position:absolute;left:-20000px;display:none;z-index:1001;border:1px solid #ccc; background:#333; padding:2px;color:#fff} .' + tclass + ' img {margin:0;padding:0;border:none} </style>').appendTo('head');
	
	var query = [];
	for (var v in params) {
		if (typeof params[v] != 'function') {
			query.push(encodeURIComponent(v) + '=' + encodeURIComponent(params[v]))
		}
	}
	
	jQuery(target).each(function (i) {
		jQuery(this).hover(function () {
			var src = host + "?" + query.join('&') + "&url=" + jQuery(this).attr('href');
			jQuery("body").append("<div class='" + tclass + "' id='" + tclass + i + "'><img src='" + src + "' alt='Loading preview' /></div>");
			jQuery("#" + tclass + i).css({
				opacity: 1,
				display: "none"
			}).fadeIn(50)
		}, function () {
			jQuery("#" + tclass + i).fadeOut(50)
		}).mousemove(function (kmouse) {
			x = kmouse.pageX;
			y = kmouse.pageY - 50 - img_height;
			jQuery("#" + tclass + i).css({ left: x, top: y });
		})
	});
}


// optimized minitabs
(function (jQuery) {
  jQuery.fn.minitabs = function (options) {
    jQuery.fn.minitabs.defaults = {
      content: '.sections',
      nav: 'ul:first',
      effect: 'top',
      speed: 333,
      cookies: true
    };
    var o = jQuery.extend({}, jQuery.fn.minitabs.defaults, options);
    return this.each(function () {
      var $tabs = jQuery(this);
      var $instance = $tabs.attr('id');
      var $nav = jQuery('#' + $instance + ' ' + o.nav);
      if (o.cookies) { // check for the active tab cookie
        var cookieID = $instance;
        var cookieState = jQuery.cookie(cookieID);
      } // hide all sections
      $tabs.find(o.content + " >div:gt(0)").hide();
      if (o.cookies && (cookieState != null)) { // if we have a cookie then show the section according to its value
        $nav.find('li.' + cookieState).addClass("active");
        var link = $nav.find('li.' + cookieState + ' a');
        var section = link.attr('href');
        $tabs.find(o.content + ' div' + section).show();
      } else { // if not, show the 1st section
        $nav.find('li:last').addClass("active");
        $tabs.find(o.content + ' div:first').show();
      }
      $nav.find("li>a").click(function () {
        if (!jQuery(this).parent('li').hasClass("active")) {
          $nav.find('li').removeClass("active");
          if (o.cookies) {
            var cookieValue = jQuery(this).parent('li').attr("class");
            jQuery.cookie(cookieID, cookieValue, {
              path: '/'
            });
          }
          jQuery(this).parent('li').addClass("active");
          jQuery(this).blur();
          var re = /([_\-\w]+$)/i;
          var target = jQuery('#' + $instance + ' #' + re.exec(this.href)[1]);
          if (o.effect == 'slide') $tabs.find(o.content + " >div").slideUp(o.effect);
          else $tabs.find(o.content + " >div").hide();
          switch (o.effect) {
          case 'top':
            if (isIE) target.css({
              top: - 300
            }).show().animate({
              top: 0
            }, o.speed, 'easeOutQuart');
            else target.css({
              opacity: 0,
              top: - 300
            }).show().animate({
              opacity: 1,
              top: 0
            }, o.speed, 'easeOutQuart');
            break;
          case 'slide':
            target.slideDown(o.speed);
            break;
          case 'height':
            originalHeight = target.height();
            target.css({
              opacity: 0,
              height: 0
            }).show().animate({
              opacity: 1,
              height: originalHeight
            }, o.speed, 'easeOutQuart');
            break;
          }
          return false;
        }
		return false;
      })
    });
  };
})(jQuery);

// better alternative to slidetoggle
jQuery.fn.slideFade = function (type, speed, easing, callback) {
  if (isIE) return this.animate({
    height: type
  }, speed, easing, callback); // no fading on IE because of the text AA bug
  else return this.animate({
    opacity: type,
    height: type
  }, speed, easing, callback);
};




jQuery.fn.extend({
  plainHtml: function (value) {
    if (value == undefined) {
      return (this[0] ? this[0].innerHTML : null);
    }
    else if (this[0]) {
      try {
        this[0].innerHTML = value;
      } catch (e) {}
      return this;
    }
  }
});


// quote comment
(function (jQuery) {
  jQuery.fn.quoteComment = function (options) {
    jQuery.fn.quoteComment.defaults = {
      comment: 'li.comment',
      comment_id: '.comment-id',
      author: '.comment-author',
      source: '.comment-body',
      target: '#comment'
    };
    jQuery.fn.appendVal = function (txt) {
      return this.each(function () {
        this.value += txt;
      });
    };
    var o = jQuery.extend({}, jQuery.fn.quoteComment.defaults, options);
    return this.each(function () {
      jQuery(this).click(function () {
        $c = jQuery(this).parents(o.comment).find(o.source);
        $author = jQuery(this).parents(o.comment).find(o.author);
        $cid = jQuery(this).parents(o.comment).find(o.comment_id).attr('href');
        jQuery(o.target).appendVal('<blockquote>\n<a href="' + $cid + '">\n<strong><em>' + $author.html() + ':</em></strong>\n</a>\n ' + $c.html() + '</blockquote>');
        jQuery(o.target).focus();
        return false;
      })
    });
  };
})(jQuery);


function setup_comments() {

  jQuery("a#show-author-info").click(function () {
    jQuery("#author-info").slideFade('toggle', 333, 'easeOutQuart');
  });

  function quote() {
    jQuery.fn.appendVal = function (txt) {
      return this.each(function () {
        this.value += txt;
      });
    };

    comment_class = 'li.comment';
    target_id = '#comment';

    jQuery('a.quote').click(function () {
      $c = jQuery(this).parents(comment_class).find('.comment-text');
      $author = jQuery(this).parents(comment_class).find('.comment-author');
      $cid = jQuery(this).parents(comment_class).find('.comment-id').attr('href');
      jQuery(target_id).appendVal('<blockquote>\n<a href="' + $cid + '">\n<strong><em>' + $author.html() + ':</em></strong>\n</a>\n ' + $c.html() + '</blockquote>');
      jQuery(target_id).focus();
      return false;
    })

  }

  function reply() {

    // replaces wp's comment reply script
    jQuery("a.reply").click(function () {
      linkClass = jQuery(this).attr('id');
      var pos = linkClass.lastIndexOf('-');
      var targetID = linkClass.substr(++pos);

      jQuery("#respond").hide();

      jQuery('#comment_parent').attr('value', targetID);
      // jQuery('#comment_post_ID').attr('value',postID);

      jQuery("#cancel-reply").show();
      jQuery("#respond").appendTo('#comment-body-' + targetID).show(0, function () {

        // move cursor in textarea, at the end of the text
        jQuery('#comment').each(function () {
          if (this.createTextRange) {
            var r = this.createTextRange();
            r.collapse(false);
            r.select();
          }
          jQuery(this).focus();
        });

      });

      return false;
    });

    // cancel-reply
    jQuery("#cancel-reply").click(function (event) {
      jQuery("#respond").hide();
      jQuery('#comment_parent').attr('value', '0');
      //  jQuery('#comment_post_ID').attr('value',postID);

      jQuery("#cancel-reply").hide();
      jQuery("#respond").appendTo('#section-comments').show(0, function () {

        // move cursor in textarea, at the end of the text
        jQuery('#comment').each(function () {
          if (this.createTextRange) {
            var r = this.createTextRange();
            r.collapse(false);
            r.select();
          }
          jQuery(this).focus();
        });

      });
      return false;
    });

  }



  reply();
  quote();
  jQuery(".comment-head").bubble({
    timeout: 0
  });

}




/*
* Print Element Plugin 1.0
*
* Copyright (c) 2009 Erik Zaadi
*
* Inspired by PrintArea (http://plugins.jquery.com/project/PrintArea) and
* http://stackoverflow.com/questions/472951/how-do-i-print-an-iframe-from-javascript-in-safari-chrome
*
*  jQuery plugin page : http://plugins.jquery.com/project/printElement
*  Wiki : http://wiki.github.com/erikzaadi/jQueryPlugins/jqueryprintelement
*  Home Page : http://erikzaadi.github.com/jQueryPlugins/jQuery.printElement
*
*  Thanks to David B (http://github.com/ungenio) and icgJohn (http://www.blogger.com/profile/11881116857076484100)
*  For their great contributions!
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
*   Note, Iframe Printing is not supported in Opera and Chrome 3.0, a popup window will be shown instead
*/
;
(function ($) {
  $.fn.printElement = function (options) {
    var mainOptions = $.extend({}, $.fn.printElement.defaults, options);
    //iframe mode is not supported for opera and chrome 3.0 (it prints the entire page).
    //http://www.google.com/support/forum/p/Webmasters/thread?tid=2cb0f08dce8821c3&hl=en
    if (mainOptions.printMode == 'iframe') {
      if ($.browser.opera || (/chrome/.test(navigator.userAgent.toLowerCase()))) mainOptions.printMode = 'popup';
    }
    //Remove previously printed iframe if exists
    $("[id^='printElement_']").remove();

    return this.each(function () {
      //Support Metadata Plug-in if available
      var opts = $.meta ? $.extend({}, mainOptions, $this.data()) : mainOptions;
      _printElement($(this), opts);
    });
  };
  $.fn.printElement.defaults = {
    printMode: 'iframe',
    //Usage : iframe / popup
    pageTitle: '',
    //Print Page Title
    overrideElementCSS: null,
    /* Can be one of the following 3 options:
         * 1 : boolean (pass true for stripping all css linked)
         * 2 : array of $.fn.printElement.cssElement (s)
         * 3 : array of strings with paths to alternate css files (optimized for print)
         */
    printBodyOptions: {
      styleToAdd: 'padding:10px;margin:10px;background:#fff;',
      //style attributes to add to the body of print document
      classNameToAdd: '' //css class to add to the body of print document
    },
    leaveOpen: false,
    // in case of popup, leave the print page open or not
    iframeElementOptions: {
      styleToAdd: 'border:none;position:absolute;width:0px;height:0px;bottom:0px;left:0px;background:#fff;',
      //style attributes to add to the iframe element
      classNameToAdd: '' //css class to add to the iframe element
    }
  };
  $.fn.printElement.cssElement = {
    href: '',
    media: ''
  };

  function _printElement(element, opts) {
    //Create markup to be printed
    var html = _getMarkup(element, opts);

    var popupOrIframe = null;
    var documentToWriteTo = null;
    if (opts.printMode.toLowerCase() == 'popup') {
      popupOrIframe = window.open('about:blank', 'printElementWindow', 'width=650,height=440,scrollbars=yes');
      documentToWriteTo = popupOrIframe.document;
    }
    else {
      //The random ID is to overcome a safari bug http://www.cjboco.com.sharedcopy.com/post.cfm/442dc92cd1c0ca10a5c35210b8166882.html
      var printElementID = "printElement_" + (Math.round(Math.random() * 99999)).toString();
      //Native creation of the element is faster..
      var iframe = document.createElement('IFRAME');
      $(iframe).attr({
        style: opts.iframeElementOptions.styleToAdd,
        id: printElementID,
        className: opts.iframeElementOptions.classNameToAdd,
        frameBorder: 0,
        scrolling: 'no',
        src: 'about:blank'
      });
      document.body.appendChild(iframe);
      documentToWriteTo = (iframe.contentWindow || iframe.contentDocument);
      if (documentToWriteTo.document) documentToWriteTo = documentToWriteTo.document;
      iframe = document.frames ? document.frames[printElementID] : document.getElementById(printElementID);
      popupOrIframe = iframe.contentWindow || iframe;
    }
    focus();
    documentToWriteTo.open();
    documentToWriteTo.write(html);
    documentToWriteTo.close();
    _callPrint(popupOrIframe);
  };

  function _callPrint(element) {
    if (element && element.printPage) element.printPage();
    else setTimeout(function () {
      _callPrint(element);
    }, 50);
  }

  function _getElementHTMLIncludingFormElements(element) {
    var $element = $(element);
    //Radiobuttons and checkboxes
    $(":checked", $element).each(function () {
      this.setAttribute('checked', 'checked');
    });
    //simple text inputs
    $("input[type='text']", $element).each(function () {
      this.setAttribute('value', $(this).val());
    });
    $("select", $element).each(function () {
      var $select = $(this);
      $("option", $select).each(function () {
        if ($select.val() == $(this).val()) this.setAttribute('selected', 'selected');
      });
    });
    $("textarea", $element).each(function () {
      //Thanks http://blog.ekini.net/2009/02/24/jquery-getting-the-latest-textvalue-inside-a-textarea/
      var value = $(this).attr('value');
      if ($.browser.mozilla) {
        if (this.firstChild) this.firstChild.textContent = value;
      }
      else {
        this.innerHTML = value;
      }
    });
    var elementHtml = $element.html();
    return elementHtml;
  }

  function _getBaseHref() {
    return window.location.protocol + window.location.hostname + window.location.pathname;
  }

  function _getMarkup(element, opts) {
    var $element = $(element);
    var elementHtml = _getElementHTMLIncludingFormElements(element);

    var html = new Array();
    html.push('<html><head><title>' + opts.pageTitle + '</title>');
    if (opts.overrideElementCSS) {
      if (opts.overrideElementCSS.length > 0) {
        for (var x = 0; x < opts.overrideElementCSS.length; x++) {
          var current = opts.overrideElementCSS[x];
          if (typeof(current) == 'string') html.push('<link type="text/css" rel="stylesheet" href="' + current + '" >');
          else html.push('<link type="text/css" rel="stylesheet" href="' + current.href + '" media="' + current.media + '" >');
        }
      }
    }
    else {
      $(document).find("link").filter(function () {
        return $(this).attr("rel").toLowerCase() == "stylesheet";
      }).each(function () {
        html.push('<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" media="' + $(this).attr('media') + '" >');
      });
    }
    //Ensure that relative links work
    html.push('<base href="' + _getBaseHref() + '" />');
    html.push('</head><body style="' + opts.printBodyOptions.styleToAdd + '" class="' + opts.printBodyOptions.classNameToAdd + '">');
    html.push('<div class="' + $element.attr('class') + '">' + elementHtml + '</div>');
    html.push('<script type="text/javascript">function printPage(){focus();print();' + ((!$.browser.opera && !opts.leaveOpen && opts.printMode.toLowerCase() == 'popup') ? 'close();' : '') + '}</script>');
    html.push('</body></html>');

    return html.join('');
  };
})(jQuery);






(function (jQuery) {
  jQuery.fn.addGrid = function (cols, options) {
    var defaults = {
      default_cols: 12,
      z_index: 999,
      img_path: '/images/',
      opacity: .6
    };

    // Extend our default options with those provided.
    var opts = jQuery.extend(defaults, options);

    var cols = cols != null && (cols === 12 || cols === 16) ? cols : 12;
    var cols = cols === opts.default_cols ? '12_col' : '16_col';

    return this.each(function () {
      var $el = jQuery(this);
      var height = $el.height();

      var wrapper = jQuery('<div id="' + opts.grid_id + '"/>').appendTo($el).css({
        'display': 'none',
        'position': 'absolute',
        'top': 0,
        'z-index': (opts.z_index - 1),
        'height': height,
        'opacity': opts.opacity,
        'width': '100%'
      });

      jQuery('<div/>').addClass('container_12').css({
        'margin': '0 auto',
        'width': '960px',
        'height': height,
        'background-image': 'url(' + opts.img_path + cols + '.png)',
        'background-repeat': 'repeat-y'
      }).appendTo(wrapper);

      // add toggle
      jQuery('<div>grid on</div>').appendTo($el).css({
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'z-index': opts.z_index,
        'background': '#ed1e24',
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'color': '#fff',
        'padding': '3px 6px',
        'cursor': 'pointer',
        'text-align': 'left'
      }).hover(function () {
        jQuery(this).css("cursor", "pointer");
      }, function () {
        jQuery(this).css("cursor", "default");
      }).toggle(function () {
        jQuery(this).text("grid off");
        jQuery('#' + opts.grid_id).slideDown();
      }, function () {
        jQuery(this).text("grid on");
        jQuery('#' + opts.grid_id).slideUp();
      });

    });

  };
})(jQuery);




// init
jQuery(document).ready(function ($) {
  if (isIE6) {
    jQuery('#page').append("<div class='crap-browser-warning'>You're using a old and buggy browser. Switch to a <a href='http://www.mozilla.com/firefox/'>normal browser</a> or consider <a href='http://www.microsoft.com/windows/internet-explorer'>upgrading your Internet Explorer</a> to the latest version</div>");
  }
  jQuery('#navigation').superfish({
    autoArrows: true
  });



			// Open all items with these tags...
			jQuery("a[rel='lightbox'], .image_block > a[href*='mtime='], a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png'], a[href$='.JPG'], a[href$='.JPEG'], a[href$='.GIF'], a[href$='.PNG']").fancybox();  
			
		

  // layout controls
  fontControl("#pageControls", "body", 10, 18);
  //pageWidthControl("#pageControls", ".page-content", '100%', '940px', '1200px');
  jQuery(".post-tabs").minitabs({
    content: '.sections',
    nav: '.tabs',
    effect: 'top',
    speed: 333,
    cookies: false
  });

  jQuery(".sidebar-tabs").minitabs({
    content: '.sections',
    nav: '.box-tabs',
    effect: 'slide',
    speed: 150
  });

  jQuery("ul.menuList .cat-item").bubble({
    timeout: 6000
  });
  jQuery(".shareThis, .bubble-trigger").bubble({
    offset: 16,
    timeout: 0
  });

  jQuery("#pageControls").bubble({
    offset: 30
  });
  jQuery('ul.menuList li a').nudge({
    property: 'padding',
    direction: 'left',
    amount: 6,
    duration: 166
  });
  jQuery('a.nav-extra').nudge({
    property: 'marginTop',
    direction: '',
    amount: - 18,
    duration: 166
  });

  // fade effect
  if (!isIE) {
    jQuery('.fadeThis').append('<span class="hover"></span>').each(function () {
      var jQueryspan = jQuery('> span.hover', this).css('opacity', 0);
      jQuery(this).hover(function () {
        jQueryspan.stop().fadeTo(333, 1);
      }, function () {
        jQueryspan.stop().fadeTo(333, 0);
      });
    });
  }
  jQuery("#footer-blocks.withSlider").loopedSlider();
  jQuery("#featured-content.withSlider").loopedSlider({
    autoStart: 10000,
    autoHeight: false
  }); // scroll to top
  jQuery("a#goTop").click(function () {
    jQuery('html').animate({
      scrollTop: 0
    }, 'slow');
  });
  jQuery('.clearField').clearField({
    blurClass: 'clearFieldBlurred',
    activeClass: 'clearFieldActive'
  });

  setup_comments();

  jQuery('a.print').click(function () {
    jQuery('.post.single').printElement({
      printMode: 'popup'
    });

    return false;
  });

  // set accessibility roles on some elements trough js (to not break the xhtml markup)
  jQuery("#navigation").attr("role", "navigation");
  jQuery("#primary-content").attr("role", "main");
  jQuery("#sidebar").attr("role", "complementary");
  jQuery("#searchform").attr("role", "search");


});