!function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, true) : function (a) {
	  if (!a.document) throw new Error("jQuery requires a window with a document");
	  return b(a);
	} : b(a);
  }("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "1.12.4", n = function (a, b) {
	  return new n.fn.init(a, b);
	}, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi;
	n.fn = n.prototype = {jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
	  return e.call(this);
	}, get: function (a) {
	  return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
	}, pushStack: function (a) {
	  var b = n.merge(this.constructor(), a);
	  return b.prevObject = this, b.context = this.context, b;
	}, each: function (a) {
	  return n.each(this, a);
	}, map: function (a) {
	  return this.pushStack(n.map(this, function (b, c) {
		return a.call(b, c, b);
	  }));
	}, slice: function () {
	  return this.pushStack(e.apply(this, arguments));
	}, first: function () {
	  return this.eq(0);
	}, last: function () {
	  return this.eq(-1);
	}, eq: function (a) {
	  var b = this.length, c = +a + (0 > a ? b : 0);
	  return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	}, end: function () {
	  return this.prevObject || this.constructor();
	}, push: g, sort: c.sort, splice: c.splice}, n.extend = n.fn.extend = function () {
	  var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = false;
	  for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = false, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
	  return g;
	}, n.extend({expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: true, error: function (a) {
	  throw new Error(a);
	}, noop: function () {}, isFunction: function (a) {
	  return "function" === n.type(a);
	}, isArray: Array.isArray || function (a) {
	  return "array" === n.type(a);
	}, isWindow: function (a) {
	  return null != a && a == a.window;
	}, isNumeric: function (a) {
	  var b = a && a.toString();
	  return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
	}, isEmptyObject: function (a) {
	  var b;
	  for (b in a) return false;
	  return true;
	}, isPlainObject: function (a) {
	  var b;
	  if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return false;
	  try {
		if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return false;
	  } catch (c) {
		return false;
	  }
	  if (!l.ownFirst) for (b in a) return k.call(a, b);
	  for (b in a) ;
	  return void 0 === b || k.call(a, b);
	}, type: function (a) {
	  return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
	}, globalEval: function (b) {
	  b && n.trim(b) && (a.execScript || function (b) {
		a.eval.call(a, b);
	  })(b);
	}, camelCase: function (a) {
	  return a.replace(p, "ms-").replace(q, r);
	}, nodeName: function (a, b) {
	  return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	}, each: function (a, b) {
	  var c, d = 0;
	  if (s(a)) {
		for (c = a.length; c > d; d++) if (b.call(a[d], d, a[d]) === false) break;
	  } else for (d in a) if (b.call(a[d], d, a[d]) === false) break;
	  return a;
	}, trim: function (a) {
	  return null == a ? "" : (a + "").replace(o, "");
	}, makeArray: function (a, b) {
	  var c = b || [];
	  return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
	}, inArray: function (a, b, c) {
	  var d;
	  if (b) {
		if (h) return h.call(b, a, c);
		for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
	  }
	  return -1;
	}, merge: function (a, b) {
	  var c = +b.length, d = 0, e = a.length;
	  while (c > d) a[e++] = b[d++];
	  if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
	  return a.length = e, a;
	}, grep: function (a, b, c) {
	  for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
	  return e;
	}, map: function (a, b, c) {
	  var d, e, g = 0, h = [];
	  if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
	  return f.apply([], h);
	}, guid: 1, proxy: function (a, b) {
	  var c, d, f;
	  return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function () {
		return a.apply(b || this, c.concat(e.call(arguments)));
	  }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
	}, now: function () {
	  return +new Date;
	}, support: l}), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
	  i["[object " + b + "]"] = b.toLowerCase();
	});
	function s(a) {
	  var b = !!a && "length" in a && a.length, c = n.type(a);
	  return "function" === c || n.isWindow(a) ? false : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}
	var t = function (a) {
	  var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), C = -2147483648, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
		for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
		return -1;
	  }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")}, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
		var d = "0x" + b - 65536;
		return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	  }, da = function () {
		m();
	  };
	  try {
		H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	  } catch (ea) {
		H = {apply: E.length ? function (a, b) {
		  G.apply(a, I.call(b));
		} : function (a, b) {
		  var c = a.length, d = 0;
		  while (a[c++] = b[d++]) ;
		  a.length = c - 1;
		}};
	  }
	  function fa(a, b, d, e) {
		var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
		if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
		if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
		  if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
			if (9 === x) {
			  if (!(j = b.getElementById(f))) return d;
			  if (j.id === f) return d.push(j), d;
			} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
		  } else {
			if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
			if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
		  }
		  if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
			if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
			  (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
			  while (h--) r[h] = l + " " + false;
			  s = r.join(","), w = _.test(a) && (b.parentNode && "undefined" != typeof b.parentNode.getElementsByTagName && b.parentNode) || b;
			}
			if (s) try {
			  return H.apply(d, w.querySelectorAll(s)), d;
			} catch (y) {} finally {
			  k === u && b.removeAttribute("id");
			}
		  }
		}
		return i(a.replace(Q, "$1"), b, d, e);
	  }
	  function ga() {
		var a = [];
		return b;
	  }
	  function ia(a) {
		var b = n.createElement("div");
		try {
		  return !!a(b);
		} catch (c) {
		  return false;
		} finally {
		  b.parentNode && b.parentNode.removeChild(b), b = null;
		}
	  }
	  function ja(a, b) {
		var c = a.split("|"), e = c.length;
		while (e--) d.attrHandle[c[e]] = b;
	  }
	  function ka(a, b) {
		var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
		if (d) return d;
		if (c) while (c = c.nextSibling) if (c === b) return -1;
		return a ? 1 : -1;
	  }
	  function la(a) {
		return function (b) {
		  var c = b.nodeName.toLowerCase();
		  return "input" === c && b.type === a;
		};
	  }
	  function ma(a) {
		return function (b) {
		  var c = b.nodeName.toLowerCase();
		  return ("input" === c || "button" === c) && b.type === a;
		};
	  }
	  function na(a) {
		return function (b) {
		  return b = +b, (function (c, d) {
			var e, f = a([], c.length, b), g = f.length;
			while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
		  }[u] = true, function (c, d) {
			var e, f = a([], c.length, b), g = f.length;
			while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
		  });
		}[u] = true, function (b) {
		  return b = +b, (function (c, d) {
			var e, f = a([], c.length, b), g = f.length;
			while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
		  }[u] = true, function (c, d) {
			var e, f = a([], c.length, b), g = f.length;
			while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
		  });
		};
	  }
	  c = fa.support = {}, f = fa.isXML = function (a) {
		var b = a && (a.ownerDocument || a).documentElement;
		return b ? "HTML" !== b.nodeName : false;
	  }, m = fa.setDocument = function (a) {
		var b, e, g = a ? a.ownerDocument || a : v;
		return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, false) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
		  return a.className = "i", !a.getAttribute("className");
		}), c.getElementsByTagName = ia(function (a) {
		  return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
		}), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
		  return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
		}), c.getById ? (d.find.ID = function (a, b) {
		  if ("undefined" != typeof b.getElementById && p) {
			var c = b.getElementById(a);
			return c ? [c] : [];
		  }
		}, d.filter.ID = function (a) {
		  var b = a.replace(ba, ca);
		  return function (a) {
			return a.getAttribute("id") === b;
		  };
		}) : (delete d.find.ID, d.filter.ID = function (a) {
		  var b = a.replace(ba, ca);
		  return function (a) {
			var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
			return c && c.value === b;
		  };
		}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
		  return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
		} : function (a, b) {
		  var c, d = [], e = 0, f = b.getElementsByTagName(a);
		  if ("*" === a) {
			while (c = f[e++]) 1 === c.nodeType && d.push(c);
			return d;
		  }
		  return f;
		}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
		  return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
		}, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
		  o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
		}), ia(function (a) {
		  var b = n.createElement("input");
		  b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
		})), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
		  c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
		}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
		  var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
		  return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
		} : function (a, b) {
		  if (b) while (b = b.parentNode) if (b === a) return true;
		  return false;
		}, B = b ? function (a, b) {
		  if (a === b) return l = true, 0;
		  var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
		  return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
		} : function (a, b) {
		  if (a === b) return l = true, 0;
		  var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
		  if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
		  if (e === f) return ka(a, b);
		  c = a;
		  while (c = c.parentNode) g.unshift(c);
		  c = b;
		  while (c = c.parentNode) h.unshift(c);
		  while (g[d] === h[d]) d++;
		  return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
		}, n) : n;
	  }, fa.matches = function (a, b) {
		return fa(a, null, null, b);
	  }, fa.matchesSelector = function (a, b) {
		if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
		  var d = s.call(a, b);
		  if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
		} catch (e) {}
		return fa(b, n, null, [a]).length > 0;
	  }, fa.contains = function (a, b) {
		return (a.ownerDocument || a) !== n && m(a), t(a, b);
	  }, fa.attr = function (a, b) {
		(a.ownerDocument || a) !== n && m(a);
		var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
		return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	  }, fa.error = function (a) {
		throw new Error("Syntax error, unrecognized expression: " + a);
	  }, fa.uniqueSort = function (a) {
		var b, d = [], e = 0, f = 0;
		if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
		  while (b = a[f++]) b === a[f] && (e = d.push(f));
		  while (e--) a.splice(d[e], 1);
		}
		return k = null, a;
	  }, e = fa.getText = function (a) {
		var b, c = "", d = 0, f = a.nodeType;
		if (f) {
		  if (1 === f || 9 === f || 11 === f) {
			if ("string" == typeof a.textContent) return a.textContent;
			for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
		  } else if (3 === f || 4 === f) return a.nodeValue;
		} else while (b = a[d++]) c += e(b);
		return c;
	  }, d = fa.selectors = {cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
		return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	  }, CHILD: function (a) {
		return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
	  }, PSEUDO: function (a) {
		var b, c = !a[6] && a[2];
		return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, true)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	  }}, filter: {TAG: function (a) {
		var b = a.replace(ba, ca).toLowerCase();
		return "*" === a ? function () {
		  return true;
		} : function (a) {
		  return a.nodeName && a.nodeName.toLowerCase() === b;
		};
	  }, CLASS: function (a) {
		var b = y[a + " "];
		return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
		  return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
		});
	  }, ATTR: function (a, b, c) {
		return function (d) {
		  var e = fa.attr(d, a);
		  return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : false) : true;
		};
	  }, CHILD: function (a, b, c, d, e) {
		var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
		return 1 === d && 0 === e ? function (a) {
		  return !!a.parentNode;
		} : function (b, c, i) {
		  var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = false;
		  if (q) {
			if (f) {
			  while (p) {
				m = b;
				while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return false;
				o = p = "only" === a && !o && "nextSibling";
			  }
			  return true;
			}
			if (o = [g ? q.firstChild : q.lastChild], g && s) {
			  m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
			  while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
				k[a] = [w, n, t];
				break;
			  }
			} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === false) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
			return t -= e, t === d || t % d === 0 && t / d >= 0;
		  }
		};
	  }, PSEUDO: function (a, b) {
		var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
		return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? (function (a, c) {
		  var d, f = e(a, b), g = f.length;
		  while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
		}[u] = true, function (a, c) {
		  var d, f = e(a, b), g = f.length;
		  while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
		}) : function (a) {
		  return e(a, 0, c);
		}) : e;
	  }}, pseudos: {not: (function (a) {
		var b = [], c = [], d = h(a.replace(Q, "$1"));
		return d[u] ? (function (a, b, c, e) {
		  var f, g = d(a, null, e, []), h = a.length;
		  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
		}[u] = true, function (a, b, c, e) {
		  var f, g = d(a, null, e, []), h = a.length;
		  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
		}) : function (a, e, f) {
		  return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
		};
	  }[u] = true, function (a) {
		var b = [], c = [], d = h(a.replace(Q, "$1"));
		return d[u] ? (function (a, b, c, e) {
		  var f, g = d(a, null, e, []), h = a.length;
		  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
		}[u] = true, function (a, b, c, e) {
		  var f, g = d(a, null, e, []), h = a.length;
		  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
		}) : function (a, e, f) {
		  return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
		};
	  }), has: (function (a) {
		return function (b) {
		  return fa(a, b).length > 0;
		};
	  }[u] = true, function (a) {
		return function (b) {
		  return fa(a, b).length > 0;
		};
	  }), contains: (function (a) {
		return a = a.replace(ba, ca), function (b) {
		  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
		};
	  }[u] = true, function (a) {
		return a = a.replace(ba, ca), function (b) {
		  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
		};
	  }), lang: (function (a) {
		return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
		  var c;
		  do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
		  return false;
		};
	  }[u] = true, function (a) {
		return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
		  var c;
		  do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
		  return false;
		};
	  }), target: function (b) {
		var c = a.location && a.location.hash;
		return c && c.slice(1) === b.id;
	  }, root: function (a) {
		return a === o;
	  }, focus: function (a) {
		return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	  }, enabled: function (a) {
		return a.disabled === false;
	  }, disabled: function (a) {
		return a.disabled === true;
	  }, checked: function (a) {
		var b = a.nodeName.toLowerCase();
		return "input" === b && !!a.checked || "option" === b && !!a.selected;
	  }, selected: function (a) {
		return a.parentNode && a.parentNode.selectedIndex, a.selected === true;
	  }, empty: function (a) {
		for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return false;
		return true;
	  }, parent: function (a) {
		return !d.pseudos.empty(a);
	  }, header: function (a) {
		return Y.test(a.nodeName);
	  }, input: function (a) {
		return X.test(a.nodeName);
	  }, button: function (a) {
		var b = a.nodeName.toLowerCase();
		return "input" === b && "button" === a.type || "button" === b;
	  }, text: function (a) {
		var b;
		return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	  }, first: na(function () {
		return [0];
	  }), last: na(function (a, b) {
		return [b - 1];
	  }), eq: na(function (a, b, c) {
		return [0 > c ? c + b : c];
	  }), even: na(function (a, b) {
		for (var c = 0; b > c; c += 2) a.push(c);
		return a;
	  }), odd: na(function (a, b) {
		for (var c = 1; b > c; c += 2) a.push(c);
		return a;
	  }), lt: na(function (a, b, c) {
		for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
		return a;
	  }), gt: na(function (a, b, c) {
		for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
		return a;
	  })}}, d.pseudos.nth = d.pseudos.eq;
	  for (b in {radio: true, checkbox: true, file: true, password: true, image: true}) d.pseudos[b] = la(b);
	  for (b in {submit: true, reset: true}) d.pseudos[b] = ma(b);
	  function pa() {}
	  pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function (a, b) {
		var c, e, f, g, h, i, j, k = z[a + " "];
		if (k) return b ? 0 : k.slice(0);
		h = a, i = [], j = d.preFilter;
		while (h) {
		  c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = false, (e = S.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(Q, " ")}), h = h.slice(c.length));
		  for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
		  if (!c) break;
		}
		return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
	  };
	  function qa(a) {
		for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
		return d;
	  }
	  function ra(a, b, c) {
		var d = b.dir, e = c && "parentNode" === d, f = x++;
		return b.first ? function (b, c, f) {
		  while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
		} : function (b, c, g) {
		  var h, i, j, k = [w, f];
		  if (g) {
			while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return true;
		  } else while (b = b[d]) if (1 === b.nodeType || e) {
			if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
			if (i[d] = k, k[2] = a(b, c, g)) return true;
		  }
		};
	  }
	  function sa(a) {
		return a.length > 1 ? function (b, c, d) {
		  var e = a.length;
		  while (e--) if (!a[e](b, c, d)) return false;
		  return true;
		} : a[0];
	  }
	  function ta(a, b, c) {
		for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
		return c;
	  }
	  function ua(a, b, c, d, e) {
		for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
		return g;
	  }
	  function va(a, b, c, d, e, f) {
		return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), (function (f, g, h, i) {
		  var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
		  if (c && c(q, r, h, i), d) {
			j = ua(r, n), d(j, [], h, i), k = j.length;
			while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
		  }
		  if (f) {
			if (e || a) {
			  if (e) {
				j = [], k = r.length;
				while (k--) (l = r[k]) && j.push(q[k] = l);
				e(null, r = [], j, i);
			  }
			  k = r.length;
			  while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
			}
		  } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
		}[u] = true, function (f, g, h, i) {
		  var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
		  if (c && c(q, r, h, i), d) {
			j = ua(r, n), d(j, [], h, i), k = j.length;
			while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
		  }
		  if (f) {
			if (e || a) {
			  if (e) {
				j = [], k = r.length;
				while (k--) (l = r[k]) && j.push(q[k] = l);
				e(null, r = [], j, i);
			  }
			  k = r.length;
			  while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
			}
		  } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
		});
	  }
	  function wa(a) {
		for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
		  return a === b;
		}, h, true), l = ra(function (a) {
		  return J(b, a) > -1;
		}, h, true), m = [function (a, c, d) {
		  var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
		  return b = null, e;
		}]; f > i; i++) if (c = d.relative[a[i].type]) m = [ra(sa(m), c)]; else {
		  if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
			for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
			return va(i > 1 && sa(m), i > 1 && false.replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && false);
		  }
		  m.push(c);
		}
		return sa(m);
	  }
	  function xa(a, b) {
		var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
		  var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || 0.1, z = x.length;
		  for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
			if (e && l) {
			  o = 0, g || l.ownerDocument === n || (m(l), h = !p);
			  while (q = a[o++]) if (q(l, g || n, h)) {
				i.push(l);
				break;
			  }
			  k && (w = y);
			}
			c && ((l = !q && l) && r--, f && t.push(l));
		  }
		  if (r += s, c && s !== r) {
			o = 0;
			while (q = b[o++]) q(t, u, g, h);
			if (f) {
			  if (r > 0) while (s--) t[s] || u[s] || (u[s] = F.call(i));
			  u = ua(u);
			}
			H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
		  }
		  return k && (w = y, j = v), t;
		};
		return c ? (f[u] = true, f) : f;
	  }
	  return h = fa.compile = function (a, b) {
		var c, d = [], e = [], f = A[a + " "];
		if (!f) {
		  b || (b = g(a)), c = b.length;
		  while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
		  f = A(a, xa(e, d)), f.selector = a;
		}
		return f;
	  }, i = fa.select = function (a, b, e, f) {
		var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
		if (e = e || [], 1 === o.length) {
		  if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
			if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
			n && (b = b.parentNode), a = a.slice(j.shift().value.length);
		  }
		  i = W.needsContext.test(a) ? 0 : j.length;
		  while (i--) {
			if (k = j[i], d.relative[l = k.type]) break;
			if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && (b.parentNode && "undefined" != typeof b.parentNode.getElementsByTagName && b.parentNode) || b))) {
			  if (j.splice(i, 1), a = f.length && false, !a) return H.apply(e, f), e;
			  break;
			}
		  }
		}
		return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && (b.parentNode && "undefined" != typeof b.parentNode.getElementsByTagName && b.parentNode) || b), e;
	  }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
		return 1 & a.compareDocumentPosition(n.createElement("div"));
	  }), ia(function (a) {
		return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	  }) || ja("type|href|height|width", function (a, b, c) {
		return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	  }), c.attributes && ia(function (a) {
		return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	  }) || ja("value", function (a, b, c) {
		return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	  }), ia(function (a) {
		return null == a.getAttribute("disabled");
	  }) || ja(K, function (a, b, c) {
		var d;
		return c ? void 0 : a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	  }), fa;
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = function (a, b, c) {
	  var d = [], e = void 0 !== c;
	  while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
		if (e && n(a).is(c)) break;
		d.push(a);
	  }
	  return d;
	}, v = function (a, b) {
	  for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
	  return c;
	}, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
	function z(a, b, c) {
	  if (n.isFunction(b)) return n.grep(a, function (a, d) {
		return !!b.call(a, d, a) !== c;
	  });
	  if (b.nodeType) return n.grep(a, function (a) {
		return a === b !== c;
	  });
	  if ("string" == typeof b) {
		if (y.test(b)) return n.filter(b, a, c);
		b = n.filter(b, a);
	  }
	  return n.grep(a, function (a) {
		return n.inArray(a, b) > -1 !== c;
	  });
	}
	n.filter = function (a, b, c) {
	  var d = b[0];
	  return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
		return 1 === a.nodeType;
	  }));
	}, n.fn.extend({find: function (a) {
	  var b, c = [], d = this, e = d.length;
	  if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
		for (b = 0; e > b; b++) if (n.contains(d[b], this)) return true;
	  }));
	  for (b = 0; e > b; b++) n.find(a, d[b], c);
	  return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
	}, filter: function (a) {
	  return this.pushStack(z(this, a || [], false));
	}, not: function (a) {
	  return this.pushStack(z(this, a || [], true));
	}, is: function (a) {
	  return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], false).length;
	}});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
	  var e, f;
	  if (!a) return this;
	  if (c = c || A, "string" == typeof a) {
		if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
		if (e[1]) {
		  if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, true)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
		  return this;
		}
		if (f = d.getElementById(e[2]), f && f.parentNode) {
		  if (f.id !== e[2]) return A.find(a);
		  this.length = 1, this[0] = f;
		}
		return this.context = d, this.selector = a, this;
	  }
	  return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	};
	C.prototype = n.fn, A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/, E = {children: true, contents: true, next: true, prev: true};
	n.fn.extend({has: function (a) {
	  var b, c = n(a, this), d = c.length;
	  return this.filter(function () {
		for (b = 0; d > b; b++) if (n.contains(this, c[b])) return true;
	  });
	}, closest: function (a, b) {
	  for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
		f.push(c);
		break;
	  }
	  return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
	}, index: function (a) {
	  return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	}, add: function (a, b) {
	  return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
	}, addBack: function (a) {
	  return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	}});
	function F(a, b) {
	  do a = a[b]; while (a && 1 !== a.nodeType);
	  return a;
	}
	n.each({parent: function (a) {
	  var b = a.parentNode;
	  return b && 11 !== b.nodeType ? b : null;
	}, parents: function (a) {
	  return u(a, "parentNode");
	}, parentsUntil: function (a, b, c) {
	  return u(a, "parentNode", c);
	}, next: function (a) {
	  return F(a, "nextSibling");
	}, prev: function (a) {
	  return F(a, "previousSibling");
	}, nextAll: function (a) {
	  return u(a, "nextSibling");
	}, prevAll: function (a) {
	  return u(a, "previousSibling");
	}, nextUntil: function (a, b, c) {
	  return u(a, "nextSibling", c);
	}, prevUntil: function (a, b, c) {
	  return u(a, "previousSibling", c);
	}, siblings: function (a) {
	  return v((a.parentNode || {}).firstChild, a);
	}, children: function (a) {
	  return v(a.firstChild);
	}, contents: function (a) {
	  return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
	}}, function (a, b) {
	  n.fn[a] = function (c, d) {
		var e = n.map(this, b, c);
		return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
	  };
	});
	var G = /\S+/g;
	function H(a) {
	  var b = {};
	  return n.each(a.match(G) || [], function (a, c) {
		b[c] = true;
	  }), b;
	}
	n.Callbacks = function (a) {
	  a = "string" == typeof a ? H(a) : n.extend({}, a);
	  var b, c, d, e, f = [], g = [], h = -1, i = function () {
		for (e = a.once, d = b = true; g.length; h = -1) {
		  c = g.shift();
		  while (++h < f.length) f[h].apply(c[0], c[1]) === false && a.stopOnFalse && (h = f.length, c = false);
		}
		a.memory || (c = false), b = false, e && (f = c ? [] : "");
	  }, j = {add: function () {
		return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
		  n.each(b, function (b, c) {
			n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
		  });
		}(arguments), c && !b && i()), this;
	  }, remove: function () {
		return n.each(arguments, function (a, b) {
		  var c;
		  while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--;
		}), this;
	  }, has: function (a) {
		return a ? n.inArray(a, f) > -1 : f.length > 0;
	  }, empty: function () {
		return f && (f = []), this;
	  }, disable: function () {
		return e = g = [], f = c = "", this;
	  }, disabled: function () {
		return !f;
	  }, lock: function () {
		return e = true, c || j.disable(), this;
	  }, locked: function () {
		return !!e;
	  }, fireWith: function (a, c) {
		return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
	  }, fire: function () {
		return j.fireWith(this, arguments), this;
	  }, fired: function () {
		return !!d;
	  }};
	  return j;
	}, n.extend({Deferred: function (a) {
	  var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {state: function () {
		return c;
	  }, always: function () {
		return e.done(arguments).fail(arguments), this;
	  }, then: function () {
		var a = arguments;
		return n.Deferred(function (c) {
		  n.each(b, function (b, f) {
			var g = n.isFunction(a[b]) && a[b];
			e[f[1]](function () {
			  var a = g && g.apply(this, arguments);
			  a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
			});
		  }), a = null;
		}).promise();
	  }, promise: function (a) {
		return null != a ? n.extend(a, d) : d;
	  }}, e = {};
	  return d.pipe = d.then, n.each(b, function (a, f) {
		var g = f[2], h = f[3];
		d[f[1]] = g.add, h && g.add(function () {
		  c = h;
		}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
		  return e[f[0] + "With"](this === e ? d : this, arguments), this;
		}, e[f[0] + "With"] = g.fireWith;
	  }), d.promise(e), a && a.call(e, e), e;
	}, when: function (a) {
	  var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
		return function (d) {
		  b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
		};
	  }, i, j, k;
	  if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
	  return f || g.resolveWith(k, c), g.promise();
	}});
	var I;
	n.fn.ready = function (a) {
	  return n.ready.promise().done(a), this;
	}, n.extend({isReady: false, readyWait: 1, holdReady: function (a) {
	  a ? n.readyWait++ : n.ready(true);
	}, ready: function (a) {
	  (a === true ? --n.readyWait : n.isReady) || (n.isReady = true, a !== true && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
	}});
	function J() {
	  d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
	}
	function K() {
	  (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
	}
	n.ready.promise = function (b) {
	  if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready); else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K); else {
		d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
		var c = false;
		try {
		  c = null == a.frameElement && d.documentElement;
		} catch (e) {}
		c && c.doScroll && !function f() {
		  if (!n.isReady) {
			try {
			  c.doScroll("left");
			} catch (b) {
			  return a.setTimeout(f, 50);
			}
			J(), n.ready();
		  }
		}();
	  }
	  return I.promise(b);
	}, n.ready.promise();
	var L;
	for (L in n(l)) break;
	l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = false, n(function () {
	  var a, b, c, e;
	  c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
	}), function () {
	  var a = d.createElement("div");
	  l.deleteExpando = true;
	  try {
		delete a.test;
	  } catch (b) {
		l.deleteExpando = false;
	  }
	  a = null;
	}();
	var M = function (a) {
	  var b = n.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
	  return 1 !== c && 9 !== c ? false : !b || b !== true && a.getAttribute("classid") === b;
	}, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
	function P(a, b, c) {
	  if (void 0 === c && 1 === a.nodeType) {
		var d = "data-" + b.replace(O, "-$1").toLowerCase();
		if (c = a.getAttribute(d), "string" == typeof c) {
		  try {
			c = "true" === c ? true : "false" === c ? false : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
		  } catch (e) {}
		  n.data(a, b, c);
		} else c = void 0;
	  }
	  return c;
	}
	function Q(a) {
	  var b;
	  for (b in a) if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return false;
	  return true;
	}
	function R(a, b, d, e) {
	  if (M(a)) {
		var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
		if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: n.noop}), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
	  }
	}
	function S(a, b, c) {
	  if (M(a)) {
		var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
		if (g[h]) {
		  if (b && (d = c ? g[h] : g[h].data)) {
			n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
			while (e--) delete d[b[e]];
			if (c ? !Q(d) : !n.isEmptyObject(d)) return;
		  }
		  (c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], true) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
		}
	  }
	}
	n.extend({cache: {}, noData: {"applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {
	  return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
	}, data: function (a, b, c) {
	  return R(a, b, c);
	}, removeData: function (a, b) {
	  return S(a, b);
	}, _data: function (a, b, c) {
	  return R(a, b, c, true);
	}, _removeData: function (a, b) {
	  return S(a, b, true);
	}}), n.fn.extend({data: function (a, b) {
	  var c, d, e, f = this[0], g = f && f.attributes;
	  if (void 0 === a) {
		if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
		  c = g.length;
		  while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
		  n._data(f, "parsedAttrs", true);
		}
		return e;
	  }
	  return "object" == typeof a ? this.each(function () {
		n.data(this, a);
	  }) : arguments.length > 1 ? this.each(function () {
		n.data(this, a, b);
	  }) : f ? P(f, a, n.data(f, a)) : void 0;
	}, removeData: function (a) {
	  return this.each(function () {
		n.removeData(this, a);
	  });
	}}), n.extend({queue: function (a, b, c) {
	  var d;
	  return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
	}, dequeue: function (a, b) {
	  b = b || "fx";
	  var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
		n.dequeue(a, b);
	  };
	  "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	}, _queueHooks: function (a, b) {
	  var c = b + "queueHooks";
	  return n._data(a, c) || n._data(a, c, {empty: n.Callbacks("once memory").add(function () {
		n._removeData(a, b + "queue"), n._removeData(a, c);
	  })});
	}}), n.fn.extend({queue: function (a, b) {
	  var c = 2;
	  return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
		var c = n.queue(this, a, b);
		n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
	  });
	}, dequeue: function (a) {
	  return this.each(function () {
		n.dequeue(this, a);
	  });
	}, clearQueue: function (a) {
	  return this.queue(a || "fx", []);
	}, promise: function (a, b) {
	  var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
		--d || e.resolveWith(f, [f]);
	  };
	  "string" != typeof a && (b = a, a = void 0), a = a || "fx";
	  while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	  return h(), e.promise(b);
	}}), function () {
	  var a;
	  l.shrinkWrapBlocks = function () {
		if (null != a) return a;
		a = false;
		var b, c, e;
		return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
	  };
	}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"];
	function X(a, b, c, d) {
	  var e, f = 1, g = 20, h = d ? function () {
		return d.cur();
	  } : function () {
		return n.css(a, b, "");
	  }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
	  if (k && k[3] !== j) {
		j = j || k[3], c = c || [], k = +i || 1;
		do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
	  }
	  return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	}
	var Y = function (a, b, c, d, e, f, g) {
	  var h = 0, i = a.length, j = null == c;
	  if ("object" === n.type(c)) {
		e = true;
		for (h in c) Y(a, b, h, c[h], true, f, g);
	  } else if (void 0 !== d && (e = true, n.isFunction(d) || (g = true), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
		return j.call(n(a), c);
	  })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	  return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	}, Z = /^(?:checkbox|radio)$/i, $ = /<([\w:-]+)/, _ = /^$|\/(?:java|ecma)script/i, aa = /^\s+/, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	function ca(a) {
	  var b = ba.split("|"), c = a.createDocumentFragment();
	  if (c.createElement) while (b.length) c.createElement(b.pop());
	  return c;
	}
	!function () {
	  var a = d.createElement("div"), b = d.createDocumentFragment(), c = d.createElement("input");
	  a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(true).outerHTML, c.type = "checkbox", c.checked = true, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(true).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(true).cloneNode(true).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
	}();
	var da = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]};
	da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;
	function ea(a, b) {
	  var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
	  if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
	  return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
	}
	function fa(a, b) {
	  for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
	}
	var ga = /<|&#?\w+;/, ha = /<tbody/i;
	function ia(a) {
	  Z.test(a.type) && (a.defaultChecked = a.checked);
	}
	function ja(a, b, c, d, e) {
	  for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g); else if (ga.test(g)) {
		i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
		while (f--) i = i.lastChild;
		if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
		  g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
		  while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
		}
		n.merge(q, i.childNodes), i.textContent = "";
		while (i.firstChild) i.removeChild(i.firstChild);
		i = p.lastChild;
	  } else q.push(b.createTextNode(g));
	  i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
	  while (g = q[r++]) if (d && n.inArray(g, d) > -1) e && e.push(g); else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
		f = 0;
		while (g = i[f++]) _.test(g.type || "") && c.push(g);
	  }
	  return i = null, p;
	}
	!function () {
	  var b, c, e = d.createElement("div");
	  for (b in {submit: true, change: true, focusin: true}) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === false);
	  e = null;
	}();
	var ka = /^(?:input|select|textarea)$/i, la = /^key/, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, na = /^(?:focusinfocus|focusoutblur)$/, oa = /^([^.]*)(?:\.(.+)|)/;
	function ra() {
	  try {
		return d.activeElement;
	  } catch (a) {}
	}
	function sa(a, b, c, d, e, f) {
	  var g, h;
	  if ("object" == typeof b) {
		"string" != typeof c && (d = d || c, c = void 0);
		for (h in b) sa(a, h, c, d, b[h], f);
		return a;
	  }
	  if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === false) e = qa; else if (!e) return a;
	  return 1 === f && (g = e, e = function (a) {
		return n().off(a), g.apply(this, arguments);
	  }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
		n.event.add(this, b, e, d, c);
	  });
	}
	n.event = {global: {}, add: function (a, b, c, d, e) {
	  var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
	  if (r) {
		c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
		  return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
		}, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
		while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".")}, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== false || (a.addEventListener ? a.addEventListener(o, k, false) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = true);
		a = null;
	  }
	}, remove: function (a, b, c, d, e) {
	  var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
	  if (r && (k = r.events)) {
		b = (b || "").match(G) || [""], j = b.length;
		while (j--) if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
		  l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
		  while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
		  i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== false || n.removeEvent(a, o, r.handle), delete k[o]);
		} else for (o in k) n.event.remove(a, o + b[j], c, d, true);
		n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
	  }
	}, trigger: function (b, c, e, f) {
	  var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
	  if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== false)) {
		if (!f && !l.noBubble && !n.isWindow(e)) {
		  for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
		  m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
		}
		o = 0;
		while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === false && b.preventDefault());
		if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === false) && M(e) && h && e[q] && !n.isWindow(e)) {
		  m = e[h], m && (e[h] = null), n.event.triggered = q;
		  try {
			e[q]();
		  } catch (s) {}
		  n.event.triggered = void 0, m && (e[h] = m);
		}
		return b.result;
	  }
	}, dispatch: function (a) {
	  a = n.event.fix(a);
	  var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
	  if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== false) {
		h = n.event.handlers.call(this, a, j), b = 0;
		while ((f = h[b++]) && !a.isPropagationStopped()) {
		  a.currentTarget = f.elem, c = 0;
		  while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === false && (a.preventDefault(), a.stopPropagation()));
		}
		return k.postDispatch && k.postDispatch.call(this, a), a.result;
	  }
	}, handlers: function (a, b) {
	  var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
	  if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== true || "click" !== a.type)) {
		for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
		d.length && g.push({elem: i, handlers: d});
	  }
	  return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g;
	}, fix: function (a) {
	  if (a[n.expando]) return a;
	  var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
	  h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
	  while (b--) c = e[b], a[c] = g[c];
	  return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
	}, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
	  return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
	}}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
	  var c, e, f, g = b.button, h = b.fromElement;
	  return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
	}}, special: {load: {noBubble: true}, focus: {trigger: function () {
	  if (this !== ra() && this.focus) try {
		return this.focus(), false;
	  } catch (a) {}
	}, delegateType: "focusin"}, blur: {trigger: function () {
	  return this === ra() && this.blur ? (this.blur(), false) : void 0;
	}, delegateType: "focusout"}, click: {trigger: function () {
	  return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), false) : void 0;
	}, _default: function (a) {
	  return n.nodeName(a.target, "a");
	}}, beforeunload: {postDispatch: function (a) {
	  void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	}}}, simulate: function (a, b, c) {
	  var d = n.extend(new n.Event, c, {type: a, isSimulated: true});
	  n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
	}}, n.removeEvent = d.removeEventListener ? function (a, b, c) {
	  a.removeEventListener && a.removeEventListener(b, c);
	} : function (a, b, c) {
	  var d = "on" + b;
	  a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
	}, n.Event = function (a, b) {
	  return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === false ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = true)) : new n.Event(a, b);
	}, n.Event.prototype = {constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function () {
	  var a = this.originalEvent;
	  this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = false);
	}, stopPropagation: function () {
	  var a = this.originalEvent;
	  this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = true);
	}, stopImmediatePropagation: function () {
	  var a = this.originalEvent;
	  this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
	}}, n.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
	  n.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
		var c, d = this, e = a.relatedTarget, f = a.handleObj;
		return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	  }};
	}), l.submit || (n.event.special.submit = {setup: function () {
	  return n.nodeName(this, "form") ? false : void n.event.add(this, "click._submit keypress._submit", function (a) {
		var b = a.target, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
		c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
		  a._submitBubble = true;
		}), n._data(c, "submit", true));
	  });
	}, postDispatch: function (a) {
	  a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
	}, teardown: function () {
	  return n.nodeName(this, "form") ? false : void n.event.remove(this, "._submit");
	}}), l.change || (n.event.special.change = {setup: function () {
	  return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
		"checked" === a.originalEvent.propertyName && (this._justChanged = true);
	  }), n.event.add(this, "click._change", function (a) {
		this._justChanged && !a.isTrigger && (this._justChanged = false), n.event.simulate("change", this, a);
	  })), false) : void n.event.add(this, "beforeactivate._change", function (a) {
		var b = a.target;
		ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
		  !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
		}), n._data(b, "change", true));
	  });
	}, handle: function (a) {
	  var b = a.target;
	  return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
	}, teardown: function () {
	  return n.event.remove(this, "._change"), !ka.test(this.nodeName);
	}}), l.focusin || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
	  var c = function (a) {
		n.event.simulate(b, a.target, n.event.fix(a));
	  };
	  n.event.special[b] = {setup: function () {
		var d = this.ownerDocument || this, e = n._data(d, b);
		e || d.addEventListener(a, c, true), n._data(d, b, (e || 0) + 1);
	  }, teardown: function () {
		var d = this.ownerDocument || this, e = n._data(d, b) - 1;
		e ? n._data(d, b, e) : (d.removeEventListener(a, c, true), n._removeData(d, b));
	  }};
	}), n.fn.extend({on: function (a, b, c, d) {
	  return sa(this, a, b, c, d);
	}, one: function (a, b, c, d) {
	  return sa(this, a, b, c, d, 1);
	}, off: function (a, b, c) {
	  var d, e;
	  if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
	  if ("object" == typeof a) {
		for (e in a) this.off(e, b, a[e]);
		return this;
	  }
	  return b !== false && "function" != typeof b || (c = b, b = void 0), c === false && (c = qa), this.each(function () {
		n.event.remove(this, a, c, b);
	  });
	}, trigger: function (a, b) {
	  return this.each(function () {
		n.event.trigger(a, b, this);
	  });
	}, triggerHandler: function (a, b) {
	  var c = this[0];
	  return c ? n.event.trigger(a, b, c, true) : void 0;
	}});
	var ta = / jQuery\d+="(?:null|\d+)"/g, ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"), va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, wa = /<script|<style|<link/i, xa = /checked\s*(?:[^=]|=\s*.checked.)/i, ya = /^true\/(.*)/, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Aa = ca(d), Ba = Aa.appendChild(d.createElement("div"));
	function Ca(a, b) {
	  return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	}
	function Ea(a) {
	  var b = ya.exec(a.type);
	  return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}
	function Fa(a, b) {
	  if (1 === b.nodeType && n.hasData(a)) {
		var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
		if (h) {
		  delete g.handle, g.events = {};
		  for (c in h) for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]);
		}
		g.data && (g.data = n.extend({}, g.data));
	  }
	}
	function Ga(a, b) {
	  var c, d, e;
	  if (1 === b.nodeType) {
		if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
		  e = n._data(b);
		  for (d in e.events) n.removeEvent(b, d, e.handle);
		  b.removeAttribute(n.expando);
		}
		"script" === c && b.text !== a.text ? ((b.type = (null !== n.find.attr(b, "type")) + "/" + b.type, b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	  }
	}
	function Ha(a, b, c, d) {
	  b = f.apply([], b);
	  var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
	  if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
		var f = a.eq(e);
		r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
	  });
	  if (o && (k = ja(b, a[0].ownerDocument, false, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
		for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, true, true), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
		if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
		k = e = null;
	  }
	  return a;
	}
	function Ia(a, b, c) {
	  for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
	  return a;
	}
	n.extend({htmlPrefilter: function (a) {
	  return a.replace(va, "<$1></$2>");
	}, clone: function (a, b, c) {
	  var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
	  if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(true) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
	  if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]); else Fa(a, f);
	  return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
	}, cleanData: function (a, b) {
	  for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) if ((b || M(d)) && (f = d[i], g = f && j[f])) {
		if (g.events) for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
		j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
	  }
	}}), n.fn.extend({domManip: Ha, detach: function (a) {
	  return Ia(this, a, true);
	}, remove: function (a) {
	  return Ia(this, a);
	}, text: function (a) {
	  return Y(this, function (a) {
		return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
	  }, null, a, arguments.length);
	}, append: function () {
	  return Ha(this, arguments, function (a) {
		if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
		  var b = Ca(this, a);
		  b.appendChild(a);
		}
	  });
	}, prepend: function () {
	  return Ha(this, arguments, function (a) {
		if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
		  var b = Ca(this, a);
		  b.insertBefore(a, b.firstChild);
		}
	  });
	}, before: function () {
	  return Ha(this, arguments, function (a) {
		this.parentNode && this.parentNode.insertBefore(a, this);
	  });
	}, after: function () {
	  return Ha(this, arguments, function (a) {
		this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	  });
	}, empty: function () {
	  for (var a, b = 0; null != (a = this[b]); b++) {
		1 === a.nodeType && n.cleanData(ea(a, false));
		while (a.firstChild) a.removeChild(a.firstChild);
		a.options && n.nodeName(a, "select") && (a.options.length = 0);
	  }
	  return this;
	}, clone: function (a, b) {
	  return a = null == a ? false : a, b = null == b ? a : b, this.map(function () {
		return n.clone(this, a, b);
	  });
	}, html: function (a) {
	  return Y(this, function (a) {
		var b = this[0] || {}, c = 0, d = this.length;
		if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
		if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
		  a = n.htmlPrefilter(a);
		  try {
			for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, false)), b.innerHTML = a);
			b = 0;
		  } catch (e) {}
		}
		b && this.empty().append(a);
	  }, null, a, arguments.length);
	}, replaceWith: function () {
	  var a = [];
	  return Ha(this, arguments, function (b) {
		var c = this.parentNode;
		n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
	  }, a);
	}}), n.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
	  n.fn[a] = function (a) {
		for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(true), n(f[d])[b](c), g.apply(e, c.get());
		return this.pushStack(e);
	  };
	});
	var Ja, Ka = {HTML: "block", BODY: "block"};
	function La(a, b) {
	  var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
	  return c.detach(), d;
	}
	function Ma(a) {
	  var b = d, c = Ka[a];
	  return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
	}
	var Na = /^margin/, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"), Pa = function (a, b, c, d) {
	  var e, f, g = {};
	  for (f in b) g[f] = a.style[f], a.style[f] = b[f];
	  e = c.apply(a, d || []);
	  for (f in b) a.style[f] = g[f];
	  return e;
	}, Qa = d.documentElement;
	!function () {
	  var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
	  if (j.style) {
		j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(true).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {reliableHiddenOffsets: function () {
		  return null == b && k(), f;
		}, boxSizingReliable: function () {
		  return null == b && k(), e;
		}, pixelMarginRight: function () {
		  return null == b && k(), c;
		}, pixelPosition: function () {
		  return null == b && k(), b;
		}, reliableMarginRight: function () {
		  return null == b && k(), g;
		}, reliableMarginLeft: function () {
		  return null == b && k(), h;
		}});
		function k() {
		  var k, l, m = d.documentElement;
		  m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = false, c = g = true, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {width: "4px"}).width, j.style.marginRight = "50%", c = "4px" === (l || {marginRight: "4px"}).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
		}
	  }
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function (b) {
	  var c = b.ownerDocument.defaultView;
	  return c && c.opener || (c = a), c.getComputedStyle(b);
	}, Sa = function (a, b, c) {
	  var d, e, f, g, h = a.style;
	  return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
	}) : Qa.currentStyle && (Ra = function (a) {
	  return a.currentStyle;
	}, Sa = function (a, b, c) {
	  var d, e, f, g, h = a.style;
	  return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
	});
	function Ua(a, b) {
	  return {get: function () {
		return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	  }};
	}
	var Va = /alpha\([^)]*\)/i, Wa = /opacity\s*=\s*([^)]*)/i, Xa = /^(none|table(?!-c[ea]).+)/, Ya = new RegExp("^(" + T + ")(.*)$", "i"), Za = {position: "absolute", visibility: "hidden", display: "block"}, $a = {letterSpacing: "0", fontWeight: "400"}, _a = ["Webkit", "O", "Moz", "ms"], ab = d.createElement("div").style;
	function bb(a) {
	  if (a in ab) return a;
	  var b = a.charAt(0).toUpperCase() + a.slice(1), c = _a.length;
	  while (c--) if (a = _a[c] + b, a in ab) return a;
	}
	function cb(a, b) {
	  for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && (d = b || d, "none" === n.css(d, "display") || !n.contains(d.ownerDocument, d)) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = (d = b || d, "none" === n.css(d, "display") || !n.contains(d.ownerDocument, d)), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
	  for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
	  return a;
	}
	function db(a, b, c) {
	  var d = Ya.exec(b);
	  return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	}
	function eb(a, b, c, d, e) {
	  for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], true, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], true, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", true, e))) : (g += n.css(a, "padding" + V[f], true, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", true, e)));
	  return g;
	}
	function fb(a, b, c) {
	  var d = true, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a), g = l.boxSizing && "border-box" === n.css(a, "boxSizing", false, f);
	  if (0 >= e || null == e) {
		if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
		d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	  }
	  return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
	}
	n.extend({cssHooks: {opacity: {get: function (a, b) {
	  if (b) {
		var c = Sa(a, "opacity");
		return "" === c ? "1" : c;
	  }
	}}}, cssNumber: {animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {float: l.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, c, d) {
	  if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
		var e, f, g, h = n.camelCase(b), i = a.style;
		if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, false, d)) ? e : i[b];
		if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
		  i[b] = c;
		} catch (j) {}
	  }
	}, css: function (a, b, c, d) {
	  var e, f, g, h = n.camelCase(b);
	  return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, true, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === true || isFinite(e) ? e || 0 : f) : f;
	}}), n.each(["height", "width"], function (a, b) {
	  n.cssHooks[b] = {get: function (a, c, d) {
		return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
		  return fb(a, b, d);
		}) : fb(a, b, d) : void 0;
	  }, set: function (a, c, d) {
		var e = d && Ra(a);
		return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", false, e), e) : 0);
	  }};
	}), l.opacity || (n.cssHooks.opacity = {get: function (a, b) {
	  return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
	}, set: function (a, b) {
	  var c = a.style, d = a.currentStyle, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
	  c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
	}}), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
	  return b ? Pa(a, {display: "inline-block"}, Sa, [a, "marginRight"]) : void 0;
	}), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
	  return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {marginLeft: 0}, function () {
		return a.getBoundingClientRect().left;
	  }) : 0)) + "px" : void 0;
	}), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
	  n.cssHooks[a + b] = {expand: function (c) {
		for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
		return e;
	  }}, Na.test(a) || (n.cssHooks[a + b].set = db);
	}), n.fn.extend({css: function (a, b) {
	  return Y(this, function (a, b, c) {
		var d, e, f = {}, g = 0;
		if (n.isArray(b)) {
		  for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], false, d);
		  return f;
		}
		return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
	  }, a, b, arguments.length > 1);
	}, show: function () {
	  return cb(this, true);
	}, hide: function () {
	  return cb(this);
	}, toggle: function (a) {
	  return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
		(this = b || this, "none" === n.css(this, "display") || !n.contains(this.ownerDocument, this)) ? n(this).show() : n(this).hide();
	  });
	}});
	function gb(a, b, c, d, e) {
	  return new gb.prototype.init(a, b, c, d, e);
	}
	n.Tween = gb, gb.prototype = {constructor: gb, init: function (a, b, c, d, e, f) {
	  this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
	}, cur: function () {
	  var a = gb.propHooks[this.prop];
	  return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
	}, run: function (a) {
	  var b, c = gb.propHooks[this.prop];
	  return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
	}}, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {_default: {get: function (a) {
	  var b;
	  return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
	}, set: function (a) {
	  n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
	}}}, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {set: function (a) {
	  a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	}}, n.easing = {linear: function (a) {
	  return a;
	}, swing: function (a) {
	  return 0.5 - Math.cos(a * Math.PI) / 2;
	}, _default: "swing"}, n.fx = gb.prototype.init, n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
	function lb() {
	  return a.setTimeout(function () {
		hb = void 0;
	  }), hb = n.now();
	}
	function mb(a, b) {
	  var c, d = {height: a}, e = 0;
	  for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
	  return b && (d.opacity = d.width = a), d;
	}
	function nb(a, b, c) {
	  for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
	}
	function ob(a, b, c) {
	  var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && (a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)), r = n._data(a, "fxshow");
	  c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
		h.unqueued || i();
	  }), h.unqueued++, m.always(function () {
		m.always(function () {
		  h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
		});
	  })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
		p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
	  }));
	  for (d in b) if (e = b[d], jb.exec(e)) {
		if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
		  if ("show" !== e || !r || void 0 === r[d]) continue;
		  q = true;
		}
		o[d] = r && r[d] || n.style(a, d);
	  } else j = void 0;
	  if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j); else {
		r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
		  n(a).hide();
		}), m.done(function () {
		  var b;
		  n._removeData(a, "fxshow");
		  for (b in o) n.style(a, b, o[b]);
		});
		for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	  }
	}
	function pb(a, b) {
	  var c, d, e, f, g;
	  for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
		f = g.expand(f), delete a[d];
		for (c in f) c in a || (a[c] = f[c], b[c] = e);
	  } else b[d] = e;
	}
	function qb(a, b, c) {
	  var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function () {
		delete i.elem;
	  }), i = function () {
		if (e) return false;
		for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
		return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), false);
	  }, j = h.promise({elem: a, props: n.extend({}, b), opts: n.extend(true, {specialEasing: {}, easing: n.easing._default}, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function (b, c) {
		var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
		return j.tweens.push(d), d;
	  }, stop: function (b) {
		var c = 0, d = b ? j.tweens.length : 0;
		if (e) return this;
		for (e = true; d > c; c++) j.tweens[c].run(1);
		return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
	  }}), k = j.props;
	  for (pb(k, j.opts.specialEasing); g > f; f++) if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
	  return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}
	n.Animation = n.extend(qb, {tweeners: {"*": [function (a, b) {
	  var c = this.createTween(a, b);
	  return X(c.elem, a, U.exec(b), c), c;
	}]}, tweener: function (a, b) {
	  n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
	  for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
	}, prefilters: [ob], prefilter: function (a, b) {
	  b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
	}}), n.speed = function (a, b, c) {
	  var d = a && "object" == typeof a ? n.extend({}, a) : {complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b};
	  return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== true || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
		n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
	  }, d;
	}, n.fn.extend({fadeTo: function (a, b, c, d) {
	  return this.filter(W).css("opacity", 0).show().end().animate({opacity: b}, a, c, d);
	}, animate: function (a, b, c, d) {
	  var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
		var b = qb(this, n.extend({}, a), f);
		(e || n._data(this, "finish")) && b.stop(true);
	  };
	  return g.finish = g, e || f.queue === false ? this.each(g) : this.queue(f.queue, g);
	}, stop: function (a, b, c) {
	  var d = function (a) {
		var b = a.stop;
		delete a.stop, b(c);
	  };
	  return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== false && this.queue(a || "fx", []), this.each(function () {
		var b = true, e = null != a && a + "queueHooks", f = n.timers, g = n._data(this);
		if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
		for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = false, f.splice(e, 1));
		!b && c || n.dequeue(this, a);
	  });
	}, finish: function (a) {
	  return a !== false && (a = a || "fx"), this.each(function () {
		var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
		for (c.finish = true, n.queue(this, a, []), e && e.stop && e.stop.call(this, true), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(true), f.splice(b, 1));
		for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
		delete c.finish;
	  });
	}}), n.each(["toggle", "show", "hide"], function (a, b) {
	  var c = n.fn[b];
	  n.fn[b] = function (a, d, e) {
		return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, true), a, d, e);
	  };
	}), n.each({slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
	  n.fn[a] = function (a, c, d) {
		return this.animate(b, a, c, d);
	  };
	}), n.timers = [], n.fx.tick = function () {
	  var a, b = n.timers, c = 0;
	  for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
	  b.length || n.fx.stop(), hb = void 0;
	}, n.fx.timer = function (a) {
	  n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	}, n.fx.interval = 13, n.fx.start = function () {
	  ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
	}, n.fx.stop = function () {
	  a.clearInterval(ib), ib = null;
	}, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (b, c) {
	  return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
		var e = a.setTimeout(c, b);
		d.stop = function () {
		  a.clearTimeout(e);
		};
	  });
	}, function () {
	  var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
	  c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = true, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
	}();
	var rb = /\r/g, sb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({val: function (a) {
	  var b, c, d, e = this[0];
	  {
		if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
		  var e;
		  1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
			return null == a ? "" : a + "";
		  })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
		});
		if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
	  }
	}}), n.extend({valHooks: {option: {get: function (a) {
	  var b = n.find.attr(a, "value");
	  return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
	}}, select: {get: function (a) {
	  for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
		if (b = n(c).val(), f) return b;
		g.push(b);
	  }
	  return g;
	}, set: function (a, b) {
	  var c, d, e = a.options, f = n.makeArray(b), g = e.length;
	  while (g--) if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
		d.selected = c = true;
	  } catch (h) {
		d.scrollHeight;
	  } else d.selected = false;
	  return c || (a.selectedIndex = -1), e;
	}}}}), n.each(["radio", "checkbox"], function () {
	  n.valHooks[this] = {set: function (a, b) {
		return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
	  }}, l.checkOn || (n.valHooks[this].get = function (a) {
		return null === a.getAttribute("value") ? "on" : a.value;
	  });
	});
	var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
	n.fn.extend({attr: function (a, b) {
	  return Y(this, n.attr, a, b, arguments.length > 1);
	}, removeAttr: function (a) {
	  return this.each(function () {
		n.removeAttr(this, a);
	  });
	}}), n.extend({attr: function (a, b, c) {
	  var d, e, f = a.nodeType;
	  if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
	}, attrHooks: {type: {set: function (a, b) {
	  if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
		var c = a.value;
		return a.setAttribute("type", b), c && (a.value = c), b;
	  }
	}}}, removeAttr: function (a, b) {
	  var c, d, e = 0, f = b && b.match(G);
	  if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = false : a[n.camelCase("default-" + c)] = a[d] = false : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
	}}), ub = {set: function (a, b, c) {
	  return b === false ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = true, c;
	}}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
	  var c = vb[b] || n.find.attr;
	  yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
		var e, f;
		return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
	  } : vb[b] = function (a, b, c) {
		return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
	  };
	}), yb && xb || (n.attrHooks.value = {set: function (a, b, c) {
	  return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
	}}), xb || (tb = {set: function (a, b, c) {
	  var d = a.getAttributeNode(c);
	  return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
	}}, vb.id = vb.name = vb.coords = function (a, b, c) {
	  var d;
	  return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
	}, n.valHooks.button = {get: function (a, b) {
	  var c = a.getAttributeNode(b);
	  return c && c.specified ? c.value : void 0;
	}, set: tb.set}, n.attrHooks.contenteditable = {set: function (a, b, c) {
	  tb.set(a, "" === b ? false : b, c);
	}}, n.each(["width", "height"], function (a, b) {
	  n.attrHooks[b] = {set: function (a, c) {
		return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
	  }};
	})), l.style || (n.attrHooks.style = {get: function (a) {
	  return a.style.cssText || void 0;
	}, set: function (a, b) {
	  return a.style.cssText = b + "";
	}});
	var zb = /^(?:input|select|textarea|button|object)$/i, Ab = /^(?:a|area)$/i;
	n.fn.extend({prop: function (a, b) {
	  return Y(this, n.prop, a, b, arguments.length > 1);
	}, removeProp: function (a) {
	  return a = n.propFix[a] || a, this.each(function () {
		try {
		  this[a] = void 0, delete this[a];
		} catch (b) {}
	  });
	}}), n.extend({prop: function (a, b, c) {
	  var d, e, f = a.nodeType;
	  if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	}, propHooks: {tabIndex: {get: function (a) {
	  var b = n.find.attr(a, "tabindex");
	  return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
	}}}, propFix: {for: "htmlFor", class: "className"}}), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
	  n.propHooks[b] = {get: function (a) {
		return a.getAttribute(b, 4);
	  }};
	}), l.optSelected || (n.propHooks.selected = {get: function (a) {
	  var b = a.parentNode;
	  return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
	}, set: function (a) {
	  var b = a.parentNode;
	  b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
	}}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	  n.propFix[this.toLowerCase()] = this;
	}), l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;
	n.fn.extend({addClass: function (a) {
	  var b, c, d, e, f, g, h, i = 0;
	  if (n.isFunction(a)) return this.each(function (b) {
		n(this).addClass(a.call(this, b, n.attr(this, "class") || ""));
	  });
	  if ("string" == typeof a && a) {
		b = a.match(G) || [];
		while (c = this[i++]) if (e = n.attr(c, "class") || "", d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
		  g = 0;
		  while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
		  h = n.trim(d), e !== h && n.attr(c, "class", h);
		}
	  }
	  return this;
	}, removeClass: function (a) {
	  var b, c, d, e, f, g, h, i = 0;
	  if (n.isFunction(a)) return this.each(function (b) {
		n(this).removeClass(a.call(this, b, n.attr(this, "class") || ""));
	  });
	  if (!arguments.length) return this.attr("class", "");
	  if ("string" == typeof a && a) {
		b = a.match(G) || [];
		while (c = this[i++]) if (e = n.attr(c, "class") || "", d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
		  g = 0;
		  while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
		  h = n.trim(d), e !== h && n.attr(c, "class", h);
		}
	  }
	  return this;
	}, toggleClass: function (a, b) {
	  var c = typeof a;
	  return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
		n(this).toggleClass(a.call(this, c, n.attr(this, "class") || "", b), b);
	  }) : this.each(function () {
		var b, d, e, f;
		if ("string" === c) {
		  d = 0, e = n(this), f = a.match(G) || [];
		  while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
		} else void 0 !== a && "boolean" !== c || (b = n.attr(this, "class") || "", b && n._data(this, "__className__", b), n.attr(this, "class", b || a === false ? "" : n._data(this, "__className__") || ""));
	  });
	}, hasClass: function (a) {
	  var b, c, d = 0;
	  b = " " + a + " ";
	  while (c = this[d++]) if (1 === c.nodeType && (" " + (n.attr(c, "class") || "") + " ").replace(Bb, " ").indexOf(b) > -1) return true;
	  return false;
	}}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	  n.fn[b] = function (a, c) {
		return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	  };
	}), n.fn.extend({hover: function (a, b) {
	  return this.mouseenter(a).mouseleave(b || a);
	}});
	var Db = a.location, Eb = n.now(), Fb = /\?/, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function (b) {
	  if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
	  var c, d = null, e = n.trim(b + "");
	  return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
		return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
	  })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
	}, n.parseXML = function (b) {
	  var c, d;
	  if (!b || "string" != typeof b) return null;
	  try {
		a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
	  } catch (e) {
		c = void 0;
	  }
	  return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
	};
	var Hb = /#.*$/, Ib = /([?&])_=[^&]*/, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lb = /^(?:GET|HEAD)$/, Mb = /^\/\//, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ob = {}, Pb = {}, Qb = "*/".concat("*"), Rb = Db.href, Sb = Nb.exec(Rb.toLowerCase()) || [];
	function Tb(a) {
	  return function (b, c) {
		"string" != typeof b && (c = b, b = "*");
		var d, e = 0, f = b.toLowerCase().match(G) || [];
		if (n.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	  };
	}
	function Ub(a, b, c, d) {
	  var e = {}, f = a === Pb;
	  function g(h) {
		var i;
		return e[h] = true, n.each(a[h] || [], function (a, h) {
		  var j = h(b, c, d);
		  return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), false);
		}), i;
	  }
	  return g(b.dataTypes[0]) || !e["*"] && g("*");
	}
	function Vb(a, b) {
	  var c, d, e = n.ajaxSettings.flatOptions || {};
	  for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
	  return c && n.extend(true, a, c), a;
	}
	function Wb(a, b, c) {
	  var d, e, f, g, h = a.contents, i = a.dataTypes;
	  while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
	  if (e) for (g in h) if (h[g] && h[g].test(e)) {
		i.unshift(g);
		break;
	  }
	  if (i[0] in c) f = i[0]; else {
		for (g in c) {
		  if (!i[0] || a.converters[g + " " + i[0]]) {
			f = g;
			break;
		  }
		  d || (d = g);
		}
		f = f || d;
	  }
	  return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}
	function Xb(a, b, c, d) {
	  var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
	  if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
	  f = k.shift();
	  while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
		if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
		  g === true ? g = j[e] : j[e] !== true && (f = h[0], k.unshift(h[1]));
		  break;
		}
		if (g !== true) if (g && a.throws) b = g(b); else try {
		  b = g(b);
		} catch (l) {
		  return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f};
		}
	  }
	  return {state: "success", data: b};
	}
	n.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": n.parseJSON, "text xml": n.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function (a, b) {
	  return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
	}, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function (b, c) {
	  "object" == typeof b && (c = b, b = void 0), c = c || {};
	  var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {readyState: 0, getResponseHeader: function (a) {
		var b;
		if (2 === u) {
		  if (!k) {
			k = {};
			while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2];
		  }
		  b = k[a.toLowerCase()];
		}
		return null == b ? null : b;
	  }, getAllResponseHeaders: function () {
		return 2 === u ? g : null;
	  }, setRequestHeader: function (a, b) {
		var c = a.toLowerCase();
		return u || (a = t[c] = t[c] || a, s[a] = b), this;
	  }, overrideMimeType: function (a) {
		return u || (l.mimeType = a), this;
	  }, statusCode: function (a) {
		var b;
		if (a) if (2 > u) for (b in a) r[b] = [r[b], a[b]]; else w.always(a[w.status]);
		return this;
	  }, abort: function (a) {
		var b = a || v;
		return j && j.abort(b), y(0, b), this;
	  }};
	  if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
	  i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === false && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== false || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
	  for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
	  if (l.beforeSend && (l.beforeSend.call(m, w, l) === false || 2 === u)) return w.abort();
	  v = "abort";
	  for (e in {success: 1, error: 1, complete: 1}) w[e](l[e]);
	  if (j = Ub(Pb, l, c, w)) {
		if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
		l.async && l.timeout > 0 && (h = a.setTimeout(function () {
		  w.abort("timeout");
		}, l.timeout));
		try {
		  u = 1, j.send(s, y);
		} catch (x) {
		  if (!(2 > u)) throw x;
		  y(-1, x);
		}
	  } else y(-1, "No Transport");
	  function y(b, c, d, e) {
		var k, s, t, v, x, y = c;
		2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
	  }
	  return w;
	}, getJSON: function (a, b, c) {
	  return n.get(a, b, c, "json");
	}, getScript: function (a, b) {
	  return n.get(a, void 0, b, "script");
	}}), n.each(["get", "post"], function (a, b) {
	  n[b] = function (a, c, d, e) {
		return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({url: a, type: b, dataType: e, data: c, success: d}, n.isPlainObject(a) && a));
	  };
	}), n._evalUrl = function (a) {
	  return n.ajax({url: a, type: "GET", dataType: "script", cache: true, async: false, global: false, throws: true});
	}, n.fn.extend({wrapAll: function (a) {
	  if (n.isFunction(a)) return this.each(function (b) {
		n(this).wrapAll(a.call(this, b));
	  });
	  if (this[0]) {
		var b = n(a, this[0].ownerDocument).eq(0).clone(true);
		this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
		  var a = this;
		  while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
		  return a;
		}).append(this);
	  }
	  return this;
	}, wrapInner: function (a) {
	  return n.isFunction(a) ? this.each(function (b) {
		n(this).wrapInner(a.call(this, b));
	  }) : this.each(function () {
		var b = n(this), c = b.contents();
		c.length ? c.wrapAll(a) : b.append(a);
	  });
	}, wrap: function (a) {
	  var b = n.isFunction(a);
	  return this.each(function (c) {
		n(this).wrapAll(b ? a.call(this, c) : a);
	  });
	}, unwrap: function () {
	  return this.parent().each(function () {
		n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
	  }).end();
	}});
	function Zb(a) {
	  if (!n.contains(a.ownerDocument || d, a)) return true;
	  while (a && 1 === a.nodeType) {
		if ("none" === (a.style && a.style.display || n.css(a, "display")) || "hidden" === a.type) return true;
		a = a.parentNode;
	  }
	  return false;
	}
	n.expr.filters.hidden = function (a) {
	  return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
	}, n.expr.filters.visible = function (a) {
	  return !n.expr.filters.hidden(a);
	};
	var $b = /%20/g, _b = /\[\]$/, ac = /\r?\n/g, bc = /^(?:submit|button|image|reset|file)$/i, cc = /^(?:input|select|textarea|keygen)/i;
	function dc(a, b, c, d) {
	  var e;
	  if (n.isArray(b)) n.each(b, function (b, e) {
		c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
	  }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) dc(a + "[" + e + "]", b[e], c, d);
	}
	n.param = function (a, b) {
	  var c, d = [], e = function (a, b) {
		b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	  };
	  if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
		e(this.name, this.value);
	  }); else for (c in a) dc(c, a[c], b, e);
	  return d.join("&").replace($b, "+");
	}, n.fn.extend({serialize: function () {
	  return n.param(this.serializeArray());
	}, serializeArray: function () {
	  return this.map(function () {
		var a = n.prop(this, "elements");
		return a ? n.makeArray(a) : this;
	  }).filter(function () {
		var a = this.type;
		return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
	  }).map(function (a, b) {
		var c = n(this).val();
		return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
		  return {name: b.name, value: a.replace(ac, "\r\n")};
		}) : {name: b.name, value: c.replace(ac, "\r\n")};
	  }).get();
	}}), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
	  return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
	} : hc;
	var ec = 0, fc = {}, gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
	  for (var a in fc) fc[a](void 0, true);
	}), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
	  if (!b.crossDomain || l.cors) {
		var c;
		return {send: function (d, e) {
		  var f, g = b.xhr(), h = ++ec;
		  if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) g[f] = b.xhrFields[f];
		  b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
		  for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
		  g.send(b.hasContent && b.data || null), c = function (a, d) {
			var f, i, j;
			if (c && (d || 4 === g.readyState)) if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort(); else {
			  j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
			  try {
				i = g.statusText;
			  } catch (k) {
				i = "";
			  }
			  f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
			}
			j && e(f, i, j, g.getAllResponseHeaders());
		  }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c();
		}, abort: function () {
		  c && c(void 0, true);
		}};
	  }
	});
	function hc() {
	  try {
		return new a.XMLHttpRequest;
	  } catch (b) {}
	}
	function ic() {
	  try {
		return new a.ActiveXObject("Microsoft.XMLHTTP");
	  } catch (b) {}
	}
	n.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /\b(?:java|ecma)script\b/}, converters: {"text script": function (a) {
	  return n.globalEval(a), a;
	}}}), n.ajaxPrefilter("script", function (a) {
	  void 0 === a.cache && (a.cache = false), a.crossDomain && (a.type = "GET", a.global = false);
	}), n.ajaxTransport("script", function (a) {
	  if (a.crossDomain) {
		var b, c = d.head || n("head")[0] || d.documentElement;
		return {send: function (e, f) {
		  b = d.createElement("script"), b.async = true, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
			(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
		  }, c.insertBefore(b, c.firstChild);
		}, abort: function () {
		  b && b.onload(void 0, true);
		}};
	  }
	});
	var jc = [], kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
	  var a = jc.pop() || n.expando + "_" + Eb++;
	  return this[a] = true, a;
	}}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
	  var e, f, g, h = b.jsonp !== false && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
	  return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== false && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
		return g || n.error(e + " was not called"), g[0];
	  }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
		g = arguments;
	  }, d.always(function () {
		void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
	  }), "script") : void 0;
	}), n.parseHTML = function (a, b, c) {
	  if (!a || "string" != typeof a) return null;
	  "boolean" == typeof b && (c = b, b = false), b = b || d;
	  var e = x.exec(a), f = !c && [];
	  return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
	};
	var lc = n.fn.load;
	n.fn.load = function (a, b, c) {
	  if ("string" != typeof a && lc) return lc.apply(this, arguments);
	  var d, e, f, g = this, h = a.indexOf(" ");
	  return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({url: a, type: e || "GET", dataType: "html", data: b}).done(function (a) {
		f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
	  }).always(c && function (a, b) {
		g.each(function () {
		  c.apply(this, f || [a.responseText, b, a]);
		});
	  }), this;
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	  n.fn[b] = function (a) {
		return this.on(b, a);
	  };
	}), n.expr.filters.animated = function (a) {
	  return n.grep(n.timers, function (b) {
		return a === b.elem;
	  }).length;
	};
	function mc(a) {
	  return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : false;
	}
	n.offset = {setOffset: function (a, b, c) {
	  var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
	  "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	}}, n.fn.extend({offset: function (a) {
	  if (arguments.length) return void 0 === a ? this : this.each(function (b) {
		n.offset.setOffset(this, a, b);
	  });
	  var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
	  if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : d;
	}, position: function () {
	  if (this[0]) {
		var a, b, c = {top: 0, left: 0}, d = this[0];
		return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", true), c.left += n.css(a[0], "borderLeftWidth", true)), {top: b.top - c.top - n.css(d, "marginTop", true), left: b.left - c.left - n.css(d, "marginLeft", true)};
	  }
	}, offsetParent: function () {
	  return this.map(function () {
		var a = this.offsetParent;
		while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
		return a || Qa;
	  });
	}}), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
	  var c = /Y/.test(b);
	  n.fn[a] = function (d) {
		return Y(this, function (a, d, e) {
		  var f = mc(a);
		  return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
		}, a, d, arguments.length, null);
	  };
	}), n.each(["top", "left"], function (a, b) {
	  n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
		return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
	  });
	}), n.each({Height: "height", Width: "width"}, function (a, b) {
	  n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
		n.fn[d] = function (d, e) {
		  var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === true || e === true ? "margin" : "border");
		  return Y(this, function (b, c, d) {
			var e;
			return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
		  }, b, f ? d : void 0, f, null);
		};
	  });
	}), n.fn.extend({bind: function (a, b, c) {
	  return this.on(a, null, b, c);
	}, unbind: function (a, b) {
	  return this.off(a, null, b);
	}, delegate: function (a, b, c, d) {
	  return this.on(b, a, c, d);
	}, undelegate: function (a, b, c) {
	  return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	}}), n.fn.size = function () {
	  return this.length;
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
	  return n;
	});
	var nc = a.jQuery, oc = a.$;
	return n.noConflict = function (b) {
	  return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
	}, b || (a.jQuery = a.$ = n), n;
  });
  (function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
  }(this, function () {
	"use strict";
	function t(e, t) {
	  if (1 !== e.nodeType) return [];
	  var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
	  return t ? n[t] : n;
	}
	function o(e) {
	  return "HTML" === e.nodeName ? e : e.parentNode || e.host;
	}
	function n(e) {
	  if (!e) return document.body;
	  switch (e.nodeName) {
		case "HTML":
		case "BODY":
		  return e.ownerDocument.body;
		case "#document":
		  return e.body;
	  }
	  var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
	  return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
	}
	function i(e) {
	  return e && e.referenceNode ? e.referenceNode : e;
	}
	function r(e) {
	  return 11 === e ? re : 10 === e ? pe : re || pe;
	}
	function p(e) {
	  if (!e) return document.documentElement;
	  for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
	  var i = n && n.nodeName;
	  return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
	}
	function s(e) {
	  var t = e.nodeName;
	  return "BODY" !== t && ("HTML" === t || p(e.firstElementChild) === e);
	}
	function d(e) {
	  return null === e.parentNode ? e : d(e.parentNode);
	}
	function a(e, t) {
	  if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
	  var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
	  r.setStart(n, 0), r.setEnd(i, 0);
	  var l = r.commonAncestorContainer;
	  if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
	  var f = d(e);
	  return f.host ? a(f.host, t) : a(e, d(t).host);
	}
	function l(e) {
	  var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top", o = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
	  if ("BODY" === n || "HTML" === n) {
		var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
		return r[o];
	  }
	  return e[o];
	}
	function f(e, t) {
	  var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, "top"), i = l(t, "left"), r = o ? -1 : 1;
	  return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
	}
	function m(e, t) {
	  var o = "x" === t ? "Left" : "Top", n = "Left" == o ? "Right" : "Bottom";
	  return parseFloat(e["border" + o + "Width"]) + parseFloat(e["border" + n + "Width"]);
	}
	function c(e) {
	  var t = e.body, o = e.documentElement, n = r(10) && getComputedStyle(o);
	  return {height: ee(t.offsetHeight, t.scrollHeight, o.clientHeight, o.offsetHeight, o.scrollHeight, r(10) ? parseInt(o.offsetHeight) + parseInt(n["margin" + "Top"]) + parseInt(n["margin" + "Bottom"]) : 0), width: ee(t.offsetWidth, t.scrollWidth, o.clientWidth, o.offsetWidth, o.scrollWidth, r(10) ? parseInt(o.offsetWidth) + parseInt(n["margin" + "Left"]) + parseInt(n["margin" + "Right"]) : 0)};
	}
	function u(e) {
	  var o = {};
	  try {
		if (r(10)) {
		  o = e.getBoundingClientRect();
		  var n = l(e, "top"), i = l(e, "left");
		  o.top += n, o.left += i, o.bottom += n, o.right += i;
		} else o = e.getBoundingClientRect();
	  } catch (t) {}
	  var p = {left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top}, s = "HTML" === e.nodeName ? c(e.ownerDocument) : {}, d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a;
	  if (f || h) {
		var u = t(e);
		f -= m(u, "x"), h -= m(u, "y"), p.width -= f, p.height -= h;
	  }
	  return le({}, p, {right: p.left + p.width, bottom: p.top + p.height});
	}
	function b(e, o) {
	  var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = "HTML" === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth), c = parseFloat(m.borderLeftWidth);
	  i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
	  var b = le({}, {top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height}, {right: {top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height}.left + {top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height}.width, bottom: {top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height}.top + {top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height}.height});
	  if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
		var w = parseFloat(m.marginTop), y = parseFloat(m.marginLeft);
		b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
	  }
	  return (p && !i ? o.contains(l) : o === l && "BODY" !== l.nodeName) && (b = f(b, o)), b;
	}
	function w(e) {
	  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l(o), s = t ? 0 : l(o, "left"), d = {top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r};
	  return le({}, d, {right: d.left + d.width, bottom: d.top + d.height});
	}
	function y(e) {
	  var n = e.nodeName;
	  if ("BODY" === n || "HTML" === n) return false;
	  if ("fixed" === t(e, "position")) return true;
	  var i = o(e);
	  return !!i && y(i);
	}
	function E(e) {
	  if (!e || !e.parentElement || r()) return document.documentElement;
	  for (var o = e.parentElement; o && "none" === t(o, "transform");) o = o.parentElement;
	  return o || document.documentElement;
	}
	function v(e, t, r, p) {
	  var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = {top: 0, left: 0}, l = s ? E(e) : a(e, i(t));
	  if ("viewport" === p) d = w(l, s); else {
		var f;
		"scrollParent" === p ? (f = n(o(t)), "BODY" === f.nodeName && (f = e.ownerDocument.documentElement)) : "window" === p ? f = e.ownerDocument.documentElement : f = p;
		var m = b(f, l, s);
		if ("HTML" === f.nodeName && !y(l)) {
		  var h = c(e.ownerDocument), g = h.height, u = h.width;
		  d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left;
		} else d = m;
	  }
	  r = r || 0;
	  var v = "number" == typeof r;
	  return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d;
	}
	function x(e) {
	  var t = e.width, o = e.height;
	  return t * o;
	}
	function O(e, t, o, n, i) {
	  var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
	  if (-1 === e.indexOf("auto")) return e;
	  var p = v(o, n, r, i), s = {top: {width: p.width, height: t.top - p.top}, right: {width: p.right - t.right, height: p.height}, bottom: {width: p.width, height: p.bottom - t.bottom}, left: {width: t.left - p.left, height: p.height}}, d = Object.keys(s).map(function (e) {
		return le({key: e}, s[e], {area: x(s[e])});
	  }).sort(function (e, t) {
		return t.area - e.area;
	  }), a = d.filter(function (e) {
		var t = e.width, n = e.height;
		return t >= o.clientWidth && n >= o.clientHeight;
	  }), l = 0 < a.length ? a[0].key : d[0].key, f = e.split("-")[1];
	  return l + (f ? "-" + f : "");
	}
	function L(e, t, o) {
	  var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E(t) : a(t, i(o));
	  return b(o, r, n);
	}
	function S(e) {
	  var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {width: e.offsetWidth + i, height: e.offsetHeight + n};
	  return r;
	}
	function T(e) {
	  var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
	  return e.replace(/left|right|bottom|top/g, function (e) {
		return t[e];
	  });
	}
	function C(e, t, o) {
	  o = o.split("-")[0];
	  var n = S(e), i = {width: n.width, height: n.height}, r = -1 !== ["right", "left"].indexOf(o), p = r ? "top" : "left", s = r ? "left" : "top", d = r ? "height" : "width", a = r ? "width" : "height";
	  return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
	}
	function D(e, t) {
	  return Array.prototype.find ? e.find(t) : e.filter(t)[0];
	}
	function N(e, t, o) {
	  if (Array.prototype.findIndex) return e.findIndex(function (e) {
		return e[t] === o;
	  });
	  var n = D(e, function (e) {
		return e[t] === o;
	  });
	  return e.indexOf(n);
	}
	function P(t, o, n) {
	  var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
	  return i.forEach(function (t) {
		t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var n = t.function || t.fn;
		t.enabled && (n && "[object Function]" === {}.toString.call(n)) && (o.offsets.popper = le({}, o.offsets.popper, {right: o.offsets.popper.left + o.offsets.popper.width, bottom: o.offsets.popper.top + o.offsets.popper.height}), o.offsets.reference = le({}, o.offsets.reference, {right: o.offsets.reference.left + o.offsets.reference.width, bottom: o.offsets.reference.top + o.offsets.reference.height}), o = n(o, t));
	  }), o;
	}
	function k() {
	  if (!this.state.isDestroyed) {
		var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {}};
		e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = true, this.options.onCreate(e));
	  }
	}
	function W(e, t) {
	  return e.some(function (e) {
		var o = e.name, n = e.enabled;
		return n && o === t;
	  });
	}
	function B(e) {
	  for (var t = [false, "ms", "Webkit", "Moz", "O"], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
		var i = t[n], r = i ? "" + i + o : e;
		if ("undefined" != typeof document.body.style[r]) return r;
	  }
	  return null;
	}
	function A(e) {
	  var t = e.ownerDocument;
	  return t ? t.defaultView : window;
	}
	function M(e, t, o, i) {
	  var r = "BODY" === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
	  p.addEventListener(t, o, {passive: true}), r || M(n(p.parentNode), t, o, i), i.push(p);
	}
	function F(e, t, o, i) {
	  o.updateBound = i, A(e).addEventListener("resize", o.updateBound, {passive: true});
	  var r = n(e);
	  return M(r, "scroll", o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = true, o;
	}
	function I() {
	  this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
	}
	function R(e, t) {
	  return A(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
		e.removeEventListener("scroll", t.updateBound);
	  }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = false, t;
	}
	function U() {
	  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
	}
	function V(e, t) {
	  Object.keys(t).forEach(function (o) {
		var n = "";
		-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(o) && ("" !== t[o] && !isNaN(parseFloat(t[o])) && isFinite(t[o])) && (n = "px"), e.style[o] = t[o] + n;
	  });
	}
	function j(e, t) {
	  Object.keys(t).forEach(function (o) {
		var n = t[o];
		false === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
	  });
	}
	function q(e, t) {
	  var o = e.offsets, n = o.popper, i = o.reference, r = $, s = r(i.width), d = r(n.width), a = -1 !== ["left", "right"].indexOf(e.placement), l = -1 !== e.placement.indexOf("-"), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p;
	  return {left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left), top: m(n.top), bottom: m(n.bottom), right: f(n.right)};
	}
	function K(e, t, o) {
	  var n = D(e, function (e) {
		var o = e.name;
		return o === t;
	  }), i = !!n && e.some(function (e) {
		return e.name === o && e.enabled && e.order < n.order;
	  });
	  if (!i) {
		var r = "`" + t + "`";
		console.warn("`" + o + "`" + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
	  }
	  return i;
	}
	function z(e) {
	  return "end" === e ? "start" : "start" === e ? "end" : e;
	}
	function G(e) {
	  var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o));
	  return t ? n.reverse() : n;
	}
	function _(e, t, o, n) {
	  var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
	  if (!r) return e;
	  if (0 === p.indexOf("%")) {
		var s;
		switch (p) {
		  case "%p":
			s = o;
			break;
		  case "%":
		  case "%r":
		  default:
			s = n;
		}
		var d = le({}, s, {right: s.left + s.width, bottom: s.top + s.height});
		return d[t] / 100 * r;
	  }
	  if ("vh" === p || "vw" === p) {
		var a;
		return a = "vh" === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
	  }
	  return r;
	}
	function X(e, t, o, n) {
	  var i = [0, 0], r = -1 !== ["right", "left"].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
		return e.trim();
	  }), s = p.indexOf(D(p, function (e) {
		return -1 !== e.search(/,|\s/);
	  }));
	  p[s] && -1 === p[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	  var d = /\s*,\s*|\s+/, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
	  return a = a.map(function (e, n) {
		var i = (1 === n ? !r : r) ? "height" : "width", p = false;
		return e.reduce(function (e, t) {
		  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, p = true, e) : p ? (e[e.length - 1] += t, p = false, e) : e.concat(t);
		}, []).map(function (e) {
		  return _(e, i, t, o);
		});
	  }), a.forEach(function (e, t) {
		e.forEach(function (o, n) {
		  "" !== o && !isNaN(parseFloat(o)) && isFinite(o) && (i[t] += o * ("-" === e[n - 1] ? -1 : 1));
		});
	  }), i;
	}
	function J(e, t) {
	  var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split("-")[0];
	  return o = "" !== +n && !isNaN(parseFloat(+n)) && isFinite(+n) ? [+n, 0] : X(n, p, s, d), "left" === d ? (p.top += o[0], p.left -= o[1]) : "right" === d ? (p.top += o[0], p.left += o[1]) : "top" === d ? (p.left += o[0], p.top -= o[1]) : "bottom" === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
	}
	var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator, oe = function () {
	  for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
	  return 0;
	}(), ne = te && window.Promise, ie = ne ? function (e) {
	  var t = false;
	  return function () {
		t || (t = true, window.Promise.resolve().then(function () {
		  t = false, e && "[object Function]" === {}.toString.call(e);
		}));
	  };
	} : function (e) {
	  var t = false;
	  return function () {
		t || (t = true, setTimeout(function () {
		  t = false, e && "[object Function]" === {}.toString.call(e);
		}, oe));
	  };
	}, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
	  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}, de = function () {
	  function e(e, t) {
		for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, o.key, o);
	  }
	  return function (t, o, n) {
		return o && (t.prototype && "[object Function]" === {}.toString.call(t.prototype)), n && (t && "[object Function]" === {}.toString.call(t)), t;
	  };
	}(), le = Object.assign || function (e) {
	  for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	  return e;
	}, fe = te && /Firefox/i.test(navigator.userAgent), me = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], he = me.slice(3), ce = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"}, ge = function () {
	  function t(o, n) {
		var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
		se(this, t), this.scheduleUpdate = function () {
		  return requestAnimationFrame(i.update);
		}, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {isDestroyed: false, isCreated: false, scrollParents: []}, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
		  i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
		}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
		  return le({name: e}, i.options.modifiers[e]);
		}).sort(function (e, t) {
		  return e.order - t.order;
		}), this.modifiers.forEach(function (t) {
		  t.enabled && (t.onLoad && "[object Function]" === {}.toString.call(t.onLoad)) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
		}), this.update();
		var p = this.options.eventsEnabled;
		p && this.enableEventListeners(), this.state.eventsEnabled = p;
	  }
	  return de(t, [{key: "update", value: function () {
		return k.call(this);
	  }}, {key: "destroy", value: function () {
		return H.call(this);
	  }}, {key: "enableEventListeners", value: function () {
		return I.call(this);
	  }}, {key: "disableEventListeners", value: function () {
		return U.call(this);
	  }}]), t;
	}();
	return ge.Utils = ("undefined" == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function () {}, onUpdate: function () {}, modifiers: {shift: {order: 100, enabled: true, fn: function (e) {
	  var t = e.placement, o = t.split("-")[0], n = t.split("-")[1];
	  if (n) {
		var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== ["bottom", "top"].indexOf(o), d = s ? "left" : "top", a = s ? "width" : "height", l = {start: (d in {} ? Object.defineProperty({}, d, {value: r[d], enumerable: true, configurable: true, writable: true}) : {}[d] = r[d], {}), end: (d in {} ? Object.defineProperty({}, d, {value: r[d] + r[a] - p[a], enumerable: true, configurable: true, writable: true}) : {}[d] = r[d] + r[a] - p[a], {})};
		e.offsets.popper = le({}, p, l[n]);
	  }
	  return e;
	}}, offset: {order: 200, enabled: true, fn: J, offset: 0}, preventOverflow: {order: 300, enabled: true, fn: function (e, t) {
	  var o = t.boundariesElement || p(e.instance.popper);
	  e.instance.reference === o && (o = p(o));
	  var n = B("transform"), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n];
	  i.top = "", i.left = "", i[n] = "";
	  var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
	  i.top = r, i.left = s, i[n] = d, t.boundaries = a;
	  var l = t.priority, f = e.offsets.popper, m = {primary: function (e) {
		var o = f[e];
		return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), (e in {} ? Object.defineProperty({}, e, {value: o, enumerable: true, configurable: true, writable: true}) : {}[e] = o, {});
	  }, secondary: function (e) {
		var o = "right" === e ? "left" : "top", n = f[o];
		return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ("right" === e ? f.width : f.height))), (o in {} ? Object.defineProperty({}, o, {value: n, enumerable: true, configurable: true, writable: true}) : {}[o] = n, {});
	  }};
	  return l.forEach(function (e) {
		var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
		f = le({}, f, m[t](e));
	  }), e.offsets.popper = f, e;
	}, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"}, keepTogether: {order: 400, enabled: true, fn: function (e) {
	  var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split("-")[0], r = Z, p = -1 !== ["top", "bottom"].indexOf(i), s = p ? "right" : "bottom", d = p ? "left" : "top", a = p ? "width" : "height";
	  return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
	}}, arrow: {order: 500, enabled: true, fn: function (e, o) {
	  var n;
	  if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
	  var i = o.element;
	  if ("string" == typeof i) {
		if (i = e.instance.popper.querySelector(i), !i) return e;
	  } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
	  var r = e.placement.split("-")[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== ["left", "right"].indexOf(r), l = a ? "height" : "width", f = a ? "Top" : "Left", m = f.toLowerCase(), h = a ? "left" : "top", c = a ? "bottom" : "right", u = S(i)[l];
	  d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = le({}, e.offsets.popper, {right: e.offsets.popper.left + e.offsets.popper.width, bottom: e.offsets.popper.top + e.offsets.popper.height});
	  var b = d[m] + d[l] / 2 - u / 2, w = t(e.instance.popper), y = parseFloat(w["margin" + f]), E = parseFloat(w["border" + f + "Width"]), v = b - e.offsets.popper[m] - y - E;
	  return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, (m in n ? Object.defineProperty(n, m, {value: $(v), enumerable: true, configurable: true, writable: true}) : n[m] = $(v), n), (h in n ? Object.defineProperty(n, h, {value: "", enumerable: true, configurable: true, writable: true}) : n[h] = "", n), n), e;
	}, element: "[x-arrow]"}, flip: {order: 600, enabled: true, fn: function (e, t) {
	  if (W(e.instance.modifiers, "inner")) return e;
	  if (e.flipped && e.placement === e.originalPlacement) return e;
	  var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split("-")[0], i = T(n), r = e.placement.split("-")[1] || "", p = [];
	  switch (t.behavior) {
		case ce.FLIP:
		  p = [n, i];
		  break;
		case ce.CLOCKWISE:
		  p = G(n);
		  break;
		case ce.COUNTERCLOCKWISE:
		  p = G(n, true);
		  break;
		default:
		  p = t.behavior;
	  }
	  return p.forEach(function (s, d) {
		if (n !== s || p.length === d + 1) return e;
		n = e.placement.split("-")[0], i = T(n);
		var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = "left" === n && f(a.right) > f(l.left) || "right" === n && f(a.left) < f(l.right) || "top" === n && f(a.bottom) > f(l.top) || "bottom" === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = "left" === n && h || "right" === n && c || "top" === n && g || "bottom" === n && u, w = -1 !== ["top", "bottom"].indexOf(n), y = !!t.flipVariations && (w && "start" === r && h || w && "end" === r && c || !w && "start" === r && g || !w && "end" === r && u), E = !!t.flipVariationsByContent && (w && "start" === r && c || w && "end" === r && h || !w && "start" === r && u || !w && "end" === r && g), v = y || E;
		(m || b || v) && (e.flipped = true, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? "-" + r : ""), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"));
	  }), e;
	}, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: false, flipVariationsByContent: false}, inner: {order: 700, enabled: false, fn: function (e) {
	  var t = e.placement, o = t.split("-")[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== ["left", "right"].indexOf(o), s = -1 === ["top", "left"].indexOf(o);
	  return i[p ? "left" : "top"] = r[o] - (s ? i[p ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = le({}, i, {right: i.left + i.width, bottom: i.top + i.height}), e;
	}}, hide: {order: 800, enabled: true, fn: function (e) {
	  if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
	  var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
		return "preventOverflow" === e.name;
	  }).boundaries;
	  if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
		if (true === e.hide) return e;
		e.hide = true, e.attributes["x-out-of-boundaries"] = "";
	  } else {
		if (false === e.hide) return e;
		e.hide = false, e.attributes["x-out-of-boundaries"] = false;
	  }
	  return e;
	}}, computeStyle: {order: 850, enabled: true, fn: function (e, t) {
	  var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
		return "applyStyle" === e.name;
	  }).gpuAcceleration;
	  void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	  var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {position: i.position}, h = q(e, 2 > window.devicePixelRatio || !fe), c = "bottom" === o ? "top" : "bottom", g = "right" === n ? "left" : "right", b = B("transform");
	  if (d = "bottom" == c ? "HTML" === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = "right" == g ? "HTML" === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = "translate3d(" + s + "px, " + d + "px, 0)", m[c] = 0, m[g] = 0, m.willChange = "transform"; else {
		var w = "bottom" == c ? -1 : 1, y = "right" == g ? -1 : 1;
		m[c] = d * w, m[g] = s * y, m.willChange = c + ", " + g;
	  }
	  var E = {"x-placement": e.placement};
	  return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e;
	}, gpuAcceleration: true, x: "bottom", y: "right"}, applyStyle: {order: 900, enabled: true, fn: function (e) {
	  return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e;
	}, onLoad: function (e, t, o, n, i) {
	  var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
	  return t.setAttribute("x-placement", p), V(t, {position: o.positionFixed ? "fixed" : "absolute"}), o;
	}, gpuAcceleration: void 0}}}, ge;
  }));
  !function (t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery);
  }(this, function (t, e) {
	"use strict";
	function i(t, e) {
	  for (var n = 0; n < e.length; n++) {
		var i = e[n];
		i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t, i.key, i);
	  }
	}
	function c(r) {
	  for (var t = 1; t < arguments.length; t++) {
		var o = null != arguments[t] ? arguments[t] : {}, e = Object.keys(o);
		"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
		  return Object.getOwnPropertyDescriptor(o, t).enumerable;
		}))), e.forEach(function (t) {
		  var e, n, i;
		  e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {value: i, enumerable: true, configurable: true, writable: true}) : e[n] = i;
		});
	  }
	  return r;
	}
	for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, M, R, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = function (i) {
	  var e = "transitionend";
	  function t(t) {
		var e = this, n = false;
		return i(this).one(l.TRANSITION_END, function () {
		  n = true;
		}), setTimeout(function () {
		  n || l.triggerTransitionEnd(e);
		}, t), this;
	  }
	  var l = {TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
		for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) ;
		return t;
	  }, getSelectorFromElement: function (t) {
		var e = t.getAttribute("data-target");
		e && "#" !== e || (e = t.getAttribute("href") || "");
		try {
		  return 0 < i(document).find(e).length ? e : null;
		} catch (t) {
		  return null;
		}
	  }, getTransitionDurationFromElement: function (t) {
		if (!t) return 0;
		var e = i(t).css("transition-duration");
		return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
	  }, reflow: function (t) {
		return t.offsetHeight;
	  }, triggerTransitionEnd: function (t) {
		i(t).trigger(e);
	  }, supportsTransitionEnd: function () {
		return Boolean(e);
	  }, isElement: function (t) {
		return (t[0] || t).nodeType;
	  }, typeCheckConfig: function (t, e, n) {
		for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
		  var r = n[i], o = e[i], s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
		  if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
		}
		var a;
	  }};
	  return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {bindType: e, delegateType: e, handle: function (t) {
		if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
	  }}, l;
	}(e = e && e.hasOwnProperty("default") ? e.default : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = {CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api"}, h = "alert", u = "fade", d = "show", p = function () {
	  function i(t) {
		this._element = t;
	  }
	  var t = i.prototype;
	  return t.close = function (t) {
		var e = this._element;
		t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
	  }, t.dispose = function () {
		r.removeData(this._element, o), this._element = null;
	  }, t._getRootElement = function (t) {
		var e = gt.getSelectorFromElement(t), n = false;
		return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n;
	  }, t._triggerCloseEvent = function (t) {
		var e = r.Event(f.CLOSE);
		return r(t).trigger(e), e;
	  }, t._removeElement = function (e) {
		var n = this;
		if (r(e).removeClass(d), r(e).hasClass(u)) {
		  var t = gt.getTransitionDurationFromElement(e);
		  r(e).one(gt.TRANSITION_END, function (t) {
			return n._destroyElement(e, t);
		  }).emulateTransitionEnd(t);
		} else this._destroyElement(e);
	  }, t._destroyElement = function (t) {
		r(t).detach().trigger(f.CLOSED).remove();
	  }, i._jQueryInterface = function (n) {
		return this.each(function () {
		  var t = r(this), e = t.data(o);
		  e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this);
		});
	  }, i._handleDismiss = function (e) {
		return function (t) {
		  t && t.preventDefault(), e.close(this);
		};
	  }, (null && i(i.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}] && i(i, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}]), i), i;
	}(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
	  return r.fn[n] = l, p._jQueryInterface;
	}, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = {CLICK_DATA_API: "click" + v + E, FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E}, N = function () {
	  function n(t) {
		this._element = t;
	  }
	  var t = n.prototype;
	  return t.toggle = function () {
		var t = true, e = true, n = g(this._element).closest(I)[0];
		if (n) {
		  var i = g(this._element).find(D)[0];
		  if (i) {
			if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = false; else {
			  var r = g(n).find(A)[0];
			  r && g(r).removeClass(b);
			}
			if (t) {
			  if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
			  i.checked = !g(this._element).hasClass(b), g(i).trigger("change");
			}
			i.focus(), e = false;
		  }
		}
		e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b);
	  }, t.dispose = function () {
		g.removeData(this._element, _), this._element = null;
	  }, n._jQueryInterface = function (e) {
		return this.each(function () {
		  var t = g(this).data(_);
		  t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]();
		});
	  }, (null && i(n.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}] && i(n, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}]), n), n;
	}(), g(document).on(O.CLICK_DATA_API, w, function (t) {
	  t.preventDefault();
	  var e = t.target;
	  g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle");
	}).on(O.FOCUS_BLUR_DATA_API, w, function (t) {
	  var e = g(t.target).closest(S)[0];
	  g(e).toggleClass(C, /^focus(in)?$/.test(t.type));
	}), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () {
	  return g.fn[m] = y, N._jQueryInterface;
	}, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", M = (k = e).fn[L], R = {interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true}, H = {interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean"}, W = "next", F = "prev", U = "left", B = "right", K = {SLIDE: "slide" + x, SLID: "slid" + x, KEYDOWN: "keydown" + x, MOUSEENTER: "mouseenter" + x, MOUSELEAVE: "mouseleave" + x, TOUCHEND: "touchend" + x, LOAD_DATA_API: "load" + x + j, CLICK_DATA_API: "click" + x + j}, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = {ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]'}, Z = function () {
	  function o(t, e) {
		this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners();
	  }
	  var t = o.prototype;
	  return t.next = function () {
		this._isSliding || this._slide(W);
	  }, t.nextWhenVisible = function () {
		!document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next();
	  }, t.prev = function () {
		this._isSliding || this._slide(F);
	  }, t.pause = function (t) {
		t || (this._isPaused = true), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
	  }, t.cycle = function (t) {
		t || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
	  }, t.to = function (t) {
		var e = this;
		this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0];
		var n = this._getItemIndex(this._activeElement);
		if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () {
		  return e.to(t);
		}); else {
		  if (n === t) return this.pause(), void this.cycle();
		  var i = n < t ? W : F;
		  this._slide(i, this._items[t]);
		}
	  }, t.dispose = function () {
		k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
	  }, t._getConfig = function (t) {
		return t = c({}, R, t), gt.typeCheckConfig(L, t, H), t;
	  }, t._addEventListeners = function () {
		var e = this;
		this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) {
		  return e._keydown(t);
		}), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) {
		  return e.pause(t);
		}).on(K.MOUSELEAVE, function (t) {
		  return e.cycle(t);
		}), "ontouchstart" in document.documentElement && k(this._element).on(K.TOUCHEND, function () {
		  e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
			return e.cycle(t);
		  }, 500 + e._config.interval);
		}));
	  }, t._keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
		  case 37:
			t.preventDefault(), this.prev();
			break;
		  case 39:
			t.preventDefault(), this.next();
		}
	  }, t._getItemIndex = function (t) {
		return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t);
	  }, t._getItemByDirection = function (t, e) {
		var n = t === W, i = t === F, r = this._getItemIndex(e), o = this._items.length - 1;
		if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
		var s = (r + (t === F ? -1 : 1)) % this._items.length;
		return -1 === s ? this._items[this._items.length - 1] : this._items[s];
	  }, t._triggerSlideEvent = function (t, e) {
		var n = this._getItemIndex(t), i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]), r = k.Event(K.SLIDE, {relatedTarget: t, direction: e, from: i, to: n});
		return k(this._element).trigger(r), r;
	  }, t._setActiveIndicatorElement = function (t) {
		if (this._indicatorsElement) {
		  k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);
		  var e = this._indicatorsElement.children[this._getItemIndex(t)];
		  e && k(e).addClass(Q);
		}
	  }, t._slide = function (t, e) {
		var n, i, r, o = this, s = k(this._element).find(J.ACTIVE_ITEM)[0], a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), f = Boolean(this._interval);
		if (t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = false; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
		  this._isSliding = true, f && this.pause(), this._setActiveIndicatorElement(l);
		  var h = k.Event(K.SLID, {relatedTarget: l, direction: r, from: a, to: c});
		  if (k(this._element).hasClass(Y)) {
			k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n);
			var u = gt.getTransitionDurationFromElement(s);
			k(s).one(gt.TRANSITION_END, function () {
			  k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = false, setTimeout(function () {
				return k(o._element).trigger(h);
			  }, 0);
			}).emulateTransitionEnd(u);
		  } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = false, k(this._element).trigger(h);
		  f && this.cycle();
		}
	  }, o._jQueryInterface = function (i) {
		return this.each(function () {
		  var t = k(this).data(P), e = c({}, R, k(this).data());
		  "object" == typeof i && (e = c({}, e, i));
		  var n = "string" == typeof i ? i : e.slide;
		  if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
			if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
			t[n]();
		  } else e.interval && (t.pause(), t.cycle());
		});
	  }, o._dataApiClickHandler = function (t) {
		var e = gt.getSelectorFromElement(this);
		if (e) {
		  var n = k(e)[0];
		  if (n && k(n).hasClass(V)) {
			var i = c({}, k(n).data(), k(this).data()), r = this.getAttribute("data-slide-to");
			r && (i.interval = false), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault();
		  }
		}
	  }, (null && i(o.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return R;
	  }}] && i(o, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return R;
	  }}]), o), o;
	}(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () {
	  k(J.DATA_RIDE).each(function () {
		var t = k(this);
		Z._jQueryInterface.call(t, t.data());
	  });
	}), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () {
	  return k.fn[L] = M, Z._jQueryInterface;
	}, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = {toggle: true, parent: ""}, ot = {toggle: "boolean", parent: "(string|element)"}, st = {SHOW: "show" + nt, SHOWN: "shown" + nt, HIDE: "hide" + nt, HIDDEN: "hidden" + nt, CLICK_DATA_API: "click" + nt + ".data-api"}, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, pt = function () {
	  function a(t, e) {
		this._isTransitioning = false, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
		for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) {
		  var r = n[i], o = gt.getSelectorFromElement(r);
		  null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r));
		}
		this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
	  }
	  var t = a.prototype;
	  return t.toggle = function () {
		$(this._element).hasClass(at) ? this.hide() : this.show();
	  }, t.show = function () {
		var t, e, n = this;
		if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) {
		  var i = $.Event(st.SHOW);
		  if ($(this._element).trigger(i), !i.isDefaultPrevented()) {
			t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null));
			var r = this._getDimension();
			$(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", true), this.setTransitioning(true);
			var o = "scroll" + (r[0].toUpperCase() + r.slice(1)), s = gt.getTransitionDurationFromElement(this._element);
			$(this._element).one(gt.TRANSITION_END, function () {
			  $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(false), $(n._element).trigger(st.SHOWN);
			}).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
		  }
		}
	  }, t.hide = function () {
		var t = this;
		if (!this._isTransitioning && $(this._element).hasClass(at)) {
		  var e = $.Event(st.HIDE);
		  if ($(this._element).trigger(e), !e.isDefaultPrevented()) {
			var n = this._getDimension();
			if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
			  var r = this._triggerArray[i], o = gt.getSelectorFromElement(r);
			  if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", false);
			}
			this.setTransitioning(true);
			this._element.style[n] = "";
			var s = gt.getTransitionDurationFromElement(this._element);
			$(this._element).one(gt.TRANSITION_END, function () {
			  t.setTransitioning(false), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN);
			}).emulateTransitionEnd(s);
		  }
		}
	  }, t.setTransitioning = function (t) {
		this._isTransitioning = t;
	  }, t.dispose = function () {
		$.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
	  }, t._getConfig = function (t) {
		return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t;
	  }, t._getDimension = function () {
		return $(this._element).hasClass(ht) ? ht : ut;
	  }, t._getParent = function () {
		var n = this, t = null;
		gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];
		var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
		return $(t).find(e).each(function (t, e) {
		  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
		}), t;
	  }, t._addAriaAndCollapsedClass = function (t, e) {
		if (t) {
		  var n = $(t).hasClass(at);
		  0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n);
		}
	  }, a._getTargetFromElement = function (t) {
		var e = gt.getSelectorFromElement(t);
		return e ? $(e)[0] : null;
	  }, a._jQueryInterface = function (i) {
		return this.each(function () {
		  var t = $(this), e = t.data(et), n = c({}, rt, t.data(), "object" == typeof i && i ? i : {});
		  if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = false), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i) {
			if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
			e[i]();
		  }
		});
	  }, (null && i(a.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return rt;
	  }}] && i(a, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return rt;
	  }}]), a), a;
	}(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
	  "A" === t.currentTarget.tagName && t.preventDefault();
	  var n = $(this), e = gt.getSelectorFromElement(this);
	  $(e).each(function () {
		var t = $(this), e = t.data(et) ? "toggle" : n.data();
		pt._jQueryInterface.call(t, e);
	  });
	}), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () {
	  return $.fn[tt] = it, pt._jQueryInterface;
	}, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1) if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) {
	  Tt = 1;
	  break;
	}
	var wt = yt && window.Promise ? function (t) {
	  var e = false;
	  return function () {
		e || (e = true, window.Promise.resolve().then(function () {
		  e = false, t();
		}));
	  };
	} : function (t) {
	  var e = false;
	  return function () {
		e || (e = true, setTimeout(function () {
		  e = false, t();
		}, Tt));
	  };
	};
	function Dt(t, e) {
	  if (1 !== t.nodeType) return [];
	  var n = getComputedStyle(t, null);
	  return e ? n[e] : n;
	}
	function At(t) {
	  return "HTML" === t.nodeName ? t : t.parentNode || t.host;
	}
	function St(t) {
	  if (!t) return document.body;
	  switch (t.nodeName) {
		case "HTML":
		case "BODY":
		  return t.ownerDocument.body;
		case "#document":
		  return t.body;
	  }
	  var e = Dt(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
	  return /(auto|scroll|overlay)/.test(n + r + i) ? t : St(At(t));
	}
	var Ot = yt && !(!window.MSInputMethodContext || !document.documentMode), Nt = yt && /MSIE 10/.test(navigator.userAgent);
	function kt(t) {
	  return 11 === t ? Ot : 10 === t ? Nt : Ot || Nt;
	}
	function Lt(t) {
	  if (!t) return document.documentElement;
	  for (var e = kt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
	  var i = n && n.nodeName;
	  return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? Lt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement;
	}
	function Pt(t) {
	  return null !== t.parentNode ? Pt(t.parentNode) : t;
	}
	function xt(t, e) {
	  if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
	  var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, r = n ? e : t, o = document.createRange();
	  o.setStart(i, 0), o.setEnd(r, 0);
	  var s, a, l = o.commonAncestorContainer;
	  if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && Lt(s.firstElementChild) !== s ? Lt(l) : l;
	  var c = Pt(t);
	  return c.host ? xt(c.host, e) : xt(t, Pt(e).host);
	}
	function jt(t) {
	  var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = t.nodeName;
	  if ("BODY" === n || "HTML" === n) {
		var i = t.ownerDocument.documentElement;
		return (t.ownerDocument.scrollingElement || i)[e];
	  }
	  return t[e];
	}
	function Mt(t, e) {
	  var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom";
	  return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10);
	}
	function Ht() {
	  var t = document.body, e = document.documentElement, n = kt(10) && getComputedStyle(e);
	  return {height: Math.max(t.offsetHeight, t.scrollHeight, e.clientHeight, e.offsetHeight, e.scrollHeight, kt(10) ? e.offsetHeight + n["margin" + "Top"] + n["margin" + "Bottom"] : 0), width: Math.max(t.offsetWidth, t.scrollWidth, e.clientWidth, e.offsetWidth, e.scrollWidth, kt(10) ? e.offsetWidth + n["margin" + "Left"] + n["margin" + "Right"] : 0)};
	}
	var Wt = function (t, e) {
	  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	}, Ft = function () {
	  function i(t, e) {
		for (var n = 0; n < e.length; n++) {
		  var i = e[n];
		  i.enumerable = i.enumerable || false, i.configurable = true, "value" in i && (i.writable = true), Object.defineProperty(t, i.key, i);
		}
	  }
	  return function (t, e, n) {
		return e && i(t.prototype, e), n && i(t, n), t;
	  };
	}(), Bt = Object.assign || function (t) {
	  for (var e = 1; e < arguments.length; e++) {
		var n = arguments[e];
		for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
	  }
	  return t;
	};
	function Vt(t) {
	  var e = {};
	  try {
		if (kt(10)) {
		  e = t.getBoundingClientRect();
		  var n = jt(t, "top"), i = jt(t, "left");
		  e.top += n, e.left += i, e.bottom += n, e.right += i;
		} else e = t.getBoundingClientRect();
	  } catch (t) {}
	  var r = {left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top}, o = "HTML" === t.nodeName ? Ht() : {}, s = o.width || t.clientWidth || r.right - r.left, a = o.height || t.clientHeight || r.bottom - r.top, l = t.offsetWidth - s, c = t.offsetHeight - a;
	  if (l || c) {
		var f = Dt(t);
		l -= Mt(f, "x"), c -= Mt(f, "y"), r.width -= l, r.height -= c;
	  }
	  return Bt({}, r, {right: r.left + r.width, bottom: r.top + r.height});
	}
	function Qt(t, e) {
	  var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = kt(10), r = "HTML" === e.nodeName, o = Vt(t), s = Vt(e), a = St(t), l = Dt(e), c = parseFloat(l.borderTopWidth, 10), f = parseFloat(l.borderLeftWidth, 10);
	  n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
	  var h = Bt({}, {top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height}, {right: {top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height}.left + {top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height}.width, bottom: {top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height}.top + {top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height}.height});
	  if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
		var u = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10);
		h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d;
	  }
	  return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function (t, e) {
		var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = jt(e, "top"), r = jt(e, "left"), o = n ? -1 : 1;
		return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t;
	  }(h, e)), h;
	}
	function Yt(t) {
	  if (!t || !t.parentElement || kt()) return document.documentElement;
	  for (var e = t.parentElement; e && "none" === Dt(e, "transform");) e = e.parentElement;
	  return e || document.documentElement;
	}
	function Gt(t, e, n, i) {
	  var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0}, s = r ? Yt(t) : xt(t, e);
	  if ("viewport" === i) o = function (t) {
		var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement, i = Qt(t, n), r = Math.max(n.clientWidth, window.innerWidth || 0), o = Math.max(n.clientHeight, window.innerHeight || 0), s = e ? 0 : jt(n), a = e ? 0 : jt(n, "left");
		return Bt({}, {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o}, {right: {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o}.left + {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o}.width, bottom: {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o}.top + {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o}.height});
	  }(s, r); else {
		var a = void 0;
		"scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
		var l = Qt(a, s, r);
		if ("HTML" !== a.nodeName || function t(e) {
		  var n = e.nodeName;
		  return "BODY" !== n && "HTML" !== n && ("fixed" === Dt(e, "position") || t(At(e)));
		}(s)) o = l; else {
		  var c = Ht(), f = c.height, h = c.width;
		  o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left;
		}
	  }
	  return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o;
	}
	function qt(t, e, i, n, r) {
	  var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
	  if (-1 === t.indexOf("auto")) return t;
	  var s = Gt(i, n, o, r), a = {top: {width: s.width, height: e.top - s.top}, right: {width: s.right - e.right, height: s.height}, bottom: {width: s.width, height: s.bottom - e.bottom}, left: {width: e.left - s.left, height: s.height}}, l = Object.keys(a).map(function (t) {
		return Bt({key: t}, a[t], {area: (e = a[t], e.width * e.height)});
		var e;
	  }).sort(function (t, e) {
		return e.area - t.area;
	  }), c = l.filter(function (t) {
		var e = t.width, n = t.height;
		return e >= i.clientWidth && n >= i.clientHeight;
	  }), f = 0 < c.length ? c[0].key : l[0].key, h = t.split("-")[1];
	  return f + (h ? "-" + h : "");
	}
	function zt(t, e, n) {
	  var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return Qt(n, i ? Yt(e) : xt(e, n), i);
	}
	function Xt(t) {
	  var e = getComputedStyle(t), n = parseFloat(e.marginTop) + parseFloat(e.marginBottom), i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
	  return {width: t.offsetWidth + i, height: t.offsetHeight + n};
	}
	function Jt(t) {
	  var e = {left: "right", right: "left", bottom: "top", top: "bottom"};
	  return t.replace(/left|right|bottom|top/g, function (t) {
		return e[t];
	  });
	}
	function Zt(t, e, n) {
	  n = n.split("-")[0];
	  var i = Xt(t), r = {width: i.width, height: i.height}, o = -1 !== ["right", "left"].indexOf(n), s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
	  return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Jt(a)], r;
	}
	function $t(t, e) {
	  return Array.prototype.find ? t.find(e) : t.filter(e)[0];
	}
	function te(t, n, e) {
	  return (void 0 === e ? t : t.slice(0, function (t, e, n) {
		if (Array.prototype.findIndex) return t.findIndex(function (t) {
		  return t[e] === n;
		});
		var i = $t(t, function (t) {
		  return t[e] === n;
		});
		return t.indexOf(i);
	  }(t, "name", e))).forEach(function (t) {
		t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var e = t.function || t.fn;
		t.enabled && (e && "[object Function]" === {}.toString.call(e)) && (n.offsets.popper = Bt({}, n.offsets.popper, {right: n.offsets.popper.left + n.offsets.popper.width, bottom: n.offsets.popper.top + n.offsets.popper.height}), n.offsets.reference = Bt({}, n.offsets.reference, {right: n.offsets.reference.left + n.offsets.reference.width, bottom: n.offsets.reference.top + n.offsets.reference.height}), n = e(n, t));
	  }), n;
	}
	function ee(t, n) {
	  return t.some(function (t) {
		var e = t.name;
		return t.enabled && e === n;
	  });
	}
	function ne(t) {
	  for (var e = [false, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
		var r = e[i], o = r ? "" + r + n : t;
		if ("undefined" != typeof document.body.style[o]) return o;
	  }
	  return null;
	}
	function ie(t) {
	  var e = t.ownerDocument;
	  return e ? e.defaultView : window;
	}
	function re(t, e, n, i) {
	  n.updateBound = i, ie(t).addEventListener("resize", n.updateBound, {passive: true});
	  var r = St(t);
	  return function t(e, n, i, r) {
		var o = "BODY" === e.nodeName, s = o ? e.ownerDocument.defaultView : e;
		s.addEventListener(n, i, {passive: true}), o || t(St(s.parentNode), n, i, r), r.push(s);
	  }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = true, n;
	}
	function oe() {
	  var t, e;
	  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ie(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
		t.removeEventListener("scroll", e.updateBound);
	  }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = false, e));
	}
	function ae(n, i) {
	  Object.keys(i).forEach(function (t) {
		var e = "";
		-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && ("" !== i[t] && !isNaN(parseFloat(i[t])) && isFinite(i[t])) && (e = "px"), n.style[t] = i[t] + e;
	  });
	}
	function le(t, e, n) {
	  var i = $t(t, function (t) {
		return t.name === e;
	  }), r = !!i && t.some(function (t) {
		return t.name === n && t.enabled && t.order < i.order;
	  });
	  if (!r) {
		var o = "`" + e + "`", s = "`" + n + "`";
		console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
	  }
	  return r;
	}
	var ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], fe = ce.slice(3);
	function he(t) {
	  var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = fe.indexOf(t), i = fe.slice(n + 1).concat(fe.slice(0, n));
	  return e ? i.reverse() : i;
	}
	var ue = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};
	function de(t, r, o, e) {
	  var s = [0, 0], a = -1 !== ["right", "left"].indexOf(e), n = t.split(/(\+|\-)/).map(function (t) {
		return t.trim();
	  }), i = n.indexOf($t(n, function (t) {
		return -1 !== t.search(/,|\s/);
	  }));
	  n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	  var l = /\s*,\s*|\s+/, c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
	  return (c = c.map(function (t, e) {
		var n = (1 === e ? !a : a) ? "height" : "width", i = false;
		return t.reduce(function (t, e) {
		  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = true, t) : i ? (t[t.length - 1] += e, i = false, t) : t.concat(e);
		}, []).map(function (t) {
		  return function (t, e, n, i) {
			var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2];
			if (!o) return t;
			if (0 === s.indexOf("%")) {
			  var a = void 0;
			  switch (s) {
				case "%p":
				  a = n;
				  break;
				case "%":
				case "%r":
				default:
				  a = i;
			  }
			  return Bt({}, a, {right: a.left + a.width, bottom: a.top + a.height})[e] / 100 * o;
			}
			if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
			return o;
		  }(t, n, r, o);
		});
	  })).forEach(function (n, i) {
		n.forEach(function (t, e) {
		  "" !== t && !isNaN(parseFloat(t)) && isFinite(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
		});
	  }), s;
	}
	var pe = {placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function () {}, onUpdate: function () {}, modifiers: {shift: {order: 100, enabled: true, fn: function (t) {
	  var e = t.placement, n = e.split("-")[0], i = e.split("-")[1];
	  if (i) {
		var r = t.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n), l = a ? "left" : "top", c = a ? "width" : "height", f = {start: (l in {} ? Object.defineProperty({}, l, {value: o[l], enumerable: true, configurable: true, writable: true}) : {}[l] = o[l], {}), end: (l in {} ? Object.defineProperty({}, l, {value: o[l] + o[c] - s[c], enumerable: true, configurable: true, writable: true}) : {}[l] = o[l] + o[c] - s[c], {})};
		t.offsets.popper = Bt({}, s, f[i]);
	  }
	  return t;
	}}, offset: {order: 200, enabled: true, fn: function (t, e) {
	  var n = e.offset, i = t.placement, r = t.offsets, o = r.popper, s = r.reference, a = i.split("-")[0], l = void 0;
	  return l = "" !== +n && !isNaN(parseFloat(+n)) && isFinite(+n) ? [+n, 0] : de(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t;
	}, offset: 0}, preventOverflow: {order: 300, enabled: true, fn: function (t, i) {
	  var e = i.boundariesElement || Lt(t.instance.popper);
	  t.instance.reference === e && (e = Lt(e));
	  var n = ne("transform"), r = t.instance.popper.style, o = r.top, s = r.left, a = r[n];
	  r.top = "", r.left = "", r[n] = "";
	  var l = Gt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed);
	  r.top = o, r.left = s, r[n] = a, i.boundaries = l;
	  var c = i.priority, f = t.offsets.popper, h = {primary: function (t) {
		var e = f[t];
		return f[t] < l[t] && !i.escapeWithReference && (e = Math.max(f[t], l[t])), (t in {} ? Object.defineProperty({}, t, {value: e, enumerable: true, configurable: true, writable: true}) : {}[t] = e, {});
	  }, secondary: function (t) {
		var e = "right" === t ? "left" : "top", n = f[e];
		return f[t] > l[t] && !i.escapeWithReference && (n = Math.min(f[e], l[t] - ("right" === t ? f.width : f.height))), (e in {} ? Object.defineProperty({}, e, {value: n, enumerable: true, configurable: true, writable: true}) : {}[e] = n, {});
	  }};
	  return c.forEach(function (t) {
		var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
		f = Bt({}, f, h[e](t));
	  }), t.offsets.popper = f, t;
	}, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"}, keepTogether: {order: 400, enabled: true, fn: function (t) {
	  var e = t.offsets, n = e.popper, i = e.reference, r = t.placement.split("-")[0], o = Math.floor, s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height";
	  return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t;
	}}, arrow: {order: 500, enabled: true, fn: function (t, e) {
	  var n;
	  if (!le(t.instance.modifiers, "arrow", "keepTogether")) return t;
	  var i = e.element;
	  if ("string" == typeof i) {
		if (!(i = t.instance.popper.querySelector(i))) return t;
	  } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
	  var r = t.placement.split("-")[0], o = t.offsets, s = o.popper, a = o.reference, l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", f = l ? "Top" : "Left", h = f.toLowerCase(), u = l ? "left" : "top", d = l ? "bottom" : "right", p = Xt(i)[c];
	  a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Bt({}, t.offsets.popper, {right: t.offsets.popper.left + t.offsets.popper.width, bottom: t.offsets.popper.top + t.offsets.popper.height});
	  var g = a[h] + a[c] / 2 - p / 2, m = Dt(t.instance.popper), _ = parseFloat(m["margin" + f], 10), v = parseFloat(m["border" + f + "Width"], 10), E = g - t.offsets.popper[h] - _ - v;
	  return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (h in (n = {}) ? Object.defineProperty(n = {}, h, {value: Math.round(E), enumerable: true, configurable: true, writable: true}) : (n = {})[h] = Math.round(E), n = {}, (u in n ? Object.defineProperty(n, u, {value: "", enumerable: true, configurable: true, writable: true}) : n[u] = "", n), n), t;
	}, element: "[x-arrow]"}, flip: {order: 600, enabled: true, fn: function (p, g) {
	  if (ee(p.instance.modifiers, "inner")) return p;
	  if (p.flipped && p.placement === p.originalPlacement) return p;
	  var m = Gt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed), _ = p.placement.split("-")[0], v = Jt(_), E = p.placement.split("-")[1] || "", y = [];
	  switch (g.behavior) {
		case ue.FLIP:
		  y = [_, v];
		  break;
		case ue.CLOCKWISE:
		  y = he(_);
		  break;
		case ue.COUNTERCLOCKWISE:
		  y = he(_, true);
		  break;
		default:
		  y = g.behavior;
	  }
	  return y.forEach(function (t, e) {
		if (_ !== t || y.length === e + 1) return p;
		_ = p.placement.split("-")[0], v = Jt(_);
		var n, i = p.offsets.popper, r = p.offsets.reference, o = Math.floor, s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom), a = o(i.left) < o(m.left), l = o(i.right) > o(m.right), c = o(i.top) < o(m.top), f = o(i.bottom) > o(m.bottom), h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f, u = -1 !== ["top", "bottom"].indexOf(_), d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f);
		(s || h || d) && (p.flipped = true, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Bt({}, p.offsets.popper, Zt(p.instance.popper, p.offsets.reference, p.placement)), p = te(p.instance.modifiers, p, "flip"));
	  }), p;
	}, behavior: "flip", padding: 5, boundariesElement: "viewport"}, inner: {order: 700, enabled: false, fn: function (t) {
	  var e = t.placement, n = e.split("-")[0], i = t.offsets, r = i.popper, o = i.reference, s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n);
	  return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Jt(e), t.offsets.popper = Bt({}, r, {right: r.left + r.width, bottom: r.top + r.height}), t;
	}}, hide: {order: 800, enabled: true, fn: function (t) {
	  if (!le(t.instance.modifiers, "hide", "preventOverflow")) return t;
	  var e = t.offsets.reference, n = $t(t.instance.modifiers, function (t) {
		return "preventOverflow" === t.name;
	  }).boundaries;
	  if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
		if (true === t.hide) return t;
		t.hide = true, t.attributes["x-out-of-boundaries"] = "";
	  } else {
		if (false === t.hide) return t;
		t.hide = false, t.attributes["x-out-of-boundaries"] = false;
	  }
	  return t;
	}}, computeStyle: {order: 850, enabled: true, fn: function (t, e) {
	  var n = e.x, i = e.y, r = t.offsets.popper, o = $t(t.instance.modifiers, function (t) {
		return "applyStyle" === t.name;
	  }).gpuAcceleration;
	  void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	  var s = void 0 !== o ? o : e.gpuAcceleration, a = Vt(Lt(t.instance.popper)), l = {position: r.position}, c = {left: Math.floor(r.left), top: Math.round(r.top), bottom: Math.round(r.bottom), right: Math.floor(r.right)}, f = "bottom" === n ? "top" : "bottom", h = "right" === i ? "left" : "right", u = ne("transform"), d = void 0, p = void 0;
	  if (p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform"; else {
		var g = "bottom" === f ? -1 : 1, m = "right" === h ? -1 : 1;
		l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h;
	  }
	  var _ = {"x-placement": t.placement};
	  return t.attributes = Bt({}, _, t.attributes), t.styles = Bt({}, l, t.styles), t.arrowStyles = Bt({}, t.offsets.arrow, t.arrowStyles), t;
	}, gpuAcceleration: true, x: "bottom", y: "right"}, applyStyle: {order: 900, enabled: true, fn: function (t) {
	  var e, n;
	  return ae(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) {
		false !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
	  }), t.arrowElement && Object.keys(t.arrowStyles).length && ae(t.arrowElement, t.arrowStyles), t;
	}, onLoad: function (t, e, n, i, r) {
	  var o = zt(r, e, t, n.positionFixed), s = qt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
	  return e.setAttribute("x-placement", s), ae(e, {position: n.positionFixed ? "fixed" : "absolute"}), n;
	}, gpuAcceleration: void 0}}}, ge = function () {
	  function o(t, e) {
		var n = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
		Wt(this, o), this.scheduleUpdate = function () {
		  return requestAnimationFrame(n.update);
		}, this.update = wt(this.update.bind(this)), this.options = Bt({}, o.Defaults, i), this.state = {isDestroyed: false, isCreated: false, scrollParents: []}, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Bt({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) {
		  n.options.modifiers[t] = Bt({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
		}), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
		  return Bt({name: t}, n.options.modifiers[t]);
		}).sort(function (t, e) {
		  return t.order - e.order;
		}), this.modifiers.forEach(function (t) {
		  t.enabled && (t.onLoad && "[object Function]" === {}.toString.call(t.onLoad)) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
		}), this.update();
		var r = this.options.eventsEnabled;
		r && this.enableEventListeners(), this.state.eventsEnabled = r;
	  }
	  return Ft(o, [{key: "update", value: function () {
		return function () {
		  if (!this.state.isDestroyed) {
			var t = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {}};
			t.offsets.reference = zt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = qt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Zt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = te(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = true, this.options.onCreate(t));
		  }
		}.call(this);
	  }}, {key: "destroy", value: function () {
		return function () {
		  return this.state.isDestroyed = true, ee(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ne("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
		}.call(this);
	  }}, {key: "enableEventListeners", value: function () {
		return function () {
		  this.state.eventsEnabled || (this.state = re(this.reference, this.options, this.state, this.scheduleUpdate));
		}.call(this);
	  }}, {key: "disableEventListeners", value: function () {
		return oe.call(this);
	  }}]), o;
	}();
	ge.Utils = ("undefined" != typeof window ? window : global).PopperUtils, ge.placements = ce, ge.Defaults = pe;
	var me, _e, ve, Ee, ye, be, Te, Ce, we, Ie, De, Ae, Se, Oe, Ne, ke, Le, Pe, xe, je, Me, Re, He, We, Fe, Ue, Be, Ke, Ve, Qe, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, on, sn, an, ln, cn, fn, hn, un, dn, pn, gn, mn, _n, vn, En, yn, bn, Tn, Cn, wn, In, Dn, An, Sn, On, Nn, kn, Ln, Pn, xn, jn, Mn, Rn, Hn, Wn, Fn, Un, Bn, Kn, Vn, Qn, Yn, Gn, qn, zn, Xn, Jn, Zn, $n, ti, ei, ni, ii, ri, oi, si, ai, li, ci, fi, hi, ui, di, pi, gi, mi, _i, vi, Ei, yi, bi, Ti = (_e = "dropdown", Ee = "." + (ve = "bs.dropdown"), ye = ".data-api", be = (me = e).fn[_e], Te = new RegExp("38|40|27"), Ce = {HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW: "show" + Ee, SHOWN: "shown" + Ee, CLICK: "click" + Ee, CLICK_DATA_API: "click" + Ee + ye, KEYDOWN_DATA_API: "keydown" + Ee + ye, KEYUP_DATA_API: "keyup" + Ee + ye}, we = "disabled", Ie = "show", De = "dropup", Ae = "dropright", Se = "dropleft", Oe = "dropdown-menu-right", Ne = "position-static", ke = '[data-toggle="dropdown"]', Le = ".dropdown form", Pe = ".dropdown-menu", xe = ".navbar-nav", je = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Me = "top-start", Re = "top-end", He = "bottom-start", We = "bottom-end", Fe = "right-start", Ue = "left-start", Be = {offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, Ke = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string"}, Ve = function () {
	  function l(t, e) {
		this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
	  }
	  var t = l.prototype;
	  return t.toggle = function () {
		if (!this._element.disabled && !me(this._element).hasClass(we)) {
		  var t = l._getParentFromElement(this._element), e = me(this._menu).hasClass(Ie);
		  if (l._clearMenus(), !e) {
			var n = {relatedTarget: this._element}, i = me.Event(Ce.SHOW, n);
			if (me(t).trigger(i), !i.isDefaultPrevented()) {
			  if (!this._inNavbar) {
				if ("undefined" == typeof ge) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
				var r = this._element;
				"parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && me(t).addClass(Ne), this._popper = new ge(r, this._menu, this._getPopperConfig());
			  }
			  "ontouchstart" in document.documentElement && 0 === me(t).closest(xe).length && me(document.body).children().on("mouseover", null, me.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), me(this._menu).toggleClass(Ie), me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN, n));
			}
		  }
		}
	  }, t.dispose = function () {
		me.removeData(this._element, ve), me(this._element).off(Ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
	  }, t.update = function () {
		this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
	  }, t._addEventListeners = function () {
		var e = this;
		me(this._element).on(Ce.CLICK, function (t) {
		  t.preventDefault(), t.stopPropagation(), e.toggle();
		});
	  }, t._getConfig = function (t) {
		return t = c({}, this.constructor.Default, me(this._element).data(), t), gt.typeCheckConfig(_e, t, this.constructor.DefaultType), t;
	  }, t._getMenuElement = function () {
		if (!this._menu) {
		  var t = l._getParentFromElement(this._element);
		  this._menu = me(t).find(Pe)[0];
		}
		return this._menu;
	  }, t._getPlacement = function () {
		var t = me(this._element).parent(), e = He;
		return t.hasClass(De) ? (e = Me, me(this._menu).hasClass(Oe) && (e = Re)) : t.hasClass(Ae) ? e = Fe : t.hasClass(Se) ? e = Ue : me(this._menu).hasClass(Oe) && (e = We), e;
	  }, t._detectNavbar = function () {
		return 0 < me(this._element).closest(".navbar").length;
	  }, t._getPopperConfig = function () {
		var e = this, t = {};
		"function" == typeof this._config.offset ? t.fn = function (t) {
		  return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t;
		} : t.offset = this._config.offset;
		var n = {placement: this._getPlacement(), modifiers: {offset: t, flip: {enabled: this._config.flip}, preventOverflow: {boundariesElement: this._config.boundary}}};
		return "static" === this._config.display && (n.modifiers.applyStyle = {enabled: false}), n;
	  }, l._jQueryInterface = function (e) {
		return this.each(function () {
		  var t = me(this).data(ve);
		  if (t || (t = new l(this, "object" == typeof e ? e : null), me(this).data(ve, t)), "string" == typeof e) {
			if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
			t[e]();
		  }
		});
	  }, l._clearMenus = function (t) {
		if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = me.makeArray(me(ke)), n = 0; n < e.length; n++) {
		  var i = l._getParentFromElement(e[n]), r = me(e[n]).data(ve), o = {relatedTarget: e[n]};
		  if (r) {
			var s = r._menu;
			if (me(i).hasClass(Ie) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && me.contains(i, t.target))) {
			  var a = me.Event(Ce.HIDE, o);
			  me(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && me(document.body).children().off("mouseover", null, me.noop), e[n].setAttribute("aria-expanded", "false"), me(s).removeClass(Ie), me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN, o)));
			}
		  }
		}
	  }, l._getParentFromElement = function (t) {
		var e, n = gt.getSelectorFromElement(t);
		return n && (e = me(n)[0]), e || t.parentNode;
	  }, l._dataApiKeydownHandler = function (t) {
		if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || me(t.target).closest(Pe).length)) : Te.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !me(this).hasClass(we))) {
		  var e = l._getParentFromElement(this), n = me(e).hasClass(Ie);
		  if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
			var i = me(e).find(je).get();
			if (0 !== i.length) {
			  var r = i.indexOf(t.target);
			  38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
			}
		  } else {
			if (27 === t.which) {
			  var o = me(e).find(ke)[0];
			  me(o).trigger("focus");
			}
			me(this).trigger("click");
		  }
		}
	  }, (null && i(l.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return Be;
	  }}, {key: "DefaultType", get: function () {
		return Ke;
	  }}] && i(l, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return Be;
	  }}, {key: "DefaultType", get: function () {
		return Ke;
	  }}]), l), l;
	}(), me(document).on(Ce.KEYDOWN_DATA_API, ke, Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API, Pe, Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API + " " + Ce.KEYUP_DATA_API, Ve._clearMenus).on(Ce.CLICK_DATA_API, ke, function (t) {
	  t.preventDefault(), t.stopPropagation(), Ve._jQueryInterface.call(me(this), "toggle");
	}).on(Ce.CLICK_DATA_API, Le, function (t) {
	  t.stopPropagation();
	}), me.fn[_e] = Ve._jQueryInterface, me.fn[_e].Constructor = Ve, me.fn[_e].noConflict = function () {
	  return me.fn[_e] = be, Ve._jQueryInterface;
	}, Ve), Ci = (Ye = "modal", qe = "." + (Ge = "bs.modal"), ze = (Qe = e).fn[Ye], Xe = {backdrop: true, keyboard: true, focus: true, show: true}, Je = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, Ze = {HIDE: "hide" + qe, HIDDEN: "hidden" + qe, SHOW: "show" + qe, SHOWN: "shown" + qe, FOCUSIN: "focusin" + qe, RESIZE: "resize" + qe, CLICK_DISMISS: "click.dismiss" + qe, KEYDOWN_DISMISS: "keydown.dismiss" + qe, MOUSEUP_DISMISS: "mouseup.dismiss" + qe, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qe, CLICK_DATA_API: "click" + qe + ".data-api"}, $e = "modal-scrollbar-measure", tn = "modal-backdrop", en = "modal-open", nn = "fade", rn = "show", on = {DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler"}, sn = function () {
	  function r(t, e) {
		this._config = this._getConfig(e), this._element = t, this._dialog = Qe(t).find(on.DIALOG)[0], this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._scrollbarWidth = 0;
	  }
	  var t = r.prototype;
	  return t.toggle = function (t) {
		return this._isShown ? this.hide() : this.show(t);
	  }, t.show = function (t) {
		var e = this;
		if (!this._isTransitioning && !this._isShown) {
		  Qe(this._element).hasClass(nn) && (this._isTransitioning = true);
		  var n = Qe.Event(Ze.SHOW, {relatedTarget: t});
		  Qe(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Qe(document.body).addClass(en), this._setEscapeEvent(), this._setResizeEvent(), Qe(this._element).on(Ze.CLICK_DISMISS, on.DATA_DISMISS, function (t) {
			return e.hide(t);
		  }), Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS, function () {
			Qe(e._element).one(Ze.MOUSEUP_DISMISS, function (t) {
			  Qe(t.target).is(e._element) && (e._ignoreBackdropClick = true);
			});
		  }), this._showBackdrop(function () {
			return e._showElement(t);
		  }));
		}
	  }, t.hide = function (t) {
		var e = this;
		if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
		  var n = Qe.Event(Ze.HIDE);
		  if (Qe(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
			this._isShown = false;
			var i = Qe(this._element).hasClass(nn);
			if (i && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), Qe(document).off(Ze.FOCUSIN), Qe(this._element).removeClass(rn), Qe(this._element).off(Ze.CLICK_DISMISS), Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS), i) {
			  var r = gt.getTransitionDurationFromElement(this._element);
			  Qe(this._element).one(gt.TRANSITION_END, function (t) {
				return e._hideModal(t);
			  }).emulateTransitionEnd(r);
			} else this._hideModal();
		  }
		}
	  }, t.dispose = function () {
		Qe.removeData(this._element, Ge), Qe(window, document, this._element, this._backdrop).off(qe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
	  }, t.handleUpdate = function () {
		this._adjustDialog();
	  }, t._getConfig = function (t) {
		return t = c({}, Xe, t), gt.typeCheckConfig(Ye, t, Je), t;
	  }, t._showElement = function (t) {
		var e = this, n = Qe(this._element).hasClass(nn);
		this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Qe(this._element).addClass(rn), this._config.focus && this._enforceFocus();
		var i = Qe.Event(Ze.SHOWN, {relatedTarget: t}), r = function () {
		  e._config.focus && e._element.focus(), e._isTransitioning = false, Qe(e._element).trigger(i);
		};
		if (n) {
		  var o = gt.getTransitionDurationFromElement(this._element);
		  Qe(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
		} else r();
	  }, t._enforceFocus = function () {
		var e = this;
		Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN, function (t) {
		  document !== t.target && e._element !== t.target && 0 === Qe(e._element).has(t.target).length && e._element.focus();
		});
	  }, t._setEscapeEvent = function () {
		var e = this;
		this._isShown && this._config.keyboard ? Qe(this._element).on(Ze.KEYDOWN_DISMISS, function (t) {
		  27 === t.which && (t.preventDefault(), e.hide());
		}) : this._isShown || Qe(this._element).off(Ze.KEYDOWN_DISMISS);
	  }, t._setResizeEvent = function () {
		var e = this;
		this._isShown ? Qe(window).on(Ze.RESIZE, function (t) {
		  return e.handleUpdate(t);
		}) : Qe(window).off(Ze.RESIZE);
	  }, t._hideModal = function () {
		var t = this;
		this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._isTransitioning = false, this._showBackdrop(function () {
		  Qe(document.body).removeClass(en), t._resetAdjustments(), t._resetScrollbar(), Qe(t._element).trigger(Ze.HIDDEN);
		});
	  }, t._removeBackdrop = function () {
		this._backdrop && (Qe(this._backdrop).remove(), this._backdrop = null);
	  }, t._showBackdrop = function (t) {
		var e = this, n = Qe(this._element).hasClass(nn) ? nn : "";
		if (this._isShown && this._config.backdrop) {
		  if (this._backdrop = document.createElement("div"), this._backdrop.className = tn, n && Qe(this._backdrop).addClass(n), Qe(this._backdrop).appendTo(document.body), Qe(this._element).on(Ze.CLICK_DISMISS, function (t) {
			e._ignoreBackdropClick ? e._ignoreBackdropClick = false : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
		  }), n && gt.reflow(this._backdrop), Qe(this._backdrop).addClass(rn), !t) return;
		  if (!n) return void t();
		  var i = gt.getTransitionDurationFromElement(this._backdrop);
		  Qe(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i);
		} else if (!this._isShown && this._backdrop) {
		  Qe(this._backdrop).removeClass(rn);
		  var r = function () {
			e._removeBackdrop(), t && t();
		  };
		  if (Qe(this._element).hasClass(nn)) {
			var o = gt.getTransitionDurationFromElement(this._backdrop);
			Qe(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
		  } else r();
		} else t && t();
	  }, t._adjustDialog = function () {
		var t = this._element.scrollHeight > document.documentElement.clientHeight;
		!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
	  }, t._resetAdjustments = function () {
		this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
	  }, t._checkScrollbar = function () {
		var t = document.body.getBoundingClientRect();
		this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
	  }, t._setScrollbar = function () {
		var r = this;
		if (this._isBodyOverflowing) {
		  Qe(on.FIXED_CONTENT).each(function (t, e) {
			var n = Qe(e)[0].style.paddingRight, i = Qe(e).css("padding-right");
			Qe(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
		  }), Qe(on.STICKY_CONTENT).each(function (t, e) {
			var n = Qe(e)[0].style.marginRight, i = Qe(e).css("margin-right");
			Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
		  }), Qe(on.NAVBAR_TOGGLER).each(function (t, e) {
			var n = Qe(e)[0].style.marginRight, i = Qe(e).css("margin-right");
			Qe(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
		  });
		  var t = document.body.style.paddingRight, e = Qe(document.body).css("padding-right");
		  Qe(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
		}
	  }, t._resetScrollbar = function () {
		Qe(on.FIXED_CONTENT).each(function (t, e) {
		  var n = Qe(e).data("padding-right");
		  "undefined" != typeof n && Qe(e).css("padding-right", n).removeData("padding-right");
		}), Qe(on.STICKY_CONTENT + ", " + on.NAVBAR_TOGGLER).each(function (t, e) {
		  var n = Qe(e).data("margin-right");
		  "undefined" != typeof n && Qe(e).css("margin-right", n).removeData("margin-right");
		});
		var t = Qe(document.body).data("padding-right");
		"undefined" != typeof t && Qe(document.body).css("padding-right", t).removeData("padding-right");
	  }, t._getScrollbarWidth = function () {
		var t = document.createElement("div");
		t.className = $e, document.body.appendChild(t);
		var e = t.getBoundingClientRect().width - t.clientWidth;
		return document.body.removeChild(t), e;
	  }, r._jQueryInterface = function (n, i) {
		return this.each(function () {
		  var t = Qe(this).data(Ge), e = c({}, Xe, Qe(this).data(), "object" == typeof n && n ? n : {});
		  if (t || (t = new r(this, e), Qe(this).data(Ge, t)), "string" == typeof n) {
			if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
			t[n](i);
		  } else e.show && t.show(i);
		});
	  }, (null && i(r.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return Xe;
	  }}] && i(r, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return Xe;
	  }}]), r), r;
	}(), Qe(document).on(Ze.CLICK_DATA_API, on.DATA_TOGGLE, function (t) {
	  var e, n = this, i = gt.getSelectorFromElement(this);
	  i && (e = Qe(i)[0]);
	  var r = Qe(e).data(Ge) ? "toggle" : c({}, Qe(e).data(), Qe(this).data());
	  "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
	  var o = Qe(e).one(Ze.SHOW, function (t) {
		t.isDefaultPrevented() || o.one(Ze.HIDDEN, function () {
		  Qe(n).is(":visible") && n.focus();
		});
	  });
	  sn._jQueryInterface.call(Qe(e), r, this);
	}), Qe.fn[Ye] = sn._jQueryInterface, Qe.fn[Ye].Constructor = sn, Qe.fn[Ye].noConflict = function () {
	  return Qe.fn[Ye] = ze, sn._jQueryInterface;
	}, sn), wi = (ln = "tooltip", fn = "." + (cn = "bs.tooltip"), hn = (an = e).fn[ln], un = "bs-tooltip", dn = new RegExp("(^|\\s)" + un + "\\S+", "g"), mn = {animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(gn = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}), selector: !(pn = {animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)"}), placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent"}, vn = "out", En = {HIDE: "hide" + fn, HIDDEN: "hidden" + fn, SHOW: (_n = "show") + fn, SHOWN: "shown" + fn, INSERTED: "inserted" + fn, CLICK: "click" + fn, FOCUSIN: "focusin" + fn, FOCUSOUT: "focusout" + fn, MOUSEENTER: "mouseenter" + fn, MOUSELEAVE: "mouseleave" + fn}, yn = "fade", bn = "show", Tn = ".tooltip-inner", Cn = ".arrow", wn = "hover", In = "focus", Dn = "click", An = "manual", Sn = function () {
	  function i(t, e) {
		if ("undefined" == typeof ge) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
		this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
	  }
	  var t = i.prototype;
	  return t.enable = function () {
		this._isEnabled = true;
	  }, t.disable = function () {
		this._isEnabled = false;
	  }, t.toggleEnabled = function () {
		this._isEnabled = !this._isEnabled;
	  }, t.toggle = function (t) {
		if (this._isEnabled) if (t) {
		  var e = this.constructor.DATA_KEY, n = an(t.currentTarget).data(e);
		  n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
		} else {
		  if (an(this.getTipElement()).hasClass(bn)) return void this._leave(null, this);
		  this._enter(null, this);
		}
	  }, t.dispose = function () {
		clearTimeout(this._timeout), an.removeData(this.element, this.constructor.DATA_KEY), an(this.element).off(this.constructor.EVENT_KEY), an(this.element).closest(".modal").off("hide.bs.modal"), this.tip && an(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
	  }, t.show = function () {
		var e = this;
		if ("none" === an(this.element).css("display")) throw new Error("Please use show on visible elements");
		var t = an.Event(this.constructor.Event.SHOW);
		if (this.isWithContent() && this._isEnabled) {
		  an(this.element).trigger(t);
		  var n = an.contains(this.element.ownerDocument.documentElement, this.element);
		  if (t.isDefaultPrevented() || !n) return;
		  var i = this.getTipElement(), r = gt.getUID(this.constructor.NAME);
		  i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && an(i).addClass(yn);
		  var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, s = this._getAttachment(o);
		  this.addAttachmentClass(s);
		  var a = false === this.config.container ? document.body : an(this.config.container);
		  an(i).data(this.constructor.DATA_KEY, this), an.contains(this.element.ownerDocument.documentElement, this.tip) || an(i).appendTo(a), an(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new ge(this.element, i, {placement: s, modifiers: {offset: {offset: this.config.offset}, flip: {behavior: this.config.fallbackPlacement}, arrow: {element: Cn}, preventOverflow: {boundariesElement: this.config.boundary}}, onCreate: function (t) {
			t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
		  }, onUpdate: function (t) {
			e._handlePopperPlacementChange(t);
		  }}), an(i).addClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().on("mouseover", null, an.noop);
		  var l = function () {
			e.config.animation && e._fixTransition();
			var t = e._hoverState;
			e._hoverState = null, an(e.element).trigger(e.constructor.Event.SHOWN), t === vn && e._leave(null, e);
		  };
		  if (an(this.tip).hasClass(yn)) {
			var c = gt.getTransitionDurationFromElement(this.tip);
			an(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c);
		  } else l();
		}
	  }, t.hide = function (t) {
		var e = this, n = this.getTipElement(), i = an.Event(this.constructor.Event.HIDE), r = function () {
		  e._hoverState !== _n && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), an(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
		};
		if (an(this.element).trigger(i), !i.isDefaultPrevented()) {
		  if (an(n).removeClass(bn), "ontouchstart" in document.documentElement && an(document.body).children().off("mouseover", null, an.noop), this._activeTrigger[Dn] = false, this._activeTrigger[In] = false, this._activeTrigger[wn] = false, an(this.tip).hasClass(yn)) {
			var o = gt.getTransitionDurationFromElement(n);
			an(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o);
		  } else r();
		  this._hoverState = "";
		}
	  }, t.update = function () {
		null !== this._popper && this._popper.scheduleUpdate();
	  }, t.isWithContent = function () {
		return Boolean(this.getTitle());
	  }, t.addAttachmentClass = function (t) {
		an(this.getTipElement()).addClass(un + "-" + t);
	  }, t.getTipElement = function () {
		return this.tip = this.tip || an(this.config.template)[0], this.tip;
	  }, t.setContent = function () {
		var t = an(this.getTipElement());
		this.setElementContent(t.find(Tn), this.getTitle()), t.removeClass(yn + " " + bn);
	  }, t.setElementContent = function (t, e) {
		var n = this.config.html;
		"object" == typeof e && (e.nodeType || e.jquery) ? n ? an(e).parent().is(t) || t.empty().append(e) : t.text(an(e).text()) : t[n ? "html" : "text"](e);
	  }, t.getTitle = function () {
		var t = this.element.getAttribute("data-original-title");
		return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
	  }, t._getAttachment = function (t) {
		return gn[t.toUpperCase()];
	  }, t._setListeners = function () {
		var i = this;
		this.config.trigger.split(" ").forEach(function (t) {
		  if ("click" === t) an(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
			return i.toggle(t);
		  }); else if (t !== An) {
			var e = t === wn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === wn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
			an(i.element).on(e, i.config.selector, function (t) {
			  return i._enter(t);
			}).on(n, i.config.selector, function (t) {
			  return i._leave(t);
			});
		  }
		  an(i.element).closest(".modal").on("hide.bs.modal", function () {
			return i.hide();
		  });
		}), this.config.selector ? this.config = c({}, this.config, {trigger: "manual", selector: ""}) : this._fixTitle();
	  }, t._fixTitle = function () {
		var t = typeof this.element.getAttribute("data-original-title");
		(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
	  }, t._enter = function (t, e) {
		var n = this.constructor.DATA_KEY;
		(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? In : wn] = true), an(e.getTipElement()).hasClass(bn) || e._hoverState === _n ? e._hoverState = _n : (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
		  e._hoverState === _n && e.show();
		}, e.config.delay.show) : e.show());
	  }, t._leave = function (t, e) {
		var n = this.constructor.DATA_KEY;
		(e = e || an(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), an(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? In : wn] = false), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = vn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
		  e._hoverState === vn && e.hide();
		}, e.config.delay.hide) : e.hide());
	  }, t._isWithActiveTrigger = function () {
		for (var t in this._activeTrigger) if (this._activeTrigger[t]) return true;
		return false;
	  }, t._getConfig = function (t) {
		return "number" == typeof (t = c({}, this.constructor.Default, an(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {show: t.delay, hide: t.delay}), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(ln, t, this.constructor.DefaultType), t;
	  }, t._getDelegateConfig = function () {
		var t = {};
		if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
		return t;
	  }, t._cleanTipClass = function () {
		var t = an(this.getTipElement()), e = t.attr("class").match(dn);
		null !== e && 0 < e.length && t.removeClass(e.join(""));
	  }, t._handlePopperPlacementChange = function (t) {
		this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
	  }, t._fixTransition = function () {
		var t = this.getTipElement(), e = this.config.animation;
		null === t.getAttribute("x-placement") && (an(t).removeClass(yn), this.config.animation = false, this.hide(), this.show(), this.config.animation = e);
	  }, i._jQueryInterface = function (n) {
		return this.each(function () {
		  var t = an(this).data(cn), e = "object" == typeof n && n;
		  if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), an(this).data(cn, t)), "string" == typeof n)) {
			if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
			t[n]();
		  }
		});
	  }, (null && i(i.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return mn;
	  }}, {key: "NAME", get: function () {
		return ln;
	  }}, {key: "DATA_KEY", get: function () {
		return cn;
	  }}, {key: "Event", get: function () {
		return En;
	  }}, {key: "EVENT_KEY", get: function () {
		return fn;
	  }}, {key: "DefaultType", get: function () {
		return pn;
	  }}] && i(i, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return mn;
	  }}, {key: "NAME", get: function () {
		return ln;
	  }}, {key: "DATA_KEY", get: function () {
		return cn;
	  }}, {key: "Event", get: function () {
		return En;
	  }}, {key: "EVENT_KEY", get: function () {
		return fn;
	  }}, {key: "DefaultType", get: function () {
		return pn;
	  }}]), i), i;
	}(), an.fn[ln] = Sn._jQueryInterface, an.fn[ln].Constructor = Sn, an.fn[ln].noConflict = function () {
	  return an.fn[ln] = hn, Sn._jQueryInterface;
	}, Sn), Ii = (Nn = "popover", Ln = "." + (kn = "bs.popover"), Pn = (On = e).fn[Nn], xn = "bs-popover", jn = new RegExp("(^|\\s)" + xn + "\\S+", "g"), Mn = c({}, wi.Default, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}), Rn = c({}, wi.DefaultType, {content: "(string|element|function)"}), Hn = "fade", Fn = ".popover-header", Un = ".popover-body", Bn = {HIDE: "hide" + Ln, HIDDEN: "hidden" + Ln, SHOW: (Wn = "show") + Ln, SHOWN: "shown" + Ln, INSERTED: "inserted" + Ln, CLICK: "click" + Ln, FOCUSIN: "focusin" + Ln, FOCUSOUT: "focusout" + Ln, MOUSEENTER: "mouseenter" + Ln, MOUSELEAVE: "mouseleave" + Ln}, Kn = function (t) {
	  var e, n;
	  n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
	  var r = i.prototype;
	  return r.isWithContent = function () {
		return this.getTitle() || this._getContent();
	  }, r.addAttachmentClass = function (t) {
		On(this.getTipElement()).addClass(xn + "-" + t);
	  }, r.getTipElement = function () {
		return this.tip = this.tip || On(this.config.template)[0], this.tip;
	  }, r.setContent = function () {
		var t = On(this.getTipElement());
		this.setElementContent(t.find(Fn), this.getTitle());
		var e = this._getContent();
		"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Un), e), t.removeClass(Hn + " " + Wn);
	  }, r._getContent = function () {
		return this.element.getAttribute("data-content") || this.config.content;
	  }, r._cleanTipClass = function () {
		var t = On(this.getTipElement()), e = t.attr("class").match(jn);
		null !== e && 0 < e.length && t.removeClass(e.join(""));
	  }, i._jQueryInterface = function (n) {
		return this.each(function () {
		  var t = On(this).data(kn), e = "object" == typeof n ? n : null;
		  if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), On(this).data(kn, t)), "string" == typeof n)) {
			if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
			t[n]();
		  }
		});
	  }, (null && (t.apply(this, arguments) || this), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return Mn;
	  }}, {key: "NAME", get: function () {
		return Nn;
	  }}, {key: "DATA_KEY", get: function () {
		return kn;
	  }}, {key: "Event", get: function () {
		return Bn;
	  }}, {key: "EVENT_KEY", get: function () {
		return Ln;
	  }}, {key: "DefaultType", get: function () {
		return Rn;
	  }}] && (t.apply(this, arguments) || this), i), i;
	}(wi), On.fn[Nn] = Kn._jQueryInterface, On.fn[Nn].Constructor = Kn, On.fn[Nn].noConflict = function () {
	  return On.fn[Nn] = Pn, Kn._jQueryInterface;
	}, Kn), Di = (Qn = "scrollspy", Gn = "." + (Yn = "bs.scrollspy"), qn = (Vn = e).fn[Qn], zn = {offset: 10, method: "auto", target: ""}, Xn = {offset: "number", method: "string", target: "(string|element)"}, Jn = {ACTIVATE: "activate" + Gn, SCROLL: "scroll" + Gn, LOAD_DATA_API: "load" + Gn + ".data-api"}, Zn = "dropdown-item", $n = "active", ti = {DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle"}, ei = "offset", ni = "position", ii = function () {
	  function n(t, e) {
		var n = this;
		this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + ti.NAV_LINKS + "," + this._config.target + " " + ti.LIST_ITEMS + "," + this._config.target + " " + ti.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Vn(this._scrollElement).on(Jn.SCROLL, function (t) {
		  return n._process(t);
		}), this.refresh(), this._process();
	  }
	  var t = n.prototype;
	  return t.refresh = function () {
		var e = this, t = this._scrollElement === this._scrollElement.window ? ei : ni, r = "auto" === this._config.method ? t : this._config.method, o = r === ni ? this._getScrollTop() : 0;
		this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Vn.makeArray(Vn(this._selector)).map(function (t) {
		  var e, n = gt.getSelectorFromElement(t);
		  if (n && (e = Vn(n)[0]), e) {
			var i = e.getBoundingClientRect();
			if (i.width || i.height) return [Vn(e)[r]().top + o, n];
		  }
		  return null;
		}).filter(function (t) {
		  return t;
		}).sort(function (t, e) {
		  return t[0] - e[0];
		}).forEach(function (t) {
		  e._offsets.push(t[0]), e._targets.push(t[1]);
		});
	  }, t.dispose = function () {
		Vn.removeData(this._element, Yn), Vn(this._scrollElement).off(Gn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
	  }, t._getConfig = function (t) {
		if ("string" != typeof (t = c({}, zn, "object" == typeof t && t ? t : {})).target) {
		  var e = Vn(t.target).attr("id");
		  e || (e = gt.getUID(Qn), Vn(t.target).attr("id", e)), t.target = "#" + e;
		}
		return gt.typeCheckConfig(Qn, t, Xn), t;
	  }, t._getScrollTop = function () {
		return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
	  }, t._getScrollHeight = function () {
		return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	  }, t._getOffsetHeight = function () {
		return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
	  }, t._process = function () {
		var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
		if (this._scrollHeight !== e && this.refresh(), n <= t) {
		  var i = this._targets[this._targets.length - 1];
		  this._activeTarget !== i && this._activate(i);
		} else {
		  if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
		  for (var r = this._offsets.length; r--;) {
			this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
		  }
		}
	  }, t._activate = function (e) {
		this._activeTarget = e, this._clear();
		var t = this._selector.split(",");
		t = t.map(function (t) {
		  return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
		});
		var n = Vn(t.join(","));
		n.hasClass(Zn) ? (n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n), n.addClass($n)) : (n.addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS + ", " + ti.LIST_ITEMS).addClass($n), n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)), Vn(this._scrollElement).trigger(Jn.ACTIVATE, {relatedTarget: e});
	  }, t._clear = function () {
		Vn(this._selector).filter(ti.ACTIVE).removeClass($n);
	  }, n._jQueryInterface = function (e) {
		return this.each(function () {
		  var t = Vn(this).data(Yn);
		  if (t || (t = new n(this, "object" == typeof e && e), Vn(this).data(Yn, t)), "string" == typeof e) {
			if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
			t[e]();
		  }
		});
	  }, (null && i(n.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return zn;
	  }}] && i(n, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}, {key: "Default", get: function () {
		return zn;
	  }}]), n), n;
	}(), Vn(window).on(Jn.LOAD_DATA_API, function () {
	  for (var t = Vn.makeArray(Vn(ti.DATA_SPY)), e = t.length; e--;) {
		var n = Vn(t[e]);
		ii._jQueryInterface.call(n, n.data());
	  }
	}), Vn.fn[Qn] = ii._jQueryInterface, Vn.fn[Qn].Constructor = ii, Vn.fn[Qn].noConflict = function () {
	  return Vn.fn[Qn] = qn, ii._jQueryInterface;
	}, ii), Ai = (si = "." + (oi = "bs.tab"), ai = (ri = e).fn.tab, li = {HIDE: "hide" + si, HIDDEN: "hidden" + si, SHOW: "show" + si, SHOWN: "shown" + si, CLICK_DATA_API: "click" + si + ".data-api"}, ci = "dropdown-menu", fi = "active", hi = "disabled", ui = "fade", di = "show", pi = ".dropdown", gi = ".nav, .list-group", mi = ".active", _i = "> li > .active", vi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Ei = ".dropdown-toggle", yi = "> .dropdown-menu .active", bi = function () {
	  function i(t) {
		this._element = t;
	  }
	  var t = i.prototype;
	  return t.show = function () {
		var n = this;
		if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ri(this._element).hasClass(fi) || ri(this._element).hasClass(hi))) {
		  var t, i, e = ri(this._element).closest(gi)[0], r = gt.getSelectorFromElement(this._element);
		  if (e) {
			var o = "UL" === e.nodeName ? _i : mi;
			i = (i = ri.makeArray(ri(e).find(o)))[i.length - 1];
		  }
		  var s = ri.Event(li.HIDE, {relatedTarget: this._element}), a = ri.Event(li.SHOW, {relatedTarget: i});
		  if (i && ri(i).trigger(s), ri(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
			r && (t = ri(r)[0]), this._activate(this._element, e);
			var l = function () {
			  var t = ri.Event(li.HIDDEN, {relatedTarget: n._element}), e = ri.Event(li.SHOWN, {relatedTarget: i});
			  ri(i).trigger(t), ri(n._element).trigger(e);
			};
			t ? this._activate(t, t.parentNode, l) : l();
		  }
		}
	  }, t.dispose = function () {
		ri.removeData(this._element, oi), this._element = null;
	  }, t._activate = function (t, e, n) {
		var i = this, r = ("UL" === e.nodeName ? ri(e).find(_i) : ri(e).children(mi))[0], o = n && r && ri(r).hasClass(ui);
		if (r && o) {
		  var a = gt.getTransitionDurationFromElement(r);
		  ri(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a);
		} else i._transitionComplete(t, r, n);
	  }, t._transitionComplete = function (t, e, n) {
		if (e) {
		  ri(e).removeClass(di + " " + fi);
		  var i = ri(e.parentNode).find(yi)[0];
		  i && ri(i).removeClass(fi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", false);
		}
		if (ri(t).addClass(fi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", true), gt.reflow(t), ri(t).addClass(di), t.parentNode && ri(t.parentNode).hasClass(ci)) {
		  var r = ri(t).closest(pi)[0];
		  r && ri(r).find(Ei).addClass(fi), t.setAttribute("aria-expanded", true);
		}
		n && n();
	  }, i._jQueryInterface = function (n) {
		return this.each(function () {
		  var t = ri(this), e = t.data(oi);
		  if (e || (e = new i(this), t.data(oi, e)), "string" == typeof n) {
			if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
			e[n]();
		  }
		});
	  }, (null && i(i.prototype, null), [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}] && i(i, [{key: "VERSION", get: function () {
		return "4.1.1";
	  }}]), i), i;
	}(), ri(document).on(li.CLICK_DATA_API, vi, function (t) {
	  t.preventDefault(), bi._jQueryInterface.call(ri(this), "show");
	}), ri.fn.tab = bi._jQueryInterface, ri.fn.tab.Constructor = bi, ri.fn.tab.noConflict = function () {
	  return ri.fn.tab = ai, bi._jQueryInterface;
	}, bi);
	!function (t) {
	  if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
	  var e = t.fn.jquery.split(" ")[0].split(".");
	  if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
	}(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = Ti, t.Modal = Ci, t.Popover = Ii, t.Scrollspy = Di, t.Tab = Ai, t.Tooltip = wi, Object.defineProperty(t, "__esModule", {value: true});
  });
  !function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("whatInput", [], t) : "object" == typeof exports ? exports.whatInput = t() : e.whatInput = t();
  }(this, function () {
	return i = {}, n.m = o = [function (e, t) {
	  "use strict";
	  e.exports = function () {
		if ("undefined" == typeof document || "undefined" == typeof window) return {ask: function () {
		  return "initial";
		}, element: function () {
		  return null;
		}, ignoreKeys: function () {}, specificKeys: function () {}, registerOnChange: function () {}, unRegisterOnChange: function () {}};
		var t = document.documentElement, n = null, s = "initial", u = s, o = Date.now(), i = "false", d = ["button", "input", "select", "textarea"], r = [], c = [16, 17, 18, 91, 93], w = [], p = {keydown: "keyboard", keyup: "keyboard", mousedown: "mouse", mousemove: "mouse", MSPointerDown: "pointer", MSPointerMove: "pointer", pointerdown: "pointer", pointermove: "pointer", touchstart: "touch", touchend: "touch"}, a = false, f = {x: null, y: null}, l = {2: "touch", 3: "touch", 4: "mouse"}, m = false;
		try {
		  var e = Object.defineProperty({}, "passive", {get: function () {
			m = true;
		  }});
		  window.addEventListener("test", null, e);
		} catch (e) {}
		var h = function () {
		  var e = !!m && {passive: true};
		  document.addEventListener("DOMContentLoaded", v), window.PointerEvent ? (window.addEventListener("pointerdown", y), window.addEventListener("pointermove", E)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", y), window.addEventListener("MSPointerMove", E)) : (window.addEventListener("mousedown", y), window.addEventListener("mousemove", E), "ontouchstart" in window && (window.addEventListener("touchstart", y, e), window.addEventListener("touchend", y))), window.addEventListener(O(), E, e), window.addEventListener("keydown", y), window.addEventListener("keyup", y), window.addEventListener("focusin", L), window.addEventListener("focusout", b);
		}, v = function () {
		  if (i = !(t.getAttribute("data-whatpersist") || "false" === document.body.getAttribute("data-whatpersist"))) try {
			window.sessionStorage.getItem("what-input") && (s = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (u = window.sessionStorage.getItem("what-intent"));
		  } catch (e) {}
		  g("input"), g("intent");
		}, y = function (e) {
		  var t = e.which, n = p[e.type];
		  "pointer" === n && (n = S(e));
		  var o = !w.length && -1 === c.indexOf(t), i = w.length && -1 !== w.indexOf(t), r = "keyboard" === n && t && (o || i) || "mouse" === n || "touch" === n;
		  if (M(n) && (r = false), r && s !== n && (x("input", s = n), g("input")), r && u !== n) {
			var a = document.activeElement;
			a && a.nodeName && (-1 === d.indexOf(a.nodeName.toLowerCase()) || "button" === a.nodeName.toLowerCase() && !C(a, "form")) && (x("intent", u = n), g("intent"));
		  }
		}, g = function (e) {
		  t.setAttribute("data-what" + e, "input" === e ? s : u), k(e);
		}, E = function (e) {
		  var t = p[e.type];
		  "pointer" === t && (t = S(e)), A(e), (!a && !M(t) || a && "wheel" === e.type || "mousewheel" === e.type || "DOMMouseScroll" === e.type) && u !== t && (x("intent", u = t), g("intent"));
		}, L = function (e) {
		  e.target.nodeName ? (n = e.target.nodeName.toLowerCase(), t.setAttribute("data-whatelement", n), e.target.classList && e.target.classList.length && t.setAttribute("data-whatclasses", e.target.classList.toString().replace(" ", ","))) : b();
		}, b = function () {
		  n = null, t.removeAttribute("data-whatelement"), t.removeAttribute("data-whatclasses");
		}, x = function (e, t) {
		  if (i) try {
			window.sessionStorage.setItem("what-" + e, t);
		  } catch (e) {}
		}, S = function (e) {
		  return "number" == typeof e.pointerType ? l[e.pointerType] : "pen" === e.pointerType ? "touch" : e.pointerType;
		}, M = function (e) {
		  var t = Date.now(), n = "mouse" === e && "touch" === s && t - o < 200;
		  return o = t, n;
		}, O = function () {
		  return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
		}, k = function (e) {
		  for (var t = 0, n = r.length; t < n; t++) r[t].type === e && r[t].fn.call(void 0, "input" === e ? s : u);
		}, A = function (e) {
		  f.x !== e.screenX || f.y !== e.screenY ? (a = false, f.x = e.screenX, f.y = e.screenY) : a = true;
		}, C = function (e, t) {
		  var n = window.Element.prototype;
		  if (n.matches || (n.matches = n.msMatchesSelector || n.webkitMatchesSelector), n.closest) return e.closest(t);
		  do {
			if (e.matches(t)) return e;
			e = e.parentElement || e.parentNode;
		  } while (null !== e && 1 === e.nodeType);
		  return null;
		};
		return "addEventListener" in window && Array.prototype.indexOf && (p[O()] = "mouse", h()), {ask: function (e) {
		  return "intent" === e ? u : s;
		}, element: function () {
		  return n;
		}, ignoreKeys: function (e) {
		  c = e;
		}, specificKeys: function (e) {
		  w = e;
		}, registerOnChange: function (e, t) {
		  r.push({fn: e, type: t || "input"});
		}, unRegisterOnChange: function (e) {
		  var t = function (e) {
			for (var t = 0, n = r.length; t < n; t++) if (r[t].fn === e) return t;
		  }(e);
		  !t && 0 !== t || r.splice(t, 1);
		}, clearStorage: function () {
		  window.sessionStorage.clear();
		}};
	  }();
	}], n.c = i, n.p = "", n(0);
	function n(e) {
	  if (i[e]) return i[e].exports;
	  var t = i[e] = {exports: {}, id: e, loaded: false};
	  return o[e].call(t.exports, t, t.exports, n), t.loaded = true, t.exports;
	}
	var o, i;
  });
  var CreateError = function (message) {
	var div = $("<div>" + message + "</div>");
	div.addClass("ui-state-error ui-corner-all");
	div.html('<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 .3em;"></span>' + div.html() + "</p>");
	return div;
  };
  var CreateNotice = function (message) {
	var div = $("<div>" + message + "</div>");
	div.addClass("ui-state-highlight ui-corner-all");
	div.html('<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 .3em;"></span>' + div.html() + "</p>");
	return div;
  };
  window.onbeforeunload = function () {
	notifyScrollTop();
  };
  $(function () {
	if (typeof oauthAllowOrigin !== "undefined") {
	  breakFrameIfNotAllowedOrigin(oauthAllowOrigin);
	} else {
	  showIframeContent();
	}
  });
  var turn_preloader_on = function () {
	$("body").height("100%");
	$(".ajax_loader").show();
  };
  var turn_preloader_off = function () {
	$("body").height("auto");
	$(".ajax_loader").hide();
  };
  var addParameterToUrl = function (uri, key, value) {
	var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	var separator = uri.indexOf("?") !== -1 ? "&" : "?";
	if (uri.match(re)) {
	  return uri.replace(re, "$1" + key + "=" + value + "$2");
	} else {
	  return uri + separator + key + "=" + value;
	}
  };
  var replaceHrefIfInAppBrowser = function () {
	if (navigator.userAgent.indexOf("LibrusMobileApp") !== -1) {
	  $("a.switchableLink").each(function (index) {
		var url = $(this).attr("href");
		url = url.replace("http://", "librus://");
		url = url.replace("https://", "libruss://");
		$(this).attr("href", url);
	  });
	}
  };
  var displayErrorMessage = function (parentSelector, errorText, show) {
	if (errorText) {
	  var errorElement = $(parentSelector).find(".errorContainer");
	  errorElement.append($("<div></div>").html(errorText));
	  if (show) {
		errorElement.collapse("show");
	  }
	}
	return 1;
  };
  var displayErrorFieldMessage = function (input, parentSelector, errorText, errorId, show) {
	if (errorText) {
	  input.attr("aria-invalid", "true");
	  input.attr("aria-describedby", errorId);
	  var errorElement = $(parentSelector).find(".errorContainer");
	  errorElement.append($("<p></p>").attr("id", errorId).html(errorText));
	  if (show) {
		errorElement.collapse("show");
	  }
	}
	return 1;
  };
  var notifyResizing = function () {
	if (typeof parentUrlToNotify != "undefined") {
	  var parentDomainToNotify = parentUrlToNotify.match(/^http.?:\/\/[^/]+/)[0];
	  postToParent({command: "resize_ca_iframe", commandPayload: {height: $("body").innerHeight()}}, parentDomainToNotify);
	}
  };
  var notifyScrollTop = function () {
	if (typeof parentUrlToNotify != "undefined") {
	  var parentDomainToNotify = parentUrlToNotify.match(/^http.?:\/\/[^/]+/)[0];
	  postToParent({command: "scroll_top"}, parentDomainToNotify);
	}
  };
  var postToParent = function (message, parentWindowDomain) {
	if (window.parent != window) {
	  window.parent.postMessage(message, parentWindowDomain);
	}
  };
  var collapseFinishNotfiy = function () {
	$(".collapse").on("shown.bs.collapse", function () {
	  notifyResizing();
	}).on("show.bs.collapse", function () {
	  notifyResizing();
	});
  };
  var breakFrameIfNotAllowedOrigin = function (oauthAllowOrigin) {
	var referrerOrigin = getUrlOrigin(document.referrer);
	if (self === top || !oauthAllowOrigin || oauthAllowOrigin.includes(referrerOrigin)) {
	  showIframeContent();
	} else {
	  top.location = self.location;
	}
  };
  var showIframeContent = function () {
	var antiClickjackElement = document.getElementById("antiClickjack");
	if (antiClickjackElement) {
	  antiClickjackElement.parentNode.removeChild(antiClickjackElement);
	}
  };
  var getUrlOrigin = function (url) {
	var parser = document.createElement("a");
	parser.href = url;
	return parser.origin;
  };
  $.extend({URLEncode: function (string) {
	string = string.replace(/\r\n/g, "\n");
	var utftext = "";
	for (var n = 0; n < string.length; n++) {
	  var c = string.charCodeAt(n);
	  if (c < 128) {
		utftext += String.fromCharCode(c);
	  } else if (c > 127 && c < 2048) {
		utftext += String.fromCharCode(c >> 6 | 192);
		utftext += String.fromCharCode(c & 63 | 128);
	  } else {
		utftext += String.fromCharCode(c >> 12 | 224);
		utftext += String.fromCharCode(c >> 6 & 63 | 128);
		utftext += String.fromCharCode(c & 63 | 128);
	  }
	}
	return escape(utftext);
  }, URLDecode: function (utftext) {
	utftext = unescape(utftext);
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;
	while (i < utftext.length) {
	  c = utftext.charCodeAt(i);
	  if (c < 128) {
		string += String.fromCharCode(c);
		i++;
	  } else if (c > 191 && c < 224) {
		c2 = utftext.charCodeAt(i + 1);
		string += String.fromCharCode((c & 31) << 6 | c2 & 63);
		i += 2;
	  } else {
		c2 = utftext.charCodeAt(i + 1);
		c3 = utftext.charCodeAt(i + 2);
		string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
		i += 3;
	  }
	}
	return string;
  }});
  ;
  (function (factory) {
	if (typeof define === "function" && define.amd) {
	  if (typeof jQuery !== "undefined") {
		define(["jquery"], factory);
	  } else {
		define([], factory);
	  }
	} else {
	  if (typeof jQuery !== "undefined") {
		factory(jQuery);
	  } else {
		factory();
	  }
	}
  }(function ($, undefined) {
	var tag2attr = {a: "href", img: "src", form: "action", base: "href", script: "src", iframe: "src", link: "href"}, key = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], aliases = {anchor: "fragment"}, parser = {strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}, toString = Object.prototype.toString, isint = /^[0-9]+$/;
	function parseUri(url, strictMode) {
	  var str = decodeURI(url), res = parser[strictMode || false ? "strict" : "loose"].exec(str), uri = {attr: {}, param: {}, seg: {}}, i = 14;
	  while (i--) {
		uri.attr[key[i]] = res[i] || "";
	  }
	  uri.param.query = parseString(uri.attr.query);
	  uri.param.fragment = parseString(uri.attr.fragment);
	  uri.seg.path = uri.attr.path.replace(/^\/+|\/+$/g, "").split("/");
	  uri.seg.fragment = uri.attr.fragment.replace(/^\/+|\/+$/g, "").split("/");
	  uri.attr.base = uri.attr.host ? (uri.attr.protocol ? uri.attr.protocol + "://" + uri.attr.host : uri.attr.host) + (uri.attr.port ? ":" + uri.attr.port : "") : "";
	  return uri;
	}
	;
	function getAttrName(elm) {
	  var tn = elm.tagName;
	  if (typeof tn !== "undefined") return tag2attr[tn.toLowerCase()];
	  return tn;
	}
	function promote(parent, key) {
	  if (parent[key].length == 0) return parent[key] = {};
	  var t = {};
	  for (var i in parent[key]) t[i] = parent[key][i];
	  parent[key] = t;
	  return t;
	}
	function parse(parts, parent, key, val) {
	  var part = parts.shift();
	  if (!part) {
		if (Object.prototype.toString.call(parent[key]) === "[object Array]") {
		  parent[key].push(val);
		} else if ("object" == typeof parent[key]) {
		  parent[key] = val;
		} else if ("undefined" == typeof parent[key]) {
		  parent[key] = val;
		} else {
		  parent[key] = [parent[key], val];
		}
	  } else {
		var obj = parent[key] = parent[key] || [];
		if ("]" == part) {
		  if (Object.prototype.toString.call(obj) === "[object Array]") {
			if ("" != val) obj.push(val);
		  } else if ("object" == typeof obj) {
			obj[keys(obj).length] = val;
		  } else {
			obj = parent[key] = [parent[key], val];
		  }
		} else if (~part.indexOf("]")) {
		  part = part.substr(0, part.length - 1);
		  if (!isint.test(part) && Object.prototype.toString.call(obj) === "[object Array]") obj = promote(parent, key);
		  parse(parts, obj, part, val);
		} else {
		  if (!isint.test(part) && Object.prototype.toString.call(obj) === "[object Array]") obj = promote(parent, key);
		  parse(parts, obj, part, val);
		}
	  }
	}
	function merge(parent, key, val) {
	  if (~key.indexOf("]")) {
		var parts = key.split("["), len = parts.length, last = len - 1;
		parse(parts, parent, "base", val);
	  } else {
		if (!isint.test(key) && Object.prototype.toString.call(parent.base) === "[object Array]") {
		  var t = {};
		  for (var k in parent.base) t[k] = parent.base[k];
		  parent.base = t;
		}
		set(parent.base, key, val);
	  }
	  return parent;
	}
	function parseString(str) {
	  return reduce(String(str).split(/&|;/), function (ret, pair) {
		try {
		  pair = decodeURIComponent(pair.replace(/\+/g, " "));
		} catch (e) {}
		var eql = pair.indexOf("="), brace = lastBraceInKey(pair), key = pair.substr(0, brace || eql), val = pair.substr(brace || eql, pair.length), val = val.substr(val.indexOf("=") + 1, val.length);
		if ("" == key) key = pair, val = "";
		return merge(ret, key, val);
	  }, {base: {}}).base;
	}
	function set(obj, key, val) {
	  var v = obj[key];
	  if (undefined === v) {
		obj[key] = val;
	  } else if (Object.prototype.toString.call(v) === "[object Array]") {
		v.push(val);
	  } else {
		obj[key] = [v, val];
	  }
	}
	function lastBraceInKey(str) {
	  var len = str.length, brace, c;
	  for (var i = 0; i < len; ++i) {
		c = str[i];
		if ("]" == c) brace = false;
		if ("[" == c) brace = true;
		if ("=" == c && !brace) return i;
	  }
	}
	function reduce(obj, accumulator) {
	  var i = 0, l = obj.length >> 0, curr = arguments[2];
	  while (i < l) {
		if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
		++i;
	  }
	  return curr;
	}
	function keys(obj) {
	  var keys = [];
	  for (prop in obj) {
		if (obj.hasOwnProperty(prop)) keys.push(prop);
	  }
	  return keys;
	}
	function purl(url, strictMode) {
	  if (arguments.length === 1 && url === true) {
		strictMode = true;
		url = undefined;
	  }
	  strictMode = strictMode || false;
	  url = url || window.location.toString();
	  return {data: parseUri(url, strictMode), attr: function (attr) {
		attr = aliases[attr] || attr;
		return typeof attr !== "undefined" ? this.data.attr[attr] : this.data.attr;
	  }, param: function (param) {
		return typeof param !== "undefined" ? this.data.param.query[param] : this.data.param.query;
	  }, fparam: function (param) {
		return typeof param !== "undefined" ? this.data.param.fragment[param] : this.data.param.fragment;
	  }, segment: function (seg) {
		if (typeof seg === "undefined") {
		  return this.data.seg.path;
		} else {
		  seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1;
		  return this.data.seg.path[seg];
		}
	  }, fsegment: function (seg) {
		if (typeof seg === "undefined") {
		  return this.data.seg.fragment;
		} else {
		  seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1;
		  return this.data.seg.fragment[seg];
		}
	  }};
	}
	;
	if (typeof $ !== "undefined") {
	  $.fn.url = function (strictMode) {
		var url = "";
		if (this.length) {
		  url = $(this).attr(getAttrName(this[0])) || "";
		}
		return purl(url, strictMode);
	  };
	  $.url = purl;
	} else {
	  window.purl = purl;
	}
  }));
  (function ($) {
	$.toJSON = function (o) {
	  if (typeof JSON == "object" && JSON.stringify) return JSON.stringify(o);
	  var type = typeof o;
	  if (o === null) return "null";
	  if (type == "undefined") return undefined;
	  if (type == "number" || type == "boolean") return o + "";
	  if (type == "string") return $.quoteString(o);
	  if (type == "object") {
		if (typeof o.toJSON == "function") return $.toJSON(o.toJSON());
		if (o.constructor === Date) {
		  var month = o.getUTCMonth() + 1;
		  if (month < 10) month = "0" + month;
		  var day = o.getUTCDate();
		  if (day < 10) day = "0" + day;
		  var year = o.getUTCFullYear();
		  var hours = o.getUTCHours();
		  if (hours < 10) hours = "0" + hours;
		  var minutes = o.getUTCMinutes();
		  if (minutes < 10) minutes = "0" + minutes;
		  var seconds = o.getUTCSeconds();
		  if (seconds < 10) seconds = "0" + seconds;
		  var milli = o.getUTCMilliseconds();
		  if (milli < 100) milli = "0" + milli;
		  if (milli < 10) milli = "0" + milli;
		  return '"' + year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":" + seconds + "." + milli + 'Z"';
		}
		if (o.constructor === Array) {
		  var ret = [];
		  for (var i = 0; i < o.length; i++) ret.push($.toJSON(o[i]) || "null");
		  return "[" + ret.join(",") + "]";
		}
		var pairs = [];
		for (var k in o) {
		  var name;
		  var type = typeof k;
		  if (type == "number") name = '"' + k + '"'; else if (type == "string") name = $.quoteString(k); else continue;
		  if (typeof o[k] == "function") continue;
		  var val = $.toJSON(o[k]);
		  pairs.push(name + ":" + val);
		}
		return "{" + pairs.join(", ") + "}";
	  }
	};
	$.evalJSON = function (src) {
	  if (typeof JSON == "object" && JSON.parse) return JSON.parse(src);
	  return eval("(" + src + ")");
	};
	$.secureEvalJSON = function (src) {
	  if (typeof JSON == "object" && JSON.parse) return JSON.parse(src);
	  var filtered = src;
	  filtered = filtered.replace(/\\["\\\/bfnrtu]/g, "@");
	  filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
	  filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
	  if (/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")"); else throw new SyntaxError("Error parsing JSON, source is not valid.");
	};
	$.quoteString = function (string) {
	  if (string.match(_escapeable)) {
		return '"' + string.replace(_escapeable, function (a) {
		  var c = _meta[a];
		  if (typeof c === "string") return c;
		  c = a.charCodeAt();
		  return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
		}) + '"';
	  }
	  return '"' + string + '"';
	};
	var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
	var _meta = {"": "\\b", "	": "\\t", "\n": "\\n", "": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
  }(jQuery));
  