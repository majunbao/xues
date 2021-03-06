!function() {
    function e(e) {
        var t = i;
        e && (i[e] || (i[e] = {}),
        t = i[e]),
        t.define && t.define.packaged || (n.original = t.define,
        t.define = n,
        t.define.packaged = !0),
        t.require && t.require.packaged || (o.original = t.require,
        t.require = o,
        t.require.packaged = !0)
    }
    var t = ""
      , i = function() {
        return this
    }();
    if (!i && "undefined" != typeof window && (i = window),
    t || "undefined" == typeof requirejs) {
        var n = function(e, t, i) {
            return "string" != typeof e ? void (n.original ? n.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."),
            console.trace())) : (2 == arguments.length && (i = t),
            void (n.modules[e] || (n.payloads[e] = i,
            n.modules[e] = null)))
        };
        n.modules = {},
        n.payloads = {};
        var r = function(e, t, i) {
            if ("string" == typeof t) {
                var n = a(e, t);
                if (void 0 != n)
                    return i && i(),
                    n
            } else if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var r = [], s = 0, l = t.length; l > s; ++s) {
                    var c = a(e, t[s]);
                    if (void 0 == c && o.original)
                        return;
                    r.push(c)
                }
                return i && i.apply(null, r) || !0
            }
        }
          , o = function(e, t) {
            var i = r("", e, t);
            return void 0 == i && o.original ? o.original.apply(this, arguments) : i
        }
          , s = function(e, t) {
            if (-1 !== t.indexOf("!")) {
                var i = t.split("!");
                return s(e, i[0]) + "!" + s(e, i[1])
            }
            if ("." == t.charAt(0)) {
                var n = e.split("/").slice(0, -1).join("/");
                for (t = n + "/" + t; -1 !== t.indexOf(".") && r != t; ) {
                    var r = t;
                    t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                }
            }
            return t
        }
          , a = function(e, t) {
            t = s(e, t);
            var i = n.modules[t];
            if (!i) {
                if (i = n.payloads[t],
                "function" == typeof i) {
                    var o = {}
                      , a = {
                        id: t,
                        uri: "",
                        exports: o,
                        packaged: !0
                    }
                      , l = function(e, i) {
                        return r(t, e, i)
                    }
                      , c = i(l, o, a);
                    o = c || a.exports,
                    n.modules[t] = o,
                    delete n.payloads[t]
                }
                i = n.modules[t] = o || i
            }
            return i
        };
        e(t)
    }
}(),
define("ace/lib/regexp", ["require", "exports", "module"], function() {
    "use strict";
    function e(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }
    function t(e, t, i) {
        if (Array.prototype.indexOf)
            return e.indexOf(t, i);
        for (var n = i || 0; n < e.length; n++)
            if (e[n] === t)
                return n;
        return -1
    }
    var i = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    }
      , n = void 0 === i.exec.call(/()??/, "")[1]
      , r = function() {
        var e = /^/g;
        return i.test.call(e, ""),
        !e.lastIndex
    }();
    r && n || (RegExp.prototype.exec = function(o) {
        var s, a, l = i.exec.apply(this, arguments);
        if ("string" == typeof o && l) {
            if (!n && l.length > 1 && t(l, "") > -1 && (a = RegExp(this.source, i.replace.call(e(this), "g", "")),
            i.replace.call(o.slice(l.index), a, function() {
                for (var e = 1; e < arguments.length - 2; e++)
                    void 0 === arguments[e] && (l[e] = void 0)
            })),
            this._xregexp && this._xregexp.captureNames)
                for (var c = 1; c < l.length; c++)
                    s = this._xregexp.captureNames[c - 1],
                    s && (l[s] = l[c]);
            !r && this.global && !l[0].length && this.lastIndex > l.index && this.lastIndex--
        }
        return l
    }
    ,
    r || (RegExp.prototype.test = function(e) {
        var t = i.exec.call(this, e);
        return t && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--,
        !!t
    }
    ))
}),
define("ace/lib/es5-shim", ["require", "exports", "module"], function() {
    function e() {}
    function t(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}),
            "sentinel"in e
        } catch (t) {}
    }
    function i(e) {
        return e = +e,
        e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))),
        e
    }
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var i = this;
        if ("function" != typeof i)
            throw new TypeError("Function.prototype.bind called on incompatible " + i);
        var n = d.call(arguments, 1)
          , r = function() {
            if (this instanceof r) {
                var e = i.apply(this, n.concat(d.call(arguments)));
                return Object(e) === e ? e : this
            }
            return i.apply(t, n.concat(d.call(arguments)))
        };
        return i.prototype && (e.prototype = i.prototype,
        r.prototype = new e,
        e.prototype = null),
        r
    }
    );
    var n, r, o, s, a, l = Function.prototype.call, c = Array.prototype, h = Object.prototype, d = c.slice, u = l.bind(h.toString), p = l.bind(h.hasOwnProperty);
    if ((a = p(h, "__defineGetter__")) && (n = l.bind(h.__defineGetter__),
    r = l.bind(h.__defineSetter__),
    o = l.bind(h.__lookupGetter__),
    s = l.bind(h.__lookupSetter__)),
    2 != [1, 2].splice(0).length)
        if (function() {
            function e(e) {
                var t = new Array(e + 2);
                return t[0] = t[1] = 0,
                t
            }
            var t, i = [];
            return i.splice.apply(i, e(20)),
            i.splice.apply(i, e(26)),
            t = i.length,
            i.splice(5, 0, "XXX"),
            t + 1 == i.length,
            t + 1 == i.length ? !0 : void 0
        }()) {
            var g = Array.prototype.splice;
            Array.prototype.splice = function(e, t) {
                return arguments.length ? g.apply(this, [void 0 === e ? 0 : e, void 0 === t ? this.length - e : t].concat(d.call(arguments, 2))) : []
            }
        } else
            Array.prototype.splice = function(e, t) {
                var i = this.length;
                e > 0 ? e > i && (e = i) : void 0 == e ? e = 0 : 0 > e && (e = Math.max(i + e, 0)),
                i > e + t || (t = i - e);
                var n = this.slice(e, e + t)
                  , r = d.call(arguments, 2)
                  , o = r.length;
                if (e === i)
                    o && this.push.apply(this, r);
                else {
                    var s = Math.min(t, i - e)
                      , a = e + s
                      , l = a + o - s
                      , c = i - a
                      , h = i - s;
                    if (a > l)
                        for (var u = 0; c > u; ++u)
                            this[l + u] = this[a + u];
                    else if (l > a)
                        for (u = c; u--; )
                            this[l + u] = this[a + u];
                    if (o && e === h)
                        this.length = h,
                        this.push.apply(this, r);
                    else
                        for (this.length = h + o,
                        u = 0; o > u; ++u)
                            this[e + u] = r[u]
                }
                return n
            }
            ;
    Array.isArray || (Array.isArray = function(e) {
        return "[object Array]" == u(e)
    }
    );
    var m = Object("a")
      , f = "a" != m[0] || !(0 in m);
    if (Array.prototype.forEach || (Array.prototype.forEach = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = arguments[1]
          , r = -1
          , o = i.length >>> 0;
        if ("[object Function]" != u(e))
            throw new TypeError;
        for (; ++r < o; )
            r in i && e.call(n, i[r], r, t)
    }
    ),
    Array.prototype.map || (Array.prototype.map = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = i.length >>> 0
          , r = Array(n)
          , o = arguments[1];
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        for (var s = 0; n > s; s++)
            s in i && (r[s] = e.call(o, i[s], s, t));
        return r
    }
    ),
    Array.prototype.filter || (Array.prototype.filter = function(e) {
        var t, i = F(this), n = f && "[object String]" == u(this) ? this.split("") : i, r = n.length >>> 0, o = [], s = arguments[1];
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        for (var a = 0; r > a; a++)
            a in n && (t = n[a],
            e.call(s, t, a, i) && o.push(t));
        return o
    }
    ),
    Array.prototype.every || (Array.prototype.every = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = i.length >>> 0
          , r = arguments[1];
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        for (var o = 0; n > o; o++)
            if (o in i && !e.call(r, i[o], o, t))
                return !1;
        return !0
    }
    ),
    Array.prototype.some || (Array.prototype.some = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = i.length >>> 0
          , r = arguments[1];
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        for (var o = 0; n > o; o++)
            if (o in i && e.call(r, i[o], o, t))
                return !0;
        return !1
    }
    ),
    Array.prototype.reduce || (Array.prototype.reduce = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = i.length >>> 0;
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        if (!n && 1 == arguments.length)
            throw new TypeError("reduce of empty array with no initial value");
        var r, o = 0;
        if (arguments.length >= 2)
            r = arguments[1];
        else
            for (; ; ) {
                if (o in i) {
                    r = i[o++];
                    break
                }
                if (++o >= n)
                    throw new TypeError("reduce of empty array with no initial value")
            }
        for (; n > o; o++)
            o in i && (r = e.call(void 0, r, i[o], o, t));
        return r
    }
    ),
    Array.prototype.reduceRight || (Array.prototype.reduceRight = function(e) {
        var t = F(this)
          , i = f && "[object String]" == u(this) ? this.split("") : t
          , n = i.length >>> 0;
        if ("[object Function]" != u(e))
            throw new TypeError(e + " is not a function");
        if (!n && 1 == arguments.length)
            throw new TypeError("reduceRight of empty array with no initial value");
        var r, o = n - 1;
        if (arguments.length >= 2)
            r = arguments[1];
        else
            for (; ; ) {
                if (o in i) {
                    r = i[o--];
                    break
                }
                if (--o < 0)
                    throw new TypeError("reduceRight of empty array with no initial value")
            }
        do
            o in this && (r = e.call(void 0, r, i[o], o, t));
        while (o--);return r
    }
    ),
    Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function(e) {
        var t = f && "[object String]" == u(this) ? this.split("") : F(this)
          , n = t.length >>> 0;
        if (!n)
            return -1;
        var r = 0;
        for (arguments.length > 1 && (r = i(arguments[1])),
        r = r >= 0 ? r : Math.max(0, n + r); n > r; r++)
            if (r in t && t[r] === e)
                return r;
        return -1
    }
    ),
    Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(e) {
        var t = f && "[object String]" == u(this) ? this.split("") : F(this)
          , n = t.length >>> 0;
        if (!n)
            return -1;
        var r = n - 1;
        for (arguments.length > 1 && (r = Math.min(r, i(arguments[1]))),
        r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
            if (r in t && e === t[r])
                return r;
        return -1
    }
    ),
    Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
        return e.__proto__ || (e.constructor ? e.constructor.prototype : h)
    }
    ),
    !Object.getOwnPropertyDescriptor) {
        var b = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function(e, t) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError(b + e);
            if (p(e, t)) {
                var i, n, r;
                if (i = {
                    enumerable: !0,
                    configurable: !0
                },
                a) {
                    var l = e.__proto__;
                    e.__proto__ = h;
                    var n = o(e, t)
                      , r = s(e, t);
                    if (e.__proto__ = l,
                    n || r)
                        return n && (i.get = n),
                        r && (i.set = r),
                        i
                }
                return i.value = e[t],
                i
            }
        }
    }
    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
        return Object.keys(e)
    }
    ),
    !Object.create) {
        var v;
        v = null === Object.prototype.__proto__ ? function() {
            return {
                __proto__: null
            }
        }
        : function() {
            var e = {};
            for (var t in e)
                e[t] = null;
            return e.constructor = e.hasOwnProperty = e.propertyIsEnumerable = e.isPrototypeOf = e.toLocaleString = e.toString = e.valueOf = e.__proto__ = null,
            e
        }
        ,
        Object.create = function(e, t) {
            var i;
            if (null === e)
                i = v();
            else {
                if ("object" != typeof e)
                    throw new TypeError("typeof prototype[" + typeof e + "] != 'object'");
                var n = function() {};
                n.prototype = e,
                i = new n,
                i.__proto__ = e
            }
            return void 0 !== t && Object.defineProperties(i, t),
            i
        }
    }
    if (Object.defineProperty) {
        var w = t({})
          , C = "undefined" == typeof document || t(document.createElement("div"));
        if (!w || !C)
            var y = Object.defineProperty
    }
    if (!Object.defineProperty || y) {
        var S = "Property description must be an object: "
          , _ = "Object.defineProperty called on non-object: "
          , k = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function(e, t, i) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError(_ + e);
            if ("object" != typeof i && "function" != typeof i || null === i)
                throw new TypeError(S + i);
            if (y)
                try {
                    return y.call(Object, e, t, i)
                } catch (l) {}
            if (p(i, "value"))
                if (a && (o(e, t) || s(e, t))) {
                    var c = e.__proto__;
                    e.__proto__ = h,
                    delete e[t],
                    e[t] = i.value,
                    e.__proto__ = c
                } else
                    e[t] = i.value;
            else {
                if (!a)
                    throw new TypeError(k);
                p(i, "get") && n(e, t, i.get),
                p(i, "set") && r(e, t, i.set)
            }
            return e
        }
    }
    Object.defineProperties || (Object.defineProperties = function(e, t) {
        for (var i in t)
            p(t, i) && Object.defineProperty(e, i, t[i]);
        return e
    }
    ),
    Object.seal || (Object.seal = function(e) {
        return e
    }
    ),
    Object.freeze || (Object.freeze = function(e) {
        return e
    }
    );
    try {
        Object.freeze(function() {})
    } catch (x) {
        Object.freeze = function(e) {
            return function(t) {
                return "function" == typeof t ? t : e(t)
            }
        }(Object.freeze)
    }
    if (Object.preventExtensions || (Object.preventExtensions = function(e) {
        return e
    }
    ),
    Object.isSealed || (Object.isSealed = function() {
        return !1
    }
    ),
    Object.isFrozen || (Object.isFrozen = function() {
        return !1
    }
    ),
    Object.isExtensible || (Object.isExtensible = function(e) {
        if (Object(e) === e)
            throw new TypeError;
        for (var t = ""; p(e, t); )
            t += "?";
        e[t] = !0;
        var i = p(e, t);
        return delete e[t],
        i
    }
    ),
    !Object.keys) {
        var A = !0
          , E = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , I = E.length;
        for (var L in {
            toString: null
        })
            A = !1;
        Object.keys = function B(e) {
            if ("object" != typeof e && "function" != typeof e || null === e)
                throw new TypeError("Object.keys called on a non-object");
            var B = [];
            for (var t in e)
                p(e, t) && B.push(t);
            if (A)
                for (var i = 0, n = I; n > i; i++) {
                    var r = E[i];
                    p(e, r) && B.push(r)
                }
            return B
        }
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }
    );
    var T = "   \n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim || T.trim()) {
        T = "[" + T + "]";
        var D = new RegExp("^" + T + T + "*")
          , P = new RegExp(T + T + "*$");
        String.prototype.trim = function() {
            return String(this).replace(D, "").replace(P, "")
        }
    }
    var F = function(e) {
        if (null == e)
            throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}),
define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function(e) {
    "use strict";
    e("./regexp"),
    e("./es5-shim")
}),
define("ace/lib/dom", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = "http://www.w3.org/1999/xhtml";
    return t.getDocumentHead = function(e) {
        return e || (e = document),
        e.head || e.getElementsByTagName("head")[0] || e.documentElement
    }
    ,
    t.createElement = function(e, t) {
        return document.createElementNS ? document.createElementNS(t || i, e) : document.createElement(e)
    }
    ,
    t.hasCssClass = function(e, t) {
        var i = (e.className + "").split(/\s+/g);
        return -1 !== i.indexOf(t)
    }
    ,
    t.addCssClass = function(e, i) {
        t.hasCssClass(e, i) || (e.className += " " + i)
    }
    ,
    t.removeCssClass = function(e, t) {
        for (var i = e.className.split(/\s+/g); ; ) {
            var n = i.indexOf(t);
            if (-1 == n)
                break;
            i.splice(n, 1)
        }
        e.className = i.join(" ")
    }
    ,
    t.toggleCssClass = function(e, t) {
        for (var i = e.className.split(/\s+/g), n = !0; ; ) {
            var r = i.indexOf(t);
            if (-1 == r)
                break;
            n = !1,
            i.splice(r, 1)
        }
        return n && i.push(t),
        e.className = i.join(" "),
        n
    }
    ,
    t.setCssClass = function(e, i, n) {
        n ? t.addCssClass(e, i) : t.removeCssClass(e, i)
    }
    ,
    t.hasCssString = function(e, t) {
        var i, n = 0;
        if (t = t || document,
        t.createStyleSheet && (i = t.styleSheets)) {
            for (; n < i.length; )
                if (i[n++].owningElement.id === e)
                    return !0
        } else if (i = t.getElementsByTagName("style"))
            for (; n < i.length; )
                if (i[n++].id === e)
                    return !0;
        return !1
    }
    ,
    t.importCssString = function(e, i, n) {
        if (n = n || document,
        i && t.hasCssString(i, n))
            return null;
        var r;
        i && (e += "\n/*# sourceURL=ace/css/" + i + " */"),
        n.createStyleSheet ? (r = n.createStyleSheet(),
        r.cssText = e,
        i && (r.owningElement.id = i)) : (r = t.createElement("style"),
        r.appendChild(n.createTextNode(e)),
        i && (r.id = i),
        t.getDocumentHead(n).appendChild(r))
    }
    ,
    t.importCssStylsheet = function(e, i) {
        if (i.createStyleSheet)
            i.createStyleSheet(e);
        else {
            var n = t.createElement("link");
            n.rel = "stylesheet",
            n.href = e,
            t.getDocumentHead(i).appendChild(n)
        }
    }
    ,
    t.getInnerWidth = function(e) {
        return parseInt(t.computedStyle(e, "paddingLeft"), 10) + parseInt(t.computedStyle(e, "paddingRight"), 10) + e.clientWidth
    }
    ,
    t.getInnerHeight = function(e) {
        return parseInt(t.computedStyle(e, "paddingTop"), 10) + parseInt(t.computedStyle(e, "paddingBottom"), 10) + e.clientHeight
    }
    ,
    t.scrollbarWidth = function(e) {
        var i = t.createElement("ace_inner");
        i.style.width = "100%",
        i.style.minWidth = "0px",
        i.style.height = "200px",
        i.style.display = "block";
        var n = t.createElement("ace_outer")
          , r = n.style;
        r.position = "absolute",
        r.left = "-10000px",
        r.overflow = "hidden",
        r.width = "200px",
        r.minWidth = "0px",
        r.height = "150px",
        r.display = "block",
        n.appendChild(i);
        var o = e.documentElement;
        o.appendChild(n);
        var s = i.offsetWidth;
        r.overflow = "scroll";
        var a = i.offsetWidth;
        return s == a && (a = n.clientWidth),
        o.removeChild(n),
        s - a
    }
    ,
    "undefined" == typeof document ? void (t.importCssString = function() {}
    ) : (void 0 !== window.pageYOffset ? (t.getPageScrollTop = function() {
        return window.pageYOffset
    }
    ,
    t.getPageScrollLeft = function() {
        return window.pageXOffset
    }
    ) : (t.getPageScrollTop = function() {
        return document.body.scrollTop
    }
    ,
    t.getPageScrollLeft = function() {
        return document.body.scrollLeft
    }
    ),
    t.computedStyle = window.getComputedStyle ? function(e, t) {
        return t ? (window.getComputedStyle(e, "") || {})[t] || "" : window.getComputedStyle(e, "") || {}
    }
    : function(e, t) {
        return t ? e.currentStyle[t] : e.currentStyle
    }
    ,
    t.setInnerHtml = function(e, t) {
        var i = e.cloneNode(!1);
        return i.innerHTML = t,
        e.parentNode.replaceChild(i, e),
        i
    }
    ,
    "textContent"in document.documentElement ? (t.setInnerText = function(e, t) {
        e.textContent = t
    }
    ,
    t.getInnerText = function(e) {
        return e.textContent
    }
    ) : (t.setInnerText = function(e, t) {
        e.innerText = t
    }
    ,
    t.getInnerText = function(e) {
        return e.innerText
    }
    ),
    t.getParentWindow = function(e) {
        return e.defaultView || e.parentWindow
    }
    ,
    void 0)
}),
define("ace/lib/oop", ["require", "exports", "module"], function(e, t) {
    "use strict";
    t.inherits = function(e, t) {
        e.super_ = t,
        e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })
    }
    ,
    t.mixin = function(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    ,
    t.implement = function(e, i) {
        t.mixin(e, i)
    }
}),
define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function(e, t) {
    "use strict";
    e("./fixoldbrowsers");
    var i = e("./oop")
      , n = function() {
        var e, t, n = {
            MODIFIER_KEYS: {
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                224: "Meta"
            },
            KEY_MODS: {
                ctrl: 1,
                alt: 2,
                option: 2,
                shift: 4,
                "super": 8,
                meta: 8,
                command: 8,
                cmd: 8
            },
            FUNCTION_KEYS: {
                8: "Backspace",
                9: "Tab",
                13: "Return",
                19: "Pause",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "Print",
                45: "Insert",
                46: "Delete",
                96: "Numpad0",
                97: "Numpad1",
                98: "Numpad2",
                99: "Numpad3",
                100: "Numpad4",
                101: "Numpad5",
                102: "Numpad6",
                103: "Numpad7",
                104: "Numpad8",
                105: "Numpad9",
                "-13": "NumpadEnter",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "Numlock",
                145: "Scrolllock"
            },
            PRINTABLE_KEYS: {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                107: "+",
                109: "-",
                110: ".",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                111: "/",
                106: "*"
            }
        };
        for (t in n.FUNCTION_KEYS)
            e = n.FUNCTION_KEYS[t].toLowerCase(),
            n[e] = parseInt(t, 10);
        for (t in n.PRINTABLE_KEYS)
            e = n.PRINTABLE_KEYS[t].toLowerCase(),
            n[e] = parseInt(t, 10);
        return i.mixin(n, n.MODIFIER_KEYS),
        i.mixin(n, n.PRINTABLE_KEYS),
        i.mixin(n, n.FUNCTION_KEYS),
        n.enter = n["return"],
        n.escape = n.esc,
        n.del = n["delete"],
        n[173] = "-",
        function() {
            for (var e = ["cmd", "ctrl", "alt", "shift"], t = Math.pow(2, e.length); t--; )
                n.KEY_MODS[t] = e.filter(function(e) {
                    return t & n.KEY_MODS[e]
                }).join("-") + "-"
        }(),
        n.KEY_MODS[0] = "",
        n.KEY_MODS[-1] = "input-",
        n
    }();
    i.mixin(t, n),
    t.keyCodeToString = function(e) {
        var t = n[e];
        return "string" != typeof t && (t = String.fromCharCode(e)),
        t.toLowerCase()
    }
}),
define("ace/lib/useragent", ["require", "exports", "module"], function(e, t) {
    "use strict";
    if (t.OS = {
        LINUX: "LINUX",
        MAC: "MAC",
        WINDOWS: "WINDOWS"
    },
    t.getOS = function() {
        return t.isMac ? t.OS.MAC : t.isLinux ? t.OS.LINUX : t.OS.WINDOWS
    }
    ,
    "object" == typeof navigator) {
        var i = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase()
          , n = navigator.userAgent;
        t.isWin = "win" == i,
        t.isMac = "mac" == i,
        t.isLinux = "linux" == i,
        t.isIE = parseFloat("Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? (n.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1] : (n.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]),
        t.isOldIE = t.isIE && t.isIE < 9,
        t.isGecko = t.isMozilla = (window.Controllers || window.controllers) && "Gecko" === window.navigator.product,
        t.isOldGecko = t.isGecko && parseInt((n.match(/rv:(\d+)/) || [])[1], 10) < 4,
        t.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera),
        t.isWebKit = parseFloat(n.split("WebKit/")[1]) || void 0,
        t.isChrome = parseFloat(n.split(" Chrome/")[1]) || void 0,
        t.isAIR = n.indexOf("AdobeAIR") >= 0,
        t.isIPad = n.indexOf("iPad") >= 0,
        t.isTouchPad = n.indexOf("TouchPad") >= 0,
        t.isChromeOS = n.indexOf(" CrOS ") >= 0
    }
}),
define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function i(e, t, i) {
        var n = l(t);
        if (!o.isMac && s) {
            if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win")) && (n |= 8),
            s.altGr) {
                if (3 == (3 & n))
                    return;
                s.altGr = 0
            }
            if (18 === i || 17 === i) {
                var c = "location"in t ? t.location : t.keyLocation;
                if (17 === i && 1 === c)
                    1 == s[i] && (a = t.timeStamp);
                else if (18 === i && 3 === n && 2 === c) {
                    var h = t.timeStamp - a;
                    50 > h && (s.altGr = !0)
                }
            }
        }
        if (i in r.MODIFIER_KEYS && (i = -1),
        8 & n && i >= 91 && 93 >= i && (i = -1),
        !n && 13 === i) {
            var c = "location"in t ? t.location : t.keyLocation;
            if (3 === c && (e(t, n, -i),
            t.defaultPrevented))
                return
        }
        if (o.isChromeOS && 8 & n) {
            if (e(t, n, i),
            t.defaultPrevented)
                return;
            n &= -9
        }
        return n || i in r.FUNCTION_KEYS || i in r.PRINTABLE_KEYS ? e(t, n, i) : !1
    }
    function n() {
        s = Object.create(null)
    }
    var r = e("./keys")
      , o = e("./useragent")
      , s = null
      , a = 0;
    t.addListener = function(e, t, i) {
        if (e.addEventListener)
            return e.addEventListener(t, i, !1);
        if (e.attachEvent) {
            var n = function() {
                i.call(e, window.event)
            };
            i._wrapper = n,
            e.attachEvent("on" + t, n)
        }
    }
    ,
    t.removeListener = function(e, t, i) {
        return e.removeEventListener ? e.removeEventListener(t, i, !1) : void (e.detachEvent && e.detachEvent("on" + t, i._wrapper || i))
    }
    ,
    t.stopEvent = function(e) {
        return t.stopPropagation(e),
        t.preventDefault(e),
        !1
    }
    ,
    t.stopPropagation = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    ,
    t.preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    ,
    t.getButton = function(e) {
        return "dblclick" == e.type ? 0 : "contextmenu" == e.type || o.isMac && e.ctrlKey && !e.altKey && !e.shiftKey ? 2 : e.preventDefault ? e.button : {
            1: 0,
            2: 2,
            4: 1
        }[e.button]
    }
    ,
    t.capture = function(e, i, n) {
        function r(e) {
            i && i(e),
            n && n(e),
            t.removeListener(document, "mousemove", i, !0),
            t.removeListener(document, "mouseup", r, !0),
            t.removeListener(document, "dragstart", r, !0)
        }
        return t.addListener(document, "mousemove", i, !0),
        t.addListener(document, "mouseup", r, !0),
        t.addListener(document, "dragstart", r, !0),
        r
    }
    ,
    t.addTouchMoveListener = function(e, i) {
        if ("ontouchmove"in e) {
            var n, r;
            t.addListener(e, "touchstart", function(e) {
                var t = e.changedTouches[0];
                n = t.clientX,
                r = t.clientY
            }),
            t.addListener(e, "touchmove", function(e) {
                var t = 1
                  , o = e.changedTouches[0];
                e.wheelX = -(o.clientX - n) / t,
                e.wheelY = -(o.clientY - r) / t,
                n = o.clientX,
                r = o.clientY,
                i(e)
            })
        }
    }
    ,
    t.addMouseWheelListener = function(e, i) {
        "onmousewheel"in e ? t.addListener(e, "mousewheel", function(e) {
            var t = 8;
            void 0 !== e.wheelDeltaX ? (e.wheelX = -e.wheelDeltaX / t,
            e.wheelY = -e.wheelDeltaY / t) : (e.wheelX = 0,
            e.wheelY = -e.wheelDelta / t),
            i(e)
        }) : "onwheel"in e ? t.addListener(e, "wheel", function(e) {
            var t = .35;
            switch (e.deltaMode) {
            case e.DOM_DELTA_PIXEL:
                e.wheelX = e.deltaX * t || 0,
                e.wheelY = e.deltaY * t || 0;
                break;
            case e.DOM_DELTA_LINE:
            case e.DOM_DELTA_PAGE:
                e.wheelX = 5 * (e.deltaX || 0),
                e.wheelY = 5 * (e.deltaY || 0)
            }
            i(e)
        }) : t.addListener(e, "DOMMouseScroll", function(e) {
            e.axis && e.axis == e.HORIZONTAL_AXIS ? (e.wheelX = 5 * (e.detail || 0),
            e.wheelY = 0) : (e.wheelX = 0,
            e.wheelY = 5 * (e.detail || 0)),
            i(e)
        })
    }
    ,
    t.addMultiMouseDownListener = function(e, i, n, r) {
        function s(e) {
            if (0 !== t.getButton(e) ? d = 0 : e.detail > 1 ? (d++,
            d > 4 && (d = 1)) : d = 1,
            o.isIE) {
                var s = Math.abs(e.clientX - l) > 5 || Math.abs(e.clientY - c) > 5;
                (!h || s) && (d = 1),
                h && clearTimeout(h),
                h = setTimeout(function() {
                    h = null
                }, i[d - 1] || 600),
                1 == d && (l = e.clientX,
                c = e.clientY)
            }
            if (e._clicks = d,
            n[r]("mousedown", e),
            d > 4)
                d = 0;
            else if (d > 1)
                return n[r](u[d], e)
        }
        function a(e) {
            d = 2,
            h && clearTimeout(h),
            h = setTimeout(function() {
                h = null
            }, i[d - 1] || 600),
            n[r]("mousedown", e),
            n[r](u[d], e)
        }
        var l, c, h, d = 0, u = {
            2: "dblclick",
            3: "tripleclick",
            4: "quadclick"
        };
        Array.isArray(e) || (e = [e]),
        e.forEach(function(e) {
            t.addListener(e, "mousedown", s),
            o.isOldIE && t.addListener(e, "dblclick", a)
        })
    }
    ;
    var l = !o.isMac || !o.isOpera || "KeyboardEvent"in window ? function(e) {
        return 0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0)
    }
    : function(e) {
        return 0 | (e.metaKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.ctrlKey ? 8 : 0)
    }
    ;
    if (t.getModifierString = function(e) {
        return r.KEY_MODS[l(e)]
    }
    ,
    t.addCommandKeyListener = function(e, r) {
        var a = t.addListener;
        if (o.isOldGecko || o.isOpera && !("KeyboardEvent"in window)) {
            var l = null;
            a(e, "keydown", function(e) {
                l = e.keyCode
            }),
            a(e, "keypress", function(e) {
                return i(r, e, l)
            })
        } else {
            var c = null;
            a(e, "keydown", function(e) {
                s[e.keyCode] = (s[e.keyCode] || 0) + 1;
                var t = i(r, e, e.keyCode);
                return c = e.defaultPrevented,
                t
            }),
            a(e, "keypress", function(e) {
                c && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (t.stopEvent(e),
                c = null)
            }),
            a(e, "keyup", function(e) {
                s[e.keyCode] = null
            }),
            s || (n(),
            a(window, "focus", n))
        }
    }
    ,
    "object" == typeof window && window.postMessage && !o.isOldIE) {
        var c = 1;
        t.nextTick = function(e, i) {
            i = i || window;
            var n = "zero-timeout-message-" + c;
            t.addListener(i, "message", function r(o) {
                o.data == n && (t.stopPropagation(o),
                t.removeListener(i, "message", r),
                e())
            }),
            i.postMessage(n, "*")
        }
    }
    t.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame),
    t.nextFrame = t.nextFrame ? t.nextFrame.bind(window) : function(e) {
        setTimeout(e, 17)
    }
}),
define("ace/lib/lang", ["require", "exports", "module"], function(e, t) {
    "use strict";
    t.last = function(e) {
        return e[e.length - 1]
    }
    ,
    t.stringReverse = function(e) {
        return e.split("").reverse().join("")
    }
    ,
    t.stringRepeat = function(e, t) {
        for (var i = ""; t > 0; )
            1 & t && (i += e),
            (t >>= 1) && (e += e);
        return i
    }
    ;
    var i = /^\s\s*/
      , n = /\s\s*$/;
    t.stringTrimLeft = function(e) {
        return e.replace(i, "")
    }
    ,
    t.stringTrimRight = function(e) {
        return e.replace(n, "")
    }
    ,
    t.copyObject = function(e) {
        var t = {};
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    t.copyArray = function(e) {
        for (var t = [], i = 0, n = e.length; n > i; i++)
            t[i] = e[i] && "object" == typeof e[i] ? this.copyObject(e[i]) : e[i];
        return t
    }
    ,
    t.deepCopy = function r(e) {
        if ("object" != typeof e || !e)
            return e;
        var t;
        if (Array.isArray(e)) {
            t = [];
            for (var i = 0; i < e.length; i++)
                t[i] = r(e[i]);
            return t
        }
        if ("[object Object]" !== Object.prototype.toString.call(e))
            return e;
        t = {};
        for (var i in e)
            t[i] = r(e[i]);
        return t
    }
    ,
    t.arrayToMap = function(e) {
        for (var t = {}, i = 0; i < e.length; i++)
            t[e[i]] = 1;
        return t
    }
    ,
    t.createMap = function(e) {
        var t = Object.create(null);
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    t.arrayRemove = function(e, t) {
        for (var i = 0; i <= e.length; i++)
            t === e[i] && e.splice(i, 1)
    }
    ,
    t.escapeRegExp = function(e) {
        return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
    }
    ,
    t.escapeHTML = function(e) {
        return e.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
    }
    ,
    t.getMatchOffsets = function(e, t) {
        var i = [];
        return e.replace(t, function(e) {
            i.push({
                offset: arguments[arguments.length - 2],
                length: e.length
            })
        }),
        i
    }
    ,
    t.deferredCall = function(e) {
        var t = null
          , i = function() {
            t = null,
            e()
        }
          , n = function(e) {
            return n.cancel(),
            t = setTimeout(i, e || 0),
            n
        };
        return n.schedule = n,
        n.call = function() {
            return this.cancel(),
            e(),
            n
        }
        ,
        n.cancel = function() {
            return clearTimeout(t),
            t = null,
            n
        }
        ,
        n.isPending = function() {
            return t
        }
        ,
        n
    }
    ,
    t.delayedCall = function(e, t) {
        var i = null
          , n = function() {
            i = null,
            e()
        }
          , r = function(e) {
            null == i && (i = setTimeout(n, e || t))
        };
        return r.delay = function(e) {
            i && clearTimeout(i),
            i = setTimeout(n, e || t)
        }
        ,
        r.schedule = r,
        r.call = function() {
            this.cancel(),
            e()
        }
        ,
        r.cancel = function() {
            i && clearTimeout(i),
            i = null
        }
        ,
        r.isPending = function() {
            return i
        }
        ,
        r
    }
}),
define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang"], function(e, t) {
    "use strict";
    var i = e("../lib/event")
      , n = e("../lib/useragent")
      , r = e("../lib/dom")
      , o = e("../lib/lang")
      , s = n.isChrome < 18
      , a = n.isIE
      , l = function(e, t) {
        function l(e) {
            if (!m) {
                if (m = !0,
                I)
                    t = 0,
                    i = e ? 0 : d.value.length - 1;
                else
                    var t = e ? 2 : 1
                      , i = 2;
                try {
                    d.setSelectionRange(t, i)
                } catch (n) {}
                m = !1
            }
        }
        function c() {
            m || (d.value = u,
            n.isWebKit && y.schedule())
        }
        function h() {
            clearTimeout(O),
            O = setTimeout(function() {
                f && (d.style.cssText = f,
                f = ""),
                null == t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = !0,
                t.renderer.$moveTextAreaToCursor())
            }, n.isOldIE ? 200 : 0)
        }
        var d = r.createElement("textarea");
        d.className = "ace_text-input",
        n.isTouchPad && d.setAttribute("x-palm-disable-auto-cap", !0),
        d.setAttribute("wrap", "off"),
        d.setAttribute("autocorrect", "off"),
        d.setAttribute("autocapitalize", "off"),
        d.setAttribute("spellcheck", !1),
        d.style.opacity = "0",
        n.isOldIE && (d.style.top = "-1000px"),
        e.insertBefore(d, e.firstChild);
        var u = ""
          , p = !1
          , g = !1
          , m = !1
          , f = ""
          , b = !0;
        try {
            var v = document.activeElement === d
        } catch (w) {}
        i.addListener(d, "blur", function(e) {
            t.onBlur(e),
            v = !1
        }),
        i.addListener(d, "focus", function(e) {
            v = !0,
            t.onFocus(e),
            l()
        }),
        this.focus = function() {
            if (f)
                return d.focus();
            var e = d.style.top;
            d.style.position = "fixed",
            d.style.top = "0px",
            d.focus(),
            setTimeout(function() {
                d.style.position = "",
                "0px" == d.style.top && (d.style.top = e)
            }, 0)
        }
        ,
        this.blur = function() {
            d.blur()
        }
        ,
        this.isFocused = function() {
            return v
        }
        ;
        var C = o.delayedCall(function() {
            v && l(b)
        })
          , y = o.delayedCall(function() {
            m || (d.value = u,
            v && l())
        });
        n.isWebKit || t.addEventListener("changeSelection", function() {
            t.selection.isEmpty() != b && (b = !b,
            C.schedule())
        }),
        c(),
        v && t.onFocus();
        var S = function(e) {
            return 0 === e.selectionStart && e.selectionEnd === e.value.length
        };
        if (!d.setSelectionRange && d.createTextRange && (d.setSelectionRange = function(e, t) {
            var i = this.createTextRange();
            i.collapse(!0),
            i.moveStart("character", e),
            i.moveEnd("character", t),
            i.select()
        }
        ,
        S = function(e) {
            try {
                var t = e.ownerDocument.selection.createRange()
            } catch (i) {}
            return t && t.parentElement() == e ? t.text == e.value : !1
        }
        ),
        n.isOldIE) {
            var _ = !1
              , k = function(e) {
                if (!_) {
                    var t = d.value;
                    if (!m && t && t != u)
                        return e && t == u[0] ? x.schedule() : (T(t),
                        _ = !0,
                        c(),
                        _ = !1,
                        void 0)
                }
            }
              , x = o.delayedCall(k);
            i.addListener(d, "propertychange", k);
            var A = {
                13: 1,
                27: 1
            };
            i.addListener(d, "keyup", function(e) {
                return m && (!d.value || A[e.keyCode]) && setTimeout($, 0),
                (d.value.charCodeAt(0) || 0) < 129 ? x.call() : void (m ? N() : G())
            }),
            i.addListener(d, "keydown", function() {
                x.schedule(50)
            })
        }
        var E = function() {
            p ? p = !1 : S(d) ? (t.selectAll(),
            l()) : I && l(t.selection.isEmpty())
        }
          , I = null;
        this.setInputHandler = function(e) {
            I = e
        }
        ,
        this.getInputHandler = function() {
            return I
        }
        ;
        var L = !1
          , T = function(e) {
            I && (e = I(e),
            I = null),
            g ? (l(),
            e && t.onPaste(e),
            g = !1) : e == u.charAt(0) ? L ? t.execCommand("del", {
                source: "ace"
            }) : t.execCommand("backspace", {
                source: "ace"
            }) : (e.substring(0, 2) == u ? e = e.substr(2) : e.charAt(0) == u.charAt(0) ? e = e.substr(1) : e.charAt(e.length - 1) == u.charAt(0) && (e = e.slice(0, -1)),
            e.charAt(e.length - 1) == u.charAt(0) && (e = e.slice(0, -1)),
            e && t.onTextInput(e)),
            L && (L = !1)
        }
          , D = function() {
            if (!m) {
                var e = d.value;
                T(e),
                c()
            }
        }
          , P = function(e, t, i) {
            var n = e.clipboardData || window.clipboardData;
            if (n && !s) {
                var r = a || i ? "Text" : "text/plain";
                try {
                    return t ? n.setData(r, t) !== !1 : n.getData(r)
                } catch (e) {
                    if (!i)
                        return P(e, t, !0)
                }
            }
        }
          , F = function(e, n) {
            var r = t.getCopyText();
            return r ? void (P(e, r) ? (n ? t.onCut() : t.onCopy(),
            i.preventDefault(e)) : (p = !0,
            d.value = r,
            d.select(),
            setTimeout(function() {
                p = !1,
                c(),
                l(),
                n ? t.onCut() : t.onCopy()
            }))) : i.preventDefault(e)
        }
          , B = function(e) {
            F(e, !0)
        }
          , M = function(e) {
            F(e, !1)
        }
          , R = function(e) {
            var r = P(e);
            "string" == typeof r ? (r && t.onPaste(r, e),
            n.isIE && setTimeout(l),
            i.preventDefault(e)) : (d.value = "",
            g = !0)
        };
        i.addCommandKeyListener(d, t.onCommandKey.bind(t)),
        i.addListener(d, "select", E),
        i.addListener(d, "input", D),
        i.addListener(d, "cut", B),
        i.addListener(d, "copy", M),
        i.addListener(d, "paste", R),
        !("oncut"in d && "oncopy"in d && "onpaste"in d || !i.addListener(e, "keydown", function(e) {
            if ((!n.isMac || e.metaKey) && e.ctrlKey)
                switch (e.keyCode) {
                case 67:
                    M(e);
                    break;
                case 86:
                    R(e);
                    break;
                case 88:
                    B(e)
                }
        }));
        var G = function() {
            m || !t.onCompositionStart || t.$readOnly || (m = {},
            m.canUndo = t.session.$undoManager,
            t.onCompositionStart(),
            setTimeout(N, 0),
            t.on("mousedown", $),
            m.canUndo && !t.selection.isEmpty() && (t.insert(""),
            t.session.markUndoGroup(),
            t.selection.clearSelection()),
            t.session.markUndoGroup())
        }
          , N = function() {
            if (m && t.onCompositionUpdate && !t.$readOnly) {
                var e = d.value.replace(/\x01/g, "");
                if (m.lastValue !== e && (t.onCompositionUpdate(e),
                m.lastValue && t.undo(),
                m.canUndo && (m.lastValue = e),
                m.lastValue)) {
                    var i = t.selection.getRange();
                    t.insert(m.lastValue),
                    t.session.markUndoGroup(),
                    m.range = t.selection.getRange(),
                    t.selection.setRange(i),
                    t.selection.clearSelection()
                }
            }
        }
          , $ = function(e) {
            if (t.onCompositionEnd && !t.$readOnly) {
                var i = m;
                m = !1;
                var n = setTimeout(function() {
                    n = null;
                    var e = d.value.replace(/\x01/g, "");
                    m || (e == i.lastValue ? c() : !i.lastValue && e && (c(),
                    T(e)))
                });
                I = function(e) {
                    return n && clearTimeout(n),
                    e = e.replace(/\x01/g, ""),
                    e == i.lastValue ? "" : (i.lastValue && n && t.undo(),
                    e)
                }
                ,
                t.onCompositionEnd(),
                t.removeListener("mousedown", $),
                "compositionend" == e.type && i.range && t.selection.setRange(i.range)
            }
        }
          , U = o.delayedCall(N, 50);
        i.addListener(d, "compositionstart", G),
        n.isGecko ? i.addListener(d, "text", function() {
            U.schedule()
        }) : (i.addListener(d, "keyup", function() {
            U.schedule()
        }),
        i.addListener(d, "keydown", function() {
            U.schedule()
        })),
        i.addListener(d, "compositionend", $),
        this.getElement = function() {
            return d
        }
        ,
        this.setReadOnly = function(e) {
            d.readOnly = e
        }
        ,
        this.onContextMenu = function(e) {
            L = !0,
            l(t.selection.isEmpty()),
            t._emit("nativecontextmenu", {
                target: t,
                domEvent: e
            }),
            this.moveToMouse(e, !0)
        }
        ,
        this.moveToMouse = function(e, o) {
            if (o || !n.isOldIE) {
                f || (f = d.style.cssText),
                d.style.cssText = (o ? "z-index:100000;" : "") + "height:" + d.style.height + ";" + (n.isIE ? "opacity:0.1;" : "");
                var s = t.container.getBoundingClientRect()
                  , a = r.computedStyle(t.container)
                  , l = s.top + (parseInt(a.borderTopWidth) || 0)
                  , c = s.left + (parseInt(s.borderLeftWidth) || 0)
                  , u = s.bottom - l - d.clientHeight - 2
                  , p = function(e) {
                    d.style.left = e.clientX - c - 2 + "px",
                    d.style.top = Math.min(e.clientY - l - 2, u) + "px"
                };
                p(e),
                "mousedown" == e.type && (t.renderer.$keepTextAreaAtCursor && (t.renderer.$keepTextAreaAtCursor = null),
                clearTimeout(O),
                n.isWin && !n.isOldIE && i.capture(t.container, p, h))
            }
        }
        ,
        this.onContextMenuClose = h;
        var O, W = function(e) {
            t.textInput.onContextMenu(e),
            h()
        };
        i.addListener(d, "mouseup", W),
        i.addListener(d, "mousedown", function(e) {
            e.preventDefault(),
            h()
        }),
        i.addListener(t.renderer.scroller, "contextmenu", W),
        i.addListener(d, "contextmenu", W)
    };
    t.TextInput = l
}),
define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function i(e) {
        e.$clickSelection = null;
        var t = e.editor;
        t.setDefaultHandler("mousedown", this.onMouseDown.bind(e)),
        t.setDefaultHandler("dblclick", this.onDoubleClick.bind(e)),
        t.setDefaultHandler("tripleclick", this.onTripleClick.bind(e)),
        t.setDefaultHandler("quadclick", this.onQuadClick.bind(e)),
        t.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e)),
        t.setDefaultHandler("touchmove", this.onTouchMove.bind(e));
        var i = ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"];
        i.forEach(function(t) {
            e[t] = this[t]
        }, this),
        e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange"),
        e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange")
    }
    function n(e, t, i, n) {
        return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
    }
    function r(e, t) {
        if (e.start.row == e.end.row)
            var i = 2 * t.column - e.start.column - e.end.column;
        else if (e.start.row != e.end.row - 1 || e.start.column || e.end.column)
            var i = 2 * t.row - e.start.row - e.end.row;
        else
            var i = t.column - 4;
        return 0 > i ? {
            cursor: e.start,
            anchor: e.end
        } : {
            cursor: e.end,
            anchor: e.start
        }
    }
    var o = (e("../lib/dom"),
    e("../lib/event"),
    e("../lib/useragent"),
    0);
    (function() {
        this.onMouseDown = function(e) {
            var t = e.inSelection()
              , i = e.getDocumentPosition();
            this.mousedownEvent = e;
            var n = this.editor
              , r = e.getButton();
            if (0 !== r) {
                var o = n.getSelectionRange()
                  , s = o.isEmpty();
                return n.$blockScrolling++,
                (s || 1 == r) && n.selection.moveToPosition(i),
                n.$blockScrolling--,
                2 == r && n.textInput.onContextMenu(e.domEvent),
                void 0
            }
            return this.mousedownEvent.time = Date.now(),
            !t || n.isFocused() || (n.focus(),
            !this.$focusTimout || this.$clickSelection || n.inMultiSelectMode) ? (this.captureMouse(e),
            this.startSelect(i, e.domEvent._clicks > 1),
            e.preventDefault()) : (this.setState("focusWait"),
            void this.captureMouse(e))
        }
        ,
        this.startSelect = function(e, t) {
            e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
            var i = this.editor;
            i.$blockScrolling++,
            this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(e) : t || i.selection.moveToPosition(e),
            t || this.select(),
            i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(),
            i.setStyle("ace_selecting"),
            this.setState("select"),
            i.$blockScrolling--
        }
        ,
        this.select = function() {
            var e, t = this.editor, i = t.renderer.screenToTextCoordinates(this.x, this.y);
            if (t.$blockScrolling++,
            this.$clickSelection) {
                var n = this.$clickSelection.comparePoint(i);
                if (-1 == n)
                    e = this.$clickSelection.end;
                else if (1 == n)
                    e = this.$clickSelection.start;
                else {
                    var o = r(this.$clickSelection, i);
                    i = o.cursor,
                    e = o.anchor
                }
                t.selection.setSelectionAnchor(e.row, e.column)
            }
            t.selection.selectToPosition(i),
            t.$blockScrolling--,
            t.renderer.scrollCursorIntoView()
        }
        ,
        this.extendSelectionBy = function(e) {
            var t, i = this.editor, n = i.renderer.screenToTextCoordinates(this.x, this.y), o = i.selection[e](n.row, n.column);
            if (i.$blockScrolling++,
            this.$clickSelection) {
                var s = this.$clickSelection.comparePoint(o.start)
                  , a = this.$clickSelection.comparePoint(o.end);
                if (-1 == s && 0 >= a)
                    t = this.$clickSelection.end,
                    (o.end.row != n.row || o.end.column != n.column) && (n = o.start);
                else if (1 == a && s >= 0)
                    t = this.$clickSelection.start,
                    (o.start.row != n.row || o.start.column != n.column) && (n = o.end);
                else if (-1 == s && 1 == a)
                    n = o.end,
                    t = o.start;
                else {
                    var l = r(this.$clickSelection, n);
                    n = l.cursor,
                    t = l.anchor
                }
                i.selection.setSelectionAnchor(t.row, t.column)
            }
            i.selection.selectToPosition(n),
            i.$blockScrolling--,
            i.renderer.scrollCursorIntoView()
        }
        ,
        this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
            this.$clickSelection = null,
            this.editor.unsetStyle("ace_selecting"),
            this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
        }
        ,
        this.focusWait = function() {
            var e = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y)
              , t = Date.now();
            (e > o || t - this.mousedownEvent.time > this.$focusTimout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
        }
        ,
        this.onDoubleClick = function(e) {
            var t = e.getDocumentPosition()
              , i = this.editor
              , n = i.session
              , r = n.getBracketRange(t);
            r ? (r.isEmpty() && (r.start.column--,
            r.end.column++),
            this.setState("select")) : (r = i.selection.getWordRange(t.row, t.column),
            this.setState("selectByWords")),
            this.$clickSelection = r,
            this.select()
        }
        ,
        this.onTripleClick = function(e) {
            var t = e.getDocumentPosition()
              , i = this.editor;
            this.setState("selectByLines");
            var n = i.getSelectionRange();
            n.isMultiLine() && n.contains(t.row, t.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row),
            this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(t.row),
            this.select()
        }
        ,
        this.onQuadClick = function() {
            var e = this.editor;
            e.selectAll(),
            this.$clickSelection = e.getSelectionRange(),
            this.setState("selectAll")
        }
        ,
        this.onMouseWheel = function(e) {
            if (!e.getAccelKey()) {
                e.getShiftKey() && e.wheelY && !e.wheelX && (e.wheelX = e.wheelY,
                e.wheelY = 0);
                var t = e.domEvent.timeStamp
                  , i = t - (this.$lastScrollTime || 0)
                  , n = this.editor
                  , r = n.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
                return r || 200 > i ? (this.$lastScrollTime = t,
                n.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed),
                e.stop()) : void 0
            }
        }
        ,
        this.onTouchMove = function(e) {
            var t = e.domEvent.timeStamp
              , i = t - (this.$lastScrollTime || 0)
              , n = this.editor
              , r = n.renderer.isScrollableBy(e.wheelX * e.speed, e.wheelY * e.speed);
            return r || 200 > i ? (this.$lastScrollTime = t,
            n.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed),
            e.stop()) : void 0
        }
    }
    ).call(i.prototype),
    t.DefaultHandlers = i
}),
define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(e, t) {
    "use strict";
    function i(e) {
        this.isOpen = !1,
        this.$element = null,
        this.$parentNode = e
    }
    var n = (e("./lib/oop"),
    e("./lib/dom"));
    (function() {
        this.$init = function() {
            return this.$element = n.createElement("div"),
            this.$element.className = "ace_tooltip",
            this.$element.style.display = "none",
            this.$parentNode.appendChild(this.$element),
            this.$element
        }
        ,
        this.getElement = function() {
            return this.$element || this.$init()
        }
        ,
        this.setText = function(e) {
            n.setInnerText(this.getElement(), e)
        }
        ,
        this.setHtml = function(e) {
            this.getElement().innerHTML = e
        }
        ,
        this.setPosition = function(e, t) {
            this.getElement().style.left = e + "px",
            this.getElement().style.top = t + "px"
        }
        ,
        this.setClassName = function(e) {
            n.addCssClass(this.getElement(), e)
        }
        ,
        this.show = function(e, t, i) {
            null != e && this.setText(e),
            null != t && null != i && this.setPosition(t, i),
            this.isOpen || (this.getElement().style.display = "block",
            this.isOpen = !0)
        }
        ,
        this.hide = function() {
            this.isOpen && (this.getElement().style.display = "none",
            this.isOpen = !1)
        }
        ,
        this.getHeight = function() {
            return this.getElement().offsetHeight
        }
        ,
        this.getWidth = function() {
            return this.getElement().offsetWidth
        }
    }
    ).call(i.prototype),
    t.Tooltip = i
}),
define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(e, t) {
    "use strict";
    function i(e) {
        function t() {
            var t = d.getDocumentPosition().row
              , n = l.$annotations[t];
            if (!n)
                return i();
            var r = a.session.getLength();
            if (t == r) {
                var s = a.renderer.pixelToScreenCoordinates(0, d.y).row
                  , h = d.$pos;
                if (s > a.session.documentToScreenRow(h.row, h.column))
                    return i()
            }
            if (u != n)
                if (u = n.text.join("<br/>"),
                c.setHtml(u),
                c.show(),
                a._signal("showGutterTooltip", c),
                a.on("mousewheel", i),
                e.$tooltipFollowsMouse)
                    o(d);
                else {
                    var p = d.domEvent.target
                      , g = p.getBoundingClientRect()
                      , m = c.getElement().style;
                    m.left = g.right + "px",
                    m.top = g.bottom + "px"
                }
        }
        function i() {
            h && (h = clearTimeout(h)),
            u && (c.hide(),
            u = null,
            a._signal("hideGutterTooltip", c),
            a.removeEventListener("mousewheel", i))
        }
        function o(e) {
            c.setPosition(e.x, e.y)
        }
        var a = e.editor
          , l = a.renderer.$gutterLayer
          , c = new n(a.container);
        e.editor.setDefaultHandler("guttermousedown", function(t) {
            if (a.isFocused() && 0 == t.getButton()) {
                var i = l.getRegion(t);
                if ("foldWidgets" != i) {
                    var n = t.getDocumentPosition().row
                      , r = a.session.selection;
                    if (t.getShiftKey())
                        r.selectTo(n, 0);
                    else {
                        if (2 == t.domEvent.detail)
                            return a.selectAll(),
                            t.preventDefault();
                        e.$clickSelection = a.selection.getLineRange(n)
                    }
                    return e.setState("selectByLines"),
                    e.captureMouse(t),
                    t.preventDefault()
                }
            }
        });
        var h, d, u;
        e.editor.setDefaultHandler("guttermousemove", function(n) {
            var s = n.domEvent.target || n.domEvent.srcElement;
            return r.hasCssClass(s, "ace_fold-widget") ? i() : (u && e.$tooltipFollowsMouse && o(n),
            d = n,
            void (h || (h = setTimeout(function() {
                h = null,
                d && !e.isMousePressed ? t() : i()
            }, 50))))
        }),
        s.addListener(a.renderer.$gutter, "mouseout", function() {
            d = null,
            u && !h && (h = setTimeout(function() {
                h = null,
                i()
            }, 50))
        }),
        a.on("changeSession", i)
    }
    function n(e) {
        a.call(this, e)
    }
    var r = e("../lib/dom")
      , o = e("../lib/oop")
      , s = e("../lib/event")
      , a = e("../tooltip").Tooltip;
    o.inherits(n, a),
    function() {
        this.setPosition = function(e, t) {
            var i = window.innerWidth || document.documentElement.clientWidth
              , n = window.innerHeight || document.documentElement.clientHeight
              , r = this.getWidth()
              , o = this.getHeight();
            e += 15,
            t += 15,
            e + r > i && (e -= e + r - i),
            t + o > n && (t -= 20 + o),
            a.prototype.setPosition.call(this, e, t)
        }
    }
    .call(n.prototype),
    t.GutterHandler = i
}),
define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    var i = e("../lib/event")
      , n = e("../lib/useragent")
      , r = t.MouseEvent = function(e, t) {
        this.domEvent = e,
        this.editor = t,
        this.x = this.clientX = e.clientX,
        this.y = this.clientY = e.clientY,
        this.$pos = null,
        this.$inSelection = null,
        this.propagationStopped = !1,
        this.defaultPrevented = !1
    }
    ;
    (function() {
        this.stopPropagation = function() {
            i.stopPropagation(this.domEvent),
            this.propagationStopped = !0
        }
        ,
        this.preventDefault = function() {
            i.preventDefault(this.domEvent),
            this.defaultPrevented = !0
        }
        ,
        this.stop = function() {
            this.stopPropagation(),
            this.preventDefault()
        }
        ,
        this.getDocumentPosition = function() {
            return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY),
            this.$pos)
        }
        ,
        this.inSelection = function() {
            if (null !== this.$inSelection)
                return this.$inSelection;
            var e = this.editor
              , t = e.getSelectionRange();
            if (t.isEmpty())
                this.$inSelection = !1;
            else {
                var i = this.getDocumentPosition();
                this.$inSelection = t.contains(i.row, i.column)
            }
            return this.$inSelection
        }
        ,
        this.getButton = function() {
            return i.getButton(this.domEvent)
        }
        ,
        this.getShiftKey = function() {
            return this.domEvent.shiftKey
        }
        ,
        this.getAccelKey = n.isMac ? function() {
            return this.domEvent.metaKey
        }
        : function() {
            return this.domEvent.ctrlKey
        }
    }
    ).call(r.prototype)
}),
define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function i(e) {
        function t(e, t) {
            var i = Date.now()
              , r = !t || e.row != t.row
              , o = !t || e.column != t.column;
            if (!I || r || o)
                f.$blockScrolling += 1,
                f.moveCursorToPosition(e),
                f.$blockScrolling -= 1,
                I = i,
                L = {
                    x: C,
                    y: y
                };
            else {
                var s = n(L.x, L.y, C, y);
                s > c ? I = null : i - I >= l && (f.renderer.scrollCursorIntoView(),
                I = null)
            }
        }
        function i(e, t) {
            var i = Date.now()
              , n = f.renderer.layerConfig.lineHeight
              , r = f.renderer.layerConfig.characterWidth
              , o = f.renderer.scroller.getBoundingClientRect()
              , s = {
                x: {
                    left: C - o.left,
                    right: o.right - C
                },
                y: {
                    top: y - o.top,
                    bottom: o.bottom - y
                }
            }
              , l = Math.min(s.x.left, s.x.right)
              , c = Math.min(s.y.top, s.y.bottom)
              , h = {
                row: e.row,
                column: e.column
            };
            2 >= l / r && (h.column += s.x.left < s.x.right ? -3 : 2),
            1 >= c / n && (h.row += s.y.top < s.y.bottom ? -1 : 1);
            var d = e.row != h.row
              , u = e.column != h.column
              , p = !t || e.row != t.row;
            d || u && !p ? E ? i - E >= a && f.renderer.scrollCursorIntoView(h) : E = i : E = null
        }
        function h() {
            var e = k;
            k = f.renderer.screenToTextCoordinates(C, y),
            t(k, e),
            i(k, e)
        }
        function d() {
            _ = f.selection.toOrientedRange(),
            w = f.session.addMarker(_, "ace_selection", f.getSelectionStyle()),
            f.clearSelection(),
            f.isFocused() && f.renderer.$cursorLayer.setBlinking(!1),
            clearInterval(S),
            h(),
            S = setInterval(h, 20),
            D = 0,
            o.addListener(document, "mousemove", p)
        }
        function u() {
            clearInterval(S),
            f.session.removeMarker(w),
            w = null,
            f.$blockScrolling += 1,
            f.selection.fromOrientedRange(_),
            f.$blockScrolling -= 1,
            f.isFocused() && !A && f.renderer.$cursorLayer.setBlinking(!f.getReadOnly()),
            _ = null,
            k = null,
            D = 0,
            E = null,
            I = null,
            o.removeListener(document, "mousemove", p)
        }
        function p() {
            null == P && (P = setTimeout(function() {
                null != P && w && u()
            }, 20))
        }
        function g(e) {
            var t = e.types;
            return !t || Array.prototype.some.call(t, function(e) {
                return "text/plain" == e || "Text" == e
            })
        }
        function m(e) {
            var t = ["copy", "copymove", "all", "uninitialized"]
              , i = ["move", "copymove", "linkmove", "all", "uninitialized"]
              , n = s.isMac ? e.altKey : e.ctrlKey
              , r = "uninitialized";
            try {
                r = e.dataTransfer.effectAllowed.toLowerCase()
            } catch (e) {}
            var o = "none";
            return n && t.indexOf(r) >= 0 ? o = "copy" : i.indexOf(r) >= 0 ? o = "move" : t.indexOf(r) >= 0 && (o = "copy"),
            o
        }
        var f = e.editor
          , b = r.createElement("img");
        b.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        s.isOpera && (b.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
        var v = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
        v.forEach(function(t) {
            e[t] = this[t]
        }, this),
        f.addEventListener("mousedown", this.onMouseDown.bind(e));
        var w, C, y, S, _, k, x, A, E, I, L, T = f.container, D = 0;
        this.onDragStart = function(e) {
            if (this.cancelDrag || !T.draggable) {
                var t = this;
                return setTimeout(function() {
                    t.startSelect(),
                    t.captureMouse(e)
                }, 0),
                e.preventDefault()
            }
            _ = f.getSelectionRange();
            var i = e.dataTransfer;
            i.effectAllowed = f.getReadOnly() ? "copy" : "copyMove",
            s.isOpera && (f.container.appendChild(b),
            b.scrollTop = 0),
            i.setDragImage && i.setDragImage(b, 0, 0),
            s.isOpera && f.container.removeChild(b),
            i.clearData(),
            i.setData("Text", f.session.getTextRange()),
            A = !0,
            this.setState("drag")
        }
        ,
        this.onDragEnd = function(e) {
            if (T.draggable = !1,
            A = !1,
            this.setState(null),
            !f.getReadOnly()) {
                var t = e.dataTransfer.dropEffect;
                !x && "move" == t && f.session.remove(f.getSelectionRange()),
                f.renderer.$cursorLayer.setBlinking(!0)
            }
            this.editor.unsetStyle("ace_dragging"),
            this.editor.renderer.setCursorStyle("")
        }
        ,
        this.onDragEnter = function(e) {
            return !f.getReadOnly() && g(e.dataTransfer) ? (C = e.clientX,
            y = e.clientY,
            w || d(),
            D++,
            e.dataTransfer.dropEffect = x = m(e),
            o.preventDefault(e)) : void 0
        }
        ,
        this.onDragOver = function(e) {
            return !f.getReadOnly() && g(e.dataTransfer) ? (C = e.clientX,
            y = e.clientY,
            w || (d(),
            D++),
            null !== P && (P = null),
            e.dataTransfer.dropEffect = x = m(e),
            o.preventDefault(e)) : void 0
        }
        ,
        this.onDragLeave = function(e) {
            return D--,
            0 >= D && w ? (u(),
            x = null,
            o.preventDefault(e)) : void 0
        }
        ,
        this.onDrop = function(e) {
            if (k) {
                var t = e.dataTransfer;
                if (A)
                    switch (x) {
                    case "move":
                        _ = _.contains(k.row, k.column) ? {
                            start: k,
                            end: k
                        } : f.moveText(_, k);
                        break;
                    case "copy":
                        _ = f.moveText(_, k, !0)
                    }
                else {
                    var i = t.getData("Text");
                    _ = {
                        start: k,
                        end: f.session.insert(k, i)
                    },
                    f.focus(),
                    x = null
                }
                return u(),
                o.preventDefault(e)
            }
        }
        ,
        o.addListener(T, "dragstart", this.onDragStart.bind(e)),
        o.addListener(T, "dragend", this.onDragEnd.bind(e)),
        o.addListener(T, "dragenter", this.onDragEnter.bind(e)),
        o.addListener(T, "dragover", this.onDragOver.bind(e)),
        o.addListener(T, "dragleave", this.onDragLeave.bind(e)),
        o.addListener(T, "drop", this.onDrop.bind(e));
        var P = null
    }
    function n(e, t, i, n) {
        return Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - t, 2))
    }
    var r = e("../lib/dom")
      , o = e("../lib/event")
      , s = e("../lib/useragent")
      , a = 200
      , l = 200
      , c = 5;
    (function() {
        this.dragWait = function() {
            var e = Date.now() - this.mousedownEvent.time;
            e > this.editor.getDragDelay() && this.startDrag()
        }
        ,
        this.dragWaitEnd = function() {
            var e = this.editor.container;
            e.draggable = !1,
            this.startSelect(this.mousedownEvent.getDocumentPosition()),
            this.selectEnd()
        }
        ,
        this.dragReadyEnd = function() {
            this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()),
            this.editor.unsetStyle("ace_dragging"),
            this.editor.renderer.setCursorStyle(""),
            this.dragWaitEnd()
        }
        ,
        this.startDrag = function() {
            this.cancelDrag = !1;
            var e = this.editor
              , t = e.container;
            t.draggable = !0,
            e.renderer.$cursorLayer.setBlinking(!1),
            e.setStyle("ace_dragging");
            var i = s.isWin ? "default" : "move";
            e.renderer.setCursorStyle(i),
            this.setState("dragReady")
        }
        ,
        this.onMouseDrag = function() {
            var e = this.editor.container;
            if (s.isIE && "dragReady" == this.state) {
                var t = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                t > 3 && e.dragDrop()
            }
            if ("dragWait" === this.state) {
                var t = n(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
                t > 0 && (e.draggable = !1,
                this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }
        }
        ,
        this.onMouseDown = function(e) {
            if (this.$dragEnabled) {
                this.mousedownEvent = e;
                var t = this.editor
                  , i = e.inSelection()
                  , n = e.getButton()
                  , r = e.domEvent.detail || 1;
                if (1 === r && 0 === n && i) {
                    if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey()))
                        return;
                    this.mousedownEvent.time = Date.now();
                    var o = e.domEvent.target || e.domEvent.srcElement;
                    if ("unselectable"in o && (o.unselectable = "on"),
                    t.getDragDelay()) {
                        if (s.isWebKit) {
                            this.cancelDrag = !0;
                            var a = t.container;
                            a.draggable = !0
                        }
                        this.setState("dragWait")
                    } else
                        this.startDrag();
                    this.captureMouse(e, this.onMouseDrag.bind(this)),
                    e.defaultPrevented = !0
                }
            }
        }
    }
    ).call(i.prototype),
    t.DragdropHandler = i
}),
define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    var i = e("./dom");
    t.get = function(e, t) {
        var i = new XMLHttpRequest;
        i.open("GET", e, !0),
        i.onreadystatechange = function() {
            4 === i.readyState && t(i.responseText)
        }
        ,
        i.send(null)
    }
    ,
    t.loadScript = function(e, t) {
        var n = i.getDocumentHead()
          , r = document.createElement("script");
        r.src = e,
        n.appendChild(r),
        r.onload = r.onreadystatechange = function(e, i) {
            (i || !r.readyState || "loaded" == r.readyState || "complete" == r.readyState) && (r = r.onload = r.onreadystatechange = null,
            i || t())
        }
    }
    ,
    t.qualifyURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t.href
    }
}),
define("ace/lib/event_emitter", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = {}
      , n = function() {
        this.propagationStopped = !0
    }
      , r = function() {
        this.defaultPrevented = !0
    };
    i._emit = i._dispatchEvent = function(e, t) {
        this._eventRegistry || (this._eventRegistry = {}),
        this._defaultHandlers || (this._defaultHandlers = {});
        var i = this._eventRegistry[e] || []
          , o = this._defaultHandlers[e];
        if (i.length || o) {
            "object" == typeof t && t || (t = {}),
            t.type || (t.type = e),
            t.stopPropagation || (t.stopPropagation = n),
            t.preventDefault || (t.preventDefault = r),
            i = i.slice();
            for (var s = 0; s < i.length && (i[s](t, this),
            !t.propagationStopped); s++)
                ;
            return o && !t.defaultPrevented ? o(t, this) : void 0
        }
    }
    ,
    i._signal = function(e, t) {
        var i = (this._eventRegistry || {})[e];
        if (i) {
            i = i.slice();
            for (var n = 0; n < i.length; n++)
                i[n](t, this)
        }
    }
    ,
    i.once = function(e, t) {
        var i = this;
        t && this.addEventListener(e, function n() {
            i.removeEventListener(e, n),
            t.apply(null, arguments)
        })
    }
    ,
    i.setDefaultHandler = function(e, t) {
        var i = this._defaultHandlers;
        if (i || (i = this._defaultHandlers = {
            _disabled_: {}
        }),
        i[e]) {
            var n = i[e]
              , r = i._disabled_[e];
            r || (i._disabled_[e] = r = []),
            r.push(n);
            var o = r.indexOf(t);
            -1 != o && r.splice(o, 1)
        }
        i[e] = t
    }
    ,
    i.removeDefaultHandler = function(e, t) {
        var i = this._defaultHandlers;
        if (i) {
            var n = i._disabled_[e];
            if (i[e] == t) {
                {
                    i[e]
                }
                n && this.setDefaultHandler(e, n.pop())
            } else if (n) {
                var r = n.indexOf(t);
                -1 != r && n.splice(r, 1)
            }
        }
    }
    ,
    i.on = i.addEventListener = function(e, t, i) {
        this._eventRegistry = this._eventRegistry || {};
        var n = this._eventRegistry[e];
        return n || (n = this._eventRegistry[e] = []),
        -1 == n.indexOf(t) && n[i ? "unshift" : "push"](t),
        t
    }
    ,
    i.off = i.removeListener = i.removeEventListener = function(e, t) {
        this._eventRegistry = this._eventRegistry || {};
        var i = this._eventRegistry[e];
        if (i) {
            var n = i.indexOf(t);
            -1 !== n && i.splice(n, 1)
        }
    }
    ,
    i.removeAllListeners = function(e) {
        this._eventRegistry && (this._eventRegistry[e] = [])
    }
    ,
    t.EventEmitter = i
}),
define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "no use strict";
    function i() {
        "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
    }
    function n(e, t) {
        var i = new Error(e);
        i.data = t,
        "object" == typeof console && console.error && console.error(i),
        setTimeout(function() {
            throw i
        })
    }
    var r = e("./oop")
      , o = e("./event_emitter").EventEmitter
      , s = {
        setOptions: function(e) {
            Object.keys(e).forEach(function(t) {
                this.setOption(t, e[t])
            }, this)
        },
        getOptions: function(e) {
            var t = {};
            return e ? Array.isArray(e) || (t = e,
            e = Object.keys(t)) : e = Object.keys(this.$options),
            e.forEach(function(e) {
                t[e] = this.getOption(e)
            }, this),
            t
        },
        setOption: function(e, t) {
            if (this["$" + e] !== t) {
                var n = this.$options[e];
                return n ? n.forwardTo ? this[n.forwardTo] && this[n.forwardTo].setOption(e, t) : (n.handlesSet || (this["$" + e] = t),
                void (n && n.set && n.set.call(this, t))) : i('misspelled option "' + e + '"')
            }
        },
        getOption: function(e) {
            var t = this.$options[e];
            return t ? t.forwardTo ? this[t.forwardTo] && this[t.forwardTo].getOption(e) : t && t.get ? t.get.call(this) : this["$" + e] : i('misspelled option "' + e + '"')
        }
    }
      , a = function() {
        this.$defaultOptions = {}
    };
    (function() {
        r.implement(this, o),
        this.defineOptions = function(e, t, i) {
            return e.$options || (this.$defaultOptions[t] = e.$options = {}),
            Object.keys(i).forEach(function(t) {
                var n = i[t];
                "string" == typeof n && (n = {
                    forwardTo: n
                }),
                n.name || (n.name = t),
                e.$options[n.name] = n,
                "initialValue"in n && (e["$" + n.name] = n.initialValue)
            }),
            r.implement(e, s),
            this
        }
        ,
        this.resetOptions = function(e) {
            Object.keys(e.$options).forEach(function(t) {
                var i = e.$options[t];
                "value"in i && e.setOption(t, i.value)
            })
        }
        ,
        this.setDefaultValue = function(e, t, i) {
            var n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
            n[t] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, t, i) : n[t].value = i)
        }
        ,
        this.setDefaultValues = function(e, t) {
            Object.keys(t).forEach(function(i) {
                this.setDefaultValue(e, i, t[i])
            }, this)
        }
        ,
        this.warn = i,
        this.reportError = n
    }
    ).call(a.prototype),
    t.AppConfig = a
}),
define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function(e, t, i) {
    "no use strict";
    function n(n) {
        if (l && l.document) {
            c.packaged = n || e.packaged || i.packaged || l.define && define.packaged;
            for (var o = {}, s = "", a = document.currentScript || document._currentScript, h = a && a.ownerDocument || document, d = h.getElementsByTagName("script"), u = 0; u < d.length; u++) {
                var p = d[u]
                  , g = p.src || p.getAttribute("src");
                if (g) {
                    for (var m = p.attributes, f = 0, b = m.length; b > f; f++) {
                        var v = m[f];
                        0 === v.name.indexOf("data-ace-") && (o[r(v.name.replace(/^data-ace-/, ""))] = v.value)
                    }
                    var w = g.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                    w && (s = w[1])
                }
            }
            s && (o.base = o.base || s,
            o.packaged = !0),
            o.basePath = o.base,
            o.workerPath = o.workerPath || o.base,
            o.modePath = o.modePath || o.base,
            o.themePath = o.themePath || o.base,
            delete o.base;
            for (var C in o)
                "undefined" != typeof o[C] && t.set(C, o[C])
        }
    }
    function r(e) {
        return e.replace(/-(.)/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    var o = e("./lib/lang")
      , s = (e("./lib/oop"),
    e("./lib/net"))
      , a = e("./lib/app_config").AppConfig;
    i.exports = t = new a;
    var l = function() {
        return this || "undefined" != typeof window && window
    }()
      , c = {
        packaged: !1,
        workerPath: null,
        modePath: null,
        themePath: null,
        basePath: "",
        suffix: ".js",
        $moduleUrls: {}
    };
    t.get = function(e) {
        if (!c.hasOwnProperty(e))
            throw new Error("Unknown config key: " + e);
        return c[e]
    }
    ,
    t.set = function(e, t) {
        if (!c.hasOwnProperty(e))
            throw new Error("Unknown config key: " + e);
        c[e] = t
    }
    ,
    t.all = function() {
        return o.copyObject(c)
    }
    ,
    t.moduleUrl = function(e, t) {
        if (c.$moduleUrls[e])
            return c.$moduleUrls[e];
        var i = e.split("/");
        t = t || i[i.length - 2] || "";
        var n = "snippets" == t ? "/" : "-"
          , r = i[i.length - 1];
        if ("worker" == t && "-" == n) {
            var o = new RegExp("^" + t + "[\\-_]|[\\-_]" + t + "$","g");
            r = r.replace(o, "")
        }
        (!r || r == t) && i.length > 1 && (r = i[i.length - 2]);
        var s = c[t + "Path"];
        return null == s ? s = c.basePath : "/" == n && (t = n = ""),
        s && "/" != s.slice(-1) && (s += "/"),
        s + t + n + r + this.get("suffix")
    }
    ,
    t.setModuleUrl = function(e, t) {
        return c.$moduleUrls[e] = t
    }
    ,
    t.$loading = {},
    t.loadModule = function(i, n) {
        var r, o;
        Array.isArray(i) && (o = i[0],
        i = i[1]);
        try {
            r = e(i)
        } catch (a) {}
        if (r && !t.$loading[i])
            return n && n(r);
        if (t.$loading[i] || (t.$loading[i] = []),
        t.$loading[i].push(n),
        !(t.$loading[i].length > 1)) {
            var l = function() {
                e([i], function(e) {
                    t._emit("load.module", {
                        name: i,
                        module: e
                    });
                    var n = t.$loading[i];
                    t.$loading[i] = null,
                    n.forEach(function(t) {
                        t && t(e)
                    })
                })
            };
            return t.get("packaged") ? void s.loadScript(t.moduleUrl(i, o), l) : l()
        }
    }
    ,
    t.init = n
}),
define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function(e, t) {
    "use strict";
    var i = e("../lib/event")
      , n = e("../lib/useragent")
      , r = e("./default_handlers").DefaultHandlers
      , o = e("./default_gutter_handler").GutterHandler
      , s = e("./mouse_event").MouseEvent
      , a = e("./dragdrop_handler").DragdropHandler
      , l = e("../config")
      , c = function(e) {
        var t = this;
        this.editor = e,
        new r(this),
        new o(this),
        new a(this);
        var s = function() {
            var t = !document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement());
            t && window.focus(),
            e.focus()
        }
          , l = e.renderer.getMouseEventTarget();
        i.addListener(l, "click", this.onMouseEvent.bind(this, "click")),
        i.addListener(l, "mousemove", this.onMouseMove.bind(this, "mousemove")),
        i.addMultiMouseDownListener([l, e.renderer.scrollBarV && e.renderer.scrollBarV.inner, e.renderer.scrollBarH && e.renderer.scrollBarH.inner, e.textInput && e.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"),
        i.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel")),
        i.addTouchMoveListener(e.container, this.onTouchMove.bind(this, "touchmove"));
        var c = e.renderer.$gutter;
        i.addListener(c, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")),
        i.addListener(c, "click", this.onMouseEvent.bind(this, "gutterclick")),
        i.addListener(c, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")),
        i.addListener(c, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")),
        i.addListener(l, "mousedown", s),
        i.addListener(c, "mousedown", s),
        n.isIE && e.renderer.scrollBarV && (i.addListener(e.renderer.scrollBarV.element, "mousedown", s),
        i.addListener(e.renderer.scrollBarH.element, "mousedown", s)),
        e.on("mousemove", function(i) {
            if (!t.state && !t.$dragDelay && t.$dragEnabled) {
                var n = e.renderer.screenToTextCoordinates(i.x, i.y)
                  , r = e.session.selection.getRange()
                  , o = e.renderer;
                o.setCursorStyle(!r.isEmpty() && r.insideStart(n.row, n.column) ? "default" : "")
            }
        })
    };
    (function() {
        this.onMouseEvent = function(e, t) {
            this.editor._emit(e, new s(t,this.editor))
        }
        ,
        this.onMouseMove = function(e, t) {
            var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
            i && i.length && this.editor._emit(e, new s(t,this.editor))
        }
        ,
        this.onMouseWheel = function(e, t) {
            var i = new s(t,this.editor);
            i.speed = 2 * this.$scrollSpeed,
            i.wheelX = t.wheelX,
            i.wheelY = t.wheelY,
            this.editor._emit(e, i)
        }
        ,
        this.onTouchMove = function(e, t) {
            var i = new s(t,this.editor);
            i.speed = 1,
            i.wheelX = t.wheelX,
            i.wheelY = t.wheelY,
            this.editor._emit(e, i)
        }
        ,
        this.setState = function(e) {
            this.state = e
        }
        ,
        this.captureMouse = function(e, t) {
            this.x = e.x,
            this.y = e.y,
            this.isMousePressed = !0;
            var r = this.editor.renderer;
            r.$keepTextAreaAtCursor && (r.$keepTextAreaAtCursor = null);
            var o = this
              , a = function(e) {
                return e ? n.isWebKit && !e.which && o.releaseMouse ? o.releaseMouse() : (o.x = e.clientX,
                o.y = e.clientY,
                t && t(e),
                o.mouseEvent = new s(e,o.editor),
                o.$mouseMoved = !0,
                void 0) : void 0
            }
              , l = function(e) {
                clearInterval(h),
                c(),
                o[o.state + "End"] && o[o.state + "End"](e),
                o.state = "",
                null == r.$keepTextAreaAtCursor && (r.$keepTextAreaAtCursor = !0,
                r.$moveTextAreaToCursor()),
                o.isMousePressed = !1,
                o.$onCaptureMouseMove = o.releaseMouse = null,
                e && o.onMouseEvent("mouseup", e)
            }
              , c = function() {
                o[o.state] && o[o.state](),
                o.$mouseMoved = !1
            };
            if (n.isOldIE && "dblclick" == e.domEvent.type)
                return setTimeout(function() {
                    l(e)
                });
            o.$onCaptureMouseMove = a,
            o.releaseMouse = i.capture(this.editor.container, a, l);
            var h = setInterval(c, 20)
        }
        ,
        this.releaseMouse = null,
        this.cancelContextMenu = function() {
            var e = function(t) {
                t && t.domEvent && "contextmenu" != t.domEvent.type || (this.editor.off("nativecontextmenu", e),
                t && t.domEvent && i.stopEvent(t.domEvent))
            }
            .bind(this);
            setTimeout(e, 10),
            this.editor.on("nativecontextmenu", e)
        }
    }
    ).call(c.prototype),
    l.defineOptions(c.prototype, "mouseHandler", {
        scrollSpeed: {
            initialValue: 2
        },
        dragDelay: {
            initialValue: n.isMac ? 150 : 0
        },
        dragEnabled: {
            initialValue: !0
        },
        focusTimout: {
            initialValue: 0
        },
        tooltipFollowsMouse: {
            initialValue: !0
        }
    }),
    t.MouseHandler = c
}),
define("ace/mouse/fold_handler", ["require", "exports", "module"], function(e, t) {
    "use strict";
    function i(e) {
        e.on("click", function(t) {
            var i = t.getDocumentPosition()
              , n = e.session
              , r = n.getFoldAt(i.row, i.column, 1);
            r && (t.getAccelKey() ? n.removeFold(r) : n.expandFold(r),
            t.stop())
        }),
        e.on("gutterclick", function(t) {
            var i = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == i) {
                var n = t.getDocumentPosition().row
                  , r = e.session;
                r.foldWidgets && r.foldWidgets[n] && e.session.onFoldWidgetClick(n, t),
                e.isFocused() || e.focus(),
                t.stop()
            }
        }),
        e.on("gutterdblclick", function(t) {
            var i = e.renderer.$gutterLayer.getRegion(t);
            if ("foldWidgets" == i) {
                var n = t.getDocumentPosition().row
                  , r = e.session
                  , o = r.getParentFoldRangeData(n, !0)
                  , s = o.range || o.firstRange;
                if (s) {
                    n = s.start.row;
                    var a = r.getFoldAt(n, r.getLine(n).length, 1);
                    a ? r.removeFold(a) : (r.addFold("...", s),
                    e.renderer.scrollCursorIntoView({
                        row: s.start.row,
                        column: 0
                    }))
                }
                t.stop()
            }
        })
    }
    t.FoldHandler = i
}),
define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(e, t) {
    "use strict";
    var i = e("../lib/keys")
      , n = e("../lib/event")
      , r = function(e) {
        this.$editor = e,
        this.$data = {
            editor: e
        },
        this.$handlers = [],
        this.setDefaultHandler(e.commands)
    };
    (function() {
        this.setDefaultHandler = function(e) {
            this.removeKeyboardHandler(this.$defaultHandler),
            this.$defaultHandler = e,
            this.addKeyboardHandler(e, 0)
        }
        ,
        this.setKeyboardHandler = function(e) {
            var t = this.$handlers;
            if (t[t.length - 1] != e) {
                for (; t[t.length - 1] && t[t.length - 1] != this.$defaultHandler; )
                    this.removeKeyboardHandler(t[t.length - 1]);
                this.addKeyboardHandler(e, 1)
            }
        }
        ,
        this.addKeyboardHandler = function(e, t) {
            if (e) {
                "function" == typeof e && !e.handleKeyboard && (e.handleKeyboard = e);
                var i = this.$handlers.indexOf(e);
                -1 != i && this.$handlers.splice(i, 1),
                void 0 == t ? this.$handlers.push(e) : this.$handlers.splice(t, 0, e),
                -1 == i && e.attach && e.attach(this.$editor)
            }
        }
        ,
        this.removeKeyboardHandler = function(e) {
            var t = this.$handlers.indexOf(e);
            return -1 == t ? !1 : (this.$handlers.splice(t, 1),
            e.detach && e.detach(this.$editor),
            !0)
        }
        ,
        this.getKeyboardHandler = function() {
            return this.$handlers[this.$handlers.length - 1]
        }
        ,
        this.getStatusText = function() {
            var e = this.$data
              , t = e.editor;
            return this.$handlers.map(function(i) {
                return i.getStatusText && i.getStatusText(t, e) || ""
            }).filter(Boolean).join(" ")
        }
        ,
        this.$callKeyboardHandlers = function(e, t, i, r) {
            for (var o, s = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && (o = this.$handlers[l].handleKeyboard(this.$data, e, t, i, r),
            !(o && o.command && (s = "null" == o.command ? !0 : a.exec(o.command, this.$editor, o.args, r),
            s && r && -1 != e && 1 != o.passEvent && 1 != o.command.passEvent && n.stopEvent(r),
            s))); )
                ;
            return !s && -1 == e && (o = {
                command: "insertstring"
            },
            s = a.exec("insertstring", this.$editor, t)),
            s && this.$editor._signal && this.$editor._signal("keyboardActivity", o),
            s
        }
        ,
        this.onCommandKey = function(e, t, n) {
            var r = i.keyCodeToString(n);
            this.$callKeyboardHandlers(t, r, n, e)
        }
        ,
        this.onTextInput = function(e) {
            this.$callKeyboardHandlers(-1, e)
        }
    }
    ).call(r.prototype),
    t.KeyBinding = r
}),
define("ace/range", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = function(e, t) {
        return e.row - t.row || e.column - t.column
    }
      , n = function(e, t, i, n) {
        this.start = {
            row: e,
            column: t
        },
        this.end = {
            row: i,
            column: n
        }
    };
    (function() {
        this.isEqual = function(e) {
            return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column
        }
        ,
        this.toString = function() {
            return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
        }
        ,
        this.contains = function(e, t) {
            return 0 == this.compare(e, t)
        }
        ,
        this.compareRange = function(e) {
            var t, i = e.end, n = e.start;
            return t = this.compare(i.row, i.column),
            1 == t ? (t = this.compare(n.row, n.column),
            1 == t ? 2 : 0 == t ? 1 : 0) : -1 == t ? -2 : (t = this.compare(n.row, n.column),
            -1 == t ? -1 : 1 == t ? 42 : 0)
        }
        ,
        this.comparePoint = function(e) {
            return this.compare(e.row, e.column)
        }
        ,
        this.containsRange = function(e) {
            return 0 == this.comparePoint(e.start) && 0 == this.comparePoint(e.end)
        }
        ,
        this.intersects = function(e) {
            var t = this.compareRange(e);
            return -1 == t || 0 == t || 1 == t
        }
        ,
        this.isEnd = function(e, t) {
            return this.end.row == e && this.end.column == t
        }
        ,
        this.isStart = function(e, t) {
            return this.start.row == e && this.start.column == t
        }
        ,
        this.setStart = function(e, t) {
            "object" == typeof e ? (this.start.column = e.column,
            this.start.row = e.row) : (this.start.row = e,
            this.start.column = t)
        }
        ,
        this.setEnd = function(e, t) {
            "object" == typeof e ? (this.end.column = e.column,
            this.end.row = e.row) : (this.end.row = e,
            this.end.column = t)
        }
        ,
        this.inside = function(e, t) {
            return 0 == this.compare(e, t) ? this.isEnd(e, t) || this.isStart(e, t) ? !1 : !0 : !1
        }
        ,
        this.insideStart = function(e, t) {
            return 0 == this.compare(e, t) ? this.isEnd(e, t) ? !1 : !0 : !1
        }
        ,
        this.insideEnd = function(e, t) {
            return 0 == this.compare(e, t) ? this.isStart(e, t) ? !1 : !0 : !1
        }
        ,
        this.compare = function(e, t) {
            return this.isMultiLine() || e !== this.start.row ? e < this.start.row ? -1 : e > this.end.row ? 1 : this.start.row === e ? t >= this.start.column ? 0 : -1 : this.end.row === e ? t <= this.end.column ? 0 : 1 : 0 : t < this.start.column ? -1 : t > this.end.column ? 1 : 0
        }
        ,
        this.compareStart = function(e, t) {
            return this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }
        ,
        this.compareEnd = function(e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.compare(e, t)
        }
        ,
        this.compareInside = function(e, t) {
            return this.end.row == e && this.end.column == t ? 1 : this.start.row == e && this.start.column == t ? -1 : this.compare(e, t)
        }
        ,
        this.clipRows = function(e, t) {
            if (this.end.row > t)
                var i = {
                    row: t + 1,
                    column: 0
                };
            else if (this.end.row < e)
                var i = {
                    row: e,
                    column: 0
                };
            if (this.start.row > t)
                var r = {
                    row: t + 1,
                    column: 0
                };
            else if (this.start.row < e)
                var r = {
                    row: e,
                    column: 0
                };
            return n.fromPoints(r || this.start, i || this.end)
        }
        ,
        this.extend = function(e, t) {
            var i = this.compare(e, t);
            if (0 == i)
                return this;
            if (-1 == i)
                var r = {
                    row: e,
                    column: t
                };
            else
                var o = {
                    row: e,
                    column: t
                };
            return n.fromPoints(r || this.start, o || this.end)
        }
        ,
        this.isEmpty = function() {
            return this.start.row === this.end.row && this.start.column === this.end.column
        }
        ,
        this.isMultiLine = function() {
            return this.start.row !== this.end.row
        }
        ,
        this.clone = function() {
            return n.fromPoints(this.start, this.end)
        }
        ,
        this.collapseRows = function() {
            return 0 == this.end.column ? new n(this.start.row,0,Math.max(this.start.row, this.end.row - 1),0) : new n(this.start.row,0,this.end.row,0)
        }
        ,
        this.toScreenRange = function(e) {
            var t = e.documentToScreenPosition(this.start)
              , i = e.documentToScreenPosition(this.end);
            return new n(t.row,t.column,i.row,i.column)
        }
        ,
        this.moveBy = function(e, t) {
            this.start.row += e,
            this.start.column += t,
            this.end.row += e,
            this.end.column += t
        }
    }
    ).call(n.prototype),
    n.fromPoints = function(e, t) {
        return new n(e.row,e.column,t.row,t.column)
    }
    ,
    n.comparePoints = i,
    n.comparePoints = function(e, t) {
        return e.row - t.row || e.column - t.column
    }
    ,
    t.Range = n
}),
define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/lang")
      , r = e("./lib/event_emitter").EventEmitter
      , o = e("./range").Range
      , s = function(e) {
        this.session = e,
        this.doc = e.getDocument(),
        this.clearSelection(),
        this.lead = this.selectionLead = this.doc.createAnchor(0, 0),
        this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
        var t = this;
        this.lead.on("change", function(e) {
            t._emit("changeCursor"),
            t.$isEmpty || t._emit("changeSelection"),
            !t.$keepDesiredColumnOnChange && e.old.column != e.value.column && (t.$desiredColumn = null)
        }),
        this.selectionAnchor.on("change", function() {
            t.$isEmpty || t._emit("changeSelection")
        })
    };
    (function() {
        i.implement(this, r),
        this.isEmpty = function() {
            return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
        }
        ,
        this.isMultiLine = function() {
            return this.isEmpty() ? !1 : this.getRange().isMultiLine()
        }
        ,
        this.getCursor = function() {
            return this.lead.getPosition()
        }
        ,
        this.setSelectionAnchor = function(e, t) {
            this.anchor.setPosition(e, t),
            this.$isEmpty && (this.$isEmpty = !1,
            this._emit("changeSelection"))
        }
        ,
        this.getSelectionAnchor = function() {
            return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
        }
        ,
        this.getSelectionLead = function() {
            return this.lead.getPosition()
        }
        ,
        this.shiftSelection = function(e) {
            if (this.$isEmpty)
                return void this.moveCursorTo(this.lead.row, this.lead.column + e);
            var t = this.getSelectionAnchor()
              , i = this.getSelectionLead()
              , n = this.isBackwards();
            (!n || 0 !== t.column) && this.setSelectionAnchor(t.row, t.column + e),
            (n || 0 !== i.column) && this.$moveSelection(function() {
                this.moveCursorTo(i.row, i.column + e)
            })
        }
        ,
        this.isBackwards = function() {
            var e = this.anchor
              , t = this.lead;
            return e.row > t.row || e.row == t.row && e.column > t.column
        }
        ,
        this.getRange = function() {
            var e = this.anchor
              , t = this.lead;
            return this.isEmpty() ? o.fromPoints(t, t) : this.isBackwards() ? o.fromPoints(t, e) : o.fromPoints(e, t)
        }
        ,
        this.clearSelection = function() {
            this.$isEmpty || (this.$isEmpty = !0,
            this._emit("changeSelection"))
        }
        ,
        this.selectAll = function() {
            var e = this.doc.getLength() - 1;
            this.setSelectionAnchor(0, 0),
            this.moveCursorTo(e, this.doc.getLine(e).length)
        }
        ,
        this.setRange = this.setSelectionRange = function(e, t) {
            t ? (this.setSelectionAnchor(e.end.row, e.end.column),
            this.selectTo(e.start.row, e.start.column)) : (this.setSelectionAnchor(e.start.row, e.start.column),
            this.selectTo(e.end.row, e.end.column)),
            this.getRange().isEmpty() && (this.$isEmpty = !0),
            this.$desiredColumn = null
        }
        ,
        this.$moveSelection = function(e) {
            var t = this.lead;
            this.$isEmpty && this.setSelectionAnchor(t.row, t.column),
            e.call(this)
        }
        ,
        this.selectTo = function(e, t) {
            this.$moveSelection(function() {
                this.moveCursorTo(e, t)
            })
        }
        ,
        this.selectToPosition = function(e) {
            this.$moveSelection(function() {
                this.moveCursorToPosition(e)
            })
        }
        ,
        this.moveTo = function(e, t) {
            this.clearSelection(),
            this.moveCursorTo(e, t)
        }
        ,
        this.moveToPosition = function(e) {
            this.clearSelection(),
            this.moveCursorToPosition(e)
        }
        ,
        this.selectUp = function() {
            this.$moveSelection(this.moveCursorUp)
        }
        ,
        this.selectDown = function() {
            this.$moveSelection(this.moveCursorDown)
        }
        ,
        this.selectRight = function() {
            this.$moveSelection(this.moveCursorRight)
        }
        ,
        this.selectLeft = function() {
            this.$moveSelection(this.moveCursorLeft)
        }
        ,
        this.selectLineStart = function() {
            this.$moveSelection(this.moveCursorLineStart)
        }
        ,
        this.selectLineEnd = function() {
            this.$moveSelection(this.moveCursorLineEnd)
        }
        ,
        this.selectFileEnd = function() {
            this.$moveSelection(this.moveCursorFileEnd)
        }
        ,
        this.selectFileStart = function() {
            this.$moveSelection(this.moveCursorFileStart)
        }
        ,
        this.selectWordRight = function() {
            this.$moveSelection(this.moveCursorWordRight)
        }
        ,
        this.selectWordLeft = function() {
            this.$moveSelection(this.moveCursorWordLeft)
        }
        ,
        this.getWordRange = function(e, t) {
            if ("undefined" == typeof t) {
                var i = e || this.lead;
                e = i.row,
                t = i.column
            }
            return this.session.getWordRange(e, t)
        }
        ,
        this.selectWord = function() {
            this.setSelectionRange(this.getWordRange())
        }
        ,
        this.selectAWord = function() {
            var e = this.getCursor()
              , t = this.session.getAWordRange(e.row, e.column);
            this.setSelectionRange(t)
        }
        ,
        this.getLineRange = function(e, t) {
            var i, n = "number" == typeof e ? e : this.lead.row, r = this.session.getFoldLine(n);
            return r ? (n = r.start.row,
            i = r.end.row) : i = n,
            t === !0 ? new o(n,0,i,this.session.getLine(i).length) : new o(n,0,i + 1,0)
        }
        ,
        this.selectLine = function() {
            this.setSelectionRange(this.getLineRange())
        }
        ,
        this.moveCursorUp = function() {
            this.moveCursorBy(-1, 0)
        }
        ,
        this.moveCursorDown = function() {
            this.moveCursorBy(1, 0)
        }
        ,
        this.moveCursorLeft = function() {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, -1))
                this.moveCursorTo(e.start.row, e.start.column);
            else if (0 === t.column)
                t.row > 0 && this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
            else {
                var i = this.session.getTabSize();
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column - i, t.column).split(" ").length - 1 == i ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
            }
        }
        ,
        this.moveCursorRight = function() {
            var e, t = this.lead.getPosition();
            if (e = this.session.getFoldAt(t.row, t.column, 1))
                this.moveCursorTo(e.end.row, e.end.column);
            else if (this.lead.column == this.doc.getLine(this.lead.row).length)
                this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
            else {
                var i = this.session.getTabSize()
                  , t = this.lead;
                this.session.isTabStop(t) && this.doc.getLine(t.row).slice(t.column, t.column + i).split(" ").length - 1 == i ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
            }
        }
        ,
        this.moveCursorLineStart = function() {
            var e = this.lead.row
              , t = this.lead.column
              , i = this.session.documentToScreenRow(e, t)
              , n = this.session.screenToDocumentPosition(i, 0)
              , r = this.session.getDisplayLine(e, null, n.row, n.column)
              , o = r.match(/^\s*/);
            o[0].length != t && !this.session.$useEmacsStyleLineStart && (n.column += o[0].length),
            this.moveCursorToPosition(n)
        }
        ,
        this.moveCursorLineEnd = function() {
            var e = this.lead
              , t = this.session.getDocumentLastRowColumnPosition(e.row, e.column);
            if (this.lead.column == t.column) {
                var i = this.session.getLine(t.row);
                if (t.column == i.length) {
                    var n = i.search(/\s+$/);
                    n > 0 && (t.column = n)
                }
            }
            this.moveCursorTo(t.row, t.column)
        }
        ,
        this.moveCursorFileEnd = function() {
            var e = this.doc.getLength() - 1
              , t = this.doc.getLine(e).length;
            this.moveCursorTo(e, t)
        }
        ,
        this.moveCursorFileStart = function() {
            this.moveCursorTo(0, 0)
        }
        ,
        this.moveCursorLongWordRight = function() {
            var e, t = this.lead.row, i = this.lead.column, n = this.doc.getLine(t), r = n.substring(i);
            this.session.nonTokenRe.lastIndex = 0,
            this.session.tokenRe.lastIndex = 0;
            var o = this.session.getFoldAt(t, i, 1);
            return o ? void this.moveCursorTo(o.end.row, o.end.column) : ((e = this.session.nonTokenRe.exec(r)) && (i += this.session.nonTokenRe.lastIndex,
            this.session.nonTokenRe.lastIndex = 0,
            r = n.substring(i)),
            i >= n.length ? (this.moveCursorTo(t, n.length),
            this.moveCursorRight(),
            t < this.doc.getLength() - 1 && this.moveCursorWordRight(),
            void 0) : ((e = this.session.tokenRe.exec(r)) && (i += this.session.tokenRe.lastIndex,
            this.session.tokenRe.lastIndex = 0),
            void this.moveCursorTo(t, i)))
        }
        ,
        this.moveCursorLongWordLeft = function() {
            var e, t = this.lead.row, i = this.lead.column;
            if (e = this.session.getFoldAt(t, i, -1))
                return void this.moveCursorTo(e.start.row, e.start.column);
            var r = this.session.getFoldStringAt(t, i, -1);
            null == r && (r = this.doc.getLine(t).substring(0, i));
            var o, s = n.stringReverse(r);
            return this.session.nonTokenRe.lastIndex = 0,
            this.session.tokenRe.lastIndex = 0,
            (o = this.session.nonTokenRe.exec(s)) && (i -= this.session.nonTokenRe.lastIndex,
            s = s.slice(this.session.nonTokenRe.lastIndex),
            this.session.nonTokenRe.lastIndex = 0),
            0 >= i ? (this.moveCursorTo(t, 0),
            this.moveCursorLeft(),
            t > 0 && this.moveCursorWordLeft(),
            void 0) : ((o = this.session.tokenRe.exec(s)) && (i -= this.session.tokenRe.lastIndex,
            this.session.tokenRe.lastIndex = 0),
            void this.moveCursorTo(t, i))
        }
        ,
        this.$shortWordEndIndex = function(e) {
            var t, i, n = 0, r = /\s/, o = this.session.tokenRe;
            if (o.lastIndex = 0,
            t = this.session.tokenRe.exec(e))
                n = this.session.tokenRe.lastIndex;
            else {
                for (; (i = e[n]) && r.test(i); )
                    n++;
                if (1 > n)
                    for (o.lastIndex = 0; (i = e[n]) && !o.test(i); )
                        if (o.lastIndex = 0,
                        n++,
                        r.test(i)) {
                            if (n > 2) {
                                n--;
                                break
                            }
                            for (; (i = e[n]) && r.test(i); )
                                n++;
                            if (n > 2)
                                break
                        }
            }
            return o.lastIndex = 0,
            n
        }
        ,
        this.moveCursorShortWordRight = function() {
            var e = this.lead.row
              , t = this.lead.column
              , i = this.doc.getLine(e)
              , n = i.substring(t)
              , r = this.session.getFoldAt(e, t, 1);
            if (r)
                return this.moveCursorTo(r.end.row, r.end.column);
            if (t == i.length) {
                var o = this.doc.getLength();
                do
                    e++,
                    n = this.doc.getLine(e);
                while (o > e && /^\s*$/.test(n));/^\s+/.test(n) || (n = ""),
                t = 0
            }
            var s = this.$shortWordEndIndex(n);
            this.moveCursorTo(e, t + s)
        }
        ,
        this.moveCursorShortWordLeft = function() {
            var e, t = this.lead.row, i = this.lead.column;
            if (e = this.session.getFoldAt(t, i, -1))
                return this.moveCursorTo(e.start.row, e.start.column);
            var r = this.session.getLine(t).substring(0, i);
            if (0 === i) {
                do
                    t--,
                    r = this.doc.getLine(t);
                while (t > 0 && /^\s*$/.test(r));i = r.length,
                /\s+$/.test(r) || (r = "")
            }
            var o = n.stringReverse(r)
              , s = this.$shortWordEndIndex(o);
            return this.moveCursorTo(t, i - s)
        }
        ,
        this.moveCursorWordRight = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
        }
        ,
        this.moveCursorWordLeft = function() {
            this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
        }
        ,
        this.moveCursorBy = function(e, t) {
            var i = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
            0 === t && (this.$desiredColumn ? i.column = this.$desiredColumn : this.$desiredColumn = i.column);
            var n = this.session.screenToDocumentPosition(i.row + e, i.column);
            0 !== e && 0 === t && n.row === this.lead.row && n.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[n.row] && (n.row > 0 || e > 0) && n.row++,
            this.moveCursorTo(n.row, n.column + t, 0 === t)
        }
        ,
        this.moveCursorToPosition = function(e) {
            this.moveCursorTo(e.row, e.column)
        }
        ,
        this.moveCursorTo = function(e, t, i) {
            var n = this.session.getFoldAt(e, t, 1);
            n && (e = n.start.row,
            t = n.start.column),
            this.$keepDesiredColumnOnChange = !0,
            this.lead.setPosition(e, t),
            this.$keepDesiredColumnOnChange = !1,
            i || (this.$desiredColumn = null)
        }
        ,
        this.moveCursorToScreen = function(e, t, i) {
            var n = this.session.screenToDocumentPosition(e, t);
            this.moveCursorTo(n.row, n.column, i)
        }
        ,
        this.detach = function() {
            this.lead.detach(),
            this.anchor.detach(),
            this.session = this.doc = null
        }
        ,
        this.fromOrientedRange = function(e) {
            this.setSelectionRange(e, e.cursor == e.start),
            this.$desiredColumn = e.desiredColumn || this.$desiredColumn
        }
        ,
        this.toOrientedRange = function(e) {
            var t = this.getRange();
            return e ? (e.start.column = t.start.column,
            e.start.row = t.start.row,
            e.end.column = t.end.column,
            e.end.row = t.end.row) : e = t,
            e.cursor = this.isBackwards() ? e.start : e.end,
            e.desiredColumn = this.$desiredColumn,
            e
        }
        ,
        this.getRangeOfMovements = function(e) {
            var t = this.getCursor();
            try {
                e(this);
                var i = this.getCursor();
                return o.fromPoints(t, i)
            } catch (n) {
                return o.fromPoints(t, t)
            } finally {
                this.moveCursorToPosition(t)
            }
        }
        ,
        this.toJSON = function() {
            if (this.rangeCount)
                var e = this.ranges.map(function(e) {
                    var t = e.clone();
                    return t.isBackwards = e.cursor == e.start,
                    t
                });
            else {
                var e = this.getRange();
                e.isBackwards = this.isBackwards()
            }
            return e
        }
        ,
        this.fromJSON = function(e) {
            if (void 0 == e.start) {
                if (this.rangeList) {
                    this.toSingleRange(e[0]);
                    for (var t = e.length; t--; ) {
                        var i = o.fromPoints(e[t].start, e[t].end);
                        e[t].isBackwards && (i.cursor = i.start),
                        this.addRange(i, !0)
                    }
                    return
                }
                e = e[0]
            }
            this.rangeList && this.toSingleRange(e),
            this.setSelectionRange(e, e.isBackwards)
        }
        ,
        this.isEqual = function(e) {
            if ((e.length || this.rangeCount) && e.length != this.rangeCount)
                return !1;
            if (!e.length || !this.ranges)
                return this.getRange().isEqual(e);
            for (var t = this.ranges.length; t--; )
                if (!this.ranges[t].isEqual(e[t]))
                    return !1;
            return !0
        }
    }
    ).call(s.prototype),
    t.Selection = s
}),
define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(e, t) {
    "use strict";
    var i = e("./config")
      , n = 2e3
      , r = function(e) {
        this.states = e,
        this.regExps = {},
        this.matchMappings = {};
        for (var t in this.states) {
            for (var i = this.states[t], n = [], r = 0, o = this.matchMappings[t] = {
                defaultToken: "text"
            }, s = "g", a = [], l = 0; l < i.length; l++) {
                var c = i[l];
                if (c.defaultToken && (o.defaultToken = c.defaultToken),
                c.caseInsensitive && (s = "gi"),
                null != c.regex) {
                    c.regex instanceof RegExp && (c.regex = c.regex.toString().slice(1, -1));
                    var h = c.regex
                      , d = new RegExp("(?:(" + h + ")|(.))").exec("a").length - 2;
                    Array.isArray(c.token) ? 1 == c.token.length || 1 == d ? c.token = c.token[0] : d - 1 != c.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                        rule: c,
                        groupCount: d - 1
                    }),
                    c.token = c.token[0]) : (c.tokenArray = c.token,
                    c.token = null,
                    c.onMatch = this.$arrayTokens) : "function" == typeof c.token && !c.onMatch && (c.onMatch = d > 1 ? this.$applyToken : c.token),
                    d > 1 && (/\\\d/.test(c.regex) ? h = c.regex.replace(/\\([0-9]+)/g, function(e, t) {
                        return "\\" + (parseInt(t, 10) + r + 1)
                    }) : (d = 1,
                    h = this.removeCapturingGroups(c.regex)),
                    !c.splitRegex && "string" != typeof c.token && a.push(c)),
                    o[r] = l,
                    r += d,
                    n.push(h),
                    c.onMatch || (c.onMatch = null)
                }
            }
            n.length || (o[0] = 0,
            n.push("$")),
            a.forEach(function(e) {
                e.splitRegex = this.createSplitterRegexp(e.regex, s)
            }, this),
            this.regExps[t] = new RegExp("(" + n.join(")|(") + ")|($)",s)
        }
    };
    (function() {
        this.$setMaxTokenCount = function(e) {
            n = 0 | e
        }
        ,
        this.$applyToken = function(e) {
            var t = this.splitRegex.exec(e).slice(1)
              , i = this.token.apply(this, t);
            if ("string" == typeof i)
                return [{
                    type: i,
                    value: e
                }];
            for (var n = [], r = 0, o = i.length; o > r; r++)
                t[r] && (n[n.length] = {
                    type: i[r],
                    value: t[r]
                });
            return n
        }
        ,
        this.$arrayTokens = function(e) {
            if (!e)
                return [];
            var t = this.splitRegex.exec(e);
            if (!t)
                return "text";
            for (var i = [], n = this.tokenArray, r = 0, o = n.length; o > r; r++)
                t[r + 1] && (i[i.length] = {
                    type: n[r],
                    value: t[r + 1]
                });
            return i
        }
        ,
        this.removeCapturingGroups = function(e) {
            var t = e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g, function(e, t) {
                return t ? "(?:" : e
            });
            return t
        }
        ,
        this.createSplitterRegexp = function(e, t) {
            if (-1 != e.indexOf("(?=")) {
                var i = 0
                  , n = !1
                  , r = {};
                e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(e, t, o, s, a, l) {
                    return n ? n = "]" != a : a ? n = !0 : s ? (i == r.stack && (r.end = l + 1,
                    r.stack = -1),
                    i--) : o && (i++,
                    1 != o.length && (r.stack = i,
                    r.start = l)),
                    e
                }),
                null != r.end && /^\)*$/.test(e.substr(r.end)) && (e = e.substring(0, r.start) + e.substr(r.end))
            }
            return "^" != e.charAt(0) && (e = "^" + e),
            "$" != e.charAt(e.length - 1) && (e += "$"),
            new RegExp(e,(t || "").replace("g", ""))
        }
        ,
        this.getLineTokens = function(e, t) {
            if (t && "string" != typeof t) {
                var i = t.slice(0);
                t = i[0],
                "#tmp" === t && (i.shift(),
                t = i.shift())
            } else
                var i = [];
            var r = t || "start"
              , o = this.states[r];
            o || (r = "start",
            o = this.states[r]);
            var s = this.matchMappings[r]
              , a = this.regExps[r];
            a.lastIndex = 0;
            for (var l, c = [], h = 0, d = 0, u = {
                type: null,
                value: ""
            }; l = a.exec(e); ) {
                var p = s.defaultToken
                  , g = null
                  , m = l[0]
                  , f = a.lastIndex;
                if (f - m.length > h) {
                    var b = e.substring(h, f - m.length);
                    u.type == p ? u.value += b : (u.type && c.push(u),
                    u = {
                        type: p,
                        value: b
                    })
                }
                for (var v = 0; v < l.length - 2; v++)
                    if (void 0 !== l[v + 1]) {
                        g = o[s[v]],
                        p = g.onMatch ? g.onMatch(m, r, i) : g.token,
                        g.next && (r = "string" == typeof g.next ? g.next : g.next(r, i),
                        o = this.states[r],
                        o || (this.reportError("state doesn't exist", r),
                        r = "start",
                        o = this.states[r]),
                        s = this.matchMappings[r],
                        h = f,
                        a = this.regExps[r],
                        a.lastIndex = f);
                        break
                    }
                if (m)
                    if ("string" == typeof p)
                        g && g.merge === !1 || u.type !== p ? (u.type && c.push(u),
                        u = {
                            type: p,
                            value: m
                        }) : u.value += m;
                    else if (p) {
                        u.type && c.push(u),
                        u = {
                            type: null,
                            value: ""
                        };
                        for (var v = 0; v < p.length; v++)
                            c.push(p[v])
                    }
                if (h == e.length)
                    break;
                if (h = f,
                d++ > n) {
                    for (d > 2 * e.length && this.reportError("infinite loop with in ace tokenizer", {
                        startState: t,
                        line: e
                    }); h < e.length; )
                        u.type && c.push(u),
                        u = {
                            value: e.substring(h, h += 2e3),
                            type: "overflow"
                        };
                    r = "start",
                    i = [];
                    break
                }
            }
            return u.type && c.push(u),
            i.length > 1 && i[0] !== r && i.unshift("#tmp", r),
            {
                tokens: c,
                state: i.length ? i : r
            }
        }
        ,
        this.reportError = i.reportError
    }
    ).call(r.prototype),
    t.Tokenizer = r
}),
define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(e, t) {
    "use strict";
    var i = e("../lib/lang")
      , n = function() {
        this.$rules = {
            start: [{
                token: "empty_line",
                regex: "^$"
            }, {
                defaultToken: "text"
            }]
        }
    };
    (function() {
        this.addRules = function(e, t) {
            if (t)
                for (var i in e) {
                    for (var n = e[i], r = 0; r < n.length; r++) {
                        var o = n[r];
                        (o.next || o.onMatch) && ("string" == typeof o.next && 0 !== o.next.indexOf(t) && (o.next = t + o.next),
                        o.nextState && 0 !== o.nextState.indexOf(t) && (o.nextState = t + o.nextState))
                    }
                    this.$rules[t + i] = n
                }
            else
                for (var i in e)
                    this.$rules[i] = e[i]
        }
        ,
        this.getRules = function() {
            return this.$rules
        }
        ,
        this.embedRules = function(e, t, n, r, o) {
            var s = "function" == typeof e ? (new e).getRules() : e;
            if (r)
                for (var a = 0; a < r.length; a++)
                    r[a] = t + r[a];
            else {
                r = [];
                for (var l in s)
                    r.push(t + l)
            }
            if (this.addRules(s, t),
            n)
                for (var c = Array.prototype[o ? "push" : "unshift"], a = 0; a < r.length; a++)
                    c.apply(this.$rules[r[a]], i.deepCopy(n));
            this.$embeds || (this.$embeds = []),
            this.$embeds.push(t)
        }
        ,
        this.getEmbeds = function() {
            return this.$embeds
        }
        ;
        var e = function(e, t) {
            return ("start" != e || t.length) && t.unshift(this.nextState, e),
            this.nextState
        }
          , t = function(e, t) {
            return t.shift(),
            t.shift() || "start"
        };
        this.normalizeRules = function() {
            function i(o) {
                var s = r[o];
                s.processed = !0;
                for (var a = 0; a < s.length; a++) {
                    var l = s[a]
                      , c = null;
                    Array.isArray(l) && (c = l,
                    l = {}),
                    !l.regex && l.start && (l.regex = l.start,
                    l.next || (l.next = []),
                    l.next.push({
                        defaultToken: l.token
                    }, {
                        token: l.token + ".end",
                        regex: l.end || l.start,
                        next: "pop"
                    }),
                    l.token = l.token + ".start",
                    l.push = !0);
                    var h = l.next || l.push;
                    if (h && Array.isArray(h)) {
                        var d = l.stateName;
                        d || (d = l.token,
                        "string" != typeof d && (d = d[0] || ""),
                        r[d] && (d += n++)),
                        r[d] = h,
                        l.next = d,
                        i(d)
                    } else
                        "pop" == h && (l.next = t);
                    if (l.push && (l.nextState = l.next || l.push,
                    l.next = e,
                    delete l.push),
                    l.rules)
                        for (var u in l.rules)
                            r[u] ? r[u].push && r[u].push.apply(r[u], l.rules[u]) : r[u] = l.rules[u];
                    var p = "string" == typeof l ? l : "string" == typeof l.include ? l.include : "";
                    if (p && (c = r[p]),
                    c) {
                        var g = [a, 1].concat(c);
                        l.noEscape && (g = g.filter(function(e) {
                            return !e.next
                        })),
                        s.splice.apply(s, g),
                        a--
                    }
                    l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive),
                    delete l.defaultToken)
                }
            }
            var n = 0
              , r = this.$rules;
            Object.keys(r).forEach(i, this)
        }
        ,
        this.createKeywordMapper = function(e, t, i, n) {
            var r = Object.create(null);
            return Object.keys(e).forEach(function(t) {
                var o = e[t];
                i && (o = o.toLowerCase());
                for (var s = o.split(n || "|"), a = s.length; a--; )
                    r[s[a]] = t
            }),
            Object.getPrototypeOf(r) && (r.__proto__ = null),
            this.$keywordList = Object.keys(r),
            e = null,
            i ? function(e) {
                return r[e.toLowerCase()] || t
            }
            : function(e) {
                return r[e] || t
            }
        }
        ,
        this.getKeywords = function() {
            return this.$keywords
        }
    }
    ).call(n.prototype),
    t.TextHighlightRules = n
}),
define("ace/mode/behaviour", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = function() {
        this.$behaviours = {}
    };
    (function() {
        this.add = function(e, t, i) {
            switch (void 0) {
            case this.$behaviours:
                this.$behaviours = {};
            case this.$behaviours[e]:
                this.$behaviours[e] = {}
            }
            this.$behaviours[e][t] = i
        }
        ,
        this.addBehaviours = function(e) {
            for (var t in e)
                for (var i in e[t])
                    this.add(t, i, e[t][i])
        }
        ,
        this.remove = function(e) {
            this.$behaviours && this.$behaviours[e] && delete this.$behaviours[e]
        }
        ,
        this.inherit = function(e, t) {
            if ("function" == typeof e)
                var i = (new e).getBehaviours(t);
            else
                var i = e.getBehaviours(t);
            this.addBehaviours(i)
        }
        ,
        this.getBehaviours = function(e) {
            if (!e)
                return this.$behaviours;
            for (var t = {}, i = 0; i < e.length; i++)
                this.$behaviours[e[i]] && (t[e[i]] = this.$behaviours[e[i]]);
            return t
        }
    }
    ).call(i.prototype),
    t.Behaviour = i
}),
define("ace/token_iterator", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = function(e, t, i) {
        this.$session = e,
        this.$row = t,
        this.$rowTokens = e.getTokens(t);
        var n = e.getTokenAt(t, i);
        this.$tokenIndex = n ? n.index : -1
    };
    (function() {
        this.stepBackward = function() {
            for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
                if (this.$row -= 1,
                this.$row < 0)
                    return this.$row = 0,
                    null;
                this.$rowTokens = this.$session.getTokens(this.$row),
                this.$tokenIndex = this.$rowTokens.length - 1
            }
            return this.$rowTokens[this.$tokenIndex]
        }
        ,
        this.stepForward = function() {
            this.$tokenIndex += 1;
            for (var e; this.$tokenIndex >= this.$rowTokens.length; ) {
                if (this.$row += 1,
                e || (e = this.$session.getLength()),
                this.$row >= e)
                    return this.$row = e - 1,
                    null;
                this.$rowTokens = this.$session.getTokens(this.$row),
                this.$tokenIndex = 0
            }
            return this.$rowTokens[this.$tokenIndex]
        }
        ,
        this.getCurrentToken = function() {
            return this.$rowTokens[this.$tokenIndex]
        }
        ,
        this.getCurrentTokenRow = function() {
            return this.$row
        }
        ,
        this.getCurrentTokenColumn = function() {
            var e = this.$rowTokens
              , t = this.$tokenIndex
              , i = e[t].start;
            if (void 0 !== i)
                return i;
            for (i = 0; t > 0; )
                t -= 1,
                i += e[t].value.length;
            return i
        }
        ,
        this.getCurrentTokenPosition = function() {
            return {
                row: this.$row,
                column: this.getCurrentTokenColumn()
            }
        }
    }
    ).call(i.prototype),
    t.TokenIterator = i
}),
define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(e, t) {
    "use strict";
    var i, n = e("../../lib/oop"), r = e("../behaviour").Behaviour, o = e("../../token_iterator").TokenIterator, s = e("../../lib/lang"), a = ["text", "paren.rparen", "punctuation.operator"], l = ["text", "paren.rparen", "punctuation.operator", "comment"], c = {}, h = function(e) {
        var t = -1;
        return e.multiSelect && (t = e.selection.index,
        c.rangeCount != e.multiSelect.rangeCount && (c = {
            rangeCount: e.multiSelect.rangeCount
        })),
        c[t] ? i = c[t] : void (i = c[t] = {
            autoInsertedBrackets: 0,
            autoInsertedRow: -1,
            autoInsertedLineEnd: "",
            maybeInsertedBrackets: 0,
            maybeInsertedRow: -1,
            maybeInsertedLineStart: "",
            maybeInsertedLineEnd: ""
        })
    }, d = function(e, t, i, n) {
        var r = e.end.row - e.start.row;
        return {
            text: i + t + n,
            selection: [0, e.start.column + 1, r, e.end.column + (r ? 0 : 1)]
        }
    }, u = function() {
        this.add("braces", "insertion", function(e, t, n, r, o) {
            var a = n.getCursorPosition()
              , l = r.doc.getLine(a.row);
            if ("{" == o) {
                h(n);
                var c = n.getSelectionRange()
                  , p = r.doc.getTextRange(c);
                if ("" !== p && "{" !== p && n.getWrapBehavioursEnabled())
                    return d(c, p, "{", "}");
                if (u.isSaneInsertion(n, r))
                    return /[\]\}\)]/.test(l[a.column]) || n.inMultiSelectMode ? (u.recordAutoInsert(n, r, "}"),
                    {
                        text: "{}",
                        selection: [1, 1]
                    }) : (u.recordMaybeInsert(n, r, "{"),
                    {
                        text: "{",
                        selection: [1, 1]
                    })
            } else if ("}" == o) {
                h(n);
                var g = l.substring(a.column, a.column + 1);
                if ("}" == g) {
                    var m = r.$findOpeningBracket("}", {
                        column: a.column + 1,
                        row: a.row
                    });
                    if (null !== m && u.isAutoInsertedClosing(a, l, o))
                        return u.popAutoInsertedClosing(),
                        {
                            text: "",
                            selection: [1, 1]
                        }
                }
            } else {
                if ("\n" == o || "\r\n" == o) {
                    h(n);
                    var f = "";
                    u.isMaybeInsertedClosing(a, l) && (f = s.stringRepeat("}", i.maybeInsertedBrackets),
                    u.clearMaybeInsertedClosing());
                    var g = l.substring(a.column, a.column + 1);
                    if ("}" === g) {
                        var b = r.findMatchingBracket({
                            row: a.row,
                            column: a.column + 1
                        }, "}");
                        if (!b)
                            return null;
                        var v = this.$getIndent(r.getLine(b.row))
                    } else {
                        if (!f)
                            return void u.clearMaybeInsertedClosing();
                        var v = this.$getIndent(l)
                    }
                    var w = v + r.getTabString();
                    return {
                        text: "\n" + w + "\n" + v + f,
                        selection: [1, w.length, 1, w.length]
                    }
                }
                u.clearMaybeInsertedClosing()
            }
        }),
        this.add("braces", "deletion", function(e, t, n, r, o) {
            var s = r.doc.getTextRange(o);
            if (!o.isMultiLine() && "{" == s) {
                h(n);
                var a = r.doc.getLine(o.start.row)
                  , l = a.substring(o.end.column, o.end.column + 1);
                if ("}" == l)
                    return o.end.column++,
                    o;
                i.maybeInsertedBrackets--
            }
        }),
        this.add("parens", "insertion", function(e, t, i, n, r) {
            if ("(" == r) {
                h(i);
                var o = i.getSelectionRange()
                  , s = n.doc.getTextRange(o);
                if ("" !== s && i.getWrapBehavioursEnabled())
                    return d(o, s, "(", ")");
                if (u.isSaneInsertion(i, n))
                    return u.recordAutoInsert(i, n, ")"),
                    {
                        text: "()",
                        selection: [1, 1]
                    }
            } else if (")" == r) {
                h(i);
                var a = i.getCursorPosition()
                  , l = n.doc.getLine(a.row)
                  , c = l.substring(a.column, a.column + 1);
                if (")" == c) {
                    var p = n.$findOpeningBracket(")", {
                        column: a.column + 1,
                        row: a.row
                    });
                    if (null !== p && u.isAutoInsertedClosing(a, l, r))
                        return u.popAutoInsertedClosing(),
                        {
                            text: "",
                            selection: [1, 1]
                        }
                }
            }
        }),
        this.add("parens", "deletion", function(e, t, i, n, r) {
            var o = n.doc.getTextRange(r);
            if (!r.isMultiLine() && "(" == o) {
                h(i);
                var s = n.doc.getLine(r.start.row)
                  , a = s.substring(r.start.column + 1, r.start.column + 2);
                if (")" == a)
                    return r.end.column++,
                    r
            }
        }),
        this.add("brackets", "insertion", function(e, t, i, n, r) {
            if ("[" == r) {
                h(i);
                var o = i.getSelectionRange()
                  , s = n.doc.getTextRange(o);
                if ("" !== s && i.getWrapBehavioursEnabled())
                    return d(o, s, "[", "]");
                if (u.isSaneInsertion(i, n))
                    return u.recordAutoInsert(i, n, "]"),
                    {
                        text: "[]",
                        selection: [1, 1]
                    }
            } else if ("]" == r) {
                h(i);
                var a = i.getCursorPosition()
                  , l = n.doc.getLine(a.row)
                  , c = l.substring(a.column, a.column + 1);
                if ("]" == c) {
                    var p = n.$findOpeningBracket("]", {
                        column: a.column + 1,
                        row: a.row
                    });
                    if (null !== p && u.isAutoInsertedClosing(a, l, r))
                        return u.popAutoInsertedClosing(),
                        {
                            text: "",
                            selection: [1, 1]
                        }
                }
            }
        }),
        this.add("brackets", "deletion", function(e, t, i, n, r) {
            var o = n.doc.getTextRange(r);
            if (!r.isMultiLine() && "[" == o) {
                h(i);
                var s = n.doc.getLine(r.start.row)
                  , a = s.substring(r.start.column + 1, r.start.column + 2);
                if ("]" == a)
                    return r.end.column++,
                    r
            }
        }),
        this.add("string_dquotes", "insertion", function(e, t, i, n, r) {
            if ('"' == r || "'" == r) {
                if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(r))
                    return;
                h(i);
                var o = r
                  , s = i.getSelectionRange()
                  , a = n.doc.getTextRange(s);
                if ("" !== a && "'" !== a && '"' != a && i.getWrapBehavioursEnabled())
                    return d(s, a, o, o);
                if (!a) {
                    var l = i.getCursorPosition()
                      , c = n.doc.getLine(l.row)
                      , u = c.substring(l.column - 1, l.column)
                      , p = c.substring(l.column, l.column + 1)
                      , g = n.getTokenAt(l.row, l.column)
                      , m = n.getTokenAt(l.row, l.column + 1);
                    if ("\\" == u && g && /escape/.test(g.type))
                        return null;
                    var f, b = g && /string|escape/.test(g.type), v = !m || /string|escape/.test(m.type);
                    if (p == o)
                        f = b !== v,
                        f && /string\.end/.test(m.type) && (f = !1);
                    else {
                        if (b && !v)
                            return null;
                        if (b && v)
                            return null;
                        var w = n.$mode.tokenRe;
                        w.lastIndex = 0;
                        var C = w.test(u);
                        w.lastIndex = 0;
                        var y = w.test(u);
                        if (C || y)
                            return null;
                        if (p && !/[\s;,.})\]\\]/.test(p))
                            return null;
                        f = !0
                    }
                    return {
                        text: f ? o + o : "",
                        selection: [1, 1]
                    }
                }
            }
        }),
        this.add("string_dquotes", "deletion", function(e, t, i, n, r) {
            var o = n.doc.getTextRange(r);
            if (!r.isMultiLine() && ('"' == o || "'" == o)) {
                h(i);
                var s = n.doc.getLine(r.start.row)
                  , a = s.substring(r.start.column + 1, r.start.column + 2);
                if (a == o)
                    return r.end.column++,
                    r
            }
        })
    };
    u.isSaneInsertion = function(e, t) {
        var i = e.getCursorPosition()
          , n = new o(t,i.row,i.column);
        if (!this.$matchTokenType(n.getCurrentToken() || "text", a)) {
            var r = new o(t,i.row,i.column + 1);
            if (!this.$matchTokenType(r.getCurrentToken() || "text", a))
                return !1
        }
        return n.stepForward(),
        n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", l)
    }
    ,
    u.$matchTokenType = function(e, t) {
        return t.indexOf(e.type || e) > -1
    }
    ,
    u.recordAutoInsert = function(e, t, n) {
        var r = e.getCursorPosition()
          , o = t.doc.getLine(r.row);
        this.isAutoInsertedClosing(r, o, i.autoInsertedLineEnd[0]) || (i.autoInsertedBrackets = 0),
        i.autoInsertedRow = r.row,
        i.autoInsertedLineEnd = n + o.substr(r.column),
        i.autoInsertedBrackets++
    }
    ,
    u.recordMaybeInsert = function(e, t, n) {
        var r = e.getCursorPosition()
          , o = t.doc.getLine(r.row);
        this.isMaybeInsertedClosing(r, o) || (i.maybeInsertedBrackets = 0),
        i.maybeInsertedRow = r.row,
        i.maybeInsertedLineStart = o.substr(0, r.column) + n,
        i.maybeInsertedLineEnd = o.substr(r.column),
        i.maybeInsertedBrackets++
    }
    ,
    u.isAutoInsertedClosing = function(e, t, n) {
        return i.autoInsertedBrackets > 0 && e.row === i.autoInsertedRow && n === i.autoInsertedLineEnd[0] && t.substr(e.column) === i.autoInsertedLineEnd
    }
    ,
    u.isMaybeInsertedClosing = function(e, t) {
        return i.maybeInsertedBrackets > 0 && e.row === i.maybeInsertedRow && t.substr(e.column) === i.maybeInsertedLineEnd && t.substr(0, e.column) == i.maybeInsertedLineStart
    }
    ,
    u.popAutoInsertedClosing = function() {
        i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1),
        i.autoInsertedBrackets--
    }
    ,
    u.clearMaybeInsertedClosing = function() {
        i && (i.maybeInsertedBrackets = 0,
        i.maybeInsertedRow = -1)
    }
    ,
    n.inherits(u, r),
    t.CstyleBehaviour = u
}),
define("ace/unicode", ["require", "exports", "module"], function(e, t) {
    "use strict";
    function i(e) {
        var i = /\w{4}/g;
        for (var n in e)
            t.packages[n] = e[n].replace(i, "\\u$&")
    }
    t.packages = {},
    i({
        L: "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        Ll: "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
        Lu: "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
        Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
        Lm: "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
        Lo: "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        M: "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
        Mn: "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
        Mc: "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
        Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
        N: "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nd: "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
        No: "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
        P: "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
        Pd: "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
        Ps: "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
        Pe: "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
        Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
        Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
        Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
        Po: "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
        S: "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
        Sm: "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
        Sc: "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
        Sk: "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
        So: "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
        Z: "002000A01680180E2000-200A20282029202F205F3000",
        Zs: "002000A01680180E2000-200A202F205F3000",
        Zl: "2028",
        Zp: "2029",
        C: "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
        Cc: "0000-001F007F-009F",
        Cf: "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
        Co: "E000-F8FF",
        Cs: "D800-DFFF",
        Cn: "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"
    })
}),
define("ace/mode/text", ["require", "exports", "module", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(e, t) {
    "use strict";
    var i = e("../tokenizer").Tokenizer
      , n = e("./text_highlight_rules").TextHighlightRules
      , r = e("./behaviour/cstyle").CstyleBehaviour
      , o = e("../unicode")
      , s = e("../lib/lang")
      , a = e("../token_iterator").TokenIterator
      , l = e("../range").Range
      , c = function() {
        this.HighlightRules = n
    };
    (function() {
        this.$behaviour = new r,
        this.tokenRe = new RegExp("^[" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]+","g"),
        this.nonTokenRe = new RegExp("^(?:[^" + o.packages.L + o.packages.Mn + o.packages.Mc + o.packages.Nd + o.packages.Pc + "\\$_]|\\s])+","g"),
        this.getTokenizer = function() {
            return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig),
            this.$tokenizer = new i(this.$highlightRules.getRules())),
            this.$tokenizer
        }
        ,
        this.lineCommentStart = "",
        this.blockComment = "",
        this.toggleCommentLines = function(e, t, i, n) {
            function r(e) {
                for (var t = i; n >= t; t++)
                    e(o.getLine(t), t)
            }
            var o = t.doc
              , a = !0
              , l = !0
              , c = 1 / 0
              , h = t.getTabSize()
              , d = !1;
            if (this.lineCommentStart) {
                if (Array.isArray(this.lineCommentStart))
                    var u = this.lineCommentStart.map(s.escapeRegExp).join("|")
                      , p = this.lineCommentStart[0];
                else
                    var u = s.escapeRegExp(this.lineCommentStart)
                      , p = this.lineCommentStart;
                u = new RegExp("^(\\s*)(?:" + u + ") ?"),
                d = t.getUseSoftTabs();
                var g = function(e, t) {
                    var i = e.match(u);
                    if (i) {
                        var n = i[1].length
                          , r = i[0].length;
                        !v(e, n, r) && " " == i[0][r - 1] && r--,
                        o.removeInLine(t, n, r)
                    }
                }
                  , m = p + " "
                  , f = function(e, t) {
                    (!a || /\S/.test(e)) && (v(e, c, c) ? o.insertInLine({
                        row: t,
                        column: c
                    }, m) : o.insertInLine({
                        row: t,
                        column: c
                    }, p))
                }
                  , b = function(e) {
                    return u.test(e)
                }
                  , v = function(e, t, i) {
                    for (var n = 0; t-- && " " == e.charAt(t); )
                        n++;
                    if (n % h != 0)
                        return !1;
                    for (var n = 0; " " == e.charAt(i++); )
                        n++;
                    return h > 2 ? n % h != h - 1 : n % h == 0
                }
            } else {
                if (!this.blockComment)
                    return !1;
                var p = this.blockComment.start
                  , w = this.blockComment.end
                  , u = new RegExp("^(\\s*)(?:" + s.escapeRegExp(p) + ")")
                  , C = new RegExp("(?:" + s.escapeRegExp(w) + ")\\s*$")
                  , f = function(e, t) {
                    b(e, t) || (!a || /\S/.test(e)) && (o.insertInLine({
                        row: t,
                        column: e.length
                    }, w),
                    o.insertInLine({
                        row: t,
                        column: c
                    }, p))
                }
                  , g = function(e, t) {
                    var i;
                    (i = e.match(C)) && o.removeInLine(t, e.length - i[0].length, e.length),
                    (i = e.match(u)) && o.removeInLine(t, i[1].length, i[0].length)
                }
                  , b = function(e, i) {
                    if (u.test(e))
                        return !0;
                    for (var n = t.getTokens(i), r = 0; r < n.length; r++)
                        if ("comment" === n[r].type)
                            return !0
                }
            }
            var y = 1 / 0;
            r(function(e, t) {
                var i = e.search(/\S/);
                -1 !== i ? (c > i && (c = i),
                l && !b(e, t) && (l = !1)) : y > e.length && (y = e.length)
            }),
            1 / 0 == c && (c = y,
            a = !1,
            l = !1),
            d && c % h != 0 && (c = Math.floor(c / h) * h),
            r(l ? g : f)
        }
        ,
        this.toggleBlockComment = function(e, t, i, n) {
            var r = this.blockComment;
            if (r) {
                !r.start && r[0] && (r = r[0]);
                var o, s, c = new a(t,n.row,n.column), h = c.getCurrentToken(), d = (t.selection,
                t.selection.toOrientedRange());
                if (h && /comment/.test(h.type)) {
                    for (var u, p; h && /comment/.test(h.type); ) {
                        var g = h.value.indexOf(r.start);
                        if (-1 != g) {
                            var m = c.getCurrentTokenRow()
                              , f = c.getCurrentTokenColumn() + g;
                            u = new l(m,f,m,f + r.start.length);
                            break
                        }
                        h = c.stepBackward()
                    }
                    for (var c = new a(t,n.row,n.column), h = c.getCurrentToken(); h && /comment/.test(h.type); ) {
                        var g = h.value.indexOf(r.end);
                        if (-1 != g) {
                            var m = c.getCurrentTokenRow()
                              , f = c.getCurrentTokenColumn() + g;
                            p = new l(m,f,m,f + r.end.length);
                            break
                        }
                        h = c.stepForward()
                    }
                    p && t.remove(p),
                    u && (t.remove(u),
                    o = u.start.row,
                    s = -r.start.length)
                } else
                    s = r.start.length,
                    o = i.start.row,
                    t.insert(i.end, r.end),
                    t.insert(i.start, r.start);
                d.start.row == o && (d.start.column += s),
                d.end.row == o && (d.end.column += s),
                t.selection.fromOrientedRange(d)
            }
        }
        ,
        this.getNextLineIndent = function(e, t) {
            return this.$getIndent(t)
        }
        ,
        this.checkOutdent = function() {
            return !1
        }
        ,
        this.autoOutdent = function() {}
        ,
        this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
        ,
        this.createWorker = function() {
            return null
        }
        ,
        this.createModeDelegates = function(e) {
            this.$embeds = [],
            this.$modes = {};
            for (var t in e)
                e[t] && (this.$embeds.push(t),
                this.$modes[t] = new e[t]);
            for (var i = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"], t = 0; t < i.length; t++)
                (function(e) {
                    var n = i[t]
                      , r = e[n];
                    e[i[t]] = function() {
                        return this.$delegator(n, arguments, r)
                    }
                })(this)
        }
        ,
        this.$delegator = function(e, t, i) {
            var n = t[0];
            "string" != typeof n && (n = n[0]);
            for (var r = 0; r < this.$embeds.length; r++)
                if (this.$modes[this.$embeds[r]]) {
                    var o = n.split(this.$embeds[r]);
                    if (!o[0] && o[1]) {
                        t[0] = o[1];
                        var s = this.$modes[this.$embeds[r]];
                        return s[e].apply(s, t)
                    }
                }
            var a = i.apply(this, t);
            return i ? a : void 0
        }
        ,
        this.transformAction = function(e, t) {
            if (this.$behaviour) {
                var i = this.$behaviour.getBehaviours();
                for (var n in i)
                    if (i[n][t]) {
                        var r = i[n][t].apply(this, arguments);
                        if (r)
                            return r
                    }
            }
        }
        ,
        this.getKeywords = function(e) {
            if (!this.completionKeywords) {
                var t = this.$tokenizer.rules
                  , i = [];
                for (var n in t)
                    for (var r = t[n], o = 0, s = r.length; s > o; o++)
                        if ("string" == typeof r[o].token)
                            /keyword|support|storage/.test(r[o].token) && i.push(r[o].regex);
                        else if ("object" == typeof r[o].token)
                            for (var a = 0, l = r[o].token.length; l > a; a++)
                                if (/keyword|support|storage/.test(r[o].token[a])) {
                                    var n = r[o].regex.match(/\(.+?\)/g)[a];
                                    i.push(n.substr(1, n.length - 2))
                                }
                this.completionKeywords = i
            }
            return e ? i.concat(this.$keywordList || []) : this.$keywordList
        }
        ,
        this.$createKeywordList = function() {
            return this.$highlightRules || this.getTokenizer(),
            this.$keywordList = this.$highlightRules.$keywordList || []
        }
        ,
        this.getCompletions = function() {
            var e = this.$keywordList || this.$createKeywordList();
            return e.map(function(e) {
                return {
                    name: e,
                    value: e,
                    score: 0,
                    meta: "keyword"
                }
            })
        }
        ,
        this.$id = "ace/mode/text"
    }
    ).call(c.prototype),
    t.Mode = c
}),
define("ace/apply_delta", ["require", "exports", "module"], function(e, t) {
    "use strict";
    function i(e, t) {
        throw console.log("Invalid Delta:", e),
        "Invalid Delta: " + t
    }
    function n(e, t) {
        return t.row >= 0 && t.row < e.length && t.column >= 0 && t.column <= e[t.row].length
    }
    t.applyDelta = function(e, t) {
        var i = t.start.row
          , n = t.start.column
          , r = e[i] || "";
        switch (t.action) {
        case "insert":
            var o = t.lines;
            if (1 === o.length)
                e[i] = r.substring(0, n) + t.lines[0] + r.substring(n);
            else {
                var s = [i, 1].concat(t.lines);
                e.splice.apply(e, s),
                e[i] = r.substring(0, n) + e[i],
                e[i + t.lines.length - 1] += r.substring(n)
            }
            break;
        case "remove":
            var a = t.end.column
              , l = t.end.row;
            i === l ? e[i] = r.substring(0, n) + r.substring(a) : e.splice(i, l - i + 1, r.substring(0, n) + e[l].substring(a))
        }
    }
}),
define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/event_emitter").EventEmitter
      , r = t.Anchor = function(e, t, i) {
        this.$onChange = this.onChange.bind(this),
        this.attach(e),
        "undefined" == typeof i ? this.setPosition(t.row, t.column) : this.setPosition(t, i)
    }
    ;
    (function() {
        function e(e, t, i) {
            var n = i ? e.column <= t.column : e.column < t.column;
            return e.row < t.row || e.row == t.row && n
        }
        function t(t, i, n) {
            var r = "insert" == t.action
              , o = (r ? 1 : -1) * (t.end.row - t.start.row)
              , s = (r ? 1 : -1) * (t.end.column - t.start.column)
              , a = t.start
              , l = r ? a : t.end;
            return e(i, a, n) ? {
                row: i.row,
                column: i.column
            } : e(l, i, !n) ? {
                row: i.row + o,
                column: i.column + (i.row == l.row ? s : 0)
            } : {
                row: a.row,
                column: a.column
            }
        }
        i.implement(this, n),
        this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column)
        }
        ,
        this.getDocument = function() {
            return this.document
        }
        ,
        this.$insertRight = !1,
        this.onChange = function(e) {
            if (!(e.start.row == e.end.row && e.start.row != this.row || e.start.row > this.row)) {
                var i = t(e, {
                    row: this.row,
                    column: this.column
                }, this.$insertRight);
                this.setPosition(i.row, i.column, !0)
            }
        }
        ,
        this.setPosition = function(e, t, i) {
            var n;
            if (n = i ? {
                row: e,
                column: t
            } : this.$clipPositionToDocument(e, t),
            this.row != n.row || this.column != n.column) {
                var r = {
                    row: this.row,
                    column: this.column
                };
                this.row = n.row,
                this.column = n.column,
                this._signal("change", {
                    old: r,
                    value: n
                })
            }
        }
        ,
        this.detach = function() {
            this.document.removeEventListener("change", this.$onChange)
        }
        ,
        this.attach = function(e) {
            this.document = e || this.document,
            this.document.on("change", this.$onChange)
        }
        ,
        this.$clipPositionToDocument = function(e, t) {
            var i = {};
            return e >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1),
            i.column = this.document.getLine(i.row).length) : 0 > e ? (i.row = 0,
            i.column = 0) : (i.row = e,
            i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t))),
            0 > t && (i.column = 0),
            i
        }
    }
    ).call(r.prototype)
}),
define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./apply_delta").applyDelta
      , r = e("./lib/event_emitter").EventEmitter
      , o = e("./range").Range
      , s = e("./anchor").Anchor
      , a = function(e) {
        this.$lines = [""],
        0 === e.length ? this.$lines = [""] : Array.isArray(e) ? this.insertMergedLines({
            row: 0,
            column: 0
        }, e) : this.insert({
            row: 0,
            column: 0
        }, e)
    };
    (function() {
        i.implement(this, r),
        this.setValue = function(e) {
            var t = this.getLength() - 1;
            this.remove(new o(0,0,t,this.getLine(t).length)),
            this.insert({
                row: 0,
                column: 0
            }, e)
        }
        ,
        this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter())
        }
        ,
        this.createAnchor = function(e, t) {
            return new s(this,e,t)
        }
        ,
        this.$split = 0 === "aaa".split(/a/).length ? function(e) {
            return e.replace(/\r\n|\r/g, "\n").split("\n")
        }
        : function(e) {
            return e.split(/\r\n|\r|\n/)
        }
        ,
        this.$detectNewLine = function(e) {
            var t = e.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = t ? t[1] : "\n",
            this._signal("changeNewLineMode")
        }
        ,
        this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
            case "windows":
                return "\r\n";
            case "unix":
                return "\n";
            default:
                return this.$autoNewLine || "\n"
            }
        }
        ,
        this.$autoNewLine = "",
        this.$newLineMode = "auto",
        this.setNewLineMode = function(e) {
            this.$newLineMode !== e && (this.$newLineMode = e,
            this._signal("changeNewLineMode"))
        }
        ,
        this.getNewLineMode = function() {
            return this.$newLineMode
        }
        ,
        this.isNewLine = function(e) {
            return "\r\n" == e || "\r" == e || "\n" == e
        }
        ,
        this.getLine = function(e) {
            return this.$lines[e] || ""
        }
        ,
        this.getLines = function(e, t) {
            return this.$lines.slice(e, t + 1)
        }
        ,
        this.getAllLines = function() {
            return this.getLines(0, this.getLength())
        }
        ,
        this.getLength = function() {
            return this.$lines.length
        }
        ,
        this.getTextRange = function(e) {
            return this.getLinesForRange(e).join(this.getNewLineCharacter())
        }
        ,
        this.getLinesForRange = function(e) {
            var t;
            if (e.start.row === e.end.row)
                t = [this.getLine(e.start.row).substring(e.start.column, e.end.column)];
            else {
                t = this.getLines(e.start.row, e.end.row),
                t[0] = (t[0] || "").substring(e.start.column);
                var i = t.length - 1;
                e.end.row - e.start.row == i && (t[i] = t[i].substring(0, e.end.column))
            }
            return t
        }
        ,
        this.insertLines = function(e, t) {
            return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."),
            this.insertFullLines(e, t)
        }
        ,
        this.removeLines = function(e, t) {
            return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."),
            this.removeFullLines(e, t)
        }
        ,
        this.insertNewLine = function(e) {
            return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."),
            this.insertMergedLines(e, ["", ""])
        }
        ,
        this.insert = function(e, t) {
            return this.getLength() <= 1 && this.$detectNewLine(t),
            this.insertMergedLines(e, this.$split(t))
        }
        ,
        this.insertInLine = function(e, t) {
            var i = this.clippedPos(e.row, e.column)
              , n = this.pos(e.row, e.column + t.length);
            return this.applyDelta({
                start: i,
                end: n,
                action: "insert",
                lines: [t]
            }, !0),
            this.clonePos(n)
        }
        ,
        this.clippedPos = function(e, t) {
            var i = this.getLength();
            void 0 === e ? e = i : 0 > e ? e = 0 : e >= i && (e = i - 1,
            t = void 0);
            var n = this.getLine(e);
            return void 0 == t && (t = n.length),
            t = Math.min(Math.max(t, 0), n.length),
            {
                row: e,
                column: t
            }
        }
        ,
        this.clonePos = function(e) {
            return {
                row: e.row,
                column: e.column
            }
        }
        ,
        this.pos = function(e, t) {
            return {
                row: e,
                column: t
            }
        }
        ,
        this.$clipPosition = function(e) {
            var t = this.getLength();
            return e.row >= t ? (e.row = Math.max(0, t - 1),
            e.column = this.getLine(t - 1).length) : (e.row = Math.max(0, e.row),
            e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length)),
            e
        }
        ,
        this.insertFullLines = function(e, t) {
            e = Math.min(Math.max(e, 0), this.getLength());
            var i = 0;
            e < this.getLength() ? (t = t.concat([""]),
            i = 0) : (t = [""].concat(t),
            e--,
            i = this.$lines[e].length),
            this.insertMergedLines({
                row: e,
                column: i
            }, t)
        }
        ,
        this.insertMergedLines = function(e, t) {
            var i = this.clippedPos(e.row, e.column)
              , n = {
                row: i.row + t.length - 1,
                column: (1 == t.length ? i.column : 0) + t[t.length - 1].length
            };
            return this.applyDelta({
                start: i,
                end: n,
                action: "insert",
                lines: t
            }),
            this.clonePos(n)
        }
        ,
        this.remove = function(e) {
            var t = this.clippedPos(e.start.row, e.start.column)
              , i = this.clippedPos(e.end.row, e.end.column);
            return this.applyDelta({
                start: t,
                end: i,
                action: "remove",
                lines: this.getLinesForRange({
                    start: t,
                    end: i
                })
            }),
            this.clonePos(t)
        }
        ,
        this.removeInLine = function(e, t, i) {
            var n = this.clippedPos(e, t)
              , r = this.clippedPos(e, i);
            return this.applyDelta({
                start: n,
                end: r,
                action: "remove",
                lines: this.getLinesForRange({
                    start: n,
                    end: r
                })
            }, !0),
            this.clonePos(n)
        }
        ,
        this.removeFullLines = function(e, t) {
            e = Math.min(Math.max(0, e), this.getLength() - 1),
            t = Math.min(Math.max(0, t), this.getLength() - 1);
            var i = t == this.getLength() - 1 && e > 0
              , n = t < this.getLength() - 1
              , r = i ? e - 1 : e
              , s = i ? this.getLine(r).length : 0
              , a = n ? t + 1 : t
              , l = n ? 0 : this.getLine(a).length
              , c = new o(r,s,a,l)
              , h = this.$lines.slice(e, t + 1);
            return this.applyDelta({
                start: c.start,
                end: c.end,
                action: "remove",
                lines: this.getLinesForRange(c)
            }),
            h
        }
        ,
        this.removeNewLine = function(e) {
            e < this.getLength() - 1 && e >= 0 && this.applyDelta({
                start: this.pos(e, this.getLine(e).length),
                end: this.pos(e + 1, 0),
                action: "remove",
                lines: ["", ""]
            })
        }
        ,
        this.replace = function(e, t) {
            if (e instanceof o || (e = o.fromPoints(e.start, e.end)),
            0 === t.length && e.isEmpty())
                return e.start;
            if (t == this.getTextRange(e))
                return e.end;
            this.remove(e);
            var i;
            return i = t ? this.insert(e.start, t) : e.start
        }
        ,
        this.applyDeltas = function(e) {
            for (var t = 0; t < e.length; t++)
                this.applyDelta(e[t])
        }
        ,
        this.revertDeltas = function(e) {
            for (var t = e.length - 1; t >= 0; t--)
                this.revertDelta(e[t])
        }
        ,
        this.applyDelta = function(e, t) {
            var i = "insert" == e.action;
            (i ? e.lines.length <= 1 && !e.lines[0] : !o.comparePoints(e.start, e.end)) || (i && e.lines.length > 2e4 && this.$splitAndapplyLargeDelta(e, 2e4),
            n(this.$lines, e, t),
            this._signal("change", e))
        }
        ,
        this.$splitAndapplyLargeDelta = function(e, t) {
            for (var i = e.lines, n = i.length, r = e.start.row, o = e.start.column, s = 0, a = 0; ; ) {
                s = a,
                a += t - 1;
                var l = i.slice(s, a);
                if (a > n) {
                    e.lines = l,
                    e.start.row = r + s,
                    e.start.column = o;
                    break
                }
                l.push(""),
                this.applyDelta({
                    start: this.pos(r + s, o),
                    end: this.pos(r + a, o = 0),
                    action: e.action,
                    lines: l
                }, !0)
            }
        }
        ,
        this.revertDelta = function(e) {
            this.applyDelta({
                start: this.clonePos(e.start),
                end: this.clonePos(e.end),
                action: "insert" == e.action ? "remove" : "insert",
                lines: e.lines.slice()
            })
        }
        ,
        this.indexToPosition = function(e, t) {
            for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = t || 0, o = i.length; o > r; r++)
                if (e -= i[r].length + n,
                0 > e)
                    return {
                        row: r,
                        column: e + i[r].length + n
                    };
            return {
                row: o - 1,
                column: i[o - 1].length
            }
        }
        ,
        this.positionToIndex = function(e, t) {
            for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, r = 0, o = Math.min(e.row, i.length), s = t || 0; o > s; ++s)
                r += i[s].length + n;
            return r + e.column
        }
    }
    ).call(a.prototype),
    t.Document = a
}),
define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/event_emitter").EventEmitter
      , r = function(e) {
        this.running = !1,
        this.lines = [],
        this.states = [],
        this.currentLine = 0,
        this.tokenizer = e;
        var t = this;
        this.$worker = function() {
            if (t.running) {
                for (var e = new Date, i = t.currentLine, n = -1, r = t.doc, o = i; t.lines[i]; )
                    i++;
                var s = r.getLength()
                  , a = 0;
                for (t.running = !1; s > i; ) {
                    t.$tokenizeRow(i),
                    n = i;
                    do
                        i++;
                    while (t.lines[i]);if (a++,
                    a % 5 === 0 && new Date - e > 20) {
                        t.running = setTimeout(t.$worker, 20);
                        break
                    }
                }
                t.currentLine = i,
                n >= o && t.fireUpdateEvent(o, n)
            }
        }
    };
    (function() {
        i.implement(this, n),
        this.setTokenizer = function(e) {
            this.tokenizer = e,
            this.lines = [],
            this.states = [],
            this.start(0)
        }
        ,
        this.setDocument = function(e) {
            this.doc = e,
            this.lines = [],
            this.states = [],
            this.stop()
        }
        ,
        this.fireUpdateEvent = function(e, t) {
            var i = {
                first: e,
                last: t
            };
            this._signal("update", {
                data: i
            })
        }
        ,
        this.start = function(e) {
            this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength()),
            this.lines.splice(this.currentLine, this.lines.length),
            this.states.splice(this.currentLine, this.states.length),
            this.stop(),
            this.running = setTimeout(this.$worker, 700)
        }
        ,
        this.scheduleStart = function() {
            this.running || (this.running = setTimeout(this.$worker, 700))
        }
        ,
        this.$updateOnChange = function(e) {
            var t = e.start.row
              , i = e.end.row - t;
            if (0 === i)
                this.lines[t] = null;
            else if ("remove" == e.action)
                this.lines.splice(t, i + 1, null),
                this.states.splice(t, i + 1, null);
            else {
                var n = Array(i + 1);
                n.unshift(t, 1),
                this.lines.splice.apply(this.lines, n),
                this.states.splice.apply(this.states, n)
            }
            this.currentLine = Math.min(t, this.currentLine, this.doc.getLength()),
            this.stop()
        }
        ,
        this.stop = function() {
            this.running && clearTimeout(this.running),
            this.running = !1
        }
        ,
        this.getTokens = function(e) {
            return this.lines[e] || this.$tokenizeRow(e)
        }
        ,
        this.getState = function(e) {
            return this.currentLine == e && this.$tokenizeRow(e),
            this.states[e] || "start"
        }
        ,
        this.$tokenizeRow = function(e) {
            var t = this.doc.getLine(e)
              , i = this.states[e - 1]
              , n = this.tokenizer.getLineTokens(t, i, e);
            return this.states[e] + "" != n.state + "" ? (this.states[e] = n.state,
            this.lines[e + 1] = null,
            this.currentLine > e + 1 && (this.currentLine = e + 1)) : this.currentLine == e && (this.currentLine = e + 1),
            this.lines[e] = n.tokens
        }
    }
    ).call(r.prototype),
    t.BackgroundTokenizer = r
}),
define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
    "use strict";
    var i = e("./lib/lang")
      , n = (e("./lib/oop"),
    e("./range").Range)
      , r = function(e, t, i) {
        this.setRegexp(e),
        this.clazz = t,
        this.type = i || "text"
    };
    (function() {
        this.MAX_RANGES = 500,
        this.setRegexp = function(e) {
            this.regExp + "" != e + "" && (this.regExp = e,
            this.cache = [])
        }
        ,
        this.update = function(e, t, r, o) {
            if (this.regExp)
                for (var s = o.firstRow, a = o.lastRow, l = s; a >= l; l++) {
                    var c = this.cache[l];
                    null == c && (c = i.getMatchOffsets(r.getLine(l), this.regExp),
                    c.length > this.MAX_RANGES && (c = c.slice(0, this.MAX_RANGES)),
                    c = c.map(function(e) {
                        return new n(l,e.offset,l,e.offset + e.length)
                    }),
                    this.cache[l] = c.length ? c : "");
                    for (var h = c.length; h--; )
                        t.drawSingleLineMarker(e, c[h].toScreenRange(r), this.clazz, o)
                }
        }
    }
    ).call(r.prototype),
    t.SearchHighlight = r
}),
define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    function i(e, t) {
        this.foldData = e,
        Array.isArray(t) ? this.folds = t : t = this.folds = [t];
        var i = t[t.length - 1];
        this.range = new n(t[0].start.row,t[0].start.column,i.end.row,i.end.column),
        this.start = this.range.start,
        this.end = this.range.end,
        this.folds.forEach(function(e) {
            e.setFoldLine(this)
        }, this)
    }
    var n = e("../range").Range;
    (function() {
        this.shiftRow = function(e) {
            this.start.row += e,
            this.end.row += e,
            this.folds.forEach(function(t) {
                t.start.row += e,
                t.end.row += e
            })
        }
        ,
        this.addFold = function(e) {
            if (e.sameRow) {
                if (e.start.row < this.startRow || e.endRow > this.endRow)
                    throw new Error("Can't add a fold to this FoldLine as it has no connection");
                this.folds.push(e),
                this.folds.sort(function(e, t) {
                    return -e.range.compareEnd(t.start.row, t.start.column)
                }),
                this.range.compareEnd(e.start.row, e.start.column) > 0 ? (this.end.row = e.end.row,
                this.end.column = e.end.column) : this.range.compareStart(e.end.row, e.end.column) < 0 && (this.start.row = e.start.row,
                this.start.column = e.start.column)
            } else if (e.start.row == this.end.row)
                this.folds.push(e),
                this.end.row = e.end.row,
                this.end.column = e.end.column;
            else {
                if (e.end.row != this.start.row)
                    throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                this.folds.unshift(e),
                this.start.row = e.start.row,
                this.start.column = e.start.column
            }
            e.foldLine = this
        }
        ,
        this.containsRow = function(e) {
            return e >= this.start.row && e <= this.end.row
        }
        ,
        this.walk = function(e, t, i) {
            var n, r, o, s = 0, a = this.folds, l = !0;
            null == t && (t = this.end.row,
            i = this.end.column);
            for (var c = 0; c < a.length; c++) {
                if (n = a[c],
                r = n.range.compareStart(t, i),
                -1 == r)
                    return void e(null, t, i, s, l);
                if (o = e(null, n.start.row, n.start.column, s, l),
                o = !o && e(n.placeholder, n.start.row, n.start.column, s),
                o || 0 === r)
                    return;
                l = !n.sameRow,
                s = n.end.column
            }
            e(null, t, i, s, l)
        }
        ,
        this.getNextFoldTo = function(e, t) {
            for (var i, n, r = 0; r < this.folds.length; r++) {
                if (i = this.folds[r],
                n = i.range.compareEnd(e, t),
                -1 == n)
                    return {
                        fold: i,
                        kind: "after"
                    };
                if (0 === n)
                    return {
                        fold: i,
                        kind: "inside"
                    }
            }
            return null
        }
        ,
        this.addRemoveChars = function(e, t, i) {
            var n, r, o = this.getNextFoldTo(e, t);
            if (o)
                if (n = o.fold,
                "inside" == o.kind && n.start.column != t && n.start.row != e)
                    window.console && window.console.log(e, t, n);
                else if (n.start.row == e) {
                    r = this.folds;
                    var s = r.indexOf(n);
                    for (0 === s && (this.start.column += i),
                    s; s < r.length; s++) {
                        if (n = r[s],
                        n.start.column += i,
                        !n.sameRow)
                            return;
                        n.end.column += i
                    }
                    this.end.column += i
                }
        }
        ,
        this.split = function(e, t) {
            var n = this.getNextFoldTo(e, t);
            if (!n || "inside" == n.kind)
                return null;
            var r = n.fold
              , o = this.folds
              , s = this.foldData
              , a = o.indexOf(r)
              , l = o[a - 1];
            this.end.row = l.end.row,
            this.end.column = l.end.column,
            o = o.splice(a, o.length - a);
            var c = new i(s,o);
            return s.splice(s.indexOf(this) + 1, 0, c),
            c
        }
        ,
        this.merge = function(e) {
            for (var t = e.folds, i = 0; i < t.length; i++)
                this.addFold(t[i]);
            var n = this.foldData;
            n.splice(n.indexOf(e), 1)
        }
        ,
        this.toString = function() {
            var e = [this.range.toString() + ": ["];
            return this.folds.forEach(function(t) {
                e.push("  " + t.toString())
            }),
            e.push("]"),
            e.join("\n")
        }
        ,
        this.idxToPosition = function(e) {
            for (var t = 0, i = 0; i < this.folds.length; i++) {
                var n = this.folds[i];
                if (e -= n.start.column - t,
                0 > e)
                    return {
                        row: n.start.row,
                        column: n.start.column + e
                    };
                if (e -= n.placeholder.length,
                0 > e)
                    return n.start;
                t = n.end.column
            }
            return {
                row: this.end.row,
                column: this.end.column + e
            }
        }
    }
    ).call(i.prototype),
    t.FoldLine = i
}),
define("ace/range_list", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var i = e("./range").Range
      , n = i.comparePoints
      , r = function() {
        this.ranges = []
    };
    (function() {
        this.comparePoints = n,
        this.pointIndex = function(e, t, i) {
            for (var r = this.ranges, o = i || 0; o < r.length; o++) {
                var s = r[o]
                  , a = n(e, s.end);
                if (!(a > 0)) {
                    var l = n(e, s.start);
                    return 0 === a ? t && 0 !== l ? -o - 2 : o : l > 0 || 0 === l && !t ? o : -o - 1
                }
            }
            return -o - 1
        }
        ,
        this.add = function(e) {
            var t = !e.isEmpty()
              , i = this.pointIndex(e.start, t);
            0 > i && (i = -i - 1);
            var n = this.pointIndex(e.end, t, i);
            return 0 > n ? n = -n - 1 : n++,
            this.ranges.splice(i, n - i, e)
        }
        ,
        this.addList = function(e) {
            for (var t = [], i = e.length; i--; )
                t.push.apply(t, this.add(e[i]));
            return t
        }
        ,
        this.substractPoint = function(e) {
            var t = this.pointIndex(e);
            return t >= 0 ? this.ranges.splice(t, 1) : void 0
        }
        ,
        this.merge = function() {
            var e = []
              , t = this.ranges;
            t = t.sort(function(e, t) {
                return n(e.start, t.start)
            });
            for (var i, r = t[0], o = 1; o < t.length; o++) {
                i = r,
                r = t[o];
                var s = n(i.end, r.start);
                0 > s || (0 != s || i.isEmpty() || r.isEmpty()) && (n(i.end, r.end) < 0 && (i.end.row = r.end.row,
                i.end.column = r.end.column),
                t.splice(o, 1),
                e.push(r),
                r = i,
                o--)
            }
            return this.ranges = t,
            e
        }
        ,
        this.contains = function(e, t) {
            return this.pointIndex({
                row: e,
                column: t
            }) >= 0
        }
        ,
        this.containsPoint = function(e) {
            return this.pointIndex(e) >= 0
        }
        ,
        this.rangeAtPoint = function(e) {
            var t = this.pointIndex(e);
            return t >= 0 ? this.ranges[t] : void 0
        }
        ,
        this.clipRows = function(e, t) {
            var i = this.ranges;
            if (i[0].start.row > t || i[i.length - 1].start.row < e)
                return [];
            var n = this.pointIndex({
                row: e,
                column: 0
            });
            0 > n && (n = -n - 1);
            var r = this.pointIndex({
                row: t,
                column: 0
            }, n);
            0 > r && (r = -r - 1);
            for (var o = [], s = n; r > s; s++)
                o.push(i[s]);
            return o
        }
        ,
        this.removeAll = function() {
            return this.ranges.splice(0, this.ranges.length)
        }
        ,
        this.attach = function(e) {
            this.session && this.detach(),
            this.session = e,
            this.onChange = this.$onChange.bind(this),
            this.session.on("change", this.onChange)
        }
        ,
        this.detach = function() {
            this.session && (this.session.removeListener("change", this.onChange),
            this.session = null)
        }
        ,
        this.$onChange = function(e) {
            if ("insert" == e.action)
                var t = e.start
                  , i = e.end;
            else
                var i = e.start
                  , t = e.end;
            for (var n = t.row, r = i.row, o = r - n, s = -t.column + i.column, a = this.ranges, l = 0, c = a.length; c > l; l++) {
                var h = a[l];
                if (!(h.end.row < n)) {
                    if (h.start.row > n)
                        break;
                    if (h.start.row == n && h.start.column >= t.column && (h.start.column != t.column || !this.$insertRight) && (h.start.column += s,
                    h.start.row += o),
                    h.end.row == n && h.end.column >= t.column) {
                        if (h.end.column == t.column && this.$insertRight)
                            continue;
                        h.end.column == t.column && s > 0 && c - 1 > l && h.end.column > h.start.column && h.end.column == a[l + 1].start.column && (h.end.column -= s),
                        h.end.column += s,
                        h.end.row += o
                    }
                }
            }
            if (0 != o && c > l)
                for (; c > l; l++) {
                    var h = a[l];
                    h.start.row += o,
                    h.end.row += o
                }
        }
    }
    ).call(r.prototype),
    t.RangeList = r
}),
define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function(e, t) {
    "use strict";
    function i(e, t) {
        e.row -= t.row,
        0 == e.row && (e.column -= t.column)
    }
    function n(e, t) {
        i(e.start, t),
        i(e.end, t)
    }
    function r(e, t) {
        0 == e.row && (e.column += t.column),
        e.row += t.row
    }
    function o(e, t) {
        r(e.start, t),
        r(e.end, t)
    }
    var s = (e("../range").Range,
    e("../range_list").RangeList)
      , a = e("../lib/oop")
      , l = t.Fold = function(e, t) {
        this.foldLine = null,
        this.placeholder = t,
        this.range = e,
        this.start = e.start,
        this.end = e.end,
        this.sameRow = e.start.row == e.end.row,
        this.subFolds = this.ranges = []
    }
    ;
    a.inherits(l, s),
    function() {
        this.toString = function() {
            return '"' + this.placeholder + '" ' + this.range.toString()
        }
        ,
        this.setFoldLine = function(e) {
            this.foldLine = e,
            this.subFolds.forEach(function(t) {
                t.setFoldLine(e)
            })
        }
        ,
        this.clone = function() {
            var e = this.range.clone()
              , t = new l(e,this.placeholder);
            return this.subFolds.forEach(function(e) {
                t.subFolds.push(e.clone())
            }),
            t.collapseChildren = this.collapseChildren,
            t
        }
        ,
        this.addSubFold = function(e) {
            if (!this.range.isEqual(e)) {
                if (!this.range.containsRange(e))
                    throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                n(e, this.start);
                for (var t = e.start.row, i = e.start.column, r = 0, o = -1; r < this.subFolds.length && (o = this.subFolds[r].range.compare(t, i),
                1 == o); r++)
                    ;
                var s = this.subFolds[r];
                if (0 == o)
                    return s.addSubFold(e);
                for (var t = e.range.end.row, i = e.range.end.column, a = r, o = -1; a < this.subFolds.length && (o = this.subFolds[a].range.compare(t, i),
                1 == o); a++)
                    ;
                {
                    this.subFolds[a]
                }
                if (0 == o)
                    throw new Error("A fold can't intersect already existing fold" + e.range + this.range);
                {
                    this.subFolds.splice(r, a - r, e)
                }
                return e.setFoldLine(this.foldLine),
                e
            }
        }
        ,
        this.restoreRange = function(e) {
            return o(e, this.start)
        }
    }
    .call(l.prototype)
}),
define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(e, t) {
    "use strict";
    function i() {
        this.getFoldAt = function(e, t, i) {
            var n = this.getFoldLine(e);
            if (!n)
                return null;
            for (var r = n.folds, o = 0; o < r.length; o++) {
                var s = r[o];
                if (s.range.contains(e, t)) {
                    if (1 == i && s.range.isEnd(e, t))
                        continue;
                    if (-1 == i && s.range.isStart(e, t))
                        continue;
                    return s
                }
            }
        }
        ,
        this.getFoldsInRange = function(e) {
            var t = e.start
              , i = e.end
              , n = this.$foldData
              , r = [];
            t.column += 1,
            i.column -= 1;
            for (var o = 0; o < n.length; o++) {
                var s = n[o].range.compareRange(e);
                if (2 != s) {
                    if (-2 == s)
                        break;
                    for (var a = n[o].folds, l = 0; l < a.length; l++) {
                        var c = a[l];
                        if (s = c.range.compareRange(e),
                        -2 == s)
                            break;
                        if (2 != s) {
                            if (42 == s)
                                break;
                            r.push(c)
                        }
                    }
                }
            }
            return t.column -= 1,
            i.column += 1,
            r
        }
        ,
        this.getFoldsInRangeList = function(e) {
            if (Array.isArray(e)) {
                var t = [];
                e.forEach(function(e) {
                    t = t.concat(this.getFoldsInRange(e))
                }, this)
            } else
                var t = this.getFoldsInRange(e);
            return t
        }
        ,
        this.getAllFolds = function() {
            for (var e = [], t = this.$foldData, i = 0; i < t.length; i++)
                for (var n = 0; n < t[i].folds.length; n++)
                    e.push(t[i].folds[n]);
            return e
        }
        ,
        this.getFoldStringAt = function(e, t, i, n) {
            if (n = n || this.getFoldLine(e),
            !n)
                return null;
            for (var r, o, s = {
                end: {
                    column: 0
                }
            }, a = 0; a < n.folds.length; a++) {
                o = n.folds[a];
                var l = o.range.compareEnd(e, t);
                if (-1 == l) {
                    r = this.getLine(o.start.row).substring(s.end.column, o.start.column);
                    break
                }
                if (0 === l)
                    return null;
                s = o
            }
            return r || (r = this.getLine(o.start.row).substring(s.end.column)),
            -1 == i ? r.substring(0, t - s.end.column) : 1 == i ? r.substring(t - s.end.column) : r
        }
        ,
        this.getFoldLine = function(e, t) {
            var i = this.$foldData
              , n = 0;
            for (t && (n = i.indexOf(t)),
            -1 == n && (n = 0),
            n; n < i.length; n++) {
                var r = i[n];
                if (r.start.row <= e && r.end.row >= e)
                    return r;
                if (r.end.row > e)
                    return null
            }
            return null
        }
        ,
        this.getNextFoldLine = function(e, t) {
            var i = this.$foldData
              , n = 0;
            for (t && (n = i.indexOf(t)),
            -1 == n && (n = 0),
            n; n < i.length; n++) {
                var r = i[n];
                if (r.end.row >= e)
                    return r
            }
            return null
        }
        ,
        this.getFoldedRowCount = function(e, t) {
            for (var i = this.$foldData, n = t - e + 1, r = 0; r < i.length; r++) {
                var o = i[r]
                  , s = o.end.row
                  , a = o.start.row;
                if (s >= t) {
                    t > a && (a >= e ? n -= t - a : n = 0);
                    break
                }
                s >= e && (n -= a >= e ? s - a : s - e + 1)
            }
            return n
        }
        ,
        this.$addFoldLine = function(e) {
            return this.$foldData.push(e),
            this.$foldData.sort(function(e, t) {
                return e.start.row - t.start.row
            }),
            e
        }
        ,
        this.addFold = function(e, t) {
            var i, n = this.$foldData, s = !1;
            e instanceof o ? i = e : (i = new o(t,e),
            i.collapseChildren = t.collapseChildren),
            this.$clipRangeToDocument(i.range);
            var a = i.start.row
              , l = i.start.column
              , c = i.end.row
              , h = i.end.column;
            if (c > a || a == c && h - 2 >= l) {
                var d = this.getFoldAt(a, l, 1)
                  , u = this.getFoldAt(c, h, -1);
                if (d && u == d)
                    return d.addSubFold(i);
                d && !d.range.isStart(a, l) && this.removeFold(d),
                u && !u.range.isEnd(c, h) && this.removeFold(u);
                var p = this.getFoldsInRange(i.range);
                p.length > 0 && (this.removeFolds(p),
                p.forEach(function(e) {
                    i.addSubFold(e)
                }));
                for (var g = 0; g < n.length; g++) {
                    var m = n[g];
                    if (c == m.start.row) {
                        m.addFold(i),
                        s = !0;
                        break
                    }
                    if (a == m.end.row) {
                        if (m.addFold(i),
                        s = !0,
                        !i.sameRow) {
                            var f = n[g + 1];
                            if (f && f.start.row == c) {
                                m.merge(f);
                                break
                            }
                        }
                        break
                    }
                    if (c <= m.start.row)
                        break
                }
                return s || (m = this.$addFoldLine(new r(this.$foldData,i))),
                this.$useWrapMode ? this.$updateWrapData(m.start.row, m.start.row) : this.$updateRowLengthCache(m.start.row, m.start.row),
                this.$modified = !0,
                this._signal("changeFold", {
                    data: i,
                    action: "add"
                }),
                i
            }
            throw new Error("The range has to be at least 2 characters width")
        }
        ,
        this.addFolds = function(e) {
            e.forEach(function(e) {
                this.addFold(e)
            }, this)
        }
        ,
        this.removeFold = function(e) {
            var t = e.foldLine
              , i = t.start.row
              , n = t.end.row
              , r = this.$foldData
              , o = t.folds;
            if (1 == o.length)
                r.splice(r.indexOf(t), 1);
            else if (t.range.isEnd(e.end.row, e.end.column))
                o.pop(),
                t.end.row = o[o.length - 1].end.row,
                t.end.column = o[o.length - 1].end.column;
            else if (t.range.isStart(e.start.row, e.start.column))
                o.shift(),
                t.start.row = o[0].start.row,
                t.start.column = o[0].start.column;
            else if (e.sameRow)
                o.splice(o.indexOf(e), 1);
            else {
                var s = t.split(e.start.row, e.start.column);
                o = s.folds,
                o.shift(),
                s.start.row = o[0].start.row,
                s.start.column = o[0].start.column
            }
            this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)),
            this.$modified = !0,
            this._signal("changeFold", {
                data: e,
                action: "remove"
            })
        }
        ,
        this.removeFolds = function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                t.push(e[i]);
            t.forEach(function(e) {
                this.removeFold(e)
            }, this),
            this.$modified = !0
        }
        ,
        this.expandFold = function(e) {
            this.removeFold(e),
            e.subFolds.forEach(function(t) {
                e.restoreRange(t),
                this.addFold(t)
            }, this),
            e.collapseChildren > 0 && this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1),
            e.subFolds = []
        }
        ,
        this.expandFolds = function(e) {
            e.forEach(function(e) {
                this.expandFold(e)
            }, this)
        }
        ,
        this.unfold = function(e, t) {
            var i, r;
            if (null == e ? (i = new n(0,0,this.getLength(),0),
            t = !0) : i = "number" == typeof e ? new n(e,0,e,this.getLine(e).length) : "row"in e ? n.fromPoints(e, e) : e,
            r = this.getFoldsInRangeList(i),
            t)
                this.removeFolds(r);
            else
                for (var o = r; o.length; )
                    this.expandFolds(o),
                    o = this.getFoldsInRangeList(i);
            return r.length ? r : void 0
        }
        ,
        this.isRowFolded = function(e, t) {
            return !!this.getFoldLine(e, t)
        }
        ,
        this.getRowFoldEnd = function(e, t) {
            var i = this.getFoldLine(e, t);
            return i ? i.end.row : e
        }
        ,
        this.getRowFoldStart = function(e, t) {
            var i = this.getFoldLine(e, t);
            return i ? i.start.row : e
        }
        ,
        this.getFoldDisplayLine = function(e, t, i, n, r) {
            null == n && (n = e.start.row),
            null == r && (r = 0),
            null == t && (t = e.end.row),
            null == i && (i = this.getLine(t).length);
            var o = this.doc
              , s = "";
            return e.walk(function(e, t, i, a) {
                if (!(n > t)) {
                    if (t == n) {
                        if (r > i)
                            return;
                        a = Math.max(r, a)
                    }
                    s += null != e ? e : o.getLine(t).substring(a, i)
                }
            }, t, i),
            s
        }
        ,
        this.getDisplayLine = function(e, t, i, n) {
            var r = this.getFoldLine(e);
            if (!r) {
                var o;
                return o = this.doc.getLine(e),
                o.substring(n || 0, t || o.length)
            }
            return this.getFoldDisplayLine(r, e, t, i, n)
        }
        ,
        this.$cloneFoldData = function() {
            var e = [];
            return e = this.$foldData.map(function(t) {
                var i = t.folds.map(function(e) {
                    return e.clone()
                });
                return new r(e,i)
            })
        }
        ,
        this.toggleFold = function(e) {
            var t, i, n = this.selection, r = n.getRange();
            if (r.isEmpty()) {
                var o = r.start;
                if (t = this.getFoldAt(o.row, o.column))
                    return void this.expandFold(t);
                (i = this.findMatchingBracket(o)) ? 1 == r.comparePoint(i) ? r.end = i : (r.start = i,
                r.start.column++,
                r.end.column--) : (i = this.findMatchingBracket({
                    row: o.row,
                    column: o.column + 1
                })) ? (1 == r.comparePoint(i) ? r.end = i : r.start = i,
                r.start.column++) : r = this.getCommentFoldRange(o.row, o.column) || r
            } else {
                var s = this.getFoldsInRange(r);
                if (e && s.length)
                    return void this.expandFolds(s);
                1 == s.length && (t = s[0])
            }
            if (t || (t = this.getFoldAt(r.start.row, r.start.column)),
            t && t.range.toString() == r.toString())
                return void this.expandFold(t);
            var a = "...";
            if (!r.isMultiLine()) {
                if (a = this.getTextRange(r),
                a.length < 4)
                    return;
                a = a.trim().substring(0, 2) + ".."
            }
            this.addFold(a, r)
        }
        ,
        this.getCommentFoldRange = function(e, t, i) {
            var r = new s(this,e,t)
              , o = r.getCurrentToken();
            if (o && /^comment|string/.test(o.type)) {
                var a = new n
                  , l = new RegExp(o.type.replace(/\..*/, "\\."));
                if (1 != i) {
                    do
                        o = r.stepBackward();
                    while (o && l.test(o.type));r.stepForward()
                }
                if (a.start.row = r.getCurrentTokenRow(),
                a.start.column = r.getCurrentTokenColumn() + 2,
                r = new s(this,e,t),
                -1 != i) {
                    do
                        o = r.stepForward();
                    while (o && l.test(o.type));o = r.stepBackward()
                } else
                    o = r.getCurrentToken();
                return a.end.row = r.getCurrentTokenRow(),
                a.end.column = r.getCurrentTokenColumn() + o.value.length - 2,
                a
            }
        }
        ,
        this.foldAll = function(e, t, i) {
            void 0 == i && (i = 1e5);
            var n = this.foldWidgets;
            if (n) {
                t = t || this.getLength(),
                e = e || 0;
                for (var r = e; t > r; r++)
                    if (null == n[r] && (n[r] = this.getFoldWidget(r)),
                    "start" == n[r]) {
                        var o = this.getFoldWidgetRange(r);
                        if (o && o.isMultiLine() && o.end.row <= t && o.start.row >= e) {
                            r = o.end.row;
                            try {
                                var s = this.addFold("...", o);
                                s && (s.collapseChildren = i)
                            } catch (a) {}
                        }
                    }
            }
        }
        ,
        this.$foldStyles = {
            manual: 1,
            markbegin: 1,
            markbeginend: 1
        },
        this.$foldStyle = "markbegin",
        this.setFoldStyle = function(e) {
            if (!this.$foldStyles[e])
                throw new Error("invalid fold style: " + e + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
            if (this.$foldStyle != e) {
                this.$foldStyle = e,
                "manual" == e && this.unfold();
                var t = this.$foldMode;
                this.$setFolding(null),
                this.$setFolding(t)
            }
        }
        ,
        this.$setFolding = function(e) {
            return this.$foldMode != e ? (this.$foldMode = e,
            this.off("change", this.$updateFoldWidgets),
            this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets),
            this._signal("changeAnnotation"),
            e && "manual" != this.$foldStyle ? (this.foldWidgets = [],
            this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle),
            this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle),
            this.$updateFoldWidgets = this.updateFoldWidgets.bind(this),
            this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this),
            this.on("change", this.$updateFoldWidgets),
            this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets),
            void 0) : void (this.foldWidgets = null)) : void 0
        }
        ,
        this.getParentFoldRangeData = function(e, t) {
            var i = this.foldWidgets;
            if (!i || t && i[e])
                return {};
            for (var n, r = e - 1; r >= 0; ) {
                var o = i[r];
                if (null == o && (o = i[r] = this.getFoldWidget(r)),
                "start" == o) {
                    var s = this.getFoldWidgetRange(r);
                    if (n || (n = s),
                    s && s.end.row >= e)
                        break
                }
                r--
            }
            return {
                range: -1 !== r && s,
                firstRange: n
            }
        }
        ,
        this.onFoldWidgetClick = function(e, t) {
            t = t.domEvent;
            var i = {
                children: t.shiftKey,
                all: t.ctrlKey || t.metaKey,
                siblings: t.altKey
            }
              , n = this.$toggleFoldWidget(e, i);
            if (!n) {
                var r = t.target || t.srcElement;
                r && /ace_fold-widget/.test(r.className) && (r.className += " ace_invalid")
            }
        }
        ,
        this.$toggleFoldWidget = function(e, t) {
            if (this.getFoldWidget) {
                var i = this.getFoldWidget(e)
                  , n = this.getLine(e)
                  , r = "end" === i ? -1 : 1
                  , o = this.getFoldAt(e, -1 === r ? 0 : n.length, r);
                if (o)
                    return t.children || t.all ? this.removeFold(o) : this.expandFold(o),
                    o;
                var s = this.getFoldWidgetRange(e, !0);
                if (s && !s.isMultiLine() && (o = this.getFoldAt(s.start.row, s.start.column, 1),
                o && s.isEqual(o.range)))
                    return this.removeFold(o),
                    o;
                if (t.siblings) {
                    var a = this.getParentFoldRangeData(e);
                    if (a.range)
                        var l = a.range.start.row + 1
                          , c = a.range.end.row;
                    this.foldAll(l, c, t.all ? 1e4 : 0)
                } else
                    t.children ? (c = s ? s.end.row : this.getLength(),
                    this.foldAll(e + 1, c, t.all ? 1e4 : 0)) : s && (t.all && (s.collapseChildren = 1e4),
                    this.addFold("...", s));
                return s
            }
        }
        ,
        this.toggleFoldWidget = function() {
            var e = this.selection.getCursor().row;
            e = this.getRowFoldStart(e);
            var t = this.$toggleFoldWidget(e, {});
            if (!t) {
                var i = this.getParentFoldRangeData(e, !0);
                if (t = i.range || i.firstRange) {
                    e = t.start.row;
                    var n = this.getFoldAt(e, this.getLine(e).length, 1);
                    n ? this.removeFold(n) : this.addFold("...", t)
                }
            }
        }
        ,
        this.updateFoldWidgets = function(e) {
            var t = e.start.row
              , i = e.end.row - t;
            if (0 === i)
                this.foldWidgets[t] = null;
            else if ("remove" == e.action)
                this.foldWidgets.splice(t, i + 1, null);
            else {
                var n = Array(i + 1);
                n.unshift(t, 1),
                this.foldWidgets.splice.apply(this.foldWidgets, n)
            }
        }
        ,
        this.tokenizerUpdateFoldWidgets = function(e) {
            var t = e.data;
            t.first != t.last && this.foldWidgets.length > t.first && this.foldWidgets.splice(t.first, this.foldWidgets.length)
        }
    }
    var n = e("../range").Range
      , r = e("./fold_line").FoldLine
      , o = e("./fold").Fold
      , s = e("../token_iterator").TokenIterator;
    t.Folding = i
}),
define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(e, t) {
    "use strict";
    function i() {
        this.findMatchingBracket = function(e, t) {
            if (0 == e.column)
                return null;
            var i = t || this.getLine(e.row).charAt(e.column - 1);
            if ("" == i)
                return null;
            var n = i.match(/([\(\[\{])|([\)\]\}])/);
            return n ? n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e) : null
        }
        ,
        this.getBracketRange = function(e) {
            var t, i = this.getLine(e.row), n = !0, o = i.charAt(e.column - 1), s = o && o.match(/([\(\[\{])|([\)\]\}])/);
            if (s || (o = i.charAt(e.column),
            e = {
                row: e.row,
                column: e.column + 1
            },
            s = o && o.match(/([\(\[\{])|([\)\]\}])/),
            n = !1),
            !s)
                return null;
            if (s[1]) {
                var a = this.$findClosingBracket(s[1], e);
                if (!a)
                    return null;
                t = r.fromPoints(e, a),
                n || (t.end.column++,
                t.start.column--),
                t.cursor = t.end
            } else {
                var a = this.$findOpeningBracket(s[2], e);
                if (!a)
                    return null;
                t = r.fromPoints(a, e),
                n || (t.start.column++,
                t.end.column--),
                t.cursor = t.start
            }
            return t
        }
        ,
        this.$brackets = {
            ")": "(",
            "(": ")",
            "]": "[",
            "[": "]",
            "{": "}",
            "}": "{"
        },
        this.$findOpeningBracket = function(e, t, i) {
            var r = this.$brackets[e]
              , o = 1
              , s = new n(this,t.row,t.column)
              , a = s.getCurrentToken();
            if (a || (a = s.stepForward()),
            a) {
                i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                for (var l = t.column - s.getCurrentTokenColumn() - 2, c = a.value; ; ) {
                    for (; l >= 0; ) {
                        var h = c.charAt(l);
                        if (h == r) {
                            if (o -= 1,
                            0 == o)
                                return {
                                    row: s.getCurrentTokenRow(),
                                    column: l + s.getCurrentTokenColumn()
                                }
                        } else
                            h == e && (o += 1);
                        l -= 1
                    }
                    do
                        a = s.stepBackward();
                    while (a && !i.test(a.type));if (null == a)
                        break;
                    c = a.value,
                    l = c.length - 1
                }
                return null
            }
        }
        ,
        this.$findClosingBracket = function(e, t, i) {
            var r = this.$brackets[e]
              , o = 1
              , s = new n(this,t.row,t.column)
              , a = s.getCurrentToken();
            if (a || (a = s.stepForward()),
            a) {
                i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                for (var l = t.column - s.getCurrentTokenColumn(); ; ) {
                    for (var c = a.value, h = c.length; h > l; ) {
                        var d = c.charAt(l);
                        if (d == r) {
                            if (o -= 1,
                            0 == o)
                                return {
                                    row: s.getCurrentTokenRow(),
                                    column: l + s.getCurrentTokenColumn()
                                }
                        } else
                            d == e && (o += 1);
                        l += 1
                    }
                    do
                        a = s.stepForward();
                    while (a && !i.test(a.type));if (null == a)
                        break;
                    l = 0
                }
                return null
            }
        }
    }
    var n = e("../token_iterator").TokenIterator
      , r = e("../range").Range;
    t.BracketMatch = i
}),
define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/lang")
      , r = e("./config")
      , o = e("./lib/event_emitter").EventEmitter
      , s = e("./selection").Selection
      , a = e("./mode/text").Mode
      , l = e("./range").Range
      , c = e("./document").Document
      , h = e("./background_tokenizer").BackgroundTokenizer
      , d = e("./search_highlight").SearchHighlight
      , u = function(e, t) {
        this.$breakpoints = [],
        this.$decorations = [],
        this.$frontMarkers = {},
        this.$backMarkers = {},
        this.$markerId = 1,
        this.$undoSelect = !0,
        this.$foldData = [],
        this.id = "session" + ++u.$uid,
        this.$foldData.toString = function() {
            return this.join("\n")
        }
        ,
        this.on("changeFold", this.onChangeFold.bind(this)),
        this.$onChange = this.onChange.bind(this),
        "object" == typeof e && e.getLine || (e = new c(e)),
        this.setDocument(e),
        this.selection = new s(this),
        r.resetOptions(this),
        this.setMode(t),
        r._signal("session", this)
    };
    (function() {
        function e(e) {
            return 4352 > e ? !1 : e >= 4352 && 4447 >= e || e >= 4515 && 4519 >= e || e >= 4602 && 4607 >= e || e >= 9001 && 9002 >= e || e >= 11904 && 11929 >= e || e >= 11931 && 12019 >= e || e >= 12032 && 12245 >= e || e >= 12272 && 12283 >= e || e >= 12288 && 12350 >= e || e >= 12353 && 12438 >= e || e >= 12441 && 12543 >= e || e >= 12549 && 12589 >= e || e >= 12593 && 12686 >= e || e >= 12688 && 12730 >= e || e >= 12736 && 12771 >= e || e >= 12784 && 12830 >= e || e >= 12832 && 12871 >= e || e >= 12880 && 13054 >= e || e >= 13056 && 19903 >= e || e >= 19968 && 42124 >= e || e >= 42128 && 42182 >= e || e >= 43360 && 43388 >= e || e >= 44032 && 55203 >= e || e >= 55216 && 55238 >= e || e >= 55243 && 55291 >= e || e >= 63744 && 64255 >= e || e >= 65040 && 65049 >= e || e >= 65072 && 65106 >= e || e >= 65108 && 65126 >= e || e >= 65128 && 65131 >= e || e >= 65281 && 65376 >= e || e >= 65504 && 65510 >= e
        }
        i.implement(this, o),
        this.setDocument = function(e) {
            this.doc && this.doc.removeListener("change", this.$onChange),
            this.doc = e,
            e.on("change", this.$onChange),
            this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()),
            this.resetCaches()
        }
        ,
        this.getDocument = function() {
            return this.doc
        }
        ,
        this.$resetRowCache = function(e) {
            if (!e)
                return this.$docRowCache = [],
                void (this.$screenRowCache = []);
            var t = this.$docRowCache.length
              , i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
            t > i && (this.$docRowCache.splice(i, t),
            this.$screenRowCache.splice(i, t))
        }
        ,
        this.$getRowCacheIndex = function(e, t) {
            for (var i = 0, n = e.length - 1; n >= i; ) {
                var r = i + n >> 1
                  , o = e[r];
                if (t > o)
                    i = r + 1;
                else {
                    if (!(o > t))
                        return r;
                    n = r - 1
                }
            }
            return i - 1
        }
        ,
        this.resetCaches = function() {
            this.$modified = !0,
            this.$wrapData = [],
            this.$rowLengthCache = [],
            this.$resetRowCache(0),
            this.bgTokenizer && this.bgTokenizer.start(0)
        }
        ,
        this.onChangeFold = function(e) {
            var t = e.data;
            this.$resetRowCache(t.start.row)
        }
        ,
        this.onChange = function(e) {
            this.$modified = !0,
            this.$resetRowCache(e.start.row);
            var t = this.$updateInternalDataOnChange(e);
            !this.$fromUndo && this.$undoManager && !e.ignore && (this.$deltasDoc.push(e),
            t && 0 != t.length && this.$deltasFold.push({
                action: "removeFolds",
                folds: t
            }),
            this.$informUndoManager.schedule()),
            this.bgTokenizer && this.bgTokenizer.$updateOnChange(e),
            this._signal("change", e)
        }
        ,
        this.setValue = function(e) {
            this.doc.setValue(e),
            this.selection.moveTo(0, 0),
            this.$resetRowCache(0),
            this.$deltas = [],
            this.$deltasDoc = [],
            this.$deltasFold = [],
            this.setUndoManager(this.$undoManager),
            this.getUndoManager().reset()
        }
        ,
        this.getValue = this.toString = function() {
            return this.doc.getValue()
        }
        ,
        this.getSelection = function() {
            return this.selection
        }
        ,
        this.getState = function(e) {
            return this.bgTokenizer.getState(e)
        }
        ,
        this.getTokens = function(e) {
            return this.bgTokenizer.getTokens(e)
        }
        ,
        this.getTokenAt = function(e, t) {
            var i, n = this.bgTokenizer.getTokens(e), r = 0;
            if (null == t)
                o = n.length - 1,
                r = this.getLine(e).length;
            else
                for (var o = 0; o < n.length && (r += n[o].value.length,
                !(r >= t)); o++)
                    ;
            return i = n[o],
            i ? (i.index = o,
            i.start = r - i.value.length,
            i) : null
        }
        ,
        this.setUndoManager = function(e) {
            if (this.$undoManager = e,
            this.$deltas = [],
            this.$deltasDoc = [],
            this.$deltasFold = [],
            this.$informUndoManager && this.$informUndoManager.cancel(),
            e) {
                var t = this;
                this.$syncInformUndoManager = function() {
                    t.$informUndoManager.cancel(),
                    t.$deltasFold.length && (t.$deltas.push({
                        group: "fold",
                        deltas: t.$deltasFold
                    }),
                    t.$deltasFold = []),
                    t.$deltasDoc.length && (t.$deltas.push({
                        group: "doc",
                        deltas: t.$deltasDoc
                    }),
                    t.$deltasDoc = []),
                    t.$deltas.length > 0 && e.execute({
                        action: "aceupdate",
                        args: [t.$deltas, t],
                        merge: t.mergeUndoDeltas
                    }),
                    t.mergeUndoDeltas = !1,
                    t.$deltas = []
                }
                ,
                this.$informUndoManager = n.delayedCall(this.$syncInformUndoManager)
            }
        }
        ,
        this.markUndoGroup = function() {
            this.$syncInformUndoManager && this.$syncInformUndoManager()
        }
        ,
        this.$defaultUndoManager = {
            undo: function() {},
            redo: function() {},
            reset: function() {}
        },
        this.getUndoManager = function() {
            return this.$undoManager || this.$defaultUndoManager
        }
        ,
        this.getTabString = function() {
            return this.getUseSoftTabs() ? n.stringRepeat(" ", this.getTabSize()) : "   "
        }
        ,
        this.setUseSoftTabs = function(e) {
            this.setOption("useSoftTabs", e)
        }
        ,
        this.getUseSoftTabs = function() {
            return this.$useSoftTabs && !this.$mode.$indentWithTabs
        }
        ,
        this.setTabSize = function(e) {
            this.setOption("tabSize", e)
        }
        ,
        this.getTabSize = function() {
            return this.$tabSize
        }
        ,
        this.isTabStop = function(e) {
            return this.$useSoftTabs && e.column % this.$tabSize === 0
        }
        ,
        this.$overwrite = !1,
        this.setOverwrite = function(e) {
            this.setOption("overwrite", e)
        }
        ,
        this.getOverwrite = function() {
            return this.$overwrite
        }
        ,
        this.toggleOverwrite = function() {
            this.setOverwrite(!this.$overwrite)
        }
        ,
        this.addGutterDecoration = function(e, t) {
            this.$decorations[e] || (this.$decorations[e] = ""),
            this.$decorations[e] += " " + t,
            this._signal("changeBreakpoint", {})
        }
        ,
        this.removeGutterDecoration = function(e, t) {
            this.$decorations[e] = (this.$decorations[e] || "").replace(" " + t, ""),
            this._signal("changeBreakpoint", {})
        }
        ,
        this.getBreakpoints = function() {
            return this.$breakpoints
        }
        ,
        this.setBreakpoints = function(e) {
            this.$breakpoints = [];
            for (var t = 0; t < e.length; t++)
                this.$breakpoints[e[t]] = "ace_breakpoint";
            this._signal("changeBreakpoint", {})
        }
        ,
        this.clearBreakpoints = function() {
            this.$breakpoints = [],
            this._signal("changeBreakpoint", {})
        }
        ,
        this.setBreakpoint = function(e, t) {
            void 0 === t && (t = "ace_breakpoint"),
            t ? this.$breakpoints[e] = t : delete this.$breakpoints[e],
            this._signal("changeBreakpoint", {})
        }
        ,
        this.clearBreakpoint = function(e) {
            delete this.$breakpoints[e],
            this._signal("changeBreakpoint", {})
        }
        ,
        this.addMarker = function(e, t, i, n) {
            var r = this.$markerId++
              , o = {
                range: e,
                type: i || "line",
                renderer: "function" == typeof i ? i : null,
                clazz: t,
                inFront: !!n,
                id: r
            };
            return n ? (this.$frontMarkers[r] = o,
            this._signal("changeFrontMarker")) : (this.$backMarkers[r] = o,
            this._signal("changeBackMarker")),
            r
        }
        ,
        this.addDynamicMarker = function(e, t) {
            if (e.update) {
                var i = this.$markerId++;
                return e.id = i,
                e.inFront = !!t,
                t ? (this.$frontMarkers[i] = e,
                this._signal("changeFrontMarker")) : (this.$backMarkers[i] = e,
                this._signal("changeBackMarker")),
                e
            }
        }
        ,
        this.removeMarker = function(e) {
            var t = this.$frontMarkers[e] || this.$backMarkers[e];
            if (t) {
                var i = t.inFront ? this.$frontMarkers : this.$backMarkers;
                t && (delete i[e],
                this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }
        }
        ,
        this.getMarkers = function(e) {
            return e ? this.$frontMarkers : this.$backMarkers
        }
        ,
        this.highlight = function(e) {
            if (!this.$searchHighlight) {
                var t = new d(null,"ace_selected-word","text");
                this.$searchHighlight = this.addDynamicMarker(t)
            }
            this.$searchHighlight.setRegexp(e)
        }
        ,
        this.highlightLines = function(e, t, i, n) {
            "number" != typeof t && (i = t,
            t = e),
            i || (i = "ace_step");
            var r = new l(e,0,t,1 / 0);
            return r.id = this.addMarker(r, i, "fullLine", n),
            r
        }
        ,
        this.setAnnotations = function(e) {
            this.$annotations = e,
            this._signal("changeAnnotation", {})
        }
        ,
        this.getAnnotations = function() {
            return this.$annotations || []
        }
        ,
        this.clearAnnotations = function() {
            this.setAnnotations([])
        }
        ,
        this.$detectNewLine = function(e) {
            var t = e.match(/^.*?(\r?\n)/m);
            this.$autoNewLine = t ? t[1] : "\n"
        }
        ,
        this.getWordRange = function(e, t) {
            var i = this.getLine(e)
              , n = !1;
            if (t > 0 && (n = !!i.charAt(t - 1).match(this.tokenRe)),
            n || (n = !!i.charAt(t).match(this.tokenRe)),
            n)
                var r = this.tokenRe;
            else if (/^\s+$/.test(i.slice(t - 1, t + 1)))
                var r = /\s/;
            else
                var r = this.nonTokenRe;
            var o = t;
            if (o > 0) {
                do
                    o--;
                while (o >= 0 && i.charAt(o).match(r));o++
            }
            for (var s = t; s < i.length && i.charAt(s).match(r); )
                s++;
            return new l(e,o,e,s)
        }
        ,
        this.getAWordRange = function(e, t) {
            for (var i = this.getWordRange(e, t), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/); )
                i.end.column += 1;
            return i
        }
        ,
        this.setNewLineMode = function(e) {
            this.doc.setNewLineMode(e)
        }
        ,
        this.getNewLineMode = function() {
            return this.doc.getNewLineMode()
        }
        ,
        this.setUseWorker = function(e) {
            this.setOption("useWorker", e)
        }
        ,
        this.getUseWorker = function() {
            return this.$useWorker
        }
        ,
        this.onReloadTokenizer = function(e) {
            var t = e.data;
            this.bgTokenizer.start(t.first),
            this._signal("tokenizerUpdate", e)
        }
        ,
        this.$modes = {},
        this.$mode = null,
        this.$modeId = null,
        this.setMode = function(e, t) {
            if (e && "object" == typeof e) {
                if (e.getTokenizer)
                    return this.$onChangeMode(e);
                var i = e
                  , n = i.path
            } else
                n = e || "ace/mode/text";
            return this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new a),
            this.$modes[n] && !i ? (this.$onChangeMode(this.$modes[n]),
            void (t && t())) : (this.$modeId = n,
            r.loadModule(["mode", n], function(e) {
                return this.$modeId !== n ? t && t() : (this.$modes[n] && !i ? this.$onChangeMode(this.$modes[n]) : e && e.Mode && (e = new e.Mode(i),
                i || (this.$modes[n] = e,
                e.$id = n),
                this.$onChangeMode(e)),
                void (t && t()))
            }
            .bind(this)),
            this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0),
            void 0)
        }
        ,
        this.$onChangeMode = function(e, t) {
            if (t || (this.$modeId = e.$id),
            this.$mode !== e) {
                this.$mode = e,
                this.$stopWorker(),
                this.$useWorker && this.$startWorker();
                var i = e.getTokenizer();
                if (void 0 !== i.addEventListener) {
                    var n = this.onReloadTokenizer.bind(this);
                    i.addEventListener("update", n)
                }
                if (this.bgTokenizer)
                    this.bgTokenizer.setTokenizer(i);
                else {
                    this.bgTokenizer = new h(i);
                    var r = this;
                    this.bgTokenizer.addEventListener("update", function(e) {
                        r._signal("tokenizerUpdate", e)
                    })
                }
                this.bgTokenizer.setDocument(this.getDocument()),
                this.tokenRe = e.tokenRe,
                this.nonTokenRe = e.nonTokenRe,
                t || (e.attachToSession && e.attachToSession(this),
                this.$options.wrapMethod.set.call(this, this.$wrapMethod),
                this.$setFolding(e.foldingRules),
                this.bgTokenizer.start(0),
                this._emit("changeMode"))
            }
        }
        ,
        this.$stopWorker = function() {
            this.$worker && (this.$worker.terminate(),
            this.$worker = null)
        }
        ,
        this.$startWorker = function() {
            try {
                this.$worker = this.$mode.createWorker(this)
            } catch (e) {
                r.warn("Could not load worker", e),
                this.$worker = null
            }
        }
        ,
        this.getMode = function() {
            return this.$mode
        }
        ,
        this.$scrollTop = 0,
        this.setScrollTop = function(e) {
            this.$scrollTop === e || isNaN(e) || (this.$scrollTop = e,
            this._signal("changeScrollTop", e))
        }
        ,
        this.getScrollTop = function() {
            return this.$scrollTop
        }
        ,
        this.$scrollLeft = 0,
        this.setScrollLeft = function(e) {
            this.$scrollLeft === e || isNaN(e) || (this.$scrollLeft = e,
            this._signal("changeScrollLeft", e))
        }
        ,
        this.getScrollLeft = function() {
            return this.$scrollLeft
        }
        ,
        this.getScreenWidth = function() {
            return this.$computeWidth(),
            this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
        }
        ,
        this.getLineWidgetMaxWidth = function() {
            if (null != this.lineWidgetsWidth)
                return this.lineWidgetsWidth;
            var e = 0;
            return this.lineWidgets.forEach(function(t) {
                t && t.screenWidth > e && (e = t.screenWidth)
            }),
            this.lineWidgetWidth = e
        }
        ,
        this.$computeWidth = function(e) {
            if (this.$modified || e) {
                if (this.$modified = !1,
                this.$useWrapMode)
                    return this.screenWidth = this.$wrapLimit;
                for (var t = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, r = 0, o = this.$foldData[r], s = o ? o.start.row : 1 / 0, a = t.length, l = 0; a > l; l++) {
                    if (l > s) {
                        if (l = o.end.row + 1,
                        l >= a)
                            break;
                        o = this.$foldData[r++],
                        s = o ? o.start.row : 1 / 0
                    }
                    null == i[l] && (i[l] = this.$getStringScreenWidth(t[l])[0]),
                    i[l] > n && (n = i[l])
                }
                this.screenWidth = n
            }
        }
        ,
        this.getLine = function(e) {
            return this.doc.getLine(e)
        }
        ,
        this.getLines = function(e, t) {
            return this.doc.getLines(e, t)
        }
        ,
        this.getLength = function() {
            return this.doc.getLength()
        }
        ,
        this.getTextRange = function(e) {
            return this.doc.getTextRange(e || this.selection.getRange())
        }
        ,
        this.insert = function(e, t) {
            return this.doc.insert(e, t)
        }
        ,
        this.remove = function(e) {
            return this.doc.remove(e)
        }
        ,
        this.removeFullLines = function(e, t) {
            return this.doc.removeFullLines(e, t)
        }
        ,
        this.undoChanges = function(e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var i = null, n = e.length - 1; -1 != n; n--) {
                    var r = e[n];
                    "doc" == r.group ? (this.doc.revertDeltas(r.deltas),
                    i = this.$getUndoSelection(r.deltas, !0, i)) : r.deltas.forEach(function(e) {
                        this.addFolds(e.folds)
                    }, this)
                }
                return this.$fromUndo = !1,
                i && this.$undoSelect && !t && this.selection.setSelectionRange(i),
                i
            }
        }
        ,
        this.redoChanges = function(e, t) {
            if (e.length) {
                this.$fromUndo = !0;
                for (var i = null, n = 0; n < e.length; n++) {
                    var r = e[n];
                    "doc" == r.group && (this.doc.applyDeltas(r.deltas),
                    i = this.$getUndoSelection(r.deltas, !1, i))
                }
                return this.$fromUndo = !1,
                i && this.$undoSelect && !t && this.selection.setSelectionRange(i),
                i
            }
        }
        ,
        this.setUndoSelect = function(e) {
            this.$undoSelect = e
        }
        ,
        this.$getUndoSelection = function(e, t, i) {
            function n(e) {
                return t ? "insert" !== e.action : "insert" === e.action
            }
            var r, o, s = e[0], a = !1;
            n(s) ? (r = l.fromPoints(s.start, s.end),
            a = !0) : (r = l.fromPoints(s.start, s.start),
            a = !1);
            for (var c = 1; c < e.length; c++)
                s = e[c],
                n(s) ? (o = s.start,
                -1 == r.compare(o.row, o.column) && r.setStart(o),
                o = s.end,
                1 == r.compare(o.row, o.column) && r.setEnd(o),
                a = !0) : (o = s.start,
                -1 == r.compare(o.row, o.column) && (r = l.fromPoints(s.start, s.start)),
                a = !1);
            if (null != i) {
                0 === l.comparePoints(i.start, r.start) && (i.start.column += r.end.column - r.start.column,
                i.end.column += r.end.column - r.start.column);
                var h = i.compareRange(r);
                1 == h ? r.setStart(i.start) : -1 == h && r.setEnd(i.end)
            }
            return r
        }
        ,
        this.replace = function(e, t) {
            return this.doc.replace(e, t)
        }
        ,
        this.moveText = function(e, t, i) {
            var n = this.getTextRange(e)
              , r = this.getFoldsInRange(e)
              , o = l.fromPoints(t, t);
            if (!i) {
                this.remove(e);
                var s = e.start.row - e.end.row
                  , a = s ? -e.end.column : e.start.column - e.end.column;
                a && (o.start.row == e.end.row && o.start.column > e.end.column && (o.start.column += a),
                o.end.row == e.end.row && o.end.column > e.end.column && (o.end.column += a)),
                s && o.start.row >= e.end.row && (o.start.row += s,
                o.end.row += s)
            }
            if (o.end = this.insert(o.start, n),
            r.length) {
                var c = e.start
                  , h = o.start
                  , s = h.row - c.row
                  , a = h.column - c.column;
                this.addFolds(r.map(function(e) {
                    return e = e.clone(),
                    e.start.row == c.row && (e.start.column += a),
                    e.end.row == c.row && (e.end.column += a),
                    e.start.row += s,
                    e.end.row += s,
                    e
                }))
            }
            return o
        }
        ,
        this.indentRows = function(e, t, i) {
            i = i.replace(/\t/g, this.getTabString());
            for (var n = e; t >= n; n++)
                this.doc.insertInLine({
                    row: n,
                    column: 0
                }, i)
        }
        ,
        this.outdentRows = function(e) {
            for (var t = e.collapseRows(), i = new l(0,0,0,0), n = this.getTabSize(), r = t.start.row; r <= t.end.row; ++r) {
                var o = this.getLine(r);
                i.start.row = r,
                i.end.row = r;
                for (var s = 0; n > s && " " == o.charAt(s); ++s)
                    ;
                n > s && "  " == o.charAt(s) ? (i.start.column = s,
                i.end.column = s + 1) : (i.start.column = 0,
                i.end.column = s),
                this.remove(i)
            }
        }
        ,
        this.$moveLines = function(e, t, i) {
            if (e = this.getRowFoldStart(e),
            t = this.getRowFoldEnd(t),
            0 > i) {
                var n = this.getRowFoldStart(e + i);
                if (0 > n)
                    return 0;
                var r = n - e
            } else if (i > 0) {
                var n = this.getRowFoldEnd(t + i);
                if (n > this.doc.getLength() - 1)
                    return 0;
                var r = n - t
            } else {
                e = this.$clipRowToDocument(e),
                t = this.$clipRowToDocument(t);
                var r = t - e + 1
            }
            var o = new l(e,0,t,Number.MAX_VALUE)
              , s = this.getFoldsInRange(o).map(function(e) {
                return e = e.clone(),
                e.start.row += r,
                e.end.row += r,
                e
            })
              , a = 0 == i ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
            return this.doc.insertFullLines(e + r, a),
            s.length && this.addFolds(s),
            r
        }
        ,
        this.moveLinesUp = function(e, t) {
            return this.$moveLines(e, t, -1)
        }
        ,
        this.moveLinesDown = function(e, t) {
            return this.$moveLines(e, t, 1)
        }
        ,
        this.duplicateLines = function(e, t) {
            return this.$moveLines(e, t, 0)
        }
        ,
        this.$clipRowToDocument = function(e) {
            return Math.max(0, Math.min(e, this.doc.getLength() - 1))
        }
        ,
        this.$clipColumnToRow = function(e, t) {
            return 0 > t ? 0 : Math.min(this.doc.getLine(e).length, t)
        }
        ,
        this.$clipPositionToDocument = function(e, t) {
            if (t = Math.max(0, t),
            0 > e)
                e = 0,
                t = 0;
            else {
                var i = this.doc.getLength();
                e >= i ? (e = i - 1,
                t = this.doc.getLine(i - 1).length) : t = Math.min(this.doc.getLine(e).length, t)
            }
            return {
                row: e,
                column: t
            }
        }
        ,
        this.$clipRangeToDocument = function(e) {
            e.start.row < 0 ? (e.start.row = 0,
            e.start.column = 0) : e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
            var t = this.doc.getLength() - 1;
            return e.end.row > t ? (e.end.row = t,
            e.end.column = this.doc.getLine(t).length) : e.end.column = this.$clipColumnToRow(e.end.row, e.end.column),
            e
        }
        ,
        this.$wrapLimit = 80,
        this.$useWrapMode = !1,
        this.$wrapLimitRange = {
            min: null,
            max: null
        },
        this.setUseWrapMode = function(e) {
            if (e != this.$useWrapMode) {
                if (this.$useWrapMode = e,
                this.$modified = !0,
                this.$resetRowCache(0),
                e) {
                    var t = this.getLength();
                    this.$wrapData = Array(t),
                    this.$updateWrapData(0, t - 1)
                }
                this._signal("changeWrapMode")
            }
        }
        ,
        this.getUseWrapMode = function() {
            return this.$useWrapMode
        }
        ,
        this.setWrapLimitRange = function(e, t) {
            (this.$wrapLimitRange.min !== e || this.$wrapLimitRange.max !== t) && (this.$wrapLimitRange = {
                min: e,
                max: t
            },
            this.$modified = !0,
            this.$useWrapMode && this._signal("changeWrapMode"))
        }
        ,
        this.adjustWrapLimit = function(e, t) {
            var i = this.$wrapLimitRange;
            i.max < 0 && (i = {
                min: t,
                max: t
            });
            var n = this.$constrainWrapLimit(e, i.min, i.max);
            return n != this.$wrapLimit && n > 1 ? (this.$wrapLimit = n,
            this.$modified = !0,
            this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1),
            this.$resetRowCache(0),
            this._signal("changeWrapLimit")),
            !0) : !1
        }
        ,
        this.$constrainWrapLimit = function(e, t, i) {
            return t && (e = Math.max(t, e)),
            i && (e = Math.min(i, e)),
            e
        }
        ,
        this.getWrapLimit = function() {
            return this.$wrapLimit
        }
        ,
        this.setWrapLimit = function(e) {
            this.setWrapLimitRange(e, e)
        }
        ,
        this.getWrapLimitRange = function() {
            return {
                min: this.$wrapLimitRange.min,
                max: this.$wrapLimitRange.max
            }
        }
        ,
        this.$updateInternalDataOnChange = function(e) {
            var t = this.$useWrapMode
              , i = e.action
              , n = e.start
              , r = e.end
              , o = n.row
              , s = r.row
              , a = s - o
              , l = null;
            if (this.$updating = !0,
            0 != a)
                if ("remove" === i) {
                    this[t ? "$wrapData" : "$rowLengthCache"].splice(o, a);
                    var c = this.$foldData;
                    l = this.getFoldsInRange(e),
                    this.removeFolds(l);
                    var h = this.getFoldLine(r.row)
                      , d = 0;
                    if (h) {
                        h.addRemoveChars(r.row, r.column, n.column - r.column),
                        h.shiftRow(-a);
                        var u = this.getFoldLine(o);
                        u && u !== h && (u.merge(h),
                        h = u),
                        d = c.indexOf(h) + 1
                    }
                    for (d; d < c.length; d++) {
                        var h = c[d];
                        h.start.row >= r.row && h.shiftRow(-a)
                    }
                    s = o
                } else {
                    var p = Array(a);
                    p.unshift(o, 0);
                    var g = t ? this.$wrapData : this.$rowLengthCache;
                    g.splice.apply(g, p);
                    var c = this.$foldData
                      , h = this.getFoldLine(o)
                      , d = 0;
                    if (h) {
                        var m = h.range.compareInside(n.row, n.column);
                        0 == m ? (h = h.split(n.row, n.column),
                        h && (h.shiftRow(a),
                        h.addRemoveChars(s, 0, r.column - n.column))) : -1 == m && (h.addRemoveChars(o, 0, r.column - n.column),
                        h.shiftRow(a)),
                        d = c.indexOf(h) + 1
                    }
                    for (d; d < c.length; d++) {
                        var h = c[d];
                        h.start.row >= o && h.shiftRow(a)
                    }
                }
            else {
                a = Math.abs(e.start.column - e.end.column),
                "remove" === i && (l = this.getFoldsInRange(e),
                this.removeFolds(l),
                a = -a);
                var h = this.getFoldLine(o);
                h && h.addRemoveChars(o, n.column, a)
            }
            return t && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"),
            this.$updating = !1,
            t ? this.$updateWrapData(o, s) : this.$updateRowLengthCache(o, s),
            l
        }
        ,
        this.$updateRowLengthCache = function(e, t) {
            this.$rowLengthCache[e] = null,
            this.$rowLengthCache[t] = null
        }
        ,
        this.$updateWrapData = function(e, t) {
            var i, n, r = this.doc.getAllLines(), o = this.getTabSize(), s = this.$wrapData, a = this.$wrapLimit, l = e;
            for (t = Math.min(t, r.length - 1); t >= l; )
                n = this.getFoldLine(l, n),
                n ? (i = [],
                n.walk(function(e, t, n, o) {
                    var s;
                    if (null != e) {
                        s = this.$getDisplayTokens(e, i.length),
                        s[0] = c;
                        for (var a = 1; a < s.length; a++)
                            s[a] = u
                    } else
                        s = this.$getDisplayTokens(r[t].substring(o, n), i.length);
                    i = i.concat(s)
                }
                .bind(this), n.end.row, r[n.end.row].length + 1),
                s[n.start.row] = this.$computeWrapSplits(i, a, o),
                l = n.end.row + 1) : (i = this.$getDisplayTokens(r[l]),
                s[l] = this.$computeWrapSplits(i, a, o),
                l++)
        }
        ;
        var t = 1
          , s = 2
          , c = 3
          , u = 4
          , p = 9
          , g = 10
          , m = 11
          , f = 12;
        this.$computeWrapSplits = function(e, t, i) {
            function n() {
                var t = 0;
                if (0 === v)
                    return t;
                if (b)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r == g)
                            t += 1;
                        else {
                            if (r != m) {
                                if (r == f)
                                    continue;
                                break
                            }
                            t += i
                        }
                    }
                return d && b !== !1 && (t += i),
                Math.min(t, v)
            }
            function r(t) {
                var i = e.slice(l, t)
                  , r = i.length;
                i.join("").replace(/12/g, function() {
                    r -= 1
                }).replace(/2/g, function() {
                    r -= 1
                }),
                o.length || (w = n(),
                o.indent = w),
                h += r,
                o.push(h),
                l = t
            }
            if (0 == e.length)
                return [];
            for (var o = [], a = e.length, l = 0, h = 0, d = this.$wrapAsCode, b = this.$indentedSoftWrap, v = t <= Math.max(2 * i, 8) || b === !1 ? 0 : Math.floor(t / 2), w = 0; a - l > t - w; ) {
                var C = l + t - w;
                if (e[C - 1] >= g && e[C] >= g)
                    r(C);
                else if (e[C] != c && e[C] != u) {
                    for (var y = Math.max(C - (t - (t >> 2)), l - 1); C > y && e[C] < c; )
                        C--;
                    if (d) {
                        for (; C > y && e[C] < c; )
                            C--;
                        for (; C > y && e[C] == p; )
                            C--
                    } else
                        for (; C > y && e[C] < g; )
                            C--;
                    C > y ? r(++C) : (C = l + t,
                    e[C] == s && C--,
                    r(C - w))
                } else {
                    for (C; C != l - 1 && e[C] != c; C--)
                        ;
                    if (C > l) {
                        r(C);
                        continue
                    }
                    for (C = l + t; C < e.length && e[C] == u; C++)
                        ;
                    if (C == e.length)
                        break;
                    r(C)
                }
            }
            return o
        }
        ,
        this.$getDisplayTokens = function(i, n) {
            var r, o = [];
            n = n || 0;
            for (var a = 0; a < i.length; a++) {
                var l = i.charCodeAt(a);
                if (9 == l) {
                    r = this.getScreenTabSize(o.length + n),
                    o.push(m);
                    for (var c = 1; r > c; c++)
                        o.push(f)
                } else
                    32 == l ? o.push(g) : l > 39 && 48 > l || l > 57 && 64 > l ? o.push(p) : l >= 4352 && e(l) ? o.push(t, s) : o.push(t)
            }
            return o
        }
        ,
        this.$getStringScreenWidth = function(t, i, n) {
            if (0 == i)
                return [0, 0];
            null == i && (i = 1 / 0),
            n = n || 0;
            var r, o;
            for (o = 0; o < t.length && (r = t.charCodeAt(o),
            n += 9 == r ? this.getScreenTabSize(n) : r >= 4352 && e(r) ? 2 : 1,
            !(n > i)); o++)
                ;
            return [n, o]
        }
        ,
        this.lineWidgets = null,
        this.getRowLength = function(e) {
            if (this.lineWidgets)
                var t = this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0;
            else
                t = 0;
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }
        ,
        this.getRowLineCount = function(e) {
            return this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 : 1
        }
        ,
        this.getRowWrapIndent = function(e) {
            if (this.$useWrapMode) {
                var t = this.screenToDocumentPosition(e, Number.MAX_VALUE)
                  , i = this.$wrapData[t.row];
                return i.length && i[0] < t.column ? i.indent : 0
            }
            return 0
        }
        ,
        this.getScreenLastRowColumn = function(e) {
            var t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
            return this.documentToScreenColumn(t.row, t.column)
        }
        ,
        this.getDocumentLastRowColumn = function(e, t) {
            var i = this.documentToScreenRow(e, t);
            return this.getScreenLastRowColumn(i)
        }
        ,
        this.getDocumentLastRowColumnPosition = function(e, t) {
            var i = this.documentToScreenRow(e, t);
            return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
        }
        ,
        this.getRowSplitData = function(e) {
            return this.$useWrapMode ? this.$wrapData[e] : void 0
        }
        ,
        this.getScreenTabSize = function(e) {
            return this.$tabSize - e % this.$tabSize
        }
        ,
        this.screenToDocumentRow = function(e, t) {
            return this.screenToDocumentPosition(e, t).row
        }
        ,
        this.screenToDocumentColumn = function(e, t) {
            return this.screenToDocumentPosition(e, t).column
        }
        ,
        this.screenToDocumentPosition = function(e, t) {
            if (0 > e)
                return {
                    row: 0,
                    column: 0
                };
            var i, n, r = 0, o = 0, s = 0, a = 0, l = this.$screenRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
            if (h && c >= 0)
                var s = l[c]
                  , r = this.$docRowCache[c]
                  , d = e > l[h - 1];
            else
                var d = !h;
            for (var u = this.getLength() - 1, p = this.getNextFoldLine(r), g = p ? p.start.row : 1 / 0; e >= s && (a = this.getRowLength(r),
            !(s + a > e || r >= u)); )
                s += a,
                r++,
                r > g && (r = p.end.row + 1,
                p = this.getNextFoldLine(r, p),
                g = p ? p.start.row : 1 / 0),
                d && (this.$docRowCache.push(r),
                this.$screenRowCache.push(s));
            if (p && p.start.row <= r)
                i = this.getFoldDisplayLine(p),
                r = p.start.row;
            else {
                if (e >= s + a || r > u)
                    return {
                        row: u,
                        column: this.getLine(u).length
                    };
                i = this.getLine(r),
                p = null
            }
            var m = 0;
            if (this.$useWrapMode) {
                var f = this.$wrapData[r];
                if (f) {
                    var b = Math.floor(e - s);
                    n = f[b],
                    b > 0 && f.length && (m = f.indent,
                    o = f[b - 1] || f[f.length - 1],
                    i = i.substring(o))
                }
            }
            return o += this.$getStringScreenWidth(i, t - m)[1],
            this.$useWrapMode && o >= n && (o = n - 1),
            p ? p.idxToPosition(o) : {
                row: r,
                column: o
            }
        }
        ,
        this.documentToScreenPosition = function(e, t) {
            if ("undefined" == typeof t)
                var i = this.$clipPositionToDocument(e.row, e.column);
            else
                i = this.$clipPositionToDocument(e, t);
            e = i.row,
            t = i.column;
            var n = 0
              , r = null
              , o = null;
            o = this.getFoldAt(e, t, 1),
            o && (e = o.start.row,
            t = o.start.column);
            var s, a = 0, l = this.$docRowCache, c = this.$getRowCacheIndex(l, e), h = l.length;
            if (h && c >= 0)
                var a = l[c]
                  , n = this.$screenRowCache[c]
                  , d = e > l[h - 1];
            else
                var d = !h;
            for (var u = this.getNextFoldLine(a), p = u ? u.start.row : 1 / 0; e > a; ) {
                if (a >= p) {
                    if (s = u.end.row + 1,
                    s > e)
                        break;
                    u = this.getNextFoldLine(s, u),
                    p = u ? u.start.row : 1 / 0
                } else
                    s = a + 1;
                n += this.getRowLength(a),
                a = s,
                d && (this.$docRowCache.push(a),
                this.$screenRowCache.push(n))
            }
            var g = "";
            u && a >= p ? (g = this.getFoldDisplayLine(u, e, t),
            r = u.start.row) : (g = this.getLine(e).substring(0, t),
            r = e);
            var m = 0;
            if (this.$useWrapMode) {
                var f = this.$wrapData[r];
                if (f) {
                    for (var b = 0; g.length >= f[b]; )
                        n++,
                        b++;
                    g = g.substring(f[b - 1] || 0, g.length),
                    m = b > 0 ? f.indent : 0
                }
            }
            return {
                row: n,
                column: m + this.$getStringScreenWidth(g)[0]
            }
        }
        ,
        this.documentToScreenColumn = function(e, t) {
            return this.documentToScreenPosition(e, t).column
        }
        ,
        this.documentToScreenRow = function(e, t) {
            return this.documentToScreenPosition(e, t).row
        }
        ,
        this.getScreenLength = function() {
            var e = 0
              , t = null;
            if (this.$useWrapMode)
                for (var i = this.$wrapData.length, n = 0, r = 0, t = this.$foldData[r++], o = t ? t.start.row : 1 / 0; i > n; ) {
                    var s = this.$wrapData[n];
                    e += s ? s.length + 1 : 1,
                    n++,
                    n > o && (n = t.end.row + 1,
                    t = this.$foldData[r++],
                    o = t ? t.start.row : 1 / 0)
                }
            else {
                e = this.getLength();
                for (var a = this.$foldData, r = 0; r < a.length; r++)
                    t = a[r],
                    e -= t.end.row - t.start.row
            }
            return this.lineWidgets && (e += this.$getWidgetScreenLength()),
            e
        }
        ,
        this.$setFontMetrics = function(e) {
            this.$enableVarChar && (this.$getStringScreenWidth = function(t, i, n) {
                if (0 === i)
                    return [0, 0];
                i || (i = 1 / 0),
                n = n || 0;
                var r, o;
                for (o = 0; o < t.length && (r = t.charAt(o),
                n += "  " === r ? this.getScreenTabSize(n) : e.getCharacterWidth(r),
                !(n > i)); o++)
                    ;
                return [n, o]
            }
            )
        }
        ,
        this.destroy = function() {
            this.bgTokenizer && (this.bgTokenizer.setDocument(null),
            this.bgTokenizer = null),
            this.$stopWorker()
        }
    }
    ).call(u.prototype),
    e("./edit_session/folding").Folding.call(u.prototype),
    e("./edit_session/bracket_match").BracketMatch.call(u.prototype),
    r.defineOptions(u.prototype, "session", {
        wrap: {
            set: function(e) {
                if (e && "off" != e ? "free" == e ? e = !0 : "printMargin" == e ? e = -1 : "string" == typeof e && (e = parseInt(e, 10) || !1) : e = !1,
                this.$wrap != e)
                    if (this.$wrap = e,
                    e) {
                        var t = "number" == typeof e ? e : null;
                        this.setWrapLimitRange(t, t),
                        this.setUseWrapMode(!0)
                    } else
                        this.setUseWrapMode(!1)
            },
            get: function() {
                return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
            },
            handlesSet: !0
        },
        wrapMethod: {
            set: function(e) {
                e = "auto" == e ? "text" != this.$mode.type : "text" != e,
                e != this.$wrapAsCode && (this.$wrapAsCode = e,
                this.$useWrapMode && (this.$modified = !0,
                this.$resetRowCache(0),
                this.$updateWrapData(0, this.getLength() - 1)))
            },
            initialValue: "auto"
        },
        indentedSoftWrap: {
            initialValue: !0
        },
        firstLineNumber: {
            set: function() {
                this._signal("changeBreakpoint")
            },
            initialValue: 1
        },
        useWorker: {
            set: function(e) {
                this.$useWorker = e,
                this.$stopWorker(),
                e && this.$startWorker()
            },
            initialValue: !0
        },
        useSoftTabs: {
            initialValue: !0
        },
        tabSize: {
            set: function(e) {
                isNaN(e) || this.$tabSize === e || (this.$modified = !0,
                this.$rowLengthCache = [],
                this.$tabSize = e,
                this._signal("changeTabSize"))
            },
            initialValue: 4,
            handlesSet: !0
        },
        overwrite: {
            set: function() {
                this._signal("changeOverwrite")
            },
            initialValue: !1
        },
        newLineMode: {
            set: function(e) {
                this.doc.setNewLineMode(e)
            },
            get: function() {
                return this.doc.getNewLineMode()
            },
            handlesSet: !0
        },
        mode: {
            set: function(e) {
                this.setMode(e)
            },
            get: function() {
                return this.$modeId
            }
        }
    }),
    t.EditSession = u
}),
define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(e, t) {
    "use strict";
    var i = e("./lib/lang")
      , n = e("./lib/oop")
      , r = e("./range").Range
      , o = function() {
        this.$options = {}
    };
    (function() {
        this.set = function(e) {
            return n.mixin(this.$options, e),
            this
        }
        ,
        this.getOptions = function() {
            return i.copyObject(this.$options)
        }
        ,
        this.setOptions = function(e) {
            this.$options = e
        }
        ,
        this.find = function(e) {
            var t = this.$options
              , i = this.$matchIterator(e, t);
            if (!i)
                return !1;
            var n = null;
            return i.forEach(function(e, i, o) {
                if (e.start)
                    n = e;
                else {
                    var s = e.offset + (o || 0);
                    if (n = new r(i,s,i,s + e.length),
                    !e.length && t.start && t.start.start && 0 != t.skipCurrent && n.isEqual(t.start))
                        return n = null,
                        !1
                }
                return !0
            }),
            n
        }
        ,
        this.findAll = function(e) {
            var t = this.$options;
            if (!t.needle)
                return [];
            this.$assembleRegExp(t);
            var n = t.range
              , o = n ? e.getLines(n.start.row, n.end.row) : e.doc.getAllLines()
              , s = []
              , a = t.re;
            if (t.$isMultiLine) {
                var l, c = a.length, h = o.length - c;
                e: for (var d = a.offset || 0; h >= d; d++) {
                    for (var u = 0; c > u; u++)
                        if (-1 == o[d + u].search(a[u]))
                            continue e;
                    var p = o[d]
                      , g = o[d + c - 1]
                      , m = p.length - p.match(a[0])[0].length
                      , f = g.match(a[c - 1])[0].length;
                    l && l.end.row === d && l.end.column > m || (s.push(l = new r(d,m,d + c - 1,f)),
                    c > 2 && (d = d + c - 2))
                }
            } else
                for (var b = 0; b < o.length; b++)
                    for (var v = i.getMatchOffsets(o[b], a), u = 0; u < v.length; u++) {
                        var w = v[u];
                        s.push(new r(b,w.offset,b,w.offset + w.length))
                    }
            if (n) {
                for (var C = n.start.column, y = n.start.column, b = 0, u = s.length - 1; u > b && s[b].start.column < C && s[b].start.row == n.start.row; )
                    b++;
                for (; u > b && s[u].end.column > y && s[u].end.row == n.end.row; )
                    u--;
                for (s = s.slice(b, u + 1),
                b = 0,
                u = s.length; u > b; b++)
                    s[b].start.row += n.start.row,
                    s[b].end.row += n.start.row
            }
            return s
        }
        ,
        this.replace = function(e, t) {
            var i = this.$options
              , n = this.$assembleRegExp(i);
            if (i.$isMultiLine)
                return t;
            if (n) {
                var r = n.exec(e);
                if (!r || r[0].length != e.length)
                    return null;
                if (t = e.replace(n, t),
                i.preserveCase) {
                    t = t.split("");
                    for (var o = Math.min(e.length, e.length); o--; ) {
                        var s = e[o];
                        t[o] = s && s.toLowerCase() != s ? t[o].toUpperCase() : t[o].toLowerCase()
                    }
                    t = t.join("")
                }
                return t
            }
        }
        ,
        this.$matchIterator = function(e, t) {
            var n = this.$assembleRegExp(t);
            if (!n)
                return !1;
            var o;
            if (t.$isMultiLine)
                var s = n.length
                  , a = function(t, i, a) {
                    var l = t.search(n[0]);
                    if (-1 != l) {
                        for (var c = 1; s > c; c++)
                            if (t = e.getLine(i + c),
                            -1 == t.search(n[c]))
                                return;
                        var h = t.match(n[s - 1])[0].length
                          , d = new r(i,l,i + s - 1,h);
                        return 1 == n.offset ? (d.start.row--,
                        d.start.column = Number.MAX_VALUE) : a && (d.start.column += a),
                        o(d) ? !0 : void 0
                    }
                };
            else if (t.backwards)
                var a = function(e, t, r) {
                    for (var s = i.getMatchOffsets(e, n), a = s.length - 1; a >= 0; a--)
                        if (o(s[a], t, r))
                            return !0
                };
            else
                var a = function(e, t, r) {
                    for (var s = i.getMatchOffsets(e, n), a = 0; a < s.length; a++)
                        if (o(s[a], t, r))
                            return !0
                };
            var l = this.$lineIterator(e, t);
            return {
                forEach: function(e) {
                    o = e,
                    l.forEach(a)
                }
            }
        }
        ,
        this.$assembleRegExp = function(e, t) {
            if (e.needle instanceof RegExp)
                return e.re = e.needle;
            var n = e.needle;
            if (!e.needle)
                return e.re = !1;
            e.regExp || (n = i.escapeRegExp(n)),
            e.wholeWord && (n = "\\b" + n + "\\b");
            var r = e.caseSensitive ? "gm" : "gmi";
            if (e.$isMultiLine = !t && /[\n\r]/.test(n),
            e.$isMultiLine)
                return e.re = this.$assembleMultilineRegExp(n, r);
            try {
                var o = new RegExp(n,r)
            } catch (s) {
                o = !1
            }
            return e.re = o
        }
        ,
        this.$assembleMultilineRegExp = function(e, t) {
            for (var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], r = 0; r < i.length; r++)
                try {
                    n.push(new RegExp(i[r],t))
                } catch (o) {
                    return !1
                }
            return "" == i[0] ? (n.shift(),
            n.offset = 1) : n.offset = 0,
            n
        }
        ,
        this.$lineIterator = function(e, t) {
            var i = 1 == t.backwards
              , n = 0 != t.skipCurrent
              , r = t.range
              , o = t.start;
            o || (o = r ? r[i ? "end" : "start"] : e.selection.getRange()),
            o.start && (o = o[n != i ? "end" : "start"]);
            var s = r ? r.start.row : 0
              , a = r ? r.end.row : e.getLength() - 1
              , l = i ? function(i) {
                var n = o.row
                  , r = e.getLine(n).substring(0, o.column);
                if (!i(r, n)) {
                    for (n--; n >= s; n--)
                        if (i(e.getLine(n), n))
                            return;
                    if (0 != t.wrap)
                        for (n = a,
                        s = o.row; n >= s; n--)
                            if (i(e.getLine(n), n))
                                return
                }
            }
            : function(i) {
                var n = o.row
                  , r = e.getLine(n).substr(o.column);
                if (!i(r, n, o.column)) {
                    for (n += 1; a >= n; n++)
                        if (i(e.getLine(n), n))
                            return;
                    if (0 != t.wrap)
                        for (n = s,
                        a = o.row; a >= n; n++)
                            if (i(e.getLine(n), n))
                                return
                }
            }
            ;
            return {
                forEach: l
            }
        }
    }
    ).call(o.prototype),
    t.Search = o
}),
define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(e, t) {
    "use strict";
    function i(e, t) {
        this.platform = t || (o.isMac ? "mac" : "win"),
        this.commands = {},
        this.commandKeyBinding = {},
        this.addCommands(e),
        this.$singleCommand = !0
    }
    function n(e, t) {
        i.call(this, e, t),
        this.$singleCommand = !1
    }
    var r = e("../lib/keys")
      , o = e("../lib/useragent")
      , s = r.KEY_MODS;
    n.prototype = i.prototype,
    function() {
        function e(e) {
            return "object" == typeof e && e.bindKey && e.bindKey.position || 0
        }
        this.addCommand = function(e) {
            this.commands[e.name] && this.removeCommand(e),
            this.commands[e.name] = e,
            e.bindKey && this._buildKeyHash(e)
        }
        ,
        this.removeCommand = function(e, t) {
            var i = e && ("string" == typeof e ? e : e.name);
            e = this.commands[i],
            t || delete this.commands[i];
            var n = this.commandKeyBinding;
            for (var r in n) {
                var o = n[r];
                if (o == e)
                    delete n[r];
                else if (Array.isArray(o)) {
                    var s = o.indexOf(e);
                    -1 != s && (o.splice(s, 1),
                    1 == o.length && (n[r] = o[0]))
                }
            }
        }
        ,
        this.bindKey = function(e, t, i) {
            return "object" == typeof e && e && (void 0 == i && (i = e.position),
            e = e[this.platform]),
            e ? "function" == typeof t ? this.addCommand({
                exec: t,
                bindKey: e,
                name: t.name || e
            }) : void e.split("|").forEach(function(e) {
                var n = "";
                if (-1 != e.indexOf(" ")) {
                    var r = e.split(/\s+/);
                    e = r.pop(),
                    r.forEach(function(e) {
                        var t = this.parseKeys(e)
                          , i = s[t.hashId] + t.key;
                        n += (n ? " " : "") + i,
                        this._addCommandToBinding(n, "chainKeys")
                    }, this),
                    n += " "
                }
                var o = this.parseKeys(e)
                  , a = s[o.hashId] + o.key;
                this._addCommandToBinding(n + a, t, i)
            }, this) : void 0
        }
        ,
        this._addCommandToBinding = function(t, i, n) {
            var r, o = this.commandKeyBinding;
            if (i)
                if (!o[t] || this.$singleCommand)
                    o[t] = i;
                else {
                    Array.isArray(o[t]) ? -1 != (r = o[t].indexOf(i)) && o[t].splice(r, 1) : o[t] = [o[t]],
                    "number" != typeof n && (n = n || i.isDefault ? -100 : e(i));
                    var s = o[t];
                    for (r = 0; r < s.length; r++) {
                        var a = s[r]
                          , l = e(a);
                        if (l > n)
                            break
                    }
                    s.splice(r, 0, i)
                }
            else
                delete o[t]
        }
        ,
        this.addCommands = function(e) {
            e && Object.keys(e).forEach(function(t) {
                var i = e[t];
                if (i) {
                    if ("string" == typeof i)
                        return this.bindKey(i, t);
                    "function" == typeof i && (i = {
                        exec: i
                    }),
                    "object" == typeof i && (i.name || (i.name = t),
                    this.addCommand(i))
                }
            }, this)
        }
        ,
        this.removeCommands = function(e) {
            Object.keys(e).forEach(function(t) {
                this.removeCommand(e[t])
            }, this)
        }
        ,
        this.bindKeys = function(e) {
            Object.keys(e).forEach(function(t) {
                this.bindKey(t, e[t])
            }, this)
        }
        ,
        this._buildKeyHash = function(e) {
            this.bindKey(e.bindKey, e)
        }
        ,
        this.parseKeys = function(e) {
            var t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e) {
                return e
            })
              , i = t.pop()
              , n = r[i];
            if (r.FUNCTION_KEYS[n])
                i = r.FUNCTION_KEYS[n].toLowerCase();
            else {
                if (!t.length)
                    return {
                        key: i,
                        hashId: -1
                    };
                if (1 == t.length && "shift" == t[0])
                    return {
                        key: i.toUpperCase(),
                        hashId: -1
                    }
            }
            for (var o = 0, s = t.length; s--; ) {
                var a = r.KEY_MODS[t[s]];
                if (null == a)
                    return "undefined" != typeof console && console.error("invalid modifier " + t[s] + " in " + e),
                    !1;
                o |= a
            }
            return {
                key: i,
                hashId: o
            }
        }
        ,
        this.findKeyCommand = function(e, t) {
            var i = s[e] + t;
            return this.commandKeyBinding[i]
        }
        ,
        this.handleKeyboard = function(e, t, i, n) {
            if (!(0 > n)) {
                var r = s[t] + i
                  , o = this.commandKeyBinding[r];
                return e.$keyChain && (e.$keyChain += " " + r,
                o = this.commandKeyBinding[e.$keyChain] || o),
                !o || "chainKeys" != o && "chainKeys" != o[o.length - 1] ? (e.$keyChain && (t && 4 != t || 1 != i.length ? (-1 == t || n > 0) && (e.$keyChain = "") : e.$keyChain = e.$keyChain.slice(0, -r.length - 1)),
                {
                    command: o
                }) : (e.$keyChain = e.$keyChain || r,
                {
                    command: "null"
                })
            }
        }
        ,
        this.getStatusText = function(e, t) {
            return t.$keyChain || ""
        }
    }
    .call(i.prototype),
    t.HashHandler = i,
    t.MultiHashHandler = n
}),
define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("../keyboard/hash_handler").MultiHashHandler
      , r = e("../lib/event_emitter").EventEmitter
      , o = function(e, t) {
        n.call(this, t, e),
        this.byName = this.commands,
        this.setDefaultHandler("exec", function(e) {
            return e.command.exec(e.editor, e.args || {})
        })
    };
    i.inherits(o, n),
    function() {
        i.implement(this, r),
        this.exec = function(e, t, i) {
            if (Array.isArray(e)) {
                for (var n = e.length; n--; )
                    if (this.exec(e[n], t, i))
                        return !0;
                return !1
            }
            if ("string" == typeof e && (e = this.commands[e]),
            !e)
                return !1;
            if (t && t.$readOnly && !e.readOnly)
                return !1;
            var r = {
                editor: t,
                command: e,
                args: i
            };
            return r.returnValue = this._emit("exec", r),
            this._signal("afterExec", r),
            r.returnValue === !1 ? !1 : !0
        }
        ,
        this.toggleRecording = function(e) {
            return this.$inReplay ? void 0 : (e && e._emit("changeStatus"),
            this.recording ? (this.macro.pop(),
            this.removeEventListener("exec", this.$addCommandToMacro),
            this.macro.length || (this.macro = this.oldMacro),
            this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(e) {
                this.macro.push([e.command, e.args])
            }
            .bind(this)),
            this.oldMacro = this.macro,
            this.macro = [],
            this.on("exec", this.$addCommandToMacro),
            this.recording = !0))
        }
        ,
        this.replay = function(e) {
            if (!this.$inReplay && this.macro) {
                if (this.recording)
                    return this.toggleRecording(e);
                try {
                    this.$inReplay = !0,
                    this.macro.forEach(function(t) {
                        "string" == typeof t ? this.exec(t, e) : this.exec(t[0], e, t[1])
                    }, this)
                } finally {
                    this.$inReplay = !1
                }
            }
        }
        ,
        this.trimMacro = function(e) {
            return e.map(function(e) {
                return "string" != typeof e[0] && (e[0] = e[0].name),
                e[1] || (e = e[0]),
                e
            })
        }
    }
    .call(o.prototype),
    t.CommandManager = o
}),
define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(e, t) {
    "use strict";
    function i(e, t) {
        return {
            win: e,
            mac: t
        }
    }
    var n = e("../lib/lang")
      , r = e("../config")
      , o = e("../range").Range;
    t.commands = [{
        name: "showSettingsMenu",
        bindKey: i("Ctrl-,", "Command-,"),
        exec: function(e) {
            r.loadModule("ace/ext/settings_menu", function(t) {
                t.init(e),
                e.showSettingsMenu()
            })
        },
        readOnly: !0
    }, {
        name: "goToNextError",
        bindKey: i("Alt-E", "Ctrl-E"),
        exec: function(e) {
            r.loadModule("ace/ext/error_marker", function(t) {
                t.showErrorMarker(e, 1)
            })
        },
        scrollIntoView: "animate",
        readOnly: !0
    }, {
        name: "goToPreviousError",
        bindKey: i("Alt-Shift-E", "Ctrl-Shift-E"),
        exec: function(e) {
            r.loadModule("ace/ext/error_marker", function(t) {
                t.showErrorMarker(e, -1)
            })
        },
        scrollIntoView: "animate",
        readOnly: !0
    }, {
        name: "selectall",
        bindKey: i("Ctrl-A", "Command-A"),
        exec: function(e) {
            e.selectAll()
        },
        readOnly: !0
    }, {
        name: "centerselection",
        bindKey: i(null, "Ctrl-L"),
        exec: function(e) {
            e.centerSelection()
        },
        readOnly: !0
    }, {
        name: "gotoline",
        bindKey: i("Ctrl-L", "Command-L"),
        exec: function(e) {
            var t = parseInt(prompt("Enter line number:"), 10);
            isNaN(t) || e.gotoLine(t)
        },
        readOnly: !0
    }, {
        name: "fold",
        bindKey: i("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
        exec: function(e) {
            e.session.toggleFold(!1)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "unfold",
        bindKey: i("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
        exec: function(e) {
            e.session.toggleFold(!0)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleFoldWidget",
        bindKey: i("F2", "F2"),
        exec: function(e) {
            e.session.toggleFoldWidget()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "toggleParentFoldWidget",
        bindKey: i("Alt-F2", "Alt-F2"),
        exec: function(e) {
            e.session.toggleFoldWidget(!0)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "foldall",
        bindKey: i(null, "Ctrl-Command-Option-0"),
        exec: function(e) {
            e.session.foldAll()
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "foldOther",
        bindKey: i("Alt-0", "Command-Option-0"),
        exec: function(e) {
            e.session.foldAll(),
            e.session.unfold(e.selection.getAllRanges())
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "unfoldall",
        bindKey: i("Alt-Shift-0", "Command-Option-Shift-0"),
        exec: function(e) {
            e.session.unfold()
        },
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "findnext",
        bindKey: i("Ctrl-K", "Command-G"),
        exec: function(e) {
            e.findNext()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "findprevious",
        bindKey: i("Ctrl-Shift-K", "Command-Shift-G"),
        exec: function(e) {
            e.findPrevious()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "center",
        readOnly: !0
    }, {
        name: "selectOrFindNext",
        bindKey: i("Alt-K", "Ctrl-G"),
        exec: function(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findNext()
        },
        readOnly: !0
    }, {
        name: "selectOrFindPrevious",
        bindKey: i("Alt-Shift-K", "Ctrl-Shift-G"),
        exec: function(e) {
            e.selection.isEmpty() ? e.selection.selectWord() : e.findPrevious()
        },
        readOnly: !0
    }, {
        name: "find",
        bindKey: i("Ctrl-F", "Command-F"),
        exec: function(e) {
            r.loadModule("ace/ext/searchbox", function(t) {
                t.Search(e)
            })
        },
        readOnly: !0
    }, {
        name: "overwrite",
        bindKey: "Insert",
        exec: function(e) {
            e.toggleOverwrite()
        },
        readOnly: !0
    }, {
        name: "selecttostart",
        bindKey: i("Ctrl-Shift-Home", "Command-Shift-Up"),
        exec: function(e) {
            e.getSelection().selectFileStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "gotostart",
        bindKey: i("Ctrl-Home", "Command-Home|Command-Up"),
        exec: function(e) {
            e.navigateFileStart()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "selectup",
        bindKey: i("Shift-Up", "Shift-Up"),
        exec: function(e) {
            e.getSelection().selectUp()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "golineup",
        bindKey: i("Up", "Up|Ctrl-P"),
        exec: function(e, t) {
            e.navigateUp(t.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selecttoend",
        bindKey: i("Ctrl-Shift-End", "Command-Shift-Down"),
        exec: function(e) {
            e.getSelection().selectFileEnd()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "gotoend",
        bindKey: i("Ctrl-End", "Command-End|Command-Down"),
        exec: function(e) {
            e.navigateFileEnd()
        },
        multiSelectAction: "forEach",
        readOnly: !0,
        scrollIntoView: "animate",
        aceCommandGroup: "fileJump"
    }, {
        name: "selectdown",
        bindKey: i("Shift-Down", "Shift-Down"),
        exec: function(e) {
            e.getSelection().selectDown()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "golinedown",
        bindKey: i("Down", "Down|Ctrl-N"),
        exec: function(e, t) {
            e.navigateDown(t.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectwordleft",
        bindKey: i("Ctrl-Shift-Left", "Option-Shift-Left"),
        exec: function(e) {
            e.getSelection().selectWordLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotowordleft",
        bindKey: i("Ctrl-Left", "Option-Left"),
        exec: function(e) {
            e.navigateWordLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selecttolinestart",
        bindKey: i("Alt-Shift-Left", "Command-Shift-Left"),
        exec: function(e) {
            e.getSelection().selectLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotolinestart",
        bindKey: i("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
        exec: function(e) {
            e.navigateLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectleft",
        bindKey: i("Shift-Left", "Shift-Left"),
        exec: function(e) {
            e.getSelection().selectLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotoleft",
        bindKey: i("Left", "Left|Ctrl-B"),
        exec: function(e, t) {
            e.navigateLeft(t.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectwordright",
        bindKey: i("Ctrl-Shift-Right", "Option-Shift-Right"),
        exec: function(e) {
            e.getSelection().selectWordRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotowordright",
        bindKey: i("Ctrl-Right", "Option-Right"),
        exec: function(e) {
            e.navigateWordRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selecttolineend",
        bindKey: i("Alt-Shift-Right", "Command-Shift-Right"),
        exec: function(e) {
            e.getSelection().selectLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotolineend",
        bindKey: i("Alt-Right|End", "Command-Right|End|Ctrl-E"),
        exec: function(e) {
            e.navigateLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectright",
        bindKey: i("Shift-Right", "Shift-Right"),
        exec: function(e) {
            e.getSelection().selectRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "gotoright",
        bindKey: i("Right", "Right|Ctrl-F"),
        exec: function(e, t) {
            e.navigateRight(t.times)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectpagedown",
        bindKey: "Shift-PageDown",
        exec: function(e) {
            e.selectPageDown()
        },
        readOnly: !0
    }, {
        name: "pagedown",
        bindKey: i(null, "Option-PageDown"),
        exec: function(e) {
            e.scrollPageDown()
        },
        readOnly: !0
    }, {
        name: "gotopagedown",
        bindKey: i("PageDown", "PageDown|Ctrl-V"),
        exec: function(e) {
            e.gotoPageDown()
        },
        readOnly: !0
    }, {
        name: "selectpageup",
        bindKey: "Shift-PageUp",
        exec: function(e) {
            e.selectPageUp()
        },
        readOnly: !0
    }, {
        name: "pageup",
        bindKey: i(null, "Option-PageUp"),
        exec: function(e) {
            e.scrollPageUp()
        },
        readOnly: !0
    }, {
        name: "gotopageup",
        bindKey: "PageUp",
        exec: function(e) {
            e.gotoPageUp()
        },
        readOnly: !0
    }, {
        name: "scrollup",
        bindKey: i("Ctrl-Up", null),
        exec: function(e) {
            e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight)
        },
        readOnly: !0
    }, {
        name: "scrolldown",
        bindKey: i("Ctrl-Down", null),
        exec: function(e) {
            e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight)
        },
        readOnly: !0
    }, {
        name: "selectlinestart",
        bindKey: "Shift-Home",
        exec: function(e) {
            e.getSelection().selectLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectlineend",
        bindKey: "Shift-End",
        exec: function(e) {
            e.getSelection().selectLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "togglerecording",
        bindKey: i("Ctrl-Alt-E", "Command-Option-E"),
        exec: function(e) {
            e.commands.toggleRecording(e)
        },
        readOnly: !0
    }, {
        name: "replaymacro",
        bindKey: i("Ctrl-Shift-E", "Command-Shift-E"),
        exec: function(e) {
            e.commands.replay(e)
        },
        readOnly: !0
    }, {
        name: "jumptomatching",
        bindKey: i("Ctrl-P", "Ctrl-P"),
        exec: function(e) {
            e.jumpToMatching()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
    }, {
        name: "selecttomatching",
        bindKey: i("Ctrl-Shift-P", "Ctrl-Shift-P"),
        exec: function(e) {
            e.jumpToMatching(!0)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
    }, {
        name: "expandToMatching",
        bindKey: i("Ctrl-Shift-M", "Ctrl-Shift-M"),
        exec: function(e) {
            e.jumpToMatching(!0, !0)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "animate",
        readOnly: !0
    }, {
        name: "passKeysToBrowser",
        bindKey: i(null, null),
        exec: function() {},
        passEvent: !0,
        readOnly: !0
    }, {
        name: "copy",
        exec: function() {},
        readOnly: !0
    }, {
        name: "cut",
        exec: function(e) {
            var t = e.getSelectionRange();
            e._emit("cut", t),
            e.selection.isEmpty() || (e.session.remove(t),
            e.clearSelection())
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
    }, {
        name: "paste",
        exec: function(e, t) {
            e.$handlePaste(t)
        },
        scrollIntoView: "cursor"
    }, {
        name: "removeline",
        bindKey: i("Ctrl-D", "Command-D"),
        exec: function(e) {
            e.removeLines()
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEachLine"
    }, {
        name: "duplicateSelection",
        bindKey: i("Ctrl-Shift-D", "Command-Shift-D"),
        exec: function(e) {
            e.duplicateSelection()
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
    }, {
        name: "sortlines",
        bindKey: i("Ctrl-Alt-S", "Command-Alt-S"),
        exec: function(e) {
            e.sortLines()
        },
        scrollIntoView: "selection",
        multiSelectAction: "forEachLine"
    }, {
        name: "togglecomment",
        bindKey: i("Ctrl-/", "Command-/"),
        exec: function(e) {
            e.toggleCommentLines()
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
    }, {
        name: "toggleBlockComment",
        bindKey: i("Ctrl-Shift-/", "Command-Shift-/"),
        exec: function(e) {
            e.toggleBlockComment()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
    }, {
        name: "modifyNumberUp",
        bindKey: i("Ctrl-Shift-Up", "Alt-Shift-Up"),
        exec: function(e) {
            e.modifyNumber(1)
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
    }, {
        name: "modifyNumberDown",
        bindKey: i("Ctrl-Shift-Down", "Alt-Shift-Down"),
        exec: function(e) {
            e.modifyNumber(-1)
        },
        scrollIntoView: "cursor",
        multiSelectAction: "forEach"
    }, {
        name: "replace",
        bindKey: i("Ctrl-H", "Command-Option-F"),
        exec: function(e) {
            r.loadModule("ace/ext/searchbox", function(t) {
                t.Search(e, !0)
            })
        }
    }, {
        name: "undo",
        bindKey: i("Ctrl-Z", "Command-Z"),
        exec: function(e) {
            e.undo()
        }
    }, {
        name: "redo",
        bindKey: i("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
        exec: function(e) {
            e.redo()
        }
    }, {
        name: "copylinesup",
        bindKey: i("Alt-Shift-Up", "Command-Option-Up"),
        exec: function(e) {
            e.copyLinesUp()
        },
        scrollIntoView: "cursor"
    }, {
        name: "movelinesup",
        bindKey: i("Alt-Up", "Option-Up"),
        exec: function(e) {
            e.moveLinesUp()
        },
        scrollIntoView: "cursor"
    }, {
        name: "copylinesdown",
        bindKey: i("Alt-Shift-Down", "Command-Option-Down"),
        exec: function(e) {
            e.copyLinesDown()
        },
        scrollIntoView: "cursor"
    }, {
        name: "movelinesdown",
        bindKey: i("Alt-Down", "Option-Down"),
        exec: function(e) {
            e.moveLinesDown()
        },
        scrollIntoView: "cursor"
    }, {
        name: "del",
        bindKey: i("Delete", "Delete|Ctrl-D|Shift-Delete"),
        exec: function(e) {
            e.remove("right")
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "backspace",
        bindKey: i("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
        exec: function(e) {
            e.remove("left")
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "cut_or_delete",
        bindKey: i("Shift-Delete", null),
        exec: function(e) {
            return e.selection.isEmpty() ? void e.remove("left") : !1
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "removetolinestart",
        bindKey: i("Alt-Backspace", "Command-Backspace"),
        exec: function(e) {
            e.removeToLineStart()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "removetolineend",
        bindKey: i("Alt-Delete", "Ctrl-K"),
        exec: function(e) {
            e.removeToLineEnd()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "removewordleft",
        bindKey: i("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
        exec: function(e) {
            e.removeWordLeft()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "removewordright",
        bindKey: i("Ctrl-Delete", "Alt-Delete"),
        exec: function(e) {
            e.removeWordRight()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "outdent",
        bindKey: i("Shift-Tab", "Shift-Tab"),
        exec: function(e) {
            e.blockOutdent()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
    }, {
        name: "indent",
        bindKey: i("Tab", "Tab"),
        exec: function(e) {
            e.indent()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "selectionPart"
    }, {
        name: "blockoutdent",
        bindKey: i("Ctrl-[", "Ctrl-["),
        exec: function(e) {
            e.blockOutdent()
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
    }, {
        name: "blockindent",
        bindKey: i("Ctrl-]", "Ctrl-]"),
        exec: function(e) {
            e.blockIndent()
        },
        multiSelectAction: "forEachLine",
        scrollIntoView: "selectionPart"
    }, {
        name: "insertstring",
        exec: function(e, t) {
            e.insert(t)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "inserttext",
        exec: function(e, t) {
            e.insert(n.stringRepeat(t.text || "", t.times || 1))
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "splitline",
        bindKey: i(null, "Ctrl-O"),
        exec: function(e) {
            e.splitLine()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "transposeletters",
        bindKey: i("Ctrl-T", "Ctrl-T"),
        exec: function(e) {
            e.transposeLetters()
        },
        multiSelectAction: function(e) {
            e.transposeSelections(1)
        },
        scrollIntoView: "cursor"
    }, {
        name: "touppercase",
        bindKey: i("Ctrl-U", "Ctrl-U"),
        exec: function(e) {
            e.toUpperCase()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "tolowercase",
        bindKey: i("Ctrl-Shift-U", "Ctrl-Shift-U"),
        exec: function(e) {
            e.toLowerCase()
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor"
    }, {
        name: "expandtoline",
        bindKey: i("Ctrl-Shift-L", "Command-Shift-L"),
        exec: function(e) {
            var t = e.selection.getRange();
            t.start.column = t.end.column = 0,
            t.end.row++,
            e.selection.setRange(t, !1)
        },
        multiSelectAction: "forEach",
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "joinlines",
        bindKey: i(null, null),
        exec: function(e) {
            for (var t = e.selection.isBackwards(), i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor(), r = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), s = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()), l = a.replace(/\n\s*/, " ").length, c = e.session.doc.getLine(i.row), h = i.row + 1; h <= r.row + 1; h++) {
                var d = n.stringTrimLeft(n.stringTrimRight(e.session.doc.getLine(h)));
                0 !== d.length && (d = " " + d),
                c += d
            }
            r.row + 1 < e.session.doc.getLength() - 1 && (c += e.session.doc.getNewLineCharacter()),
            e.clearSelection(),
            e.session.doc.replace(new o(i.row,0,r.row + 2,0), c),
            l > 0 ? (e.selection.moveCursorTo(i.row, i.column),
            e.selection.selectTo(i.row, i.column + l)) : (s = e.session.doc.getLine(i.row).length > s ? s + 1 : s,
            e.selection.moveCursorTo(i.row, s))
        },
        multiSelectAction: "forEach",
        readOnly: !0
    }, {
        name: "invertSelection",
        bindKey: i(null, null),
        exec: function(e) {
            var t = e.session.doc.getLength() - 1
              , i = e.session.doc.getLine(t).length
              , n = e.selection.rangeList.ranges
              , r = [];
            n.length < 1 && (n = [e.selection.getRange()]);
            for (var s = 0; s < n.length; s++)
                s == n.length - 1 && (n[s].end.row !== t || n[s].end.column !== i) && r.push(new o(n[s].end.row,n[s].end.column,t,i)),
                0 === s ? (0 !== n[s].start.row || 0 !== n[s].start.column) && r.push(new o(0,0,n[s].start.row,n[s].start.column)) : r.push(new o(n[s - 1].end.row,n[s - 1].end.column,n[s].start.row,n[s].start.column));
            e.exitMultiSelectMode(),
            e.clearSelection();
            for (var s = 0; s < r.length; s++)
                e.selection.addRange(r[s], !1)
        },
        readOnly: !0,
        scrollIntoView: "none"
    }]
}),
define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator"], function(e, t) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var i = e("./lib/oop")
      , n = e("./lib/dom")
      , r = e("./lib/lang")
      , o = e("./lib/useragent")
      , s = e("./keyboard/textinput").TextInput
      , a = e("./mouse/mouse_handler").MouseHandler
      , l = e("./mouse/fold_handler").FoldHandler
      , c = e("./keyboard/keybinding").KeyBinding
      , h = e("./edit_session").EditSession
      , d = e("./search").Search
      , u = e("./range").Range
      , p = e("./lib/event_emitter").EventEmitter
      , g = e("./commands/command_manager").CommandManager
      , m = e("./commands/default_commands").commands
      , f = e("./config")
      , b = e("./token_iterator").TokenIterator
      , v = function(e, t) {
        var i = e.getContainerElement();
        this.container = i,
        this.renderer = e,
        this.commands = new g(o.isMac ? "mac" : "win",m),
        this.textInput = new s(e.getTextAreaContainer(),this),
        this.renderer.textarea = this.textInput.getElement(),
        this.keyBinding = new c(this),
        this.$mouseHandler = new a(this),
        new l(this),
        this.$blockScrolling = 0,
        this.$search = (new d).set({
            wrap: !0
        }),
        this.$historyTracker = this.$historyTracker.bind(this),
        this.commands.on("exec", this.$historyTracker),
        this.$initOperationListeners(),
        this._$emitInputEvent = r.delayedCall(function() {
            this._signal("input", {}),
            this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
        }
        .bind(this)),
        this.on("change", function(e, t) {
            t._$emitInputEvent.schedule(31)
        }),
        this.setSession(t || new h("")),
        f.resetOptions(this),
        f._signal("editor", this)
    };
    (function() {
        i.implement(this, p),
        this.$initOperationListeners = function() {
            this.selections = [],
            this.commands.on("exec", this.startOperation.bind(this), !0),
            this.commands.on("afterExec", this.endOperation.bind(this), !0),
            this.$opResetTimer = r.delayedCall(this.endOperation.bind(this)),
            this.on("change", function() {
                this.curOp || this.startOperation(),
                this.curOp.docChanged = !0
            }
            .bind(this), !0),
            this.on("changeSelection", function() {
                this.curOp || this.startOperation(),
                this.curOp.selectionChanged = !0
            }
            .bind(this), !0)
        }
        ,
        this.curOp = null,
        this.prevOp = {},
        this.startOperation = function(e) {
            if (this.curOp) {
                if (!e || this.curOp.command)
                    return;
                this.prevOp = this.curOp
            }
            e || (this.previousCommand = null,
            e = {}),
            this.$opResetTimer.schedule(),
            this.curOp = {
                command: e.command || {},
                args: e.args,
                scrollTop: this.renderer.scrollTop
            },
            this.curOp.command.name && void 0 !== this.curOp.command.scrollIntoView && this.$blockScrolling++
        }
        ,
        this.endOperation = function(e) {
            if (this.curOp) {
                if (e && e.returnValue === !1)
                    return this.curOp = null;
                this._signal("beforeEndOperation");
                var t = this.curOp.command;
                t.name && this.$blockScrolling > 0 && this.$blockScrolling--;
                var i = t && t.scrollIntoView;
                if (i) {
                    switch (i) {
                    case "center-animate":
                        i = "animate";
                    case "center":
                        this.renderer.scrollCursorIntoView(null, .5);
                        break;
                    case "animate":
                    case "cursor":
                        this.renderer.scrollCursorIntoView();
                        break;
                    case "selectionPart":
                        var n = this.selection.getRange()
                          , r = this.renderer.layerConfig;
                        (n.start.row >= r.lastRow || n.end.row <= r.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                    }
                    "animate" == i && this.renderer.animateScrolling(this.curOp.scrollTop)
                }
                this.prevOp = this.curOp,
                this.curOp = null
            }
        }
        ,
        this.$mergeableCommands = ["backspace", "del", "insertstring"],
        this.$historyTracker = function(e) {
            if (this.$mergeUndoDeltas) {
                var t = this.prevOp
                  , i = this.$mergeableCommands
                  , n = t.command && e.command.name == t.command.name;
                if ("insertstring" == e.command.name) {
                    var r = e.args;
                    void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0),
                    n = n && this.mergeNextCommand && (!/\s/.test(r) || /\s/.test(t.args)),
                    this.mergeNextCommand = !0
                } else
                    n = n && -1 !== i.indexOf(e.command.name);
                "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1),
                n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(e.command.name) && (this.sequenceStartTime = Date.now())
            }
        }
        ,
        this.setKeyboardHandler = function(e, t) {
            if (e && "string" == typeof e) {
                this.$keybindingId = e;
                var i = this;
                f.loadModule(["keybinding", e], function(n) {
                    i.$keybindingId == e && i.keyBinding.setKeyboardHandler(n && n.handler),
                    t && t()
                })
            } else
                this.$keybindingId = null,
                this.keyBinding.setKeyboardHandler(e),
                t && t()
        }
        ,
        this.getKeyboardHandler = function() {
            return this.keyBinding.getKeyboardHandler()
        }
        ,
        this.setSession = function(e) {
            if (this.session != e) {
                this.curOp && this.endOperation(),
                this.curOp = {};
                var t = this.session;
                if (t) {
                    this.session.off("change", this.$onDocumentChange),
                    this.session.off("changeMode", this.$onChangeMode),
                    this.session.off("tokenizerUpdate", this.$onTokenizerUpdate),
                    this.session.off("changeTabSize", this.$onChangeTabSize),
                    this.session.off("changeWrapLimit", this.$onChangeWrapLimit),
                    this.session.off("changeWrapMode", this.$onChangeWrapMode),
                    this.session.off("changeFold", this.$onChangeFold),
                    this.session.off("changeFrontMarker", this.$onChangeFrontMarker),
                    this.session.off("changeBackMarker", this.$onChangeBackMarker),
                    this.session.off("changeBreakpoint", this.$onChangeBreakpoint),
                    this.session.off("changeAnnotation", this.$onChangeAnnotation),
                    this.session.off("changeOverwrite", this.$onCursorChange),
                    this.session.off("changeScrollTop", this.$onScrollTopChange),
                    this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                    var i = this.session.getSelection();
                    i.off("changeCursor", this.$onCursorChange),
                    i.off("changeSelection", this.$onSelectionChange)
                }
                this.session = e,
                e ? (this.$onDocumentChange = this.onDocumentChange.bind(this),
                e.on("change", this.$onDocumentChange),
                this.renderer.setSession(e),
                this.$onChangeMode = this.onChangeMode.bind(this),
                e.on("changeMode", this.$onChangeMode),
                this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this),
                e.on("tokenizerUpdate", this.$onTokenizerUpdate),
                this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer),
                e.on("changeTabSize", this.$onChangeTabSize),
                this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this),
                e.on("changeWrapLimit", this.$onChangeWrapLimit),
                this.$onChangeWrapMode = this.onChangeWrapMode.bind(this),
                e.on("changeWrapMode", this.$onChangeWrapMode),
                this.$onChangeFold = this.onChangeFold.bind(this),
                e.on("changeFold", this.$onChangeFold),
                this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this),
                this.session.on("changeFrontMarker", this.$onChangeFrontMarker),
                this.$onChangeBackMarker = this.onChangeBackMarker.bind(this),
                this.session.on("changeBackMarker", this.$onChangeBackMarker),
                this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this),
                this.session.on("changeBreakpoint", this.$onChangeBreakpoint),
                this.$onChangeAnnotation = this.onChangeAnnotation.bind(this),
                this.session.on("changeAnnotation", this.$onChangeAnnotation),
                this.$onCursorChange = this.onCursorChange.bind(this),
                this.session.on("changeOverwrite", this.$onCursorChange),
                this.$onScrollTopChange = this.onScrollTopChange.bind(this),
                this.session.on("changeScrollTop", this.$onScrollTopChange),
                this.$onScrollLeftChange = this.onScrollLeftChange.bind(this),
                this.session.on("changeScrollLeft", this.$onScrollLeftChange),
                this.selection = e.getSelection(),
                this.selection.on("changeCursor", this.$onCursorChange),
                this.$onSelectionChange = this.onSelectionChange.bind(this),
                this.selection.on("changeSelection", this.$onSelectionChange),
                this.onChangeMode(),
                this.$blockScrolling += 1,
                this.onCursorChange(),
                this.$blockScrolling -= 1,
                this.onScrollTopChange(),
                this.onScrollLeftChange(),
                this.onSelectionChange(),
                this.onChangeFrontMarker(),
                this.onChangeBackMarker(),
                this.onChangeBreakpoint(),
                this.onChangeAnnotation(),
                this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(),
                this.renderer.updateFull()) : (this.selection = null,
                this.renderer.setSession(e)),
                this._signal("changeSession", {
                    session: e,
                    oldSession: t
                }),
                this.curOp = null,
                t && t._signal("changeEditor", {
                    oldEditor: this
                }),
                e && e._signal("changeEditor", {
                    editor: this
                })
            }
        }
        ,
        this.getSession = function() {
            return this.session
        }
        ,
        this.setValue = function(e, t) {
            return this.session.doc.setValue(e),
            t ? 1 == t ? this.navigateFileEnd() : -1 == t && this.navigateFileStart() : this.selectAll(),
            e
        }
        ,
        this.getValue = function() {
            return this.session.getValue()
        }
        ,
        this.getSelection = function() {
            return this.selection
        }
        ,
        this.resize = function(e) {
            this.renderer.onResize(e)
        }
        ,
        this.setTheme = function(e, t) {
            this.renderer.setTheme(e, t)
        }
        ,
        this.getTheme = function() {
            return this.renderer.getTheme()
        }
        ,
        this.setStyle = function(e) {
            this.renderer.setStyle(e)
        }
        ,
        this.unsetStyle = function(e) {
            this.renderer.unsetStyle(e)
        }
        ,
        this.getFontSize = function() {
            return this.getOption("fontSize") || n.computedStyle(this.container, "fontSize")
        }
        ,
        this.setFontSize = function(e) {
            this.setOption("fontSize", e)
        }
        ,
        this.$highlightBrackets = function() {
            if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight),
            this.session.$bracketHighlight = null),
            !this.$highlightPending) {
                var e = this;
                this.$highlightPending = !0,
                setTimeout(function() {
                    e.$highlightPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var i = t.findMatchingBracket(e.getCursorPosition());
                        if (i)
                            var n = new u(i.row,i.column,i.row,i.column + 1);
                        else if (t.$mode.getMatching)
                            var n = t.$mode.getMatching(e.session);
                        n && (t.$bracketHighlight = t.addMarker(n, "ace_bracket", "text"))
                    }
                }, 50)
            }
        }
        ,
        this.$highlightTags = function() {
            if (!this.$highlightTagPending) {
                var e = this;
                this.$highlightTagPending = !0,
                setTimeout(function() {
                    e.$highlightTagPending = !1;
                    var t = e.session;
                    if (t && t.bgTokenizer) {
                        var i = e.getCursorPosition()
                          , n = new b(e.session,i.row,i.column)
                          , r = n.getCurrentToken();
                        if (!r || !/\b(?:tag-open|tag-name)/.test(r.type))
                            return t.removeMarker(t.$tagHighlight),
                            void (t.$tagHighlight = null);
                        if (-1 == r.type.indexOf("tag-open") || (r = n.stepForward())) {
                            var o = r.value
                              , s = 0
                              , a = n.stepBackward();
                            if ("<" == a.value) {
                                do
                                    a = r,
                                    r = n.stepForward(),
                                    r && r.value === o && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--);
                                while (r && s >= 0)
                            } else {
                                do
                                    r = a,
                                    a = n.stepBackward(),
                                    r && r.value === o && -1 !== r.type.indexOf("tag-name") && ("<" === a.value ? s++ : "</" === a.value && s--);
                                while (a && 0 >= s);n.stepForward()
                            }
                            if (!r)
                                return t.removeMarker(t.$tagHighlight),
                                void (t.$tagHighlight = null);
                            var l = n.getCurrentTokenRow()
                              , c = n.getCurrentTokenColumn()
                              , h = new u(l,c,l,c + r.value.length);
                            t.$tagHighlight && 0 !== h.compareRange(t.$backMarkers[t.$tagHighlight].range) && (t.removeMarker(t.$tagHighlight),
                            t.$tagHighlight = null),
                            h && !t.$tagHighlight && (t.$tagHighlight = t.addMarker(h, "ace_bracket", "text"))
                        }
                    }
                }, 50)
            }
        }
        ,
        this.focus = function() {
            var e = this;
            setTimeout(function() {
                e.textInput.focus()
            }),
            this.textInput.focus()
        }
        ,
        this.isFocused = function() {
            return this.textInput.isFocused()
        }
        ,
        this.blur = function() {
            this.textInput.blur()
        }
        ,
        this.onFocus = function(e) {
            this.$isFocused || (this.$isFocused = !0,
            this.renderer.showCursor(),
            this.renderer.visualizeFocus(),
            this._emit("focus", e))
        }
        ,
        this.onBlur = function(e) {
            this.$isFocused && (this.$isFocused = !1,
            this.renderer.hideCursor(),
            this.renderer.visualizeBlur(),
            this._emit("blur", e))
        }
        ,
        this.$cursorChange = function() {
            this.renderer.updateCursor()
        }
        ,
        this.onDocumentChange = function(e) {
            var t = this.session.$useWrapMode
              , i = e.start.row == e.end.row ? e.end.row : 1 / 0;
            this.renderer.updateLines(e.start.row, i, t),
            this._signal("change", e),
            this.$cursorChange(),
            this.$updateHighlightActiveLine()
        }
        ,
        this.onTokenizerUpdate = function(e) {
            var t = e.data;
            this.renderer.updateLines(t.first, t.last)
        }
        ,
        this.onScrollTopChange = function() {
            this.renderer.scrollToY(this.session.getScrollTop())
        }
        ,
        this.onScrollLeftChange = function() {
            this.renderer.scrollToX(this.session.getScrollLeft())
        }
        ,
        this.onCursorChange = function() {
            this.$cursorChange(),
            this.$blockScrolling || (f.warn("Automatically scrolling cursor into view after selection change", "this will be disabled in the next version", "set editor.$blockScrolling = Infinity to disable this message"),
            this.renderer.scrollCursorIntoView()),
            this.$highlightBrackets(),
            this.$highlightTags(),
            this.$updateHighlightActiveLine(),
            this._signal("changeSelection")
        }
        ,
        this.$updateHighlightActiveLine = function() {
            var e, t = this.getSession();
            if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (e = this.getCursorPosition()),
            this.renderer.$maxLines && 1 === this.session.getLength() && !(this.renderer.$minLines > 1) && (e = !1)),
            t.$highlightLineMarker && !e)
                t.removeMarker(t.$highlightLineMarker.id),
                t.$highlightLineMarker = null;
            else if (!t.$highlightLineMarker && e) {
                var i = new u(e.row,e.column,e.row,1 / 0);
                i.id = t.addMarker(i, "ace_active-line", "screenLine"),
                t.$highlightLineMarker = i
            } else
                e && (t.$highlightLineMarker.start.row = e.row,
                t.$highlightLineMarker.end.row = e.row,
                t.$highlightLineMarker.start.column = e.column,
                t._signal("changeBackMarker"))
        }
        ,
        this.onSelectionChange = function() {
            var e = this.session;
            if (e.$selectionMarker && e.removeMarker(e.$selectionMarker),
            e.$selectionMarker = null,
            this.selection.isEmpty())
                this.$updateHighlightActiveLine();
            else {
                var t = this.selection.getRange()
                  , i = this.getSelectionStyle();
                e.$selectionMarker = e.addMarker(t, "ace_selection", i)
            }
            var n = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
            this.session.highlight(n),
            this._signal("changeSelection")
        }
        ,
        this.$getSelectionHighLightRegexp = function() {
            var e = this.session
              , t = this.getSelectionRange();
            if (!t.isEmpty() && !t.isMultiLine()) {
                var i = t.start.column - 1
                  , n = t.end.column + 1
                  , r = e.getLine(t.start.row)
                  , o = r.length
                  , s = r.substring(Math.max(i, 0), Math.min(n, o));
                if (!(i >= 0 && /^[\w\d]/.test(s) || o >= n && /[\w\d]$/.test(s)) && (s = r.substring(t.start.column, t.end.column),
                /^[\w\d]+$/.test(s))) {
                    var a = this.$search.$assembleRegExp({
                        wholeWord: !0,
                        caseSensitive: !0,
                        needle: s
                    });
                    return a
                }
            }
        }
        ,
        this.onChangeFrontMarker = function() {
            this.renderer.updateFrontMarkers()
        }
        ,
        this.onChangeBackMarker = function() {
            this.renderer.updateBackMarkers()
        }
        ,
        this.onChangeBreakpoint = function() {
            this.renderer.updateBreakpoints()
        }
        ,
        this.onChangeAnnotation = function() {
            this.renderer.setAnnotations(this.session.getAnnotations())
        }
        ,
        this.onChangeMode = function(e) {
            this.renderer.updateText(),
            this._emit("changeMode", e)
        }
        ,
        this.onChangeWrapLimit = function() {
            this.renderer.updateFull()
        }
        ,
        this.onChangeWrapMode = function() {
            this.renderer.onResize(!0)
        }
        ,
        this.onChangeFold = function() {
            this.$updateHighlightActiveLine(),
            this.renderer.updateFull()
        }
        ,
        this.getSelectedText = function() {
            return this.session.getTextRange(this.getSelectionRange())
        }
        ,
        this.getCopyText = function() {
            var e = this.getSelectedText();
            return this._signal("copy", e),
            e
        }
        ,
        this.onCopy = function() {
            this.commands.exec("copy", this)
        }
        ,
        this.onCut = function() {
            this.commands.exec("cut", this)
        }
        ,
        this.onPaste = function(e, t) {
            var i = {
                text: e,
                event: t
            };
            this.commands.exec("paste", this, i)
        }
        ,
        this.$handlePaste = function(e) {
            "string" == typeof e && (e = {
                text: e
            }),
            this._signal("paste", e);
            var t = e.text;
            if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
                this.insert(t);
            else {
                var i = t.split(/\r\n|\r|\n/)
                  , n = this.selection.rangeList.ranges;
                if (i.length > n.length || i.length < 2 || !i[1])
                    return this.commands.exec("insertstring", this, t);
                for (var r = n.length; r--; ) {
                    var o = n[r];
                    o.isEmpty() || this.session.remove(o),
                    this.session.insert(o.start, i[r])
                }
            }
        }
        ,
        this.execCommand = function(e, t) {
            return this.commands.exec(e, this, t)
        }
        ,
        this.insert = function(e, t) {
            var i = this.session
              , n = i.getMode()
              , r = this.getCursorPosition();
            if (this.getBehavioursEnabled() && !t) {
                var o = n.transformAction(i.getState(r.row), "insertion", this, i, e);
                o && (e !== o.text && (this.session.mergeUndoDeltas = !1,
                this.$mergeNextCommand = !1),
                e = o.text)
            }
            if ("   " == e && (e = this.session.getTabString()),
            this.selection.isEmpty()) {
                if (this.session.getOverwrite()) {
                    var s = new u.fromPoints(r,r);
                    s.end.column += e.length,
                    this.session.remove(s)
                }
            } else {
                var s = this.getSelectionRange();
                r = this.session.remove(s),
                this.clearSelection()
            }
            if ("\n" == e || "\r\n" == e) {
                var a = i.getLine(r.row);
                if (r.column > a.search(/\S|$/)) {
                    var l = a.substr(r.column).search(/\S|$/);
                    i.doc.removeInLine(r.row, r.column, r.column + l)
                }
            }
            this.clearSelection();
            {
                var c = r.column
                  , h = i.getState(r.row)
                  , a = i.getLine(r.row)
                  , d = n.checkOutdent(h, a, e);
                i.insert(r, e)
            }
            if (o && o.selection && this.selection.setSelectionRange(2 == o.selection.length ? new u(r.row,c + o.selection[0],r.row,c + o.selection[1]) : new u(r.row + o.selection[0],o.selection[1],r.row + o.selection[2],o.selection[3])),
            i.getDocument().isNewLine(e)) {
                var p = n.getNextLineIndent(h, a.slice(0, r.column), i.getTabString());
                i.insert({
                    row: r.row + 1,
                    column: 0
                }, p)
            }
            d && n.autoOutdent(h, i, r.row)
        }
        ,
        this.onTextInput = function(e) {
            this.keyBinding.onTextInput(e)
        }
        ,
        this.onCommandKey = function(e, t, i) {
            this.keyBinding.onCommandKey(e, t, i)
        }
        ,
        this.setOverwrite = function(e) {
            this.session.setOverwrite(e)
        }
        ,
        this.getOverwrite = function() {
            return this.session.getOverwrite()
        }
        ,
        this.toggleOverwrite = function() {
            this.session.toggleOverwrite()
        }
        ,
        this.setScrollSpeed = function(e) {
            this.setOption("scrollSpeed", e)
        }
        ,
        this.getScrollSpeed = function() {
            return this.getOption("scrollSpeed")
        }
        ,
        this.setDragDelay = function(e) {
            this.setOption("dragDelay", e)
        }
        ,
        this.getDragDelay = function() {
            return this.getOption("dragDelay")
        }
        ,
        this.setSelectionStyle = function(e) {
            this.setOption("selectionStyle", e)
        }
        ,
        this.getSelectionStyle = function() {
            return this.getOption("selectionStyle")
        }
        ,
        this.setHighlightActiveLine = function(e) {
            this.setOption("highlightActiveLine", e)
        }
        ,
        this.getHighlightActiveLine = function() {
            return this.getOption("highlightActiveLine")
        }
        ,
        this.setHighlightGutterLine = function(e) {
            this.setOption("highlightGutterLine", e)
        }
        ,
        this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine")
        }
        ,
        this.setHighlightSelectedWord = function(e) {
            this.setOption("highlightSelectedWord", e)
        }
        ,
        this.getHighlightSelectedWord = function() {
            return this.$highlightSelectedWord
        }
        ,
        this.setAnimatedScroll = function(e) {
            this.renderer.setAnimatedScroll(e)
        }
        ,
        this.getAnimatedScroll = function() {
            return this.renderer.getAnimatedScroll()
        }
        ,
        this.setShowInvisibles = function(e) {
            this.renderer.setShowInvisibles(e)
        }
        ,
        this.getShowInvisibles = function() {
            return this.renderer.getShowInvisibles()
        }
        ,
        this.setDisplayIndentGuides = function(e) {
            this.renderer.setDisplayIndentGuides(e)
        }
        ,
        this.getDisplayIndentGuides = function() {
            return this.renderer.getDisplayIndentGuides()
        }
        ,
        this.setShowPrintMargin = function(e) {
            this.renderer.setShowPrintMargin(e)
        }
        ,
        this.getShowPrintMargin = function() {
            return this.renderer.getShowPrintMargin()
        }
        ,
        this.setPrintMarginColumn = function(e) {
            this.renderer.setPrintMarginColumn(e)
        }
        ,
        this.getPrintMarginColumn = function() {
            return this.renderer.getPrintMarginColumn()
        }
        ,
        this.setReadOnly = function(e) {
            this.setOption("readOnly", e)
        }
        ,
        this.getReadOnly = function() {
            return this.getOption("readOnly")
        }
        ,
        this.setBehavioursEnabled = function(e) {
            this.setOption("behavioursEnabled", e)
        }
        ,
        this.getBehavioursEnabled = function() {
            return this.getOption("behavioursEnabled")
        }
        ,
        this.setWrapBehavioursEnabled = function(e) {
            this.setOption("wrapBehavioursEnabled", e)
        }
        ,
        this.getWrapBehavioursEnabled = function() {
            return this.getOption("wrapBehavioursEnabled")
        }
        ,
        this.setShowFoldWidgets = function(e) {
            this.setOption("showFoldWidgets", e)
        }
        ,
        this.getShowFoldWidgets = function() {
            return this.getOption("showFoldWidgets")
        }
        ,
        this.setFadeFoldWidgets = function(e) {
            this.setOption("fadeFoldWidgets", e)
        }
        ,
        this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets")
        }
        ,
        this.remove = function(e) {
            this.selection.isEmpty() && ("left" == e ? this.selection.selectLeft() : this.selection.selectRight());
            var t = this.getSelectionRange();
            if (this.getBehavioursEnabled()) {
                var i = this.session
                  , n = i.getState(t.start.row)
                  , r = i.getMode().transformAction(n, "deletion", this, i, t);
                if (0 === t.end.column) {
                    var o = i.getTextRange(t);
                    if ("\n" == o[o.length - 1]) {
                        var s = i.getLine(t.end.row);
                        /^\s+$/.test(s) && (t.end.column = s.length)
                    }
                }
                r && (t = r)
            }
            this.session.remove(t),
            this.clearSelection()
        }
        ,
        this.removeWordRight = function() {
            this.selection.isEmpty() && this.selection.selectWordRight(),
            this.session.remove(this.getSelectionRange()),
            this.clearSelection()
        }
        ,
        this.removeWordLeft = function() {
            this.selection.isEmpty() && this.selection.selectWordLeft(),
            this.session.remove(this.getSelectionRange()),
            this.clearSelection()
        }
        ,
        this.removeToLineStart = function() {
            this.selection.isEmpty() && this.selection.selectLineStart(),
            this.session.remove(this.getSelectionRange()),
            this.clearSelection()
        }
        ,
        this.removeToLineEnd = function() {
            this.selection.isEmpty() && this.selection.selectLineEnd();
            var e = this.getSelectionRange();
            e.start.column == e.end.column && e.start.row == e.end.row && (e.end.column = 0,
            e.end.row++),
            this.session.remove(e),
            this.clearSelection()
        }
        ,
        this.splitLine = function() {
            this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()),
            this.clearSelection());
            var e = this.getCursorPosition();
            this.insert("\n"),
            this.moveCursorToPosition(e)
        }
        ,
        this.transposeLetters = function() {
            if (this.selection.isEmpty()) {
                var e = this.getCursorPosition()
                  , t = e.column;
                if (0 !== t) {
                    var i, n, r = this.session.getLine(e.row);
                    t < r.length ? (i = r.charAt(t) + r.charAt(t - 1),
                    n = new u(e.row,t - 1,e.row,t + 1)) : (i = r.charAt(t - 1) + r.charAt(t - 2),
                    n = new u(e.row,t - 2,e.row,t)),
                    this.session.replace(n, i)
                }
            }
        }
        ,
        this.toLowerCase = function() {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange()
              , i = this.session.getTextRange(t);
            this.session.replace(t, i.toLowerCase()),
            this.selection.setSelectionRange(e)
        }
        ,
        this.toUpperCase = function() {
            var e = this.getSelectionRange();
            this.selection.isEmpty() && this.selection.selectWord();
            var t = this.getSelectionRange()
              , i = this.session.getTextRange(t);
            this.session.replace(t, i.toUpperCase()),
            this.selection.setSelectionRange(e)
        }
        ,
        this.indent = function() {
            var e = this.session
              , t = this.getSelectionRange();
            if (t.start.row < t.end.row) {
                var i = this.$getSelectedRows();
                return void e.indentRows(i.first, i.last, " ")
            }
            if (t.start.column < t.end.column) {
                var n = e.getTextRange(t);
                if (!/^\s+$/.test(n)) {
                    var i = this.$getSelectedRows();
                    return void e.indentRows(i.first, i.last, " ")
                }
            }
            var o = e.getLine(t.start.row)
              , s = t.start
              , a = e.getTabSize()
              , l = e.documentToScreenColumn(s.row, s.column);
            if (this.session.getUseSoftTabs())
                var c = a - l % a
                  , h = r.stringRepeat(" ", c);
            else {
                for (var c = l % a; " " == o[t.start.column - 1] && c; )
                    t.start.column--,
                    c--;
                this.selection.setSelectionRange(t),
                h = "   "
            }
            return this.insert(h)
        }
        ,
        this.blockIndent = function() {
            var e = this.$getSelectedRows();
            this.session.indentRows(e.first, e.last, "  ")
        }
        ,
        this.blockOutdent = function() {
            var e = this.session.getSelection();
            this.session.outdentRows(e.getRange())
        }
        ,
        this.sortLines = function() {
            var e = this.$getSelectedRows()
              , t = this.session
              , i = [];
            for (r = e.first; r <= e.last; r++)
                i.push(t.getLine(r));
            i.sort(function(e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
            });
            for (var n = new u(0,0,0,0), r = e.first; r <= e.last; r++) {
                var o = t.getLine(r);
                n.start.row = r,
                n.end.row = r,
                n.end.column = o.length,
                t.replace(n, i[r - e.first])
            }
        }
        ,
        this.toggleCommentLines = function() {
            var e = this.session.getState(this.getCursorPosition().row)
              , t = this.$getSelectedRows();
            this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last)
        }
        ,
        this.toggleBlockComment = function() {
            var e = this.getCursorPosition()
              , t = this.session.getState(e.row)
              , i = this.getSelectionRange();
            this.session.getMode().toggleBlockComment(t, this.session, i, e)
        }
        ,
        this.getNumberAt = function(e, t) {
            var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
            i.lastIndex = 0;
            for (var n = this.session.getLine(e); i.lastIndex < t; ) {
                var r = i.exec(n);
                if (r.index <= t && r.index + r[0].length >= t) {
                    var o = {
                        value: r[0],
                        start: r.index,
                        end: r.index + r[0].length
                    };
                    return o
                }
            }
            return null
        }
        ,
        this.modifyNumber = function(e) {
            var t = this.selection.getCursor().row
              , i = this.selection.getCursor().column
              , n = new u(t,i - 1,t,i)
              , r = this.session.getTextRange(n);
            if (!isNaN(parseFloat(r)) && isFinite(r)) {
                var o = this.getNumberAt(t, i);
                if (o) {
                    var s = o.value.indexOf(".") >= 0 ? o.start + o.value.indexOf(".") + 1 : o.end
                      , a = o.start + o.value.length - s
                      , l = parseFloat(o.value);
                    l *= Math.pow(10, a),
                    e *= s !== o.end && s > i ? Math.pow(10, o.end - i - 1) : Math.pow(10, o.end - i),
                    l += e,
                    l /= Math.pow(10, a);
                    var c = l.toFixed(a)
                      , h = new u(t,o.start,t,o.end);
                    this.session.replace(h, c),
                    this.moveCursorTo(t, Math.max(o.start + 1, i + c.length - o.value.length))
                }
            }
        }
        ,
        this.removeLines = function() {
            var e = this.$getSelectedRows();
            this.session.removeFullLines(e.first, e.last),
            this.clearSelection()
        }
        ,
        this.duplicateSelection = function() {
            var e = this.selection
              , t = this.session
              , i = e.getRange()
              , n = e.isBackwards();
            if (i.isEmpty()) {
                var r = i.start.row;
                t.duplicateLines(r, r)
            } else {
                var o = n ? i.start : i.end
                  , s = t.insert(o, t.getTextRange(i), !1);
                i.start = o,
                i.end = s,
                e.setSelectionRange(i, n)
            }
        }
        ,
        this.moveLinesDown = function() {
            this.$moveLines(1, !1)
        }
        ,
        this.moveLinesUp = function() {
            this.$moveLines(-1, !1)
        }
        ,
        this.moveText = function(e, t, i) {
            return this.session.moveText(e, t, i)
        }
        ,
        this.copyLinesUp = function() {
            this.$moveLines(-1, !0)
        }
        ,
        this.copyLinesDown = function() {
            this.$moveLines(1, !0)
        }
        ,
        this.$moveLines = function(e, t) {
            var i, n, r = this.selection;
            if (!r.inMultiSelectMode || this.inVirtualSelectionMode) {
                var o = r.toOrientedRange();
                i = this.$getSelectedRows(o),
                n = this.session.$moveLines(i.first, i.last, t ? 0 : e),
                t && -1 == e && (n = 0),
                o.moveBy(n, 0),
                r.fromOrientedRange(o)
            } else {
                var s = r.rangeList.ranges;
                r.rangeList.detach(this.session),
                this.inVirtualSelectionMode = !0;
                for (var a = 0, l = 0, c = s.length, h = 0; c > h; h++) {
                    var d = h;
                    s[h].moveBy(a, 0),
                    i = this.$getSelectedRows(s[h]);
                    for (var u = i.first, p = i.last; ++h < c; ) {
                        l && s[h].moveBy(l, 0);
                        var g = this.$getSelectedRows(s[h]);
                        if (t && g.first != p)
                            break;
                        if (!t && g.first > p + 1)
                            break;
                        p = g.last
                    }
                    for (h--,
                    a = this.session.$moveLines(u, p, t ? 0 : e),
                    t && -1 == e && (d = h + 1); h >= d; )
                        s[d].moveBy(a, 0),
                        d++;
                    t || (a = 0),
                    l += a
                }
                r.fromOrientedRange(r.ranges[0]),
                r.rangeList.attach(this.session),
                this.inVirtualSelectionMode = !1
            }
        }
        ,
        this.$getSelectedRows = function(e) {
            return e = (e || this.getSelectionRange()).collapseRows(),
            {
                first: this.session.getRowFoldStart(e.start.row),
                last: this.session.getRowFoldEnd(e.end.row)
            }
        }
        ,
        this.onCompositionStart = function() {
            this.renderer.showComposition(this.getCursorPosition())
        }
        ,
        this.onCompositionUpdate = function(e) {
            this.renderer.setCompositionText(e)
        }
        ,
        this.onCompositionEnd = function() {
            this.renderer.hideComposition()
        }
        ,
        this.getFirstVisibleRow = function() {
            return this.renderer.getFirstVisibleRow()
        }
        ,
        this.getLastVisibleRow = function() {
            return this.renderer.getLastVisibleRow()
        }
        ,
        this.isRowVisible = function(e) {
            return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow()
        }
        ,
        this.isRowFullyVisible = function(e) {
            return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow()
        }
        ,
        this.$getVisibleRowCount = function() {
            return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
        }
        ,
        this.$moveByPage = function(e, t) {
            var i = this.renderer
              , n = this.renderer.layerConfig
              , r = e * Math.floor(n.height / n.lineHeight);
            this.$blockScrolling++,
            t === !0 ? this.selection.$moveSelection(function() {
                this.moveCursorBy(r, 0)
            }) : t === !1 && (this.selection.moveCursorBy(r, 0),
            this.selection.clearSelection()),
            this.$blockScrolling--;
            var o = i.scrollTop;
            i.scrollBy(0, r * n.lineHeight),
            null != t && i.scrollCursorIntoView(null, .5),
            i.animateScrolling(o)
        }
        ,
        this.selectPageDown = function() {
            this.$moveByPage(1, !0)
        }
        ,
        this.selectPageUp = function() {
            this.$moveByPage(-1, !0)
        }
        ,
        this.gotoPageDown = function() {
            this.$moveByPage(1, !1)
        }
        ,
        this.gotoPageUp = function() {
            this.$moveByPage(-1, !1)
        }
        ,
        this.scrollPageDown = function() {
            this.$moveByPage(1)
        }
        ,
        this.scrollPageUp = function() {
            this.$moveByPage(-1)
        }
        ,
        this.scrollToRow = function(e) {
            this.renderer.scrollToRow(e)
        }
        ,
        this.scrollToLine = function(e, t, i, n) {
            this.renderer.scrollToLine(e, t, i, n)
        }
        ,
        this.centerSelection = function() {
            var e = this.getSelectionRange()
              , t = {
                row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
            };
            this.renderer.alignCursor(t, .5)
        }
        ,
        this.getCursorPosition = function() {
            return this.selection.getCursor()
        }
        ,
        this.getCursorPositionScreen = function() {
            return this.session.documentToScreenPosition(this.getCursorPosition())
        }
        ,
        this.getSelectionRange = function() {
            return this.selection.getRange()
        }
        ,
        this.selectAll = function() {
            this.$blockScrolling += 1,
            this.selection.selectAll(),
            this.$blockScrolling -= 1
        }
        ,
        this.clearSelection = function() {
            this.selection.clearSelection()
        }
        ,
        this.moveCursorTo = function(e, t) {
            this.selection.moveCursorTo(e, t)
        }
        ,
        this.moveCursorToPosition = function(e) {
            this.selection.moveCursorToPosition(e)
        }
        ,
        this.jumpToMatching = function(e, t) {
            var i = this.getCursorPosition()
              , n = new b(this.session,i.row,i.column)
              , r = n.getCurrentToken()
              , o = r || n.stepForward();
            if (o) {
                var s, a, l = !1, c = {}, h = i.column - o.start, d = {
                    ")": "(",
                    "(": "(",
                    "]": "[",
                    "[": "[",
                    "{": "{",
                    "}": "{"
                };
                do {
                    if (o.value.match(/[{}()\[\]]/g)) {
                        for (; h < o.value.length && !l; h++)
                            if (d[o.value[h]])
                                switch (a = d[o.value[h]] + "." + o.type.replace("rparen", "lparen"),
                                isNaN(c[a]) && (c[a] = 0),
                                o.value[h]) {
                                case "(":
                                case "[":
                                case "{":
                                    c[a]++;
                                    break;
                                case ")":
                                case "]":
                                case "}":
                                    c[a]--,
                                    -1 === c[a] && (s = "bracket",
                                    l = !0)
                                }
                    } else
                        o && -1 !== o.type.indexOf("tag-name") && (isNaN(c[o.value]) && (c[o.value] = 0),
                        "<" === r.value ? c[o.value]++ : "</" === r.value && c[o.value]--,
                        -1 === c[o.value] && (s = "tag",
                        l = !0));
                    l || (r = o,
                    o = n.stepForward(),
                    h = 0)
                } while (o && !l);if (s) {
                    var p, g;
                    if ("bracket" === s)
                        p = this.session.getBracketRange(i),
                        p || (p = new u(n.getCurrentTokenRow(),n.getCurrentTokenColumn() + h - 1,n.getCurrentTokenRow(),n.getCurrentTokenColumn() + h - 1),
                        g = p.start,
                        (t || g.row === i.row && Math.abs(g.column - i.column) < 2) && (p = this.session.getBracketRange(g)));
                    else if ("tag" === s) {
                        if (!o || -1 === o.type.indexOf("tag-name"))
                            return;
                        var m = o.value;
                        if (p = new u(n.getCurrentTokenRow(),n.getCurrentTokenColumn() - 2,n.getCurrentTokenRow(),n.getCurrentTokenColumn() - 2),
                        0 === p.compare(i.row, i.column)) {
                            l = !1;
                            do
                                o = r,
                                r = n.stepBackward(),
                                r && (-1 !== r.type.indexOf("tag-close") && p.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1),
                                o.value === m && -1 !== o.type.indexOf("tag-name") && ("<" === r.value ? c[m]++ : "</" === r.value && c[m]--,
                                0 === c[m] && (l = !0)));
                            while (r && !l)
                        }
                        o && o.type.indexOf("tag-name") && (g = p.start,
                        g.row == i.row && Math.abs(g.column - i.column) < 2 && (g = p.end))
                    }
                    g = p && p.cursor || g,
                    g && (e ? p && t ? this.selection.setRange(p) : p && p.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(g.row, g.column) : this.selection.moveTo(g.row, g.column))
                }
            }
        }
        ,
        this.gotoLine = function(e, t, i) {
            this.selection.clearSelection(),
            this.session.unfold({
                row: e - 1,
                column: t || 0
            }),
            this.$blockScrolling += 1,
            this.exitMultiSelectMode && this.exitMultiSelectMode(),
            this.moveCursorTo(e - 1, t || 0),
            this.$blockScrolling -= 1,
            this.isRowFullyVisible(e - 1) || this.scrollToLine(e - 1, !0, i)
        }
        ,
        this.navigateTo = function(e, t) {
            this.selection.moveTo(e, t)
        }
        ,
        this.navigateUp = function(e) {
            if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(),
            this.selection.moveCursorBy(-e || -1, 0)
        }
        ,
        this.navigateDown = function(e) {
            if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                var t = this.selection.anchor.getPosition();
                return this.moveCursorToPosition(t)
            }
            this.selection.clearSelection(),
            this.selection.moveCursorBy(e || 1, 0)
        }
        ,
        this.navigateLeft = function(e) {
            if (this.selection.isEmpty())
                for (e = e || 1; e--; )
                    this.selection.moveCursorLeft();
            else {
                var t = this.getSelectionRange().start;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        }
        ,
        this.navigateRight = function(e) {
            if (this.selection.isEmpty())
                for (e = e || 1; e--; )
                    this.selection.moveCursorRight();
            else {
                var t = this.getSelectionRange().end;
                this.moveCursorToPosition(t)
            }
            this.clearSelection()
        }
        ,
        this.navigateLineStart = function() {
            this.selection.moveCursorLineStart(),
            this.clearSelection()
        }
        ,
        this.navigateLineEnd = function() {
            this.selection.moveCursorLineEnd(),
            this.clearSelection()
        }
        ,
        this.navigateFileEnd = function() {
            this.selection.moveCursorFileEnd(),
            this.clearSelection()
        }
        ,
        this.navigateFileStart = function() {
            this.selection.moveCursorFileStart(),
            this.clearSelection()
        }
        ,
        this.navigateWordRight = function() {
            this.selection.moveCursorWordRight(),
            this.clearSelection()
        }
        ,
        this.navigateWordLeft = function() {
            this.selection.moveCursorWordLeft(),
            this.clearSelection()
        }
        ,
        this.replace = function(e, t) {
            t && this.$search.set(t);
            var i = this.$search.find(this.session)
              , n = 0;
            return i ? (this.$tryReplace(i, e) && (n = 1),
            null !== i && (this.selection.setSelectionRange(i),
            this.renderer.scrollSelectionIntoView(i.start, i.end)),
            n) : n
        }
        ,
        this.replaceAll = function(e, t) {
            t && this.$search.set(t);
            var i = this.$search.findAll(this.session)
              , n = 0;
            if (!i.length)
                return n;
            this.$blockScrolling += 1;
            var r = this.getSelectionRange();
            this.selection.moveTo(0, 0);
            for (var o = i.length - 1; o >= 0; --o)
                this.$tryReplace(i[o], e) && n++;
            return this.selection.setSelectionRange(r),
            this.$blockScrolling -= 1,
            n
        }
        ,
        this.$tryReplace = function(e, t) {
            var i = this.session.getTextRange(e);
            return t = this.$search.replace(i, t),
            null !== t ? (e.end = this.session.replace(e, t),
            e) : null
        }
        ,
        this.getLastSearchOptions = function() {
            return this.$search.getOptions()
        }
        ,
        this.find = function(e, t, n) {
            t || (t = {}),
            "string" == typeof e || e instanceof RegExp ? t.needle = e : "object" == typeof e && i.mixin(t, e);
            var r = this.selection.getRange();
            null == t.needle && (e = this.session.getTextRange(r) || this.$search.$options.needle,
            e || (r = this.session.getWordRange(r.start.row, r.start.column),
            e = this.session.getTextRange(r)),
            this.$search.set({
                needle: e
            })),
            this.$search.set(t),
            t.start || this.$search.set({
                start: r
            });
            var o = this.$search.find(this.session);
            return t.preventScroll ? o : o ? (this.revealRange(o, n),
            o) : (t.backwards ? r.start = r.end : r.end = r.start,
            void this.selection.setRange(r))
        }
        ,
        this.findNext = function(e, t) {
            this.find({
                skipCurrent: !0,
                backwards: !1
            }, e, t)
        }
        ,
        this.findPrevious = function(e, t) {
            this.find(e, {
                skipCurrent: !0,
                backwards: !0
            }, t)
        }
        ,
        this.revealRange = function(e, t) {
            this.$blockScrolling += 1,
            this.session.unfold(e),
            this.selection.setSelectionRange(e),
            this.$blockScrolling -= 1;
            var i = this.renderer.scrollTop;
            this.renderer.scrollSelectionIntoView(e.start, e.end, .5),
            t !== !1 && this.renderer.animateScrolling(i)
        }
        ,
        this.undo = function() {
            this.$blockScrolling++,
            this.session.getUndoManager().undo(),
            this.$blockScrolling--,
            this.renderer.scrollCursorIntoView(null, .5)
        }
        ,
        this.redo = function() {
            this.$blockScrolling++,
            this.session.getUndoManager().redo(),
            this.$blockScrolling--,
            this.renderer.scrollCursorIntoView(null, .5)
        }
        ,
        this.destroy = function() {
            this.renderer.destroy(),
            this._signal("destroy", this),
            this.session && this.session.destroy()
        }
        ,
        this.setAutoScrollEditorIntoView = function(e) {
            if (e) {
                var t, i = this, n = !1;
                this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                var r = this.$scrollAnchor;
                r.style.cssText = "position:absolute",
                this.container.insertBefore(r, this.container.firstChild);
                var o = this.on("changeSelection", function() {
                    n = !0
                })
                  , s = this.renderer.on("beforeRender", function() {
                    n && (t = i.renderer.container.getBoundingClientRect())
                })
                  , a = this.renderer.on("afterRender", function() {
                    if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                        var e = i.renderer
                          , o = e.$cursorLayer.$pixelPos
                          , s = e.layerConfig
                          , a = o.top - s.offset;
                        n = o.top >= 0 && a + t.top < 0 ? !0 : o.top < s.height && o.top + t.top + s.lineHeight > window.innerHeight ? !1 : null,
                        null != n && (r.style.top = a + "px",
                        r.style.left = o.left + "px",
                        r.style.height = s.lineHeight + "px",
                        r.scrollIntoView(n)),
                        n = t = null
                    }
                });
                this.setAutoScrollEditorIntoView = function(e) {
                    e || (delete this.setAutoScrollEditorIntoView,
                    this.off("changeSelection", o),
                    this.renderer.off("afterRender", a),
                    this.renderer.off("beforeRender", s))
                }
            }
        }
        ,
        this.$resetCursorStyle = function() {
            var e = this.$cursorStyle || "ace"
              , t = this.renderer.$cursorLayer;
            t && (t.setSmoothBlinking(/smooth/.test(e)),
            t.isBlinking = !this.$readOnly && "wide" != e,
            n.setCssClass(t.element, "ace_slim-cursors", /slim/.test(e)))
        }
    }
    ).call(v.prototype),
    f.defineOptions(v.prototype, "editor", {
        selectionStyle: {
            set: function(e) {
                this.onSelectionChange(),
                this._signal("changeSelectionStyle", {
                    data: e
                })
            },
            initialValue: "line"
        },
        highlightActiveLine: {
            set: function() {
                this.$updateHighlightActiveLine()
            },
            initialValue: !0
        },
        highlightSelectedWord: {
            set: function() {
                this.$onSelectionChange()
            },
            initialValue: !0
        },
        readOnly: {
            set: function() {
                this.$resetCursorStyle()
            },
            initialValue: !1
        },
        cursorStyle: {
            set: function() {
                this.$resetCursorStyle()
            },
            values: ["ace", "slim", "smooth", "wide"],
            initialValue: "ace"
        },
        mergeUndoDeltas: {
            values: [!1, !0, "always"],
            initialValue: !0
        },
        behavioursEnabled: {
            initialValue: !0
        },
        wrapBehavioursEnabled: {
            initialValue: !0
        },
        autoScrollEditorIntoView: {
            set: function(e) {
                this.setAutoScrollEditorIntoView(e)
            }
        },
        keyboardHandler: {
            set: function(e) {
                this.setKeyboardHandler(e)
            },
            get: function() {
                return this.keybindingId
            },
            handlesSet: !0
        },
        hScrollBarAlwaysVisible: "renderer",
        vScrollBarAlwaysVisible: "renderer",
        highlightGutterLine: "renderer",
        animatedScroll: "renderer",
        showInvisibles: "renderer",
        showPrintMargin: "renderer",
        printMarginColumn: "renderer",
        printMargin: "renderer",
        fadeFoldWidgets: "renderer",
        showFoldWidgets: "renderer",
        showLineNumbers: "renderer",
        showGutter: "renderer",
        displayIndentGuides: "renderer",
        fontSize: "renderer",
        fontFamily: "renderer",
        maxLines: "renderer",
        minLines: "renderer",
        scrollPastEnd: "renderer",
        fixedWidthGutter: "renderer",
        theme: "renderer",
        scrollSpeed: "$mouseHandler",
        dragDelay: "$mouseHandler",
        dragEnabled: "$mouseHandler",
        focusTimout: "$mouseHandler",
        tooltipFollowsMouse: "$mouseHandler",
        firstLineNumber: "session",
        overwrite: "session",
        newLineMode: "session",
        useWorker: "session",
        useSoftTabs: "session",
        tabSize: "session",
        wrap: "session",
        indentedSoftWrap: "session",
        foldStyle: "session",
        mode: "session"
    }),
    t.Editor = v
}),
define("ace/undomanager", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = function() {
        this.reset()
    };
    (function() {
        function e(e) {
            return {
                action: e.action,
                start: e.start,
                end: e.end,
                lines: 1 == e.lines.length ? null : e.lines,
                text: 1 == e.lines.length ? e.lines[0] : null
            }
        }
        function t(e) {
            return {
                action: e.action,
                start: e.start,
                end: e.end,
                lines: e.lines || [e.text]
            }
        }
        function i(e, t) {
            for (var i = new Array(e.length), n = 0; n < e.length; n++) {
                for (var r = e[n], o = {
                    group: r.group,
                    deltas: new Array(r.length)
                }, s = 0; s < r.deltas.length; s++) {
                    var a = r.deltas[s];
                    o.deltas[s] = t(a)
                }
                i[n] = o
            }
            return i
        }
        this.execute = function(e) {
            var t = e.args[0];
            this.$doc = e.args[1],
            e.merge && this.hasUndo() && (this.dirtyCounter--,
            t = this.$undoStack.pop().concat(t)),
            this.$undoStack.push(t),
            this.$redoStack = [],
            this.dirtyCounter < 0 && (this.dirtyCounter = 0 / 0),
            this.dirtyCounter++
        }
        ,
        this.undo = function(e) {
            var t = this.$undoStack.pop()
              , i = null;
            return t && (i = this.$doc.undoChanges(t, e),
            this.$redoStack.push(t),
            this.dirtyCounter--),
            i
        }
        ,
        this.redo = function(e) {
            var t = this.$redoStack.pop()
              , i = null;
            return t && (i = this.$doc.redoChanges(this.$deserializeDeltas(t), e),
            this.$undoStack.push(t),
            this.dirtyCounter++),
            i
        }
        ,
        this.reset = function() {
            this.$undoStack = [],
            this.$redoStack = [],
            this.dirtyCounter = 0
        }
        ,
        this.hasUndo = function() {
            return this.$undoStack.length > 0
        }
        ,
        this.hasRedo = function() {
            return this.$redoStack.length > 0
        }
        ,
        this.markClean = function() {
            this.dirtyCounter = 0
        }
        ,
        this.isClean = function() {
            return 0 === this.dirtyCounter
        }
        ,
        this.$serializeDeltas = function(t) {
            return i(t, e)
        }
        ,
        this.$deserializeDeltas = function(e) {
            return i(e, t)
        }
    }
    ).call(i.prototype),
    t.UndoManager = i
}),
define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("../lib/dom")
      , n = e("../lib/oop")
      , r = e("../lib/lang")
      , o = e("../lib/event_emitter").EventEmitter
      , s = function(e) {
        this.element = i.createElement("div"),
        this.element.className = "ace_layer ace_gutter-layer",
        e.appendChild(this.element),
        this.setShowFoldWidgets(this.$showFoldWidgets),
        this.gutterWidth = 0,
        this.$annotations = [],
        this.$updateAnnotations = this.$updateAnnotations.bind(this),
        this.$cells = []
    };
    (function() {
        n.implement(this, o),
        this.setSession = function(e) {
            this.session && this.session.removeEventListener("change", this.$updateAnnotations),
            this.session = e,
            e && e.on("change", this.$updateAnnotations)
        }
        ,
        this.addGutterDecoration = function(e, t) {
            window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"),
            this.session.addGutterDecoration(e, t)
        }
        ,
        this.removeGutterDecoration = function(e, t) {
            window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"),
            this.session.removeGutterDecoration(e, t)
        }
        ,
        this.setAnnotations = function(e) {
            this.$annotations = [];
            for (var t = 0; t < e.length; t++) {
                var i = e[t]
                  , n = i.row
                  , o = this.$annotations[n];
                o || (o = this.$annotations[n] = {
                    text: []
                });
                var s = i.text;
                s = s ? r.escapeHTML(s) : i.html || "",
                -1 === o.text.indexOf(s) && o.text.push(s);
                var a = i.type;
                "error" == a ? o.className = " ace_error" : "warning" == a && " ace_error" != o.className ? o.className = " ace_warning" : "info" == a && !o.className && (o.className = " ace_info")
            }
        }
        ,
        this.$updateAnnotations = function(e) {
            if (this.$annotations.length) {
                var t = e.start.row
                  , i = e.end.row - t;
                if (0 !== i)
                    if ("remove" == e.action)
                        this.$annotations.splice(t, i + 1, null);
                    else {
                        var n = new Array(i + 1);
                        n.unshift(t, 1),
                        this.$annotations.splice.apply(this.$annotations, n)
                    }
            }
        }
        ,
        this.update = function(e) {
            for (var t = this.session, n = e.firstRow, r = Math.min(e.lastRow + e.gutterOffset, t.getLength() - 1), o = t.getNextFoldLine(n), s = o ? o.start.row : 1 / 0, a = this.$showFoldWidgets && t.foldWidgets, l = t.$breakpoints, c = t.$decorations, h = t.$firstLineNumber, d = 0, u = t.gutterRenderer || this.$renderer, p = null, g = -1, m = n; ; ) {
                if (m > s && (m = o.end.row + 1,
                o = t.getNextFoldLine(m, o),
                s = o ? o.start.row : 1 / 0),
                m > r) {
                    for (; this.$cells.length > g + 1; )
                        p = this.$cells.pop(),
                        this.element.removeChild(p.element);
                    break
                }
                p = this.$cells[++g],
                p || (p = {
                    element: null,
                    textNode: null,
                    foldWidget: null
                },
                p.element = i.createElement("div"),
                p.textNode = document.createTextNode(""),
                p.element.appendChild(p.textNode),
                this.element.appendChild(p.element),
                this.$cells[g] = p);
                var f = "ace_gutter-cell ";
                l[m] && (f += l[m]),
                c[m] && (f += c[m]),
                this.$annotations[m] && (f += this.$annotations[m].className),
                p.element.className != f && (p.element.className = f);
                var b = t.getRowLength(m) * e.lineHeight + "px";
                if (b != p.element.style.height && (p.element.style.height = b),
                a) {
                    var v = a[m];
                    null == v && (v = a[m] = t.getFoldWidget(m))
                }
                if (v) {
                    p.foldWidget || (p.foldWidget = i.createElement("span"),
                    p.element.appendChild(p.foldWidget));
                    var f = "ace_fold-widget ace_" + v;
                    f += "start" == v && m == s && m < o.end.row ? " ace_closed" : " ace_open",
                    p.foldWidget.className != f && (p.foldWidget.className = f);
                    var b = e.lineHeight + "px";
                    p.foldWidget.style.height != b && (p.foldWidget.style.height = b)
                } else
                    p.foldWidget && (p.element.removeChild(p.foldWidget),
                    p.foldWidget = null);
                var w = d = u ? u.getText(t, m) : m + h;
                w != p.textNode.data && (p.textNode.data = w),
                m++
            }
            this.element.style.height = e.minHeight + "px",
            (this.$fixedWidth || t.$useWrapMode) && (d = t.getLength() + h);
            var C = u ? u.getWidth(t, d, e) : d.toString().length * e.characterWidth
              , y = this.$padding || this.$computePadding();
            C += y.left + y.right,
            C !== this.gutterWidth && !isNaN(C) && (this.gutterWidth = C,
            this.element.style.width = Math.ceil(this.gutterWidth) + "px",
            this._emit("changeGutterWidth", C))
        }
        ,
        this.$fixedWidth = !1,
        this.$showLineNumbers = !0,
        this.$renderer = "",
        this.setShowLineNumbers = function(e) {
            this.$renderer = !e && {
                getWidth: function() {
                    return ""
                },
                getText: function() {
                    return ""
                }
            }
        }
        ,
        this.getShowLineNumbers = function() {
            return this.$showLineNumbers
        }
        ,
        this.$showFoldWidgets = !0,
        this.setShowFoldWidgets = function(e) {
            e ? i.addCssClass(this.element, "ace_folding-enabled") : i.removeCssClass(this.element, "ace_folding-enabled"),
            this.$showFoldWidgets = e,
            this.$padding = null
        }
        ,
        this.getShowFoldWidgets = function() {
            return this.$showFoldWidgets
        }
        ,
        this.$computePadding = function() {
            if (!this.element.firstChild)
                return {
                    left: 0,
                    right: 0
                };
            var e = i.computedStyle(this.element.firstChild);
            return this.$padding = {},
            this.$padding.left = parseInt(e.paddingLeft) + 1 || 0,
            this.$padding.right = parseInt(e.paddingRight) || 0,
            this.$padding
        }
        ,
        this.getRegion = function(e) {
            var t = this.$padding || this.$computePadding()
              , i = this.element.getBoundingClientRect();
            return e.x < t.left + i.left ? "markers" : this.$showFoldWidgets && e.x > i.right - t.right ? "foldWidgets" : void 0
        }
    }
    ).call(s.prototype),
    t.Gutter = s
}),
define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(e, t) {
    "use strict";
    var i = e("../range").Range
      , n = e("../lib/dom")
      , r = function(e) {
        this.element = n.createElement("div"),
        this.element.className = "ace_layer ace_marker-layer",
        e.appendChild(this.element)
    };
    (function() {
        function e(e, t, i, n) {
            return (e ? 1 : 0) | (t ? 2 : 0) | (i ? 4 : 0) | (n ? 8 : 0)
        }
        this.$padding = 0,
        this.setPadding = function(e) {
            this.$padding = e
        }
        ,
        this.setSession = function(e) {
            this.session = e
        }
        ,
        this.setMarkers = function(e) {
            this.markers = e
        }
        ,
        this.update = function(e) {
            var e = e || this.config;
            if (e) {
                this.config = e;
                var t = [];
                for (var i in this.markers) {
                    var n = this.markers[i];
                    if (n.range) {
                        var r = n.range.clipRows(e.firstRow, e.lastRow);
                        if (!r.isEmpty())
                            if (r = r.toScreenRange(this.session),
                            n.renderer) {
                                var o = this.$getTop(r.start.row, e)
                                  , s = this.$padding + r.start.column * e.characterWidth;
                                n.renderer(t, r, s, o, e)
                            } else
                                "fullLine" == n.type ? this.drawFullLineMarker(t, r, n.clazz, e) : "screenLine" == n.type ? this.drawScreenLineMarker(t, r, n.clazz, e) : r.isMultiLine() ? "text" == n.type ? this.drawTextMarker(t, r, n.clazz, e) : this.drawMultiLineMarker(t, r, n.clazz, e) : this.drawSingleLineMarker(t, r, n.clazz + " ace_start ace_br15", e)
                    } else
                        n.update(t, this, this.session, e)
                }
                this.element.innerHTML = t.join("")
            }
        }
        ,
        this.$getTop = function(e, t) {
            return (e - t.firstRowScreen) * t.lineHeight
        }
        ,
        this.drawTextMarker = function(t, n, r, o, s) {
            for (var a = this.session, l = n.start.row, c = n.end.row, h = l, d = 0, u = 0, p = a.getScreenLastRowColumn(h), g = new i(h,n.start.column,h,u); c >= h; h++)
                g.start.row = g.end.row = h,
                g.start.column = h == l ? n.start.column : a.getRowWrapIndent(h),
                g.end.column = p,
                d = u,
                u = p,
                p = c > h + 1 ? a.getScreenLastRowColumn(h + 1) : h == c ? 0 : n.end.column,
                this.drawSingleLineMarker(t, g, r + (h == l ? " ace_start" : "") + " ace_br" + e(h == l || h == l + 1 && n.start.column, u > d, u > p, h == c), o, h == c ? 0 : 1, s)
        }
        ,
        this.drawMultiLineMarker = function(e, t, i, n, r) {
            var o = this.$padding
              , s = n.lineHeight
              , a = this.$getTop(t.start.row, n)
              , l = o + t.start.column * n.characterWidth;
            r = r || "",
            e.push("<div class='", i, " ace_br1 ace_start' style='", "height:", s, "px;", "right:0;", "top:", a, "px;", "left:", l, "px;", r, "'></div>"),
            a = this.$getTop(t.end.row, n);
            var c = t.end.column * n.characterWidth;
            if (e.push("<div class='", i, " ace_br12' style='", "height:", s, "px;", "width:", c, "px;", "top:", a, "px;", "left:", o, "px;", r, "'></div>"),
            s = (t.end.row - t.start.row - 1) * n.lineHeight,
            !(0 >= s)) {
                a = this.$getTop(t.start.row + 1, n);
                var h = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                e.push("<div class='", i, h ? " ace_br" + h : "", "' style='", "height:", s, "px;", "right:0;", "top:", a, "px;", "left:", o, "px;", r, "'></div>")
            }
        }
        ,
        this.drawSingleLineMarker = function(e, t, i, n, r, o) {
            var s = n.lineHeight
              , a = (t.end.column + (r || 0) - t.start.column) * n.characterWidth
              , l = this.$getTop(t.start.row, n)
              , c = this.$padding + t.start.column * n.characterWidth;
            e.push("<div class='", i, "' style='", "height:", s, "px;", "width:", a, "px;", "top:", l, "px;", "left:", c, "px;", o || "", "'></div>")
        }
        ,
        this.drawFullLineMarker = function(e, t, i, n, r) {
            var o = this.$getTop(t.start.row, n)
              , s = n.lineHeight;
            t.start.row != t.end.row && (s += this.$getTop(t.end.row, n) - o),
            e.push("<div class='", i, "' style='", "height:", s, "px;", "top:", o, "px;", "left:0;right:0;", r || "", "'></div>")
        }
        ,
        this.drawScreenLineMarker = function(e, t, i, n, r) {
            var o = this.$getTop(t.start.row, n)
              , s = n.lineHeight;
            e.push("<div class='", i, "' style='", "height:", s, "px;", "top:", o, "px;", "left:0;right:0;", r || "", "'></div>")
        }
    }
    ).call(r.prototype),
    t.Marker = r
}),
define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("../lib/dom")
      , r = e("../lib/lang")
      , o = (e("../lib/useragent"),
    e("../lib/event_emitter").EventEmitter)
      , s = function(e) {
        this.element = n.createElement("div"),
        this.element.className = "ace_layer ace_text-layer",
        e.appendChild(this.element),
        this.$updateEolChar = this.$updateEolChar.bind(this)
    };
    (function() {
        i.implement(this, o),
        this.EOF_CHAR = "\xb6",
        this.EOL_CHAR_LF = "\xac",
        this.EOL_CHAR_CRLF = "\xa4",
        this.EOL_CHAR = this.EOL_CHAR_LF,
        this.TAB_CHAR = "\u2014",
        this.SPACE_CHAR = "\xb7",
        this.$padding = 0,
        this.$updateEolChar = function() {
            var e = "\n" == this.session.doc.getNewLineCharacter() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
            return this.EOL_CHAR != e ? (this.EOL_CHAR = e,
            !0) : void 0
        }
        ,
        this.setPadding = function(e) {
            this.$padding = e,
            this.element.style.padding = "0 " + e + "px"
        }
        ,
        this.getLineHeight = function() {
            return this.$fontMetrics.$characterSize.height || 0
        }
        ,
        this.getCharacterWidth = function() {
            return this.$fontMetrics.$characterSize.width || 0
        }
        ,
        this.$setFontMetrics = function(e) {
            this.$fontMetrics = e,
            this.$fontMetrics.on("changeCharacterSize", function(e) {
                this._signal("changeCharacterSize", e)
            }
            .bind(this)),
            this.$pollSizeChanges()
        }
        ,
        this.checkForSizeChanges = function() {
            this.$fontMetrics.checkForSizeChanges()
        }
        ,
        this.$pollSizeChanges = function() {
            return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
        }
        ,
        this.setSession = function(e) {
            this.session = e,
            e && this.$computeTabString()
        }
        ,
        this.showInvisibles = !1,
        this.setShowInvisibles = function(e) {
            return this.showInvisibles == e ? !1 : (this.showInvisibles = e,
            this.$computeTabString(),
            !0)
        }
        ,
        this.displayIndentGuides = !0,
        this.setDisplayIndentGuides = function(e) {
            return this.displayIndentGuides == e ? !1 : (this.displayIndentGuides = e,
            this.$computeTabString(),
            !0)
        }
        ,
        this.$tabStrings = [],
        this.onChangeTabSize = this.$computeTabString = function() {
            var e = this.session.getTabSize();
            this.tabSize = e;
            for (var t = this.$tabStrings = [0], i = 1; e + 1 > i; i++)
                t.push(this.showInvisibles ? "<span class='ace_invisible ace_invisible_tab'>" + r.stringRepeat(this.TAB_CHAR, i) + "</span>" : r.stringRepeat(" ", i));
            if (this.displayIndentGuides) {
                this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                var n = "ace_indent-guide"
                  , o = ""
                  , s = "";
                if (this.showInvisibles) {
                    n += " ace_invisible",
                    o = " ace_invisible_space",
                    s = " ace_invisible_tab";
                    var a = r.stringRepeat(this.SPACE_CHAR, this.tabSize)
                      , l = r.stringRepeat(this.TAB_CHAR, this.tabSize)
                } else
                    var a = r.stringRepeat(" ", this.tabSize)
                      , l = a;
                this.$tabStrings[" "] = "<span class='" + n + o + "'>" + a + "</span>",
                this.$tabStrings["  "] = "<span class='" + n + s + "'>" + l + "</span>"
            }
        }
        ,
        this.updateLines = function(e, t, i) {
            (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) && this.scrollLines(e),
            this.config = e;
            for (var n = Math.max(t, e.firstRow), r = Math.min(i, e.lastRow), o = this.element.childNodes, s = 0, a = e.firstRow; n > a; a++) {
                var l = this.session.getFoldLine(a);
                if (l) {
                    if (l.containsRow(n)) {
                        n = l.start.row;
                        break
                    }
                    a = l.end.row
                }
                s++
            }
            for (var a = n, l = this.session.getNextFoldLine(a), c = l ? l.start.row : 1 / 0; a > c && (a = l.end.row + 1,
            l = this.session.getNextFoldLine(a, l),
            c = l ? l.start.row : 1 / 0),
            !(a > r); ) {
                var h = o[s++];
                if (h) {
                    var d = [];
                    this.$renderLine(d, a, !this.$useLineGroups(), a == c ? l : !1),
                    h.style.height = e.lineHeight * this.session.getRowLength(a) + "px",
                    h.innerHTML = d.join("")
                }
                a++
            }
        }
        ,
        this.scrollLines = function(e) {
            var t = this.config;
            if (this.config = e,
            !t || t.lastRow < e.firstRow)
                return this.update(e);
            if (e.lastRow < t.firstRow)
                return this.update(e);
            var i = this.element;
            if (t.firstRow < e.firstRow)
                for (var n = this.session.getFoldedRowCount(t.firstRow, e.firstRow - 1); n > 0; n--)
                    i.removeChild(i.firstChild);
            if (t.lastRow > e.lastRow)
                for (var n = this.session.getFoldedRowCount(e.lastRow + 1, t.lastRow); n > 0; n--)
                    i.removeChild(i.lastChild);
            if (e.firstRow < t.firstRow) {
                var r = this.$renderLinesFragment(e, e.firstRow, t.firstRow - 1);
                i.firstChild ? i.insertBefore(r, i.firstChild) : i.appendChild(r)
            }
            if (e.lastRow > t.lastRow) {
                var r = this.$renderLinesFragment(e, t.lastRow + 1, e.lastRow);
                i.appendChild(r)
            }
        }
        ,
        this.$renderLinesFragment = function(e, t, i) {
            for (var r = this.element.ownerDocument.createDocumentFragment(), o = t, s = this.session.getNextFoldLine(o), a = s ? s.start.row : 1 / 0; o > a && (o = s.end.row + 1,
            s = this.session.getNextFoldLine(o, s),
            a = s ? s.start.row : 1 / 0),
            !(o > i); ) {
                var l = n.createElement("div")
                  , c = [];
                if (this.$renderLine(c, o, !1, o == a ? s : !1),
                l.innerHTML = c.join(""),
                this.$useLineGroups())
                    l.className = "ace_line_group",
                    r.appendChild(l),
                    l.style.height = e.lineHeight * this.session.getRowLength(o) + "px";
                else
                    for (; l.firstChild; )
                        r.appendChild(l.firstChild);
                o++
            }
            return r
        }
        ,
        this.update = function(e) {
            this.config = e;
            for (var t = [], i = e.firstRow, n = e.lastRow, r = i, o = this.session.getNextFoldLine(r), s = o ? o.start.row : 1 / 0; r > s && (r = o.end.row + 1,
            o = this.session.getNextFoldLine(r, o),
            s = o ? o.start.row : 1 / 0),
            !(r > n); )
                this.$useLineGroups() && t.push("<div class='ace_line_group' style='height:", e.lineHeight * this.session.getRowLength(r), "px'>"),
                this.$renderLine(t, r, !1, r == s ? o : !1),
                this.$useLineGroups() && t.push("</div>"),
                r++;
            this.element.innerHTML = t.join("")
        }
        ,
        this.$textToken = {
            text: !0,
            rparen: !0,
            lparen: !0
        },
        this.$renderToken = function(e, t, i, n) {
            var o = this
              , s = /\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g
              , a = function(e, i, n, s) {
                if (i)
                    return o.showInvisibles ? "<span class='ace_invisible ace_invisible_space'>" + r.stringRepeat(o.SPACE_CHAR, e.length) + "</span>" : e;
                if ("&" == e)
                    return "&#38;";
                if ("<" == e)
                    return "&#60;";
                if (">" == e)
                    return "&#62;";
                if ("   " == e) {
                    var a = o.session.getScreenTabSize(t + s);
                    return t += a - 1,
                    o.$tabStrings[a]
                }
                if ("\u3000" == e) {
                    var l = o.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk"
                      , c = o.showInvisibles ? o.SPACE_CHAR : "";
                    return t += 1,
                    "<span class='" + l + "' style='width:" + 2 * o.config.characterWidth + "px'>" + c + "</span>"
                }
                return n ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" + o.SPACE_CHAR + "</span>" : (t += 1,
                "<span class='ace_cjk' style='width:" + 2 * o.config.characterWidth + "px'>" + e + "</span>")
            }
              , l = n.replace(s, a);
            if (this.$textToken[i.type])
                e.push(l);
            else {
                var c = "ace_" + i.type.replace(/\./g, " ace_")
                  , h = "";
                "fold" == i.type && (h = " style='width:" + i.value.length * this.config.characterWidth + "px;' "),
                e.push("<span class='", c, "'", h, ">", l, "</span>")
            }
            return t + n.length
        }
        ,
        this.renderIndentGuide = function(e, t, i) {
            var n = t.search(this.$indentGuideRe);
            return 0 >= n || n >= i ? t : " " == t[0] ? (n -= n % this.tabSize,
            e.push(r.stringRepeat(this.$tabStrings[" "], n / this.tabSize)),
            t.substr(n)) : "    " == t[0] ? (e.push(r.stringRepeat(this.$tabStrings["   "], n)),
            t.substr(n)) : t
        }
        ,
        this.$renderWrappedLine = function(e, t, i, n) {
            for (var o = 0, s = 0, a = i[0], l = 0, c = 0; c < t.length; c++) {
                var h = t[c]
                  , d = h.value;
                if (0 == c && this.displayIndentGuides) {
                    if (o = d.length,
                    d = this.renderIndentGuide(e, d, a),
                    !d)
                        continue;
                    o -= d.length
                }
                if (o + d.length < a)
                    l = this.$renderToken(e, l, h, d),
                    o += d.length;
                else {
                    for (; o + d.length >= a; )
                        l = this.$renderToken(e, l, h, d.substring(0, a - o)),
                        d = d.substring(a - o),
                        o = a,
                        n || e.push("</div>", "<div class='ace_line' style='height:", this.config.lineHeight, "px'>"),
                        e.push(r.stringRepeat("\xa0", i.indent)),
                        s++,
                        l = 0,
                        a = i[s] || Number.MAX_VALUE;
                    0 != d.length && (o += d.length,
                    l = this.$renderToken(e, l, h, d))
                }
            }
        }
        ,
        this.$renderSimpleLine = function(e, t) {
            var i = 0
              , n = t[0]
              , r = n.value;
            this.displayIndentGuides && (r = this.renderIndentGuide(e, r)),
            r && (i = this.$renderToken(e, i, n, r));
            for (var o = 1; o < t.length; o++)
                n = t[o],
                r = n.value,
                i = this.$renderToken(e, i, n, r)
        }
        ,
        this.$renderLine = function(e, t, i, n) {
            if (!n && 0 != n && (n = this.session.getFoldLine(t)),
            n)
                var r = this.$getFoldLineTokens(t, n);
            else
                var r = this.session.getTokens(t);
            if (i || e.push("<div class='ace_line' style='height:", this.config.lineHeight * (this.$useLineGroups() ? 1 : this.session.getRowLength(t)), "px'>"),
            r.length) {
                var o = this.session.getRowSplitData(t);
                o && o.length ? this.$renderWrappedLine(e, r, o, i) : this.$renderSimpleLine(e, r)
            }
            this.showInvisibles && (n && (t = n.end.row),
            e.push("<span class='ace_invisible ace_invisible_eol'>", t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, "</span>")),
            i || e.push("</div>")
        }
        ,
        this.$getFoldLineTokens = function(e, t) {
            function i(e, t, i) {
                for (var n = 0, o = 0; o + e[n].value.length < t; )
                    if (o += e[n].value.length,
                    n++,
                    n == e.length)
                        return;
                if (o != t) {
                    var s = e[n].value.substring(t - o);
                    s.length > i - t && (s = s.substring(0, i - t)),
                    r.push({
                        type: e[n].type,
                        value: s
                    }),
                    o = t + s.length,
                    n += 1
                }
                for (; i > o && n < e.length; ) {
                    var s = e[n].value;
                    r.push(s.length + o > i ? {
                        type: e[n].type,
                        value: s.substring(0, i - o)
                    } : e[n]),
                    o += s.length,
                    n += 1
                }
            }
            var n = this.session
              , r = []
              , o = n.getTokens(e);
            return t.walk(function(e, t, s, a, l) {
                null != e ? r.push({
                    type: "fold",
                    value: e
                }) : (l && (o = n.getTokens(t)),
                o.length && i(o, a, s))
            }, t.end.row, this.session.getLine(t.end.row).length),
            r
        }
        ,
        this.$useLineGroups = function() {
            return this.session.getUseWrapMode()
        }
        ,
        this.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer),
            this.$measureNode && this.$measureNode.parentNode.removeChild(this.$measureNode),
            delete this.$measureNode
        }
    }
    ).call(s.prototype),
    t.Text = s
}),
define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    var i, n = e("../lib/dom"), r = function(e) {
        this.element = n.createElement("div"),
        this.element.className = "ace_layer ace_cursor-layer",
        e.appendChild(this.element),
        void 0 === i && (i = !("opacity"in this.element.style)),
        this.isVisible = !1,
        this.isBlinking = !0,
        this.blinkInterval = 1e3,
        this.smoothBlinking = !1,
        this.cursors = [],
        this.cursor = this.addCursor(),
        n.addCssClass(this.element, "ace_hidden-cursors"),
        this.$updateCursors = (i ? this.$updateVisibility : this.$updateOpacity).bind(this)
    };
    (function() {
        this.$updateVisibility = function(e) {
            for (var t = this.cursors, i = t.length; i--; )
                t[i].style.visibility = e ? "" : "hidden"
        }
        ,
        this.$updateOpacity = function(e) {
            for (var t = this.cursors, i = t.length; i--; )
                t[i].style.opacity = e ? "" : "0"
        }
        ,
        this.$padding = 0,
        this.setPadding = function(e) {
            this.$padding = e
        }
        ,
        this.setSession = function(e) {
            this.session = e
        }
        ,
        this.setBlinking = function(e) {
            e != this.isBlinking && (this.isBlinking = e,
            this.restartTimer())
        }
        ,
        this.setBlinkInterval = function(e) {
            e != this.blinkInterval && (this.blinkInterval = e,
            this.restartTimer())
        }
        ,
        this.setSmoothBlinking = function(e) {
            e != this.smoothBlinking && !i && (this.smoothBlinking = e,
            n.setCssClass(this.element, "ace_smooth-blinking", e),
            this.$updateCursors(!0),
            this.$updateCursors = this.$updateOpacity.bind(this),
            this.restartTimer())
        }
        ,
        this.addCursor = function() {
            var e = n.createElement("div");
            return e.className = "ace_cursor",
            this.element.appendChild(e),
            this.cursors.push(e),
            e
        }
        ,
        this.removeCursor = function() {
            if (this.cursors.length > 1) {
                var e = this.cursors.pop();
                return e.parentNode.removeChild(e),
                e
            }
        }
        ,
        this.hideCursor = function() {
            this.isVisible = !1,
            n.addCssClass(this.element, "ace_hidden-cursors"),
            this.restartTimer()
        }
        ,
        this.showCursor = function() {
            this.isVisible = !0,
            n.removeCssClass(this.element, "ace_hidden-cursors"),
            this.restartTimer()
        }
        ,
        this.restartTimer = function() {
            var e = this.$updateCursors;
            if (clearInterval(this.intervalId),
            clearTimeout(this.timeoutId),
            this.smoothBlinking && n.removeCssClass(this.element, "ace_smooth-blinking"),
            e(!0),
            this.isBlinking && this.blinkInterval && this.isVisible) {
                this.smoothBlinking && setTimeout(function() {
                    n.addCssClass(this.element, "ace_smooth-blinking")
                }
                .bind(this));
                var t = function() {
                    this.timeoutId = setTimeout(function() {
                        e(!1)
                    }, .6 * this.blinkInterval)
                }
                .bind(this);
                this.intervalId = setInterval(function() {
                    e(!0),
                    t()
                }, this.blinkInterval),
                t()
            }
        }
        ,
        this.getPixelPosition = function(e, t) {
            if (!this.config || !this.session)
                return {
                    left: 0,
                    top: 0
                };
            e || (e = this.session.selection.getCursor());
            var i = this.session.documentToScreenPosition(e)
              , n = this.$padding + i.column * this.config.characterWidth
              , r = (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
            return {
                left: n,
                top: r
            }
        }
        ,
        this.update = function(e) {
            this.config = e;
            var t = this.session.$selectionMarkers
              , i = 0
              , n = 0;
            (void 0 === t || 0 === t.length) && (t = [{
                cursor: null
            }]);
            for (var i = 0, r = t.length; r > i; i++) {
                var o = this.getPixelPosition(t[i].cursor, !0);
                if (!((o.top > e.height + e.offset || o.top < 0) && i > 1)) {
                    var s = (this.cursors[n++] || this.addCursor()).style;
                    this.drawCursor ? this.drawCursor(s, o, e, t[i], this.session) : (s.left = o.left + "px",
                    s.top = o.top + "px",
                    s.width = e.characterWidth + "px",
                    s.height = e.lineHeight + "px")
                }
            }
            for (; this.cursors.length > n; )
                this.removeCursor();
            var a = this.session.getOverwrite();
            this.$setOverwrite(a),
            this.$pixelPos = o,
            this.restartTimer()
        }
        ,
        this.drawCursor = null,
        this.$setOverwrite = function(e) {
            e != this.overwrite && (this.overwrite = e,
            e ? n.addCssClass(this.element, "ace_overwrite-cursors") : n.removeCssClass(this.element, "ace_overwrite-cursors"))
        }
        ,
        this.destroy = function() {
            clearInterval(this.intervalId),
            clearTimeout(this.timeoutId)
        }
    }
    ).call(r.prototype),
    t.Cursor = r
}),
define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/dom")
      , r = e("./lib/event")
      , o = e("./lib/event_emitter").EventEmitter
      , s = 32768
      , a = function(e) {
        this.element = n.createElement("div"),
        this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix,
        this.inner = n.createElement("div"),
        this.inner.className = "ace_scrollbar-inner",
        this.element.appendChild(this.inner),
        e.appendChild(this.element),
        this.setVisible(!1),
        this.skipEvent = !1,
        r.addListener(this.element, "scroll", this.onScroll.bind(this)),
        r.addListener(this.element, "mousedown", r.preventDefault)
    };
    (function() {
        i.implement(this, o),
        this.setVisible = function(e) {
            this.element.style.display = e ? "" : "none",
            this.isVisible = e,
            this.coeff = 1
        }
    }
    ).call(a.prototype);
    var l = function(e, t) {
        a.call(this, e),
        this.scrollTop = 0,
        this.scrollHeight = 0,
        t.$scrollbarWidth = this.width = n.scrollbarWidth(e.ownerDocument),
        this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px"
    };
    i.inherits(l, a),
    function() {
        this.classSuffix = "-v",
        this.onScroll = function() {
            if (!this.skipEvent) {
                if (this.scrollTop = this.element.scrollTop,
                1 != this.coeff) {
                    var e = this.element.clientHeight / this.scrollHeight;
                    this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e)
                }
                this._emit("scroll", {
                    data: this.scrollTop
                })
            }
            this.skipEvent = !1
        }
        ,
        this.getWidth = function() {
            return this.isVisible ? this.width : 0
        }
        ,
        this.setHeight = function(e) {
            this.element.style.height = e + "px"
        }
        ,
        this.setInnerHeight = this.setScrollHeight = function(e) {
            this.scrollHeight = e,
            e > s ? (this.coeff = s / e,
            e = s) : 1 != this.coeff && (this.coeff = 1),
            this.inner.style.height = e + "px"
        }
        ,
        this.setScrollTop = function(e) {
            this.scrollTop != e && (this.skipEvent = !0,
            this.scrollTop = e,
            this.element.scrollTop = e * this.coeff)
        }
    }
    .call(l.prototype);
    var c = function(e, t) {
        a.call(this, e),
        this.scrollLeft = 0,
        this.height = t.$scrollbarWidth,
        this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
    };
    i.inherits(c, a),
    function() {
        this.classSuffix = "-h",
        this.onScroll = function() {
            this.skipEvent || (this.scrollLeft = this.element.scrollLeft,
            this._emit("scroll", {
                data: this.scrollLeft
            })),
            this.skipEvent = !1
        }
        ,
        this.getHeight = function() {
            return this.isVisible ? this.height : 0
        }
        ,
        this.setWidth = function(e) {
            this.element.style.width = e + "px"
        }
        ,
        this.setInnerWidth = function(e) {
            this.inner.style.width = e + "px"
        }
        ,
        this.setScrollWidth = function(e) {
            this.inner.style.width = e + "px"
        }
        ,
        this.setScrollLeft = function(e) {
            this.scrollLeft != e && (this.skipEvent = !0,
            this.scrollLeft = this.element.scrollLeft = e)
        }
    }
    .call(c.prototype),
    t.ScrollBar = l,
    t.ScrollBarV = l,
    t.ScrollBarH = c,
    t.VScrollBar = l,
    t.HScrollBar = c
}),
define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(e, t) {
    "use strict";
    var i = e("./lib/event")
      , n = function(e, t) {
        this.onRender = e,
        this.pending = !1,
        this.changes = 0,
        this.window = t || window
    };
    (function() {
        this.schedule = function(e) {
            if (this.changes = this.changes | e,
            !this.pending && this.changes) {
                this.pending = !0;
                var t = this;
                i.nextFrame(function() {
                    t.pending = !1;
                    for (var e; e = t.changes; )
                        t.changes = 0,
                        t.onRender(e)
                }, this.window)
            }
        }
    }
    ).call(n.prototype),
    t.RenderLoop = n
}),
define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/lib/event_emitter"], function(e, t) {
    var i = e("../lib/oop")
      , n = e("../lib/dom")
      , r = e("../lib/lang")
      , o = e("../lib/useragent")
      , s = e("../lib/event_emitter").EventEmitter
      , a = 0
      , l = t.FontMetrics = function(e) {
        this.el = n.createElement("div"),
        this.$setMeasureNodeStyles(this.el.style, !0),
        this.$main = n.createElement("div"),
        this.$setMeasureNodeStyles(this.$main.style),
        this.$measureNode = n.createElement("div"),
        this.$setMeasureNodeStyles(this.$measureNode.style),
        this.el.appendChild(this.$main),
        this.el.appendChild(this.$measureNode),
        e.appendChild(this.el),
        a || this.$testFractionalRect(),
        this.$measureNode.innerHTML = r.stringRepeat("X", a),
        this.$characterSize = {
            width: 0,
            height: 0
        },
        this.checkForSizeChanges()
    }
    ;
    (function() {
        i.implement(this, s),
        this.$characterSize = {
            width: 0,
            height: 0
        },
        this.$testFractionalRect = function() {
            var e = n.createElement("div");
            this.$setMeasureNodeStyles(e.style),
            e.style.width = "0.2px",
            document.documentElement.appendChild(e);
            var t = e.getBoundingClientRect().width;
            a = t > 0 && 1 > t ? 50 : 100,
            e.parentNode.removeChild(e)
        }
        ,
        this.$setMeasureNodeStyles = function(e, t) {
            e.width = e.height = "auto",
            e.left = e.top = "0px",
            e.visibility = "hidden",
            e.position = "absolute",
            e.whiteSpace = "pre",
            o.isIE < 8 ? e["font-family"] = "inherit" : e.font = "inherit",
            e.overflow = t ? "hidden" : "visible"
        }
        ,
        this.checkForSizeChanges = function() {
            var e = this.$measureSizes();
            if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                this.$measureNode.style.fontWeight = "bold";
                var t = this.$measureSizes();
                this.$measureNode.style.fontWeight = "",
                this.$characterSize = e,
                this.charSizes = Object.create(null),
                this.allowBoldFonts = t && t.width === e.width && t.height === e.height,
                this._emit("changeCharacterSize", {
                    data: e
                })
            }
        }
        ,
        this.$pollSizeChanges = function() {
            if (this.$pollSizeChangesTimer)
                return this.$pollSizeChangesTimer;
            var e = this;
            return this.$pollSizeChangesTimer = setInterval(function() {
                e.checkForSizeChanges()
            }, 500)
        }
        ,
        this.setPolling = function(e) {
            e ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer),
            this.$pollSizeChangesTimer = 0)
        }
        ,
        this.$measureSizes = function() {
            if (50 === a) {
                var e = null;
                try {
                    e = this.$measureNode.getBoundingClientRect()
                } catch (t) {
                    e = {
                        width: 0,
                        height: 0
                    }
                }
                var i = {
                    height: e.height,
                    width: e.width / a
                }
            } else
                var i = {
                    height: this.$measureNode.clientHeight,
                    width: this.$measureNode.clientWidth / a
                };
            return 0 === i.width || 0 === i.height ? null : i
        }
        ,
        this.$measureCharWidth = function(e) {
            this.$main.innerHTML = r.stringRepeat(e, a);
            var t = this.$main.getBoundingClientRect();
            return t.width / a
        }
        ,
        this.getCharacterWidth = function(e) {
            var t = this.charSizes[e];
            return void 0 === t && (t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width),
            t
        }
        ,
        this.destroy = function() {
            clearInterval(this.$pollSizeChangesTimer),
            this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
        }
    }
    ).call(l.prototype)
}),
define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/lib/useragent", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter"], function(e, t) {
    "use strict";
    var i = e("./lib/oop")
      , n = e("./lib/dom")
      , r = e("./config")
      , o = e("./lib/useragent")
      , s = e("./layer/gutter").Gutter
      , a = e("./layer/marker").Marker
      , l = e("./layer/text").Text
      , c = e("./layer/cursor").Cursor
      , h = e("./scrollbar").HScrollBar
      , d = e("./scrollbar").VScrollBar
      , u = e("./renderloop").RenderLoop
      , p = e("./layer/font_metrics").FontMetrics
      , g = e("./lib/event_emitter").EventEmitter
      , m = '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}';
    n.importCssString(m, "ace_editor.css");
    var f = function(e, t) {
        var i = this;
        this.container = e || n.createElement("div"),
        this.$keepTextAreaAtCursor = !o.isOldIE,
        n.addCssClass(this.container, "ace_editor"),
        this.setTheme(t),
        this.$gutter = n.createElement("div"),
        this.$gutter.className = "ace_gutter",
        this.container.appendChild(this.$gutter),
        this.scroller = n.createElement("div"),
        this.scroller.className = "ace_scroller",
        this.container.appendChild(this.scroller),
        this.content = n.createElement("div"),
        this.content.className = "ace_content",
        this.scroller.appendChild(this.content),
        this.$gutterLayer = new s(this.$gutter),
        this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)),
        this.$markerBack = new a(this.content);
        var g = this.$textLayer = new l(this.content);
        this.canvas = g.element,
        this.$markerFront = new a(this.content),
        this.$cursorLayer = new c(this.content),
        this.$horizScroll = !1,
        this.$vScroll = !1,
        this.scrollBar = this.scrollBarV = new d(this.container,this),
        this.scrollBarH = new h(this.container,this),
        this.scrollBarV.addEventListener("scroll", function(e) {
            i.$scrollAnimation || i.session.setScrollTop(e.data - i.scrollMargin.top)
        }),
        this.scrollBarH.addEventListener("scroll", function(e) {
            i.$scrollAnimation || i.session.setScrollLeft(e.data - i.scrollMargin.left)
        }),
        this.scrollTop = 0,
        this.scrollLeft = 0,
        this.cursorPos = {
            row: 0,
            column: 0
        },
        this.$fontMetrics = new p(this.container),
        this.$textLayer.$setFontMetrics(this.$fontMetrics),
        this.$textLayer.addEventListener("changeCharacterSize", function(e) {
            i.updateCharacterSize(),
            i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height),
            i._signal("changeCharacterSize", e)
        }),
        this.$size = {
            width: 0,
            height: 0,
            scrollerHeight: 0,
            scrollerWidth: 0,
            $dirty: !0
        },
        this.layerConfig = {
            width: 1,
            padding: 0,
            firstRow: 0,
            firstRowScreen: 0,
            lastRow: 0,
            lineHeight: 0,
            characterWidth: 0,
            minHeight: 1,
            maxHeight: 1,
            offset: 0,
            height: 1,
            gutterOffset: 1
        },
        this.scrollMargin = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            v: 0,
            h: 0
        },
        this.$loop = new u(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView),
        this.$loop.schedule(this.CHANGE_FULL),
        this.updateCharacterSize(),
        this.setPadding(4),
        r.resetOptions(this),
        r._emit("renderer", this)
    };
    (function() {
        this.CHANGE_CURSOR = 1,
        this.CHANGE_MARKER = 2,
        this.CHANGE_GUTTER = 4,
        this.CHANGE_SCROLL = 8,
        this.CHANGE_LINES = 16,
        this.CHANGE_TEXT = 32,
        this.CHANGE_SIZE = 64,
        this.CHANGE_MARKER_BACK = 128,
        this.CHANGE_MARKER_FRONT = 256,
        this.CHANGE_FULL = 512,
        this.CHANGE_H_SCROLL = 1024,
        i.implement(this, g),
        this.updateCharacterSize = function() {
            this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts,
            this.setStyle("ace_nobold", !this.$allowBoldFonts)),
            this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(),
            this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(),
            this.$updatePrintMargin()
        }
        ,
        this.setSession = function(e) {
            this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode),
            this.session = e,
            e && this.scrollMargin.top && e.getScrollTop() <= 0 && e.setScrollTop(-this.scrollMargin.top),
            this.$cursorLayer.setSession(e),
            this.$markerBack.setSession(e),
            this.$markerFront.setSession(e),
            this.$gutterLayer.setSession(e),
            this.$textLayer.setSession(e),
            e && (this.$loop.schedule(this.CHANGE_FULL),
            this.session.$setFontMetrics(this.$fontMetrics),
            this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null,
            this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this),
            this.onChangeNewLineMode(),
            this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
        }
        ,
        this.updateLines = function(e, t, i) {
            if (void 0 === t && (t = 1 / 0),
            this.$changedLines ? (this.$changedLines.firstRow > e && (this.$changedLines.firstRow = e),
            this.$changedLines.lastRow < t && (this.$changedLines.lastRow = t)) : this.$changedLines = {
                firstRow: e,
                lastRow: t
            },
            this.$changedLines.lastRow < this.layerConfig.firstRow) {
                if (!i)
                    return;
                this.$changedLines.lastRow = this.layerConfig.lastRow
            }
            this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
        }
        ,
        this.onChangeNewLineMode = function() {
            this.$loop.schedule(this.CHANGE_TEXT),
            this.$textLayer.$updateEolChar()
        }
        ,
        this.onChangeTabSize = function() {
            this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER),
            this.$textLayer.onChangeTabSize()
        }
        ,
        this.updateText = function() {
            this.$loop.schedule(this.CHANGE_TEXT)
        }
        ,
        this.updateFull = function(e) {
            e ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
        }
        ,
        this.updateFontSize = function() {
            this.$textLayer.checkForSizeChanges()
        }
        ,
        this.$changes = 0,
        this.$updateSizeAsync = function() {
            this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
        }
        ,
        this.onResize = function(e, t, i, n) {
            if (!(this.resizing > 2)) {
                this.resizing > 0 ? this.resizing++ : this.resizing = e ? 1 : 0;
                var r = this.container;
                n || (n = r.clientHeight || r.scrollHeight),
                i || (i = r.clientWidth || r.scrollWidth);
                var o = this.$updateCachedSize(e, t, i, n);
                return this.$size.scrollerHeight && (i || n) ? (e && (this.$gutterLayer.$padding = null),
                e ? this.$renderChanges(o | this.$changes, !0) : this.$loop.schedule(o | this.$changes),
                this.resizing && (this.resizing = 0),
                this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null,
                void 0) : this.resizing = 0
            }
        }
        ,
        this.$updateCachedSize = function(e, t, i, n) {
            n -= this.$extraHeight || 0;
            var r = 0
              , o = this.$size
              , s = {
                width: o.width,
                height: o.height,
                scrollerHeight: o.scrollerHeight,
                scrollerWidth: o.scrollerWidth
            };
            return n && (e || o.height != n) && (o.height = n,
            r |= this.CHANGE_SIZE,
            o.scrollerHeight = o.height,
            this.$horizScroll && (o.scrollerHeight -= this.scrollBarH.getHeight()),
            this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px",
            r |= this.CHANGE_SCROLL),
            i && (e || o.width != i) && (r |= this.CHANGE_SIZE,
            o.width = i,
            null == t && (t = this.$showGutter ? this.$gutter.offsetWidth : 0),
            this.gutterWidth = t,
            this.scrollBarH.element.style.left = this.scroller.style.left = t + "px",
            o.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth()),
            this.scrollBarH.element.style.right = this.scroller.style.right = this.scrollBarV.getWidth() + "px",
            this.scroller.style.bottom = this.scrollBarH.getHeight() + "px",
            (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) && (r |= this.CHANGE_FULL)),
            o.$dirty = !i || !n,
            r && this._signal("resize", s),
            r
        }
        ,
        this.onGutterResize = function() {
            var e = this.$showGutter ? this.$gutter.offsetWidth : 0;
            e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)),
            this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : (this.$computeLayerConfig(),
            this.$loop.schedule(this.CHANGE_MARKER))
        }
        ,
        this.adjustWrapLimit = function() {
            var e = this.$size.scrollerWidth - 2 * this.$padding
              , t = Math.floor(e / this.characterWidth);
            return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
        }
        ,
        this.setAnimatedScroll = function(e) {
            this.setOption("animatedScroll", e)
        }
        ,
        this.getAnimatedScroll = function() {
            return this.$animatedScroll
        }
        ,
        this.setShowInvisibles = function(e) {
            this.setOption("showInvisibles", e)
        }
        ,
        this.getShowInvisibles = function() {
            return this.getOption("showInvisibles")
        }
        ,
        this.getDisplayIndentGuides = function() {
            return this.getOption("displayIndentGuides")
        }
        ,
        this.setDisplayIndentGuides = function(e) {
            this.setOption("displayIndentGuides", e)
        }
        ,
        this.setShowPrintMargin = function(e) {
            this.setOption("showPrintMargin", e)
        }
        ,
        this.getShowPrintMargin = function() {
            return this.getOption("showPrintMargin")
        }
        ,
        this.setPrintMarginColumn = function(e) {
            this.setOption("printMarginColumn", e)
        }
        ,
        this.getPrintMarginColumn = function() {
            return this.getOption("printMarginColumn")
        }
        ,
        this.getShowGutter = function() {
            return this.getOption("showGutter")
        }
        ,
        this.setShowGutter = function(e) {
            return this.setOption("showGutter", e)
        }
        ,
        this.getFadeFoldWidgets = function() {
            return this.getOption("fadeFoldWidgets")
        }
        ,
        this.setFadeFoldWidgets = function(e) {
            this.setOption("fadeFoldWidgets", e)
        }
        ,
        this.setHighlightGutterLine = function(e) {
            this.setOption("highlightGutterLine", e)
        }
        ,
        this.getHighlightGutterLine = function() {
            return this.getOption("highlightGutterLine")
        }
        ,
        this.$updateGutterLineHighlight = function() {
            var e = this.$cursorLayer.$pixelPos
              , t = this.layerConfig.lineHeight;
            if (this.session.getUseWrapMode()) {
                var i = this.session.selection.getCursor();
                i.column = 0,
                e = this.$cursorLayer.getPixelPosition(i, !0),
                t *= this.session.getRowLength(i.row)
            }
            this.$gutterLineHighlight.style.top = e.top - this.layerConfig.offset + "px",
            this.$gutterLineHighlight.style.height = t + "px"
        }
        ,
        this.$updatePrintMargin = function() {
            if (this.$showPrintMargin || this.$printMarginEl) {
                if (!this.$printMarginEl) {
                    var e = n.createElement("div");
                    e.className = "ace_layer ace_print-margin-layer",
                    this.$printMarginEl = n.createElement("div"),
                    this.$printMarginEl.className = "ace_print-margin",
                    e.appendChild(this.$printMarginEl),
                    this.content.insertBefore(e, this.content.firstChild)
                }
                var t = this.$printMarginEl.style;
                t.left = this.characterWidth * this.$printMarginColumn + this.$padding + "px",
                t.visibility = this.$showPrintMargin ? "visible" : "hidden",
                this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
            }
        }
        ,
        this.getContainerElement = function() {
            return this.container
        }
        ,
        this.getMouseEventTarget = function() {
            return this.scroller
        }
        ,
        this.getTextAreaContainer = function() {
            return this.container
        }
        ,
        this.$moveTextAreaToCursor = function() {
            if (this.$keepTextAreaAtCursor) {
                var e = this.layerConfig
                  , t = this.$cursorLayer.$pixelPos.top
                  , i = this.$cursorLayer.$pixelPos.left;
                t -= e.offset;
                var n = this.textarea.style
                  , r = this.lineHeight;
                if (0 > t || t > e.height - r)
                    return void (n.top = n.left = "0");
                var o = this.characterWidth;
                if (this.$composition) {
                    var s = this.textarea.value.replace(/^\x01+/, "");
                    o *= this.session.$getStringScreenWidth(s)[0] + 2,
                    r += 2
                }
                i -= this.scrollLeft,
                i > this.$size.scrollerWidth - o && (i = this.$size.scrollerWidth - o),
                i += this.gutterWidth,
                n.height = r + "px",
                n.width = o + "px",
                n.left = Math.min(i, this.$size.scrollerWidth - o) + "px",
                n.top = Math.min(t, this.$size.height - r) + "px"
            }
        }
        ,
        this.getFirstVisibleRow = function() {
            return this.layerConfig.firstRow
        }
        ,
        this.getFirstFullyVisibleRow = function() {
            return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
        }
        ,
        this.getLastFullyVisibleRow = function() {
            var e = this.layerConfig
              , t = e.lastRow
              , i = this.session.documentToScreenRow(t, 0) * e.lineHeight;
            return i - this.session.getScrollTop() > e.height - e.lineHeight ? t - 1 : t
        }
        ,
        this.getLastVisibleRow = function() {
            return this.layerConfig.lastRow
        }
        ,
        this.$padding = null,
        this.setPadding = function(e) {
            this.$padding = e,
            this.$textLayer.setPadding(e),
            this.$cursorLayer.setPadding(e),
            this.$markerFront.setPadding(e),
            this.$markerBack.setPadding(e),
            this.$loop.schedule(this.CHANGE_FULL),
            this.$updatePrintMargin()
        }
        ,
        this.setScrollMargin = function(e, t, i, n) {
            var r = this.scrollMargin;
            r.top = 0 | e,
            r.bottom = 0 | t,
            r.right = 0 | n,
            r.left = 0 | i,
            r.v = r.top + r.bottom,
            r.h = r.left + r.right,
            r.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-r.top),
            this.updateFull()
        }
        ,
        this.getHScrollBarAlwaysVisible = function() {
            return this.$hScrollBarAlwaysVisible
        }
        ,
        this.setHScrollBarAlwaysVisible = function(e) {
            this.setOption("hScrollBarAlwaysVisible", e)
        }
        ,
        this.getVScrollBarAlwaysVisible = function() {
            return this.$vScrollBarAlwaysVisible
        }
        ,
        this.setVScrollBarAlwaysVisible = function(e) {
            this.setOption("vScrollBarAlwaysVisible", e)
        }
        ,
        this.$updateScrollBarV = function() {
            var e = this.layerConfig.maxHeight
              , t = this.$size.scrollerHeight;
            !this.$maxLines && this.$scrollPastEnd && (e -= (t - this.lineHeight) * this.$scrollPastEnd,
            this.scrollTop > e - t && (e = this.scrollTop + t,
            this.scrollBarV.scrollTop = null)),
            this.scrollBarV.setScrollHeight(e + this.scrollMargin.v),
            this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
        }
        ,
        this.$updateScrollBarH = function() {
            this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h),
            this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
        }
        ,
        this.$frozen = !1,
        this.freeze = function() {
            this.$frozen = !0
        }
        ,
        this.unfreeze = function() {
            this.$frozen = !1
        }
        ,
        this.$renderChanges = function(e, t) {
            if (this.$changes && (e |= this.$changes,
            this.$changes = 0),
            !this.session || !this.container.offsetWidth || this.$frozen || !e && !t)
                return void (this.$changes |= e);
            if (this.$size.$dirty)
                return this.$changes |= e,
                this.onResize(!0);
            this.lineHeight || this.$textLayer.checkForSizeChanges(),
            this._signal("beforeRender");
            var i = this.layerConfig;
            if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                if (e |= this.$computeLayerConfig(),
                i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                    var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                    n > 0 && (this.scrollTop = n,
                    e |= this.CHANGE_SCROLL,
                    e |= this.$computeLayerConfig())
                }
                i = this.layerConfig,
                this.$updateScrollBarV(),
                e & this.CHANGE_H_SCROLL && this.$updateScrollBarH(),
                this.$gutterLayer.element.style.marginTop = -i.offset + "px",
                this.content.style.marginTop = -i.offset + "px",
                this.content.style.width = i.width + 2 * this.$padding + "px",
                this.content.style.height = i.minHeight + "px"
            }
            return e & this.CHANGE_H_SCROLL && (this.content.style.marginLeft = -this.scrollLeft + "px",
            this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"),
            e & this.CHANGE_FULL ? (this.$textLayer.update(i),
            this.$showGutter && this.$gutterLayer.update(i),
            this.$markerBack.update(i),
            this.$markerFront.update(i),
            this.$cursorLayer.update(i),
            this.$moveTextAreaToCursor(),
            this.$highlightGutterLine && this.$updateGutterLineHighlight(),
            this._signal("afterRender"),
            void 0) : e & this.CHANGE_SCROLL ? (e & this.CHANGE_TEXT || e & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i),
            this.$showGutter && this.$gutterLayer.update(i),
            this.$markerBack.update(i),
            this.$markerFront.update(i),
            this.$cursorLayer.update(i),
            this.$highlightGutterLine && this.$updateGutterLineHighlight(),
            this.$moveTextAreaToCursor(),
            this._signal("afterRender"),
            void 0) : (e & this.CHANGE_TEXT ? (this.$textLayer.update(i),
            this.$showGutter && this.$gutterLayer.update(i)) : e & this.CHANGE_LINES ? (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) && this.$showGutter && this.$gutterLayer.update(i),
            e & this.CHANGE_CURSOR && (this.$cursorLayer.update(i),
            this.$moveTextAreaToCursor(),
            this.$highlightGutterLine && this.$updateGutterLineHighlight()),
            e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i),
            e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i),
            this._signal("afterRender"),
            void 0)
        }
        ,
        this.$autosize = function() {
            var e = this.session.getScreenLength() * this.lineHeight
              , t = this.$maxLines * this.lineHeight
              , i = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
            this.$horizScroll && (i += this.scrollBarH.getHeight()),
            this.$maxPixelHeight && i > this.$maxPixelHeight && (i = this.$maxPixelHeight);
            var n = e > t;
            if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
                n != this.$vScroll && (this.$vScroll = n,
                this.scrollBarV.setVisible(n));
                var r = this.container.clientWidth;
                this.container.style.height = i + "px",
                this.$updateCachedSize(!0, this.$gutterWidth, r, i),
                this.desiredHeight = i,
                this._signal("autosize")
            }
        }
        ,
        this.$computeLayerConfig = function() {
            var e = this.session
              , t = this.$size
              , i = t.height <= 2 * this.lineHeight
              , n = this.session.getScreenLength()
              , r = n * this.lineHeight
              , o = this.$getLongestLine()
              , s = !i && (this.$hScrollBarAlwaysVisible || t.scrollerWidth - o - 2 * this.$padding < 0)
              , a = this.$horizScroll !== s;
            a && (this.$horizScroll = s,
            this.scrollBarH.setVisible(s));
            var l = this.$vScroll;
            this.$maxLines && this.lineHeight > 1 && this.$autosize();
            var c = this.scrollTop % this.lineHeight
              , h = t.scrollerHeight + this.lineHeight
              , d = !this.$maxLines && this.$scrollPastEnd ? (t.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
            r += d;
            var u = this.scrollMargin;
            this.session.setScrollTop(Math.max(-u.top, Math.min(this.scrollTop, r - t.scrollerHeight + u.bottom))),
            this.session.setScrollLeft(Math.max(-u.left, Math.min(this.scrollLeft, o + 2 * this.$padding - t.scrollerWidth + u.right)));
            var p = !i && (this.$vScrollBarAlwaysVisible || t.scrollerHeight - r + d < 0 || this.scrollTop > u.top)
              , g = l !== p;
            g && (this.$vScroll = p,
            this.scrollBarV.setVisible(p));
            var m, f, b = Math.ceil(h / this.lineHeight) - 1, v = Math.max(0, Math.round((this.scrollTop - c) / this.lineHeight)), w = v + b, C = this.lineHeight;
            v = e.screenToDocumentRow(v, 0);
            var y = e.getFoldLine(v);
            y && (v = y.start.row),
            m = e.documentToScreenRow(v, 0),
            f = e.getRowLength(v) * C,
            w = Math.min(e.screenToDocumentRow(w, 0), e.getLength() - 1),
            h = t.scrollerHeight + e.getRowLength(w) * C + f,
            c = this.scrollTop - m * C;
            var S = 0;
            return this.layerConfig.width != o && (S = this.CHANGE_H_SCROLL),
            (a || g) && (S = this.$updateCachedSize(!0, this.gutterWidth, t.width, t.height),
            this._signal("scrollbarVisibilityChanged"),
            g && (o = this.$getLongestLine())),
            this.layerConfig = {
                width: o,
                padding: this.$padding,
                firstRow: v,
                firstRowScreen: m,
                lastRow: w,
                lineHeight: C,
                characterWidth: this.characterWidth,
                minHeight: h,
                maxHeight: r,
                offset: c,
                gutterOffset: C ? Math.max(0, Math.ceil((c + t.height - t.scrollerHeight) / C)) : 0,
                height: this.$size.scrollerHeight
            },
            S
        }
        ,
        this.$updateLines = function() {
            var e = this.$changedLines.firstRow
              , t = this.$changedLines.lastRow;
            this.$changedLines = null;
            var i = this.layerConfig;
            if (!(e > i.lastRow + 1 || t < i.firstRow))
                return 1 / 0 === t ? (this.$showGutter && this.$gutterLayer.update(i),
                void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, e, t),
                !0)
        }
        ,
        this.$getLongestLine = function() {
            var e = this.session.getScreenWidth();
            return this.showInvisibles && !this.session.$useWrapMode && (e += 1),
            Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth))
        }
        ,
        this.updateFrontMarkers = function() {
            this.$markerFront.setMarkers(this.session.getMarkers(!0)),
            this.$loop.schedule(this.CHANGE_MARKER_FRONT)
        }
        ,
        this.updateBackMarkers = function() {
            this.$markerBack.setMarkers(this.session.getMarkers()),
            this.$loop.schedule(this.CHANGE_MARKER_BACK)
        }
        ,
        this.addGutterDecoration = function(e, t) {
            this.$gutterLayer.addGutterDecoration(e, t)
        }
        ,
        this.removeGutterDecoration = function(e, t) {
            this.$gutterLayer.removeGutterDecoration(e, t)
        }
        ,
        this.updateBreakpoints = function() {
            this.$loop.schedule(this.CHANGE_GUTTER)
        }
        ,
        this.setAnnotations = function(e) {
            this.$gutterLayer.setAnnotations(e),
            this.$loop.schedule(this.CHANGE_GUTTER)
        }
        ,
        this.updateCursor = function() {
            this.$loop.schedule(this.CHANGE_CURSOR)
        }
        ,
        this.hideCursor = function() {
            this.$cursorLayer.hideCursor()
        }
        ,
        this.showCursor = function() {
            this.$cursorLayer.showCursor()
        }
        ,
        this.scrollSelectionIntoView = function(e, t, i) {
            this.scrollCursorIntoView(e, i),
            this.scrollCursorIntoView(t, i)
        }
        ,
        this.scrollCursorIntoView = function(e, t, i) {
            if (0 !== this.$size.scrollerHeight) {
                var n = this.$cursorLayer.getPixelPosition(e)
                  , r = n.left
                  , o = n.top
                  , s = i && i.top || 0
                  , a = i && i.bottom || 0
                  , l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                l + s > o ? (t && l + s > o + this.lineHeight && (o -= t * this.$size.scrollerHeight),
                0 === o && (o = -this.scrollMargin.top),
                this.session.setScrollTop(o)) : l + this.$size.scrollerHeight - a < o + this.lineHeight && (t && l + this.$size.scrollerHeight - a < o - this.lineHeight && (o += t * this.$size.scrollerHeight),
                this.session.setScrollTop(o + this.lineHeight - this.$size.scrollerHeight));
                var c = this.scrollLeft;
                c > r ? (r < this.$padding + 2 * this.layerConfig.characterWidth && (r = -this.scrollMargin.left),
                this.session.setScrollLeft(r)) : c + this.$size.scrollerWidth < r + this.characterWidth ? this.session.setScrollLeft(Math.round(r + this.characterWidth - this.$size.scrollerWidth)) : c <= this.$padding && r - c < this.characterWidth && this.session.setScrollLeft(0)
            }
        }
        ,
        this.getScrollTop = function() {
            return this.session.getScrollTop()
        }
        ,
        this.getScrollLeft = function() {
            return this.session.getScrollLeft()
        }
        ,
        this.getScrollTopRow = function() {
            return this.scrollTop / this.lineHeight
        }
        ,
        this.getScrollBottomRow = function() {
            return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
        }
        ,
        this.scrollToRow = function(e) {
            this.session.setScrollTop(e * this.lineHeight)
        }
        ,
        this.alignCursor = function(e, t) {
            "number" == typeof e && (e = {
                row: e,
                column: 0
            });
            var i = this.$cursorLayer.getPixelPosition(e)
              , n = this.$size.scrollerHeight - this.lineHeight
              , r = i.top - n * (t || 0);
            return this.session.setScrollTop(r),
            r
        }
        ,
        this.STEPS = 8,
        this.$calcSteps = function(e, t) {
            var i = 0
              , n = this.STEPS
              , r = []
              , o = function(e, t, i) {
                return i * (Math.pow(e - 1, 3) + 1) + t
            };
            for (i = 0; n > i; ++i)
                r.push(o(i / this.STEPS, e, t - e));
            return r
        }
        ,
        this.scrollToLine = function(e, t, i, n) {
            var r = this.$cursorLayer.getPixelPosition({
                row: e,
                column: 0
            })
              , o = r.top;
            t && (o -= this.$size.scrollerHeight / 2);
            var s = this.scrollTop;
            this.session.setScrollTop(o),
            i !== !1 && this.animateScrolling(s, n)
        }
        ,
        this.animateScrolling = function(e, t) {
            var i = this.scrollTop;
            if (this.$animatedScroll) {
                var n = this;
                if (e != i) {
                    if (this.$scrollAnimation) {
                        var r = this.$scrollAnimation.steps;
                        if (r.length && (e = r[0],
                        e == i))
                            return
                    }
                    var o = n.$calcSteps(e, i);
                    this.$scrollAnimation = {
                        from: e,
                        to: i,
                        steps: o
                    },
                    clearInterval(this.$timer),
                    n.session.setScrollTop(o.shift()),
                    n.session.$scrollTop = i,
                    this.$timer = setInterval(function() {
                        o.length ? (n.session.setScrollTop(o.shift()),
                        n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1,
                        n.session.setScrollTop(i),
                        i = null) : (n.$timer = clearInterval(n.$timer),
                        n.$scrollAnimation = null,
                        t && t())
                    }, 10)
                }
            }
        }
        ,
        this.scrollToY = function(e) {
            this.scrollTop !== e && (this.$loop.schedule(this.CHANGE_SCROLL),
            this.scrollTop = e)
        }
        ,
        this.scrollToX = function(e) {
            this.scrollLeft !== e && (this.scrollLeft = e),
            this.$loop.schedule(this.CHANGE_H_SCROLL)
        }
        ,
        this.scrollTo = function(e, t) {
            this.session.setScrollTop(t),
            this.session.setScrollLeft(t)
        }
        ,
        this.scrollBy = function(e, t) {
            t && this.session.setScrollTop(this.session.getScrollTop() + t),
            e && this.session.setScrollLeft(this.session.getScrollLeft() + e)
        }
        ,
        this.isScrollableBy = function(e, t) {
            return 0 > t && this.session.getScrollTop() >= 1 - this.scrollMargin.top ? !0 : t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom ? !0 : 0 > e && this.session.getScrollLeft() >= 1 - this.scrollMargin.left ? !0 : e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right ? !0 : void 0
        }
        ,
        this.pixelToScreenCoordinates = function(e, t) {
            var i = this.scroller.getBoundingClientRect()
              , n = (e + this.scrollLeft - i.left - this.$padding) / this.characterWidth
              , r = Math.floor((t + this.scrollTop - i.top) / this.lineHeight)
              , o = Math.round(n);
            return {
                row: r,
                column: o,
                side: n - o > 0 ? 1 : -1
            }
        }
        ,
        this.screenToTextCoordinates = function(e, t) {
            var i = this.scroller.getBoundingClientRect()
              , n = Math.round((e + this.scrollLeft - i.left - this.$padding) / this.characterWidth)
              , r = (t + this.scrollTop - i.top) / this.lineHeight;
            return this.session.screenToDocumentPosition(r, Math.max(n, 0))
        }
        ,
        this.textToScreenCoordinates = function(e, t) {
            var i = this.scroller.getBoundingClientRect()
              , n = this.session.documentToScreenPosition(e, t)
              , r = this.$padding + Math.round(n.column * this.characterWidth)
              , o = n.row * this.lineHeight;
            return {
                pageX: i.left + r - this.scrollLeft,
                pageY: i.top + o - this.scrollTop
            }
        }
        ,
        this.visualizeFocus = function() {
            n.addCssClass(this.container, "ace_focus")
        }
        ,
        this.visualizeBlur = function() {
            n.removeCssClass(this.container, "ace_focus")
        }
        ,
        this.showComposition = function() {
            this.$composition || (this.$composition = {
                keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                cssText: this.textarea.style.cssText
            }),
            this.$keepTextAreaAtCursor = !0,
            n.addCssClass(this.textarea, "ace_composition"),
            this.textarea.style.cssText = "",
            this.$moveTextAreaToCursor()
        }
        ,
        this.setCompositionText = function() {
            this.$moveTextAreaToCursor()
        }
        ,
        this.hideComposition = function() {
            this.$composition && (n.removeCssClass(this.textarea, "ace_composition"),
            this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor,
            this.textarea.style.cssText = this.$composition.cssText,
            this.$composition = null)
        }
        ,
        this.setTheme = function(e, t) {
            function i(i) {
                if (o.$themeId != e)
                    return t && t();
                if (!i || !i.cssClass)
                    throw new Error("couldn't load module " + e + " or it didn't call define");
                n.importCssString(i.cssText, i.cssClass, o.container.ownerDocument),
                o.theme && n.removeCssClass(o.container, o.theme.cssClass);
                var r = "padding"in i ? i.padding : "padding"in (o.theme || {}) ? 4 : o.$padding;
                o.$padding && r != o.$padding && o.setPadding(r),
                o.$theme = i.cssClass,
                o.theme = i,
                n.addCssClass(o.container, i.cssClass),
                n.setCssClass(o.container, "ace_dark", i.isDark),
                o.$size && (o.$size.width = 0,
                o.$updateSizeAsync()),
                o._dispatchEvent("themeLoaded", {
                    theme: i
                }),
                t && t()
            }
            var o = this;
            if (this.$themeId = e,
            o._dispatchEvent("themeChange", {
                theme: e
            }),
            e && "string" != typeof e)
                i(e);
            else {
                var s = e || this.$options.theme.initialValue;
                r.loadModule(["theme", s], i)
            }
        }
        ,
        this.getTheme = function() {
            return this.$themeId
        }
        ,
        this.setStyle = function(e, t) {
            n.setCssClass(this.container, e, t !== !1)
        }
        ,
        this.unsetStyle = function(e) {
            n.removeCssClass(this.container, e)
        }
        ,
        this.setCursorStyle = function(e) {
            this.scroller.style.cursor != e && (this.scroller.style.cursor = e)
        }
        ,
        this.setMouseCursor = function(e) {
            this.scroller.style.cursor = e
        }
        ,
        this.destroy = function() {
            this.$textLayer.destroy(),
            this.$cursorLayer.destroy()
        }
    }
    ).call(f.prototype),
    r.defineOptions(f.prototype, "renderer", {
        animatedScroll: {
            initialValue: !1
        },
        showInvisibles: {
            set: function(e) {
                this.$textLayer.setShowInvisibles(e) && this.$loop.schedule(this.CHANGE_TEXT)
            },
            initialValue: !1
        },
        showPrintMargin: {
            set: function() {
                this.$updatePrintMargin()
            },
            initialValue: !0
        },
        printMarginColumn: {
            set: function() {
                this.$updatePrintMargin()
            },
            initialValue: 80
        },
        printMargin: {
            set: function(e) {
                "number" == typeof e && (this.$printMarginColumn = e),
                this.$showPrintMargin = !!e,
                this.$updatePrintMargin()
            },
            get: function() {
                return this.$showPrintMargin && this.$printMarginColumn
            }
        },
        showGutter: {
            set: function(e) {
                this.$gutter.style.display = e ? "block" : "none",
                this.$loop.schedule(this.CHANGE_FULL),
                this.onGutterResize()
            },
            initialValue: !0
        },
        fadeFoldWidgets: {
            set: function(e) {
                n.setCssClass(this.$gutter, "ace_fade-fold-widgets", e)
            },
            initialValue: !1
        },
        showFoldWidgets: {
            set: function(e) {
                this.$gutterLayer.setShowFoldWidgets(e)
            },
            initialValue: !0
        },
        showLineNumbers: {
            set: function(e) {
                this.$gutterLayer.setShowLineNumbers(e),
                this.$loop.schedule(this.CHANGE_GUTTER)
            },
            initialValue: !0
        },
        displayIndentGuides: {
            set: function(e) {
                this.$textLayer.setDisplayIndentGuides(e) && this.$loop.schedule(this.CHANGE_TEXT)
            },
            initialValue: !0
        },
        highlightGutterLine: {
            set: function(e) {
                return this.$gutterLineHighlight ? (this.$gutterLineHighlight.style.display = e ? "" : "none",
                void (this.$cursorLayer.$pixelPos && this.$updateGutterLineHighlight())) : (this.$gutterLineHighlight = n.createElement("div"),
                this.$gutterLineHighlight.className = "ace_gutter-active-line",
                this.$gutter.appendChild(this.$gutterLineHighlight),
                void 0)
            },
            initialValue: !1,
            value: !0
        },
        hScrollBarAlwaysVisible: {
            set: function() {
                (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            },
            initialValue: !1
        },
        vScrollBarAlwaysVisible: {
            set: function() {
                (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
            },
            initialValue: !1
        },
        fontSize: {
            set: function(e) {
                "number" == typeof e && (e += "px"),
                this.container.style.fontSize = e,
                this.updateFontSize()
            },
            initialValue: 12
        },
        fontFamily: {
            set: function(e) {
                this.container.style.fontFamily = e,
                this.updateFontSize()
            }
        },
        maxLines: {
            set: function() {
                this.updateFull()
            }
        },
        minLines: {
            set: function() {
                this.updateFull()
            }
        },
        maxPixelHeight: {
            set: function() {
                this.updateFull()
            },
            initialValue: 0
        },
        scrollPastEnd: {
            set: function(e) {
                e = +e || 0,
                this.$scrollPastEnd != e && (this.$scrollPastEnd = e,
                this.$loop.schedule(this.CHANGE_SCROLL))
            },
            initialValue: 0,
            handlesSet: !0
        },
        fixedWidthGutter: {
            set: function(e) {
                this.$gutterLayer.$fixedWidth = !!e,
                this.$loop.schedule(this.CHANGE_GUTTER)
            }
        },
        theme: {
            set: function(e) {
                this.setTheme(e)
            },
            get: function() {
                return this.$themeId || this.theme
            },
            initialValue: "./theme/textmate",
            handlesSet: !0
        }
    }),
    t.VirtualRenderer = f
}),
define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("../lib/net")
      , r = e("../lib/event_emitter").EventEmitter
      , o = e("../config")
      , s = function(t, i, n, r) {
        if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this),
        this.changeListener = this.changeListener.bind(this),
        this.onMessage = this.onMessage.bind(this),
        e.nameToUrl && !e.toUrl && (e.toUrl = e.nameToUrl),
        o.get("packaged") || !e.toUrl)
            r = r || o.moduleUrl(i, "worker");
        else {
            var s = this.$normalizePath;
            r = r || s(e.toUrl("ace/worker/worker.js", null, "_"));
            var a = {};
            t.forEach(function(t) {
                a[t] = s(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
            })
        }
        try {
            this.$worker = new Worker(r)
        } catch (l) {
            if (!(l instanceof window.DOMException))
                throw l;
            var c = this.$workerBlob(r)
              , h = window.URL || window.webkitURL
              , d = h.createObjectURL(c);
            this.$worker = new Worker(d),
            h.revokeObjectURL(d)
        }
        this.$worker.postMessage({
            init: !0,
            tlns: a,
            module: i,
            classname: n
        }),
        this.callbackId = 1,
        this.callbacks = {},
        this.$worker.onmessage = this.onMessage
    };
    (function() {
        i.implement(this, r),
        this.onMessage = function(e) {
            var t = e.data;
            switch (t.type) {
            case "event":
                this._signal(t.name, {
                    data: t.data
                });
                break;
            case "call":
                var i = this.callbacks[t.id];
                i && (i(t.data),
                delete this.callbacks[t.id]);
                break;
            case "error":
                this.reportError(t.data);
                break;
            case "log":
                window.console && console.log && console.log.apply(console, t.data)
            }
        }
        ,
        this.reportError = function(e) {
            window.console && console.error && console.error(e)
        }
        ,
        this.$normalizePath = function(e) {
            return n.qualifyURL(e)
        }
        ,
        this.terminate = function() {
            this._signal("terminate", {}),
            this.deltaQueue = null,
            this.$worker.terminate(),
            this.$worker = null,
            this.$doc && this.$doc.off("change", this.changeListener),
            this.$doc = null
        }
        ,
        this.send = function(e, t) {
            this.$worker.postMessage({
                command: e,
                args: t
            })
        }
        ,
        this.call = function(e, t, i) {
            if (i) {
                var n = this.callbackId++;
                this.callbacks[n] = i,
                t.push(n)
            }
            this.send(e, t)
        }
        ,
        this.emit = function(e, t) {
            try {
                this.$worker.postMessage({
                    event: e,
                    data: {
                        data: t.data
                    }
                })
            } catch (i) {
                console.error(i.stack)
            }
        }
        ,
        this.attachToDocument = function(e) {
            this.$doc && this.terminate(),
            this.$doc = e,
            this.call("setValue", [e.getValue()]),
            e.on("change", this.changeListener)
        }
        ,
        this.changeListener = function(e) {
            this.deltaQueue || (this.deltaQueue = [],
            setTimeout(this.$sendDeltaQueue, 0)),
            "insert" == e.action ? this.deltaQueue.push(e.start, e.lines) : this.deltaQueue.push(e.start, e.end)
        }
        ,
        this.$sendDeltaQueue = function() {
            var e = this.deltaQueue;
            e && (this.deltaQueue = null,
            e.length > 50 && e.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
                data: e
            }))
        }
        ,
        this.$workerBlob = function(e) {
            var t = "importScripts('" + n.qualifyURL(e) + "');";
            try {
                return new Blob([t],{
                    type: "application/javascript"
                })
            } catch (i) {
                var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder
                  , o = new r;
                return o.append(t),
                o.getBlob("application/javascript")
            }
        }
    }
    ).call(s.prototype);
    var a = function(e, t, i) {
        this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this),
        this.changeListener = this.changeListener.bind(this),
        this.callbackId = 1,
        this.callbacks = {},
        this.messageBuffer = [];
        var n = null
          , s = !1
          , a = Object.create(r)
          , l = this;
        this.$worker = {},
        this.$worker.terminate = function() {}
        ,
        this.$worker.postMessage = function(e) {
            l.messageBuffer.push(e),
            n && (s ? setTimeout(c) : c())
        }
        ,
        this.setEmitSync = function(e) {
            s = e
        }
        ;
        var c = function() {
            var e = l.messageBuffer.shift();
            e.command ? n[e.command].apply(n, e.args) : e.event && a._signal(e.event, e.data)
        };
        a.postMessage = function(e) {
            l.onMessage({
                data: e
            })
        }
        ,
        a.callback = function(e, t) {
            this.postMessage({
                type: "call",
                id: t,
                data: e
            })
        }
        ,
        a.emit = function(e, t) {
            this.postMessage({
                type: "event",
                name: e,
                data: t
            })
        }
        ,
        o.loadModule(["worker", t], function(e) {
            for (n = new e[i](a); l.messageBuffer.length; )
                c()
        })
    };
    a.prototype = s.prototype,
    t.UIWorkerClient = a,
    t.WorkerClient = s
}),
define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(e, t) {
    "use strict";
    var i = e("./range").Range
      , n = e("./lib/event_emitter").EventEmitter
      , r = e("./lib/oop")
      , o = function(e, t, i, n, r, o) {
        var s = this;
        this.length = t,
        this.session = e,
        this.doc = e.getDocument(),
        this.mainClass = r,
        this.othersClass = o,
        this.$onUpdate = this.onUpdate.bind(this),
        this.doc.on("change", this.$onUpdate),
        this.$others = n,
        this.$onCursorChange = function() {
            setTimeout(function() {
                s.onCursorChange()
            })
        }
        ,
        this.$pos = i;
        var a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
            length: -1
        };
        this.$undoStackDepth = a.length,
        this.setup(),
        e.selection.on("changeCursor", this.$onCursorChange)
    };
    (function() {
        r.implement(this, n),
        this.setup = function() {
            var e = this
              , t = this.doc
              , n = this.session;
            this.selectionBefore = n.selection.toJSON(),
            n.selection.inMultiSelectMode && n.selection.toSingleRange(),
            this.pos = t.createAnchor(this.$pos.row, this.$pos.column);
            var r = this.pos;
            r.$insertRight = !0,
            r.detach(),
            r.markerId = n.addMarker(new i(r.row,r.column,r.row,r.column + this.length), this.mainClass, null, !1),
            this.others = [],
            this.$others.forEach(function(i) {
                var n = t.createAnchor(i.row, i.column);
                n.$insertRight = !0,
                n.detach(),
                e.others.push(n)
            }),
            n.setUndoSelect(!1)
        }
        ,
        this.showOtherMarkers = function() {
            if (!this.othersActive) {
                var e = this.session
                  , t = this;
                this.othersActive = !0,
                this.others.forEach(function(n) {
                    n.markerId = e.addMarker(new i(n.row,n.column,n.row,n.column + t.length), t.othersClass, null, !1)
                })
            }
        }
        ,
        this.hideOtherMarkers = function() {
            if (this.othersActive) {
                this.othersActive = !1;
                for (var e = 0; e < this.others.length; e++)
                    this.session.removeMarker(this.others[e].markerId)
            }
        }
        ,
        this.onUpdate = function(e) {
            if (this.$updating)
                return this.updateAnchors(e);
            var t = e;
            if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                this.$updating = !0;
                var n = "insert" === e.action ? t.end.column - t.start.column : t.start.column - t.end.column
                  , r = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1
                  , o = t.start.column - this.pos.column;
                if (this.updateAnchors(e),
                r && (this.length += n),
                r && !this.session.$fromUndo)
                    if ("insert" === e.action)
                        for (var s = this.others.length - 1; s >= 0; s--) {
                            var a = this.others[s]
                              , l = {
                                row: a.row,
                                column: a.column + o
                            };
                            this.doc.insertMergedLines(l, e.lines)
                        }
                    else if ("remove" === e.action)
                        for (var s = this.others.length - 1; s >= 0; s--) {
                            var a = this.others[s]
                              , l = {
                                row: a.row,
                                column: a.column + o
                            };
                            this.doc.remove(new i(l.row,l.column,l.row,l.column - n))
                        }
                this.$updating = !1,
                this.updateMarkers()
            }
        }
        ,
        this.updateAnchors = function(e) {
            this.pos.onChange(e);
            for (var t = this.others.length; t--; )
                this.others[t].onChange(e);
            this.updateMarkers()
        }
        ,
        this.updateMarkers = function() {
            if (!this.$updating) {
                var e = this
                  , t = this.session
                  , n = function(n, r) {
                    t.removeMarker(n.markerId),
                    n.markerId = t.addMarker(new i(n.row,n.column,n.row,n.column + e.length), r, null, !1)
                };
                n(this.pos, this.mainClass);
                for (var r = this.others.length; r--; )
                    n(this.others[r], this.othersClass)
            }
        }
        ,
        this.onCursorChange = function(e) {
            if (!this.$updating && this.session) {
                var t = this.session.selection.getCursor();
                t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length ? (this.showOtherMarkers(),
                this._emit("cursorEnter", e)) : (this.hideOtherMarkers(),
                this._emit("cursorLeave", e))
            }
        }
        ,
        this.detach = function() {
            this.session.removeMarker(this.pos && this.pos.markerId),
            this.hideOtherMarkers(),
            this.doc.removeEventListener("change", this.$onUpdate),
            this.session.selection.removeEventListener("changeCursor", this.$onCursorChange),
            this.session.setUndoSelect(!0),
            this.session = null
        }
        ,
        this.cancel = function() {
            if (-1 !== this.$undoStackDepth) {
                for (var e = this.session.getUndoManager(), t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; t > i; i++)
                    e.undo(!0);
                this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
            }
        }
    }
    ).call(o.prototype),
    t.PlaceHolder = o
}),
define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(e, t) {
    function i(e, t) {
        return e.row == t.row && e.column == t.column
    }
    function n(e) {
        var t = e.domEvent
          , n = t.altKey
          , s = t.shiftKey
          , a = t.ctrlKey
          , l = e.getAccelKey()
          , c = e.getButton();
        if (a && o.isMac && (c = t.button),
        e.editor.inMultiSelectMode && 2 == c)
            return void e.editor.textInput.onContextMenu(e.domEvent);
        if (!a && !n && !l)
            return void (0 === c && e.editor.inMultiSelectMode && e.editor.exitMultiSelectMode());
        if (0 === c) {
            var h, d = e.editor, u = d.selection, p = d.inMultiSelectMode, g = e.getDocumentPosition(), m = u.getCursor(), f = e.inSelection() || u.isEmpty() && i(g, m), b = e.x, v = e.y, w = function(e) {
                b = e.clientX,
                v = e.clientY
            }, C = d.session, y = d.renderer.pixelToScreenCoordinates(b, v), S = y;
            if (d.$mouseHandler.$enableJumpToDef)
                a && n || l && n ? h = s ? "block" : "add" : n && d.$blockSelectEnabled && (h = "block");
            else if (l && !n) {
                if (h = "add",
                !p && s)
                    return
            } else
                n && d.$blockSelectEnabled && (h = "block");
            if (h && o.isMac && t.ctrlKey && d.$mouseHandler.cancelContextMenu(),
            "add" == h) {
                if (!p && f)
                    return;
                if (!p) {
                    var _ = u.toOrientedRange();
                    d.addSelectionMarker(_)
                }
                var k = u.rangeList.rangeAtPoint(g);
                d.$blockScrolling++,
                d.inVirtualSelectionMode = !0,
                s && (k = null,
                _ = u.ranges[0] || _,
                d.removeSelectionMarker(_)),
                d.once("mouseup", function() {
                    var e = u.toOrientedRange();
                    k && e.isEmpty() && i(k.cursor, e.cursor) ? u.substractPoint(e.cursor) : (s ? u.substractPoint(_.cursor) : _ && (d.removeSelectionMarker(_),
                    u.addRange(_)),
                    u.addRange(e)),
                    d.$blockScrolling--,
                    d.inVirtualSelectionMode = !1
                })
            } else if ("block" == h) {
                e.stop(),
                d.inVirtualSelectionMode = !0;
                var x, A = [], E = function() {
                    var e = d.renderer.pixelToScreenCoordinates(b, v)
                      , t = C.screenToDocumentPosition(e.row, e.column);
                    i(S, e) && i(t, u.lead) || (S = e,
                    d.$blockScrolling++,
                    d.selection.moveToPosition(t),
                    d.renderer.scrollCursorIntoView(),
                    d.removeSelectionMarkers(A),
                    A = u.rectangularRangeBlock(S, y),
                    d.$mouseHandler.$clickSelection && 1 == A.length && A[0].isEmpty() && (A[0] = d.$mouseHandler.$clickSelection.clone()),
                    A.forEach(d.addSelectionMarker, d),
                    d.updateSelectionMarkers(),
                    d.$blockScrolling--)
                };
                d.$blockScrolling++,
                p && !l ? u.toSingleRange() : !p && l && (x = u.toOrientedRange(),
                d.addSelectionMarker(x)),
                s ? y = C.documentToScreenPosition(u.lead) : u.moveToPosition(g),
                d.$blockScrolling--,
                S = {
                    row: -1,
                    column: -1
                };
                var I = function() {
                    clearInterval(T),
                    d.removeSelectionMarkers(A),
                    A.length || (A = [u.toOrientedRange()]),
                    d.$blockScrolling++,
                    x && (d.removeSelectionMarker(x),
                    u.toSingleRange(x));
                    for (var e = 0; e < A.length; e++)
                        u.addRange(A[e]);
                    d.inVirtualSelectionMode = !1,
                    d.$mouseHandler.$clickSelection = null,
                    d.$blockScrolling--
                }
                  , L = E;
                r.capture(d.container, w, I);
                var T = setInterval(function() {
                    L()
                }, 20);
                return e.preventDefault()
            }
        }
    }
    var r = e("../lib/event")
      , o = e("../lib/useragent");
    t.onMouseDown = n
}),
define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(e, t) {
    t.defaultCommands = [{
        name: "addCursorAbove",
        exec: function(e) {
            e.selectMoreLines(-1)
        },
        bindKey: {
            win: "Ctrl-Alt-Up",
            mac: "Ctrl-Alt-Up"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "addCursorBelow",
        exec: function(e) {
            e.selectMoreLines(1)
        },
        bindKey: {
            win: "Ctrl-Alt-Down",
            mac: "Ctrl-Alt-Down"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "addCursorAboveSkipCurrent",
        exec: function(e) {
            e.selectMoreLines(-1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Up",
            mac: "Ctrl-Alt-Shift-Up"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "addCursorBelowSkipCurrent",
        exec: function(e) {
            e.selectMoreLines(1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Down",
            mac: "Ctrl-Alt-Shift-Down"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectMoreBefore",
        exec: function(e) {
            e.selectMore(-1)
        },
        bindKey: {
            win: "Ctrl-Alt-Left",
            mac: "Ctrl-Alt-Left"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectMoreAfter",
        exec: function(e) {
            e.selectMore(1)
        },
        bindKey: {
            win: "Ctrl-Alt-Right",
            mac: "Ctrl-Alt-Right"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectNextBefore",
        exec: function(e) {
            e.selectMore(-1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Left",
            mac: "Ctrl-Alt-Shift-Left"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "selectNextAfter",
        exec: function(e) {
            e.selectMore(1, !0)
        },
        bindKey: {
            win: "Ctrl-Alt-Shift-Right",
            mac: "Ctrl-Alt-Shift-Right"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }, {
        name: "splitIntoLines",
        exec: function(e) {
            e.multiSelect.splitIntoLines()
        },
        bindKey: {
            win: "Ctrl-Alt-L",
            mac: "Ctrl-Alt-L"
        },
        readOnly: !0
    }, {
        name: "alignCursors",
        exec: function(e) {
            e.alignCursors()
        },
        bindKey: {
            win: "Ctrl-Alt-A",
            mac: "Ctrl-Alt-A"
        },
        scrollIntoView: "cursor"
    }, {
        name: "findAll",
        exec: function(e) {
            e.findAll()
        },
        bindKey: {
            win: "Ctrl-Alt-K",
            mac: "Ctrl-Alt-G"
        },
        scrollIntoView: "cursor",
        readOnly: !0
    }],
    t.multiSelectCommands = [{
        name: "singleSelection",
        bindKey: "esc",
        exec: function(e) {
            e.exitMultiSelectMode()
        },
        scrollIntoView: "cursor",
        readOnly: !0,
        isAvailable: function(e) {
            return e && e.inMultiSelectMode
        }
    }];
    var i = e("../keyboard/hash_handler").HashHandler;
    t.keyboardHandler = new i(t.multiSelectCommands)
}),
define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(e, t) {
    function i(e, t, i) {
        return g.$options.wrap = !0,
        g.$options.needle = t,
        g.$options.backwards = -1 == i,
        g.find(e)
    }
    function n(e, t) {
        return e.row == t.row && e.column == t.column
    }
    function r(e) {
        e.$multiselectOnSessionChange || (e.$onAddRange = e.$onAddRange.bind(e),
        e.$onRemoveRange = e.$onRemoveRange.bind(e),
        e.$onMultiSelect = e.$onMultiSelect.bind(e),
        e.$onSingleSelect = e.$onSingleSelect.bind(e),
        e.$multiselectOnSessionChange = t.onSessionChange.bind(e),
        e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e),
        e.$multiselectOnSessionChange(e),
        e.on("changeSession", e.$multiselectOnSessionChange),
        e.on("mousedown", c),
        e.commands.addCommands(u.defaultCommands),
        o(e))
    }
    function o(e) {
        function t() {
            n && (e.renderer.setMouseCursor(""),
            n = !1)
        }
        var i = e.textInput.getElement()
          , n = !1;
        h.addListener(i, "keydown", function(i) {
            var r = 18 == i.keyCode && !(i.ctrlKey || i.shiftKey || i.metaKey);
            e.$blockSelectEnabled && r ? n || (e.renderer.setMouseCursor("crosshair"),
            n = !0) : n && t()
        }),
        h.addListener(i, "keyup", t),
        h.addListener(i, "blur", t)
    }
    var s = e("./range_list").RangeList
      , a = e("./range").Range
      , l = e("./selection").Selection
      , c = e("./mouse/multi_select_handler").onMouseDown
      , h = e("./lib/event")
      , d = e("./lib/lang")
      , u = e("./commands/multi_select_commands");
    t.commands = u.defaultCommands.concat(u.multiSelectCommands);
    var p = e("./search").Search
      , g = new p
      , m = e("./edit_session").EditSession;
    (function() {
        this.getSelectionMarkers = function() {
            return this.$selectionMarkers
        }
    }
    ).call(m.prototype),
    function() {
        this.ranges = null,
        this.rangeList = null,
        this.addRange = function(e, t) {
            if (e) {
                if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                    var i = this.toOrientedRange();
                    if (this.rangeList.add(i),
                    this.rangeList.add(e),
                    2 != this.rangeList.ranges.length)
                        return this.rangeList.removeAll(),
                        t || this.fromOrientedRange(e);
                    this.rangeList.removeAll(),
                    this.rangeList.add(i),
                    this.$onAddRange(i)
                }
                e.cursor || (e.cursor = e.end);
                var n = this.rangeList.add(e);
                return this.$onAddRange(e),
                n.length && this.$onRemoveRange(n),
                this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"),
                this.inMultiSelectMode = !0,
                this.session.$undoSelect = !1,
                this.rangeList.attach(this.session)),
                t || this.fromOrientedRange(e)
            }
        }
        ,
        this.toSingleRange = function(e) {
            e = e || this.ranges[0];
            var t = this.rangeList.removeAll();
            t.length && this.$onRemoveRange(t),
            e && this.fromOrientedRange(e)
        }
        ,
        this.substractPoint = function(e) {
            var t = this.rangeList.substractPoint(e);
            return t ? (this.$onRemoveRange(t),
            t[0]) : void 0
        }
        ,
        this.mergeOverlappingRanges = function() {
            var e = this.rangeList.merge();
            e.length ? this.$onRemoveRange(e) : this.ranges[0] && this.fromOrientedRange(this.ranges[0])
        }
        ,
        this.$onAddRange = function(e) {
            this.rangeCount = this.rangeList.ranges.length,
            this.ranges.unshift(e),
            this._signal("addRange", {
                range: e
            })
        }
        ,
        this.$onRemoveRange = function(e) {
            if (this.rangeCount = this.rangeList.ranges.length,
            1 == this.rangeCount && this.inMultiSelectMode) {
                var t = this.rangeList.ranges.pop();
                e.push(t),
                this.rangeCount = 0
            }
            for (var i = e.length; i--; ) {
                var n = this.ranges.indexOf(e[i]);
                this.ranges.splice(n, 1)
            }
            this._signal("removeRange", {
                ranges: e
            }),
            0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1,
            this._signal("singleSelect"),
            this.session.$undoSelect = !0,
            this.rangeList.detach(this.session)),
            t = t || this.ranges[0],
            t && !t.isEqual(this.getRange()) && this.fromOrientedRange(t)
        }
        ,
        this.$initRangeList = function() {
            this.rangeList || (this.rangeList = new s,
            this.ranges = [],
            this.rangeCount = 0)
        }
        ,
        this.getAllRanges = function() {
            return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
        }
        ,
        this.splitIntoLines = function() {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges
                  , t = e[e.length - 1]
                  , i = a.fromPoints(e[0].start, t.end);
                this.toSingleRange(),
                this.setSelectionRange(i, t.cursor == t.start)
            } else {
                var i = this.getRange()
                  , n = this.isBackwards()
                  , r = i.start.row
                  , o = i.end.row;
                if (r == o) {
                    if (n)
                        var s = i.end
                          , l = i.start;
                    else
                        var s = i.start
                          , l = i.end;
                    return this.addRange(a.fromPoints(l, l)),
                    void this.addRange(a.fromPoints(s, s))
                }
                var c = []
                  , h = this.getLineRange(r, !0);
                h.start.column = i.start.column,
                c.push(h);
                for (var d = r + 1; o > d; d++)
                    c.push(this.getLineRange(d, !0));
                h = this.getLineRange(o, !0),
                h.end.column = i.end.column,
                c.push(h),
                c.forEach(this.addRange, this)
            }
        }
        ,
        this.toggleBlockSelection = function() {
            if (this.rangeCount > 1) {
                var e = this.rangeList.ranges
                  , t = e[e.length - 1]
                  , i = a.fromPoints(e[0].start, t.end);
                this.toSingleRange(),
                this.setSelectionRange(i, t.cursor == t.start)
            } else {
                var n = this.session.documentToScreenPosition(this.selectionLead)
                  , r = this.session.documentToScreenPosition(this.selectionAnchor)
                  , o = this.rectangularRangeBlock(n, r);
                o.forEach(this.addRange, this)
            }
        }
        ,
        this.rectangularRangeBlock = function(e, t, i) {
            var r = []
              , o = e.column < t.column;
            if (o)
                var s = e.column
                  , l = t.column;
            else
                var s = t.column
                  , l = e.column;
            var c = e.row < t.row;
            if (c)
                var h = e.row
                  , d = t.row;
            else
                var h = t.row
                  , d = e.row;
            0 > s && (s = 0),
            0 > h && (h = 0),
            h == d && (i = !0);
            for (var u = h; d >= u; u++) {
                var p = a.fromPoints(this.session.screenToDocumentPosition(u, s), this.session.screenToDocumentPosition(u, l));
                if (p.isEmpty()) {
                    if (g && n(p.end, g))
                        break;
                    var g = p.end
                }
                p.cursor = o ? p.start : p.end,
                r.push(p)
            }
            if (c && r.reverse(),
            !i) {
                for (var m = r.length - 1; r[m].isEmpty() && m > 0; )
                    m--;
                if (m > 0)
                    for (var f = 0; r[f].isEmpty(); )
                        f++;
                for (var b = m; b >= f; b--)
                    r[b].isEmpty() && r.splice(b, 1)
            }
            return r
        }
    }
    .call(l.prototype);
    var f = e("./editor").Editor;
    (function() {
        this.updateSelectionMarkers = function() {
            this.renderer.updateCursor(),
            this.renderer.updateBackMarkers()
        }
        ,
        this.addSelectionMarker = function(e) {
            e.cursor || (e.cursor = e.end);
            var t = this.getSelectionStyle();
            return e.marker = this.session.addMarker(e, "ace_selection", t),
            this.session.$selectionMarkers.push(e),
            this.session.selectionMarkerCount = this.session.$selectionMarkers.length,
            e
        }
        ,
        this.removeSelectionMarker = function(e) {
            if (e.marker) {
                this.session.removeMarker(e.marker);
                var t = this.session.$selectionMarkers.indexOf(e);
                -1 != t && this.session.$selectionMarkers.splice(t, 1),
                this.session.selectionMarkerCount = this.session.$selectionMarkers.length
            }
        }
        ,
        this.removeSelectionMarkers = function(e) {
            for (var t = this.session.$selectionMarkers, i = e.length; i--; ) {
                var n = e[i];
                if (n.marker) {
                    this.session.removeMarker(n.marker);
                    var r = t.indexOf(n);
                    -1 != r && t.splice(r, 1)
                }
            }
            this.session.selectionMarkerCount = t.length
        }
        ,
        this.$onAddRange = function(e) {
            this.addSelectionMarker(e.range),
            this.renderer.updateCursor(),
            this.renderer.updateBackMarkers()
        }
        ,
        this.$onRemoveRange = function(e) {
            this.removeSelectionMarkers(e.ranges),
            this.renderer.updateCursor(),
            this.renderer.updateBackMarkers()
        }
        ,
        this.$onMultiSelect = function() {
            this.inMultiSelectMode || (this.inMultiSelectMode = !0,
            this.setStyle("ace_multiselect"),
            this.keyBinding.addKeyboardHandler(u.keyboardHandler),
            this.commands.setDefaultHandler("exec", this.$onMultiSelectExec),
            this.renderer.updateCursor(),
            this.renderer.updateBackMarkers())
        }
        ,
        this.$onSingleSelect = function() {
            this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1,
            this.unsetStyle("ace_multiselect"),
            this.keyBinding.removeKeyboardHandler(u.keyboardHandler),
            this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec),
            this.renderer.updateCursor(),
            this.renderer.updateBackMarkers(),
            this._emit("changeSelection"))
        }
        ,
        this.$onMultiSelectExec = function(e) {
            var t = e.command
              , i = e.editor;
            if (i.multiSelect) {
                if (t.multiSelectAction)
                    "forEach" == t.multiSelectAction ? n = i.forEachSelection(t, e.args) : "forEachLine" == t.multiSelectAction ? n = i.forEachSelection(t, e.args, !0) : "single" == t.multiSelectAction ? (i.exitMultiSelectMode(),
                    n = t.exec(i, e.args || {})) : n = t.multiSelectAction(i, e.args || {});
                else {
                    var n = t.exec(i, e.args || {});
                    i.multiSelect.addRange(i.multiSelect.toOrientedRange()),
                    i.multiSelect.mergeOverlappingRanges()
                }
                return n
            }
        }
        ,
        this.forEachSelection = function(e, t, i) {
            if (!this.inVirtualSelectionMode) {
                var n, r = i && i.keepOrder, o = 1 == i || i && i.$byLines, s = this.session, a = this.selection, c = a.rangeList, h = (r ? a : c).ranges;
                if (!h.length)
                    return e.exec ? e.exec(this, t || {}) : e(this, t || {});
                var d = a._eventRegistry;
                a._eventRegistry = {};
                var u = new l(s);
                this.inVirtualSelectionMode = !0;
                for (var p = h.length; p--; ) {
                    if (o)
                        for (; p > 0 && h[p].start.row == h[p - 1].end.row; )
                            p--;
                    u.fromOrientedRange(h[p]),
                    u.index = p,
                    this.selection = s.selection = u;
                    var g = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                    !n && void 0 !== g && (n = g),
                    u.toOrientedRange(h[p])
                }
                u.detach(),
                this.selection = s.selection = a,
                this.inVirtualSelectionMode = !1,
                a._eventRegistry = d,
                a.mergeOverlappingRanges();
                var m = this.renderer.$scrollAnimation;
                return this.onCursorChange(),
                this.onSelectionChange(),
                m && m.from == m.to && this.renderer.animateScrolling(m.from),
                n
            }
        }
        ,
        this.exitMultiSelectMode = function() {
            this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
        }
        ,
        this.getSelectedText = function() {
            var e = "";
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                for (var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++)
                    i.push(this.session.getTextRange(t[n]));
                var r = this.session.getDocument().getNewLineCharacter();
                e = i.join(r),
                e.length == (i.length - 1) * r.length && (e = "")
            } else
                this.selection.isEmpty() || (e = this.session.getTextRange(this.getSelectionRange()));
            return e
        }
        ,
        this.$checkMultiselectChange = function(e, t) {
            if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                var i = this.multiSelect.ranges[0];
                if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor)
                    return;
                var n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                (n.row != t.row || this.session.$clipPositionToDocument(n.row, n.column).column != t.column) && this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange())
            }
        }
        ,
        this.findAll = function(e, t, i) {
            if (t = t || {},
            t.needle = e || t.needle,
            void 0 == t.needle) {
                var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                t.needle = this.session.getTextRange(n)
            }
            this.$search.set(t);
            var r = this.$search.findAll(this.session);
            if (!r.length)
                return 0;
            this.$blockScrolling += 1;
            var o = this.multiSelect;
            i || o.toSingleRange(r[0]);
            for (var s = r.length; s--; )
                o.addRange(r[s], !0);
            return n && o.rangeList.rangeAtPoint(n.start) && o.addRange(n, !0),
            this.$blockScrolling -= 1,
            r.length
        }
        ,
        this.selectMoreLines = function(e, t) {
            var i = this.selection.toOrientedRange()
              , n = i.cursor == i.end
              , r = this.session.documentToScreenPosition(i.cursor);
            this.selection.$desiredColumn && (r.column = this.selection.$desiredColumn);
            var o = this.session.screenToDocumentPosition(r.row + e, r.column);
            if (i.isEmpty())
                var s = o;
            else
                var l = this.session.documentToScreenPosition(n ? i.end : i.start)
                  , s = this.session.screenToDocumentPosition(l.row + e, l.column);
            if (n) {
                var c = a.fromPoints(o, s);
                c.cursor = c.start
            } else {
                var c = a.fromPoints(s, o);
                c.cursor = c.end
            }
            if (c.desiredColumn = r.column,
            this.selection.inMultiSelectMode) {
                if (t)
                    var h = i.cursor
            } else
                this.selection.addRange(i);
            this.selection.addRange(c),
            h && this.selection.substractPoint(h)
        }
        ,
        this.transposeSelections = function(e) {
            for (var t = this.session, i = t.multiSelect, n = i.ranges, r = n.length; r--; ) {
                var o = n[r];
                if (o.isEmpty()) {
                    var s = t.getWordRange(o.start.row, o.start.column);
                    o.start.row = s.start.row,
                    o.start.column = s.start.column,
                    o.end.row = s.end.row,
                    o.end.column = s.end.column
                }
            }
            i.mergeOverlappingRanges();
            for (var a = [], r = n.length; r--; ) {
                var o = n[r];
                a.unshift(t.getTextRange(o))
            }
            0 > e ? a.unshift(a.pop()) : a.push(a.shift());
            for (var r = n.length; r--; ) {
                var o = n[r]
                  , s = o.clone();
                t.replace(o, a[r]),
                o.start.row = s.start.row,
                o.start.column = s.start.column
            }
        }
        ,
        this.selectMore = function(e, t, n) {
            var r = this.session
              , o = r.multiSelect
              , s = o.toOrientedRange();
            if (!s.isEmpty() || (s = r.getWordRange(s.start.row, s.start.column),
            s.cursor = -1 == e ? s.start : s.end,
            this.multiSelect.addRange(s),
            !n)) {
                var a = r.getTextRange(s)
                  , l = i(r, a, e);
                l && (l.cursor = -1 == e ? l.start : l.end,
                this.$blockScrolling += 1,
                this.session.unfold(l),
                this.multiSelect.addRange(l),
                this.$blockScrolling -= 1,
                this.renderer.scrollCursorIntoView(null, .5)),
                t && this.multiSelect.substractPoint(s.cursor)
            }
        }
        ,
        this.alignCursors = function() {
            var e = this.session
              , t = e.multiSelect
              , i = t.ranges
              , n = -1
              , r = i.filter(function(e) {
                return e.cursor.row == n ? !0 : void (n = e.cursor.row)
            });
            if (i.length && r.length != i.length - 1) {
                r.forEach(function(e) {
                    t.substractPoint(e.cursor)
                });
                var o = 0
                  , s = 1 / 0
                  , l = i.map(function(t) {
                    var i = t.cursor
                      , n = e.getLine(i.row)
                      , r = n.substr(i.column).search(/\S/g);
                    return -1 == r && (r = 0),
                    i.column > o && (o = i.column),
                    s > r && (s = r),
                    r
                });
                i.forEach(function(t, i) {
                    var n = t.cursor
                      , r = o - n.column
                      , c = l[i] - s;
                    r > c ? e.insert(n, d.stringRepeat(" ", r - c)) : e.remove(new a(n.row,n.column,n.row,n.column - r + c)),
                    t.start.column = t.end.column = o,
                    t.start.row = t.end.row = n.row,
                    t.cursor = t.end
                }),
                t.fromOrientedRange(i[0]),
                this.renderer.updateCursor(),
                this.renderer.updateBackMarkers()
            } else {
                var c = this.selection.getRange()
                  , h = c.start.row
                  , u = c.end.row
                  , p = h == u;
                if (p) {
                    var g, m = this.session.getLength();
                    do
                        g = this.session.getLine(u);
                    while (/[=:]/.test(g) && ++u < m);do
                        g = this.session.getLine(h);
                    while (/[=:]/.test(g) && --h > 0);0 > h && (h = 0),
                    u >= m && (u = m - 1)
                }
                var f = this.session.removeFullLines(h, u);
                f = this.$reAlignText(f, p),
                this.session.insert({
                    row: h,
                    column: 0
                }, f.join("\n") + "\n"),
                p || (c.start.column = 0,
                c.end.column = f[f.length - 1].length),
                this.selection.setRange(c)
            }
        }
        ,
        this.$reAlignText = function(e, t) {
            function i(e) {
                return d.stringRepeat(" ", e)
            }
            function n(e) {
                return e[2] ? i(s) + e[2] + i(a - e[2].length + l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            function r(e) {
                return e[2] ? i(s + a - e[2].length) + e[2] + i(l, " ") + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            function o(e) {
                return e[2] ? i(s) + e[2] + i(l) + e[4].replace(/^([=:])\s+/, "$1 ") : e[0]
            }
            var s, a, l, c = !0, h = !0;
            return e.map(function(e) {
                var t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                return t ? null == s ? (s = t[1].length,
                a = t[2].length,
                l = t[3].length,
                t) : (s + a + l != t[1].length + t[2].length + t[3].length && (h = !1),
                s != t[1].length && (c = !1),
                s > t[1].length && (s = t[1].length),
                a < t[2].length && (a = t[2].length),
                l > t[3].length && (l = t[3].length),
                t) : [e]
            }).map(t ? n : c ? h ? r : n : o)
        }
    }
    ).call(f.prototype),
    t.onSessionChange = function(e) {
        var t = e.session;
        t && !t.multiSelect && (t.$selectionMarkers = [],
        t.selection.$initRangeList(),
        t.multiSelect = t.selection),
        this.multiSelect = t && t.multiSelect;
        var i = e.oldSession;
        i && (i.multiSelect.off("addRange", this.$onAddRange),
        i.multiSelect.off("removeRange", this.$onRemoveRange),
        i.multiSelect.off("multiSelect", this.$onMultiSelect),
        i.multiSelect.off("singleSelect", this.$onSingleSelect),
        i.multiSelect.lead.off("change", this.$checkMultiselectChange),
        i.multiSelect.anchor.off("change", this.$checkMultiselectChange)),
        t && (t.multiSelect.on("addRange", this.$onAddRange),
        t.multiSelect.on("removeRange", this.$onRemoveRange),
        t.multiSelect.on("multiSelect", this.$onMultiSelect),
        t.multiSelect.on("singleSelect", this.$onSingleSelect),
        t.multiSelect.lead.on("change", this.$checkMultiselectChange),
        t.multiSelect.anchor.on("change", this.$checkMultiselectChange)),
        t && this.inMultiSelectMode != t.selection.inMultiSelectMode && (t.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
    }
    ,
    t.MultiSelect = r,
    e("./config").defineOptions(f.prototype, "editor", {
        enableMultiselect: {
            set: function(e) {
                r(this),
                e ? (this.on("changeSession", this.$multiselectOnSessionChange),
                this.on("mousedown", c)) : (this.off("changeSession", this.$multiselectOnSessionChange),
                this.off("mousedown", c))
            },
            value: !0
        },
        enableBlockSelect: {
            set: function(e) {
                this.$blockSelectEnabled = e
            },
            value: !0
        }
    })
}),
define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var i = e("../../range").Range
      , n = t.FoldMode = function() {}
    ;
    (function() {
        this.foldingStartMarker = null,
        this.foldingStopMarker = null,
        this.getFoldWidget = function(e, t, i) {
            var n = e.getLine(i);
            return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == t && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
        }
        ,
        this.getFoldWidgetRange = function() {
            return null
        }
        ,
        this.indentationBlock = function(e, t, n) {
            var r = /\S/
              , o = e.getLine(t)
              , s = o.search(r);
            if (-1 != s) {
                for (var a = n || o.length, l = e.getLength(), c = t, h = t; ++t < l; ) {
                    var d = e.getLine(t).search(r);
                    if (-1 != d) {
                        if (s >= d)
                            break;
                        h = t
                    }
                }
                if (h > c) {
                    var u = e.getLine(h).length;
                    return new i(c,a,h,u)
                }
            }
        }
        ,
        this.openingBracketBlock = function(e, t, n, r, o) {
            var s = {
                row: n,
                column: r + 1
            }
              , a = e.$findClosingBracket(t, s, o);
            if (a) {
                var l = e.foldWidgets[a.row];
                return null == l && (l = e.getFoldWidget(a.row)),
                "start" == l && a.row > s.row && (a.row--,
                a.column = e.getLine(a.row).length),
                i.fromPoints(s, a)
            }
        }
        ,
        this.closingBracketBlock = function(e, t, n, r) {
            var o = {
                row: n,
                column: r
            }
              , s = e.$findOpeningBracket(t, o);
            if (s)
                return s.column++,
                o.column--,
                i.fromPoints(s, o)
        }
    }
    ).call(n.prototype)
}),
define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    "use strict";
    t.isDark = !1,
    t.cssClass = "ace-tm",
    t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
    var i = e("../lib/dom");
    i.importCssString(t.cssText, t.cssClass)
}),
define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function(e, t) {
    "use strict";
    function i(e) {
        this.session = e,
        this.session.widgetManager = this,
        this.session.getRowLength = this.getRowLength,
        this.session.$getWidgetScreenLength = this.$getWidgetScreenLength,
        this.updateOnChange = this.updateOnChange.bind(this),
        this.renderWidgets = this.renderWidgets.bind(this),
        this.measureWidgets = this.measureWidgets.bind(this),
        this.session._changedWidgets = [],
        this.$onChangeEditor = this.$onChangeEditor.bind(this),
        this.session.on("change", this.updateOnChange),
        this.session.on("changeFold", this.updateOnFold),
        this.session.on("changeEditor", this.$onChangeEditor)
    }
    {
        var n = (e("./lib/oop"),
        e("./lib/dom"));
        e("./range").Range
    }
    (function() {
        this.getRowLength = function(e) {
            var t;
            return t = this.lineWidgets ? this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0 : 0,
            this.$useWrapMode && this.$wrapData[e] ? this.$wrapData[e].length + 1 + t : 1 + t
        }
        ,
        this.$getWidgetScreenLength = function() {
            var e = 0;
            return this.lineWidgets.forEach(function(t) {
                t && t.rowCount && !t.hidden && (e += t.rowCount)
            }),
            e
        }
        ,
        this.$onChangeEditor = function(e) {
            this.attach(e.editor)
        }
        ,
        this.attach = function(e) {
            e && e.widgetManager && e.widgetManager != this && e.widgetManager.detach(),
            this.editor != e && (this.detach(),
            this.editor = e,
            e && (e.widgetManager = this,
            e.renderer.on("beforeRender", this.measureWidgets),
            e.renderer.on("afterRender", this.renderWidgets)))
        }
        ,
        this.detach = function() {
            var e = this.editor;
            if (e) {
                this.editor = null,
                e.widgetManager = null,
                e.renderer.off("beforeRender", this.measureWidgets),
                e.renderer.off("afterRender", this.renderWidgets);
                var t = this.session.lineWidgets;
                t && t.forEach(function(e) {
                    e && e.el && e.el.parentNode && (e._inDocument = !1,
                    e.el.parentNode.removeChild(e.el))
                })
            }
        }
        ,
        this.updateOnFold = function(e, t) {
            var i = t.lineWidgets;
            if (i && e.action) {
                for (var n = e.data, r = n.start.row, o = n.end.row, s = "add" == e.action, a = r + 1; o > a; a++)
                    i[a] && (i[a].hidden = s);
                i[o] && (s ? i[r] ? i[o].hidden = s : i[r] = i[o] : (i[r] == i[o] && (i[r] = void 0),
                i[o].hidden = s))
            }
        }
        ,
        this.updateOnChange = function(e) {
            var t = this.session.lineWidgets;
            if (t) {
                var i = e.start.row
                  , n = e.end.row - i;
                if (0 !== n)
                    if ("remove" == e.action) {
                        var r = t.splice(i + 1, n);
                        r.forEach(function(e) {
                            e && this.removeLineWidget(e)
                        }, this),
                        this.$updateRows()
                    } else {
                        var o = new Array(n);
                        o.unshift(i, 0),
                        t.splice.apply(t, o),
                        this.$updateRows()
                    }
            }
        }
        ,
        this.$updateRows = function() {
            var e = this.session.lineWidgets;
            if (e) {
                var t = !0;
                e.forEach(function(e, i) {
                    if (e)
                        for (t = !1,
                        e.row = i; e.$oldWidget; )
                            e.$oldWidget.row = i,
                            e = e.$oldWidget
                }),
                t && (this.session.lineWidgets = null)
            }
        }
        ,
        this.addLineWidget = function(e) {
            this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
            var t = this.session.lineWidgets[e.row];
            t && (e.$oldWidget = t,
            t.el && t.el.parentNode && (t.el.parentNode.removeChild(t.el),
            t._inDocument = !1)),
            this.session.lineWidgets[e.row] = e,
            e.session = this.session;
            var i = this.editor.renderer;
            e.html && !e.el && (e.el = n.createElement("div"),
            e.el.innerHTML = e.html),
            e.el && (n.addCssClass(e.el, "ace_lineWidgetContainer"),
            e.el.style.position = "absolute",
            e.el.style.zIndex = 5,
            i.container.appendChild(e.el),
            e._inDocument = !0),
            e.coverGutter || (e.el.style.zIndex = 3),
            null == e.pixelHeight && (e.pixelHeight = e.el.offsetHeight),
            null == e.rowCount && (e.rowCount = e.pixelHeight / i.layerConfig.lineHeight);
            var r = this.session.getFoldAt(e.row, 0);
            if (e.$fold = r,
            r) {
                var o = this.session.lineWidgets;
                e.row != r.end.row || o[r.start.row] ? e.hidden = !0 : o[r.start.row] = e
            }
            return this.session._emit("changeFold", {
                data: {
                    start: {
                        row: e.row
                    }
                }
            }),
            this.$updateRows(),
            this.renderWidgets(null, i),
            this.onWidgetChanged(e),
            e
        }
        ,
        this.removeLineWidget = function(e) {
            if (e._inDocument = !1,
            e.session = null,
            e.el && e.el.parentNode && e.el.parentNode.removeChild(e.el),
            e.editor && e.editor.destroy)
                try {
                    e.editor.destroy()
                } catch (t) {}
            if (this.session.lineWidgets) {
                var i = this.session.lineWidgets[e.row];
                if (i == e)
                    this.session.lineWidgets[e.row] = e.$oldWidget,
                    e.$oldWidget && this.onWidgetChanged(e.$oldWidget);
                else
                    for (; i; ) {
                        if (i.$oldWidget == e) {
                            i.$oldWidget = e.$oldWidget;
                            break
                        }
                        i = i.$oldWidget
                    }
            }
            this.session._emit("changeFold", {
                data: {
                    start: {
                        row: e.row
                    }
                }
            }),
            this.$updateRows()
        }
        ,
        this.getWidgetsAtRow = function(e) {
            for (var t = this.session.lineWidgets, i = t && t[e], n = []; i; )
                n.push(i),
                i = i.$oldWidget;
            return n
        }
        ,
        this.onWidgetChanged = function(e) {
            this.session._changedWidgets.push(e),
            this.editor && this.editor.renderer.updateFull()
        }
        ,
        this.measureWidgets = function(e, t) {
            var i = this.session._changedWidgets
              , n = t.layerConfig;
            if (i && i.length) {
                for (var r = 1 / 0, o = 0; o < i.length; o++) {
                    var s = i[o];
                    if (s && s.el && s.session == this.session) {
                        if (!s._inDocument) {
                            if (this.session.lineWidgets[s.row] != s)
                                continue;
                            s._inDocument = !0,
                            t.container.appendChild(s.el)
                        }
                        s.h = s.el.offsetHeight,
                        s.fixedWidth || (s.w = s.el.offsetWidth,
                        s.screenWidth = Math.ceil(s.w / n.characterWidth));
                        var a = s.h / n.lineHeight;
                        s.coverLine && (a -= this.session.getRowLineCount(s.row),
                        0 > a && (a = 0)),
                        s.rowCount != a && (s.rowCount = a,
                        s.row < r && (r = s.row))
                    }
                }
                1 / 0 != r && (this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: r
                        }
                    }
                }),
                this.session.lineWidgetWidth = null),
                this.session._changedWidgets = []
            }
        }
        ,
        this.renderWidgets = function(e, t) {
            var i = t.layerConfig
              , n = this.session.lineWidgets;
            if (n) {
                for (var r = Math.min(this.firstRow, i.firstRow), o = Math.max(this.lastRow, i.lastRow, n.length); r > 0 && !n[r]; )
                    r--;
                this.firstRow = i.firstRow,
                this.lastRow = i.lastRow,
                t.$cursorLayer.config = i;
                for (var s = r; o >= s; s++) {
                    var a = n[s];
                    if (a && a.el)
                        if (a.hidden)
                            a.el.style.top = -100 - (a.pixelHeight || 0) + "px";
                        else {
                            a._inDocument || (a._inDocument = !0,
                            t.container.appendChild(a.el));
                            var l = t.$cursorLayer.getPixelPosition({
                                row: s,
                                column: 0
                            }, !0).top;
                            a.coverLine || (l += i.lineHeight * this.session.getRowLineCount(a.row)),
                            a.el.style.top = l - i.offset + "px";
                            var c = a.coverGutter ? 0 : t.gutterWidth;
                            a.fixedWidth || (c -= t.scrollLeft),
                            a.el.style.left = c + "px",
                            a.fullWidth && a.screenWidth && (a.el.style.minWidth = i.width + 2 * i.padding + "px"),
                            a.el.style.right = a.fixedWidth ? t.scrollBar.getWidth() + "px" : ""
                        }
                }
            }
        }
    }
    ).call(i.prototype),
    t.LineWidgets = i
}),
define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(e, t) {
    "use strict";
    function i(e, t, i) {
        for (var n = 0, r = e.length - 1; r >= n; ) {
            var o = n + r >> 1
              , s = i(t, e[o]);
            if (s > 0)
                n = o + 1;
            else {
                if (!(0 > s))
                    return o;
                r = o - 1
            }
        }
        return -(n + 1)
    }
    function n(e, t, n) {
        var r = e.getAnnotations().sort(s.comparePoints);
        if (r.length) {
            var o = i(r, {
                row: t,
                column: -1
            }, s.comparePoints);
            0 > o && (o = -o - 1),
            o >= r.length ? o = n > 0 ? 0 : r.length - 1 : 0 === o && 0 > n && (o = r.length - 1);
            var a = r[o];
            if (a && n) {
                if (a.row === t) {
                    do
                        a = r[o += n];
                    while (a && a.row === t);if (!a)
                        return r.slice()
                }
                var l = [];
                t = a.row;
                do
                    l[0 > n ? "unshift" : "push"](a),
                    a = r[o += n];
                while (a && a.row == t);return l.length && l
            }
        }
    }
    var r = e("../line_widgets").LineWidgets
      , o = e("../lib/dom")
      , s = e("../range").Range;
    t.showErrorMarker = function(e, t) {
        var i = e.session;
        i.widgetManager || (i.widgetManager = new r(i),
        i.widgetManager.attach(e));
        var s = e.getCursorPosition()
          , a = s.row
          , l = i.widgetManager.getWidgetsAtRow(a).filter(function(e) {
            return "errorMarker" == e.type
        })[0];
        l ? l.destroy() : a -= t;
        var c, h = n(i, a, t);
        if (h) {
            var d = h[0];
            s.column = (d.pos && "number" != typeof d.column ? d.pos.sc : d.column) || 0,
            s.row = d.row,
            c = e.renderer.$gutterLayer.$annotations[s.row]
        } else {
            if (l)
                return;
            c = {
                text: ["Looks good!"],
                className: "ace_ok"
            }
        }
        e.session.unfold(s.row),
        e.selection.moveToPosition(s);
        var u = {
            row: s.row,
            fixedWidth: !0,
            coverGutter: !0,
            el: o.createElement("div"),
            type: "errorMarker"
        }
          , p = u.el.appendChild(o.createElement("div"))
          , g = u.el.appendChild(o.createElement("div"));
        g.className = "error_widget_arrow " + c.className;
        var m = e.renderer.$cursorLayer.getPixelPosition(s).left;
        g.style.left = m + e.renderer.gutterWidth - 5 + "px",
        u.el.className = "error_widget_wrapper",
        p.className = "error_widget " + c.className,
        p.innerHTML = c.text.join("<br>"),
        p.appendChild(o.createElement("div"));
        var f = function(e, t, i) {
            return 0 !== t || "esc" !== i && "return" !== i ? void 0 : (u.destroy(),
            {
                command: "null"
            })
        };
        u.destroy = function() {
            e.$mouseHandler.isMousePressed || (e.keyBinding.removeKeyboardHandler(f),
            i.widgetManager.removeLineWidget(u),
            e.off("changeSelection", u.destroy),
            e.off("changeSession", u.destroy),
            e.off("mouseup", u.destroy),
            e.off("change", u.destroy))
        }
        ,
        e.keyBinding.addKeyboardHandler(f),
        e.on("changeSelection", u.destroy),
        e.on("changeSession", u.destroy),
        e.on("mouseup", u.destroy),
        e.on("change", u.destroy),
        e.session.widgetManager.addLineWidget(u),
        u.el.onmousedown = e.focus.bind(e),
        e.renderer.scrollCursorIntoView(null, .5, {
            bottom: u.el.offsetHeight
        })
    }
    ,
    o.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
}),
define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function(e, t) {
    "use strict";
    e("./lib/fixoldbrowsers");
    var i = e("./lib/dom")
      , n = e("./lib/event")
      , r = e("./editor").Editor
      , o = e("./edit_session").EditSession
      , s = e("./undomanager").UndoManager
      , a = e("./virtual_renderer").VirtualRenderer;
    e("./worker/worker_client"),
    e("./keyboard/hash_handler"),
    e("./placeholder"),
    e("./multi_select"),
    e("./mode/folding/fold_mode"),
    e("./theme/textmate"),
    e("./ext/error_marker"),
    t.config = e("./config"),
    t.require = e,
    "function" == typeof define && (t.define = define),
    t.edit = function(e) {
        if ("string" == typeof e) {
            var o = e;
            if (e = document.getElementById(o),
            !e)
                throw new Error("ace.edit can't find div #" + o)
        }
        if (e && e.env && e.env.editor instanceof r)
            return e.env.editor;
        var s = "";
        if (e && /input|textarea/i.test(e.tagName)) {
            var l = e;
            s = l.value,
            e = i.createElement("pre"),
            l.parentNode.replaceChild(e, l)
        } else
            e && (s = i.getInnerText(e),
            e.innerHTML = "");
        var c = t.createEditSession(s)
          , h = new r(new a(e));
        h.setSession(c);
        var d = {
            document: c,
            editor: h,
            onResize: h.resize.bind(h, null)
        };
        return l && (d.textarea = l),
        n.addListener(window, "resize", d.onResize),
        h.on("destroy", function() {
            n.removeListener(window, "resize", d.onResize),
            d.editor.container.env = null
        }),
        h.container.env = h.env = d,
        h
    }
    ,
    t.createEditSession = function(e, t) {
        var i = new o(e,t);
        return i.setUndoManager(new s),
        i
    }
    ,
    t.EditSession = o,
    t.UndoManager = s,
    t.version = "1.2.5"
}),
function() {
    window.require(["ace/ace"], function(e) {
        e && (e.config.init(!0),
        e.define = window.define),
        window.ace || (window.ace = e);
        for (var t in e)
            e.hasOwnProperty(t) && (window.ace[t] = e[t])
    })
}(),
define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text_highlight_rules").TextHighlightRules
      , r = function() {
        this.$rules = {
            start: [{
                token: "comment.doc.tag",
                regex: "@[\\w\\d_]+"
            }, r.getTagRule(), {
                defaultToken: "comment.doc",
                caseInsensitive: !0
            }]
        }
    };
    i.inherits(r, n),
    r.getTagRule = function() {
        return {
            token: "comment.doc.tag.storage.type",
            regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        }
    }
    ,
    r.getStartRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\/\\*(?=\\*)",
            next: e
        }
    }
    ,
    r.getEndRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\*\\/",
            next: e
        }
    }
    ,
    t.DocCommentHighlightRules = r
}),
define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    function i() {
        var e = a.replace("\\d", "\\d\\-")
          , t = {
            onMatch: function(e, t, i) {
                var n = "/" == e.charAt(1) ? 2 : 1;
                return 1 == n ? (t != this.nextState ? i.unshift(this.next, this.nextState, 0) : i.unshift(this.next),
                i[2]++) : 2 == n && t == this.nextState && (i[1]--,
                (!i[1] || i[1] < 0) && (i.shift(),
                i.shift())),
                [{
                    type: "meta.tag.punctuation." + (1 == n ? "" : "end-") + "tag-open.xml",
                    value: e.slice(0, n)
                }, {
                    type: "meta.tag.tag-name.xml",
                    value: e.substr(n)
                }]
            },
            regex: "</?" + e,
            next: "jsxAttributes",
            nextState: "jsx"
        };
        this.$rules.start.unshift(t);
        var i = {
            regex: "{",
            token: "paren.quasi.start",
            push: "start"
        };
        this.$rules.jsx = [i, t, {
            include: "reference"
        }, {
            defaultToken: "string"
        }],
        this.$rules.jsxAttributes = [{
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            onMatch: function(e, t, i) {
                return t == i[0] && i.shift(),
                2 == e.length && (i[0] == this.nextState && i[1]--,
                (!i[1] || i[1] < 0) && i.splice(0, 2)),
                this.next = i[0] || "start",
                [{
                    type: this.token,
                    value: e
                }]
            },
            nextState: "jsx"
        }, i, n("jsxAttributes"), {
            token: "entity.other.attribute-name.xml",
            regex: e
        }, {
            token: "keyword.operator.attribute-equals.xml",
            regex: "="
        }, {
            token: "text.tag-whitespace.xml",
            regex: "\\s+"
        }, {
            token: "string.attribute-value.xml",
            regex: "'",
            stateName: "jsx_attr_q",
            push: [{
                token: "string.attribute-value.xml",
                regex: "'",
                next: "pop"
            }, {
                include: "reference"
            }, {
                defaultToken: "string.attribute-value.xml"
            }]
        }, {
            token: "string.attribute-value.xml",
            regex: '"',
            stateName: "jsx_attr_qq",
            push: [{
                token: "string.attribute-value.xml",
                regex: '"',
                next: "pop"
            }, {
                include: "reference"
            }, {
                defaultToken: "string.attribute-value.xml"
            }]
        }, t],
        this.$rules.reference = [{
            token: "constant.language.escape.reference.xml",
            regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }]
    }
    function n(e) {
        return [{
            token: "comment",
            regex: /\/\*/,
            next: [o.getTagRule(), {
                token: "comment",
                regex: "\\*\\/",
                next: e || "pop"
            }, {
                defaultToken: "comment",
                caseInsensitive: !0
            }]
        }, {
            token: "comment",
            regex: "\\/\\/",
            next: [o.getTagRule(), {
                token: "comment",
                regex: "$|^",
                next: e || "pop"
            }, {
                defaultToken: "comment",
                caseInsensitive: !0
            }]
        }]
    }
    var r = e("../lib/oop")
      , o = e("./doc_comment_highlight_rules").DocCommentHighlightRules
      , s = e("./text_highlight_rules").TextHighlightRules
      , a = "[a-zA-Z\\$_\xa1-\uffff][a-zA-Z\\d\\$_\xa1-\uffff]*"
      , l = function(e) {
        var t = this.createKeywordMapper({
            "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
            keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
            "storage.type": "const|let|var|function",
            "constant.language": "null|Infinity|NaN|undefined",
            "support.function": "alert",
            "constant.language.boolean": "true|false"
        }, "identifier")
          , r = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void"
          , s = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
        this.$rules = {
            no_regex: [o.getStartRule("doc-start"), n("no_regex"), {
                token: "string",
                regex: "'(?=.)",
                next: "qstring"
            }, {
                token: "string",
                regex: '"(?=.)',
                next: "qqstring"
            }, {
                token: "constant.numeric",
                regex: /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
            }, {
                token: "constant.numeric",
                regex: /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
            }, {
                token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"],
                regex: "(" + a + ")(\\.)(prototype)(\\.)(" + a + ")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(function)(\\s+)(" + a + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["text", "text", "storage.type", "text", "paren.lparen"],
                regex: "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: "keyword",
                regex: "(?:" + r + ")\\b",
                next: "start"
            }, {
                token: ["support.constant"],
                regex: /that\b/
            }, {
                token: ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token: t,
                regex: a
            }, {
                token: "punctuation.operator",
                regex: /[.](?![.])/,
                next: "property"
            }, {
                token: "keyword.operator",
                regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next: "start"
            }, {
                token: "punctuation.operator",
                regex: /[?:,;.]/,
                next: "start"
            }, {
                token: "paren.lparen",
                regex: /[\[({]/,
                next: "start"
            }, {
                token: "paren.rparen",
                regex: /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }],
            property: [{
                token: "text",
                regex: "\\s+"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: "punctuation.operator",
                regex: /[.](?![.])/
            }, {
                token: "support.function",
                regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token: "support.function.dom",
                regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token: "support.constant",
                regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token: "identifier",
                regex: a
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }],
            start: [o.getStartRule("doc-start"), n("start"), {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token: "text",
                regex: "\\s+|^$",
                next: "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }],
            regex: [{
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token: "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token: "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token: "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }],
            regex_character_class: [{
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }],
            function_arguments: [{
                token: "variable.parameter",
                regex: a
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }],
            qqstring: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qqstring"
            }, {
                token: "string",
                regex: '"|$',
                next: "no_regex"
            }, {
                defaultToken: "string"
            }],
            qstring: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qstring"
            }, {
                token: "string",
                regex: "'|$",
                next: "no_regex"
            }, {
                defaultToken: "string"
            }]
        },
        e && e.noES6 || (this.$rules.no_regex.unshift({
            regex: "[{}]",
            onMatch: function(e, t, i) {
                if (this.next = "{" == e ? this.nextState : "",
                "{" == e && i.length)
                    i.unshift("start", t);
                else if ("}" == e && i.length && (i.shift(),
                this.next = i.shift(),
                -1 != this.next.indexOf("string") || -1 != this.next.indexOf("jsx")))
                    return "paren.quasi.end";
                return "{" == e ? "paren.lparen" : "paren.rparen"
            },
            nextState: "start"
        }, {
            token: "string.quasi.start",
            regex: /`/,
            push: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "paren.quasi.start",
                regex: /\${/,
                push: "start"
            }, {
                token: "string.quasi.end",
                regex: /`/,
                next: "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        }),
        (!e || 0 != e.jsx) && i.call(this)),
        this.embedRules(o, "doc-", [o.getEndRule("no_regex")]),
        this.normalizeRules()
    };
    r.inherits(l, s),
    t.JavaScriptHighlightRules = l
}),
define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var i = e("../range").Range
      , n = function() {};
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
        }
        ,
        this.autoOutdent = function(e, t) {
            var n = e.getLine(t)
              , r = n.match(/^(\s*\})/);
            if (!r)
                return 0;
            var o = r[1].length
              , s = e.findMatchingBracket({
                row: t,
                column: o
            });
            if (!s || s.row == t)
                return 0;
            var a = this.$getIndent(e.getLine(s.row));
            e.replace(new i(t,0,t,o - 1), a)
        }
        ,
        this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
    }
    ).call(n.prototype),
    t.MatchingBraceOutdent = n
}),
define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = e("../../range").Range
      , r = e("./fold_mode").FoldMode
      , o = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)),
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)))
    }
    ;
    i.inherits(o, r),
    function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/,
        this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/,
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/,
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/,
        this._getFoldWidgetBase = this.getFoldWidget,
        this.getFoldWidget = function(e, t, i) {
            var n = e.getLine(i);
            if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n))
                return "";
            var r = this._getFoldWidgetBase(e, t, i);
            return !r && this.startRegionRe.test(n) ? "start" : r
        }
        ,
        this.getFoldWidgetRange = function(e, t, i, n) {
            var r = e.getLine(i);
            if (this.startRegionRe.test(r))
                return this.getCommentRegionBlock(e, r, i);
            var o = r.match(this.foldingStartMarker);
            if (o) {
                var s = o.index;
                if (o[1])
                    return this.openingBracketBlock(e, o[1], i, s);
                var a = e.getCommentFoldRange(i, s + o[0].length, 1);
                return a && !a.isMultiLine() && (n ? a = this.getSectionRange(e, i) : "all" != t && (a = null)),
                a
            }
            if ("markbegin" !== t) {
                var o = r.match(this.foldingStopMarker);
                if (o) {
                    var s = o.index + o[0].length;
                    return o[1] ? this.closingBracketBlock(e, o[1], i, s) : e.getCommentFoldRange(i, s, -1)
                }
            }
        }
        ,
        this.getSectionRange = function(e, t) {
            var i = e.getLine(t)
              , r = i.search(/\S/)
              , o = t
              , s = i.length;
            t += 1;
            for (var a = t, l = e.getLength(); ++t < l; ) {
                i = e.getLine(t);
                var c = i.search(/\S/);
                if (-1 !== c) {
                    if (r > c)
                        break;
                    var h = this.getFoldWidgetRange(e, "all", t);
                    if (h) {
                        if (h.start.row <= o)
                            break;
                        if (h.isMultiLine())
                            t = h.end.row;
                        else if (r == c)
                            break
                    }
                    a = t
                }
            }
            return new n(o,s,a,e.getLine(a).length)
        }
        ,
        this.getCommentRegionBlock = function(e, t, i) {
            for (var r = t.search(/\s*$/), o = e.getLength(), s = i, a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, l = 1; ++i < o; ) {
                t = e.getLine(i);
                var c = a.exec(t);
                if (c && (c[1] ? l-- : l++,
                !l))
                    break
            }
            var h = i;
            return h > s ? new n(s,r,h,t.length) : void 0
        }
    }
    .call(o.prototype)
}),
define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text").Mode
      , r = e("./javascript_highlight_rules").JavaScriptHighlightRules
      , o = e("./matching_brace_outdent").MatchingBraceOutdent
      , s = (e("../range").Range,
    e("../worker/worker_client").WorkerClient)
      , a = e("./behaviour/cstyle").CstyleBehaviour
      , l = e("./folding/cstyle").FoldMode
      , c = function() {
        this.HighlightRules = r,
        this.$outdent = new o,
        this.$behaviour = new a,
        this.foldingRules = new l
    };
    i.inherits(c, n),
    function() {
        this.lineCommentStart = "//",
        this.blockComment = {
            start: "/*",
            end: "*/"
        },
        this.getNextLineIndent = function(e, t, i) {
            var n = this.$getIndent(t)
              , r = this.getTokenizer().getLineTokens(t, e)
              , o = r.tokens
              , s = r.state;
            if (o.length && "comment" == o[o.length - 1].type)
                return n;
            if ("start" == e || "no_regex" == e) {
                var a = t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
                a && (n += i)
            } else if ("doc-start" == e) {
                if ("start" == s || "no_regex" == s)
                    return "";
                var a = t.match(/^\s*(\/?)\*/);
                a && (a[1] && (n += " "),
                n += "* ")
            }
            return n
        }
        ,
        this.checkOutdent = function(e, t, i) {
            return this.$outdent.checkOutdent(t, i)
        }
        ,
        this.autoOutdent = function(e, t, i) {
            this.$outdent.autoOutdent(t, i)
        }
        ,
        this.createWorker = function(e) {
            var t = new s(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");
            return t.attachToDocument(e.getDocument()),
            t.on("annotate", function(t) {
                e.setAnnotations(t.data)
            }),
            t.on("terminate", function() {
                e.clearAnnotations()
            }),
            t
        }
        ,
        this.$id = "ace/mode/javascript"
    }
    .call(c.prototype),
    t.Mode = c
}),
define("ace/mode/doc_comment_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text_highlight_rules").TextHighlightRules
      , r = function() {
        this.$rules = {
            start: [{
                token: "comment.doc.tag",
                regex: "@[\\w\\d_]+"
            }, r.getTagRule(), {
                defaultToken: "comment.doc",
                caseInsensitive: !0
            }]
        }
    };
    i.inherits(r, n),
    r.getTagRule = function() {
        return {
            token: "comment.doc.tag.storage.type",
            regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b"
        }
    }
    ,
    r.getStartRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\/\\*(?=\\*)",
            next: e
        }
    }
    ,
    r.getEndRule = function(e) {
        return {
            token: "comment.doc",
            regex: "\\*\\/",
            next: e
        }
    }
    ,
    t.DocCommentHighlightRules = r
}),
define("ace/mode/javascript_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/doc_comment_highlight_rules", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    function i() {
        var e = a.replace("\\d", "\\d\\-")
          , t = {
            onMatch: function(e, t, i) {
                var n = "/" == e.charAt(1) ? 2 : 1;
                return 1 == n ? (t != this.nextState ? i.unshift(this.next, this.nextState, 0) : i.unshift(this.next),
                i[2]++) : 2 == n && t == this.nextState && (i[1]--,
                (!i[1] || i[1] < 0) && (i.shift(),
                i.shift())),
                [{
                    type: "meta.tag.punctuation." + (1 == n ? "" : "end-") + "tag-open.xml",
                    value: e.slice(0, n)
                }, {
                    type: "meta.tag.tag-name.xml",
                    value: e.substr(n)
                }]
            },
            regex: "</?" + e,
            next: "jsxAttributes",
            nextState: "jsx"
        };
        this.$rules.start.unshift(t);
        var i = {
            regex: "{",
            token: "paren.quasi.start",
            push: "start"
        };
        this.$rules.jsx = [i, t, {
            include: "reference"
        }, {
            defaultToken: "string"
        }],
        this.$rules.jsxAttributes = [{
            token: "meta.tag.punctuation.tag-close.xml",
            regex: "/?>",
            onMatch: function(e, t, i) {
                return t == i[0] && i.shift(),
                2 == e.length && (i[0] == this.nextState && i[1]--,
                (!i[1] || i[1] < 0) && i.splice(0, 2)),
                this.next = i[0] || "start",
                [{
                    type: this.token,
                    value: e
                }]
            },
            nextState: "jsx"
        }, i, n("jsxAttributes"), {
            token: "entity.other.attribute-name.xml",
            regex: e
        }, {
            token: "keyword.operator.attribute-equals.xml",
            regex: "="
        }, {
            token: "text.tag-whitespace.xml",
            regex: "\\s+"
        }, {
            token: "string.attribute-value.xml",
            regex: "'",
            stateName: "jsx_attr_q",
            push: [{
                token: "string.attribute-value.xml",
                regex: "'",
                next: "pop"
            }, {
                include: "reference"
            }, {
                defaultToken: "string.attribute-value.xml"
            }]
        }, {
            token: "string.attribute-value.xml",
            regex: '"',
            stateName: "jsx_attr_qq",
            push: [{
                token: "string.attribute-value.xml",
                regex: '"',
                next: "pop"
            }, {
                include: "reference"
            }, {
                defaultToken: "string.attribute-value.xml"
            }]
        }, t],
        this.$rules.reference = [{
            token: "constant.language.escape.reference.xml",
            regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
        }]
    }
    function n(e) {
        return [{
            token: "comment",
            regex: /\/\*/,
            next: [o.getTagRule(), {
                token: "comment",
                regex: "\\*\\/",
                next: e || "pop"
            }, {
                defaultToken: "comment",
                caseInsensitive: !0
            }]
        }, {
            token: "comment",
            regex: "\\/\\/",
            next: [o.getTagRule(), {
                token: "comment",
                regex: "$|^",
                next: e || "pop"
            }, {
                defaultToken: "comment",
                caseInsensitive: !0
            }]
        }]
    }
    var r = e("../lib/oop")
      , o = e("./doc_comment_highlight_rules").DocCommentHighlightRules
      , s = e("./text_highlight_rules").TextHighlightRules
      , a = "[a-zA-Z\\$_\xa1-\uffff][a-zA-Z\\d\\$_\xa1-\uffff]*"
      , l = function(e) {
        var t = this.createKeywordMapper({
            "variable.language": "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document",
            keyword: "const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
            "storage.type": "const|let|var|function",
            "constant.language": "null|Infinity|NaN|undefined",
            "support.function": "alert",
            "constant.language.boolean": "true|false"
        }, "identifier")
          , r = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void"
          , s = "\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)";
        this.$rules = {
            no_regex: [o.getStartRule("doc-start"), n("no_regex"), {
                token: "string",
                regex: "'(?=.)",
                next: "qstring"
            }, {
                token: "string",
                regex: '"(?=.)',
                next: "qqstring"
            }, {
                token: "constant.numeric",
                regex: /0(?:[xX][0-9a-fA-F]+|[bB][01]+)\b/
            }, {
                token: "constant.numeric",
                regex: /[+-]?\d[\d_]*(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/
            }, {
                token: ["storage.type", "punctuation.operator", "support.function", "punctuation.operator", "entity.name.function", "text", "keyword.operator"],
                regex: "(" + a + ")(\\.)(prototype)(\\.)(" + a + ")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(function)(\\s+)(" + a + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["entity.name.function", "text", "punctuation.operator", "text", "storage.type", "text", "paren.lparen"],
                regex: "(" + a + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: ["text", "text", "storage.type", "text", "paren.lparen"],
                regex: "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: "keyword",
                regex: "(?:" + r + ")\\b",
                next: "start"
            }, {
                token: ["support.constant"],
                regex: /that\b/
            }, {
                token: ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token: t,
                regex: a
            }, {
                token: "punctuation.operator",
                regex: /[.](?![.])/,
                next: "property"
            }, {
                token: "keyword.operator",
                regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next: "start"
            }, {
                token: "punctuation.operator",
                regex: /[?:,;.]/,
                next: "start"
            }, {
                token: "paren.lparen",
                regex: /[\[({]/,
                next: "start"
            }, {
                token: "paren.rparen",
                regex: /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }],
            property: [{
                token: "text",
                regex: "\\s+"
            }, {
                token: ["storage.type", "punctuation.operator", "entity.name.function", "text", "keyword.operator", "text", "storage.type", "text", "entity.name.function", "text", "paren.lparen"],
                regex: "(" + a + ")(\\.)(" + a + ")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token: "punctuation.operator",
                regex: /[.](?![.])/
            }, {
                token: "support.function",
                regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token: "support.function.dom",
                regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token: "support.constant",
                regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token: "identifier",
                regex: a
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }],
            start: [o.getStartRule("doc-start"), n("start"), {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token: "text",
                regex: "\\s+|^$",
                next: "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }],
            regex: [{
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token: "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token: "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token: "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }],
            regex_character_class: [{
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }],
            function_arguments: [{
                token: "variable.parameter",
                regex: a
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }],
            qqstring: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qqstring"
            }, {
                token: "string",
                regex: '"|$',
                next: "no_regex"
            }, {
                defaultToken: "string"
            }],
            qstring: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "string",
                regex: "\\\\$",
                next: "qstring"
            }, {
                token: "string",
                regex: "'|$",
                next: "no_regex"
            }, {
                defaultToken: "string"
            }]
        },
        e && e.noES6 || (this.$rules.no_regex.unshift({
            regex: "[{}]",
            onMatch: function(e, t, i) {
                if (this.next = "{" == e ? this.nextState : "",
                "{" == e && i.length)
                    i.unshift("start", t);
                else if ("}" == e && i.length && (i.shift(),
                this.next = i.shift(),
                -1 != this.next.indexOf("string") || -1 != this.next.indexOf("jsx")))
                    return "paren.quasi.end";
                return "{" == e ? "paren.lparen" : "paren.rparen"
            },
            nextState: "start"
        }, {
            token: "string.quasi.start",
            regex: /`/,
            push: [{
                token: "constant.language.escape",
                regex: s
            }, {
                token: "paren.quasi.start",
                regex: /\${/,
                push: "start"
            }, {
                token: "string.quasi.end",
                regex: /`/,
                next: "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        }),
        (!e || 0 != e.jsx) && i.call(this)),
        this.embedRules(o, "doc-", [o.getEndRule("no_regex")]),
        this.normalizeRules()
    };
    r.inherits(l, s),
    t.JavaScriptHighlightRules = l
}),
define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var i = e("../range").Range
      , n = function() {};
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
        }
        ,
        this.autoOutdent = function(e, t) {
            var n = e.getLine(t)
              , r = n.match(/^(\s*\})/);
            if (!r)
                return 0;
            var o = r[1].length
              , s = e.findMatchingBracket({
                row: t,
                column: o
            });
            if (!s || s.row == t)
                return 0;
            var a = this.$getIndent(e.getLine(s.row));
            e.replace(new i(t,0,t,o - 1), a)
        }
        ,
        this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
    }
    ).call(n.prototype),
    t.MatchingBraceOutdent = n
}),
define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = e("../../range").Range
      , r = e("./fold_mode").FoldMode
      , o = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)),
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)))
    }
    ;
    i.inherits(o, r),
    function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/,
        this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/,
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/,
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/,
        this._getFoldWidgetBase = this.getFoldWidget,
        this.getFoldWidget = function(e, t, i) {
            var n = e.getLine(i);
            if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n))
                return "";
            var r = this._getFoldWidgetBase(e, t, i);
            return !r && this.startRegionRe.test(n) ? "start" : r
        }
        ,
        this.getFoldWidgetRange = function(e, t, i, n) {
            var r = e.getLine(i);
            if (this.startRegionRe.test(r))
                return this.getCommentRegionBlock(e, r, i);
            var o = r.match(this.foldingStartMarker);
            if (o) {
                var s = o.index;
                if (o[1])
                    return this.openingBracketBlock(e, o[1], i, s);
                var a = e.getCommentFoldRange(i, s + o[0].length, 1);
                return a && !a.isMultiLine() && (n ? a = this.getSectionRange(e, i) : "all" != t && (a = null)),
                a
            }
            if ("markbegin" !== t) {
                var o = r.match(this.foldingStopMarker);
                if (o) {
                    var s = o.index + o[0].length;
                    return o[1] ? this.closingBracketBlock(e, o[1], i, s) : e.getCommentFoldRange(i, s, -1)
                }
            }
        }
        ,
        this.getSectionRange = function(e, t) {
            var i = e.getLine(t)
              , r = i.search(/\S/)
              , o = t
              , s = i.length;
            t += 1;
            for (var a = t, l = e.getLength(); ++t < l; ) {
                i = e.getLine(t);
                var c = i.search(/\S/);
                if (-1 !== c) {
                    if (r > c)
                        break;
                    var h = this.getFoldWidgetRange(e, "all", t);
                    if (h) {
                        if (h.start.row <= o)
                            break;
                        if (h.isMultiLine())
                            t = h.end.row;
                        else if (r == c)
                            break
                    }
                    a = t
                }
            }
            return new n(o,s,a,e.getLine(a).length)
        }
        ,
        this.getCommentRegionBlock = function(e, t, i) {
            for (var r = t.search(/\s*$/), o = e.getLength(), s = i, a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, l = 1; ++i < o; ) {
                t = e.getLine(i);
                var c = a.exec(t);
                if (c && (c[1] ? l-- : l++,
                !l))
                    break
            }
            var h = i;
            return h > s ? new n(s,r,h,t.length) : void 0
        }
    }
    .call(o.prototype)
}),
define("ace/mode/javascript", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/javascript_highlight_rules", "ace/mode/matching_brace_outdent", "ace/range", "ace/worker/worker_client", "ace/mode/behaviour/cstyle", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text").Mode
      , r = e("./javascript_highlight_rules").JavaScriptHighlightRules
      , o = e("./matching_brace_outdent").MatchingBraceOutdent
      , s = (e("../range").Range,
    e("../worker/worker_client").WorkerClient)
      , a = e("./behaviour/cstyle").CstyleBehaviour
      , l = e("./folding/cstyle").FoldMode
      , c = function() {
        this.HighlightRules = r,
        this.$outdent = new o,
        this.$behaviour = new a,
        this.foldingRules = new l
    };
    i.inherits(c, n),
    function() {
        this.lineCommentStart = "//",
        this.blockComment = {
            start: "/*",
            end: "*/"
        },
        this.getNextLineIndent = function(e, t, i) {
            var n = this.$getIndent(t)
              , r = this.getTokenizer().getLineTokens(t, e)
              , o = r.tokens
              , s = r.state;
            if (o.length && "comment" == o[o.length - 1].type)
                return n;
            if ("start" == e || "no_regex" == e) {
                var a = t.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
                a && (n += i)
            } else if ("doc-start" == e) {
                if ("start" == s || "no_regex" == s)
                    return "";
                var a = t.match(/^\s*(\/?)\*/);
                a && (a[1] && (n += " "),
                n += "* ")
            }
            return n
        }
        ,
        this.checkOutdent = function(e, t, i) {
            return this.$outdent.checkOutdent(t, i)
        }
        ,
        this.autoOutdent = function(e, t, i) {
            this.$outdent.autoOutdent(t, i)
        }
        ,
        this.createWorker = function(e) {
            var t = new s(["ace"],"ace/mode/javascript_worker","JavaScriptWorker");
            return t.attachToDocument(e.getDocument()),
            t.on("annotate", function(t) {
                e.setAnnotations(t.data)
            }),
            t.on("terminate", function() {
                e.clearAnnotations()
            }),
            t
        }
        ,
        this.$id = "ace/mode/javascript"
    }
    .call(c.prototype),
    t.Mode = c
}),
define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = (e("../lib/lang"),
    e("./text_highlight_rules").TextHighlightRules)
      , r = t.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index"
      , o = t.supportFunction = "rgb|rgba|url|attr|counter|counters"
      , s = t.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero"
      , a = t.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow"
      , l = t.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace"
      , c = t.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))"
      , h = t.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b"
      , d = t.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b"
      , u = function() {
        var e = this.createKeywordMapper({
            "support.function": o,
            "support.constant": s,
            "support.type": r,
            "support.constant.color": a,
            "support.constant.fonts": l
        }, "text", !0);
        this.$rules = {
            start: [{
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "paren.lparen",
                regex: "\\{",
                push: "ruleset"
            }, {
                token: "string",
                regex: "@.*?{",
                push: "media"
            }, {
                token: "keyword",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "string",
                regex: ":[a-z0-9-_]+"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                caseInsensitive: !0
            }],
            media: [{
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "paren.lparen",
                regex: "\\{",
                push: "ruleset"
            }, {
                token: "string",
                regex: "\\}",
                next: "pop"
            }, {
                token: "keyword",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "string",
                regex: ":[a-z0-9-_]+"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                caseInsensitive: !0
            }],
            comment: [{
                token: "comment",
                regex: "\\*\\/",
                next: "pop"
            }, {
                defaultToken: "comment"
            }],
            ruleset: [{
                token: "paren.rparen",
                regex: "\\}",
                next: "pop"
            }, {
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token: "string",
                regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token: ["constant.numeric", "keyword"],
                regex: "(" + c + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
            }, {
                token: "constant.numeric",
                regex: c
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{6}"
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{3}"
            }, {
                token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
                regex: h
            }, {
                token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
                regex: d
            }, {
                token: ["support.function", "string", "support.function"],
                regex: "(url\\()(.*)(\\))"
            }, {
                token: e,
                regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
            }, {
                caseInsensitive: !0
            }]
        },
        this.normalizeRules()
    };
    i.inherits(u, n),
    t.CssHighlightRules = u
}),
define("ace/mode/css_completions", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = {
        background: {
            "#$0": 1
        },
        "background-color": {
            "#$0": 1,
            transparent: 1,
            fixed: 1
        },
        "background-image": {
            "url('/$0')": 1
        },
        "background-repeat": {
            repeat: 1,
            "repeat-x": 1,
            "repeat-y": 1,
            "no-repeat": 1,
            inherit: 1
        },
        "background-position": {
            bottom: 2,
            center: 2,
            left: 2,
            right: 2,
            top: 2,
            inherit: 2
        },
        "background-attachment": {
            scroll: 1,
            fixed: 1
        },
        "background-size": {
            cover: 1,
            contain: 1
        },
        "background-clip": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
        },
        "background-origin": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
        },
        border: {
            "solid $0": 1,
            "dashed $0": 1,
            "dotted $0": 1,
            "#$0": 1
        },
        "border-color": {
            "#$0": 1
        },
        "border-style": {
            solid: 2,
            dashed: 2,
            dotted: 2,
            "double": 2,
            groove: 2,
            hidden: 2,
            inherit: 2,
            inset: 2,
            none: 2,
            outset: 2,
            ridged: 2
        },
        "border-collapse": {
            collapse: 1,
            separate: 1
        },
        bottom: {
            px: 1,
            em: 1,
            "%": 1
        },
        clear: {
            left: 1,
            right: 1,
            both: 1,
            none: 1
        },
        color: {
            "#$0": 1,
            "rgb(#$00,0,0)": 1
        },
        cursor: {
            "default": 1,
            pointer: 1,
            move: 1,
            text: 1,
            wait: 1,
            help: 1,
            progress: 1,
            "n-resize": 1,
            "ne-resize": 1,
            "e-resize": 1,
            "se-resize": 1,
            "s-resize": 1,
            "sw-resize": 1,
            "w-resize": 1,
            "nw-resize": 1
        },
        display: {
            none: 1,
            block: 1,
            inline: 1,
            "inline-block": 1,
            "table-cell": 1
        },
        "empty-cells": {
            show: 1,
            hide: 1
        },
        "float": {
            left: 1,
            right: 1,
            none: 1
        },
        "font-family": {
            Arial: 2,
            "Comic Sans MS": 2,
            Consolas: 2,
            "Courier New": 2,
            Courier: 2,
            Georgia: 2,
            Monospace: 2,
            "Sans-Serif": 2,
            "Segoe UI": 2,
            Tahoma: 2,
            "Times New Roman": 2,
            "Trebuchet MS": 2,
            Verdana: 1
        },
        "font-size": {
            px: 1,
            em: 1,
            "%": 1
        },
        "font-weight": {
            bold: 1,
            normal: 1
        },
        "font-style": {
            italic: 1,
            normal: 1
        },
        "font-variant": {
            normal: 1,
            "small-caps": 1
        },
        height: {
            px: 1,
            em: 1,
            "%": 1
        },
        left: {
            px: 1,
            em: 1,
            "%": 1
        },
        "letter-spacing": {
            normal: 1
        },
        "line-height": {
            normal: 1
        },
        "list-style-type": {
            none: 1,
            disc: 1,
            circle: 1,
            square: 1,
            decimal: 1,
            "decimal-leading-zero": 1,
            "lower-roman": 1,
            "upper-roman": 1,
            "lower-greek": 1,
            "lower-latin": 1,
            "upper-latin": 1,
            georgian: 1,
            "lower-alpha": 1,
            "upper-alpha": 1
        },
        margin: {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-right": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-left": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-top": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-bottom": {
            px: 1,
            em: 1,
            "%": 1
        },
        "max-height": {
            px: 1,
            em: 1,
            "%": 1
        },
        "max-width": {
            px: 1,
            em: 1,
            "%": 1
        },
        "min-height": {
            px: 1,
            em: 1,
            "%": 1
        },
        "min-width": {
            px: 1,
            em: 1,
            "%": 1
        },
        overflow: {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        "overflow-x": {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        "overflow-y": {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        padding: {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-top": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-right": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-bottom": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-left": {
            px: 1,
            em: 1,
            "%": 1
        },
        "page-break-after": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
        },
        "page-break-before": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
        },
        position: {
            absolute: 1,
            relative: 1,
            fixed: 1,
            "static": 1
        },
        right: {
            px: 1,
            em: 1,
            "%": 1
        },
        "table-layout": {
            fixed: 1,
            auto: 1
        },
        "text-decoration": {
            none: 1,
            underline: 1,
            "line-through": 1,
            blink: 1
        },
        "text-align": {
            left: 1,
            right: 1,
            center: 1,
            justify: 1
        },
        "text-transform": {
            capitalize: 1,
            uppercase: 1,
            lowercase: 1,
            none: 1
        },
        top: {
            px: 1,
            em: 1,
            "%": 1
        },
        "vertical-align": {
            top: 1,
            bottom: 1
        },
        visibility: {
            hidden: 1,
            visible: 1
        },
        "white-space": {
            nowrap: 1,
            normal: 1,
            pre: 1,
            "pre-line": 1,
            "pre-wrap": 1
        },
        width: {
            px: 1,
            em: 1,
            "%": 1
        },
        "word-spacing": {
            normal: 1
        },
        filter: {
            "alpha(opacity=$0100)": 1
        },
        "text-shadow": {
            "$02px 2px 2px #777": 1
        },
        "text-overflow": {
            "ellipsis-word": 1,
            clip: 1,
            ellipsis: 1
        },
        "-moz-border-radius": 1,
        "-moz-border-radius-topright": 1,
        "-moz-border-radius-bottomright": 1,
        "-moz-border-radius-topleft": 1,
        "-moz-border-radius-bottomleft": 1,
        "-webkit-border-radius": 1,
        "-webkit-border-top-right-radius": 1,
        "-webkit-border-top-left-radius": 1,
        "-webkit-border-bottom-right-radius": 1,
        "-webkit-border-bottom-left-radius": 1,
        "-moz-box-shadow": 1,
        "-webkit-box-shadow": 1,
        transform: {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        },
        "-moz-transform": {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        },
        "-webkit-transform": {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        }
    }
      , n = function() {};
    (function() {
        this.completionsDefined = !1,
        this.defineCompletions = function() {
            if (document) {
                var e = document.createElement("c").style;
                for (var t in e)
                    if ("string" == typeof e[t]) {
                        var n = t.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                        i.hasOwnProperty(n) || (i[n] = 1)
                    }
            }
            this.completionsDefined = !0
        }
        ,
        this.getCompletions = function(e, t, i, n) {
            this.completionsDefined || this.defineCompletions();
            var r = t.getTokenAt(i.row, i.column);
            if (!r)
                return [];
            if ("ruleset" === e) {
                var o = t.getLine(i.row).substr(0, i.column);
                return /:[^;]+$/.test(o) ? (/([\w\-]+):[^:]*$/.test(o),
                this.getPropertyValueCompletions(e, t, i, n)) : this.getPropertyCompletions(e, t, i, n)
            }
            return []
        }
        ,
        this.getPropertyCompletions = function() {
            var e = Object.keys(i);
            return e.map(function(e) {
                return {
                    caption: e,
                    snippet: e + ": $0",
                    meta: "property",
                    score: Number.MAX_VALUE
                }
            })
        }
        ,
        this.getPropertyValueCompletions = function(e, t, n) {
            var r = t.getLine(n.row).substr(0, n.column)
              , o = (/([\w\-]+):[^:]*$/.exec(r) || {})[1];
            if (!o)
                return [];
            var s = [];
            return o in i && "object" == typeof i[o] && (s = Object.keys(i[o])),
            s.map(function(e) {
                return {
                    caption: e,
                    snippet: e,
                    meta: "property value",
                    score: Number.MAX_VALUE
                }
            })
        }
    }
    ).call(n.prototype),
    t.CssCompletions = n
}),
define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = (e("../behaviour").Behaviour,
    e("./cstyle").CstyleBehaviour)
      , r = e("../../token_iterator").TokenIterator
      , o = function() {
        this.inherit(n),
        this.add("colon", "insertion", function(e, t, i, n, o) {
            if (":" === o) {
                var s = i.getCursorPosition()
                  , a = new r(n,s.row,s.column)
                  , l = a.getCurrentToken();
                if (l && l.value.match(/\s+/) && (l = a.stepBackward()),
                l && "support.type" === l.type) {
                    var c = n.doc.getLine(s.row)
                      , h = c.substring(s.column, s.column + 1);
                    if (":" === h)
                        return {
                            text: "",
                            selection: [1, 1]
                        };
                    if (!c.substring(s.column).match(/^\s*;/))
                        return {
                            text: ":;",
                            selection: [1, 1]
                        }
                }
            }
        }),
        this.add("colon", "deletion", function(e, t, i, n, o) {
            var s = n.doc.getTextRange(o);
            if (!o.isMultiLine() && ":" === s) {
                var a = i.getCursorPosition()
                  , l = new r(n,a.row,a.column)
                  , c = l.getCurrentToken();
                if (c && c.value.match(/\s+/) && (c = l.stepBackward()),
                c && "support.type" === c.type) {
                    var h = n.doc.getLine(o.start.row)
                      , d = h.substring(o.end.column, o.end.column + 1);
                    if (";" === d)
                        return o.end.column++,
                        o
                }
            }
        }),
        this.add("semicolon", "insertion", function(e, t, i, n, r) {
            if (";" === r) {
                var o = i.getCursorPosition()
                  , s = n.doc.getLine(o.row)
                  , a = s.substring(o.column, o.column + 1);
                if (";" === a)
                    return {
                        text: "",
                        selection: [1, 1]
                    }
            }
        })
    };
    i.inherits(o, n),
    t.CssBehaviour = o
}),
define("ace/mode/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/css_highlight_rules", "ace/mode/matching_brace_outdent", "ace/worker/worker_client", "ace/mode/css_completions", "ace/mode/behaviour/css", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text").Mode
      , r = e("./css_highlight_rules").CssHighlightRules
      , o = e("./matching_brace_outdent").MatchingBraceOutdent
      , s = e("../worker/worker_client").WorkerClient
      , a = e("./css_completions").CssCompletions
      , l = e("./behaviour/css").CssBehaviour
      , c = e("./folding/cstyle").FoldMode
      , h = function() {
        this.HighlightRules = r,
        this.$outdent = new o,
        this.$behaviour = new l,
        this.$completer = new a,
        this.foldingRules = new c
    };
    i.inherits(h, n),
    function() {
        this.foldingRules = "cStyle",
        this.blockComment = {
            start: "/*",
            end: "*/"
        },
        this.getNextLineIndent = function(e, t, i) {
            var n = this.$getIndent(t)
              , r = this.getTokenizer().getLineTokens(t, e).tokens;
            if (r.length && "comment" == r[r.length - 1].type)
                return n;
            var o = t.match(/^.*\{\s*$/);
            return o && (n += i),
            n
        }
        ,
        this.checkOutdent = function(e, t, i) {
            return this.$outdent.checkOutdent(t, i)
        }
        ,
        this.autoOutdent = function(e, t, i) {
            this.$outdent.autoOutdent(t, i)
        }
        ,
        this.getCompletions = function(e, t, i, n) {
            return this.$completer.getCompletions(e, t, i, n)
        }
        ,
        this.createWorker = function(e) {
            var t = new s(["ace"],"ace/mode/css_worker","Worker");
            return t.attachToDocument(e.getDocument()),
            t.on("annotate", function(t) {
                e.setAnnotations(t.data)
            }),
            t.on("terminate", function() {
                e.clearAnnotations()
            }),
            t
        }
        ,
        this.$id = "ace/mode/css"
    }
    .call(h.prototype),
    t.Mode = h
}),
define("ace/mode/xml_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text_highlight_rules").TextHighlightRules
      , r = function() {
        var e = "[_:a-zA-Z\xc0-\uffff][-_:.a-zA-Z0-9\xc0-\uffff]*";
        this.$rules = {
            start: [{
                token: "string.cdata.xml",
                regex: "<\\!\\[CDATA\\[",
                next: "cdata"
            }, {
                token: ["punctuation.xml-decl.xml", "keyword.xml-decl.xml"],
                regex: "(<\\?)(xml)(?=[\\s])",
                next: "xml_decl",
                caseInsensitive: !0
            }, {
                token: ["punctuation.instruction.xml", "keyword.instruction.xml"],
                regex: "(<\\?)(" + e + ")",
                next: "processing_instruction"
            }, {
                token: "comment.xml",
                regex: "<\\!--",
                next: "comment"
            }, {
                token: ["xml-pe.doctype.xml", "xml-pe.doctype.xml"],
                regex: "(<\\!)(DOCTYPE)(?=[\\s])",
                next: "doctype",
                caseInsensitive: !0
            }, {
                include: "tag"
            }, {
                token: "text.end-tag-open.xml",
                regex: "</"
            }, {
                token: "text.tag-open.xml",
                regex: "<"
            }, {
                include: "reference"
            }, {
                defaultToken: "text.xml"
            }],
            xml_decl: [{
                token: "entity.other.attribute-name.decl-attribute-name.xml",
                regex: "(?:" + e + ":)?" + e
            }, {
                token: "keyword.operator.decl-attribute-equals.xml",
                regex: "="
            }, {
                include: "whitespace"
            }, {
                include: "string"
            }, {
                token: "punctuation.xml-decl.xml",
                regex: "\\?>",
                next: "start"
            }],
            processing_instruction: [{
                token: "punctuation.instruction.xml",
                regex: "\\?>",
                next: "start"
            }, {
                defaultToken: "instruction.xml"
            }],
            doctype: [{
                include: "whitespace"
            }, {
                include: "string"
            }, {
                token: "xml-pe.doctype.xml",
                regex: ">",
                next: "start"
            }, {
                token: "xml-pe.xml",
                regex: "[-_a-zA-Z0-9:]+"
            }, {
                token: "punctuation.int-subset",
                regex: "\\[",
                push: "int_subset"
            }],
            int_subset: [{
                token: "text.xml",
                regex: "\\s+"
            }, {
                token: "punctuation.int-subset.xml",
                regex: "]",
                next: "pop"
            }, {
                token: ["punctuation.markup-decl.xml", "keyword.markup-decl.xml"],
                regex: "(<\\!)(" + e + ")",
                push: [{
                    token: "text",
                    regex: "\\s+"
                }, {
                    token: "punctuation.markup-decl.xml",
                    regex: ">",
                    next: "pop"
                }, {
                    include: "string"
                }]
            }],
            cdata: [{
                token: "string.cdata.xml",
                regex: "\\]\\]>",
                next: "start"
            }, {
                token: "text.xml",
                regex: "\\s+"
            }, {
                token: "text.xml",
                regex: "(?:[^\\]]|\\](?!\\]>))+"
            }],
            comment: [{
                token: "comment.xml",
                regex: "-->",
                next: "start"
            }, {
                defaultToken: "comment.xml"
            }],
            reference: [{
                token: "constant.language.escape.reference.xml",
                regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
            }],
            attr_reference: [{
                token: "constant.language.escape.reference.attribute-value.xml",
                regex: "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
            }],
            tag: [{
                token: ["meta.tag.punctuation.tag-open.xml", "meta.tag.punctuation.end-tag-open.xml", "meta.tag.tag-name.xml"],
                regex: "(?:(<)|(</))((?:" + e + ":)?" + e + ")",
                next: [{
                    include: "attributes"
                }, {
                    token: "meta.tag.punctuation.tag-close.xml",
                    regex: "/?>",
                    next: "start"
                }]
            }],
            tag_whitespace: [{
                token: "text.tag-whitespace.xml",
                regex: "\\s+"
            }],
            whitespace: [{
                token: "text.whitespace.xml",
                regex: "\\s+"
            }],
            string: [{
                token: "string.xml",
                regex: "'",
                push: [{
                    token: "string.xml",
                    regex: "'",
                    next: "pop"
                }, {
                    defaultToken: "string.xml"
                }]
            }, {
                token: "string.xml",
                regex: '"',
                push: [{
                    token: "string.xml",
                    regex: '"',
                    next: "pop"
                }, {
                    defaultToken: "string.xml"
                }]
            }],
            attributes: [{
                token: "entity.other.attribute-name.xml",
                regex: "(?:" + e + ":)?" + e
            }, {
                token: "keyword.operator.attribute-equals.xml",
                regex: "="
            }, {
                include: "tag_whitespace"
            }, {
                include: "attribute_value"
            }],
            attribute_value: [{
                token: "string.attribute-value.xml",
                regex: "'",
                push: [{
                    token: "string.attribute-value.xml",
                    regex: "'",
                    next: "pop"
                }, {
                    include: "attr_reference"
                }, {
                    defaultToken: "string.attribute-value.xml"
                }]
            }, {
                token: "string.attribute-value.xml",
                regex: '"',
                push: [{
                    token: "string.attribute-value.xml",
                    regex: '"',
                    next: "pop"
                }, {
                    include: "attr_reference"
                }, {
                    defaultToken: "string.attribute-value.xml"
                }]
            }]
        },
        this.constructor === r && this.normalizeRules()
    };
    (function() {
        this.embedTagRules = function(e, t, i) {
            this.$rules.tag.unshift({
                token: ["meta.tag.punctuation.tag-open.xml", "meta.tag." + i + ".tag-name.xml"],
                regex: "(<)(" + i + "(?=\\s|>|$))",
                next: [{
                    include: "attributes"
                }, {
                    token: "meta.tag.punctuation.tag-close.xml",
                    regex: "/?>",
                    next: t + "start"
                }]
            }),
            this.$rules[i + "-end"] = [{
                include: "attributes"
            }, {
                token: "meta.tag.punctuation.tag-close.xml",
                regex: "/?>",
                next: "start",
                onMatch: function(e, t, i) {
                    return i.splice(0),
                    this.token
                }
            }],
            this.embedRules(e, t, [{
                token: ["meta.tag.punctuation.end-tag-open.xml", "meta.tag." + i + ".tag-name.xml"],
                regex: "(</)(" + i + "(?=\\s|>|$))",
                next: i + "-end"
            }, {
                token: "string.cdata.xml",
                regex: "<\\!\\[CDATA\\["
            }, {
                token: "string.cdata.xml",
                regex: "\\]\\]>"
            }])
        }
    }
    ).call(n.prototype),
    i.inherits(r, n),
    t.XmlHighlightRules = r
}),
define("ace/mode/html_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/css_highlight_rules", "ace/mode/javascript_highlight_rules", "ace/mode/xml_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("../lib/lang")
      , r = e("./css_highlight_rules").CssHighlightRules
      , o = e("./javascript_highlight_rules").JavaScriptHighlightRules
      , s = e("./xml_highlight_rules").XmlHighlightRules
      , a = n.createMap({
        a: "anchor",
        button: "form",
        form: "form",
        img: "image",
        input: "form",
        label: "form",
        option: "form",
        script: "script",
        select: "form",
        textarea: "form",
        style: "style",
        table: "table",
        tbody: "table",
        td: "table",
        tfoot: "table",
        th: "table",
        tr: "table"
    })
      , l = function() {
        s.call(this),
        this.addRules({
            attributes: [{
                include: "tag_whitespace"
            }, {
                token: "entity.other.attribute-name.xml",
                regex: "[-_a-zA-Z0-9:.]+"
            }, {
                token: "keyword.operator.attribute-equals.xml",
                regex: "=",
                push: [{
                    include: "tag_whitespace"
                }, {
                    token: "string.unquoted.attribute-value.html",
                    regex: "[^<>='\"`\\s]+",
                    next: "pop"
                }, {
                    token: "empty",
                    regex: "",
                    next: "pop"
                }]
            }, {
                include: "attribute_value"
            }],
            tag: [{
                token: function(e, t) {
                    var i = a[t];
                    return ["meta.tag.punctuation." + ("<" == e ? "" : "end-") + "tag-open.xml", "meta.tag" + (i ? "." + i : "") + ".tag-name.xml"]
                },
                regex: "(</?)([-_a-zA-Z0-9:.]+)",
                next: "tag_stuff"
            }],
            tag_stuff: [{
                include: "attributes"
            }, {
                token: "meta.tag.punctuation.tag-close.xml",
                regex: "/?>",
                next: "start"
            }]
        }),
        this.embedTagRules(r, "css-", "style"),
        this.embedTagRules(new o({
            jsx: !1
        }).getRules(), "js-", "script"),
        this.constructor === l && this.normalizeRules()
    };
    i.inherits(l, s),
    t.HtmlHighlightRules = l
}),
define("ace/mode/behaviour/xml", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(e, t) {
    "use strict";
    function i(e, t) {
        return e.type.lastIndexOf(t + ".xml") > -1
    }
    var n = e("../../lib/oop")
      , r = e("../behaviour").Behaviour
      , o = e("../../token_iterator").TokenIterator
      , s = (e("../../lib/lang"),
    function() {
        this.add("string_dquotes", "insertion", function(e, t, n, r, s) {
            if ('"' == s || "'" == s) {
                var a = s
                  , l = r.doc.getTextRange(n.getSelectionRange());
                if ("" !== l && "'" !== l && '"' != l && n.getWrapBehavioursEnabled())
                    return {
                        text: a + l + a,
                        selection: !1
                    };
                var c = n.getCursorPosition()
                  , h = r.doc.getLine(c.row)
                  , d = h.substring(c.column, c.column + 1)
                  , u = new o(r,c.row,c.column)
                  , p = u.getCurrentToken();
                if (d == a && (i(p, "attribute-value") || i(p, "string")))
                    return {
                        text: "",
                        selection: [1, 1]
                    };
                if (p || (p = u.stepBackward()),
                !p)
                    return;
                for (; i(p, "tag-whitespace") || i(p, "whitespace"); )
                    p = u.stepBackward();
                var g = !d || d.match(/\s/);
                if (i(p, "attribute-equals") && (g || ">" == d) || i(p, "decl-attribute-equals") && (g || "?" == d))
                    return {
                        text: a + a,
                        selection: [1, 1]
                    }
            }
        }),
        this.add("string_dquotes", "deletion", function(e, t, i, n, r) {
            var o = n.doc.getTextRange(r);
            if (!r.isMultiLine() && ('"' == o || "'" == o)) {
                var s = n.doc.getLine(r.start.row)
                  , a = s.substring(r.start.column + 1, r.start.column + 2);
                if (a == o)
                    return r.end.column++,
                    r
            }
        }),
        this.add("autoclosing", "insertion", function(e, t, n, r, s) {
            if (">" == s) {
                var a = n.getSelectionRange().start
                  , l = new o(r,a.row,a.column)
                  , c = l.getCurrentToken() || l.stepBackward();
                if (!c || !(i(c, "tag-name") || i(c, "tag-whitespace") || i(c, "attribute-name") || i(c, "attribute-equals") || i(c, "attribute-value")))
                    return;
                if (i(c, "reference.attribute-value"))
                    return;
                if (i(c, "attribute-value")) {
                    var h = c.value.charAt(0);
                    if ('"' == h || "'" == h) {
                        var d = c.value.charAt(c.value.length - 1)
                          , u = l.getCurrentTokenColumn() + c.value.length;
                        if (u > a.column || u == a.column && h != d)
                            return
                    }
                }
                for (; !i(c, "tag-name"); )
                    if (c = l.stepBackward(),
                    "<" == c.value) {
                        c = l.stepForward();
                        break
                    }
                var p = l.getCurrentTokenRow()
                  , g = l.getCurrentTokenColumn();
                if (i(l.stepBackward(), "end-tag-open"))
                    return;
                var m = c.value;
                if (p == a.row && (m = m.substring(0, a.column - g)),
                this.voidElements.hasOwnProperty(m.toLowerCase()))
                    return;
                return {
                    text: "></" + m + ">",
                    selection: [1, 1]
                }
            }
        }),
        this.add("autoindent", "insertion", function(e, t, i, n, r) {
            if ("\n" == r) {
                var s = i.getCursorPosition()
                  , a = n.getLine(s.row)
                  , l = new o(n,s.row,s.column)
                  , c = l.getCurrentToken();
                if (c && -1 !== c.type.indexOf("tag-close")) {
                    if ("/>" == c.value)
                        return;
                    for (; c && -1 === c.type.indexOf("tag-name"); )
                        c = l.stepBackward();
                    if (!c)
                        return;
                    var h = c.value
                      , d = l.getCurrentTokenRow();
                    if (c = l.stepBackward(),
                    !c || -1 !== c.type.indexOf("end-tag"))
                        return;
                    if (this.voidElements && !this.voidElements[h]) {
                        var u = n.getTokenAt(s.row, s.column + 1)
                          , a = n.getLine(d)
                          , p = this.$getIndent(a)
                          , g = p + n.getTabString();
                        return u && "</" === u.value ? {
                            text: "\n" + g + "\n" + p,
                            selection: [1, g.length, 1, g.length]
                        } : {
                            text: "\n" + g
                        }
                    }
                }
            }
        })
    }
    );
    n.inherits(s, r),
    t.XmlBehaviour = s
}),
define("ace/mode/folding/mixed", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = e("./fold_mode").FoldMode
      , r = t.FoldMode = function(e, t) {
        this.defaultMode = e,
        this.subModes = t
    }
    ;
    i.inherits(r, n),
    function() {
        this.$getMode = function(e) {
            "string" != typeof e && (e = e[0]);
            for (var t in this.subModes)
                if (0 === e.indexOf(t))
                    return this.subModes[t];
            return null
        }
        ,
        this.$tryMode = function(e, t, i, n) {
            var r = this.$getMode(e);
            return r ? r.getFoldWidget(t, i, n) : ""
        }
        ,
        this.getFoldWidget = function(e, t, i) {
            return this.$tryMode(e.getState(i - 1), e, t, i) || this.$tryMode(e.getState(i), e, t, i) || this.defaultMode.getFoldWidget(e, t, i)
        }
        ,
        this.getFoldWidgetRange = function(e, t, i) {
            var n = this.$getMode(e.getState(i - 1));
            return n && n.getFoldWidget(e, t, i) || (n = this.$getMode(e.getState(i))),
            n && n.getFoldWidget(e, t, i) || (n = this.defaultMode),
            n.getFoldWidgetRange(e, t, i)
        }
    }
    .call(r.prototype)
}),
define("ace/mode/folding/xml", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/range", "ace/mode/folding/fold_mode", "ace/token_iterator"], function(e, t) {
    "use strict";
    function i(e, t) {
        return e.type.lastIndexOf(t + ".xml") > -1
    }
    var n = e("../../lib/oop")
      , r = (e("../../lib/lang"),
    e("../../range").Range)
      , o = e("./fold_mode").FoldMode
      , s = e("../../token_iterator").TokenIterator
      , a = t.FoldMode = function(e, t) {
        o.call(this),
        this.voidElements = e || {},
        this.optionalEndTags = n.mixin({}, this.voidElements),
        t && n.mixin(this.optionalEndTags, t)
    }
    ;
    n.inherits(a, o);
    var l = function() {
        this.tagName = "",
        this.closing = !1,
        this.selfClosing = !1,
        this.start = {
            row: 0,
            column: 0
        },
        this.end = {
            row: 0,
            column: 0
        }
    };
    (function() {
        this.getFoldWidget = function(e, t, i) {
            var n = this._getFirstTagInLine(e, i);
            return n ? n.closing || !n.tagName && n.selfClosing ? "markbeginend" == t ? "end" : "" : !n.tagName || n.selfClosing || this.voidElements.hasOwnProperty(n.tagName.toLowerCase()) ? "" : this._findEndTagInLine(e, i, n.tagName, n.end.column) ? "" : "start" : ""
        }
        ,
        this._getFirstTagInLine = function(e, t) {
            for (var n = e.getTokens(t), r = new l, o = 0; o < n.length; o++) {
                var s = n[o];
                if (i(s, "tag-open")) {
                    if (r.end.column = r.start.column + s.value.length,
                    r.closing = i(s, "end-tag-open"),
                    s = n[++o],
                    !s)
                        return null;
                    for (r.tagName = s.value,
                    r.end.column += s.value.length,
                    o++; o < n.length; o++)
                        if (s = n[o],
                        r.end.column += s.value.length,
                        i(s, "tag-close")) {
                            r.selfClosing = "/>" == s.value;
                            break
                        }
                    return r
                }
                if (i(s, "tag-close"))
                    return r.selfClosing = "/>" == s.value,
                    r;
                r.start.column += s.value.length
            }
            return null
        }
        ,
        this._findEndTagInLine = function(e, t, n, r) {
            for (var o = e.getTokens(t), s = 0, a = 0; a < o.length; a++) {
                var l = o[a];
                if (s += l.value.length,
                !(r > s) && i(l, "end-tag-open") && (l = o[a + 1],
                l && l.value == n))
                    return !0
            }
            return !1
        }
        ,
        this._readTagForward = function(e) {
            var t = e.getCurrentToken();
            if (!t)
                return null;
            var n = new l;
            do
                if (i(t, "tag-open"))
                    n.closing = i(t, "end-tag-open"),
                    n.start.row = e.getCurrentTokenRow(),
                    n.start.column = e.getCurrentTokenColumn();
                else if (i(t, "tag-name"))
                    n.tagName = t.value;
                else if (i(t, "tag-close"))
                    return n.selfClosing = "/>" == t.value,
                    n.end.row = e.getCurrentTokenRow(),
                    n.end.column = e.getCurrentTokenColumn() + t.value.length,
                    e.stepForward(),
                    n;
            while (t = e.stepForward());return null
        }
        ,
        this._readTagBackward = function(e) {
            var t = e.getCurrentToken();
            if (!t)
                return null;
            var n = new l;
            do {
                if (i(t, "tag-open"))
                    return n.closing = i(t, "end-tag-open"),
                    n.start.row = e.getCurrentTokenRow(),
                    n.start.column = e.getCurrentTokenColumn(),
                    e.stepBackward(),
                    n;
                i(t, "tag-name") ? n.tagName = t.value : i(t, "tag-close") && (n.selfClosing = "/>" == t.value,
                n.end.row = e.getCurrentTokenRow(),
                n.end.column = e.getCurrentTokenColumn() + t.value.length)
            } while (t = e.stepBackward());return null
        }
        ,
        this._pop = function(e, t) {
            for (; e.length; ) {
                var i = e[e.length - 1];
                if (!t || i.tagName == t.tagName)
                    return e.pop();
                {
                    if (!this.optionalEndTags.hasOwnProperty(i.tagName))
                        return null;
                    e.pop()
                }
            }
        }
        ,
        this.getFoldWidgetRange = function(e, t, i) {
            var n = this._getFirstTagInLine(e, i);
            if (!n)
                return null;
            var o, a = n.closing || n.selfClosing, l = [];
            if (a) {
                for (var c = new s(e,i,n.end.column), h = {
                    row: i,
                    column: n.start.column
                }; o = this._readTagBackward(c); )
                    if (o.selfClosing) {
                        if (!l.length)
                            return o.start.column += o.tagName.length + 2,
                            o.end.column -= 2,
                            r.fromPoints(o.start, o.end)
                    } else if (o.closing)
                        l.push(o);
                    else if (this._pop(l, o),
                    0 == l.length)
                        return o.start.column += o.tagName.length + 2,
                        o.start.row == o.end.row && o.start.column < o.end.column && (o.start.column = o.end.column),
                        r.fromPoints(o.start, h)
            } else {
                var c = new s(e,i,n.start.column)
                  , d = {
                    row: i,
                    column: n.start.column + n.tagName.length + 2
                };
                for (n.start.row == n.end.row && (d.column = n.end.column); o = this._readTagForward(c); )
                    if (o.selfClosing) {
                        if (!l.length)
                            return o.start.column += o.tagName.length + 2,
                            o.end.column -= 2,
                            r.fromPoints(o.start, o.end)
                    } else if (o.closing) {
                        if (this._pop(l, o),
                        0 == l.length)
                            return r.fromPoints(d, o.start)
                    } else
                        l.push(o)
            }
        }
    }
    ).call(a.prototype)
}),
define("ace/mode/folding/html", ["require", "exports", "module", "ace/lib/oop", "ace/mode/folding/mixed", "ace/mode/folding/xml", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = e("./mixed").FoldMode
      , r = e("./xml").FoldMode
      , o = e("./cstyle").FoldMode
      , s = t.FoldMode = function(e, t) {
        n.call(this, new r(e,t), {
            "js-": new o,
            "css-": new o
        })
    }
    ;
    i.inherits(s, n)
}),
define("ace/mode/html_completions", ["require", "exports", "module", "ace/token_iterator"], function(e, t) {
    "use strict";
    function i(e, t) {
        return e.type.lastIndexOf(t + ".xml") > -1
    }
    function n(e, t) {
        for (var n = new o(e,t.row,t.column), r = n.getCurrentToken(); r && !i(r, "tag-name"); )
            r = n.stepBackward();
        return r ? r.value : void 0
    }
    function r(e, t) {
        for (var n = new o(e,t.row,t.column), r = n.getCurrentToken(); r && !i(r, "attribute-name"); )
            r = n.stepBackward();
        return r ? r.value : void 0
    }
    var o = e("../token_iterator").TokenIterator
      , s = ["accesskey", "class", "contenteditable", "contextmenu", "dir", "draggable", "dropzone", "hidden", "id", "inert", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "spellcheck", "style", "tabindex", "title", "translate"]
      , a = ["onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"]
      , l = s.concat(a)
      , c = {
        html: {
            manifest: 1
        },
        head: {},
        title: {},
        base: {
            href: 1,
            target: 1
        },
        link: {
            href: 1,
            hreflang: 1,
            rel: {
                stylesheet: 1,
                icon: 1
            },
            media: {
                all: 1,
                screen: 1,
                print: 1
            },
            type: {
                "text/css": 1,
                "image/png": 1,
                "image/jpeg": 1,
                "image/gif": 1
            },
            sizes: 1
        },
        meta: {
            "http-equiv": {
                "content-type": 1
            },
            name: {
                description: 1,
                keywords: 1
            },
            content: {
                "text/html; charset=UTF-8": 1
            },
            charset: 1
        },
        style: {
            type: 1,
            media: {
                all: 1,
                screen: 1,
                print: 1
            },
            scoped: 1
        },
        script: {
            charset: 1,
            type: {
                "text/javascript": 1
            },
            src: 1,
            defer: 1,
            async: 1
        },
        noscript: {
            href: 1
        },
        body: {
            onafterprint: 1,
            onbeforeprint: 1,
            onbeforeunload: 1,
            onhashchange: 1,
            onmessage: 1,
            onoffline: 1,
            onpopstate: 1,
            onredo: 1,
            onresize: 1,
            onstorage: 1,
            onundo: 1,
            onunload: 1
        },
        section: {},
        nav: {},
        article: {
            pubdate: 1
        },
        aside: {},
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
        header: {},
        footer: {},
        address: {},
        main: {},
        p: {},
        hr: {},
        pre: {},
        blockquote: {
            cite: 1
        },
        ol: {
            start: 1,
            reversed: 1
        },
        ul: {},
        li: {
            value: 1
        },
        dl: {},
        dt: {},
        dd: {},
        figure: {},
        figcaption: {},
        div: {},
        a: {
            href: 1,
            target: {
                _blank: 1,
                top: 1
            },
            ping: 1,
            rel: {
                nofollow: 1,
                alternate: 1,
                author: 1,
                bookmark: 1,
                help: 1,
                license: 1,
                next: 1,
                noreferrer: 1,
                prefetch: 1,
                prev: 1,
                search: 1,
                tag: 1
            },
            media: 1,
            hreflang: 1,
            type: 1
        },
        em: {},
        strong: {},
        small: {},
        s: {},
        cite: {},
        q: {
            cite: 1
        },
        dfn: {},
        abbr: {},
        data: {},
        time: {
            datetime: 1
        },
        code: {},
        "var": {},
        samp: {},
        kbd: {},
        sub: {},
        sup: {},
        i: {},
        b: {},
        u: {},
        mark: {},
        ruby: {},
        rt: {},
        rp: {},
        bdi: {},
        bdo: {},
        span: {},
        br: {},
        wbr: {},
        ins: {
            cite: 1,
            datetime: 1
        },
        del: {
            cite: 1,
            datetime: 1
        },
        img: {
            alt: 1,
            src: 1,
            height: 1,
            width: 1,
            usemap: 1,
            ismap: 1
        },
        iframe: {
            name: 1,
            src: 1,
            height: 1,
            width: 1,
            sandbox: {
                "allow-same-origin": 1,
                "allow-top-navigation": 1,
                "allow-forms": 1,
                "allow-scripts": 1
            },
            seamless: {
                seamless: 1
            }
        },
        embed: {
            src: 1,
            height: 1,
            width: 1,
            type: 1
        },
        object: {
            param: 1,
            data: 1,
            type: 1,
            height: 1,
            width: 1,
            usemap: 1,
            name: 1,
            form: 1,
            classid: 1
        },
        param: {
            name: 1,
            value: 1
        },
        video: {
            src: 1,
            autobuffer: 1,
            autoplay: {
                autoplay: 1
            },
            loop: {
                loop: 1
            },
            controls: {
                controls: 1
            },
            width: 1,
            height: 1,
            poster: 1,
            muted: {
                muted: 1
            },
            preload: {
                auto: 1,
                metadata: 1,
                none: 1
            }
        },
        audio: {
            src: 1,
            autobuffer: 1,
            autoplay: {
                autoplay: 1
            },
            loop: {
                loop: 1
            },
            controls: {
                controls: 1
            },
            muted: {
                muted: 1
            },
            preload: {
                auto: 1,
                metadata: 1,
                none: 1
            }
        },
        source: {
            src: 1,
            type: 1,
            media: 1
        },
        track: {
            kind: 1,
            src: 1,
            srclang: 1,
            label: 1,
            "default": 1
        },
        canvas: {
            width: 1,
            height: 1
        },
        map: {
            name: 1
        },
        area: {
            shape: 1,
            coords: 1,
            href: 1,
            hreflang: 1,
            alt: 1,
            target: 1,
            media: 1,
            rel: 1,
            ping: 1,
            type: 1
        },
        svg: {},
        math: {},
        table: {
            summary: 1
        },
        caption: {},
        colgroup: {
            span: 1
        },
        col: {
            span: 1
        },
        tbody: {},
        thead: {},
        tfoot: {},
        tr: {},
        td: {
            headers: 1,
            rowspan: 1,
            colspan: 1
        },
        th: {
            headers: 1,
            rowspan: 1,
            colspan: 1,
            scope: 1
        },
        form: {
            "accept-charset": 1,
            action: 1,
            autocomplete: 1,
            enctype: {
                "multipart/form-data": 1,
                "application/x-www-form-urlencoded": 1
            },
            method: {
                get: 1,
                post: 1
            },
            name: 1,
            novalidate: 1,
            target: {
                _blank: 1,
                top: 1
            }
        },
        fieldset: {
            disabled: 1,
            form: 1,
            name: 1
        },
        legend: {},
        label: {
            form: 1,
            "for": 1
        },
        input: {
            type: {
                text: 1,
                password: 1,
                hidden: 1,
                checkbox: 1,
                submit: 1,
                radio: 1,
                file: 1,
                button: 1,
                reset: 1,
                image: 31,
                color: 1,
                date: 1,
                datetime: 1,
                "datetime-local": 1,
                email: 1,
                month: 1,
                number: 1,
                range: 1,
                search: 1,
                tel: 1,
                time: 1,
                url: 1,
                week: 1
            },
            accept: 1,
            alt: 1,
            autocomplete: {
                on: 1,
                off: 1
            },
            autofocus: {
                autofocus: 1
            },
            checked: {
                checked: 1
            },
            disabled: {
                disabled: 1
            },
            form: 1,
            formaction: 1,
            formenctype: {
                "application/x-www-form-urlencoded": 1,
                "multipart/form-data": 1,
                "text/plain": 1
            },
            formmethod: {
                get: 1,
                post: 1
            },
            formnovalidate: {
                formnovalidate: 1
            },
            formtarget: {
                _blank: 1,
                _self: 1,
                _parent: 1,
                _top: 1
            },
            height: 1,
            list: 1,
            max: 1,
            maxlength: 1,
            min: 1,
            multiple: {
                multiple: 1
            },
            name: 1,
            pattern: 1,
            placeholder: 1,
            readonly: {
                readonly: 1
            },
            required: {
                required: 1
            },
            size: 1,
            src: 1,
            step: 1,
            width: 1,
            files: 1,
            value: 1
        },
        button: {
            autofocus: 1,
            disabled: {
                disabled: 1
            },
            form: 1,
            formaction: 1,
            formenctype: 1,
            formmethod: 1,
            formnovalidate: 1,
            formtarget: 1,
            name: 1,
            value: 1,
            type: {
                button: 1,
                submit: 1
            }
        },
        select: {
            autofocus: 1,
            disabled: 1,
            form: 1,
            multiple: {
                multiple: 1
            },
            name: 1,
            size: 1,
            readonly: {
                readonly: 1
            }
        },
        datalist: {},
        optgroup: {
            disabled: 1,
            label: 1
        },
        option: {
            disabled: 1,
            selected: 1,
            label: 1,
            value: 1
        },
        textarea: {
            autofocus: {
                autofocus: 1
            },
            disabled: {
                disabled: 1
            },
            form: 1,
            maxlength: 1,
            name: 1,
            placeholder: 1,
            readonly: {
                readonly: 1
            },
            required: {
                required: 1
            },
            rows: 1,
            cols: 1,
            wrap: {
                on: 1,
                off: 1,
                hard: 1,
                soft: 1
            }
        },
        keygen: {
            autofocus: 1,
            challenge: {
                challenge: 1
            },
            disabled: {
                disabled: 1
            },
            form: 1,
            keytype: {
                rsa: 1,
                dsa: 1,
                ec: 1
            },
            name: 1
        },
        output: {
            "for": 1,
            form: 1,
            name: 1
        },
        progress: {
            value: 1,
            max: 1
        },
        meter: {
            value: 1,
            min: 1,
            max: 1,
            low: 1,
            high: 1,
            optimum: 1
        },
        details: {
            open: 1
        },
        summary: {},
        command: {
            type: 1,
            label: 1,
            icon: 1,
            disabled: 1,
            checked: 1,
            radiogroup: 1,
            command: 1
        },
        menu: {
            type: 1,
            label: 1
        },
        dialog: {
            open: 1
        }
    }
      , h = Object.keys(c)
      , d = function() {};
    (function() {
        this.getCompletions = function(e, t, n, r) {
            var o = t.getTokenAt(n.row, n.column);
            if (!o)
                return [];
            if (i(o, "tag-name") || i(o, "tag-open") || i(o, "end-tag-open"))
                return this.getTagCompletions(e, t, n, r);
            if (i(o, "tag-whitespace") || i(o, "attribute-name"))
                return this.getAttributeCompletions(e, t, n, r);
            if (i(o, "attribute-value"))
                return this.getAttributeValueCompletions(e, t, n, r);
            var s = t.getLine(n.row).substr(0, n.column);
            return /&[A-z]*$/i.test(s) ? this.getHTMLEntityCompletions(e, t, n, r) : []
        }
        ,
        this.getTagCompletions = function() {
            return h.map(function(e) {
                return {
                    value: e,
                    meta: "tag",
                    score: Number.MAX_VALUE
                }
            })
        }
        ,
        this.getAttributeCompletions = function(e, t, i) {
            var r = n(t, i);
            if (!r)
                return [];
            var o = l;
            return r in c && (o = o.concat(Object.keys(c[r]))),
            o.map(function(e) {
                return {
                    caption: e,
                    snippet: e + '="$0"',
                    meta: "attribute",
                    score: Number.MAX_VALUE
                }
            })
        }
        ,
        this.getAttributeValueCompletions = function(e, t, i) {
            var o = n(t, i)
              , s = r(t, i);
            if (!o)
                return [];
            var a = [];
            return o in c && s in c[o] && "object" == typeof c[o][s] && (a = Object.keys(c[o][s])),
            a.map(function(e) {
                return {
                    caption: e,
                    snippet: e,
                    meta: "attribute value",
                    score: Number.MAX_VALUE
                }
            })
        }
        ,
        this.getHTMLEntityCompletions = function() {
            var e = ["Aacute;", "aacute;", "Acirc;", "acirc;", "acute;", "AElig;", "aelig;", "Agrave;", "agrave;", "alefsym;", "Alpha;", "alpha;", "amp;", "and;", "ang;", "Aring;", "aring;", "asymp;", "Atilde;", "atilde;", "Auml;", "auml;", "bdquo;", "Beta;", "beta;", "brvbar;", "bull;", "cap;", "Ccedil;", "ccedil;", "cedil;", "cent;", "Chi;", "chi;", "circ;", "clubs;", "cong;", "copy;", "crarr;", "cup;", "curren;", "Dagger;", "dagger;", "dArr;", "darr;", "deg;", "Delta;", "delta;", "diams;", "divide;", "Eacute;", "eacute;", "Ecirc;", "ecirc;", "Egrave;", "egrave;", "empty;", "emsp;", "ensp;", "Epsilon;", "epsilon;", "equiv;", "Eta;", "eta;", "ETH;", "eth;", "Euml;", "euml;", "euro;", "exist;", "fnof;", "forall;", "frac12;", "frac14;", "frac34;", "frasl;", "Gamma;", "gamma;", "ge;", "gt;", "hArr;", "harr;", "hearts;", "hellip;", "Iacute;", "iacute;", "Icirc;", "icirc;", "iexcl;", "Igrave;", "igrave;", "image;", "infin;", "int;", "Iota;", "iota;", "iquest;", "isin;", "Iuml;", "iuml;", "Kappa;", "kappa;", "Lambda;", "lambda;", "lang;", "laquo;", "lArr;", "larr;", "lceil;", "ldquo;", "le;", "lfloor;", "lowast;", "loz;", "lrm;", "lsaquo;", "lsquo;", "lt;", "macr;", "mdash;", "micro;", "middot;", "minus;", "Mu;", "mu;", "nabla;", "nbsp;", "ndash;", "ne;", "ni;", "not;", "notin;", "nsub;", "Ntilde;", "ntilde;", "Nu;", "nu;", "Oacute;", "oacute;", "Ocirc;", "ocirc;", "OElig;", "oelig;", "Ograve;", "ograve;", "oline;", "Omega;", "omega;", "Omicron;", "omicron;", "oplus;", "or;", "ordf;", "ordm;", "Oslash;", "oslash;", "Otilde;", "otilde;", "otimes;", "Ouml;", "ouml;", "para;", "part;", "permil;", "perp;", "Phi;", "phi;", "Pi;", "pi;", "piv;", "plusmn;", "pound;", "Prime;", "prime;", "prod;", "prop;", "Psi;", "psi;", "quot;", "radic;", "rang;", "raquo;", "rArr;", "rarr;", "rceil;", "rdquo;", "real;", "reg;", "rfloor;", "Rho;", "rho;", "rlm;", "rsaquo;", "rsquo;", "sbquo;", "Scaron;", "scaron;", "sdot;", "sect;", "shy;", "Sigma;", "sigma;", "sigmaf;", "sim;", "spades;", "sub;", "sube;", "sum;", "sup;", "sup1;", "sup2;", "sup3;", "supe;", "szlig;", "Tau;", "tau;", "there4;", "Theta;", "theta;", "thetasym;", "thinsp;", "THORN;", "thorn;", "tilde;", "times;", "trade;", "Uacute;", "uacute;", "uArr;", "uarr;", "Ucirc;", "ucirc;", "Ugrave;", "ugrave;", "uml;", "upsih;", "Upsilon;", "upsilon;", "Uuml;", "uuml;", "weierp;", "Xi;", "xi;", "Yacute;", "yacute;", "yen;", "Yuml;", "yuml;", "Zeta;", "zeta;", "zwj;", "zwnj;"];
            return e.map(function(e) {
                return {
                    caption: e,
                    snippet: e,
                    meta: "html entity",
                    score: Number.MAX_VALUE
                }
            })
        }
    }
    ).call(d.prototype),
    t.HtmlCompletions = d
}),
define("ace/mode/html", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text", "ace/mode/javascript", "ace/mode/css", "ace/mode/html_highlight_rules", "ace/mode/behaviour/xml", "ace/mode/folding/html", "ace/mode/html_completions", "ace/worker/worker_client"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("../lib/lang")
      , r = e("./text").Mode
      , o = e("./javascript").Mode
      , s = e("./css").Mode
      , a = e("./html_highlight_rules").HtmlHighlightRules
      , l = e("./behaviour/xml").XmlBehaviour
      , c = e("./folding/html").FoldMode
      , h = e("./html_completions").HtmlCompletions
      , d = e("../worker/worker_client").WorkerClient
      , u = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "menuitem", "param", "source", "track", "wbr"]
      , p = ["li", "dt", "dd", "p", "rt", "rp", "optgroup", "option", "colgroup", "td", "th"]
      , g = function(e) {
        this.fragmentContext = e && e.fragmentContext,
        this.HighlightRules = a,
        this.$behaviour = new l,
        this.$completer = new h,
        this.createModeDelegates({
            "js-": o,
            "css-": s
        }),
        this.foldingRules = new c(this.voidElements,n.arrayToMap(p))
    };
    i.inherits(g, r),
    function() {
        this.blockComment = {
            start: "<!--",
            end: "-->"
        },
        this.voidElements = n.arrayToMap(u),
        this.getNextLineIndent = function(e, t) {
            return this.$getIndent(t)
        }
        ,
        this.checkOutdent = function() {
            return !1
        }
        ,
        this.getCompletions = function(e, t, i, n) {
            return this.$completer.getCompletions(e, t, i, n)
        }
        ,
        this.createWorker = function(e) {
            if (this.constructor == g) {
                var t = new d(["ace"],"ace/mode/html_worker","Worker");
                return t.attachToDocument(e.getDocument()),
                this.fragmentContext && t.call("setOptions", [{
                    context: this.fragmentContext
                }]),
                t.on("error", function(t) {
                    e.setAnnotations(t.data)
                }),
                t.on("terminate", function() {
                    e.clearAnnotations()
                }),
                t
            }
        }
        ,
        this.$id = "ace/mode/html"
    }
    .call(g.prototype),
    t.Mode = g
}),
define("ace/mode/css_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/mode/text_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = (e("../lib/lang"),
    e("./text_highlight_rules").TextHighlightRules)
      , r = t.supportType = "align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index"
      , o = t.supportFunction = "rgb|rgba|url|attr|counter|counters"
      , s = t.supportConstant = "absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero"
      , a = t.supportConstantColor = "aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow"
      , l = t.supportConstantFonts = "arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace"
      , c = t.numRe = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))"
      , h = t.pseudoElements = "(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b"
      , d = t.pseudoClasses = "(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b"
      , u = function() {
        var e = this.createKeywordMapper({
            "support.function": o,
            "support.constant": s,
            "support.type": r,
            "support.constant.color": a,
            "support.constant.fonts": l
        }, "text", !0);
        this.$rules = {
            start: [{
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "paren.lparen",
                regex: "\\{",
                push: "ruleset"
            }, {
                token: "string",
                regex: "@.*?{",
                push: "media"
            }, {
                token: "keyword",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "string",
                regex: ":[a-z0-9-_]+"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                caseInsensitive: !0
            }],
            media: [{
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "paren.lparen",
                regex: "\\{",
                push: "ruleset"
            }, {
                token: "string",
                regex: "\\}",
                next: "pop"
            }, {
                token: "keyword",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "string",
                regex: ":[a-z0-9-_]+"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                caseInsensitive: !0
            }],
            comment: [{
                token: "comment",
                regex: "\\*\\/",
                next: "pop"
            }, {
                defaultToken: "comment"
            }],
            ruleset: [{
                token: "paren.rparen",
                regex: "\\}",
                next: "pop"
            }, {
                token: "comment",
                regex: "\\/\\*",
                push: "comment"
            }, {
                token: "string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token: "string",
                regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token: ["constant.numeric", "keyword"],
                regex: "(" + c + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
            }, {
                token: "constant.numeric",
                regex: c
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{6}"
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{3}"
            }, {
                token: ["punctuation", "entity.other.attribute-name.pseudo-element.css"],
                regex: h
            }, {
                token: ["punctuation", "entity.other.attribute-name.pseudo-class.css"],
                regex: d
            }, {
                token: ["support.function", "string", "support.function"],
                regex: "(url\\()(.*)(\\))"
            }, {
                token: e,
                regex: "\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"
            }, {
                caseInsensitive: !0
            }]
        },
        this.normalizeRules()
    };
    i.inherits(u, n),
    t.CssHighlightRules = u
}),
define("ace/mode/less_highlight_rules", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules", "ace/mode/css_highlight_rules"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text_highlight_rules").TextHighlightRules
      , r = e("./css_highlight_rules")
      , o = function() {
        var e = "@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|or|and|when|not"
          , t = e.split("|")
          , i = r.supportType.split("|")
          , n = this.createKeywordMapper({
            "support.constant": r.supportConstant,
            keyword: e,
            "support.constant.color": r.supportConstantColor,
            "support.constant.fonts": r.supportConstantFonts
        }, "identifier", !0)
          , o = "\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";
        this.$rules = {
            start: [{
                token: "comment",
                regex: "\\/\\/.*$"
            }, {
                token: "comment",
                regex: "\\/\\*",
                next: "comment"
            }, {
                token: "string",
                regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token: "string",
                regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token: ["constant.numeric", "keyword"],
                regex: "(" + o + ")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{6}"
            }, {
                token: "constant.numeric",
                regex: "#[a-f0-9]{3}"
            }, {
                token: "constant.numeric",
                regex: o
            }, {
                token: ["support.function", "paren.lparen", "string", "paren.rparen"],
                regex: "(url)(\\()(.*)(\\))"
            }, {
                token: ["support.function", "paren.lparen"],
                regex: "(:extend|[a-z0-9_\\-]+)(\\()"
            }, {
                token: function(e) {
                    return t.indexOf(e.toLowerCase()) > -1 ? "keyword" : "variable"
                },
                regex: "[@\\$][a-z0-9_\\-@\\$]*\\b"
            }, {
                token: "variable",
                regex: "[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"
            }, {
                token: function(e) {
                    return i.indexOf(e.toLowerCase()) > -1 ? ["support.type.property", "text"] : ["support.type.unknownProperty", "text"]
                },
                regex: "([a-z0-9-_]+)(\\s*:)"
            }, {
                token: "keyword",
                regex: "&"
            }, {
                token: n,
                regex: "\\-?[@a-z_][@a-z0-9_\\-]*"
            }, {
                token: "variable.language",
                regex: "#[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: "\\.[a-z0-9-_]+"
            }, {
                token: "variable.language",
                regex: ":[a-z_][a-z0-9-_]*"
            }, {
                token: "constant",
                regex: "[a-z0-9-_]+"
            }, {
                token: "keyword.operator",
                regex: "<|>|<=|>=|=|!=|-|%|\\+|\\*"
            }, {
                token: "paren.lparen",
                regex: "[[({]"
            }, {
                token: "paren.rparen",
                regex: "[\\])}]"
            }, {
                token: "text",
                regex: "\\s+"
            }, {
                caseInsensitive: !0
            }],
            comment: [{
                token: "comment",
                regex: ".*?\\*\\/",
                next: "start"
            }, {
                token: "comment",
                regex: ".+"
            }]
        },
        this.normalizeRules()
    };
    i.inherits(o, n),
    t.LessHighlightRules = o
}),
define("ace/mode/matching_brace_outdent", ["require", "exports", "module", "ace/range"], function(e, t) {
    "use strict";
    var i = e("../range").Range
      , n = function() {};
    (function() {
        this.checkOutdent = function(e, t) {
            return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1
        }
        ,
        this.autoOutdent = function(e, t) {
            var n = e.getLine(t)
              , r = n.match(/^(\s*\})/);
            if (!r)
                return 0;
            var o = r[1].length
              , s = e.findMatchingBracket({
                row: t,
                column: o
            });
            if (!s || s.row == t)
                return 0;
            var a = this.$getIndent(e.getLine(s.row));
            e.replace(new i(t,0,t,o - 1), a)
        }
        ,
        this.$getIndent = function(e) {
            return e.match(/^\s*/)[0]
        }
    }
    ).call(n.prototype),
    t.MatchingBraceOutdent = n
}),
define("ace/mode/behaviour/css", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/mode/behaviour/cstyle", "ace/token_iterator"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = (e("../behaviour").Behaviour,
    e("./cstyle").CstyleBehaviour)
      , r = e("../../token_iterator").TokenIterator
      , o = function() {
        this.inherit(n),
        this.add("colon", "insertion", function(e, t, i, n, o) {
            if (":" === o) {
                var s = i.getCursorPosition()
                  , a = new r(n,s.row,s.column)
                  , l = a.getCurrentToken();
                if (l && l.value.match(/\s+/) && (l = a.stepBackward()),
                l && "support.type" === l.type) {
                    var c = n.doc.getLine(s.row)
                      , h = c.substring(s.column, s.column + 1);
                    if (":" === h)
                        return {
                            text: "",
                            selection: [1, 1]
                        };
                    if (!c.substring(s.column).match(/^\s*;/))
                        return {
                            text: ":;",
                            selection: [1, 1]
                        }
                }
            }
        }),
        this.add("colon", "deletion", function(e, t, i, n, o) {
            var s = n.doc.getTextRange(o);
            if (!o.isMultiLine() && ":" === s) {
                var a = i.getCursorPosition()
                  , l = new r(n,a.row,a.column)
                  , c = l.getCurrentToken();
                if (c && c.value.match(/\s+/) && (c = l.stepBackward()),
                c && "support.type" === c.type) {
                    var h = n.doc.getLine(o.start.row)
                      , d = h.substring(o.end.column, o.end.column + 1);
                    if (";" === d)
                        return o.end.column++,
                        o
                }
            }
        }),
        this.add("semicolon", "insertion", function(e, t, i, n, r) {
            if (";" === r) {
                var o = i.getCursorPosition()
                  , s = n.doc.getLine(o.row)
                  , a = s.substring(o.column, o.column + 1);
                if (";" === a)
                    return {
                        text: "",
                        selection: [1, 1]
                    }
            }
        })
    };
    i.inherits(o, n),
    t.CssBehaviour = o
}),
define("ace/mode/css_completions", ["require", "exports", "module"], function(e, t) {
    "use strict";
    var i = {
        background: {
            "#$0": 1
        },
        "background-color": {
            "#$0": 1,
            transparent: 1,
            fixed: 1
        },
        "background-image": {
            "url('/$0')": 1
        },
        "background-repeat": {
            repeat: 1,
            "repeat-x": 1,
            "repeat-y": 1,
            "no-repeat": 1,
            inherit: 1
        },
        "background-position": {
            bottom: 2,
            center: 2,
            left: 2,
            right: 2,
            top: 2,
            inherit: 2
        },
        "background-attachment": {
            scroll: 1,
            fixed: 1
        },
        "background-size": {
            cover: 1,
            contain: 1
        },
        "background-clip": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
        },
        "background-origin": {
            "border-box": 1,
            "padding-box": 1,
            "content-box": 1
        },
        border: {
            "solid $0": 1,
            "dashed $0": 1,
            "dotted $0": 1,
            "#$0": 1
        },
        "border-color": {
            "#$0": 1
        },
        "border-style": {
            solid: 2,
            dashed: 2,
            dotted: 2,
            "double": 2,
            groove: 2,
            hidden: 2,
            inherit: 2,
            inset: 2,
            none: 2,
            outset: 2,
            ridged: 2
        },
        "border-collapse": {
            collapse: 1,
            separate: 1
        },
        bottom: {
            px: 1,
            em: 1,
            "%": 1
        },
        clear: {
            left: 1,
            right: 1,
            both: 1,
            none: 1
        },
        color: {
            "#$0": 1,
            "rgb(#$00,0,0)": 1
        },
        cursor: {
            "default": 1,
            pointer: 1,
            move: 1,
            text: 1,
            wait: 1,
            help: 1,
            progress: 1,
            "n-resize": 1,
            "ne-resize": 1,
            "e-resize": 1,
            "se-resize": 1,
            "s-resize": 1,
            "sw-resize": 1,
            "w-resize": 1,
            "nw-resize": 1
        },
        display: {
            none: 1,
            block: 1,
            inline: 1,
            "inline-block": 1,
            "table-cell": 1
        },
        "empty-cells": {
            show: 1,
            hide: 1
        },
        "float": {
            left: 1,
            right: 1,
            none: 1
        },
        "font-family": {
            Arial: 2,
            "Comic Sans MS": 2,
            Consolas: 2,
            "Courier New": 2,
            Courier: 2,
            Georgia: 2,
            Monospace: 2,
            "Sans-Serif": 2,
            "Segoe UI": 2,
            Tahoma: 2,
            "Times New Roman": 2,
            "Trebuchet MS": 2,
            Verdana: 1
        },
        "font-size": {
            px: 1,
            em: 1,
            "%": 1
        },
        "font-weight": {
            bold: 1,
            normal: 1
        },
        "font-style": {
            italic: 1,
            normal: 1
        },
        "font-variant": {
            normal: 1,
            "small-caps": 1
        },
        height: {
            px: 1,
            em: 1,
            "%": 1
        },
        left: {
            px: 1,
            em: 1,
            "%": 1
        },
        "letter-spacing": {
            normal: 1
        },
        "line-height": {
            normal: 1
        },
        "list-style-type": {
            none: 1,
            disc: 1,
            circle: 1,
            square: 1,
            decimal: 1,
            "decimal-leading-zero": 1,
            "lower-roman": 1,
            "upper-roman": 1,
            "lower-greek": 1,
            "lower-latin": 1,
            "upper-latin": 1,
            georgian: 1,
            "lower-alpha": 1,
            "upper-alpha": 1
        },
        margin: {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-right": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-left": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-top": {
            px: 1,
            em: 1,
            "%": 1
        },
        "margin-bottom": {
            px: 1,
            em: 1,
            "%": 1
        },
        "max-height": {
            px: 1,
            em: 1,
            "%": 1
        },
        "max-width": {
            px: 1,
            em: 1,
            "%": 1
        },
        "min-height": {
            px: 1,
            em: 1,
            "%": 1
        },
        "min-width": {
            px: 1,
            em: 1,
            "%": 1
        },
        overflow: {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        "overflow-x": {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        "overflow-y": {
            hidden: 1,
            visible: 1,
            auto: 1,
            scroll: 1
        },
        padding: {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-top": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-right": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-bottom": {
            px: 1,
            em: 1,
            "%": 1
        },
        "padding-left": {
            px: 1,
            em: 1,
            "%": 1
        },
        "page-break-after": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
        },
        "page-break-before": {
            auto: 1,
            always: 1,
            avoid: 1,
            left: 1,
            right: 1
        },
        position: {
            absolute: 1,
            relative: 1,
            fixed: 1,
            "static": 1
        },
        right: {
            px: 1,
            em: 1,
            "%": 1
        },
        "table-layout": {
            fixed: 1,
            auto: 1
        },
        "text-decoration": {
            none: 1,
            underline: 1,
            "line-through": 1,
            blink: 1
        },
        "text-align": {
            left: 1,
            right: 1,
            center: 1,
            justify: 1
        },
        "text-transform": {
            capitalize: 1,
            uppercase: 1,
            lowercase: 1,
            none: 1
        },
        top: {
            px: 1,
            em: 1,
            "%": 1
        },
        "vertical-align": {
            top: 1,
            bottom: 1
        },
        visibility: {
            hidden: 1,
            visible: 1
        },
        "white-space": {
            nowrap: 1,
            normal: 1,
            pre: 1,
            "pre-line": 1,
            "pre-wrap": 1
        },
        width: {
            px: 1,
            em: 1,
            "%": 1
        },
        "word-spacing": {
            normal: 1
        },
        filter: {
            "alpha(opacity=$0100)": 1
        },
        "text-shadow": {
            "$02px 2px 2px #777": 1
        },
        "text-overflow": {
            "ellipsis-word": 1,
            clip: 1,
            ellipsis: 1
        },
        "-moz-border-radius": 1,
        "-moz-border-radius-topright": 1,
        "-moz-border-radius-bottomright": 1,
        "-moz-border-radius-topleft": 1,
        "-moz-border-radius-bottomleft": 1,
        "-webkit-border-radius": 1,
        "-webkit-border-top-right-radius": 1,
        "-webkit-border-top-left-radius": 1,
        "-webkit-border-bottom-right-radius": 1,
        "-webkit-border-bottom-left-radius": 1,
        "-moz-box-shadow": 1,
        "-webkit-box-shadow": 1,
        transform: {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        },
        "-moz-transform": {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        },
        "-webkit-transform": {
            "rotate($00deg)": 1,
            "skew($00deg)": 1
        }
    }
      , n = function() {};
    (function() {
        this.completionsDefined = !1,
        this.defineCompletions = function() {
            if (document) {
                var e = document.createElement("c").style;
                for (var t in e)
                    if ("string" == typeof e[t]) {
                        var n = t.replace(/[A-Z]/g, function(e) {
                            return "-" + e.toLowerCase()
                        });
                        i.hasOwnProperty(n) || (i[n] = 1)
                    }
            }
            this.completionsDefined = !0
        }
        ,
        this.getCompletions = function(e, t, i, n) {
            this.completionsDefined || this.defineCompletions();
            var r = t.getTokenAt(i.row, i.column);
            if (!r)
                return [];
            if ("ruleset" === e) {
                var o = t.getLine(i.row).substr(0, i.column);
                return /:[^;]+$/.test(o) ? (/([\w\-]+):[^:]*$/.test(o),
                this.getPropertyValueCompletions(e, t, i, n)) : this.getPropertyCompletions(e, t, i, n)
            }
            return []
        }
        ,
        this.getPropertyCompletions = function() {
            var e = Object.keys(i);
            return e.map(function(e) {
                return {
                    caption: e,
                    snippet: e + ": $0",
                    meta: "property",
                    score: Number.MAX_VALUE
                }
            })
        }
        ,
        this.getPropertyValueCompletions = function(e, t, n) {
            var r = t.getLine(n.row).substr(0, n.column)
              , o = (/([\w\-]+):[^:]*$/.exec(r) || {})[1];
            if (!o)
                return [];
            var s = [];
            return o in i && "object" == typeof i[o] && (s = Object.keys(i[o])),
            s.map(function(e) {
                return {
                    caption: e,
                    snippet: e,
                    meta: "property value",
                    score: Number.MAX_VALUE
                }
            })
        }
    }
    ).call(n.prototype),
    t.CssCompletions = n
}),
define("ace/mode/folding/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/range", "ace/mode/folding/fold_mode"], function(e, t) {
    "use strict";
    var i = e("../../lib/oop")
      , n = e("../../range").Range
      , r = e("./fold_mode").FoldMode
      , o = t.FoldMode = function(e) {
        e && (this.foldingStartMarker = new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + e.start)),
        this.foldingStopMarker = new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + e.end)))
    }
    ;
    i.inherits(o, r),
    function() {
        this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/,
        this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,
        this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/,
        this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/,
        this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/,
        this._getFoldWidgetBase = this.getFoldWidget,
        this.getFoldWidget = function(e, t, i) {
            var n = e.getLine(i);
            if (this.singleLineBlockCommentRe.test(n) && !this.startRegionRe.test(n) && !this.tripleStarBlockCommentRe.test(n))
                return "";
            var r = this._getFoldWidgetBase(e, t, i);
            return !r && this.startRegionRe.test(n) ? "start" : r
        }
        ,
        this.getFoldWidgetRange = function(e, t, i, n) {
            var r = e.getLine(i);
            if (this.startRegionRe.test(r))
                return this.getCommentRegionBlock(e, r, i);
            var o = r.match(this.foldingStartMarker);
            if (o) {
                var s = o.index;
                if (o[1])
                    return this.openingBracketBlock(e, o[1], i, s);
                var a = e.getCommentFoldRange(i, s + o[0].length, 1);
                return a && !a.isMultiLine() && (n ? a = this.getSectionRange(e, i) : "all" != t && (a = null)),
                a
            }
            if ("markbegin" !== t) {
                var o = r.match(this.foldingStopMarker);
                if (o) {
                    var s = o.index + o[0].length;
                    return o[1] ? this.closingBracketBlock(e, o[1], i, s) : e.getCommentFoldRange(i, s, -1)
                }
            }
        }
        ,
        this.getSectionRange = function(e, t) {
            var i = e.getLine(t)
              , r = i.search(/\S/)
              , o = t
              , s = i.length;
            t += 1;
            for (var a = t, l = e.getLength(); ++t < l; ) {
                i = e.getLine(t);
                var c = i.search(/\S/);
                if (-1 !== c) {
                    if (r > c)
                        break;
                    var h = this.getFoldWidgetRange(e, "all", t);
                    if (h) {
                        if (h.start.row <= o)
                            break;
                        if (h.isMultiLine())
                            t = h.end.row;
                        else if (r == c)
                            break
                    }
                    a = t
                }
            }
            return new n(o,s,a,e.getLine(a).length)
        }
        ,
        this.getCommentRegionBlock = function(e, t, i) {
            for (var r = t.search(/\s*$/), o = e.getLength(), s = i, a = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, l = 1; ++i < o; ) {
                t = e.getLine(i);
                var c = a.exec(t);
                if (c && (c[1] ? l-- : l++,
                !l))
                    break
            }
            var h = i;
            return h > s ? new n(s,r,h,t.length) : void 0
        }
    }
    .call(o.prototype)
}),
define("ace/mode/less", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/less_highlight_rules", "ace/mode/matching_brace_outdent", "ace/mode/behaviour/css", "ace/mode/css_completions", "ace/mode/folding/cstyle"], function(e, t) {
    "use strict";
    var i = e("../lib/oop")
      , n = e("./text").Mode
      , r = e("./less_highlight_rules").LessHighlightRules
      , o = e("./matching_brace_outdent").MatchingBraceOutdent
      , s = e("./behaviour/css").CssBehaviour
      , a = e("./css_completions").CssCompletions
      , l = e("./folding/cstyle").FoldMode
      , c = function() {
        this.HighlightRules = r,
        this.$outdent = new o,
        this.$behaviour = new s,
        this.$completer = new a,
        this.foldingRules = new l
    };
    i.inherits(c, n),
    function() {
        this.lineCommentStart = "//",
        this.blockComment = {
            start: "/*",
            end: "*/"
        },
        this.getNextLineIndent = function(e, t, i) {
            var n = this.$getIndent(t)
              , r = this.getTokenizer().getLineTokens(t, e).tokens;
            if (r.length && "comment" == r[r.length - 1].type)
                return n;
            var o = t.match(/^.*\{\s*$/);
            return o && (n += i),
            n
        }
        ,
        this.checkOutdent = function(e, t, i) {
            return this.$outdent.checkOutdent(t, i)
        }
        ,
        this.autoOutdent = function(e, t, i) {
            this.$outdent.autoOutdent(t, i)
        }
        ,
        this.getCompletions = function(e, t, i, n) {
            return this.$completer.getCompletions("ruleset", t, i, n)
        }
        ,
        this.$id = "ace/mode/less"
    }
    .call(c.prototype),
    t.Mode = c
}),
define("ace/theme/monokai", ["require", "exports", "module", "ace/lib/dom"], function(e, t) {
    t.isDark = !0,
    t.cssClass = "ace-monokai",
    t.cssText = ".ace-monokai .ace_gutter {background: #2a2a2a;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #232323;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #484848}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #333333}.ace-monokai .ace_gutter-active-line {background-color: #3a3a3a}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";
    var i = e("../lib/dom");
    i.importCssString(t.cssText, t.cssClass)
}),
define("ace/ext/searchbox", ["require", "exports", "module", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/keyboard/hash_handler", "ace/lib/keys"], function(e, t) {
    "use strict";
    var i = e("../lib/dom")
      , n = e("../lib/lang")
      , r = e("../lib/event")
      , o = ".ace_search {background-color: #ddd;border: 1px solid #cbcbcb;border-top: 0 none;max-width: 325px;overflow: hidden;margin: 0;padding: 4px;padding-right: 6px;padding-bottom: 0;position: absolute;top: 0px;z-index: 99;white-space: normal;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {border-radius: 3px;border: 1px solid #cbcbcb;float: left;margin-bottom: 4px;overflow: hidden;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {background-color: white;border-right: 1px solid #cbcbcb;border: 0 none;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;float: left;height: 22px;outline: 0;padding: 0 7px;width: 214px;margin: 0;}.ace_searchbtn,.ace_replacebtn {background: #fff;border: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;float: left;height: 22px;margin: 0;position: relative;}.ace_searchbtn:last-child,.ace_replacebtn:last-child {border-top-right-radius: 3px;border-bottom-right-radius: 3px;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn {background-position: 50% 50%;background-repeat: no-repeat;width: 27px;}.ace_searchbtn.prev {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    }.ace_searchbtn.next {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    }.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;float: right;font: 16px/16px Arial;height: 14px;margin: 5px 1px 9px 5px;padding: 0;text-align: center;width: 14px;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_replacebtn.prev {width: 54px}.ace_replacebtn.next {width: 27px}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;-moz-box-sizing: border-box;box-sizing:    border-box;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;}"
      , s = e("../keyboard/hash_handler").HashHandler
      , a = e("../lib/keys");
    i.importCssString(o, "ace_searchbox");
    var l = '<div class="ace_search right">    <button type="button" action="hide" class="ace_searchbtn_close"></button>    <div class="ace_search_form">        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>        <button type="button" action="findNext" class="ace_searchbtn next"></button>        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>        <button type="button" action="findAll" class="ace_searchbtn" title="Alt-Enter">All</button>    </div>    <div class="ace_replace_form">        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>    </div>    <div class="ace_search_options">        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>    </div></div>'.replace(/>\s+/g, ">")
      , c = function(e) {
        var t = i.createElement("div");
        t.innerHTML = l,
        this.element = t.firstChild,
        this.$init(),
        this.setEditor(e)
    };
    (function() {
        this.setEditor = function(e) {
            e.searchBox = this,
            e.container.appendChild(this.element),
            this.editor = e
        }
        ,
        this.$initElements = function(e) {
            this.searchBox = e.querySelector(".ace_search_form"),
            this.replaceBox = e.querySelector(".ace_replace_form"),
            this.searchOptions = e.querySelector(".ace_search_options"),
            this.regExpOption = e.querySelector("[action=toggleRegexpMode]"),
            this.caseSensitiveOption = e.querySelector("[action=toggleCaseSensitive]"),
            this.wholeWordOption = e.querySelector("[action=toggleWholeWords]"),
            this.searchInput = this.searchBox.querySelector(".ace_search_field"),
            this.replaceInput = this.replaceBox.querySelector(".ace_search_field")
        }
        ,
        this.$init = function() {
            var e = this.element;
            this.$initElements(e);
            var t = this;
            r.addListener(e, "mousedown", function(e) {
                setTimeout(function() {
                    t.activeInput.focus()
                }, 0),
                r.stopPropagation(e)
            }),
            r.addListener(e, "click", function(e) {
                var i = e.target || e.srcElement
                  , n = i.getAttribute("action");
                n && t[n] ? t[n]() : t.$searchBarKb.commands[n] && t.$searchBarKb.commands[n].exec(t),
                r.stopPropagation(e)
            }),
            r.addCommandKeyListener(e, function(e, i, n) {
                var o = a.keyCodeToString(n)
                  , s = t.$searchBarKb.findKeyCommand(i, o);
                s && s.exec && (s.exec(t),
                r.stopEvent(e))
            }),
            this.$onChange = n.delayedCall(function() {
                t.find(!1, !1)
            }),
            r.addListener(this.searchInput, "input", function() {
                t.$onChange.schedule(20)
            }),
            r.addListener(this.searchInput, "focus", function() {
                t.activeInput = t.searchInput,
                t.searchInput.value && t.highlight()
            }),
            r.addListener(this.replaceInput, "focus", function() {
                t.activeInput = t.replaceInput,
                t.searchInput.value && t.highlight()
            })
        }
        ,
        this.$closeSearchBarKb = new s([{
            bindKey: "Esc",
            name: "closeSearchBar",
            exec: function(e) {
                e.searchBox.hide()
            }
        }]),
        this.$searchBarKb = new s,
        this.$searchBarKb.bindKeys({
            "Ctrl-f|Command-f": function(e) {
                var t = e.isReplace = !e.isReplace;
                e.replaceBox.style.display = t ? "" : "none",
                e.searchInput.focus()
            },
            "Ctrl-H|Command-Option-F": function(e) {
                e.replaceBox.style.display = "",
                e.replaceInput.focus()
            },
            "Ctrl-G|Command-G": function(e) {
                e.findNext()
            },
            "Ctrl-Shift-G|Command-Shift-G": function(e) {
                e.findPrev()
            },
            esc: function(e) {
                setTimeout(function() {
                    e.hide()
                })
            },
            Return: function(e) {
                e.activeInput == e.replaceInput && e.replace(),
                e.findNext()
            },
            "Shift-Return": function(e) {
                e.activeInput == e.replaceInput && e.replace(),
                e.findPrev()
            },
            "Alt-Return": function(e) {
                e.activeInput == e.replaceInput && e.replaceAll(),
                e.findAll()
            },
            Tab: function(e) {
                (e.activeInput == e.replaceInput ? e.searchInput : e.replaceInput).focus()
            }
        }),
        this.$searchBarKb.addCommands([{
            name: "toggleRegexpMode",
            bindKey: {
                win: "Alt-R|Alt-/",
                mac: "Ctrl-Alt-R|Ctrl-Alt-/"
            },
            exec: function(e) {
                e.regExpOption.checked = !e.regExpOption.checked,
                e.$syncOptions()
            }
        }, {
            name: "toggleCaseSensitive",
            bindKey: {
                win: "Alt-C|Alt-I",
                mac: "Ctrl-Alt-R|Ctrl-Alt-I"
            },
            exec: function(e) {
                e.caseSensitiveOption.checked = !e.caseSensitiveOption.checked,
                e.$syncOptions()
            }
        }, {
            name: "toggleWholeWords",
            bindKey: {
                win: "Alt-B|Alt-W",
                mac: "Ctrl-Alt-B|Ctrl-Alt-W"
            },
            exec: function(e) {
                e.wholeWordOption.checked = !e.wholeWordOption.checked,
                e.$syncOptions()
            }
        }]),
        this.$syncOptions = function() {
            i.setCssClass(this.regExpOption, "checked", this.regExpOption.checked),
            i.setCssClass(this.wholeWordOption, "checked", this.wholeWordOption.checked),
            i.setCssClass(this.caseSensitiveOption, "checked", this.caseSensitiveOption.checked),
            this.find(!1, !1)
        }
        ,
        this.highlight = function(e) {
            this.editor.session.highlight(e || this.editor.$search.$options.re),
            this.editor.renderer.updateBackMarkers()
        }
        ,
        this.find = function(e, t, n) {
            var r = this.editor.find(this.searchInput.value, {
                skipCurrent: e,
                backwards: t,
                wrap: !0,
                regExp: this.regExpOption.checked,
                caseSensitive: this.caseSensitiveOption.checked,
                wholeWord: this.wholeWordOption.checked,
                preventScroll: n
            });
            i.setCssClass(this.searchBox, "ace_nomatch", !r && this.searchInput.value),
            this.highlight()
        }
        ,
        this.findNext = function() {
            this.find(!0, !1)
        }
        ,
        this.findPrev = function() {
            this.find(!0, !0)
        }
        ,
        this.findAll = function() {
            var e = this.editor.findAll(this.searchInput.value, {
                regExp: this.regExpOption.checked,
                caseSensitive: this.caseSensitiveOption.checked,
                wholeWord: this.wholeWordOption.checked
            })
              , t = !e && this.searchInput.value;
            i.setCssClass(this.searchBox, "ace_nomatch", t),
            this.editor._emit("findSearchBox", {
                match: !t
            }),
            this.highlight(),
            this.hide()
        }
        ,
        this.replace = function() {
            this.editor.getReadOnly() || this.editor.replace(this.replaceInput.value)
        }
        ,
        this.replaceAndFindNext = function() {
            this.editor.getReadOnly() || (this.editor.replace(this.replaceInput.value),
            this.findNext())
        }
        ,
        this.replaceAll = function() {
            this.editor.getReadOnly() || this.editor.replaceAll(this.replaceInput.value)
        }
        ,
        this.hide = function() {
            this.element.style.display = "none",
            this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),
            this.editor.focus()
        }
        ,
        this.show = function(e, t) {
            this.element.style.display = "",
            this.replaceBox.style.display = t ? "" : "none",
            this.isReplace = t,
            e && (this.searchInput.value = e),
            this.find(!1, !1, !0),
            this.searchInput.focus(),
            this.searchInput.select(),
            this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb)
        }
        ,
        this.isFocused = function() {
            var e = document.activeElement;
            return e == this.searchInput || e == this.replaceInput
        }
    }
    ).call(c.prototype),
    t.SearchBox = c,
    t.Search = function(e, t) {
        var i = e.searchBox || new c(e);
        i.show(e.session.getTextRange(), t)
    }
}),