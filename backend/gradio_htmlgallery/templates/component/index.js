const {
  SvelteComponent: tr,
  assign: nr,
  create_slot: ir,
  detach: rr,
  element: lr,
  get_all_dirty_from_scope: sr,
  get_slot_changes: or,
  get_spread_update: ar,
  init: ur,
  insert: fr,
  safe_not_equal: hr,
  set_dynamic_element_data: cn,
  set_style: U,
  toggle_class: ue,
  transition_in: gi,
  transition_out: pi,
  update_slot_base: cr
} = window.__gradio__svelte__internal;
function _r(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[17].default
  ), l = ir(
    r,
    e,
    /*$$scope*/
    e[16],
    null
  );
  let s = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], a = {};
  for (let u = 0; u < s.length; u += 1)
    a = nr(a, s[u]);
  return {
    c() {
      t = lr(
        /*tag*/
        e[14]
      ), l && l.c(), cn(
        /*tag*/
        e[14]
      )(t, a), ue(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), ue(
        t,
        "padded",
        /*padding*/
        e[6]
      ), ue(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), ue(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), U(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), U(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), U(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), U(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), U(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), U(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), U(t, "border-width", "var(--block-border-width)");
    },
    m(u, o) {
      fr(u, t, o), l && l.m(t, null), i = !0;
    },
    p(u, o) {
      l && l.p && (!i || o & /*$$scope*/
      65536) && cr(
        l,
        r,
        u,
        /*$$scope*/
        u[16],
        i ? or(
          r,
          /*$$scope*/
          u[16],
          o,
          null
        ) : sr(
          /*$$scope*/
          u[16]
        ),
        null
      ), cn(
        /*tag*/
        u[14]
      )(t, a = ar(s, [
        (!i || o & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          u[7]
        ) },
        (!i || o & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          u[2]
        ) },
        (!i || o & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        u[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), ue(
        t,
        "hidden",
        /*visible*/
        u[10] === !1
      ), ue(
        t,
        "padded",
        /*padding*/
        u[6]
      ), ue(
        t,
        "border_focus",
        /*border_mode*/
        u[5] === "focus"
      ), ue(t, "hide-container", !/*explicit_call*/
      u[8] && !/*container*/
      u[9]), o & /*height*/
      1 && U(t, "height", typeof /*height*/
      u[0] == "number" ? (
        /*height*/
        u[0] + "px"
      ) : void 0), o & /*width*/
      2 && U(t, "width", typeof /*width*/
      u[1] == "number" ? `calc(min(${/*width*/
      u[1]}px, 100%))` : void 0), o & /*variant*/
      16 && U(
        t,
        "border-style",
        /*variant*/
        u[4]
      ), o & /*allow_overflow*/
      2048 && U(
        t,
        "overflow",
        /*allow_overflow*/
        u[11] ? "visible" : "hidden"
      ), o & /*scale*/
      4096 && U(
        t,
        "flex-grow",
        /*scale*/
        u[12]
      ), o & /*min_width*/
      8192 && U(t, "min-width", `calc(min(${/*min_width*/
      u[13]}px, 100%))`);
    },
    i(u) {
      i || (gi(l, u), i = !0);
    },
    o(u) {
      pi(l, u), i = !1;
    },
    d(u) {
      u && rr(t), l && l.d(u);
    }
  };
}
function mr(e) {
  let t, n = (
    /*tag*/
    e[14] && _r(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(i, r) {
      n && n.m(i, r), t = !0;
    },
    p(i, [r]) {
      /*tag*/
      i[14] && n.p(i, r);
    },
    i(i) {
      t || (gi(n, i), t = !0);
    },
    o(i) {
      pi(n, i), t = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function dr(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { height: l = void 0 } = t, { width: s = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: u = [] } = t, { variant: o = "solid" } = t, { border_mode: f = "base" } = t, { padding: h = !0 } = t, { type: c = "normal" } = t, { test_id: _ = void 0 } = t, { explicit_call: m = !1 } = t, { container: d = !0 } = t, { visible: E = !0 } = t, { allow_overflow: g = !0 } = t, { scale: T = null } = t, { min_width: b = 0 } = t, S = c === "fieldset" ? "fieldset" : "div";
  return e.$$set = (v) => {
    "height" in v && n(0, l = v.height), "width" in v && n(1, s = v.width), "elem_id" in v && n(2, a = v.elem_id), "elem_classes" in v && n(3, u = v.elem_classes), "variant" in v && n(4, o = v.variant), "border_mode" in v && n(5, f = v.border_mode), "padding" in v && n(6, h = v.padding), "type" in v && n(15, c = v.type), "test_id" in v && n(7, _ = v.test_id), "explicit_call" in v && n(8, m = v.explicit_call), "container" in v && n(9, d = v.container), "visible" in v && n(10, E = v.visible), "allow_overflow" in v && n(11, g = v.allow_overflow), "scale" in v && n(12, T = v.scale), "min_width" in v && n(13, b = v.min_width), "$$scope" in v && n(16, r = v.$$scope);
  }, [
    l,
    s,
    a,
    u,
    o,
    f,
    h,
    _,
    m,
    d,
    E,
    g,
    T,
    b,
    S,
    c,
    r,
    i
  ];
}
class br extends tr {
  constructor(t) {
    super(), ur(this, t, dr, mr, hr, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: gr,
  append: yt,
  attr: Ke,
  create_component: pr,
  destroy_component: vr,
  detach: yr,
  element: _n,
  init: wr,
  insert: Er,
  mount_component: Tr,
  safe_not_equal: Sr,
  set_data: Hr,
  space: Br,
  text: Ar,
  toggle_class: fe,
  transition_in: Pr,
  transition_out: Cr
} = window.__gradio__svelte__internal;
function Ir(e) {
  let t, n, i, r, l, s;
  return i = new /*Icon*/
  e[1]({}), {
    c() {
      t = _n("label"), n = _n("span"), pr(i.$$.fragment), r = Br(), l = Ar(
        /*label*/
        e[0]
      ), Ke(n, "class", "svelte-9gxdi0"), Ke(t, "for", ""), Ke(t, "data-testid", "block-label"), Ke(t, "class", "svelte-9gxdi0"), fe(t, "hide", !/*show_label*/
      e[2]), fe(t, "sr-only", !/*show_label*/
      e[2]), fe(
        t,
        "float",
        /*float*/
        e[4]
      ), fe(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, u) {
      Er(a, t, u), yt(t, n), Tr(i, n, null), yt(t, r), yt(t, l), s = !0;
    },
    p(a, [u]) {
      (!s || u & /*label*/
      1) && Hr(
        l,
        /*label*/
        a[0]
      ), (!s || u & /*show_label*/
      4) && fe(t, "hide", !/*show_label*/
      a[2]), (!s || u & /*show_label*/
      4) && fe(t, "sr-only", !/*show_label*/
      a[2]), (!s || u & /*float*/
      16) && fe(
        t,
        "float",
        /*float*/
        a[4]
      ), (!s || u & /*disable*/
      8) && fe(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      s || (Pr(i.$$.fragment, a), s = !0);
    },
    o(a) {
      Cr(i.$$.fragment, a), s = !1;
    },
    d(a) {
      a && yr(t), vr(i);
    }
  };
}
function Nr(e, t, n) {
  let { label: i = null } = t, { Icon: r } = t, { show_label: l = !0 } = t, { disable: s = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (u) => {
    "label" in u && n(0, i = u.label), "Icon" in u && n(1, r = u.Icon), "show_label" in u && n(2, l = u.show_label), "disable" in u && n(3, s = u.disable), "float" in u && n(4, a = u.float);
  }, [i, r, l, s, a];
}
class Lr extends gr {
  constructor(t) {
    super(), wr(this, t, Nr, Ir, Sr, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: kr,
  append: xt,
  attr: ie,
  bubble: Or,
  create_component: Mr,
  destroy_component: xr,
  detach: vi,
  element: Rt,
  init: Rr,
  insert: yi,
  listen: Dr,
  mount_component: Ur,
  safe_not_equal: Gr,
  set_data: Fr,
  set_style: $e,
  space: jr,
  text: Vr,
  toggle_class: F,
  transition_in: qr,
  transition_out: zr
} = window.__gradio__svelte__internal;
function mn(e) {
  let t, n;
  return {
    c() {
      t = Rt("span"), n = Vr(
        /*label*/
        e[1]
      ), ie(t, "class", "svelte-lpi64a");
    },
    m(i, r) {
      yi(i, t, r), xt(t, n);
    },
    p(i, r) {
      r & /*label*/
      2 && Fr(
        n,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && vi(t);
    }
  };
}
function Xr(e) {
  let t, n, i, r, l, s, a, u = (
    /*show_label*/
    e[2] && mn(e)
  );
  return r = new /*Icon*/
  e[0]({}), {
    c() {
      t = Rt("button"), u && u.c(), n = jr(), i = Rt("div"), Mr(r.$$.fragment), ie(i, "class", "svelte-lpi64a"), F(
        i,
        "small",
        /*size*/
        e[4] === "small"
      ), F(
        i,
        "large",
        /*size*/
        e[4] === "large"
      ), t.disabled = /*disabled*/
      e[7], ie(
        t,
        "aria-label",
        /*label*/
        e[1]
      ), ie(
        t,
        "aria-haspopup",
        /*hasPopup*/
        e[8]
      ), ie(
        t,
        "title",
        /*label*/
        e[1]
      ), ie(t, "class", "svelte-lpi64a"), F(
        t,
        "pending",
        /*pending*/
        e[3]
      ), F(
        t,
        "padded",
        /*padded*/
        e[5]
      ), F(
        t,
        "highlight",
        /*highlight*/
        e[6]
      ), F(
        t,
        "transparent",
        /*transparent*/
        e[9]
      ), $e(t, "color", !/*disabled*/
      e[7] && /*_color*/
      e[11] ? (
        /*_color*/
        e[11]
      ) : "var(--block-label-text-color)"), $e(t, "--bg-color", /*disabled*/
      e[7] ? "auto" : (
        /*background*/
        e[10]
      ));
    },
    m(o, f) {
      yi(o, t, f), u && u.m(t, null), xt(t, n), xt(t, i), Ur(r, i, null), l = !0, s || (a = Dr(
        t,
        "click",
        /*click_handler*/
        e[13]
      ), s = !0);
    },
    p(o, [f]) {
      /*show_label*/
      o[2] ? u ? u.p(o, f) : (u = mn(o), u.c(), u.m(t, n)) : u && (u.d(1), u = null), (!l || f & /*size*/
      16) && F(
        i,
        "small",
        /*size*/
        o[4] === "small"
      ), (!l || f & /*size*/
      16) && F(
        i,
        "large",
        /*size*/
        o[4] === "large"
      ), (!l || f & /*disabled*/
      128) && (t.disabled = /*disabled*/
      o[7]), (!l || f & /*label*/
      2) && ie(
        t,
        "aria-label",
        /*label*/
        o[1]
      ), (!l || f & /*hasPopup*/
      256) && ie(
        t,
        "aria-haspopup",
        /*hasPopup*/
        o[8]
      ), (!l || f & /*label*/
      2) && ie(
        t,
        "title",
        /*label*/
        o[1]
      ), (!l || f & /*pending*/
      8) && F(
        t,
        "pending",
        /*pending*/
        o[3]
      ), (!l || f & /*padded*/
      32) && F(
        t,
        "padded",
        /*padded*/
        o[5]
      ), (!l || f & /*highlight*/
      64) && F(
        t,
        "highlight",
        /*highlight*/
        o[6]
      ), (!l || f & /*transparent*/
      512) && F(
        t,
        "transparent",
        /*transparent*/
        o[9]
      ), f & /*disabled, _color*/
      2176 && $e(t, "color", !/*disabled*/
      o[7] && /*_color*/
      o[11] ? (
        /*_color*/
        o[11]
      ) : "var(--block-label-text-color)"), f & /*disabled, background*/
      1152 && $e(t, "--bg-color", /*disabled*/
      o[7] ? "auto" : (
        /*background*/
        o[10]
      ));
    },
    i(o) {
      l || (qr(r.$$.fragment, o), l = !0);
    },
    o(o) {
      zr(r.$$.fragment, o), l = !1;
    },
    d(o) {
      o && vi(t), u && u.d(), xr(r), s = !1, a();
    }
  };
}
function Zr(e, t, n) {
  let i, { Icon: r } = t, { label: l = "" } = t, { show_label: s = !1 } = t, { pending: a = !1 } = t, { size: u = "small" } = t, { padded: o = !0 } = t, { highlight: f = !1 } = t, { disabled: h = !1 } = t, { hasPopup: c = !1 } = t, { color: _ = "var(--block-label-text-color)" } = t, { transparent: m = !1 } = t, { background: d = "var(--background-fill-primary)" } = t;
  function E(g) {
    Or.call(this, e, g);
  }
  return e.$$set = (g) => {
    "Icon" in g && n(0, r = g.Icon), "label" in g && n(1, l = g.label), "show_label" in g && n(2, s = g.show_label), "pending" in g && n(3, a = g.pending), "size" in g && n(4, u = g.size), "padded" in g && n(5, o = g.padded), "highlight" in g && n(6, f = g.highlight), "disabled" in g && n(7, h = g.disabled), "hasPopup" in g && n(8, c = g.hasPopup), "color" in g && n(12, _ = g.color), "transparent" in g && n(9, m = g.transparent), "background" in g && n(10, d = g.background);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlight, color*/
    4160 && n(11, i = f ? "var(--color-accent)" : _);
  }, [
    r,
    l,
    s,
    a,
    u,
    o,
    f,
    h,
    c,
    m,
    d,
    i,
    _,
    E
  ];
}
class nn extends kr {
  constructor(t) {
    super(), Rr(this, t, Zr, Xr, Gr, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 12,
      transparent: 9,
      background: 10
    });
  }
}
const {
  SvelteComponent: Wr,
  append: Qr,
  attr: wt,
  binding_callbacks: Jr,
  create_slot: Yr,
  detach: Kr,
  element: dn,
  get_all_dirty_from_scope: $r,
  get_slot_changes: el,
  init: tl,
  insert: nl,
  safe_not_equal: il,
  toggle_class: he,
  transition_in: rl,
  transition_out: ll,
  update_slot_base: sl
} = window.__gradio__svelte__internal;
function ol(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[5].default
  ), l = Yr(
    r,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = dn("div"), n = dn("div"), l && l.c(), wt(n, "class", "icon svelte-3w3rth"), wt(t, "class", "empty svelte-3w3rth"), wt(t, "aria-label", "Empty value"), he(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), he(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), he(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), he(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(s, a) {
      nl(s, t, a), Qr(t, n), l && l.m(n, null), e[6](t), i = !0;
    },
    p(s, [a]) {
      l && l.p && (!i || a & /*$$scope*/
      16) && sl(
        l,
        r,
        s,
        /*$$scope*/
        s[4],
        i ? el(
          r,
          /*$$scope*/
          s[4],
          a,
          null
        ) : $r(
          /*$$scope*/
          s[4]
        ),
        null
      ), (!i || a & /*size*/
      1) && he(
        t,
        "small",
        /*size*/
        s[0] === "small"
      ), (!i || a & /*size*/
      1) && he(
        t,
        "large",
        /*size*/
        s[0] === "large"
      ), (!i || a & /*unpadded_box*/
      2) && he(
        t,
        "unpadded_box",
        /*unpadded_box*/
        s[1]
      ), (!i || a & /*parent_height*/
      8) && he(
        t,
        "small_parent",
        /*parent_height*/
        s[3]
      );
    },
    i(s) {
      i || (rl(l, s), i = !0);
    },
    o(s) {
      ll(l, s), i = !1;
    },
    d(s) {
      s && Kr(t), l && l.d(s), e[6](null);
    }
  };
}
function al(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], l = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = l(n)) : (r === "call" || r === "optionalCall") && (n = l((...s) => n.call(t, ...s)), t = void 0);
  }
  return n;
}
function ul(e, t, n) {
  let i, { $$slots: r = {}, $$scope: l } = t, { size: s = "small" } = t, { unpadded_box: a = !1 } = t, u;
  function o(h) {
    if (!h)
      return !1;
    const { height: c } = h.getBoundingClientRect(), { height: _ } = al([
      h,
      "access",
      (m) => m.parentElement,
      "optionalAccess",
      (m) => m.getBoundingClientRect,
      "call",
      (m) => m()
    ]) || { height: c };
    return c > _ + 2;
  }
  function f(h) {
    Jr[h ? "unshift" : "push"](() => {
      u = h, n(2, u);
    });
  }
  return e.$$set = (h) => {
    "size" in h && n(0, s = h.size), "unpadded_box" in h && n(1, a = h.unpadded_box), "$$scope" in h && n(4, l = h.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, i = o(u));
  }, [s, a, u, i, l, r, f];
}
class fl extends Wr {
  constructor(t) {
    super(), tl(this, t, ul, ol, il, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: hl,
  append: Et,
  attr: X,
  detach: cl,
  init: _l,
  insert: ml,
  noop: Tt,
  safe_not_equal: dl,
  set_style: Y,
  svg_element: et
} = window.__gradio__svelte__internal;
function bl(e) {
  let t, n, i, r;
  return {
    c() {
      t = et("svg"), n = et("g"), i = et("path"), r = et("path"), X(i, "d", "M18,6L6.087,17.913"), Y(i, "fill", "none"), Y(i, "fill-rule", "nonzero"), Y(i, "stroke-width", "2px"), X(n, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), X(r, "d", "M4.364,4.364L19.636,19.636"), Y(r, "fill", "none"), Y(r, "fill-rule", "nonzero"), Y(r, "stroke-width", "2px"), X(t, "width", "100%"), X(t, "height", "100%"), X(t, "viewBox", "0 0 24 24"), X(t, "version", "1.1"), X(t, "xmlns", "http://www.w3.org/2000/svg"), X(t, "xmlns:xlink", "http://www.w3.org/1999/xlink"), X(t, "xml:space", "preserve"), X(t, "stroke", "currentColor"), Y(t, "fill-rule", "evenodd"), Y(t, "clip-rule", "evenodd"), Y(t, "stroke-linecap", "round"), Y(t, "stroke-linejoin", "round");
    },
    m(l, s) {
      ml(l, t, s), Et(t, n), Et(n, i), Et(t, r);
    },
    p: Tt,
    i: Tt,
    o: Tt,
    d(l) {
      l && cl(t);
    }
  };
}
class gl extends hl {
  constructor(t) {
    super(), _l(this, t, null, bl, dl, {});
  }
}
const {
  SvelteComponent: pl,
  append: vl,
  attr: Z,
  detach: yl,
  init: wl,
  insert: El,
  noop: St,
  safe_not_equal: Tl,
  svg_element: bn
} = window.__gradio__svelte__internal;
function Sl(e) {
  let t, n;
  return {
    c() {
      t = bn("svg"), n = bn("path"), Z(n, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"), Z(t, "xmlns", "http://www.w3.org/2000/svg"), Z(t, "width", "100%"), Z(t, "height", "100%"), Z(t, "viewBox", "0 0 24 24"), Z(t, "fill", "none"), Z(t, "stroke", "currentColor"), Z(t, "stroke-width", "1.5"), Z(t, "stroke-linecap", "round"), Z(t, "stroke-linejoin", "round"), Z(t, "class", "feather feather-edit-2");
    },
    m(i, r) {
      El(i, t, r), vl(t, n);
    },
    p: St,
    i: St,
    o: St,
    d(i) {
      i && yl(t);
    }
  };
}
class Hl extends pl {
  constructor(t) {
    super(), wl(this, t, null, Sl, Tl, {});
  }
}
const {
  SvelteComponent: Bl,
  append: Ht,
  attr: k,
  detach: Al,
  init: Pl,
  insert: Cl,
  noop: Bt,
  safe_not_equal: Il,
  svg_element: tt
} = window.__gradio__svelte__internal;
function Nl(e) {
  let t, n, i, r;
  return {
    c() {
      t = tt("svg"), n = tt("rect"), i = tt("circle"), r = tt("polyline"), k(n, "x", "3"), k(n, "y", "3"), k(n, "width", "18"), k(n, "height", "18"), k(n, "rx", "2"), k(n, "ry", "2"), k(i, "cx", "8.5"), k(i, "cy", "8.5"), k(i, "r", "1.5"), k(r, "points", "21 15 16 10 5 21"), k(t, "xmlns", "http://www.w3.org/2000/svg"), k(t, "width", "100%"), k(t, "height", "100%"), k(t, "viewBox", "0 0 24 24"), k(t, "fill", "none"), k(t, "stroke", "currentColor"), k(t, "stroke-width", "1.5"), k(t, "stroke-linecap", "round"), k(t, "stroke-linejoin", "round"), k(t, "class", "feather feather-image");
    },
    m(l, s) {
      Cl(l, t, s), Ht(t, n), Ht(t, i), Ht(t, r);
    },
    p: Bt,
    i: Bt,
    o: Bt,
    d(l) {
      l && Al(t);
    }
  };
}
class wi extends Bl {
  constructor(t) {
    super(), Pl(this, t, null, Nl, Il, {});
  }
}
const {
  SvelteComponent: Ll,
  append: gn,
  attr: j,
  detach: kl,
  init: Ol,
  insert: Ml,
  noop: At,
  safe_not_equal: xl,
  svg_element: Pt
} = window.__gradio__svelte__internal;
function Rl(e) {
  let t, n, i;
  return {
    c() {
      t = Pt("svg"), n = Pt("polyline"), i = Pt("path"), j(n, "points", "1 4 1 10 7 10"), j(i, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"), j(t, "xmlns", "http://www.w3.org/2000/svg"), j(t, "width", "100%"), j(t, "height", "100%"), j(t, "viewBox", "0 0 24 24"), j(t, "fill", "none"), j(t, "stroke", "currentColor"), j(t, "stroke-width", "2"), j(t, "stroke-linecap", "round"), j(t, "stroke-linejoin", "round"), j(t, "class", "feather feather-rotate-ccw");
    },
    m(r, l) {
      Ml(r, t, l), gn(t, n), gn(t, i);
    },
    p: At,
    i: At,
    o: At,
    d(r) {
      r && kl(t);
    }
  };
}
class Dl extends Ll {
  constructor(t) {
    super(), Ol(this, t, null, Rl, xl, {});
  }
}
const Ul = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], pn = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Ul.reduce(
  (e, { color: t, primary: n, secondary: i }) => ({
    ...e,
    [t]: {
      primary: pn[t][n],
      secondary: pn[t][i]
    }
  }),
  {}
);
function He(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let i = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + i;
}
function Ee() {
}
function Gl(e) {
  return e();
}
function Fl(e) {
  e.forEach(Gl);
}
function jl(e) {
  return typeof e == "function";
}
function Vl(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ql(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return Ee;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ei = typeof window < "u";
let vn = Ei ? () => window.performance.now() : () => Date.now(), Ti = Ei ? (e) => requestAnimationFrame(e) : Ee;
const Be = /* @__PURE__ */ new Set();
function Si(e) {
  Be.forEach((t) => {
    t.c(e) || (Be.delete(t), t.f());
  }), Be.size !== 0 && Ti(Si);
}
function zl(e) {
  let t;
  return Be.size === 0 && Ti(Si), {
    promise: new Promise((n) => {
      Be.add(t = { c: e, f: n });
    }),
    abort() {
      Be.delete(t);
    }
  };
}
const Se = [];
function Xl(e, t) {
  return {
    subscribe: ze(e, t).subscribe
  };
}
function ze(e, t = Ee) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Vl(e, a) && (e = a, n)) {
      const u = !Se.length;
      for (const o of i)
        o[1](), Se.push(o, e);
      if (u) {
        for (let o = 0; o < Se.length; o += 2)
          Se[o][0](Se[o + 1]);
        Se.length = 0;
      }
    }
  }
  function l(a) {
    r(a(e));
  }
  function s(a, u = Ee) {
    const o = [a, u];
    return i.add(o), i.size === 1 && (n = t(r, l) || Ee), a(e), () => {
      i.delete(o), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function Oe(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = t.length < 2;
  return Xl(n, (s, a) => {
    let u = !1;
    const o = [];
    let f = 0, h = Ee;
    const c = () => {
      if (f)
        return;
      h();
      const m = t(i ? o[0] : o, s, a);
      l ? s(m) : h = jl(m) ? m : Ee;
    }, _ = r.map(
      (m, d) => ql(
        m,
        (E) => {
          o[d] = E, f &= ~(1 << d), u && c();
        },
        () => {
          f |= 1 << d;
        }
      )
    );
    return u = !0, c(), function() {
      Fl(_), h(), u = !1;
    };
  });
}
function yn(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Dt(e, t, n, i) {
  if (typeof n == "number" || yn(n)) {
    const r = i - n, l = (n - t) / (e.dt || 1 / 60), s = e.opts.stiffness * r, a = e.opts.damping * l, u = (s - a) * e.inv_mass, o = (l + u) * e.dt;
    return Math.abs(o) < e.opts.precision && Math.abs(r) < e.opts.precision ? i : (e.settled = !1, yn(n) ? new Date(n.getTime() + o) : n + o);
  } else {
    if (Array.isArray(n))
      return n.map(
        (r, l) => Dt(e, t[l], n[l], i[l])
      );
    if (typeof n == "object") {
      const r = {};
      for (const l in n)
        r[l] = Dt(e, t[l], n[l], i[l]);
      return r;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function wn(e, t = {}) {
  const n = ze(e), { stiffness: i = 0.15, damping: r = 0.8, precision: l = 0.01 } = t;
  let s, a, u, o = e, f = e, h = 1, c = 0, _ = !1;
  function m(E, g = {}) {
    f = E;
    const T = u = {};
    return e == null || g.hard || d.stiffness >= 1 && d.damping >= 1 ? (_ = !0, s = vn(), o = E, n.set(e = f), Promise.resolve()) : (g.soft && (c = 1 / ((g.soft === !0 ? 0.5 : +g.soft) * 60), h = 0), a || (s = vn(), _ = !1, a = zl((b) => {
      if (_)
        return _ = !1, a = null, !1;
      h = Math.min(h + c, 1);
      const S = {
        inv_mass: h,
        opts: d,
        settled: !0,
        dt: (b - s) * 60 / 1e3
      }, v = Dt(S, o, e, f);
      return s = b, o = e, n.set(e = v), S.settled && (a = null), !S.settled;
    })), new Promise((b) => {
      a.promise.then(() => {
        T === u && b();
      });
    }));
  }
  const d = {
    set: m,
    update: (E, g) => m(E(f, e), g),
    subscribe: n.subscribe,
    stiffness: i,
    damping: r,
    precision: l
  };
  return d;
}
const {
  SvelteComponent: Zl,
  append: W,
  attr: C,
  component_subscribe: En,
  detach: Wl,
  element: Ql,
  init: Jl,
  insert: Yl,
  noop: Tn,
  safe_not_equal: Kl,
  set_style: nt,
  svg_element: Q,
  toggle_class: Sn
} = window.__gradio__svelte__internal, { onMount: $l } = window.__gradio__svelte__internal;
function es(e) {
  let t, n, i, r, l, s, a, u, o, f, h, c;
  return {
    c() {
      t = Ql("div"), n = Q("svg"), i = Q("g"), r = Q("path"), l = Q("path"), s = Q("path"), a = Q("path"), u = Q("g"), o = Q("path"), f = Q("path"), h = Q("path"), c = Q("path"), C(r, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), C(r, "fill", "#FF7C00"), C(r, "fill-opacity", "0.4"), C(r, "class", "svelte-43sxxs"), C(l, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), C(l, "fill", "#FF7C00"), C(l, "class", "svelte-43sxxs"), C(s, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), C(s, "fill", "#FF7C00"), C(s, "fill-opacity", "0.4"), C(s, "class", "svelte-43sxxs"), C(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), C(a, "fill", "#FF7C00"), C(a, "class", "svelte-43sxxs"), nt(i, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), C(o, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), C(o, "fill", "#FF7C00"), C(o, "fill-opacity", "0.4"), C(o, "class", "svelte-43sxxs"), C(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), C(f, "fill", "#FF7C00"), C(f, "class", "svelte-43sxxs"), C(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), C(h, "fill", "#FF7C00"), C(h, "fill-opacity", "0.4"), C(h, "class", "svelte-43sxxs"), C(c, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), C(c, "fill", "#FF7C00"), C(c, "class", "svelte-43sxxs"), nt(u, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), C(n, "viewBox", "-1200 -1200 3000 3000"), C(n, "fill", "none"), C(n, "xmlns", "http://www.w3.org/2000/svg"), C(n, "class", "svelte-43sxxs"), C(t, "class", "svelte-43sxxs"), Sn(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(_, m) {
      Yl(_, t, m), W(t, n), W(n, i), W(i, r), W(i, l), W(i, s), W(i, a), W(n, u), W(u, o), W(u, f), W(u, h), W(u, c);
    },
    p(_, [m]) {
      m & /*$top*/
      2 && nt(i, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), m & /*$bottom*/
      4 && nt(u, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), m & /*margin*/
      1 && Sn(
        t,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Tn,
    o: Tn,
    d(_) {
      _ && Wl(t);
    }
  };
}
function ts(e, t, n) {
  let i, r, { margin: l = !0 } = t;
  const s = wn([0, 0]);
  En(e, s, (c) => n(1, i = c));
  const a = wn([0, 0]);
  En(e, a, (c) => n(2, r = c));
  let u;
  async function o() {
    await Promise.all([s.set([125, 140]), a.set([-125, -140])]), await Promise.all([s.set([-125, 140]), a.set([125, -140])]), await Promise.all([s.set([-125, 0]), a.set([125, -0])]), await Promise.all([s.set([125, 0]), a.set([-125, 0])]);
  }
  async function f() {
    await o(), u || f();
  }
  async function h() {
    await Promise.all([s.set([125, 0]), a.set([-125, 0])]), f();
  }
  return $l(() => (h(), () => u = !0)), e.$$set = (c) => {
    "margin" in c && n(0, l = c.margin);
  }, [l, i, r, s, a];
}
class ns extends Zl {
  constructor(t) {
    super(), Jl(this, t, ts, es, Kl, { margin: 0 });
  }
}
const {
  SvelteComponent: is,
  append: we,
  attr: $,
  binding_callbacks: Hn,
  check_outros: Hi,
  create_component: rs,
  create_slot: ls,
  destroy_component: ss,
  destroy_each: Bi,
  detach: H,
  element: le,
  empty: Me,
  ensure_array_like: ot,
  get_all_dirty_from_scope: os,
  get_slot_changes: as,
  group_outros: Ai,
  init: us,
  insert: B,
  mount_component: fs,
  noop: Ut,
  safe_not_equal: hs,
  set_data: z,
  set_style: _e,
  space: ee,
  text: L,
  toggle_class: V,
  transition_in: Ae,
  transition_out: Pe,
  update_slot_base: cs
} = window.__gradio__svelte__internal, { tick: _s } = window.__gradio__svelte__internal, { onDestroy: ms } = window.__gradio__svelte__internal, ds = (e) => ({}), Bn = (e) => ({});
function An(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i[40] = n, i;
}
function Pn(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i;
}
function bs(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), i, r, l;
  const s = (
    /*#slots*/
    e[29].error
  ), a = ls(
    s,
    e,
    /*$$scope*/
    e[28],
    Bn
  );
  return {
    c() {
      t = le("span"), i = L(n), r = ee(), a && a.c(), $(t, "class", "error svelte-1txqlrd");
    },
    m(u, o) {
      B(u, t, o), we(t, i), B(u, r, o), a && a.m(u, o), l = !0;
    },
    p(u, o) {
      (!l || o[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      u[1]("common.error") + "") && z(i, n), a && a.p && (!l || o[0] & /*$$scope*/
      268435456) && cs(
        a,
        s,
        u,
        /*$$scope*/
        u[28],
        l ? as(
          s,
          /*$$scope*/
          u[28],
          o,
          ds
        ) : os(
          /*$$scope*/
          u[28]
        ),
        Bn
      );
    },
    i(u) {
      l || (Ae(a, u), l = !0);
    },
    o(u) {
      Pe(a, u), l = !1;
    },
    d(u) {
      u && (H(t), H(r)), a && a.d(u);
    }
  };
}
function gs(e) {
  let t, n, i, r, l, s, a, u, o, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && Cn(e)
  );
  function h(b, S) {
    if (
      /*progress*/
      b[7]
    )
      return ys;
    if (
      /*queue_position*/
      b[2] !== null && /*queue_size*/
      b[3] !== void 0 && /*queue_position*/
      b[2] >= 0
    )
      return vs;
    if (
      /*queue_position*/
      b[2] === 0
    )
      return ps;
  }
  let c = h(e), _ = c && c(e), m = (
    /*timer*/
    e[5] && Ln(e)
  );
  const d = [Ss, Ts], E = [];
  function g(b, S) {
    return (
      /*last_progress_level*/
      b[15] != null ? 0 : (
        /*show_progress*/
        b[6] === "full" ? 1 : -1
      )
    );
  }
  ~(l = g(e)) && (s = E[l] = d[l](e));
  let T = !/*timer*/
  e[5] && Un(e);
  return {
    c() {
      f && f.c(), t = ee(), n = le("div"), _ && _.c(), i = ee(), m && m.c(), r = ee(), s && s.c(), a = ee(), T && T.c(), u = Me(), $(n, "class", "progress-text svelte-1txqlrd"), V(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), V(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(b, S) {
      f && f.m(b, S), B(b, t, S), B(b, n, S), _ && _.m(n, null), we(n, i), m && m.m(n, null), B(b, r, S), ~l && E[l].m(b, S), B(b, a, S), T && T.m(b, S), B(b, u, S), o = !0;
    },
    p(b, S) {
      /*variant*/
      b[8] === "default" && /*show_eta_bar*/
      b[18] && /*show_progress*/
      b[6] === "full" ? f ? f.p(b, S) : (f = Cn(b), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), c === (c = h(b)) && _ ? _.p(b, S) : (_ && _.d(1), _ = c && c(b), _ && (_.c(), _.m(n, i))), /*timer*/
      b[5] ? m ? m.p(b, S) : (m = Ln(b), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!o || S[0] & /*variant*/
      256) && V(
        n,
        "meta-text-center",
        /*variant*/
        b[8] === "center"
      ), (!o || S[0] & /*variant*/
      256) && V(
        n,
        "meta-text",
        /*variant*/
        b[8] === "default"
      );
      let v = l;
      l = g(b), l === v ? ~l && E[l].p(b, S) : (s && (Ai(), Pe(E[v], 1, 1, () => {
        E[v] = null;
      }), Hi()), ~l ? (s = E[l], s ? s.p(b, S) : (s = E[l] = d[l](b), s.c()), Ae(s, 1), s.m(a.parentNode, a)) : s = null), /*timer*/
      b[5] ? T && (T.d(1), T = null) : T ? T.p(b, S) : (T = Un(b), T.c(), T.m(u.parentNode, u));
    },
    i(b) {
      o || (Ae(s), o = !0);
    },
    o(b) {
      Pe(s), o = !1;
    },
    d(b) {
      b && (H(t), H(n), H(r), H(a), H(u)), f && f.d(b), _ && _.d(), m && m.d(), ~l && E[l].d(b), T && T.d(b);
    }
  };
}
function Cn(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = le("div"), $(t, "class", "eta-bar svelte-1txqlrd"), _e(t, "transform", n);
    },
    m(i, r) {
      B(i, t, r);
    },
    p(i, r) {
      r[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && _e(t, "transform", n);
    },
    d(i) {
      i && H(t);
    }
  };
}
function ps(e) {
  let t;
  return {
    c() {
      t = L("processing |");
    },
    m(n, i) {
      B(n, t, i);
    },
    p: Ut,
    d(n) {
      n && H(t);
    }
  };
}
function vs(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), i, r, l, s;
  return {
    c() {
      t = L("queue: "), i = L(n), r = L("/"), l = L(
        /*queue_size*/
        e[3]
      ), s = L(" |");
    },
    m(a, u) {
      B(a, t, u), B(a, i, u), B(a, r, u), B(a, l, u), B(a, s, u);
    },
    p(a, u) {
      u[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && z(i, n), u[0] & /*queue_size*/
      8 && z(
        l,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (H(t), H(i), H(r), H(l), H(s));
    }
  };
}
function ys(e) {
  let t, n = ot(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Nn(Pn(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = Me();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(r, l);
      B(r, t, l);
    },
    p(r, l) {
      if (l[0] & /*progress*/
      128) {
        n = ot(
          /*progress*/
          r[7]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Pn(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = Nn(a), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && H(t), Bi(i, r);
    }
  };
}
function In(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), i, r, l = " ", s;
  function a(f, h) {
    return (
      /*p*/
      f[38].length != null ? Es : ws
    );
  }
  let u = a(e), o = u(e);
  return {
    c() {
      o.c(), t = ee(), i = L(n), r = L(" | "), s = L(l);
    },
    m(f, h) {
      o.m(f, h), B(f, t, h), B(f, i, h), B(f, r, h), B(f, s, h);
    },
    p(f, h) {
      u === (u = a(f)) && o ? o.p(f, h) : (o.d(1), o = u(f), o && (o.c(), o.m(t.parentNode, t))), h[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && z(i, n);
    },
    d(f) {
      f && (H(t), H(i), H(r), H(s)), o.d(f);
    }
  };
}
function ws(e) {
  let t = He(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = L(t);
    },
    m(i, r) {
      B(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = He(
        /*p*/
        i[38].index || 0
      ) + "") && z(n, t);
    },
    d(i) {
      i && H(n);
    }
  };
}
function Es(e) {
  let t = He(
    /*p*/
    e[38].index || 0
  ) + "", n, i, r = He(
    /*p*/
    e[38].length
  ) + "", l;
  return {
    c() {
      n = L(t), i = L("/"), l = L(r);
    },
    m(s, a) {
      B(s, n, a), B(s, i, a), B(s, l, a);
    },
    p(s, a) {
      a[0] & /*progress*/
      128 && t !== (t = He(
        /*p*/
        s[38].index || 0
      ) + "") && z(n, t), a[0] & /*progress*/
      128 && r !== (r = He(
        /*p*/
        s[38].length
      ) + "") && z(l, r);
    },
    d(s) {
      s && (H(n), H(i), H(l));
    }
  };
}
function Nn(e) {
  let t, n = (
    /*p*/
    e[38].index != null && In(e)
  );
  return {
    c() {
      n && n.c(), t = Me();
    },
    m(i, r) {
      n && n.m(i, r), B(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].index != null ? n ? n.p(i, r) : (n = In(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && H(t), n && n.d(i);
    }
  };
}
function Ln(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), i, r;
  return {
    c() {
      t = L(
        /*formatted_timer*/
        e[20]
      ), i = L(n), r = L("s");
    },
    m(l, s) {
      B(l, t, s), B(l, i, s), B(l, r, s);
    },
    p(l, s) {
      s[0] & /*formatted_timer*/
      1048576 && z(
        t,
        /*formatted_timer*/
        l[20]
      ), s[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      l[0] ? `/${/*formatted_eta*/
      l[19]}` : "") && z(i, n);
    },
    d(l) {
      l && (H(t), H(i), H(r));
    }
  };
}
function Ts(e) {
  let t, n;
  return t = new ns({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      rs(t.$$.fragment);
    },
    m(i, r) {
      fs(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*variant*/
      256 && (l.margin = /*variant*/
      i[8] === "default"), t.$set(l);
    },
    i(i) {
      n || (Ae(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Pe(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ss(t, i);
    }
  };
}
function Ss(e) {
  let t, n, i, r, l, s = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && kn(e)
  );
  return {
    c() {
      t = le("div"), n = le("div"), a && a.c(), i = ee(), r = le("div"), l = le("div"), $(n, "class", "progress-level-inner svelte-1txqlrd"), $(l, "class", "progress-bar svelte-1txqlrd"), _e(l, "width", s), $(r, "class", "progress-bar-wrap svelte-1txqlrd"), $(t, "class", "progress-level svelte-1txqlrd");
    },
    m(u, o) {
      B(u, t, o), we(t, n), a && a.m(n, null), we(t, i), we(t, r), we(r, l), e[30](l);
    },
    p(u, o) {
      /*progress*/
      u[7] != null ? a ? a.p(u, o) : (a = kn(u), a.c(), a.m(n, null)) : a && (a.d(1), a = null), o[0] & /*last_progress_level*/
      32768 && s !== (s = `${/*last_progress_level*/
      u[15] * 100}%`) && _e(l, "width", s);
    },
    i: Ut,
    o: Ut,
    d(u) {
      u && H(t), a && a.d(), e[30](null);
    }
  };
}
function kn(e) {
  let t, n = ot(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Dn(An(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = Me();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(r, l);
      B(r, t, l);
    },
    p(r, l) {
      if (l[0] & /*progress_level, progress*/
      16512) {
        n = ot(
          /*progress*/
          r[7]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = An(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = Dn(a), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && H(t), Bi(i, r);
    }
  };
}
function On(e) {
  let t, n, i, r, l = (
    /*i*/
    e[40] !== 0 && Hs()
  ), s = (
    /*p*/
    e[38].desc != null && Mn(e)
  ), a = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && xn()
  ), u = (
    /*progress_level*/
    e[14] != null && Rn(e)
  );
  return {
    c() {
      l && l.c(), t = ee(), s && s.c(), n = ee(), a && a.c(), i = ee(), u && u.c(), r = Me();
    },
    m(o, f) {
      l && l.m(o, f), B(o, t, f), s && s.m(o, f), B(o, n, f), a && a.m(o, f), B(o, i, f), u && u.m(o, f), B(o, r, f);
    },
    p(o, f) {
      /*p*/
      o[38].desc != null ? s ? s.p(o, f) : (s = Mn(o), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), /*p*/
      o[38].desc != null && /*progress_level*/
      o[14] && /*progress_level*/
      o[14][
        /*i*/
        o[40]
      ] != null ? a || (a = xn(), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null), /*progress_level*/
      o[14] != null ? u ? u.p(o, f) : (u = Rn(o), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null);
    },
    d(o) {
      o && (H(t), H(n), H(i), H(r)), l && l.d(o), s && s.d(o), a && a.d(o), u && u.d(o);
    }
  };
}
function Hs(e) {
  let t;
  return {
    c() {
      t = L(" /");
    },
    m(n, i) {
      B(n, t, i);
    },
    d(n) {
      n && H(t);
    }
  };
}
function Mn(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = L(t);
    },
    m(i, r) {
      B(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = /*p*/
      i[38].desc + "") && z(n, t);
    },
    d(i) {
      i && H(n);
    }
  };
}
function xn(e) {
  let t;
  return {
    c() {
      t = L("-");
    },
    m(n, i) {
      B(n, t, i);
    },
    d(n) {
      n && H(t);
    }
  };
}
function Rn(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, i;
  return {
    c() {
      n = L(t), i = L("%");
    },
    m(r, l) {
      B(r, n, l), B(r, i, l);
    },
    p(r, l) {
      l[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (r[14][
        /*i*/
        r[40]
      ] || 0)).toFixed(1) + "") && z(n, t);
    },
    d(r) {
      r && (H(n), H(i));
    }
  };
}
function Dn(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && On(e)
  );
  return {
    c() {
      n && n.c(), t = Me();
    },
    m(i, r) {
      n && n.m(i, r), B(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? n ? n.p(i, r) : (n = On(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && H(t), n && n.d(i);
    }
  };
}
function Un(e) {
  let t, n;
  return {
    c() {
      t = le("p"), n = L(
        /*loading_text*/
        e[9]
      ), $(t, "class", "loading svelte-1txqlrd");
    },
    m(i, r) {
      B(i, t, r), we(t, n);
    },
    p(i, r) {
      r[0] & /*loading_text*/
      512 && z(
        n,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && H(t);
    }
  };
}
function Bs(e) {
  let t, n, i, r, l;
  const s = [gs, bs], a = [];
  function u(o, f) {
    return (
      /*status*/
      o[4] === "pending" ? 0 : (
        /*status*/
        o[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = u(e)) && (i = a[n] = s[n](e)), {
    c() {
      t = le("div"), i && i.c(), $(t, "class", r = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1txqlrd"), V(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), V(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), V(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), V(
        t,
        "border",
        /*border*/
        e[12]
      ), _e(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), _e(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(o, f) {
      B(o, t, f), ~n && a[n].m(t, null), e[31](t), l = !0;
    },
    p(o, f) {
      let h = n;
      n = u(o), n === h ? ~n && a[n].p(o, f) : (i && (Ai(), Pe(a[h], 1, 1, () => {
        a[h] = null;
      }), Hi()), ~n ? (i = a[n], i ? i.p(o, f) : (i = a[n] = s[n](o), i.c()), Ae(i, 1), i.m(t, null)) : i = null), (!l || f[0] & /*variant, show_progress*/
      320 && r !== (r = "wrap " + /*variant*/
      o[8] + " " + /*show_progress*/
      o[6] + " svelte-1txqlrd")) && $(t, "class", r), (!l || f[0] & /*variant, show_progress, status, show_progress*/
      336) && V(t, "hide", !/*status*/
      o[4] || /*status*/
      o[4] === "complete" || /*show_progress*/
      o[6] === "hidden"), (!l || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && V(
        t,
        "translucent",
        /*variant*/
        o[8] === "center" && /*status*/
        (o[4] === "pending" || /*status*/
        o[4] === "error") || /*translucent*/
        o[11] || /*show_progress*/
        o[6] === "minimal"
      ), (!l || f[0] & /*variant, show_progress, status*/
      336) && V(
        t,
        "generating",
        /*status*/
        o[4] === "generating"
      ), (!l || f[0] & /*variant, show_progress, border*/
      4416) && V(
        t,
        "border",
        /*border*/
        o[12]
      ), f[0] & /*absolute*/
      1024 && _e(
        t,
        "position",
        /*absolute*/
        o[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && _e(
        t,
        "padding",
        /*absolute*/
        o[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(o) {
      l || (Ae(i), l = !0);
    },
    o(o) {
      Pe(i), l = !1;
    },
    d(o) {
      o && H(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let it = [], Ct = !1;
async function As(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (it.push(e), !Ct)
      Ct = !0;
    else
      return;
    await _s(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let i = 0; i < it.length; i++) {
        const l = it[i].getBoundingClientRect();
        (i === 0 || l.top + window.scrollY <= n[0]) && (n[0] = l.top + window.scrollY, n[1] = i);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Ct = !1, it = [];
    });
  }
}
function Ps(e, t, n) {
  let i, { $$slots: r = {}, $$scope: l } = t, { i18n: s } = t, { eta: a = null } = t, { queue: u = !1 } = t, { queue_position: o } = t, { queue_size: f } = t, { status: h } = t, { scroll_to_output: c = !1 } = t, { timer: _ = !0 } = t, { show_progress: m = "full" } = t, { message: d = null } = t, { progress: E = null } = t, { variant: g = "default" } = t, { loading_text: T = "Loading..." } = t, { absolute: b = !0 } = t, { translucent: S = !1 } = t, { border: v = !1 } = t, { autoscroll: G } = t, O, M = !1, ae = 0, D = 0, w = null, We = 0, ne = null, ge, J = null, Qe = !0;
  const pt = () => {
    n(25, ae = performance.now()), n(26, D = 0), M = !0, Je();
  };
  function Je() {
    requestAnimationFrame(() => {
      n(26, D = (performance.now() - ae) / 1e3), M && Je();
    });
  }
  function Ye() {
    n(26, D = 0), M && (M = !1);
  }
  ms(() => {
    M && Ye();
  });
  let p = null;
  function pe(y) {
    Hn[y ? "unshift" : "push"](() => {
      J = y, n(16, J), n(7, E), n(14, ne), n(15, ge);
    });
  }
  function Re(y) {
    Hn[y ? "unshift" : "push"](() => {
      O = y, n(13, O);
    });
  }
  return e.$$set = (y) => {
    "i18n" in y && n(1, s = y.i18n), "eta" in y && n(0, a = y.eta), "queue" in y && n(21, u = y.queue), "queue_position" in y && n(2, o = y.queue_position), "queue_size" in y && n(3, f = y.queue_size), "status" in y && n(4, h = y.status), "scroll_to_output" in y && n(22, c = y.scroll_to_output), "timer" in y && n(5, _ = y.timer), "show_progress" in y && n(6, m = y.show_progress), "message" in y && n(23, d = y.message), "progress" in y && n(7, E = y.progress), "variant" in y && n(8, g = y.variant), "loading_text" in y && n(9, T = y.loading_text), "absolute" in y && n(10, b = y.absolute), "translucent" in y && n(11, S = y.translucent), "border" in y && n(12, v = y.border), "autoscroll" in y && n(24, G = y.autoscroll), "$$scope" in y && n(28, l = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? n(0, a = w) : u && n(0, a = (performance.now() - ae) / 1e3 + a), a != null && (n(19, p = a.toFixed(1)), n(27, w = a))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, We = a === null || a <= 0 || !D ? null : Math.min(D / a, 1)), e.$$.dirty[0] & /*progress*/
    128 && E != null && n(18, Qe = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (E != null ? n(14, ne = E.map((y) => {
      if (y.index != null && y.length != null)
        return y.index / y.length;
      if (y.progress != null)
        return y.progress;
    })) : n(14, ne = null), ne ? (n(15, ge = ne[ne.length - 1]), J && (ge === 0 ? n(16, J.style.transition = "0", J) : n(16, J.style.transition = "150ms", J))) : n(15, ge = void 0)), e.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? pt() : Ye()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && O && c && (h === "pending" || h === "complete") && As(O, G), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, i = D.toFixed(1));
  }, [
    a,
    s,
    o,
    f,
    h,
    _,
    m,
    E,
    g,
    T,
    b,
    S,
    v,
    O,
    ne,
    ge,
    J,
    We,
    Qe,
    p,
    i,
    u,
    c,
    d,
    G,
    ae,
    D,
    w,
    l,
    r,
    pe,
    Re
  ];
}
class Cs extends is {
  constructor(t) {
    super(), us(
      this,
      t,
      Ps,
      Bs,
      hs,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
new Intl.Collator(0, { numeric: 1 }).compare;
function Is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ns = function(t) {
  return Ls(t) && !ks(t);
};
function Ls(e) {
  return !!e && typeof e == "object";
}
function ks(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || xs(e);
}
var Os = typeof Symbol == "function" && Symbol.for, Ms = Os ? Symbol.for("react.element") : 60103;
function xs(e) {
  return e.$$typeof === Ms;
}
function Rs(e) {
  return Array.isArray(e) ? [] : {};
}
function je(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Ce(Rs(e), e, t) : e;
}
function Ds(e, t, n) {
  return e.concat(t).map(function(i) {
    return je(i, n);
  });
}
function Us(e, t) {
  if (!t.customMerge)
    return Ce;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Ce;
}
function Gs(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Gn(e) {
  return Object.keys(e).concat(Gs(e));
}
function Pi(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Fs(e, t) {
  return Pi(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function js(e, t, n) {
  var i = {};
  return n.isMergeableObject(e) && Gn(e).forEach(function(r) {
    i[r] = je(e[r], n);
  }), Gn(t).forEach(function(r) {
    Fs(e, r) || (Pi(e, r) && n.isMergeableObject(t[r]) ? i[r] = Us(r, n)(e[r], t[r], n) : i[r] = je(t[r], n));
  }), i;
}
function Ce(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Ds, n.isMergeableObject = n.isMergeableObject || Ns, n.cloneUnlessOtherwiseSpecified = je;
  var i = Array.isArray(t), r = Array.isArray(e), l = i === r;
  return l ? i ? n.arrayMerge(e, t, n) : js(e, t, n) : je(t, n);
}
Ce.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, r) {
    return Ce(i, r, n);
  }, {});
};
var Vs = Ce, qs = Vs;
const zs = /* @__PURE__ */ Is(qs);
var Gt = function(e, t) {
  return Gt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Gt(e, t);
};
function ht(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Gt(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var I = function() {
  return I = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }
    return t;
  }, I.apply(this, arguments);
};
function It(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, l; i < r; i++)
      (l || !(i in t)) && (l || (l = Array.prototype.slice.call(t, 0, i)), l[i] = t[i]);
  return e.concat(l || Array.prototype.slice.call(t));
}
var A;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(A || (A = {}));
var N;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(N || (N = {}));
var Ie;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Ie || (Ie = {}));
function Fn(e) {
  return e.type === N.literal;
}
function Xs(e) {
  return e.type === N.argument;
}
function Ci(e) {
  return e.type === N.number;
}
function Ii(e) {
  return e.type === N.date;
}
function Ni(e) {
  return e.type === N.time;
}
function Li(e) {
  return e.type === N.select;
}
function ki(e) {
  return e.type === N.plural;
}
function Zs(e) {
  return e.type === N.pound;
}
function Oi(e) {
  return e.type === N.tag;
}
function Mi(e) {
  return !!(e && typeof e == "object" && e.type === Ie.number);
}
function Ft(e) {
  return !!(e && typeof e == "object" && e.type === Ie.dateTime);
}
var xi = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ws = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Qs(e) {
  var t = {};
  return e.replace(Ws, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Js = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ys(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Js).filter(function(c) {
    return c.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var l = r[i], s = l.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = s[0], u = s.slice(1), o = 0, f = u; o < f.length; o++) {
      var h = f[o];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: u });
  }
  return n;
}
function Ks(e) {
  return e.replace(/^(.*?)-/, "");
}
var jn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ri = /^(@+)?(\+|#+)?[rs]?$/g, $s = /(\*)(0+)|(#+)(0+)|(0+)/g, Di = /^(0+)$/;
function Vn(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ri, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function Ui(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function eo(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Di.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function qn(e) {
  var t = {}, n = Ui(e);
  return n || t;
}
function to(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Ks(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = I(I(I({}, t), { notation: "scientific" }), r.options.reduce(function(u, o) {
          return I(I({}, u), qn(o));
        }, {}));
        continue;
      case "engineering":
        t = I(I(I({}, t), { notation: "engineering" }), r.options.reduce(function(u, o) {
          return I(I({}, u), qn(o));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(r.options[0]);
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace($s, function(u, o, f, h, c, _) {
          if (o)
            t.minimumIntegerDigits = f.length;
          else {
            if (h && c)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Di.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (jn.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(jn, function(u, o, f, h, c, _) {
        return f === "*" ? t.minimumFractionDigits = o.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : c && _ ? (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length + _.length) : (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length), "";
      });
      var l = r.options[0];
      l === "w" ? t = I(I({}, t), { trailingZeroDisplay: "stripIfInteger" }) : l && (t = I(I({}, t), Vn(l)));
      continue;
    }
    if (Ri.test(r.stem)) {
      t = I(I({}, t), Vn(r.stem));
      continue;
    }
    var s = Ui(r.stem);
    s && (t = I(I({}, t), s));
    var a = eo(r.stem);
    a && (t = I(I({}, t), a));
  }
  return t;
}
var rt = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function no(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var l = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        l++, i++;
      var s = 1 + (l & 1), a = l < 2 ? 1 : 3 + (l >> 1), u = "a", o = io(t);
      for ((o == "H" || o == "k") && (a = 0); a-- > 0; )
        n += u;
      for (; s-- > 0; )
        n = o + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function io(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, i;
  n !== "root" && (i = e.maximize().region);
  var r = rt[i || ""] || rt[n || ""] || rt["".concat(n, "-001")] || rt["001"];
  return r[0];
}
var Nt, ro = new RegExp("^".concat(xi.source, "*")), lo = new RegExp("".concat(xi.source, "*$"));
function P(e, t) {
  return { start: e, end: t };
}
var so = !!String.prototype.startsWith, oo = !!String.fromCodePoint, ao = !!Object.fromEntries, uo = !!String.prototype.codePointAt, fo = !!String.prototype.trimStart, ho = !!String.prototype.trimEnd, co = !!Number.isSafeInteger, _o = co ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, jt = !0;
try {
  var mo = Fi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  jt = ((Nt = mo.exec("a")) === null || Nt === void 0 ? void 0 : Nt[0]) === "a";
} catch {
  jt = !1;
}
var zn = so ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), Vt = oo ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, l = 0, s; r > l; ) {
      if (s = t[l++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      i += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return i;
  }
), Xn = (
  // native
  ao ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var l = r[i], s = l[0], a = l[1];
        n[s] = a;
      }
      return n;
    }
  )
), Gi = uo ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var r = t.charCodeAt(n), l;
      return r < 55296 || r > 56319 || n + 1 === i || (l = t.charCodeAt(n + 1)) < 56320 || l > 57343 ? r : (r - 55296 << 10) + (l - 56320) + 65536;
    }
  }
), bo = fo ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ro, "");
  }
), go = ho ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(lo, "");
  }
);
function Fi(e, t) {
  return new RegExp(e, t);
}
var qt;
if (jt) {
  var Zn = Fi("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  qt = function(t, n) {
    var i;
    Zn.lastIndex = n;
    var r = Zn.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  qt = function(t, n) {
    for (var i = []; ; ) {
      var r = Gi(t, n);
      if (r === void 0 || ji(r) || wo(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Vt.apply(void 0, i);
  };
var po = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var l = this.char();
        if (l === 123) {
          var s = this.parseArgument(t, i);
          if (s.err)
            return s;
          r.push(s.val);
        } else {
          if (l === 125 && t > 0)
            break;
          if (l === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), r.push({
              type: N.pound,
              location: P(a, this.clonePosition())
            });
          } else if (l === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(A.UNMATCHED_CLOSING_TAG, P(this.clonePosition(), this.clonePosition()));
          } else if (l === 60 && !this.ignoreTag && zt(this.peek() || 0)) {
            var s = this.parseTag(t, n);
            if (s.err)
              return s;
            r.push(s.val);
          } else {
            var s = this.parseLiteral(t, n);
            if (s.err)
              return s;
            r.push(s.val);
          }
        }
      }
      return { val: r, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: N.literal,
            value: "<".concat(r, "/>"),
            location: P(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var l = this.parseMessage(t + 1, n, !0);
        if (l.err)
          return l;
        var s = l.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !zt(this.char()))
            return this.error(A.INVALID_TAG, P(a, this.clonePosition()));
          var u = this.clonePosition(), o = this.parseTagName();
          return r !== o ? this.error(A.UNMATCHED_CLOSING_TAG, P(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: N.tag,
              value: r,
              children: s,
              location: P(i, this.clonePosition())
            },
            err: null
          } : this.error(A.INVALID_TAG, P(a, this.clonePosition())));
        } else
          return this.error(A.UNCLOSED_TAG, P(i, this.clonePosition()));
      } else
        return this.error(A.INVALID_TAG, P(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && yo(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var l = this.tryParseQuote(n);
        if (l) {
          r += l;
          continue;
        }
        var s = this.tryParseUnquoted(t, n);
        if (s) {
          r += s;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          r += a;
          continue;
        }
        break;
      }
      var u = P(i, this.clonePosition());
      return {
        val: { type: N.literal, value: r, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !vo(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return Vt.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), Vt(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(A.EMPTY_ARGUMENT, P(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(A.MALFORMED_ARGUMENT, P(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: N.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: P(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, P(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(A.MALFORMED_ARGUMENT, P(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = qt(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var l = this.clonePosition(), s = P(t, l);
      return { value: i, location: s };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var l, s = this.clonePosition(), a = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (a) {
        case "":
          return this.error(A.EXPECT_ARGUMENT_TYPE, P(s, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var o = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var c = go(h.val);
            if (c.length === 0)
              return this.error(A.EXPECT_ARGUMENT_STYLE, P(this.clonePosition(), this.clonePosition()));
            var _ = P(f, this.clonePosition());
            o = { style: c, styleLocation: _ };
          }
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var d = P(r, this.clonePosition());
          if (o && zn(o == null ? void 0 : o.style, "::", 0)) {
            var E = bo(o.style.slice(2));
            if (a === "number") {
              var h = this.parseNumberSkeletonFromString(E, o.styleLocation);
              return h.err ? h : {
                val: { type: N.number, value: i, location: d, style: h.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(A.EXPECT_DATE_TIME_SKELETON, d);
              var g = E;
              this.locale && (g = no(E, this.locale));
              var c = {
                type: Ie.dateTime,
                pattern: g,
                location: o.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Qs(g) : {}
              }, T = a === "date" ? N.date : N.time;
              return {
                val: { type: T, value: i, location: d, style: c },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? N.number : a === "date" ? N.date : N.time,
              value: i,
              location: d,
              style: (l = o == null ? void 0 : o.style) !== null && l !== void 0 ? l : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var b = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(A.EXPECT_SELECT_ARGUMENT_OPTIONS, P(b, I({}, b)));
          this.bumpSpace();
          var S = this.parseIdentifierIfPossible(), v = 0;
          if (a !== "select" && S.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(A.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(A.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), S = this.parseIdentifierIfPossible(), v = h.val;
          }
          var G = this.tryParsePluralOrSelectOptions(t, a, n, S);
          if (G.err)
            return G;
          var m = this.tryParseArgumentClose(r);
          if (m.err)
            return m;
          var O = P(r, this.clonePosition());
          return a === "select" ? {
            val: {
              type: N.select,
              value: i,
              options: Xn(G.val),
              location: O
            },
            err: null
          } : {
            val: {
              type: N.plural,
              value: i,
              options: Xn(G.val),
              offset: v,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: O
            },
            err: null
          };
        }
        default:
          return this.error(A.INVALID_ARGUMENT_TYPE, P(s, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(A.EXPECT_ARGUMENT_CLOSING_BRACE, P(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(A.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, P(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = Ys(t);
      } catch {
        return this.error(A.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ie.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? to(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var l, s = !1, a = [], u = /* @__PURE__ */ new Set(), o = r.value, f = r.location; ; ) {
        if (o.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var c = this.tryParseDecimalInteger(A.EXPECT_PLURAL_ARGUMENT_SELECTOR, A.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (c.err)
              return c;
            f = P(h, this.clonePosition()), o = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(o))
          return this.error(n === "select" ? A.DUPLICATE_SELECT_ARGUMENT_SELECTOR : A.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        o === "other" && (s = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? A.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : A.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, P(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, n, i);
        if (m.err)
          return m;
        var d = this.tryParseArgumentClose(_);
        if (d.err)
          return d;
        a.push([
          o,
          {
            value: m.val,
            location: P(_, this.clonePosition())
          }
        ]), u.add(o), this.bumpSpace(), l = this.parseIdentifierIfPossible(), o = l.value, f = l.location;
      }
      return a.length === 0 ? this.error(n === "select" ? A.EXPECT_SELECT_ARGUMENT_SELECTOR : A.EXPECT_PLURAL_ARGUMENT_SELECTOR, P(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(A.MISSING_OTHER_CLAUSE, P(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var l = !1, s = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          l = !0, s = s * 10 + (a - 48), this.bump();
        else
          break;
      }
      var u = P(r, this.clonePosition());
      return l ? (s *= i, _o(s) ? { val: s, err: null } : this.error(n, u)) : this.error(t, u);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Gi(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (zn(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && ji(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function zt(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function vo(e) {
  return zt(e) || e === 47;
}
function yo(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function ji(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function wo(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Xt(e) {
  e.forEach(function(t) {
    if (delete t.location, Li(t) || ki(t))
      for (var n in t.options)
        delete t.options[n].location, Xt(t.options[n].value);
    else
      Ci(t) && Mi(t.style) || (Ii(t) || Ni(t)) && Ft(t.style) ? delete t.style.location : Oi(t) && Xt(t.children);
  });
}
function Eo(e, t) {
  t === void 0 && (t = {}), t = I({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new po(e, t).parse();
  if (n.err) {
    var i = SyntaxError(A[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || Xt(n.val), n.val;
}
function Lt(e, t) {
  var n = t && t.cache ? t.cache : Po, i = t && t.serializer ? t.serializer : Ao, r = t && t.strategy ? t.strategy : So;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function To(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Vi(e, t, n, i) {
  var r = To(i) ? i : n(i), l = t.get(r);
  return typeof l > "u" && (l = e.call(this, i), t.set(r, l)), l;
}
function qi(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), l = t.get(r);
  return typeof l > "u" && (l = e.apply(this, i), t.set(r, l)), l;
}
function rn(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function So(e, t) {
  var n = e.length === 1 ? Vi : qi;
  return rn(e, this, n, t.cache.create(), t.serializer);
}
function Ho(e, t) {
  return rn(e, this, qi, t.cache.create(), t.serializer);
}
function Bo(e, t) {
  return rn(e, this, Vi, t.cache.create(), t.serializer);
}
var Ao = function() {
  return JSON.stringify(arguments);
};
function ln() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ln.prototype.get = function(e) {
  return this.cache[e];
};
ln.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Po = {
  create: function() {
    return new ln();
  }
}, kt = {
  variadic: Ho,
  monadic: Bo
}, Ne;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Ne || (Ne = {}));
var ct = (
  /** @class */
  function(e) {
    ht(t, e);
    function t(n, i, r) {
      var l = e.call(this, n) || this;
      return l.code = i, l.originalMessage = r, l;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Wn = (
  /** @class */
  function(e) {
    ht(t, e);
    function t(n, i, r, l) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Ne.INVALID_VALUE, l) || this;
    }
    return t;
  }(ct)
), Co = (
  /** @class */
  function(e) {
    ht(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Ne.INVALID_VALUE, r) || this;
    }
    return t;
  }(ct)
), Io = (
  /** @class */
  function(e) {
    ht(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Ne.MISSING_VALUE, i) || this;
    }
    return t;
  }(ct)
), x;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(x || (x = {}));
function No(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== x.literal || n.type !== x.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function Lo(e) {
  return typeof e == "function";
}
function lt(e, t, n, i, r, l, s) {
  if (e.length === 1 && Fn(e[0]))
    return [
      {
        type: x.literal,
        value: e[0].value
      }
    ];
  for (var a = [], u = 0, o = e; u < o.length; u++) {
    var f = o[u];
    if (Fn(f)) {
      a.push({
        type: x.literal,
        value: f.value
      });
      continue;
    }
    if (Zs(f)) {
      typeof l == "number" && a.push({
        type: x.literal,
        value: n.getNumberFormat(t).format(l)
      });
      continue;
    }
    var h = f.value;
    if (!(r && h in r))
      throw new Io(h, s);
    var c = r[h];
    if (Xs(f)) {
      (!c || typeof c == "string" || typeof c == "number") && (c = typeof c == "string" || typeof c == "number" ? String(c) : ""), a.push({
        type: typeof c == "string" ? x.literal : x.object,
        value: c
      });
      continue;
    }
    if (Ii(f)) {
      var _ = typeof f.style == "string" ? i.date[f.style] : Ft(f.style) ? f.style.parsedOptions : void 0;
      a.push({
        type: x.literal,
        value: n.getDateTimeFormat(t, _).format(c)
      });
      continue;
    }
    if (Ni(f)) {
      var _ = typeof f.style == "string" ? i.time[f.style] : Ft(f.style) ? f.style.parsedOptions : i.time.medium;
      a.push({
        type: x.literal,
        value: n.getDateTimeFormat(t, _).format(c)
      });
      continue;
    }
    if (Ci(f)) {
      var _ = typeof f.style == "string" ? i.number[f.style] : Mi(f.style) ? f.style.parsedOptions : void 0;
      _ && _.scale && (c = c * (_.scale || 1)), a.push({
        type: x.literal,
        value: n.getNumberFormat(t, _).format(c)
      });
      continue;
    }
    if (Oi(f)) {
      var m = f.children, d = f.value, E = r[d];
      if (!Lo(E))
        throw new Co(d, "function", s);
      var g = lt(m, t, n, i, r, l), T = E(g.map(function(v) {
        return v.value;
      }));
      Array.isArray(T) || (T = [T]), a.push.apply(a, T.map(function(v) {
        return {
          type: typeof v == "string" ? x.literal : x.object,
          value: v
        };
      }));
    }
    if (Li(f)) {
      var b = f.options[c] || f.options.other;
      if (!b)
        throw new Wn(f.value, c, Object.keys(f.options), s);
      a.push.apply(a, lt(b.value, t, n, i, r));
      continue;
    }
    if (ki(f)) {
      var b = f.options["=".concat(c)];
      if (!b) {
        if (!Intl.PluralRules)
          throw new ct(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ne.MISSING_INTL_API, s);
        var S = n.getPluralRules(t, { type: f.pluralType }).select(c - (f.offset || 0));
        b = f.options[S] || f.options.other;
      }
      if (!b)
        throw new Wn(f.value, c, Object.keys(f.options), s);
      a.push.apply(a, lt(b.value, t, n, i, r, c - (f.offset || 0)));
      continue;
    }
  }
  return No(a);
}
function ko(e, t) {
  return t ? I(I(I({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = I(I({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function Oo(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = ko(e[i], t[i]), n;
  }, I({}, e)) : e;
}
function Ot(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function Mo(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Lt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, It([void 0], n, !1)))();
    }, {
      cache: Ot(e.number),
      strategy: kt.variadic
    }),
    getDateTimeFormat: Lt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, It([void 0], n, !1)))();
    }, {
      cache: Ot(e.dateTime),
      strategy: kt.variadic
    }),
    getPluralRules: Lt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, It([void 0], n, !1)))();
    }, {
      cache: Ot(e.pluralRules),
      strategy: kt.variadic
    })
  };
}
var xo = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      var l = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(s) {
        var a = l.formatToParts(s);
        if (a.length === 1)
          return a[0].value;
        var u = a.reduce(function(o, f) {
          return !o.length || f.type !== x.literal || typeof o[o.length - 1] != "string" ? o.push(f.value) : o[o.length - 1] += f.value, o;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(s) {
        return lt(l.ast, l.locales, l.formatters, l.formats, s, void 0, l.message);
      }, this.resolvedOptions = function() {
        return {
          locale: l.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return l.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: r == null ? void 0 : r.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Oo(e.formats, i), this.formatters = r && r.formatters || Mo(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = Eo, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function Ro(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let i = e;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const l = n.slice(r, n.length).join(".");
        if (l in i) {
          i = i[l];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const me = {}, Do = (e, t, n) => n && (t in me || (me[t] = {}), e in me[t] || (me[t][e] = n), n), zi = (e, t) => {
  if (t == null)
    return;
  if (t in me && e in me[t])
    return me[t][e];
  const n = _t(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], l = Go(r, e);
    if (l)
      return Do(e, t, l);
  }
};
let sn;
const Xe = ze({});
function Uo(e) {
  return sn[e] || null;
}
function Xi(e) {
  return e in sn;
}
function Go(e, t) {
  if (!Xi(e))
    return null;
  const n = Uo(e);
  return Ro(n, t);
}
function Fo(e) {
  if (e == null)
    return;
  const t = _t(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Xi(i))
      return i;
  }
}
function jo(e, ...t) {
  delete me[e], Xe.update((n) => (n[e] = zs.all([n[e] || {}, ...t]), n));
}
Oe(
  [Xe],
  ([e]) => Object.keys(e)
);
Xe.subscribe((e) => sn = e);
const st = {};
function Vo(e, t) {
  st[e].delete(t), st[e].size === 0 && delete st[e];
}
function Zi(e) {
  return st[e];
}
function qo(e) {
  return _t(e).map((t) => {
    const n = Zi(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Zt(e) {
  return e == null ? !1 : _t(e).some(
    (t) => {
      var n;
      return (n = Zi(t)) == null ? void 0 : n.size;
    }
  );
}
function zo(e, t) {
  return Promise.all(
    t.map((i) => (Vo(e, i), i().then((r) => r.default || r)))
  ).then((i) => jo(e, ...i));
}
const Ue = {};
function Wi(e) {
  if (!Zt(e))
    return e in Ue ? Ue[e] : Promise.resolve();
  const t = qo(e);
  return Ue[e] = Promise.all(
    t.map(
      ([n, i]) => zo(n, i)
    )
  ).then(() => {
    if (Zt(e))
      return Wi(e);
    delete Ue[e];
  }), Ue[e];
}
const Xo = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, Zo = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Xo,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Wo = Zo;
function Le() {
  return Wo;
}
const Mt = ze(!1);
var Qo = Object.defineProperty, Jo = Object.defineProperties, Yo = Object.getOwnPropertyDescriptors, Qn = Object.getOwnPropertySymbols, Ko = Object.prototype.hasOwnProperty, $o = Object.prototype.propertyIsEnumerable, Jn = (e, t, n) => t in e ? Qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ea = (e, t) => {
  for (var n in t || (t = {}))
    Ko.call(t, n) && Jn(e, n, t[n]);
  if (Qn)
    for (var n of Qn(t))
      $o.call(t, n) && Jn(e, n, t[n]);
  return e;
}, ta = (e, t) => Jo(e, Yo(t));
let Wt;
const at = ze(null);
function Yn(e) {
  return e.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function _t(e, t = Le().fallbackLocale) {
  const n = Yn(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Yn(t)])] : n;
}
function Te() {
  return Wt ?? void 0;
}
at.subscribe((e) => {
  Wt = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const na = (e) => {
  if (e && Fo(e) && Zt(e)) {
    const { loadingDelay: t } = Le();
    let n;
    return typeof window < "u" && Te() != null && t ? n = window.setTimeout(
      () => Mt.set(!0),
      t
    ) : Mt.set(!0), Wi(e).then(() => {
      at.set(e);
    }).finally(() => {
      clearTimeout(n), Mt.set(!1);
    });
  }
  return at.set(e);
}, Ze = ta(ea({}, at), {
  set: na
}), mt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in t ? t[r] : t[r] = e(i);
  };
};
var ia = Object.defineProperty, ut = Object.getOwnPropertySymbols, Qi = Object.prototype.hasOwnProperty, Ji = Object.prototype.propertyIsEnumerable, Kn = (e, t, n) => t in e ? ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, on = (e, t) => {
  for (var n in t || (t = {}))
    Qi.call(t, n) && Kn(e, n, t[n]);
  if (ut)
    for (var n of ut(t))
      Ji.call(t, n) && Kn(e, n, t[n]);
  return e;
}, xe = (e, t) => {
  var n = {};
  for (var i in e)
    Qi.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && ut)
    for (var i of ut(e))
      t.indexOf(i) < 0 && Ji.call(e, i) && (n[i] = e[i]);
  return n;
};
const Ve = (e, t) => {
  const { formats: n } = Le();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, ra = mt(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = xe(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = Ve("number", i)), new Intl.NumberFormat(n, r);
  }
), la = mt(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = xe(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = Ve("date", i) : Object.keys(r).length === 0 && (r = Ve("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), sa = mt(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = xe(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = Ve("time", i) : Object.keys(r).length === 0 && (r = Ve("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), oa = (e = {}) => {
  var t = e, {
    locale: n = Te()
  } = t, i = xe(t, [
    "locale"
  ]);
  return ra(on({ locale: n }, i));
}, aa = (e = {}) => {
  var t = e, {
    locale: n = Te()
  } = t, i = xe(t, [
    "locale"
  ]);
  return la(on({ locale: n }, i));
}, ua = (e = {}) => {
  var t = e, {
    locale: n = Te()
  } = t, i = xe(t, [
    "locale"
  ]);
  return sa(on({ locale: n }, i));
}, fa = mt(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Te()) => new xo(e, t, Le().formats, {
    ignoreTag: Le().ignoreTag
  })
), ha = (e, t = {}) => {
  var n, i, r, l;
  let s = t;
  typeof e == "object" && (s = e, e = s.id);
  const {
    values: a,
    locale: u = Te(),
    default: o
  } = s;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = zi(e, u);
  if (!f)
    f = (l = (r = (i = (n = Le()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: u, id: e, defaultValue: o })) != null ? r : o) != null ? l : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let h = f;
  try {
    h = fa(f, u).format(a);
  } catch (c) {
    c instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      c.message
    );
  }
  return h;
}, ca = (e, t) => ua(t).format(e), _a = (e, t) => aa(t).format(e), ma = (e, t) => oa(t).format(e), da = (e, t = Te()) => zi(e, t);
Oe([Ze, Xe], () => ha);
Oe([Ze], () => ca);
Oe([Ze], () => _a);
Oe([Ze], () => ma);
Oe([Ze, Xe], () => da);
const {
  SvelteComponent: ba,
  append: $n,
  attr: ga,
  check_outros: ei,
  create_component: an,
  destroy_component: un,
  detach: pa,
  element: va,
  group_outros: ti,
  init: ya,
  insert: wa,
  mount_component: fn,
  safe_not_equal: Ea,
  set_style: ni,
  space: ii,
  toggle_class: ri,
  transition_in: re,
  transition_out: ye
} = window.__gradio__svelte__internal, { createEventDispatcher: Ta } = window.__gradio__svelte__internal;
function li(e) {
  let t, n;
  return t = new nn({
    props: {
      Icon: Hl,
      label: (
        /*i18n*/
        e[3]("common.edit")
      )
    }
  }), t.$on(
    "click",
    /*click_handler*/
    e[5]
  ), {
    c() {
      an(t.$$.fragment);
    },
    m(i, r) {
      fn(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*i18n*/
      8 && (l.label = /*i18n*/
      i[3]("common.edit")), t.$set(l);
    },
    i(i) {
      n || (re(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      un(t, i);
    }
  };
}
function si(e) {
  let t, n;
  return t = new nn({
    props: {
      Icon: Dl,
      label: (
        /*i18n*/
        e[3]("common.undo")
      )
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[6]
  ), {
    c() {
      an(t.$$.fragment);
    },
    m(i, r) {
      fn(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*i18n*/
      8 && (l.label = /*i18n*/
      i[3]("common.undo")), t.$set(l);
    },
    i(i) {
      n || (re(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ye(t.$$.fragment, i), n = !1;
    },
    d(i) {
      un(t, i);
    }
  };
}
function Sa(e) {
  let t, n, i, r, l, s = (
    /*editable*/
    e[0] && li(e)
  ), a = (
    /*undoable*/
    e[1] && si(e)
  );
  return r = new nn({
    props: {
      Icon: gl,
      label: (
        /*i18n*/
        e[3]("common.clear")
      )
    }
  }), r.$on(
    "click",
    /*click_handler_2*/
    e[7]
  ), {
    c() {
      t = va("div"), s && s.c(), n = ii(), a && a.c(), i = ii(), an(r.$$.fragment), ga(t, "class", "svelte-1wj0ocy"), ri(t, "not-absolute", !/*absolute*/
      e[2]), ni(
        t,
        "position",
        /*absolute*/
        e[2] ? "absolute" : "static"
      );
    },
    m(u, o) {
      wa(u, t, o), s && s.m(t, null), $n(t, n), a && a.m(t, null), $n(t, i), fn(r, t, null), l = !0;
    },
    p(u, [o]) {
      /*editable*/
      u[0] ? s ? (s.p(u, o), o & /*editable*/
      1 && re(s, 1)) : (s = li(u), s.c(), re(s, 1), s.m(t, n)) : s && (ti(), ye(s, 1, 1, () => {
        s = null;
      }), ei()), /*undoable*/
      u[1] ? a ? (a.p(u, o), o & /*undoable*/
      2 && re(a, 1)) : (a = si(u), a.c(), re(a, 1), a.m(t, i)) : a && (ti(), ye(a, 1, 1, () => {
        a = null;
      }), ei());
      const f = {};
      o & /*i18n*/
      8 && (f.label = /*i18n*/
      u[3]("common.clear")), r.$set(f), (!l || o & /*absolute*/
      4) && ri(t, "not-absolute", !/*absolute*/
      u[2]), o & /*absolute*/
      4 && ni(
        t,
        "position",
        /*absolute*/
        u[2] ? "absolute" : "static"
      );
    },
    i(u) {
      l || (re(s), re(a), re(r.$$.fragment, u), l = !0);
    },
    o(u) {
      ye(s), ye(a), ye(r.$$.fragment, u), l = !1;
    },
    d(u) {
      u && pa(t), s && s.d(), a && a.d(), un(r);
    }
  };
}
function Ha(e, t, n) {
  let { editable: i = !1 } = t, { undoable: r = !1 } = t, { absolute: l = !0 } = t, { i18n: s } = t;
  const a = Ta(), u = () => a("edit"), o = () => a("undo"), f = (h) => {
    a("clear"), h.stopPropagation();
  };
  return e.$$set = (h) => {
    "editable" in h && n(0, i = h.editable), "undoable" in h && n(1, r = h.undoable), "absolute" in h && n(2, l = h.absolute), "i18n" in h && n(3, s = h.i18n);
  }, [
    i,
    r,
    l,
    s,
    a,
    u,
    o,
    f
  ];
}
class Ba extends ba {
  constructor(t) {
    super(), ya(this, t, Ha, Sa, Ea, {
      editable: 0,
      undoable: 1,
      absolute: 2,
      i18n: 3
    });
  }
}
var oi = Object.prototype.hasOwnProperty;
function ai(e, t, n) {
  for (n of e.keys())
    if (Fe(n, t))
      return n;
}
function Fe(e, t) {
  var n, i, r;
  if (e === t)
    return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date)
      return e.getTime() === t.getTime();
    if (n === RegExp)
      return e.toString() === t.toString();
    if (n === Array) {
      if ((i = e.length) === t.length)
        for (; i-- && Fe(e[i], t[i]); )
          ;
      return i === -1;
    }
    if (n === Set) {
      if (e.size !== t.size)
        return !1;
      for (i of e)
        if (r = i, r && typeof r == "object" && (r = ai(t, r), !r) || !t.has(r))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size)
        return !1;
      for (i of e)
        if (r = i[0], r && typeof r == "object" && (r = ai(t, r), !r) || !Fe(i[1], t.get(r)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((i = e.byteLength) === t.byteLength)
        for (; i-- && e.getInt8(i) === t.getInt8(i); )
          ;
      return i === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((i = e.byteLength) === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    if (!n || typeof e == "object") {
      i = 0;
      for (n in e)
        if (oi.call(e, n) && ++i && !oi.call(t, n) || !(n in t) || !Fe(e[n], t[n]))
          return !1;
      return Object.keys(t).length === i;
    }
  }
  return e !== e && t !== t;
}
const {
  HtmlTag: Yi,
  SvelteComponent: Aa,
  add_iframe_resize_listener: Pa,
  add_render_callback: Ki,
  append: ce,
  attr: R,
  binding_callbacks: ui,
  check_outros: Qt,
  create_component: dt,
  destroy_component: bt,
  destroy_each: $i,
  detach: se,
  element: de,
  empty: er,
  ensure_array_like: ft,
  group_outros: Jt,
  init: Ca,
  insert: oe,
  listen: qe,
  mount_component: gt,
  noop: Ia,
  run_all: Na,
  safe_not_equal: La,
  set_style: K,
  space: ke,
  text: ka,
  toggle_class: be,
  transition_in: q,
  transition_out: te
} = window.__gradio__svelte__internal, { createEventDispatcher: Oa } = window.__gradio__svelte__internal, { tick: Ma } = window.__gradio__svelte__internal;
function fi(e, t, n) {
  const i = e.slice();
  return i[33] = t[n], i[35] = n, i;
}
function hi(e, t, n) {
  const i = e.slice();
  return i[36] = t[n], i[37] = t, i[35] = n, i;
}
function ci(e) {
  let t, n;
  return t = new Lr({
    props: {
      show_label: (
        /*show_label*/
        e[1]
      ),
      Icon: wi,
      label: (
        /*label*/
        e[2] || "Gallery"
      )
    }
  }), {
    c() {
      dt(t.$$.fragment);
    },
    m(i, r) {
      gt(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*show_label*/
      2 && (l.show_label = /*show_label*/
      i[1]), r[0] & /*label*/
      4 && (l.label = /*label*/
      i[2] || "Gallery"), t.$set(l);
    },
    i(i) {
      n || (q(t.$$.fragment, i), n = !0);
    },
    o(i) {
      te(t.$$.fragment, i), n = !1;
    },
    d(i) {
      bt(t, i);
    }
  };
}
function xa(e) {
  let t, n, i, r, l, s = (
    /*selected_index*/
    e[0] !== null && /*allow_preview*/
    e[7] && _i(e)
  ), a = ft(
    /*_value*/
    e[10]
  ), u = [];
  for (let o = 0; o < a.length; o += 1)
    u[o] = di(fi(e, a, o));
  return {
    c() {
      s && s.c(), t = ke(), n = de("div"), i = de("div");
      for (let o = 0; o < u.length; o += 1)
        u[o].c();
      R(i, "class", "grid-container svelte-1o5y3z7"), K(
        i,
        "--grid-cols",
        /*columns*/
        e[4]
      ), K(
        i,
        "--grid-rows",
        /*rows*/
        e[5]
      ), K(
        i,
        "--object-fit",
        /*object_fit*/
        e[8]
      ), K(
        i,
        "height",
        /*height*/
        e[6]
      ), be(
        i,
        "pt-6",
        /*show_label*/
        e[1]
      ), R(n, "class", "grid-wrap svelte-1o5y3z7"), Ki(() => (
        /*div1_elementresize_handler*/
        e[28].call(n)
      )), be(n, "fixed-height", !/*height*/
      e[6] || /*height*/
      e[6] == "auto");
    },
    m(o, f) {
      s && s.m(o, f), oe(o, t, f), oe(o, n, f), ce(n, i);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(i, null);
      r = Pa(
        n,
        /*div1_elementresize_handler*/
        e[28].bind(n)
      ), l = !0;
    },
    p(o, f) {
      if (/*selected_index*/
      o[0] !== null && /*allow_preview*/
      o[7] ? s ? (s.p(o, f), f[0] & /*selected_index, allow_preview*/
      129 && q(s, 1)) : (s = _i(o), s.c(), q(s, 1), s.m(t.parentNode, t)) : s && (Jt(), te(s, 1, 1, () => {
        s = null;
      }), Qt()), f[0] & /*_value, selected_index*/
      1025) {
        a = ft(
          /*_value*/
          o[10]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const c = fi(o, a, h);
          u[h] ? u[h].p(c, f) : (u[h] = di(c), u[h].c(), u[h].m(i, null));
        }
        for (; h < u.length; h += 1)
          u[h].d(1);
        u.length = a.length;
      }
      (!l || f[0] & /*columns*/
      16) && K(
        i,
        "--grid-cols",
        /*columns*/
        o[4]
      ), (!l || f[0] & /*rows*/
      32) && K(
        i,
        "--grid-rows",
        /*rows*/
        o[5]
      ), (!l || f[0] & /*object_fit*/
      256) && K(
        i,
        "--object-fit",
        /*object_fit*/
        o[8]
      ), (!l || f[0] & /*height*/
      64) && K(
        i,
        "height",
        /*height*/
        o[6]
      ), (!l || f[0] & /*show_label*/
      2) && be(
        i,
        "pt-6",
        /*show_label*/
        o[1]
      ), (!l || f[0] & /*height*/
      64) && be(n, "fixed-height", !/*height*/
      o[6] || /*height*/
      o[6] == "auto");
    },
    i(o) {
      l || (q(s), l = !0);
    },
    o(o) {
      te(s), l = !1;
    },
    d(o) {
      o && (se(t), se(n)), s && s.d(o), $i(u, o), r();
    }
  };
}
function Ra(e) {
  let t, n;
  return t = new fl({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Ga] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      dt(t.$$.fragment);
    },
    m(i, r) {
      gt(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[1] & /*$$scope*/
      128 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (q(t.$$.fragment, i), n = !0);
    },
    o(i) {
      te(t.$$.fragment, i), n = !1;
    },
    d(i) {
      bt(t, i);
    }
  };
}
function _i(e) {
  let t, n, i, r, l, s = (
    /*_value*/
    e[10][
      /*selected_index*/
      e[0]
    ] + ""
  ), a, u, o, f, h;
  i = new Ba({
    props: { i18n: (
      /*i18n*/
      e[9]
    ), absolute: !1 }
  }), i.$on(
    "clear",
    /*clear_handler*/
    e[22]
  );
  let c = ft(
    /*_value*/
    e[10]
  ), _ = [];
  for (let m = 0; m < c.length; m += 1)
    _[m] = mi(hi(e, c, m));
  return {
    c() {
      t = de("button"), n = de("div"), dt(i.$$.fragment), r = ke(), l = de("button"), a = ke(), u = de("div");
      for (let m = 0; m < _.length; m += 1)
        _[m].c();
      R(n, "class", "icon-buttons svelte-1o5y3z7"), R(l, "class", "image-button svelte-1o5y3z7"), K(l, "height", "calc(100% - " + /*_value*/
      (e[10][
        /*selected_index*/
        e[0]
      ] ? "80px" : "60px") + ")"), R(l, "aria-label", "detailed view of selected content"), R(u, "class", "thumbnails scroll-hide svelte-1o5y3z7"), R(u, "data-testid", "container_el"), R(t, "class", "preview svelte-1o5y3z7");
    },
    m(m, d) {
      oe(m, t, d), ce(t, n), gt(i, n, null), ce(t, r), ce(t, l), l.innerHTML = s, ce(t, a), ce(t, u);
      for (let E = 0; E < _.length; E += 1)
        _[E] && _[E].m(u, null);
      e[26](u), o = !0, f || (h = [
        qe(
          l,
          "click",
          /*click_handler*/
          e[23]
        ),
        qe(
          t,
          "keydown",
          /*on_keydown*/
          e[16]
        )
      ], f = !0);
    },
    p(m, d) {
      const E = {};
      if (d[0] & /*i18n*/
      512 && (E.i18n = /*i18n*/
      m[9]), i.$set(E), (!o || d[0] & /*_value, selected_index*/
      1025) && s !== (s = /*_value*/
      m[10][
        /*selected_index*/
        m[0]
      ] + "") && (l.innerHTML = s), (!o || d[0] & /*_value, selected_index*/
      1025) && K(l, "height", "calc(100% - " + /*_value*/
      (m[10][
        /*selected_index*/
        m[0]
      ] ? "80px" : "60px") + ")"), d[0] & /*_value, el, selected_index*/
      3073) {
        c = ft(
          /*_value*/
          m[10]
        );
        let g;
        for (g = 0; g < c.length; g += 1) {
          const T = hi(m, c, g);
          _[g] ? _[g].p(T, d) : (_[g] = mi(T), _[g].c(), _[g].m(u, null));
        }
        for (; g < _.length; g += 1)
          _[g].d(1);
        _.length = c.length;
      }
    },
    i(m) {
      o || (q(i.$$.fragment, m), o = !0);
    },
    o(m) {
      te(i.$$.fragment, m), o = !1;
    },
    d(m) {
      m && se(t), bt(i), $i(_, m), e[26](null), f = !1, Na(h);
    }
  };
}
function Da(e) {
  let t;
  return {
    c() {
      t = ka(
        /*i*/
        e[35]
      );
    },
    m(n, i) {
      oe(n, t, i);
    },
    p: Ia,
    d(n) {
      n && se(t);
    }
  };
}
function Ua(e) {
  let t, n = bi(
    /*divs*/
    e[36]
  ) + "", i;
  return {
    c() {
      t = new Yi(!1), i = er(), t.a = i;
    },
    m(r, l) {
      t.m(n, r, l), oe(r, i, l);
    },
    p(r, l) {
      l[0] & /*_value*/
      1024 && n !== (n = bi(
        /*divs*/
        r[36]
      ) + "") && t.p(n);
    },
    d(r) {
      r && (se(i), t.d());
    }
  };
}
function mi(e) {
  let t, n, i, r, l = (
    /*i*/
    e[35]
  ), s, a;
  function u(m, d) {
    return d[0] & /*_value*/
    1024 && (n = null), n == null && (n = !!ja(
      /*divs*/
      m[36]
    )), n ? Ua : Da;
  }
  let o = u(e, [-1, -1]), f = o(e);
  const h = () => (
    /*button_binding*/
    e[24](t, l)
  ), c = () => (
    /*button_binding*/
    e[24](null, l)
  );
  function _() {
    return (
      /*click_handler_1*/
      e[25](
        /*i*/
        e[35]
      )
    );
  }
  return {
    c() {
      t = de("button"), f.c(), i = ke(), R(t, "class", "thumbnail-item thumbnail-small svelte-1o5y3z7"), R(t, "aria-label", r = "Thumbnail " + /*i*/
      (e[35] + 1) + " of " + /*_value*/
      e[10].length), be(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[35]
      );
    },
    m(m, d) {
      oe(m, t, d), f.m(t, null), ce(t, i), h(), s || (a = qe(t, "click", _), s = !0);
    },
    p(m, d) {
      e = m, o === (o = u(e, d)) && f ? f.p(e, d) : (f.d(1), f = o(e), f && (f.c(), f.m(t, i))), d[0] & /*_value*/
      1024 && r !== (r = "Thumbnail " + /*i*/
      (e[35] + 1) + " of " + /*_value*/
      e[10].length) && R(t, "aria-label", r), l !== /*i*/
      e[35] && (c(), l = /*i*/
      e[35], h()), d[0] & /*selected_index*/
      1 && be(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[35]
      );
    },
    d(m) {
      m && se(t), f.d(), c(), s = !1, a();
    }
  };
}
function di(e) {
  let t, n, i = (
    /*entry*/
    e[33] + ""
  ), r, l, s, a;
  function u() {
    return (
      /*click_handler_2*/
      e[27](
        /*i*/
        e[35]
      )
    );
  }
  return {
    c() {
      t = de("button"), n = new Yi(!1), r = ke(), n.a = r, R(t, "class", "thumbnail-item thumbnail-lg svelte-1o5y3z7"), R(t, "aria-label", l = "Thumbnail " + /*i*/
      (e[35] + 1) + " of " + /*_value*/
      e[10].length), be(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[35]
      );
    },
    m(o, f) {
      oe(o, t, f), n.m(i, t), ce(t, r), s || (a = qe(t, "click", u), s = !0);
    },
    p(o, f) {
      e = o, f[0] & /*_value*/
      1024 && i !== (i = /*entry*/
      e[33] + "") && n.p(i), f[0] & /*_value*/
      1024 && l !== (l = "Thumbnail " + /*i*/
      (e[35] + 1) + " of " + /*_value*/
      e[10].length) && R(t, "aria-label", l), f[0] & /*selected_index*/
      1 && be(
        t,
        "selected",
        /*selected_index*/
        e[0] === /*i*/
        e[35]
      );
    },
    d(o) {
      o && se(t), s = !1, a();
    }
  };
}
function Ga(e) {
  let t, n;
  return t = new wi({}), {
    c() {
      dt(t.$$.fragment);
    },
    m(i, r) {
      gt(t, i, r), n = !0;
    },
    i(i) {
      n || (q(t.$$.fragment, i), n = !0);
    },
    o(i) {
      te(t.$$.fragment, i), n = !1;
    },
    d(i) {
      bt(t, i);
    }
  };
}
function Fa(e) {
  let t, n, i, r, l, s, a;
  Ki(
    /*onwindowresize*/
    e[21]
  );
  let u = (
    /*show_label*/
    e[1] && ci(e)
  );
  const o = [Ra, xa], f = [];
  function h(c, _) {
    return (
      /*value*/
      c[3] === null || /*_value*/
      c[10] === null || /*_value*/
      c[10].length === 0 ? 0 : 1
    );
  }
  return n = h(e), i = f[n] = o[n](e), {
    c() {
      u && u.c(), t = ke(), i.c(), r = er();
    },
    m(c, _) {
      u && u.m(c, _), oe(c, t, _), f[n].m(c, _), oe(c, r, _), l = !0, s || (a = qe(
        window,
        "resize",
        /*onwindowresize*/
        e[21]
      ), s = !0);
    },
    p(c, _) {
      /*show_label*/
      c[1] ? u ? (u.p(c, _), _[0] & /*show_label*/
      2 && q(u, 1)) : (u = ci(c), u.c(), q(u, 1), u.m(t.parentNode, t)) : u && (Jt(), te(u, 1, 1, () => {
        u = null;
      }), Qt());
      let m = n;
      n = h(c), n === m ? f[n].p(c, _) : (Jt(), te(f[m], 1, 1, () => {
        f[m] = null;
      }), Qt(), i = f[n], i ? i.p(c, _) : (i = f[n] = o[n](c), i.c()), q(i, 1), i.m(r.parentNode, r));
    },
    i(c) {
      l || (q(u), q(i), l = !0);
    },
    o(c) {
      te(u), te(i), l = !1;
    },
    d(c) {
      c && (se(t), se(r)), u && u.d(c), f[n].d(c), s = !1, a();
    }
  };
}
function Ge(e, t) {
  return e ?? t();
}
function ve(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], l = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = l(n)) : (r === "call" || r === "optionalCall") && (n = l((...s) => n.call(t, ...s)), t = void 0);
  }
  return n;
}
function ja(e) {
  return new DOMParser().parseFromString(e, "text/html").querySelector("img") !== null;
}
function bi(e) {
  const n = new DOMParser().parseFromString(e, "text/html").querySelector("img");
  return n ? n.outerHTML : "";
}
function Va(e, t, n) {
  let i, r, { show_label: l = !0 } = t, { label: s } = t, { value: a = null } = t, { columns: u = [2] } = t, { rows: o = void 0 } = t, { height: f = "auto" } = t, { preview: h } = t, { allow_preview: c = !0 } = t, { object_fit: _ = "cover" } = t, { i18n: m } = t, { selected_index: d = null } = t;
  const E = Oa();
  let g = !0, T = null, b = null;
  d === null && h && ve([a, "optionalAccess", (p) => p.length]) && (d = 0);
  let S = d;
  function v(p) {
    const pe = p.target, Re = p.clientX, vt = pe.offsetWidth / 2;
    Re < vt ? n(0, d = i) : n(0, d = r);
  }
  function G(p) {
    switch (p.code) {
      case "Escape":
        p.preventDefault(), n(0, d = null);
        break;
      case "ArrowLeft":
        p.preventDefault(), n(0, d = i);
        break;
      case "ArrowRight":
        p.preventDefault(), n(0, d = r);
        break;
    }
  }
  let O = [], M;
  async function ae(p) {
    if (typeof p != "number" || (await Ma(), O[p] === void 0))
      return;
    ve([
      O,
      "access",
      (De) => De[p],
      "optionalAccess",
      (De) => De.focus,
      "call",
      (De) => De()
    ]);
    const { left: pe, width: Re } = M.getBoundingClientRect(), { left: y, width: vt } = O[p].getBoundingClientRect(), hn = y - pe + vt / 2 - Re / 2 + M.scrollLeft;
    M && typeof M.scrollTo == "function" && M.scrollTo({
      left: hn < 0 ? 0 : hn,
      behavior: "smooth"
    });
  }
  let D = 0, w = 0;
  function We() {
    n(14, w = window.innerHeight);
  }
  const ne = () => n(0, d = null), ge = (p) => v(p);
  function J(p, pe) {
    ui[p ? "unshift" : "push"](() => {
      O[pe] = p, n(11, O);
    });
  }
  const Qe = (p) => n(0, d = p);
  function pt(p) {
    ui[p ? "unshift" : "push"](() => {
      M = p, n(12, M);
    });
  }
  const Je = (p) => n(0, d = p);
  function Ye() {
    D = this.clientHeight, n(13, D);
  }
  return e.$$set = (p) => {
    "show_label" in p && n(1, l = p.show_label), "label" in p && n(2, s = p.label), "value" in p && n(3, a = p.value), "columns" in p && n(4, u = p.columns), "rows" in p && n(5, o = p.rows), "height" in p && n(6, f = p.height), "preview" in p && n(17, h = p.preview), "allow_preview" in p && n(7, c = p.allow_preview), "object_fit" in p && n(8, _ = p.object_fit), "i18n" in p && n(9, m = p.i18n), "selected_index" in p && n(0, d = p.selected_index);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*value, was_reset*/
    262152 && n(18, g = a == null || a.length == 0 ? !0 : g), e.$$.dirty[0] & /*value*/
    8 && n(10, T = a === null ? null : a), e.$$.dirty[0] & /*prevValue, value, was_reset, preview, selected_index*/
    917513 && (Fe(b, a) || (g ? (n(0, d = h && ve([a, "optionalAccess", (p) => p.length]) ? 0 : null), n(18, g = !1)) : n(
      0,
      d = d !== null && a !== null && d < a.length ? d : null
    ), E("change"), n(19, b = a))), e.$$.dirty[0] & /*selected_index, _value*/
    1025 && (i = (Ge(d, () => 0) + Ge(ve([T, "optionalAccess", (p) => p.length]), () => 0) - 1) % Ge(ve([T, "optionalAccess", (p) => p.length]), () => 0)), e.$$.dirty[0] & /*selected_index, _value*/
    1025 && (r = (Ge(d, () => 0) + 1) % Ge(ve([T, "optionalAccess", (p) => p.length]), () => 0)), e.$$.dirty[0] & /*selected_index, old_selected_index, _value*/
    1049601 && d !== S && (n(20, S = d), d !== null && E("select", {
      index: d,
      value: ve([T, "optionalAccess", (p) => p[d]])
    })), e.$$.dirty[0] & /*allow_preview, selected_index*/
    129 && c && ae(d);
  }, [
    d,
    l,
    s,
    a,
    u,
    o,
    f,
    c,
    _,
    m,
    T,
    O,
    M,
    D,
    w,
    v,
    G,
    h,
    g,
    b,
    S,
    We,
    ne,
    ge,
    J,
    Qe,
    pt,
    Je,
    Ye
  ];
}
class qa extends Aa {
  constructor(t) {
    super(), Ca(
      this,
      t,
      Va,
      Fa,
      La,
      {
        show_label: 1,
        label: 2,
        value: 3,
        columns: 4,
        rows: 5,
        height: 6,
        preview: 17,
        allow_preview: 7,
        object_fit: 8,
        i18n: 9,
        selected_index: 0
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: za,
  add_flush_callback: Xa,
  assign: Za,
  bind: Wa,
  binding_callbacks: Qa,
  create_component: Yt,
  destroy_component: Kt,
  detach: Ja,
  get_spread_object: Ya,
  get_spread_update: Ka,
  init: $a,
  insert: eu,
  mount_component: $t,
  safe_not_equal: tu,
  space: nu,
  transition_in: en,
  transition_out: tn
} = window.__gradio__svelte__internal, { createEventDispatcher: iu } = window.__gradio__svelte__internal;
function ru(e) {
  let t, n, i, r, l;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        e[17].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[17].i18n
    ) },
    /*loading_status*/
    e[1]
  ];
  let a = {};
  for (let f = 0; f < s.length; f += 1)
    a = Za(a, s[f]);
  t = new Cs({ props: a });
  function u(f) {
    e[18](f);
  }
  let o = {
    label: (
      /*label*/
      e[3]
    ),
    value: (
      /*value*/
      e[7]
    ),
    show_label: (
      /*show_label*/
      e[2]
    ),
    columns: (
      /*columns*/
      e[11]
    ),
    rows: (
      /*rows*/
      e[12]
    ),
    height: (
      /*height*/
      e[13]
    ),
    preview: (
      /*preview*/
      e[14]
    ),
    object_fit: (
      /*object_fit*/
      e[16]
    ),
    allow_preview: (
      /*allow_preview*/
      e[15]
    ),
    i18n: (
      /*gradio*/
      e[17].i18n
    )
  };
  return (
    /*selected_index*/
    e[0] !== void 0 && (o.selected_index = /*selected_index*/
    e[0]), i = new qa({ props: o }), Qa.push(() => Wa(i, "selected_index", u)), i.$on(
      "change",
      /*change_handler*/
      e[19]
    ), i.$on(
      "select",
      /*select_handler*/
      e[20]
    ), i.$on(
      "share",
      /*share_handler*/
      e[21]
    ), i.$on(
      "error",
      /*error_handler*/
      e[22]
    ), {
      c() {
        Yt(t.$$.fragment), n = nu(), Yt(i.$$.fragment);
      },
      m(f, h) {
        $t(t, f, h), eu(f, n, h), $t(i, f, h), l = !0;
      },
      p(f, h) {
        const c = h & /*gradio, loading_status*/
        131074 ? Ka(s, [
          h & /*gradio*/
          131072 && {
            autoscroll: (
              /*gradio*/
              f[17].autoscroll
            )
          },
          h & /*gradio*/
          131072 && { i18n: (
            /*gradio*/
            f[17].i18n
          ) },
          h & /*loading_status*/
          2 && Ya(
            /*loading_status*/
            f[1]
          )
        ]) : {};
        t.$set(c);
        const _ = {};
        h & /*label*/
        8 && (_.label = /*label*/
        f[3]), h & /*value*/
        128 && (_.value = /*value*/
        f[7]), h & /*show_label*/
        4 && (_.show_label = /*show_label*/
        f[2]), h & /*columns*/
        2048 && (_.columns = /*columns*/
        f[11]), h & /*rows*/
        4096 && (_.rows = /*rows*/
        f[12]), h & /*height*/
        8192 && (_.height = /*height*/
        f[13]), h & /*preview*/
        16384 && (_.preview = /*preview*/
        f[14]), h & /*object_fit*/
        65536 && (_.object_fit = /*object_fit*/
        f[16]), h & /*allow_preview*/
        32768 && (_.allow_preview = /*allow_preview*/
        f[15]), h & /*gradio*/
        131072 && (_.i18n = /*gradio*/
        f[17].i18n), !r && h & /*selected_index*/
        1 && (r = !0, _.selected_index = /*selected_index*/
        f[0], Xa(() => r = !1)), i.$set(_);
      },
      i(f) {
        l || (en(t.$$.fragment, f), en(i.$$.fragment, f), l = !0);
      },
      o(f) {
        tn(t.$$.fragment, f), tn(i.$$.fragment, f), l = !1;
      },
      d(f) {
        f && Ja(n), Kt(t, f), Kt(i, f);
      }
    }
  );
}
function lu(e) {
  let t, n;
  return t = new br({
    props: {
      visible: (
        /*visible*/
        e[6]
      ),
      variant: "solid",
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[4]
      ),
      elem_classes: (
        /*elem_classes*/
        e[5]
      ),
      container: (
        /*container*/
        e[8]
      ),
      scale: (
        /*scale*/
        e[9]
      ),
      min_width: (
        /*min_width*/
        e[10]
      ),
      allow_overflow: !1,
      height: typeof /*height*/
      e[13] == "number" ? (
        /*height*/
        e[13]
      ) : void 0,
      $$slots: { default: [ru] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Yt(t.$$.fragment);
    },
    m(i, r) {
      $t(t, i, r), n = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*visible*/
      64 && (l.visible = /*visible*/
      i[6]), r & /*elem_id*/
      16 && (l.elem_id = /*elem_id*/
      i[4]), r & /*elem_classes*/
      32 && (l.elem_classes = /*elem_classes*/
      i[5]), r & /*container*/
      256 && (l.container = /*container*/
      i[8]), r & /*scale*/
      512 && (l.scale = /*scale*/
      i[9]), r & /*min_width*/
      1024 && (l.min_width = /*min_width*/
      i[10]), r & /*height*/
      8192 && (l.height = typeof /*height*/
      i[13] == "number" ? (
        /*height*/
        i[13]
      ) : void 0), r & /*$$scope, label, value, show_label, columns, rows, height, preview, object_fit, allow_preview, gradio, selected_index, loading_status*/
      17037455 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (en(t.$$.fragment, i), n = !0);
    },
    o(i) {
      tn(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Kt(t, i);
    }
  };
}
function su(e, t, n) {
  let { loading_status: i } = t, { show_label: r } = t, { label: l } = t, { elem_id: s = "" } = t, { elem_classes: a = [] } = t, { visible: u = !0 } = t, { value: o = null } = t, { container: f = !0 } = t, { scale: h = null } = t, { min_width: c = void 0 } = t, { columns: _ = [2] } = t, { rows: m = void 0 } = t, { height: d = "auto" } = t, { preview: E } = t, { allow_preview: g = !0 } = t, { selected_index: T = null } = t, { object_fit: b = "cover" } = t, { gradio: S } = t;
  const v = iu();
  function G(w) {
    T = w, n(0, T);
  }
  const O = () => S.dispatch("change", o), M = (w) => S.dispatch("select", w.detail), ae = (w) => S.dispatch("share", w.detail), D = (w) => S.dispatch("error", w.detail);
  return e.$$set = (w) => {
    "loading_status" in w && n(1, i = w.loading_status), "show_label" in w && n(2, r = w.show_label), "label" in w && n(3, l = w.label), "elem_id" in w && n(4, s = w.elem_id), "elem_classes" in w && n(5, a = w.elem_classes), "visible" in w && n(6, u = w.visible), "value" in w && n(7, o = w.value), "container" in w && n(8, f = w.container), "scale" in w && n(9, h = w.scale), "min_width" in w && n(10, c = w.min_width), "columns" in w && n(11, _ = w.columns), "rows" in w && n(12, m = w.rows), "height" in w && n(13, d = w.height), "preview" in w && n(14, E = w.preview), "allow_preview" in w && n(15, g = w.allow_preview), "selected_index" in w && n(0, T = w.selected_index), "object_fit" in w && n(16, b = w.object_fit), "gradio" in w && n(17, S = w.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*selected_index*/
    1 && v("prop_change", { selected_index: T });
  }, [
    T,
    i,
    r,
    l,
    s,
    a,
    u,
    o,
    f,
    h,
    c,
    _,
    m,
    d,
    E,
    g,
    b,
    S,
    G,
    O,
    M,
    ae,
    D
  ];
}
class au extends za {
  constructor(t) {
    super(), $a(this, t, su, lu, tu, {
      loading_status: 1,
      show_label: 2,
      label: 3,
      elem_id: 4,
      elem_classes: 5,
      visible: 6,
      value: 7,
      container: 8,
      scale: 9,
      min_width: 10,
      columns: 11,
      rows: 12,
      height: 13,
      preview: 14,
      allow_preview: 15,
      selected_index: 0,
      object_fit: 16,
      gradio: 17
    });
  }
}
export {
  qa as BaseGallery,
  au as default
};
