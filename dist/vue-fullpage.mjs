import { openBlock as nl, createElementBlock as il, renderSlot as ol } from "vue";
/*!
* vue-fullpage 0.2.20
* https://github.com/alvarotrigo/vue-fullpage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
var rl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ll(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default") ? I.default : I;
}
var wr = { exports: {} };
/*!
* fullPage 4.0.30
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/
(function(I, Q) {
  (function(ne, ie) {
    I.exports = ie();
  })(rl, function() {
    var ne, ie, xe, un, Ni = Object.freeze({ __proto__: null, get showError() {
      return ee;
    }, get isVisible() {
      return ii;
    }, get getVisible() {
      return ut;
    }, get $() {
      return s;
    }, get deepExtend() {
      return je;
    }, get hasClass() {
      return D;
    }, get getWindowHeight() {
      return F;
    }, get t() {
      return ft;
    }, get css() {
      return C;
    }, get prev() {
      return Ft;
    }, get next() {
      return dt;
    }, get last() {
      return ko;
    }, get index() {
      return de;
    }, get getList() {
      return Se;
    }, get hide() {
      return Wt;
    }, get show() {
      return oi;
    }, get isArrayOrList() {
      return Ye;
    }, get addClass() {
      return E;
    }, get removeClass() {
      return N;
    }, get appendTo() {
      return Fe;
    }, get wrap() {
      return ri;
    }, get wrapAll() {
      return Xt;
    }, get wrapInner() {
      return li;
    }, get unwrap() {
      return Zt;
    }, get closest() {
      return M;
    }, get after() {
      return pt;
    }, get before() {
      return Ut;
    }, get insertBefore() {
      return Gt;
    }, get getScrollTop() {
      return we;
    }, get siblings() {
      return We;
    }, get preventDefault() {
      return W;
    }, get i() {
      return H;
    }, get o() {
      return Pe;
    }, get u() {
      return pe;
    }, get l() {
      return ve;
    }, get v() {
      return Xe;
    }, get isFunction() {
      return z;
    }, get trigger() {
      return q;
    }, get matches() {
      return _;
    }, get toggle() {
      return qt;
    }, get createElementFromHTML() {
      return ye;
    }, get remove() {
      return Be;
    }, get filter() {
      return jo;
    }, get untilAll() {
      return Kt;
    }, get nextAll() {
      return ai;
    }, get prevAll() {
      return ci;
    }, get toArray() {
      return Po;
    }, get p() {
      return ue;
    }, get h() {
      return vt;
    }, get g() {
      return $t;
    }, get S() {
      return Bo;
    }, get M() {
      return si;
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
    }, xe = Math.pow(2, 53) - 1, un = function(e) {
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
      for (var a, l = un(n.length), v = ie(t) ? Object(new t(l)) : new Array(l), f = 0; f < l; )
        a = n[f], v[f] = r ? i === void 0 ? r(a, f) : r.call(i, a, f) : a, f += 1;
      return v.length = l, v;
    }));
    var Hi, y = window, T = document, Ee = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/) || navigator.userAgent.includes("Mac") && "ontouchend" in document, yr = /(Mac|iPhone|iPod|iPad)/i.test(y.navigator.userAgent), Ae = "ontouchstart" in y || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, zi = !!window.MSInputMethodContext && !!document.documentMode, h = { test: {}, shared: {} }, br = (Hi = window.self !== window.top, function() {
      return Hi;
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
    var fn = "fullpage-wrapper", Te = "." + fn, dn = "fp-scrollable", xt = "fp-responsive", pn = "fp-notransition", vn = "fp-destroyed", Et = "fp-enabled", k = "active", hn = ".active", Ie = "fp-completely", At = "fp-section", J = "." + At, xr = ".fp-tableCell", Le = "#fp-nav", gn = "fp-slide", mn = "." + gn, Tt = ".fp-slide.active", Lt = "fp-slides", fe = ".fp-slides", Sn = "fp-slidesContainer", $e = "." + Sn, _i = "fp-table", Ne = "fp-overflow", Qe = "." + Ne, Je = "fp-is-overflow", wn = ".fp-slidesNav", Vi = ".fp-slidesNav a", Yi = "fp-controlArrow", yn = "." + Yi, Fi = "fp-prev", bn = ".fp-controlArrow.fp-prev", Wi = ".fp-controlArrow.fp-next", Mt = { menu: !1, anchors: [], lockAnchors: !1, navigation: !1, navigationPosition: "right", navigationTooltips: [], showActiveTooltip: !1, slidesNavigation: !1, slidesNavPosition: "bottom", scrollBar: !1, hybrid: !1, licenseKey: "", credits: { enabled: !0, label: "Made with fullPage.js", position: "right" }, css3: !0, scrollingSpeed: 700, autoScrolling: !0, fitToSection: !0, fitToSectionDelay: 600, easing: "easeInOutCubic", easingcss3: "ease", loopBottom: !1, loopTop: !1, loopHorizontal: !0, continuousVertical: !1, continuousHorizontal: !1, scrollHorizontally: !1, interlockedSlides: !1, dragAndMove: !1, offsetSections: !1, resetSliders: !1, fadingEffect: !1, normalScrollElements: null, scrollOverflow: !0, scrollOverflowReset: !1, skipIntermediateItems: !1, touchSensitivity: 5, touchWrapper: null, bigSectionsDestination: null, keyboardScrolling: !0, animateAnchor: !0, recordHistory: !0, allowCorrectDirection: !1, scrollOverflowMacStyle: !0, controlArrows: !0, controlArrowsHTML: ['<div class="fp-arrow"></div>', '<div class="fp-arrow"></div>'], controlArrowColor: "#fff", verticalCentered: !0, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: !1, parallax: !1, parallaxOptions: { type: "reveal", percentage: 62, property: "translate" }, cards: !1, cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 }, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, beforeLeave: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, onScrollOverflow: null, lazyLoading: !0, lazyLoadThreshold: 0, observer: !0, scrollBeyondFullpage: !0 }, et = null, Xi = !1, xn = je({}, Mt), Dt = null;
    function g(e) {
      return et;
    }
    function o() {
      return Dt || Mt;
    }
    function Me() {
      return xn;
    }
    function tt(e, t, n) {
      Dt[e] = t, n !== "internal" && (xn[e] = t);
    }
    function Zi() {
      if (!o().anchors.length) {
        var e = s(o().sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", et);
        e.length && e.length === s(o().sectionSelector, et).length && (Xi = !0, e.forEach(function(n) {
          o().anchors.push(H(n, "data-anchor").toString());
        }));
      }
      if (!o().navigationTooltips.length) {
        var t = s(o().sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", et);
        t.length && t.forEach(function(n) {
          o().navigationTooltips.push(H(n, "data-tooltip").toString());
        });
      }
    }
    var c = { A: 0, O: 0, slides: [], R: [], D: null, L: null, j: !1, N: !1, I: !1, P: !1, H: !1, C: void 0, W: void 0, F: !1, canScroll: !0, V: "none", B: "none", Z: !1, Y: !1, G: !0, X: 0, U: F(), _: !1, J: {}, scrollY: 0, scrollX: 0, K: !1 };
    function p(e) {
      Object.assign(c, e);
    }
    function u() {
      return c;
    }
    function Ui(e) {
      return window["fp_" + e + "Extension"] !== void 0;
    }
    function B(e) {
      var t = o();
      return t[e] !== null && Object.prototype.toString.call(t[e]) === "[object Array]" ? t[e].length && h[e] : t[e] && h[e];
    }
    function S(e, t, n) {
      if (B(e))
        return z(h[e][t]) ? h[e][t](n) : h[e][t];
    }
    function Ot() {
      return S("dragAndMove", "isAnimating");
    }
    function Gi() {
      return S("dragAndMove", "isGrabbing");
    }
    function En(e) {
      if (o().offsetSections && h.offsetSections) {
        var t = S("offsetSections", "getWindowHeight", e);
        return t !== "" ? Math.round(t) + "px" : t;
      }
      return F() + "px";
    }
    function qi(e, t) {
      e.insertBefore(t, e.firstChild);
    }
    function G(e) {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(r) {
        var a, l, v, f, b, x, w = "", L = 0;
        for (r = r.replace(/[^A-Za-z0-9+/=]/g, ""); L < r.length; )
          a = t.indexOf(r.charAt(L++)) << 2 | (f = t.indexOf(r.charAt(L++))) >> 4, l = (15 & f) << 4 | (b = t.indexOf(r.charAt(L++))) >> 2, v = (3 & b) << 6 | (x = t.indexOf(r.charAt(L++))), w += String.fromCharCode(a), b != 64 && (w += String.fromCharCode(l)), x != 64 && (w += String.fromCharCode(v));
        return w = function(O) {
          for (var X, V = "", j = 0, P = 0, A = 0; j < O.length; )
            (P = O.charCodeAt(j)) < 128 ? (V += String.fromCharCode(P), j++) : P > 191 && P < 224 ? (A = O.charCodeAt(j + 1), V += String.fromCharCode((31 & P) << 6 | 63 & A), j += 2) : (A = O.charCodeAt(j + 1), X = O.charCodeAt(j + 2), V += String.fromCharCode((15 & P) << 12 | (63 & A) << 6 | 63 & X), j += 3);
          return V;
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
    y.state = c, y.fp_utils = y.fp_utils || {}, Object.assign(y.fp_utils, { prependTo: qi, toggleClass: function(e, t, n) {
      if (e.classList && n == null)
        e.classList.toggle(t);
      else {
        var i = D(e, t);
        i && n == null || !n ? N(e, t) : (!i && n == null || n) && E(e, t);
      }
    } });
    var Ki = function(e) {
      this.anchor = e.anchor, this.item = e.item, this.index = e.index(), this.isLast = this.index === e.item.parentElement.querySelectorAll(e.selector).length - 1, this.isFirst = !this.index, this.isActive = e.isActive;
    }, le = function(e, t) {
      this.parent = this.parent || null, this.selector = t, this.anchor = H(e, "data-anchor") || o().anchors[de(e, o().sectionSelector)], this.item = e, this.isVisible = ii(e), this.isActive = D(e, k), this.q = D(e, Ne) || s(Qe, e)[0] != null, this.nn = t === o().sectionSelector, this.container = M(e, $e) || M(e, Te), this.index = function() {
        return this.siblings().indexOf(this);
      };
    };
    function An(e) {
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
    var $i, Qi = function(e) {
      Ki.call(this, e);
    }, Er = function(e) {
      Ki.call(this, e);
    };
    function De(e) {
      var t = s(Tt, e);
      return t.length && (e = t[0]), e;
    }
    function Ji(e) {
      return e ? e.activeSlide ? e.activeSlide : e : null;
    }
    function He(e) {
      var t, n, i = o();
      return i.autoScrolling && !i.scrollBar ? (t = -e, n = s(Te)[0]) : (t = e, n = window), { options: t, element: n };
    }
    function eo(e, t) {
      !o().autoScrolling || o().scrollBar || e.self != window && D(e, Lt) ? e.self != window && D(e, Lt) ? e.scrollLeft = t : e.scrollTo(0, t) : e.style.top = t + "px";
    }
    function Tn(e) {
      var t = "transform " + o().scrollingSpeed + "ms " + o().easingcss3;
      return N(e, pn), C(e, { "-webkit-transition": t, transition: t });
    }
    function Ln(e, t) {
      var n = e.index(), i = de(t, J);
      return n == i ? "none" : n > i ? "up" : "down";
    }
    function Rt(e) {
      return E(e, pn);
    }
    function Mn(e) {
      return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
    }
    function to(e, t) {
      t ? Tn(g()) : Rt(g()), clearTimeout($i), C(g(), Mn(e)), h.test.on = e, $i = setTimeout(function() {
        N(g(), pn);
      }, 10);
    }
    function Oe(e) {
      var t = Math.round(e);
      if (o().css3 && o().autoScrolling && !o().scrollBar)
        to("translate3d(0px, -" + t + "px, 0px)", !1);
      else if (o().autoScrolling && !o().scrollBar)
        C(g(), { top: -t + "px" }), h.test.top = -t + "px";
      else {
        var n = He(t);
        eo(n.element, n.options);
      }
    }
    function ze(e, t) {
      t !== "internal" && S("fadingEffect", "update", e), S("cards", "update_", e), tt("scrollingSpeed", e, t);
    }
    h.setScrollingSpeed = ze;
    var nt, R = null, it = null, kt = null;
    function jt(e, t, n, i) {
      var r, a = function(b) {
        return b.self != y && D(b, Lt) ? b.scrollLeft : !o().autoScrolling || o().scrollBar ? we() : b.offsetTop;
      }(e), l = t - a, v = !1, f = c.F;
      p({ F: !0 }), nt && window.cancelAnimationFrame(nt), nt = function(b) {
        r || (r = b);
        var x = Math.floor(b - r);
        if (c.F) {
          var w = t;
          n && (w = y.fp_easings[o().easing](x, a, l, n)), x <= n && eo(e, w), x < n ? window.requestAnimationFrame(nt) : i === void 0 || v || (i(), p({ F: !1 }), v = !0);
        } else
          v || f || (i(), p({ F: !1 }), v = !0);
      }, window.requestAnimationFrame(nt);
    }
    function Dn(e) {
      return e.hasAttribute("data-autoplay") || e.hasAttribute("autoplay");
    }
    function Pt(e) {
      var t = De(e);
      s("video, audio", t).forEach(function(n) {
        Dn(n) && typeof n.play == "function" && (n.readyState >= n.HAVE_FUTURE_DATA ? n.play() : n.addEventListener("canplay", function i() {
          n.play(), n.removeEventListener("canplay", i);
        }));
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        Dn(n) && no(n), n.onload = function() {
          Dn(n) && no(n);
        };
      });
    }
    function no(e) {
      e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    function On(e) {
      var t = De(e);
      s("video, audio", t).forEach(function(n) {
        n.hasAttribute("data-keepplaying") || typeof n.pause != "function" || n.pause();
      }), s('iframe[src*="youtube.com/embed/"]', t).forEach(function(n) {
        /youtube\.com\/embed\//.test(H(n, "src")) && !n.hasAttribute("data-keepplaying") && n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    }
    function Cn(e) {
      o().lazyLoading && s("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", De(e)).forEach(function(t) {
        if (["src", "srcset"].forEach(function(i) {
          var r = H(t, "data-" + i);
          r != null && r && ($t(t, i), t.addEventListener("load", function() {
          }));
        }), _(t, "source")) {
          var n = M(t, "video, audio");
          n && (n.load(), n.onloadeddata = function() {
          });
        }
      });
    }
    function ot(e) {
      var t = o().lazyLoadThreshold;
      Cn(e.item), t && (io(e, "prev", t), io(e, "next", t));
    }
    function io(e, t, n) {
      for (var i = e, r = 0; r < n && (i = i[t]()); r++)
        Cn(i.item);
    }
    function oo() {
      var e = u().D.item, t = u().D.activeSlide, n = ro(e), i = String(n);
      t && (i = i + "-" + ro(t.item)), i = i.replace("/", "-").replace("#", "").replace(/\s/g, "");
      var r = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
      R.className = R.className.replace(r, ""), E(R, "fp-viewing-" + i);
    }
    function ro(e) {
      if (!e)
        return null;
      var t = H(e, "data-anchor"), n = de(e);
      return t == null && (t = n), t;
    }
    function Rn(e, t, n) {
      var i = "";
      o().anchors.length && !o().lockAnchors && (e ? (n != null && (i = n), t == null && (t = e), p({ W: t }), kn(i + "/" + t)) : (e != null && p({ W: t }), kn(n))), oo();
    }
    function kn(e) {
      if (o().recordHistory)
        location.hash = e;
      else if (Ee || Ae)
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
    var d = { an: {}, un: function(e, t) {
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
      for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        i[r - 1] = arguments[r];
      rt(this.an[e]) === "object" && this.an[e].forEach(function(a) {
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
    function lo(e, t, n) {
      var i = t === "Section" ? o().anchors[e] : H(n, "data-anchor");
      return encodeURI(o().navigationTooltips[e] || i || t + " " + (e + 1));
    }
    var jn = "onAfterRenderNoAnchor", Bt = "onClickOrTouch", Pn = "moveSlideLeft", Bn = "moveSlideRight", ao = "onInitialise", co = "beforeInit", K = "bindEvents", ae = "onDestroy", so = "contentChanged", uo = "onScrollOverflowScrolled", In = "onScrollPageAndSlide", fo = "onKeyDown", po = "onMenuClick", vo = "scrollPage", ho = "landscapeScroll", go = "scrollBeyondFullpage", Nn = "onPerformMovement", Hn = "onSlideLeave", mo = "onLeave", lt = "afterSectionLoads", It = "afterSlideLoads";
    function Ar(e) {
      e.cancelable && W(e), p({ L: "horizontalNav" });
      var t = M(this, J), n = s(fe, M(this, J))[0], i = Ct(u().R, t).slides[de(M(this, "li"))];
      d.ln(ho, { slides: n, destination: i.item });
    }
    function So(e, t) {
      o().slidesNavigation && e != null && (N(s(hn, e), k), E(s("a", s("li", e)[t]), k));
    }
    var Nt, Ce = {};
    function Ht(e, t, n) {
      t !== "all" ? Ce[n][t] = e : Object.keys(Ce[n]).forEach(function(i) {
        Ce[n][i] = e;
      });
    }
    function Y() {
      return Ce;
    }
    function Tr() {
      var e = M(this, J);
      D(this, Fi) ? Y().m.left && (p({ L: "slideArrow" }), d.ln(Pn, { section: e })) : Y().m.right && (p({ L: "slideArrow" }), d.ln(Bn, { section: e }));
    }
    function wo(e) {
      !o().loopHorizontal && o().controlArrows && (qt(s(bn, e.section), e.slideIndex !== 0), qt(s(Wi, e.section), dt(e.destiny) != null));
    }
    function Lr() {
      clearTimeout(Nt), p({ I: !1 });
    }
    function Re(e, t, n) {
      var i = M(e, J), r = u().R.filter(function(v) {
        return v.item == i;
      })[0], a = r.slides.filter(function(v) {
        return v.item == t;
      })[0], l = { slides: e, destiny: t, direction: n, destinyPos: { left: t.offsetLeft }, slideIndex: a.index(), section: i, sectionIndex: r.index(), anchorLink: r.anchor, slidesNav: s(wn, i)[0], slideAnchor: a.anchor, prevSlide: r.activeSlide.item, prevSlideIndex: r.activeSlide.index(), items: { section: r, origin: r.activeSlide, destination: a }, localIsResizing: c.P };
      l.xMovement = bo(l.prevSlideIndex, l.slideIndex), l.direction = l.direction ? l.direction : l.xMovement, l.localIsResizing || p({ canScroll: !1 }), S("parallax", "applyHorizontal", l), S("cards", "apply", l), S("dropEffect", "apply", l), S("waterEffect", "apply", l), o().onSlideLeave && !l.localIsResizing && l.xMovement !== "none" && z(o().onSlideLeave) && se("onSlideLeave", l) === !1 ? p({ I: !1 }) : (B("dropEffect") && o().dropEffect || (E(t, k), N(We(t), k)), ce(), l.localIsResizing || (On(l.prevSlide), ot(a)), wo(l), r.isActive && !l.localIsResizing && Rn(l.slideIndex, l.slideAnchor, l.anchorLink), S("continuousHorizontal", "apply", l), d.ln(Hn, l), Gi() ? zn(l) : yo(e, l, !0), o().interlockedSlides && h.interlockedSlides && (B("continuousHorizontal") && n !== void 0 && n !== l.xMovement || S("interlockedSlides", "apply", l)));
    }
    function yo(e, t, n) {
      var i = t.destinyPos;
      if (So(t.slidesNav, t.slideIndex), p({ scrollX: Math.round(i.left) }), o().css3) {
        var r = "translate3d(-" + Math.round(i.left) + "px, 0px, 0px)";
        h.test.cn[t.sectionIndex] = r, B("dragAndMove") && t.sn !== void 0 || Tn(s($e, e)), C(s($e, e), Mn(r)), B("interlockedSlides") || clearTimeout(Nt), Nt = setTimeout(function() {
          n && zn(t);
        }, o().scrollingSpeed);
      } else
        h.test.left[t.sectionIndex] = Math.round(i.left), jt(e, Math.round(i.left), o().scrollingSpeed, function() {
          n && zn(t);
        });
    }
    function bo(e, t) {
      return e == t ? "none" : e > t ? "left" : "right";
    }
    function Mr() {
      clearTimeout(Nt);
    }
    function zn(e) {
      S("continuousHorizontal", "afterSlideLoads", e), S("dragAndMove", "afterSlideLoads", e), e.localIsResizing || (S("parallax", "afterSlideLoads"), S("scrollOverflowReset", "setPrevious", e.prevSlide), S("scrollOverflowReset", "reset"), z(o().afterSlideLoad) && se("afterSlideLoad", e), p({ canScroll: !0 }), Pt(e.destiny), d.ln(It, e)), p({ I: !1 }), S("interlockedSlides", "interlockedSlides", e);
    }
    function at(e, t) {
      ze(0, "internal"), t !== void 0 && p({ P: !0 }), Re(M(e, fe), e), t !== void 0 && p({ P: !1 }), ze(Me().scrollingSpeed, "internal");
    }
    Ce.m = { up: !0, down: !0, left: !0, right: !0 }, Ce.k = je({}, Ce.m), d.un(Bt, function(e) {
      var t = e.target;
      (_(t, yn) || M(t, yn)) && Tr.call(t, e);
    }), h.landscapeScroll = Re, d.un(K, function() {
      d.un(Nn, Lr);
    });
    var _n = null, Vn = null;
    function ce() {
      c.D = null, c.R.map(function(e) {
        var t = D(e.item, k);
        e.isActive = t, e.q = m.q(e.item), t && (c.D = e), e.slides.length && (e.activeSlide = null, e.slides.map(function(n) {
          var i = D(n.item, k);
          n.q = m.q(e.item), n.isActive = i, i && (e.activeSlide = n);
        }));
      }), function() {
        var e = c.D, t = !!c.D && c.D.slides.length, n = c.D ? c.D.activeSlide : null;
        if (!e && c.R.length && !u().j) {
          if (_n) {
            var i = Eo(_n, c.R);
            i && (c.D = i, c.D.isActive = !0, E(c.D.item, k)), c.D && Oe(c.D.item.offsetTop);
          }
          if (t && !n && Vn) {
            var r = Eo(Vn, c.D.slides);
            r && (c.D.activeSlide = r, c.D.activeSlide.isActive = !0, E(c.D.activeSlide.item, k)), c.D.activeSlide && at(c.D.activeSlide.item, "internal");
          }
        }
      }(), q(g(), "onUpdateStateDone");
    }
    function zt() {
      var e = s(o().sectionSelector + ", " + J, g()), t = ut(e), n = Array.from(e).map(function(a) {
        return new ke(a);
      }), i = n.filter(function(a) {
        return a.isVisible;
      }), r = i.reduce(function(a, l) {
        return a.concat(l.slides);
      }, []);
      _n = xo(c.D), Vn = xo(c.D ? c.D.activeSlide : null), c.A = t.length, c.O = i.reduce(function(a, l) {
        return a + l.slides.length;
      }, 0), c.R = i, c.tn = n, c.slides = r, c.rn = c.R.concat(c.slides);
    }
    function xo(e) {
      if (!e)
        return null;
      var t = e ? e.item : null, n = e.nn ? c.tn : c.D.dn;
      if (t) {
        var i = Ct(n, t);
        return i ? i.index() : null;
      }
      return null;
    }
    function Eo(e, t) {
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
        return new _t(n, t);
      }), this.slides = this.dn.filter(function(n) {
        return n.isVisible;
      }), this.activeSlide = this.slides.length ? this.slides.filter(function(n) {
        return n.isActive;
      })[0] || this.slides[0] : null;
    };
    ke.prototype = le.prototype, ke.prototype.constructor = ke;
    var _t = function(e, t) {
      this.parent = t, le.call(this, e, o().slideSelector);
    };
    function me(e) {
      return e && !e.item ? new Qi(new ke(e)) : e ? new Qi(e) : null;
    }
    function Yn(e) {
      return e ? new Er(e) : null;
    }
    function se(e, t) {
      var n = function(i, r) {
        var a = { afterRender: function() {
          return { section: me(u().D), pn: Yn(u().D.activeSlide) };
        }, onLeave: function() {
          return { origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().L };
        }, afterLoad: function() {
          return a.onLeave();
        }, afterSlideLoad: function() {
          return { section: me(r.items.section), origin: me(r.items.origin), destination: me(r.items.destination), direction: r.direction, trigger: u().L };
        }, onSlideLeave: function() {
          return a.afterSlideLoad();
        }, beforeLeave: function() {
          return a.onLeave();
        }, onScrollOverflow: function() {
          return { section: me(u().D), pn: Yn(u().D.activeSlide), position: r.position, direction: r.direction };
        } };
        return a[i]();
      }(e, t);
      return q(g(), e, n), o()[e].apply(n[Object.keys(n)[0]], Po(n)) !== !1;
    }
    function Fn(e, t) {
      tt("recordHistory", e, t);
    }
    function _e(e, t) {
      e || Oe(0), tt("autoScrolling", e, t);
      var n = u().D.item;
      if (o().autoScrolling && !o().scrollBar)
        C(kt, { overflow: "hidden", height: "100%" }), N(R, dn), Fn(Me().recordHistory, "internal"), C(g(), { "-ms-touch-action": "none", "touch-action": "none" }), n != null && Oe(n.offsetTop);
      else if (C(kt, { overflow: "visible", height: "initial" }), E(R, dn), Fn(!!o().autoScrolling && Me().recordHistory, "internal"), C(g(), { "-ms-touch-action": "", "touch-action": "" }), Rt(g()), n != null) {
        var i = He(n.offsetTop);
        i.element.scrollTo(0, i.options);
      }
      q(g(), "setAutoScrolling", e);
    }
    function Wn() {
      for (var e = s(Tt), t = 0; t < e.length; t++)
        at(e[t], "internal");
    }
    function Ao() {
      var e = s(".fp-auto-height")[0] || Qn() && s(".fp-auto-height-responsive")[0];
      o().lazyLoading && e && s(".fp-section:not(.active)").forEach(function(t) {
        var n, i, r, a, l;
        i = (n = t.getBoundingClientRect()).top, r = n.bottom, a = i + 2 < c.U && i > 0, l = r > 2 && r < c.U, (a || l) && ot(Ct(u().R, t));
      });
    }
    function Dr() {
      q(Ft(this), "click");
    }
    function To() {
      Be(s(Le));
      var e = T.createElement("div");
      e.setAttribute("id", "fp-nav");
      var t = T.createElement("ul");
      e.appendChild(t), Fe(e, R);
      var n = s(Le)[0];
      E(n, "fp-" + o().navigationPosition), o().showActiveTooltip && E(n, "fp-show-active");
      for (var i = "", r = 0; r < u().R.length; r++) {
        var a = u().R[r], l = "";
        o().anchors.length && (l = a.anchor), i += '<li><a href="#' + encodeURI(l) + '"><span class="fp-sr-only">' + lo(a.index(), "Section") + "</span><span></span></a>";
        var v = o().navigationTooltips[a.index()];
        v !== void 0 && v !== "" && (i += '<div class="fp-tooltip fp-' + o().navigationPosition + '">' + v + "</div>"), i += "</li>";
      }
      s("ul", n)[0].innerHTML = i;
      var f = s("li", s(Le)[0])[u().D.index()];
      E(s("a", f), k);
    }
    function Or(e) {
      e.preventDefault && W(e), p({ L: "verticalNav" });
      var t = de(M(this, "#fp-nav li"));
      d.ln(vo, { destination: u().R[t] });
    }
    function Xn(e, t) {
      var n;
      n = e, o().menu && o().menu.length && s(o().menu).forEach(function(i) {
        i != null && (N(s(hn, i), k), E(s('[data-menuanchor="' + n + '"]', i), k));
      }), function(i, r) {
        var a = s(Le)[0];
        o().navigation && a != null && a.style.display !== "none" && (N(s(hn, a), k), E(i ? s('a[href="#' + i + '"]', a) : s("a", s("li", a)[r]), k));
      }(e, t);
    }
    _t.prototype = le.prototype, _t.prototype.constructor = ke, h.setRecordHistory = Fn, h.setAutoScrolling = _e, h.test.setAutoScrolling = _e, (/* @__PURE__ */ new Date()).getTime();
    var Zn, Un, Gn, qn, ct, Kn, Cr = (Un = !0, Gn = (/* @__PURE__ */ new Date()).getTime(), qn = !y.fullpage_api, function(e, t) {
      var n = (/* @__PURE__ */ new Date()).getTime(), i = e === "wheel" ? o().scrollingSpeed : 100;
      return Un = qn || n - Gn >= i, qn = !y.fullpage_api, Un && (Zn = t(), Gn = n), Zn === void 0 || Zn;
    });
    function Lo(e, t) {
      if (z(o().beforeLeave))
        return Cr(u().L, function() {
          return se(e, t);
        });
    }
    function Ve(e, t, n) {
      var i = e.item;
      if (i != null) {
        var r, a, l = { element: i, callback: t, isMovementUp: n, dtop: Mo(i), yMovement: Ln(u().D, i), anchorLink: e.anchor, sectionIndex: e.index(), activeSlide: e.activeSlide ? e.activeSlide.item : null, leavingSection: u().D.index() + 1, localIsResizing: c.P, items: { origin: u().D, destination: e }, direction: null };
        if (!(u().D.item == i && !c.P || o().scrollBar && we() === l.dtop && !D(i, "fp-auto-height"))) {
          if (l.activeSlide != null && (r = H(l.activeSlide, "data-anchor"), a = de(l.activeSlide, null)), !l.localIsResizing) {
            var v = l.yMovement;
            if (n !== void 0 && (v = n ? "up" : "down"), l.direction = v, Ui("dropEffect") && h.dropEffect.onLeave_(l), Ui("waterEffect") && h.waterEffect.onLeave_(l), z(o().beforeLeave) && Lo("beforeLeave", l) === !1 || z(o().onLeave) && !se("onLeave", l))
              return;
          }
          S("parallax", "apply", l), S("cards", "apply", l), S("dropEffect", "apply", l), S("waterEffect", "apply", l), o().autoScrolling && o().continuousVertical && l.isMovementUp !== void 0 && (!l.isMovementUp && l.yMovement == "up" || l.isMovementUp && l.yMovement == "down") && (l = function(f) {
            p({ _: !0 });
            var b = u().D.item;
            return f.isMovementUp ? Ut(b, ai(b, J)) : pt(b, ci(b, J).reverse()), Oe(u().D.item.offsetTop), Wn(), f.hn = b, f.dtop = f.element.offsetTop, f.yMovement = Ln(u().D, f.element), f.leavingSection = f.items.origin.index() + 1, f.sectionIndex = f.items.destination.index(), q(g(), "onContinuousVertical", f), f;
          }(l)), S("scrollOverflowReset", "setPrevious", u().D.item), l.localIsResizing || On(u().D.item), B("dropEffect") && o().dropEffect || (E(i, k), N(We(i), k)), ce(), ot(e), p({ canScroll: h.test.gn }), Rn(a, r, l.anchorLink), d.ln(mo, l), function(f) {
            p({ V: "none", scrollY: Math.round(f.dtop) }), d.ln(Nn, f);
            var b = o().scrollingSpeed < 700, x = b ? 700 : o().scrollingSpeed;
            if (o().css3 && o().autoScrolling && !o().scrollBar)
              to("translate3d(0px, -" + Math.round(f.dtop) + "px, 0px)", !0), B("waterEffect") && Wn(), o().scrollingSpeed ? (clearTimeout(ct), ct = setTimeout(function() {
                Vt(f), p({ canScroll: !b || h.test.gn });
              }, o().scrollingSpeed)) : Vt(f);
            else {
              var w = He(f.dtop);
              h.test.top = -f.dtop + "px", clearTimeout(ct), jt(w.element, w.options, o().scrollingSpeed, function() {
                o().scrollBar ? ct = setTimeout(function() {
                  Vt(f);
                }, 30) : (Vt(f), p({ canScroll: !b || h.test.gn }));
              });
            }
            b && (clearTimeout(Kn), Kn = setTimeout(function() {
              p({ canScroll: !0 });
            }, x));
          }(l), p({ C: l.anchorLink }), Xn(l.anchorLink, function(f) {
            return f.hn != null ? f.isMovementUp ? c.A - 1 : 0 : f.sectionIndex;
          }(l));
        }
      }
    }
    function Mo(e) {
      var t = e.offsetHeight, n = e.offsetTop, i = n, r = B("dragAndMove") && S("dragAndMove", "isGrabbing") ? S("dragAndMove", "isScrollingDown") : n > c.X, a = i - F() + t, l = o().bigSectionsDestination;
      return t > F() ? (r || l) && l !== "bottom" || (i = a) : (r || c.P && dt(e) == null) && (i = a), B("offsetSections") && (i = h.offsetSections.getSectionPosition_(r, i, e)), p({ X: i }), i;
    }
    function Vt(e) {
      p({ j: !1 }), function(t) {
        t.hn != null && (t.isMovementUp ? Ut(s(J)[0], t.hn) : pt(s(J)[u().R.length - 1], t.hn), Oe(u().D.item.offsetTop), function() {
          for (var n = s(Tt), i = 0; i < n.length; i++)
            at(n[i], "internal");
        }(), t.sectionIndex = t.items.destination.index(), t.leavingSection = t.items.origin.index() + 1, p({ _: !1 }));
      }(e), z(o().afterLoad) && !e.localIsResizing && se("afterLoad", e), S("parallax", "afterLoad"), S("waterEffect", "afterLoad"), S("dropEffect", "afterLoad"), S("scrollOverflowReset", "reset"), S("resetSliders", "apply", e), ce(), e.localIsResizing || Pt(e.element), E(e.element, Ie), N(We(e.element), Ie), Ao(), p({ canScroll: !0 }), d.ln(lt, e), z(e.callback) && e.callback();
    }
    function $n(e, t) {
      tt("fitToSection", e, t);
    }
    function Do() {
      c.canScroll && o().fitToSection && (p({ P: !0 }), Ve(c.D), p({ P: !1 }));
    }
    function Oo() {
      var e = o().responsive || o().responsiveWidth, t = o().responsiveHeight, n = e && y.innerWidth < e, i = t && y.innerHeight < t;
      e && t ? Yt(n || i) : e ? Yt(n) : t && Yt(i);
    }
    function Yt(e) {
      var t = Qn();
      e ? t || (_e(!1, "internal"), $n(!1, "internal"), Wt(s(Le)), E(R, xt), z(o().afterResponsive) && o().afterResponsive.call(g(), e), S("responsiveSlides", "toSections"), q(g(), "afterResponsive", e)) : t && (_e(Me().autoScrolling, "internal"), $n(Me().autoScrolling, "internal"), oi(s(Le)), N(R, xt), z(o().afterResponsive) && o().afterResponsive.call(g(), e), S("responsiveSlides", "toSlides"), q(g(), "afterResponsive", e));
    }
    function Qn() {
      return D(R, xt);
    }
    function Co(e) {
      o().verticalCentered && (!o().scrollOverflow && m.mn(e.item) || m.wn(e) || D(e.item, _i) || E(e.item, _i));
    }
    h.moveTo = moveTo, h.getScrollY = function() {
      return c.scrollY;
    }, d.un(ae, function() {
      clearTimeout(ct), clearTimeout(Kn);
    }), h.setFitToSection = $n, h.fitToSection = Do, h.setResponsive = Yt;
    var Jn, ei = null;
    function ti(e) {
      var t = e.item, n = e.vn.length, i = e.index();
      !u().D && e.isVisible && (E(t, k), ce()), !ei && e.isVisible && (ei = u().D.item), B("offsetSections") && C(t, { height: En(t) }), o().paddingTop && C(t, { "padding-top": o().paddingTop }), o().paddingBottom && C(t, { "padding-bottom": o().paddingBottom }), o().sectionsColor[i] !== void 0 && C(t, { "background-color": o().sectionsColor[i] }), o().anchors[i] !== void 0 && t.setAttribute("data-anchor", e.anchor), n || Co(e);
    }
    function Ro() {
      o().scrollOverflow && !o().scrollBar && (m.bn(), m.Sn());
    }
    function Rr() {
      d.removeListener(jn, Ro), ve("keyup", m.yn);
    }
    h.getActiveSection = function() {
      return u().D;
    }, d.un(K, function() {
      d.un(jn, Ro), d.un(mo, m.onLeave), d.un(Hn, m.onLeave), d.un(It, m.afterLoad), d.un(lt, m.afterLoad), d.un(ae, Rr), Pe("keyup", m.yn);
    });
    var ni, st, m = { Mn: null, Tn: !0, An: !0, xn: null, On: null, kn: function(e) {
      var t = u().D;
      if (!c.canScroll || br() && o().scrollOverflow && m.wn(t) && m.isScrolled(u().B, t.item))
        return W(e), !1;
    }, En: function(e) {
      if (!si() && o().keyboardScrolling && [38, 33, 32, 40, 34, 36, 35].indexOf(e.keyCode) > -1 && !m.An)
        return W(e), !1;
    }, yn: function() {
      m.Tn = c.canScroll;
    }, onLeave: function() {
      clearTimeout(Jn), m.An = !1;
    }, afterLoad: function() {
      m.An = !1, clearTimeout(Jn), Jn = setTimeout(function() {
        m.Tn = c.canScroll;
      }, 200);
    }, Rn: function() {
      T.activeElement === this.Mn && (this.Mn.blur(), m.An = !1);
    }, Sn: function() {
      if (o().scrollOverflow && m.Tn) {
        m.Rn();
        var e = m.Dn(u().D.item);
        !e || Ee || Ae || (this.Mn = e, requestAnimationFrame(function() {
          e.focus({ Ln: !0 }), m.An = !0;
        })), m.Tn = !1;
      }
    }, bn: function() {
      o().scrollOverflowMacStyle && !yr && E(R, "fp-scroll-mac"), u().rn.forEach(function(e) {
        if (!(e.slides && e.slides.length || D(e.item, "fp-auto-height-responsive") && Qn())) {
          var t, n = De(e.item), i = m.mn(e.item), r = (t = e).nn ? t : t.parent;
          if (zi) {
            var a = i ? "addClass" : "removeClass";
            Ni[a](r.item, Je), Ni[a](e.item, Je);
          } else
            E(r.item, Je), E(e.item, Je);
          e.q || (m.jn(n), m.zn(n)), e.q = !0;
        }
      });
    }, zn: function(e) {
      m.Dn(e).addEventListener("scroll", m.Nn), e.addEventListener("wheel", m.kn, { passive: !1 }), e.addEventListener("keydown", m.En, { passive: !1 });
    }, jn: function(e) {
      var t = document.createElement("div");
      t.className = Ne, li(e, t), t.setAttribute("tabindex", "-1");
    }, In: function(e) {
      var t = s(Qe, e)[0];
      t && (Zt(t), e.removeAttribute("tabindex"));
    }, Dn: function(e) {
      var t = De(e);
      return s(Qe, t)[0] || t;
    }, q: function(e) {
      return D(e, Ne) || s(Qe, e)[0] != null;
    }, wn: function(e) {
      return e.nn && e.activeSlide ? e.activeSlide.q : e.q;
    }, mn: function(e) {
      return m.Dn(e).scrollHeight > y.innerHeight;
    }, isScrolled: function(e, t) {
      if (!c.canScroll)
        return !1;
      if (o().scrollBar)
        return !0;
      var n = m.Dn(t);
      if (!o().scrollOverflow || !D(n, Ne) || D(t, "fp-noscroll") || D(De(t), "fp-noscroll"))
        return !0;
      var i = zi ? 1 : 0, r = n.scrollTop, a = e === "up" && r <= 0, l = e === "down" && n.scrollHeight <= Math.ceil(n.offsetHeight + r) + i, v = a || l;
      return v || e === "none" || (this.xn = (/* @__PURE__ */ new Date()).getTime()), v;
    }, Pn: function() {
      this.On = (/* @__PURE__ */ new Date()).getTime();
      var e = this.On - m.xn, t = (Ee || Ae) && c.Z, n = c.Y && e > 600;
      return t && e > 400 || n;
    }, Nn: (ni = 0, function(e) {
      var t = e.target.scrollTop, n = c.V !== "none" ? c.V : ni < t ? "down" : "up";
      ni = t, z(o().onScrollOverflow) && se("onScrollOverflow", { position: t, direction: n }), D(e.target, Ne) && c.canScroll && m.isScrolled(n, e.target) && m.Pn() && m.mn(u().D.item) && d.ln(uo, { direction: n });
    }) };
    function ee(e, t) {
      y.console && y.console[e] && y.console[e]("fullPage: " + t);
    }
    function ii(e) {
      return y.getComputedStyle(e).display !== "none";
    }
    function ut(e) {
      return Array.from(e).filter(function(t) {
        return ii(t);
      });
    }
    function s(e, t) {
      return (t = arguments.length > 1 ? t : document) ? t.querySelectorAll(e) : null;
    }
    function je(e) {
      e = e || {};
      for (var t = 1, n = arguments.length; t < n; ++t) {
        var i = arguments[t];
        if (i)
          for (var r in i)
            i.hasOwnProperty(r) && r != "__proto__" && r != "constructor" && (Object.prototype.toString.call(i[r]) !== "[object Object]" ? e[r] = i[r] : e[r] = je(e[r], i[r]));
      }
      return e;
    }
    function D(e, t) {
      return e != null && e.classList.contains(t);
    }
    function F() {
      return "innerHeight" in y ? y.innerHeight : T.documentElement.offsetHeight;
    }
    function ft() {
      return y.innerWidth;
    }
    function C(e, t) {
      var n;
      for (n in e = Se(e), t)
        if (t.hasOwnProperty(n) && n !== null)
          for (var i = 0; i < e.length; i++)
            e[i].style[n] = t[n];
      return e;
    }
    function Ft(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.previousElementSibling;
      var n = Ft(e);
      return n && _(n, t) ? n : null;
    }
    function dt(e, t) {
      if (!e)
        return null;
      if (t == null)
        return e.nextElementSibling;
      var n = dt(e);
      return n && _(n, t) ? n : null;
    }
    function ko(e) {
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
    function Wt(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "none";
      return e;
    }
    function oi(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++)
        e[t].style.display = "block";
      return e;
    }
    function Ye(e) {
      return Object.prototype.toString.call(e) === "[object Array]" || Object.prototype.toString.call(e) === "[object NodeList]";
    }
    function E(e, t) {
      e = Se(e);
      for (var n = 0; n < e.length; n++)
        e[n].classList.add(t);
      return e;
    }
    function N(e, t) {
      e = Se(e);
      for (var n = t.split(" "), i = 0; i < n.length; i++) {
        t = n[i];
        for (var r = 0; r < e.length; r++)
          e[r].classList.remove(t);
      }
      return e;
    }
    function Fe(e, t) {
      t.appendChild(e);
    }
    function ri(e, t, n) {
      var i;
      t = t || T.createElement("div");
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (n && !r || !n) && (i = t.cloneNode(!0), a.parentNode.insertBefore(i, a)), i.appendChild(a);
      }
      return e;
    }
    function Xt(e, t) {
      ri(e, t, !0);
    }
    function li(e, t) {
      for (typeof t == "string" && (t = ye(t)), e.appendChild(t); e.firstChild !== t; )
        t.appendChild(e.firstChild);
    }
    function Zt(e) {
      for (var t = T.createDocumentFragment(); e.firstChild; )
        t.appendChild(e.firstChild);
      e.parentNode.replaceChild(t, e);
    }
    function M(e, t) {
      return e && e.nodeType === 1 ? _(e, t) ? e : M(e.parentNode, t) : null;
    }
    function pt(e, t) {
      Gt(e, e.nextSibling, t);
    }
    function Ut(e, t) {
      Gt(e, e, t);
    }
    function Gt(e, t, n) {
      Ye(n) || (typeof n == "string" && (n = ye(n)), n = [n]);
      for (var i = 0; i < n.length; i++)
        e.parentNode.insertBefore(n[i], t);
    }
    function we() {
      var e = T.documentElement;
      return (y.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function We(e) {
      return Array.prototype.filter.call(e.parentNode.children, function(t) {
        return t !== e;
      });
    }
    function W(e) {
      e.preventDefault();
    }
    function H(e, t) {
      return e.getAttribute(t);
    }
    function Pe(e, t, n) {
      T.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function pe(e, t, n) {
      y.addEventListener(e, t, n === "undefined" ? null : n);
    }
    function ve(e, t, n) {
      T.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function Xe(e, t, n) {
      y.removeEventListener(e, t, n === "undefined" ? null : n);
    }
    function z(e) {
      if (typeof e == "function")
        return !0;
      var t = Object.prototype.toString.call(e);
      return t === "[object Function]" || t === "[object GeneratorFunction]";
    }
    function q(e, t, n) {
      var i;
      n = n === void 0 ? {} : n, typeof y.CustomEvent == "function" ? i = new CustomEvent(t, { detail: n }) : (i = T.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
    }
    function _(e, t) {
      return (e.matches || e.Hn || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function qt(e, t) {
      if (typeof t == "boolean")
        for (var n = 0; n < e.length; n++)
          e[n].style.display = t ? "block" : "none";
      return e;
    }
    function ye(e) {
      var t = T.createElement("div");
      return t.innerHTML = e.trim(), t.firstChild;
    }
    function Be(e) {
      e = Se(e);
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n && n.parentElement && n.parentNode.removeChild(n);
      }
    }
    function jo(e, t) {
      Array.prototype.filter.call(e, t);
    }
    function Kt(e, t, n) {
      for (var i = e[n], r = []; i; )
        (_(i, t) || t == null) && r.push(i), i = i[n];
      return r;
    }
    function ai(e, t) {
      return Kt(e, t, "nextElementSibling");
    }
    function ci(e, t) {
      return Kt(e, t, "previousElementSibling");
    }
    function Po(e) {
      return Object.keys(e).map(function(t) {
        return e[t];
      });
    }
    function ue(e) {
      return e[e.length - 1];
    }
    function vt(e, t) {
      for (var n = 0, i = e.slice(Math.max(e.length - t, 1)), r = 0; r < i.length; r++)
        n += i[r];
      return Math.ceil(n / t);
    }
    function $t(e, t) {
      e.setAttribute(t, H(e, "data-" + t)), e.removeAttribute("data-" + t);
    }
    function Bo(e, t) {
      var n = [e];
      do
        e = e.parentNode, n.push(e);
      while (!_(e, t));
      return n;
    }
    function si() {
      var e = T.activeElement;
      return _(e, "textarea") || _(e, "input") || _(e, "select") || H(e, "contentEditable") == "true" || H(e, "contentEditable") == "";
    }
    function Io(e) {
      d.ln(Bt, { e, target: e.target });
    }
    function kr() {
      ["click", "touchstart"].forEach(function(e) {
        ve(e, Io, { passive: !1 });
      });
    }
    function jr() {
      p({ G: !0 });
    }
    function No() {
      E(s(o().sectionSelector, g()), At), E(s(o().slideSelector, g()), gn);
    }
    function ui(e) {
      var t = e.slides.length, n = e.vn, i = e.slides, r = 100 * t, a = 100 / t;
      if (!s(fe, e.item)[0]) {
        var l = T.createElement("div");
        l.className = Lt, Xt(n, l);
        var v = T.createElement("div");
        v.className = Sn, Xt(n, v);
      }
      C(s($e, e.item), { width: r + "%" }), t > 1 && (o().controlArrows && function(b) {
        var x = b.item, w = [ye(o().controlArrowsHTML[0]), ye(o().controlArrowsHTML[1])];
        pt(s(fe, x)[0], w), E(w, Yi), E(w[0], Fi), E(w[1], "fp-next"), o().controlArrowColor !== "#fff" && (C(s(Wi, x), { "border-color": "transparent transparent transparent " + o().controlArrowColor }), C(s(bn, x), { "border-color": "transparent " + o().controlArrowColor + " transparent transparent" })), o().loopHorizontal || Wt(s(bn, x));
      }(e), o().slidesNavigation && function(b) {
        var x = b.item, w = b.slides.length;
        Fe(ye('<div class="fp-slidesNav"><ul></ul></div>'), x);
        var L = s(wn, x)[0];
        E(L, "fp-" + o().slidesNavPosition);
        for (var O = 0; O < w; O++)
          Fe(ye('<li><a href="#"><span class="fp-sr-only">' + lo(O, "Slide", s(mn, x)[O]) + "</span><span></span></a></li>"), s("ul", L)[0]);
        C(L, { "margin-left": "-" + L.innerWidth / 2 + "px" });
        var X = b.activeSlide ? b.activeSlide.index() : 0;
        E(s("a", s("li", L)[X]), k);
      }(e)), i.forEach(function(b) {
        C(b.item, { width: a + "%" }), o().verticalCentered && Co(b);
      });
      var f = B("responsiveSlides") ? null : e.activeSlide || null;
      f != null && c.D && (c.D.index() !== 0 || c.D.index() === 0 && f.index() !== 0) ? (at(f.item, "internal"), E(f.item, "fp-initial")) : E(n[0], k);
    }
    window.fp_utils = Object.assign(y.fp_utils || {}, { $: s, deepExtend: je, hasClass: D, getWindowHeight: F, css: C, prev: Ft, next: dt, last: ko, index: de, getList: Se, hide: Wt, show: oi, isArrayOrList: Ye, addClass: E, removeClass: N, appendTo: Fe, wrap: ri, wrapAll: Xt, wrapInner: li, unwrap: Zt, closest: M, after: pt, before: Ut, insertBefore: Gt, getScrollTop: we, siblings: We, preventDefault: W, isFunction: z, trigger: q, matches: _, toggle: qt, createElementFromHTML: ye, remove: Be, filter: jo, untilAll: Kt, nextAll: ai, prevAll: ci, showError: ee, scrollOverflowHandler: m }), d.un(K, function() {
      ["click", "touchstart"].forEach(function(e) {
        Pe(e, Io, { passive: !1 });
      }), pe("focus", jr), d.un(ae, kr);
    });
    var Ho = { attributes: !1, subtree: !0, childList: !0, characterData: !0 };
    function zo() {
      return S("responsiveSlides", "isResponsiveSlidesChanging") || ut(s(o().slideSelector, g())).length !== u().O;
    }
    function fi(e) {
      var t = zo();
      (zo() || S("responsiveSlides", "isResponsiveSlidesChanging") || ut(s(o().sectionSelector, g())).length !== u().A) && !c._ && (o().observer && st && st.disconnect(), zt(), ce(), o().anchors = [], Be(s(Le)), S("responsiveSlides", "isResponsiveSlidesChanging") || No(), Zi(), o().navigation && To(), t && (Be(s(wn)), Be(s(yn))), u().R.forEach(function(n) {
        n.slides.length ? t && ui(n) : ti(n);
      })), o().observer && st && s(Te)[0] && st.observe(s(Te)[0], Ho);
    }
    d.un(K, function() {
      var e, t, n;
      o().observer && "MutationObserver" in window && s(Te)[0] && (e = s(Te)[0], t = Ho, (n = new MutationObserver(fi)).observe(e, t), st = n), d.un(so, fi);
    }), h.render = fi;
    var Pr = function() {
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
    function _o() {
      return !!Pr() && { passive: !1 };
    }
    var Vo, Yo, di, be, Qt = (di = (/* @__PURE__ */ new Date()).getTime(), be = [], { Cn: function(e) {
      var t = (e = e || y.event).wheelDelta || -e.deltaY || -e.detail, n = Math.max(-1, Math.min(1, t)), i = e.wheelDeltaX !== void 0 || e.deltaX !== void 0;
      Vo = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
      var r = (/* @__PURE__ */ new Date()).getTime();
      Yo = n < 0 ? "down" : "up", be.length > 149 && be.shift(), be.push(Math.abs(t));
      var a = r - di;
      di = r, a > 200 && (be = []);
    }, Wn: function() {
      var e = vt(be, 10) >= vt(be, 70);
      return !!be.length && e && Vo;
    }, Fn: function() {
      return Yo;
    } });
    function Br() {
      var e = o().css3 ? we() + F() : ue(u().R).item.offsetTop + ue(u().R).item.offsetHeight, t = He(e);
      h.test.top = -e + "px", p({ canScroll: !1 }), jt(t.element, t.options, o().scrollingSpeed, function() {
        setTimeout(function() {
          p({ j: !0 }), p({ canScroll: !0 });
        }, 30);
      });
    }
    function Ir() {
      g().getBoundingClientRect().bottom >= 0 && Fo();
    }
    function Fo() {
      var e = He(ue(u().R).item.offsetTop);
      p({ canScroll: !1 }), jt(e.element, e.options, o().scrollingSpeed, function() {
        p({ canScroll: !0 }), p({ j: !1 }), p({ Vn: !1 });
      });
    }
    var pi, vi, hi, Wo = (pi = !1, vi = {}, hi = {}, function(e, t, n) {
      switch (e) {
        case "set":
          vi[t] = (/* @__PURE__ */ new Date()).getTime(), hi[t] = n;
          break;
        case "isNewKeyframe":
          var i = (/* @__PURE__ */ new Date()).getTime();
          pi = i - vi[t] > hi[t];
      }
      return pi;
    });
    function ht() {
      var e = u().D.next();
      e || !o().loopBottom && !o().continuousVertical || (e = u().R[0]), e != null ? Ve(e, null, !1) : g().scrollHeight < R.scrollHeight && o().scrollBar && o().scrollBeyondFullpage && d.ln(go);
    }
    function Ze() {
      var e = u().D.prev();
      e || !o().loopTop && !o().continuousVertical || (e = ue(u().R)), e != null && Ve(e, null, !0);
    }
    h.moveSectionDown = ht, h.moveSectionUp = Ze;
    var Jt = 0;
    function Xo(e) {
      o().autoScrolling && (c.canScroll && (e.pageY < Jt && Y().m.up ? Ze() : e.pageY > Jt && Y().m.down && ht()), Jt = e.pageY);
    }
    function Zo(e) {
      if (Y().m[e]) {
        var t = e === "down" ? ht : Ze;
        B("scrollHorizontally") && (t = S("scrollHorizontally", "getScrollSection", { type: e, scrollSection: t })), o().scrollOverflow && m.wn(u().D) ? m.isScrolled(e, u().D.item) && m.Pn() && t() : t();
      }
    }
    var en, gi, Ue, tn = 0, gt = 0, nn = 0, mt = 0, on = Go(), oe = { Bn: "ontouchmove" in window ? "touchmove" : on ? on.move : null, Zn: "ontouchstart" in window ? "touchstart" : on ? on.down : null };
    function St(e) {
      var t = M(e.target, J) || u().D.item, n = m.wn(u().D);
      if (wt(e)) {
        p({ Z: !0, Y: !1 }), o().autoScrolling && (n && !c.canScroll || o().scrollBar) && W(e);
        var i = mi(e);
        nn = i.y, mt = i.x;
        var r = Math.abs(tn - nn) > y.innerHeight / 100 * o().touchSensitivity, a = Math.abs(gt - mt) > ft() / 100 * o().touchSensitivity, l = s(fe, t).length && Math.abs(gt - mt) > Math.abs(tn - nn), v = tn > nn ? "down" : "up";
        p({ V: l ? gt > mt ? "right" : "left" : v }), l ? !c.I && a && (gt > mt ? Y().m.right && d.ln(Bn, { section: t }) : Y().m.left && d.ln(Pn, { section: t })) : o().autoScrolling && c.canScroll && r && Zo(v);
      }
    }
    function wt(e) {
      return e.pointerType === void 0 || e.pointerType != "mouse";
    }
    function rn(e) {
      if (o().fitToSection && p({ F: !1 }), wt(e)) {
        var t = mi(e);
        tn = t.y, gt = t.x;
      }
      pe("touchend", Uo);
    }
    function Uo() {
      Xe("touchend", Uo), p({ Z: !1 });
    }
    function mi(e) {
      var t = {};
      return t.y = e.pageY !== void 0 && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = e.pageX !== void 0 && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ae && wt(e) && o().scrollBar && e.touches !== void 0 && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t;
    }
    function Go() {
      var e;
      return y.PointerEvent && (e = { down: "pointerdown", move: "pointermove" }), e;
    }
    function Si(e) {
      o().autoScrolling && wt(e) && Y().m.up && (c.canScroll || W(e));
    }
    function qo(e, t) {
      var n = t ?? u().D.item, i = Ct(c.R, n), r = s(fe, n)[0];
      if (!(r == null || Ot() || c.I || i.slides.length < 2)) {
        var a = i.activeSlide, l = e === "left" ? a.prev() : a.next();
        if (!l) {
          if (!o().loopHorizontal)
            return;
          l = e === "left" ? ue(i.slides) : i.slides[0];
        }
        p({ I: !h.test.gn }), Re(r, l.item, e);
      }
    }
    function wi(e) {
      qo("left", e);
    }
    function yi(e) {
      qo("right", e);
    }
    function bi(e) {
      var t = u().R.filter(function(i) {
        return i.anchor === e;
      })[0];
      if (!t) {
        var n = e !== void 0 ? e - 1 : 0;
        t = u().R[n];
      }
      return t;
    }
    function Ko(e) {
      e != null && Re(M(e, fe), e);
    }
    function xi(e, t) {
      var n = bi(e);
      if (n != null) {
        var i = function(r, a) {
          var l = a.slides.filter(function(v) {
            return v.anchor === r;
          })[0];
          return l == null && (r = r !== void 0 ? r : 0, l = a.slides[r]), l ? l.item : null;
        }(t, n);
        n.anchor && n.anchor === c.C || D(n.item, k) ? Ko(i) : Ve(n, function() {
          Ko(i);
        });
      }
    }
    function yt(e, t) {
      var n = bi(e);
      t !== void 0 ? xi(e, t) : n != null && Ve(n);
    }
    function Nr() {
      clearTimeout(gi), ve("keydown", $o), ve("keyup", Qo);
    }
    function $o(e) {
      clearTimeout(gi);
      var t = e.keyCode, n = [37, 39].indexOf(t) > -1, i = o().autoScrolling || o().fitToSection || n;
      t === 9 ? function(r) {
        var a = r.shiftKey, l = T.activeElement, v = Ei(De(u().D.item));
        function f(V) {
          return W(V), v[0] ? v[0].focus() : null;
        }
        if (c.canScroll) {
          if (!function(V) {
            var j = Ei(T), P = j.indexOf(T.activeElement), A = j[V.shiftKey ? P - 1 : P + 1], Z = M(A, mn), U = M(A, J);
            return !Z && !U;
          }(r)) {
            l ? M(l, ".fp-section.active,.fp-section.active .fp-slide.active") == null && (l = f(r)) : f(r);
            var b = l == v[0], x = l == v[v.length - 1], w = a && b;
            if (w || !a && x) {
              W(r);
              var L = function(V) {
                var j, P = V ? "prevPanel" : "nextPanel", A = [], Z = Ji((c.D && c.D.activeSlide ? c.D.activeSlide : c.D)[P]());
                do
                  (A = Ei(Z.item)).length && (j = { Yn: Z, Gn: A[V ? A.length - 1 : 0] }), Z = Ji(Z[P]());
                while (Z && A.length === 0);
                return j;
              }(w), O = L ? L.Yn : null;
              if (O) {
                var X = O.nn ? O : O.parent;
                d.ln(In, { Xn: X.index() + 1, slideAnchor: O.nn ? 0 : O.index() }), Ue = L.Gn, W(r);
              }
            }
          }
        } else
          W(r);
      }(e) : !si() && o().keyboardScrolling && i && (en = e.ctrlKey, gi = setTimeout(function() {
        (function(r) {
          var a = r.shiftKey, l = T.activeElement, v = _(l, "video") || _(l, "audio"), f = m.isScrolled("up", u().D.item), b = m.isScrolled("down", u().D.item), x = [37, 39].indexOf(r.keyCode) > -1;
          if (function(w) {
            (function(L) {
              return [40, 38, 32, 33, 34].indexOf(L.keyCode) > -1 && !c.j;
            })(w) && !M(w.target, Qe) && w.preventDefault();
          }(r), c.canScroll || x)
            switch (p({ L: "keydown" }), r.keyCode) {
              case 38:
              case 33:
                Y().k.up && f ? c.j ? d.ln(fo, { e: r }) : Ze() : m.Sn();
                break;
              case 32:
                if (a && Y().k.up && !v && f) {
                  Ze();
                  break;
                }
              case 40:
              case 34:
                if (Y().k.down && b) {
                  if (c.j)
                    return;
                  r.keyCode === 32 && v || ht();
                } else
                  m.Sn();
                break;
              case 36:
                Y().k.up && yt(1);
                break;
              case 35:
                Y().k.down && yt(u().R.length);
                break;
              case 37:
                Y().k.left && wi();
                break;
              case 39:
                Y().k.right && yi();
            }
        })(e);
      }, 0));
    }
    function Qo(e) {
      c.G && (en = e.ctrlKey);
    }
    function Hr() {
      p({ G: !1 }), en = !1;
    }
    function zr(e) {
      Jo();
    }
    function _r(e) {
      M(Ue, mn) && !M(Ue, Tt) || Jo();
    }
    function Jo() {
      Ue && (Ue.focus(), Ue = null);
    }
    function Ei(e) {
      return [].slice.call(s('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]', e)).filter(function(t) {
        return H(t, "tabindex") !== "-1" && t.offsetParent !== null;
      });
    }
    h.moveSlideLeft = wi, h.moveSlideRight = yi, h.moveTo = yt, d.un(K, function() {
      pe("blur", Hr), Pe("keydown", $o), Pe("keyup", Qo), d.un(ae, Nr), d.un(It, zr), d.un(lt, _r);
    });
    var er = (/* @__PURE__ */ new Date()).getTime(), Ge = [];
    function Ai(e) {
      e ? (function() {
        var t, n = "";
        y.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
        var i = "onwheel" in T.createElement("div") ? "wheel" : T.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", r = _o();
        i == "DOMMouseScroll" ? T[t](n + "MozMousePixelScroll", qe, r) : T[t](n + i, qe, r);
      }(), g().addEventListener("mousedown", tr), g().addEventListener("mouseup", nr)) : (T.addEventListener ? (ve("mousewheel", qe, !1), ve("wheel", qe, !1), ve("MozMousePixelScroll", qe, !1)) : T.detachEvent("onmousewheel", qe), g().removeEventListener("mousedown", tr), g().removeEventListener("mouseup", nr));
    }
    function qe(e) {
      var t = (/* @__PURE__ */ new Date()).getTime(), n = D(s(".fp-completely")[0], "fp-normal-scroll"), i = function(x, w) {
        (/* @__PURE__ */ new Date()).getTime();
        var L = u().j && x.getBoundingClientRect().bottom >= 0 && Qt.Fn() === "up", O = u().Vn;
        if (O)
          return W(w), !1;
        if (u().j) {
          if (L) {
            var X;
            if (!(O || Wo("isNewKeyframe", "beyondFullpage") && Qt.Wn()))
              return (X = He(ue(u().R).item.offsetTop + ue(u().R).item.offsetHeight)).element.scrollTo(0, X.options), p({ Vn: !1 }), W(w), !1;
            if (Qt.Wn())
              return L = !1, p({ Vn: !0 }), p({ L: "wheel" }), Fo(), W(w), !1;
          } else
            Wo("set", "beyondFullpage", 1e3);
          if (!O && !L)
            return !0;
        }
      }(g(), e);
      if (c.Y || p({ Z: !1, Y: !0, V: "none" }), !Y().m.down && !Y().m.up)
        return !1;
      if (i)
        return !0;
      if (i === !1)
        return W(e), !1;
      if (o().autoScrolling && !en && !n) {
        var r = (e = e || y.event).wheelDelta || -e.deltaY || -e.detail, a = Math.max(-1, Math.min(1, r)), l = e.wheelDeltaX !== void 0 || e.deltaX !== void 0, v = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !l, f = a < 0 ? "down" : a > 0 ? "up" : "none";
        Ge.length > 149 && Ge.shift(), Ge.push(Math.abs(r)), o().scrollBar && W(e);
        var b = t - er;
        return er = t, b > 200 && (Ge = []), p({ B: f }), c.canScroll && !Ot() && vt(Ge, 10) >= vt(Ge, 70) && v && (p({ L: "wheel" }), Zo(a < 0 ? "down" : "up")), !1;
      }
      o().fitToSection && p({ F: !1 });
    }
    function tr(e) {
      var t;
      e.which == 2 && (t = e.pageY, Jt = t, g().addEventListener("mousemove", Xo));
    }
    function nr(e) {
      e.which == 2 && g().removeEventListener("mousemove", Xo);
    }
    function bt(e) {
      e ? (Ai(!0), function() {
        if (oe.Bn && (Ee || Ae) && (!B("dragAndMove") || o().dragAndMove === "mouseonly")) {
          o().autoScrolling && (R.removeEventListener(oe.Bn, Si, { passive: !1 }), R.addEventListener(oe.Bn, Si, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Zn, rn), t.removeEventListener(oe.Bn, St, { passive: !1 }), t.addEventListener(oe.Zn, rn), t.addEventListener(oe.Bn, St, { passive: !1 });
        }
      }()) : (Ai(!1), function() {
        if (oe.Bn && (Ee || Ae)) {
          o().autoScrolling && (R.removeEventListener(oe.Bn, St, { passive: !1 }), R.removeEventListener(oe.Bn, Si, { passive: !1 }));
          var t = o().touchWrapper;
          t.removeEventListener(oe.Zn, rn), t.removeEventListener(oe.Bn, St, { passive: !1 });
        }
      }());
    }
    h.setMouseWheelScrolling = Ai;
    var Ti = !0;
    function Vr() {
      ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function(e) {
        ve(e, or, !0);
      });
    }
    function ir(e, t) {
      document["fp_" + e] = t, Pe(e, or, !0);
    }
    function or(e) {
      var t = e.type, n = !1, i = t === "mouseleave" ? e.toElement || e.relatedTarget : e.target;
      i != document && i ? (t === "touchend" && (Ti = !1, setTimeout(function() {
        Ti = !0;
      }, 800)), (t !== "mouseenter" || Ti) && (o().normalScrollElements.split(",").forEach(function(r) {
        if (!n) {
          var a = _(i, r), l = M(i, r);
          (a || l) && (h.shared.Un || bt(!1), h.shared.Un = !0, n = !0);
        }
      }), !n && h.shared.Un && (bt(!0), h.shared.Un = !1))) : bt(!0);
    }
    function ln(e, t) {
      ze(0, "internal"), yt(e, t), ze(Me().scrollingSpeed, "internal");
    }
    d.un(K, function() {
      o().normalScrollElements && (["mouseenter", "touchstart"].forEach(function(e) {
        ir(e, !1);
      }), ["mouseleave", "touchend"].forEach(function(e) {
        ir(e, !0);
      })), d.un(ae, Vr);
    }), h.silentMoveTo = ln;
    var Li, rr, Mi = F(), lr = ft(), Di = !1;
    function Yr() {
      clearTimeout(Li), clearTimeout(rr), Xe("resize", Oi);
    }
    function Oi() {
      Di || (o().autoScrolling && !o().scrollBar || !o().fitToSection) && ar(F()), c.K && function() {
        if (Ee)
          for (var e = 0; e < 4; e++)
            rr = setTimeout(function() {
              window.requestAnimationFrame(function() {
                o().autoScrolling && !o().scrollBar && (p({ P: !0 }), ln(c.D.index() + 1), p({ P: !1 }));
              });
            }, 200 * e);
      }(), Di = !0, clearTimeout(Li), Li = setTimeout(function() {
        (function() {
          if (p({ P: !0 }), ar(""), q(g(), "onResize"), o().autoScrolling || c.j || function() {
            if (!o().autoScrolling || o().scrollBar) {
              var r = 0.01 * y.innerHeight;
              T.documentElement.style.setProperty("--vh", "".concat(r, "px"));
            }
          }(), d.ln(so), ce(), Oo(), Ee) {
            var e = T.activeElement;
            if (!_(e, "textarea") && !_(e, "input") && !_(e, "select")) {
              var t = F();
              Math.abs(t - Mi) > 20 * Math.max(Mi, t) / 100 && (Ci(!0), Mi = t);
            }
          } else
            n = F(), i = ft(), c.U === n && lr === i || (p({ U: n }), lr = i, Ci(!0));
          var n, i;
          q(g(), "onResizeEnds"), p({ P: !1 });
        })(), Di = !1;
      }, 400);
    }
    function Ci(e) {
      if (!D(g(), vn)) {
        p({ P: !0, U: F(), _n: ft() });
        for (var t = u().R, n = 0; n < t.length; ++n) {
          var i = t[n], r = s(fe, i.item)[0], a = i.slides;
          B("offsetSections") && C(i.item, { height: En(i.item) }), a.length > 1 && Re(r, i.activeSlide.item);
        }
        o().scrollOverflow && m.bn();
        var l = u().D.index();
        c.j || !l || B("fadingEffect") || B("dropEffect") || B("waterEffect") || ln(l + 1), p({ P: !1 }), z(o().afterResize) && e && o().afterResize.call(g(), y.innerWidth, y.innerHeight), z(o().afterReBuild) && !e && o().afterReBuild.call(g()), q(g(), "afterRebuild");
      }
    }
    function ar(e) {
      u().R.forEach(function(t) {
        var n = e !== "" || B("offsetSections") ? En(t.item) : "";
        C(t.item, { height: n });
      });
    }
    function Ri() {
      var e, t, n = y.location.hash;
      if (n.length) {
        var i = n.replace("#", "").split("/"), r = n.indexOf("#/") > -1;
        e = r ? "/" + i[1] : decodeURIComponent(i[0]);
        var a = r ? i[2] : i[1];
        a && a.length && (t = decodeURIComponent(a));
      }
      return { section: e, pn: t };
    }
    function Fr() {
      Xe("hashchange", cr);
    }
    function cr() {
      if (!c.H && !o().lockAnchors) {
        var e = Ri(), t = e.section, n = e.pn, i = c.C === void 0, r = c.C === void 0 && n === void 0 && !c.I;
        t && t.length && (t && t !== c.C && !i || r && !Ot() || !c.I && c.W != n && !Ot()) && d.ln(In, { Xn: t, slideAnchor: n });
      }
    }
    function Wr(e) {
      var t = e.target;
      M(t, o().menu + " [data-menuanchor]") && Xr.call(t, e.e);
    }
    function Xr(e) {
      if (p({ L: "menu" }), s(o().menu)[0] && (o().lockAnchors || !o().anchors.length)) {
        W(e);
        var t = M(this, "[data-menuanchor]");
        d.ln(po, { anchor: H(t, "data-menuanchor") });
      }
    }
    function Zr(e) {
      var t = e.target;
      t && M(t, "#fp-nav a") ? Or.call(t, e.e) : _(t, ".fp-tooltip") ? Dr.call(t) : (_(t, Vi) || M(t, Vi) != null) && Ar.call(t, e.e);
    }
    h.reBuild = Ci, d.un(K, function() {
      Oi(), pe("resize", Oi), d.un(ae, Yr);
    }), h.setLockAnchors = function(e) {
      o().lockAnchors = e;
    }, d.un(K, function() {
      pe("hashchange", cr), d.un(ae, Fr);
    }), d.un(K, function() {
      Pe("wheel", Qt.Cn, _o()), d.un(go, Br), d.un(fo, Ir);
    }), d.un(K, function() {
      d.un(Bt, Wr);
    }), d.un(K, function() {
      d.un(Bt, Zr);
    });
    var ki, ji, sr = 0;
    function an(e) {
      var t, n, i, r, a;
      if (q(g(), "onScroll"), !c.P && u().D && (ue(u().R), !u().j && !u().Vn && (!o().autoScrolling || o().scrollBar || B("dragAndMove")) && !Gi())) {
        var l = B("dragAndMove") ? Math.abs(S("dragAndMove", "getCurrentScroll")) : we(), v = function($) {
          var re = $ > sr ? "down" : "up";
          return sr = $, p({ X: $ }), re;
        }(l), f = 0, b = l + F() / 2, x = (B("dragAndMove") ? S("dragAndMove", "getDocumentHeight") : R.scrollHeight - F()) === l, w = u().R;
        if (p({ scrollY: l }), x)
          f = w.length - 1;
        else if (l)
          for (var L = 0; L < w.length; ++L)
            (M(w[L].item, J) || w[L].item).offsetTop <= b && (f = L);
        else
          f = 0;
        if (i = v, r = u().D.item.offsetTop, a = r + F(), (i == "up" ? a >= we() + F() : r <= we()) && (D(u().D.item, Ie) || (E(u().D.item, Ie), N(We(u().D.item), Ie))), n = (t = w[f]).item, !t.isActive) {
          p({ H: !0 });
          var O, X, V = u().D.item, j = u().D.index() + 1, P = Ln(u().D, n), A = t.anchor, Z = t.index() + 1, U = t.activeSlide, ge = { D: V, sectionIndex: Z - 1, anchorLink: A, element: n, leavingSection: j, direction: P, items: { origin: u().D, destination: t } };
          U && (X = U.anchor, O = U.index()), c.canScroll && (N(w.filter(function($) {
            return $.index() !== t.index();
          }).map(function($) {
            return $.item;
          }), k), E(n, k), S("parallax", "afterLoad"), z(o().beforeLeave) && Lo("beforeLeave", ge), z(o().onLeave) && se("onLeave", ge), z(o().afterLoad) && se("afterLoad", ge), S("resetSliders", "apply", { localIsResizing: c.P, leavingSection: j }), On(V), ot(t), Pt(n), Xn(A, Z - 1), o().anchors.length && p({ C: A }), ce(), Rn(O, X, A)), clearTimeout(ki), ki = setTimeout(function() {
            p({ H: !1 });
          }, 100);
        }
        o().fitToSection && c.canScroll && (clearTimeout(ji), ji = setTimeout(function() {
          c.R.filter(function($) {
            var re = $.item.getBoundingClientRect();
            return Math.round(re.bottom) === Math.round(F()) || Math.round(re.top) === 0;
          }).length || Do();
        }, o().fitToSectionDelay));
      }
    }
    function Ur(e) {
      var t = e.items.destination.activeSlide;
      p({ scrollX: t ? Math.round(t.offsetLeft) : 0 });
    }
    function ur(e) {
      var t = o().skipIntermediateItems, n = e.items.origin.nn ? "sections" : "slides", i = Math.abs(e.items.origin.index() - e.items.destination.index()) > 1;
      (t === !0 || t === n) && i && ze(0, "internal");
    }
    function fr() {
      o().skipIntermediateItems && tt("scrollingSpeed", Me().scrollingSpeed, "internal");
    }
    function Pi(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Ht(e, n, "k");
      }) : (Ht(e, "all", "k"), o().keyboardScrolling = e);
    }
    function Gr(e) {
      var t = e.index();
      o().anchors[t] !== void 0 && e.isActive && Xn(o().anchors[t], t), o().menu && o().css3 && M(s(o().menu)[0], Te) != null && s(o().menu).forEach(function(n) {
        R.appendChild(n);
      });
    }
    function dr() {
      var e, t, n = u().D, i = u().D.item;
      E(i, Ie), ot(u().D), Ao(), Pt(i), t = bi((e = Ri()).section), e.section && t && (t === void 0 || t.index() !== de(ei)) || !z(o().afterLoad) || se("afterLoad", { D: i, element: i, direction: null, anchorLink: n.anchor, sectionIndex: n.index(), items: { origin: u().D, destination: u().D } }), z(o().afterRender) && se("afterRender"), q(g(), "afterRender");
    }
    function Bi(e, t) {
      t !== void 0 ? (t = t.replace(/ /g, "").split(",")).forEach(function(n) {
        Ht(e, n, "m");
      }) : Ht(e, "all", "m"), q(g(), "setAllowScrolling", { value: e, Qn: t });
    }
    function pr() {
      var e = Ri(), t = e.section, n = e.pn;
      t ? o().animateAnchor ? xi(t, n) : ln(t, n) : d.ln(jn, null);
    }
    d.un(ae, function() {
      clearTimeout(ki), clearTimeout(ji);
    }), d.un(K, function() {
      pe("scroll", an), T.body.addEventListener("scroll", an), d.un(In, function(e) {
        xi(e.Xn, e.slideAnchor);
      }), d.un(po, function(e) {
        yt(e.anchor, void 0);
      }), d.un(uo, function(e) {
        (e.direction === "down" ? ht : Ze)();
      }), d.un(vo, function(e) {
        Ve(e.destination);
      });
    }), d.un(ae, function() {
      Xe("scroll", an);
    }), h.getActiveSlide = function() {
      return Yn(u().D.activeSlide);
    }, h.getScrollX = function() {
      return c.scrollX;
    }, d.un(K, function() {
      d.un(ae, Mr), d.un(ho, function(e) {
        Re(e.slides, e.destination);
      }), d.un(Bn, function(e) {
        yi(e.section);
      }), d.un(Pn, function(e) {
        wi(e.section);
      }), d.un(lt, Ur);
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
    `), i = ue(c.R), r = !c.Jn || o().credits.enabled;
      i && i.item && r && i.item.insertAdjacentHTML("beforeend", n);
    }), function() {
      d.un(ao, function() {
        var v, f, b;
        p({ Jn: (o().licenseKey, v = o().licenseKey, f = function(x) {
          var w = parseInt("514").toString(16);
          if (!x || x.length < 29 || x.split(e[0]).length === 4)
            return null;
          var L = ["Each", "for"][r()]().join(""), O = x[["split"]]("-"), X = [];
          O[L](function(P, A) {
            if (A < 4) {
              var Z = function($) {
                var re = $[$.length - 1], el = ["NaN", "is"][r()]().join("");
                return window[el](re) ? a(re) : function(tl) {
                  return tl - k.length;
                }(re);
              }(P);
              X.push(Z);
              var U = a(P[Z]);
              if (A === 1) {
                var ge = ["pa", "dS", "t", "art"].join("");
                U = U.toString()[ge](2, "0");
              }
              w += U, A !== 0 && A !== 1 || (w += "-");
            }
          });
          var V = 0, j = "";
          return x.split("-").forEach(function(P, A) {
            if (A < 4) {
              for (var Z = 0, U = 0; U < 4; U++)
                U !== X[A] && (Z += Math.abs(a(P[U])), isNaN(P[U]) || V++);
              var ge = l(Z);
              j += ge;
            }
          }), j += l(V), { Kn: /* @__PURE__ */ new Date(w + "T00:00"), $n: w.split("-")[2] === 8 * (k.length - 2) + "", qn: j };
        }(v), b = function(x) {
          var w = i[r()]().join("");
          return x && w.indexOf(x) === 0 && x.length === w.length;
        }(v) || function(x) {
          return new RegExp("^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(x);
        }(v), (f || b) && (f && n <= f.Kn && f.qn === v.split(e[0])[4] || b || f.$n) || !1) });
      });
      var e = ["-"], t = "2024-9-14".split("-"), n = new Date(t[0], t[1], t[2]), i = ["se", "licen", "-", "v3", "l", "gp"];
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
    }(), d.un(Nn, ur), d.un(lt, fr), d.un(Hn, ur), d.un(It, fr), d.un(co, function() {
      Pi(!0);
    }), h.setKeyboardScrolling = Pi, h.shared.nt = dr, h.setAllowScrolling = Bi;
    var qr = {};
    function Ke() {
      return qr;
    }
    var cn, he, vr, Ii, sn = !D(R, G("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
    function hr(e) {
      if (he = T.createElement("div"), cn = G("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="), sn || (cn = cn.replace("extensions/", "").replace("Extension", "")), he.innerHTML = cn, he = he.firstChild, "MutationObserver" in window && new MutationObserver(Kr).observe(T.body, { childList: !0, subtree: !1 }), (!sn || B(e) && h[e]) && (!function(n) {
        var i = Ke()[n] !== void 0 && Ke()[n].length, r = [], a = !1;
        return Ye(Ke()[n]) ? r = Ke()[n] : r.push(Ke()[n]), r.forEach(function(l) {
          var v = function() {
            if (T.domain.length) {
              for (var re = T.domain.replace(/^(www\.)/, "").split("."); re.length > 2; )
                re.shift();
              return re.join(".").replace(/(^\.*)|(\.*$)/g, "");
            }
            return "";
          }(), f = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN", "NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3", "NDU2dGVzdDQ1Ng=="], b = G(f[0]), x = G(f[1]), w = G(f[2]), L = G(f[6]), O = G(f[3]), X = G(f[4]), V = G(f[5]), j = o()[X + V] !== void 0;
          i = i || j;
          var P = [b, x, w, L].indexOf(v) < 0 && v.length !== 0;
          if (!i && !j && P)
            return !1;
          var A = i ? G(l) : "", Z = (A = A.split("_")).length > 1 && A[1].indexOf(n, A[1].length - n.length) > -1, U = A.length > 1 && A[1].toLowerCase().indexOf(X) > -1, ge = A[0].indexOf(v, A[0].length - v.length) < 0, $ = Z || U;
          a = a || !(ge && P && O != A[0]) && $ || !P;
        }), a;
      }(e) || !sn)) {
        gr();
        var t = G("MzQ1c2V0SW50ZXJ2YWwxMjM=");
        window[t](gr, 2e3);
      }
    }
    function gr() {
      he && (Ii || (Math.random() < 0.5 ? qi(R, he) : Fe(he, R), Ii = !0), he.setAttribute("style", G("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g, G("MTIzICFpbXBvcnRhbnQ7MzQ1"))));
    }
    function Kr(e) {
      e.forEach(function(t) {
        if (t.removedNodes[0] && t.removedNodes[0].isEqualNode(he)) {
          clearTimeout(vr);
          var n = G("bDIwc2V0VGltZW91dDAzbA==");
          vr = window[n]($r, 900);
        }
      });
    }
    function $r() {
      Ii = !1;
    }
    function Qr() {
      zt(), ce(), o().scrollBar = o().scrollBar || o().hybrid, Zi(), function() {
        C(Bo(g(), "body"), { height: "100%", position: "relative" }), E(g(), fn), E(it, Et), p({ U: F() }), N(g(), vn), No(), S("parallax", "init");
        for (var e = u().tn, t = 0; t < e.length; t++) {
          var n = e[t], i = n.vn, r = H(n.item, "style");
          r && n.item.setAttribute("data-fp-styles", r), ti(n), Gr(n), i.length > 0 && ui(n);
        }
        o().fixedElements && o().css3 && s(o().fixedElements).forEach(function(a) {
          R.appendChild(a);
        }), o().navigation && To(), s('iframe[src*="youtube.com/embed/"]', g()).forEach(function(a) {
          var l, v;
          v = H(l = a, "src"), l.setAttribute("src", v + (/\?/.test(v) ? "&" : "?") + "enablejsapi=1");
        }), S("fadingEffect", "apply"), S("waterEffect", "init"), S("dropEffect", "init"), S("cards", "init"), o().scrollOverflow && m.bn();
      }(), Bi(!0), bt(!0), _e(o().autoScrolling, "internal"), Oo(), oo(), T.readyState === "complete" && pr(), pe("load", pr), dr(), sn || hr("l"), zt(), ce();
    }
    function mr() {
      var e = o().licenseKey;
      o().licenseKey.trim() === "" ? (ee("error", "Fullpage.js requires a `licenseKey` option. Read about it on the following website:"), ee("error", "https://alvarotrigo.com/fullPage/docs/#licensekey")) : o() && c.Jn || T.domain.indexOf("alvarotrigo.com") > -1 ? e && e.length : (ee("error", "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"), ee("error", "https://alvarotrigo.com/fullPage/pricing")), D(it, Et) ? ee("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (o().continuousVertical && (o().loopTop || o().loopBottom) && (o().continuousVertical = !1, ee("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), !o().scrollOverflow || !o().scrollBar && o().autoScrolling || ee("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"), !o().continuousVertical || !o().scrollBar && o().autoScrolling || (o().continuousVertical = !1, ee("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), o().anchors.forEach(function(t) {
        var n = [].slice.call(s("[name]")).filter(function(a) {
          return H(a, "name") && H(a, "name").toLowerCase() == t.toLowerCase();
        }), i = [].slice.call(s("[id]")).filter(function(a) {
          return H(a, "id") && H(a, "id").toLowerCase() == t.toLowerCase();
        });
        if (i.length || n.length) {
          ee("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
          var r = i.length ? "id" : "name";
          (i.length || n.length) && ee("error", '"' + t + '" is is being used by another element `' + r + "` property");
        }
      }));
    }
    function Jr() {
      return { options: o(), internals: { container: g(), canScroll: c.canScroll, isScrollAllowed: Y(), getDestinationPosition: Mo, isTouch: Ae, c: hr, getXmovement: bo, removeAnimation: Rt, getTransforms: Mn, lazyLoad: Cn, addAnimation: Tn, performHorizontalMove: yo, landscapeScroll: Re, silentLandscapeScroll: at, keepSlidesPosition: Wn, silentScroll: Oe, styleSlides: ui, styleSection: ti, scrollHandler: an, getEventsPage: mi, getMSPointer: Go, isReallyTouch: wt, usingExtension: B, toggleControlArrows: wo, touchStartHandler: rn, touchMoveHandler: St, nullOrSection: me, items: { SectionPanel: ke, SlidePanel: _t, Item: le }, getVisible: ut, getState: u, updateState: ce, updateStructuralState: zt, activeSlidesNavigation: So, getPanels: function() {
        return c.rn;
      }, getSections: function() {
        return c.R;
      }, setActiveSection: function(e) {
        c.D = e;
      } } };
    }
    function te(e) {
      var t = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"], n = G(t[0]), i = G(t[1]), r = o()[n + i] !== void 0, a = "fp_" + e + "Extension";
      Ke()[e] = r ? o()[n + i] : o()[e + i], h[e] = window[a] !== void 0 ? new window[a]() : null, h[e] && h[e].c(e);
    }
    function Sr(e, t) {
      var n;
      if (R = s("body")[0], it = s("html")[0], kt = s("html, body"), !D(it, Et))
        return n = typeof e == "string" ? s(e)[0] : e, Mt.touchWrapper = n, function(i) {
          Dt = je({}, Mt, i), xn = Object.assign({}, Dt);
        }(t), function(i) {
          et = i;
        }(typeof e == "string" ? s(e)[0] : e), d.ln(ao), mr(), h.getFullpageData = Jr, h.version = "4.0.30", h.test = Object.assign(h.test, { top: "0px", on: "translate3d(0px, 0px, 0px)", cn: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push("translate3d(0px, 0px, 0px)");
          return i;
        }(), left: function() {
          for (var i = [], r = 0; r < s(o().sectionSelector, g()).length; r++)
            i.push(0);
          return i;
        }(), options: o(), setAutoScrolling: null }), h.shared = Object.assign(h.shared, { nt: null, Un: !1 }), y.fullpage_api = h, y.fullpage_extensions = !0, g() && (d.ln(co), te("continuousHorizontal"), te("scrollHorizontally"), te("resetSliders"), te("interlockedSlides"), te("responsiveSlides"), te("fadingEffect"), te("dragAndMove"), te("offsetSections"), te("scrollOverflowReset"), te("parallax"), te("cards"), te("dropEffect"), te("waterEffect"), S("dragAndMove", "init"), S("responsiveSlides", "init"), Qr(), d.ln(K), p({ K: !0 }), S("dragAndMove", "turnOffTouch")), y.fullpage_api;
      mr();
    }
    return h.destroy = function(e) {
      q(g(), "destroy", e), _e(!1, "internal"), Bi(!0), bt(!1), Pi(!1), E(g(), vn), d.ln(ae), S("dragAndMove", "destroy"), e && (Oe(0), s("img[data-src], source[data-src], audio[data-src], iframe[data-src]", g()).forEach(function(t) {
        $t(t, "src");
      }), s("img[data-srcset]").forEach(function(t) {
        $t(t, "srcset");
      }), Be(s("#fp-nav, .fp-slidesNav, .fp-controlArrow")), C(An(u().R), { height: "", "background-color": "", padding: "" }), C(An(u().slides), { width: "" }), C(g(), { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }), C(kt, { overflow: "", height: "" }), N(it, Et), N(R, xt + " " + dn), R.className.split(/\s+/).forEach(function(t) {
        t.indexOf("fp-viewing") === 0 && N(R, t);
      }), An(u().rn).forEach(function(t) {
        o().scrollOverflow && m.In(t), N(t, "fp-table active fp-completely " + Je);
        var n = H(t, "data-fp-styles");
        n && t.setAttribute("style", n), D(t, At) && !Xi && t.removeAttribute("data-anchor");
      }), Rt(g()), [xr, $e, fe].forEach(function(t) {
        s(t, g()).forEach(function(n) {
          Zt(n);
        });
      }), C(g(), { "-webkit-transition": "none", transition: "none" }), N(g(), fn), y.scrollTo(0, 0), [At, gn, Sn].forEach(function(t) {
        N(s("." + t), t);
      }));
    }, y.fp_easings = je(y.fp_easings, { easeInOutCubic: function(e, t, n, i) {
      return (e /= i / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t;
    } }), y.jQuery && function(e, t) {
      e && t ? e.fn.fullpage = function(n) {
        n = e.extend({}, n, { $: e }), new t(this[0], n), Object.keys(h).forEach(function(i) {
          o().$.fn.fullpage[i] = h[i];
        });
      } : ee("error", "jQuery is required to use the jQuery fullpage adapter!");
    }(y.jQuery, Sr), Sr;
  });
})(wr);
var al = wr.exports;
const cl = /* @__PURE__ */ ll(al), sl = [
  "afterLoad",
  "onLeave",
  "afterRender",
  "afterResize",
  "afterResponsive",
  "afterSlideLoad",
  "onSlideLeave"
], ul = (I, Q) => {
  const ne = I.__vccOpts || I;
  for (const [ie, xe] of Q)
    ne[ie] = xe;
  return ne;
}, fl = {
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
      events: sl.reduce((I, Q) => ({
        ...I,
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
      let I = this.options.slideSelector || ".slide", Q = this.options.sectionSelector || ".section";
      const ne = window.fp_utils.index(document.querySelector(Q + ".active")), ie = document.querySelector(Q + ".active " + I + ".active"), xe = ie ? window.fp_utils.index(ie) : -1;
      this.destroy(), ne > -1 && window.fp_utils.addClass(document.querySelectorAll(Q)[ne], "active"), xe > -1 && window.fp_utils.addClass(ie, "active"), this.init();
    },
    destroy() {
      typeof window.fullpage_api < "u" && typeof window.fullpage_api.destroy < "u" && window.fullpage_api.destroy("all");
    },
    emitEvent(I, Q) {
      this.$emit(I.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ...Q), Object.prototype.hasOwnProperty.call(this.options, I) && this.options[I].apply(this, Q);
    },
    init() {
      this.api = new cl(this.$refs.fullpage, this.options);
    }
  }
}, dl = { ref: "fullpage" };
function pl(I, Q, ne, ie, xe, un) {
  return nl(), il("div", dl, [
    ol(I.$slots, "default")
  ], 512);
}
const vl = /* @__PURE__ */ ul(fl, [["render", pl]]), gl = {
  install(I) {
    I.component("FullPage", vl);
  }
};
export {
  gl as default
};
