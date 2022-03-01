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
import { openBlock, createElementBlock, renderSlot } from "vue";
var fullpage_min$1 = "";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var fullpage_min = { exports: {} };
/*!
 * fullPage 3.1.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function(module, exports) {
  !function(e, t, n, o, r) {
    module.exports = o(t, n);
  }(commonjsGlobal, window, document, function(zt, jt) {
    var Pt = "fullpage-wrapper", Dt = "." + Pt, Vt = "fp-responsive", Wt = "fp-notransition", Yt = "fp-destroyed", Ft = "fp-enabled", Ut = "fp-viewing", Xt = "active", Kt = "." + Xt, _t = "fp-completely", $t = "fp-section", qt = "." + $t, Qt = qt + Kt, Gt = "fp-tableCell", Jt = "." + Gt, Zt = "fp-auto-height", en = "fp-normal-scroll", tn = "fp-nav", nn = "#" + tn, on = "fp-tooltip", rn = "fp-slide", ln = "." + rn, an = ln + Kt, sn = "fp-slides", cn = "." + sn, un = "fp-slidesContainer", fn = "." + un, dn = "fp-table", vn = "fp-slidesNav", pn = "." + vn, hn = pn + " a", e = "fp-controlArrow", gn = "." + e, mn = "fp-prev", Sn = gn + ".fp-prev", wn = gn + ".fp-next";
    function bn(e2, t) {
      zt.console && zt.console[e2] && zt.console[e2]("fullPage: " + t);
    }
    function yn(e2, t) {
      return (t = 1 < arguments.length ? t : jt) ? t.querySelectorAll(e2) : null;
    }
    function En(e2) {
      e2 = e2 || {};
      for (var t = 1, n2 = arguments.length; t < n2; ++t) {
        var o2 = arguments[t];
        if (o2)
          for (var r2 in o2)
            o2.hasOwnProperty(r2) && (Object.prototype.toString.call(o2[r2]) !== "[object Object]" ? e2[r2] = o2[r2] : e2[r2] = En(e2[r2], o2[r2]));
      }
      return e2;
    }
    function Ln(e2, t) {
      return e2 != null && (e2.classList ? e2.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e2.className));
    }
    function xn() {
      return "innerHeight" in zt ? zt.innerHeight : jt.documentElement.offsetHeight;
    }
    function An() {
      return zt.innerWidth;
    }
    function Tn(e2, t) {
      var n2;
      for (n2 in e2 = l(e2), t)
        if (t.hasOwnProperty(n2) && n2 !== null)
          for (var o2 = 0; o2 < e2.length; o2++) {
            e2[o2].style[n2] = t[n2];
          }
      return e2;
    }
    function n(e2, t, n2) {
      for (var o2 = e2[n2]; o2 && !qn(o2, t); )
        o2 = o2[n2];
      return o2;
    }
    function kn(e2, t) {
      return n(e2, t, "previousElementSibling");
    }
    function On(e2, t) {
      return n(e2, t, "nextElementSibling");
    }
    function Mn(e2) {
      return e2.previousElementSibling;
    }
    function Cn(e2) {
      return e2.nextElementSibling;
    }
    function Hn(e2) {
      return e2[e2.length - 1];
    }
    function In(e2, t) {
      e2 = i(e2) ? e2[0] : e2;
      for (var n2 = t != null ? yn(t, e2.parentNode) : e2.parentNode.childNodes, o2 = 0, r2 = 0; r2 < n2.length; r2++) {
        if (n2[r2] == e2)
          return o2;
        n2[r2].nodeType == 1 && o2++;
      }
      return -1;
    }
    function l(e2) {
      return i(e2) ? e2 : [e2];
    }
    function Bn(e2) {
      e2 = l(e2);
      for (var t = 0; t < e2.length; t++)
        e2[t].style.display = "none";
      return e2;
    }
    function Rn(e2) {
      e2 = l(e2);
      for (var t = 0; t < e2.length; t++)
        e2[t].style.display = "block";
      return e2;
    }
    function i(e2) {
      return Object.prototype.toString.call(e2) === "[object Array]" || Object.prototype.toString.call(e2) === "[object NodeList]";
    }
    function Nn(e2, t) {
      e2 = l(e2);
      for (var n2 = 0; n2 < e2.length; n2++) {
        var o2 = e2[n2];
        o2.classList ? o2.classList.add(t) : o2.className += " " + t;
      }
      return e2;
    }
    function zn(e2, t) {
      e2 = l(e2);
      for (var n2 = t.split(" "), o2 = 0; o2 < n2.length; o2++) {
        t = n2[o2];
        for (var r2 = 0; r2 < e2.length; r2++) {
          var i2 = e2[r2];
          i2.classList ? i2.classList.remove(t) : i2.className = i2.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
      }
      return e2;
    }
    function jn(e2, t) {
      t.appendChild(e2);
    }
    function o(e2, t, n2) {
      var o2;
      t = t || jt.createElement("div");
      for (var r2 = 0; r2 < e2.length; r2++) {
        var i2 = e2[r2];
        (n2 && !r2 || !n2) && (o2 = t.cloneNode(true), i2.parentNode.insertBefore(o2, i2)), o2.appendChild(i2);
      }
      return e2;
    }
    function Pn(e2, t) {
      o(e2, t, true);
    }
    function Dn(e2, t) {
      for (typeof t == "string" && (t = Gn(t)), e2.appendChild(t); e2.firstChild !== t; )
        t.appendChild(e2.firstChild);
    }
    function Vn(e2) {
      for (var t = jt.createDocumentFragment(); e2.firstChild; )
        t.appendChild(e2.firstChild);
      e2.parentNode.replaceChild(t, e2);
    }
    function Wn(e2, t) {
      return e2 && e2.nodeType === 1 ? qn(e2, t) ? e2 : Wn(e2.parentNode, t) : null;
    }
    function Yn(e2, t) {
      r(e2, e2.nextSibling, t);
    }
    function Fn(e2, t) {
      r(e2, e2, t);
    }
    function r(e2, t, n2) {
      i(n2) || (typeof n2 == "string" && (n2 = Gn(n2)), n2 = [n2]);
      for (var o2 = 0; o2 < n2.length; o2++)
        e2.parentNode.insertBefore(n2[o2], t);
    }
    function Un() {
      var e2 = jt.documentElement;
      return (zt.pageYOffset || e2.scrollTop) - (e2.clientTop || 0);
    }
    function Xn(t) {
      return Array.prototype.filter.call(t.parentNode.children, function(e2) {
        return e2 !== t;
      });
    }
    function Kn(e2) {
      e2.preventDefault ? e2.preventDefault() : e2.returnValue = false;
    }
    function _n(e2) {
      if (typeof e2 == "function")
        return true;
      var t = Object.prototype.toString(e2);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function $n(e2, t, n2) {
      var o2;
      n2 = n2 === void 0 ? {} : n2, typeof zt.CustomEvent == "function" ? o2 = new CustomEvent(t, { detail: n2 }) : (o2 = jt.createEvent("CustomEvent")).initCustomEvent(t, true, true, n2), e2.dispatchEvent(o2);
    }
    function qn(e2, t) {
      return (e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector).call(e2, t);
    }
    function Qn(e2, t) {
      if (typeof t == "boolean")
        for (var n2 = 0; n2 < e2.length; n2++)
          e2[n2].style.display = t ? "block" : "none";
      return e2;
    }
    function Gn(e2) {
      var t = jt.createElement("div");
      return t.innerHTML = e2.trim(), t.firstChild;
    }
    function Jn(e2) {
      e2 = l(e2);
      for (var t = 0; t < e2.length; t++) {
        var n2 = e2[t];
        n2 && n2.parentElement && n2.parentNode.removeChild(n2);
      }
    }
    function a(e2, t, n2) {
      for (var o2 = e2[n2], r2 = []; o2; )
        (qn(o2, t) || t == null) && r2.push(o2), o2 = o2[n2];
      return r2;
    }
    function Zn(e2, t) {
      return a(e2, t, "nextElementSibling");
    }
    function eo(e2, t) {
      return a(e2, t, "previousElementSibling");
    }
    return zt.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e2, t) {
      t = t || zt;
      for (var n2 = 0; n2 < this.length; n2++)
        e2.call(t, this[n2], n2, this);
    }), zt.fp_utils = { $: yn, deepExtend: En, hasClass: Ln, getWindowHeight: xn, css: Tn, until: n, prevUntil: kn, nextUntil: On, prev: Mn, next: Cn, last: Hn, index: In, getList: l, hide: Bn, show: Rn, isArrayOrList: i, addClass: Nn, removeClass: zn, appendTo: jn, wrap: o, wrapAll: Pn, wrapInner: Dn, unwrap: Vn, closest: Wn, after: Yn, before: Fn, insertBefore: r, getScrollTop: Un, siblings: Xn, preventDefault: Kn, isFunction: _n, trigger: $n, matches: qn, toggle: Qn, createElementFromHTML: Gn, remove: Jn, filter: function(e2, t) {
      Array.prototype.filter.call(e2, t);
    }, untilAll: a, nextAll: Zn, prevAll: eo, showError: bn }, function(e2, E) {
      var n2 = E && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey) || -1 < jt.domain.indexOf("alvarotrigo.com"), h = yn("html, body"), u = yn("html")[0], L = yn("body")[0];
      if (!Ln(u, Ft)) {
        var g = {};
        E = En({ menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: "bottom", scrollBar: false, hybrid: false, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, fitToSectionDelay: 1e3, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: false, scrollOverflowReset: false, scrollOverflowHandler: zt.fp_scrolloverflow ? zt.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: typeof e2 == "string" ? yn(e2)[0] : e2, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, controlArrows: true, controlArrowColor: "#fff", verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: ".section", slideSelector: ".slide", v2compatible: false, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: true }, E);
        var x, i2, c, f, a2 = false, o2 = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), r2 = "ontouchstart" in zt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, d = typeof e2 == "string" ? yn(e2)[0] : e2, A = xn(), s = An(), T = false, t = true, k = true, v = [], p = { m: { up: true, down: true, left: true, right: true } };
        p.k = En({}, p.m);
        var m, l2, S, w, b, O, M, y, C, H = zt.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" }, I = { touchmove: "ontouchmove" in zt ? "touchmove" : H.move, touchstart: "ontouchstart" in zt ? "touchstart" : H.down }, B = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', R = false;
        try {
          var N = Object.defineProperty({}, "passive", { get: function() {
            R = true;
          } });
          zt.addEventListener("testPassive", null, N), zt.removeEventListener("testPassive", null, N);
        } catch (e3) {
        }
        var z, j, P, D = En({}, E), V = false, W = true, Y = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards", "dropEffect", "waterEffect"];
        Ct(), zt.fp_easings = En(zt.fp_easings, { easeInOutCubic: function(e3, t2, n3, o3) {
          return (e3 /= o3 / 2) < 1 ? n3 / 2 * e3 * e3 * e3 + t2 : n3 / 2 * ((e3 -= 2) * e3 * e3 + 2) + t2;
        } }), d && (g.version = "3.1.1", g.setAutoScrolling = Z, g.setRecordHistory = ee, g.setScrollingSpeed = te, g.setFitToSection = ne, g.setLockAnchors = function(e3) {
          E.lockAnchors = e3;
        }, g.setMouseWheelScrolling = oe, g.setAllowScrolling = re, g.setKeyboardScrolling = le, g.moveSectionUp = ae, g.moveSectionDown = se, g.silentMoveTo = ce, g.moveTo = ue, g.moveSlideRight = fe, g.moveSlideLeft = de, g.fitToSection = xe, g.reBuild = ve, g.setResponsive = he, g.getFullpageData = function() {
          return E;
        }, g.destroy = function(e3) {
          Z(false, "internal"), re(true), ie(false), le(false), Nn(d, Yt), [b, w, l2, O, M, C, S, P].forEach(function(e4) {
            clearTimeout(e4);
          }), zt.removeEventListener("scroll", Le), zt.removeEventListener("hashchange", qe), zt.removeEventListener("resize", at), jt.removeEventListener("keydown", Ge), jt.removeEventListener("keyup", Je), ["click", "touchstart"].forEach(function(e4) {
            jt.removeEventListener(e4, ge);
          }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e4) {
            jt.removeEventListener(e4, Se, true);
          }), e3 && (Tt(0), yn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", d).forEach(function(e4) {
            Ve(e4, "src");
          }), yn("img[data-srcset]").forEach(function(e4) {
            Ve(e4, "srcset");
          }), Jn(yn(nn + ", " + pn + ", " + gn)), Tn(yn(qt), { height: "", "background-color": "", padding: "" }), Tn(yn(ln), { width: "" }), Tn(d, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), Tn(h, { overflow: "", height: "" }), zn(u, Ft), zn(L, Vt), L.className.split(/\s+/).forEach(function(e4) {
            e4.indexOf(Ut) === 0 && zn(L, e4);
          }), yn(qt + ", " + ln).forEach(function(e4) {
            E.scrollOverflowHandler && E.scrollOverflow && E.scrollOverflowHandler.remove(e4), zn(e4, dn + " " + Xt + " " + _t);
            var t2 = e4.getAttribute("data-fp-styles");
            t2 && e4.setAttribute("style", e4.getAttribute("data-fp-styles")), Ln(e4, $t) && !V && e4.removeAttribute("data-anchor");
          }), ft(d), [Jt, fn, cn].forEach(function(e4) {
            yn(e4, d).forEach(function(e5) {
              Vn(e5);
            });
          }), Tn(d, { "-webkit-transition": "none", transition: "none" }), zt.scrollTo(0, 0), [$t, rn, un].forEach(function(e4) {
            zn(yn("." + e4), e4);
          }));
        }, g.getActiveSection = function() {
          return new Rt(yn(Qt)[0]);
        }, g.getActiveSlide = function() {
          return je(yn(an, yn(Qt)[0])[0]);
        }, g.test = { top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function() {
          for (var e3 = [], t2 = 0; t2 < yn(E.sectionSelector, d).length; t2++)
            e3.push("translate3d(0px, 0px, 0px)");
          return e3;
        }(), left: function() {
          for (var e3 = [], t2 = 0; t2 < yn(E.sectionSelector, d).length; t2++)
            e3.push(0);
          return e3;
        }(), options: E, setAutoScrolling: Z }, g.shared = { afterRenderActions: Ee, isNormalScrollElement: false }, zt.fullpage_api = g, E.$ && Object.keys(g).forEach(function(e3) {
          E.$.fn.fullpage[e3] = g[e3];
        }), E.css3 && (E.css3 = function() {
          var e3, t2 = jt.createElement("p"), n3 = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
          for (var o3 in t2.style.display = "block", jt.body.insertBefore(t2, null), n3)
            t2.style[o3] !== void 0 && (t2.style[o3] = "translate3d(1px,1px,1px)", e3 = zt.getComputedStyle(t2).getPropertyValue(n3[o3]));
          return jt.body.removeChild(t2), e3 !== void 0 && 0 < e3.length && e3 !== "none";
        }()), E.scrollBar = E.scrollBar || E.hybrid, function() {
          if (!E.anchors.length) {
            var e3 = "[data-anchor]", t2 = yn(E.sectionSelector.split(",").join(e3 + ",") + e3, d);
            t2.length && t2.length === yn(E.sectionSelector, d).length && (V = true, t2.forEach(function(e4) {
              E.anchors.push(e4.getAttribute("data-anchor").toString());
            }));
          }
          if (!E.navigationTooltips.length) {
            var n3 = "[data-tooltip]", o3 = yn(E.sectionSelector.split(",").join(n3 + ",") + n3, d);
            o3.length && o3.forEach(function(e4) {
              E.navigationTooltips.push(e4.getAttribute("data-tooltip").toString());
            });
          }
        }(), function() {
          Tn(d, { height: "100%", position: "relative" }), Nn(d, Pt), Nn(u, Ft), A = xn(), zn(d, Yt), Nn(yn(E.sectionSelector, d), $t), Nn(yn(E.slideSelector, d), rn);
          for (var e3 = yn(qt), t2 = 0; t2 < e3.length; t2++) {
            var n3 = t2, o3 = e3[t2], r3 = yn(ln, o3), i3 = r3.length;
            o3.setAttribute("data-fp-styles", o3.getAttribute("style")), s2 = o3, (c2 = n3) || yn(Qt)[0] != null || Nn(s2, Xt), f = yn(Qt)[0], Tn(s2, { height: A + "px" }), E.paddingTop && Tn(s2, { "padding-top": E.paddingTop }), E.paddingBottom && Tn(s2, { "padding-bottom": E.paddingBottom }), E.sectionsColor[c2] !== void 0 && Tn(s2, { "background-color": E.sectionsColor[c2] }), E.anchors[c2] !== void 0 && s2.setAttribute("data-anchor", E.anchors[c2]), l3 = o3, a3 = n3, E.anchors[a3] !== void 0 && Ln(l3, Xt) && dt(E.anchors[a3], a3), E.menu && E.css3 && Wn(yn(E.menu)[0], Dt) != null && yn(E.menu).forEach(function(e4) {
              L.appendChild(e4);
            }), 0 < i3 ? be(o3, r3, i3) : E.verticalCentered && pt(o3);
          }
          var l3, a3, s2, c2;
          E.fixedElements && E.css3 && yn(E.fixedElements).forEach(function(e4) {
            L.appendChild(e4);
          }), E.navigation && function() {
            var e4 = jt.createElement("div");
            e4.setAttribute("id", tn);
            var t3 = jt.createElement("ul");
            e4.appendChild(t3), jn(e4, L);
            var n4 = yn(nn)[0];
            Nn(n4, "fp-" + E.navigationPosition), E.showActiveTooltip && Nn(n4, "fp-show-active");
            for (var o4 = "", r4 = 0; r4 < yn(qt).length; r4++) {
              var i4 = "";
              E.anchors.length && (i4 = E.anchors[r4]), o4 += '<li><a href="#' + i4 + '"><span class="fp-sr-only">' + ye(r4, "Section") + "</span><span></span></a>";
              var l4 = E.navigationTooltips[r4];
              l4 !== void 0 && l4 !== "" && (o4 += '<div class="' + on + " fp-" + E.navigationPosition + '">' + l4 + "</div>"), o4 += "</li>";
            }
            yn("ul", n4)[0].innerHTML = o4, Nn(yn("a", yn("li", yn(nn)[0])[In(yn(Qt)[0], qt)]), Xt);
          }(), yn('iframe[src*="youtube.com/embed/"]', d).forEach(function(e4) {
            var t3, n4, o4;
            n4 = "enablejsapi=1", o4 = (t3 = e4).getAttribute("src"), t3.setAttribute("src", o4 + (/\?/.test(o4) ? "&" : "?") + n4);
          }), E.scrollOverflow && (m = E.scrollOverflowHandler.init(E));
        }(), re(true), ie(true), Z(E.autoScrolling, "internal"), ct(), Lt(), jt.readyState === "complete" && $e(), zt.addEventListener("load", $e), E.scrollOverflow || Ee(), function() {
          for (var e3 = 1; e3 < 4; e3++)
            C = setTimeout(we, 350 * e3);
        }(), zt.addEventListener("scroll", Le), zt.addEventListener("hashchange", qe), zt.addEventListener("focus", nt), zt.addEventListener("blur", ot), zt.addEventListener("resize", at), jt.addEventListener("keydown", Ge), jt.addEventListener("keyup", Je), ["click", "touchstart"].forEach(function(e3) {
          jt.addEventListener(e3, ge);
        }), E.normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e3) {
          me(e3, false);
        }), ["mouseleave", "touchend"].forEach(function(e3) {
          me(e3, true);
        })));
        var F = false, U = 0, X = 0, K = 0, _ = 0, $ = 0, q = new Date().getTime(), Q = 0, G = 0, J = A;
        return g;
      }
      function Z(e3, t2) {
        e3 || Tt(0), Mt("autoScrolling", e3, t2);
        var n3 = yn(Qt)[0];
        if (E.autoScrolling && !E.scrollBar)
          Tn(h, { overflow: "hidden", height: "100%" }), ee(D.recordHistory, "internal"), Tn(d, { "-ms-touch-action": "none", "touch-action": "none" }), n3 != null && Tt(n3.offsetTop);
        else if (Tn(h, { overflow: "visible", height: "initial" }), ee(!!E.autoScrolling && D.recordHistory, "internal"), Tn(d, { "-ms-touch-action": "", "touch-action": "" }), n3 != null) {
          var o3 = Pe(n3.offsetTop);
          o3.element.scrollTo(0, o3.options);
        }
      }
      function ee(e3, t2) {
        Mt("recordHistory", e3, t2);
      }
      function te(e3, t2) {
        Mt("scrollingSpeed", e3, t2);
      }
      function ne(e3, t2) {
        Mt("fitToSection", e3, t2);
      }
      function oe(e3) {
        e3 ? (function() {
          var e4, t2 = "";
          zt.addEventListener ? e4 = "addEventListener" : (e4 = "attachEvent", t2 = "on");
          var n3 = "onwheel" in jt.createElement("div") ? "wheel" : jt.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", o3 = !!R && { passive: false };
          n3 == "DOMMouseScroll" ? jt[e4](t2 + "MozMousePixelScroll", He, o3) : jt[e4](t2 + n3, He, o3);
        }(), d.addEventListener("mousedown", Ze), d.addEventListener("mouseup", et)) : (jt.addEventListener ? (jt.removeEventListener("mousewheel", He, false), jt.removeEventListener("wheel", He, false), jt.removeEventListener("MozMousePixelScroll", He, false)) : jt.detachEvent("onmousewheel", He), d.removeEventListener("mousedown", Ze), d.removeEventListener("mouseup", et));
      }
      function re(t2, e3) {
        e3 !== void 0 ? (e3 = e3.replace(/ /g, "").split(",")).forEach(function(e4) {
          Ot(t2, e4, "m");
        }) : Ot(t2, "all", "m");
      }
      function ie(e3) {
        e3 ? (oe(true), function() {
          if (o2 || r2) {
            E.autoScrolling && (L.removeEventListener(I.touchmove, Te, { passive: false }), L.addEventListener(I.touchmove, Te, { passive: false }));
            var e4 = E.touchWrapper;
            e4.removeEventListener(I.touchstart, Me), e4.removeEventListener(I.touchmove, ke, { passive: false }), e4.addEventListener(I.touchstart, Me), e4.addEventListener(I.touchmove, ke, { passive: false });
          }
        }()) : (oe(false), function() {
          if (o2 || r2) {
            E.autoScrolling && (L.removeEventListener(I.touchmove, ke, { passive: false }), L.removeEventListener(I.touchmove, Te, { passive: false }));
            var e4 = E.touchWrapper;
            e4.removeEventListener(I.touchstart, Me), e4.removeEventListener(I.touchmove, ke, { passive: false });
          }
        }());
      }
      function le(t2, e3) {
        e3 !== void 0 ? (e3 = e3.replace(/ /g, "").split(",")).forEach(function(e4) {
          Ot(t2, e4, "k");
        }) : (Ot(t2, "all", "k"), E.keyboardScrolling = t2);
      }
      function ae() {
        var e3 = kn(yn(Qt)[0], qt);
        e3 || !E.loopTop && !E.continuousVertical || (e3 = Hn(yn(qt))), e3 != null && Re(e3, null, true);
      }
      function se() {
        var e3 = On(yn(Qt)[0], qt);
        e3 || !E.loopBottom && !E.continuousVertical || (e3 = yn(qt)[0]), e3 != null && Re(e3, null, false);
      }
      function ce(e3, t2) {
        te(0, "internal"), ue(e3, t2), te(D.scrollingSpeed, "internal");
      }
      function ue(e3, t2) {
        var n3 = mt(e3);
        t2 !== void 0 ? St(e3, t2) : n3 != null && Re(n3);
      }
      function fe(e3) {
        Ie("right", e3);
      }
      function de(e3) {
        Ie("left", e3);
      }
      function ve(e3) {
        if (!Ln(d, Yt)) {
          T = true, A = xn(), s = An();
          for (var t2 = yn(qt), n3 = 0; n3 < t2.length; ++n3) {
            var o3 = t2[n3], r3 = yn(cn, o3)[0], i3 = yn(ln, o3);
            E.verticalCentered && Tn(yn(Jt, o3), { height: ht(o3) + "px" }), Tn(o3, { height: A + "px" }), 1 < i3.length && it(r3, yn(an, r3)[0]);
          }
          E.scrollOverflow && m.createScrollBarForAll();
          var l3 = In(yn(Qt)[0], qt);
          l3 && ce(l3 + 1), T = false, _n(E.afterResize) && e3 && E.afterResize.call(d, zt.innerWidth, zt.innerHeight), _n(E.afterReBuild) && !e3 && E.afterReBuild.call(d);
        }
      }
      function pe() {
        return Ln(L, Vt);
      }
      function he(e3) {
        var t2 = pe();
        e3 ? t2 || (Z(false, "internal"), ne(false, "internal"), Bn(yn(nn)), Nn(L, Vt), _n(E.afterResponsive) && E.afterResponsive.call(d, e3), E.scrollOverflow && m.createScrollBarForAll()) : t2 && (Z(D.autoScrolling, "internal"), ne(D.autoScrolling, "internal"), Rn(yn(nn)), zn(L, Vt), _n(E.afterResponsive) && E.afterResponsive.call(d, e3));
      }
      function ge(e3) {
        var t2 = e3.target;
        t2 && Wn(t2, nn + " a") ? function(e4) {
          Kn(e4);
          var t3 = In(Wn(this, nn + " li"));
          Re(yn(qt)[t3]);
        }.call(t2, e3) : qn(t2, ".fp-tooltip") ? function() {
          $n(Mn(this), "click");
        }.call(t2) : qn(t2, gn) ? function() {
          var e4 = Wn(this, qt);
          Ln(this, mn) ? p.m.left && de(e4) : p.m.right && fe(e4);
        }.call(t2, e3) : qn(t2, hn) || Wn(t2, hn) != null ? function(e4) {
          Kn(e4);
          var t3 = yn(cn, Wn(this, qt))[0], n3 = yn(ln, t3)[In(Wn(this, "li"))];
          it(t3, n3);
        }.call(t2, e3) : Wn(t2, E.menu + " [data-menuanchor]") && function(e4) {
          !yn(E.menu)[0] || !E.lockAnchors && E.anchors.length || (Kn(e4), ue(this.getAttribute("data-menuanchor")));
        }.call(t2, e3);
      }
      function me(e3, t2) {
        jt["fp_" + e3] = t2, jt.addEventListener(e3, Se, true);
      }
      function Se(e3) {
        var t2 = e3.type, o3 = false, r3 = E.scrollOverflow, i3 = t2 === "mouseleave" ? e3.toElement || e3.relatedTarget : e3.target;
        if (i3 == jt || !i3)
          return ie(true), void (r3 && E.scrollOverflowHandler.setIscroll(i3, true));
        t2 === "touchend" && (W = false, setTimeout(function() {
          W = true;
        }, 800)), (t2 !== "mouseenter" || W) && (E.normalScrollElements.split(",").forEach(function(e4) {
          if (!o3) {
            var t3 = qn(i3, e4), n3 = Wn(i3, e4);
            (t3 || n3) && (g.shared.isNormalScrollElement || (ie(false), r3 && E.scrollOverflowHandler.setIscroll(i3, false)), g.shared.isNormalScrollElement = true, o3 = true);
          }
        }), !o3 && g.shared.isNormalScrollElement && (ie(true), r3 && E.scrollOverflowHandler.setIscroll(i3, true), g.shared.isNormalScrollElement = false));
      }
      function we() {
        var e3 = xn(), t2 = An();
        A === e3 && s === t2 || (A = e3, s = t2, ve(true));
      }
      function be(e3, t2, n3) {
        var o3 = 100 * n3, r3 = 100 / n3, i3 = jt.createElement("div");
        i3.className = sn, Pn(t2, i3);
        var l3, a3, s2 = jt.createElement("div");
        s2.className = un, Pn(t2, s2), Tn(yn(fn, e3), { width: o3 + "%" }), 1 < n3 && (E.controlArrows && (l3 = e3, a3 = [Gn('<div class="fp-controlArrow fp-prev"></div>'), Gn('<div class="fp-controlArrow fp-next"></div>')], Yn(yn(cn, l3)[0], a3), E.controlArrowColor !== "#fff" && (Tn(yn(wn, l3), { "border-color": "transparent transparent transparent " + E.controlArrowColor }), Tn(yn(Sn, l3), { "border-color": "transparent " + E.controlArrowColor + " transparent transparent" })), E.loopHorizontal || Bn(yn(Sn, l3))), E.slidesNavigation && function(e4, t3) {
          jn(Gn('<div class="' + vn + '"><ul></ul></div>'), e4);
          var n4 = yn(pn, e4)[0];
          Nn(n4, "fp-" + E.slidesNavPosition);
          for (var o4 = 0; o4 < t3; o4++) {
            var r4 = yn(ln, e4)[o4];
            jn(Gn('<li><a href="#"><span class="fp-sr-only">' + ye(o4, "Slide", r4) + "</span><span></span></a></li>"), yn("ul", n4)[0]);
          }
          Tn(n4, { "margin-left": "-" + n4.innerWidth / 2 + "px" }), Nn(yn("a", yn("li", n4)[0]), Xt);
        }(e3, n3)), t2.forEach(function(e4) {
          Tn(e4, { width: r3 + "%" }), E.verticalCentered && pt(e4);
        });
        var c2 = yn(an, e3)[0];
        c2 != null && (In(yn(Qt), qt) !== 0 || In(yn(Qt), qt) === 0 && In(c2) !== 0) ? At(c2, "internal") : Nn(t2[0], Xt);
      }
      function ye(e3, t2, n3) {
        var o3 = t2 === "Section" ? E.anchors[e3] : n3.getAttribute("data-anchor");
        return E.navigationTooltips[e3] || o3 || t2 + " " + (e3 + 1);
      }
      function Ee() {
        var e3, t2, n3 = yn(Qt)[0];
        Nn(n3, _t), Ye(n3), We(), Ue(n3), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), e3 = Qe(), t2 = mt(e3.section), e3.section && t2 && (t2 === void 0 || In(t2) !== In(f)) || !_n(E.afterLoad) || Ne("afterLoad", { activeSection: n3, element: n3, direction: null, anchorLink: n3.getAttribute("data-anchor"), sectionIndex: In(n3, qt) }), _n(E.afterRender) && Ne("afterRender");
      }
      function Le() {
        var e3, t2, n3, o3, r3, i3;
        if (!T && (!E.autoScrolling || E.scrollBar)) {
          var l3 = Un(), a3 = (i3 = U < (r3 = l3) ? "down" : "up", Q = U = r3, i3), s2 = 0, c2 = l3 + xn() / 2, u2 = L.offsetHeight - xn() === l3, f2 = yn(qt);
          if (u2)
            s2 = f2.length - 1;
          else if (l3)
            for (var d2 = 0; d2 < f2.length; ++d2)
              f2[d2].offsetTop <= c2 && (s2 = d2);
          else
            s2 = 0;
          if (t2 = a3, n3 = yn(Qt)[0].offsetTop, o3 = n3 + xn(), (t2 != "up" ? n3 <= Un() : o3 >= Un() + xn()) && (Ln(yn(Qt)[0], _t) || (Nn(yn(Qt)[0], _t), zn(Xn(yn(Qt)[0]), _t))), !Ln(e3 = f2[s2], Xt)) {
            F = true;
            var v2, p2, h2 = yn(Qt)[0], g2 = In(h2, qt) + 1, m2 = vt(e3), S2 = e3.getAttribute("data-anchor"), w2 = In(e3, qt) + 1, b2 = yn(an, e3)[0], y2 = { activeSection: h2, sectionIndex: w2 - 1, anchorLink: S2, element: e3, leavingSection: g2, direction: m2 };
            b2 && (p2 = b2.getAttribute("data-anchor"), v2 = In(b2)), k && (Nn(e3, Xt), zn(Xn(e3), Xt), _n(E.onLeave) && Ne("onLeave", y2), _n(E.afterLoad) && Ne("afterLoad", y2), Ke(h2), Ye(e3), Ue(e3), dt(S2, w2 - 1), E.anchors.length && (x = S2), bt(v2, p2, S2)), clearTimeout(O), O = setTimeout(function() {
              F = false;
            }, 100);
          }
          E.fitToSection && (clearTimeout(M), M = setTimeout(function() {
            E.fitToSection && yn(Qt)[0].offsetHeight <= A && xe();
          }, E.fitToSectionDelay));
        }
      }
      function xe() {
        k && (T = true, Re(yn(Qt)[0]), T = false);
      }
      function Ae(e3) {
        if (p.m[e3]) {
          var t2 = e3 === "down" ? se : ae;
          if (E.scrollOverflow) {
            var n3 = E.scrollOverflowHandler.scrollable(yn(Qt)[0]), o3 = e3 === "down" ? "bottom" : "top";
            if (n3 != null) {
              if (!E.scrollOverflowHandler.isScrolled(o3, n3))
                return true;
              t2();
            } else
              t2();
          } else
            t2();
        }
      }
      function Te(e3) {
        E.autoScrolling && Oe(e3) && p.m.up && Kn(e3);
      }
      function ke(e3) {
        var t2 = Wn(e3.target, qt) || yn(Qt)[0];
        if (Oe(e3)) {
          E.autoScrolling && Kn(e3);
          var n3 = xt(e3);
          _ = n3.y, $ = n3.x, yn(cn, t2).length && Math.abs(K - $) > Math.abs(X - _) ? !a2 && Math.abs(K - $) > An() / 100 * E.touchSensitivity && ($ < K ? p.m.right && fe(t2) : p.m.left && de(t2)) : E.autoScrolling && k && Math.abs(X - _) > zt.innerHeight / 100 * E.touchSensitivity && (_ < X ? Ae("down") : X < _ && Ae("up"));
        }
      }
      function Oe(e3) {
        return e3.pointerType === void 0 || e3.pointerType != "mouse";
      }
      function Me(e3) {
        if (E.fitToSection && (z = false), Oe(e3)) {
          var t2 = xt(e3);
          X = t2.y, K = t2.x;
        }
      }
      function Ce(e3, t2) {
        for (var n3 = 0, o3 = e3.slice(Math.max(e3.length - t2, 1)), r3 = 0; r3 < o3.length; r3++)
          n3 += o3[r3];
        return Math.ceil(n3 / t2);
      }
      function He(e3) {
        var t2 = new Date().getTime(), n3 = Ln(yn(".fp-completely")[0], en);
        if (!p.m.down && !p.m.up)
          return Kn(e3), false;
        if (E.autoScrolling && !c && !n3) {
          var o3 = (e3 = e3 || zt.event).wheelDelta || -e3.deltaY || -e3.detail, r3 = Math.max(-1, Math.min(1, o3)), i3 = e3.wheelDeltaX !== void 0 || e3.deltaX !== void 0, l3 = Math.abs(e3.wheelDeltaX) < Math.abs(e3.wheelDelta) || Math.abs(e3.deltaX) < Math.abs(e3.deltaY) || !i3;
          149 < v.length && v.shift(), v.push(Math.abs(o3)), E.scrollBar && Kn(e3);
          var a3 = t2 - q;
          if (q = t2, 200 < a3 && (v = []), k) {
            var s2 = Ce(v, 10);
            Ce(v, 70) <= s2 && l3 && Ae(r3 < 0 ? "down" : "up");
          }
          return false;
        }
        E.fitToSection && (z = false);
      }
      function Ie(e3, t2) {
        var n3 = t2 == null ? yn(Qt)[0] : t2, o3 = yn(cn, n3)[0];
        if (!(o3 == null || a2 || yn(ln, o3).length < 2)) {
          var r3 = yn(an, o3)[0], i3 = null;
          if ((i3 = e3 === "left" ? kn(r3, ln) : On(r3, ln)) == null) {
            if (!E.loopHorizontal)
              return;
            var l3 = Xn(r3);
            i3 = e3 === "left" ? l3[l3.length - 1] : l3[0];
          }
          a2 = !g.test.isTesting, it(o3, i3, e3);
        }
      }
      function Be() {
        for (var e3 = yn(an), t2 = 0; t2 < e3.length; t2++)
          At(e3[t2], "internal");
      }
      function Re(e3, t2, n3) {
        if (e3 != null) {
          var o3, r3, i3, l3, a3, s2, c2, u2, f2, d2 = { element: e3, callback: t2, isMovementUp: n3, dtop: (r3 = (o3 = e3).offsetHeight, i3 = o3.offsetTop, a3 = Q < (l3 = i3), s2 = l3 - A + r3, c2 = E.bigSectionsDestination, A < r3 ? (a3 || c2) && c2 !== "bottom" || (l3 = s2) : (a3 || T && Cn(o3) == null) && (l3 = s2), Q = l3), yMovement: vt(e3), anchorLink: e3.getAttribute("data-anchor"), sectionIndex: In(e3, qt), activeSlide: yn(an, e3)[0], activeSection: yn(Qt)[0], leavingSection: In(yn(Qt), qt) + 1, localIsResizing: T };
          if (!(d2.activeSection == e3 && !T || E.scrollBar && Un() === d2.dtop && !Ln(e3, Zt))) {
            if (d2.activeSlide != null && (u2 = d2.activeSlide.getAttribute("data-anchor"), f2 = In(d2.activeSlide)), !d2.localIsResizing) {
              var v2 = d2.yMovement;
              if (n3 !== void 0 && (v2 = n3 ? "up" : "down"), d2.direction = v2, _n(E.onLeave) && Ne("onLeave", d2) === false)
                return;
            }
            E.autoScrolling && E.continuousVertical && d2.isMovementUp !== void 0 && (!d2.isMovementUp && d2.yMovement == "up" || d2.isMovementUp && d2.yMovement == "down") && ((p2 = d2).isMovementUp ? Fn(yn(Qt)[0], Zn(p2.activeSection, qt)) : Yn(yn(Qt)[0], eo(p2.activeSection, qt).reverse()), Tt(yn(Qt)[0].offsetTop), Be(), p2.wrapAroundElements = p2.activeSection, p2.dtop = p2.element.offsetTop, p2.yMovement = vt(p2.element), d2 = p2), d2.localIsResizing || Ke(d2.activeSection), E.scrollOverflow && E.scrollOverflowHandler.beforeLeave(), Nn(e3, Xt), zn(Xn(e3), Xt), Ye(e3), E.scrollOverflow && E.scrollOverflowHandler.onLeave(), k = g.test.isTesting, bt(f2, u2, d2.anchorLink, d2.sectionIndex), function(e4) {
              var t3 = E.scrollingSpeed < 700, n4 = t3 ? 700 : E.scrollingSpeed;
              if (E.css3 && E.autoScrolling && !E.scrollBar) {
                var o4 = "translate3d(0px, -" + Math.round(e4.dtop) + "px, 0px)";
                gt(o4, true), E.scrollingSpeed ? (clearTimeout(w), w = setTimeout(function() {
                  De(e4), k = !t3;
                }, E.scrollingSpeed)) : De(e4);
              } else {
                var r4 = Pe(e4.dtop);
                g.test.top = -e4.dtop + "px", Tn(h, { "scroll-behavior": "unset" }), Ht(r4.element, r4.options, E.scrollingSpeed, function() {
                  E.scrollBar ? setTimeout(function() {
                    De(e4);
                  }, 30) : (De(e4), k = !t3);
                });
              }
              t3 && (clearTimeout(P), P = setTimeout(function() {
                k = true;
              }, n4));
            }(d2), x = d2.anchorLink, dt(d2.anchorLink, d2.sectionIndex);
          }
        }
        var p2;
      }
      function Ne(e3, t2) {
        var n3, o3, r3, i3, l3 = (o3 = e3, r3 = t2, (i3 = E.v2compatible ? { afterRender: function() {
          return [d];
        }, onLeave: function() {
          return [r3.activeSection, r3.leavingSection, r3.sectionIndex + 1, r3.direction];
        }, afterLoad: function() {
          return [r3.element, r3.anchorLink, r3.sectionIndex + 1];
        }, afterSlideLoad: function() {
          return [r3.destiny, r3.anchorLink, r3.sectionIndex + 1, r3.slideAnchor, r3.slideIndex];
        }, onSlideLeave: function() {
          return [r3.prevSlide, r3.anchorLink, r3.sectionIndex + 1, r3.prevSlideIndex, r3.direction, r3.slideIndex];
        } } : { afterRender: function() {
          return { section: ze(yn(Qt)[0]), slide: je(yn(an, yn(Qt)[0])[0]) };
        }, onLeave: function() {
          return { origin: ze(r3.activeSection), destination: ze(r3.element), direction: r3.direction };
        }, afterLoad: function() {
          return i3.onLeave();
        }, afterSlideLoad: function() {
          return { section: ze(r3.section), origin: je(r3.prevSlide), destination: je(r3.destiny), direction: r3.direction };
        }, onSlideLeave: function() {
          return i3.afterSlideLoad();
        } })[o3]());
        if (E.v2compatible) {
          if (E[e3].apply(l3[0], l3.slice(1)) === false)
            return false;
        } else if ($n(d, e3, l3), E[e3].apply(l3[Object.keys(l3)[0]], (n3 = l3, Object.keys(n3).map(function(e4) {
          return n3[e4];
        }))) === false)
          return false;
        return true;
      }
      function ze(e3) {
        return e3 ? new Rt(e3) : null;
      }
      function je(e3) {
        return e3 ? new Nt(e3) : null;
      }
      function Pe(e3) {
        var t2 = {};
        return E.autoScrolling && !E.scrollBar ? (t2.options = -e3, t2.element = yn(Dt)[0]) : (t2.options = e3, t2.element = zt), t2;
      }
      function De(e3) {
        var t2;
        (t2 = e3).wrapAroundElements != null && (t2.isMovementUp ? Fn(yn(qt)[0], t2.wrapAroundElements) : Yn(yn(qt)[yn(qt).length - 1], t2.wrapAroundElements), Tt(yn(Qt)[0].offsetTop), Be()), _n(E.afterLoad) && !e3.localIsResizing && Ne("afterLoad", e3), E.scrollOverflow && E.scrollOverflowHandler.afterLoad(), e3.localIsResizing || Ue(e3.element), Nn(e3.element, _t), zn(Xn(e3.element), _t), We(), k = true, _n(e3.callback) && e3.callback();
      }
      function Ve(e3, t2) {
        e3.setAttribute(t2, e3.getAttribute("data-" + t2)), e3.removeAttribute("data-" + t2);
      }
      function We() {
        var e3 = yn(".fp-auto-height")[0] || pe() && yn(".fp-auto-height-responsive")[0];
        E.lazyLoading && e3 && yn(qt + ":not(" + Kt + ")").forEach(function(e4) {
          var t2, n3, o3;
          t2 = e4.getBoundingClientRect(), n3 = t2.top, o3 = t2.bottom, (n3 + 2 < A && 0 < n3 || 2 < o3 && o3 < A) && Ye(e4);
        });
      }
      function Ye(o3) {
        E.lazyLoading && yn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", _e(o3)).forEach(function(n3) {
          if (["src", "srcset"].forEach(function(e4) {
            var t2 = n3.getAttribute("data-" + e4);
            t2 != null && t2 && (Ve(n3, e4), n3.addEventListener("load", function() {
              Fe(o3);
            }));
          }), qn(n3, "source")) {
            var e3 = Wn(n3, "video, audio");
            e3 && (e3.load(), e3.onloadeddata = function() {
              Fe(o3);
            });
          }
        });
      }
      function Fe(e3) {
        E.scrollOverflow && (clearTimeout(j), j = setTimeout(function() {
          Ln(L, Vt) || m.createScrollBar(e3);
        }, 200));
      }
      function Ue(e3) {
        var t2 = _e(e3);
        yn("video, audio", t2).forEach(function(e4) {
          e4.hasAttribute("data-autoplay") && typeof e4.play == "function" && e4.play();
        }), yn('iframe[src*="youtube.com/embed/"]', t2).forEach(function(e4) {
          e4.hasAttribute("data-autoplay") && Xe(e4), e4.onload = function() {
            e4.hasAttribute("data-autoplay") && Xe(e4);
          };
        });
      }
      function Xe(e3) {
        e3.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
      }
      function Ke(e3) {
        var t2 = _e(e3);
        yn("video, audio", t2).forEach(function(e4) {
          e4.hasAttribute("data-keepplaying") || typeof e4.pause != "function" || e4.pause();
        }), yn('iframe[src*="youtube.com/embed/"]', t2).forEach(function(e4) {
          /youtube\.com\/embed\//.test(e4.getAttribute("src")) && !e4.hasAttribute("data-keepplaying") && e4.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        });
      }
      function _e(e3) {
        var t2 = yn(an, e3);
        return t2.length && (e3 = t2[0]), e3;
      }
      function $e() {
        var e3 = Qe(), t2 = e3.section, n3 = e3.slide;
        t2 && (E.animateAnchor ? St(t2, n3) : ce(t2, n3));
      }
      function qe() {
        if (!F && !E.lockAnchors) {
          var e3 = Qe(), t2 = e3.section, n3 = e3.slide, o3 = x === void 0, r3 = x === void 0 && n3 === void 0 && !a2;
          t2 && t2.length && (t2 && t2 !== x && !o3 || r3 || !a2 && i2 != n3) && St(t2, n3);
        }
      }
      function Qe() {
        var e3, t2, n3 = zt.location.hash;
        if (n3.length) {
          var o3 = n3.replace("#", "").split("/"), r3 = -1 < n3.indexOf("#/");
          e3 = r3 ? "/" + o3[1] : decodeURIComponent(o3[0]);
          var i3 = r3 ? o3[2] : o3[1];
          i3 && i3.length && (t2 = decodeURIComponent(i3));
        }
        return { section: e3, slide: t2 };
      }
      function Ge(e3) {
        clearTimeout(y);
        var t2 = jt.activeElement, n3 = e3.keyCode;
        n3 === 9 ? function(e4) {
          var t3, n4, o3, r3, i3, l3, a3, s2 = e4.shiftKey, c2 = jt.activeElement, u2 = tt(_e(yn(Qt)[0]));
          function f2(e5) {
            return Kn(e5), u2[0] ? u2[0].focus() : null;
          }
          (t3 = e4, n4 = tt(jt), o3 = n4.indexOf(jt.activeElement), r3 = t3.shiftKey ? o3 - 1 : o3 + 1, i3 = n4[r3], l3 = je(Wn(i3, ln)), a3 = ze(Wn(i3, qt)), l3 || a3) && (c2 ? Wn(c2, Qt + "," + Qt + " " + an) == null && (c2 = f2(e4)) : f2(e4), (!s2 && c2 == u2[u2.length - 1] || s2 && c2 == u2[0]) && Kn(e4));
        }(e3) : qn(t2, "textarea") || qn(t2, "input") || qn(t2, "select") || t2.getAttribute("contentEditable") === "true" || t2.getAttribute("contentEditable") === "" || !E.keyboardScrolling || !E.autoScrolling || (-1 < [40, 38, 32, 33, 34].indexOf(n3) && Kn(e3), c = e3.ctrlKey, y = setTimeout(function() {
          !function(e4) {
            var t3 = e4.shiftKey, n4 = jt.activeElement, o3 = qn(n4, "video") || qn(n4, "audio");
            if (k || !([37, 39].indexOf(e4.keyCode) < 0))
              switch (e4.keyCode) {
                case 38:
                case 33:
                  p.k.up && ae();
                  break;
                case 32:
                  if (t3 && p.k.up && !o3) {
                    ae();
                    break;
                  }
                case 40:
                case 34:
                  p.k.down && (e4.keyCode === 32 && o3 || se());
                  break;
                case 36:
                  p.k.up && ue(1);
                  break;
                case 35:
                  p.k.down && ue(yn(qt).length);
                  break;
                case 37:
                  p.k.left && de();
                  break;
                case 39:
                  p.k.right && fe();
              }
          }(e3);
        }, 150));
      }
      function Je(e3) {
        t && (c = e3.ctrlKey);
      }
      function Ze(e3) {
        e3.which == 2 && (G = e3.pageY, d.addEventListener("mousemove", rt));
      }
      function et(e3) {
        e3.which == 2 && d.removeEventListener("mousemove", rt);
      }
      function tt(e3) {
        return [].slice.call(yn(B, e3)).filter(function(e4) {
          return e4.getAttribute("tabindex") !== "-1" && e4.offsetParent !== null;
        });
      }
      function nt() {
        t = true;
      }
      function ot() {
        c = t = false;
      }
      function rt(e3) {
        E.autoScrolling && (k && (e3.pageY < G && p.m.up ? ae() : e3.pageY > G && p.m.down && se()), G = e3.pageY);
      }
      function it(e3, t2, n3) {
        var o3, r3, i3 = Wn(e3, qt), l3 = { slides: e3, destiny: t2, direction: n3, destinyPos: { left: t2.offsetLeft }, slideIndex: In(t2), section: i3, sectionIndex: In(i3, qt), anchorLink: i3.getAttribute("data-anchor"), slidesNav: yn(pn, i3)[0], slideAnchor: Et(t2), prevSlide: yn(an, i3)[0], prevSlideIndex: In(yn(an, i3)[0]), localIsResizing: T };
        l3.xMovement = (o3 = l3.prevSlideIndex, r3 = l3.slideIndex, o3 == r3 ? "none" : r3 < o3 ? "left" : "right"), l3.direction = l3.direction ? l3.direction : l3.xMovement, l3.localIsResizing || (k = false), E.onSlideLeave && !l3.localIsResizing && l3.xMovement !== "none" && _n(E.onSlideLeave) && Ne("onSlideLeave", l3) === false ? a2 = false : (Nn(t2, Xt), zn(Xn(t2), Xt), l3.localIsResizing || (Ke(l3.prevSlide), Ye(t2)), !E.loopHorizontal && E.controlArrows && (Qn(yn(Sn, i3), l3.slideIndex !== 0), Qn(yn(wn, i3), Cn(t2) != null)), Ln(i3, Xt) && !l3.localIsResizing && bt(l3.slideIndex, l3.slideAnchor, l3.anchorLink, l3.sectionIndex), function(e4, t3, n4) {
          var o4 = t3.destinyPos;
          if (E.css3) {
            var r4 = "translate3d(-" + Math.round(o4.left) + "px, 0px, 0px)";
            g.test.translate3dH[t3.sectionIndex] = r4, Tn(ut(yn(fn, e4)), kt(r4)), b = setTimeout(function() {
              n4 && lt(t3);
            }, E.scrollingSpeed);
          } else
            g.test.left[t3.sectionIndex] = Math.round(o4.left), Ht(e4, Math.round(o4.left), E.scrollingSpeed, function() {
              n4 && lt(t3);
            });
        }(e3, l3, true));
      }
      function lt(e3) {
        var t2, n3;
        t2 = e3.slidesNav, n3 = e3.slideIndex, E.slidesNavigation && t2 != null && (zn(yn(Kt, t2), Xt), Nn(yn("a", yn("li", t2)[n3]), Xt)), e3.localIsResizing || (_n(E.afterSlideLoad) && Ne("afterSlideLoad", e3), k = true, Ue(e3.destiny)), a2 = false;
      }
      function at() {
        clearTimeout(l2), l2 = setTimeout(function() {
          for (var e3 = 0; e3 < 4; e3++)
            S = setTimeout(st, 200 * e3);
        }, 200);
      }
      function st() {
        if (T = true, ct(), o2) {
          var e3 = jt.activeElement;
          if (!qn(e3, "textarea") && !qn(e3, "input") && !qn(e3, "select")) {
            var t2 = xn();
            Math.abs(t2 - J) > 20 * Math.max(J, t2) / 100 && (ve(true), J = t2);
          }
        } else
          we();
        T = false;
      }
      function ct() {
        var e3 = E.responsive || E.responsiveWidth, t2 = E.responsiveHeight, n3 = e3 && zt.innerWidth < e3, o3 = t2 && zt.innerHeight < t2;
        e3 && t2 ? he(n3 || o3) : e3 ? he(n3) : t2 && he(o3);
      }
      function ut(e3) {
        var t2 = "all " + E.scrollingSpeed + "ms " + E.easingcss3;
        return zn(e3, Wt), Tn(e3, { "-webkit-transition": t2, transition: t2 });
      }
      function ft(e3) {
        return Nn(e3, Wt);
      }
      function dt(e3, t2) {
        var n3, o3, r3;
        n3 = e3, yn(E.menu).forEach(function(e4) {
          E.menu && e4 != null && (zn(yn(Kt, e4), Xt), Nn(yn('[data-menuanchor="' + n3 + '"]', e4), Xt));
        }), o3 = e3, r3 = t2, E.navigation && yn(nn)[0] != null && (zn(yn(Kt, yn(nn)[0]), Xt), Nn(o3 ? yn('a[href="#' + o3 + '"]', yn(nn)[0]) : yn("a", yn("li", yn(nn)[0])[r3]), Xt));
      }
      function vt(e3) {
        var t2 = In(yn(Qt)[0], qt), n3 = In(e3, qt);
        return t2 == n3 ? "none" : n3 < t2 ? "up" : "down";
      }
      function pt(e3) {
        if (!Ln(e3, dn)) {
          var t2 = jt.createElement("div");
          t2.className = Gt, t2.style.height = ht(e3) + "px", Nn(e3, dn), Dn(e3, t2);
        }
      }
      function ht(e3) {
        var t2 = A;
        if (E.paddingTop || E.paddingBottom) {
          var n3 = e3;
          Ln(n3, $t) || (n3 = Wn(e3, qt));
          var o3 = parseInt(getComputedStyle(n3)["padding-top"]) + parseInt(getComputedStyle(n3)["padding-bottom"]);
          t2 = A - o3;
        }
        return t2;
      }
      function gt(e3, t2) {
        t2 ? ut(d) : ft(d), Tn(d, kt(e3)), g.test.translate3d = e3, setTimeout(function() {
          zn(d, Wt);
        }, 10);
      }
      function mt(e3) {
        var t2 = yn(qt + '[data-anchor="' + e3 + '"]', d)[0];
        if (!t2) {
          var n3 = e3 !== void 0 ? e3 - 1 : 0;
          t2 = yn(qt)[n3];
        }
        return t2;
      }
      function St(e3, t2) {
        var n3 = mt(e3);
        if (n3 != null) {
          var o3, r3, i3, l3 = ((i3 = yn(ln + '[data-anchor="' + (o3 = t2) + '"]', r3 = n3)[0]) == null && (o3 = o3 !== void 0 ? o3 : 0, i3 = yn(ln, r3)[o3]), i3);
          Et(n3) === x || Ln(n3, Xt) ? wt(l3) : Re(n3, function() {
            wt(l3);
          });
        }
      }
      function wt(e3) {
        e3 != null && it(Wn(e3, cn), e3);
      }
      function bt(e3, t2, n3, o3) {
        var r3 = "";
        E.anchors.length && !E.lockAnchors && (e3 ? (n3 != null && (r3 = n3), t2 == null && (t2 = e3), yt(r3 + "/" + (i2 = t2))) : (e3 != null && (i2 = t2), yt(n3))), Lt();
      }
      function yt(e3) {
        if (E.recordHistory)
          location.hash = e3;
        else if (o2 || r2)
          zt.history.replaceState(void 0, void 0, "#" + e3);
        else {
          var t2 = zt.location.href.split("#")[0];
          zt.location.replace(t2 + "#" + e3);
        }
      }
      function Et(e3) {
        if (!e3)
          return null;
        var t2 = e3.getAttribute("data-anchor"), n3 = In(e3);
        return t2 == null && (t2 = n3), t2;
      }
      function Lt() {
        var e3 = yn(Qt)[0], t2 = yn(an, e3)[0], n3 = Et(e3), o3 = Et(t2), r3 = String(n3);
        t2 && (r3 = r3 + "-" + o3), r3 = r3.replace("/", "-").replace("#", "");
        var i3 = new RegExp("\\b\\s?" + Ut + "-[^\\s]+\\b", "g");
        L.className = L.className.replace(i3, ""), Nn(L, Ut + "-" + r3);
      }
      function xt(e3) {
        var t2 = [];
        return t2.y = e3.pageY !== void 0 && (e3.pageY || e3.pageX) ? e3.pageY : e3.touches[0].pageY, t2.x = e3.pageX !== void 0 && (e3.pageY || e3.pageX) ? e3.pageX : e3.touches[0].pageX, r2 && Oe(e3) && E.scrollBar && e3.touches !== void 0 && (t2.y = e3.touches[0].pageY, t2.x = e3.touches[0].pageX), t2;
      }
      function At(e3, t2) {
        te(0, "internal"), t2 !== void 0 && (T = true), it(Wn(e3, cn), e3), t2 !== void 0 && (T = false), te(D.scrollingSpeed, "internal");
      }
      function Tt(e3) {
        var t2 = Math.round(e3);
        if (E.css3 && E.autoScrolling && !E.scrollBar)
          gt("translate3d(0px, -" + t2 + "px, 0px)", false);
        else if (E.autoScrolling && !E.scrollBar)
          Tn(d, { top: -t2 + "px" }), g.test.top = -t2 + "px";
        else {
          var n3 = Pe(t2);
          It(n3.element, n3.options);
        }
      }
      function kt(e3) {
        return { "-webkit-transform": e3, "-moz-transform": e3, "-ms-transform": e3, transform: e3 };
      }
      function Ot(t2, e3, n3) {
        e3 !== "all" ? p[n3][e3] = t2 : Object.keys(p[n3]).forEach(function(e4) {
          p[n3][e4] = t2;
        });
      }
      function Mt(e3, t2, n3) {
        E[e3] = t2, n3 !== "internal" && (D[e3] = t2);
      }
      function Ct() {
        var e3 = E.licenseKey, t2 = "font-size: 15px;background:yellow;";
        n2 ? e3 && e3.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t2), console.warn("%c https://alvarotrigo.com/fullPage/", t2)) : (bn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), bn("error", "https://github.com/alvarotrigo/fullPage.js#options")), Ln(u, Ft) ? bn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (E.continuousVertical && (E.loopTop || E.loopBottom) && (E.continuousVertical = false, bn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !E.scrollOverflow || !E.scrollBar && E.autoScrolling || bn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !E.continuousVertical || !E.scrollBar && E.autoScrolling || (E.continuousVertical = false, bn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), E.scrollOverflow && E.scrollOverflowHandler == null && (E.scrollOverflow = false, bn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), Y.forEach(function(e4) {
          E[e4] && bn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e4);
        }), E.anchors.forEach(function(t3) {
          var e4 = [].slice.call(yn("[name]")).filter(function(e5) {
            return e5.getAttribute("name") && e5.getAttribute("name").toLowerCase() == t3.toLowerCase();
          }), n3 = [].slice.call(yn("[id]")).filter(function(e5) {
            return e5.getAttribute("id") && e5.getAttribute("id").toLowerCase() == t3.toLowerCase();
          });
          if (n3.length || e4.length) {
            bn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
            var o3 = n3.length ? "id" : "name";
            (n3.length || e4.length) && bn("error", '"' + t3 + '" is is being used by another element `' + o3 + "` property");
          }
        }));
      }
      function Ht(t2, n3, o3, r3) {
        var e3, i3 = (e3 = t2).self != zt && Ln(e3, sn) ? e3.scrollLeft : !E.autoScrolling || E.scrollBar ? Un() : e3.offsetTop, l3 = n3 - i3, a3 = 0;
        z = true;
        var s2 = function() {
          if (z) {
            var e4 = n3;
            a3 += 20, o3 && (e4 = zt.fp_easings[E.easing](a3, i3, l3, o3)), It(t2, e4), a3 < o3 ? setTimeout(s2, 20) : r3 !== void 0 && r3();
          } else
            a3 < o3 && r3();
        };
        s2();
      }
      function It(e3, t2) {
        !E.autoScrolling || E.scrollBar || e3.self != zt && Ln(e3, sn) ? e3.self != zt && Ln(e3, sn) ? e3.scrollLeft = t2 : e3.scrollTo(0, t2) : e3.style.top = t2 + "px";
      }
      function Bt(e3, t2) {
        this.anchor = e3.getAttribute("data-anchor"), this.item = e3, this.index = In(e3, t2), this.isLast = this.index === e3.parentElement.querySelectorAll(t2).length - 1, this.isFirst = !this.index;
      }
      function Rt(e3) {
        Bt.call(this, e3, qt);
      }
      function Nt(e3) {
        Bt.call(this, e3, ln);
      }
      Ct();
    };
  }), window.jQuery && window.fullpage && function(t, n) {
    t && n ? t.fn.fullpage = function(e) {
      e = t.extend({}, e, { $: t });
      new n(this[0], e);
    } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
  }(window.jQuery, window.fullpage);
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
