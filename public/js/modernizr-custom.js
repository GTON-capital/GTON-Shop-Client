/*! modernizr 3.9.1 (Custom Build) | MIT *
 * https://new.modernizr.com/download/?-flexgap-setclasses !*/
!(function(e, n, o) {
  function s(e, n) {
    return typeof e === n;
  }
  function a() {
    return 'function' != typeof n.createElement
      ? n.createElement(arguments[0])
      : f
      ? n.createElementNS.call(n, 'http://www.w3.org/2000/svg', arguments[0])
      : n.createElement.apply(n, arguments);
  }
  var t = [],
    i = [],
    l = {
      _version: '3.9.1',
      _config: {
        classPrefix: '',
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function(e, n) {
        var o = this;
        setTimeout(function() {
          n(o[e]);
        }, 0);
      },
      addTest: function(e, n, o) {
        i.push({ name: e, fn: n, options: o });
      },
      addAsyncTest: function(e) {
        i.push({ name: null, fn: e });
      },
    },
    Modernizr = function() {};
  (Modernizr.prototype = l), (Modernizr = new Modernizr());
  var r = n.documentElement,
    f = 'svg' === r.nodeName.toLowerCase();
  Modernizr.addTest('flexgap', function() {
    var e = a('div');
    (e.style.display = 'flex'),
      (e.style.flexDirection = 'column'),
      (e.style.rowGap = '1px'),
      e.appendChild(a('div')),
      e.appendChild(a('div')),
      r.appendChild(e);
    var n = 1 === e.scrollHeight;
    return e.parentNode.removeChild(e), n;
  }),
    (function() {
      var e, n, o, a, l, r, f;
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          if (
            ((e = []),
            (n = i[c]),
            n.name &&
              (e.push(n.name.toLowerCase()),
              n.options && n.options.aliases && n.options.aliases.length))
          )
            for (o = 0; o < n.options.aliases.length; o++)
              e.push(n.options.aliases[o].toLowerCase());
          for (
            a = s(n.fn, 'function') ? n.fn() : n.fn, l = 0;
            l < e.length;
            l++
          )
            (r = e[l]),
              (f = r.split('.')),
              1 === f.length
                ? (Modernizr[f[0]] = a)
                : ((Modernizr[f[0]] &&
                    (!Modernizr[f[0]] || Modernizr[f[0]] instanceof Boolean)) ||
                    (Modernizr[f[0]] = new Boolean(Modernizr[f[0]])),
                  (Modernizr[f[0]][f[1]] = a)),
              t.push((a ? '' : 'no-') + f.join('-'));
        }
    })(),
    (function(e) {
      var n = r.className,
        o = Modernizr._config.classPrefix || '';
      if ((f && (n = n.baseVal), Modernizr._config.enableJSClass)) {
        var s = new RegExp('(^|\\s)' + o + 'no-js(\\s|$)');
        n = n.replace(s, '$1' + o + 'js$2');
      }
      Modernizr._config.enableClasses &&
        (e.length > 0 && (n += ' ' + o + e.join(' ' + o)),
        f ? (r.className.baseVal = n) : (r.className = n));
    })(t),
    delete l.addTest,
    delete l.addAsyncTest;
  for (var c = 0; c < Modernizr._q.length; c++) Modernizr._q[c]();
  e.Modernizr = Modernizr;
})(window, document);
