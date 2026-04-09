import { jsxs as g, jsx as r, Fragment as re } from "react/jsx-runtime";
import ur, { useState as w, useRef as F, useEffect as $, useCallback as S, useMemo as _, memo as N, useLayoutEffect as yn, createContext as xn, Children as pr, useContext as wn } from "react";
import { createPortal as Ke } from "react-dom";
function mr({
  expanded: e = !1,
  size: t = 16,
  color: n = "var(--rosetta-fg-muted)"
}) {
  const o = "0.28s cubic-bezier(0.22, 1, 0.36, 1)";
  return /* @__PURE__ */ g(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ r(
          "rect",
          {
            x: 3,
            y: 4,
            width: e ? 0 : 5,
            height: 2,
            style: { transition: `width ${o}` }
          }
        ),
        /* @__PURE__ */ r(
          "rect",
          {
            x: 3,
            y: 11,
            width: e ? 0 : 5,
            height: 2,
            style: { transition: `width ${o}` }
          }
        ),
        /* @__PURE__ */ r(
          "rect",
          {
            x: 3,
            y: 18,
            width: e ? 0 : 18,
            height: 2,
            style: { transition: `width ${o}` }
          }
        ),
        /* @__PURE__ */ r(
          "g",
          {
            style: {
              transformOrigin: "15.5px 8.5px",
              transform: e ? "translate(-4px, 2.5px) scale(1.4)" : "translate(0, 0) scale(1)",
              transition: `transform ${o}`
            },
            children: /* @__PURE__ */ r(
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
function hr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ g("g", { id: "Icon", children: [
        /* @__PURE__ */ r("path", { d: "M14.55 0L9.55001 18H7.45001L12.45 0H14.55Z", fill: "currentColor" }),
        /* @__PURE__ */ r(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 4.16795V6.57165L2.35748 9L6 11.4283V13.832L0 9.83205V8.16795L6 4.16795Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ r(
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
function kn(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function fr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function gr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ g("g", { id: "Icon", children: [
        /* @__PURE__ */ r("path", { d: "M18 0H0V2H18V0Z", fill: "currentColor" }),
        /* @__PURE__ */ r(
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
function br(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function vr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function yr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function xr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function wr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ g("g", { id: "Icon", children: [
        /* @__PURE__ */ r("path", { d: "M9 15H3V17H9V15Z", fill: "currentColor" }),
        /* @__PURE__ */ r(
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
function kr(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function Gc(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function _r(e) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      style: { display: "block" },
      ...e,
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M10 10.5V11.5L7.5 14H6.5L4 11.5V10.5L6.5 8H7.5L10 10.5ZM6 6.5V7.5L3.5 10H2.5L0 7.5V6.5L2.5 4H3.5L6 6.5ZM14 6.5V7.5L11.5 10H10.5L8 7.5V6.5L10.5 4H11.5L14 6.5ZM10 2.5V3.5L7.5 6H6.5L4 3.5V2.5L6.5 0H7.5L10 2.5Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Rt(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
function Yc(e) {
  return /* @__PURE__ */ r(
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
      ...e,
      children: /* @__PURE__ */ r(
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
const Pe = 11, Fr = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "22px"
}, Bt = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22px"
}, Cr = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px"
}, Sr = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "22px",
  letterSpacing: 0.5
}, Rr = "/assets/block-icons", $t = [
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
function Lr({ onSelect: e, onClose: t, blockIconBasePath: n = Rr }) {
  const [o, a] = w(""), i = F(null), c = F(null);
  $(() => {
    const l = setTimeout(() => {
      var d;
      return (d = i.current) == null ? void 0 : d.focus();
    }, 50);
    return () => clearTimeout(l);
  }, []), $(() => {
    function l(d) {
      c.current && !c.current.contains(d.target) && t();
    }
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [t]);
  const s = o ? $t.map((l) => ({
    ...l,
    blocks: l.blocks.filter((d) => d.name.toLowerCase().includes(o.toLowerCase()))
  })).filter((l) => l.blocks.length > 0) : $t;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: c,
      className: "block-picker-enter",
      style: {
        width: 320,
        background: "var(--rosetta-bg-base)",
        borderRadius: Pe,
        boxShadow: "var(--shadows-200)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      onClick: (l) => l.stopPropagation(),
      children: [
        /* @__PURE__ */ g("div", { style: {
          height: 50,
          display: "flex",
          alignItems: "center",
          gap: Pe,
          padding: "0 12px",
          borderBottom: "1px solid var(--rosetta-border-default)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ r("div", { style: { width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ r(mr, { expanded: !0, size: 16, color: "var(--rosetta-fg-muted)" }) }),
          /* @__PURE__ */ r(
            "input",
            {
              ref: i,
              type: "text",
              placeholder: "Search blocks",
              value: o,
              onChange: (l) => a(l.target.value),
              onKeyDown: (l) => {
                l.key === "Escape" && t();
              },
              style: {
                ...Bt,
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                padding: 0,
                color: o ? "var(--rosetta-fg-default)" : "#6E6E6E",
                minWidth: 0
              }
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { style: {
          overflow: "auto",
          maxHeight: "min(480px, calc(100vh - 200px))",
          padding: `${Pe}px`
        }, children: [
          s.length === 0 && /* @__PURE__ */ g("p", { style: {
            ...Bt,
            color: "var(--rosetta-fg-muted)",
            padding: `${Pe}px 0`,
            textAlign: "center"
          }, children: [
            'No blocks matching "',
            o,
            '"'
          ] }),
          s.map((l, d) => /* @__PURE__ */ g("div", { style: { marginTop: d > 0 ? 16 : 0 }, children: [
            /* @__PURE__ */ r("p", { style: {
              ...Fr,
              color: "var(--rosetta-fg-default)",
              marginBottom: 6
            }, children: l.label }),
            /* @__PURE__ */ r("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            }, children: l.blocks.map((u) => /* @__PURE__ */ r(Er, { block: u, onSelect: e, blockIconBasePath: n }, u.name)) })
          ] }, l.label))
        ] })
      ]
    }
  );
}
function Er({ block: e, onSelect: t, blockIconBasePath: n }) {
  return /* @__PURE__ */ g(
    "button",
    {
      onClick: () => t(e.name),
      style: {
        // Spec: 146px wide, 44px tall, #F9F9F9 bg, 6px radius
        width: "calc(50% - 3px)",
        height: 44,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0 11px",
        gap: Pe,
        background: "var(--rosetta-bg-inset)",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        overflow: "hidden",
        textAlign: "left"
      },
      onMouseEnter: (o) => o.currentTarget.style.background = "var(--rosetta-bg-default)",
      onMouseLeave: (o) => o.currentTarget.style.background = "var(--rosetta-bg-inset)",
      children: [
        /* @__PURE__ */ r("div", { style: {
          width: 16,
          height: 16,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }, children: /* @__PURE__ */ r(
          "img",
          {
            src: `${n}/${e.icon}.svg`,
            alt: "",
            style: {
              maxWidth: 16,
              maxHeight: 16,
              display: "block"
            }
          }
        ) }),
        /* @__PURE__ */ r("span", { style: {
          ...Cr,
          color: "var(--rosetta-fg-default)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: e.name })
      ]
    }
  );
}
function Mr({ onAddBlock: e }) {
  const [t, n] = w(!1), [o, a] = w(0), i = F(null), c = S((s) => {
    const l = i.current;
    if (!l) return;
    const d = l.getBoundingClientRect(), u = ((s.clientX - d.left) / d.width - 0.5) * 2;
    a(u * 3);
  }, []);
  return /* @__PURE__ */ r(
    "div",
    {
      ref: i,
      onMouseMove: c,
      onMouseLeave: () => {
        n(!1), a(0);
      },
      style: {
        display: "flex",
        alignItems: "center"
      },
      children: /* @__PURE__ */ g(
        "button",
        {
          onClick: e,
          onMouseEnter: () => n(!0),
          onMouseLeave: () => n(!1),
          style: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            padding: "0 20px",
            background: "#FAFAFA",
            border: "1px solid #E7E7E7",
            borderRadius: 11,
            boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.08), 0px 4px 16px 0px rgba(0,0,0,0.12)",
            cursor: "pointer",
            overflow: "hidden",
            transform: `translateX(${o}px)`,
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
          },
          children: [
            /* @__PURE__ */ r("div", { style: {
              position: "absolute",
              inset: 3,
              borderRadius: 8,
              background: "rgba(0,0,0,0.05)",
              opacity: t ? 1 : 0,
              transition: "opacity 0.15s ease",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ r("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ r(Rt, {}) }),
            /* @__PURE__ */ r("span", { style: {
              position: "relative",
              fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 600,
              fontSize: 12,
              lineHeight: "22px",
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "#0E0E0E",
              whiteSpace: "nowrap"
            }, children: "Add Block" })
          ]
        }
      )
    }
  );
}
function Ir({ onClick: e }) {
  const [t, n] = w(!1);
  return /* @__PURE__ */ g(
    "button",
    {
      onClick: e,
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: Pe,
        padding: "11px 22px 11px 16px",
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 8,
        boxShadow: "var(--shadows-100)",
        cursor: "pointer"
      },
      children: [
        t && /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          inset: 4,
          background: "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ r("div", { style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }, children: /* @__PURE__ */ r(kn, { style: { width: 16, height: 16, display: "block" } }) }),
        /* @__PURE__ */ r("span", { style: {
          ...Sr,
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
const Tr = "#0072f0", vt = 3, Ht = 11;
function Xc({
  sectionId: e,
  sectionLabel: t,
  children: n,
  onBlockPicked: o,
  disabled: a = !1,
  style: i
}) {
  const [c, s] = w(!1), [l, d] = w(!1), [u, m] = w(!1), b = F(null), f = S(() => {
    a || (s(!0), m(!1));
  }, [a]), p = S(() => {
    l || (s(!1), m(!1));
  }, [l]), h = S(() => {
    d(!0), m(!1);
  }, []), k = S(() => {
    if (d(!1), m(!0), b.current) {
      const R = b.current.getBoundingClientRect(), T = x.current;
      T && (T.x < R.left || T.x > R.right || T.y < R.top || T.y > R.bottom) && s(!1);
    }
  }, []), C = S((R) => {
    d(!1), s(!1), o(e, R);
  }, [e, o]), x = F(null), y = S((R) => {
    x.current = { x: R.clientX, y: R.clientY };
  }, []), E = (c || l) && !a, M = F(null);
  return $(() => {
    if (!E) return;
    const R = b.current, T = M.current;
    if (!R || !T) return;
    let D = R.parentElement;
    for (; D; ) {
      const { overflow: A, overflowY: z } = getComputedStyle(D);
      if (A === "auto" || A === "scroll" || z === "auto" || z === "scroll") break;
      D = D.parentElement;
    }
    const P = D || window, B = () => {
      const A = R.getBoundingClientRect(), V = A.height * 0.1, W = A.bottom - 16 - 40;
      W < V ? T.style.opacity = `${Math.max(0, W / V)}` : T.style.opacity = "1";
    };
    return P.addEventListener("scroll", B, { passive: !0 }), B(), () => P.removeEventListener("scroll", B);
  }, [E]), /* @__PURE__ */ g(
    "div",
    {
      ref: b,
      onMouseEnter: f,
      onMouseLeave: p,
      onMouseMove: y,
      style: {
        position: "relative",
        ...i
      },
      children: [
        n,
        /* @__PURE__ */ r(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              border: `${vt}px solid ${E ? Tr : "transparent"}`,
              zIndex: 101,
              pointerEvents: "none",
              transition: "border-color 0.15s ease"
            }
          }
        ),
        E && /* @__PURE__ */ r(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: vt + Ht,
              bottom: 0,
              zIndex: 102,
              pointerEvents: "none",
              paddingTop: vt + Ht
            },
            children: /* @__PURE__ */ g(
              "div",
              {
                ref: M,
                style: {
                  position: "sticky",
                  top: 16,
                  pointerEvents: "auto",
                  transition: "opacity 0.15s ease"
                },
                children: [
                  /* @__PURE__ */ r(
                    "div",
                    {
                      className: u ? "add-block-return" : l ? "" : "add-block-enter",
                      style: {
                        opacity: l ? 0 : 1,
                        pointerEvents: l ? "none" : "auto",
                        transition: "opacity 200ms ease",
                        position: l ? "absolute" : "relative"
                      },
                      children: /* @__PURE__ */ r(
                        Mr,
                        {
                          onAddBlock: h
                        }
                      )
                    }
                  ),
                  l && /* @__PURE__ */ r(
                    Lr,
                    {
                      onSelect: C,
                      onClose: k
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function Kc({
  children: e,
  disabled: t = !1,
  style: n
}) {
  const [o, a] = w(!1), i = S(() => {
    t || a(!0);
  }, [t]), c = S(() => {
    a(!1);
  }, []), s = o && !t;
  return /* @__PURE__ */ g(
    "div",
    {
      onMouseEnter: i,
      onMouseLeave: c,
      style: {
        position: "relative",
        ...n
      },
      children: [
        e,
        s && /* @__PURE__ */ r(
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
            children: /* @__PURE__ */ r("div", { className: "header-btn-enter", children: /* @__PURE__ */ r(Ir, { onClick: (l) => {
              const d = l.clientX, u = l.clientY;
              for (let m = 0; m < 14; m++) {
                const b = document.createElement("div");
                b.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${d}px;top:${u}px;`;
                const f = Math.random() * Math.PI * 2, p = 60 + Math.random() * 100;
                b.animate([
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  { transform: `translate(${Math.cos(f) * p}px,${Math.sin(f) * p}px) scale(0)`, opacity: 0 }
                ], { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0,0.5,0.5,1)", fill: "forwards" }), document.body.appendChild(b), setTimeout(() => b.remove(), 900);
              }
            } }) })
          }
        )
      ]
    }
  );
}
const Ue = 8;
function _n({
  text: e,
  anchorRef: t,
  visible: n
}) {
  const o = F(null), [a, i] = w(null);
  return $(() => {
    if (!n || !t.current) {
      i(null);
      return;
    }
    i({ top: -9999, left: -9999 });
    const c = requestAnimationFrame(() => {
      if (!t.current || !o.current) return;
      const s = t.current.getBoundingClientRect(), l = o.current.getBoundingClientRect(), d = window.innerWidth;
      let u = s.left + s.width / 2 - l.width / 2;
      const m = window.innerHeight;
      let b = s.bottom + 6;
      b + l.height > m - Ue && (b = s.top - l.height - 6), u < Ue && (u = Ue), u + l.width > d - Ue && (u = d - Ue - l.width), i({ top: b, left: u });
    });
    return () => cancelAnimationFrame(c);
  }, [n, t]), n ? Ke(
    /* @__PURE__ */ r(
      "div",
      {
        ref: o,
        style: {
          position: "fixed",
          top: (a == null ? void 0 : a.top) ?? -9999,
          left: (a == null ? void 0 : a.left) ?? -9999,
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
        children: e
      }
    ),
    document.body
  ) : null;
}
function Fn(e = 600) {
  const t = F(null), [n, o] = w(!1), [a, i] = w(!1), c = F(null), s = S(() => {
    o(!0), c.current = setTimeout(() => i(!0), e);
  }, [e]), l = S(() => {
    o(!1), i(!1), c.current && (clearTimeout(c.current), c.current = null);
  }, []);
  return $(() => () => {
    c.current && clearTimeout(c.current);
  }, []), { ref: t, hovered: n, showTooltip: a, onMouseEnter: s, onMouseLeave: l };
}
const Ot = {
  background: "var(--rosetta-bg-base)",
  borderRadius: 11,
  height: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  boxShadow: "var(--shadows-200)"
};
function Jc({
  onOpenIDE: e,
  onOpenDesignPanel: t,
  onDelete: n,
  isExiting: o
}) {
  return /* @__PURE__ */ g("div", { className: o ? "annotation-exit" : "annotation-enter", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ r("div", { style: Ot, children: /* @__PURE__ */ r(Se, { onClick: e, title: "Open code editor", children: /* @__PURE__ */ r(hr, { style: { width: 22, height: 18 } }) }) }),
    /* @__PURE__ */ g("div", { style: { ...Ot, gap: 4 }, children: [
      /* @__PURE__ */ r(Se, { onClick: t, title: "Edit", children: /* @__PURE__ */ r(kn, { style: { width: 18.5, height: 18.5 } }) }),
      /* @__PURE__ */ r(Dt, {}),
      /* @__PURE__ */ r(Se, { title: "Pin", children: /* @__PURE__ */ r(fr, { style: { width: 17.7, height: 17.7 } }) }),
      /* @__PURE__ */ r(Se, { title: "Align top", children: /* @__PURE__ */ r(gr, { style: { width: 18, height: 14 } }) }),
      /* @__PURE__ */ r(Se, { title: "Move forward", children: /* @__PURE__ */ r(Nr, {}) }),
      /* @__PURE__ */ r(Se, { title: "Move backward", children: /* @__PURE__ */ r(Ar, {}) }),
      /* @__PURE__ */ r(Dt, {}),
      /* @__PURE__ */ r(Se, { title: "Duplicate", children: /* @__PURE__ */ r(br, { style: { width: 18, height: 18 } }) }),
      /* @__PURE__ */ r(Se, { onClick: n, title: "Delete", danger: !0, children: /* @__PURE__ */ r(Br, {}) })
    ] })
  ] });
}
function Se({
  children: e,
  onClick: t,
  title: n,
  danger: o
}) {
  const { ref: a, hovered: i, showTooltip: c, onMouseEnter: s, onMouseLeave: l } = Fn();
  return /* @__PURE__ */ g(
    "button",
    {
      ref: a,
      onClick: t,
      onMouseEnter: s,
      onMouseLeave: l,
      style: {
        position: "relative",
        width: 36,
        height: 44,
        background: "transparent",
        border: "none",
        cursor: t ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        color: o ? "var(--rosetta-fg-danger)" : "var(--rosetta-fg-default)"
      },
      children: [
        i && /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          top: 4,
          left: 0,
          width: 36,
          height: 36,
          background: o ? "var(--rosetta-bg-danger-default)" : "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: e }),
        n && /* @__PURE__ */ r(_n, { text: n, anchorRef: a, visible: c })
      ]
    }
  );
}
function Dt() {
  return /* @__PURE__ */ r("div", { style: { width: 1, height: 20, background: "var(--rosetta-border-default)", flexShrink: 0 } });
}
function Nr() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ r("rect", { x: "7", y: "7", width: "13", height: "13", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" }),
    /* @__PURE__ */ r("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
}
function Ar() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ r("rect", { x: "7", y: "7", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ r("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" })
  ] });
}
function Br() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ r("path", { d: "M3 5h12" }),
    /* @__PURE__ */ r("path", { d: "M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" }),
    /* @__PURE__ */ r("path", { d: "M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" }),
    /* @__PURE__ */ r("path", { d: "M7.5 8v4.5" }),
    /* @__PURE__ */ r("path", { d: "M10.5 8v4.5" })
  ] });
}
const dt = 12, It = 33, He = 16, ut = 33, $r = 3;
function Tt(e) {
  return (e - ut * 2 - It * (dt - 1)) / dt;
}
function mt(e) {
  return Tt(e) / 2;
}
function Hr(e, t) {
  const n = mt(t);
  return e * n + (e - 1) * He;
}
function Qc(e, t) {
  const o = mt(t) + He, a = Math.ceil((e + He) / o);
  return Hr(a, t);
}
function Or(e, t) {
  const o = mt(t) + He;
  return Math.round(e / o) * o;
}
function Dr(e, t) {
  const o = Tt(t) + It;
  return ut + Math.round((e - ut) / o) * o;
}
function ed({ fadeIn: e = !1 }) {
  const t = F(null), [n, o] = w({ width: 0, height: 0 });
  $(() => {
    const d = t.current;
    if (!d) return;
    const u = new ResizeObserver(([m]) => {
      const { width: b, height: f } = m.contentRect;
      o({ width: b, height: f });
    });
    return u.observe(d), () => u.disconnect();
  }, []);
  const a = n.width > 0 ? Tt(n.width) : 0, i = a / 2, c = i > 0 ? Math.round((n.height + He) / (i + He)) : 0, s = dt * c, l = _(() => s <= 0 ? null : Array.from({ length: s }, (d, u) => /* @__PURE__ */ r(
    "div",
    {
      style: {
        borderRadius: $r,
        background: "rgba(242, 242, 242, 0.3)",
        border: "1px solid var(--rosetta-border-default)"
      }
    },
    u
  )), [s]);
  return /* @__PURE__ */ r(
    "div",
    {
      ref: t,
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
        opacity: e ? 1 : void 0,
        transition: e ? "opacity 0.15s ease" : void 0
      },
      children: a > 0 && /* @__PURE__ */ r(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${dt}, 1fr)`,
            gridTemplateRows: `repeat(${c}, 1fr)`,
            columnGap: It,
            rowGap: He,
            padding: `0 ${ut}px`,
            width: "100%",
            height: "100%",
            boxSizing: "border-box"
          },
          children: l
        }
      )
    }
  );
}
function Pr({ style: e }) {
  return /* @__PURE__ */ r("svg", { style: e, width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M8.64445 2.55279C8.39746 2.05881 7.79679 1.85859 7.30281 2.10558C6.80883 2.35257 6.60861 2.95324 6.8556 3.44722L9.68128 9.09859L5.06655 5.92596C4.61145 5.61308 3.98887 5.72837 3.67598 6.18348C3.3631 6.63858 3.47839 7.26116 3.9335 7.57405L9.40503 11.3357L3.05258 11.0014C2.50106 10.9724 2.03043 11.3959 2.00141 11.9474C1.97238 12.499 2.39594 12.9696 2.94747 12.9986L8.74187 13.3036L4.44532 16.168C3.9858 16.4743 3.86162 17.0952 4.16797 17.5547C4.47433 18.0142 5.0952 18.1384 5.55473 17.8321L9.19687 15.404L6.68629 18.9188C6.36528 19.3682 6.46937 19.9927 6.91879 20.3137C7.3682 20.6347 7.99275 20.5307 8.31376 20.0812L11.3471 15.8345L10.5136 20.8356C10.4228 21.3804 10.7909 21.8956 11.3356 21.9864C11.8804 22.0772 12.3956 21.7092 12.4864 21.1644L13.2883 16.3532L15.6588 20.0408C15.9575 20.5053 16.5762 20.6398 17.0408 20.3412C17.5054 20.0425 17.6399 19.4238 17.3412 18.9592L15.5553 16.1812L18.3217 18.7348C18.7276 19.1094 19.3602 19.0841 19.7348 18.6783C20.1094 18.2725 20.0841 17.6398 19.6783 17.2652L16.6427 14.4631L20.876 14.9923C21.424 15.0608 21.9238 14.6721 21.9923 14.124C22.0608 13.576 21.6721 13.0762 21.1241 13.0077L16.9342 12.484L21.2291 11.4734C21.7667 11.3469 22.0999 10.8086 21.9734 10.271C21.8469 9.73336 21.3086 9.40009 20.771 9.52659L15.1819 10.8417L19.2863 5.61783C19.6276 5.18356 19.5521 4.5549 19.1178 4.21369C18.6836 3.87247 18.0549 3.94791 17.7137 4.38218L13.8574 9.29015L14.738 3.65438C14.8233 3.10872 14.4501 2.59725 13.9044 2.51199C13.3587 2.42673 12.8473 2.79996 12.762 3.34563L11.876 9.01594L8.64445 2.55279Z" }) });
}
function td({
  onSave: e,
  onExit: t,
  onUndo: n,
  onRedo: o,
  activeBreakpoint: a = "desktop",
  onBreakpointChange: i,
  onRun: c,
  onStyles: s,
  isSiteStylesOpen: l,
  apiKey: d,
  onApiKeySave: u,
  componentName: m
}) {
  const [b, f] = w(!1), p = F(null);
  return /* @__PURE__ */ g("header", { "data-theme": "light", style: {
    position: "relative",
    height: 56,
    background: "var(--rosetta-bg-base)",
    borderBottom: "1px solid var(--rosetta-bg-default)",
    flexShrink: 0,
    transition: "background 0.3s ease, border-color 0.3s ease"
  }, children: [
    /* @__PURE__ */ g("div", { style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }, children: [
      /* @__PURE__ */ r("button", { onClick: e, style: zr, children: "Save" }),
      /* @__PURE__ */ r(jr, { onClick: t, label: "Exit" }),
      /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ r(ot, { onClick: n, title: "Undo", children: /* @__PURE__ */ r(vr, { style: { width: 18, height: 15 } }) }),
        /* @__PURE__ */ r(ot, { onClick: void 0, title: "Redo", disabled: !0, children: /* @__PURE__ */ r(yr, { style: { width: 18, height: 15, opacity: 0.28 } }) })
      ] })
    ] }),
    /* @__PURE__ */ r("div", { style: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      textAlign: "center",
      overflow: "hidden",
      height: 56
    }, children: /* @__PURE__ */ g("div", { style: {
      transform: m ? "translateY(-56px)" : "translateY(0)",
      transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
    }, children: [
      /* @__PURE__ */ r(Ur, { title: "Adrienne", subtitle: "Page · Published" }),
      /* @__PURE__ */ g("div", { style: {
        height: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ r("div", { style: {
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px",
          transition: "color 0.3s ease"
        }, children: m ?? "Component" }),
        /* @__PURE__ */ r("div", { style: {
          fontSize: 12,
          fontWeight: 400,
          color: "var(--rosetta-fg-muted)",
          lineHeight: "16px",
          transition: "color 0.3s ease"
        }, children: "Editing global component" })
      ] })
    ] }) }),
    /* @__PURE__ */ g("div", { style: {
      position: "absolute",
      right: 11,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 11
    }, children: [
      /* @__PURE__ */ r("div", { style: {
        width: 96,
        height: 36,
        background: "var(--rosetta-bg-default)",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        padding: 2,
        transition: "background 0.3s ease, opacity 0.3s ease",
        opacity: m ? 0.35 : 1,
        pointerEvents: m ? "none" : void 0
      }, children: ["desktop", "mobile"].map((h) => /* @__PURE__ */ r(
        "button",
        {
          onClick: () => i == null ? void 0 : i(h),
          title: h,
          disabled: !!m,
          style: {
            flex: 1,
            height: 32,
            background: a === h ? "var(--rosetta-bg-base)" : "transparent",
            border: "none",
            borderRadius: 4,
            cursor: m ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease"
          },
          children: h === "desktop" ? /* @__PURE__ */ r(xr, { style: { width: 18, height: 17 } }) : /* @__PURE__ */ r(wr, { style: { width: 12, height: 20 } })
        },
        h
      )) }),
      u && /* @__PURE__ */ g(re, { children: [
        /* @__PURE__ */ g("div", { ref: p, style: { position: "relative" }, children: [
          /* @__PURE__ */ r(ot, { onClick: () => f((h) => !h), title: "AI", active: b, children: /* @__PURE__ */ r(Pr, { style: { width: 20, height: 20 } }) }),
          !!d && /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#22c55e",
            pointerEvents: "none"
          } })
        ] }),
        /* @__PURE__ */ r(
          Wr,
          {
            open: b,
            anchorRef: p,
            apiKey: d,
            onSave: (h) => {
              u == null || u(h), f(!1);
            },
            onClose: () => f(!1)
          }
        )
      ] }),
      /* @__PURE__ */ r(ot, { onClick: s, title: "Site Styles", active: l, children: /* @__PURE__ */ r(kr, { style: { width: 20, height: 20 } }) })
    ] })
  ] });
}
function ot({
  children: e,
  onClick: t,
  title: n,
  disabled: o,
  active: a
}) {
  const { ref: i, hovered: c, showTooltip: s, onMouseEnter: l, onMouseLeave: d } = Fn();
  return /* @__PURE__ */ g(
    "button",
    {
      ref: i,
      onClick: t,
      onMouseEnter: l,
      onMouseLeave: d,
      disabled: o,
      style: {
        position: "relative",
        width: 36,
        height: 36,
        background: a ? "var(--rosetta-bg-default)" : "var(--rosetta-bg-base)",
        color: void 0,
        border: "none",
        borderRadius: 6,
        cursor: o ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        pointerEvents: o ? "none" : void 0,
        transition: "background 0.2s ease, color 0.2s ease"
      },
      children: [
        c && !o && !a && /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: e }),
        n && /* @__PURE__ */ r(_n, { text: n, anchorRef: i, visible: s })
      ]
    }
  );
}
const zr = {
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
function jr({ onClick: e, label: t }) {
  const [n, o] = w(!1);
  return /* @__PURE__ */ g(
    "button",
    {
      onClick: e,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
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
        n && /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ r("span", { style: { position: "relative", zIndex: 1 }, children: t })
      ]
    }
  );
}
function Ur({ title: e, subtitle: t }) {
  const [n, o] = w(!1);
  return /* @__PURE__ */ g(
    "button",
    {
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
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
        n && /* @__PURE__ */ r("div", { style: {
          position: "absolute",
          top: 8,
          bottom: 8,
          left: 0,
          right: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ r("div", { style: {
          position: "relative",
          zIndex: 1,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px"
        }, children: e }),
        /* @__PURE__ */ r("div", { style: {
          position: "relative",
          zIndex: 1,
          fontSize: 12,
          fontWeight: 400,
          color: "var(--rosetta-fg-muted)",
          lineHeight: "16px"
        }, children: t })
      ]
    }
  );
}
function Wr({
  open: e,
  anchorRef: t,
  apiKey: n,
  onSave: o,
  onClose: a
}) {
  const [i, c] = w(n ?? ""), [s, l] = w(null), d = F(null), u = F(null);
  if ($(() => {
    e && c(n ?? "");
  }, [e, n]), $(() => {
    if (!e || !t.current) {
      l(null);
      return;
    }
    const f = t.current.getBoundingClientRect();
    l({ top: f.bottom + 6, right: window.innerWidth - f.right });
    const p = setTimeout(() => {
      var h;
      return (h = u.current) == null ? void 0 : h.focus();
    }, 60);
    return () => clearTimeout(p);
  }, [e, t]), $(() => {
    if (!e) return;
    function f(h) {
      d.current && !d.current.contains(h.target) && t.current && !t.current.contains(h.target) && a();
    }
    function p(h) {
      h.key === "Escape" && a();
    }
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", p), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", p);
    };
  }, [e, a, t]), !e || !s) return null;
  const m = n ? n.slice(0, 7) + "..." + n.slice(-4) : "", b = i.trim().startsWith("sk-");
  return Ke(
    /* @__PURE__ */ g(
      "div",
      {
        ref: d,
        style: {
          position: "fixed",
          top: s.top,
          right: s.right,
          width: 280,
          background: "var(--rosetta-bg-base, #fff)",
          border: "1px solid var(--rosetta-border-default, rgba(0,0,0,0.08))",
          borderRadius: 8,
          boxShadow: "0px 16px 64px rgba(0,0,0,0.12), 0px 0px 1px rgba(0,0,0,0.08)",
          zIndex: 1e4,
          fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
          animation: "siteToolbarDropdownIn 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards"
        },
        children: [
          /* @__PURE__ */ r("style", { children: `
        @keyframes siteToolbarDropdownIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      ` }),
          /* @__PURE__ */ g("div", { style: { padding: "14px 14px 0" }, children: [
            /* @__PURE__ */ r("div", { style: { fontSize: 12, fontWeight: 600, letterSpacing: 0.4, textTransform: "uppercase", color: "var(--rosetta-fg-muted, #666)", marginBottom: 10 }, children: "Anthropic API Key" }),
            n && /* @__PURE__ */ g("div", { style: {
              fontSize: 12,
              color: "#22c55e",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 5
            }, children: [
              /* @__PURE__ */ r("div", { style: { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 } }),
              "Connected · ",
              m
            ] }),
            /* @__PURE__ */ r(
              "input",
              {
                ref: u,
                type: "password",
                value: i,
                onChange: (f) => c(f.target.value),
                onKeyDown: (f) => {
                  f.key === "Enter" && b && o(i.trim());
                },
                placeholder: "sk-ant-...",
                style: {
                  width: "100%",
                  height: 36,
                  border: "1px solid var(--rosetta-border-default, rgba(0,0,0,0.12))",
                  borderRadius: 4,
                  background: "var(--rosetta-bg-default, #f5f5f5)",
                  padding: "0 10px",
                  fontSize: 13,
                  fontFamily: "inherit",
                  color: "var(--rosetta-fg-default, #0e0e0e)",
                  outline: "none",
                  boxSizing: "border-box"
                }
              }
            )
          ] }),
          /* @__PURE__ */ r("div", { style: { padding: "12px 14px 14px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r(
            "button",
            {
              onClick: () => b && o(i.trim()),
              disabled: !b,
              style: {
                height: 32,
                padding: "0 14px",
                background: b ? "#0E0E0E" : "rgba(14,14,14,0.08)",
                color: b ? "#fff" : "rgba(14,14,14,0.32)",
                border: "none",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                cursor: b ? "pointer" : "default",
                fontFamily: "inherit"
              },
              children: n ? "Update" : "Save"
            }
          ) })
        ]
      }
    ),
    document.body
  );
}
function nd({ cssString: e, children: t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      style: {
        width: "100%",
        height: "100%"
      },
      ref: (n) => {
        n && e.split(";").forEach((o) => {
          const [a, i] = o.split(":").map((c) => c.trim());
          a && i && a.startsWith("--") && n.style.setProperty(a, i);
        });
      },
      children: t
    }
  );
}
function Vr({
  initialLeft: e,
  initialTop: t,
  width: n,
  height: o,
  containerWidth: a,
  sectionHeight: i,
  enabled: c = !0,
  onDrop: s
}) {
  const [l, d] = w(!1), [u, m] = w(!1), [b, f] = w({ x: 0, y: 0 }), [p, h] = w({ left: e, top: t }), k = F({ x: 0, y: 0 }), C = F({ left: e, top: t }), x = F({ x: 0, y: 0 }), y = F({ left: e, top: t });
  $(() => {
    !l && !u && h({ left: e, top: t });
  }, [e, t, l, u]);
  const E = S((M) => {
    if (!c || M.button !== 0) return;
    M.preventDefault(), k.current = { x: M.clientX, y: M.clientY }, C.current = { left: e, top: t }, x.current = { x: 0, y: 0 }, y.current = { left: e, top: t };
    let R = !1;
    const T = 4, D = (B) => {
      const A = B.clientX - k.current.x, z = B.clientY - k.current.y;
      if (!R) {
        if (Math.abs(A) < T && Math.abs(z) < T) return;
        R = !0, d(!0), m(!1), f({ x: 0, y: 0 }), h({ left: e, top: t });
      }
      let V = z;
      if (i != null && a > 0) {
        const he = mt(a), H = 0, ee = i - he, K = C.current.top + z;
        K < H && (V = H - C.current.top), K > ee && (V = ee - C.current.top);
      }
      x.current = { x: A, y: V }, f({ x: A, y: V });
      const W = C.current.left + A, Y = C.current.top + V, X = Dr(W, a), q = Or(Y, a);
      y.current = { left: X, top: q }, h({ left: X, top: q });
    }, P = () => {
      if (document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", P), !R) return;
      const B = y.current;
      s == null || s(B.left, B.top), d(!1), m(!0), f({ x: 0, y: 0 }), setTimeout(() => {
        m(!1);
      }, 300);
    };
    document.addEventListener("mousemove", D), document.addEventListener("mouseup", P);
  }, [c, e, t, n, o, a, i, s]);
  return {
    isDragging: l,
    naturalOffset: b,
    snappedPosition: p,
    isSettling: u,
    dragHandleProps: { onMouseDown: E }
  };
}
function rd({
  label: e,
  disabled: t = !1,
  children: n,
  style: o,
  canvasWidth: a,
  sectionHeight: i,
  blockId: c,
  draggedPosition: s,
  onBlockDrop: l,
  onDragStateChange: d
}) {
  const [u, m] = w(!1), b = F(null), f = F(!1), [p, h] = w(null);
  $(() => {
    const W = b.current;
    if (!W || !W.offsetParent) return;
    const Y = () => {
      W.offsetParent && h({
        left: W.offsetLeft,
        top: W.offsetTop,
        width: W.offsetWidth,
        height: W.offsetHeight
      });
    };
    Y();
    const X = new ResizeObserver(Y);
    return X.observe(W), () => X.disconnect();
  }, [o, a, s]);
  const k = a ?? 0, C = !t && k > 0 && p !== null, x = S((W, Y) => {
    c && l && l(c, W, Y);
  }, [c, l]), {
    isDragging: y,
    naturalOffset: E,
    snappedPosition: M,
    isSettling: R,
    dragHandleProps: T
  } = Vr({
    initialLeft: (p == null ? void 0 : p.left) ?? 0,
    initialTop: (p == null ? void 0 : p.top) ?? 0,
    width: (p == null ? void 0 : p.width) ?? 0,
    height: (p == null ? void 0 : p.height) ?? 0,
    containerWidth: k,
    sectionHeight: i,
    enabled: C,
    onDrop: x
  });
  $(() => {
    y !== f.current && (f.current = y, d == null || d(y));
  }, [y, d]);
  const D = (u || y) && !t, P = D && !y, B = s ? { ...o, left: s.left, top: s.top } : { ...o }, A = y ? {
    ...B,
    position: "absolute",
    left: M.left,
    top: M.top,
    width: p == null ? void 0 : p.width,
    height: (o == null ? void 0 : o.height) ?? (p == null ? void 0 : p.height),
    zIndex: 1e3,
    cursor: "grabbing",
    right: void 0,
    bottom: void 0
  } : { position: "relative", cursor: C ? "grab" : "default", zIndex: 2, ...B }, z = y ? `translate(${E.x - (M.left - ((p == null ? void 0 : p.left) ?? 0))}px, ${E.y - (M.top - ((p == null ? void 0 : p.top) ?? 0))}px)` : void 0;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: b,
      onMouseEnter: () => {
        t || m(!0);
      },
      onMouseLeave: () => {
        y || m(!1);
      },
      ...C ? T : {},
      style: A,
      children: [
        /* @__PURE__ */ r("div", { style: {
          transform: z,
          transition: R ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" : y ? "none" : void 0,
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          overflow: o == null ? void 0 : o.overflow,
          display: o == null ? void 0 : o.display,
          flexDirection: o == null ? void 0 : o.flexDirection,
          alignItems: o == null ? void 0 : o.alignItems,
          justifyContent: o == null ? void 0 : o.justifyContent
        }, children: n }),
        D && /* @__PURE__ */ g(re, { children: [
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            inset: 0,
            border: "2px solid #0072f0",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            inset: -1,
            border: "1px solid #6ca4f4",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          P && /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            left: 0,
            top: -22,
            zIndex: 100,
            pointerEvents: "none"
          }, children: /* @__PURE__ */ g("div", { style: {
            background: "#0072f0",
            borderRadius: 9999,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 3,
            height: 16,
            padding: "0.25px 6px 0.75px"
          }, children: [
            e !== "Text" && /* @__PURE__ */ r(_r, { style: { width: 10, height: 10 } }),
            /* @__PURE__ */ r("span", { style: {
              fontSize: 9.75,
              fontWeight: 500,
              fontFamily: "Clarkson, Helvetica, sans-serif",
              textTransform: "uppercase",
              letterSpacing: 0.75,
              lineHeight: "16px",
              color: "#fff",
              whiteSpace: "nowrap"
            }, children: e })
          ] }) })
        ] })
      ]
    }
  );
}
function od({
  blockRef: e,
  children: t
}) {
  const [n, o] = w(null);
  return $(() => {
    const a = e.current;
    if (!a) return;
    const i = () => {
      const c = a.getBoundingClientRect();
      o({ top: c.top - 12, left: c.left });
    };
    return i(), window.addEventListener("scroll", i, !0), window.addEventListener("resize", i), () => {
      window.removeEventListener("scroll", i, !0), window.removeEventListener("resize", i);
    };
  }, [e]), n ? Ke(
    /* @__PURE__ */ r("div", { style: {
      position: "fixed",
      top: n.top,
      left: n.left,
      transform: "translateY(-100%)",
      zIndex: 1e4,
      pointerEvents: "auto"
    }, children: t }),
    document.body
  ) : null;
}
function qr(e) {
  return /* @__PURE__ */ r(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 10 12.634",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...e,
      children: /* @__PURE__ */ r(
        "path",
        {
          d: "M5.75 2.86303L10 7.09719V4.97982L5.00155 0L0 4.98063V7.09752L4.25 2.8653L4.25 12.6339H5.75L5.75 2.86303Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Pt(e) {
  return /* @__PURE__ */ g(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 49.2049 49.2049",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      style: { display: "block" },
      ...e,
      children: [
        /* @__PURE__ */ g("g", { children: [
          /* @__PURE__ */ r("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "#081939" }),
          /* @__PURE__ */ r("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-0)", fillOpacity: "0.9" }),
          /* @__PURE__ */ r("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-1)", fillOpacity: "0.85" }),
          /* @__PURE__ */ r("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-2)", fillOpacity: "0.8" }),
          /* @__PURE__ */ r("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-3)", fillOpacity: "0.88" })
        ] }),
        /* @__PURE__ */ g("defs", { children: [
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-0", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(16.5958 8.07961) rotate(63.1327) scale(18.5222 21.9723)", children: [
            /* @__PURE__ */ r("stop", { stopColor: "#7D7194" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#7D7194", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-1", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(47.8949 16.6687) rotate(161.19) scale(24.6066)", children: [
            /* @__PURE__ */ r("stop", { stopColor: "#4A8F9F" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#4A8F9F", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-2", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32.7549 47.895) rotate(-108.939) scale(15.6987)", children: [
            /* @__PURE__ */ r("stop", { stopColor: "#5C4763" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#5C4763", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-3", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-2.18364 33.4828) rotate(-18.3418) scale(28.2198 39.2263)", children: [
            /* @__PURE__ */ r("stop", { stopColor: "#3D3041" }),
            /* @__PURE__ */ r("stop", { offset: "1", stopColor: "#3D3041", stopOpacity: "0" })
          ] })
        ] })
      ]
    }
  );
}
function Zr(e, t, n, o) {
  return function(a) {
    let i = a;
    for (let c = 0; c < 8; c++) {
      const s = 3 * e * (1 - i) * (1 - i) * i + 3 * n * (1 - i) * i * i + i * i * i - a, l = 3 * e * (1 - 2 * i + i * i) + 6 * (n - e) * i * (1 - i) + 3 * (1 - n) * i * i;
      if (Math.abs(l) < 1e-6) break;
      i -= s / (l || 1e-6);
    }
    return i = Math.max(0, Math.min(1, i)), 3 * t * (1 - i) * (1 - i) * i + 3 * o * (1 - i) * i * i + i * i * i;
  };
}
const Gr = Zr(0.25, 0.1, 0.25, 1), zt = "0px 0px 1px 0px rgba(0,0,0,0.08), 0px 4px 16px 0px rgba(0,0,0,0.12)";
function id({ onClick: e, onPromptSubmit: t, aiStatesPath: n = "/assets/ai-states", expandEffect: o, keepExpandedAfterSubmit: a, generationContent: i, generationHeight: c }) {
  const [s, l] = w(!1), [d, u] = w(!1), [m, b] = w(!1), [f, p] = w(!1), [h, k] = w(!1), C = F(null), [x, y] = w(!1), [E, M] = w(!1), [R, T] = w(!1), [D, P] = w(""), [B, A] = w(54), [z, V] = w(!1), W = F(null), Y = F(null), X = F(null), q = h || x;
  $(() => {
    if (x) {
      const I = setTimeout(() => {
        var U;
        return (U = W.current) == null ? void 0 : U.focus();
      }, 80);
      return () => clearTimeout(I);
    }
  }, [x]);
  const he = F(0);
  $(() => {
    if (!X.current) return;
    let U = X.current.parentElement;
    for (; U; ) {
      const { overflow: xe, overflowY: _e } = getComputedStyle(U);
      if (xe === "auto" || xe === "scroll" || _e === "auto" || _e === "scroll") break;
      U = U.parentElement;
    }
    if (!U) return;
    const oe = (x ? z && c ? c : B + 184 : 0) / 2, le = oe - he.current;
    he.current = oe;
    const ce = 400, ye = U.scrollTop, fe = performance.now();
    function Me(xe) {
      const _e = Math.min((xe - fe) / ce, 1);
      U.scrollTop = ye + le * Gr(_e), _e < 1 && requestAnimationFrame(Me);
    }
    requestAnimationFrame(Me);
  }, [x, B, z, c]);
  const H = S(() => {
    z || (M(!0), setTimeout(() => {
      M(!1), T(!0), y(!1), k(!1), P(""), A(54), requestAnimationFrame(() => T(!1));
    }, 200));
  }, [z]), ee = S((I) => {
    I.stopPropagation(), M(!1), y(!0);
  }, []);
  $(() => {
    if (!x) return;
    function I(J) {
      Y.current && !Y.current.contains(J.target) && H();
    }
    function U(J) {
      J.key === "Escape" && H();
    }
    return document.addEventListener("mousedown", I), document.addEventListener("keydown", U), () => {
      document.removeEventListener("mousedown", I), document.removeEventListener("keydown", U);
    };
  }, [x, H]), $(() => {
    !i && z && (V(!1), y(!1));
  }, [i, z]), $(() => {
    if (!q) {
      const U = Y.current;
      U && (U.style.transform = "");
      return;
    }
    const I = (U) => {
      const J = Y.current;
      if (!J) return;
      const oe = (U.clientX / window.innerWidth - 0.5) * 2;
      J.style.transform = `translateX(${oe * (t ? 6 : 3)}px)`;
    };
    return document.addEventListener("mousemove", I), () => document.removeEventListener("mousemove", I);
  }, [q]);
  const K = S((I) => {
    I.stopPropagation(), t ? t(D) : e == null || e(I), a ? V(!0) : y(!1), P(""), A(54);
  }, [e, t, D, a]), te = S((I) => {
    I.key === "Enter" && !I.shiftKey && D.trim() && (I.preventDefault(), t && t(D), a ? V(!0) : y(!1), P(""), A(54));
  }, [t, D, a]);
  return /* @__PURE__ */ g(re, { children: [
    /* @__PURE__ */ g("div", { style: {
      position: "relative",
      height: 0,
      zIndex: 9,
      overflow: "visible",
      pointerEvents: "none"
    }, children: [
      /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        top: -1,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(to right, #0072f0 0%, #0072f0 40%, #182224 50%, #0072f0 60%, #0072f0 100%)",
        opacity: q && !x ? 1 : 0,
        transition: "opacity 0.15s ease"
      } }),
      /* @__PURE__ */ r("div", { style: {
        position: "absolute",
        top: -1,
        left: 0,
        right: 0,
        height: 1,
        background: "rgba(255,255,255,0.18)",
        opacity: x ? 1 : 0,
        transition: "opacity 0.4s ease"
      } })
    ] }),
    /* @__PURE__ */ g(
      "div",
      {
        onMouseEnter: () => k(!0),
        onMouseLeave: () => {
          k(!1);
        },
        ref: X,
        style: {
          position: "relative",
          height: x ? z && c ? c : B + 184 : 0,
          zIndex: 10,
          background: x ? "#E7E7E7" : "transparent",
          transition: "height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s ease"
        },
        children: [
          x && o && /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0
          }, children: o }),
          z && i && /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            inset: 0,
            zIndex: 2
          }, children: i }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(255,255,255,0.11)",
            pointerEvents: "none",
            opacity: x ? 1 : 0,
            transition: "opacity 0.4s ease"
          } }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.06) 30%, transparent 100%)",
            pointerEvents: "none",
            opacity: x ? 1 : 0,
            transition: "opacity 0.4s ease"
          } }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to top, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 30%, transparent 100%)",
            pointerEvents: "none",
            opacity: x ? 1 : 0,
            transition: "opacity 0.4s ease"
          } }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            left: 0,
            right: 0,
            top: -24,
            bottom: -24
          } }),
          /* @__PURE__ */ r("div", { style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, calc(-50% - 5px))"
          }, children: /* @__PURE__ */ g(
            "div",
            {
              ref: Y,
              style: {
                opacity: q && !R ? 1 : 0,
                pointerEvents: q && !R ? "auto" : "none",
                transition: R ? "none" : "opacity 0.15s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
              },
              children: [
                !x && /* @__PURE__ */ g(re, { children: [
                  /* @__PURE__ */ r("style", { children: `
              @keyframes aiIconEntrance {
                from { transform: scale(0.92); opacity: 0; }
                to   { transform: scale(1); opacity: 1; }
              }
            ` }),
                  /* @__PURE__ */ g(
                    "div",
                    {
                      ref: C,
                      className: q ? "section-divider-enter" : void 0,
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                      },
                      children: [
                        /* @__PURE__ */ g(
                          "button",
                          {
                            onClick: (I) => {
                              I.stopPropagation(), e == null || e(I);
                            },
                            onMouseEnter: () => u(!0),
                            onMouseLeave: () => u(!1),
                            style: {
                              position: "relative",
                              height: 40,
                              borderRadius: 11,
                              background: "#FAFAFA",
                              border: "1px solid #E7E7E7",
                              boxShadow: zt,
                              cursor: "pointer",
                              padding: "0 20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden"
                            },
                            children: [
                              /* @__PURE__ */ r("div", { style: {
                                position: "absolute",
                                inset: 3,
                                borderRadius: 8,
                                background: "rgba(0,0,0,0.05)",
                                opacity: d ? 1 : 0,
                                transition: "opacity 0.15s ease",
                                pointerEvents: "none"
                              } }),
                              /* @__PURE__ */ r("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ r(Rt, {}) }),
                              /* @__PURE__ */ r("span", { style: {
                                position: "relative",
                                fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontWeight: 600,
                                fontSize: 12,
                                lineHeight: "22px",
                                letterSpacing: 0.5,
                                textTransform: "uppercase",
                                color: "#0E0E0E",
                                whiteSpace: "nowrap"
                              }, children: "Add Section" })
                            ]
                          }
                        ),
                        t && /* @__PURE__ */ r("div", { style: {
                          flexShrink: 0,
                          transform: q ? "scale(1) rotate(0deg)" : "scale(0.92) rotate(-45deg)",
                          opacity: q ? 1 : 0,
                          transition: q ? "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s" : "transform 0.15s ease, opacity 0.15s ease"
                        }, children: /* @__PURE__ */ g(
                          "div",
                          {
                            onClick: ee,
                            onMouseEnter: () => l(!0),
                            onMouseLeave: () => l(!1),
                            style: {
                              width: 42,
                              height: 42,
                              borderRadius: 30,
                              background: "#0E0E0E",
                              border: "1px solid #000",
                              boxShadow: zt,
                              position: "relative",
                              cursor: "pointer",
                              overflow: "hidden",
                              transform: s ? "scale(1.048)" : "scale(1)",
                              transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
                            },
                            children: [
                              /* @__PURE__ */ r("div", { style: {
                                position: "absolute",
                                width: 49,
                                height: 49,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                pointerEvents: "none"
                              }, children: /* @__PURE__ */ r(Pt, {}) }),
                              /* @__PURE__ */ r("div", { style: {
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mixBlendMode: "difference"
                              }, children: /* @__PURE__ */ g("div", { style: {
                                width: 27,
                                height: 27,
                                borderRadius: 34,
                                overflow: "hidden",
                                transform: "rotate(45deg)",
                                position: "relative"
                              }, children: [
                                /* @__PURE__ */ r(
                                  "video",
                                  {
                                    autoPlay: !0,
                                    loop: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    src: `${n}/${s ? "big_error" : "big_awake"}.mp4`,
                                    style: {
                                      position: "absolute",
                                      inset: 0,
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover"
                                    }
                                  },
                                  s ? "error" : "awake"
                                ),
                                /* @__PURE__ */ r("div", { style: {
                                  position: "absolute",
                                  inset: 0,
                                  background: "#fff",
                                  mixBlendMode: "difference",
                                  pointerEvents: "none"
                                } })
                              ] }) })
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                ] }),
                x && /* @__PURE__ */ g("div", { className: "chat-glow-wrap", style: {
                  position: "relative",
                  width: 560,
                  minHeight: 54,
                  animation: E ? "promptCollapse 200ms cubic-bezier(0.55, 0, 1, 0.45) forwards" : "promptUnfurl 500ms cubic-bezier(0.22, 1.15, 0.36, 1) forwards",
                  opacity: z ? 0 : 1,
                  transform: z ? "scale(1.05)" : "scale(1)",
                  transition: "opacity 250ms ease-out, transform 250ms ease-out",
                  pointerEvents: z ? "none" : "auto"
                }, children: [
                  /* @__PURE__ */ r("style", { children: `
                @property --glow-hue {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-rotate {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-bg-x {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }
                @property --glow-bg-y {
                  syntax: "<number>";
                  inherits: true;
                  initial-value: 0;
                }

                @keyframes chat-hue { 0% { --glow-hue: 0; } 100% { --glow-hue: 360; } }
                @keyframes chat-rotate-bg {
                  0%   { --glow-bg-x: 0;   --glow-bg-y: 0; }
                  25%  { --glow-bg-x: 100; --glow-bg-y: 0; }
                  50%  { --glow-bg-x: 100; --glow-bg-y: 100; }
                  75%  { --glow-bg-x: 0;   --glow-bg-y: 100; }
                  100% { --glow-bg-x: 0;   --glow-bg-y: 0; }
                }
                @keyframes chat-glow-orbit {
                  from { --glow-rotate: -70; }
                  to   { --glow-rotate: 290; }
                }

                .chat-glow-border {
                  animation: chat-rotate-bg 4s linear infinite;
                  background: conic-gradient(
                    from 0deg,
                    hsl(0deg 0% 92%) 0deg,
                    hsl(0deg 0% 100%) 30deg,
                    hsl(0deg 0% 92%) 60deg,
                    hsl(0deg 0% 72%) 120deg,
                    hsl(0deg 0% 92%) 150deg,
                    hsl(0deg 0% 100%) 210deg,
                    hsl(0deg 0% 92%) 240deg,
                    hsl(0deg 0% 72%) 300deg,
                    hsl(0deg 0% 92%) 360deg
                  );
                }
                .chat-glow-border::before {
                  content: '';
                  display: block;
                  position: absolute;
                  inset: 0;
                  border-radius: inherit;
                  background: inherit;
                  filter: blur(6px);
                  opacity: 0.5;
                }

                .chat-glow-orb, .chat-glow-orb-2 {
                  position: absolute;
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  transform-origin: center;
                }
                .chat-glow-orb {
                  left: calc(50% - 50px);
                  top: calc(50% - 50px);
                  animation: chat-glow-orbit 4s linear infinite;
                  transform: rotateZ(calc(var(--glow-rotate) * 1deg));
                }
                .chat-glow-orb::after {
                  content: '';
                  display: block;
                  position: relative;
                  width: 180%;
                  height: 180%;
                  left: -40%;
                  top: -40%;
                  filter: blur(20px);
                  border-radius: 50%;
                  background: white;
                  transform: scaleX(1.6) scaleY(1) translateY(-55%);
                  opacity: 0.8;
                }
                .chat-glow-orb-2 {
                  left: calc(50% - 50px);
                  top: calc(50% - 50px);
                  animation: chat-glow-orbit 4s linear infinite;
                  transform: rotateZ(calc(calc(var(--glow-rotate) + 180) * 1deg));
                }
                .chat-glow-orb-2::after {
                  content: '';
                  display: block;
                  position: relative;
                  width: 180%;
                  height: 180%;
                  left: -40%;
                  top: -40%;
                  filter: blur(20px);
                  border-radius: 50%;
                  background: white;
                  transform: scaleX(1.6) scaleY(1) translateY(-55%);
                  opacity: 0.8;
                }
              ` }),
                  /* @__PURE__ */ g("div", { className: "chat-glow-border", style: {
                    position: "absolute",
                    inset: -1,
                    borderRadius: B > 54 ? 25 : 34,
                    zIndex: 0,
                    overflow: "hidden"
                  }, children: [
                    /* @__PURE__ */ r("span", { className: "chat-glow-orb" }),
                    /* @__PURE__ */ r("span", { className: "chat-glow-orb-2" })
                  ] }),
                  /* @__PURE__ */ g("div", { style: {
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    minHeight: 54,
                    height: B,
                    borderRadius: B > 54 ? 24 : 33,
                    background: "#FAFAFA",
                    border: "none",
                    boxShadow: "0px 227px 64px 0px rgba(0,0,0,0), 0px 145px 58px 0px rgba(0,0,0,0.01), 0px 82px 49px 0px rgba(0,0,0,0.02), 0px 36px 36px 0px rgba(0,0,0,0.04), 0px 9px 20px 0px rgba(0,0,0,0.05)",
                    transition: "border-radius 0.25s ease, height 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
                    overflow: "hidden"
                  }, children: [
                    /* @__PURE__ */ r("style", { children: `
                @keyframes promptUnfurl {
                  from { width: 54px; opacity: 0; }
                  15%  { opacity: 1; }
                  to   { width: 560px; opacity: 1; }
                }
                @keyframes promptCollapse {
                  from { width: 560px; opacity: 1; }
                  85%  { opacity: 0; }
                  to   { width: 54px; opacity: 0; }
                }
              ` }),
                    /* @__PURE__ */ r(
                      "textarea",
                      {
                        ref: W,
                        value: D,
                        onChange: (I) => {
                          P(I.target.value);
                          const U = I.target;
                          U.style.height = "auto";
                          const J = U.scrollHeight, oe = getComputedStyle(U), le = parseFloat(oe.paddingTop) + parseFloat(oe.paddingBottom), ce = J - le;
                          U.style.height = "";
                          const ye = ce > 22;
                          A(ye ? ce + 17 + 54 : 54);
                        },
                        onKeyDown: te,
                        placeholder: "Make it real",
                        rows: 1,
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                          background: "transparent",
                          outline: "none",
                          resize: "none",
                          fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: "20px",
                          color: "#0E0E0E",
                          overflow: "hidden",
                          // left/right 54 always keeps text clear of the 42px buttons (42+6+6)
                          // top 17 gives breathing room; bottom 54 reserves button row when multi-line
                          padding: B > 54 ? "17px 54px 54px 54px" : "17px 54px",
                          margin: 0,
                          boxSizing: "border-box"
                        }
                      }
                    ),
                    /* @__PURE__ */ r(
                      "button",
                      {
                        onClick: (I) => {
                          I.stopPropagation(), e == null || e(I);
                        },
                        onMouseEnter: () => p(!0),
                        onMouseLeave: () => p(!1),
                        style: {
                          position: "absolute",
                          left: 6,
                          bottom: 6,
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          border: "none",
                          background: f ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          padding: 0,
                          color: "#666",
                          transform: f ? "scale(1.048)" : "scale(0.9)",
                          transition: "background 0.25s cubic-bezier(0.22, 1, 0.36, 1), transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                          zIndex: 2
                        },
                        children: /* @__PURE__ */ r("div", { style: { width: 12, height: 12 }, children: /* @__PURE__ */ r(Rt, {}) })
                      }
                    ),
                    /* @__PURE__ */ g(
                      "button",
                      {
                        onClick: K,
                        onMouseEnter: () => b(!0),
                        onMouseLeave: () => b(!1),
                        style: {
                          position: "absolute",
                          right: 6,
                          bottom: 6,
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          border: "none",
                          background: "transparent",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          overflow: "hidden",
                          transform: m ? "scale(1.048)" : "scale(1)",
                          transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
                          zIndex: 2
                        },
                        children: [
                          /* @__PURE__ */ r("div", { style: {
                            position: "absolute",
                            width: 48,
                            height: 48,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none"
                          }, children: /* @__PURE__ */ r(Pt, {}) }),
                          /* @__PURE__ */ r("div", { style: { position: "relative", zIndex: 1, color: "var(--rosetta-fg-onStrong, #fff)", width: 10, height: 13 }, children: /* @__PURE__ */ r(qr, {}) })
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function ad() {
  return /* @__PURE__ */ r("div", { style: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 9999,
    padding: "0 33px",
    display: "flex",
    gap: 33
  }, children: Array.from({ length: 12 }).map((e, t) => /* @__PURE__ */ r("div", { style: {
    flex: 1,
    background: "rgba(255, 0, 0, 0.05)",
    borderLeft: "1px solid rgba(255, 0, 0, 0.15)",
    borderRight: "1px solid rgba(255, 0, 0, 0.15)"
  } }, t)) });
}
const jt = 2, yt = 0.15, it = 11, Yr = 0.12;
function sd({
  panelRef: e,
  containerSize: t,
  panelState: n,
  basePosition: o,
  onSnap: a,
  onUnsnap: i,
  enabled: c = !0,
  panelWidth: s = 575
}) {
  const [l, d] = w(!1), [u, m] = w(!1), [b, f] = w({ x: 0, y: 0 }), [p, h] = w(null), [k, C] = w(!1), [x, y] = w(0), E = F(null), M = F({ x: 0, y: 0 }), R = F(!1), T = F(!1), D = F(!1), P = F(a);
  P.current = a;
  const B = F(i);
  B.current = i;
  const A = F(n);
  A.current = n;
  const z = F(t);
  z.current = t;
  const V = F(o);
  V.current = o;
  const W = F(() => {
  }), Y = F(() => {
  });
  W.current = (I) => {
    var At;
    if (!E.current) return;
    const U = I.clientX - E.current.x, J = I.clientY - E.current.y;
    if (!R.current) {
      if (Math.abs(U) < jt && Math.abs(J) < jt) return;
      if (R.current = !0, d(!0), h(null), D.current) {
        const cr = A.current, dr = z.current.w;
        let nt, rt;
        cr === "snapped-left" ? (nt = it, rt = it) : (nt = dr - s - it, rt = it), M.current = { x: nt, y: rt }, V.current.current = { x: nt, y: rt }, m(!0), B.current(), setTimeout(() => m(!1), 450);
      }
    }
    const oe = M.current.x + U, le = M.current.y + J, ce = z.current.w, ye = z.current.h, fe = Math.max(0, Math.min(ce - s, oe)), Me = Math.max(0, Math.min(ye - 100, le));
    f({ x: fe, y: Me });
    const xe = (At = e.current) == null ? void 0 : At.parentElement, _e = (xe == null ? void 0 : xe.getBoundingClientRect().left) ?? 0, je = I.clientX - _e;
    je < ce * yt ? h("left") : je > ce * (1 - yt) ? h("right") : h(null);
    const bt = fe + s / 2, tt = Math.max(-1, Math.min(1, (je - bt) / (s / 2)));
    y(tt);
  }, Y.current = (I) => {
    var U, J, oe;
    if (T.current = !1, document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", q), R.current) {
      const le = (U = e.current) == null ? void 0 : U.parentElement, ce = (le == null ? void 0 : le.getBoundingClientRect().left) ?? 0, ye = I.clientX - ce, fe = z.current.w, Me = fe * yt;
      if (ye < Me)
        P.current("left");
      else if (ye > fe - Me)
        P.current("right");
      else {
        const xe = I.clientX - (((J = E.current) == null ? void 0 : J.x) ?? I.clientX), _e = I.clientY - (((oe = E.current) == null ? void 0 : oe.y) ?? I.clientY), je = M.current.x + xe, bt = M.current.y + _e, tt = {
          x: Math.max(0, Math.min(fe - s, je)),
          y: Math.max(0, Math.min(z.current.h - 100, bt))
        };
        V.current.current = tt, f(tt);
      }
    }
    d(!1), h(null), E.current = null, R.current = !1, D.current = !1;
  };
  const X = F((I) => W.current(I)).current, q = F((I) => Y.current(I)).current, he = S((I) => {
    !c || !e.current || (I.preventDefault(), I.stopPropagation(), T.current = !0, E.current = { x: I.clientX, y: I.clientY }, M.current = { ...V.current.current }, R.current = !1, D.current = A.current !== "floating", document.addEventListener("mousemove", X), document.addEventListener("mouseup", q));
  }, [c, e, X, q]), H = F(null), ee = S(() => {
    H.current && (clearTimeout(H.current), H.current = null), c && C(!0);
  }, [c]), K = S(() => {
    T.current || (H.current = setTimeout(() => {
      C(!1), h(null), y(0), H.current = null;
    }, 50));
  }, []), te = S((I) => {
    if (!c || l) return;
    const U = e.current;
    if (!U) return;
    const J = I.currentTarget.getBoundingClientRect();
    if (I.clientY > J.bottom) return;
    const oe = U.getBoundingClientRect(), le = I.clientX - oe.left, ce = s * Yr, ye = Math.max(-1, Math.min(1, (le - s / 2) / (s / 2)));
    y(ye);
    const fe = A.current;
    le < ce && fe !== "snapped-left" ? h("left") : le > s - ce && fe !== "snapped-right" ? h("right") : h(null);
  }, [c, l, e, s]);
  return $(() => {
    l || f(o.current);
  }, [o.current.x, o.current.y, l]), $(() => () => {
    document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", q);
  }, [X, q]), $(() => {
    c || (d(!1), h(null), C(!1), y(0));
  }, [c]), {
    position: b,
    isDragging: l,
    isUnsnapping: u,
    snapHint: p,
    isExpanded: k,
    snapBarPosition: x,
    dragRegionProps: { onMouseDown: he },
    hoverZoneProps: {
      onMouseEnter: ee,
      onMouseLeave: K,
      onMouseMove: te
    }
  };
}
const Cn = {
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
}, Xr = {
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
function ld() {
  return typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? Xr : Cn;
}
const cd = Cn;
function dd(e) {
  return e.replace("#", "");
}
const ud = [
  { key: "tl", style: { top: -4, left: -4 } },
  { key: "tc", style: { top: -5, left: "calc(50% - 5px)" } },
  { key: "tr", style: { top: -4, right: -4 } },
  { key: "ml", style: { top: "calc(50% - 5px)", left: -5 } },
  { key: "mr", style: { top: "calc(50% - 5px)", right: -5 } },
  { key: "bl", style: { bottom: -4, left: -4 } },
  { key: "bc", style: { bottom: -5, left: "calc(50% - 5px)" } },
  { key: "br", style: { bottom: -4, right: -4 } }
], Kr = "_field_2uzym_34", Jr = "_padding_2uzym_45", Qr = "_stack_2uzym_49", eo = "_label_2uzym_53", to = "_options_2uzym_17", no = "_labelPrimary_2uzym_78", ro = "_indent_2uzym_82", oo = "_mini_2uzym_87", io = "_object_2uzym_117", ao = "_objectFlex_2uzym_129", so = "_collapsibleWrapper_2uzym_136", lo = "_open_2uzym_147", co = "_collapsible_2uzym_136", me = {
  field: Kr,
  padding: Jr,
  stack: Qr,
  label: eo,
  options: to,
  labelPrimary: no,
  indent: ro,
  mini: oo,
  object: io,
  objectFlex: ao,
  collapsibleWrapper: so,
  open: lo,
  collapsible: co
};
function ht(...e) {
  return e.filter(Boolean).join(" ");
}
function uo({
  children: e,
  className: t,
  padding: n = !0,
  stack: o = !1
}) {
  const a = _(
    () => ht(me.field, t, n && me.padding, o && me.stack),
    [t, n, o]
  );
  return /* @__PURE__ */ r("div", { className: a, children: e });
}
function po({
  children: e,
  primary: t = !1,
  indent: n = !1,
  mini: o = !1,
  options: a = null,
  ...i
}) {
  const c = _(
    () => ht(
      me.label,
      t && me.labelPrimary,
      n && me.indent,
      o && me.mini
    ),
    [t, n, o]
  );
  return /* @__PURE__ */ g("div", { className: c, children: [
    /* @__PURE__ */ r("label", { ...i, onClick: (s) => s.stopPropagation(), children: e }),
    /* @__PURE__ */ r("div", { className: me.options, children: a })
  ] });
}
function mo({
  children: e,
  flexColumn: t = !1,
  column: n = "auto / span 2"
}) {
  const o = _(
    () => ht(me.object, t && me.objectFlex),
    [t]
  ), a = _(
    () => ({ gridColumn: n }),
    [n]
  );
  return /* @__PURE__ */ r("div", { className: o, style: a, children: e });
}
const Ut = 350;
function ho({ children: e, collapsed: t = !1 }) {
  const n = !t, o = F(null), a = F(null), i = F(n ? "auto" : 0), c = _(
    () => ht(me.collapsibleWrapper, n && me.open),
    [n]
  ), s = _(
    () => ({
      // Cast via Record to satisfy CSSProperties typing for custom properties.
      ...n ? {} : {},
      "--height": n ? "auto" : 0,
      "--duration": `${Ut}ms`
    }),
    [n]
  );
  return $(() => {
    const l = o.current, d = a.current;
    if (!(!l || !d))
      if (n) {
        const u = d.scrollHeight;
        i.current = u, l.style.setProperty("--height", `${u}px`);
        const m = setTimeout(() => {
          i.current = "auto", l.style.setProperty("--height", "auto");
        }, Ut);
        return () => clearTimeout(m);
      } else {
        if (i.current === "auto") {
          const u = d.scrollHeight;
          l.style.setProperty("--height", `${u}px`), d.offsetHeight;
        }
        l.style.setProperty("--height", "0"), i.current = 0;
        return;
      }
  }, [n]), /* @__PURE__ */ r("div", { ref: o, className: c, style: s, children: /* @__PURE__ */ r("div", { ref: a, className: me.collapsible, children: e }) });
}
const fo = N(po), go = N(mo), bo = N(ho), O = N(uo);
O.Label = fo;
O.Object = go;
O.Collapsible = bo;
const vo = "_container_e5lu1_8", yo = "_focused_e5lu1_27", xo = "_scrubbing_e5lu1_32", wo = "_scrubArea_e5lu1_38", ko = "_horizontalScrub_e5lu1_49", _o = "_iconSlot_e5lu1_53", Fo = "_inputEl_e5lu1_72", Co = "_stepper_e5lu1_101", So = "_stepperBtn_e5lu1_124", Ro = "_top_e5lu1_149", Lo = "_bottom_e5lu1_154", Eo = "_stepperLeft_e5lu1_170", de = {
  container: vo,
  focused: yo,
  scrubbing: xo,
  scrubArea: wo,
  horizontalScrub: ko,
  iconSlot: _o,
  inputEl: Fo,
  stepper: Co,
  stepperBtn: So,
  top: Ro,
  bottom: Lo,
  stepperLeft: Eo
}, Mo = 2, Io = () => {
};
function To({
  onStep: e,
  onBlur: t = Io,
  value: n,
  min: o,
  max: a,
  isHorizontalScrub: i = !1
}) {
  const [c, s] = w(!1), [l, d] = w(!1), [u, m] = w(!1), [b, f] = w(!1), [p, h] = w(null), k = F(null), C = F(null), x = F(null), y = F(e), E = F(t);
  return $(() => {
    y.current = e, E.current = t;
  }, [e, t]), $(() => {
    if (typeof n != "number") return;
    const M = typeof a == "number" && n >= a, R = typeof o == "number" && n <= o;
    if (m(M), f(R), !l) {
      document.documentElement.dataset.handleResize = "";
      return;
    }
    const T = i ? "wResize" : "sResize", D = i ? "eResize" : "nResize", P = i ? "ewResize" : "nsResize";
    M ? document.documentElement.dataset.handleResize = T : R ? document.documentElement.dataset.handleResize = D : document.documentElement.dataset.handleResize = P;
  }, [l, n, o, a, i]), $(() => {
    let M = !1, R = null, T = null;
    const D = C.current, P = x.current, B = k.current, A = {
      lastSteps: 0,
      trackedSteps: 0,
      hasDragged: !1,
      isFirst: !1,
      startCoord: 0
    }, z = () => {
      document.removeEventListener("mouseup", z), document.removeEventListener("mousemove", V), A.hasDragged = !1, M = !1, R && clearTimeout(R), T && clearInterval(T), E.current(), B == null || B.blur(), D == null || D.blur(), P == null || P.blur(), s(!1), d(!1), h(null);
    }, V = (H) => {
      let K = (i ? H.clientX : H.clientY) - A.startCoord;
      if (i && (K *= -1), !A.hasDragged && Math.abs(K) < Mo)
        return;
      A.hasDragged || (d(!0), K = K ? 1 : -1, A.hasDragged = !0, R && clearTimeout(R), T && clearInterval(T));
      const te = K - A.lastSteps;
      if (A.lastSteps = K, !te) return;
      const I = i ? te < 0 ? "left" : "right" : te < 0 ? "up" : "down";
      h(I), A.trackedSteps += te, y.current(-A.trackedSteps, A.isFirst, !0), A.isFirst = !1;
    }, W = (H, ee, K) => {
      M || (M = !0, A.trackedSteps = 0, A.lastSteps = 0, A.startCoord = i ? H.clientX : H.clientY, A.isFirst = !0, s(!0), K && typeof ee == "number" && y.current(ee, !0, !1), R = setTimeout(() => {
        T = setInterval(() => {
          typeof ee == "number" && y.current(ee, !0, !1);
        }, 50);
      }, 500), document.addEventListener("mouseup", z), document.addEventListener("mousemove", V));
    }, Y = (H, ee, K) => (te) => {
      te.button === 0 && (h(H), W(te, ee, K));
    }, X = Y("up", 1, !0), q = Y("down", -1, !0), he = Y(null, null, !1);
    return D == null || D.addEventListener("mousedown", X), P == null || P.addEventListener("mousedown", q), B == null || B.addEventListener("mousedown", he), () => {
      T && clearInterval(T), R && clearTimeout(R), document.removeEventListener("mouseup", z), document.removeEventListener("mousemove", V), D == null || D.removeEventListener("mousedown", X), P == null || P.removeEventListener("mousedown", q), B == null || B.removeEventListener("mousedown", he);
    };
  }, [i]), _(
    () => ({
      scrubRef: k,
      upRef: C,
      downRef: x,
      isActive: c,
      isDragging: l,
      isMax: u,
      isMin: b,
      activeDirection: p
    }),
    [c, l, u, b, p]
  );
}
function No(e) {
  const t = e.match(/^(-?\d*\.?\d*)\s*([\u00C0-\u00FFa-zA-Z%°]*)$/);
  if (!t) return { numStr: e, unit: "" };
  const [, n, o] = t;
  return { numStr: n, unit: o };
}
function Sn(e, t, n = {}) {
  if (!t.length)
    return {
      unit: "",
      min: n.min ?? -1 / 0,
      max: n.max ?? 1 / 0,
      step: n.step ?? 1,
      shiftStep: n.shiftStep ?? 10,
      precision: n.precision ?? 0,
      defaultValue: n.defaultValue ?? 0
    };
  const o = t.map((i) => typeof i == "string" ? { unit: i } : i), a = o.find((i) => i.unit === e) ?? o[0];
  return {
    unit: a.unit,
    min: a.min ?? n.min ?? -1 / 0,
    max: a.max ?? n.max ?? 1 / 0,
    step: a.step ?? n.step ?? 1,
    shiftStep: a.shiftStep ?? n.shiftStep ?? (a.step ?? 1) * 10,
    precision: a.precision ?? n.precision ?? 0,
    defaultValue: a.defaultValue ?? n.defaultValue ?? 0
  };
}
function Rn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ln(e, t) {
  if (!Number.isFinite(t) || t < 0) return e;
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
function Ye(e, t) {
  return Number.isFinite(e) ? t <= 0 ? String(Math.round(e)) : e.toFixed(t).replace(/\.?0+$/, "") : "0";
}
function Ao(e, t, n, o) {
  const a = n.step;
  let i = e + t * a;
  return i = Rn(i, n.min, n.max), i = Ln(i, n.precision), i;
}
function Bo(e, t, n = {}, { clamp: o = !0 } = {}) {
  const { numStr: a, unit: i } = No(e), c = Sn(i, t, n);
  let s = parseFloat(a);
  return Number.isNaN(s) && (s = c.defaultValue), o && (s = Rn(s, c.min, c.max)), s = Ln(s, c.precision), {
    value: s,
    unit: c.unit,
    formatted: Ye(s, c.precision) + c.unit
  };
}
function $o({
  id: e,
  value: t,
  onChange: n,
  units: o = ["px"],
  min: a,
  max: i,
  step: c,
  precision: s,
  icon: l,
  stepperSide: d = "right",
  scrubDirection: u = "vertical",
  stepper: m = !0,
  onInteractionStart: b,
  onInteractionEnd: f
}) {
  const p = u === "horizontal", h = _(
    () => {
      var H;
      return Sn(
        typeof o[0] == "string" ? o[0] : (H = o[0]) == null ? void 0 : H.unit,
        o,
        {
          min: a,
          max: i,
          step: c,
          precision: s,
          defaultValue: t
        }
      );
    },
    [o, a, i, c, s, t]
  ), [k, C] = w(
    () => Ye(t, h.precision) + h.unit
  ), [x, y] = w(!1);
  $(() => {
    x || C(Ye(t, h.precision) + h.unit);
  }, [t, h.precision, h.unit, x]);
  const E = F(t);
  E.current = t;
  const M = S(
    (H, ee, K) => {
      ee && !K && (b == null || b());
      const te = Ao(
        E.current,
        H,
        h
      );
      te !== E.current && (E.current = te, n({
        value: te,
        unit: h.unit,
        formatted: Ye(te, h.precision) + h.unit
      }));
    },
    [h, n, b]
  ), R = S(() => {
    f == null || f();
  }, [f]), {
    scrubRef: T,
    upRef: D,
    downRef: P,
    isActive: B,
    isDragging: A,
    isMax: z,
    isMin: V
  } = To({
    onStep: M,
    onBlur: R,
    value: t,
    min: h.min,
    max: h.max,
    isHorizontalScrub: p
  }), W = S(() => y(!0), []), Y = S(() => {
    y(!1);
    const H = Bo(k, o, {
      min: h.min,
      max: h.max,
      step: h.step,
      precision: h.precision,
      defaultValue: h.defaultValue
    });
    H.value !== t ? n(H) : C(H.formatted);
  }, [k, o, h, t, n]), X = S(
    (H) => {
      C(H.target.value);
    },
    []
  ), q = S(
    (H) => {
      H.key === "Enter" ? H.target.blur() : H.key === "Escape" ? (C(Ye(t, h.precision) + h.unit), H.target.blur()) : H.key === "ArrowUp" ? (H.preventDefault(), M(H.shiftKey ? 10 : 1, !0, !1)) : H.key === "ArrowDown" && (H.preventDefault(), M(H.shiftKey ? -10 : -1, !0, !1));
    },
    [t, h.precision, h.unit, M]
  ), he = [
    de.container,
    x && de.focused,
    (B || A) && de.scrubbing,
    p && de.horizontalScrub,
    d === "left" && de.stepperLeft
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ g("div", { className: he, children: [
    /* @__PURE__ */ r(
      "button",
      {
        ref: T,
        className: de.scrubArea,
        tabIndex: -1,
        "aria-label": "Scrub to change value",
        type: "button"
      }
    ),
    l && /* @__PURE__ */ r("div", { className: de.iconSlot, children: l }),
    /* @__PURE__ */ r(
      "input",
      {
        id: e,
        className: de.inputEl,
        type: "text",
        inputMode: "decimal",
        value: k,
        onChange: X,
        onFocus: W,
        onBlur: Y,
        onKeyDown: q
      }
    ),
    m && /* @__PURE__ */ g("div", { className: de.stepper, children: [
      /* @__PURE__ */ r(
        "button",
        {
          ref: D,
          type: "button",
          className: `${de.stepperBtn} ${de.top}`,
          tabIndex: -1,
          disabled: z,
          "aria-label": "Step up",
          children: /* @__PURE__ */ r(Wt, {})
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          ref: P,
          type: "button",
          className: `${de.stepperBtn} ${de.bottom}`,
          tabIndex: -1,
          disabled: V,
          "aria-label": "Step down",
          children: /* @__PURE__ */ r(Wt, {})
        }
      )
    ] })
  ] });
}
function Wt() {
  return /* @__PURE__ */ r("svg", { viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ r("path", { d: "M2 7L5 4L8 7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const pe = N($o), Ho = "_container_b23ne_9", Oo = "_dot_b23ne_28", Do = "_active_b23ne_57", xt = {
  container: Ho,
  dot: Oo,
  active: Do
}, Po = [
  [0, 0],
  [50, 0],
  [100, 0],
  [0, 50],
  [50, 50],
  [100, 50],
  [0, 100],
  [50, 100],
  [100, 100]
];
function zo({
  value: e,
  onChange: t,
  "aria-label": n = "Transform origin"
}) {
  const o = S(
    (a, i) => () => t({ x: a, y: i }),
    [t]
  );
  return /* @__PURE__ */ r("div", { className: xt.container, role: "group", "aria-label": n, children: Po.map(([a, i]) => {
    const c = e.x === a && e.y === i;
    return /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: `${xt.dot}${c ? " " + xt.active : ""}`,
        onClick: o(a, i),
        "aria-label": `Anchor ${a}% ${i}%`,
        "aria-pressed": c
      },
      `${a}-${i}`
    );
  }) });
}
const jo = N(zo);
function Uo({ children: e, expanded: t = !0 }) {
  return t ? /* @__PURE__ */ r("div", { style: { display: "contents" }, children: e }) : null;
}
const Wo = N(Uo);
function Vo({
  children: e,
  className: t,
  defaultVisibleCount: n,
  labelExpand: o = "More",
  labelCollapse: a = "Less"
}) {
  const [i, c] = w(!1), s = S(() => c((m) => !m), []), l = _(
    () => ur.Children.toArray(e).filter(Boolean),
    [e]
  ), d = typeof n == "number" && l.length > n, u = d && !i ? l.slice(0, n) : l;
  return /* @__PURE__ */ g(
    "div",
    {
      className: t,
      style: { display: "flex", flexDirection: "column", gap: "var(--proui-field-gap, 8px)" },
      children: [
        u,
        d && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            onClick: s,
            style: {
              alignSelf: "flex-end",
              background: "transparent",
              border: "none",
              color: "var(--rosetta-fg-muted, #666666)",
              font: "inherit",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              cursor: "pointer",
              padding: "4px 0"
            },
            children: i ? a : o
          }
        )
      ]
    }
  );
}
const qo = N(Vo);
qo.Item = Wo;
const ne = {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  xmlns: "http://www.w3.org/2000/svg"
};
function En(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "2", y: "18", width: "18", height: "2" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "2", y: "2", width: "18", height: "2" })
  ] });
}
function Mn(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "2", y: "3", width: "2", height: "16" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "18", y: "3", width: "2", height: "16" }),
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" })
  ] });
}
function In(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "2", y: "2", width: "18", height: "2" })
  ] });
}
function Tn(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,16H6V6h10v10ZM8,14h6v-6h-6v6Z" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "2", y: "18", width: "18", height: "2" })
  ] });
}
function Nn(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,6v10H6V6h10ZM14,14v-6h-6v6h6Z" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "-6", y: "10", width: "18", height: "2", transform: "translate(-8 14) rotate(-90)" })
  ] });
}
function An(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16,6v10H6V6h10ZM14,14v-6h-6v6h6Z" }),
    /* @__PURE__ */ r("rect", { fill: "currentColor", x: "10", y: "10", width: "18", height: "2", transform: "translate(8 30) rotate(-90)" })
  ] });
}
function Bn(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, children: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      d: "M11 3l5 7a6 6 0 1 1-10 0l5-7Zm0 3L7.5 11A4.5 4.5 0 1 0 14.5 11L11 6Z"
    }
  ) });
}
function $n(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "7", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ r("line", { x1: "11", y1: "11", x2: "11", y2: "5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "1.3", fill: "currentColor" })
  ] });
}
function Hn(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, children: [
    /* @__PURE__ */ r("rect", { x: "5", y: "5", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ r("path", { d: "M8 8h6v6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function On(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, children: /* @__PURE__ */ r("path", { d: "M7 5h10l-2 12H5l2-12Z", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" }) });
}
function Dn(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, children: /* @__PURE__ */ r("path", { d: "M6 4v14l10-3V7L6 4Z", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinejoin: "round" }) });
}
function Pn(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, children: /* @__PURE__ */ r(
    "path",
    {
      d: "M6 11h10m-3-3 3 3-3 3",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function zn(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, children: /* @__PURE__ */ r(
    "path",
    {
      d: "M11 6v10m-3-3 3 3 3-3",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Zo(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, fill: "none", children: [
    /* @__PURE__ */ r("circle", { cx: "5", cy: "11", r: "1.3", fill: "currentColor" }),
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "1.3", fill: "currentColor" }),
    /* @__PURE__ */ r("circle", { cx: "17", cy: "11", r: "1.3", fill: "currentColor" })
  ] });
}
function Go(e) {
  return /* @__PURE__ */ g("svg", { width: 8, height: 8, viewBox: "0 0 8 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: [
    /* @__PURE__ */ r("path", { d: "M1 1L7 7", stroke: "currentColor", strokeWidth: 2 }),
    /* @__PURE__ */ r("path", { d: "M7 1L1 7", stroke: "currentColor", strokeWidth: 2 })
  ] });
}
function jn(e) {
  return /* @__PURE__ */ r("svg", { ...ne, ...e, fill: "none", children: /* @__PURE__ */ r(
    "path",
    {
      d: "M10 7h-3a4 4 0 0 0 0 8h3m2-8h3a4 4 0 0 1 0 8h-3m-3-4h6",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }
  ) });
}
function Un(e) {
  return /* @__PURE__ */ g("svg", { ...ne, ...e, fill: "none", children: [
    /* @__PURE__ */ r(
      "path",
      {
        d: "M10 7h-3a4 4 0 0 0 0 8h3m2-8h3a4 4 0 0 1 0 8h-3",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ r("path", { d: "M8 4 L14 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
  ] });
}
function Yo(e) {
  return /* @__PURE__ */ r("svg", { width: 10, height: 10, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: /* @__PURE__ */ r("path", { d: "M2 3L5 6L8 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
const pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChevronDownIcon: Yo,
  LinkIcon: jn,
  MoreIcon: Zo,
  OffsetXIcon: Pn,
  OffsetYIcon: zn,
  OpacityIcon: Bn,
  PaddingBottomIcon: Tn,
  PaddingHorizontalIcon: Mn,
  PaddingLeftIcon: Nn,
  PaddingRightIcon: An,
  PaddingTopIcon: In,
  PaddingVerticalIcon: En,
  ResetIcon: Go,
  RotateIcon: $n,
  ScaleIcon: Hn,
  SkewXIcon: On,
  SkewYIcon: Dn,
  UnlinkIcon: Un
}, Symbol.toStringTag, { value: "Module" }));
function Xo({ linked: e, onToggle: t, className: n }) {
  const o = F(null), a = S(() => {
    var s, l;
    (l = (s = o.current) == null ? void 0 : s.blur) == null || l.call(s), t();
  }, [t]), i = e ? "Unlink" : "Link";
  return /* @__PURE__ */ r(
    "button",
    {
      ref: o,
      type: "button",
      className: n,
      onClick: a,
      title: i,
      "aria-label": i,
      "aria-pressed": !e,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        padding: 0,
        background: "transparent",
        border: "none",
        color: "var(--rosetta-fg-muted, #666666)",
        cursor: "pointer",
        borderRadius: 4,
        transition: "color 0.15s ease, background 0.15s ease"
      },
      onMouseEnter: (s) => {
        s.currentTarget.style.color = "var(--rosetta-fg-default, #0E0E0E)", s.currentTarget.style.background = "var(--rosetta-bg-default, #F2F2F2)";
      },
      onMouseLeave: (s) => {
        s.currentTarget.style.color = "var(--rosetta-fg-muted, #666666)", s.currentTarget.style.background = "transparent";
      },
      children: /* @__PURE__ */ r(e ? jn : Un, { width: 14, height: 14 })
    }
  );
}
const Ko = N(Xo), Jo = "_container_11vv2_9", Qo = "_option_11vv2_21", ei = "_selected_11vv2_44", wt = {
  container: Jo,
  option: Qo,
  selected: ei
};
function ti({
  value: e,
  options: t,
  onChange: n,
  labels: o,
  "aria-label": a,
  className: i
}) {
  const c = S(
    (s) => () => {
      s !== e && n(s);
    },
    [e, n]
  );
  return /* @__PURE__ */ r(
    "div",
    {
      role: "radiogroup",
      "aria-label": a,
      className: `${wt.container}${i ? " " + i : ""}`,
      children: t.map((s) => {
        const l = s === e, d = (o == null ? void 0 : o[s]) ?? ni(s);
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": l,
            onClick: c(s),
            className: `${wt.option}${l ? " " + wt.selected : ""}`,
            children: d
          },
          s
        );
      })
    }
  );
}
function ni(e) {
  return e && e.charAt(0).toUpperCase() + e.slice(1);
}
const md = N(ti), ri = "_trigger_mpriv_7", oi = "_open_mpriv_30", ii = "_label_mpriv_35", ai = "_chevron_mpriv_43", si = "_popover_mpriv_55", li = "_option_mpriv_69", ci = "_selected_mpriv_86", Ie = {
  trigger: ri,
  open: oi,
  label: ii,
  chevron: ai,
  popover: si,
  option: li,
  selected: ci
};
function di({
  value: e,
  options: t,
  onChange: n,
  labels: o,
  "aria-label": a,
  className: i
}) {
  const [c, s] = w(!1), [l, d] = w(null), u = F(null), m = F(null);
  yn(() => {
    if (!c) return;
    const p = () => {
      u.current && d(u.current.getBoundingClientRect());
    };
    return p(), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    };
  }, [c]), $(() => {
    if (!c) return;
    const p = (h) => {
      var C, x;
      const k = h.target;
      (C = m.current) != null && C.contains(k) || (x = u.current) != null && x.contains(k) || s(!1);
    };
    return document.addEventListener("pointerdown", p), () => document.removeEventListener("pointerdown", p);
  }, [c]);
  const b = S(
    (p) => () => {
      n(p), s(!1);
    },
    [n]
  ), f = (o == null ? void 0 : o[e]) ?? Vt(e);
  return /* @__PURE__ */ g(re, { children: [
    /* @__PURE__ */ g(
      "button",
      {
        ref: u,
        type: "button",
        "aria-label": a,
        "aria-haspopup": "listbox",
        "aria-expanded": c,
        onClick: () => s((p) => !p),
        className: `${Ie.trigger}${c ? " " + Ie.open : ""}${i ? " " + i : ""}`,
        children: [
          /* @__PURE__ */ r("span", { className: Ie.label, children: f }),
          /* @__PURE__ */ r("svg", { className: Ie.chevron, width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ r("path", { d: "M3 5L6 8L9 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ]
      }
    ),
    c && l && Ke(
      /* @__PURE__ */ r(
        "div",
        {
          ref: m,
          role: "listbox",
          "aria-label": a,
          className: Ie.popover,
          style: {
            top: l.bottom + 6,
            left: l.left,
            width: l.width
          },
          children: t.map((p) => {
            const h = p === e, k = (o == null ? void 0 : o[p]) ?? Vt(p);
            return /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                role: "option",
                "aria-selected": h,
                onClick: b(p),
                className: `${Ie.option}${h ? " " + Ie.selected : ""}`,
                children: k
              },
              p
            );
          })
        }
      ),
      document.body
    )
  ] });
}
function Vt(e) {
  return e && e.charAt(0).toUpperCase() + e.slice(1);
}
const hd = N(di);
function ui({
  value: e,
  onChange: t,
  linked: n,
  onLinkChange: o,
  min: a = 0,
  max: i = 200,
  step: c = 1
}) {
  const s = _(
    () => e.top === e.bottom && e.left === e.right,
    // Intentionally only read on mount — subsequent value changes from
    // stepping shouldn't re-flip the link state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), [l, d] = w(s), u = n ?? l, m = F(null), b = F(null), f = _(() => [{ unit: "px", min: a, max: i, step: c, precision: 0 }], [a, i, c]), p = S(() => {
    var x, y;
    u ? m.current && t({
      top: e.top,
      bottom: m.current.bottom,
      left: ((x = b.current) == null ? void 0 : x.left) ?? e.left,
      right: ((y = b.current) == null ? void 0 : y.right) ?? e.right
    }) : (m.current = { top: e.top, bottom: e.bottom }, b.current = { left: e.left, right: e.right }, t({
      top: e.top,
      bottom: e.top,
      left: e.left,
      right: e.left
    })), o ? o(!u) : d((E) => !E);
  }, [u, e, t, o]), h = S(
    ({ value: x }) => {
      t({ ...e, top: x, bottom: x });
    },
    [e, t]
  ), k = S(
    ({ value: x }) => {
      t({ ...e, left: x, right: x });
    },
    [e, t]
  ), C = S(
    (x) => ({ value: y }) => {
      t({ ...e, [x]: y });
    },
    [e, t]
  );
  return /* @__PURE__ */ g(re, { children: [
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(
        O.Label,
        {
          htmlFor: "padding-top",
          options: /* @__PURE__ */ r(Ko, { linked: u, onToggle: p }),
          children: "Padding"
        }
      ) }),
      u ? /* @__PURE__ */ g(re, { children: [
        /* @__PURE__ */ r(O.Object, { column: "3 / span 2", children: /* @__PURE__ */ r(
          pe,
          {
            id: "padding-top",
            value: e.top,
            units: f,
            icon: /* @__PURE__ */ r(En, {}),
            onChange: h
          }
        ) }),
        /* @__PURE__ */ r(O.Object, { column: "5 / span 2", children: /* @__PURE__ */ r(
          pe,
          {
            id: "padding-left",
            value: e.left,
            units: f,
            icon: /* @__PURE__ */ r(Mn, {}),
            onChange: k
          }
        ) })
      ] }) : /* @__PURE__ */ g(re, { children: [
        /* @__PURE__ */ r(O.Object, { column: "3 / span 2", children: /* @__PURE__ */ r(
          pe,
          {
            id: "padding-top",
            value: e.top,
            units: f,
            icon: /* @__PURE__ */ r(In, {}),
            onChange: C("top")
          }
        ) }),
        /* @__PURE__ */ r(O.Object, { column: "5 / span 2", children: /* @__PURE__ */ r(
          pe,
          {
            id: "padding-right",
            value: e.right,
            units: f,
            icon: /* @__PURE__ */ r(An, {}),
            onChange: C("right")
          }
        ) })
      ] })
    ] }),
    !u && /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "3 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "padding-bottom",
          value: e.bottom,
          units: f,
          icon: /* @__PURE__ */ r(Tn, {}),
          onChange: C("bottom")
        }
      ) }),
      /* @__PURE__ */ r(O.Object, { column: "5 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "padding-left",
          value: e.left,
          units: f,
          icon: /* @__PURE__ */ r(Nn, {}),
          onChange: C("left")
        }
      ) })
    ] })
  ] });
}
const fd = N(ui);
function pi({ value: e, onChange: t }) {
  const n = _(() => [{ unit: "%", min: 0, max: 100, step: 1, precision: 0 }], []), o = _(() => [{ unit: "°", min: -360, max: 360, step: 1, precision: 0 }], []), a = _(() => [{ unit: "%", min: 0, max: 500, step: 1, precision: 0 }], []), i = _(() => [{ unit: "°", min: -180, max: 180, step: 1, precision: 0 }], []), c = _(() => [{ unit: "px", min: -500, max: 500, step: 1, precision: 0 }], []), s = S(
    (d) => ({ value: u }) => t({ [d]: u }),
    [t]
  ), l = S(
    (d) => t({ anchor: d }),
    [t]
  );
  return /* @__PURE__ */ g(re, { children: [
    /* @__PURE__ */ r(O, { children: /* @__PURE__ */ r(O.Object, { column: "1 / span 6", children: /* @__PURE__ */ r(O.Label, { primary: !0, children: "Transforms" }) }) }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { htmlFor: "opacity", children: "Opacity" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / -1", children: /* @__PURE__ */ r(
        pe,
        {
          id: "opacity",
          value: e.opacity,
          units: n,
          icon: /* @__PURE__ */ r(Bn, {}),
          onChange: s("opacity")
        }
      ) })
    ] }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { htmlFor: "rotate", children: "Rotate" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / -1", children: /* @__PURE__ */ r(
        pe,
        {
          id: "rotate",
          value: e.rotate,
          units: o,
          icon: /* @__PURE__ */ r($n, {}),
          onChange: s("rotate")
        }
      ) })
    ] }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { htmlFor: "scale", children: "Scale" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / -1", children: /* @__PURE__ */ r(
        pe,
        {
          id: "scale",
          value: e.scale,
          units: a,
          icon: /* @__PURE__ */ r(Hn, {}),
          onChange: s("scale")
        }
      ) })
    ] }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { htmlFor: "skew-x", children: "Skew" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "skew-x",
          value: e.skewX,
          units: i,
          icon: /* @__PURE__ */ r(On, {}),
          onChange: s("skewX")
        }
      ) }),
      /* @__PURE__ */ r(O.Object, { column: "5 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "skew-y",
          value: e.skewY,
          units: i,
          icon: /* @__PURE__ */ r(Dn, {}),
          onChange: s("skewY")
        }
      ) })
    ] }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { htmlFor: "offset-x", children: "Offset" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "offset-x",
          value: e.offsetX,
          units: c,
          icon: /* @__PURE__ */ r(Pn, {}),
          onChange: s("offsetX")
        }
      ) }),
      /* @__PURE__ */ r(O.Object, { column: "5 / span 2", children: /* @__PURE__ */ r(
        pe,
        {
          id: "offset-y",
          value: e.offsetY,
          units: c,
          icon: /* @__PURE__ */ r(zn, {}),
          onChange: s("offsetY")
        }
      ) })
    ] }),
    /* @__PURE__ */ g(O, { children: [
      /* @__PURE__ */ r(O.Object, { column: "1 / span 2", children: /* @__PURE__ */ r(O.Label, { children: "Anchor" }) }),
      /* @__PURE__ */ r(O.Object, { column: "3 / -1", children: /* @__PURE__ */ r("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ r(jo, { value: e.anchor, onChange: l }) }) })
    ] })
  ] });
}
const gd = N(pi);
function ft(e, t = 0, n = 0) {
  const [o, a] = w(e);
  return $(() => {
    const i = e ? t : n;
    if (i <= 0) {
      a(e);
      return;
    }
    const c = setTimeout(() => a(e), i * 1e3);
    return () => clearTimeout(c);
  }, [e, t, n]), o;
}
function mi(e, t) {
  const [n, o] = w(["site-styles"]), [a, i] = w(0);
  $(() => {
    const s = e.current;
    if (!s) return;
    const l = (d) => {
      const u = d.target;
      if (u.tagName === "A" && u.getAttribute("href")) {
        const m = u.getAttribute("href");
        if (m.startsWith("/")) {
          const b = m.replace("/config/", "").split("/");
          o((f) => {
            const p = [...f];
            return b.forEach((h, k) => {
              p[k] = h;
            }), p;
          }), i(b.length - 1), d.preventDefault();
        }
      }
    };
    return s.addEventListener("click", l), () => s.removeEventListener("click", l);
  }, [e]);
  const c = S(() => {
    i((s) => Math.max(0, s - 1));
  }, []);
  return $(() => {
    t && (o(["site-styles"]), i(0));
  }, [t]), _(() => ({ route: n, depth: a, onBack: c }), [n, a, c]);
}
const hi = "_container_191aw_1", fi = "_active_191aw_25", gi = "_current_191aw_29", bi = "_header_191aw_33", at = {
  container: hi,
  active: fi,
  current: gi,
  header: bi
}, vi = (...e) => e.filter(Boolean).join(" ");
function yi({ children: e, title: t, description: n, depth: o = 0, isActive: a = !1 }) {
  const i = _(
    () => vi(at.container, a && at.active, a && at.current),
    [a]
  );
  return /* @__PURE__ */ r("div", { className: i, style: { "--depth": o }, children: a && /* @__PURE__ */ g(re, { children: [
    (t || n) && /* @__PURE__ */ g("div", { className: at.header, children: [
      t && /* @__PURE__ */ r("h1", { children: t }),
      n && /* @__PURE__ */ r("h2", { children: n })
    ] }),
    e
  ] }) });
}
const Nt = N(yi), xi = "_container_thqg8_1", wi = "_wrap_thqg8_7", ki = "_content_thqg8_7", _i = "_fadeup_thqg8_13", Fi = "_fadeoutdown_thqg8_19", Ci = "_label_thqg8_46", Si = "_buttonBox_thqg8_66", Ri = "_active_thqg8_109", Li = "_disclosure_thqg8_119", Ei = "_disclosureWrapper_thqg8_133", be = {
  container: xi,
  wrap: wi,
  content: ki,
  fadeup: _i,
  fadeoutdown: Fi,
  label: Ci,
  buttonBox: Si,
  active: Ri,
  disclosure: Li,
  disclosureWrapper: Ei
}, Lt = (...e) => e.filter(Boolean).join(" ");
function qt({
  active: e = !1,
  children: t,
  className: n,
  onClick: o,
  tag: a = "button",
  ...i
}) {
  const [c, s] = w(!1), l = _(
    () => Lt(n, be.buttonBox, c && "hover", e && be.active),
    [n, c, e]
  ), d = S(() => s(!0), []), u = S(() => s(!1), []);
  return /* @__PURE__ */ r(
    a,
    {
      className: l,
      onMouseEnter: d,
      onMouseLeave: u,
      onClick: (b) => {
        s(!1), o == null || o(b);
      },
      tabIndex: 0,
      ...i,
      children: t
    }
  );
}
function Mi() {
  return /* @__PURE__ */ r("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M0.44 12L5.44 7L0.44 2H2.561L7.561 7L2.561 12H0.44Z", fill: "currentColor" }) });
}
function Ii({
  active: e = !1,
  onClick: t,
  children: n,
  disclosure: o,
  wrap: a = !1,
  label: i,
  delayShow: c = 0,
  animateReveal: s = !1,
  isShown: l = !0
}) {
  const d = _(
    () => Lt(
      be.container,
      a && be.wrap,
      s && l && be.fadeup,
      s && !l && be.fadeoutdown
    ),
    [a, l, s]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: d,
      style: { "--animation-delay": `${c}s` },
      children: [
        /* @__PURE__ */ g(qt, { active: e, onClick: t, children: [
          /* @__PURE__ */ r("div", { className: be.label, children: i }),
          /* @__PURE__ */ r("div", { className: be.content, children: n })
        ] }),
        o && /* @__PURE__ */ r("div", { className: be.disclosureWrapper, children: /* @__PURE__ */ r(
          qt,
          {
            tag: "a",
            className: Lt(be.buttonBox, be.disclosure),
            href: o,
            children: /* @__PURE__ */ r(Mi, {})
          }
        ) })
      ]
    }
  );
}
const We = N(Ii), Ti = "_container_1bxjx_1", Ni = "_label_1bxjx_20", Ai = "_suffix_1bxjx_25", Bi = "_chevron_1bxjx_30", st = {
  container: Ti,
  label: Ni,
  suffix: Ai,
  chevron: Bi
};
function $i() {
  return /* @__PURE__ */ r("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r(
    "path",
    {
      d: "M1 1l6 6-6 6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function Hi({ label: e, suffix: t, href: n, ...o }) {
  return /* @__PURE__ */ g("a", { className: st.container, href: n, ...o, children: [
    /* @__PURE__ */ r("div", { className: st.label, children: e }),
    t && /* @__PURE__ */ r("div", { className: st.suffix, children: t }),
    /* @__PURE__ */ r("div", { className: st.chevron, children: /* @__PURE__ */ r($i, {}) })
  ] });
}
const Et = N(Hi), Oi = "_container_19xa4_3", Di = "_item_19xa4_17", Pi = "_directionInUp_19xa4_31", zi = "_directionInDown_19xa4_35", ji = "_directionInLeft_19xa4_39", Ui = "_directionInRight_19xa4_43", Wi = "_directionOutUp_19xa4_49", Vi = "_directionOutDown_19xa4_53", qi = "_directionOutLeft_19xa4_57", Zi = "_directionOutRight_19xa4_61", Gi = "_visible_19xa4_67", Yi = "_animateIn_19xa4_76", Xi = "_hidden_19xa4_85", Ki = "_useOpacity_19xa4_99", se = {
  container: Oi,
  item: Di,
  directionInUp: Pi,
  directionInDown: zi,
  directionInLeft: ji,
  directionInRight: Ui,
  directionOutUp: Wi,
  directionOutDown: Vi,
  directionOutLeft: qi,
  directionOutRight: Zi,
  visible: Gi,
  animateIn: Yi,
  hidden: Xi,
  useOpacity: Ki
};
function Wn(...e) {
  return e.filter(Boolean).join(" ");
}
const Ji = {
  up: se.directionInUp,
  down: se.directionInDown,
  left: se.directionInLeft,
  right: se.directionInRight
}, Qi = {
  up: se.directionOutUp,
  down: se.directionOutDown,
  left: se.directionOutLeft,
  right: se.directionOutRight
}, Vn = xn({
  isHidden: !1
}), ea = () => wn(Vn), ta = N(function(t) {
  const {
    child: n,
    className: o,
    delayHide: a = 0,
    delayShow: i = 0,
    duration: c = 0.25,
    distance: s = 0.25,
    animateIn: l = !0,
    directionIn: d = "up",
    directionOut: u = "up",
    useOpacity: m = !0,
    isShown: b,
    onRemoved: f
  } = t, [p, h] = w(!1), [k, C] = w(!1), x = F(null), y = F(), E = F(), M = F(!1), R = F(!1), T = S(() => {
    if (clearTimeout(y.current), clearTimeout(E.current), !l) {
      h(!0);
      return;
    }
    E.current = setTimeout(() => {
      C(!1), h(!0);
    }, 30 + (a + i) * 1e3);
  }, [l, a, i]), D = S(() => {
    clearTimeout(y.current), clearTimeout(E.current), C(!0), y.current = setTimeout(() => {
      f();
    }, (a + c) * 1e3);
  }, [f, a, c]);
  $(() => {
    if (b) {
      if (M.current)
        return;
      R.current = !1, M.current = !0, T();
      return;
    }
    R.current || (M.current = !1, R.current = !0, D());
  }, [b, T, D]);
  const P = _(
    () => Wn(
      o,
      se.item,
      p && se.visible,
      k && se.hidden,
      m && se.useOpacity,
      l && se.animateIn,
      Ji[d],
      Qi[u]
    ),
    [o, p, k, d, u, l, m]
  ), B = _(
    () => ({
      "--swap-duration": `${c}s`,
      "--swap-distance": `${s}rem`
    }),
    [c, s]
  ), A = _(
    () => ({
      isHidden: !p || k
    }),
    [p, k]
  );
  return /* @__PURE__ */ r(Vn.Provider, { value: A, children: /* @__PURE__ */ r("div", { ref: x, style: B, className: P, children: n }) });
});
function na(e) {
  const {
    Tag: t = "div",
    animateFirst: n = !1,
    children: o,
    className: a,
    classNameContent: i,
    delayHide: c = 0,
    duration: s = 0.35,
    delayShow: l = 0.2,
    distance: d = 0.25,
    directionIn: u = "up",
    directionOut: m = "up",
    useOpacity: b = !0,
    ...f
  } = e, p = F(!0), [h, k] = w([]), C = S((x) => {
    k((y) => y.filter((E) => E.child !== x));
  }, []);
  return $(() => {
    p.current = !0;
  }, []), $(() => {
    if (!o) {
      k(
        (y) => y.map((E) => ({
          ...E,
          isShown: !1,
          animateIn: !1
        }))
      );
      return;
    }
    const x = n ? !0 : !p.current;
    k((y) => {
      const E = pr.map(o, (R, T) => ({
        child: R,
        key: R.key || T.toString(),
        animateIn: x,
        isShown: !0,
        delayShow: l,
        directionIn: u,
        directionOut: m
      }));
      return [...y.filter((R) => E.every((T) => T.key !== R.key)).map((R) => ({
        ...R,
        isShown: !1,
        delayShow: l,
        animateIn: !1
      })), ...E];
    }), p.current = !1;
  }, [n, o, u, m, l]), /* @__PURE__ */ r(t, { className: Wn(a, se.container), ...f, children: h.map(({ animateIn: x, child: y, isShown: E, delayShow: M }) => /* @__PURE__ */ r(
    ta,
    {
      className: i,
      child: y,
      animateIn: x,
      isShown: E,
      directionIn: u,
      directionOut: m,
      duration: s,
      distance: d,
      onRemoved: () => C(y),
      delayShow: M,
      delayHide: c,
      useOpacity: b
    },
    y.key || "defaultKey"
  )) });
}
const ke = N(na), $e = [
  "white-hsl",
  "lightaccent-hsl",
  "accent-hsl",
  "darkaccent-hsl",
  "black-hsl"
], bd = {
  white: 0,
  lightAccent: 1,
  accent: 2,
  darkAccent: 3,
  black: 4
}, Le = [
  {
    id: "lightest-1",
    name: "Lightest 1",
    group: "lightest",
    roles: {
      background: 0,
      // white
      text: 4,
      // black
      heading: 4,
      // black
      accent: 2,
      // accent
      buttonBg: 4,
      // black
      buttonText: 0,
      // white
      border: 3,
      // darkAccent
      muted: 3
      // darkAccent
    }
  },
  {
    id: "lightest-2",
    name: "Lightest 2",
    group: "lightest",
    roles: {
      background: 0,
      // white
      text: 3,
      // darkAccent
      heading: 3,
      // darkAccent
      accent: 2,
      // accent
      buttonBg: 2,
      // accent
      buttonText: 0,
      // white
      border: 1,
      // lightAccent
      muted: 2
      // accent
    }
  },
  {
    id: "light-1",
    name: "Light 1",
    group: "light",
    roles: {
      background: 1,
      // lightAccent
      text: 4,
      // black
      heading: 4,
      // black
      accent: 2,
      // accent
      buttonBg: 4,
      // black
      buttonText: 1,
      // lightAccent
      border: 3,
      // darkAccent
      muted: 3
      // darkAccent
    }
  },
  {
    id: "light-2",
    name: "Light 2",
    group: "light",
    roles: {
      background: 1,
      // lightAccent
      text: 3,
      // darkAccent
      heading: 3,
      // darkAccent
      accent: 2,
      // accent
      buttonBg: 2,
      // accent
      buttonText: 0,
      // white
      border: 3,
      // darkAccent
      muted: 3
      // darkAccent
    }
  },
  {
    id: "bright-1",
    name: "Bright 1",
    group: "bright",
    roles: {
      background: 4,
      // black
      text: 2,
      // accent
      heading: 2,
      // accent
      accent: 2,
      // accent
      buttonBg: 2,
      // accent
      buttonText: 4,
      // black
      border: 2,
      // accent
      muted: 2
      // accent
    }
  },
  {
    id: "bright-2",
    name: "Bright 2",
    group: "bright",
    roles: {
      background: 2,
      // accent
      text: 4,
      // black
      heading: 4,
      // black
      accent: 0,
      // white
      buttonBg: 4,
      // black
      buttonText: 2,
      // accent
      border: 4,
      // black
      muted: 3
      // darkAccent
    }
  },
  {
    id: "dark-1",
    name: "Dark 1",
    group: "dark",
    roles: {
      background: 3,
      // darkAccent
      text: 1,
      // lightAccent
      heading: 1,
      // lightAccent
      accent: 2,
      // accent
      buttonBg: 0,
      // white
      buttonText: 3,
      // darkAccent
      border: 1,
      // lightAccent
      muted: 1
      // lightAccent
    }
  },
  {
    id: "dark-2",
    name: "Dark 2",
    group: "dark",
    roles: {
      background: 3,
      // darkAccent
      text: 1,
      // lightAccent
      heading: 1,
      // lightAccent
      accent: 2,
      // accent
      buttonBg: 2,
      // accent
      buttonText: 3,
      // darkAccent
      border: 2,
      // accent
      muted: 2
      // accent
    }
  },
  {
    id: "darkest-1",
    name: "Darkest 1",
    group: "darkest",
    roles: {
      background: 4,
      // black
      text: 0,
      // white
      heading: 0,
      // white
      accent: 2,
      // accent
      buttonBg: 0,
      // white
      buttonText: 4,
      // black
      border: 3,
      // darkAccent
      muted: 1
      // lightAccent
    }
  },
  {
    id: "darkest-2",
    name: "Darkest 2",
    group: "darkest",
    roles: {
      background: 4,
      // black
      text: 2,
      // accent
      heading: 2,
      // accent
      accent: 0,
      // white
      buttonBg: 2,
      // accent
      buttonText: 4,
      // black
      border: 2,
      // accent
      muted: 1
      // lightAccent
    }
  }
], ra = "lightest-1", vd = [
  "lightest-1",
  "darkest-1",
  "light-1",
  "dark-1",
  "bright-2"
], oa = new Set(Le.map((e) => e.id));
function yd(e) {
  return !!e && oa.has(e);
}
function pt(e) {
  "@babel/helpers - typeof";
  return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pt(e);
}
var ia = /^\s+/, aa = /\s+$/;
function L(e, t) {
  if (e = e || "", t = t || {}, e instanceof L)
    return e;
  if (!(this instanceof L))
    return new L(e, t);
  var n = sa(e);
  this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n.ok;
}
L.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var t = this.toRgb();
    return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
  },
  getLuminance: function() {
    var t = this.toRgb(), n, o, a, i, c, s;
    return n = t.r / 255, o = t.g / 255, a = t.b / 255, n <= 0.03928 ? i = n / 12.92 : i = Math.pow((n + 0.055) / 1.055, 2.4), o <= 0.03928 ? c = o / 12.92 : c = Math.pow((o + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * i + 0.7152 * c + 0.0722 * s;
  },
  setAlpha: function(t) {
    return this._a = qn(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Gt(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Gt(this._r, this._g, this._b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), a = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + n + ", " + o + "%, " + a + "%)" : "hsva(" + n + ", " + o + "%, " + a + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Zt(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Zt(this._r, this._g, this._b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), a = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + n + ", " + o + "%, " + a + "%)" : "hsla(" + n + ", " + o + "%, " + a + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Yt(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return ua(this._r, this._g, this._b, this._a, t);
  },
  toHex8String: function(t) {
    return "#" + this.toHex8(t);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(Z(this._r, 255) * 100) + "%",
      g: Math.round(Z(this._g, 255) * 100) + "%",
      b: Math.round(Z(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(Z(this._r, 255) * 100) + "%, " + Math.round(Z(this._g, 255) * 100) + "%, " + Math.round(Z(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(Z(this._r, 255) * 100) + "%, " + Math.round(Z(this._g, 255) * 100) + "%, " + Math.round(Z(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : _a[Yt(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var n = "#" + Xt(this._r, this._g, this._b, this._a), o = n, a = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var i = L(t);
      o = "#" + Xt(i._r, i._g, i._b, i._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + n + ",endColorstr=" + o + ")";
  },
  toString: function(t) {
    var n = !!t;
    t = t || this._format;
    var o = !1, a = this._a < 1 && this._a >= 0, i = !n && a && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return i ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (o = this.toRgbString()), t === "prgb" && (o = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (o = this.toHexString()), t === "hex3" && (o = this.toHexString(!0)), t === "hex4" && (o = this.toHex8String(!0)), t === "hex8" && (o = this.toHex8String()), t === "name" && (o = this.toName()), t === "hsl" && (o = this.toHslString()), t === "hsv" && (o = this.toHsvString()), o || this.toHexString());
  },
  clone: function() {
    return L(this.toString());
  },
  _applyModification: function(t, n) {
    var o = t.apply(null, [this].concat([].slice.call(n)));
    return this._r = o._r, this._g = o._g, this._b = o._b, this.setAlpha(o._a), this;
  },
  lighten: function() {
    return this._applyModification(fa, arguments);
  },
  brighten: function() {
    return this._applyModification(ga, arguments);
  },
  darken: function() {
    return this._applyModification(ba, arguments);
  },
  desaturate: function() {
    return this._applyModification(pa, arguments);
  },
  saturate: function() {
    return this._applyModification(ma, arguments);
  },
  greyscale: function() {
    return this._applyModification(ha, arguments);
  },
  spin: function() {
    return this._applyModification(va, arguments);
  },
  _applyCombination: function(t, n) {
    return t.apply(null, [this].concat([].slice.call(n)));
  },
  analogous: function() {
    return this._applyCombination(wa, arguments);
  },
  complement: function() {
    return this._applyCombination(ya, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(ka, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(xa, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Kt, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Kt, [4]);
  }
};
L.fromRatio = function(e, t) {
  if (pt(e) == "object") {
    var n = {};
    for (var o in e)
      e.hasOwnProperty(o) && (o === "a" ? n[o] = e[o] : n[o] = Xe(e[o]));
    e = n;
  }
  return L(e, t);
};
function sa(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, n = 1, o = null, a = null, i = null, c = !1, s = !1;
  return typeof e == "string" && (e = Ra(e)), pt(e) == "object" && (Fe(e.r) && Fe(e.g) && Fe(e.b) ? (t = la(e.r, e.g, e.b), c = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Fe(e.h) && Fe(e.s) && Fe(e.v) ? (o = Xe(e.s), a = Xe(e.v), t = da(e.h, o, a), c = !0, s = "hsv") : Fe(e.h) && Fe(e.s) && Fe(e.l) && (o = Xe(e.s), i = Xe(e.l), t = ca(e.h, o, i), c = !0, s = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = qn(n), {
    ok: c,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
function la(e, t, n) {
  return {
    r: Z(e, 255) * 255,
    g: Z(t, 255) * 255,
    b: Z(n, 255) * 255
  };
}
function Zt(e, t, n) {
  e = Z(e, 255), t = Z(t, 255), n = Z(n, 255);
  var o = Math.max(e, t, n), a = Math.min(e, t, n), i, c, s = (o + a) / 2;
  if (o == a)
    i = c = 0;
  else {
    var l = o - a;
    switch (c = s > 0.5 ? l / (2 - o - a) : l / (o + a), o) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return {
    h: i,
    s: c,
    l: s
  };
}
function ca(e, t, n) {
  var o, a, i;
  e = Z(e, 360), t = Z(t, 100), n = Z(n, 100);
  function c(d, u, m) {
    return m < 0 && (m += 1), m > 1 && (m -= 1), m < 1 / 6 ? d + (u - d) * 6 * m : m < 1 / 2 ? u : m < 2 / 3 ? d + (u - d) * (2 / 3 - m) * 6 : d;
  }
  if (t === 0)
    o = a = i = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    o = c(l, s, e + 1 / 3), a = c(l, s, e), i = c(l, s, e - 1 / 3);
  }
  return {
    r: o * 255,
    g: a * 255,
    b: i * 255
  };
}
function Gt(e, t, n) {
  e = Z(e, 255), t = Z(t, 255), n = Z(n, 255);
  var o = Math.max(e, t, n), a = Math.min(e, t, n), i, c, s = o, l = o - a;
  if (c = o === 0 ? 0 : l / o, o == a)
    i = 0;
  else {
    switch (o) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return {
    h: i,
    s: c,
    v: s
  };
}
function da(e, t, n) {
  e = Z(e, 360) * 6, t = Z(t, 100), n = Z(n, 100);
  var o = Math.floor(e), a = e - o, i = n * (1 - t), c = n * (1 - a * t), s = n * (1 - (1 - a) * t), l = o % 6, d = [n, c, i, i, s, n][l], u = [s, n, n, c, i, i][l], m = [i, i, s, n, n, c][l];
  return {
    r: d * 255,
    g: u * 255,
    b: m * 255
  };
}
function Yt(e, t, n, o) {
  var a = [ve(Math.round(e).toString(16)), ve(Math.round(t).toString(16)), ve(Math.round(n).toString(16))];
  return o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function ua(e, t, n, o, a) {
  var i = [ve(Math.round(e).toString(16)), ve(Math.round(t).toString(16)), ve(Math.round(n).toString(16)), ve(Zn(o))];
  return a && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Xt(e, t, n, o) {
  var a = [ve(Zn(o)), ve(Math.round(e).toString(16)), ve(Math.round(t).toString(16)), ve(Math.round(n).toString(16))];
  return a.join("");
}
L.equals = function(e, t) {
  return !e || !t ? !1 : L(e).toRgbString() == L(t).toRgbString();
};
L.random = function() {
  return L.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function pa(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = L(e).toHsl();
  return n.s -= t / 100, n.s = gt(n.s), L(n);
}
function ma(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = L(e).toHsl();
  return n.s += t / 100, n.s = gt(n.s), L(n);
}
function ha(e) {
  return L(e).desaturate(100);
}
function fa(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = L(e).toHsl();
  return n.l += t / 100, n.l = gt(n.l), L(n);
}
function ga(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = L(e).toRgb();
  return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), L(n);
}
function ba(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = L(e).toHsl();
  return n.l -= t / 100, n.l = gt(n.l), L(n);
}
function va(e, t) {
  var n = L(e).toHsl(), o = (n.h + t) % 360;
  return n.h = o < 0 ? 360 + o : o, L(n);
}
function ya(e) {
  var t = L(e).toHsl();
  return t.h = (t.h + 180) % 360, L(t);
}
function Kt(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var n = L(e).toHsl(), o = [L(e)], a = 360 / t, i = 1; i < t; i++)
    o.push(L({
      h: (n.h + i * a) % 360,
      s: n.s,
      l: n.l
    }));
  return o;
}
function xa(e) {
  var t = L(e).toHsl(), n = t.h;
  return [L(e), L({
    h: (n + 72) % 360,
    s: t.s,
    l: t.l
  }), L({
    h: (n + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function wa(e, t, n) {
  t = t || 6, n = n || 30;
  var o = L(e).toHsl(), a = 360 / n, i = [L(e)];
  for (o.h = (o.h - (a * t >> 1) + 720) % 360; --t; )
    o.h = (o.h + a) % 360, i.push(L(o));
  return i;
}
function ka(e, t) {
  t = t || 6;
  for (var n = L(e).toHsv(), o = n.h, a = n.s, i = n.v, c = [], s = 1 / t; t--; )
    c.push(L({
      h: o,
      s: a,
      v: i
    })), i = (i + s) % 1;
  return c;
}
L.mix = function(e, t, n) {
  n = n === 0 ? 0 : n || 50;
  var o = L(e).toRgb(), a = L(t).toRgb(), i = n / 100, c = {
    r: (a.r - o.r) * i + o.r,
    g: (a.g - o.g) * i + o.g,
    b: (a.b - o.b) * i + o.b,
    a: (a.a - o.a) * i + o.a
  };
  return L(c);
};
L.readability = function(e, t) {
  var n = L(e), o = L(t);
  return (Math.max(n.getLuminance(), o.getLuminance()) + 0.05) / (Math.min(n.getLuminance(), o.getLuminance()) + 0.05);
};
L.isReadable = function(e, t, n) {
  var o = L.readability(e, t), a, i;
  switch (i = !1, a = La(n), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      i = o >= 4.5;
      break;
    case "AAlarge":
      i = o >= 3;
      break;
    case "AAAsmall":
      i = o >= 7;
      break;
  }
  return i;
};
L.mostReadable = function(e, t, n) {
  var o = null, a = 0, i, c, s, l;
  n = n || {}, c = n.includeFallbackColors, s = n.level, l = n.size;
  for (var d = 0; d < t.length; d++)
    i = L.readability(e, t[d]), i > a && (a = i, o = L(t[d]));
  return L.isReadable(e, o, {
    level: s,
    size: l
  }) || !c ? o : (n.includeFallbackColors = !1, L.mostReadable(e, ["#fff", "#000"], n));
};
var Mt = L.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, _a = L.hexNames = Fa(Mt);
function Fa(e) {
  var t = {};
  for (var n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function qn(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Z(e, t) {
  Ca(e) && (e = "100%");
  var n = Sa(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function gt(e) {
  return Math.min(1, Math.max(0, e));
}
function ue(e) {
  return parseInt(e, 16);
}
function Ca(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function Sa(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function ve(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Xe(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function Zn(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Jt(e) {
  return ue(e) / 255;
}
var ge = (function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", n = "(?:" + t + ")|(?:" + e + ")", o = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?", a = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(n),
    rgb: new RegExp("rgb" + o),
    rgba: new RegExp("rgba" + a),
    hsl: new RegExp("hsl" + o),
    hsla: new RegExp("hsla" + a),
    hsv: new RegExp("hsv" + o),
    hsva: new RegExp("hsva" + a),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function Fe(e) {
  return !!ge.CSS_UNIT.exec(e);
}
function Ra(e) {
  e = e.replace(ia, "").replace(aa, "").toLowerCase();
  var t = !1;
  if (Mt[e])
    e = Mt[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var n;
  return (n = ge.rgb.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3]
  } : (n = ge.rgba.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3],
    a: n[4]
  } : (n = ge.hsl.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3]
  } : (n = ge.hsla.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3],
    a: n[4]
  } : (n = ge.hsv.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3]
  } : (n = ge.hsva.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3],
    a: n[4]
  } : (n = ge.hex8.exec(e)) ? {
    r: ue(n[1]),
    g: ue(n[2]),
    b: ue(n[3]),
    a: Jt(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ge.hex6.exec(e)) ? {
    r: ue(n[1]),
    g: ue(n[2]),
    b: ue(n[3]),
    format: t ? "name" : "hex"
  } : (n = ge.hex4.exec(e)) ? {
    r: ue(n[1] + "" + n[1]),
    g: ue(n[2] + "" + n[2]),
    b: ue(n[3] + "" + n[3]),
    a: Jt(n[4] + "" + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ge.hex3.exec(e)) ? {
    r: ue(n[1] + "" + n[1]),
    g: ue(n[2] + "" + n[2]),
    b: ue(n[3] + "" + n[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function La(e) {
  var t, n;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), n !== "small" && n !== "large" && (n = "small"), {
    level: t,
    size: n
  };
}
function Je(e) {
  return e.reduce((t, n, o) => {
    const a = L(n).toHsl(), i = `${a.h}deg, ${Math.round(a.s * 100)}%, ${Math.round(a.l * 100)}%`;
    return t[`--${$e[o] || "default"}`] = i, t;
  }, {});
}
function ze(e, t = 1) {
  const [n, o] = w(!1);
  return $(() => {
    if (e) {
      o(!0);
      const a = setTimeout(() => o(!1), t * 1e3);
      return () => clearTimeout(a);
    } else
      o(!1);
  }, [e, t]), n;
}
const Ea = "_container_62cx0_1", Ma = "_measure_62cx0_6", Ia = "_wrapper_62cx0_13", Ta = "_virtual_62cx0_19", Na = "_scale_62cx0_25", Ve = {
  container: Ea,
  measure: Ma,
  wrapper: Ia,
  virtual: Ta,
  scale: Na
};
function Aa(...e) {
  return e.filter(Boolean).join(" ");
}
function Ba(e) {
  const {
    className: t,
    Tag: n = "div",
    input: o,
    children: a,
    upscale: i = !1,
    contain: c = !1,
    style: s = {},
    ...l
  } = e, d = _(() => Aa(t, Ve.container), [t]), u = F(null), m = F(null), b = F(null), f = F(null), [p, h] = w(1), [k, C] = w(1), x = S(() => {
    if (!m.current || !f.current || !b.current)
      return;
    const y = f.current.clientWidth, E = f.current.clientHeight;
    if (!y || !E) {
      C(1), h(1);
      return;
    }
    const M = m.current.clientWidth / y, R = Number(
      (b.current.clientHeight / E).toFixed(3)
    ), T = c ? Math.min(M, R) : M;
    h(c ? 1 + Math.max(0, M - T) : M), !i && T >= 1 ? C(1) : C(Math.max(0.1, T));
  }, [c, i]);
  return yn(() => {
    if (!b.current || !m.current || !f.current)
      return;
    const y = new ResizeObserver(x);
    return y.observe(b.current), y.observe(m.current), y.observe(f.current), window.addEventListener("resize", x), x(), () => {
      y.disconnect(), window.removeEventListener("resize", x);
    };
  }, [x]), $(() => {
    var y;
    (y = u.current) != null && y.parentNode && u.current.parentNode.style.setProperty("--max-scale", String(p));
  }, [p]), /* @__PURE__ */ r(
    n,
    {
      ref: u,
      className: d,
      style: {
        "--scale": k,
        "--max-scale": p,
        ...s
      },
      ...l,
      children: /* @__PURE__ */ g("div", { ref: m, className: Ve.measure, children: [
        /* @__PURE__ */ r("div", { ref: b, className: Ve.wrapper, children: /* @__PURE__ */ r("div", { ref: f, className: Ve.virtual, children: o || a }) }),
        /* @__PURE__ */ r("div", { className: Ve.scale, children: a })
      ] })
    }
  );
}
const Oe = N(Ba), $a = "_container_1fggo_3", Ha = "_active_1fggo_18", Oa = "_contracted_1fggo_18", Da = "_compact_1fggo_53", Te = {
  container: $a,
  active: Ha,
  contracted: Oa,
  compact: Da
}, Pa = 0.2;
function za(e) {
  const { colors: t = [], isInteractive: n = !1, variant: o = "equal" } = e, a = F(null), i = _(
    () => /* @__PURE__ */ r(re, { children: t.map((s, l) => /* @__PURE__ */ r(
      "div",
      {
        style: { "--color": s, zIndex: -l }
      },
      l
    )) }),
    [t]
  );
  $(() => {
    const s = a.current ? Array.from(a.current.children) : [];
    let l = null;
    const d = () => {
      s.forEach((u) => {
        u.classList.remove(Te.active), u.classList.remove(Te.contracted);
      });
    };
    if (d(), n) {
      let u = 1;
      const m = () => {
        s.forEach((b, f) => {
          b.classList.toggle(Te.active, f === u), b.classList.toggle(Te.contracted, f < u);
        }), u >= s.length ? (l && clearInterval(l), d()) : u += 1;
      };
      m(), l = setInterval(m, Pa * 1e3);
    }
    return () => {
      l && clearInterval(l);
    };
  }, [n, t.length]);
  const c = o === "compact" ? `${Te.container} ${Te.compact}` : Te.container;
  return /* @__PURE__ */ r("div", { ref: a, className: c, children: i });
}
const Gn = N(za), ja = "_container_1mm99_3", Ua = "_shapePill_1mm99_26", Wa = "_shapeOval_1mm99_30", Va = "_shapeSquare_1mm99_34", qa = "_shapeUnderline_1mm99_38", Za = "_fill_1mm99_47", Ga = "_cardBackgroundMatch_1mm99_64", Ya = "_hover_1mm99_73", Xa = "_outer_1mm99_83", Ka = "_inner_1mm99_87", we = {
  container: ja,
  shapePill: Ua,
  shapeOval: Wa,
  shapeSquare: Va,
  shapeUnderline: qa,
  fill: Za,
  cardBackgroundMatch: Ga,
  hover: Ya,
  outer: Xa,
  inner: Ka
};
function Ja(...e) {
  return e.filter(Boolean).join(" ");
}
const Qa = {
  pill: we.shapePill,
  oval: we.shapeOval,
  square: we.shapeSquare,
  underline: we.shapeUnderline
};
function es(e) {
  const {
    children: t,
    className: n,
    fill: o,
    invert: a,
    outline: i,
    shape: c,
    primaryColor: s,
    primaryColorNoFill: l,
    borderRadius: d = ["0", "0", "0", "0"],
    fontWeight: u = 500,
    secondaryColor: m,
    secondaryColorNoFill: b,
    textTransform: f = "none",
    isHover: p = !1,
    ...h
  } = e, k = _(
    () => Ja(
      we.container,
      o && we.fill,
      c ? Qa[c] : void 0,
      p && we.hover
    ),
    [o, c, p]
  ), C = _(
    () => ({
      "--color-primary-hsl": o ? a ? m : s : l,
      "--color-secondary-hsl": o ? a ? s : m : b,
      "--border-width": i,
      "--border-radius": d.join(" ")
    }),
    [
      d,
      o,
      a,
      i,
      s,
      l,
      m,
      b
    ]
  ), x = _(
    () => `${n}_${f}_${u}`,
    [n, f, u]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: k,
      style: C,
      tabIndex: -1,
      ...h,
      children: [
        /* @__PURE__ */ r("div", { className: we.cardBackgroundMatch }),
        /* @__PURE__ */ r(ke, { className: we.outer, classNameContent: we.inner, children: /* @__PURE__ */ r(
          "span",
          {
            className: n,
            style: {
              textTransform: f,
              fontWeight: u
            },
            children: t
          },
          x
        ) })
      ]
    }
  );
}
const ct = N(es), ts = "_container_bx5fz_3", ns = "_heading_bx5fz_18", rs = "_text_bx5fz_33", os = "_swatch_bx5fz_38", is = "_button_bx5fz_43", as = "_swap_bx5fz_55", Ne = {
  container: ts,
  heading: ns,
  text: rs,
  swatch: os,
  button: is,
  swap: as
}, ss = 1.15, ls = 1.2, Qt = 0.04;
function cs(e) {
  const { color: t, fonts: n, buttons: o } = e, [a, i] = w(!1), c = ft(a, ss), s = ze(c, ls), l = _(() => {
    const b = (f, p) => `var(--${$e[(f || t.buttons)[p]]})`;
    return {
      primaryColor: b(t.buttons, 0),
      secondaryColor: b(t.buttons, 1),
      ...t.buttonsNoFill ? {
        primaryColorNoFill: b(t.buttonsNoFill, 0),
        secondaryColorNoFill: b(t.buttonsNoFill, 1)
      } : {
        primaryColorNoFill: b(t.buttons, 1),
        secondaryColorNoFill: b(t.buttons, 0)
      }
    };
  }, [t]), d = _(
    () => ({
      "--color-background": t.palette[t.background],
      "--color-heading": t.palette[t.headings]
    }),
    [t]
  ), u = _(
    () => Je(t.palette),
    [t]
  ), m = _(
    () => ({
      heading: n.headingFont.className,
      swatch: JSON.stringify(t.palette),
      button: JSON.stringify({ ...o.primary, fonts: n })
    }),
    [t.palette, o.primary, n]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: Ne.container,
      style: d,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: [
        /* @__PURE__ */ r("div", { className: Ne.heading, children: /* @__PURE__ */ r(Oe, { children: /* @__PURE__ */ r(ke, { classNameContent: Ne.text, children: /* @__PURE__ */ r("div", { className: n.headingFont.className, children: "Aa" }, m.heading) }) }) }),
        /* @__PURE__ */ r("div", { className: Ne.swatch, children: /* @__PURE__ */ r(ke, { className: Ne.swap, delayHide: Qt, children: /* @__PURE__ */ r(
          Gn,
          {
            colors: t.palette,
            isInteractive: a,
            variant: "compact"
          },
          m.swatch
        ) }) }),
        /* @__PURE__ */ r("div", { className: Ne.button, style: u, children: /* @__PURE__ */ r(
          ke,
          {
            className: Ne.swap,
            delayHide: Qt * 2,
            children: /* @__PURE__ */ r(Oe, { children: /* @__PURE__ */ r(
              ct,
              {
                className: n.paragraphFont.className,
                ...o.primary,
                ...l,
                isHover: s,
                children: "Button"
              }
            ) }, m.button)
          }
        ) })
      ]
    }
  );
}
const Yn = N(cs), ds = "_container_1brv3_3", us = "_hoverHeading_1brv3_16", ps = "_heading_1brv3_16", ms = "_paragraph_1brv3_21", hs = "_hoverParagraph_1brv3_26", fs = "_swap_1brv3_36", gs = "_text_1brv3_69", Re = {
  container: ds,
  hoverHeading: us,
  heading: ps,
  paragraph: ms,
  hoverParagraph: hs,
  swap: fs,
  text: gs
}, bs = 0.2, vs = 0.75, kt = bs + vs;
function _t(...e) {
  return e.filter(Boolean).join(" ");
}
function ys(e) {
  const { color: t, fonts: n } = e, [o, a] = w(!1), i = ft(o, kt), c = ze(o, kt), s = ze(i, kt), l = _(
    () => _t(
      Re.container,
      c && Re.hoverHeading,
      s && Re.hoverParagraph
    ),
    [c, s]
  ), d = _(
    () => ({
      "--color": t.palette[4]
    }),
    [t.palette]
  ), [u, m] = _(
    () => [
      _t(n.headingFont.className, Re.text),
      _t(n.paragraphFont.className, Re.text)
    ],
    [n.headingFont.className, n.paragraphFont.className]
  ), b = _(
    () => `${u}_${m}`,
    [u, m]
  );
  return /* @__PURE__ */ r(
    ke,
    {
      className: l,
      style: d,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: /* @__PURE__ */ g("div", { className: Re.swap, children: [
        /* @__PURE__ */ r("div", { className: Re.heading, children: /* @__PURE__ */ r(Oe, { upscale: !0, contain: !0, children: /* @__PURE__ */ r("div", { className: u, children: "Heading" }) }) }),
        /* @__PURE__ */ r("div", { className: Re.paragraph, children: /* @__PURE__ */ r(Oe, { children: /* @__PURE__ */ r("div", { className: m, children: "This is your paragraph." }) }) })
      ] }, b)
    }
  );
}
const Xn = N(ys), xs = "_container_1pxtn_3", ws = {
  container: xs
};
function ks(e) {
  const { color: t } = e, { palette: n } = t, [o, a] = w(!1), i = _(() => JSON.stringify(n), [n]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: ws.container,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: /* @__PURE__ */ r(ke, { children: /* @__PURE__ */ r(Gn, { colors: n, isInteractive: o }, i) })
    }
  );
}
const Kn = N(ks), _s = "_container_1j81e_3", Fs = "_interactive_1j81e_19", Cs = "_button_1j81e_19", Ss = "_primary_1j81e_23", Rs = "_secondary_1j81e_27", Ls = "_tertiary_1j81e_32", Es = "_buttons_1j81e_39", Ce = {
  container: _s,
  interactive: Fs,
  button: Cs,
  primary: Ss,
  secondary: Rs,
  tertiary: Ls,
  buttons: Es
}, Ms = 0.2, Is = 1.5;
function lt(...e) {
  return e.filter(Boolean).join(" ");
}
function Ts(e) {
  const { buttons: t, color: n, fonts: o } = e, [a, i] = w(!1), c = ze(
    a,
    Ms + Is
  ), s = _(
    () => JSON.stringify({ ...t, fonts: o }),
    [t, o]
  ), l = _(
    () => lt(Ce.container, c && Ce.interactive),
    [c]
  ), d = _(
    () => Je(n.palette),
    [n.palette]
  ), u = _(() => {
    const m = c ? "Primary" : "Button", b = (p, h) => `var(--${$e[(p || n.buttons)[h]]})`, f = {
      primaryColor: b(n.buttonsPreview, 0),
      secondaryColor: b(n.buttonsPreview, 1),
      primaryColorNoFill: b(n.buttonsNoFillPreview, 0),
      secondaryColorNoFill: b(n.buttonsNoFillPreview, 1)
    };
    return /* @__PURE__ */ g(re, { children: [
      /* @__PURE__ */ r(Oe, { className: lt(Ce.button, Ce.tertiary), children: /* @__PURE__ */ r(
        ct,
        {
          className: o.paragraphFont.className,
          ...t.tertiary,
          ...f,
          children: "Tertiary"
        }
      ) }),
      /* @__PURE__ */ r(Oe, { className: lt(Ce.button, Ce.secondary), children: /* @__PURE__ */ r(
        ct,
        {
          className: o.paragraphFont.className,
          ...t.secondary,
          ...f,
          children: "Secondary"
        }
      ) }),
      /* @__PURE__ */ r(Oe, { className: lt(Ce.button, Ce.primary), children: /* @__PURE__ */ r(
        ct,
        {
          className: o.paragraphFont.className,
          ...t.primary,
          ...f,
          children: m
        }
      ) })
    ] });
  }, [t, n, o.paragraphFont.className, c]);
  return /* @__PURE__ */ r(
    "div",
    {
      className: l,
      style: d,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ r(ke, { children: /* @__PURE__ */ r("div", { className: Ce.buttons, children: u }, s) })
    }
  );
}
const Jn = N(Ts), Ns = "_container_1i7v7_3", As = "_sizeSmall_1i7v7_20", Bs = "_inputFill_1i7v7_27", $s = "_input_1i7v7_27", Hs = "_optionFill_1i7v7_40", Os = "_option_1i7v7_40", Ds = "_inputShapePill_1i7v7_51", Ps = "_inputShapeSquare_1i7v7_55", zs = "_inputShapeUnderline_1i7v7_59", js = "_optionShapePill_1i7v7_67", Us = "_optionShapeSquare_1i7v7_71", Ws = "_optionShapeCircle_1i7v7_75", Vs = "_optionButton_1i7v7_81", qs = "_optionInvert_1i7v7_82", Zs = "_hoverInput_1i7v7_88", Gs = "_hoverOption_1i7v7_93", Ys = "_label_1i7v7_152", Q = {
  container: Ns,
  sizeSmall: As,
  inputFill: Bs,
  input: $s,
  optionFill: Hs,
  option: Os,
  inputShapePill: Ds,
  inputShapeSquare: Ps,
  inputShapeUnderline: zs,
  optionShapePill: js,
  optionShapeSquare: Us,
  optionShapeCircle: Ws,
  optionButton: Vs,
  optionInvert: qs,
  hoverInput: Zs,
  hoverOption: Gs,
  label: Ys
}, en = "Input field";
function Xs(e) {
  const { isInteractive: t, inputRate: n = 100 } = e, [o, a] = w(""), [i, c] = w(!1);
  return $(() => {
    if (t) {
      const s = en;
      let l = 0;
      const d = setInterval(() => {
        l <= s.length ? (a(s.substring(0, l)), c(!0), l++) : (c(!1), clearInterval(d));
      }, n);
      return () => clearInterval(d);
    } else
      a(en), c(!1);
  }, [t, n]), /* @__PURE__ */ g("span", { children: [
    o,
    i && "|"
  ] });
}
const Ks = N(Xs), Ft = 1;
function tn(...e) {
  return e.filter(Boolean).join(" ");
}
const Js = {
  pill: Q.inputShapePill,
  square: Q.inputShapeSquare,
  underline: Q.inputShapeUnderline
}, Qs = {
  pill: Q.optionShapePill,
  square: Q.optionShapeSquare,
  circle: Q.optionShapeCircle
};
function el() {
  return /* @__PURE__ */ r("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) });
}
function tl(e) {
  const {
    className: t,
    input: n,
    option: o,
    isInteractive: a = !1,
    size: i = "standard",
    primaryColor: c,
    secondaryColor: s,
    buttonPrimaryColor: l,
    buttonSecondaryColor: d
  } = e, u = ft(a, Ft), m = ze(a, Ft), b = ze(u, Ft), f = _(
    () => tn(
      t,
      Q.container,
      n.fill && Q.inputFill,
      m && Q.hoverInput,
      b && Q.hoverOption,
      o.button && Q.optionButton,
      o.fill && Q.optionFill,
      o.inverted && Q.optionInvert,
      Js[n.shape],
      Qs[o.shape],
      i === "small" && Q.sizeSmall
    ),
    [t, n, o, i, m, b]
  ), p = _(
    () => tn(Q.option, o.button && Q.label),
    [o.button]
  ), h = _(
    () => ({
      "--input-border-width": n.outline,
      "--input-border-radius": n.borderRadius.join(" "),
      "--option-border-width": o.outline,
      "--option-border-radius": o.borderRadius.join(" ")
    }),
    [n.borderRadius, n.outline, o.borderRadius, o.outline]
  ), k = _(
    () => ({
      "--color-primary-hsl": c,
      "--color-secondary-hsl": s
    }),
    [c, s]
  ), C = _(
    () => ({
      "--color-primary-hsl": l,
      "--color-secondary-hsl": d
    }),
    [l, d]
  );
  return /* @__PURE__ */ g("div", { className: f, style: h, children: [
    /* @__PURE__ */ r("div", { className: Q.input, style: k, children: /* @__PURE__ */ r(Ks, { isInteractive: a }) }),
    /* @__PURE__ */ r("div", { className: p, style: C, children: o.button ? "Option" : /* @__PURE__ */ r(el, {}) })
  ] });
}
const nl = N(tl), rl = "_container_8tn8q_3", ol = "_swap_8tn8q_12", il = "_form_8tn8q_16", Ct = {
  container: rl,
  swap: ol,
  form: il
};
function al(e) {
  const { form: t, color: n, fonts: o, previewSize: a = "standard" } = e, [i, c] = w(!1), s = _(
    () => JSON.stringify({ ...t, fonts: o }),
    [t, o]
  ), l = _(
    () => Je(n.palette),
    [n.palette]
  ), d = _(
    () => /* @__PURE__ */ r(
      nl,
      {
        className: o.paragraphFont.className,
        ...t,
        size: a,
        primaryColor: `var(--${$e[n.form[0]]})`,
        secondaryColor: `var(--${$e[n.form[1]]})`,
        buttonPrimaryColor: `var(--${$e[n.form[2]]})`,
        buttonSecondaryColor: `var(--${$e[n.form[3]]})`,
        isInteractive: i
      }
    ),
    [i, n.form, o.paragraphFont.className, t, a]
  );
  return /* @__PURE__ */ r(
    "div",
    {
      className: Ct.container,
      style: l,
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
      children: /* @__PURE__ */ r(ke, { className: Ct.swap, children: /* @__PURE__ */ r("div", { className: Ct.form, children: d }, s) })
    }
  );
}
const Qn = N(al), sl = "_container_1vsqd_3", ll = "_undocked_1vsqd_17", cl = "_hidden_1vsqd_21", dl = "_wrapper_1vsqd_21", ul = "_background_1vsqd_42", pl = "_backgroundBox_1vsqd_54", ml = "_box_1vsqd_62", hl = "_panel_1vsqd_78", fl = "_header_1vsqd_90", gl = "_body_1vsqd_108", bl = "_padding_1vsqd_123", vl = "_padBottom_1vsqd_128", yl = "_padTop_1vsqd_132", ae = {
  container: sl,
  undocked: ll,
  hidden: cl,
  wrapper: dl,
  background: ul,
  backgroundBox: pl,
  box: ml,
  panel: hl,
  header: fl,
  body: gl,
  padding: bl,
  padBottom: vl,
  padTop: yl
}, er = (...e) => e.filter(Boolean).join(" ");
function xl({ children: e }) {
  return /* @__PURE__ */ r("div", { className: ae.panel, children: e });
}
function wl({ children: e }) {
  return /* @__PURE__ */ r("div", { className: ae.header, children: e });
}
function kl({
  children: e,
  padding: t = !1,
  padTop: n = !1,
  padBottom: o = !0
}) {
  const a = _(
    () => er(
      ae.body,
      t && ae.padding,
      n && ae.padTop,
      o && ae.padBottom
    ),
    [t, n, o]
  );
  return /* @__PURE__ */ r("div", { className: a, children: e });
}
function _l({
  children: e,
  attachment: t,
  undocked: n = !1,
  isHidden: o = !1,
  mode: a = "light"
}) {
  const i = F(null), { isHidden: c } = ea(), s = o || c;
  $(() => {
    if (!(t != null && t.current) || !i.current) return;
    const u = 8, m = () => {
      const f = t.current, p = i.current;
      if (!f || !p) return;
      const h = f.getBoundingClientRect(), k = p.getBoundingClientRect(), C = window.innerWidth, x = window.innerHeight, y = k.width > 0 ? k.width : 320, E = k.height > 0 ? k.height : 0, M = h.right + u, R = h.left - y - u, T = M + y <= C - u, D = R >= u;
      let P;
      if (T)
        P = M;
      else if (D)
        P = R;
      else {
        const A = C - h.right, z = h.left;
        P = A >= z ? M : R;
      }
      P + y > C - u && (P = C - y - u), P < u && (P = u);
      let B = h.top;
      E > 0 && (B + E > x - u && (B = Math.max(u, x - E - u)), B < u && (B = u)), p.style.transform = `translate3d(${Math.round(P)}px, ${Math.round(B)}px, 0)`;
    };
    m();
    const b = requestAnimationFrame(m);
    return window.addEventListener("resize", m), window.addEventListener("scroll", m, !0), () => {
      cancelAnimationFrame(b), window.removeEventListener("resize", m), window.removeEventListener("scroll", m, !0);
    };
  }, [t]);
  const l = _(
    () => er(
      ae.container,
      n && ae.undocked,
      s && ae.hidden,
      ae[`mode-${a}`]
    ),
    [n, s, a]
  ), d = /* @__PURE__ */ r("dialog", { ref: i, className: l, open: !0, children: /* @__PURE__ */ g("div", { className: ae.wrapper, children: [
    /* @__PURE__ */ r("div", { className: ae.background, children: /* @__PURE__ */ r("div", { className: ae.backgroundBox }) }),
    /* @__PURE__ */ r("div", { className: ae.box, children: e })
  ] }) });
  return Ke(d, document.body);
}
const G = N(_l);
G.Panel = N(xl);
G.Header = N(wl);
G.Body = N(kl);
const Fl = "_container_17wzg_1", Cl = "_shimmer_17wzg_44", Sl = "_hover_17wzg_49", Rl = "_active_17wzg_53", Ll = "_fadeup_17wzg_62", El = "_content_17wzg_129", Ml = "_wrap_17wzg_138", Ae = {
  container: Fl,
  shimmer: Cl,
  hover: Sl,
  active: Rl,
  fadeup: Ll,
  content: El,
  wrap: Ml
}, Il = (...e) => e.filter(Boolean).join(" ");
function Tl({
  className: e,
  children: t,
  active: n = !1,
  shimmer: o = !0,
  wrap: a = !1,
  onClick: i,
  delayShow: c = 0,
  animateReveal: s = !1,
  ...l
}) {
  const [d, u] = w(!1), m = _(
    () => Il(
      e,
      Ae.container,
      d && Ae.hover,
      n && Ae.active,
      s && Ae.fadeup
    ),
    [e, d, n, s]
  ), b = S(() => {
    u(!0);
  }, []), f = S(() => {
    u(!1);
  }, []);
  return /* @__PURE__ */ g(
    "button",
    {
      className: m,
      onMouseEnter: b,
      onMouseLeave: f,
      onClick: (h) => {
        u(!1), i == null || i(h);
      },
      style: { "--animation-delay": `${c}s` },
      ...l,
      children: [
        /* @__PURE__ */ r("div", { className: Ae.content, children: a ? /* @__PURE__ */ r("div", { className: Ae.wrap, children: t }) : t }),
        o && /* @__PURE__ */ r("div", { className: Ae.shimmer, "aria-hidden": "true" })
      ]
    }
  );
}
const Qe = N(Tl), Nl = {
  display: "grid",
  gap: "11px"
}, Al = {
  display: "flex",
  width: "100%",
  height: "55px",
  alignItems: "center",
  alignSelf: "stretch",
  justifyContent: "center",
  padding: "16.5px 22px",
  border: "solid 1px var(--c-border)",
  borderRadius: "4px",
  background: "var(--c-bg)",
  cursor: "pointer",
  fontSize: "var(--s-font-sm)",
  fontWeight: 500,
  letterSpacing: "0.5px",
  lineHeight: "22px",
  textTransform: "uppercase"
};
function Bl({
  items: e,
  getItem: t,
  columns: n = 1,
  max: o = 8
}) {
  const [a, i] = w(!1), c = _(
    () => e.slice(0, o).map((m, b) => t(m, b)),
    [e, t, o]
  ), s = _(
    () => e.slice(o).map((m, b) => t(m, b + o)),
    [e, t, o]
  ), l = s.length > 0, d = S(
    (m) => {
      m.stopPropagation(), i((b) => !b);
    },
    []
  ), u = _(
    () => ({
      display: "grid",
      gap: "inherit",
      gridTemplateColumns: `repeat(${n}, 1fr)`
    }),
    [n]
  );
  return /* @__PURE__ */ g("div", { style: Nl, children: [
    /* @__PURE__ */ g("div", { style: u, children: [
      c,
      a && s
    ] }),
    l && /* @__PURE__ */ r("button", { style: Al, onClick: d, children: a ? "Show Less" : "Show All" })
  ] });
}
const et = N(Bl), nn = 1, $l = 0.04;
function Hl({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: o, themePacks: a, setPack: i } = Ee(), c = _(() => o.name, [o]), s = S(
    (l, d) => {
      const u = l.name, m = Math.floor(d / nn);
      return /* @__PURE__ */ r(
        Qe,
        {
          active: c === u,
          onClick: () => i(l),
          wrap: !0,
          delayShow: (m + 1) * $l,
          animateReveal: !0,
          children: /* @__PURE__ */ r(
            Yn,
            {
              color: l.color,
              fonts: l.fonts,
              buttons: l.buttons
            }
          )
        },
        `${u}_${d}`
      );
    },
    [c, i]
  );
  return /* @__PURE__ */ r(G, { attachment: e, undocked: t, children: /* @__PURE__ */ g(G.Panel, { children: [
    /* @__PURE__ */ r(G.Header, { children: "Themes" }),
    /* @__PURE__ */ r(G.Body, { padding: !0, children: /* @__PURE__ */ r(
      et,
      {
        items: a,
        getItem: s,
        columns: nn,
        max: 8
      }
    ) })
  ] }) });
}
const Ol = N(Hl), rn = 2, Dl = 0.04;
function Pl({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: o, fontPacks: a, setPack: i } = Ee(), c = _(
    () => `${o.fonts.headingFont.name}_${o.fonts.paragraphFont.name}`,
    [o]
  ), s = S(
    (l, d) => {
      const u = `${l.headingFont.name}_${l.paragraphFont.name}`, m = {
        ...o,
        fonts: { ...l }
      }, b = Math.floor(d / rn);
      return /* @__PURE__ */ r(
        Qe,
        {
          active: c === u,
          onClick: () => i(m),
          delayShow: (b + 1) * Dl,
          animateReveal: !0,
          children: /* @__PURE__ */ r(Xn, { color: m.color, fonts: l })
        },
        `${u}_${d}`
      );
    },
    [c, o, i]
  );
  return /* @__PURE__ */ r(G, { attachment: e, undocked: t, children: /* @__PURE__ */ g(G.Panel, { children: [
    /* @__PURE__ */ r(G.Header, { children: "Recommended Font Packs" }),
    /* @__PURE__ */ r(G.Body, { padding: !0, children: /* @__PURE__ */ r(
      et,
      {
        items: a,
        getItem: s,
        columns: rn,
        max: 8
      }
    ) })
  ] }) });
}
const zl = N(Pl), on = 2, jl = 0.04;
function Ul({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: o, colorPacks: a, setPack: i } = Ee(), c = _(
    () => JSON.stringify(o.color),
    [o]
  ), s = S(
    (l, d) => {
      const u = JSON.stringify(l), m = {
        ...o,
        color: { ...l }
      }, b = Math.floor(d / on);
      return /* @__PURE__ */ r(
        Qe,
        {
          active: c === u,
          onClick: () => i(m),
          delayShow: (b + 1) * jl,
          animateReveal: !0,
          children: /* @__PURE__ */ r(Kn, { color: l })
        },
        `${u}_${d}`
      );
    },
    [c, o, i]
  );
  return /* @__PURE__ */ r(G, { attachment: e, undocked: t, children: /* @__PURE__ */ g(G.Panel, { children: [
    /* @__PURE__ */ r(G.Header, { children: "Recommended Color Packs" }),
    /* @__PURE__ */ r(G.Body, { padding: !0, children: /* @__PURE__ */ r(
      et,
      {
        items: a,
        getItem: s,
        columns: on,
        max: 8
      }
    ) })
  ] }) });
}
const Wl = N(Ul), an = 2, Vl = 0.04;
function ql({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: o, buttonPacks: a, setPack: i } = Ee(), c = _(
    () => JSON.stringify(o.buttons),
    [o]
  ), s = S(
    (l, d) => {
      const u = JSON.stringify(l), m = {
        ...o,
        buttons: { ...l }
      }, b = Math.floor(d / an);
      return /* @__PURE__ */ r(
        Qe,
        {
          active: c === u,
          onClick: () => i(m),
          delayShow: (b + 1) * Vl,
          animateReveal: !0,
          children: /* @__PURE__ */ r(
            Jn,
            {
              buttons: l,
              color: m.color,
              fonts: m.fonts
            }
          )
        },
        `${u}_${d}`
      );
    },
    [c, o, i]
  );
  return /* @__PURE__ */ r(G, { attachment: e, undocked: t, children: /* @__PURE__ */ g(G.Panel, { children: [
    /* @__PURE__ */ r(G.Header, { children: "Recommended Button Packs" }),
    /* @__PURE__ */ r(G.Body, { padding: !0, children: /* @__PURE__ */ r(
      et,
      {
        items: a,
        getItem: s,
        columns: an,
        max: 8
      }
    ) })
  ] }) });
}
const Zl = N(ql), sn = 2, Gl = 0.04;
function Yl({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: o, formPacks: a, setPack: i } = Ee(), c = _(
    () => JSON.stringify(o.form),
    [o]
  ), s = S(
    (l, d) => {
      const u = JSON.stringify(l), m = {
        ...o,
        form: { ...l }
      }, b = Math.floor(d / sn);
      return /* @__PURE__ */ r(
        Qe,
        {
          active: c === u,
          onClick: () => i(m),
          delayShow: (b + 1) * Gl,
          animateReveal: !0,
          children: /* @__PURE__ */ r(
            Qn,
            {
              form: l,
              color: m.color,
              fonts: m.fonts,
              previewSize: "small"
            }
          )
        },
        `${u}_${d}`
      );
    },
    [c, o, i]
  );
  return /* @__PURE__ */ r(G, { attachment: e, undocked: t, children: /* @__PURE__ */ g(G.Panel, { children: [
    /* @__PURE__ */ r(G.Header, { children: "Recommended Form Packs" }),
    /* @__PURE__ */ r(G.Body, { padding: !0, children: /* @__PURE__ */ r(
      et,
      {
        items: a,
        getItem: s,
        columns: sn,
        max: 8
      }
    ) })
  ] }) });
}
const Xl = N(Yl), Kl = "_fadeup_1my1f_31", Jl = "_fadeoutdown_1my1f_36", ln = {
  fadeup: Kl,
  fadeoutdown: Jl
}, qe = !0, Ql = 0.15, ec = 0;
function tc({ depth: e = 0, isActive: t = !1 }) {
  const { userTheme: n } = Ee(), [o, a] = w(null), [i, c] = w(null), s = F(null), l = S(() => {
    s.current = null, c(null), a(null);
  }, []), d = S(
    (f, p) => {
      f.preventDefault(), f.stopPropagation();
      const k = { current: f.currentTarget };
      a(k), c((C) => {
        const x = C === p ? null : p;
        return s.current = x, x;
      });
    },
    []
  );
  $(() => {
    t || l();
  }, [t, l]), $(() => {
    if (!i) return;
    const f = (p) => {
      const h = p.target;
      if (!h) return;
      const k = document.querySelector("dialog[open]");
      if (k && k.contains(h)) return;
      const C = o == null ? void 0 : o.current;
      C && C.contains(h) || l();
    };
    return document.addEventListener("pointerdown", f, !0), () => {
      document.removeEventListener("pointerdown", f, !0);
    };
  }, [i, o, l]);
  const u = S(
    (f, p) => t ? f * 0.04 : (p - f) * 0.04,
    [t]
  ), m = S((f) => {
    l();
  }, [l]), b = _(() => o ? i === "themes" ? /* @__PURE__ */ r(
    Ol,
    {
      attachment: o,
      undocked: !0,
      onClose: () => m("themes")
    },
    "themes"
  ) : i === "fonts" ? /* @__PURE__ */ r(
    zl,
    {
      attachment: o,
      undocked: !0,
      onClose: () => m("fonts")
    },
    "fonts"
  ) : i === "colors" ? /* @__PURE__ */ r(
    Wl,
    {
      attachment: o,
      undocked: !0,
      onClose: () => m("colors")
    },
    "colors"
  ) : i === "buttons" ? /* @__PURE__ */ r(
    Zl,
    {
      attachment: o,
      undocked: !0,
      onClose: () => m("buttons")
    },
    "buttons"
  ) : i === "forms" ? /* @__PURE__ */ r(
    Xl,
    {
      attachment: o,
      undocked: !0,
      onClose: () => m("forms")
    },
    "forms"
  ) : null : null, [i, o, m]);
  return /* @__PURE__ */ g(Nt, { title: "Styles", depth: e, isActive: t, children: [
    /* @__PURE__ */ r(
      We,
      {
        label: "Themes",
        isShown: t,
        onClick: (f) => d(f, "themes"),
        active: i === "themes",
        wrap: !0,
        delayShow: u(0, 5),
        animateReveal: qe,
        children: /* @__PURE__ */ r(
          Yn,
          {
            color: n.color,
            fonts: n.fonts,
            buttons: n.buttons
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      We,
      {
        disclosure: "/config/site-styles/fonts",
        label: "Fonts",
        isShown: t,
        onClick: (f) => d(f, "fonts"),
        active: i === "fonts",
        delayShow: u(1, 5),
        animateReveal: qe,
        children: /* @__PURE__ */ r(Xn, { color: n.color, fonts: n.fonts })
      }
    ),
    /* @__PURE__ */ r(
      We,
      {
        disclosure: "/config/site-styles/colors",
        label: "Colors",
        isShown: t,
        onClick: (f) => d(f, "colors"),
        active: i === "colors",
        delayShow: u(2, 5),
        animateReveal: qe,
        children: /* @__PURE__ */ r(Kn, { color: n.color })
      }
    ),
    /* @__PURE__ */ r(
      We,
      {
        disclosure: "/config/site-styles/buttons",
        label: "Buttons",
        isShown: t,
        onClick: (f) => d(f, "buttons"),
        active: i === "buttons",
        delayShow: u(3, 5),
        animateReveal: qe,
        children: /* @__PURE__ */ r(
          Jn,
          {
            buttons: n.buttons,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      We,
      {
        disclosure: "/config/site-styles/forms",
        label: "Forms",
        isShown: t,
        onClick: (f) => d(f, "forms"),
        active: i === "forms",
        delayShow: u(4, 5),
        animateReveal: qe,
        children: /* @__PURE__ */ r(
          Qn,
          {
            form: n.form,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ g(
      "div",
      {
        className: t ? ln.fadeup : ln.fadeoutdown,
        style: { "--animation-delay": `${u(4, 5)}s` },
        children: [
          /* @__PURE__ */ r(Et, { label: "Animations", href: "/config/site-styles/animations" }),
          /* @__PURE__ */ r(Et, { label: "Spacing", href: "/config/site-styles/spacing" })
        ]
      }
    ),
    /* @__PURE__ */ r(
      ke,
      {
        animateFirst: !0,
        directionIn: "up",
        directionOut: "down",
        delayShow: ec,
        distance: 0.5,
        duration: Ql,
        useOpacity: !0,
        children: b
      }
    )
  ] });
}
const nc = N(tc), rc = "_container_qt49e_1", oc = "_active_qt49e_25", ic = "_heading_qt49e_29", ac = "_label_qt49e_37", sc = "_spacer_qt49e_46", Ze = {
  container: rc,
  active: oc,
  heading: ic,
  label: ac,
  spacer: sc
}, lc = (...e) => e.filter(Boolean).join(" ");
function cc({ theme: e, color: t, active: n = !1, onClick: o }) {
  const a = _(
    () => ({
      "--stc-bg": t.palette[e.roles.background],
      "--stc-text": t.palette[e.roles.text],
      "--stc-heading": t.palette[e.roles.heading]
    }),
    [t, e]
  );
  return /* @__PURE__ */ g(
    "button",
    {
      type: "button",
      className: lc(Ze.container, n && Ze.active),
      style: a,
      onClick: () => o == null ? void 0 : o(e),
      children: [
        /* @__PURE__ */ r("span", { className: Ze.heading, children: "Aa" }),
        /* @__PURE__ */ r("span", { className: Ze.label, children: e.name }),
        /* @__PURE__ */ r("span", { className: Ze.spacer })
      ]
    }
  );
}
const cn = N(cc), dc = "_paletteCard_3ijke_1", uc = "_paletteStrip_3ijke_12", pc = "_sectionHeader_3ijke_25", mc = "_label_3ijke_40", hc = "_themeList_3ijke_51", Be = {
  paletteCard: dc,
  paletteStrip: uc,
  sectionHeader: pc,
  label: mc,
  themeList: hc
};
function fc() {
  return /* @__PURE__ */ g("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ r("circle", { cx: "7", cy: "7", r: "6", stroke: "currentColor", strokeWidth: "1.2" }),
    /* @__PURE__ */ r("path", { d: "M7 6V10M7 4V4.01", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" })
  ] });
}
function gc({ depth: e = 0, isActive: t = !1 }) {
  const { userTheme: n, sectionThemes: o, getThemesInUse: a } = Ee(), i = _(() => typeof a != "function" ? [] : a(), [a]), c = _(() => new Set(i), [i]), { onPage: s, other: l } = _(() => {
    const d = [], u = [];
    for (const m of o)
      c.has(m.id) ? d.push(m) : u.push(m);
    return { onPage: d, other: u };
  }, [o, c]);
  return /* @__PURE__ */ g(Nt, { title: "Colors", depth: e, isActive: t, children: [
    /* @__PURE__ */ r("a", { href: "/config/site-styles", className: Be.paletteCard, children: /* @__PURE__ */ r("div", { className: Be.paletteStrip, children: n.color.palette.slice(0, 5).map((d, u) => /* @__PURE__ */ r("div", { style: { background: d } }, u)) }) }),
    /* @__PURE__ */ r(Et, { label: "Edit Palette", href: "/config/site-styles/colors/edit" }),
    /* @__PURE__ */ g("div", { className: Be.sectionHeader, children: [
      "Section color themes",
      /* @__PURE__ */ r(fc, {})
    ] }),
    s.length > 0 && /* @__PURE__ */ g(re, { children: [
      /* @__PURE__ */ r("div", { className: Be.label, children: "Color themes on this page" }),
      /* @__PURE__ */ r("div", { className: Be.themeList, children: s.map((d) => /* @__PURE__ */ r(cn, { theme: d, color: n.color }, d.id)) })
    ] }),
    l.length > 0 && /* @__PURE__ */ g(re, { children: [
      /* @__PURE__ */ r("div", { className: Be.label, children: s.length > 0 ? "Other color themes" : "All color themes" }),
      /* @__PURE__ */ r("div", { className: Be.themeList, children: l.map((d) => /* @__PURE__ */ r(cn, { theme: d, color: n.color }, d.id)) })
    ] })
  ] });
}
const bc = N(gc);
function vc({ title: e, depth: t = 0, isActive: n = !1 }) {
  return /* @__PURE__ */ r(Nt, { title: e, depth: t, isActive: n, children: /* @__PURE__ */ r(
    "div",
    {
      style: {
        padding: "48px 24px",
        textAlign: "center",
        color: "var(--rosetta-fg-muted, #888)",
        fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: 13,
        lineHeight: 1.6
      },
      children: "Coming soon."
    }
  ) });
}
const yc = N(vc), xc = "_container_goi2l_3", wc = "_backButton_goi2l_7", dn = {
  container: xc,
  backButton: wc
};
function kc() {
  return /* @__PURE__ */ r("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ r(
    "path",
    {
      d: "M1 1l6 6-6 6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
function _c(e) {
  return e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function Fc() {
  const { route: e, depth: t, onBack: n } = Ee(), o = _(() => {
    if (t === 0) return null;
    const a = _c(e[t] ?? "Back");
    return /* @__PURE__ */ g("button", { className: dn.backButton, onClick: n, children: [
      /* @__PURE__ */ r(kc, {}),
      a
    ] }, "back");
  }, [e, t, n]);
  return /* @__PURE__ */ r("div", { className: dn.container, children: /* @__PURE__ */ r(ke, { directionIn: "left", directionOut: "left", children: o }) });
}
const Cc = N(Fc), Sc = "_container_1anux_3", Rc = "_open_1anux_14", Lc = "_header_1anux_18", Ec = "_bar_1anux_31", Mc = "_body_1anux_38", Ic = "_panels_1anux_48", De = {
  container: Sc,
  open: Rc,
  header: Lc,
  bar: Ec,
  body: Mc,
  panels: Ic
};
function Tc(e) {
  return e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
const Nc = (...e) => e.filter(Boolean).join(" "), tr = xn(
  {}
), Ee = () => wn(tr);
function Ac({ isOpen: e, themeState: t, className: n, onClose: o }) {
  const a = F(null), i = ft(e, 0.01, 0.5), { route: c, depth: s, onBack: l } = mi(a, e), d = _(
    () => Nc(n, De.container, e && De.open),
    [n, e]
  ), u = _(
    () => ({
      ...t,
      route: c,
      depth: s,
      onBack: l
    }),
    [t, c, s, l]
  ), m = _(() => c.map((b, f) => {
    const p = s === f && e;
    return f === 0 ? /* @__PURE__ */ r(nc, { depth: f, isActive: p }, f) : b === "colors" ? /* @__PURE__ */ r(bc, { depth: f, isActive: p }, f) : /* @__PURE__ */ r(
      yc,
      {
        title: Tc(b ?? ""),
        depth: f,
        isActive: p
      },
      f
    );
  }), [c, s, e]);
  return /* @__PURE__ */ r(tr.Provider, { value: u, children: /* @__PURE__ */ r("div", { ref: a, className: d, children: i && /* @__PURE__ */ g(re, { children: [
    /* @__PURE__ */ r("div", { className: De.header, children: /* @__PURE__ */ g("div", { className: De.bar, style: { justifyContent: "flex-start" }, children: [
      o ? /* @__PURE__ */ r(
        "button",
        {
          onClick: o,
          style: {
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "22px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            color: "var(--rosetta-fg-muted)"
          },
          children: "Close"
        }
      ) : /* @__PURE__ */ r("span", {}),
      /* @__PURE__ */ r(Cc, {})
    ] }) }),
    /* @__PURE__ */ r("div", { className: De.body, children: /* @__PURE__ */ r(
      "div",
      {
        className: De.panels,
        style: { "--depth": s },
        children: m
      }
    ) })
  ] }) }) });
}
const xd = N(Ac), nr = {
  vibrant: [
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "square",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "square",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["1em", "0em", "1em", "0em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["1em", "0em", "1em", "0em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["1em", "1em", "0em", "0em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["1em", "1em", "0em", "0em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["vibrant"],
      primary: {
        fill: !0,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.25em", y: "0.75em" },
        outline: "2px",
        fontWeight: 500
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "0.75em" },
        outline: "2px",
        fontWeight: 500
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "2px"
      }
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !0,
        shape: "pill",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["neutral"],
      primary: {
        fill: !0,
        invert: !0,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      }
    }
  ],
  modern: [
    {
      packs: ["modern"],
      primary: {
        fill: !0,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        fontWeight: 600,
        textTransform: "uppercase"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        fontWeight: 600,
        textTransform: "uppercase"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        fontWeight: 600,
        textTransform: "uppercase"
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !0,
        shape: "underline",
        borderRadius: ["1em", "1em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        fontWeight: 600,
        textTransform: "uppercase"
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        fontWeight: 600,
        textTransform: "uppercase"
      },
      tertiary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        fontWeight: 600,
        textTransform: "uppercase"
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.2em", "0.2em", "0.2em", "0.2em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    },
    {
      packs: ["modern"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.75em", "0.75em", "0.75em", "0.75em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px",
        textTransform: "uppercase",
        fontWeight: 600
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px",
        textTransform: "uppercase",
        fontWeight: 600
      }
    }
  ],
  minimal: [
    {
      packs: ["minimal"],
      primary: {
        fill: !1,
        shape: "square",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !0,
        invert: !0,
        shape: "square",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !0,
        shape: "custom",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "custom",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !0,
        shape: "square",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "square",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    },
    {
      packs: ["minimal"],
      primary: {
        fill: !0,
        invert: !0,
        shape: "pill",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "pill",
        borderRadius: ["0.25em", "0.25em", "0.25em", "0.25em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.5em", y: "1em" },
        outline: "1px"
      }
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      primary: {
        fill: !0,
        shape: "oval",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "0px"
      },
      secondary: {
        fill: !1,
        shape: "oval",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "0px"
      }
    },
    {
      packs: ["adventurous"],
      primary: {
        fill: !1,
        shape: "oval",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      secondary: {
        fill: !1,
        shape: "oval",
        borderRadius: ["1em", "1em", "1em", "1em"],
        padding: { x: "1em", y: "0.75em" },
        outline: "1px"
      },
      tertiary: {
        fill: !1,
        shape: "underline",
        borderRadius: ["0em", "0em", "0em", "0em"],
        padding: { x: "1.25em", y: "1em" },
        outline: "1px"
      }
    }
  ]
}, un = Object.values(nr).flatMap((e) => e), Bc = (e, t) => nr[e][t], rr = {
  minimal: [
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#F5F5F5", "#D9D9D9", "#797979", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#EAEAEE", "#96B6D9", "#3270AA", "#303136"]
    },
    {
      packs: ["minimal"],
      background: 3,
      headings: 0,
      buttons: [0, 4],
      buttonsPreview: [4, 0],
      buttonsNoFill: [4, 0],
      buttonsNoFillPreview: [0, 4],
      form: [0, 2, 0, 2],
      palette: ["#FFFFFF", "#E1DFD9", "#209D50", "#1D231C", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 3,
      headings: 0,
      buttons: [0, 4],
      buttonsNoFill: [0, 2],
      form: [0, 2, 0, 2],
      palette: ["#FFFFFF", "#F8DFDB", "#FC221C", "#40140F", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#EBEAEB", "#BDB2C3", "#5C5751", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#F5F5F5", "#8DD9BF", "#28211E", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#E0E0DB", "#253551", "#2A2829", "#000000"]
    },
    {
      packs: ["minimal"],
      background: 1,
      headings: 4,
      buttons: [0, 4],
      buttonsNoFill: [0, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#DAD9D9", "#FF5E1A", "#282828", "#000000"]
    }
  ],
  vibrant: [
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FCF0F0", "#D1C8F4", "#AE9DEF", "#9B2929", "#531A4A"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#EAE6DD", "#EDD286", "#7BB5B2", "#34659B", "#2D2D2A"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#E5E9FD", "#BEE7E7", "#7FE8FF", "#149B9B", "#4C2929"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#B3C3CF", "#EAEC78", "#8D4E2F", "#000000"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      buttonsNoFill: [4, 1],
      form: [0, 4, 0, 4],
      palette: ["#EAE6DD", "#F0CD5F", "#DA5B37", "#4277B0", "#2D2D2A"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      buttonsNoFill: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#E5E9FD", "#F598FF", "#94ABF9", "#171D3A"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#E1DFD9", "#209D50", "#1D231C", "#000000"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#EBEAEB", "#BDB2C3", "#5C5751", "#000000"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [0, 2],
      buttonsNoFill: [0, 2],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#FFDD03", "#FA4238", "#F4F1E0", "#000000"]
    },
    {
      packs: ["vibrant"],
      background: 3,
      headings: 2,
      buttons: [0, 2],
      buttonsNoFill: [0, 2],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#F6E08B", "#1E5BD3", "#FBF5F1", "#000000"]
    },
    {
      packs: ["vibrant"],
      background: 4,
      headings: 1,
      body: 0,
      buttons: [1, 3],
      buttonsNoFill: [0, 2],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#00FFFF", "#FF00FF", "#1a1a24", "#050508"]
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [3, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#F6F3EC", "#ECE4DA", "#BBA893", "#574C3F", "#36302A"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#DCD9D0", "#D4967D", "#495A58", "#3F4A49"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 4],
      buttonsNoFillPreview: [3, 4],
      form: [0, 4, 0, 4],
      palette: ["#FEFFE9", "#FFFDC1", "#DFE777", "#B8BC7F", "#2E3105"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#F3EDE5", "#E5DCCE", "#D9B783", "#9A5151", "#714B4B"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FBFBFB", "#E8E8E8", "#D0CDC8", "#817A7A", "#5E5858"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#EAE6E1", "#E5E0DA", "#C2BFCB", "#7E7B46", "#583B1F"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 0],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#E7D9CB", "#C2C8CC", "#3D4435", "#000000"]
    },
    {
      packs: ["neutral"],
      background: 1,
      headings: 4,
      buttons: [2, 3],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#E7E4D6", "#E7A6D4", "#ECF250", "#665E30", "#2B2C29"]
    }
  ],
  modern: [
    {
      packs: ["modern"],
      background: 1,
      headings: 4,
      buttons: [2, 4],
      buttonsNoFill: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#F4F3E8", "#F5F374", "#7F9FEB", "#404D67"]
    },
    {
      packs: ["modern"],
      background: 3,
      headings: 4,
      buttons: [2, 4],
      buttonsNoFill: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#F4F3E8", "#E6DCC8", "#EBFC72", "#AEC0AB", "#212E21"]
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      background: 1,
      headings: 4,
      buttons: [3, 0],
      buttonsNoFill: [2, 3],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#F4F2EA", "#EFF483", "#DFEFFF", "#E24A39", "#184027"]
    },
    {
      packs: ["adventurous"],
      background: 1,
      headings: 4,
      buttons: [3, 0],
      buttonsNoFill: [2, 3],
      buttonsNoFillPreview: [2, 3],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#B3C3CF", "#EAEC78", "#8D4E30", "#000000"]
    },
    {
      packs: ["adventurous"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#F4F4F3", "#7877E6", "#4F4F4F", "#000000"]
    },
    {
      packs: ["adventurous"],
      background: 2,
      headings: 4,
      buttons: [1, 4],
      buttonsNoFill: [1, 4],
      buttonsNoFillPreview: [1, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#FFCF5A", "#F2B8B4", "#B564F7", "#000000"]
    },
    {
      packs: ["adventurous"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#EBEAEB", "#BDB2C3", "#5C5751", "#000000"]
    },
    {
      packs: ["adventurous"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#E1DFD9", "#CFFF81", "#081F34", "#000000"]
    },
    {
      packs: ["adventurous"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#FFFFFF", "#D291F1", "#AEDF1A", "#DD733F", "#121211"]
    },
    {
      packs: ["adventurous"],
      background: 3,
      headings: 2,
      buttons: [2, 4],
      form: [0, 4, 0, 4],
      palette: ["#F7F6F3", "#FFE974", "#E55937", "#BD005B", "#121211"]
    }
  ]
}, pn = Object.values(rr).flatMap((e) => e), $c = (e, t) => rr[e][t];
function j(e, t, n = 400, o) {
  return {
    name: e,
    style: {
      fontFamily: `'${t}', sans-serif`,
      fontWeight: n,
      fontStyle: "normal"
    },
    className: e.toLowerCase().replace(/\s+/g, "-"),
    googleFontsQuery: o
  };
}
function ie(e, t, n = 400, o) {
  return {
    name: e,
    style: {
      fontFamily: `'${t}', serif`,
      fontWeight: n,
      fontStyle: "normal"
    },
    className: e.toLowerCase().replace(/\s+/g, "-"),
    googleFontsQuery: o
  };
}
const v = {
  // Vibrant heading fonts
  shrikhand: j("Shrikhand", "Shrikhand", 400, "Shrikhand:wght@400"),
  concertone: j("Concert One", "Concert One", 400, "Concert+One:wght@400"),
  youngserif: ie("Young Serif", "Young Serif", 400, "Young+Serif:wght@400"),
  capriola: j("Capriola", "Capriola", 400, "Capriola:wght@400"),
  lilitaone: j("Lilita One", "Lilita One", 400, "Lilita+One:wght@400"),
  trocchi: ie("Trocchi", "Trocchi", 400, "Trocchi:wght@400"),
  averiaseriflibre: ie("Averia Serif Libre", "Averia Serif Libre", 400, "Averia+Serif+Libre:wght@400"),
  agbalumo: j("Agbalumo", "Agbalumo", 400, "Agbalumo:wght@400"),
  bungee: j("Bungee", "Bungee", 400, "Bungee:wght@400"),
  bebasneue: j("Bebas Neue", "Bebas Neue", 400, "Bebas+Neue:wght@400"),
  // Vibrant body fonts
  bitter: ie("Bitter", "Bitter", 400, "Bitter:wght@400"),
  syne: j("Syne", "Syne", 400, "Syne:wght@400;800"),
  ibmplexmono: j("IBM Plex Mono", "IBM Plex Mono", 400, "IBM+Plex+Mono:wght@400"),
  spacegrotesk: j("Space Grotesk", "Space Grotesk", 400, "Space+Grotesk:wght@400"),
  spacemono: j("Space Mono", "Space Mono", 400, "Space+Mono:wght@400"),
  silkscreen: j("Silkscreen", "Silkscreen", 400, "Silkscreen:wght@400"),
  // Neutral heading fonts
  librebaskerville: ie("Libre Baskerville", "Libre Baskerville", 400, "Libre+Baskerville:wght@400"),
  tenorsans: j("Tenor Sans", "Tenor Sans", 400, "Tenor+Sans:wght@400"),
  marcellus: ie("Marcellus", "Marcellus", 400, "Marcellus:wght@400"),
  alice: ie("Alice", "Alice", 400, "Alice:wght@400"),
  neuton: ie("Neuton", "Neuton", 400, "Neuton:wght@400"),
  newsreader: ie("Newsreader", "Newsreader", 400, "Newsreader:wght@400"),
  ovo: ie("Ovo", "Ovo", 400, "Ovo:wght@400"),
  // Neutral body fonts
  almarai: j("Almarai", "Almarai", 400, "Almarai:wght@400"),
  pontanosans: j("Pontano Sans", "Pontano Sans", 400, "Pontano+Sans:wght@400"),
  ptserif: ie("PT Serif", "PT Serif", 400, "PT+Serif:wght@400"),
  // Modern fonts
  asap: j("Asap", "Asap", 400, "Asap:wght@400;600"),
  sansita: j("Sansita", "Sansita", 400, "Sansita:wght@400"),
  nunitosans: j("Nunito Sans", "Nunito Sans", 400, "Nunito+Sans:wght@400;600"),
  comfortaa: j("Comfortaa", "Comfortaa", 400, "Comfortaa:wght@400"),
  worksans: j("Work Sans", "Work Sans", 400, "Work+Sans:wght@400"),
  rubik: j("Rubik", "Rubik", 400, "Rubik:wght@400"),
  // Minimal fonts
  manrope: j("Manrope", "Manrope", 400, "Manrope:wght@400;700"),
  poppins: j("Poppins", "Poppins", 400, "Poppins:wght@400;600"),
  urbanist: j("Urbanist", "Urbanist", 400, "Urbanist:wght@400;700"),
  instrumentserif: ie("Instrument Serif", "Instrument Serif", 400, "Instrument+Serif:wght@400"),
  familjengrotesk: j("Familjen Grotesk", "Familjen Grotesk", 400, "Familjen+Grotesk:wght@400"),
  arimo: j("Arimo", "Arimo", 400, "Arimo:wght@400"),
  archivo: j("Archivo", "Archivo", 400, "Archivo:wght@400;700"),
  gildadisplay: ie("Gilda Display", "Gilda Display", 400, "Gilda+Display:wght@400"),
  oswald: j("Oswald", "Oswald", 400, "Oswald:wght@400;700"),
  epilogue: j("Epilogue", "Epilogue", 400, "Epilogue:wght@400;700"),
  // Adventurous fonts
  climatecrisis: j("Climate Crisis", "Climate Crisis", 400, "Climate+Crisis:wght@400"),
  ultra: ie("Ultra", "Ultra", 400, "Ultra:wght@400"),
  modak: j("Modak", "Modak", 400, "Modak:wght@400"),
  goblinone: j("Goblin One", "Goblin One", 400, "Goblin+One:wght@400"),
  delagothicone: j("Dela Gothic One", "Dela Gothic One", 400, "Dela+Gothic+One:wght@400"),
  archivoblack: j("Archivo Black", "Archivo Black", 400, "Archivo+Black:wght@400"),
  coiny: j("Coiny", "Coiny", 400, "Coiny:wght@400")
}, or = {
  minimal: [
    {
      packs: ["minimal"],
      headingFont: v.manrope,
      paragraphFont: v.poppins
    },
    {
      packs: ["minimal"],
      headingFont: v.urbanist,
      paragraphFont: v.poppins
    },
    {
      packs: ["minimal"],
      headingFont: v.instrumentserif,
      paragraphFont: v.newsreader
    },
    {
      packs: ["minimal"],
      headingFont: v.familjengrotesk,
      paragraphFont: v.arimo
    },
    {
      packs: ["minimal"],
      headingFont: v.archivo,
      paragraphFont: v.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: v.gildadisplay,
      paragraphFont: v.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: v.oswald,
      paragraphFont: v.arimo
    },
    {
      packs: ["minimal"],
      headingFont: v.epilogue,
      paragraphFont: v.poppins
    }
  ],
  vibrant: [
    {
      packs: ["vibrant"],
      headingFont: v.shrikhand,
      paragraphFont: v.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: v.concertone,
      paragraphFont: v.syne
    },
    {
      packs: ["vibrant"],
      headingFont: v.youngserif,
      paragraphFont: v.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: v.capriola,
      paragraphFont: v.syne
    },
    {
      packs: ["vibrant"],
      headingFont: v.lilitaone,
      paragraphFont: v.ibmplexmono
    },
    {
      packs: ["vibrant"],
      headingFont: v.trocchi,
      paragraphFont: v.syne
    },
    {
      packs: ["vibrant"],
      headingFont: v.averiaseriflibre,
      paragraphFont: v.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: v.agbalumo,
      paragraphFont: v.ptserif
    },
    {
      packs: ["vibrant"],
      headingFont: v.bungee,
      paragraphFont: v.spacegrotesk
    },
    {
      packs: ["vibrant"],
      headingFont: v.bebasneue,
      paragraphFont: v.familjengrotesk
    },
    {
      packs: ["vibrant"],
      headingFont: {
        name: "neue-haas-grotesk-display",
        style: {
          fontFamily: "'neue-haas-grotesk-display'",
          fontWeight: 700,
          fontStyle: "normal"
        },
        className: "neue-haas-grotesk-display"
      },
      paragraphFont: {
        name: "neue-haas-grotesk-text",
        style: {
          fontFamily: "'neue-haas-grotesk-text'",
          fontWeight: 700,
          fontStyle: "normal"
        },
        className: "neue-haas-grotesk-text"
      }
    },
    {
      packs: ["vibrant"],
      headingFont: {
        name: "AlkalineCaps",
        style: {
          fontFamily: "'AlkalineCaps'",
          fontWeight: 700,
          fontStyle: "normal"
        },
        className: "AlkalineCaps"
      },
      paragraphFont: v.poppins
    },
    {
      packs: ["vibrant"],
      headingFont: {
        ...v.syne,
        style: {
          ...v.syne.style,
          fontWeight: 800
        }
      },
      paragraphFont: v.spacemono,
      headerFont: v.silkscreen
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      headingFont: v.librebaskerville,
      paragraphFont: v.almarai
    },
    {
      packs: ["neutral"],
      headingFont: v.tenorsans,
      paragraphFont: v.pontanosans
    },
    {
      packs: ["neutral"],
      headingFont: v.marcellus,
      paragraphFont: v.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: v.alice,
      paragraphFont: v.almarai
    },
    {
      packs: ["neutral"],
      headingFont: v.neuton,
      paragraphFont: v.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: v.newsreader,
      paragraphFont: v.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: v.ovo,
      paragraphFont: v.almarai
    },
    {
      packs: ["neutral"],
      headingFont: v.epilogue,
      paragraphFont: v.pontanosans
    }
  ],
  modern: [
    {
      packs: ["modern"],
      headingFont: v.asap,
      paragraphFont: v.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: v.comfortaa,
      paragraphFont: v.worksans
    },
    {
      packs: ["modern"],
      headingFont: v.sansita,
      paragraphFont: v.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: v.rubik,
      paragraphFont: v.nunitosans
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      headingFont: v.climatecrisis,
      paragraphFont: v.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: v.ultra,
      paragraphFont: v.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: v.modak,
      paragraphFont: v.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: v.modak,
      paragraphFont: v.familjengrotesk
    },
    {
      packs: ["adventurous"],
      headingFont: v.goblinone,
      paragraphFont: v.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: v.delagothicone,
      paragraphFont: v.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: v.archivoblack,
      paragraphFont: v.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: v.coiny,
      paragraphFont: v.familjengrotesk
    }
  ]
}, mn = Object.values(or).flatMap((e) => e), Hc = (e, t) => or[e][t], ir = {
  vibrant: [
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !0,
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "square",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !0,
        fill: !0,
        shape: "square",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "circle",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["1em", "0em", "1em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "underline",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["vibrant"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["neutral"],
      input: {
        fill: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !1,
        inverted: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["neutral"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !1,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["neutral"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["neutral"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["neutral"],
      input: {
        fill: !0,
        shape: "underline",
        outline: "0px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    }
  ],
  modern: [
    {
      packs: ["modern"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "0px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["modern"],
      input: {
        fill: !1,
        shape: "pill",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !1,
        inverted: !1,
        shape: "circle",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["modern"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["modern"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["modern"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "pill",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["modern"],
      input: {
        fill: !0,
        shape: "underline",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    }
  ],
  minimal: [
    {
      packs: ["minimal"],
      input: {
        fill: !1,
        shape: "underline",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "square",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["minimal"],
      input: {
        fill: !0,
        shape: "square",
        outline: "0px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["minimal"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["minimal"],
      input: {
        fill: !1,
        shape: "square",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !1,
        inverted: !1,
        shape: "square",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["minimal"],
      input: {
        fill: !0,
        shape: "underline",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "square",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["minimal"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "0px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !0,
        fill: !0,
        inverted: !1,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !0,
        fill: !0,
        shape: "pill",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "square",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      },
      option: {
        button: !0,
        fill: !0,
        shape: "square",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "circle",
        outline: "1px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    },
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["1em", "0em", "1em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        shape: "custom",
        outline: "1px",
        borderRadius: ["0.5em", "0.5em", "0.5em", "0.5em"]
      }
    },
    {
      packs: ["adventurous"],
      input: {
        fill: !0,
        shape: "underline",
        outline: "1px",
        borderRadius: ["0em", "0em", "0em", "0em"]
      },
      option: {
        button: !1,
        fill: !0,
        inverted: !0,
        shape: "circle",
        outline: "0px",
        borderRadius: ["1em", "1em", "1em", "1em"]
      }
    }
  ]
}, hn = Object.values(ir).flatMap((e) => e), Oc = (e, t) => ir[e][t];
function Ge(e, t) {
  return Array.from({ length: t.colors }, (n, o) => ({
    pack: e,
    name: `${e}_${String(o + 1).padStart(2, "0")}`,
    color: $c(e, o),
    buttons: Bc(e, o % t.buttons),
    form: Oc(e, o % t.forms),
    fonts: Hc(e, o % t.fonts)
  }));
}
const fn = [
  // Default: matches the current Clarkson/pink site design.
  // Updated to match the prod vendor output: filled square primary buttons,
  // uppercase text transform, preview indices for filled/unfilled state swaps.
  {
    pack: "custom",
    name: "clarkson_pink",
    color: {
      packs: ["custom"],
      palette: ["#FFFFFF", "#e8b4b3", "#c48988", "#8b5e5d", "#000000"],
      background: 2,
      headings: 0,
      buttons: [0, 2],
      buttonsNoFill: [0, 3],
      buttonsPreview: [2, 0],
      buttonsNoFillPreview: [0, 3],
      form: [0, 4, 0, 4]
    },
    fonts: {
      packs: ["custom"],
      headingFont: {
        name: "Clarkson",
        style: { fontFamily: "'Clarkson', Helvetica, sans-serif", fontWeight: 500, fontStyle: "normal" },
        className: "clarkson"
      },
      paragraphFont: {
        name: "Clarkson",
        style: { fontFamily: "'Clarkson', Helvetica, sans-serif", fontWeight: 400, fontStyle: "normal" },
        className: "clarkson"
      }
    },
    buttons: {
      packs: ["custom"],
      primary: { fill: !0, shape: "square", borderRadius: ["0em", "0em", "0em", "0em"], padding: { x: "1.5em", y: "1em" }, outline: "0px", textTransform: "uppercase", fontWeight: 400 },
      secondary: { fill: !1, shape: "square", borderRadius: ["0em", "0em", "0em", "0em"], padding: { x: "1.5em", y: "1em" }, outline: "1px", textTransform: "uppercase", fontWeight: 400 },
      tertiary: { fill: !1, shape: "underline", borderRadius: ["0em", "0em", "0em", "0em"], padding: { x: "1.5em", y: "1em" }, outline: "0px", textTransform: "uppercase", fontWeight: 400 }
    },
    form: {
      packs: ["custom"],
      input: { fill: !1, shape: "underline", outline: "1px", borderRadius: ["0em", "0em", "0em", "0em"] },
      option: { button: !1, fill: !1, shape: "square", outline: "1px", borderRadius: ["0em", "0em", "0em", "0em"] }
    }
  },
  // Recommended color packs — one ThemePack per palette in each group of
  // Adam Hartwig's Site Themes library. The DialogThemes popover renders
  // every entry in this array, so expanding the groups here is how we expose
  // the full palette library to users.
  ...Ge("minimal", { colors: 8, buttons: 8, fonts: 8, forms: 6 }),
  ...Ge("vibrant", { colors: 11, buttons: 9, fonts: 13, forms: 7 }),
  ...Ge("neutral", { colors: 8, buttons: 8, fonts: 8, forms: 6 }),
  ...Ge("modern", { colors: 2, buttons: 8, fonts: 4, forms: 6 }),
  ...Ge("adventurous", { colors: 8, buttons: 2, fonts: 8, forms: 6 })
];
function ar(e, t = Le) {
  if (e.length < 5)
    throw new Error(
      `emitSectionThemeCSS expects a palette with at least 5 colors, got ${e.length}`
    );
  const [n, o, a, i, c] = e, s = t.find((f) => f.id === ra) ?? t[0], l = Je(e), d = Object.entries(l).map(([f, p]) => `  ${f}: ${p};`).join(`
`), u = `
:root {
  /* 5 palette role tokens — the source of truth for section themes */
  --palette-white:        ${n};
  --palette-light-accent: ${o};
  --palette-accent:       ${a};
  --palette-dark-accent:  ${i};
  --palette-black:        ${c};

  /* HSL aliases — derived from the palette so consumers that use
     hsl(var(--accent-hsl)) etc. stay in sync with the live colors. */
${d}

  /* Default section theme (${s.name}) applied to the document root */
  --theme-bg:          ${e[s.roles.background]};
  --theme-text:        ${e[s.roles.text]};
  --theme-heading:     ${e[s.roles.heading]};
  --theme-accent:      ${e[s.roles.accent]};
  --theme-button-bg:   ${e[s.roles.buttonBg]};
  --theme-button-text: ${e[s.roles.buttonText]};
  --theme-border:      ${e[s.roles.border]};
  --theme-muted:       ${e[s.roles.muted]};
}`.trim(), m = t.map((f) => {
    const p = f.roles;
    return `[data-section-theme="${f.id}"] {
  --theme-bg:          ${e[p.background]};
  --theme-text:        ${e[p.text]};
  --theme-heading:     ${e[p.heading]};
  --theme-accent:      ${e[p.accent]};
  --theme-button-bg:   ${e[p.buttonBg]};
  --theme-button-text: ${e[p.buttonText]};
  --theme-border:      ${e[p.border]};
  --theme-muted:       ${e[p.muted]};
}`;
  }).join(`
`), b = `
[data-section-theme] {
  background: var(--theme-bg);
  color: var(--theme-text);
}
[data-section-theme] h1,
[data-section-theme] h2,
[data-section-theme] h3,
[data-section-theme] h4,
[data-section-theme] h5,
[data-section-theme] h6 {
  color: var(--theme-heading);
}
[data-section-theme] a {
  color: var(--theme-accent);
}`.trim();
  return `${u}

${m}

${b}
`;
}
function wd(e, t = Le) {
  return `<style id="section-themes-css">
${ar(e, t)}
</style>`;
}
function sr(e) {
  const t = St(".button-primary.button-primary", e.primary), n = St(".button-secondary.button-secondary", e.secondary), o = St(".button-tertiary.button-tertiary", e.tertiary), a = `
.button-primary.button-primary:focus-visible,
.button-secondary.button-secondary:focus-visible,
.button-tertiary.button-tertiary:focus-visible {
  outline: 2px solid var(--theme-button-bg);
  outline-offset: 2px;
}`.trim();
  return `${t}

${n}

${o}

${a}
`;
}
function St(e, t) {
  return t.shape === "underline" ? Pc(e, t) : Dc(e, t);
}
function Dc(e, t) {
  const { fill: n, padding: o, outline: a, fontWeight: i, textTransform: c } = t, s = zc(t), l = jc(a), d = n ? `  background: var(--theme-button-bg);
  color: var(--theme-button-text);
  border-color: var(--theme-button-bg);` : `  background: transparent;
  color: var(--theme-button-bg);
  border-color: var(--theme-button-bg);`;
  return `${e} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  transition: background 180ms, color 180ms, border-color 180ms;
  padding: ${o.y} ${o.x};
  border-radius: ${s};
  ${l}
  font-weight: ${i ?? "inherit"};
  text-transform: ${c ?? "none"};
${d}
}`;
}
function Pc(e, t) {
  const { padding: n, outline: o, fontWeight: a, textTransform: i } = t, c = lr(o);
  return `${e} {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  background: transparent;
  color: var(--theme-button-bg);
  border: none;
  border-bottom: ${c} solid currentColor;
  border-radius: 0;
  padding: ${n.y} 0;
  font-weight: ${a ?? "inherit"};
  text-transform: ${i ?? "none"};
  text-decoration: none;
  transition: color 180ms, border-color 180ms;
}`;
}
function zc(e) {
  switch (e.shape) {
    case "pill":
    case "oval":
      return "9999px";
    case "square":
      return "0";
    case "custom":
      return e.borderRadius.join(" ") || "0";
    default:
      return "0";
  }
}
function jc(e) {
  const t = lr(e);
  return t === "0" || t === "0px" || t === "" ? "border: none;" : `border: ${t} solid currentColor;`;
}
function lr(e) {
  const t = e.trim();
  return t === "" ? "0" : t;
}
function kd(e) {
  return `<style id="button-pack-css">
${sr(e)}
</style>`;
}
const gn = /* @__PURE__ */ new Set();
function Uc(e) {
  if (!e || gn.has(e)) return;
  gn.add(e);
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = `https://fonts.googleapis.com/css2?family=${e}&display=swap`, document.head.appendChild(t);
}
function Wc(e) {
  e.forEach((t) => {
    t.googleFontsQuery && Uc(t.googleFontsQuery);
  });
}
const bn = "section-themes-css", vn = "button-pack-css";
function _d() {
  const [e, t] = w({ ...fn[0] }), [n, o] = w({}), { themePacks: a, fontPacks: i, colorPacks: c, buttonPacks: s, formPacks: l } = _(() => {
    const p = e.pack, h = mn.filter((y) => y.packs.includes(p)), k = pn.filter((y) => y.packs.includes(p)), C = un.filter((y) => y.packs.includes(p)), x = hn.filter((y) => y.packs.includes(p));
    return {
      themePacks: fn,
      fontPacks: h.length > 0 ? h : mn,
      colorPacks: k.length > 0 ? k : pn,
      buttonPacks: C.length > 0 ? C : un,
      formPacks: x.length > 0 ? x : hn
    };
  }, [e]), d = S((p) => {
    t({ ...p });
  }, []), u = S((p, h) => {
    o((k) => k[p] === h ? k : { ...k, [p]: h });
  }, []), m = S((p) => {
    o((h) => {
      if (!(p in h)) return h;
      const k = { ...h };
      return delete k[p], k;
    });
  }, []), b = S(
    (p) => Le.find((h) => h.id === p) ?? Le[0],
    []
  ), f = S(() => {
    const p = new Set(Object.values(n));
    return Le.filter((h) => p.has(h.id)).map((h) => h.id);
  }, [n]);
  return $(() => {
    const { color: p, fonts: h } = e, k = document.body;
    k.style.setProperty("--background-color", p.palette[p.background]), k.style.setProperty("--color-heading", p.palette[p.headings]), k.style.setProperty(
      "--color-paragraph",
      p.palette[p.body !== void 0 ? p.body : p.headings]
    ), k.style.setProperty("--font-family-heading", h.headingFont.style.fontFamily), k.style.setProperty("--font-family-body", h.paragraphFont.style.fontFamily), k.style.setProperty(
      "--font-family-header",
      h.headerFont ? h.headerFont.style.fontFamily : h.paragraphFont.style.fontFamily
    );
    const C = Je(p.palette);
    Object.entries(C).forEach(([y, E]) => {
      k.style.setProperty(y, E);
    });
    const x = [h.headingFont, h.paragraphFont];
    h.headerFont && x.push(h.headerFont), Wc(x);
  }, [e]), $(() => {
    const p = ar(e.color.palette, Le);
    let h = document.getElementById(bn);
    h || (h = document.createElement("style"), h.id = bn, document.head.appendChild(h)), h.textContent !== p && (h.textContent = p);
  }, [e.color.palette]), $(() => {
    const p = sr(e.buttons);
    let h = document.getElementById(vn);
    h || (h = document.createElement("style"), h.id = vn, document.head.appendChild(h)), h.textContent !== p && (h.textContent = p);
  }, [e.buttons]), _(
    () => ({
      userTheme: e,
      setPack: d,
      themePacks: a,
      fontPacks: i,
      colorPacks: c,
      buttonPacks: s,
      formPacks: l,
      sectionThemes: Le,
      sectionAssignments: n,
      setSectionTheme: u,
      removeSectionAssignment: m,
      getThemesInUse: f,
      getSectionTheme: b
    }),
    [
      e,
      d,
      a,
      i,
      c,
      s,
      l,
      n,
      u,
      m,
      f,
      b
    ]
  );
}
export {
  Mr as AddBlockToolbar,
  id as AddSectionDivider,
  gr as AlignTopIcon,
  mr as AnimatedSearchIcon,
  Jc as BlockAnnotationBar,
  rd as BlockHover,
  Lr as BlockPicker,
  $e as COLOR_KEYS,
  Gc as ChevronDownIcon,
  hr as CodeIcon,
  ra as DEFAULT_SECTION_THEME,
  vd as DEFAULT_SECTION_THEME_SEQUENCE,
  xr as DesktopIcon,
  br as DuplicateIcon,
  Ir as EditHeaderButton,
  kn as EditIcon,
  dt as FE_COLUMNS,
  It as FE_COL_GAP,
  ut as FE_MARGIN,
  He as FE_ROW_GAP,
  O as Field,
  go as FieldObject,
  ed as FluidEngineGrid,
  qo as FoldableList,
  Wo as FoldableListItem,
  _r as GlobalContentGlyphIcon,
  ad as GridOverlay,
  ud as HANDLE_POSITIONS,
  Kc as HeaderSectionWrapper,
  wr as MobileIcon,
  bd as PALETTE_INDEX,
  fd as PaddingField,
  fr as PinIcon,
  kr as PlayIcon,
  Rt as PlusIcon,
  od as PortaledAnnotationBar,
  bo as ProUICollapsible,
  pd as ProUIIcons,
  pe as ProUIInput,
  fo as ProUILabel,
  yr as RedoIcon,
  Le as SECTION_THEMES,
  Yc as SearchGlyphIcon,
  Xc as SectionWrapper,
  md as SegmentedControl,
  hd as SelectDropdown,
  xd as SiteThemes,
  tr as SiteThemesContext,
  td as SiteToolbar,
  nd as ThemeProvider,
  _n as Tooltip,
  jo as TransformOriginInput,
  gd as TransformsLayout2,
  vr as UndoIcon,
  Ko as UnlinkToggle,
  sr as emitButtonPackCSS,
  kd as emitButtonPackStyleTag,
  ar as emitSectionThemeCSS,
  wd as emitSectionThemeStyleTag,
  mt as feBrickHeight,
  Tt as feBrickWidth,
  Hr as feRowsHeight,
  Qc as feSnapHeight,
  Dr as feSnapLeft,
  Or as feSnapTop,
  Bc as getButtonPack,
  $c as getColorPack,
  Hc as getFontPack,
  Oc as getFormPack,
  ld as getRosettaTheme,
  v as googleFonts,
  dd as hex,
  yd as isSectionThemeId,
  Wc as loadFontsForTheme,
  Uc as loadGoogleFont,
  Je as makeColorVariables,
  cd as rosetta,
  Xr as rosettaDark,
  Cn as rosettaLight,
  un as themeButtons,
  pn as themeColors,
  mn as themeFonts,
  hn as themeForms,
  fn as themePacks,
  Vr as useBlockDrag,
  ft as useDelayedActiveState,
  sd as usePanelDrag,
  To as useProUIStepper,
  _d as useSiteThemes,
  Ee as useSiteThemesContext,
  ze as useTemporaryActiveState,
  Fn as useTooltip
};
//# sourceMappingURL=index.js.map
