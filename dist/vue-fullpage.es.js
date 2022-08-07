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
* vue-fullpage 0.2.3
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
import { openBlock, createElementBlock, renderSlot } from "vue";
var fullpage_min = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var fullpage_extensions_min = { exports: {} };
/*!
* fullPage 4.0.10
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
      for (var l2, u2 = o(i2.length), c2 = t(e2) ? Object(new e2(u2)) : new Array(u2), s2 = 0; s2 < u2; )
        l2 = i2[s2], c2[s2] = a2 ? r2 === void 0 ? a2(l2, s2) : a2.call(r2, l2, s2) : l2, s2 += 1;
      return c2.length = u2, c2;
    }));
    var i = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), l = /(Mac|iPhone|iPod|iPad)/i.test(i.navigator.userAgent), u = "ontouchstart" in i || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, c = { test: {}, shared: {} };
    function s(n2, t2) {
      i.console && i.console[n2] && i.console[n2]("fullPage: " + t2);
    }
    function f(n2) {
      return i.getComputedStyle(n2).display !== "none";
    }
    function d(n2) {
      return Array.from(n2).filter(function(n3) {
        return f(n3);
      });
    }
    function v(n2, t2) {
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
    function h(n2, t2) {
      return n2 != null && n2.classList.contains(t2);
    }
    function g() {
      return "innerHeight" in i ? i.innerHeight : r.documentElement.offsetHeight;
    }
    function m() {
      return i.innerWidth;
    }
    function w(n2, t2) {
      var e2;
      for (e2 in n2 = M(n2), t2)
        if (t2.hasOwnProperty(e2) && e2 !== null)
          for (var o2 = 0; o2 < n2.length; o2++)
            n2[o2].style[e2] = t2[e2];
      return n2;
    }
    function b(n2, t2) {
      if (t2 == null)
        return n2.previousElementSibling;
      var e2 = b(n2);
      return e2 && X(e2, t2) ? e2 : null;
    }
    function S(n2, t2) {
      if (t2 == null)
        return n2.nextElementSibling;
      var e2 = S(n2);
      return e2 && X(e2, t2) ? e2 : null;
    }
    function y(n2, t2) {
      n2 = x(n2) ? n2[0] : n2;
      for (var e2 = t2 != null ? v(t2, n2.parentNode) : n2.parentNode.childNodes, o2 = 0, i2 = 0; i2 < e2.length; i2++) {
        if (e2[i2] == n2)
          return o2;
        e2[i2].nodeType == 1 && o2++;
      }
      return -1;
    }
    function M(n2) {
      return x(n2) ? n2 : [n2];
    }
    function T(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "none";
      return n2;
    }
    function A(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "block";
      return n2;
    }
    function x(n2) {
      return Object.prototype.toString.call(n2) === "[object Array]" || Object.prototype.toString.call(n2) === "[object NodeList]";
    }
    function O(n2, t2) {
      n2 = M(n2);
      for (var e2 = 0; e2 < n2.length; e2++)
        n2[e2].classList.add(t2);
      return n2;
    }
    function E(n2, t2) {
      n2 = M(n2);
      for (var e2 = t2.split(" "), o2 = 0; o2 < e2.length; o2++) {
        t2 = e2[o2];
        for (var i2 = 0; i2 < n2.length; i2++)
          n2[i2].classList.remove(t2);
      }
      return n2;
    }
    function k(n2, t2) {
      t2.appendChild(n2);
    }
    function D(n2, t2, e2) {
      var o2;
      t2 = t2 || r.createElement("div");
      for (var i2 = 0; i2 < n2.length; i2++) {
        var a2 = n2[i2];
        (e2 && !i2 || !e2) && (o2 = t2.cloneNode(true), a2.parentNode.insertBefore(o2, a2)), o2.appendChild(a2);
      }
      return n2;
    }
    function j(n2, t2) {
      D(n2, t2, true);
    }
    function R(n2) {
      for (var t2 = r.createDocumentFragment(); n2.firstChild; )
        t2.appendChild(n2.firstChild);
      n2.parentNode.replaceChild(t2, n2);
    }
    function z(n2, t2) {
      return n2 && n2.nodeType === 1 ? X(n2, t2) ? n2 : z(n2.parentNode, t2) : null;
    }
    function L(n2, t2) {
      N(n2, n2.nextSibling, t2);
    }
    function P(n2, t2) {
      N(n2, n2, t2);
    }
    function N(n2, t2, e2) {
      x(e2) || (typeof e2 == "string" && (e2 = Q(e2)), e2 = [e2]);
      for (var o2 = 0; o2 < e2.length; o2++)
        n2.parentNode.insertBefore(e2[o2], t2);
    }
    function C(n2) {
      if (n2 !== void 0 && n2.fitToSection)
        return r.body.scrollTop;
      var t2 = r.documentElement;
      return (i.pageYOffset || t2.scrollTop) - (t2.clientTop || 0);
    }
    function H(n2) {
      return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
        return t2 !== n2;
      });
    }
    function I(n2) {
      n2.preventDefault();
    }
    function W(n2, t2) {
      return n2.getAttribute(t2);
    }
    function B(n2, t2, e2) {
      r.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function Z(n2, t2, e2) {
      i.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function F(n2, t2, e2) {
      r.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function V(n2, t2, e2) {
      i.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function G(n2) {
      if (typeof n2 == "function")
        return true;
      var t2 = Object.prototype.toString.call(n2);
      return t2 === "[object Function]" || t2 === "[object GeneratorFunction]";
    }
    function Y(n2, t2, e2) {
      var o2;
      e2 = e2 === void 0 ? {} : e2, typeof i.CustomEvent == "function" ? o2 = new CustomEvent(t2, { detail: e2 }) : (o2 = r.createEvent("CustomEvent")).initCustomEvent(t2, true, true, e2), n2.dispatchEvent(o2);
    }
    function X(n2, t2) {
      return (n2.matches || n2.t || n2.msMatchesSelector || n2.mozMatchesSelector || n2.webkitMatchesSelector || n2.oMatchesSelector).call(n2, t2);
    }
    function U(n2, t2) {
      if (typeof t2 == "boolean")
        for (var e2 = 0; e2 < n2.length; e2++)
          n2[e2].style.display = t2 ? "block" : "none";
      return n2;
    }
    function Q(n2) {
      var t2 = r.createElement("div");
      return t2.innerHTML = n2.trim(), t2.firstChild;
    }
    function _(n2) {
      n2 = M(n2);
      for (var t2 = 0; t2 < n2.length; t2++) {
        var e2 = n2[t2];
        e2 && e2.parentElement && e2.parentNode.removeChild(e2);
      }
    }
    function J(n2, t2, e2) {
      for (var o2 = n2[e2], i2 = []; o2; )
        (X(o2, t2) || t2 == null) && i2.push(o2), o2 = o2[e2];
      return i2;
    }
    function K(n2, t2) {
      return J(n2, t2, "nextElementSibling");
    }
    function q(n2, t2) {
      return J(n2, t2, "previousElementSibling");
    }
    function $(n2) {
      return n2[n2.length - 1];
    }
    function nn(n2, t2) {
      for (var e2 = 0, o2 = n2.slice(Math.max(n2.length - t2, 1)), i2 = 0; i2 < o2.length; i2++)
        e2 += o2[i2];
      return Math.ceil(e2 / t2);
    }
    function tn(n2, t2) {
      n2.setAttribute(t2, W(n2, "data-" + t2)), n2.removeAttribute("data-" + t2);
    }
    function en(n2) {
      return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n3) {
        return typeof n3;
      } : function(n3) {
        return n3 && typeof Symbol == "function" && n3.constructor === Symbol && n3 !== Symbol.prototype ? "symbol" : typeof n3;
      }, en(n2);
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
    }, writable: true, o: true }), window.fp_utils = { $: v, deepExtend: p, hasClass: h, getWindowHeight: g, css: w, prev: b, next: S, last: function(n2) {
      return n2[n2.length - 1];
    }, index: y, getList: M, hide: T, show: A, isArrayOrList: x, addClass: O, removeClass: E, appendTo: k, wrap: D, wrapAll: j, wrapInner: function(n2, t2) {
      for (typeof t2 == "string" && (t2 = Q(t2)), n2.appendChild(t2); n2.firstChild !== t2; )
        t2.appendChild(n2.firstChild);
    }, unwrap: R, closest: z, after: L, before: P, insertBefore: N, getScrollTop: C, siblings: H, preventDefault: I, isFunction: G, trigger: Y, matches: X, toggle: U, createElementFromHTML: Q, remove: _, filter: function(n2, t2) {
      Array.prototype.filter.call(n2, t2);
    }, untilAll: J, nextAll: K, prevAll: q, showError: s };
    var on = { i: {}, l: function(n2, t2) {
      var e2 = this;
      return en(this.i[n2]) !== "object" && (this.i[n2] = []), this.i[n2].push(t2), function() {
        return e2.removeListener(n2, t2);
      };
    }, removeListener: function(n2, t2) {
      if (en(this.i[n2]) === "object") {
        var e2 = this.i[n2].indexOf(t2);
        e2 > -1 && this.i[n2].splice(e2, 1);
      }
    }, u: function(n2) {
      for (var t2 = this, e2 = arguments.length, o2 = new Array(e2 > 1 ? e2 - 1 : 0), i2 = 1; i2 < e2; i2++)
        o2[i2 - 1] = arguments[i2];
      en(this.i[n2]) === "object" && this.i[n2].forEach(function(n3) {
        return n3.apply(t2, o2);
      });
    }, once: function(n2, t2) {
      var e2 = this, o2 = this.l(n2, function() {
        o2();
        for (var n3 = arguments.length, i2 = new Array(n3), r2 = 0; r2 < n3; r2++)
          i2[r2] = arguments[r2];
        t2.apply(e2, i2);
      });
    } }, rn = { v: 0, p: 0, slides: [], h: [], g: null, S: null, M: false, T: false, A: false, O: false, D: false, j: void 0, R: void 0, L: false, canScroll: true, P: "none", N: "none", C: false, H: false, I: true, W: 0, B: g(), Z: false, F: {} };
    function an(n2) {
      Object.assign(rn, n2);
    }
    function ln() {
      return rn;
    }
    function un(n2) {
      on.u("onClickOrTouch", { e: n2, target: n2.target });
    }
    function cn() {
      ["click", "touchstart"].forEach(function(n2) {
        F(n2, un);
      });
    }
    function sn() {
      an({ I: true });
    }
    i.state = rn, on.l("bindEvents", function() {
      ["click", "touchstart"].forEach(function(n2) {
        B(n2, un);
      }), Z("focus", sn), on.l("onDestroy", cn);
    });
    var fn = "fullpage-wrapper", dn = "." + fn, vn = "fp-responsive", pn = "fp-notransition", hn = "fp-destroyed", gn = "fp-enabled", mn = "active", wn = ".active", bn = "fp-completely", Sn = "fp-section", yn = "." + Sn, Mn = ".fp-tableCell", Tn = "fp-auto-height", An = "#fp-nav", xn = "fp-slide", On = "." + xn, En = ".fp-slide.active", kn = "fp-slides", Dn = ".fp-slides", jn = "fp-slidesContainer", Rn = "." + jn, zn = "fp-table", Ln = "fp-overflow", Pn = "." + Ln, Nn = ".fp-slidesNav", Cn = ".fp-slidesNav a", Hn = "fp-controlArrow", In = "." + Hn, Wn = "fp-prev", Bn = ".fp-controlArrow.fp-prev", Zn = ".fp-controlArrow.fp-next", Fn = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, Vn = null, Gn = false, Yn = p({}, Fn), Xn = null;
    function Un(n2) {
      return Vn;
    }
    function Qn() {
      return Xn || Fn;
    }
    function _n() {
      return Yn;
    }
    function Jn(n2, t2, e2) {
      Xn[n2] = t2, e2 !== "internal" && (Yn[n2] = t2);
    }
    function Kn() {
      if (!Qn().anchors.length) {
        var n2 = v(Qn().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Vn);
        n2.length && n2.length === v(Qn().sectionSelector, Vn).length && (Gn = true, n2.forEach(function(n3) {
          Qn().anchors.push(W(n3, "data-anchor").toString());
        }));
      }
      if (!Qn().navigationTooltips.length) {
        var t2 = v(Qn().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Vn);
        t2.length && t2.forEach(function(n3) {
          Qn().navigationTooltips.push(W(n3, "data-tooltip").toString());
        });
      }
    }
    var qn = function(n2) {
      this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
    }, $n = function(n2, t2) {
      this.parent = this.parent || null, this.selector = t2, this.anchor = W(n2, "data-anchor") || Qn().anchors[y(n2, Qn().sectionSelector)], this.item = n2, this.isVisible = f(n2), this.isActive = h(n2, mn), this.V = h(n2, Ln), this.G = t2 === Qn().sectionSelector, this.container = z(n2, Rn) || z(n2, dn), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function nt(n2) {
      return n2.map(function(n3) {
        return n3.item;
      });
    }
    function tt(n2, t2) {
      return n2.find(function(n3) {
        return n3.item === t2;
      });
    }
    $n.prototype.siblings = function() {
      return this.G ? this.isVisible ? rn.h : rn.Y : this.parent ? this.parent.slides : 0;
    }, $n.prototype.prev = function() {
      var n2 = this.siblings(), t2 = (this.G ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t2 >= 0 ? n2[t2] : null;
    }, $n.prototype.next = function() {
      var n2 = this.siblings(), t2 = (this.G ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t2 < n2.length ? n2[t2] : null;
    }, $n.prototype.X = function() {
      return this.G ? rn.h : rn.U;
    };
    var et, ot = function(n2) {
      qn.call(this, n2);
    }, it = function(n2) {
      qn.call(this, n2);
    };
    function rt(n2) {
      return window["fp_" + n2 + "Extension"] !== void 0;
    }
    function at(n2) {
      var t2 = Qn();
      return t2[n2] !== null && Object.prototype.toString.call(t2[n2]) === "[object Array]" ? t2[n2].length && c[n2] : t2[n2] && c[n2];
    }
    function lt(n2, t2, e2) {
      if (at(n2))
        return G(c[n2][t2]) ? c[n2][t2](e2) : c[n2][t2];
    }
    function ut() {
      return lt("dragAndMove", "isAnimating");
    }
    function ct() {
      return lt("dragAndMove", "isGrabbing");
    }
    function st(n2) {
      return Qn().offsetSections && c.offsetSections ? Math.round(lt("offsetSections", "getWindowHeight", n2)) : g();
    }
    function ft(n2, t2) {
      n2.insertBefore(t2, n2.firstChild);
    }
    function dt(n2) {
      var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function e2(n3) {
        var e3, o3, i2, r2, a2, l2, u2 = "", c2 = 0;
        for (n3 = n3.replace(/[^A-Za-z0-9+/=]/g, ""); c2 < n3.length; )
          e3 = t2.indexOf(n3.charAt(c2++)) << 2 | (r2 = t2.indexOf(n3.charAt(c2++))) >> 4, o3 = (15 & r2) << 4 | (a2 = t2.indexOf(n3.charAt(c2++))) >> 2, i2 = (3 & a2) << 6 | (l2 = t2.indexOf(n3.charAt(c2++))), u2 += String.fromCharCode(e3), a2 != 64 && (u2 += String.fromCharCode(o3)), l2 != 64 && (u2 += String.fromCharCode(i2));
        return u2 = function(n4) {
          for (var t3, e4 = "", o4 = 0, i3 = 0, r3 = 0; o4 < n4.length; )
            (i3 = n4.charCodeAt(o4)) < 128 ? (e4 += String.fromCharCode(i3), o4++) : i3 > 191 && i3 < 224 ? (r3 = n4.charCodeAt(o4 + 1), e4 += String.fromCharCode((31 & i3) << 6 | 63 & r3), o4 += 2) : (r3 = n4.charCodeAt(o4 + 1), t3 = n4.charCodeAt(o4 + 2), e4 += String.fromCharCode((15 & i3) << 12 | (63 & r3) << 6 | 63 & t3), o4 += 3);
          return e4;
        }(u2), u2;
      }
      function o2(n3) {
        return n3.slice(3).slice(0, -3);
      }
      return function(n3) {
        var t3 = n3.split("_");
        if (t3.length > 1) {
          var i2 = t3[1];
          return e2(n3.replace(o2(t3[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + e2(i2.slice(3).slice(0, -3));
        }
        return o2(n3);
      }(e2(n2));
    }
    function vt(n2) {
      var t2 = v(En, n2);
      return t2.length && (n2 = t2[0]), n2;
    }
    function pt(n2) {
      var t2, e2, o2 = Qn();
      return o2.autoScrolling && !o2.scrollBar ? (t2 = -n2, e2 = v(dn)[0]) : o2.fitToSection ? (t2 = n2, e2 = r.body) : (t2 = n2, e2 = window), { options: t2, element: e2 };
    }
    function ht(n2, t2) {
      !Qn().autoScrolling || Qn().scrollBar || n2.self != window && h(n2, kn) ? n2.self != window && h(n2, kn) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
    }
    function gt(n2) {
      var t2 = "transform " + Qn().scrollingSpeed + "ms " + Qn().easingcss3;
      return E(n2, pn), w(n2, { "-webkit-transition": t2, transition: t2 });
    }
    function mt(n2, t2) {
      var e2 = n2.index(), o2 = y(t2, yn);
      return e2 == o2 ? "none" : e2 > o2 ? "up" : "down";
    }
    function wt(n2) {
      return O(n2, pn);
    }
    function bt(n2) {
      return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
    }
    function St(n2, t2) {
      t2 ? gt(Un()) : wt(Un()), clearTimeout(et), w(Un(), bt(n2)), c.test._ = n2, et = setTimeout(function() {
        E(Un(), pn);
      }, 10);
    }
    function yt(n2) {
      var t2 = Math.round(n2);
      if (Qn().css3 && Qn().autoScrolling && !Qn().scrollBar)
        St("translate3d(0px, -" + t2 + "px, 0px)", false);
      else if (Qn().autoScrolling && !Qn().scrollBar)
        w(Un(), { top: -t2 + "px" }), c.test.top = -t2 + "px";
      else {
        var e2 = pt(t2);
        ht(e2.element, e2.options);
      }
    }
    function Mt(n2, t2) {
      t2 !== "internal" && lt("fadingEffect", "update", n2), lt("cards", "update_", n2), Jn("scrollingSpeed", n2, t2);
    }
    function Tt(n2, t2, e2, o2) {
      var a2, l2 = function(n3) {
        return n3.self != i && h(n3, kn) ? n3.scrollLeft : !Qn().autoScrolling || Qn().scrollBar ? C(Qn()) : n3.offsetTop;
      }(n2), u2 = t2 - l2, c2 = false;
      an({ L: true }), n2 === r.body && w(r.body, { "scroll-snap-type": "none" }), window.requestAnimationFrame(function r2(s2) {
        a2 || (a2 = s2);
        var f2 = Math.floor(s2 - a2);
        if (rn.L) {
          var d2 = t2;
          e2 && (d2 = i.fp_easings[Qn().easing](f2, l2, u2, e2)), f2 <= e2 && ht(n2, d2), f2 < e2 ? window.requestAnimationFrame(r2) : o2 === void 0 || c2 || (o2(), c2 = true);
        } else
          c2 || (o2(), c2 = true);
      });
    }
    function At(n2) {
      return n2 && !n2.item ? new ot(new ge(n2)) : n2 ? new ot(n2) : null;
    }
    function xt(n2) {
      return n2 ? new it(n2) : null;
    }
    function Ot(n2, t2) {
      var e2, o2 = function(n3, t3) {
        var e3 = { afterRender: function() {
          return { section: At(ln().g), J: xt(ln().g.activeSlide) };
        }, onLeave: function() {
          return { origin: At(t3.items.origin), destination: At(t3.items.destination), direction: t3.direction, trigger: ln().S };
        }, afterLoad: function() {
          return e3.onLeave();
        }, afterSlideLoad: function() {
          return { section: At(t3.items.section), origin: At(t3.items.origin), destination: At(t3.items.destination), direction: t3.direction, trigger: ln().S };
        }, onSlideLeave: function() {
          return e3.afterSlideLoad();
        }, beforeLeave: function() {
          return e3.onLeave();
        }, onScrollOverflow: function() {
          return { section: At(ln().g), J: xt(ln().g.activeSlide), position: t3.position, direction: t3.direction };
        } };
        return e3[n3]();
      }(n2, t2);
      return Y(Un(), n2, o2), Qn()[n2].apply(o2[Object.keys(o2)[0]], (e2 = o2, Object.keys(e2).map(function(n3) {
        return e2[n3];
      }))) !== false;
    }
    function Et(n2) {
      var t2 = vt(n2);
      v("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && typeof n3.play == "function" && n3.play();
      }), v('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && kt(n3), n3.onload = function() {
          n3.hasAttribute("data-autoplay") && kt(n3);
        };
      });
    }
    function kt(n2) {
      n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function Dt(n2) {
      var t2 = vt(n2);
      v("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-keepplaying") || typeof n3.pause != "function" || n3.pause();
      }), v('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        /youtube\.com\/embed\//.test(W(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function jt(n2) {
      Qn().lazyLoading && v("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", vt(n2)).forEach(function(n3) {
        if (["src", "srcset"].forEach(function(t3) {
          var e2 = W(n3, "data-" + t3);
          e2 != null && e2 && (tn(n3, t3), n3.addEventListener("load", function() {
          }));
        }), X(n3, "source")) {
          var t2 = z(n3, "video, audio");
          t2 && (t2.load(), t2.onloadeddata = function() {
          });
        }
      });
    }
    i.fp_utils = i.fp_utils || {}, Object.assign(i.fp_utils, { prependTo: ft, toggleClass: function(n2, t2, e2) {
      if (n2.classList && e2 == null)
        n2.classList.toggle(t2);
      else {
        var o2 = h(n2, t2);
        o2 && e2 == null || !e2 ? E(n2, t2) : (!o2 && e2 == null || e2) && O(n2, t2);
      }
    } }), c.setScrollingSpeed = Mt;
    var Rt = null, zt = null, Lt = null;
    function Pt() {
      var n2 = ln().g.item, t2 = ln().g.activeSlide, e2 = Nt(n2), o2 = String(e2);
      t2 && (o2 = o2 + "-" + Nt(t2.item)), o2 = o2.replace("/", "-").replace("#", "");
      var i2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      Rt.className = Rt.className.replace(i2, ""), O(Rt, "fp-viewing-" + o2);
    }
    function Nt(n2) {
      if (!n2)
        return null;
      var t2 = W(n2, "data-anchor"), e2 = y(n2);
      return t2 == null && (t2 = e2), t2;
    }
    function Ct(n2, t2, e2) {
      var o2 = "";
      Qn().anchors.length && !Qn().lockAnchors && (n2 ? (e2 != null && (o2 = e2), t2 == null && (t2 = n2), an({ R: t2 }), Ht(o2 + "/" + t2)) : n2 != null ? (an({ R: t2 }), Ht(e2)) : Ht(e2)), Pt();
    }
    function Ht(n2) {
      if (Qn().recordHistory)
        location.hash = n2;
      else if (a || u)
        i.history.replaceState(void 0, void 0, "#" + n2);
      else {
        var t2 = i.location.href.split("#")[0];
        i.location.replace(t2 + "#" + n2);
      }
    }
    function It(n2, t2, e2) {
      var o2 = t2 === "Section" ? Qn().anchors[n2] : W(e2, "data-anchor");
      return encodeURI(Qn().navigationTooltips[n2] || o2 || t2 + " " + (n2 + 1));
    }
    function Wt(n2) {
      I(n2), an({ S: "horizontalNav" });
      var t2 = z(this, yn), e2 = v(Dn, z(this, yn))[0], o2 = tt(ln().h, t2).slides[y(z(this, "li"))];
      on.u("landscapeScroll", { slides: e2, destination: o2.item });
    }
    var Bt, Zt = {};
    function Ft(n2, t2, e2) {
      t2 !== "all" ? Zt[e2][t2] = n2 : Object.keys(Zt[e2]).forEach(function(t3) {
        Zt[e2][t3] = n2;
      });
    }
    function Vt() {
      return Zt;
    }
    function Gt() {
      var n2 = z(this, yn);
      h(this, Wn) ? Vt().m.left && (an({ S: "slideArrow" }), on.u("moveSlideLeft", { section: n2 })) : Vt().m.right && (an({ S: "slideArrow" }), on.u("moveSlideRight", { section: n2 }));
    }
    function Yt(n2) {
      !Qn().loopHorizontal && Qn().controlArrows && (U(v(Bn, n2.section), n2.slideIndex !== 0), U(v(Zn, n2.section), S(n2.destiny) != null));
    }
    function Xt() {
      clearTimeout(Bt);
    }
    function Ut(n2, t2, e2) {
      var o2 = z(n2, yn), i2 = ln().h.filter(function(n3) {
        return n3.item == o2;
      })[0], r2 = i2.slides.filter(function(n3) {
        return n3.item == t2;
      })[0], a2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: r2.index(), section: o2, sectionIndex: i2.index(), anchorLink: i2.anchor, slidesNav: v(Nn, o2)[0], slideAnchor: r2.anchor, prevSlide: i2.activeSlide.item, prevSlideIndex: i2.activeSlide.index(), items: { section: i2, origin: i2.activeSlide, destination: r2 }, localIsResizing: rn.O };
      a2.xMovement = _t(a2.prevSlideIndex, a2.slideIndex), a2.direction = a2.direction ? a2.direction : a2.xMovement, a2.localIsResizing || an({ canScroll: false }), lt("parallax", "applyHorizontal", a2), lt("cards", "apply", a2), lt("dropEffect", "apply", a2), lt("waterEffect", "apply", a2), Qn().onSlideLeave && !a2.localIsResizing && a2.xMovement !== "none" && G(Qn().onSlideLeave) && Ot("onSlideLeave", a2) === false ? an({ A: false }) : (at("dropEffect") && Qn().dropEffect || (O(t2, mn), E(H(t2), mn)), de(), a2.localIsResizing || (Dt(a2.prevSlide), jt(t2)), Yt(a2), i2.isActive && !a2.localIsResizing && Ct(a2.slideIndex, a2.slideAnchor, a2.anchorLink), lt("continuousHorizontal", "apply", a2), ct() ? Kt(a2) : Qt(n2, a2, true), Qn().interlockedSlides && c.interlockedSlides && (at("continuousHorizontal") && e2 !== void 0 && e2 !== a2.xMovement || lt("interlockedSlides", "apply", a2)));
    }
    function Qt(n2, t2, e2) {
      var o2, i2, r2 = t2.destinyPos;
      if (o2 = t2.slidesNav, i2 = t2.slideIndex, Qn().slidesNavigation && o2 != null && (E(v(wn, o2), mn), O(v("a", v("li", o2)[i2]), mn)), an({ scrollX: Math.round(r2.left) }), Qn().css3) {
        var a2 = "translate3d(-" + Math.round(r2.left) + "px, 0px, 0px)";
        c.test.K[t2.sectionIndex] = a2, at("dragAndMove") && t2.q !== void 0 || gt(v(Rn, n2)), w(v(Rn, n2), bt(a2)), at("interlockedSlides") || clearTimeout(Bt), Bt = setTimeout(function() {
          e2 && Kt(t2);
        }, Qn().scrollingSpeed);
      } else
        c.test.left[t2.sectionIndex] = Math.round(r2.left), Tt(n2, Math.round(r2.left), Qn().scrollingSpeed, function() {
          e2 && Kt(t2);
        });
    }
    function _t(n2, t2) {
      return n2 == t2 ? "none" : n2 > t2 ? "left" : "right";
    }
    function Jt() {
      clearTimeout(Bt);
    }
    function Kt(n2) {
      lt("continuousHorizontal", "afterSlideLoads", n2), n2.localIsResizing || (lt("parallax", "afterSlideLoads"), lt("scrollOverflowReset", "setPrevious", n2.prevSlide), lt("scrollOverflowReset", "reset"), G(Qn().afterSlideLoad) && Ot("afterSlideLoad", n2), an({ canScroll: true }), Et(n2.destiny)), an({ A: false }), lt("interlockedSlides", "interlockedSlides", n2);
    }
    function qt(n2, t2) {
      Mt(0, "internal"), t2 !== void 0 && an({ O: true }), Ut(z(n2, Dn), n2), t2 !== void 0 && an({ O: false }), Mt(_n().scrollingSpeed, "internal");
    }
    function $t(n2, t2) {
      Jn("recordHistory", n2, t2);
    }
    function ne(n2, t2) {
      n2 || yt(0), Jn("autoScrolling", n2, t2);
      var e2 = ln().g.item;
      if (Qn().autoScrolling && !Qn().scrollBar)
        w(Lt, { overflow: "hidden", height: "100%" }), E(Rt, "fp-scrollable"), $t(_n().recordHistory, "internal"), w(Un(), { "-ms-touch-action": "none", "touch-action": "none" }), e2 != null && yt(e2.offsetTop);
      else if (w(Lt, { overflow: "visible", height: "initial" }), O(Rt, "fp-scrollable"), $t(!!Qn().autoScrolling && _n().recordHistory, "internal"), w(Un(), { "-ms-touch-action": "", "touch-action": "" }), wt(Un()), e2 != null) {
        w(Lt, { "scroll-behavior": "unset" });
        var o2 = pt(e2.offsetTop);
        o2.element.scrollTo(0, o2.options);
      }
      Y(Un(), "setAutoScrolling", n2);
    }
    Zt.m = { up: true, down: true, left: true, right: true }, Zt.k = p({}, Zt.m), on.l("onClickOrTouch", function(n2) {
      var t2 = n2.target;
      (X(t2, In) || z(t2, In)) && Gt.call(t2, n2);
    }), c.landscapeScroll = Ut, on.l("bindEvents", function() {
      on.l("onPerformMovement", Xt);
    }), c.setRecordHistory = $t, c.setAutoScrolling = ne, c.test.setAutoScrolling = ne, c.setFitToSection = oe, c.fitToSection = function() {
    };
    var te, ee = "scrollSnapAlign" in (te = r.documentElement.style) || "nn" in te || "tn" in te;
    function oe(n2, t2) {
      ie(n2), Jn("fitToSection", n2, t2);
    }
    function ie(n2) {
      ee && (Qn().fitToSection && (!Qn().autoScrolling || Qn().scrollBar) && n2 ? O : E)(zt, "fp-snaps");
    }
    function re() {
      var n2 = Qn().responsive || Qn().responsiveWidth, t2 = Qn().responsiveHeight, e2 = n2 && i.innerWidth < n2, o2 = t2 && i.innerHeight < t2;
      n2 && t2 ? ae(e2 || o2) : n2 ? ae(e2) : t2 && ae(o2);
    }
    function ae(n2) {
      var t2 = le();
      n2 ? t2 || (ne(false, "internal"), oe(false, "internal"), T(v(An)), O(Rt, vn), G(Qn().afterResponsive) && Qn().afterResponsive.call(Un(), n2), lt("responsiveSlides", "toSections"), Y(Un(), "afterResponsive", n2)) : t2 && (ne(_n().autoScrolling, "internal"), oe(_n().autoScrolling, "internal"), A(v(An)), E(Rt, vn), G(Qn().afterResponsive) && Qn().afterResponsive.call(Un(), n2), lt("responsiveSlides", "toSlides"), Y(Un(), "afterResponsive", n2));
    }
    function le() {
      return h(Rt, vn);
    }
    c.setResponsive = ae, on.l("bindEvents", function() {
      i.addEventListener("load", function() {
        Qn().scrollOverflow && !Qn().scrollBar && (ce.en(), ce.on());
      }), Qn().scrollOverflow && nt(ln().U).forEach(function(n2) {
        ce.rn(n2).addEventListener("scroll", ce.an), n2.addEventListener("wheel", ce.ln), n2.addEventListener("keydown", ce.ln), n2.addEventListener("keydown", ce.un);
      });
    });
    var ue, ce = { cn: null, sn: null, dn: null, ln: function(n2) {
      if (!rn.canScroll)
        return I(n2), false;
    }, on: function() {
      r.activeElement === this.cn && this.cn.blur(), v(".fp-overflow.active", ln().g.item)[0] && (this.cn = v(Pn, ln().g.item)[0], this.cn.focus());
    }, en: function() {
      Qn().scrollOverflowMacStyle && !l && O(Rt, "fp-scroll-mac"), ln().U.forEach(function(n2) {
        if (!(h(n2.item, "fp-noscroll") || h(n2.item, "fp-auto-height-responsive") && le())) {
          var t2 = vt(n2.item), e2 = ce.vn(n2.item);
          e2 ? at("parallax") ? lt("parallax", "makeScrollable", n2.item) : (O(t2, Ln), t2.setAttribute("tabindex", "-1")) : (E(t2, Ln), t2.removeAttribute("tabindex")), n2.V = e2;
        }
      });
    }, rn: function(n2) {
      var t2 = vt(n2);
      return v(Pn, t2)[0] || t2;
    }, V: function(n2) {
      return h(n2, Ln) || v(Pn, n2)[0] != null;
    }, pn: function(n2) {
      return n2.G && n2.activeSlide ? n2.activeSlide.V : n2.V;
    }, vn: function(n2) {
      return (v(Pn, n2)[0] || n2).scrollHeight > i.innerHeight;
    }, hn: function(n2, t2) {
      if (!rn.canScroll)
        return false;
      var e2 = ce.rn(t2);
      if (!Qn().scrollOverflow || !h(e2, Ln))
        return true;
      var o2 = e2.scrollTop, i2 = n2 === "up" && o2 <= 0, r2 = n2 === "down" && e2.scrollHeight <= Math.ceil(e2.offsetHeight + o2), a2 = i2 || r2;
      return a2 || (this.sn = new Date().getTime()), a2;
    }, gn: function() {
      this.dn = new Date().getTime();
      var n2 = this.dn - ce.sn, t2 = (a || u) && rn.C, e2 = rn.H && n2 > 600;
      return t2 && n2 > 400 || e2;
    }, an: (ue = 0, function(n2) {
      var t2 = n2.target.scrollTop, e2 = rn.P !== "none" ? rn.P : ue < t2 ? "down" : "up";
      ue = t2, G(Qn().onScrollOverflow) && Ot("onScrollOverflow", { position: t2, direction: e2 }), h(n2.target, Ln) && rn.canScroll && ce.hn(e2, n2.target) && ce.gn() && on.u("onScrollOverflowScrolled", { direction: e2 });
    }) }, se = null, fe = null;
    function de() {
      rn.g = null, rn.h.map(function(n2) {
        var t2 = h(n2.item, mn);
        n2.isActive = t2, n2.V = ce.V(n2.item), t2 && (rn.g = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
          var e2 = h(t3.item, mn);
          t3.V = ce.V(n2.item), t3.isActive = e2, e2 && (n2.activeSlide = t3);
        }));
      }), function() {
        var n2 = rn.g, t2 = !!rn.g && rn.g.slides.length, e2 = rn.g ? rn.g.activeSlide : null;
        if (!n2 && rn.h.length && !ln().M)
          if (at("responsiveSlides") && lt("responsiveSlides", "areSlidesSections"))
            an({ g: rn.U.filter(function(n3) {
              return n3.item === v(yn);
            })[0] });
          else {
            if (se) {
              var o2 = he(se, rn.h);
              o2 && (rn.g = o2, rn.g.isActive = true, O(rn.g.item, mn)), rn.g && yt(rn.g.item.offsetTop);
            }
            if (t2 && !e2 && fe) {
              var i2 = he(fe, rn.g.slides);
              i2 && (rn.g.activeSlide = i2, rn.g.activeSlide.isActive = true, O(rn.g.activeSlide.item, mn)), rn.g.activeSlide && qt(rn.g.activeSlide.item, "internal");
            }
          }
      }(), Y(Un(), "onUpdateStateDone");
    }
    function ve() {
      var n2 = v(Qn().sectionSelector, Un()), t2 = d(n2), e2 = Array.from(n2).map(function(n3) {
        return new ge(n3);
      }), o2 = e2.filter(function(n3) {
        return n3.isVisible;
      }), i2 = o2.reduce(function(n3, t3) {
        return n3.concat(t3.slides);
      }, []);
      se = pe(rn.g), fe = pe(rn.g ? rn.g.activeSlide : null), rn.v = t2.length, rn.p = o2.reduce(function(n3, t3) {
        return n3 + t3.slides.length;
      }, 0), rn.h = o2, rn.Y = e2, rn.slides = i2, rn.U = rn.h.concat(rn.slides);
    }
    function pe(n2) {
      if (!n2)
        return null;
      var t2 = n2 ? n2.item : null, e2 = n2.G ? rn.Y : rn.g.mn;
      if (t2) {
        var o2 = tt(e2, t2);
        return o2 ? o2.index() : null;
      }
      return null;
    }
    function he(n2, t2) {
      var e2, o2 = n2 - 1, i2 = n2;
      do {
        if (e2 = t2[o2] || t2[i2])
          break;
        o2 -= 1, i2 += 1;
      } while (o2 >= 0 || i2 < t2.length);
      return e2;
    }
    var ge = function(n2) {
      var t2 = this;
      [].push.call(arguments, Qn().sectionSelector), $n.apply(this, arguments), this.wn = v(Qn().slideSelector, n2), this.mn = Array.from(this.wn).map(function(n3) {
        return new me(n3, t2);
      }), this.slides = this.mn.filter(function(n3) {
        return n3.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
        return n3.isActive;
      })[0] || this.slides[0] : null;
    };
    ge.prototype = $n.prototype, ge.prototype.constructor = ge;
    var me = function(n2, t2) {
      this.parent = t2, $n.call(this, n2, Qn().slideSelector);
    };
    function we() {
      O(v(Qn().sectionSelector, Un()), Sn), O(v(Qn().slideSelector, Un()), xn);
    }
    function be() {
      Y(b(this), "click");
    }
    function Se() {
      _(v(An));
      var n2 = r.createElement("div");
      n2.setAttribute("id", "fp-nav");
      var t2 = r.createElement("ul");
      n2.appendChild(t2), k(n2, Rt);
      var e2 = v(An)[0];
      O(e2, "fp-" + Qn().navigationPosition), Qn().showActiveTooltip && O(e2, "fp-show-active");
      for (var o2 = "", i2 = 0; i2 < ln().h.length; i2++) {
        var a2 = ln().h[i2], l2 = "";
        Qn().anchors.length && (l2 = a2.anchor), o2 += '<li><a href="#' + encodeURI(l2) + '"><span class="fp-sr-only">' + It(a2.index(), "Section") + "</span><span></span></a>";
        var u2 = Qn().navigationTooltips[a2.index()];
        u2 !== void 0 && u2 !== "" && (o2 += '<div class="fp-tooltip fp-' + Qn().navigationPosition + '">' + u2 + "</div>"), o2 += "</li>";
      }
      v("ul", e2)[0].innerHTML = o2;
      var c2 = v("li", v(An)[0])[ln().g.index()];
      O(v("a", c2), mn);
    }
    function ye(n2) {
      n2.preventDefault && I(n2), an({ S: "verticalNav" });
      var t2 = y(z(this, "#fp-nav li"));
      on.u("scrollPage", { destination: ln().h[t2] });
    }
    function Me(n2) {
      Qn().verticalCentered && (ce.pn(n2) || h(n2.item, zn) || O(n2.item, zn));
    }
    function Te(n2) {
      var t2 = n2.slides.length, e2 = n2.wn, o2 = n2.slides, i2 = 100 * t2, a2 = 100 / t2;
      if (!v(Dn, n2.item)[0]) {
        var l2 = r.createElement("div");
        l2.className = kn, j(e2, l2);
        var u2 = r.createElement("div");
        u2.className = jn, j(e2, u2);
      }
      w(v(Rn, n2.item), { width: i2 + "%" }), t2 > 1 && (Qn().controlArrows && function(n3) {
        var t3 = n3.item, e3 = [Q(Qn().controlArrowsHTML[0]), Q(Qn().controlArrowsHTML[1])];
        L(v(Dn, t3)[0], e3), O(e3, Hn), O(e3[0], Wn), O(e3[1], "fp-next"), Qn().controlArrowColor !== "#fff" && (w(v(Zn, t3), { "border-color": "transparent transparent transparent " + Qn().controlArrowColor }), w(v(Bn, t3), { "border-color": "transparent " + Qn().controlArrowColor + " transparent transparent" })), Qn().loopHorizontal || T(v(Bn, t3));
      }(n2), Qn().slidesNavigation && function(n3) {
        var t3 = n3.item, e3 = n3.slides.length;
        k(Q('<div class="fp-slidesNav"><ul></ul></div>'), t3);
        var o3 = v(Nn, t3)[0];
        O(o3, "fp-" + Qn().slidesNavPosition);
        for (var i3 = 0; i3 < e3; i3++)
          k(Q('<li><a href="#"><span class="fp-sr-only">' + It(i3, "Slide", v(On, t3)[i3]) + "</span><span></span></a></li>"), v("ul", o3)[0]);
        w(o3, { "margin-left": "-" + o3.innerWidth / 2 + "px" });
        var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
        O(v("a", v("li", o3)[r2]), mn);
      }(n2)), o2.forEach(function(n3) {
        w(n3.item, { width: a2 + "%" }), Qn().verticalCentered && Me(n3);
      });
      var c2 = at("responsiveSlides") ? null : n2.activeSlide || null;
      c2 != null && rn.g && (rn.g.index() !== 0 || rn.g.index() === 0 && c2.index() !== 0) ? (qt(c2.item, "internal"), O(c2.item, "fp-initial")) : O(e2[0], mn);
    }
    me.prototype = $n.prototype, me.prototype.constructor = ge;
    var Ae, xe = null;
    function Oe(n2) {
      var t2 = n2.item, e2 = n2.wn.length, o2 = n2.index();
      !ln().g && n2.isVisible && (O(t2, mn), de()), xe = ln().g.item, at("offsetSections") && w(t2, { height: st(t2) + "px" }), Qn().paddingTop && w(t2, { "padding-top": Qn().paddingTop }), Qn().paddingBottom && w(t2, { "padding-bottom": Qn().paddingBottom }), Qn().sectionsColor[o2] !== void 0 && w(t2, { "background-color": Qn().sectionsColor[o2] }), Qn().anchors[o2] !== void 0 && t2.setAttribute("data-anchor", n2.anchor), e2 || Me(n2);
    }
    c.getActiveSection = function() {
      return ln().g;
    };
    var Ee = { attributes: false, subtree: true, childList: true, characterData: true };
    function ke() {
      return d(v(Qn().slideSelector, Un())).length !== ln().p;
    }
    function De(n2) {
      var t2 = ke();
      (ke() || d(v(Qn().sectionSelector, Un())).length !== ln().v) && !rn.Z && (Qn().observer && Ae && Ae.disconnect(), ve(), de(), Qn().anchors = [], _(v(An)), we(), Kn(), Qn().navigation && Se(), t2 && (_(v(Nn)), _(v(In))), ln().h.forEach(function(n3) {
        n3.slides.length ? t2 && Te(n3) : Oe(n3);
      })), Qn().observer && Ae && v(dn)[0] && Ae.observe(v(dn)[0], Ee);
    }
    on.l("bindEvents", function() {
      var n2, t2, e2;
      Qn().observer && "MutationObserver" in window && v(dn)[0] && (n2 = v(dn)[0], t2 = Ee, (e2 = new MutationObserver(De)).observe(n2, t2), Ae = e2), on.l("contentChanged", De);
    }), c.bn = De;
    var je = function() {
      var n2 = false;
      try {
        var t2 = Object.defineProperty({}, "passive", { get: function() {
          n2 = true;
        } });
        Z("testPassive", null, t2), V("testPassive", null, t2);
      } catch (n3) {
      }
      return function() {
        return n2;
      };
    }();
    function Re() {
      return !!je() && { passive: false };
    }
    new Date().getTime();
    var ze, Le, Pe, Ne, Ce, He, Ie, We, Be = (Le = true, Pe = new Date().getTime(), Ne = !i.fullpage_api, function(n2, t2) {
      var e2 = new Date().getTime(), o2 = n2 === "wheel" ? Qn().scrollingSpeed : 100;
      return Le = Ne || e2 - Pe >= o2, Ne = !i.fullpage_api, Le && (ze = t2(), Pe = e2), ze === void 0 || ze;
    }), Ze = (Ie = new Date().getTime(), We = [], { Sn: function(n2) {
      var t2 = (n2 = n2 || i.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), o2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0;
      Ce = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !o2;
      var r2 = new Date().getTime();
      He = e2 < 0 ? "down" : "up", We.length > 149 && We.shift(), We.push(Math.abs(t2));
      var a2 = r2 - Ie;
      Ie = r2, a2 > 200 && (We = []);
    }, yn: function() {
      var n2 = nn(We, 10) >= nn(We, 70);
      return !!We.length && n2 && Ce;
    }, Mn: function() {
      return He;
    } });
    function Fe() {
      var n2 = Qn().css3 ? C(Qn()) + g() : $(ln().h).item.offsetTop + $(ln().h).item.offsetHeight, t2 = pt(n2);
      c.test.top = -n2 + "px", w(r.body, { "scroll-snap-type": "none" }), w(Lt, { "scroll-behavior": "unset" }), an({ canScroll: false }), Tt(t2.element, t2.options, Qn().scrollingSpeed, function() {
        setTimeout(function() {
          an({ M: true }), an({ canScroll: true });
        }, 30);
      });
    }
    function Ve() {
      Un().getBoundingClientRect().bottom >= 0 && Ge();
    }
    function Ge() {
      var n2 = pt($(ln().h).item.offsetTop);
      an({ canScroll: false }), Tt(n2.element, n2.options, Qn().scrollingSpeed, function() {
        an({ canScroll: true }), an({ M: false }), an({ Tn: false });
      });
    }
    var Ye, Xe, Ue, Qe, _e, Je = (Ye = false, Xe = {}, Ue = {}, function(n2, t2, e2) {
      switch (n2) {
        case "set":
          Xe[t2] = new Date().getTime(), Ue[t2] = e2;
          break;
        case "isNewKeyframe":
          var o2 = new Date().getTime();
          Ye = o2 - Xe[t2] > Ue[t2];
      }
      return Ye;
    });
    function Ke() {
      for (var n2 = v(En), t2 = 0; t2 < n2.length; t2++)
        qt(n2[t2], "internal");
    }
    function qe() {
      var n2 = v(".fp-auto-height")[0] || le() && v(".fp-auto-height-responsive")[0];
      Qn().lazyLoading && n2 && v(".fp-section:not(.active)").forEach(function(n3) {
        var t2, e2, o2, i2, r2;
        e2 = (t2 = n3.getBoundingClientRect()).top, o2 = t2.bottom, i2 = e2 + 2 < rn.B && e2 > 0, r2 = o2 > 2 && o2 < rn.B, (i2 || r2) && jt(n3);
      });
    }
    function $e(n2, t2) {
      var e2;
      e2 = n2, Qn().menu && Qn().menu.length && v(Qn().menu).forEach(function(n3) {
        n3 != null && (E(v(wn, n3), mn), O(v('[data-menuanchor="' + e2 + '"]', n3), mn));
      }), function(n3, t3) {
        var e3 = v(An)[0];
        Qn().navigation && e3 != null && e3.style.display !== "none" && (E(v(wn, e3), mn), O(n3 ? v('a[href="#' + n3 + '"]', e3) : v("a", v("li", e3)[t3]), mn));
      }(n2, t2);
    }
    function no(n2, t2) {
      if (G(Qn().beforeLeave))
        return Be(ln().S, function() {
          return Ot(n2, t2);
        });
    }
    function to(n2, t2, e2) {
      var o2 = n2.item;
      if (o2 != null) {
        var i2, r2, a2 = { element: o2, callback: t2, isMovementUp: e2, dtop: eo(o2), yMovement: mt(ln().g, o2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: ln().g.index() + 1, localIsResizing: rn.O, items: { origin: ln().g, destination: n2 }, direction: null };
        if (!(ln().g.item == o2 && !rn.O || Qn().scrollBar && C(Qn()) === a2.dtop && !h(o2, Tn))) {
          if (a2.activeSlide != null && (i2 = W(a2.activeSlide, "data-anchor"), r2 = y(a2.activeSlide, null)), !a2.localIsResizing) {
            var l2 = a2.yMovement;
            if (e2 !== void 0 && (l2 = e2 ? "up" : "down"), a2.direction = l2, rt("dropEffect") && c.dropEffect.onLeave_(a2), rt("waterEffect") && c.waterEffect.onLeave_(a2), G(Qn().beforeLeave) && no("beforeLeave", a2) === false)
              return;
            if (G(Qn().onLeave) && !Ot("onLeave", a2))
              return;
          }
          lt("parallax", "apply", a2), lt("cards", "apply", a2), lt("dropEffect", "apply", a2), lt("waterEffect", "apply", a2), Qn().autoScrolling && Qn().continuousVertical && a2.isMovementUp !== void 0 && (!a2.isMovementUp && a2.yMovement == "up" || a2.isMovementUp && a2.yMovement == "down") && (a2 = function(n3) {
            an({ Z: true });
            var t3 = ln().g.item;
            return n3.isMovementUp ? P(t3, K(t3, yn)) : L(t3, q(t3, yn).reverse()), yt(ln().g.item.offsetTop), Ke(), n3.An = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = mt(ln().g, n3.element), n3.leavingSection = n3.items.origin.index() + 1, n3.sectionIndex = n3.items.destination.index(), Y(Un(), "onContinuousVertical", n3), n3;
          }(a2)), lt("scrollOverflowReset", "setPrevious", ln().g.item), a2.localIsResizing || Dt(ln().g.item), at("dropEffect") && Qn().dropEffect || (O(o2, mn), E(H(o2), mn)), de(), jt(o2), an({ canScroll: c.test.xn }), Ct(r2, i2, a2.anchorLink), function(n3) {
            var t3 = Qn().scrollingSpeed < 700, e3 = t3 ? 700 : Qn().scrollingSpeed;
            if (an({ P: "none", scrollY: Math.round(n3.dtop) }), on.u("onPerformMovement"), Qn().css3 && Qn().autoScrolling && !Qn().scrollBar)
              St("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), at("waterEffect") && Ke(), Qn().scrollingSpeed ? (clearTimeout(Qe), Qe = setTimeout(function() {
                oo(n3), an({ canScroll: !t3 || c.test.xn });
              }, Qn().scrollingSpeed)) : oo(n3);
            else {
              var o3 = pt(n3.dtop);
              c.test.top = -n3.dtop + "px", w(Lt, { "scroll-behavior": "unset" }), clearTimeout(Qe), Tt(o3.element, o3.options, Qn().scrollingSpeed, function() {
                Qn().scrollBar ? Qe = setTimeout(function() {
                  oo(n3);
                }, 30) : (oo(n3), an({ canScroll: !t3 || c.test.xn }));
              });
            }
            t3 && (clearTimeout(_e), _e = setTimeout(function() {
              an({ canScroll: true });
            }, e3));
          }(a2), an({ j: a2.anchorLink }), $e(a2.anchorLink, function(n3) {
            return n3.An != null ? n3.isMovementUp ? rn.v - 1 : 0 : n3.sectionIndex;
          }(a2));
        }
      }
    }
    function eo(n2) {
      var t2 = n2.offsetHeight, e2 = n2.offsetTop, o2 = e2, i2 = at("dragAndMove") && lt("dragAndMove", "isGrabbing") ? lt("dragAndMove", "isScrollingDown") : e2 > rn.W, r2 = o2 - g() + t2, a2 = Qn().bigSectionsDestination;
      return t2 > g() ? (i2 || a2) && a2 !== "bottom" || (o2 = r2) : (i2 || rn.O && S(n2) == null) && (o2 = r2), at("offsetSections") && (o2 = c.offsetSections.getSectionPosition_(i2, o2, n2)), an({ W: o2 }), o2;
    }
    function oo(n2) {
      Qn().fitToSection && h(v(".fp-section.active")[0], Tn) && w(r.body, { "scroll-snap-type": "none" }), an({ M: false }), function(n3) {
        n3.An != null && (n3.isMovementUp ? P(v(yn)[0], n3.An) : L(v(yn)[ln().h.length - 1], n3.An), yt(ln().g.item.offsetTop), function() {
          for (var n4 = v(En), t2 = 0; t2 < n4.length; t2++)
            qt(n4[t2], "internal");
        }(), n3.sectionIndex = n3.items.destination.index(), n3.leavingSection = n3.items.origin.index() + 1, an({ Z: false }));
      }(n2), G(Qn().afterLoad) && !n2.localIsResizing && Ot("afterLoad", n2), lt("parallax", "afterLoad"), lt("waterEffect", "afterLoad"), lt("dropEffect", "afterLoad"), lt("scrollOverflowReset", "reset"), lt("resetSliders", "apply", n2), de(), n2.localIsResizing || Et(n2.element), O(n2.element, bn), E(H(n2.element), bn), qe(), ce.on(), an({ canScroll: true }), G(n2.callback) && n2.callback();
    }
    function io() {
      var n2 = ln().g.next();
      n2 || !Qn().loopBottom && !Qn().continuousVertical || (n2 = ln().h[0]), n2 != null ? to(n2, null, false) : Un().scrollHeight < Rt.scrollHeight && on.u("scrollBeyondFullpage");
    }
    function ro() {
      var n2 = ln().g.prev();
      n2 || !Qn().loopTop && !Qn().continuousVertical || (n2 = $(ln().h)), n2 != null && to(n2, null, true);
    }
    c.moveTo = moveTo, c.getScrollY = function() {
      return rn.scrollY;
    }, on.l("onDestroy", function() {
      clearTimeout(Qe), clearTimeout(_e);
    }), c.moveSectionDown = io, c.moveSectionUp = ro;
    var ao = 0;
    function lo(n2) {
      Qn().autoScrolling && (rn.canScroll && (n2.pageY < ao && Vt().m.up ? ro() : n2.pageY > ao && Vt().m.down && io()), ao = n2.pageY);
    }
    function uo(n2) {
      if (Vt().m[n2]) {
        var t2 = n2 === "down" ? io : ro;
        at("scrollHorizontally") && (t2 = lt("scrollHorizontally", "getScrollSection", { type: n2, scrollSection: t2 })), Qn().scrollOverflow && ce.pn(ln().g) ? ce.hn(n2, ln().g.item) && ce.gn() && t2() : t2();
      }
    }
    var co, so, fo = 0, vo = 0, po = 0, ho = 0, go = To(), mo = { On: "ontouchmove" in window ? "touchmove" : go ? go.move : null, En: "ontouchstart" in window ? "touchstart" : go ? go.down : null };
    function wo(n2) {
      var t2 = z(n2.target, yn) || ln().g.item, e2 = ce.pn(ln().g);
      if (bo(n2)) {
        an({ C: true, H: false }), Qn().autoScrolling && (!e2 || e2 && !rn.canScroll) && I(n2);
        var o2 = Mo(n2);
        po = o2.y, ho = o2.x;
        var r2 = Math.abs(fo - po) > i.innerHeight / 100 * Qn().touchSensitivity, a2 = Math.abs(vo - ho) > m() / 100 * Qn().touchSensitivity, l2 = v(Dn, t2).length && Math.abs(vo - ho) > Math.abs(fo - po), u2 = fo > po ? "down" : "up";
        an({ P: l2 ? vo > ho ? "right" : "left" : u2 }), l2 ? !rn.A && a2 && (vo > ho ? Vt().m.right && on.u("moveSlideRight", { section: t2 }) : Vt().m.left && on.u("moveSlideLeft", { section: t2 })) : Qn().autoScrolling && rn.canScroll && r2 && uo(u2);
      }
    }
    function bo(n2) {
      return n2.pointerType === void 0 || n2.pointerType != "mouse";
    }
    function So(n2) {
      if (Qn().fitToSection && an({ L: false }), bo(n2)) {
        var t2 = Mo(n2);
        fo = t2.y, vo = t2.x;
      }
      Z("touchend", yo);
    }
    function yo() {
      V("touchend", yo), an({ C: false });
    }
    function Mo(n2) {
      var t2 = {};
      return t2.y = n2.pageY !== void 0 && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = n2.pageX !== void 0 && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, u && bo(n2) && Qn().scrollBar && n2.touches !== void 0 && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
    }
    function To() {
      var n2;
      return i.PointerEvent && (n2 = { down: "pointerdown", move: "pointermove" }), n2;
    }
    function Ao(n2) {
      Qn().autoScrolling && bo(n2) && Vt().m.up && (rn.canScroll || I(n2));
    }
    function xo(n2, t2) {
      var e2 = t2 == null ? ln().g.item : t2, o2 = tt(rn.h, e2), i2 = v(Dn, e2)[0];
      if (!(i2 == null || ut() || rn.A || o2.slides.length < 2)) {
        var r2 = o2.activeSlide, a2 = n2 === "left" ? r2.prev() : r2.next();
        if (!a2) {
          if (!Qn().loopHorizontal)
            return;
          a2 = n2 === "left" ? $(o2.slides) : o2.slides[0];
        }
        an({ A: !c.test.xn }), Ut(i2, a2.item, n2);
      }
    }
    function Oo(n2) {
      xo("left", n2);
    }
    function Eo(n2) {
      xo("right", n2);
    }
    function ko(n2) {
      if (at("responsiveSlides") && lt("responsiveSlides", "areSlidesSections"))
        return tt(rn.h, lt("responsiveSlides", "getSectionByAnchor", n2));
      var t2 = ln().h.filter(function(t3) {
        return t3.anchor === n2;
      })[0];
      if (!t2) {
        var e2 = n2 !== void 0 ? n2 - 1 : 0;
        t2 = ln().h[e2];
      }
      return t2;
    }
    function Do(n2) {
      n2 != null && Ut(z(n2, Dn), n2);
    }
    function jo(n2, t2) {
      var e2 = ko(n2);
      if (e2 != null) {
        var o2 = function(n3, t3) {
          var e3 = t3.slides.filter(function(t4) {
            return t4.anchor === n3;
          })[0];
          return e3 == null && (n3 = n3 !== void 0 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
        }(t2, e2);
        e2.anchor === rn.j || h(e2.item, mn) ? Do(o2) : to(e2, function() {
          Do(o2);
        });
      }
    }
    function Ro(n2, t2) {
      var e2 = ko(n2);
      t2 !== void 0 ? jo(n2, t2) : e2 != null && to(e2);
    }
    function zo() {
      clearTimeout(so), F("keydown", Po), F("keyup", No);
    }
    function Lo() {
      var n2 = r.activeElement;
      return X(n2, "textarea") || X(n2, "input") || X(n2, "select") || W(n2, "contentEditable") == "true" || W(n2, "contentEditable") == "";
    }
    function Po(n2) {
      clearTimeout(so);
      var t2 = n2.keyCode, e2 = [37, 39].indexOf(t2) > -1, o2 = Qn().autoScrolling || e2;
      t2 === 9 ? function(n3) {
        var t3 = n3.shiftKey, e3 = r.activeElement, o3 = Ho(vt(ln().g.item));
        function i2(n4) {
          return I(n4), o3[0] ? o3[0].focus() : null;
        }
        (function(n4) {
          var t4 = Ho(r), e4 = t4.indexOf(r.activeElement), o4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], i3 = z(o4, On), a2 = z(o4, yn);
          return !i3 && !a2;
        })(n3) || (e3 ? z(e3, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (e3 = i2(n3)) : i2(n3), (!t3 && e3 == o3[o3.length - 1] || t3 && e3 == o3[0]) && I(n3));
      }(n2) : !Lo() && Qn().keyboardScrolling && o2 && (co = n2.ctrlKey, so = setTimeout(function() {
        !function(n3) {
          var t3 = n3.shiftKey, e3 = r.activeElement, o3 = X(e3, "video") || X(e3, "audio"), i2 = ce.hn("up", ln().g.item), a2 = ce.hn("down", ln().g.item), l2 = [37, 39].indexOf(n3.keyCode) > -1;
          if (Wo(n3), rn.canScroll || l2)
            switch (an({ S: "keydown" }), n3.keyCode) {
              case 38:
              case 33:
                Vt().k.up && i2 && (rn.M ? on.u("onKeyDown", { e: n3 }) : ro());
                break;
              case 32:
                if (t3 && Vt().k.up && !o3 && i2) {
                  ro();
                  break;
                }
              case 40:
              case 34:
                if (Vt().k.down && a2) {
                  if (rn.M)
                    return;
                  n3.keyCode === 32 && o3 || io();
                }
                break;
              case 36:
                Vt().k.up && Ro(1);
                break;
              case 35:
                Vt().k.down && Ro(ln().h.length);
                break;
              case 37:
                Vt().k.left && Oo();
                break;
              case 39:
                Vt().k.right && Eo();
            }
        }(n2);
      }, 0));
    }
    function No(n2) {
      rn.I && (co = n2.ctrlKey);
    }
    function Co() {
      an({ I: false }), co = false;
    }
    function Ho(n2) {
      return [].slice.call(v('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
        return W(n3, "tabindex") !== "-1" && n3.offsetParent !== null;
      });
    }
    function Io(n2) {
      Lo() || Wo(n2);
    }
    function Wo(n2) {
      (function(n3) {
        return [40, 38, 32, 33, 34].indexOf(n3.keyCode) > -1 && !rn.M;
      })(n2) && !z(n2.target, Pn) && n2.preventDefault();
    }
    c.moveSlideLeft = Oo, c.moveSlideRight = Eo, c.moveTo = Ro, on.l("bindEvents", function() {
      Z("blur", Co), B("keydown", Po), Rt.addEventListener("keydown", Io), B("keyup", No), on.l("onDestroy", zo);
    });
    var Bo = new Date().getTime(), Zo = [];
    function Fo(n2) {
      n2 ? (function() {
        var n3, t2 = "";
        i.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
        var e2 = "onwheel" in r.createElement("div") ? "wheel" : r.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", o2 = Re();
        e2 == "DOMMouseScroll" ? r[n3](t2 + "MozMousePixelScroll", Vo, o2) : r[n3](t2 + e2, Vo, o2);
      }(), Un().addEventListener("mousedown", Go), Un().addEventListener("mouseup", Yo)) : (r.addEventListener ? (F("mousewheel", Vo, false), F("wheel", Vo, false), F("MozMousePixelScroll", Vo, false)) : r.detachEvent("onmousewheel", Vo), Un().removeEventListener("mousedown", Go), Un().removeEventListener("mouseup", Yo));
    }
    function Vo(n2) {
      var t2 = new Date().getTime(), e2 = h(v(".fp-completely")[0], "fp-normal-scroll"), o2 = function(n3, t3) {
        new Date().getTime();
        var e3 = ln().M && n3.getBoundingClientRect().bottom >= 0 && Ze.Mn() === "up", o3 = ln().Tn;
        if (o3)
          return I(t3), false;
        if (ln().M) {
          if (e3) {
            var i2;
            if (!(o3 || Je("isNewKeyframe", "beyondFullpage") && Ze.yn()))
              return (i2 = pt($(ln().h).item.offsetTop + $(ln().h).item.offsetHeight)).element.scrollTo(0, i2.options), an({ Tn: false }), I(t3), false;
            if (Ze.yn())
              return e3 = false, an({ Tn: true }), an({ S: "wheel" }), Ge(), I(t3), false;
          } else
            Je("set", "beyondFullpage", 1e3);
          if (!o3 && !e3)
            return true;
        }
      }(Un(), n2);
      if (rn.H || an({ C: false, H: true, P: "none" }), !Vt().m.down && !Vt().m.up)
        return I(n2), false;
      if (o2)
        return true;
      if (o2 === false)
        return I(n2), false;
      if (Qn().autoScrolling && !co && !e2) {
        var r2 = (n2 = n2 || i.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), l2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0, u2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !l2, c2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
        Zo.length > 149 && Zo.shift(), Zo.push(Math.abs(r2)), Qn().scrollBar && I(n2);
        var s2 = t2 - Bo;
        return Bo = t2, s2 > 200 && (Zo = []), an({ N: c2 }), rn.canScroll && !ut() && nn(Zo, 10) >= nn(Zo, 70) && u2 && (an({ S: "wheel" }), uo(a2 < 0 ? "down" : "up")), false;
      }
      Qn().fitToSection && an({ L: false });
    }
    function Go(n2) {
      var t2;
      n2.which == 2 && (t2 = n2.pageY, ao = t2, Un().addEventListener("mousemove", lo));
    }
    function Yo(n2) {
      n2.which == 2 && Un().removeEventListener("mousemove", lo);
    }
    function Xo(n2) {
      n2 ? (Fo(true), function() {
        if (mo.On && (a || u) && (!at("dragAndMove") || Qn().dragAndMove === "mouseonly")) {
          Qn().autoScrolling && (Rt.removeEventListener(mo.On, Ao, { passive: false }), Rt.addEventListener(mo.On, Ao, { passive: false }));
          var n3 = Qn().touchWrapper;
          n3.removeEventListener(mo.En, So), n3.removeEventListener(mo.On, wo, { passive: false }), n3.addEventListener(mo.En, So), n3.addEventListener(mo.On, wo, { passive: false });
        }
      }()) : (Fo(false), function() {
        if (mo.On && (a || u)) {
          Qn().autoScrolling && (Rt.removeEventListener(mo.On, wo, { passive: false }), Rt.removeEventListener(mo.On, Ao, { passive: false }));
          var n3 = Qn().touchWrapper;
          n3.removeEventListener(mo.En, So), n3.removeEventListener(mo.On, wo, { passive: false });
        }
      }());
    }
    c.setMouseWheelScrolling = Fo;
    var Uo = true;
    function Qo() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
        F(n2, Jo, true);
      });
    }
    function _o(n2, t2) {
      document["fp_" + n2] = t2, B(n2, Jo, true);
    }
    function Jo(n2) {
      var t2 = n2.type, e2 = false, o2 = t2 === "mouseleave" ? n2.toElement || n2.relatedTarget : n2.target;
      o2 != document && o2 ? (t2 === "touchend" && (Uo = false, setTimeout(function() {
        Uo = true;
      }, 800)), (t2 !== "mouseenter" || Uo) && (Qn().normalScrollElements.split(",").forEach(function(n3) {
        if (!e2) {
          var t3 = X(o2, n3), i2 = z(o2, n3);
          (t3 || i2) && (c.shared.kn || Xo(false), c.shared.kn = true, e2 = true);
        }
      }), !e2 && c.shared.kn && (Xo(true), c.shared.kn = false))) : Xo(true);
    }
    function Ko(n2, t2) {
      Mt(0, "internal"), Ro(n2, t2), Mt(_n().scrollingSpeed, "internal");
    }
    on.l("bindEvents", function() {
      Qn().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
        _o(n2, false);
      }), ["mouseleave", "touchend"].forEach(function(n2) {
        _o(n2, true);
      })), on.l("onDestroy", Qo);
    }), c.silentMoveTo = Ko;
    var qo, $o, ni = g(), ti = m(), ei = false;
    function oi() {
      clearTimeout(qo), clearTimeout($o), V("resize", ii);
    }
    function ii() {
      ei || (Qn().autoScrolling && !Qn().scrollBar || !Qn().fitToSection) && ai(g()), function() {
        if (a)
          for (var n2 = 0; n2 < 4; n2++)
            $o = setTimeout(function() {
              window.requestAnimationFrame(function() {
                Qn().autoScrolling && !Qn().scrollBar && (an({ O: true }), Ko(rn.g.index() + 1), an({ O: false }));
              });
            }, 200 * n2);
      }(), ei = true, clearTimeout(qo), qo = setTimeout(function() {
        !function() {
          if (an({ O: true }), ai(""), Y(Un(), "onResize"), !Qn().fitToSection || Qn().autoScrolling || rn.M || function() {
            if (!Qn().autoScrolling || Qn().scrollBar) {
              var n3 = 0.01 * i.innerHeight;
              r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
            }
          }(), on.u("contentChanged"), de(), re(), a) {
            var n2 = r.activeElement;
            if (!X(n2, "textarea") && !X(n2, "input") && !X(n2, "select")) {
              var t2 = g();
              Math.abs(t2 - ni) > 20 * Math.max(ni, t2) / 100 && (ri(true), ni = t2);
            }
          } else
            e2 = g(), o2 = m(), rn.B === e2 && ti === o2 || (an({ B: e2 }), ti = o2, ri(true));
          var e2, o2;
          Y(Un(), "onResizeEnds"), an({ O: false });
        }(), ei = false;
      }, 400);
    }
    function ri(n2) {
      if (!h(Un(), hn)) {
        an({ O: true, B: g(), Dn: m() });
        for (var t2 = ln().h, e2 = 0; e2 < t2.length; ++e2) {
          var o2 = t2[e2], r2 = v(Dn, o2.item)[0], a2 = o2.slides;
          at("offsetSections") && w(o2.item, { height: st(o2.item) + "px" }), a2.length > 1 && Ut(r2, o2.activeSlide.item);
        }
        Qn().scrollOverflow && ce.en();
        var l2 = lt("responsiveSlides", "getActiveIndex") || ln().g.index();
        rn.M || !l2 || at("fadingEffect") || at("dropEffect") || at("waterEffect") || Ko(l2 + 1), an({ O: false }), G(Qn().afterResize) && n2 && Qn().afterResize.call(Un(), i.innerWidth, i.innerHeight), G(Qn().afterReBuild) && !n2 && Qn().afterReBuild.call(Un()), Y(Un(), "afterRebuild");
      }
    }
    function ai(n2) {
      ln().h.forEach(function(t2) {
        var e2 = n2 === "" ? "" : st(t2.item) + "px";
        w(t2.item, { height: e2 });
      });
    }
    function li() {
      var n2, t2, e2 = i.location.hash;
      if (e2.length) {
        var o2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
        n2 = r2 ? "/" + o2[1] : decodeURIComponent(o2[0]);
        var a2 = r2 ? o2[2] : o2[1];
        a2 && a2.length && (t2 = decodeURIComponent(a2));
      }
      return { section: n2, J: t2 };
    }
    function ui() {
      V("hashchange", ci);
    }
    function ci() {
      if (!rn.D && !Qn().lockAnchors) {
        var n2 = li(), t2 = n2.section, e2 = n2.J, o2 = rn.j === void 0, i2 = rn.j === void 0 && e2 === void 0 && !rn.A;
        t2 && t2.length && (t2 && t2 !== rn.j && !o2 || i2 && !ut() || !rn.A && rn.R != e2 && !ut()) && on.u("onScrollPageAndSlide", { jn: t2, slideAnchor: e2 });
      }
    }
    function si(n2) {
      var t2 = n2.target;
      z(t2, Qn().menu + " [data-menuanchor]") && fi.call(t2, n2);
    }
    function fi(n2) {
      an({ S: "menu" }), !v(Qn().menu)[0] || !Qn().lockAnchors && Qn().anchors.length || (I(n2), on.u("onMenuClick", { anchor: W(this, "data-menuanchor") }));
    }
    function di(n2) {
      var t2 = n2.target;
      t2 && z(t2, "#fp-nav a") ? ye.call(t2, n2.e) : X(t2, ".fp-tooltip") ? be.call(t2) : (X(t2, Cn) || z(t2, Cn) != null) && Wt.call(t2, n2.e);
    }
    c.reBuild = ri, on.l("bindEvents", function() {
      Z("resize", ii), on.l("onDestroy", oi);
    }), c.setLockAnchors = function(n2) {
      Qn().lockAnchors = n2;
    }, on.l("bindEvents", function() {
      Z("hashchange", ci), on.l("onDestroy", ui);
    }), on.l("bindEvents", function() {
      B("wheel", Ze.Sn, Re()), on.l("scrollBeyondFullpage", Fe), on.l("onKeyDown", Ve);
    }), on.l("bindEvents", function() {
      on.l("onClickOrTouch", si);
    }), on.l("bindEvents", function() {
      on.l("onClickOrTouch", di);
    });
    var vi, pi, hi = 0;
    function gi(n2) {
      var t2, e2, o2, i2, a2;
      if (Y(Un(), "onScroll"), !rn.O && ln().g && ($(ln().h), !ln().M && !ln().Tn && (!Qn().autoScrolling || Qn().scrollBar || at("dragAndMove")) && !ct())) {
        var l2 = at("dragAndMove") ? Math.abs(lt("dragAndMove", "getCurrentScroll")) : C(Qn()), u2 = function(n3) {
          var t3 = n3 > hi ? "down" : "up";
          return hi = n3, an({ W: n3 }), t3;
        }(l2), c2 = 0, s2 = l2 + g() / 2, f2 = (at("dragAndMove") ? lt("dragAndMove", "getDocumentHeight") : Rt.scrollHeight - g()) === l2, d2 = (lt("responsiveSlides", "areSlidesSections") ? lt("responsiveSlides", "panels") : null) || ln().h;
        if (an({ scrollY: l2 }), f2)
          c2 = d2.length - 1;
        else if (l2)
          for (var v2 = 0; v2 < d2.length; ++v2)
            (z(d2[v2].item, yn) || d2[v2].item).offsetTop <= s2 && (c2 = v2);
        else
          c2 = 0;
        if (o2 = u2, i2 = ln().g.item.offsetTop, a2 = i2 + g(), (o2 == "up" ? a2 >= C(Qn()) + g() : i2 <= C(Qn())) && (h(ln().g.item, bn) || (O(ln().g.item, bn), E(H(ln().g.item), bn))), e2 = (t2 = d2[c2]).item, !lt("responsiveSlides", "isCurrentSectionActive", c2) && !t2.isActive) {
          an({ D: true });
          var p2, m2, b2 = ln().g.item, S2 = ln().g.index() + 1, y2 = mt(ln().g, e2), M2 = lt("responsiveSlides", "getSectionAnchor", t2) || t2.anchor, T2 = t2.index() + 1, A2 = t2.activeSlide, x2 = { g: b2, sectionIndex: T2 - 1, anchorLink: M2, element: e2, leavingSection: S2, direction: y2, items: { origin: ln().g, destination: t2 } };
          if (A2 && (m2 = A2.anchor, p2 = A2.index()), rn.canScroll)
            E(d2.filter(function(n3) {
              return n3.index() !== t2.index();
            }).map(function(n3) {
              return n3.item;
            }), mn), O(e2, mn), lt("parallax", "afterLoad"), G(Qn().beforeLeave) && no("beforeLeave", x2), G(Qn().onLeave) && Ot("onLeave", x2), G(Qn().afterLoad) && Ot("afterLoad", x2), lt("resetSliders", "apply", { localIsResizing: rn.O, leavingSection: S2 }), Dt(b2), jt(e2), Et(e2), $e(M2, T2 - 1), Qn().anchors.length && an({ j: M2 }), Ct(p2, m2, M2), de();
          clearTimeout(vi), vi = setTimeout(function() {
            an({ D: false });
          }, 100);
        }
        Qn().fitToSection && rn.canScroll && (clearTimeout(pi), pi = setTimeout(function() {
          rn.h.filter(function(n3) {
            var t3 = n3.item.getBoundingClientRect();
            return Math.round(t3.bottom) === Math.round(g()) || Math.round(t3.top) === 0;
          }).length || w(r.body, { "scroll-snap-type": "y mandatory" });
        }, 300));
      }
    }
    function mi(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Ft(n2, t3, "k");
      }) : (Ft(n2, "all", "k"), Qn().keyboardScrolling = n2);
    }
    function wi(n2) {
      var t2 = n2.index();
      Qn().anchors[t2] !== void 0 && n2.isActive && $e(Qn().anchors[t2], t2), Qn().menu && Qn().css3 && z(v(Qn().menu)[0], dn) != null && v(Qn().menu).forEach(function(n3) {
        Rt.appendChild(n3);
      });
    }
    function bi() {
      w(function(n3, t3) {
        var e3 = [n3];
        do {
          n3 = n3.parentNode, e3.push(n3);
        } while (!X(n3, "body"));
        return e3;
      }(Un()), { height: "100%", position: "relative" }), O(Un(), fn), O(zt, gn), an({ B: g() }), E(Un(), hn), we(), lt("parallax", "init");
      for (var n2 = ln().Y, t2 = 0; t2 < n2.length; t2++) {
        var e2 = n2[t2], o2 = e2.wn;
        e2.item.setAttribute("data-fp-styles", W(e2.item, "style")), Oe(e2), wi(e2), o2.length > 0 && Te(e2);
      }
      Qn().fixedElements && Qn().css3 && v(Qn().fixedElements).forEach(function(n3) {
        Rt.appendChild(n3);
      }), Qn().navigation && Se(), v('iframe[src*="youtube.com/embed/"]', Un()).forEach(function(n3) {
        var t3, e3;
        e3 = W(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
      }), lt("fadingEffect", "apply"), lt("waterEffect", "init"), lt("dropEffect", "init"), lt("cards", "init"), Qn().scrollOverflow && ce.en();
    }
    function Si() {
      var n2, t2, e2 = ln().g, o2 = ln().g.item;
      O(o2, bn), jt(o2), qe(), Et(o2), t2 = ko((n2 = li()).section), n2.section && t2 && (t2 === void 0 || t2.index() !== y(xe)) || !G(Qn().afterLoad) || Ot("afterLoad", { g: o2, element: o2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: ln().g, destination: ln().g } }), G(Qn().afterRender) && Ot("afterRender"), Y(Un(), "afterRender");
    }
    function yi(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Ft(n2, t3, "m");
      }) : Ft(n2, "all", "m"), Y(Un(), "setAllowScrolling", { value: n2, Rn: t2 });
    }
    function Mi() {
      var n2 = li(), t2 = n2.section, e2 = n2.J;
      t2 && (Qn().animateAnchor ? jo(t2, e2) : Ko(t2, e2));
    }
    on.l("onDestroy", function() {
      clearTimeout(vi), clearTimeout(pi);
    }), on.l("bindEvents", function() {
      Z("scroll", gi), r.body.addEventListener("scroll", gi), on.l("onScrollPageAndSlide", function(n2) {
        jo(n2.jn, n2.slideAnchor);
      }), on.l("onMenuClick", function(n2) {
        Ro(n2.anchor, void 0);
      }), on.l("onScrollOverflowScrolled", function(n2) {
        (n2.direction === "down" ? io : ro)();
      }), on.l("scrollPage", function(n2) {
        to(n2.destination);
      });
    }), on.l("onDestroy", function() {
      V("scroll", gi);
    }), c.getActiveSlide = function() {
      return xt(ln().g.activeSlide);
    }, c.getScrollX = function() {
      return rn.scrollX;
    }, on.l("bindEvents", function() {
      on.l("onDestroy", Jt), on.l("landscapeScroll", function(n2) {
        Ut(n2.slides, n2.destination);
      }), on.l("moveSlideRight", function(n2) {
        Eo(n2.section);
      }), on.l("moveSlideLeft", function(n2) {
        Oo(n2.section);
      });
    }), on.l("bindEvents", function() {
      var n2 = Qn().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(Qn().credits.label, "\n            </a>\n        </div>\n    "), o2 = $(rn.h), i2 = Qn().credits.enabled && !rn.zn;
      o2 && o2.item && i2 && o2.item.insertAdjacentHTML("beforeend", e2);
    }), function() {
      on.l("onInitialise", function() {
        var t3, l2;
        an({ zn: (Qn().licenseKey, t3 = Qn().licenseKey, l2 = function(t4) {
          var e3 = parseInt("514").toString(16);
          if (!t4 || t4.length < 29 || t4.split(n2[0]).length === 4)
            return null;
          var o3 = ["Each", "for"][i2()]().join(""), l3 = t4[["split"]]("-"), u2 = [];
          l3[o3](function(n3, t5) {
            if (t5 < 4) {
              var o4 = function(n4) {
                var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][i2()]().join("");
                return window[e4](t6) ? r2(t6) : function(n5) {
                  return n5 - mn.length;
                }(t6);
              }(n3);
              u2.push(o4);
              var a3 = r2(n3[o4]);
              if (t5 === 1) {
                var l4 = ["pa", "dS", "t", "art"].join("");
                a3 = a3.toString()[l4](2, "0");
              }
              e3 += a3, t5 !== 0 && t5 !== 1 || (e3 += "-");
            }
          });
          var c2 = 0, s2 = "";
          return t4.split("-").forEach(function(n3, t5) {
            if (t5 < 4) {
              for (var e4 = 0, o4 = 0; o4 < 4; o4++)
                o4 !== u2[t5] && (e4 += Math.abs(r2(n3[o4])), isNaN(n3[o4]) || c2++);
              var i3 = a2(e4);
              s2 += i3;
            }
          }), s2 += a2(c2), { Ln: new Date(e3 + "T00:00"), Pn: e3.split("-")[2] === 8 * (mn.length - 2) + "", Nn: s2 };
        }(t3), l2 && (Qn().credits && l2 && e2 <= l2.Ln && l2.Nn === t3.split(n2[0])[4] || function(n3) {
          var t4 = o2[i2()]().join("");
          return n3 && t4.indexOf(n3) === 0 && n3.length === t4.length;
        }(t3) || l2.Pn) || false) });
      });
      var n2 = ["-"], t2 = "2022-7-7".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), o2 = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), c.setKeyboardScrolling = mi, c.shared.Cn = Si, c.setAllowScrolling = yi;
    var Ti = {};
    function Ai() {
      return Ti;
    }
    var xi, Oi, Ei, ki, Di = !h(Rt, dt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function ji(n2) {
      if (Oi = r.createElement("div"), xi = dt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), Di || (xi = xi.replace("extensions/", "").replace("Extension", "")), Oi.innerHTML = xi, Oi = Oi.firstChild, "MutationObserver" in window && new MutationObserver(zi).observe(r.body, { childList: true, subtree: false }), (!Di || at(n2) && c[n2]) && (!function(n3) {
        var t3 = Ai()[n3] !== void 0 && Ai()[n3].length, e2 = [], o2 = false;
        return x(Ai()[n3]) ? e2 = Ai()[n3] : e2.push(Ai()[n3]), e2.forEach(function(e3) {
          var i2 = function() {
            if (r.domain.length) {
              for (var n4 = r.domain.replace(/^(www\.)/, "").split("."); n4.length > 2; )
                n4.shift();
              return n4.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), a2 = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], l2 = dt(a2[0]), u2 = dt(a2[1]), c2 = dt(a2[2]), s2 = dt(a2[3]), f2 = dt(a2[4]), d2 = dt(a2[5]), v2 = Qn()[f2 + d2] !== void 0;
          t3 = t3 || v2;
          var p2 = [l2, u2, c2].indexOf(i2) < 0 && i2.length !== 0;
          if (!t3 && !v2 && p2)
            return false;
          var h2 = t3 ? dt(e3) : "", g2 = (h2 = h2.split("_")).length > 1 && h2[1].indexOf(n3, h2[1].length - n3.length) > -1, m2 = h2.length > 1 && h2[1].toLowerCase().indexOf(f2) > -1, w2 = h2[0].indexOf(i2, h2[0].length - i2.length) < 0, b2 = g2 || m2;
          o2 = o2 || !(w2 && p2 && s2 != h2[0]) && b2 || !p2;
        }), o2;
      }(n2) || !Di)) {
        Ri();
        var t2 = dt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t2](Ri, 2e3);
      }
    }
    function Ri() {
      Oi && (ki || (Math.random() < 0.5 ? ft(Rt, Oi) : k(Oi, Rt), ki = true), Oi.setAttribute("style", dt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, dt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function zi(n2) {
      n2.forEach(function(n3) {
        if (n3.removedNodes[0] && n3.removedNodes[0].isEqualNode(Oi)) {
          clearTimeout(Ei);
          var t2 = dt("bDIwc2V0VGltZW91dDAzbA==");
          Ei = window[t2](Li, 900);
        }
      });
    }
    function Li() {
      ki = false;
    }
    function Pi() {
      var n2 = Qn().licenseKey;
      Qn().licenseKey.trim() === "" ? (s("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), s("error", "https://github.com/alvarotrigo/fullPage.js#options")) : Qn() && rn.zn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length : (s("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), s("error", "https://alvarotrigo.com/fullPage/pricing")), h(zt, gn) ? s("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (Qn().continuousVertical && (Qn().loopTop || Qn().loopBottom) && (Qn().continuousVertical = false, s("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !Qn().scrollOverflow || !Qn().scrollBar && Qn().autoScrolling || s("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !Qn().continuousVertical || !Qn().scrollBar && Qn().autoScrolling || (Qn().continuousVertical = false, s("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), Qn().anchors.forEach(function(n3) {
        var t2 = [].slice.call(v("[name]")).filter(function(t3) {
          return W(t3, "name") && W(t3, "name").toLowerCase() == n3.toLowerCase();
        }), e2 = [].slice.call(v("[id]")).filter(function(t3) {
          return W(t3, "id") && W(t3, "id").toLowerCase() == n3.toLowerCase();
        });
        if (e2.length || t2.length) {
          s("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var o2 = e2.length ? "id" : "name";
          (e2.length || t2.length) && s("error", '"' + n3 + '" is is being used by another element `' + o2 + "` property");
        }
      }));
    }
    function Ni() {
      return { options: Qn(), internals: { container: Un(), canScroll: rn.canScroll, isScrollAllowed: Vt(), getDestinationPosition: eo, isTouch: u, c: ji, getXmovement: _t, removeAnimation: wt, getTransforms: bt, lazyLoad: jt, addAnimation: gt, performHorizontalMove: Qt, landscapeScroll: Ut, silentLandscapeScroll: qt, keepSlidesPosition: Ke, silentScroll: yt, styleSlides: Te, styleSection: Oe, scrollHandler: gi, getEventsPage: Mo, getMSPointer: To, isReallyTouch: bo, usingExtension: at, toggleControlArrows: Yt, touchStartHandler: So, touchMoveHandler: wo, nullOrSection: At, items: { SectionPanel: ge, SlidePanel: me, Item: $n }, getVisible: d, getState: ln, updateState: de, getPanels: function() {
        return rn.U;
      }, getSections: function() {
        return rn.h;
      }, setActiveSection: function(n2) {
        rn.g = n2;
      } } };
    }
    function Ci(n2) {
      var t2 = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], e2 = dt(t2[0]), o2 = dt(t2[1]), i2 = Qn()[e2 + o2] !== void 0, r2 = "fp_" + n2 + "Extension";
      Ai()[n2] = i2 ? Qn()[e2 + o2] : Qn()[n2 + o2], c[n2] = window[r2] !== void 0 ? new window[r2]() : null, c[n2] && c[n2].c(n2);
    }
    function Hi(n2, t2) {
      var e2;
      if (Rt = v("body")[0], zt = v("html")[0], Lt = v("html, body"), !h(zt, gn))
        return e2 = typeof n2 == "string" ? v(n2)[0] : n2, Fn.touchWrapper = e2, function(n3) {
          Xn = p({}, Fn, n3), Yn = Object.assign({}, Xn);
        }(t2), function(n3) {
          Vn = n3;
        }(typeof n2 == "string" ? v(n2)[0] : n2), on.u("onInitialise"), Pi(), c.getFullpageData = Ni, c.version = "4.0.10", c.test = Object.assign(c.test, { top: "0px", _: "translate3d(0px, 0px, 0px)", K: function() {
          for (var n3 = [], t3 = 0; t3 < v(Qn().sectionSelector, Un()).length; t3++)
            n3.push("translate3d(0px, 0px, 0px)");
          return n3;
        }(), left: function() {
          for (var n3 = [], t3 = 0; t3 < v(Qn().sectionSelector, Un()).length; t3++)
            n3.push(0);
          return n3;
        }(), options: Qn(), setAutoScrolling: null }), c.shared = Object.assign(c.shared, { Cn: null, kn: false }), i.fullpage_api = c, i.fullpage_extensions = true, Un() && (on.u("beforeInit"), Ci("continuousHorizontal"), Ci("scrollHorizontally"), Ci("resetSliders"), Ci("interlockedSlides"), Ci("responsiveSlides"), Ci("fadingEffect"), Ci("dragAndMove"), Ci("offsetSections"), Ci("scrollOverflowReset"), Ci("parallax"), Ci("cards"), Ci("dropEffect"), Ci("waterEffect"), lt("dragAndMove", "init"), lt("responsiveSlides", "init"), ve(), de(), Qn().scrollBar = Qn().scrollBar || Qn().hybrid, Kn(), bi(), ie(true), yi(true), Xo(true), ne(Qn().autoScrolling, "internal"), re(), Pt(), r.readyState === "complete" && Mi(), Z("load", Mi), Si(), Di || ji("l"), ve(), de(), on.u("bindEvents"), lt("dragAndMove", "turnOffTouch")), i.fullpage_api;
      Pi();
    }
    return c.destroy = function(n2) {
      Y(Un(), "destroy", n2), ne(false, "internal"), yi(true), Xo(false), mi(false), O(Un(), hn), on.u("onDestroy"), lt("dragAndMove", "destroy"), n2 && (yt(0), v("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Un()).forEach(function(n3) {
        tn(n3, "src");
      }), v("img[data-srcset]").forEach(function(n3) {
        tn(n3, "srcset");
      }), _(v("#fp-nav, .fp-slidesNav, .fp-controlArrow")), w(nt(ln().h), { height: "", "background-color": "", padding: "" }), w(nt(ln().slides), { width: "" }), w(Un(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), w(Lt, { overflow: "", height: "" }), E(zt, gn), E(Rt, vn), Rt.className.split(/\s+/).forEach(function(n3) {
        n3.indexOf("fp-viewing") === 0 && E(Rt, n3);
      }), nt(ln().U).forEach(function(n3) {
        Qn().scrollOverflow && E(n3, Ln), E(n3, "fp-table active " + bn), W(n3, "data-fp-styles") && n3.setAttribute("style", W(n3, "data-fp-styles")), h(n3, Sn) && !Gn && n3.removeAttribute("data-anchor");
      }), wt(Un()), [Mn, Rn, Dn].forEach(function(n3) {
        v(n3, Un()).forEach(function(n4) {
          R(n4);
        });
      }), w(Un(), { "-webkit-transition": "none", transition: "none" }), i.scrollTo(0, 0), [Sn, xn, jn].forEach(function(n3) {
        E(v("." + n3), n3);
      }));
    }, i.fp_easings = p(i.fp_easings, { easeInOutCubic: function(n2, t2, e2, o2) {
      return (n2 /= o2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
    } }), i.jQuery && function(n2, t2) {
      n2 && t2 ? n2.fn.fullpage = function(e2) {
        e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(c).forEach(function(n3) {
          Qn().$.fn.fullpage[n3] = c[n3];
        });
      } : s("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(i.jQuery, Hi), Hi;
  });
})(fullpage_extensions_min);
var fullpage = fullpage_extensions_min.exports;
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
