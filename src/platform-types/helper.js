var rt = Object.defineProperty;
var nt = (r, e, t) => e in r ? rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var o = (r, e, t) => (nt(r, typeof e != "symbol" ? e + "" : e, t), t);
import { g as Me, i as q, a as Ie, b as Ye, c as qe, d as at, e as Fe, _ as He, f as it, h as ot, j as st, k as ut, l as W, m as Le, n as ct, o as dt, p as lt, q as ft, r as pt, s as ht, t as Y, u as E, v as Re, w as mt, x as wt, y as yt, z as bt, A, B as te, C as gt, D as vt, E as re, F as xt, G as ne, H as Tt, I as ae, J as kt, K as Nt, L as Dt, M as Ot, N as Q } from "./format-CIwrh2wT.js";
import { X as Ta, O as ka, P as Na, U as Da, T as Oa, W as Ea, V as Pa, S as Sa, R as Ma, Q as Ia } from "./format-CIwrh2wT.js";
const $e = Me(function(r) {
  return r == null;
});
var je = function(r, e) {
  for (var t = -1, n = e.length, a = r.length; ++t < n; )
    r[a + t] = e[t];
  return r;
}, Et = je, Pt = q, Ce = function(r, e, t) {
  var n = e(r);
  return Pt(r) ? n : Et(n, t(r));
}, Qe = function() {
  return [];
}, St = function(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = 0, i = []; ++t < n; ) {
    var s = r[t];
    e(s, t, r) && (i[a++] = s);
  }
  return i;
}, Mt = Qe, It = Object.prototype.propertyIsEnumerable, ie = Object.getOwnPropertySymbols, _e = ie ? function(r) {
  return r == null ? [] : (r = Object(r), St(ie(r), function(e) {
    return It.call(r, e);
  }));
} : Mt, Yt = /^(?:0|[1-9]\d*)$/, Z = function(r, e) {
  var t = typeof r;
  return !!(e = e ?? 9007199254740991) && (t == "number" || t != "symbol" && Yt.test(r)) && r > -1 && r % 1 == 0 && r < e;
}, qt = function(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}, Ft = Ie, Ht = q, Lt = Ye, Rt = Z, $t = qe, jt = Object.prototype.hasOwnProperty, Be = function(r, e) {
  var t = Ht(r), n = !t && Ft(r), a = !t && !n && Lt(r), i = !t && !n && !a && $t(r), s = t || n || a || i, u = s ? qt(r.length, String) : [], d = u.length;
  for (var c in r)
    !e && !jt.call(r, c) || s && (c == "length" || a && (c == "offset" || c == "parent") || i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Rt(c, d)) || u.push(c);
  return u;
}, Ct = Object.prototype, Ge = function(r) {
  var e = r && r.constructor;
  return r === (typeof e == "function" && e.prototype || Ct);
}, Ae = function(r, e) {
  return function(t) {
    return r(e(t));
  };
}, Qt = Ae(Object.keys, Object), _t = Ge, Bt = Qt, Gt = Object.prototype.hasOwnProperty, At = at, Ut = Fe, Ue = function(r) {
  return r != null && Ut(r.length) && !At(r);
}, Xt = Be, Jt = function(r) {
  if (!_t(r))
    return Bt(r);
  var e = [];
  for (var t in Object(r))
    Gt.call(r, t) && t != "constructor" && e.push(t);
  return e;
}, Kt = Ue, Xe = function(r) {
  return Kt(r) ? Xt(r) : Jt(r);
}, Wt = Ce, Zt = _e, zt = Xe, oe = function(r) {
  return Wt(r, zt, Zt);
}, Vt = Object.prototype.hasOwnProperty, U = He, er = it, tr = ot, rr = function(r, e, t, n, a, i) {
  var s = 1 & t, u = oe(r), d = u.length;
  if (d != oe(e).length && !s)
    return !1;
  for (var c = d; c--; ) {
    var f = u[c];
    if (!(s ? f in e : Vt.call(e, f)))
      return !1;
  }
  var w = i.get(r), b = i.get(e);
  if (w && b)
    return w == e && b == r;
  var y = !0;
  i.set(r, e), i.set(e, r);
  for (var k = s; ++c < d; ) {
    var N = r[f = u[c]], D = e[f];
    if (n)
      var O = s ? n(D, N, f, e, r, i) : n(N, D, f, r, e, i);
    if (!(O === void 0 ? N === D || a(N, D, t, n, i) : O)) {
      y = !1;
      break;
    }
    k || (k = f == "constructor");
  }
  if (y && !k) {
    var S = r.constructor, l = e.constructor;
    S == l || !("constructor" in r) || !("constructor" in e) || typeof S == "function" && S instanceof S && typeof l == "function" && l instanceof l || (y = !1);
  }
  return i.delete(r), i.delete(e), y;
}, se = st, ue = q, ce = Ye, nr = qe, de = "[object Arguments]", le = "[object Array]", C = "[object Object]", fe = Object.prototype.hasOwnProperty, ar = function(r, e, t, n, a, i) {
  var s = ue(r), u = ue(e), d = s ? le : se(r), c = u ? le : se(e), f = (d = d == de ? C : d) == C, w = (c = c == de ? C : c) == C, b = d == c;
  if (b && ce(r)) {
    if (!ce(e))
      return !1;
    s = !0, f = !1;
  }
  if (b && !f)
    return i || (i = new U()), s || nr(r) ? er(r, e, t, n, a, i) : tr(r, e, d, t, n, a, i);
  if (!(1 & t)) {
    var y = f && fe.call(r, "__wrapped__"), k = w && fe.call(e, "__wrapped__");
    if (y || k) {
      var N = y ? r.value() : r, D = k ? e.value() : e;
      return i || (i = new U()), a(N, D, t, n, i);
    }
  }
  return !!b && (i || (i = new U()), rr(r, e, t, n, a, i));
}, pe = ut, Je = function r(e, t, n, a, i) {
  return e === t || (e == null || t == null || !pe(e) && !pe(t) ? e != e && t != t : ar(e, t, n, a, r, i));
}, ir = He, or = Je, sr = W, Ke = function(r) {
  return r == r && !sr(r);
}, ur = Ke, cr = Xe, We = function(r, e) {
  return function(t) {
    return t != null && t[r] === e && (e !== void 0 || r in Object(t));
  };
}, dr = function(r, e, t, n) {
  var a = t.length, i = a, s = !n;
  if (r == null)
    return !i;
  for (r = Object(r); a--; ) {
    var u = t[a];
    if (s && u[2] ? u[1] !== r[u[0]] : !(u[0] in r))
      return !1;
  }
  for (; ++a < i; ) {
    var d = (u = t[a])[0], c = r[d], f = u[1];
    if (s && u[2]) {
      if (c === void 0 && !(d in r))
        return !1;
    } else {
      var w = new ir();
      if (n)
        var b = n(c, f, d, r, e, w);
      if (!(b === void 0 ? or(f, c, 3, n, w) : b))
        return !1;
    }
  }
  return !0;
}, lr = function(r) {
  for (var e = cr(r), t = e.length; t--; ) {
    var n = e[t], a = r[n];
    e[t] = [n, a, ur(a)];
  }
  return e;
}, fr = We, pr = q, hr = Le, mr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wr = /^\w*$/, z = function(r, e) {
  if (pr(r))
    return !1;
  var t = typeof r;
  return !(t != "number" && t != "symbol" && t != "boolean" && r != null && !hr(r)) || wr.test(r) || !mr.test(r) || e != null && r in Object(e);
}, yr = ct, br = q, gr = z, vr = dt, xr = function(r) {
  return r == null ? "" : yr(r);
}, G = function(r, e) {
  return br(r) ? r : gr(r, e) ? [r] : vr(xr(r));
}, Tr = Le, R = function(r) {
  if (typeof r == "string" || Tr(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -1 / 0 ? "-0" : e;
}, kr = G, Nr = R, V = function(r, e) {
  for (var t = 0, n = (e = kr(e, r)).length; r != null && t < n; )
    r = r[Nr(e[t++])];
  return t && t == n ? r : void 0;
}, Dr = V, Or = G, Er = Ie, Pr = q, Sr = Z, Mr = Fe, Ir = R, Yr = function(r, e) {
  return r != null && e in Object(r);
}, qr = function(r, e, t) {
  for (var n = -1, a = (e = Or(e, r)).length, i = !1; ++n < a; ) {
    var s = Ir(e[n]);
    if (!(i = r != null && t(r, s)))
      break;
    r = r[s];
  }
  return i || ++n != a ? i : !!(a = r == null ? 0 : r.length) && Mr(a) && Sr(s, a) && (Pr(r) || Er(r));
}, Fr = Je, Hr = function(r, e, t) {
  var n = r == null ? void 0 : Dr(r, e);
  return n === void 0 ? t : n;
}, Lr = function(r, e) {
  return r != null && qr(r, e, Yr);
}, Rr = z, $r = Ke, jr = We, Cr = R, Qr = V, _r = function(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}, Br = function(r) {
  return function(e) {
    return Qr(e, r);
  };
}, Gr = z, Ar = R, Ur = function(r) {
  var e = lr(r);
  return e.length == 1 && e[0][2] ? fr(e[0][0], e[0][1]) : function(t) {
    return t === r || dr(t, r, e);
  };
}, Xr = function(r, e) {
  return Rr(r) && $r(e) ? jr(Cr(r), e) : function(t) {
    var n = Hr(t, r);
    return n === void 0 && n === e ? Lr(t, r) : Fr(e, n, 3);
  };
}, Jr = function(r) {
  return r;
}, Kr = q, Wr = function(r) {
  return Gr(r) ? _r(Ar(r)) : Br(r);
}, Ze = function(r) {
  return typeof r == "function" ? r : r == null ? Jr : typeof r == "object" ? Kr(r) ? Xr(r[0], r[1]) : Ur(r) : Wr(r);
}, Zr = function(r) {
  if (typeof r != "function")
    throw new TypeError("Expected a function");
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !r.call(this);
      case 1:
        return !r.call(this, e[0]);
      case 2:
        return !r.call(this, e[0], e[1]);
      case 3:
        return !r.call(this, e[0], e[1], e[2]);
    }
    return !r.apply(this, e);
  };
}, he = lt, zr = function(r, e, t) {
  e == "__proto__" && he ? he(r, e, { configurable: !0, enumerable: !0, value: t, writable: !0 }) : r[e] = t;
}, Vr = ft, en = Object.prototype.hasOwnProperty, tn = function(r, e, t) {
  var n = r[e];
  en.call(r, e) && Vr(n, t) && (t !== void 0 || e in r) || zr(r, e, t);
}, rn = G, nn = Z, me = W, an = R, on = V, sn = function(r, e, t, n) {
  if (!me(r))
    return r;
  for (var a = -1, i = (e = rn(e, r)).length, s = i - 1, u = r; u != null && ++a < i; ) {
    var d = an(e[a]), c = t;
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return r;
    if (a != s) {
      var f = u[d];
      (c = n ? n(f, d, u) : void 0) === void 0 && (c = me(f) ? f : nn(e[a + 1]) ? [] : {});
    }
    tn(u, d, c), u = u[d];
  }
  return r;
}, un = G, cn = function(r, e, t) {
  for (var n = -1, a = e.length, i = {}; ++n < a; ) {
    var s = e[n], u = on(r, s);
    t(u, s) && sn(i, un(s, r), u);
  }
  return i;
}, dn = Ae(Object.getPrototypeOf, Object), ln = je, fn = dn, pn = _e, hn = Qe, mn = Object.getOwnPropertySymbols ? function(r) {
  for (var e = []; r; )
    ln(e, pn(r)), r = fn(r);
  return e;
} : hn, wn = W, yn = Ge, bn = function(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}, gn = Object.prototype.hasOwnProperty, vn = Be, xn = function(r) {
  if (!wn(r))
    return bn(r);
  var e = yn(r), t = [];
  for (var n in r)
    (n != "constructor" || !e && gn.call(r, n)) && t.push(n);
  return t;
}, Tn = Ue, kn = Ce, Nn = mn, Dn = function(r) {
  return Tn(r) ? vn(r, !0) : xn(r);
}, On = pt, En = Ze, Pn = cn, Sn = function(r) {
  return kn(r, Dn, Nn);
}, Mn = Ze, In = Zr, Yn = function(r, e) {
  if (r == null)
    return {};
  var t = On(Sn(r), function(n) {
    return [n];
  });
  return e = En(e), Pn(r, t, function(n, a) {
    return e(n, a[0]);
  });
};
const ze = Me(function(r, e) {
  return Yn(r, In(Mn(e)));
}), X = /[\s,|]+/;
function ma(r) {
  const { mhId: e, networkId: t, payerId: n, authorizationNumber: a, referenceNumber: i, memberName: s, memberId: u, memberDOB: d, direction: c, statuses: f = [], fromTimestamp: w, toTimestamp: b, limit: y = 50, token: k, page: N, sortOn: D, caseFileId: O, docTypes: S = [], fileName: l, fileNamePartial: T, statusPartial: F, totalCount: $ = !0, latestOnly: p = !1 } = r, m = (P) => P, M = e == null ? void 0 : e.split(X).filter(m), L = t == null ? void 0 : t.split(X).filter(m), H = n == null ? void 0 : n.split(X).filter(m);
  return ze({ "mh-lookupFieldsOr": JSON.stringify(S.reduce((P, j) => ({ ...P, [j]: { cID_CaseFileReferenceId: O ? [`CaseFile:${O}`] : void 0 } }), {})), "mh-caseLookupFields": JSON.stringify({ FileName: l, memberName: s, memberId: u, memberDOB: d }), "mh-caseLookupFieldsOr": JSON.stringify({ mhId: M ? [...M] : void 0, networkId: L ? [...L] : void 0, payerId: H ? [...H] : void 0, authorizationNumber: a ? [a] : void 0, referenceNumber: i ? [i] : void 0 }), "mh-caseLookupFieldsLike": JSON.stringify({ FileName: T, Direction: c }), "mh-caseStatuses": JSON.stringify(f.filter((P) => P)), "mh-caseStatusesLike": F, "mh-fromTimestamp": w, "mh-toTimestamp": b, "mh-latestOnly": JSON.stringify(p), "mh-totalCount": JSON.stringify($), "mh-sortOn": D ? JSON.stringify(D) : void 0, "page-number": N ? JSON.stringify(parseInt(N)) : void 0, limit: y, token: k }, (P) => $e(P) || P === "[]" || P === "{}");
}
var qn = ((r) => (r.DEPLOYED = "DEPLOYED", r.SOURCES_RUNNING = "SOURCES_RUNNING", r.UNDEPLOYED = "UNDEPLOYED", r.DEPLOYING = "DEPLOYING", r.UNDEPLOYING = "UNDEPLOYING", r))(qn || {}), Fn = ((r) => (r.Dependent = "Dependent", r.Subscriber = "Subscriber", r))(Fn || {}), Hn = ((r) => (r.Active = "active", r.Terminated = "terminated", r.Future = "future", r))(Hn || {});
function wa(r) {
  const { resourceId: e, memberId: t, memberName: n, memberDateOfBirth: a, memberCoverageCurrency: i, enrollmentRequestCaseFileId: s, identifier: u, fileName: d, direction: c, dateFrom: f, dateTo: w, lastUpdatedFrom: b, lastUpdatedTo: y, skip: k, limit: N = 50, totalCount: D, sort: O } = r, S = ze({ "patient.identifier": t, "patient.birthdate": a }, $e), l = new URLSearchParams(S);
  if (f && l.append("date", `ge${f}`), w && l.append("date", `le${w}`), b && l.append("_lastUpdated", `ge${b}`), y && l.append("_lastUpdated", `le${y}`), e && l.append("_id", e), u && l.append("identifier", u), d && l.append("fileName:contains", d), c && l.append("direction:contains", c), i) {
    const T = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
    switch (i) {
      case "active":
        l.append("coverage:Coverage.period", `le${T}`), l.append("coverage:Coverage.period", `gt${T}`);
        break;
      case "terminated":
        l.append("coverage:Coverage.period", `eb${T}`);
        break;
      case "future":
        l.append("coverage:Coverage.period", `sa${T}`);
        break;
      default:
        throw new Error(`Unsupported CoverageState: ${i}`);
    }
  }
  if (n) {
    const T = n.trim().split(" ");
    T.length === 1 ? l.append("patient.name", `${T[0]}`) : T.length === 2 ? (l.append("patient.name", `${T[0]}`), l.append("patient.family", `${T[1]}`)) : T.length === 3 ? (l.append("patient.name", `${T[0]}`), l.append("patient.given", `${T[1]}`), l.append("patient.family", `${T[2]}`)) : T.forEach((F) => l.append("patient.name", F));
  }
  return s && l.append("caseFileId", s), k && l.append("_offset", `${k}`), N && l.append("_count", `${N}`), D && l.append("_summary", "count"), O && l.append("_sort", O), l.toString();
}
function ee(r) {
  const e = r.resource.name[0];
  if (e)
    return `${e.given.join(" ")} ${e.family}`;
}
function Ve(r) {
  const e = ht(r.resource.extension, "http://fhirserver/fhir/MHPatient#isSubscriber");
  if (e)
    return e === "N" ? "Dependent" : "Subscriber";
}
function we(r, e) {
  var t;
  return (t = r.entry) == null ? void 0 : t.find((n) => n.resource.resourceType === e);
}
function Ln(r, e, t) {
  var n;
  return (n = r.entry) == null ? void 0 : n.find((a) => a.resource.resourceType === e && a.resource.id === t);
}
function Rn(r) {
  var t;
  const e = (t = r.resource.address) == null ? void 0 : t[0];
  if (e) {
    const { line: n = [], postalCode: a = "", city: i = "", state: s = "" } = e;
    return `${n.join(" ")}, ${a} ${i}, ${s}`;
  }
}
function ya(r) {
  switch (r.resource.resourceType) {
    case "Organization":
      return r.resource.name;
    case "Patient":
      return ee(r);
    default:
      return;
  }
}
function et(r, e) {
  const t = Y(r);
  return isNaN(e) ? E(r, NaN) : (e && t.setDate(t.getDate() + e), t);
}
class tt {
  constructor() {
    o(this, "subPriority", 0);
  }
  validate(e, t) {
    return !0;
  }
}
class $n extends tt {
  constructor(e, t, n, a, i) {
    super(), this.value = e, this.validateValue = t, this.setValue = n, this.priority = a, i && (this.subPriority = i);
  }
  validate(e, t) {
    return this.validateValue(e, this.value, t);
  }
  set(e, t, n) {
    return this.setValue(e, t, this.value, n);
  }
}
class jn extends tt {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "subPriority", -1);
  }
  set(t, n) {
    return n.timestampIsSet ? t : E(t, function(a, i) {
      const s = i instanceof Date ? E(i, 0) : new i(0);
      return s.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), s.setHours(a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()), s;
    }(t, Date));
  }
}
class h {
  run(e, t, n, a) {
    const i = this.parse(e, t, n, a);
    return i ? { setter: new $n(i.value, this.validate, this.set, this.priority, this.subPriority), rest: i.rest } : null;
  }
  validate(e, t, n) {
    return !0;
  }
}
const ye = /^(1[0-2]|0?\d)/, Cn = /^(3[0-1]|[0-2]?\d)/, Qn = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, be = /^(5[0-3]|[0-4]?\d)/, _n = /^(2[0-3]|[0-1]?\d)/, Bn = /^(2[0-4]|[0-1]?\d)/, Gn = /^(1[0-1]|0?\d)/, An = /^(1[0-2]|0?\d)/, Un = /^[0-5]?\d/, Xn = /^[0-5]?\d/, Jn = /^\d/, Kn = /^\d{1,2}/, Wn = /^\d{1,3}/, Zn = /^\d{1,4}/, zn = /^-?\d+/, Vn = /^-?\d/, ea = /^-?\d{1,2}/, ta = /^-?\d{1,3}/, ra = /^-?\d{1,4}/, ge = /^([+-])(\d{2})(\d{2})?|Z/, ve = /^([+-])(\d{2})(\d{2})|Z/, xe = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/, Te = /^([+-])(\d{2}):(\d{2})|Z/, ke = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
function x(r, e) {
  return r && { value: e(r.value), rest: r.rest };
}
function g(r, e) {
  const t = e.match(r);
  return t ? { value: parseInt(t[0], 10), rest: e.slice(t[0].length) } : null;
}
function I(r, e) {
  const t = e.match(r);
  if (!t)
    return null;
  if (t[0] === "Z")
    return { value: 0, rest: e.slice(1) };
  const n = t[1] === "+" ? 1 : -1, a = t[2] ? parseInt(t[2], 10) : 0, i = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return { value: n * (a * mt + i * wt + s * yt), rest: e.slice(t[0].length) };
}
function Ne(r) {
  return g(zn, r);
}
function v(r, e) {
  switch (r) {
    case 1:
      return g(Jn, e);
    case 2:
      return g(Kn, e);
    case 3:
      return g(Wn, e);
    case 4:
      return g(Zn, e);
    default:
      return g(new RegExp("^\\d{1," + r + "}"), e);
  }
}
function De(r, e) {
  switch (r) {
    case 1:
      return g(Vn, e);
    case 2:
      return g(ea, e);
    case 3:
      return g(ta, e);
    case 4:
      return g(ra, e);
    default:
      return g(new RegExp("^-?\\d{1," + r + "}"), e);
  }
}
function J(r) {
  switch (r) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function Oe(r, e) {
  const t = e > 0, n = t ? e : 1 - e;
  let a;
  if (n <= 50)
    a = r || 100;
  else {
    const i = n + 50;
    a = r + 100 * Math.trunc(i / 100) - (r >= i % 100 ? 100 : 0);
  }
  return t ? a : 1 - a;
}
function Ee(r) {
  return r % 400 == 0 || r % 4 == 0 && r % 100 != 0;
}
const na = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], aa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function K(r, e, t) {
  var d, c, f, w;
  const n = Re(), a = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((w = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = Y(r), s = i.getDay(), u = 7 - a;
  return et(i, e < 0 || e > 6 ? e - (s + u) % 7 : ((e % 7 + 7) % 7 + u) % 7 - (s + u) % 7);
}
function ia(r, e) {
  const t = Y(r), n = function(a) {
    let i = Y(a).getDay();
    return i === 0 && (i = 7), i;
  }(t);
  return et(t, e - n);
}
const oa = { G: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 140);
    o(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
      case "GGGGG":
        return n.era(e, { width: "narrow" });
      default:
        return n.era(e, { width: "wide" }) || n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
    }
  }
  set(e, t, n) {
    return t.era = n, e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}(), y: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    const a = (i) => ({ year: i, isTwoDigitYear: t === "yy" });
    switch (t) {
      case "y":
        return x(v(4, e), a);
      case "yo":
        return x(n.ordinalNumber(e, { unit: "year" }), a);
      default:
        return x(v(t.length, e), a);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, n) {
    const a = e.getFullYear();
    if (n.isTwoDigitYear) {
      const s = Oe(n.year, a);
      return e.setFullYear(s, 0, 1), e.setHours(0, 0, 0, 0), e;
    }
    const i = "era" in t && t.era !== 1 ? 1 - n.year : n.year;
    return e.setFullYear(i, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}(), Y: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(e, t, n) {
    const a = (i) => ({ year: i, isTwoDigitYear: t === "YY" });
    switch (t) {
      case "Y":
        return x(v(4, e), a);
      case "Yo":
        return x(n.ordinalNumber(e, { unit: "year" }), a);
      default:
        return x(v(t.length, e), a);
    }
  }
  validate(e, t) {
    return t.isTwoDigitYear || t.year > 0;
  }
  set(e, t, n, a) {
    const i = bt(e, a);
    if (n.isTwoDigitYear) {
      const u = Oe(n.year, i);
      return e.setFullYear(u, 0, a.firstWeekContainsDate), e.setHours(0, 0, 0, 0), A(e, a);
    }
    const s = "era" in t && t.era !== 1 ? 1 - n.year : n.year;
    return e.setFullYear(s, 0, a.firstWeekContainsDate), e.setHours(0, 0, 0, 0), A(e, a);
  }
}(), R: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return De(t === "R" ? 4 : t.length, e);
  }
  set(e, t, n) {
    const a = E(e, 0);
    return a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0), te(a);
  }
}(), u: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 130);
    o(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(e, t) {
    return De(t === "u" ? 4 : t.length, e);
  }
  set(e, t, n) {
    return e.setFullYear(n, 0, 1), e.setHours(0, 0, 0, 0), e;
  }
}(), Q: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "Q":
      case "QQ":
        return v(t.length, e);
      case "Qo":
        return n.ordinalNumber(e, { unit: "quarter" });
      case "QQQ":
        return n.quarter(e, { width: "abbreviated", context: "formatting" }) || n.quarter(e, { width: "narrow", context: "formatting" });
      case "QQQQQ":
        return n.quarter(e, { width: "narrow", context: "formatting" });
      default:
        return n.quarter(e, { width: "wide", context: "formatting" }) || n.quarter(e, { width: "abbreviated", context: "formatting" }) || n.quarter(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, n) {
    return e.setMonth(3 * (n - 1), 1), e.setHours(0, 0, 0, 0), e;
  }
}(), q: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "q":
      case "qq":
        return v(t.length, e);
      case "qo":
        return n.ordinalNumber(e, { unit: "quarter" });
      case "qqq":
        return n.quarter(e, { width: "abbreviated", context: "standalone" }) || n.quarter(e, { width: "narrow", context: "standalone" });
      case "qqqqq":
        return n.quarter(e, { width: "narrow", context: "standalone" });
      default:
        return n.quarter(e, { width: "wide", context: "standalone" }) || n.quarter(e, { width: "abbreviated", context: "standalone" }) || n.quarter(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 4;
  }
  set(e, t, n) {
    return e.setMonth(3 * (n - 1), 1), e.setHours(0, 0, 0, 0), e;
  }
}(), M: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    o(this, "priority", 110);
  }
  parse(e, t, n) {
    const a = (i) => i - 1;
    switch (t) {
      case "M":
        return x(g(ye, e), a);
      case "MM":
        return x(v(2, e), a);
      case "Mo":
        return x(n.ordinalNumber(e, { unit: "month" }), a);
      case "MMM":
        return n.month(e, { width: "abbreviated", context: "formatting" }) || n.month(e, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return n.month(e, { width: "narrow", context: "formatting" });
      default:
        return n.month(e, { width: "wide", context: "formatting" }) || n.month(e, { width: "abbreviated", context: "formatting" }) || n.month(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, n) {
    return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
  }
}(), L: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 110);
    o(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    const a = (i) => i - 1;
    switch (t) {
      case "L":
        return x(g(ye, e), a);
      case "LL":
        return x(v(2, e), a);
      case "Lo":
        return x(n.ordinalNumber(e, { unit: "month" }), a);
      case "LLL":
        return n.month(e, { width: "abbreviated", context: "standalone" }) || n.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return n.month(e, { width: "narrow", context: "standalone" });
      default:
        return n.month(e, { width: "wide", context: "standalone" }) || n.month(e, { width: "abbreviated", context: "standalone" }) || n.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, n) {
    return e.setMonth(n, 1), e.setHours(0, 0, 0, 0), e;
  }
}(), w: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "w":
        return g(be, e);
      case "wo":
        return n.ordinalNumber(e, { unit: "week" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, n, a) {
    return A(function(i, s, u) {
      const d = Y(i), c = gt(d, u) - s;
      return d.setDate(d.getDate() - 7 * c), d;
    }(e, n, a), a);
  }
}(), I: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 100);
    o(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "I":
        return g(be, e);
      case "Io":
        return n.ordinalNumber(e, { unit: "week" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 53;
  }
  set(e, t, n) {
    return te(function(a, i) {
      const s = Y(a), u = vt(s) - i;
      return s.setDate(s.getDate() - 7 * u), s;
    }(e, n));
  }
}(), d: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "d":
        return g(Cn, e);
      case "do":
        return n.ordinalNumber(e, { unit: "date" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    const n = Ee(e.getFullYear()), a = e.getMonth();
    return n ? t >= 1 && t <= aa[a] : t >= 1 && t <= na[a];
  }
  set(e, t, n) {
    return e.setDate(n), e.setHours(0, 0, 0, 0), e;
  }
}(), D: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subpriority", 1);
    o(this, "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "D":
      case "DD":
        return g(Qn, e);
      case "Do":
        return n.ordinalNumber(e, { unit: "date" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return Ee(e.getFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
  }
  set(e, t, n) {
    return e.setMonth(0, n), e.setHours(0, 0, 0, 0), e;
  }
}(), E: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return n.day(e, { width: "narrow", context: "formatting" });
      case "EEEEEE":
        return n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
      default:
        return n.day(e, { width: "wide", context: "formatting" }) || n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, n, a) {
    return (e = K(e, n, a)).setHours(0, 0, 0, 0), e;
  }
}(), e: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
  }
  parse(e, t, n, a) {
    const i = (s) => {
      const u = 7 * Math.floor((s - 1) / 7);
      return (s + a.weekStartsOn + 6) % 7 + u;
    };
    switch (t) {
      case "e":
      case "ee":
        return x(v(t.length, e), i);
      case "eo":
        return x(n.ordinalNumber(e, { unit: "day" }), i);
      case "eee":
        return n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return n.day(e, { width: "narrow", context: "formatting" });
      case "eeeeee":
        return n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
      default:
        return n.day(e, { width: "wide", context: "formatting" }) || n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, n, a) {
    return (e = K(e, n, a)).setHours(0, 0, 0, 0), e;
  }
}(), c: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
  }
  parse(e, t, n, a) {
    const i = (s) => {
      const u = 7 * Math.floor((s - 1) / 7);
      return (s + a.weekStartsOn + 6) % 7 + u;
    };
    switch (t) {
      case "c":
      case "cc":
        return x(v(t.length, e), i);
      case "co":
        return x(n.ordinalNumber(e, { unit: "day" }), i);
      case "ccc":
        return n.day(e, { width: "abbreviated", context: "standalone" }) || n.day(e, { width: "short", context: "standalone" }) || n.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return n.day(e, { width: "narrow", context: "standalone" });
      case "cccccc":
        return n.day(e, { width: "short", context: "standalone" }) || n.day(e, { width: "narrow", context: "standalone" });
      default:
        return n.day(e, { width: "wide", context: "standalone" }) || n.day(e, { width: "abbreviated", context: "standalone" }) || n.day(e, { width: "short", context: "standalone" }) || n.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, n, a) {
    return (e = K(e, n, a)).setHours(0, 0, 0, 0), e;
  }
}(), i: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
  }
  parse(e, t, n) {
    const a = (i) => i === 0 ? 7 : i;
    switch (t) {
      case "i":
      case "ii":
        return v(t.length, e);
      case "io":
        return n.ordinalNumber(e, { unit: "day" });
      case "iii":
        return x(n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" }), a);
      case "iiiii":
        return x(n.day(e, { width: "narrow", context: "formatting" }), a);
      case "iiiiii":
        return x(n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" }), a);
      default:
        return x(n.day(e, { width: "wide", context: "formatting" }) || n.day(e, { width: "abbreviated", context: "formatting" }) || n.day(e, { width: "short", context: "formatting" }) || n.day(e, { width: "narrow", context: "formatting" }), a);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 7;
  }
  set(e, t, n) {
    return (e = ia(e, n)).setHours(0, 0, 0, 0), e;
  }
}(), a: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "a":
      case "aa":
      case "aaa":
        return n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
      case "aaaaa":
        return n.dayPeriod(e, { width: "narrow", context: "formatting" });
      default:
        return n.dayPeriod(e, { width: "wide", context: "formatting" }) || n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
    }
  }
  set(e, t, n) {
    return e.setHours(J(n), 0, 0, 0), e;
  }
}(), b: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "b":
      case "bb":
      case "bbb":
        return n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
      case "bbbbb":
        return n.dayPeriod(e, { width: "narrow", context: "formatting" });
      default:
        return n.dayPeriod(e, { width: "wide", context: "formatting" }) || n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
    }
  }
  set(e, t, n) {
    return e.setHours(J(n), 0, 0, 0), e;
  }
}(), B: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 80);
    o(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
      case "BBBBB":
        return n.dayPeriod(e, { width: "narrow", context: "formatting" });
      default:
        return n.dayPeriod(e, { width: "wide", context: "formatting" }) || n.dayPeriod(e, { width: "abbreviated", context: "formatting" }) || n.dayPeriod(e, { width: "narrow", context: "formatting" });
    }
  }
  set(e, t, n) {
    return e.setHours(J(n), 0, 0, 0), e;
  }
}(), h: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "h":
        return g(An, e);
      case "ho":
        return n.ordinalNumber(e, { unit: "hour" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 12;
  }
  set(e, t, n) {
    const a = e.getHours() >= 12;
    return a && n < 12 ? e.setHours(n + 12, 0, 0, 0) : a || n !== 12 ? e.setHours(n, 0, 0, 0) : e.setHours(0, 0, 0, 0), e;
  }
}(), H: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "H":
        return g(_n, e);
      case "Ho":
        return n.ordinalNumber(e, { unit: "hour" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 23;
  }
  set(e, t, n) {
    return e.setHours(n, 0, 0, 0), e;
  }
}(), K: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "K":
        return g(Gn, e);
      case "Ko":
        return n.ordinalNumber(e, { unit: "hour" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 11;
  }
  set(e, t, n) {
    return e.getHours() >= 12 && n < 12 ? e.setHours(n + 12, 0, 0, 0) : e.setHours(n, 0, 0, 0), e;
  }
}(), k: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 70);
    o(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "k":
        return g(Bn, e);
      case "ko":
        return n.ordinalNumber(e, { unit: "hour" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 1 && t <= 24;
  }
  set(e, t, n) {
    const a = n <= 24 ? n % 24 : n;
    return e.setHours(a, 0, 0, 0), e;
  }
}(), m: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 60);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "m":
        return g(Un, e);
      case "mo":
        return n.ordinalNumber(e, { unit: "minute" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, n) {
    return e.setMinutes(n, 0, 0), e;
  }
}(), s: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t, n) {
    switch (t) {
      case "s":
        return g(Xn, e);
      case "so":
        return n.ordinalNumber(e, { unit: "second" });
      default:
        return v(t.length, e);
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 59;
  }
  set(e, t, n) {
    return e.setSeconds(n, 0), e;
  }
}(), S: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(e, t) {
    return x(v(t.length, e), (n) => Math.trunc(n * Math.pow(10, 3 - t.length)));
  }
  set(e, t, n) {
    return e.setMilliseconds(n), e;
  }
}(), X: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, t) {
    switch (t) {
      case "X":
        return I(ge, e);
      case "XX":
        return I(ve, e);
      case "XXXX":
        return I(xe, e);
      case "XXXXX":
        return I(ke, e);
      default:
        return I(Te, e);
    }
  }
  set(e, t, n) {
    return t.timestampIsSet ? e : E(e, e.getTime() - re(e) - n);
  }
}(), x: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 10);
    o(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, t) {
    switch (t) {
      case "x":
        return I(ge, e);
      case "xx":
        return I(ve, e);
      case "xxxx":
        return I(xe, e);
      case "xxxxx":
        return I(ke, e);
      default:
        return I(Te, e);
    }
  }
  set(e, t, n) {
    return t.timestampIsSet ? e : E(e, e.getTime() - re(e) - n);
  }
}(), t: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 40);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Ne(e);
  }
  set(e, t, n) {
    return [E(e, 1e3 * n), { timestampIsSet: !0 }];
  }
}(), T: new class extends h {
  constructor() {
    super(...arguments);
    o(this, "priority", 20);
    o(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return Ne(e);
  }
  set(e, t, n) {
    return [E(e, n), { timestampIsSet: !0 }];
  }
}() }, sa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ua = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ca = /^'([^]*?)'?$/, da = /''/g, la = /\S/, fa = /[a-zA-Z]/;
function _(r, e, t, n) {
  var N, D, O, S, l, T, F, $;
  const a = Object.assign({}, Re()), i = (n == null ? void 0 : n.locale) ?? a.locale ?? xt, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((D = (N = n == null ? void 0 : n.locale) == null ? void 0 : N.options) == null ? void 0 : D.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((S = (O = a.locale) == null ? void 0 : O.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1, u = (n == null ? void 0 : n.weekStartsOn) ?? ((T = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : T.weekStartsOn) ?? a.weekStartsOn ?? (($ = (F = a.locale) == null ? void 0 : F.options) == null ? void 0 : $.weekStartsOn) ?? 0;
  if (e === "")
    return r === "" ? Y(t) : E(t, NaN);
  const d = { firstWeekContainsDate: s, weekStartsOn: u, locale: i }, c = [new jn()], f = e.match(ua).map((p) => {
    const m = p[0];
    return m in ne ? (0, ne[m])(p, i.formatLong) : p;
  }).join("").match(sa), w = [];
  for (let p of f) {
    !(n != null && n.useAdditionalWeekYearTokens) && Tt(p) && ae(p, e, r), !(n != null && n.useAdditionalDayOfYearTokens) && kt(p) && ae(p, e, r);
    const m = p[0], M = oa[m];
    if (M) {
      const { incompatibleTokens: L } = M;
      if (Array.isArray(L)) {
        const P = w.find((j) => L.includes(j.token) || j.token === m);
        if (P)
          throw new RangeError(`The format string mustn't contain \`${P.fullToken}\` and \`${p}\` at the same time`);
      } else if (M.incompatibleTokens === "*" && w.length > 0)
        throw new RangeError(`The format string mustn't contain \`${p}\` and any other token at the same time`);
      w.push({ token: m, fullToken: p });
      const H = M.run(r, p, i.match, d);
      if (!H)
        return E(t, NaN);
      c.push(H.setter), r = H.rest;
    } else {
      if (m.match(fa))
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + m + "`");
      if (p === "''" ? p = "'" : m === "'" && (p = p.match(ca)[1].replace(da, "'")), r.indexOf(p) !== 0)
        return E(t, NaN);
      r = r.slice(p.length);
    }
  }
  if (r.length > 0 && la.test(r))
    return E(t, NaN);
  const b = c.map((p) => p.priority).sort((p, m) => m - p).filter((p, m, M) => M.indexOf(p) === m).map((p) => c.filter((m) => m.priority === p).sort((m, M) => M.subPriority - m.subPriority)).map((p) => p[0]);
  let y = Y(t);
  if (isNaN(y.getTime()))
    return E(t, NaN);
  const k = {};
  for (const p of b) {
    if (!p.validate(y, d))
      return E(t, NaN);
    const m = p.set(y, k, d);
    Array.isArray(m) ? (y = m[0], Object.assign(k, m[1])) : y = m;
  }
  return E(t, y);
}
const Pe = "MMM d, yyyy", B = "yyyy-MM-dd", Se = "MM-dd-yyyy";
function ba(r) {
  return r.map((e) => {
    var w, b, y, k;
    const t = (w = e.entry) == null ? void 0 : w.find(Nt);
    let n = "", a = "";
    t && (n = ee(t), a = Ve(t));
    const i = (b = e.entry) == null ? void 0 : b.find(Dt);
    let s = "";
    i && (s = i.resource.id);
    const u = (y = e.entry) == null ? void 0 : y.find(Ot);
    let d, c, f = !1;
    if (u) {
      const N = u.resource.period.start, D = u.resource.period.end;
      d = _(N, B, /* @__PURE__ */ new Date()), c = D ? _(D, B, /* @__PURE__ */ new Date()) : void 0;
      const O = /* @__PURE__ */ new Date();
      f = c ? d < O && c >= O : d < O;
    }
    return { enrollmentId: s, memberId: (k = t == null ? void 0 : t.resource.identifier) == null ? void 0 : k[0].value, memberName: n, memberType: a, coverageStart: d ? Q(d, Se) : void 0, coverageEnd: c ? Q(c, Se) : void 0, enrollmentCurrent: f ? "Yes" : "No" };
  });
}
function ga(r) {
  var w;
  const e = we(r, "Patient"), t = we(r, "Coverage"), n = t.resource.payor.map((b) => b.reference.split("/")).map(([b, y]) => Ln(r, b, y)), a = t.resource.period.start, i = t.resource.period.end, s = Q(_(a, B, /* @__PURE__ */ new Date()), Pe), u = i ? Q(_(i, B, /* @__PURE__ */ new Date()), Pe) : "";
  let d, c, f;
  return e && (c = Ve(e), d = ee(e), f = Rn(e)), { memberName: d, memberId: (w = e.resource.identifier) == null ? void 0 : w[0].value, memberType: c, memberDateOfBirth: e.resource.birthDate, address: f, coveragePeriod: `${s} - ${u}`, payors: n };
}
export {
  Hn as CoverageState,
  Ta as ExpectationResult,
  ka as FileDirection,
  qn as FlowStatus,
  Fn as MemberType,
  wa as buildFhirSearchQueryString,
  ma as buildSearchCasesHeader,
  Na as formatDirection,
  Rn as getFormattedAddressFromPatient,
  ht as getFromValueStringExtension,
  ee as getMemberNameFromPatient,
  Ve as getMemberTypeFromPatient,
  ya as getNameFromEntry,
  we as getResourceByType,
  Ln as getResourceByTypeAndId,
  Da as isCompositeExtension,
  Ot as isCoverageFhirResourceEntry,
  Oa as isDateTimeExtension,
  Ea as isDocumentReferenceFhirResourceEntry,
  Dt as isEnrollmentRequestFhirResourceEntry,
  Pa as isOrganizationFhirResourceEntry,
  Nt as isPatientFhirResourceEntry,
  Sa as isStringExtension,
  ba as processEligibilityExplorerResults,
  ga as processEnrollmentRequestBundle,
  Ma as processFileExplorerResults,
  Ia as processMongoSearchResults
};
