if (!window.plus || window.plus && !window.plus.isReady) {
    var type = typeof window.plus;
    "function" == type || "object" == type ? (window.plus.isReady = !0, navigator.plus = window.__html5plus__ = window.plus) : window.__html5plus__ = window.plus = navigator.plus = {
        isReady: !0
    }
}

function __adsfsdaf99dsafsd090dsfsd__() {
    var e = ["plus", "tools", "bridge", "Console", "console", "concat", "slice", "call", "logLevel", "apply", "j", "o", "stringify", "c", "", "error JSON.stringify()ing argument: ", "prototype", "toString", "", "length", "string", "exec", "shift", "push", "%", "%", "unshift", "join", "", "log", "LOG", "info", "INFO", "warn", "WARN", "error", "ERROR", "assert", "ASSERT:", "clear", "clear", "time", "valueOf", "timeEnd", "Timer [", ": ", "ms]", "format", "logLevel", " ", "debug", "addEventListener", "error", "message", "\rfilename:", "filename", "\rlineno:", "lineno"],
        t = (window[e[0]][e[1]], window[e[0]]);

    function n(t, n) {
        n = [t][e[5]]([][e[6]][e[7]](n)), logger[e[8]][e[9]](logger, n)
    }

    function i(t, n) {
        try {
            switch (n) {
                case e[10]:
                case e[11]:
                    return JSON[e[12]](t);
                case e[13]:
                    return e[14]
            }
        } catch (t) {
            return e[15] + t
        }
        return null == t ? Object[e[16]].toString[e[7]](t) : t[e[17]]()
    }
    B = window[e[0]][e[2]], _LOGF = e[3], winConsole = window[e[4]], Timers = {}, logger = {}, logger[e[29]] = function(t) {
        n(e[30], arguments)
    }, logger[e[31]] = function(t) {
        n(e[32], arguments)
    }, logger[e[33]] = function(t) {
        n(e[34], arguments)
    }, logger[e[35]] = function(t) {
        n(e[36], arguments)
    }, logger[e[37]] = function(t) {
        if (!t) {
            var n = vformat([][e[6]][e[7]](arguments, 1));
            throw logger[e[29]](e[38] + n), new Error(n)
        }
    }, logger[e[39]] = function() {
        B[e[21]](_LOGF, e[40], 0)
    }, logger[e[41]] = function(t) {
        Timers[t] = (new Date)[e[42]]()
    }, logger[e[43]] = function(t) {
        var n = Timers[t];
        if (n) {
            var i = (new Date)[e[42]]() - n;
            logger[e[29]](e[44] + t + e[45] + i + e[46])
        }
    }, logger[e[8]] = function(t) {
        var n = [][e[6]][e[7]](arguments, 1),
            i = logger[e[47]][e[9]](logger[e[47]], n);
        B[e[21]](_LOGF, e[48], [t, i])
    }, logger[e[47]] = function(t, n) {
        return function(t, n) {
            if (null == t) return [e[18]];
            if (1 == arguments[e[19]]) return [t[e[17]]()];
            typeof t != e[20] && (t = t[e[17]]());
            for (var o = /(.*?)%(.)(.*)/, r = t, s = []; n[e[19]];) {
                var a = o[e[21]](r);
                if (!a) break;
                var c = n[e[22]]();
                r = a[3], s[e[23]](a[1]), a[2] != e[24] ? s[e[23]](i(c, a[2])) : (s[e[23]](e[24]), n[e[26]](c))
            }
            s[e[23]](r);
            var u = [][e[6]][e[7]](n);
            return u[e[26]](s[e[27]](e[14])), u
        }(arguments[0], [][e[6]][e[7]](arguments, 1))[e[27]](e[49])
    }, t[e[4]] = {}, t[e[4]][e[29]] = function() {}, t[e[4]][e[31]] = function() {}, t[e[4]][e[35]] = function() {}, t[e[4]][e[33]] = function() {}, t[e[4]][e[37]] = function() {}, t[e[4]][e[39]] = function() {}, t[e[4]][e[41]] = function() {}, t[e[4]][e[43]] = function() {}, t[e[1]][e[50]] && (window[e[4]][e[29]] = logger[e[29]], window[e[4]][e[31]] = logger[e[31]], window[e[4]][e[35]] = logger[e[35]], window[e[4]][e[33]] = logger[e[33]], window[e[51]](e[52], function(t) {
        var n = t[e[53]] + e[54] + t[e[55]] + e[56] + t[e[57]];
        window[e[4]][e[35]](n)
    }))
}! function(e) {
    var t = e.tools = {
        __UUID__: 0,
        UNKNOWN: -1,
        IOS: 0,
        ANDROID: 1,
        platform: -1,
        debug: !1,
        UUID: function(e) {
            return e + this.__UUID__++ + (new Date).valueOf()
        },
        extend: function(e, t) {
            for (var n in t) e[n] = t[n]
        },
        typeName: function(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        },
        isDate: function(e) {
            return "Date" == t.typeName(e)
        },
        isArray: function(e) {
            return "Array" == t.typeName(e)
        },
        isDebug: function() {
            return e.tools.debug
        },
        stringify: function(e) {
            return window.JSON3 ? window.JSON3.stringify(e) : JSON.stringify(e)
        },
        isNumber: function(e) {
            return "number" == typeof e || e instanceof Number
        },
        getElementOffsetInWebview: function(e, t) {
            for (var n = 0, i = e; i;) n += i[t], i = i.offsetParent;
            return n
        },
        getElementOffsetXInWebview: function(e) {
            return t.getElementOffsetInWebview(e, "offsetLeft")
        },
        getElementOffsetYInWebview: function(e) {
            return t.getElementOffsetInWebview(e, "offsetTop")
        },
        execJSfile: function(e) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = e,
                function e(t) {
                    var n = document.head,
                        i = document.body;
                    n ? n.insertBefore(t, n.firstChild) : i ? i.insertBefore(t, i.firstChild) : setTimeout(function() {
                        e(t)
                    }, 100)
                }(t)
        },
        copyObjProp2Obj: function(e, t, n) {
            var i = n instanceof Array;
            for (var o in t) {
                var r = !0;
                if (i)
                    for (var s = 0; s < n.length; s++)
                        if (o == n[s]) {
                            r = !1;
                            break
                        } r ? e[o] = t[o] : r = !0
            }
        },
        clone: function(e) {
            if (!e || "function" == typeof e || t.isDate(e) || "object" != typeof e) return e;
            var n, i;
            if (t.isArray(e)) {
                for (n = [], i = 0; i < e.length; ++i) n.push(t.clone(e[i]));
                return n
            }
            for (i in n = {}, e) i in n && n[i] == e[i] || (n[i] = t.clone(e[i]));
            return n
        }
    };
    t.debug = !(!window.__nativeparamer__ || !window.__nativeparamer__.debug), t.platform = window._____platform_____
}(window.plus),
function(plus) {
    function createExecIframe() {
        var e = document.createElement("iframe");
        return e.id = "exebridge", e.style.display = "none",
            function e(t) {
                var n = document.body;
                n ? t.parentNode || n.appendChild(t) : setTimeout(function() {
                    e(t)
                }, 100)
            }(e), e
    }
    window.__prompt__ = window.prompt;
    var T = plus.tools,
        B = plus.bridge = {
            NO_RESULT: 0,
            OK: 1,
            CLASS_NOT_FOUND_EXCEPTION: 2,
            ILLEGAL_ACCESS_EXCEPTION: 3,
            INSTANTIATION_EXCEPTION: 4,
            MALFORMED_URL_EXCEPTION: 5,
            IO_EXCEPTION: 6,
            INVALID_ACTION: 7,
            JSON_EXCEPTION: 8,
            ERROR: 9,
            callbacks: {},
            commandQueue: [],
            isInEvalJs: 0,
            synExecXhr: new XMLHttpRequest,
            execIframe: null,
            nativecomm: function() {
                if (!B.commandQueue.length) return "";
                var e = "[" + B.commandQueue.join(",") + "]";
                return B.commandQueue.length = 0, e
            },
            execImg: null,
            createImg: function() {
                var e = document.createElement("img");
                return e.id = "exebridge", e.style.display = "none",
                    function e(t) {
                        var n = document.body;
                        n ? n.appendChild(t) : setTimeout(function() {
                            e(t)
                        }, 100)
                    }(e), e
            },
            exec: function(e, t, n, i, o) {
                if (n && n.push(i), T.IOS == T.platform) {
                    if (window.webkit && window.webkit.messageHandlers) return void window.webkit.messageHandlers.plus.postMessage("[" + T.stringify([window.__HtMl_Id__, e, t, i || null, n]) + "]");
                    if (B.commandQueue.push(T.stringify([window.__HtMl_Id__, e, t, i || null, n])), "function" == typeof __dc_plus_Command_ && !B.isInEvalJs && 1 == B.commandQueue.length) {
                        __dc_plus_Command_("plus://command");
                        return
                    }
                    B.execIframe && !B.execIframe.parentNode && document.body.appendChild(B.execIframe), 1 != B.commandQueue.length || B.isInEvalJs || (B.execIframe = B.execIframe || createExecIframe(), B.execIframe.src = "plus://command")
                } else T.ANDROID == T.platform && (o || window._____platform_os_version_____ && window._____platform_os_version_____ < 21 ? window.__prompt__(T.stringify(n), "pdr:" + T.stringify([e, t, !0])) : window._bridge.prompt(T.stringify(n), "pdr:" + T.stringify([e, t, !0])))
            },
            execSync2: function(e, t, n, i, o) {
                try {
                    if (T.IOS == T.platform && "function" == typeof __dc__plusGo) {
                        var r = T.stringify([
                                [window.__HtMl_Id__, e, t, null, n]
                            ]),
                            s = __dc__plusGo(r);
                        return i ? i(s) : window.eval(s)
                    }
                } catch (n) {
                    console.log("sf:" + t + "-" + e)
                }
                return B.execSync(e, t, n, i, o)
            },
            execSync: function(service, action, args, fn, force) {
                if (T.IOS == T.platform) {
                    if ("function" == typeof __dc__plusGo) {
                        var json = T.stringify([
                                [window.__HtMl_Id__, service, action, null, args]
                            ]),
                            ret = __dc__plusGo(json);
                        return fn ? fn(ret) : window.eval(ret)
                    }
                    try {
                        if (window.webkit && window.webkit.messageHandlers) {
                            var json = T.stringify([
                                    [window.__HtMl_Id__, service, action, null, args]
                                ]),
                                retValue = prompt(json, "__dc__plusGo:");
                            return fn ? fn(retValue) : window.eval(retValue)
                        }
                        var json = T.stringify([
                                [window.__HtMl_Id__, service, action, null, args]
                            ]),
                            sync = B.synExecXhr;
                        if (sync.open("post", "http://localhost:13131/cmds", !1), sync.setRequestHeader("Content-Type", "multipart/form-data"), sync.send(json), fn) return fn(sync.responseText)
                    } catch (e) {
                        console.log("sf:" + action + "-" + service)
                    }
                    return window.eval(sync.responseText)
                }
                var ret;
                if (T.ANDROID == T.platform) return ret = force || window._____platform_os_version_____ && window._____platform_os_version_____ < 21 ? window.__prompt__(T.stringify(args), "pdr:" + T.stringify([service, action, !1])) : window._bridge.prompt(T.stringify(args), "pdr:" + T.stringify([service, action, !1])), fn ? fn(ret) : eval(ret)
            },
            nativeEval: function(e) {
                if (T.IOS == T.platform) {
                    if (window.webkit && window.webkit.messageHandlers) return window.setTimeout(e, 0), "";
                    B.isInEvalJs++;
                    try {
                        return e(), B.nativecomm()
                    } finally {
                        B.isInEvalJs--
                    }
                } else e()
            },
            callbackFromNative: function(e, t) {
                var n = B.callbacks[e];
                n && (t.status == B.OK && n.success ? n.success && n.success(t.message) : n.fail && n.fail(t.message), t.keepCallback || delete B.callbacks[e])
            },
            callbackId: function(e, t) {
                var n = T.UUID("plus");
                return B.callbacks[n] = {
                    success: e,
                    fail: t
                }, n
            }
        }
}(window.plus), plus.obj = plus.obj || {}, plus.obj.Callback = function() {
        function e() {
            var e = this;
            e.__callbacks__ = {}, e.__callback_id__ = plus.bridge.callbackId(function(t) {
                var n = t.evt,
                    i = t.args,
                    o = e.__callbacks__[n];
                if (o)
                    for (var r = o.length, s = 0; s < r; s++) e.onCallback(o[s], n, i)
            })
        }
        return e.prototype.addEventListener = function(e, t, n) {
            var i = !1;
            return t && (this.__callbacks__[e] || (this.__callbacks__[e] = [], i = !0), this.__callbacks__[e].push(t)), i
        }, e.prototype.removeEventListener = function(e, t) {
            var n = !1;
            return this.__callbacks__[e] && (this.__callbacks__[e].pop(t), (n = 0 === this.__callbacks__[e].length) && (this.__callbacks__[e] = null)), n
        }, e
    }(),
    function(e, t) {
        var n = (e = e).bridge,
            i = e.tools,
            o = "Accelerometer",
            r = !1,
            s = {},
            a = [],
            c = null,
            u = function(e, t, n) {
                this.xAxis = e, this.yAxis = t, this.zAxis = n
            };

        function l(e) {
            var t = n.callbackId(function(e) {
                var t = a.slice(0);
                c = new u(e.x, e.y, e.z);
                for (var n = 0, i = t.length; n < i; n++) t[n].win(c)
            }, function(e) {
                for (var t = a.slice(0), n = 0, i = t.length; n < i; n++) t[n].fail(e)
            });
            n.exec(o, "start", [t, e]), r = !0
        }

        function _(e, t) {
            return {
                win: e,
                fail: t
            }
        }

        function f(e) {
            var t = a.indexOf(e);
            t > -1 && (a.splice(t, 1), 0 === a.length && (n.exec(o, "stop", []), r = !1))
        }
        var d = {
            getCurrentAcceleration: function(e, t, n) {
                var i = _(function(t) {
                    f(i), e(t)
                }, function(e) {
                    f(i), t && t(e)
                });
                a.push(i), r || l(-1)
            },
            watchAcceleration: function(e, n, o) {
                var u = o && o.frequency && "number" == typeof o.frequency ? o.frequency : 500,
                    d = i.UUID("watch"),
                    h = _(function() {}, function(e) {
                        f(h), n && n(e)
                    });
                return a.push(h), s[d] = {
                    timer: t.setInterval(function() {
                        c && e(c)
                    }, u),
                    listeners: h
                }, r ? c && e(c) : l(u), d
            },
            clearWatch: function(e) {
                e && s[e] && (t.clearInterval(s[e].timer), f(s[e].listeners), delete s[e])
            }
        };
        e.accelerometer = d
    }(this.plus, this),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools;
        e.audio = {
            getRecorder: function() {
                var e = {
                    _Audio_UUID__: n.UUID("Record"),
                    supportedFormats: ["amr", "3gp", "aac"],
                    supportedSamplerates: [44100, 16e3, 8e3],
                    record: function(e, n, i) {
                        var o = t.callbackId(n, i);
                        t.exec("Audio", "RecorderExecMethod", ["record", [this._Audio_UUID__, o, e]])
                    },
                    stop: function() {
                        t.exec("Audio", "RecorderExecMethod", ["stop", [this._Audio_UUID__]])
                    },
                    pause: function() {
                        t.exec("Audio", "RecorderExecMethod", ["pause", [this._Audio_UUID__]])
                    },
                    resume: function() {
                        t.exec("Audio", "RecorderExecMethod", ["resume", [this._Audio_UUID__]])
                    }
                };
                return n.IOS == n.platform && (e.supportedFormats = ["wav", "aac", "amr", "mp3"]), e
            },
            createPlayer: function(e) {
                var i = {
                    _Player_FilePath: e,
                    _Audio_Player_UUID_: n.UUID("Player"),
                    play: function(e, n) {
                        var i = t.callbackId(e, n);
                        t.exec("Audio", "AudioExecMethod", ["play", [this._Audio_Player_UUID_, i]])
                    },
                    pause: function() {
                        t.exec("Audio", "AudioExecMethod", ["pause", [this._Audio_Player_UUID_]])
                    },
                    resume: function() {
                        t.exec("Audio", "AudioExecMethod", ["resume", [this._Audio_Player_UUID_]])
                    },
                    stop: function() {
                        t.exec("Audio", "AudioExecMethod", ["stop", [this._Audio_Player_UUID_]])
                    },
                    seekTo: function(e) {
                        t.exec("Audio", "AudioExecMethod", ["seekTo", [this._Audio_Player_UUID_, e]])
                    },
                    getDuration: function() {
                        return t.execSync2("Audio", "AudioSyncExecMethod", ["getDuration", [this._Audio_Player_UUID_]])
                    },
                    getPosition: function() {
                        return t.execSync2("Audio", "AudioSyncExecMethod", ["getPosition", [this._Audio_Player_UUID_]])
                    },
                    setRoute: function(e) {
                        t.exec("Audio", "AudioExecMethod", ["setRoute", [this._Audio_Player_UUID_, e]])
                    }
                };
                return t.execSync("Audio", "AudioSyncExecMethod", ["CreatePlayer", [i._Audio_Player_UUID_, i._Player_FilePath]]), i
            },
            ROUTE_SPEAKER: 0,
            ROUTE_EARPIECE: 1
        }
    }(window.plus),
    function(e) {
        var t = "barcode",
            n = (e = e).tools,
            i = e.bridge,
            o = {};

        function r(e, o, r, s, a) {
            var c = this;
            c.IDENTITY = t, c.onmarked = null, c.onerror = null, c.isClose = !1, c.__uuid__ = n.UUID("bc"), c.callbackId = null;
            var u = null;
            this.id = null != s ? s : c.__uuid__, this.callbackId = i.callbackId(function(e) {
                "function" == typeof c.onmarked && c.onmarked(e.type, e.message, e.file)
            }, function(e) {
                "function" == typeof c.onerror && c.onerror(e)
            }), div = document.getElementById(e), null != div && null != div && (div.addEventListener("resize", function() {
                var e = [div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight];
                i.exec(t, "resize", [e])
            }, !1), u = [div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight]);
            var l = !0;
            null == a || null == a || a || (l = !1), l && i.exec(t, "Barcode", [this.__uuid__, this.callbackId, this.id, u, o, r])
        }
        var s = r.prototype;
        s.setStyle = function(e) {
            this.isClose || i.exec(t, "setStyle", [this.__uuid__, e])
        }, s.start = function(e) {
            this.isClose || i.exec(t, "start", [this.__uuid__, e])
        }, s.setFlash = function(e) {
            this.isClose || i.exec(t, "setFlash", [this.__uuid__, e])
        }, s.cancel = function() {
            this.isClose || i.exec(t, "cancel", [this.__uuid__])
        }, s.close = function() {
            this.isClose || (i.exec(t, "close", [this.__uuid__]), this.isClose = !0)
        };
        var a = {
            Barcode: r,
            create: function(t, n, i) {
                var r = new e.barcode.Barcode(null, n, i, t, !0);
                return o[r.__uuid__] = r, o[r.__uuid__]
            },
            getBarcodeById: function(n) {
                if (n && "string" == typeof n) {
                    var r = i.execSync(t, "getBarcodeById", [n]);
                    if (null != r && null != r.uuid) {
                        if (o[r.uuid]) return o[r.uuid];
                        if (null != r && null != r) {
                            var s = new e.barcode.Barcode(null, r.filters, r.options, n, !1);
                            return s.__uuid__ = r.uuid, i.exec(t, "addCallBack", [s.__uuid__, s.callbackId]), o[s.__uuid__] = s, s
                        }
                        return null
                    }
                }
            },
            scan: function(e, n, o, r) {
                var s = "function" != typeof n ? null : function(e) {
                        n(e.type, e.message, e.file)
                    },
                    a = "function" != typeof o ? null : function(e) {
                        o(e)
                    },
                    c = i.callbackId(s, a);
                i.exec(t, "scan", [c, e, r])
            },
            QR: 0,
            EAN13: 1,
            EAN8: 2,
            AZTEC: 3,
            DATAMATRIX: 4,
            UPCA: 5,
            UPCE: 6,
            CODABAR: 7,
            CODE39: 8,
            CODE93: 9,
            CODE128: 10,
            ITF: 11,
            MAXICODE: 12,
            PDF417: 13,
            RSS14: 14,
            RSSEXPANDED: 15
        };
        e.barcode = a
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "Cache";
        e.cache = {
            clear: function(e) {
                var i = t.callbackId(function(t) {
                    e && e()
                }, null);
                window.localStorage.clear(), window.sessionStorage.clear(), t.exec(n, "clear", [i])
            },
            calculate: function(e) {
                var i = t.callbackId(function(t) {
                    e && e(t)
                }, null);
                t.exec(n, "calculate", [i])
            },
            setMaxSize: function(e) {
                t.exec(n, "setMaxSize", [e])
            }
        }
    }(window.plus),
    function(e) {
        var t, n = (e = e).bridge;

        function i() {
            this.__busy__ = !1, this.supportedImageResolutions = [], this.supportedVideoResolutions = [], this.supportedImageFormats = [], this.supportedVideoFormats = []
        }
        var o = i.prototype;
        o.captureImage = function(e, t, i) {
            var o = this;
            if (!o.__busy__) {
                var r = "function" != typeof e ? null : function(t) {
                        o.__busy__ = !1, e(t)
                    },
                    s = "function" != typeof t ? null : function(e) {
                        o.__busy__ = !1, t(e)
                    },
                    a = n.callbackId(r, s);
                n.exec("Camera", "captureImage", [a, i])
            }
        }, o.startVideoCapture = function(e, t, i) {
            var o = this;
            if (!o.__busy__) {
                var r = "function" != typeof e ? null : function(t) {
                        o.__busy__ = !1, e(t)
                    },
                    s = "function" != typeof t ? null : function(e) {
                        o.__busy__ = !1, t(e)
                    },
                    a = n.callbackId(r, s);
                n.exec("Camera", "startVideoCapture", [a, i])
            }
        }, o.stopVideoCapture = function() {
            n.exec("Camera", "stopVideoCapture", [])
        };
        var r = {
            getCamera: function(e) {
                if (t) return t;
                t = new i;
                var o = n.execSync("Camera", "getCamera", [t.__UUID__, e]);
                return o ? (t.supportedImageFormats = o.supportedImageFormats, t.supportedVideoFormats = o.supportedVideoFormats, t.supportedImageResolutions = o.supportedImageResolutions, t.supportedVideoResolutions = o.supportedVideoResolutions) : (t.supportedImageFormats = ["png", "jpg"], t.supportedImageResolutions = ["640*480", "1280*720", "960*540"], t.supportedVideoFormats = ["mp4"], t.supportedVideoResolutions = ["640*480", "1280*720", "960*540"]), t
            }
        };
        e.camera = r
    }(window.plus), plus.tools.debug ? __adsfsdaf99dsafsd090dsfsd__() : (plus.console = {}, plus.console.log = function() {}, plus.console.info = function() {}, plus.console.error = function() {}, plus.console.warn = function() {}, plus.console.assert = function() {}, plus.console.clear = function() {}, plus.console.time = function() {}, plus.console.timeEnd = function() {}),
    function(e) {
        var t, n, i = (e = e).bridge,
            o = e.tools,
            r = function(e) {
                this.code = e || null
            };

        function s(e, t, n, i, o, r, s, a, c, u, l, _, f, d, h) {
            this.id = e || null, this.rawId = h || null, this.target = 0, this.displayName = t || null, this.name = n || null, this.nickname = i || null, this.phoneNumbers = o || null, this.emails = r || null, this.addresses = s || null, this.ims = a || null, this.organizations = c || null, this.birthday = u || null, this.note = l || null, this.photos = _ || null, this.categories = f || null, this.urls = d || null
        }
        r.UNKNOWN_ERROR = 0, r.INVALID_ARGUMENT_ERROR = 1, r.TIMEOUT_ERROR = 2, r.PENDING_OPERATION_ERROR = 3, r.IO_ERROR = 4, r.NOT_SUPPORTED_ERROR = 5, r.PERMISSION_DENIED_ERROR = 20;
        var a = s.prototype;

        function c(e) {
            this.type = e
        }
        a.remove = function(e, t) {
            var n = t && function(e) {
                t(new r(e))
            };
            if (null === this.id) n(r.UNKNOWN_ERROR);
            else {
                var o = i.callbackId(e, n);
                i.exec("Contacts", "remove", [o, this.id, this.target], {
                    cbid: o
                })
            }
        }, a.clone = function() {
            var e = o.clone(this);

            function t(e) {
                if (e)
                    for (var t = e.length, n = 0; n < t; ++n) e[n].id = null
            }
            return e.id = null, t(e.phoneNumbers), t(e.emails), t(e.addresses), t(e.ims), t(e.organizations), t(e.categories), t(e.photos), t(e.urls), e
        }, a.save = function(e, s) {
            var a = this,
                c = function(e) {
                    s && s(new r(e))
                },
                u = function(e) {
                    var t = e.birthday;
                    if (null !== t) {
                        if (!o.isDate(t)) try {
                            t = new Date(t)
                        } catch (e) {
                            t = null
                        }
                        o.isDate(t) && (t = t.valueOf()), e.birthday = t
                    }
                    return e
                }(o.clone(this)),
                l = i.callbackId(function(i) {
                    if (i) try {
                        var s = 0 == a.target ? t.create(i) : n.create(i);
                        e && (function(e, t) {
                            function n(e, t) {
                                if (e)
                                    for (var n = e.length, i = 0; i < n; ++i) t[i].id = e[i].id
                            }
                            t.id = e.id, n(e.phoneNumbers, t.phoneNumbers), n(e.emails, t.emails), n(e.addresses, t.addresses), n(e.ims, t.ims), n(e.organizations, t.organizations), n(e.categories, t.categories), n(e.photos, t.photos), n(e.urls, t.urls)
                        }(function(e) {
                            var t = e.birthday;
                            try {
                                o.isDate(t) || (e.birthday = new Date(parseFloat(t)))
                            } catch (e) {
                                console.log("Cordova Contact convertIn error: exception creating date.")
                            }
                            return e
                        }(s), a), e(a))
                    } catch (e) {
                        console.log(e)
                    } else c(r.UNKNOWN_ERROR)
                }, c);
            i.exec("Contacts", "save", [l, u, this.target], {
                cbid: l
            })
        };
        var u = c.prototype;
        u.create = function(e) {
            var t = new s;
            for (var n in t.target = this.type, e) void 0 !== t[n] && e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }, u.find = function(e, n, o, r) {
            var s = i.callbackId(function(e) {
                for (var i = [], o = 0, r = e.length; o < r; o++) i.push(t.create(e[o]));
                n(i)
            }, o);
            i.exec("Contacts", "search", [s, e, r], {
                cbid: s
            })
        };
        var l = e.contacts = {
            getAddressBook: function(e, o, s) {
                0 === e && 1 === e || (e = 0);
                var a = i.callbackId(function(i) {
                    o && (l.ADDRESSBOOK_PHONE == e ? (t = t || new c(0), o(t)) : (n = n || new c(1), o(t)))
                }, function(e) {
                    s(new r(e))
                });
                i.exec("Contacts", "getAddressBook", [a, e], {
                    cbid: a
                })
            },
            ADDRESSBOOK_PHONE: 0,
            ADDRESSBOOK_SIM: 1
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools,
            i = {
                server: "Downloader",
                getValue: function(e, t) {
                    return void 0 === e ? t : e
                }
            };

        function o(e, t, n) {
            this.type = i.getValue(e, ""), this.handles = [], this.capture = i.getValue(n, !1), "function" == typeof t && this.handles.push(t)
        }

        function r(e, t, o) {
            var r = this;
            r.id = n.UUID("dt"), r.url = i.getValue(e, ""), r.downloadedSize = 0, r.totalSize = 0, r.options = t || {}, r.filename = i.getValue(r.options.filename, ""), r.method = i.getValue(r.options.method, "GET"), r.timeout = i.getValue(r.options.timeout, 120), r.retry = i.getValue(r.options.retry, 3), r.retryInterval = i.getValue(r.options.retryInterval, 30), r.priority = i.getValue(r.options.priority, 1), r.onCompleted = o || null, r.eventHandlers = {}, r.data = i.getValue(r.options.data, null), r.__requestHeaders__ = {}, r.__responseHeaders__ = {}, r.__noParseResponseHeader__ = null, r.__cacheReponseHeaders__ = {}
        }
        o.prototype.fire = function(e) {
            for (var t = 0; t < this.handles.length; ++t) this.handles[t].apply(this, arguments)
        };
        var s = r.prototype;
        s.getFileName = function() {
            return this.filename
        }, s.start = function() {
            t.exec(i.server, "start", [this.id, this.__requestHeaders__])
        }, s.pause = function() {
            t.exec(i.server, "pause", [this.id])
        }, s.resume = function() {
            t.exec(i.server, "resume", [this.id])
        }, s.abort = function() {
            t.exec(i.server, "abort", [this.id])
        }, s.getAllResponseHeaders = function() {
            if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
            var e = "";
            for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
            return this.__noParseResponseHeader__ = e, this.__noParseResponseHeader__
        }, s.getResponseHeader = function(e) {
            if ("string" == typeof e) {
                var t = null;
                if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
                for (var n in this.__responseHeaders__) {
                    var i = this.__responseHeaders__[n];
                    e === (n = n.toLowerCase()) && (t = t ? t + ", " + i : i)
                }
                return this.__cacheReponseHeaders__[e] = t, t
            }
            return ""
        }, s.setRequestHeader = function(e, t) {
            if ("string" == typeof e && "string" == typeof t) {
                var n = this.__requestHeaders__[e];
                this.__requestHeaders__[e] = n ? n + ", " + t : t
            }
        }, s.addEventListener = function(e, t, n) {
            if ("string" == typeof e && "function" == typeof t) {
                var i = e.toLowerCase();
                void 0 === this.eventHandlers[i] ? this.eventHandlers[i] = new o(e, t, n) : this.eventHandlers[i].handles.push(t)
            }
        }, s.__handlerEvt__ = function(e) {
            var t = this;
            t.filename = i.getValue(e.filename, t.filename), t.state = i.getValue(e.state, t.state), t.downloadedSize = i.getValue(e.downloadedSize, t.downloadedSize), t.totalSize = i.getValue(e.totalSize, t.totalSize), t.__responseHeaders__ = i.getValue(e.headers, {}), 4 == t.state && "function" == typeof t.onCompleted && t.onCompleted(t, e.status || null);
            var n = this.eventHandlers.statechanged;
            n && n.fire(t, e.status || null)
        };
        var a = e.downloader = {
            __taskList__: [],
            createDownload: function(e, n, o) {
                if ("string" == typeof e) {
                    var s = new r(e, n, o);
                    return a.__taskList__[s.id] = s, t.exec(i.server, "createDownload", [s]), s
                }
                return null
            },
            enumerate: function(e, n) {
                var o = t.callbackId(function(t) {
                    for (var n = [], o = t.length, s = 0, c = a.__taskList__; s < o; s++) {
                        var u = t[s];
                        if (u && u.uuid) {
                            var l = c[u.uuid];
                            l || ((l = new r).id = u.uuid, c[l.id] = l), l.state = i.getValue(u.state, l.state), l.options = i.getValue(u.options, l.options), l.filename = i.getValue(u.filename, l.filename), l.url = i.getValue(u.url, l.url), l.downloadedSize = i.getValue(u.downloadedSize, l.downloadedSize), l.totalSize = i.getValue(u.totalSize, l.totalSize), l.__responseHeaders__ = i.getValue(t.headers, l.__responseHeaders__), n.push(l)
                        }
                    }
                    "function" == typeof e && e(n)
                });
                t.exec(i.server, "enumerate", [o, n])
            },
            clear: function(e) {
                var n = -1e4;
                ("number" == typeof e || e instanceof Number) && (n = e), t.exec(i.server, "clear", [n])
            },
            startAll: function() {
                t.exec(i.server, "startAll", [0])
            },
            __handlerEvt__: function(e, t) {
                var n = a.__taskList__[e];
                n && (6 == t.state && delete a.__taskList__[e], n.__handlerEvt__(t))
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = 0,
            i = 1;

        function o(e, t) {
            this.code = e || null, this.message = t || ""
        }
        o.BUSY = 1;
        var r = e.gallery = {
            __galleryStatus: n,
            onPickImageFinished: null,
            pick: function(e, s, a) {
                if (i != r.__galleryStatus) {
                    r.__galleryStatus = i;
                    var c = t.callbackId(function(t) {
                            if (r.__galleryStatus = n, "function" == typeof e)
                                if (t && t.multiple) {
                                    var i = {};
                                    i.files = t.files, e(i)
                                } else e(t.files[0])
                        }, function(e) {
                            r.__galleryStatus = n, "function" == typeof s && s(e)
                        }),
                        u = t.callbackId(function() {
                            "function" == typeof a.onmaxed && a.onmaxed()
                        });
                    t.exec("Gallery", "pick", [c, a, u], {
                        cbid: c
                    })
                } else window.setTimeout(function() {
                    "function" == typeof s && s(new o(o.BUSY, "已经打开了相册"))
                }, 0)
            },
            save: function(e, n, i) {
                if ("string" == typeof e) {
                    var o = t.callbackId(function(e) {
                        "function" == typeof n && n(e)
                    }, function(e) {
                        "function" == typeof i && i(e)
                    });
                    return t.exec("Gallery", "save", [e, o], {
                        cbid: o
                    }), !0
                }
                return !1
            }
        }
    }(window.plus),
    function(e) {
        var t = "Geolocation",
            n = (e = e).bridge,
            i = e.tools,
            o = {};

        function r(e, t, n, i, o, r, s) {
            this.latitude = e, this.longitude = t, this.accuracy = void 0 !== i ? i : null, this.altitude = void 0 !== n ? n : null, this.heading = void 0 !== o ? o : null, this.speed = void 0 !== r ? r : null, 0 !== this.speed && null !== this.speed || (this.heading = NaN), this.altitudeAccuracy = void 0 !== s ? s : null
        }

        function s(e, t) {
            e ? (this.coordsType = e.coordsType, this.address = e.address, this.addresses = e.addresses, this.coords = new r(e.latitude, e.longitude, e.altitude, e.accuracy, e.heading, e.velocity, e.altitudeAccuracy)) : this.coords = new r, this.timestamp = void 0 !== t ? t : (new Date).getTime()
        }

        function a(e, t) {
            this.code = e || null, this.message = t || ""
        }

        function c(e) {
            var t = {
                maximumAge: 0,
                enableHighAccuracy: !1,
                timeout: 1 / 0,
                geocode: !0
            };
            return e && (void 0 !== e.maximumAge && !isNaN(e.maximumAge) && e.maximumAge > 0 && (t.maximumAge = e.maximumAge), void 0 !== e.enableHighAccuracy && (t.enableHighAccuracy = e.enableHighAccuracy), void 0 === e.timeout || isNaN(e.timeout) || (e.timeout < 0 ? t.timeout = 0 : t.timeout = e.timeout), e.coordsType && (t.coordsType = e.coordsType), e.provider && (t.provider = e.provider), void 0 !== e.geocode && (t.geocode = e.geocode)), t
        }

        function u(e, t) {
            var n = setTimeout(function() {
                l(n), n = null, e(new a(a.TIMEOUT, "Position retrieval timed out."))
            }, t);
            return n
        }

        function l(e) {
            !0 !== e && clearTimeout(e)
        }
        a.PERMISSION_DENIED = 1, a.POSITION_UNAVAILABLE = 2, a.TIMEOUT = 3, a.UNKNOWN_ERROR = 4;
        var _ = e.geolocation = {
            lastPosition: null,
            getCurrentPosition: function(e, t, n) {
                f(e, t, n, !0)
            },
            watchPosition: function(e, r, d) {
                d = c(d);
                var h = i.UUID("timer");
                o[h] = f(e, r, d, !1);
                var p = function(e) {
                        l(o[h].timer);
                        var t = new a(e.code, e.message);
                        r && r(t)
                    },
                    v = n.callbackId(function(t) {
                        l(o[h].timer), d.timeout !== 1 / 0 && (o[h].timer = u(p, d.timeout));
                        var n = new s({
                            latitude: t.latitude,
                            longitude: t.longitude,
                            altitude: t.altitude,
                            accuracy: t.accuracy,
                            heading: t.heading,
                            velocity: t.velocity,
                            coordsType: t.coordsType,
                            address: t.address,
                            addresses: t.addresses,
                            altitudeAccuracy: t.altitudeAccuracy
                        }, void 0 === t.timestamp ? (new Date).getTime() : t.timestamp instanceof Date ? t.timestamp.getTime() : t.timestamp);
                        _.lastPosition = n, e(n)
                    }, p);
                return n.exec(t, "watchPosition", [v, h, d.enableHighAccuracy, d.coordsType, d.provider, d.geocode, d.timeout, d.maximumAge], {
                    cbid: v,
                    l: location.href
                }), h
            },
            clearWatch: function(e) {
                e && void 0 !== o[e] && (l(o[e].timer), o[e].timer = !1, n.exec(t, "clearWatch", [e]))
            }
        };

        function f(e, i, o, r) {
            o = c(o);
            var f = {
                    timer: null
                },
                d = function(e) {
                    l(f.timer), f.timer = null;
                    var t = new a(e.code, e.message);
                    i && i(t)
                };
            if (_.lastPosition && o.maximumAge && (new Date).getTime() - _.lastPosition.timestamp <= o.maximumAge) e(_.lastPosition);
            else if (0 === o.timeout) d(new a(a.TIMEOUT, "timeout value in PositionOptions set to 0 and no cached Position object available, or cached Position object's age exceeds provided PositionOptions' maximumAge parameter."));
            else if (o.timeout !== 1 / 0 ? f.timer = u(d, o.timeout) : f.timer = !0, r) {
                var h = n.callbackId(function(t) {
                    if (l(f.timer), f.timer) {
                        var n = new s({
                            latitude: t.latitude,
                            longitude: t.longitude,
                            altitude: t.altitude,
                            accuracy: t.accuracy,
                            heading: t.heading,
                            velocity: t.velocity,
                            coordsType: t.coordsType,
                            address: t.address,
                            addresses: t.addresses,
                            altitudeAccuracy: t.altitudeAccuracy
                        }, void 0 === t.timestamp ? (new Date).getTime() : t.timestamp instanceof Date ? t.timestamp.getTime() : t.timestamp);
                        _.lastPosition = n, e(n)
                    }
                }, d);
                n.exec(t, "getCurrentPosition", [h, o.enableHighAccuracy, o.maximumAge, o.coordsType, o.provider, o.geocode, o.timeout], {
                    cbid: h,
                    l: location.href
                })
            }
            return f
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = (e.tools, []),
            i = {
                NATIVEF: "File",
                exec: function(e, n, o, r) {
                    var s = t.callbackId(e, n);
                    t.exec(i.NATIVEF, o, [s, r])
                }
            };

        function o(e) {
            this.code = e.code || null, this.message = e.message || ""
        }

        function r(e) {
            var t = "未知错误";
            switch (e) {
                case o.NOT_FOUND_ERR:
                    t = "文件没有发现";
                    break;
                case o.SECURITY_ERR:
                    t = "没有获得授权";
                    break;
                case o.ABORT_ERR:
                    t = "取消";
                    break;
                case o.NOT_READABLE_ERR:
                    t = "不允许读";
                    break;
                case o.ENCODING_ERR:
                    t = "编码错误";
                    break;
                case o.NO_MODIFICATION_ALLOWED_ERR:
                    t = "不允许修改";
                    break;
                case o.INVALID_STATE_ERR:
                    t = "无效的状态";
                    break;
                case o.SYNTAX_ERR:
                    t = "语法错误";
                    break;
                case o.INVALID_MODIFICATION_ERR:
                    t = "无效的修改";
                    break;
                case o.QUOTA_EXCEEDED_ERR:
                    t = "执行出错";
                    break;
                case o.TYPE_MISMATCH_ERR:
                    t = "类型不匹配";
                    break;
                case o.PATH_EXISTS_ERR:
                    t = "路径存在"
            }
            return {
                code: e,
                message: t
            }
        }

        function s(e, t) {
            t = t || {}, this.type = e, this.bubbles = !1, this.cancelBubble = !1, this.cancelable = !1, this.lengthComputable = !1, this.loaded = t.loaded || 0, this.total = t.total || 0, this.target = t.target || null
        }

        function a(e, t, n, i, o) {
            this.size = o || 0, this.type = n || null, this.name = e || "", this.lastModifiedDate = new Date(i) || null, this.fullPath = t || null
        }
        o.NOT_FOUND_ERR = 1, o.SECURITY_ERR = 2, o.ABORT_ERR = 3, o.NOT_READABLE_ERR = 4, o.ENCODING_ERR = 5, o.NO_MODIFICATION_ALLOWED_ERR = 6, o.INVALID_STATE_ERR = 7, o.SYNTAX_ERR = 8, o.INVALID_MODIFICATION_ERR = 9, o.QUOTA_EXCEEDED_ERR = 10, o.TYPE_MISMATCH_ERR = 11, o.PATH_EXISTS_ERR = 12;
        var c = a.prototype;

        function u(e, t, n, i, o, r) {
            this.isFile = void 0 !== e && e, this.isDirectory = void 0 !== t && t, this.name = n || "", this.fullPath = i || "", this.fileSystem = o || null, this.__PURL__ = r || "", this.__remoteURL__ = r ? "http://localhost:13131/" + r : ""
        }
        c.slice = function(e, t, n) {
            var i = this.size > 0 ? this.size - 1 : 0,
                o = 0,
                r = i;
            if (arguments.length && (o = e < 0 ? Math.max(i + e, 0) : Math.min(i, e)), arguments.length >= 2 && (r = t < 0 ? Math.max(i + t, 0) : Math.min(t, i)), r < o) return null;
            var s = new a(this.name, this.fullPath, this.type, this.lastModifiedDate, r - o + 1);
            return s.start = o, s.end = r, s
        }, c.close = function() {};
        var l = u.prototype;

        function _(e, t, n, i) {
            l.constructor.apply(this, [!0, !1, e, t, n, i])
        }

        function f(e, t, n, i) {
            l.constructor.apply(this, [!1, !0, e, t, n, i])
        }
        l.getMetadata = function(e, t, n) {
            var r = "function" != typeof e ? null : function(t) {
                    var n = new function(e) {
                        this.modificationTime = void 0 !== e ? new Date(e) : null, this.size = 0, this.directoryCount = 0, this.fileCount = 0
                    }(t.lastModifiedDate);
                    n.size = t.size, n.directoryCount = t.directoryCount, n.fileCount = t.fileCount, e(n)
                },
                s = "function" != typeof t ? null : function(e) {
                    t(new o(e))
                };
            i.exec(r, s, "getMetadata", [this.fullPath, n])
        }, l.setMetadata = function(e, t, n) {
            i.exec(e, t, "setMetadata", [this.fullPath, n])
        }, l.moveTo = function(e, t, n, s) {
            var a = this,
                c = function(e) {
                    "function" == typeof s && s(new o(e))
                };
            if (e) {
                var u = this.fullPath,
                    l = t || this.name;
                i.exec(function(e) {
                    if (e) {
                        if ("function" == typeof n) {
                            var t = e.isDirectory ? new f(e.name, e.fullPath, a.fileSystem, e.remoteURL) : new _(e.name, e.fullPath, a.fileSystem, e.remoteURL);
                            try {
                                n(t)
                            } catch (e) {}
                        }
                    } else c(r(o.NOT_FOUND_ERR))
                }, c, "moveTo", [u, e.fullPath, l])
            } else c(r(o.NOT_FOUND_ERR))
        }, l.copyTo = function(e, t, n, s) {
            var a = this,
                c = function(e) {
                    "function" == typeof s && s(new o(e))
                };
            if (e) {
                var u = this.fullPath,
                    l = t || this.name;
                i.exec(function(e) {
                    if (e) {
                        if ("function" == typeof n) {
                            var t = e.isDirectory ? new f(e.name, e.fullPath, e.fileSystem, a.remoteURL) : new _(e.name, e.fullPath, a.fileSystem, e.remoteURL);
                            try {
                                n(t)
                            } catch (e) {}
                        }
                    } else c(r(o.NOT_FOUND_ERR))
                }, c, "copyTo", [u, e.fullPath, l])
            } else c(r(o.NOT_FOUND_ERR))
        }, l.remove = function(e, t) {
            var n = "function" != typeof t ? null : function(e) {
                t(new o(e))
            };
            i.exec(e, n, "remove", [this.fullPath])
        }, l.toURL = function() {
            return this.__PURL__
        }, l.toLocalURL = function() {
            return "file://" + this.fullPath
        }, l.toRemoteURL = function() {
            return this.__remoteURL__
        }, l.getParent = function(e, t) {
            var n = this,
                r = "function" != typeof e ? null : function(t) {
                    var i = new f(t.name, t.fullPath, n.fileSystem, t.remoteURL);
                    e(i)
                },
                s = "function" != typeof t ? null : function(e) {
                    t(new o(e))
                };
            i.exec(r, s, "getParent", [this.fullPath])
        }, _.prototype = new u, _.prototype.constructor = _, _.prototype.createWriter = function(e, t) {
            this.file(function(n) {
                var i = new y(n);
                null === i.fileName || "" === i.fileName ? "function" == typeof t && t(new o(r(o.INVALID_STATE_ERR))) : "function" == typeof e && e(i)
            }, t)
        }, _.prototype.file = function(e, t) {
            var n = "function" != typeof e ? null : function(t) {
                    var n = new a(t.name, t.fullPath, t.type, t.lastModifiedDate, t.size);
                    e(n)
                },
                r = "function" != typeof t ? null : function(e) {
                    t(new o(e))
                };
            i.exec(n, r, "getFileMetadata", [this.fullPath])
        };
        var d = new u;

        function h(e, t) {
            this.path = e || null, this.__fileSystem__ = t || null
        }

        function p() {
            this.fileName = "", this.readyState = 0, this.result = null, this.error = null, this.onloadstart = null, this.onprogress = null, this.onload = null, this.onabort = null, this.onerror = null, this.onloadend = null
        }
        f.prototype = d, d.constructor = f, d.createReader = function() {
            return new h(this.fullPath, this.fileSystem)
        }, d.getDirectory = function(e, t, n, r) {
            var s = this,
                a = "function" != typeof n ? null : function(e) {
                    var t = new f(e.name, e.fullPath, s.fileSystem, e.remoteURL);
                    n(t)
                },
                c = "function" != typeof r ? null : function(e) {
                    r(new o(e))
                };
            i.exec(a, c, "getDirectory", [this.fullPath, e, t])
        }, d.removeRecursively = function(e, t) {
            var n = "function" != typeof t ? null : function(e) {
                t(new o(e))
            };
            i.exec(e, n, "removeRecursively", [this.fullPath])
        }, d.getFile = function(e, t, n, r) {
            var s = this,
                a = "function" != typeof n ? null : function(e) {
                    var t = new _(e.name, e.fullPath, s.fileSystem, e.remoteURL);
                    n(t)
                },
                c = "function" != typeof r ? null : function(e) {
                    r(new o(e))
                };
            i.exec(a, c, "getFile", [this.fullPath, e, t])
        }, h.prototype.readEntries = function(e, t) {
            var n = this,
                r = "function" != typeof e ? null : function(t) {
                    for (var i = [], o = 0; o < t.length; o++) {
                        var r = null;
                        t[o].isDirectory ? r = new f(t[o].name, t[o].fullPath, n.__fileSystem__, t[o].remoteURL) : t[o].isFile && (r = new _(t[o].name, t[o].fullPath, n.__fileSystem__, t[o].remoteURL)), i.push(r)
                    }
                    e(i)
                },
                s = "function" != typeof t ? null : function(e) {
                    t(new o(e))
                };
            i.exec(r, s, "readEntries", [this.path])
        }, p.EMPTY = 0, p.LOADING = 1, p.DONE = 2;
        var v = p.prototype;

        function y(e) {
            this.fileName = "", this.readyState = 0, this.result = null, this.length = 0, e && (this.fileName = e.fullPath || e, this.length = e.size || 0), this.position = 0, this.error = null, this.onwritestart = null, this.onprogress = null, this.onwrite = null, this.onabort = null, this.onsuccess = null, this.onerror = null, this.onwriteend = null
        }
        v.abort = function() {
            this.result = null, this.readyState != p.DONE && this.readyState != p.EMPTY && (this.readyState = p.DONE, "function" == typeof this.onabort && this.onabort(new s("abort", {
                target: this
            })), "function" == typeof this.onloadend && this.onloadend(new s("loadend", {
                target: this
            })))
        }, v.readAsText = function(e, t) {
            if (this.fileName = "", void 0 === e.fullPath ? this.fileName = e : this.fileName = e.fullPath, this.readyState == p.LOADING) throw new o(o.INVALID_STATE_ERR);
            this.readyState = p.LOADING, "function" == typeof this.onloadstart && this.onloadstart(new s("loadstart", {
                target: this
            }));
            var n = t || "UTF-8",
                r = this;
            i.exec(function(e) {
                r.readyState !== p.DONE && (r.result = e, "function" == typeof r.onload && r.onload(new s("load", {
                    target: r
                })), r.readyState = p.DONE, "function" == typeof r.onloadend && r.onloadend(new s("loadend", {
                    target: r
                })))
            }, function(e) {
                r.readyState !== p.DONE && (r.readyState = p.DONE, r.result = null, r.error = new o(e), "function" == typeof r.onerror && r.onerror(new s("error", {
                    target: r
                })), "function" == typeof r.onloadend && r.onloadend(new s("loadend", {
                    target: r
                })))
            }, "readAsText", [this.fileName, n, e.start, e.end])
        }, v.readAsDataURL = function(e) {
            if (this.fileName = "", void 0 === e.fullPath ? this.fileName = e : this.fileName = e.fullPath, this.readyState == p.LOADING) throw new o(o.INVALID_STATE_ERR);
            this.readyState = p.LOADING, "function" == typeof this.onloadstart && this.onloadstart(new s("loadstart", {
                target: this
            }));
            var t = this;
            i.exec(function(e) {
                t.readyState !== p.DONE && (t.readyState = p.DONE, t.result = e, "function" == typeof t.onload && t.onload(new s("load", {
                    target: t
                })), "function" == typeof t.onloadend && t.onloadend(new s("loadend", {
                    target: t
                })))
            }, function(e) {
                t.readyState !== p.DONE && (t.readyState = p.DONE, t.result = null, t.error = new o(e), "function" == typeof t.onerror && t.onerror(new s("error", {
                    target: t
                })), "function" == typeof t.onloadend && t.onloadend(new s("loadend", {
                    target: t
                })))
            }, "readAsDataURL", [this.fileName, e.start, e.end])
        }, v.readAsArrayBuffer = function(e) {}, y.INIT = 0, y.WRITING = 1, y.DONE = 2;
        var w = y.prototype;

        function g(e, t) {
            this.name = e || null, this.root = null, t && (this.root = new f(t.name, t.fullPath, this, t.remoteURL))
        }
        w.abort = function() {
            if (this.readyState === y.DONE || this.readyState === y.INIT) throw new o(r(o.INVALID_STATE_ERR));
            this.error = new o(r(o.ABORT_ERR)), this.readyState = y.DONE, "function" == typeof this.onabort && this.onabort(new s("abort", {
                target: this
            })), "function" == typeof this.onwriteend && this.onwriteend(new s("writeend", {
                target: this
            }))
        }, w.write = function(e) {
            var t = this;
            if ("string" != typeof e) throw new o(o.TYPE_MISMATCH_ERR);
            if (this.readyState === y.WRITING) throw new o(o.INVALID_STATE_ERR);
            this.readyState = y.WRITING, "function" == typeof t.onwritestart && t.onwritestart(new s("writestart", {
                target: t
            })), i.exec(function(e) {
                t.readyState !== y.DONE && (t.position += e, t.length += e, t.readyState = y.DONE, "function" == typeof t.onwrite && t.onwrite(new s("write", {
                    target: t
                })), "function" == typeof t.onsuccess && t.onsuccess(new s("success", {
                    target: t
                })), "function" == typeof t.onwriteend && t.onwriteend(new s("writeend", {
                    target: t
                })))
            }, function(e) {
                t.readyState !== y.DONE && (t.readyState = y.DONE, t.error = new o(e), "function" == typeof t.onerror && t.onerror(new s("error", {
                    target: t
                })), "function" == typeof t.onwriteend && t.onwriteend(new s("writeend", {
                    target: t
                })))
            }, "write", [this.fileName, e, this.position])
        }, w.seek = function(e) {
            if (this.readyState === y.WRITING) throw new o(o.INVALID_STATE_ERR);
            (e || 0 === e) && (e < 0 ? this.position = Math.max(e + this.length, 0) : e > this.length ? this.position = this.length : this.position = e)
        }, w.truncate = function(e) {
            if (this.readyState === y.WRITING) throw new o(o.INVALID_STATE_ERR);
            this.readyState = y.WRITING;
            var t = this;
            "function" == typeof t.onwritestart && t.onwritestart(new s("writestart", {
                target: this
            })), i.exec(function(e) {
                t.readyState !== y.DONE && (t.readyState = y.DONE, t.length = e, t.position = Math.min(t.position, e), "function" == typeof t.onwrite && t.onwrite(new s("write", {
                    target: t
                })), "function" == typeof t.onwriteend && t.onwriteend(new s("writeend", {
                    target: t
                })))
            }, function(e) {
                t.readyState !== y.DONE && (t.readyState = y.DONE, t.error = new o(e), "function" == typeof t.onerror && t.onerror(new s("error", {
                    target: t
                })), "function" == typeof t.onwriteend && t.onwriteend(new s("writeend", {
                    target: t
                })))
            }, "truncate", [this.fileName, e, this.position])
        }, e.io = {
            FileSystem: g,
            DirectoryEntry: f,
            DirectoryReader: h,
            FileReader: p,
            FileWriter: y,
            requestFileSystem: function(e, t, s) {
                var a = function(e) {
                    "function" == typeof s && s(new o(e))
                };
                if (e < 1 || e > 4) a(r(o.SYNTAX_ERR));
                else {
                    var c = n[e],
                        u = function(i) {
                            i ? "function" == typeof t && (c || (c = new g(i.name, i.root), n[e] = c), t(c)) : a(r(o.NOT_FOUND_ERR))
                        };
                    c ? window.setTimeout(u(c), 0) : i.exec(u, a, "requestFileSystem", [e])
                }
            },
            resolveLocalFileSystemURL: function(e, t, s) {
                var a = function(e) {
                    s && s(new o(e))
                };
                "string" == typeof e ? i.exec(function(e) {
                    var i;
                    if (e) {
                        if (t) {
                            var s = n[e.type];
                            s || (s = new g(e.fsName, e.fsRoot), n[e.type] = s), i = e.isDirectory ? new f(e.name, e.fullPath, s, e.remoteURL) : new _(e.name, e.fullPath, s, e.remoteURL), t(i)
                        }
                    } else a(r(o.NOT_FOUND_ERR))
                }, a, "resolveLocalFileSystemURL", [e]) : setTimeout(function() {
                    a(r(o.ENCODING_ERR))
                }, 0)
            },
            convertLocalFileSystemURL: function(e) {
                return t.execSync(i.NATIVEF, "convertLocalFileSystemURL", [e])
            },
            convertAbsoluteFileSystem: function(e) {
                return t.execSync(i.NATIVEF, "convertAbsoluteFileSystem", [e])
            },
            PRIVATE_WWW: 1,
            PRIVATE_DOC: 2,
            PUBLIC_DOCUMENTS: 3,
            PUBLIC_DOWNLOADS: 4
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools,
            i = "Maps",
            o = "createObject",
            r = "updateObject",
            s = "updateObjectSYNC",
            a = "execMethod",
            c = {
                callback: [],
                pushCallback: function(e, t, n) {
                    this.callback[e] = {
                        fun: t,
                        nokeep: n
                    }
                },
                execCallback: function(e, t) {
                    this.callback[e] && (this.callback[e].fun && this.callback[e].fun(e, t), this.callback[e].nokeep && delete this.callback[e])
                }
            },
            u = {};

        function l(e, r, s, a) {
            return n.ANDROID == n.platform ? t.exec(i, o, [n.stringify([e, r, s, a])], null) : t.exec(i, o, [e, r, s, a], null)
        }

        function _(e, o, s) {
            return n.ANDROID == n.platform ? t.exec(i, r, [n.stringify([e, [o, s]])], null) : t.exec(i, r, [e, [o, s]], null)
        }

        function f(e, o, r) {
            return n.ANDROID == n.platform ? t.exec(i, a, [n.stringify([e, [o, r]])], null) : t.exec(i, a, [e, [o, r]], null)
        }

        function d(t, o, r, s, a) {
            o = function(e) {
                var t = {
                    zoom: 12,
                    type: "MAPTYPE_NORMAL",
                    traffic: !1,
                    zoomControls: !1
                };
                return e && e.center instanceof w && (t.center = e.center), e && "number" == typeof e.zoom && e.zoom <= 22 && e.zoom >= 1 && (t.zoom = e.zoom), !e || "MAPTYPE_NORMAL" != e.type && "MAPTYPE_SATELLITE" != e.type || (t.type = e.type), e && "boolean" == typeof e.traffic && (t.traffic = e.traffic), e && "boolean" == typeof e.zoomControls && (t.zoomControls = e.zoomControls), e && "string" == typeof e.position && (t.position = e.position), e && (t.top = e.top, t.left = e.left, t.width = e.width, t.height = e.height), t
            }(o);
            var f = this;
            if (this.IDENTITY = i, this._UUID_ = a || n.UUID("map"), this._map_id_ = r, this._ui_div_id_ = t, this.__showUserLocationVisable__ = !1, this.center = o.center ? o.center : new e.maps.Point(116.39716, 39.91669), this.zoom = o.zoom, this.userLocation = null, this.mapType = o.type, this.zoomControlsVisable = o.zoomControls, this.trafficVisable = o.traffic, this.visable = !0, this.onclick = function(e) {}, this.onstatuschanged = function() {}, c.pushCallback(this._UUID_, function(e, t) {
                    if ("click" == t.callbackType) f.onclick && f.onclick(t.payload);
                    else if ("change" == t.callbackType) {
                        if (f.onstatuschanged) var n = {};
                        n.target = f, n.zoom = t.zoom, n.center = new w(t.center.long, t.center.lat), t.northease && (n.bounds = new y(new w(t.northease.long, t.northease.lat), new w(t.southwest.long, t.southwest.lat))), f.onstatuschanged(n)
                    }
                }), !s) {
                var d = document.getElementById(this._ui_div_id_),
                    h = [o];
                d && (e.tools.platform == e.tools.ANDROID ? document.addEventListener("plusorientationchange", function() {
                    setTimeout(function() {
                        var e = [d.offsetLeft, d.offsetTop, d.offsetWidth, d.offsetHeight];
                        _(f._UUID_, "resize", e)
                    }, 200)
                }, !1) : d.addEventListener("resize", function() {
                    var e = [d.offsetLeft, d.offsetTop, d.offsetWidth, d.offsetHeight];
                    _(f._UUID_, "resize", e)
                }, !1), h = [o, d.offsetLeft, d.offsetTop, d.offsetWidth, d.offsetHeight]), u[this._UUID_] = l(this._UUID_, "mapview", h, this._map_id_)
            }
        }
        var h = d.prototype;

        function p(e) {
            this._UUID_ = n.UUID("Bubble"), this.label = "string" == typeof e ? e : "", this.icon = null, this.marker = null, this.__contentImage = null, this.__contentImageAsDataURL = null, this.onclick = function(e) {}
        }
        h.close = function() {
            f("map", "close", this._UUID_), u[this._UUID_] && delete u[this._UUID_]
        }, h.centerAndZoom = function(e, t) {
            if (e instanceof w && "number" == typeof t) {
                this.center = e, this.zoom = t;
                var n = [e, t];
                _(this._UUID_, "centerAndZoom", n)
            }
        }, h.setCenter = function(e) {
            if (e instanceof w) {
                this.center = e;
                var t = [e];
                _(this._UUID_, "setCenter", t)
            }
        }, h.getCenter = function() {
            return this.center
        }, h.setZoom = function(e) {
            "number" == typeof e && (this.zoom = e, _(this._UUID_, "setZoom", [e]))
        }, h.resize = function() {
            var e = document.getElementById(this._ui_div_id_),
                t = [null];
            e && (t = [e.offsetLeft, e.offsetTop, e.offsetWidth, e.offsetHeight]), _(this._UUID_, "resize", t)
        }, h.getZoom = function() {
            return this.zoom
        }, h.setMapType = function(e) {
            "MAPTYPE_NORMAL" != e && "MAPTYPE_SATELLITE" != e || (this.mapType = e, _(this._UUID_, "setMapType", [e]))
        }, h.getMapType = function() {
            return this.mapType
        }, h.showUserLocation = function(e) {
            if ("boolean" == typeof e && this.__showUserLocationVisable__ != e) {
                this.__showUserLocationVisable__ = e;
                var t = [e];
                _(this._UUID_, "showUserLocation", t)
            }
        }, h.isShowUserLocation = function() {
            return this.__showUserLocationVisable__
        }, h.getUserLocation = function(e) {
            if ("function" == typeof e) {
                var t = n.UUID("callback");
                c.pushCallback(t, function(t, n) {
                    e && e(n.state, n.point)
                }, !0);
                var i = [t, window.__HtMl_Id__];
                return _(this._UUID_, "getUserLocation", i), !0
            }
            return !1
        }, h.getCurrentCenter = function(e) {
            if ("function" == typeof e) {
                function n(t, n) {
                    e && e(n.state, n.point)
                }
                var i = t.callbackId(n);
                c.pushCallback(i, n, !0);
                var o = [i, window.__HtMl_Id__];
                return _(this._UUID_, "getCurrentCenter", o), !0
            }
            return !1
        }, h.setTraffic = function(e) {
            if ("boolean" == typeof e && e != this.trafficVisable) {
                this.trafficVisable = e;
                var t = [e];
                _(this._UUID_, "setTraffic", t)
            }
        }, h.isTraffic = function() {
            return this.trafficVisable
        }, h.showZoomControls = function(e) {
            if ("boolean" == typeof e && e != this.zoomControlsVisable) {
                this.zoomControlsVisable = e;
                var t = [e];
                _(this._UUID_, "showZoomControls", t)
            }
        }, h.isShowZoomControls = function() {
            return this.zoomControlsVisable
        }, h.getBounds = function() {
            var e, o, r, a = (e = this._UUID_, o = "getBounds", r = [], n.ANDROID == n.platform ? t.execSync(i, s, [n.stringify([e, [o, r]])], null) : t.execSync(i, s, [e, [o, r]], null));
            return new y(new w(a.northease.longitude, a.northease.latitude), new w(a.southwest.longitude, a.southwest.latitude))
        }, h.reset = function() {
            _(this._UUID_, "reset", [null])
        }, h.show = function() {
            if (1 != this.visable) {
                this.visable = !0;
                var e = document.getElementById(this._ui_div_id_),
                    t = [null];
                e && (e.style.display = "", t = [e.offsetLeft, e.offsetTop, e.offsetWidth, e.offsetHeight]), _(this._UUID_, "show", t)
            }
        }, h.hide = function() {
            0 != this.visable && (this.visable = !1, document.getElementById(this._ui_div_id_) && (document.getElementById(this._ui_div_id_).style.display = "none"), _(this._UUID_, "hide", [null]))
        }, h.addOverlay = function(e) {
            if (e instanceof U || e instanceof T || e instanceof R || e instanceof C || e instanceof I) {
                var t = [e._UUID_];
                return _(this._UUID_, "addOverlay", t), !0
            }
            return !1
        }, h.removeOverlay = function(e) {
            if (e instanceof U || e instanceof T || e instanceof R || e instanceof C || e instanceof I) {
                var t = [e._UUID_];
                return _(this._UUID_, "removeOverlay", t), !0
            }
            return !1
        }, h.clearOverlays = function() {
            _(this._UUID_, "clearOverlays", [null])
        }, d.calculateDistance = function(e, n, o, r) {
            var s = t.callbackId(function(e) {
                "function" == typeof o && o({
                    distance: e
                })
            }, function(e) {
                "function" == typeof r && r(e)
            });
            t.exec(i, "calculateDistance", [e, n, s])
        }, d.calculateArea = function(e, n, o) {
            var r = t.callbackId(function(e) {
                "function" == typeof n && n({
                    area: e
                })
            }, function(e) {
                "function" == typeof o && o(e)
            });
            t.exec(i, "calculateArea", [e, r])
        }, d.convertCoordinates = function(e, n, o, r) {
            var s = t.callbackId(function(e) {
                if ("function" == typeof o) {
                    var t = {};
                    t.coord = new w(e.long, e.lat), t.coordType = e.type, o(t)
                }
            }, function(e) {
                "function" == typeof r && r(e)
            });
            t.exec(i, "convertCoordinates", [e, n, s])
        }, d.geocode = function(e, n, o, r) {
            var s = t.callbackId(function(e) {
                if ("function" == typeof o) {
                    var t = {};
                    t.coord = new w(e.long, e.lat), t.address = e.addr, t.coordType = e.type, o(t)
                }
            }, function(e) {
                "function" == typeof r && r(e)
            });
            t.exec(i, "geocode", [e, n, s])
        }, d.reverseGeocode = function(e, n, o, r) {
            var s = t.callbackId(function(e) {
                if ("function" == typeof o) {
                    var t = {};
                    t.coord = new w(e.long, e.lat), t.address = e.addr, t.coordType = e.type, o(t)
                }
            }, function(e) {
                "function" == typeof r && r(e)
            });
            t.exec(i, "reverseGeocode", [e, n, s])
        };
        var v = p.prototype;

        function y(e, t, n, i) {
            "number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof i ? (this.northease = new w(e, t), this.southwest = new w(n, i)) : e instanceof w && t instanceof w && (this.northease = e, this.southwest = t)
        }

        function w(e, t) {
            this.longitude = e, this.latitude = t
        }
        v.setIcon = function(e) {
            "string" == typeof e && (this.icon = e, this.marker && _(this.marker._UUID_, "setBubbleIcon", [this.icon]))
        }, v.loadImage = function(e) {
            this.__contentImage = e, this.__contentImageAsDataURL = null, this.marker && _(this.marker._UUID_, "loadImage", [e])
        }, v.loadImageDataURL = function(e) {
            this.__contentImage = null, this.__contentImageAsDataURL = e, this.marker && _(this.marker._UUID_, "loadImageDataURL", [e])
        }, v.getLabel = function() {
            return this.label
        }, v.setLabel = function(e) {
            "string" == typeof e && (this.label = e, this.marker && _(this.marker._UUID_, "setBubbleLabel", [this.label]))
        }, v.belongMarker = function() {
            return this.marker
        }, y.prototype.setNorthEase = function(e) {
            e instanceof w && (this.northease = e)
        }, y.prototype.getNorthEase = function() {
            return this.northease
        }, y.prototype.setSouthWest = function(e) {
            e instanceof w && (this.southwest = e)
        }, y.prototype.getSouthWest = function() {
            return this.southwest
        }, y.prototype.contains = function(e) {
            return e instanceof w && (e.longitude <= this.northease.longitude && e.longitude >= this.southwest.longitude && e.latitude <= this.northease.latitude && e.latitude >= this.southwest.latitude)
        }, y.prototype.equals = function(e) {
            return e instanceof y && (this.northease.equals(e.northease) && this.southwest.equals(e.southwest))
        }, y.prototype.getCenter = function() {
            var e = (this.northease.longitude - this.southwest.longitude) / 2,
                t = (this.northease.latitude - this.southwest.latitude) / 2;
            return new w(e + this.southwest.longitude, t + this.southwest.latitude)
        };
        var g = w.prototype;

        function m() {
            this._UUID_ = null, this.visable = !0
        }
        g.setLng = function(e) {
            this.longitude = e
        }, g.getLng = function() {
            return this.longitude
        }, g.setLat = function(e) {
            this.latitude = e
        }, g.getLat = function() {
            return this.latitude
        }, g.equals = function(e) {
            return this.longitude == e.longitude && this.latitude == e.latitude
        };
        var b = m.prototype;

        function I(e) {
            var t = this;
            this._UUID_ = n.UUID("marker"), this.point = e, this.icon = "", this.caption = "", this.bubble = null, this.canDraggable = !1, this.onclick = function(e) {}, this.onDrag = function(e) {}, c.pushCallback(this._UUID_, function(e, n) {
                "bubbleclick" == n.type ? t.bubble && t.bubble.onclick && t.bubble.onclick(t.bubble) : "markerclick" == n.type ? t.onclick && t.onclick(t) : "onDrag" == n.type && (t.point = n.pt, t.onDrag(t))
            }), l(this._UUID_, "marker", [e])
        }
        b.show = function() {
            1 != this.visable && (this.visable = !0, _(this._UUID_, "show", ["true"]))
        }, b.hide = function() {
            0 != this.visable && (this.visable = !1, _(this._UUID_, "hide", ["false"]))
        }, b.isVisible = function() {
            return this.visable
        }, b.bringToTop = function() {
            _(this._UUID_, "bringToTop", [])
        }, I.prototype = new m;
        var x = I.prototype;

        function S() {
            this.strokeColor = "#FFFFFF", this.strokeOpacity = 1, this.fillColor = "#FFFFFF", this.fillOpacity = 1, this.lineWidth = 5, this.visable = !0
        }
        x.constructor = I, x.setPoint = function(e) {
            if (e instanceof w) {
                this.point = e;
                var t = [e];
                _(this._UUID_, "setPoint", t)
            }
        }, x.getPoint = function() {
            return this.point
        }, x.setIcon = function(e) {
            "string" == typeof e && (this.icon = e, _(this._UUID_, "setIcon", [e]))
        }, x.setLabel = function(e) {
            "string" == typeof e && (this.caption = e, _(this._UUID_, "setLabel", [e]))
        }, x.getLabel = function() {
            return this.caption
        }, x.setBubble = function(e, t) {
            if (e instanceof p) {
                var n = e.marker;
                if (n && n != this) {
                    n.bubble = null;
                    var i = [null, null, null, null, !1];
                    _(n._UUID_, "setBubble", i)
                }
                e.marker = this, this.bubble = e;
                i = [this.bubble.label, this.bubble.icon, this.bubble.__contentImageAsDataURL, this.bubble.__contentImage, t];
                _(this._UUID_, "setBubble", i)
            } else null == e && _(this._UUID_, "setBubble", [null, null, null, null, t])
        }, x.hideBubble = function() {
            this.bubble && _(this._UUID_, "hideBubble", [])
        }, x.getBubble = function() {
            return this.bubble
        }, x.setDraggable = function(e) {
            e != this.canDraggable && (this.canDraggable = !this.canDraggable, _(this._UUID_, "setDraggable", [this.canDraggable]))
        }, x.isDraggable = function() {
            return this.canDraggable
        }, x.setIcons = function(e, t) {
            _(this._UUID_, "setIcons", [e, t])
        }, S.prototype = new m;
        var k = S.prototype;

        function U(e, t) {
            this.center = e, this.radius = t, this._UUID_ = n.UUID("circle"), l(this._UUID_, "circle", [e, t])
        }
        k.constructor = S, k.setStrokeColor = function(e) {
            "string" == typeof e && (this.strokeColor = e, _(this._UUID_, "setStrokeColor", [e]))
        }, k.getStrokeColor = function() {
            return this.strokeColor
        }, k.setStrokeOpacity = function(e) {
            "number" == typeof e && (e < 0 ? e = 0 : e > 1 && (e = 1), this.strokeOpacity = e, _(this._UUID_, "setStrokeOpacity", [e]))
        }, k.getStrokeOpacity = function() {
            return this.strokeOpacity
        }, k.setFillColor = function(e) {
            "string" == typeof e && (this.fillColor = e, _(this._UUID_, "setFillColor", [e]))
        }, k.getFillColor = function() {
            return this.fillColor
        }, k.setFillOpacity = function(e) {
            "number" == typeof e && (e < 0 ? e = 0 : e > 1 && (e = 1), this.fillOpacity = e, _(this._UUID_, "setFillOpacity", [e]))
        }, k.getFillOpacity = function() {
            return this.fillOpacity
        }, k.setLineWidth = function(e) {
            "number" == typeof e && (e < 0 && (e = 0), this.lineWidth = e, _(this._UUID_, "setLineWidth", [e]))
        }, k.getLineWidth = function() {
            return this.lineWidth
        }, U.prototype = new S;
        var D = U.prototype;

        function T(e) {
            this.path = e, this._UUID_ = n.UUID("polygon"), l(this._UUID_, "polygon", [e])
        }
        D.constructor = U, D.setCenter = function(e) {
            e instanceof w && (this.center = e, _(this._UUID_, "setCenter", [e]))
        }, D.getCenter = function() {
            return this.center
        }, D.setRadius = function(e) {
            "number" == typeof e && e >= 0 && (this.radius = e, _(this._UUID_, "setRadius", [e]))
        }, D.getRadius = function() {
            return this.radius
        }, T.prototype = new S;
        var E = T.prototype;

        function R(e) {
            this.path = e, this._UUID_ = n.UUID("polyline"), l(this._UUID_, "polyline", [e])
        }
        E.constructor = T, E.setPath = function(e) {
            this.path = e, _(this._UUID_, "setPath", [e])
        }, E.getPath = function() {
            return this.path
        }, R.prototype = new S;
        var N = R.prototype;

        function C(e, t, i) {
            this._UUID_ = n.UUID("route"), this.startPoint = e, this.endPoint = t, this.pointCount = 0, this.pointList = [], this.distance = 0, this.routeTip = "", void 0 === i && l(this._UUID_, "route", [e, t, i])
        }

        function O() {
            this.__state__ = 0, this.__type__ = 1, this.startPosition = null, this.endPosition = null, this.routeNumber = 0, this.routeList = []
        }

        function A() {
            this.__state__ = 0, this.__type__ = 0, this.totalNumber = 0, this.currentNumber = 0, this.pageNumber = 0, this.pageIndex = 0, this.poiList = []
        }

        function P(e) {
            var t = this;
            this._UUID_ = n.UUID("search"), this.pageCapacity = 10, this.map = e, this.onPoiSearchComplete = function(e, t) {}, this.onRouteSearchComplete = function(e, t) {}, c.pushCallback(this._UUID_, function(e, n) {
                0 == n.__type__ ? t.onPoiSearchComplete && t.onPoiSearchComplete(n.__state__, n) : 1 == n.__type__ && t.onRouteSearchComplete && t.onRouteSearchComplete(n.__state__, n)
            }), l(this._UUID_, "search", [null])
        }
        N.constructor = R, N.setPath = function(e) {
            this.path = e, _(this._UUID_, "setPath", [e])
        }, N.getPath = function() {
            return this.path
        }, C.prototype = new m, C.prototype.constructor = C, O.prototype.getRoute = function(e) {
            return e >= 0 && e < this.routeNumber ? this.routeList[e] : null
        }, A.prototype.getPosition = function(e) {
            return e >= 0 && e < this.currentNumber ? this.poiList[e] : null
        };
        var L = P.prototype;

        function V(e, t, n, i) {
            return new d(void 0, t, e, n, i)
        }
        L.setPageCapacity = function(e) {
            this.pageCapacity = e;
            var t = [e];
            _(this._UUID_, "setPageCapacity", t)
        }, L.getPageCapacity = function() {
            return this.pageCapacity
        }, L.poiSearchInCity = function(e, t, n) {
            if ("string" == typeof e && "string" == typeof t) {
                var i = [e, t, n];
                return _(this._UUID_, "poiSearchInCity", i), !0
            }
            return !1
        }, L.poiSearchNearBy = function(e, t, n, i) {
            if ("string" == typeof e && t instanceof w && "number" == typeof n) {
                var o = [e, t, n, i];
                return _(this._UUID_, "poiSearchNearBy", o), !0
            }
            return !1
        }, L.poiSearchInbounds = function(e, t, n, i) {
            if ("string" == typeof e && t instanceof w && n instanceof w) {
                var o = [e, t, n, i];
                return _(this._UUID_, "poiSearchInbounds", o), !0
            }
            return !1
        }, L.setTransitPolicy = function(e) {
            var t = [e];
            _(this._UUID_, "setTransitPolicy", t)
        }, L.transitSearch = function(e, t, n) {
            if ((e instanceof w || "string" == typeof e) && (t instanceof w || "string" == typeof t) && "string" == typeof n) {
                var i = [e, t, n];
                return _(this._UUID_, "transitSearch", i), !0
            }
            return !1
        }, L.setDrivingPolicy = function(e) {
            var t = [e];
            _(this._UUID_, "setDrivingPolicy", t)
        }, L.drivingSearch = function(e, t, n, i) {
            if ((e instanceof w || "string" == typeof e) && (n instanceof w || "string" == typeof n) && "string" == typeof t && "string" == typeof i) {
                var o = [e, t, n, i];
                return _(this._UUID_, "drivingSearch", o), !0
            }
            return !1
        }, L.walkingSearch = function(e, t, n, i) {
            if ((e instanceof w || "string" == typeof e) && (n instanceof w || "string" == typeof n) && "string" == typeof t && "string" == typeof i) {
                var o = [e, t, n, i];
                return _(this._UUID_, "walkingSearch", o), !0
            }
            return !1
        }, h.setStyles = function(e) {
            n.ANDROID == n.platform ? json_map = t.exec(i, "setStyles", [n.stringify([this._UUID_, e])], null) : json_map = t.exec(i, "setStyles", [this._UUID_, e], null)
        }, e.maps = {
            Map: d,
            openSysMap: function(e, t, n) {
                e instanceof w && n instanceof w && f("map", "openSysMap", [e, t, n])
            },
            MapType: {
                MAPTYPE_SATELLITE: "MAPTYPE_SATELLITE",
                MAPTYPE_NORMAL: "MAPTYPE_NORMAL"
            },
            Marker: I,
            Bubble: p,
            Point: w,
            Bounds: y,
            Circle: U,
            Polygon: T,
            Polyline: R,
            Position: function(e) {
                this.point = e, this.address = "", this.city = "", this.name = "", this.phone = "", this.postcode = ""
            },
            Route: C,
            Search: P,
            SearchPolicy: {
                TRANSIT_TIME_FIRST: "TRANSIT_TIME_FIRST",
                TRANSIT_TRANSFER_FIRST: "TRANSIT_TRANSFER_FIRST",
                TRANSIT_WALK_FIRST: "TRANSIT_WALK_FIRST",
                TRANSIT_FEE_FIRST: "TRANSIT_FEE_FIRST",
                DRIVING_TIME_FIRST: "DRIVING_TIME_FIRST",
                DRIVING_NO_EXPRESSWAY: "DRIVING_NO_EXPRESSWAY",
                DRIVING_FEE_FIRST: "DRIVING_FEE_FIRST"
            },
            __SearchRouteResult__: O,
            __SearchPoiResult__: A,
            __bridge__: c,
            create: V,
            getMapById: function(e) {
                var o;
                if (o = n.ANDROID == n.platform ? t.execSync(i, "getMapById", [n.stringify([e])], null) : t.execSync(i, "getMapById", [e], null)) {
                    var r = u[o.uuid];
                    return r || (r = V(e, o.options, "no", o.uuid), u[o.uuid] = r), r
                }
                return null
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge;

        function n(e) {
            this.__hasPendingOperation__ = !1, this.to = [], this.cc = [], this.bcc = [], this.subject = "", this.body = "", this.bodyType = "text", this.silent = !1, this.attachment = [], this.type = e
        }
        n.prototype.addAttachment = function(e) {
            "string" == typeof e && this.attachment.push(e)
        }, e.messaging = {
            createMessage: function(e) {
                return new n(e)
            },
            sendMessage: function(e, i, o) {
                if (e instanceof n) {
                    var r = "function" != typeof i ? null : function() {
                            e.__hasPendingOperation__ = !1, i()
                        },
                        s = "function" != typeof o ? null : function(t) {
                            e.__hasPendingOperation__ = !1, o(t)
                        };
                    if (e.__hasPendingOperation__) return void s({
                        code: 2,
                        message: "sending"
                    });
                    e.__hasPendingOperation__ = !0;
                    var a = t.callbackId(r, s);
                    t.exec("Messaging", "sendMessage", [a, e], {
                        cbid: a
                    })
                }
            },
            listenMessage: function(e, n) {
                var i = "function" != typeof e ? null : function(t) {
                        e(t)
                    },
                    o = "function" != typeof n ? null : function(e) {
                        n(e)
                    },
                    r = t.callbackId(i, o);
                t.exec("Messaging", "listenMessage", [r], {
                    cbid: r
                })
            },
            TYPE_SMS: 1,
            TYPE_MMS: 2,
            TYPE_EMAIL: 3
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "UI",
            i = "execMethod",
            o = "syncExecMethod",
            r = {};
        e.bridge, e.tools;
        var s = {};
        e.ui = {
            createWaiting: function(t, n) {
                return new e.nativeUI.showWaiting(t, n)
            },
            pickTime: function(t, n, i) {
                e.nativeUI.pickTime(t, n, i)
            },
            pickDate: function(t, n, i) {
                e.nativeUI.pickDate(t, n, i)
            },
            alert: function(t, n, i, o) {
                e.nativeUI.alert(t, n, i, o)
            },
            confirm: function(t, n, i, o) {
                e.nativeUI.confirm(t, n, i, o)
            },
            prompt: function(t, n, i, o, r) {
                e.nativeUI.prompt(t, n, i, o, r)
            },
            toast: function(t, n) {
                e.nativeUI.toast(t, n)
            },
            findWindowByName: function(s) {
                var a = t.execSync(n, o, [n, "findWindowByName", [window.__HtMl_Id__, [s]]]);
                if (a) {
                    var c = r[a.uuid];
                    return null == c && ((c = new e.ui.NWindow(null, null, !0)).__uuid__ = a.uuid, t.exec(n, i, [n, "setcallbackid", [c.__uuid__, [c.__callback_id__]]])), c
                }
            },
            closeWindow: function(e, t) {
                e && e.close(t)
            },
            createWindow: function(t, n) {
                return new e.ui.NWindow(t, n)
            },
            getSelfWindow: function() {
                var o = r[window.__HtMl_Id__];
                return null != o && void 0 !== o || ((o = new e.ui.NWindow(null, null, !0)).__uuid__ = window.__HtMl_Id__, r[o.__uuid__] = o, t.exec(n, i, [n, "setcallbackid", [o.__uuid__, [o.__callback_id__]]])), o
            },
            enumWindow: function() {
                for (var s = t.execSync(n, o, [n, "enumWindow", [window.__HtMl_Id__]]), a = [], c = {}, u = 0; u < s.length; u++) {
                    var l = s[u],
                        _ = r[l.uuid];
                    null != _ && void 0 !== _ || ((_ = new e.ui.NWindow(null, null, !0)).__uuid__ = l.uuid, t.exec(n, i, [n, "setcallbackid", [_.__uuid__, [_.__callback_id__]]])), a.push(_), c[_.__uuid__] = _
                }
                return r = c, a
            },
            register: function(e, t) {
                s[e] = t
            },
            createView: function(e, o) {
                var r = new s[e](o);
                return o && (r.id = o.id), t.exec(n, i, [n, "createView", [window.__HtMl_Id__, [e, r.__uuid__, o, r.__callback_id__]]]), r
            },
            exec: function(e, o, r) {
                t.exec(n, i, [e.__IDENTITY__, o, [e.__uuid__, r]])
            },
            execSync: function(e, i, r) {
                return t.execSync(n, o, [e.__IDENTITY__, i, [e.__uuid__, r]])
            },
            closeSplashscreen: function() {
                e.navigator.closeSplashscreen()
            },
            setFullscreen: function(t) {
                e.navigator.setFullscreen(t)
            },
            isFullscreen: function() {
                return t.execSync(n, o, [n, "isFullScreen", [0]])
            },
            __pushWindow__: function(e) {
                r[e.__uuid__] = e
            },
            __popWindow__: function(e) {
                delete r[e.__uuid__]
            },
            __nviews__: s
        }
    }(window.plus),
    function(e) {
        var t = (e = e).ui,
            n = e.bridge;

        function i(t) {
            this.__IDENTITY__ = t, this.__uuid__ = e.tools.UUID(t), this.id, e.obj.Callback.call(this)
        }
        i.prototype.getMetrics = function(e) {
            var i;
            e && (i = n.callbackId(function(t) {
                e(t)
            }), t.exec(this, "getMetrics", [i, window.__HtMl_Id__]))
        }, i.prototype.onCallback = function(e, t, n) {
            e(n)
        }, i.prototype.addEventListener = function(n, i, o) {
            if (e.obj.Callback.prototype.addEventListener.apply(this, [n, i, o])) {
                var r = [n, window.__HtMl_Id__];
                t.exec(this, "addEventListener", r)
            }
        }, i.prototype.removeEventListener = function(n, i) {
            if (e.obj.Callback.prototype.removeEventListener.apply(this, [n, i])) {
                var o = [n, window.__HtMl_Id__];
                t.exec(this, "removeEventListener", o)
            }
        }, t.NView = i
    }(window.plus),
    function(e) {
        var t = (e = e).ui,
            n = "NWindow",
            i = e.bridge;

        function o(e, i, o) {
            this.__view_array__ = new Array, t.NView.prototype.constructor.apply(this, [n]), o || (t.__pushWindow__(this), t.exec(this, n, [e, i, this.__callback_id__, window.location.href]))
        }
        var r = o.prototype;
        e.tools.extend(r, t.NView.prototype), r.constructor = o, r.show = function(e, n, i) {
            t.exec(this, "show", [e, n, i])
        }, r.close = function(n, i) {
            e.bridge.callbackFromNative(this.__callback_id__, {
                status: e.bridge.OK,
                message: {
                    evt: "close"
                },
                keepCallback: !0
            }), t.__popWindow__(this), t.exec(this, "close", [n, i])
        }, r.setOption = function(e) {
            t.exec(this, "setOption", [e])
        }, r.setVisible = function(e) {
            t.exec(this, "setVisible", [e])
        }, r.setPreloadJsFile = function(e) {
            t.exec(this, "setPreloadJsFile", [e])
        }, r.appendPreloadJsFile = function(e) {
            t.exec(this, "appendPreloadJsFile", [e])
        }, r.setContentVisible = function(e) {
            t.exec(this, "setContentVisible", [e])
        }, r.getUrl = function() {
            return t.execSync(this, "getUrl", [])
        }, r.getTitle = function() {
            return t.execSync(this, "getTitle", [])
        }, r.getOption = function() {
            return t.execSync(this, "getOption")
        }, r.load = function(e) {
            t.exec(this, "load", [e, window.location.href])
        }, r.stop = function() {
            t.exec(this, "stop", [])
        }, r.reload = function(e) {
            t.exec(this, "reload", [e])
        }, r.back = function() {
            t.exec(this, "back", [])
        }, r.forward = function() {
            t.exec(this, "forward", [])
        }, r.canBack = function(e) {
            var n;
            e && (n = i.callbackId(function(t) {
                e(t)
            })), t.exec(this, "canBack", [n])
        }, r.canForward = function(e) {
            var n;
            e && (n = i.callbackId(function(t) {
                e(t)
            })), t.exec(this, "canForward", [n])
        }, r.clear = function() {
            t.exec(this, "clear", [])
        }, r.evalJS = function(e) {
            t.exec(this, "evalJS", [e])
        }, r.append = function(e) {
            this.__view_array__.push(e), t.exec(this, "append", [e.__IDENTITY__, e.__uuid__])
        }, r.setPullToRefresh = function(n, i) {
            var o;
            i && (o = e.bridge.callbackId(i)), this.addEventListener("pulldownrefreshevent", i, !1), t.exec(this, "setPullToRefresh", [n, o])
        }, r.endPullToRefresh = function() {
            t.exec(this, "endPullToRefresh", [])
        }, r.findViewById = function(n) {
            for (var i = this.__view_array__.length - 1; i >= 0; i--) {
                var o = this.__view_array__[i];
                if (n == o.id) return o
            }
            var r = t.execSync(this, "findViewById", [n]),
                s = r.identity,
                a = r.option,
                c = (r.uuid, new e.ui.__nviews__[s](a));
            return c.__uuid__ = r.uuid, this.__view_array__.push(c), c
        }, t.NWindow = o
    }(window.plus),
    function(e) {
        var t = e.ui;
        e = e;

        function n() {
            t.NView.prototype.constructor.apply(this, ["Navigator"]), e.obj.Callback.prototype.constructor.apply(this)
        }
        t.register("Navigator", n);
        var i = n.prototype;
        i.constructor = n, e.tools.extend(i, t.NView.prototype), i.setLeft = function(e) {
            t.exec(this, "setLeft", [e])
        }, i.setRight = function(e) {
            t.exec(this, "setRight", [e])
        }, i.setSystemList = function(e) {
            t.exec(this, "setSystemList", [e])
        }, i.setRight = function(e) {
            t.exec(this, "setRight", [e])
        }, i.addNavigationListener = function(n) {
            var i = e.bridge.callbackId(n);
            t.exec(this, "addNavigationListener", [i])
        }, i.addListItemListener = function(n) {
            var i = e.bridge.callbackId(n);
            t.exec(this, "addListItemListener", [i])
        }, i.setTitleText = function(e) {
            t.exec(this, "setTitleText", [e])
        }, i.setList = function(e) {
            t.exec(this, "setList", [e])
        }, t.Navigator = n
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools,
            i = "Orientation",
            o = !1,
            r = {},
            s = [],
            a = null,
            c = function(e, t, n, i, o, r) {
                this.alpha = e, this.beta = t, this.gamma = n, this.magneticHeading = i, this.trueHeading = o, this.headingAccuracy = r
            },
            u = void 0,
            l = void 0,
            _ = void 0;

        function f(e) {
            var t = s.slice(0);
            a = new c(e.alpha, e.beta, e.gamma, u, l, _);
            for (var n = 0, i = t.length; n < i; n++) t[n].win(a)
        }

        function d() {
            n.platform != n.ANDROID && window.addEventListener("deviceorientation", f, !1);
            var e = t.callbackId(function(e) {
                u = e.magneticHeading, l = e.trueHeading, _ = e.headingAccuracy, n.platform == n.ANDROID && f(e)
            }, function(e) {
                for (var t = 0, n = s.slice(0).length; t < n; t++);
            });
            t.exec(i, "start", [e]), o = !0
        }

        function h(e, t) {
            return {
                win: e,
                fail: t
            }
        }

        function p(e) {
            var r = s.indexOf(e);
            r > -1 && (s.splice(r, 1), 0 === s.length && (n.platform != n.ANDROID && window.removeEventListener("deviceorientation", f, !1), t.exec(i, "stop", []), o = !1))
        }
        var v = {
            getCurrentOrientation: function(e, t) {
                var n;
                n = h(function(t) {
                    p(n), e(t)
                }, function(e) {
                    p(n), t && t(e)
                }), s.push(n), o || d()
            },
            watchOrientation: function(e, t, i) {
                var c = i && i.frequency && ("number" == typeof i.frequency || i.frequency instanceof Number) ? i.frequency : 500,
                    u = n.UUID("watch"),
                    l = h(function() {}, function(e) {
                        p(l), t && t(e)
                    });
                return s.push(l), r[u] = {
                    timer: window.setInterval(function() {
                        a && e(a)
                    }, c),
                    listeners: l
                }, o ? a && e(a) : d(), u
            },
            clearWatch: function(e) {
                e && r[e] && (window.clearInterval(r[e].timer), p(r[e].listeners), delete r[e])
            }
        };
        e.orientation = v
    }(window.plus),
    function(e) {
        e = e;
        var t = "Payment",
            n = window.plus.bridge;

        function i() {
            this.id = "", this.description = "", this.serviceReady = !0, this.installService = function() {
                n.exec(t, "installService", [this.id])
            }, this.appStoreReceipt = function() {
                return n.execSync(t, "appStoreReceipt", [this.id])
            }, this.restoreComplateRequest = function(e, i, o) {
                if ("appleiap" !== this.id) {
                    o({
                        errorcode: "-3"
                    })
                }
                var r = "function" != typeof i ? null : function(e) {
                        i(e)
                    },
                    s = "function" != typeof o ? null : function(e) {
                        o(e)
                    },
                    a = n.callbackId(r, s);
                n.exec(t, "restoreComplateRequest", [this.id, a, e])
            }, this.requestOrder = function(e, i, o) {
                if ("appleiap" === this.id) {
                    var r = "function" != typeof i ? null : function(e) {
                            i(e)
                        },
                        s = "function" != typeof o ? null : function(e) {
                            o(e)
                        },
                        a = n.callbackId(r, s);
                    n.exec(t, "requestOrder", [this.id, a, e])
                } else {
                    o({
                        errorcode: "-3"
                    })
                }
            }
        }
        var o = {
            Channel: i,
            getChannels: function(e, i) {
                var r = "function" != typeof e ? null : function(t) {
                        for (var n = [], i = t.length, r = 0; r < i; r++) {
                            var s = new o.Channel;
                            s.id = t[r].id, s.description = t[r].description, s.serviceReady = t[r].serviceReady, n[r] = s
                        }
                        e(n)
                    },
                    s = "function" != typeof i ? null : function(e) {
                        i(e)
                    },
                    a = n.callbackId(r, s);
                n.exec(t, "getChannels", [a])
            },
            request: function(e, o, r, s) {
                var a = "function" != typeof r ? null : function(e) {
                        r(e)
                    },
                    c = "function" != typeof s ? null : function(e) {
                        s(e)
                    };
                if (e instanceof i) {
                    var u = n.callbackId(a, c);
                    n.exec(t, "request", [e.id, o, u])
                } else window.setTimeout(function() {
                    c({
                        code: 62e3
                    })
                }, 0)
            }
        };
        e.payment = o
    }(window.plus), __Mkey__Push__ = function() {
        var e = [];
        return {
            pushCallback_Push: function(t, n, i) {
                e[t] = {
                    fun: n,
                    nokeep: i
                }
            },
            execCallback_Push: function(t, n, i) {
                e[t] && e[t].fun && e[t].fun(i)
            }
        }
    }(),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = window.plus.tools;
        e.push = {
            getClientInfo: function() {
                return t.execSync2("Push", "getClientInfo", [])
            },
            createMessage: function(e, i, o) {
                if (n.platform == n.IOS) t.exec("Push", "createMessage", [e, i, o]);
                else {
                    e = new function(e, t, n) {
                        this.__UUID__ = null, this.message = e, this.Payload = t, this.options = n
                    }(e, i, o);
                    var r = t.execSync("Push", "createMessage", [e]);
                    e.__UUID__ = r
                }
            },
            clear: function() {
                t.exec("Push", "clear", [])
            },
            addEventListener: function(e, i, o) {
                var r = n.UUID(e);
                __Mkey__Push__.pushCallback_Push(r, i, o), t.exec("Push", "addEventListener", [window.__HtMl_Id__, r, e])
            },
            remove: function(e) {
                t.exec("Push", "remove", [e.__UUID__])
            },
            getAllMessage: function() {
                return t.execSync("Push", "getAllMessage", [])
            },
            setAutoNotification: function(e) {
                t.exec("Push", "setAutoNotification", [e])
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge;
        e.runtime = {
            arguments: null,
            version: null,
            innerVersion: null,
            launchLoadedTime: null,
            launcher: null,
            origin: null,
            processId: null,
            startupTime: null,
            restart: function() {
                t.exec("Runtime", "restart", [])
            },
            install: function(e, n, i, o) {
                var r = t.callbackId(i, o);
                t.exec("Runtime", "install", [e, r, n])
            },
            getProperty: function(e, n) {
                var i = t.callbackId(n);
                t.exec("Runtime", "getProperty", [e, i])
            },
            quit: function() {
                t.exec("Runtime", "quit", [])
            },
            openURL: function(e, n, i) {
                var o = t.callbackId(null, function(e) {
                    "function" == typeof n && n(e)
                });
                t.exec("Runtime", "openURL", [e, o, i])
            },
            launchApplication: function(e, n) {
                var i = t.callbackId(null, function(e) {
                    "function" == typeof n && n(e)
                });
                t.exec("Runtime", "launchApplication", [e, i])
            },
            setBadgeNumber: function(e) {
                "number" == typeof e && t.exec("Runtime", "setBadgeNumber", [e])
            },
            openFile: function(e, n, i) {
                var o = t.callbackId(null, function(e) {
                    "function" == typeof i && i(e)
                });
                t.exec("Runtime", "openFile", [e, n, o])
            },
            isStreamValid: function() {
                return t.execSync("Runtime", "isStreamValid")
            },
            openWeb: function(e) {
                return t.exec("Runtime", "openWeb", [e])
            },
            isApplicationExist: function(e) {
                return null != e && "string" != typeof e && t.execSync("Runtime", "isApplicationExist", [e])
            },
            processDirectPage: function() {
                return t.execSync("Runtime", "processDirectPage", [])
            },
            isCustomLaunchPath: function() {
                return t.execSync("Runtime", "isCustomLaunchPath")
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools,
            i = "Share",
            o = {};

        function r(e, t, n, i) {
            this.id = e, this.description = t, this.authenticated = n, this.accessToken = i, this.nativeClient = !1
        }
        var s = r.prototype;

        function a(o, r) {
            var s = this;
            s.__UUID__ = n.UUID("Authorize"), s.__componentid__ = o, s.display = r, s.onloaded = null, s.onauthenticated = null, s.onerror = null, s.__top__ = 0, s.__left__ = 0, s.__width__ = 0, s.__height__ = 0;
            var a = document.getElementById(s.__componentid__);
            a && (s.__left__ = a.offsetLeft, s.__top__ = a.offsetTop, s.__width__ = a.offsetWidth, s.__height__ = a.offsetHeight);
            var c = function(e) {
                    "function" == typeof s.onerror && s.onerror(e)
                },
                u = t.callbackId(function(t) {
                    "load" == t.evt ? "function" == typeof s.onloaded && s.onloaded() : "auth" == t.evt && "function" == typeof s.onauthenticated && e.share.getServices(function(e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (i.id == t.type) {
                                i.authenticated = t.authenticated, i.accessToken = t.accessToken, s.onauthenticated(i);
                                break
                            }
                        }
                    }, function(e) {
                        c(e)
                    })
                }, c);
            t.exec(i, "create", [s.__UUID__, u, s.display, s.__left__, s.__top__, s.__width__, s.__height__])
        }
        s.authorize = function(e, n, o) {
            var r = this,
                s = "function" != typeof e ? null : function(t) {
                    r.authenticated = t.authenticated, r.accessToken = t.accessToken, e(r)
                },
                a = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                c = t.callbackId(s, a);
            t.exec(i, "authorize", [c, this.id, o])
        }, s.forbid = function() {
            this.authenticated = !1, this.accessToken = null, t.exec(i, "forbid", [this.id])
        }, s.send = function(e, n, o) {
            var r = "function" != typeof n ? null : function(e) {
                    n()
                },
                s = "function" != typeof o ? null : function(e) {
                    o(e)
                },
                a = t.callbackId(r, s);
            t.exec(i, "send", [a, this.id, e])
        }, a.prototype.load = function(e) {
            this.id = e, t.exec(i, "load", [this.__UUID__, e])
        }, a.prototype.setVisible = function(e) {
            t.exec(i, "setVisible", [this.__UUID__, e])
        };
        var c = {
            Authorize: a,
            getServices: function(e, n) {
                var s = "function" != typeof e ? null : function(t) {
                        for (var n = [], i = 0; i < t.length; i++) {
                            var s = t[i];
                            if (s.id) {
                                var a = o[s.id];
                                a || (a = new r), a.id = s.id, a.description = s.description, a.authenticated = s.authenticated, a.accessToken = s.accessToken, a.nativeClient = s.nativeClient, o[s.id] = a, n.push(a)
                            }
                        }
                        e(n)
                    },
                    a = "function" != typeof n ? null : function(e) {
                        n(e)
                    },
                    c = t.callbackId(s, a);
                t.exec(i, "getServices", [c])
            },
            sendWithSystem: function(e, n, o) {
                var r = "function" != typeof n ? null : function(e) {
                        n()
                    },
                    s = "function" != typeof o ? null : function(e) {
                        o(e)
                    },
                    a = t.callbackId(r, s);
                t.exec(i, "sendWithSystem", [a, e])
            }
        };
        e.share = c
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = {
                startRecognize: function(e, n, i) {
                    var o = "function" != typeof n ? null : function(e) {
                            n(e)
                        },
                        r = "function" != typeof i ? null : function(e) {
                            i(e)
                        },
                        s = t.callbackId(o, r),
                        a = {};
                    if (e.onstart) {
                        var c = "function" != typeof e.onstart ? null : function() {
                            e.onstart()
                        };
                        a.onstart = t.callbackId(c)
                    }
                    if (e.onend) {
                        var u = "function" != typeof e.onend ? null : function() {
                            e.onend()
                        };
                        a.onend = t.callbackId(u)
                    }
                    t.exec("Speech", "startRecognize", [s, e, a])
                },
                stopRecognize: function() {
                    t.exec("Speech", "stopRecognize", [])
                },
                addEventListener: function(e, n, i) {
                    var o;
                    if (n) {
                        var r = function(e) {
                            "function" == typeof n && n(e)
                        };
                        n.listener = r, o = t.callbackId(r)
                    }
                    t.exec("Speech", "addEventListener", [e, o, window.__HtMl_Id__])
                }
            };
        e.speech = n
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "Statistic";
        e.statistic = {
            eventTrig: function(e, i) {
                t.exec(n, "eventTrig", [e, i])
            },
            eventStart: function(e, i) {
                t.exec(n, "eventStart", [e, i])
            },
            eventEnd: function(e, i) {
                t.exec(n, "eventEnd", [e, i])
            },
            eventDuration: function(e, i, o) {
                t.exec(n, "eventDuration", [e, i, o])
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge;
        e.storage = {
            getLength: function() {
                return t.execSync2("Storage", "getLength", [null])
            },
            getAllKeys: function() {
                return t.execSync2("Storage", "getAllKeys", [null])
            },
            getItem: function(e) {
                return "string" == typeof e && t.execSync2("Storage", "getItem", [e], function(e) {
                    var t = e.indexOf(":");
                    return "null" === e.substr(0, t) ? null : e.substr(t + 1)
                })
            },
            setItem: function(e, n) {
                return "string" == typeof e && "string" == typeof n && t.execSync2("Storage", "setItem", [e, n])
            },
            removeItem: function(e) {
                return "string" == typeof e && t.execSync2("Storage", "removeItem", [e])
            },
            clear: function() {
                return t.execSync2("Storage", "clear", [null])
            },
            key: function(e) {
                return "number" == typeof e && t.execSync2("Storage", "key", [e])
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = window.plus.tools,
            i = {
                UUID: function() {
                    return n.UUID("uploader")
                },
                server: "Uploader",
                getValue: function(e, t) {
                    return void 0 === e ? t : e
                }
            };

        function o(e, t, n) {
            this.type = i.getValue(e, ""), this.handles = [], this.capture = i.getValue(n, !1), "function" == typeof t && this.handles.push(t)
        }

        function r(e, t, n) {
            this.__UUID__ = i.UUID(), this.url = i.getValue(e, ""), this.options = t || {}, this.uploadedSize = 0, this.totalSize = 0, this.responseText = "", this.method = i.getValue(this.options.method, "GET"), this.timeout = i.getValue(this.options.timeout, 120), this.retry = i.getValue(this.options.retry, 3), this.retryInterval = i.getValue(this.options.retryInterval, 30), this.priority = i.getValue(this.options.priority, 1), this.onCompleted = n || null, this.eventHandlers = {}, this.__requestHeaders__ = {}, this.__responseHeaders__ = {}, this.__noParseResponseHeader__ = null, this.__cacheReponseHeaders__ = {}
        }
        o.prototype.fire = function(e) {
            for (var t = 0; t < this.handles.length; ++t) this.handles[t].apply(this, arguments)
        }, r.prototype.addFile = function(e, n) {
            return "string" == typeof e && "object" == typeof n && (t.exec(i.server, "addFile", [this.__UUID__, e, n]), !0)
        }, r.prototype.addData = function(e, n) {
            return "string" == typeof e && "string" == typeof n && (t.exec(i.server, "addData", [this.__UUID__, e, n]), !0)
        }, r.prototype.getAllResponseHeaders = function() {
            if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
            var e = "";
            for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
            return this.__noParseResponseHeader__ = e, this.__noParseResponseHeader__
        }, r.prototype.getResponseHeader = function(e) {
            if ("string" == typeof e) {
                var t = null;
                if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
                for (var n in this.__responseHeaders__) {
                    var i = this.__responseHeaders__[n];
                    e === (n = n.toLowerCase()) && (t = t ? t + ", " + i : i)
                }
                return this.__cacheReponseHeaders__[e] = t, t
            }
            return ""
        }, r.prototype.setRequestHeader = function(e, t) {
            if ("string" == typeof e && "string" == typeof t) {
                var n = this.__requestHeaders__[e];
                this.__requestHeaders__[e] = n ? n + ", " + t : t
            }
        }, r.prototype.start = function() {
            t.exec(i.server, "start", [this.__UUID__, this.__requestHeaders__])
        }, r.prototype.pause = function() {
            t.exec(i.server, "pause", [this.__UUID__])
        }, r.prototype.resume = function() {
            t.exec(i.server, "resume", [this.__UUID__])
        }, r.prototype.abort = function() {
            t.exec(i.server, "abort", [this.__UUID__])
        }, r.prototype.addEventListener = function(e, t, n) {
            if ("string" == typeof e && "function" == typeof t) {
                var i = e.toLowerCase();
                void 0 === this.eventHandlers[i] ? this.eventHandlers[i] = new o(e, t, n) : this.eventHandlers[i].handles.push(t)
            }
        }, r.prototype.__handlerEvt__ = function(e) {
            var t = this;
            t.state = i.getValue(e.state, t.state), t.uploadedSize = i.getValue(e.uploadedSize, t.uploadedSize), t.totalSize = i.getValue(e.totalSize, t.totalSize), t.__responseHeaders__ = i.getValue(e.headers, {}), 4 == t.state && "function" == typeof t.onCompleted && (t.responseText = i.getValue(e.responseText, t.responseText), t.onCompleted(t, e.status || null));
            var n = this.eventHandlers.statechanged;
            n && n.fire(t, void 0 === e.status ? null : e.status)
        }, e.uploader = {
            __taskList__: {},
            createUpload: function(e, n, o) {
                if ("string" == typeof e) {
                    var s = new r(e, n, o);
                    return this.__taskList__[s.__UUID__] = s, t.exec(i.server, "createUpload", [s]), s
                }
                return null
            },
            enumerate: function(e, n) {
                var o = this.__taskList__,
                    s = t.callbackId(function(t) {
                        for (var n = 0; n < t.length; n++) {
                            var s = t[n];
                            if (s && s.uuid) {
                                var a = o[s.uuid];
                                a || ((a = new r).__UUID__ = s.uuid, o[a.__UUID__] = a), a.state = i.getValue(s.state, a.state), a.options = i.getValue(s.options, a.options), a.url = i.getValue(s.url, a.url), a.uploadedSize = i.getValue(s.uploadedSize, a.uploadedSize), a.totalSize = i.getValue(s.totalSize, a.totalSize), a.responseText = i.getValue(s.responseText, a.responseText), a.__responseHeaders__ = i.getValue(t.headers, a.__responseHeaders__)
                            }
                        }
                        var c = [];
                        for (var u in o) c.push(o[u]);
                        "function" == typeof e && e(c)
                    });
                t.exec(i.server, "enumerate", [s])
            },
            clear: function(e) {
                var n = 4;
                "number" == typeof e && (n = e), t.exec(i.server, "clear", [n])
            },
            startAll: function() {
                t.exec(i.server, "startAll", [0])
            },
            __handlerEvt__: function(e, t) {
                var n = this.__taskList__[e];
                n && n.__handlerEvt__(t)
            }
        }
    }(window.plus),
    function(e) {
        e = e, window.plus.bridge;
        e.widget = {
            restart: function() {
                mkey.exec("SUSF", "restart", [])
            },
            install: function(e, t, n, i) {
                var o = mkey.helper.callbackid(n, i);
                mkey.exec("SUSF", "install", [e, o, t])
            },
            getProperty: function(e, t) {
                var n = mkey.helper.callbackid(t);
                mkey.exec("SUSF", "getProperty", [e, n])
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools;

        function i() {}

        function o() {
            this.__init__(), this.__UUID__ = n.UUID("xhr")
        }
        i.Timeout = 0, i.Other = 1, o.Uninitialized = 0, o.Open = 1, o.Sent = 2, o.Receiving = 3, o.Loaded = 4, o.__F__ = "XMLHttpRequest";
        var r = o.prototype;
        r.__init__ = function() {
            this.readyState = o.Uninitialized, this.responseText = "", this.responseXML = null, this.status = o.Uninitialized, this.statusText = null, this.onreadystatechange, this.responseType = null, this.response = null, this.withCredentials = !0, this.timeout = 12e4, this.__noParseResponseHeader__ = null, this.__requestHeaders__ = {}, this.__responseHeaders__ = {}, this.__cacheReponseHeaders__ = {}, this.__progessEvent__ = new function(e, t, n, i) {
                this.target = e, this.lengthComputable = t, this.loaded = n, this.total = i
            }(this, !1, 0, 0)
        }, r.abort = function() {
            this.readyState > o.Uninitialized && ("function" == typeof this.onabort && this.onabort(this.__progessEvent__), this.__init__(), t.exec(o.__F__, "abort", [this.__UUID__]))
        }, r.getAllResponseHeaders = function() {
            if (this.readyState >= o.Receiving) {
                if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
                var e = "";
                for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
                return this.__noParseResponseHeader__ = e, this.__noParseResponseHeader__
            }
            return null
        }, r.getResponseHeader = function(e) {
            if ("string" == typeof e && this.readyState >= o.Receiving) {
                var t = null;
                if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
                for (var n in this.__responseHeaders__) {
                    var i = this.__responseHeaders__[n];
                    e === (n = n.toLowerCase()) && (t = t ? t + ", " + i : i)
                }
                return this.__cacheReponseHeaders__[e] = t, t
            }
            return null
        }, r.setRequestHeader = function(e, t) {
            if ("string" == typeof e && "string" == typeof t && o.Open == this.readyState) {
                var n = this.__requestHeaders__[e];
                this.__requestHeaders__[e] = n ? n + ", " + t : t
            }
        }, r.open = function(e, n, i, r) {
            o.Open != this.readyState && o.Loaded != this.readyState || this.__init__(), o.Uninitialized == this.readyState && (this.readyState = o.Open, t.exec(o.__F__, "open", [this.__UUID__, e, function(e) {
                return "string" == typeof e ? 0 == (e = e.replace(/(^\s*)|(\s*$)/g, "")).indexOf("http://") || 0 == e.indexOf("https://") ? e : e = 0 == e.indexOf("/") ? location.origin + e : location.origin + location.pathname + e : ""
            }(n), i, r, this.timeout]), "function" == typeof this.onreadystatechange && this.onreadystatechange())
        }, r.overrideMimeType = function(e) {
            t.exec(o.__F__, "overrideMimeType", [this.__UUID__, e])
        }, r.send = function(e) {
            var n = this;
            if (o.Open == this.readyState) {
                this.readyState = o.Sent, "function" == typeof this.onloadstart && this.onloadstart(n.__progessEvent__);
                var r = t.callbackId(function(e) {
                    if (o.Receiving == e.readyState) o.Sent == n.readyState ? (n.readyState = o.Receiving, n.status = e.status, n.statusText = e.statusText, n.__responseHeaders__ = e.header, n.__progessEvent__.lengthComputable = e.lengthComputable, n.__progessEvent__.total = e.totalSize) : o.Receiving == n.readyState && (n.responseText = e.responseText, n.__progessEvent__.loaded = e.revSize), "function" == typeof n.onreadystatechange && n.onreadystatechange(), "function" == typeof n.onprogress && n.onprogress(n.__progessEvent__);
                    else if (o.Loaded == e.readyState) {
                        n.readyState = o.Loaded, e.status && (n.status = e.status);
                        try {
                            if (n.responseText) {
                                var t = new DOMParser;
                                n.responseXML = t.parseFromString(n.responseText, "text/xml")
                            }
                        } catch (e) {
                            n.responseXML = null
                        }
                        try {
                            if ("document" == n.responseType) {
                                t = new DOMParser;
                                n.response = n.responseXML
                            } else "json" == n.responseType && (n.response = JSON.parse(n.responseText))
                        } catch (e) {
                            n.response = null
                        }
                        "function" == typeof n.onreadystatechange && n.onreadystatechange(), e.error == i.Timeout ? "function" == typeof n.ontimeout && n.ontimeout(n.__progessEvent__) : e.error == i.Other ? "function" == typeof n.onerror && n.onerror(n.__progessEvent__) : "function" == typeof n.onload && n.onload(n.__progessEvent__), "function" == typeof n.onloadend && n.onloadend(n.__progessEvent__)
                    }
                });
                return t.exec(o.__F__, "send", [this.__UUID__, r, e, this.__requestHeaders__]), void("function" == typeof this.onreadystatechange && this.onreadystatechange())
            }
            throw new Error("XMLHttpRequest not open")
        }, e.net = {
            XMLHttpRequest: o
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge;
        e.zip = {
            decompress: function(e, n, i, o) {
                var r = t.callbackId(i, o);
                t.exec("Zip", "decompress", [e, n, r])
            },
            compress: function(e, n, i, o) {
                var r = t.callbackId(i, o);
                t.exec("Zip", "compress", [e, n, r])
            },
            compressImage: function(e, n, i) {
                var o = t.callbackId(function(e) {
                    if (n) {
                        var t = {
                            target: e.path,
                            width: e.w,
                            height: e.h,
                            size: e.size
                        };
                        n(t)
                    }
                }, i);
                t.exec("Zip", "compressImage", [e, o])
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = e.tools,
            i = "Proximity",
            o = !1,
            r = {},
            s = [];

        function a(e) {
            var n = s.indexOf(e);
            n > -1 && (s.splice(n, 1), 0 === s.length && (t.exec(i, "stop", []), o = !1))
        }
        var c = {
            getCurrentProximity: function(e, o) {
                var r = t.callbackId(function(t) {
                    n.IOS == n.platform && (t = 0 == t ? 0 : 1 / 0), e && e(t)
                }, function(e) {
                    o && o(e)
                });
                t.exec(i, "getCurrentProximity", [r])
            },
            watchProximity: function(e, c) {
                var u, l = n.UUID("watch"),
                    _ = {
                        win: function(t) {
                            n.IOS == n.platform && (t = 0 == t ? 0 : 1 / 0), e && e(t)
                        },
                        fail: function(e) {
                            a(_), c && c(e)
                        }
                    };
                return s.push(_), r[l] = {
                    listeners: _
                }, o || (u = t.callbackId(function(e) {
                    for (var t = s.slice(0), n = 0, i = t.length; n < i; n++) t[n].win(e)
                }, function(e) {
                    for (var t = s.slice(0), n = 0, i = t.length; n < i; n++) t[n].fail(e)
                }), t.exec(i, "start", [u]), o = !0), l
            },
            clearWatch: function(e) {
                e && r[e] && (a(r[e].listeners), delete r[e])
            }
        };
        e.proximity = c
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = window.plus.tools;
        _Server = "Invocation", _importHash = [], _frameObjHash = {}, _currentFrameObj = null;
        var i = {},
            o = {};
        i.undefObjectHash = {};
        var r = "";

        function s(e, t) {
            this.type = e, this.value = t
        }

        function a() {
            this.__TYPE__ = "JSBObject", this.__UUID__ = n.UUID("JSBaseObject")
        }

        function c(i, o) {
            i = _(i);
            var r = this;
            this.__UUID__ = n.UUID("JSImplements"), this.callback = o, this.callbackId = t.callbackId(function(t) {
                for (var n = t.arguments, i = [], o = 0; o < n.length; o++) i.push(e.ios.__Tool.New(n[o], !0));
                r.callback[t.method].apply(r, i)
            }, null);
            var s = [];
            for (var a in o) s.push(a);
            var c = t.execSync2(_Server, "implements", [this.__UUID__, i, s, this.callbackId], null, !0);
            return e.ios.__Tool.New(c, !0)
        }

        function u() {
            this.__Tool = i, this.__JSBBaseObject = a
        }
        e.tools.IOS == e.tools.platform ? r += "plus.ios." : e.tools.ANDROID == e.tools.platform && (r += "plus.android."), i.process = function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(this.warp(e[n]));
            return t
        }, i.attach = function(e, t) {
            var n = this.undefObjectHash[e];
            if (n && t) {
                for (var i = 0; i < n.length; i++) n[i].__proto__ = t.prototype;
                delete this.undefObjectHash.className
            }
        }, i.New = function(e, t) {
            var n = null;
            if (e) {
                if ("object" == e.type) {
                    var r = o.isImport(e.className);
                    if (r) n = new r(t);
                    else {
                        if (e.superClassNames)
                            for (var c = 0; c < e.superClassNames.length && !(r = o.isImport(e.superClassNames[c])); c++);
                        if (r) n = new r(t);
                        else {
                            n = new a;
                            var u = this.undefObjectHash[e.className];
                            u || (this.undefObjectHash[e.className] = u = []), u.push(n)
                        }
                    }
                    return n.className = e.className, n.__UUID__ = e.value, n
                }
                if ("struct" == e.type) return new s(e.type, e.value);
                if (e.value instanceof Array)
                    for (c = 0; c < e.value.length; c++) e.value[c] = i.New(e.value[c], t);
                return e.value
            }
            return null
        }, i.handleClassName = function(e) {
            return e.replace("$", ".")
        }, i.saveContent = function(e, n) {
            t.execSync2(_Server, "__saveContent", [e, n], null, !0)
        }, i.warp = function(n) {
            var i = {};
            if (n && "JSBObject" == n.__TYPE__) i.type = "object", i.value = n.__UUID__;
            else if (n instanceof s) {
                if (i.type = n.type, i.value = n.value, 0 == n.type.indexOf("@block")) {
                    i.type = n.type;
                    var o = t.callbackId(function(t) {
                        n.value;
                        for (var i = [], o = 0; o < t.length; o++) i.push(e.ios.__Tool.New(t[o], !0));
                        n.value.apply(this, i)
                    });
                    i.value = o, alert(i.value)
                }
            } else if (void 0 === n || null == n) i.type = "null", i.value = n;
            else if ("string" == typeof n || "String" == typeof n) i.type = "string", i.value = n;
            else if ("number" == typeof n) i.type = "number", i.value = n;
            else if ("boolean" == typeof n) i.type = "boolean", i.value = n;
            else if ("function" == typeof n) {
                i.type = "block";
                o = t.callbackId(function(t) {
                    for (var i = [], o = 0; o < t.length; o++) i.push(e.ios.__Tool.New(t[o], !0));
                    n.apply(this, i)
                });
                i.value = o
            } else i = n;
            return i
        }, s.prototype.constructor = s, a.prototype.plusSetAttribute = function() {
            var t = null;
            try {
                for (var n = [], o = 1; o < arguments.length; o++) n.push(i.warp(arguments[o]));
                t = e.bridge.execSync2(_Server, "__plusSetAttribute", [this.__UUID__, arguments[0], n], null, !0), t = i.New(t, !0)
            } catch (e) {
                throw e
            }
            return t
        }, a.prototype.plusGetAttribute = function(t) {
            var n = null;
            try {
                n = e.bridge.execSync2(_Server, "__plusGetAttribute", [this.__UUID__, t], null, !0), n = e.ios.__Tool.New(n, !0)
            } catch (e) {
                throw e
            }
            return n
        }, a.prototype.importClass = function() {
            return e.android.importClass(this)
        }, a.prototype.plusCallMethod = function(t) {
            var n = null;
            try {
                var i = "",
                    o = [],
                    r = 0;
                for (var s in t) {
                    if ("string" != typeof s) return;
                    var a = t[s];
                    if (0 == r) {
                        if (i = s, void 0 === a) {
                            r++;
                            break
                        }
                        i += ":"
                    } else i += s + ":";
                    o.push(a), r++
                }
                if (0 == r) return;
                o = window.plus.ios.__Tool.process(o);
                n = window.plus.bridge.execSync2(_Server, "__exec", [this.__UUID__, i, o], null, !0), n = e.ios.__Tool.New(n, !0)
            } catch (e) {
                throw e
            }
            return n
        }, c.prototype = new a, c.prototype.constructor = c, o.hashTable = {}, o.importClass = function(n, r) {
            var s = this.isImport(n);
            if (s) return s;
            for (var a = this.newClassDefine(n, r), c = t.execSync2(_Server, "import", [n], null, !0), u = c.ClassMethod, l = 0; l < u.length; l++) a += this.AddMethodToClass(n, u[l], !0);
            var _ = c.InstanceMethod;
            for (l = 0; l < _.length; l++) a += this.AddMethodToClass(n, _[l]);
            if (e.tools.ANDROID == e.tools.platform) {
                var f = c.ClassConstKeys,
                    d = c.ClassConstValues;
                for (l = 0; l < f.length; l++) a += this.AddStaticConstToClass(n, f[l], d[l])
            }
            return this.hashTable[n] = s = o.createClass(n, a), i.attach(n, s), s
        }, o.isImport = function(e) {
            return o.hashTable[e]
        }, o.newClassDefine = function(e, t) {
            var n, o, s = "",
                a = e;
            e = i.handleClassName(e), t && (t = i.handleClassName(t)), o = r + t;
            for (var c = (n = r + e).split("."), u = "window", l = 0; l < c.length - 1; l++) s += "if(!" + (u = u + "." + c[l]) + ")", s += u + "={};";
            return s += u + "." + c[c.length - 1] + "=", s += "function(nocreate) {            this.__UUID__ = window.plus.tools.UUID('JSB');            this.__TYPE__ = 'JSBObject';            var args = window.plus.ios.__Tool.process(arguments);            if ( nocreate && plus.tools.IOS == plus.tools.platform ) {} else {                window.plus.bridge.execSync2('" + _Server + "', '__Instance',[this.__UUID__, '" + a + "',args],null,true);            }        };", (t = t ? o : "plus.ios.__JSBBaseObject") && (s += n + ".prototype = new " + t + "('__super__constructor__');", s += n + ".prototype.constructor = " + n + ";"), s
        }, o.createClass = function(e, t) {
            e = i.handleClassName(e);
            var n = "(function(plus){" + t + "return " + r + e + ";})(window.plus);";
            return window.eval(n)
        }, o.AddStaticConstToClass = function(e, t, n) {
            var o;
            return e = i.handleClassName(e), n instanceof Array && 0 == n.length ? (o = r + e + "." + t + "=[];", o += r + e + ".prototype." + t + "=[];") : (o = r + e + "." + t + "=" + n + ";", o += r + e + ".prototype." + t + "=" + n + ";"), o
        }, o.AddMethodToClass = function(t, n, o) {
            var s, a = t;
            t = i.handleClassName(t);
            var c = "";
            if (e.tools.IOS == e.tools.platform) {
                var u = n.split(":"),
                    l = u.length;
                if (l > 0)
                    for (var _ = 0; _ < l; _++) c += u[_];
                else c = u
            } else c = n;
            return s = o ? r + t + "." + c : r + t + ".prototype." + c, s += " = function (){            var ret = null;            try {                var args = window.plus.ios.__Tool.process(arguments);", s += o ? "ret = window.plus.bridge.execSync2('" + _Server + "', '__execStatic', ['" + a + "', '" + n + "', args],null,true);" : "ret = window.plus.bridge.execSync2('" + _Server + "', '__exec', [this.__UUID__, '" + n + "', args],null,true);", s += "ret = plus.ios.__Tool.New(ret, true);            } catch (e) {                throw e;            }            return ret;        };"
        }, u.prototype.importClass = function(e) {
            var n, i;
            if ((e = _(e)).__TYPE__) {
                if (!e.className) return;
                i = e.__UUID__, n = e, e = e.className
            }
            var r = o.isImport(e);
            if (r) return r;
            var s = t.execSync2(_Server, "__inheritList", [e, i], null, !0);
            if (s) {
                for (var a = s.length, c = a - 1; c >= 0; c--) r = c == a - 1 ? o.importClass(s[c], null) : o.importClass(s[c], s[c + 1]);
                return n && (n.__proto__ = r.prototype), r
            }
            return null
        }, u.prototype.invoke = function(t, n) {
            for (var i = null, o = [], r = 2; r < arguments.length; r++) o.push(window.plus.ios.__Tool.warp(arguments[r]));
            if ("string" == typeof t) try {
                i = window.plus.bridge.execSync2(_Server, "__execStatic", [t, n, o], null, !0)
            } catch (e) {
                throw e
            } else t && "JSBObject" == t.__TYPE__ ? i = window.plus.bridge.execSync2(_Server, "__exec", [t.__UUID__, n, o], null, !0) : null == t && "string" == typeof n && (i = window.plus.bridge.execSync2(_Server, "__execCFunction", [n, o], null, !0));
            return i = e.ios.__Tool.New(i, !0)
        }, u.prototype.autoCollection = function(e) {
            e && "JSBObject" == e.__TYPE__ && window.plus.bridge.execSync2(_Server, "__autoCollection", [e.__UUID__], null, !0)
        }, u.prototype.setAttribute = function(e, t, n) {
            "function" == typeof e || e && "JSBObject" == e.__TYPE__ && e.plusSetAttribute(t, n)
        }, u.prototype.getAttribute = function(e, t) {
            if ("function" == typeof e);
            else if (e && "JSBObject" == e.__TYPE__) return e.plusGetAttribute(t);
            return null
        }, u.prototype.load = function(e) {
            window.plus.bridge.execSync2(_Server, "__loadDylib", [e], null, !0)
        }, u.prototype.newObject = function(t, n) {
            var i = null;
            if ("string" == typeof t) {
                for (var o = [], r = 1; r < arguments.length; r++) o.push(window.plus.ios.__Tool.warp(arguments[r]));
                i = window.plus.bridge.execSync2(_Server, "__newObject", [t, o], null, !0)
            }
            return (i = e.ios.__Tool.New(i, !0)) || new s(t, n)
        }, u.prototype.currentWebview = function() {
            if (!_currentFrameObj) {
                var t = window.plus.bridge.execSync2(_Server, "currentWebview", [], null, !0);
                _currentFrameObj = e.ios.__Tool.New(t, !0)
            }
            return _currentFrameObj
        }, u.prototype.getWebviewById = function(t) {
            if (t === window.__HtMl_Id__) return this.currentWebview();
            var n = _frameObjHash[t];
            return n || (n = window.plus.bridge.execSync2(_Server, "getWebviewById", [t], null, !0), (n = e.ios.__Tool.New(n, !0)) && (_frameObjHash[t] = n)), n
        }, u.prototype.deleteObject = function(e) {
            t.execSync2(_Server, "__release", [e.__UUID__], null, !0)
        }, u.prototype.implements = function(e, t) {
            return new c(e, t)
        };
        var l = {
            "io.dcloud.adapter.": "io.dcloud.common.adapter.",
            "io.dcloud.android.content.": "io.dcloud.feature.internal.reflect.",
            "io.dcloud.app.": "io.dcloud.common.app.",
            "io.dcloud.constant.": "io.dcloud.common.constant.",
            "io.dcloud.core.": "io.dcloud.common.core.",
            "io.dcloud.DHInterface.": "io.dcloud.common.DHInterface.",
            "io.dcloud.net.": "io.dcloud.common.util.net.",
            "io.dcloud.permission.": "io.dcloud.common.core.permission.",
            "io.dcloud.sdk.": "io.dcloud.feature.internal.sdk.",
            "io.dcloud.splash.": "io.dcloud.feature.internal.splash.",
            "io.dcloud.ui.": "io.dcloud.common.core.ui.",
            "io.dcloud.util.": "io.dcloud.common.util."
        };

        function _(e) {
            if ("string" != typeof e || n.platform == n.IOS) return e;
            var t, i;
            for (var o in l)
                if (0 == e.indexOf(o)) {
                    t = o, i = l[o];
                    break
                } return i && e ? e.replace(t, i) : e
        }
        e.ios = e.android = new u, e.tools.ANDROID == e.tools.platform && (e.android.runtimeMainActivity = function() {
            var t;
            if (e.android.__runtimeMainActivity__) return e.android.__runtimeMainActivity__;
            var n = e.bridge.callbackId(function(e) {
                    t.onActivityResult && t.onActivityResult(e[0], e[1], e[2])
                }),
                i = (t = e.bridge.execSync2(_Server, "getContext", [n], null, !0)).className;
            return t.superClassNames = [], t = e.ios.__Tool.New(t, !0), e.android.importClass(i), e.android.__runtimeMainActivity__ = t, t
        })
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "NativeUI",
            i = e.bridge,
            o = e.tools;

        function r(o, r) {
            this.__uuid__ = e.tools.UUID("WaitingView"), this.onclose = null;
            var s = this,
                a = i.callbackId(function() {
                    "function" == typeof s.onclose && s.onclose()
                });
            t.exec(n, "WaitingView", [this.__uuid__, [o, r, a]])
        }

        function s(n, o, r) {
            var s;
            this.__uuid__ = e.tools.UUID("NativeObj_"), r && (s = i.callbackId(function(e) {
                var t = {};
                t.index = e, r(t)
            })), t.exec("NativeUI", n, [window.__HtMl_Id__, [o, s, this.__uuid__]])
        }
        r.prototype.close = function() {
            t.exec(n, "WaitingView_close", [this.__uuid__])
        }, r.prototype.setTitle = function(e) {
            t.exec(n, "WaitingView_setTitle", [this.__uuid__, [e]])
        }, s.prototype.close = function() {
            t.exec("NativeUI", "_NativeObj_close", [this.__uuid__])
        }, e.nativeUI = {
            pickTime: function(e, o, r) {
                if (e && "function" == typeof e) {
                    var s = !1;
                    if ("object" == typeof r) {
                        var a = r.time;
                        a instanceof Date && (r.__hours = a.getHours(), r.__minutes = a.getMinutes(), s = !0)
                    }
                    var c = "function" != typeof e ? null : function(t) {
                            var n = void 0 !== t ? new Date(t) : null,
                                i = {};
                            i.date = n, e(i)
                        },
                        u = "function" != typeof o ? null : function(e) {
                            o(e)
                        },
                        l = i.callbackId(c, u);
                    t.exec(n, "pickTime", [window.__HtMl_Id__, [l, r]]), s && (delete r.__hours, delete r.__minutes)
                }
            },
            pickDate: function(e, r, s) {
                if (e && "function" == typeof e) {
                    var a = {};
                    s && (s.minDate instanceof Date ? (a.startYear = s.minDate.getFullYear(), a.startMonth = s.minDate.getMonth(), a.startDay = s.minDate.getDate()) : o.isNumber(s.startYear) && (a.startYear = s.startYear, a.startMonth = 0, a.startDay = 1), s.maxDate instanceof Date ? (a.endYear = s.maxDate.getFullYear(), a.endMonth = s.maxDate.getMonth(), a.endDay = s.maxDate.getDate()) : o.isNumber(s.endYear) && (a.endYear = s.endYear, a.endMonth = 11, a.endDay = 31), s.date instanceof Date && (a.setYear = s.date.getFullYear(), a.setMonth = s.date.getMonth(), a.setDay = s.date.getDate()), a.popover = s.popover, a.title = s.title);
                    var c = "function" != typeof e ? null : function(t) {
                            var n = void 0 !== t ? new Date(t) : null,
                                i = {};
                            i.date = n, e(i)
                        },
                        u = "function" != typeof r ? null : function(e) {
                            r(e)
                        },
                        l = i.callbackId(c, u);
                    t.exec(n, "pickDate", [window.__HtMl_Id__, [l, a]])
                }
            },
            alert: function(e, o, r, s) {
                var a, c;
                e && (c = "string" != typeof e ? e.toString() : e, o && (a = i.callbackId(function(e) {
                    o(e)
                })), t.exec(n, "alert", [window.__HtMl_Id__, [c, a, r, s]]))
            },
            confirm: function(e, o, r, s) {
                var a, c;
                e && (c = "string" != typeof e ? e.toString() : e, o && (a = i.callbackId(function(e) {
                    var t = {};
                    t.index = e, o(t)
                })), t.exec(n, "confirm", [window.__HtMl_Id__, [c, a, r, s]]))
            },
            showWaiting: function(e, t) {
                return new r(e, t)
            },
            prompt: function(e, o, r, s, a) {
                var c, u;
                e && (c = "string" != typeof e ? e.toString() : e, o && (u = i.callbackId(function(e) {
                    e.value = e.message, o(e)
                })), t.exec(n, "prompt", [window.__HtMl_Id__, [c, u, r, s, a]]))
            },
            toast: function(e, i) {
                var o;
                e && (o = "string" != typeof e ? e.toString() : e, t.exec(n, "toast", [window.__HtMl_Id__, [o, i]]))
            },
            closeToast: function() {
                t.exec(n, "closeToast", [window.__HtMl_Id__, []])
            },
            showMenu: function(e, o, r) {
                var s;
                e && (e.onclick && (e.__plus__onclickCallbackId = i.callbackId(e.onclick)), r && (s = i.callbackId(function(e) {
                    var t = {};
                    t.index = e.index, t.target = o[e.index], r(t)
                })), t.exec(n, "showMenu", [window.__HtMl_Id__, [e, o, s]]))
            },
            hideMenu: function() {
                t.exec(n, "hideMenu", [window.__HtMl_Id__])
            },
            isTitlebarVisible: function() {
                return t.execSync(n, "isTitlebarVisible", [window.__HtMl_Id__])
            },
            setTitlebarVisible: function(e) {
                return t.exec(n, "setTitlebarVisible", [window.__HtMl_Id__, [e]])
            },
            getTitlebarHeight: function() {
                return t.execSync(n, "getTitlebarHeight", [window.__HtMl_Id__])
            },
            actionSheet: function(e, t) {
                return new s("actionSheet", e, t)
            },
            closeWaiting: function() {
                i.exec(n, "closeWaiting", [])
            },
            previewImage: function(e, t) {
                i.exec(n, "previewImage", [this.__uuid__, [e, t]])
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = e.tools,
            i = "Navigator";
        e.navigator = {
            closeSplashscreen: function() {
                t.exec(i, "closeSplashscreen", [0])
            },
            updateSplashscreen: function(e) {
                t.exec(i, "updateSplashscreen", [e])
            },
            isFullscreen: function() {
                return t.execSync(i, "isFullScreen", [0])
            },
            setFullscreen: function(e) {
                t.exec(i, "setFullscreen", [e])
            },
            isImmersedStatusbar: function() {
                return t.execSync(i, "isImmersedStatusbar", [])
            },
            getStatusbarHeight: function(e) {
                return this.__statusBarHeight__ || (this.__statusBarHeight__ = t.execSync(i, "getStatusbarHeight", [])), this.__statusBarHeight__
            },
            setStatusBarBackground: function(e) {
                t.exec(i, "setStatusBarBackground", [e])
            },
            getStatusBarBackground: function() {
                return t.execSync(i, "getStatusBarBackground", [])
            },
            setStatusBarStyle: function(e) {
                t.exec(i, "setStatusBarStyle", [e])
            },
            getStatusBarStyle: function() {
                return t.execSync(i, "getStatusBarStyle", [])
            },
            setUserAgent: function(e, n) {
                t.exec(i, "setUserAgent", [e, n])
            },
            getUserAgent: function() {
                return t.execSync(i, "getUserAgent", [], function(e) {
                    try {
                        return null == window.eval(e) ? null : e
                    } catch (t) {
                        return e
                    }
                    return e
                })
            },
            removeCookie: function(e) {
                t.exec(i, "removeCookie", [e])
            },
            removeSessionCookie: function(e, n) {
                t.exec(i, "removeSessionCookie", [])
            },
            removeAllCookie: function(e, n) {
                t.exec(i, "removeAllCookie", [])
            },
            setCookie: function(e, n) {
                t.exec(i, "setCookie", [e, n])
            },
            getCookie: function(e) {
                return t.execSync(i, "getCookie", [e], function(e) {
                    try {
                        return null == window.eval(e) ? null : e
                    } catch (t) {
                        return e
                    }
                    return e
                })
            },
            setLogs: function(e) {
                t.exec(i, "setLogs", [e])
            },
            isLogs: function() {
                return t.execSync(i, "isLogs", [0])
            },
            createShortcut: function(e, n, o) {
                var r = t.callbackId(n, o);
                t.exec(i, "createShortcut", [e, r])
            },
            hasShortcut: function(e, o) {
                if (n.platform != n.IOS) {
                    var r = t.callbackId(o);
                    t.exec(i, "hasShortcut", [e, r])
                }
            },
            checkPermission: function(e) {
                return t.execSync(i, "checkPermission", [e])
            },
            requestPermission: function(e, n) {
                var o = t.callbackId(n);
                return t.exec(i, "requestPermission", [e, o])
            },
            isBackground: function() {
                return t.execSync(i, "isBackground", [])
            },
            hasSplashscreen: function() {
                return t.execSync(i, "hasSplashscreen", [])
            }
        }
    }(window.plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = e.tools;
        e.key = {}, keyEvent = {}, keyEvent.backbutton = "back", keyEvent.menubutton = "menu", keyEvent.searchbutton = "search", keyEvent.volumeupbutton = "volumeup", keyEvent.volumedownbutton = "volumedown", keyEvent.keyup = "keyup", keyEvent.keydown = "keydown", keyEvent.longpressed = "longpressed", e.key.addEventListener = function(n, i, o) {
            if (n && i && "string" == typeof n && "function" == typeof i) {
                var r = e.webview.currentWebview();
                if (e.obj.Callback.prototype.addEventListener.apply(r, [keyEvent[n], function(e) {
                        var t = {};
                        t.keycode = e.keyType, t.keyCode = e.keyCode, t.keyType = e.keyType, i(t)
                    }, o])) {
                    var s = [keyEvent[n], window.__HtMl_Id__];
                    t.exec("UI", "execMethod", [r.__IDENTITY__, "addEventListener", [r.__uuid__, s]])
                }
            }
        }, e.key.removeEventListener = function(n, i) {
            if (n && i && "string" == typeof n && "function" == typeof i) {
                var o = e.webview.currentWebview();
                if (e.obj.Callback.prototype.removeEventListener.apply(o, [keyEvent[n], i])) {
                    var r = [keyEvent[n], window.__HtMl_Id__];
                    o = e.webview.currentWebview();
                    t.exec("UI", "execMethod", [o.__IDENTITY__, "removeEventListener", [o.__uuid__, r]])
                }
            }
        }, e.key.setAssistantType = function(i) {
            if (n.platform == n.IOS) window.__keyboardAssist.setInputType(i);
            else {
                var o = [i, window.__HtMl_Id__],
                    r = e.webview.currentWebview();
                t.exec("UI", "execMethod", [r.__IDENTITY__, "setAssistantType", [r.__uuid__, o]])
            }
        }, e.key.hideSoftKeybord = function() {
            if (n.platform == n.IOS) t.exec("Runtime", "hideSoftKeybord");
            else {
                var i = [window.__HtMl_Id__],
                    o = e.webview.currentWebview();
                t.exec("UI", "execMethod", [o.__IDENTITY__, "hideSoftKeybord", [o.__uuid__, i]])
            }
        }, e.key.showSoftKeybord = function() {
            var n = [window.__HtMl_Id__],
                i = e.webview.currentWebview();
            t.exec("UI", "execMethod", [i.__IDENTITY__, "showSoftKeybord", [i.__uuid__, n]])
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "UI",
            i = "execMethod",
            o = "syncExecMethod",
            r = {},
            s = e.bridge,
            a = e.tools;

        function c() {
            return a.platform != a.IOS && t.execSync(n, o, [n, "defaultHardwareAccelerated", []])
        }

        function u(s) {
            if (s && "string" == typeof s) {
                var a = t.execSync(n, o, [n, "findWindowByName", [window.__HtMl_Id__, [s]]]);
                if (a) {
                    var c = r[a.uuid];
                    return null == c && ((c = new e.webview.Webview(null, null, !0, a.extras)).__uuid__ = a.uuid, c.id = a.id, t.exec(n, i, [n, "setcallbackid", [c.__uuid__, [c.__callback_id__]]]), r[c.__uuid__] = c), c
                }
                for (var u in r) {
                    var l = r[u];
                    if (l && l.id === s) return l
                }
                return null
            }
        }
        e.webview = {
            open: function(t, n, i, o, r, s, a) {
                var c = e.webview.create(t, n, i, a);
                return c.show(o, r, s), c
            },
            show: function(t, n, i, o, r) {
                var s = null;
                if ("string" == typeof t) s = u(t);
                else {
                    if (!(t instanceof e.webview.Webview)) return;
                    s = t
                }
                s && s.show(n, i, o, r)
            },
            __test__: function() {
                "save" == arguments[0] ? t.exec(n, i, [n, "debug", [location.href, arguments]]) : t.execSync(n, i, [n, "debug", [location.href, arguments]])
            },
            hide: function(t, n, i, o) {
                var r = null;
                if ("string" == typeof t) r = u(t);
                else {
                    if (!(t instanceof e.webview.Webview)) return;
                    r = t
                }
                r && r.hide(n, i, o)
            },
            createGroup: null,
            getWapLaunchWebview: function() {
                if (a.IOS == a.platform) return null;
                var s = t.execSync(n, o, [n, "getWapLaunchWebview", []]);
                if (s) {
                    var c = r[s.uuid];
                    return null == c && ((c = new e.webview.Webview(null, null, !0, s.extras)).__uuid__ = s.uuid, c.id = s.id, t.exec(n, i, [n, "setcallbackid", [c.__uuid__, [c.__callback_id__]]]), r[c.__uuid__] = c), c
                }
                return null
            },
            getLaunchWebview: function() {
                var s = t.execSync2(n, o, [n, "getLaunchWebview", []]);
                if (s) {
                    var a = r[s.uuid];
                    return null == a && ((a = new e.webview.Webview(null, null, !0, s.extras)).__uuid__ = s.uuid, a.id = s.id, t.exec(n, i, [n, "setcallbackid", [a.__uuid__, [a.__callback_id__]]]), r[a.__uuid__] = a), a
                }
            },
            getSecondWebview: function() {
                var s = t.execSync2(n, o, [n, "getSecondWebview", []]);
                if (s) {
                    var a = r[s.uuid];
                    return null == a && ((a = new e.webview.Webview(null, null, !0, s.extras)).__uuid__ = s.uuid, a.id = s.id, t.exec(n, i, [n, "setcallbackid", [a.__uuid__, [a.__callback_id__]]]), r[a.__uuid__] = a), a
                }
            },
            getWebviewById: u,
            getTopWebview: function() {
                var s = t.execSync(n, o, [n, "getTopWebview", [window.__HtMl_Id__]]);
                if (s) {
                    var a = r[s.uuid];
                    return null == a && ((a = new e.webview.Webview(null, null, !0, s.extras)).__uuid__ = s.uuid, a.id = s.id, t.exec(n, i, [n, "setcallbackid", [a.__uuid__, [a.__callback_id__]]]), r[a.__uuid__] = a), a
                }
                return null
            },
            close: function(t, n, i) {
                var o = null;
                if ("string" == typeof t) o = u(t);
                else {
                    if (!(t instanceof e.webview.Webview)) return;
                    o = t
                }
                o && o.close(n, i)
            },
            create: function(t, n, i, o) {
                return (i = i || {}).name = n, new e.webview.Webview(t, i, !1, o)
            },
            prefetchURL: function(e) {
                t.exec(n, i, [n, "prefetchURL", [window.__HtMl_Id__, [e]]])
            },
            prefetchURLs: function(e) {
                t.exec(n, i, [n, "prefetchURLs", [window.__HtMl_Id__, [e]]])
            },
            currentWebview: function() {
                var s = r[window.__HtMl_Id__];
                if (null == s || void 0 === s) {
                    var a = t.execSync2(n, o, [n, "currentWebview", [window.__HtMl_Id__]]);
                    a && ((s = new e.webview.Webview(null, null, !0, a.extras)).__uuid__ = window.__HtMl_Id__, s.id = a.id, r[s.__uuid__] = s, t.exec(n, i, [n, "setcallbackid", [s.__uuid__, [s.__callback_id__]]]))
                }
                return s
            },
            postMessageToUniNView: function(e, o) {
                var s = r[window.__HtMl_Id__];
                t.exec(n, i, [n, "postMessageToUniNView", [s.__uuid__, [e, o]]])
            },
            all: function() {
                for (var s = t.execSync(n, o, [n, "enumWindow", [window.__HtMl_Id__]]), a = [], c = {}, u = 0; u < s.length; u++) {
                    var l = s[u],
                        _ = r[l.uuid];
                    _ || ((_ = new e.webview.Webview(null, null, !0, l.extras)).__uuid__ = l.uuid, _.id = l.id, t.exec(n, i, [n, "setcallbackid", [_.__uuid__, [_.__callback_id__]]])), a.push(_), c[_.__uuid__] = _
                }
                return r = c, a
            },
            getDisplayWebview: function() {
                var s = t.execSync(n, o, [n, "getDisplayWebview", [window.__HtMl_Id__]]),
                    a = [];
                if (!s) return a;
                for (var c = {}, u = 0; u < s.length; u++) {
                    var l = s[u],
                        _ = r[l.uuid];
                    _ ? _.id || (_.id = l.id) : ((_ = new e.webview.Webview(null, null, !0, l.extras)).__uuid__ = l.uuid, _.id = l.id, t.exec(n, i, [n, "setcallbackid", [_.__uuid__, [_.__callback_id__]]])), a.push(_), c[_.__uuid__] = _
                }
                return r = c, a
            },
            defauleHardwareAccelerated: function() {
                return c()
            },
            defaultHardwareAccelerated: c,
            exec: function(e, o, r) {
                t.exec(n, i, [e.__IDENTITY__, o, [e.__uuid__, r]])
            },
            execSync: function(e, i, r) {
                return t.execSync(n, o, [e.__IDENTITY__, i, [e.__uuid__, r]])
            },
            _find__Window_By_UUID__: function(o, s, a) {
                if (o && "string" == typeof o) {
                    var c = r[o];
                    return c || ((c = new e.webview.Webview(null, null, !0, a)).__uuid__ = o, c.id__ = s, c.id = s, t.exec(n, i, [n, "setcallbackid", [c.__uuid__, [c.__callback_id__]]]), r[o] = c), c
                }
            },
            __pushWindow__: function(e) {
                r[e.__uuid__] = e
            },
            __popWindow__: function(e) {
                delete r[e.__uuid__]
            },
            __JSON_Window_Stack: r,
            __Webview_LoadEvent_CallBack_: function(e) {
                var t = r[e.WebviewID];
                t && ("onloading" == e.Event ? null != t.onloading && t.onloading() : "onclose" == e.Event ? (null != t.onclose && t.onclose(), delete r[e.WebviewID]) : "onerror" == e.Event ? null != t.onerror && t.onerror() : "onloaded" == e.Event && null != t.onloaded && t.onloaded())
            },
            startAnimation: function(o, r, a) {
                var c, u;
                o && o.view && o.styles && o.styles.toLeft && ("string" == typeof o.view || o.view instanceof e.webview.Webview) && (o.view instanceof e.webview.Webview && (o.view = o.view.__uuid__), r && r.view && ("string" == typeof r.view || r.view instanceof e.webview.Webview) && r.view instanceof e.webview.Webview && (r.view = r.view.__uuid__), a && "function" == typeof a && (c = e.webview.currentWebview().__uuid__, u = s.callbackId(function(t) {
                    t.target = e.webview._find__Window_By_UUID__(t.target.uuid), a(t)
                })), t.exec(n, i, [n, "startAnimation", [window.__HtMl_Id__, [o, r, c, u]]]))
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).webview,
            n = e.bridge;

        function i(t) {
            this.__IDENTITY__ = t, this.__uuid__ = e.tools.UUID(t), this.id, e.obj.Callback.call(this)
        }
        i.prototype.getMetrics = function(e) {
            var i;
            e && (i = n.callbackId(function(t) {
                var n = {};
                n.canForward = t, e(n)
            }), t.exec(this, "getMetrics", [i, window.__HtMl_Id__]))
        }, i.prototype.onCallback = function(t, n, i) {
            if ("popGesture" == n) {
                var o = i.private_args,
                    r = {
                        target: e.webview._find__Window_By_UUID__(o.uuid, o.id, o.extras),
                        type: i.type,
                        progress: i.progress
                    };
                "result" in i && (r.result = i.result), i = r
            }
            t(i)
        }, i.prototype.addEventListener = function(n, i, o) {
            if (e.obj.Callback.prototype.addEventListener.apply(this, [n, i, o])) {
                var r = [n, window.__HtMl_Id__];
                t.exec(this, "addEventListener", r)
            }
        }, i.prototype.removeEventListener = function(n, i) {
            if (e.obj.Callback.prototype.removeEventListener.apply(this, [n, i])) {
                var o = [n, window.__HtMl_Id__];
                t.exec(this, "removeEventListener", o)
            }
        }, t.NView = i
    }(window.plus),
    function(e) {
        e = e;
        var t = "WebviewGroup";

        function n(n, i) {
            e.webview.NView.prototype.constructor.apply(this, [t]), this.__children = [];
            var o = [];
            if (n instanceof Array)
                for (var r = 0; r < n.length; r++) {
                    var s = n[r];
                    s.styles = s.styles || {}, s.styles.name = s.id;
                    var a = new e.webview.Webview(s.url, s.styles, !0, s.extras);
                    e.webview.__pushWindow__(a), this.__children.push(a);
                    var c = [a.__uuid__, [s.url, s.styles, a.__callback_id__, location.host + location.pathname, s.extras]];
                    o.push(c)
                }
            e.webview.exec(this, "createGroup", [o, i, this.__callback_id__])
        }
        var i = n.prototype;
        e.tools.extend(i, e.webview.NView.prototype), i.constructor = n, n.prototype.setSelectIndex = function(t) {
            e.webview.exec(this, "setSelectIndex", [t])
        }, n.prototype.children = function() {
            return this.__children
        }, e.webview.createGroup = function(e, t) {
            return new n(e, t)
        }, e.webview.WebviewGroup = n
    }(window.plus),
    function(e) {
        var t = (e = e).webview,
            n = "NWindow",
            i = e.bridge,
            o = e.tools;

        function r() {
            return window.location.href
        }

        function s(e) {
            if (e instanceof Array)
                for (var t = 0; t < e.length; t++) ! function(e) {
                    if (e.onclick && "function" == typeof e.onclick) {
                        var t = i.callbackId(function() {
                            e.onclick(e)
                        });
                        e.__cb__ = {
                            id: t,
                            htmlId: window.__HtMl_Id__
                        }
                    }
                }(e[t])
        }

        function a(e) {
            if (e instanceof Array)
                for (var t, n = 0; n < e.length; n++)(t = e[n]) && "input" == t.tag ? t.inputStyles && (t.inputStyles.onComplete && "function" == typeof t.inputStyles.onComplete && (t.inputStyles.__onCompleteCallBackId__ = i.callbackId(t.inputStyles.onComplete)), t.inputStyles.onFocus && "function" == typeof t.inputStyles.onFocus && (t.inputStyles.__onFocusCallBackId__ = i.callbackId(t.inputStyles.onFocus)), t.inputStyles.onBlur && "function" == typeof t.inputStyles.onBlur && (t.inputStyles.__onBlurCallBackId__ = i.callbackId(t.inputStyles.onBlur))) : t && "richtext" == t.tag && t.richTextStyles && t.richTextStyles.onClick && "function" == typeof t.richTextStyles.onClick && (t.richTextStyles.__onClickCallBackId__ = i.callbackId(t.richTextStyles.onClick))
        }

        function c(i, c, u, l) {
            if (this.__view_array__ = new Array, t.NView.prototype.constructor.apply(this, [n]), this.id = null, c && c.name && (this.id = c.name), l)
                for (var _ in l) this[_] = l[_];
            !this.id && i && (this.id = c.name = i), o.platform == o.IOS && c && c.navigationbar && (this.__navigationbar__ = c.navigationbar);
            var f = [],
                d = null;
            if (c && (d = c.titleNView || c.navigationbar) && (d.uuid = "_Nav_Bar_" + this.__uuid__, f.push(d.uuid), e.nativeObj.__appendSubViewInfo(d), s(d.buttons), a(d.tags)), c && c.subNViews && c.subNViews instanceof Array) {
                for (var h = 0; h < c.subNViews.length; h++) {
                    var p = c.subNViews[h];
                    a(p.tags), p.uuid = o.UUID("Nativeview"), f.push(p.uuid), e.nativeObj.__appendSubViewInfo(p)
                }
                this.__subNViewsUids__ = f, this.checkJSObject = !0, setTimeout(function() {
                    this.checkJSObject = !1, e.nativeObj.__removeSubViewInfos(f)
                })
            }
            u || (t.__pushWindow__(this), t.exec(this, n, [i, c, this.__callback_id__, r(), l]))
        }
        var u = c.prototype;

        function l() {
            window.__needNotifyNative__ && "touchmove" == this.type && (window.__needNotifyNative__ = t.execSync(e.webview.currentWebview(), "needTouchEvent", [])), u.oldPreventDefault.call(this)
        }
        e.tools.extend(u, t.NView.prototype), u.constructor = c, u.show = function(e, n, o, r) {
            var s;
            o && "function" == typeof o && (s = i.callbackId(function() {
                o()
            })), t.exec(this, "show", [e, n, null, s, r])
        }, u.close = function(n, i, o) {
            this === e.webview.__JSON_Window_Stack[window.__HtMl_Id__] && e.bridge.callbackFromNative(this.__callback_id__, {
                status: e.bridge.OK,
                message: {
                    evt: "close"
                },
                keepCallback: !0
            }), t.exec(this, "close", [n, i, o])
        }, u.setStyle = function(e) {
            if (e && "object" == typeof e) {
                if (e) {
                    var n = e.titleNView || e.navigationbar;
                    n && (a(n.tags), s(n.buttons))
                }
                t.exec(this, "setOption", [e])
            }
        }, u.updateSubNViews = function(e) {
            if (e instanceof Array)
                for (var n, i = 0; i < e.length; i++)(n = e[i]) && a(n.tags);
            t.exec(this, "updateSubNViews", [e])
        }, u.nativeInstanceObject = function() {
            var t = e.ios || e.android;
            return t && t.getWebviewById ? t.getWebviewById(this.__uuid__) : null
        }, u.hide = function(e, n, i) {
            t.exec(this, "hide", [e, n, i])
        }, u.setVisible = function(e) {
            t.exec(this, "setVisible", [e])
        }, u.isVisible = function() {
            return t.execSync(this, "isVisible", [])
        }, u.setFixBottom = function(e) {
            t.exec(this, "setFixBottom", [e])
        }, u.getSubNViews = function() {
            var n = [],
                i = t.execSync(this, "getSubNViews", []);
            if (i && i instanceof Array && i.length > 0) {
                for (var o = 0; o < i.length; o++) {
                    var r = e.nativeObj.View.__getViewByUidAndCreate(i[o]);
                    n.push(r)
                }
                return n
            }
            if (this.checkJSObject && this.__subNViewsUids__)
                for (o = 0; o < this.__subNViewsUids__.length; o++) {
                    (r = e.nativeObj.View.__getViewByUidFromCache(this.__subNViewsUids__[o])) && n.push(r)
                }
            return n
        }, u.getNavigationbar = function() {
            return this.getTitleNView()
        }, u.getTitleNView = function() {
            var n;
            if (o.platform == o.IOS) {
                var i = "_Nav_Bar_" + this.__uuid__;
                !(n = e.nativeObj.View.getViewById(i)) && this.__navigationbar__ && ((n = new e.nativeObj.View(i, this.__navigationbar__, "", !0)).__uuid__ = i)
            } else {
                i = this.__uuid__;
                if (n = e.nativeObj.View.getViewById(i)) !n && this.__navigationbar__ && ((n = new e.nativeObj.View(i, this.__navigationbar__, "", !0)).__uuid__ = i);
                else {
                    var r = t.execSync(this, "getTitleNView", []);
                    r && ((n = new e.nativeObj.View(r.id, r.styles, !0)).__uuid__ = r.uuid)
                }
            }
            return n
        }, window.__needNotifyNative__ = !1, u.__needTouchEvent__ = function() {
            Event.prototype.preventDefault !== l && (u.oldPreventDefault = Event.prototype.preventDefault, Event.prototype.preventDefault = l)
        }, u.drag = function(n, o, r) {
            if (n && n.direction && "string" == typeof n.direction && n.moveMode && "string" == typeof n.moveMode) {
                var s = n.moveMode.toLocaleLowerCase();
                if ("followfinger" == s || "follow" == s || "silent" == s || "bounce" == s) {
                    var a = n.direction.toLocaleLowerCase();
                    if ("left" == a || "right" == a || "rtl" == a || "ltr" == a) {
                        if ("rtl" == a && (n.direction = "left"), "ltr" == a && (n.direction = "right"), o) {
                            var c = o.view;
                            if (null != c && ("string" == typeof c || c instanceof e.webview.Webview || c instanceof e.nativeObj.View) && ("string" != typeof c && (o.view = c.__uuid__), o.moveMode)) {
                                if ("string" != typeof o.moveMode) return;
                                var u = o.moveMode.toLocaleLowerCase();
                                if ("follow" != u && "silent" != u) return;
                                if ("silent" == s && "silent" == u) return
                            }
                        }
                        var l, _;
                        r && "function" == typeof r && (l = e.webview.currentWebview().__uuid__, _ = i.callbackId(r)), t.exec(this, "drag", [n, o, l, _])
                    }
                }
            }
        }, u.setJsFile = function(e, n) {
            e && "string" == typeof e && t.exec(this, "setPreloadJsFile", [e, n])
        }, u.appendJsFile = function(e) {
            e && "string" == typeof e && t.exec(this, "appendPreloadJsFile", [e])
        }, u.setContentVisible = function(e) {
            t.exec(this, "setContentVisible", [e])
        }, u.opener = function() {
            var n = t.execSync(this, "opener", []);
            return n ? e.webview._find__Window_By_UUID__(n.uuid, n.id, n.extras) : null
        }, u.opened = function() {
            var n = t.execSync(this, "opened", []);
            if (n) {
                for (var o = [], r = {}, s = 0; s < n.length; s++) {
                    var a = n[s],
                        c = e.webview.__JSON_Window_Stack[a];
                    c || ((c = new e.webview.Webview(null, null, !0, a.extras)).__uuid__ = a.uuid, c.id = a.id, i.exec("UI", "execMethod", ["UI", "setcallbackid", [c.__uuid__, [c.__callback_id__]]])), o.push(c), r[c.__uuid__] = c
                }
                return o
            }
        }, u.remove = function(i) {
            var o;
            if ("string" == typeof i) o = i;
            else {
                if (!(i instanceof e.webview.Webview)) return i instanceof e.nativeObj.View ? void t.exec(this, "removeNativeView", [n, i.__uuid__]) : void 0;
                o = i.__uuid__
            }
            t.exec(this, "remove", [o])
        }, u.removeFromParent = function() {
            t.exec(this, "removeFromParent", [])
        }, u.parent = function() {
            var n = t.execSync(this, "parent", []);
            return n ? e.webview._find__Window_By_UUID__(n.uuid, n.id, n.extras) : null
        }, u.children = function() {
            for (var n = [], i = t.execSync(this, "children", []), o = 0; o < i.length; o++) n.push(e.webview._find__Window_By_UUID__(i[o].uuid, i[o].id, i[o].extras));
            return n
        }, u.getURL = function() {
            return t.execSync(this, "getUrl", [])
        }, u.getTitle = function() {
            return t.execSync(this, "getTitle", [])
        }, u.getStyle = function() {
            return t.execSync(this, "getOption")
        }, u.loadURL = function(e, n) {
            e && "string" == typeof e && t.exec(this, "load", [e, r(), n])
        }, u.loadData = function(e, n) {
            e && "string" == typeof e && t.exec(this, "loadData", [e, n])
        }, u.stop = function() {
            t.exec(this, "stop", [])
        }, u.reload = function(e) {
            t.exec(this, "reload", [e])
        }, u.draw = function(e, n, r, s) {
            if (o.platform == o.IOS) e.__captureWebview ? e.__captureWebview(this.__uuid__, n, r) : "function" == typeof r && r({
                code: -1,
                message: "参数错误"
            });
            else {
                var a = function(e) {
                    "function" == typeof r && r(e)
                };
                if (e && e.__id__) {
                    var c = i.callbackId(function() {
                        "function" == typeof n && n()
                    }, a);
                    t.exec(this, "draw", [e.__id__, this.__uuid__, c, s])
                } else a({
                    code: -1,
                    message: "已经销毁的对象"
                })
            }
        }, u.checkRenderedContent = function(e, n, o) {
            var r = i.callbackId(function(e) {
                "function" == typeof n && n(e)
            }, function(e) {
                "function" == typeof o && o(e)
            });
            t.exec(this, "checkRenderedContent", [this.__uuid__, r, e])
        }, u.back = function() {
            t.exec(this, "back", [])
        }, u.forward = function() {
            t.exec(this, "forward", [])
        }, u.canBack = function(e) {
            var n;
            e && "function" == typeof e && (e && (n = i.callbackId(function(t) {
                var n = {};
                n.canBack = t, e(n)
            })), t.exec(this, "canBack", [n]))
        }, u.canForward = function(e) {
            var n;
            e && "function" == typeof e && (e && (n = i.callbackId(function(t) {
                var n = {};
                n.canForward = t, e(n)
            })), t.exec(this, "canForward", [n]))
        }, u.clear = function() {
            t.exec(this, "clear", [])
        }, u.evalJS = function(e) {
            e && "string" == typeof e && t.exec(this, "evalJS", [e])
        }, u.test = function() {
            t.exec(this, "test", [])
        }, u.append = function(i) {
            i && (i instanceof e.webview.Webview || i instanceof e.webview.WebviewGroup ? (this.__view_array__.push(i), t.exec(this, "append", [i.__IDENTITY__, i.__uuid__])) : i instanceof e.nativeObj.View ? t.exec(this, "appendNativeView", [i.IDENTITY || n, i.__uuid__]) : t.exec(this, "appendNativeView", [i.IDENTITY || n, i.__uuid__ || i.id || i._UUID_]))
        }, u.setPullToRefresh = function(n, i) {
            var o;
            i && (o = e.bridge.callbackId(i)), this.addEventListener("pulldownrefreshevent", i, !1), t.exec(this, "setPullToRefresh", [n, o])
        }, u.endPullToRefresh = function() {
            t.exec(this, "endPullToRefresh", [])
        }, u.beginPullToRefresh = function() {
            t.exec(this, "beginPullToRefresh", [])
        }, u.setBounce = function(e, n) {
            t.exec(this, "setBounce", [e, n])
        }, u.resetBounce = function() {
            t.exec(this, "resetBounce", [])
        }, u.setBlockNetworkImage = function(e) {
            t.exec(this, "setBlockNetworkImage", [e])
        }, u.captureSnapshot = function(n, i, o) {
            var r = "function" != typeof i ? null : function(e) {
                    i()
                },
                s = "function" != typeof o ? null : function(e) {
                    o(e)
                },
                a = e.bridge.callbackId(r, s);
            e.tools.platform == e.tools.IOS ? r() : t.exec(this, "captureSnapshot", [n, a])
        }, u.clearSnapshot = function(n) {
            e.tools.platform != e.tools.IOS && t.exec(this, "clearSnapshot", [n])
        }, u.overrideUrlLoading = function(e, n) {
            var o = i.callbackId(function(e) {
                "function" == typeof n && n(e)
            });
            t.exec(this, "overrideUrlLoading", [e, o])
        }, u.overrideResourceRequest = function(e) {
            t.exec(this, "overrideResourceRequest", [e])
        }, u.isHardwareAccelerated = function() {
            return o.platform != o.IOS && t.execSync(this, "isHardwareAccelerated", [])
        }, u.listenResourceLoading = function(e, n) {
            var o = i.callbackId(function(e) {
                "function" == typeof n && n(e)
            });
            t.exec(this, "listenResourceLoading", [e, o])
        }, u.setCssFile = function(e) {
            t.exec(this, "setCssFile", [e])
        }, u.setCssText = function(e) {
            t.exec(this, "setCssText", [e])
        }, u.showBehind = function(e) {
            t.exec(this, "showBehind", [e.__IDENTITY__, e.__uuid__])
        }, u.animate = function(e, n) {
            var r;
            o.platform != o.IOS ? (n && (r = i.callbackId(function() {
                "function" == typeof n && n()
            })), t.exec(this, "webview_animate", [e, r])) : setTimeout(n, 10)
        }, u.interceptTouchEvent = function(e) {
            t.exec(this, "interceptTouchEvent", [e])
        }, u.setFavoriteOptions = function(e) {
            t.exec(this, "setFavoriteOptions", [e])
        }, u.getFavoriteOptions = function() {
            return t.execSync(this, "getFavoriteOptions")
        }, u.setShareOptions = function(e) {
            t.exec(this, "setShareOptions", [e])
        }, u.getShareOptions = function() {
            return t.execSync(this, "getShareOptions")
        }, u.restore = function() {
            t.exec(this, "webview_restore", null)
        }, t.Webview = c
    }(window.plus),
    function(e) {
        var t = (e = e).bridge;

        function n() {
            this.id = "", this.description = "", this.authResult = null, this.userInfo = null
        }
        n.prototype.login = function(e, n, i) {
            var o = this,
                r = "function" != typeof e ? null : function(t) {
                    var n = {};
                    n.target = o, o.authResult = t.authResult, o.userInfo = t.userInfo, o.extra = t.extra, e(n)
                },
                s = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                a = t.callbackId(r, s);
            t.exec("OAuth", "login", [this.id, a, i], {
                cbid: a,
                sid: this.id
            })
        }, n.prototype.authorize = function(e, n, i) {
            var o = this,
                r = "function" != typeof e ? null : function(t) {
                    var n = {};
                    (n = t).target = o, e(n)
                },
                s = "function" != typeof n ? null : function(e) {
                    n(e)
                };
            if ("weixin" == o.id) {
                var a = t.callbackId(r, s);
                t.exec("OAuth", "authorize", [this.id, a, i], {
                    cbid: a,
                    sid: this.id
                })
            } else {
                n({
                    code: 10012,
                    message: "WeChat only"
                })
            }
        }, n.prototype.logout = function(e, n) {
            var i = this,
                o = "function" != typeof e ? null : function(t) {
                    var n = {};
                    i.authResult = null, i.userInfo = null, i.extra = t.extra, n.target = i, e(n)
                },
                r = "function" != typeof n ? null : function(e) {
                    n(e)
                };
            this.authResult = null, this.userInfo = null;
            var s = t.callbackId(o, r);
            t.exec("OAuth", "logout", [this.id, s], {
                cbid: s,
                sid: this.id
            })
        }, n.prototype.getUserInfo = function(e, n) {
            var i = this,
                o = "function" != typeof e ? null : function(t) {
                    var n = {};
                    i.authResult = t.authResult, i.userInfo = t.userInfo, i.extra = t.extra, n.target = i, e(n)
                },
                r = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                s = t.callbackId(o, r);
            t.exec("OAuth", "getUserInfo", [this.id, s], {
                cbid: s,
                sid: this.id
            })
        }, n.prototype.addPhoneNumber = function(e, n) {
            var i = this,
                o = "function" != typeof e ? null : function(t) {
                    var n = {};
                    i.authResult = t.authResult, i.userInfo = t.userInfo, i.extra = t.extra, n.target = i, e(n)
                },
                r = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                s = t.callbackId(o, r);
            t.exec("OAuth", "addPhoneNumber", [this.id, s], {
                cbid: s,
                sid: this.id
            })
        };
        var i = {
            AuthService: n,
            getServices: function(e, n) {
                var o = "function" != typeof e ? null : function(t) {
                        for (var n = [], o = t.length, r = 0; r < o; r++) {
                            var s = new i.AuthService;
                            s.id = t[r].id, s.description = t[r].description, s.authResult = t[r].authResult, s.userInfo = t[r].userInfo, n[r] = s
                        }
                        e(n)
                    },
                    r = "function" != typeof n ? null : function(e) {
                        n(e)
                    },
                    s = t.callbackId(o, r);
                t.exec("OAuth", "getServices", [s])
            }
        };
        e.oauth = i
    }(window.plus),
    function(e) {
        var t = "NativeObj",
            n = (e = e).bridge,
            i = e.tools,
            o = {},
            r = {},
            s = {};

        function a(e, o, s) {
            this.__id__ = i.UUID("Bitmap"), this.id = e, this.type = "bitmap", s || (r[this.__id__] = this, n.exec(t, "Bitmap", [this.__id__, e, o]))
        }

        function c(e) {
            if (e instanceof Array)
                for (var t, i = 0; i < e.length; i++)(t = e[i]) && "input" == t.tag ? t.inputStyles && (t.inputStyles.onComplete && "function" == typeof t.inputStyles.onComplete && (t.inputStyles.__onCompleteCallBackId__ = n.callbackId(t.inputStyles.onComplete)), t.inputStyles.onFocus && "function" == typeof t.inputStyles.onFocus && (t.inputStyles.__onFocusCallBackId__ = n.callbackId(t.inputStyles.onFocus)), t.inputStyles.onBlur && "function" == typeof t.inputStyles.onBlur && (t.inputStyles.__onBlurCallBackId__ = n.callbackId(t.inputStyles.onBlur))) : t && "richtext" == t.tag && t.richTextStyles && t.richTextStyles.onClick && "function" == typeof t.richTextStyles.onClick && (t.richTextStyles.__onClickCallBackId__ = n.callbackId(t.richTextStyles.onClick))
        }

        function u(e, r, s, a, u) {
            this.__id__ = e, this.id = e, this.__uuid__ = i.UUID("NativeView"), this.type = "nativeView", this.IDENTITY = t, a || (c(s), n.exec(t, "View", [this.__id__, this.__uuid__, r, s, u]), o[this.__uuid__] = this)
        }

        function l(e, t) {
            var n = null;
            for (var i in s) {
                var o = s[i];
                if (t) {
                    if (o.uid && o.uid == e || o.uuid && o.uuid == e) {
                        n = o;
                        break
                    }
                } else if (o.id == e) {
                    n = o;
                    break
                }
            }
            return n
        }

        function _(t) {
            var n = o[t.uuid];
            return n || ((n = t.type && "ImageSlider" == t.type ? new e.nativeObj.ImageSlider(t.id, t.styles, "", !0) : new e.nativeObj.View(t.id, t.styles, "", !0)).__uuid__ = t.uuid, o[n.__uuid__] = n), n
        }
        a.prototype.clear = function() {
            n.exec(t, "clear", [this.__id__]), this.__id__ = void 0, r[this.__id__] && delete r[this.__id__]
        }, a.prototype.recycle = function() {
            n.exec(t, "bitmapRecycle", [this.__id__])
        }, a.prototype.load = function(e, i, o) {
            var r = function(e) {
                "function" == typeof o && o(e)
            };
            if (this.__id__) {
                var s = n.callbackId(function() {
                    "function" == typeof i && i()
                }, r);
                n.exec(t, "load", [this.__id__, e, s])
            } else r({
                code: -1,
                message: "已经销毁的对象"
            })
        }, a.prototype.loadBase64Data = function(e, i, o) {
            var r = function(e) {
                "function" == typeof o && o(e)
            };
            if (this.__id__) {
                var s = n.callbackId(function() {
                    "function" == typeof i && i()
                }, r);
                n.exec(t, "loadBase64Data", [this.__id__, e, s])
            } else r({
                code: -1,
                message: "已经销毁的对象"
            })
        }, a.prototype.save = function(e, i, o, r) {
            var s = function(e) {
                "function" == typeof r && r(e)
            };
            if (this.__id__) {
                var a = n.callbackId(function(e) {
                    if ("function" == typeof o) {
                        var t = {
                            target: e.path,
                            width: e.w,
                            height: e.h,
                            size: e.size
                        };
                        o(t)
                    }
                }, s);
                n.exec(t, "save", [this.__id__, e, i, a])
            } else s({
                code: -1,
                message: "已经销毁的对象"
            })
        }, a.prototype.__captureWebview = function(e, i, o) {
            var r = function(e) {
                "function" == typeof o && o(e)
            };
            if (this.__id__) {
                var s = n.callbackId(function() {
                    "function" == typeof i && i()
                }, r);
                n.exec(t, "captureWebview", [this.__id__, e, s])
            } else r({
                code: -1,
                message: "已经销毁的对象"
            })
        }, a.prototype.toBase64Data = function() {
            return this.__id__ ? n.execSync(t, "toBase64Data", [this.__id__]) : null
        }, a.getItems = function() {
            for (var e = [], i = n.execSync(t, "getItems", []), o = 0; o < i.length; o++) {
                var s = i[o].__id__,
                    c = r[s];
                if (!c) {
                    var u = new a(i[o].id, null, !0);
                    u.__id__ = s, r[s] = u, c = u
                }
                e.push(c)
            }
            return e
        }, a.getBitmapById = function(e) {
            var i = n.execSync(t, "getBitmapById", [e]);
            if (i) {
                var o = r[i.__id__];
                if (!o) {
                    var s = new a(i.id, null, !0);
                    s.__id__ = i.__id__, r[i.__id__] = s, o = s
                }
                return o
            }
            return null
        }, u.prototype.setImages = function(e) {
            n.exec(t, "setImages", [this.__id__, this.__uuid__, e])
        }, u.prototype.currentImageIndex = function() {
            return n.execSync(t, "currentImageIndex", [this.__id__, this.__uuid__])
        }, u.prototype.addImages = function(e) {
            n.exec(t, "addImages", [this.__id__, this.__uuid__, e])
        }, u.prototype.drawBitmap = function(e, i, o, r) {
            n.exec(t, "drawBitmap", [this.__id__, this.__uuid__, e, i, o, r])
        }, u.prototype.drawText = function(e, i, o, r) {
            n.exec(t, "drawText", [this.__id__, this.__uuid__, e, i, o, r])
        }, u.prototype.drawRichText = function(e, i, o, r) {
            o && o.onClick && "function" == typeof o.onClick && (o.__onClickCallBackId__ = n.callbackId(o.onClick)), n.exec(t, "drawRichText", [this.__id__, this.__uuid__, e, i, o, r])
        }, u.prototype.drawInput = function(e, i, o) {
            i.onComplete && "function" == typeof i.onComplete && (i.__onCompleteCallBackId__ = n.callbackId(i.onComplete)), i.onFocus && "function" == typeof i.onFocus && (i.__onFocusCallBackId__ = n.callbackId(i.onFocus)), i.onBlur && "function" == typeof i.onBlur && (i.__onBlurCallBackId__ = n.callbackId(i.onBlur)), n.exec(t, "drawInput", [this.__id__, this.__uuid__, e, i, o])
        }, u.prototype.getInputValueById = function(e) {
            return n.execSync(t, "getInputValueById", [this.__id__, this.__uuid__, e])
        }, u.prototype.getInputFocusById = function(e) {
            return n.execSync(t, "getInputFocusById", [this.__id__, this.__uuid__, e])
        }, u.prototype.setInputFocusById = function(e, i) {
            n.exec(t, "setInputFocusById", [this.__id__, this.__uuid__, e, i])
        }, u.prototype.show = function() {
            n.exec(t, "show", [this.__id__, this.__uuid__])
        }, u.prototype.setStyle = function(e) {
            n.exec(t, "setStyle", [this.__id__, this.__uuid__, e])
        }, u.prototype.hide = function() {
            n.exec(t, "hide", [this.__id__, this.__uuid__])
        }, u.prototype.clear = function() {
            this.close()
        }, u.prototype.close = function() {
            n.exec(t, "view_close", [this.__id__, this.__uuid__]), delete o[this.__uuid__]
        }, u.prototype.animate = function(e, i) {
            var o;
            i && (o = n.callbackId(function() {
                "function" == typeof i && i()
            })), n.exec(t, "view_animate", [this.__id__, this.__uuid__, e, o])
        }, u.prototype.reset = function() {
            n.exec(t, "view_reset", [this.__id__, this.__uuid__])
        }, u.prototype.restore = function() {
            n.exec(t, "view_restore", [this.__id__, this.__uuid__])
        }, u.prototype.isVisible = function() {
            return n.execSync(t, "isVisible", [this.__id__, this.__uuid__])
        }, u.prototype.drawRect = function(e, i, o) {
            n.exec(t, "view_drawRect", [this.__id__, this.__uuid__, e, i, o])
        }, u.prototype.interceptTouchEvent = function(e) {
            n.exec(t, "interceptTouchEvent", [this.__id__, this.__uuid__, e])
        }, u.prototype.addEventListener = function(e, i) {
            var o, r = this;
            if (i) {
                var s = function(e) {
                    "function" == typeof i && (e.target = r, i(e))
                };
                i.callback = s, o = n.callbackId(s)
            }
            n.exec(t, "addEventListener", [this.__id__, this.__uuid__, e, o])
        }, u.prototype.setTouchEventRect = function(e) {
            n.exec(t, "setTouchEventRect", [this.__id__, this.__uuid__, e])
        }, u.getViewById = function(e) {
            var i = n.execSync(t, "getViewById", [e]);
            return i || (i = l(e, !1)), i ? _(i) : null
        }, u.__getViewByUidAndCreate = function(e) {
            return _(e)
        }, u.__getViewByUidFromCache = function(e) {
            var t = l(e, !0);
            return t ? _(t) : null
        }, u.startAnimation = function(e, i, o, r) {
            var s, a, c;
            e && i && (a = i instanceof u ? {
                viewId: i.__uuid__
            } : {
                uuid: i.bitmap ? i.bitmap.__id__ : null,
                texts: {
                    value: i.text,
                    textStyles: i.textStyles,
                    textRect: i.textRect
                }
            }, o && (c = o instanceof u ? {
                viewId: o.__uuid__
            } : {
                uuid: o.bitmap ? o.bitmap.__id__ : null,
                texts: {
                    value: o.text,
                    textStyles: o.textStyles,
                    textRect: o.textRect
                }
            }), r && (s = n.callbackId(function() {
                "function" == typeof r && r()
            })), n.exec(t, "startAnimation", [e, a, c, s]))
        }, u.clearAnimation = function(e) {
            e || (e = "none"), n.exec(t, "clearAnimation", [e])
        }, u.prototype.clearRect = function(e, i) {
            n.exec(t, "view_clearRect", [this.__id__, this.__uuid__, e, i])
        }, u.prototype.draw = function(e) {
            c(e), n.exec(t, "view_draw", [this.__id__, this.__uuid__, e])
        };
        var f = {
            Bitmap: a,
            View: u,
            ImageSlider: function(e, t, n, i) {
                var o = new u(e, t, n, i, "ImageSlider");
                return o.type = "ImageSlider", o
            },
            __createNView: function(t, n, i, r) {
                var s = new e.nativeObj.View(n, i, r);
                return s.__uuid__ = t, o[s.__uuid__] = s, s
            },
            __appendSubViewInfo: function(e) {
                s[e.uuid] = e
            },
            __removeSubViewInfos: function(e) {
                for (var t = 0; t < e.length; t++) delete s[e[t]]
            }
        };
        e.nativeObj = f
    }(plus),
    function(e) {
        e = e;
        var t = window.plus.bridge,
            n = e.tools;
        e.stream = {
            open: function(e, n, i) {
                var o = t.callbackId(n, i);
                t.exec("Stream", "open", [e, o])
            },
            setRestoreState: function(e) {
                t.exec("Stream", "setRestoreState", [e])
            },
            preload: function(e) {
                t.exec("Stream", "preload", [e])
            },
            list: function(e, n, i) {
                var o = t.callbackId(n, i);
                t.exec("Stream", "list", [e, o])
            },
            remove: function(e) {
                t.exec("Stream", "remove", [e])
            },
            freetrafficRequest: function(e, i, o) {
                if (n.platform != n.IOS) {
                    var r = t.callbackId(i, o);
                    t.exec("Stream", "freetrafficRequest", [e, r])
                } else "function" == typeof o && o({
                    code: -3,
                    message: "不支持"
                })
            },
            freetrafficBind: function(e, i, o) {
                if (n.platform != n.IOS) {
                    var r = t.callbackId(i, o);
                    t.exec("Stream", "freetrafficBind", [e, r])
                } else "function" == typeof o && o({
                    code: -3,
                    message: "不支持"
                })
            },
            freetrafficRelease: function(e, i, o) {
                if (n.platform != n.IOS) {
                    var r = t.callbackId(i, o);
                    t.exec("Stream", "freetrafficRelease", [e, r])
                } else "function" == typeof o && o({
                    code: -3,
                    message: "不支持"
                })
            },
            freetrafficInfo: function(e, i) {
                if (n.platform != n.IOS) {
                    var o = t.callbackId(e, i);
                    t.exec("Stream", "freetrafficInfo", [o])
                } else "function" == typeof i && i({
                    code: -3,
                    message: "不支持"
                })
            },
            freetrafficIsValid: function() {
                if (n.platform != n.IOS) return t.exec("Stream", "freetrafficIsValid", null);
                "function" == typeof errorCallback && errorCallback({
                    code: -3,
                    message: "不支持"
                })
            },
            activate: function() {
                n.platform != n.IOS ? t.exec("Stream", "activate", null) : "function" == typeof errorCallback && errorCallback({
                    code: -3,
                    message: "不支持"
                })
            }
        }
    }(window.plus),
    function(e) {
        var t = (e = e).bridge;
        e.device = {
            imei: "",
            imsi: [],
            model: "",
            vendor: "",
            uuid: "",
            dial: function(e, n) {
                t.exec("Device", "dial", [e, n])
            },
            beep: function(e) {
                t.exec("Device", "beep", [e])
            },
            vibrate: function(e) {
                t.exec("Device", "vibrate", [e])
            },
            setWakelock: function(e) {
                t.execSync("Device", "setWakelock", [e])
            },
            isWakelock: function() {
                return t.execSync("Device", "isWakelock", [])
            },
            setVolume: function(e) {
                t.execSync("Device", "setVolume", [e])
            },
            getVolume: function() {
                return t.execSync("Device", "getVolume", [])
            }
        }, e.os = {
            language: "",
            version: "",
            name: "",
            vendor: ""
        }, e.screen = {
            resolutionHeight: 0,
            resolutionWidth: 0,
            scale: 1,
            dpiX: 0,
            dpiY: 0,
            setBrightness: function(e) {
                t.execSync("Device", "setBrightness", [e])
            },
            lockOrientation: function(e) {
                t.exec("Device", "lockOrientation", [e])
            },
            unlockOrientation: function() {
                t.exec("Device", "unlockOrientation", [])
            },
            getBrightness: function() {
                return t.execSync("Device", "getBrightness", [])
            }
        }, e.display = {
            resolutionHeight: 0,
            resolutionWidth: 0
        }, e.networkinfo = {
            getCurrentType: function() {
                return e.tools.IOS == e.tools.platform ? e.networkinfo.CONNECTION_TYPE : e.tools.ANDROID == e.tools.platform ? t.execSync("Device", "getCurrentType", null) : void 0
            },
            getCurrentAPN: function() {
                return t.execSync("Device", "getCurrentAPN", null)
            }
        }, e.networkinfo.CONNECTION_TYPE = 0, e.networkinfo.CONNECTION_UNKNOW = 0, e.networkinfo.CONNECTION_NONE = 1, e.networkinfo.CONNECTION_ETHERNET = 2, e.networkinfo.CONNECTION_WIFI = 3, e.networkinfo.CONNECTION_CELL2G = 4, e.networkinfo.CONNECTION_CELL3G = 5, e.networkinfo.CONNECTION_CELL4G = 6
    }(window.plus),
    function(e) {
        var t = (e = e).bridge;
        e.fingerprint = {
            isSupport: function() {
                return t.execSync("fingerprint", "isSupport")
            },
            isEnrolledFingerprints: function() {
                return t.execSync("fingerprint", "isEnrolledFingerprints")
            },
            isKeyguardSecure: function() {
                return t.execSync("fingerprint", "isKeyguardSecure")
            },
            authenticate: function(e, n, i) {
                var o = "function" != typeof e ? null : function(t) {
                        e(t)
                    },
                    r = "function" != typeof n ? null : function(e) {
                        n(new function(e, t) {
                            this.code = e, this.message = t, this.UNSUPPORT = 1, this.KEYGUARD_INSECURE = 2, this.FINGERPRINT_UNENROLLED = 3, this.AUTHENTICATE_MISMATCH = 4, this.AUTHENTICATE_OVERLIMIT = 5, this.CANCEL = 6, this.UNKNOWN_ERROR = 7
                        }(e.code, e.message))
                    };
                callbackID = t.callbackId(o, r), t.exec("fingerprint", "authenticate", [callbackID, i])
            },
            cancel: function() {
                return t.exec("fingerprint", "cancel")
            }
        }
    }(window.plus), __Media_Live__Push__ = function() {
        var e = [];
        return {
            pushCallback_LivePush: function(t, n, i, o, r) {
                e[r] = {
                    fun: n,
                    nokeep: i,
                    pushobj: o
                }
            },
            execCallback_LivePush: function(t, n, i) {
                if (e[i]) {
                    var o = {};
                    o.type = t, o.target = e[i].pushobj, o.detail = n, e[i].fun && e[i].fun(o)
                }
            }
        }
    }(),
    function(e) {
        var t = (e = e).bridge,
            n = "VideoPlayer",
            i = "LivePusher",
            o = e.tools,
            r = {},
            s = {};

        function a(e) {
            return o.getElementOffsetXInWebview(e)
        }

        function c(e) {
            return o.getElementOffsetYInWebview(e)
        }

        function u(i, r, s, u) {
            this.id = o.UUID("dt"), this.IDENTITY = n, this.userId = s, div = document.getElementById(i);
            var l = this.id;
            if (!u) {
                var _ = [];
                div && (e.tools.platform == e.tools.ANDROID ? document.addEventListener("plusorientationchange", function() {
                    setTimeout(function() {
                        var e = [a(div), c(div), div.offsetWidth, div.offsetHeight];
                        t.exec(n, "resize", [l, e])
                    }, 200)
                }, !1) : div.addEventListener("resize", function() {
                    var e = [a(div), c(div), div.offsetWidth, div.offsetHeight];
                    t.exec(n, "resize", [l, e])
                }, !1), _ = [a(div), c(div), div.offsetWidth, div.offsetHeight]), t.exec(n, "VideoPlayer", [this.id, _, r, s])
            }
        }
        var l = u.prototype;

        function _(n, o, r, s) {
            this.IDENTITY = "LivePusher", this.id = r, this.__uuid__ = e.tools.UUID("LivePusher"), this.options = o, this.onCapture = null, me = this;
            var u = null;
            null != r && null != r || (this.id = this.__uuid__);
            var l = document.getElementById(n);
            null != l && null != l && (e.tools.ANDROID == e.tools.platform ? window.onresize = function() {
                var e = document.getElementById(n),
                    o = [a(e), c(e), e.offsetWidth, e.offsetHeight];
                t.exec(i, "resize", [me.__uuid__, o])
            } : e.tools.IOS == e.tools.platform && l.addEventListener("resize", function() {
                var e = [a(l), c(l), l.offsetWidth, l.offsetHeight];
                t.exec(i, "resize", [me.__uuid__, e])
            }, !1), u = [a(l), c(l), l.offsetWidth, l.offsetHeight]);
            var _ = !0;
            null == s || null == s || s || (_ = !1), _ && t.exec(i, "LivePusher", [this.__uuid__, this.id, u, o])
        }
        l.play = function() {
            t.exec(n, "VideoPlayer_play", [this.id])
        }, l.pause = function() {
            t.exec(n, "VideoPlayer_pause", [this.id])
        }, l.stop = function() {
            t.exec(n, "VideoPlayer_stop", [this.id])
        }, l.close = function() {
            t.exec(n, "VideoPlayer_close", [this.id])
        }, l.sendDanmu = function(e) {
            t.exec(n, "VideoPlayer_sendDanmu", [this.id, e])
        }, l.seek = function(e) {
            t.exec(n, "VideoPlayer_seek", [this.id, e])
        }, l.playbackRate = function(e) {
            t.exec(n, "VideoPlayer_playbackRate", [this.id, e])
        }, l.requestFullScreen = function(e) {
            t.exec(n, "VideoPlayer_requestFullScreen", [this.id, e])
        }, l.exitFullScreen = function() {
            t.exec(n, "VideoPlayer_exitFullScreen", [this.id])
        }, l.hide = function() {
            t.exec(n, "VideoPlayer_hide", [this.id])
        }, l.show = function() {
            t.exec(n, "VideoPlayer_show", [this.id])
        }, l.setOptions = function(e) {
            t.exec(n, "VideoPlayer_setOptions", [this.id, e])
        }, l.setStyles = l.setOptions, l.addEventListener = function(e, i) {
            var o, r = this;
            if (i) {
                var s = function(e) {
                    "function" == typeof i && (e.target = r, i(e))
                };
                i.callback = s, o = t.callbackId(s)
            }
            t.exec(n, "VideoPlayer_addEventListener", [this.id, e, o, window.__HtMl_Id__])
        };
        var f = _.prototype;

        function d(i, o) {
            o && o.onCapture && "function" == typeof o.onCapture && (o.__onCaptureCallbackId__ = t.callbackId(o.onCapture));
            var r = document.getElementById(i);
            e.tools.ANDROID == e.tools.platform ? window.onresize = function() {
                var e = document.getElementById(i),
                    o = [a(e), c(e), e.offsetWidth, e.offsetHeight];
                t.exec(n, "resize", o)
            } : e.tools.IOS == e.tools.platform && r.addEventListener("resize", function() {
                var e = [a(r), c(r), r.offsetWidth, r.offsetHeight];
                t.exec(n, "resize", e)
            }, !1);
            var s = [r.offsetLeft, r.offsetTop, r.offsetWidth, r.offsetHeight];
            t.exec(n, "VideoCapture", [s, o])
        }
        f.start = function(e, n) {
            var o = "function" != typeof e ? null : function(t) {
                    e()
                },
                r = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                s = t.callbackId(o, r);
            t.exec(i, "start", [this.__uuid__, s])
        }, f.preview = function() {
            t.exec(i, "preview", [this.__uuid__])
        }, f.stop = function(e) {
            t.exec(i, "stop", [this.__uuid__, e])
        }, f.pause = function() {
            t.exec(i, "pause", [this.__uuid__])
        }, f.close = function() {
            t.exec(i, "close", [this.__uuid__])
        }, f.resume = function() {
            t.exec(i, "resume", [this.__uuid__])
        }, f.close = function() {
            t.exec(i, "close", [this.__uuid__])
        }, f.setStyles = function(e) {
            t.exec(i, "setOptions", [this.__uuid__], e)
        }, f.setOptions = function(e) {
            t.exec(i, "setOptions", [this.__uuid__], e)
        }, f.switchCamera = function(e) {
            t.exec(i, "switchCamera", [this.__uuid__])
        }, f.addEventListener = function(e, n, o) {
            var r, s = this;
            if (n) {
                var a = function(e) {
                    "function" == typeof callback && (e.target = s, n(e))
                };
                n.listener = a, r = t.callbackId(a)
            }
            __Media_Live__Push__.pushCallback_LivePush(e, n, o, this, r), t.exec(i, "addEventListener", [this.__uuid__, window.__HtMl_Id__, e, r])
        }, f.snapshot = function(e, n) {
            var o = "function" != typeof e ? null : function(t) {
                    e(t)
                },
                r = "function" != typeof n ? null : function(e) {
                    n(e)
                },
                s = t.callbackId(o, r);
            t.exec(i, "snapshot", [this.__uuid__, s])
        };
        var h = d.prototype;

        function p(e, i) {
            i && i.video && (i.video.onCaptionChanged && "function" == typeof i.video.onCaptionChanged && (i.video.__onCaptionChangedCallbackId__ = t.callbackId(i.onCapture)), i.video.onWatermarkChanged && "function" == typeof i.video.onWatermarkChanged && (i.video.__onWatermarkChangedCallbackId__ = t.callbackId(i.onCapture))), div = document.getElementById(e), div.addEventListener("resize", function() {
                var e = [div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight];
                t.exec(_BARCODE, "resize", [e])
            }, !1);
            var o = [div.offsetLeft, div.offsetTop, div.offsetWidth, div.offsetHeight];
            t.exec(n, "VideoEditor", [o, i])
        }
        h.setFilter = function(e) {
            t.exec(n, "VideoCapture_setFilter", [e])
        }, h.setFacing = function(e) {
            t.exec(n, "VideoCapture_setFacing", [e])
        }, h.setResolution = function(e) {
            t.exec(n, "VideoCapture_setResolution", [e])
        }, h.start = function() {
            t.exec(n, "VideoCapture_start", [])
        }, h.stop = function() {
            t.exec(n, "VideoCapture_stop", [])
        }, h.getSupportedResolutions = function() {
            return t.execSync(n, "VideoCapture_getSupportedResolutions", [])
        }, h.close = function() {
            t.exec(n, "VideoCapture_close", []), this.isClose = !0
        };
        var v = p.prototype;
        v.setCaption = function(e, i) {
            t.exec(n, "VideoEditor_setCaption", [e, i])
        }, v.setWatermark = function(e, i) {
            t.exec(n, "VideoEditor_setWatermark", [e, i])
        }, v.setIndex = function(e) {
            t.exec(n, "VideoEditor_setIndex", [e])
        }, v.play = function() {
            t.exec(n, "VideoEditor_play", [])
        }, v.pause = function() {
            t.exec(n, "VideoEditor_pause", [])
        }, v.close = function() {
            t.exec(n, "VideoEditor_close", []), this.isClose = !0
        };
        var y = {
            VideoPlayer: u,
            createVideoPlayer: function(e, t) {
                var n = new u(null, t, e);
                return s[n.id] = n, s[n.id]
            },
            getVideoPlayerById: function(i) {
                if (i && "string" == typeof i) {
                    var o = t.execSync(n, "getVideoPlayerById", [i]);
                    if (null != o && null != o.uid) {
                        if (s[o.uid]) return s[o.uid];
                        if (null != o && null != o) {
                            var r = new e.video.VideoPlayer(null, null, o.name, !0);
                            return r.id = o.uid, s[o.uid] = r, r
                        }
                        return null
                    }
                }
            },
            createLivePusher: function(t, n, i) {
                var o = !0;
                null == i || null == i || i || (o = !1);
                var s = new e.video.LivePusher(null, n, t, o);
                return r[s.__uuid__] = s, r[s.__uuid__]
            },
            getLivePusherById: function(n) {
                if (n && "string" == typeof n) {
                    var o = t.execSync(i, "getLivePusherById", [n]);
                    if (null != o && null != o && o.uuid) {
                        if (r[o.uuid]) return r[o.uuid];
                        var s = new e.video.LivePusher(null, null, n, !1);
                        return s.__uuid__ = o.uuid, r[o.uuid] = s, s
                    }
                    return null
                }
            },
            VideoCapture: d,
            VideoEditor: p,
            LivePusher: _,
            getSupportedResolutions: function() {
                return t.execSync(n, "getSupportedResolutions", [])
            },
            getVideoInfo: function(e, i) {
                var o = null;
                i && "function" == typeof i && (o = t.callbackId(i)), t.exec(n, "getVideoInfo", [e, o])
            }
        };
        e.video = y
    }(window.plus),
    function(e) {
        var t = (e = e).bridge,
            n = "ShortVideo",
            i = e.tools;

        function o(e) {
            return i.getElementOffsetXInWebview(e)
        }

        function r(e) {
            return i.getElementOffsetYInWebview(e)
        }

        function s(s, a) {
            this.id = i.UUID("dt"), this.IDENTITY = n, div = document.getElementById(s);
            var c = this.id,
                u = [];
            div && (e.tools.platform == e.tools.ANDROID ? document.addEventListener("plusorientationchange", function() {
                setTimeout(function() {
                    var e = [o(div), r(div), div.offsetWidth, div.offsetHeight];
                    t.exec(n, "resize", [c, e])
                }, 200)
            }, !1) : div.addEventListener("resize", function() {
                var e = [o(div), r(div), div.offsetWidth, div.offsetHeight];
                t.exec(n, "resize", [c, e])
            }, !1), u = [o(div), r(div), div.offsetWidth, div.offsetHeight]), t.exec(n, "ShortVideo", [this.id, u, a])
        }
        var a = s.prototype;

        function c(s, a) {
            this.id = i.UUID("dt"), this.IDENTITY = n, div = document.getElementById(s);
            var c = [],
                u = this.id;
            div && (e.tools.platform == e.tools.ANDROID ? document.addEventListener("plusorientationchange", function() {
                setTimeout(function() {
                    var e = [o(div), r(div), div.offsetWidth, div.offsetHeight];
                    t.exec(n, "shortVideoEditor_resize", [u, e])
                }, 200)
            }, !1) : div.addEventListener("resize", function() {
                var e = [o(div), r(div), div.offsetWidth, div.offsetHeight];
                t.exec(n, "shortVideoEditor_resize", [u, e])
            }, !1), c = [o(div), r(div), div.offsetWidth, div.offsetHeight]), t.exec(n, "ShortVideoEditor", [this.id, c, a])
        }
        a.start = function(e) {
            t.exec(n, "ShortVideo_start", [this.id, e])
        }, a.pause = function() {
            t.exec(n, "ShortVideo_pause", [this.id])
        }, a.resume = function() {
            t.exec(n, "ShortVideo_resume", [this.id])
        }, a.stop = function() {
            t.exec(n, "ShortVideo_stop", [this.id])
        }, a.close = function() {
            t.exec(n, "ShortVideo_close", [this.id])
        }, a.switchCamera = function(e) {
            t.exec(n, "ShortVideo_switchCamera", [this.id, e])
        }, a.setStyles = function(e) {
            t.exec(n, "ShortVideo_setStyles", [this.id, e])
        }, a.startMixAudio = function(e) {
            t.exec(n, "ShortVideo_startMixAudio", [this.id, e])
        }, a.pauseMixAudio = function() {
            t.exec(n, "ShortVideo_pauseMixAudio", [this.id])
        }, a.resumeMixAudio = function() {
            t.exec(n, "ShortVideo_resumeMixAudio", [this.id])
        }, a.stopMixAudio = function() {
            t.exec(n, "ShortVideo_stopMixAudio", [this.id])
        }, a.addEventListener = function(e, i) {
            var o, r = this;
            if (i) {
                var s = function(e) {
                    "function" == typeof i && (e.target = r, i(e))
                };
                i.callback = s, o = t.callbackId(s)
            }
            t.exec(n, "ShortVideo_addEventListener", [this.id, e, o])
        };
        var u = c.prototype;
        u.play = function() {
            t.exec(n, "shortVideoEditor_play", [this.id])
        }, u.pause = function() {
            t.exec(n, "shortVideoEditor_pause", [this.id])
        }, u.resume = function() {
            t.exec(n, "shortVideoEditor_resume", [this.id])
        }, u.stop = function() {
            t.exec(n, "shortVideoEditor_stop", [this.id])
        }, u.close = function() {
            t.exec(n, "shortVideoEditor_close", [this.id])
        }, u.setStyles = function(e) {
            t.exec(n, "shortVideoEditor_setStyles", [this.id, e])
        }, u.save = function(e, i, o) {
            var r = "function" != typeof i ? null : function(e) {
                    i(e)
                },
                s = "function" != typeof o ? null : function(e) {
                    o(e)
                },
                a = t.callbackId(r, s);
            t.exec(n, "shortVideoEditor_save", [this.id, e, a])
        }, u.addEventListener = function(e, i) {
            var o, r = this;
            if (i) {
                var s = function(e) {
                    "function" == typeof i && (e.target = r, i(e))
                };
                i.callback = s, o = t.callbackId(s)
            }
            t.exec(n, "shortVideoEditor_addEventListener", [this.id, e, o])
        };
        var l = {
            Camera: s,
            Editor: c,
            upload: function(e, i, o) {
                var r = "function" != typeof i ? null : function(e) {
                        i(e)
                    },
                    s = "function" != typeof o ? null : function(e) {
                        o(e)
                    },
                    a = t.callbackId(r, s);
                t.exec(n, "uploader", [e, a])
            }
        };
        e.shortvideo = l
    }(window.plus),
    function(e) {
        var t = e.bridge,
            n = {
                startBeaconDiscovery: function(e) {
                    if ("object" == typeof e) {
                        var n = "function" != typeof e.complete ? function() {} : e.complete,
                            i = "function" != typeof e.success ? n : function(t) {
                                e.success(t), n(t)
                            },
                            o = "function" != typeof e.fail ? n : function(t) {
                                e.fail(t), n(t)
                            };
                        return callbackID = t.callbackId(i, o), t.exec("Beacon", "startBeaconDiscovery", [callbackID, e.uuids])
                    }
                },
                stopBeaconDiscovery: function(e) {
                    var n = "function" != typeof e.complete ? function() {} : e.complete,
                        i = "function" != typeof e.success ? n : function(t) {
                            e.success(t), n(t)
                        },
                        o = "function" != typeof e.fail ? n : function(t) {
                            e.fail(t), n(t)
                        };
                    return callbackID = t.callbackId(i, o), t.exec("Beacon", "stopBeaconDiscovery", [callbackID])
                },
                getBeacons: function(e) {
                    var n = "function" != typeof e.complete ? function() {} : e.complete,
                        i = "function" != typeof e.success ? n : function(t) {
                            e.success(t), n(t)
                        },
                        o = "function" != typeof e.fail ? n : function(t) {
                            e.fail(t), n(t)
                        };
                    return callbackID = t.callbackId(i, o), t.exec("Beacon", "getBeacons", [callbackID])
                },
                onBeaconUpdate: function(e) {
                    var n = "function" != typeof e ? null : e;
                    return callbackID = t.callbackId(n), t.exec("Beacon", "onBeaconUpdate", [callbackID])
                },
                onBeaconServiceChange: function(e) {
                    var n = "function" != typeof e ? null : e;
                    return callbackID = t.callbackId(n), t.execSync("Beacon", "onBeaconServiceChange", [callbackID])
                }
            };
        e.ibeacon = n
    }(window.plus);