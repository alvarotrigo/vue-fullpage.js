var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
/*!
* vue-fullpage 0.2.2
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
import { openBlock, createElementBlock, renderSlot } from "vue";
var fullpage_min$1 = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var fullpage_min = { exports: {} };
/*!
* fullPage 4.0.7
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
(function(module, exports) {
  !function(n, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var n, t, e, o;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(n2) {
      if (this == null)
        throw new TypeError('"this" is null or not defined');
      var t2 = Object(this), e2 = t2.length >>> 0;
      if (typeof n2 != "function")
        throw new TypeError("predicate must be a function");
      for (var o2 = arguments[1], i2 = 0; i2 < e2; ) {
        var r2 = t2[i2];
        if (n2.call(o2, r2, i2, t2))
          return r2;
        i2++;
      }
    } }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t2) {
      return typeof t2 == "function" || n.call(t2) === "[object Function]";
    }, e = Math.pow(2, 53) - 1, o = function(n2) {
      var t2 = function(n3) {
        var t3 = Number(n3);
        return isNaN(t3) ? 0 : t3 !== 0 && isFinite(t3) ? (t3 > 0 ? 1 : -1) * Math.floor(Math.abs(t3)) : t3;
      }(n2);
      return Math.min(Math.max(t2, 0), e);
    }, function(n2) {
      var e2 = this, i2 = Object(n2);
      if (n2 == null)
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      var r2, a2 = arguments.length > 1 ? arguments[1] : void 0;
      if (a2 !== void 0) {
        if (!t(a2))
          throw new TypeError("Array.from: when provided, the second argument must be a function");
        arguments.length > 2 && (r2 = arguments[2]);
      }
      for (var u2, c2 = o(i2.length), l2 = t(e2) ? Object(new e2(c2)) : new Array(c2), f2 = 0; f2 < c2; )
        u2 = i2[f2], l2[f2] = a2 ? r2 === void 0 ? a2(u2, f2) : a2.call(r2, u2, f2) : u2, f2 += 1;
      return l2.length = c2, l2;
    }));
    var i = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), u = /(Mac|iPhone|iPod|iPad)/i.test(i.navigator.userAgent), c = "ontouchstart" in i || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, l = { test: {}, shared: {} }, f = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];
    function s(n2, t2) {
      i.console && i.console[n2] && i.console[n2]("fullPage: " + t2);
    }
    function v(n2) {
      return i.getComputedStyle(n2).display !== "none";
    }
    function d(n2) {
      return Array.from(n2).filter(function(n3) {
        return v(n3);
      });
    }
    function h(n2, t2) {
      return (t2 = arguments.length > 1 ? t2 : document) ? t2.querySelectorAll(n2) : null;
    }
    function p(n2) {
      n2 = n2 || {};
      for (var t2 = 1, e2 = arguments.length; t2 < e2; ++t2) {
        var o2 = arguments[t2];
        if (o2)
          for (var i2 in o2)
            o2.hasOwnProperty(i2) && i2 != "__proto__" && i2 != "constructor" && (Object.prototype.toString.call(o2[i2]) !== "[object Object]" ? n2[i2] = o2[i2] : n2[i2] = p(n2[i2], o2[i2]));
      }
      return n2;
    }
    function g(n2, t2) {
      return n2 != null && n2.classList.contains(t2);
    }
    function m() {
      return "innerHeight" in i ? i.innerHeight : r.documentElement.offsetHeight;
    }
    function w() {
      return i.innerWidth;
    }
    function b(n2, t2) {
      var e2;
      for (e2 in n2 = M(n2), t2)
        if (t2.hasOwnProperty(e2) && e2 !== null)
          for (var o2 = 0; o2 < n2.length; o2++)
            n2[o2].style[e2] = t2[e2];
      return n2;
    }
    function y(n2) {
      return n2.previousElementSibling;
    }
    function S(n2) {
      return n2.nextElementSibling;
    }
    function T(n2, t2) {
      n2 = A(n2) ? n2[0] : n2;
      for (var e2 = t2 != null ? h(t2, n2.parentNode) : n2.parentNode.childNodes, o2 = 0, i2 = 0; i2 < e2.length; i2++) {
        if (e2[i2] == n2)
          return o2;
        e2[i2].nodeType == 1 && o2++;
      }
      return -1;
    }
    function M(n2) {
      return A(n2) ? n2 : [n2];
    }
    function x(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "none";
      return n2;
    }
    function k(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "block";
      return n2;
    }
    function A(n2) {
      return Object.prototype.toString.call(n2) === "[object Array]" || Object.prototype.toString.call(n2) === "[object NodeList]";
    }
    function O(n2, t2) {
      n2 = M(n2);
      for (var e2 = 0; e2 < n2.length; e2++)
        n2[e2].classList.add(t2);
      return n2;
    }
    function D(n2, t2) {
      n2 = M(n2);
      for (var e2 = t2.split(" "), o2 = 0; o2 < e2.length; o2++) {
        t2 = e2[o2];
        for (var i2 = 0; i2 < n2.length; i2++)
          n2[i2].classList.remove(t2);
      }
      return n2;
    }
    function j(n2, t2) {
      t2.appendChild(n2);
    }
    function E(n2, t2, e2) {
      var o2;
      t2 = t2 || r.createElement("div");
      for (var i2 = 0; i2 < n2.length; i2++) {
        var a2 = n2[i2];
        (e2 && !i2 || !e2) && (o2 = t2.cloneNode(true), a2.parentNode.insertBefore(o2, a2)), o2.appendChild(a2);
      }
      return n2;
    }
    function L(n2, t2) {
      E(n2, t2, true);
    }
    function R(n2) {
      for (var t2 = r.createDocumentFragment(); n2.firstChild; )
        t2.appendChild(n2.firstChild);
      n2.parentNode.replaceChild(t2, n2);
    }
    function P(n2, t2) {
      return n2 && n2.nodeType === 1 ? G(n2, t2) ? n2 : P(n2.parentNode, t2) : null;
    }
    function C(n2, t2) {
      F(n2, n2.nextSibling, t2);
    }
    function z(n2, t2) {
      F(n2, n2, t2);
    }
    function F(n2, t2, e2) {
      A(e2) || (typeof e2 == "string" && (e2 = Q(e2)), e2 = [e2]);
      for (var o2 = 0; o2 < e2.length; o2++)
        n2.parentNode.insertBefore(e2[o2], t2);
    }
    function N(n2) {
      if (n2 !== void 0 && n2.fitToSection)
        return r.body.scrollTop;
      var t2 = r.documentElement;
      return (i.pageYOffset || t2.scrollTop) - (t2.clientTop || 0);
    }
    function B(n2) {
      return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
        return t2 !== n2;
      });
    }
    function I(n2) {
      n2.preventDefault();
    }
    function H(n2, t2) {
      return n2.getAttribute(t2);
    }
    function W(n2, t2, e2) {
      r.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function V(n2, t2, e2) {
      i.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function U(n2, t2, e2) {
      r.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function K(n2, t2, e2) {
      i.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function _(n2) {
      if (typeof n2 == "function")
        return true;
      var t2 = Object.prototype.toString.call(n2);
      return t2 === "[object Function]" || t2 === "[object GeneratorFunction]";
    }
    function q(n2, t2, e2) {
      var o2;
      e2 = e2 === void 0 ? {} : e2, typeof i.CustomEvent == "function" ? o2 = new CustomEvent(t2, { detail: e2 }) : (o2 = r.createEvent("CustomEvent")).initCustomEvent(t2, true, true, e2), n2.dispatchEvent(o2);
    }
    function G(n2, t2) {
      return (n2.matches || n2.t || n2.msMatchesSelector || n2.mozMatchesSelector || n2.webkitMatchesSelector || n2.oMatchesSelector).call(n2, t2);
    }
    function Y(n2, t2) {
      if (typeof t2 == "boolean")
        for (var e2 = 0; e2 < n2.length; e2++)
          n2[e2].style.display = t2 ? "block" : "none";
      return n2;
    }
    function Q(n2) {
      var t2 = r.createElement("div");
      return t2.innerHTML = n2.trim(), t2.firstChild;
    }
    function X(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++) {
        var e2 = n2[t2];
        e2 && e2.parentElement && e2.parentNode.removeChild(e2);
      }
    }
    function $(n2, t2, e2) {
      for (var o2 = n2[e2], i2 = []; o2; )
        (G(o2, t2) || t2 == null) && i2.push(o2), o2 = o2[e2];
      return i2;
    }
    function J(n2, t2) {
      return $(n2, t2, "nextElementSibling");
    }
    function Z(n2, t2) {
      return $(n2, t2, "previousElementSibling");
    }
    function nn(n2) {
      return n2[n2.length - 1];
    }
    function tn(n2, t2) {
      for (var e2 = 0, o2 = n2.slice(Math.max(n2.length - t2, 1)), i2 = 0; i2 < o2.length; i2++)
        e2 += o2[i2];
      return Math.ceil(e2 / t2);
    }
    function en(n2, t2) {
      n2.setAttribute(t2, H(n2, "data-" + t2)), n2.removeAttribute("data-" + t2);
    }
    function on(n2) {
      return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n3) {
        return typeof n3;
      } : function(n3) {
        return n3 && typeof Symbol == "function" && n3.constructor === Symbol && n3 !== Symbol.prototype ? "symbol" : typeof n3;
      }, on(n2);
    }
    i.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n2, t2) {
      t2 = t2 || window;
      for (var e2 = 0; e2 < this.length; e2++)
        n2.call(t2, this[e2], e2, this);
    }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(n2, t2) {
      if (n2 == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var e2 = Object(n2), o2 = 1; o2 < arguments.length; o2++) {
        var i2 = arguments[o2];
        if (i2 != null)
          for (var r2 in i2)
            Object.prototype.hasOwnProperty.call(i2, r2) && (e2[r2] = i2[r2]);
      }
      return e2;
    }, writable: true, o: true }), window.fp_utils = { $: h, deepExtend: p, hasClass: g, getWindowHeight: m, css: b, prev: y, next: S, last: function(n2) {
      return n2[n2.length - 1];
    }, index: T, getList: M, hide: x, show: k, isArrayOrList: A, addClass: O, removeClass: D, appendTo: j, wrap: E, wrapAll: L, unwrap: R, closest: P, after: C, before: z, insertBefore: F, getScrollTop: N, siblings: B, preventDefault: I, isFunction: _, trigger: q, matches: G, toggle: Y, createElementFromHTML: Q, remove: X, untilAll: $, nextAll: J, prevAll: Z, showError: s };
    var rn = { i: {}, u: function(n2, t2) {
      var e2 = this;
      return on(this.i[n2]) !== "object" && (this.i[n2] = []), this.i[n2].push(t2), function() {
        return e2.removeListener(n2, t2);
      };
    }, removeListener: function(n2, t2) {
      if (on(this.i[n2]) === "object") {
        var e2 = this.i[n2].indexOf(t2);
        e2 > -1 && this.i[n2].splice(e2, 1);
      }
    }, l: function(n2) {
      for (var t2 = this, e2 = arguments.length, o2 = new Array(e2 > 1 ? e2 - 1 : 0), i2 = 1; i2 < e2; i2++)
        o2[i2 - 1] = arguments[i2];
      on(this.i[n2]) === "object" && this.i[n2].forEach(function(n3) {
        return n3.apply(t2, o2);
      });
    }, once: function(n2, t2) {
      var e2 = this, o2 = this.u(n2, function() {
        o2();
        for (var n3 = arguments.length, i2 = new Array(n3), r2 = 0; r2 < n3; r2++)
          i2[r2] = arguments[r2];
        t2.apply(e2, i2);
      });
    } }, an = { v: 0, h: 0, slides: [], p: [], g: null, S: null, T: false, M: false, A: false, O: false, D: false, j: void 0, L: void 0, R: false, P: true, C: "none", F: "none", N: false, B: false, I: true, H: 0, W: m(), V: false, U: {}, scrollY: 0, scrollX: 0 };
    function un(n2) {
      Object.assign(an, n2);
    }
    function cn() {
      return an;
    }
    function ln(n2) {
      rn.l("onClickOrTouch", { e: n2, target: n2.target });
    }
    function fn() {
      ["click", "touchstart"].forEach(function(n2) {
        U(n2, ln);
      });
    }
    function sn() {
      un({ I: true });
    }
    i.state = an, rn.u("bindEvents", function() {
      ["click", "touchstart"].forEach(function(n2) {
        W(n2, ln);
      }), V("focus", sn), rn.u("onDestroy", fn);
    });
    var vn = "fullpage-wrapper", dn = "." + vn, hn = "fp-responsive", pn = "fp-notransition", gn = "fp-destroyed", mn = "fp-enabled", wn = "active", bn = ".active", yn = "fp-completely", Sn = "fp-section", Tn = "." + Sn, Mn = ".fp-tableCell", xn = "fp-auto-height", kn = "#fp-nav", An = "fp-slide", On = "." + An, Dn = ".fp-slide.active", jn = "fp-slides", En = ".fp-slides", Ln = "fp-slidesContainer", Rn = "." + Ln, Pn = "fp-table", Cn = "fp-overflow", zn = "." + Cn, Fn = ".fp-slidesNav", Nn = ".fp-slidesNav a", Bn = "fp-controlArrow", In = "." + Bn, Hn = "fp-prev", Wn = ".fp-controlArrow.fp-prev", Vn = ".fp-controlArrow.fp-next", Un = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, Kn = null, _n = false, qn = p({}, Un), Gn = null;
    function Yn(n2) {
      return Kn;
    }
    function Qn() {
      return Gn || Un;
    }
    function Xn() {
      return qn;
    }
    function $n(n2, t2, e2) {
      Gn[n2] = t2, e2 !== "internal" && (qn[n2] = t2);
    }
    function Jn() {
      if (!Qn().anchors.length) {
        var n2 = h(Qn().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Kn);
        n2.length && n2.length === h(Qn().sectionSelector, Kn).length && (_n = true, n2.forEach(function(n3) {
          Qn().anchors.push(H(n3, "data-anchor").toString());
        }));
      }
      if (!Qn().navigationTooltips.length) {
        var t2 = h(Qn().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Kn);
        t2.length && t2.forEach(function(n3) {
          Qn().navigationTooltips.push(H(n3, "data-tooltip").toString());
        });
      }
    }
    var Zn = function(n2) {
      this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
    }, nt = function(n2, t2) {
      this.parent = this.parent || null, this.selector = t2, this.anchor = H(n2, "data-anchor") || Qn().anchors[T(n2, Qn().sectionSelector)], this.item = n2, this.isVisible = v(n2), this.isActive = g(n2, wn), this.K = g(n2, Cn), this._ = t2 === Qn().sectionSelector, this.q = P(n2, Rn) || P(n2, dn), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function tt(n2) {
      return n2.map(function(n3) {
        return n3.item;
      });
    }
    function et(n2, t2) {
      return n2.find(function(n3) {
        return n3.item === t2;
      });
    }
    nt.prototype.siblings = function() {
      return this._ ? this.isVisible ? an.p : an.G : this.parent ? this.parent.slides : 0;
    }, nt.prototype.prev = function() {
      var n2 = this.siblings(), t2 = (this._ ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t2 >= 0 ? n2[t2] : null;
    }, nt.prototype.next = function() {
      var n2 = this.siblings(), t2 = (this._ ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t2 < n2.length ? n2[t2] : null;
    }, nt.prototype.Y = function() {
      return this._ ? an.p : an.X;
    };
    var ot, it, rt = function(n2) {
      Zn.call(this, n2);
    }, at = function(n2) {
      Zn.call(this, n2);
    };
    function ut(n2) {
      var t2 = h(Dn, n2);
      return t2.length && (n2 = t2[0]), n2;
    }
    function ct(n2) {
      var t2, e2, o2 = Qn();
      return o2.autoScrolling && !o2.scrollBar ? (t2 = -n2, e2 = h(dn)[0]) : o2.fitToSection ? (t2 = n2, e2 = r.body) : (t2 = n2, e2 = window), { options: t2, element: e2 };
    }
    function lt(n2, t2) {
      !Qn().autoScrolling || Qn().scrollBar || n2.self != window && g(n2, jn) ? n2.self != window && g(n2, jn) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
    }
    function ft(n2) {
      var t2 = "transform " + Qn().scrollingSpeed + "ms " + Qn().easingcss3;
      return D(n2, pn), b(n2, { "-webkit-transition": t2, transition: t2 });
    }
    function st(n2, t2) {
      var e2 = n2.index(), o2 = T(t2, Tn);
      return e2 == o2 ? "none" : e2 > o2 ? "up" : "down";
    }
    function vt(n2) {
      return O(n2, pn);
    }
    function dt(n2) {
      return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
    }
    function ht(n2, t2) {
      t2 ? ft(Yn()) : vt(Yn()), clearTimeout(ot), b(Yn(), dt(n2)), l.test.J = n2, ot = setTimeout(function() {
        D(Yn(), pn);
      }, 10);
    }
    function pt(n2) {
      var t2 = Math.round(n2);
      if (Qn().css3 && Qn().autoScrolling && !Qn().scrollBar)
        ht("translate3d(0px, -" + t2 + "px, 0px)", false);
      else if (Qn().autoScrolling && !Qn().scrollBar)
        b(Yn(), { top: -t2 + "px" }), l.test.top = -t2 + "px";
      else {
        var e2 = ct(t2);
        lt(e2.element, e2.options);
      }
    }
    function gt(n2, t2) {
      $n("scrollingSpeed", n2, t2);
    }
    function mt() {
      clearTimeout(it);
    }
    function wt(n2, t2, e2, o2) {
      var a2 = function(n3) {
        return n3.self != i && g(n3, jn) ? n3.scrollLeft : !Qn().autoScrolling || Qn().scrollBar ? N(Qn()) : n3.offsetTop;
      }(n2), u2 = t2 - a2, c2 = 0, l2 = false;
      un({ R: true }), n2 === r.body && b(r.body, { "scroll-snap-type": "none" }), function r2() {
        if (an.R) {
          var f2 = t2;
          c2 += 20, e2 && (f2 = i.fp_easings[Qn().easing](c2, a2, u2, e2)), lt(n2, f2), c2 < e2 ? (clearTimeout(it), it = setTimeout(r2, 20)) : o2 === void 0 || l2 || (o2(), l2 = true);
        } else
          c2 < e2 && !l2 && (o2(), l2 = true);
      }();
    }
    function bt(n2) {
      return n2 && !n2.item ? new rt(new $t(n2)) : n2 ? new rt(n2) : null;
    }
    function yt(n2) {
      return n2 ? new at(n2) : null;
    }
    function St(n2, t2) {
      var e2, o2 = function(n3, t3) {
        var e3 = { afterRender: function() {
          return { section: bt(cn().g), Z: yt(cn().g.activeSlide) };
        }, onLeave: function() {
          return { origin: bt(t3.items.origin), destination: bt(t3.items.destination), direction: t3.direction, trigger: cn().S };
        }, afterLoad: function() {
          return e3.onLeave();
        }, afterSlideLoad: function() {
          return { section: bt(t3.items.section), origin: bt(t3.items.origin), destination: bt(t3.items.destination), direction: t3.direction, trigger: cn().S };
        }, onSlideLeave: function() {
          return e3.afterSlideLoad();
        }, beforeLeave: function() {
          return e3.onLeave();
        }, onScrollOverflow: function() {
          return { section: bt(cn().g), Z: yt(cn().g.activeSlide), position: t3.position, direction: t3.direction };
        } };
        return e3[n3]();
      }(n2, t2);
      return q(Yn(), n2, o2), Qn()[n2].apply(o2[Object.keys(o2)[0]], (e2 = o2, Object.keys(e2).map(function(n3) {
        return e2[n3];
      }))) !== false;
    }
    function Tt(n2) {
      var t2 = ut(n2);
      h("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && typeof n3.play == "function" && n3.play();
      }), h('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && Mt(n3), n3.onload = function() {
          n3.hasAttribute("data-autoplay") && Mt(n3);
        };
      });
    }
    function Mt(n2) {
      n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function xt(n2) {
      var t2 = ut(n2);
      h("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-keepplaying") || typeof n3.pause != "function" || n3.pause();
      }), h('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        /youtube\.com\/embed\//.test(H(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function kt(n2) {
      Qn().lazyLoading && h("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", ut(n2)).forEach(function(n3) {
        if (["src", "srcset"].forEach(function(t3) {
          var e2 = H(n3, "data-" + t3);
          e2 != null && e2 && (en(n3, t3), n3.addEventListener("load", function() {
          }));
        }), G(n3, "source")) {
          var t2 = P(n3, "video, audio");
          t2 && (t2.load(), t2.onloadeddata = function() {
          });
        }
      });
    }
    l.setScrollingSpeed = gt, rn.u("bindEvents", function() {
      rn.u("onDestroy", mt);
    });
    var At = null, Ot = null, Dt = null;
    function jt() {
      var n2 = cn().g.item, t2 = cn().g.activeSlide, e2 = Et(n2), o2 = String(e2);
      t2 && (o2 = o2 + "-" + Et(t2.item)), o2 = o2.replace("/", "-").replace("#", "");
      var i2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      At.className = At.className.replace(i2, ""), O(At, "fp-viewing-" + o2);
    }
    function Et(n2) {
      if (!n2)
        return null;
      var t2 = H(n2, "data-anchor"), e2 = T(n2);
      return t2 == null && (t2 = e2), t2;
    }
    function Lt(n2, t2, e2) {
      var o2 = "";
      Qn().anchors.length && !Qn().lockAnchors && (n2 ? (e2 != null && (o2 = e2), t2 == null && (t2 = n2), un({ L: t2 }), Rt(o2 + "/" + t2)) : n2 != null ? (un({ L: t2 }), Rt(e2)) : Rt(e2)), jt();
    }
    function Rt(n2) {
      if (Qn().recordHistory)
        location.hash = n2;
      else if (a || c)
        i.history.replaceState(void 0, void 0, "#" + n2);
      else {
        var t2 = i.location.href.split("#")[0];
        i.location.replace(t2 + "#" + n2);
      }
    }
    function Pt(n2, t2, e2) {
      var o2 = t2 === "Section" ? Qn().anchors[n2] : H(e2, "data-anchor");
      return encodeURI(Qn().navigationTooltips[n2] || o2 || t2 + " " + (n2 + 1));
    }
    function Ct(n2) {
      I(n2), un({ S: "horizontalNav" });
      var t2 = P(this, Tn), e2 = h(En, P(this, Tn))[0], o2 = et(cn().p, t2).slides[T(P(this, "li"))];
      rn.l("landscapeScroll", { slides: e2, destination: o2.item });
    }
    var zt, Ft = {};
    function Nt(n2, t2, e2) {
      t2 !== "all" ? Ft[e2][t2] = n2 : Object.keys(Ft[e2]).forEach(function(t3) {
        Ft[e2][t3] = n2;
      });
    }
    function Bt() {
      return Ft;
    }
    function It() {
      var n2 = P(this, Tn);
      g(this, Hn) ? Bt().m.left && (un({ S: "slideArrow" }), rn.l("moveSlideLeft", { section: n2 })) : Bt().m.right && (un({ S: "slideArrow" }), rn.l("moveSlideRight", { section: n2 }));
    }
    function Ht() {
      clearTimeout(zt);
    }
    function Wt(n2, t2, e2) {
      var o2, i2, r2 = P(n2, Tn), a2 = cn().p.filter(function(n3) {
        return n3.item == r2;
      })[0], u2 = a2.slides.filter(function(n3) {
        return n3.item == t2;
      })[0], c2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: u2.index(), section: r2, sectionIndex: a2.index(), anchorLink: a2.anchor, slidesNav: h(Fn, r2)[0], slideAnchor: u2.anchor, prevSlide: a2.activeSlide.item, prevSlideIndex: a2.activeSlide.index(), items: { section: a2, origin: a2.activeSlide, destination: u2 }, localIsResizing: an.O };
      c2.nn = (o2 = c2.prevSlideIndex, i2 = c2.slideIndex, o2 == i2 ? "none" : o2 > i2 ? "left" : "right"), c2.direction = c2.direction ? c2.direction : c2.nn, c2.localIsResizing || un({ P: false }), Qn().onSlideLeave && !c2.localIsResizing && c2.nn !== "none" && _(Qn().onSlideLeave) && St("onSlideLeave", c2) === false ? un({ A: false }) : (O(t2, wn), D(B(t2), wn), Gt(), c2.localIsResizing || (xt(c2.prevSlide), kt(t2)), function(n3) {
        !Qn().loopHorizontal && Qn().controlArrows && (Y(h(Wn, n3.section), n3.slideIndex !== 0), Y(h(Vn, n3.section), S(n3.destiny) != null));
      }(c2), a2.isActive && !c2.localIsResizing && Lt(c2.slideIndex, c2.slideAnchor, c2.anchorLink), function(n3, t3, e3) {
        var o3, i3, r3 = t3.destinyPos;
        if (o3 = t3.slidesNav, i3 = t3.slideIndex, Qn().slidesNavigation && o3 != null && (D(h(bn, o3), wn), O(h("a", h("li", o3)[i3]), wn)), un({ scrollX: Math.round(r3.left) }), Qn().css3) {
          var a3 = "translate3d(-" + Math.round(r3.left) + "px, 0px, 0px)";
          l.test.tn[t3.sectionIndex] = a3, b(ft(h(Rn, n3)), dt(a3)), clearTimeout(zt), zt = setTimeout(function() {
            Ut(t3);
          }, Qn().scrollingSpeed);
        } else
          l.test.left[t3.sectionIndex] = Math.round(r3.left), wt(n3, Math.round(r3.left), Qn().scrollingSpeed, function() {
            Ut(t3);
          });
      }(n2, c2));
    }
    function Vt() {
      clearTimeout(zt);
    }
    function Ut(n2) {
      n2.localIsResizing || (_(Qn().afterSlideLoad) && St("afterSlideLoad", n2), un({ P: true }), Tt(n2.destiny)), un({ A: false });
    }
    function Kt(n2, t2) {
      gt(0, "internal"), t2 !== void 0 && un({ O: true }), Wt(P(n2, En), n2), t2 !== void 0 && un({ O: false }), gt(Xn().scrollingSpeed, "internal");
    }
    Ft.m = { up: true, down: true, left: true, right: true }, Ft.k = p({}, Ft.m), rn.u("onClickOrTouch", function(n2) {
      var t2 = n2.target;
      (G(t2, In) || P(t2, In)) && It.call(t2, n2);
    }), l.landscapeScroll = Wt, rn.u("bindEvents", function() {
      rn.u("onPerformMovement", Ht);
    });
    var _t = null, qt = null;
    function Gt() {
      an.g = null, an.p.map(function(n2) {
        var t2 = g(n2.item, wn);
        n2.isActive = t2, n2.K = g(n2.item, Cn), t2 && (an.g = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
          var e2 = g(t3.item, wn);
          t3.K = g(t3.item, Cn), t3.isActive = e2, e2 && (n2.activeSlide = t3);
        }));
      }), function() {
        var n2 = an.g, t2 = !!an.g && an.g.slides.length, e2 = an.g ? an.g.activeSlide : null;
        if (!n2 && an.p.length && !cn().T && _t) {
          var o2 = Xt(_t, an.p);
          o2 && (an.g = o2, an.g.isActive = true, O(an.g.item, wn)), an.g && pt(an.g.item.offsetTop);
        }
        if (t2 && !e2 && qt) {
          var i2 = Xt(qt, an.g.slides);
          i2 && (an.g.activeSlide = i2, an.g.activeSlide.isActive = true, O(an.g.activeSlide.item, wn)), an.g.activeSlide && Kt(an.g.activeSlide.item, "internal");
        }
      }();
    }
    function Yt() {
      var n2 = h(Qn().sectionSelector, Yn()), t2 = d(n2), e2 = Array.from(n2).map(function(n3) {
        return new $t(n3);
      }), o2 = e2.filter(function(n3) {
        return n3.isVisible;
      }), i2 = o2.reduce(function(n3, t3) {
        return n3.concat(t3.slides);
      }, []);
      _t = Qt(an.g), qt = Qt(an.g ? an.g.activeSlide : null), an.v = t2.length, an.h = o2.reduce(function(n3, t3) {
        return n3 + t3.slides.length;
      }, 0), an.p = o2, an.G = e2, an.slides = i2, an.X = an.p.concat(an.slides);
    }
    function Qt(n2) {
      if (!n2)
        return null;
      var t2 = n2 ? n2.item : null, e2 = n2._ ? an.G : an.g.en;
      if (t2) {
        var o2 = et(e2, t2);
        return o2 ? o2.index() : null;
      }
      return null;
    }
    function Xt(n2, t2) {
      var e2, o2 = n2 - 1, i2 = n2;
      do {
        if (e2 = t2[o2] || t2[i2])
          break;
        o2 -= 1, i2 += 1;
      } while (o2 >= 0 || i2 < t2.length);
      return e2;
    }
    var $t = function(n2) {
      var t2 = this;
      [].push.call(arguments, Qn().sectionSelector), nt.apply(this, arguments), this.on = h(Qn().slideSelector, n2), this.en = Array.from(this.on).map(function(n3) {
        return new Jt(n3, t2);
      }), this.slides = this.en.filter(function(n3) {
        return n3.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
        return n3.isActive;
      })[0] || this.slides[0] : null;
    };
    $t.prototype = nt.prototype, $t.prototype.constructor = $t;
    var Jt = function(n2, t2) {
      this.parent = t2, nt.call(this, n2, Qn().slideSelector);
    };
    function Zt() {
      O(h(Qn().sectionSelector, Yn()), Sn), O(h(Qn().slideSelector, Yn()), An);
    }
    function ne() {
      q(y(this), "click");
    }
    function te() {
      X(h(kn));
      var n2 = r.createElement("div");
      n2.setAttribute("id", "fp-nav");
      var t2 = r.createElement("ul");
      n2.appendChild(t2), j(n2, At);
      var e2 = h(kn)[0];
      O(e2, "fp-" + Qn().navigationPosition), Qn().showActiveTooltip && O(e2, "fp-show-active");
      for (var o2 = "", i2 = 0; i2 < cn().p.length; i2++) {
        var a2 = cn().p[i2], u2 = "";
        Qn().anchors.length && (u2 = a2.anchor), o2 += '<li><a href="#' + encodeURI(u2) + '"><span class="fp-sr-only">' + Pt(a2.index(), "Section") + "</span><span></span></a>";
        var c2 = Qn().navigationTooltips[a2.index()];
        c2 !== void 0 && c2 !== "" && (o2 += '<div class="fp-tooltip fp-' + Qn().navigationPosition + '">' + c2 + "</div>"), o2 += "</li>";
      }
      h("ul", e2)[0].innerHTML = o2;
      var l2 = h("li", h(kn)[0])[cn().g.index()];
      O(h("a", l2), wn);
    }
    function ee(n2) {
      n2.preventDefault && I(n2), un({ S: "verticalNav" });
      var t2 = T(P(this, "#fp-nav li"));
      rn.l("scrollPage", { destination: cn().p[t2] });
    }
    function oe(n2, t2) {
      $n("recordHistory", n2, t2);
    }
    function ie(n2, t2) {
      n2 || pt(0), $n("autoScrolling", n2, t2);
      var e2 = cn().g.item;
      if (Qn().autoScrolling && !Qn().scrollBar)
        b(Dt, { overflow: "hidden", height: "100%" }), D(At, "fp-scrollable"), oe(Xn().recordHistory, "internal"), b(Yn(), { "-ms-touch-action": "none", "touch-action": "none" }), e2 != null && pt(e2.offsetTop);
      else if (b(Dt, { overflow: "visible", height: "initial" }), O(At, "fp-scrollable"), oe(!!Qn().autoScrolling && Xn().recordHistory, "internal"), b(Yn(), { "-ms-touch-action": "", "touch-action": "" }), e2 != null) {
        b(Dt, { "scroll-behavior": "unset" });
        var o2 = ct(e2.offsetTop);
        o2.element.scrollTo(0, o2.options);
      }
    }
    Jt.prototype = nt.prototype, Jt.prototype.constructor = $t, l.setRecordHistory = oe, l.setAutoScrolling = ie, l.test.setAutoScrolling = ie, l.setFitToSection = ue, l.fitToSection = function() {
    };
    var re, ae = "scrollSnapAlign" in (re = r.documentElement.style) || "rn" in re || "an" in re;
    function ue(n2, t2) {
      ce(n2), $n("fitToSection", n2, t2);
    }
    function ce(n2) {
      ae && (Qn().fitToSection && (!Qn().autoScrolling || Qn().scrollBar) && n2 ? O : D)(Ot, "fp-snaps");
    }
    function le() {
      var n2 = Qn().responsive || Qn().responsiveWidth, t2 = Qn().responsiveHeight, e2 = n2 && i.innerWidth < n2, o2 = t2 && i.innerHeight < t2;
      n2 && t2 ? fe(e2 || o2) : n2 ? fe(e2) : t2 && fe(o2);
    }
    function fe(n2) {
      var t2 = se();
      n2 ? t2 || (ie(false, "internal"), ue(false, "internal"), x(h(kn)), O(At, hn), _(Qn().afterResponsive) && Qn().afterResponsive.call(Yn(), n2)) : t2 && (ie(Xn().autoScrolling, "internal"), ue(Xn().autoScrolling, "internal"), k(h(kn)), D(At, hn), _(Qn().afterResponsive) && Qn().afterResponsive.call(Yn(), n2));
    }
    function se() {
      return g(At, hn);
    }
    l.setResponsive = fe, rn.u("bindEvents", function() {
      i.addEventListener("load", function() {
        Qn().scrollOverflow && !Qn().scrollBar && (de.un(), de.cn());
      }), Qn().scrollOverflow && tt(cn().X).forEach(function(n2) {
        n2.addEventListener("scroll", de.ln), n2.addEventListener("wheel", de.sn), n2.addEventListener("keydown", de.sn), n2.addEventListener("keydown", de.vn);
      });
    });
    var ve, de = { dn: null, hn: null, pn: null, sn: function(n2) {
      if (!an.P)
        return I(n2), false;
    }, cn: function() {
      r.activeElement === this.dn && this.dn.blur(), h(".fp-overflow.active", cn().g.item)[0] && (this.dn = h(zn, cn().g.item)[0], this.dn.focus());
    }, un: function() {
      Qn().scrollOverflowMacStyle && !u && O(At, "fp-scroll-mac"), cn().X.forEach(function(n2) {
        if (!(g(n2.item, "fp-noscroll") || g(n2.item, xn) || g(n2.item, "fp-auto-height-responsive") && se())) {
          var t2 = de.gn(n2.item), e2 = de.mn(n2.item);
          e2 ? (O(t2, Cn), t2.setAttribute("tabindex", "-1")) : (D(t2, Cn), t2.removeAttribute("tabindex")), n2.K = e2;
        }
      });
    }, gn: function(n2) {
      return h(Dn, n2)[0] || n2;
    }, wn: function(n2) {
      return n2._ && n2.activeSlide ? n2.activeSlide.K : n2.K;
    }, mn: function(n2) {
      return n2.scrollHeight > i.innerHeight;
    }, bn: function(n2, t2) {
      if (!an.P)
        return false;
      if (!Qn().scrollOverflow)
        return true;
      var e2 = de.gn(t2), o2 = e2.scrollTop, i2 = n2 === "up" && o2 <= 0, r2 = n2 === "down" && e2.scrollHeight <= e2.offsetHeight + o2, a2 = i2 || r2;
      return a2 || (this.hn = new Date().getTime()), a2;
    }, yn: function() {
      this.pn = new Date().getTime();
      var n2 = this.pn - de.hn, t2 = (a || c) && an.N, e2 = an.B && n2 > 600;
      return t2 && n2 > 400 || e2;
    }, ln: (ve = 0, function(n2) {
      var t2 = n2.target.scrollTop, e2 = an.C !== "none" ? an.C : ve < t2 ? "down" : "up";
      ve = t2, _(Qn().onScrollOverflow) && St("onScrollOverflow", { position: t2, direction: e2 }), g(n2.target, Cn) && an.P && de.bn(e2, n2.target) && de.yn() && rn.l("onScrollOverflowScrolled", { direction: e2 });
    }) };
    function he(n2) {
      Qn().verticalCentered && (de.wn(n2) || g(n2.item, Pn) || O(n2.item, Pn));
    }
    function pe(n2) {
      var t2 = n2.slides.length, e2 = n2.on, o2 = n2.slides, i2 = 100 * t2, a2 = 100 / t2;
      if (!h(En, n2.item)[0]) {
        var u2 = r.createElement("div");
        u2.className = jn, L(e2, u2);
        var c2 = r.createElement("div");
        c2.className = Ln, L(e2, c2);
      }
      b(h(Rn, n2.item), { width: i2 + "%" }), t2 > 1 && (Qn().controlArrows && function(n3) {
        var t3 = n3.item, e3 = [Q(Qn().controlArrowsHTML[0]), Q(Qn().controlArrowsHTML[1])];
        C(h(En, t3)[0], e3), O(e3, Bn), O(e3[0], Hn), O(e3[1], "fp-next"), Qn().controlArrowColor !== "#fff" && (b(h(Vn, t3), { "border-color": "transparent transparent transparent " + Qn().controlArrowColor }), b(h(Wn, t3), { "border-color": "transparent " + Qn().controlArrowColor + " transparent transparent" })), Qn().loopHorizontal || x(h(Wn, t3));
      }(n2), Qn().slidesNavigation && function(n3) {
        var t3 = n3.item, e3 = n3.slides.length;
        j(Q('<div class="fp-slidesNav"><ul></ul></div>'), t3);
        var o3 = h(Fn, t3)[0];
        O(o3, "fp-" + Qn().slidesNavPosition);
        for (var i3 = 0; i3 < e3; i3++)
          j(Q('<li><a href="#"><span class="fp-sr-only">' + Pt(i3, "Slide", h(On, t3)[i3]) + "</span><span></span></a></li>"), h("ul", o3)[0]);
        b(o3, { "margin-left": "-" + o3.innerWidth / 2 + "px" });
        var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
        O(h("a", h("li", o3)[r2]), wn);
      }(n2)), o2.forEach(function(n3) {
        b(n3.item, { width: a2 + "%" }), Qn().verticalCentered && he(n3);
      });
      var l2 = n2.activeSlide || null;
      l2 != null && an.g && (an.g.index() !== 0 || an.g.index() === 0 && l2.index() !== 0) ? Kt(l2.item, "internal") : O(e2[0], wn);
    }
    var ge, me = null;
    function we(n2) {
      var t2 = n2.item, e2 = n2.on.length, o2 = n2.index();
      !cn().g && n2.isVisible && (O(t2, wn), Gt()), me = cn().g.item, Qn().paddingTop && b(t2, { "padding-top": Qn().paddingTop }), Qn().paddingBottom && b(t2, { "padding-bottom": Qn().paddingBottom }), Qn().sectionsColor[o2] !== void 0 && b(t2, { "background-color": Qn().sectionsColor[o2] }), Qn().anchors[o2] !== void 0 && t2.setAttribute("data-anchor", n2.anchor), e2 || he(n2);
    }
    l.getActiveSection = function() {
      return cn().g;
    };
    var be = { attributes: false, subtree: true, childList: true, characterData: true };
    function ye() {
      return d(h(Qn().slideSelector, Yn())).length !== cn().h;
    }
    function Se(n2) {
      var t2 = ye();
      (ye() || d(h(Qn().sectionSelector, Yn())).length !== cn().v) && !an.V && (Qn().observer && ge && ge.disconnect(), Yt(), Gt(), Qn().anchors = [], X(h(kn)), Zt(), Jn(), Qn().navigation && te(), t2 && (X(h(Fn)), X(h(In))), cn().p.forEach(function(n3) {
        n3.slides.length ? t2 && pe(n3) : we(n3);
      })), Qn().observer && ge && ge.observe(h(dn)[0], be);
    }
    rn.u("bindEvents", function() {
      var n2, t2, e2;
      Qn().observer && "MutationObserver" in window && (n2 = h(dn)[0], t2 = be, (e2 = new MutationObserver(Se)).observe(n2, t2), ge = e2), rn.u("contentChanged", Se);
    }), l.Sn = Se;
    var Te = function() {
      var n2 = false;
      try {
        var t2 = Object.defineProperty({}, "passive", { get: function() {
          n2 = true;
        } });
        V("testPassive", null, t2), K("testPassive", null, t2);
      } catch (n3) {
      }
      return function() {
        return n2;
      };
    }();
    function Me() {
      return !!Te() && { passive: false };
    }
    new Date().getTime();
    var xe, ke, Ae, Oe, De, je, Ee = (ke = new Date().getTime(), function(n2, t2) {
      var e2 = new Date().getTime(), o2 = n2 === "wheel" ? Qn().scrollingSpeed : 100;
      return e2 - ke >= o2 && (xe = t2(), ke = e2), xe === void 0 || xe;
    }), Le = (De = new Date().getTime(), je = [], { Tn: function(n2) {
      var t2 = (n2 = n2 || i.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), o2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0;
      Ae = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !o2;
      var r2 = new Date().getTime();
      Oe = e2 < 0 ? "down" : "up", je.length > 149 && je.shift(), je.push(Math.abs(t2));
      var a2 = r2 - De;
      De = r2, a2 > 200 && (je = []);
    }, Mn: function() {
      var n2 = tn(je, 10) >= tn(je, 70);
      return !!je.length && n2 && Ae;
    }, xn: function() {
      return Oe;
    } });
    function Re() {
      var n2 = Qn().css3 ? N(Qn()) + m() : nn(cn().p).item.offsetTop + nn(cn().p).item.offsetHeight, t2 = ct(n2);
      l.test.top = -n2 + "px", b(r.body, { "scroll-snap-type": "none" }), b(Dt, { "scroll-behavior": "unset" }), un({ P: false }), wt(t2.element, t2.options, Qn().scrollingSpeed, function() {
        setTimeout(function() {
          un({ T: true }), un({ P: true });
        }, 30);
      });
    }
    function Pe() {
      Yn().getBoundingClientRect().bottom >= 0 && Ce();
    }
    function Ce() {
      var n2 = ct(nn(cn().p).item.offsetTop);
      un({ P: false }), wt(n2.element, n2.options, Qn().scrollingSpeed, function() {
        un({ P: true }), un({ T: false }), un({ kn: false });
      });
    }
    var ze, Fe, Ne, Be, Ie, He = (ze = false, Fe = {}, Ne = {}, function(n2, t2, e2) {
      switch (n2) {
        case "set":
          Fe[t2] = new Date().getTime(), Ne[t2] = e2;
          break;
        case "isNewKeyframe":
          var o2 = new Date().getTime();
          ze = o2 - Fe[t2] > Ne[t2];
      }
      return ze;
    });
    function We() {
      var n2 = h(".fp-auto-height")[0] || se() && h(".fp-auto-height-responsive")[0];
      Qn().lazyLoading && n2 && h(".fp-section:not(.active)").forEach(function(n3) {
        var t2, e2, o2, i2, r2;
        e2 = (t2 = n3.getBoundingClientRect()).top, o2 = t2.bottom, i2 = e2 + 2 < an.W && e2 > 0, r2 = o2 > 2 && o2 < an.W, (i2 || r2) && kt(n3);
      });
    }
    function Ve(n2, t2) {
      var e2;
      e2 = n2, Qn().menu && Qn().menu.length && h(Qn().menu).forEach(function(n3) {
        n3 != null && (D(h(bn, n3), wn), O(h('[data-menuanchor="' + e2 + '"]', n3), wn));
      }), function(n3, t3) {
        var e3 = h(kn)[0];
        Qn().navigation && e3 != null && e3.style.display !== "none" && (D(h(bn, e3), wn), O(n3 ? h('a[href="#' + n3 + '"]', e3) : h("a", h("li", e3)[t3]), wn));
      }(n2, t2);
    }
    function Ue(n2, t2) {
      if (_(Qn().beforeLeave))
        return Ee(cn().S, function() {
          return St(n2, t2);
        });
    }
    function Ke(n2, t2, e2) {
      var o2 = n2.item;
      if (o2 != null) {
        var i2, r2, a2 = function(n3) {
          var t3 = n3.offsetHeight, e3 = n3.offsetTop, o3 = e3, i3 = e3 > an.H, r3 = o3 - m() + t3, a3 = Qn().bigSectionsDestination;
          return t3 > m() ? (i3 || a3) && a3 !== "bottom" || (o3 = r3) : (i3 || an.O && S(n3) == null) && (o3 = r3), un({ H: o3 }), o3;
        }(o2), u2 = { element: o2, callback: t2, isMovementUp: e2, dtop: a2, yMovement: st(cn().g, o2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: cn().g.index() + 1, localIsResizing: an.O, items: { origin: cn().g, destination: n2 }, direction: null };
        if (!(cn().g.item == o2 && !an.O || Qn().scrollBar && N(Qn()) === u2.dtop && !g(o2, xn))) {
          if (u2.activeSlide != null && (i2 = H(u2.activeSlide, "data-anchor"), r2 = T(u2.activeSlide, null)), !u2.localIsResizing) {
            var c2 = u2.yMovement;
            if (e2 !== void 0 && (c2 = e2 ? "up" : "down"), u2.direction = c2, _(Qn().beforeLeave) && Ue("beforeLeave", u2) === false)
              return;
            if (_(Qn().onLeave) && !St("onLeave", u2))
              return;
          }
          Qn().autoScrolling && Qn().continuousVertical && u2.isMovementUp !== void 0 && (!u2.isMovementUp && u2.yMovement == "up" || u2.isMovementUp && u2.yMovement == "down") && (u2 = function(n3) {
            un({ V: true });
            var t3 = cn().g.item;
            return n3.isMovementUp ? z(t3, J(t3, Tn)) : C(t3, Z(t3, Tn).reverse()), pt(cn().g.item.offsetTop), function() {
              for (var n4 = h(Dn), t4 = 0; t4 < n4.length; t4++)
                Kt(n4[t4], "internal");
            }(), n3.An = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = st(cn().g, n3.element), n3;
          }(u2)), u2.localIsResizing || xt(cn().g.item), O(o2, wn), D(B(o2), wn), Gt(), kt(o2), un({ P: l.test.On }), Lt(r2, i2, u2.anchorLink), function(n3) {
            var t3 = Qn().scrollingSpeed < 700, e3 = t3 ? 700 : Qn().scrollingSpeed;
            if (un({ C: "none", scrollY: Math.round(n3.dtop) }), rn.l("onPerformMovement"), Qn().css3 && Qn().autoScrolling && !Qn().scrollBar)
              ht("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), Qn().scrollingSpeed ? (clearTimeout(Be), Be = setTimeout(function() {
                _e(n3), un({ P: !t3 || l.test.On });
              }, Qn().scrollingSpeed)) : _e(n3);
            else {
              var o3 = ct(n3.dtop);
              l.test.top = -n3.dtop + "px", b(Dt, { "scroll-behavior": "unset" }), clearTimeout(Be), wt(o3.element, o3.options, Qn().scrollingSpeed, function() {
                Qn().scrollBar ? Be = setTimeout(function() {
                  _e(n3);
                }, 30) : (_e(n3), un({ P: !t3 || l.test.On }));
              });
            }
            t3 && (clearTimeout(Ie), Ie = setTimeout(function() {
              un({ P: true });
            }, e3));
          }(u2), un({ j: u2.anchorLink }), Ve(u2.anchorLink, u2.sectionIndex);
        }
      }
    }
    function _e(n2) {
      Qn().fitToSection && g(h(".fp-section.active")[0], xn) && b(r.body, { "scroll-snap-type": "none" }), un({ T: false }), function(n3) {
        n3.An != null && (n3.isMovementUp ? z(h(Tn)[0], n3.An) : C(h(Tn)[cn().p.length - 1], n3.An), pt(cn().g.item.offsetTop), function() {
          for (var n4 = h(Dn), t2 = 0; t2 < n4.length; t2++)
            Kt(n4[t2], "internal");
        }(), un({ V: false }));
      }(n2), _(Qn().afterLoad) && !n2.localIsResizing && St("afterLoad", n2), Gt(), n2.localIsResizing || Tt(n2.element), O(n2.element, yn), D(B(n2.element), yn), We(), de.cn(), un({ P: true }), _(n2.callback) && n2.callback();
    }
    function qe() {
      var n2 = cn().g.next();
      n2 || !Qn().loopBottom && !Qn().continuousVertical || (n2 = cn().p[0]), n2 != null ? Ke(n2, null, false) : Yn().scrollHeight < At.scrollHeight && rn.l("scrollBeyondFullpage");
    }
    function Ge() {
      var n2 = cn().g.prev();
      n2 || !Qn().loopTop && !Qn().continuousVertical || (n2 = nn(cn().p)), n2 != null && Ke(n2, null, true);
    }
    l.moveTo = moveTo, l.getScrollY = function() {
      return an.scrollY;
    }, rn.u("onDestroy", function() {
      clearTimeout(Be), clearTimeout(Ie);
    }), l.moveSectionDown = qe, l.moveSectionUp = Ge;
    var Ye = 0;
    function Qe(n2) {
      Qn().autoScrolling && (an.P && (n2.pageY < Ye && Bt().m.up ? Ge() : n2.pageY > Ye && Bt().m.down && qe()), Ye = n2.pageY);
    }
    function Xe(n2) {
      if (Bt().m[n2]) {
        var t2 = n2 === "down" ? qe : Ge;
        Qn().scrollOverflow && de.wn(cn().g) ? de.bn(n2, cn().g.item) && de.yn() && t2() : t2();
      }
    }
    var $e, Je, Ze, no = 0, to = 0, eo = 0, oo = 0, io = (i.PointerEvent && (Ze = { down: "pointerdown", move: "pointermove" }), Ze), ro = { Dn: "ontouchmove" in window ? "touchmove" : io.move, jn: "ontouchstart" in window ? "touchstart" : io.down };
    function ao(n2) {
      var t2 = P(n2.target, Tn) || cn().g.item, e2 = de.wn(cn().g);
      if (uo(n2)) {
        un({ N: true, B: false }), Qn().autoScrolling && (!e2 || e2 && !an.P) && I(n2);
        var o2 = fo(n2);
        eo = o2.y, oo = o2.x;
        var r2 = Math.abs(no - eo) > i.innerHeight / 100 * Qn().touchSensitivity, a2 = Math.abs(to - oo) > w() / 100 * Qn().touchSensitivity, u2 = h(En, t2).length && Math.abs(to - oo) > Math.abs(no - eo), c2 = no > eo ? "down" : "up";
        un({ C: u2 ? to > oo ? "right" : "left" : c2 }), u2 ? !an.A && a2 && (to > oo ? Bt().m.right && rn.l("moveSlideRight", { section: t2 }) : Bt().m.left && rn.l("moveSlideLeft", { section: t2 })) : Qn().autoScrolling && an.P && r2 && Xe(c2);
      }
    }
    function uo(n2) {
      return n2.pointerType === void 0 || n2.pointerType != "mouse";
    }
    function co(n2) {
      if (Qn().fitToSection && un({ R: false }), uo(n2)) {
        var t2 = fo(n2);
        no = t2.y, to = t2.x;
      }
      V("touchend", lo);
    }
    function lo() {
      K("touchend", lo), un({ N: false });
    }
    function fo(n2) {
      var t2 = {};
      return t2.y = n2.pageY !== void 0 && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = n2.pageX !== void 0 && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, c && uo(n2) && Qn().scrollBar && n2.touches !== void 0 && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
    }
    function so(n2) {
      Qn().autoScrolling && uo(n2) && Bt().m.up && (an.P || I(n2));
    }
    function vo(n2, t2) {
      var e2 = t2 == null ? cn().g.item : t2, o2 = et(an.p, e2), i2 = h(En, e2)[0];
      if (!(i2 == null || an.A || o2.slides.length < 2)) {
        var r2 = o2.activeSlide, a2 = n2 === "left" ? r2.prev() : r2.next();
        if (!a2) {
          if (!Qn().loopHorizontal)
            return;
          a2 = n2 === "left" ? nn(o2.slides) : o2.slides[0];
        }
        un({ A: !l.test.On }), Wt(i2, a2.item, n2);
      }
    }
    function ho(n2) {
      vo("left", n2);
    }
    function po(n2) {
      vo("right", n2);
    }
    function go(n2) {
      var t2 = cn().p.filter(function(t3) {
        return t3.anchor === n2;
      })[0];
      if (!t2) {
        var e2 = n2 !== void 0 ? n2 - 1 : 0;
        t2 = cn().p[e2];
      }
      return t2;
    }
    function mo(n2) {
      n2 != null && Wt(P(n2, En), n2);
    }
    function wo(n2, t2) {
      var e2 = go(n2);
      if (e2 != null) {
        var o2 = function(n3, t3) {
          var e3 = t3.slides.filter(function(t4) {
            return t4.anchor === n3;
          })[0];
          return e3 == null && (n3 = n3 !== void 0 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
        }(t2, e2);
        e2.anchor === an.j || g(e2.item, wn) ? mo(o2) : Ke(e2, function() {
          mo(o2);
        });
      }
    }
    function bo(n2, t2) {
      var e2 = go(n2);
      t2 !== void 0 ? wo(n2, t2) : e2 != null && Ke(e2);
    }
    function yo() {
      clearTimeout(Je), U("keydown", To), U("keyup", Mo);
    }
    function So() {
      var n2 = r.activeElement;
      return G(n2, "textarea") || G(n2, "input") || G(n2, "select") || H(n2, "contentEditable") == "true" || H(n2, "contentEditable") == "";
    }
    function To(n2) {
      clearTimeout(Je);
      var t2 = n2.keyCode, e2 = [37, 39].indexOf(t2) > -1, o2 = Qn().autoScrolling || e2;
      t2 === 9 ? function(n3) {
        var t3 = n3.shiftKey, e3 = r.activeElement, o3 = ko(ut(cn().g.item));
        function i2(n4) {
          return I(n4), o3[0] ? o3[0].focus() : null;
        }
        (function(n4) {
          var t4 = ko(r), e4 = t4.indexOf(r.activeElement), o4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], i3 = P(o4, On), a2 = P(o4, Tn);
          return !i3 && !a2;
        })(n3) || (e3 ? P(e3, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (e3 = i2(n3)) : i2(n3), (!t3 && e3 == o3[o3.length - 1] || t3 && e3 == o3[0]) && I(n3));
      }(n2) : !So() && Qn().keyboardScrolling && o2 && ($e = n2.ctrlKey, Je = setTimeout(function() {
        !function(n3) {
          var t3 = n3.shiftKey, e3 = r.activeElement, o3 = G(e3, "video") || G(e3, "audio"), i2 = de.bn("up", cn().g.item), a2 = de.bn("down", cn().g.item), u2 = [37, 39].indexOf(n3.keyCode) > -1;
          if (Oo(n3), an.P || u2)
            switch (un({ S: "keydown" }), n3.keyCode) {
              case 38:
              case 33:
                Bt().k.up && i2 && (an.T ? rn.l("onKeyDown", { e: n3 }) : Ge());
                break;
              case 32:
                if (t3 && Bt().k.up && !o3 && i2) {
                  Ge();
                  break;
                }
              case 40:
              case 34:
                if (Bt().k.down && a2) {
                  if (an.T)
                    return;
                  n3.keyCode === 32 && o3 || qe();
                }
                break;
              case 36:
                Bt().k.up && bo(1);
                break;
              case 35:
                Bt().k.down && bo(cn().p.length);
                break;
              case 37:
                Bt().k.left && ho();
                break;
              case 39:
                Bt().k.right && po();
            }
        }(n2);
      }, 0));
    }
    function Mo(n2) {
      an.I && ($e = n2.ctrlKey);
    }
    function xo() {
      un({ I: false }), $e = false;
    }
    function ko(n2) {
      return [].slice.call(h('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
        return H(n3, "tabindex") !== "-1" && n3.offsetParent !== null;
      });
    }
    function Ao(n2) {
      So() || Oo(n2);
    }
    function Oo(n2) {
      (function(n3) {
        return [40, 38, 32, 33, 34].indexOf(n3.keyCode) > -1 && !an.T;
      })(n2) && !P(n2.target, zn) && n2.preventDefault();
    }
    l.moveSlideLeft = ho, l.moveSlideRight = po, l.moveTo = bo, rn.u("bindEvents", function() {
      V("blur", xo), W("keydown", To), At.addEventListener("keydown", Ao), W("keyup", Mo), rn.u("onDestroy", yo);
    });
    var Do = new Date().getTime(), jo = [];
    function Eo(n2) {
      n2 ? (function() {
        var n3, t2 = "";
        i.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
        var e2 = "onwheel" in r.createElement("div") ? "wheel" : r.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", o2 = Me();
        e2 == "DOMMouseScroll" ? r[n3](t2 + "MozMousePixelScroll", Lo, o2) : r[n3](t2 + e2, Lo, o2);
      }(), Yn().addEventListener("mousedown", Ro), Yn().addEventListener("mouseup", Po)) : (r.addEventListener ? (U("mousewheel", Lo, false), U("wheel", Lo, false), U("MozMousePixelScroll", Lo, false)) : r.detachEvent("onmousewheel", Lo), Yn().removeEventListener("mousedown", Ro), Yn().removeEventListener("mouseup", Po));
    }
    function Lo(n2) {
      var t2 = new Date().getTime(), e2 = g(h(".fp-completely")[0], "fp-normal-scroll"), o2 = function(n3, t3) {
        new Date().getTime();
        var e3 = cn().T && n3.getBoundingClientRect().bottom >= 0 && Le.xn() === "up", o3 = cn().kn;
        if (o3)
          return I(t3), false;
        if (cn().T) {
          if (e3) {
            var i2;
            if (!(o3 || He("isNewKeyframe", "beyondFullpage") && Le.Mn()))
              return (i2 = ct(nn(cn().p).item.offsetTop + nn(cn().p).item.offsetHeight)).element.scrollTo(0, i2.options), un({ kn: false }), I(t3), false;
            if (Le.Mn())
              return e3 = false, un({ kn: true }), un({ S: "wheel" }), Ce(), I(t3), false;
          } else
            He("set", "beyondFullpage", 1e3);
          if (!o3 && !e3)
            return true;
        }
      }(Yn(), n2);
      if (an.B || un({ N: false, B: true, C: "none" }), !Bt().m.down && !Bt().m.up)
        return I(n2), false;
      if (o2)
        return true;
      if (o2 === false)
        return I(n2), false;
      if (Qn().autoScrolling && !$e && !e2) {
        var r2 = (n2 = n2 || i.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), u2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0, c2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !u2, l2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
        jo.length > 149 && jo.shift(), jo.push(Math.abs(r2)), Qn().scrollBar && I(n2);
        var f2 = t2 - Do;
        return Do = t2, f2 > 200 && (jo = []), un({ F: l2 }), an.P && tn(jo, 10) >= tn(jo, 70) && c2 && (un({ S: "wheel" }), Xe(a2 < 0 ? "down" : "up")), false;
      }
      Qn().fitToSection && un({ R: false });
    }
    function Ro(n2) {
      var t2;
      n2.which == 2 && (t2 = n2.pageY, Ye = t2, Yn().addEventListener("mousemove", Qe));
    }
    function Po(n2) {
      n2.which == 2 && Yn().removeEventListener("mousemove", Qe);
    }
    function Co(n2) {
      n2 ? (Eo(true), function() {
        if (a || c) {
          Qn().autoScrolling && (At.removeEventListener(ro.Dn, so, { passive: false }), At.addEventListener(ro.Dn, so, { passive: false }));
          var n3 = Qn().touchWrapper;
          n3.removeEventListener(ro.jn, co), n3.removeEventListener(ro.Dn, ao, { passive: false }), n3.addEventListener(ro.jn, co), n3.addEventListener(ro.Dn, ao, { passive: false });
        }
      }()) : (Eo(false), function() {
        if (a || c) {
          Qn().autoScrolling && (At.removeEventListener(ro.Dn, ao, { passive: false }), At.removeEventListener(ro.Dn, so, { passive: false }));
          var n3 = Qn().touchWrapper;
          n3.removeEventListener(ro.jn, co), n3.removeEventListener(ro.Dn, ao, { passive: false });
        }
      }());
    }
    l.setMouseWheelScrolling = Eo;
    var zo = true;
    function Fo() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
        U(n2, Bo, true);
      });
    }
    function No(n2, t2) {
      document["fp_" + n2] = t2, W(n2, Bo, true);
    }
    function Bo(n2) {
      var t2 = n2.type, e2 = false, o2 = t2 === "mouseleave" ? n2.toElement || n2.relatedTarget : n2.target;
      o2 != document && o2 ? (t2 === "touchend" && (zo = false, setTimeout(function() {
        zo = true;
      }, 800)), (t2 !== "mouseenter" || zo) && (Qn().normalScrollElements.split(",").forEach(function(n3) {
        if (!e2) {
          var t3 = G(o2, n3), i2 = P(o2, n3);
          (t3 || i2) && (l.shared.En || Co(false), l.shared.En = true, e2 = true);
        }
      }), !e2 && l.shared.En && (Co(true), l.shared.En = false))) : Co(true);
    }
    function Io(n2, t2) {
      gt(0, "internal"), bo(n2, t2), gt(Xn().scrollingSpeed, "internal");
    }
    rn.u("bindEvents", function() {
      Qn().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
        No(n2, false);
      }), ["mouseleave", "touchend"].forEach(function(n2) {
        No(n2, true);
      })), rn.u("onDestroy", Fo);
    }), l.silentMoveTo = Io;
    var Ho, Wo = m(), Vo = w(), Uo = false;
    function Ko() {
      clearTimeout(Ho), K("resize", _o);
    }
    function _o() {
      Uo || (Qn().autoScrolling && !Qn().scrollBar || !Qn().fitToSection) && Go(m()), Uo = true, clearTimeout(Ho), Ho = setTimeout(function() {
        !function() {
          if (un({ O: true }), Go(""), !Qn().fitToSection || Qn().autoScrolling || an.T || function() {
            if (!Qn().autoScrolling || Qn().scrollBar) {
              var n3 = 0.01 * i.innerHeight;
              r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
            }
          }(), rn.l("contentChanged"), Gt(), le(), a) {
            var n2 = r.activeElement;
            if (!G(n2, "textarea") && !G(n2, "input") && !G(n2, "select")) {
              var t2 = m();
              Math.abs(t2 - Wo) > 20 * Math.max(Wo, t2) / 100 && (qo(true), Wo = t2);
            }
          } else
            e2 = m(), o2 = w(), an.W === e2 && Vo === o2 || (un({ W: e2 }), Vo = o2, qo(true));
          var e2, o2;
          un({ O: false });
        }(), Uo = false;
      }, 400);
    }
    function qo(n2) {
      if (!g(Yn(), gn)) {
        un({ O: true, W: m(), Ln: w() });
        for (var t2 = cn().p, e2 = 0; e2 < t2.length; ++e2) {
          var o2 = t2[e2], r2 = h(En, o2.item)[0];
          o2.slides.length > 1 && Wt(r2, o2.activeSlide.item);
        }
        Qn().scrollOverflow && de.un();
        var a2 = cn().g.index();
        an.T || a2 && Io(a2 + 1), un({ O: false }), _(Qn().afterResize) && n2 && Qn().afterResize.call(Yn(), i.innerWidth, i.innerHeight), _(Qn().afterReBuild) && !n2 && Qn().afterReBuild.call(Yn()), q(Yn(), "afterRebuild");
      }
    }
    function Go(n2) {
      var t2 = n2 === "" ? "" : n2 + "px";
      cn().p.forEach(function(n3) {
        b(n3.item, { height: t2 });
      });
    }
    function Yo() {
      var n2, t2, e2 = i.location.hash;
      if (e2.length) {
        var o2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
        n2 = r2 ? "/" + o2[1] : decodeURIComponent(o2[0]);
        var a2 = r2 ? o2[2] : o2[1];
        a2 && a2.length && (t2 = decodeURIComponent(a2));
      }
      return { section: n2, Z: t2 };
    }
    function Qo() {
      K("hashchange", Xo);
    }
    function Xo() {
      if (!an.D && !Qn().lockAnchors) {
        var n2 = Yo(), t2 = n2.section, e2 = n2.Z, o2 = an.j === void 0, i2 = an.j === void 0 && e2 === void 0 && !an.A;
        t2 && t2.length && (t2 && t2 !== an.j && !o2 || i2 || !an.A && an.L != e2) && rn.l("onScrollPageAndSlide", { Rn: t2, slideAnchor: e2 });
      }
    }
    function $o(n2) {
      var t2 = n2.target;
      P(t2, Qn().menu + " [data-menuanchor]") && Jo.call(t2, n2);
    }
    function Jo(n2) {
      un({ S: "menu" }), !h(Qn().menu)[0] || !Qn().lockAnchors && Qn().anchors.length || (I(n2), rn.l("onMenuClick", { anchor: H(this, "data-menuanchor") }));
    }
    function Zo(n2) {
      var t2 = n2.target;
      t2 && P(t2, "#fp-nav a") ? ee.call(t2, n2.e) : G(t2, ".fp-tooltip") ? ne.call(t2) : (G(t2, Nn) || P(t2, Nn) != null) && Ct.call(t2, n2.e);
    }
    l.reBuild = qo, rn.u("bindEvents", function() {
      V("resize", _o), rn.u("onDestroy", Ko);
    }), l.setLockAnchors = function(n2) {
      Qn().lockAnchors = n2;
    }, rn.u("bindEvents", function() {
      V("hashchange", Xo), rn.u("onDestroy", Qo);
    }), rn.u("bindEvents", function() {
      W("wheel", Le.Tn, Me()), rn.u("scrollBeyondFullpage", Re), rn.u("onKeyDown", Pe);
    }), rn.u("bindEvents", function() {
      rn.u("onClickOrTouch", $o);
    }), rn.u("bindEvents", function() {
      rn.u("onClickOrTouch", Zo);
    });
    var ni, ti = 0;
    function ei(n2) {
      var t2, e2, o2, i2, a2;
      if (!an.O && cn().g && (nn(cn().p), !cn().T && !cn().kn && (!Qn().autoScrolling || Qn().scrollBar))) {
        var u2 = N(Qn()), c2 = function(n3) {
          var t3 = n3 > ti ? "down" : "up";
          return ti = n3, un({ H: n3 }), t3;
        }(u2), l2 = 0, f2 = u2 + m() / 2, s2 = At.scrollHeight - m() === u2, v2 = cn().p;
        if (un({ scrollY: u2 }), s2)
          l2 = v2.length - 1;
        else if (u2)
          for (var d2 = 0; d2 < v2.length; ++d2)
            v2[d2].item.offsetTop <= f2 && (l2 = d2);
        else
          l2 = 0;
        if (o2 = c2, i2 = cn().g.item.offsetTop, a2 = i2 + m(), (o2 == "up" ? a2 >= N(Qn()) + m() : i2 <= N(Qn())) && (g(cn().g.item, yn) || (O(cn().g.item, yn), D(B(cn().g.item), yn))), e2 = (t2 = v2[l2]).item, !t2.isActive) {
          un({ D: true });
          var h2, p2, w2 = cn().g.item, y2 = cn().g.index() + 1, S2 = st(cn().g, e2), T2 = t2.anchor, M2 = t2.index() + 1, x2 = t2.activeSlide, k2 = { g: w2, sectionIndex: M2 - 1, anchorLink: T2, element: e2, leavingSection: y2, direction: S2, items: { origin: cn().g, destination: t2 } };
          x2 && (p2 = x2.anchor, h2 = x2.index()), an.P && (O(e2, wn), D(B(e2), wn), _(Qn().beforeLeave) && Ue("beforeLeave", k2), _(Qn().onLeave) && St("onLeave", k2), _(Qn().afterLoad) && St("afterLoad", k2), xt(w2), kt(e2), Tt(e2), Ve(T2, M2 - 1), Qn().anchors.length && un({ j: T2 }), Lt(h2, p2, T2), Gt()), Qn().fitToSection && (clearTimeout(ni), ni = setTimeout(function() {
            un({ D: false }), an.p.filter(function(n3) {
              var t3 = n3.item.getBoundingClientRect();
              return Math.round(t3.bottom) === Math.round(m()) || Math.round(t3.top) === 0;
            }).length || b(r.body, { "scroll-snap-type": "y mandatory" });
          }, 300));
        }
      }
    }
    function oi(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Nt(n2, t3, "k");
      }) : (Nt(n2, "all", "k"), Qn().keyboardScrolling = n2);
    }
    function ii(n2) {
      var t2 = n2.index();
      Qn().anchors[t2] !== void 0 && n2.isActive && Ve(Qn().anchors[t2], t2), Qn().menu && Qn().css3 && P(h(Qn().menu)[0], dn) != null && h(Qn().menu).forEach(function(n3) {
        At.appendChild(n3);
      });
    }
    function ri() {
      b(function(n3, t3) {
        var e3 = [n3];
        do {
          n3 = n3.parentNode, e3.push(n3);
        } while (!G(n3, "body"));
        return e3;
      }(Yn()), { height: "100%", position: "relative" }), O(Yn(), vn), O(Ot, mn), un({ W: m() }), D(Yn(), gn), Zt();
      for (var n2 = cn().G, t2 = 0; t2 < n2.length; t2++) {
        var e2 = n2[t2], o2 = e2.on;
        e2.item.setAttribute("data-fp-styles", H(e2.item, "style")), we(e2), ii(e2), o2.length > 0 && pe(e2);
      }
      Qn().fixedElements && Qn().css3 && h(Qn().fixedElements).forEach(function(n3) {
        At.appendChild(n3);
      }), Qn().navigation && te(), h('iframe[src*="youtube.com/embed/"]', Yn()).forEach(function(n3) {
        var t3, e3;
        e3 = H(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
      });
    }
    function ai() {
      var n2, t2, e2 = cn().g, o2 = cn().g.item;
      O(o2, yn), kt(o2), We(), Tt(o2), t2 = go((n2 = Yo()).section), n2.section && t2 && (t2 === void 0 || t2.index() !== T(me)) || !_(Qn().afterLoad) || St("afterLoad", { g: o2, element: o2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: cn().g, destination: cn().g } }), _(Qn().afterRender) && St("afterRender");
    }
    function ui(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Nt(n2, t3, "m");
      }) : Nt(n2, "all", "m");
    }
    function ci() {
      var n2 = Yo(), t2 = n2.section, e2 = n2.Z;
      t2 && (Qn().animateAnchor ? wo(t2, e2) : Io(t2, e2));
    }
    function li() {
      var n2 = Qn().licenseKey;
      Qn() && an.Pn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length : (s("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), s("error", "https://github.com/alvarotrigo/fullPage.js#options")), g(Ot, mn) ? s("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Qn().continuousVertical && (Qn().loopTop || Qn().loopBottom) && (Qn().continuousVertical = false, s("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !Qn().scrollOverflow || !Qn().scrollBar && Qn().autoScrolling || s("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !Qn().continuousVertical || !Qn().scrollBar && Qn().autoScrolling || (Qn().continuousVertical = false, s("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), f.forEach(function(n3) {
        Qn()[n3] && s("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + n3);
      }), Qn().anchors.forEach(function(n3) {
        var t2 = [].slice.call(h("[name]")).filter(function(t3) {
          return H(t3, "name") && H(t3, "name").toLowerCase() == n3.toLowerCase();
        }), e2 = [].slice.call(h("[id]")).filter(function(t3) {
          return H(t3, "id") && H(t3, "id").toLowerCase() == n3.toLowerCase();
        });
        if (e2.length || t2.length) {
          s("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var o2 = e2.length ? "id" : "name";
          (e2.length || t2.length) && s("error", '"' + n3 + '" is is being used by another element `' + o2 + "` property");
        }
      }));
    }
    function fi(n2, t2) {
      var e2;
      if (At = h("body")[0], Ot = h("html")[0], Dt = h("html, body"), !g(Ot, mn))
        return e2 = typeof n2 == "string" ? h(n2)[0] : n2, Un.touchWrapper = e2, function(n3) {
          Gn = p({}, Un, n3), qn = Object.assign({}, Gn);
        }(t2), function(n3) {
          Kn = n3;
        }(typeof n2 == "string" ? h(n2)[0] : n2), rn.l("onInitialise"), li(), l.getFullpageData = function() {
          return { options: Qn() };
        }, l.version = "4.0.7", l.test = Object.assign(l.test, { top: "0px", J: "translate3d(0px, 0px, 0px)", tn: function() {
          for (var n3 = [], t3 = 0; t3 < h(Qn().sectionSelector, Yn()).length; t3++)
            n3.push("translate3d(0px, 0px, 0px)");
          return n3;
        }(), left: function() {
          for (var n3 = [], t3 = 0; t3 < h(Qn().sectionSelector, Yn()).length; t3++)
            n3.push(0);
          return n3;
        }(), options: Qn(), setAutoScrolling: null }), l.shared = Object.assign(l.shared, { Cn: null, En: false }), i.fullpage_api = l, Yn() && (rn.l("beforeInit"), Yt(), Gt(), Qn().scrollBar = Qn().scrollBar || Qn().hybrid, Jn(), ri(), ce(true), ui(true), Co(true), ie(Qn().autoScrolling, "internal"), le(), jt(), r.readyState === "complete" && ci(), V("load", ci), ai(), Yt(), Gt(), rn.l("bindEvents")), i.fullpage_api;
      li();
    }
    return rn.u("onDestroy", function() {
      clearTimeout(ni), clearTimeout(void 0);
    }), rn.u("bindEvents", function() {
      V("scroll", ei), r.body.addEventListener("scroll", ei), rn.u("onScrollPageAndSlide", function(n2) {
        wo(n2.Rn, n2.slideAnchor);
      }), rn.u("onMenuClick", function(n2) {
        bo(n2.anchor, void 0);
      }), rn.u("onScrollOverflowScrolled", function(n2) {
        (n2.direction === "down" ? qe : Ge)();
      }), rn.u("scrollPage", function(n2) {
        Ke(n2.destination);
      });
    }), rn.u("onDestroy", function() {
      K("scroll", ei);
    }), l.getActiveSlide = function() {
      return yt(cn().g.activeSlide);
    }, l.getScrollX = function() {
      return an.scrollX;
    }, rn.u("bindEvents", function() {
      rn.u("onDestroy", Vt), rn.u("landscapeScroll", function(n2) {
        Wt(n2.slides, n2.destination);
      }), rn.u("moveSlideRight", function(n2) {
        po(n2.section);
      }), rn.u("moveSlideLeft", function(n2) {
        ho(n2.section);
      });
    }), rn.u("bindEvents", function() {
      var n2 = Qn().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(Qn().credits.label, "\n            </a>\n        </div>\n    "), o2 = nn(an.p), i2 = Qn().credits.enabled && !an.Pn;
      o2 && o2.item && i2 && o2.item.insertAdjacentHTML("beforeend", e2);
    }), function() {
      rn.u("onInitialise", function() {
        var t3, u2;
        un({ Pn: (Qn().licenseKey, t3 = Qn().licenseKey, u2 = function(t4) {
          var e3 = parseInt("514").toString(16);
          if (!t4 || t4.length < 29 || t4.split(n2[0]).length === 4)
            return null;
          var o3 = ["Each", "for"][i2()]().join(""), u3 = t4[["split"]]("-"), c2 = [];
          u3[o3](function(n3, t5) {
            if (t5 < 4) {
              var o4 = function(n4) {
                var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][i2()]().join("");
                return window[e4](t6) ? r2(t6) : function(n5) {
                  return n5 - wn.length;
                }(t6);
              }(n3);
              c2.push(o4);
              var a3 = r2(n3[o4]);
              if (t5 === 1) {
                var u4 = ["pa", "dS", "t", "art"].join("");
                a3 = a3.toString()[u4](2, "0");
              }
              e3 += a3, t5 !== 0 && t5 !== 1 || (e3 += "-");
            }
          });
          var l2 = 0, f2 = "";
          return t4.split("-").forEach(function(n3, t5) {
            if (t5 < 4) {
              for (var e4 = 0, o4 = 0; o4 < 4; o4++)
                o4 !== c2[t5] && (e4 += Math.abs(r2(n3[o4])), isNaN(n3[o4]) || l2++);
              var i3 = a2(e4);
              f2 += i3;
            }
          }), f2 += a2(l2), { zn: new Date(e3 + "T00:00"), Fn: e3.split("-")[2] === 8 * (wn.length - 2) + "", Nn: f2 };
        }(t3), u2 && (Qn().credits && u2 && e2 <= u2.zn && u2.Nn === t3.split(n2[0])[4] || function(n3) {
          var t4 = o2[i2()]().join("");
          return n3 && t4.indexOf(n3) === 0 && n3.length === t4.length;
        }(t3) || u2.Fn) || false) });
      });
      var n2 = ["-"], t2 = "2022-4-9".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), o2 = ["se", "licen", "-", "v3", "l", "gp"];
      function i2() {
        return [["re", "verse"].join("")]["".length];
      }
      function r2(n3) {
        return n3 ? isNaN(n3) ? n3.charCodeAt(0) - 72 : n3 : "";
      }
      function a2(n3) {
        var t3 = 72 + n3;
        return t3 > 90 && t3 < 97 && (t3 += 15), String.fromCharCode(t3).toUpperCase();
      }
    }(), l.setKeyboardScrolling = oi, l.shared.Cn = ai, l.setAllowScrolling = ui, l.destroy = function(n2) {
      ie(false, "internal"), ui(true), Co(false), oi(false), O(Yn(), gn), rn.l("onDestroy"), n2 && (pt(0), h("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Yn()).forEach(function(n3) {
        en(n3, "src");
      }), h("img[data-srcset]").forEach(function(n3) {
        en(n3, "srcset");
      }), X(h("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(tt(cn().p), { height: "", "background-color": "", padding: "" }), b(tt(cn().slides), { width: "" }), b(Yn(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), b(Dt, { overflow: "", height: "" }), D(Ot, mn), D(At, hn), At.className.split(/\s+/).forEach(function(n3) {
        n3.indexOf("fp-viewing") === 0 && D(At, n3);
      }), tt(cn().X).forEach(function(n3) {
        Qn().scrollOverflow && D(n3, Cn), D(n3, "fp-table active " + yn), H(n3, "data-fp-styles") && n3.setAttribute("style", H(n3, "data-fp-styles")), g(n3, Sn) && !_n && n3.removeAttribute("data-anchor");
      }), vt(Yn()), [Mn, Rn, En].forEach(function(n3) {
        h(n3, Yn()).forEach(function(n4) {
          R(n4);
        });
      }), b(Yn(), { "-webkit-transition": "none", transition: "none" }), i.scrollTo(0, 0), [Sn, An, Ln].forEach(function(n3) {
        D(h("." + n3), n3);
      }));
    }, i.fp_easings = p(i.fp_easings, { easeInOutCubic: function(n2, t2, e2, o2) {
      return (n2 /= o2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
    } }), i.jQuery && function(n2, t2) {
      n2 && t2 ? n2.fn.fullpage = function(e2) {
        e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(l).forEach(function(n3) {
          Qn().$.fn.fullpage[n3] = l[n3];
        });
      } : s("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(i.jQuery, fi), fi;
  });
})(fullpage_min);
var fullpage = fullpage_min.exports;
const EVENTS = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
];
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "FullPage",
  props: {
    options: {
      type: Object,
      default() {
      }
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      events: EVENTS.reduce((eventsHandlers, event) => {
        return __spreadProps(__spreadValues({}, eventsHandlers), {
          [event]: (...args) => {
            this.emitEvent(event, args);
          }
        });
      }, {}),
      api: void 0
    };
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.build();
      }
    }
  },
  mounted() {
    !this.skipInit && this.init();
  },
  beforeUnmount() {
    if (typeof this.api !== "undefined") {
      this.destroy();
    }
  },
  methods: {
    build() {
      let slideSelector = this.options.slideSelector || ".slide";
      let sectionSelector = this.options.sectionSelector || ".section";
      const activeSectionIndex = window.fp_utils.index(document.querySelector(sectionSelector + ".active"));
      const activeSlide = document.querySelector(sectionSelector + ".active " + slideSelector + ".active");
      const activeSlideIndex = activeSlide ? window.fp_utils.index(activeSlide) : -1;
      this.destroy();
      if (activeSectionIndex > -1) {
        window.fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], "active");
      }
      if (activeSlideIndex > -1) {
        window.fp_utils.addClass(activeSlide, "active");
      }
      this.init();
    },
    destroy() {
      if (typeof window.fullpage_api !== "undefined" && typeof window.fullpage_api.destroy !== "undefined") {
        window.fullpage_api.destroy("all");
      }
    },
    emitEvent(name, args) {
      this.$emit(name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...args);
      if (Object.prototype.hasOwnProperty.call(this.options, name)) {
        this.options[name].apply(this, args);
      }
    },
    init() {
      this.api = new fullpage(this.$refs.fullpage, this.options);
    }
  }
};
const _hoisted_1 = { ref: "fullpage" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ], 512);
}
var FullPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = {
  install(Vue) {
    Vue.component("FullPage", FullPage);
  }
};
export { index as default };
