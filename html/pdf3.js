!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var o in n) ("object" == typeof exports ? exports : e)[o] = n[o];
  }
})(window, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              o,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 1))
    );
  })([
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      n(2), (e.exports = n(6));
    },
    function (e, t, n) {
      (function (o, i) {
        var r, a;
        function s(e) {
          return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        !(function (o, i) {
          "object" == s(t) && void 0 !== e
            ? i()
            : void 0 ===
                (a = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) ||
              (e.exports = a);
        })(0, function () {
          "use strict";
          function e(e) {
            var t = this.constructor;
            return this.then(
              function (n) {
                return t.resolve(e()).then(function () {
                  return n;
                });
              },
              function (n) {
                return t.resolve(e()).then(function () {
                  return t.reject(n);
                });
              }
            );
          }
          function t() {}
          function n(e) {
            if (!(this instanceof n))
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              d(e, this);
          }
          function r(e, t) {
            for (; 3 === e._state; ) e = e._value;
            0 !== e._state
              ? ((e._handled = !0),
                n._immediateFn(function () {
                  var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                  if (null !== n) {
                    var o;
                    try {
                      o = n(e._value);
                    } catch (e) {
                      return void c(t.promise, e);
                    }
                    a(t.promise, o);
                  } else (1 === e._state ? a : c)(t.promise, e._value);
                }))
              : e._deferreds.push(t);
          }
          function a(e, t) {
            try {
              if (t === e)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (t && ("object" == s(t) || "function" == typeof t)) {
                var o = t.then;
                if (t instanceof n)
                  return (e._state = 3), (e._value = t), void l(e);
                if ("function" == typeof o)
                  return void d(
                    (function (e, t) {
                      return function () {
                        e.apply(t, arguments);
                      };
                    })(o, t),
                    e
                  );
              }
              (e._state = 1), (e._value = t), l(e);
            } catch (t) {
              c(e, t);
            }
          }
          function c(e, t) {
            (e._state = 2), (e._value = t), l(e);
          }
          function l(e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              n._immediateFn(function () {
                e._handled || n._unhandledRejectionFn(e._value);
              });
            for (var t = 0, o = e._deferreds.length; o > t; t++)
              r(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function d(e, t) {
            var n = !1;
            try {
              e(
                function (e) {
                  n || ((n = !0), a(t, e));
                },
                function (e) {
                  n || ((n = !0), c(t, e));
                }
              );
            } catch (e) {
              if (n) return;
              (n = !0), c(t, e);
            }
          }
          var u = setTimeout;
          (n.prototype.catch = function (e) {
            return this.then(null, e);
          }),
            (n.prototype.then = function (e, n) {
              var o = new this.constructor(t);
              return (
                r(
                  this,
                  new (function (e, t, n) {
                    (this.onFulfilled = "function" == typeof e ? e : null),
                      (this.onRejected = "function" == typeof t ? t : null),
                      (this.promise = n);
                  })(e, n, o)
                ),
                o
              );
            }),
            (n.prototype.finally = e),
            (n.all = function (e) {
              return new n(function (t, n) {
                function o(e, a) {
                  try {
                    if (a && ("object" == s(a) || "function" == typeof a)) {
                      var c = a.then;
                      if ("function" == typeof c)
                        return void c.call(
                          a,
                          function (t) {
                            o(e, t);
                          },
                          n
                        );
                    }
                    (i[e] = a), 0 == --r && t(i);
                  } catch (e) {
                    n(e);
                  }
                }
                if (!e || void 0 === e.length)
                  throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return t([]);
                for (var r = i.length, a = 0; i.length > a; a++) o(a, i[a]);
              });
            }),
            (n.resolve = function (e) {
              return e && "object" == s(e) && e.constructor === n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }),
            (n.reject = function (e) {
              return new n(function (t, n) {
                n(e);
              });
            }),
            (n.race = function (e) {
              return new n(function (t, n) {
                for (var o = 0, i = e.length; i > o; o++) e[o].then(t, n);
              });
            }),
            (n._immediateFn =
              ("function" == typeof o &&
                function (e) {
                  o(e);
                }) ||
              function (e) {
                u(e, 0);
              }),
            (n._unhandledRejectionFn = function (e) {
              void 0 !== console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", e);
            });
          var f = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== i) return i;
            throw Error("unable to locate global object");
          })();
          "Promise" in f
            ? f.Promise.prototype.finally || (f.Promise.prototype.finally = e)
            : (f.Promise = n);
        });
      }.call(this, n(3).setImmediate, n(0)));
    },
    function (e, t, n) {
      (function (e) {
        var o =
            (void 0 !== e && e) ||
            ("undefined" != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function r(e, t) {
          (this._id = e), (this._clearFn = t);
        }
        (t.setTimeout = function () {
          return new r(i.call(setTimeout, o, arguments), clearTimeout);
        }),
          (t.setInterval = function () {
            return new r(i.call(setInterval, o, arguments), clearInterval);
          }),
          (t.clearTimeout = t.clearInterval =
            function (e) {
              e && e.close();
            }),
          (r.prototype.unref = r.prototype.ref = function () {}),
          (r.prototype.close = function () {
            this._clearFn.call(o, this._id);
          }),
          (t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
          }),
          (t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
          }),
          (t._unrefActive = t.active =
            function (e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              t >= 0 &&
                (e._idleTimeoutId = setTimeout(function () {
                  e._onTimeout && e._onTimeout();
                }, t));
            }),
          n(4),
          (t.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== e && e.setImmediate) ||
            (this && this.setImmediate)),
          (t.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== e && e.clearImmediate) ||
            (this && this.clearImmediate));
      }.call(this, n(0)));
    },
    function (e, t, n) {
      (function (e, t) {
        !(function (e, n) {
          "use strict";
          if (!e.setImmediate) {
            var o,
              i,
              r,
              a,
              s,
              c = 1,
              l = {},
              d = !1,
              u = e.document,
              f = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (f = f && f.setTimeout ? f : e),
              "[object process]" === {}.toString.call(e.process)
                ? (o = function (e) {
                    t.nextTick(function () {
                      h(e);
                    });
                  })
                : !(function () {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function () {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? e.MessageChannel
                  ? (((r = new MessageChannel()).port1.onmessage = function (
                      e
                    ) {
                      h(e.data);
                    }),
                    (o = function (e) {
                      r.port2.postMessage(e);
                    }))
                  : u && "onreadystatechange" in u.createElement("script")
                  ? ((i = u.documentElement),
                    (o = function (e) {
                      var t = u.createElement("script");
                      (t.onreadystatechange = function () {
                        h(e),
                          (t.onreadystatechange = null),
                          i.removeChild(t),
                          (t = null);
                      }),
                        i.appendChild(t);
                    }))
                  : (o = function (e) {
                      setTimeout(h, 0, e);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (t) {
                    t.source === e &&
                      "string" == typeof t.data &&
                      0 === t.data.indexOf(a) &&
                      h(+t.data.slice(a.length));
                  }),
                  e.addEventListener
                    ? e.addEventListener("message", s, !1)
                    : e.attachEvent("onmessage", s),
                  (o = function (t) {
                    e.postMessage(a + t, "*");
                  })),
              (f.setImmediate = function (e) {
                "function" != typeof e && (e = new Function("" + e));
                for (
                  var t = new Array(arguments.length - 1), n = 0;
                  n < t.length;
                  n++
                )
                  t[n] = arguments[n + 1];
                var i = { callback: e, args: t };
                return (l[c] = i), o(c), c++;
              }),
              (f.clearImmediate = p);
          }
          function p(e) {
            delete l[e];
          }
          function h(e) {
            if (d) setTimeout(h, 0, e);
            else {
              var t = l[e];
              if (t) {
                d = !0;
                try {
                  !(function (e) {
                    var t = e.callback,
                      n = e.args;
                    switch (n.length) {
                      case 0:
                        t();
                        break;
                      case 1:
                        t(n[0]);
                        break;
                      case 2:
                        t(n[0], n[1]);
                        break;
                      case 3:
                        t(n[0], n[1], n[2]);
                        break;
                      default:
                        t.apply(void 0, n);
                    }
                  })(t);
                } finally {
                  p(e), (d = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(this, n(0), n(5)));
    },
    function (e, t) {
      var n,
        o,
        i = (e.exports = {});
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : r;
        } catch (e) {
          n = r;
        }
        try {
          o = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          o = a;
        }
      })();
      var c,
        l = [],
        d = !1,
        u = -1;
      function f() {
        d &&
          c &&
          ((d = !1), c.length ? (l = c.concat(l)) : (u = -1), l.length && p());
      }
      function p() {
        if (!d) {
          var e = s(f);
          d = !0;
          for (var t = l.length; t; ) {
            for (c = l, l = []; ++u < t; ) c && c[u].run();
            (u = -1), (t = l.length);
          }
          (c = null),
            (d = !1),
            (function (e) {
              if (o === clearTimeout) return clearTimeout(e);
              if ((o === a || !o) && clearTimeout)
                return (o = clearTimeout), clearTimeout(e);
              try {
                o(e);
              } catch (t) {
                try {
                  return o.call(null, e);
                } catch (t) {
                  return o.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new h(e, t)), 1 !== l.length || d || s(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = m),
        (i.addListener = m),
        (i.once = m),
        (i.off = m),
        (i.removeListener = m),
        (i.removeAllListeners = m),
        (i.emit = m),
        (i.prependListener = m),
        (i.prependOnceListener = m),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "getInstance", function () {
          return w;
        });
      var o = {
        ASM: "asm",
        WASM: "ems",
        JS_WORKER: "jsworker",
        THREADED_WASM: "wasm-threads",
      };
      function i(e, t) {
        if ("string" != typeof e || !t) return e;
        var n = t.substr(0, t.lastIndexOf("/"));
        return /^(\/|%2F|[a-z0-9-]+:)/i.test(e) ? e : n + "/" + e;
      }
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                s(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var c = {},
        l = 0;
      (window.isPdfjs = !0),
        "undefined" == typeof console &&
          (window.console = {
            log: function () {},
            warn: function () {},
            error: function () {},
          });
      var d = function () {
          for (var e = 1; e < arguments.length; e++)
            for (var t = Object.keys(arguments[e]), n = 0; n < t.length; n++)
              arguments[0][t[n]] = arguments[e][t[n]];
          return arguments[0];
        },
        u = function (e) {
          var t = [];
          return (
            e.forEach(function (e) {
              t.push(e);
            }),
            t
          );
        },
        f = function (e, t) {
          var n;
          try {
            n = new CustomEvent(e, { detail: t, bubbles: !0, cancelable: !0 });
          } catch (o) {
            (n = document.createEvent("Event")).initEvent(e, !0, !0),
              (n.detail = t);
          }
          return n;
        };
      window.PDFNet &&
        !c.skipPDFNetWebViewerWarning &&
        console.warn(
          "PDFNet.js and WebViewer.js have been included in the same context. See https://www.pdftron.com/kb_same_context for an explanation of why this could be an error in your application."
        );
      var p = new Map(),
        h = new Map();
      c.WebViewer = function (e, t) {
        var n = this;
        if (h.get(t))
          throw new Error(
            "Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer"
          );
        h.set(t, !0);
        t.addEventListener("ready", function e() {
          (p.get(t).instance = n.getCompleteInstance()),
            t.removeEventListener("ready", e);
        }),
          this._validateOptions(e);
        var o = e.webviewerServerURL || e.pdftronServer;
        e.fullAPI &&
          o &&
          (e.forceClientSideInit ||
            console.warn(
              "The fullAPI and webviewerServerURL options have both been set so the forceClientSideInit option is now enabled. This means that WebViewer will switch to client side rendering and processing to allow use of the full API."
            ),
          (e.forceClientSideInit = !0)),
          (this.options = d({}, c.WebViewer.Options, e));
        var i = this.options.path.length - 1;
        i > 0 && "/" !== this.options.path[i] && (this.options.path += "/"),
          (this.options.uiPath = this.options.path + this.options.uiPath),
          t ||
            console.error(
              "ViewerElement is not defined. This may be caused by calling the WebViewer constructor before the DOM is loaded, or an invalid selector. Please see http://r.pdftron.com/guides/quick-start for an example."
            ),
          (this.element = t),
          (this.element.style.overflow = "hidden");
        var r = this;
        (this.messageHandler = function (t) {
          if (
            ("requestl" === t.data &&
              t.source &&
              t.source.postMessage(
                { type: "responsel", value: e.l || e.licenseKey },
                "*"
              ),
            "requestConfig" === t.data.type && t.data.id === r.id && t.source)
          ) {
            var n = e.config ? r._correctRelativePath(e.config) : "";
            t.source.postMessage({ type: "responseConfig", value: n }, "*");
          }
        }),
          window.addEventListener("message", this.messageHandler, !1),
          this.options.autoCreate && this.create();
      };
      var m = {
        licenseKey: void 0,
        enableAzureWorkaround: !1,
        isAdminUser: !1,
        isReadOnly: !1,
      };
      (c.WebViewer.prototype = {
        version: "8.7.0",
        create: function () {
          if (this.options.initialDoc) {
            var e = this._correctRelativePath(this.options.initialDoc);
            (e = encodeURIComponent(JSON.stringify(e))),
              (this.options.initialDoc = e);
          }
          this._create();
        },
        _create: function () {
          (this.id = ++l),
            void 0 === this._trigger &&
              (this._trigger = function (e, t) {
                var n = f(e, t);
                this.element.dispatchEvent(n);
              });
          var e = this.options.type.replace(" ", "").split(",");
          e.length < 1 && (e[0] = "html5"), this._createViewer(e);
        },
        _validateOptions: function (e) {
          for (var t = Object.keys(e), n = 0; n < t.length; n++) {
            var o = t[n];
            o in d({}, m, c.WebViewer.Options) ||
              console.warn(
                "".concat(
                  o,
                  " is not a valid option name. See http://r.pdftron.com/api/options_anchor for all available options."
                )
              );
          }
          var i = e.webviewerServerURL || e.pdftronServer;
          !e.enableRedaction ||
            e.fullAPI ||
            i ||
            console.warn(
              "FullAPI or WebViewer Server is needed to apply redactions"
            );
        },
        _notSupportedMobile: function () {
          var e = document.createElement("div");
          (e.id = "webviewer-browser-unsupported"),
            (e.textContent =
              "PDF document viewing is not supported by this browser."),
            this.element.appendChild(e);
        },
        _createViewer: function (e) {
          var t,
            n = this;
          if (((n.selectedType = null), this.isMobileDevice())) {
            if (
              this.options.documentType &&
              "xod" !== this.options.documentType &&
              !this._testWebAssembly()
            )
              return void this._notSupportedMobile();
            if (
              ((e = Array("html5Mobile")),
              (n.selectedType = "html5Mobile"),
              this.options.mobileRedirect)
            )
              return (
                (t = this.options.uiPath + this._getHTML5OptionsURL()),
                void (window.location = t)
              );
          }
          for (var o = !1, i = !1, r = 0; r < e.length; r++) {
            if ("html5mobile" === e[r].toLowerCase()) {
              if (
                this.options.documentType &&
                "xod" !== this.options.documentType &&
                !this._testWebAssembly()
              )
                continue;
              if (((o = !0), n._testHTML5())) {
                if (this.options.mobileRedirect)
                  return (
                    (n.selectedType = "html5Mobile"),
                    (t = this.options.uiPath + this._getHTML5OptionsURL()),
                    void (window.location = t)
                  );
                if (
                  this.options.xdomainProxyUrl ||
                  n.isSameOrigin(decodeURIComponent(n.options.initialDoc)) ||
                  n._testCORS()
                ) {
                  n.selectedType = "html5Mobile";
                  break;
                }
                i = !0;
              }
            }
            if ("html5" === e[r].toLowerCase() && ((o = !0), n._testHTML5())) {
              var a = n.isSameOrigin(decodeURIComponent(n.options.initialDoc));
              if (this.options.xdomainProxyUrl || a || n._testCORS()) {
                n.selectedType = "html5";
                break;
              }
              i = !0;
            }
          }
          if ("html5" === n.selectedType) n._createHTML5();
          else if ("html5Mobile" === n.selectedType) n._createHTML5Mobile();
          else {
            var s;
            if (
              (i
                ? (s =
                    "This browser does not support cross origin requests. Please configure xdomain to support CORS.")
                : o && (s = "Please use an HTML5 compatible browser."),
              s)
            ) {
              var c = document.createElement("div");
              (c.id = "webviewer-browser-unsupported"),
                (c.textContent = s),
                n.element.appendChild(c);
            }
          }
        },
        _viewerLoaded: function (e) {
          this._trigger("ready");
          try {
            var t = e.contentWindow;
            if (
              (t.postMessage({ type: "viewerLoaded" }, "*"),
              void 0 !== this.options.encryption)
            ) {
              var n = decodeURIComponent(this.options.initialDoc);
              this.options.initialDoc && (n = JSON.parse(n));
              var o = {
                decrypt: t.Core.Encryption.decrypt,
                decryptOptions: this.options.encryption,
                documentId: this.options.documentId,
                extension: "xod",
              };
              this.getInstance().loadDocument(n, o);
            }
          } catch (e) {
            console.warn(
              "Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See http://r.pdftron.com/kb_cross_origin for more information."
            );
          }
        },
        _getHTML5OptionsURL: function () {
          var e,
            t,
            n,
            o = this.options,
            i = o.webviewerServerURL || o.pdftronServer,
            r = "";
          if (
            (o.initialDoc && (r += "#d=".concat(o.initialDoc)),
            void 0 === o.backendType && (o.backendType = o.pdfBackend),
            o.documentType && "xod" === o.documentType && (e = o.documentType),
            o.preloadWorker &&
              "xod" === o.preloadWorker &&
              (e = o.preloadWorker),
            o.extension && (e = o.extension),
            e && (r += "&extension=".concat(e)),
            o.documentType && "xod" !== o.documentType && (t = o.documentType),
            o.preloadWorker &&
              "xod" !== o.preloadWorker &&
              (t = o.preloadWorker),
            t && (r += "&preloadWorker=".concat(t)),
            o.backendType &&
              (r += "&pdf="
                .concat(o.backendType, "&office=")
                .concat(o.backendType, "&legacyOffice=")
                .concat(o.backendType)),
            o.filename && (r += "&filename=".concat(o.filename)),
            void 0 !== o.streaming && (r += "&streaming=".concat(o.streaming)),
            o.externalPath)
          ) {
            var a = this._correctRelativePath(o.externalPath);
            (a = encodeURIComponent(a)), (r += "&p=".concat(a));
          }
          if (
            (o.encryption && (r += "&auto_load=false"),
            o.enableAnnotations && (r += "&a=1"),
            o.disabledElements)
          ) {
            var s = encodeURIComponent(o.disabledElements.join(","));
            r += "&disabledElements=".concat(s);
          }
          if (o.serverUrl) {
            var c = this._correctRelativePath(o.serverUrl);
            (c = encodeURIComponent(c)), (r += "&server_url=".concat(c));
          }
          if (
            (o.serverUrlHeaders &&
              (r += "&serverUrlHeaders=".concat(
                JSON.stringify(o.serverUrlHeaders)
              )),
            o.documentId && (r += "&did=".concat(o.documentId)),
            o.css)
          ) {
            var l = this._correctRelativePath(o.css);
            (l = encodeURIComponent(l)), (r += "&css=".concat(l));
          }
          if (
            (o.disableI18n && (r += "&disableI18n=1"),
            o.enableOfflineMode && (r += "&offline=1"),
            o.startOffline && (r += "&startOffline=1"),
            (o.enableReadOnlyMode || o.isReadOnly) && (r += "&readonly=1"),
            o.hideAnnotationPanel && (r += "&hideAnnotationPanel=1"),
            o.disableToolGroupReordering &&
              (r += "&disableToolGroupReordering=1"),
            void 0 !== o.annotationUser &&
              (r += "&user=".concat(o.annotationUser)),
            (void 0 === o.annotationAdmin && void 0 === o.isAdminUser) ||
              (r += "&admin=".concat(
                o.annotationAdmin || o.isAdminUser ? 1 : 0
              )),
            void 0 !== o.custom &&
              (r += "&custom=".concat(encodeURIComponent(o.custom))),
            (void 0 === o.showLocalFilePicker &&
              void 0 === o.enableFilePicker) ||
              (r += "&filepicker=".concat(
                o.showLocalFilePicker || o.enableFilePicker ? 1 : 0
              )),
            void 0 !== o.fullAPI)
          ) {
            if (o.fullAPI)
              throw new Error(
                '"fullAPI" is not a valid constuctor option for PDF.js Express. Please make sure you are referring to the proper documentation (https://pdfjs.express/documentation)'
              );
            r += "&pdfnet=".concat(o.fullAPI ? 1 : 0);
          }
          (void 0 !== o.enableRedaction &&
            (r += "&enableRedaction=".concat(o.enableRedaction ? 1 : 0)),
          void 0 !== o.disableVirtualDisplayMode &&
            (r += "&disableVirtualDisplayMode=".concat(
              o.disableVirtualDisplayMode ? 1 : 0
            )),
          void 0 !== o.enableMeasurement &&
            (r += "&enableMeasurement=".concat(o.enableMeasurement ? 1 : 0)),
          void 0 !== o.showToolbarControl &&
            (r += "&toolbar=".concat(o.showToolbarControl ? "true" : "false")),
          void 0 !== o.showPageHistoryButtons &&
            (r += "&pageHistory=".concat(o.showPageHistoryButtons ? 1 : 0)),
          void 0 !== o.notesInLeftPanel &&
            (r += "&notesInLeftPanel=".concat(o.notesInLeftPanel ? 1 : 0)),
          void 0 !== o.xdomainProxyUrl) &&
            ((n =
              "string" == typeof o.xdomainProxyUrl
                ? { url: o.xdomainProxyUrl }
                : o.xdomainProxyUrl),
            (r += "&xdomain_urls=".concat(
              encodeURIComponent(JSON.stringify(n))
            )));
          return (
            (o.azureWorkaround || o.enableAzureWorkaround) &&
              (r += "&azureWorkaround=1"),
            o.enableOptimizedWorkers || (r += "&enableOptimizedWorkers=0"),
            o.useDownloader || (r += "&useDownloader=0"),
            o.disableWebsockets && (r += "&disableWebsockets=1"),
            o.disableStreaming && (r += "&disableStreaming=1"),
            o.forceClientSideInit && (r += "&forceClientSideInit=1"),
            o.loadAsPDF && (r += "&loadAsPDF=1"),
            void 0 !== o.workerTransportPromise &&
              (r += "&useSharedWorker=".concat(
                o.workerTransportPromise ? "true" : "false"
              )),
            void 0 !== i &&
              i &&
              (r += "&webviewerServerURL=".concat(encodeURIComponent(i))),
            o.fallbackToClientSide && (r += "&fallbackToClientSide=1"),
            void 0 !== o.singleServerMode &&
              (r += "&singleServerMode=".concat(
                o.singleServerMode ? "true" : "false"
              )),
            void 0 !== o.accessibleMode &&
              (r += "&accessibleMode=".concat(o.accessibleMode ? 1 : 0)),
            o.disableLogs && (r += "&disableLogs=1"),
            o.enableViewStateAnnotations &&
              (r += "&enableViewStateAnnotations=1"),
            o.disableFlattenedAnnotations &&
              (r += "&disableFlattenedAnnotations=1"),
            o.highContrastMode && (r += "&highContrastMode=1"),
            void 0 !== o.selectAnnotationOnCreation &&
              (r += "&selectAnnotationOnCreation=".concat(
                o.selectAnnotationOnCreation ? 1 : 0
              )),
            void 0 !== o.autoFocusNoteOnAnnotationSelection &&
              (r += "&autoFocusNoteOnAnnotationSelection=".concat(
                o.autoFocusNoteOnAnnotationSelection ? 1 : 0
              )),
            (r += "&id=".concat(this.id)),
            (r += "&basePath=".concat(
              encodeURIComponent(window.location.pathname)
            )).length > 0 &&
              "&" === r[0] &&
              (r = "#".concat(r.slice(1))),
            (r += "&webViewerJSVersion=".concat(this.version))
          );
        },
        setInstanceData: function (e) {
          p.set(this.element, {
            iframe: e,
            l: this.options.l || this.options.licenseKey,
            workerTransportPromise: this.options.workerTransportPromise,
          });
        },
        _createHTML5: function () {
          var e = this,
            t = this.options.uiPath + this._getHTML5OptionsURL(),
            n = document.createElement("iframe");
          this.setInstanceData(n),
            (n.id = "webviewer-".concat(this.id)),
            (n.src = t),
            (n.title = "webviewer"),
            (n.frameBorder = 0),
            (n.width = "100%"),
            (n.height = "100%"),
            n.setAttribute("allowfullscreen", !0),
            n.setAttribute("webkitallowfullscreen", !0),
            n.setAttribute("mozallowfullscreen", !0),
            (this.iframe = n),
            this.options.backgroundColor &&
              n.setAttribute("data-bgcolor", this.options.backgroundColor),
            this.options.assetPath &&
              n.setAttribute(
                "data-assetpath",
                encodeURIComponent(this.options.assetPath)
              ),
            this.element.appendChild(n);
          window.addEventListener("message", function t(n) {
            if ("viewerLoaded" === n.data.type && n.data.id === e.id)
              try {
                e.instance = e.iframe.contentWindow.instance;
              } catch (e) {
              } finally {
                window.removeEventListener("message", t),
                  e._viewerLoaded(e.iframe);
              }
          });
        },
        _createHTML5Mobile: function () {
          var e = this,
            t = this.options.uiPath + this._getHTML5OptionsURL(),
            n = document.createElement("iframe");
          this.setInstanceData(n),
            (n.id = "webviewer-".concat(this.id)),
            (n.src = t),
            (n.frameborder = 0),
            this.options.assetPath &&
              n.setAttribute(
                "data-assetpath",
                encodeURIComponent(this.options.assetPath)
              ),
            (n.style.width = "100%"),
            (n.style.height = "100%"),
            (this.iframe = n),
            this.element.appendChild(n);
          window.addEventListener("message", function t(n) {
            if ("viewerLoaded" === n.data.type && n.data.id === e.id)
              try {
                e.instance = e.iframe.contentWindow.instance;
              } catch (e) {
              } finally {
                window.removeEventListener("message", t),
                  e._viewerLoaded(e.iframe);
              }
          });
        },
        dispose: function () {
          p.delete(this.element),
            h.delete(this.element),
            this.instance.closeDocument(),
            window.removeEventListener("message", this.messageHandler),
            this.iframe.removeEventListener("load", this.loadListener),
            (this.iframe = null);
        },
        getInstance: function () {
          return this.instance;
        },
        setCompleteInstance: function (e) {
          this.completeInstance = e;
        },
        getCompleteInstance: function () {
          return this.completeInstance;
        },
        _correctRelativePath: function (e) {
          var t = window.location.pathname;
          return Array.isArray(e)
            ? e.map(function (e) {
                return i(e, t);
              })
            : i(e, t);
        },
        _testHTML5: function () {
          try {
            var e = document.createElement("canvas");
            return e && e.getContext("2d");
          } catch (e) {
            return !1;
          }
        },
        _testWebAssembly: function () {
          return !(!window.WebAssembly || !window.WebAssembly.validate);
        },
        _testCORS: function () {
          return (
            "XMLHttpRequest" in window &&
            "withCredentials" in new XMLHttpRequest()
          );
        },
        isIE: function () {
          var e = navigator.userAgent.toLowerCase(),
            t =
              /(msie) ([\w.]+)/.exec(e) ||
              /(trident)(?:.*? rv:([\w.]+)|)/.exec(e);
          return t ? parseInt(t[2], 10) : t;
        },
        isMobileDevice: function () {
          return (
            !this.isIE() &&
            ((0 === this.scrollbarWidth() &&
              navigator.userAgent.match(/Edge/i)) ||
              navigator.userAgent.match(/Android/i) ||
              navigator.userAgent.match(/webOS/i) ||
              navigator.userAgent.match(/iPhone/i) ||
              navigator.userAgent.match(/iPod/i) ||
              navigator.userAgent.match(/iPad/i) ||
              navigator.userAgent.match(/Touch/i) ||
              navigator.userAgent.match(/IEMobile/i) ||
              navigator.userAgent.match(/Silk/i))
          );
        },
        scrollbarWidth: function () {
          var e = document.createElement("div");
          (e.style.cssText =
            "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px"),
            document.body.appendChild(e);
          var t = e.offsetWidth - e.clientWidth;
          return document.body.removeChild(e), t;
        },
        isSameOrigin: function (e) {
          var t = window.location,
            n = document.createElement("a");
          (n.href = e), "" === n.host && (n.href = n.href);
          var o = window.location.port,
            i = n.port;
          return (
            "http:" === n.protocol
              ? ((i = i || "80"), (o = o || "80"))
              : "https:" === n.protocol && ((i = i || "443"), (o = o || "443")),
            n.hostname === t.hostname && n.protocol === t.protocol && i === o
          );
        },
      }),
        (c.WebViewer.Options = {
          initialDoc: void 0,
          annotationAdmin: void 0,
          isAdminUser: void 0,
          annotationUser: void 0,
          assetPath: void 0,
          autoCreate: !0,
          autoFocusNoteOnAnnotationSelection: !0,
          azureWorkaround: !1,
          additionalTranslations: void 0,
          enableAzureWorkaround: !1,
          enableOptimizedWorkers: !0,
          backgroundColor: void 0,
          backendType: void 0,
          css: void 0,
          config: void 0,
          custom: void 0,
          documentId: void 0,
          documentType: void 0,
          preloadWorker: void 0,
          extension: void 0,
          enableAnnotations: !0,
          filename: void 0,
          disableI18n: !1,
          disabledElements: void 0,
          disableWebsockets: !1,
          enableOfflineMode: !1,
          enableReadOnlyMode: !1,
          isReadOnly: !1,
          enableRedaction: !1,
          disableVirtualDisplayMode: !1,
          enableMeasurement: !1,
          encryption: void 0,
          externalPath: void 0,
          hideAnnotationPanel: !1,
          disableToolGroupReordering: !1,
          uiPath: "./ui/index.html",
          l: void 0,
          licenseKey: void 0,
          mobileRedirect: !1,
          path: "",
          pdfBackend: void 0,
          webviewerServerURL: void 0,
          fallbackToClientSide: !1,
          singleServerMode: !1,
          fullAPI: !1,
          preloadPDFWorker: !0,
          serverUrl: void 0,
          serverUrlHeaders: void 0,
          showLocalFilePicker: !1,
          enableFilePicker: !1,
          showPageHistoryButtons: !0,
          showToolbarControl: void 0,
          startOffline: !1,
          streaming: void 0,
          type: "html5",
          useDownloader: !0,
          workerTransportPromise: void 0,
          xdomainProxyUrl: void 0,
          ui: void 0,
          forceClientSideInit: !1,
          loadAsPDF: !1,
          accessibleMode: void 0,
          disableLogs: !1,
          enableViewStateAnnotations: !1,
          highContrastMode: !1,
          selectAnnotationOnCreation: !1,
          notesInLeftPanel: !1,
          documentXFDFRetriever: void 0,
          disableFlattenedAnnotations: !1,
          disableStreaming: !1,
        });
      var v = function (e, t) {
          return new Promise(function (n, o) {
            (e.l = e.l || e.licenseKey),
              (e.azureWorkaround =
                e.azureWorkaround || e.enableAzureWorkaround),
              (e.annotationAdmin = e.annotationAdmin || e.isAdminUser),
              (e.enableReadOnlyMode = e.enableReadOnlyMode || e.isReadOnly),
              (e.showLocalFilePicker =
                e.showLocalFilePicker || e.enableFilePicker);
            t.addEventListener("ready", function r() {
              t.removeEventListener("ready", r);
              try {
                var c = t.querySelector("iframe").contentWindow;
                if (void 0 === c.Tools)
                  throw new Error(
                    "Viewer isn't instantiated correctly. It could be caused by the 'path' option in the WebViewer constructor not being defined correctly. The 'path' option should be relative to the HTML file you're loading the script on and the lib folder needs to be publicly accessible."
                  );
                var l = i.getInstance(),
                  u = { iframeWindow: c, dispose: i.dispose.bind(i) },
                  f = d(
                    {},
                    l,
                    a(
                      s(
                        {},
                        l.UI_NAMESPACE_KEY,
                        a(a({}, l[l.UI_NAMESPACE_KEY]), u)
                      ),
                      u
                    )
                  );
                i.setCompleteInstance(f);
                var p = Promise.resolve();
                if (
                  (e.documentXFDFRetriever &&
                    (p = f[
                      l.CORE_NAMESPACE_KEY
                    ].documentViewer.setDocumentXFDFRetriever(
                      e.documentXFDFRetriever
                    )),
                  e.additionalTranslations)
                ) {
                  var h = e.additionalTranslations;
                  f[l.UI_NAMESPACE_KEY].setTranslations(
                    h.language,
                    h.translations
                  );
                }
                p.then(function () {
                  n(f);
                });
              } catch (t) {
                if ("config" in e && "" !== e.config) return n();
                o(
                  "Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://www.pdftron.com/kb_cross_origin for more information."
                );
              }
            });
            var i = new c.WebViewer(e, t);
          });
        },
        b = function (e) {
          for (var t = u(p), n = 0; n < t.length; n++) {
            var o = t[n];
            if (o.iframe === e) return o;
          }
          return null;
        };
      (v.l = function (e) {
        var t = b(e);
        return t && t.l;
      }),
        (v.workerTransportPromise = function (e) {
          var t = b(e);
          return t && t.workerTransportPromise;
        }),
        (v.WorkerTypes = {
          ALL: "all",
          OFFICE: "office",
          LEGACY_OFFICE: "legacyOffice",
          PDF: "pdf",
          CONTENT_EDIT: "contentEdit",
        }),
        (v.BackendTypes = o);
      var w = function (e) {
        var t = u(p);
        if (
          !t.length ||
          !t.filter(function (e) {
            return e.instance;
          }).length
        )
          return (
            console.warn(
              "WebViewer.getInstance() was called before any instances were available"
            ),
            null
          );
        if (t.length > 1 && !e)
          throw new Error(
            "More than one instance of WebViewer was found, and no element was passed into getInstance(). Please specify which instance you want to get."
          );
        return e ? (p.get(e) || {}).instance : (t[0] || {}).instance;
      };
      (v.getInstance = w), (window.WebViewer = v);
      t.default = v;
    },
  ]);
});
