(function () {
	const e = document.createElement('link').relList;
	if (e && e.supports && e.supports('modulepreload')) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
	new MutationObserver((r) => {
		for (const i of r)
			if (i.type === 'childList')
				for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(r) {
		const i = {};
		return (
			r.integrity && (i.integrity = r.integrity),
			r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
			r.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: r.crossOrigin === 'anonymous'
					? (i.credentials = 'omit')
					: (i.credentials = 'same-origin'),
			i
		);
	}
	function s(r) {
		if (r.ep) return;
		r.ep = !0;
		const i = n(r);
		fetch(r.href, i);
	}
})();
function mr(t, e) {
	const n = new Set(t.split(','));
	return e ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const ce = {},
	Qt = [],
	$e = () => {},
	Va = () => !1,
	cs = (t) =>
		t.charCodeAt(0) === 111 &&
		t.charCodeAt(1) === 110 &&
		(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
	_r = (t) => t.startsWith('onUpdate:'),
	be = Object.assign,
	yr = (t, e) => {
		const n = t.indexOf(e);
		n > -1 && t.splice(n, 1);
	},
	Ka = Object.prototype.hasOwnProperty,
	J = (t, e) => Ka.call(t, e),
	F = Array.isArray,
	Xt = (t) => Ln(t) === '[object Map]',
	us = (t) => Ln(t) === '[object Set]',
	Xr = (t) => Ln(t) === '[object Date]',
	V = (t) => typeof t == 'function',
	fe = (t) => typeof t == 'string',
	yt = (t) => typeof t == 'symbol',
	ae = (t) => t !== null && typeof t == 'object',
	vr = (t) => (ae(t) || V(t)) && V(t.then) && V(t.catch),
	ho = Object.prototype.toString,
	Ln = (t) => ho.call(t),
	Wa = (t) => Ln(t).slice(8, -1),
	fo = (t) => Ln(t) === '[object Object]',
	br = (t) => fe(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
	Yn = mr(
		',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
	),
	hs = (t) => {
		const e = Object.create(null);
		return (n) => e[n] || (e[n] = t(n));
	},
	Ga = /-(\w)/g,
	Ye = hs((t) => t.replace(Ga, (e, n) => (n ? n.toUpperCase() : ''))),
	za = /\B([A-Z])/g,
	Lt = hs((t) => t.replace(za, '-$1').toLowerCase()),
	fs = hs((t) => t.charAt(0).toUpperCase() + t.slice(1)),
	Os = hs((t) => (t ? `on${fs(t)}` : '')),
	vt = (t, e) => !Object.is(t, e),
	Qn = (t, e) => {
		for (let n = 0; n < t.length; n++) t[n](e);
	},
	ts = (t, e, n) => {
		Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
	},
	Vs = (t) => {
		const e = parseFloat(t);
		return isNaN(e) ? t : e;
	},
	Ja = (t) => {
		const e = fe(t) ? Number(t) : NaN;
		return isNaN(e) ? t : e;
	};
let Zr;
const po = () =>
	Zr ||
	(Zr =
		typeof globalThis < 'u'
			? globalThis
			: typeof self < 'u'
				? self
				: typeof window < 'u'
					? window
					: typeof global < 'u'
						? global
						: {});
function wr(t) {
	if (F(t)) {
		const e = {};
		for (let n = 0; n < t.length; n++) {
			const s = t[n],
				r = fe(s) ? Za(s) : wr(s);
			if (r) for (const i in r) e[i] = r[i];
		}
		return e;
	} else if (fe(t) || ae(t)) return t;
}
const Ya = /;(?![^(]*\))/g,
	Qa = /:([^]+)/,
	Xa = /\/\*[^]*?\*\//g;
function Za(t) {
	const e = {};
	return (
		t
			.replace(Xa, '')
			.split(Ya)
			.forEach((n) => {
				if (n) {
					const s = n.split(Qa);
					s.length > 1 && (e[s[0].trim()] = s[1].trim());
				}
			}),
		e
	);
}
function Pt(t) {
	let e = '';
	if (fe(t)) e = t;
	else if (F(t))
		for (let n = 0; n < t.length; n++) {
			const s = Pt(t[n]);
			s && (e += s + ' ');
		}
	else if (ae(t)) for (const n in t) t[n] && (e += n + ' ');
	return e.trim();
}
const el = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
	tl = mr(el);
function go(t) {
	return !!t || t === '';
}
function nl(t, e) {
	if (t.length !== e.length) return !1;
	let n = !0;
	for (let s = 0; n && s < t.length; s++) n = ds(t[s], e[s]);
	return n;
}
function ds(t, e) {
	if (t === e) return !0;
	let n = Xr(t),
		s = Xr(e);
	if (n || s) return n && s ? t.getTime() === e.getTime() : !1;
	if (((n = yt(t)), (s = yt(e)), n || s)) return t === e;
	if (((n = F(t)), (s = F(e)), n || s)) return n && s ? nl(t, e) : !1;
	if (((n = ae(t)), (s = ae(e)), n || s)) {
		if (!n || !s) return !1;
		const r = Object.keys(t).length,
			i = Object.keys(e).length;
		if (r !== i) return !1;
		for (const o in t) {
			const a = t.hasOwnProperty(o),
				l = e.hasOwnProperty(o);
			if ((a && !l) || (!a && l) || !ds(t[o], e[o])) return !1;
		}
	}
	return String(t) === String(e);
}
function mo(t, e) {
	return t.findIndex((n) => ds(n, e));
}
const Ct = (t) =>
		fe(t)
			? t
			: t == null
				? ''
				: F(t) || (ae(t) && (t.toString === ho || !V(t.toString)))
					? JSON.stringify(t, _o, 2)
					: String(t),
	_o = (t, e) =>
		e && e.__v_isRef
			? _o(t, e.value)
			: Xt(e)
				? {
						[`Map(${e.size})`]: [...e.entries()].reduce(
							(n, [s, r], i) => ((n[Ps(s, i) + ' =>'] = r), n),
							{}
						),
					}
				: us(e)
					? { [`Set(${e.size})`]: [...e.values()].map((n) => Ps(n)) }
					: yt(e)
						? Ps(e)
						: ae(e) && !F(e) && !fo(e)
							? String(e)
							: e,
	Ps = (t, e = '') => {
		var n;
		return yt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
	};
let Ie;
class yo {
	constructor(e = !1) {
		(this.detached = e),
			(this._active = !0),
			(this.effects = []),
			(this.cleanups = []),
			(this.parent = Ie),
			!e && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(this) - 1);
	}
	get active() {
		return this._active;
	}
	run(e) {
		if (this._active) {
			const n = Ie;
			try {
				return (Ie = this), e();
			} finally {
				Ie = n;
			}
		}
	}
	on() {
		Ie = this;
	}
	off() {
		Ie = this.parent;
	}
	stop(e) {
		if (this._active) {
			let n, s;
			for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
			for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
			if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
			if (!this.detached && this.parent && !e) {
				const r = this.parent.scopes.pop();
				r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
			}
			(this.parent = void 0), (this._active = !1);
		}
	}
}
function vo(t) {
	return new yo(t);
}
function sl(t, e = Ie) {
	e && e.active && e.effects.push(t);
}
function bo() {
	return Ie;
}
function rl(t) {
	Ie && Ie.cleanups.push(t);
}
let It;
class kr {
	constructor(e, n, s, r) {
		(this.fn = e),
			(this.trigger = n),
			(this.scheduler = s),
			(this.active = !0),
			(this.deps = []),
			(this._dirtyLevel = 3),
			(this._trackId = 0),
			(this._runnings = 0),
			(this._queryings = 0),
			(this._depsLength = 0),
			sl(this, r);
	}
	get dirty() {
		if (this._dirtyLevel === 1) {
			(this._dirtyLevel = 0), this._queryings++, qt();
			for (const e of this.deps) if (e.computed && (il(e.computed), this._dirtyLevel >= 2)) break;
			Nt(), this._queryings--;
		}
		return this._dirtyLevel >= 2;
	}
	set dirty(e) {
		this._dirtyLevel = e ? 3 : 0;
	}
	run() {
		if (((this._dirtyLevel = 0), !this.active)) return this.fn();
		let e = pt,
			n = It;
		try {
			return (pt = !0), (It = this), this._runnings++, ei(this), this.fn();
		} finally {
			ti(this), this._runnings--, (It = n), (pt = e);
		}
	}
	stop() {
		var e;
		this.active &&
			(ei(this), ti(this), (e = this.onStop) == null || e.call(this), (this.active = !1));
	}
}
function il(t) {
	return t.value;
}
function ei(t) {
	t._trackId++, (t._depsLength = 0);
}
function ti(t) {
	if (t.deps && t.deps.length > t._depsLength) {
		for (let e = t._depsLength; e < t.deps.length; e++) wo(t.deps[e], t);
		t.deps.length = t._depsLength;
	}
}
function wo(t, e) {
	const n = t.get(e);
	n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup());
}
let pt = !0,
	Ks = 0;
const ko = [];
function qt() {
	ko.push(pt), (pt = !1);
}
function Nt() {
	const t = ko.pop();
	pt = t === void 0 ? !0 : t;
}
function Er() {
	Ks++;
}
function Sr() {
	for (Ks--; !Ks && Ws.length; ) Ws.shift()();
}
function Eo(t, e, n) {
	if (e.get(t) !== t._trackId) {
		e.set(t, t._trackId);
		const s = t.deps[t._depsLength];
		s !== e ? (s && wo(s, t), (t.deps[t._depsLength++] = e)) : t._depsLength++;
	}
}
const Ws = [];
function So(t, e, n) {
	Er();
	for (const s of t.keys())
		if (!(!s.allowRecurse && s._runnings) && s._dirtyLevel < e && (!s._runnings || e !== 2)) {
			const r = s._dirtyLevel;
			(s._dirtyLevel = e),
				r === 0 && (!s._queryings || e !== 2) && (s.trigger(), s.scheduler && Ws.push(s.scheduler));
		}
	Sr();
}
const To = (t, e) => {
		const n = new Map();
		return (n.cleanup = t), (n.computed = e), n;
	},
	ns = new WeakMap(),
	$t = Symbol(''),
	Gs = Symbol('');
function Pe(t, e, n) {
	if (pt && It) {
		let s = ns.get(t);
		s || ns.set(t, (s = new Map()));
		let r = s.get(n);
		r || s.set(n, (r = To(() => s.delete(n)))), Eo(It, r);
	}
}
function tt(t, e, n, s, r, i) {
	const o = ns.get(t);
	if (!o) return;
	let a = [];
	if (e === 'clear') a = [...o.values()];
	else if (n === 'length' && F(t)) {
		const l = Number(s);
		o.forEach((c, u) => {
			(u === 'length' || (!yt(u) && u >= l)) && a.push(c);
		});
	} else
		switch ((n !== void 0 && a.push(o.get(n)), e)) {
			case 'add':
				F(t) ? br(n) && a.push(o.get('length')) : (a.push(o.get($t)), Xt(t) && a.push(o.get(Gs)));
				break;
			case 'delete':
				F(t) || (a.push(o.get($t)), Xt(t) && a.push(o.get(Gs)));
				break;
			case 'set':
				Xt(t) && a.push(o.get($t));
				break;
		}
	Er();
	for (const l of a) l && So(l, 3);
	Sr();
}
function ol(t, e) {
	var n;
	return (n = ns.get(t)) == null ? void 0 : n.get(e);
}
const al = mr('__proto__,__v_isRef,__isVue'),
	Ro = new Set(
		Object.getOwnPropertyNames(Symbol)
			.filter((t) => t !== 'arguments' && t !== 'caller')
			.map((t) => Symbol[t])
			.filter(yt)
	),
	ni = ll();
function ll() {
	const t = {};
	return (
		['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
			t[e] = function (...n) {
				const s = Y(this);
				for (let i = 0, o = this.length; i < o; i++) Pe(s, 'get', i + '');
				const r = s[e](...n);
				return r === -1 || r === !1 ? s[e](...n.map(Y)) : r;
			};
		}),
		['push', 'pop', 'shift', 'unshift', 'splice'].forEach((e) => {
			t[e] = function (...n) {
				qt(), Er();
				const s = Y(this)[e].apply(this, n);
				return Sr(), Nt(), s;
			};
		}),
		t
	);
}
function cl(t) {
	const e = Y(this);
	return Pe(e, 'has', t), e.hasOwnProperty(t);
}
class Ao {
	constructor(e = !1, n = !1) {
		(this._isReadonly = e), (this._shallow = n);
	}
	get(e, n, s) {
		const r = this._isReadonly,
			i = this._shallow;
		if (n === '__v_isReactive') return !r;
		if (n === '__v_isReadonly') return r;
		if (n === '__v_isShallow') return i;
		if (n === '__v_raw')
			return s === (r ? (i ? kl : Co) : i ? xo : Po).get(e) ||
				Object.getPrototypeOf(e) === Object.getPrototypeOf(s)
				? e
				: void 0;
		const o = F(e);
		if (!r) {
			if (o && J(ni, n)) return Reflect.get(ni, n, s);
			if (n === 'hasOwnProperty') return cl;
		}
		const a = Reflect.get(e, n, s);
		return (yt(n) ? Ro.has(n) : al(n)) || (r || Pe(e, 'get', n), i)
			? a
			: de(a)
				? o && br(n)
					? a
					: a.value
				: ae(a)
					? r
						? $o(a)
						: qn(a)
					: a;
	}
}
class Oo extends Ao {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, n, s, r) {
		let i = e[n];
		if (!this._shallow) {
			const l = rn(i);
			if ((!ss(s) && !rn(s) && ((i = Y(i)), (s = Y(s))), !F(e) && de(i) && !de(s)))
				return l ? !1 : ((i.value = s), !0);
		}
		const o = F(e) && br(n) ? Number(n) < e.length : J(e, n),
			a = Reflect.set(e, n, s, r);
		return e === Y(r) && (o ? vt(s, i) && tt(e, 'set', n, s) : tt(e, 'add', n, s)), a;
	}
	deleteProperty(e, n) {
		const s = J(e, n);
		e[n];
		const r = Reflect.deleteProperty(e, n);
		return r && s && tt(e, 'delete', n, void 0), r;
	}
	has(e, n) {
		const s = Reflect.has(e, n);
		return (!yt(n) || !Ro.has(n)) && Pe(e, 'has', n), s;
	}
	ownKeys(e) {
		return Pe(e, 'iterate', F(e) ? 'length' : $t), Reflect.ownKeys(e);
	}
}
class ul extends Ao {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, n) {
		return !0;
	}
	deleteProperty(e, n) {
		return !0;
	}
}
const hl = new Oo(),
	fl = new ul(),
	dl = new Oo(!0),
	Tr = (t) => t,
	ps = (t) => Reflect.getPrototypeOf(t);
function Mn(t, e, n = !1, s = !1) {
	t = t.__v_raw;
	const r = Y(t),
		i = Y(e);
	n || (vt(e, i) && Pe(r, 'get', e), Pe(r, 'get', i));
	const { has: o } = ps(r),
		a = s ? Tr : n ? Or : An;
	if (o.call(r, e)) return a(t.get(e));
	if (o.call(r, i)) return a(t.get(i));
	t !== r && t.get(e);
}
function Fn(t, e = !1) {
	const n = this.__v_raw,
		s = Y(n),
		r = Y(t);
	return (
		e || (vt(t, r) && Pe(s, 'has', t), Pe(s, 'has', r)), t === r ? n.has(t) : n.has(t) || n.has(r)
	);
}
function Bn(t, e = !1) {
	return (t = t.__v_raw), !e && Pe(Y(t), 'iterate', $t), Reflect.get(t, 'size', t);
}
function si(t) {
	t = Y(t);
	const e = Y(this);
	return ps(e).has.call(e, t) || (e.add(t), tt(e, 'add', t, t)), this;
}
function ri(t, e) {
	e = Y(e);
	const n = Y(this),
		{ has: s, get: r } = ps(n);
	let i = s.call(n, t);
	i || ((t = Y(t)), (i = s.call(n, t)));
	const o = r.call(n, t);
	return n.set(t, e), i ? vt(e, o) && tt(n, 'set', t, e) : tt(n, 'add', t, e), this;
}
function ii(t) {
	const e = Y(this),
		{ has: n, get: s } = ps(e);
	let r = n.call(e, t);
	r || ((t = Y(t)), (r = n.call(e, t))), s && s.call(e, t);
	const i = e.delete(t);
	return r && tt(e, 'delete', t, void 0), i;
}
function oi() {
	const t = Y(this),
		e = t.size !== 0,
		n = t.clear();
	return e && tt(t, 'clear', void 0, void 0), n;
}
function Hn(t, e) {
	return function (s, r) {
		const i = this,
			o = i.__v_raw,
			a = Y(o),
			l = e ? Tr : t ? Or : An;
		return !t && Pe(a, 'iterate', $t), o.forEach((c, u) => s.call(r, l(c), l(u), i));
	};
}
function Vn(t, e, n) {
	return function (...s) {
		const r = this.__v_raw,
			i = Y(r),
			o = Xt(i),
			a = t === 'entries' || (t === Symbol.iterator && o),
			l = t === 'keys' && o,
			c = r[t](...s),
			u = n ? Tr : e ? Or : An;
		return (
			!e && Pe(i, 'iterate', l ? Gs : $t),
			{
				next() {
					const { value: h, done: f } = c.next();
					return f ? { value: h, done: f } : { value: a ? [u(h[0]), u(h[1])] : u(h), done: f };
				},
				[Symbol.iterator]() {
					return this;
				},
			}
		);
	};
}
function rt(t) {
	return function (...e) {
		return t === 'delete' ? !1 : t === 'clear' ? void 0 : this;
	};
}
function pl() {
	const t = {
			get(i) {
				return Mn(this, i);
			},
			get size() {
				return Bn(this);
			},
			has: Fn,
			add: si,
			set: ri,
			delete: ii,
			clear: oi,
			forEach: Hn(!1, !1),
		},
		e = {
			get(i) {
				return Mn(this, i, !1, !0);
			},
			get size() {
				return Bn(this);
			},
			has: Fn,
			add: si,
			set: ri,
			delete: ii,
			clear: oi,
			forEach: Hn(!1, !0),
		},
		n = {
			get(i) {
				return Mn(this, i, !0);
			},
			get size() {
				return Bn(this, !0);
			},
			has(i) {
				return Fn.call(this, i, !0);
			},
			add: rt('add'),
			set: rt('set'),
			delete: rt('delete'),
			clear: rt('clear'),
			forEach: Hn(!0, !1),
		},
		s = {
			get(i) {
				return Mn(this, i, !0, !0);
			},
			get size() {
				return Bn(this, !0);
			},
			has(i) {
				return Fn.call(this, i, !0);
			},
			add: rt('add'),
			set: rt('set'),
			delete: rt('delete'),
			clear: rt('clear'),
			forEach: Hn(!0, !0),
		};
	return (
		['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
			(t[i] = Vn(i, !1, !1)),
				(n[i] = Vn(i, !0, !1)),
				(e[i] = Vn(i, !1, !0)),
				(s[i] = Vn(i, !0, !0));
		}),
		[t, n, e, s]
	);
}
const [gl, ml, _l, yl] = pl();
function Rr(t, e) {
	const n = e ? (t ? yl : _l) : t ? ml : gl;
	return (s, r, i) =>
		r === '__v_isReactive'
			? !t
			: r === '__v_isReadonly'
				? t
				: r === '__v_raw'
					? s
					: Reflect.get(J(n, r) && r in s ? n : s, r, i);
}
const vl = { get: Rr(!1, !1) },
	bl = { get: Rr(!1, !0) },
	wl = { get: Rr(!0, !1) },
	Po = new WeakMap(),
	xo = new WeakMap(),
	Co = new WeakMap(),
	kl = new WeakMap();
