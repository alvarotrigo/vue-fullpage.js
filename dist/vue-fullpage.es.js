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
* vue-fullpage 0.2.11
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
* fullPage 4.0.16
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
      n2 = k(n2) ? n2[0] : n2;
      for (var e2 = t2 != null ? p(t2, n2.parentNode) : n2.parentNode.childNodes, i2 = 0, o2 = 0; o2 < e2.length; o2++) {
        if (e2[o2] == n2)
          return i2;
        e2[o2].nodeType == 1 && i2++;
      }
      return -1;
    }
    function A(n2) {
      return k(n2) ? n2 : [n2];
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
    function k(n2) {
      return Object.prototype.toString.call(n2) === "[object Array]" || Object.prototype.toString.call(n2) === "[object NodeList]";
    }
    function E(n2, t2) {
      n2 = A(n2);
      for (var e2 = 0; e2 < n2.length; e2++)
        n2[e2].classList.add(t2);
      return n2;
    }
    function R(n2, t2) {
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
    function L(n2, t2, e2) {
      var i2;
      t2 = t2 || r.createElement("div");
      for (var o2 = 0; o2 < n2.length; o2++) {
        var a2 = n2[o2];
        (e2 && !o2 || !e2) && (i2 = t2.cloneNode(true), a2.parentNode.insertBefore(i2, a2)), i2.appendChild(a2);
      }
      return n2;
    }
    function z(n2, t2) {
      L(n2, t2, true);
    }
    function D(n2, t2) {
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
    function H(n2, t2) {
      W(n2, n2.nextSibling, t2);
    }
    function C(n2, t2) {
      W(n2, n2, t2);
    }
    function W(n2, t2, e2) {
      k(e2) || (typeof e2 == "string" && (e2 = K(e2)), e2 = [e2]);
      for (var i2 = 0; i2 < e2.length; i2++)
        n2.parentNode.insertBefore(e2[i2], t2);
    }
    function I() {
      var n2 = r.documentElement;
      return (o.pageYOffset || n2.scrollTop) - (n2.clientTop || 0);
    }
    function F(n2) {
      return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
        return t2 !== n2;
      });
    }
    function V(n2) {
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
    }, writable: true, i: true }), window.fp_utils = { $: p, deepExtend: h, hasClass: g, getWindowHeight: m, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: k, addClass: E, removeClass: R, appendTo: j, wrap: L, wrapAll: z, wrapInner: D, unwrap: N, closest: P, after: H, before: C, insertBefore: W, getScrollTop: I, siblings: F, preventDefault: V, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, showError: f };
    var cn = Object.freeze({ __proto__: null, showError: f, isVisible: d, getVisible: v, $: p, deepExtend: h, hasClass: g, getWindowHeight: m, o: w, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: k, addClass: E, removeClass: R, appendTo: j, wrap: L, wrapAll: z, wrapInner: D, unwrap: N, closest: P, after: H, before: C, insertBefore: W, getScrollTop: I, siblings: F, preventDefault: V, l: Z, u: B, v: G, p: Y, h: U, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, toArray: on, g: rn, S: an, M: ln, T: un });
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
    } }, dn = { j: 0, L: 0, slides: [], D: [], N: null, P: null, H: false, C: false, W: false, I: false, F: false, V: void 0, Z: void 0, B: false, canScroll: true, G: "none", Y: "none", U: false, X: false, _: true, J: 0, K: m(), q: false, nn: {} };
    function vn(n2) {
      Object.assign(dn, n2);
    }
    function pn() {
      return dn;
    }
    o.state = dn;
    var hn = "onAfterRenderNoAnchor", gn = "onClickOrTouch", mn = "moveSlideLeft", wn = "moveSlideRight", bn = "onInitialise", Sn = "bindEvents", yn = "onDestroy", Mn = "contentChanged", Tn = "onScrollOverflowScrolled", An = "onScrollPageAndSlide", xn = "onKeyDown", On = "onMenuClick", kn = "scrollPage", En = "landscapeScroll", Rn = "scrollBeyondFullpage", jn = "onPerformMovement", Ln = "onSlideLeave", zn = "onLeave", Dn = "afterSectionLoads", Nn = "afterSlideLoads";
    function Pn(n2) {
      fn.R(gn, { e: n2, target: n2.target });
    }
    function Hn() {
      ["click", "touchstart"].forEach(function(n2) {
        Y(n2, Pn);
      });
    }
    function Cn() {
      vn({ _: true });
    }
    fn.O(Sn, function() {
      ["click", "touchstart"].forEach(function(n2) {
        B(n2, Pn);
      }), G("focus", Cn), fn.O(yn, Hn);
    });
    var Wn = "fullpage-wrapper", In = "." + Wn, Fn = "fp-responsive", Vn = "fp-notransition", Zn = "fp-destroyed", Bn = "fp-enabled", Gn = "active", Yn = ".active", Un = "fp-completely", Xn = "fp-section", _n = "." + Xn, Qn = ".fp-tableCell", Jn = "#fp-nav", Kn = "fp-slide", qn = "." + Kn, $n = ".fp-slide.active", nt = "fp-slides", tt = ".fp-slides", et = "fp-slidesContainer", it = "." + et, ot = "fp-table", rt = "fp-overflow", at = "." + rt, lt = "fp-is-overflow", ut = ".fp-slidesNav", ct = ".fp-slidesNav a", st = "fp-controlArrow", ft = "." + st, dt = "fp-prev", vt = ".fp-controlArrow.fp-prev", pt = ".fp-controlArrow.fp-next", ht = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, tn: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, gt = null, mt = false, wt = h({}, ht), bt = null;
    function St(n2) {
      return gt;
    }
    function yt() {
      return bt || ht;
    }
    function Mt() {
      return wt;
    }
    function Tt(n2, t2, e2) {
      bt[n2] = t2, e2 !== "internal" && (wt[n2] = t2);
    }
    function At() {
      if (!yt().anchors.length) {
        var n2 = p(yt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", gt);
        n2.length && n2.length === p(yt().sectionSelector, gt).length && (mt = true, n2.forEach(function(n3) {
          yt().anchors.push(Z(n3, "data-anchor").toString());
        }));
      }
      if (!yt().navigationTooltips.length) {
        var t2 = p(yt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", gt);
        t2.length && t2.forEach(function(n3) {
          yt().navigationTooltips.push(Z(n3, "data-tooltip").toString());
        });
      }
    }
    function xt(n2) {
      return window["fp_" + n2 + "Extension"] !== void 0;
    }
    function Ot(n2) {
      var t2 = yt();
      return t2[n2] !== null && Object.prototype.toString.call(t2[n2]) === "[object Array]" ? t2[n2].length && s[n2] : t2[n2] && s[n2];
    }
    function kt(n2, t2, e2) {
      if (Ot(n2))
        return X(s[n2][t2]) ? s[n2][t2](e2) : s[n2][t2];
    }
    function Et() {
      return kt("dragAndMove", "isAnimating");
    }
    function Rt() {
      return kt("dragAndMove", "isGrabbing");
    }
    function jt(n2) {
      if (yt().offsetSections && s.offsetSections) {
        var t2 = kt("offsetSections", "getWindowHeight", n2);
        return t2 !== "" ? Math.round(t2) + "px" : t2;
      }
      return m() + "px";
    }
    function Lt(n2, t2) {
      n2.insertBefore(t2, n2.firstChild);
    }
    function zt(n2) {
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
    o.fp_utils = o.fp_utils || {}, Object.assign(o.fp_utils, { prependTo: Lt, toggleClass: function(n2, t2, e2) {
      if (n2.classList && e2 == null)
        n2.classList.toggle(t2);
      else {
        var i2 = g(n2, t2);
        i2 && e2 == null || !e2 ? R(n2, t2) : (!i2 && e2 == null || e2) && E(n2, t2);
      }
    } });
    var Dt = function(n2) {
      this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
    }, Nt = function(n2, t2) {
      this.parent = this.parent || null, this.selector = t2, this.anchor = Z(n2, "data-anchor") || yt().anchors[T(n2, yt().sectionSelector)], this.item = n2, this.isVisible = d(n2), this.isActive = g(n2, Gn), this.en = g(n2, rt) || p(at, n2)[0] != null, this.on = t2 === yt().sectionSelector, this.container = P(n2, it) || P(n2, In), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function Pt(n2) {
      return n2.map(function(n3) {
        return n3.item;
      });
    }
    function Ht(n2, t2) {
      return n2.find(function(n3) {
        return n3.item === t2;
      });
    }
    Nt.prototype.siblings = function() {
      return this.on ? this.isVisible ? dn.D : dn.rn : this.parent ? this.parent.slides : 0;
    }, Nt.prototype.prev = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t2 >= 0 ? n2[t2] : null;
    }, Nt.prototype.next = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t2 < n2.length ? n2[t2] : null;
    }, Nt.prototype.prevPanel = function() {
      return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
    }, Nt.prototype.nextPanel = function() {
      return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
    }, Nt.prototype.an = function() {
      return this.on ? dn.D : dn.ln;
    };
    var Ct, Wt = function(n2) {
      Dt.call(this, n2);
    }, It = function(n2) {
      Dt.call(this, n2);
    };
    function Ft(n2) {
      var t2 = p($n, n2);
      return t2.length && (n2 = t2[0]), n2;
    }
    function Vt(n2) {
      return n2 ? n2.activeSlide ? n2.activeSlide : n2 : null;
    }
    function Zt(n2) {
      var t2, e2, i2 = yt();
      return i2.autoScrolling && !i2.scrollBar ? (t2 = -n2, e2 = p(In)[0]) : (t2 = n2, e2 = window), { options: t2, element: e2 };
    }
    function Bt(n2, t2) {
      !yt().autoScrolling || yt().scrollBar || n2.self != window && g(n2, nt) ? n2.self != window && g(n2, nt) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
    }
    function Gt(n2) {
      var t2 = "transform " + yt().scrollingSpeed + "ms " + yt().easingcss3;
      return R(n2, Vn), b(n2, { "-webkit-transition": t2, transition: t2 });
    }
    function Yt(n2, t2) {
      var e2 = n2.index(), i2 = T(t2, _n);
      return e2 == i2 ? "none" : e2 > i2 ? "up" : "down";
    }
    function Ut(n2) {
      return E(n2, Vn);
    }
    function Xt(n2) {
      return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
    }
    function _t(n2, t2) {
      t2 ? Gt(St()) : Ut(St()), clearTimeout(Ct), b(St(), Xt(n2)), s.test.un = n2, Ct = setTimeout(function() {
        R(St(), Vn);
      }, 10);
    }
    function Qt(n2) {
      var t2 = Math.round(n2);
      if (yt().css3 && yt().autoScrolling && !yt().scrollBar)
        _t("translate3d(0px, -" + t2 + "px, 0px)", false);
      else if (yt().autoScrolling && !yt().scrollBar)
        b(St(), { top: -t2 + "px" }), s.test.top = -t2 + "px";
      else {
        var e2 = Zt(t2);
        Bt(e2.element, e2.options);
      }
    }
    function Jt(n2, t2) {
      t2 !== "internal" && kt("fadingEffect", "update", n2), kt("cards", "update_", n2), Tt("scrollingSpeed", n2, t2);
    }
    s.setScrollingSpeed = Jt;
    var Kt, qt = null, $t = null, ne = null;
    function te(n2, t2, e2, i2) {
      var r2, a2 = function(n3) {
        return n3.self != o && g(n3, nt) ? n3.scrollLeft : !yt().autoScrolling || yt().scrollBar ? I() : n3.offsetTop;
      }(n2), l2 = t2 - a2, u2 = false, c2 = dn.B;
      vn({ B: true }), Kt && window.cancelAnimationFrame(Kt), Kt = function(s2) {
        r2 || (r2 = s2);
        var f2 = Math.floor(s2 - r2);
        if (dn.B) {
          var d2 = t2;
          e2 && (d2 = o.fp_easings[yt().easing](f2, a2, l2, e2)), f2 <= e2 && Bt(n2, d2), f2 < e2 ? window.requestAnimationFrame(Kt) : i2 === void 0 || u2 || (i2(), vn({ B: false }), u2 = true);
        } else
          u2 || c2 || (i2(), vn({ B: false }), u2 = true);
      }, window.requestAnimationFrame(Kt);
    }
    function ee(n2) {
      return n2 && !n2.item ? new Wt(new di(n2)) : n2 ? new Wt(n2) : null;
    }
    function ie(n2) {
      return n2 ? new It(n2) : null;
    }
    function oe(n2, t2) {
      var e2 = function(n3, t3) {
        var e3 = { afterRender: function() {
          return { section: ee(pn().N), cn: ie(pn().N.activeSlide) };
        }, onLeave: function() {
          return { origin: ee(t3.items.origin), destination: ee(t3.items.destination), direction: t3.direction, trigger: pn().P };
        }, afterLoad: function() {
          return e3.onLeave();
        }, afterSlideLoad: function() {
          return { section: ee(t3.items.section), origin: ee(t3.items.origin), destination: ee(t3.items.destination), direction: t3.direction, trigger: pn().P };
        }, onSlideLeave: function() {
          return e3.afterSlideLoad();
        }, beforeLeave: function() {
          return e3.onLeave();
        }, onScrollOverflow: function() {
          return { section: ee(pn().N), cn: ie(pn().N.activeSlide), position: t3.position, direction: t3.direction };
        } };
        return e3[n3]();
      }(n2, t2);
      return _(St(), n2, e2), yt()[n2].apply(e2[Object.keys(e2)[0]], on(e2)) !== false;
    }
    function re(n2) {
      var t2 = Ft(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && typeof n3.play == "function" && n3.play();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && ae(n3), n3.onload = function() {
          n3.hasAttribute("data-autoplay") && ae(n3);
        };
      });
    }
    function ae(n2) {
      n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function le(n2) {
      var t2 = Ft(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-keepplaying") || typeof n3.pause != "function" || n3.pause();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        /youtube\.com\/embed\//.test(Z(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function ue(n2) {
      yt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ft(n2)).forEach(function(n3) {
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
    function ce() {
      var n2 = pn().N.item, t2 = pn().N.activeSlide, e2 = se(n2), i2 = String(e2);
      t2 && (i2 = i2 + "-" + se(t2.item)), i2 = i2.replace("/", "-").replace("#", "");
      var o2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      qt.className = qt.className.replace(o2, ""), E(qt, "fp-viewing-" + i2);
    }
    function se(n2) {
      if (!n2)
        return null;
      var t2 = Z(n2, "data-anchor"), e2 = T(n2);
      return t2 == null && (t2 = e2), t2;
    }
    function fe(n2, t2, e2) {
      var i2 = "";
      yt().anchors.length && !yt().lockAnchors && (n2 ? (e2 != null && (i2 = e2), t2 == null && (t2 = n2), vn({ Z: t2 }), de(i2 + "/" + t2)) : n2 != null ? (vn({ Z: t2 }), de(e2)) : de(e2)), ce();
    }
    function de(n2) {
      if (yt().recordHistory)
        location.hash = n2;
      else if (a || u)
        o.history.replaceState(void 0, void 0, "#" + n2);
      else {
        var t2 = o.location.href.split("#")[0];
        o.location.replace(t2 + "#" + n2);
      }
    }
    function ve(n2, t2, e2) {
      var i2 = t2 === "Section" ? yt().anchors[n2] : Z(e2, "data-anchor");
      return encodeURI(yt().navigationTooltips[n2] || i2 || t2 + " " + (n2 + 1));
    }
    function pe(n2) {
      V(n2), vn({ P: "horizontalNav" });
      var t2 = P(this, _n), e2 = p(tt, P(this, _n))[0], i2 = Ht(pn().D, t2).slides[T(P(this, "li"))];
      fn.R(En, { slides: e2, destination: i2.item });
    }
    var he, ge = {};
    function me(n2, t2, e2) {
      t2 !== "all" ? ge[e2][t2] = n2 : Object.keys(ge[e2]).forEach(function(t3) {
        ge[e2][t3] = n2;
      });
    }
    function we() {
      return ge;
    }
    function be() {
      var n2 = P(this, _n);
      g(this, dt) ? we().m.left && (vn({ P: "slideArrow" }), fn.R(mn, { section: n2 })) : we().m.right && (vn({ P: "slideArrow" }), fn.R(wn, { section: n2 }));
    }
    function Se(n2) {
      !yt().loopHorizontal && yt().controlArrows && (J(p(vt, n2.section), n2.slideIndex !== 0), J(p(pt, n2.section), y(n2.destiny) != null));
    }
    function ye() {
      clearTimeout(he), vn({ W: false });
    }
    function Me(n2, t2, e2) {
      var i2 = P(n2, _n), o2 = pn().D.filter(function(n3) {
        return n3.item == i2;
      })[0], r2 = o2.slides.filter(function(n3) {
        return n3.item == t2;
      })[0], a2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: r2.index(), section: i2, sectionIndex: o2.index(), anchorLink: o2.anchor, slidesNav: p(ut, i2)[0], slideAnchor: r2.anchor, prevSlide: o2.activeSlide.item, prevSlideIndex: o2.activeSlide.index(), items: { section: o2, origin: o2.activeSlide, destination: r2 }, localIsResizing: dn.I };
      a2.xMovement = Ae(a2.prevSlideIndex, a2.slideIndex), a2.direction = a2.direction ? a2.direction : a2.xMovement, a2.localIsResizing || vn({ canScroll: false }), kt("parallax", "applyHorizontal", a2), kt("cards", "apply", a2), kt("dropEffect", "apply", a2), kt("waterEffect", "apply", a2), yt().onSlideLeave && !a2.localIsResizing && a2.xMovement !== "none" && X(yt().onSlideLeave) && oe("onSlideLeave", a2) === false ? vn({ W: false }) : (Ot("dropEffect") && yt().dropEffect || (E(t2, Gn), R(F(t2), Gn)), ui(), a2.localIsResizing || (le(a2.prevSlide), ue(t2)), Se(a2), o2.isActive && !a2.localIsResizing && fe(a2.slideIndex, a2.slideAnchor, a2.anchorLink), kt("continuousHorizontal", "apply", a2), fn.R(Ln, a2), Rt() ? Oe(a2) : Te(n2, a2, true), yt().interlockedSlides && s.interlockedSlides && (Ot("continuousHorizontal") && e2 !== void 0 && e2 !== a2.xMovement || kt("interlockedSlides", "apply", a2)));
    }
    function Te(n2, t2, e2) {
      var i2, o2, r2 = t2.destinyPos;
      if (i2 = t2.slidesNav, o2 = t2.slideIndex, yt().slidesNavigation && i2 != null && (R(p(Yn, i2), Gn), E(p("a", p("li", i2)[o2]), Gn)), vn({ scrollX: Math.round(r2.left) }), yt().css3) {
        var a2 = "translate3d(-" + Math.round(r2.left) + "px, 0px, 0px)";
        s.test.sn[t2.sectionIndex] = a2, Ot("dragAndMove") && t2.dn !== void 0 || Gt(p(it, n2)), b(p(it, n2), Xt(a2)), Ot("interlockedSlides") || clearTimeout(he), he = setTimeout(function() {
          e2 && Oe(t2);
        }, yt().scrollingSpeed);
      } else
        s.test.left[t2.sectionIndex] = Math.round(r2.left), te(n2, Math.round(r2.left), yt().scrollingSpeed, function() {
          e2 && Oe(t2);
        });
    }
    function Ae(n2, t2) {
      return n2 == t2 ? "none" : n2 > t2 ? "left" : "right";
    }
    function xe() {
      clearTimeout(he);
    }
    function Oe(n2) {
      kt("continuousHorizontal", "afterSlideLoads", n2), n2.localIsResizing || (kt("parallax", "afterSlideLoads"), kt("scrollOverflowReset", "setPrevious", n2.prevSlide), kt("scrollOverflowReset", "reset"), X(yt().afterSlideLoad) && oe("afterSlideLoad", n2), vn({ canScroll: true }), re(n2.destiny), fn.R(Nn, n2)), vn({ W: false }), kt("interlockedSlides", "interlockedSlides", n2);
    }
    function ke(n2, t2) {
      Jt(0, "internal"), t2 !== void 0 && vn({ I: true }), Me(P(n2, tt), n2), t2 !== void 0 && vn({ I: false }), Jt(Mt().scrollingSpeed, "internal");
    }
    function Ee(n2, t2) {
      Tt("recordHistory", n2, t2);
    }
    function Re(n2, t2) {
      n2 || Qt(0), Tt("autoScrolling", n2, t2);
      var e2 = pn().N.item;
      if (yt().autoScrolling && !yt().scrollBar)
        b(ne, { overflow: "hidden", height: "100%" }), R(qt, "fp-scrollable"), Ee(Mt().recordHistory, "internal"), b(St(), { "-ms-touch-action": "none", "touch-action": "none" }), e2 != null && Qt(e2.offsetTop);
      else if (b(ne, { overflow: "visible", height: "initial" }), E(qt, "fp-scrollable"), Ee(!!yt().autoScrolling && Mt().recordHistory, "internal"), b(St(), { "-ms-touch-action": "", "touch-action": "" }), Ut(St()), e2 != null) {
        var i2 = Zt(e2.offsetTop);
        i2.element.scrollTo(0, i2.options);
      }
      _(St(), "setAutoScrolling", n2);
    }
    function je() {
      for (var n2 = p($n), t2 = 0; t2 < n2.length; t2++)
        ke(n2[t2], "internal");
    }
    function Le() {
      var n2 = p(".fp-auto-height")[0] || Ke() && p(".fp-auto-height-responsive")[0];
      yt().lazyLoading && n2 && p(".fp-section:not(.active)").forEach(function(n3) {
        var t2, e2, i2, o2, r2;
        e2 = (t2 = n3.getBoundingClientRect()).top, i2 = t2.bottom, o2 = e2 + 2 < dn.K && e2 > 0, r2 = i2 > 2 && i2 < dn.K, (o2 || r2) && ue(n3);
      });
    }
    function ze() {
      _(S(this), "click");
    }
    function De() {
      q(p(Jn));
      var n2 = r.createElement("div");
      n2.setAttribute("id", "fp-nav");
      var t2 = r.createElement("ul");
      n2.appendChild(t2), j(n2, qt);
      var e2 = p(Jn)[0];
      E(e2, "fp-" + yt().navigationPosition), yt().showActiveTooltip && E(e2, "fp-show-active");
      for (var i2 = "", o2 = 0; o2 < pn().D.length; o2++) {
        var a2 = pn().D[o2], l2 = "";
        yt().anchors.length && (l2 = a2.anchor), i2 += '<li><a href="#' + encodeURI(l2) + '"><span class="fp-sr-only">' + ve(a2.index(), "Section") + "</span><span></span></a>";
        var u2 = yt().navigationTooltips[a2.index()];
        u2 !== void 0 && u2 !== "" && (i2 += '<div class="fp-tooltip fp-' + yt().navigationPosition + '">' + u2 + "</div>"), i2 += "</li>";
      }
      p("ul", e2)[0].innerHTML = i2;
      var c2 = p("li", p(Jn)[0])[pn().N.index()];
      E(p("a", c2), Gn);
    }
    function Ne(n2) {
      n2.preventDefault && V(n2), vn({ P: "verticalNav" });
      var t2 = T(P(this, "#fp-nav li"));
      fn.R(kn, { destination: pn().D[t2] });
    }
    function Pe(n2, t2) {
      var e2;
      e2 = n2, yt().menu && yt().menu.length && p(yt().menu).forEach(function(n3) {
        n3 != null && (R(p(Yn, n3), Gn), E(p('[data-menuanchor="' + e2 + '"]', n3), Gn));
      }), function(n3, t3) {
        var e3 = p(Jn)[0];
        yt().navigation && e3 != null && e3.style.display !== "none" && (R(p(Yn, e3), Gn), E(n3 ? p('a[href="#' + n3 + '"]', e3) : p("a", p("li", e3)[t3]), Gn));
      }(n2, t2);
    }
    ge.m = { up: true, down: true, left: true, right: true }, ge.k = h({}, ge.m), fn.O(gn, function(n2) {
      var t2 = n2.target;
      (Q(t2, ft) || P(t2, ft)) && be.call(t2, n2);
    }), s.landscapeScroll = Me, fn.O(Sn, function() {
      fn.O(jn, ye);
    }), s.setRecordHistory = Ee, s.setAutoScrolling = Re, s.test.setAutoScrolling = Re, new Date().getTime();
    var He, Ce, We, Ie, Fe, Ve, Ze = (Ce = true, We = new Date().getTime(), Ie = !o.fullpage_api, function(n2, t2) {
      var e2 = new Date().getTime(), i2 = n2 === "wheel" ? yt().scrollingSpeed : 100;
      return Ce = Ie || e2 - We >= i2, Ie = !o.fullpage_api, Ce && (He = t2(), We = e2), He === void 0 || He;
    });
    function Be(n2, t2) {
      if (X(yt().beforeLeave))
        return Ze(pn().P, function() {
          return oe(n2, t2);
        });
    }
    function Ge(n2, t2, e2) {
      var i2 = n2.item;
      if (i2 != null) {
        var o2, r2, a2 = { element: i2, callback: t2, isMovementUp: e2, dtop: Ye(i2), yMovement: Yt(pn().N, i2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: pn().N.index() + 1, localIsResizing: dn.I, items: { origin: pn().N, destination: n2 }, direction: null };
        if (!(pn().N.item == i2 && !dn.I || yt().scrollBar && I() === a2.dtop && !g(i2, "fp-auto-height"))) {
          if (a2.activeSlide != null && (o2 = Z(a2.activeSlide, "data-anchor"), r2 = T(a2.activeSlide, null)), !a2.localIsResizing) {
            var l2 = a2.yMovement;
            if (e2 !== void 0 && (l2 = e2 ? "up" : "down"), a2.direction = l2, xt("dropEffect") && s.dropEffect.onLeave_(a2), xt("waterEffect") && s.waterEffect.onLeave_(a2), X(yt().beforeLeave) && Be("beforeLeave", a2) === false)
              return;
            if (X(yt().onLeave) && !oe("onLeave", a2))
              return;
          }
          kt("parallax", "apply", a2), kt("cards", "apply", a2), kt("dropEffect", "apply", a2), kt("waterEffect", "apply", a2), yt().autoScrolling && yt().continuousVertical && a2.isMovementUp !== void 0 && (!a2.isMovementUp && a2.yMovement == "up" || a2.isMovementUp && a2.yMovement == "down") && (a2 = function(n3) {
            vn({ q: true });
            var t3 = pn().N.item;
            return n3.isMovementUp ? C(t3, tn(t3, _n)) : H(t3, en(t3, _n).reverse()), Qt(pn().N.item.offsetTop), je(), n3.vn = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = Yt(pn().N, n3.element), n3.leavingSection = n3.items.origin.index() + 1, n3.sectionIndex = n3.items.destination.index(), _(St(), "onContinuousVertical", n3), n3;
          }(a2)), kt("scrollOverflowReset", "setPrevious", pn().N.item), a2.localIsResizing || le(pn().N.item), Ot("dropEffect") && yt().dropEffect || (E(i2, Gn), R(F(i2), Gn)), ui(), ue(i2), vn({ canScroll: s.test.pn }), fe(r2, o2, a2.anchorLink), fn.R(zn, a2), function(n3) {
            var t3 = yt().scrollingSpeed < 700, e3 = t3 ? 700 : yt().scrollingSpeed;
            if (vn({ G: "none", scrollY: Math.round(n3.dtop) }), fn.R(jn), yt().css3 && yt().autoScrolling && !yt().scrollBar)
              _t("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), Ot("waterEffect") && je(), yt().scrollingSpeed ? (clearTimeout(Fe), Fe = setTimeout(function() {
                Ue(n3), vn({ canScroll: !t3 || s.test.pn });
              }, yt().scrollingSpeed)) : Ue(n3);
            else {
              var i3 = Zt(n3.dtop);
              s.test.top = -n3.dtop + "px", clearTimeout(Fe), te(i3.element, i3.options, yt().scrollingSpeed, function() {
                yt().scrollBar ? Fe = setTimeout(function() {
                  Ue(n3);
                }, 30) : (Ue(n3), vn({ canScroll: !t3 || s.test.pn }));
              });
            }
            t3 && (clearTimeout(Ve), Ve = setTimeout(function() {
              vn({ canScroll: true });
            }, e3));
          }(a2), vn({ V: a2.anchorLink }), Pe(a2.anchorLink, function(n3) {
            return n3.vn != null ? n3.isMovementUp ? dn.j - 1 : 0 : n3.sectionIndex;
          }(a2));
        }
      }
    }
    function Ye(n2) {
      var t2 = n2.offsetHeight, e2 = n2.offsetTop, i2 = e2, o2 = Ot("dragAndMove") && kt("dragAndMove", "isGrabbing") ? kt("dragAndMove", "isScrollingDown") : e2 > dn.J, r2 = i2 - m() + t2, a2 = yt().bigSectionsDestination;
      return t2 > m() ? (o2 || a2) && a2 !== "bottom" || (i2 = r2) : (o2 || dn.I && y(n2) == null) && (i2 = r2), Ot("offsetSections") && (i2 = s.offsetSections.getSectionPosition_(o2, i2, n2)), vn({ J: i2 }), i2;
    }
    function Ue(n2) {
      vn({ H: false }), function(n3) {
        n3.vn != null && (n3.isMovementUp ? C(p(_n)[0], n3.vn) : H(p(_n)[pn().D.length - 1], n3.vn), Qt(pn().N.item.offsetTop), function() {
          for (var n4 = p($n), t2 = 0; t2 < n4.length; t2++)
            ke(n4[t2], "internal");
        }(), n3.sectionIndex = n3.items.destination.index(), n3.leavingSection = n3.items.origin.index() + 1, vn({ q: false }));
      }(n2), X(yt().afterLoad) && !n2.localIsResizing && oe("afterLoad", n2), kt("parallax", "afterLoad"), kt("waterEffect", "afterLoad"), kt("dropEffect", "afterLoad"), kt("scrollOverflowReset", "reset"), kt("resetSliders", "apply", n2), ui(), n2.localIsResizing || re(n2.element), E(n2.element, Un), R(F(n2.element), Un), Le(), vn({ canScroll: true }), fn.R(Dn, n2), X(n2.callback) && n2.callback();
    }
    function Xe(n2, t2) {
      Tt("fitToSection", n2, t2);
    }
    function _e() {
      dn.canScroll && (vn({ I: true }), Ge(dn.N), vn({ I: false }));
    }
    function Qe() {
      var n2 = yt().responsive || yt().responsiveWidth, t2 = yt().responsiveHeight, e2 = n2 && o.innerWidth < n2, i2 = t2 && o.innerHeight < t2;
      n2 && t2 ? Je(e2 || i2) : n2 ? Je(e2) : t2 && Je(i2);
    }
    function Je(n2) {
      var t2 = Ke();
      n2 ? t2 || (Re(false, "internal"), Xe(false, "internal"), x(p(Jn)), E(qt, Fn), X(yt().afterResponsive) && yt().afterResponsive.call(St(), n2), kt("responsiveSlides", "toSections"), _(St(), "afterResponsive", n2)) : t2 && (Re(Mt().autoScrolling, "internal"), Xe(Mt().autoScrolling, "internal"), O(p(Jn)), R(qt, Fn), X(yt().afterResponsive) && yt().afterResponsive.call(St(), n2), kt("responsiveSlides", "toSlides"), _(St(), "afterResponsive", n2));
    }
    function Ke() {
      return g(qt, Fn);
    }
    function qe(n2) {
      yt().verticalCentered && (!yt().scrollOverflow && ri.hn(n2.item) || ri.gn(n2) || g(n2.item, ot) || E(n2.item, ot));
    }
    s.moveTo = moveTo, s.getScrollY = function() {
      return dn.scrollY;
    }, fn.O(yn, function() {
      clearTimeout(Fe), clearTimeout(Ve);
    }), s.setFitToSection = Xe, s.fitToSection = _e, s.setResponsive = Je;
    var $e, ni = null;
    function ti(n2) {
      var t2 = n2.item, e2 = n2.mn.length, i2 = n2.index();
      !pn().N && n2.isVisible && (E(t2, Gn), ui(), ni = pn().N.item), Ot("offsetSections") && b(t2, { height: jt(t2) }), yt().paddingTop && b(t2, { "padding-top": yt().paddingTop }), yt().paddingBottom && b(t2, { "padding-bottom": yt().paddingBottom }), yt().sectionsColor[i2] !== void 0 && b(t2, { "background-color": yt().sectionsColor[i2] }), yt().anchors[i2] !== void 0 && t2.setAttribute("data-anchor", n2.anchor), e2 || qe(n2);
    }
    function ei() {
      yt().scrollOverflow && !yt().scrollBar && (ri.wn(), ri.bn());
    }
    function ii() {
      Y("keyup", ri.Sn);
    }
    s.getActiveSection = function() {
      return pn().N;
    }, fn.O(Sn, function() {
      fn.O(hn, ei), fn.O(zn, ri.onLeave), fn.O(Ln, ri.onLeave), fn.O(Nn, ri.afterLoad), fn.O(Dn, ri.afterLoad), fn.O(yn, ii), B("keyup", ri.Sn);
    });
    var oi, ri = { yn: null, Mn: true, Tn: true, An: null, xn: null, On: function(n2) {
      if (!dn.canScroll)
        return V(n2), false;
    }, kn: function(n2) {
      if (!ri.Tn)
        return V(n2), false;
    }, Sn: function() {
      ri.Mn = dn.canScroll;
    }, onLeave: function() {
      clearTimeout($e), ri.Tn = false;
    }, afterLoad: function() {
      ri.Tn = false, clearTimeout($e), $e = setTimeout(function() {
        ri.Mn = dn.canScroll;
      }, 200);
    }, En: function() {
      r.activeElement === this.yn && (this.yn.blur(), ri.Tn = false);
    }, bn: function() {
      if (yt().scrollOverflow && ri.Mn) {
        ri.En();
        var n2 = ri.Rn(pn().N.item);
        !n2 || a || u || (this.yn = n2, requestAnimationFrame(function() {
          n2.focus(), ri.Tn = true;
        })), ri.Mn = false;
      }
    }, wn: function() {
      yt().scrollOverflowMacStyle && !l && E(qt, "fp-scroll-mac"), pn().ln.forEach(function(n2) {
        if (!(n2.slides && n2.slides.length || g(n2.item, "fp-auto-height-responsive") && Ke())) {
          var t2, e2 = Ft(n2.item), i2 = ri.hn(n2.item), o2 = (t2 = n2).on ? t2 : t2.parent;
          if (c) {
            var r2 = i2 ? "addClass" : "removeClass";
            cn[r2](o2.item, lt), cn[r2](n2.item, lt);
          } else
            E(o2.item, lt), E(n2.item, lt);
          n2.en || (ri.jn(e2), ri.Ln(e2)), n2.en = true;
        }
      });
    }, Ln: function(n2) {
      ri.Rn(n2).addEventListener("scroll", ri.zn), n2.addEventListener("wheel", ri.On, { passive: false }), n2.addEventListener("keydown", ri.kn, { passive: false });
    }, jn: function(n2) {
      var t2 = document.createElement("div");
      t2.className = rt, D(n2, t2), t2.setAttribute("tabindex", "-1");
    }, Dn: function(n2) {
      var t2 = p(at, n2)[0];
      t2 && (N(t2), n2.removeAttribute("tabindex"));
    }, Rn: function(n2) {
      var t2 = Ft(n2);
      return p(at, t2)[0] || t2;
    }, en: function(n2) {
      return g(n2, rt) || p(at, n2)[0] != null;
    }, gn: function(n2) {
      return n2.on && n2.activeSlide ? n2.activeSlide.en : n2.en;
    }, hn: function(n2) {
      return ri.Rn(n2).scrollHeight > o.innerHeight;
    }, Nn: function(n2, t2) {
      if (!dn.canScroll)
        return false;
      if (yt().scrollBar)
        return true;
      var e2 = ri.Rn(t2);
      if (!yt().scrollOverflow || !g(e2, rt) || g(Ft(t2), "fp-noscroll"))
        return true;
      var i2 = c ? 1 : 0, o2 = e2.scrollTop, r2 = n2 === "up" && o2 <= 0, a2 = n2 === "down" && e2.scrollHeight <= Math.ceil(e2.offsetHeight + o2) + i2, l2 = r2 || a2;
      return l2 || (this.An = new Date().getTime()), l2;
    }, Pn: function() {
      this.xn = new Date().getTime();
      var n2 = this.xn - ri.An, t2 = (a || u) && dn.U, e2 = dn.X && n2 > 600;
      return t2 && n2 > 400 || e2;
    }, zn: (oi = 0, function(n2) {
      var t2 = n2.target.scrollTop, e2 = dn.G !== "none" ? dn.G : oi < t2 ? "down" : "up";
      oi = t2, X(yt().onScrollOverflow) && oe("onScrollOverflow", { position: t2, direction: e2 }), g(n2.target, rt) && dn.canScroll && ri.Nn(e2, n2.target) && ri.Pn() && ri.hn(pn().N.item) && fn.R(Tn, { direction: e2 });
    }) }, ai = null, li = null;
    function ui() {
      dn.N = null, dn.D.map(function(n2) {
        var t2 = g(n2.item, Gn);
        n2.isActive = t2, n2.en = ri.en(n2.item), t2 && (dn.N = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
          var e2 = g(t3.item, Gn);
          t3.en = ri.en(n2.item), t3.isActive = e2, e2 && (n2.activeSlide = t3);
        }));
      }), function() {
        var n2 = dn.N, t2 = !!dn.N && dn.N.slides.length, e2 = dn.N ? dn.N.activeSlide : null;
        if (!n2 && dn.D.length && !pn().H) {
          if (ai) {
            var i2 = fi(ai, dn.D);
            i2 && (dn.N = i2, dn.N.isActive = true, E(dn.N.item, Gn)), dn.N && Qt(dn.N.item.offsetTop);
          }
          if (t2 && !e2 && li) {
            var o2 = fi(li, dn.N.slides);
            o2 && (dn.N.activeSlide = o2, dn.N.activeSlide.isActive = true, E(dn.N.activeSlide.item, Gn)), dn.N.activeSlide && ke(dn.N.activeSlide.item, "internal");
          }
        }
      }(), _(St(), "onUpdateStateDone");
    }
    function ci() {
      var n2 = p(yt().sectionSelector + ", " + _n, St()), t2 = v(n2), e2 = Array.from(n2).map(function(n3) {
        return new di(n3);
      }), i2 = e2.filter(function(n3) {
        return n3.isVisible;
      }), o2 = i2.reduce(function(n3, t3) {
        return n3.concat(t3.slides);
      }, []);
      ai = si(dn.N), li = si(dn.N ? dn.N.activeSlide : null), dn.j = t2.length, dn.L = i2.reduce(function(n3, t3) {
        return n3 + t3.slides.length;
      }, 0), dn.D = i2, dn.rn = e2, dn.slides = o2, dn.ln = dn.D.concat(dn.slides);
    }
    function si(n2) {
      if (!n2)
        return null;
      var t2 = n2 ? n2.item : null, e2 = n2.on ? dn.rn : dn.N.Hn;
      if (t2) {
        var i2 = Ht(e2, t2);
        return i2 ? i2.index() : null;
      }
      return null;
    }
    function fi(n2, t2) {
      var e2, i2 = n2 - 1, o2 = n2;
      do {
        if (e2 = t2[i2] || t2[o2])
          break;
        i2 -= 1, o2 += 1;
      } while (i2 >= 0 || o2 < t2.length);
      return e2;
    }
    var di = function(n2) {
      var t2 = this;
      [].push.call(arguments, yt().sectionSelector), Nt.apply(this, arguments), this.mn = p(yt().slideSelector, n2), this.Hn = Array.from(this.mn).map(function(n3) {
        return new pi(n3, t2);
      }), this.slides = this.Hn.filter(function(n3) {
        return n3.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
        return n3.isActive;
      })[0] || this.slides[0] : null;
    };
    di.prototype = Nt.prototype, di.prototype.constructor = di;
    var vi, pi = function(n2, t2) {
      this.parent = t2, Nt.call(this, n2, yt().slideSelector);
    };
    function hi() {
      E(p(yt().sectionSelector, St()), Xn), E(p(yt().slideSelector, St()), Kn);
    }
    function gi(n2) {
      var t2 = n2.slides.length, e2 = n2.mn, i2 = n2.slides, o2 = 100 * t2, a2 = 100 / t2;
      if (!p(tt, n2.item)[0]) {
        var l2 = r.createElement("div");
        l2.className = nt, z(e2, l2);
        var u2 = r.createElement("div");
        u2.className = et, z(e2, u2);
      }
      b(p(it, n2.item), { width: o2 + "%" }), t2 > 1 && (yt().controlArrows && function(n3) {
        var t3 = n3.item, e3 = [K(yt().controlArrowsHTML[0]), K(yt().controlArrowsHTML[1])];
        H(p(tt, t3)[0], e3), E(e3, st), E(e3[0], dt), E(e3[1], "fp-next"), yt().controlArrowColor !== "#fff" && (b(p(pt, t3), { "border-color": "transparent transparent transparent " + yt().controlArrowColor }), b(p(vt, t3), { "border-color": "transparent " + yt().controlArrowColor + " transparent transparent" })), yt().loopHorizontal || x(p(vt, t3));
      }(n2), yt().slidesNavigation && function(n3) {
        var t3 = n3.item, e3 = n3.slides.length;
        j(K('<div class="fp-slidesNav"><ul></ul></div>'), t3);
        var i3 = p(ut, t3)[0];
        E(i3, "fp-" + yt().slidesNavPosition);
        for (var o3 = 0; o3 < e3; o3++)
          j(K('<li><a href="#"><span class="fp-sr-only">' + ve(o3, "Slide", p(qn, t3)[o3]) + "</span><span></span></a></li>"), p("ul", i3)[0]);
        b(i3, { "margin-left": "-" + i3.innerWidth / 2 + "px" });
        var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
        E(p("a", p("li", i3)[r2]), Gn);
      }(n2)), i2.forEach(function(n3) {
        b(n3.item, { width: a2 + "%" }), yt().verticalCentered && qe(n3);
      });
      var c2 = Ot("responsiveSlides") ? null : n2.activeSlide || null;
      c2 != null && dn.N && (dn.N.index() !== 0 || dn.N.index() === 0 && c2.index() !== 0) ? (ke(c2.item, "internal"), E(c2.item, "fp-initial")) : E(e2[0], Gn);
    }
    pi.prototype = Nt.prototype, pi.prototype.constructor = di;
    var mi = { attributes: false, subtree: true, childList: true, characterData: true };
    function wi() {
      return kt("responsiveSlides", "isResponsiveSlidesChanging") || v(p(yt().slideSelector, St())).length !== pn().L;
    }
    function bi(n2) {
      var t2 = wi();
      (wi() || kt("responsiveSlides", "isResponsiveSlidesChanging") || v(p(yt().sectionSelector, St())).length !== pn().j) && !dn.q && (yt().observer && vi && vi.disconnect(), ci(), ui(), yt().anchors = [], q(p(Jn)), kt("responsiveSlides", "isResponsiveSlidesChanging") || hi(), At(), yt().navigation && De(), t2 && (q(p(ut)), q(p(ft))), pn().D.forEach(function(n3) {
        n3.slides.length ? t2 && gi(n3) : ti(n3);
      })), yt().observer && vi && p(In)[0] && vi.observe(p(In)[0], mi);
    }
    fn.O(Sn, function() {
      var n2, t2, e2;
      yt().observer && "MutationObserver" in window && p(In)[0] && (n2 = p(In)[0], t2 = mi, (e2 = new MutationObserver(bi)).observe(n2, t2), vi = e2), fn.O(Mn, bi);
    }), s.render = bi;
    var Si = function() {
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
    function yi() {
      return !!Si() && { passive: false };
    }
    var Mi, Ti, Ai, xi, Oi = (Ai = new Date().getTime(), xi = [], { Cn: function(n2) {
      var t2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), i2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0;
      Mi = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !i2;
      var r2 = new Date().getTime();
      Ti = e2 < 0 ? "down" : "up", xi.length > 149 && xi.shift(), xi.push(Math.abs(t2));
      var a2 = r2 - Ai;
      Ai = r2, a2 > 200 && (xi = []);
    }, Wn: function() {
      var n2 = an(xi, 10) >= an(xi, 70);
      return !!xi.length && n2 && Mi;
    }, In: function() {
      return Ti;
    } });
    function ki() {
      var n2 = yt().css3 ? I() + m() : rn(pn().D).item.offsetTop + rn(pn().D).item.offsetHeight, t2 = Zt(n2);
      s.test.top = -n2 + "px", vn({ canScroll: false }), te(t2.element, t2.options, yt().scrollingSpeed, function() {
        setTimeout(function() {
          vn({ H: true }), vn({ canScroll: true });
        }, 30);
      });
    }
    function Ei() {
      St().getBoundingClientRect().bottom >= 0 && Ri();
    }
    function Ri() {
      var n2 = Zt(rn(pn().D).item.offsetTop);
      vn({ canScroll: false }), te(n2.element, n2.options, yt().scrollingSpeed, function() {
        vn({ canScroll: true }), vn({ H: false }), vn({ Fn: false });
      });
    }
    var ji, Li, zi, Di = (ji = false, Li = {}, zi = {}, function(n2, t2, e2) {
      switch (n2) {
        case "set":
          Li[t2] = new Date().getTime(), zi[t2] = e2;
          break;
        case "isNewKeyframe":
          var i2 = new Date().getTime();
          ji = i2 - Li[t2] > zi[t2];
      }
      return ji;
    });
    function Ni() {
      var n2 = pn().N.next();
      n2 || !yt().loopBottom && !yt().continuousVertical || (n2 = pn().D[0]), n2 != null ? Ge(n2, null, false) : St().scrollHeight < qt.scrollHeight && fn.R(Rn);
    }
    function Pi() {
      var n2 = pn().N.prev();
      n2 || !yt().loopTop && !yt().continuousVertical || (n2 = rn(pn().D)), n2 != null && Ge(n2, null, true);
    }
    s.moveSectionDown = Ni, s.moveSectionUp = Pi;
    var Hi = 0;
    function Ci(n2) {
      yt().autoScrolling && (dn.canScroll && (n2.pageY < Hi && we().m.up ? Pi() : n2.pageY > Hi && we().m.down && Ni()), Hi = n2.pageY);
    }
    function Wi(n2) {
      if (we().m[n2]) {
        var t2 = n2 === "down" ? Ni : Pi;
        Ot("scrollHorizontally") && (t2 = kt("scrollHorizontally", "getScrollSection", { type: n2, scrollSection: t2 })), yt().scrollOverflow && ri.gn(pn().N) ? ri.Nn(n2, pn().N.item) && ri.Pn() && t2() : t2();
      }
    }
    var Ii, Fi, Vi, Zi = 0, Bi = 0, Gi = 0, Yi = 0, Ui = $i(), Xi = { Vn: "ontouchmove" in window ? "touchmove" : Ui ? Ui.move : null, Zn: "ontouchstart" in window ? "touchstart" : Ui ? Ui.down : null };
    function _i(n2) {
      var t2 = P(n2.target, _n) || pn().N.item, e2 = ri.gn(pn().N);
      if (Qi(n2)) {
        vn({ U: true, X: false }), yt().autoScrolling && (e2 && !dn.canScroll || yt().scrollBar) && V(n2);
        var i2 = qi(n2);
        Gi = i2.y, Yi = i2.x;
        var r2 = Math.abs(Zi - Gi) > o.innerHeight / 100 * yt().touchSensitivity, a2 = Math.abs(Bi - Yi) > w() / 100 * yt().touchSensitivity, l2 = p(tt, t2).length && Math.abs(Bi - Yi) > Math.abs(Zi - Gi), u2 = Zi > Gi ? "down" : "up";
        vn({ G: l2 ? Bi > Yi ? "right" : "left" : u2 }), l2 ? !dn.W && a2 && (Bi > Yi ? we().m.right && fn.R(wn, { section: t2 }) : we().m.left && fn.R(mn, { section: t2 })) : yt().autoScrolling && dn.canScroll && r2 && Wi(u2);
      }
    }
    function Qi(n2) {
      return n2.pointerType === void 0 || n2.pointerType != "mouse";
    }
    function Ji(n2) {
      if (yt().fitToSection && vn({ B: false }), Qi(n2)) {
        var t2 = qi(n2);
        Zi = t2.y, Bi = t2.x;
      }
      G("touchend", Ki);
    }
    function Ki() {
      U("touchend", Ki), vn({ U: false });
    }
    function qi(n2) {
      var t2 = {};
      return t2.y = n2.pageY !== void 0 && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = n2.pageX !== void 0 && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, u && Qi(n2) && yt().scrollBar && n2.touches !== void 0 && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
    }
    function $i() {
      var n2;
      return o.PointerEvent && (n2 = { down: "pointerdown", move: "pointermove" }), n2;
    }
    function no(n2) {
      yt().autoScrolling && Qi(n2) && we().m.up && (dn.canScroll || V(n2));
    }
    function to(n2, t2) {
      var e2 = t2 == null ? pn().N.item : t2, i2 = Ht(dn.D, e2), o2 = p(tt, e2)[0];
      if (!(o2 == null || Et() || dn.W || i2.slides.length < 2)) {
        var r2 = i2.activeSlide, a2 = n2 === "left" ? r2.prev() : r2.next();
        if (!a2) {
          if (!yt().loopHorizontal)
            return;
          a2 = n2 === "left" ? rn(i2.slides) : i2.slides[0];
        }
        vn({ W: !s.test.pn }), Me(o2, a2.item, n2);
      }
    }
    function eo(n2) {
      to("left", n2);
    }
    function io(n2) {
      to("right", n2);
    }
    function oo(n2) {
      var t2 = pn().D.filter(function(t3) {
        return t3.anchor === n2;
      })[0];
      if (!t2) {
        var e2 = n2 !== void 0 ? n2 - 1 : 0;
        t2 = pn().D[e2];
      }
      return t2;
    }
    function ro(n2) {
      n2 != null && Me(P(n2, tt), n2);
    }
    function ao(n2, t2) {
      var e2 = oo(n2);
      if (e2 != null) {
        var i2 = function(n3, t3) {
          var e3 = t3.slides.filter(function(t4) {
            return t4.anchor === n3;
          })[0];
          return e3 == null && (n3 = n3 !== void 0 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
        }(t2, e2);
        e2.anchor === dn.V || g(e2.item, Gn) ? ro(i2) : Ge(e2, function() {
          ro(i2);
        });
      }
    }
    function lo(n2, t2) {
      var e2 = oo(n2);
      t2 !== void 0 ? ao(n2, t2) : e2 != null && Ge(e2);
    }
    function uo() {
      clearTimeout(Fi), Y("keydown", co), Y("keyup", so);
    }
    function co(n2) {
      clearTimeout(Fi);
      var t2, e2 = n2.keyCode, i2 = [37, 39].indexOf(e2) > -1, o2 = yt().autoScrolling || yt().fitToSection || i2;
      e2 === 9 ? function(n3) {
        var t3 = n3.shiftKey, e3 = r.activeElement, i3 = go(Ft(pn().N.item));
        function o3(n4) {
          return V(n4), i3[0] ? i3[0].focus() : null;
        }
        if (!function(n4) {
          var t4 = go(r), e4 = t4.indexOf(r.activeElement), i4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], o4 = P(i4, qn), a3 = P(i4, _n);
          return !o4 && !a3;
        }(n3)) {
          e3 ? P(e3, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (e3 = o3(n3)) : o3(n3);
          var a2 = e3 == i3[0], l2 = e3 == i3[i3.length - 1], u2 = t3 && a2;
          if (u2 || !t3 && l2) {
            V(n3);
            var c2 = function(n4) {
              var t4, e4 = n4 ? "prevPanel" : "nextPanel", i4 = [], o4 = Vt((dn.N && dn.N.activeSlide ? dn.N.activeSlide : dn.N)[e4]());
              do {
                (i4 = go(o4.item)).length && (t4 = { Bn: o4, Gn: i4[n4 ? i4.length - 1 : 0] }), o4 = Vt(o4[e4]());
              } while (o4 && i4.length === 0);
              return t4;
            }(u2), s2 = c2 ? c2.Bn : null;
            if (s2) {
              var f2 = s2.on ? s2 : s2.parent;
              fn.R(An, { Yn: f2.index() + 1, slideAnchor: s2.on ? 0 : s2.index() }), Vi = c2.Gn, V(n3);
            }
          }
        }
      }(n2) : Q(t2 = r.activeElement, "textarea") || Q(t2, "input") || Q(t2, "select") || Z(t2, "contentEditable") == "true" || Z(t2, "contentEditable") == "" || !yt().keyboardScrolling || !o2 || (Ii = n2.ctrlKey, Fi = setTimeout(function() {
        !function(n3) {
          var t3 = n3.shiftKey, e3 = r.activeElement, i3 = Q(e3, "video") || Q(e3, "audio"), o3 = ri.Nn("up", pn().N.item), a2 = ri.Nn("down", pn().N.item), l2 = [37, 39].indexOf(n3.keyCode) > -1;
          if (function(n4) {
            (function(n5) {
              return [40, 38, 32, 33, 34].indexOf(n5.keyCode) > -1 && !dn.H;
            })(n4) && !P(n4.target, at) && n4.preventDefault();
          }(n3), dn.canScroll || l2)
            switch (vn({ P: "keydown" }), n3.keyCode) {
              case 38:
              case 33:
                we().k.up && o3 ? dn.H ? fn.R(xn, { e: n3 }) : Pi() : ri.bn();
                break;
              case 32:
                if (t3 && we().k.up && !i3 && o3) {
                  Pi();
                  break;
                }
              case 40:
              case 34:
                if (we().k.down && a2) {
                  if (dn.H)
                    return;
                  n3.keyCode === 32 && i3 || Ni();
                } else
                  ri.bn();
                break;
              case 36:
                we().k.up && lo(1);
                break;
              case 35:
                we().k.down && lo(pn().D.length);
                break;
              case 37:
                we().k.left && eo();
                break;
              case 39:
                we().k.right && io();
            }
        }(n2);
      }, 0));
    }
    function so(n2) {
      dn._ && (Ii = n2.ctrlKey);
    }
    function fo() {
      vn({ _: false }), Ii = false;
    }
    function vo(n2) {
      ho();
    }
    function po(n2) {
      P(Vi, qn) && !P(Vi, $n) || ho();
    }
    function ho() {
      Vi && (Vi.focus(), Vi = null);
    }
    function go(n2) {
      return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
        return Z(n3, "tabindex") !== "-1" && n3.offsetParent !== null;
      });
    }
    s.moveSlideLeft = eo, s.moveSlideRight = io, s.moveTo = lo, fn.O(Sn, function() {
      G("blur", fo), B("keydown", co), B("keyup", so), fn.O(yn, uo), fn.O(Nn, vo), fn.O(Dn, po);
    });
    var mo = new Date().getTime(), wo = [];
    function bo(n2) {
      n2 ? (function() {
        var n3, t2 = "";
        o.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
        var e2 = "onwheel" in r.createElement("div") ? "wheel" : r.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", i2 = yi();
        e2 == "DOMMouseScroll" ? r[n3](t2 + "MozMousePixelScroll", So, i2) : r[n3](t2 + e2, So, i2);
      }(), St().addEventListener("mousedown", yo), St().addEventListener("mouseup", Mo)) : (r.addEventListener ? (Y("mousewheel", So, false), Y("wheel", So, false), Y("MozMousePixelScroll", So, false)) : r.detachEvent("onmousewheel", So), St().removeEventListener("mousedown", yo), St().removeEventListener("mouseup", Mo));
    }
    function So(n2) {
      var t2 = new Date().getTime(), e2 = g(p(".fp-completely")[0], "fp-normal-scroll"), i2 = function(n3, t3) {
        new Date().getTime();
        var e3 = pn().H && n3.getBoundingClientRect().bottom >= 0 && Oi.In() === "up", i3 = pn().Fn;
        if (i3)
          return V(t3), false;
        if (pn().H) {
          if (e3) {
            var o2;
            if (!(i3 || Di("isNewKeyframe", "beyondFullpage") && Oi.Wn()))
              return (o2 = Zt(rn(pn().D).item.offsetTop + rn(pn().D).item.offsetHeight)).element.scrollTo(0, o2.options), vn({ Fn: false }), V(t3), false;
            if (Oi.Wn())
              return e3 = false, vn({ Fn: true }), vn({ P: "wheel" }), Ri(), V(t3), false;
          } else
            Di("set", "beyondFullpage", 1e3);
          if (!i3 && !e3)
            return true;
        }
      }(St(), n2);
      if (dn.X || vn({ U: false, X: true, G: "none" }), !we().m.down && !we().m.up)
        return V(n2), false;
      if (i2)
        return true;
      if (i2 === false)
        return V(n2), false;
      if (yt().autoScrolling && !Ii && !e2) {
        var r2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), l2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0, u2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !l2, c2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
        wo.length > 149 && wo.shift(), wo.push(Math.abs(r2)), yt().scrollBar && V(n2);
        var s2 = t2 - mo;
        return mo = t2, s2 > 200 && (wo = []), vn({ Y: c2 }), dn.canScroll && !Et() && an(wo, 10) >= an(wo, 70) && u2 && (vn({ P: "wheel" }), Wi(a2 < 0 ? "down" : "up")), false;
      }
      yt().fitToSection && vn({ B: false });
    }
    function yo(n2) {
      var t2;
      n2.which == 2 && (t2 = n2.pageY, Hi = t2, St().addEventListener("mousemove", Ci));
    }
    function Mo(n2) {
      n2.which == 2 && St().removeEventListener("mousemove", Ci);
    }
    function To(n2) {
      n2 ? (bo(true), function() {
        if (Xi.Vn && (a || u) && (!Ot("dragAndMove") || yt().dragAndMove === "mouseonly")) {
          yt().autoScrolling && (qt.removeEventListener(Xi.Vn, no, { passive: false }), qt.addEventListener(Xi.Vn, no, { passive: false }));
          var n3 = yt().touchWrapper;
          n3.removeEventListener(Xi.Zn, Ji), n3.removeEventListener(Xi.Vn, _i, { passive: false }), n3.addEventListener(Xi.Zn, Ji), n3.addEventListener(Xi.Vn, _i, { passive: false });
        }
      }()) : (bo(false), function() {
        if (Xi.Vn && (a || u)) {
          yt().autoScrolling && (qt.removeEventListener(Xi.Vn, _i, { passive: false }), qt.removeEventListener(Xi.Vn, no, { passive: false }));
          var n3 = yt().touchWrapper;
          n3.removeEventListener(Xi.Zn, Ji), n3.removeEventListener(Xi.Vn, _i, { passive: false });
        }
      }());
    }
    s.setMouseWheelScrolling = bo;
    var Ao = true;
    function xo() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
        Y(n2, ko, true);
      });
    }
    function Oo(n2, t2) {
      document["fp_" + n2] = t2, B(n2, ko, true);
    }
    function ko(n2) {
      var t2 = n2.type, e2 = false, i2 = t2 === "mouseleave" ? n2.toElement || n2.relatedTarget : n2.target;
      i2 != document && i2 ? (t2 === "touchend" && (Ao = false, setTimeout(function() {
        Ao = true;
      }, 800)), (t2 !== "mouseenter" || Ao) && (yt().normalScrollElements.split(",").forEach(function(n3) {
        if (!e2) {
          var t3 = Q(i2, n3), o2 = P(i2, n3);
          (t3 || o2) && (s.shared.Un || To(false), s.shared.Un = true, e2 = true);
        }
      }), !e2 && s.shared.Un && (To(true), s.shared.Un = false))) : To(true);
    }
    function Eo(n2, t2) {
      Jt(0, "internal"), lo(n2, t2), Jt(Mt().scrollingSpeed, "internal");
    }
    fn.O(Sn, function() {
      yt().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
        Oo(n2, false);
      }), ["mouseleave", "touchend"].forEach(function(n2) {
        Oo(n2, true);
      })), fn.O(yn, xo);
    }), s.silentMoveTo = Eo;
    var Ro, jo, Lo = m(), zo = w(), Do = false;
    function No() {
      clearTimeout(Ro), clearTimeout(jo), U("resize", Po);
    }
    function Po() {
      Do || (yt().autoScrolling && !yt().scrollBar || !yt().fitToSection) && Co(m()), function() {
        if (a)
          for (var n2 = 0; n2 < 4; n2++)
            jo = setTimeout(function() {
              window.requestAnimationFrame(function() {
                yt().autoScrolling && !yt().scrollBar && (vn({ I: true }), Eo(dn.N.index() + 1), vn({ I: false }));
              });
            }, 200 * n2);
      }(), Do = true, clearTimeout(Ro), Ro = setTimeout(function() {
        !function() {
          if (vn({ I: true }), Co(""), _(St(), "onResize"), yt().autoScrolling || dn.H || function() {
            if (!yt().autoScrolling || yt().scrollBar) {
              var n3 = 0.01 * o.innerHeight;
              r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
            }
          }(), fn.R(Mn), ui(), Qe(), a) {
            var n2 = r.activeElement;
            if (!Q(n2, "textarea") && !Q(n2, "input") && !Q(n2, "select")) {
              var t2 = m();
              Math.abs(t2 - Lo) > 20 * Math.max(Lo, t2) / 100 && (Ho(true), Lo = t2);
            }
          } else
            e2 = m(), i2 = w(), dn.K === e2 && zo === i2 || (vn({ K: e2 }), zo = i2, Ho(true));
          var e2, i2;
          _(St(), "onResizeEnds"), vn({ I: false });
        }(), Do = false;
      }, 400);
    }
    function Ho(n2) {
      if (!g(St(), Zn)) {
        vn({ I: true, K: m(), Xn: w() });
        for (var t2 = pn().D, e2 = 0; e2 < t2.length; ++e2) {
          var i2 = t2[e2], r2 = p(tt, i2.item)[0], a2 = i2.slides;
          Ot("offsetSections") && b(i2.item, { height: jt(i2.item) }), a2.length > 1 && Me(r2, i2.activeSlide.item);
        }
        yt().scrollOverflow && ri.wn();
        var l2 = pn().N.index();
        dn.H || !l2 || Ot("fadingEffect") || Ot("dropEffect") || Ot("waterEffect") || Eo(l2 + 1), vn({ I: false }), X(yt().afterResize) && n2 && yt().afterResize.call(St(), o.innerWidth, o.innerHeight), X(yt().afterReBuild) && !n2 && yt().afterReBuild.call(St()), _(St(), "afterRebuild");
      }
    }
    function Co(n2) {
      pn().D.forEach(function(t2) {
        var e2 = n2 !== "" || Ot("offsetSections") ? jt(t2.item) : "";
        b(t2.item, { height: e2 });
      });
    }
    function Wo() {
      var n2, t2, e2 = o.location.hash;
      if (e2.length) {
        var i2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
        n2 = r2 ? "/" + i2[1] : decodeURIComponent(i2[0]);
        var a2 = r2 ? i2[2] : i2[1];
        a2 && a2.length && (t2 = decodeURIComponent(a2));
      }
      return { section: n2, cn: t2 };
    }
    function Io() {
      U("hashchange", Fo);
    }
    function Fo() {
      if (!dn.F && !yt().lockAnchors) {
        var n2 = Wo(), t2 = n2.section, e2 = n2.cn, i2 = dn.V === void 0, o2 = dn.V === void 0 && e2 === void 0 && !dn.W;
        t2 && t2.length && (t2 && t2 !== dn.V && !i2 || o2 && !Et() || !dn.W && dn.Z != e2 && !Et()) && fn.R(An, { Yn: t2, slideAnchor: e2 });
      }
    }
    function Vo(n2) {
      var t2 = n2.target;
      P(t2, yt().menu + " [data-menuanchor]") && Zo.call(t2, n2);
    }
    function Zo(n2) {
      vn({ P: "menu" }), !p(yt().menu)[0] || !yt().lockAnchors && yt().anchors.length || (V(n2), fn.R(On, { anchor: Z(this, "data-menuanchor") }));
    }
    function Bo(n2) {
      var t2 = n2.target;
      t2 && P(t2, "#fp-nav a") ? Ne.call(t2, n2.e) : Q(t2, ".fp-tooltip") ? ze.call(t2) : (Q(t2, ct) || P(t2, ct) != null) && pe.call(t2, n2.e);
    }
    s.reBuild = Ho, fn.O(Sn, function() {
      Po(), G("resize", Po), fn.O(yn, No);
    }), s.setLockAnchors = function(n2) {
      yt().lockAnchors = n2;
    }, fn.O(Sn, function() {
      G("hashchange", Fo), fn.O(yn, Io);
    }), fn.O(Sn, function() {
      B("wheel", Oi.Cn, yi()), fn.O(Rn, ki), fn.O(xn, Ei);
    }), fn.O(Sn, function() {
      fn.O(gn, Vo);
    }), fn.O(Sn, function() {
      fn.O(gn, Bo);
    });
    var Go, Yo, Uo = 0;
    function Xo(n2) {
      var t2, e2, i2, o2, r2;
      if (_(St(), "onScroll"), !dn.I && pn().N && (rn(pn().D), !pn().H && !pn().Fn && (!yt().autoScrolling || yt().scrollBar || Ot("dragAndMove")) && !Rt())) {
        var a2 = Ot("dragAndMove") ? Math.abs(kt("dragAndMove", "getCurrentScroll")) : I(), l2 = function(n3) {
          var t3 = n3 > Uo ? "down" : "up";
          return Uo = n3, vn({ J: n3 }), t3;
        }(a2), u2 = 0, c2 = a2 + m() / 2, s2 = (Ot("dragAndMove") ? kt("dragAndMove", "getDocumentHeight") : qt.scrollHeight - m()) === a2, f2 = pn().D;
        if (vn({ scrollY: a2 }), s2)
          u2 = f2.length - 1;
        else if (a2)
          for (var d2 = 0; d2 < f2.length; ++d2)
            (P(f2[d2].item, _n) || f2[d2].item).offsetTop <= c2 && (u2 = d2);
        else
          u2 = 0;
        if (i2 = l2, o2 = pn().N.item.offsetTop, r2 = o2 + m(), (i2 == "up" ? r2 >= I() + m() : o2 <= I()) && (g(pn().N.item, Un) || (E(pn().N.item, Un), R(F(pn().N.item), Un))), e2 = (t2 = f2[u2]).item, !t2.isActive) {
          vn({ F: true });
          var v2, p2, h2 = pn().N.item, w2 = pn().N.index() + 1, b2 = Yt(pn().N, e2), S2 = t2.anchor, y2 = t2.index() + 1, M2 = t2.activeSlide, T2 = { N: h2, sectionIndex: y2 - 1, anchorLink: S2, element: e2, leavingSection: w2, direction: b2, items: { origin: pn().N, destination: t2 } };
          if (M2 && (p2 = M2.anchor, v2 = M2.index()), dn.canScroll)
            R(f2.filter(function(n3) {
              return n3.index() !== t2.index();
            }).map(function(n3) {
              return n3.item;
            }), Gn), E(e2, Gn), kt("parallax", "afterLoad"), X(yt().beforeLeave) && Be("beforeLeave", T2), X(yt().onLeave) && oe("onLeave", T2), X(yt().afterLoad) && oe("afterLoad", T2), kt("resetSliders", "apply", { localIsResizing: dn.I, leavingSection: w2 }), le(h2), ue(e2), re(e2), Pe(S2, y2 - 1), yt().anchors.length && vn({ V: S2 }), fe(v2, p2, S2), ui();
          clearTimeout(Go), Go = setTimeout(function() {
            vn({ F: false });
          }, 100);
        }
        yt().fitToSection && dn.canScroll && (clearTimeout(Yo), Yo = setTimeout(function() {
          dn.D.filter(function(n3) {
            var t3 = n3.item.getBoundingClientRect();
            return Math.round(t3.bottom) === Math.round(m()) || Math.round(t3.top) === 0;
          }).length || _e();
        }, yt().tn));
      }
    }
    function _o(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        me(n2, t3, "k");
      }) : (me(n2, "all", "k"), yt().keyboardScrolling = n2);
    }
    function Qo(n2) {
      var t2 = n2.index();
      yt().anchors[t2] !== void 0 && n2.isActive && Pe(yt().anchors[t2], t2), yt().menu && yt().css3 && P(p(yt().menu)[0], In) != null && p(yt().menu).forEach(function(n3) {
        qt.appendChild(n3);
      });
    }
    function Jo() {
      var n2, t2, e2 = pn().N, i2 = pn().N.item;
      E(i2, Un), ue(i2), Le(), re(i2), t2 = oo((n2 = Wo()).section), n2.section && t2 && (t2 === void 0 || t2.index() !== T(ni)) || !X(yt().afterLoad) || oe("afterLoad", { N: i2, element: i2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: pn().N, destination: pn().N } }), X(yt().afterRender) && oe("afterRender"), _(St(), "afterRender");
    }
    function Ko(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        me(n2, t3, "m");
      }) : me(n2, "all", "m"), _(St(), "setAllowScrolling", { value: n2, _n: t2 });
    }
    function qo() {
      var n2 = Wo(), t2 = n2.section, e2 = n2.cn;
      t2 ? yt().animateAnchor ? ao(t2, e2) : Eo(t2, e2) : fn.R(hn, null);
    }
    fn.O(yn, function() {
      clearTimeout(Go), clearTimeout(Yo);
    }), fn.O(Sn, function() {
      G("scroll", Xo), r.body.addEventListener("scroll", Xo), fn.O(An, function(n2) {
        ao(n2.Yn, n2.slideAnchor);
      }), fn.O(On, function(n2) {
        lo(n2.anchor, void 0);
      }), fn.O(Tn, function(n2) {
        (n2.direction === "down" ? Ni : Pi)();
      }), fn.O(kn, function(n2) {
        Ge(n2.destination);
      });
    }), fn.O(yn, function() {
      U("scroll", Xo);
    }), s.getActiveSlide = function() {
      return ie(pn().N.activeSlide);
    }, s.getScrollX = function() {
      return dn.scrollX;
    }, fn.O(Sn, function() {
      fn.O(yn, xe), fn.O(En, function(n2) {
        Me(n2.slides, n2.destination);
      }), fn.O(wn, function(n2) {
        io(n2.section);
      }), fn.O(mn, function(n2) {
        eo(n2.section);
      });
    }), fn.O(Sn, function() {
      var n2 = yt().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(yt().credits.label, "\n            </a>\n        </div>\n    "), i2 = rn(dn.D), o2 = !dn.Qn || yt().credits.enabled;
      i2 && i2.item && o2 && i2.item.insertAdjacentHTML("beforeend", e2);
    }), function() {
      fn.O(bn, function() {
        var t3, l2, u2;
        vn({ Qn: (yt().licenseKey, t3 = yt().licenseKey, l2 = function(t4) {
          var e3 = parseInt("514").toString(16);
          if (!t4 || t4.length < 29 || t4.split(n2[0]).length === 4)
            return null;
          var i3 = ["Each", "for"][o2()]().join(""), l3 = t4[["split"]]("-"), u3 = [];
          l3[i3](function(n3, t5) {
            if (t5 < 4) {
              var i4 = function(n4) {
                var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][o2()]().join("");
                return window[e4](t6) ? r2(t6) : function(n5) {
                  return n5 - Gn.length;
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
          }), s2 += a2(c2), { Jn: new Date(e3 + "T00:00"), Kn: e3.split("-")[2] === 8 * (Gn.length - 2) + "", qn: s2 };
        }(t3), u2 = function(n3) {
          var t4 = i2[o2()]().join("");
          return n3 && t4.indexOf(n3) === 0 && n3.length === t4.length;
        }(t3), (l2 || u2) && (yt().credits && l2 && e2 <= l2.Jn && l2.qn === t3.split(n2[0])[4] || u2 || l2.Kn) || false) });
      });
      var n2 = ["-"], t2 = "2022-11-15".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), i2 = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), s.setKeyboardScrolling = _o, s.shared.$n = Jo, s.setAllowScrolling = Ko;
    var $o = {};
    function nr() {
      return $o;
    }
    var tr, er, ir, or, rr = !g(qt, zt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function ar(n2) {
      if (er = r.createElement("div"), tr = zt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), rr || (tr = tr.replace("extensions/", "").replace("Extension", "")), er.innerHTML = tr, er = er.firstChild, "MutationObserver" in window && new MutationObserver(ur).observe(r.body, { childList: true, subtree: false }), (!rr || Ot(n2) && s[n2]) && (!function(n3) {
        var t3 = nr()[n3] !== void 0 && nr()[n3].length, e2 = [], i2 = false;
        return k(nr()[n3]) ? e2 = nr()[n3] : e2.push(nr()[n3]), e2.forEach(function(e3) {
          var o2 = function() {
            if (r.domain.length) {
              for (var n4 = r.domain.replace(/^(www\.)/, "").split("."); n4.length > 2; )
                n4.shift();
              return n4.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), a2 = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], l2 = zt(a2[0]), u2 = zt(a2[1]), c2 = zt(a2[2]), s2 = zt(a2[6]), f2 = zt(a2[3]), d2 = zt(a2[4]), v2 = zt(a2[5]), p2 = yt()[d2 + v2] !== void 0;
          t3 = t3 || p2;
          var h2 = [l2, u2, c2, s2].indexOf(o2) < 0 && o2.length !== 0;
          if (!t3 && !p2 && h2)
            return false;
          var g2 = t3 ? zt(e3) : "", m2 = (g2 = g2.split("_")).length > 1 && g2[1].indexOf(n3, g2[1].length - n3.length) > -1, w2 = g2.length > 1 && g2[1].toLowerCase().indexOf(d2) > -1, b2 = g2[0].indexOf(o2, g2[0].length - o2.length) < 0, S2 = m2 || w2;
          i2 = i2 || !(b2 && h2 && f2 != g2[0]) && S2 || !h2;
        }), i2;
      }(n2) || !rr)) {
        lr();
        var t2 = zt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t2](lr, 2e3);
      }
    }
    function lr() {
      er && (or || (Math.random() < 0.5 ? Lt(qt, er) : j(er, qt), or = true), er.setAttribute("style", zt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, zt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function ur(n2) {
      n2.forEach(function(n3) {
        if (n3.removedNodes[0] && n3.removedNodes[0].isEqualNode(er)) {
          clearTimeout(ir);
          var t2 = zt("bDIwc2V0VGltZW91dDAzbA==");
          ir = window[t2](cr, 900);
        }
      });
    }
    function cr() {
      or = false;
    }
    function sr() {
      ci(), ui(), yt().scrollBar = yt().scrollBar || yt().hybrid, At(), function() {
        b(un(St(), "body"), { height: "100%", position: "relative" }), E(St(), Wn), E($t, Bn), vn({ K: m() }), R(St(), Zn), hi(), kt("parallax", "init");
        for (var n2 = pn().rn, t2 = 0; t2 < n2.length; t2++) {
          var e2 = n2[t2], i2 = e2.mn;
          e2.item.setAttribute("data-fp-styles", Z(e2.item, "style")), ti(e2), Qo(e2), i2.length > 0 && gi(e2);
        }
        yt().fixedElements && yt().css3 && p(yt().fixedElements).forEach(function(n3) {
          qt.appendChild(n3);
        }), yt().navigation && De(), p('iframe[src*="youtube.com/embed/"]', St()).forEach(function(n3) {
          var t3, e3;
          e3 = Z(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
        }), kt("fadingEffect", "apply"), kt("waterEffect", "init"), kt("dropEffect", "init"), kt("cards", "init"), yt().scrollOverflow && ri.wn();
      }(), Ko(true), To(true), Re(yt().autoScrolling, "internal"), Qe(), ce(), r.readyState === "complete" && qo(), G("load", qo), Jo(), rr || ar("l"), ci(), ui();
    }
    function fr() {
      var n2 = yt().licenseKey;
      yt().licenseKey.trim() === "" ? (f("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), f("error", "https://github.com/alvarotrigo/fullPage.js#options")) : yt() && dn.Qn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length : (f("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), f("error", "https://alvarotrigo.com/fullPage/pricing")), g($t, Bn) ? f("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (yt().continuousVertical && (yt().loopTop || yt().loopBottom) && (yt().continuousVertical = false, f("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !yt().scrollOverflow || !yt().scrollBar && yt().autoScrolling || f("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !yt().continuousVertical || !yt().scrollBar && yt().autoScrolling || (yt().continuousVertical = false, f("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), yt().anchors.forEach(function(n3) {
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
    function dr() {
      return { options: yt(), internals: { container: St(), canScroll: dn.canScroll, isScrollAllowed: we(), getDestinationPosition: Ye, isTouch: u, c: ar, getXmovement: Ae, removeAnimation: Ut, getTransforms: Xt, lazyLoad: ue, addAnimation: Gt, performHorizontalMove: Te, landscapeScroll: Me, silentLandscapeScroll: ke, keepSlidesPosition: je, silentScroll: Qt, styleSlides: gi, styleSection: ti, scrollHandler: Xo, getEventsPage: qi, getMSPointer: $i, isReallyTouch: Qi, usingExtension: Ot, toggleControlArrows: Se, touchStartHandler: Ji, touchMoveHandler: _i, nullOrSection: ee, items: { SectionPanel: di, SlidePanel: pi, Item: Nt }, getVisible: v, getState: pn, updateState: ui, updateStructuralState: ci, getPanels: function() {
        return dn.ln;
      }, getSections: function() {
        return dn.D;
      }, setActiveSection: function(n2) {
        dn.N = n2;
      } } };
    }
    function vr(n2) {
      var t2 = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], e2 = zt(t2[0]), i2 = zt(t2[1]), o2 = yt()[e2 + i2] !== void 0, r2 = "fp_" + n2 + "Extension";
      nr()[n2] = o2 ? yt()[e2 + i2] : yt()[n2 + i2], s[n2] = window[r2] !== void 0 ? new window[r2]() : null, s[n2] && s[n2].c(n2);
    }
    function pr(n2, t2) {
      var e2;
      if (qt = p("body")[0], $t = p("html")[0], ne = p("html, body"), !g($t, Bn))
        return e2 = typeof n2 == "string" ? p(n2)[0] : n2, ht.touchWrapper = e2, function(n3) {
          bt = h({}, ht, n3), wt = Object.assign({}, bt);
        }(t2), function(n3) {
          gt = n3;
        }(typeof n2 == "string" ? p(n2)[0] : n2), fn.R(bn), fr(), s.getFullpageData = dr, s.version = "4.0.16", s.test = Object.assign(s.test, { top: "0px", un: "translate3d(0px, 0px, 0px)", sn: function() {
          for (var n3 = [], t3 = 0; t3 < p(yt().sectionSelector, St()).length; t3++)
            n3.push("translate3d(0px, 0px, 0px)");
          return n3;
        }(), left: function() {
          for (var n3 = [], t3 = 0; t3 < p(yt().sectionSelector, St()).length; t3++)
            n3.push(0);
          return n3;
        }(), options: yt(), setAutoScrolling: null }), s.shared = Object.assign(s.shared, { $n: null, Un: false }), o.fullpage_api = s, o.fullpage_extensions = true, St() && (fn.R("beforeInit"), vr("continuousHorizontal"), vr("scrollHorizontally"), vr("resetSliders"), vr("interlockedSlides"), vr("responsiveSlides"), vr("fadingEffect"), vr("dragAndMove"), vr("offsetSections"), vr("scrollOverflowReset"), vr("parallax"), vr("cards"), vr("dropEffect"), vr("waterEffect"), kt("dragAndMove", "init"), kt("responsiveSlides", "init"), sr(), fn.R(Sn), kt("dragAndMove", "turnOffTouch")), o.fullpage_api;
      fr();
    }
    return s.destroy = function(n2) {
      _(St(), "destroy", n2), Re(false, "internal"), Ko(true), To(false), _o(false), E(St(), Zn), fn.R(yn), kt("dragAndMove", "destroy"), n2 && (Qt(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", St()).forEach(function(n3) {
        ln(n3, "src");
      }), p("img[data-srcset]").forEach(function(n3) {
        ln(n3, "srcset");
      }), q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(Pt(pn().D), { height: "", "background-color": "", padding: "" }), b(Pt(pn().slides), { width: "" }), b(St(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), b(ne, { overflow: "", height: "" }), R($t, Bn), R(qt, Fn), qt.className.split(/\s+/).forEach(function(n3) {
        n3.indexOf("fp-viewing") === 0 && R(qt, n3);
      }), Pt(pn().ln).forEach(function(n3) {
        yt().scrollOverflow && ri.Dn(n3), R(n3, "fp-table active " + Un), Z(n3, "data-fp-styles") && n3.setAttribute("style", Z(n3, "data-fp-styles")), g(n3, Xn) && !mt && n3.removeAttribute("data-anchor");
      }), Ut(St()), [Qn, it, tt].forEach(function(n3) {
        p(n3, St()).forEach(function(n4) {
          N(n4);
        });
      }), b(St(), { "-webkit-transition": "none", transition: "none" }), o.scrollTo(0, 0), [Xn, Kn, et].forEach(function(n3) {
        R(p("." + n3), n3);
      }));
    }, o.fp_easings = h(o.fp_easings, { easeInOutCubic: function(n2, t2, e2, i2) {
      return (n2 /= i2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
    } }), o.jQuery && function(n2, t2) {
      n2 && t2 ? n2.fn.fullpage = function(e2) {
        e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(s).forEach(function(n3) {
          yt().$.fn.fullpage[n3] = s[n3];
        });
      } : f("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(o.jQuery, pr), pr;
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
