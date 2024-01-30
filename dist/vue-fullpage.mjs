import { openBlock as Fr, createElementBlock as Gr, renderSlot as Ur } from "vue";
/*!
* vue-fullpage 0.2.16
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kr(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var fr = { exports: {} };
/*!
* fullPage 4.0.21
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/
(function(B, Q) {
  (function(ne, ie) {
    B.exports = ie();
  })(qr, function() {
    var ne, ie, xe, an, Ci = Object.freeze({ __proto__: null, get showError() {
      return ee;
    }, get isVisible() {
      return Jn;
    }, get getVisible() {
      return ct;
    }, get $() {
      return s;
    }, get deepExtend() {
      return Ne;
    }, get hasClass() {
      return A;
    }, get getWindowHeight() {
      return W;
    }, get t() {
      return st;
    }, get css() {
      return C;
    }, get prev() {
      return _t;
    }, get next() {
      return ut;
    }, get last() {
      return jo;
    }, get index() {
      return de;
    }, get getList() {
      return Se;
    }, get hide() {
      return Vt;
    }, get show() {
      return Qn;
    }, get isArrayOrList() {
      return Ye;
    }, get addClass() {
      return x;
    }, get removeClass() {
      return z;
    }, get appendTo() {
      return Ze;
    }, get wrap() {
      return $n;
    }, get wrapAll() {
      return Yt;
    }, get wrapInner() {
      return ei;
    }, get unwrap() {
      return Zt;
    }, get closest() {
      return T;
    }, get after() {
      return ft;
    }, get before() {
      return Wt;
    }, get insertBefore() {
      return Xt;
    }, get getScrollTop() {
      return we;
    }, get siblings() {
      return We;
    }, get preventDefault() {
      return V;
    }, get i() {
      return I;
    }, get o() {
      return Re;
    }, get u() {
      return pe;
    }, get l() {
      return ve;
    }, get v() {
      return Xe;
    }, get isFunction() {
      return P;
    }, get trigger() {
      return q;
    }, get matches() {
      return _;
    }, get toggle() {
      return Ft;
    }, get createElementFromHTML() {
      return ye;
    }, get remove() {
      return He;
    }, get filter() {
      return Mo;
    }, get untilAll() {
      return Gt;
    }, get nextAll() {
      return ti;
    }, get prevAll() {
      return ni;
    }, get toArray() {
      return Ao;
    }, get p() {
      return ue;
    }, get h() {
      return dt;
    }, get g() {
      return Ut;
    }, get S() {
      return To;
    }, get M() {
      return ii;
    } });
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(e) {
      if (this == null)
        throw new TypeError('"this" is null or not defined');
      var t = Object(this), n = t.length >>> 0;
      if (typeof e != "function")
        throw new TypeError("predicate must be a function");
      for (var i = arguments[1], r = 0; r < n; ) {
        var a = t[r];
        if (e.call(i, a, r, t))
          return a;
        r++;
      }
    } }), Array.from || (Array.from = (ne = Object.prototype.toString, ie = function(e) {
      return typeof e == "function" || ne.call(e) === "[object Function]";
    }, xe = Math.pow(2, 53) - 1, an = function(e) {
      var t = function(n) {
        var i = Number(n);
        return isNaN(i) ? 0 : i !== 0 && isFinite(i) ? (i > 0 ? 1 : -1) * Math.floor(Math.abs(i)) : i;
      }(e);
      return Math.min(Math.max(t, 0), xe);
    }, function(e) {
      var t = this, n = Object(e);
      if (e == null)
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      var i, r = arguments.length > 1 ? arguments[1] : void 0;
      if (r !== void 0) {
        if (!ie(r))
          throw new TypeError("Array.from: when provided, the second argument must be a function");
        arguments.length > 2 && (i = arguments[2]);
      }
      for (var a, l = an(n.length), v = ie(t) ? Object(new t(l)) : new Array(l), f = 0; f < l; )
        a = n[f], v[f] = r ? i === void 0 ? r(a, f) : r.call(i, a, f) : a, f += 1;
      return v.length = l, v;
    }));
    var b = window, j = document, Le = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document, dr = /(Mac|iPhone|iPod|iPad)/i.test(b.navigator.userAgent), Ee = "ontouchstart" in b || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, ki = !!window.MSInputMethodContext && !!document.documentMode, h = { test: {}, shared: {} };
    b.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
      t = t || window;
      for (var n = 0; n < this.length; n++)
        e.call(t, this[n], n, this);
    }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(e, t) {
      if (e == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var n = Object(e), i = 1; i < arguments.length; i++) {
        var r = arguments[i];
        if (r != null)
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
      }
      return n;
    }, writable: !0, T: !0 });
    var cn = "fullpage-wrapper", je = "." + cn, yt = "fp-responsive", sn = "fp-notransition", un = "fp-destroyed", bt = "fp-enabled", N = "active", fn = ".active", De = "fp-completely", xt = "fp-section", $ = "." + xt, pr = ".fp-tableCell", Me = "#fp-nav", dn = "fp-slide", pn = "." + dn, Lt = ".fp-slide.active", Et = "fp-slides", fe = ".fp-slides", vn = "fp-slidesContainer", Je = "." + vn, Ni = "fp-table", Be = "fp-overflow", Qe = "." + Be, $e = "fp-is-overflow", hn = ".fp-slidesNav", Ri = ".fp-slidesNav a", Hi = "fp-controlArrow", gn = "." + Hi, Di = "fp-prev", mn = ".fp-controlArrow.fp-prev", Bi = ".fp-controlArrow.fp-next", jt = { menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, licenseKey: "", credits: { enabled: !0, label: "Made with fullPage.js", position: "right" }, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, A: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !0, scrollOverflowReset: !1, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, allowCorrectDirection: !1, scrollOverflowMacStyle: !0, controlArrows: !0, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: !0, observer: !0 }, et = null, zi = !1, Sn = Ne({}, jt), Mt = null;
    function g(e) {
      return et;
    }
    function o() {
      return Mt || jt;
    }
    function ze() {
      return Sn;
    }
    function At(e, t, n) {
      Mt[e] = t, n !== "internal" && (Sn[e] = t);
    }
    function Ii() {
      if (!o().anchors.length) {
        var e = s(o().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", et);
        e.length && e.length === s(o().sectionSelector, et).length && (zi = !0, e.forEach(function(n) {
          o().anchors.push(I(n, "data-anchor").toString());
        }));
      }
      if (!o().navigationTooltips.length) {
        var t = s(o().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", et);
        t.length && t.forEach(function(n) {
          o().navigationTooltips.push(I(n, "data-tooltip").toString());
        });
      }
    }
    var c = { O: 0, R: 0, slides: [], L: [], j: null, D: null, N: !1, P: !1, H: !1, C: !1, I: !1, W: void 0, F: void 0, V: !1, canScroll: !0, Z: "none", B: "none", G: !1, Y: !1, U: !0, X: 0, _: W(), J: !1, K: {} };
    function p(e) {
      Object.assign(c, e);
    }
    function u() {
      return c;
    }
    function Pi(e) {
      return window["fp_" + e + "Extension"] !== void 0;
    }
    function D(e) {
      var t = o();
      return t[e] !== null && Object.prototype.toString.call(t[e]) === "[object Array]" ? t[e].length && h[e] : t[e] && h[e];
    }
    function m(e, t, n) {
      if (D(e))
        return P(h[e][t]) ? h[e][t](n) : h[e][t];
    }
    function Tt() {
      return m("dragAndMove", "isAnimating");
    }
    function _i() {
      return m("dragAndMove", "isGrabbing");
    }
    function wn(e) {
      if (o().offsetSections && h.offsetSections) {
        var t = m("offsetSections", "getWindowHeight", e);
        return t !== "" ? Math.round(t) + "px" : t;
      }
      return W() + "px";
    }
    function Vi(e, t) {
      e.insertBefore(t, e.firstChild);
    }
    function U(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(r) {
        var a, l, v, f, y, L, w = "", M = 0;
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ""); M < r.length; )
          a = t.indexOf(r.charAt(M++)) << 2 | (f = t.indexOf(r.charAt(M++))) >> 4, l = (15 & f) << 4 | (y = t.indexOf(r.charAt(M++))) >> 2, v = (3 & y) << 6 | (L = t.indexOf(r.charAt(M++))), w += String.fromCharCode(a), y != 64 && (w += String.fromCharCode(l)), L != 64 && (w += String.fromCharCode(v));
        return w = function(O) {
          for (var X, Y = "", R = 0, H = 0, E = 0; R < O.length; )
            (H = O.charCodeAt(R)) < 128 ? (Y += String.fromCharCode(H), R++) : H > 191 && H < 224 ? (E = O.charCodeAt(R + 1), Y += String.fromCharCode((31 & H) << 6 | 63 & E), R += 2) : (E = O.charCodeAt(R + 1), X = O.charCodeAt(R + 2), Y += String.fromCharCode((15 & H) << 12 | (63 & E) << 6 | 63 & X), R += 3);
          return Y;
        }(w), w;
      }
      function i(r) {
        return r.slice(3).slice(0, -3);
      }
      return function(r) {
        var a = r.split("_");
        if (a.length > 1) {
          var l = a[1];
          return n(r.replace(i(a[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + n(l.slice(3).slice(0, -3));
        }
        return i(r);
      }(n(e));
    }
    b.state = c, b.fp_utils = b.fp_utils || {}, Object.assign(b.fp_utils, { prependTo: Vi, toggleClass: function(e, t, n) {
      if (e.classList && n == null)
        e.classList.toggle(t);
      else {
        var i = A(e, t);
        i && n == null || !n ? z(e, t) : (!i && n == null || n) && x(e, t);
      }
    } });
    var Yi = function(e) {
      this.anchor = e.anchor, this.item = e.item, this.index = e.index(), this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1, this.isFirst = !this.index, this.isActive = e.isActive;
    }, le = function(e, t) {
      this.parent = this.parent || null, this.selector = t, this.anchor = I(e, "data-anchor") || o().anchors[de(e, o().sectionSelector)], this.item = e, this.isVisible = Jn(e), this.isActive = A(e, N), this.q = A(e, Be) || s(Qe, e)[0] != null, this.nn = t === o().sectionSelector, this.container = T(e, Je) || T(e, je), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function yn(e) {
      return e.map(function(t) {
        return t.item;
      });
    }
    function bn(e, t) {
      return e.find(function(n) {
        return n.item === t;
      });
    }
    le.prototype.siblings = function() {
      return this.nn ? this.isVisible ? c.L : c.tn : this.parent ? this.parent.slides : 0;
    }, le.prototype.prev = function() {
      var e = this.siblings(), t = (this.nn ? e.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t >= 0 ? e[t] : null;
    }, le.prototype.next = function() {
      var e = this.siblings(), t = (this.nn ? e.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t < e.length ? e[t] : null;
    }, le.prototype.prevPanel = function() {
      return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
    }, le.prototype.nextPanel = function() {
      return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
    }, le.prototype.en = function() {
      return this.nn ? c.L : c.rn;
    };
    var Zi, Wi = function(e) {
      Yi.call(this, e);
    }, vr = function(e) {
      Yi.call(this, e);
    };
    function Ae(e) {
      var t = s(Lt, e);
      return t.length && (e = t[0]), e;
    }
    function Xi(e) {
      return e ? e.activeSlide ? e.activeSlide : e : null;
    }
    function Ie(e) {
      var t, n, i = o();
      return i.autoScrolling && !i.scrollBar ? (t = -e, n = s(je)[0]) : (t = e, n = window), { options: t, element: n };
    }
    function Fi(e, t) {
      !o().autoScrolling || o().scrollBar || e.self != window && A(e, Et) ? e.self != window && A(e, Et) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }
    function xn(e) {
      var t = "transform " + o().scrollingSpeed + "ms " + o().easingcss3;
      return z(e, sn), C(e, { "-webkit-transition": t, transition: t });
    }
    function Ln(e, t) {
      var n = e.index(), i = de(t, $);
      return n == i ? "none" : n > i ? "up" : "down";
    }
    function Ot(e) {
      return x(e, sn);
    }
    function En(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function Gi(e, t) {
      t ? xn(g()) : Ot(g()), clearTimeout(Zi), C(g(), En(e)), h.test.on = e, Zi = setTimeout(function() {
        z(g(), sn);
      }, 10);
    }
    function Te(e) {
      var t = Math.round(e);
      if (o().css3 && o().autoScrolling && !o().scrollBar)
        Gi("translate3d(0px, -" + t + "px, 0px)", !1);
      else if (o().autoScrolling && !o().scrollBar)
        C(g(), { top: -t + "px" }), h.test.top = -t + "px";
      else {
        var n = Ie(t);
        Fi(n.element, n.options);
      }
    }
    function tt(e, t) {
      t !== "internal" && m("fadingEffect", "update", e), m("cards", "update_", e), At("scrollingSpeed", e, t);
    }
    h.setScrollingSpeed = tt;
    var nt, k = null, it = null, Ct = null;
    function kt(e, t, n, i) {
      var r, a = function(y) {
        return y.self != b && A(y, Et) ? y.scrollLeft : !o().autoScrolling || o().scrollBar ? we() : y.offsetTop;
      }(e), l = t - a, v = !1, f = c.V;
      p({ V: !0 }), nt && window.cancelAnimationFrame(nt), nt = function(y) {
        r || (r = y);
        var L = Math.floor(y - r);
        if (c.V) {
          var w = t;
          n && (w = b.fp_easings[o().easing](L, a, l, n)), L <= n && Fi(e, w), L < n ? window.requestAnimationFrame(nt) : i === void 0 || v || (i(), p({ V: !1 }), v = !0);
        } else
          v || f || (i(), p({ V: !1 }), v = !0);
      }, window.requestAnimationFrame(nt);
    }
    function Nt(e) {
      var t = Ae(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && typeof n.play == "function" && n.play();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && Ui(n), n.onload = function() {
          n.hasAttribute("data-autoplay") && Ui(n);
        };
      });
    }
    function Ui(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function jn(e) {
      var t = Ae(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-keepplaying") || typeof n.pause != "function" || n.pause();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        /youtube\.com\/embed\//.test(I(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function Pe(e) {
      o().lazyLoading && s("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ae(e)).forEach(function(t) {
        if (["src", "srcset"].forEach(function(i) {
          var r = I(t, "data-" + i);
          r != null && r && (Ut(t, i), t.addEventListener("load", function() {
          }));
        }), _(t, "source")) {
          var n = T(t, "video, audio");
          n && (n.load(), n.onloadeddata = function() {
          });
        }
      });
    }
    function qi() {
      var e = u().j.item, t = u().j.activeSlide, n = Ki(e), i = String(n);
      t && (i = i + "-" + Ki(t.item)), i = i.replace("/", "-").replace("#", "");
      var r = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      k.className = k.className.replace(r, ""), x(k, "fp-viewing-" + i);
    }
    function Ki(e) {
      if (!e)
        return null;
      var t = I(e, "data-anchor"), n = de(e);
      return t == null && (t = n), t;
    }
    function Mn(e, t, n) {
      var i = "";
      o().anchors.length && !o().lockAnchors && (e ? (n != null && (i = n), t == null && (t = e), p({ F: t }), An(i + "/" + t)) : (e != null && p({ F: t }), An(n))), qi();
    }
    function An(e) {
      if (o().recordHistory)
        location.hash = e;
      else if (Le || Ee)
        b.history.replaceState(void 0, void 0, "#" + e);
      else {
        var t = b.location.href.split("#")[0];
        b.location.replace(t + "#" + e);
      }
    }
    function ot(e) {
      return ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, ot(e);
    }
    var d = { an: {}, un: function(e, t) {
      var n = this;
      return ot(this.an[e]) !== "object" && (this.an[e] = []), this.an[e].push(t), function() {
        return n.removeListener(e, t);
      };
    }, removeListener: function(e, t) {
      if (ot(this.an[e]) === "object") {
        var n = this.an[e].indexOf(t);
        n > -1 && this.an[e].splice(n, 1);
      }
    }, ln: function(e) {
      for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        i[r - 1] = arguments[r];
      ot(this.an[e]) === "object" && this.an[e].forEach(function(a) {
        return a.apply(t, i);
      });
    }, once: function(e, t) {
      var n = this, i = this.un(e, function() {
        i();
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
          a[l] = arguments[l];
        t.apply(n, a);
      });
    } };
    function Ji(e, t, n) {
      var i = t === "Section" ? o().anchors[e] : I(n, "data-anchor");
      return encodeURI(o().navigationTooltips[e] || i || t + " " + (e + 1));
    }
    var Tn = "onAfterRenderNoAnchor", Rt = "onClickOrTouch", On = "moveSlideLeft", Cn = "moveSlideRight", Qi = "onInitialise", K = "bindEvents", ae = "onDestroy", $i = "contentChanged", eo = "onScrollOverflowScrolled", kn = "onScrollPageAndSlide", to = "onKeyDown", no = "onMenuClick", io = "scrollPage", oo = "landscapeScroll", ro = "scrollBeyondFullpage", lo = "onPerformMovement", ao = "onSlideLeave", co = "onLeave", Nn = "afterSectionLoads", Rn = "afterSlideLoads";
    function hr(e) {
      e.cancelable && V(e), p({ D: "horizontalNav" });
      var t = T(this, $), n = s(fe, T(this, $))[0], i = bn(u().L, t).slides[de(T(this, "li"))];
      d.ln(oo, { slides: n, destination: i.item });
    }
    function so(e, t) {
      o().slidesNavigation && e != null && (z(s(fn, e), N), x(s("a", s("li", e)[t]), N));
    }
    var Ht, Oe = {};
    function Dt(e, t, n) {
      t !== "all" ? Oe[n][t] = e : Object.keys(Oe[n]).forEach(function(i) {
        Oe[n][i] = e;
      });
    }
    function Z() {
      return Oe;
    }
    function gr() {
      var e = T(this, $);
      A(this, Di) ? Z().m.left && (p({ D: "slideArrow" }), d.ln(On, { section: e })) : Z().m.right && (p({ D: "slideArrow" }), d.ln(Cn, { section: e }));
    }
    function uo(e) {
      !o().loopHorizontal && o().controlArrows && (Ft(s(mn, e.section), e.slideIndex !== 0), Ft(s(Bi, e.section), ut(e.destiny) != null));
    }
    function mr() {
      clearTimeout(Ht), p({ H: !1 });
    }
    function Ce(e, t, n) {
      var i = T(e, $), r = u().L.filter(function(v) {
        return v.item == i;
      })[0], a = r.slides.filter(function(v) {
        return v.item == t;
      })[0], l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: a.index(), section: i, sectionIndex: r.index(), anchorLink: r.anchor, slidesNav: s(hn, i)[0], slideAnchor: a.anchor, prevSlide: r.activeSlide.item, prevSlideIndex: r.activeSlide.index(), items: { section: r, origin: r.activeSlide, destination: a }, localIsResizing: c.C };
      l.xMovement = po(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || p({ canScroll: !1 }), m("parallax", "applyHorizontal", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), o().onSlideLeave && !l.localIsResizing && l.xMovement !== "none" && P(o().onSlideLeave) && se("onSlideLeave", l) === !1 ? p({ H: !1 }) : (D("dropEffect") && o().dropEffect || (x(t, N), z(We(t), N)), ce(), l.localIsResizing || (jn(l.prevSlide), Pe(t)), uo(l), r.isActive && !l.localIsResizing && Mn(l.slideIndex, l.slideAnchor, l.anchorLink), m("continuousHorizontal", "apply", l), d.ln(ao, l), _i() ? Hn(l) : fo(e, l, !0), o().interlockedSlides && h.interlockedSlides && (D("continuousHorizontal") && n !== void 0 && n !== l.xMovement || m("interlockedSlides", "apply", l)));
    }
    function fo(e, t, n) {
      var i = t.destinyPos;
      if (so(t.slidesNav, t.slideIndex), p({ scrollX: Math.round(i.left) }), o().css3) {
        var r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)";
        h.test.cn[t.sectionIndex] = r, D("dragAndMove") && t.sn !== void 0 || xn(s(Je, e)), C(s(Je, e), En(r)), D("interlockedSlides") || clearTimeout(Ht), Ht = setTimeout(function() {
          n && Hn(t);
        }, o().scrollingSpeed);
      } else
        h.test.left[t.sectionIndex] = Math.round(i.left), kt(e, Math.round(i.left), o().scrollingSpeed, function() {
          n && Hn(t);
        });
    }
    function po(e, t) {
      return e == t ? "none" : e > t ? "left" : "right";
    }
    function Sr() {
      clearTimeout(Ht);
    }
    function Hn(e) {
      m("continuousHorizontal", "afterSlideLoads", e), m("dragAndMove", "afterSlideLoads", e), e.localIsResizing || (m("parallax", "afterSlideLoads"), m("scrollOverflowReset", "setPrevious", e.prevSlide), m("scrollOverflowReset", "reset"), P(o().afterSlideLoad) && se("afterSlideLoad", e), p({ canScroll: !0 }), Nt(e.destiny), d.ln(Rn, e)), p({ H: !1 }), m("interlockedSlides", "interlockedSlides", e);
    }
    function rt(e, t) {
      tt(0, "internal"), t !== void 0 && p({ C: !0 }), Ce(T(e, fe), e), t !== void 0 && p({ C: !1 }), tt(ze().scrollingSpeed, "internal");
    }
    Oe.m = { up: !0, down: !0, left: !0, right: !0 }, Oe.k = Ne({}, Oe.m), d.un(Rt, function(e) {
      var t = e.target;
      (_(t, gn) || T(t, gn)) && gr.call(t, e);
    }), h.landscapeScroll = Ce, d.un(K, function() {
      d.un(lo, mr);
    });
    var Dn = null, Bn = null;
    function ce() {
      c.j = null, c.L.map(function(e) {
        var t = A(e.item, N);
        e.isActive = t, e.q = S.q(e.item), t && (c.j = e), e.slides.length && (e.activeSlide = null, e.slides.map(function(n) {
          var i = A(n.item, N);
          n.q = S.q(e.item), n.isActive = i, i && (e.activeSlide = n);
        }));
      }), function() {
        var e = c.j, t = !!c.j && c.j.slides.length, n = c.j ? c.j.activeSlide : null;
        if (!e && c.L.length && !u().N) {
          if (Dn) {
            var i = ho(Dn, c.L);
            i && (c.j = i, c.j.isActive = !0, x(c.j.item, N)), c.j && Te(c.j.item.offsetTop);
          }
          if (t && !n && Bn) {
            var r = ho(Bn, c.j.slides);
            r && (c.j.activeSlide = r, c.j.activeSlide.isActive = !0, x(c.j.activeSlide.item, N)), c.j.activeSlide && rt(c.j.activeSlide.item, "internal");
          }
        }
      }(), q(g(), "onUpdateStateDone");
    }
    function Bt() {
      var e = s(o().sectionSelector + ", " + $, g()), t = ct(e), n = Array.from(e).map(function(a) {
        return new ke(a);
      }), i = n.filter(function(a) {
        return a.isVisible;
      }), r = i.reduce(function(a, l) {
        return a.concat(l.slides);
      }, []);
      Dn = vo(c.j), Bn = vo(c.j ? c.j.activeSlide : null), c.O = t.length, c.R = i.reduce(function(a, l) {
        return a + l.slides.length;
      }, 0), c.L = i, c.tn = n, c.slides = r, c.rn = c.L.concat(c.slides);
    }
    function vo(e) {
      if (!e)
        return null;
      var t = e ? e.item : null, n = e.nn ? c.tn : c.j.dn;
      if (t) {
        var i = bn(n, t);
        return i ? i.index() : null;
      }
      return null;
    }
    function ho(e, t) {
      var n, i = e - 1, r = e;
      do {
        if (n = t[i] || t[r])
          break;
        i -= 1, r += 1;
      } while (i >= 0 || r < t.length);
      return n;
    }
    var ke = function(e) {
      var t = this;
      [].push.call(arguments, o().sectionSelector), le.apply(this, arguments), this.vn = s(o().slideSelector, e), this.dn = Array.from(this.vn).map(function(n) {
        return new zt(n, t);
      }), this.slides = this.dn.filter(function(n) {
        return n.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
        return n.isActive;
      })[0] || this.slides[0] : null;
    };
    ke.prototype = le.prototype, ke.prototype.constructor = ke;
    var zt = function(e, t) {
      this.parent = t, le.call(this, e, o().slideSelector);
    };
    function me(e) {
      return e && !e.item ? new Wi(new ke(e)) : e ? new Wi(e) : null;
    }
    function zn(e) {
      return e ? new vr(e) : null;
    }
    function se(e, t) {
      var n = function(i, r) {
        var a = { afterRender: function() {
          return { section: me(u().j), pn: zn(u().j.activeSlide) };
        }, onLeave: function() {
          return { origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().D };
        }, afterLoad: function() {
          return a.onLeave();
        }, afterSlideLoad: function() {
          return { section: me(r.items.section), origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().D };
        }, onSlideLeave: function() {
          return a.afterSlideLoad();
        }, beforeLeave: function() {
          return a.onLeave();
        }, onScrollOverflow: function() {
          return { section: me(u().j), pn: zn(u().j.activeSlide), position: r.position, direction: r.direction };
        } };
        return a[i]();
      }(e, t);
      return q(g(), e, n), o()[e].apply(n[Object.keys(n)[0]], Ao(n)) !== !1;
    }
    function In(e, t) {
      At("recordHistory", e, t);
    }
    function _e(e, t) {
      e || Te(0), At("autoScrolling", e, t);
      var n = u().j.item;
      if (o().autoScrolling && !o().scrollBar)
        C(Ct, { overflow: "hidden", height: "100%" }), z(k, "fp-scrollable"), In(ze().recordHistory, "internal"), C(g(), { "-ms-touch-action": "none", "touch-action": "none" }), n != null && Te(n.offsetTop);
      else if (C(Ct, { overflow: "visible", height: "initial" }), x(k, "fp-scrollable"), In(!!o().autoScrolling && ze().recordHistory, "internal"), C(g(), { "-ms-touch-action": "", "touch-action": "" }), Ot(g()), n != null) {
        var i = Ie(n.offsetTop);
        i.element.scrollTo(0, i.options);
      }
      q(g(), "setAutoScrolling", e);
    }
    function Pn() {
      for (var e = s(Lt), t = 0; t < e.length; t++)
        rt(e[t], "internal");
    }
    function go() {
      var e = s(".fp-auto-height")[0] || Gn() && s(".fp-auto-height-responsive")[0];
      o().lazyLoading && e && s(".fp-section:not(.active)").forEach(function(t) {
        var n, i, r, a, l;
        i = (n = t.getBoundingClientRect()).top, r = n.bottom, a = i + 2 < c._ && i > 0, l = r > 2 && r < c._, (a || l) && Pe(t);
      });
    }
    function wr() {
      q(_t(this), "click");
    }
    function mo() {
      He(s(Me));
      var e = j.createElement("div");
      e.setAttribute("id", "fp-nav");
      var t = j.createElement("ul");
      e.appendChild(t), Ze(e, k);
      var n = s(Me)[0];
      x(n, "fp-" + o().navigationPosition), o().showActiveTooltip && x(n, "fp-show-active");
      for (var i = "", r = 0; r < u().L.length; r++) {
        var a = u().L[r], l = "";
        o().anchors.length && (l = a.anchor), i += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + Ji(a.index(), "Section") + "</span><span></span></a>";
        var v = o().navigationTooltips[a.index()];
        v !== void 0 && v !== "" && (i += '<div class="fp-tooltip fp-' + o().navigationPosition + '">' + v + "</div>"), i += "</li>";
      }
      s("ul", n)[0].innerHTML = i;
      var f = s("li", s(Me)[0])[u().j.index()];
      x(s("a", f), N);
    }
    function yr(e) {
      e.preventDefault && V(e), p({ D: "verticalNav" });
      var t = de(T(this, "#fp-nav li"));
      d.ln(io, { destination: u().L[t] });
    }
    function _n(e, t) {
      var n;
      n = e, o().menu && o().menu.length && s(o().menu).forEach(function(i) {
        i != null && (z(s(fn, i), N), x(s('[data-menuanchor="' + n + '"]', i), N));
      }), function(i, r) {
        var a = s(Me)[0];
        o().navigation && a != null && a.style.display !== "none" && (z(s(fn, a), N), x(i ? s('a[href="#' + i + '"]', a) : s("a", s("li", a)[r]), N));
      }(e, t);
    }
    zt.prototype = le.prototype, zt.prototype.constructor = ke, h.setRecordHistory = In, h.setAutoScrolling = _e, h.test.setAutoScrolling = _e, (/* @__PURE__ */ new Date()).getTime();
    var Vn, Yn, Zn, Wn, lt, Xn, br = (Yn = !0, Zn = (/* @__PURE__ */ new Date()).getTime(), Wn = !b.fullpage_api, function(e, t) {
      var n = (/* @__PURE__ */ new Date()).getTime(), i = e === "wheel" ? o().scrollingSpeed : 100;
      return Yn = Wn || n - Zn >= i, Wn = !b.fullpage_api, Yn && (Vn = t(), Zn = n), Vn === void 0 || Vn;
    });
    function So(e, t) {
      if (P(o().beforeLeave))
        return br(u().D, function() {
          return se(e, t);
        });
    }
    function Ve(e, t, n) {
      var i = e.item;
      if (i != null) {
        var r, a, l = { element: i, callback: t, isMovementUp: n, dtop: wo(i), yMovement: Ln(u().j, i), anchorLink: e.anchor, sectionIndex: e.index(), activeSlide: e.activeSlide ? e.activeSlide.item : null, leavingSection: u().j.index() + 1, localIsResizing: c.C, items: { origin: u().j, destination: e }, direction: null };
        if (!(u().j.item == i && !c.C || o().scrollBar && we() === l.dtop && !A(i, "fp-auto-height"))) {
          if (l.activeSlide != null && (r = I(l.activeSlide, "data-anchor"), a = de(l.activeSlide, null)), !l.localIsResizing) {
            var v = l.yMovement;
            if (n !== void 0 && (v = n ? "up" : "down"), l.direction = v, Pi("dropEffect") && h.dropEffect.onLeave_(l), Pi("waterEffect") && h.waterEffect.onLeave_(l), P(o().beforeLeave) && So("beforeLeave", l) === !1 || P(o().onLeave) && !se("onLeave", l))
              return;
          }
          m("parallax", "apply", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), o().autoScrolling && o().continuousVertical && l.isMovementUp !== void 0 && (!l.isMovementUp && l.yMovement == "up" || l.isMovementUp && l.yMovement == "down") && (l = function(f) {
            p({ J: !0 });
            var y = u().j.item;
            return f.isMovementUp ? Wt(y, ti(y, $)) : ft(y, ni(y, $).reverse()), Te(u().j.item.offsetTop), Pn(), f.hn = y, f.dtop = f.element.offsetTop, f.yMovement = Ln(u().j, f.element), f.leavingSection = f.items.origin.index() + 1, f.sectionIndex = f.items.destination.index(), q(g(), "onContinuousVertical", f), f;
          }(l)), m("scrollOverflowReset", "setPrevious", u().j.item), l.localIsResizing || jn(u().j.item), D("dropEffect") && o().dropEffect || (x(i, N), z(We(i), N)), ce(), Pe(i), p({ canScroll: h.test.gn }), Mn(a, r, l.anchorLink), d.ln(co, l), function(f) {
            var y = o().scrollingSpeed < 700, L = y ? 700 : o().scrollingSpeed;
            if (p({ Z: "none", scrollY: Math.round(f.dtop) }), d.ln(lo), o().css3 && o().autoScrolling && !o().scrollBar)
              Gi("translate3d(0px, -" + Math.round(f.dtop) + "px, 0px)", !0), D("waterEffect") && Pn(), o().scrollingSpeed ? (clearTimeout(lt), lt = setTimeout(function() {
                It(f), p({ canScroll: !y || h.test.gn });
              }, o().scrollingSpeed)) : It(f);
            else {
              var w = Ie(f.dtop);
              h.test.top = -f.dtop + "px", clearTimeout(lt), kt(w.element, w.options, o().scrollingSpeed, function() {
                o().scrollBar ? lt = setTimeout(function() {
                  It(f);
                }, 30) : (It(f), p({ canScroll: !y || h.test.gn }));
              });
            }
            y && (clearTimeout(Xn), Xn = setTimeout(function() {
              p({ canScroll: !0 });
            }, L));
          }(l), p({ W: l.anchorLink }), _n(l.anchorLink, function(f) {
            return f.hn != null ? f.isMovementUp ? c.O - 1 : 0 : f.sectionIndex;
          }(l));
        }
      }
    }
    function wo(e) {
      var t = e.offsetHeight, n = e.offsetTop, i = n, r = D("dragAndMove") && m("dragAndMove", "isGrabbing") ? m("dragAndMove", "isScrollingDown") : n > c.X, a = i - W() + t, l = o().bigSectionsDestination;
      return t > W() ? (r || l) && l !== "bottom" || (i = a) : (r || c.C && ut(e) == null) && (i = a), D("offsetSections") && (i = h.offsetSections.getSectionPosition_(r, i, e)), p({ X: i }), i;
    }
    function It(e) {
      p({ N: !1 }), function(t) {
        t.hn != null && (t.isMovementUp ? Wt(s($)[0], t.hn) : ft(s($)[u().L.length - 1], t.hn), Te(u().j.item.offsetTop), function() {
          for (var n = s(Lt), i = 0; i < n.length; i++)
            rt(n[i], "internal");
        }(), t.sectionIndex = t.items.destination.index(), t.leavingSection = t.items.origin.index() + 1, p({ J: !1 }));
      }(e), P(o().afterLoad) && !e.localIsResizing && se("afterLoad", e), m("parallax", "afterLoad"), m("waterEffect", "afterLoad"), m("dropEffect", "afterLoad"), m("scrollOverflowReset", "reset"), m("resetSliders", "apply", e), ce(), e.localIsResizing || Nt(e.element), x(e.element, De), z(We(e.element), De), go(), p({ canScroll: !0 }), d.ln(Nn, e), P(e.callback) && e.callback();
    }
    function Fn(e, t) {
      At("fitToSection", e, t);
    }
    function yo() {
      c.canScroll && (p({ C: !0 }), Ve(c.j), p({ C: !1 }));
    }
    function bo() {
      var e = o().responsive || o().responsiveWidth, t = o().responsiveHeight, n = e && b.innerWidth < e, i = t && b.innerHeight < t;
      e && t ? Pt(n || i) : e ? Pt(n) : t && Pt(i);
    }
    function Pt(e) {
      var t = Gn();
      e ? t || (_e(!1, "internal"), Fn(!1, "internal"), Vt(s(Me)), x(k, yt), P(o().afterResponsive) && o().afterResponsive.call(g(), e), m("responsiveSlides", "toSections"), q(g(), "afterResponsive", e)) : t && (_e(ze().autoScrolling, "internal"), Fn(ze().autoScrolling, "internal"), Qn(s(Me)), z(k, yt), P(o().afterResponsive) && o().afterResponsive.call(g(), e), m("responsiveSlides", "toSlides"), q(g(), "afterResponsive", e));
    }
    function Gn() {
      return A(k, yt);
    }
    function xo(e) {
      o().verticalCentered && (!o().scrollOverflow && S.mn(e.item) || S.wn(e) || A(e.item, Ni) || x(e.item, Ni));
    }
    h.moveTo = moveTo, h.getScrollY = function() {
      return c.scrollY;
    }, d.un(ae, function() {
      clearTimeout(lt), clearTimeout(Xn);
    }), h.setFitToSection = Fn, h.fitToSection = yo, h.setResponsive = Pt;
    var Un, Lo = null;
    function qn(e) {
      var t = e.item, n = e.vn.length, i = e.index();
      !u().j && e.isVisible && (x(t, N), ce(), Lo = u().j.item), D("offsetSections") && C(t, { height: wn(t) }), o().paddingTop && C(t, { "padding-top": o().paddingTop }), o().paddingBottom && C(t, { "padding-bottom": o().paddingBottom }), o().sectionsColor[i] !== void 0 && C(t, { "background-color": o().sectionsColor[i] }), o().anchors[i] !== void 0 && t.setAttribute("data-anchor", e.anchor), n || xo(e);
    }
    function Eo() {
      o().scrollOverflow && !o().scrollBar && (S.bn(), S.Sn());
    }
    function xr() {
      d.removeListener(Tn, Eo), ve("keyup", S.yn);
    }
    h.getActiveSection = function() {
      return u().j;
    }, d.un(K, function() {
      d.un(Tn, Eo), d.un(co, S.onLeave), d.un(ao, S.onLeave), d.un(Rn, S.afterLoad), d.un(Nn, S.afterLoad), d.un(ae, xr), Re("keyup", S.yn);
    });
    var Kn, at, S = { Mn: null, Tn: !0, An: !0, xn: null, On: null, kn: function(e) {
      if (!c.canScroll)
        return V(e), !1;
    }, En: function(e) {
      if (!ii() && o().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !S.An)
        return V(e), !1;
    }, yn: function() {
      S.Tn = c.canScroll;
    }, onLeave: function() {
      clearTimeout(Un), S.An = !1;
    }, afterLoad: function() {
      S.An = !1, clearTimeout(Un), Un = setTimeout(function() {
        S.Tn = c.canScroll;
      }, 200);
    }, Rn: function() {
      j.activeElement === this.Mn && (this.Mn.blur(), S.An = !1);
    }, Sn: function() {
      if (o().scrollOverflow && S.Tn) {
        S.Rn();
        var e = S.Ln(u().j.item);
        !e || Le || Ee || (this.Mn = e, requestAnimationFrame(function() {
          e.focus(), S.An = !0;
        })), S.Tn = !1;
      }
    }, bn: function() {
      o().scrollOverflowMacStyle && !dr && x(k, "fp-scroll-mac"), u().rn.forEach(function(e) {
        if (!(e.slides && e.slides.length || A(e.item, "fp-auto-height-responsive") && Gn())) {
          var t, n = Ae(e.item), i = S.mn(e.item), r = (t = e).nn ? t : t.parent;
          if (ki) {
            var a = i ? "addClass" : "removeClass";
            Ci[a](r.item, $e), Ci[a](e.item, $e);
          } else
            x(r.item, $e), x(e.item, $e);
          e.q || (S.jn(n), S.zn(n)), e.q = !0;
        }
      });
    }, zn: function(e) {
      S.Ln(e).addEventListener("scroll", S.Dn), e.addEventListener("wheel", S.kn, { passive: !1 }), e.addEventListener("keydown", S.En, { passive: !1 });
    }, jn: function(e) {
      var t = document.createElement("div");
      t.className = Be, ei(e, t), t.setAttribute("tabindex", "-1");
    }, Nn: function(e) {
      var t = s(Qe, e)[0];
      t && (Zt(t), e.removeAttribute("tabindex"));
    }, Ln: function(e) {
      var t = Ae(e);
      return s(Qe, t)[0] || t;
    }, q: function(e) {
      return A(e, Be) || s(Qe, e)[0] != null;
    }, wn: function(e) {
      return e.nn && e.activeSlide ? e.activeSlide.q : e.q;
    }, mn: function(e) {
      return S.Ln(e).scrollHeight > b.innerHeight;
    }, isScrolled: function(e, t) {
      if (!c.canScroll)
        return !1;
      if (o().scrollBar)
        return !0;
      var n = S.Ln(t);
      if (!o().scrollOverflow || !A(n, Be) || A(t, "fp-noscroll") || A(Ae(t), "fp-noscroll"))
        return !0;
      var i = ki ? 1 : 0, r = n.scrollTop, a = e === "up" && r <= 0, l = e === "down" && n.scrollHeight <= Math.ceil(n.offsetHeight + r) + i, v = a || l;
      return v || (this.xn = (/* @__PURE__ */ new Date()).getTime()), v;
    }, Pn: function() {
      this.On = (/* @__PURE__ */ new Date()).getTime();
      var e = this.On - S.xn, t = (Le || Ee) && c.G, n = c.Y && e > 600;
      return t && e > 400 || n;
    }, Dn: (Kn = 0, function(e) {
      var t = e.target.scrollTop, n = c.Z !== "none" ? c.Z : Kn < t ? "down" : "up";
      Kn = t, P(o().onScrollOverflow) && se("onScrollOverflow", { position: t, direction: n }), A(e.target, Be) && c.canScroll && S.isScrolled(n, e.target) && S.Pn() && S.mn(u().j.item) && d.ln(eo, { direction: n });
    }) };
    function ee(e, t) {
      b.console && b.console[e] && b.console[e]("fullPage: " + t);
    }
    function Jn(e) {
      return b.getComputedStyle(e).display !== "none";
    }
    function ct(e) {
      return Array.from(e).filter(function(t) {
        return Jn(t);
      });
    }
    function s(e, t) {
      return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(e) : null;
    }
    function Ne(e) {
      e = e || {};
      for (var t = 1, n = arguments.length; t < n; ++t) {
        var i = arguments[t];
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && r != "__proto__" && r != "constructor" && (Object.prototype.toString.call(i[r]) !== "[object Object]" ? e[r] = i[r] : e[r] = Ne(e[r], i[r]));
      }
      return e;
    }
    function A(e, t) {
      return e != null && e.classList.contains(t);
    }
    function W() {
      return "innerHeight" in b ? b.innerHeight : j.documentElement.offsetHeight;
    }
    function st() {
      return b.innerWidth;
    }
    function C(e, t) {
      var n;
      for (n in e = Se(e), t)
        if (t.hasOwnProperty(n) && n !== null)
          for (var i = 0; i < e.length; i++)
            e[i].style[n] = t[n];
      return e;
    }
    function _t(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.previousElementSibling;
      var n = _t(e);
      return n && _(n, t) ? n : null;
    }
    function ut(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.nextElementSibling;
      var n = ut(e);
      return n && _(n, t) ? n : null;
    }
    function jo(e) {
      return e[e.length - 1];
    }
    function de(e, t) {
      e = Ye(e) ? e[0] : e;
      for (var n = t != null ? s(t, e.parentNode) : e.parentNode.childNodes, i = 0, r = 0; r < n.length; r++) {
        if (n[r] == e)
          return i;
        n[r].nodeType == 1 && i++;
      }
      return -1;
    }
    function Se(e) {
      return Ye(e) ? e : [e];
    }
    function Vt(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "none";
      return e;
    }
    function Qn(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "block";
      return e;
    }
    function Ye(e) {
      return Object.prototype.toString.call(e) === "[object Array]" || Object.prototype.toString.call(e) === "[object NodeList]";
    }
    function x(e, t) {
      e = Se(e);
      for (var n = 0; n < e.length; n++)
        e[n].classList.add(t);
      return e;
    }
    function z(e, t) {
      e = Se(e);
      for (var n = t.split(" "), i = 0; i < n.length; i++) {
        t = n[i];
        for (var r = 0; r < e.length; r++)
          e[r].classList.remove(t);
      }
      return e;
    }
    function Ze(e, t) {
      t.appendChild(e);
    }
    function $n(e, t, n) {
      var i;
      t = t || j.createElement("div");
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (n && !r || !n) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a);
      }
      return e;
    }
    function Yt(e, t) {
      $n(e, t, !0);
    }
    function ei(e, t) {
      for (typeof t == "string" && (t = ye(t)), e.appendChild(t); e.firstChild !== t; )
        t.appendChild(e.firstChild);
    }
    function Zt(e) {
      for (var t = j.createDocumentFragment(); e.firstChild; )
        t.appendChild(e.firstChild);
      e.parentNode.replaceChild(t, e);
    }
    function T(e, t) {
      return e && e.nodeType === 1 ? _(e, t) ? e : T(e.parentNode, t) : null;
    }
    function ft(e, t) {
      Xt(e, e.nextSibling, t);
    }
    function Wt(e, t) {
      Xt(e, e, t);
    }
    function Xt(e, t, n) {
      Ye(n) || (typeof n == "string" && (n = ye(n)), n = [n]);
      for (var i = 0; i < n.length; i++)
        e.parentNode.insertBefore(n[i], t);
    }
    function we() {
      var e = j.documentElement;
      return (b.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function We(e) {
      return Array.prototype.filter.call(e.parentNode.children, function(t) {
        return t !== e;
      });
    }
    function V(e) {
      e.preventDefault();
    }
    function I(e, t) {
      return e.getAttribute(t);
    }
    function Re(e, t, n) {
      j.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function pe(e, t, n) {
      b.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function ve(e, t, n) {
      j.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function Xe(e, t, n) {
      b.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function P(e) {
      if (typeof e == "function")
        return !0;
      var t = Object.prototype.toString.call(e);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function q(e, t, n) {
      var i;
      n = n === void 0 ? {} : n, typeof b.CustomEvent == "function" ? i = new CustomEvent(t, { detail: n }) : (i = j.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
    }
    function _(e, t) {
      return (e.matches || e.Hn || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function Ft(e, t) {
      if (typeof t == "boolean")
        for (var n = 0; n < e.length; n++)
          e[n].style.display = t ? "block" : "none";
      return e;
    }
    function ye(e) {
      var t = j.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild;
    }
    function He(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n && n.parentElement && n.parentNode.removeChild(n);
      }
    }
    function Mo(e, t) {
      Array.prototype.filter.call(e, t);
    }
    function Gt(e, t, n) {
      for (var i = e[n], r = []; i; )
        (_(i, t) || t == null) && r.push(i), i = i[n];
      return r;
    }
    function ti(e, t) {
      return Gt(e, t, "nextElementSibling");
    }
    function ni(e, t) {
      return Gt(e, t, "previousElementSibling");
    }
    function Ao(e) {
      return Object.keys(e).map(function(t) {
        return e[t];
      });
    }
    function ue(e) {
      return e[e.length - 1];
    }
    function dt(e, t) {
      for (var n = 0, i = e.slice(Math.max(e.length - t, 1)), r = 0; r < i.length; r++)
        n += i[r];
      return Math.ceil(n / t);
    }
    function Ut(e, t) {
      e.setAttribute(t, I(e, "data-" + t)), e.removeAttribute("data-" + t);
    }
    function To(e, t) {
      var n = [e];
      do
        e = e.parentNode, n.push(e);
      while (!_(e, t));
      return n;
    }
    function ii() {
      var e = j.activeElement;
      return _(e, "textarea") || _(e, "input") || _(e, "select") || I(e, "contentEditable") == "true" || I(e, "contentEditable") == "";
    }
    function Oo(e) {
      d.ln(Rt, { e, target: e.target });
    }
    function Lr() {
      ["click", "touchstart"].forEach(function(e) {
        ve(e, Oo, { passive: !1 });
      });
    }
    function Er() {
      p({ U: !0 });
    }
    function Co() {
      x(s(o().sectionSelector, g()), xt), x(s(o().slideSelector, g()), dn);
    }
    function oi(e) {
      var t = e.slides.length, n = e.vn, i = e.slides, r = 100 * t, a = 100 / t;
      if (!s(fe, e.item)[0]) {
        var l = j.createElement("div");
        l.className = Et, Yt(n, l);
        var v = j.createElement("div");
        v.className = vn, Yt(n, v);
      }
      C(s(Je, e.item), { width: r + "%" }), t > 1 && (o().controlArrows && function(y) {
        var L = y.item, w = [ye(o().controlArrowsHTML[0]), ye(o().controlArrowsHTML[1])];
        ft(s(fe, L)[0], w), x(w, Hi), x(w[0], Di), x(w[1], "fp-next"), o().controlArrowColor !== "#fff" && (C(s(Bi, L), { "border-color": "transparent transparent transparent " + o().controlArrowColor }), C(s(mn, L), { "border-color": "transparent " + o().controlArrowColor + " transparent transparent" })), o().loopHorizontal || Vt(s(mn, L));
      }(e), o().slidesNavigation && function(y) {
        var L = y.item, w = y.slides.length;
        Ze(ye('<div class="fp-slidesNav"><ul></ul></div>'), L);
        var M = s(hn, L)[0];
        x(M, "fp-" + o().slidesNavPosition);
        for (var O = 0; O < w; O++)
          Ze(ye('<li><a href="#"><span class="fp-sr-only">' + Ji(O, "Slide", s(pn, L)[O]) + "</span><span></span></a></li>"), s("ul", M)[0]);
        C(M, { "margin-left": "-" + M.innerWidth / 2 + "px" });
        var X = y.activeSlide ? y.activeSlide.index() : 0;
        x(s("a", s("li", M)[X]), N);
      }(e)), i.forEach(function(y) {
        C(y.item, { width: a + "%" }), o().verticalCentered && xo(y);
      });
      var f = D("responsiveSlides") ? null : e.activeSlide || null;
      f != null && c.j && (c.j.index() !== 0 || c.j.index() === 0 && f.index() !== 0) ? (rt(f.item, "internal"), x(f.item, "fp-initial")) : x(n[0], N);
    }
    window.fp_utils = { $: s, deepExtend: Ne, hasClass: A, getWindowHeight: W, css: C, prev: _t, next: ut, last: jo, index: de, getList: Se, hide: Vt, show: Qn, isArrayOrList: Ye, addClass: x, removeClass: z, appendTo: Ze, wrap: $n, wrapAll: Yt, wrapInner: ei, unwrap: Zt, closest: T, after: ft, before: Wt, insertBefore: Xt, getScrollTop: we, siblings: We, preventDefault: V, isFunction: P, trigger: q, matches: _, toggle: Ft, createElementFromHTML: ye, remove: He, filter: Mo, untilAll: Gt, nextAll: ti, prevAll: ni, showError: ee, scrollOverflowHandler: S }, d.un(K, function() {
      ["click", "touchstart"].forEach(function(e) {
        Re(e, Oo, { passive: !1 });
      }), pe("focus", Er), d.un(ae, Lr);
    });
    var ko = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
    function No() {
      return m("responsiveSlides", "isResponsiveSlidesChanging") || ct(s(o().slideSelector, g())).length !== u().R;
    }
    function ri(e) {
      var t = No();
      (No() || m("responsiveSlides", "isResponsiveSlidesChanging") || ct(s(o().sectionSelector, g())).length !== u().O) && !c.J && (o().observer && at && at.disconnect(), Bt(), ce(), o().anchors = [], He(s(Me)), m("responsiveSlides", "isResponsiveSlidesChanging") || Co(), Ii(), o().navigation && mo(), t && (He(s(hn)), He(s(gn))), u().L.forEach(function(n) {
        n.slides.length ? t && oi(n) : qn(n);
      })), o().observer && at && s(je)[0] && at.observe(s(je)[0], ko);
    }
    d.un(K, function() {
      var e, t, n;
      o().observer && "MutationObserver" in window && s(je)[0] && (e = s(je)[0], t = ko, (n = new MutationObserver(ri)).observe(e, t), at = n), d.un($i, ri);
    }), h.render = ri;
    var jr = function() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", { get: function() {
          e = !0;
        } });
        pe("testPassive", null, t), Xe("testPassive", null, t);
      } catch {
      }
      return function() {
        return e;
      };
    }();
    function Ro() {
      return !!jr() && { passive: !1 };
    }
    var Ho, Do, li, be, qt = (li = (/* @__PURE__ */ new Date()).getTime(), be = [], { Cn: function(e) {
      var t = (e = e || b.event).wheelDelta || -e.deltaY || -e.detail, n = Math.max(-1, Math.min(1, t)), i = e.wheelDeltaX !== void 0 || e.deltaX !== void 0;
      Ho = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
      var r = (/* @__PURE__ */ new Date()).getTime();
      Do = n < 0 ? "down" : "up", be.length > 149 && be.shift(), be.push(Math.abs(t));
      var a = r - li;
      li = r, a > 200 && (be = []);
    }, In: function() {
      var e = dt(be, 10) >= dt(be, 70);
      return !!be.length && e && Ho;
    }, Wn: function() {
      return Do;
    } });
    function Mr() {
      var e = o().css3 ? we() + W() : ue(u().L).item.offsetTop + ue(u().L).item.offsetHeight, t = Ie(e);
      h.test.top = -e + "px", p({ canScroll: !1 }), kt(t.element, t.options, o().scrollingSpeed, function() {
        setTimeout(function() {
          p({ N: !0 }), p({ canScroll: !0 });
        }, 30);
      });
    }
    function Ar() {
      g().getBoundingClientRect().bottom >= 0 && Bo();
    }
    function Bo() {
      var e = Ie(ue(u().L).item.offsetTop);
      p({ canScroll: !1 }), kt(e.element, e.options, o().scrollingSpeed, function() {
        p({ canScroll: !0 }), p({ N: !1 }), p({ Fn: !1 });
      });
    }
    var ai, ci, si, zo = (ai = !1, ci = {}, si = {}, function(e, t, n) {
      switch (e) {
        case "set":
          ci[t] = (/* @__PURE__ */ new Date()).getTime(), si[t] = n;
          break;
        case "isNewKeyframe":
          var i = (/* @__PURE__ */ new Date()).getTime();
          ai = i - ci[t] > si[t];
      }
      return ai;
    });
    function pt() {
      var e = u().j.next();
      e || !o().loopBottom && !o().continuousVertical || (e = u().L[0]), e != null ? Ve(e, null, !1) : g().scrollHeight < k.scrollHeight && o().scrollBar && o().Vn && d.ln(ro);
    }
    function Fe() {
      var e = u().j.prev();
      e || !o().loopTop && !o().continuousVertical || (e = ue(u().L)), e != null && Ve(e, null, !0);
    }
    h.moveSectionDown = pt, h.moveSectionUp = Fe;
    var Kt = 0;
    function Io(e) {
      o().autoScrolling && (c.canScroll && (e.pageY < Kt && Z().m.up ? Fe() : e.pageY > Kt && Z().m.down && pt()), Kt = e.pageY);
    }
    function Po(e) {
      if (Z().m[e]) {
        var t = e === "down" ? pt : Fe;
        D("scrollHorizontally") && (t = m("scrollHorizontally", "getScrollSection", { type: e, scrollSection: t })), o().scrollOverflow && S.wn(u().j) ? S.isScrolled(e, u().j.item) && S.Pn() && t() : t();
      }
    }
    var Jt, ui, Ge, Qt = 0, vt = 0, $t = 0, ht = 0, en = Vo(), oe = { Zn: "ontouchmove" in window ? "touchmove" : en ? en.move : null, Bn: "ontouchstart" in window ? "touchstart" : en ? en.down : null };
    function gt(e) {
      var t = T(e.target, $) || u().j.item, n = S.wn(u().j);
      if (mt(e)) {
        p({ G: !0, Y: !1 }), o().autoScrolling && (n && !c.canScroll || o().scrollBar) && V(e);
        var i = fi(e);
        $t = i.y, ht = i.x;
        var r = Math.abs(Qt - $t) > b.innerHeight / 100 * o().touchSensitivity, a = Math.abs(vt - ht) > st() / 100 * o().touchSensitivity, l = s(fe, t).length && Math.abs(vt - ht) > Math.abs(Qt - $t), v = Qt > $t ? "down" : "up";
        p({ Z: l ? vt > ht ? "right" : "left" : v }), l ? !c.H && a && (vt > ht ? Z().m.right && d.ln(Cn, { section: t }) : Z().m.left && d.ln(On, { section: t })) : o().autoScrolling && c.canScroll && r && Po(v);
      }
    }
    function mt(e) {
      return e.pointerType === void 0 || e.pointerType != "mouse";
    }
    function tn(e) {
      if (o().fitToSection && p({ V: !1 }), mt(e)) {
        var t = fi(e);
        Qt = t.y, vt = t.x;
      }
      pe("touchend", _o);
    }
    function _o() {
      Xe("touchend", _o), p({ G: !1 });
    }
    function fi(e) {
      var t = {};
      return t.y = e.pageY !== void 0 && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = e.pageX !== void 0 && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ee && mt(e) && o().scrollBar && e.touches !== void 0 && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }
    function Vo() {
      var e;
      return b.PointerEvent && (e = { down: "pointerdown", move: "pointermove" }), e;
    }
    function di(e) {
      o().autoScrolling && mt(e) && Z().m.up && (c.canScroll || V(e));
    }
    function Yo(e, t) {
      var n = t ?? u().j.item, i = bn(c.L, n), r = s(fe, n)[0];
      if (!(r == null || Tt() || c.H || i.slides.length < 2)) {
        var a = i.activeSlide, l = e === "left" ? a.prev() : a.next();
        if (!l) {
          if (!o().loopHorizontal)
            return;
          l = e === "left" ? ue(i.slides) : i.slides[0];
        }
        p({ H: !h.test.gn }), Ce(r, l.item, e);
      }
    }
    function pi(e) {
      Yo("left", e);
    }
    function vi(e) {
      Yo("right", e);
    }
    function hi(e) {
      var t = u().L.filter(function(i) {
        return i.anchor === e;
      })[0];
      if (!t) {
        var n = e !== void 0 ? e - 1 : 0;
        t = u().L[n];
      }
      return t;
    }
    function Zo(e) {
      e != null && Ce(T(e, fe), e);
    }
    function gi(e, t) {
      var n = hi(e);
      if (n != null) {
        var i = function(r, a) {
          var l = a.slides.filter(function(v) {
            return v.anchor === r;
          })[0];
          return l == null && (r = r !== void 0 ? r : 0, l = a.slides[r]), l ? l.item : null;
        }(t, n);
        n.anchor && n.anchor === c.W || A(n.item, N) ? Zo(i) : Ve(n, function() {
          Zo(i);
        });
      }
    }
    function St(e, t) {
      var n = hi(e);
      t !== void 0 ? gi(e, t) : n != null && Ve(n);
    }
    function Tr() {
      clearTimeout(ui), ve("keydown", Wo), ve("keyup", Xo);
    }
    function Wo(e) {
      clearTimeout(ui);
      var t = e.keyCode, n = [37, 39].indexOf(t) > -1, i = o().autoScrolling || o().fitToSection || n;
      t === 9 ? function(r) {
        var a = r.shiftKey, l = j.activeElement, v = mi(Ae(u().j.item));
        function f(Y) {
          return V(Y), v[0] ? v[0].focus() : null;
        }
        if (c.canScroll) {
          if (!function(Y) {
            var R = mi(j), H = R.indexOf(j.activeElement), E = R[Y.shiftKey ? H - 1 : H + 1], F = T(E, pn), G = T(E, $);
            return !F && !G;
          }(r)) {
            l ? T(l, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (l = f(r)) : f(r);
            var y = l == v[0], L = l == v[v.length - 1], w = a && y;
            if (w || !a && L) {
              V(r);
              var M = function(Y) {
                var R, H = Y ? "prevPanel" : "nextPanel", E = [], F = Xi((c.j && c.j.activeSlide ? c.j.activeSlide : c.j)[H]());
                do
                  (E = mi(F.item)).length && (R = { Gn: F, Yn: E[Y ? E.length - 1 : 0] }), F = Xi(F[H]());
                while (F && E.length === 0);
                return R;
              }(w), O = M ? M.Gn : null;
              if (O) {
                var X = O.nn ? O : O.parent;
                d.ln(kn, { Un: X.index() + 1, slideAnchor: O.nn ? 0 : O.index() }), Ge = M.Yn, V(r);
              }
            }
          }
        } else
          V(r);
      }(e) : !ii() && o().keyboardScrolling && i && (Jt = e.ctrlKey, ui = setTimeout(function() {
        (function(r) {
          var a = r.shiftKey, l = j.activeElement, v = _(l, "video") || _(l, "audio"), f = S.isScrolled("up", u().j.item), y = S.isScrolled("down", u().j.item), L = [37, 39].indexOf(r.keyCode) > -1;
          if (function(w) {
            (function(M) {
              return [40, 38, 32, 33, 34].indexOf(M.keyCode) > -1 && !c.N;
            })(w) && !T(w.target, Qe) && w.preventDefault();
          }(r), c.canScroll || L)
            switch (p({ D: "keydown" }), r.keyCode) {
              case 38:
              case 33:
                Z().k.up && f ? c.N ? d.ln(to, { e: r }) : Fe() : S.Sn();
                break;
              case 32:
                if (a && Z().k.up && !v && f) {
                  Fe();
                  break;
                }
              case 40:
              case 34:
                if (Z().k.down && y) {
                  if (c.N)
                    return;
                  r.keyCode === 32 && v || pt();
                } else
                  S.Sn();
                break;
              case 36:
                Z().k.up && St(1);
                break;
              case 35:
                Z().k.down && St(u().L.length);
                break;
              case 37:
                Z().k.left && pi();
                break;
              case 39:
                Z().k.right && vi();
            }
        })(e);
      }, 0));
    }
    function Xo(e) {
      c.U && (Jt = e.ctrlKey);
    }
    function Or() {
      p({ U: !1 }), Jt = !1;
    }
    function Cr(e) {
      Fo();
    }
    function kr(e) {
      T(Ge, pn) && !T(Ge, Lt) || Fo();
    }
    function Fo() {
      Ge && (Ge.focus(), Ge = null);
    }
    function mi(e) {
      return [].slice.call(s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]', e)).filter(function(t) {
        return I(t, "tabindex") !== "-1" && t.offsetParent !== null;
      });
    }
    h.moveSlideLeft = pi, h.moveSlideRight = vi, h.moveTo = St, d.un(K, function() {
      pe("blur", Or), Re("keydown", Wo), Re("keyup", Xo), d.un(ae, Tr), d.un(Rn, Cr), d.un(Nn, kr);
    });
    var Go = (/* @__PURE__ */ new Date()).getTime(), Ue = [];
    function Si(e) {
      e ? (function() {
        var t, n = "";
        b.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
        var i = "onwheel" in j.createElement("div") ? "wheel" : j.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", r = Ro();
        i == "DOMMouseScroll" ? j[t](n + "MozMousePixelScroll", qe, r) : j[t](n + i, qe, r);
      }(), g().addEventListener("mousedown", Uo), g().addEventListener("mouseup", qo)) : (j.addEventListener ? (ve("mousewheel", qe, !1), ve("wheel", qe, !1), ve("MozMousePixelScroll", qe, !1)) : j.detachEvent("onmousewheel", qe), g().removeEventListener("mousedown", Uo), g().removeEventListener("mouseup", qo));
    }
    function qe(e) {
      var t = (/* @__PURE__ */ new Date()).getTime(), n = A(s(".fp-completely")[0], "fp-normal-scroll"), i = function(L, w) {
        (/* @__PURE__ */ new Date()).getTime();
        var M = u().N && L.getBoundingClientRect().bottom >= 0 && qt.Wn() === "up", O = u().Fn;
        if (O)
          return V(w), !1;
        if (u().N) {
          if (M) {
            var X;
            if (!(O || zo("isNewKeyframe", "beyondFullpage") && qt.In()))
              return (X = Ie(ue(u().L).item.offsetTop + ue(u().L).item.offsetHeight)).element.scrollTo(0, X.options), p({ Fn: !1 }), V(w), !1;
            if (qt.In())
              return M = !1, p({ Fn: !0 }), p({ D: "wheel" }), Bo(), V(w), !1;
          } else
            zo("set", "beyondFullpage", 1e3);
          if (!O && !M)
            return !0;
        }
      }(g(), e);
      if (c.Y || p({ G: !1, Y: !0, Z: "none" }), !Z().m.down && !Z().m.up)
        return V(e), !1;
      if (i)
        return !0;
      if (i === !1)
        return V(e), !1;
      if (o().autoScrolling && !Jt && !n) {
        var r = (e = e || b.event).wheelDelta || -e.deltaY || -e.detail, a = Math.max(-1, Math.min(1, r)), l = e.wheelDeltaX !== void 0 || e.deltaX !== void 0, v = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !l, f = a < 0 ? "down" : a > 0 ? "up" : "none";
        Ue.length > 149 && Ue.shift(), Ue.push(Math.abs(r)), o().scrollBar && V(e);
        var y = t - Go;
        return Go = t, y > 200 && (Ue = []), p({ B: f }), c.canScroll && !Tt() && dt(Ue, 10) >= dt(Ue, 70) && v && (p({ D: "wheel" }), Po(a < 0 ? "down" : "up")), !1;
      }
      o().fitToSection && p({ V: !1 });
    }
    function Uo(e) {
      var t;
      e.which == 2 && (t = e.pageY, Kt = t, g().addEventListener("mousemove", Io));
    }
    function qo(e) {
      e.which == 2 && g().removeEventListener("mousemove", Io);
    }
    function wt(e) {
      e ? (Si(!0), function() {
        if (oe.Zn && (Le || Ee) && (!D("dragAndMove") || o().dragAndMove === "mouseonly")) {
          o().autoScrolling && (k.removeEventListener(oe.Zn, di, { passive: !1 }), k.addEventListener(oe.Zn, di, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Bn, tn), t.removeEventListener(oe.Zn, gt, { passive: !1 }), t.addEventListener(oe.Bn, tn), t.addEventListener(oe.Zn, gt, { passive: !1 });
        }
      }()) : (Si(!1), function() {
        if (oe.Zn && (Le || Ee)) {
          o().autoScrolling && (k.removeEventListener(oe.Zn, gt, { passive: !1 }), k.removeEventListener(oe.Zn, di, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Bn, tn), t.removeEventListener(oe.Zn, gt, { passive: !1 });
        }
      }());
    }
    h.setMouseWheelScrolling = Si;
    var wi = !0;
    function Nr() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
        ve(e, Jo, !0);
      });
    }
    function Ko(e, t) {
      document["fp_" + e] = t, Re(e, Jo, !0);
    }
    function Jo(e) {
      var t = e.type, n = !1, i = t === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
      i != document && i ? (t === "touchend" && (wi = !1, setTimeout(function() {
        wi = !0;
      }, 800)), (t !== "mouseenter" || wi) && (o().normalScrollElements.split(",").forEach(function(r) {
        if (!n) {
          var a = _(i, r), l = T(i, r);
          (a || l) && (h.shared.Xn || wt(!1), h.shared.Xn = !0, n = !0);
        }
      }), !n && h.shared.Xn && (wt(!0), h.shared.Xn = !1))) : wt(!0);
    }
    function nn(e, t) {
      tt(0, "internal"), St(e, t), tt(ze().scrollingSpeed, "internal");
    }
    d.un(K, function() {
      o().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
        Ko(e, !1);
      }), ["mouseleave", "touchend"].forEach(function(e) {
        Ko(e, !0);
      })), d.un(ae, Nr);
    }), h.silentMoveTo = nn;
    var yi, Qo, bi = W(), $o = st(), xi = !1;
    function Rr() {
      clearTimeout(yi), clearTimeout(Qo), Xe("resize", Li);
    }
    function Li() {
      xi || (o().autoScrolling && !o().scrollBar || !o().fitToSection) && er(W()), function() {
        if (Le)
          for (var e = 0; e < 4; e++)
            Qo = setTimeout(function() {
              window.requestAnimationFrame(function() {
                o().autoScrolling && !o().scrollBar && (p({ C: !0 }), nn(c.j.index() + 1), p({ C: !1 }));
              });
            }, 200 * e);
      }(), xi = !0, clearTimeout(yi), yi = setTimeout(function() {
        (function() {
          if (p({ C: !0 }), er(""), q(g(), "onResize"), o().autoScrolling || c.N || function() {
            if (!o().autoScrolling || o().scrollBar) {
              var r = 0.01 * b.innerHeight;
              j.documentElement.style.setProperty("--vh", "".concat(r, "px"));
            }
          }(), d.ln($i), ce(), bo(), Le) {
            var e = j.activeElement;
            if (!_(e, "textarea") && !_(e, "input") && !_(e, "select")) {
              var t = W();
              Math.abs(t - bi) > 20 * Math.max(bi, t) / 100 && (Ei(!0), bi = t);
            }
          } else
            n = W(), i = st(), c._ === n && $o === i || (p({ _: n }), $o = i, Ei(!0));
          var n, i;
          q(g(), "onResizeEnds"), p({ C: !1 });
        })(), xi = !1;
      }, 400);
    }
    function Ei(e) {
      if (!A(g(), un)) {
        p({ C: !0, _: W(), _n: st() });
        for (var t = u().L, n = 0; n < t.length; ++n) {
          var i = t[n], r = s(fe, i.item)[0], a = i.slides;
          D("offsetSections") && C(i.item, { height: wn(i.item) }), a.length > 1 && Ce(r, i.activeSlide.item);
        }
        o().scrollOverflow && S.bn();
        var l = u().j.index();
        c.N || !l || D("fadingEffect") || D("dropEffect") || D("waterEffect") || nn(l + 1), p({ C: !1 }), P(o().afterResize) && e && o().afterResize.call(g(), b.innerWidth, b.innerHeight), P(o().afterReBuild) && !e && o().afterReBuild.call(g()), q(g(), "afterRebuild");
      }
    }
    function er(e) {
      u().L.forEach(function(t) {
        var n = e !== "" || D("offsetSections") ? wn(t.item) : "";
        C(t.item, { height: n });
      });
    }
    function ji() {
      var e, t, n = b.location.hash;
      if (n.length) {
        var i = n.replace("#", "").split("/"), r = n.indexOf("#/") > -1;
        e = r ? "/" + i[1] : decodeURIComponent(i[0]);
        var a = r ? i[2] : i[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, pn: t };
    }
    function Hr() {
      Xe("hashchange", tr);
    }
    function tr() {
      if (!c.I && !o().lockAnchors) {
        var e = ji(), t = e.section, n = e.pn, i = c.W === void 0, r = c.W === void 0 && n === void 0 && !c.H;
        t && t.length && (t && t !== c.W && !i || r && !Tt() || !c.H && c.F != n && !Tt()) && d.ln(kn, { Un: t, slideAnchor: n });
      }
    }
    function Dr(e) {
      var t = e.target;
      T(t, o().menu + " [data-menuanchor]") && Br.call(t, e);
    }
    function Br(e) {
      p({ D: "menu" }), !s(o().menu)[0] || !o().lockAnchors && o().anchors.length || (V(e), d.ln(no, { anchor: I(this, "data-menuanchor") }));
    }
    function zr(e) {
      var t = e.target;
      t && T(t, "#fp-nav a") ? yr.call(t, e.e) : _(t, ".fp-tooltip") ? wr.call(t) : (_(t, Ri) || T(t, Ri) != null) && hr.call(t, e.e);
    }
    h.reBuild = Ei, d.un(K, function() {
      Li(), pe("resize", Li), d.un(ae, Rr);
    }), h.setLockAnchors = function(e) {
      o().lockAnchors = e;
    }, d.un(K, function() {
      pe("hashchange", tr), d.un(ae, Hr);
    }), d.un(K, function() {
      Re("wheel", qt.Cn, Ro()), d.un(ro, Mr), d.un(to, Ar);
    }), d.un(K, function() {
      d.un(Rt, Dr);
    }), d.un(K, function() {
      d.un(Rt, zr);
    });
    var Mi, Ai, nr = 0;
    function on(e) {
      var t, n, i, r, a;
      if (q(g(), "onScroll"), !c.C && u().j && (ue(u().L), !u().N && !u().Fn && (!o().autoScrolling || o().scrollBar || D("dragAndMove")) && !_i())) {
        var l = D("dragAndMove") ? Math.abs(m("dragAndMove", "getCurrentScroll")) : we(), v = function(J) {
          var re = J > nr ? "down" : "up";
          return nr = J, p({ X: J }), re;
        }(l), f = 0, y = l + W() / 2, L = (D("dragAndMove") ? m("dragAndMove", "getDocumentHeight") : k.scrollHeight - W()) === l, w = u().L;
        if (p({ scrollY: l }), L)
          f = w.length - 1;
        else if (l)
          for (var M = 0; M < w.length; ++M)
            (T(w[M].item, $) || w[M].item).offsetTop <= y && (f = M);
        else
          f = 0;
        if (i = v, r = u().j.item.offsetTop, a = r + W(), (i == "up" ? a >= we() + W() : r <= we()) && (A(u().j.item, De) || (x(u().j.item, De), z(We(u().j.item), De))), n = (t = w[f]).item, !t.isActive) {
          p({ I: !0 });
          var O, X, Y = u().j.item, R = u().j.index() + 1, H = Ln(u().j, n), E = t.anchor, F = t.index() + 1, G = t.activeSlide, ge = { j: Y, sectionIndex: F - 1, anchorLink: E, element: n, leavingSection: R, direction: H, items: { origin: u().j, destination: t } };
          G && (X = G.anchor, O = G.index()), c.canScroll && (z(w.filter(function(J) {
            return J.index() !== t.index();
          }).map(function(J) {
            return J.item;
          }), N), x(n, N), m("parallax", "afterLoad"), P(o().beforeLeave) && So("beforeLeave", ge), P(o().onLeave) && se("onLeave", ge), P(o().afterLoad) && se("afterLoad", ge), m("resetSliders", "apply", { localIsResizing: c.C, leavingSection: R }), jn(Y), Pe(n), Nt(n), _n(E, F - 1), o().anchors.length && p({ W: E }), ce(), Mn(O, X, E)), clearTimeout(Mi), Mi = setTimeout(function() {
            p({ I: !1 });
          }, 100);
        }
        o().fitToSection && c.canScroll && (clearTimeout(Ai), Ai = setTimeout(function() {
          c.L.filter(function(J) {
            var re = J.item.getBoundingClientRect();
            return Math.round(re.bottom) === Math.round(W()) || Math.round(re.top) === 0;
          }).length || yo();
        }, o().A));
      }
    }
    function ir(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Dt(e, n, "k");
      }) : (Dt(e, "all", "k"), o().keyboardScrolling = e);
    }
    function Ir(e) {
      var t = e.index();
      o().anchors[t] !== void 0 && e.isActive && _n(o().anchors[t], t), o().menu && o().css3 && T(s(o().menu)[0], je) != null && s(o().menu).forEach(function(n) {
        k.appendChild(n);
      });
    }
    function or() {
      var e, t, n = u().j, i = u().j.item;
      x(i, De), Pe(i), go(), Nt(i), t = hi((e = ji()).section), e.section && t && (t === void 0 || t.index() !== de(Lo)) || !P(o().afterLoad) || se("afterLoad", { j: i, element: i, direction: null, anchorLink: n.anchor, sectionIndex: n.index(), items: { origin: u().j, destination: u().j } }), P(o().afterRender) && se("afterRender"), q(g(), "afterRender");
    }
    function Ti(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Dt(e, n, "m");
      }) : Dt(e, "all", "m"), q(g(), "setAllowScrolling", { value: e, Qn: t });
    }
    function rr() {
      var e = ji(), t = e.section, n = e.pn;
      t ? o().animateAnchor ? gi(t, n) : nn(t, n) : d.ln(Tn, null);
    }
    d.un(ae, function() {
      clearTimeout(Mi), clearTimeout(Ai);
    }), d.un(K, function() {
      pe("scroll", on), j.body.addEventListener("scroll", on), d.un(kn, function(e) {
        gi(e.Un, e.slideAnchor);
      }), d.un(no, function(e) {
        St(e.anchor, void 0);
      }), d.un(eo, function(e) {
        (e.direction === "down" ? pt : Fe)();
      }), d.un(io, function(e) {
        Ve(e.destination);
      });
    }), d.un(ae, function() {
      Xe("scroll", on);
    }), h.getActiveSlide = function() {
      return zn(u().j.activeSlide);
    }, h.getScrollX = function() {
      return c.scrollX;
    }, d.un(K, function() {
      d.un(ae, Sr), d.un(oo, function(e) {
        Ce(e.slides, e.destination);
      }), d.un(Cn, function(e) {
        vi(e.section);
      }), d.un(On, function(e) {
        pi(e.section);
      });
    }), d.un(K, function() {
      var e = o().credits.position, t = ["left", "right"].indexOf(e) > -1 ? "".concat(e, ": 0;") : "", n = `
        <div class="fp-watermark" style="`.concat(t, `">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(o().credits.label, `
            </a>
        </div>
    `), i = ue(c.L), r = !c.Jn || o().credits.enabled;
      i && i.item && r && i.item.insertAdjacentHTML("beforeend", n);
    }), function() {
      d.un(Qi, function() {
        var v, f, y;
        p({ Jn: (o().licenseKey, v = o().licenseKey, f = function(L) {
          var w = parseInt("514").toString(16);
          if (!L || L.length < 29 || L.split(e[0]).length === 4)
            return null;
          var M = ["Each", "for"][r()]().join(""), O = L[["split"]]("-"), X = [];
          O[M](function(H, E) {
            if (E < 4) {
              var F = function(J) {
                var re = J[J.length - 1], Wr = ["NaN", "is"][r()]().join("");
                return window[Wr](re) ? a(re) : function(Xr) {
                  return Xr - N.length;
                }(re);
              }(H);
              X.push(F);
              var G = a(H[F]);
              if (E === 1) {
                var ge = ["pa", "dS", "t", "art"].join("");
                G = G.toString()[ge](2, "0");
              }
              w += G, E !== 0 && E !== 1 || (w += "-");
            }
          });
          var Y = 0, R = "";
          return L.split("-").forEach(function(H, E) {
            if (E < 4) {
              for (var F = 0, G = 0; G < 4; G++)
                G !== X[E] && (F += Math.abs(a(H[G])), isNaN(H[G]) || Y++);
              var ge = l(F);
              R += ge;
            }
          }), R += l(Y), { Kn: /* @__PURE__ */ new Date(w + "T00:00"), qn: w.split("-")[2] === 8 * (N.length - 2) + "", $n: R };
        }(v), y = function(L) {
          var w = i[r()]().join("");
          return L && w.indexOf(L) === 0 && L.length === w.length;
        }(v), (f || y) && (f && n <= f.Kn && f.$n === v.split(e[0])[4] || y || f.qn) || !1) });
      });
      var e = ["-"], t = "2024-0-30".split("-"), n = new Date(t[0], t[1], t[2]), i = ["se", "licen", "-", "v3", "l", "gp"];
      function r() {
        return [["re", "verse"].join("")][0];
      }
      function a(v) {
        return v ? isNaN(v) ? v.charCodeAt(0) - 72 : v : "";
      }
      function l(v) {
        var f = 72 + v;
        return f > 90 && f < 97 && (f += 15), String.fromCharCode(f).toUpperCase();
      }
    }(), h.setKeyboardScrolling = ir, h.shared.nt = or, h.setAllowScrolling = Ti;
    var Pr = {};
    function Ke() {
      return Pr;
    }
    var rn, he, lr, Oi, ln = !A(k, U("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function ar(e) {
      if (he = j.createElement("div"), rn = U("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), ln || (rn = rn.replace("extensions/", "").replace("Extension", "")), he.innerHTML = rn, he = he.firstChild, "MutationObserver" in window && new MutationObserver(_r).observe(j.body, { childList: !0, subtree: !1 }), (!ln || D(e) && h[e]) && (!function(n) {
        var i = Ke()[n] !== void 0 && Ke()[n].length, r = [], a = !1;
        return Ye(Ke()[n]) ? r = Ke()[n] : r.push(Ke()[n]), r.forEach(function(l) {
          var v = function() {
            if (j.domain.length) {
              for (var re = j.domain.replace(/^(www\.)/, "").split("."); re.length > 2; )
                re.shift();
              return re.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), f = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], y = U(f[0]), L = U(f[1]), w = U(f[2]), M = U(f[6]), O = U(f[3]), X = U(f[4]), Y = U(f[5]), R = o()[X + Y] !== void 0;
          i = i || R;
          var H = [y, L, w, M].indexOf(v) < 0 && v.length !== 0;
          if (!i && !R && H)
            return !1;
          var E = i ? U(l) : "", F = (E = E.split("_")).length > 1 && E[1].indexOf(n, E[1].length - n.length) > -1, G = E.length > 1 && E[1].toLowerCase().indexOf(X) > -1, ge = E[0].indexOf(v, E[0].length - v.length) < 0, J = F || G;
          a = a || !(ge && H && O != E[0]) && J || !H;
        }), a;
      }(e) || !ln)) {
        cr();
        var t = U("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t](cr, 2e3);
      }
    }
    function cr() {
      he && (Oi || (Math.random() < 0.5 ? Vi(k, he) : Ze(he, k), Oi = !0), he.setAttribute("style", U("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, U("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function _r(e) {
      e.forEach(function(t) {
        if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(he)) {
          clearTimeout(lr);
          var n = U("bDIwc2V0VGltZW91dDAzbA==");
          lr = window[n](Vr, 900);
        }
      });
    }
    function Vr() {
      Oi = !1;
    }
    function Yr() {
      Bt(), ce(), o().scrollBar = o().scrollBar || o().hybrid, Ii(), function() {
        C(To(g(), "body"), { height: "100%", position: "relative" }), x(g(), cn), x(it, bt), p({ _: W() }), z(g(), un), Co(), m("parallax", "init");
        for (var e = u().tn, t = 0; t < e.length; t++) {
          var n = e[t], i = n.vn, r = I(n.item, "style");
          r && n.item.setAttribute("data-fp-styles", r), qn(n), Ir(n), i.length > 0 && oi(n);
        }
        o().fixedElements && o().css3 && s(o().fixedElements).forEach(function(a) {
          k.appendChild(a);
        }), o().navigation && mo(), s('iframe[src*="youtube.com/embed/"]', g()).forEach(function(a) {
          var l, v;
          v = I(l = a, "src"), l.setAttribute("src", v + (/\?/.test(v) ? "&" : "?") + "enablejsapi=1");
        }), m("fadingEffect", "apply"), m("waterEffect", "init"), m("dropEffect", "init"), m("cards", "init"), o().scrollOverflow && S.bn();
      }(), Ti(!0), wt(!0), _e(o().autoScrolling, "internal"), bo(), qi(), j.readyState === "complete" && rr(), pe("load", rr), or(), ln || ar("l"), Bt(), ce();
    }
    function sr() {
      var e = o().licenseKey;
      o().licenseKey.trim() === "" ? (ee("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), ee("error", "https://github.com/alvarotrigo/fullPage.js#options")) : o() && c.Jn || j.domain.indexOf("alvarotrigo.com") > -1 ? e && e.length : (ee("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), ee("error", "https://alvarotrigo.com/fullPage/pricing")), A(it, bt) ? ee("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (o().continuousVertical && (o().loopTop || o().loopBottom) && (o().continuousVertical = !1, ee("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !o().scrollOverflow || !o().scrollBar && o().autoScrolling || ee("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !o().continuousVertical || !o().scrollBar && o().autoScrolling || (o().continuousVertical = !1, ee("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), o().anchors.forEach(function(t) {
        var n = [].slice.call(s("[name]")).filter(function(a) {
          return I(a, "name") && I(a, "name").toLowerCase() == t.toLowerCase();
        }), i = [].slice.call(s("[id]")).filter(function(a) {
          return I(a, "id") && I(a, "id").toLowerCase() == t.toLowerCase();
        });
        if (i.length || n.length) {
          ee("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var r = i.length ? "id" : "name";
          (i.length || n.length) && ee("error", '"' + t + '" is is being used by another element `' + r + "` property");
        }
      }));
    }
    function Zr() {
      return { options: o(), internals: { container: g(), canScroll: c.canScroll, isScrollAllowed: Z(), getDestinationPosition: wo, isTouch: Ee, c: ar, getXmovement: po, removeAnimation: Ot, getTransforms: En, lazyLoad: Pe, addAnimation: xn, performHorizontalMove: fo, landscapeScroll: Ce, silentLandscapeScroll: rt, keepSlidesPosition: Pn, silentScroll: Te, styleSlides: oi, styleSection: qn, scrollHandler: on, getEventsPage: fi, getMSPointer: Vo, isReallyTouch: mt, usingExtension: D, toggleControlArrows: uo, touchStartHandler: tn, touchMoveHandler: gt, nullOrSection: me, items: { SectionPanel: ke, SlidePanel: zt, Item: le }, getVisible: ct, getState: u, updateState: ce, updateStructuralState: Bt, activeSlidesNavigation: so, getPanels: function() {
        return c.rn;
      }, getSections: function() {
        return c.L;
      }, setActiveSection: function(e) {
        c.j = e;
      } } };
    }
    function te(e) {
      var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], n = U(t[0]), i = U(t[1]), r = o()[n + i] !== void 0, a = "fp_" + e + "Extension";
      Ke()[e] = r ? o()[n + i] : o()[e + i], h[e] = window[a] !== void 0 ? new window[a]() : null, h[e] && h[e].c(e);
    }
    function ur(e, t) {
      var n;
      if (k = s("body")[0], it = s("html")[0], Ct = s("html, body"), !A(it, bt))
        return n = typeof e == "string" ? s(e)[0] : e, jt.touchWrapper = n, function(i) {
          Mt = Ne({}, jt, i), Sn = Object.assign({}, Mt);
        }(t), function(i) {
          et = i;
        }(typeof e == "string" ? s(e)[0] : e), d.ln(Qi), sr(), h.getFullpageData = Zr, h.version = "4.0.21", h.test = Object.assign(h.test, { top: "0px", on: "translate3d(0px, 0px, 0px)", cn: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push("translate3d(0px, 0px, 0px)");
          return i;
        }(), left: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push(0);
          return i;
        }(), options: o(), setAutoScrolling: null }), h.shared = Object.assign(h.shared, { nt: null, Xn: !1 }), b.fullpage_api = h, b.fullpage_extensions = !0, g() && (d.ln("beforeInit"), te("continuousHorizontal"), te("scrollHorizontally"), te("resetSliders"), te("interlockedSlides"), te("responsiveSlides"), te("fadingEffect"), te("dragAndMove"), te("offsetSections"), te("scrollOverflowReset"), te("parallax"), te("cards"), te("dropEffect"), te("waterEffect"), m("dragAndMove", "init"), m("responsiveSlides", "init"), Yr(), d.ln(K), m("dragAndMove", "turnOffTouch")), b.fullpage_api;
      sr();
    }
    return h.destroy = function(e) {
      q(g(), "destroy", e), _e(!1, "internal"), Ti(!0), wt(!1), ir(!1), x(g(), un), d.ln(ae), m("dragAndMove", "destroy"), e && (Te(0), s("img[data-src], source[data-src], audio[data-src], iframe[data-src]", g()).forEach(function(t) {
        Ut(t, "src");
      }), s("img[data-srcset]").forEach(function(t) {
        Ut(t, "srcset");
      }), He(s("#fp-nav, .fp-slidesNav, .fp-controlArrow")), C(yn(u().L), { height: "", "background-color": "", padding: "" }), C(yn(u().slides), { width: "" }), C(g(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), C(Ct, { overflow: "", height: "" }), z(it, bt), z(k, yt + " fp-scrollable"), k.className.split(/\s+/).forEach(function(t) {
        t.indexOf("fp-viewing") === 0 && z(k, t);
      }), yn(u().rn).forEach(function(t) {
        o().scrollOverflow && S.Nn(t), z(t, "fp-table active fp-completely " + $e);
        var n = I(t, "data-fp-styles");
        n && t.setAttribute("style", n), A(t, xt) && !zi && t.removeAttribute("data-anchor");
      }), Ot(g()), [pr, Je, fe].forEach(function(t) {
        s(t, g()).forEach(function(n) {
          Zt(n);
        });
      }), C(g(), { "-webkit-transition": "none", transition: "none" }), z(g(), cn), b.scrollTo(0, 0), [xt, dn, vn].forEach(function(t) {
        z(s("." + t), t);
      }));
    }, b.fp_easings = Ne(b.fp_easings, { easeInOutCubic: function(e, t, n, i) {
      return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
    } }), b.jQuery && function(e, t) {
      e && t ? e.fn.fullpage = function(n) {
        n = e.extend({}, n, { $: e }), new t(this[0], n), Object.keys(h).forEach(function(i) {
          o().$.fn.fullpage[i] = h[i];
        });
      } : ee("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(b.jQuery, ur), ur;
  });
})(fr);
var Jr = fr.exports;
const Qr = /* @__PURE__ */ Kr(Jr), $r = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
], el = (B, Q) => {
  const ne = B.__vccOpts || B;
  for (const [ie, xe] of Q)
    ne[ie] = xe;
  return ne;
}, tl = {
  name: "FullPage",
  props: {
    options: {
      type: Object,
      default() {
      }
    },
    skipInit: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      events: $r.reduce((B, Q) => ({
        ...B,
        [Q]: (...ne) => {
          this.emitEvent(Q, ne);
        }
      }), {}),
      api: void 0
    };
  },
  watch: {
    options: {
      deep: !0,
      handler() {
        this.build();
      }
    }
  },
  mounted() {
    !this.skipInit && this.init();
  },
  beforeUnmount() {
    typeof this.api < "u" && this.destroy();
  },
  methods: {
    build() {
      let B = this.options.slideSelector || ".slide", Q = this.options.sectionSelector || ".section";
      const ne = window.fp_utils.index(document.querySelector(Q + ".active")), ie = document.querySelector(Q + ".active " + B + ".active"), xe = ie ? window.fp_utils.index(ie) : -1;
      this.destroy(), ne > -1 && window.fp_utils.addClass(document.querySelectorAll(Q)[ne], "active"), xe > -1 && window.fp_utils.addClass(ie, "active"), this.init();
    },
    destroy() {
      typeof window.fullpage_api < "u" && typeof window.fullpage_api.destroy < "u" && window.fullpage_api.destroy("all");
    },
    emitEvent(B, Q) {
      this.$emit(B.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...Q), Object.prototype.hasOwnProperty.call(this.options, B) && this.options[B].apply(this, Q);
    },
    init() {
      this.api = new Qr(this.$refs.fullpage, this.options);
    }
  }
}, nl = { ref: "fullpage" };
function il(B, Q, ne, ie, xe, an) {
  return Fr(), Gr("div", nl, [
    Ur(B.$slots, "default")
  ], 512);
}
const ol = /* @__PURE__ */ el(tl, [["render", il]]), ll = {
  install(B) {
    B.component("FullPage", ol);
  }
};
export {
  ll as default
};