function El(t) {
	switch (t) {
		case 'Object':
		case 'Array':
			return 1;
		case 'Map':
		case 'Set':
		case 'WeakMap':
		case 'WeakSet':
			return 2;
		default:
			return 0;
	}
}
function Sl(t) {
	return t.__v_skip || !Object.isExtensible(t) ? 0 : El(Wa(t));
}
function qn(t) {
	return rn(t) ? t : Ar(t, !1, hl, vl, Po);
}
function Io(t) {
	return Ar(t, !1, dl, bl, xo);
}
function $o(t) {
	return Ar(t, !0, fl, wl, Co);
}
function Ar(t, e, n, s, r) {
	if (!ae(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
	const i = r.get(t);
	if (i) return i;
	const o = Sl(t);
	if (o === 0) return t;
	const a = new Proxy(t, o === 2 ? s : n);
	return r.set(t, a), a;
}
function gt(t) {
	return rn(t) ? gt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function rn(t) {
	return !!(t && t.__v_isReadonly);
}
function ss(t) {
	return !!(t && t.__v_isShallow);
}
function jo(t) {
	return gt(t) || rn(t);
}
function Y(t) {
	const e = t && t.__v_raw;
	return e ? Y(e) : t;
}
function gs(t) {
	return ts(t, '__v_skip', !0), t;
}
const An = (t) => (ae(t) ? qn(t) : t),
	Or = (t) => (ae(t) ? $o(t) : t);
class Lo {
	constructor(e, n, s, r) {
		(this._setter = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this.__v_isReadonly = !1),
			(this.effect = new kr(
				() => e(this._value),
				() => zs(this, 1)
			)),
			(this.effect.computed = this),
			(this.effect.active = this._cacheable = !r),
			(this.__v_isReadonly = s);
	}
	get value() {
		const e = Y(this);
		return (
			qo(e),
			(!e._cacheable || e.effect.dirty) && vt(e._value, (e._value = e.effect.run())) && zs(e, 2),
			e._value
		);
	}
	set value(e) {
		this._setter(e);
	}
	get _dirty() {
		return this.effect.dirty;
	}
	set _dirty(e) {
		this.effect.dirty = e;
	}
}
function Tl(t, e, n = !1) {
	let s, r;
	const i = V(t);
	return i ? ((s = t), (r = $e)) : ((s = t.get), (r = t.set)), new Lo(s, r, i || !r, n);
}
function qo(t) {
	pt &&
		It &&
		((t = Y(t)),
		Eo(It, t.dep || (t.dep = To(() => (t.dep = void 0), t instanceof Lo ? t : void 0))));
}
function zs(t, e = 3, n) {
	t = Y(t);
	const s = t.dep;
	s && So(s, e);
}
function de(t) {
	return !!(t && t.__v_isRef === !0);
}
function on(t) {
	return No(t, !1);
}
function Rl(t) {
	return No(t, !0);
}
function No(t, e) {
	return de(t) ? t : new Al(t, e);
}
class Al {
	constructor(e, n) {
		(this.__v_isShallow = n),
			(this.dep = void 0),
			(this.__v_isRef = !0),
			(this._rawValue = n ? e : Y(e)),
			(this._value = n ? e : An(e));
	}
	get value() {
		return qo(this), this._value;
	}
	set value(e) {
		const n = this.__v_isShallow || ss(e) || rn(e);
		(e = n ? e : Y(e)),
			vt(e, this._rawValue) && ((this._rawValue = e), (this._value = n ? e : An(e)), zs(this, 3));
	}
}
function Re(t) {
	return de(t) ? t.value : t;
}
const Ol = {
	get: (t, e, n) => Re(Reflect.get(t, e, n)),
	set: (t, e, n, s) => {
		const r = t[e];
		return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, s);
	},
};
function Do(t) {
	return gt(t) ? t : new Proxy(t, Ol);
}
function Pl(t) {
	const e = F(t) ? new Array(t.length) : {};
	for (const n in t) e[n] = Cl(t, n);
	return e;
}
class xl {
	constructor(e, n, s) {
		(this._object = e), (this._key = n), (this._defaultValue = s), (this.__v_isRef = !0);
	}
	get value() {
		const e = this._object[this._key];
		return e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		this._object[this._key] = e;
	}
	get dep() {
		return ol(Y(this._object), this._key);
	}
}
function Cl(t, e, n) {
	const s = t[e];
	return de(s) ? s : new xl(t, e, n);
}
function mt(t, e, n, s) {
	let r;
	try {
		r = s ? t(...s) : t();
	} catch (i) {
		Nn(i, e, n);
	}
	return r;
}
function He(t, e, n, s) {
	if (V(t)) {
		const i = mt(t, e, n, s);
		return (
			i &&
				vr(i) &&
				i.catch((o) => {
					Nn(o, e, n);
				}),
			i
		);
	}
	const r = [];
	for (let i = 0; i < t.length; i++) r.push(He(t[i], e, n, s));
	return r;
}
function Nn(t, e, n, s = !0) {
	const r = e ? e.vnode : null;
	if (e) {
		let i = e.parent;
		const o = e.proxy,
			a = `https://vuejs.org/errors/#runtime-${n}`;
		for (; i; ) {
			const c = i.ec;
			if (c) {
				for (let u = 0; u < c.length; u++) if (c[u](t, o, a) === !1) return;
			}
			i = i.parent;
		}
		const l = e.appContext.config.errorHandler;
		if (l) {
			mt(l, null, 10, [t, o, a]);
			return;
		}
	}
	Il(t, n, r, s);
}
function Il(t, e, n, s = !0) {
	console.error(t);
}
let On = !1,
	Js = !1;
const Ee = [];
let Je = 0;
const Zt = [];
let et = null,
	Rt = 0;
const Uo = Promise.resolve();
let Pr = null;
function xr(t) {
	const e = Pr || Uo;
	return t ? e.then(this ? t.bind(this) : t) : e;
}
function $l(t) {
	let e = Je + 1,
		n = Ee.length;
	for (; e < n; ) {
		const s = (e + n) >>> 1,
			r = Ee[s],
			i = Pn(r);
		i < t || (i === t && r.pre) ? (e = s + 1) : (n = s);
	}
	return e;
}
function Cr(t) {
	(!Ee.length || !Ee.includes(t, On && t.allowRecurse ? Je + 1 : Je)) &&
		(t.id == null ? Ee.push(t) : Ee.splice($l(t.id), 0, t), Mo());
}
function Mo() {
	!On && !Js && ((Js = !0), (Pr = Uo.then(Bo)));
}
function jl(t) {
	const e = Ee.indexOf(t);
	e > Je && Ee.splice(e, 1);
}
function Ys(t) {
	F(t) ? Zt.push(...t) : (!et || !et.includes(t, t.allowRecurse ? Rt + 1 : Rt)) && Zt.push(t), Mo();
}
function ai(t, e, n = On ? Je + 1 : 0) {
	for (; n < Ee.length; n++) {
		const s = Ee[n];
		if (s && s.pre) {
			if (t && s.id !== t.uid) continue;
			Ee.splice(n, 1), n--, s();
		}
	}
}
function Fo(t) {
	if (Zt.length) {
		const e = [...new Set(Zt)];
		if (((Zt.length = 0), et)) {
			et.push(...e);
			return;
		}
		for (et = e, et.sort((n, s) => Pn(n) - Pn(s)), Rt = 0; Rt < et.length; Rt++) et[Rt]();
		(et = null), (Rt = 0);
	}
}
const Pn = (t) => (t.id == null ? 1 / 0 : t.id),
	Ll = (t, e) => {
		const n = Pn(t) - Pn(e);
		if (n === 0) {
			if (t.pre && !e.pre) return -1;
			if (e.pre && !t.pre) return 1;
		}
		return n;
	};
function Bo(t) {
	(Js = !1), (On = !0), Ee.sort(Ll);
	const e = $e;
	try {
		for (Je = 0; Je < Ee.length; Je++) {
			const n = Ee[Je];
			n && n.active !== !1 && mt(n, null, 14);
		}
	} finally {
		(Je = 0), (Ee.length = 0), Fo(), (On = !1), (Pr = null), (Ee.length || Zt.length) && Bo();
	}
}
function ql(t, e, ...n) {
	if (t.isUnmounted) return;
	const s = t.vnode.props || ce;
	let r = n;
	const i = e.startsWith('update:'),
		o = i && e.slice(7);
	if (o && o in s) {
		const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
			{ number: h, trim: f } = s[u] || ce;
		f && (r = n.map((g) => (fe(g) ? g.trim() : g))), h && (r = n.map(Vs));
	}
	let a,
		l = s[(a = Os(e))] || s[(a = Os(Ye(e)))];
	!l && i && (l = s[(a = Os(Lt(e)))]), l && He(l, t, 6, r);
	const c = s[a + 'Once'];
	if (c) {
		if (!t.emitted) t.emitted = {};
		else if (t.emitted[a]) return;
		(t.emitted[a] = !0), He(c, t, 6, r);
	}
}
function Ho(t, e, n = !1) {
	const s = e.emitsCache,
		r = s.get(t);
	if (r !== void 0) return r;
	const i = t.emits;
	let o = {},
		a = !1;
	if (!V(t)) {
		const l = (c) => {
			const u = Ho(c, e, !0);
			u && ((a = !0), be(o, u));
		};
		!n && e.mixins.length && e.mixins.forEach(l),
			t.extends && l(t.extends),
			t.mixins && t.mixins.forEach(l);
	}
	return !i && !a
		? (ae(t) && s.set(t, null), null)
		: (F(i) ? i.forEach((l) => (o[l] = null)) : be(o, i), ae(t) && s.set(t, o), o);
}
function ms(t, e) {
	return !t || !cs(e)
		? !1
		: ((e = e.slice(2).replace(/Once$/, '')),
			J(t, e[0].toLowerCase() + e.slice(1)) || J(t, Lt(e)) || J(t, e));
}
let ve = null,
	_s = null;
function rs(t) {
	const e = ve;
	return (ve = t), (_s = (t && t.type.__scopeId) || null), e;
}
function Vo(t) {
	_s = t;
}
function Ko() {
	_s = null;
}
function is(t, e = ve, n) {
	if (!e || t._n) return t;
	const s = (...r) => {
		s._d && bi(-1);
		const i = rs(e);
		let o;
		try {
			o = t(...r);
		} finally {
			rs(i), s._d && bi(1);
		}
		return o;
	};
	return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function xs(t) {
	const {
		type: e,
		vnode: n,
		proxy: s,
		withProxy: r,
		props: i,
		propsOptions: [o],
		slots: a,
		attrs: l,
		emit: c,
		render: u,
		renderCache: h,
		data: f,
		setupState: g,
		ctx: y,
		inheritAttrs: b,
	} = t;
	let S, A;
	const $ = rs(t);
	try {
		if (n.shapeFlag & 4) {
			const R = r || s,
				j = R;
			(S = Be(u.call(j, R, h, i, g, f, y))), (A = l);
		} else {
			const R = e;
			(S = Be(R.length > 1 ? R(i, { attrs: l, slots: a, emit: c }) : R(i, null))),
				(A = e.props ? l : Dl(l));
		}
	} catch (R) {
		(wn.length = 0), Nn(R, t, 1), (S = he(Qe));
	}
	let L = S;
	if (A && b !== !1) {
		const R = Object.keys(A),
			{ shapeFlag: j } = L;
		R.length && j & 7 && (o && R.some(_r) && (A = Ul(A, o)), (L = ln(L, A)));
	}
	return (
		n.dirs && ((L = ln(L)), (L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs)),
		n.transition && (L.transition = n.transition),
		(S = L),
		rs($),
		S
	);
}
function Nl(t) {
	let e;
	for (let n = 0; n < t.length; n++) {
		const s = t[n];
		if (In(s)) {
			if (s.type !== Qe || s.children === 'v-if') {
				if (e) return;
				e = s;
			}
		} else return;
	}
	return e;
}
const Dl = (t) => {
		let e;
		for (const n in t) (n === 'class' || n === 'style' || cs(n)) && ((e || (e = {}))[n] = t[n]);
		return e;
	},
	Ul = (t, e) => {
		const n = {};
		for (const s in t) (!_r(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
		return n;
	};
function Ml(t, e, n) {
	const { props: s, children: r, component: i } = t,
		{ props: o, children: a, patchFlag: l } = e,
		c = i.emitsOptions;
	if (e.dirs || e.transition) return !0;
	if (n && l >= 0) {
		if (l & 1024) return !0;
		if (l & 16) return s ? li(s, o, c) : !!o;
		if (l & 8) {
			const u = e.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				const f = u[h];
				if (o[f] !== s[f] && !ms(c, f)) return !0;
			}
		}
	} else
		return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? (o ? li(s, o, c) : !0) : !!o;
	return !1;
}
function li(t, e, n) {
	const s = Object.keys(e);
	if (s.length !== Object.keys(t).length) return !0;
	for (let r = 0; r < s.length; r++) {
		const i = s[r];
		if (e[i] !== t[i] && !ms(n, i)) return !0;
	}
	return !1;
}
function Ir({ vnode: t, parent: e }, n) {
	if (n)
		for (; e; ) {
			const s = e.subTree;
			if ((s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t))
				((t = e.vnode).el = n), (e = e.parent);
			else break;
		}
}
const Wo = 'components';
function $r(t, e) {
	return Bl(Wo, t, !0, e) || t;
}
const Fl = Symbol.for('v-ndc');
function Bl(t, e, n = !0, s = !1) {
	const r = ve || ye;
	if (r) {
		const i = r.type;
		if (t === Wo) {
			const a = Vc(i, !1);
			if (a && (a === e || a === Ye(e) || a === fs(Ye(e)))) return i;
		}
		const o = ci(r[t] || i[t], e) || ci(r.appContext[t], e);
		return !o && s ? i : o;
	}
}
function ci(t, e) {
	return t && (t[e] || t[Ye(e)] || t[fs(Ye(e))]);
}
const Hl = (t) => t.__isSuspense;
let Qs = 0;
const Vl = {
		name: 'Suspense',
		__isSuspense: !0,
		process(t, e, n, s, r, i, o, a, l, c) {
			t == null ? Kl(e, n, s, r, i, o, a, l, c) : Wl(t, e, n, s, r, o, a, l, c);
		},
		hydrate: Gl,
		create: jr,
		normalize: zl,
	},
	zd = Vl;
function xn(t, e) {
	const n = t.props && t.props[e];
	V(n) && n();
}
function Kl(t, e, n, s, r, i, o, a, l) {
	const {
			p: c,
			o: { createElement: u },
		} = l,
		h = u('div'),
		f = (t.suspense = jr(t, r, s, e, h, n, i, o, a, l));
	c(null, (f.pendingBranch = t.ssContent), h, null, s, f, i, o),
		f.deps > 0
			? (xn(t, 'onPending'),
				xn(t, 'onFallback'),
				c(null, t.ssFallback, e, n, s, null, i, o),
				en(f, t.ssFallback))
			: f.resolve(!1, !0);
}
function Wl(t, e, n, s, r, i, o, a, { p: l, um: c, o: { createElement: u } }) {
	const h = (e.suspense = t.suspense);
	(h.vnode = e), (e.el = t.el);
	const f = e.ssContent,
		g = e.ssFallback,
		{ activeBranch: y, pendingBranch: b, isInFallback: S, isHydrating: A } = h;
	if (b)
		(h.pendingBranch = f),
			ft(f, b)
				? (l(b, f, h.hiddenContainer, null, r, h, i, o, a),
					h.deps <= 0 ? h.resolve() : S && (A || (l(y, g, n, s, r, null, i, o, a), en(h, g))))
				: ((h.pendingId = Qs++),
					A ? ((h.isHydrating = !1), (h.activeBranch = b)) : c(b, r, h),
					(h.deps = 0),
					(h.effects.length = 0),
					(h.hiddenContainer = u('div')),
					S
						? (l(null, f, h.hiddenContainer, null, r, h, i, o, a),
							h.deps <= 0 ? h.resolve() : (l(y, g, n, s, r, null, i, o, a), en(h, g)))
						: y && ft(f, y)
							? (l(y, f, n, s, r, h, i, o, a), h.resolve(!0))
							: (l(null, f, h.hiddenContainer, null, r, h, i, o, a), h.deps <= 0 && h.resolve()));
	else if (y && ft(f, y)) l(y, f, n, s, r, h, i, o, a), en(h, f);
	else if (
		(xn(e, 'onPending'),
		(h.pendingBranch = f),
		f.shapeFlag & 512 ? (h.pendingId = f.component.suspenseId) : (h.pendingId = Qs++),
		l(null, f, h.hiddenContainer, null, r, h, i, o, a),
		h.deps <= 0)
	)
		h.resolve();
	else {
		const { timeout: $, pendingId: L } = h;
		$ > 0
			? setTimeout(() => {
					h.pendingId === L && h.fallback(g);
				}, $)
			: $ === 0 && h.fallback(g);
	}
}
function jr(t, e, n, s, r, i, o, a, l, c, u = !1) {
	const {
		p: h,
		m: f,
		um: g,
		n: y,
		o: { parentNode: b, remove: S },
	} = c;
	let A;
	const $ = Yl(t);
	$ && e != null && e.pendingBranch && ((A = e.pendingId), e.deps++);
	const L = t.props ? Ja(t.props.timeout) : void 0,
		R = {
			vnode: t,
			parent: e,
			parentComponent: n,
			namespace: o,
			container: s,
			hiddenContainer: r,
			anchor: i,
			deps: 0,
			pendingId: Qs++,
			timeout: typeof L == 'number' ? L : -1,
			activeBranch: null,
			pendingBranch: null,
			isInFallback: !u,
			isHydrating: u,
			isUnmounted: !1,
			effects: [],
			resolve(j = !1, D = !1) {
				const {
					vnode: Q,
					activeBranch: U,
					pendingBranch: B,
					pendingId: ne,
					effects: le,
					parentComponent: pe,
					container: ge,
				} = R;
				let je = !1;
				if (R.isHydrating) R.isHydrating = !1;
				else if (!j) {
					(je = U && B.transition && B.transition.mode === 'out-in'),
						je &&
							(U.transition.afterLeave = () => {
								ne === R.pendingId && (f(B, ge, y(U), 0), Ys(le));
							});
					let { anchor: X } = R;
					U && ((X = y(U)), g(U, pe, R, !0)), je || f(B, ge, X, 0);
				}
				en(R, B), (R.pendingBranch = null), (R.isInFallback = !1);
				let me = R.parent,
					G = !1;
				for (; me; ) {
					if (me.pendingBranch) {
						me.effects.push(...le), (G = !0);
						break;
					}
					me = me.parent;
				}
				!G && !je && Ys(le),
					(R.effects = []),
					$ &&
						e &&
						e.pendingBranch &&
						A === e.pendingId &&
						(e.deps--, e.deps === 0 && !D && e.resolve()),
					xn(Q, 'onResolve');
			},
			fallback(j) {
				if (!R.pendingBranch) return;
				const { vnode: D, activeBranch: Q, parentComponent: U, container: B, namespace: ne } = R;
				xn(D, 'onFallback');
				const le = y(Q),
					pe = () => {
						R.isInFallback && (h(null, j, B, le, U, null, ne, a, l), en(R, j));
					},
					ge = j.transition && j.transition.mode === 'out-in';
				ge && (Q.transition.afterLeave = pe), (R.isInFallback = !0), g(Q, U, null, !0), ge || pe();
			},
			move(j, D, Q) {
				R.activeBranch && f(R.activeBranch, j, D, Q), (R.container = j);
			},
			next() {
				return R.activeBranch && y(R.activeBranch);
			},
			registerDep(j, D) {
				const Q = !!R.pendingBranch;
				Q && R.deps++;
				const U = j.vnode.el;
				j.asyncDep
					.catch((B) => {
						Nn(B, j, 0);
					})
					.then((B) => {
						if (j.isUnmounted || R.isUnmounted || R.pendingId !== j.suspenseId) return;
						j.asyncResolved = !0;
						const { vnode: ne } = j;
						rr(j, B, !1), U && (ne.el = U);
						const le = !U && j.subTree.el;
						D(j, ne, b(U || j.subTree.el), U ? null : y(j.subTree), R, o, l),
							le && S(le),
							Ir(j, ne.el),
							Q && --R.deps === 0 && R.resolve();
					});
			},
			unmount(j, D) {
				(R.isUnmounted = !0),
					R.activeBranch && g(R.activeBranch, n, j, D),
					R.pendingBranch && g(R.pendingBranch, n, j, D);
			},
		};
	return R;
}
function Gl(t, e, n, s, r, i, o, a, l) {
	const c = (e.suspense = jr(
			e,
			s,
			n,
			t.parentNode,
			document.createElement('div'),
			null,
			r,
			i,
			o,
			a,
			!0
		)),
		u = l(t, (c.pendingBranch = e.ssContent), n, c, i, o);
	return c.deps === 0 && c.resolve(!1, !0), u;
}
function zl(t) {
	const { shapeFlag: e, children: n } = t,
		s = e & 32;
	(t.ssContent = ui(s ? n.default : n)), (t.ssFallback = s ? ui(n.fallback) : he(Qe));
}
function ui(t) {
	let e;
	if (V(t)) {
		const n = an && t._c;
		n && ((t._d = !1), qe()), (t = t()), n && ((t._d = !0), (e = De), ua());
	}
	return (
		F(t) && (t = Nl(t)),
		(t = Be(t)),
		e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)),
		t
	);
}
function Jl(t, e) {
	e && e.pendingBranch ? (F(t) ? e.effects.push(...t) : e.effects.push(t)) : Ys(t);
}
function en(t, e) {
	t.activeBranch = e;
	const { vnode: n, parentComponent: s } = t,
		r = (n.el = e.el);
	s && s.subTree === n && ((s.vnode.el = r), Ir(s, r));
}
function Yl(t) {
	var e;
	return ((e = t.props) == null ? void 0 : e.suspensible) != null && t.props.suspensible !== !1;
}
const Ql = Symbol.for('v-scx'),
	Xl = () => Ve(Ql),
	Kn = {};
function tn(t, e, n) {
	return Go(t, e, n);
}
function Go(t, e, { immediate: n, deep: s, flush: r, once: i, onTrack: o, onTrigger: a } = ce) {
	if (e && i) {
		const D = e;
		e = (...Q) => {
			D(...Q), j();
		};
	}
	const l = ye,
		c = (D) => (s === !0 ? D : xt(D, s === !1 ? 1 : void 0));
	let u,
		h = !1,
		f = !1;
	if (
		(de(t)
			? ((u = () => t.value), (h = ss(t)))
			: gt(t)
				? ((u = () => c(t)), (h = !0))
				: F(t)
					? ((f = !0),
						(h = t.some((D) => gt(D) || ss(D))),
						(u = () =>
							t.map((D) => {
								if (de(D)) return D.value;
								if (gt(D)) return c(D);
								if (V(D)) return mt(D, l, 2);
							})))
					: V(t)
						? e
							? (u = () => mt(t, l, 2))
							: (u = () => (g && g(), He(t, l, 3, [y])))
						: (u = $e),
		e && s)
	) {
		const D = u;
		u = () => xt(D());
	}
	let g,
		y = (D) => {
			g = L.onStop = () => {
				mt(D, l, 4), (g = L.onStop = void 0);
			};
		},
		b;
	if (ws)
		if (((y = $e), e ? n && He(e, l, 3, [u(), f ? [] : void 0, y]) : u(), r === 'sync')) {
			const D = Xl();
			b = D.__watcherHandles || (D.__watcherHandles = []);
		} else return $e;
	let S = f ? new Array(t.length).fill(Kn) : Kn;
	const A = () => {
		if (!(!L.active || !L.dirty))
			if (e) {
				const D = L.run();
				(s || h || (f ? D.some((Q, U) => vt(Q, S[U])) : vt(D, S))) &&
					(g && g(), He(e, l, 3, [D, S === Kn ? void 0 : f && S[0] === Kn ? [] : S, y]), (S = D));
			} else L.run();
	};
	A.allowRecurse = !!e;
	let $;
	r === 'sync'
		? ($ = A)
		: r === 'post'
			? ($ = () => Oe(A, l && l.suspense))
			: ((A.pre = !0), l && (A.id = l.uid), ($ = () => Cr(A)));
	const L = new kr(u, $e, $),
		R = bo(),
		j = () => {
			L.stop(), R && yr(R.effects, L);
		};
	return (
		e ? (n ? A() : (S = L.run())) : r === 'post' ? Oe(L.run.bind(L), l && l.suspense) : L.run(),
		b && b.push(j),
		j
	);
}
function Zl(t, e, n) {
	const s = this.proxy,
		r = fe(t) ? (t.includes('.') ? zo(s, t) : () => s[t]) : t.bind(s, s);
	let i;
	V(e) ? (i = e) : ((i = e.handler), (n = e));
	const o = ye;
	bt(this);
	const a = Go(r, i.bind(s), n);
	return o ? bt(o) : _t(), a;
}
function zo(t, e) {
	const n = e.split('.');
	return () => {
		let s = t;
		for (let r = 0; r < n.length && s; r++) s = s[n[r]];
		return s;
	};
}
function xt(t, e, n = 0, s) {
	if (!ae(t) || t.__v_skip) return t;
	if (e && e > 0) {
		if (n >= e) return t;
		n++;
	}
	if (((s = s || new Set()), s.has(t))) return t;
	if ((s.add(t), de(t))) xt(t.value, e, n, s);
	else if (F(t)) for (let r = 0; r < t.length; r++) xt(t[r], e, n, s);
	else if (us(t) || Xt(t))
		t.forEach((r) => {
			xt(r, e, n, s);
		});
	else if (fo(t)) for (const r in t) xt(t[r], e, n, s);
	return t;
}
function Jd(t, e) {
	const n = ve;
	if (n === null) return t;
	const s = ks(n) || n.proxy,
		r = t.dirs || (t.dirs = []);
	for (let i = 0; i < e.length; i++) {
		let [o, a, l, c = ce] = e[i];
		o &&
			(V(o) && (o = { mounted: o, updated: o }),
			o.deep && xt(a),
			r.push({ dir: o, instance: s, value: a, oldValue: void 0, arg: l, modifiers: c }));
	}
	return t;
}
function wt(t, e, n, s) {
	const r = t.dirs,
		i = e && e.dirs;
	for (let o = 0; o < r.length; o++) {
		const a = r[o];
		i && (a.oldValue = i[o].value);
		let l = a.dir[s];
		l && (qt(), He(l, n, 8, [t.el, a, t, e]), Nt());
	}
}
/*! #__NO_SIDE_EFFECTS__ */ function Jo(t, e) {
	return V(t) ? (() => be({ name: t.name }, e, { setup: t }))() : t;
}
const vn = (t) => !!t.type.__asyncLoader,
	Yo = (t) => t.type.__isKeepAlive;
function ec(t, e) {
	Qo(t, 'a', e);
}
function tc(t, e) {
	Qo(t, 'da', e);
}
function Qo(t, e, n = ye) {
	const s =
		t.__wdc ||
		(t.__wdc = () => {
			let r = n;
			for (; r; ) {
				if (r.isDeactivated) return;
				r = r.parent;
			}
			return t();
		});
	if ((ys(e, s, n), n)) {
		let r = n.parent;
		for (; r && r.parent; ) Yo(r.parent.vnode) && nc(s, e, n, r), (r = r.parent);
	}
}
function nc(t, e, n, s) {
	const r = ys(e, t, s, !0);
	Zo(() => {
		yr(s[e], r);
	}, n);
}
function ys(t, e, n = ye, s = !1) {
	if (n) {
		const r = n[t] || (n[t] = []),
			i =
				e.__weh ||
				(e.__weh = (...o) => {
					if (n.isUnmounted) return;
					qt(), bt(n);
					const a = He(e, n, t, o);
					return _t(), Nt(), a;
				});
		return s ? r.unshift(i) : r.push(i), i;
	}
}
const nt =
		(t) =>
		(e, n = ye) =>
			(!ws || t === 'sp') && ys(t, (...s) => e(...s), n),
	Xo = nt('bm'),
	sc = nt('m'),
	rc = nt('bu'),
	ic = nt('u'),
	oc = nt('bum'),
	Zo = nt('um'),
	ac = nt('sp'),
	lc = nt('rtg'),
	cc = nt('rtc');
function uc(t, e = ye) {
	ys('ec', t, e);
}
function hi(t, e, n, s) {
	let r;
	const i = n && n[s];
	if (F(t) || fe(t)) {
		r = new Array(t.length);
		for (let o = 0, a = t.length; o < a; o++) r[o] = e(t[o], o, void 0, i && i[o]);
	} else if (typeof t == 'number') {
		r = new Array(t);
		for (let o = 0; o < t; o++) r[o] = e(o + 1, o, void 0, i && i[o]);
	} else if (ae(t))
		if (t[Symbol.iterator]) r = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
		else {
			const o = Object.keys(t);
			r = new Array(o.length);
			for (let a = 0, l = o.length; a < l; a++) {
				const c = o[a];
				r[a] = e(t[c], c, a, i && i[a]);
			}
		}
	else r = [];
	return n && (n[s] = r), r;
}
function hc(t, e, n = {}, s, r) {
	if (ve.isCE || (ve.parent && vn(ve.parent) && ve.parent.isCE))
		return e !== 'default' && (n.name = e), he('slot', n, s && s());
	let i = t[e];
	i && i._c && (i._d = !1), qe();
	const o = i && ea(i(n)),
		a = Nr(
			Te,
			{ key: n.key || (o && o.key) || `_${e}` },
			o || (s ? s() : []),
			o && t._ === 1 ? 64 : -2
		);
	return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']), i && i._c && (i._d = !0), a;
}
function ea(t) {
	return t.some((e) => (In(e) ? !(e.type === Qe || (e.type === Te && !ea(e.children))) : !0))
		? t
		: null;
}
const Xs = (t) => (t ? (da(t) ? ks(t) || t.proxy : Xs(t.parent)) : null),
	bn = be(Object.create(null), {
		$: (t) => t,
		$el: (t) => t.vnode.el,
		$data: (t) => t.data,
		$props: (t) => t.props,
		$attrs: (t) => t.attrs,
		$slots: (t) => t.slots,
		$refs: (t) => t.refs,
		$parent: (t) => Xs(t.parent),
		$root: (t) => Xs(t.root),
		$emit: (t) => t.emit,
		$options: (t) => Lr(t),
		$forceUpdate: (t) =>
			t.f ||
			(t.f = () => {
				(t.effect.dirty = !0), Cr(t.update);
			}),
		$nextTick: (t) => t.n || (t.n = xr.bind(t.proxy)),
		$watch: (t) => Zl.bind(t),
	}),
	Cs = (t, e) => t !== ce && !t.__isScriptSetup && J(t, e),
	fc = {
		get({ _: t }, e) {
			const {
				ctx: n,
				setupState: s,
				data: r,
				props: i,
				accessCache: o,
				type: a,
				appContext: l,
			} = t;
			let c;
			if (e[0] !== '$') {
				const g = o[e];
				if (g !== void 0)
					switch (g) {
						case 1:
							return s[e];
						case 2:
							return r[e];
						case 4:
							return n[e];
						case 3:
							return i[e];
					}
				else {
					if (Cs(s, e)) return (o[e] = 1), s[e];
					if (r !== ce && J(r, e)) return (o[e] = 2), r[e];
					if ((c = t.propsOptions[0]) && J(c, e)) return (o[e] = 3), i[e];
					if (n !== ce && J(n, e)) return (o[e] = 4), n[e];
					Zs && (o[e] = 0);
				}
			}
			const u = bn[e];
			let h, f;
			if (u) return e === '$attrs' && Pe(t, 'get', e), u(t);
			if ((h = a.__cssModules) && (h = h[e])) return h;
			if (n !== ce && J(n, e)) return (o[e] = 4), n[e];
			if (((f = l.config.globalProperties), J(f, e))) return f[e];
		},
		set({ _: t }, e, n) {
			const { data: s, setupState: r, ctx: i } = t;
			return Cs(r, e)
				? ((r[e] = n), !0)
				: s !== ce && J(s, e)
					? ((s[e] = n), !0)
					: J(t.props, e) || (e[0] === '$' && e.slice(1) in t)
						? !1
						: ((i[e] = n), !0);
		},
		has(
			{ _: { data: t, setupState: e, accessCache: n, ctx: s, appContext: r, propsOptions: i } },
			o
		) {
			let a;
			return (
				!!n[o] ||
				(t !== ce && J(t, o)) ||
				Cs(e, o) ||
				((a = i[0]) && J(a, o)) ||
				J(s, o) ||
				J(bn, o) ||
				J(r.config.globalProperties, o)
			);
		},
		defineProperty(t, e, n) {
			return (
				n.get != null ? (t._.accessCache[e] = 0) : J(n, 'value') && this.set(t, e, n.value, null),
				Reflect.defineProperty(t, e, n)
			);
		},
	};
function fi(t) {
	return F(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
function Yd(t) {
	const e = Uc();
	let n = t();
	return (
		_t(),
		vr(n) &&
			(n = n.catch((s) => {
				throw (bt(e), s);
			})),
		[n, () => bt(e)]
	);
}
let Zs = !0;
function dc(t) {
	const e = Lr(t),
		n = t.proxy,
		s = t.ctx;
	(Zs = !1), e.beforeCreate && di(e.beforeCreate, t, 'bc');
	const {
		data: r,
		computed: i,
		methods: o,
		watch: a,
		provide: l,
		inject: c,
		created: u,
		beforeMount: h,
		mounted: f,
		beforeUpdate: g,
		updated: y,
		activated: b,
		deactivated: S,
		beforeDestroy: A,
		beforeUnmount: $,
		destroyed: L,
		unmounted: R,
		render: j,
		renderTracked: D,
		renderTriggered: Q,
		errorCaptured: U,
		serverPrefetch: B,
		expose: ne,
		inheritAttrs: le,
		components: pe,
		directives: ge,
		filters: je,
	} = e;
	if ((c && pc(c, s, null), o))
		for (const X in o) {
			const Z = o[X];
			V(Z) && (s[X] = Z.bind(n));
		}
	if (r) {
		const X = r.call(n, n);
		ae(X) && (t.data = qn(X));
	}
	if (((Zs = !0), i))
		for (const X in i) {
			const Z = i[X],
				Xe = V(Z) ? Z.bind(n, n) : V(Z.get) ? Z.get.bind(n, n) : $e,
				st = !V(Z) && V(Z.set) ? Z.set.bind(n) : $e,
				We = Ne({ get: Xe, set: st });
			Object.defineProperty(s, X, {
				enumerable: !0,
				configurable: !0,
				get: () => We.value,
				set: (Ae) => (We.value = Ae),
			});
		}
	if (a) for (const X in a) ta(a[X], s, n, X);
	if (l) {
		const X = V(l) ? l.call(n) : l;
		Reflect.ownKeys(X).forEach((Z) => {
			Xn(Z, X[Z]);
		});
	}
	u && di(u, t, 'c');
	function G(X, Z) {
		F(Z) ? Z.forEach((Xe) => X(Xe.bind(n))) : Z && X(Z.bind(n));
	}
	if (
		(G(Xo, h),
		G(sc, f),
		G(rc, g),
		G(ic, y),
		G(ec, b),
		G(tc, S),
		G(uc, U),
		G(cc, D),
		G(lc, Q),
		G(oc, $),
		G(Zo, R),
		G(ac, B),
		F(ne))
	)
		if (ne.length) {
			const X = t.exposed || (t.exposed = {});
			ne.forEach((Z) => {
				Object.defineProperty(X, Z, { get: () => n[Z], set: (Xe) => (n[Z] = Xe) });
			});
		} else t.exposed || (t.exposed = {});
	j && t.render === $e && (t.render = j),
		le != null && (t.inheritAttrs = le),
		pe && (t.components = pe),
		ge && (t.directives = ge);
}
function pc(t, e, n = $e) {
	F(t) && (t = er(t));
	for (const s in t) {
		const r = t[s];
		let i;
		ae(r)
			? 'default' in r
				? (i = Ve(r.from || s, r.default, !0))
				: (i = Ve(r.from || s))
			: (i = Ve(r)),
			de(i)
				? Object.defineProperty(e, s, {
						enumerable: !0,
						configurable: !0,
						get: () => i.value,
						set: (o) => (i.value = o),
					})
				: (e[s] = i);
	}
}
function di(t, e, n) {
	He(F(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function ta(t, e, n, s) {
	const r = s.includes('.') ? zo(n, s) : () => n[s];
	if (fe(t)) {
		const i = e[t];
		V(i) && tn(r, i);
	} else if (V(t)) tn(r, t.bind(n));
	else if (ae(t))
		if (F(t)) t.forEach((i) => ta(i, e, n, s));
		else {
			const i = V(t.handler) ? t.handler.bind(n) : e[t.handler];
			V(i) && tn(r, i, t);
		}
}
function Lr(t) {
	const e = t.type,
		{ mixins: n, extends: s } = e,
		{
			mixins: r,
			optionsCache: i,
			config: { optionMergeStrategies: o },
		} = t.appContext,
		a = i.get(e);
	let l;
	return (
		a
			? (l = a)
			: !r.length && !n && !s
				? (l = e)
				: ((l = {}), r.length && r.forEach((c) => os(l, c, o, !0)), os(l, e, o)),
		ae(e) && i.set(e, l),
		l
	);
}
function os(t, e, n, s = !1) {
	const { mixins: r, extends: i } = e;
	i && os(t, i, n, !0), r && r.forEach((o) => os(t, o, n, !0));
	for (const o in e)
		if (!(s && o === 'expose')) {
			const a = gc[o] || (n && n[o]);
			t[o] = a ? a(t[o], e[o]) : e[o];
		}
	return t;
}
const gc = {
	data: pi,
	props: gi,
	emits: gi,
	methods: _n,
	computed: _n,
	beforeCreate: Se,
	created: Se,
	beforeMount: Se,
	mounted: Se,
	beforeUpdate: Se,
	updated: Se,
	beforeDestroy: Se,
	beforeUnmount: Se,
	destroyed: Se,
	unmounted: Se,
	activated: Se,
	deactivated: Se,
	errorCaptured: Se,
	serverPrefetch: Se,
	components: _n,
	directives: _n,
	watch: _c,
	provide: pi,
	inject: mc,
};
function pi(t, e) {
	return e
		? t
			? function () {
					return be(V(t) ? t.call(this, this) : t, V(e) ? e.call(this, this) : e);
				}
			: e
		: t;
}
function mc(t, e) {
	return _n(er(t), er(e));
}
function er(t) {
	if (F(t)) {
		const e = {};
		for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
		return e;
	}
	return t;
}
function Se(t, e) {
	return t ? [...new Set([].concat(t, e))] : e;
}
function _n(t, e) {
	return t ? be(Object.create(null), t, e) : e;
}
function gi(t, e) {
	return t
		? F(t) && F(e)
			? [...new Set([...t, ...e])]
			: be(Object.create(null), fi(t), fi(e ?? {}))
		: e;
}
function _c(t, e) {
	if (!t) return e;
	if (!e) return t;
	const n = be(Object.create(null), t);
	for (const s in e) n[s] = Se(t[s], e[s]);
	return n;
}
function na() {
	return {
		app: null,
		config: {
			isNativeTag: Va,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {},
		},
		mixins: [],
		components: {},
		directives: {},
		provides: Object.create(null),
		optionsCache: new WeakMap(),
		propsCache: new WeakMap(),
		emitsCache: new WeakMap(),
	};
}
let yc = 0;
function vc(t, e) {
	return function (s, r = null) {
		V(s) || (s = be({}, s)), r != null && !ae(r) && (r = null);
		const i = na(),
			o = new WeakSet();
		let a = !1;
		const l = (i.app = {
			_uid: yc++,
			_component: s,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Wc,
			get config() {
				return i.config;
			},
			set config(c) {},
			use(c, ...u) {
				return (
					o.has(c) ||
						(c && V(c.install) ? (o.add(c), c.install(l, ...u)) : V(c) && (o.add(c), c(l, ...u))),
					l
				);
			},
			mixin(c) {
				return i.mixins.includes(c) || i.mixins.push(c), l;
			},
			component(c, u) {
				return u ? ((i.components[c] = u), l) : i.components[c];
			},
			directive(c, u) {
				return u ? ((i.directives[c] = u), l) : i.directives[c];
			},
			mount(c, u, h) {
				if (!a) {
					const f = he(s, r);
					return (
						(f.appContext = i),
						h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
						u && e ? e(f, c) : t(f, c, h),
						(a = !0),
						(l._container = c),
						(c.__vue_app__ = l),
						ks(f.component) || f.component.proxy
					);
				}
			},
			unmount() {
				a && (t(null, l._container), delete l._container.__vue_app__);
			},
			provide(c, u) {
				return (i.provides[c] = u), l;
			},
			runWithContext(c) {
				Cn = l;
				try {
					return c();
				} finally {
					Cn = null;
				}
			},
		});
		return l;
	};
}
let Cn = null;
function Xn(t, e) {
	if (ye) {
		let n = ye.provides;
		const s = ye.parent && ye.parent.provides;
		s === n && (n = ye.provides = Object.create(s)), (n[t] = e);
	}
}
function Ve(t, e, n = !1) {
	const s = ye || ve;
	if (s || Cn) {
		const r = s
			? s.parent == null
				? s.vnode.appContext && s.vnode.appContext.provides
				: s.parent.provides
			: Cn._context.provides;
		if (r && t in r) return r[t];
		if (arguments.length > 1) return n && V(e) ? e.call(s && s.proxy) : e;
	}
}
function bc() {
	return !!(ye || ve || Cn);
}
function wc(t, e, n, s = !1) {
	const r = {},
		i = {};
	ts(i, bs, 1), (t.propsDefaults = Object.create(null)), sa(t, e, r, i);
	for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
	n ? (t.props = s ? r : Io(r)) : t.type.props ? (t.props = r) : (t.props = i), (t.attrs = i);
}
function kc(t, e, n, s) {
	const {
			props: r,
			attrs: i,
			vnode: { patchFlag: o },
		} = t,
		a = Y(r),
		[l] = t.propsOptions;
	let c = !1;
	if ((s || o > 0) && !(o & 16)) {
		if (o & 8) {
			const u = t.vnode.dynamicProps;
			for (let h = 0; h < u.length; h++) {
				let f = u[h];
				if (ms(t.emitsOptions, f)) continue;
				const g = e[f];
				if (l)
					if (J(i, f)) g !== i[f] && ((i[f] = g), (c = !0));
					else {
						const y = Ye(f);
						r[y] = tr(l, a, y, g, t, !1);
					}
				else g !== i[f] && ((i[f] = g), (c = !0));
			}
		}
	} else {
		sa(t, e, r, i) && (c = !0);
		let u;
		for (const h in a)
			(!e || (!J(e, h) && ((u = Lt(h)) === h || !J(e, u)))) &&
				(l
					? n && (n[h] !== void 0 || n[u] !== void 0) && (r[h] = tr(l, a, h, void 0, t, !0))
					: delete r[h]);
		if (i !== a) for (const h in i) (!e || !J(e, h)) && (delete i[h], (c = !0));
	}
	c && tt(t, 'set', '$attrs');
}
function sa(t, e, n, s) {
	const [r, i] = t.propsOptions;
	let o = !1,
		a;
	if (e)
		for (let l in e) {
			if (Yn(l)) continue;
			const c = e[l];
			let u;
			r && J(r, (u = Ye(l)))
				? !i || !i.includes(u)
					? (n[u] = c)
					: ((a || (a = {}))[u] = c)
				: ms(t.emitsOptions, l) || ((!(l in s) || c !== s[l]) && ((s[l] = c), (o = !0)));
		}
	if (i) {
		const l = Y(n),
			c = a || ce;
		for (let u = 0; u < i.length; u++) {
			const h = i[u];
			n[h] = tr(r, l, h, c[h], t, !J(c, h));
		}
	}
	return o;
}
function tr(t, e, n, s, r, i) {
	const o = t[n];
	if (o != null) {
		const a = J(o, 'default');
		if (a && s === void 0) {
			const l = o.default;
			if (o.type !== Function && !o.skipFactory && V(l)) {
				const { propsDefaults: c } = r;
				n in c ? (s = c[n]) : (bt(r), (s = c[n] = l.call(null, e)), _t());
			} else s = l;
		}
		o[0] && (i && !a ? (s = !1) : o[1] && (s === '' || s === Lt(n)) && (s = !0));
	}
	return s;
}
function ra(t, e, n = !1) {
	const s = e.propsCache,
		r = s.get(t);
	if (r) return r;
	const i = t.props,
		o = {},
		a = [];
	let l = !1;
	if (!V(t)) {
		const u = (h) => {
			l = !0;
			const [f, g] = ra(h, e, !0);
			be(o, f), g && a.push(...g);
		};
		!n && e.mixins.length && e.mixins.forEach(u),
			t.extends && u(t.extends),
			t.mixins && t.mixins.forEach(u);
	}
	if (!i && !l) return ae(t) && s.set(t, Qt), Qt;
	if (F(i))
		for (let u = 0; u < i.length; u++) {
			const h = Ye(i[u]);
			mi(h) && (o[h] = ce);
		}
	else if (i)
		for (const u in i) {
			const h = Ye(u);
			if (mi(h)) {
				const f = i[u],
					g = (o[h] = F(f) || V(f) ? { type: f } : be({}, f));
				if (g) {
					const y = vi(Boolean, g.type),
						b = vi(String, g.type);
					(g[0] = y > -1), (g[1] = b < 0 || y < b), (y > -1 || J(g, 'default')) && a.push(h);
				}
			}
		}
	const c = [o, a];
	return ae(t) && s.set(t, c), c;
}
function mi(t) {
	return t[0] !== '$';
}
function _i(t) {
	const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
	return e ? e[2] : t === null ? 'null' : '';
}
function yi(t, e) {
	return _i(t) === _i(e);
}
function vi(t, e) {
	return F(e) ? e.findIndex((n) => yi(n, t)) : V(e) && yi(e, t) ? 0 : -1;
}
const ia = (t) => t[0] === '_' || t === '$stable',
	qr = (t) => (F(t) ? t.map(Be) : [Be(t)]),
	Ec = (t, e, n) => {
		if (e._n) return e;
		const s = is((...r) => qr(e(...r)), n);
		return (s._c = !1), s;
	},
	oa = (t, e, n) => {
		const s = t._ctx;
		for (const r in t) {
			if (ia(r)) continue;
			const i = t[r];
			if (V(i)) e[r] = Ec(r, i, s);
			else if (i != null) {
				const o = qr(i);
				e[r] = () => o;
			}
		}
	},
	aa = (t, e) => {
		const n = qr(e);
		t.slots.default = () => n;
	},
	Sc = (t, e) => {
		if (t.vnode.shapeFlag & 32) {
			const n = e._;
			n ? ((t.slots = Y(e)), ts(e, '_', n)) : oa(e, (t.slots = {}));
		} else (t.slots = {}), e && aa(t, e);
		ts(t.slots, bs, 1);
	},
	Tc = (t, e, n) => {
		const { vnode: s, slots: r } = t;
		let i = !0,
			o = ce;
		if (s.shapeFlag & 32) {
			const a = e._;
			a
				? n && a === 1
					? (i = !1)
					: (be(r, e), !n && a === 1 && delete r._)
				: ((i = !e.$stable), oa(e, r)),
				(o = e);
		} else e && (aa(t, e), (o = { default: 1 }));
		if (i) for (const a in r) !ia(a) && o[a] == null && delete r[a];
	};
function nr(t, e, n, s, r = !1) {
	if (F(t)) {
		t.forEach((f, g) => nr(f, e && (F(e) ? e[g] : e), n, s, r));
		return;
	}
	if (vn(s) && !r) return;
	const i = s.shapeFlag & 4 ? ks(s.component) || s.component.proxy : s.el,
		o = r ? null : i,
		{ i: a, r: l } = t,
		c = e && e.r,
		u = a.refs === ce ? (a.refs = {}) : a.refs,
		h = a.setupState;
	if (
		(c != null &&
			c !== l &&
			(fe(c) ? ((u[c] = null), J(h, c) && (h[c] = null)) : de(c) && (c.value = null)),
		V(l))
	)
		mt(l, a, 12, [o, u]);
	else {
		const f = fe(l),
			g = de(l);
		if (f || g) {
			const y = () => {
				if (t.f) {
					const b = f ? (J(h, l) ? h[l] : u[l]) : l.value;
					r
						? F(b) && yr(b, i)
						: F(b)
							? b.includes(i) || b.push(i)
							: f
								? ((u[l] = [i]), J(h, l) && (h[l] = u[l]))
								: ((l.value = [i]), t.k && (u[t.k] = l.value));
				} else f ? ((u[l] = o), J(h, l) && (h[l] = o)) : g && ((l.value = o), t.k && (u[t.k] = o));
			};
			o ? ((y.id = -1), Oe(y, n)) : y();
		}
	}
}
const Oe = Jl;
function Rc(t) {
	return Ac(t);
}
function Ac(t, e) {
	const n = po();
	n.__VUE__ = !0;
	const {
			insert: s,
			remove: r,
			patchProp: i,
			createElement: o,
			createText: a,
			createComment: l,
			setText: c,
			setElementText: u,
			parentNode: h,
			nextSibling: f,
			setScopeId: g = $e,
			insertStaticContent: y,
		} = t,
		b = (d, p, m, _ = null, w = null, k = null, x = void 0, T = null, O = !!p.dynamicChildren) => {
			if (d === p) return;
			d && !ft(d, p) && ((_ = v(d)), Ae(d, w, k, !0), (d = null)),
				p.patchFlag === -2 && ((O = !1), (p.dynamicChildren = null));
			const { type: E, ref: C, shapeFlag: M } = p;
			switch (E) {
				case vs:
					S(d, p, m, _);
					break;
				case Qe:
					A(d, p, m, _);
					break;
				case Zn:
					d == null && $(p, m, _, x);
					break;
				case Te:
					pe(d, p, m, _, w, k, x, T, O);
					break;
				default:
					M & 1
						? j(d, p, m, _, w, k, x, T, O)
						: M & 6
							? ge(d, p, m, _, w, k, x, T, O)
							: (M & 64 || M & 128) && E.process(d, p, m, _, w, k, x, T, O, P);
			}
			C != null && w && nr(C, d && d.ref, k, p || d, !p);
		},
		S = (d, p, m, _) => {
			if (d == null) s((p.el = a(p.children)), m, _);
			else {
				const w = (p.el = d.el);
				p.children !== d.children && c(w, p.children);
			}
		},
		A = (d, p, m, _) => {
			d == null ? s((p.el = l(p.children || '')), m, _) : (p.el = d.el);
		},
		$ = (d, p, m, _) => {
			[d.el, d.anchor] = y(d.children, p, m, _, d.el, d.anchor);
		},
		L = ({ el: d, anchor: p }, m, _) => {
			let w;
			for (; d && d !== p; ) (w = f(d)), s(d, m, _), (d = w);
			s(p, m, _);
		},
		R = ({ el: d, anchor: p }) => {
			let m;
			for (; d && d !== p; ) (m = f(d)), r(d), (d = m);
			r(p);
		},
		j = (d, p, m, _, w, k, x, T, O) => {
			p.type === 'svg' ? (x = 'svg') : p.type === 'math' && (x = 'mathml'),
				d == null ? D(p, m, _, w, k, x, T, O) : B(d, p, w, k, x, T, O);
		},
		D = (d, p, m, _, w, k, x, T) => {
			let O, E;
			const { props: C, shapeFlag: M, transition: N, dirs: H } = d;
			if (
				((O = d.el = o(d.type, k, C && C.is, C)),
				M & 8 ? u(O, d.children) : M & 16 && U(d.children, O, null, _, w, Is(d, k), x, T),
				H && wt(d, null, _, 'created'),
				Q(O, d, d.scopeId, x, _),
				C)
			) {
				for (const ie in C)
					ie !== 'value' && !Yn(ie) && i(O, ie, null, C[ie], k, d.children, _, w, we);
				'value' in C && i(O, 'value', null, C.value, k), (E = C.onVnodeBeforeMount) && ze(E, _, d);
			}
			H && wt(d, null, _, 'beforeMount');
			const K = Oc(w, N);
			K && N.beforeEnter(O),
				s(O, p, m),
				((E = C && C.onVnodeMounted) || K || H) &&
					Oe(() => {
						E && ze(E, _, d), K && N.enter(O), H && wt(d, null, _, 'mounted');
					}, w);
		},
		Q = (d, p, m, _, w) => {
			if ((m && g(d, m), _)) for (let k = 0; k < _.length; k++) g(d, _[k]);
			if (w) {
				let k = w.subTree;
				if (p === k) {
					const x = w.vnode;
					Q(d, x, x.scopeId, x.slotScopeIds, w.parent);
				}
			}
		},
		U = (d, p, m, _, w, k, x, T, O = 0) => {
			for (let E = O; E < d.length; E++) {
				const C = (d[E] = T ? at(d[E]) : Be(d[E]));
				b(null, C, p, m, _, w, k, x, T);
			}
		},
		B = (d, p, m, _, w, k, x) => {
			const T = (p.el = d.el);
			let { patchFlag: O, dynamicChildren: E, dirs: C } = p;
			O |= d.patchFlag & 16;
			const M = d.props || ce,
				N = p.props || ce;
			let H;
			if (
				(m && kt(m, !1),
				(H = N.onVnodeBeforeUpdate) && ze(H, m, p, d),
				C && wt(p, d, m, 'beforeUpdate'),
				m && kt(m, !0),
				E
					? ne(d.dynamicChildren, E, T, m, _, Is(p, w), k)
					: x || Z(d, p, T, null, m, _, Is(p, w), k, !1),
				O > 0)
			) {
				if (O & 16) le(T, p, M, N, m, _, w);
				else if (
					(O & 2 && M.class !== N.class && i(T, 'class', null, N.class, w),
					O & 4 && i(T, 'style', M.style, N.style, w),
					O & 8)
				) {
					const K = p.dynamicProps;
					for (let ie = 0; ie < K.length; ie++) {
						const ue = K[ie],
							_e = M[ue],
							Ue = N[ue];
						(Ue !== _e || ue === 'value') && i(T, ue, _e, Ue, w, d.children, m, _, we);
					}
				}
				O & 1 && d.children !== p.children && u(T, p.children);
			} else !x && E == null && le(T, p, M, N, m, _, w);
			((H = N.onVnodeUpdated) || C) &&
				Oe(() => {
					H && ze(H, m, p, d), C && wt(p, d, m, 'updated');
				}, _);
		},
		ne = (d, p, m, _, w, k, x) => {
			for (let T = 0; T < p.length; T++) {
				const O = d[T],
					E = p[T],
					C = O.el && (O.type === Te || !ft(O, E) || O.shapeFlag & 70) ? h(O.el) : m;
				b(O, E, C, null, _, w, k, x, !0);
			}
		},
		le = (d, p, m, _, w, k, x) => {
			if (m !== _) {
				if (m !== ce)
					for (const T in m) !Yn(T) && !(T in _) && i(d, T, m[T], null, x, p.children, w, k, we);
				for (const T in _) {
					if (Yn(T)) continue;
					const O = _[T],
						E = m[T];
					O !== E && T !== 'value' && i(d, T, E, O, x, p.children, w, k, we);
				}
				'value' in _ && i(d, 'value', m.value, _.value, x);
			}
		},
		pe = (d, p, m, _, w, k, x, T, O) => {
			const E = (p.el = d ? d.el : a('')),
				C = (p.anchor = d ? d.anchor : a(''));
			let { patchFlag: M, dynamicChildren: N, slotScopeIds: H } = p;
			H && (T = T ? T.concat(H) : H),
				d == null
					? (s(E, m, _), s(C, m, _), U(p.children, m, C, w, k, x, T, O))
					: M > 0 && M & 64 && N && d.dynamicChildren
						? (ne(d.dynamicChildren, N, m, w, k, x, T),
							(p.key != null || (w && p === w.subTree)) && la(d, p, !0))
						: Z(d, p, m, C, w, k, x, T, O);
		},
		ge = (d, p, m, _, w, k, x, T, O) => {
			(p.slotScopeIds = T),
				d == null
					? p.shapeFlag & 512
						? w.ctx.activate(p, m, _, x, O)
						: je(p, m, _, w, k, x, O)
					: me(d, p, O);
		},
		je = (d, p, m, _, w, k, x) => {
			const T = (d.component = Dc(d, _, w));
			if ((Yo(d) && (T.ctx.renderer = P), Mc(T), T.asyncDep)) {
				if ((w && w.registerDep(T, G), !d.el)) {
					const O = (T.subTree = he(Qe));
					A(null, O, p, m);
				}
			} else G(T, d, p, m, w, k, x);
		},
		me = (d, p, m) => {
			const _ = (p.component = d.component);
			if (Ml(d, p, m))
				if (_.asyncDep && !_.asyncResolved) {
					X(_, p, m);
					return;
				} else (_.next = p), jl(_.update), (_.effect.dirty = !0), _.update();
			else (p.el = d.el), (_.vnode = p);
		},
		G = (d, p, m, _, w, k, x) => {
			const T = () => {
					if (d.isMounted) {
						let { next: C, bu: M, u: N, parent: H, vnode: K } = d;
						{
							const Ft = ca(d);
							if (Ft) {
								C && ((C.el = K.el), X(d, C, x)),
									Ft.asyncDep.then(() => {
										d.isUnmounted || T();
									});
								return;
							}
						}
						let ie = C,
							ue;
						kt(d, !1),
							C ? ((C.el = K.el), X(d, C, x)) : (C = K),
							M && Qn(M),
							(ue = C.props && C.props.onVnodeBeforeUpdate) && ze(ue, H, C, K),
							kt(d, !0);
						const _e = xs(d),
							Ue = d.subTree;
						(d.subTree = _e),
							b(Ue, _e, h(Ue.el), v(Ue), d, w, k),
							(C.el = _e.el),
							ie === null && Ir(d, _e.el),
							N && Oe(N, w),
							(ue = C.props && C.props.onVnodeUpdated) && Oe(() => ze(ue, H, C, K), w);
					} else {
						let C;
						const { el: M, props: N } = p,
							{ bm: H, m: K, parent: ie } = d,
							ue = vn(p);
						if (
							(kt(d, !1),
							H && Qn(H),
							!ue && (C = N && N.onVnodeBeforeMount) && ze(C, ie, p),
							kt(d, !0),
							M && ee)
						) {
							const _e = () => {
								(d.subTree = xs(d)), ee(M, d.subTree, d, w, null);
							};
							ue ? p.type.__asyncLoader().then(() => !d.isUnmounted && _e()) : _e();
						} else {
							const _e = (d.subTree = xs(d));
							b(null, _e, m, _, d, w, k), (p.el = _e.el);
						}
						if ((K && Oe(K, w), !ue && (C = N && N.onVnodeMounted))) {
							const _e = p;
							Oe(() => ze(C, ie, _e), w);
						}
						(p.shapeFlag & 256 || (ie && vn(ie.vnode) && ie.vnode.shapeFlag & 256)) &&
							d.a &&
							Oe(d.a, w),
							(d.isMounted = !0),
							(p = m = _ = null);
					}
				},
				O = (d.effect = new kr(T, $e, () => Cr(E), d.scope)),
				E = (d.update = () => {
					O.dirty && O.run();
				});
			(E.id = d.uid), kt(d, !0), E();
		},
		X = (d, p, m) => {
			p.component = d;
			const _ = d.vnode.props;
			(d.vnode = p), (d.next = null), kc(d, p.props, _, m), Tc(d, p.children, m), qt(), ai(d), Nt();
		},
		Z = (d, p, m, _, w, k, x, T, O = !1) => {
			const E = d && d.children,
				C = d ? d.shapeFlag : 0,
				M = p.children,
				{ patchFlag: N, shapeFlag: H } = p;
			if (N > 0) {
				if (N & 128) {
					st(E, M, m, _, w, k, x, T, O);
					return;
				} else if (N & 256) {
					Xe(E, M, m, _, w, k, x, T, O);
					return;
				}
			}
			H & 8
				? (C & 16 && we(E, w, k), M !== E && u(m, M))
				: C & 16
					? H & 16
						? st(E, M, m, _, w, k, x, T, O)
						: we(E, w, k, !0)
					: (C & 8 && u(m, ''), H & 16 && U(M, m, _, w, k, x, T, O));
		},
		Xe = (d, p, m, _, w, k, x, T, O) => {
			(d = d || Qt), (p = p || Qt);
			const E = d.length,
				C = p.length,
				M = Math.min(E, C);
			let N;
			for (N = 0; N < M; N++) {
				const H = (p[N] = O ? at(p[N]) : Be(p[N]));
				b(d[N], H, m, null, w, k, x, T, O);
			}
			E > C ? we(d, w, k, !0, !1, M) : U(p, m, _, w, k, x, T, O, M);
		},
		st = (d, p, m, _, w, k, x, T, O) => {
			let E = 0;
			const C = p.length;
			let M = d.length - 1,
				N = C - 1;
			for (; E <= M && E <= N; ) {
				const H = d[E],
					K = (p[E] = O ? at(p[E]) : Be(p[E]));
				if (ft(H, K)) b(H, K, m, null, w, k, x, T, O);
				else break;
				E++;
			}
			for (; E <= M && E <= N; ) {
				const H = d[M],
					K = (p[N] = O ? at(p[N]) : Be(p[N]));
				if (ft(H, K)) b(H, K, m, null, w, k, x, T, O);
				else break;
				M--, N--;
			}
			if (E > M) {
				if (E <= N) {
					const H = N + 1,
						K = H < C ? p[H].el : _;
					for (; E <= N; ) b(null, (p[E] = O ? at(p[E]) : Be(p[E])), m, K, w, k, x, T, O), E++;
				}
			} else if (E > N) for (; E <= M; ) Ae(d[E], w, k, !0), E++;
			else {
				const H = E,
					K = E,
					ie = new Map();
				for (E = K; E <= N; E++) {
					const xe = (p[E] = O ? at(p[E]) : Be(p[E]));
					xe.key != null && ie.set(xe.key, E);
				}
				let ue,
					_e = 0;
				const Ue = N - K + 1;
				let Ft = !1,
					Jr = 0;
				const dn = new Array(Ue);
				for (E = 0; E < Ue; E++) dn[E] = 0;
				for (E = H; E <= M; E++) {
					const xe = d[E];
					if (_e >= Ue) {
						Ae(xe, w, k, !0);
						continue;
					}
					let Ge;
					if (xe.key != null) Ge = ie.get(xe.key);
					else
						for (ue = K; ue <= N; ue++)
							if (dn[ue - K] === 0 && ft(xe, p[ue])) {
								Ge = ue;
								break;
							}
					Ge === void 0
						? Ae(xe, w, k, !0)
						: ((dn[Ge - K] = E + 1),
							Ge >= Jr ? (Jr = Ge) : (Ft = !0),
							b(xe, p[Ge], m, null, w, k, x, T, O),
							_e++);
				}
				const Yr = Ft ? Pc(dn) : Qt;
				for (ue = Yr.length - 1, E = Ue - 1; E >= 0; E--) {
					const xe = K + E,
						Ge = p[xe],
						Qr = xe + 1 < C ? p[xe + 1].el : _;
					dn[E] === 0
						? b(null, Ge, m, Qr, w, k, x, T, O)
						: Ft && (ue < 0 || E !== Yr[ue] ? We(Ge, m, Qr, 2) : ue--);
				}
			}
		},
		We = (d, p, m, _, w = null) => {
			const { el: k, type: x, transition: T, children: O, shapeFlag: E } = d;
			if (E & 6) {
				We(d.component.subTree, p, m, _);
				return;
			}
			if (E & 128) {
				d.suspense.move(p, m, _);
				return;
			}
			if (E & 64) {
				x.move(d, p, m, P);
				return;
			}
			if (x === Te) {
				s(k, p, m);
				for (let M = 0; M < O.length; M++) We(O[M], p, m, _);
				s(d.anchor, p, m);
				return;
			}
			if (x === Zn) {
				L(d, p, m);
				return;
			}
			if (_ !== 2 && E & 1 && T)
				if (_ === 0) T.beforeEnter(k), s(k, p, m), Oe(() => T.enter(k), w);
				else {
					const { leave: M, delayLeave: N, afterLeave: H } = T,
						K = () => s(k, p, m),
						ie = () => {
							M(k, () => {
								K(), H && H();
							});
						};
					N ? N(k, K, ie) : ie();
				}
			else s(k, p, m);
		},
		Ae = (d, p, m, _ = !1, w = !1) => {
			const {
				type: k,
				props: x,
				ref: T,
				children: O,
				dynamicChildren: E,
				shapeFlag: C,
				patchFlag: M,
				dirs: N,
			} = d;
			if ((T != null && nr(T, null, m, d, !0), C & 256)) {
				p.ctx.deactivate(d);
				return;
			}
			const H = C & 1 && N,
				K = !vn(d);
			let ie;
			if ((K && (ie = x && x.onVnodeBeforeUnmount) && ze(ie, p, d), C & 6)) Un(d.component, m, _);
			else {
				if (C & 128) {
					d.suspense.unmount(m, _);
					return;
				}
				H && wt(d, null, p, 'beforeUnmount'),
					C & 64
						? d.type.remove(d, p, m, w, P, _)
						: E && (k !== Te || (M > 0 && M & 64))
							? we(E, p, m, !1, !0)
							: ((k === Te && M & 384) || (!w && C & 16)) && we(O, p, m),
					_ && Ut(d);
			}
			((K && (ie = x && x.onVnodeUnmounted)) || H) &&
				Oe(() => {
					ie && ze(ie, p, d), H && wt(d, null, p, 'unmounted');
				}, m);
		},
		Ut = (d) => {
			const { type: p, el: m, anchor: _, transition: w } = d;
			if (p === Te) {
				Mt(m, _);
				return;
			}
			if (p === Zn) {
				R(d);
				return;
			}
			const k = () => {
				r(m), w && !w.persisted && w.afterLeave && w.afterLeave();
			};
			if (d.shapeFlag & 1 && w && !w.persisted) {
				const { leave: x, delayLeave: T } = w,
					O = () => x(m, k);
				T ? T(d.el, k, O) : O();
			} else k();
		},
		Mt = (d, p) => {
			let m;
			for (; d !== p; ) (m = f(d)), r(d), (d = m);
			r(p);
		},
		Un = (d, p, m) => {
			const { bum: _, scope: w, update: k, subTree: x, um: T } = d;
			_ && Qn(_),
				w.stop(),
				k && ((k.active = !1), Ae(x, d, p, m)),
				T && Oe(T, p),
				Oe(() => {
					d.isUnmounted = !0;
				}, p),
				p &&
					p.pendingBranch &&
					!p.isUnmounted &&
					d.asyncDep &&
					!d.asyncResolved &&
					d.suspenseId === p.pendingId &&
					(p.deps--, p.deps === 0 && p.resolve());
		},
		we = (d, p, m, _ = !1, w = !1, k = 0) => {
			for (let x = k; x < d.length; x++) Ae(d[x], p, m, _, w);
		},
		v = (d) =>
			d.shapeFlag & 6
				? v(d.component.subTree)
				: d.shapeFlag & 128
					? d.suspense.next()
					: f(d.anchor || d.el),
		I = (d, p, m) => {
			d == null
				? p._vnode && Ae(p._vnode, null, null, !0)
				: b(p._vnode || null, d, p, null, null, null, m),
				ai(),
				Fo(),
				(p._vnode = d);
		},
		P = { p: b, um: Ae, m: We, r: Ut, mt: je, mc: U, pc: Z, pbc: ne, n: v, o: t };
	let q, ee;
	return e && ([q, ee] = e(P)), { render: I, hydrate: q, createApp: vc(I, q) };
}
function Is({ type: t, props: e }, n) {
	return (n === 'svg' && t === 'foreignObject') ||
		(n === 'mathml' && t === 'annotation-xml' && e && e.encoding && e.encoding.includes('html'))
		? void 0
		: n;
}
function kt({ effect: t, update: e }, n) {
	t.allowRecurse = e.allowRecurse = n;
}
function Oc(t, e) {
	return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function la(t, e, n = !1) {
	const s = t.children,
		r = e.children;
	if (F(s) && F(r))
		for (let i = 0; i < s.length; i++) {
			const o = s[i];
			let a = r[i];
			a.shapeFlag & 1 &&
				!a.dynamicChildren &&
				((a.patchFlag <= 0 || a.patchFlag === 32) && ((a = r[i] = at(r[i])), (a.el = o.el)),
				n || la(o, a)),
				a.type === vs && (a.el = o.el);
		}
}
function Pc(t) {
	const e = t.slice(),
		n = [0];
	let s, r, i, o, a;
	const l = t.length;
	for (s = 0; s < l; s++) {
		const c = t[s];
		if (c !== 0) {
			if (((r = n[n.length - 1]), t[r] < c)) {
				(e[s] = r), n.push(s);
				continue;
			}
			for (i = 0, o = n.length - 1; i < o; )
				(a = (i + o) >> 1), t[n[a]] < c ? (i = a + 1) : (o = a);
			c < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), (n[i] = s));
		}
	}
	for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
	return n;
}
function ca(t) {
	const e = t.subTree.component;
	if (e) return e.asyncDep && !e.asyncResolved ? e : ca(e);
}
const xc = (t) => t.__isTeleport,
	Te = Symbol.for('v-fgt'),
	vs = Symbol.for('v-txt'),
	Qe = Symbol.for('v-cmt'),
	Zn = Symbol.for('v-stc'),
	wn = [];
let De = null;
function qe(t = !1) {
	wn.push((De = t ? null : []));
}
function ua() {
	wn.pop(), (De = wn[wn.length - 1] || null);
}
let an = 1;
function bi(t) {
	an += t;
}
function ha(t) {
	return (t.dynamicChildren = an > 0 ? De || Qt : null), ua(), an > 0 && De && De.push(t), t;
}
function ht(t, e, n, s, r, i) {
	return ha(te(t, e, n, s, r, i, !0));
}
function Nr(t, e, n, s, r) {
	return ha(he(t, e, n, s, r, !0));
}
function In(t) {
	return t ? t.__v_isVNode === !0 : !1;
}
function ft(t, e) {
	return t.type === e.type && t.key === e.key;
}
const bs = '__vInternal',
	fa = ({ key: t }) => t ?? null,
	es = ({ ref: t, ref_key: e, ref_for: n }) => (
		typeof t == 'number' && (t = '' + t),
		t != null ? (fe(t) || de(t) || V(t) ? { i: ve, r: t, k: e, f: !!n } : t) : null
	);
function te(t, e = null, n = null, s = 0, r = null, i = t === Te ? 0 : 1, o = !1, a = !1) {
	const l = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: t,
		props: e,
		key: e && fa(e),
		ref: e && es(e),
		scopeId: _s,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: i,
		patchFlag: s,
		dynamicProps: r,
		dynamicChildren: null,
		appContext: null,
		ctx: ve,
	};
	return (
		a ? (Dr(l, n), i & 128 && t.normalize(l)) : n && (l.shapeFlag |= fe(n) ? 8 : 16),
		an > 0 && !o && De && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && De.push(l),
		l
	);
}
const he = Cc;
function Cc(t, e = null, n = null, s = 0, r = null, i = !1) {
	if (((!t || t === Fl) && (t = Qe), In(t))) {
		const a = ln(t, e, !0);
		return (
			n && Dr(a, n),
			an > 0 && !i && De && (a.shapeFlag & 6 ? (De[De.indexOf(t)] = a) : De.push(a)),
			(a.patchFlag |= -2),
			a
		);
	}
	if ((Kc(t) && (t = t.__vccOpts), e)) {
		e = Ic(e);
		let { class: a, style: l } = e;
		a && !fe(a) && (e.class = Pt(a)),
			ae(l) && (jo(l) && !F(l) && (l = be({}, l)), (e.style = wr(l)));
	}
	const o = fe(t) ? 1 : Hl(t) ? 128 : xc(t) ? 64 : ae(t) ? 4 : V(t) ? 2 : 0;
	return te(t, e, n, s, r, o, i, !0);
}
function Ic(t) {
	return t ? (jo(t) || bs in t ? be({}, t) : t) : null;
}
function ln(t, e, n = !1) {
	const { props: s, ref: r, patchFlag: i, children: o } = t,
		a = e ? Lc(s || {}, e) : s;
	return {
		__v_isVNode: !0,
		__v_skip: !0,
		type: t.type,
		props: a,
		key: a && fa(a),
		ref: e && e.ref ? (n && r ? (F(r) ? r.concat(es(e)) : [r, es(e)]) : es(e)) : r,
		scopeId: t.scopeId,
		slotScopeIds: t.slotScopeIds,
		children: o,
		target: t.target,
		targetAnchor: t.targetAnchor,
		staticCount: t.staticCount,
		shapeFlag: t.shapeFlag,
		patchFlag: e && t.type !== Te ? (i === -1 ? 16 : i | 16) : i,
		dynamicProps: t.dynamicProps,
		dynamicChildren: t.dynamicChildren,
		appContext: t.appContext,
		dirs: t.dirs,
		transition: t.transition,
		component: t.component,
		suspense: t.suspense,
		ssContent: t.ssContent && ln(t.ssContent),
		ssFallback: t.ssFallback && ln(t.ssFallback),
		el: t.el,
		anchor: t.anchor,
		ctx: t.ctx,
		ce: t.ce,
	};
}
function jt(t = ' ', e = 0) {
	return he(vs, null, t, e);
}
function $c(t, e) {
	const n = he(Zn, null, t);
	return (n.staticCount = e), n;
}
function jc(t = '', e = !1) {
	return e ? (qe(), Nr(Qe, null, t)) : he(Qe, null, t);
}
function Be(t) {
	return t == null || typeof t == 'boolean'
		? he(Qe)
		: F(t)
			? he(Te, null, t.slice())
			: typeof t == 'object'
				? at(t)
				: he(vs, null, String(t));
}
function at(t) {
	return (t.el === null && t.patchFlag !== -1) || t.memo ? t : ln(t);
}
function Dr(t, e) {
	let n = 0;
	const { shapeFlag: s } = t;
	if (e == null) e = null;
	else if (F(e)) n = 16;
	else if (typeof e == 'object')
		if (s & 65) {
			const r = e.default;
			r && (r._c && (r._d = !1), Dr(t, r()), r._c && (r._d = !0));
			return;
		} else {
			n = 32;
			const r = e._;
			!r && !(bs in e)
				? (e._ctx = ve)
				: r === 3 && ve && (ve.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
		}
	else
		V(e)
			? ((e = { default: e, _ctx: ve }), (n = 32))
			: ((e = String(e)), s & 64 ? ((n = 16), (e = [jt(e)])) : (n = 8));
	(t.children = e), (t.shapeFlag |= n);
}
function Lc(...t) {
	const e = {};
	for (let n = 0; n < t.length; n++) {
		const s = t[n];
		for (const r in s)
			if (r === 'class') e.class !== s.class && (e.class = Pt([e.class, s.class]));
			else if (r === 'style') e.style = wr([e.style, s.style]);
			else if (cs(r)) {
				const i = e[r],
					o = s[r];
				o && i !== o && !(F(i) && i.includes(o)) && (e[r] = i ? [].concat(i, o) : o);
			} else r !== '' && (e[r] = s[r]);
	}
	return e;
}
function ze(t, e, n, s = null) {
	He(t, e, 7, [n, s]);
}
const qc = na();
let Nc = 0;
function Dc(t, e, n) {
	const s = t.type,
		r = (e ? e.appContext : t.appContext) || qc,
		i = {
			uid: Nc++,
			vnode: t,
			type: s,
			parent: e,
			appContext: r,
			root: null,
			next: null,
			subTree: null,
			effect: null,
			update: null,
			scope: new yo(!0),
			render: null,
			proxy: null,
			exposed: null,
			exposeProxy: null,
			withProxy: null,
			provides: e ? e.provides : Object.create(r.provides),
			accessCache: null,
			renderCache: [],
			components: null,
			directives: null,
			propsOptions: ra(s, r),
			emitsOptions: Ho(s, r),
			emit: null,
			emitted: null,
			propsDefaults: ce,
			inheritAttrs: s.inheritAttrs,
			ctx: ce,
			data: ce,
			props: ce,
			attrs: ce,
			slots: ce,
			refs: ce,
			setupState: ce,
			setupContext: null,
			attrsProxy: null,
			slotsProxy: null,
			suspense: n,
			suspenseId: n ? n.pendingId : 0,
			asyncDep: null,
			asyncResolved: !1,
			isMounted: !1,
			isUnmounted: !1,
			isDeactivated: !1,
			bc: null,
			c: null,
			bm: null,
			m: null,
			bu: null,
			u: null,
			um: null,
			bum: null,
			da: null,
			a: null,
			rtg: null,
			rtc: null,
			ec: null,
			sp: null,
		};
	return (
		(i.ctx = { _: i }), (i.root = e ? e.root : i), (i.emit = ql.bind(null, i)), t.ce && t.ce(i), i
	);
}
let ye = null;
const Uc = () => ye || ve;
let Ur, sr;
{
	const t = po(),
		e = (n, s) => {
			let r;
			return (
				(r = t[n]) || (r = t[n] = []),
				r.push(s),
				(i) => {
					r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
				}
			);
		};
	(Ur = e('__VUE_INSTANCE_SETTERS__', (n) => (ye = n))),
		(sr = e('__VUE_SSR_SETTERS__', (n) => (ws = n)));
}
const bt = (t) => {
		Ur(t), t.scope.on();
	},
	_t = () => {
		ye && ye.scope.off(), Ur(null);
	};
function da(t) {
	return t.vnode.shapeFlag & 4;
}
let ws = !1;
function Mc(t, e = !1) {
	e && sr(e);
	const { props: n, children: s } = t.vnode,
		r = da(t);
	wc(t, n, r, e), Sc(t, s);
	const i = r ? Fc(t, e) : void 0;
	return e && sr(!1), i;
}
function Fc(t, e) {
	const n = t.type;
	(t.accessCache = Object.create(null)), (t.proxy = gs(new Proxy(t.ctx, fc)));
	const { setup: s } = n;
	if (s) {
		const r = (t.setupContext = s.length > 1 ? Hc(t) : null);
		bt(t), qt();
		const i = mt(s, t, 0, [t.props, r]);
		if ((Nt(), _t(), vr(i))) {
			if ((i.then(_t, _t), e))
				return i
					.then((o) => {
						rr(t, o, e);
					})
					.catch((o) => {
						Nn(o, t, 0);
					});
			t.asyncDep = i;
		} else rr(t, i, e);
	} else pa(t, e);
}
function rr(t, e, n) {
	V(e)
		? t.type.__ssrInlineRender
			? (t.ssrRender = e)
			: (t.render = e)
		: ae(e) && (t.setupState = Do(e)),
		pa(t, n);
}
let wi;
function pa(t, e, n) {
	const s = t.type;
	if (!t.render) {
		if (!e && wi && !s.render) {
			const r = s.template || Lr(t).template;
			if (r) {
				const { isCustomElement: i, compilerOptions: o } = t.appContext.config,
					{ delimiters: a, compilerOptions: l } = s,
					c = be(be({ isCustomElement: i, delimiters: a }, o), l);
				s.render = wi(r, c);
			}
		}
		t.render = s.render || $e;
	}
	{
		bt(t), qt();
		try {
			dc(t);
		} finally {
			Nt(), _t();
		}
	}
}
function Bc(t) {
	return (
		t.attrsProxy ||
		(t.attrsProxy = new Proxy(t.attrs, {
			get(e, n) {
				return Pe(t, 'get', '$attrs'), e[n];
			},
		}))
	);
}
function Hc(t) {
	const e = (n) => {
		t.exposed = n || {};
	};
	return {
		get attrs() {
			return Bc(t);
		},
		slots: t.slots,
		emit: t.emit,
		expose: e,
	};
}
function ks(t) {
	if (t.exposed)
		return (
			t.exposeProxy ||
			(t.exposeProxy = new Proxy(Do(gs(t.exposed)), {
				get(e, n) {
					if (n in e) return e[n];
					if (n in bn) return bn[n](t);
				},
				has(e, n) {
					return n in e || n in bn;
				},
			}))
		);
}
function Vc(t, e = !0) {
	return V(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function Kc(t) {
	return V(t) && '__vccOpts' in t;
}
const Ne = (t, e) => Tl(t, e, ws);
function ga(t, e, n) {
	const s = arguments.length;
	return s === 2
		? ae(e) && !F(e)
			? In(e)
				? he(t, null, [e])
				: he(t, e)
			: he(t, null, e)
		: (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && In(n) && (n = [n]),
			he(t, e, n));
}
const Wc = '3.4.5',
	Gc = 'http://www.w3.org/2000/svg',
	zc = 'http://www.w3.org/1998/Math/MathML',
	lt = typeof document < 'u' ? document : null,
	ki = lt && lt.createElement('template'),
	Jc = {
		insert: (t, e, n) => {
			e.insertBefore(t, n || null);
		},
		remove: (t) => {
			const e = t.parentNode;
			e && e.removeChild(t);
		},
		createElement: (t, e, n, s) => {
			const r =
				e === 'svg'
					? lt.createElementNS(Gc, t)
					: e === 'mathml'
						? lt.createElementNS(zc, t)
						: lt.createElement(t, n ? { is: n } : void 0);
			return t === 'select' && s && s.multiple != null && r.setAttribute('multiple', s.multiple), r;
		},
		createText: (t) => lt.createTextNode(t),
		createComment: (t) => lt.createComment(t),
		setText: (t, e) => {
			t.nodeValue = e;
		},
		setElementText: (t, e) => {
			t.textContent = e;
		},
		parentNode: (t) => t.parentNode,
		nextSibling: (t) => t.nextSibling,
		querySelector: (t) => lt.querySelector(t),
		setScopeId(t, e) {
			t.setAttribute(e, '');
		},
		insertStaticContent(t, e, n, s, r, i) {
			const o = n ? n.previousSibling : e.lastChild;
			if (r && (r === i || r.nextSibling))
				for (; e.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); );
			else {
				ki.innerHTML = s === 'svg' ? `<svg>${t}</svg>` : s === 'mathml' ? `<math>${t}</math>` : t;
				const a = ki.content;
				if (s === 'svg' || s === 'mathml') {
					const l = a.firstChild;
					for (; l.firstChild; ) a.appendChild(l.firstChild);
					a.removeChild(l);
				}
				e.insertBefore(a, n);
			}
			return [o ? o.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild];
		},
	},
	Yc = Symbol('_vtc');
function Qc(t, e, n) {
	const s = t[Yc];
	s && (e = (e ? [e, ...s] : [...s]).join(' ')),
		e == null ? t.removeAttribute('class') : n ? t.setAttribute('class', e) : (t.className = e);
}
const Mr = Symbol('_vod'),
	Qd = {
		beforeMount(t, { value: e }, { transition: n }) {
			(t[Mr] = t.style.display === 'none' ? '' : t.style.display),
				n && e ? n.beforeEnter(t) : pn(t, e);
		},
		mounted(t, { value: e }, { transition: n }) {
			n && e && n.enter(t);
		},
		updated(t, { value: e, oldValue: n }, { transition: s }) {
			!e != !n &&
				(s
					? e
						? (s.beforeEnter(t), pn(t, !0), s.enter(t))
						: s.leave(t, () => {
								pn(t, !1);
							})
					: pn(t, e));
		},
		beforeUnmount(t, { value: e }) {
			pn(t, e);
		},
	};
function pn(t, e) {
	t.style.display = e ? t[Mr] : 'none';
}
const Xc = Symbol('');
function Zc(t, e, n) {
	const s = t.style,
		r = fe(n);
	if (n && !r) {
		if (e && !fe(e)) for (const i in e) n[i] == null && ir(s, i, '');
		for (const i in n) ir(s, i, n[i]);
	} else {
		const i = s.display;
		if (r) {
			if (e !== n) {
				const o = s[Xc];
				o && (n += ';' + o), (s.cssText = n);
			}
		} else e && t.removeAttribute('style');
		Mr in t && (s.display = i);
	}
}
const Ei = /\s*!important$/;
function ir(t, e, n) {
	if (F(n)) n.forEach((s) => ir(t, e, s));
	else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n);
	else {
		const s = eu(t, e);
		Ei.test(n) ? t.setProperty(Lt(s), n.replace(Ei, ''), 'important') : (t[s] = n);
	}
}
const Si = ['Webkit', 'Moz', 'ms'],
	$s = {};
function eu(t, e) {
	const n = $s[e];
	if (n) return n;
	let s = Ye(e);
	if (s !== 'filter' && s in t) return ($s[e] = s);
	s = fs(s);
	for (let r = 0; r < Si.length; r++) {
		const i = Si[r] + s;
		if (i in t) return ($s[e] = i);
	}
	return e;
}
const Ti = 'http://www.w3.org/1999/xlink';
function tu(t, e, n, s, r) {
	if (s && e.startsWith('xlink:'))
		n == null ? t.removeAttributeNS(Ti, e.slice(6, e.length)) : t.setAttributeNS(Ti, e, n);
	else {
		const i = tl(e);
		n == null || (i && !go(n)) ? t.removeAttribute(e) : t.setAttribute(e, i ? '' : n);
	}
}
function nu(t, e, n, s, r, i, o) {
	if (e === 'innerHTML' || e === 'textContent') {
		s && o(s, r, i), (t[e] = n ?? '');
		return;
	}
	const a = t.tagName;
	if (e === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
		t._value = n;
		const c = a === 'OPTION' ? t.getAttribute('value') : t.value,
			u = n ?? '';
		c !== u && (t.value = u), n == null && t.removeAttribute(e);
		return;
	}
	let l = !1;
	if (n === '' || n == null) {
		const c = typeof t[e];
		c === 'boolean'
			? (n = go(n))
			: n == null && c === 'string'
				? ((n = ''), (l = !0))
				: c === 'number' && ((n = 0), (l = !0));
	}
	try {
		t[e] = n;
	} catch {}
	l && t.removeAttribute(e);
}
function At(t, e, n, s) {
	t.addEventListener(e, n, s);
}
function su(t, e, n, s) {
	t.removeEventListener(e, n, s);
}
const Ri = Symbol('_vei');
function ru(t, e, n, s, r = null) {
	const i = t[Ri] || (t[Ri] = {}),
		o = i[e];
	if (s && o) o.value = s;
	else {
		const [a, l] = iu(e);
		if (s) {
			const c = (i[e] = lu(s, r));
			At(t, a, c, l);
		} else o && (su(t, a, o, l), (i[e] = void 0));
	}
}
const Ai = /(?:Once|Passive|Capture)$/;
function iu(t) {
	let e;
	if (Ai.test(t)) {
		e = {};
		let s;
		for (; (s = t.match(Ai)); )
			(t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
	}
	return [t[2] === ':' ? t.slice(3) : Lt(t.slice(2)), e];
}
let js = 0;
const ou = Promise.resolve(),
	au = () => js || (ou.then(() => (js = 0)), (js = Date.now()));
function lu(t, e) {
	const n = (s) => {
		if (!s._vts) s._vts = Date.now();
		else if (s._vts <= n.attached) return;
		He(cu(s, n.value), e, 5, [s]);
	};
	return (n.value = t), (n.attached = au()), n;
}
function cu(t, e) {
	if (F(e)) {
		const n = t.stopImmediatePropagation;
		return (
			(t.stopImmediatePropagation = () => {
				n.call(t), (t._stopped = !0);
			}),
			e.map((s) => (r) => !r._stopped && s && s(r))
		);
	} else return e;
}
const Oi = (t) =>
		t.charCodeAt(0) === 111 &&
		t.charCodeAt(1) === 110 &&
		t.charCodeAt(2) > 96 &&
		t.charCodeAt(2) < 123,
	uu = (t, e, n, s, r, i, o, a, l) => {
		const c = r === 'svg';
		e === 'class'
			? Qc(t, s, c)
			: e === 'style'
				? Zc(t, n, s)
				: cs(e)
					? _r(e) || ru(t, e, n, s, o)
					: (
								e[0] === '.'
									? ((e = e.slice(1)), !0)
									: e[0] === '^'
										? ((e = e.slice(1)), !1)
										: hu(t, e, s, c)
						  )
						? nu(t, e, s, i, o, a, l)
						: (e === 'true-value' ? (t._trueValue = s) : e === 'false-value' && (t._falseValue = s),
							tu(t, e, s, c));
	};
function hu(t, e, n, s) {
	if (s) return !!(e === 'innerHTML' || e === 'textContent' || (e in t && Oi(e) && V(n)));
	if (
		e === 'spellcheck' ||
		e === 'draggable' ||
		e === 'translate' ||
		e === 'form' ||
		(e === 'list' && t.tagName === 'INPUT') ||
		(e === 'type' && t.tagName === 'TEXTAREA')
	)
		return !1;
	if (e === 'width' || e === 'height') {
		const r = t.tagName;
		if (r === 'IMG' || r === 'VIDEO' || r === 'CANVAS' || r === 'SOURCE') return !1;
	}
	return Oi(e) && fe(n) ? !1 : e in t;
}
const as = (t) => {
	const e = t.props['onUpdate:modelValue'] || !1;
	return F(e) ? (n) => Qn(e, n) : e;
};
function fu(t) {
	t.target.composing = !0;
}
function Pi(t) {
	const e = t.target;
	e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
const nn = Symbol('_assign'),
	Xd = {
		created(t, { modifiers: { lazy: e, trim: n, number: s } }, r) {
			t[nn] = as(r);
			const i = s || (r.props && r.props.type === 'number');
			At(t, e ? 'change' : 'input', (o) => {
				if (o.target.composing) return;
				let a = t.value;
				n && (a = a.trim()), i && (a = Vs(a)), t[nn](a);
			}),
				n &&
					At(t, 'change', () => {
						t.value = t.value.trim();
					}),
				e || (At(t, 'compositionstart', fu), At(t, 'compositionend', Pi), At(t, 'change', Pi));
		},
		mounted(t, { value: e }) {
			t.value = e ?? '';
		},
		beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: s, number: r } }, i) {
			if (((t[nn] = as(i)), t.composing)) return;
			const o = r || t.type === 'number' ? Vs(t.value) : t.value,
				a = e ?? '';
			o !== a &&
				((document.activeElement === t &&
					t.type !== 'range' &&
					(n || (s && t.value.trim() === a))) ||
					(t.value = a));
		},
	},
	Zd = {
		deep: !0,
		created(t, e, n) {
			(t[nn] = as(n)),
				At(t, 'change', () => {
					const s = t._modelValue,
						r = du(t),
						i = t.checked,
						o = t[nn];
					if (F(s)) {
						const a = mo(s, r),
							l = a !== -1;
						if (i && !l) o(s.concat(r));
						else if (!i && l) {
							const c = [...s];
							c.splice(a, 1), o(c);
						}
					} else if (us(s)) {
						const a = new Set(s);
						i ? a.add(r) : a.delete(r), o(a);
					} else o(ma(t, i));
				});
		},
		mounted: xi,
		beforeUpdate(t, e, n) {
			(t[nn] = as(n)), xi(t, e, n);
		},
	};
function xi(t, { value: e, oldValue: n }, s) {
	(t._modelValue = e),
		F(e)
			? (t.checked = mo(e, s.props.value) > -1)
			: us(e)
				? (t.checked = e.has(s.props.value))
				: e !== n && (t.checked = ds(e, ma(t, !0)));
}
function du(t) {
	return '_value' in t ? t._value : t.value;
}
function ma(t, e) {
	const n = e ? '_trueValue' : '_falseValue';
	return n in t ? t[n] : e;
}
const pu = ['ctrl', 'shift', 'alt', 'meta'],
	gu = {
		stop: (t) => t.stopPropagation(),
		prevent: (t) => t.preventDefault(),
		self: (t) => t.target !== t.currentTarget,
		ctrl: (t) => !t.ctrlKey,
		shift: (t) => !t.shiftKey,
		alt: (t) => !t.altKey,
		meta: (t) => !t.metaKey,
		left: (t) => 'button' in t && t.button !== 0,
		middle: (t) => 'button' in t && t.button !== 1,
		right: (t) => 'button' in t && t.button !== 2,
		exact: (t, e) => pu.some((n) => t[`${n}Key`] && !e.includes(n)),
	},
	ep = (t, e) => {
		const n = t._withMods || (t._withMods = {}),
			s = e.join('.');
		return (
			n[s] ||
			(n[s] = (r, ...i) => {
				for (let o = 0; o < e.length; o++) {
					const a = gu[e[o]];
					if (a && a(r, e)) return;
				}
				return t(r, ...i);
			})
		);
	},
	mu = {
		esc: 'escape',
		space: ' ',
		up: 'arrow-up',
		left: 'arrow-left',
		right: 'arrow-right',
		down: 'arrow-down',
		delete: 'backspace',
	},
	tp = (t, e) => {
		const n = t._withKeys || (t._withKeys = {}),
			s = e.join('.');
		return (
			n[s] ||
			(n[s] = (r) => {
				if (!('key' in r)) return;
				const i = Lt(r.key);
				if (e.some((o) => o === i || mu[o] === i)) return t(r);
			})
		);
	},
	_u = be({ patchProp: uu }, Jc);
let Ci;
function yu() {
	return Ci || (Ci = Rc(_u));
}
const vu = (...t) => {
	const e = yu().createApp(...t),
		{ mount: n } = e;
	return (
		(e.mount = (s) => {
			const r = wu(s);
			if (!r) return;
			const i = e._component;
			!V(i) && !i.render && !i.template && (i.template = r.innerHTML), (r.innerHTML = '');
			const o = n(r, !1, bu(r));
			return (
				r instanceof Element && (r.removeAttribute('v-cloak'), r.setAttribute('data-v-app', '')), o
			);
		}),
		e
	);
};
function bu(t) {
	if (t instanceof SVGElement) return 'svg';
	if (typeof MathMLElement == 'function' && t instanceof MathMLElement) return 'mathml';
}
function wu(t) {
	return fe(t) ? document.querySelector(t) : t;
}
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const zt = typeof window < 'u';
function ku(t) {
	return t.__esModule || t[Symbol.toStringTag] === 'Module';
}
const re = Object.assign;
function Ls(t, e) {
	const n = {};
	for (const s in e) {
		const r = e[s];
		n[s] = Ke(r) ? r.map(t) : t(r);
	}
	return n;
}
const kn = () => {},
	Ke = Array.isArray,
	Eu = /\/$/,
	Su = (t) => t.replace(Eu, '');
function qs(t, e, n = '/') {
	let s,
		r = {},
		i = '',
		o = '';
	const a = e.indexOf('#');
	let l = e.indexOf('?');
	return (
		a < l && a >= 0 && (l = -1),
		l > -1 && ((s = e.slice(0, l)), (i = e.slice(l + 1, a > -1 ? a : e.length)), (r = t(i))),
		a > -1 && ((s = s || e.slice(0, a)), (o = e.slice(a, e.length))),
		(s = Ou(s ?? e, n)),
		{ fullPath: s + (i && '?') + i + o, path: s, query: r, hash: o }
	);
}
function Tu(t, e) {
	const n = e.query ? t(e.query) : '';
	return e.path + (n && '?') + n + (e.hash || '');
}
function Ii(t, e) {
	return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || '/';
}
function Ru(t, e, n) {
	const s = e.matched.length - 1,
		r = n.matched.length - 1;
	return (
		s > -1 &&
		s === r &&
		cn(e.matched[s], n.matched[r]) &&
		_a(e.params, n.params) &&
		t(e.query) === t(n.query) &&
		e.hash === n.hash
	);
}
function cn(t, e) {
	return (t.aliasOf || t) === (e.aliasOf || e);
}
function _a(t, e) {
	if (Object.keys(t).length !== Object.keys(e).length) return !1;
	for (const n in t) if (!Au(t[n], e[n])) return !1;
	return !0;
}
function Au(t, e) {
	return Ke(t) ? $i(t, e) : Ke(e) ? $i(e, t) : t === e;
}
function $i(t, e) {
	return Ke(e)
		? t.length === e.length && t.every((n, s) => n === e[s])
		: t.length === 1 && t[0] === e;
}
function Ou(t, e) {
	if (t.startsWith('/')) return t;
	if (!t) return e;
	const n = e.split('/'),
		s = t.split('/'),
		r = s[s.length - 1];
	(r === '..' || r === '.') && s.push('');
	let i = n.length - 1,
		o,
		a;
	for (o = 0; o < s.length; o++)
		if (((a = s[o]), a !== '.'))
			if (a === '..') i > 1 && i--;
			else break;
	return n.slice(0, i).join('/') + '/' + s.slice(o - (o === s.length ? 1 : 0)).join('/');
}
var $n;
(function (t) {
	(t.pop = 'pop'), (t.push = 'push');
})($n || ($n = {}));
var En;
(function (t) {
	(t.back = 'back'), (t.forward = 'forward'), (t.unknown = '');
})(En || (En = {}));
function Pu(t) {
	if (!t)
		if (zt) {
			const e = document.querySelector('base');
			(t = (e && e.getAttribute('href')) || '/'), (t = t.replace(/^\w+:\/\/[^\/]+/, ''));
		} else t = '/';
	return t[0] !== '/' && t[0] !== '#' && (t = '/' + t), Su(t);
}
const xu = /^[^#]+#/;
function Cu(t, e) {
	return t.replace(xu, '#') + e;
}
function Iu(t, e) {
	const n = document.documentElement.getBoundingClientRect(),
		s = t.getBoundingClientRect();
	return {
		behavior: e.behavior,
		left: s.left - n.left - (e.left || 0),
		top: s.top - n.top - (e.top || 0),
	};
}
const Es = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function $u(t) {
	let e;
	if ('el' in t) {
		const n = t.el,
			s = typeof n == 'string' && n.startsWith('#'),
			r =
				typeof n == 'string'
					? s
						? document.getElementById(n.slice(1))
						: document.querySelector(n)
					: n;
		if (!r) return;
		e = Iu(r, t);
	} else e = t;
	'scrollBehavior' in document.documentElement.style
		? window.scrollTo(e)
		: window.scrollTo(
				e.left != null ? e.left : window.pageXOffset,
				e.top != null ? e.top : window.pageYOffset
			);
}
function ji(t, e) {
	return (history.state ? history.state.position - e : -1) + t;
}
const or = new Map();
function ju(t, e) {
	or.set(t, e);
}
function Lu(t) {
	const e = or.get(t);
	return or.delete(t), e;
}
let qu = () => location.protocol + '//' + location.host;
function ya(t, e) {
	const { pathname: n, search: s, hash: r } = e,
		i = t.indexOf('#');
	if (i > -1) {
		let a = r.includes(t.slice(i)) ? t.slice(i).length : 1,
			l = r.slice(a);
		return l[0] !== '/' && (l = '/' + l), Ii(l, '');
	}
	return Ii(n, t) + s + r;
}
function Nu(t, e, n, s) {
	let r = [],
		i = [],
		o = null;
	const a = ({ state: f }) => {
		const g = ya(t, location),
			y = n.value,
			b = e.value;
		let S = 0;
		if (f) {
			if (((n.value = g), (e.value = f), o && o === y)) {
				o = null;
				return;
			}
			S = b ? f.position - b.position : 0;
		} else s(g);
		r.forEach((A) => {
			A(n.value, y, {
				delta: S,
				type: $n.pop,
				direction: S ? (S > 0 ? En.forward : En.back) : En.unknown,
			});
		});
	};
	function l() {
		o = n.value;
	}
	function c(f) {
		r.push(f);
		const g = () => {
			const y = r.indexOf(f);
			y > -1 && r.splice(y, 1);
		};
		return i.push(g), g;
	}
	function u() {
		const { history: f } = window;
		f.state && f.replaceState(re({}, f.state, { scroll: Es() }), '');
	}
	function h() {
		for (const f of i) f();
		(i = []),
			window.removeEventListener('popstate', a),
			window.removeEventListener('beforeunload', u);
	}
	return (
		window.addEventListener('popstate', a),
		window.addEventListener('beforeunload', u, { passive: !0 }),
		{ pauseListeners: l, listen: c, destroy: h }
	);
}
function Li(t, e, n, s = !1, r = !1) {
	return {
		back: t,
		current: e,
		forward: n,
		replaced: s,
		position: window.history.length,
		scroll: r ? Es() : null,
	};
}
function Du(t) {
	const { history: e, location: n } = window,
		s = { value: ya(t, n) },
		r = { value: e.state };
	r.value ||
		i(
			s.value,
			{
				back: null,
				current: s.value,
				forward: null,
				position: e.length - 1,
				replaced: !0,
				scroll: null,
			},
			!0
		);
	function i(l, c, u) {
		const h = t.indexOf('#'),
			f = h > -1 ? (n.host && document.querySelector('base') ? t : t.slice(h)) + l : qu() + t + l;
		try {
			e[u ? 'replaceState' : 'pushState'](c, '', f), (r.value = c);
		} catch (g) {
			console.error(g), n[u ? 'replace' : 'assign'](f);
		}
	}
	function o(l, c) {
		const u = re({}, e.state, Li(r.value.back, l, r.value.forward, !0), c, {
			position: r.value.position,
		});
		i(l, u, !0), (s.value = l);
	}
	function a(l, c) {
		const u = re({}, r.value, e.state, { forward: l, scroll: Es() });
		i(u.current, u, !0);
		const h = re({}, Li(s.value, l, null), { position: u.position + 1 }, c);
		i(l, h, !1), (s.value = l);
	}
	return { location: s, state: r, push: a, replace: o };
}
function Uu(t) {
	t = Pu(t);
	const e = Du(t),
		n = Nu(t, e.state, e.location, e.replace);
	function s(i, o = !0) {
		o || n.pauseListeners(), history.go(i);
	}
	const r = re({ location: '', base: t, go: s, createHref: Cu.bind(null, t) }, e, n);
	return (
		Object.defineProperty(r, 'location', { enumerable: !0, get: () => e.location.value }),
		Object.defineProperty(r, 'state', { enumerable: !0, get: () => e.state.value }),
		r
	);
}
function Mu(t) {
	return (
		(t = location.host ? t || location.pathname + location.search : ''),
		t.includes('#') || (t += '#'),
		Uu(t)
	);
}
function Fu(t) {
	return typeof t == 'string' || (t && typeof t == 'object');
}
function va(t) {
	return typeof t == 'string' || typeof t == 'symbol';
}
const it = {
		path: '/',
		name: void 0,
		params: {},
		query: {},
		hash: '',
		fullPath: '/',
		matched: [],
		meta: {},
		redirectedFrom: void 0,
	},
	ba = Symbol('');
var qi;
(function (t) {
	(t[(t.aborted = 4)] = 'aborted'),
		(t[(t.cancelled = 8)] = 'cancelled'),
		(t[(t.duplicated = 16)] = 'duplicated');
})(qi || (qi = {}));
function un(t, e) {
	return re(new Error(), { type: t, [ba]: !0 }, e);
}
function Ze(t, e) {
	return t instanceof Error && ba in t && (e == null || !!(t.type & e));
}
const Ni = '[^/]+?',
	Bu = { sensitive: !1, strict: !1, start: !0, end: !0 },
	Hu = /[.+*?^${}()[\]/\\]/g;
function Vu(t, e) {
	const n = re({}, Bu, e),
		s = [];
	let r = n.start ? '^' : '';
	const i = [];
	for (const c of t) {
		const u = c.length ? [] : [90];
		n.strict && !c.length && (r += '/');
		for (let h = 0; h < c.length; h++) {
			const f = c[h];
			let g = 40 + (n.sensitive ? 0.25 : 0);
			if (f.type === 0) h || (r += '/'), (r += f.value.replace(Hu, '\\$&')), (g += 40);
			else if (f.type === 1) {
				const { value: y, repeatable: b, optional: S, regexp: A } = f;
				i.push({ name: y, repeatable: b, optional: S });
				const $ = A || Ni;
				if ($ !== Ni) {
					g += 10;
					try {
						new RegExp(`(${$})`);
					} catch (R) {
						throw new Error(`Invalid custom RegExp for param "${y}" (${$}): ` + R.message);
					}
				}
				let L = b ? `((?:${$})(?:/(?:${$}))*)` : `(${$})`;
				h || (L = S && c.length < 2 ? `(?:/${L})` : '/' + L),
					S && (L += '?'),
					(r += L),
					(g += 20),
					S && (g += -8),
					b && (g += -20),
					$ === '.*' && (g += -50);
			}
			u.push(g);
		}
		s.push(u);
	}
	if (n.strict && n.end) {
		const c = s.length - 1;
		s[c][s[c].length - 1] += 0.7000000000000001;
	}
	n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)');
	const o = new RegExp(r, n.sensitive ? '' : 'i');
	function a(c) {
		const u = c.match(o),
			h = {};
		if (!u) return null;
		for (let f = 1; f < u.length; f++) {
			const g = u[f] || '',
				y = i[f - 1];
			h[y.name] = g && y.repeatable ? g.split('/') : g;
		}
		return h;
	}
	function l(c) {
		let u = '',
			h = !1;
		for (const f of t) {
			(!h || !u.endsWith('/')) && (u += '/'), (h = !1);
			for (const g of f)
				if (g.type === 0) u += g.value;
				else if (g.type === 1) {
					const { value: y, repeatable: b, optional: S } = g,
						A = y in c ? c[y] : '';
					if (Ke(A) && !b)
						throw new Error(
							`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`
						);
					const $ = Ke(A) ? A.join('/') : A;
					if (!$)
						if (S) f.length < 2 && (u.endsWith('/') ? (u = u.slice(0, -1)) : (h = !0));
						else throw new Error(`Missing required param "${y}"`);
					u += $;
				}
		}
		return u || '/';
	}
	return { re: o, score: s, keys: i, parse: a, stringify: l };
}
function Ku(t, e) {
	let n = 0;
	for (; n < t.length && n < e.length; ) {
		const s = e[n] - t[n];
		if (s) return s;
		n++;
	}
	return t.length < e.length
		? t.length === 1 && t[0] === 40 + 40
			? -1
			: 1
		: t.length > e.length
			? e.length === 1 && e[0] === 40 + 40
				? 1
				: -1
			: 0;
}
function Wu(t, e) {
	let n = 0;
	const s = t.score,
		r = e.score;
	for (; n < s.length && n < r.length; ) {
		const i = Ku(s[n], r[n]);
		if (i) return i;
		n++;
	}
	if (Math.abs(r.length - s.length) === 1) {
		if (Di(s)) return 1;
		if (Di(r)) return -1;
	}
	return r.length - s.length;
}
function Di(t) {
	const e = t[t.length - 1];
	return t.length > 0 && e[e.length - 1] < 0;
}
const Gu = { type: 0, value: '' },
	zu = /[a-zA-Z0-9_]/;
function Ju(t) {
	if (!t) return [[]];
	if (t === '/') return [[Gu]];
	if (!t.startsWith('/')) throw new Error(`Invalid path "${t}"`);
	function e(g) {
		throw new Error(`ERR (${n})/"${c}": ${g}`);
	}
	let n = 0,
		s = n;
	const r = [];
	let i;
	function o() {
		i && r.push(i), (i = []);
	}
	let a = 0,
		l,
		c = '',
		u = '';
	function h() {
		c &&
			(n === 0
				? i.push({ type: 0, value: c })
				: n === 1 || n === 2 || n === 3
					? (i.length > 1 &&
							(l === '*' || l === '+') &&
							e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
						i.push({
							type: 1,
							value: c,
							regexp: u,
							repeatable: l === '*' || l === '+',
							optional: l === '*' || l === '?',
						}))
					: e('Invalid state to consume buffer'),
			(c = ''));
	}
	function f() {
		c += l;
	}
	for (; a < t.length; ) {
		if (((l = t[a++]), l === '\\' && n !== 2)) {
			(s = n), (n = 4);
			continue;
		}
		switch (n) {
			case 0:
				l === '/' ? (c && h(), o()) : l === ':' ? (h(), (n = 1)) : f();
				break;
			case 4:
				f(), (n = s);
				break;
			case 1:
				l === '('
					? (n = 2)
					: zu.test(l)
						? f()
						: (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--);
				break;
			case 2:
				l === ')' ? (u[u.length - 1] == '\\' ? (u = u.slice(0, -1) + l) : (n = 3)) : (u += l);
				break;
			case 3:
				h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && a--, (u = '');
				break;
			default:
				e('Unknown state');
				break;
		}
	}
	return n === 2 && e(`Unfinished custom RegExp for param "${c}"`), h(), o(), r;
}
function Yu(t, e, n) {
	const s = Vu(Ju(t.path), n),
		r = re(s, { record: t, parent: e, children: [], alias: [] });
	return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function Qu(t, e) {
	const n = [],
		s = new Map();
	e = Fi({ strict: !1, end: !0, sensitive: !1 }, e);
	function r(u) {
		return s.get(u);
	}
	function i(u, h, f) {
		const g = !f,
			y = Xu(u);
		y.aliasOf = f && f.record;
		const b = Fi(e, u),
			S = [y];
		if ('alias' in u) {
			const L = typeof u.alias == 'string' ? [u.alias] : u.alias;
			for (const R of L)
				S.push(
					re({}, y, {
						components: f ? f.record.components : y.components,
						path: R,
						aliasOf: f ? f.record : y,
					})
				);
		}
		let A, $;
		for (const L of S) {
			const { path: R } = L;
			if (h && R[0] !== '/') {
				const j = h.record.path,
					D = j[j.length - 1] === '/' ? '' : '/';
				L.path = h.record.path + (R && D + R);
			}
			if (
				((A = Yu(L, h, b)),
				f
					? f.alias.push(A)
					: (($ = $ || A), $ !== A && $.alias.push(A), g && u.name && !Mi(A) && o(u.name)),
				y.children)
			) {
				const j = y.children;
				for (let D = 0; D < j.length; D++) i(j[D], A, f && f.children[D]);
			}
			(f = f || A),
				((A.record.components && Object.keys(A.record.components).length) ||
					A.record.name ||
					A.record.redirect) &&
					l(A);
		}
		return $
			? () => {
					o($);
				}
			: kn;
	}
	function o(u) {
		if (va(u)) {
			const h = s.get(u);
			h && (s.delete(u), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o));
		} else {
			const h = n.indexOf(u);
			h > -1 &&
				(n.splice(h, 1),
				u.record.name && s.delete(u.record.name),
				u.children.forEach(o),
				u.alias.forEach(o));
		}
	}
	function a() {
		return n;
	}
	function l(u) {
		let h = 0;
		for (
			;
			h < n.length && Wu(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !wa(u, n[h]));

		)
			h++;
		n.splice(h, 0, u), u.record.name && !Mi(u) && s.set(u.record.name, u);
	}
	function c(u, h) {
		let f,
			g = {},
			y,
			b;
		if ('name' in u && u.name) {
			if (((f = s.get(u.name)), !f)) throw un(1, { location: u });
			(b = f.record.name),
				(g = re(
					Ui(
						h.params,
						f.keys.filter(($) => !$.optional).map(($) => $.name)
					),
					u.params &&
						Ui(
							u.params,
							f.keys.map(($) => $.name)
						)
				)),
				(y = f.stringify(g));
		} else if ('path' in u)
			(y = u.path), (f = n.find(($) => $.re.test(y))), f && ((g = f.parse(y)), (b = f.record.name));
		else {
			if (((f = h.name ? s.get(h.name) : n.find(($) => $.re.test(h.path))), !f))
				throw un(1, { location: u, currentLocation: h });
			(b = f.record.name), (g = re({}, h.params, u.params)), (y = f.stringify(g));
		}
		const S = [];
		let A = f;
		for (; A; ) S.unshift(A.record), (A = A.parent);
		return { name: b, path: y, params: g, matched: S, meta: eh(S) };
	}
	return (
		t.forEach((u) => i(u)),
		{ addRoute: i, resolve: c, removeRoute: o, getRoutes: a, getRecordMatcher: r }
	);
}
function Ui(t, e) {
	const n = {};
	for (const s of e) s in t && (n[s] = t[s]);
	return n;
}
function Xu(t) {
	return {
		path: t.path,
		redirect: t.redirect,
		name: t.name,
		meta: t.meta || {},
		aliasOf: void 0,
		beforeEnter: t.beforeEnter,
		props: Zu(t),
		children: t.children || [],
		instances: {},
		leaveGuards: new Set(),
		updateGuards: new Set(),
		enterCallbacks: {},
		components: 'components' in t ? t.components || null : t.component && { default: t.component },
	};
}
function Zu(t) {
	const e = {},
		n = t.props || !1;
	if ('component' in t) e.default = n;
	else for (const s in t.components) e[s] = typeof n == 'object' ? n[s] : n;
	return e;
}
function Mi(t) {
	for (; t; ) {
		if (t.record.aliasOf) return !0;
		t = t.parent;
	}
	return !1;
}
function eh(t) {
	return t.reduce((e, n) => re(e, n.meta), {});
}
function Fi(t, e) {
	const n = {};
	for (const s in t) n[s] = s in e ? e[s] : t[s];
	return n;
}
function wa(t, e) {
	return e.children.some((n) => n === t || wa(t, n));
}
const ka = /#/g,
	th = /&/g,
	nh = /\//g,
	sh = /=/g,
	rh = /\?/g,
	Ea = /\+/g,
	ih = /%5B/g,
	oh = /%5D/g,
	Sa = /%5E/g,
	ah = /%60/g,
	Ta = /%7B/g,
	lh = /%7C/g,
	Ra = /%7D/g,
	ch = /%20/g;
function Fr(t) {
	return encodeURI('' + t)
		.replace(lh, '|')
		.replace(ih, '[')
		.replace(oh, ']');
}
function uh(t) {
	return Fr(t).replace(Ta, '{').replace(Ra, '}').replace(Sa, '^');
}
function ar(t) {
	return Fr(t)
		.replace(Ea, '%2B')
		.replace(ch, '+')
		.replace(ka, '%23')
		.replace(th, '%26')
		.replace(ah, '`')
		.replace(Ta, '{')
		.replace(Ra, '}')
		.replace(Sa, '^');
}
function hh(t) {
	return ar(t).replace(sh, '%3D');
}
function fh(t) {
	return Fr(t).replace(ka, '%23').replace(rh, '%3F');
}
function dh(t) {
	return t == null ? '' : fh(t).replace(nh, '%2F');
}
function ls(t) {
	try {
		return decodeURIComponent('' + t);
	} catch {}
	return '' + t;
}
function ph(t) {
	const e = {};
	if (t === '' || t === '?') return e;
	const s = (t[0] === '?' ? t.slice(1) : t).split('&');
	for (let r = 0; r < s.length; ++r) {
		const i = s[r].replace(Ea, ' '),
			o = i.indexOf('='),
			a = ls(o < 0 ? i : i.slice(0, o)),
			l = o < 0 ? null : ls(i.slice(o + 1));
		if (a in e) {
			let c = e[a];
			Ke(c) || (c = e[a] = [c]), c.push(l);
		} else e[a] = l;
	}
	return e;
}
function Bi(t) {
	let e = '';
	for (let n in t) {
		const s = t[n];
		if (((n = hh(n)), s == null)) {
			s !== void 0 && (e += (e.length ? '&' : '') + n);
			continue;
		}
		(Ke(s) ? s.map((i) => i && ar(i)) : [s && ar(s)]).forEach((i) => {
			i !== void 0 && ((e += (e.length ? '&' : '') + n), i != null && (e += '=' + i));
		});
	}
	return e;
}
function gh(t) {
	const e = {};
	for (const n in t) {
		const s = t[n];
		s !== void 0 &&
			(e[n] = Ke(s) ? s.map((r) => (r == null ? null : '' + r)) : s == null ? s : '' + s);
	}
	return e;
}
const mh = Symbol(''),
	Hi = Symbol(''),
	Ss = Symbol(''),
	Aa = Symbol(''),
	lr = Symbol('');
function gn() {
	let t = [];
	function e(s) {
		return (
			t.push(s),
			() => {
				const r = t.indexOf(s);
				r > -1 && t.splice(r, 1);
			}
		);
	}
	function n() {
		t = [];
	}
	return { add: e, list: () => t.slice(), reset: n };
}
function ct(t, e, n, s, r) {
	const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
	return () =>
		new Promise((o, a) => {
			const l = (h) => {
					h === !1
						? a(un(4, { from: n, to: e }))
						: h instanceof Error
							? a(h)
							: Fu(h)
								? a(un(2, { from: e, to: h }))
								: (i && s.enterCallbacks[r] === i && typeof h == 'function' && i.push(h), o());
				},
				c = t.call(s && s.instances[r], e, n, l);
			let u = Promise.resolve(c);
			t.length < 3 && (u = u.then(l)), u.catch((h) => a(h));
		});
}
function Ns(t, e, n, s) {
	const r = [];
	for (const i of t)
		for (const o in i.components) {
			let a = i.components[o];
			if (!(e !== 'beforeRouteEnter' && !i.instances[o]))
				if (_h(a)) {
					const c = (a.__vccOpts || a)[e];
					c && r.push(ct(c, n, s, i, o));
				} else {
					let l = a();
					r.push(() =>
						l.then((c) => {
							if (!c)
								return Promise.reject(
									new Error(`Couldn't resolve component "${o}" at "${i.path}"`)
								);
							const u = ku(c) ? c.default : c;
							i.components[o] = u;
							const f = (u.__vccOpts || u)[e];
							return f && ct(f, n, s, i, o)();
						})
					);
				}
		}
	return r;
}
function _h(t) {
	return typeof t == 'object' || 'displayName' in t || 'props' in t || '__vccOpts' in t;
}
function Vi(t) {
	const e = Ve(Ss),
		n = Ve(Aa),
		s = Ne(() => e.resolve(Re(t.to))),
		r = Ne(() => {
			const { matched: l } = s.value,
				{ length: c } = l,
				u = l[c - 1],
				h = n.matched;
			if (!u || !h.length) return -1;
			const f = h.findIndex(cn.bind(null, u));
			if (f > -1) return f;
			const g = Ki(l[c - 2]);
			return c > 1 && Ki(u) === g && h[h.length - 1].path !== g
				? h.findIndex(cn.bind(null, l[c - 2]))
				: f;
		}),
		i = Ne(() => r.value > -1 && wh(n.params, s.value.params)),
		o = Ne(() => r.value > -1 && r.value === n.matched.length - 1 && _a(n.params, s.value.params));
	function a(l = {}) {
		return bh(l) ? e[Re(t.replace) ? 'replace' : 'push'](Re(t.to)).catch(kn) : Promise.resolve();
	}
	return { route: s, href: Ne(() => s.value.href), isActive: i, isExactActive: o, navigate: a };
}
const yh = Jo({
		name: 'RouterLink',
		compatConfig: { MODE: 3 },
		props: {
			to: { type: [String, Object], required: !0 },
			replace: Boolean,
			activeClass: String,
			exactActiveClass: String,
			custom: Boolean,
			ariaCurrentValue: { type: String, default: 'page' },
		},
		useLink: Vi,
		setup(t, { slots: e }) {
			const n = qn(Vi(t)),
				{ options: s } = Ve(Ss),
				r = Ne(() => ({
					[Wi(t.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
					[Wi(t.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
						n.isExactActive,
				}));
			return () => {
				const i = e.default && e.default(n);
				return t.custom
					? i
					: ga(
							'a',
							{
								'aria-current': n.isExactActive ? t.ariaCurrentValue : null,
								href: n.href,
								onClick: n.navigate,
								class: r.value,
							},
							i
						);
			};
		},
	}),
	vh = yh;
function bh(t) {
	if (
		!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
		!t.defaultPrevented &&
		!(t.button !== void 0 && t.button !== 0)
	) {
		if (t.currentTarget && t.currentTarget.getAttribute) {
			const e = t.currentTarget.getAttribute('target');
			if (/\b_blank\b/i.test(e)) return;
		}
		return t.preventDefault && t.preventDefault(), !0;
	}
}
function wh(t, e) {
	for (const n in e) {
		const s = e[n],
			r = t[n];
		if (typeof s == 'string') {
			if (s !== r) return !1;
		} else if (!Ke(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1;
	}
	return !0;
}
function Ki(t) {
	return t ? (t.aliasOf ? t.aliasOf.path : t.path) : '';
}
const Wi = (t, e, n) => t ?? e ?? n,
	kh = Jo({
		name: 'RouterView',
		inheritAttrs: !1,
		props: { name: { type: String, default: 'default' }, route: Object },
		compatConfig: { MODE: 3 },
		setup(t, { attrs: e, slots: n }) {
			const s = Ve(lr),
				r = Ne(() => t.route || s.value),
				i = Ve(Hi, 0),
				o = Ne(() => {
					let c = Re(i);
					const { matched: u } = r.value;
					let h;
					for (; (h = u[c]) && !h.components; ) c++;
					return c;
				}),
				a = Ne(() => r.value.matched[o.value]);
			Xn(
				Hi,
				Ne(() => o.value + 1)
			),
				Xn(mh, a),
				Xn(lr, r);
			const l = on();
			return (
				tn(
					() => [l.value, a.value, t.name],
					([c, u, h], [f, g, y]) => {
						u &&
							((u.instances[h] = c),
							g &&
								g !== u &&
								c &&
								c === f &&
								(u.leaveGuards.size || (u.leaveGuards = g.leaveGuards),
								u.updateGuards.size || (u.updateGuards = g.updateGuards))),
							c && u && (!g || !cn(u, g) || !f) && (u.enterCallbacks[h] || []).forEach((b) => b(c));
					},
					{ flush: 'post' }
				),
				() => {
					const c = r.value,
						u = t.name,
						h = a.value,
						f = h && h.components[u];
					if (!f) return Gi(n.default, { Component: f, route: c });
					const g = h.props[u],
						y = g ? (g === !0 ? c.params : typeof g == 'function' ? g(c) : g) : null,
						S = ga(
							f,
							re({}, y, e, {
								onVnodeUnmounted: (A) => {
									A.component.isUnmounted && (h.instances[u] = null);
								},
								ref: l,
							})
						);
					return Gi(n.default, { Component: S, route: c }) || S;
				}
			);
		},
	});
function Gi(t, e) {
	if (!t) return null;
	const n = t(e);
	return n.length === 1 ? n[0] : n;
}
const Eh = kh;
function Sh(t) {
	const e = Qu(t.routes, t),
		n = t.parseQuery || ph,
		s = t.stringifyQuery || Bi,
		r = t.history,
		i = gn(),
		o = gn(),
		a = gn(),
		l = Rl(it);
	let c = it;
	zt &&
		t.scrollBehavior &&
		'scrollRestoration' in history &&
		(history.scrollRestoration = 'manual');
	const u = Ls.bind(null, (v) => '' + v),
		h = Ls.bind(null, dh),
		f = Ls.bind(null, ls);
	function g(v, I) {
		let P, q;
		return va(v) ? ((P = e.getRecordMatcher(v)), (q = I)) : (q = v), e.addRoute(q, P);
	}
	function y(v) {
		const I = e.getRecordMatcher(v);
		I && e.removeRoute(I);
	}
	function b() {
		return e.getRoutes().map((v) => v.record);
	}
	function S(v) {
		return !!e.getRecordMatcher(v);
	}
	function A(v, I) {
		if (((I = re({}, I || l.value)), typeof v == 'string')) {
			const m = qs(n, v, I.path),
				_ = e.resolve({ path: m.path }, I),
				w = r.createHref(m.fullPath);
			return re(m, _, { params: f(_.params), hash: ls(m.hash), redirectedFrom: void 0, href: w });
		}
		let P;
		if ('path' in v) P = re({}, v, { path: qs(n, v.path, I.path).path });
		else {
			const m = re({}, v.params);
			for (const _ in m) m[_] == null && delete m[_];
			(P = re({}, v, { params: h(m) })), (I.params = h(I.params));
		}
		const q = e.resolve(P, I),
			ee = v.hash || '';
		q.params = u(f(q.params));
		const d = Tu(s, re({}, v, { hash: uh(ee), path: q.path })),
			p = r.createHref(d);
		return re({ fullPath: d, hash: ee, query: s === Bi ? gh(v.query) : v.query || {} }, q, {
			redirectedFrom: void 0,
			href: p,
		});
	}
	function $(v) {
		return typeof v == 'string' ? qs(n, v, l.value.path) : re({}, v);
	}
	function L(v, I) {
		if (c !== v) return un(8, { from: I, to: v });
	}
	function R(v) {
		return Q(v);
	}
	function j(v) {
		return R(re($(v), { replace: !0 }));
	}
	function D(v) {
		const I = v.matched[v.matched.length - 1];
		if (I && I.redirect) {
			const { redirect: P } = I;
			let q = typeof P == 'function' ? P(v) : P;
			return (
				typeof q == 'string' &&
					((q = q.includes('?') || q.includes('#') ? (q = $(q)) : { path: q }), (q.params = {})),
				re({ query: v.query, hash: v.hash, params: 'path' in q ? {} : v.params }, q)
			);
		}
	}
	function Q(v, I) {
		const P = (c = A(v)),
			q = l.value,
			ee = v.state,
			d = v.force,
			p = v.replace === !0,
			m = D(P);
		if (m)
			return Q(
				re($(m), { state: typeof m == 'object' ? re({}, ee, m.state) : ee, force: d, replace: p }),
				I || P
			);
		const _ = P;
		_.redirectedFrom = I;
		let w;
		return (
			!d && Ru(s, q, P) && ((w = un(16, { to: _, from: q })), We(q, q, !0, !1)),
			(w ? Promise.resolve(w) : ne(_, q))
				.catch((k) => (Ze(k) ? (Ze(k, 2) ? k : st(k)) : Z(k, _, q)))
				.then((k) => {
					if (k) {
						if (Ze(k, 2))
							return Q(
								re({ replace: p }, $(k.to), {
									state: typeof k.to == 'object' ? re({}, ee, k.to.state) : ee,
									force: d,
								}),
								I || _
							);
					} else k = pe(_, q, !0, p, ee);
					return le(_, q, k), k;
				})
		);
	}
	function U(v, I) {
		const P = L(v, I);
		return P ? Promise.reject(P) : Promise.resolve();
	}
	function B(v) {
		const I = Mt.values().next().value;
		return I && typeof I.runWithContext == 'function' ? I.runWithContext(v) : v();
	}
	function ne(v, I) {
		let P;
		const [q, ee, d] = Th(v, I);
		P = Ns(q.reverse(), 'beforeRouteLeave', v, I);
		for (const m of q)
			m.leaveGuards.forEach((_) => {
				P.push(ct(_, v, I));
			});
		const p = U.bind(null, v, I);
		return (
			P.push(p),
			we(P)
				.then(() => {
					P = [];
					for (const m of i.list()) P.push(ct(m, v, I));
					return P.push(p), we(P);
				})
				.then(() => {
					P = Ns(ee, 'beforeRouteUpdate', v, I);
					for (const m of ee)
						m.updateGuards.forEach((_) => {
							P.push(ct(_, v, I));
						});
					return P.push(p), we(P);
				})
				.then(() => {
					P = [];
					for (const m of d)
						if (m.beforeEnter)
							if (Ke(m.beforeEnter)) for (const _ of m.beforeEnter) P.push(ct(_, v, I));
							else P.push(ct(m.beforeEnter, v, I));
					return P.push(p), we(P);
				})
				.then(
					() => (
						v.matched.forEach((m) => (m.enterCallbacks = {})),
						(P = Ns(d, 'beforeRouteEnter', v, I)),
						P.push(p),
						we(P)
					)
				)
				.then(() => {
					P = [];
					for (const m of o.list()) P.push(ct(m, v, I));
					return P.push(p), we(P);
				})
				.catch((m) => (Ze(m, 8) ? m : Promise.reject(m)))
		);
	}
	function le(v, I, P) {
		a.list().forEach((q) => B(() => q(v, I, P)));
	}
	function pe(v, I, P, q, ee) {
		const d = L(v, I);
		if (d) return d;
		const p = I === it,
			m = zt ? history.state : {};
		P &&
			(q || p
				? r.replace(v.fullPath, re({ scroll: p && m && m.scroll }, ee))
				: r.push(v.fullPath, ee)),
			(l.value = v),
			We(v, I, P, p),
			st();
	}
	let ge;
	function je() {
		ge ||
			(ge = r.listen((v, I, P) => {
				if (!Un.listening) return;
				const q = A(v),
					ee = D(q);
				if (ee) {
					Q(re(ee, { replace: !0 }), q).catch(kn);
					return;
				}
				c = q;
				const d = l.value;
				zt && ju(ji(d.fullPath, P.delta), Es()),
					ne(q, d)
						.catch((p) =>
							Ze(p, 12)
								? p
								: Ze(p, 2)
									? (Q(p.to, q)
											.then((m) => {
												Ze(m, 20) && !P.delta && P.type === $n.pop && r.go(-1, !1);
											})
											.catch(kn),
										Promise.reject())
									: (P.delta && r.go(-P.delta, !1), Z(p, q, d))
						)
						.then((p) => {
							(p = p || pe(q, d, !1)),
								p &&
									(P.delta && !Ze(p, 8)
										? r.go(-P.delta, !1)
										: P.type === $n.pop && Ze(p, 20) && r.go(-1, !1)),
								le(q, d, p);
						})
						.catch(kn);
			}));
	}
	let me = gn(),
		G = gn(),
		X;
	function Z(v, I, P) {
		st(v);
		const q = G.list();
		return q.length ? q.forEach((ee) => ee(v, I, P)) : console.error(v), Promise.reject(v);
	}
	function Xe() {
		return X && l.value !== it
			? Promise.resolve()
			: new Promise((v, I) => {
					me.add([v, I]);
				});
	}
	function st(v) {
		return X || ((X = !v), je(), me.list().forEach(([I, P]) => (v ? P(v) : I())), me.reset()), v;
	}
	function We(v, I, P, q) {
		const { scrollBehavior: ee } = t;
		if (!zt || !ee) return Promise.resolve();
		const d =
			(!P && Lu(ji(v.fullPath, 0))) || ((q || !P) && history.state && history.state.scroll) || null;
		return xr()
			.then(() => ee(v, I, d))
			.then((p) => p && $u(p))
			.catch((p) => Z(p, v, I));
	}
	const Ae = (v) => r.go(v);
	let Ut;
	const Mt = new Set(),
		Un = {
			currentRoute: l,
			listening: !0,
			addRoute: g,
			removeRoute: y,
			hasRoute: S,
			getRoutes: b,
			resolve: A,
			options: t,
			push: R,
			replace: j,
			go: Ae,
			back: () => Ae(-1),
			forward: () => Ae(1),
			beforeEach: i.add,
			beforeResolve: o.add,
			afterEach: a.add,
			onError: G.add,
			isReady: Xe,
			install(v) {
				const I = this;
				v.component('RouterLink', vh),
					v.component('RouterView', Eh),
					(v.config.globalProperties.$router = I),
					Object.defineProperty(v.config.globalProperties, '$route', {
						enumerable: !0,
						get: () => Re(l),
					}),
					zt && !Ut && l.value === it && ((Ut = !0), R(r.location).catch((ee) => {}));
				const P = {};
				for (const ee in it)
					Object.defineProperty(P, ee, { get: () => l.value[ee], enumerable: !0 });
				v.provide(Ss, I), v.provide(Aa, Io(P)), v.provide(lr, l);
				const q = v.unmount;
				Mt.add(v),
					(v.unmount = function () {
						Mt.delete(v),
							Mt.size < 1 &&
								((c = it), ge && ge(), (ge = null), (l.value = it), (Ut = !1), (X = !1)),
							q();
					});
			},
		};
	function we(v) {
		return v.reduce((I, P) => I.then(() => B(P)), Promise.resolve());
	}
	return Un;
}
function Th(t, e) {
	const n = [],
		s = [],
		r = [],
		i = Math.max(e.matched.length, t.matched.length);
	for (let o = 0; o < i; o++) {
		const a = e.matched[o];
		a && (t.matched.find((c) => cn(c, a)) ? s.push(a) : n.push(a));
		const l = t.matched[o];
		l && (e.matched.find((c) => cn(c, l)) || r.push(l));
	}
	return [n, s, r];
}
function Rh() {
	return Ve(Ss);
}
var Ah = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Oa;
const Ts = (t) => (Oa = t),
	Pa = Symbol();
function cr(t) {
	return (
		t &&
		typeof t == 'object' &&
		Object.prototype.toString.call(t) === '[object Object]' &&
		typeof t.toJSON != 'function'
	);
}
var Sn;
(function (t) {
	(t.direct = 'direct'), (t.patchObject = 'patch object'), (t.patchFunction = 'patch function');
})(Sn || (Sn = {}));
function Oh() {
	const t = vo(!0),
		e = t.run(() => on({}));
	let n = [],
		s = [];
	const r = gs({
		install(i) {
			Ts(r),
				(r._a = i),
				i.provide(Pa, r),
				(i.config.globalProperties.$pinia = r),
				s.forEach((o) => n.push(o)),
				(s = []);
		},
		use(i) {
			return !this._a && !Ah ? s.push(i) : n.push(i), this;
		},
		_p: n,
		_a: null,
		_e: t,
		_s: new Map(),
		state: e,
	});
	return r;
}
const xa = () => {};
function zi(t, e, n, s = xa) {
	t.push(e);
	const r = () => {
		const i = t.indexOf(e);
		i > -1 && (t.splice(i, 1), s());
	};
	return !n && bo() && rl(r), r;
}
function Bt(t, ...e) {
	t.slice().forEach((n) => {
		n(...e);
	});
}
const Ph = (t) => t();
function ur(t, e) {
	t instanceof Map && e instanceof Map && e.forEach((n, s) => t.set(s, n)),
		t instanceof Set && e instanceof Set && e.forEach(t.add, t);
	for (const n in e) {
		if (!e.hasOwnProperty(n)) continue;
		const s = e[n],
			r = t[n];
		cr(r) && cr(s) && t.hasOwnProperty(n) && !de(s) && !gt(s) ? (t[n] = ur(r, s)) : (t[n] = s);
	}
	return t;
}
const xh = Symbol();
function Ch(t) {
	return !cr(t) || !t.hasOwnProperty(xh);
}
const { assign: ot } = Object;
function Ih(t) {
	return !!(de(t) && t.effect);
}
function $h(t, e, n, s) {
	const { state: r, actions: i, getters: o } = e,
		a = n.state.value[t];
	let l;
	function c() {
		a || (n.state.value[t] = r ? r() : {});
		const u = Pl(n.state.value[t]);
		return ot(
			u,
			i,
			Object.keys(o || {}).reduce(
				(h, f) => (
					(h[f] = gs(
						Ne(() => {
							Ts(n);
							const g = n._s.get(t);
							return o[f].call(g, g);
						})
					)),
					h
				),
				{}
			)
		);
	}
	return (l = Ca(t, c, e, n, s, !0)), l;
}
function Ca(t, e, n = {}, s, r, i) {
	let o;
	const a = ot({ actions: {} }, n),
		l = { deep: !0 };
	let c,
		u,
		h = [],
		f = [],
		g;
	const y = s.state.value[t];
	!i && !y && (s.state.value[t] = {}), on({});
	let b;
	function S(U) {
		let B;
		(c = u = !1),
			typeof U == 'function'
				? (U(s.state.value[t]), (B = { type: Sn.patchFunction, storeId: t, events: g }))
				: (ur(s.state.value[t], U),
					(B = { type: Sn.patchObject, payload: U, storeId: t, events: g }));
		const ne = (b = Symbol());
		xr().then(() => {
			b === ne && (c = !0);
		}),
			(u = !0),
			Bt(h, B, s.state.value[t]);
	}
	const A = i
		? function () {
				const { state: B } = n,
					ne = B ? B() : {};
				this.$patch((le) => {
					ot(le, ne);
				});
			}
		: xa;
	function $() {
		o.stop(), (h = []), (f = []), s._s.delete(t);
	}
	function L(U, B) {
		return function () {
			Ts(s);
			const ne = Array.from(arguments),
				le = [],
				pe = [];
			function ge(G) {
				le.push(G);
			}
			function je(G) {
				pe.push(G);
			}
			Bt(f, { args: ne, name: U, store: j, after: ge, onError: je });
			let me;
			try {
				me = B.apply(this && this.$id === t ? this : j, ne);
			} catch (G) {
				throw (Bt(pe, G), G);
			}
			return me instanceof Promise
				? me.then((G) => (Bt(le, G), G)).catch((G) => (Bt(pe, G), Promise.reject(G)))
				: (Bt(le, me), me);
		};
	}
	const R = {
			_p: s,
			$id: t,
			$onAction: zi.bind(null, f),
			$patch: S,
			$reset: A,
			$subscribe(U, B = {}) {
				const ne = zi(h, U, B.detached, () => le()),
					le = o.run(() =>
						tn(
							() => s.state.value[t],
							(pe) => {
								(B.flush === 'sync' ? u : c) && U({ storeId: t, type: Sn.direct, events: g }, pe);
							},
							ot({}, l, B)
						)
					);
				return ne;
			},
			$dispose: $,
		},
		j = qn(R);
	s._s.set(t, j);
	const Q = ((s._a && s._a.runWithContext) || Ph)(() => s._e.run(() => (o = vo()).run(e)));
	for (const U in Q) {
		const B = Q[U];
		if ((de(B) && !Ih(B)) || gt(B))
			i || (y && Ch(B) && (de(B) ? (B.value = y[U]) : ur(B, y[U])), (s.state.value[t][U] = B));
		else if (typeof B == 'function') {
			const ne = L(U, B);
			(Q[U] = ne), (a.actions[U] = B);
		}
	}
	return (
		ot(j, Q),
		ot(Y(j), Q),
		Object.defineProperty(j, '$state', {
			get: () => s.state.value[t],
			set: (U) => {
				S((B) => {
					ot(B, U);
				});
			},
		}),
		s._p.forEach((U) => {
			ot(
				j,
				o.run(() => U({ store: j, app: s._a, pinia: s, options: a }))
			);
		}),
		y && i && n.hydrate && n.hydrate(j.$state, y),
		(c = !0),
		(u = !0),
		j
	);
}
function jh(t, e, n) {
	let s, r;
	const i = typeof e == 'function';
	typeof t == 'string' ? ((s = t), (r = i ? n : e)) : ((r = t), (s = t.id));
	function o(a, l) {
		const c = bc();
		return (
			(a = a || (c ? Ve(Pa, null) : null)),
			a && Ts(a),
			(a = Oa),
			a._s.has(s) || (i ? Ca(s, e, r, a) : $h(s, r, a)),
			a._s.get(s)
		);
	}
	return (o.$id = s), o;
}
const Lh = 'modulepreload',
	qh = function (t) {
		return '/' + t;
	},
	Ji = {},
	se = function (e, n, s) {
		if (!n || n.length === 0) return e();
		const r = document.getElementsByTagName('link');
		return Promise.all(
			n.map((i) => {
				if (((i = qh(i)), i in Ji)) return;
				Ji[i] = !0;
				const o = i.endsWith('.css'),
					a = o ? '[rel="stylesheet"]' : '';
				if (!!s)
					for (let u = r.length - 1; u >= 0; u--) {
						const h = r[u];
						if (h.href === i && (!o || h.rel === 'stylesheet')) return;
					}
				else if (document.querySelector(`link[href="${i}"]${a}`)) return;
				const c = document.createElement('link');
				if (
					((c.rel = o ? 'stylesheet' : Lh),
					o || ((c.as = 'script'), (c.crossOrigin = '')),
					(c.href = i),
					document.head.appendChild(c),
					o)
				)
					return new Promise((u, h) => {
						c.addEventListener('load', u),
							c.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${i}`)));
					});
			})
		)
			.then(() => e())
			.catch((i) => {
				const o = new Event('vite:preloadError', { cancelable: !0 });
				if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i;
			});
	};
const Ia = (t, e) => {
		const n = t.__vccOpts || t;
		for (const [s, r] of e) n[s] = r;
		return n;
	},
	Nh = (t) => (Vo('data-v-c53bb126'), (t = t()), Ko(), t),
	Dh = { class: 'quote' },
	Uh = Nh(() => te('br', null, null, -1)),
	Mh = {
		__name: 'QuoteCard',
		setup(t) {
			const e = [
					{
						quote: 'There is some good in this world, and it’s worth fighting for.',
						author: 'J.R.R. Tolkien',
						book: 'The Two Towers',
					},
					{
						quote:
							'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
						author: 'Antoine de Saint-Exupéry',
						book: 'The Little Prince',
					},
					{
						quote:
							'I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.',
						author: 'Charlotte Brontë',
						book: 'Jane Eyre',
					},
					{
						quote:
							'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
						author: 'Charles Dickens',
						book: 'A Tale of Two Cities',
					},
					{
						quote: 'Beware; for I am fearless, and therefore powerful.',
						author: 'Mary Shelley',
						book: 'Frankenstein',
					},
					{
						quote:
							'I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It’s when you know you’re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
						author: 'Harper Lee',
						book: 'To Kill a Mockingbird',
					},
					{
						quote:
							'A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well — or ill?',
						author: 'John Steinbeck',
						book: 'East of Eden',
					},
					{
						quote: 'The only way out of the labyrinth of suffering is to forgive.',
						author: 'John Green',
						book: 'Looking for Alaska',
					},
					{
						quote:
							'This above all: To thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.',
						author: 'William Shakespeare',
						book: 'Hamlet',
					},
					{
						quote:
							'‘Why did you do all this for me?’ he asked. ‘I don’t deserve it. I’ve never done anything for you.’ ‘You have been my friend,’ replied Charlotte. ‘That in itself is a tremendous thing.’',
						author: 'E.B. White',
						book: 'Charlotte’s Web',
					},
					{
						quote:
							'I took a deep breath and listened to the old brag of my heart: I am, I am, I am.',
						author: 'Sylvia Plath',
						book: 'The Bell Jar',
					},
					{
						quote: 'Love is or it ain’t. Thin love ain’t love at all.',
						author: 'Toni Morrison',
						book: 'Beloved',
					},
					{
						quote: 'We accept the love we think we deserve.',
						author: 'Stephen Chbosky',
						book: 'The Perks of Being a Wallflower',
					},
					{
						quote:
							'And so we beat on, boats against the current, borne back ceaselessly into the past.',
						author: 'F. Scott Fitzgerald',
						book: 'The Great Gatsby',
					},
					{
						quote:
							'Generally, by the time you are Real, most of your hair has been loved off, and your eyes drop out and you get loose in the joints and very shabby. But these things don’t matter at all, because once you are Real you can’t be ugly, except to people who don’t understand.',
						author: 'Margery Williams',
						book: 'Velveteen Rabbit',
					},
					{
						quote:
							'Ever’body’s askin’ that. ‘What we comin’ to?’ Seems to me we don’t never come to nothin’. Always on the way.',
						author: 'John Steinbeck',
						book: 'The Grapes of Wrath',
					},
					{
						quote: 'Whatever our souls are made of, his and mine are the same.',
						author: 'Emily Brontë',
						book: 'Wuthering Heights',
					},
					{
						quote: 'There are years that ask questions and years that answer.',
						author: 'Zora Neale Hurston',
						book: 'Their Eyes Were Watching God',
					},
					{
						quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
						author: 'Louisa May Alcott',
						book: 'Little Women',
					},
					{
						quote: 'All happy families are alike; each unhappy family is unhappy in its own way.',
						author: 'Leo Tolstoy',
						book: 'Anna Karenina',
					},
					{
						quote: 'Memories warm you up from the inside. But they also tear you apart.',
						author: 'Haruki Murakami',
						book: 'Kafka on the Shore',
					},
					{
						quote: 'It is nothing to die; it is dreadful not to live.',
						author: 'Victor Hugo',
						book: 'Les Misérables',
					},
					{
						quote:
							'Who controls the past controls the future. Who controls the present controls the past.',
						author: 'George Orwell',
						book: 'Nineteen Eighty-Four',
					},
					{
						quote:
							'Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.',
						author: 'Ralph Ellison',
						book: 'Invisible Man',
					},
					{
						quote: 'Last night I dreamt I went to Manderley again.',
						author: 'Daphne du Maurier',
						book: 'Rebecca',
					},
					{
						quote:
							'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
						author: 'Jane Austen',
						book: 'Pride and Prejudice',
					},
					{
						quote:
							'Tomorrow I’ll think of some way to get him back. After all, tomorrow is another day.',
						author: 'Margaret Mitchell',
						book: 'Gone with the Wind',
					},
					{
						quote:
							'Why, sometimes, I’ve believed as many as six impossible things before breakfast.',
						author: 'Lewis Carroll',
						book: 'Through the Looking-Glass',
					},
					{
						quote: 'Don’t ever tell anybody anything. If you do, you start missing everybody.',
						author: 'J. D. Salinger',
						book: 'The Catcher in the Rye',
					},
					{
						quote: 'It does not do to dwell on dreams and forget to live.',
						author: 'J.K. Rowling',
						book: 'Harry Potter and the Sorcerer’s Stone',
					},
					{
						quote:
							'You pierce my soul. I am half agony. Half hope. Tell me not that I am too late, that such precious feelings are gone for ever.',
						author: 'Jane Austen',
						book: 'Persuasion',
					},
					{ quote: 'So it goes…', author: 'Kurt Vonnegut', book: 'Slaughterhouse-Five' },
					{
						quote:
							'I had the epiphany that laughter was light, and light was laughter, and that this was the secret of the universe.',
						author: 'Donna Tartt',
						book: 'The Goldfinch',
					},
					{
						quote: 'There are some things you learn best in calm, and some in storm.',
						author: 'Willa Cather',
						book: 'The Song of the Lark',
					},
					{
						quote: 'When you play the game of thrones you win or you die.',
						author: 'George R. R. Martin',
						book: 'A Game of Thrones',
					},
					{
						quote:
							'The world breaks everyone, and afterward, many are strong at the broken places.',
						author: 'Ernest Hemingway',
						book: 'A Farewell to Arms',
					},
					{
						quote:
							'From that time on, the world was hers for the reading. She would never be lonely again, never miss the lack of intimate friends. Books became her friends and there was one for every mood.',
						author: 'Betty Smith',
						book: 'A Tree Grows in Brooklyn',
					},
					{
						quote:
							'Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.',
						author: 'Nicole Krauss',
						book: 'The History of Love',
					},
					{
						quote:
							'Very few castaways can claim to have survived so long at sea as Mr. Patel, and none in the company of an adult Bengal tiger.',
						author: 'Yann Martel',
						book: 'Life of Pi',
					},
					{
						quote: 'Anyone who ever gave you confidence, you owe them a lot.',
						author: 'Truman Capote',
						book: 'Breakfast at Tiffany’s',
					},
					{
						quote: 'Isn’t it nice to think that tomorrow is a new day with no mistakes in it yet?',
						author: 'L. M. Montgomery',
						book: 'Anne of Green Gables',
					},
					{
						quote:
							'You forget what you want to remember, and you remember what you want to forget.',
						author: 'Cormac McCarthy',
						book: 'The Road',
					},
					{ quote: 'Call me Ishmael.', author: 'Herman Melville', book: 'Moby Dick' },
					{ quote: 'It was a pleasure to burn.', author: 'Ray Bradbury', book: 'Fahrenheit 451' },
					{
						quote: 'The past is not dead. In fact, it’s not even past.',
						author: 'William Faulkner',
						book: 'Requiem for a Nun',
					},
					{
						quote:
							'He has put a knife on the things that held us together and we have fallen apart.',
						author: 'Chinua Achebe',
						book: 'Things Fall Apart',
					},
					{
						quote: '’And now,’ cried Max, ‘let the wild rumpus start!’',
						author: 'Maurice Sendak',
						book: 'Where the Wild Things Are',
					},
					{
						quote:
							'Memories, even your most precious ones, fade surprisingly quickly. But I don’t go along with that. The memories I value most, I don’t ever see them fading.',
						author: 'Kazuo Ishiguro',
						book: 'Never Let Me Go',
					},
					{
						quote: 'Nowadays people know the price of everything and the value of nothing.',
						author: 'Oscar Wilde',
						book: 'The Picture of Dorian Grey',
					},
					{
						quote: 'Time is the longest distance between two places.',
						author: 'Tennessee Williams',
						book: 'The Glass Menagerie',
					},
					{
						quote:
							'The voice of the sea is seductive, never ceasing, whispering, clamoring, murmuring, inviting the soul to wander in abysses of solitude.',
						author: 'Kate Chopin',
						book: 'The Awakening',
					},
					{
						quote: 'We dream in our waking moments, and walk in our sleep.',
						author: 'Nathaniel Hawthorne',
						book: 'The Scarlet Letter',
					},
					{
						quote:
							'The place where you made your stand never mattered. Only that you were there… and still on your feet.',
						author: 'Stephen King',
						book: 'The Stand',
					},
					{
						quote:
							'But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.',
						author: 'William Shakespeare',
						book: 'Romeo and Juliet',
					},
					{
						quote:
							'My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.',
						author: 'Charles Dickens',
						book: 'David Copperfield',
					},
					{
						quote: 'So many things are possible just as long as you don’t know they’re impossible.',
						author: 'Norton Juster',
						book: 'The Phantom Tollbooth',
					},
					{
						quote:
							'I can’t stand it to think my life is going so fast and I’m not really living it.',
						author: 'Ernest Hemingway',
						book: 'The Sun Also Rises',
					},
					{
						quote:
							'There is only one page left to write on. I will fill it with words of only one syllable. I love. I have loved. I will love.',
						author: 'Dodie Smith',
						book: 'I Capture the Castle',
					},
					{
						quote:
							'It doesn’t matter who you are or what you look like, so long as somebody loves you.',
						author: 'Roald Dahl',
						book: 'The Witches',
					},
					{
						quote:
							'The same substance composes us — the tree overhead, the stone beneath us, the bird, the beast, the star — we are all one, all moving to the same end.',
						author: 'P.L. Travers',
						book: 'Mary Poppins',
					},
					{
						quote:
							'I wish, as well as everybody else, to be perfectly happy; but, like everybody else, it must be in my own way.',
						author: 'Jane Austen',
						book: 'Sense and Sensibility',
					},
					{
						quote:
							'Love is holy because it is like grace – the worthiness of its object is never really what matters.',
						author: 'Marilynne Robinson',
						book: 'Gilead',
					},
					{
						quote: 'Each time you happen to me all over again.',
						author: 'Edith Wharton',
						book: 'The Age of Innocence',
					},
					{
						quote:
							'Brave doesn’t mean you’re not scared. It means you go on even though you’re scared.',
						author: 'Angie Thomas',
						book: 'The Hate U Give',
					},
					{
						quote:
							'How easy it was to lie to strangers, to create with strangers the versions of our lives we imagined.',
						author: 'Chimamanda Ngozi Adichie',
						book: 'Americanah',
					},
					{
						quote:
							'And, when you want something, all the universe conspires in helping you to achieve it.',
						author: 'Paulo Coelho',
						book: 'The Alchemist',
					},
					{
						quote:
							'Life, with its rules, its obligations, and its freedoms, is like a sonnet: You’re given the form, but you have to write the sonnet yourself.',
						author: 'Madeleine L’Engle',
						book: 'A Wrinkle in Time',
					},
					{
						quote: 'There is always something left to love.',
						author: 'Gabriel García Márquez',
						book: 'One Hundred Years of Solitude',
					},
					{
						quote:
							'The answer to the ultimate question of life, the universe and everything is 42.',
						author: 'Douglas Adams',
						book: 'The Hitchhiker’s Guide to the Galaxy',
					},
					{
						quote:
							'All the world’s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.',
						author: ' William Shakespeare',
						book: 'As You Like It',
					},
					{
						quote: 'Stay gold, Ponyboy, stay gold.',
						author: 'S. E. Hinton',
						book: 'The Outsiders',
					},
					{
						quote:
							'Sometimes I can hear my bones straining under the weight of all the lives I’m not living.',
						author: 'Jonathan Safran Foer',
						book: 'Extremely Loud and Incredibly Close',
					},
					{
						quote:
							'Do I love you? My God, if your love were a grain of sand, mine would be a universe of beaches.',
						author: 'William Goldman',
						book: 'The Princess Bride',
					},
					{
						quote: 'Time moves slowly, but passes quickly.',
						author: 'Alice Walker',
						book: 'The Color Purple',
					},
					{
						quote:
							'You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer, but that ain’t no matter.',
						author: 'Mark Twain',
						book: 'The Adventures of Huckleberry Finn',
					},
					{
						quote: 'Love is the longing for the half of ourselves we have lost.',
						author: 'Milan Kundera',
						book: 'The Unbearable Lightness of Being',
					},
					{
						quote:
							'It is our choices, Harry, that show what we truly are, far more than our abilities.',
						author: 'J.K. Rowling',
						book: 'Harry Potter and the Chamber of Secrets',
					},
					{
						quote: 'For you, a thousand times over.',
						author: 'Khaled Hosseini',
						book: 'The Kite Runner',
					},
					{
						quote:
							'Then you must teach my daughter this same lesson. How to lose your innocence but not your hope. How to laugh forever.',
						author: 'Amy Tan',
						book: 'The Joy Luck Club',
					},
					{
						quote: 'And may the odds be ever in your favor.',
						author: 'Suzanne Collins',
						book: 'The Hunger Games',
					},
					{
						quote:
							'Ralph wept for the end of innocence, the darkness of man’s heart, and the fall through the air of the true, wise friend called Piggy.',
						author: 'William Golding',
						book: 'Lord of the Flies',
					},
					{
						quote: 'All human wisdom is summed up in these two words – ‘Wait and hope.’',
						author: 'Alexandre Dumas',
						book: 'The Count of Monte Cristo',
					},
					{
						quote:
							'Oh, the places you’ll go! You’ll be on your way up! You’ll be seeing great sights! You’ll join the high fliers who soar to high heights.',
						author: 'Dr. Seuss',
						book: 'Oh, the Places You’ll Go',
					},
					{
						quote:
							'The longer I live, the more uninformed I feel. Only the young have an explanation for everything.',
						author: 'Isabel Allende',
						book: 'City of the Beasts',
					},
					{
						quote: 'Open your eyes and see what you can with them before they close forever.',
						author: 'Anthony Doerr',
						book: 'All the Light We Cannot See',
					},
					{
						quote: 'If you have the guts to be yourself, other people’ll pay your price.',
						author: 'John Updike',
						book: 'Rabbit, Run',
					},
					{
						quote:
							'We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.',
						author: 'Margaret Atwood',
						book: 'The Handmaid’s Tale',
					},
					{
						quote:
							'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into an enormous insect.',
						author: 'Franz Kafka',
						book: 'The Metamorphosis',
					},
					{
						quote: 'What does the brain matter compared with the heart?',
						author: 'Virginia Woolf',
						book: 'Mrs. Dalloway',
					},
					{
						quote:
							'We are such stuff as dreams are made on, and our little life is rounded with a sleep.',
						author: 'William Shakespeare',
						book: 'The Tempest',
					},
					{
						quote:
							'The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
						author: 'George Orwell',
						book: 'Animal Farm',
					},
					{
						quote:
							'Most men and women will grow up to love their servitude and will never dream of revolution.',
						author: 'Aldous Huxley',
						book: 'Brave New World Revisited',
					},
					{
						quote: 'There is no greater agony than bearing an untold story inside you.',
						author: 'Maya Angelou',
						book: 'I Know Why the Caged Bird Sings',
					},
					{
						quote:
							'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
						author: 'John Green',
						book: 'The Fault in Our Stars',
					},
					{
						quote: 'Anything worth dying for is certainly worth living for.',
						author: 'Joseph Heller',
						book: 'Catch-22',
					},
					{
						quote: 'All the world is made of faith, and trust, and pixie dust.',
						author: 'J.M. Barrie',
						book: 'Peter Pan',
					},
					{
						quote: 'Get busy living or get busy dying.',
						author: 'Stephen King',
						book: 'Rita Hayworth and Shawshank Redemption',
					},
					{
						quote:
							'‘But man is not made for defeat,’ he said. ‘A man can be destroyed but not defeated.’',
						author: 'Ernest Hemingway',
						book: 'The Old Man and the Sea',
					},
					{
						quote:
							'All we can know is that we know nothing. And that’s the height of human wisdom.',
						author: 'Leo Tolstoy',
						book: 'War and Peace',
					},
					{
						quote:
							'There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.',
						author: 'J.R.R. Tolkien',
						book: 'The Hobbit',
					},
					{
						quote: 'Life offers up these moments of joy despite everything.',
						author: 'Sally Rooney',
						book: 'Normal People',
					},
					{
						quote: 'The world may be mean, but people don’t have to be, not if they refuse.',
						author: 'Colson Whitehead',
						book: 'The Underground Railroad',
					},
					{
						quote: 'We had made a fetish out of our misfortune, fallen in love with it.',
						author: 'Ann Patchett',
						book: 'The Dutch House',
					},
					{
						quote:
							'Just like a murderer jumps out of nowhere in an alley, love jumped out in front of us and struck us both at once',
						author: 'Mikhail Bulgakov',
						book: 'The Master and Margarita',
					},
					{
						quote: 'Life changes in the instant. The ordinary instant.',
						author: 'Joan Didion',
						book: 'The Year of Magical Thinking',
					},
				],
				n = e[Math.floor(Math.random() * e.length)];
			return (s, r) => (
				qe(),
				ht('p', Dh, [
					jt(Ct(Re(n).quote), 1),
					Uh,
					te('sub', null, '- ' + Ct(Re(n).book) + ', ' + Ct(Re(n).author), 1),
				])
			);
		},
	},
	Fh = Ia(Mh, [['__scopeId', 'data-v-c53bb126']]),
	hr = jh('AuthStore', {
		state: () => ({ status: !1, screenname: '', username: '', email: '', uid: '', link: 'login' }),
		actions: {
			setUsername(t = '') {
				this.username = t;
			},
			setLoginStatus(t = !1) {
				console.log('set loginStatus to ', t), (this.status = t), t === !1 && this.setUsername();
			},
			setEmail(t = '') {
				this.email = t;
			},
			setScreenname(t = '') {
				this.screenname = t;
			},
			setUid(t = '') {
				this.uid = t;
			},
		},
	});
const Bh = (t) => (Vo('data-v-d0619b34'), (t = t()), Ko(), t),
	Hh = { class: 'name' },
	Vh = Bh(() => te('br', null, null, -1)),
	Kh = {
		__name: 'HomePage',
		props: { title: { type: String, required: !1 } },
		setup(t) {
			const e = hr();
			return (n, s) => {
				const r = $r('RouterLink');
				return (
					qe(),
					ht('div', null, [
						te('h1', null, [jt(' Ola '), te('span', Hh, Ct(Re(e).screenname), 1), jt('! ')]),
						Re(e).username
							? jc('', !0)
							: (qe(),
								Nr(
									r,
									{ key: 0, to: 'login' },
									{ default: is(() => [jt('Want to log in?')]), _: 1 }
								)),
						he(Fh),
						hc(n.$slots, 'default', {}, void 0, !0),
						Vh,
						te('h1', null, Ct(t.title), 1),
					])
				);
			};
		},
	},
	Wh = Ia(Kh, [['__scopeId', 'data-v-d0619b34']]),
	Gh = [
		{
			path: '/',
			children: [
				{ path: '/', name: 'home', component: Wh, meta: { includeNav: !0 } },
				{
					path: '/routeinfo',
					name: 'routeinfo',
					component: () => se(() => import('./RouteinfoPage-5ff9b268.js'), []),
					props: { username: 'proptest' },
					meta: { includeNav: !0 },
				},
				{
					path: '/quotes',
					name: 'quotes',
					component: () => se(() => import('./QuotesPage-c4101ec4.js'), []),
					meta: { includeNav: !0 },
				},
				{
					path: '/states',
					name: 'states',
					component: () =>
						se(
							() => import('./GlobalStates-107476c2.js'),
							['assets/GlobalStates-107476c2.js', 'assets/CountStore-9bf16526.js']
						),
					meta: { includeNav: !1 },
				},
				{
					path: '/boekzoek',
					name: 'boekzoek',
					component: () =>
						se(
							() => import('./BoekzoekPage-63cd56cf.js'),
							['assets/BoekzoekPage-63cd56cf.js', 'assets/BoekzoekPage-1b89aba5.css']
						),
					meta: { includeNav: !0 },
				},
				{
					path: '/books',
					name: 'books',
					component: () => se(() => import('./BooksPage-fe72d47e.js'), []),
					meta: { includeNav: !0 },
				},
				{
					path: '/mubooks',
					name: 'mubooks',
					component: () => se(() => import('./MuPage-9bb55884.js'), []),
					meta: { includeNav: !0 },
				},
				{
					path: '/bookstore',
					name: 'bookstore',
					component: () =>
						se(
							() => import('./BookstorePage-5b05847e.js'),
							['assets/BookstorePage-5b05847e.js', 'assets/BookstorePage-ecbbb25a.css']
						),
					meta: { includeNav: !0 },
				},
				{
					path: '/series',
					name: 'series',
					component: () => se(() => import('./SeriesPage-9734b5ca.js'), []),
					meta: { includeNav: !0 },
				},
			],
		},
		{
			path: '/login',
			children: [
				{
					path: '/profile-create',
					name: 'profile-create',
					component: () =>
						se(
							() => import('./CreatePage-f4085031.js'),
							['assets/CreatePage-f4085031.js', 'assets/CreatePage-58996adf.css']
						),
					meta: { requiresAuth: !1, requiresNoAuth: !0, includeNav: !0 },
				},
				{
					path: '/checkmail',
					name: 'checkmail',
					component: () => se(() => import('./CheckMailPage-e0ae62fe.js'), []),
					meta: { requiresAuth: !1, requiresNoAuth: !1, includeNav: !1 },
					props: !0,
				},
				{
					path: '/welcome',
					name: 'welcome',
					component: () => se(() => import('./WelcomePage-18b89dc4.js'), []),
					meta: { requiresAuth: !1, requiresNoAuth: !1, includeNav: !1 },
				},
				{
					path: '/login',
					name: 'login',
					component: () =>
						se(
							() => import('./LoginPage-5ac980db.js'),
							['./assets/LoginPage-5ac980db.js', './assets/LoginPage-dad777e6.css']
						),
					meta: { requiresAuth: !1, requiresNoAuth: !0, includeNav: !0 },
				},
				{
					path: '/profile-preferences',
					name: 'profile-preferences',
					component: () => se(() => import('./PreferencesPage-bf074a99.js'), []),
					meta: { requiresAuth: !0, requiresNoAuth: !1, includeNav: !0 },
				},
				{
					path: '/profile-secret',
					name: 'profile-secret',
					component: () =>
						se(
							() => import('./SecretPage-3e7cfae6.js'),
							['assets/SecretPage-3e7cfae6.js', 'assets/SecretPage-98d57437.css']
						),
					meta: { requiresAuth: !0, requiresNoAuth: !1, includeNav: !1 },
				},
				{
					path: '/logout',
					name: 'logout',
					component: () => se(() => import('./LogoutPage-bcdbf919.js'), []),
					meta: { requiresAuth: !0, requiresNoAuth: !1, includeNav: !0 },
				},
				{
					path: '/profile-unauthorized',
					name: 'profile-unauthorized',
					component: () => se(() => import('./UnauthorizedPage-798db0db.js'), []),
					meta: { requiresAuth: !1, requiresNoAuth: !0, includeNav: !1 },
				},
			],
		},
		{
			path: '/misc',
			name: 'misc',
			component: () =>
				se(
					() => import('./CompoPage-5edd02b4.js'),
					[
						'assets/CompoPage-5edd02b4.js',
						'assets/useCountStore-9195229e.js',
						'assets/CountStore-9bf16526.js',
					]
				),
			children: [
				{
					path: 'comments',
					name: 'comments',
					component: () => se(() => import('./CommentsPage-6ac1e4b4.js'), []),
				},
				{
					path: '/counter',
					name: 'counter',
					component: () =>
						se(
							() => import('./CounterPage-be0de9d8.js'),
							['assets/CounterPage-be0de9d8.js', 'assets/useCountStore-9195229e.js']
						),
				},
				{
					path: '/posts',
					name: 'posts',
					component: () => se(() => import('./PostsPage-5fdab4ff.js'), []),
				},
				{
					path: '/supabase-test',
					name: 'supabase-test',
					component: () => se(() => import('./SupabaseTest-640602c1.js'), []),
				},
				{
					path: '/compo',
					name: 'compo',
					component: () =>
						se(
							() => import('./CompoPage-5edd02b4.js'),
							[
								'assets/CompoPage-5edd02b4.js',
								'assets/useCountStore-9195229e.js',
								'assets/CountStore-9bf16526.js',
							]
						),
				},
			],
		},
		{},
		{
			path: '/:catchAll(.*)',
			name: '404',
			component: () => se(() => import('./404Page-9031ad48.js'), []),
		},
	],
	zh = (t) => {
		let e;
		return (
			t
				? (e = t)
				: typeof fetch > 'u'
					? (e = (...n) =>
							se(() => Promise.resolve().then(() => Dn), void 0).then(({ default: s }) => s(...n)))
					: (e = fetch),
			(...n) => e(...n)
		);
	};
class Br extends Error {
	constructor(e, n = 'FunctionsError', s) {
		super(e), (this.name = n), (this.context = s);
	}
}
class Jh extends Br {
	constructor(e) {
		super('Failed to send a request to the Edge Function', 'FunctionsFetchError', e);
	}
}
class Yh extends Br {
	constructor(e) {
		super('Relay Error invoking the Edge Function', 'FunctionsRelayError', e);
	}
}
class Qh extends Br {
	constructor(e) {
		super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', e);
	}
}
var Xh =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
class Zh {
	constructor(e, { headers: n = {}, customFetch: s } = {}) {
		(this.url = e), (this.headers = n), (this.fetch = zh(s));
	}
	setAuth(e) {
		this.headers.Authorization = `Bearer ${e}`;
	}
	invoke(e, n = {}) {
		var s;
		return Xh(this, void 0, void 0, function* () {
			try {
				const { headers: r, method: i, body: o } = n;
				let a = {},
					l;
				o &&
					((r && !Object.prototype.hasOwnProperty.call(r, 'Content-Type')) || !r) &&
					((typeof Blob < 'u' && o instanceof Blob) || o instanceof ArrayBuffer
						? ((a['Content-Type'] = 'application/octet-stream'), (l = o))
						: typeof o == 'string'
							? ((a['Content-Type'] = 'text/plain'), (l = o))
							: typeof FormData < 'u' && o instanceof FormData
								? (l = o)
								: ((a['Content-Type'] = 'application/json'), (l = JSON.stringify(o))));
				const c = yield this.fetch(`${this.url}/${e}`, {
						method: i || 'POST',
						headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), r),
						body: l,
					}).catch((g) => {
						throw new Jh(g);
					}),
					u = c.headers.get('x-relay-error');
				if (u && u === 'true') throw new Yh(c);
				if (!c.ok) throw new Qh(c);
				let h = ((s = c.headers.get('Content-Type')) !== null && s !== void 0 ? s : 'text/plain')
						.split(';')[0]
						.trim(),
					f;
				return (
					h === 'application/json'
						? (f = yield c.json())
						: h === 'application/octet-stream'
							? (f = yield c.blob())
							: h === 'multipart/form-data'
								? (f = yield c.formData())
								: (f = yield c.text()),
					{ data: f, error: null }
				);
			} catch (r) {
				return { data: null, error: r };
			}
		});
	}
}
var ef = function () {
		if (typeof self < 'u') return self;
		if (typeof window < 'u') return window;
		if (typeof global < 'u') return global;
		throw new Error('unable to locate global object');
	},
	hn = ef();
const tf = hn.fetch,
	Hr = hn.fetch.bind(hn),
	$a = hn.Headers,
	nf = hn.Request,
	sf = hn.Response,
	Dn = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, Headers: $a, Request: nf, Response: sf, default: Hr, fetch: tf },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	);
class rf {
	constructor(e) {
		(this.shouldThrowOnError = !1),
			(this.method = e.method),
			(this.url = e.url),
			(this.headers = e.headers),
			(this.schema = e.schema),
			(this.body = e.body),
			(this.shouldThrowOnError = e.shouldThrowOnError),
			(this.signal = e.signal),
			(this.isMaybeSingle = e.isMaybeSingle),
			e.fetch
				? (this.fetch = e.fetch)
				: typeof fetch > 'u'
					? (this.fetch = Hr)
					: (this.fetch = fetch);
	}
	throwOnError() {
		return (this.shouldThrowOnError = !0), this;
	}
	then(e, n) {
		this.schema === void 0 ||
			(['GET', 'HEAD'].includes(this.method)
				? (this.headers['Accept-Profile'] = this.schema)
				: (this.headers['Content-Profile'] = this.schema)),
			this.method !== 'GET' &&
				this.method !== 'HEAD' &&
				(this.headers['Content-Type'] = 'application/json');
		const s = this.fetch;
		let r = s(this.url.toString(), {
			method: this.method,
			headers: this.headers,
			body: JSON.stringify(this.body),
			signal: this.signal,
		}).then(async (i) => {
			var o, a, l;
			let c = null,
				u = null,
				h = null,
				f = i.status,
				g = i.statusText;
			if (i.ok) {
				if (this.method !== 'HEAD') {
					const A = await i.text();
					A === '' ||
						(this.headers.Accept === 'text/csv' ||
						(this.headers.Accept && this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
							? (u = A)
							: (u = JSON.parse(A)));
				}
				const b =
						(o = this.headers.Prefer) === null || o === void 0
							? void 0
							: o.match(/count=(exact|planned|estimated)/),
					S = (a = i.headers.get('content-range')) === null || a === void 0 ? void 0 : a.split('/');
				b && S && S.length > 1 && (h = parseInt(S[1])),
					this.isMaybeSingle &&
						this.method === 'GET' &&
						Array.isArray(u) &&
						(u.length > 1
							? ((c = {
									code: 'PGRST116',
									details: `Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,
									hint: null,
									message: 'JSON object requested, multiple (or no) rows returned',
								}),
								(u = null),
								(h = null),
								(f = 406),
								(g = 'Not Acceptable'))
							: u.length === 1
								? (u = u[0])
								: (u = null));
			} else {
				const b = await i.text();
				try {
					(c = JSON.parse(b)),
						Array.isArray(c) && i.status === 404 && ((u = []), (c = null), (f = 200), (g = 'OK'));
				} catch {
					i.status === 404 && b === '' ? ((f = 204), (g = 'No Content')) : (c = { message: b });
				}
				if (
					(c &&
						this.isMaybeSingle &&
						!((l = c == null ? void 0 : c.details) === null || l === void 0) &&
						l.includes('0 rows') &&
						((c = null), (f = 200), (g = 'OK')),
					c && this.shouldThrowOnError)
				)
					throw c;
			}
			return { error: c, data: u, count: h, status: f, statusText: g };
		});
		return (
			this.shouldThrowOnError ||
				(r = r.catch((i) => {
					var o, a, l;
					return {
						error: {
							message: `${
								(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : 'FetchError'
							}: ${i == null ? void 0 : i.message}`,
							details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ''}`,
							hint: '',
							code: `${(l = i == null ? void 0 : i.code) !== null && l !== void 0 ? l : ''}`,
						},
						data: null,
						count: null,
						status: 0,
						statusText: '',
					};
				})),
			r.then(e, n)
		);
	}
}
class of extends rf {
	select(e) {
		let n = !1;
		const s = (e ?? '*')
			.split('')
			.map((r) => (/\s/.test(r) && !n ? '' : (r === '"' && (n = !n), r)))
			.join('');
		return (
			this.url.searchParams.set('select', s),
			this.headers.Prefer && (this.headers.Prefer += ','),
			(this.headers.Prefer += 'return=representation'),
			this
		);
	}
	order(e, { ascending: n = !0, nullsFirst: s, foreignTable: r, referencedTable: i = r } = {}) {
		const o = i ? `${i}.order` : 'order',
			a = this.url.searchParams.get(o);
		return (
			this.url.searchParams.set(
				o,
				`${a ? `${a},` : ''}${e}.${n ? 'asc' : 'desc'}${
					s === void 0 ? '' : s ? '.nullsfirst' : '.nullslast'
				}`
			),
			this
		);
	}
	limit(e, { foreignTable: n, referencedTable: s = n } = {}) {
		const r = typeof s > 'u' ? 'limit' : `${s}.limit`;
		return this.url.searchParams.set(r, `${e}`), this;
	}
	range(e, n, { foreignTable: s, referencedTable: r = s } = {}) {
		const i = typeof r > 'u' ? 'offset' : `${r}.offset`,
			o = typeof r > 'u' ? 'limit' : `${r}.limit`;
		return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(o, `${n - e + 1}`), this;
	}
	abortSignal(e) {
		return (this.signal = e), this;
	}
	single() {
		return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this;
	}
	maybeSingle() {
		return (
			this.method === 'GET'
				? (this.headers.Accept = 'application/json')
				: (this.headers.Accept = 'application/vnd.pgrst.object+json'),
			(this.isMaybeSingle = !0),
			this
		);
	}
	csv() {
		return (this.headers.Accept = 'text/csv'), this;
	}
	geojson() {
		return (this.headers.Accept = 'application/geo+json'), this;
	}
	explain({
		analyze: e = !1,
		verbose: n = !1,
		settings: s = !1,
		buffers: r = !1,
		wal: i = !1,
		format: o = 'text',
	} = {}) {
		var a;
		const l = [
				e ? 'analyze' : null,
				n ? 'verbose' : null,
				s ? 'settings' : null,
				r ? 'buffers' : null,
				i ? 'wal' : null,
			]
				.filter(Boolean)
				.join('|'),
			c = (a = this.headers.Accept) !== null && a !== void 0 ? a : 'application/json';
		return (
			(this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${c}"; options=${l};`),
			o === 'json' ? this : this
		);
	}
	rollback() {
		var e;
		return (
			((e = this.headers.Prefer) !== null && e !== void 0 ? e : '').trim().length > 0
				? (this.headers.Prefer += ',tx=rollback')
				: (this.headers.Prefer = 'tx=rollback'),
			this
		);
	}
	returns() {
		return this;
	}
}
class Jt extends of {
	eq(e, n) {
		return this.url.searchParams.append(e, `eq.${n}`), this;
	}
	neq(e, n) {
		return this.url.searchParams.append(e, `neq.${n}`), this;
	}
	gt(e, n) {
		return this.url.searchParams.append(e, `gt.${n}`), this;
	}
	gte(e, n) {
		return this.url.searchParams.append(e, `gte.${n}`), this;
	}
	lt(e, n) {
		return this.url.searchParams.append(e, `lt.${n}`), this;
	}
	lte(e, n) {
		return this.url.searchParams.append(e, `lte.${n}`), this;
	}
	like(e, n) {
		return this.url.searchParams.append(e, `like.${n}`), this;
	}
	likeAllOf(e, n) {
		return this.url.searchParams.append(e, `like(all).{${n.join(',')}}`), this;
	}
	likeAnyOf(e, n) {
		return this.url.searchParams.append(e, `like(any).{${n.join(',')}}`), this;
	}
	ilike(e, n) {
		return this.url.searchParams.append(e, `ilike.${n}`), this;
	}
	ilikeAllOf(e, n) {
		return this.url.searchParams.append(e, `ilike(all).{${n.join(',')}}`), this;
	}
	ilikeAnyOf(e, n) {
		return this.url.searchParams.append(e, `ilike(any).{${n.join(',')}}`), this;
	}
	is(e, n) {
		return this.url.searchParams.append(e, `is.${n}`), this;
	}
	in(e, n) {
		const s = n
			.map((r) => (typeof r == 'string' && new RegExp('[,()]').test(r) ? `"${r}"` : `${r}`))
			.join(',');
		return this.url.searchParams.append(e, `in.(${s})`), this;
	}
	contains(e, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(e, `cs.${n}`)
				: Array.isArray(n)
					? this.url.searchParams.append(e, `cs.{${n.join(',')}}`)
					: this.url.searchParams.append(e, `cs.${JSON.stringify(n)}`),
			this
		);
	}
	containedBy(e, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(e, `cd.${n}`)
				: Array.isArray(n)
					? this.url.searchParams.append(e, `cd.{${n.join(',')}}`)
					: this.url.searchParams.append(e, `cd.${JSON.stringify(n)}`),
			this
		);
	}
	rangeGt(e, n) {
		return this.url.searchParams.append(e, `sr.${n}`), this;
	}
	rangeGte(e, n) {
		return this.url.searchParams.append(e, `nxl.${n}`), this;
	}
	rangeLt(e, n) {
		return this.url.searchParams.append(e, `sl.${n}`), this;
	}
	rangeLte(e, n) {
		return this.url.searchParams.append(e, `nxr.${n}`), this;
	}
	rangeAdjacent(e, n) {
		return this.url.searchParams.append(e, `adj.${n}`), this;
	}
	overlaps(e, n) {
		return (
			typeof n == 'string'
				? this.url.searchParams.append(e, `ov.${n}`)
				: this.url.searchParams.append(e, `ov.{${n.join(',')}}`),
			this
		);
	}
	textSearch(e, n, { config: s, type: r } = {}) {
		let i = '';
		r === 'plain' ? (i = 'pl') : r === 'phrase' ? (i = 'ph') : r === 'websearch' && (i = 'w');
		const o = s === void 0 ? '' : `(${s})`;
		return this.url.searchParams.append(e, `${i}fts${o}.${n}`), this;
	}
	match(e) {
		return (
			Object.entries(e).forEach(([n, s]) => {
				this.url.searchParams.append(n, `eq.${s}`);
			}),
			this
		);
	}
	not(e, n, s) {
		return this.url.searchParams.append(e, `not.${n}.${s}`), this;
	}
	or(e, { foreignTable: n, referencedTable: s = n } = {}) {
		const r = s ? `${s}.or` : 'or';
		return this.url.searchParams.append(r, `(${e})`), this;
	}
	filter(e, n, s) {
		return this.url.searchParams.append(e, `${n}.${s}`), this;
	}
}
class af {
	constructor(e, { headers: n = {}, schema: s, fetch: r }) {
		(this.url = e), (this.headers = n), (this.schema = s), (this.fetch = r);
	}
	select(e, { head: n = !1, count: s } = {}) {
		const r = n ? 'HEAD' : 'GET';
		let i = !1;
		const o = (e ?? '*')
			.split('')
			.map((a) => (/\s/.test(a) && !i ? '' : (a === '"' && (i = !i), a)))
			.join('');
		return (
			this.url.searchParams.set('select', o),
			s && (this.headers.Prefer = `count=${s}`),
			new Jt({
				method: r,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
	insert(e, { count: n, defaultToNull: s = !0 } = {}) {
		const r = 'POST',
			i = [];
		if (
			(this.headers.Prefer && i.push(this.headers.Prefer),
			n && i.push(`count=${n}`),
			s || i.push('missing=default'),
			(this.headers.Prefer = i.join(',')),
			Array.isArray(e))
		) {
			const o = e.reduce((a, l) => a.concat(Object.keys(l)), []);
			if (o.length > 0) {
				const a = [...new Set(o)].map((l) => `"${l}"`);
				this.url.searchParams.set('columns', a.join(','));
			}
		}
		return new Jt({
			method: r,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: e,
			fetch: this.fetch,
			allowEmpty: !1,
		});
	}
	upsert(e, { onConflict: n, ignoreDuplicates: s = !1, count: r, defaultToNull: i = !0 } = {}) {
		const o = 'POST',
			a = [`resolution=${s ? 'ignore' : 'merge'}-duplicates`];
		if (
			(n !== void 0 && this.url.searchParams.set('on_conflict', n),
			this.headers.Prefer && a.push(this.headers.Prefer),
			r && a.push(`count=${r}`),
			i || a.push('missing=default'),
			(this.headers.Prefer = a.join(',')),
			Array.isArray(e))
		) {
			const l = e.reduce((c, u) => c.concat(Object.keys(u)), []);
			if (l.length > 0) {
				const c = [...new Set(l)].map((u) => `"${u}"`);
				this.url.searchParams.set('columns', c.join(','));
			}
		}
		return new Jt({
			method: o,
			url: this.url,
			headers: this.headers,
			schema: this.schema,
			body: e,
			fetch: this.fetch,
			allowEmpty: !1,
		});
	}
	update(e, { count: n } = {}) {
		const s = 'PATCH',
			r = [];
		return (
			this.headers.Prefer && r.push(this.headers.Prefer),
			n && r.push(`count=${n}`),
			(this.headers.Prefer = r.join(',')),
			new Jt({
				method: s,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: e,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
	delete({ count: e } = {}) {
		const n = 'DELETE',
			s = [];
		return (
			e && s.push(`count=${e}`),
			this.headers.Prefer && s.unshift(this.headers.Prefer),
			(this.headers.Prefer = s.join(',')),
			new Jt({
				method: n,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
}
const lf = '1.9.1',
	cf = { 'X-Client-Info': `postgrest-js/${lf}` };
class Vr {
	constructor(e, { headers: n = {}, schema: s, fetch: r } = {}) {
		(this.url = e),
			(this.headers = Object.assign(Object.assign({}, cf), n)),
			(this.schemaName = s),
			(this.fetch = r);
	}
	from(e) {
		const n = new URL(`${this.url}/${e}`);
		return new af(n, {
			headers: Object.assign({}, this.headers),
			schema: this.schemaName,
			fetch: this.fetch,
		});
	}
	schema(e) {
		return new Vr(this.url, { headers: this.headers, schema: e, fetch: this.fetch });
	}
	rpc(e, n = {}, { head: s = !1, count: r } = {}) {
		let i;
		const o = new URL(`${this.url}/rpc/${e}`);
		let a;
		s
			? ((i = 'HEAD'),
				Object.entries(n).forEach(([c, u]) => {
					o.searchParams.append(c, `${u}`);
				}))
			: ((i = 'POST'), (a = n));
		const l = Object.assign({}, this.headers);
		return (
			r && (l.Prefer = `count=${r}`),
			new Jt({
				method: i,
				url: o,
				headers: l,
				schema: this.schemaName,
				body: a,
				fetch: this.fetch,
				allowEmpty: !1,
			})
		);
	}
}
const uf = '2.9.1',
	hf = { 'X-Client-Info': `realtime-js/${uf}` },
	ff = '1.0.0',
	ja = 1e4,
	df = 1e3;
var sn;
(function (t) {
	(t[(t.connecting = 0)] = 'connecting'),
		(t[(t.open = 1)] = 'open'),
		(t[(t.closing = 2)] = 'closing'),
		(t[(t.closed = 3)] = 'closed');
})(sn || (sn = {}));
var Ce;
(function (t) {
	(t.closed = 'closed'),
		(t.errored = 'errored'),
		(t.joined = 'joined'),
		(t.joining = 'joining'),
		(t.leaving = 'leaving');
})(Ce || (Ce = {}));
var Fe;
(function (t) {
	(t.close = 'phx_close'),
		(t.error = 'phx_error'),
		(t.join = 'phx_join'),
		(t.reply = 'phx_reply'),
		(t.leave = 'phx_leave'),
		(t.access_token = 'access_token');
})(Fe || (Fe = {}));
var fr;
(function (t) {
	t.websocket = 'websocket';
})(fr || (fr = {}));
var Ot;
(function (t) {
	(t.Connecting = 'connecting'), (t.Open = 'open'), (t.Closing = 'closing'), (t.Closed = 'closed');
})(Ot || (Ot = {}));
class La {
	constructor(e, n) {
		(this.callback = e),
			(this.timerCalc = n),
			(this.timer = void 0),
			(this.tries = 0),
			(this.callback = e),
			(this.timerCalc = n);
	}
	reset() {
		(this.tries = 0), clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer),
			(this.timer = setTimeout(
				() => {
					(this.tries = this.tries + 1), this.callback();
				},
				this.timerCalc(this.tries + 1)
			));
	}
}
class pf {
	constructor() {
		this.HEADER_LENGTH = 1;
	}
	decode(e, n) {
		return e.constructor === ArrayBuffer
			? n(this._binaryDecode(e))
			: n(typeof e == 'string' ? JSON.parse(e) : {});
	}
	_binaryDecode(e) {
		const n = new DataView(e),
			s = new TextDecoder();
		return this._decodeBroadcast(e, n, s);
	}
	_decodeBroadcast(e, n, s) {
		const r = n.getUint8(1),
			i = n.getUint8(2);
		let o = this.HEADER_LENGTH + 2;
		const a = s.decode(e.slice(o, o + r));
		o = o + r;
		const l = s.decode(e.slice(o, o + i));
		o = o + i;
		const c = JSON.parse(s.decode(e.slice(o, e.byteLength)));
		return { ref: null, topic: a, event: l, payload: c };
	}
}
class Ds {
	constructor(e, n, s = {}, r = ja) {
		(this.channel = e),
			(this.event = n),
			(this.payload = s),
			(this.timeout = r),
			(this.sent = !1),
			(this.timeoutTimer = void 0),
			(this.ref = ''),
			(this.receivedResp = null),
			(this.recHooks = []),
			(this.refEvent = null);
	}
	resend(e) {
		(this.timeout = e),
			this._cancelRefEvent(),
			(this.ref = ''),
			(this.refEvent = null),
			(this.receivedResp = null),
			(this.sent = !1),
			this.send();
	}
	send() {
		this._hasReceived('timeout') ||
			(this.startTimeout(),
			(this.sent = !0),
			this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef(),
			}));
	}
	updatePayload(e) {
		this.payload = Object.assign(Object.assign({}, this.payload), e);
	}
	receive(e, n) {
		var s;
		return (
			this._hasReceived(e) &&
				n((s = this.receivedResp) === null || s === void 0 ? void 0 : s.response),
			this.recHooks.push({ status: e, callback: n }),
			this
		);
	}
	startTimeout() {
		if (this.timeoutTimer) return;
		(this.ref = this.channel.socket._makeRef()),
			(this.refEvent = this.channel._replyEventName(this.ref));
		const e = (n) => {
			this._cancelRefEvent(), this._cancelTimeout(), (this.receivedResp = n), this._matchReceive(n);
		};
		this.channel._on(this.refEvent, {}, e),
			(this.timeoutTimer = setTimeout(() => {
				this.trigger('timeout', {});
			}, this.timeout));
	}
	trigger(e, n) {
		this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: n });
	}
	destroy() {
		this._cancelRefEvent(), this._cancelTimeout();
	}
	_cancelRefEvent() {
		this.refEvent && this.channel._off(this.refEvent, {});
	}
	_cancelTimeout() {
		clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
	}
	_matchReceive({ status: e, response: n }) {
		this.recHooks.filter((s) => s.status === e).forEach((s) => s.callback(n));
	}
	_hasReceived(e) {
		return this.receivedResp && this.receivedResp.status === e;
	}
}
var Yi;
(function (t) {
	(t.SYNC = 'sync'), (t.JOIN = 'join'), (t.LEAVE = 'leave');
})(Yi || (Yi = {}));
class Tn {
	constructor(e, n) {
		(this.channel = e),
			(this.state = {}),
			(this.pendingDiffs = []),
			(this.joinRef = null),
			(this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
		const s = (n == null ? void 0 : n.events) || { state: 'presence_state', diff: 'presence_diff' };
		this.channel._on(s.state, {}, (r) => {
			const { onJoin: i, onLeave: o, onSync: a } = this.caller;
			(this.joinRef = this.channel._joinRef()),
				(this.state = Tn.syncState(this.state, r, i, o)),
				this.pendingDiffs.forEach((l) => {
					this.state = Tn.syncDiff(this.state, l, i, o);
				}),
				(this.pendingDiffs = []),
				a();
		}),
			this.channel._on(s.diff, {}, (r) => {
				const { onJoin: i, onLeave: o, onSync: a } = this.caller;
				this.inPendingSyncState()
					? this.pendingDiffs.push(r)
					: ((this.state = Tn.syncDiff(this.state, r, i, o)), a());
			}),
			this.onJoin((r, i, o) => {
				this.channel._trigger('presence', {
					event: 'join',
					key: r,
					currentPresences: i,
					newPresences: o,
				});
			}),
			this.onLeave((r, i, o) => {
				this.channel._trigger('presence', {
					event: 'leave',
					key: r,
					currentPresences: i,
					leftPresences: o,
				});
			}),
			this.onSync(() => {
				this.channel._trigger('presence', { event: 'sync' });
			});
	}
	static syncState(e, n, s, r) {
		const i = this.cloneDeep(e),
			o = this.transformState(n),
			a = {},
			l = {};
		return (
			this.map(i, (c, u) => {
				o[c] || (l[c] = u);
			}),
			this.map(o, (c, u) => {
				const h = i[c];
				if (h) {
					const f = u.map((S) => S.presence_ref),
						g = h.map((S) => S.presence_ref),
						y = u.filter((S) => g.indexOf(S.presence_ref) < 0),
						b = h.filter((S) => f.indexOf(S.presence_ref) < 0);
					y.length > 0 && (a[c] = y), b.length > 0 && (l[c] = b);
				} else a[c] = u;
			}),
			this.syncDiff(i, { joins: a, leaves: l }, s, r)
		);
	}
	static syncDiff(e, n, s, r) {
		const { joins: i, leaves: o } = {
			joins: this.transformState(n.joins),
			leaves: this.transformState(n.leaves),
		};
		return (
			s || (s = () => {}),
			r || (r = () => {}),
			this.map(i, (a, l) => {
				var c;
				const u = (c = e[a]) !== null && c !== void 0 ? c : [];
				if (((e[a] = this.cloneDeep(l)), u.length > 0)) {
					const h = e[a].map((g) => g.presence_ref),
						f = u.filter((g) => h.indexOf(g.presence_ref) < 0);
					e[a].unshift(...f);
				}
				s(a, u, l);
			}),
			this.map(o, (a, l) => {
				let c = e[a];
				if (!c) return;
				const u = l.map((h) => h.presence_ref);
				(c = c.filter((h) => u.indexOf(h.presence_ref) < 0)),
					(e[a] = c),
					r(a, c, l),
					c.length === 0 && delete e[a];
			}),
			e
		);
	}
	static map(e, n) {
		return Object.getOwnPropertyNames(e).map((s) => n(s, e[s]));
	}
	static transformState(e) {
		return (
			(e = this.cloneDeep(e)),
			Object.getOwnPropertyNames(e).reduce((n, s) => {
				const r = e[s];
				return (
					'metas' in r
						? (n[s] = r.metas.map(
								(i) => ((i.presence_ref = i.phx_ref), delete i.phx_ref, delete i.phx_ref_prev, i)
							))
						: (n[s] = r),
					n
				);
			}, {})
		);
	}
	static cloneDeep(e) {
		return JSON.parse(JSON.stringify(e));
	}
	onJoin(e) {
		this.caller.onJoin = e;
	}
	onLeave(e) {
		this.caller.onLeave = e;
	}
	onSync(e) {
		this.caller.onSync = e;
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel._joinRef();
	}
}
var oe;
(function (t) {
	(t.abstime = 'abstime'),
		(t.bool = 'bool'),
		(t.date = 'date'),
		(t.daterange = 'daterange'),
		(t.float4 = 'float4'),
		(t.float8 = 'float8'),
		(t.int2 = 'int2'),
		(t.int4 = 'int4'),
		(t.int4range = 'int4range'),
		(t.int8 = 'int8'),
		(t.int8range = 'int8range'),
		(t.json = 'json'),
		(t.jsonb = 'jsonb'),
		(t.money = 'money'),
		(t.numeric = 'numeric'),
		(t.oid = 'oid'),
		(t.reltime = 'reltime'),
		(t.text = 'text'),
		(t.time = 'time'),
		(t.timestamp = 'timestamp'),
		(t.timestamptz = 'timestamptz'),
		(t.timetz = 'timetz'),
		(t.tsrange = 'tsrange'),
		(t.tstzrange = 'tstzrange');
})(oe || (oe = {}));
const Qi = (t, e, n = {}) => {
		var s;
		const r = (s = n.skipTypes) !== null && s !== void 0 ? s : [];
		return Object.keys(e).reduce((i, o) => ((i[o] = gf(o, t, e, r)), i), {});
	},
	gf = (t, e, n, s) => {
		const r = e.find((a) => a.name === t),
			i = r == null ? void 0 : r.type,
			o = n[t];
		return i && !s.includes(i) ? qa(i, o) : dr(o);
	},
	qa = (t, e) => {
		if (t.charAt(0) === '_') {
			const n = t.slice(1, t.length);
			return vf(e, n);
		}
		switch (t) {
			case oe.bool:
				return mf(e);
			case oe.float4:
			case oe.float8:
			case oe.int2:
			case oe.int4:
			case oe.int8:
			case oe.numeric:
			case oe.oid:
				return _f(e);
			case oe.json:
			case oe.jsonb:
				return yf(e);
			case oe.timestamp:
				return bf(e);
			case oe.abstime:
			case oe.date:
			case oe.daterange:
			case oe.int4range:
			case oe.int8range:
			case oe.money:
			case oe.reltime:
			case oe.text:
			case oe.time:
			case oe.timestamptz:
			case oe.timetz:
			case oe.tsrange:
			case oe.tstzrange:
				return dr(e);
			default:
				return dr(e);
		}
	},
	dr = (t) => t,
	mf = (t) => {
		switch (t) {
			case 't':
				return !0;
			case 'f':
				return !1;
			default:
				return t;
		}
	},
	_f = (t) => {
		if (typeof t == 'string') {
			const e = parseFloat(t);
			if (!Number.isNaN(e)) return e;
		}
		return t;
	},
	yf = (t) => {
		if (typeof t == 'string')
			try {
				return JSON.parse(t);
			} catch (e) {
				return console.log(`JSON parse error: ${e}`), t;
			}
		return t;
	},
	vf = (t, e) => {
		if (typeof t != 'string') return t;
		const n = t.length - 1,
			s = t[n];
		if (t[0] === '{' && s === '}') {
			let i;
			const o = t.slice(1, n);
			try {
				i = JSON.parse('[' + o + ']');
			} catch {
				i = o ? o.split(',') : [];
			}
			return i.map((a) => qa(e, a));
		}
		return t;
	},
	bf = (t) => (typeof t == 'string' ? t.replace(' ', 'T') : t);
var Xi;
(function (t) {
	(t.ALL = '*'), (t.INSERT = 'INSERT'), (t.UPDATE = 'UPDATE'), (t.DELETE = 'DELETE');
})(Xi || (Xi = {}));
var Zi;
(function (t) {
	(t.BROADCAST = 'broadcast'), (t.PRESENCE = 'presence'), (t.POSTGRES_CHANGES = 'postgres_changes');
})(Zi || (Zi = {}));
var eo;
(function (t) {
	(t.SUBSCRIBED = 'SUBSCRIBED'),
		(t.TIMED_OUT = 'TIMED_OUT'),
		(t.CLOSED = 'CLOSED'),
		(t.CHANNEL_ERROR = 'CHANNEL_ERROR');
})(eo || (eo = {}));
class Kr {
	constructor(e, n = { config: {} }, s) {
		(this.topic = e),
			(this.params = n),
			(this.socket = s),
			(this.bindings = {}),
			(this.state = Ce.closed),
			(this.joinedOnce = !1),
			(this.pushBuffer = []),
			(this.subTopic = e.replace(/^realtime:/i, '')),
			(this.params.config = Object.assign(
				{ broadcast: { ack: !1, self: !1 }, presence: { key: '' } },
				n.config
			)),
			(this.timeout = this.socket.timeout),
			(this.joinPush = new Ds(this, Fe.join, this.params, this.timeout)),
			(this.rejoinTimer = new La(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs)),
			this.joinPush.receive('ok', () => {
				(this.state = Ce.joined),
					this.rejoinTimer.reset(),
					this.pushBuffer.forEach((r) => r.send()),
					(this.pushBuffer = []);
			}),
			this._onClose(() => {
				this.rejoinTimer.reset(),
					this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
					(this.state = Ce.closed),
					this.socket._remove(this);
			}),
			this._onError((r) => {
				this._isLeaving() ||
					this._isClosed() ||
					(this.socket.log('channel', `error ${this.topic}`, r),
					(this.state = Ce.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this.joinPush.receive('timeout', () => {
				this._isJoining() &&
					(this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout),
					(this.state = Ce.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this._on(Fe.reply, {}, (r, i) => {
				this._trigger(this._replyEventName(i), r);
			}),
			(this.presence = new Tn(this)),
			(this.broadcastEndpointURL = this._broadcastEndpointURL());
	}
	subscribe(e, n = this.timeout) {
		var s, r;
		if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
			throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
		{
			const {
				config: { broadcast: i, presence: o },
			} = this.params;
			this._onError((c) => e && e('CHANNEL_ERROR', c)), this._onClose(() => e && e('CLOSED'));
			const a = {},
				l = {
					broadcast: i,
					presence: o,
					postgres_changes:
						(r =
							(s = this.bindings.postgres_changes) === null || s === void 0
								? void 0
								: s.map((c) => c.filter)) !== null && r !== void 0
							? r
							: [],
				};
			this.socket.accessToken && (a.access_token = this.socket.accessToken),
				this.updateJoinPayload(Object.assign({ config: l }, a)),
				(this.joinedOnce = !0),
				this._rejoin(n),
				this.joinPush
					.receive('ok', ({ postgres_changes: c }) => {
						var u;
						if (
							(this.socket.accessToken && this.socket.setAuth(this.socket.accessToken),
							c === void 0)
						) {
							e && e('SUBSCRIBED');
							return;
						} else {
							const h = this.bindings.postgres_changes,
								f = (u = h == null ? void 0 : h.length) !== null && u !== void 0 ? u : 0,
								g = [];
							for (let y = 0; y < f; y++) {
								const b = h[y],
									{
										filter: { event: S, schema: A, table: $, filter: L },
									} = b,
									R = c && c[y];
								if (R && R.event === S && R.schema === A && R.table === $ && R.filter === L)
									g.push(Object.assign(Object.assign({}, b), { id: R.id }));
								else {
									this.unsubscribe(),
										e &&
											e(
												'CHANNEL_ERROR',
												new Error(
													'mismatch between server and client bindings for postgres changes'
												)
											);
									return;
								}
							}
							(this.bindings.postgres_changes = g), e && e('SUBSCRIBED');
							return;
						}
					})
					.receive('error', (c) => {
						e &&
							e('CHANNEL_ERROR', new Error(JSON.stringify(Object.values(c).join(', ') || 'error')));
					})
					.receive('timeout', () => {
						e && e('TIMED_OUT');
					});
		}
		return this;
	}
	presenceState() {
		return this.presence.state;
	}
	async track(e, n = {}) {
		return await this.send(
			{ type: 'presence', event: 'track', payload: e },
			n.timeout || this.timeout
		);
	}
	async untrack(e = {}) {
		return await this.send({ type: 'presence', event: 'untrack' }, e);
	}
	on(e, n, s) {
		return this._on(e, n, s);
	}
	async send(e, n = {}) {
		var s, r;
		if (!this._canPush() && e.type === 'broadcast') {
			const { event: i, payload: o } = e,
				a = {
					method: 'POST',
					headers: {
						apikey: (s = this.socket.accessToken) !== null && s !== void 0 ? s : '',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ messages: [{ topic: this.subTopic, event: i, payload: o }] }),
				};
			try {
				return (
					await this._fetchWithTimeout(
						this.broadcastEndpointURL,
						a,
						(r = n.timeout) !== null && r !== void 0 ? r : this.timeout
					)
				).ok
					? 'ok'
					: 'error';
			} catch (l) {
				return l.name === 'AbortError' ? 'timed out' : 'error';
			}
		} else
			return new Promise((i) => {
				var o, a, l;
				const c = this._push(e.type, e, n.timeout || this.timeout);
				e.type === 'broadcast' &&
					!(
						!(
							(l =
								(a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null ||
								a === void 0
									? void 0
									: a.broadcast) === null || l === void 0
						) && l.ack
					) &&
					i('ok'),
					c.receive('ok', () => i('ok')),
					c.receive('timeout', () => i('timed out'));
			});
	}
	updateJoinPayload(e) {
		this.joinPush.updatePayload(e);
	}
	unsubscribe(e = this.timeout) {
		this.state = Ce.leaving;
		const n = () => {
			this.socket.log('channel', `leave ${this.topic}`),
				this._trigger(Fe.close, 'leave', this._joinRef());
		};
		return (
			this.rejoinTimer.reset(),
			this.joinPush.destroy(),
			new Promise((s) => {
				const r = new Ds(this, Fe.leave, {}, e);
				r
					.receive('ok', () => {
						n(), s('ok');
					})
					.receive('timeout', () => {
						n(), s('timed out');
					})
					.receive('error', () => {
						s('error');
					}),
					r.send(),
					this._canPush() || r.trigger('ok', {});
			})
		);
	}
	_broadcastEndpointURL() {
		let e = this.socket.endPoint;
		return (
			(e = e.replace(/^ws/i, 'http')),
			(e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '')),
			e.replace(/\/+$/, '') + '/api/broadcast'
		);
	}
	async _fetchWithTimeout(e, n, s) {
		const r = new AbortController(),
			i = setTimeout(() => r.abort(), s),
			o = await this.socket.fetch(e, Object.assign(Object.assign({}, n), { signal: r.signal }));
		return clearTimeout(i), o;
	}
	_push(e, n, s = this.timeout) {
		if (!this.joinedOnce)
			throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
		let r = new Ds(this, e, n, s);
		return this._canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
	}
	_onMessage(e, n, s) {
		return n;
	}
	_isMember(e) {
		return this.topic === e;
	}
	_joinRef() {
		return this.joinPush.ref;
	}
	_trigger(e, n, s) {
		var r, i;
		const o = e.toLocaleLowerCase(),
			{ close: a, error: l, leave: c, join: u } = Fe;
		if (s && [a, l, c, u].indexOf(o) >= 0 && s !== this._joinRef()) return;
		let f = this._onMessage(o, n, s);
		if (n && !f)
			throw 'channel onMessage callbacks must return the payload, modified or unmodified';
		['insert', 'update', 'delete'].includes(o)
			? (r = this.bindings.postgres_changes) === null ||
				r === void 0 ||
				r
					.filter((g) => {
						var y, b, S;
						return (
							((y = g.filter) === null || y === void 0 ? void 0 : y.event) === '*' ||
							((S = (b = g.filter) === null || b === void 0 ? void 0 : b.event) === null ||
							S === void 0
								? void 0
								: S.toLocaleLowerCase()) === o
						);
					})
					.map((g) => g.callback(f, s))
			: (i = this.bindings[o]) === null ||
				i === void 0 ||
				i
					.filter((g) => {
						var y, b, S, A, $, L;
						if (['broadcast', 'presence', 'postgres_changes'].includes(o))
							if ('id' in g) {
								const R = g.id,
									j = (y = g.filter) === null || y === void 0 ? void 0 : y.event;
								return (
									R &&
									((b = n.ids) === null || b === void 0 ? void 0 : b.includes(R)) &&
									(j === '*' ||
										(j == null ? void 0 : j.toLocaleLowerCase()) ===
											((S = n.data) === null || S === void 0 ? void 0 : S.type.toLocaleLowerCase()))
								);
							} else {
								const R =
									($ =
										(A = g == null ? void 0 : g.filter) === null || A === void 0
											? void 0
											: A.event) === null || $ === void 0
										? void 0
										: $.toLocaleLowerCase();
								return (
									R === '*' ||
									R ===
										((L = n == null ? void 0 : n.event) === null || L === void 0
											? void 0
											: L.toLocaleLowerCase())
								);
							}
						else return g.type.toLocaleLowerCase() === o;
					})
					.map((g) => {
						if (typeof f == 'object' && 'ids' in f) {
							const y = f.data,
								{ schema: b, table: S, commit_timestamp: A, type: $, errors: L } = y;
							f = Object.assign(
								Object.assign(
									{},
									{
										schema: b,
										table: S,
										commit_timestamp: A,
										eventType: $,
										new: {},
										old: {},
										errors: L,
									}
								),
								this._getPayloadRecords(y)
							);
						}
						g.callback(f, s);
					});
	}
	_isClosed() {
		return this.state === Ce.closed;
	}
	_isJoined() {
		return this.state === Ce.joined;
	}
	_isJoining() {
		return this.state === Ce.joining;
	}
	_isLeaving() {
		return this.state === Ce.leaving;
	}
	_replyEventName(e) {
		return `chan_reply_${e}`;
	}
	_on(e, n, s) {
		const r = e.toLocaleLowerCase(),
			i = { type: r, filter: n, callback: s };
		return this.bindings[r] ? this.bindings[r].push(i) : (this.bindings[r] = [i]), this;
	}
	_off(e, n) {
		const s = e.toLocaleLowerCase();
		return (
			(this.bindings[s] = this.bindings[s].filter((r) => {
				var i;
				return !(
					((i = r.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === s &&
					Kr.isEqual(r.filter, n)
				);
			})),
			this
		);
	}
	static isEqual(e, n) {
		if (Object.keys(e).length !== Object.keys(n).length) return !1;
		for (const s in e) if (e[s] !== n[s]) return !1;
		return !0;
	}
	_rejoinUntilConnected() {
		this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
	}
	_onClose(e) {
		this._on(Fe.close, {}, e);
	}
	_onError(e) {
		this._on(Fe.error, {}, (n) => e(n));
	}
	_canPush() {
		return this.socket.isConnected() && this._isJoined();
	}
	_rejoin(e = this.timeout) {
		this._isLeaving() ||
			(this.socket._leaveOpenTopic(this.topic), (this.state = Ce.joining), this.joinPush.resend(e));
	}
	_getPayloadRecords(e) {
		const n = { new: {}, old: {} };
		return (
			(e.type === 'INSERT' || e.type === 'UPDATE') && (n.new = Qi(e.columns, e.record)),
			(e.type === 'UPDATE' || e.type === 'DELETE') && (n.old = Qi(e.columns, e.old_record)),
			n
		);
	}
}
const wf = () => {},
	kf = typeof WebSocket < 'u';
class Ef {
	constructor(e, n) {
		var s;
		(this.accessToken = null),
			(this.channels = []),
			(this.endPoint = ''),
			(this.headers = hf),
			(this.params = {}),
			(this.timeout = ja),
			(this.heartbeatIntervalMs = 3e4),
			(this.heartbeatTimer = void 0),
			(this.pendingHeartbeatRef = null),
			(this.ref = 0),
			(this.logger = wf),
			(this.conn = null),
			(this.sendBuffer = []),
			(this.serializer = new pf()),
			(this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
			(this._resolveFetch = (i) => {
				let o;
				return (
					i
						? (o = i)
						: typeof fetch > 'u'
							? (o = (...a) =>
									se(() => Promise.resolve().then(() => Dn), void 0).then(({ default: l }) =>
										l(...a)
									))
							: (o = fetch),
					(...a) => o(...a)
				);
			}),
			(this.endPoint = `${e}/${fr.websocket}`),
			n != null && n.transport ? (this.transport = n.transport) : (this.transport = null),
			n != null && n.params && (this.params = n.params),
			n != null &&
				n.headers &&
				(this.headers = Object.assign(Object.assign({}, this.headers), n.headers)),
			n != null && n.timeout && (this.timeout = n.timeout),
			n != null && n.logger && (this.logger = n.logger),
			n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
		const r = (s = n == null ? void 0 : n.params) === null || s === void 0 ? void 0 : s.apikey;
		r && (this.accessToken = r),
			(this.reconnectAfterMs =
				n != null && n.reconnectAfterMs
					? n.reconnectAfterMs
					: (i) => [1e3, 2e3, 5e3, 1e4][i - 1] || 1e4),
			(this.encode = n != null && n.encode ? n.encode : (i, o) => o(JSON.stringify(i))),
			(this.decode =
				n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer)),
			(this.reconnectTimer = new La(async () => {
				this.disconnect(), this.connect();
			}, this.reconnectAfterMs)),
			(this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
	}
	connect() {
		if (!this.conn) {
			if (this.transport) {
				this.conn = new this.transport(this._endPointURL(), void 0, { headers: this.headers });
				return;
			}
			if (kf) {
				(this.conn = new WebSocket(this._endPointURL())), this.setupConnection();
				return;
			}
			(this.conn = new Sf(this._endPointURL(), void 0, {
				close: () => {
					this.conn = null;
				},
			})),
				se(() => import('./browser-06aa05b2.js').then((e) => e.b), []).then(({ default: e }) => {
					(this.conn = new e(this._endPointURL(), void 0, { headers: this.headers })),
						this.setupConnection();
				});
		}
	}
	disconnect(e, n) {
		this.conn &&
			((this.conn.onclose = function () {}),
			e ? this.conn.close(e, n ?? '') : this.conn.close(),
			(this.conn = null),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.reset());
	}
	getChannels() {
		return this.channels;
	}
	async removeChannel(e) {
		const n = await e.unsubscribe();
		return this.channels.length === 0 && this.disconnect(), n;
	}
	async removeAllChannels() {
		const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
		return this.disconnect(), e;
	}
	log(e, n, s) {
		this.logger(e, n, s);
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case sn.connecting:
				return Ot.Connecting;
			case sn.open:
				return Ot.Open;
			case sn.closing:
				return Ot.Closing;
			default:
				return Ot.Closed;
		}
	}
	isConnected() {
		return this.connectionState() === Ot.Open;
	}
	channel(e, n = { config: {} }) {
		const s = new Kr(`realtime:${e}`, n, this);
		return this.channels.push(s), s;
	}
	push(e) {
		const { topic: n, event: s, payload: r, ref: i } = e,
			o = () => {
				this.encode(e, (a) => {
					var l;
					(l = this.conn) === null || l === void 0 || l.send(a);
				});
			};
		this.log('push', `${n} ${s} (${i})`, r), this.isConnected() ? o() : this.sendBuffer.push(o);
	}
	setAuth(e) {
		(this.accessToken = e),
			this.channels.forEach((n) => {
				e && n.updateJoinPayload({ access_token: e }),
					n.joinedOnce && n._isJoined() && n._push(Fe.access_token, { access_token: e });
			});
	}
	_makeRef() {
		let e = this.ref + 1;
		return e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString();
	}
	_leaveOpenTopic(e) {
		let n = this.channels.find((s) => s.topic === e && (s._isJoined() || s._isJoining()));
		n && (this.log('transport', `leaving duplicate topic "${e}"`), n.unsubscribe());
	}
	_remove(e) {
		this.channels = this.channels.filter((n) => n._joinRef() !== e._joinRef());
	}
	setupConnection() {
		this.conn &&
			((this.conn.binaryType = 'arraybuffer'),
			(this.conn.onopen = () => this._onConnOpen()),
			(this.conn.onerror = (e) => this._onConnError(e)),
			(this.conn.onmessage = (e) => this._onConnMessage(e)),
			(this.conn.onclose = (e) => this._onConnClose(e)));
	}
	_endPointURL() {
		return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: ff }));
	}
	_onConnMessage(e) {
		this.decode(e.data, (n) => {
			let { topic: s, event: r, payload: i, ref: o } = n;
			((o && o === this.pendingHeartbeatRef) || r === (i == null ? void 0 : i.type)) &&
				(this.pendingHeartbeatRef = null),
				this.log('receive', `${i.status || ''} ${s} ${r} ${(o && '(' + o + ')') || ''}`, i),
				this.channels.filter((a) => a._isMember(s)).forEach((a) => a._trigger(r, i, o)),
				this.stateChangeCallbacks.message.forEach((a) => a(n));
		});
	}
	_onConnOpen() {
		this.log('transport', `connected to ${this._endPointURL()}`),
			this._flushSendBuffer(),
			this.reconnectTimer.reset(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			(this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs)),
			this.stateChangeCallbacks.open.forEach((e) => e());
	}
	_onConnClose(e) {
		this.log('transport', 'close', e),
			this._triggerChanError(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.scheduleTimeout(),
			this.stateChangeCallbacks.close.forEach((n) => n(e));
	}
	_onConnError(e) {
		this.log('transport', e.message),
			this._triggerChanError(),
			this.stateChangeCallbacks.error.forEach((n) => n(e));
	}
	_triggerChanError() {
		this.channels.forEach((e) => e._trigger(Fe.error));
	}
	_appendParams(e, n) {
		if (Object.keys(n).length === 0) return e;
		const s = e.match(/\?/) ? '&' : '?',
			r = new URLSearchParams(n);
		return `${e}${s}${r}`;
	}
	_flushSendBuffer() {
		this.isConnected() &&
			this.sendBuffer.length > 0 &&
			(this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
	}
	_sendHeartbeat() {
		var e;
		if (this.isConnected()) {
			if (this.pendingHeartbeatRef) {
				(this.pendingHeartbeatRef = null),
					this.log('transport', 'heartbeat timeout. Attempting to re-establish connection'),
					(e = this.conn) === null || e === void 0 || e.close(df, 'hearbeat timeout');
				return;
			}
			(this.pendingHeartbeatRef = this._makeRef()),
				this.push({
					topic: 'phoenix',
					event: 'heartbeat',
					payload: {},
					ref: this.pendingHeartbeatRef,
				}),
				this.setAuth(this.accessToken);
		}
	}
}
class Sf {
	constructor(e, n, s) {
		(this.binaryType = 'arraybuffer'),
			(this.onclose = () => {}),
			(this.onerror = () => {}),
			(this.onmessage = () => {}),
			(this.onopen = () => {}),
			(this.readyState = sn.connecting),
			(this.send = () => {}),
			(this.url = null),
			(this.url = e),
			(this.close = s.close);
	}
}
class Wr extends Error {
	constructor(e) {
		super(e), (this.__isStorageError = !0), (this.name = 'StorageError');
	}
}
function ke(t) {
	return typeof t == 'object' && t !== null && '__isStorageError' in t;
}
class Tf extends Wr {
	constructor(e, n) {
		super(e), (this.name = 'StorageApiError'), (this.status = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class to extends Wr {
	constructor(e, n) {
		super(e), (this.name = 'StorageUnknownError'), (this.originalError = n);
	}
}
var Rf =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
const Na = (t) => {
		let e;
		return (
			t
				? (e = t)
				: typeof fetch > 'u'
					? (e = (...n) =>
							se(() => Promise.resolve().then(() => Dn), void 0).then(({ default: s }) => s(...n)))
					: (e = fetch),
			(...n) => e(...n)
		);
	},
	Af = () =>
		Rf(void 0, void 0, void 0, function* () {
			return typeof Response > 'u'
				? (yield se(() => Promise.resolve().then(() => Dn), void 0)).Response
				: Response;
		});
var fn =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
const Us = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
	Of = (t, e) =>
		fn(void 0, void 0, void 0, function* () {
			const n = yield Af();
			t instanceof n
				? t
						.json()
						.then((s) => {
							e(new Tf(Us(s), t.status || 500));
						})
						.catch((s) => {
							e(new to(Us(s), s));
						})
				: e(new to(Us(t), t));
		}),
	Pf = (t, e, n, s) => {
		const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
		return t === 'GET'
			? r
			: ((r.headers = Object.assign(
					{ 'Content-Type': 'application/json' },
					e == null ? void 0 : e.headers
				)),
				(r.body = JSON.stringify(s)),
				Object.assign(Object.assign({}, r), n));
	};
function Rs(t, e, n, s, r, i) {
	return fn(this, void 0, void 0, function* () {
		return new Promise((o, a) => {
			t(n, Pf(e, s, r, i))
				.then((l) => {
					if (!l.ok) throw l;
					return s != null && s.noResolveJson ? l : l.json();
				})
				.then((l) => o(l))
				.catch((l) => Of(l, a));
		});
	});
}
function pr(t, e, n, s) {
	return fn(this, void 0, void 0, function* () {
		return Rs(t, 'GET', e, n, s);
	});
}
function ut(t, e, n, s, r) {
	return fn(this, void 0, void 0, function* () {
		return Rs(t, 'POST', e, s, r, n);
	});
}
function xf(t, e, n, s, r) {
	return fn(this, void 0, void 0, function* () {
		return Rs(t, 'PUT', e, s, r, n);
	});
}
function Da(t, e, n, s, r) {
	return fn(this, void 0, void 0, function* () {
		return Rs(t, 'DELETE', e, s, r, n);
	});
}
var Le =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
const Cf = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
	no = { cacheControl: '3600', contentType: 'text/plain;charset=UTF-8', upsert: !1 };
class If {
	constructor(e, n = {}, s, r) {
		(this.url = e), (this.headers = n), (this.bucketId = s), (this.fetch = Na(r));
	}
	uploadOrUpdate(e, n, s, r) {
		return Le(this, void 0, void 0, function* () {
			try {
				let i;
				const o = Object.assign(Object.assign({}, no), r),
					a = Object.assign(
						Object.assign({}, this.headers),
						e === 'POST' && { 'x-upsert': String(o.upsert) }
					);
				typeof Blob < 'u' && s instanceof Blob
					? ((i = new FormData()), i.append('cacheControl', o.cacheControl), i.append('', s))
					: typeof FormData < 'u' && s instanceof FormData
						? ((i = s), i.append('cacheControl', o.cacheControl))
						: ((i = s),
							(a['cache-control'] = `max-age=${o.cacheControl}`),
							(a['content-type'] = o.contentType));
				const l = this._removeEmptyFolders(n),
					c = this._getFinalPath(l),
					u = yield this.fetch(
						`${this.url}/object/${c}`,
						Object.assign(
							{ method: e, body: i, headers: a },
							o != null && o.duplex ? { duplex: o.duplex } : {}
						)
					),
					h = yield u.json();
				return u.ok
					? { data: { path: l, id: h.Id, fullPath: h.Key }, error: null }
					: { data: null, error: h };
			} catch (i) {
				if (ke(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	upload(e, n, s) {
		return Le(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('POST', e, n, s);
		});
	}
	uploadToSignedUrl(e, n, s, r) {
		return Le(this, void 0, void 0, function* () {
			const i = this._removeEmptyFolders(e),
				o = this._getFinalPath(i),
				a = new URL(this.url + `/object/upload/sign/${o}`);
			a.searchParams.set('token', n);
			try {
				let l;
				const c = Object.assign({ upsert: no.upsert }, r),
					u = Object.assign(Object.assign({}, this.headers), { 'x-upsert': String(c.upsert) });
				typeof Blob < 'u' && s instanceof Blob
					? ((l = new FormData()), l.append('cacheControl', c.cacheControl), l.append('', s))
					: typeof FormData < 'u' && s instanceof FormData
						? ((l = s), l.append('cacheControl', c.cacheControl))
						: ((l = s),
							(u['cache-control'] = `max-age=${c.cacheControl}`),
							(u['content-type'] = c.contentType));
				const h = yield this.fetch(a.toString(), { method: 'PUT', body: l, headers: u }),
					f = yield h.json();
				return h.ok
					? { data: { path: i, fullPath: f.Key }, error: null }
					: { data: null, error: f };
			} catch (l) {
				if (ke(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	createSignedUploadUrl(e) {
		return Le(this, void 0, void 0, function* () {
			try {
				let n = this._getFinalPath(e);
				const s = yield ut(
						this.fetch,
						`${this.url}/object/upload/sign/${n}`,
						{},
						{ headers: this.headers }
					),
					r = new URL(this.url + s.url),
					i = r.searchParams.get('token');
				if (!i) throw new Wr('No token returned by API');
				return { data: { signedUrl: r.toString(), path: e, token: i }, error: null };
			} catch (n) {
				if (ke(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	update(e, n, s) {
		return Le(this, void 0, void 0, function* () {
			return this.uploadOrUpdate('PUT', e, n, s);
		});
	}
	move(e, n) {
		return Le(this, void 0, void 0, function* () {
			try {
				return {
					data: yield ut(
						this.fetch,
						`${this.url}/object/move`,
						{ bucketId: this.bucketId, sourceKey: e, destinationKey: n },
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (s) {
				if (ke(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	copy(e, n) {
		return Le(this, void 0, void 0, function* () {
			try {
				return {
					data: {
						path: (yield ut(
							this.fetch,
							`${this.url}/object/copy`,
							{ bucketId: this.bucketId, sourceKey: e, destinationKey: n },
							{ headers: this.headers }
						)).Key,
					},
					error: null,
				};
			} catch (s) {
				if (ke(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	createSignedUrl(e, n, s) {
		return Le(this, void 0, void 0, function* () {
			try {
				let r = this._getFinalPath(e),
					i = yield ut(
						this.fetch,
						`${this.url}/object/sign/${r}`,
						Object.assign(
							{ expiresIn: n },
							s != null && s.transform ? { transform: s.transform } : {}
						),
						{ headers: this.headers }
					);
				const o = s != null && s.download ? `&download=${s.download === !0 ? '' : s.download}` : '';
				return (
					(i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }), { data: i, error: null }
				);
			} catch (r) {
				if (ke(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	createSignedUrls(e, n, s) {
		return Le(this, void 0, void 0, function* () {
			try {
				const r = yield ut(
						this.fetch,
						`${this.url}/object/sign/${this.bucketId}`,
						{ expiresIn: n, paths: e },
						{ headers: this.headers }
					),
					i = s != null && s.download ? `&download=${s.download === !0 ? '' : s.download}` : '';
				return {
					data: r.map((o) =>
						Object.assign(Object.assign({}, o), {
							signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null,
						})
					),
					error: null,
				};
			} catch (r) {
				if (ke(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	download(e, n) {
		return Le(this, void 0, void 0, function* () {
			const r =
					typeof (n == null ? void 0 : n.transform) < 'u' ? 'render/image/authenticated' : 'object',
				i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {}),
				o = i ? `?${i}` : '';
			try {
				const a = this._getFinalPath(e);
				return {
					data: yield (yield pr(this.fetch, `${this.url}/${r}/${a}${o}`, {
						headers: this.headers,
						noResolveJson: !0,
					})).blob(),
					error: null,
				};
			} catch (a) {
				if (ke(a)) return { data: null, error: a };
				throw a;
			}
		});
	}
	getPublicUrl(e, n) {
		const s = this._getFinalPath(e),
			r = [],
			i = n != null && n.download ? `download=${n.download === !0 ? '' : n.download}` : '';
		i !== '' && r.push(i);
		const a = typeof (n == null ? void 0 : n.transform) < 'u' ? 'render/image' : 'object',
			l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
		l !== '' && r.push(l);
		let c = r.join('&');
		return (
			c !== '' && (c = `?${c}`),
			{ data: { publicUrl: encodeURI(`${this.url}/${a}/public/${s}${c}`) } }
		);
	}
	remove(e) {
		return Le(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Da(
						this.fetch,
						`${this.url}/object/${this.bucketId}`,
						{ prefixes: e },
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (ke(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	list(e, n, s) {
		return Le(this, void 0, void 0, function* () {
			try {
				const r = Object.assign(Object.assign(Object.assign({}, Cf), n), { prefix: e || '' });
				return {
					data: yield ut(
						this.fetch,
						`${this.url}/object/list/${this.bucketId}`,
						r,
						{ headers: this.headers },
						s
					),
					error: null,
				};
			} catch (r) {
				if (ke(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	_getFinalPath(e) {
		return `${this.bucketId}/${e}`;
	}
	_removeEmptyFolders(e) {
		return e.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
	}
	transformOptsToQueryString(e) {
		const n = [];
		return (
			e.width && n.push(`width=${e.width}`),
			e.height && n.push(`height=${e.height}`),
			e.resize && n.push(`resize=${e.resize}`),
			e.format && n.push(`format=${e.format}`),
			e.quality && n.push(`quality=${e.quality}`),
			n.join('&')
		);
	}
}
const $f = '2.5.5',
	jf = { 'X-Client-Info': `storage-js/${$f}` };
var Ht =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
class Lf {
	constructor(e, n = {}, s) {
		(this.url = e), (this.headers = Object.assign(Object.assign({}, jf), n)), (this.fetch = Na(s));
	}
	listBuckets() {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield pr(this.fetch, `${this.url}/bucket`, { headers: this.headers }),
					error: null,
				};
			} catch (e) {
				if (ke(e)) return { data: null, error: e };
				throw e;
			}
		});
	}
	getBucket(e) {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield pr(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
					error: null,
				};
			} catch (n) {
				if (ke(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	createBucket(e, n = { public: !1 }) {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield ut(
						this.fetch,
						`${this.url}/bucket`,
						{
							id: e,
							name: e,
							public: n.public,
							file_size_limit: n.fileSizeLimit,
							allowed_mime_types: n.allowedMimeTypes,
						},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (s) {
				if (ke(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	updateBucket(e, n) {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield xf(
						this.fetch,
						`${this.url}/bucket/${e}`,
						{
							id: e,
							name: e,
							public: n.public,
							file_size_limit: n.fileSizeLimit,
							allowed_mime_types: n.allowedMimeTypes,
						},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (s) {
				if (ke(s)) return { data: null, error: s };
				throw s;
			}
		});
	}
	emptyBucket(e) {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield ut(
						this.fetch,
						`${this.url}/bucket/${e}/empty`,
						{},
						{ headers: this.headers }
					),
					error: null,
				};
			} catch (n) {
				if (ke(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	deleteBucket(e) {
		return Ht(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Da(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }),
					error: null,
				};
			} catch (n) {
				if (ke(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
}
class qf extends Lf {
	constructor(e, n = {}, s) {
		super(e, n, s);
	}
	from(e) {
		return new If(this.url, this.headers, e, this.fetch);
	}
}
const Nf = '2.39.2';
let yn = '';
typeof Deno < 'u'
	? (yn = 'deno')
	: typeof document < 'u'
		? (yn = 'web')
		: typeof navigator < 'u' && navigator.product === 'ReactNative'
			? (yn = 'react-native')
			: (yn = 'node');
const Df = { 'X-Client-Info': `supabase-js-${yn}/${Nf}` };
var Uf =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
const Mf = (t) => {
		let e;
		return t ? (e = t) : typeof fetch > 'u' ? (e = Hr) : (e = fetch), (...n) => e(...n);
	},
	Ff = () => (typeof Headers > 'u' ? $a : Headers),
	Bf = (t, e, n) => {
		const s = Mf(n),
			r = Ff();
		return (i, o) =>
			Uf(void 0, void 0, void 0, function* () {
				var a;
				const l = (a = yield e()) !== null && a !== void 0 ? a : t;
				let c = new r(o == null ? void 0 : o.headers);
				return (
					c.has('apikey') || c.set('apikey', t),
					c.has('Authorization') || c.set('Authorization', `Bearer ${l}`),
					s(i, Object.assign(Object.assign({}, o), { headers: c }))
				);
			});
	};
function Hf(t) {
	return t.replace(/\/$/, '');
}
function Vf(t, e) {
	const { db: n, auth: s, realtime: r, global: i } = t,
		{ db: o, auth: a, realtime: l, global: c } = e;
	return {
		db: Object.assign(Object.assign({}, o), n),
		auth: Object.assign(Object.assign({}, a), s),
		realtime: Object.assign(Object.assign({}, l), r),
		global: Object.assign(Object.assign({}, c), i),
	};
}
function Kf(t) {
	return Math.round(Date.now() / 1e3) + t;
}
function Wf() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
		const e = (Math.random() * 16) | 0;
		return (t == 'x' ? e : (e & 3) | 8).toString(16);
	});
}
const Me = () => typeof document < 'u',
	Et = { tested: !1, writable: !1 },
	Rn = () => {
		if (!Me()) return !1;
		try {
			if (typeof globalThis.localStorage != 'object') return !1;
		} catch {
			return !1;
		}
		if (Et.tested) return Et.writable;
		const t = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(t, t),
				globalThis.localStorage.removeItem(t),
				(Et.tested = !0),
				(Et.writable = !0);
		} catch {
			(Et.tested = !0), (Et.writable = !1);
		}
		return Et.writable;
	};
function Ms(t) {
	const e = {},
		n = new URL(t);
	if (n.hash && n.hash[0] === '#')
		try {
			new URLSearchParams(n.hash.substring(1)).forEach((r, i) => {
				e[i] = r;
			});
		} catch {}
	return (
		n.searchParams.forEach((s, r) => {
			e[r] = s;
		}),
		e
	);
}
const Ua = (t) => {
		let e;
		return (
			t
				? (e = t)
				: typeof fetch > 'u'
					? (e = (...n) =>
							se(() => Promise.resolve().then(() => Dn), void 0).then(({ default: s }) => s(...n)))
					: (e = fetch),
			(...n) => e(...n)
		);
	},
	Gf = (t) =>
		typeof t == 'object' &&
		t !== null &&
		'status' in t &&
		'ok' in t &&
		'json' in t &&
		typeof t.json == 'function',
	St = async (t, e, n) => {
		await t.setItem(e, JSON.stringify(n));
	},
	Wn = async (t, e) => {
		const n = await t.getItem(e);
		if (!n) return null;
		try {
			return JSON.parse(n);
		} catch {
			return n;
		}
	},
	Fs = async (t, e) => {
		await t.removeItem(e);
	};
function zf(t) {
	const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	let n = '',
		s,
		r,
		i,
		o,
		a,
		l,
		c,
		u = 0;
	for (t = t.replace('-', '+').replace('_', '/'); u < t.length; )
		(o = e.indexOf(t.charAt(u++))),
			(a = e.indexOf(t.charAt(u++))),
			(l = e.indexOf(t.charAt(u++))),
			(c = e.indexOf(t.charAt(u++))),
			(s = (o << 2) | (a >> 4)),
			(r = ((a & 15) << 4) | (l >> 2)),
			(i = ((l & 3) << 6) | c),
			(n = n + String.fromCharCode(s)),
			l != 64 && r != 0 && (n = n + String.fromCharCode(r)),
			c != 64 && i != 0 && (n = n + String.fromCharCode(i));
	return n;
}
class As {
	constructor() {
		this.promise = new As.promiseConstructor((e, n) => {
			(this.resolve = e), (this.reject = n);
		});
	}
}
As.promiseConstructor = Promise;
function so(t) {
	const e = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
		n = t.split('.');
	if (n.length !== 3) throw new Error('JWT is not valid: not a JWT structure');
	if (!e.test(n[1])) throw new Error('JWT is not valid: payload is not in base64url format');
	const s = n[1];
	return JSON.parse(zf(s));
}
async function Jf(t) {
	return await new Promise((e) => {
		setTimeout(() => e(null), t);
	});
}
function Yf(t, e) {
	return new Promise((s, r) => {
		(async () => {
			for (let i = 0; i < 1 / 0; i++)
				try {
					const o = await t(i);
					if (!e(i, null, o)) {
						s(o);
						return;
					}
				} catch (o) {
					if (!e(i, o)) {
						r(o);
						return;
					}
				}
		})();
	});
}
function Qf(t) {
	return ('0' + t.toString(16)).substr(-2);
}
function Vt() {
	const e = new Uint32Array(56);
	if (typeof crypto > 'u') {
		const n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
			s = n.length;
		let r = '';
		for (let i = 0; i < 56; i++) r += n.charAt(Math.floor(Math.random() * s));
		return r;
	}
	return crypto.getRandomValues(e), Array.from(e, Qf).join('');
}
async function Xf(t) {
	const n = new TextEncoder().encode(t),
		s = await crypto.subtle.digest('SHA-256', n),
		r = new Uint8Array(s);
	return Array.from(r)
		.map((i) => String.fromCharCode(i))
		.join('');
}
function Zf(t) {
	return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function Kt(t) {
	if (!(typeof crypto < 'u' && typeof crypto.subtle < 'u' && typeof TextEncoder < 'u'))
		return (
			console.warn(
				'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
			),
			t
		);
	const n = await Xf(t);
	return Zf(n);
}
class Gr extends Error {
	constructor(e, n) {
		super(e), (this.__isAuthError = !0), (this.name = 'AuthError'), (this.status = n);
	}
}
function W(t) {
	return typeof t == 'object' && t !== null && '__isAuthError' in t;
}
class ed extends Gr {
	constructor(e, n) {
		super(e, n), (this.name = 'AuthApiError'), (this.status = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
function td(t) {
	return W(t) && t.name === 'AuthApiError';
}
class Ma extends Gr {
	constructor(e, n) {
		super(e), (this.name = 'AuthUnknownError'), (this.originalError = n);
	}
}
class Dt extends Gr {
	constructor(e, n, s) {
		super(e), (this.name = n), (this.status = s);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class Wt extends Dt {
	constructor() {
		super('Auth session missing!', 'AuthSessionMissingError', 400);
	}
}
class Bs extends Dt {
	constructor() {
		super('Auth session or user missing', 'AuthInvalidTokenResponseError', 500);
	}
}
class Gn extends Dt {
	constructor(e) {
		super(e, 'AuthInvalidCredentialsError', 400);
	}
}
class zn extends Dt {
	constructor(e, n = null) {
		super(e, 'AuthImplicitGrantRedirectError', 500), (this.details = null), (this.details = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status, details: this.details };
	}
}
class ro extends Dt {
	constructor(e, n = null) {
		super(e, 'AuthPKCEGrantCodeExchangeError', 500), (this.details = null), (this.details = n);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status, details: this.details };
	}
}
class gr extends Dt {
	constructor(e, n) {
		super(e, 'AuthRetryableFetchError', n);
	}
}
function Hs(t) {
	return W(t) && t.name === 'AuthRetryableFetchError';
}
class nd extends Dt {
	constructor(e, n, s) {
		super(e, 'AuthWeakPasswordError', n), (this.reasons = s);
	}
}
var sd =
	(globalThis && globalThis.__rest) ||
	function (t, e) {
		var n = {};
		for (var s in t)
			Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
		if (t != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++)
				e.indexOf(s[r]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(t, s[r]) &&
					(n[s[r]] = t[s[r]]);
		return n;
	};
const Yt = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
	rd = [502, 503, 504];
async function io(t) {
	if (!Gf(t)) throw new gr(Yt(t), 0);
	if (rd.includes(t.status)) throw new gr(Yt(t), t.status);
	let e;
	try {
		e = await t.json();
	} catch (n) {
		throw new Ma(Yt(n), n);
	}
	throw typeof e == 'object' &&
		e &&
		typeof e.weak_password == 'object' &&
		e.weak_password &&
		Array.isArray(e.weak_password.reasons) &&
		e.weak_password.reasons.length &&
		e.weak_password.reasons.reduce((n, s) => n && typeof s == 'string', !0)
		? new nd(Yt(e), t.status, e.weak_password.reasons)
		: new ed(Yt(e), t.status || 500);
}
const id = (t, e, n, s) => {
	const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
	return t === 'GET'
		? r
		: ((r.headers = Object.assign(
				{ 'Content-Type': 'application/json;charset=UTF-8' },
				e == null ? void 0 : e.headers
			)),
			(r.body = JSON.stringify(s)),
			Object.assign(Object.assign({}, r), n));
};
async function z(t, e, n, s) {
	var r;
	const i = Object.assign({}, s == null ? void 0 : s.headers);
	s != null && s.jwt && (i.Authorization = `Bearer ${s.jwt}`);
	const o = (r = s == null ? void 0 : s.query) !== null && r !== void 0 ? r : {};
	s != null && s.redirectTo && (o.redirect_to = s.redirectTo);
	const a = Object.keys(o).length ? '?' + new URLSearchParams(o).toString() : '',
		l = await od(
			t,
			e,
			n + a,
			{ headers: i, noResolveJson: s == null ? void 0 : s.noResolveJson },
			{},
			s == null ? void 0 : s.body
		);
	return s != null && s.xform
		? s == null
			? void 0
			: s.xform(l)
		: { data: Object.assign({}, l), error: null };
}
async function od(t, e, n, s, r, i) {
	const o = id(e, s, r, i);
	let a;
	try {
		a = await t(n, o);
	} catch (l) {
		throw (console.error(l), new gr(Yt(l), 0));
	}
	if ((a.ok || (await io(a)), s != null && s.noResolveJson)) return a;
	try {
		return await a.json();
	} catch (l) {
		await io(l);
	}
}
function Tt(t) {
	var e;
	let n = null;
	ud(t) && ((n = Object.assign({}, t)), t.expires_at || (n.expires_at = Kf(t.expires_in)));
	const s = (e = t.user) !== null && e !== void 0 ? e : t;
	return { data: { session: n, user: s }, error: null };
}
function oo(t) {
	const e = Tt(t);
	return (
		!e.error &&
			t.weak_password &&
			typeof t.weak_password == 'object' &&
			Array.isArray(t.weak_password.reasons) &&
			t.weak_password.reasons.length &&
			t.weak_password.message &&
			typeof t.weak_password.message == 'string' &&
			t.weak_password.reasons.reduce((n, s) => n && typeof s == 'string', !0) &&
			(e.data.weak_password = t.weak_password),
		e
	);
}
function dt(t) {
	var e;
	return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function ad(t) {
	return { data: t, error: null };
}
function ld(t) {
	const { action_link: e, email_otp: n, hashed_token: s, redirect_to: r, verification_type: i } = t,
		o = sd(t, ['action_link', 'email_otp', 'hashed_token', 'redirect_to', 'verification_type']),
		a = { action_link: e, email_otp: n, hashed_token: s, redirect_to: r, verification_type: i },
		l = Object.assign({}, o);
	return { data: { properties: a, user: l }, error: null };
}
function cd(t) {
	return t;
}
function ud(t) {
	return t.access_token && t.refresh_token && t.expires_in;
}
var hd =
	(globalThis && globalThis.__rest) ||
	function (t, e) {
		var n = {};
		for (var s in t)
			Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
		if (t != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++)
				e.indexOf(s[r]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(t, s[r]) &&
					(n[s[r]] = t[s[r]]);
		return n;
	};
class fd {
	constructor({ url: e = '', headers: n = {}, fetch: s }) {
		(this.url = e),
			(this.headers = n),
			(this.fetch = Ua(s)),
			(this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this),
			});
	}
	async signOut(e, n = 'global') {
		try {
			return (
				await z(this.fetch, 'POST', `${this.url}/logout?scope=${n}`, {
					headers: this.headers,
					jwt: e,
					noResolveJson: !0,
				}),
				{ data: null, error: null }
			);
		} catch (s) {
			if (W(s)) return { data: null, error: s };
			throw s;
		}
	}
	async inviteUserByEmail(e, n = {}) {
		try {
			return await z(this.fetch, 'POST', `${this.url}/invite`, {
				body: { email: e, data: n.data },
				headers: this.headers,
				redirectTo: n.redirectTo,
				xform: dt,
			});
		} catch (s) {
			if (W(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async generateLink(e) {
		try {
			const { options: n } = e,
				s = hd(e, ['options']),
				r = Object.assign(Object.assign({}, s), n);
			return (
				'newEmail' in s && ((r.new_email = s == null ? void 0 : s.newEmail), delete r.newEmail),
				await z(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
					body: r,
					headers: this.headers,
					xform: ld,
					redirectTo: n == null ? void 0 : n.redirectTo,
				})
			);
		} catch (n) {
			if (W(n)) return { data: { properties: null, user: null }, error: n };
			throw n;
		}
	}
	async createUser(e) {
		try {
			return await z(this.fetch, 'POST', `${this.url}/admin/users`, {
				body: e,
				headers: this.headers,
				xform: dt,
			});
		} catch (n) {
			if (W(n)) return { data: { user: null }, error: n };
			throw n;
		}
	}
	async listUsers(e) {
		var n, s, r, i, o, a, l;
		try {
			const c = { nextPage: null, lastPage: 0, total: 0 },
				u = await z(this.fetch, 'GET', `${this.url}/admin/users`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page:
							(s =
								(n = e == null ? void 0 : e.page) === null || n === void 0
									? void 0
									: n.toString()) !== null && s !== void 0
								? s
								: '',
						per_page:
							(i =
								(r = e == null ? void 0 : e.perPage) === null || r === void 0
									? void 0
									: r.toString()) !== null && i !== void 0
								? i
								: '',
					},
					xform: cd,
				});
			if (u.error) throw u.error;
			const h = await u.json(),
				f = (o = u.headers.get('x-total-count')) !== null && o !== void 0 ? o : 0,
				g =
					(l = (a = u.headers.get('link')) === null || a === void 0 ? void 0 : a.split(',')) !==
						null && l !== void 0
						? l
						: [];
			return (
				g.length > 0 &&
					(g.forEach((y) => {
						const b = parseInt(y.split(';')[0].split('=')[1].substring(0, 1)),
							S = JSON.parse(y.split(';')[1].split('=')[1]);
						c[`${S}Page`] = b;
					}),
					(c.total = parseInt(f))),
				{ data: Object.assign(Object.assign({}, h), c), error: null }
			);
		} catch (c) {
			if (W(c)) return { data: { users: [] }, error: c };
			throw c;
		}
	}
	async getUserById(e) {
		try {
			return await z(this.fetch, 'GET', `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				xform: dt,
			});
		} catch (n) {
			if (W(n)) return { data: { user: null }, error: n };
			throw n;
		}
	}
	async updateUserById(e, n) {
		try {
			return await z(this.fetch, 'PUT', `${this.url}/admin/users/${e}`, {
				body: n,
				headers: this.headers,
				xform: dt,
			});
		} catch (s) {
			if (W(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async deleteUser(e, n = !1) {
		try {
			return await z(this.fetch, 'DELETE', `${this.url}/admin/users/${e}`, {
				headers: this.headers,
				body: { should_soft_delete: n },
				xform: dt,
			});
		} catch (s) {
			if (W(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	async _listFactors(e) {
		try {
			const { data: n, error: s } = await z(
				this.fetch,
				'GET',
				`${this.url}/admin/users/${e.userId}/factors`,
				{ headers: this.headers, xform: (r) => ({ data: { factors: r }, error: null }) }
			);
			return { data: n, error: s };
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
	async _deleteFactor(e) {
		try {
			return {
				data: await z(this.fetch, 'DELETE', `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
					headers: this.headers,
				}),
				error: null,
			};
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
}
const Fa = '2.62.0',
	dd = 'http://localhost:9999',
	pd = 'supabase.auth.token',
	gd = { 'X-Client-Info': `gotrue-js/${Fa}` },
	ao = 10,
	md = {
		getItem: (t) => (Rn() ? globalThis.localStorage.getItem(t) : null),
		setItem: (t, e) => {
			Rn() && globalThis.localStorage.setItem(t, e);
		},
		removeItem: (t) => {
			Rn() && globalThis.localStorage.removeItem(t);
		},
	};
function lo(t = {}) {
	return {
		getItem: (e) => t[e] || null,
		setItem: (e, n) => {
			t[e] = n;
		},
		removeItem: (e) => {
			delete t[e];
		},
	};
}
function _d() {
	if (typeof globalThis != 'object')
		try {
			Object.defineProperty(Object.prototype, '__magic__', {
				get: function () {
					return this;
				},
				configurable: !0,
			}),
				(__magic__.globalThis = __magic__),
				delete Object.prototype.__magic__;
		} catch {
			typeof self < 'u' && (self.globalThis = self);
		}
}
const Gt = {
	debug: !!(
		globalThis &&
		Rn() &&
		globalThis.localStorage &&
		globalThis.localStorage.getItem('supabase.gotrue-js.locks.debug') === 'true'
	),
};
class Ba extends Error {
	constructor(e) {
		super(e), (this.isAcquireTimeout = !0);
	}
}
class yd extends Ba {}
async function vd(t, e, n) {
	Gt.debug && console.log('@supabase/gotrue-js: navigatorLock: acquire lock', t, e);
	const s = new globalThis.AbortController();
	return (
		e > 0 &&
			setTimeout(() => {
				s.abort(),
					Gt.debug && console.log('@supabase/gotrue-js: navigatorLock acquire timed out', t);
			}, e),
		await globalThis.navigator.locks.request(
			t,
			e === 0 ? { mode: 'exclusive', ifAvailable: !0 } : { mode: 'exclusive', signal: s.signal },
			async (r) => {
				if (r) {
					Gt.debug && console.log('@supabase/gotrue-js: navigatorLock: acquired', t, r.name);
					try {
						return await n();
					} finally {
						Gt.debug && console.log('@supabase/gotrue-js: navigatorLock: released', t, r.name);
					}
				} else {
					if (e === 0)
						throw (
							(Gt.debug &&
								console.log('@supabase/gotrue-js: navigatorLock: not immediately available', t),
							new yd(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`))
						);
					if (Gt.debug)
						try {
							const i = await globalThis.navigator.locks.query();
							console.log(
								'@supabase/gotrue-js: Navigator LockManager state',
								JSON.stringify(i, null, '  ')
							);
						} catch (i) {
							console.warn(
								'@supabase/gotrue-js: Error when querying Navigator LockManager state',
								i
							);
						}
					return (
						console.warn(
							'@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
						),
						await n()
					);
				}
			}
		)
	);
}
_d();
const bd = {
		url: dd,
		storageKey: pd,
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		headers: gd,
		flowType: 'implicit',
		debug: !1,
	},
	mn = 30 * 1e3,
	co = 3;
async function uo(t, e, n) {
	return await n();
}
class jn {
	constructor(e) {
		var n, s;
		(this.memoryStorage = null),
			(this.stateChangeEmitters = new Map()),
			(this.autoRefreshTicker = null),
			(this.visibilityChangedCallback = null),
			(this.refreshingDeferred = null),
			(this.initializePromise = null),
			(this.detectSessionInUrl = !0),
			(this.lockAcquired = !1),
			(this.pendingInLock = []),
			(this.broadcastChannel = null),
			(this.logger = console.log),
			(this.instanceID = jn.nextInstanceID),
			(jn.nextInstanceID += 1),
			this.instanceID > 0 &&
				Me() &&
				console.warn(
					'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
				);
		const r = Object.assign(Object.assign({}, bd), e);
		if (
			((this.logDebugMessages = !!r.debug),
			typeof r.debug == 'function' && (this.logger = r.debug),
			(this.persistSession = r.persistSession),
			(this.storageKey = r.storageKey),
			(this.autoRefreshToken = r.autoRefreshToken),
			(this.admin = new fd({ url: r.url, headers: r.headers, fetch: r.fetch })),
			(this.url = r.url),
			(this.headers = r.headers),
			(this.fetch = Ua(r.fetch)),
			(this.lock = r.lock || uo),
			(this.detectSessionInUrl = r.detectSessionInUrl),
			(this.flowType = r.flowType),
			r.lock
				? (this.lock = r.lock)
				: Me() &&
					  !((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) &&
					  n.locks
					? (this.lock = vd)
					: (this.lock = uo),
			(this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
			}),
			this.persistSession
				? r.storage
					? (this.storage = r.storage)
					: Rn()
						? (this.storage = md)
						: ((this.memoryStorage = {}), (this.storage = lo(this.memoryStorage)))
				: ((this.memoryStorage = {}), (this.storage = lo(this.memoryStorage))),
			Me() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
		) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
			} catch (i) {
				console.error(
					'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
					i
				);
			}
			(s = this.broadcastChannel) === null ||
				s === void 0 ||
				s.addEventListener('message', async (i) => {
					this._debug('received broadcast notification from other tab or client', i),
						await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
				});
		}
		this.initialize();
	}
	_debug(...e) {
		return (
			this.logDebugMessages &&
				this.logger(`GoTrueClient@${this.instanceID} (${Fa}) ${new Date().toISOString()}`, ...e),
			this
		);
	}
	async initialize() {
		return this.initializePromise
			? await this.initializePromise
			: ((this.initializePromise = (async () =>
					await this._acquireLock(-1, async () => await this._initialize()))()),
				await this.initializePromise);
	}
	async _initialize() {
		try {
			const e = Me() ? await this._isPKCEFlow() : !1;
			if (
				(this._debug('#_initialize()', 'begin', 'is PKCE flow', e),
				e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
			) {
				const { data: n, error: s } = await this._getSessionFromURL(e);
				if (s)
					return (
						this._debug('#_initialize()', 'error detecting session from URL', s),
						(s == null ? void 0 : s.message) === 'Identity is already linked' ||
						(s == null ? void 0 : s.message) === 'Identity is already linked to another user'
							? { error: s }
							: (await this._removeSession(), { error: s })
					);
				const { session: r, redirectType: i } = n;
				return (
					this._debug('#_initialize()', 'detected session in URL', r, 'redirect type', i),
					await this._saveSession(r),
					setTimeout(async () => {
						i === 'recovery'
							? await this._notifyAllSubscribers('PASSWORD_RECOVERY', r)
							: await this._notifyAllSubscribers('SIGNED_IN', r);
					}, 0),
					{ error: null }
				);
			}
			return await this._recoverAndRefresh(), { error: null };
		} catch (e) {
			return W(e) ? { error: e } : { error: new Ma('Unexpected error during initialization', e) };
		} finally {
			await this._handleVisibilityChange(), this._debug('#_initialize()', 'end');
		}
	}
	async signUp(e) {
		var n, s, r;
		try {
			await this._removeSession();
			let i;
			if ('email' in e) {
				const { email: u, password: h, options: f } = e;
				let g = null,
					y = null;
				if (this.flowType === 'pkce') {
					const b = Vt();
					await St(this.storage, `${this.storageKey}-code-verifier`, b),
						(g = await Kt(b)),
						(y = b === g ? 'plain' : 's256');
				}
				i = await z(this.fetch, 'POST', `${this.url}/signup`, {
					headers: this.headers,
					redirectTo: f == null ? void 0 : f.emailRedirectTo,
					body: {
						email: u,
						password: h,
						data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
						gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
						code_challenge: g,
						code_challenge_method: y,
					},
					xform: Tt,
				});
			} else if ('phone' in e) {
				const { phone: u, password: h, options: f } = e;
				i = await z(this.fetch, 'POST', `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: u,
						password: h,
						data: (s = f == null ? void 0 : f.data) !== null && s !== void 0 ? s : {},
						channel: (r = f == null ? void 0 : f.channel) !== null && r !== void 0 ? r : 'sms',
						gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
					},
					xform: Tt,
				});
			} else throw new Gn('You must provide either an email or phone number and a password');
			const { data: o, error: a } = i;
			if (a || !o) return { data: { user: null, session: null }, error: a };
			const l = o.session,
				c = o.user;
			return (
				o.session &&
					(await this._saveSession(o.session), await this._notifyAllSubscribers('SIGNED_IN', l)),
				{ data: { user: c, session: l }, error: null }
			);
		} catch (i) {
			if (W(i)) return { data: { user: null, session: null }, error: i };
			throw i;
		}
	}
	async signInWithPassword(e) {
		try {
			await this._removeSession();
			let n;
			if ('email' in e) {
				const { email: i, password: o, options: a } = e;
				n = await z(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						email: i,
						password: o,
						gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken },
					},
					xform: oo,
				});
			} else if ('phone' in e) {
				const { phone: i, password: o, options: a } = e;
				n = await z(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
					headers: this.headers,
					body: {
						phone: i,
						password: o,
						gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken },
					},
					xform: oo,
				});
			} else throw new Gn('You must provide either an email or phone number and a password');
			const { data: s, error: r } = n;
			return r
				? { data: { user: null, session: null }, error: r }
				: !s || !s.session || !s.user
					? { data: { user: null, session: null }, error: new Bs() }
					: (s.session &&
							(await this._saveSession(s.session),
							await this._notifyAllSubscribers('SIGNED_IN', s.session)),
						{
							data: Object.assign(
								{ user: s.user, session: s.session },
								s.weak_password ? { weakPassword: s.weak_password } : null
							),
							error: r,
						});
		} catch (n) {
			if (W(n)) return { data: { user: null, session: null }, error: n };
			throw n;
		}
	}
	async signInWithOAuth(e) {
		var n, s, r, i;
		return (
			await this._removeSession(),
			await this._handleProviderSignIn(e.provider, {
				redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
				scopes: (s = e.options) === null || s === void 0 ? void 0 : s.scopes,
				queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
				skipBrowserRedirect:
					(i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect,
			})
		);
	}
	async exchangeCodeForSession(e) {
		return (
			await this.initializePromise,
			this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
		);
	}
	async _exchangeCodeForSession(e) {
		const n = await Wn(this.storage, `${this.storageKey}-code-verifier`),
			[s, r] = (n ?? '').split('/'),
			{ data: i, error: o } = await z(this.fetch, 'POST', `${this.url}/token?grant_type=pkce`, {
				headers: this.headers,
				body: { auth_code: e, code_verifier: s },
				xform: Tt,
			});
		return (
			await Fs(this.storage, `${this.storageKey}-code-verifier`),
			o
				? { data: { user: null, session: null, redirectType: null }, error: o }
				: !i || !i.session || !i.user
					? { data: { user: null, session: null, redirectType: null }, error: new Bs() }
					: (i.session &&
							(await this._saveSession(i.session),
							await this._notifyAllSubscribers('SIGNED_IN', i.session)),
						{ data: Object.assign(Object.assign({}, i), { redirectType: r ?? null }), error: o })
		);
	}
	async signInWithIdToken(e) {
		await this._removeSession();
		try {
			const { options: n, provider: s, token: r, access_token: i, nonce: o } = e,
				a = await z(this.fetch, 'POST', `${this.url}/token?grant_type=id_token`, {
					headers: this.headers,
					body: {
						provider: s,
						id_token: r,
						access_token: i,
						nonce: o,
						gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken },
					},
					xform: Tt,
				}),
				{ data: l, error: c } = a;
			return c
				? { data: { user: null, session: null }, error: c }
				: !l || !l.session || !l.user
					? { data: { user: null, session: null }, error: new Bs() }
					: (l.session &&
							(await this._saveSession(l.session),
							await this._notifyAllSubscribers('SIGNED_IN', l.session)),
						{ data: l, error: c });
		} catch (n) {
			if (W(n)) return { data: { user: null, session: null }, error: n };
			throw n;
		}
	}
	async signInWithOtp(e) {
		var n, s, r, i, o;
		try {
			if ((await this._removeSession(), 'email' in e)) {
				const { email: a, options: l } = e;
				let c = null,
					u = null;
				if (this.flowType === 'pkce') {
					const f = Vt();
					await St(this.storage, `${this.storageKey}-code-verifier`, f),
						(c = await Kt(f)),
						(u = f === c ? 'plain' : 's256');
				}
				const { error: h } = await z(this.fetch, 'POST', `${this.url}/otp`, {
					headers: this.headers,
					body: {
						email: a,
						data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
						create_user:
							(s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
						gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
						code_challenge: c,
						code_challenge_method: u,
					},
					redirectTo: l == null ? void 0 : l.emailRedirectTo,
				});
				return { data: { user: null, session: null }, error: h };
			}
			if ('phone' in e) {
				const { phone: a, options: l } = e,
					{ data: c, error: u } = await z(this.fetch, 'POST', `${this.url}/otp`, {
						headers: this.headers,
						body: {
							phone: a,
							data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
							create_user:
								(i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
							gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
							channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : 'sms',
						},
					});
				return {
					data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id },
					error: u,
				};
			}
			throw new Gn('You must provide either an email or phone number.');
		} catch (a) {
			if (W(a)) return { data: { user: null, session: null }, error: a };
			throw a;
		}
	}
	async verifyOtp(e) {
		var n, s;
		try {
			e.type !== 'email_change' && e.type !== 'phone_change' && (await this._removeSession());
			let r, i;
			'options' in e &&
				((r = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
				(i = (s = e.options) === null || s === void 0 ? void 0 : s.captchaToken));
			const { data: o, error: a } = await z(this.fetch, 'POST', `${this.url}/verify`, {
				headers: this.headers,
				body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
				redirectTo: r,
				xform: Tt,
			});
			if (a) throw a;
			if (!o) throw new Error('An error occurred on token verification.');
			const l = o.session,
				c = o.user;
			return (
				l != null &&
					l.access_token &&
					(await this._saveSession(l), await this._notifyAllSubscribers('SIGNED_IN', l)),
				{ data: { user: c, session: l }, error: null }
			);
		} catch (r) {
			if (W(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async signInWithSSO(e) {
		var n, s, r;
		try {
			await this._removeSession();
			let i = null,
				o = null;
			if (this.flowType === 'pkce') {
				const a = Vt();
				await St(this.storage, `${this.storageKey}-code-verifier`, a),
					(i = await Kt(a)),
					(o = a === i ? 'plain' : 's256');
			}
			return await z(this.fetch, 'POST', `${this.url}/sso`, {
				body: Object.assign(
					Object.assign(
						Object.assign(
							Object.assign(
								Object.assign({}, 'providerId' in e ? { provider_id: e.providerId } : null),
								'domain' in e ? { domain: e.domain } : null
							),
							{
								redirect_to:
									(s = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null &&
									s !== void 0
										? s
										: void 0,
							}
						),
						!((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken
							? { gotrue_meta_security: { captcha_token: e.options.captchaToken } }
							: null
					),
					{ skip_http_redirect: !0, code_challenge: i, code_challenge_method: o }
				),
				headers: this.headers,
				xform: ad,
			});
		} catch (i) {
			if (W(i)) return { data: null, error: i };
			throw i;
		}
	}
	async reauthenticate() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._reauthenticate())
		);
	}
	async _reauthenticate() {
		try {
			return await this._useSession(async (e) => {
				const {
					data: { session: n },
					error: s,
				} = e;
				if (s) throw s;
				if (!n) throw new Wt();
				const { error: r } = await z(this.fetch, 'GET', `${this.url}/reauthenticate`, {
					headers: this.headers,
					jwt: n.access_token,
				});
				return { data: { user: null, session: null }, error: r };
			});
		} catch (e) {
			if (W(e)) return { data: { user: null, session: null }, error: e };
			throw e;
		}
	}
	async resend(e) {
		try {
			e.type != 'email_change' && e.type != 'phone_change' && (await this._removeSession());
			const n = `${this.url}/resend`;
			if ('email' in e) {
				const { email: s, type: r, options: i } = e,
					{ error: o } = await z(this.fetch, 'POST', n, {
						headers: this.headers,
						body: {
							email: s,
							type: r,
							gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken },
						},
						redirectTo: i == null ? void 0 : i.emailRedirectTo,
					});
				return { data: { user: null, session: null }, error: o };
			} else if ('phone' in e) {
				const { phone: s, type: r, options: i } = e,
					{ data: o, error: a } = await z(this.fetch, 'POST', n, {
						headers: this.headers,
						body: {
							phone: s,
							type: r,
							gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken },
						},
					});
				return {
					data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id },
					error: a,
				};
			}
			throw new Gn('You must provide either an email or phone number and a type');
		} catch (n) {
			if (W(n)) return { data: { user: null, session: null }, error: n };
			throw n;
		}
	}
	async getSession() {
		return (
			await this.initializePromise,
			this._acquireLock(-1, async () => this._useSession(async (e) => e))
		);
	}
	async _acquireLock(e, n) {
		this._debug('#_acquireLock', 'begin', e);
		try {
			if (this.lockAcquired) {
				const s = this.pendingInLock.length
						? this.pendingInLock[this.pendingInLock.length - 1]
						: Promise.resolve(),
					r = (async () => (await s, await n()))();
				return (
					this.pendingInLock.push(
						(async () => {
							try {
								await r;
							} catch {}
						})()
					),
					r
				);
			}
			return await this.lock(`lock:${this.storageKey}`, e, async () => {
				this._debug('#_acquireLock', 'lock acquired for storage key', this.storageKey);
				try {
					this.lockAcquired = !0;
					const s = n();
					for (
						this.pendingInLock.push(
							(async () => {
								try {
									await s;
								} catch {}
							})()
						),
							await s;
						this.pendingInLock.length;

					) {
						const r = [...this.pendingInLock];
						await Promise.all(r), this.pendingInLock.splice(0, r.length);
					}
					return await s;
				} finally {
					this._debug('#_acquireLock', 'lock released for storage key', this.storageKey),
						(this.lockAcquired = !1);
				}
			});
		} finally {
			this._debug('#_acquireLock', 'end');
		}
	}
	async _useSession(e) {
		this._debug('#_useSession', 'begin');
		try {
			const n = await this.__loadSession();
			return await e(n);
		} finally {
			this._debug('#_useSession', 'end');
		}
	}
	async __loadSession() {
		this._debug('#__loadSession()', 'begin'),
			this.lockAcquired ||
				this._debug('#__loadSession()', 'used outside of an acquired lock!', new Error().stack);
		try {
			let e = null;
			const n = await Wn(this.storage, this.storageKey);
			if (
				(this._debug('#getSession()', 'session from storage', n),
				n !== null &&
					(this._isValidSession(n)
						? (e = n)
						: (this._debug('#getSession()', 'session from storage is not valid'),
							await this._removeSession())),
				!e)
			)
				return { data: { session: null }, error: null };
			const s = e.expires_at ? e.expires_at <= Date.now() / 1e3 : !1;
			if (
				(this._debug(
					'#__loadSession()',
					`session has${s ? '' : ' not'} expired`,
					'expires_at',
					e.expires_at
				),
				!s)
			)
				return { data: { session: e }, error: null };
			const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
			return i ? { data: { session: null }, error: i } : { data: { session: r }, error: null };
		} finally {
			this._debug('#__loadSession()', 'end');
		}
	}
	async getUser(e) {
		return e
			? await this._getUser(e)
			: (await this.initializePromise, this._acquireLock(-1, async () => await this._getUser()));
	}
	async _getUser(e) {
		try {
			return e
				? await z(this.fetch, 'GET', `${this.url}/user`, {
						headers: this.headers,
						jwt: e,
						xform: dt,
					})
				: await this._useSession(async (n) => {
						var s, r;
						const { data: i, error: o } = n;
						if (o) throw o;
						return await z(this.fetch, 'GET', `${this.url}/user`, {
							headers: this.headers,
							jwt:
								(r = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null &&
								r !== void 0
									? r
									: void 0,
							xform: dt,
						});
					});
		} catch (n) {
			if (W(n)) return { data: { user: null }, error: n };
			throw n;
		}
	}
	async updateUser(e, n = {}) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._updateUser(e, n))
		);
	}
	async _updateUser(e, n = {}) {
		try {
			return await this._useSession(async (s) => {
				const { data: r, error: i } = s;
				if (i) throw i;
				if (!r.session) throw new Wt();
				const o = r.session;
				let a = null,
					l = null;
				if (this.flowType === 'pkce' && e.email != null) {
					const h = Vt();
					await St(this.storage, `${this.storageKey}-code-verifier`, h),
						(a = await Kt(h)),
						(l = h === a ? 'plain' : 's256');
				}
				const { data: c, error: u } = await z(this.fetch, 'PUT', `${this.url}/user`, {
					headers: this.headers,
					redirectTo: n == null ? void 0 : n.emailRedirectTo,
					body: Object.assign(Object.assign({}, e), {
						code_challenge: a,
						code_challenge_method: l,
					}),
					jwt: o.access_token,
					xform: dt,
				});
				if (u) throw u;
				return (
					(o.user = c.user),
					await this._saveSession(o),
					await this._notifyAllSubscribers('USER_UPDATED', o),
					{ data: { user: o.user }, error: null }
				);
			});
		} catch (s) {
			if (W(s)) return { data: { user: null }, error: s };
			throw s;
		}
	}
	_decodeJWT(e) {
		return so(e);
	}
	async setSession(e) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._setSession(e))
		);
	}
	async _setSession(e) {
		try {
			if (!e.access_token || !e.refresh_token) throw new Wt();
			const n = Date.now() / 1e3;
			let s = n,
				r = !0,
				i = null;
			const o = so(e.access_token);
			if ((o.exp && ((s = o.exp), (r = s <= n)), r)) {
				const { session: a, error: l } = await this._callRefreshToken(e.refresh_token);
				if (l) return { data: { user: null, session: null }, error: l };
				if (!a) return { data: { user: null, session: null }, error: null };
				i = a;
			} else {
				const { data: a, error: l } = await this._getUser(e.access_token);
				if (l) throw l;
				(i = {
					access_token: e.access_token,
					refresh_token: e.refresh_token,
					user: a.user,
					token_type: 'bearer',
					expires_in: s - n,
					expires_at: s,
				}),
					await this._saveSession(i),
					await this._notifyAllSubscribers('SIGNED_IN', i);
			}
			return { data: { user: i.user, session: i }, error: null };
		} catch (n) {
			if (W(n)) return { data: { session: null, user: null }, error: n };
			throw n;
		}
	}
	async refreshSession(e) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._refreshSession(e))
		);
	}
	async _refreshSession(e) {
		try {
			return await this._useSession(async (n) => {
				var s;
				if (!e) {
					const { data: o, error: a } = n;
					if (a) throw a;
					e = (s = o.session) !== null && s !== void 0 ? s : void 0;
				}
				if (!(e != null && e.refresh_token)) throw new Wt();
				const { session: r, error: i } = await this._callRefreshToken(e.refresh_token);
				return i
					? { data: { user: null, session: null }, error: i }
					: r
						? { data: { user: r.user, session: r }, error: null }
						: { data: { user: null, session: null }, error: null };
			});
		} catch (n) {
			if (W(n)) return { data: { user: null, session: null }, error: n };
			throw n;
		}
	}
	async _getSessionFromURL(e) {
		try {
			if (!Me()) throw new zn('No browser detected.');
			if (this.flowType === 'implicit' && !this._isImplicitGrantFlow())
				throw new zn('Not a valid implicit grant flow url.');
			if (this.flowType == 'pkce' && !e) throw new ro('Not a valid PKCE flow url.');
			const n = Ms(window.location.href);
			if (e) {
				if (!n.code) throw new ro('No code detected.');
				const { data: $, error: L } = await this._exchangeCodeForSession(n.code);
				if (L) throw L;
				const R = new URL(window.location.href);
				return (
					R.searchParams.delete('code'),
					window.history.replaceState(window.history.state, '', R.toString()),
					{ data: { session: $.session, redirectType: null }, error: null }
				);
			}
			if (n.error || n.error_description || n.error_code)
				throw new zn(n.error_description || 'Error in URL with unspecified error_description', {
					error: n.error || 'unspecified_error',
					code: n.error_code || 'unspecified_code',
				});
			const {
				provider_token: s,
				provider_refresh_token: r,
				access_token: i,
				refresh_token: o,
				expires_in: a,
				expires_at: l,
				token_type: c,
			} = n;
			if (!i || !a || !o || !c) throw new zn('No session defined in URL');
			const u = Math.round(Date.now() / 1e3),
				h = parseInt(a);
			let f = u + h;
			l && (f = parseInt(l));
			const g = f - u;
			g * 1e3 <= mn &&
				console.warn(
					`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${h}s`
				);
			const y = f - h;
			u - y >= 120
				? console.warn(
						'@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
						y,
						f,
						u
					)
				: u - y < 0 &&
					console.warn(
						'@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew',
						y,
						f,
						u
					);
			const { data: b, error: S } = await this._getUser(i);
			if (S) throw S;
			const A = {
				provider_token: s,
				provider_refresh_token: r,
				access_token: i,
				expires_in: h,
				expires_at: f,
				refresh_token: o,
				token_type: c,
				user: b.user,
			};
			return (
				(window.location.hash = ''),
				this._debug('#_getSessionFromURL()', 'clearing window.location.hash'),
				{ data: { session: A, redirectType: n.type }, error: null }
			);
		} catch (n) {
			if (W(n)) return { data: { session: null, redirectType: null }, error: n };
			throw n;
		}
	}
	_isImplicitGrantFlow() {
		const e = Ms(window.location.href);
		return !!(Me() && (e.access_token || e.error_description));
	}
	async _isPKCEFlow() {
		const e = Ms(window.location.href),
			n = await Wn(this.storage, `${this.storageKey}-code-verifier`);
		return !!(e.code && n);
	}
	async signOut(e = { scope: 'global' }) {
		return (
			await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e))
		);
	}
	async _signOut({ scope: e } = { scope: 'global' }) {
		return await this._useSession(async (n) => {
			var s;
			const { data: r, error: i } = n;
			if (i) return { error: i };
			const o = (s = r.session) === null || s === void 0 ? void 0 : s.access_token;
			if (o) {
				const { error: a } = await this.admin.signOut(o, e);
				if (a && !(td(a) && (a.status === 404 || a.status === 401))) return { error: a };
			}
			return (
				e !== 'others' &&
					(await this._removeSession(),
					await Fs(this.storage, `${this.storageKey}-code-verifier`),
					await this._notifyAllSubscribers('SIGNED_OUT', null)),
				{ error: null }
			);
		});
	}
	onAuthStateChange(e) {
		const n = Wf(),
			s = {
				id: n,
				callback: e,
				unsubscribe: () => {
					this._debug('#unsubscribe()', 'state change callback with id removed', n),
						this.stateChangeEmitters.delete(n);
				},
			};
		return (
			this._debug('#onAuthStateChange()', 'registered callback with id', n),
			this.stateChangeEmitters.set(n, s),
			(async () => (
				await this.initializePromise,
				await this._acquireLock(-1, async () => {
					this._emitInitialSession(n);
				})
			))(),
			{ data: { subscription: s } }
		);
	}
	async _emitInitialSession(e) {
		return await this._useSession(async (n) => {
			var s, r;
			try {
				const {
					data: { session: i },
					error: o,
				} = n;
				if (o) throw o;
				await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
					? void 0
					: s.callback('INITIAL_SESSION', i)),
					this._debug('INITIAL_SESSION', 'callback id', e, 'session', i);
			} catch (i) {
				await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
					? void 0
					: r.callback('INITIAL_SESSION', null)),
					this._debug('INITIAL_SESSION', 'callback id', e, 'error', i),
					console.error(i);
			}
		});
	}
	async resetPasswordForEmail(e, n = {}) {
		let s = null,
			r = null;
		if (this.flowType === 'pkce') {
			const i = Vt();
			await St(this.storage, `${this.storageKey}-code-verifier`, `${i}/PASSWORD_RECOVERY`),
				(s = await Kt(i)),
				(r = i === s ? 'plain' : 's256');
		}
		try {
			return await z(this.fetch, 'POST', `${this.url}/recover`, {
				body: {
					email: e,
					code_challenge: s,
					code_challenge_method: r,
					gotrue_meta_security: { captcha_token: n.captchaToken },
				},
				headers: this.headers,
				redirectTo: n.redirectTo,
			});
		} catch (i) {
			if (W(i)) return { data: null, error: i };
			throw i;
		}
	}
	async getUserIdentities() {
		var e;
		try {
			const { data: n, error: s } = await this.getUser();
			if (s) throw s;
			return {
				data: { identities: (e = n.user.identities) !== null && e !== void 0 ? e : [] },
				error: null,
			};
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
	async linkIdentity(e) {
		var n;
		try {
			const { data: s, error: r } = await this._useSession(async (i) => {
				var o, a, l, c, u;
				const { data: h, error: f } = i;
				if (f) throw f;
				const g = await this._getUrlForProvider(
					`${this.url}/user/identities/authorize`,
					e.provider,
					{
						redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
						scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
						queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
						skipBrowserRedirect: !0,
					}
				);
				return await z(this.fetch, 'GET', g, {
					headers: this.headers,
					jwt:
						(u = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null &&
						u !== void 0
							? u
							: void 0,
				});
			});
			if (r) throw r;
			return (
				Me() &&
					!(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) &&
					window.location.assign(s == null ? void 0 : s.url),
				{ data: { provider: e.provider, url: s == null ? void 0 : s.url }, error: null }
			);
		} catch (s) {
			if (W(s)) return { data: { provider: e.provider, url: null }, error: s };
			throw s;
		}
	}
	async unlinkIdentity(e) {
		try {
			return await this._useSession(async (n) => {
				var s, r;
				const { data: i, error: o } = n;
				if (o) throw o;
				return await z(this.fetch, 'DELETE', `${this.url}/user/identities/${e.identity_id}`, {
					headers: this.headers,
					jwt:
						(r = (s = i.session) === null || s === void 0 ? void 0 : s.access_token) !== null &&
						r !== void 0
							? r
							: void 0,
				});
			});
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
	async _refreshAccessToken(e) {
		const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
		this._debug(n, 'begin');
		try {
			const s = Date.now();
			return await Yf(
				async (r) => (
					await Jf(r * 200),
					this._debug(n, 'refreshing attempt', r),
					await z(this.fetch, 'POST', `${this.url}/token?grant_type=refresh_token`, {
						body: { refresh_token: e },
						headers: this.headers,
						xform: Tt,
					})
				),
				(r, i, o) => o && o.error && Hs(o.error) && Date.now() + (r + 1) * 200 - s < mn
			);
		} catch (s) {
			if ((this._debug(n, 'error', s), W(s)))
				return { data: { session: null, user: null }, error: s };
			throw s;
		} finally {
			this._debug(n, 'end');
		}
	}
	_isValidSession(e) {
		return (
			typeof e == 'object' &&
			e !== null &&
			'access_token' in e &&
			'refresh_token' in e &&
			'expires_at' in e
		);
	}
	async _handleProviderSignIn(e, n) {
		const s = await this._getUrlForProvider(`${this.url}/authorize`, e, {
			redirectTo: n.redirectTo,
			scopes: n.scopes,
			queryParams: n.queryParams,
		});
		return (
			this._debug('#_handleProviderSignIn()', 'provider', e, 'options', n, 'url', s),
			Me() && !n.skipBrowserRedirect && window.location.assign(s),
			{ data: { provider: e, url: s }, error: null }
		);
	}
	async _recoverAndRefresh() {
		var e;
		const n = '#_recoverAndRefresh()';
		this._debug(n, 'begin');
		try {
			const s = await Wn(this.storage, this.storageKey);
			if ((this._debug(n, 'session from storage', s), !this._isValidSession(s))) {
				this._debug(n, 'session is not valid'), s !== null && (await this._removeSession());
				return;
			}
			const r = Math.round(Date.now() / 1e3),
				i = ((e = s.expires_at) !== null && e !== void 0 ? e : 1 / 0) < r + ao;
			if ((this._debug(n, `session has${i ? '' : ' not'} expired with margin of ${ao}s`), i)) {
				if (this.autoRefreshToken && s.refresh_token) {
					const { error: o } = await this._callRefreshToken(s.refresh_token);
					o &&
						(console.error(o),
						Hs(o) ||
							(this._debug(n, 'refresh failed with a non-retryable error, removing the session', o),
							await this._removeSession()));
				}
			} else await this._notifyAllSubscribers('SIGNED_IN', s);
		} catch (s) {
			this._debug(n, 'error', s), console.error(s);
			return;
		} finally {
			this._debug(n, 'end');
		}
	}
	async _callRefreshToken(e) {
		var n, s;
		if (!e) throw new Wt();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
		this._debug(r, 'begin');
		try {
			this.refreshingDeferred = new As();
			const { data: i, error: o } = await this._refreshAccessToken(e);
			if (o) throw o;
			if (!i.session) throw new Wt();
			await this._saveSession(i.session),
				await this._notifyAllSubscribers('TOKEN_REFRESHED', i.session);
			const a = { session: i.session, error: null };
			return this.refreshingDeferred.resolve(a), a;
		} catch (i) {
			if ((this._debug(r, 'error', i), W(i))) {
				const o = { session: null, error: i };
				return (
					Hs(i) ||
						(await this._removeSession(), await this._notifyAllSubscribers('SIGNED_OUT', null)),
					(n = this.refreshingDeferred) === null || n === void 0 || n.resolve(o),
					o
				);
			}
			throw ((s = this.refreshingDeferred) === null || s === void 0 || s.reject(i), i);
		} finally {
			(this.refreshingDeferred = null), this._debug(r, 'end');
		}
	}
	async _notifyAllSubscribers(e, n, s = !0) {
		const r = `#_notifyAllSubscribers(${e})`;
		this._debug(r, 'begin', n, `broadcast = ${s}`);
		try {
			this.broadcastChannel && s && this.broadcastChannel.postMessage({ event: e, session: n });
			const i = [],
				o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
					try {
						await a.callback(e, n);
					} catch (l) {
						i.push(l);
					}
				});
			if ((await Promise.all(o), i.length > 0)) {
				for (let a = 0; a < i.length; a += 1) console.error(i[a]);
				throw i[0];
			}
		} finally {
			this._debug(r, 'end');
		}
	}
	async _saveSession(e) {
		this._debug('#_saveSession()', e), await St(this.storage, this.storageKey, e);
	}
	async _removeSession() {
		this._debug('#_removeSession()'), await Fs(this.storage, this.storageKey);
	}
	_removeVisibilityChangedCallback() {
		this._debug('#_removeVisibilityChangedCallback()');
		const e = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			e &&
				Me() &&
				window != null &&
				window.removeEventListener &&
				window.removeEventListener('visibilitychange', e);
		} catch (n) {
			console.error('removing visibilitychange callback failed', n);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug('#_startAutoRefresh()');
		const e = setInterval(() => this._autoRefreshTokenTick(), mn);
		(this.autoRefreshTicker = e),
			e && typeof e == 'object' && typeof e.unref == 'function'
				? e.unref()
				: typeof Deno < 'u' && typeof Deno.unrefTimer == 'function' && Deno.unrefTimer(e),
			setTimeout(async () => {
				await this.initializePromise, await this._autoRefreshTokenTick();
			}, 0);
	}
	async _stopAutoRefresh() {
		this._debug('#_stopAutoRefresh()');
		const e = this.autoRefreshTicker;
		(this.autoRefreshTicker = null), e && clearInterval(e);
	}
	async startAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
	}
	async stopAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
	}
	async _autoRefreshTokenTick() {
		this._debug('#_autoRefreshTokenTick()', 'begin');
		try {
			await this._acquireLock(0, async () => {
				try {
					const e = Date.now();
					try {
						return await this._useSession(async (n) => {
							const {
								data: { session: s },
							} = n;
							if (!s || !s.refresh_token || !s.expires_at) {
								this._debug('#_autoRefreshTokenTick()', 'no session');
								return;
							}
							const r = Math.floor((s.expires_at * 1e3 - e) / mn);
							this._debug(
								'#_autoRefreshTokenTick()',
								`access token expires in ${r} ticks, a tick lasts ${mn}ms, refresh threshold is ${co} ticks`
							),
								r <= co && (await this._callRefreshToken(s.refresh_token));
						});
					} catch (n) {
						console.error(
							'Auto refresh tick failed with error. This is likely a transient error.',
							n
						);
					}
				} finally {
					this._debug('#_autoRefreshTokenTick()', 'end');
				}
			});
		} catch (e) {
			if (e.isAcquireTimeout || e instanceof Ba)
				this._debug('auto refresh token tick lock not available');
			else throw e;
		}
	}
	async _handleVisibilityChange() {
		if (
			(this._debug('#_handleVisibilityChange()'),
			!Me() || !(window != null && window.addEventListener))
		)
			return this.autoRefreshToken && this.startAutoRefresh(), !1;
		try {
			(this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1)),
				window == null ||
					window.addEventListener('visibilitychange', this.visibilityChangedCallback),
				await this._onVisibilityChanged(!0);
		} catch (e) {
			console.error('_handleVisibilityChange', e);
		}
	}
	async _onVisibilityChanged(e) {
		const n = `#_onVisibilityChanged(${e})`;
		this._debug(n, 'visibilityState', document.visibilityState),
			document.visibilityState === 'visible'
				? (this.autoRefreshToken && this._startAutoRefresh(),
					e ||
						(await this.initializePromise,
						await this._acquireLock(-1, async () => {
							if (document.visibilityState !== 'visible') {
								this._debug(
									n,
									'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
								);
								return;
							}
							await this._recoverAndRefresh();
						})))
				: document.visibilityState === 'hidden' && this.autoRefreshToken && this._stopAutoRefresh();
	}
	async _getUrlForProvider(e, n, s) {
		const r = [`provider=${encodeURIComponent(n)}`];
		if (
			(s != null && s.redirectTo && r.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),
			s != null && s.scopes && r.push(`scopes=${encodeURIComponent(s.scopes)}`),
			this.flowType === 'pkce')
		) {
			const i = Vt();
			await St(this.storage, `${this.storageKey}-code-verifier`, i);
			const o = await Kt(i),
				a = i === o ? 'plain' : 's256';
			this._debug(
				'PKCE',
				'code verifier',
				`${i.substring(0, 5)}...`,
				'code challenge',
				o,
				'method',
				a
			);
			const l = new URLSearchParams({
				code_challenge: `${encodeURIComponent(o)}`,
				code_challenge_method: `${encodeURIComponent(a)}`,
			});
			r.push(l.toString());
		}
		if (s != null && s.queryParams) {
			const i = new URLSearchParams(s.queryParams);
			r.push(i.toString());
		}
		return (
			s != null && s.skipBrowserRedirect && r.push(`skip_http_redirect=${s.skipBrowserRedirect}`),
			`${e}?${r.join('&')}`
		);
	}
	async _unenroll(e) {
		try {
			return await this._useSession(async (n) => {
				var s;
				const { data: r, error: i } = n;
				return i
					? { data: null, error: i }
					: await z(this.fetch, 'DELETE', `${this.url}/factors/${e.factorId}`, {
							headers: this.headers,
							jwt:
								(s = r == null ? void 0 : r.session) === null || s === void 0
									? void 0
									: s.access_token,
						});
			});
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
	async _enroll(e) {
		try {
			return await this._useSession(async (n) => {
				var s, r;
				const { data: i, error: o } = n;
				if (o) return { data: null, error: o };
				const { data: a, error: l } = await z(this.fetch, 'POST', `${this.url}/factors`, {
					body: { friendly_name: e.friendlyName, factor_type: e.factorType, issuer: e.issuer },
					headers: this.headers,
					jwt:
						(s = i == null ? void 0 : i.session) === null || s === void 0 ? void 0 : s.access_token,
				});
				return l
					? { data: null, error: l }
					: (!((r = a == null ? void 0 : a.totp) === null || r === void 0) &&
							r.qr_code &&
							(a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
						{ data: a, error: null });
			});
		} catch (n) {
			if (W(n)) return { data: null, error: n };
			throw n;
		}
	}
	async _verify(e) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (n) => {
					var s;
					const { data: r, error: i } = n;
					if (i) return { data: null, error: i };
					const { data: o, error: a } = await z(
						this.fetch,
						'POST',
						`${this.url}/factors/${e.factorId}/verify`,
						{
							body: { code: e.code, challenge_id: e.challengeId },
							headers: this.headers,
							jwt:
								(s = r == null ? void 0 : r.session) === null || s === void 0
									? void 0
									: s.access_token,
						}
					);
					return a
						? { data: null, error: a }
						: (await this._saveSession(
								Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)
							),
							await this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', o),
							{ data: o, error: a });
				});
			} catch (n) {
				if (W(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	async _challenge(e) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (n) => {
					var s;
					const { data: r, error: i } = n;
					return i
						? { data: null, error: i }
						: await z(this.fetch, 'POST', `${this.url}/factors/${e.factorId}/challenge`, {
								headers: this.headers,
								jwt:
									(s = r == null ? void 0 : r.session) === null || s === void 0
										? void 0
										: s.access_token,
							});
				});
			} catch (n) {
				if (W(n)) return { data: null, error: n };
				throw n;
			}
		});
	}
	async _challengeAndVerify(e) {
		const { data: n, error: s } = await this._challenge({ factorId: e.factorId });
		return s
			? { data: null, error: s }
			: await this._verify({ factorId: e.factorId, challengeId: n.id, code: e.code });
	}
	async _listFactors() {
		const {
			data: { user: e },
			error: n,
		} = await this.getUser();
		if (n) return { data: null, error: n };
		const s = (e == null ? void 0 : e.factors) || [],
			r = s.filter((i) => i.factor_type === 'totp' && i.status === 'verified');
		return { data: { all: s, totp: r }, error: null };
	}
	async _getAuthenticatorAssuranceLevel() {
		return this._acquireLock(
			-1,
			async () =>
				await this._useSession(async (e) => {
					var n, s;
					const {
						data: { session: r },
						error: i,
					} = e;
					if (i) return { data: null, error: i };
					if (!r)
						return {
							data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
							error: null,
						};
					const o = this._decodeJWT(r.access_token);
					let a = null;
					o.aal && (a = o.aal);
					let l = a;
					((s =
						(n = r.user.factors) === null || n === void 0
							? void 0
							: n.filter((h) => h.status === 'verified')) !== null && s !== void 0
						? s
						: []
					).length > 0 && (l = 'aal2');
					const u = o.amr || [];
					return {
						data: { currentLevel: a, nextLevel: l, currentAuthenticationMethods: u },
						error: null,
					};
				})
		);
	}
}
jn.nextInstanceID = 0;
class wd extends jn {
	constructor(e) {
		super(e);
	}
}
var kd =
	(globalThis && globalThis.__awaiter) ||
	function (t, e, n, s) {
		function r(i) {
			return i instanceof n
				? i
				: new n(function (o) {
						o(i);
					});
		}
		return new (n || (n = Promise))(function (i, o) {
			function a(u) {
				try {
					c(s.next(u));
				} catch (h) {
					o(h);
				}
			}
			function l(u) {
				try {
					c(s.throw(u));
				} catch (h) {
					o(h);
				}
			}
			function c(u) {
				u.done ? i(u.value) : r(u.value).then(a, l);
			}
			c((s = s.apply(t, e || [])).next());
		});
	};
const Ed = { headers: Df },
	Sd = { schema: 'public' },
	Td = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, flowType: 'implicit' },
	Rd = {};
class Ad {
	constructor(e, n, s) {
		var r, i, o, a, l, c, u, h;
		if (
			((this.supabaseUrl = e),
			(this.supabaseKey = n),
			(this.from = (S) => this.rest.from(S)),
			(this.schema = (S) => this.rest.schema(S)),
			(this.rpc = (S, A = {}, $) => this.rest.rpc(S, A, $)),
			!e)
		)
			throw new Error('supabaseUrl is required.');
		if (!n) throw new Error('supabaseKey is required.');
		const f = Hf(e);
		(this.realtimeUrl = `${f}/realtime/v1`.replace(/^http/i, 'ws')),
			(this.authUrl = `${f}/auth/v1`),
			(this.storageUrl = `${f}/storage/v1`),
			(this.functionsUrl = `${f}/functions/v1`);
		const g = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
			y = {
				db: Sd,
				realtime: Rd,
				auth: Object.assign(Object.assign({}, Td), { storageKey: g }),
				global: Ed,
			},
			b = Vf(s ?? {}, y);
		(this.storageKey =
			(i = (r = b.auth) === null || r === void 0 ? void 0 : r.storageKey) !== null && i !== void 0
				? i
				: ''),
			(this.headers =
				(a = (o = b.global) === null || o === void 0 ? void 0 : o.headers) !== null && a !== void 0
					? a
					: {}),
			(this.auth = this._initSupabaseAuthClient(
				(l = b.auth) !== null && l !== void 0 ? l : {},
				this.headers,
				(c = b.global) === null || c === void 0 ? void 0 : c.fetch
			)),
			(this.fetch = Bf(
				n,
				this._getAccessToken.bind(this),
				(u = b.global) === null || u === void 0 ? void 0 : u.fetch
			)),
			(this.realtime = this._initRealtimeClient(
				Object.assign({ headers: this.headers }, b.realtime)
			)),
			(this.rest = new Vr(`${f}/rest/v1`, {
				headers: this.headers,
				schema: (h = b.db) === null || h === void 0 ? void 0 : h.schema,
				fetch: this.fetch,
			})),
			this._listenForAuthEvents();
	}
	get functions() {
		return new Zh(this.functionsUrl, { headers: this.headers, customFetch: this.fetch });
	}
	get storage() {
		return new qf(this.storageUrl, this.headers, this.fetch);
	}
	channel(e, n = { config: {} }) {
		return this.realtime.channel(e, n);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(e) {
		return this.realtime.removeChannel(e);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	_getAccessToken() {
		var e, n;
		return kd(this, void 0, void 0, function* () {
			const { data: s } = yield this.auth.getSession();
			return (n = (e = s.session) === null || e === void 0 ? void 0 : e.access_token) !== null &&
				n !== void 0
				? n
				: null;
		});
	}
	_initSupabaseAuthClient(
		{
			autoRefreshToken: e,
			persistSession: n,
			detectSessionInUrl: s,
			storage: r,
			storageKey: i,
			flowType: o,
			debug: a,
		},
		l,
		c
	) {
		const u = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
		return new wd({
			url: this.authUrl,
			headers: Object.assign(Object.assign({}, u), l),
			storageKey: i,
			autoRefreshToken: e,
			persistSession: n,
			detectSessionInUrl: s,
			storage: r,
			flowType: o,
			debug: a,
			fetch: c,
		});
	}
	_initRealtimeClient(e) {
		return new Ef(
			this.realtimeUrl,
			Object.assign(Object.assign({}, e), {
				params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params),
			})
		);
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((n, s) => {
			this._handleTokenChanged(n, 'CLIENT', s == null ? void 0 : s.access_token);
		});
	}
	_handleTokenChanged(e, n, s) {
		(e === 'TOKEN_REFRESHED' || e === 'SIGNED_IN') && this.changedAccessToken !== s
			? (this.realtime.setAuth(s ?? null), (this.changedAccessToken = s))
			: e === 'SIGNED_OUT' &&
				(this.realtime.setAuth(this.supabaseKey),
				n == 'STORAGE' && this.auth.signOut(),
				(this.changedAccessToken = void 0));
	}
}
const Od = (t, e, n) => new Ad(t, e, n),
	Pd = 'https://ysuqkwlvbkjhfrqelfzb.supabase.co',
	xd =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdXFrd2x2YmtqaGZycWVsZnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4NTI1OTcsImV4cCI6MjAyMDQyODU5N30.aqmgb8fSy638Ccdmq_wCAI6h0pADFjn3vszD3bgiYs0',
	Cd = Od(Pd, xd),
	Id = { id: 'navIcons' },
	$d = $c(
		'<div class="burger"><div class="burgerbar bar1"></div><div class="burgerbar bar2"></div><div class="burgerbar bar2duplo"></div><div class="burgerbar bar3"></div></div>',
		1
	),
	jd = [$d],
	Ld = te(
		'div',
		{ class: 'zoekIcon' },
		[
			te('div', { class: 'glass' }),
			te('div', { class: 'glassOuter' }),
			te('div', { class: 'stick' }),
		],
		-1
	),
	qd = [Ld],
	Nd = te(
		'div',
		{ class: 'profileIcon' },
		[te('div', { class: 'profileIcon-head' }), te('div', { class: 'profileIcon-body' })],
		-1
	),
	Dd = [Nd],
	Ud = ['aria-expanded'],
	Md = { class: 'history' },
	Fd = ['aria-expanded'],
	Bd = {
		__name: 'NavWrapper',
		setup(t) {
			const e = hr();
			function n() {
				a.push('boekzoek'), (i.value = !1), (o.value = !1);
			}
			function s() {
				(i.value = !i.value), (o.value = !1);
			}
			function r() {
				(o.value = !o.value), (i.value = !1);
			}
			const i = on(!1),
				o = on(!1),
				a = Rh(),
				l = (f) => a.options.routes[f].children,
				c = l(0).filter((f) => f.meta.includeNav === !0);
			let u;
			function h() {
				e.status === !0
					? (u = l(1).filter(
							(f) =>
								f.meta.includeNav === !0 &&
								(f.meta.requiresAuth === !0 || f.meta.requiresNoAuth === !1)
						))
					: (u = l(1).filter(
							(f) =>
								f.meta.includeNav === !0 &&
								(f.meta.requiresAuth === !1 || f.meta.requiresNoAuth === !0)
						));
			}
			return (
				Xo(() => {
					h();
				}),
				tn(hr(), () => {
					h();
				}),
				(f, g) => {
					const y = $r('RouterLink');
					return (
						qe(),
						ht(
							Te,
							null,
							[
								te('nav', Id, [
									te(
										'button',
										{
											onClick: s,
											id: 'toggleNavBurger',
											class: Pt(i.value ? 'expanded' : 'collapsed'),
										},
										jd,
										2
									),
									te('div', null, [
										te('button', { class: 'toggleZoekNav', onClick: n }, qd),
										te(
											'button',
											{
												id: 'toggleNavProfile',
												onClick: r,
												class: Pt(o.value ? 'expanded' : 'collapsed'),
											},
											Dd,
											2
										),
									]),
								]),
								te(
									'nav',
									{
										id: 'nav0',
										class: Pt(['nav-collapsable', i.value ? 'expanded' : 'collapsed']),
										'aria-expanded': i.value ? 'expanded' : 'collapsed',
									},
									[
										te('ul', null, [
											(qe(!0),
											ht(
												Te,
												null,
												hi(
													Re(c),
													(b, S) => (
														qe(),
														ht('li', { key: S }, [
															he(
																y,
																{ to: b.path, onClick: s },
																{ default: is(() => [jt(Ct(b.name), 1)]), _: 2 },
																1032,
																['to']
															),
														])
													)
												),
												128
											)),
										]),
										te('div', Md, [
											te('button', { onClick: g[0] || (g[0] = (b) => Re(a).go(-1)) }, '<'),
											te('button', { onClick: g[1] || (g[1] = (b) => Re(a).go(1)) }, '>'),
										]),
									],
									10,
									Ud
								),
								te(
									'nav',
									{
										id: 'nav1',
										class: Pt(['nav-collapsable', o.value ? 'expanded' : 'collapsed']),
										'aria-expanded': o.value ? 'expanded' : 'collapsed',
									},
									[
										te('ul', null, [
											(qe(!0),
											ht(
												Te,
												null,
												hi(
													Re(u),
													(b, S) => (
														qe(),
														ht('li', { key: S }, [
															he(
																y,
																{ to: b.path, onClick: r },
																{ default: is(() => [jt(Ct(b.name), 1)]), _: 2 },
																1032,
																['to']
															),
														])
													)
												),
												128
											)),
										]),
									],
									10,
									Fd
								),
							],
							64
						)
					);
				}
			);
		},
	},
	Hd = { id: 'header' },
	Vd = { id: 'main' },
	Kd = te('footer', { id: 'footer' }, null, -1),
	Wd = {
		__name: 'App',
		setup(t) {
			return (e, n) => {
				const s = $r('RouterView');
				return qe(), ht(Te, null, [te('header', Hd, [he(Bd)]), te('main', Vd, [he(s)]), Kd], 64);
			};
		},
	},
	zr = vu(Wd);
let Ha = Sh({ history: Mu(), routes: Gh }),
	Jn = on(!1);
Ha.beforeEach(async (t, e) => {
	if (
		(document.body.classList.add(t.name),
		document.body.classList.remove(e.name),
		t.meta.requiresAuth || t.meta.requiresNoAuth)
	) {
		if (
			((await Cd.auth.getSession()).data.session === null ? (Jn = !1) : (Jn = !0),
			Jn.value === !1 && t.meta.requiresAuth)
		)
			return { name: 'login' };
		if (Jn === !0 && t.meta.requiresNoAuth) return { name: 'profile-preferences' };
	}
});
const Gd = Oh();
zr.use(Ha);
zr.use(Gd);
zr.mount('#app');
document.getElementsByTagName('html')[0].classList.add('light-mode');
export {
	Rh as A,
	Cd as B,
	ic as C,
	de as D,
	Xo as E,
	Te as F,
	sc as G,
	jh as H,
	Yd as I,
	Fh as Q,
	vh as R,
	zd as S,
	Ia as _,
	te as a,
	Nr as b,
	ht as c,
	jt as d,
	he as e,
	Re as f,
	qn as g,
	Jd as h,
	tp as i,
	hi as j,
	jc as k,
	Ko as l,
	Ne as m,
	ep as n,
	qe as o,
	Vo as p,
	$r as q,
	on as r,
	hc as s,
	Ct as t,
	hr as u,
	Xd as v,
	is as w,
	Qd as x,
	Pt as y,
	Zd as z,
};
