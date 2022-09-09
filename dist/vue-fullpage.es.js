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
* vue-fullpage 0.2.7
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
* fullPage 4.0.11
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
    function D(n2, t2) {
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
    function L(n2, t2, e2) {
      var i2;
      t2 = t2 || r.createElement("div");
      for (var o2 = 0; o2 < n2.length; o2++) {
        var a2 = n2[o2];
        (e2 && !o2 || !e2) && (i2 = t2.cloneNode(true), a2.parentNode.insertBefore(i2, a2)), i2.appendChild(a2);
      }
      return n2;
    }
    function R(n2, t2) {
      L(n2, t2, true);
    }
    function z(n2, t2) {
      for (typeof t2 == "string" && (t2 = K(t2)), n2.appendChild(t2); n2.firstChild !== t2; )
        t2.appendChild(n2.firstChild);
    }
    function P(n2) {
      for (var t2 = r.createDocumentFragment(); n2.firstChild; )
        t2.appendChild(n2.firstChild);
      n2.parentNode.replaceChild(t2, n2);
    }
    function C(n2, t2) {
      return n2 && n2.nodeType === 1 ? Q(n2, t2) ? n2 : C(n2.parentNode, t2) : null;
    }
    function N(n2, t2) {
      I(n2, n2.nextSibling, t2);
    }
    function H(n2, t2) {
      I(n2, n2, t2);
    }
    function I(n2, t2, e2) {
      E(e2) || (typeof e2 == "string" && (e2 = K(e2)), e2 = [e2]);
      for (var i2 = 0; i2 < e2.length; i2++)
        n2.parentNode.insertBefore(e2[i2], t2);
    }
    function W() {
      var n2 = r.documentElement;
      return (o.pageYOffset || n2.scrollTop) - (n2.clientTop || 0);
    }
    function B(n2) {
      return Array.prototype.filter.call(n2.parentNode.children, function(t2) {
        return t2 !== n2;
      });
    }
    function F(n2) {
      n2.preventDefault();
    }
    function V(n2, t2) {
      return n2.getAttribute(t2);
    }
    function Z(n2, t2, e2) {
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
      n2.setAttribute(t2, V(n2, "data-" + t2)), n2.removeAttribute("data-" + t2);
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
    }, writable: true, i: true }), window.fp_utils = { $: p, deepExtend: h, hasClass: g, getWindowHeight: m, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: E, addClass: D, removeClass: k, appendTo: j, wrap: L, wrapAll: R, wrapInner: z, unwrap: P, closest: C, after: N, before: H, insertBefore: I, getScrollTop: W, siblings: B, preventDefault: F, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, showError: f };
    var cn = Object.freeze({ __proto__: null, showError: f, isVisible: d, getVisible: v, $: p, deepExtend: h, hasClass: g, getWindowHeight: m, o: w, css: b, prev: S, next: y, last: M, index: T, getList: A, hide: x, show: O, isArrayOrList: E, addClass: D, removeClass: k, appendTo: j, wrap: L, wrapAll: R, wrapInner: z, unwrap: P, closest: C, after: N, before: H, insertBefore: I, getScrollTop: W, siblings: B, preventDefault: F, l: V, u: Z, v: G, p: Y, h: U, isFunction: X, trigger: _, matches: Q, toggle: J, createElementFromHTML: K, remove: q, filter: $, untilAll: nn, nextAll: tn, prevAll: en, toArray: on, g: rn, S: an, M: ln, T: un });
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
    }, D: function(n2) {
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
    } }, dn = { j: 0, L: 0, slides: [], R: [], P: null, C: null, N: false, H: false, I: false, W: false, B: false, F: void 0, V: void 0, Z: false, canScroll: true, G: "none", Y: "none", U: false, X: false, _: true, J: 0, K: m(), q: false, nn: {} };
    function vn(n2) {
      Object.assign(dn, n2);
    }
    function pn() {
      return dn;
    }
    function hn(n2) {
      fn.D("onClickOrTouch", { e: n2, target: n2.target });
    }
    function gn() {
      ["click", "touchstart"].forEach(function(n2) {
        Y(n2, hn);
      });
    }
    function mn() {
      vn({ _: true });
    }
    o.state = dn, fn.O("bindEvents", function() {
      ["click", "touchstart"].forEach(function(n2) {
        Z(n2, hn);
      }), G("focus", mn), fn.O("onDestroy", gn);
    });
    var wn = "fullpage-wrapper", bn = "." + wn, Sn = "fp-responsive", yn = "fp-notransition", Mn = "fp-destroyed", Tn = "fp-enabled", An = "active", xn = ".active", On = "fp-completely", En = "fp-section", Dn = "." + En, kn = ".fp-tableCell", jn = "#fp-nav", Ln = "fp-slide", Rn = "." + Ln, zn = ".fp-slide.active", Pn = "fp-slides", Cn = ".fp-slides", Nn = "fp-slidesContainer", Hn = "." + Nn, In = "fp-table", Wn = "fp-overflow", Bn = "." + Wn, Fn = "fp-is-overflow", Vn = ".fp-slidesNav", Zn = ".fp-slidesNav a", Gn = "fp-controlArrow", Yn = "." + Gn, Un = "fp-prev", Xn = ".fp-controlArrow.fp-prev", _n = ".fp-controlArrow.fp-next", Qn = { menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, licenseKey: "", credits: { enabled: true, label: "Made with fullPage.js", position: "right" }, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, tn: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: true, scrollOverflowReset: false, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, allowCorrectDirection: false, scrollOverflowMacStyle: true, controlArrows: true, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: true, observer: true }, Jn = null, Kn = false, qn = h({}, Qn), $n = null;
    function nt(n2) {
      return Jn;
    }
    function tt() {
      return $n || Qn;
    }
    function et() {
      return qn;
    }
    function it(n2, t2, e2) {
      $n[n2] = t2, e2 !== "internal" && (qn[n2] = t2);
    }
    function ot() {
      if (!tt().anchors.length) {
        var n2 = p(tt().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Jn);
        n2.length && n2.length === p(tt().sectionSelector, Jn).length && (Kn = true, n2.forEach(function(n3) {
          tt().anchors.push(V(n3, "data-anchor").toString());
        }));
      }
      if (!tt().navigationTooltips.length) {
        var t2 = p(tt().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Jn);
        t2.length && t2.forEach(function(n3) {
          tt().navigationTooltips.push(V(n3, "data-tooltip").toString());
        });
      }
    }
    var rt = function(n2) {
      this.anchor = n2.anchor, this.item = n2.item, this.index = n2.index(), this.isLast = this.index === n2.item.parentElement.querySelectorAll(n2.selector).length - 1, this.isFirst = !this.index, this.isActive = n2.isActive;
    }, at = function(n2, t2) {
      this.parent = this.parent || null, this.selector = t2, this.anchor = V(n2, "data-anchor") || tt().anchors[T(n2, tt().sectionSelector)], this.item = n2, this.isVisible = d(n2), this.isActive = g(n2, An), this.en = g(n2, Wn) || p(Bn, n2)[0] != null, this.on = t2 === tt().sectionSelector, this.container = C(n2, Hn) || C(n2, bn), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function lt(n2) {
      return n2.map(function(n3) {
        return n3.item;
      });
    }
    function ut(n2, t2) {
      return n2.find(function(n3) {
        return n3.item === t2;
      });
    }
    at.prototype.siblings = function() {
      return this.on ? this.isVisible ? dn.R : dn.rn : this.parent ? this.parent.slides : 0;
    }, at.prototype.prev = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t2 >= 0 ? n2[t2] : null;
    }, at.prototype.next = function() {
      var n2 = this.siblings(), t2 = (this.on ? n2.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t2 < n2.length ? n2[t2] : null;
    }, at.prototype.prevPanel = function() {
      return this.prev() || (this.parent ? this.parent.prev() : null);
    }, at.prototype.nextPanel = function() {
      return this.next() || (this.parent ? this.parent.next() : null);
    }, at.prototype.an = function() {
      return this.on ? dn.R : dn.ln;
    };
    var ct, st = function(n2) {
      rt.call(this, n2);
    }, ft = function(n2) {
      rt.call(this, n2);
    };
    function dt(n2) {
      return window["fp_" + n2 + "Extension"] !== void 0;
    }
    function vt(n2) {
      var t2 = tt();
      return t2[n2] !== null && Object.prototype.toString.call(t2[n2]) === "[object Array]" ? t2[n2].length && s[n2] : t2[n2] && s[n2];
    }
    function pt(n2, t2, e2) {
      if (vt(n2))
        return X(s[n2][t2]) ? s[n2][t2](e2) : s[n2][t2];
    }
    function ht() {
      return pt("dragAndMove", "isAnimating");
    }
    function gt() {
      return pt("dragAndMove", "isGrabbing");
    }
    function mt(n2) {
      return tt().offsetSections && s.offsetSections ? Math.round(pt("offsetSections", "getWindowHeight", n2)) : m();
    }
    function wt(n2, t2) {
      n2.insertBefore(t2, n2.firstChild);
    }
    function bt(n2) {
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
    function St(n2) {
      var t2 = p(zn, n2);
      return t2.length && (n2 = t2[0]), n2;
    }
    function yt(n2) {
      return n2 ? n2.activeSlide ? n2.activeSlide : n2 : null;
    }
    function Mt(n2) {
      var t2, e2, i2 = tt();
      return i2.autoScrolling && !i2.scrollBar ? (t2 = -n2, e2 = p(bn)[0]) : (t2 = n2, e2 = window), { options: t2, element: e2 };
    }
    function Tt(n2, t2) {
      !tt().autoScrolling || tt().scrollBar || n2.self != window && g(n2, Pn) ? n2.self != window && g(n2, Pn) ? n2.scrollLeft = t2 : n2.scrollTo(0, t2) : n2.style.top = t2 + "px";
    }
    function At(n2) {
      var t2 = "transform " + tt().scrollingSpeed + "ms " + tt().easingcss3;
      return k(n2, yn), b(n2, { "-webkit-transition": t2, transition: t2 });
    }
    function xt(n2, t2) {
      var e2 = n2.index(), i2 = T(t2, Dn);
      return e2 == i2 ? "none" : e2 > i2 ? "up" : "down";
    }
    function Ot(n2) {
      return D(n2, yn);
    }
    function Et(n2) {
      return { "-webkit-transform": n2, "-moz-transform": n2, "-ms-transform": n2, transform: n2 };
    }
    function Dt(n2, t2) {
      t2 ? At(nt()) : Ot(nt()), clearTimeout(ct), b(nt(), Et(n2)), s.test.un = n2, ct = setTimeout(function() {
        k(nt(), yn);
      }, 10);
    }
    function kt(n2) {
      var t2 = Math.round(n2);
      if (tt().css3 && tt().autoScrolling && !tt().scrollBar)
        Dt("translate3d(0px, -" + t2 + "px, 0px)", false);
      else if (tt().autoScrolling && !tt().scrollBar)
        b(nt(), { top: -t2 + "px" }), s.test.top = -t2 + "px";
      else {
        var e2 = Mt(t2);
        Tt(e2.element, e2.options);
      }
    }
    function jt(n2, t2) {
      t2 !== "internal" && pt("fadingEffect", "update", n2), pt("cards", "update_", n2), it("scrollingSpeed", n2, t2);
    }
    o.fp_utils = o.fp_utils || {}, Object.assign(o.fp_utils, { prependTo: wt, toggleClass: function(n2, t2, e2) {
      if (n2.classList && e2 == null)
        n2.classList.toggle(t2);
      else {
        var i2 = g(n2, t2);
        i2 && e2 == null || !e2 ? k(n2, t2) : (!i2 && e2 == null || e2) && D(n2, t2);
      }
    } }), s.setScrollingSpeed = jt;
    var Lt, Rt = null, zt = null, Pt = null;
    function Ct(n2, t2, e2, i2) {
      var r2, a2 = function(n3) {
        return n3.self != o && g(n3, Pn) ? n3.scrollLeft : !tt().autoScrolling || tt().scrollBar ? W() : n3.offsetTop;
      }(n2), l2 = t2 - a2, u2 = false, c2 = dn.Z;
      vn({ Z: true }), Lt && window.cancelAnimationFrame(Lt), Lt = function(s2) {
        r2 || (r2 = s2);
        var f2 = Math.floor(s2 - r2);
        if (dn.Z) {
          var d2 = t2;
          e2 && (d2 = o.fp_easings[tt().easing](f2, a2, l2, e2)), f2 <= e2 && Tt(n2, d2), f2 < e2 ? window.requestAnimationFrame(Lt) : i2 === void 0 || u2 || (i2(), vn({ Z: false }), u2 = true);
        } else
          u2 || c2 || (i2(), vn({ Z: false }), u2 = true);
      }, window.requestAnimationFrame(Lt);
    }
    function Nt(n2) {
      return n2 && !n2.item ? new st(new Ze(n2)) : n2 ? new st(n2) : null;
    }
    function Ht(n2) {
      return n2 ? new ft(n2) : null;
    }
    function It(n2, t2) {
      var e2 = function(n3, t3) {
        var e3 = { afterRender: function() {
          return { section: Nt(pn().P), cn: Ht(pn().P.activeSlide) };
        }, onLeave: function() {
          return { origin: Nt(t3.items.origin), destination: Nt(t3.items.destination), direction: t3.direction, trigger: pn().C };
        }, afterLoad: function() {
          return e3.onLeave();
        }, afterSlideLoad: function() {
          return { section: Nt(t3.items.section), origin: Nt(t3.items.origin), destination: Nt(t3.items.destination), direction: t3.direction, trigger: pn().C };
        }, onSlideLeave: function() {
          return e3.afterSlideLoad();
        }, beforeLeave: function() {
          return e3.onLeave();
        }, onScrollOverflow: function() {
          return { section: Nt(pn().P), cn: Ht(pn().P.activeSlide), position: t3.position, direction: t3.direction };
        } };
        return e3[n3]();
      }(n2, t2);
      return _(nt(), n2, e2), tt()[n2].apply(e2[Object.keys(e2)[0]], on(e2)) !== false;
    }
    function Wt(n2) {
      var t2 = St(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && typeof n3.play == "function" && n3.play();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        n3.hasAttribute("data-autoplay") && Bt(n3), n3.onload = function() {
          n3.hasAttribute("data-autoplay") && Bt(n3);
        };
      });
    }
    function Bt(n2) {
      n2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function Ft(n2) {
      var t2 = St(n2);
      p("video, audio", t2).forEach(function(n3) {
        n3.hasAttribute("data-keepplaying") || typeof n3.pause != "function" || n3.pause();
      }), p('iframe[src*="youtube.com/embed/"]', t2).forEach(function(n3) {
        /youtube\.com\/embed\//.test(V(n3, "src")) && !n3.hasAttribute("data-keepplaying") && n3.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function Vt(n2) {
      tt().lazyLoading && p("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", St(n2)).forEach(function(n3) {
        if (["src", "srcset"].forEach(function(t3) {
          var e2 = V(n3, "data-" + t3);
          e2 != null && e2 && (ln(n3, t3), n3.addEventListener("load", function() {
          }));
        }), Q(n3, "source")) {
          var t2 = C(n3, "video, audio");
          t2 && (t2.load(), t2.onloadeddata = function() {
          });
        }
      });
    }
    function Zt() {
      var n2 = pn().P.item, t2 = pn().P.activeSlide, e2 = Gt(n2), i2 = String(e2);
      t2 && (i2 = i2 + "-" + Gt(t2.item)), i2 = i2.replace("/", "-").replace("#", "");
      var o2 = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      Rt.className = Rt.className.replace(o2, ""), D(Rt, "fp-viewing-" + i2);
    }
    function Gt(n2) {
      if (!n2)
        return null;
      var t2 = V(n2, "data-anchor"), e2 = T(n2);
      return t2 == null && (t2 = e2), t2;
    }
    function Yt(n2, t2, e2) {
      var i2 = "";
      tt().anchors.length && !tt().lockAnchors && (n2 ? (e2 != null && (i2 = e2), t2 == null && (t2 = n2), vn({ V: t2 }), Ut(i2 + "/" + t2)) : n2 != null ? (vn({ V: t2 }), Ut(e2)) : Ut(e2)), Zt();
    }
    function Ut(n2) {
      if (tt().recordHistory)
        location.hash = n2;
      else if (a || u)
        o.history.replaceState(void 0, void 0, "#" + n2);
      else {
        var t2 = o.location.href.split("#")[0];
        o.location.replace(t2 + "#" + n2);
      }
    }
    function Xt(n2, t2, e2) {
      var i2 = t2 === "Section" ? tt().anchors[n2] : V(e2, "data-anchor");
      return encodeURI(tt().navigationTooltips[n2] || i2 || t2 + " " + (n2 + 1));
    }
    function _t(n2) {
      F(n2), vn({ C: "horizontalNav" });
      var t2 = C(this, Dn), e2 = p(Cn, C(this, Dn))[0], i2 = ut(pn().R, t2).slides[T(C(this, "li"))];
      fn.D("landscapeScroll", { slides: e2, destination: i2.item });
    }
    var Qt, Jt = {};
    function Kt(n2, t2, e2) {
      t2 !== "all" ? Jt[e2][t2] = n2 : Object.keys(Jt[e2]).forEach(function(t3) {
        Jt[e2][t3] = n2;
      });
    }
    function qt() {
      return Jt;
    }
    function $t() {
      var n2 = C(this, Dn);
      g(this, Un) ? qt().m.left && (vn({ C: "slideArrow" }), fn.D("moveSlideLeft", { section: n2 })) : qt().m.right && (vn({ C: "slideArrow" }), fn.D("moveSlideRight", { section: n2 }));
    }
    function ne(n2) {
      !tt().loopHorizontal && tt().controlArrows && (J(p(Xn, n2.section), n2.slideIndex !== 0), J(p(_n, n2.section), y(n2.destiny) != null));
    }
    function te() {
      clearTimeout(Qt);
    }
    function ee(n2, t2, e2) {
      var i2 = C(n2, Dn), o2 = pn().R.filter(function(n3) {
        return n3.item == i2;
      })[0], r2 = o2.slides.filter(function(n3) {
        return n3.item == t2;
      })[0], a2 = { slides: n2, destiny: t2, direction: e2, destinyPos: { left: t2.offsetLeft }, slideIndex: r2.index(), section: i2, sectionIndex: o2.index(), anchorLink: o2.anchor, slidesNav: p(Vn, i2)[0], slideAnchor: r2.anchor, prevSlide: o2.activeSlide.item, prevSlideIndex: o2.activeSlide.index(), items: { section: o2, origin: o2.activeSlide, destination: r2 }, localIsResizing: dn.W };
      a2.xMovement = oe(a2.prevSlideIndex, a2.slideIndex), a2.direction = a2.direction ? a2.direction : a2.xMovement, a2.localIsResizing || vn({ canScroll: false }), pt("parallax", "applyHorizontal", a2), pt("cards", "apply", a2), pt("dropEffect", "apply", a2), pt("waterEffect", "apply", a2), tt().onSlideLeave && !a2.localIsResizing && a2.xMovement !== "none" && X(tt().onSlideLeave) && It("onSlideLeave", a2) === false ? vn({ I: false }) : (vt("dropEffect") && tt().dropEffect || (D(t2, An), k(B(t2), An)), We(), a2.localIsResizing || (Ft(a2.prevSlide), Vt(t2)), ne(a2), o2.isActive && !a2.localIsResizing && Yt(a2.slideIndex, a2.slideAnchor, a2.anchorLink), pt("continuousHorizontal", "apply", a2), gt() ? ae(a2) : ie(n2, a2, true), tt().interlockedSlides && s.interlockedSlides && (vt("continuousHorizontal") && e2 !== void 0 && e2 !== a2.xMovement || pt("interlockedSlides", "apply", a2)));
    }
    function ie(n2, t2, e2) {
      var i2, o2, r2 = t2.destinyPos;
      if (i2 = t2.slidesNav, o2 = t2.slideIndex, tt().slidesNavigation && i2 != null && (k(p(xn, i2), An), D(p("a", p("li", i2)[o2]), An)), vn({ scrollX: Math.round(r2.left) }), tt().css3) {
        var a2 = "translate3d(-" + Math.round(r2.left) + "px, 0px, 0px)";
        s.test.sn[t2.sectionIndex] = a2, vt("dragAndMove") && t2.dn !== void 0 || At(p(Hn, n2)), b(p(Hn, n2), Et(a2)), vt("interlockedSlides") || clearTimeout(Qt), Qt = setTimeout(function() {
          e2 && ae(t2);
        }, tt().scrollingSpeed);
      } else
        s.test.left[t2.sectionIndex] = Math.round(r2.left), Ct(n2, Math.round(r2.left), tt().scrollingSpeed, function() {
          e2 && ae(t2);
        });
    }
    function oe(n2, t2) {
      return n2 == t2 ? "none" : n2 > t2 ? "left" : "right";
    }
    function re() {
      clearTimeout(Qt);
    }
    function ae(n2) {
      pt("continuousHorizontal", "afterSlideLoads", n2), n2.localIsResizing || (pt("parallax", "afterSlideLoads"), pt("scrollOverflowReset", "setPrevious", n2.prevSlide), pt("scrollOverflowReset", "reset"), X(tt().afterSlideLoad) && It("afterSlideLoad", n2), vn({ canScroll: true }), Wt(n2.destiny), fn.D("afterSlideLoads", n2)), vn({ I: false }), pt("interlockedSlides", "interlockedSlides", n2);
    }
    function le(n2, t2) {
      jt(0, "internal"), t2 !== void 0 && vn({ W: true }), ee(C(n2, Cn), n2), t2 !== void 0 && vn({ W: false }), jt(et().scrollingSpeed, "internal");
    }
    function ue(n2, t2) {
      it("recordHistory", n2, t2);
    }
    function ce(n2, t2) {
      n2 || kt(0), it("autoScrolling", n2, t2);
      var e2 = pn().P.item;
      if (tt().autoScrolling && !tt().scrollBar)
        b(Pt, { overflow: "hidden", height: "100%" }), k(Rt, "fp-scrollable"), ue(et().recordHistory, "internal"), b(nt(), { "-ms-touch-action": "none", "touch-action": "none" }), e2 != null && kt(e2.offsetTop);
      else if (b(Pt, { overflow: "visible", height: "initial" }), D(Rt, "fp-scrollable"), ue(!!tt().autoScrolling && et().recordHistory, "internal"), b(nt(), { "-ms-touch-action": "", "touch-action": "" }), Ot(nt()), e2 != null) {
        var i2 = Mt(e2.offsetTop);
        i2.element.scrollTo(0, i2.options);
      }
      _(nt(), "setAutoScrolling", n2);
    }
    function se() {
      for (var n2 = p(zn), t2 = 0; t2 < n2.length; t2++)
        le(n2[t2], "internal");
    }
    function fe() {
      var n2 = p(".fp-auto-height")[0] || Le() && p(".fp-auto-height-responsive")[0];
      tt().lazyLoading && n2 && p(".fp-section:not(.active)").forEach(function(n3) {
        var t2, e2, i2, o2, r2;
        e2 = (t2 = n3.getBoundingClientRect()).top, i2 = t2.bottom, o2 = e2 + 2 < dn.K && e2 > 0, r2 = i2 > 2 && i2 < dn.K, (o2 || r2) && Vt(n3);
      });
    }
    function de() {
      _(S(this), "click");
    }
    function ve() {
      q(p(jn));
      var n2 = r.createElement("div");
      n2.setAttribute("id", "fp-nav");
      var t2 = r.createElement("ul");
      n2.appendChild(t2), j(n2, Rt);
      var e2 = p(jn)[0];
      D(e2, "fp-" + tt().navigationPosition), tt().showActiveTooltip && D(e2, "fp-show-active");
      for (var i2 = "", o2 = 0; o2 < pn().R.length; o2++) {
        var a2 = pn().R[o2], l2 = "";
        tt().anchors.length && (l2 = a2.anchor), i2 += '<li><a href="#' + encodeURI(l2) + '"><span class="fp-sr-only">' + Xt(a2.index(), "Section") + "</span><span></span></a>";
        var u2 = tt().navigationTooltips[a2.index()];
        u2 !== void 0 && u2 !== "" && (i2 += '<div class="fp-tooltip fp-' + tt().navigationPosition + '">' + u2 + "</div>"), i2 += "</li>";
      }
      p("ul", e2)[0].innerHTML = i2;
      var c2 = p("li", p(jn)[0])[pn().P.index()];
      D(p("a", c2), An);
    }
    function pe(n2) {
      n2.preventDefault && F(n2), vn({ C: "verticalNav" });
      var t2 = T(C(this, "#fp-nav li"));
      fn.D("scrollPage", { destination: pn().R[t2] });
    }
    function he(n2, t2) {
      var e2;
      e2 = n2, tt().menu && tt().menu.length && p(tt().menu).forEach(function(n3) {
        n3 != null && (k(p(xn, n3), An), D(p('[data-menuanchor="' + e2 + '"]', n3), An));
      }), function(n3, t3) {
        var e3 = p(jn)[0];
        tt().navigation && e3 != null && e3.style.display !== "none" && (k(p(xn, e3), An), D(n3 ? p('a[href="#' + n3 + '"]', e3) : p("a", p("li", e3)[t3]), An));
      }(n2, t2);
    }
    Jt.m = { up: true, down: true, left: true, right: true }, Jt.k = h({}, Jt.m), fn.O("onClickOrTouch", function(n2) {
      var t2 = n2.target;
      (Q(t2, Yn) || C(t2, Yn)) && $t.call(t2, n2);
    }), s.landscapeScroll = ee, fn.O("bindEvents", function() {
      fn.O("onPerformMovement", te);
    }), s.setRecordHistory = ue, s.setAutoScrolling = ce, s.test.setAutoScrolling = ce, new Date().getTime();
    var ge, me, we, be, Se, ye, Me = (me = true, we = new Date().getTime(), be = !o.fullpage_api, function(n2, t2) {
      var e2 = new Date().getTime(), i2 = n2 === "wheel" ? tt().scrollingSpeed : 100;
      return me = be || e2 - we >= i2, be = !o.fullpage_api, me && (ge = t2(), we = e2), ge === void 0 || ge;
    });
    function Te(n2, t2) {
      if (X(tt().beforeLeave))
        return Me(pn().C, function() {
          return It(n2, t2);
        });
    }
    function Ae(n2, t2, e2) {
      var i2 = n2.item;
      if (i2 != null) {
        var o2, r2, a2 = { element: i2, callback: t2, isMovementUp: e2, dtop: xe(i2), yMovement: xt(pn().P, i2), anchorLink: n2.anchor, sectionIndex: n2.index(), activeSlide: n2.activeSlide ? n2.activeSlide.item : null, leavingSection: pn().P.index() + 1, localIsResizing: dn.W, items: { origin: pn().P, destination: n2 }, direction: null };
        if (!(pn().P.item == i2 && !dn.W || tt().scrollBar && W() === a2.dtop && !g(i2, "fp-auto-height"))) {
          if (a2.activeSlide != null && (o2 = V(a2.activeSlide, "data-anchor"), r2 = T(a2.activeSlide, null)), !a2.localIsResizing) {
            var l2 = a2.yMovement;
            if (e2 !== void 0 && (l2 = e2 ? "up" : "down"), a2.direction = l2, dt("dropEffect") && s.dropEffect.onLeave_(a2), dt("waterEffect") && s.waterEffect.onLeave_(a2), X(tt().beforeLeave) && Te("beforeLeave", a2) === false)
              return;
            if (X(tt().onLeave) && !It("onLeave", a2))
              return;
          }
          pt("parallax", "apply", a2), pt("cards", "apply", a2), pt("dropEffect", "apply", a2), pt("waterEffect", "apply", a2), tt().autoScrolling && tt().continuousVertical && a2.isMovementUp !== void 0 && (!a2.isMovementUp && a2.yMovement == "up" || a2.isMovementUp && a2.yMovement == "down") && (a2 = function(n3) {
            vn({ q: true });
            var t3 = pn().P.item;
            return n3.isMovementUp ? H(t3, tn(t3, Dn)) : N(t3, en(t3, Dn).reverse()), kt(pn().P.item.offsetTop), se(), n3.vn = t3, n3.dtop = n3.element.offsetTop, n3.yMovement = xt(pn().P, n3.element), n3.leavingSection = n3.items.origin.index() + 1, n3.sectionIndex = n3.items.destination.index(), _(nt(), "onContinuousVertical", n3), n3;
          }(a2)), pt("scrollOverflowReset", "setPrevious", pn().P.item), a2.localIsResizing || Ft(pn().P.item), vt("dropEffect") && tt().dropEffect || (D(i2, An), k(B(i2), An)), We(), Vt(i2), vn({ canScroll: s.test.pn }), Yt(r2, o2, a2.anchorLink), function(n3) {
            var t3 = tt().scrollingSpeed < 700, e3 = t3 ? 700 : tt().scrollingSpeed;
            if (vn({ G: "none", scrollY: Math.round(n3.dtop) }), fn.D("onPerformMovement"), tt().css3 && tt().autoScrolling && !tt().scrollBar)
              Dt("translate3d(0px, -" + Math.round(n3.dtop) + "px, 0px)", true), vt("waterEffect") && se(), tt().scrollingSpeed ? (clearTimeout(Se), Se = setTimeout(function() {
                Oe(n3), vn({ canScroll: !t3 || s.test.pn });
              }, tt().scrollingSpeed)) : Oe(n3);
            else {
              var i3 = Mt(n3.dtop);
              s.test.top = -n3.dtop + "px", clearTimeout(Se), Ct(i3.element, i3.options, tt().scrollingSpeed, function() {
                tt().scrollBar ? Se = setTimeout(function() {
                  Oe(n3);
                }, 30) : (Oe(n3), vn({ canScroll: !t3 || s.test.pn }));
              });
            }
            t3 && (clearTimeout(ye), ye = setTimeout(function() {
              vn({ canScroll: true });
            }, e3));
          }(a2), vn({ F: a2.anchorLink }), he(a2.anchorLink, function(n3) {
            return n3.vn != null ? n3.isMovementUp ? dn.j - 1 : 0 : n3.sectionIndex;
          }(a2));
        }
      }
    }
    function xe(n2) {
      var t2 = n2.offsetHeight, e2 = n2.offsetTop, i2 = e2, o2 = vt("dragAndMove") && pt("dragAndMove", "isGrabbing") ? pt("dragAndMove", "isScrollingDown") : e2 > dn.J, r2 = i2 - m() + t2, a2 = tt().bigSectionsDestination;
      return t2 > m() ? (o2 || a2) && a2 !== "bottom" || (i2 = r2) : (o2 || dn.W && y(n2) == null) && (i2 = r2), vt("offsetSections") && (i2 = s.offsetSections.getSectionPosition_(o2, i2, n2)), vn({ J: i2 }), i2;
    }
    function Oe(n2) {
      vn({ N: false }), function(n3) {
        n3.vn != null && (n3.isMovementUp ? H(p(Dn)[0], n3.vn) : N(p(Dn)[pn().R.length - 1], n3.vn), kt(pn().P.item.offsetTop), function() {
          for (var n4 = p(zn), t2 = 0; t2 < n4.length; t2++)
            le(n4[t2], "internal");
        }(), n3.sectionIndex = n3.items.destination.index(), n3.leavingSection = n3.items.origin.index() + 1, vn({ q: false }));
      }(n2), X(tt().afterLoad) && !n2.localIsResizing && It("afterLoad", n2), pt("parallax", "afterLoad"), pt("waterEffect", "afterLoad"), pt("dropEffect", "afterLoad"), pt("scrollOverflowReset", "reset"), pt("resetSliders", "apply", n2), We(), n2.localIsResizing || Wt(n2.element), D(n2.element, On), k(B(n2.element), On), fe(), Ne.hn(), vn({ canScroll: true }), fn.D("afterSectionLoads", n2), X(n2.callback) && n2.callback();
    }
    function Ee(n2, t2) {
      it("fitToSection", n2, t2);
    }
    function De() {
      dn.canScroll && (vn({ W: true }), Ae(dn.P), vn({ W: false }));
    }
    function ke() {
      var n2 = tt().responsive || tt().responsiveWidth, t2 = tt().responsiveHeight, e2 = n2 && o.innerWidth < n2, i2 = t2 && o.innerHeight < t2;
      n2 && t2 ? je(e2 || i2) : n2 ? je(e2) : t2 && je(i2);
    }
    function je(n2) {
      var t2 = Le();
      n2 ? t2 || (ce(false, "internal"), Ee(false, "internal"), x(p(jn)), D(Rt, Sn), X(tt().afterResponsive) && tt().afterResponsive.call(nt(), n2), pt("responsiveSlides", "toSections"), _(nt(), "afterResponsive", n2)) : t2 && (ce(et().autoScrolling, "internal"), Ee(et().autoScrolling, "internal"), O(p(jn)), k(Rt, Sn), X(tt().afterResponsive) && tt().afterResponsive.call(nt(), n2), pt("responsiveSlides", "toSlides"), _(nt(), "afterResponsive", n2));
    }
    function Le() {
      return g(Rt, Sn);
    }
    function Re(n2) {
      tt().verticalCentered && (!tt().scrollOverflow && Ne.gn(n2.item) || Ne.mn(n2) || g(n2.item, In) || D(n2.item, In));
    }
    s.moveTo = moveTo, s.getScrollY = function() {
      return dn.scrollY;
    }, fn.O("onDestroy", function() {
      clearTimeout(Se), clearTimeout(ye);
    }), s.setFitToSection = Ee, s.fitToSection = De, s.setResponsive = je;
    var ze = null;
    function Pe(n2) {
      var t2 = n2.item, e2 = n2.wn.length, i2 = n2.index();
      !pn().P && n2.isVisible && (D(t2, An), We()), ze = pn().P.item, vt("offsetSections") && b(t2, { height: mt(t2) + "px" }), tt().paddingTop && b(t2, { "padding-top": tt().paddingTop }), tt().paddingBottom && b(t2, { "padding-bottom": tt().paddingBottom }), tt().sectionsColor[i2] !== void 0 && b(t2, { "background-color": tt().sectionsColor[i2] }), tt().anchors[i2] !== void 0 && t2.setAttribute("data-anchor", n2.anchor), e2 || Re(n2);
    }
    s.getActiveSection = function() {
      return pn().P;
    }, fn.O("bindEvents", function() {
      o.addEventListener("load", function() {
        tt().scrollOverflow && !tt().scrollBar && (Ne.bn(), Ne.hn());
      });
    });
    var Ce, Ne = { Sn: null, yn: null, Mn: null, Tn: function(n2) {
      if (!dn.canScroll)
        return F(n2), false;
    }, hn: function() {
      r.activeElement === this.Sn && this.Sn.blur();
      var n2 = Ne.An(pn().P.item);
      !n2 || a || u || (this.Sn = n2, this.Sn.focus());
    }, bn: function() {
      tt().scrollOverflowMacStyle && !l && D(Rt, "fp-scroll-mac"), pn().ln.forEach(function(n2) {
        if (!(n2.slides && n2.slides.length || g(n2.item, "fp-auto-height-responsive") && Le())) {
          var t2, e2 = St(n2.item), i2 = Ne.gn(n2.item), o2 = (t2 = n2).on ? t2 : t2.parent;
          if (c) {
            var r2 = i2 ? "addClass" : "removeClass";
            cn[r2](o2.item, Fn), cn[r2](n2.item, Fn);
          } else
            D(o2.item, Fn), D(n2.item, Fn);
          n2.en || (Ne.xn(e2), Ne.On(e2)), n2.en = true;
        }
      });
    }, On: function(n2) {
      Ne.An(n2).addEventListener("scroll", Ne.En), n2.addEventListener("wheel", Ne.Tn, { passive: false }), n2.addEventListener("keydown", Ne.Tn, { passive: false });
    }, xn: function(n2) {
      var t2 = document.createElement("div");
      t2.className = Wn, z(n2, t2), t2.setAttribute("tabindex", "-1");
    }, Dn: function(n2) {
      var t2 = p(Bn, n2)[0];
      t2 && (P(t2), n2.removeAttribute("tabindex"));
    }, An: function(n2) {
      var t2 = St(n2);
      return p(Bn, t2)[0] || t2;
    }, en: function(n2) {
      return g(n2, Wn) || p(Bn, n2)[0] != null;
    }, mn: function(n2) {
      return n2.on && n2.activeSlide ? n2.activeSlide.en : n2.en;
    }, gn: function(n2) {
      return Ne.An(n2).scrollHeight > o.innerHeight;
    }, kn: function(n2, t2) {
      if (!dn.canScroll)
        return false;
      var e2 = Ne.An(t2);
      if (!tt().scrollOverflow || !g(e2, Wn) || g(St(t2), "fp-noscroll"))
        return true;
      var i2 = c ? 1 : 0, o2 = e2.scrollTop, r2 = n2 === "up" && o2 <= 0, a2 = n2 === "down" && e2.scrollHeight <= Math.ceil(e2.offsetHeight + o2) + i2, l2 = r2 || a2;
      return l2 || (this.yn = new Date().getTime()), l2;
    }, jn: function() {
      this.Mn = new Date().getTime();
      var n2 = this.Mn - Ne.yn, t2 = (a || u) && dn.U, e2 = dn.X && n2 > 600;
      return t2 && n2 > 400 || e2;
    }, En: (Ce = 0, function(n2) {
      var t2 = n2.target.scrollTop, e2 = dn.G !== "none" ? dn.G : Ce < t2 ? "down" : "up";
      Ce = t2, X(tt().onScrollOverflow) && It("onScrollOverflow", { position: t2, direction: e2 }), g(n2.target, Wn) && dn.canScroll && Ne.kn(e2, n2.target) && Ne.jn() && fn.D("onScrollOverflowScrolled", { direction: e2 });
    }) }, He = null, Ie = null;
    function We() {
      dn.P = null, dn.R.map(function(n2) {
        var t2 = g(n2.item, An);
        n2.isActive = t2, n2.en = Ne.en(n2.item), t2 && (dn.P = n2), n2.slides.length && (n2.activeSlide = null, n2.slides.map(function(t3) {
          var e2 = g(t3.item, An);
          t3.en = Ne.en(n2.item), t3.isActive = e2, e2 && (n2.activeSlide = t3);
        }));
      }), function() {
        var n2 = dn.P, t2 = !!dn.P && dn.P.slides.length, e2 = dn.P ? dn.P.activeSlide : null;
        if (!n2 && dn.R.length && !pn().N)
          if (vt("responsiveSlides") && pt("responsiveSlides", "areSlidesSections"))
            vn({ P: dn.ln.filter(function(n3) {
              return n3.item === p(Dn);
            })[0] });
          else {
            if (He) {
              var i2 = Ve(He, dn.R);
              i2 && (dn.P = i2, dn.P.isActive = true, D(dn.P.item, An)), dn.P && kt(dn.P.item.offsetTop);
            }
            if (t2 && !e2 && Ie) {
              var o2 = Ve(Ie, dn.P.slides);
              o2 && (dn.P.activeSlide = o2, dn.P.activeSlide.isActive = true, D(dn.P.activeSlide.item, An)), dn.P.activeSlide && le(dn.P.activeSlide.item, "internal");
            }
          }
      }(), _(nt(), "onUpdateStateDone");
    }
    function Be() {
      var n2 = p(tt().sectionSelector, nt()), t2 = v(n2), e2 = Array.from(n2).map(function(n3) {
        return new Ze(n3);
      }), i2 = e2.filter(function(n3) {
        return n3.isVisible;
      }), o2 = i2.reduce(function(n3, t3) {
        return n3.concat(t3.slides);
      }, []);
      He = Fe(dn.P), Ie = Fe(dn.P ? dn.P.activeSlide : null), dn.j = t2.length, dn.L = i2.reduce(function(n3, t3) {
        return n3 + t3.slides.length;
      }, 0), dn.R = i2, dn.rn = e2, dn.slides = o2, dn.ln = dn.R.concat(dn.slides);
    }
    function Fe(n2) {
      if (!n2)
        return null;
      var t2 = n2 ? n2.item : null, e2 = n2.on ? dn.rn : dn.P.Ln;
      if (t2) {
        var i2 = ut(e2, t2);
        return i2 ? i2.index() : null;
      }
      return null;
    }
    function Ve(n2, t2) {
      var e2, i2 = n2 - 1, o2 = n2;
      do {
        if (e2 = t2[i2] || t2[o2])
          break;
        i2 -= 1, o2 += 1;
      } while (i2 >= 0 || o2 < t2.length);
      return e2;
    }
    var Ze = function(n2) {
      var t2 = this;
      [].push.call(arguments, tt().sectionSelector), at.apply(this, arguments), this.wn = p(tt().slideSelector, n2), this.Ln = Array.from(this.wn).map(function(n3) {
        return new Ye(n3, t2);
      }), this.slides = this.Ln.filter(function(n3) {
        return n3.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n3) {
        return n3.isActive;
      })[0] || this.slides[0] : null;
    };
    Ze.prototype = at.prototype, Ze.prototype.constructor = Ze;
    var Ge, Ye = function(n2, t2) {
      this.parent = t2, at.call(this, n2, tt().slideSelector);
    };
    function Ue() {
      D(p(tt().sectionSelector, nt()), En), D(p(tt().slideSelector, nt()), Ln);
    }
    function Xe(n2) {
      var t2 = n2.slides.length, e2 = n2.wn, i2 = n2.slides, o2 = 100 * t2, a2 = 100 / t2;
      if (!p(Cn, n2.item)[0]) {
        var l2 = r.createElement("div");
        l2.className = Pn, R(e2, l2);
        var u2 = r.createElement("div");
        u2.className = Nn, R(e2, u2);
      }
      b(p(Hn, n2.item), { width: o2 + "%" }), t2 > 1 && (tt().controlArrows && function(n3) {
        var t3 = n3.item, e3 = [K(tt().controlArrowsHTML[0]), K(tt().controlArrowsHTML[1])];
        N(p(Cn, t3)[0], e3), D(e3, Gn), D(e3[0], Un), D(e3[1], "fp-next"), tt().controlArrowColor !== "#fff" && (b(p(_n, t3), { "border-color": "transparent transparent transparent " + tt().controlArrowColor }), b(p(Xn, t3), { "border-color": "transparent " + tt().controlArrowColor + " transparent transparent" })), tt().loopHorizontal || x(p(Xn, t3));
      }(n2), tt().slidesNavigation && function(n3) {
        var t3 = n3.item, e3 = n3.slides.length;
        j(K('<div class="fp-slidesNav"><ul></ul></div>'), t3);
        var i3 = p(Vn, t3)[0];
        D(i3, "fp-" + tt().slidesNavPosition);
        for (var o3 = 0; o3 < e3; o3++)
          j(K('<li><a href="#"><span class="fp-sr-only">' + Xt(o3, "Slide", p(Rn, t3)[o3]) + "</span><span></span></a></li>"), p("ul", i3)[0]);
        b(i3, { "margin-left": "-" + i3.innerWidth / 2 + "px" });
        var r2 = n3.activeSlide ? n3.activeSlide.index() : 0;
        D(p("a", p("li", i3)[r2]), An);
      }(n2)), i2.forEach(function(n3) {
        b(n3.item, { width: a2 + "%" }), tt().verticalCentered && Re(n3);
      });
      var c2 = vt("responsiveSlides") ? null : n2.activeSlide || null;
      c2 != null && dn.P && (dn.P.index() !== 0 || dn.P.index() === 0 && c2.index() !== 0) ? (le(c2.item, "internal"), D(c2.item, "fp-initial")) : D(e2[0], An);
    }
    Ye.prototype = at.prototype, Ye.prototype.constructor = Ze;
    var _e = { attributes: false, subtree: true, childList: true, characterData: true };
    function Qe() {
      return v(p(tt().slideSelector, nt())).length !== pn().L;
    }
    function Je(n2) {
      var t2 = Qe();
      (Qe() || v(p(tt().sectionSelector, nt())).length !== pn().j) && !dn.q && (tt().observer && Ge && Ge.disconnect(), Be(), We(), tt().anchors = [], q(p(jn)), Ue(), ot(), tt().navigation && ve(), t2 && (q(p(Vn)), q(p(Yn))), pn().R.forEach(function(n3) {
        n3.slides.length ? t2 && Xe(n3) : Pe(n3);
      })), tt().observer && Ge && p(bn)[0] && Ge.observe(p(bn)[0], _e);
    }
    fn.O("bindEvents", function() {
      var n2, t2, e2;
      tt().observer && "MutationObserver" in window && p(bn)[0] && (n2 = p(bn)[0], t2 = _e, (e2 = new MutationObserver(Je)).observe(n2, t2), Ge = e2), fn.O("contentChanged", Je);
    }), s.Rn = Je;
    var Ke = function() {
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
    function qe() {
      return !!Ke() && { passive: false };
    }
    var $e, ni, ti, ei, ii = (ti = new Date().getTime(), ei = [], { zn: function(n2) {
      var t2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, e2 = Math.max(-1, Math.min(1, t2)), i2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0;
      $e = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !i2;
      var r2 = new Date().getTime();
      ni = e2 < 0 ? "down" : "up", ei.length > 149 && ei.shift(), ei.push(Math.abs(t2));
      var a2 = r2 - ti;
      ti = r2, a2 > 200 && (ei = []);
    }, Pn: function() {
      var n2 = an(ei, 10) >= an(ei, 70);
      return !!ei.length && n2 && $e;
    }, Cn: function() {
      return ni;
    } });
    function oi() {
      var n2 = tt().css3 ? W() + m() : rn(pn().R).item.offsetTop + rn(pn().R).item.offsetHeight, t2 = Mt(n2);
      s.test.top = -n2 + "px", vn({ canScroll: false }), Ct(t2.element, t2.options, tt().scrollingSpeed, function() {
        setTimeout(function() {
          vn({ N: true }), vn({ canScroll: true });
        }, 30);
      });
    }
    function ri() {
      nt().getBoundingClientRect().bottom >= 0 && ai();
    }
    function ai() {
      var n2 = Mt(rn(pn().R).item.offsetTop);
      vn({ canScroll: false }), Ct(n2.element, n2.options, tt().scrollingSpeed, function() {
        vn({ canScroll: true }), vn({ N: false }), vn({ Nn: false });
      });
    }
    var li, ui, ci, si = (li = false, ui = {}, ci = {}, function(n2, t2, e2) {
      switch (n2) {
        case "set":
          ui[t2] = new Date().getTime(), ci[t2] = e2;
          break;
        case "isNewKeyframe":
          var i2 = new Date().getTime();
          li = i2 - ui[t2] > ci[t2];
      }
      return li;
    });
    function fi() {
      var n2 = pn().P.next();
      n2 || !tt().loopBottom && !tt().continuousVertical || (n2 = pn().R[0]), n2 != null ? Ae(n2, null, false) : nt().scrollHeight < Rt.scrollHeight && fn.D("scrollBeyondFullpage");
    }
    function di() {
      var n2 = pn().P.prev();
      n2 || !tt().loopTop && !tt().continuousVertical || (n2 = rn(pn().R)), n2 != null && Ae(n2, null, true);
    }
    s.moveSectionDown = fi, s.moveSectionUp = di;
    var vi = 0;
    function pi(n2) {
      tt().autoScrolling && (dn.canScroll && (n2.pageY < vi && qt().m.up ? di() : n2.pageY > vi && qt().m.down && fi()), vi = n2.pageY);
    }
    function hi(n2) {
      if (qt().m[n2]) {
        var t2 = n2 === "down" ? fi : di;
        vt("scrollHorizontally") && (t2 = pt("scrollHorizontally", "getScrollSection", { type: n2, scrollSection: t2 })), tt().scrollOverflow && Ne.mn(pn().P) ? Ne.kn(n2, pn().P.item) && Ne.jn() && t2() : t2();
      }
    }
    var gi, mi, wi, bi = 0, Si = 0, yi = 0, Mi = 0, Ti = ji(), Ai = { Hn: "ontouchmove" in window ? "touchmove" : Ti ? Ti.move : null, In: "ontouchstart" in window ? "touchstart" : Ti ? Ti.down : null };
    function xi(n2) {
      var t2 = C(n2.target, Dn) || pn().P.item, e2 = Ne.mn(pn().P);
      if (Oi(n2)) {
        vn({ U: true, X: false }), tt().autoScrolling && (!e2 || e2 && !dn.canScroll) && F(n2);
        var i2 = ki(n2);
        yi = i2.y, Mi = i2.x;
        var r2 = Math.abs(bi - yi) > o.innerHeight / 100 * tt().touchSensitivity, a2 = Math.abs(Si - Mi) > w() / 100 * tt().touchSensitivity, l2 = p(Cn, t2).length && Math.abs(Si - Mi) > Math.abs(bi - yi), u2 = bi > yi ? "down" : "up";
        vn({ G: l2 ? Si > Mi ? "right" : "left" : u2 }), l2 ? !dn.I && a2 && (Si > Mi ? qt().m.right && fn.D("moveSlideRight", { section: t2 }) : qt().m.left && fn.D("moveSlideLeft", { section: t2 })) : tt().autoScrolling && dn.canScroll && r2 && hi(u2);
      }
    }
    function Oi(n2) {
      return n2.pointerType === void 0 || n2.pointerType != "mouse";
    }
    function Ei(n2) {
      if (tt().fitToSection && vn({ Z: false }), Oi(n2)) {
        var t2 = ki(n2);
        bi = t2.y, Si = t2.x;
      }
      G("touchend", Di);
    }
    function Di() {
      U("touchend", Di), vn({ U: false });
    }
    function ki(n2) {
      var t2 = {};
      return t2.y = n2.pageY !== void 0 && (n2.pageY || n2.pageX) ? n2.pageY : n2.touches[0].pageY, t2.x = n2.pageX !== void 0 && (n2.pageY || n2.pageX) ? n2.pageX : n2.touches[0].pageX, u && Oi(n2) && tt().scrollBar && n2.touches !== void 0 && (t2.y = n2.touches[0].pageY, t2.x = n2.touches[0].pageX), t2;
    }
    function ji() {
      var n2;
      return o.PointerEvent && (n2 = { down: "pointerdown", move: "pointermove" }), n2;
    }
    function Li(n2) {
      tt().autoScrolling && Oi(n2) && qt().m.up && (dn.canScroll || F(n2));
    }
    function Ri(n2, t2) {
      var e2 = t2 == null ? pn().P.item : t2, i2 = ut(dn.R, e2), o2 = p(Cn, e2)[0];
      if (!(o2 == null || ht() || dn.I || i2.slides.length < 2)) {
        var r2 = i2.activeSlide, a2 = n2 === "left" ? r2.prev() : r2.next();
        if (!a2) {
          if (!tt().loopHorizontal)
            return;
          a2 = n2 === "left" ? rn(i2.slides) : i2.slides[0];
        }
        vn({ I: !s.test.pn }), ee(o2, a2.item, n2);
      }
    }
    function zi(n2) {
      Ri("left", n2);
    }
    function Pi(n2) {
      Ri("right", n2);
    }
    function Ci(n2) {
      if (vt("responsiveSlides") && pt("responsiveSlides", "areSlidesSections"))
        return ut(dn.R, pt("responsiveSlides", "getSectionByAnchor", n2));
      var t2 = pn().R.filter(function(t3) {
        return t3.anchor === n2;
      })[0];
      if (!t2) {
        var e2 = n2 !== void 0 ? n2 - 1 : 0;
        t2 = pn().R[e2];
      }
      return t2;
    }
    function Ni(n2) {
      n2 != null && ee(C(n2, Cn), n2);
    }
    function Hi(n2, t2) {
      var e2 = Ci(n2);
      if (e2 != null) {
        var i2 = function(n3, t3) {
          var e3 = t3.slides.filter(function(t4) {
            return t4.anchor === n3;
          })[0];
          return e3 == null && (n3 = n3 !== void 0 ? n3 : 0, e3 = t3.slides[n3]), e3 ? e3.item : null;
        }(t2, e2);
        e2.anchor === dn.F || g(e2.item, An) ? Ni(i2) : Ae(e2, function() {
          Ni(i2);
        });
      }
    }
    function Ii(n2, t2) {
      var e2 = Ci(n2);
      t2 !== void 0 ? Hi(n2, t2) : e2 != null && Ae(e2);
    }
    function Wi() {
      clearTimeout(mi), Y("keydown", Bi), Y("keyup", Fi);
    }
    function Bi(n2) {
      clearTimeout(mi);
      var t2, e2 = n2.keyCode, i2 = [37, 39].indexOf(e2) > -1, o2 = tt().autoScrolling || tt().fitToSection || i2;
      e2 === 9 ? function(n3) {
        var t3 = n3.shiftKey, e3 = r.activeElement, i3 = Ui(St(pn().P.item));
        function o3(n4) {
          return F(n4), i3[0] ? i3[0].focus() : null;
        }
        if (!function(n4) {
          var t4 = Ui(r), e4 = t4.indexOf(r.activeElement), i4 = t4[n4.shiftKey ? e4 - 1 : e4 + 1], o4 = C(i4, Rn), a3 = C(i4, Dn);
          return !o4 && !a3;
        }(n3)) {
          e3 ? C(e3, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (e3 = o3(n3)) : o3(n3);
          var a2 = e3 == i3[0], l2 = e3 == i3[i3.length - 1], u2 = t3 && a2;
          if (u2 || !t3 && l2) {
            F(n3);
            var c2 = function(n4) {
              var t4, e4 = n4 ? "prevPanel" : "nextPanel", i4 = [], o4 = yt((dn.P && dn.P.activeSlide ? dn.P.activeSlide : dn.P)[e4]());
              do {
                (i4 = Ui(o4.item)).length && (t4 = { Wn: o4, Bn: i4[n4 ? i4.length - 1 : 0] }), o4 = yt(o4[e4]());
              } while (o4 && i4.length === 0);
              return t4;
            }(u2), s2 = c2 ? c2.Wn : null;
            if (s2) {
              var f2 = s2.on ? s2 : s2.parent;
              fn.D("onScrollPageAndSlide", { Fn: f2.index() + 1, slideAnchor: s2.on ? 0 : s2.index() }), wi = c2.Bn, F(n3);
            }
          }
        }
      }(n2) : Q(t2 = r.activeElement, "textarea") || Q(t2, "input") || Q(t2, "select") || V(t2, "contentEditable") == "true" || V(t2, "contentEditable") == "" || !tt().keyboardScrolling || !o2 || (gi = n2.ctrlKey, mi = setTimeout(function() {
        !function(n3) {
          var t3 = n3.shiftKey, e3 = r.activeElement, i3 = Q(e3, "video") || Q(e3, "audio"), o3 = Ne.kn("up", pn().P.item), a2 = Ne.kn("down", pn().P.item), l2 = [37, 39].indexOf(n3.keyCode) > -1;
          if (function(n4) {
            (function(n5) {
              return [40, 38, 32, 33, 34].indexOf(n5.keyCode) > -1 && !dn.N;
            })(n4) && !C(n4.target, Bn) && n4.preventDefault();
          }(n3), dn.canScroll || l2)
            switch (vn({ C: "keydown" }), n3.keyCode) {
              case 38:
              case 33:
                qt().k.up && o3 && (dn.N ? fn.D("onKeyDown", { e: n3 }) : di());
                break;
              case 32:
                if (t3 && qt().k.up && !i3 && o3) {
                  di();
                  break;
                }
              case 40:
              case 34:
                if (qt().k.down && a2) {
                  if (dn.N)
                    return;
                  n3.keyCode === 32 && i3 || fi();
                }
                break;
              case 36:
                qt().k.up && Ii(1);
                break;
              case 35:
                qt().k.down && Ii(pn().R.length);
                break;
              case 37:
                qt().k.left && zi();
                break;
              case 39:
                qt().k.right && Pi();
            }
        }(n2);
      }, 0));
    }
    function Fi(n2) {
      dn._ && (gi = n2.ctrlKey);
    }
    function Vi() {
      vn({ _: false }), gi = false;
    }
    function Zi(n2) {
      Yi();
    }
    function Gi(n2) {
      C(wi, Rn) && !C(wi, zn) || Yi();
    }
    function Yi() {
      wi && (wi.focus(), wi = null);
    }
    function Ui(n2) {
      return [].slice.call(p('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', n2)).filter(function(n3) {
        return V(n3, "tabindex") !== "-1" && n3.offsetParent !== null;
      });
    }
    s.moveSlideLeft = zi, s.moveSlideRight = Pi, s.moveTo = Ii, fn.O("bindEvents", function() {
      G("blur", Vi), Z("keydown", Bi), Z("keyup", Fi), fn.O("onDestroy", Wi), fn.O("afterSlideLoads", Zi), fn.O("afterSectionLoads", Gi);
    });
    var Xi = new Date().getTime(), _i = [];
    function Qi(n2) {
      n2 ? (function() {
        var n3, t2 = "";
        o.addEventListener ? n3 = "addEventListener" : (n3 = "attachEvent", t2 = "on");
        var e2 = "onwheel" in r.createElement("div") ? "wheel" : r.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", i2 = qe();
        e2 == "DOMMouseScroll" ? r[n3](t2 + "MozMousePixelScroll", Ji, i2) : r[n3](t2 + e2, Ji, i2);
      }(), nt().addEventListener("mousedown", Ki), nt().addEventListener("mouseup", qi)) : (r.addEventListener ? (Y("mousewheel", Ji, false), Y("wheel", Ji, false), Y("MozMousePixelScroll", Ji, false)) : r.detachEvent("onmousewheel", Ji), nt().removeEventListener("mousedown", Ki), nt().removeEventListener("mouseup", qi));
    }
    function Ji(n2) {
      var t2 = new Date().getTime(), e2 = g(p(".fp-completely")[0], "fp-normal-scroll"), i2 = function(n3, t3) {
        new Date().getTime();
        var e3 = pn().N && n3.getBoundingClientRect().bottom >= 0 && ii.Cn() === "up", i3 = pn().Nn;
        if (i3)
          return F(t3), false;
        if (pn().N) {
          if (e3) {
            var o2;
            if (!(i3 || si("isNewKeyframe", "beyondFullpage") && ii.Pn()))
              return (o2 = Mt(rn(pn().R).item.offsetTop + rn(pn().R).item.offsetHeight)).element.scrollTo(0, o2.options), vn({ Nn: false }), F(t3), false;
            if (ii.Pn())
              return e3 = false, vn({ Nn: true }), vn({ C: "wheel" }), ai(), F(t3), false;
          } else
            si("set", "beyondFullpage", 1e3);
          if (!i3 && !e3)
            return true;
        }
      }(nt(), n2);
      if (dn.X || vn({ U: false, X: true, G: "none" }), !qt().m.down && !qt().m.up)
        return F(n2), false;
      if (i2)
        return true;
      if (i2 === false)
        return F(n2), false;
      if (tt().autoScrolling && !gi && !e2) {
        var r2 = (n2 = n2 || o.event).wheelDelta || -n2.deltaY || -n2.detail, a2 = Math.max(-1, Math.min(1, r2)), l2 = n2.wheelDeltaX !== void 0 || n2.deltaX !== void 0, u2 = Math.abs(n2.wheelDeltaX) < Math.abs(n2.wheelDelta) || Math.abs(n2.deltaX) < Math.abs(n2.deltaY) || !l2, c2 = a2 < 0 ? "down" : a2 > 0 ? "up" : "none";
        _i.length > 149 && _i.shift(), _i.push(Math.abs(r2)), tt().scrollBar && F(n2);
        var s2 = t2 - Xi;
        return Xi = t2, s2 > 200 && (_i = []), vn({ Y: c2 }), dn.canScroll && !ht() && an(_i, 10) >= an(_i, 70) && u2 && (vn({ C: "wheel" }), hi(a2 < 0 ? "down" : "up")), false;
      }
      tt().fitToSection && vn({ Z: false });
    }
    function Ki(n2) {
      var t2;
      n2.which == 2 && (t2 = n2.pageY, vi = t2, nt().addEventListener("mousemove", pi));
    }
    function qi(n2) {
      n2.which == 2 && nt().removeEventListener("mousemove", pi);
    }
    function $i(n2) {
      n2 ? (Qi(true), function() {
        if (Ai.Hn && (a || u) && (!vt("dragAndMove") || tt().dragAndMove === "mouseonly")) {
          tt().autoScrolling && (Rt.removeEventListener(Ai.Hn, Li, { passive: false }), Rt.addEventListener(Ai.Hn, Li, { passive: false }));
          var n3 = tt().touchWrapper;
          n3.removeEventListener(Ai.In, Ei), n3.removeEventListener(Ai.Hn, xi, { passive: false }), n3.addEventListener(Ai.In, Ei), n3.addEventListener(Ai.Hn, xi, { passive: false });
        }
      }()) : (Qi(false), function() {
        if (Ai.Hn && (a || u)) {
          tt().autoScrolling && (Rt.removeEventListener(Ai.Hn, xi, { passive: false }), Rt.removeEventListener(Ai.Hn, Li, { passive: false }));
          var n3 = tt().touchWrapper;
          n3.removeEventListener(Ai.In, Ei), n3.removeEventListener(Ai.Hn, xi, { passive: false });
        }
      }());
    }
    s.setMouseWheelScrolling = Qi;
    var no = true;
    function to() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(n2) {
        Y(n2, io, true);
      });
    }
    function eo(n2, t2) {
      document["fp_" + n2] = t2, Z(n2, io, true);
    }
    function io(n2) {
      var t2 = n2.type, e2 = false, i2 = t2 === "mouseleave" ? n2.toElement || n2.relatedTarget : n2.target;
      i2 != document && i2 ? (t2 === "touchend" && (no = false, setTimeout(function() {
        no = true;
      }, 800)), (t2 !== "mouseenter" || no) && (tt().normalScrollElements.split(",").forEach(function(n3) {
        if (!e2) {
          var t3 = Q(i2, n3), o2 = C(i2, n3);
          (t3 || o2) && (s.shared.Vn || $i(false), s.shared.Vn = true, e2 = true);
        }
      }), !e2 && s.shared.Vn && ($i(true), s.shared.Vn = false))) : $i(true);
    }
    function oo(n2, t2) {
      jt(0, "internal"), Ii(n2, t2), jt(et().scrollingSpeed, "internal");
    }
    fn.O("bindEvents", function() {
      tt().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(n2) {
        eo(n2, false);
      }), ["mouseleave", "touchend"].forEach(function(n2) {
        eo(n2, true);
      })), fn.O("onDestroy", to);
    }), s.silentMoveTo = oo;
    var ro, ao, lo = m(), uo = w(), co = false;
    function so() {
      clearTimeout(ro), clearTimeout(ao), U("resize", fo);
    }
    function fo() {
      co || (tt().autoScrolling && !tt().scrollBar || !tt().fitToSection) && po(m()), function() {
        if (a)
          for (var n2 = 0; n2 < 4; n2++)
            ao = setTimeout(function() {
              window.requestAnimationFrame(function() {
                tt().autoScrolling && !tt().scrollBar && (vn({ W: true }), oo(dn.P.index() + 1), vn({ W: false }));
              });
            }, 200 * n2);
      }(), co = true, clearTimeout(ro), ro = setTimeout(function() {
        !function() {
          if (vn({ W: true }), po(""), _(nt(), "onResize"), tt().autoScrolling || dn.N || function() {
            if (!tt().autoScrolling || tt().scrollBar) {
              var n3 = 0.01 * o.innerHeight;
              r.documentElement.style.setProperty("--vh", "".concat(n3, "px"));
            }
          }(), fn.D("contentChanged"), We(), ke(), a) {
            var n2 = r.activeElement;
            if (!Q(n2, "textarea") && !Q(n2, "input") && !Q(n2, "select")) {
              var t2 = m();
              Math.abs(t2 - lo) > 20 * Math.max(lo, t2) / 100 && (vo(true), lo = t2);
            }
          } else
            e2 = m(), i2 = w(), dn.K === e2 && uo === i2 || (vn({ K: e2 }), uo = i2, vo(true));
          var e2, i2;
          _(nt(), "onResizeEnds"), vn({ W: false });
        }(), co = false;
      }, 400);
    }
    function vo(n2) {
      if (!g(nt(), Mn)) {
        vn({ W: true, K: m(), Zn: w() });
        for (var t2 = pn().R, e2 = 0; e2 < t2.length; ++e2) {
          var i2 = t2[e2], r2 = p(Cn, i2.item)[0], a2 = i2.slides;
          vt("offsetSections") && b(i2.item, { height: mt(i2.item) + "px" }), a2.length > 1 && ee(r2, i2.activeSlide.item);
        }
        tt().scrollOverflow && Ne.bn();
        var l2 = pt("responsiveSlides", "getActiveIndex") || pn().P.index();
        dn.N || !l2 || vt("fadingEffect") || vt("dropEffect") || vt("waterEffect") || oo(l2 + 1), vn({ W: false }), X(tt().afterResize) && n2 && tt().afterResize.call(nt(), o.innerWidth, o.innerHeight), X(tt().afterReBuild) && !n2 && tt().afterReBuild.call(nt()), _(nt(), "afterRebuild");
      }
    }
    function po(n2) {
      pn().R.forEach(function(t2) {
        var e2 = n2 === "" ? "" : mt(t2.item) + "px";
        b(t2.item, { height: e2 });
      });
    }
    function ho() {
      var n2, t2, e2 = o.location.hash;
      if (e2.length) {
        var i2 = e2.replace("#", "").split("/"), r2 = e2.indexOf("#/") > -1;
        n2 = r2 ? "/" + i2[1] : decodeURIComponent(i2[0]);
        var a2 = r2 ? i2[2] : i2[1];
        a2 && a2.length && (t2 = decodeURIComponent(a2));
      }
      return { section: n2, cn: t2 };
    }
    function go() {
      U("hashchange", mo);
    }
    function mo() {
      if (!dn.B && !tt().lockAnchors) {
        var n2 = ho(), t2 = n2.section, e2 = n2.cn, i2 = dn.F === void 0, o2 = dn.F === void 0 && e2 === void 0 && !dn.I;
        t2 && t2.length && (t2 && t2 !== dn.F && !i2 || o2 && !ht() || !dn.I && dn.V != e2 && !ht()) && fn.D("onScrollPageAndSlide", { Fn: t2, slideAnchor: e2 });
      }
    }
    function wo(n2) {
      var t2 = n2.target;
      C(t2, tt().menu + " [data-menuanchor]") && bo.call(t2, n2);
    }
    function bo(n2) {
      vn({ C: "menu" }), !p(tt().menu)[0] || !tt().lockAnchors && tt().anchors.length || (F(n2), fn.D("onMenuClick", { anchor: V(this, "data-menuanchor") }));
    }
    function So(n2) {
      var t2 = n2.target;
      t2 && C(t2, "#fp-nav a") ? pe.call(t2, n2.e) : Q(t2, ".fp-tooltip") ? de.call(t2) : (Q(t2, Zn) || C(t2, Zn) != null) && _t.call(t2, n2.e);
    }
    s.reBuild = vo, fn.O("bindEvents", function() {
      fo(), G("resize", fo), fn.O("onDestroy", so);
    }), s.setLockAnchors = function(n2) {
      tt().lockAnchors = n2;
    }, fn.O("bindEvents", function() {
      G("hashchange", mo), fn.O("onDestroy", go);
    }), fn.O("bindEvents", function() {
      Z("wheel", ii.zn, qe()), fn.O("scrollBeyondFullpage", oi), fn.O("onKeyDown", ri);
    }), fn.O("bindEvents", function() {
      fn.O("onClickOrTouch", wo);
    }), fn.O("bindEvents", function() {
      fn.O("onClickOrTouch", So);
    });
    var yo, Mo, To = 0;
    function Ao(n2) {
      var t2, e2, i2, o2, r2;
      if (_(nt(), "onScroll"), !dn.W && pn().P && (rn(pn().R), !pn().N && !pn().Nn && (!tt().autoScrolling || tt().scrollBar || vt("dragAndMove")) && !gt())) {
        var a2 = vt("dragAndMove") ? Math.abs(pt("dragAndMove", "getCurrentScroll")) : W(), l2 = function(n3) {
          var t3 = n3 > To ? "down" : "up";
          return To = n3, vn({ J: n3 }), t3;
        }(a2), u2 = 0, c2 = a2 + m() / 2, s2 = (vt("dragAndMove") ? pt("dragAndMove", "getDocumentHeight") : Rt.scrollHeight - m()) === a2, f2 = (pt("responsiveSlides", "areSlidesSections") ? pt("responsiveSlides", "panels") : null) || pn().R;
        if (vn({ scrollY: a2 }), s2)
          u2 = f2.length - 1;
        else if (a2)
          for (var d2 = 0; d2 < f2.length; ++d2)
            (C(f2[d2].item, Dn) || f2[d2].item).offsetTop <= c2 && (u2 = d2);
        else
          u2 = 0;
        if (i2 = l2, o2 = pn().P.item.offsetTop, r2 = o2 + m(), (i2 == "up" ? r2 >= W() + m() : o2 <= W()) && (g(pn().P.item, On) || (D(pn().P.item, On), k(B(pn().P.item), On))), e2 = (t2 = f2[u2]).item, !pt("responsiveSlides", "isCurrentSectionActive", u2) && !t2.isActive) {
          vn({ B: true });
          var v2, p2, h2 = pn().P.item, w2 = pn().P.index() + 1, b2 = xt(pn().P, e2), S2 = pt("responsiveSlides", "getSectionAnchor", t2) || t2.anchor, y2 = t2.index() + 1, M2 = t2.activeSlide, T2 = { P: h2, sectionIndex: y2 - 1, anchorLink: S2, element: e2, leavingSection: w2, direction: b2, items: { origin: pn().P, destination: t2 } };
          if (M2 && (p2 = M2.anchor, v2 = M2.index()), dn.canScroll)
            k(f2.filter(function(n3) {
              return n3.index() !== t2.index();
            }).map(function(n3) {
              return n3.item;
            }), An), D(e2, An), pt("parallax", "afterLoad"), X(tt().beforeLeave) && Te("beforeLeave", T2), X(tt().onLeave) && It("onLeave", T2), X(tt().afterLoad) && It("afterLoad", T2), pt("resetSliders", "apply", { localIsResizing: dn.W, leavingSection: w2 }), Ft(h2), Vt(e2), Wt(e2), he(S2, y2 - 1), tt().anchors.length && vn({ F: S2 }), Yt(v2, p2, S2), We();
          clearTimeout(yo), yo = setTimeout(function() {
            vn({ B: false });
          }, 100);
        }
        tt().fitToSection && dn.canScroll && (clearTimeout(Mo), Mo = setTimeout(function() {
          dn.R.filter(function(n3) {
            var t3 = n3.item.getBoundingClientRect();
            return Math.round(t3.bottom) === Math.round(m()) || Math.round(t3.top) === 0;
          }).length || De();
        }, tt().tn));
      }
    }
    function xo(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Kt(n2, t3, "k");
      }) : (Kt(n2, "all", "k"), tt().keyboardScrolling = n2);
    }
    function Oo(n2) {
      var t2 = n2.index();
      tt().anchors[t2] !== void 0 && n2.isActive && he(tt().anchors[t2], t2), tt().menu && tt().css3 && C(p(tt().menu)[0], bn) != null && p(tt().menu).forEach(function(n3) {
        Rt.appendChild(n3);
      });
    }
    function Eo() {
      var n2, t2, e2 = pn().P, i2 = pn().P.item;
      D(i2, On), Vt(i2), fe(), Wt(i2), t2 = Ci((n2 = ho()).section), n2.section && t2 && (t2 === void 0 || t2.index() !== T(ze)) || !X(tt().afterLoad) || It("afterLoad", { P: i2, element: i2, direction: null, anchorLink: e2.anchor, sectionIndex: e2.index(), items: { origin: pn().P, destination: pn().P } }), X(tt().afterRender) && It("afterRender"), _(nt(), "afterRender");
    }
    function Do(n2, t2) {
      t2 !== void 0 ? (t2 = t2.replace(/ /g, "").split(",")).forEach(function(t3) {
        Kt(n2, t3, "m");
      }) : Kt(n2, "all", "m"), _(nt(), "setAllowScrolling", { value: n2, Gn: t2 });
    }
    function ko() {
      var n2 = ho(), t2 = n2.section, e2 = n2.cn;
      t2 && (tt().animateAnchor ? Hi(t2, e2) : oo(t2, e2));
    }
    fn.O("onDestroy", function() {
      clearTimeout(yo), clearTimeout(Mo);
    }), fn.O("bindEvents", function() {
      G("scroll", Ao), r.body.addEventListener("scroll", Ao), fn.O("onScrollPageAndSlide", function(n2) {
        Hi(n2.Fn, n2.slideAnchor);
      }), fn.O("onMenuClick", function(n2) {
        Ii(n2.anchor, void 0);
      }), fn.O("onScrollOverflowScrolled", function(n2) {
        (n2.direction === "down" ? fi : di)();
      }), fn.O("scrollPage", function(n2) {
        Ae(n2.destination);
      });
    }), fn.O("onDestroy", function() {
      U("scroll", Ao);
    }), s.getActiveSlide = function() {
      return Ht(pn().P.activeSlide);
    }, s.getScrollX = function() {
      return dn.scrollX;
    }, fn.O("bindEvents", function() {
      fn.O("onDestroy", re), fn.O("landscapeScroll", function(n2) {
        ee(n2.slides, n2.destination);
      }), fn.O("moveSlideRight", function(n2) {
        Pi(n2.section);
      }), fn.O("moveSlideLeft", function(n2) {
        zi(n2.section);
      });
    }), fn.O("bindEvents", function() {
      var n2 = tt().credits.position, t2 = ["left", "right"].indexOf(n2) > -1 ? "".concat(n2, ": 0;") : "", e2 = '\n        <div class="fp-watermark" style="'.concat(t2, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(tt().credits.label, "\n            </a>\n        </div>\n    "), i2 = rn(dn.R), o2 = tt().credits.enabled && !dn.Yn;
      i2 && i2.item && o2 && i2.item.insertAdjacentHTML("beforeend", e2);
    }), function() {
      fn.O("onInitialise", function() {
        var t3, l2;
        vn({ Yn: (tt().licenseKey, t3 = tt().licenseKey, l2 = function(t4) {
          var e3 = parseInt("514").toString(16);
          if (!t4 || t4.length < 29 || t4.split(n2[0]).length === 4)
            return null;
          var i3 = ["Each", "for"][o2()]().join(""), l3 = t4[["split"]]("-"), u2 = [];
          l3[i3](function(n3, t5) {
            if (t5 < 4) {
              var i4 = function(n4) {
                var t6 = n4[n4.length - 1], e4 = ["NaN", "is"][o2()]().join("");
                return window[e4](t6) ? r2(t6) : function(n5) {
                  return n5 - An.length;
                }(t6);
              }(n3);
              u2.push(i4);
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
                i4 !== u2[t5] && (e4 += Math.abs(r2(n3[i4])), isNaN(n3[i4]) || c2++);
              var o3 = a2(e4);
              s2 += o3;
            }
          }), s2 += a2(c2), { Un: new Date(e3 + "T00:00"), Xn: e3.split("-")[2] === 8 * (An.length - 2) + "", _n: s2 };
        }(t3), l2 && (tt().credits && l2 && e2 <= l2.Un && l2._n === t3.split(n2[0])[4] || function(n3) {
          var t4 = i2[o2()]().join("");
          return n3 && t4.indexOf(n3) === 0 && n3.length === t4.length;
        }(t3) || l2.Xn) || false) });
      });
      var n2 = ["-"], t2 = "2022-8-8".split("-"), e2 = new Date(t2[0], t2[1], t2[2]), i2 = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), s.setKeyboardScrolling = xo, s.shared.Qn = Eo, s.setAllowScrolling = Do;
    var jo = {};
    function Lo() {
      return jo;
    }
    var Ro, zo, Po, Co, No = !g(Rt, bt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function Ho(n2) {
      if (zo = r.createElement("div"), Ro = bt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), No || (Ro = Ro.replace("extensions/", "").replace("Extension", "")), zo.innerHTML = Ro, zo = zo.firstChild, "MutationObserver" in window && new MutationObserver(Wo).observe(r.body, { childList: true, subtree: false }), (!No || vt(n2) && s[n2]) && (!function(n3) {
        var t3 = Lo()[n3] !== void 0 && Lo()[n3].length, e2 = [], i2 = false;
        return E(Lo()[n3]) ? e2 = Lo()[n3] : e2.push(Lo()[n3]), e2.forEach(function(e3) {
          var o2 = function() {
            if (r.domain.length) {
              for (var n4 = r.domain.replace(/^(www\.)/, "").split("."); n4.length > 2; )
                n4.shift();
              return n4.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), a2 = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], l2 = bt(a2[0]), u2 = bt(a2[1]), c2 = bt(a2[2]), s2 = bt(a2[3]), f2 = bt(a2[4]), d2 = bt(a2[5]), v2 = tt()[f2 + d2] !== void 0;
          t3 = t3 || v2;
          var p2 = [l2, u2, c2].indexOf(o2) < 0 && o2.length !== 0;
          if (!t3 && !v2 && p2)
            return false;
          var h2 = t3 ? bt(e3) : "";
          h2 = h2.split("_"), console.log("---pepe------"), console.log(h2);
          var g2 = h2.length > 1 && h2[1].indexOf(n3, h2[1].length - n3.length) > -1, m2 = h2.length > 1 && h2[1].toLowerCase().indexOf(f2) > -1, w2 = h2[0].indexOf(o2, h2[0].length - o2.length) < 0, b2 = g2 || m2;
          i2 = i2 || !(w2 && p2 && s2 != h2[0]) && b2 || !p2;
        }), i2;
      }(n2) || !No)) {
        Io();
        var t2 = bt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t2](Io, 2e3);
      }
    }
    function Io() {
      zo && (Co || (Math.random() < 0.5 ? wt(Rt, zo) : j(zo, Rt), Co = true), zo.setAttribute("style", bt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, bt("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function Wo(n2) {
      n2.forEach(function(n3) {
        if (n3.removedNodes[0] && n3.removedNodes[0].isEqualNode(zo)) {
          clearTimeout(Po);
          var t2 = bt("bDIwc2V0VGltZW91dDAzbA==");
          Po = window[t2](Bo, 900);
        }
      });
    }
    function Bo() {
      Co = false;
    }
    function Fo() {
      Be(), We(), tt().scrollBar = tt().scrollBar || tt().hybrid, ot(), function() {
        b(un(nt(), "body"), { height: "100%", position: "relative" }), D(nt(), wn), D(zt, Tn), vn({ K: m() }), k(nt(), Mn), Ue(), pt("parallax", "init");
        for (var n2 = pn().rn, t2 = 0; t2 < n2.length; t2++) {
          var e2 = n2[t2], i2 = e2.wn;
          e2.item.setAttribute("data-fp-styles", V(e2.item, "style")), Pe(e2), Oo(e2), i2.length > 0 && Xe(e2);
        }
        tt().fixedElements && tt().css3 && p(tt().fixedElements).forEach(function(n3) {
          Rt.appendChild(n3);
        }), tt().navigation && ve(), p('iframe[src*="youtube.com/embed/"]', nt()).forEach(function(n3) {
          var t3, e3;
          e3 = V(t3 = n3, "src"), t3.setAttribute("src", e3 + (/\?/.test(e3) ? "&" : "?") + "enablejsapi=1");
        }), pt("fadingEffect", "apply"), pt("waterEffect", "init"), pt("dropEffect", "init"), pt("cards", "init"), tt().scrollOverflow && Ne.bn();
      }(), Do(true), $i(true), ce(tt().autoScrolling, "internal"), ke(), Zt(), r.readyState === "complete" && ko(), G("load", ko), Eo(), No || Ho("l"), Be(), We();
    }
    function Vo() {
      var n2 = tt().licenseKey, t2 = "font-size: 15px;background:yellow;";
      tt().licenseKey.trim() === "" ? (f("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), f("error", "https://github.com/alvarotrigo/fullPage.js#options")) : tt() && dn.Yn || r.domain.indexOf("alvarotrigo.com") > -1 ? n2 && n2.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t2), console.warn("%c https://alvarotrigo.com/fullPage/", t2)) : (f("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), f("error", "https://alvarotrigo.com/fullPage/pricing")), g(zt, Tn) ? f("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (tt().continuousVertical && (tt().loopTop || tt().loopBottom) && (tt().continuousVertical = false, f("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !tt().scrollOverflow || !tt().scrollBar && tt().autoScrolling || f("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !tt().continuousVertical || !tt().scrollBar && tt().autoScrolling || (tt().continuousVertical = false, f("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), tt().anchors.forEach(function(n3) {
        var t3 = [].slice.call(p("[name]")).filter(function(t4) {
          return V(t4, "name") && V(t4, "name").toLowerCase() == n3.toLowerCase();
        }), e2 = [].slice.call(p("[id]")).filter(function(t4) {
          return V(t4, "id") && V(t4, "id").toLowerCase() == n3.toLowerCase();
        });
        if (e2.length || t3.length) {
          f("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var i2 = e2.length ? "id" : "name";
          (e2.length || t3.length) && f("error", '"' + n3 + '" is is being used by another element `' + i2 + "` property");
        }
      }));
    }
    function Zo() {
      return { options: tt(), internals: { container: nt(), canScroll: dn.canScroll, isScrollAllowed: qt(), getDestinationPosition: xe, isTouch: u, c: Ho, getXmovement: oe, removeAnimation: Ot, getTransforms: Et, lazyLoad: Vt, addAnimation: At, performHorizontalMove: ie, landscapeScroll: ee, silentLandscapeScroll: le, keepSlidesPosition: se, silentScroll: kt, styleSlides: Xe, styleSection: Pe, scrollHandler: Ao, getEventsPage: ki, getMSPointer: ji, isReallyTouch: Oi, usingExtension: vt, toggleControlArrows: ne, touchStartHandler: Ei, touchMoveHandler: xi, nullOrSection: Nt, items: { SectionPanel: Ze, SlidePanel: Ye, Item: at }, getVisible: v, getState: pn, updateState: We, getPanels: function() {
        return dn.ln;
      }, getSections: function() {
        return dn.R;
      }, setActiveSection: function(n2) {
        dn.P = n2;
      } } };
    }
    function Go(n2) {
      var t2 = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], e2 = bt(t2[0]), i2 = bt(t2[1]), o2 = tt()[e2 + i2] !== void 0, r2 = "fp_" + n2 + "Extension";
      Lo()[n2] = o2 ? tt()[e2 + i2] : tt()[n2 + i2], s[n2] = window[r2] !== void 0 ? new window[r2]() : null, s[n2] && s[n2].c(n2);
    }
    function Yo(n2, t2) {
      var e2;
      if (Rt = p("body")[0], zt = p("html")[0], Pt = p("html, body"), !g(zt, Tn))
        return e2 = typeof n2 == "string" ? p(n2)[0] : n2, Qn.touchWrapper = e2, function(n3) {
          $n = h({}, Qn, n3), qn = Object.assign({}, $n);
        }(t2), function(n3) {
          Jn = n3;
        }(typeof n2 == "string" ? p(n2)[0] : n2), fn.D("onInitialise"), Vo(), s.getFullpageData = Zo, s.version = "4.0.11", s.test = Object.assign(s.test, { top: "0px", un: "translate3d(0px, 0px, 0px)", sn: function() {
          for (var n3 = [], t3 = 0; t3 < p(tt().sectionSelector, nt()).length; t3++)
            n3.push("translate3d(0px, 0px, 0px)");
          return n3;
        }(), left: function() {
          for (var n3 = [], t3 = 0; t3 < p(tt().sectionSelector, nt()).length; t3++)
            n3.push(0);
          return n3;
        }(), options: tt(), setAutoScrolling: null }), s.shared = Object.assign(s.shared, { Qn: null, Vn: false }), o.fullpage_api = s, o.fullpage_extensions = true, nt() && (fn.D("beforeInit"), Go("continuousHorizontal"), Go("scrollHorizontally"), Go("resetSliders"), Go("interlockedSlides"), Go("responsiveSlides"), Go("fadingEffect"), Go("dragAndMove"), Go("offsetSections"), Go("scrollOverflowReset"), Go("parallax"), Go("cards"), Go("dropEffect"), Go("waterEffect"), pt("dragAndMove", "init"), pt("responsiveSlides", "init"), Fo(), fn.D("bindEvents"), pt("dragAndMove", "turnOffTouch")), o.fullpage_api;
      Vo();
    }
    return s.destroy = function(n2) {
      _(nt(), "destroy", n2), ce(false, "internal"), Do(true), $i(false), xo(false), D(nt(), Mn), fn.D("onDestroy"), pt("dragAndMove", "destroy"), n2 && (kt(0), p("img[data-src], source[data-src], audio[data-src], iframe[data-src]", nt()).forEach(function(n3) {
        ln(n3, "src");
      }), p("img[data-srcset]").forEach(function(n3) {
        ln(n3, "srcset");
      }), q(p("#fp-nav, .fp-slidesNav, .fp-controlArrow")), b(lt(pn().R), { height: "", "background-color": "", padding: "" }), b(lt(pn().slides), { width: "" }), b(nt(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), b(Pt, { overflow: "", height: "" }), k(zt, Tn), k(Rt, Sn), Rt.className.split(/\s+/).forEach(function(n3) {
        n3.indexOf("fp-viewing") === 0 && k(Rt, n3);
      }), lt(pn().ln).forEach(function(n3) {
        tt().scrollOverflow && Ne.Dn(n3), k(n3, "fp-table active " + On), V(n3, "data-fp-styles") && n3.setAttribute("style", V(n3, "data-fp-styles")), g(n3, En) && !Kn && n3.removeAttribute("data-anchor");
      }), Ot(nt()), [kn, Hn, Cn].forEach(function(n3) {
        p(n3, nt()).forEach(function(n4) {
          P(n4);
        });
      }), b(nt(), { "-webkit-transition": "none", transition: "none" }), o.scrollTo(0, 0), [En, Ln, Nn].forEach(function(n3) {
        k(p("." + n3), n3);
      }));
    }, o.fp_easings = h(o.fp_easings, { easeInOutCubic: function(n2, t2, e2, i2) {
      return (n2 /= i2 / 2) < 1 ? e2 / 2 * n2 * n2 * n2 + t2 : e2 / 2 * ((n2 -= 2) * n2 * n2 + 2) + t2;
    } }), o.jQuery && function(n2, t2) {
      n2 && t2 ? n2.fn.fullpage = function(e2) {
        e2 = n2.extend({}, e2, { $: n2 }), new t2(this[0], e2), Object.keys(s).forEach(function(n3) {
          tt().$.fn.fullpage[n3] = s[n3];
        });
      } : f("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(o.jQuery, Yo), Yo;
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
