import { jsxs as u, jsx as e, Fragment as Ve } from "react/jsx-runtime";
import { useState as p, useRef as h, useEffect as A, useCallback as y, useMemo as De } from "react";
import { createPortal as He } from "react-dom";
function ze({
  expanded: t = !1,
  size: o = 16,
  color: i = "var(--rosetta-fg-muted)"
}) {
  const n = "0.28s cubic-bezier(0.22, 1, 0.36, 1)";
  return /* @__PURE__ */ u(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 24 24",
      fill: i,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ e(
          "rect",
          {
            x: 3,
            y: 4,
            width: t ? 0 : 5,
            height: 2,
            style: { transition: `width ${n}` }
          }
        ),
        /* @__PURE__ */ e(
          "rect",
          {
            x: 3,
            y: 11,
            width: t ? 0 : 5,
            height: 2,
            style: { transition: `width ${n}` }
          }
        ),
        /* @__PURE__ */ e(
          "rect",
          {
            x: 3,
            y: 18,
            width: t ? 0 : 18,
            height: 2,
            style: { transition: `width ${n}` }
          }
        ),
        /* @__PURE__ */ e(
          "g",
          {
            style: {
              transformOrigin: "15.5px 8.5px",
              transform: t ? "translate(-4px, 2.5px) scale(1.4)" : "translate(0, 0) scale(1)",
              transition: `transform ${n}`
            },
            children: /* @__PURE__ */ e(
              "path",
              {
                d: "M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5Z",
                fillRule: "evenodd",
                clipRule: "evenodd",
                style: {
                  // Counter-scale the stroke to keep it constant when scaled up
                  // Since we use fill (not stroke), the path weight is baked in —
                  // the 1.65× scale will thicken it. To compensate, we set
                  // vector-effect on the fill boundary. For filled paths this is
                  // inherent, so we accept the slight thickening at this small size.
                }
              }
            )
          }
        )
      ]
    }
  );
}
function Oe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 22 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ u("g", { id: "Icon", children: [
        /* @__PURE__ */ e("path", { d: "M14.55 0L9.55001 18H7.45001L12.45 0H14.55Z", fill: "currentColor" }),
        /* @__PURE__ */ e(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 4.16795V6.57165L2.35748 9L6 11.4283V13.832L0 9.83205V8.16795L6 4.16795Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 4.16795V6.57165L19.6425 9L16 11.4283V13.832L22 9.83205V8.16795L16 4.16795Z",
            fill: "currentColor"
          }
        )
      ] })
    }
  );
}
function Ie(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18.5 18.5",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 5L5 18.5H0V13.5L13.5 0L18.5 5ZM10.677 5.6514L2 14.3284V16.5H4.17157L12.8486 7.82297L10.677 5.6514ZM14.2628 6.40876L15.6716 5L13.5 2.82843L12.0912 4.23718L14.2628 6.40876Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ze(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 17.6777 17.6777",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.6066 0L9.19239 1.41421L9.8995 2.12132L3.53553 7.07107L2.12132 5.65685L0.707107 7.07107L4.94975 11.3137L0 16.2635V17.6777H1.41421L6.36396 12.7279L10.6066 16.9706L12.0208 15.5563L10.6066 14.1421L15.5563 7.77817L16.2635 8.48528L17.6777 7.07107L10.6066 0ZM14.1421 6.36396L11.3137 3.53553L11.2257 3.62358L4.96075 8.49629L9.18138 12.7169L14.0541 6.45201L14.1421 6.36396Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function _e(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ u("g", { id: "Icon", children: [
        /* @__PURE__ */ e("path", { d: "M18 0H0V2H18V0Z", fill: "currentColor" }),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M8 14V7.32838L5 10.3284V7.49995L8.99995 3.5L13 7.50004V10.3285L10 7.32847V14H8Z",
            fill: "currentColor"
          }
        )
      ] })
    }
  );
}
function Pe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 14V0H14V4H18V18H4V14H0ZM2 2H12V12H2V2ZM6 14V16H16V6H14V14H6Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ne(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18.4102 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          d: "M3.82838 4L7.82838 0H4.99995L0 4.99995L5.00005 10H7.82847L3.82847 6H12.9102C14.8432 6 16.4102 7.567 16.4102 9.5C16.4102 11.433 14.8432 13 12.9102 13H9.41016V15H12.9102C15.9477 15 18.4102 12.5376 18.4102 9.5C18.4102 6.46243 15.9477 4 12.9102 4H3.82838Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function We(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18.4102 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          d: "M14.5818 4L10.5818 0H13.4102L18.4102 4.99995L13.4101 10H10.5817L14.5817 6H5.5C3.567 6 2 7.567 2 9.5C2 11.433 3.567 13 5.5 13H9V15H5.5C2.46243 15 0 12.5376 0 9.5C0 6.46243 2.46243 4 5.5 4H14.5818Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Xe(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0 0H18V13H10V15H13V17H5V15H8V13H0V0ZM2 2V11H16V2H2Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ye(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 12 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ u("g", { id: "Icon", children: [
        /* @__PURE__ */ e("path", { d: "M9 15H3V17H9V15Z", fill: "currentColor" }),
        /* @__PURE__ */ e(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 0H3C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H9C10.6569 20 12 18.6569 12 17V3C12 1.34315 10.6569 0 9 0ZM2 3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3V17C10 17.5523 9.55228 18 9 18H3C2.44772 18 2 17.5523 2 17V3Z",
            fill: "currentColor"
          }
        )
      ] })
    }
  );
}
function je(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 20.682 20.682",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.8713 0.810659C18.7904 -0.270222 17.038 -0.270218 15.9571 0.810661L12.4142 4.35355L9.91421 1.85355L0 11.7678L8.91421 20.682L18.8284 10.7678L16.3284 8.26777L19.8713 4.72487C20.9522 3.64399 20.9522 1.89154 19.8713 0.810659ZM17.3713 2.22487C17.6712 1.92504 18.1573 1.92504 18.4571 2.22487C18.7569 2.52471 18.7569 3.01083 18.4571 3.31066L13.5 8.26777L16 10.7678L14.9142 11.8536L8.82842 5.76777L9.91421 4.68198L12.4142 7.18198L17.3713 2.22487ZM7.41421 7.18198L2.82843 11.7678L3.91422 12.8536L7.2071 9.56067L8.62132 10.9749L5.32843 14.2678L6.41422 15.3536L9.70711 12.0607L11.1213 13.4749L7.82843 16.7678L8.91421 17.8536L13.5 13.2678L7.41421 7.18198Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function xt(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 10 7.5",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          d: "M1.09278e-07 0L0 2.5L5 7.5L10 2.5V4.37114e-07L5 5L1.09278e-07 0Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function $e(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 7 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          d: "M5 5.25V5.75L3.75 7H3.25L2 5.75V5.25L3.25 4H3.75L5 5.25ZM2.81055 5.5L3.5 6.18945L4.18945 5.5L3.5 4.81055L2.81055 5.5ZM3 3.25V3.75L1.75 5H1.25L0 3.75V3.25L1.25 2H1.75L3 3.25ZM7 3.25V3.75L5.75 5H5.25L4 3.75V3.25L5.25 2H5.75L7 3.25ZM0.810547 3.5L1.5 4.18945L2.18945 3.5L1.5 2.81055L0.810547 3.5ZM4.81055 3.5L5.5 4.18945L6.18945 3.5L5.5 2.81055L4.81055 3.5ZM5 1.25V1.75L3.75 3H3.25L2 1.75V1.25L3.25 0H3.75L5 1.25ZM2.81055 1.5L3.5 2.18945L4.18945 1.5L3.5 0.810547L2.81055 1.5Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ge(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          d: "M9 0H7V7H0V9H7V16H9V9H16V7H9V0Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function bt(t) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 12.0293 12.0293",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...t,
      children: /* @__PURE__ */ e(
        "path",
        {
          id: "Icon",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 0C7.76142 0 10 2.23858 10 5C10 6.11012 9.63748 7.13519 9.02539 7.96484L12.0293 10.9688L10.9688 12.0293L7.96484 9.02539C7.13519 9.63748 6.11012 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1.5C3.067 1.5 1.5 3.067 1.5 5C1.5 6.933 3.067 8.5 5 8.5C6.933 8.5 8.5 6.933 8.5 5C8.5 3.067 6.933 1.5 5 1.5Z",
          fill: "currentColor"
        }
      )
    }
  );
}
const G = 11, Ue = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "22px"
}, ye = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22px"
}, Ke = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px"
}, Se = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "22px",
  letterSpacing: 0.5
}, qe = "/assets/block-icons", Le = [
  {
    label: "Essentials",
    blocks: [
      { name: "Text", icon: "text" },
      { name: "Image", icon: "image" },
      { name: "Button", icon: "button" },
      { name: "Gallery", icon: "gallery" },
      { name: "Video", icon: "video" },
      { name: "Form", icon: "form" },
      { name: "Accordion", icon: "accordion" },
      { name: "Shape", icon: "shape" },
      { name: "Scrolling", icon: "scrolling" },
      { name: "Line", icon: "line" }
    ]
  },
  {
    label: "Sell",
    blocks: [
      { name: "Product", icon: "product" },
      { name: "Pricing Plan", icon: "pricing" },
      { name: "Donation", icon: "donation" },
      { name: "Scheduling", icon: "scheduling" }
    ]
  },
  {
    label: "Display",
    blocks: [
      { name: "Summary", icon: "summary" },
      { name: "Newsletter", icon: "newsletter" },
      { name: "Quote", icon: "quote" },
      { name: "Audio", icon: "audio" },
      { name: "Calendar", icon: "calendar" },
      { name: "Map", icon: "map" },
      { name: "Menu", icon: "menu" },
      { name: "Chart", icon: "chart" }
    ]
  },
  {
    label: "Code",
    blocks: [
      { name: "Code", icon: "code" },
      { name: "Markdown", icon: "markdown" },
      { name: "Embed", icon: "embed" }
    ]
  },
  {
    label: "Links",
    blocks: [
      { name: "Social Links", icon: "social-links" },
      { name: "Search Field", icon: "search" },
      { name: "Page Link", icon: "link" },
      { name: "Tag Cloud", icon: "tag-cloud" },
      { name: "RSS", icon: "rss" },
      { name: "Archive", icon: "archive" },
      { name: "Instagram", icon: "instagram" },
      { name: "Tock", icon: "tock" },
      { name: "SoundCloud", icon: "soundcloud" },
      { name: "Flickr", icon: "flickr" },
      { name: "OpenTable", icon: "opentable" },
      { name: "Zola", icon: "zola" },
      { name: "Bandsintown", icon: "bandsintown" }
    ]
  }
];
function Qe({ onSelect: t, onClose: o, blockIconBasePath: i = qe }) {
  const [n, s] = p(""), d = h(null), a = h(null);
  A(() => {
    const r = setTimeout(() => {
      var f;
      return (f = d.current) == null ? void 0 : f.focus();
    }, 50);
    return () => clearTimeout(r);
  }, []), A(() => {
    function r(f) {
      a.current && !a.current.contains(f.target) && o();
    }
    return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
  }, [o]);
  const l = n ? Le.map((r) => ({
    ...r,
    blocks: r.blocks.filter((f) => f.name.toLowerCase().includes(n.toLowerCase()))
  })).filter((r) => r.blocks.length > 0) : Le;
  return /* @__PURE__ */ u(
    "div",
    {
      ref: a,
      className: "block-picker-enter",
      style: {
        width: 320,
        background: "var(--rosetta-bg-base)",
        borderRadius: G,
        boxShadow: "var(--shadows-200)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      onClick: (r) => r.stopPropagation(),
      children: [
        /* @__PURE__ */ u("div", { style: {
          height: 50,
          display: "flex",
          alignItems: "center",
          gap: G,
          padding: "0 12px",
          borderBottom: "1px solid var(--rosetta-border-default)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ e("div", { style: { width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ e(ze, { expanded: !0, size: 16, color: "var(--rosetta-fg-muted)" }) }),
          /* @__PURE__ */ e(
            "input",
            {
              ref: d,
              type: "text",
              placeholder: "Search blocks",
              value: n,
              onChange: (r) => s(r.target.value),
              onKeyDown: (r) => {
                r.key === "Escape" && o();
              },
              style: {
                ...ye,
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                padding: 0,
                color: n ? "var(--rosetta-fg-default)" : "#6E6E6E",
                minWidth: 0
              }
            }
          )
        ] }),
        /* @__PURE__ */ u("div", { style: {
          overflow: "auto",
          maxHeight: "min(480px, calc(100vh - 200px))",
          padding: `${G}px`
        }, children: [
          l.length === 0 && /* @__PURE__ */ u("p", { style: {
            ...ye,
            color: "var(--rosetta-fg-muted)",
            padding: `${G}px 0`,
            textAlign: "center"
          }, children: [
            'No blocks matching "',
            n,
            '"'
          ] }),
          l.map((r, f) => /* @__PURE__ */ u("div", { style: { marginTop: f > 0 ? 16 : 0 }, children: [
            /* @__PURE__ */ e("p", { style: {
              ...Ue,
              color: "var(--rosetta-fg-default)",
              marginBottom: 6
            }, children: r.label }),
            /* @__PURE__ */ e("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            }, children: r.blocks.map((g) => /* @__PURE__ */ e(Je, { block: g, onSelect: t, blockIconBasePath: i }, g.name)) })
          ] }, r.label))
        ] })
      ]
    }
  );
}
function Je({ block: t, onSelect: o, blockIconBasePath: i }) {
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: () => o(t.name),
      style: {
        // Spec: 146px wide, 44px tall, #F9F9F9 bg, 6px radius
        width: "calc(50% - 3px)",
        height: 44,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 11px",
        gap: G,
        background: "var(--rosetta-bg-inset)",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        overflow: "hidden",
        textAlign: "left"
      },
      onMouseEnter: (n) => n.currentTarget.style.background = "var(--rosetta-bg-default)",
      onMouseLeave: (n) => n.currentTarget.style.background = "var(--rosetta-bg-inset)",
      children: [
        /* @__PURE__ */ e("div", { style: {
          width: 16,
          height: 16,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }, children: /* @__PURE__ */ e(
          "img",
          {
            src: `${i}/${t.icon}.svg`,
            alt: "",
            style: {
              maxWidth: 16,
              maxHeight: 16,
              display: "block"
            }
          }
        ) }),
        /* @__PURE__ */ e("span", { style: {
          ...Ke,
          color: "var(--rosetta-fg-default)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: t.name })
      ]
    }
  );
}
function et({ onAddBlock: t }) {
  const [o, i] = p(!1);
  return /* @__PURE__ */ e("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6
  }, children: /* @__PURE__ */ u(
    "button",
    {
      onClick: t,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: G,
        padding: "11px 22px 11px 16px",
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 8,
        boxShadow: "var(--shadows-100)",
        cursor: "pointer"
      },
      children: [
        o && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          inset: 4,
          background: "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ e("div", { style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }, children: /* @__PURE__ */ e(Ge, { style: { width: 16, height: 16, display: "block" } }) }),
        /* @__PURE__ */ e("span", { style: {
          ...Se,
          textTransform: "uppercase",
          color: "var(--rosetta-fg-default)",
          whiteSpace: "nowrap",
          position: "relative",
          top: 1,
          zIndex: 1
        }, children: "Add Block" })
      ]
    }
  ) });
}
function tt({ onClick: t }) {
  const [o, i] = p(!1);
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: t,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: G,
        padding: "11px 22px 11px 16px",
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 8,
        boxShadow: "var(--shadows-100)",
        cursor: "pointer"
      },
      children: [
        o && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          inset: 4,
          background: "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ e("div", { style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }, children: /* @__PURE__ */ e(Ie, { style: { width: 16, height: 16, display: "block" } }) }),
        /* @__PURE__ */ e("span", { style: {
          ...Se,
          textTransform: "uppercase",
          color: "var(--rosetta-fg-default)",
          whiteSpace: "nowrap",
          position: "relative",
          top: 1,
          zIndex: 1
        }, children: "Edit Site Header" })
      ]
    }
  );
}
const nt = "#4894FF", ge = 3, ke = 11;
function yt({
  sectionId: t,
  sectionLabel: o,
  children: i,
  onBlockPicked: n,
  disabled: s = !1,
  style: d
}) {
  const [a, l] = p(!1), [r, f] = p(!1), [g, b] = p(!1), w = h(null), L = y(() => {
    s || (l(!0), b(!1));
  }, [s]), c = y(() => {
    r || (l(!1), b(!1));
  }, [r]), V = y(() => {
    f(!0), b(!1);
  }, []), S = y(() => {
    if (f(!1), b(!0), w.current) {
      const v = w.current.getBoundingClientRect(), k = R.current;
      k && (k.x < v.left || k.x > v.right || k.y < v.top || k.y > v.bottom) && l(!1);
    }
  }, []), M = y((v) => {
    f(!1), l(!1), n(t, v);
  }, [t, n]), R = h(null), m = y((v) => {
    R.current = { x: v.clientX, y: v.clientY };
  }, []), E = (a || r) && !s;
  return /* @__PURE__ */ u(
    "div",
    {
      ref: w,
      onMouseEnter: L,
      onMouseLeave: c,
      onMouseMove: m,
      style: {
        position: "relative",
        ...d
      },
      children: [
        i,
        /* @__PURE__ */ e(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              border: `${ge}px solid ${E ? nt : "transparent"}`,
              zIndex: 101,
              pointerEvents: "none",
              transition: "border-color 0.15s ease"
            }
          }
        ),
        E && /* @__PURE__ */ u(
          "div",
          {
            style: {
              position: "absolute",
              top: ge + ke,
              left: ge + ke,
              zIndex: 102
            },
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: g ? "add-block-return" : r ? "" : "add-block-enter",
                  style: {
                    opacity: r ? 0 : 1,
                    pointerEvents: r ? "none" : "auto",
                    transition: "opacity 200ms ease",
                    position: r ? "absolute" : "relative"
                  },
                  children: /* @__PURE__ */ e(
                    et,
                    {
                      onAddBlock: V
                    }
                  )
                }
              ),
              r && /* @__PURE__ */ e(
                Qe,
                {
                  onSelect: M,
                  onClose: S
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Lt({
  children: t,
  disabled: o = !1,
  style: i
}) {
  const [n, s] = p(!1), d = y(() => {
    o || s(!0);
  }, [o]), a = y(() => {
    s(!1);
  }, []), l = n && !o;
  return /* @__PURE__ */ u(
    "div",
    {
      onMouseEnter: d,
      onMouseLeave: a,
      style: {
        position: "relative",
        ...i
      },
      children: [
        t,
        l && /* @__PURE__ */ e(
          "div",
          {
            className: "header-scrim-enter",
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 101
            },
            children: /* @__PURE__ */ e("div", { className: "header-btn-enter", children: /* @__PURE__ */ e(tt, { onClick: (r) => {
              const f = r.clientX, g = r.clientY;
              for (let b = 0; b < 14; b++) {
                const w = document.createElement("div");
                w.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${f}px;top:${g}px;`;
                const L = Math.random() * Math.PI * 2, c = 60 + Math.random() * 100;
                w.animate([
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  { transform: `translate(${Math.cos(L) * c}px,${Math.sin(L) * c}px) scale(0)`, opacity: 0 }
                ], { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0,0.5,0.5,1)", fill: "forwards" }), document.body.appendChild(w), setTimeout(() => w.remove(), 900);
              }
            } }) })
          }
        )
      ]
    }
  );
}
const te = 8;
function Re({
  text: t,
  anchorRef: o,
  visible: i
}) {
  const n = h(null), [s, d] = p(null);
  return A(() => {
    if (!i || !o.current) {
      d(null);
      return;
    }
    d({ top: -9999, left: -9999 });
    const a = requestAnimationFrame(() => {
      if (!o.current || !n.current) return;
      const l = o.current.getBoundingClientRect(), r = n.current.getBoundingClientRect(), f = window.innerWidth;
      let g = l.left + l.width / 2 - r.width / 2;
      const b = window.innerHeight;
      let w = l.bottom + 6;
      w + r.height > b - te && (w = l.top - r.height - 6), g < te && (g = te), g + r.width > f - te && (g = f - te - r.width), d({ top: w, left: g });
    });
    return () => cancelAnimationFrame(a);
  }, [i, o]), i ? He(
    /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        style: {
          position: "fixed",
          top: (s == null ? void 0 : s.top) ?? -9999,
          left: (s == null ? void 0 : s.left) ?? -9999,
          background: "#0E0E0E",
          color: "#fff",
          fontSize: 14,
          fontWeight: 400,
          fontFamily: "Clarkson, Helvetica, sans-serif",
          lineHeight: "22px",
          padding: "6px 11px",
          borderRadius: 0,
          whiteSpace: "nowrap",
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.08), 0px 8px 32px 0px rgba(0,0,0,0.12)",
          zIndex: 1e4,
          pointerEvents: "none"
        },
        children: t
      }
    ),
    document.body
  ) : null;
}
function Fe(t = 600) {
  const o = h(null), [i, n] = p(!1), [s, d] = p(!1), a = h(null), l = y(() => {
    n(!0), a.current = setTimeout(() => d(!0), t);
  }, [t]), r = y(() => {
    n(!1), d(!1), a.current && (clearTimeout(a.current), a.current = null);
  }, []);
  return A(() => () => {
    a.current && clearTimeout(a.current);
  }, []), { ref: o, hovered: i, showTooltip: s, onMouseEnter: l, onMouseLeave: r };
}
const Ce = {
  background: "var(--rosetta-bg-base)",
  borderRadius: 11,
  height: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  boxShadow: "var(--shadows-200)"
};
function kt({
  onOpenIDE: t,
  onOpenDesignPanel: o,
  onDelete: i,
  isExiting: n
}) {
  return /* @__PURE__ */ u("div", { className: n ? "annotation-exit" : "annotation-enter", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ e("div", { style: Ce, children: /* @__PURE__ */ e(X, { onClick: t, title: "Open code editor", children: /* @__PURE__ */ e(Oe, { style: { width: 22, height: 18 } }) }) }),
    /* @__PURE__ */ u("div", { style: { ...Ce, gap: 4 }, children: [
      /* @__PURE__ */ e(X, { onClick: o, title: "Edit", children: /* @__PURE__ */ e(Ie, { style: { width: 18.5, height: 18.5 } }) }),
      /* @__PURE__ */ e(Me, {}),
      /* @__PURE__ */ e(X, { title: "Pin", children: /* @__PURE__ */ e(Ze, { style: { width: 17.7, height: 17.7 } }) }),
      /* @__PURE__ */ e(X, { title: "Align top", children: /* @__PURE__ */ e(_e, { style: { width: 18, height: 14 } }) }),
      /* @__PURE__ */ e(X, { title: "Move forward", children: /* @__PURE__ */ e(ot, {}) }),
      /* @__PURE__ */ e(X, { title: "Move backward", children: /* @__PURE__ */ e(rt, {}) }),
      /* @__PURE__ */ e(Me, {}),
      /* @__PURE__ */ e(X, { title: "Duplicate", children: /* @__PURE__ */ e(Pe, { style: { width: 18, height: 18 } }) }),
      /* @__PURE__ */ e(X, { onClick: i, title: "Delete", danger: !0, children: /* @__PURE__ */ e(it, {}) })
    ] })
  ] });
}
function X({
  children: t,
  onClick: o,
  title: i,
  danger: n
}) {
  const { ref: s, hovered: d, showTooltip: a, onMouseEnter: l, onMouseLeave: r } = Fe();
  return /* @__PURE__ */ u(
    "button",
    {
      ref: s,
      onClick: o,
      onMouseEnter: l,
      onMouseLeave: r,
      style: {
        position: "relative",
        width: 36,
        height: 44,
        background: "transparent",
        border: "none",
        cursor: o ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: n ? "var(--rosetta-fg-danger)" : "var(--rosetta-fg-default)"
      },
      children: [
        d && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          top: 4,
          left: 0,
          width: 36,
          height: 36,
          background: n ? "var(--rosetta-bg-danger-default)" : "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ e("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: t }),
        i && /* @__PURE__ */ e(Re, { text: i, anchorRef: s, visible: a })
      ]
    }
  );
}
function Me() {
  return /* @__PURE__ */ e("div", { style: { width: 1, height: 20, background: "var(--rosetta-border-default)", flexShrink: 0 } });
}
function ot() {
  return /* @__PURE__ */ u("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ e("rect", { x: "7", y: "7", width: "13", height: "13", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" }),
    /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
}
function rt() {
  return /* @__PURE__ */ u("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ e("rect", { x: "7", y: "7", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" })
  ] });
}
function it() {
  return /* @__PURE__ */ u("svg", { width: "22", height: "22", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M3 5h12" }),
    /* @__PURE__ */ e("path", { d: "M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" }),
    /* @__PURE__ */ e("path", { d: "M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" }),
    /* @__PURE__ */ e("path", { d: "M7.5 8v4.5" }),
    /* @__PURE__ */ e("path", { d: "M10.5 8v4.5" })
  ] });
}
const de = 12, we = 33, U = 16, ue = 33, st = 3;
function xe(t) {
  return (t - ue * 2 - we * (de - 1)) / de;
}
function fe(t) {
  return xe(t) / 2;
}
function lt(t, o) {
  const i = fe(o);
  return t * i + (t - 1) * U;
}
function Ct(t, o) {
  const n = fe(o) + U, s = Math.ceil((t + U) / n);
  return lt(s, o);
}
function at(t, o) {
  const n = fe(o) + U;
  return Math.round(t / n) * n;
}
function ct(t, o) {
  const n = xe(o) + we;
  return ue + Math.round((t - ue) / n) * n;
}
function Mt({ fadeIn: t = !1 }) {
  const o = h(null), [i, n] = p({ width: 0, height: 0 });
  A(() => {
    const f = o.current;
    if (!f) return;
    const g = new ResizeObserver(([b]) => {
      const { width: w, height: L } = b.contentRect;
      n({ width: w, height: L });
    });
    return g.observe(f), () => g.disconnect();
  }, []);
  const s = i.width > 0 ? xe(i.width) : 0, d = s / 2, a = d > 0 ? Math.round((i.height + U) / (d + U)) : 0, l = de * a, r = De(() => l <= 0 ? null : Array.from({ length: l }, (f, g) => /* @__PURE__ */ e(
    "div",
    {
      style: {
        borderRadius: st,
        background: "rgba(242, 242, 242, 0.3)",
        border: "1px solid var(--rosetta-border-default)"
      }
    },
    g
  )), [l]);
  return /* @__PURE__ */ e(
    "div",
    {
      ref: o,
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
        opacity: t ? 1 : void 0,
        transition: t ? "opacity 0.15s ease" : void 0
      },
      children: s > 0 && /* @__PURE__ */ e(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${de}, 1fr)`,
            gridTemplateRows: `repeat(${a}, 1fr)`,
            columnGap: we,
            rowGap: U,
            padding: `0 ${ue}px`,
            width: "100%",
            height: "100%",
            boxSizing: "border-box"
          },
          children: r
        }
      )
    }
  );
}
function Et({
  onSave: t,
  onExit: o,
  onUndo: i,
  onRedo: n,
  activeBreakpoint: s = "desktop",
  onBreakpointChange: d,
  onRun: a,
  componentName: l
}) {
  return /* @__PURE__ */ u("header", { "data-theme": "light", style: {
    position: "relative",
    height: 56,
    background: "var(--rosetta-bg-base)",
    borderBottom: "1px solid var(--rosetta-bg-default)",
    flexShrink: 0,
    transition: "background 0.3s ease, border-color 0.3s ease"
  }, children: [
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }, children: [
      /* @__PURE__ */ e("button", { onClick: t, style: dt, children: "Save" }),
      /* @__PURE__ */ e(ut, { onClick: o, label: "Exit" }),
      /* @__PURE__ */ u("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ e(ve, { onClick: i, title: "Undo", children: /* @__PURE__ */ e(Ne, { style: { width: 18, height: 15 } }) }),
        /* @__PURE__ */ e(ve, { onClick: void 0, title: "Redo", disabled: !0, children: /* @__PURE__ */ e(We, { style: { width: 18, height: 15, opacity: 0.28 } }) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { style: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      textAlign: "center",
      overflow: "hidden",
      height: 56
    }, children: /* @__PURE__ */ u("div", { style: {
      transform: l ? "translateY(-56px)" : "translateY(0)",
      transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
    }, children: [
      /* @__PURE__ */ e(ft, { title: "Adrienne", subtitle: "Page · Published" }),
      /* @__PURE__ */ u("div", { style: {
        height: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ e("div", { style: {
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px",
          transition: "color 0.3s ease"
        }, children: l ?? "Component" }),
        /* @__PURE__ */ e("div", { style: {
          fontSize: 12,
          fontWeight: 400,
          color: "var(--rosetta-fg-muted)",
          lineHeight: "16px",
          transition: "color 0.3s ease"
        }, children: "Editing global component" })
      ] })
    ] }) }),
    /* @__PURE__ */ u("div", { style: {
      position: "absolute",
      right: 11,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 11
    }, children: [
      /* @__PURE__ */ e("div", { style: {
        width: 96,
        height: 36,
        background: "var(--rosetta-bg-default)",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        padding: 2,
        transition: "background 0.3s ease, opacity 0.3s ease",
        opacity: l ? 0.35 : 1,
        pointerEvents: l ? "none" : void 0
      }, children: ["desktop", "mobile"].map((r) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => d == null ? void 0 : d(r),
          title: r,
          disabled: !!l,
          style: {
            flex: 1,
            height: 32,
            background: s === r ? "var(--rosetta-bg-base)" : "transparent",
            border: "none",
            borderRadius: 4,
            cursor: l ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease"
          },
          children: r === "desktop" ? /* @__PURE__ */ e(Xe, { style: { width: 18, height: 17 } }) : /* @__PURE__ */ e(Ye, { style: { width: 12, height: 20 } })
        },
        r
      )) }),
      /* @__PURE__ */ e(ve, { onClick: a, title: "Preview", disabled: !!l, children: /* @__PURE__ */ e(je, { style: { width: 20, height: 20, opacity: l ? 0.28 : 1, transition: "opacity 0.3s ease" } }) })
    ] })
  ] });
}
function ve({
  children: t,
  onClick: o,
  title: i,
  disabled: n
}) {
  const { ref: s, hovered: d, showTooltip: a, onMouseEnter: l, onMouseLeave: r } = Fe();
  return /* @__PURE__ */ u(
    "button",
    {
      ref: s,
      onClick: o,
      onMouseEnter: l,
      onMouseLeave: r,
      disabled: n,
      style: {
        position: "relative",
        width: 36,
        height: 36,
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 4,
        cursor: n ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        pointerEvents: n ? "none" : void 0
      },
      children: [
        d && !n && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ e("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: t }),
        i && /* @__PURE__ */ e(Re, { text: i, anchorRef: s, visible: a })
      ]
    }
  );
}
const dt = {
  height: 36,
  background: "var(--rosetta-bg-strong)",
  color: "var(--rosetta-fg-onStrong)",
  border: "none",
  padding: "0 11px",
  borderRadius: 4,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  cursor: "pointer",
  flexShrink: 0
};
function ut({ onClick: t, label: o }) {
  const [i, n] = p(!1);
  return /* @__PURE__ */ u(
    "button",
    {
      onClick: t,
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      style: {
        position: "relative",
        height: 36,
        background: "var(--rosetta-bg-base)",
        color: "var(--rosetta-fg-default)",
        border: "none",
        padding: "0 11px",
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        cursor: "pointer",
        flexShrink: 0
      },
      children: [
        i && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ e("span", { style: { position: "relative", zIndex: 1 }, children: o })
      ]
    }
  );
}
function ft({ title: t, subtitle: o }) {
  const [i, n] = p(!1);
  return /* @__PURE__ */ u(
    "button",
    {
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 11px",
        borderRadius: 4,
        textAlign: "center",
        height: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      children: [
        i && /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          top: 8,
          bottom: 8,
          left: 0,
          right: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ e("div", { style: {
          position: "relative",
          zIndex: 1,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px"
        }, children: t }),
        /* @__PURE__ */ e("div", { style: {
          position: "relative",
          zIndex: 1,
          fontSize: 12,
          fontWeight: 400,
          color: "var(--rosetta-fg-muted)",
          lineHeight: "16px"
        }, children: o })
      ]
    }
  );
}
function Ht({ cssString: t, children: o }) {
  return /* @__PURE__ */ e(
    "div",
    {
      style: {
        width: "100%",
        height: "100%"
      },
      ref: (i) => {
        i && t.split(";").forEach((n) => {
          const [s, d] = n.split(":").map((a) => a.trim());
          s && d && s.startsWith("--") && i.style.setProperty(s, d);
        });
      },
      children: o
    }
  );
}
function ht({
  initialLeft: t,
  initialTop: o,
  width: i,
  height: n,
  containerWidth: s,
  sectionHeight: d,
  enabled: a = !0,
  onDrop: l
}) {
  const [r, f] = p(!1), [g, b] = p(!1), [w, L] = p({ x: 0, y: 0 }), [c, V] = p({ left: t, top: o }), S = h({ x: 0, y: 0 }), M = h({ left: t, top: o }), R = h({ x: 0, y: 0 }), m = h({ left: t, top: o });
  A(() => {
    !r && !g && V({ left: t, top: o });
  }, [t, o, r, g]);
  const E = y((v) => {
    if (!a || v.button !== 0) return;
    v.preventDefault(), S.current = { x: v.clientX, y: v.clientY }, M.current = { left: t, top: o }, R.current = { x: 0, y: 0 }, m.current = { left: t, top: o };
    let k = !1;
    const P = 4, D = (H) => {
      const I = H.clientX - S.current.x, B = H.clientY - S.current.y;
      if (!k) {
        if (Math.abs(I) < P && Math.abs(B) < P) return;
        k = !0, f(!0), b(!1), L({ x: 0, y: 0 }), V({ left: t, top: o });
      }
      let z = B;
      if (d != null && s > 0) {
        const j = fe(s), ne = 0, oe = d - j, re = M.current.top + B;
        re < ne && (z = ne - M.current.top), re > oe && (z = oe - M.current.top);
      }
      R.current = { x: I, y: z }, L({ x: I, y: z });
      const C = M.current.left + I, F = M.current.top + z, T = ct(C, s), Q = at(F, s);
      m.current = { left: T, top: Q }, V({ left: T, top: Q });
    }, Y = () => {
      if (document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", Y), !k) return;
      const H = m.current;
      l == null || l(H.left, H.top), f(!1), b(!0), L({ x: 0, y: 0 }), setTimeout(() => {
        b(!1);
      }, 300);
    };
    document.addEventListener("mousemove", D), document.addEventListener("mouseup", Y);
  }, [a, t, o, i, n, s, d, l]);
  return {
    isDragging: r,
    naturalOffset: w,
    snappedPosition: c,
    isSettling: g,
    dragHandleProps: { onMouseDown: E }
  };
}
function It({
  label: t,
  disabled: o = !1,
  children: i,
  style: n,
  canvasWidth: s,
  sectionHeight: d,
  blockId: a,
  draggedPosition: l,
  onBlockDrop: r,
  onDragStateChange: f
}) {
  const [g, b] = p(!1), w = h(null), L = h(!1), [c, V] = p(null);
  A(() => {
    const C = w.current;
    if (!C || !C.offsetParent) return;
    const F = () => {
      C.offsetParent && V({
        left: C.offsetLeft,
        top: C.offsetTop,
        width: C.offsetWidth,
        height: C.offsetHeight
      });
    };
    F();
    const T = new ResizeObserver(F);
    return T.observe(C), () => T.disconnect();
  }, [n, s, l]);
  const S = s ?? 0, M = !o && S > 0 && c !== null, R = y((C, F) => {
    a && r && r(a, C, F);
  }, [a, r]), {
    isDragging: m,
    naturalOffset: E,
    snappedPosition: v,
    isSettling: k,
    dragHandleProps: P
  } = ht({
    initialLeft: (c == null ? void 0 : c.left) ?? 0,
    initialTop: (c == null ? void 0 : c.top) ?? 0,
    width: (c == null ? void 0 : c.width) ?? 0,
    height: (c == null ? void 0 : c.height) ?? 0,
    containerWidth: S,
    sectionHeight: d,
    enabled: M,
    onDrop: R
  });
  A(() => {
    m !== L.current && (L.current = m, f == null || f(m));
  }, [m, f]);
  const D = (g || m) && !o, Y = D && !m, H = l ? { ...n, left: l.left, top: l.top } : { ...n }, I = m ? {
    ...H,
    position: "absolute",
    left: v.left,
    top: v.top,
    width: c == null ? void 0 : c.width,
    height: (n == null ? void 0 : n.height) ?? (c == null ? void 0 : c.height),
    zIndex: 1e3,
    cursor: "grabbing",
    right: void 0,
    bottom: void 0
  } : { position: "relative", cursor: M ? "grab" : "default", zIndex: 2, ...H }, B = m ? `translate(${E.x - (v.left - ((c == null ? void 0 : c.left) ?? 0))}px, ${E.y - (v.top - ((c == null ? void 0 : c.top) ?? 0))}px)` : void 0;
  return /* @__PURE__ */ u(
    "div",
    {
      ref: w,
      onMouseEnter: () => {
        o || b(!0);
      },
      onMouseLeave: () => {
        m || b(!1);
      },
      ...M ? P : {},
      style: I,
      children: [
        /* @__PURE__ */ e("div", { style: {
          transform: B,
          transition: k ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" : m ? "none" : void 0,
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          overflow: n == null ? void 0 : n.overflow,
          display: n == null ? void 0 : n.display,
          flexDirection: n == null ? void 0 : n.flexDirection,
          alignItems: n == null ? void 0 : n.alignItems,
          justifyContent: n == null ? void 0 : n.justifyContent
        }, children: i }),
        D && /* @__PURE__ */ u(Ve, { children: [
          /* @__PURE__ */ e("div", { style: {
            position: "absolute",
            inset: 0,
            border: "2px solid #0072f0",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ e("div", { style: {
            position: "absolute",
            inset: -1,
            border: "1px solid #6ca4f4",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          Y && /* @__PURE__ */ e("div", { style: {
            position: "absolute",
            left: 0,
            top: -22,
            zIndex: 100,
            pointerEvents: "none"
          }, children: /* @__PURE__ */ u("div", { style: {
            background: "#0072f0",
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            gap: 3,
            height: 16,
            padding: "0.25px 6px 0.75px"
          }, children: [
            t !== "Text" && /* @__PURE__ */ e($e, { style: { width: 10, height: 10 } }),
            /* @__PURE__ */ e("span", { style: {
              fontSize: 9.75,
              fontWeight: 500,
              fontFamily: "Clarkson, Helvetica, sans-serif",
              textTransform: "uppercase",
              letterSpacing: 0.75,
              lineHeight: "16px",
              color: "#fff",
              whiteSpace: "nowrap"
            }, children: t })
          ] }) })
        ] })
      ]
    }
  );
}
function St({
  blockRef: t,
  children: o
}) {
  const [i, n] = p(null);
  return A(() => {
    const s = t.current;
    if (!s) return;
    const d = () => {
      const a = s.getBoundingClientRect();
      n({ top: a.top - 12, left: a.left });
    };
    return d(), window.addEventListener("scroll", d, !0), window.addEventListener("resize", d), () => {
      window.removeEventListener("scroll", d, !0), window.removeEventListener("resize", d);
    };
  }, [t]), i ? He(
    /* @__PURE__ */ e("div", { style: {
      position: "fixed",
      top: i.top,
      left: i.left,
      transform: "translateY(-100%)",
      zIndex: 1e4,
      pointerEvents: "auto"
    }, children: o }),
    document.body
  ) : null;
}
function Rt({ onClick: t }) {
  const [o, i] = p(!1);
  return /* @__PURE__ */ u(
    "div",
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      style: {
        position: "relative",
        height: 0,
        zIndex: 10,
        cursor: "pointer"
      },
      children: [
        /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: -16,
          bottom: -16
        } }),
        /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: -1,
          height: 2,
          background: "#027AFF",
          opacity: o ? 1 : 0,
          transition: "opacity 0.15s ease"
        } }),
        /* @__PURE__ */ e("div", { style: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: o ? 1 : 0,
          transition: "opacity 0.15s ease, transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: o ? "auto" : "none"
        }, children: /* @__PURE__ */ e(
          "button",
          {
            onClick: (n) => {
              n.stopPropagation(), t == null || t(n);
            },
            style: {
              background: "#027AFF",
              border: "1px solid #027AFF",
              borderRadius: 8,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 14px",
              cursor: "pointer",
              whiteSpace: "nowrap"
            },
            children: /* @__PURE__ */ e("span", { style: {
              fontFamily: "Clarkson, Helvetica, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "22px",
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "#FFFFFF"
            }, children: "Add Section" })
          }
        ) })
      ]
    }
  );
}
function Ft() {
  return /* @__PURE__ */ e("div", { style: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 9999,
    padding: "0 33px",
    display: "flex",
    gap: 33
  }, children: Array.from({ length: 12 }).map((t, o) => /* @__PURE__ */ e("div", { style: {
    flex: 1,
    background: "rgba(255, 0, 0, 0.05)",
    borderLeft: "1px solid rgba(255, 0, 0, 0.15)",
    borderRight: "1px solid rgba(255, 0, 0, 0.15)"
  } }, o)) });
}
const Ee = 2, me = 0.15, _ = 575, ce = 11, pt = 0.07;
function At({
  panelRef: t,
  containerSize: o,
  panelState: i,
  basePosition: n,
  onSnap: s,
  onUnsnap: d,
  enabled: a = !0
}) {
  const [l, r] = p(!1), [f, g] = p(!1), [b, w] = p({ x: 0, y: 0 }), [L, c] = p(null), [V, S] = p(!1), [M, R] = p(0), m = h(null), E = h({ x: 0, y: 0 }), v = h(!1), k = h(!1), P = h(!1), D = h(s);
  D.current = s;
  const Y = h(d);
  Y.current = d;
  const H = h(i);
  H.current = i;
  const I = h(o);
  I.current = o;
  const B = h(n);
  B.current = n;
  const z = h(() => {
  }), C = h(() => {
  });
  z.current = (x) => {
    var be;
    if (!m.current) return;
    const N = x.clientX - m.current.x, $ = x.clientY - m.current.y;
    if (!v.current) {
      if (Math.abs(N) < Ee && Math.abs($) < Ee) return;
      if (v.current = !0, r(!0), c(null), P.current) {
        const Te = H.current, Be = I.current.w;
        let le, ae;
        Te === "snapped-left" ? (le = ce, ae = ce) : (le = Be - _ - ce, ae = ce), E.current = { x: le, y: ae }, B.current.current = { x: le, y: ae }, g(!0), Y.current(), setTimeout(() => g(!1), 450);
      }
    }
    const K = E.current.x + N, O = E.current.y + $, W = I.current.w, q = I.current.h, Z = Math.max(0, Math.min(W - _, K)), ie = Math.max(0, Math.min(q - 100, O));
    w({ x: Z, y: ie });
    const J = (be = t.current) == null ? void 0 : be.parentElement, he = (J == null ? void 0 : J.getBoundingClientRect().left) ?? 0, ee = x.clientX - he;
    ee < W * me ? c("left") : ee > W * (1 - me) ? c("right") : c(null);
    const pe = Z + _ / 2, se = Math.max(-1, Math.min(1, (ee - pe) / (_ / 2)));
    R(se);
  }, C.current = (x) => {
    var N, $, K;
    if (k.current = !1, document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", T), v.current) {
      const O = (N = t.current) == null ? void 0 : N.parentElement, W = (O == null ? void 0 : O.getBoundingClientRect().left) ?? 0, q = x.clientX - W, Z = I.current.w, ie = Z * me;
      if (q < ie)
        D.current("left");
      else if (q > Z - ie)
        D.current("right");
      else {
        const J = x.clientX - ((($ = m.current) == null ? void 0 : $.x) ?? x.clientX), he = x.clientY - (((K = m.current) == null ? void 0 : K.y) ?? x.clientY), ee = E.current.x + J, pe = E.current.y + he, se = {
          x: Math.max(0, Math.min(Z - _, ee)),
          y: Math.max(0, Math.min(I.current.h - 100, pe))
        };
        B.current.current = se, w(se);
      }
    }
    r(!1), c(null), m.current = null, v.current = !1, P.current = !1;
  };
  const F = h((x) => z.current(x)).current, T = h((x) => C.current(x)).current, Q = y((x) => {
    !a || !t.current || (x.preventDefault(), x.stopPropagation(), k.current = !0, m.current = { x: x.clientX, y: x.clientY }, E.current = { ...B.current.current }, v.current = !1, P.current = H.current !== "floating", document.addEventListener("mousemove", F), document.addEventListener("mouseup", T));
  }, [a, t, F, T]), j = h(null), ne = y(() => {
    j.current && (clearTimeout(j.current), j.current = null), a && S(!0);
  }, [a]), oe = y(() => {
    k.current || (j.current = setTimeout(() => {
      S(!1), c(null), R(0), j.current = null;
    }, 50));
  }, []), re = y((x) => {
    if (!a || l) return;
    const N = t.current;
    if (!N) return;
    const $ = x.currentTarget.getBoundingClientRect();
    if (x.clientY > $.bottom) return;
    const K = N.getBoundingClientRect(), O = x.clientX - K.left, W = _ * pt, q = Math.max(-1, Math.min(1, (O - _ / 2) / (_ / 2)));
    R(q);
    const Z = H.current;
    O < W && Z !== "snapped-left" ? c("left") : O > _ - W && Z !== "snapped-right" ? c("right") : c(null);
  }, [a, l, t]);
  return A(() => {
    l || w(n.current);
  }, [n.current.x, n.current.y, l]), A(() => () => {
    document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", T);
  }, [F, T]), A(() => {
    a || (r(!1), c(null), S(!1), R(0));
  }, [a]), {
    position: b,
    isDragging: l,
    isUnsnapping: f,
    snapHint: L,
    isExpanded: V,
    snapBarPosition: M,
    dragRegionProps: { onMouseDown: Q },
    hoverZoneProps: {
      onMouseEnter: ne,
      onMouseLeave: oe,
      onMouseMove: re
    }
  };
}
const Ae = {
  fg: {
    default: "#0E0E0E",
    muted: "#666666",
    disabled: "#B7B7B7",
    accent: "#0862D1",
    success: "#1B754F",
    warning: "#925B20",
    danger: "#C32D38",
    onStrong: "#FFFFFF"
  },
  bg: {
    base: "#FFFFFF",
    default: "#F2F2F2",
    inset: "#F9F9F9",
    muted: "#E7E7E7",
    strong: "#0E0E0E",
    accentDefault: "#F4F5FD",
    accentStrong: "#0072F0",
    successDefault: "#EDF8F2",
    successStrong: "#15865B",
    warningDefault: "#FEF5D3",
    warningStrong: "#AB6500",
    dangerDefault: "#FEF3F2",
    dangerStrong: "#DB3642"
  }
}, gt = {
  fg: {
    default: "#FFFFFF",
    muted: "#9B9B9B",
    disabled: "#4A4A4A",
    accent: "#4389EC",
    success: "#439A71",
    warning: "#B97F1F",
    danger: "#DD6363",
    onStrong: "#0E0E0E"
  },
  bg: {
    base: "#0E0E0E",
    default: "#202020",
    inset: "#171717",
    muted: "#3A3A3A",
    strong: "#FFFFFF",
    accentDefault: "#131B30",
    accentStrong: "#287AE7",
    successDefault: "#041E11",
    successStrong: "#208C60",
    warningDefault: "#281803",
    warningStrong: "#A87012",
    dangerDefault: "#321112",
    dangerStrong: "#D8484D"
  }
};
function Tt() {
  return typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? gt : Ae;
}
const Bt = Ae;
function Vt(t) {
  return t.replace("#", "");
}
const Dt = [
  { key: "tl", style: { top: -4, left: -4 } },
  { key: "tc", style: { top: -5, left: "calc(50% - 5px)" } },
  { key: "tr", style: { top: -4, right: -4 } },
  { key: "ml", style: { top: "calc(50% - 5px)", left: -5 } },
  { key: "mr", style: { top: "calc(50% - 5px)", right: -5 } },
  { key: "bl", style: { bottom: -4, left: -4 } },
  { key: "bc", style: { bottom: -5, left: "calc(50% - 5px)" } },
  { key: "br", style: { bottom: -4, right: -4 } }
];
export {
  et as AddBlockToolbar,
  Rt as AddSectionDivider,
  _e as AlignTopIcon,
  ze as AnimatedSearchIcon,
  kt as BlockAnnotationBar,
  It as BlockHover,
  Qe as BlockPicker,
  xt as ChevronDownIcon,
  Oe as CodeIcon,
  Xe as DesktopIcon,
  Pe as DuplicateIcon,
  tt as EditHeaderButton,
  Ie as EditIcon,
  de as FE_COLUMNS,
  we as FE_COL_GAP,
  ue as FE_MARGIN,
  U as FE_ROW_GAP,
  Mt as FluidEngineGrid,
  $e as GlobalContentGlyphIcon,
  Ft as GridOverlay,
  Dt as HANDLE_POSITIONS,
  Lt as HeaderSectionWrapper,
  Ye as MobileIcon,
  Ze as PinIcon,
  je as PlayIcon,
  Ge as PlusIcon,
  St as PortaledAnnotationBar,
  We as RedoIcon,
  bt as SearchGlyphIcon,
  yt as SectionWrapper,
  Et as SiteToolbar,
  Ht as ThemeProvider,
  Re as Tooltip,
  Ne as UndoIcon,
  fe as feBrickHeight,
  xe as feBrickWidth,
  lt as feRowsHeight,
  Ct as feSnapHeight,
  ct as feSnapLeft,
  at as feSnapTop,
  Tt as getRosettaTheme,
  Vt as hex,
  Bt as rosetta,
  gt as rosettaDark,
  Ae as rosettaLight,
  ht as useBlockDrag,
  At as usePanelDrag,
  Fe as useTooltip
};
//# sourceMappingURL=index.js.map
