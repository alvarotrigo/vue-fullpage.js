import { openBlock as Zr, createElementBlock as Gr, renderSlot as Ur } from "vue";
/*!
* vue-fullpage 0.2.14
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
var Kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qr(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
var fr = { exports: {} };
/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/
(function(B, J) {
  (function(ne, oe) {
    B.exports = oe();
  })(Kr, function() {
    var ne, oe, xe, an;
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
    }, xe = Math.pow(2, 53) - 1, an = function(e) {
      var t = function(n) {
        var o = Number(n);
        return isNaN(o) ? 0 : o !== 0 && isFinite(o) ? (o > 0 ? 1 : -1) * Math.floor(Math.abs(o)) : o;
      }(e);
      return Math.min(Math.max(t, 0), xe);
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
      for (var a, l = an(n.length), v = oe(t) ? Object(new t(l)) : new Array(l), f = 0; f < l; )
        a = n[f], v[f] = r ? o === void 0 ? r(a, f) : r.call(o, a, f) : a, f += 1;
      return v.length = l, v;
    }));
    var b = window, A = document, Ee = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), dr = /(Mac|iPhone|iPod|iPad)/i.test(b.navigator.userAgent), Le = "ontouchstart" in b || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Co = !!window.MSInputMethodContext && !!document.documentMode, h = { test: {}, shared: {} };
    function $(e, t) {
      b.console && b.console[e] && b.console[e]("fullPage: " + t);
    }
    function cn(e) {
      return b.getComputedStyle(e).display !== "none";
    }
    function Qe(e) {
      return Array.from(e).filter(function(t) {
        return cn(t);
      });
    }
    function s(e, t) {
      return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(e) : null;
    }
    function Ae(e) {
      e = e || {};
      for (var t = 1, n = arguments.length; t < n; ++t) {
        var o = arguments[t];
        if (o)
          for (var r in o)
            o.hasOwnProperty(r) && r != "__proto__" && r != "constructor" && (Object.prototype.toString.call(o[r]) !== "[object Object]" ? e[r] = o[r] : e[r] = Ae(e[r], o[r]));
      }
      return e;
    }
    function T(e, t) {
      return e != null && e.classList.contains(t);
    }
    function V() {
      return "innerHeight" in b ? b.innerHeight : A.documentElement.offsetHeight;
    }
    function Je() {
      return b.innerWidth;
    }
    function R(e, t) {
      var n;
      for (n in e = me(e), t)
        if (t.hasOwnProperty(n) && n !== null)
          for (var o = 0; o < e.length; o++)
            e[o].style[n] = t[n];
      return e;
    }
    function yt(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.previousElementSibling;
      var n = yt(e);
      return n && D(n, t) ? n : null;
    }
    function $e(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.nextElementSibling;
      var n = $e(e);
      return n && D(n, t) ? n : null;
    }
    function No(e) {
      return e[e.length - 1];
    }
    function fe(e, t) {
      e = je(e) ? e[0] : e;
      for (var n = t != null ? s(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
        if (n[r] == e)
          return o;
        n[r].nodeType == 1 && o++;
      }
      return -1;
    }
    function me(e) {
      return je(e) ? e : [e];
    }
    function bt(e) {
      e = me(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "none";
      return e;
    }
    function sn(e) {
      e = me(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "block";
      return e;
    }
    function je(e) {
      return Object.prototype.toString.call(e) === "[object Array]" || Object.prototype.toString.call(e) === "[object NodeList]";
    }
    function x(e, t) {
      e = me(e);
      for (var n = 0; n < e.length; n++)
        e[n].classList.add(t);
      return e;
    }
    function z(e, t) {
      e = me(e);
      for (var n = t.split(" "), o = 0; o < n.length; o++) {
        t = n[o];
        for (var r = 0; r < e.length; r++)
          e[r].classList.remove(t);
      }
      return e;
    }
    function Be(e, t) {
      t.appendChild(e);
    }
    function un(e, t, n) {
      var o;
      t = t || A.createElement("div");
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (n && !r || !n) && (o = t.cloneNode(!0), a.parentNode.insertBefore(o, a)), o.appendChild(a);
      }
      return e;
    }
    function xt(e, t) {
      un(e, t, !0);
    }
    function fn(e, t) {
      for (typeof t == "string" && (t = we(t)), e.appendChild(t); e.firstChild !== t; )
        t.appendChild(e.firstChild);
    }
    function Et(e) {
      for (var t = A.createDocumentFragment(); e.firstChild; )
        t.appendChild(e.firstChild);
      e.parentNode.replaceChild(t, e);
    }
    function P(e, t) {
      return e && e.nodeType === 1 ? D(e, t) ? e : P(e.parentNode, t) : null;
    }
    function et(e, t) {
      At(e, e.nextSibling, t);
    }
    function Lt(e, t) {
      At(e, e, t);
    }
    function At(e, t, n) {
      je(n) || (typeof n == "string" && (n = we(n)), n = [n]);
      for (var o = 0; o < n.length; o++)
        e.parentNode.insertBefore(n[o], t);
    }
    function Se() {
      var e = A.documentElement;
      return (b.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function ze(e) {
      return Array.prototype.filter.call(e.parentNode.children, function(t) {
        return t !== e;
      });
    }
    function F(e) {
      e.preventDefault();
    }
    function I(e, t) {
      return e.getAttribute(t);
    }
    function Me(e, t, n) {
      A.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function de(e, t, n) {
      b.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function pe(e, t, n) {
      A.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function Ie(e, t, n) {
      b.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function _(e) {
      if (typeof e == "function")
        return !0;
      var t = Object.prototype.toString.call(e);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function U(e, t, n) {
      var o;
      n = n === void 0 ? {} : n, typeof b.CustomEvent == "function" ? o = new CustomEvent(t, { detail: n }) : (o = A.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
    }
    function D(e, t) {
      return (e.matches || e.t || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function Mt(e, t) {
      if (typeof t == "boolean")
        for (var n = 0; n < e.length; n++)
          e[n].style.display = t ? "block" : "none";
      return e;
    }
    function we(e) {
      var t = A.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild;
    }
    function Te(e) {
      e = me(e);
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n && n.parentElement && n.parentNode.removeChild(n);
      }
    }
    function ko(e, t) {
      Array.prototype.filter.call(e, t);
    }
    function Tt(e, t, n) {
      for (var o = e[n], r = []; o; )
        (D(o, t) || t == null) && r.push(o), o = o[n];
      return r;
    }
    function dn(e, t) {
      return Tt(e, t, "nextElementSibling");
    }
    function pn(e, t) {
      return Tt(e, t, "previousElementSibling");
    }
    function Ho(e) {
      return Object.keys(e).map(function(t) {
        return e[t];
      });
    }
    function ce(e) {
      return e[e.length - 1];
    }
    function tt(e, t) {
      for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++)
        n += o[r];
      return Math.ceil(n / t);
    }
    function Pt(e, t) {
      e.setAttribute(t, I(e, "data-" + t)), e.removeAttribute("data-" + t);
    }
    function jo(e, t) {
      var n = [e];
      do
        e = e.parentNode, n.push(e);
      while (!D(e, t));
      return n;
    }
    function vn() {
      var e = A.activeElement;
      return D(e, "textarea") || D(e, "input") || D(e, "select") || I(e, "contentEditable") == "true" || I(e, "contentEditable") == "";
    }
    b.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, t) {
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
    }, writable: !0, i: !0 }), window.fp_utils = { $: s, deepExtend: Ae, hasClass: T, getWindowHeight: V, css: R, prev: yt, next: $e, last: No, index: fe, getList: me, hide: bt, show: sn, isArrayOrList: je, addClass: x, removeClass: z, appendTo: Be, wrap: un, wrapAll: xt, wrapInner: fn, unwrap: Et, closest: P, after: et, before: Lt, insertBefore: At, getScrollTop: Se, siblings: ze, preventDefault: F, isFunction: _, trigger: U, matches: D, toggle: Mt, createElementFromHTML: we, remove: Te, filter: ko, untilAll: Tt, nextAll: dn, prevAll: pn, showError: $ };
    var Bo = Object.freeze({ __proto__: null, showError: $, isVisible: cn, getVisible: Qe, $: s, deepExtend: Ae, hasClass: T, getWindowHeight: V, o: Je, css: R, prev: yt, next: $e, last: No, index: fe, getList: me, hide: bt, show: sn, isArrayOrList: je, addClass: x, removeClass: z, appendTo: Be, wrap: un, wrapAll: xt, wrapInner: fn, unwrap: Et, closest: P, after: et, before: Lt, insertBefore: At, getScrollTop: Se, siblings: ze, preventDefault: F, l: I, u: Me, v: de, p: pe, h: Ie, isFunction: _, trigger: U, matches: D, toggle: Mt, createElementFromHTML: we, remove: Te, filter: ko, untilAll: Tt, nextAll: dn, prevAll: pn, toArray: Ho, g: ce, S: tt, M: Pt, T: jo, A: vn });
    function nt(e) {
      return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, nt(e);
    }
    var d = { O: {}, R: function(e, t) {
      var n = this;
      return nt(this.O[e]) !== "object" && (this.O[e] = []), this.O[e].push(t), function() {
        return n.removeListener(e, t);
      };
    }, removeListener: function(e, t) {
      if (nt(this.O[e]) === "object") {
        var n = this.O[e].indexOf(t);
        n > -1 && this.O[e].splice(n, 1);
      }
    }, L: function(e) {
      for (var t = this, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        o[r - 1] = arguments[r];
      nt(this.O[e]) === "object" && this.O[e].forEach(function(a) {
        return a.apply(t, o);
      });
    }, once: function(e, t) {
      var n = this, o = this.R(e, function() {
        o();
        for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
          a[l] = arguments[l];
        t.apply(n, a);
      });
    } }, c = { j: 0, D: 0, slides: [], N: [], P: null, H: null, C: !1, I: !1, W: !1, F: !1, V: !1, Z: void 0, B: void 0, G: !1, canScroll: !0, Y: "none", U: "none", X: !1, _: !1, J: !0, K: 0, q: V(), nn: !1, tn: {} };
    function p(e) {
      Object.assign(c, e);
    }
    function u() {
      return c;
    }
    b.state = c;
    var hn = "onAfterRenderNoAnchor", Ot = "onClickOrTouch", gn = "moveSlideLeft", mn = "moveSlideRight", zo = "onInitialise", q = "bindEvents", le = "onDestroy", Io = "contentChanged", _o = "onScrollOverflowScrolled", Sn = "onScrollPageAndSlide", Do = "onKeyDown", Fo = "onMenuClick", Yo = "scrollPage", Vo = "landscapeScroll", Wo = "scrollBeyondFullpage", Xo = "onPerformMovement", Zo = "onSlideLeave", Go = "onLeave", wn = "afterSectionLoads", yn = "afterSlideLoads";
    function Uo(e) {
      d.L(Ot, { e, target: e.target });
    }
    function pr() {
      ["click", "touchstart"].forEach(function(e) {
        pe(e, Uo, { passive: !1 });
      });
    }
    function vr() {
      p({ J: !0 });
    }
    d.R(q, function() {
      ["click", "touchstart"].forEach(function(e) {
        Me(e, Uo, { passive: !1 });
      }), de("focus", vr), d.R(le, pr);
    });
    var bn = "fullpage-wrapper", Pe = "." + bn, Rt = "fp-responsive", xn = "fp-notransition", En = "fp-destroyed", Ct = "fp-enabled", N = "active", Ln = ".active", _e = "fp-completely", Nt = "fp-section", ee = "." + Nt, hr = ".fp-tableCell", Oe = "#fp-nav", An = "fp-slide", Mn = "." + An, kt = ".fp-slide.active", Ht = "fp-slides", ve = ".fp-slides", Tn = "fp-slidesContainer", ot = "." + Tn, Ko = "fp-table", De = "fp-overflow", it = "." + De, rt = "fp-is-overflow", Pn = ".fp-slidesNav", qo = ".fp-slidesNav a", Qo = "fp-controlArrow", On = "." + Qo, Jo = "fp-prev", Rn = ".fp-controlArrow.fp-prev", $o = ".fp-controlArrow.fp-next", jt = { menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, licenseKey: "", credits: { enabled: !0, label: "Made with fullPage.js", position: "right" }, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, en: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !0, scrollOverflowReset: !1, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, allowCorrectDirection: !1, scrollOverflowMacStyle: !0, controlArrows: !0, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: !0, observer: !0 }, lt = null, ei = !1, Cn = Ae({}, jt), Bt = null;
    function g(e) {
      return lt;
    }
    function i() {
      return Bt || jt;
    }
    function Fe() {
      return Cn;
    }
    function zt(e, t, n) {
      Bt[e] = t, n !== "internal" && (Cn[e] = t);
    }
    function ti() {
      if (!i().anchors.length) {
        var e = s(i().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", lt);
        e.length && e.length === s(i().sectionSelector, lt).length && (ei = !0, e.forEach(function(n) {
          i().anchors.push(I(n, "data-anchor").toString());
        }));
      }
      if (!i().navigationTooltips.length) {
        var t = s(i().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", lt);
        t.length && t.forEach(function(n) {
          i().navigationTooltips.push(I(n, "data-tooltip").toString());
        });
      }
    }
    function ni(e) {
      return window["fp_" + e + "Extension"] !== void 0;
    }
    function j(e) {
      var t = i();
      return t[e] !== null && Object.prototype.toString.call(t[e]) === "[object Array]" ? t[e].length && h[e] : t[e] && h[e];
    }
    function m(e, t, n) {
      if (j(e))
        return _(h[e][t]) ? h[e][t](n) : h[e][t];
    }
    function It() {
      return m("dragAndMove", "isAnimating");
    }
    function oi() {
      return m("dragAndMove", "isGrabbing");
    }
    function Nn(e) {
      if (i().offsetSections && h.offsetSections) {
        var t = m("offsetSections", "getWindowHeight", e);
        return t !== "" ? Math.round(t) + "px" : t;
      }
      return V() + "px";
    }
    function ii(e, t) {
      e.insertBefore(t, e.firstChild);
    }
    function K(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(r) {
        var a, l, v, f, y, E, w = "", M = 0;
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ""); M < r.length; )
          a = t.indexOf(r.charAt(M++)) << 2 | (f = t.indexOf(r.charAt(M++))) >> 4, l = (15 & f) << 4 | (y = t.indexOf(r.charAt(M++))) >> 2, v = (3 & y) << 6 | (E = t.indexOf(r.charAt(M++))), w += String.fromCharCode(a), y != 64 && (w += String.fromCharCode(l)), E != 64 && (w += String.fromCharCode(v));
        return w = function(O) {
          for (var X, Y = "", k = 0, H = 0, L = 0; k < O.length; )
            (H = O.charCodeAt(k)) < 128 ? (Y += String.fromCharCode(H), k++) : H > 191 && H < 224 ? (L = O.charCodeAt(k + 1), Y += String.fromCharCode((31 & H) << 6 | 63 & L), k += 2) : (L = O.charCodeAt(k + 1), X = O.charCodeAt(k + 2), Y += String.fromCharCode((15 & H) << 12 | (63 & L) << 6 | 63 & X), k += 3);
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
    b.fp_utils = b.fp_utils || {}, Object.assign(b.fp_utils, { prependTo: ii, toggleClass: function(e, t, n) {
      if (e.classList && n == null)
        e.classList.toggle(t);
      else {
        var o = T(e, t);
        o && n == null || !n ? z(e, t) : (!o && n == null || n) && x(e, t);
      }
    } });
    var ri = function(e) {
      this.anchor = e.anchor, this.item = e.item, this.index = e.index(), this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1, this.isFirst = !this.index, this.isActive = e.isActive;
    }, ae = function(e, t) {
      this.parent = this.parent || null, this.selector = t, this.anchor = I(e, "data-anchor") || i().anchors[fe(e, i().sectionSelector)], this.item = e, this.isVisible = cn(e), this.isActive = T(e, N), this.on = T(e, De) || s(it, e)[0] != null, this.rn = t === i().sectionSelector, this.container = P(e, ot) || P(e, Pe), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function kn(e) {
      return e.map(function(t) {
        return t.item;
      });
    }
    function Hn(e, t) {
      return e.find(function(n) {
        return n.item === t;
      });
    }
    ae.prototype.siblings = function() {
      return this.rn ? this.isVisible ? c.N : c.an : this.parent ? this.parent.slides : 0;
    }, ae.prototype.prev = function() {
      var e = this.siblings(), t = (this.rn ? e.indexOf(this) : this.parent.slides.indexOf(this)) - 1;
      return t >= 0 ? e[t] : null;
    }, ae.prototype.next = function() {
      var e = this.siblings(), t = (this.rn ? e.indexOf(this) : this.parent.slides.indexOf(this)) + 1;
      return t < e.length ? e[t] : null;
    }, ae.prototype.prevPanel = function() {
      return this === this.prev() ? this.parent ? this.parent.prev() : null : this.prev() || (this.parent ? this.parent.prev() : null);
    }, ae.prototype.nextPanel = function() {
      return this === this.next() ? this.parent ? this.parent.next() : null : this.next() || (this.parent ? this.parent.next() : null);
    }, ae.prototype.ln = function() {
      return this.rn ? c.N : c.un;
    };
    var li, ai = function(e) {
      ri.call(this, e);
    }, gr = function(e) {
      ri.call(this, e);
    };
    function Re(e) {
      var t = s(kt, e);
      return t.length && (e = t[0]), e;
    }
    function ci(e) {
      return e ? e.activeSlide ? e.activeSlide : e : null;
    }
    function Ye(e) {
      var t, n, o = i();
      return o.autoScrolling && !o.scrollBar ? (t = -e, n = s(Pe)[0]) : (t = e, n = window), { options: t, element: n };
    }
    function si(e, t) {
      !i().autoScrolling || i().scrollBar || e.self != window && T(e, Ht) ? e.self != window && T(e, Ht) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }
    function jn(e) {
      var t = "transform " + i().scrollingSpeed + "ms " + i().easingcss3;
      return z(e, xn), R(e, { "-webkit-transition": t, transition: t });
    }
    function Bn(e, t) {
      var n = e.index(), o = fe(t, ee);
      return n == o ? "none" : n > o ? "up" : "down";
    }
    function _t(e) {
      return x(e, xn);
    }
    function zn(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function ui(e, t) {
      t ? jn(g()) : _t(g()), clearTimeout(li), R(g(), zn(e)), h.test.cn = e, li = setTimeout(function() {
        z(g(), xn);
      }, 10);
    }
    function Ce(e) {
      var t = Math.round(e);
      if (i().css3 && i().autoScrolling && !i().scrollBar)
        ui("translate3d(0px, -" + t + "px, 0px)", !1);
      else if (i().autoScrolling && !i().scrollBar)
        R(g(), { top: -t + "px" }), h.test.top = -t + "px";
      else {
        var n = Ye(t);
        si(n.element, n.options);
      }
    }
    function at(e, t) {
      t !== "internal" && m("fadingEffect", "update", e), m("cards", "update_", e), zt("scrollingSpeed", e, t);
    }
    h.setScrollingSpeed = at;
    var ct, C = null, st = null, Dt = null;
    function Ft(e, t, n, o) {
      var r, a = function(y) {
        return y.self != b && T(y, Ht) ? y.scrollLeft : !i().autoScrolling || i().scrollBar ? Se() : y.offsetTop;
      }(e), l = t - a, v = !1, f = c.G;
      p({ G: !0 }), ct && window.cancelAnimationFrame(ct), ct = function(y) {
        r || (r = y);
        var E = Math.floor(y - r);
        if (c.G) {
          var w = t;
          n && (w = b.fp_easings[i().easing](E, a, l, n)), E <= n && si(e, w), E < n ? window.requestAnimationFrame(ct) : o === void 0 || v || (o(), p({ G: !1 }), v = !0);
        } else
          v || f || (o(), p({ G: !1 }), v = !0);
      }, window.requestAnimationFrame(ct);
    }
    function ye(e) {
      return e && !e.item ? new ai(new He(e)) : e ? new ai(e) : null;
    }
    function In(e) {
      return e ? new gr(e) : null;
    }
    function se(e, t) {
      var n = function(o, r) {
        var a = { afterRender: function() {
          return { section: ye(u().P), sn: In(u().P.activeSlide) };
        }, onLeave: function() {
          return { origin: ye(r.items.origin), destination: ye(r.items.destination), direction: r.direction, trigger: u().H };
        }, afterLoad: function() {
          return a.onLeave();
        }, afterSlideLoad: function() {
          return { section: ye(r.items.section), origin: ye(r.items.origin), destination: ye(r.items.destination), direction: r.direction, trigger: u().H };
        }, onSlideLeave: function() {
          return a.afterSlideLoad();
        }, beforeLeave: function() {
          return a.onLeave();
        }, onScrollOverflow: function() {
          return { section: ye(u().P), sn: In(u().P.activeSlide), position: r.position, direction: r.direction };
        } };
        return a[o]();
      }(e, t);
      return U(g(), e, n), i()[e].apply(n[Object.keys(n)[0]], Ho(n)) !== !1;
    }
    function Yt(e) {
      var t = Re(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && typeof n.play == "function" && n.play();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        n.hasAttribute("data-autoplay") && fi(n), n.onload = function() {
          n.hasAttribute("data-autoplay") && fi(n);
        };
      });
    }
    function fi(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function _n(e) {
      var t = Re(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-keepplaying") || typeof n.pause != "function" || n.pause();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        /youtube\.com\/embed\//.test(I(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function Ve(e) {
      i().lazyLoading && s("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Re(e)).forEach(function(t) {
        if (["src", "srcset"].forEach(function(o) {
          var r = I(t, "data-" + o);
          r != null && r && (Pt(t, o), t.addEventListener("load", function() {
          }));
        }), D(t, "source")) {
          var n = P(t, "video, audio");
          n && (n.load(), n.onloadeddata = function() {
          });
        }
      });
    }
    function di() {
      var e = u().P.item, t = u().P.activeSlide, n = pi(e), o = String(n);
      t && (o = o + "-" + pi(t.item)), o = o.replace("/", "-").replace("#", "");
      var r = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      C.className = C.className.replace(r, ""), x(C, "fp-viewing-" + o);
    }
    function pi(e) {
      if (!e)
        return null;
      var t = I(e, "data-anchor"), n = fe(e);
      return t == null && (t = n), t;
    }
    function Dn(e, t, n) {
      var o = "";
      i().anchors.length && !i().lockAnchors && (e ? (n != null && (o = n), t == null && (t = e), p({ B: t }), Fn(o + "/" + t)) : (e != null && p({ B: t }), Fn(n))), di();
    }
    function Fn(e) {
      if (i().recordHistory)
        location.hash = e;
      else if (Ee || Le)
        b.history.replaceState(void 0, void 0, "#" + e);
      else {
        var t = b.location.href.split("#")[0];
        b.location.replace(t + "#" + e);
      }
    }
    function vi(e, t, n) {
      var o = t === "Section" ? i().anchors[e] : I(n, "data-anchor");
      return encodeURI(i().navigationTooltips[e] || o || t + " " + (e + 1));
    }
    function mr(e) {
      e.cancelable && F(e), p({ H: "horizontalNav" });
      var t = P(this, ee), n = s(ve, P(this, ee))[0], o = Hn(u().N, t).slides[fe(P(this, "li"))];
      d.L(Vo, { slides: n, destination: o.item });
    }
    function hi(e, t) {
      i().slidesNavigation && e != null && (z(s(Ln, e), N), x(s("a", s("li", e)[t]), N));
    }
    var Vt, Ne = {};
    function Wt(e, t, n) {
      t !== "all" ? Ne[n][t] = e : Object.keys(Ne[n]).forEach(function(o) {
        Ne[n][o] = e;
      });
    }
    function W() {
      return Ne;
    }
    function Sr() {
      var e = P(this, ee);
      T(this, Jo) ? W().m.left && (p({ H: "slideArrow" }), d.L(gn, { section: e })) : W().m.right && (p({ H: "slideArrow" }), d.L(mn, { section: e }));
    }
    function gi(e) {
      !i().loopHorizontal && i().controlArrows && (Mt(s(Rn, e.section), e.slideIndex !== 0), Mt(s($o, e.section), $e(e.destiny) != null));
    }
    function wr() {
      clearTimeout(Vt), p({ W: !1 });
    }
    function ke(e, t, n) {
      var o = P(e, ee), r = u().N.filter(function(v) {
        return v.item == o;
      })[0], a = r.slides.filter(function(v) {
        return v.item == t;
      })[0], l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: a.index(), section: o, sectionIndex: r.index(), anchorLink: r.anchor, slidesNav: s(Pn, o)[0], slideAnchor: a.anchor, prevSlide: r.activeSlide.item, prevSlideIndex: r.activeSlide.index(), items: { section: r, origin: r.activeSlide, destination: a }, localIsResizing: c.F };
      l.xMovement = Si(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || p({ canScroll: !1 }), m("parallax", "applyHorizontal", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), i().onSlideLeave && !l.localIsResizing && l.xMovement !== "none" && _(i().onSlideLeave) && se("onSlideLeave", l) === !1 ? p({ W: !1 }) : (j("dropEffect") && i().dropEffect || (x(t, N), z(ze(t), N)), ue(), l.localIsResizing || (_n(l.prevSlide), Ve(t)), gi(l), r.isActive && !l.localIsResizing && Dn(l.slideIndex, l.slideAnchor, l.anchorLink), m("continuousHorizontal", "apply", l), d.L(Zo, l), oi() ? Yn(l) : mi(e, l, !0), i().interlockedSlides && h.interlockedSlides && (j("continuousHorizontal") && n !== void 0 && n !== l.xMovement || m("interlockedSlides", "apply", l)));
    }
    function mi(e, t, n) {
      var o = t.destinyPos;
      if (hi(t.slidesNav, t.slideIndex), p({ scrollX: Math.round(o.left) }), i().css3) {
        var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
        h.test.dn[t.sectionIndex] = r, j("dragAndMove") && t.vn !== void 0 || jn(s(ot, e)), R(s(ot, e), zn(r)), j("interlockedSlides") || clearTimeout(Vt), Vt = setTimeout(function() {
          n && Yn(t);
        }, i().scrollingSpeed);
      } else
        h.test.left[t.sectionIndex] = Math.round(o.left), Ft(e, Math.round(o.left), i().scrollingSpeed, function() {
          n && Yn(t);
        });
    }
    function Si(e, t) {
      return e == t ? "none" : e > t ? "left" : "right";
    }
    function yr() {
      clearTimeout(Vt);
    }
    function Yn(e) {
      m("continuousHorizontal", "afterSlideLoads", e), m("dragAndMove", "afterSlideLoads", e), e.localIsResizing || (m("parallax", "afterSlideLoads"), m("scrollOverflowReset", "setPrevious", e.prevSlide), m("scrollOverflowReset", "reset"), _(i().afterSlideLoad) && se("afterSlideLoad", e), p({ canScroll: !0 }), Yt(e.destiny), d.L(yn, e)), p({ W: !1 }), m("interlockedSlides", "interlockedSlides", e);
    }
    function ut(e, t) {
      at(0, "internal"), t !== void 0 && p({ F: !0 }), ke(P(e, ve), e), t !== void 0 && p({ F: !1 }), at(Fe().scrollingSpeed, "internal");
    }
    function Vn(e, t) {
      zt("recordHistory", e, t);
    }
    function We(e, t) {
      e || Ce(0), zt("autoScrolling", e, t);
      var n = u().P.item;
      if (i().autoScrolling && !i().scrollBar)
        R(Dt, { overflow: "hidden", height: "100%" }), z(C, "fp-scrollable"), Vn(Fe().recordHistory, "internal"), R(g(), { "-ms-touch-action": "none", "touch-action": "none" }), n != null && Ce(n.offsetTop);
      else if (R(Dt, { overflow: "visible", height: "initial" }), x(C, "fp-scrollable"), Vn(!!i().autoScrolling && Fe().recordHistory, "internal"), R(g(), { "-ms-touch-action": "", "touch-action": "" }), _t(g()), n != null) {
        var o = Ye(n.offsetTop);
        o.element.scrollTo(0, o.options);
      }
      U(g(), "setAutoScrolling", e);
    }
    function Wn() {
      for (var e = s(kt), t = 0; t < e.length; t++)
        ut(e[t], "internal");
    }
    function wi() {
      var e = s(".fp-auto-height")[0] || Jn() && s(".fp-auto-height-responsive")[0];
      i().lazyLoading && e && s(".fp-section:not(.active)").forEach(function(t) {
        var n, o, r, a, l;
        o = (n = t.getBoundingClientRect()).top, r = n.bottom, a = o + 2 < c.q && o > 0, l = r > 2 && r < c.q, (a || l) && Ve(t);
      });
    }
    function br() {
      U(yt(this), "click");
    }
    function yi() {
      Te(s(Oe));
      var e = A.createElement("div");
      e.setAttribute("id", "fp-nav");
      var t = A.createElement("ul");
      e.appendChild(t), Be(e, C);
      var n = s(Oe)[0];
      x(n, "fp-" + i().navigationPosition), i().showActiveTooltip && x(n, "fp-show-active");
      for (var o = "", r = 0; r < u().N.length; r++) {
        var a = u().N[r], l = "";
        i().anchors.length && (l = a.anchor), o += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + vi(a.index(), "Section") + "</span><span></span></a>";
        var v = i().navigationTooltips[a.index()];
        v !== void 0 && v !== "" && (o += '<div class="fp-tooltip fp-' + i().navigationPosition + '">' + v + "</div>"), o += "</li>";
      }
      s("ul", n)[0].innerHTML = o;
      var f = s("li", s(Oe)[0])[u().P.index()];
      x(s("a", f), N);
    }
    function xr(e) {
      e.preventDefault && F(e), p({ H: "verticalNav" });
      var t = fe(P(this, "#fp-nav li"));
      d.L(Yo, { destination: u().N[t] });
    }
    function Xn(e, t) {
      var n;
      n = e, i().menu && i().menu.length && s(i().menu).forEach(function(o) {
        o != null && (z(s(Ln, o), N), x(s('[data-menuanchor="' + n + '"]', o), N));
      }), function(o, r) {
        var a = s(Oe)[0];
        i().navigation && a != null && a.style.display !== "none" && (z(s(Ln, a), N), x(o ? s('a[href="#' + o + '"]', a) : s("a", s("li", a)[r]), N));
      }(e, t);
    }
    Ne.m = { up: !0, down: !0, left: !0, right: !0 }, Ne.k = Ae({}, Ne.m), d.R(Ot, function(e) {
      var t = e.target;
      (D(t, On) || P(t, On)) && Sr.call(t, e);
    }), h.landscapeScroll = ke, d.R(q, function() {
      d.R(Xo, wr);
    }), h.setRecordHistory = Vn, h.setAutoScrolling = We, h.test.setAutoScrolling = We, (/* @__PURE__ */ new Date()).getTime();
    var Zn, Gn, Un, Kn, ft, qn, Er = (Gn = !0, Un = (/* @__PURE__ */ new Date()).getTime(), Kn = !b.fullpage_api, function(e, t) {
      var n = (/* @__PURE__ */ new Date()).getTime(), o = e === "wheel" ? i().scrollingSpeed : 100;
      return Gn = Kn || n - Un >= o, Kn = !b.fullpage_api, Gn && (Zn = t(), Un = n), Zn === void 0 || Zn;
    });
    function bi(e, t) {
      if (_(i().beforeLeave))
        return Er(u().H, function() {
          return se(e, t);
        });
    }
    function Xe(e, t, n) {
      var o = e.item;
      if (o != null) {
        var r, a, l = { element: o, callback: t, isMovementUp: n, dtop: xi(o), yMovement: Bn(u().P, o), anchorLink: e.anchor, sectionIndex: e.index(), activeSlide: e.activeSlide ? e.activeSlide.item : null, leavingSection: u().P.index() + 1, localIsResizing: c.F, items: { origin: u().P, destination: e }, direction: null };
        if (!(u().P.item == o && !c.F || i().scrollBar && Se() === l.dtop && !T(o, "fp-auto-height"))) {
          if (l.activeSlide != null && (r = I(l.activeSlide, "data-anchor"), a = fe(l.activeSlide, null)), !l.localIsResizing) {
            var v = l.yMovement;
            if (n !== void 0 && (v = n ? "up" : "down"), l.direction = v, ni("dropEffect") && h.dropEffect.onLeave_(l), ni("waterEffect") && h.waterEffect.onLeave_(l), _(i().beforeLeave) && bi("beforeLeave", l) === !1 || _(i().onLeave) && !se("onLeave", l))
              return;
          }
          m("parallax", "apply", l), m("cards", "apply", l), m("dropEffect", "apply", l), m("waterEffect", "apply", l), i().autoScrolling && i().continuousVertical && l.isMovementUp !== void 0 && (!l.isMovementUp && l.yMovement == "up" || l.isMovementUp && l.yMovement == "down") && (l = function(f) {
            p({ nn: !0 });
            var y = u().P.item;
            return f.isMovementUp ? Lt(y, dn(y, ee)) : et(y, pn(y, ee).reverse()), Ce(u().P.item.offsetTop), Wn(), f.pn = y, f.dtop = f.element.offsetTop, f.yMovement = Bn(u().P, f.element), f.leavingSection = f.items.origin.index() + 1, f.sectionIndex = f.items.destination.index(), U(g(), "onContinuousVertical", f), f;
          }(l)), m("scrollOverflowReset", "setPrevious", u().P.item), l.localIsResizing || _n(u().P.item), j("dropEffect") && i().dropEffect || (x(o, N), z(ze(o), N)), ue(), Ve(o), p({ canScroll: h.test.hn }), Dn(a, r, l.anchorLink), d.L(Go, l), function(f) {
            var y = i().scrollingSpeed < 700, E = y ? 700 : i().scrollingSpeed;
            if (p({ Y: "none", scrollY: Math.round(f.dtop) }), d.L(Xo), i().css3 && i().autoScrolling && !i().scrollBar)
              ui("translate3d(0px, -" + Math.round(f.dtop) + "px, 0px)", !0), j("waterEffect") && Wn(), i().scrollingSpeed ? (clearTimeout(ft), ft = setTimeout(function() {
                Xt(f), p({ canScroll: !y || h.test.hn });
              }, i().scrollingSpeed)) : Xt(f);
            else {
              var w = Ye(f.dtop);
              h.test.top = -f.dtop + "px", clearTimeout(ft), Ft(w.element, w.options, i().scrollingSpeed, function() {
                i().scrollBar ? ft = setTimeout(function() {
                  Xt(f);
                }, 30) : (Xt(f), p({ canScroll: !y || h.test.hn }));
              });
            }
            y && (clearTimeout(qn), qn = setTimeout(function() {
              p({ canScroll: !0 });
            }, E));
          }(l), p({ Z: l.anchorLink }), Xn(l.anchorLink, function(f) {
            return f.pn != null ? f.isMovementUp ? c.j - 1 : 0 : f.sectionIndex;
          }(l));
        }
      }
    }
    function xi(e) {
      var t = e.offsetHeight, n = e.offsetTop, o = n, r = j("dragAndMove") && m("dragAndMove", "isGrabbing") ? m("dragAndMove", "isScrollingDown") : n > c.K, a = o - V() + t, l = i().bigSectionsDestination;
      return t > V() ? (r || l) && l !== "bottom" || (o = a) : (r || c.F && $e(e) == null) && (o = a), j("offsetSections") && (o = h.offsetSections.getSectionPosition_(r, o, e)), p({ K: o }), o;
    }
    function Xt(e) {
      p({ C: !1 }), function(t) {
        t.pn != null && (t.isMovementUp ? Lt(s(ee)[0], t.pn) : et(s(ee)[u().N.length - 1], t.pn), Ce(u().P.item.offsetTop), function() {
          for (var n = s(kt), o = 0; o < n.length; o++)
            ut(n[o], "internal");
        }(), t.sectionIndex = t.items.destination.index(), t.leavingSection = t.items.origin.index() + 1, p({ nn: !1 }));
      }(e), _(i().afterLoad) && !e.localIsResizing && se("afterLoad", e), m("parallax", "afterLoad"), m("waterEffect", "afterLoad"), m("dropEffect", "afterLoad"), m("scrollOverflowReset", "reset"), m("resetSliders", "apply", e), ue(), e.localIsResizing || Yt(e.element), x(e.element, _e), z(ze(e.element), _e), wi(), p({ canScroll: !0 }), d.L(wn, e), _(e.callback) && e.callback();
    }
    function Qn(e, t) {
      zt("fitToSection", e, t);
    }
    function Ei() {
      c.canScroll && (p({ F: !0 }), Xe(c.P), p({ F: !1 }));
    }
    function Li() {
      var e = i().responsive || i().responsiveWidth, t = i().responsiveHeight, n = e && b.innerWidth < e, o = t && b.innerHeight < t;
      e && t ? Zt(n || o) : e ? Zt(n) : t && Zt(o);
    }
    function Zt(e) {
      var t = Jn();
      e ? t || (We(!1, "internal"), Qn(!1, "internal"), bt(s(Oe)), x(C, Rt), _(i().afterResponsive) && i().afterResponsive.call(g(), e), m("responsiveSlides", "toSections"), U(g(), "afterResponsive", e)) : t && (We(Fe().autoScrolling, "internal"), Qn(Fe().autoScrolling, "internal"), sn(s(Oe)), z(C, Rt), _(i().afterResponsive) && i().afterResponsive.call(g(), e), m("responsiveSlides", "toSlides"), U(g(), "afterResponsive", e));
    }
    function Jn() {
      return T(C, Rt);
    }
    function Ai(e) {
      i().verticalCentered && (!i().scrollOverflow && S.gn(e.item) || S.mn(e) || T(e.item, Ko) || x(e.item, Ko));
    }
    h.moveTo = moveTo, h.getScrollY = function() {
      return c.scrollY;
    }, d.R(le, function() {
      clearTimeout(ft), clearTimeout(qn);
    }), h.setFitToSection = Qn, h.fitToSection = Ei, h.setResponsive = Zt;
    var $n, Mi = null;
    function eo(e) {
      var t = e.item, n = e.wn.length, o = e.index();
      !u().P && e.isVisible && (x(t, N), ue(), Mi = u().P.item), j("offsetSections") && R(t, { height: Nn(t) }), i().paddingTop && R(t, { "padding-top": i().paddingTop }), i().paddingBottom && R(t, { "padding-bottom": i().paddingBottom }), i().sectionsColor[o] !== void 0 && R(t, { "background-color": i().sectionsColor[o] }), i().anchors[o] !== void 0 && t.setAttribute("data-anchor", e.anchor), n || Ai(e);
    }
    function Ti() {
      i().scrollOverflow && !i().scrollBar && (S.bn(), S.Sn());
    }
    function Lr() {
      d.removeListener(hn, Ti), pe("keyup", S.yn);
    }
    h.getActiveSection = function() {
      return u().P;
    }, d.R(q, function() {
      d.R(hn, Ti), d.R(Go, S.onLeave), d.R(Zo, S.onLeave), d.R(yn, S.afterLoad), d.R(wn, S.afterLoad), d.R(le, Lr), Me("keyup", S.yn);
    });
    var to, S = { Mn: null, Tn: !0, An: !0, xn: null, On: null, kn: function(e) {
      if (!c.canScroll)
        return F(e), !1;
    }, En: function(e) {
      if (!vn() && i().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !S.An)
        return F(e), !1;
    }, yn: function() {
      S.Tn = c.canScroll;
    }, onLeave: function() {
      clearTimeout($n), S.An = !1;
    }, afterLoad: function() {
      S.An = !1, clearTimeout($n), $n = setTimeout(function() {
        S.Tn = c.canScroll;
      }, 200);
    }, Rn: function() {
      A.activeElement === this.Mn && (this.Mn.blur(), S.An = !1);
    }, Sn: function() {
      if (i().scrollOverflow && S.Tn) {
        S.Rn();
        var e = S.Ln(u().P.item);
        !e || Ee || Le || (this.Mn = e, requestAnimationFrame(function() {
          e.focus(), S.An = !0;
        })), S.Tn = !1;
      }
    }, bn: function() {
      i().scrollOverflowMacStyle && !dr && x(C, "fp-scroll-mac"), u().un.forEach(function(e) {
        if (!(e.slides && e.slides.length || T(e.item, "fp-auto-height-responsive") && Jn())) {
          var t, n = Re(e.item), o = S.gn(e.item), r = (t = e).rn ? t : t.parent;
          if (Co) {
            var a = o ? "addClass" : "removeClass";
            Bo[a](r.item, rt), Bo[a](e.item, rt);
          } else
            x(r.item, rt), x(e.item, rt);
          e.on || (S.jn(n), S.zn(n)), e.on = !0;
        }
      });
    }, zn: function(e) {
      S.Ln(e).addEventListener("scroll", S.Dn), e.addEventListener("wheel", S.kn, { passive: !1 }), e.addEventListener("keydown", S.En, { passive: !1 });
    }, jn: function(e) {
      var t = document.createElement("div");
      t.className = De, fn(e, t), t.setAttribute("tabindex", "-1");
    }, Nn: function(e) {
      var t = s(it, e)[0];
      t && (Et(t), e.removeAttribute("tabindex"));
    }, Ln: function(e) {
      var t = Re(e);
      return s(it, t)[0] || t;
    }, on: function(e) {
      return T(e, De) || s(it, e)[0] != null;
    }, mn: function(e) {
      return e.rn && e.activeSlide ? e.activeSlide.on : e.on;
    }, gn: function(e) {
      return S.Ln(e).scrollHeight > b.innerHeight;
    }, Pn: function(e, t) {
      if (!c.canScroll)
        return !1;
      if (i().scrollBar)
        return !0;
      var n = S.Ln(t);
      if (!i().scrollOverflow || !T(n, De) || T(t, "fp-noscroll") || T(Re(t), "fp-noscroll"))
        return !0;
      var o = Co ? 1 : 0, r = n.scrollTop, a = e === "up" && r <= 0, l = e === "down" && n.scrollHeight <= Math.ceil(n.offsetHeight + r) + o, v = a || l;
      return v || (this.xn = (/* @__PURE__ */ new Date()).getTime()), v;
    }, Hn: function() {
      this.On = (/* @__PURE__ */ new Date()).getTime();
      var e = this.On - S.xn, t = (Ee || Le) && c.X, n = c._ && e > 600;
      return t && e > 400 || n;
    }, Dn: (to = 0, function(e) {
      var t = e.target.scrollTop, n = c.Y !== "none" ? c.Y : to < t ? "down" : "up";
      to = t, _(i().onScrollOverflow) && se("onScrollOverflow", { position: t, direction: n }), T(e.target, De) && c.canScroll && S.Pn(n, e.target) && S.Hn() && S.gn(u().P.item) && d.L(_o, { direction: n });
    }) }, no = null, oo = null;
    function ue() {
      c.P = null, c.N.map(function(e) {
        var t = T(e.item, N);
        e.isActive = t, e.on = S.on(e.item), t && (c.P = e), e.slides.length && (e.activeSlide = null, e.slides.map(function(n) {
          var o = T(n.item, N);
          n.on = S.on(e.item), n.isActive = o, o && (e.activeSlide = n);
        }));
      }), function() {
        var e = c.P, t = !!c.P && c.P.slides.length, n = c.P ? c.P.activeSlide : null;
        if (!e && c.N.length && !u().C) {
          if (no) {
            var o = Oi(no, c.N);
            o && (c.P = o, c.P.isActive = !0, x(c.P.item, N)), c.P && Ce(c.P.item.offsetTop);
          }
          if (t && !n && oo) {
            var r = Oi(oo, c.P.slides);
            r && (c.P.activeSlide = r, c.P.activeSlide.isActive = !0, x(c.P.activeSlide.item, N)), c.P.activeSlide && ut(c.P.activeSlide.item, "internal");
          }
        }
      }(), U(g(), "onUpdateStateDone");
    }
    function Gt() {
      var e = s(i().sectionSelector + ", " + ee, g()), t = Qe(e), n = Array.from(e).map(function(a) {
        return new He(a);
      }), o = n.filter(function(a) {
        return a.isVisible;
      }), r = o.reduce(function(a, l) {
        return a.concat(l.slides);
      }, []);
      no = Pi(c.P), oo = Pi(c.P ? c.P.activeSlide : null), c.j = t.length, c.D = o.reduce(function(a, l) {
        return a + l.slides.length;
      }, 0), c.N = o, c.an = n, c.slides = r, c.un = c.N.concat(c.slides);
    }
    function Pi(e) {
      if (!e)
        return null;
      var t = e ? e.item : null, n = e.rn ? c.an : c.P.Cn;
      if (t) {
        var o = Hn(n, t);
        return o ? o.index() : null;
      }
      return null;
    }
    function Oi(e, t) {
      var n, o = e - 1, r = e;
      do {
        if (n = t[o] || t[r])
          break;
        o -= 1, r += 1;
      } while (o >= 0 || r < t.length);
      return n;
    }
    var He = function(e) {
      var t = this;
      [].push.call(arguments, i().sectionSelector), ae.apply(this, arguments), this.wn = s(i().slideSelector, e), this.Cn = Array.from(this.wn).map(function(n) {
        return new Ut(n, t);
      }), this.slides = this.Cn.filter(function(n) {
        return n.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
        return n.isActive;
      })[0] || this.slides[0] : null;
    };
    He.prototype = ae.prototype, He.prototype.constructor = He;
    var dt, Ut = function(e, t) {
      this.parent = t, ae.call(this, e, i().slideSelector);
    };
    function Ri() {
      x(s(i().sectionSelector, g()), Nt), x(s(i().slideSelector, g()), An);
    }
    function io(e) {
      var t = e.slides.length, n = e.wn, o = e.slides, r = 100 * t, a = 100 / t;
      if (!s(ve, e.item)[0]) {
        var l = A.createElement("div");
        l.className = Ht, xt(n, l);
        var v = A.createElement("div");
        v.className = Tn, xt(n, v);
      }
      R(s(ot, e.item), { width: r + "%" }), t > 1 && (i().controlArrows && function(y) {
        var E = y.item, w = [we(i().controlArrowsHTML[0]), we(i().controlArrowsHTML[1])];
        et(s(ve, E)[0], w), x(w, Qo), x(w[0], Jo), x(w[1], "fp-next"), i().controlArrowColor !== "#fff" && (R(s($o, E), { "border-color": "transparent transparent transparent " + i().controlArrowColor }), R(s(Rn, E), { "border-color": "transparent " + i().controlArrowColor + " transparent transparent" })), i().loopHorizontal || bt(s(Rn, E));
      }(e), i().slidesNavigation && function(y) {
        var E = y.item, w = y.slides.length;
        Be(we('<div class="fp-slidesNav"><ul></ul></div>'), E);
        var M = s(Pn, E)[0];
        x(M, "fp-" + i().slidesNavPosition);
        for (var O = 0; O < w; O++)
          Be(we('<li><a href="#"><span class="fp-sr-only">' + vi(O, "Slide", s(Mn, E)[O]) + "</span><span></span></a></li>"), s("ul", M)[0]);
        R(M, { "margin-left": "-" + M.innerWidth / 2 + "px" });
        var X = y.activeSlide ? y.activeSlide.index() : 0;
        x(s("a", s("li", M)[X]), N);
      }(e)), o.forEach(function(y) {
        R(y.item, { width: a + "%" }), i().verticalCentered && Ai(y);
      });
      var f = j("responsiveSlides") ? null : e.activeSlide || null;
      f != null && c.P && (c.P.index() !== 0 || c.P.index() === 0 && f.index() !== 0) ? (ut(f.item, "internal"), x(f.item, "fp-initial")) : x(n[0], N);
    }
    Ut.prototype = ae.prototype, Ut.prototype.constructor = He;
    var Ci = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
    function Ni() {
      return m("responsiveSlides", "isResponsiveSlidesChanging") || Qe(s(i().slideSelector, g())).length !== u().D;
    }
    function ro(e) {
      var t = Ni();
      (Ni() || m("responsiveSlides", "isResponsiveSlidesChanging") || Qe(s(i().sectionSelector, g())).length !== u().j) && !c.nn && (i().observer && dt && dt.disconnect(), Gt(), ue(), i().anchors = [], Te(s(Oe)), m("responsiveSlides", "isResponsiveSlidesChanging") || Ri(), ti(), i().navigation && yi(), t && (Te(s(Pn)), Te(s(On))), u().N.forEach(function(n) {
        n.slides.length ? t && io(n) : eo(n);
      })), i().observer && dt && s(Pe)[0] && dt.observe(s(Pe)[0], Ci);
    }
    d.R(q, function() {
      var e, t, n;
      i().observer && "MutationObserver" in window && s(Pe)[0] && (e = s(Pe)[0], t = Ci, (n = new MutationObserver(ro)).observe(e, t), dt = n), d.R(Io, ro);
    }), h.render = ro;
    var Ar = function() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", { get: function() {
          e = !0;
        } });
        de("testPassive", null, t), Ie("testPassive", null, t);
      } catch {
      }
      return function() {
        return e;
      };
    }();
    function ki() {
      return !!Ar() && { passive: !1 };
    }
    var Hi, ji, lo, be, Kt = (lo = (/* @__PURE__ */ new Date()).getTime(), be = [], { In: function(e) {
      var t = (e = e || b.event).wheelDelta || -e.deltaY || -e.detail, n = Math.max(-1, Math.min(1, t)), o = e.wheelDeltaX !== void 0 || e.deltaX !== void 0;
      Hi = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !o;
      var r = (/* @__PURE__ */ new Date()).getTime();
      ji = n < 0 ? "down" : "up", be.length > 149 && be.shift(), be.push(Math.abs(t));
      var a = r - lo;
      lo = r, a > 200 && (be = []);
    }, Wn: function() {
      var e = tt(be, 10) >= tt(be, 70);
      return !!be.length && e && Hi;
    }, Fn: function() {
      return ji;
    } });
    function Mr() {
      var e = i().css3 ? Se() + V() : ce(u().N).item.offsetTop + ce(u().N).item.offsetHeight, t = Ye(e);
      h.test.top = -e + "px", p({ canScroll: !1 }), Ft(t.element, t.options, i().scrollingSpeed, function() {
        setTimeout(function() {
          p({ C: !0 }), p({ canScroll: !0 });
        }, 30);
      });
    }
    function Tr() {
      g().getBoundingClientRect().bottom >= 0 && Bi();
    }
    function Bi() {
      var e = Ye(ce(u().N).item.offsetTop);
      p({ canScroll: !1 }), Ft(e.element, e.options, i().scrollingSpeed, function() {
        p({ canScroll: !0 }), p({ C: !1 }), p({ Vn: !1 });
      });
    }
    var ao, co, so, zi = (ao = !1, co = {}, so = {}, function(e, t, n) {
      switch (e) {
        case "set":
          co[t] = (/* @__PURE__ */ new Date()).getTime(), so[t] = n;
          break;
        case "isNewKeyframe":
          var o = (/* @__PURE__ */ new Date()).getTime();
          ao = o - co[t] > so[t];
      }
      return ao;
    });
    function pt() {
      var e = u().P.next();
      e || !i().loopBottom && !i().continuousVertical || (e = u().N[0]), e != null ? Xe(e, null, !1) : g().scrollHeight < C.scrollHeight && i().scrollBar && i().Zn && d.L(Wo);
    }
    function Ze() {
      var e = u().P.prev();
      e || !i().loopTop && !i().continuousVertical || (e = ce(u().N)), e != null && Xe(e, null, !0);
    }
    h.moveSectionDown = pt, h.moveSectionUp = Ze;
    var qt = 0;
    function Ii(e) {
      i().autoScrolling && (c.canScroll && (e.pageY < qt && W().m.up ? Ze() : e.pageY > qt && W().m.down && pt()), qt = e.pageY);
    }
    function _i(e) {
      if (W().m[e]) {
        var t = e === "down" ? pt : Ze;
        j("scrollHorizontally") && (t = m("scrollHorizontally", "getScrollSection", { type: e, scrollSection: t })), i().scrollOverflow && S.mn(u().P) ? S.Pn(e, u().P.item) && S.Hn() && t() : t();
      }
    }
    var Qt, uo, Ge, Jt = 0, vt = 0, $t = 0, ht = 0, en = Fi(), ie = { Bn: "ontouchmove" in window ? "touchmove" : en ? en.move : null, Gn: "ontouchstart" in window ? "touchstart" : en ? en.down : null };
    function gt(e) {
      var t = P(e.target, ee) || u().P.item, n = S.mn(u().P);
      if (mt(e)) {
        p({ X: !0, _: !1 }), i().autoScrolling && (n && !c.canScroll || i().scrollBar) && F(e);
        var o = fo(e);
        $t = o.y, ht = o.x;
        var r = Math.abs(Jt - $t) > b.innerHeight / 100 * i().touchSensitivity, a = Math.abs(vt - ht) > Je() / 100 * i().touchSensitivity, l = s(ve, t).length && Math.abs(vt - ht) > Math.abs(Jt - $t), v = Jt > $t ? "down" : "up";
        p({ Y: l ? vt > ht ? "right" : "left" : v }), l ? !c.W && a && (vt > ht ? W().m.right && d.L(mn, { section: t }) : W().m.left && d.L(gn, { section: t })) : i().autoScrolling && c.canScroll && r && _i(v);
      }
    }
    function mt(e) {
      return e.pointerType === void 0 || e.pointerType != "mouse";
    }
    function tn(e) {
      if (i().fitToSection && p({ G: !1 }), mt(e)) {
        var t = fo(e);
        Jt = t.y, vt = t.x;
      }
      de("touchend", Di);
    }
    function Di() {
      Ie("touchend", Di), p({ X: !1 });
    }
    function fo(e) {
      var t = {};
      return t.y = e.pageY !== void 0 && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = e.pageX !== void 0 && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Le && mt(e) && i().scrollBar && e.touches !== void 0 && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }
    function Fi() {
      var e;
      return b.PointerEvent && (e = { down: "pointerdown", move: "pointermove" }), e;
    }
    function po(e) {
      i().autoScrolling && mt(e) && W().m.up && (c.canScroll || F(e));
    }
    function Yi(e, t) {
      var n = t ?? u().P.item, o = Hn(c.N, n), r = s(ve, n)[0];
      if (!(r == null || It() || c.W || o.slides.length < 2)) {
        var a = o.activeSlide, l = e === "left" ? a.prev() : a.next();
        if (!l) {
          if (!i().loopHorizontal)
            return;
          l = e === "left" ? ce(o.slides) : o.slides[0];
        }
        p({ W: !h.test.hn }), ke(r, l.item, e);
      }
    }
    function vo(e) {
      Yi("left", e);
    }
    function ho(e) {
      Yi("right", e);
    }
    function go(e) {
      var t = u().N.filter(function(o) {
        return o.anchor === e;
      })[0];
      if (!t) {
        var n = e !== void 0 ? e - 1 : 0;
        t = u().N[n];
      }
      return t;
    }
    function Vi(e) {
      e != null && ke(P(e, ve), e);
    }
    function mo(e, t) {
      var n = go(e);
      if (n != null) {
        var o = function(r, a) {
          var l = a.slides.filter(function(v) {
            return v.anchor === r;
          })[0];
          return l == null && (r = r !== void 0 ? r : 0, l = a.slides[r]), l ? l.item : null;
        }(t, n);
        n.anchor && n.anchor === c.Z || T(n.item, N) ? Vi(o) : Xe(n, function() {
          Vi(o);
        });
      }
    }
    function St(e, t) {
      var n = go(e);
      t !== void 0 ? mo(e, t) : n != null && Xe(n);
    }
    function Pr() {
      clearTimeout(uo), pe("keydown", Wi), pe("keyup", Xi);
    }
    function Wi(e) {
      clearTimeout(uo);
      var t = e.keyCode, n = [37, 39].indexOf(t) > -1, o = i().autoScrolling || i().fitToSection || n;
      t === 9 ? function(r) {
        var a = r.shiftKey, l = A.activeElement, v = So(Re(u().P.item));
        function f(Y) {
          return F(Y), v[0] ? v[0].focus() : null;
        }
        if (c.canScroll) {
          if (!function(Y) {
            var k = So(A), H = k.indexOf(A.activeElement), L = k[Y.shiftKey ? H - 1 : H + 1], Z = P(L, Mn), G = P(L, ee);
            return !Z && !G;
          }(r)) {
            l ? P(l, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (l = f(r)) : f(r);
            var y = l == v[0], E = l == v[v.length - 1], w = a && y;
            if (w || !a && E) {
              F(r);
              var M = function(Y) {
                var k, H = Y ? "prevPanel" : "nextPanel", L = [], Z = ci((c.P && c.P.activeSlide ? c.P.activeSlide : c.P)[H]());
                do
                  (L = So(Z.item)).length && (k = { Yn: Z, Un: L[Y ? L.length - 1 : 0] }), Z = ci(Z[H]());
                while (Z && L.length === 0);
                return k;
              }(w), O = M ? M.Yn : null;
              if (O) {
                var X = O.rn ? O : O.parent;
                d.L(Sn, { Xn: X.index() + 1, slideAnchor: O.rn ? 0 : O.index() }), Ge = M.Un, F(r);
              }
            }
          }
        } else
          F(r);
      }(e) : !vn() && i().keyboardScrolling && o && (Qt = e.ctrlKey, uo = setTimeout(function() {
        (function(r) {
          var a = r.shiftKey, l = A.activeElement, v = D(l, "video") || D(l, "audio"), f = S.Pn("up", u().P.item), y = S.Pn("down", u().P.item), E = [37, 39].indexOf(r.keyCode) > -1;
          if (function(w) {
            (function(M) {
              return [40, 38, 32, 33, 34].indexOf(M.keyCode) > -1 && !c.C;
            })(w) && !P(w.target, it) && w.preventDefault();
          }(r), c.canScroll || E)
            switch (p({ H: "keydown" }), r.keyCode) {
              case 38:
              case 33:
                W().k.up && f ? c.C ? d.L(Do, { e: r }) : Ze() : S.Sn();
                break;
              case 32:
                if (a && W().k.up && !v && f) {
                  Ze();
                  break;
                }
              case 40:
              case 34:
                if (W().k.down && y) {
                  if (c.C)
                    return;
                  r.keyCode === 32 && v || pt();
                } else
                  S.Sn();
                break;
              case 36:
                W().k.up && St(1);
                break;
              case 35:
                W().k.down && St(u().N.length);
                break;
              case 37:
                W().k.left && vo();
                break;
              case 39:
                W().k.right && ho();
            }
        })(e);
      }, 0));
    }
    function Xi(e) {
      c.J && (Qt = e.ctrlKey);
    }
    function Or() {
      p({ J: !1 }), Qt = !1;
    }
    function Rr(e) {
      Zi();
    }
    function Cr(e) {
      P(Ge, Mn) && !P(Ge, kt) || Zi();
    }
    function Zi() {
      Ge && (Ge.focus(), Ge = null);
    }
    function So(e) {
      return [].slice.call(s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e)).filter(function(t) {
        return I(t, "tabindex") !== "-1" && t.offsetParent !== null;
      });
    }
    h.moveSlideLeft = vo, h.moveSlideRight = ho, h.moveTo = St, d.R(q, function() {
      de("blur", Or), Me("keydown", Wi), Me("keyup", Xi), d.R(le, Pr), d.R(yn, Rr), d.R(wn, Cr);
    });
    var Gi = (/* @__PURE__ */ new Date()).getTime(), Ue = [];
    function wo(e) {
      e ? (function() {
        var t, n = "";
        b.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
        var o = "onwheel" in A.createElement("div") ? "wheel" : A.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", r = ki();
        o == "DOMMouseScroll" ? A[t](n + "MozMousePixelScroll", Ke, r) : A[t](n + o, Ke, r);
      }(), g().addEventListener("mousedown", Ui), g().addEventListener("mouseup", Ki)) : (A.addEventListener ? (pe("mousewheel", Ke, !1), pe("wheel", Ke, !1), pe("MozMousePixelScroll", Ke, !1)) : A.detachEvent("onmousewheel", Ke), g().removeEventListener("mousedown", Ui), g().removeEventListener("mouseup", Ki));
    }
    function Ke(e) {
      var t = (/* @__PURE__ */ new Date()).getTime(), n = T(s(".fp-completely")[0], "fp-normal-scroll"), o = function(E, w) {
        (/* @__PURE__ */ new Date()).getTime();
        var M = u().C && E.getBoundingClientRect().bottom >= 0 && Kt.Fn() === "up", O = u().Vn;
        if (O)
          return F(w), !1;
        if (u().C) {
          if (M) {
            var X;
            if (!(O || zi("isNewKeyframe", "beyondFullpage") && Kt.Wn()))
              return (X = Ye(ce(u().N).item.offsetTop + ce(u().N).item.offsetHeight)).element.scrollTo(0, X.options), p({ Vn: !1 }), F(w), !1;
            if (Kt.Wn())
              return M = !1, p({ Vn: !0 }), p({ H: "wheel" }), Bi(), F(w), !1;
          } else
            zi("set", "beyondFullpage", 1e3);
          if (!O && !M)
            return !0;
        }
      }(g(), e);
      if (c._ || p({ X: !1, _: !0, Y: "none" }), !W().m.down && !W().m.up)
        return F(e), !1;
      if (o)
        return !0;
      if (o === !1)
        return F(e), !1;
      if (i().autoScrolling && !Qt && !n) {
        var r = (e = e || b.event).wheelDelta || -e.deltaY || -e.detail, a = Math.max(-1, Math.min(1, r)), l = e.wheelDeltaX !== void 0 || e.deltaX !== void 0, v = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !l, f = a < 0 ? "down" : a > 0 ? "up" : "none";
        Ue.length > 149 && Ue.shift(), Ue.push(Math.abs(r)), i().scrollBar && F(e);
        var y = t - Gi;
        return Gi = t, y > 200 && (Ue = []), p({ U: f }), c.canScroll && !It() && tt(Ue, 10) >= tt(Ue, 70) && v && (p({ H: "wheel" }), _i(a < 0 ? "down" : "up")), !1;
      }
      i().fitToSection && p({ G: !1 });
    }
    function Ui(e) {
      var t;
      e.which == 2 && (t = e.pageY, qt = t, g().addEventListener("mousemove", Ii));
    }
    function Ki(e) {
      e.which == 2 && g().removeEventListener("mousemove", Ii);
    }
    function wt(e) {
      e ? (wo(!0), function() {
        if (ie.Bn && (Ee || Le) && (!j("dragAndMove") || i().dragAndMove === "mouseonly")) {
          i().autoScrolling && (C.removeEventListener(ie.Bn, po, { passive: !1 }), C.addEventListener(ie.Bn, po, { passive: !1 }));
          var t = i().touchWrapper;
          t.removeEventListener(ie.Gn, tn), t.removeEventListener(ie.Bn, gt, { passive: !1 }), t.addEventListener(ie.Gn, tn), t.addEventListener(ie.Bn, gt, { passive: !1 });
        }
      }()) : (wo(!1), function() {
        if (ie.Bn && (Ee || Le)) {
          i().autoScrolling && (C.removeEventListener(ie.Bn, gt, { passive: !1 }), C.removeEventListener(ie.Bn, po, { passive: !1 }));
          var t = i().touchWrapper;
          t.removeEventListener(ie.Gn, tn), t.removeEventListener(ie.Bn, gt, { passive: !1 });
        }
      }());
    }
    h.setMouseWheelScrolling = wo;
    var yo = !0;
    function Nr() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
        pe(e, Qi, !0);
      });
    }
    function qi(e, t) {
      document["fp_" + e] = t, Me(e, Qi, !0);
    }
    function Qi(e) {
      var t = e.type, n = !1, o = t === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
      o != document && o ? (t === "touchend" && (yo = !1, setTimeout(function() {
        yo = !0;
      }, 800)), (t !== "mouseenter" || yo) && (i().normalScrollElements.split(",").forEach(function(r) {
        if (!n) {
          var a = D(o, r), l = P(o, r);
          (a || l) && (h.shared._n || wt(!1), h.shared._n = !0, n = !0);
        }
      }), !n && h.shared._n && (wt(!0), h.shared._n = !1))) : wt(!0);
    }
    function nn(e, t) {
      at(0, "internal"), St(e, t), at(Fe().scrollingSpeed, "internal");
    }
    d.R(q, function() {
      i().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
        qi(e, !1);
      }), ["mouseleave", "touchend"].forEach(function(e) {
        qi(e, !0);
      })), d.R(le, Nr);
    }), h.silentMoveTo = nn;
    var bo, Ji, xo = V(), $i = Je(), Eo = !1;
    function kr() {
      clearTimeout(bo), clearTimeout(Ji), Ie("resize", Lo);
    }
    function Lo() {
      Eo || (i().autoScrolling && !i().scrollBar || !i().fitToSection) && er(V()), function() {
        if (Ee)
          for (var e = 0; e < 4; e++)
            Ji = setTimeout(function() {
              window.requestAnimationFrame(function() {
                i().autoScrolling && !i().scrollBar && (p({ F: !0 }), nn(c.P.index() + 1), p({ F: !1 }));
              });
            }, 200 * e);
      }(), Eo = !0, clearTimeout(bo), bo = setTimeout(function() {
        (function() {
          if (p({ F: !0 }), er(""), U(g(), "onResize"), i().autoScrolling || c.C || function() {
            if (!i().autoScrolling || i().scrollBar) {
              var r = 0.01 * b.innerHeight;
              A.documentElement.style.setProperty("--vh", "".concat(r, "px"));
            }
          }(), d.L(Io), ue(), Li(), Ee) {
            var e = A.activeElement;
            if (!D(e, "textarea") && !D(e, "input") && !D(e, "select")) {
              var t = V();
              Math.abs(t - xo) > 20 * Math.max(xo, t) / 100 && (Ao(!0), xo = t);
            }
          } else
            n = V(), o = Je(), c.q === n && $i === o || (p({ q: n }), $i = o, Ao(!0));
          var n, o;
          U(g(), "onResizeEnds"), p({ F: !1 });
        })(), Eo = !1;
      }, 400);
    }
    function Ao(e) {
      if (!T(g(), En)) {
        p({ F: !0, q: V(), Qn: Je() });
        for (var t = u().N, n = 0; n < t.length; ++n) {
          var o = t[n], r = s(ve, o.item)[0], a = o.slides;
          j("offsetSections") && R(o.item, { height: Nn(o.item) }), a.length > 1 && ke(r, o.activeSlide.item);
        }
        i().scrollOverflow && S.bn();
        var l = u().P.index();
        c.C || !l || j("fadingEffect") || j("dropEffect") || j("waterEffect") || nn(l + 1), p({ F: !1 }), _(i().afterResize) && e && i().afterResize.call(g(), b.innerWidth, b.innerHeight), _(i().afterReBuild) && !e && i().afterReBuild.call(g()), U(g(), "afterRebuild");
      }
    }
    function er(e) {
      u().N.forEach(function(t) {
        var n = e !== "" || j("offsetSections") ? Nn(t.item) : "";
        R(t.item, { height: n });
      });
    }
    function Mo() {
      var e, t, n = b.location.hash;
      if (n.length) {
        var o = n.replace("#", "").split("/"), r = n.indexOf("#/") > -1;
        e = r ? "/" + o[1] : decodeURIComponent(o[0]);
        var a = r ? o[2] : o[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, sn: t };
    }
    function Hr() {
      Ie("hashchange", tr);
    }
    function tr() {
      if (!c.V && !i().lockAnchors) {
        var e = Mo(), t = e.section, n = e.sn, o = c.Z === void 0, r = c.Z === void 0 && n === void 0 && !c.W;
        t && t.length && (t && t !== c.Z && !o || r && !It() || !c.W && c.B != n && !It()) && d.L(Sn, { Xn: t, slideAnchor: n });
      }
    }
    function jr(e) {
      var t = e.target;
      P(t, i().menu + " [data-menuanchor]") && Br.call(t, e);
    }
    function Br(e) {
      p({ H: "menu" }), !s(i().menu)[0] || !i().lockAnchors && i().anchors.length || (F(e), d.L(Fo, { anchor: I(this, "data-menuanchor") }));
    }
    function zr(e) {
      var t = e.target;
      t && P(t, "#fp-nav a") ? xr.call(t, e.e) : D(t, ".fp-tooltip") ? br.call(t) : (D(t, qo) || P(t, qo) != null) && mr.call(t, e.e);
    }
    h.reBuild = Ao, d.R(q, function() {
      Lo(), de("resize", Lo), d.R(le, kr);
    }), h.setLockAnchors = function(e) {
      i().lockAnchors = e;
    }, d.R(q, function() {
      de("hashchange", tr), d.R(le, Hr);
    }), d.R(q, function() {
      Me("wheel", Kt.In, ki()), d.R(Wo, Mr), d.R(Do, Tr);
    }), d.R(q, function() {
      d.R(Ot, jr);
    }), d.R(q, function() {
      d.R(Ot, zr);
    });
    var To, Po, nr = 0;
    function on(e) {
      var t, n, o, r, a;
      if (U(g(), "onScroll"), !c.F && u().P && (ce(u().N), !u().C && !u().Vn && (!i().autoScrolling || i().scrollBar || j("dragAndMove")) && !oi())) {
        var l = j("dragAndMove") ? Math.abs(m("dragAndMove", "getCurrentScroll")) : Se(), v = function(Q) {
          var re = Q > nr ? "down" : "up";
          return nr = Q, p({ K: Q }), re;
        }(l), f = 0, y = l + V() / 2, E = (j("dragAndMove") ? m("dragAndMove", "getDocumentHeight") : C.scrollHeight - V()) === l, w = u().N;
        if (p({ scrollY: l }), E)
          f = w.length - 1;
        else if (l)
          for (var M = 0; M < w.length; ++M)
            (P(w[M].item, ee) || w[M].item).offsetTop <= y && (f = M);
        else
          f = 0;
        if (o = v, r = u().P.item.offsetTop, a = r + V(), (o == "up" ? a >= Se() + V() : r <= Se()) && (T(u().P.item, _e) || (x(u().P.item, _e), z(ze(u().P.item), _e))), n = (t = w[f]).item, !t.isActive) {
          p({ V: !0 });
          var O, X, Y = u().P.item, k = u().P.index() + 1, H = Bn(u().P, n), L = t.anchor, Z = t.index() + 1, G = t.activeSlide, ge = { P: Y, sectionIndex: Z - 1, anchorLink: L, element: n, leavingSection: k, direction: H, items: { origin: u().P, destination: t } };
          G && (X = G.anchor, O = G.index()), c.canScroll && (z(w.filter(function(Q) {
            return Q.index() !== t.index();
          }).map(function(Q) {
            return Q.item;
          }), N), x(n, N), m("parallax", "afterLoad"), _(i().beforeLeave) && bi("beforeLeave", ge), _(i().onLeave) && se("onLeave", ge), _(i().afterLoad) && se("afterLoad", ge), m("resetSliders", "apply", { localIsResizing: c.F, leavingSection: k }), _n(Y), Ve(n), Yt(n), Xn(L, Z - 1), i().anchors.length && p({ Z: L }), ue(), Dn(O, X, L)), clearTimeout(To), To = setTimeout(function() {
            p({ V: !1 });
          }, 100);
        }
        i().fitToSection && c.canScroll && (clearTimeout(Po), Po = setTimeout(function() {
          c.N.filter(function(Q) {
            var re = Q.item.getBoundingClientRect();
            return Math.round(re.bottom) === Math.round(V()) || Math.round(re.top) === 0;
          }).length || Ei();
        }, i().en));
      }
    }
    function or(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Wt(e, n, "k");
      }) : (Wt(e, "all", "k"), i().keyboardScrolling = e);
    }
    function Ir(e) {
      var t = e.index();
      i().anchors[t] !== void 0 && e.isActive && Xn(i().anchors[t], t), i().menu && i().css3 && P(s(i().menu)[0], Pe) != null && s(i().menu).forEach(function(n) {
        C.appendChild(n);
      });
    }
    function ir() {
      var e, t, n = u().P, o = u().P.item;
      x(o, _e), Ve(o), wi(), Yt(o), t = go((e = Mo()).section), e.section && t && (t === void 0 || t.index() !== fe(Mi)) || !_(i().afterLoad) || se("afterLoad", { P: o, element: o, direction: null, anchorLink: n.anchor, sectionIndex: n.index(), items: { origin: u().P, destination: u().P } }), _(i().afterRender) && se("afterRender"), U(g(), "afterRender");
    }
    function Oo(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Wt(e, n, "m");
      }) : Wt(e, "all", "m"), U(g(), "setAllowScrolling", { value: e, Jn: t });
    }
    function rr() {
      var e = Mo(), t = e.section, n = e.sn;
      t ? i().animateAnchor ? mo(t, n) : nn(t, n) : d.L(hn, null);
    }
    d.R(le, function() {
      clearTimeout(To), clearTimeout(Po);
    }), d.R(q, function() {
      de("scroll", on), A.body.addEventListener("scroll", on), d.R(Sn, function(e) {
        mo(e.Xn, e.slideAnchor);
      }), d.R(Fo, function(e) {
        St(e.anchor, void 0);
      }), d.R(_o, function(e) {
        (e.direction === "down" ? pt : Ze)();
      }), d.R(Yo, function(e) {
        Xe(e.destination);
      });
    }), d.R(le, function() {
      Ie("scroll", on);
    }), h.getActiveSlide = function() {
      return In(u().P.activeSlide);
    }, h.getScrollX = function() {
      return c.scrollX;
    }, d.R(q, function() {
      d.R(le, yr), d.R(Vo, function(e) {
        ke(e.slides, e.destination);
      }), d.R(mn, function(e) {
        ho(e.section);
      }), d.R(gn, function(e) {
        vo(e.section);
      });
    }), d.R(q, function() {
      var e = i().credits.position, t = ["left", "right"].indexOf(e) > -1 ? "".concat(e, ": 0;") : "", n = `
        <div class="fp-watermark" style="`.concat(t, `">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(i().credits.label, `
            </a>
        </div>
    `), o = ce(c.N), r = !c.Kn || i().credits.enabled;
      o && o.item && r && o.item.insertAdjacentHTML("beforeend", n);
    }), function() {
      d.R(zo, function() {
        var v, f, y;
        p({ Kn: (i().licenseKey, v = i().licenseKey, f = function(E) {
          var w = parseInt("514").toString(16);
          if (!E || E.length < 29 || E.split(e[0]).length === 4)
            return null;
          var M = ["Each", "for"][r()]().join(""), O = E[["split"]]("-"), X = [];
          O[M](function(H, L) {
            if (L < 4) {
              var Z = function(Q) {
                var re = Q[Q.length - 1], Wr = ["NaN", "is"][r()]().join("");
                return window[Wr](re) ? a(re) : function(Xr) {
                  return Xr - N.length;
                }(re);
              }(H);
              X.push(Z);
              var G = a(H[Z]);
              if (L === 1) {
                var ge = ["pa", "dS", "t", "art"].join("");
                G = G.toString()[ge](2, "0");
              }
              w += G, L !== 0 && L !== 1 || (w += "-");
            }
          });
          var Y = 0, k = "";
          return E.split("-").forEach(function(H, L) {
            if (L < 4) {
              for (var Z = 0, G = 0; G < 4; G++)
                G !== X[L] && (Z += Math.abs(a(H[G])), isNaN(H[G]) || Y++);
              var ge = l(Z);
              k += ge;
            }
          }), k += l(Y), { qn: /* @__PURE__ */ new Date(w + "T00:00"), $n: w.split("-")[2] === 8 * (N.length - 2) + "", nt: k };
        }(v), y = function(E) {
          var w = o[r()]().join("");
          return E && w.indexOf(E) === 0 && E.length === w.length;
        }(v), (f || y) && (f && n <= f.qn && f.nt === v.split(e[0])[4] || y || f.$n) || !1) });
      });
      var e = ["-"], t = "2023-4-29".split("-"), n = new Date(t[0], t[1], t[2]), o = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), h.setKeyboardScrolling = or, h.shared.tt = ir, h.setAllowScrolling = Oo;
    var _r = {};
    function qe() {
      return _r;
    }
    var rn, he, lr, Ro, ln = !T(C, K("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function ar(e) {
      if (he = A.createElement("div"), rn = K("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), ln || (rn = rn.replace("extensions/", "").replace("Extension", "")), he.innerHTML = rn, he = he.firstChild, "MutationObserver" in window && new MutationObserver(Dr).observe(A.body, { childList: !0, subtree: !1 }), (!ln || j(e) && h[e]) && (!function(n) {
        var o = qe()[n] !== void 0 && qe()[n].length, r = [], a = !1;
        return je(qe()[n]) ? r = qe()[n] : r.push(qe()[n]), r.forEach(function(l) {
          var v = function() {
            if (A.domain.length) {
              for (var re = A.domain.replace(/^(www\.)/, "").split("."); re.length > 2; )
                re.shift();
              return re.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), f = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], y = K(f[0]), E = K(f[1]), w = K(f[2]), M = K(f[6]), O = K(f[3]), X = K(f[4]), Y = K(f[5]), k = i()[X + Y] !== void 0;
          o = o || k;
          var H = [y, E, w, M].indexOf(v) < 0 && v.length !== 0;
          if (!o && !k && H)
            return !1;
          var L = o ? K(l) : "", Z = (L = L.split("_")).length > 1 && L[1].indexOf(n, L[1].length - n.length) > -1, G = L.length > 1 && L[1].toLowerCase().indexOf(X) > -1, ge = L[0].indexOf(v, L[0].length - v.length) < 0, Q = Z || G;
          a = a || !(ge && H && O != L[0]) && Q || !H;
        }), a;
      }(e) || !ln)) {
        cr();
        var t = K("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t](cr, 2e3);
      }
    }
    function cr() {
      he && (Ro || (Math.random() < 0.5 ? ii(C, he) : Be(he, C), Ro = !0), he.setAttribute("style", K("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, K("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function Dr(e) {
      e.forEach(function(t) {
        if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(he)) {
          clearTimeout(lr);
          var n = K("bDIwc2V0VGltZW91dDAzbA==");
          lr = window[n](Fr, 900);
        }
      });
    }
    function Fr() {
      Ro = !1;
    }
    function Yr() {
      Gt(), ue(), i().scrollBar = i().scrollBar || i().hybrid, ti(), function() {
        R(jo(g(), "body"), { height: "100%", position: "relative" }), x(g(), bn), x(st, Ct), p({ q: V() }), z(g(), En), Ri(), m("parallax", "init");
        for (var e = u().an, t = 0; t < e.length; t++) {
          var n = e[t], o = n.wn, r = I(n.item, "style");
          r && n.item.setAttribute("data-fp-styles", r), eo(n), Ir(n), o.length > 0 && io(n);
        }
        i().fixedElements && i().css3 && s(i().fixedElements).forEach(function(a) {
          C.appendChild(a);
        }), i().navigation && yi(), s('iframe[src*="youtube.com/embed/"]', g()).forEach(function(a) {
          var l, v;
          v = I(l = a, "src"), l.setAttribute("src", v + (/\?/.test(v) ? "&" : "?") + "enablejsapi=1");
        }), m("fadingEffect", "apply"), m("waterEffect", "init"), m("dropEffect", "init"), m("cards", "init"), i().scrollOverflow && S.bn();
      }(), Oo(!0), wt(!0), We(i().autoScrolling, "internal"), Li(), di(), A.readyState === "complete" && rr(), de("load", rr), ir(), ln || ar("l"), Gt(), ue();
    }
    function sr() {
      var e = i().licenseKey;
      i().licenseKey.trim() === "" ? ($("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"), $("error", "https://github.com/alvarotrigo/fullPage.js#options")) : i() && c.Kn || A.domain.indexOf("alvarotrigo.com") > -1 ? e && e.length : ($("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), $("error", "https://alvarotrigo.com/fullPage/pricing")), T(st, Ct) ? $("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (i().continuousVertical && (i().loopTop || i().loopBottom) && (i().continuousVertical = !1, $("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !i().scrollOverflow || !i().scrollBar && i().autoScrolling || $("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !i().continuousVertical || !i().scrollBar && i().autoScrolling || (i().continuousVertical = !1, $("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), i().anchors.forEach(function(t) {
        var n = [].slice.call(s("[name]")).filter(function(a) {
          return I(a, "name") && I(a, "name").toLowerCase() == t.toLowerCase();
        }), o = [].slice.call(s("[id]")).filter(function(a) {
          return I(a, "id") && I(a, "id").toLowerCase() == t.toLowerCase();
        });
        if (o.length || n.length) {
          $("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var r = o.length ? "id" : "name";
          (o.length || n.length) && $("error", '"' + t + '" is is being used by another element `' + r + "` property");
        }
      }));
    }
    function Vr() {
      return { options: i(), internals: { container: g(), canScroll: c.canScroll, isScrollAllowed: W(), getDestinationPosition: xi, isTouch: Le, c: ar, getXmovement: Si, removeAnimation: _t, getTransforms: zn, lazyLoad: Ve, addAnimation: jn, performHorizontalMove: mi, landscapeScroll: ke, silentLandscapeScroll: ut, keepSlidesPosition: Wn, silentScroll: Ce, styleSlides: io, styleSection: eo, scrollHandler: on, getEventsPage: fo, getMSPointer: Fi, isReallyTouch: mt, usingExtension: j, toggleControlArrows: gi, touchStartHandler: tn, touchMoveHandler: gt, nullOrSection: ye, items: { SectionPanel: He, SlidePanel: Ut, Item: ae }, getVisible: Qe, getState: u, updateState: ue, updateStructuralState: Gt, activeSlidesNavigation: hi, getPanels: function() {
        return c.un;
      }, getSections: function() {
        return c.N;
      }, setActiveSection: function(e) {
        c.P = e;
      } } };
    }
    function te(e) {
      var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], n = K(t[0]), o = K(t[1]), r = i()[n + o] !== void 0, a = "fp_" + e + "Extension";
      qe()[e] = r ? i()[n + o] : i()[e + o], h[e] = window[a] !== void 0 ? new window[a]() : null, h[e] && h[e].c(e);
    }
    function ur(e, t) {
      var n;
      if (C = s("body")[0], st = s("html")[0], Dt = s("html, body"), !T(st, Ct))
        return n = typeof e == "string" ? s(e)[0] : e, jt.touchWrapper = n, function(o) {
          Bt = Ae({}, jt, o), Cn = Object.assign({}, Bt);
        }(t), function(o) {
          lt = o;
        }(typeof e == "string" ? s(e)[0] : e), d.L(zo), sr(), h.getFullpageData = Vr, h.version = "4.0.20", h.test = Object.assign(h.test, { top: "0px", cn: "translate3d(0px, 0px, 0px)", dn: function() {
          for (var o = [], r = 0; r < s(i().sectionSelector, g()).length; r++)
            o.push("translate3d(0px, 0px, 0px)");
          return o;
        }(), left: function() {
          for (var o = [], r = 0; r < s(i().sectionSelector, g()).length; r++)
            o.push(0);
          return o;
        }(), options: i(), setAutoScrolling: null }), h.shared = Object.assign(h.shared, { tt: null, _n: !1 }), b.fullpage_api = h, b.fullpage_extensions = !0, g() && (d.L("beforeInit"), te("continuousHorizontal"), te("scrollHorizontally"), te("resetSliders"), te("interlockedSlides"), te("responsiveSlides"), te("fadingEffect"), te("dragAndMove"), te("offsetSections"), te("scrollOverflowReset"), te("parallax"), te("cards"), te("dropEffect"), te("waterEffect"), m("dragAndMove", "init"), m("responsiveSlides", "init"), Yr(), d.L(q), m("dragAndMove", "turnOffTouch")), b.fullpage_api;
      sr();
    }
    return h.destroy = function(e) {
      U(g(), "destroy", e), We(!1, "internal"), Oo(!0), wt(!1), or(!1), x(g(), En), d.L(le), m("dragAndMove", "destroy"), e && (Ce(0), s("img[data-src], source[data-src], audio[data-src], iframe[data-src]", g()).forEach(function(t) {
        Pt(t, "src");
      }), s("img[data-srcset]").forEach(function(t) {
        Pt(t, "srcset");
      }), Te(s("#fp-nav, .fp-slidesNav, .fp-controlArrow")), R(kn(u().N), { height: "", "background-color": "", padding: "" }), R(kn(u().slides), { width: "" }), R(g(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), R(Dt, { overflow: "", height: "" }), z(st, Ct), z(C, Rt + " fp-scrollable"), C.className.split(/\s+/).forEach(function(t) {
        t.indexOf("fp-viewing") === 0 && z(C, t);
      }), kn(u().un).forEach(function(t) {
        i().scrollOverflow && S.Nn(t), z(t, "fp-table active fp-completely " + rt);
        var n = I(t, "data-fp-styles");
        n && t.setAttribute("style", n), T(t, Nt) && !ei && t.removeAttribute("data-anchor");
      }), _t(g()), [hr, ot, ve].forEach(function(t) {
        s(t, g()).forEach(function(n) {
          Et(n);
        });
      }), R(g(), { "-webkit-transition": "none", transition: "none" }), z(g(), bn), b.scrollTo(0, 0), [Nt, An, Tn].forEach(function(t) {
        z(s("." + t), t);
      }));
    }, b.fp_easings = Ae(b.fp_easings, { easeInOutCubic: function(e, t, n, o) {
      return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
    } }), b.jQuery && function(e, t) {
      e && t ? e.fn.fullpage = function(n) {
        n = e.extend({}, n, { $: e }), new t(this[0], n), Object.keys(h).forEach(function(o) {
          i().$.fn.fullpage[o] = h[o];
        });
      } : $("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(b.jQuery, ur), ur;
  });
})(fr);
var Qr = fr.exports;
const Jr = /* @__PURE__ */ qr(Qr), $r = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
], el = (B, J) => {
  const ne = B.__vccOpts || B;
  for (const [oe, xe] of J)
    ne[oe] = xe;
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
      events: $r.reduce((B, J) => ({
        ...B,
        [J]: (...ne) => {
          this.emitEvent(J, ne);
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
      let B = this.options.slideSelector || ".slide", J = this.options.sectionSelector || ".section";
      const ne = window.fp_utils.index(document.querySelector(J + ".active")), oe = document.querySelector(J + ".active " + B + ".active"), xe = oe ? window.fp_utils.index(oe) : -1;
      this.destroy(), ne > -1 && window.fp_utils.addClass(document.querySelectorAll(J)[ne], "active"), xe > -1 && window.fp_utils.addClass(oe, "active"), this.init();
    },
    destroy() {
      typeof window.fullpage_api < "u" && typeof window.fullpage_api.destroy < "u" && window.fullpage_api.destroy("all");
    },
    emitEvent(B, J) {
      this.$emit(B.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...J), Object.prototype.hasOwnProperty.call(this.options, B) && this.options[B].apply(this, J);
    },
    init() {
      this.api = new Jr(this.$refs.fullpage, this.options);
    }
  }
}, nl = { ref: "fullpage" };
function ol(B, J, ne, oe, xe, an) {
  return Zr(), Gr("div", nl, [
    Ur(B.$slots, "default")
  ], 512);
}
const il = /* @__PURE__ */ el(tl, [["render", ol]]), ll = {
  install(B) {
    B.component("FullPage", il);
  }
};
export {
  ll as default
};
