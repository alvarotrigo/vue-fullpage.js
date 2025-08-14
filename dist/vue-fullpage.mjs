import { openBlock as al, createElementBlock as cl, renderSlot as sl } from "vue";
/*!
* vue-fullpage 0.2.22
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
var ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fl(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var Ar = { exports: {} };
/*!
* fullPage 4.0.37
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/
(function(B, ee) {
  (function(ne, oe) {
    B.exports = oe();
  })(ul, function() {
    var ne, oe, Ee, gn, Fo = Object.freeze({ __proto__: null, get showError() {
      return te;
    }, get isVisible() {
      return so;
    }, get getVisible() {
      return st;
    }, get $() {
      return s;
    }, get deepExtend() {
      return Ie;
    }, get hasClass() {
      return M;
    }, get getWindowHeight() {
      return V;
    }, get t() {
      return ut;
    }, get css() {
      return R;
    }, get prev() {
      return Ut;
    }, get next() {
      return ft;
    }, get last() {
      return zi;
    }, get index() {
      return de;
    }, get getList() {
      return ye;
    }, get hide() {
      return Gt;
    }, get show() {
      return uo;
    }, get isArrayOrList() {
      return Fe;
    }, get addClass() {
      return x;
    }, get removeClass() {
      return D;
    }, get appendTo() {
      return We;
    }, get wrap() {
      return fo;
    }, get wrapAll() {
      return qt;
    }, get wrapInner() {
      return po;
    }, get unwrap() {
      return Kt;
    }, get closest() {
      return O;
    }, get after() {
      return dt;
    }, get before() {
      return Qt;
    }, get insertBefore() {
      return $t;
    }, get getScrollTop() {
      return be;
    }, get siblings() {
      return Xe;
    }, get preventDefault() {
      return W;
    }, get i() {
      return z;
    }, get o() {
      return He;
    }, get u() {
      return pe;
    }, get l() {
      return ve;
    }, get v() {
      return Ze;
    }, get isFunction() {
      return P;
    }, get trigger() {
      return U;
    }, get matches() {
      return _;
    }, get toggle() {
      return Jt;
    }, get createElementFromHTML() {
      return Le;
    }, get remove() {
      return Ne;
    }, get filter() {
      return Pi;
    }, get untilAll() {
      return en;
    }, get nextAll() {
      return vo;
    }, get prevAll() {
      return tn;
    }, get toArray() {
      return _i;
    }, get p() {
      return ue;
    }, get h() {
      return pt;
    }, get g() {
      return nn;
    }, get S() {
      return Vi;
    }, get M() {
      return ho;
    } });
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(e) {
      if (this == null)
        throw new TypeError('"this" is null or not defined');
      var t = Object(this), n = t.length >>> 0;
      if (typeof e != "function")
        throw new TypeError("predicate must be a function");
      for (var o = arguments[1], r = 0; r < n; ) {
        var a = t[r];
        if (e.call(o, a, r, t))
          return a;
        r++;
      }
    } }), Array.from || (Array.from = (ne = Object.prototype.toString, oe = function(e) {
      return typeof e == "function" || ne.call(e) === "[object Function]";
    }, Ee = Math.pow(2, 53) - 1, gn = function(e) {
      var t = function(n) {
        var o = Number(n);
        return isNaN(o) ? 0 : o !== 0 && isFinite(o) ? (o > 0 ? 1 : -1) * Math.floor(Math.abs(o)) : o;
      }(e);
      return Math.min(Math.max(t, 0), Ee);
    }, function(e) {
      var t = this, n = Object(e);
      if (e == null)
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      var o, r = arguments.length > 1 ? arguments[1] : void 0;
      if (r !== void 0) {
        if (!oe(r))
          throw new TypeError("Array.from: when provided, the second argument must be a function");
        arguments.length > 2 && (o = arguments[2]);
      }
      for (var a, l = gn(n.length), v = oe(t) ? Object(new t(l)) : new Array(l), d = 0; d < l; )
        a = n[d], v[d] = r ? o === void 0 ? r(a, d) : r.call(o, a, d) : a, d += 1;
      return v.length = l, v;
    }));
    var Wo, L = window, A = document, me = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document, Tr = /(Mac|iPhone|iPod|iPad)/i.test(L.navigator.userAgent), Be = "ontouchstart" in L || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Xo = !!window.MSInputMethodContext && !!document.documentMode, h = { test: {}, shared: {} }, Mr = (Wo = window.self !== window.top, function() {
      return Wo;
    });
    L.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
      t = t || window;
      for (var n = 0; n < this.length; n++)
        e.call(t, this[n], n, this);
    }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(e, t) {
      if (e == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var n = Object(e), o = 1; o < arguments.length; o++) {
        var r = arguments[o];
        if (r != null)
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
      }
      return n;
    }, writable: !0, T: !0 });
    var mn = "fullpage-wrapper", Ae = "." + mn, Sn = "fp-scrollable", bt = "fp-responsive", wn = "fp-notransition", yn = "fp-destroyed", Lt = "fp-enabled", j = "active", bn = ".active", De = "fp-completely", Zo = "fp-loaded", xt = "fp-section", $ = "." + xt, Or = ".fp-tableCell", Ln = "fp-auto-height", Te = "#fp-nav", xn = "fp-slide", En = "." + xn, Et = ".fp-slide.active", At = "fp-slides", fe = ".fp-slides", An = "fp-slidesContainer", $e = "." + An, Uo = "fp-table", ze = "fp-overflow", Je = "." + ze, Tt = "fp-is-overflow", Tn = ".fp-slidesNav", Go = ".fp-slidesNav a", qo = "fp-controlArrow", Mn = "." + qo, Ko = "fp-prev", On = ".fp-controlArrow.fp-prev", Qo = ".fp-controlArrow.fp-next", Mt = { menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, licenseKey: "", credits: { enabled: !0, label: "Made with fullPage.js", position: "right" }, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !0, scrollOverflowReset: !1, skipIntermediateItems: !1, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, adjustOnNavChange: !0, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, allowCorrectDirection: !1, scrollOverflowMacStyle: !0, controlArrows: !0, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: !0, lazyLoadThreshold: 0, observer: !0, scrollBeyondFullpage: !0 }, et = null, $o = !1, Cn = Ie({}, Mt), Ot = null;
    function g(e) {
      return et;
    }
    function i() {
      return Ot || Mt;
    }
    function Me() {
      return Cn;
    }
    function tt(e, t, n) {
      Ot[e] = t, n !== "internal" && (Cn[e] = t);
    }
    function Jo() {
      if (!i().anchors.length) {
        var e = s(i().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", et);
        e.length && e.length === s(i().sectionSelector, et).length && ($o = !0, e.forEach(function(n) {
          i().anchors.push(z(n, "data-anchor").toString());
        }));
      }
      if (!i().navigationTooltips.length) {
        var t = s(i().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", et);
        t.length && t.forEach(function(n) {
          i().navigationTooltips.push(z(n, "data-tooltip").toString());
        });
      }
    }
    var ei = { A: 0, O: 0, slides: [], R: [], L: null, j: null, D: !1, N: !1, H: !1, I: !1, P: !1, C: void 0, W: void 0, F: !1, canScroll: !0, V: "none", B: "none", Z: !1, Y: !1, G: !0, X: 0, U: V(), _: !1, J: {}, scrollY: 0, scrollX: 0, K: !1 }, c = Object.assign({}, ei);
    function p(e) {
      Object.assign(c, e);
    }
    function u() {
      return c;
    }
    function ti(e) {
      return window["fp_" + e + "Extension"] !== void 0;
    }
    function I(e) {
      var t = i();
      return t[e] !== null && Object.prototype.toString.call(t[e]) === "[object Array]" ? t[e].length && h[e] : t[e] && h[e];
    }
    function m(e, t, n) {
      if (I(e))
        return P(h[e][t]) ? h[e][t](n) : h[e][t];
    }
    function Ct() {
      return m("dragAndMove", "isAnimating");
    }
    function ni() {
      return m("dragAndMove", "isGrabbing");
    }
    function Rn(e) {
      if (i().offsetSections && h.offsetSections) {
        var t = m("offsetSections", "getWindowHeight", e);
        return t !== "" ? Math.round(t) + "px" : t;
      }
      return V() + "px";
    }
    function oi(e, t) {
      e.insertBefore(t, e.firstChild);
    }
    function q(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(r) {
        var a, l, v, d, y, b, w = "", T = 0;
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ""); T < r.length; )
          a = t.indexOf(r.charAt(T++)) << 2 | (d = t.indexOf(r.charAt(T++))) >> 4, l = (15 & d) << 4 | (y = t.indexOf(r.charAt(T++))) >> 2, v = (3 & y) << 6 | (b = t.indexOf(r.charAt(T++))), w += String.fromCharCode(a), y != 64 && (w += String.fromCharCode(l)), b != 64 && (w += String.fromCharCode(v));
        return w = function(C) {
          for (var X, Y = "", H = 0, N = 0, E = 0; H < C.length; )
            (N = C.charCodeAt(H)) < 128 ? (Y += String.fromCharCode(N), H++) : N > 191 && N < 224 ? (E = C.charCodeAt(H + 1), Y += String.fromCharCode((31 & N) << 6 | 63 & E), H += 2) : (E = C.charCodeAt(H + 1), X = C.charCodeAt(H + 2), Y += String.fromCharCode((15 & N) << 12 | (63 & E) << 6 | 63 & X), H += 3);
          return Y;
        }(w), w;
      }
      function o(r) {
        return r.slice(3).slice(0, -3);
      }
      return function(r) {
        var a = r.split("_");
        if (a.length > 1) {
          var l = a[1];
          return n(r.replace(o(a[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + n(l.slice(3).slice(0, -3));
        }
        return o(r);
      }(n(e));
    }
    L.state = c, L.fp_utils = L.fp_utils || {}, Object.assign(L.fp_utils, { prependTo: oi, toggleClass: function(e, t, n) {
      if (e.classList && n == null)
        e.classList.toggle(t);
      else {
        var o = M(e, t);
        o && n == null || !n ? D(e, t) : (!o && n == null || n) && x(e, t);
      }
    } });
    var ii = function(e) {
      this.anchor = e.anchor, this.item = e.item, this.index = e.index(), this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1, this.isFirst = !this.index, this.isActive = e.isActive;
    }, le = function(e, t) {
      this.parent = this.parent || null, this.selector = t, this.anchor = z(e, "data-anchor") || i().anchors[de(e, i().sectionSelector)], this.item = e, this.isVisible = so(e), this.isActive = M(e, j), this.q = M(e, ze) || s(Je, e)[0] != null, this.nn = t === i().sectionSelector, this.container = O(e, $e) || O(e, Ae), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function kn(e) {
      return e.map(function(t) {
        return t.item;
      });
    }
    function Rt(e, t) {
      return e.find(function(n) {
        return n.item === t;
      });
    }
    le.prototype.siblings = function() {
      return this.nn ? this.isVisible ? c.R : c.tn : this.parent ? this.parent.slides : 0;
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
      return this.nn ? c.R : c.rn;
    };
    var ri, li = function(e) {
      ii.call(this, e);
    }, Cr = function(e) {
      ii.call(this, e);
    };
    function Oe(e) {
      var t = s(Et, e);
      return t.length && (e = t[0]), e;
    }
    function ai(e) {
      return e ? e.activeSlide ? e.activeSlide : e : null;
    }
    function Pe(e) {
      var t, n, o = i();
      return o.autoScrolling && !o.scrollBar ? (t = -e, n = s(Ae)[0]) : (t = e, n = window), { options: t, element: n };
    }
    function jn(e, t) {
      !i().autoScrolling || i().scrollBar || e.self != window && M(e, At) ? e.self != window && M(e, At) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }
    function In(e) {
      var t = "transform " + i().scrollingSpeed + "ms " + i().easingcss3;
      return D(e, wn), R(e, { "-webkit-transition": t, transition: t });
    }
    function Hn(e, t) {
      var n = e.index(), o = de(t, $);
      return n == o ? "none" : n > o ? "up" : "down";
    }
    function kt(e) {
      return x(e, wn);
    }
    function Nn(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function ci(e, t) {
      t ? In(g()) : kt(g()), clearTimeout(ri), R(g(), Nn(e)), h.test.on = e, ri = setTimeout(function() {
        D(g(), wn);
      }, 10);
    }
    function Ce(e) {
      var t = Math.round(e);
      if (i().css3 && i().autoScrolling && !i().scrollBar)
        ci("translate3d(0px, -" + t + "px, 0px)", !1);
      else if (i().autoScrolling && !i().scrollBar)
        R(g(), { top: -t + "px" }), h.test.top = -t + "px";
      else {
        var n = Pe(t);
        jn(n.element, n.options);
      }
    }
    function _e(e, t) {
      t !== "internal" && (m("fadingEffect", "update", e), m("effects", "update", e)), m("cards", "update_", e), tt("scrollingSpeed", e, t);
    }
    h.setScrollingSpeed = _e;
    var nt, k = null, ot = null, jt = null;
    function It(e, t, n, o) {
      var r, a = function(y) {
        return y.self != L && M(y, At) ? y.scrollLeft : !i().autoScrolling || i().scrollBar ? be() : y.offsetTop;
      }(e), l = t - a, v = !1, d = c.F;
      p({ F: !0 }), nt && window.cancelAnimationFrame(nt), nt = function(y) {
        r || (r = y);
        var b = Math.floor(y - r);
        if (c.F) {
          var w = t;
          n && (w = L.fp_easings[i().easing](b, a, l, n)), b <= n && jn(e, w), b < n ? window.requestAnimationFrame(nt) : o === void 0 || v || (jn(e, t), o(), p({ F: !1 }), v = !0);
        } else
          v || d || (o(), p({ F: !1 }), v = !0);
      }, window.requestAnimationFrame(nt);
    }
    function Bn(e) {
      return e.hasAttribute("data-autoplay") || e.hasAttribute("autoplay");
    }
    function Ht(e) {
      var t = Oe(e);
      s("video, audio", t).forEach(function(n) {
        Bn(n) && typeof n.play == "function" && (n.readyState >= n.HAVE_FUTURE_DATA ? n.play() : n.addEventListener("canplay", function o() {
          n.play(), n.removeEventListener("canplay", o);
        }));
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        Bn(n) && si(n), n.onload = function() {
          Bn(n) && si(n);
        };
      });
    }
    function si(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function Dn(e) {
      var t = Oe(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-keepplaying") || typeof n.pause != "function" || n.pause();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        /youtube\.com\/embed\//.test(z(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function zn(e) {
      if (i().lazyLoading) {
        var t = Oe(e);
        s("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", t).forEach(function(n) {
          if (["src", "srcset"].forEach(function(r) {
            var a = z(n, "data-" + r);
            a != null && a && (nn(n, r), n.addEventListener("load", function() {
            }));
          }), _(n, "source")) {
            var o = O(n, "video, audio");
            o && (o.load(), o.onloadeddata = function() {
            });
          }
        }), x(t, Zo);
      }
    }
    function it(e) {
      var t = i().lazyLoadThreshold;
      zn(e.item), t && (ui(e, "prev", t), ui(e, "next", t));
    }
    function ui(e, t, n) {
      for (var o = e, r = 0; r < n && (o = o[t]()); r++)
        zn(o.item);
    }
    function fi() {
      var e = u().L.item, t = u().L.activeSlide, n = di(e), o = String(n);
      t && (o = o + "-" + di(t.item)), o = o.replace("/", "-").replace("#", "").replace(/\s/g, "");
      var r = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      k.className = k.className.replace(r, ""), x(k, "fp-viewing-" + o);
    }
    function di(e) {
      if (!e)
        return null;
      var t = z(e, "data-anchor"), n = de(e);
      return t == null && (t = n), t;
    }
    function rt(e) {
      return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, rt(e);
    }
    var f = { an: {}, un: function(e, t) {
      var n = this;
      return rt(this.an[e]) !== "object" && (this.an[e] = []), this.an[e].push(t), function() {
        return n.removeListener(e, t);
      };
    }, removeListener: function(e, t) {
      if (rt(this.an[e]) === "object") {
        var n = this.an[e].indexOf(t);
        n > -1 && this.an[e].splice(n, 1);
      }
    }, ln: function(e) {
      for (var t = this, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      rt(this.an[e]) === "object" && this.an[e].forEach(function(a) {
        return a.apply(t, o);
      });
    }, once: function(e, t) {
      var n = this, o = this.un(e, function() {
        o();
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
          a[l] = arguments[l];
        t.apply(n, a);
      });
    } }, Pn = "onAfterRenderNoAnchor", Nt = "onClickOrTouch", _n = "moveSlideLeft", Vn = "moveSlideRight", pi = "onInitialise", vi = "beforeInit", K = "bindEvents", ie = "onDestroy", Yn = "onDestroyAll", hi = "contentChanged", gi = "onScrollOverflowScrolled", Fn = "onScrollPageAndSlide", mi = "onKeyDown", Si = "onMenuClick", wi = "scrollPage", yi = "landscapeScroll", bi = "scrollBeyondFullpage", Wn = "onPerformMovement", Xn = "onSlideLeave", Li = "onLeave", lt = "afterSectionLoads", Bt = "afterSlideLoads";
    function Zn(e, t, n) {
      var o = "";
      i().anchors.length && !i().lockAnchors && (e ? (n != null && (o = n), t == null && (t = e), p({ W: t }), Dt(o + "/" + t)) : (e != null && p({ W: t }), Dt(n))), fi();
    }
    function Dt(e) {
      i().recordHistory ? location.hash = e : L.history.replaceState(void 0, void 0, "#" + e);
    }
    function xi(e, t, n) {
      var o = t === "Section" ? i().anchors[e] : z(n, "data-anchor");
      return encodeURI(i().navigationTooltips[e] || o || t + " " + (e + 1));
    }
    function Rr(e) {
      e.cancelable && W(e), p({ j: "horizontalNav" });
      var t = O(this, $), n = s(fe, O(this, $))[0], o = Rt(u().R, t).slides[de(O(this, "li"))];
      f.ln(yi, { slides: n, destination: o.item });
    }
    function Ei(e, t) {
      i().slidesNavigation && e != null && (D(s(bn, e), j), x(s("a", s("li", e)[t]), j));
    }
    f.un(Yn, function() {
      Dt("");
    });
    var zt, Re = {};
    function Pt(e, t, n) {
      t !== "all" ? Re[n][t] = e : Object.keys(Re[n]).forEach(function(o) {
        Re[n][o] = e;
      });
    }
    function F() {
      return Re;
    }
    function kr() {
      var e = O(this, $);
      M(this, Ko) || O(this, ".fp-prev") ? F().m.left && (p({ j: "slideArrow" }), f.ln(_n, { section: e })) : F().m.right && (p({ j: "slideArrow" }), f.ln(Vn, { section: e }));
    }
    function Ai(e) {
      !i().loopHorizontal && i().controlArrows && (Jt(s(On, e.section), e.slideIndex !== 0), Jt(s(Qo, e.section), ft(e.destiny) != null));
    }
    function jr() {
      clearTimeout(zt), p({ H: !1 });
    }
    function ke(e, t, n) {
      var o = O(e, $), r = u().R.filter(function(v) {
        return v.item == o;
      })[0], a = r.slides.filter(function(v) {
        return v.item == t;
      })[0], l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: a.index(), section: o, sectionIndex: r.index(), anchorLink: r.anchor, slidesNav: s(Tn, o)[0], slideAnchor: a.anchor, prevSlide: r.activeSlide.item, prevSlideIndex: r.activeSlide.index(), items: { section: r, origin: r.activeSlide, destination: a }, localIsResizing: c.I };
      l.xMovement = Mi(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || p({ canScroll: !1 }), m("parallax", "applyHorizontal", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), i().onSlideLeave && !l.localIsResizing && l.xMovement !== "none" && P(i().onSlideLeave) && se("onSlideLeave", l) === !1 ? p({ H: !1 }) : (I("dropEffect") && i().dropEffect || (x(t, j), D(Xe(t), j)), ce(), l.localIsResizing || (Dn(l.prevSlide), it(a)), Ai(l), r.isActive && !l.localIsResizing && Zn(l.slideIndex, l.slideAnchor, l.anchorLink), m("continuousHorizontal", "apply", l), f.ln(Xn, l), ni() ? Un(l) : Ti(e, l, !0), i().interlockedSlides && h.interlockedSlides && (I("continuousHorizontal") && n !== void 0 && n !== l.xMovement || m("interlockedSlides", "apply", l)));
    }
    function Ti(e, t, n) {
      var o = t.destinyPos;
      if (Ei(t.slidesNav, t.slideIndex), p({ scrollX: Math.round(o.left) }), i().css3) {
        var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
        h.test.cn[t.sectionIndex] = r, I("dragAndMove") && t.sn !== void 0 || In(s($e, e)), R(s($e, e), Nn(r)), I("interlockedSlides") || clearTimeout(zt), zt = setTimeout(function() {
          n && Un(t);
        }, i().scrollingSpeed);
      } else
        h.test.left[t.sectionIndex] = Math.round(o.left), It(e, Math.round(o.left), i().scrollingSpeed, function() {
          n && Un(t);
        });
    }
    function Mi(e, t) {
      return e == t ? "none" : e > t ? "left" : "right";
    }
    function Ir() {
      clearTimeout(zt);
    }
    function Un(e) {
      m("dragAndMove", "afterSlideLoads", e), m("continuousHorizontal", "afterSlideLoads", e), e.localIsResizing || (m("parallax", "afterSlideLoads"), m("scrollOverflowReset", "setPrevious", e.prevSlide), m("scrollOverflowReset", "reset"), P(i().afterSlideLoad) && se("afterSlideLoad", e), p({ canScroll: !0 }), Ht(e.destiny), f.ln(Bt, e)), p({ H: !1 }), m("interlockedSlides", "interlockedSlides", e);
    }
    function at(e, t) {
      _e(0, "internal"), t !== void 0 && p({ I: !0 }), ke(O(e, fe), e), t !== void 0 && p({ I: !1 }), _e(Me().scrollingSpeed, "internal");
    }
    Re.m = { up: !0, down: !0, left: !0, right: !0 }, Re.k = Ie({}, Re.m), f.un(Nt, function(e) {
      var t = e.target;
      (_(t, Mn) || O(t, Mn)) && kr.call(t, e);
    }), h.landscapeScroll = ke, f.un(K, function() {
      f.un(Wn, jr);
    });
    var _t = null, Vt = null;
    function ce() {
      c.L = null, c.R.map(function(e) {
        var t = M(e.item, j);
        e.isActive = t, e.q = S.q(e.item), t && (c.L = e), e.slides.length && (e.activeSlide = null, e.slides.map(function(n) {
          var o = M(n.item, j);
          n.q = S.q(e.item), n.isActive = o, o && (e.activeSlide = n);
        }));
      }), function() {
        var e = c.L, t = !!c.L && c.L.slides.length, n = c.L ? c.L.activeSlide : null;
        if (!e && c.R.length && !u().D && _t !== null) {
          var o = Ci(_t, c.R);
          o && (c.L = o, c.L.isActive = !0, x(c.L.item, j)), c.L && Ce(c.L.item.offsetTop);
        }
        if (t && !n && Vt !== null) {
          var r = Ci(Vt, c.L.slides);
          r && (c.L.activeSlide = r, c.L.activeSlide.isActive = !0, x(c.L.activeSlide.item, j)), c.L.activeSlide && at(c.L.activeSlide.item, "internal");
        }
      }(), U(g(), "onUpdateStateDone");
    }
    function Yt() {
      var e = s(i().sectionSelector + ", " + $, g()), t = st(e), n = Array.from(e).map(function(a) {
        return new je(a);
      }), o = n.filter(function(a) {
        return a.isVisible;
      }), r = o.reduce(function(a, l) {
        return a.concat(l.slides);
      }, []);
      _t = Oi(c.L), Vt = Oi(c.L ? c.L.activeSlide : null), c.A = t.length, c.O = o.reduce(function(a, l) {
        return a + l.slides.length;
      }, 0), c.R = o, c.tn = n, c.slides = r, c.rn = c.R.concat(c.slides);
    }
    function Oi(e) {
      if (!e)
        return null;
      var t = e ? e.item : null, n = e.nn ? c.tn : c.L.dn;
      if (t) {
        var o = Rt(n, t);
        return o ? o.index() : null;
      }
      return null;
    }
    function Ci(e, t) {
      var n, o = e - 1, r = e;
      do {
        if (n = t[o] || t[r])
          break;
        o -= 1, r += 1;
      } while (o >= 0 || r < t.length);
      return n;
    }
    f.un(Yn, function() {
      _t = null, Vt = null;
    });
    var je = function(e) {
      var t = this;
      [].push.call(arguments, i().sectionSelector), le.apply(this, arguments), this.vn = s(i().slideSelector, e), this.dn = Array.from(this.vn).map(function(n) {
        return new Ft(n, t);
      }), this.slides = this.dn.filter(function(n) {
        return n.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
        return n.isActive;
      })[0] || this.slides[0] : null;
    };
    je.prototype = le.prototype, je.prototype.constructor = je;
    var Ft = function(e, t) {
      this.parent = t, le.call(this, e, i().slideSelector);
    };
    function Se(e) {
      return e && !e.item ? new li(new je(e)) : e ? new li(e) : null;
    }
    function Gn(e) {
      return e ? new Cr(e) : null;
    }
    function se(e, t) {
      var n = function(o, r) {
        var a = { afterRender: function() {
          return { section: Se(u().L), pn: Gn(u().L.activeSlide) };
        }, onLeave: function() {
          return { origin: Se(r.items.origin), destination: Se(r.items.destination), direction: r.direction, trigger: u().j };
        }, afterLoad: function() {
          return a.onLeave();
        }, afterSlideLoad: function() {
          return { section: Se(r.items.section), origin: Se(r.items.origin), destination: Se(r.items.destination), direction: r.direction, trigger: u().j };
        }, onSlideLeave: function() {
          return a.afterSlideLoad();
        }, beforeLeave: function() {
          return a.onLeave();
        }, onScrollOverflow: function() {
          return { section: Se(u().L), pn: Gn(u().L.activeSlide), position: r.position, direction: r.direction };
        } };
        return a[o]();
      }(e, t);
      return U(g(), e, n), i()[e].apply(n[Object.keys(n)[0]], _i(n)) !== !1;
    }
    function qn(e, t) {
      tt("recordHistory", e, t);
    }
    function Ve(e, t) {
      e || Ce(0), tt("autoScrolling", e, t);
      var n = u().L.item;
      if (i().autoScrolling && !i().scrollBar)
        R(jt, { overflow: "hidden", height: "100%" }), D(k, Sn), qn(Me().recordHistory, "internal"), R(g(), { "-ms-touch-action": "none", "touch-action": "none" }), n != null && Ce(n.offsetTop);
      else if (R(jt, { overflow: "visible", height: "initial" }), x(k, Sn), qn(!!i().autoScrolling && Me().recordHistory, "internal"), R(g(), { "-ms-touch-action": "", "touch-action": "" }), kt(g()), n != null) {
        var o = Pe(n.offsetTop);
        o.element.scrollTo(0, o.options);
      }
      U(g(), "setAutoScrolling", e);
    }
    function Ri(e) {
      return M(u().L.item, Ln) ? Wt(u().L.item) : u().L.item.offsetTop;
    }
    function Kn() {
      for (var e = s(Et), t = 0; t < e.length; t++)
        at(e[t], "internal");
    }
    function ki() {
      var e = s(".fp-auto-height")[0] || io() && s(".fp-auto-height-responsive")[0];
      i().lazyLoading && e && s(".fp-section:not(.active)").forEach(function(t) {
        var n, o, r, a, l;
        o = (n = t.getBoundingClientRect()).top, r = n.bottom, a = o + 2 < c.U && o > 0, l = r > 2 && r < c.U, (a || l) && it(Rt(u().R, t));
      });
    }
    function Hr() {
      U(Ut(this), "click");
    }
    function ji() {
      Ne(s(Te));
      var e = A.createElement("div");
      e.setAttribute("id", "fp-nav");
      var t = A.createElement("ul");
      e.appendChild(t), We(e, k);
      var n = s(Te)[0];
      x(n, "fp-" + i().navigationPosition), i().showActiveTooltip && x(n, "fp-show-active");
      for (var o = "", r = 0; r < u().R.length; r++) {
        var a = u().R[r], l = "";
        i().anchors.length && (l = a.anchor), o += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + xi(a.index(), "Section") + "</span><span></span></a>";
        var v = i().navigationTooltips[a.index()];
        v !== void 0 && v !== "" && (o += '<div class="fp-tooltip fp-' + i().navigationPosition + '">' + v + "</div>"), o += "</li>";
      }
      s("ul", n)[0].innerHTML = o;
      var d = s("li", s(Te)[0])[u().L.index()];
      x(s("a", d), j);
    }
    function Nr(e) {
      e.preventDefault && W(e), p({ j: "verticalNav" });
      var t = de(O(this, "#fp-nav li"));
      f.ln(wi, { destination: u().R[t] });
    }
    function Qn(e, t) {
      var n;
      n = e, i().menu && i().menu.length && s(i().menu).forEach(function(o) {
        o != null && (D(s(bn, o), j), x(s('[data-menuanchor="' + n + '"]', o), j));
      }), function(o, r) {
        var a = s(Te)[0];
        i().navigation && a != null && a.style.display !== "none" && (D(s(bn, a), j), x(o ? s('a[href="#' + o + '"]', a) : s("a", s("li", a)[r]), j));
      }(e, t);
    }
    Ft.prototype = le.prototype, Ft.prototype.constructor = je, h.setRecordHistory = qn, h.setAutoScrolling = Ve, h.test.setAutoScrolling = Ve, (/* @__PURE__ */ new Date()).getTime();
    var $n, Jn, eo, to, ct, no, Br = (Jn = !0, eo = (/* @__PURE__ */ new Date()).getTime(), to = !L.fullpage_api, function(e, t) {
      var n = (/* @__PURE__ */ new Date()).getTime(), o = e === "wheel" ? i().scrollingSpeed : 100;
      return Jn = to || n - eo >= o, to = !L.fullpage_api, Jn && ($n = t(), eo = n), $n === void 0 || $n;
    });
    function Ii(e, t) {
      if (P(i().beforeLeave))
        return Br(u().j, function() {
          return se(e, t);
        });
    }
    function Ye(e, t, n) {
      var o = e.item;
      if (o != null) {
        var r, a, l = { element: o, callback: t, isMovementUp: n, dtop: Wt(o), yMovement: Hn(u().L, o), anchorLink: e.anchor, sectionIndex: e.index(), activeSlide: e.activeSlide ? e.activeSlide.item : null, leavingSection: u().L.index() + 1, localIsResizing: c.I, items: { origin: u().L, destination: e }, direction: null };
        if (!(u().L.item == o && !c.I || i().scrollBar && be() === l.dtop && !M(o, Ln))) {
          if (l.activeSlide != null && (r = z(l.activeSlide, "data-anchor"), a = de(l.activeSlide, null)), !l.localIsResizing) {
            var v = l.yMovement;
            if (n !== void 0 && (v = n ? "up" : "down"), l.direction = v, ti("dropEffect") && h.dropEffect.onLeave_(l), ti("waterEffect") && h.waterEffect.onLeave_(l), m("effects", "beforeLeave", l), P(i().beforeLeave) && Ii("beforeLeave", l) === !1 || P(i().onLeave) && !se("onLeave", l))
              return;
          }
          m("parallax", "apply", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), i().autoScrolling && i().continuousVertical && l.isMovementUp !== void 0 && (!l.isMovementUp && l.yMovement == "up" || l.isMovementUp && l.yMovement == "down") && (l = function(d) {
            p({ _: !0 });
            var y = u().L.item;
            return d.isMovementUp ? Qt(y, vo(y, $)) : dt(y, tn(y, $).reverse()[0]), Ce(Ri()), Kn(), d.hn = y, d.dtop = function(b) {
              return b.isMovementUp && M(b.element, Ln) ? Wt(b.element) - V() + b.element.offsetHeight : b.element.offsetTop;
            }(d), d.yMovement = Hn(u().L, d.element), d.leavingSection = d.items.origin.index() + 1, d.sectionIndex = d.items.destination.index(), U(g(), "onContinuousVertical", d), d;
          }(l)), m("scrollOverflowReset", "setPrevious", u().L.item), l.localIsResizing || Dn(u().L.item), I("dropEffect") && i().dropEffect || (x(o, j), D(Xe(o), j)), ce(), it(e), p({ canScroll: h.test.gn }), Zn(a, r, l.anchorLink), f.ln(Li, l), function(d) {
            p({ V: "none", scrollY: Math.round(d.dtop) }), f.ln(Wn, d), I("effects") && m("effects", "performMovement", d);
            var y = i().scrollingSpeed < 700, b = y ? 700 : i().scrollingSpeed;
            if (i().css3 && i().autoScrolling && !i().scrollBar)
              ci("translate3d(0px, -" + Math.round(d.dtop) + "px, 0px)", !0), I("waterEffect") && Kn(), i().scrollingSpeed ? (clearTimeout(ct), ct = setTimeout(function() {
                Xt(d), p({ canScroll: !y || h.test.gn });
              }, i().scrollingSpeed)) : Xt(d);
            else {
              var w = Pe(d.dtop);
              h.test.top = -d.dtop + "px", clearTimeout(ct), It(w.element, w.options, i().scrollingSpeed, function() {
                i().scrollBar ? ct = setTimeout(function() {
                  Xt(d);
                }, 30) : (Xt(d), p({ canScroll: !y || h.test.gn }));
              });
            }
            y && (clearTimeout(no), no = setTimeout(function() {
              p({ canScroll: !0 });
            }, b));
          }(l), p({ C: l.anchorLink }), Qn(l.anchorLink, function(d) {
            return d.hn != null ? d.isMovementUp ? c.A - 1 : 0 : d.sectionIndex;
          }(l));
        }
      }
    }
    function Wt(e) {
      var t = e.offsetHeight, n = e.offsetTop, o = n, r = I("dragAndMove") && m("dragAndMove", "isGrabbing") ? m("dragAndMove", "isScrollingDown") : n > c.X, a = o - V() + t, l = i().bigSectionsDestination;
      return t > V() ? (r || l) && l !== "bottom" || (o = a) : (r || c.I && ft(e) == null) && (o = a), I("offsetSections") && (o = h.offsetSections.getSectionPosition_(r, o, e)), p({ X: o }), o;
    }
    function Xt(e) {
      p({ D: !1 }), function(t) {
        t.hn != null && (t.isMovementUp ? Qt(s($)[0], t.hn) : dt(s($)[u().R.length - 1], tn(t.element, $).reverse()), Ce(Ri()), function() {
          for (var n = s(Et), o = 0; o < n.length; o++)
            at(n[o], "internal");
        }(), t.sectionIndex = t.items.destination.index(), t.leavingSection = t.items.origin.index() + 1, p({ _: !1 }));
      }(e), P(i().afterLoad) && !e.localIsResizing && se("afterLoad", e), m("continuousHorizontal", "afterLoad", e), m("parallax", "afterLoad"), m("waterEffect", "afterLoad"), m("dropEffect", "afterLoad"), m("scrollOverflowReset", "reset"), m("resetSliders", "apply", e), ce(), e.localIsResizing || Ht(e.element), x(e.element, De), D(Xe(e.element), De), ki(), p({ canScroll: !0 }), f.ln(lt, e), P(e.callback) && e.callback();
    }
    function oo(e, t) {
      tt("fitToSection", e, t);
    }
    function Hi() {
      c.canScroll && i().fitToSection && (p({ I: !0 }), Ye(c.L), p({ I: !1 }));
    }
    function Ni() {
      var e = i().responsive || i().responsiveWidth, t = i().responsiveHeight, n = e && L.innerWidth < e, o = t && L.innerHeight < t;
      e && t ? Zt(n || o) : e ? Zt(n) : t && Zt(o);
    }
    function Zt(e) {
      var t = io();
      e ? t || (Ve(!1, "internal"), oo(!1, "internal"), Gt(s(Te)), x(k, bt), P(i().afterResponsive) && i().afterResponsive.call(g(), e), m("responsiveSlides", "toSections"), U(g(), "afterResponsive", e)) : t && (Ve(Me().autoScrolling, "internal"), oo(Me().autoScrolling, "internal"), uo(s(Te)), D(k, bt), P(i().afterResponsive) && i().afterResponsive.call(g(), e), m("responsiveSlides", "toSlides"), U(g(), "afterResponsive", e));
    }
    function io() {
      return M(k, bt);
    }
    function Bi(e) {
      i().verticalCentered && (!i().scrollOverflow && S.mn(e.item) || S.wn(e) || M(e.item, Uo) || x(e.item, Uo));
    }
    h.moveTo = moveTo, h.getScrollY = function() {
      return c.scrollY;
    }, f.un(ie, function() {
      clearTimeout(ct), clearTimeout(no);
    }), h.setFitToSection = oo, h.fitToSection = Hi, h.setResponsive = Zt;
    var ro, lo = null;
    function ao(e) {
      var t = e.item, n = e.vn.length, o = e.index();
      !u().L && e.isVisible && (x(t, j), ce()), !lo && e.isVisible && (lo = u().L.item), I("offsetSections") && R(t, { height: Rn(t) }), i().paddingTop && R(t, { "padding-top": i().paddingTop }), i().paddingBottom && R(t, { "padding-bottom": i().paddingBottom }), i().sectionsColor[o] !== void 0 && R(t, { "background-color": i().sectionsColor[o] }), i().anchors[o] !== void 0 && t.setAttribute("data-anchor", e.anchor), n || Bi(e);
    }
    function Di() {
      i().scrollOverflow && !i().scrollBar && (S.bn(), S.Sn());
    }
    function Dr() {
      f.removeListener(Pn, Di), ve("keyup", S.yn);
    }
    h.getActiveSection = function() {
      return u().L;
    }, f.un(K, function() {
      f.un(Pn, Di), f.un(Li, S.onLeave), f.un(Xn, S.onLeave), f.un(Bt, S.afterLoad), f.un(lt, S.afterLoad), f.un(ie, Dr), He("keyup", S.yn);
    });
    var co, we, S = { Mn: null, Tn: !0, An: !0, xn: null, On: null, kn: function(e) {
      var t = u().L;
      if (!c.canScroll || Mr() && i().scrollOverflow && S.wn(t) && S.isScrolled(u().B, t.item))
        return W(e), !1;
    }, En: function(e) {
      if (!ho() && i().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !S.An)
        return W(e), !1;
    }, yn: function() {
      S.Tn = c.canScroll;
    }, onLeave: function() {
      clearTimeout(ro), S.An = !1;
    }, afterLoad: function() {
      S.An = !1, clearTimeout(ro), ro = setTimeout(function() {
        S.Tn = c.canScroll;
      }, 200);
    }, Rn: function() {
      A.activeElement === this.Mn && (this.Mn.blur(), S.An = !1);
    }, Sn: function() {
      if (i().scrollOverflow && S.Tn) {
        S.Rn();
        var e = S.Ln(u().L.item);
        !e || me || Be || (this.Mn = e, requestAnimationFrame(function() {
          e.focus({ jn: !0 }), S.An = !0;
        })), S.Tn = !1;
      }
    }, bn: function() {
      i().scrollOverflowMacStyle && !Tr && x(k, "fp-scroll-mac"), u().rn.forEach(function(e) {
        if (!(e.slides && e.slides.length || M(e.item, "fp-auto-height-responsive") && io())) {
          var t, n = Oe(e.item), o = S.mn(e.item), r = (t = e).nn ? t : t.parent;
          if (Xo) {
            var a = o ? "addClass" : "removeClass";
            Fo[a](r.item, Tt), Fo[a](e.item, Tt);
          } else
            x(r.item, Tt), x(e.item, Tt);
          e.q || (S.zn(n), S.Dn(n)), e.q = !0;
        }
      });
    }, Dn: function(e) {
      S.Ln(e).addEventListener("scroll", S.Nn), e.addEventListener("wheel", S.kn, { passive: !1 }), e.addEventListener("keydown", S.En, { passive: !1 });
    }, zn: function(e) {
      var t = document.createElement("div");
      t.className = ze, po(e, t), t.setAttribute("tabindex", "-1");
    }, Hn: function(e) {
      var t = s(Je, e)[0];
      t && (Kt(t), e.removeAttribute("tabindex"));
    }, Ln: function(e) {
      var t = Oe(e);
      return s(Je, t)[0] || t;
    }, q: function(e) {
      return M(e, ze) || s(Je, e)[0] != null;
    }, wn: function(e) {
      return e.nn && e.activeSlide ? e.activeSlide.q : e.q;
    }, mn: function(e) {
      return S.Ln(e).scrollHeight > L.innerHeight;
    }, isScrolled: function(e, t) {
      if (!c.canScroll)
        return !1;
      if (i().scrollBar)
        return !0;
      var n = S.Ln(t);
      if (!i().scrollOverflow || !M(n, ze) || M(t, "fp-noscroll") || M(Oe(t), "fp-noscroll"))
        return !0;
      var o = Xo ? 1 : 0, r = n.scrollTop, a = e === "up" && r <= 0, l = e === "down" && n.scrollHeight <= Math.ceil(n.offsetHeight + r) + o, v = a || l;
      return v || e === "none" || (this.xn = (/* @__PURE__ */ new Date()).getTime()), v;
    }, In: function() {
      this.On = (/* @__PURE__ */ new Date()).getTime();
      var e = this.On - S.xn, t = (me || Be) && c.Z, n = c.Y && e > 600;
      return t && e > 400 || n;
    }, Nn: (co = 0, function(e) {
      var t = e.target.scrollTop, n = c.V !== "none" ? c.V : co < t ? "down" : "up";
      co = t, P(i().onScrollOverflow) && se("onScrollOverflow", { position: t, direction: n }), M(e.target, ze) && c.canScroll && S.isScrolled(n, e.target) && S.In() && S.mn(u().L.item) && f.ln(gi, { direction: n });
    }) };
    function te(e, t) {
      L.console && L.console[e] && L.console[e]("fullPage: " + t);
    }
    function so(e) {
      return L.getComputedStyle(e).display !== "none";
    }
    function st(e) {
      return Array.from(e).filter(function(t) {
        return so(t);
      });
    }
    function s(e, t) {
      return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(e) : null;
    }
    function Ie(e) {
      e = e || {};
      for (var t = 1, n = arguments.length; t < n; ++t) {
        var o = arguments[t];
        if (o)
          for (var r in o)
            o.hasOwnProperty(r) && r != "__proto__" && r != "constructor" && (Object.prototype.toString.call(o[r]) !== "[object Object]" ? e[r] = o[r] : e[r] = Ie(e[r], o[r]));
      }
      return e;
    }
    function M(e, t) {
      return e != null && e.classList.contains(t);
    }
    function V() {
      return "innerHeight" in L ? L.innerHeight : A.documentElement.offsetHeight;
    }
    function ut() {
      return L.innerWidth;
    }
    function R(e, t) {
      var n;
      for (n in e = ye(e), t)
        if (t.hasOwnProperty(n) && n !== null)
          for (var o = 0; o < e.length; o++)
            e[o].style[n] = t[n];
      return e;
    }
    function Ut(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.previousElementSibling;
      var n = Ut(e);
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
    function zi(e) {
      return e[e.length - 1];
    }
    function de(e, t) {
      e = Fe(e) ? e[0] : e;
      for (var n = t != null ? s(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
        if (n[r] == e)
          return o;
        n[r].nodeType == 1 && o++;
      }
      return -1;
    }
    function ye(e) {
      return Fe(e) ? e : [e];
    }
    function Gt(e) {
      e = ye(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "none";
      return e;
    }
    function uo(e) {
      e = ye(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "block";
      return e;
    }
    function Fe(e) {
      return Object.prototype.toString.call(e) === "[object Array]" || Object.prototype.toString.call(e) === "[object NodeList]";
    }
    function x(e, t) {
      e = ye(e);
      for (var n = 0; n < e.length; n++)
        e[n].classList.add(t);
      return e;
    }
    function D(e, t) {
      e = ye(e);
      for (var n = t.split(" "), o = 0; o < n.length; o++) {
        t = n[o];
        for (var r = 0; r < e.length; r++)
          e[r].classList.remove(t);
      }
      return e;
    }
    function We(e, t) {
      t.appendChild(e);
    }
    function fo(e, t, n) {
      var o;
      t = t || A.createElement("div");
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (n && !r || !n) && (o = t.cloneNode(!0), a.parentNode.insertBefore(o, a)), o.appendChild(a);
      }
      return e;
    }
    function qt(e, t) {
      fo(e, t, !0);
    }
    function po(e, t) {
      for (typeof t == "string" && (t = Le(t)), e.appendChild(t); e.firstChild !== t; )
        t.appendChild(e.firstChild);
    }
    function Kt(e) {
      for (var t = A.createDocumentFragment(); e.firstChild; )
        t.appendChild(e.firstChild);
      e.parentNode.replaceChild(t, e);
    }
    function O(e, t) {
      return e && e.nodeType === 1 ? _(e, t) ? e : O(e.parentNode, t) : null;
    }
    function dt(e, t) {
      $t(e, e.nextSibling, t);
    }
    function Qt(e, t) {
      $t(e, e, t);
    }
    function $t(e, t, n) {
      Fe(n) || (typeof n == "string" && (n = Le(n)), n = [n]);
      for (var o = 0; o < n.length; o++)
        e.parentNode.insertBefore(n[o], t);
    }
    function be() {
      var e = A.documentElement;
      return (L.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function Xe(e) {
      return Array.prototype.filter.call(e.parentNode.children, function(t) {
        return t !== e;
      });
    }
    function W(e) {
      e.preventDefault();
    }
    function z(e, t) {
      return e.getAttribute(t);
    }
    function He(e, t, n) {
      A.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function pe(e, t, n) {
      L.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function ve(e, t, n) {
      A.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function Ze(e, t, n) {
      L.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function P(e) {
      if (typeof e == "function")
        return !0;
      var t = Object.prototype.toString.call(e);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function U(e, t, n) {
      var o;
      n = n === void 0 ? {} : n, typeof L.CustomEvent == "function" ? o = new CustomEvent(t, { detail: n }) : (o = A.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
    }
    function _(e, t) {
      return (e.matches || e.Pn || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function Jt(e, t) {
      if (typeof t == "boolean")
        for (var n = 0; n < e.length; n++)
          e[n].style.display = t ? "block" : "none";
      return e;
    }
    function Le(e) {
      var t = A.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild;
    }
    function Ne(e) {
      e = ye(e);
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n && n.parentElement && n.parentNode.removeChild(n);
      }
    }
    function Pi(e, t) {
      Array.prototype.filter.call(e, t);
    }
    function en(e, t, n) {
      for (var o = e[n], r = []; o; )
        (_(o, t) || t == null) && r.push(o), o = o[n];
      return r;
    }
    function vo(e, t) {
      return en(e, t, "nextElementSibling");
    }
    function tn(e, t) {
      return en(e, t, "previousElementSibling");
    }
    function _i(e) {
      return Object.keys(e).map(function(t) {
        return e[t];
      });
    }
    function ue(e) {
      return e[e.length - 1];
    }
    function pt(e, t) {
      for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++)
        n += o[r];
      return Math.ceil(n / t);
    }
    function nn(e, t) {
      e.setAttribute(t, z(e, "data-" + t)), e.removeAttribute("data-" + t);
    }
    function Vi(e, t) {
      var n = [e];
      do
        e = e.parentNode, n.push(e);
      while (!_(e, t));
      return n;
    }
    function ho() {
      var e = A.activeElement;
      return _(e, "textarea") || _(e, "input") || _(e, "select") || z(e, "contentEditable") == "true" || z(e, "contentEditable") == "";
    }
    function Yi(e) {
      f.ln(Nt, { e, target: e.target });
    }
    function zr() {
      ["click", "touchstart"].forEach(function(e) {
        ve(e, Yi, { passive: !1 });
      });
    }
    function Pr() {
      p({ G: !0 });
    }
    function Fi() {
      x(s(i().sectionSelector, g()), xt), x(s(i().slideSelector, g()), xn);
    }
    function go(e) {
      var t = e.slides.length, n = e.vn, o = e.slides, r = 100 * t, a = 100 / t;
      if (!s(fe, e.item)[0]) {
        var l = A.createElement("div");
        l.className = At, qt(n, l);
        var v = A.createElement("div");
        v.className = An, qt(n, v);
      }
      R(s($e, e.item), { width: r + "%" }), t > 1 && (i().controlArrows && function(y) {
        var b = y.item, w = [Le(i().controlArrowsHTML[0]), Le(i().controlArrowsHTML[1])];
        dt(s(fe, b)[0], w), x(w, qo), x(w[0], Ko), x(w[1], "fp-next"), i().controlArrowColor !== "#fff" && (R(s(Qo, b), { "border-color": "transparent transparent transparent " + i().controlArrowColor }), R(s(On, b), { "border-color": "transparent " + i().controlArrowColor + " transparent transparent" })), i().loopHorizontal || Gt(s(On, b));
      }(e), i().slidesNavigation && function(y) {
        var b = y.item, w = y.slides.length;
        We(Le('<div class="fp-slidesNav"><ul></ul></div>'), b);
        var T = s(Tn, b)[0];
        x(T, "fp-" + i().slidesNavPosition);
        for (var C = 0; C < w; C++)
          We(Le('<li><a href="#"><span class="fp-sr-only">' + xi(C, "Slide", s(En, b)[C]) + "</span><span></span></a></li>"), s("ul", T)[0]);
        R(T, { "margin-left": "-" + T.innerWidth / 2 + "px" });
        var X = y.activeSlide ? y.activeSlide.index() : 0;
        x(s("a", s("li", T)[X]), j);
      }(e)), o.forEach(function(y) {
        R(y.item, { width: a + "%" }), i().verticalCentered && Bi(y);
      });
      var d = I("responsiveSlides") ? null : e.activeSlide || null;
      d != null && c.L && (c.L.index() !== 0 || c.L.index() === 0 && d.index() !== 0) ? (at(d.item, "internal"), x(d.item, "fp-initial")) : x(n[0], j);
    }
    window.fp_utils = Object.assign(L.fp_utils || {}, { $: s, deepExtend: Ie, hasClass: M, getWindowHeight: V, css: R, prev: Ut, next: ft, last: zi, index: de, getList: ye, hide: Gt, show: uo, isArrayOrList: Fe, addClass: x, removeClass: D, appendTo: We, wrap: fo, wrapAll: qt, wrapInner: po, unwrap: Kt, closest: O, after: dt, before: Qt, insertBefore: $t, getScrollTop: be, siblings: Xe, preventDefault: W, isFunction: P, trigger: U, matches: _, toggle: Jt, createElementFromHTML: Le, remove: Ne, filter: Pi, untilAll: en, nextAll: vo, prevAll: tn, showError: te, scrollOverflowHandler: S }), f.un(K, function() {
      ["click", "touchstart"].forEach(function(e) {
        He(e, Yi, { passive: !1 });
      }), pe("focus", Pr), f.un(ie, zr);
    });
    var Wi = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
    function Xi() {
      return m("responsiveSlides", "isResponsiveSlidesChanging") || st(s(i().slideSelector, g())).length !== u().O;
    }
    function mo(e) {
      var t = Xi();
      (Xi() || m("responsiveSlides", "isResponsiveSlidesChanging") || st(s(i().sectionSelector, g())).length !== u().A) && !c._ && (i().observer && we && we.disconnect(), Yt(), ce(), i().anchors = [], Ne(s(Te)), m("responsiveSlides", "isResponsiveSlidesChanging") || Fi(), Jo(), i().navigation && ji(), t && (Ne(s(Tn)), Ne(s(Mn))), u().R.forEach(function(n) {
        n.slides.length ? t && go(n) : ao(n);
      })), i().observer && we && s(Ae)[0] && we.observe(s(Ae)[0], Wi);
    }
    f.un(K, function() {
      var e, t, n;
      i().observer && "MutationObserver" in window && s(Ae)[0] && (e = s(Ae)[0], t = Wi, (n = new MutationObserver(mo)).observe(e, t), we = n), f.un(hi, mo);
    }), f.un(ie, function() {
      we && (we.disconnect(), we = null);
    }), h.render = mo;
    var _r = function() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", { get: function() {
          e = !0;
        } });
        pe("testPassive", null, t), Ze("testPassive", null, t);
      } catch {
      }
      return function() {
        return e;
      };
    }();
    function Zi() {
      return !!_r() && { passive: !1 };
    }
    var Ui, Gi, So, xe, on = (So = (/* @__PURE__ */ new Date()).getTime(), xe = [], { Cn: function(e) {
      var t = (e = e || L.event).wheelDelta || -e.deltaY || -e.detail, n = Math.max(-1, Math.min(1, t)), o = e.wheelDeltaX !== void 0 || e.deltaX !== void 0;
      Ui = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !o;
      var r = (/* @__PURE__ */ new Date()).getTime();
      Gi = n < 0 ? "down" : "up", xe.length > 149 && xe.shift(), xe.push(Math.abs(t));
      var a = r - So;
      So = r, a > 200 && (xe = []);
    }, Wn: function() {
      var e = pt(xe, 10) >= pt(xe, 70);
      return !!xe.length && e && Ui;
    }, Fn: function() {
      return Gi;
    } });
    function Vr() {
      var e = i().css3 ? be() + V() : ue(u().R).item.offsetTop + ue(u().R).item.offsetHeight, t = Pe(e);
      h.test.top = -e + "px", p({ canScroll: !1 }), It(t.element, t.options, i().scrollingSpeed, function() {
        setTimeout(function() {
          p({ D: !0 }), p({ canScroll: !0 });
        }, 30);
      });
    }
    function Yr() {
      g().getBoundingClientRect().bottom >= 0 && qi();
    }
    function qi() {
      var e = Pe(ue(u().R).item.offsetTop);
      p({ canScroll: !1 }), It(e.element, e.options, i().scrollingSpeed, function() {
        p({ canScroll: !0 }), p({ D: !1 }), p({ Vn: !1 });
      });
    }
    var wo, yo, bo, Ki = (wo = !1, yo = {}, bo = {}, function(e, t, n) {
      switch (e) {
        case "set":
          yo[t] = (/* @__PURE__ */ new Date()).getTime(), bo[t] = n;
          break;
        case "isNewKeyframe":
          var o = (/* @__PURE__ */ new Date()).getTime();
          wo = o - yo[t] > bo[t];
      }
      return wo;
    });
    function vt() {
      var e = u().L.next();
      e || !i().loopBottom && !i().continuousVertical || (e = u().R[0]), e != null ? Ye(e, null, !1) : g().scrollHeight < k.scrollHeight && i().scrollBar && i().scrollBeyondFullpage && f.ln(bi);
    }
    function Ue() {
      var e = u().L.prev();
      e || !i().loopTop && !i().continuousVertical || (e = ue(u().R)), e != null && Ye(e, null, !0);
    }
    h.moveSectionDown = vt, h.moveSectionUp = Ue;
    var rn = 0;
    function Qi(e) {
      i().autoScrolling && (c.canScroll && (e.pageY < rn && F().m.up ? Ue() : e.pageY > rn && F().m.down && vt()), rn = e.pageY);
    }
    function $i(e) {
      if (F().m[e]) {
        var t = e === "down" ? vt : Ue;
        I("scrollHorizontally") && (t = m("scrollHorizontally", "getScrollSection", { type: e, scrollSection: t })), i().scrollOverflow && S.wn(u().L) ? S.isScrolled(e, u().L.item) && S.In() && t() : t();
      }
    }
    var ln, Lo, Ge, an = 0, ht = 0, cn = 0, gt = 0, sn = er(), re = { Bn: "ontouchmove" in window ? "touchmove" : sn ? sn.move : null, Zn: "ontouchstart" in window ? "touchstart" : sn ? sn.down : null };
    function mt(e) {
      var t = O(e.target, $) || u().L.item, n = S.wn(u().L);
      if (St(e)) {
        p({ Z: !0, Y: !1 }), i().autoScrolling && (n && !c.canScroll || i().scrollBar) && W(e);
        var o = xo(e);
        cn = o.y, gt = o.x;
        var r = Math.abs(an - cn) > L.innerHeight / 100 * i().touchSensitivity, a = Math.abs(ht - gt) > ut() / 100 * i().touchSensitivity, l = s(fe, t).length && Math.abs(ht - gt) > Math.abs(an - cn), v = an > cn ? "down" : "up";
        p({ V: l ? ht > gt ? "right" : "left" : v }), l ? !c.H && a && (ht > gt ? F().m.right && f.ln(Vn, { section: t }) : F().m.left && f.ln(_n, { section: t })) : i().autoScrolling && c.canScroll && r && $i(v);
      }
    }
    function St(e) {
      return e.pointerType === void 0 || e.pointerType != "mouse";
    }
    function un(e) {
      if (i().fitToSection && p({ F: !1 }), St(e)) {
        var t = xo(e);
        an = t.y, ht = t.x;
      }
      pe("touchend", Ji);
    }
    function Ji() {
      Ze("touchend", Ji), p({ Z: !1 });
    }
    function xo(e) {
      var t = {};
      return t.y = e.pageY !== void 0 && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = e.pageX !== void 0 && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Be && St(e) && i().scrollBar && e.touches !== void 0 && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }
    function er() {
      var e;
      return L.PointerEvent && (e = { down: "pointerdown", move: "pointermove" }), e;
    }
    function Eo(e) {
      i().autoScrolling && St(e) && F().m.up && (c.canScroll || W(e));
    }
    function tr(e, t) {
      var n = t ?? u().L.item, o = Rt(c.R, n), r = s(fe, n)[0];
      if (!(r == null || Ct() || c.H || o.slides.length < 2)) {
        var a = o.activeSlide, l = e === "left" ? a.prev() : a.next();
        if (!l) {
          if (!i().loopHorizontal)
            return;
          l = e === "left" ? ue(o.slides) : o.slides[0];
        }
        p({ H: !h.test.gn }), ke(r, l.item, e);
      }
    }
    function Ao(e) {
      tr("left", e);
    }
    function To(e) {
      tr("right", e);
    }
    function Mo(e) {
      var t = u().R.filter(function(o) {
        return o.anchor === e;
      })[0];
      if (!t) {
        var n = e !== void 0 ? e - 1 : 0;
        t = u().R[n];
      }
      return t;
    }
    function nr(e) {
      e != null && ke(O(e, fe), e);
    }
    function Oo(e, t) {
      var n = Mo(e);
      if (n != null) {
        var o = function(r, a) {
          var l = a.slides.filter(function(v) {
            return v.anchor === r;
          })[0];
          return l == null && (r = r !== void 0 ? r : 0, l = a.slides[r]), l ? l.item : null;
        }(t, n);
        n.anchor && n.anchor === c.C || M(n.item, j) ? nr(o) : Ye(n, function() {
          nr(o);
        });
      }
    }
    function wt(e, t) {
      var n = Mo(e);
      t !== void 0 ? Oo(e, t) : n != null && Ye(n);
    }
    function Fr() {
      clearTimeout(Lo), ve("keydown", or), ve("keyup", ir);
    }
    function or(e) {
      clearTimeout(Lo);
      var t = e.keyCode, n = [37, 39].indexOf(t) > -1, o = i().autoScrolling || i().fitToSection || n;
      t === 9 ? function(r) {
        var a = r.shiftKey, l = A.activeElement, v = Co(Oe(u().L.item));
        function d(Y) {
          return W(Y), v[0] ? v[0].focus() : null;
        }
        if (c.canScroll) {
          if (!function(Y) {
            var H = Co(A), N = H.indexOf(A.activeElement), E = H[Y.shiftKey ? N - 1 : N + 1], Z = O(E, En), G = O(E, $);
            return !Z && !G;
          }(r)) {
            l ? O(l, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (l = d(r)) : d(r);
            var y = l == v[0], b = l == v[v.length - 1], w = a && y;
            if (w || !a && b) {
              W(r);
              var T = function(Y) {
                var H, N = Y ? "prevPanel" : "nextPanel", E = [], Z = ai((c.L && c.L.activeSlide ? c.L.activeSlide : c.L)[N]());
                do
                  (E = Co(Z.item)).length && (H = { Yn: Z, Gn: E[Y ? E.length - 1 : 0] }), Z = ai(Z[N]());
                while (Z && E.length === 0);
                return H;
              }(w), C = T ? T.Yn : null;
              if (C) {
                var X = C.nn ? C : C.parent;
                f.ln(Fn, { Xn: X.index() + 1, slideAnchor: C.nn ? 0 : C.index() }), Ge = T.Gn, W(r);
              }
            }
          }
        } else
          W(r);
      }(e) : !ho() && i().keyboardScrolling && o && (ln = e.ctrlKey, Lo = setTimeout(function() {
        (function(r) {
          var a = r.shiftKey, l = A.activeElement, v = _(l, "video") || _(l, "audio"), d = S.isScrolled("up", u().L.item), y = S.isScrolled("down", u().L.item), b = [37, 39].indexOf(r.keyCode) > -1;
          if (function(w) {
            (function(T) {
              return [40, 38, 32, 33, 34].indexOf(T.keyCode) > -1 && !c.D;
            })(w) && !O(w.target, Je) && w.preventDefault();
          }(r), c.canScroll || b)
            switch (p({ j: "keydown" }), U(g(), "keydown", r), r.keyCode) {
              case 38:
              case 33:
                F().k.up && d ? c.D ? f.ln(mi, { e: r }) : Ue() : S.Sn();
                break;
              case 32:
                if (a && F().k.up && !v && d) {
                  Ue();
                  break;
                }
              case 40:
              case 34:
                if (F().k.down && y) {
                  if (c.D)
                    return;
                  r.keyCode === 32 && v || vt();
                } else
                  S.Sn();
                break;
              case 36:
                F().k.up && wt(1);
                break;
              case 35:
                F().k.down && wt(u().R.length);
                break;
              case 37:
                F().k.left && Ao();
                break;
              case 39:
                F().k.right && To();
            }
        })(e);
      }, 0));
    }
    function ir(e) {
      c.G && (ln = e.ctrlKey);
    }
    function Wr() {
      p({ G: !1 }), ln = !1;
    }
    function Xr(e) {
      rr();
    }
    function Zr(e) {
      O(Ge, En) && !O(Ge, Et) || rr();
    }
    function rr() {
      Ge && (Ge.focus(), Ge = null);
    }
    function Co(e) {
      return [].slice.call(s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]', e)).filter(function(t) {
        return z(t, "tabindex") !== "-1" && t.offsetParent !== null;
      });
    }
    h.moveSlideLeft = Ao, h.moveSlideRight = To, h.moveTo = wt, f.un(K, function() {
      pe("blur", Wr), He("keydown", or), He("keyup", ir), f.un(ie, Fr), f.un(Bt, Xr), f.un(lt, Zr);
    });
    var lr = (/* @__PURE__ */ new Date()).getTime(), qe = [];
    function Ro(e) {
      e ? (function() {
        var t, n = "";
        L.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
        var o = "onwheel" in A.createElement("div") ? "wheel" : A.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", r = Zi();
        o == "DOMMouseScroll" ? A[t](n + "MozMousePixelScroll", Ke, r) : A[t](n + o, Ke, r);
      }(), g().addEventListener("mousedown", ar), g().addEventListener("mouseup", cr)) : (A.addEventListener ? (ve("mousewheel", Ke, !1), ve("wheel", Ke, !1), ve("MozMousePixelScroll", Ke, !1)) : A.detachEvent("onmousewheel", Ke), g().removeEventListener("mousedown", ar), g().removeEventListener("mouseup", cr));
    }
    function Ke(e) {
      var t = (/* @__PURE__ */ new Date()).getTime(), n = M(s(".fp-completely")[0], "fp-normal-scroll"), o = function(b, w) {
        (/* @__PURE__ */ new Date()).getTime();
        var T = u().D && b.getBoundingClientRect().bottom >= 0 && on.Fn() === "up", C = u().Vn;
        if (C)
          return W(w), !1;
        if (u().D) {
          if (T) {
            var X;
            if (!(C || Ki("isNewKeyframe", "beyondFullpage") && on.Wn()))
              return (X = Pe(ue(u().R).item.offsetTop + ue(u().R).item.offsetHeight)).element.scrollTo(0, X.options), p({ Vn: !1 }), W(w), !1;
            if (on.Wn())
              return T = !1, p({ Vn: !0 }), p({ j: "wheel" }), qi(), W(w), !1;
          } else
            Ki("set", "beyondFullpage", 1e3);
          if (!C && !T)
            return !0;
        }
      }(g(), e);
      if (c.Y || p({ Z: !1, Y: !0, V: "none" }), !F().m.down && !F().m.up)
        return !1;
      if (o)
        return !0;
      if (o === !1)
        return W(e), !1;
      if (i().autoScrolling && !ln && !n) {
        var r = (e = e || L.event).wheelDelta || -e.deltaY || -e.detail, a = Math.max(-1, Math.min(1, r)), l = e.wheelDeltaX !== void 0 || e.deltaX !== void 0, v = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !l, d = a < 0 ? "down" : a > 0 ? "up" : "none";
        qe.length > 149 && qe.shift(), qe.push(Math.abs(r)), !i().scrollBar && i().scrollOverflow || W(e);
        var y = t - lr;
        return lr = t, y > 200 && (qe = []), p({ B: d }), c.canScroll && !Ct() && pt(qe, 10) >= pt(qe, 70) && v && (p({ j: "wheel" }), $i(a < 0 ? "down" : "up")), !1;
      }
      i().fitToSection && p({ F: !1 });
    }
    function ar(e) {
      var t;
      e.which == 2 && (t = e.pageY, rn = t, g().addEventListener("mousemove", Qi));
    }
    function cr(e) {
      e.which == 2 && g().removeEventListener("mousemove", Qi);
    }
    function yt(e) {
      e ? (Ro(!0), function() {
        if (re.Bn && (me || Be) && (!I("dragAndMove") || i().dragAndMove === "mouseonly")) {
          i().autoScrolling && (k.removeEventListener(re.Bn, Eo, { passive: !1 }), k.addEventListener(re.Bn, Eo, { passive: !1 }));
          var t = i().touchWrapper;
          t.removeEventListener(re.Zn, un), t.removeEventListener(re.Bn, mt, { passive: !1 }), t.addEventListener(re.Zn, un), t.addEventListener(re.Bn, mt, { passive: !1 });
        }
      }()) : (Ro(!1), function() {
        if (re.Bn && (me || Be)) {
          i().autoScrolling && (k.removeEventListener(re.Bn, mt, { passive: !1 }), k.removeEventListener(re.Bn, Eo, { passive: !1 }));
          var t = i().touchWrapper;
          t.removeEventListener(re.Zn, un), t.removeEventListener(re.Bn, mt, { passive: !1 });
        }
      }());
    }
    h.setMouseWheelScrolling = Ro;
    var ko = !0;
    function Ur() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
        ve(e, ur, !0);
      });
    }
    function sr(e, t) {
      document["fp_" + e] = t, He(e, ur, !0);
    }
    function ur(e) {
      var t = e.type, n = !1, o = t === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
      o != document && o ? (t === "touchend" && (ko = !1, setTimeout(function() {
        ko = !0;
      }, 800)), (t !== "mouseenter" || ko) && (i().normalScrollElements.split(",").forEach(function(r) {
        if (!n) {
          var a = _(o, r), l = O(o, r);
          (a || l) && (h.shared.isNormalScrollElement || yt(!1), h.shared.isNormalScrollElement = !0, n = !0);
        }
      }), !n && h.shared.isNormalScrollElement && (yt(!0), h.shared.isNormalScrollElement = !1))) : yt(!0);
    }
    function fn(e, t) {
      _e(0, "internal"), wt(e, t), _e(Me().scrollingSpeed, "internal");
    }
    f.un(K, function() {
      i().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
        sr(e, !1);
      }), ["mouseleave", "touchend"].forEach(function(e) {
        sr(e, !0);
      })), f.un(ie, Ur);
    }), h.silentMoveTo = fn;
    var jo, fr, Io = V(), dr = ut(), Ho = !1;
    function Gr() {
      clearTimeout(jo), clearTimeout(fr), Ze("resize", No);
    }
    function No() {
      Ho || (i().autoScrolling && !i().scrollBar || !i().fitToSection) && pr(V()), c.K && function() {
        if (me)
          for (var e = 0; e < 4; e++)
            fr = setTimeout(function() {
              window.requestAnimationFrame(function() {
                i().autoScrolling && !i().scrollBar && (p({ I: !0 }), fn(c.L.index() + 1), p({ I: !1 }));
              });
            }, 200 * e);
      }(), Ho = !0, clearTimeout(jo), jo = setTimeout(function() {
        (function() {
          var e, t, n;
          if (p({ I: !0 }), (!me || i().adjustOnNavChange) && (pr(""), U(g(), "onResize"), c.D || i().autoScrolling || (e = 0.01 * L.innerHeight, A.documentElement.style.setProperty("--vh", "".concat(e, "px")))), f.ln(hi), ce(), Ni(), me) {
            var o = A.activeElement;
            if (!_(o, "textarea") && !_(o, "input") && !_(o, "select")) {
              var r = V();
              Math.abs(r - Io) > 20 * Math.max(Io, r) / 100 && (Bo(!0), Io = r);
            }
          } else
            t = V(), n = ut(), c.U === t && dr === n || (p({ U: t }), dr = n, Bo(!0));
          U(g(), "onResizeEnds"), p({ I: !1 });
        })(), Ho = !1;
      }, 400);
    }
    function Bo(e) {
      if (!M(g(), yn)) {
        p({ I: !0, U: V(), Un: ut() });
        for (var t = u().R, n = 0; n < t.length; ++n) {
          var o = t[n], r = s(fe, o.item)[0], a = o.slides;
          I("offsetSections") && R(o.item, { height: Rn(o.item) }), a.length > 1 && ke(r, o.activeSlide.item);
        }
        i().scrollOverflow && S.bn();
        var l = u().L.index();
        c.D || !l || I("fadingEffect") || I("dropEffect") || I("waterEffect") || fn(l + 1), p({ I: !1 }), P(i().afterResize) && e && i().afterResize.call(g(), L.innerWidth, L.innerHeight), P(i().afterReBuild) && !e && i().afterReBuild.call(g()), U(g(), "afterRebuild");
      }
    }
    function pr(e) {
      u().R.forEach(function(t) {
        var n = e !== "" || I("offsetSections") ? Rn(t.item) : "";
        R(t.item, { height: n });
      });
    }
    function Do() {
      var e, t, n = L.location.hash;
      if (n.length) {
        var o = n.replace("#", "").split("/"), r = n.indexOf("#/") > -1;
        e = r ? "/" + o[1] : decodeURIComponent(o[0]);
        var a = r ? o[2] : o[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, pn: t };
    }
    function qr() {
      Ze("hashchange", vr);
    }
    function vr() {
      if (!c.P && !i().lockAnchors) {
        var e = Do(), t = e.section, n = e.pn, o = c.C === void 0, r = c.C === void 0 && n === void 0 && !c.H;
        t && t.length && (t && t !== c.C && !o || r && !Ct() || !c.H && c.W != n && !Ct()) && f.ln(Fn, { Xn: t, slideAnchor: n });
      }
    }
    function Kr(e) {
      var t = e.target;
      O(t, i().menu + " [data-menuanchor]") && Qr.call(t, e.e);
    }
    function Qr(e) {
      if (p({ j: "menu" }), s(i().menu)[0] && (i().lockAnchors || !i().anchors.length)) {
        W(e);
        var t = O(this, "[data-menuanchor]");
        f.ln(Si, { anchor: z(t, "data-menuanchor") });
      }
    }
    function $r(e) {
      var t = e.target;
      t && O(t, "#fp-nav a") ? Nr.call(t, e.e) : _(t, ".fp-tooltip") ? Hr.call(t) : (_(t, Go) || O(t, Go) != null) && Rr.call(t, e.e);
    }
    h.reBuild = Bo, f.un(K, function() {
      No(), pe("resize", No), f.un(ie, Gr);
    }), h.setLockAnchors = function(e) {
      i().lockAnchors = e;
    }, f.un(K, function() {
      pe("hashchange", vr), f.un(ie, qr);
    }), f.un(K, function() {
      He("wheel", on.Cn, Zi()), f.un(bi, Vr), f.un(mi, Yr);
    }), f.un(K, function() {
      f.un(Nt, Kr);
    }), f.un(K, function() {
      f.un(Nt, $r);
    });
    var zo, Po, hr = 0;
    function dn(e) {
      var t, n, o, r, a;
      if (U(g(), "onScroll"), !c.I && u().L && (ue(u().R), !u().D && !u().Vn && (!i().autoScrolling || i().scrollBar || I("dragAndMove")) && !ni())) {
        var l = I("dragAndMove") ? Math.abs(m("dragAndMove", "getCurrentScroll")) : be(), v = function(Q) {
          var ae = Q > hr ? "down" : "up";
          return hr = Q, p({ X: Q }), ae;
        }(l), d = 0, y = l + V() / 2, b = (I("dragAndMove") ? m("dragAndMove", "getDocumentHeight") : k.scrollHeight - V()) === l, w = u().R;
        if (p({ scrollY: l }), b)
          d = w.length - 1;
        else if (l)
          for (var T = 0; T < w.length; ++T)
            (O(w[T].item, $) || w[T].item).offsetTop <= y && (d = T);
        else
          d = 0;
        if (o = v, r = u().L.item.offsetTop, a = r + V(), (o == "up" ? a >= be() + V() : r <= be()) && (M(u().L.item, De) || (x(u().L.item, De), D(Xe(u().L.item), De))), n = (t = w[d]).item, !t.isActive) {
          p({ P: !0 });
          var C, X, Y = u().L.item, H = u().L.index() + 1, N = Hn(u().L, n), E = t.anchor, Z = t.index() + 1, G = t.activeSlide, ge = { L: Y, sectionIndex: Z - 1, anchorLink: E, element: n, leavingSection: H, direction: N, items: { origin: u().L, destination: t } };
          G && (X = G.anchor, C = G.index()), c.canScroll && (D(w.filter(function(Q) {
            return Q.index() !== t.index();
          }).map(function(Q) {
            return Q.item;
          }), j), x(n, j), m("parallax", "afterLoad"), P(i().beforeLeave) && Ii("beforeLeave", ge), P(i().onLeave) && se("onLeave", ge), P(i().afterLoad) && se("afterLoad", ge), m("resetSliders", "apply", { localIsResizing: c.I, leavingSection: H }), Dn(Y), it(t), Ht(n), Qn(E, Z - 1), i().anchors.length && p({ C: E }), ce(), Zn(C, X, E)), clearTimeout(zo), zo = setTimeout(function() {
            p({ P: !1 });
          }, 100);
        }
        i().fitToSection && c.canScroll && (clearTimeout(Po), Po = setTimeout(function() {
          var Q;
          if (!c.R.filter(function(ae) {
            var hn = ae.item.getBoundingClientRect();
            return Math.round(hn.bottom) === Math.round(V()) || Math.round(hn.top) === 0;
          }).length) {
            if (me && (Q = document.activeElement) && Q.matches("input, textarea"))
              return;
            Hi();
          }
        }, i().fitToSectionDelay));
      }
    }
    function Jr(e) {
      var t = e.items.destination.activeSlide;
      p({ scrollX: t ? Math.round(t.offsetLeft) : 0 });
    }
    function gr(e) {
      var t = i().skipIntermediateItems, n = e.items.origin.nn ? "sections" : "slides", o = Math.abs(e.items.origin.index() - e.items.destination.index()) > 1;
      (t === !0 || t === n) && o && _e(0, "internal");
    }
    function mr() {
      i().skipIntermediateItems && tt("scrollingSpeed", Me().scrollingSpeed, "internal");
    }
    function _o(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Pt(e, n, "k");
      }) : (Pt(e, "all", "k"), i().keyboardScrolling = e);
    }
    function el(e) {
      var t = e.index();
      i().anchors[t] !== void 0 && e.isActive && Qn(i().anchors[t], t), i().menu && i().css3 && O(s(i().menu)[0], Ae) != null && s(i().menu).forEach(function(n) {
        k.appendChild(n);
      });
    }
    function Sr() {
      var e, t, n = u().L, o = u().L.item;
      x(o, De), it(u().L), ki(), Ht(o), t = Mo((e = Do()).section), e.section && t && (t === void 0 || t.index() !== de(lo)) || !P(i().afterLoad) || se("afterLoad", { L: o, element: o, direction: null, anchorLink: n.anchor, sectionIndex: n.index(), items: { origin: u().L, destination: u().L } }), P(i().afterRender) && se("afterRender"), U(g(), "afterRender");
    }
    function Vo(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Pt(e, n, "m");
      }) : Pt(e, "all", "m"), U(g(), "setAllowScrolling", { value: e, _n: t });
    }
    function wr() {
      var e = Do(), t = e.section, n = e.pn;
      t ? i().animateAnchor ? Oo(t, n) : fn(t, n) : f.ln(Pn, null);
    }
    f.un(ie, function() {
      clearTimeout(zo), clearTimeout(Po);
    }), f.un(K, function() {
      pe("scroll", dn), A.body.addEventListener("scroll", dn), f.un(Fn, function(e) {
        Oo(e.Xn, e.slideAnchor);
      }), f.un(Si, function(e) {
        wt(e.anchor, void 0);
      }), f.un(gi, function(e) {
        (e.direction === "down" ? vt : Ue)();
      }), f.un(wi, function(e) {
        Ye(e.destination);
      });
    }), f.un(ie, function() {
      Ze("scroll", dn);
    }), h.getActiveSlide = function() {
      return Gn(u().L.activeSlide);
    }, h.getScrollX = function() {
      return c.scrollX;
    }, f.un(K, function() {
      f.un(ie, Ir), f.un(yi, function(e) {
        ke(e.slides, e.destination);
      }), f.un(Vn, function(e) {
        To(e.section);
      }), f.un(_n, function(e) {
        Ao(e.section);
      }), f.un(lt, Jr);
    }), f.un(K, function() {
      var e = i().credits.position, t = ["left", "right"].indexOf(e) > -1 ? "".concat(e, ": 0;") : "", n = `
        <div class="`.concat("fp-watermark", '" style="').concat(t, `">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(i().credits.label, `
            </a>
        </div>
    `), o = ue(c.R), r = !c.Qn || i().credits.enabled;
      o && o.item && r && o.item.insertAdjacentHTML("beforeend", n);
    }), function() {
      f.un(pi, function() {
        var v, d, y;
        p({ Qn: (i().licenseKey, v = i().licenseKey, d = function(b) {
          var w = parseInt("514").toString(16);
          if (!b || b.length < 29 || b.split(e[0]).length === 4)
            return null;
          var T = ["Each", "for"][r()]().join(""), C = b[["split"]]("-"), X = [];
          C[T](function(N, E) {
            if (E < 4) {
              var Z = function(Q) {
                var ae = Q[Q.length - 1], hn = ["NaN", "is"][r()]().join("");
                return window[hn](ae) ? a(ae) : function(ll) {
                  return ll - j.length;
                }(ae);
              }(N);
              X.push(Z);
              var G = a(N[Z]);
              if (E === 1) {
                var ge = ["pa", "dS", "t", "art"].join("");
                G = G.toString()[ge](2, "0");
              }
              w += G, E !== 0 && E !== 1 || (w += "-");
            }
          });
          var Y = 0, H = "";
          return b.split("-").forEach(function(N, E) {
            if (E < 4) {
              for (var Z = 0, G = 0; G < 4; G++)
                G !== X[E] && (Z += Math.abs(a(N[G])), isNaN(N[G]) || Y++);
              var ge = l(Z);
              H += ge;
            }
          }), H += l(Y), { Jn: /* @__PURE__ */ new Date(w + "T00:00"), Kn: w.split("-")[2] === 8 * (j.length - 2) + "", $n: H };
        }(v), y = function(b) {
          var w = o[r()]().join("");
          return b && w.indexOf(b) === 0 && b.length === w.length;
        }(v) || function(b) {
          return new RegExp("^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(b);
        }(v), (d || y) && (d && n <= d.Jn && d.$n === v.split(e[0])[4] || y || d.Kn) || !1) });
      });
      var e = ["-"], t = "2025-5-26".split("-"), n = new Date(t[0], t[1], t[2]), o = ["se", "licen", "-", "v3", "l", "gp"];
      function r() {
        return [["re", "verse"].join("")][0];
      }
      function a(v) {
        return v ? isNaN(v) ? v.charCodeAt(0) - 72 : v : "";
      }
      function l(v) {
        var d = 72 + v;
        return d > 90 && d < 97 && (d += 15), String.fromCharCode(d).toUpperCase();
      }
    }(), f.un(Wn, gr), f.un(lt, mr), f.un(Xn, gr), f.un(Bt, mr), f.un(vi, function() {
      _o(!0);
    }), h.setKeyboardScrolling = _o, h.shared.afterRenderActions = Sr, h.setAllowScrolling = Vo;
    var tl = {};
    function Qe() {
      return tl;
    }
    var pn, he, yr, Yo, vn = !M(k, q("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function br(e) {
      if (he = A.createElement("div"), pn = q("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), vn || (pn = pn.replace("extensions/", "").replace("Extension", "")), he.innerHTML = pn, he = he.firstChild, "MutationObserver" in window && new MutationObserver(nl).observe(A.body, { childList: !0, subtree: !1 }), (!vn || I(e) && h[e]) && (!function(n) {
        var o = Qe()[n] !== void 0 && Qe()[n].length, r = [], a = !1;
        return Fe(Qe()[n]) ? r = Qe()[n] : r.push(Qe()[n]), r.forEach(function(l) {
          var v = function() {
            if (A.domain.length) {
              for (var ae = A.domain.replace(/^(www\.)/, "").split("."); ae.length > 2; )
                ae.shift();
              return ae.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), d = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], y = q(d[0]), b = q(d[1]), w = q(d[2]), T = q(d[6]), C = q(d[3]), X = q(d[4]), Y = q(d[5]), H = i()[X + Y] !== void 0;
          o = o || H;
          var N = [y, b, w, T].indexOf(v) < 0 && v.length !== 0;
          if (!o && !H && N)
            return !1;
          var E = o ? q(l) : "", Z = (E = E.split("_")).length > 1 && E[1].indexOf(n, E[1].length - n.length) > -1, G = E.length > 1 && E[1].toLowerCase().indexOf(X) > -1, ge = E[0].indexOf(v, E[0].length - v.length) < 0, Q = Z || G;
          a = a || !(ge && N && C != E[0]) && Q || !N;
        }), a;
      }(e) || !vn)) {
        Lr();
        var t = q("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t](Lr, 2e3);
      }
    }
    function Lr() {
      he && (Yo || (Math.random() < 0.5 ? oi(k, he) : We(he, k), Yo = !0), he.setAttribute("style", q("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, q("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function nl(e) {
      e.forEach(function(t) {
        if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(he)) {
          clearTimeout(yr);
          var n = q("bDIwc2V0VGltZW91dDAzbA==");
          yr = window[n](ol, 900);
        }
      });
    }
    function ol() {
      Yo = !1;
    }
    function il() {
      Yt(), ce(), i().scrollBar = i().scrollBar || i().hybrid, Jo(), function() {
        R(Vi(g(), "body"), { height: "100%", position: "relative" }), x(g(), mn), x(ot, Lt), p({ U: V() }), D(g(), yn), Fi(), m("parallax", "init");
        for (var e = u().tn, t = 0; t < e.length; t++) {
          var n = e[t], o = n.vn, r = z(n.item, "style");
          r && n.item.setAttribute("data-fp-styles", r), ao(n), el(n), o.length > 0 && go(n);
        }
        i().fixedElements && i().css3 && s(i().fixedElements).forEach(function(a) {
          k.appendChild(a);
        }), i().navigation && ji(), s('iframe[src*="youtube.com/embed/"]', g()).forEach(function(a) {
          var l, v;
          v = z(l = a, "src"), l.setAttribute("src", v + (/\?/.test(v) ? "&" : "?") + "enablejsapi=1");
        }), m("fadingEffect", "apply"), m("waterEffect", "init"), m("dropEffect", "init"), m("cards", "init"), m("effects", "init"), m("continuousHorizontal", "afterRender"), i().scrollOverflow && S.bn();
      }(), Vo(!0), yt(!0), Ve(i().autoScrolling, "internal"), Ni(), fi(), A.readyState === "complete" && wr(), pe("load", wr), Sr(), vn || br("l"), Yt(), ce();
    }
    function xr() {
      var e = i().licenseKey;
      i().licenseKey.trim() === "" ? (te("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following website:"), te("error", "https://alvarotrigo.com/fullPage/docs/#licensekey")) : i() && c.Qn || A.domain.indexOf("alvarotrigo.com") > -1 ? e && e.length : (te("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), te("error", "https://alvarotrigo.com/fullPage/pricing")), M(ot, Lt) ? te("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (i().continuousVertical && (i().loopTop || i().loopBottom) && (i().continuousVertical = !1, te("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !i().scrollOverflow || !i().scrollBar && i().autoScrolling || te("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !i().continuousVertical || !i().scrollBar && i().autoScrolling || (i().continuousVertical = !1, te("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), i().anchors.forEach(function(t) {
        var n = [].slice.call(s("[name]")).filter(function(a) {
          return z(a, "name") && z(a, "name").toLowerCase() == t.toLowerCase();
        }), o = [].slice.call(s("[id]")).filter(function(a) {
          return z(a, "id") && z(a, "id").toLowerCase() == t.toLowerCase();
        });
        if (o.length || n.length) {
          te("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var r = o.length ? "id" : "name";
          (o.length || n.length) && te("error", '"' + t + '" is is being used by another element `' + r + "` property");
        }
      }));
    }
    function rl() {
      return { options: i(), internals: { container: g(), canScroll: c.canScroll, isScrollAllowed: F(), getDestinationPosition: Wt, isTouch: Be, c: br, getXmovement: Mi, removeAnimation: kt, getTransforms: Nn, lazyLoad: zn, addAnimation: In, performHorizontalMove: Ti, landscapeScroll: ke, silentLandscapeScroll: at, keepSlidesPosition: Kn, silentScroll: Ce, styleSlides: go, styleSection: ao, scrollHandler: dn, getEventsPage: xo, getMSPointer: er, isReallyTouch: St, usingExtension: I, toggleControlArrows: Ai, touchStartHandler: un, touchMoveHandler: mt, nullOrSection: Se, items: { SectionPanel: je, SlidePanel: Ft, Item: le }, getVisible: st, getState: u, updateState: ce, updateStructuralState: Yt, activeSlidesNavigation: Ei, getPanels: function() {
        return c.rn;
      }, getSections: function() {
        return c.R;
      }, setActiveSection: function(e) {
        c.L = e;
      } } };
    }
    function J(e) {
      var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], n = q(t[0]), o = q(t[1]), r = i()[n + o] !== void 0, a = "fp_" + e + "Extension";
      Qe()[e] = r ? i()[n + o] : i()[e + o], h[e] = window[a] !== void 0 ? new window[a]() : null, h[e] && h[e].c(e);
    }
    function Er(e, t) {
      var n;
      if (k = s("body")[0], ot = s("html")[0], jt = s("html, body"), !M(ot, Lt))
        return n = typeof e == "string" ? s(e)[0] : e, Mt.touchWrapper = n, function(o) {
          Ot = Ie({}, Mt, o), Cn = Object.assign({}, Ot);
        }(t), function(o) {
          et = o;
        }(typeof e == "string" ? s(e)[0] : e), f.ln(pi), xr(), h.getFullpageData = rl, h.version = "4.0.37", h.test = Object.assign(h.test, { top: "0px", on: "translate3d(0px, 0px, 0px)", cn: function() {
          for (var o = [], r = 0; r < s(i().sectionSelector, g()).length; r++)
            o.push("translate3d(0px, 0px, 0px)");
          return o;
        }(), left: function() {
          for (var o = [], r = 0; r < s(i().sectionSelector, g()).length; r++)
            o.push(0);
          return o;
        }(), options: i(), setAutoScrolling: null }), h.shared = Object.assign(h.shared, { afterRenderActions: null, isNormalScrollElement: !1 }), L.fullpage_api = h, L.fullpage_extensions = !0, g() && (f.ln(vi), J("continuousHorizontal"), J("scrollHorizontally"), J("resetSliders"), J("interlockedSlides"), J("responsiveSlides"), J("fadingEffect"), J("dragAndMove"), J("offsetSections"), J("scrollOverflowReset"), J("parallax"), J("cards"), J("dropEffect"), J("waterEffect"), J("effects"), m("dragAndMove", "init"), m("responsiveSlides", "init"), il(), f.ln(K), p({ K: !0 }), m("dragAndMove", "turnOffTouch")), L.fullpage_api;
      xr();
    }
    return h.destroy = function(e) {
      U(g(), "destroy", e), Ve(!1, "internal"), Vo(!0), yt(!1), _o(!1), x(g(), yn), f.ln(ie), m("dragAndMove", "destroy"), e && (Ce(0), s("img[data-src], source[data-src], audio[data-src], iframe[data-src]", g()).forEach(function(t) {
        nn(t, "src");
      }), s("img[data-srcset]").forEach(function(t) {
        nn(t, "srcset");
      }), Ne(s("#fp-nav, .fp-slidesNav, .fp-controlArrow, .fp-watermark")), R(kn(u().R), { height: "", "background-color": "", padding: "" }), R(kn(u().slides), { width: "" }), R(g(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), R(jt, { overflow: "", height: "" }), D(ot, Lt), D(k, bt + " " + Sn), k.className.split(/\s+/).forEach(function(t) {
        t.indexOf("fp-viewing") === 0 && D(k, t);
      }), kn(u().rn).forEach(function(t) {
        i().scrollOverflow && S.Hn(t), D(t, "fp-table active fp-completely fp-is-overflow " + Zo);
        var n = z(t, "data-fp-styles");
        n && t.setAttribute("style", n), M(t, xt) && !$o && t.removeAttribute("data-anchor");
      }), kt(g()), [Or, $e, fe].forEach(function(t) {
        s(t, g()).forEach(function(n) {
          Kt(n);
        });
      }), R(g(), { "-webkit-transition": "none", transition: "none" }), D(g(), mn), L.scrollTo(0, 0), [xt, xn, An].forEach(function(t) {
        D(s("." + t), t);
      }), p(ei), f.ln(Yn));
    }, L.fp_easings = Ie(L.fp_easings, { easeInOutCubic: function(e, t, n, o) {
      return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
    } }), L.jQuery && function(e, t) {
      e && t ? e.fn.fullpage = function(n) {
        n = e.extend({}, n, { $: e }), new t(this[0], n), Object.keys(h).forEach(function(o) {
          i().$.fn.fullpage[o] = h[o];
        });
      } : te("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(L.jQuery, Er), Er;
  });
})(Ar);
var dl = Ar.exports;
const pl = /* @__PURE__ */ fl(dl), vl = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
], hl = (B, ee) => {
  const ne = B.__vccOpts || B;
  for (const [oe, Ee] of ee)
    ne[oe] = Ee;
  return ne;
}, gl = {
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
      events: vl.reduce((B, ee) => ({
        ...B,
        [ee]: (...ne) => {
          this.emitEvent(ee, ne);
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
      let B = this.options.slideSelector || ".slide", ee = this.options.sectionSelector || ".section";
      const ne = window.fp_utils.index(document.querySelector(ee + ".active")), oe = document.querySelector(ee + ".active " + B + ".active"), Ee = oe ? window.fp_utils.index(oe) : -1;
      this.destroy(), ne > -1 && window.fp_utils.addClass(document.querySelectorAll(ee)[ne], "active"), Ee > -1 && window.fp_utils.addClass(oe, "active"), this.init();
    },
    destroy() {
      typeof window.fullpage_api < "u" && typeof window.fullpage_api.destroy < "u" && window.fullpage_api.destroy("all");
    },
    emitEvent(B, ee) {
      this.$emit(B.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...ee), Object.prototype.hasOwnProperty.call(this.options, B) && this.options[B].apply(this, ee);
    },
    init() {
      this.api = new pl(this.$refs.fullpage, this.options);
    }
  }
}, ml = { ref: "fullpage" };
function Sl(B, ee, ne, oe, Ee, gn) {
  return al(), cl("div", ml, [
    sl(B.$slots, "default")
  ], 512);
}
const wl = /* @__PURE__ */ hl(gl, [["render", Sl]]), bl = {
  install(B) {
    B.component("FullPage", wl);
  }
};
export {
  bl as default
};
