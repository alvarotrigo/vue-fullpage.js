import { openBlock as Jr, createElementBlock as el, renderSlot as tl } from "vue";
/*!
* vue-fullpage 0.2.18
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
var nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function il(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var mr = { exports: {} };
/*!
* fullPage 4.0.28
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
  })(nl, function() {
    var ne, ie, Le, un, Ri = Object.freeze({ __proto__: null, get showError() {
      return ee;
    }, get isVisible() {
      return ti;
    }, get getVisible() {
      return st;
    }, get $() {
      return s;
    }, get deepExtend() {
      return Ne;
    }, get hasClass() {
      return O;
    }, get getWindowHeight() {
      return W;
    }, get t() {
      return ut;
    }, get css() {
      return k;
    }, get prev() {
      return Wt;
    }, get next() {
      return ft;
    }, get last() {
      return ko;
    }, get index() {
      return de;
    }, get getList() {
      return Se;
    }, get hide() {
      return Zt;
    }, get show() {
      return ni;
    }, get isArrayOrList() {
      return Ve;
    }, get addClass() {
      return x;
    }, get removeClass() {
      return P;
    }, get appendTo() {
      return We;
    }, get wrap() {
      return ii;
    }, get wrapAll() {
      return Ft;
    }, get wrapInner() {
      return oi;
    }, get unwrap() {
      return Xt;
    }, get closest() {
      return T;
    }, get after() {
      return dt;
    }, get before() {
      return Gt;
    }, get insertBefore() {
      return Ut;
    }, get getScrollTop() {
      return we;
    }, get siblings() {
      return Ze;
    }, get preventDefault() {
      return Z;
    }, get i() {
      return z;
    }, get o() {
      return je;
    }, get u() {
      return pe;
    }, get l() {
      return ve;
    }, get v() {
      return Fe;
    }, get isFunction() {
      return I;
    }, get trigger() {
      return K;
    }, get matches() {
      return _;
    }, get toggle() {
      return Kt;
    }, get createElementFromHTML() {
      return ye;
    }, get remove() {
      return Re;
    }, get filter() {
      return Do;
    }, get untilAll() {
      return qt;
    }, get nextAll() {
      return ri;
    }, get prevAll() {
      return li;
    }, get toArray() {
      return Ho;
    }, get p() {
      return ue;
    }, get h() {
      return pt;
    }, get g() {
      return $t;
    }, get S() {
      return No;
    }, get M() {
      return ai;
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
    }, Le = Math.pow(2, 53) - 1, un = function(e) {
      var t = function(n) {
        var i = Number(n);
        return isNaN(i) ? 0 : i !== 0 && isFinite(i) ? (i > 0 ? 1 : -1) * Math.floor(Math.abs(i)) : i;
      }(e);
      return Math.min(Math.max(t, 0), Le);
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
      for (var a, l = un(n.length), v = ie(t) ? Object(new t(l)) : new Array(l), f = 0; f < l; )
        a = n[f], v[f] = r ? i === void 0 ? r(a, f) : r.call(i, a, f) : a, f += 1;
      return v.length = l, v;
    }));
    var Bi, y = window, A = document, xe = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document, Sr = /(Mac|iPhone|iPod|iPad)/i.test(y.navigator.userAgent), Ee = "ontouchstart" in y || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Pi = !!window.MSInputMethodContext && !!document.documentMode, h = { test: {}, shared: {} }, wr = (Bi = window.self !== window.top, function() {
      return Bi;
    });
    y.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
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
    var fn = "fullpage-wrapper", Ae = "." + fn, bt = "fp-responsive", dn = "fp-notransition", pn = "fp-destroyed", Lt = "fp-enabled", H = "active", vn = ".active", Be = "fp-completely", xt = "fp-section", J = "." + xt, yr = ".fp-tableCell", Me = "#fp-nav", hn = "fp-slide", gn = "." + hn, Et = ".fp-slide.active", At = "fp-slides", fe = ".fp-slides", mn = "fp-slidesContainer", $e = "." + mn, zi = "fp-table", Pe = "fp-overflow", Qe = "." + Pe, Je = "fp-is-overflow", Sn = ".fp-slidesNav", Ii = ".fp-slidesNav a", _i = "fp-controlArrow", wn = "." + _i, Yi = "fp-prev", yn = ".fp-controlArrow.fp-prev", Vi = ".fp-controlArrow.fp-next", Mt = { menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, licenseKey: "", credits: { enabled: !0, label: "Made with fullPage.js", position: "right" }, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, A: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !0, scrollOverflowReset: !1, skipIntermediateItems: !1, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, allowCorrectDirection: !1, scrollOverflowMacStyle: !0, controlArrows: !0, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: !0, lazyLoadThreshold: 0, observer: !0, scrollBeyondFullpage: !0 }, et = null, Wi = !1, bn = Ne({}, Mt), Tt = null;
    function g(e) {
      return et;
    }
    function o() {
      return Tt || Mt;
    }
    function Te() {
      return bn;
    }
    function tt(e, t, n) {
      Tt[e] = t, n !== "internal" && (bn[e] = t);
    }
    function Zi() {
      if (!o().anchors.length) {
        var e = s(o().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", et);
        e.length && e.length === s(o().sectionSelector, et).length && (Wi = !0, e.forEach(function(n) {
          o().anchors.push(z(n, "data-anchor").toString());
        }));
      }
      if (!o().navigationTooltips.length) {
        var t = s(o().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", et);
        t.length && t.forEach(function(n) {
          o().navigationTooltips.push(z(n, "data-tooltip").toString());
        });
      }
    }
    var c = { O: 0, R: 0, slides: [], D: [], L: null, j: null, N: !1, I: !1, P: !1, H: !1, C: !1, W: void 0, F: void 0, V: !1, canScroll: !0, B: "none", Z: "none", Y: !1, G: !1, U: !0, X: 0, _: W(), J: !1, K: {}, scrollY: 0, scrollX: 0, q: !1 };
    function p(e) {
      Object.assign(c, e);
    }
    function u() {
      return c;
    }
    function Fi(e) {
      return window["fp_" + e + "Extension"] !== void 0;
    }
    function R(e) {
      var t = o();
      return t[e] !== null && Object.prototype.toString.call(t[e]) === "[object Array]" ? t[e].length && h[e] : t[e] && h[e];
    }
    function S(e, t, n) {
      if (R(e))
        return I(h[e][t]) ? h[e][t](n) : h[e][t];
    }
    function Ot() {
      return S("dragAndMove", "isAnimating");
    }
    function Xi() {
      return S("dragAndMove", "isGrabbing");
    }
    function Ln(e) {
      if (o().offsetSections && h.offsetSections) {
        var t = S("offsetSections", "getWindowHeight", e);
        return t !== "" ? Math.round(t) + "px" : t;
      }
      return W() + "px";
    }
    function Gi(e, t) {
      e.insertBefore(t, e.firstChild);
    }
    function U(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(r) {
        var a, l, v, f, b, L, w = "", M = 0;
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ""); M < r.length; )
          a = t.indexOf(r.charAt(M++)) << 2 | (f = t.indexOf(r.charAt(M++))) >> 4, l = (15 & f) << 4 | (b = t.indexOf(r.charAt(M++))) >> 2, v = (3 & b) << 6 | (L = t.indexOf(r.charAt(M++))), w += String.fromCharCode(a), b != 64 && (w += String.fromCharCode(l)), L != 64 && (w += String.fromCharCode(v));
        return w = function(C) {
          for (var F, Y = "", N = 0, j = 0, E = 0; N < C.length; )
            (j = C.charCodeAt(N)) < 128 ? (Y += String.fromCharCode(j), N++) : j > 191 && j < 224 ? (E = C.charCodeAt(N + 1), Y += String.fromCharCode((31 & j) << 6 | 63 & E), N += 2) : (E = C.charCodeAt(N + 1), F = C.charCodeAt(N + 2), Y += String.fromCharCode((15 & j) << 12 | (63 & E) << 6 | 63 & F), N += 3);
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
    y.state = c, y.fp_utils = y.fp_utils || {}, Object.assign(y.fp_utils, { prependTo: Gi, toggleClass: function(e, t, n) {
      if (e.classList && n == null)
        e.classList.toggle(t);
      else {
        var i = O(e, t);
        i && n == null || !n ? P(e, t) : (!i && n == null || n) && x(e, t);
      }
    } });
    var Ui = function(e) {
      this.anchor = e.anchor, this.item = e.item, this.index = e.index(), this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1, this.isFirst = !this.index, this.isActive = e.isActive;
    }, le = function(e, t) {
      this.parent = this.parent || null, this.selector = t, this.anchor = z(e, "data-anchor") || o().anchors[de(e, o().sectionSelector)], this.item = e, this.isVisible = ti(e), this.isActive = O(e, H), this.nn = O(e, Pe) || s(Qe, e)[0] != null, this.tn = t === o().sectionSelector, this.container = T(e, $e) || T(e, Ae), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function xn(e) {
      return e.map(function(t) {
        return t.item;
      });
    }
    function Ct(e, t) {
      return e.find(function(n) {
        return n.item === t;
      });
    }
    le.prototype.siblings = function() {
      return this.tn ? this.isVisible ? c.D : c.en : this.parent ? this.parent.slides : 0;
    }, le.prototype.prev = function() {
      var e = this.siblings(), t = (this.tn ? e.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t >= 0 ? e[t] : null;
    }, le.prototype.next = function() {
      var e = this.siblings(), t = (this.tn ? e.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t < e.length ? e[t] : null;
    }, le.prototype.prevPanel = function() {
      return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
    }, le.prototype.nextPanel = function() {
      return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
    }, le.prototype.rn = function() {
      return this.tn ? c.D : c.on;
    };
    var Ki, qi = function(e) {
      Ui.call(this, e);
    }, br = function(e) {
      Ui.call(this, e);
    };
    function Oe(e) {
      var t = s(Et, e);
      return t.length && (e = t[0]), e;
    }
    function $i(e) {
      return e ? e.activeSlide ? e.activeSlide : e : null;
    }
    function ze(e) {
      var t, n, i = o();
      return i.autoScrolling && !i.scrollBar ? (t = -e, n = s(Ae)[0]) : (t = e, n = window), { options: t, element: n };
    }
    function Qi(e, t) {
      !o().autoScrolling || o().scrollBar || e.self != window && O(e, At) ? e.self != window && O(e, At) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }
    function En(e) {
      var t = "transform " + o().scrollingSpeed + "ms " + o().easingcss3;
      return P(e, dn), k(e, { "-webkit-transition": t, transition: t });
    }
    function An(e, t) {
      var n = e.index(), i = de(t, J);
      return n == i ? "none" : n > i ? "up" : "down";
    }
    function kt(e) {
      return x(e, dn);
    }
    function Mn(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function Ji(e, t) {
      t ? En(g()) : kt(g()), clearTimeout(Ki), k(g(), Mn(e)), h.test.an = e, Ki = setTimeout(function() {
        P(g(), dn);
      }, 10);
    }
    function Ce(e) {
      var t = Math.round(e);
      if (o().css3 && o().autoScrolling && !o().scrollBar)
        Ji("translate3d(0px, -" + t + "px, 0px)", !1);
      else if (o().autoScrolling && !o().scrollBar)
        k(g(), { top: -t + "px" }), h.test.top = -t + "px";
      else {
        var n = ze(t);
        Qi(n.element, n.options);
      }
    }
    function Ie(e, t) {
      t !== "internal" && S("fadingEffect", "update", e), S("cards", "update_", e), tt("scrollingSpeed", e, t);
    }
    h.setScrollingSpeed = Ie;
    var nt, D = null, it = null, Dt = null;
    function Ht(e, t, n, i) {
      var r, a = function(b) {
        return b.self != y && O(b, At) ? b.scrollLeft : !o().autoScrolling || o().scrollBar ? we() : b.offsetTop;
      }(e), l = t - a, v = !1, f = c.V;
      p({ V: !0 }), nt && window.cancelAnimationFrame(nt), nt = function(b) {
        r || (r = b);
        var L = Math.floor(b - r);
        if (c.V) {
          var w = t;
          n && (w = y.fp_easings[o().easing](L, a, l, n)), L <= n && Qi(e, w), L < n ? window.requestAnimationFrame(nt) : i === void 0 || v || (i(), p({ V: !1 }), v = !0);
        } else
          v || f || (i(), p({ V: !1 }), v = !0);
      }, window.requestAnimationFrame(nt);
    }
    function Nt(e) {
      var t = Oe(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && typeof n.play == "function" && (n.readyState >= n.HAVE_FUTURE_DATA ? n.play() : n.addEventListener("canplay", function i() {
          n.play(), n.removeEventListener("canplay", i);
        }));
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && eo(n), n.onload = function() {
          n.hasAttribute("data-autoplay") && eo(n);
        };
      });
    }
    function eo(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function Tn(e) {
      var t = Oe(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-keepplaying") || typeof n.pause != "function" || n.pause();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        /youtube\.com\/embed\//.test(z(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function On(e) {
      o().lazyLoading && s("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Oe(e)).forEach(function(t) {
        if (["src", "srcset"].forEach(function(i) {
          var r = z(t, "data-" + i);
          r != null && r && ($t(t, i), t.addEventListener("load", function() {
          }));
        }), _(t, "source")) {
          var n = T(t, "video, audio");
          n && (n.load(), n.onloadeddata = function() {
          });
        }
      });
    }
    function ot(e) {
      var t = o().lazyLoadThreshold;
      On(e.item), t && (to(e, "prev", t), to(e, "next", t));
    }
    function to(e, t, n) {
      for (var i = e, r = 0; r < n && (i = i[t]()); r++)
        On(i.item);
    }
    function no() {
      var e = u().L.item, t = u().L.activeSlide, n = io(e), i = String(n);
      t && (i = i + "-" + io(t.item)), i = i.replace("/", "-").replace("#", "");
      var r = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      D.className = D.className.replace(r, ""), x(D, "fp-viewing-" + i);
    }
    function io(e) {
      if (!e)
        return null;
      var t = z(e, "data-anchor"), n = de(e);
      return t == null && (t = n), t;
    }
    function Cn(e, t, n) {
      var i = "";
      o().anchors.length && !o().lockAnchors && (e ? (n != null && (i = n), t == null && (t = e), p({ F: t }), kn(i + "/" + t)) : (e != null && p({ F: t }), kn(n))), no();
    }
    function kn(e) {
      if (o().recordHistory)
        location.hash = e;
      else if (xe || Ee)
        y.history.replaceState(void 0, void 0, "#" + e);
      else {
        var t = y.location.href.split("#")[0];
        y.location.replace(t + "#" + e);
      }
    }
    function rt(e) {
      return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, rt(e);
    }
    var d = { un: {}, ln: function(e, t) {
      var n = this;
      return rt(this.un[e]) !== "object" && (this.un[e] = []), this.un[e].push(t), function() {
        return n.removeListener(e, t);
      };
    }, removeListener: function(e, t) {
      if (rt(this.un[e]) === "object") {
        var n = this.un[e].indexOf(t);
        n > -1 && this.un[e].splice(n, 1);
      }
    }, cn: function(e) {
      for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        i[r - 1] = arguments[r];
      rt(this.un[e]) === "object" && this.un[e].forEach(function(a) {
        return a.apply(t, i);
      });
    }, once: function(e, t) {
      var n = this, i = this.ln(e, function() {
        i();
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
          a[l] = arguments[l];
        t.apply(n, a);
      });
    } };
    function oo(e, t, n) {
      var i = t === "Section" ? o().anchors[e] : z(n, "data-anchor");
      return encodeURI(o().navigationTooltips[e] || i || t + " " + (e + 1));
    }
    var Dn = "onAfterRenderNoAnchor", jt = "onClickOrTouch", Hn = "moveSlideLeft", Nn = "moveSlideRight", ro = "onInitialise", lo = "beforeInit", q = "bindEvents", ae = "onDestroy", ao = "contentChanged", co = "onScrollOverflowScrolled", jn = "onScrollPageAndSlide", so = "onKeyDown", uo = "onMenuClick", fo = "scrollPage", po = "landscapeScroll", vo = "scrollBeyondFullpage", Rn = "onPerformMovement", Bn = "onSlideLeave", ho = "onLeave", Rt = "afterSectionLoads", Bt = "afterSlideLoads";
    function Lr(e) {
      e.cancelable && Z(e), p({ j: "horizontalNav" });
      var t = T(this, J), n = s(fe, T(this, J))[0], i = Ct(u().D, t).slides[de(T(this, "li"))];
      d.cn(po, { slides: n, destination: i.item });
    }
    function go(e, t) {
      o().slidesNavigation && e != null && (P(s(vn, e), H), x(s("a", s("li", e)[t]), H));
    }
    var Pt, ke = {};
    function zt(e, t, n) {
      t !== "all" ? ke[n][t] = e : Object.keys(ke[n]).forEach(function(i) {
        ke[n][i] = e;
      });
    }
    function V() {
      return ke;
    }
    function xr() {
      var e = T(this, J);
      O(this, Yi) ? V().m.left && (p({ j: "slideArrow" }), d.cn(Hn, { section: e })) : V().m.right && (p({ j: "slideArrow" }), d.cn(Nn, { section: e }));
    }
    function mo(e) {
      !o().loopHorizontal && o().controlArrows && (Kt(s(yn, e.section), e.slideIndex !== 0), Kt(s(Vi, e.section), ft(e.destiny) != null));
    }
    function Er() {
      clearTimeout(Pt), p({ P: !1 });
    }
    function De(e, t, n) {
      var i = T(e, J), r = u().D.filter(function(v) {
        return v.item == i;
      })[0], a = r.slides.filter(function(v) {
        return v.item == t;
      })[0], l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: a.index(), section: i, sectionIndex: r.index(), anchorLink: r.anchor, slidesNav: s(Sn, i)[0], slideAnchor: a.anchor, prevSlide: r.activeSlide.item, prevSlideIndex: r.activeSlide.index(), items: { section: r, origin: r.activeSlide, destination: a }, localIsResizing: c.H };
      l.xMovement = wo(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || p({ canScroll: !1 }), S("parallax", "applyHorizontal", l), S("cards", "apply", l), S("dropEffect", "apply", l), S("waterEffect", "apply", l), o().onSlideLeave && !l.localIsResizing && l.xMovement !== "none" && I(o().onSlideLeave) && se("onSlideLeave", l) === !1 ? p({ P: !1 }) : (R("dropEffect") && o().dropEffect || (x(t, H), P(Ze(t), H)), ce(), l.localIsResizing || (Tn(l.prevSlide), ot(a)), mo(l), r.isActive && !l.localIsResizing && Cn(l.slideIndex, l.slideAnchor, l.anchorLink), S("continuousHorizontal", "apply", l), d.cn(Bn, l), Xi() ? Pn(l) : So(e, l, !0), o().interlockedSlides && h.interlockedSlides && (R("continuousHorizontal") && n !== void 0 && n !== l.xMovement || S("interlockedSlides", "apply", l)));
    }
    function So(e, t, n) {
      var i = t.destinyPos;
      if (go(t.slidesNav, t.slideIndex), p({ scrollX: Math.round(i.left) }), o().css3) {
        var r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)";
        h.test.sn[t.sectionIndex] = r, R("dragAndMove") && t.dn !== void 0 || En(s($e, e)), k(s($e, e), Mn(r)), R("interlockedSlides") || clearTimeout(Pt), Pt = setTimeout(function() {
          n && Pn(t);
        }, o().scrollingSpeed);
      } else
        h.test.left[t.sectionIndex] = Math.round(i.left), Ht(e, Math.round(i.left), o().scrollingSpeed, function() {
          n && Pn(t);
        });
    }
    function wo(e, t) {
      return e == t ? "none" : e > t ? "left" : "right";
    }
    function Ar() {
      clearTimeout(Pt);
    }
    function Pn(e) {
      S("continuousHorizontal", "afterSlideLoads", e), S("dragAndMove", "afterSlideLoads", e), e.localIsResizing || (S("parallax", "afterSlideLoads"), S("scrollOverflowReset", "setPrevious", e.prevSlide), S("scrollOverflowReset", "reset"), I(o().afterSlideLoad) && se("afterSlideLoad", e), p({ canScroll: !0 }), Nt(e.destiny), d.cn(Bt, e)), p({ P: !1 }), S("interlockedSlides", "interlockedSlides", e);
    }
    function lt(e, t) {
      Ie(0, "internal"), t !== void 0 && p({ H: !0 }), De(T(e, fe), e), t !== void 0 && p({ H: !1 }), Ie(Te().scrollingSpeed, "internal");
    }
    ke.m = { up: !0, down: !0, left: !0, right: !0 }, ke.k = Ne({}, ke.m), d.ln(jt, function(e) {
      var t = e.target;
      (_(t, wn) || T(t, wn)) && xr.call(t, e);
    }), h.landscapeScroll = De, d.ln(q, function() {
      d.ln(Rn, Er);
    });
    var zn = null, In = null;
    function ce() {
      c.L = null, c.D.map(function(e) {
        var t = O(e.item, H);
        e.isActive = t, e.nn = m.nn(e.item), t && (c.L = e), e.slides.length && (e.activeSlide = null, e.slides.map(function(n) {
          var i = O(n.item, H);
          n.nn = m.nn(e.item), n.isActive = i, i && (e.activeSlide = n);
        }));
      }), function() {
        var e = c.L, t = !!c.L && c.L.slides.length, n = c.L ? c.L.activeSlide : null;
        if (!e && c.D.length && !u().N) {
          if (zn) {
            var i = bo(zn, c.D);
            i && (c.L = i, c.L.isActive = !0, x(c.L.item, H)), c.L && Ce(c.L.item.offsetTop);
          }
          if (t && !n && In) {
            var r = bo(In, c.L.slides);
            r && (c.L.activeSlide = r, c.L.activeSlide.isActive = !0, x(c.L.activeSlide.item, H)), c.L.activeSlide && lt(c.L.activeSlide.item, "internal");
          }
        }
      }(), K(g(), "onUpdateStateDone");
    }
    function It() {
      var e = s(o().sectionSelector + ", " + J, g()), t = st(e), n = Array.from(e).map(function(a) {
        return new He(a);
      }), i = n.filter(function(a) {
        return a.isVisible;
      }), r = i.reduce(function(a, l) {
        return a.concat(l.slides);
      }, []);
      zn = yo(c.L), In = yo(c.L ? c.L.activeSlide : null), c.O = t.length, c.R = i.reduce(function(a, l) {
        return a + l.slides.length;
      }, 0), c.D = i, c.en = n, c.slides = r, c.on = c.D.concat(c.slides);
    }
    function yo(e) {
      if (!e)
        return null;
      var t = e ? e.item : null, n = e.tn ? c.en : c.L.vn;
      if (t) {
        var i = Ct(n, t);
        return i ? i.index() : null;
      }
      return null;
    }
    function bo(e, t) {
      var n, i = e - 1, r = e;
      do {
        if (n = t[i] || t[r])
          break;
        i -= 1, r += 1;
      } while (i >= 0 || r < t.length);
      return n;
    }
    var He = function(e) {
      var t = this;
      [].push.call(arguments, o().sectionSelector), le.apply(this, arguments), this.pn = s(o().slideSelector, e), this.vn = Array.from(this.pn).map(function(n) {
        return new _t(n, t);
      }), this.slides = this.vn.filter(function(n) {
        return n.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
        return n.isActive;
      })[0] || this.slides[0] : null;
    };
    He.prototype = le.prototype, He.prototype.constructor = He;
    var _t = function(e, t) {
      this.parent = t, le.call(this, e, o().slideSelector);
    };
    function me(e) {
      return e && !e.item ? new qi(new He(e)) : e ? new qi(e) : null;
    }
    function _n(e) {
      return e ? new br(e) : null;
    }
    function se(e, t) {
      var n = function(i, r) {
        var a = { afterRender: function() {
          return { section: me(u().L), hn: _n(u().L.activeSlide) };
        }, onLeave: function() {
          return { origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().j };
        }, afterLoad: function() {
          return a.onLeave();
        }, afterSlideLoad: function() {
          return { section: me(r.items.section), origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().j };
        }, onSlideLeave: function() {
          return a.afterSlideLoad();
        }, beforeLeave: function() {
          return a.onLeave();
        }, onScrollOverflow: function() {
          return { section: me(u().L), hn: _n(u().L.activeSlide), position: r.position, direction: r.direction };
        } };
        return a[i]();
      }(e, t);
      return K(g(), e, n), o()[e].apply(n[Object.keys(n)[0]], Ho(n)) !== !1;
    }
    function Yn(e, t) {
      tt("recordHistory", e, t);
    }
    function _e(e, t) {
      e || Ce(0), tt("autoScrolling", e, t);
      var n = u().L.item;
      if (o().autoScrolling && !o().scrollBar)
        k(Dt, { overflow: "hidden", height: "100%" }), P(D, "fp-scrollable"), Yn(Te().recordHistory, "internal"), k(g(), { "-ms-touch-action": "none", "touch-action": "none" }), n != null && Ce(n.offsetTop);
      else if (k(Dt, { overflow: "visible", height: "initial" }), x(D, "fp-scrollable"), Yn(!!o().autoScrolling && Te().recordHistory, "internal"), k(g(), { "-ms-touch-action": "", "touch-action": "" }), kt(g()), n != null) {
        var i = ze(n.offsetTop);
        i.element.scrollTo(0, i.options);
      }
      K(g(), "setAutoScrolling", e);
    }
    function Vn() {
      for (var e = s(Et), t = 0; t < e.length; t++)
        lt(e[t], "internal");
    }
    function Lo() {
      var e = s(".fp-auto-height")[0] || qn() && s(".fp-auto-height-responsive")[0];
      o().lazyLoading && e && s(".fp-section:not(.active)").forEach(function(t) {
        var n, i, r, a, l;
        i = (n = t.getBoundingClientRect()).top, r = n.bottom, a = i + 2 < c._ && i > 0, l = r > 2 && r < c._, (a || l) && ot(Ct(t));
      });
    }
    function Mr() {
      K(Wt(this), "click");
    }
    function xo() {
      Re(s(Me));
      var e = A.createElement("div");
      e.setAttribute("id", "fp-nav");
      var t = A.createElement("ul");
      e.appendChild(t), We(e, D);
      var n = s(Me)[0];
      x(n, "fp-" + o().navigationPosition), o().showActiveTooltip && x(n, "fp-show-active");
      for (var i = "", r = 0; r < u().D.length; r++) {
        var a = u().D[r], l = "";
        o().anchors.length && (l = a.anchor), i += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + oo(a.index(), "Section") + "</span><span></span></a>";
        var v = o().navigationTooltips[a.index()];
        v !== void 0 && v !== "" && (i += '<div class="fp-tooltip fp-' + o().navigationPosition + '">' + v + "</div>"), i += "</li>";
      }
      s("ul", n)[0].innerHTML = i;
      var f = s("li", s(Me)[0])[u().L.index()];
      x(s("a", f), H);
    }
    function Tr(e) {
      e.preventDefault && Z(e), p({ j: "verticalNav" });
      var t = de(T(this, "#fp-nav li"));
      d.cn(fo, { destination: u().D[t] });
    }
    function Wn(e, t) {
      var n;
      n = e, o().menu && o().menu.length && s(o().menu).forEach(function(i) {
        i != null && (P(s(vn, i), H), x(s('[data-menuanchor="' + n + '"]', i), H));
      }), function(i, r) {
        var a = s(Me)[0];
        o().navigation && a != null && a.style.display !== "none" && (P(s(vn, a), H), x(i ? s('a[href="#' + i + '"]', a) : s("a", s("li", a)[r]), H));
      }(e, t);
    }
    _t.prototype = le.prototype, _t.prototype.constructor = He, h.setRecordHistory = Yn, h.setAutoScrolling = _e, h.test.setAutoScrolling = _e, (/* @__PURE__ */ new Date()).getTime();
    var Zn, Fn, Xn, Gn, at, Un, Or = (Fn = !0, Xn = (/* @__PURE__ */ new Date()).getTime(), Gn = !y.fullpage_api, function(e, t) {
      var n = (/* @__PURE__ */ new Date()).getTime(), i = e === "wheel" ? o().scrollingSpeed : 100;
      return Fn = Gn || n - Xn >= i, Gn = !y.fullpage_api, Fn && (Zn = t(), Xn = n), Zn === void 0 || Zn;
    });
    function Eo(e, t) {
      if (I(o().beforeLeave))
        return Or(u().j, function() {
          return se(e, t);
        });
    }
    function Ye(e, t, n) {
      var i = e.item;
      if (i != null) {
        var r, a, l = { element: i, callback: t, isMovementUp: n, dtop: Ao(i), yMovement: An(u().L, i), anchorLink: e.anchor, sectionIndex: e.index(), activeSlide: e.activeSlide ? e.activeSlide.item : null, leavingSection: u().L.index() + 1, localIsResizing: c.H, items: { origin: u().L, destination: e }, direction: null };
        if (!(u().L.item == i && !c.H || o().scrollBar && we() === l.dtop && !O(i, "fp-auto-height"))) {
          if (l.activeSlide != null && (r = z(l.activeSlide, "data-anchor"), a = de(l.activeSlide, null)), !l.localIsResizing) {
            var v = l.yMovement;
            if (n !== void 0 && (v = n ? "up" : "down"), l.direction = v, Fi("dropEffect") && h.dropEffect.onLeave_(l), Fi("waterEffect") && h.waterEffect.onLeave_(l), I(o().beforeLeave) && Eo("beforeLeave", l) === !1 || I(o().onLeave) && !se("onLeave", l))
              return;
          }
          S("parallax", "apply", l), S("cards", "apply", l), S("dropEffect", "apply", l), S("waterEffect", "apply", l), o().autoScrolling && o().continuousVertical && l.isMovementUp !== void 0 && (!l.isMovementUp && l.yMovement == "up" || l.isMovementUp && l.yMovement == "down") && (l = function(f) {
            p({ J: !0 });
            var b = u().L.item;
            return f.isMovementUp ? Gt(b, ri(b, J)) : dt(b, li(b, J).reverse()), Ce(u().L.item.offsetTop), Vn(), f.gn = b, f.dtop = f.element.offsetTop, f.yMovement = An(u().L, f.element), f.leavingSection = f.items.origin.index() + 1, f.sectionIndex = f.items.destination.index(), K(g(), "onContinuousVertical", f), f;
          }(l)), S("scrollOverflowReset", "setPrevious", u().L.item), l.localIsResizing || Tn(u().L.item), R("dropEffect") && o().dropEffect || (x(i, H), P(Ze(i), H)), ce(), ot(e), p({ canScroll: h.test.mn }), Cn(a, r, l.anchorLink), d.cn(ho, l), function(f) {
            p({ B: "none", scrollY: Math.round(f.dtop) }), d.cn(Rn, f);
            var b = o().scrollingSpeed < 700, L = b ? 700 : o().scrollingSpeed;
            if (o().css3 && o().autoScrolling && !o().scrollBar)
              Ji("translate3d(0px, -" + Math.round(f.dtop) + "px, 0px)", !0), R("waterEffect") && Vn(), o().scrollingSpeed ? (clearTimeout(at), at = setTimeout(function() {
                Yt(f), p({ canScroll: !b || h.test.mn });
              }, o().scrollingSpeed)) : Yt(f);
            else {
              var w = ze(f.dtop);
              h.test.top = -f.dtop + "px", clearTimeout(at), Ht(w.element, w.options, o().scrollingSpeed, function() {
                o().scrollBar ? at = setTimeout(function() {
                  Yt(f);
                }, 30) : (Yt(f), p({ canScroll: !b || h.test.mn }));
              });
            }
            b && (clearTimeout(Un), Un = setTimeout(function() {
              p({ canScroll: !0 });
            }, L));
          }(l), p({ W: l.anchorLink }), Wn(l.anchorLink, function(f) {
            return f.gn != null ? f.isMovementUp ? c.O - 1 : 0 : f.sectionIndex;
          }(l));
        }
      }
    }
    function Ao(e) {
      var t = e.offsetHeight, n = e.offsetTop, i = n, r = R("dragAndMove") && S("dragAndMove", "isGrabbing") ? S("dragAndMove", "isScrollingDown") : n > c.X, a = i - W() + t, l = o().bigSectionsDestination;
      return t > W() ? (r || l) && l !== "bottom" || (i = a) : (r || c.H && ft(e) == null) && (i = a), R("offsetSections") && (i = h.offsetSections.getSectionPosition_(r, i, e)), p({ X: i }), i;
    }
    function Yt(e) {
      p({ N: !1 }), function(t) {
        t.gn != null && (t.isMovementUp ? Gt(s(J)[0], t.gn) : dt(s(J)[u().D.length - 1], t.gn), Ce(u().L.item.offsetTop), function() {
          for (var n = s(Et), i = 0; i < n.length; i++)
            lt(n[i], "internal");
        }(), t.sectionIndex = t.items.destination.index(), t.leavingSection = t.items.origin.index() + 1, p({ J: !1 }));
      }(e), I(o().afterLoad) && !e.localIsResizing && se("afterLoad", e), S("parallax", "afterLoad"), S("waterEffect", "afterLoad"), S("dropEffect", "afterLoad"), S("scrollOverflowReset", "reset"), S("resetSliders", "apply", e), ce(), e.localIsResizing || Nt(e.element), x(e.element, Be), P(Ze(e.element), Be), Lo(), p({ canScroll: !0 }), d.cn(Rt, e), I(e.callback) && e.callback();
    }
    function Kn(e, t) {
      tt("fitToSection", e, t);
    }
    function Mo() {
      c.canScroll && o().fitToSection && (p({ H: !0 }), Ye(c.L), p({ H: !1 }));
    }
    function To() {
      var e = o().responsive || o().responsiveWidth, t = o().responsiveHeight, n = e && y.innerWidth < e, i = t && y.innerHeight < t;
      e && t ? Vt(n || i) : e ? Vt(n) : t && Vt(i);
    }
    function Vt(e) {
      var t = qn();
      e ? t || (_e(!1, "internal"), Kn(!1, "internal"), Zt(s(Me)), x(D, bt), I(o().afterResponsive) && o().afterResponsive.call(g(), e), S("responsiveSlides", "toSections"), K(g(), "afterResponsive", e)) : t && (_e(Te().autoScrolling, "internal"), Kn(Te().autoScrolling, "internal"), ni(s(Me)), P(D, bt), I(o().afterResponsive) && o().afterResponsive.call(g(), e), S("responsiveSlides", "toSlides"), K(g(), "afterResponsive", e));
    }
    function qn() {
      return O(D, bt);
    }
    function Oo(e) {
      o().verticalCentered && (!o().scrollOverflow && m.wn(e.item) || m.bn(e) || O(e.item, zi) || x(e.item, zi));
    }
    h.moveTo = moveTo, h.getScrollY = function() {
      return c.scrollY;
    }, d.ln(ae, function() {
      clearTimeout(at), clearTimeout(Un);
    }), h.setFitToSection = Kn, h.fitToSection = Mo, h.setResponsive = Vt;
    var $n, Qn = null;
    function Jn(e) {
      var t = e.item, n = e.pn.length, i = e.index();
      !u().L && e.isVisible && (x(t, H), ce()), !Qn && e.isVisible && (Qn = u().L.item), R("offsetSections") && k(t, { height: Ln(t) }), o().paddingTop && k(t, { "padding-top": o().paddingTop }), o().paddingBottom && k(t, { "padding-bottom": o().paddingBottom }), o().sectionsColor[i] !== void 0 && k(t, { "background-color": o().sectionsColor[i] }), o().anchors[i] !== void 0 && t.setAttribute("data-anchor", e.anchor), n || Oo(e);
    }
    function Co() {
      o().scrollOverflow && !o().scrollBar && (m.Sn(), m.yn());
    }
    function Cr() {
      d.removeListener(Dn, Co), ve("keyup", m.Mn);
    }
    h.getActiveSection = function() {
      return u().L;
    }, d.ln(q, function() {
      d.ln(Dn, Co), d.ln(ho, m.onLeave), d.ln(Bn, m.onLeave), d.ln(Bt, m.afterLoad), d.ln(Rt, m.afterLoad), d.ln(ae, Cr), je("keyup", m.Mn);
    });
    var ei, ct, m = { Tn: null, An: !0, xn: !0, On: null, kn: null, En: function(e) {
      var t = u().L;
      if (!c.canScroll || wr() && o().scrollOverflow && m.bn(t) && m.isScrolled(u().Z, t.item))
        return Z(e), !1;
    }, Rn: function(e) {
      if (!ai() && o().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !m.xn)
        return Z(e), !1;
    }, Mn: function() {
      m.An = c.canScroll;
    }, onLeave: function() {
      clearTimeout($n), m.xn = !1;
    }, afterLoad: function() {
      m.xn = !1, clearTimeout($n), $n = setTimeout(function() {
        m.An = c.canScroll;
      }, 200);
    }, Dn: function() {
      A.activeElement === this.Tn && (this.Tn.blur(), m.xn = !1);
    }, yn: function() {
      if (o().scrollOverflow && m.An) {
        m.Dn();
        var e = m.Ln(u().L.item);
        !e || xe || Ee || (this.Tn = e, requestAnimationFrame(function() {
          e.focus({ jn: !0 }), m.xn = !0;
        })), m.An = !1;
      }
    }, Sn: function() {
      o().scrollOverflowMacStyle && !Sr && x(D, "fp-scroll-mac"), u().on.forEach(function(e) {
        if (!(e.slides && e.slides.length || O(e.item, "fp-auto-height-responsive") && qn())) {
          var t, n = Oe(e.item), i = m.wn(e.item), r = (t = e).tn ? t : t.parent;
          if (Pi) {
            var a = i ? "addClass" : "removeClass";
            Ri[a](r.item, Je), Ri[a](e.item, Je);
          } else
            x(r.item, Je), x(e.item, Je);
          e.nn || (m.zn(n), m.Nn(n)), e.nn = !0;
        }
      });
    }, Nn: function(e) {
      m.Ln(e).addEventListener("scroll", m.In), e.addEventListener("wheel", m.En, { passive: !1 }), e.addEventListener("keydown", m.Rn, { passive: !1 });
    }, zn: function(e) {
      var t = document.createElement("div");
      t.className = Pe, oi(e, t), t.setAttribute("tabindex", "-1");
    }, Pn: function(e) {
      var t = s(Qe, e)[0];
      t && (Xt(t), e.removeAttribute("tabindex"));
    }, Ln: function(e) {
      var t = Oe(e);
      return s(Qe, t)[0] || t;
    }, nn: function(e) {
      return O(e, Pe) || s(Qe, e)[0] != null;
    }, bn: function(e) {
      return e.tn && e.activeSlide ? e.activeSlide.nn : e.nn;
    }, wn: function(e) {
      return m.Ln(e).scrollHeight > y.innerHeight;
    }, isScrolled: function(e, t) {
      if (!c.canScroll)
        return !1;
      if (o().scrollBar)
        return !0;
      var n = m.Ln(t);
      if (!o().scrollOverflow || !O(n, Pe) || O(t, "fp-noscroll") || O(Oe(t), "fp-noscroll"))
        return !0;
      var i = Pi ? 1 : 0, r = n.scrollTop, a = e === "up" && r <= 0, l = e === "down" && n.scrollHeight <= Math.ceil(n.offsetHeight + r) + i, v = a || l;
      return v || e === "none" || (this.On = (/* @__PURE__ */ new Date()).getTime()), v;
    }, Hn: function() {
      this.kn = (/* @__PURE__ */ new Date()).getTime();
      var e = this.kn - m.On, t = (xe || Ee) && c.Y, n = c.G && e > 600;
      return t && e > 400 || n;
    }, In: (ei = 0, function(e) {
      var t = e.target.scrollTop, n = c.B !== "none" ? c.B : ei < t ? "down" : "up";
      ei = t, I(o().onScrollOverflow) && se("onScrollOverflow", { position: t, direction: n }), O(e.target, Pe) && c.canScroll && m.isScrolled(n, e.target) && m.Hn() && m.wn(u().L.item) && d.cn(co, { direction: n });
    }) };
    function ee(e, t) {
      y.console && y.console[e] && y.console[e]("fullPage: " + t);
    }
    function ti(e) {
      return y.getComputedStyle(e).display !== "none";
    }
    function st(e) {
      return Array.from(e).filter(function(t) {
        return ti(t);
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
    function O(e, t) {
      return e != null && e.classList.contains(t);
    }
    function W() {
      return "innerHeight" in y ? y.innerHeight : A.documentElement.offsetHeight;
    }
    function ut() {
      return y.innerWidth;
    }
    function k(e, t) {
      var n;
      for (n in e = Se(e), t)
        if (t.hasOwnProperty(n) && n !== null)
          for (var i = 0; i < e.length; i++)
            e[i].style[n] = t[n];
      return e;
    }
    function Wt(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.previousElementSibling;
      var n = Wt(e);
      return n && _(n, t) ? n : null;
    }
    function ft(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.nextElementSibling;
      var n = ft(e);
      return n && _(n, t) ? n : null;
    }
    function ko(e) {
      return e[e.length - 1];
    }
    function de(e, t) {
      e = Ve(e) ? e[0] : e;
      for (var n = t != null ? s(t, e.parentNode) : e.parentNode.childNodes, i = 0, r = 0; r < n.length; r++) {
        if (n[r] == e)
          return i;
        n[r].nodeType == 1 && i++;
      }
      return -1;
    }
    function Se(e) {
      return Ve(e) ? e : [e];
    }
    function Zt(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "none";
      return e;
    }
    function ni(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "block";
      return e;
    }
    function Ve(e) {
      return Object.prototype.toString.call(e) === "[object Array]" || Object.prototype.toString.call(e) === "[object NodeList]";
    }
    function x(e, t) {
      e = Se(e);
      for (var n = 0; n < e.length; n++)
        e[n].classList.add(t);
      return e;
    }
    function P(e, t) {
      e = Se(e);
      for (var n = t.split(" "), i = 0; i < n.length; i++) {
        t = n[i];
        for (var r = 0; r < e.length; r++)
          e[r].classList.remove(t);
      }
      return e;
    }
    function We(e, t) {
      t.appendChild(e);
    }
    function ii(e, t, n) {
      var i;
      t = t || A.createElement("div");
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (n && !r || !n) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a);
      }
      return e;
    }
    function Ft(e, t) {
      ii(e, t, !0);
    }
    function oi(e, t) {
      for (typeof t == "string" && (t = ye(t)), e.appendChild(t); e.firstChild !== t; )
        t.appendChild(e.firstChild);
    }
    function Xt(e) {
      for (var t = A.createDocumentFragment(); e.firstChild; )
        t.appendChild(e.firstChild);
      e.parentNode.replaceChild(t, e);
    }
    function T(e, t) {
      return e && e.nodeType === 1 ? _(e, t) ? e : T(e.parentNode, t) : null;
    }
    function dt(e, t) {
      Ut(e, e.nextSibling, t);
    }
    function Gt(e, t) {
      Ut(e, e, t);
    }
    function Ut(e, t, n) {
      Ve(n) || (typeof n == "string" && (n = ye(n)), n = [n]);
      for (var i = 0; i < n.length; i++)
        e.parentNode.insertBefore(n[i], t);
    }
    function we() {
      var e = A.documentElement;
      return (y.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function Ze(e) {
      return Array.prototype.filter.call(e.parentNode.children, function(t) {
        return t !== e;
      });
    }
    function Z(e) {
      e.preventDefault();
    }
    function z(e, t) {
      return e.getAttribute(t);
    }
    function je(e, t, n) {
      A.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function pe(e, t, n) {
      y.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function ve(e, t, n) {
      A.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function Fe(e, t, n) {
      y.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function I(e) {
      if (typeof e == "function")
        return !0;
      var t = Object.prototype.toString.call(e);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function K(e, t, n) {
      var i;
      n = n === void 0 ? {} : n, typeof y.CustomEvent == "function" ? i = new CustomEvent(t, { detail: n }) : (i = A.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
    }
    function _(e, t) {
      return (e.matches || e.Cn || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function Kt(e, t) {
      if (typeof t == "boolean")
        for (var n = 0; n < e.length; n++)
          e[n].style.display = t ? "block" : "none";
      return e;
    }
    function ye(e) {
      var t = A.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild;
    }
    function Re(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n && n.parentElement && n.parentNode.removeChild(n);
      }
    }
    function Do(e, t) {
      Array.prototype.filter.call(e, t);
    }
    function qt(e, t, n) {
      for (var i = e[n], r = []; i; )
        (_(i, t) || t == null) && r.push(i), i = i[n];
      return r;
    }
    function ri(e, t) {
      return qt(e, t, "nextElementSibling");
    }
    function li(e, t) {
      return qt(e, t, "previousElementSibling");
    }
    function Ho(e) {
      return Object.keys(e).map(function(t) {
        return e[t];
      });
    }
    function ue(e) {
      return e[e.length - 1];
    }
    function pt(e, t) {
      for (var n = 0, i = e.slice(Math.max(e.length - t, 1)), r = 0; r < i.length; r++)
        n += i[r];
      return Math.ceil(n / t);
    }
    function $t(e, t) {
      e.setAttribute(t, z(e, "data-" + t)), e.removeAttribute("data-" + t);
    }
    function No(e, t) {
      var n = [e];
      do
        e = e.parentNode, n.push(e);
      while (!_(e, t));
      return n;
    }
    function ai() {
      var e = A.activeElement;
      return _(e, "textarea") || _(e, "input") || _(e, "select") || z(e, "contentEditable") == "true" || z(e, "contentEditable") == "";
    }
    function jo(e) {
      d.cn(jt, { e, target: e.target });
    }
    function kr() {
      ["click", "touchstart"].forEach(function(e) {
        ve(e, jo, { passive: !1 });
      });
    }
    function Dr() {
      p({ U: !0 });
    }
    function Ro() {
      x(s(o().sectionSelector, g()), xt), x(s(o().slideSelector, g()), hn);
    }
    function ci(e) {
      var t = e.slides.length, n = e.pn, i = e.slides, r = 100 * t, a = 100 / t;
      if (!s(fe, e.item)[0]) {
        var l = A.createElement("div");
        l.className = At, Ft(n, l);
        var v = A.createElement("div");
        v.className = mn, Ft(n, v);
      }
      k(s($e, e.item), { width: r + "%" }), t > 1 && (o().controlArrows && function(b) {
        var L = b.item, w = [ye(o().controlArrowsHTML[0]), ye(o().controlArrowsHTML[1])];
        dt(s(fe, L)[0], w), x(w, _i), x(w[0], Yi), x(w[1], "fp-next"), o().controlArrowColor !== "#fff" && (k(s(Vi, L), { "border-color": "transparent transparent transparent " + o().controlArrowColor }), k(s(yn, L), { "border-color": "transparent " + o().controlArrowColor + " transparent transparent" })), o().loopHorizontal || Zt(s(yn, L));
      }(e), o().slidesNavigation && function(b) {
        var L = b.item, w = b.slides.length;
        We(ye('<div class="fp-slidesNav"><ul></ul></div>'), L);
        var M = s(Sn, L)[0];
        x(M, "fp-" + o().slidesNavPosition);
        for (var C = 0; C < w; C++)
          We(ye('<li><a href="#"><span class="fp-sr-only">' + oo(C, "Slide", s(gn, L)[C]) + "</span><span></span></a></li>"), s("ul", M)[0]);
        k(M, { "margin-left": "-" + M.innerWidth / 2 + "px" });
        var F = b.activeSlide ? b.activeSlide.index() : 0;
        x(s("a", s("li", M)[F]), H);
      }(e)), i.forEach(function(b) {
        k(b.item, { width: a + "%" }), o().verticalCentered && Oo(b);
      });
      var f = R("responsiveSlides") ? null : e.activeSlide || null;
      f != null && c.L && (c.L.index() !== 0 || c.L.index() === 0 && f.index() !== 0) ? (lt(f.item, "internal"), x(f.item, "fp-initial")) : x(n[0], H);
    }
    window.fp_utils = Object.assign(y.fp_utils || {}, { $: s, deepExtend: Ne, hasClass: O, getWindowHeight: W, css: k, prev: Wt, next: ft, last: ko, index: de, getList: Se, hide: Zt, show: ni, isArrayOrList: Ve, addClass: x, removeClass: P, appendTo: We, wrap: ii, wrapAll: Ft, wrapInner: oi, unwrap: Xt, closest: T, after: dt, before: Gt, insertBefore: Ut, getScrollTop: we, siblings: Ze, preventDefault: Z, isFunction: I, trigger: K, matches: _, toggle: Kt, createElementFromHTML: ye, remove: Re, filter: Do, untilAll: qt, nextAll: ri, prevAll: li, showError: ee, scrollOverflowHandler: m }), d.ln(q, function() {
      ["click", "touchstart"].forEach(function(e) {
        je(e, jo, { passive: !1 });
      }), pe("focus", Dr), d.ln(ae, kr);
    });
    var Bo = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
    function Po() {
      return S("responsiveSlides", "isResponsiveSlidesChanging") || st(s(o().slideSelector, g())).length !== u().R;
    }
    function si(e) {
      var t = Po();
      (Po() || S("responsiveSlides", "isResponsiveSlidesChanging") || st(s(o().sectionSelector, g())).length !== u().O) && !c.J && (o().observer && ct && ct.disconnect(), It(), ce(), o().anchors = [], Re(s(Me)), S("responsiveSlides", "isResponsiveSlidesChanging") || Ro(), Zi(), o().navigation && xo(), t && (Re(s(Sn)), Re(s(wn))), u().D.forEach(function(n) {
        n.slides.length ? t && ci(n) : Jn(n);
      })), o().observer && ct && s(Ae)[0] && ct.observe(s(Ae)[0], Bo);
    }
    d.ln(q, function() {
      var e, t, n;
      o().observer && "MutationObserver" in window && s(Ae)[0] && (e = s(Ae)[0], t = Bo, (n = new MutationObserver(si)).observe(e, t), ct = n), d.ln(ao, si);
    }), h.render = si;
    var Hr = function() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", { get: function() {
          e = !0;
        } });
        pe("testPassive", null, t), Fe("testPassive", null, t);
      } catch {
      }
      return function() {
        return e;
      };
    }();
    function zo() {
      return !!Hr() && { passive: !1 };
    }
    var Io, _o, ui, be, Qt = (ui = (/* @__PURE__ */ new Date()).getTime(), be = [], { Wn: function(e) {
      var t = (e = e || y.event).wheelDelta || -e.deltaY || -e.detail, n = Math.max(-1, Math.min(1, t)), i = e.wheelDeltaX !== void 0 || e.deltaX !== void 0;
      Io = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
      var r = (/* @__PURE__ */ new Date()).getTime();
      _o = n < 0 ? "down" : "up", be.length > 149 && be.shift(), be.push(Math.abs(t));
      var a = r - ui;
      ui = r, a > 200 && (be = []);
    }, Fn: function() {
      var e = pt(be, 10) >= pt(be, 70);
      return !!be.length && e && Io;
    }, Vn: function() {
      return _o;
    } });
    function Nr() {
      var e = o().css3 ? we() + W() : ue(u().D).item.offsetTop + ue(u().D).item.offsetHeight, t = ze(e);
      h.test.top = -e + "px", p({ canScroll: !1 }), Ht(t.element, t.options, o().scrollingSpeed, function() {
        setTimeout(function() {
          p({ N: !0 }), p({ canScroll: !0 });
        }, 30);
      });
    }
    function jr() {
      g().getBoundingClientRect().bottom >= 0 && Yo();
    }
    function Yo() {
      var e = ze(ue(u().D).item.offsetTop);
      p({ canScroll: !1 }), Ht(e.element, e.options, o().scrollingSpeed, function() {
        p({ canScroll: !0 }), p({ N: !1 }), p({ Bn: !1 });
      });
    }
    var fi, di, pi, Vo = (fi = !1, di = {}, pi = {}, function(e, t, n) {
      switch (e) {
        case "set":
          di[t] = (/* @__PURE__ */ new Date()).getTime(), pi[t] = n;
          break;
        case "isNewKeyframe":
          var i = (/* @__PURE__ */ new Date()).getTime();
          fi = i - di[t] > pi[t];
      }
      return fi;
    });
    function vt() {
      var e = u().L.next();
      e || !o().loopBottom && !o().continuousVertical || (e = u().D[0]), e != null ? Ye(e, null, !1) : g().scrollHeight < D.scrollHeight && o().scrollBar && o().scrollBeyondFullpage && d.cn(vo);
    }
    function Xe() {
      var e = u().L.prev();
      e || !o().loopTop && !o().continuousVertical || (e = ue(u().D)), e != null && Ye(e, null, !0);
    }
    h.moveSectionDown = vt, h.moveSectionUp = Xe;
    var Jt = 0;
    function Wo(e) {
      o().autoScrolling && (c.canScroll && (e.pageY < Jt && V().m.up ? Xe() : e.pageY > Jt && V().m.down && vt()), Jt = e.pageY);
    }
    function Zo(e) {
      if (V().m[e]) {
        var t = e === "down" ? vt : Xe;
        R("scrollHorizontally") && (t = S("scrollHorizontally", "getScrollSection", { type: e, scrollSection: t })), o().scrollOverflow && m.bn(u().L) ? m.isScrolled(e, u().L.item) && m.Hn() && t() : t();
      }
    }
    var en, vi, Ge, tn = 0, ht = 0, nn = 0, gt = 0, on = Xo(), oe = { Zn: "ontouchmove" in window ? "touchmove" : on ? on.move : null, Yn: "ontouchstart" in window ? "touchstart" : on ? on.down : null };
    function mt(e) {
      var t = T(e.target, J) || u().L.item, n = m.bn(u().L);
      if (St(e)) {
        p({ Y: !0, G: !1 }), o().autoScrolling && (n && !c.canScroll || o().scrollBar) && Z(e);
        var i = hi(e);
        nn = i.y, gt = i.x;
        var r = Math.abs(tn - nn) > y.innerHeight / 100 * o().touchSensitivity, a = Math.abs(ht - gt) > ut() / 100 * o().touchSensitivity, l = s(fe, t).length && Math.abs(ht - gt) > Math.abs(tn - nn), v = tn > nn ? "down" : "up";
        p({ B: l ? ht > gt ? "right" : "left" : v }), l ? !c.P && a && (ht > gt ? V().m.right && d.cn(Nn, { section: t }) : V().m.left && d.cn(Hn, { section: t })) : o().autoScrolling && c.canScroll && r && Zo(v);
      }
    }
    function St(e) {
      return e.pointerType === void 0 || e.pointerType != "mouse";
    }
    function rn(e) {
      if (o().fitToSection && p({ V: !1 }), St(e)) {
        var t = hi(e);
        tn = t.y, ht = t.x;
      }
      pe("touchend", Fo);
    }
    function Fo() {
      Fe("touchend", Fo), p({ Y: !1 });
    }
    function hi(e) {
      var t = {};
      return t.y = e.pageY !== void 0 && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = e.pageX !== void 0 && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ee && St(e) && o().scrollBar && e.touches !== void 0 && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }
    function Xo() {
      var e;
      return y.PointerEvent && (e = { down: "pointerdown", move: "pointermove" }), e;
    }
    function gi(e) {
      o().autoScrolling && St(e) && V().m.up && (c.canScroll || Z(e));
    }
    function Go(e, t) {
      var n = t ?? u().L.item, i = Ct(c.D, n), r = s(fe, n)[0];
      if (!(r == null || Ot() || c.P || i.slides.length < 2)) {
        var a = i.activeSlide, l = e === "left" ? a.prev() : a.next();
        if (!l) {
          if (!o().loopHorizontal)
            return;
          l = e === "left" ? ue(i.slides) : i.slides[0];
        }
        p({ P: !h.test.mn }), De(r, l.item, e);
      }
    }
    function mi(e) {
      Go("left", e);
    }
    function Si(e) {
      Go("right", e);
    }
    function wi(e) {
      var t = u().D.filter(function(i) {
        return i.anchor === e;
      })[0];
      if (!t) {
        var n = e !== void 0 ? e - 1 : 0;
        t = u().D[n];
      }
      return t;
    }
    function Uo(e) {
      e != null && De(T(e, fe), e);
    }
    function yi(e, t) {
      var n = wi(e);
      if (n != null) {
        var i = function(r, a) {
          var l = a.slides.filter(function(v) {
            return v.anchor === r;
          })[0];
          return l == null && (r = r !== void 0 ? r : 0, l = a.slides[r]), l ? l.item : null;
        }(t, n);
        n.anchor && n.anchor === c.W || O(n.item, H) ? Uo(i) : Ye(n, function() {
          Uo(i);
        });
      }
    }
    function wt(e, t) {
      var n = wi(e);
      t !== void 0 ? yi(e, t) : n != null && Ye(n);
    }
    function Rr() {
      clearTimeout(vi), ve("keydown", Ko), ve("keyup", qo);
    }
    function Ko(e) {
      clearTimeout(vi);
      var t = e.keyCode, n = [37, 39].indexOf(t) > -1, i = o().autoScrolling || o().fitToSection || n;
      t === 9 ? function(r) {
        var a = r.shiftKey, l = A.activeElement, v = bi(Oe(u().L.item));
        function f(Y) {
          return Z(Y), v[0] ? v[0].focus() : null;
        }
        if (c.canScroll) {
          if (!function(Y) {
            var N = bi(A), j = N.indexOf(A.activeElement), E = N[Y.shiftKey ? j - 1 : j + 1], X = T(E, gn), G = T(E, J);
            return !X && !G;
          }(r)) {
            l ? T(l, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (l = f(r)) : f(r);
            var b = l == v[0], L = l == v[v.length - 1], w = a && b;
            if (w || !a && L) {
              Z(r);
              var M = function(Y) {
                var N, j = Y ? "prevPanel" : "nextPanel", E = [], X = $i((c.L && c.L.activeSlide ? c.L.activeSlide : c.L)[j]());
                do
                  (E = bi(X.item)).length && (N = { Gn: X, Un: E[Y ? E.length - 1 : 0] }), X = $i(X[j]());
                while (X && E.length === 0);
                return N;
              }(w), C = M ? M.Gn : null;
              if (C) {
                var F = C.tn ? C : C.parent;
                d.cn(jn, { Xn: F.index() + 1, slideAnchor: C.tn ? 0 : C.index() }), Ge = M.Un, Z(r);
              }
            }
          }
        } else
          Z(r);
      }(e) : !ai() && o().keyboardScrolling && i && (en = e.ctrlKey, vi = setTimeout(function() {
        (function(r) {
          var a = r.shiftKey, l = A.activeElement, v = _(l, "video") || _(l, "audio"), f = m.isScrolled("up", u().L.item), b = m.isScrolled("down", u().L.item), L = [37, 39].indexOf(r.keyCode) > -1;
          if (function(w) {
            (function(M) {
              return [40, 38, 32, 33, 34].indexOf(M.keyCode) > -1 && !c.N;
            })(w) && !T(w.target, Qe) && w.preventDefault();
          }(r), c.canScroll || L)
            switch (p({ j: "keydown" }), r.keyCode) {
              case 38:
              case 33:
                V().k.up && f ? c.N ? d.cn(so, { e: r }) : Xe() : m.yn();
                break;
              case 32:
                if (a && V().k.up && !v && f) {
                  Xe();
                  break;
                }
              case 40:
              case 34:
                if (V().k.down && b) {
                  if (c.N)
                    return;
                  r.keyCode === 32 && v || vt();
                } else
                  m.yn();
                break;
              case 36:
                V().k.up && wt(1);
                break;
              case 35:
                V().k.down && wt(u().D.length);
                break;
              case 37:
                V().k.left && mi();
                break;
              case 39:
                V().k.right && Si();
            }
        })(e);
      }, 0));
    }
    function qo(e) {
      c.U && (en = e.ctrlKey);
    }
    function Br() {
      p({ U: !1 }), en = !1;
    }
    function Pr(e) {
      $o();
    }
    function zr(e) {
      T(Ge, gn) && !T(Ge, Et) || $o();
    }
    function $o() {
      Ge && (Ge.focus(), Ge = null);
    }
    function bi(e) {
      return [].slice.call(s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]', e)).filter(function(t) {
        return z(t, "tabindex") !== "-1" && t.offsetParent !== null;
      });
    }
    h.moveSlideLeft = mi, h.moveSlideRight = Si, h.moveTo = wt, d.ln(q, function() {
      pe("blur", Br), je("keydown", Ko), je("keyup", qo), d.ln(ae, Rr), d.ln(Bt, Pr), d.ln(Rt, zr);
    });
    var Qo = (/* @__PURE__ */ new Date()).getTime(), Ue = [];
    function Li(e) {
      e ? (function() {
        var t, n = "";
        y.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
        var i = "onwheel" in A.createElement("div") ? "wheel" : A.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", r = zo();
        i == "DOMMouseScroll" ? A[t](n + "MozMousePixelScroll", Ke, r) : A[t](n + i, Ke, r);
      }(), g().addEventListener("mousedown", Jo), g().addEventListener("mouseup", er)) : (A.addEventListener ? (ve("mousewheel", Ke, !1), ve("wheel", Ke, !1), ve("MozMousePixelScroll", Ke, !1)) : A.detachEvent("onmousewheel", Ke), g().removeEventListener("mousedown", Jo), g().removeEventListener("mouseup", er));
    }
    function Ke(e) {
      var t = (/* @__PURE__ */ new Date()).getTime(), n = O(s(".fp-completely")[0], "fp-normal-scroll"), i = function(L, w) {
        (/* @__PURE__ */ new Date()).getTime();
        var M = u().N && L.getBoundingClientRect().bottom >= 0 && Qt.Vn() === "up", C = u().Bn;
        if (C)
          return Z(w), !1;
        if (u().N) {
          if (M) {
            var F;
            if (!(C || Vo("isNewKeyframe", "beyondFullpage") && Qt.Fn()))
              return (F = ze(ue(u().D).item.offsetTop + ue(u().D).item.offsetHeight)).element.scrollTo(0, F.options), p({ Bn: !1 }), Z(w), !1;
            if (Qt.Fn())
              return M = !1, p({ Bn: !0 }), p({ j: "wheel" }), Yo(), Z(w), !1;
          } else
            Vo("set", "beyondFullpage", 1e3);
          if (!C && !M)
            return !0;
        }
      }(g(), e);
      if (c.G || p({ Y: !1, G: !0, B: "none" }), !V().m.down && !V().m.up)
        return !1;
      if (i)
        return !0;
      if (i === !1)
        return Z(e), !1;
      if (o().autoScrolling && !en && !n) {
        var r = (e = e || y.event).wheelDelta || -e.deltaY || -e.detail, a = Math.max(-1, Math.min(1, r)), l = e.wheelDeltaX !== void 0 || e.deltaX !== void 0, v = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !l, f = a < 0 ? "down" : a > 0 ? "up" : "none";
        Ue.length > 149 && Ue.shift(), Ue.push(Math.abs(r)), o().scrollBar && Z(e);
        var b = t - Qo;
        return Qo = t, b > 200 && (Ue = []), p({ Z: f }), c.canScroll && !Ot() && pt(Ue, 10) >= pt(Ue, 70) && v && (p({ j: "wheel" }), Zo(a < 0 ? "down" : "up")), !1;
      }
      o().fitToSection && p({ V: !1 });
    }
    function Jo(e) {
      var t;
      e.which == 2 && (t = e.pageY, Jt = t, g().addEventListener("mousemove", Wo));
    }
    function er(e) {
      e.which == 2 && g().removeEventListener("mousemove", Wo);
    }
    function yt(e) {
      e ? (Li(!0), function() {
        if (oe.Zn && (xe || Ee) && (!R("dragAndMove") || o().dragAndMove === "mouseonly")) {
          o().autoScrolling && (D.removeEventListener(oe.Zn, gi, { passive: !1 }), D.addEventListener(oe.Zn, gi, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Yn, rn), t.removeEventListener(oe.Zn, mt, { passive: !1 }), t.addEventListener(oe.Yn, rn), t.addEventListener(oe.Zn, mt, { passive: !1 });
        }
      }()) : (Li(!1), function() {
        if (oe.Zn && (xe || Ee)) {
          o().autoScrolling && (D.removeEventListener(oe.Zn, mt, { passive: !1 }), D.removeEventListener(oe.Zn, gi, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Yn, rn), t.removeEventListener(oe.Zn, mt, { passive: !1 });
        }
      }());
    }
    h.setMouseWheelScrolling = Li;
    var xi = !0;
    function Ir() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
        ve(e, nr, !0);
      });
    }
    function tr(e, t) {
      document["fp_" + e] = t, je(e, nr, !0);
    }
    function nr(e) {
      var t = e.type, n = !1, i = t === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
      i != document && i ? (t === "touchend" && (xi = !1, setTimeout(function() {
        xi = !0;
      }, 800)), (t !== "mouseenter" || xi) && (o().normalScrollElements.split(",").forEach(function(r) {
        if (!n) {
          var a = _(i, r), l = T(i, r);
          (a || l) && (h.shared._n || yt(!1), h.shared._n = !0, n = !0);
        }
      }), !n && h.shared._n && (yt(!0), h.shared._n = !1))) : yt(!0);
    }
    function ln(e, t) {
      Ie(0, "internal"), wt(e, t), Ie(Te().scrollingSpeed, "internal");
    }
    d.ln(q, function() {
      o().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
        tr(e, !1);
      }), ["mouseleave", "touchend"].forEach(function(e) {
        tr(e, !0);
      })), d.ln(ae, Ir);
    }), h.silentMoveTo = ln;
    var Ei, ir, Ai = W(), or = ut(), Mi = !1;
    function _r() {
      clearTimeout(Ei), clearTimeout(ir), Fe("resize", Ti);
    }
    function Ti() {
      Mi || (o().autoScrolling && !o().scrollBar || !o().fitToSection) && rr(W()), c.q && function() {
        if (xe)
          for (var e = 0; e < 4; e++)
            ir = setTimeout(function() {
              window.requestAnimationFrame(function() {
                o().autoScrolling && !o().scrollBar && (p({ H: !0 }), ln(c.L.index() + 1), p({ H: !1 }));
              });
            }, 200 * e);
      }(), Mi = !0, clearTimeout(Ei), Ei = setTimeout(function() {
        (function() {
          if (p({ H: !0 }), rr(""), K(g(), "onResize"), o().autoScrolling || c.N || function() {
            if (!o().autoScrolling || o().scrollBar) {
              var r = 0.01 * y.innerHeight;
              A.documentElement.style.setProperty("--vh", "".concat(r, "px"));
            }
          }(), d.cn(ao), ce(), To(), xe) {
            var e = A.activeElement;
            if (!_(e, "textarea") && !_(e, "input") && !_(e, "select")) {
              var t = W();
              Math.abs(t - Ai) > 20 * Math.max(Ai, t) / 100 && (Oi(!0), Ai = t);
            }
          } else
            n = W(), i = ut(), c._ === n && or === i || (p({ _: n }), or = i, Oi(!0));
          var n, i;
          K(g(), "onResizeEnds"), p({ H: !1 });
        })(), Mi = !1;
      }, 400);
    }
    function Oi(e) {
      if (!O(g(), pn)) {
        p({ H: !0, _: W(), Qn: ut() });
        for (var t = u().D, n = 0; n < t.length; ++n) {
          var i = t[n], r = s(fe, i.item)[0], a = i.slides;
          R("offsetSections") && k(i.item, { height: Ln(i.item) }), a.length > 1 && De(r, i.activeSlide.item);
        }
        o().scrollOverflow && m.Sn();
        var l = u().L.index();
        c.N || !l || R("fadingEffect") || R("dropEffect") || R("waterEffect") || ln(l + 1), p({ H: !1 }), I(o().afterResize) && e && o().afterResize.call(g(), y.innerWidth, y.innerHeight), I(o().afterReBuild) && !e && o().afterReBuild.call(g()), K(g(), "afterRebuild");
      }
    }
    function rr(e) {
      u().D.forEach(function(t) {
        var n = e !== "" || R("offsetSections") ? Ln(t.item) : "";
        k(t.item, { height: n });
      });
    }
    function Ci() {
      var e, t, n = y.location.hash;
      if (n.length) {
        var i = n.replace("#", "").split("/"), r = n.indexOf("#/") > -1;
        e = r ? "/" + i[1] : decodeURIComponent(i[0]);
        var a = r ? i[2] : i[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, hn: t };
    }
    function Yr() {
      Fe("hashchange", lr);
    }
    function lr() {
      if (!c.C && !o().lockAnchors) {
        var e = Ci(), t = e.section, n = e.hn, i = c.W === void 0, r = c.W === void 0 && n === void 0 && !c.P;
        t && t.length && (t && t !== c.W && !i || r && !Ot() || !c.P && c.F != n && !Ot()) && d.cn(jn, { Xn: t, slideAnchor: n });
      }
    }
    function Vr(e) {
      var t = e.target;
      T(t, o().menu + " [data-menuanchor]") && Wr.call(t, e.e);
    }
    function Wr(e) {
      if (p({ j: "menu" }), s(o().menu)[0] && (o().lockAnchors || !o().anchors.length)) {
        Z(e);
        var t = T(this, "[data-menuanchor]");
        d.cn(uo, { anchor: z(t, "data-menuanchor") });
      }
    }
    function Zr(e) {
      var t = e.target;
      t && T(t, "#fp-nav a") ? Tr.call(t, e.e) : _(t, ".fp-tooltip") ? Mr.call(t) : (_(t, Ii) || T(t, Ii) != null) && Lr.call(t, e.e);
    }
    h.reBuild = Oi, d.ln(q, function() {
      Ti(), pe("resize", Ti), d.ln(ae, _r);
    }), h.setLockAnchors = function(e) {
      o().lockAnchors = e;
    }, d.ln(q, function() {
      pe("hashchange", lr), d.ln(ae, Yr);
    }), d.ln(q, function() {
      je("wheel", Qt.Wn, zo()), d.ln(vo, Nr), d.ln(so, jr);
    }), d.ln(q, function() {
      d.ln(jt, Vr);
    }), d.ln(q, function() {
      d.ln(jt, Zr);
    });
    var ki, Di, ar = 0;
    function an(e) {
      var t, n, i, r, a;
      if (K(g(), "onScroll"), !c.H && u().L && (ue(u().D), !u().N && !u().Bn && (!o().autoScrolling || o().scrollBar || R("dragAndMove")) && !Xi())) {
        var l = R("dragAndMove") ? Math.abs(S("dragAndMove", "getCurrentScroll")) : we(), v = function($) {
          var re = $ > ar ? "down" : "up";
          return ar = $, p({ X: $ }), re;
        }(l), f = 0, b = l + W() / 2, L = (R("dragAndMove") ? S("dragAndMove", "getDocumentHeight") : D.scrollHeight - W()) === l, w = u().D;
        if (p({ scrollY: l }), L)
          f = w.length - 1;
        else if (l)
          for (var M = 0; M < w.length; ++M)
            (T(w[M].item, J) || w[M].item).offsetTop <= b && (f = M);
        else
          f = 0;
        if (i = v, r = u().L.item.offsetTop, a = r + W(), (i == "up" ? a >= we() + W() : r <= we()) && (O(u().L.item, Be) || (x(u().L.item, Be), P(Ze(u().L.item), Be))), n = (t = w[f]).item, !t.isActive) {
          p({ C: !0 });
          var C, F, Y = u().L.item, N = u().L.index() + 1, j = An(u().L, n), E = t.anchor, X = t.index() + 1, G = t.activeSlide, ge = { L: Y, sectionIndex: X - 1, anchorLink: E, element: n, leavingSection: N, direction: j, items: { origin: u().L, destination: t } };
          G && (F = G.anchor, C = G.index()), c.canScroll && (P(w.filter(function($) {
            return $.index() !== t.index();
          }).map(function($) {
            return $.item;
          }), H), x(n, H), S("parallax", "afterLoad"), I(o().beforeLeave) && Eo("beforeLeave", ge), I(o().onLeave) && se("onLeave", ge), I(o().afterLoad) && se("afterLoad", ge), S("resetSliders", "apply", { localIsResizing: c.H, leavingSection: N }), Tn(Y), ot(t), Nt(n), Wn(E, X - 1), o().anchors.length && p({ W: E }), ce(), Cn(C, F, E)), clearTimeout(ki), ki = setTimeout(function() {
            p({ C: !1 });
          }, 100);
        }
        o().fitToSection && c.canScroll && (clearTimeout(Di), Di = setTimeout(function() {
          c.D.filter(function($) {
            var re = $.item.getBoundingClientRect();
            return Math.round(re.bottom) === Math.round(W()) || Math.round(re.top) === 0;
          }).length || Mo();
        }, o().A));
      }
    }
    function cr(e) {
      var t = o().skipIntermediateItems, n = e.items.origin.tn ? "sections" : "slides", i = Math.abs(e.items.origin.index() - e.items.destination.index()) > 1;
      (t === !0 || t === n) && i && Ie(0, "internal");
    }
    function sr() {
      o().skipIntermediateItems && tt("scrollingSpeed", Te().scrollingSpeed, "internal");
    }
    function Hi(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        zt(e, n, "k");
      }) : (zt(e, "all", "k"), o().keyboardScrolling = e);
    }
    function Fr(e) {
      var t = e.index();
      o().anchors[t] !== void 0 && e.isActive && Wn(o().anchors[t], t), o().menu && o().css3 && T(s(o().menu)[0], Ae) != null && s(o().menu).forEach(function(n) {
        D.appendChild(n);
      });
    }
    function ur() {
      var e, t, n = u().L, i = u().L.item;
      x(i, Be), ot(u().L), Lo(), Nt(i), t = wi((e = Ci()).section), e.section && t && (t === void 0 || t.index() !== de(Qn)) || !I(o().afterLoad) || se("afterLoad", { L: i, element: i, direction: null, anchorLink: n.anchor, sectionIndex: n.index(), items: { origin: u().L, destination: u().L } }), I(o().afterRender) && se("afterRender"), K(g(), "afterRender");
    }
    function Ni(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        zt(e, n, "m");
      }) : zt(e, "all", "m"), K(g(), "setAllowScrolling", { value: e, Jn: t });
    }
    function fr() {
      var e = Ci(), t = e.section, n = e.hn;
      t ? o().animateAnchor ? yi(t, n) : ln(t, n) : d.cn(Dn, null);
    }
    d.ln(ae, function() {
      clearTimeout(ki), clearTimeout(Di);
    }), d.ln(q, function() {
      pe("scroll", an), A.body.addEventListener("scroll", an), d.ln(jn, function(e) {
        yi(e.Xn, e.slideAnchor);
      }), d.ln(uo, function(e) {
        wt(e.anchor, void 0);
      }), d.ln(co, function(e) {
        (e.direction === "down" ? vt : Xe)();
      }), d.ln(fo, function(e) {
        Ye(e.destination);
      });
    }), d.ln(ae, function() {
      Fe("scroll", an);
    }), h.getActiveSlide = function() {
      return _n(u().L.activeSlide);
    }, h.getScrollX = function() {
      return c.scrollX;
    }, d.ln(q, function() {
      d.ln(ae, Ar), d.ln(po, function(e) {
        De(e.slides, e.destination);
      }), d.ln(Nn, function(e) {
        Si(e.section);
      }), d.ln(Hn, function(e) {
        mi(e.section);
      });
    }), d.ln(q, function() {
      var e = o().credits.position, t = ["left", "right"].indexOf(e) > -1 ? "".concat(e, ": 0;") : "", n = `
        <div class="fp-watermark" style="`.concat(t, `">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(o().credits.label, `
            </a>
        </div>
    `), i = ue(c.D), r = !c.Kn || o().credits.enabled;
      i && i.item && r && i.item.insertAdjacentHTML("beforeend", n);
    }), function() {
      d.ln(ro, function() {
        var v, f, b;
        p({ Kn: (o().licenseKey, v = o().licenseKey, f = function(L) {
          var w = parseInt("514").toString(16);
          if (!L || L.length < 29 || L.split(e[0]).length === 4)
            return null;
          var M = ["Each", "for"][r()]().join(""), C = L[["split"]]("-"), F = [];
          C[M](function(j, E) {
            if (E < 4) {
              var X = function($) {
                var re = $[$.length - 1], $r = ["NaN", "is"][r()]().join("");
                return window[$r](re) ? a(re) : function(Qr) {
                  return Qr - H.length;
                }(re);
              }(j);
              F.push(X);
              var G = a(j[X]);
              if (E === 1) {
                var ge = ["pa", "dS", "t", "art"].join("");
                G = G.toString()[ge](2, "0");
              }
              w += G, E !== 0 && E !== 1 || (w += "-");
            }
          });
          var Y = 0, N = "";
          return L.split("-").forEach(function(j, E) {
            if (E < 4) {
              for (var X = 0, G = 0; G < 4; G++)
                G !== F[E] && (X += Math.abs(a(j[G])), isNaN(j[G]) || Y++);
              var ge = l(X);
              N += ge;
            }
          }), N += l(Y), { $n: /* @__PURE__ */ new Date(w + "T00:00"), qn: w.split("-")[2] === 8 * (H.length - 2) + "", nt: N };
        }(v), b = function(L) {
          var w = i[r()]().join("");
          return L && w.indexOf(L) === 0 && L.length === w.length;
        }(v) || function(L) {
          return new RegExp("^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(L);
        }(v), (f || b) && (f && n <= f.$n && f.nt === v.split(e[0])[4] || b || f.qn) || !1) });
      });
      var e = ["-"], t = "2024-7-22".split("-"), n = new Date(t[0], t[1], t[2]), i = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), d.ln(Rn, cr), d.ln(Rt, sr), d.ln(Bn, cr), d.ln(Bt, sr), d.ln(lo, function() {
      Hi(!0);
    }), h.setKeyboardScrolling = Hi, h.shared.tt = ur, h.setAllowScrolling = Ni;
    var Xr = {};
    function qe() {
      return Xr;
    }
    var cn, he, dr, ji, sn = !O(D, U("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function pr(e) {
      if (he = A.createElement("div"), cn = U("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), sn || (cn = cn.replace("extensions/", "").replace("Extension", "")), he.innerHTML = cn, he = he.firstChild, "MutationObserver" in window && new MutationObserver(Gr).observe(A.body, { childList: !0, subtree: !1 }), (!sn || R(e) && h[e]) && (!function(n) {
        var i = qe()[n] !== void 0 && qe()[n].length, r = [], a = !1;
        return Ve(qe()[n]) ? r = qe()[n] : r.push(qe()[n]), r.forEach(function(l) {
          var v = function() {
            if (A.domain.length) {
              for (var re = A.domain.replace(/^(www\.)/, "").split("."); re.length > 2; )
                re.shift();
              return re.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), f = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], b = U(f[0]), L = U(f[1]), w = U(f[2]), M = U(f[6]), C = U(f[3]), F = U(f[4]), Y = U(f[5]), N = o()[F + Y] !== void 0;
          i = i || N;
          var j = [b, L, w, M].indexOf(v) < 0 && v.length !== 0;
          if (!i && !N && j)
            return !1;
          var E = i ? U(l) : "", X = (E = E.split("_")).length > 1 && E[1].indexOf(n, E[1].length - n.length) > -1, G = E.length > 1 && E[1].toLowerCase().indexOf(F) > -1, ge = E[0].indexOf(v, E[0].length - v.length) < 0, $ = X || G;
          a = a || !(ge && j && C != E[0]) && $ || !j;
        }), a;
      }(e) || !sn)) {
        vr();
        var t = U("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t](vr, 2e3);
      }
    }
    function vr() {
      he && (ji || (Math.random() < 0.5 ? Gi(D, he) : We(he, D), ji = !0), he.setAttribute("style", U("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, U("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function Gr(e) {
      e.forEach(function(t) {
        if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(he)) {
          clearTimeout(dr);
          var n = U("bDIwc2V0VGltZW91dDAzbA==");
          dr = window[n](Ur, 900);
        }
      });
    }
    function Ur() {
      ji = !1;
    }
    function Kr() {
      It(), ce(), o().scrollBar = o().scrollBar || o().hybrid, Zi(), function() {
        k(No(g(), "body"), { height: "100%", position: "relative" }), x(g(), fn), x(it, Lt), p({ _: W() }), P(g(), pn), Ro(), S("parallax", "init");
        for (var e = u().en, t = 0; t < e.length; t++) {
          var n = e[t], i = n.pn, r = z(n.item, "style");
          r && n.item.setAttribute("data-fp-styles", r), Jn(n), Fr(n), i.length > 0 && ci(n);
        }
        o().fixedElements && o().css3 && s(o().fixedElements).forEach(function(a) {
          D.appendChild(a);
        }), o().navigation && xo(), s('iframe[src*="youtube.com/embed/"]', g()).forEach(function(a) {
          var l, v;
          v = z(l = a, "src"), l.setAttribute("src", v + (/\?/.test(v) ? "&" : "?") + "enablejsapi=1");
        }), S("fadingEffect", "apply"), S("waterEffect", "init"), S("dropEffect", "init"), S("cards", "init"), o().scrollOverflow && m.Sn();
      }(), Ni(!0), yt(!0), _e(o().autoScrolling, "internal"), To(), no(), A.readyState === "complete" && fr(), pe("load", fr), ur(), sn || pr("l"), It(), ce();
    }
    function hr() {
      var e = o().licenseKey;
      o().licenseKey.trim() === "" ? (ee("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following website:"), ee("error", "https://alvarotrigo.com/fullPage/docs/#licensekey")) : o() && c.Kn || A.domain.indexOf("alvarotrigo.com") > -1 ? e && e.length : (ee("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), ee("error", "https://alvarotrigo.com/fullPage/pricing")), O(it, Lt) ? ee("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (o().continuousVertical && (o().loopTop || o().loopBottom) && (o().continuousVertical = !1, ee("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !o().scrollOverflow || !o().scrollBar && o().autoScrolling || ee("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !o().continuousVertical || !o().scrollBar && o().autoScrolling || (o().continuousVertical = !1, ee("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), o().anchors.forEach(function(t) {
        var n = [].slice.call(s("[name]")).filter(function(a) {
          return z(a, "name") && z(a, "name").toLowerCase() == t.toLowerCase();
        }), i = [].slice.call(s("[id]")).filter(function(a) {
          return z(a, "id") && z(a, "id").toLowerCase() == t.toLowerCase();
        });
        if (i.length || n.length) {
          ee("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var r = i.length ? "id" : "name";
          (i.length || n.length) && ee("error", '"' + t + '" is is being used by another element `' + r + "` property");
        }
      }));
    }
    function qr() {
      return { options: o(), internals: { container: g(), canScroll: c.canScroll, isScrollAllowed: V(), getDestinationPosition: Ao, isTouch: Ee, c: pr, getXmovement: wo, removeAnimation: kt, getTransforms: Mn, lazyLoad: On, addAnimation: En, performHorizontalMove: So, landscapeScroll: De, silentLandscapeScroll: lt, keepSlidesPosition: Vn, silentScroll: Ce, styleSlides: ci, styleSection: Jn, scrollHandler: an, getEventsPage: hi, getMSPointer: Xo, isReallyTouch: St, usingExtension: R, toggleControlArrows: mo, touchStartHandler: rn, touchMoveHandler: mt, nullOrSection: me, items: { SectionPanel: He, SlidePanel: _t, Item: le }, getVisible: st, getState: u, updateState: ce, updateStructuralState: It, activeSlidesNavigation: go, getPanels: function() {
        return c.on;
      }, getSections: function() {
        return c.D;
      }, setActiveSection: function(e) {
        c.L = e;
      } } };
    }
    function te(e) {
      var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], n = U(t[0]), i = U(t[1]), r = o()[n + i] !== void 0, a = "fp_" + e + "Extension";
      qe()[e] = r ? o()[n + i] : o()[e + i], h[e] = window[a] !== void 0 ? new window[a]() : null, h[e] && h[e].c(e);
    }
    function gr(e, t) {
      var n;
      if (D = s("body")[0], it = s("html")[0], Dt = s("html, body"), !O(it, Lt))
        return n = typeof e == "string" ? s(e)[0] : e, Mt.touchWrapper = n, function(i) {
          Tt = Ne({}, Mt, i), bn = Object.assign({}, Tt);
        }(t), function(i) {
          et = i;
        }(typeof e == "string" ? s(e)[0] : e), d.cn(ro), hr(), h.getFullpageData = qr, h.version = "4.0.28", h.test = Object.assign(h.test, { top: "0px", an: "translate3d(0px, 0px, 0px)", sn: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push("translate3d(0px, 0px, 0px)");
          return i;
        }(), left: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push(0);
          return i;
        }(), options: o(), setAutoScrolling: null }), h.shared = Object.assign(h.shared, { tt: null, _n: !1 }), y.fullpage_api = h, y.fullpage_extensions = !0, g() && (d.cn(lo), te("continuousHorizontal"), te("scrollHorizontally"), te("resetSliders"), te("interlockedSlides"), te("responsiveSlides"), te("fadingEffect"), te("dragAndMove"), te("offsetSections"), te("scrollOverflowReset"), te("parallax"), te("cards"), te("dropEffect"), te("waterEffect"), S("dragAndMove", "init"), S("responsiveSlides", "init"), Kr(), d.cn(q), p({ q: !0 }), S("dragAndMove", "turnOffTouch")), y.fullpage_api;
      hr();
    }
    return h.destroy = function(e) {
      K(g(), "destroy", e), _e(!1, "internal"), Ni(!0), yt(!1), Hi(!1), x(g(), pn), d.cn(ae), S("dragAndMove", "destroy"), e && (Ce(0), s("img[data-src], source[data-src], audio[data-src], iframe[data-src]", g()).forEach(function(t) {
        $t(t, "src");
      }), s("img[data-srcset]").forEach(function(t) {
        $t(t, "srcset");
      }), Re(s("#fp-nav, .fp-slidesNav, .fp-controlArrow")), k(xn(u().D), { height: "", "background-color": "", padding: "" }), k(xn(u().slides), { width: "" }), k(g(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), k(Dt, { overflow: "", height: "" }), P(it, Lt), P(D, bt + " fp-scrollable"), D.className.split(/\s+/).forEach(function(t) {
        t.indexOf("fp-viewing") === 0 && P(D, t);
      }), xn(u().on).forEach(function(t) {
        o().scrollOverflow && m.Pn(t), P(t, "fp-table active fp-completely " + Je);
        var n = z(t, "data-fp-styles");
        n && t.setAttribute("style", n), O(t, xt) && !Wi && t.removeAttribute("data-anchor");
      }), kt(g()), [yr, $e, fe].forEach(function(t) {
        s(t, g()).forEach(function(n) {
          Xt(n);
        });
      }), k(g(), { "-webkit-transition": "none", transition: "none" }), P(g(), fn), y.scrollTo(0, 0), [xt, hn, mn].forEach(function(t) {
        P(s("." + t), t);
      }));
    }, y.fp_easings = Ne(y.fp_easings, { easeInOutCubic: function(e, t, n, i) {
      return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
    } }), y.jQuery && function(e, t) {
      e && t ? e.fn.fullpage = function(n) {
        n = e.extend({}, n, { $: e }), new t(this[0], n), Object.keys(h).forEach(function(i) {
          o().$.fn.fullpage[i] = h[i];
        });
      } : ee("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(y.jQuery, gr), gr;
  });
})(mr);
var ol = mr.exports;
const rl = /* @__PURE__ */ il(ol), ll = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
], al = (B, Q) => {
  const ne = B.__vccOpts || B;
  for (const [ie, Le] of Q)
    ne[ie] = Le;
  return ne;
}, cl = {
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
      events: ll.reduce((B, Q) => ({
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
      const ne = window.fp_utils.index(document.querySelector(Q + ".active")), ie = document.querySelector(Q + ".active " + B + ".active"), Le = ie ? window.fp_utils.index(ie) : -1;
      this.destroy(), ne > -1 && window.fp_utils.addClass(document.querySelectorAll(Q)[ne], "active"), Le > -1 && window.fp_utils.addClass(ie, "active"), this.init();
    },
    destroy() {
      typeof window.fullpage_api < "u" && typeof window.fullpage_api.destroy < "u" && window.fullpage_api.destroy("all");
    },
    emitEvent(B, Q) {
      this.$emit(B.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...Q), Object.prototype.hasOwnProperty.call(this.options, B) && this.options[B].apply(this, Q);
    },
    init() {
      this.api = new rl(this.$refs.fullpage, this.options);
    }
  }
}, sl = { ref: "fullpage" };
function ul(B, Q, ne, ie, Le, un) {
  return Jr(), el("div", sl, [
    tl(B.$slots, "default")
  ], 512);
}
const fl = /* @__PURE__ */ al(cl, [["render", ul]]), pl = {
  install(B) {
    B.component("FullPage", fl);
  }
};
export {
  pl as default
};
