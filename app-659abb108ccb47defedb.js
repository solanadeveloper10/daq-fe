/*! For license information please see app-659abb108ccb47defedb.js.LICENSE.txt */
(self.webpackChunkdoug = self.webpackChunkdoug || []).push([[143], {
  5053: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z: function () {
        return oe
      }
    });
    var r = function () {
      function e(e) {
        var t = this;
        this._insertTag = function (e) {
          var n;
          n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
      }

      var t = e.prototype;
      return t.hydrate = function (e) {
        e.forEach(this._insertTag)
      }, t.insert = function (e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function (e) {
          var t = document.createElement("style");
          return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
        }(this));
        var t = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var n = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
          }(t);
          try {
            n.insertRule(e, n.cssRules.length)
          } catch (r) {
          }
        } else t.appendChild(document.createTextNode(e));
        this.ctr++
      }, t.flush = function () {
        this.tags.forEach((function (e) {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
        })), this.tags = [], this.ctr = 0
      }, e
    }(), o = Math.abs, i = String.fromCharCode, a = Object.assign;

    function s(e) {
      return e.trim()
    }

    function c(e, t, n) {
      return e.replace(t, n)
    }

    function u(e, t) {
      return e.indexOf(t)
    }

    function l(e, t) {
      return 0 | e.charCodeAt(t)
    }

    function p(e, t, n) {
      return e.slice(t, n)
    }

    function f(e) {
      return e.length
    }

    function d(e) {
      return e.length
    }

    function h(e, t) {
      return t.push(e), e
    }

    var m = 1, g = 1, v = 0, y = 0, b = 0, w = "";

    function _(e, t, n, r, o, i, a) {
      return {value: e, root: t, parent: n, type: r, props: o, children: i, line: m, column: g, length: a, return: ""}
    }

    function E(e, t) {
      return a(_("", null, null, "", null, null, 0), e, {length: -e.length}, t)
    }

    function S() {
      return b = y > 0 ? l(w, --y) : 0, g--, 10 === b && (g = 1, m--), b
    }

    function P() {
      return b = y < v ? l(w, y++) : 0, g++, 10 === b && (g = 1, m++), b
    }

    function C() {
      return l(w, y)
    }

    function R() {
      return y
    }

    function x(e, t) {
      return p(w, e, t)
    }

    function O(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1
      }
      return 0
    }

    function k(e) {
      return m = g = 1, v = f(w = e), y = 0, []
    }

    function j(e) {
      return w = "", e
    }

    function T(e) {
      return s(x(y - 1, M(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
    }

    function N(e) {
      for (; (b = C()) && b < 33;) P();
      return O(e) > 2 || O(b) > 3 ? "" : " "
    }

    function $(e, t) {
      for (; --t && P() && !(b < 48 || b > 102 || b > 57 && b < 65 || b > 70 && b < 97);) ;
      return x(e, R() + (t < 6 && 32 == C() && 32 == P()))
    }

    function M(e) {
      for (; P();) switch (b) {
        case e:
          return y;
        case 34:
        case 39:
          34 !== e && 39 !== e && M(b);
          break;
        case 40:
          41 === e && M(e);
          break;
        case 92:
          P()
      }
      return y
    }

    function D(e, t) {
      for (; P() && e + b !== 57 && (e + b !== 84 || 47 !== C());) ;
      return "/*" + x(t, y - 1) + "*" + i(47 === e ? e : P())
    }

    function I(e) {
      for (; !O(C());) P();
      return x(e, y)
    }

    var L = "-ms-", A = "-moz-", Z = "-webkit-", H = "comm", U = "rule", F = "decl", W = "@keyframes";

    function q(e, t) {
      for (var n = "", r = d(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
      return n
    }

    function B(e, t, n, r) {
      switch (e.type) {
        case"@layer":
          if (e.children.length) break;
        case"@import":
        case F:
          return e.return = e.return || e.value;
        case H:
          return "";
        case W:
          return e.return = e.value + "{" + q(e.children, r) + "}";
        case U:
          e.value = e.props.join(",")
      }
      return f(n = q(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
    }

    function Q(e) {
      return j(J("", null, null, null, [""], e = k(e), 0, [0], e))
    }

    function J(e, t, n, r, o, a, s, p, d) {
      for (var m = 0, g = 0, v = s, y = 0, b = 0, w = 0, _ = 1, E = 1, x = 1, O = 0, k = "", j = o, M = a, L = r, A = k; E;) switch (w = O, O = P()) {
        case 40:
          if (108 != w && 58 == l(A, v - 1)) {
            -1 != u(A += c(T(O), "&", "&\f"), "&\f") && (x = -1);
            break
          }
        case 34:
        case 39:
        case 91:
          A += T(O);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          A += N(w);
          break;
        case 92:
          A += $(R() - 1, 7);
          continue;
        case 47:
          switch (C()) {
            case 42:
            case 47:
              h(z(D(P(), R()), t, n), d);
              break;
            default:
              A += "/"
          }
          break;
        case 123 * _:
          p[m++] = f(A) * x;
        case 125 * _:
        case 59:
        case 0:
          switch (O) {
            case 0:
            case 125:
              E = 0;
            case 59 + g:
              -1 == x && (A = c(A, /\f/g, "")), b > 0 && f(A) - v && h(b > 32 ? V(A + ";", r, n, v - 1) : V(c(A, " ", "") + ";", r, n, v - 2), d);
              break;
            case 59:
              A += ";";
            default:
              if (h(L = G(A, t, n, m, g, o, p, k, j = [], M = [], v), a), 123 === O) if (0 === g) J(A, t, L, L, j, a, v, p, M); else switch (99 === y && 110 === l(A, 3) ? 100 : y) {
                case 100:
                case 108:
                case 109:
                case 115:
                  J(e, L, L, r && h(G(e, L, L, 0, 0, o, p, k, o, j = [], v), M), o, M, v, p, r ? j : M);
                  break;
                default:
                  J(A, L, L, L, [""], M, 0, p, M)
              }
          }
          m = g = b = 0, _ = x = 1, k = A = "", v = s;
          break;
        case 58:
          v = 1 + f(A), b = w;
        default:
          if (_ < 1) if (123 == O) --_; else if (125 == O && 0 == _++ && 125 == S()) continue;
          switch (A += i(O), O * _) {
            case 38:
              x = g > 0 ? 1 : (A += "\f", -1);
              break;
            case 44:
              p[m++] = (f(A) - 1) * x, x = 1;
              break;
            case 64:
              45 === C() && (A += T(P())), y = C(), g = v = f(k = A += I(R())), O++;
              break;
            case 45:
              45 === w && 2 == f(A) && (_ = 0)
          }
      }
      return a
    }

    function G(e, t, n, r, i, a, u, l, f, h, m) {
      for (var g = i - 1, v = 0 === i ? a : [""], y = d(v), b = 0, w = 0, E = 0; b < r; ++b) for (var S = 0, P = p(e, g + 1, g = o(w = u[b])), C = e; S < y; ++S) (C = s(w > 0 ? v[S] + " " + P : c(P, /&\f/g, v[S]))) && (f[E++] = C);
      return _(e, t, n, 0 === i ? U : l, f, h, m)
    }

    function z(e, t, n) {
      return _(e, t, n, H, i(b), p(e, 2, -2), 0)
    }

    function V(e, t, n, r) {
      return _(e, t, n, F, p(e, 0, r), p(e, r + 1, -1), r)
    }

    var K = function (e, t, n) {
      for (var r = 0, o = 0; r = o, o = C(), 38 === r && 12 === o && (t[n] = 1), !O(o);) P();
      return x(e, y)
    }, X = function (e, t) {
      return j(function (e, t) {
        var n = -1, r = 44;
        do {
          switch (O(r)) {
            case 0:
              38 === r && 12 === C() && (t[n] = 1), e[n] += K(y - 1, t, n);
              break;
            case 2:
              e[n] += T(r);
              break;
            case 4:
              if (44 === r) {
                e[++n] = 58 === C() ? "&\f" : "", t[n] = e[n].length;
                break
              }
            default:
              e[n] += i(r)
          }
        } while (r = P());
        return e
      }(k(e), t))
    }, Y = new WeakMap, ee = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type;) if (!(n = n.parent)) return;
        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Y.get(n)) && !r) {
          Y.set(e, !0);
          for (var o = [], i = X(t, o), a = n.props, s = 0, c = 0; s < i.length; s++) for (var u = 0; u < a.length; u++, c++) e.props[c] = o[s] ? i[s].replace(/&\f/g, a[u]) : a[u] + " " + i[s]
        }
      }
    }, te = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
      }
    };

    function ne(e, t) {
      switch (function (e, t) {
        return 45 ^ l(e, 0) ? (((t << 2 ^ l(e, 0)) << 2 ^ l(e, 1)) << 2 ^ l(e, 2)) << 2 ^ l(e, 3) : 0
      }(e, t)) {
        case 5103:
          return Z + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return Z + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return Z + e + A + e + L + e + e;
        case 6828:
        case 4268:
          return Z + e + L + e + e;
        case 6165:
          return Z + e + L + "flex-" + e + e;
        case 5187:
          return Z + e + c(e, /(\w+).+(:[^]+)/, Z + "box-$1$2" + L + "flex-$1$2") + e;
        case 5443:
          return Z + e + L + "flex-item-" + c(e, /flex-|-self/, "") + e;
        case 4675:
          return Z + e + L + "flex-line-pack" + c(e, /align-content|flex-|-self/, "") + e;
        case 5548:
          return Z + e + L + c(e, "shrink", "negative") + e;
        case 5292:
          return Z + e + L + c(e, "basis", "preferred-size") + e;
        case 6060:
          return Z + "box-" + c(e, "-grow", "") + Z + e + L + c(e, "grow", "positive") + e;
        case 4554:
          return Z + c(e, /([^-])(transform)/g, "$1" + Z + "$2") + e;
        case 6187:
          return c(c(c(e, /(zoom-|grab)/, Z + "$1"), /(image-set)/, Z + "$1"), e, "") + e;
        case 5495:
        case 3959:
          return c(e, /(image-set\([^]*)/, Z + "$1$`$1");
        case 4968:
          return c(c(e, /(.+:)(flex-)?(.*)/, Z + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Z + e + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return c(e, /(.+)-inline(.+)/, Z + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (f(e) - 1 - t > 6) switch (l(e, t + 1)) {
            case 109:
              if (45 !== l(e, t + 4)) break;
            case 102:
              return c(e, /(.+:)(.+)-([^]+)/, "$1" + Z + "$2-$3$1" + A + (108 == l(e, t + 3) ? "$3" : "$2-$3")) + e;
            case 115:
              return ~u(e, "stretch") ? ne(c(e, "stretch", "fill-available"), t) + e : e
          }
          break;
        case 4949:
          if (115 !== l(e, t + 1)) break;
        case 6444:
          switch (l(e, f(e) - 3 - (~u(e, "!important") && 10))) {
            case 107:
              return c(e, ":", ":" + Z) + e;
            case 101:
              return c(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Z + (45 === l(e, 14) ? "inline-" : "") + "box$3$1" + Z + "$2$3$1" + L + "$2box$3") + e
          }
          break;
        case 5936:
          switch (l(e, t + 11)) {
            case 114:
              return Z + e + L + c(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
            case 108:
              return Z + e + L + c(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
            case 45:
              return Z + e + L + c(e, /[svh]\w+-[tblr]{2}/, "lr") + e
          }
          return Z + e + L + e + e
      }
      return e
    }

    var re = [function (e, t, n, r) {
      if (e.length > -1 && !e.return) switch (e.type) {
        case F:
          e.return = ne(e.value, e.length);
          break;
        case W:
          return q([E(e, {value: c(e.value, "@", "@" + Z)})], r);
        case U:
          if (e.length) return function (e, t) {
            return e.map(t).join("")
          }(e.props, (function (t) {
            switch (function (e, t) {
              return (e = t.exec(e)) ? e[0] : e
            }(t, /(::plac\w+|:read-\w+)/)) {
              case":read-only":
              case":read-write":
                return q([E(e, {props: [c(t, /:(read-\w+)/, ":-moz-$1")]})], r);
              case"::placeholder":
                return q([E(e, {props: [c(t, /:(plac\w+)/, ":" + Z + "input-$1")]}), E(e, {props: [c(t, /:(plac\w+)/, ":-moz-$1")]}), E(e, {props: [c(t, /:(plac\w+)/, L + "input-$1")]})], r)
            }
            return ""
          }))
      }
    }], oe = function (e) {
      var t = e.key;
      if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, (function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
        }))
      }
      var o, i, a = e.stylisPlugins || re, s = {}, c = [];
      o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function (e) {
        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) s[t[n]] = !0;
        c.push(e)
      }));
      var u, l, p, f, h = [B, (f = function (e) {
        u.insert(e)
      }, function (e) {
        e.root || (e = e.return) && f(e)
      })], m = (l = [ee, te].concat(a, h), p = d(l), function (e, t, n, r) {
        for (var o = "", i = 0; i < p; i++) o += l[i](e, t, n, r) || "";
        return o
      });
      i = function (e, t, n, r) {
        u = n, q(Q(e ? e + "{" + t.styles + "}" : t.styles), m), r && (g.inserted[t.name] = !0)
      };
      var g = {
        key: t,
        sheet: new r({
          key: t,
          container: o,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint
        }),
        nonce: e.nonce,
        inserted: s,
        registered: {},
        insert: i
      };
      return g.sheet.hydrate(c), g
    }
  }, 5042: function (e, t, n) {
    "use strict";

    function r(e) {
      var t = Object.create(null);
      return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n]
      }
    }

    n.d(t, {
      Z: function () {
        return r
      }
    })
  }, 8741: function (e, t, n) {
    "use strict";
    n.d(t, {
      C: function () {
        return u
      }, E: function () {
        return g
      }, T: function () {
        return p
      }, c: function () {
        return h
      }, h: function () {
        return f
      }, w: function () {
        return l
      }
    });
    var r = n(7294), o = n(5053), i = n(444), a = n(9673), s = n(7278),
      c = r.createContext("undefined" != typeof HTMLElement ? (0, o.Z)({key: "css"}) : null), u = c.Provider,
      l = function (e) {
        return (0, r.forwardRef)((function (t, n) {
          var o = (0, r.useContext)(c);
          return e(t, o, n)
        }))
      }, p = r.createContext({});
    var f = {}.hasOwnProperty, d = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", h = function (e, t) {
      var n = {};
      for (var r in t) f.call(t, r) && (n[r] = t[r]);
      return n[d] = e, n
    }, m = function (e) {
      var t = e.cache, n = e.serialized, r = e.isStringTag;
      return (0, i.hC)(t, n, r), (0, s.L)((function () {
        return (0, i.My)(t, n, r)
      })), null
    }, g = l((function (e, t, n) {
      var o = e.css;
      "string" == typeof o && void 0 !== t.registered[o] && (o = t.registered[o]);
      var s = e[d], c = [o], u = "";
      "string" == typeof e.className ? u = (0, i.fp)(t.registered, c, e.className) : null != e.className && (u = e.className + " ");
      var l = (0, a.O)(c, void 0, r.useContext(p));
      u += t.key + "-" + l.name;
      var h = {};
      for (var g in e) f.call(e, g) && "css" !== g && g !== d && (h[g] = e[g]);
      return h.className = u, n && (h.ref = n), r.createElement(r.Fragment, null, r.createElement(m, {
        cache: t,
        serialized: l,
        isStringTag: "string" == typeof s
      }), r.createElement(s, h))
    }))
  }, 917: function (e, t, n) {
    "use strict";
    n.d(t, {
      F4: function () {
        return p
      }, iv: function () {
        return l
      }, tZ: function () {
        return c
      }, xB: function () {
        return u
      }
    });
    var r = n(8741), o = n(7294), i = n(444), a = n(7278), s = n(9673), c = (n(5053), n(434), n(8679), function (e, t) {
      var n = arguments;
      if (null == t || !r.h.call(t, "css")) return o.createElement.apply(void 0, n);
      var i = n.length, a = new Array(i);
      a[0] = r.E, a[1] = (0, r.c)(e, t);
      for (var s = 2; s < i; s++) a[s] = n[s];
      return o.createElement.apply(null, a)
    }), u = (0, r.w)((function (e, t) {
      var n = e.styles, c = (0, s.O)([n], void 0, o.useContext(r.T)), u = o.useRef();
      return (0, a.j)((function () {
        var e = t.key + "-global", n = new t.sheet.constructor({
          key: e,
          nonce: t.sheet.nonce,
          container: t.sheet.container,
          speedy: t.sheet.isSpeedy
        }), r = !1, o = document.querySelector('style[data-emotion="' + e + " " + c.name + '"]');
        return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== o && (r = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), u.current = [n, r], function () {
          n.flush()
        }
      }), [t]), (0, a.j)((function () {
        var e = u.current, n = e[0];
        if (e[1]) e[1] = !1; else {
          if (void 0 !== c.next && (0, i.My)(t, c.next, !0), n.tags.length) {
            var r = n.tags[n.tags.length - 1].nextElementSibling;
            n.before = r, n.flush()
          }
          t.insert("", c, n, !1)
        }
      }), [t, c.name]), null
    }));

    function l() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return (0, s.O)(t)
    }

    var p = function () {
      var e = l.apply(void 0, arguments), t = "animation-" + e.name;
      return {
        name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
      }
    }
  }, 9673: function (e, t, n) {
    "use strict";
    n.d(t, {
      O: function () {
        return g
      }
    });
    var r = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      }, o = n(5042), i = !1, a = /[A-Z]|^ms/g, s = /_EMO_([^_]+?)_([^]*?)_EMO_/g, c = function (e) {
        return 45 === e.charCodeAt(1)
      }, u = function (e) {
        return null != e && "boolean" != typeof e
      }, l = (0, o.Z)((function (e) {
        return c(e) ? e : e.replace(a, "-$&").toLowerCase()
      })), p = function (e, t) {
        switch (e) {
          case"animation":
          case"animationName":
            if ("string" == typeof t) return t.replace(s, (function (e, t, n) {
              return h = {name: t, styles: n, next: h}, t
            }))
        }
        return 1 === r[e] || c(e) || "number" != typeof t || 0 === t ? t : t + "px"
      },
      f = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";

    function d(e, t, n) {
      if (null == n) return "";
      var r = n;
      if (void 0 !== r.__emotion_styles) return r;
      switch (typeof n) {
        case"boolean":
          return "";
        case"object":
          var o = n;
          if (1 === o.anim) return h = {name: o.name, styles: o.styles, next: h}, o.name;
          var a = n;
          if (void 0 !== a.styles) {
            var s = a.next;
            if (void 0 !== s) for (; void 0 !== s;) h = {name: s.name, styles: s.styles, next: h}, s = s.next;
            return a.styles + ";"
          }
          return function (e, t, n) {
            var r = "";
            if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += d(e, t, n[o]) + ";"; else for (var a in n) {
              var s = n[a];
              if ("object" != typeof s) {
                var c = s;
                null != t && void 0 !== t[c] ? r += a + "{" + t[c] + "}" : u(c) && (r += l(a) + ":" + p(a, c) + ";")
              } else {
                if ("NO_COMPONENT_SELECTOR" === a && i) throw new Error(f);
                if (!Array.isArray(s) || "string" != typeof s[0] || null != t && void 0 !== t[s[0]]) {
                  var h = d(e, t, s);
                  switch (a) {
                    case"animation":
                    case"animationName":
                      r += l(a) + ":" + h + ";";
                      break;
                    default:
                      r += a + "{" + h + "}"
                  }
                } else for (var m = 0; m < s.length; m++) u(s[m]) && (r += l(a) + ":" + p(a, s[m]) + ";")
              }
            }
            return r
          }(e, t, n);
        case"function":
          if (void 0 !== e) {
            var c = h, m = n(e);
            return h = c, d(e, t, m)
          }
      }
      var g = n;
      if (null == t) return g;
      var v = t[g];
      return void 0 !== v ? v : g
    }

    var h, m = /label:\s*([^\s;\n{]+)\s*(;|$)/g;

    function g(e, t, n) {
      if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
      var r = !0, o = "";
      h = void 0;
      var i = e[0];
      null == i || void 0 === i.raw ? (r = !1, o += d(n, t, i)) : o += i[0];
      for (var a = 1; a < e.length; a++) {
        if (o += d(n, t, e[a]), r) o += i[a]
      }
      m.lastIndex = 0;
      for (var s, c = ""; null !== (s = m.exec(o));) c += "-" + s[1];
      var u = function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
        }
        return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
      }(o) + c;
      return {name: u, styles: o, next: h}
    }
  }, 7278: function (e, t, n) {
    "use strict";
    var r;
    n.d(t, {
      L: function () {
        return a
      }, j: function () {
        return s
      }
    });
    var o = n(7294), i = !!(r || (r = n.t(o, 2))).useInsertionEffect && (r || (r = n.t(o, 2))).useInsertionEffect,
      a = i || function (e) {
        return e()
      }, s = i || o.useLayoutEffect
  }, 444: function (e, t, n) {
    "use strict";
    n.d(t, {
      My: function () {
        return i
      }, fp: function () {
        return r
      }, hC: function () {
        return o
      }
    });

    function r(e, t, n) {
      var r = "";
      return n.split(" ").forEach((function (n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
      })), r
    }

    var o = function (e, t, n) {
      var r = e.key + "-" + t.name;
      !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
    }, i = function (e, t, n) {
      o(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
        var i = t;
        do {
          e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next
        } while (void 0 !== i)
      }
    }
  }, 4506: function (e, t) {
    "use strict";
    t.H = void 0;
    const n = [".html", ".json", ".js", ".map", ".txt", ".xml", ".pdf"];
    t.H = (e, t = "always") => {
      if ("/" === e) return e;
      const r = e.endsWith("/");
      return ((e, t) => {
        for (const n of e) if (t.endsWith(n)) return !0;
        return !1
      })(n, e) ? e : "always" === t ? r ? e : `${e}/` : "never" === t && r ? e.slice(0, -1) : e
    }
  }, 9679: function (e, t, n) {
    "use strict";
    t.p2 = t.$C = void 0;
    var r = n(1432);
    t.$C = r.ScrollHandler;
    var o = n(4855);
    t.p2 = o.useScrollRestoration
  }, 1432: function (e, t, n) {
    "use strict";
    var r = n(4836);
    t.__esModule = !0, t.ScrollHandler = t.ScrollContext = void 0;
    var o = r(n(6115)), i = r(n(7867)), a = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != typeof e && "function" != typeof e) return {default: e};
      var n = u(t);
      if (n && n.has(e)) return n.get(e);
      var r = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e) if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
        a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
      }
      r.default = e, n && n.set(e, r);
      return r
    }(n(7294)), s = r(n(5697)), c = n(1142);

    function u(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap, n = new WeakMap;
      return (u = function (e) {
        return e ? n : t
      })(e)
    }

    var l = a.createContext(new c.SessionStorage);
    t.ScrollContext = l, l.displayName = "GatsbyScrollContext";
    var p = function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return (t = e.call.apply(e, [this].concat(r)) || this)._stateStorage = new c.SessionStorage, t._isTicking = !1, t._latestKnownScrollY = 0, t.scrollListener = function () {
          t._latestKnownScrollY = window.scrollY, t._isTicking || (t._isTicking = !0, requestAnimationFrame(t._saveScroll.bind((0, o.default)(t))))
        }, t.windowScroll = function (e, n) {
          t.shouldUpdateScroll(n, t.props) && window.scrollTo(0, e)
        }, t.scrollToHash = function (e, n) {
          var r = document.getElementById(e.substring(1));
          r && t.shouldUpdateScroll(n, t.props) && r.scrollIntoView()
        }, t.shouldUpdateScroll = function (e, n) {
          var r = t.props.shouldUpdateScroll;
          return !r || r.call((0, o.default)(t), e, n)
        }, t
      }

      (0, i.default)(t, e);
      var n = t.prototype;
      return n._saveScroll = function () {
        var e = this.props.location.key || null;
        e && this._stateStorage.save(this.props.location, e, this._latestKnownScrollY), this._isTicking = !1
      }, n.componentDidMount = function () {
        var e;
        window.addEventListener("scroll", this.scrollListener);
        var t = this.props.location, n = t.key, r = t.hash;
        n && (e = this._stateStorage.read(this.props.location, n)), r ? this.scrollToHash(decodeURI(r), void 0) : e && this.windowScroll(e, void 0)
      }, n.componentWillUnmount = function () {
        window.removeEventListener("scroll", this.scrollListener)
      }, n.componentDidUpdate = function (e) {
        var t, n = this.props.location, r = n.hash, o = n.key;
        o && (t = this._stateStorage.read(this.props.location, o)), r ? this.scrollToHash(decodeURI(r), e) : this.windowScroll(t, e)
      }, n.render = function () {
        return a.createElement(l.Provider, {value: this._stateStorage}, this.props.children)
      }, t
    }(a.Component);
    t.ScrollHandler = p, p.propTypes = {
      shouldUpdateScroll: s.default.func,
      children: s.default.element.isRequired,
      location: s.default.object.isRequired
    }
  }, 1142: function (e, t) {
    "use strict";
    t.__esModule = !0, t.SessionStorage = void 0;
    var n = "___GATSBY_REACT_ROUTER_SCROLL", r = function () {
      function e() {
      }

      var t = e.prototype;
      return t.read = function (e, t) {
        var r = this.getStateKey(e, t);
        try {
          var o = window.sessionStorage.getItem(r);
          return o ? JSON.parse(o) : 0
        } catch (i) {
          return window && window[n] && window[n][r] ? window[n][r] : 0
        }
      }, t.save = function (e, t, r) {
        var o = this.getStateKey(e, t), i = JSON.stringify(r);
        try {
          window.sessionStorage.setItem(o, i)
        } catch (a) {
          window && window[n] || (window[n] = {}), window[n][o] = JSON.parse(i)
        }
      }, t.getStateKey = function (e, t) {
        var n = "@@scroll|" + e.pathname;
        return null == t ? n : n + "|" + t
      }, e
    }();
    t.SessionStorage = r
  }, 4855: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.useScrollRestoration = function (e) {
      var t = (0, i.useLocation)(), n = (0, o.useContext)(r.ScrollContext), a = (0, o.useRef)(null);
      return (0, o.useLayoutEffect)((function () {
        if (a.current) {
          var r = n.read(t, e);
          a.current.scrollTo(0, r || 0)
        }
      }), [t.key]), {
        ref: a, onScroll: function () {
          a.current && n.save(t, e, a.current.scrollTop)
        }
      }
    };
    var r = n(1432), o = n(7294), i = n(7896)
  }, 4094: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.onInitialClientRender = void 0;
    n(3521), n(2731);
    t.onInitialClientRender = () => {
    }
  }, 7730: function (e, t) {
    "use strict";
    t.__esModule = !0, t.getForwards = function (e) {
      return null == e ? void 0 : e.flatMap((e => (null == e ? void 0 : e.forward) || []))
    }
  }, 2731: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.injectPartytownSnippet = function (e) {
      if (!e.length) return;
      const t = document.querySelector("script[data-partytown]"),
        n = document.querySelector('iframe[src*="~partytown/partytown-sandbox-sw"]');
      t && t.remove();
      n && n.remove();
      const i = (0, o.getForwards)(e), a = document.createElement("script");
      a.dataset.partytown = "", a.innerHTML = (0, r.partytownSnippet)({forward: i}), document.head.appendChild(a)
    };
    var r = n(2911), o = n(7730)
  }, 5418: function (e, t, n) {
    t.components = {
      "component---src-pages-404-tsx": () => n.e(218).then(n.bind(n, 2513)),
      "component---src-pages-avatar-tsx": () => Promise.all([n.e(475), n.e(540), n.e(766), n.e(378), n.e(895), n.e(193), n.e(343)]).then(n.bind(n, 2126)),
      "component---src-pages-buy-tsx": () => Promise.all([n.e(475), n.e(378), n.e(159), n.e(450)]).then(n.bind(n, 3069)),
      "component---src-pages-comics-tsx": () => Promise.all([n.e(475), n.e(378), n.e(895), n.e(128)]).then(n.bind(n, 4602)),
      "component---src-pages-content-tsx": () => Promise.all([n.e(774), n.e(475), n.e(378), n.e(895), n.e(159), n.e(193), n.e(965)]).then(n.bind(n, 7762)),
      "component---src-pages-featured-tsx": () => Promise.all([n.e(475), n.e(378), n.e(895), n.e(863)]).then(n.bind(n, 6271)),
      "component---src-pages-index-tsx": () => Promise.all([n.e(475), n.e(296), n.e(100), n.e(495), n.e(378), n.e(159), n.e(691)]).then(n.bind(n, 3196)),
      "component---src-pages-policy-tsx": () => n.e(230).then(n.bind(n, 863)),
      "component---src-pages-series-tsx": () => Promise.all([n.e(475), n.e(378), n.e(895), n.e(724)]).then(n.bind(n, 6285)),
      "component---src-templates-comic-tsx": () => Promise.all([n.e(475), n.e(378), n.e(895), n.e(159), n.e(573)]).then(n.bind(n, 8147)),
      "component---src-templates-series-tsx": () => Promise.all([n.e(475), n.e(378), n.e(159), n.e(249)]).then(n.bind(n, 9596))
    }
  }, 4741: function (e, t, n) {
    e.exports = [{
      plugin: n(9608),
      options: {
        plugins: [],
        icon: "src/images/icon.png",
        legacy: !0,
        theme_color_in_head: !0,
        cache_busting_mode: "query",
        crossOrigin: "anonymous",
        include_favicon: !0,
        cacheDigest: "f7945e2ca6405025b3d5184645b958e5"
      }
    }, {plugin: n(9811), options: {plugins: []}}, {plugin: n(7664), options: {plugins: []}}, {
      plugin: n(4094),
      options: {plugins: []}
    }]
  }, 3092: function (e, t, n) {
    const r = n(4741), {getResourceURLsForPathname: o, loadPage: i, loadPageSync: a} = n(1975).jN;
    t.h = function (e, t, n, s) {
      void 0 === t && (t = {});
      let c = r.map((n => {
        if (!n.plugin[e]) return;
        t.getResourceURLsForPathname = o, t.loadPage = i, t.loadPageSync = a;
        const r = n.plugin[e](t, n.options);
        return r && s && (t = s({args: t, result: r, plugin: n})), r
      }));
      return c = c.filter((e => void 0 !== e)), c.length > 0 ? c : n ? [n] : []
    }, t.I = (e, t, n) => r.reduce(((n, r) => r.plugin[e] ? n.then((() => r.plugin[e](t, r.options))) : n), Promise.resolve())
  }, 4004: function (e, t) {
    t.M = () => ""
  }, 8299: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z: function () {
        return r
      }
    });
    var r = function (e) {
      return e = e || Object.create(null), {
        on: function (t, n) {
          (e[t] || (e[t] = [])).push(n)
        }, off: function (t, n) {
          e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1)
        }, emit: function (t, n) {
          (e[t] || []).slice().map((function (e) {
            e(n)
          })), (e["*"] || []).slice().map((function (e) {
            e(t, n)
          }))
        }
      }
    }()
  }, 7802: function (e, t, n) {
    "use strict";
    n.d(t, {
      UD: function () {
        return f
      }, Cj: function () {
        return h
      }, GA: function () {
        return d
      }, DS: function () {
        return p
      }
    });
    var r = n(7896), o = n(1505), i = e => {
      if (void 0 === e) return e;
      let [t, n = ""] = e.split("?");
      return n && (n = "?" + n), "/" === t ? "/" + n : "/" === t.charAt(t.length - 1) ? t.slice(0, -1) + n : t + n
    }, a = n(6073);
    const s = new Map;
    let c = [];
    const u = e => {
      let t = e;
      if (-1 !== e.indexOf("?")) {
        const [n, r] = e.split("?");
        t = `${n}?${encodeURIComponent(r)}`
      }
      const n = decodeURIComponent(t);
      return (0, o.Z)(n, decodeURIComponent("")).split("#")[0]
    };

    function l(e) {
      return e.startsWith("/") || e.startsWith("https://") || e.startsWith("http://") ? e : new URL(e, window.location.href + (window.location.href.endsWith("/") ? "" : "/")).pathname
    }

    const p = e => {
      c = e
    }, f = e => {
      const t = m(e), n = c.map((e => {
        let {path: t, matchPath: n} = e;
        return {path: n, originalPath: t}
      })), o = (0, r.pick)(n, t);
      return o ? i(o.route.originalPath) : null
    }, d = e => {
      const t = m(e), n = c.map((e => {
        let {path: t, matchPath: n} = e;
        return {path: n, originalPath: t}
      })), o = (0, r.pick)(n, t);
      return o ? o.params : {}
    }, h = e => {
      const t = u(l(e));
      if (s.has(t)) return s.get(t);
      const n = (0, a.J)(e);
      if (n) return h(n.toPath);
      let r = f(t);
      return r || (r = m(e)), s.set(t, r), r
    }, m = e => {
      let t = u(l(e));
      return "/index.html" === t && (t = "/"), t = i(t), t
    }
  }, 4854: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      Link: function () {
        return s.rU
      }, PageRenderer: function () {
        return i()
      }, Script: function () {
        return R.Script
      }, ScriptStrategy: function () {
        return R.ScriptStrategy
      }, Slice: function () {
        return S
      }, StaticQuery: function () {
        return c.i1
      }, StaticQueryContext: function () {
        return c.B9
      }, collectedScriptsByPage: function () {
        return R.collectedScriptsByPage
      }, graphql: function () {
        return O
      }, navigate: function () {
        return s.c4
      }, parsePath: function () {
        return s.cP
      }, prefetchPathname: function () {
        return x
      }, scriptCache: function () {
        return R.scriptCache
      }, scriptCallbackCache: function () {
        return R.scriptCallbackCache
      }, useScrollRestoration: function () {
        return a.p2
      }, useStaticQuery: function () {
        return c.K2
      }, withAssetPrefix: function () {
        return s.mc
      }, withPrefix: function () {
        return s.dq
      }
    });
    var r = n(1975), o = n(2743), i = n.n(o), a = n(9679), s = n(1562), c = n(1757), u = n(7326), l = n(4578);

    function p(e) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e)
      }, p(e)
    }

    var f = n(9611);

    function d() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
        })))
      } catch (e) {
      }
      return (d = function () {
        return !!e
      })()
    }

    function h(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return h = function (e) {
        if (null === e || !function (e) {
          try {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
          } catch (t) {
            return "function" == typeof e
          }
        }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n)
        }

        function n() {
          return function (e, t, n) {
            if (d()) return Reflect.construct.apply(null, arguments);
            var r = [null];
            r.push.apply(r, t);
            var o = new (e.bind.apply(e, r));
            return n && (0, f.Z)(o, n.prototype), o
          }(e, arguments, p(this).constructor)
        }

        return n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), (0, f.Z)(n, e)
      }, h(e)
    }

    var m = n(7294), g = n(4004), v = n(8995);
    const y = e => {
      let {sliceId: t, children: n} = e;
      const r = [m.createElement("slice-start", {id: `${t}-1`}), m.createElement("slice-end", {id: `${t}-1`})];
      return n && (r.push(n), r.push(m.createElement("slice-start", {id: `${t}-2`}), m.createElement("slice-end", {id: `${t}-2`}))), r
    };
    var b = n(917);
    const w = e => {
      let {sliceName: t, allowEmpty: n, children: r, ...o} = e;
      const i = (0, m.useContext)(v.u0), a = (0, m.useContext)(v.Db), s = i[t];
      if (!s) {
        if (n) return null;
        throw new Error(`Slice "${s}" for "${t}" slot not found`)
      }
      const c = ((e, t) => Object.keys(t).length ? `${e}-${(0, g.M)(t)}` : e)(s, o);
      let u = a[c];
      return u ? r && (u.hasChildren = !0) : a[c] = u = {
        props: o,
        sliceName: s,
        hasChildren: !!r
      }, (0, b.tZ)(y, {sliceId: c}, r)
    };
    var _ = n(7462);
    const E = e => {
      let {sliceName: t, allowEmpty: n, children: r, ...o} = e;
      const i = (0, m.useContext)(v.u0), a = (0, m.useContext)(v.m3), s = i[t], c = a.get(s);
      if (!c) {
        if (n) return null;
        throw new Error(`Slice "${s}" for "${t}" slot not found`)
      }
      return (0, b.tZ)(c.component, (0, _.Z)({sliceContext: c.sliceContext, data: c.data}, o), r)
    };

    function S(e) {
      {
        const t = {...e, sliceName: e.alias};
        delete t.alias, delete t.__renderedByLocation;
        const n = (0, m.useContext)(v.Bs), r = C(e);
        if (Object.keys(r).length) throw new P("browser" === n.renderEnvironment, t.sliceName, r, e.__renderedByLocation);
        if ("server" === n.renderEnvironment) return (0, b.tZ)(w, t);
        if ("browser" === n.renderEnvironment) return (0, b.tZ)(E, t);
        if ("engines" === n.renderEnvironment || "dev-ssr" === n.renderEnvironment) return (0, b.tZ)(E, t);
        if ("slices" === n.renderEnvironment) {
          let t = "";
          try {
            t = `\n\nSlice component "${n.sliceRoot.name}" (${n.sliceRoot.componentPath}) tried to render <Slice alias="${e.alias}"/>`
          } catch {
          }
          throw new Error(`Nested slices are not supported.${t}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`)
        }
        throw new Error(`Slice context "${n.renderEnvironment}" is not supported.`)
      }
    }

    let P = function (e) {
      function t(n, r, o, i) {
        var a;
        const s = Object.entries(o).map((e => {
          let [t, n] = e;
          return `not serializable "${n}" type passed to "${t}" prop`
        })).join(", "), c = "SlicePropsError";
        let l = "", p = "";
        if (n) {
          const e = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack().trim().split("\n").slice(1);
          e[0] = e[0].trim(), l = "\n" + e.join("\n"), p = `Slice "${r}" was passed props that are not serializable (${s}).`
        } else {
          p = `${c}: Slice "${r}" was passed props that are not serializable (${s}).`;
          l = `${p}\n${(new Error).stack.trim().split("\n").slice(2).join("\n")}`
        }
        return (a = e.call(this, p) || this).name = c, l ? a.stack = l : Error.captureStackTrace((0, u.Z)(a), t), i && (a.forcedLocation = {
          ...i,
          functionName: "Slice"
        }), a
      }

      return (0, l.Z)(t, e), t
    }(h(Error));
    const C = function (e, t, n, r) {
      void 0 === t && (t = {}), void 0 === n && (n = []), void 0 === r && (r = null);
      for (const [o, i] of Object.entries(e)) {
        if (null == i || !r && "children" === o) continue;
        const e = r ? `${r}.${o}` : o;
        "function" == typeof i ? t[e] = typeof i : "object" == typeof i && n.indexOf(i) <= 0 && (n.push(i), C(i, t, n, e))
      }
      return t
    };
    var R = n(3521);
    const x = r.ZP.enqueue;

    function O() {
      throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")
    }
  }, 1975: function (e, t, n) {
    "use strict";
    n.d(t, {
      uQ: function () {
        return p
      }, kL: function () {
        return _
      }, ZP: function () {
        return P
      }, Nt: function () {
        return R
      }, hs: function () {
        return C
      }, jN: function () {
        return S
      }, N1: function () {
        return E
      }
    });
    var r = n(4578), o = n(5785), i = n(904);
    const a = function (e) {
      if ("undefined" == typeof document) return !1;
      const t = document.createElement("link");
      try {
        if (t.relList && "function" == typeof t.relList.supports) return t.relList.supports(e)
      } catch (n) {
        return !1
      }
      return !1
    }("prefetch") ? function (e, t) {
      return new Promise(((n, r) => {
        if ("undefined" == typeof document) return void r();
        const o = document.createElement("link");
        o.setAttribute("rel", "prefetch"), o.setAttribute("href", e), Object.keys(t).forEach((e => {
          o.setAttribute(e, t[e])
        })), o.onload = n, o.onerror = r;
        (document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode).appendChild(o)
      }))
    } : function (e) {
      return new Promise(((t, n) => {
        const r = new XMLHttpRequest;
        r.open("GET", e, !0), r.onload = () => {
          200 === r.status ? t() : n()
        }, r.send(null)
      }))
    }, s = {};
    var c = function (e, t) {
      return new Promise((n => {
        s[e] ? n() : a(e, t).then((() => {
          n(), s[e] = !0
        })).catch((() => {
        }))
      }))
    }, u = n(8299), l = n(7802);
    const p = {Error: "error", Success: "success"}, f = e => {
      const [t, n] = e.split("?");
      var r;
      return `/page-data/${"/" === t ? "index" : (r = "/" === (r = t)[0] ? r.slice(1) : r).endsWith("/") ? r.slice(0, -1) : r}/page-data.json${n ? `?${n}` : ""}`
    }, d = e => e.startsWith("//");

    function h(e, t) {
      return void 0 === t && (t = "GET"), new Promise((n => {
        const r = new XMLHttpRequest;
        r.open(t, e, !0), r.onreadystatechange = () => {
          4 == r.readyState && n(r)
        }, r.send(null)
      }))
    }

    const m = /bot|crawler|spider|crawling/i, g = function (e, t, n) {
      var r;
      void 0 === t && (t = null);
      const o = {
        componentChunkName: e.componentChunkName,
        path: e.path,
        webpackCompilationHash: e.webpackCompilationHash,
        matchPath: e.matchPath,
        staticQueryHashes: e.staticQueryHashes,
        getServerDataError: e.getServerDataError,
        slicesMap: null !== (r = e.slicesMap) && void 0 !== r ? r : {}
      };
      return {component: t, head: n, json: e.result, page: o}
    };

    function v(e) {
      return new Promise((t => {
        try {
          const n = e.readRoot();
          t(n)
        } catch (n) {
          if (!Object.hasOwnProperty.call(n, "_response") || !Object.hasOwnProperty.call(n, "_status")) throw n;
          setTimeout((() => {
            v(e).then(t)
          }), 200)
        }
      }))
    }

    let y = function () {
      function e(e, t) {
        this.inFlightNetworkRequests = new Map, this.pageDb = new Map, this.inFlightDb = new Map, this.staticQueryDb = {}, this.pageDataDb = new Map, this.partialHydrationDb = new Map, this.slicesDataDb = new Map, this.sliceInflightDb = new Map, this.slicesDb = new Map, this.isPrefetchQueueRunning = !1, this.prefetchQueued = [], this.prefetchTriggered = new Set, this.prefetchCompleted = new Set, this.loadComponent = e, (0, l.DS)(t)
      }

      var t = e.prototype;
      return t.memoizedGet = function (e) {
        let t = this.inFlightNetworkRequests.get(e);
        return t || (t = h(e, "GET"), this.inFlightNetworkRequests.set(e, t)), t.then((t => (this.inFlightNetworkRequests.delete(e), t))).catch((t => {
          throw this.inFlightNetworkRequests.delete(e), t
        }))
      }, t.setApiRunner = function (e) {
        this.apiRunner = e, this.prefetchDisabled = e("disableCorePrefetching").some((e => e))
      }, t.fetchPageDataJson = function (e) {
        const {pagePath: t, retries: n = 0} = e, r = f(t);
        return this.memoizedGet(r).then((r => {
          const {status: o, responseText: i} = r;
          if (200 === o) try {
            const n = JSON.parse(i);
            if (void 0 === n.path) throw new Error("not a valid pageData response");
            const r = t.split("?")[1];
            return r && !n.path.includes(r) && (n.path += `?${r}`), Object.assign(e, {status: p.Success, payload: n})
          } catch (a) {
          }
          return 404 === o || 200 === o ? "/404.html" === t || "/500.html" === t ? Object.assign(e, {status: p.Error}) : this.fetchPageDataJson(Object.assign(e, {
            pagePath: "/404.html",
            notFound: !0
          })) : 500 === o ? this.fetchPageDataJson(Object.assign(e, {
            pagePath: "/500.html",
            internalServerError: !0
          })) : n < 3 ? this.fetchPageDataJson(Object.assign(e, {retries: n + 1})) : Object.assign(e, {status: p.Error})
        }))
      }, t.fetchPartialHydrationJson = function (e) {
        const {pagePath: t, retries: n = 0} = e, r = f(t).replace(".json", "-rsc.json");
        return this.memoizedGet(r).then((r => {
          const {status: o, responseText: i} = r;
          if (200 === o) try {
            return Object.assign(e, {status: p.Success, payload: i})
          } catch (a) {
          }
          return 404 === o || 200 === o ? "/404.html" === t || "/500.html" === t ? Object.assign(e, {status: p.Error}) : this.fetchPartialHydrationJson(Object.assign(e, {
            pagePath: "/404.html",
            notFound: !0
          })) : 500 === o ? this.fetchPartialHydrationJson(Object.assign(e, {
            pagePath: "/500.html",
            internalServerError: !0
          })) : n < 3 ? this.fetchPartialHydrationJson(Object.assign(e, {retries: n + 1})) : Object.assign(e, {status: p.Error})
        }))
      }, t.loadPageDataJson = function (e) {
        const t = (0, l.Cj)(e);
        if (this.pageDataDb.has(t)) {
          const e = this.pageDataDb.get(t);
          return Promise.resolve(e)
        }
        return this.fetchPageDataJson({pagePath: t}).then((e => (this.pageDataDb.set(t, e), e)))
      }, t.loadPartialHydrationJson = function (e) {
        const t = (0, l.Cj)(e);
        if (this.partialHydrationDb.has(t)) {
          const e = this.partialHydrationDb.get(t);
          return Promise.resolve(e)
        }
        return this.fetchPartialHydrationJson({pagePath: t}).then((e => (this.partialHydrationDb.set(t, e), e)))
      }, t.loadSliceDataJson = function (e) {
        if (this.slicesDataDb.has(e)) {
          const t = this.slicesDataDb.get(e);
          return Promise.resolve({sliceName: e, jsonPayload: t})
        }
        return h(`/slice-data/${e}.json`, "GET").then((t => {
          const n = JSON.parse(t.responseText);
          return this.slicesDataDb.set(e, n), {sliceName: e, jsonPayload: n}
        }))
      }, t.findMatchPath = function (e) {
        return (0, l.UD)(e)
      }, t.loadPage = function (e) {
        const t = (0, l.Cj)(e);
        if (this.pageDb.has(t)) {
          const e = this.pageDb.get(t);
          return e.error ? Promise.resolve({error: e.error, status: e.status}) : Promise.resolve(e.payload)
        }
        if (this.inFlightDb.has(t)) return this.inFlightDb.get(t);
        const n = [this.loadAppData(), this.loadPageDataJson(t)];
        const r = Promise.all(n).then((e => {
          const [n, r, a] = e;
          if (r.status === p.Error || (null == a ? void 0 : a.status) === p.Error) return {status: p.Error};
          let s = r.payload;
          const {componentChunkName: c, staticQueryHashes: l = [], slicesMap: f = {}} = s, d = {},
            h = Array.from(new Set(Object.values(f))), m = e => {
              if (this.slicesDb.has(e.name)) return this.slicesDb.get(e.name);
              if (this.sliceInflightDb.has(e.name)) return this.sliceInflightDb.get(e.name);
              const t = this.loadComponent(e.componentChunkName).then((t => {
                return {
                  component: (n = t, n && n.default || n),
                  sliceContext: e.result.sliceContext,
                  data: e.result.data
                };
                var n
              }));
              return this.sliceInflightDb.set(e.name, t), t.then((t => {
                this.slicesDb.set(e.name, t), this.sliceInflightDb.delete(e.name)
              })), t
            };
          return Promise.all(h.map((e => this.loadSliceDataJson(e)))).then((e => {
            const f = [], h = (0, o.Z)(l);
            for (const {jsonPayload: t, sliceName: n} of Object.values(e)) {
              f.push({name: n, ...t});
              for (const e of t.staticQueryHashes) h.includes(e) || h.push(e)
            }
            const y = [Promise.all(f.map(m)), this.loadComponent(c, "head")];
            y.push(this.loadComponent(c));
            const b = Promise.all(y).then((e => {
              const [t, o, c] = e;
              d.createdAt = new Date;
              for (const n of t) (!n || n instanceof Error) && (d.status = p.Error, d.error = n);
              let u;
              if ((!c || c instanceof Error) && (d.status = p.Error, d.error = c), d.status !== p.Error) {
                if (d.status = p.Success, !0 !== r.notFound && !0 !== (null == a ? void 0 : a.notFound) || (d.notFound = !0), s = Object.assign(s, {webpackCompilationHash: n ? n.webpackCompilationHash : ""}), "string" == typeof (null == a ? void 0 : a.payload)) {
                  u = g(s, null, o), u.partialHydration = a.payload;
                  const e = new ReadableStream({
                    start(e) {
                      const t = new TextEncoder;
                      e.enqueue(t.encode(a.payload))
                    }, pull(e) {
                      e.close()
                    }, cancel() {
                    }
                  });
                  return v((0, i.createFromReadableStream)(e)).then((e => (u.partialHydration = e, u)))
                }
                u = g(s, c, o)
              }
              return u
            })), w = Promise.all(h.map((e => {
              if (this.staticQueryDb[e]) {
                const t = this.staticQueryDb[e];
                return {staticQueryHash: e, jsonPayload: t}
              }
              return this.memoizedGet(`/page-data/sq/d/${e}.json`).then((t => {
                const n = JSON.parse(t.responseText);
                return {staticQueryHash: e, jsonPayload: n}
              })).catch((() => {
                throw new Error(`We couldn't load "/page-data/sq/d/${e}.json"`)
              }))
            }))).then((e => {
              const t = {};
              return e.forEach((e => {
                let {staticQueryHash: n, jsonPayload: r} = e;
                t[n] = r, this.staticQueryDb[n] = r
              })), t
            }));
            return Promise.all([b, w]).then((e => {
              let n, [r, o] = e;
              return r && (n = {
                ...r,
                staticQueryResults: o
              }, d.payload = n, u.Z.emit("onPostLoadPageResources", {
                page: n,
                pageResources: n
              })), this.pageDb.set(t, d), d.error ? {error: d.error, status: d.status} : n
            })).catch((e => ({error: e, status: p.Error})))
          }))
        }));
        return r.then((() => {
          this.inFlightDb.delete(t)
        })).catch((e => {
          throw this.inFlightDb.delete(t), e
        })), this.inFlightDb.set(t, r), r
      }, t.loadPageSync = function (e, t) {
        void 0 === t && (t = {});
        const n = (0, l.Cj)(e);
        if (this.pageDb.has(n)) {
          var r;
          const e = this.pageDb.get(n);
          if (e.payload) return e.payload;
          if (null !== (r = t) && void 0 !== r && r.withErrorDetails) return {error: e.error, status: e.status}
        }
      }, t.shouldPrefetch = function (e) {
        return !!(() => {
          if ("connection" in navigator && void 0 !== navigator.connection) {
            if ((navigator.connection.effectiveType || "").includes("2g")) return !1;
            if (navigator.connection.saveData) return !1
          }
          return !0
        })() && ((!navigator.userAgent || !m.test(navigator.userAgent)) && !this.pageDb.has(e))
      }, t.prefetch = function (e) {
        if (!this.shouldPrefetch(e)) return {
          then: e => e(!1), abort: () => {
          }
        };
        if (this.prefetchTriggered.has(e)) return {
          then: e => e(!0), abort: () => {
          }
        };
        const t = {resolve: null, reject: null, promise: null};
        t.promise = new Promise(((e, n) => {
          t.resolve = e, t.reject = n
        })), this.prefetchQueued.push([e, t]);
        const n = new AbortController;
        return n.signal.addEventListener("abort", (() => {
          const t = this.prefetchQueued.findIndex((t => {
            let [n] = t;
            return n === e
          }));
          -1 !== t && this.prefetchQueued.splice(t, 1)
        })), this.isPrefetchQueueRunning || (this.isPrefetchQueueRunning = !0, setTimeout((() => {
          this._processNextPrefetchBatch()
        }), 3e3)), {then: (e, n) => t.promise.then(e, n), abort: n.abort.bind(n)}
      }, t._processNextPrefetchBatch = function () {
        (window.requestIdleCallback || (e => setTimeout(e, 0)))((() => {
          const e = this.prefetchQueued.splice(0, 4), t = Promise.all(e.map((e => {
            let [t, n] = e;
            return this.prefetchTriggered.has(t) || (this.apiRunner("onPrefetchPathname", {pathname: t}), this.prefetchTriggered.add(t)), this.prefetchDisabled ? n.resolve(!1) : this.doPrefetch((0, l.Cj)(t)).then((() => {
              this.prefetchCompleted.has(t) || (this.apiRunner("onPostPrefetchPathname", {pathname: t}), this.prefetchCompleted.add(t)), n.resolve(!0)
            }))
          })));
          this.prefetchQueued.length ? t.then((() => {
            setTimeout((() => {
              this._processNextPrefetchBatch()
            }), 3e3)
          })) : this.isPrefetchQueueRunning = !1
        }))
      }, t.doPrefetch = function (e) {
        const t = f(e);
        return c(t, {crossOrigin: "anonymous", as: "fetch"}).then((() => this.loadPageDataJson(e)))
      }, t.hovering = function (e) {
        this.loadPage(e)
      }, t.getResourceURLsForPathname = function (e) {
        const t = (0, l.Cj)(e), n = this.pageDataDb.get(t);
        if (n) {
          const e = g(n.payload);
          return [].concat((0, o.Z)(b(e.page.componentChunkName)), [f(t)])
        }
        return null
      }, t.isPageNotFound = function (e) {
        const t = (0, l.Cj)(e), n = this.pageDb.get(t);
        return !n || n.notFound
      }, t.loadAppData = function (e) {
        return void 0 === e && (e = 0), this.memoizedGet("/page-data/app-data.json").then((t => {
          const {status: n, responseText: r} = t;
          let o;
          if (200 !== n && e < 3) return this.loadAppData(e + 1);
          if (200 === n) try {
            const e = JSON.parse(r);
            if (void 0 === e.webpackCompilationHash) throw new Error("not a valid app-data response");
            o = e
          } catch (i) {
          }
          return o
        }))
      }, e
    }();
    const b = e => (window.___chunkMapping[e] || []).map((e => "" + e));
    let w, _ = function (e) {
      function t(t, n, r) {
        var o;
        return o = e.call(this, (function (e, n) {
          if (void 0 === n && (n = "components"), !t[n = "components"][e]) throw new Error(`We couldn't find the correct component chunk with the name "${e}"`);
          return t[n][e]().catch((e => e))
        }), n) || this, r && o.pageDataDb.set((0, l.Cj)(r.path), {pagePath: r.path, payload: r, status: "success"}), o
      }

      (0, r.Z)(t, e);
      var n = t.prototype;
      return n.doPrefetch = function (t) {
        return e.prototype.doPrefetch.call(this, t).then((e => {
          if (e.status !== p.Success) return Promise.resolve();
          const t = e.payload, n = t.componentChunkName, r = b(n);
          return Promise.all(r.map(c)).then((() => t))
        }))
      }, n.loadPageDataJson = function (t) {
        return e.prototype.loadPageDataJson.call(this, t).then((e => e.notFound ? d(t) ? e : h(t, "HEAD").then((t => 200 === t.status ? {status: p.Error} : e)) : e))
      }, n.loadPartialHydrationJson = function (t) {
        return e.prototype.loadPartialHydrationJson.call(this, t).then((e => e.notFound ? d(t) ? e : h(t, "HEAD").then((t => 200 === t.status ? {status: p.Error} : e)) : e))
      }, t
    }(y);
    const E = e => {
      w = e
    }, S = {
      enqueue: e => w.prefetch(e),
      getResourceURLsForPathname: e => w.getResourceURLsForPathname(e),
      loadPage: e => w.loadPage(e),
      loadPageSync: function (e, t) {
        return void 0 === t && (t = {}), w.loadPageSync(e, t)
      },
      prefetch: e => w.prefetch(e),
      isPageNotFound: e => w.isPageNotFound(e),
      hovering: e => w.hovering(e),
      loadAppData: () => w.loadAppData()
    };
    var P = S;

    function C() {
      return w ? w.staticQueryDb : {}
    }

    function R() {
      return w ? w.slicesDb : {}
    }
  }, 4779: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z: function () {
        return C
      }
    });
    var r = n(7294), o = n(5697), i = n.n(o), a = n(3092), s = n(7802), c = n(5785), u = n(4854), l = n(7896),
      p = n(4941);

    function f(e) {
      let {children: t, callback: n} = e;
      return (0, r.useEffect)((() => {
        n()
      })), t
    }

    const d = ["link", "meta", "style", "title", "base", "noscript", "script", "html", "body"];

    function h(e, t) {
      if (e instanceof HTMLElement && t instanceof HTMLElement) {
        const n = t.getAttribute("nonce");
        if (n && !e.getAttribute("nonce")) {
          const r = t.cloneNode(!0);
          return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
        }
      }
      return e.isEqualNode(t)
    }

    function m(e, t) {
      void 0 === t && (t = {html: {}, body: {}});
      const n = new Map, r = [];
      for (const u of e.childNodes) {
        var o, i;
        const e = u.nodeName.toLowerCase(),
          l = null === (o = u.attributes) || void 0 === o || null === (i = o.id) || void 0 === i ? void 0 : i.value;
        if (y(u)) {
          if (v(e)) if ("html" === e || "body" === e) for (const n of u.attributes) {
            const r = "style" === n.name;
            var a;
            if (t[e] = {...t[e]}, r || (t[e][n.name] = n.value), r) t[e].style = `${null !== (a = t[e]) && void 0 !== a && a.style ? t[e].style : ""}${n.value} `
          } else {
            let e = u.cloneNode(!0);
            if (e.setAttribute("data-gatsby-head", !0), "script" === e.nodeName.toLowerCase() && (e = g(e)), l) if (n.has(l)) {
              var s;
              const t = n.get(l);
              null === (s = r[t].parentNode) || void 0 === s || s.removeChild(r[t]), r[t] = e
            } else r.push(e), n.set(l, r.length - 1); else r.push(e)
          }
          u.childNodes.length && r.push.apply(r, (0, c.Z)(m(u, t).validHeadNodes))
        }
      }
      return {validHeadNodes: r, htmlAndBodyAttributes: t}
    }

    function g(e) {
      const t = document.createElement("script");
      for (const n of e.attributes) t.setAttribute(n.name, n.value);
      return t.innerHTML = e.innerHTML, t
    }

    function v(e) {
      return d.includes(e)
    }

    function y(e) {
      return 1 === e.nodeType
    }

    var b = n(917);
    const w = document.createElement("div"), _ = {html: [], body: []}, E = () => {
      var e;
      const {validHeadNodes: t, htmlAndBodyAttributes: n} = m(w);
      _.html = Object.keys(n.html), _.body = Object.keys(n.body), function (e) {
        if (!e) return;
        const {html: t, body: n} = e, r = document.querySelector("html");
        r && Object.entries(t).forEach((e => {
          let [t, n] = e;
          r.setAttribute(t, n)
        }));
        const o = document.querySelector("body");
        o && Object.entries(n).forEach((e => {
          let [t, n] = e;
          o.setAttribute(t, n)
        }))
      }(n);
      const r = document.querySelectorAll("[data-gatsby-head]");
      var o;
      if (0 === r.length) return void (o = document.head).append.apply(o, (0, c.Z)(t));
      const i = [];
      !function (e) {
        let {oldNodes: t, newNodes: n, onStale: r, onNew: o} = e;
        for (const i of t) {
          const e = n.findIndex((e => h(e, i)));
          -1 === e ? r(i) : n.splice(e, 1)
        }
        for (const i of n) o(i)
      }({
        oldNodes: r,
        newNodes: t,
        onStale: e => e.parentNode.removeChild(e),
        onNew: e => i.push(e)
      }), (e = document.head).append.apply(e, i)
    };

    function S(e) {
      let {pageComponent: t, staticQueryResults: n, pageComponentProps: o} = e;
      (0, r.useEffect)((() => {
        if (null != t && t.Head) {
          !function (e) {
            if ("function" != typeof e) throw new Error(`Expected "Head" export to be a function got "${typeof e}".`)
          }(t.Head);
          const {render: r} = (0, p.U)(), i = (0, b.tZ)(t.Head, {
            location: {pathname: (e = o).location.pathname},
            params: e.params,
            data: e.data || {},
            serverData: e.serverData,
            pageContext: e.pageContext
          }), s = (0, a.h)("wrapRootElement", {element: i}, i, (e => {
            let {result: t} = e;
            return {element: t}
          })).pop();
          r((0, b.tZ)(f, {callback: E}, (0, b.tZ)(u.StaticQueryContext.Provider, {value: n}, (0, b.tZ)(l.LocationProvider, null, s))), w)
        }
        var e;
        return () => {
          !function () {
            const e = document.querySelectorAll("[data-gatsby-head]");
            for (const t of e) t.parentNode.removeChild(t)
          }(), function (e) {
            if (!e) return;
            const {html: t, body: n} = e;
            if (t) {
              const e = document.querySelector("html");
              t.forEach((t => {
                e && e.removeAttribute(t)
              }))
            }
            if (n) {
              const e = document.querySelector("body");
              n.forEach((t => {
                e && e.removeAttribute(t)
              }))
            }
          }(_)
        }
      }))
    }

    function P(e) {
      const t = {...e, params: {...(0, s.GA)(e.location.pathname), ...e.pageResources.json.pageContext.__params}};
      let n;
      var o;
      n = e.pageResources.partialHydration ? e.pageResources.partialHydration : (0, r.createElement)((o = e.pageResources.component) && o.default || o, {
        ...t,
        key: e.path || e.pageResources.page.path
      });
      S({
        pageComponent: e.pageResources.head,
        staticQueryResults: e.pageResources.staticQueryResults,
        pageComponentProps: t
      });
      return (0, a.h)("wrapPageElement", {element: n, props: t}, n, (e => {
        let {result: n} = e;
        return {element: n, props: t}
      })).pop()
    }

    P.propTypes = {
      location: i().object.isRequired,
      pageResources: i().object.isRequired,
      data: i().object,
      pageContext: i().object.isRequired
    };
    var C = P
  }, 5824: function (e, t, n) {
    "use strict";
    var r = n(7462), o = n(4578), i = n(3092), a = n(7294), s = n(7896), c = n(9679), u = n(1757), l = n(8995),
      p = n(1975), f = n(6073), d = n(8299);
    const h = {
      id: "gatsby-announcer",
      style: {
        position: "absolute",
        top: 0,
        width: 1,
        height: 1,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0
      },
      "aria-live": "assertive",
      "aria-atomic": "true"
    };
    var m = n(1562), g = n(917);

    function v(e) {
      const t = (0, f.J)(e), {hash: n, search: r} = window.location;
      return null != t && (window.___replace(t.toPath + r + n), !0)
    }

    let y = "";
    window.addEventListener("unhandledrejection", (e => {
      /loading chunk \d* failed./i.test(e.reason) && y && (window.location.pathname = y)
    }));
    const b = (e, t) => {
      v(e.pathname) || (y = e.pathname, (0, i.h)("onPreRouteUpdate", {location: e, prevLocation: t}))
    }, w = (e, t) => {
      v(e.pathname) || (0, i.h)("onRouteUpdate", {location: e, prevLocation: t})
    }, _ = function (e, t) {
      if (void 0 === t && (t = {}), "number" == typeof e) return void s.globalHistory.navigate(e);
      const {pathname: n, search: r, hash: o} = (0, m.cP)(e), a = (0, f.J)(n);
      if (a && (e = a.toPath + r + o), window.___swUpdated) return void (window.location = n + r + o);
      const c = setTimeout((() => {
        d.Z.emit("onDelayedLoadPageResources", {pathname: n}), (0, i.h)("onRouteUpdateDelayed", {location: window.location})
      }), 1e3);
      p.ZP.loadPage(n + r).then((i => {
        if (!i || i.status === p.uQ.Error) return window.history.replaceState({}, "", location.href), window.location = n, void clearTimeout(c);
        i && i.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker" in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({gatsbyApi: "clearPathResources"}), window.location = n + r + o), (0, s.navigate)(e, t), clearTimeout(c)
      }))
    };

    function E(e, t) {
      let {location: n} = t;
      const {pathname: r, hash: o} = n, a = (0, i.h)("shouldUpdateScroll", {
        prevRouterProps: e,
        pathname: r,
        routerProps: {location: n},
        getSavedScrollPosition: e => [0, this._stateStorage.read(e, e.key)]
      });
      if (a.length > 0) return a[a.length - 1];
      if (e) {
        const {location: {pathname: t}} = e;
        if (t === r) return o ? decodeURI(o.slice(1)) : [0, 0]
      }
      return !0
    }

    let S = function (e) {
      function t(t) {
        var n;
        return (n = e.call(this, t) || this).announcementRef = a.createRef(), n
      }

      (0, o.Z)(t, e);
      var n = t.prototype;
      return n.componentDidUpdate = function (e, t) {
        requestAnimationFrame((() => {
          let e = `new page at ${this.props.location.pathname}`;
          document.title && (e = document.title);
          const t = document.querySelectorAll("#gatsby-focus-wrapper h1");
          t && t.length && (e = t[0].textContent);
          const n = `Navigated to ${e}`;
          if (this.announcementRef.current) {
            this.announcementRef.current.innerText !== n && (this.announcementRef.current.innerText = n)
          }
        }))
      }, n.render = function () {
        return (0, g.tZ)("div", (0, r.Z)({}, h, {ref: this.announcementRef}))
      }, t
    }(a.Component);
    const P = (e, t) => {
      var n, r;
      return e.href !== t.href || (null == e || null === (n = e.state) || void 0 === n ? void 0 : n.key) !== (null == t || null === (r = t.state) || void 0 === r ? void 0 : r.key)
    };
    let C = function (e) {
      function t(t) {
        var n;
        return n = e.call(this, t) || this, b(t.location, null), n
      }

      (0, o.Z)(t, e);
      var n = t.prototype;
      return n.componentDidMount = function () {
        w(this.props.location, null)
      }, n.shouldComponentUpdate = function (e) {
        return !!P(this.props.location, e.location) && (b(e.location, this.props.location), !0)
      }, n.componentDidUpdate = function (e) {
        P(e.location, this.props.location) && w(this.props.location, e.location)
      }, n.render = function () {
        return (0, g.tZ)(a.Fragment, null, this.props.children, (0, g.tZ)(S, {location: location}))
      }, t
    }(a.Component);
    var R = n(4779), x = n(5418);

    function O(e, t) {
      for (var n in e) if (!(n in t)) return !0;
      for (var r in t) if (e[r] !== t[r]) return !0;
      return !1
    }

    var k = function (e) {
      function t(t) {
        var n;
        n = e.call(this) || this;
        const {location: r, pageResources: o} = t;
        return n.state = {
          location: {...r},
          pageResources: o || p.ZP.loadPageSync(r.pathname + r.search, {withErrorDetails: !0})
        }, n
      }

      (0, o.Z)(t, e), t.getDerivedStateFromProps = function (e, t) {
        let {location: n} = e;
        if (t.location.href !== n.href) {
          return {pageResources: p.ZP.loadPageSync(n.pathname + n.search, {withErrorDetails: !0}), location: {...n}}
        }
        return {location: {...n}}
      };
      var n = t.prototype;
      return n.loadResources = function (e) {
        p.ZP.loadPage(e).then((t => {
          t && t.status !== p.uQ.Error ? this.setState({
            location: {...window.location},
            pageResources: t
          }) : (window.history.replaceState({}, "", location.href), window.location = e)
        }))
      }, n.shouldComponentUpdate = function (e, t) {
        return t.pageResources ? this.state.pageResources !== t.pageResources || (this.state.pageResources.component !== t.pageResources.component || (this.state.pageResources.json !== t.pageResources.json || (!(this.state.location.key === t.location.key || !t.pageResources.page || !t.pageResources.page.matchPath && !t.pageResources.page.path) || function (e, t, n) {
          return O(e.props, t) || O(e.state, n)
        }(this, e, t)))) : (this.loadResources(e.location.pathname + e.location.search), !1)
      }, n.render = function () {
        return this.props.children(this.state)
      }, t
    }(a.Component), j = n(1505), T = n(4941);
    const N = new p.kL(x, [], window.pageData);
    (0, p.N1)(N), N.setApiRunner(i.h);
    const {render: $, hydrate: M} = (0, T.U)();
    window.asyncRequires = x, window.___emitter = d.Z, window.___loader = p.jN, s.globalHistory.listen((e => {
      e.location.action = e.action
    })), window.___push = e => _(e, {replace: !1}), window.___replace = e => _(e, {replace: !0}), window.___navigate = (e, t) => _(e, t);
    const D = "gatsby-reload-compilation-hash-match";
    (0, i.I)("onClientEntry").then((() => {
      (0, i.h)("registerServiceWorker").filter(Boolean).length > 0 && n(9939);
      const e = e => (0, g.tZ)(s.BaseContext.Provider, {value: {baseuri: "/", basepath: "/"}}, (0, g.tZ)(R.Z, e)),
        t = a.createContext({}), f = {renderEnvironment: "browser"};
      let d = function (e) {
        function n() {
          return e.apply(this, arguments) || this
        }

        return (0, o.Z)(n, e), n.prototype.render = function () {
          const {children: e} = this.props;
          return (0, g.tZ)(s.Location, null, (n => {
            let {location: r} = n;
            return (0, g.tZ)(k, {location: r}, (n => {
              let {pageResources: r, location: o} = n;
              const i = (0, p.hs)(), a = (0, p.Nt)();
              return (0, g.tZ)(u.B9.Provider, {value: i}, (0, g.tZ)(l.Bs.Provider, {value: f}, (0, g.tZ)(l.m3.Provider, {value: a}, (0, g.tZ)(l.u0.Provider, {value: r.page.slicesMap}, (0, g.tZ)(t.Provider, {
                value: {
                  pageResources: r,
                  location: o
                }
              }, e)))))
            }))
          }))
        }, n
      }(a.Component), h = function (n) {
        function i() {
          return n.apply(this, arguments) || this
        }

        return (0, o.Z)(i, n), i.prototype.render = function () {
          return (0, g.tZ)(t.Consumer, null, (t => {
            let {pageResources: n, location: o} = t;
            return (0, g.tZ)(C, {location: o}, (0, g.tZ)(c.$C, {
              location: o,
              shouldUpdateScroll: E
            }, (0, g.tZ)(s.Router, {
              basepath: "",
              location: o,
              id: "gatsby-focus-wrapper"
            }, (0, g.tZ)(e, (0, r.Z)({path: "/404.html" === n.page.path || "/500.html" === n.page.path ? (0, j.Z)(o.pathname, "") : encodeURI((n.page.matchPath || n.page.path).split("?")[0])}, this.props, {
              location: o,
              pageResources: n
            }, n.json)))))
          }))
        }, i
      }(a.Component);
      const {pagePath: m, location: v} = window;
      m && "" + m !== v.pathname + (m.includes("?") ? v.search : "") && !(N.findMatchPath((0, j.Z)(v.pathname, "")) || m.match(/^\/(404|500)(\/?|.html)$/) || m.match(/^\/offline-plugin-app-shell-fallback\/?$/)) && (0, s.navigate)("" + m + (m.includes("?") ? "" : v.search) + v.hash, {replace: !0});
      const y = () => {
        try {
          return sessionStorage
        } catch {
          return null
        }
      };
      p.jN.loadPage(v.pathname + v.search).then((e => {
        var t;
        const n = y();
        if (null != e && null !== (t = e.page) && void 0 !== t && t.webpackCompilationHash && e.page.webpackCompilationHash !== window.___webpackCompilationHash && ("serviceWorker" in navigator && null !== navigator.serviceWorker.controller && "activated" === navigator.serviceWorker.controller.state && navigator.serviceWorker.controller.postMessage({gatsbyApi: "clearPathResources"}), n)) {
          if (!("1" === n.getItem(D))) return n.setItem(D, "1"), void window.location.reload(!0)
        }
        if (n && n.removeItem(D), !e || e.status === p.uQ.Error) {
          const t = `page resources for ${v.pathname} not found. Not rendering React`;
          if (e && e.error) throw console.error(t), e.error;
          throw new Error(t)
        }
        const r = (0, i.h)("wrapRootElement", {element: (0, g.tZ)(h, null)}, (0, g.tZ)(h, null), (e => {
          let {result: t} = e;
          return {element: t}
        })).pop(), o = function () {
          const e = a.useRef(!1);
          return a.useEffect((() => {
            e.current || (e.current = !0, performance.mark && performance.mark("onInitialClientRender"), (0, i.h)("onInitialClientRender"))
          }), []), (0, g.tZ)(d, null, r)
        }, s = document.getElementById("gatsby-focus-wrapper");
        let c = $;
        s && s.children.length && (c = M);
        const u = (0, i.h)("replaceHydrateFunction", void 0, c)[0];

        function l() {
          const e = "undefined" != typeof window ? document.getElementById("___gatsby") : null;
          u((0, g.tZ)(o, null), e)
        }

        const f = document;
        if ("complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll) setTimeout((function () {
          l()
        }), 0); else {
          const e = function () {
            f.removeEventListener("DOMContentLoaded", e, !1), window.removeEventListener("load", e, !1), l()
          };
          f.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1)
        }
      }))
    }))
  }, 224: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(7294), o = n(1975), i = n(4779);
    t.default = e => {
      let {location: t} = e;
      const n = o.ZP.loadPageSync(t.pathname);
      return n ? r.createElement(i.Z, {location: t, pageResources: n, ...n.json}) : null
    }
  }, 2743: function (e, t, n) {
    var r;
    e.exports = (r = n(224)) && r.default || r
  }, 4941: function (e, t, n) {
    "use strict";
    n.d(t, {
      U: function () {
        return o
      }
    });
    const r = new WeakMap;

    function o() {
      const e = n(745);
      return {
        render: (t, n) => {
          let o = r.get(n);
          o || r.set(n, o = e.createRoot(n)), o.render(t)
        }, hydrate: (t, n) => e.hydrateRoot(n, t)
      }
    }
  }, 6073: function (e, t, n) {
    "use strict";
    n.d(t, {
      J: function () {
        return i
      }
    });
    const r = new Map, o = new Map;

    function i(e) {
      let t = r.get(e);
      return t || (t = o.get(e.toLowerCase())), t
    }

    [].forEach((e => {
      e.ignoreCase ? o.set(e.fromPath, e) : r.set(e.fromPath, e)
    }))
  }, 9939: function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(3092);
    "https:" !== window.location.protocol && "localhost" !== window.location.hostname ? console.error("Service workers can only be used over HTTPS, or on localhost for development") : "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").then((function (e) {
      e.addEventListener("updatefound", (() => {
        (0, r.h)("onServiceWorkerUpdateFound", {serviceWorker: e});
        const t = e.installing;
        console.log("installingWorker", t), t.addEventListener("statechange", (() => {
          switch (t.state) {
            case"installed":
              navigator.serviceWorker.controller ? (window.___swUpdated = !0, (0, r.h)("onServiceWorkerUpdateReady", {serviceWorker: e}), window.___failedResources && (console.log("resources failed, SW updated - reloading"), window.location.reload())) : (console.log("Content is now available offline!"), (0, r.h)("onServiceWorkerInstalled", {serviceWorker: e}));
              break;
            case"redundant":
              console.error("The installing service worker became redundant."), (0, r.h)("onServiceWorkerRedundant", {serviceWorker: e});
              break;
            case"activated":
              (0, r.h)("onServiceWorkerActive", {serviceWorker: e})
          }
        }))
      }))
    })).catch((function (e) {
      console.error("Error during service worker registration:", e)
    }))
  }, 8995: function (e, t, n) {
    "use strict";
    n.d(t, {
      Bs: function () {
        return i
      }, Db: function () {
        return s
      }, m3: function () {
        return o
      }, u0: function () {
        return a
      }
    });
    var r = n(7294);
    const o = r.createContext({}), i = r.createContext({}), a = r.createContext({}), s = r.createContext({})
  }, 1757: function (e, t, n) {
    "use strict";
    n.d(t, {
      i1: function () {
        return u
      }, B9: function () {
        return i
      }, K2: function () {
        return l
      }
    });
    var r = n(7294);
    var o = n(917);
    const i = (a = "StaticQuery", s = {}, r.createServerContext ? function (e, t) {
      return void 0 === t && (t = null), globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}), globalThis.__SERVER_CONTEXT[e] || (globalThis.__SERVER_CONTEXT[e] = r.createServerContext(e, t)), globalThis.__SERVER_CONTEXT[e]
    }(a, s) : r.createContext(s));
    var a, s;

    function c(e) {
      let {staticQueryData: t, data: n, query: i, render: a} = e;
      const s = n ? n.data : t[i] && t[i].data;
      return (0, o.tZ)(r.Fragment, null, s && a(s), !s && (0, o.tZ)("div", null, "Loading (StaticQuery)"))
    }

    const u = e => {
      const {data: t, query: n, render: r, children: a} = e;
      return (0, o.tZ)(i.Consumer, null, (e => (0, o.tZ)(c, {data: t, query: n, render: r || a, staticQueryData: e})))
    }, l = e => {
      var t;
      r.useContext;
      const n = r.useContext(i);
      if (isNaN(Number(e))) throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql\`${e}\`);\n`);
      if (null !== (t = n[e]) && void 0 !== t && t.data) return n[e].data;
      throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")
    }
  }, 1505: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return void 0 === t && (t = ""), t ? e === t ? "/" : e.startsWith(`${t}/`) ? e.slice(t.length) : e : e
    }

    n.d(t, {
      Z: function () {
        return r
      }
    })
  }, 7664: function (e, t, n) {
    "use strict";
    n.r(t)
  }, 9608: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      onRouteUpdate: function () {
        return r
      }
    });
    n(4854), n(292);
    const r = function (e, t) {
      let {location: n} = e
    }
  }, 292: function (e, t, n) {
    "use strict";
    var r = n(4854)
  }, 4034: function (e, t, n) {
    "use strict";
    var r = n(4836), o = n(5263);
    t.Z = function (e) {
      var t = e.children, n = e.path, r = e.options;
      return (0, i.useEffect)((function () {
        (0, a.default)(r)
      }), [n]), t
    };
    var i = o(n(7294)), a = r(n(3153))
  }, 9811: function (e, t, n) {
    "use strict";
    var r = n(4836)(n(7071));
    n(6130), n(6337);
    var o = n(7294), i = n(4034).Z;
    t.wrapPageElement = function (e, t) {
      var n = e.element, a = e.props, s = (t.plugins, (0, r.default)(t, ["plugins"]));
      return o.createElement(i, {options: s, path: a.path}, n)
    }
  }, 8679: function (e, t, n) {
    "use strict";
    var r = n(9864), o = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      }, i = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
      a = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, s = {};

    function c(e) {
      return r.isMemo(e) ? a : s[e.$$typeof] || o
    }

    s[r.ForwardRef] = {$$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0}, s[r.Memo] = a;
    var u = Object.defineProperty, l = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, h = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (h) {
          var o = d(n);
          o && o !== h && e(t, o, r)
        }
        var a = l(n);
        p && (a = a.concat(p(n)));
        for (var s = c(t), m = c(n), g = 0; g < a.length; ++g) {
          var v = a[g];
          if (!(i[v] || r && r[v] || m && m[v] || s && s[v])) {
            var y = f(n, v);
            try {
              u(t, v, y)
            } catch (b) {
            }
          }
        }
      }
      return t
    }
  }, 6337: function () {
    !function () {
      "use strict";
      if ("object" == typeof window) if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
          return this.intersectionRatio > 0
        }
      }); else {
        var e = window.document, t = [];
        r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function (e) {
          if (!this._observationTargets.some((function (t) {
            return t.element == e
          }))) {
            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
            this._registerInstance(), this._observationTargets.push({
              element: e,
              entry: null
            }), this._monitorIntersections(), this._checkForIntersections()
          }
        }, r.prototype.unobserve = function (e) {
          this._observationTargets = this._observationTargets.filter((function (t) {
            return t.element != e
          })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, r.prototype.disconnect = function () {
          this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, r.prototype.takeRecords = function () {
          var e = this._queuedEntries.slice();
          return this._queuedEntries = [], e
        }, r.prototype._initThresholds = function (e) {
          var t = e || [0];
          return Array.isArray(t) || (t = [t]), t.sort().filter((function (e, t, n) {
            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
            return e !== n[t - 1]
          }))
        }, r.prototype._parseRootMargin = function (e) {
          var t = (e || "0px").split(/\s+/).map((function (e) {
            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
            return {value: parseFloat(t[1]), unit: t[2]}
          }));
          return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
        }, r.prototype._monitorIntersections = function () {
          this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(window, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          }))))
        }, r.prototype._unmonitorIntersections = function () {
          this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, r.prototype._checkForIntersections = function () {
          var e = this._rootIsInDom(),
            t = e ? this._getRootRect() : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
          this._observationTargets.forEach((function (r) {
            var o = r.element, i = a(o), s = this._rootContainsTarget(o), c = r.entry,
              u = e && s && this._computeTargetAndRootIntersection(o, t), l = r.entry = new n({
                time: window.performance && performance.now && performance.now(),
                target: o,
                boundingClientRect: i,
                rootBounds: t,
                intersectionRect: u
              });
            c ? e && s ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
          }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, r.prototype._computeTargetAndRootIntersection = function (t, n) {
          if ("none" != window.getComputedStyle(t).display) {
            for (var r, o, i, s, u, l, p, f, d = a(t), h = c(t), m = !1; !m;) {
              var g = null, v = 1 == h.nodeType ? window.getComputedStyle(h) : {};
              if ("none" == v.display) return;
              if (h == this.root || h == e ? (m = !0, g = n) : h != e.body && h != e.documentElement && "visible" != v.overflow && (g = a(h)), g && (r = g, o = d, i = void 0, s = void 0, u = void 0, l = void 0, p = void 0, f = void 0, i = Math.max(r.top, o.top), s = Math.min(r.bottom, o.bottom), u = Math.max(r.left, o.left), l = Math.min(r.right, o.right), f = s - i, !(d = (p = l - u) >= 0 && f >= 0 && {
                top: i,
                bottom: s,
                left: u,
                right: l,
                width: p,
                height: f
              }))) break;
              h = c(h)
            }
            return d
          }
        }, r.prototype._getRootRect = function () {
          var t;
          if (this.root) t = a(this.root); else {
            var n = e.documentElement, r = e.body;
            t = {
              top: 0,
              left: 0,
              right: n.clientWidth || r.clientWidth,
              width: n.clientWidth || r.clientWidth,
              bottom: n.clientHeight || r.clientHeight,
              height: n.clientHeight || r.clientHeight
            }
          }
          return this._expandRectByRootMargin(t)
        }, r.prototype._expandRectByRootMargin = function (e) {
          var t = this._rootMarginValues.map((function (t, n) {
            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
          })), n = {top: e.top - t[0], right: e.right + t[1], bottom: e.bottom + t[2], left: e.left - t[3]};
          return n.width = n.right - n.left, n.height = n.bottom - n.top, n
        }, r.prototype._hasCrossedThreshold = function (e, t) {
          var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
            r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
          if (n !== r) for (var o = 0; o < this.thresholds.length; o++) {
            var i = this.thresholds[o];
            if (i == n || i == r || i < n != i < r) return !0
          }
        }, r.prototype._rootIsInDom = function () {
          return !this.root || s(e, this.root)
        }, r.prototype._rootContainsTarget = function (t) {
          return s(this.root || e, t)
        }, r.prototype._registerInstance = function () {
          t.indexOf(this) < 0 && t.push(this)
        }, r.prototype._unregisterInstance = function () {
          var e = t.indexOf(this);
          -1 != e && t.splice(e, 1)
        }, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
      }

      function n(e) {
        this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0
        }, this.isIntersecting = !!e.intersectionRect;
        var t = this.boundingClientRect, n = t.width * t.height, r = this.intersectionRect, o = r.width * r.height;
        this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
      }

      function r(e, t) {
        var n, r, o, i = t || {};
        if ("function" != typeof e) throw new Error("callback must be a function");
        if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function () {
          o || (o = setTimeout((function () {
            n(), o = null
          }), r))
        }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map((function (e) {
          return e.value + e.unit
        })).join(" ")
      }

      function o(e, t, n, r) {
        "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
      }

      function i(e, t, n, r) {
        "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
      }

      function a(e) {
        var t;
        try {
          t = e.getBoundingClientRect()
        } catch (n) {
        }
        return t ? (t.width && t.height || (t = {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.right - t.left,
          height: t.bottom - t.top
        }), t) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
      }

      function s(e, t) {
        for (var n = t; n;) {
          if (n == e) return !0;
          n = c(n)
        }
        return !1
      }

      function c(e) {
        var t = e.parentNode;
        return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
      }
    }()
  }, 1143: function (e) {
    "use strict";
    e.exports = function (e, t, n, r, o, i, a, s) {
      if (!e) {
        var c;
        if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
          var u = [n, r, o, i, a, s], l = 0;
          (c = new Error(t.replace(/%s/g, (function () {
            return u[l++]
          })))).name = "Invariant Violation"
        }
        throw c.framesToPop = 1, c
      }
    }
  }, 6130: function (e, t, n) {
    "use strict";
    n.r(t)
  }, 9921: function (e, t) {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103,
      o = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107,
      a = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114,
      c = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110,
      l = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111,
      f = n ? Symbol.for("react.forward_ref") : 60112, d = n ? Symbol.for("react.suspense") : 60113,
      h = n ? Symbol.for("react.suspense_list") : 60120, m = n ? Symbol.for("react.memo") : 60115,
      g = n ? Symbol.for("react.lazy") : 60116, v = n ? Symbol.for("react.block") : 60121,
      y = n ? Symbol.for("react.fundamental") : 60117, b = n ? Symbol.for("react.responder") : 60118,
      w = n ? Symbol.for("react.scope") : 60119;

    function _(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case r:
            switch (e = e.type) {
              case l:
              case p:
              case i:
              case s:
              case a:
              case d:
                return e;
              default:
                switch (e = e && e.$$typeof) {
                  case u:
                  case f:
                  case g:
                  case m:
                  case c:
                    return e;
                  default:
                    return t
                }
            }
          case o:
            return t
        }
      }
    }

    function E(e) {
      return _(e) === p
    }

    t.AsyncMode = l, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = d, t.isAsyncMode = function (e) {
      return E(e) || _(e) === l
    }, t.isConcurrentMode = E, t.isContextConsumer = function (e) {
      return _(e) === u
    }, t.isContextProvider = function (e) {
      return _(e) === c
    }, t.isElement = function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === r
    }, t.isForwardRef = function (e) {
      return _(e) === f
    }, t.isFragment = function (e) {
      return _(e) === i
    }, t.isLazy = function (e) {
      return _(e) === g
    }, t.isMemo = function (e) {
      return _(e) === m
    }, t.isPortal = function (e) {
      return _(e) === o
    }, t.isProfiler = function (e) {
      return _(e) === s
    }, t.isStrictMode = function (e) {
      return _(e) === a
    }, t.isSuspense = function (e) {
      return _(e) === d
    }, t.isValidElementType = function (e) {
      return "string" == typeof e || "function" == typeof e || e === i || e === p || e === s || e === a || e === d || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === v)
    }, t.typeOf = _
  }, 9864: function (e, t, n) {
    "use strict";
    e.exports = n(9921)
  }, 9730: function (e, t, n) {
    "use strict";
    var r = n(7294), o = {stream: !0}, i = new Map, a = Symbol.for("react.element"), s = Symbol.for("react.lazy"),
      c = Symbol.for("react.default_value"), u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;

    function l(e, t, n) {
      this._status = e, this._value = t, this._response = n
    }

    function p(e) {
      switch (e._status) {
        case 3:
          return e._value;
        case 1:
          var t = JSON.parse(e._value, e._response._fromJSON);
          return e._status = 3, e._value = t;
        case 2:
          for (var r = (t = e._value).chunks, o = 0; o < r.length; o++) {
            var a = i.get(r[o]);
            if (null !== a) throw a
          }
          return r = n(t.id), t = "*" === t.name ? r : "" === t.name ? r.__esModule ? r.default : r : r[t.name], e._status = 3, e._value = t;
        case 0:
          throw e;
        default:
          throw e._value
      }
    }

    function f() {
      return p(v(this, 0))
    }

    function d(e, t) {
      return new l(3, t, e)
    }

    function h(e) {
      if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])()
    }

    function m(e, t) {
      if (0 === e._status) {
        var n = e._value;
        e._status = 4, e._value = t, h(n)
      }
    }

    function g(e, t) {
      e._chunks.forEach((function (e) {
        m(e, t)
      }))
    }

    function v(e, t) {
      var n = e._chunks, r = n.get(t);
      return r || (r = new l(0, null, e), n.set(t, r)), r
    }

    function y(e) {
      g(e, Error("Connection closed."))
    }

    function b(e, t) {
      if ("" !== t) {
        var o = t[0], a = t.indexOf(":", 1), s = parseInt(t.substring(1, a), 16);
        switch (a = t.substring(a + 1), o) {
          case"J":
            (o = (t = e._chunks).get(s)) ? 0 === o._status && (e = o._value, o._status = 1, o._value = a, h(e)) : t.set(s, new l(1, a, e));
            break;
          case"M":
            o = (t = e._chunks).get(s), a = JSON.parse(a, e._fromJSON);
            var p = e._bundlerConfig;
            p = (a = p ? p[a.id][a.name] : a).chunks;
            for (var f = 0; f < p.length; f++) {
              var g = p[f];
              if (void 0 === i.get(g)) {
                var v = n.e(g), y = i.set.bind(i, g, null), b = i.set.bind(i, g);
                v.then(y, b), i.set(g, v)
              }
            }
            o ? 0 === o._status && (e = o._value, o._status = 2, o._value = a, h(e)) : t.set(s, new l(2, a, e));
            break;
          case"P":
            e._chunks.set(s, d(e, function (e) {
              return u[e] || (u[e] = r.createServerContext(e, c)), u[e]
            }(a).Provider));
            break;
          case"S":
            o = JSON.parse(a), e._chunks.set(s, d(e, Symbol.for(o)));
            break;
          case"E":
            t = JSON.parse(a), (o = Error(t.message)).stack = t.stack, (a = (t = e._chunks).get(s)) ? m(a, o) : t.set(s, new l(4, o, e));
            break;
          default:
            throw Error("Error parsing the data. It's probably an error code or network corruption.")
        }
      }
    }

    function w(e) {
      return function (t, n) {
        return "string" == typeof n ? function (e, t, n) {
          switch (n[0]) {
            case"$":
              return "$" === n ? a : "$" === n[1] || "@" === n[1] ? n.substring(1) : p(e = v(e, parseInt(n.substring(1), 16)));
            case"@":
              return e = v(e, parseInt(n.substring(1), 16)), {$$typeof: s, _payload: e, _init: p}
          }
          return n
        }(e, 0, n) : "object" == typeof n && null !== n ? n[0] === a ? {
          $$typeof: a,
          type: n[1],
          key: n[2],
          ref: null,
          props: n[3],
          _owner: null
        } : n : n
      }
    }

    function _(e) {
      var t = new TextDecoder;
      return (e = {
        _bundlerConfig: e,
        _chunks: new Map,
        readRoot: f,
        _partialRow: "",
        _stringDecoder: t
      })._fromJSON = w(e), e
    }

    function E(e, t) {
      function n(t) {
        g(e, t)
      }

      var r = t.getReader();
      r.read().then((function t(i) {
        var a = i.value;
        if (!i.done) {
          i = a, a = e._stringDecoder;
          for (var s = i.indexOf(10); -1 < s;) {
            var c = e._partialRow, u = i.subarray(0, s);
            u = a.decode(u), b(e, c + u), e._partialRow = "", s = (i = i.subarray(s + 1)).indexOf(10)
          }
          return e._partialRow += a.decode(i, o), r.read().then(t, n)
        }
        y(e)
      }), n)
    }

    l.prototype.then = function (e) {
      0 === this._status ? (null === this._value && (this._value = []), this._value.push(e)) : e()
    }, t.createFromReadableStream = function (e, t) {
      return E(t = _(t && t.moduleMap ? t.moduleMap : null), e), t
    }
  }, 904: function (e, t, n) {
    "use strict";
    e.exports = n(9730)
  }, 3153: function (e) {
    e.exports = function (e) {
      var t = {};

      function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
      }

      return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
      }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
      }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
          return e[t]
        }.bind(null, o));
        return r
      }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default
        } : function () {
          return e
        };
        return n.d(t, "a", t), t
      }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }, n.p = "dist/", n(n.s = 0)
    }([function (e, t, n) {
      "use strict";

      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(n, !0).forEach((function (t) {
            i(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      n.r(t), n(1);
      var a = "Sal was not initialised! Probably it is used in SSR.",
        s = "Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",
        c = {
          rootMargin: "0% 50%",
          threshold: .5,
          animateClassName: "sal-animate",
          disabledClassName: "sal-disabled",
          enterEventName: "sal:in",
          exitEventName: "sal:out",
          selector: "[data-sal]",
          once: !0,
          disabled: !1
        }, u = [], l = null, p = function (e, t) {
          var n = new CustomEvent(e, {bubbles: !0, detail: t});
          t.target.dispatchEvent(n)
        }, f = function () {
          document.body.classList.add(c.disabledClassName)
        }, d = function () {
          return c.disabled || "function" == typeof c.disabled && c.disabled()
        }, h = function (e, t) {
          e.forEach((function (e) {
            e.intersectionRatio >= c.threshold ? (function (e) {
              e.target.classList.add(c.animateClassName), p(c.enterEventName, e)
            }(e), c.once && t.unobserve(e.target)) : c.once || function (e) {
              e.target.classList.remove(c.animateClassName), p(c.exitEventName, e)
            }(e)
          }))
        }, m = function () {
          f(), l.disconnect(), l = null
        }, g = function () {
          document.body.classList.remove(c.disabledClassName), l = new IntersectionObserver(h, {
            rootMargin: c.rootMargin,
            threshold: c.threshold
          }), (u = [].filter.call(document.querySelectorAll(c.selector), (function (e) {
            return !function (e) {
              return e.classList.contains(c.animateClassName)
            }(e, c.animateClassName)
          }))).forEach((function (e) {
            return l.observe(e)
          }))
        };
      t.default = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        if (e !== c && (c = o({}, c, {}, e)), "undefined" == typeof window) return console.warn(a), {
          elements: u,
          disable: m,
          enable: g
        };
        if (!window.IntersectionObserver) throw f(), Error(s);
        return d() ? f() : g(), {elements: u, disable: m, enable: g}
      }
    }, function (e, t, n) {
    }]).default
  }, 6115: function (e) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 434: function (e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments)
    }

    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 7867: function (e, t, n) {
    var r = n(6015);
    e.exports = function (e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, r(e, t)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 4836: function (e) {
    e.exports = function (e) {
      return e && e.__esModule ? e : {default: e}
    }, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 5263: function (e, t, n) {
    var r = n(8698).default;

    function o(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap, n = new WeakMap;
      return (o = function (e) {
        return e ? n : t
      })(e)
    }

    e.exports = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" != r(e) && "function" != typeof e) return {default: e};
      var n = o(t);
      if (n && n.has(e)) return n.get(e);
      var i = {__proto__: null}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in e) if ("default" !== s && {}.hasOwnProperty.call(e, s)) {
        var c = a ? Object.getOwnPropertyDescriptor(e, s) : null;
        c && (c.get || c.set) ? Object.defineProperty(i, s, c) : i[s] = e[s]
      }
      return i.default = e, n && n.set(e, i), i
    }, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 7071: function (e) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r)) continue;
        n[r] = e[r]
      }
      return n
    }, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 6015: function (e) {
    function t(n, r) {
      return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, r)
    }

    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 8698: function (e) {
    function t(n) {
      return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
    }

    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
  }, 2911: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    t.SCRIPT_TYPE = "text/partytown", t.partytownSnippet = e => ((e, t) => {
      const {forward: n = [], ...r} = e || {},
        o = JSON.stringify(r, ((e, t) => ("function" == typeof t && (t = String(t)).startsWith(e + "(") && (t = "function " + t), t)));
      return ["!(function(w,p,f,c){", Object.keys(r).length > 0 ? `c=w[p]=Object.assign(w[p]||{},${o});` : "c=w[p]=w[p]||{};", "c[f]=(c[f]||[])", n.length > 0 ? `.concat(${JSON.stringify(n)})` : "", "})(window,'partytown','forward');", t].join("")
    })(e, '/* Partytown 0.7.5 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,"/"==(a=(o.lib||"/~partytown/")+(o.debug?"debug/":""))[0]&&(s=e.querySelectorAll(\'script[type="text/partytown"]\'),i!=t?i.dispatchEvent(new CustomEvent("pt1",{detail:t})):(d=setTimeout(f,1e4),e.addEventListener("pt0",w),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||"partytown-sw.js"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener("statechange",(function(t){"activated"==t.target.state&&h()}))}),console.error):f())))}function h(t){c=e.createElement(t?"script":"iframe"),t||(c.setAttribute("style","display:block;width:0;height:0;border:0;visibility:hidden"),c.setAttribute("aria-hidden",!0)),c.src=a+"partytown-"+(t?"atomics.js?v=0.7.5":"sandbox-sw.html?"+Date.now()),e.body.appendChild(c)}function f(n,r){for(w(),i==t&&(o.forward||[]).map((function(e){delete t[e.split(".")[0]]})),n=0;n<s.length;n++)(r=e.createElement("script")).innerHTML=s[n].innerHTML,e.head.appendChild(r);c&&c.parentNode.removeChild(c)}function w(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(".").map((function(e,n,i){p=p[i[n]]=n+1<i.length?"push"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),"complete"==e.readyState?u():(t.addEventListener("DOMContentLoaded",u),t.addEventListener("load",u))}(window,document,navigator,top,window.crossOriginIsolated);')
  }, 7326: function (e, t, n) {
    "use strict";

    function r(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
    }

    n.d(t, {
      Z: function () {
        return r
      }
    })
  }, 7462: function (e, t, n) {
    "use strict";

    function r() {
      return r = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, r.apply(null, arguments)
    }

    n.d(t, {
      Z: function () {
        return r
      }
    })
  }, 4578: function (e, t, n) {
    "use strict";
    n.d(t, {
      Z: function () {
        return o
      }
    });
    var r = n(9611);

    function o(e, t) {
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, (0, r.Z)(e, t)
    }
  }, 9611: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e
      }, r(e, t)
    }

    n.d(t, {
      Z: function () {
        return r
      }
    })
  }, 5785: function (e, t, n) {
    "use strict";

    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r
    }

    function o(e) {
      return function (e) {
        if (Array.isArray(e)) return r(e)
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
      }(e) || function (e, t) {
        if (e) {
          if ("string" == typeof e) return r(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    n.d(t, {
      Z: function () {
        return o
      }
    })
  }, 7896: function (e, t, n) {
    "use strict";
    var r;
    n.r(t), n.d(t, {
      BaseContext: function () {
        return g
      }, Link: function () {
        return J
      }, Location: function () {
        return X
      }, LocationContext: function () {
        return v
      }, LocationProvider: function () {
        return K
      }, Match: function () {
        return ee
      }, Redirect: function () {
        return P
      }, Router: function () {
        return se
      }, ServerLocation: function () {
        return Y
      }, createHistory: function () {
        return l
      }, createMemorySource: function () {
        return p
      }, globalHistory: function () {
        return d
      }, insertParams: function () {
        return k
      }, isRedirect: function () {
        return _
      }, match: function () {
        return x
      }, navigate: function () {
        return h
      }, pick: function () {
        return R
      }, redirectTo: function () {
        return E
      }, resolve: function () {
        return O
      }, shallowCompare: function () {
        return Z
      }, startsWith: function () {
        return C
      }, useBaseContext: function () {
        return y
      }, useLocation: function () {
        return ue
      }, useLocationContext: function () {
        return b
      }, useMatch: function () {
        return fe
      }, useNavigate: function () {
        return le
      }, useParams: function () {
        return pe
      }, validateRedirect: function () {
        return j
      }
    });
    var o = n(7294), i = n(5697), a = n(1143);

    function s() {
      return s = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, s.apply(this, arguments)
    }

    function c(e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
      return o
    }

    const u = e => {
        const {search: t, hash: n, href: r, origin: o, protocol: i, host: a, hostname: s, port: c} = e.location;
        let {pathname: u} = e.location;
        return !u && r && f && (u = new URL(r).pathname), {
          pathname: encodeURI(decodeURI(u)),
          search: t,
          hash: n,
          href: r,
          origin: o,
          protocol: i,
          host: a,
          hostname: s,
          port: c,
          state: e.history.state,
          key: e.history.state && e.history.state.key || "initial"
        }
      }, l = (e, t) => {
        let n = [], r = u(e), o = !1, i = () => {
        };
        return {
          get location() {
            return r
          }, get transitioning() {
            return o
          }, _onTransitionComplete() {
            o = !1, i()
          }, listen(t) {
            n.push(t);
            const o = () => {
              r = u(e), t({location: r, action: "POP"})
            };
            return e.addEventListener("popstate", o), () => {
              e.removeEventListener("popstate", o), n = n.filter((e => e !== t))
            }
          }, navigate(t, {state: a, replace: c = !1} = {}) {
            if ("number" == typeof t) e.history.go(t); else {
              a = s({}, a, {key: Date.now() + ""});
              try {
                o || c ? e.history.replaceState(a, null, t) : e.history.pushState(a, null, t)
              } catch (n) {
                e.location[c ? "replace" : "assign"](t)
              }
            }
            r = u(e), o = !0;
            const l = new Promise((e => i = e));
            return n.forEach((e => e({location: r, action: "PUSH"}))), l
          }
        }
      }, p = (e = "/") => {
        const t = e.indexOf("?"), n = {pathname: t > -1 ? e.substr(0, t) : e, search: t > -1 ? e.substr(t) : ""};
        let r = 0;
        const o = [n], i = [null];
        return {
          get location() {
            return o[r]
          }, addEventListener(e, t) {
          }, removeEventListener(e, t) {
          }, history: {
            get entries() {
              return o
            }, get index() {
              return r
            }, get state() {
              return i[r]
            }, pushState(e, t, n) {
              const [a, s = ""] = n.split("?");
              r++, o.push({pathname: a, search: s.length ? `?${s}` : s}), i.push(e)
            }, replaceState(e, t, n) {
              const [a, s = ""] = n.split("?");
              o[r] = {pathname: a, search: s}, i[r] = e
            }, go(e) {
              const t = r + e;
              t < 0 || t > i.length - 1 || (r = t)
            }
          }
        }
      }, f = !("undefined" == typeof window || !window.document || !window.document.createElement),
      d = l(f ? window : p()), {navigate: h} = d;

    function m(e, t) {
      return o.createServerContext ? ((e, t = null) => (globalThis.__SERVER_CONTEXT || (globalThis.__SERVER_CONTEXT = {}), globalThis.__SERVER_CONTEXT[e] || (globalThis.__SERVER_CONTEXT[e] = o.createServerContext(e, t)), globalThis.__SERVER_CONTEXT[e]))(e, t) : o.createContext(t)
    }

    const g = m("Base", {baseuri: "/", basepath: "/"}), v = m("Location"), y = () => o.useContext(g),
      b = () => o.useContext(v);

    function w(e) {
      this.uri = e
    }

    const _ = e => e instanceof w, E = e => {
      throw new w(e)
    };

    function S(e) {
      const {to: t, replace: n = !0, state: r, noThrow: i, baseuri: a} = e;
      o.useEffect((() => {
        Promise.resolve().then((() => {
          const o = O(t, a);
          h(k(o, e), {replace: n, state: r})
        }))
      }), []);
      const s = O(t, a);
      return i || E(k(s, e)), null
    }

    const P = e => {
      const t = b(), {baseuri: n} = y();
      return o.createElement(S, s({}, t, {baseuri: n}, e))
    };
    P.propTypes = {from: i.string, to: i.string.isRequired};
    const C = (e, t) => e.substr(0, t.length) === t, R = (e, t) => {
        let n, r;
        const [o] = t.split("?"), i = I(o), s = "" === i[0], c = D(e);
        for (let u = 0, l = c.length; u < l; u++) {
          let e = !1;
          const o = c[u].route;
          if (o.default) {
            r = {route: o, params: {}, uri: t};
            continue
          }
          const l = I(o.path), p = {}, f = Math.max(i.length, l.length);
          let d = 0;
          for (; d < f; d++) {
            const t = l[d], n = i[d];
            if ($(t)) {
              p[t.slice(1) || "*"] = i.slice(d).map(decodeURIComponent).join("/");
              break
            }
            if (void 0 === n) {
              e = !0;
              break
            }
            const r = T.exec(t);
            if (r && !s) {
              const e = -1 === A.indexOf(r[1]);
              a(e, `<Router> dynamic segment "${r[1]}" is a reserved name. Please use a different name in path "${o.path}".`);
              const t = decodeURIComponent(n);
              p[r[1]] = t
            } else if (t !== n) {
              e = !0;
              break
            }
          }
          if (!e) {
            n = {route: o, params: p, uri: "/" + i.slice(0, d).join("/")};
            break
          }
        }
        return n || r || null
      }, x = (e, t) => R([{path: e}], t), O = (e, t) => {
        if (C(e, "/")) return e;
        const [n, r] = e.split("?"), [o] = t.split("?"), i = I(n), a = I(o);
        if ("" === i[0]) return L(o, r);
        if (!C(i[0], ".")) {
          const e = a.concat(i).join("/");
          return L(("/" === o ? "" : "/") + e, r)
        }
        const s = a.concat(i), c = [];
        for (let u = 0, l = s.length; u < l; u++) {
          const e = s[u];
          ".." === e ? c.pop() : "." !== e && c.push(e)
        }
        return L("/" + c.join("/"), r)
      }, k = (e, t) => {
        const [n, r = ""] = e.split("?");
        let o = "/" + I(n).map((e => {
          const n = T.exec(e);
          return n ? t[n[1]] : e
        })).join("/");
        const {location: {search: i = ""} = {}} = t, a = i.split("?")[1] || "";
        return o = L(o, r, a), o
      }, j = (e, t) => {
        const n = e => N(e);
        return I(e).filter(n).sort().join("/") === I(t).filter(n).sort().join("/")
      }, T = /^:(.+)/, N = e => T.test(e), $ = e => e && "*" === e[0], M = (e, t) => ({
        route: e,
        score: e.default ? 0 : I(e.path).reduce(((e, t) => (e += 4, (e => "" === e)(t) ? e += 1 : N(t) ? e += 2 : $(t) ? e -= 5 : e += 3, e)), 0),
        index: t
      }), D = e => e.map(M).sort(((e, t) => e.score < t.score ? 1 : e.score > t.score ? -1 : e.index - t.index)),
      I = e => e.replace(/(^\/+|\/+$)/g, "").split("/"),
      L = (e, ...t) => e + ((t = t.filter((e => e && e.length > 0))) && t.length > 0 ? `?${t.join("&")}` : ""),
      A = ["uri", "path"], Z = (e, t) => {
        const n = Object.keys(e);
        return n.length === Object.keys(t).length && n.every((n => t.hasOwnProperty(n) && e[n] === t[n]))
      }, H = e => e.replace(/(^\/+|\/+$)/g, ""), U = e => t => {
        if (!t) return null;
        if (t.type === o.Fragment && t.props.children) return o.Children.map(t.props.children, U(e));
        if (a(t.props.path || t.props.default || t.type === P, `<Router>: Children of <Router> must have a \`path\` or \`default\` prop, or be a \`<Redirect>\`. None found on element type \`${t.type}\``), a(!!(t.type !== P || t.props.from && t.props.to), `<Redirect from="${t.props.from}" to="${t.props.to}"/> requires both "from" and "to" props when inside a <Router>.`), a(!(t.type === P && !j(t.props.from, t.props.to)), `<Redirect from="${t.props.from} to="${t.props.to}"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.`), t.props.default) return {
          value: t,
          default: !0
        };
        const n = t.type === P ? t.props.from : t.props.path, r = "/" === n ? e : `${H(e)}/${H(n)}`;
        return {value: t, default: t.props.default, path: t.props.children ? `${H(r)}/*` : r}
      }, F = ["innerRef"], W = ["to", "state", "replace", "getProps"], q = ["key"];
    let {forwardRef: B} = r || (r = n.t(o, 2));
    void 0 === B && (B = e => e);
    const Q = () => {
    }, J = B(((e, t) => {
      let {innerRef: n} = e, r = c(e, F);
      const {baseuri: i} = y(), {location: a} = b(), {to: u, state: l, replace: p, getProps: f = Q} = r, d = c(r, W),
        m = O(u, i), g = encodeURI(m), v = a.pathname === g, w = C(a.pathname, g);
      return o.createElement("a", s({ref: t || n, "aria-current": v ? "page" : void 0}, d, f({
        isCurrent: v,
        isPartiallyCurrent: w,
        href: m,
        location: a
      }), {
        href: m, onClick: e => {
          if (d.onClick && d.onClick(e), (e => !e.defaultPrevented && 0 === e.button && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(e)) {
            e.preventDefault();
            let t = p;
            if ("boolean" != typeof p && v) {
              const e = c(s({}, a.state), q);
              t = Z(s({}, l), e)
            }
            h(m, {state: l, replace: t})
          }
        }
      }))
    }));
    J.displayName = "Link", J.propTypes = {to: i.string.isRequired};

    class G extends o.Component {
      constructor(...e) {
        super(...e), this.displayName = "ReactUseErrorBoundary"
      }

      componentDidCatch(...e) {
        this.setState({}), this.props.onError(...e)
      }

      render() {
        return this.props.children
      }
    }

    const z = o.createContext({componentDidCatch: {current: void 0}, error: void 0, setError: () => !1});

    function V({children: e}) {
      const [t, n] = o.useState(), r = o.useRef(),
        i = o.useMemo((() => ({componentDidCatch: r, error: t, setError: n})), [t]);
      return o.createElement(z.Provider, {value: i}, o.createElement(G, {
        error: t, onError: (e, t) => {
          n(e), null == r.current || r.current(e, t)
        }
      }, e))
    }

    V.displayName = "ReactUseErrorBoundaryContext";
    const K = function (e) {
      var t, n;

      function r(t) {
        return o.createElement(V, null, o.createElement(e, s({key: "WrappedComponent"}, t)))
      }

      return r.displayName = `WithErrorBoundary(${null != (t = null != (n = e.displayName) ? n : e.name) ? t : "Component"})`, r
    }((({history: e = d, children: t}) => {
      const {location: n} = e, [r, i] = o.useState({location: n}), [a] = function (e) {
        const t = o.useContext(z);
        t.componentDidCatch.current = void 0;
        const n = o.useCallback((() => {
          t.setError(void 0)
        }), []);
        return [t.error, n]
      }();
      if (o.useEffect((() => {
        e._onTransitionComplete()
      }), [r.location]), o.useEffect((() => {
        let t = !1;
        const n = e.listen((({location: e}) => {
          Promise.resolve().then((() => {
            requestAnimationFrame((() => {
              t || i({location: e})
            }))
          }))
        }));
        return () => {
          t = !0, n()
        }
      }), []), a) {
        if (!_(a)) throw a;
        h(a.uri, {replace: !0})
      }
      return o.createElement(v.Provider, {value: r}, "function" == typeof t ? t(r) : t || null)
    })), X = ({children: e}) => {
      const t = b();
      return t ? e(t) : o.createElement(K, null, e)
    }, Y = ({url: e, children: t}) => {
      const n = e.indexOf("?");
      let r, i = "";
      return n > -1 ? (r = e.substring(0, n), i = e.substring(n)) : r = e, o.createElement(v.Provider, {
        value: {
          location: {
            pathname: r,
            search: i,
            hash: ""
          }
        }
      }, t)
    }, ee = ({path: e, children: t}) => {
      const {baseuri: n} = y(), {location: r} = b(), o = O(e, n), i = x(o, r.pathname);
      return t({location: r, match: i ? s({}, i.params, {uri: i.uri, path: e}) : null})
    }, te = ["uri", "location", "component"], ne = ["children", "style", "component", "uri", "location"], re = e => {
      let {uri: t, location: n, component: r} = e, i = c(e, te);
      return o.createElement(ie, s({}, i, {component: r, uri: t, location: n}))
    };
    let oe = 0;
    const ie = e => {
      let {children: t, style: n, component: r = "div", uri: i, location: a} = e, u = c(e, ne);
      const l = o.useRef(), p = o.useRef(!0), f = o.useRef(i), d = o.useRef(a.pathname), h = o.useRef(!1);
      o.useEffect((() => (oe++, m(), () => {
        oe--, 0 === oe && (p.current = !0)
      })), []), o.useEffect((() => {
        let e = !1, t = !1;
        i !== f.current && (f.current = i, e = !0), a.pathname !== d.current && (d.current = a.pathname, t = !0), h.current = e || t && a.pathname === i, h.current && m()
      }), [i, a]);
      const m = o.useCallback((() => {
        var e;
        p.current ? p.current = !1 : (e = l.current, h.current && e && e.focus())
      }), []);
      return o.createElement(r, s({style: s({outline: "none"}, n), tabIndex: "-1", ref: l}, u), t)
    }, ae = ["location", "primary", "children", "basepath", "baseuri", "component"], se = e => {
      const t = y(), n = b();
      return o.createElement(ce, s({}, t, n, e))
    };

    function ce(e) {
      const {location: t, primary: n = !0, children: r, basepath: i, component: a = "div"} = e, u = c(e, ae),
        l = o.Children.toArray(r).reduce(((e, t) => {
          const n = U(i)(t);
          return e.concat(n)
        }), []), {pathname: p} = t, f = R(l, p);
      if (f) {
        const {params: e, uri: r, route: c, route: {value: l}} = f, p = c.default ? i : c.path.replace(/\*$/, ""),
          d = s({}, e, {uri: r, location: t}), h = o.cloneElement(l, d, l.props.children ? o.createElement(se, {
            location: t,
            primary: n
          }, l.props.children) : void 0), m = n ? re : a, v = n ? s({uri: r, location: t, component: a}, u) : u;
        return o.createElement(g.Provider, {value: {baseuri: r, basepath: p}}, o.createElement(m, v, h))
      }
      return null
    }

    const ue = () => {
      const e = b();
      if (!e) throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
      return e.location
    }, le = () => {
      throw new Error("useNavigate is removed. Use import { navigate } from 'gatsby' instead")
    }, pe = () => {
      const e = y();
      if (!e) throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
      const t = ue(), n = x(e.basepath, t.pathname);
      return n ? n.params : null
    }, fe = e => {
      if (!e) throw new Error("useMatch(path: string) requires an argument of a string to match against");
      const t = y();
      if (!t) throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
      const n = ue(), r = O(e, t.baseuri), o = x(r, n.pathname);
      return o ? s({}, o.params, {uri: o.uri, path: e}) : null
    }
  }, 1562: function (e, t, n) {
    "use strict";
    n.d(t, {
      c4: function () {
        return S
      }, cP: function () {
        return c
      }, dq: function () {
        return d
      }, mc: function () {
        return y
      }, rU: function () {
        return E
      }
    });
    var r = n(5697), o = n(7294), i = n(7896), a = n(4506);

    function s() {
      return s = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, s.apply(this, arguments)
    }

    function c(e) {
      let t = e || "/", n = "", r = "";
      const o = t.indexOf("#");
      -1 !== o && (r = t.slice(o), t = t.slice(0, o));
      const i = t.indexOf("?");
      return -1 !== i && (n = t.slice(i), t = t.slice(0, i)), {
        pathname: t,
        search: "?" === n ? "" : n,
        hash: "#" === r ? "" : r
      }
    }

    const u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, l = e => {
      if ("string" == typeof e) return !(e => u.test(e))(e)
    }, p = () => "", f = () => "";

    function d(e, t = p()) {
      var n;
      if (!l(e)) return e;
      if (e.startsWith("./") || e.startsWith("../")) return e;
      const r = null != (n = null != t ? t : f()) ? n : "/";
      return `${null != r && r.endsWith("/") ? r.slice(0, -1) : r}${e.startsWith("/") ? e : `/${e}`}`
    }

    const h = e => null == e ? void 0 : e.startsWith("/");

    function m(e, t) {
      const {pathname: n, search: r, hash: o} = c(e);
      return `${(0, a.H)(n, t)}${r}${o}`
    }

    const g = (e, t) => "number" == typeof e ? e : l(e) ? h(e) ? function (e) {
        const t = d(e), n = "always";
        return m(t, n)
      }(e) : function (e, t) {
        if (h(e)) return e;
        const n = "always", r = (0, i.resolve)(e, t);
        return m(r, n)
      }(e, t) : e,
      v = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

    function y(e) {
      return d(e, f())
    }

    const b = {activeClassName: r.string, activeStyle: r.object, partiallyActive: r.bool};

    function w(e) {
      return o.createElement(i.Location, null, (({location: t}) => o.createElement(_, s({}, e, {_location: t}))))
    }

    class _ extends o.Component {
      constructor(e) {
        super(e), this.defaultGetProps = ({
                                            isPartiallyCurrent: e,
                                            isCurrent: t
                                          }) => (this.props.partiallyActive ? e : t) ? {
          className: [this.props.className, this.props.activeClassName].filter(Boolean).join(" "),
          style: s({}, this.props.style, this.props.activeStyle)
        } : null;
        let t = !1;
        "undefined" != typeof window && window.IntersectionObserver && (t = !0), this.state = {IOSupported: t}, this.abortPrefetch = null, this.handleRef = this.handleRef.bind(this)
      }

      _prefetch() {
        let e = window.location.pathname + window.location.search;
        this.props._location && this.props._location.pathname && (e = this.props._location.pathname + this.props._location.search);
        const t = c(g(this.props.to, e)), n = t.pathname + t.search;
        if (e !== n) return ___loader.enqueue(n)
      }

      componentWillUnmount() {
        if (!this.io) return;
        const {instance: e, el: t} = this.io;
        this.abortPrefetch && this.abortPrefetch.abort(), e.unobserve(t), e.disconnect()
      }

      handleRef(e) {
        this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current") ? this.props.innerRef.current = e : this.props.innerRef && this.props.innerRef(e), this.state.IOSupported && e && (this.io = ((e, t) => {
          const n = new window.IntersectionObserver((n => {
            n.forEach((n => {
              e === n.target && t(n.isIntersecting || n.intersectionRatio > 0)
            }))
          }));
          return n.observe(e), {instance: n, el: e}
        })(e, (e => {
          e ? this.abortPrefetch = this._prefetch() : this.abortPrefetch && this.abortPrefetch.abort()
        })))
      }

      render() {
        const e = this.props, {
          to: t,
          getProps: n = this.defaultGetProps,
          onClick: r,
          onMouseEnter: a,
          state: u,
          replace: p,
          _location: f
        } = e, d = function (e, t) {
          if (null == e) return {};
          var n, r, o = {}, i = Object.keys(e);
          for (r = 0; r < i.length; r++) t.indexOf(n = i[r]) >= 0 || (o[n] = e[n]);
          return o
        }(e, v), h = g(t, f.pathname);
        return l(h) ? o.createElement(i.Link, s({
          to: h,
          state: u,
          getProps: n,
          innerRef: this.handleRef,
          onMouseEnter: e => {
            a && a(e);
            const t = c(h);
            ___loader.hovering(t.pathname + t.search)
          },
          onClick: e => {
            if (r && r(e), !(0 !== e.button || this.props.target || e.defaultPrevented || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
              e.preventDefault();
              let t = p;
              const n = encodeURI(h) === f.pathname;
              "boolean" != typeof p && n && (t = !0), window.___navigate(h, {state: u, replace: t})
            }
            return !0
          }
        }, d)) : o.createElement("a", s({href: h}, d))
      }
    }

    _.propTypes = s({}, b, {onClick: r.func, to: r.string.isRequired, replace: r.bool, state: r.object});
    const E = o.forwardRef(((e, t) => o.createElement(w, s({innerRef: t}, e)))), S = (e, t) => {
      window.___navigate(g(e, window.location.pathname), t)
    }
  }, 3521: function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
      Script: function () {
        return h
      }, ScriptStrategy: function () {
        return u
      }, collectedScriptsByPage: function () {
        return s
      }, scriptCache: function () {
        return f
      }, scriptCallbackCache: function () {
        return d
      }
    });
    var r = n(7294), o = n(7896);

    function i() {
      return i = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }, i.apply(this, arguments)
    }

    const a = new Map, s = {
        get: e => a.get(e) || [], set(e, t) {
          const n = a.get(e) || [];
          n.push(t), a.set(e, n)
        }, delete(e) {
          a.delete(e)
        }
      },
      c = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
        const t = Date.now();
        return setTimeout((function () {
          e({
            didTimeout: !1, timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - t))
            }
          })
        }), 1)
      };
    var u, l;
    (l = u || (u = {})).postHydrate = "post-hydrate", l.idle = "idle", l.offMainThread = "off-main-thread";
    const p = new Set(["src", "strategy", "dangerouslySetInnerHTML", "children", "onLoad", "onError"]), f = new Set,
      d = new Map;

    function h(e) {
      return r.createElement(o.Location, null, (() => r.createElement(m, e)))
    }

    function m(e) {
      const {src: t, strategy: n = u.postHydrate} = e || {}, {pathname: a} = (0, o.useLocation)();
      if ((0, r.useEffect)((() => {
        let t;
        switch (n) {
          case u.postHydrate:
            t = g(e);
            break;
          case u.idle:
            c((() => {
              t = g(e)
            }));
            break;
          case u.offMainThread: {
            const t = y(e);
            s.set(a, t)
          }
        }
        return () => {
          const {script: e, loadCallback: n, errorCallback: r} = t || {};
          n && (null == e || e.removeEventListener("load", n)), r && (null == e || e.removeEventListener("error", r)), null == e || e.remove()
        }
      }), []), n === u.offMainThread) {
        const o = v(e), c = y(e);
        return "undefined" == typeof window && s.set(a, c), r.createElement("script", o ? i({
          type: "text/partytown",
          "data-strategy": n,
          crossOrigin: "anonymous"
        }, c, {dangerouslySetInnerHTML: {__html: v(e)}}) : i({
          type: "text/partytown",
          src: b(t),
          "data-strategy": n,
          crossOrigin: "anonymous"
        }, c))
      }
      return null
    }

    function g(e) {
      const {id: t, src: n, strategy: r = u.postHydrate, onLoad: o, onError: a} = e || {}, s = t || n,
        c = ["load", "error"], l = {load: o, error: a};
      if (s) {
        for (const e of c) if (null != l && l[e]) {
          var p;
          const t = d.get(s) || {}, {callbacks: n = []} = (null == t ? void 0 : t[e]) || {};
          var h, m;
          n.push(null == l ? void 0 : l[e]), null != t && null != (p = t[e]) && p.event ? null == l || null == (h = l[e]) || h.call(l, null == t || null == (m = t[e]) ? void 0 : m.event) : d.set(s, i({}, t, {[e]: {callbacks: n}}))
        }
        if (f.has(s)) return null
      }
      const g = v(e), b = y(e), _ = document.createElement("script");
      t && (_.id = t), _.dataset.strategy = r;
      for (const [i, u] of Object.entries(b)) _.setAttribute(i, u);
      g && (_.textContent = g), n && (_.src = n);
      const E = {};
      if (s) {
        for (const e of c) {
          const t = t => w(t, s, e);
          _.addEventListener(e, t), E[`${e}Callback`] = t
        }
        f.add(s)
      }
      return document.body.appendChild(_), {script: _, loadCallback: E.loadCallback, errorCallback: E.errorCallback}
    }

    function v(e) {
      const {dangerouslySetInnerHTML: t, children: n = ""} = e || {}, {__html: r = ""} = t || {};
      return r || n
    }

    function y(e) {
      const t = {};
      for (const [n, r] of Object.entries(e)) p.has(n) || (t[n] = r);
      return t
    }

    function b(e) {
      if (e) return `/__third-party-proxy?url=${encodeURIComponent(e)}`
    }

    function w(e, t, n) {
      const r = d.get(t) || {};
      for (const i of (null == r || null == (o = r[n]) ? void 0 : o.callbacks) || []) {
        var o;
        i(e)
      }
      d.set(t, {[n]: {event: e}})
    }
  }
}, function (e) {
  e.O(0, [774, 532], (function () {
    return t = 5824, e(e.s = t);
    var t
  }));
  e.O()
}]);
//# sourceMappingURL=app-659abb108ccb47defedb.js.map