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
* vue-fullpage 0.2.9
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
* fullPage 4.0.14
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
    var n, t, e, i;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(n2) {
      if (this == null)
        throw new TypeError('"this" is null or not defined');
      var t2 = Object(this), e2 = t2.length >>> 0;
      if (typeof n2 != "function")
        throw new TypeError("predicate must be a function");
      for (var i2 = arguments[1], o2 = 0; o2 < e2; ) {
        var r2 = t2[o2];
        if (n2.call(i2, r2, o2, t2))
          return r2;
        o2++;
      }
    } }), Array.from || (Array.from = (n = Object.prototype.toString, t = function(t2) {
      return typeof t2 == "function" || n.call(t2) === "[object Function]";
    }, e = Math.pow(2, 53) - 1, i = function(n2) {
      var t2 = function(n3) {
        var t3 = Number(n3);
        return isNaN(t3) ? 0 : t3 !== 0 && isFinite(t3) ? (t3 > 0 ? 1 : -1) * Math.floor(Math.abs(t3)) : t3;
      }(n2);
      return Math.min(Math.max(t2, 0), e);
    }, function(n2) {
      var e2 = this, o2 = Object(n2);
      if (n2 == null)
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      var r2, a2 = arguments.length > 1 ? arguments[1] : void 0;
      if (a2 !== void 0) {
        if (!t(a2))
          throw new TypeError("Array.from: when provided, the second argument must be a function");
        arguments.length > 2 && (r2 = arguments[2]);
      }
      for (var l2, u2 = i(o2.length), c2 = t(e2) ? Object(new e2(u2)) : new Array(u2), s2 = 0; s2 < u2; )
        l2 = o2[s2], c2[s2] = a2 ? r2 === void 0 ? a2(l2, s2) : a2.call(r2, l2, s2) : l2, s2 += 1;
      return c2.length = u2, c2;
    }));
    var o = window, r = document, a = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), l = /(Mac|iPhone|iPod|iPad)/i.test(o.navigator.userAgent), u = "ontouchstart" in o || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, c = !!window.MSInputMethodContext && !!document.documentMode, s = { test: {}, shared: {} };
    function f(n2, t2) {
      o.console && o.console[n2] && o.console[n2]("fullPage: " + t2);
    }
    function d(n2) {
      return o.getComputedStyle(n2).display !== "none";
    }
    function v(n2) {
      return Array.from(n2).filter(function(n3) {
        return d(n3);
      });
    }
    function p(n2, t2) {
      return (t2 = arguments.length > 1 ? t2 : document) ? t2.querySelectorAll(n2) : null;
    }
    function h(n2) {
      n2 = n2 || {};
      for (var t2 = 1, e2 = arguments.length; t2 < e2; ++t2) {
        var i2 = arguments[t2];
        if (i2)
          for (var o2 in i2)
            i2.hasOwnProperty(o2) && o2 != "__proto__" && o2 != "constructor" && (Object.prototype.toString.call(i2[o2]) !== "[object Object]" ? n2[o2] = i2[o2] : n2[o2] = h(n2[o2], i2[o2]));
      }
      return n2;
    }
    function g(n2, t2) {
      return n2 != null && n2.classList.contains(t2);
    }
    function m() {
      return "innerHeight" in o ? o.innerHeight : r.documentElement.offsetHeight;
    }
    function w() {
      return o.innerWidth;
    }
    function b(n2, t2) {
      var e2;
      for (e2 in n2 = A(n2), t2)
        if (t2.hasOwnProperty(e2) && e2 !== null)
          for (var i2 = 0; i2 < n2.length; i2++)
            n2[i2].style[e2] = t2[e2];
      return n2;
    }
    function S(n2, t2) {
      if (t2 == null)
        return n2.previousElementSibling;
      var e2 = S(n2);
      return e2 && Q(e2, t2) ? e2 : null;
    }
    function y(n2, t2) {
      if (t2 == null)
        return n2.nextElementSibling;
      var e2 = y(n2);
      return e2 && Q(e2, t2) ? e2 : null;
    }
    function M(n2) {
      return n2[n2.length - 1];
    }
    function T(n2, t2) {
      n2 = E(n2) ? n2[0] : n2;
      for (var e2 = t2 != null ? p(t2, n2.parentNode) : n2.parentNode.childNodes, i2 = 0, o2 = 0; o2 < e2.length; o2++) {
        if (e2[o2] == n2)
          return i2;
        e2[o2].nodeType == 1 && i2++;
      }
      return -1;
    }
    function A(n2) {
      return E(n2) ? n2 : [n2];
    }
    function x(n2) {
      n2 = A(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "none";
      return n2;
    }
    function O(n2) {
      n2 = A(n2);
      for (var t2 = 0; t2 < n2.length; t2++)
        n2[t2].style.display = "block";
      return n2;
    }
    function E(n2) {
      return Object.prototype.toString.call(n2) === "[object Array]" || Object.prototype.toString.call(n2) === "[object NodeList]";
    }
    function R(n2, t2) {
      n2 = A(n2);
      for (var e2 = 0; e2 < n2.length; e2++)
        n2[e2].classList.add(t2);
      return n2;
    }
    function k(n2, t2) {
      n2 = A(n2);
      for (var e2 = t2.split(" "), i2 = 0; i2 < e2.length; i2++) {
        t2 = e2[i2];
        for (var o2 = 0; o2 < n2.length; o2++)
          n2[o2].classList.remove(t2);
      }
      return n2;
    }
    function j(n2, t2) {
      t2.appendChild(n2);
    }
    function z(n2, t2, e2) {
      var i2;
      t2 = t2 || r.createElement("div");
      for (var o2 = 0; o2 < n2.length; o2++) {
        var a2 = n2[o2];
        (e2 && !o2 || !e2) && (i2 = t2.cloneNode(true), a2.parentNode.insertBefore(i2, a2)), i2.appendChild(a2);
      }
      return n2;
    }
    function D(n2, t2) {
      z(n2, t2, true);
    }
    function L(n2, t2) {
      for (typeof t2 == "string" && (t2 = K(t2)), n2.appendChild(t2); n2.firstChild !== t2; )
        t2.appendChild(n2.firstChild);
    }
    function N(n2) {
      for (var t2 = r.createDocumentFragment(); n2.firstChild; )
        t2.appendChild(n2.firstChild);
      n2.parentNode.replaceChild(t2, n2);
    }
    function P(n2, t2) {
      return n2 && n2.nodeType === 1 ? Q(n2, t2) ? n2 : P(n2.parentNode, t2) : null;
    }
    function C(n2, t2) {
      W(n2, n2.nextSibling, t2);
    }
    function H(n2, t2) {
      W(n2, n2, t2);
    }
    function W(n2, t2, e2) {
      E(e2) || (typeof e2 == "string" && (e2 = K(e2)), e2 = [e2]);
      for (var i2 = 0; i2 < e2.length; i2++)
        n2.parentNode.insertBefore(e2[i2], t2);
    }
    function I() {
      var n2 = r.documentElement;
      return (o.pageYOffset || n2.scrollTop) - (n2.clientTop || 0);
    }
    function V(n2) {
      return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
        return t2 !== n2;
      });
    }
    function F(n2) {
      n2.preventDefault();
    }
    function Z(n2, t2) {
      return n2.getAttribute(t2);
    }
    function B(n2, t2, e2) {
      r.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function G(n2, t2, e2) {
      o.addEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function Y(n2, t2, e2) {
      r.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function U(n2, t2, e2) {
      o.removeEventListener(n2, t2, e2 === "undefined" ? null : e2);
    }
    function X(n2) {
      if (typeof n2 == "function")
        return true;
      var t2 = Object.prototype.toString.call(n2);
      return t2 === "[object Function]" || t2 === "[object GeneratorFunction]";
    }
    function _(n2, t2, e2) {
      var i2;
      e2 = e2 === void 0 ? {} : e2, typeof o.CustomEvent == "function" ? i2 = new CustomEvent(t2, { detail: e2 }) : (i2 = r.createEvent("CustomEvent")).initCustomEvent(t2, true, true, e2), n2.dispatchEvent(i2);
    }
    function Q(n2, t2) {
      return (n2.matches || n2.t || n2.msMatchesSelector || n2.mozMatchesSelector || n2.webkitMatchesSelector || n2.oMatchesSelector).call(n2, t2);
    }
    function J(n2, t2) {
      if (typeof t2 == "boolean")
        for (var e2 = 0; e2 < n2.length; e2++)
          n2[e2].style.display = t2 ? "block" : "none";
      return n2;
    }
    function K(n2) {
      var t2 = r.createElement("div");
      return t2.innerHTML = n2.trim(), t2.firstChild;
    }
    function q(n2) {
      n2 = A(n2);
      for (var t2 = 0; t2 < n2.length; t2++) {
        var e2 = n2[t2];
        e2 && e2.parentElement && e2.parentNode.removeChild(e2);
      }
    }
    function $(n2, t2) {
      Array.prototype.filter.call(n2, t2);
    }
    function nn(n2, t2, e2) {
      for (var i2 = n2[e2], o2 = []; i2; )
        (Q(i2, t2) || t2 == null) && o2.push(i2), i2 = i2[e2];
      return o2;
    }
    function tn(n2, t2) {
      return nn(n2, t2, "nextElementSibling");
    }
    function en(n2, t2) {
      return nn(n2, t2, "previousElementSibling");
    }
    function on(n2) {
      return Object.keys(n2).map(function(t2) {
        return n2[t2];
      });
    }
    function rn(n2) {
      return n2[n2.length - 1];
    }
    function an(n2, t2) {
      for (var e2 = 0, i2 = n2.slice(Math.max(n2.length - t2, 1)), o2 = 0; o2 < i2.length; o2++)
        e2 += i2[o2];
      return Math.ceil(e2 / t2);
    }
    function ln(n2, t2) {
      n2.setAttribute(t2, Z(n2, "data-" + t2)), n2.removeAttribute("data-" + t2);
    }
    function un(n2, t2) {
      var e2 = [n2];
      do {
        n2 = n2.parentNode, e2.push(n2);
      } while (!Q(n2, t2));
      return e2;
    }
    o.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(n2, t2) {
      t2 = t2 || window;
      for (var e2 = 0; e2 < this.length; e2++)
        n2.call(t2, this[e2], e2, this);
    }), typeof Object.assign != "function" && Object.defineProperty(Object, "assign", { value: function(n2, t2) {
      if (n2 == null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var e2 = Object(n2), i2 = 1; i2 < arguments.length; i2++) {
        var o2 = arguments[i2];
        if (o2 != null)
          for (var r2 in o2)
            Object.prototype.hasOwnProperty.call(o2, r2) && (e2[r2] = o2[r2]);
      }
      return e2;
    }, writable: true, i: true }), window.fp_utils = { $: p, deepExtend: h, hasClass: g, getWindowHeight: m, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: E, addClass: R, removeClass: k, appendTo: j, wrap: z, wrapAll: D, wrapInner: L, unwrap: N, closest: P, after: C, before: H, insertBefore: W, getScrollTop: I, siblings: V, preventDefault: F, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, showError: f };
    var cn = Object.freeze({ __proto__: null, showError: f, isVisible: d, getVisible: v, $: p, deepExtend: h, hasClass: g, getWindowHeight: m, o: w, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: E, addClass: R, removeClass: k, appendTo: j, wrap: z, wrapAll: D, wrapInner: L, unwrap: N, closest: P, after: C, before: H, insertBefore: W, getScrollTop: I, siblings: V, preventDefault: F, l: Z, u: B, v: G, p: Y, h: U, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, toArray: on, g: rn, S: an, M: ln, T: un });
    function sn(n2) {
      return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n3) {
        return typeof n3;
      } : function(n3) {
        return n3 && typeof Symbol == "function" && n3.constructor === Symbol && n3 !== Symbol.prototype ? "symbol" : typeof n3;
      }, sn(n2);
    }
    var fn = { A: {}, O: function(n2, t2) {
      var e2 = this;
      return sn(this.A[n2]) !== "object" && (this.A[n2] = []), this.A[n2].push(t2), function() {
        return e2.removeListener(n2, t2);
      };
    }, removeListener: function(n2, t2) {
      if (sn(this.A[n2]) === "object") {
        var e2 = this.A[n2].indexOf(t2);
        e2 > -1 && this.A[n2].splice(e2, 1);
      }
    }, R: function(n2) {
      for (var t2 = this, e2 = arguments.length, i2 = new Array(e2 > 1 ? e2 - 1 : 0), o2 = 1; o2 < e2; o2++)
        i2[o2 - 1] = arguments[o2];
      sn(this.A[n2]) === "object" && this.A[n2].forEach(function(n3) {
        return n3.apply(t2, i2);
      });
    }, once: function(n2, t2) {
      var e2 = this, i2 = this.O(n2, function() {
        i2();
        for (var n3 = arguments.length, o2 = new Array(n3), r2 = 0; r2 < n3; r2++)
          o2[r2] = arguments[r2];
        t2.apply(e2, o2);
      });
    } }, dn = { j: 0, D: 0, slides: [], L: [], N: null, P: null, C: false, H: false, W: false, I: false, V: false, F: void 0, Z: void 0, B: false, canScroll: true, G: "none", Y: "none", U: false, X: false, _: true, J: 0, K: m(), q: false, nn: {} };
    function vn(n2) {
      Object.assign(dn, n2);
    }
    function pn() {
      return dn;
    }
    o.state = dn;
    var hn = "onAfterRenderNoAnchor", gn = "onClickOrTouch", mn = "moveSlideLeft", wn = "moveSlideRight", bn = "onInitialise", Sn = "bindEvents", yn = "onDestroy", Mn = "contentChanged", Tn = "onScrollOverflowScrolled", An = "onScrollPageAndSlide", xn = "onKeyDown", On = "onMenuClick", En = "scrollPage", Rn = "landscapeScroll", kn = "scrollBeyondFullpage", jn = "onPerformMovement", zn = "afterSectionLoads", Dn = "afterSlideLoads";
    function Ln(n2) {
      fn.R(gn, { e: n2, target: n2.target });
    }
    function Nn() {
      ["click", "touchstart"].forEach(function(n2) {
        Y(n2, Ln);
      });
    }
    function Pn() {
      vn({ _: true });
    }
    fn.O(Sn, function() {
      ["click", "touchstart"].forEach(function(n2) {
        B(n2, Ln);
      }), G("focus", Pn), fn.O(yn, Nn);
    });
    var Cn = "fullpage-wrapper", Hn = "." + Cn, Wn = "fp-responsive", In = "fp-notransition", Vn = "fp-destroyed", Fn = "fp-enabled", Zn = "active", Bn = ".active", Gn = "fp-completely", Yn = "fp-section", Un = "." + Yn, Xn = ".fp-tableCell", _n = "#fp-nav", Qn = "fp-slide", Jn = "." + Qn, Kn = ".fp-slide.active", qn = "fp-slides", $n = ".fp-slides", nt = "fp-slidesContainer", tt = "." + nt, et = "fp-table", it = "fp-overflow", ot = "." + it, rt = "fp-is-overflow", at = ".fp-slidesNav", lt = ".fp-slidesNav a", ut = "fp-controlArrow", ct = "." + ut, st = "fp-prev", ft = ".fp-controlArrow.fp-prev", dt = ".fp-controlArrow.fp-next", vt = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, tn: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, pt = null, ht = false, gt = h({}, vt), mt = null;
    function wt(n2) {
      return pt;
    }
    function bt() {
      return mt || vt;
    }
    function St() {
      return gt;
    }
    function yt(n2, t2, e2) {
      mt[n2] = t2, e2 !== "internal" && (gt[n2] = t2);
    }
    function Mt() {
      if (!bt().anchors.length) {
        var n2 = p(bt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", pt);
        n2.length && n2.length === p(bt().sectionSelector, pt).length && (ht = true, n2.forEach(function(n3) {
          bt().anchors.push(Z(n3, "data-anchor").toString());
        }));
      }
      if (!bt().navigationTooltips.length) {
        var t2 = p(bt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", pt);
        t2.length && t2.forEach(function(n3) {
          bt().navigationTooltips.push(Z(n3, "data-tooltip").toString());
        });
      }
    }
    function Tt(n2) {
      return window["fp_" + n2 + "Extension"] !== void 0;
    }
    function At(n2) {
      var t2 = bt();
      return t2[n2] !== null && Object.prototype.toString.call(t2[n2]) === "[object Array]" ? t2[n2].length && s[n2] : t2[n2] && s[n2];
    }
    function xt(n2, t2, e2) {
      if (At(n2))
        return X(s[n2][t2]) ? s[n2][t2](e2) : s[n2][t2];
    }
    function Ot() {
      return xt("dragAndMove", "isAnimating");
    }
    function Et() {
      return xt("dragAndMove", "isGrabbing");
    }
    function Rt(n2) {
      if (bt().offsetSections && s.offsetSections) {
        var t2 = xt("offsetSections", "getWindowHeight", n2);
        return t2 !== "" ? Math.round(t2) + "px" : t2;
      }
      return m() + "px";
    }
    function kt(n2, t2) {
      n2.insertBefore(t2, n2.firstChild);
    }
    function jt(n2) {
      var t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function e2(n3) {
        var e3, i3, o2, r2, a2, l2, u2 = "", c2 = 0;
        for (n3 = n3.replace(/[^A-Za-z0-9+/=]/g, ""); c2 < n3.length; )
          e3 = t2.indexOf(n3.charAt(c2++)) << 2 | (r2 = t2.indexOf(n3.charAt(c2++))) >> 4, i3 = (15 & r2) << 4 | (a2 = t2.indexOf(n3.charAt(c2++))) >> 2, o2 = (3 & a2) << 6 | (l2 = t2.indexOf(n3.charAt(c2++))), u2 += String.fromCharCode(e3), a2 != 64 && (u2 += String.fromCharCode(i3)), l2 != 64 && (u2 += String.fromCharCode(o2));
        return u2 = function(n4) {
          for (var t3, e4 = "", i4 = 0, o3 = 0, r3 = 0; i4 < n4.length; )
            (o3 = n4.charCodeAt(i4)) < 128 ? (e4 += String.fromCharCode(o3), i4++) : o3 > 191 && o3 < 224 ? (r3 = n4.charCodeAt(i4 + 1), e4 += String.fromCharCode((31 & o3) << 6 | 63 & r3), i4 += 2) : (r3 = n4.charCodeAt(i4 + 1), t3 = n4.charCodeAt(i4 + 2), e4 += String.fromCharCode((15 & o3) << 12 | (63 & r3) << 6 | 63 & t3), i4 += 3);
          return e4;
        }(u2), u2;
      }
      function i2(n3) {
        return n3.slice(3).slice(0, -3);
      }
      return function(n3) {
        var t3 = n3.split("_");
        if (t3.length > 1) {
          var o2 = t3[1];
          return e2(n3.replace(i2(t3[1]), "").split("_")[0].slice(2).slice(0, -2)) + "_" + e2(o2.slice(3).slice(0, -3));
        }
        return i2(n3);
      }(e2(n2));
    }
    o.fp_utils = o.fp_utils || {}, Object.assign(o.fp_utils, { prependTo: kt, toggleClass: function(n2, t2, e2) {
      if (n2.classList && e2 == null)
        n2.classList.toggle(t2);
      else {
        var i2 = g(n2, t2);
        i2 && e2 == null || !e2 ? k(n2, t2) : (!i2 && e2 == null || e2) && R(n2, t2);
      }
    } });
    var zt = function(n2) {
      this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
    }, Dt = function(n2, t2) {
      this.parent = this.parent || null, this.selector = t2, this.anchor = Z(n2, "data-anchor") || bt().anchors[T(n2, bt().sectionSelector)], this.item = n2, this.isVisible = d(n2), this.isActive = g(n2, Zn), this.en = g(n2, it) || p(ot, n2)[0] != null, this.on = t2 === bt().sectionSelector, this.container = P(n2, tt) || P(n2, Hn), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function Lt(n2) {
      return n2.map(function(n3) {
        return n3.item;
      });
    }
    function Nt(n2, t2) {
      return n2.find(function(n3) {
        return n3.item === t2;
      });
    }
    Dt.prototype.siblings = function() {
      return this.on ? this.isVisible ? dn.L : dn.rn : this.parent ? this.parent.slides : 0;
    }, Dt.prototype.prev = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t2 >= 0 ? n2[t2] : null;
    }, Dt.prototype.next = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t2 < n2.length ? n2[t2] : null;
    }, Dt.prototype.prevPanel = function() {
      return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
    }, Dt.prototype.nextPanel = function() {
      return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
    }, Dt.prototype.an = function() {
      return this.on ? dn.L : dn.ln;
    };
    var Pt, Ct = function(n2) {
      zt.call(this, n2);
    }, Ht = function(n2) {
      zt.call(this, n2);
    };
    function Wt(n2) {
      var t2 = p(Kn, n2);
      return t2.length && (n2 = t2[0]), n2;
    }
    function It(n2) {
      return n2 ? n2.activeSlide ? n2.activeSlide : n2 : null;
    }
    function Vt(n2) {
      var t2, e2, i2 = bt();
      return i2.autoScrolling && !i2.scrollBar ? (t2 = -n2, e2 = p(Hn)[0]) : (t2 = n2, e2 = window), { options: t2, element: e2 };
    }
    function Ft(n2, t2) {
      !bt().autoScrolling || bt().scrollBar || n2.self != window && g(n2, qn) ? n2.self != window && g(n2, qn) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
    }
    function Zt(n2) {
      var t2 = "transform " + bt().scrollingSpeed + "ms " + bt().easingcss3;
      return k(n2, In), b(n2, { "-webkit-transition": t2, transition: t2 });
    }
    function Bt(n2, t2) {
      var e2 = n2.index(), i2 = T(t2, Un);
      return e2 == i2 ? "none" : e2 > i2 ? "up" : "down";
    }
    function Gt(n2) {
      return R(n2, In);
    }
    function Yt(n2) {
      return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
    }
    function Ut(n2, t2) {
      t2 ? Zt(wt()) : Gt(wt()), clearTimeout(Pt), b(wt(), Yt(n2)), s.test.un = n2, Pt = setTimeout(function() {
        k(wt(), In);
      }, 10);
    }
    function Xt(n2) {
      var t2 = Math.round(n2);
      if (bt().css3 && bt().autoScrolling && !bt().scrollBar)
        Ut("translate3d(0px, -" + t2 + "px, 0px)", false);
      else if (bt().autoScrolling && !bt().scrollBar)
        b(wt(), { top: -t2 + "px" }), s.test.top = -t2 + "px";
      else {
        var e2 = Vt(t2);
        Ft(e2.element, e2.options);
      }
    }
    function _t(n2, t2) {
      t2 !== "internal" && xt("fadingEffect", "update", n2), xt("cards", "update_", n2), yt("scrollingSpeed", n2, t2);
    }
    s.setScrollingSpeed = _t;
    var Qt, Jt = null, Kt = null, qt = null;
    function $t(n2, t2, e2, i2) {
      var r2, a2 = function(n3) {
        return n3.self != o && g(n3, qn) ? n3.scrollLeft : !bt().autoScrolling || bt().scrollBar ? I() : n3.offsetTop;
      }(n2), l2 = t2 - a2, u2 = false, c2 = dn.B;
      vn({ B: true }), Qt && window.cancelAnimationFrame(Qt), Qt = function(s2) {
        r2 || (r2 = s2);
        var f2 = Math.floor(s2 - r2);
        if (dn.B) {
          var d2 = t2;
          e2 && (d2 = o.fp_easings[bt().easing](f2, a2, l2, e2)), f2 <= e2 && Ft(n2, d2), f2 < e2 ? window.requestAnimationFrame(Qt) : i2 === void 0 || u2 || (i2(), vn({ B: false }), u2 = true);
        } else
          u2 || c2 || (i2(), vn({ B: false }), u2 = true);
      }, window.requestAnimationFrame(Qt);
    }
    function ne(n2) {
      return n2 && !n2.item ? new Ct(new ui(n2)) : n2 ? new Ct(n2) : null;
    }
    function te(n2) {
      return n2 ? new Ht(n2) : null;
    }
    function ee(n2, t2) {
      var e2 = function(n3, t3) {
        var e3 = { afterRender: function() {
          return { section: ne(pn().N), cn: te(pn().N.activeSlide) };
        }, onLeave: function() {
          return { origin: ne(t3.items.origin), destination: ne(t3.items.destination), direction: t3.direction, trigger: pn().P };
        }, afterLoad: function() {
          return e3.onLeave();
        }, afterSlideLoad: function() {
          return { section: ne(t3.items.section), origin: ne(t3.items.origin), destination: ne(t3.items.destination), direction: t3.direction, trigger: pn().P };
        }, onSlideLeave: function() {
          return e3.afterSlideLoad();
        }, beforeLeave: function() {
          return e3.onLeave();
        }, onScrollOverflow: function() {
          return { section: ne(pn().N), cn: te(pn().N.activeSlide), position: t3.position, direction: t3.direction };
        } };
        return e3[n3]();
      }(n2, t2);
      return _(wt(), n2, e2), bt()[n2].apply(e2[Object.keys(e2)[0]], on(e2)) !== false;
    }
    function ie(n2) {
      var t2 = Wt(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && typeof n3.play == "function" && n3.play();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && oe(n3), n3.onload = function() {
          n3.hasAttribute("data-autoplay") && oe(n3);
        };
      });
    }
    function oe(n2) {
      n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function re(n2) {
      var t2 = Wt(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-keepplaying") || typeof n3.pause != "function" || n3.pause();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        /youtube\.com\/embed\//.test(Z(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function ae(n2) {
      bt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Wt(n2)).forEach(function(n3) {
        if (["src", "srcset"].forEach(function(t3) {
          var e2 = Z(n3, "data-" + t3);
          e2 != null && e2 && (ln(n3, t3), n3.addEventListener("load", function() {
          }));
        }), Q(n3, "source")) {
          var t2 = P(n3, "video, audio");
          t2 && (t2.load(), t2.onloadeddata = function() {
          });
        }
      });
    }
    function le() {
      var n2 = pn().N.item, t2 = pn().N.activeSlide, e2 = ue(n2), i2 = String(e2);
      t2 && (i2 = i2 + "-" + ue(t2.item)), i2 = i2.replace("/", "-").replace("#", "");
      var o2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      Jt.className = Jt.className.replace(o2, ""), R(Jt, "fp-viewing-" + i2);
    }
    function ue(n2) {
      if (!n2)
        return null;
      var t2 = Z(n2, "data-anchor"), e2 = T(n2);
      return t2 == null && (t2 = e2), t2;
    }
    function ce(n2, t2, e2) {
      var i2 = "";
      bt().anchors.length && !bt().lockAnchors && (n2 ? (e2 != null && (i2 = e2), t2 == null && (t2 = n2), vn({ Z: t2 }), se(i2 + "/" + t2)) : n2 != null ? (vn({ Z: t2 }), se(e2)) : se(e2)), le();
    }
    function se(n2) {
      if (bt().recordHistory)
        location.hash = n2;
      else if (a || u)
        o.history.replaceState(void 0, void 0, "#" + n2);
      else {
        var t2 = o.location.href.split("#")[0];
        o.location.replace(t2 + "#" + n2);
      }
    }
    function fe(n2, t2, e2) {
      var i2 = t2 === "Section" ? bt().anchors[n2] : Z(e2, "data-anchor");
      return encodeURI(bt().navigationTooltips[n2] || i2 || t2 + " " + (n2 + 1));
    }
    function de(n2) {
      F(n2), vn({ P: "horizontalNav" });
      var t2 = P(this, Un), e2 = p($n, P(this, Un))[0], i2 = Nt(pn().L, t2).slides[T(P(this, "li"))];
      fn.R(Rn, { slides: e2, destination: i2.item });
    }
    var ve, pe = {};
    function he(n2, t2, e2) {
      t2 !== "all" ? pe[e2][t2] = n2 : Object.keys(pe[e2]).forEach(function(t3) {
        pe[e2][t3] = n2;
      });
    }
    function ge() {
      return pe;
    }
    function me() {
      var n2 = P(this, Un);
      g(this, st) ? ge().m.left && (vn({ P: "slideArrow" }), fn.R(mn, { section: n2 })) : ge().m.right && (vn({ P: "slideArrow" }), fn.R(wn, { section: n2 }));
    }
    function we(n2) {
      !bt().loopHorizontal && bt().controlArrows && (J(p(ft, n2.section), n2.slideIndex !== 0), J(p(dt, n2.section), y(n2.destiny) != null));
    }
    function be() {
      clearTimeout(ve), vn({ W: false });
    }
    function Se(n2, t2, e2) {
      var i2 = P(n2, Un), o2 = pn().L.filter(function(n3) {
        return n3.item == i2;
      })[0], r2 = o2.slides.filter(function(n3) {
        return n3.item == t2;
      })[0], a2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: r2.index(), section: i2, sectionIndex: o2.index(), anchorLink: o2.anchor, slidesNav: p(at, i2)[0], slideAnchor: r2.anchor, prevSlide: o2.activeSlide.item, prevSlideIndex: o2.activeSlide.index(), items: { section: o2, origin: o2.activeSlide, destination: r2 }, localIsResizing: dn.I };
      a2.xMovement = Me(a2.prevSlideIndex, a2.slideIndex), a2.direction = a2.direction ? a2.direction : a2.xMovement, a2.localIsResizing || vn({ canScroll: false }), xt("parallax", "applyHorizontal", a2), xt("cards", "apply", a2), xt("dropEffect", "apply", a2), xt("waterEffect", "apply", a2), bt().onSlideLeave && !a2.localIsResizing && a2.xMovement !== "none" && X(bt().onSlideLeave) && ee("onSlideLeave", a2) === false ? vn({ W: false }) : (At("dropEffect") && bt().dropEffect || (R(t2, Zn), k(V(t2), Zn)), oi(), a2.localIsResizing || (re(a2.prevSlide), ae(t2)), we(a2), o2.isActive && !a2.localIsResizing && ce(a2.slideIndex, a2.slideAnchor, a2.anchorLink), xt("continuousHorizontal", "apply", a2), Et() ? Ae(a2) : ye(n2, a2, true), bt().interlockedSlides && s.interlockedSlides && (At("continuousHorizontal") && e2 !== void 0 && e2 !== a2.xMovement || xt("interlockedSlides", "apply", a2)));
    }
    function ye(n2, t2, e2) {
      var i2, o2, r2 = t2.destinyPos;
      if (i2 = t2.slidesNav, o2 = t2.slideIndex, bt().slidesNavigation && i2 != null && (k(p(Bn, i2), Zn), R(p("a", p("li", i2)[o2]), Zn)), vn({ scrollX: Math.round(r2.left) }), bt().css3) {
        var a2 = "translate3d(-" + Math.round(r2.left) + "px, 0px, 0px)";
        s.test.sn[t2.sectionIndex] = a2, At("dragAndMove") && t2.dn !== void 0 || Zt(p(tt, n2)), b(p(tt, n2), Yt(a2)), At("interlockedSlides") || clearTimeout(ve), ve = setTimeout(function() {
          e2 && Ae(t2);
        }, bt().scrollingSpeed);
      } else
        s.test.left[t2.sectionIndex] = Math.round(r2.left), $t(n2, Math.round(r2.left), bt().scrollingSpeed, function() {
          e2 && Ae(t2);
        });
    }
    function Me(n2, t2) {
      return n2 == t2 ? "none" : n2 > t2 ? "left" : "right";
    }
    function Te() {
      clearTimeout(ve);
    }
    function Ae(n2) {
      xt("continuousHorizontal", "afterSlideLoads", n2), n2.localIsResizing || (xt("parallax", "afterSlideLoads"), xt("scrollOverflowReset", "setPrevious", n2.prevSlide), xt("scrollOverflowReset", "reset"), X(bt().afterSlideLoad) && ee("afterSlideLoad", n2), vn({ canScroll: true }), ie(n2.destiny), fn.R(Dn, n2)), vn({ W: false }), xt("interlockedSlides", "interlockedSlides", n2);
    }
    function xe(n2, t2) {
      _t(0, "internal"), t2 !== void 0 && vn({ I: true }), Se(P(n2, $n), n2), t2 !== void 0 && vn({ I: false }), _t(St().scrollingSpeed, "internal");
    }
    function Oe(n2, t2) {
      yt("recordHistory", n2, t2);
    }
    function Ee(n2, t2) {
      n2 || Xt(0), yt("autoScrolling", n2, t2);
      var e2 = pn().N.item;
      if (bt().autoScrolling && !bt().scrollBar)
        b(qt, { overflow: "hidden", height: "100%" }), k(Jt, "fp-scrollable"), Oe(St().recordHistory, "internal"), b(wt(), { "-ms-touch-action": "none", "touch-action": "none" }), e2 != null && Xt(e2.offsetTop);
      else if (b(qt, { overflow: "visible", height: "initial" }), R(Jt, "fp-scrollable"), Oe(!!bt().autoScrolling && St().recordHistory, "internal"), b(wt(), { "-ms-touch-action": "", "touch-action": "" }), Gt(wt()), e2 != null) {
        var i2 = Vt(e2.offsetTop);
        i2.element.scrollTo(0, i2.options);
      }
      _(wt(), "setAutoScrolling", n2);
    }
    function Re() {
      for (var n2 = p(Kn), t2 = 0; t2 < n2.length; t2++)
        xe(n2[t2], "internal");
    }
    function ke() {
      var n2 = p(".fp-auto-height")[0] || Qe() && p(".fp-auto-height-responsive")[0];
      bt().lazyLoading && n2 && p(".fp-section:not(.active)").forEach(function(n3) {
        var t2, e2, i2, o2, r2;
        e2 = (t2 = n3.getBoundingClientRect()).top, i2 = t2.bottom, o2 = e2 + 2 < dn.K && e2 > 0, r2 = i2 > 2 && i2 < dn.K, (o2 || r2) && ae(n3);
      });
    }
    function je() {
      _(S(this), "click");
    }
    function ze() {
      q(p(_n));
      var n2 = r.createElement("div");
      n2.setAttribute("id", "fp-nav");
      var t2 = r.createElement("ul");
      n2.appendChild(t2), j(n2, Jt);
      var e2 = p(_n)[0];
      R(e2, "fp-" + bt().navigationPosition), bt().showActiveTooltip && R(e2, "fp-show-active");
      for (var i2 = "", o2 = 0; o2 < pn().L.length; o2++) {
        var a2 = pn().L[o2], l2 = "";
        bt().anchors.length && (l2 = a2.anchor), i2 += '<li><a href="#' + encodeURI(l2) + '"><span class="fp-sr-only">' + fe(a2.index(), "Section") + "</span><span></span></a>";
        var u2 = bt().navigationTooltips[a2.index()];
        u2 !== void 0 && u2 !== "" && (i2 += '<div class="fp-tooltip fp-' + bt().navigationPosition + '">' + u2 + "</div>"), i2 += "</li>";
      }
      p("ul", e2)[0].innerHTML = i2;
      var c2 = p("li", p(_n)[0])[pn().N.index()];
      R(p("a", c2), Zn);
    }
    function De(n2) {
      n2.preventDefault && F(n2), vn({ P: "verticalNav" });
      var t2 = T(P(this, "#fp-nav li"));
      fn.R(En, { destination: pn().L[t2] });
    }
    function Le(n2, t2) {
      var e2;
      e2 = n2, bt().menu && bt().menu.length && p(bt().menu).forEach(function(n3) {
        n3 != null && (k(p(Bn, n3), Zn), R(p('[data-menuanchor="' + e2 + '"]', n3), Zn));
      }), function(n3, t3) {
        var e3 = p(_n)[0];
        bt().navigation && e3 != null && e3.style.display !== "none" && (k(p(Bn, e3), Zn), R(n3 ? p('a[href="#' + n3 + '"]', e3) : p("a", p("li", e3)[t3]), Zn));
      }(n2, t2);
    }
    pe.m = { up: true, down: true, left: true, right: true }, pe.k = h({}, pe.m), fn.O(gn, function(n2) {
      var t2 = n2.target;
      (Q(t2, ct) || P(t2, ct)) && me.call(t2, n2);
    }), s.landscapeScroll = Se, fn.O(Sn, function() {
      fn.O(jn, be);
    }), s.setRecordHistory = Oe, s.setAutoScrolling = Ee, s.test.setAutoScrolling = Ee, new Date().getTime();
    var Ne, Pe, Ce, He, We, Ie, Ve = (Pe = true, Ce = new Date().getTime(), He = !o.fullpage_api, function(n2, t2) {
      var e2 = new Date().getTime(), i2 = n2 === "wheel" ? bt().scrollingSpeed : 100;
      return Pe = He || e2 - Ce >= i2, He = !o.fullpage_api, Pe && (Ne = t2(), Ce = e2), Ne === void 0 || Ne;
    });
    function Fe(n2, t2) {
      if (X(bt().beforeLeave))
        return Ve(pn().P, function() {
          return ee(n2, t2);
        });
    }
    function Ze(n2, t2, e2) {
      var i2 = n2.item;
      if (i2 != null) {
        var o2, r2, a2 = { element: i2, callback: t2, isMovementUp: e2, dtop: Be(i2), yMovement: Bt(pn().N, i2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: pn().N.index() + 1, localIsResizing: dn.I, items: { origin: pn().N, destination: n2 }, direction: null };
        if (!(pn().N.item == i2 && !dn.I || bt().scrollBar && I() === a2.dtop && !g(i2, "fp-auto-height"))) {
          if (a2.activeSlide != null && (o2 = Z(a2.activeSlide, "data-anchor"), r2 = T(a2.activeSlide, null)), !a2.localIsResizing) {
            var l2 = a2.yMovement;
            if (e2 !== void 0 && (l2 = e2 ? "up" : "down"), a2.direction = l2, Tt("dropEffect") && s.dropEffect.onLeave_(a2), Tt("waterEffect") && s.waterEffect.onLeave_(a2), X(bt().beforeLeave) && Fe("beforeLeave", a2) === false)
              return;
            if (X(bt().onLeave) && !ee("onLeave", a2))
              return;
          }
          xt("parallax", "apply", a2), xt("cards", "apply", a2), xt("dropEffect", "apply", a2), xt("waterEffect", "apply", a2), bt().autoScrolling && bt().continuousVertical && a2.isMovementUp !== void 0 && (!a2.isMovementUp && a2.yMovement == "up" || a2.isMovementUp && a2.yMovement == "down") && (a2 = function(n3) {
            vn({ q: true });
            var t3 = pn().N.item;
            return n3.isMovementUp ? H(t3, tn(t3, Un)) : C(t3, en(t3, Un).reverse()), Xt(pn().N.item.offsetTop), Re(), n3.vn = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = Bt(pn().N, n3.element), n3.leavingSection = n3.items.origin.index() + 1, n3.sectionIndex = n3.items.destination.index(), _(wt(), "onContinuousVertical", n3), n3;
          }(a2)), xt("scrollOverflowReset", "setPrevious", pn().N.item), a2.localIsResizing || re(pn().N.item), At("dropEffect") && bt().dropEffect || (R(i2, Zn), k(V(i2), Zn)), oi(), ae(i2), vn({ canScroll: s.test.pn }), ce(r2, o2, a2.anchorLink), function(n3) {
            var t3 = bt().scrollingSpeed < 700, e3 = t3 ? 700 : bt().scrollingSpeed;
            if (vn({ G: "none", scrollY: Math.round(n3.dtop) }), fn.R(jn), bt().css3 && bt().autoScrolling && !bt().scrollBar)
              Ut("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), At("waterEffect") && Re(), bt().scrollingSpeed ? (clearTimeout(We), We = setTimeout(function() {
                Ge(n3), vn({ canScroll: !t3 || s.test.pn });
              }, bt().scrollingSpeed)) : Ge(n3);
            else {
              var i3 = Vt(n3.dtop);
              s.test.top = -n3.dtop + "px", clearTimeout(We), $t(i3.element, i3.options, bt().scrollingSpeed, function() {
                bt().scrollBar ? We = setTimeout(function() {
                  Ge(n3);
                }, 30) : (Ge(n3), vn({ canScroll: !t3 || s.test.pn }));
              });
            }
            t3 && (clearTimeout(Ie), Ie = setTimeout(function() {
              vn({ canScroll: true });
            }, e3));
          }(a2), vn({ F: a2.anchorLink }), Le(a2.anchorLink, function(n3) {
            return n3.vn != null ? n3.isMovementUp ? dn.j - 1 : 0 : n3.sectionIndex;
          }(a2));
        }
      }
    }
    function Be(n2) {
      var t2 = n2.offsetHeight, e2 = n2.offsetTop, i2 = e2, o2 = At("dragAndMove") && xt("dragAndMove", "isGrabbing") ? xt("dragAndMove", "isScrollingDown") : e2 > dn.J, r2 = i2 - m() + t2, a2 = bt().bigSectionsDestination;
      return t2 > m() ? (o2 || a2) && a2 !== "bottom" || (i2 = r2) : (o2 || dn.I && y(n2) == null) && (i2 = r2), At("offsetSections") && (i2 = s.offsetSections.getSectionPosition_(o2, i2, n2)), vn({ J: i2 }), i2;
    }
    function Ge(n2) {
      vn({ C: false }), function(n3) {
        n3.vn != null && (n3.isMovementUp ? H(p(Un)[0], n3.vn) : C(p(Un)[pn().L.length - 1], n3.vn), Xt(pn().N.item.offsetTop), function() {
          for (var n4 = p(Kn), t2 = 0; t2 < n4.length; t2++)
            xe(n4[t2], "internal");
        }(), n3.sectionIndex = n3.items.destination.index(), n3.leavingSection = n3.items.origin.index() + 1, vn({ q: false }));
      }(n2), X(bt().afterLoad) && !n2.localIsResizing && ee("afterLoad", n2), xt("parallax", "afterLoad"), xt("waterEffect", "afterLoad"), xt("dropEffect", "afterLoad"), xt("scrollOverflowReset", "reset"), xt("resetSliders", "apply", n2), oi(), n2.localIsResizing || ie(n2.element), R(n2.element, Gn), k(V(n2.element), Gn), ke(), ti.hn(), vn({ canScroll: true }), fn.R(zn, n2), X(n2.callback) && n2.callback();
    }
    function Ye(n2, t2) {
      yt("fitToSection", n2, t2);
    }
    function Ue() {
      dn.canScroll && (vn({ I: true }), Ze(dn.N), vn({ I: false }));
    }
    function Xe() {
      var n2 = bt().responsive || bt().responsiveWidth, t2 = bt().responsiveHeight, e2 = n2 && o.innerWidth < n2, i2 = t2 && o.innerHeight < t2;
      n2 && t2 ? _e(e2 || i2) : n2 ? _e(e2) : t2 && _e(i2);
    }
    function _e(n2) {
      var t2 = Qe();
      n2 ? t2 || (Ee(false, "internal"), Ye(false, "internal"), x(p(_n)), R(Jt, Wn), X(bt().afterResponsive) && bt().afterResponsive.call(wt(), n2), xt("responsiveSlides", "toSections"), _(wt(), "afterResponsive", n2)) : t2 && (Ee(St().autoScrolling, "internal"), Ye(St().autoScrolling, "internal"), O(p(_n)), k(Jt, Wn), X(bt().afterResponsive) && bt().afterResponsive.call(wt(), n2), xt("responsiveSlides", "toSlides"), _(wt(), "afterResponsive", n2));
    }
    function Qe() {
      return g(Jt, Wn);
    }
    function Je(n2) {
      bt().verticalCentered && (!bt().scrollOverflow && ti.gn(n2.item) || ti.mn(n2) || g(n2.item, et) || R(n2.item, et));
    }
    s.moveTo = moveTo, s.getScrollY = function() {
      return dn.scrollY;
    }, fn.O(yn, function() {
      clearTimeout(We), clearTimeout(Ie);
    }), s.setFitToSection = Ye, s.fitToSection = Ue, s.setResponsive = _e;
    var Ke = null;
    function qe(n2) {
      var t2 = n2.item, e2 = n2.wn.length, i2 = n2.index();
      !pn().N && n2.isVisible && (R(t2, Zn), oi()), Ke = pn().N.item, At("offsetSections") && b(t2, { height: Rt(t2) }), bt().paddingTop && b(t2, { "padding-top": bt().paddingTop }), bt().paddingBottom && b(t2, { "padding-bottom": bt().paddingBottom }), bt().sectionsColor[i2] !== void 0 && b(t2, { "background-color": bt().sectionsColor[i2] }), bt().anchors[i2] !== void 0 && t2.setAttribute("data-anchor", n2.anchor), e2 || Je(n2);
    }
    function $e() {
      bt().scrollOverflow && !bt().scrollBar && (ti.bn(), ti.hn());
    }
    s.getActiveSection = function() {
      return pn().N;
    }, fn.O(Sn, function() {
      fn.O(hn, $e), fn.O(Dn, ti.hn);
    });
    var ni, ti = { Sn: null, yn: null, Mn: null, Tn: function(n2) {
      if (!dn.canScroll)
        return F(n2), false;
    }, hn: function() {
      if (bt().scrollOverflow) {
        r.activeElement === this.Sn && this.Sn.blur();
        var n2 = ti.An(pn().N.item);
        !n2 || a || u || (this.Sn = n2, this.Sn.focus());
      }
    }, bn: function() {
      bt().scrollOverflowMacStyle && !l && R(Jt, "fp-scroll-mac"), pn().ln.forEach(function(n2) {
        if (!(n2.slides && n2.slides.length || g(n2.item, "fp-auto-height-responsive") && Qe())) {
          var t2, e2 = Wt(n2.item), i2 = ti.gn(n2.item), o2 = (t2 = n2).on ? t2 : t2.parent;
          if (c) {
            var r2 = i2 ? "addClass" : "removeClass";
            cn[r2](o2.item, rt), cn[r2](n2.item, rt);
          } else
            R(o2.item, rt), R(n2.item, rt);
          n2.en || (ti.xn(e2), ti.On(e2)), n2.en = true;
        }
      });
    }, On: function(n2) {
      ti.An(n2).addEventListener("scroll", ti.En), n2.addEventListener("wheel", ti.Tn, { passive: false }), n2.addEventListener("keydown", ti.Tn, { passive: false });
    }, xn: function(n2) {
      var t2 = document.createElement("div");
      t2.className = it, L(n2, t2), t2.setAttribute("tabindex", "-1");
    }, Rn: function(n2) {
      var t2 = p(ot, n2)[0];
      t2 && (N(t2), n2.removeAttribute("tabindex"));
    }, An: function(n2) {
      var t2 = Wt(n2);
      return p(ot, t2)[0] || t2;
    }, en: function(n2) {
      return g(n2, it) || p(ot, n2)[0] != null;
    }, mn: function(n2) {
      return n2.on && n2.activeSlide ? n2.activeSlide.en : n2.en;
    }, gn: function(n2) {
      return ti.An(n2).scrollHeight > o.innerHeight;
    }, kn: function(n2, t2) {
      if (!dn.canScroll)
        return false;
      var e2 = ti.An(t2);
      if (!bt().scrollOverflow || !g(e2, it) || g(Wt(t2), "fp-noscroll"))
        return true;
      var i2 = c ? 1 : 0, o2 = e2.scrollTop, r2 = n2 === "up" && o2 <= 0, a2 = n2 === "down" && e2.scrollHeight <= Math.ceil(e2.offsetHeight + o2) + i2, l2 = r2 || a2;
      return l2 || (this.yn = new Date().getTime()), l2;
    }, jn: function() {
      this.Mn = new Date().getTime();
      var n2 = this.Mn - ti.yn, t2 = (a || u) && dn.U, e2 = dn.X && n2 > 600;
      return t2 && n2 > 400 || e2;
    }, En: (ni = 0, function(n2) {
      var t2 = n2.target.scrollTop, e2 = dn.G !== "none" ? dn.G : ni < t2 ? "down" : "up";
      ni = t2, X(bt().onScrollOverflow) && ee("onScrollOverflow", { position: t2, direction: e2 }), g(n2.target, it) && dn.canScroll && ti.kn(e2, n2.target) && ti.jn() && ti.gn(pn().N.item) && fn.R(Tn, { direction: e2 });
    }) }, ei = null, ii = null;
    function oi() {
      dn.N = null, dn.L.map(function(n2) {
        var t2 = g(n2.item, Zn);
        n2.isActive = t2, n2.en = ti.en(n2.item), t2 && (dn.N = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
          var e2 = g(t3.item, Zn);
          t3.en = ti.en(n2.item), t3.isActive = e2, e2 && (n2.activeSlide = t3);
        }));
      }), function() {
        var n2 = dn.N, t2 = !!dn.N && dn.N.slides.length, e2 = dn.N ? dn.N.activeSlide : null;
        if (!n2 && dn.L.length && !pn().C) {
          if (ei) {
            var i2 = li(ei, dn.L);
            i2 && (dn.N = i2, dn.N.isActive = true, R(dn.N.item, Zn)), dn.N && Xt(dn.N.item.offsetTop);
          }
          if (t2 && !e2 && ii) {
            var o2 = li(ii, dn.N.slides);
            o2 && (dn.N.activeSlide = o2, dn.N.activeSlide.isActive = true, R(dn.N.activeSlide.item, Zn)), dn.N.activeSlide && xe(dn.N.activeSlide.item, "internal");
          }
        }
      }(), _(wt(), "onUpdateStateDone");
    }
    function ri() {
      var n2 = p(bt().sectionSelector + ", " + Un, wt()), t2 = v(n2), e2 = Array.from(n2).map(function(n3) {
        return new ui(n3);
      }), i2 = e2.filter(function(n3) {
        return n3.isVisible;
      }), o2 = i2.reduce(function(n3, t3) {
        return n3.concat(t3.slides);
      }, []);
      ei = ai(dn.N), ii = ai(dn.N ? dn.N.activeSlide : null), dn.j = t2.length, dn.D = i2.reduce(function(n3, t3) {
        return n3 + t3.slides.length;
      }, 0), dn.L = i2, dn.rn = e2, dn.slides = o2, dn.ln = dn.L.concat(dn.slides);
    }
    function ai(n2) {
      if (!n2)
        return null;
      var t2 = n2 ? n2.item : null, e2 = n2.on ? dn.rn : dn.N.zn;
      if (t2) {
        var i2 = Nt(e2, t2);
        return i2 ? i2.index() : null;
      }
      return null;
    }
    function li(n2, t2) {
      var e2, i2 = n2 - 1, o2 = n2;
      do {
        if (e2 = t2[i2] || t2[o2])
          break;
        i2 -= 1, o2 += 1;
      } while (i2 >= 0 || o2 < t2.length);
      return e2;
    }
    var ui = function(n2) {
      var t2 = this;
      [].push.call(arguments, bt().sectionSelector), Dt.apply(this, arguments), this.wn = p(bt().slideSelector, n2), this.zn = Array.from(this.wn).map(function(n3) {
        return new si(n3, t2);
      }), this.slides = this.zn.filter(function(n3) {
        return n3.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
        return n3.isActive;
      })[0] || this.slides[0] : null;
    };
    ui.prototype = Dt.prototype, ui.prototype.constructor = ui;
    var ci, si = function(n2, t2) {
      this.parent = t2, Dt.call(this, n2, bt().slideSelector);
    };
    function fi() {
      R(p(bt().sectionSelector, wt()), Yn), R(p(bt().slideSelector, wt()), Qn);
    }
    function di(n2) {
      var t2 = n2.slides.length, e2 = n2.wn, i2 = n2.slides, o2 = 100 * t2, a2 = 100 / t2;
      if (!p($n, n2.item)[0]) {
        var l2 = r.createElement("div");
        l2.className = qn, D(e2, l2);
        var u2 = r.createElement("div");
        u2.className = nt, D(e2, u2);
      }
      b(p(tt, n2.item), { width: o2 + "%" }), t2 > 1 && (bt().controlArrows && function(n3) {
        var t3 = n3.item, e3 = [K(bt().controlArrowsHTML[0]), K(bt().controlArrowsHTML[1])];
        C(p($n, t3)[0], e3), R(e3, ut), R(e3[0], st), R(e3[1], "fp-next"), bt().controlArrowColor !== "#fff" && (b(p(dt, t3), { "border-color": "transparent transparent transparent " + bt().controlArrowColor }), b(p(ft, t3), { "border-color": "transparent " + bt().controlArrowColor + " transparent transparent" })), bt().loopHorizontal || x(p(ft, t3));
      }(n2), bt().slidesNavigation && function(n3) {
        var t3 = n3.item, e3 = n3.slides.length;
        j(K('<div class="fp-slidesNav"><ul></ul></div>'), t3);
        var i3 = p(at, t3)[0];
        R(i3, "fp-" + bt().slidesNavPosition);
        for (var o3 = 0; o3 < e3; o3++)
          j(K('<li><a href="#"><span class="fp-sr-only">' + fe(o3, "Slide", p(Jn, t3)[o3]) + "</span><span></span></a></li>"), p("ul", i3)[0]);
        b(i3, { "margin-left": "-" + i3.innerWidth / 2 + "px" });
        var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
        R(p("a", p("li", i3)[r2]), Zn);
      }(n2)), i2.forEach(function(n3) {
        b(n3.item, { width: a2 + "%" }), bt().verticalCentered && Je(n3);
      });
      var c2 = At("responsiveSlides") ? null : n2.activeSlide || null;
      c2 != null && dn.N && (dn.N.index() !== 0 || dn.N.index() === 0 && c2.index() !== 0) ? (xe(c2.item, "internal"), R(c2.item, "fp-initial")) : R(e2[0], Zn);
    }
    si.prototype = Dt.prototype, si.prototype.constructor = ui;
    var vi = { attributes: false, subtree: true, childList: true, characterData: true };
    function pi() {
      return xt("responsiveSlides", "isResponsiveSlidesChanging") || v(p(bt().slideSelector, wt())).length !== pn().D;
    }
    function hi(n2) {
      var t2 = pi();
      (pi() || xt("responsiveSlides", "isResponsiveSlidesChanging") || v(p(bt().sectionSelector, wt())).length !== pn().j) && !dn.q && (bt().observer && ci && ci.disconnect(), ri(), oi(), bt().anchors = [], q(p(_n)), xt("responsiveSlides", "isResponsiveSlidesChanging") || fi(), Mt(), bt().navigation && ze(), t2 && (q(p(at)), q(p(ct))), pn().L.forEach(function(n3) {
        n3.slides.length ? t2 && di(n3) : qe(n3);
      })), bt().observer && ci && p(Hn)[0] && ci.observe(p(Hn)[0], vi);
    }
    fn.O(Sn, function() {
      var n2, t2, e2;
      bt().observer && "MutationObserver" in window && p(Hn)[0] && (n2 = p(Hn)[0], t2 = vi, (e2 = new MutationObserver(hi)).observe(n2, t2), ci = e2), fn.O(Mn, hi);
    }), s.render = hi;
    var gi = function() {
      var n2 = false;
      try {
        var t2 = Object.defineProperty({}, "passive", { get: function() {
          n2 = true;
        } });
        G("testPassive", null, t2), U("testPassive", null, t2);
      } catch (n3) {
      }
      return function() {
        return n2;
      };
    }();
    function mi() {
      return !!gi() && { passive: false };
    }
    var wi, bi, Si, yi, Mi = (Si = new Date().getTime(), yi = [], { Dn: function(n2) {
      var t2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), i2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0;
      wi = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !i2;
      var r2 = new Date().getTime();
      bi = e2 < 0 ? "down" : "up", yi.length > 149 && yi.shift(), yi.push(Math.abs(t2));
      var a2 = r2 - Si;
      Si = r2, a2 > 200 && (yi = []);
    }, Ln: function() {
      var n2 = an(yi, 10) >= an(yi, 70);
      return !!yi.length && n2 && wi;
    }, Nn: function() {
      return bi;
    } });
    function Ti() {
      var n2 = bt().css3 ? I() + m() : rn(pn().L).item.offsetTop + rn(pn().L).item.offsetHeight, t2 = Vt(n2);
      s.test.top = -n2 + "px", vn({ canScroll: false }), $t(t2.element, t2.options, bt().scrollingSpeed, function() {
        setTimeout(function() {
          vn({ C: true }), vn({ canScroll: true });
        }, 30);
      });
    }
    function Ai() {
      wt().getBoundingClientRect().bottom >= 0 && xi();
    }
    function xi() {
      var n2 = Vt(rn(pn().L).item.offsetTop);
      vn({ canScroll: false }), $t(n2.element, n2.options, bt().scrollingSpeed, function() {
        vn({ canScroll: true }), vn({ C: false }), vn({ Pn: false });
      });
    }
    var Oi, Ei, Ri, ki = (Oi = false, Ei = {}, Ri = {}, function(n2, t2, e2) {
      switch (n2) {
        case "set":
          Ei[t2] = new Date().getTime(), Ri[t2] = e2;
          break;
        case "isNewKeyframe":
          var i2 = new Date().getTime();
          Oi = i2 - Ei[t2] > Ri[t2];
      }
      return Oi;
    });
    function ji() {
      var n2 = pn().N.next();
      n2 || !bt().loopBottom && !bt().continuousVertical || (n2 = pn().L[0]), n2 != null ? Ze(n2, null, false) : wt().scrollHeight < Jt.scrollHeight && fn.R(kn);
    }
    function zi() {
      var n2 = pn().N.prev();
      n2 || !bt().loopTop && !bt().continuousVertical || (n2 = rn(pn().L)), n2 != null && Ze(n2, null, true);
    }
    s.moveSectionDown = ji, s.moveSectionUp = zi;
    var Di = 0;
    function Li(n2) {
      bt().autoScrolling && (dn.canScroll && (n2.pageY < Di && ge().m.up ? zi() : n2.pageY > Di && ge().m.down && ji()), Di = n2.pageY);
    }
    function Ni(n2) {
      if (ge().m[n2]) {
        var t2 = n2 === "down" ? ji : zi;
        At("scrollHorizontally") && (t2 = xt("scrollHorizontally", "getScrollSection", { type: n2, scrollSection: t2 })), bt().scrollOverflow && ti.mn(pn().N) ? ti.kn(n2, pn().N.item) && ti.jn() && t2() : t2();
      }
    }
    var Pi, Ci, Hi, Wi = 0, Ii = 0, Vi = 0, Fi = 0, Zi = Qi(), Bi = { Cn: "ontouchmove" in window ? "touchmove" : Zi ? Zi.move : null, Hn: "ontouchstart" in window ? "touchstart" : Zi ? Zi.down : null };
    function Gi(n2) {
      var t2 = P(n2.target, Un) || pn().N.item, e2 = ti.mn(pn().N);
      if (Yi(n2)) {
        vn({ U: true, X: false }), bt().autoScrolling && e2 && !dn.canScroll && F(n2);
        var i2 = _i(n2);
        Vi = i2.y, Fi = i2.x;
        var r2 = Math.abs(Wi - Vi) > o.innerHeight / 100 * bt().touchSensitivity, a2 = Math.abs(Ii - Fi) > w() / 100 * bt().touchSensitivity, l2 = p($n, t2).length && Math.abs(Ii - Fi) > Math.abs(Wi - Vi), u2 = Wi > Vi ? "down" : "up";
        vn({ G: l2 ? Ii > Fi ? "right" : "left" : u2 }), l2 ? !dn.W && a2 && (Ii > Fi ? ge().m.right && fn.R(wn, { section: t2 }) : ge().m.left && fn.R(mn, { section: t2 })) : bt().autoScrolling && dn.canScroll && r2 && Ni(u2);
      }
    }
    function Yi(n2) {
      return n2.pointerType === void 0 || n2.pointerType != "mouse";
    }
    function Ui(n2) {
      if (bt().fitToSection && vn({ B: false }), Yi(n2)) {
        var t2 = _i(n2);
        Wi = t2.y, Ii = t2.x;
      }
      G("touchend", Xi);
    }
    function Xi() {
      U("touchend", Xi), vn({ U: false });
    }
    function _i(n2) {
      var t2 = {};
      return t2.y = n2.pageY !== void 0 && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = n2.pageX !== void 0 && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, u && Yi(n2) && bt().scrollBar && n2.touches !== void 0 && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
    }
    function Qi() {
      var n2;
      return o.PointerEvent && (n2 = { down: "pointerdown", move: "pointermove" }), n2;
    }
    function Ji(n2) {
      bt().autoScrolling && Yi(n2) && ge().m.up && (dn.canScroll || F(n2));
    }
    function Ki(n2, t2) {
      var e2 = t2 == null ? pn().N.item : t2, i2 = Nt(dn.L, e2), o2 = p($n, e2)[0];
      if (!(o2 == null || Ot() || dn.W || i2.slides.length < 2)) {
        var r2 = i2.activeSlide, a2 = n2 === "left" ? r2.prev() : r2.next();
        if (!a2) {
          if (!bt().loopHorizontal)
            return;
          a2 = n2 === "left" ? rn(i2.slides) : i2.slides[0];
        }
        vn({ W: !s.test.pn }), Se(o2, a2.item, n2);
      }
    }
    function qi(n2) {
      Ki("left", n2);
    }
    function $i(n2) {
      Ki("right", n2);
    }
    function no(n2) {
      var t2 = pn().L.filter(function(t3) {
        return t3.anchor === n2;
      })[0];
      if (!t2) {
        var e2 = n2 !== void 0 ? n2 - 1 : 0;
        t2 = pn().L[e2];
      }
      return t2;
    }
    function to(n2) {
      n2 != null && Se(P(n2, $n), n2);
    }
    function eo(n2, t2) {
      var e2 = no(n2);
      if (e2 != null) {
        var i2 = function(n3, t3) {
          var e3 = t3.slides.filter(function(t4) {
            return t4.anchor === n3;
          })[0];
          return e3 == null && (n3 = n3 !== void 0 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
        }(t2, e2);
        e2.anchor === dn.F || g(e2.item, Zn) ? to(i2) : Ze(e2, function() {
          to(i2);
        });
      }
    }
    function io(n2, t2) {
      var e2 = no(n2);
      t2 !== void 0 ? eo(n2, t2) : e2 != null && Ze(e2);
    }
    function oo() {
      clearTimeout(Ci), Y("keydown", ro), Y("keyup", ao);
    }
    function ro(n2) {
      clearTimeout(Ci);
      var t2, e2 = n2.keyCode, i2 = [37, 39].indexOf(e2) > -1, o2 = bt().autoScrolling || bt().fitToSection || i2;
      e2 === 9 ? function(n3) {
        var t3 = n3.shiftKey, e3 = r.activeElement, i3 = fo(Wt(pn().N.item));
        function o3(n4) {
          return F(n4), i3[0] ? i3[0].focus() : null;
        }
        if (!function(n4) {
          var t4 = fo(r), e4 = t4.indexOf(r.activeElement), i4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], o4 = P(i4, Jn), a3 = P(i4, Un);
          return !o4 && !a3;
        }(n3)) {
          e3 ? P(e3, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (e3 = o3(n3)) : o3(n3);
          var a2 = e3 == i3[0], l2 = e3 == i3[i3.length - 1], u2 = t3 && a2;
          if (u2 || !t3 && l2) {
            F(n3);
            var c2 = function(n4) {
              var t4, e4 = n4 ? "prevPanel" : "nextPanel", i4 = [], o4 = It((dn.N && dn.N.activeSlide ? dn.N.activeSlide : dn.N)[e4]());
              do {
                (i4 = fo(o4.item)).length && (t4 = { Wn: o4, In: i4[n4 ? i4.length - 1 : 0] }), o4 = It(o4[e4]());
              } while (o4 && i4.length === 0);
              return t4;
            }(u2), s2 = c2 ? c2.Wn : null;
            if (s2) {
              var f2 = s2.on ? s2 : s2.parent;
              fn.R(An, { Vn: f2.index() + 1, slideAnchor: s2.on ? 0 : s2.index() }), Hi = c2.In, F(n3);
            }
          }
        }
      }(n2) : Q(t2 = r.activeElement, "textarea") || Q(t2, "input") || Q(t2, "select") || Z(t2, "contentEditable") == "true" || Z(t2, "contentEditable") == "" || !bt().keyboardScrolling || !o2 || (Pi = n2.ctrlKey, Ci = setTimeout(function() {
        !function(n3) {
          var t3 = n3.shiftKey, e3 = r.activeElement, i3 = Q(e3, "video") || Q(e3, "audio"), o3 = ti.kn("up", pn().N.item), a2 = ti.kn("down", pn().N.item), l2 = [37, 39].indexOf(n3.keyCode) > -1;
          if (function(n4) {
            (function(n5) {
              return [40, 38, 32, 33, 34].indexOf(n5.keyCode) > -1 && !dn.C;
            })(n4) && !P(n4.target, ot) && n4.preventDefault();
          }(n3), dn.canScroll || l2)
            switch (vn({ P: "keydown" }), n3.keyCode) {
              case 38:
              case 33:
                ge().k.up && o3 && (dn.C ? fn.R(xn, { e: n3 }) : zi());
                break;
              case 32:
                if (t3 && ge().k.up && !i3 && o3) {
                  zi();
                  break;
                }
              case 40:
              case 34:
                if (ge().k.down && a2) {
                  if (dn.C)
                    return;
                  n3.keyCode === 32 && i3 || ji();
                }
                break;
              case 36:
                ge().k.up && io(1);
                break;
              case 35:
                ge().k.down && io(pn().L.length);
                break;
              case 37:
                ge().k.left && qi();
                break;
              case 39:
                ge().k.right && $i();
            }
        }(n2);
      }, 0));
    }
    function ao(n2) {
      dn._ && (Pi = n2.ctrlKey);
    }
    function lo() {
      vn({ _: false }), Pi = false;
    }
    function uo(n2) {
      so();
    }
    function co(n2) {
      P(Hi, Jn) && !P(Hi, Kn) || so();
    }
    function so() {
      Hi && (Hi.focus(), Hi = null);
    }
    function fo(n2) {
      return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
        return Z(n3, "tabindex") !== "-1" && n3.offsetParent !== null;
      });
    }
    s.moveSlideLeft = qi, s.moveSlideRight = $i, s.moveTo = io, fn.O(Sn, function() {
      G("blur", lo), B("keydown", ro), B("keyup", ao), fn.O(yn, oo), fn.O(Dn, uo), fn.O(zn, co);
    });
    var vo = new Date().getTime(), po = [];
    function ho(n2) {
      n2 ? (function() {
        var n3, t2 = "";
        o.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
        var e2 = "onwheel" in r.createElement("div") ? "wheel" : r.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", i2 = mi();
        e2 == "DOMMouseScroll" ? r[n3](t2 + "MozMousePixelScroll", go, i2) : r[n3](t2 + e2, go, i2);
      }(), wt().addEventListener("mousedown", mo), wt().addEventListener("mouseup", wo)) : (r.addEventListener ? (Y("mousewheel", go, false), Y("wheel", go, false), Y("MozMousePixelScroll", go, false)) : r.detachEvent("onmousewheel", go), wt().removeEventListener("mousedown", mo), wt().removeEventListener("mouseup", wo));
    }
    function go(n2) {
      var t2 = new Date().getTime(), e2 = g(p(".fp-completely")[0], "fp-normal-scroll"), i2 = function(n3, t3) {
        new Date().getTime();
        var e3 = pn().C && n3.getBoundingClientRect().bottom >= 0 && Mi.Nn() === "up", i3 = pn().Pn;
        if (i3)
          return F(t3), false;
        if (pn().C) {
          if (e3) {
            var o2;
            if (!(i3 || ki("isNewKeyframe", "beyondFullpage") && Mi.Ln()))
              return (o2 = Vt(rn(pn().L).item.offsetTop + rn(pn().L).item.offsetHeight)).element.scrollTo(0, o2.options), vn({ Pn: false }), F(t3), false;
            if (Mi.Ln())
              return e3 = false, vn({ Pn: true }), vn({ P: "wheel" }), xi(), F(t3), false;
          } else
            ki("set", "beyondFullpage", 1e3);
          if (!i3 && !e3)
            return true;
        }
      }(wt(), n2);
      if (dn.X || vn({ U: false, X: true, G: "none" }), !ge().m.down && !ge().m.up)
        return F(n2), false;
      if (i2)
        return true;
      if (i2 === false)
        return F(n2), false;
      if (bt().autoScrolling && !Pi && !e2) {
        var r2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), l2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0, u2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !l2, c2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
        po.length > 149 && po.shift(), po.push(Math.abs(r2)), bt().scrollBar && F(n2);
        var s2 = t2 - vo;
        return vo = t2, s2 > 200 && (po = []), vn({ Y: c2 }), dn.canScroll && !Ot() && an(po, 10) >= an(po, 70) && u2 && (vn({ P: "wheel" }), Ni(a2 < 0 ? "down" : "up")), false;
      }
      bt().fitToSection && vn({ B: false });
    }
    function mo(n2) {
      var t2;
      n2.which == 2 && (t2 = n2.pageY, Di = t2, wt().addEventListener("mousemove", Li));
    }
    function wo(n2) {
      n2.which == 2 && wt().removeEventListener("mousemove", Li);
    }
    function bo(n2) {
      n2 ? (ho(true), function() {
        if (Bi.Cn && (a || u) && (!At("dragAndMove") || bt().dragAndMove === "mouseonly")) {
          bt().autoScrolling && (Jt.removeEventListener(Bi.Cn, Ji, { passive: false }), Jt.addEventListener(Bi.Cn, Ji, { passive: false }));
          var n3 = bt().touchWrapper;
          n3.removeEventListener(Bi.Hn, Ui), n3.removeEventListener(Bi.Cn, Gi, { passive: false }), n3.addEventListener(Bi.Hn, Ui), n3.addEventListener(Bi.Cn, Gi, { passive: false });
        }
      }()) : (ho(false), function() {
        if (Bi.Cn && (a || u)) {
          bt().autoScrolling && (Jt.removeEventListener(Bi.Cn, Gi, { passive: false }), Jt.removeEventListener(Bi.Cn, Ji, { passive: false }));
          var n3 = bt().touchWrapper;
          n3.removeEventListener(Bi.Hn, Ui), n3.removeEventListener(Bi.Cn, Gi, { passive: false });
        }
      }());
    }
    s.setMouseWheelScrolling = ho;
    var So = true;
    function yo() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
        Y(n2, To, true);
      });
    }
    function Mo(n2, t2) {
      document["fp_" + n2] = t2, B(n2, To, true);
    }
    function To(n2) {
      var t2 = n2.type, e2 = false, i2 = t2 === "mouseleave" ? n2.toElement || n2.relatedTarget : n2.target;
      i2 != document && i2 ? (t2 === "touchend" && (So = false, setTimeout(function() {
        So = true;
      }, 800)), (t2 !== "mouseenter" || So) && (bt().normalScrollElements.split(",").forEach(function(n3) {
        if (!e2) {
          var t3 = Q(i2, n3), o2 = P(i2, n3);
          (t3 || o2) && (s.shared.Fn || bo(false), s.shared.Fn = true, e2 = true);
        }
      }), !e2 && s.shared.Fn && (bo(true), s.shared.Fn = false))) : bo(true);
    }
    function Ao(n2, t2) {
      _t(0, "internal"), io(n2, t2), _t(St().scrollingSpeed, "internal");
    }
    fn.O(Sn, function() {
      bt().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
        Mo(n2, false);
      }), ["mouseleave", "touchend"].forEach(function(n2) {
        Mo(n2, true);
      })), fn.O(yn, yo);
    }), s.silentMoveTo = Ao;
    var xo, Oo, Eo = m(), Ro = w(), ko = false;
    function jo() {
      clearTimeout(xo), clearTimeout(Oo), U("resize", zo);
    }
    function zo() {
      ko || (bt().autoScrolling && !bt().scrollBar || !bt().fitToSection) && Lo(m()), function() {
        if (a)
          for (var n2 = 0; n2 < 4; n2++)
            Oo = setTimeout(function() {
              window.requestAnimationFrame(function() {
                bt().autoScrolling && !bt().scrollBar && (vn({ I: true }), Ao(dn.N.index() + 1), vn({ I: false }));
              });
            }, 200 * n2);
      }(), ko = true, clearTimeout(xo), xo = setTimeout(function() {
        !function() {
          if (vn({ I: true }), Lo(""), _(wt(), "onResize"), bt().autoScrolling || dn.C || function() {
            if (!bt().autoScrolling || bt().scrollBar) {
              var n3 = 0.01 * o.innerHeight;
              r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
            }
          }(), fn.R(Mn), oi(), Xe(), a) {
            var n2 = r.activeElement;
            if (!Q(n2, "textarea") && !Q(n2, "input") && !Q(n2, "select")) {
              var t2 = m();
              Math.abs(t2 - Eo) > 20 * Math.max(Eo, t2) / 100 && (Do(true), Eo = t2);
            }
          } else
            e2 = m(), i2 = w(), dn.K === e2 && Ro === i2 || (vn({ K: e2 }), Ro = i2, Do(true));
          var e2, i2;
          _(wt(), "onResizeEnds"), vn({ I: false });
        }(), ko = false;
      }, 400);
    }
    function Do(n2) {
      if (!g(wt(), Vn)) {
        vn({ I: true, K: m(), Zn: w() });
        for (var t2 = pn().L, e2 = 0; e2 < t2.length; ++e2) {
          var i2 = t2[e2], r2 = p($n, i2.item)[0], a2 = i2.slides;
          At("offsetSections") && b(i2.item, { height: Rt(i2.item) }), a2.length > 1 && Se(r2, i2.activeSlide.item);
        }
        bt().scrollOverflow && ti.bn();
        var l2 = pn().N.index();
        dn.C || !l2 || At("fadingEffect") || At("dropEffect") || At("waterEffect") || Ao(l2 + 1), vn({ I: false }), X(bt().afterResize) && n2 && bt().afterResize.call(wt(), o.innerWidth, o.innerHeight), X(bt().afterReBuild) && !n2 && bt().afterReBuild.call(wt()), _(wt(), "afterRebuild");
      }
    }
    function Lo(n2) {
      pn().L.forEach(function(t2) {
        var e2 = n2 !== "" || At("offsetSections") ? Rt(t2.item) : "";
        b(t2.item, { height: e2 });
      });
    }
    function No() {
      var n2, t2, e2 = o.location.hash;
      if (e2.length) {
        var i2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
        n2 = r2 ? "/" + i2[1] : decodeURIComponent(i2[0]);
        var a2 = r2 ? i2[2] : i2[1];
        a2 && a2.length && (t2 = decodeURIComponent(a2));
      }
      return { section: n2, cn: t2 };
    }
    function Po() {
      U("hashchange", Co);
    }
    function Co() {
      if (!dn.V && !bt().lockAnchors) {
        var n2 = No(), t2 = n2.section, e2 = n2.cn, i2 = dn.F === void 0, o2 = dn.F === void 0 && e2 === void 0 && !dn.W;
        t2 && t2.length && (t2 && t2 !== dn.F && !i2 || o2 && !Ot() || !dn.W && dn.Z != e2 && !Ot()) && fn.R(An, { Vn: t2, slideAnchor: e2 });
      }
    }
    function Ho(n2) {
      var t2 = n2.target;
      P(t2, bt().menu + " [data-menuanchor]") && Wo.call(t2, n2);
    }
    function Wo(n2) {
      vn({ P: "menu" }), !p(bt().menu)[0] || !bt().lockAnchors && bt().anchors.length || (F(n2), fn.R(On, { anchor: Z(this, "data-menuanchor") }));
    }
    function Io(n2) {
      var t2 = n2.target;
      t2 && P(t2, "#fp-nav a") ? De.call(t2, n2.e) : Q(t2, ".fp-tooltip") ? je.call(t2) : (Q(t2, lt) || P(t2, lt) != null) && de.call(t2, n2.e);
    }
    s.reBuild = Do, fn.O(Sn, function() {
      zo(), G("resize", zo), fn.O(yn, jo);
    }), s.setLockAnchors = function(n2) {
      bt().lockAnchors = n2;
    }, fn.O(Sn, function() {
      G("hashchange", Co), fn.O(yn, Po);
    }), fn.O(Sn, function() {
      B("wheel", Mi.Dn, mi()), fn.O(kn, Ti), fn.O(xn, Ai);
    }), fn.O(Sn, function() {
      fn.O(gn, Ho);
    }), fn.O(Sn, function() {
      fn.O(gn, Io);
    });
    var Vo, Fo, Zo = 0;
    function Bo(n2) {
      var t2, e2, i2, o2, r2;
      if (_(wt(), "onScroll"), !dn.I && pn().N && (rn(pn().L), !pn().C && !pn().Pn && (!bt().autoScrolling || bt().scrollBar || At("dragAndMove")) && !Et())) {
        var a2 = At("dragAndMove") ? Math.abs(xt("dragAndMove", "getCurrentScroll")) : I(), l2 = function(n3) {
          var t3 = n3 > Zo ? "down" : "up";
          return Zo = n3, vn({ J: n3 }), t3;
        }(a2), u2 = 0, c2 = a2 + m() / 2, s2 = (At("dragAndMove") ? xt("dragAndMove", "getDocumentHeight") : Jt.scrollHeight - m()) === a2, f2 = pn().L;
        if (vn({ scrollY: a2 }), s2)
          u2 = f2.length - 1;
        else if (a2)
          for (var d2 = 0; d2 < f2.length; ++d2)
            (P(f2[d2].item, Un) || f2[d2].item).offsetTop <= c2 && (u2 = d2);
        else
          u2 = 0;
        if (i2 = l2, o2 = pn().N.item.offsetTop, r2 = o2 + m(), (i2 == "up" ? r2 >= I() + m() : o2 <= I()) && (g(pn().N.item, Gn) || (R(pn().N.item, Gn), k(V(pn().N.item), Gn))), e2 = (t2 = f2[u2]).item, !t2.isActive) {
          vn({ V: true });
          var v2, p2, h2 = pn().N.item, w2 = pn().N.index() + 1, b2 = Bt(pn().N, e2), S2 = t2.anchor, y2 = t2.index() + 1, M2 = t2.activeSlide, T2 = { N: h2, sectionIndex: y2 - 1, anchorLink: S2, element: e2, leavingSection: w2, direction: b2, items: { origin: pn().N, destination: t2 } };
          if (M2 && (p2 = M2.anchor, v2 = M2.index()), dn.canScroll)
            k(f2.filter(function(n3) {
              return n3.index() !== t2.index();
            }).map(function(n3) {
              return n3.item;
            }), Zn), R(e2, Zn), xt("parallax", "afterLoad"), X(bt().beforeLeave) && Fe("beforeLeave", T2), X(bt().onLeave) && ee("onLeave", T2), X(bt().afterLoad) && ee("afterLoad", T2), xt("resetSliders", "apply", { localIsResizing: dn.I, leavingSection: w2 }), re(h2), ae(e2), ie(e2), Le(S2, y2 - 1), bt().anchors.length && vn({ F: S2 }), ce(v2, p2, S2), oi();
          clearTimeout(Vo), Vo = setTimeout(function() {
            vn({ V: false });
          }, 100);
        }
        bt().fitToSection && dn.canScroll && (clearTimeout(Fo), Fo = setTimeout(function() {
          dn.L.filter(function(n3) {
            var t3 = n3.item.getBoundingClientRect();
            return Math.round(t3.bottom) === Math.round(m()) || Math.round(t3.top) === 0;
          }).length || Ue();
        }, bt().tn));
      }
    }
    function Go(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        he(n2, t3, "k");
      }) : (he(n2, "all", "k"), bt().keyboardScrolling = n2);
    }
    function Yo(n2) {
      var t2 = n2.index();
      bt().anchors[t2] !== void 0 && n2.isActive && Le(bt().anchors[t2], t2), bt().menu && bt().css3 && P(p(bt().menu)[0], Hn) != null && p(bt().menu).forEach(function(n3) {
        Jt.appendChild(n3);
      });
    }
    function Uo() {
      var n2, t2, e2 = pn().N, i2 = pn().N.item;
      R(i2, Gn), ae(i2), ke(), ie(i2), t2 = no((n2 = No()).section), n2.section && t2 && (t2 === void 0 || t2.index() !== T(Ke)) || !X(bt().afterLoad) || ee("afterLoad", { N: i2, element: i2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: pn().N, destination: pn().N } }), X(bt().afterRender) && ee("afterRender"), _(wt(), "afterRender");
    }
    function Xo(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        he(n2, t3, "m");
      }) : he(n2, "all", "m"), _(wt(), "setAllowScrolling", { value: n2, Bn: t2 });
    }
    function _o() {
      var n2 = No(), t2 = n2.section, e2 = n2.cn;
      t2 ? bt().animateAnchor ? eo(t2, e2) : Ao(t2, e2) : fn.R(hn, null);
    }
    fn.O(yn, function() {
      clearTimeout(Vo), clearTimeout(Fo);
    }), fn.O(Sn, function() {
      G("scroll", Bo), r.body.addEventListener("scroll", Bo), fn.O(An, function(n2) {
        eo(n2.Vn, n2.slideAnchor);
      }), fn.O(On, function(n2) {
        io(n2.anchor, void 0);
      }), fn.O(Tn, function(n2) {
        (n2.direction === "down" ? ji : zi)();
      }), fn.O(En, function(n2) {
        Ze(n2.destination);
      });
    }), fn.O(yn, function() {
      U("scroll", Bo);
    }), s.getActiveSlide = function() {
      return te(pn().N.activeSlide);
    }, s.getScrollX = function() {
      return dn.scrollX;
    }, fn.O(Sn, function() {
      fn.O(yn, Te), fn.O(Rn, function(n2) {
        Se(n2.slides, n2.destination);
      }), fn.O(wn, function(n2) {
        $i(n2.section);
      }), fn.O(mn, function(n2) {
        qi(n2.section);
      });
    }), fn.O(Sn, function() {
      var n2 = bt().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(bt().credits.label, "\n            </a>\n        </div>\n    "), i2 = rn(dn.L), o2 = !dn.Gn || bt().credits.enabled;
      i2 && i2.item && o2 && i2.item.insertAdjacentHTML("beforeend", e2);
    }), function() {
      fn.O(bn, function() {
        var t3, l2, u2;
        vn({ Gn: (bt().licenseKey, t3 = bt().licenseKey, l2 = function(t4) {
          var e3 = parseInt("514").toString(16);
          if (!t4 || t4.length < 29 || t4.split(n2[0]).length === 4)
            return null;
          var i3 = ["Each", "for"][o2()]().join(""), l3 = t4[["split"]]("-"), u3 = [];
          l3[i3](function(n3, t5) {
            if (t5 < 4) {
              var i4 = function(n4) {
                var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][o2()]().join("");
                return window[e4](t6) ? r2(t6) : function(n5) {
                  return n5 - Zn.length;
                }(t6);
              }(n3);
              u3.push(i4);
              var a3 = r2(n3[i4]);
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
              for (var e4 = 0, i4 = 0; i4 < 4; i4++)
                i4 !== u3[t5] && (e4 += Math.abs(r2(n3[i4])), isNaN(n3[i4]) || c2++);
              var o3 = a2(e4);
              s2 += o3;
            }
          }), s2 += a2(c2), { Yn: new Date(e3 + "T00:00"), Un: e3.split("-")[2] === 8 * (Zn.length - 2) + "", Xn: s2 };
        }(t3), u2 = function(n3) {
          var t4 = i2[o2()]().join("");
          return n3 && t4.indexOf(n3) === 0 && n3.length === t4.length;
        }(t3), (l2 || u2) && (bt().credits && l2 && e2 <= l2.Yn && l2.Xn === t3.split(n2[0])[4] || u2 || l2.Un) || false) });
      });
      var n2 = ["-"], t2 = "2022-10-11".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), i2 = ["se", "licen", "-", "v3", "l", "gp"];
      function o2() {
        return [["re", "verse"].join("")]["".length];
      }
      function r2(n3) {
        return n3 ? isNaN(n3) ? n3.charCodeAt(0) - 72 : n3 : "";
      }
      function a2(n3) {
        var t3 = 72 + n3;
        return t3 > 90 && t3 < 97 && (t3 += 15), String.fromCharCode(t3).toUpperCase();
      }
    }(), s.setKeyboardScrolling = Go, s.shared._n = Uo, s.setAllowScrolling = Xo;
    var Qo = {};
    function Jo() {
      return Qo;
    }
    var Ko, qo, $o, nr, tr = !g(Jt, jt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function er(n2) {
      if (qo = r.createElement("div"), Ko = jt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), tr || (Ko = Ko.replace("extensions/", "").replace("Extension", "")), qo.innerHTML = Ko, qo = qo.firstChild, "MutationObserver" in window && new MutationObserver(or).observe(r.body, { childList: true, subtree: false }), (!tr || At(n2) && s[n2]) && (!function(n3) {
        var t3 = Jo()[n3] !== void 0 && Jo()[n3].length, e2 = [], i2 = false;
        return E(Jo()[n3]) ? e2 = Jo()[n3] : e2.push(Jo()[n3]), e2.forEach(function(e3) {
          var o2 = function() {
            if (r.domain.length) {
              for (var n4 = r.domain.replace(/^(www\.)/, "").split("."); n4.length > 2; )
                n4.shift();
              return n4.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), a2 = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], l2 = jt(a2[0]), u2 = jt(a2[1]), c2 = jt(a2[2]), s2 = jt(a2[6]), f2 = jt(a2[3]), d2 = jt(a2[4]), v2 = jt(a2[5]), p2 = bt()[d2 + v2] !== void 0;
          t3 = t3 || p2;
          var h2 = [l2, u2, c2, s2].indexOf(o2) < 0 && o2.length !== 0;
          if (!t3 && !p2 && h2)
            return false;
          var g2 = t3 ? jt(e3) : "", m2 = (g2 = g2.split("_")).length > 1 && g2[1].indexOf(n3, g2[1].length - n3.length) > -1, w2 = g2.length > 1 && g2[1].toLowerCase().indexOf(d2) > -1, b2 = g2[0].indexOf(o2, g2[0].length - o2.length) < 0, S2 = m2 || w2;
          i2 = i2 || !(b2 && h2 && f2 != g2[0]) && S2 || !h2;
        }), i2;
      }(n2) || !tr)) {
        ir();
        var t2 = jt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t2](ir, 2e3);
      }
    }
    function ir() {
      qo && (nr || (Math.random() < 0.5 ? kt(Jt, qo) : j(qo, Jt), nr = true), qo.setAttribute("style", jt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, jt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function or(n2) {
      n2.forEach(function(n3) {
        if (n3.removedNodes[0] && n3.removedNodes[0].isEqualNode(qo)) {
          clearTimeout($o);
          var t2 = jt("bDIwc2V0VGltZW91dDAzbA==");
          $o = window[t2](rr, 900);
        }
      });
    }
    function rr() {
      nr = false;
    }
    function ar() {
      ri(), oi(), bt().scrollBar = bt().scrollBar || bt().hybrid, Mt(), function() {
        b(un(wt(), "body"), { height: "100%", position: "relative" }), R(wt(), Cn), R(Kt, Fn), vn({ K: m() }), k(wt(), Vn), fi(), xt("parallax", "init");
        for (var n2 = pn().rn, t2 = 0; t2 < n2.length; t2++) {
          var e2 = n2[t2], i2 = e2.wn;
          e2.item.setAttribute("data-fp-styles", Z(e2.item, "style")), qe(e2), Yo(e2), i2.length > 0 && di(e2);
        }
        bt().fixedElements && bt().css3 && p(bt().fixedElements).forEach(function(n3) {
          Jt.appendChild(n3);
        }), bt().navigation && ze(), p('iframe[src*="youtube.com/embed/"]', wt()).forEach(function(n3) {
          var t3, e3;
          e3 = Z(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
        }), xt("fadingEffect", "apply"), xt("waterEffect", "init"), xt("dropEffect", "init"), xt("cards", "init"), bt().scrollOverflow && ti.bn();
      }(), Xo(true), bo(true), Ee(bt().autoScrolling, "internal"), Xe(), le(), r.readyState === "complete" && _o(), G("load", _o), Uo(), tr || er("l"), ri(), oi();
    }
    function lr() {
      var n2 = bt().licenseKey;
      bt().licenseKey.trim() === "" ? (f("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), f("error", "https://github.com/alvarotrigo/fullPage.js#options")) : bt() && dn.Gn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length : (f("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), f("error", "https://alvarotrigo.com/fullPage/pricing")), g(Kt, Fn) ? f("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (bt().continuousVertical && (bt().loopTop || bt().loopBottom) && (bt().continuousVertical = false, f("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !bt().scrollOverflow || !bt().scrollBar && bt().autoScrolling || f("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !bt().continuousVertical || !bt().scrollBar && bt().autoScrolling || (bt().continuousVertical = false, f("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), bt().anchors.forEach(function(n3) {
        var t2 = [].slice.call(p("[name]")).filter(function(t3) {
          return Z(t3, "name") && Z(t3, "name").toLowerCase() == n3.toLowerCase();
        }), e2 = [].slice.call(p("[id]")).filter(function(t3) {
          return Z(t3, "id") && Z(t3, "id").toLowerCase() == n3.toLowerCase();
        });
        if (e2.length || t2.length) {
          f("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var i2 = e2.length ? "id" : "name";
          (e2.length || t2.length) && f("error", '"' + n3 + '" is is being used by another element `' + i2 + "` property");
        }
      }));
    }
    function ur() {
      return { options: bt(), internals: { container: wt(), canScroll: dn.canScroll, isScrollAllowed: ge(), getDestinationPosition: Be, isTouch: u, c: er, getXmovement: Me, removeAnimation: Gt, getTransforms: Yt, lazyLoad: ae, addAnimation: Zt, performHorizontalMove: ye, landscapeScroll: Se, silentLandscapeScroll: xe, keepSlidesPosition: Re, silentScroll: Xt, styleSlides: di, styleSection: qe, scrollHandler: Bo, getEventsPage: _i, getMSPointer: Qi, isReallyTouch: Yi, usingExtension: At, toggleControlArrows: we, touchStartHandler: Ui, touchMoveHandler: Gi, nullOrSection: ne, items: { SectionPanel: ui, SlidePanel: si, Item: Dt }, getVisible: v, getState: pn, updateState: oi, updateStructuralState: ri, getPanels: function() {
        return dn.ln;
      }, getSections: function() {
        return dn.L;
      }, setActiveSection: function(n2) {
        dn.N = n2;
      } } };
    }
    function cr(n2) {
      var t2 = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], e2 = jt(t2[0]), i2 = jt(t2[1]), o2 = bt()[e2 + i2] !== void 0, r2 = "fp_" + n2 + "Extension";
      Jo()[n2] = o2 ? bt()[e2 + i2] : bt()[n2 + i2], s[n2] = window[r2] !== void 0 ? new window[r2]() : null, s[n2] && s[n2].c(n2);
    }
    function sr(n2, t2) {
      var e2;
      if (Jt = p("body")[0], Kt = p("html")[0], qt = p("html, body"), !g(Kt, Fn))
        return e2 = typeof n2 == "string" ? p(n2)[0] : n2, vt.touchWrapper = e2, function(n3) {
          mt = h({}, vt, n3), gt = Object.assign({}, mt);
        }(t2), function(n3) {
          pt = n3;
        }(typeof n2 == "string" ? p(n2)[0] : n2), fn.R(bn), lr(), s.getFullpageData = ur, s.version = "4.0.14", s.test = Object.assign(s.test, { top: "0px", un: "translate3d(0px, 0px, 0px)", sn: function() {
          for (var n3 = [], t3 = 0; t3 < p(bt().sectionSelector, wt()).length; t3++)
            n3.push("translate3d(0px, 0px, 0px)");
          return n3;
        }(), left: function() {
          for (var n3 = [], t3 = 0; t3 < p(bt().sectionSelector, wt()).length; t3++)
            n3.push(0);
          return n3;
        }(), options: bt(), setAutoScrolling: null }), s.shared = Object.assign(s.shared, { _n: null, Fn: false }), o.fullpage_api = s, o.fullpage_extensions = true, wt() && (fn.R("beforeInit"), cr("continuousHorizontal"), cr("scrollHorizontally"), cr("resetSliders"), cr("interlockedSlides"), cr("responsiveSlides"), cr("fadingEffect"), cr("dragAndMove"), cr("offsetSections"), cr("scrollOverflowReset"), cr("parallax"), cr("cards"), cr("dropEffect"), cr("waterEffect"), xt("dragAndMove", "init"), xt("responsiveSlides", "init"), ar(), fn.R(Sn), xt("dragAndMove", "turnOffTouch")), o.fullpage_api;
      lr();
    }
    return s.destroy = function(n2) {
      _(wt(), "destroy", n2), Ee(false, "internal"), Xo(true), bo(false), Go(false), R(wt(), Vn), fn.R(yn), xt("dragAndMove", "destroy"), n2 && (Xt(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", wt()).forEach(function(n3) {
        ln(n3, "src");
      }), p("img[data-srcset]").forEach(function(n3) {
        ln(n3, "srcset");
      }), q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(Lt(pn().L), { height: "", "background-color": "", padding: "" }), b(Lt(pn().slides), { width: "" }), b(wt(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), b(qt, { overflow: "", height: "" }), k(Kt, Fn), k(Jt, Wn), Jt.className.split(/\s+/).forEach(function(n3) {
        n3.indexOf("fp-viewing") === 0 && k(Jt, n3);
      }), Lt(pn().ln).forEach(function(n3) {
        bt().scrollOverflow && ti.Rn(n3), k(n3, "fp-table active " + Gn), Z(n3, "data-fp-styles") && n3.setAttribute("style", Z(n3, "data-fp-styles")), g(n3, Yn) && !ht && n3.removeAttribute("data-anchor");
      }), Gt(wt()), [Xn, tt, $n].forEach(function(n3) {
        p(n3, wt()).forEach(function(n4) {
          N(n4);
        });
      }), b(wt(), { "-webkit-transition": "none", transition: "none" }), o.scrollTo(0, 0), [Yn, Qn, nt].forEach(function(n3) {
        k(p("." + n3), n3);
      }));
    }, o.fp_easings = h(o.fp_easings, { easeInOutCubic: function(n2, t2, e2, i2) {
      return (n2 /= i2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
    } }), o.jQuery && function(n2, t2) {
      n2 && t2 ? n2.fn.fullpage = function(e2) {
        e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(s).forEach(function(n3) {
          bt().$.fn.fullpage[n3] = s[n3];
        });
      } : f("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(o.jQuery, sr), sr;
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
