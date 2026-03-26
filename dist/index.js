import { jsxs as g, jsx as o, Fragment as Oe } from "react/jsx-runtime";
import { useState as w, useRef as k, useEffect as I, useCallback as F, useMemo as _, memo as N, createContext as Xt, Children as wn, useLayoutEffect as _n, useContext as kn } from "react";
import { createPortal as bt } from "react-dom";
function Fn({
  expanded: e = !1,
  size: t = 16,
  color: n = "var(--rosetta-fg-muted)"
}) {
  const r = "0.28s cubic-bezier(0.22, 1, 0.36, 1)";
  return /* @__PURE__ */ g(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: n,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: 3,
            y: 4,
            width: e ? 0 : 5,
            height: 2,
            style: { transition: `width ${r}` }
          }
        ),
        /* @__PURE__ */ o(
          "rect",
          {
            x: 3,
            y: 11,
            width: e ? 0 : 5,
            height: 2,
            style: { transition: `width ${r}` }
          }
        ),
        /* @__PURE__ */ o(
          "rect",
          {
            x: 3,
            y: 18,
            width: e ? 0 : 18,
            height: 2,
            style: { transition: `width ${r}` }
          }
        ),
        /* @__PURE__ */ o(
          "g",
          {
            style: {
              transformOrigin: "15.5px 8.5px",
              transform: e ? "translate(-4px, 2.5px) scale(1.4)" : "translate(0, 0) scale(1)",
              transition: `transform ${r}`
            },
            children: /* @__PURE__ */ o(
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
function Rn(e) {
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("path", { d: "M14.55 0L9.55001 18H7.45001L12.45 0H14.55Z", fill: "currentColor" }),
        /* @__PURE__ */ o(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 4.16795V6.57165L2.35748 9L6 11.4283V13.832L0 9.83205V8.16795L6 4.16795Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ o(
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
function Kt(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Cn(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Sn(e) {
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("path", { d: "M18 0H0V2H18V0Z", fill: "currentColor" }),
        /* @__PURE__ */ o(
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
function En(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Mn(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Ln(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function An(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Nn(e) {
  return /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("path", { d: "M9 15H3V17H9V15Z", fill: "currentColor" }),
        /* @__PURE__ */ o(
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
function In(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function xs(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function Tn(e) {
  return /* @__PURE__ */ o(
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
      ...e,
      children: /* @__PURE__ */ o(
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
function Jt(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
function ws(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
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
const xe = 11, Bn = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "22px"
}, wt = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22px"
}, Hn = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px"
}, Qt = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "22px",
  letterSpacing: 0.5
}, Dn = "/assets/block-icons", _t = [
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
function On({ onSelect: e, onClose: t, blockIconBasePath: n = Dn }) {
  const [r, i] = w(""), a = k(null), l = k(null);
  I(() => {
    const s = setTimeout(() => {
      var d;
      return (d = a.current) == null ? void 0 : d.focus();
    }, 50);
    return () => clearTimeout(s);
  }, []), I(() => {
    function s(d) {
      l.current && !l.current.contains(d.target) && t();
    }
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [t]);
  const c = r ? _t.map((s) => ({
    ...s,
    blocks: s.blocks.filter((d) => d.name.toLowerCase().includes(r.toLowerCase()))
  })).filter((s) => s.blocks.length > 0) : _t;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: l,
      className: "block-picker-enter",
      style: {
        width: 320,
        background: "var(--rosetta-bg-base)",
        borderRadius: xe,
        boxShadow: "var(--shadows-200)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ g("div", { style: {
          height: 50,
          display: "flex",
          alignItems: "center",
          gap: xe,
          padding: "0 12px",
          borderBottom: "1px solid var(--rosetta-border-default)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ o("div", { style: { width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(Fn, { expanded: !0, size: 16, color: "var(--rosetta-fg-muted)" }) }),
          /* @__PURE__ */ o(
            "input",
            {
              ref: a,
              type: "text",
              placeholder: "Search blocks",
              value: r,
              onChange: (s) => i(s.target.value),
              onKeyDown: (s) => {
                s.key === "Escape" && t();
              },
              style: {
                ...wt,
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                padding: 0,
                color: r ? "var(--rosetta-fg-default)" : "#6E6E6E",
                minWidth: 0
              }
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { style: {
          overflow: "auto",
          maxHeight: "min(480px, calc(100vh - 200px))",
          padding: `${xe}px`
        }, children: [
          c.length === 0 && /* @__PURE__ */ g("p", { style: {
            ...wt,
            color: "var(--rosetta-fg-muted)",
            padding: `${xe}px 0`,
            textAlign: "center"
          }, children: [
            'No blocks matching "',
            r,
            '"'
          ] }),
          c.map((s, d) => /* @__PURE__ */ g("div", { style: { marginTop: d > 0 ? 16 : 0 }, children: [
            /* @__PURE__ */ o("p", { style: {
              ...Bn,
              color: "var(--rosetta-fg-default)",
              marginBottom: 6
            }, children: s.label }),
            /* @__PURE__ */ o("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            }, children: s.blocks.map((u) => /* @__PURE__ */ o(Pn, { block: u, onSelect: e, blockIconBasePath: n }, u.name)) })
          ] }, s.label))
        ] })
      ]
    }
  );
}
function Pn({ block: e, onSelect: t, blockIconBasePath: n }) {
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
        gap: xe,
        background: "var(--rosetta-bg-inset)",
        border: "none",
        borderRadius: 6,
        cursor: "pointer",
        overflow: "hidden",
        textAlign: "left"
      },
      onMouseEnter: (r) => r.currentTarget.style.background = "var(--rosetta-bg-default)",
      onMouseLeave: (r) => r.currentTarget.style.background = "var(--rosetta-bg-inset)",
      children: [
        /* @__PURE__ */ o("div", { style: {
          width: 16,
          height: 16,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }, children: /* @__PURE__ */ o(
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
        /* @__PURE__ */ o("span", { style: {
          ...Hn,
          color: "var(--rosetta-fg-default)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: e.name })
      ]
    }
  );
}
function $n({ onAddBlock: e }) {
  const [t, n] = w(!1);
  return /* @__PURE__ */ o("div", { style: {
    display: "flex",
    alignItems: "center",
    gap: 6
  }, children: /* @__PURE__ */ g(
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
        gap: xe,
        padding: "11px 22px 11px 16px",
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 8,
        boxShadow: "var(--shadows-100)",
        cursor: "pointer"
      },
      children: [
        t && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          inset: 4,
          background: "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ o("div", { style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }, children: /* @__PURE__ */ o(Jt, { style: { width: 16, height: 16, display: "block" } }) }),
        /* @__PURE__ */ o("span", { style: {
          ...Qt,
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
function zn({ onClick: e }) {
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
        gap: xe,
        padding: "11px 22px 11px 16px",
        background: "var(--rosetta-bg-base)",
        border: "none",
        borderRadius: 8,
        boxShadow: "var(--shadows-100)",
        cursor: "pointer"
      },
      children: [
        t && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          inset: 4,
          background: "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ o("div", { style: {
          width: 22,
          height: 22,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1
        }, children: /* @__PURE__ */ o(Kt, { style: { width: 16, height: 16, display: "block" } }) }),
        /* @__PURE__ */ o("span", { style: {
          ...Qt,
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
const Wn = "#4894FF", lt = 3, kt = 11;
function _s({
  sectionId: e,
  sectionLabel: t,
  children: n,
  onBlockPicked: r,
  disabled: i = !1,
  style: a
}) {
  const [l, c] = w(!1), [s, d] = w(!1), [u, p] = w(!1), m = k(null), b = F(() => {
    i || (c(!0), p(!1));
  }, [i]), f = F(() => {
    s || (c(!1), p(!1));
  }, [s]), M = F(() => {
    d(!0), p(!1);
  }, []), R = F(() => {
    if (d(!1), p(!0), m.current) {
      const v = m.current.getBoundingClientRect(), E = A.current;
      E && (E.x < v.left || E.x > v.right || E.y < v.top || E.y > v.bottom) && c(!1);
    }
  }, []), L = F((v) => {
    d(!1), c(!1), r(e, v);
  }, [e, r]), A = k(null), x = F((v) => {
    A.current = { x: v.clientX, y: v.clientY };
  }, []), C = (l || s) && !i;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: m,
      onMouseEnter: b,
      onMouseLeave: f,
      onMouseMove: x,
      style: {
        position: "relative",
        ...a
      },
      children: [
        n,
        /* @__PURE__ */ o(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              border: `${lt}px solid ${C ? Wn : "transparent"}`,
              zIndex: 101,
              pointerEvents: "none",
              transition: "border-color 0.15s ease"
            }
          }
        ),
        C && /* @__PURE__ */ g(
          "div",
          {
            style: {
              position: "absolute",
              top: lt + kt,
              left: lt + kt,
              zIndex: 102
            },
            children: [
              /* @__PURE__ */ o(
                "div",
                {
                  className: u ? "add-block-return" : s ? "" : "add-block-enter",
                  style: {
                    opacity: s ? 0 : 1,
                    pointerEvents: s ? "none" : "auto",
                    transition: "opacity 200ms ease",
                    position: s ? "absolute" : "relative"
                  },
                  children: /* @__PURE__ */ o(
                    $n,
                    {
                      onAddBlock: M
                    }
                  )
                }
              ),
              s && /* @__PURE__ */ o(
                On,
                {
                  onSelect: L,
                  onClose: R
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function ks({
  children: e,
  disabled: t = !1,
  style: n
}) {
  const [r, i] = w(!1), a = F(() => {
    t || i(!0);
  }, [t]), l = F(() => {
    i(!1);
  }, []), c = r && !t;
  return /* @__PURE__ */ g(
    "div",
    {
      onMouseEnter: a,
      onMouseLeave: l,
      style: {
        position: "relative",
        ...n
      },
      children: [
        e,
        c && /* @__PURE__ */ o(
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
            children: /* @__PURE__ */ o("div", { className: "header-btn-enter", children: /* @__PURE__ */ o(zn, { onClick: (s) => {
              const d = s.clientX, u = s.clientY;
              for (let p = 0; p < 14; p++) {
                const m = document.createElement("div");
                m.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${d}px;top:${u}px;`;
                const b = Math.random() * Math.PI * 2, f = 60 + Math.random() * 100;
                m.animate([
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  { transform: `translate(${Math.cos(b) * f}px,${Math.sin(b) * f}px) scale(0)`, opacity: 0 }
                ], { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0,0.5,0.5,1)", fill: "forwards" }), document.body.appendChild(m), setTimeout(() => m.remove(), 900);
              }
            } }) })
          }
        )
      ]
    }
  );
}
const Ne = 8;
function en({
  text: e,
  anchorRef: t,
  visible: n
}) {
  const r = k(null), [i, a] = w(null);
  return I(() => {
    if (!n || !t.current) {
      a(null);
      return;
    }
    a({ top: -9999, left: -9999 });
    const l = requestAnimationFrame(() => {
      if (!t.current || !r.current) return;
      const c = t.current.getBoundingClientRect(), s = r.current.getBoundingClientRect(), d = window.innerWidth;
      let u = c.left + c.width / 2 - s.width / 2;
      const p = window.innerHeight;
      let m = c.bottom + 6;
      m + s.height > p - Ne && (m = c.top - s.height - 6), u < Ne && (u = Ne), u + s.width > d - Ne && (u = d - Ne - s.width), a({ top: m, left: u });
    });
    return () => cancelAnimationFrame(l);
  }, [n, t]), n ? bt(
    /* @__PURE__ */ o(
      "div",
      {
        ref: r,
        style: {
          position: "fixed",
          top: (i == null ? void 0 : i.top) ?? -9999,
          left: (i == null ? void 0 : i.left) ?? -9999,
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
function tn(e = 600) {
  const t = k(null), [n, r] = w(!1), [i, a] = w(!1), l = k(null), c = F(() => {
    r(!0), l.current = setTimeout(() => a(!0), e);
  }, [e]), s = F(() => {
    r(!1), a(!1), l.current && (clearTimeout(l.current), l.current = null);
  }, []);
  return I(() => () => {
    l.current && clearTimeout(l.current);
  }, []), { ref: t, hovered: n, showTooltip: i, onMouseEnter: c, onMouseLeave: s };
}
const Ft = {
  background: "var(--rosetta-bg-base)",
  borderRadius: 11,
  height: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  boxShadow: "var(--shadows-200)"
};
function Fs({
  onOpenIDE: e,
  onOpenDesignPanel: t,
  onDelete: n,
  isExiting: r
}) {
  return /* @__PURE__ */ g("div", { className: r ? "annotation-exit" : "annotation-enter", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ o("div", { style: Ft, children: /* @__PURE__ */ o(he, { onClick: e, title: "Open code editor", children: /* @__PURE__ */ o(Rn, { style: { width: 22, height: 18 } }) }) }),
    /* @__PURE__ */ g("div", { style: { ...Ft, gap: 4 }, children: [
      /* @__PURE__ */ o(he, { onClick: t, title: "Edit", children: /* @__PURE__ */ o(Kt, { style: { width: 18.5, height: 18.5 } }) }),
      /* @__PURE__ */ o(Rt, {}),
      /* @__PURE__ */ o(he, { title: "Pin", children: /* @__PURE__ */ o(Cn, { style: { width: 17.7, height: 17.7 } }) }),
      /* @__PURE__ */ o(he, { title: "Align top", children: /* @__PURE__ */ o(Sn, { style: { width: 18, height: 14 } }) }),
      /* @__PURE__ */ o(he, { title: "Move forward", children: /* @__PURE__ */ o(Un, {}) }),
      /* @__PURE__ */ o(he, { title: "Move backward", children: /* @__PURE__ */ o(Vn, {}) }),
      /* @__PURE__ */ o(Rt, {}),
      /* @__PURE__ */ o(he, { title: "Duplicate", children: /* @__PURE__ */ o(En, { style: { width: 18, height: 18 } }) }),
      /* @__PURE__ */ o(he, { onClick: n, title: "Delete", danger: !0, children: /* @__PURE__ */ o(jn, {}) })
    ] })
  ] });
}
function he({
  children: e,
  onClick: t,
  title: n,
  danger: r
}) {
  const { ref: i, hovered: a, showTooltip: l, onMouseEnter: c, onMouseLeave: s } = tn();
  return /* @__PURE__ */ g(
    "button",
    {
      ref: i,
      onClick: t,
      onMouseEnter: c,
      onMouseLeave: s,
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
        color: r ? "var(--rosetta-fg-danger)" : "var(--rosetta-fg-default)"
      },
      children: [
        a && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          top: 4,
          left: 0,
          width: 36,
          height: 36,
          background: r ? "var(--rosetta-bg-danger-default)" : "var(--rosetta-bg-default)",
          borderRadius: 6
        } }),
        /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: e }),
        n && /* @__PURE__ */ o(en, { text: n, anchorRef: i, visible: l })
      ]
    }
  );
}
function Rt() {
  return /* @__PURE__ */ o("div", { style: { width: 1, height: 20, background: "var(--rosetta-border-default)", flexShrink: 0 } });
}
function Un() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
}
function Vn() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" })
  ] });
}
function jn() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ o("path", { d: "M3 5h12" }),
    /* @__PURE__ */ o("path", { d: "M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" }),
    /* @__PURE__ */ o("path", { d: "M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" }),
    /* @__PURE__ */ o("path", { d: "M7.5 8v4.5" }),
    /* @__PURE__ */ o("path", { d: "M10.5 8v4.5" })
  ] });
}
const Qe = 12, vt = 33, _e = 16, et = 33, Gn = 3;
function yt(e) {
  return (e - et * 2 - vt * (Qe - 1)) / Qe;
}
function nt(e) {
  return yt(e) / 2;
}
function Zn(e, t) {
  const n = nt(t);
  return e * n + (e - 1) * _e;
}
function Rs(e, t) {
  const r = nt(t) + _e, i = Math.ceil((e + _e) / r);
  return Zn(i, t);
}
function qn(e, t) {
  const r = nt(t) + _e;
  return Math.round(e / r) * r;
}
function Yn(e, t) {
  const r = yt(t) + vt;
  return et + Math.round((e - et) / r) * r;
}
function Cs({ fadeIn: e = !1 }) {
  const t = k(null), [n, r] = w({ width: 0, height: 0 });
  I(() => {
    const d = t.current;
    if (!d) return;
    const u = new ResizeObserver(([p]) => {
      const { width: m, height: b } = p.contentRect;
      r({ width: m, height: b });
    });
    return u.observe(d), () => u.disconnect();
  }, []);
  const i = n.width > 0 ? yt(n.width) : 0, a = i / 2, l = a > 0 ? Math.round((n.height + _e) / (a + _e)) : 0, c = Qe * l, s = _(() => c <= 0 ? null : Array.from({ length: c }, (d, u) => /* @__PURE__ */ o(
    "div",
    {
      style: {
        borderRadius: Gn,
        background: "rgba(242, 242, 242, 0.3)",
        border: "1px solid var(--rosetta-border-default)"
      }
    },
    u
  )), [c]);
  return /* @__PURE__ */ o(
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
      children: i > 0 && /* @__PURE__ */ o(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${Qe}, 1fr)`,
            gridTemplateRows: `repeat(${l}, 1fr)`,
            columnGap: vt,
            rowGap: _e,
            padding: `0 ${et}px`,
            width: "100%",
            height: "100%",
            boxSizing: "border-box"
          },
          children: s
        }
      )
    }
  );
}
function Ss({
  onSave: e,
  onExit: t,
  onUndo: n,
  onRedo: r,
  activeBreakpoint: i = "desktop",
  onBreakpointChange: a,
  onRun: l,
  onStyles: c,
  isSiteStylesOpen: s,
  componentName: d
}) {
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
      /* @__PURE__ */ o("button", { onClick: e, style: Xn, children: "Save" }),
      /* @__PURE__ */ o(Kn, { onClick: t, label: "Exit" }),
      /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ o(ct, { onClick: n, title: "Undo", children: /* @__PURE__ */ o(Mn, { style: { width: 18, height: 15 } }) }),
        /* @__PURE__ */ o(ct, { onClick: void 0, title: "Redo", disabled: !0, children: /* @__PURE__ */ o(Ln, { style: { width: 18, height: 15, opacity: 0.28 } }) })
      ] })
    ] }),
    /* @__PURE__ */ o("div", { style: {
      position: "absolute",
      left: "50%",
      top: 0,
      transform: "translateX(-50%)",
      textAlign: "center",
      overflow: "hidden",
      height: 56
    }, children: /* @__PURE__ */ g("div", { style: {
      transform: d ? "translateY(-56px)" : "translateY(0)",
      transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
    }, children: [
      /* @__PURE__ */ o(Jn, { title: "Adrienne", subtitle: "Page · Published" }),
      /* @__PURE__ */ g("div", { style: {
        height: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }, children: [
        /* @__PURE__ */ o("div", { style: {
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px",
          transition: "color 0.3s ease"
        }, children: d ?? "Component" }),
        /* @__PURE__ */ o("div", { style: {
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
      /* @__PURE__ */ o("div", { style: {
        width: 96,
        height: 36,
        background: "var(--rosetta-bg-default)",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        padding: 2,
        transition: "background 0.3s ease, opacity 0.3s ease",
        opacity: d ? 0.35 : 1,
        pointerEvents: d ? "none" : void 0
      }, children: ["desktop", "mobile"].map((u) => /* @__PURE__ */ o(
        "button",
        {
          onClick: () => a == null ? void 0 : a(u),
          title: u,
          disabled: !!d,
          style: {
            flex: 1,
            height: 32,
            background: i === u ? "var(--rosetta-bg-base)" : "transparent",
            border: "none",
            borderRadius: 4,
            cursor: d ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease"
          },
          children: u === "desktop" ? /* @__PURE__ */ o(An, { style: { width: 18, height: 17 } }) : /* @__PURE__ */ o(Nn, { style: { width: 12, height: 20 } })
        },
        u
      )) }),
      /* @__PURE__ */ o(ct, { onClick: c, title: "Site Styles", active: s, children: /* @__PURE__ */ o(In, { style: { width: 20, height: 20 } }) })
    ] })
  ] });
}
function ct({
  children: e,
  onClick: t,
  title: n,
  disabled: r,
  active: i
}) {
  const { ref: a, hovered: l, showTooltip: c, onMouseEnter: s, onMouseLeave: d } = tn();
  return /* @__PURE__ */ g(
    "button",
    {
      ref: a,
      onClick: t,
      onMouseEnter: s,
      onMouseLeave: d,
      disabled: r,
      style: {
        position: "relative",
        width: 36,
        height: 36,
        background: i ? "var(--rosetta-bg-default)" : "var(--rosetta-bg-base)",
        color: void 0,
        border: "none",
        borderRadius: 6,
        cursor: r ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        pointerEvents: r ? "none" : void 0,
        transition: "background 0.2s ease, color 0.2s ease"
      },
      children: [
        l && !r && !i && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, children: e }),
        n && /* @__PURE__ */ o(en, { text: n, anchorRef: a, visible: c })
      ]
    }
  );
}
const Xn = {
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
function Kn({ onClick: e, label: t }) {
  const [n, r] = w(!1);
  return /* @__PURE__ */ g(
    "button",
    {
      onClick: e,
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
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
        n && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          inset: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ o("span", { style: { position: "relative", zIndex: 1 }, children: t })
      ]
    }
  );
}
function Jn({ title: e, subtitle: t }) {
  const [n, r] = w(!1);
  return /* @__PURE__ */ g(
    "button",
    {
      onMouseEnter: () => r(!0),
      onMouseLeave: () => r(!1),
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
        n && /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          top: 8,
          bottom: 8,
          left: 0,
          right: 0,
          background: "var(--rosetta-bg-default)",
          borderRadius: 4
        } }),
        /* @__PURE__ */ o("div", { style: {
          position: "relative",
          zIndex: 1,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.25,
          color: "var(--rosetta-fg-default)",
          lineHeight: "18px"
        }, children: e }),
        /* @__PURE__ */ o("div", { style: {
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
function Es({ cssString: e, children: t }) {
  return /* @__PURE__ */ o(
    "div",
    {
      style: {
        width: "100%",
        height: "100%"
      },
      ref: (n) => {
        n && e.split(";").forEach((r) => {
          const [i, a] = r.split(":").map((l) => l.trim());
          i && a && i.startsWith("--") && n.style.setProperty(i, a);
        });
      },
      children: t
    }
  );
}
function Qn({
  initialLeft: e,
  initialTop: t,
  width: n,
  height: r,
  containerWidth: i,
  sectionHeight: a,
  enabled: l = !0,
  onDrop: c
}) {
  const [s, d] = w(!1), [u, p] = w(!1), [m, b] = w({ x: 0, y: 0 }), [f, M] = w({ left: e, top: t }), R = k({ x: 0, y: 0 }), L = k({ left: e, top: t }), A = k({ x: 0, y: 0 }), x = k({ left: e, top: t });
  I(() => {
    !s && !u && M({ left: e, top: t });
  }, [e, t, s, u]);
  const C = F((v) => {
    if (!l || v.button !== 0) return;
    v.preventDefault(), R.current = { x: v.clientX, y: v.clientY }, L.current = { left: e, top: t }, A.current = { x: 0, y: 0 }, x.current = { left: e, top: t };
    let E = !1;
    const D = 4, X = (P) => {
      const $ = P.clientX - R.current.x, ne = P.clientY - R.current.y;
      if (!E) {
        if (Math.abs($) < D && Math.abs(ne) < D) return;
        E = !0, d(!0), p(!1), b({ x: 0, y: 0 }), M({ left: e, top: t });
      }
      let ie = ne;
      if (a != null && i > 0) {
        const ge = nt(i), ze = 0, We = a - ge, Ue = L.current.top + ne;
        Ue < ze && (ie = ze - L.current.top), Ue > We && (ie = We - L.current.top);
      }
      A.current = { x: $, y: ie }, b({ x: $, y: ie });
      const z = L.current.left + $, K = L.current.top + ie, J = Yn(z, i), Me = qn(K, i);
      x.current = { left: J, top: Me }, M({ left: J, top: Me });
    }, ae = () => {
      if (document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", ae), !E) return;
      const P = x.current;
      c == null || c(P.left, P.top), d(!1), p(!0), b({ x: 0, y: 0 }), setTimeout(() => {
        p(!1);
      }, 300);
    };
    document.addEventListener("mousemove", X), document.addEventListener("mouseup", ae);
  }, [l, e, t, n, r, i, a, c]);
  return {
    isDragging: s,
    naturalOffset: m,
    snappedPosition: f,
    isSettling: u,
    dragHandleProps: { onMouseDown: C }
  };
}
function Ms({
  label: e,
  disabled: t = !1,
  children: n,
  style: r,
  canvasWidth: i,
  sectionHeight: a,
  blockId: l,
  draggedPosition: c,
  onBlockDrop: s,
  onDragStateChange: d
}) {
  const [u, p] = w(!1), m = k(null), b = k(!1), [f, M] = w(null);
  I(() => {
    const z = m.current;
    if (!z || !z.offsetParent) return;
    const K = () => {
      z.offsetParent && M({
        left: z.offsetLeft,
        top: z.offsetTop,
        width: z.offsetWidth,
        height: z.offsetHeight
      });
    };
    K();
    const J = new ResizeObserver(K);
    return J.observe(z), () => J.disconnect();
  }, [r, i, c]);
  const R = i ?? 0, L = !t && R > 0 && f !== null, A = F((z, K) => {
    l && s && s(l, z, K);
  }, [l, s]), {
    isDragging: x,
    naturalOffset: C,
    snappedPosition: v,
    isSettling: E,
    dragHandleProps: D
  } = Qn({
    initialLeft: (f == null ? void 0 : f.left) ?? 0,
    initialTop: (f == null ? void 0 : f.top) ?? 0,
    width: (f == null ? void 0 : f.width) ?? 0,
    height: (f == null ? void 0 : f.height) ?? 0,
    containerWidth: R,
    sectionHeight: a,
    enabled: L,
    onDrop: A
  });
  I(() => {
    x !== b.current && (b.current = x, d == null || d(x));
  }, [x, d]);
  const X = (u || x) && !t, ae = X && !x, P = c ? { ...r, left: c.left, top: c.top } : { ...r }, $ = x ? {
    ...P,
    position: "absolute",
    left: v.left,
    top: v.top,
    width: f == null ? void 0 : f.width,
    height: (r == null ? void 0 : r.height) ?? (f == null ? void 0 : f.height),
    zIndex: 1e3,
    cursor: "grabbing",
    right: void 0,
    bottom: void 0
  } : { position: "relative", cursor: L ? "grab" : "default", zIndex: 2, ...P }, ne = x ? `translate(${C.x - (v.left - ((f == null ? void 0 : f.left) ?? 0))}px, ${C.y - (v.top - ((f == null ? void 0 : f.top) ?? 0))}px)` : void 0;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: m,
      onMouseEnter: () => {
        t || p(!0);
      },
      onMouseLeave: () => {
        x || p(!1);
      },
      ...L ? D : {},
      style: $,
      children: [
        /* @__PURE__ */ o("div", { style: {
          transform: ne,
          transition: E ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" : x ? "none" : void 0,
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          overflow: r == null ? void 0 : r.overflow,
          display: r == null ? void 0 : r.display,
          flexDirection: r == null ? void 0 : r.flexDirection,
          alignItems: r == null ? void 0 : r.alignItems,
          justifyContent: r == null ? void 0 : r.justifyContent
        }, children: n }),
        X && /* @__PURE__ */ g(Oe, { children: [
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            inset: 0,
            border: "2px solid #0072f0",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            inset: -1,
            border: "1px solid #6ca4f4",
            zIndex: 2,
            pointerEvents: "none"
          } }),
          ae && /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            left: 0,
            top: -22,
            zIndex: 100,
            pointerEvents: "none"
          }, children: /* @__PURE__ */ g("div", { style: {
            background: "#0072f0",
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            gap: 3,
            height: 16,
            padding: "0.25px 6px 0.75px"
          }, children: [
            e !== "Text" && /* @__PURE__ */ o(Tn, { style: { width: 10, height: 10 } }),
            /* @__PURE__ */ o("span", { style: {
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
function Ls({
  blockRef: e,
  children: t
}) {
  const [n, r] = w(null);
  return I(() => {
    const i = e.current;
    if (!i) return;
    const a = () => {
      const l = i.getBoundingClientRect();
      r({ top: l.top - 12, left: l.left });
    };
    return a(), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
      window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
    };
  }, [e]), n ? bt(
    /* @__PURE__ */ o("div", { style: {
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
function er(e) {
  return /* @__PURE__ */ o(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 9 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      overflow: "visible",
      preserveAspectRatio: "none",
      style: { display: "block" },
      ...e,
      children: /* @__PURE__ */ o(
        "path",
        {
          d: "M5.5 0H4.49645L0 10H3.5V16H4.49645L9 6H5.5V0Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function tr(e) {
  return /* @__PURE__ */ o(
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
      children: /* @__PURE__ */ o(
        "path",
        {
          d: "M5.75 2.86303L10 7.09719V4.97982L5.00155 0L0 4.98063V7.09752L4.25 2.8653L4.25 12.6339H5.75L5.75 2.86303Z",
          fill: "currentColor"
        }
      )
    }
  );
}
function Ct(e) {
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
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "#081939" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-0)", fillOpacity: "0.9" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-1)", fillOpacity: "0.85" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-2)", fillOpacity: "0.8" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-3)", fillOpacity: "0.88" })
        ] }),
        /* @__PURE__ */ g("defs", { children: [
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-0", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(16.5958 8.07961) rotate(63.1327) scale(18.5222 21.9723)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#7D7194" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#7D7194", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-1", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(47.8949 16.6687) rotate(161.19) scale(24.6066)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#4A8F9F" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#4A8F9F", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-2", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32.7549 47.895) rotate(-108.939) scale(15.6987)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#5C4763" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#5C4763", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ g("radialGradient", { id: "beacon-grad-3", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-2.18364 33.4828) rotate(-18.3418) scale(28.2198 39.2263)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#3D3041" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#3D3041", stopOpacity: "0" })
          ] })
        ] })
      ]
    }
  );
}
const nr = [
  "radial-gradient(ellipse at -4% 68%, rgba(61,48,65,0.22) 0%, transparent 60%)",
  "radial-gradient(ellipse at 67% 97%, rgba(92,71,99,0.20) 0%, transparent 55%)",
  "radial-gradient(ellipse at 97% 34%, rgba(74,143,159,0.21) 0%, transparent 60%)",
  "radial-gradient(ellipse at 34% 16%, rgba(125,113,148,0.22) 0%, transparent 50%)",
  "linear-gradient(90deg, #0E0E0E 0%, #0E0E0E 100%)"
].join(", "), rr = "0px 6px 14px rgba(176,103,222,0.22)", St = "0.8s cubic-bezier(0.22, 1, 0.36, 1)", Et = "0.45s cubic-bezier(0.4, 0, 1, 1)";
function or({ id: e }) {
  return /* @__PURE__ */ o("svg", { "aria-hidden": "true", style: { position: "absolute", width: 0, height: 0, overflow: "hidden" }, children: /* @__PURE__ */ o("defs", { children: /* @__PURE__ */ g("filter", { id: e, x: "-20%", y: "-20%", width: "140%", height: "140%", children: [
    /* @__PURE__ */ o("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "7", result: "blur" }),
    /* @__PURE__ */ o(
      "feColorMatrix",
      {
        in: "blur",
        type: "matrix",
        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 8 -4",
        result: "goo"
      }
    ),
    /* @__PURE__ */ o("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" })
  ] }) }) });
}
let ar = 0;
function As({ onClick: e, onPromptSubmit: t, aiStatesPath: n = "/assets/ai-states" }) {
  const [r, i] = w(!1), [a, l] = w(!1), [c, s] = w(!1), [d, u] = w(!1), [p, m] = w(""), b = k(null), f = k(null), M = k(`goo-section-${++ar}`).current, R = a || c;
  I(() => {
    if (R && !c) {
      const v = setTimeout(() => u(!0), 150);
      return () => clearTimeout(v);
    }
    u(!1);
  }, [R, c]), I(() => {
    if (c) {
      const v = setTimeout(() => {
        var E;
        return (E = b.current) == null ? void 0 : E.focus();
      }, 80);
      return () => clearTimeout(v);
    }
  }, [c]), I(() => {
    if (!c) return;
    function v(D) {
      f.current && !f.current.contains(D.target) && (s(!1), m(""));
    }
    function E(D) {
      D.key === "Escape" && (s(!1), m(""));
    }
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", E), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", E);
    };
  }, [c]);
  const L = F((v) => {
    v.stopPropagation(), s(!0);
  }, []), A = F((v) => {
    v.stopPropagation(), t ? t(p) : e == null || e(v), s(!1), m("");
  }, [e, t, p]), x = F((v) => {
    v.key === "Enter" && p.trim() && (v.preventDefault(), t && t(p), s(!1), m(""));
  }, [t, p]), C = d && !c;
  return /* @__PURE__ */ g(
    "div",
    {
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      style: {
        position: "relative",
        height: 0,
        zIndex: 10
      },
      children: [
        /* @__PURE__ */ o(or, { id: M }),
        /* @__PURE__ */ o(
          "div",
          {
            className: c ? "section-glow-line" : void 0,
            style: {
              position: "absolute",
              left: 0,
              right: 0,
              top: -1,
              height: 3,
              background: c ? "linear-gradient(90deg, transparent, hsl(270deg 60% 60% / 0.8) 20%, hsl(195deg 50% 55%) 50%, hsl(290deg 55% 55% / 0.8) 80%, transparent)" : "transparent",
              opacity: c ? 1 : 0,
              transition: "opacity 0.4s ease",
              pointerEvents: "none"
            }
          }
        ),
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: -24,
          bottom: -24
        } }),
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }, children: /* @__PURE__ */ g(
          "div",
          {
            ref: f,
            style: {
              opacity: R ? 1 : 0,
              pointerEvents: R ? "auto" : "none",
              transition: "opacity 0.15s ease"
            },
            children: [
              !c && /* @__PURE__ */ g(
                "div",
                {
                  className: R ? "section-divider-enter" : void 0,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    filter: `url(#${M})`
                  },
                  children: [
                    /* @__PURE__ */ o(
                      "button",
                      {
                        onClick: (v) => {
                          v.stopPropagation(), e == null || e(v);
                        },
                        style: {
                          position: "relative",
                          width: 132,
                          height: 40,
                          borderRadius: 88,
                          background: "#0E0E0E",
                          backgroundImage: nr,
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: /* @__PURE__ */ o("span", { style: {
                          fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          fontWeight: 600,
                          fontSize: 12,
                          lineHeight: "22px",
                          letterSpacing: 0.5,
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          mixBlendMode: "difference",
                          whiteSpace: "nowrap"
                        }, children: "Add Section" })
                      }
                    ),
                    /* @__PURE__ */ g(
                      "div",
                      {
                        onClick: L,
                        onMouseEnter: () => i(!0),
                        onMouseLeave: () => i(!1),
                        style: {
                          width: 42,
                          height: 42,
                          borderRadius: 30,
                          background: "#0E0E0E",
                          flexShrink: 0,
                          position: "relative",
                          cursor: "pointer",
                          overflow: "hidden",
                          marginLeft: C ? 11 : -30,
                          transform: C ? "scale(1)" : "scale(0.857)",
                          transition: C ? `margin-left ${St}, transform ${St}` : `margin-left ${Et}, transform ${Et}`
                        },
                        children: [
                          /* @__PURE__ */ o("div", { style: {
                            position: "absolute",
                            width: 54,
                            height: 54,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                            opacity: C ? 1 : 0,
                            transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
                          }, children: /* @__PURE__ */ o(Ct, {}) }),
                          /* @__PURE__ */ o("div", { style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mixBlendMode: "difference",
                            opacity: C ? 1 : 0,
                            transition: "opacity 0.15s ease"
                          }, children: /* @__PURE__ */ g("div", { style: {
                            width: 27,
                            height: 27,
                            borderRadius: 34,
                            background: "transparent",
                            overflow: "hidden",
                            transform: "rotate(45deg)",
                            position: "relative",
                            marginTop: -1
                          }, children: [
                            /* @__PURE__ */ o(
                              "video",
                              {
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                src: `${n}/${r ? "big_error" : "big_awake"}.mp4`,
                                style: {
                                  position: "absolute",
                                  inset: 0,
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover"
                                }
                              },
                              r ? "error" : "awake"
                            ),
                            /* @__PURE__ */ o("div", { style: {
                              position: "absolute",
                              inset: 0,
                              background: "#fff",
                              mixBlendMode: "difference",
                              pointerEvents: "none"
                            } })
                          ] }) })
                        ]
                      }
                    )
                  ]
                }
              ),
              c && /* @__PURE__ */ o("div", { style: {
                width: 330,
                height: 45,
                borderRadius: 33,
                background: "linear-gradient(0deg, rgba(250,250,250,0.88) 0%, rgba(250,250,250,0.88) 100%), radial-gradient(54.96% 47.34% at 97.34% 33.88%, rgba(74,143,159,0.85) 0%, rgba(74,143,159,0) 100%)",
                border: "1px solid #7D7194",
                boxShadow: rr,
                overflow: "hidden",
                animation: "sectionDividerEnter 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards"
              }, children: /* @__PURE__ */ g("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 6px 6px 11px",
                height: "100%"
              }, children: [
                /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: (v) => {
                      v.stopPropagation(), e == null || e(v);
                    },
                    style: {
                      width: 33,
                      height: 33,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                      padding: 0,
                      color: "#666"
                    },
                    children: /* @__PURE__ */ o("div", { style: { width: 12, height: 12 }, children: /* @__PURE__ */ o(Jt, {}) })
                  }
                ),
                /* @__PURE__ */ o(
                  "input",
                  {
                    ref: b,
                    type: "text",
                    value: p,
                    onChange: (v) => m(v.target.value),
                    onKeyDown: x,
                    placeholder: "Make it real",
                    style: {
                      flex: 1,
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "18px",
                      color: "#0E0E0E",
                      minWidth: 0
                    }
                  }
                ),
                /* @__PURE__ */ o(
                  "button",
                  {
                    onClick: (v) => {
                      v.stopPropagation(), e == null || e(v);
                    },
                    style: {
                      width: 33,
                      height: 33,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                      padding: 0,
                      color: "#666"
                    },
                    children: /* @__PURE__ */ o("div", { style: { width: 9, height: 16 }, children: /* @__PURE__ */ o(er, {}) })
                  }
                ),
                /* @__PURE__ */ g(
                  "button",
                  {
                    onClick: A,
                    style: {
                      width: 33,
                      height: 33,
                      borderRadius: "50%",
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      flexShrink: 0,
                      position: "relative",
                      overflow: "hidden"
                    },
                    children: [
                      /* @__PURE__ */ o("div", { style: {
                        position: "absolute",
                        width: 39,
                        height: 39,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none"
                      }, children: /* @__PURE__ */ o(Ct, {}) }),
                      /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, mixBlendMode: "difference", color: "#fff", width: 10, height: 13 }, children: /* @__PURE__ */ o(tr, {}) })
                    ]
                  }
                )
              ] }) })
            ]
          }
        ) })
      ]
    }
  );
}
function Ns() {
  return /* @__PURE__ */ o("div", { style: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 9999,
    padding: "0 33px",
    display: "flex",
    gap: 33
  }, children: Array.from({ length: 12 }).map((e, t) => /* @__PURE__ */ o("div", { style: {
    flex: 1,
    background: "rgba(255, 0, 0, 0.05)",
    borderLeft: "1px solid rgba(255, 0, 0, 0.15)",
    borderRight: "1px solid rgba(255, 0, 0, 0.15)"
  } }, t)) });
}
const Mt = 2, dt = 0.15, ce = 575, qe = 11, ir = 0.07;
function Is({
  panelRef: e,
  containerSize: t,
  panelState: n,
  basePosition: r,
  onSnap: i,
  onUnsnap: a,
  enabled: l = !0
}) {
  const [c, s] = w(!1), [d, u] = w(!1), [p, m] = w({ x: 0, y: 0 }), [b, f] = w(null), [M, R] = w(!1), [L, A] = w(0), x = k(null), C = k({ x: 0, y: 0 }), v = k(!1), E = k(!1), D = k(!1), X = k(i);
  X.current = i;
  const ae = k(a);
  ae.current = a;
  const P = k(n);
  P.current = n;
  const $ = k(t);
  $.current = t;
  const ne = k(r);
  ne.current = r;
  const ie = k(() => {
  }), z = k(() => {
  });
  ie.current = (H) => {
    var xt;
    if (!x.current) return;
    const pe = H.clientX - x.current.x, be = H.clientY - x.current.y;
    if (!v.current) {
      if (Math.abs(pe) < Mt && Math.abs(be) < Mt) return;
      if (v.current = !0, s(!0), f(null), D.current) {
        const yn = P.current, xn = $.current.w;
        let Ge, Ze;
        yn === "snapped-left" ? (Ge = qe, Ze = qe) : (Ge = xn - ce - qe, Ze = qe), C.current = { x: Ge, y: Ze }, ne.current.current = { x: Ge, y: Ze }, u(!0), ae.current(), setTimeout(() => u(!1), 450);
      }
    }
    const Re = C.current.x + pe, se = C.current.y + be, me = $.current.w, Ce = $.current.h, le = Math.max(0, Math.min(me - ce, Re)), Ve = Math.max(0, Math.min(Ce - 100, se));
    m({ x: le, y: Ve });
    const Le = (xt = e.current) == null ? void 0 : xt.parentElement, it = (Le == null ? void 0 : Le.getBoundingClientRect().left) ?? 0, Ae = H.clientX - it;
    Ae < me * dt ? f("left") : Ae > me * (1 - dt) ? f("right") : f(null);
    const st = le + ce / 2, je = Math.max(-1, Math.min(1, (Ae - st) / (ce / 2)));
    A(je);
  }, z.current = (H) => {
    var pe, be, Re;
    if (E.current = !1, document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", J), v.current) {
      const se = (pe = e.current) == null ? void 0 : pe.parentElement, me = (se == null ? void 0 : se.getBoundingClientRect().left) ?? 0, Ce = H.clientX - me, le = $.current.w, Ve = le * dt;
      if (Ce < Ve)
        X.current("left");
      else if (Ce > le - Ve)
        X.current("right");
      else {
        const Le = H.clientX - (((be = x.current) == null ? void 0 : be.x) ?? H.clientX), it = H.clientY - (((Re = x.current) == null ? void 0 : Re.y) ?? H.clientY), Ae = C.current.x + Le, st = C.current.y + it, je = {
          x: Math.max(0, Math.min(le - ce, Ae)),
          y: Math.max(0, Math.min($.current.h - 100, st))
        };
        ne.current.current = je, m(je);
      }
    }
    s(!1), f(null), x.current = null, v.current = !1, D.current = !1;
  };
  const K = k((H) => ie.current(H)).current, J = k((H) => z.current(H)).current, Me = F((H) => {
    !l || !e.current || (H.preventDefault(), H.stopPropagation(), E.current = !0, x.current = { x: H.clientX, y: H.clientY }, C.current = { ...ne.current.current }, v.current = !1, D.current = P.current !== "floating", document.addEventListener("mousemove", K), document.addEventListener("mouseup", J));
  }, [l, e, K, J]), ge = k(null), ze = F(() => {
    ge.current && (clearTimeout(ge.current), ge.current = null), l && R(!0);
  }, [l]), We = F(() => {
    E.current || (ge.current = setTimeout(() => {
      R(!1), f(null), A(0), ge.current = null;
    }, 50));
  }, []), Ue = F((H) => {
    if (!l || c) return;
    const pe = e.current;
    if (!pe) return;
    const be = H.currentTarget.getBoundingClientRect();
    if (H.clientY > be.bottom) return;
    const Re = pe.getBoundingClientRect(), se = H.clientX - Re.left, me = ce * ir, Ce = Math.max(-1, Math.min(1, (se - ce / 2) / (ce / 2)));
    A(Ce);
    const le = P.current;
    se < me && le !== "snapped-left" ? f("left") : se > ce - me && le !== "snapped-right" ? f("right") : f(null);
  }, [l, c, e]);
  return I(() => {
    c || m(r.current);
  }, [r.current.x, r.current.y, c]), I(() => () => {
    document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", J);
  }, [K, J]), I(() => {
    l || (s(!1), f(null), R(!1), A(0));
  }, [l]), {
    position: p,
    isDragging: c,
    isUnsnapping: d,
    snapHint: b,
    isExpanded: M,
    snapBarPosition: L,
    dragRegionProps: { onMouseDown: Me },
    hoverZoneProps: {
      onMouseEnter: ze,
      onMouseLeave: We,
      onMouseMove: Ue
    }
  };
}
const nn = {
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
}, sr = {
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
function Ts() {
  return typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? sr : nn;
}
const Bs = nn;
function Hs(e) {
  return e.replace("#", "");
}
const Ds = [
  { key: "tl", style: { top: -4, left: -4 } },
  { key: "tc", style: { top: -5, left: "calc(50% - 5px)" } },
  { key: "tr", style: { top: -4, right: -4 } },
  { key: "ml", style: { top: "calc(50% - 5px)", left: -5 } },
  { key: "mr", style: { top: "calc(50% - 5px)", right: -5 } },
  { key: "bl", style: { bottom: -4, left: -4 } },
  { key: "bc", style: { bottom: -5, left: "calc(50% - 5px)" } },
  { key: "br", style: { bottom: -4, right: -4 } }
];
function rt(e, t = 0, n = 0) {
  const [r, i] = w(e);
  return I(() => {
    const a = e ? t : n;
    if (a <= 0) {
      i(e);
      return;
    }
    const l = setTimeout(() => i(e), a * 1e3);
    return () => clearTimeout(l);
  }, [e, t, n]), r;
}
function lr(e, t) {
  const [n, r] = w(["site-styles"]), [i, a] = w(0);
  I(() => {
    const c = e.current;
    if (!c) return;
    const s = (d) => {
      const u = d.target;
      if (u.tagName === "A" && u.getAttribute("href")) {
        const p = u.getAttribute("href");
        if (p.startsWith("/")) {
          const m = p.replace("/config/", "").split("/");
          r((b) => {
            const f = [...b];
            return m.forEach((M, R) => {
              f[R] = M;
            }), f;
          }), a(m.length - 1), d.preventDefault();
        }
      }
    };
    return c.addEventListener("click", s), () => c.removeEventListener("click", s);
  }, [e]);
  const l = F(() => {
    a((c) => Math.max(0, c - 1));
  }, []);
  return I(() => {
    t && (r(["site-styles"]), a(0));
  }, [t]), _(() => ({ route: n, depth: i, onBack: l }), [n, i, l]);
}
const cr = "_container_191aw_1", dr = "_active_191aw_25", ur = "_current_191aw_29", pr = "_header_191aw_33", Ye = {
  container: cr,
  active: dr,
  current: ur,
  header: pr
}, mr = (...e) => e.filter(Boolean).join(" ");
function hr({ children: e, title: t, description: n, depth: r = 0, isActive: i = !1 }) {
  const a = _(
    () => mr(Ye.container, i && Ye.active, i && Ye.current),
    [i]
  );
  return /* @__PURE__ */ o("div", { className: a, style: { "--depth": r }, children: i && /* @__PURE__ */ g(Oe, { children: [
    (t || n) && /* @__PURE__ */ g("div", { className: Ye.header, children: [
      t && /* @__PURE__ */ o("h1", { children: t }),
      n && /* @__PURE__ */ o("h2", { children: n })
    ] }),
    e
  ] }) });
}
const fr = N(hr), gr = "_container_1wora_1", br = "_wrap_1wora_7", vr = "_content_1wora_7", yr = "_fadeup_1wora_13", xr = "_fadeoutdown_1wora_19", wr = "_label_1wora_46", _r = "_buttonBox_1wora_66", kr = "_active_1wora_109", Fr = "_disclosure_1wora_119", Rr = "_disclosureWrapper_1wora_133", ee = {
  container: gr,
  wrap: br,
  content: vr,
  fadeup: yr,
  fadeoutdown: xr,
  label: wr,
  buttonBox: _r,
  active: kr,
  disclosure: Fr,
  disclosureWrapper: Rr
}, ft = (...e) => e.filter(Boolean).join(" ");
function Lt({
  active: e = !1,
  children: t,
  className: n,
  onClick: r,
  tag: i = "button",
  ...a
}) {
  const [l, c] = w(!1), s = _(
    () => ft(n, ee.buttonBox, l && "hover", e && ee.active),
    [n, l, e]
  ), d = F(() => c(!0), []), u = F(() => c(!1), []);
  return /* @__PURE__ */ o(
    i,
    {
      className: s,
      onMouseEnter: d,
      onMouseLeave: u,
      onClick: (m) => {
        c(!1), r == null || r(m);
      },
      tabIndex: 0,
      ...a,
      children: t
    }
  );
}
function Cr() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M1 1l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Sr({
  active: e = !1,
  onClick: t,
  children: n,
  disclosure: r,
  wrap: i = !1,
  label: a,
  delayShow: l = 0,
  animateReveal: c = !1,
  isShown: s = !0
}) {
  const d = _(
    () => ft(
      ee.container,
      i && ee.wrap,
      c && s && ee.fadeup,
      c && !s && ee.fadeoutdown
    ),
    [i, s, c]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: d,
      style: { "--animation-delay": `${l}s` },
      children: [
        /* @__PURE__ */ g(Lt, { active: e, onClick: t, children: [
          /* @__PURE__ */ o("div", { className: ee.label, children: a }),
          /* @__PURE__ */ o("div", { className: ee.content, children: n })
        ] }),
        r && /* @__PURE__ */ o("div", { className: ee.disclosureWrapper, children: /* @__PURE__ */ o(
          Lt,
          {
            tag: "a",
            className: ft(ee.buttonBox, ee.disclosure),
            href: r,
            children: /* @__PURE__ */ o(Cr, {})
          }
        ) })
      ]
    }
  );
}
const Ie = N(Sr), Er = "_container_1bxjx_1", Mr = "_label_1bxjx_20", Lr = "_suffix_1bxjx_25", Ar = "_chevron_1bxjx_30", Xe = {
  container: Er,
  label: Mr,
  suffix: Lr,
  chevron: Ar
};
function Nr() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o(
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
function Ir({ label: e, suffix: t, href: n, ...r }) {
  return /* @__PURE__ */ g("a", { className: Xe.container, href: n, ...r, children: [
    /* @__PURE__ */ o("div", { className: Xe.label, children: e }),
    t && /* @__PURE__ */ o("div", { className: Xe.suffix, children: t }),
    /* @__PURE__ */ o("div", { className: Xe.chevron, children: /* @__PURE__ */ o(Nr, {}) })
  ] });
}
const At = N(Ir), Tr = "_container_19xa4_3", Br = "_item_19xa4_17", Hr = "_directionInUp_19xa4_31", Dr = "_directionInDown_19xa4_35", Or = "_directionInLeft_19xa4_39", Pr = "_directionInRight_19xa4_43", $r = "_directionOutUp_19xa4_49", zr = "_directionOutDown_19xa4_53", Wr = "_directionOutLeft_19xa4_57", Ur = "_directionOutRight_19xa4_61", Vr = "_visible_19xa4_67", jr = "_animateIn_19xa4_76", Gr = "_hidden_19xa4_85", Zr = "_useOpacity_19xa4_99", V = {
  container: Tr,
  item: Br,
  directionInUp: Hr,
  directionInDown: Dr,
  directionInLeft: Or,
  directionInRight: Pr,
  directionOutUp: $r,
  directionOutDown: zr,
  directionOutLeft: Wr,
  directionOutRight: Ur,
  visible: Vr,
  animateIn: jr,
  hidden: Gr,
  useOpacity: Zr
};
function rn(...e) {
  return e.filter(Boolean).join(" ");
}
const qr = {
  up: V.directionInUp,
  down: V.directionInDown,
  left: V.directionInLeft,
  right: V.directionInRight
}, Yr = {
  up: V.directionOutUp,
  down: V.directionOutDown,
  left: V.directionOutLeft,
  right: V.directionOutRight
}, Xr = Xt({
  isHidden: !1
}), Kr = N(function(t) {
  const {
    child: n,
    className: r,
    delayHide: i = 0,
    delayShow: a = 0,
    duration: l = 0.25,
    distance: c = 0.25,
    animateIn: s = !0,
    directionIn: d = "up",
    directionOut: u = "up",
    useOpacity: p = !0,
    isShown: m,
    onRemoved: b
  } = t, [f, M] = w(!1), [R, L] = w(!1), A = k(null), x = k(), C = k(), v = k(!1), E = k(!1), D = F(() => {
    if (clearTimeout(x.current), clearTimeout(C.current), !s) {
      M(!0);
      return;
    }
    C.current = setTimeout(() => {
      L(!1), M(!0);
    }, 30 + (i + a) * 1e3);
  }, [s, i, a]), X = F(() => {
    clearTimeout(x.current), clearTimeout(C.current), L(!0), x.current = setTimeout(() => {
      b();
    }, (i + l) * 1e3);
  }, [b, i, l]);
  I(() => {
    if (m) {
      if (v.current)
        return;
      E.current = !1, v.current = !0, D();
      return;
    }
    E.current || (v.current = !1, E.current = !0, X());
  }, [m, D, X]);
  const ae = _(
    () => rn(
      r,
      V.item,
      f && V.visible,
      R && V.hidden,
      p && V.useOpacity,
      s && V.animateIn,
      qr[d],
      Yr[u]
    ),
    [r, f, R, d, u, s, p]
  ), P = _(
    () => ({
      "--swap-duration": `${l}s`,
      "--swap-distance": `${c}rem`
    }),
    [l, c]
  ), $ = _(
    () => ({
      isHidden: !f || R
    }),
    [f, R]
  );
  return /* @__PURE__ */ o(Xr.Provider, { value: $, children: /* @__PURE__ */ o("div", { ref: A, style: P, className: ae, children: n }) });
});
function Jr(e) {
  const {
    Tag: t = "div",
    animateFirst: n = !1,
    children: r,
    className: i,
    classNameContent: a,
    delayHide: l = 0,
    duration: c = 0.35,
    delayShow: s = 0.2,
    distance: d = 0.25,
    directionIn: u = "up",
    directionOut: p = "up",
    useOpacity: m = !0,
    ...b
  } = e, f = k(!0), [M, R] = w([]), L = F((A) => {
    R((x) => x.filter((C) => C.child !== A));
  }, []);
  return I(() => {
    f.current = !0;
  }, []), I(() => {
    if (!r) {
      R(
        (x) => x.map((C) => ({
          ...C,
          isShown: !1,
          animateIn: !1
        }))
      );
      return;
    }
    const A = n ? !0 : !f.current;
    R((x) => {
      const C = wn.map(r, (E, D) => ({
        child: E,
        key: E.key || D.toString(),
        animateIn: A,
        isShown: !0,
        delayShow: s,
        directionIn: u,
        directionOut: p
      }));
      return [...x.filter((E) => C.every((D) => D.key !== E.key)).map((E) => ({
        ...E,
        isShown: !1,
        delayShow: s,
        animateIn: !1
      })), ...C];
    }), f.current = !1;
  }, [n, r, u, p, s]), /* @__PURE__ */ o(t, { className: rn(i, V.container), ...b, children: M.map(({ animateIn: A, child: x, isShown: C, delayShow: v }) => /* @__PURE__ */ o(
    Kr,
    {
      className: a,
      child: x,
      animateIn: A,
      isShown: C,
      directionIn: u,
      directionOut: p,
      duration: c,
      distance: d,
      onRemoved: () => L(x),
      delayShow: v,
      delayHide: l,
      useOpacity: m
    },
    x.key || "defaultKey"
  )) });
}
const oe = N(Jr), we = [
  "white-hsl",
  "lightaccent-hsl",
  "accent-hsl",
  "darkaccent-hsl",
  "black-hsl"
];
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e);
}
var Qr = /^\s+/, eo = /\s+$/;
function y(e, t) {
  if (e = e || "", t = t || {}, e instanceof y)
    return e;
  if (!(this instanceof y))
    return new y(e, t);
  var n = to(e);
  this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n.ok;
}
y.prototype = {
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
    var t = this.toRgb(), n, r, i, a, l, c;
    return n = t.r / 255, r = t.g / 255, i = t.b / 255, n <= 0.03928 ? a = n / 12.92 : a = Math.pow((n + 0.055) / 1.055, 2.4), r <= 0.03928 ? l = r / 12.92 : l = Math.pow((r + 0.055) / 1.055, 2.4), i <= 0.03928 ? c = i / 12.92 : c = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * a + 0.7152 * l + 0.0722 * c;
  },
  setAlpha: function(t) {
    return this._a = on(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = It(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = It(this._r, this._g, this._b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.v * 100);
    return this._a == 1 ? "hsv(" + n + ", " + r + "%, " + i + "%)" : "hsva(" + n + ", " + r + "%, " + i + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var t = Nt(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      l: t.l,
      a: this._a
    };
  },
  toHslString: function() {
    var t = Nt(this._r, this._g, this._b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.l * 100);
    return this._a == 1 ? "hsl(" + n + ", " + r + "%, " + i + "%)" : "hsla(" + n + ", " + r + "%, " + i + "%, " + this._roundA + ")";
  },
  toHex: function(t) {
    return Tt(this._r, this._g, this._b, t);
  },
  toHexString: function(t) {
    return "#" + this.toHex(t);
  },
  toHex8: function(t) {
    return ao(this._r, this._g, this._b, this._a, t);
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
      r: Math.round(T(this._r, 255) * 100) + "%",
      g: Math.round(T(this._g, 255) * 100) + "%",
      b: Math.round(T(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(T(this._r, 255) * 100) + "%, " + Math.round(T(this._g, 255) * 100) + "%, " + Math.round(T(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(T(this._r, 255) * 100) + "%, " + Math.round(T(this._g, 255) * 100) + "%, " + Math.round(T(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : vo[Tt(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var n = "#" + Bt(this._r, this._g, this._b, this._a), r = n, i = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var a = y(t);
      r = "#" + Bt(a._r, a._g, a._b, a._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + i + "startColorstr=" + n + ",endColorstr=" + r + ")";
  },
  toString: function(t) {
    var n = !!t;
    t = t || this._format;
    var r = !1, i = this._a < 1 && this._a >= 0, a = !n && i && (t === "hex" || t === "hex6" || t === "hex3" || t === "hex4" || t === "hex8" || t === "name");
    return a ? t === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  },
  clone: function() {
    return y(this.toString());
  },
  _applyModification: function(t, n) {
    var r = t.apply(null, [this].concat([].slice.call(n)));
    return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
  },
  lighten: function() {
    return this._applyModification(co, arguments);
  },
  brighten: function() {
    return this._applyModification(uo, arguments);
  },
  darken: function() {
    return this._applyModification(po, arguments);
  },
  desaturate: function() {
    return this._applyModification(io, arguments);
  },
  saturate: function() {
    return this._applyModification(so, arguments);
  },
  greyscale: function() {
    return this._applyModification(lo, arguments);
  },
  spin: function() {
    return this._applyModification(mo, arguments);
  },
  _applyCombination: function(t, n) {
    return t.apply(null, [this].concat([].slice.call(n)));
  },
  analogous: function() {
    return this._applyCombination(go, arguments);
  },
  complement: function() {
    return this._applyCombination(ho, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(bo, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(fo, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Ht, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Ht, [4]);
  }
};
y.fromRatio = function(e, t) {
  if (tt(e) == "object") {
    var n = {};
    for (var r in e)
      e.hasOwnProperty(r) && (r === "a" ? n[r] = e[r] : n[r] = De(e[r]));
    e = n;
  }
  return y(e, t);
};
function to(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, n = 1, r = null, i = null, a = null, l = !1, c = !1;
  return typeof e == "string" && (e = _o(e)), tt(e) == "object" && (de(e.r) && de(e.g) && de(e.b) ? (t = no(e.r, e.g, e.b), l = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : de(e.h) && de(e.s) && de(e.v) ? (r = De(e.s), i = De(e.v), t = oo(e.h, r, i), l = !0, c = "hsv") : de(e.h) && de(e.s) && de(e.l) && (r = De(e.s), a = De(e.l), t = ro(e.h, r, a), l = !0, c = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = on(n), {
    ok: l,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
function no(e, t, n) {
  return {
    r: T(e, 255) * 255,
    g: T(t, 255) * 255,
    b: T(n, 255) * 255
  };
}
function Nt(e, t, n) {
  e = T(e, 255), t = T(t, 255), n = T(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), a, l, c = (r + i) / 2;
  if (r == i)
    a = l = 0;
  else {
    var s = r - i;
    switch (l = c > 0.5 ? s / (2 - r - i) : s / (r + i), r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: l,
    l: c
  };
}
function ro(e, t, n) {
  var r, i, a;
  e = T(e, 360), t = T(t, 100), n = T(n, 100);
  function l(d, u, p) {
    return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? d + (u - d) * 6 * p : p < 1 / 2 ? u : p < 2 / 3 ? d + (u - d) * (2 / 3 - p) * 6 : d;
  }
  if (t === 0)
    r = i = a = n;
  else {
    var c = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - c;
    r = l(s, c, e + 1 / 3), i = l(s, c, e), a = l(s, c, e - 1 / 3);
  }
  return {
    r: r * 255,
    g: i * 255,
    b: a * 255
  };
}
function It(e, t, n) {
  e = T(e, 255), t = T(t, 255), n = T(n, 255);
  var r = Math.max(e, t, n), i = Math.min(e, t, n), a, l, c = r, s = r - i;
  if (l = r === 0 ? 0 : s / r, r == i)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
        break;
    }
    a /= 6;
  }
  return {
    h: a,
    s: l,
    v: c
  };
}
function oo(e, t, n) {
  e = T(e, 360) * 6, t = T(t, 100), n = T(n, 100);
  var r = Math.floor(e), i = e - r, a = n * (1 - t), l = n * (1 - i * t), c = n * (1 - (1 - i) * t), s = r % 6, d = [n, l, a, a, c, n][s], u = [c, n, n, l, a, a][s], p = [a, a, c, n, n, l][s];
  return {
    r: d * 255,
    g: u * 255,
    b: p * 255
  };
}
function Tt(e, t, n, r) {
  var i = [te(Math.round(e).toString(16)), te(Math.round(t).toString(16)), te(Math.round(n).toString(16))];
  return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function ao(e, t, n, r, i) {
  var a = [te(Math.round(e).toString(16)), te(Math.round(t).toString(16)), te(Math.round(n).toString(16)), te(an(r))];
  return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Bt(e, t, n, r) {
  var i = [te(an(r)), te(Math.round(e).toString(16)), te(Math.round(t).toString(16)), te(Math.round(n).toString(16))];
  return i.join("");
}
y.equals = function(e, t) {
  return !e || !t ? !1 : y(e).toRgbString() == y(t).toRgbString();
};
y.random = function() {
  return y.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function io(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.s -= t / 100, n.s = ot(n.s), y(n);
}
function so(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.s += t / 100, n.s = ot(n.s), y(n);
}
function lo(e) {
  return y(e).desaturate(100);
}
function co(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.l += t / 100, n.l = ot(n.l), y(n);
}
function uo(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toRgb();
  return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), y(n);
}
function po(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.l -= t / 100, n.l = ot(n.l), y(n);
}
function mo(e, t) {
  var n = y(e).toHsl(), r = (n.h + t) % 360;
  return n.h = r < 0 ? 360 + r : r, y(n);
}
function ho(e) {
  var t = y(e).toHsl();
  return t.h = (t.h + 180) % 360, y(t);
}
function Ht(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var n = y(e).toHsl(), r = [y(e)], i = 360 / t, a = 1; a < t; a++)
    r.push(y({
      h: (n.h + a * i) % 360,
      s: n.s,
      l: n.l
    }));
  return r;
}
function fo(e) {
  var t = y(e).toHsl(), n = t.h;
  return [y(e), y({
    h: (n + 72) % 360,
    s: t.s,
    l: t.l
  }), y({
    h: (n + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function go(e, t, n) {
  t = t || 6, n = n || 30;
  var r = y(e).toHsl(), i = 360 / n, a = [y(e)];
  for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
    r.h = (r.h + i) % 360, a.push(y(r));
  return a;
}
function bo(e, t) {
  t = t || 6;
  for (var n = y(e).toHsv(), r = n.h, i = n.s, a = n.v, l = [], c = 1 / t; t--; )
    l.push(y({
      h: r,
      s: i,
      v: a
    })), a = (a + c) % 1;
  return l;
}
y.mix = function(e, t, n) {
  n = n === 0 ? 0 : n || 50;
  var r = y(e).toRgb(), i = y(t).toRgb(), a = n / 100, l = {
    r: (i.r - r.r) * a + r.r,
    g: (i.g - r.g) * a + r.g,
    b: (i.b - r.b) * a + r.b,
    a: (i.a - r.a) * a + r.a
  };
  return y(l);
};
y.readability = function(e, t) {
  var n = y(e), r = y(t);
  return (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(n.getLuminance(), r.getLuminance()) + 0.05);
};
y.isReadable = function(e, t, n) {
  var r = y.readability(e, t), i, a;
  switch (a = !1, i = ko(n), i.level + i.size) {
    case "AAsmall":
    case "AAAlarge":
      a = r >= 4.5;
      break;
    case "AAlarge":
      a = r >= 3;
      break;
    case "AAAsmall":
      a = r >= 7;
      break;
  }
  return a;
};
y.mostReadable = function(e, t, n) {
  var r = null, i = 0, a, l, c, s;
  n = n || {}, l = n.includeFallbackColors, c = n.level, s = n.size;
  for (var d = 0; d < t.length; d++)
    a = y.readability(e, t[d]), a > i && (i = a, r = y(t[d]));
  return y.isReadable(e, r, {
    level: c,
    size: s
  }) || !l ? r : (n.includeFallbackColors = !1, y.mostReadable(e, ["#fff", "#000"], n));
};
var gt = y.names = {
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
}, vo = y.hexNames = yo(gt);
function yo(e) {
  var t = {};
  for (var n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function on(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function T(e, t) {
  xo(e) && (e = "100%");
  var n = wo(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function ot(e) {
  return Math.min(1, Math.max(0, e));
}
function Y(e) {
  return parseInt(e, 16);
}
function xo(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function wo(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function te(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function De(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function an(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Dt(e) {
  return Y(e) / 255;
}
var Q = (function() {
  var e = "[-\\+]?\\d+%?", t = "[-\\+]?\\d*\\.\\d+%?", n = "(?:" + t + ")|(?:" + e + ")", r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?", i = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(n),
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function de(e) {
  return !!Q.CSS_UNIT.exec(e);
}
function _o(e) {
  e = e.replace(Qr, "").replace(eo, "").toLowerCase();
  var t = !1;
  if (gt[e])
    e = gt[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var n;
  return (n = Q.rgb.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3]
  } : (n = Q.rgba.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3],
    a: n[4]
  } : (n = Q.hsl.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3]
  } : (n = Q.hsla.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3],
    a: n[4]
  } : (n = Q.hsv.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3]
  } : (n = Q.hsva.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3],
    a: n[4]
  } : (n = Q.hex8.exec(e)) ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    a: Dt(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Q.hex6.exec(e)) ? {
    r: Y(n[1]),
    g: Y(n[2]),
    b: Y(n[3]),
    format: t ? "name" : "hex"
  } : (n = Q.hex4.exec(e)) ? {
    r: Y(n[1] + "" + n[1]),
    g: Y(n[2] + "" + n[2]),
    b: Y(n[3] + "" + n[3]),
    a: Dt(n[4] + "" + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Q.hex3.exec(e)) ? {
    r: Y(n[1] + "" + n[1]),
    g: Y(n[2] + "" + n[2]),
    b: Y(n[3] + "" + n[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function ko(e) {
  var t, n;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), n !== "small" && n !== "large" && (n = "small"), {
    level: t,
    size: n
  };
}
function at(e) {
  return e.reduce((t, n, r) => {
    const i = y(n).toHsl(), a = `${i.h}deg, ${Math.round(i.s * 100)}%, ${Math.round(i.l * 100)}%`;
    return t[`--${we[r] || "default"}`] = a, t;
  }, {});
}
function Ee(e, t = 1) {
  const [n, r] = w(!1);
  return I(() => {
    if (e) {
      r(!0);
      const i = setTimeout(() => r(!1), t * 1e3);
      return () => clearTimeout(i);
    }
  }, [e, t]), n;
}
const Fo = "_container_62cx0_1", Ro = "_measure_62cx0_6", Co = "_wrapper_62cx0_13", So = "_virtual_62cx0_19", Eo = "_scale_62cx0_25", Te = {
  container: Fo,
  measure: Ro,
  wrapper: Co,
  virtual: So,
  scale: Eo
};
function Mo(...e) {
  return e.filter(Boolean).join(" ");
}
function Lo(e) {
  const {
    className: t,
    Tag: n = "div",
    input: r,
    children: i,
    upscale: a = !1,
    contain: l = !1,
    style: c = {},
    ...s
  } = e, d = _(() => Mo(t, Te.container), [t]), u = k(null), p = k(null), m = k(null), b = k(null), [f, M] = w(1), [R, L] = w(1), A = F(() => {
    if (!p.current || !b.current || !m.current)
      return;
    const x = p.current.clientWidth / b.current.clientWidth, C = Number(
      (m.current.clientHeight / b.current.clientHeight).toFixed(3)
    ), v = l ? Math.min(x, C) : x;
    M(l ? 1 + Math.max(0, x - v) : x), !a && v >= 1 ? L(1) : L(Math.max(0.1, v));
  }, [l, a]);
  return _n(() => {
    if (!m.current || !p.current || !b.current)
      return;
    const x = new ResizeObserver(A);
    return x.observe(m.current), x.observe(p.current), x.observe(b.current), window.addEventListener("resize", A), A(), () => {
      x.disconnect(), window.removeEventListener("resize", A);
    };
  }, [A]), I(() => {
    var x;
    (x = u.current) != null && x.parentNode && u.current.parentNode.style.setProperty("--max-scale", String(f));
  }, [f]), /* @__PURE__ */ o(
    n,
    {
      ref: u,
      className: d,
      style: {
        "--scale": R,
        "--max-scale": f,
        ...c
      },
      ...s,
      children: /* @__PURE__ */ g("div", { ref: p, className: Te.measure, children: [
        /* @__PURE__ */ o("div", { ref: m, className: Te.wrapper, children: /* @__PURE__ */ o("div", { ref: b, className: Te.virtual, children: r || i }) }),
        /* @__PURE__ */ o("div", { className: Te.scale, children: i })
      ] })
    }
  );
}
const ke = N(Lo), Ao = "_container_1rv8h_3", No = "_active_1rv8h_36", Io = "_contracted_1rv8h_40", Be = {
  container: Ao,
  active: No,
  contracted: Io
}, To = 0.2;
function Bo(e) {
  const { colors: t = [], isInteractive: n = !1 } = e, r = k(null), i = _(
    () => /* @__PURE__ */ o(Oe, { children: t.map((a, l) => /* @__PURE__ */ o(
      "div",
      {
        style: { "--color": a, zIndex: -l }
      },
      l
    )) }),
    [t]
  );
  return I(() => {
    const a = r.current ? Array.from(r.current.children) : [];
    let l = null;
    const c = () => {
      a.forEach((s) => {
        s.classList.remove(Be.active), s.classList.remove(Be.contracted);
      });
    };
    if (c(), n) {
      let s = 1;
      const d = () => {
        a.forEach((u, p) => {
          u.classList.toggle(Be.active, p === s), u.classList.toggle(Be.contracted, p < s);
        }), s >= a.length ? (l && clearInterval(l), c()) : s += 1;
      };
      d(), l = setInterval(d, To * 1e3);
    }
    return () => {
      l && clearInterval(l);
    };
  }, [n, t.length]), /* @__PURE__ */ o("div", { ref: r, className: Be.container, children: i });
}
const sn = N(Bo), Ho = "_container_1mm99_3", Do = "_shapePill_1mm99_26", Oo = "_shapeOval_1mm99_30", Po = "_shapeSquare_1mm99_34", $o = "_shapeUnderline_1mm99_38", zo = "_fill_1mm99_47", Wo = "_cardBackgroundMatch_1mm99_64", Uo = "_hover_1mm99_73", Vo = "_outer_1mm99_83", jo = "_inner_1mm99_87", re = {
  container: Ho,
  shapePill: Do,
  shapeOval: Oo,
  shapeSquare: Po,
  shapeUnderline: $o,
  fill: zo,
  cardBackgroundMatch: Wo,
  hover: Uo,
  outer: Vo,
  inner: jo
};
function Go(...e) {
  return e.filter(Boolean).join(" ");
}
const Zo = {
  pill: re.shapePill,
  oval: re.shapeOval,
  square: re.shapeSquare,
  underline: re.shapeUnderline
};
function qo(e) {
  const {
    children: t,
    className: n,
    fill: r,
    invert: i,
    outline: a,
    shape: l,
    primaryColor: c,
    primaryColorNoFill: s,
    borderRadius: d = ["0", "0", "0", "0"],
    fontWeight: u = 500,
    secondaryColor: p,
    secondaryColorNoFill: m,
    textTransform: b = "none",
    isHover: f = !1,
    ...M
  } = e, R = _(
    () => Go(
      re.container,
      r && re.fill,
      l ? Zo[l] : void 0,
      f && re.hover
    ),
    [r, l, f]
  ), L = _(
    () => ({
      "--color-primary-hsl": r ? i ? p : c : s,
      "--color-secondary-hsl": r ? i ? c : p : m,
      "--border-width": a,
      "--border-radius": d.join(" ")
    }),
    [
      d,
      r,
      i,
      a,
      c,
      s,
      p,
      m
    ]
  ), A = _(
    () => `${n}_${b}_${u}`,
    [n, b, u]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: R,
      style: L,
      tabIndex: -1,
      ...M,
      children: [
        /* @__PURE__ */ o("div", { className: re.cardBackgroundMatch }),
        /* @__PURE__ */ o(oe, { className: re.outer, classNameContent: re.inner, children: /* @__PURE__ */ o(
          "span",
          {
            className: n,
            style: {
              textTransform: b,
              fontWeight: u
            },
            children: t
          },
          A
        ) })
      ]
    }
  );
}
const Je = N(qo), Yo = "_container_bx5fz_3", Xo = "_heading_bx5fz_18", Ko = "_text_bx5fz_33", Jo = "_swatch_bx5fz_38", Qo = "_button_bx5fz_43", ea = "_swap_bx5fz_55", ve = {
  container: Yo,
  heading: Xo,
  text: Ko,
  swatch: Jo,
  button: Qo,
  swap: ea
}, ta = 1.15, na = 1.2, Ot = 0.04;
function ra(e) {
  const { color: t, fonts: n, buttons: r } = e, [i, a] = w(!1), l = rt(i, ta), c = Ee(l, na), s = _(() => {
    const m = (b, f) => `var(--${we[(b || t.buttons)[f]]})`;
    return {
      primaryColor: m(t.buttons, 0),
      secondaryColor: m(t.buttons, 1),
      ...t.buttonsNoFill ? {
        primaryColorNoFill: m(t.buttonsNoFill, 0),
        secondaryColorNoFill: m(t.buttonsNoFill, 1)
      } : {
        primaryColorNoFill: m(t.buttons, 1),
        secondaryColorNoFill: m(t.buttons, 0)
      }
    };
  }, [t]), d = _(
    () => ({
      "--color-background": t.palette[t.background],
      "--color-heading": t.palette[t.headings]
    }),
    [t]
  ), u = _(
    () => at(t.palette),
    [t]
  ), p = _(
    () => ({
      heading: n.headingFont.className,
      swatch: JSON.stringify(t.palette),
      button: JSON.stringify({ ...r.primary, fonts: n })
    }),
    [t.palette, r.primary, n]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: ve.container,
      style: d,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        /* @__PURE__ */ o("div", { className: ve.heading, children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o(oe, { classNameContent: ve.text, children: /* @__PURE__ */ o("div", { className: n.headingFont.className, children: "Aa" }, p.heading) }) }) }),
        /* @__PURE__ */ o("div", { className: ve.swatch, children: /* @__PURE__ */ o(oe, { className: ve.swap, delayHide: Ot, children: /* @__PURE__ */ o(
          sn,
          {
            colors: t.palette,
            isInteractive: i
          },
          p.swatch
        ) }) }),
        /* @__PURE__ */ o("div", { className: ve.button, style: u, children: /* @__PURE__ */ o(
          oe,
          {
            className: ve.swap,
            delayHide: Ot * 2,
            children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o(
              Je,
              {
                className: n.paragraphFont.className,
                ...r.primary,
                ...s,
                isHover: c,
                children: "Button"
              }
            ) }, p.button)
          }
        ) })
      ]
    }
  );
}
const ln = N(ra), oa = "_container_1brv3_3", aa = "_hoverHeading_1brv3_16", ia = "_heading_1brv3_16", sa = "_paragraph_1brv3_21", la = "_hoverParagraph_1brv3_26", ca = "_swap_1brv3_36", da = "_text_1brv3_69", fe = {
  container: oa,
  hoverHeading: aa,
  heading: ia,
  paragraph: sa,
  hoverParagraph: la,
  swap: ca,
  text: da
}, ua = 0.2, pa = 0.75, ut = ua + pa;
function pt(...e) {
  return e.filter(Boolean).join(" ");
}
function ma(e) {
  const { color: t, fonts: n } = e, [r, i] = w(!1), a = rt(r, ut), l = Ee(r, ut), c = Ee(a, ut), s = _(
    () => pt(
      fe.container,
      l && fe.hoverHeading,
      c && fe.hoverParagraph
    ),
    [l, c]
  ), d = _(
    () => ({
      "--color": t.palette[4]
    }),
    [t.palette]
  ), [u, p] = _(
    () => [
      pt(n.headingFont.className, fe.text),
      pt(n.paragraphFont.className, fe.text)
    ],
    [n.headingFont.className, n.paragraphFont.className]
  ), m = _(
    () => `${u}_${p}`,
    [u, p]
  );
  return /* @__PURE__ */ o(
    oe,
    {
      className: s,
      style: d,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ g("div", { className: fe.swap, children: [
        /* @__PURE__ */ o("div", { className: fe.heading, children: /* @__PURE__ */ o(ke, { upscale: !0, contain: !0, children: /* @__PURE__ */ o("div", { className: u, children: "Heading" }) }) }),
        /* @__PURE__ */ o("div", { className: fe.paragraph, children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o("div", { className: p, children: "This is your paragraph." }) }) })
      ] }, m)
    }
  );
}
const cn = N(ma), ha = "_container_1pxtn_3", fa = {
  container: ha
};
function ga(e) {
  const { color: t } = e, { palette: n } = t, [r, i] = w(!1), a = _(() => JSON.stringify(n), [n]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: fa.container,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ o(oe, { children: /* @__PURE__ */ o(sn, { colors: n, isInteractive: r }, a) })
    }
  );
}
const dn = N(ga), ba = "_container_1j81e_3", va = "_interactive_1j81e_19", ya = "_button_1j81e_19", xa = "_primary_1j81e_23", wa = "_secondary_1j81e_27", _a = "_tertiary_1j81e_32", ka = "_buttons_1j81e_39", ue = {
  container: ba,
  interactive: va,
  button: ya,
  primary: xa,
  secondary: wa,
  tertiary: _a,
  buttons: ka
}, Fa = 0.2, Ra = 1.5;
function Ke(...e) {
  return e.filter(Boolean).join(" ");
}
function Ca(e) {
  const { buttons: t, color: n, fonts: r } = e, [i, a] = w(!1), l = Ee(
    i,
    Fa + Ra
  ), c = _(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = _(
    () => Ke(ue.container, l && ue.interactive),
    [l]
  ), d = _(
    () => at(n.palette),
    [n.palette]
  ), u = _(() => {
    const p = l ? "Primary" : "Button", m = (f, M) => `var(--${we[(f || n.buttons)[M]]})`, b = {
      primaryColor: m(n.buttonsPreview, 0),
      secondaryColor: m(n.buttonsPreview, 1),
      primaryColorNoFill: m(n.buttonsNoFillPreview, 0),
      secondaryColorNoFill: m(n.buttonsNoFillPreview, 1)
    };
    return /* @__PURE__ */ g(Oe, { children: [
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.tertiary), children: /* @__PURE__ */ o(
        Je,
        {
          className: r.paragraphFont.className,
          ...t.tertiary,
          ...b,
          children: "Tertiary"
        }
      ) }),
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.secondary), children: /* @__PURE__ */ o(
        Je,
        {
          className: r.paragraphFont.className,
          ...t.secondary,
          ...b,
          children: "Secondary"
        }
      ) }),
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.primary), children: /* @__PURE__ */ o(
        Je,
        {
          className: r.paragraphFont.className,
          ...t.primary,
          ...b,
          children: p
        }
      ) })
    ] });
  }, [t, n, r.paragraphFont.className, l]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: s,
      style: d,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: /* @__PURE__ */ o(oe, { children: /* @__PURE__ */ o("div", { className: ue.buttons, children: u }, c) })
    }
  );
}
const un = N(Ca), Sa = "_container_1i7v7_3", Ea = "_sizeSmall_1i7v7_20", Ma = "_inputFill_1i7v7_27", La = "_input_1i7v7_27", Aa = "_optionFill_1i7v7_40", Na = "_option_1i7v7_40", Ia = "_inputShapePill_1i7v7_51", Ta = "_inputShapeSquare_1i7v7_55", Ba = "_inputShapeUnderline_1i7v7_59", Ha = "_optionShapePill_1i7v7_67", Da = "_optionShapeSquare_1i7v7_71", Oa = "_optionShapeCircle_1i7v7_75", Pa = "_optionButton_1i7v7_81", $a = "_optionInvert_1i7v7_82", za = "_hoverInput_1i7v7_88", Wa = "_hoverOption_1i7v7_93", Ua = "_label_1i7v7_152", O = {
  container: Sa,
  sizeSmall: Ea,
  inputFill: Ma,
  input: La,
  optionFill: Aa,
  option: Na,
  inputShapePill: Ia,
  inputShapeSquare: Ta,
  inputShapeUnderline: Ba,
  optionShapePill: Ha,
  optionShapeSquare: Da,
  optionShapeCircle: Oa,
  optionButton: Pa,
  optionInvert: $a,
  hoverInput: za,
  hoverOption: Wa,
  label: Ua
}, Pt = "Field";
function Va(e) {
  const { isInteractive: t, inputRate: n = 100 } = e, [r, i] = w(""), [a, l] = w(!1);
  return I(() => {
    if (t) {
      const c = Pt;
      let s = 0;
      const d = setInterval(() => {
        s <= c.length ? (i(c.substring(0, s)), l(!0), s++) : (l(!1), clearInterval(d));
      }, n);
      return () => clearInterval(d);
    } else
      i(Pt), l(!1);
  }, [t, n]), /* @__PURE__ */ g("span", { children: [
    r,
    a && "|"
  ] });
}
const ja = N(Va), mt = 1;
function $t(...e) {
  return e.filter(Boolean).join(" ");
}
const Ga = {
  pill: O.inputShapePill,
  square: O.inputShapeSquare,
  underline: O.inputShapeUnderline
}, Za = {
  pill: O.optionShapePill,
  square: O.optionShapeSquare,
  circle: O.optionShapeCircle
};
function qa() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) });
}
function Ya(e) {
  const {
    className: t,
    input: n,
    option: r,
    isInteractive: i = !1,
    size: a = "standard",
    primaryColor: l,
    secondaryColor: c,
    buttonPrimaryColor: s,
    buttonSecondaryColor: d
  } = e, u = rt(i, mt), p = Ee(i, mt), m = Ee(u, mt), b = _(
    () => $t(
      t,
      O.container,
      n.fill && O.inputFill,
      p && O.hoverInput,
      m && O.hoverOption,
      r.button && O.optionButton,
      r.fill && O.optionFill,
      r.inverted && O.optionInvert,
      Ga[n.shape],
      Za[r.shape],
      a === "small" && O.sizeSmall
    ),
    [t, n, r, a, p, m]
  ), f = _(
    () => $t(O.option, r.button && O.label),
    [r.button]
  ), M = _(
    () => ({
      "--input-border-width": n.outline,
      "--input-border-radius": n.borderRadius.join(" "),
      "--option-border-width": r.outline,
      "--option-border-radius": r.borderRadius.join(" ")
    }),
    [n.borderRadius, n.outline, r.borderRadius, r.outline]
  ), R = _(
    () => ({
      "--color-primary-hsl": l,
      "--color-secondary-hsl": c
    }),
    [l, c]
  ), L = _(
    () => ({
      "--color-primary-hsl": s,
      "--color-secondary-hsl": d
    }),
    [s, d]
  );
  return /* @__PURE__ */ g("div", { className: b, style: M, children: [
    /* @__PURE__ */ o("div", { className: O.input, style: R, children: /* @__PURE__ */ o(ja, { isInteractive: i }) }),
    /* @__PURE__ */ o("div", { className: f, style: L, children: r.button ? "Option" : /* @__PURE__ */ o(qa, {}) })
  ] });
}
const Xa = N(Ya), Ka = "_container_8tn8q_3", Ja = "_swap_8tn8q_12", Qa = "_form_8tn8q_16", ht = {
  container: Ka,
  swap: Ja,
  form: Qa
};
function ei(e) {
  const { form: t, color: n, fonts: r, previewSize: i = "standard" } = e, [a, l] = w(!1), c = _(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = _(
    () => at(n.palette),
    [n.palette]
  ), d = _(
    () => /* @__PURE__ */ o(
      Xa,
      {
        className: r.paragraphFont.className,
        ...t,
        size: i,
        primaryColor: `var(--${we[n.form[0]]})`,
        secondaryColor: `var(--${we[n.form[1]]})`,
        buttonPrimaryColor: `var(--${we[n.form[2]]})`,
        buttonSecondaryColor: `var(--${we[n.form[3]]})`,
        isInteractive: a
      }
    ),
    [a, n.form, r.paragraphFont.className, t, i]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: ht.container,
      style: s,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: /* @__PURE__ */ o(oe, { className: ht.swap, children: /* @__PURE__ */ o("div", { className: ht.form, children: d }, c) })
    }
  );
}
const pn = N(ei), ti = "_container_pfdmi_3", ni = "_undocked_pfdmi_17", ri = "_hidden_pfdmi_21", oi = "_wrapper_pfdmi_27", ai = "_background_pfdmi_35", ii = "_backgroundBox_pfdmi_47", si = "_box_pfdmi_55", li = "_panel_pfdmi_68", ci = "_header_pfdmi_80", di = "_body_pfdmi_98", ui = "_padding_pfdmi_113", pi = "_padBottom_pfdmi_118", mi = "_padTop_pfdmi_122", U = {
  container: ti,
  undocked: ni,
  hidden: ri,
  wrapper: oi,
  background: ai,
  backgroundBox: ii,
  box: si,
  panel: li,
  header: ci,
  body: di,
  padding: ui,
  padBottom: pi,
  padTop: mi
}, mn = (...e) => e.filter(Boolean).join(" ");
function hi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: U.panel, children: e });
}
function fi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: U.header, children: e });
}
function gi({
  children: e,
  padding: t = !1,
  padTop: n = !1,
  padBottom: r = !0
}) {
  const i = _(
    () => mn(
      U.body,
      t && U.padding,
      n && U.padTop,
      r && U.padBottom
    ),
    [t, n, r]
  );
  return /* @__PURE__ */ o("div", { className: i, children: e });
}
function bi({
  children: e,
  attachment: t,
  undocked: n = !1,
  isHidden: r = !1,
  mode: i = "light"
}) {
  const a = k(null);
  I(() => {
    if (!(t != null && t.current) || !a.current) return;
    const s = () => {
      const d = t.current, u = a.current;
      if (!d || !u) return;
      const p = d.getBoundingClientRect();
      u.style.transform = `translate3d(${Math.round(p.right + 8)}px, ${Math.round(p.top)}px, 0)`;
    };
    return s(), window.addEventListener("resize", s), window.addEventListener("scroll", s, !0), () => {
      window.removeEventListener("resize", s), window.removeEventListener("scroll", s, !0);
    };
  }, [t]);
  const l = _(
    () => mn(
      U.container,
      n && U.undocked,
      r && U.hidden,
      U[`mode-${i}`]
    ),
    [n, r, i]
  ), c = /* @__PURE__ */ o("dialog", { ref: a, className: l, open: !0, children: /* @__PURE__ */ g("div", { className: U.wrapper, children: [
    /* @__PURE__ */ o("div", { className: U.background, children: /* @__PURE__ */ o("div", { className: U.backgroundBox }) }),
    /* @__PURE__ */ o("div", { className: U.box, children: e })
  ] }) });
  return bt(c, document.body);
}
const B = N(bi);
B.Panel = N(hi);
B.Header = N(fi);
B.Body = N(gi);
const vi = "_container_17wzg_1", yi = "_shimmer_17wzg_44", xi = "_hover_17wzg_49", wi = "_active_17wzg_53", _i = "_fadeup_17wzg_62", ki = "_content_17wzg_129", Fi = "_wrap_17wzg_138", ye = {
  container: vi,
  shimmer: yi,
  hover: xi,
  active: wi,
  fadeup: _i,
  content: ki,
  wrap: Fi
}, Ri = (...e) => e.filter(Boolean).join(" ");
function Ci({
  className: e,
  children: t,
  active: n = !1,
  shimmer: r = !0,
  wrap: i = !1,
  onClick: a,
  delayShow: l = 0,
  animateReveal: c = !1,
  ...s
}) {
  const [d, u] = w(!1), p = _(
    () => Ri(
      e,
      ye.container,
      d && ye.hover,
      n && ye.active,
      c && ye.fadeup
    ),
    [e, d, n, c]
  ), m = F(() => {
    u(!0);
  }, []), b = F(() => {
    u(!1);
  }, []);
  return /* @__PURE__ */ g(
    "button",
    {
      className: p,
      onMouseEnter: m,
      onMouseLeave: b,
      onClick: (M) => {
        u(!1), a == null || a(M);
      },
      style: { "--animation-delay": `${l}s` },
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: ye.content, children: i ? /* @__PURE__ */ o("div", { className: ye.wrap, children: t }) : t }),
        r && /* @__PURE__ */ o("div", { className: ye.shimmer, "aria-hidden": "true" })
      ]
    }
  );
}
const Pe = N(Ci), Si = {
  display: "grid",
  gap: "11px"
}, Ei = {
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
function Mi({
  items: e,
  getItem: t,
  columns: n = 1,
  max: r = 8
}) {
  const [i, a] = w(!1), l = _(
    () => e.slice(0, r).map((p, m) => t(p, m)),
    [e, t, r]
  ), c = _(
    () => e.slice(r).map((p, m) => t(p, m + r)),
    [e, t, r]
  ), s = c.length > 0, d = F(
    (p) => {
      p.stopPropagation(), a((m) => !m);
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
  return /* @__PURE__ */ g("div", { style: Si, children: [
    /* @__PURE__ */ g("div", { style: u, children: [
      l,
      i && c
    ] }),
    s && /* @__PURE__ */ o("button", { style: Ei, onClick: d, children: i ? "Show Less" : "Show All" })
  ] });
}
const $e = N(Mi), zt = 1, Li = 0.04;
function Ai({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, themePacks: i, setPack: a } = Fe(), l = _(() => r.name, [r]), c = F(
    (s, d) => {
      const u = s.name, p = Math.floor(d / zt);
      return /* @__PURE__ */ o(
        Pe,
        {
          active: l === u,
          onClick: () => a(s),
          wrap: !0,
          delayShow: (p + 1) * Li,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            ln,
            {
              color: s.color,
              fonts: s.fonts,
              buttons: s.buttons
            }
          )
        },
        `${u}_${d}`
      );
    },
    [l, a]
  );
  return /* @__PURE__ */ o(B, { attachment: e, undocked: t, children: /* @__PURE__ */ g(B.Panel, { children: [
    /* @__PURE__ */ o(B.Header, { children: "Themes" }),
    /* @__PURE__ */ o(B.Body, { padding: !0, children: /* @__PURE__ */ o(
      $e,
      {
        items: i,
        getItem: c,
        columns: zt,
        max: 8
      }
    ) })
  ] }) });
}
const Ni = N(Ai), Wt = 2, Ii = 0.04;
function Ti({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, fontPacks: i, setPack: a } = Fe(), l = _(
    () => `${r.fonts.headingFont.name}_${r.fonts.paragraphFont.name}`,
    [r]
  ), c = F(
    (s, d) => {
      const u = `${s.headingFont.name}_${s.paragraphFont.name}`, p = {
        ...r,
        fonts: { ...s }
      }, m = Math.floor(d / Wt);
      return /* @__PURE__ */ o(
        Pe,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (m + 1) * Ii,
          animateReveal: !0,
          children: /* @__PURE__ */ o(cn, { color: p.color, fonts: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(B, { attachment: e, undocked: t, children: /* @__PURE__ */ g(B.Panel, { children: [
    /* @__PURE__ */ o(B.Header, { children: "Recommended Font Packs" }),
    /* @__PURE__ */ o(B.Body, { padding: !0, children: /* @__PURE__ */ o(
      $e,
      {
        items: i,
        getItem: c,
        columns: Wt,
        max: 8
      }
    ) })
  ] }) });
}
const Bi = N(Ti), Ut = 2, Hi = 0.04;
function Di({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, colorPacks: i, setPack: a } = Fe(), l = _(
    () => JSON.stringify(r.color),
    [r]
  ), c = F(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        color: { ...s }
      }, m = Math.floor(d / Ut);
      return /* @__PURE__ */ o(
        Pe,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (m + 1) * Hi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(dn, { color: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(B, { attachment: e, undocked: t, children: /* @__PURE__ */ g(B.Panel, { children: [
    /* @__PURE__ */ o(B.Header, { children: "Recommended Color Packs" }),
    /* @__PURE__ */ o(B.Body, { padding: !0, children: /* @__PURE__ */ o(
      $e,
      {
        items: i,
        getItem: c,
        columns: Ut,
        max: 8
      }
    ) })
  ] }) });
}
const Oi = N(Di), Vt = 2, Pi = 0.04;
function $i({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, buttonPacks: i, setPack: a } = Fe(), l = _(
    () => JSON.stringify(r.buttons),
    [r]
  ), c = F(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        buttons: { ...s }
      }, m = Math.floor(d / Vt);
      return /* @__PURE__ */ o(
        Pe,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (m + 1) * Pi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            un,
            {
              buttons: s,
              color: p.color,
              fonts: p.fonts
            }
          )
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(B, { attachment: e, undocked: t, children: /* @__PURE__ */ g(B.Panel, { children: [
    /* @__PURE__ */ o(B.Header, { children: "Recommended Button Packs" }),
    /* @__PURE__ */ o(B.Body, { padding: !0, children: /* @__PURE__ */ o(
      $e,
      {
        items: i,
        getItem: c,
        columns: Vt,
        max: 8
      }
    ) })
  ] }) });
}
const zi = N($i), jt = 2, Wi = 0.04;
function Ui({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, formPacks: i, setPack: a } = Fe(), l = _(
    () => JSON.stringify(r.form),
    [r]
  ), c = F(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        form: { ...s }
      }, m = Math.floor(d / jt);
      return /* @__PURE__ */ o(
        Pe,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (m + 1) * Wi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            pn,
            {
              form: s,
              color: p.color,
              fonts: p.fonts,
              previewSize: "small"
            }
          )
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(B, { attachment: e, undocked: t, children: /* @__PURE__ */ g(B.Panel, { children: [
    /* @__PURE__ */ o(B.Header, { children: "Recommended Form Packs" }),
    /* @__PURE__ */ o(B.Body, { padding: !0, children: /* @__PURE__ */ o(
      $e,
      {
        items: i,
        getItem: c,
        columns: jt,
        max: 8
      }
    ) })
  ] }) });
}
const Vi = N(Ui), ji = "_fadeup_1my1f_31", Gi = "_fadeoutdown_1my1f_36", Gt = {
  fadeup: ji,
  fadeoutdown: Gi
}, He = !0, Zi = 0.35, qi = 0.04;
function Yi({ depth: e = 0, isActive: t = !1 }) {
  const { userTheme: n } = Fe(), [r, i] = w(null), [a, l] = w(null), c = k(), s = k(null), d = F(
    (b, f) => {
      b.preventDefault(), b.stopPropagation();
      const R = { current: b.currentTarget };
      i(R), l((L) => (clearTimeout(c.current), s.current = L === f ? null : f, s.current)), clearTimeout(c.current);
    },
    []
  );
  I(() => {
    t || (l(null), i(null));
  }, [t]);
  const u = F(
    (b, f) => t ? b * 0.04 : (f - b) * 0.04,
    [t]
  ), p = F((b) => (c.current = setTimeout(() => {
    s.current === b && l(null);
  }, 0), () => {
    clearTimeout(c.current);
  }), []), m = _(() => r ? a === "themes" ? /* @__PURE__ */ o(
    Ni,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("themes")
    },
    "themes"
  ) : a === "fonts" ? /* @__PURE__ */ o(
    Bi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("fonts")
    },
    "fonts"
  ) : a === "colors" ? /* @__PURE__ */ o(
    Oi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("colors")
    },
    "colors"
  ) : a === "buttons" ? /* @__PURE__ */ o(
    zi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("buttons")
    },
    "buttons"
  ) : a === "forms" ? /* @__PURE__ */ o(
    Vi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("forms")
    },
    "forms"
  ) : null : null, [a, r, p]);
  return /* @__PURE__ */ g(fr, { title: "Styles", depth: e, isActive: t, children: [
    /* @__PURE__ */ o(
      Ie,
      {
        label: "Themes",
        isShown: t,
        onClick: (b) => d(b, "themes"),
        active: a === "themes",
        wrap: !0,
        delayShow: u(0, 5),
        animateReveal: He,
        children: /* @__PURE__ */ o(
          ln,
          {
            color: n.color,
            fonts: n.fonts,
            buttons: n.buttons
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      Ie,
      {
        disclosure: "/config/site-styles/fonts",
        label: "Fonts",
        isShown: t,
        onClick: (b) => d(b, "fonts"),
        active: a === "fonts",
        delayShow: u(1, 5),
        animateReveal: He,
        children: /* @__PURE__ */ o(cn, { color: n.color, fonts: n.fonts })
      }
    ),
    /* @__PURE__ */ o(
      Ie,
      {
        disclosure: "/config/site-styles/colors",
        label: "Colors",
        isShown: t,
        onClick: (b) => d(b, "colors"),
        active: a === "colors",
        delayShow: u(2, 5),
        animateReveal: He,
        children: /* @__PURE__ */ o(dn, { color: n.color })
      }
    ),
    /* @__PURE__ */ o(
      Ie,
      {
        disclosure: "/config/site-styles/buttons",
        label: "Buttons",
        isShown: t,
        onClick: (b) => d(b, "buttons"),
        active: a === "buttons",
        delayShow: u(3, 5),
        animateReveal: He,
        children: /* @__PURE__ */ o(
          un,
          {
            buttons: n.buttons,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      Ie,
      {
        disclosure: "/config/site-styles/forms",
        label: "Forms",
        isShown: t,
        onClick: (b) => d(b, "forms"),
        active: a === "forms",
        delayShow: u(4, 5),
        animateReveal: He,
        children: /* @__PURE__ */ o(
          pn,
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
        className: t ? Gt.fadeup : Gt.fadeoutdown,
        style: { "--animation-delay": `${u(4, 5)}s` },
        children: [
          /* @__PURE__ */ o(At, { label: "Animations", href: "/config/site-styles/animations" }),
          /* @__PURE__ */ o(At, { label: "Spacing", href: "/config/site-styles/spacing" })
        ]
      }
    ),
    /* @__PURE__ */ o(
      oe,
      {
        animateFirst: !0,
        directionOut: "down",
        delayShow: qi,
        distance: 0,
        duration: Zi,
        useOpacity: !1,
        children: m
      }
    )
  ] });
}
const Xi = N(Yi), Ki = "_container_goi2l_3", Ji = "_backButton_goi2l_7", Zt = {
  container: Ki,
  backButton: Ji
};
function Qi() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o(
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
function es(e) {
  return e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function ts() {
  const { route: e, depth: t, onBack: n } = Fe(), r = _(() => {
    if (t === 0) return null;
    const i = es(e[t] ?? "Back");
    return /* @__PURE__ */ g("button", { className: Zt.backButton, onClick: n, children: [
      /* @__PURE__ */ o(Qi, {}),
      i
    ] }, "back");
  }, [e, t, n]);
  return /* @__PURE__ */ o("div", { className: Zt.container, children: /* @__PURE__ */ o(oe, { directionIn: "left", directionOut: "left", children: r }) });
}
const ns = N(ts), rs = "_container_1anux_3", os = "_open_1anux_14", as = "_header_1anux_18", is = "_bar_1anux_31", ss = "_body_1anux_38", ls = "_panels_1anux_48", Se = {
  container: rs,
  open: os,
  header: as,
  bar: is,
  body: ss,
  panels: ls
}, cs = (...e) => e.filter(Boolean).join(" "), hn = Xt(
  {}
), Fe = () => kn(hn);
function ds({ isOpen: e, themeState: t, className: n, onClose: r }) {
  const i = k(null), a = rt(e, 0.01, 0.5), { route: l, depth: c, onBack: s } = lr(i, e), d = _(
    () => cs(n, Se.container, e && Se.open),
    [n, e]
  ), u = _(
    () => ({
      ...t,
      route: l,
      depth: c,
      onBack: s
    }),
    [t, l, c, s]
  ), p = _(() => l.map((m, b) => /* @__PURE__ */ o(Xi, { depth: b, isActive: c === b && e }, b)), [l, c, e]);
  return /* @__PURE__ */ o(hn.Provider, { value: u, children: /* @__PURE__ */ o("div", { ref: i, className: d, children: a && /* @__PURE__ */ g(Oe, { children: [
    /* @__PURE__ */ o("div", { className: Se.header, children: /* @__PURE__ */ g("div", { className: Se.bar, style: { justifyContent: "flex-start" }, children: [
      r ? /* @__PURE__ */ o(
        "button",
        {
          onClick: r,
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
      ) : /* @__PURE__ */ o("span", {}),
      /* @__PURE__ */ o(ns, {})
    ] }) }),
    /* @__PURE__ */ o("div", { className: Se.body, children: /* @__PURE__ */ o(
      "div",
      {
        className: Se.panels,
        style: { "--depth": c },
        children: p
      }
    ) })
  ] }) }) });
}
const Os = N(ds), fn = {
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
}, us = Object.values(fn).flatMap((e) => e), j = (e, t) => fn[e][t], gn = {
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
}, ps = Object.values(gn).flatMap((e) => e), G = (e, t) => gn[e][t];
function S(e, t, n = 400, r) {
  return {
    name: e,
    style: {
      fontFamily: `'${t}', sans-serif`,
      fontWeight: n,
      fontStyle: "normal"
    },
    className: e.toLowerCase().replace(/\s+/g, "-"),
    googleFontsQuery: r
  };
}
function W(e, t, n = 400, r) {
  return {
    name: e,
    style: {
      fontFamily: `'${t}', serif`,
      fontWeight: n,
      fontStyle: "normal"
    },
    className: e.toLowerCase().replace(/\s+/g, "-"),
    googleFontsQuery: r
  };
}
const h = {
  // Vibrant heading fonts
  shrikhand: S("Shrikhand", "Shrikhand", 400, "Shrikhand:wght@400"),
  concertone: S("Concert One", "Concert One", 400, "Concert+One:wght@400"),
  youngserif: W("Young Serif", "Young Serif", 400, "Young+Serif:wght@400"),
  capriola: S("Capriola", "Capriola", 400, "Capriola:wght@400"),
  lilitaone: S("Lilita One", "Lilita One", 400, "Lilita+One:wght@400"),
  trocchi: W("Trocchi", "Trocchi", 400, "Trocchi:wght@400"),
  averiaseriflibre: W("Averia Serif Libre", "Averia Serif Libre", 400, "Averia+Serif+Libre:wght@400"),
  agbalumo: S("Agbalumo", "Agbalumo", 400, "Agbalumo:wght@400"),
  bungee: S("Bungee", "Bungee", 400, "Bungee:wght@400"),
  bebasneue: S("Bebas Neue", "Bebas Neue", 400, "Bebas+Neue:wght@400"),
  // Vibrant body fonts
  bitter: W("Bitter", "Bitter", 400, "Bitter:wght@400"),
  syne: S("Syne", "Syne", 400, "Syne:wght@400;800"),
  ibmplexmono: S("IBM Plex Mono", "IBM Plex Mono", 400, "IBM+Plex+Mono:wght@400"),
  spacegrotesk: S("Space Grotesk", "Space Grotesk", 400, "Space+Grotesk:wght@400"),
  spacemono: S("Space Mono", "Space Mono", 400, "Space+Mono:wght@400"),
  silkscreen: S("Silkscreen", "Silkscreen", 400, "Silkscreen:wght@400"),
  // Neutral heading fonts
  librebaskerville: W("Libre Baskerville", "Libre Baskerville", 400, "Libre+Baskerville:wght@400"),
  tenorsans: S("Tenor Sans", "Tenor Sans", 400, "Tenor+Sans:wght@400"),
  marcellus: W("Marcellus", "Marcellus", 400, "Marcellus:wght@400"),
  alice: W("Alice", "Alice", 400, "Alice:wght@400"),
  neuton: W("Neuton", "Neuton", 400, "Neuton:wght@400"),
  newsreader: W("Newsreader", "Newsreader", 400, "Newsreader:wght@400"),
  ovo: W("Ovo", "Ovo", 400, "Ovo:wght@400"),
  // Neutral body fonts
  almarai: S("Almarai", "Almarai", 400, "Almarai:wght@400"),
  pontanosans: S("Pontano Sans", "Pontano Sans", 400, "Pontano+Sans:wght@400"),
  ptserif: W("PT Serif", "PT Serif", 400, "PT+Serif:wght@400"),
  // Modern fonts
  asap: S("Asap", "Asap", 400, "Asap:wght@400;600"),
  sansita: S("Sansita", "Sansita", 400, "Sansita:wght@400"),
  nunitosans: S("Nunito Sans", "Nunito Sans", 400, "Nunito+Sans:wght@400;600"),
  comfortaa: S("Comfortaa", "Comfortaa", 400, "Comfortaa:wght@400"),
  worksans: S("Work Sans", "Work Sans", 400, "Work+Sans:wght@400"),
  rubik: S("Rubik", "Rubik", 400, "Rubik:wght@400"),
  // Minimal fonts
  manrope: S("Manrope", "Manrope", 400, "Manrope:wght@400;700"),
  poppins: S("Poppins", "Poppins", 400, "Poppins:wght@400;600"),
  urbanist: S("Urbanist", "Urbanist", 400, "Urbanist:wght@400;700"),
  instrumentserif: W("Instrument Serif", "Instrument Serif", 400, "Instrument+Serif:wght@400"),
  familjengrotesk: S("Familjen Grotesk", "Familjen Grotesk", 400, "Familjen+Grotesk:wght@400"),
  arimo: S("Arimo", "Arimo", 400, "Arimo:wght@400"),
  archivo: S("Archivo", "Archivo", 400, "Archivo:wght@400;700"),
  gildadisplay: W("Gilda Display", "Gilda Display", 400, "Gilda+Display:wght@400"),
  oswald: S("Oswald", "Oswald", 400, "Oswald:wght@400;700"),
  epilogue: S("Epilogue", "Epilogue", 400, "Epilogue:wght@400;700"),
  // Adventurous fonts
  climatecrisis: S("Climate Crisis", "Climate Crisis", 400, "Climate+Crisis:wght@400"),
  ultra: W("Ultra", "Ultra", 400, "Ultra:wght@400"),
  modak: S("Modak", "Modak", 400, "Modak:wght@400"),
  goblinone: S("Goblin One", "Goblin One", 400, "Goblin+One:wght@400"),
  delagothicone: S("Dela Gothic One", "Dela Gothic One", 400, "Dela+Gothic+One:wght@400"),
  archivoblack: S("Archivo Black", "Archivo Black", 400, "Archivo+Black:wght@400"),
  coiny: S("Coiny", "Coiny", 400, "Coiny:wght@400")
}, bn = {
  minimal: [
    {
      packs: ["minimal"],
      headingFont: h.manrope,
      paragraphFont: h.poppins
    },
    {
      packs: ["minimal"],
      headingFont: h.urbanist,
      paragraphFont: h.poppins
    },
    {
      packs: ["minimal"],
      headingFont: h.instrumentserif,
      paragraphFont: h.newsreader
    },
    {
      packs: ["minimal"],
      headingFont: h.familjengrotesk,
      paragraphFont: h.arimo
    },
    {
      packs: ["minimal"],
      headingFont: h.archivo,
      paragraphFont: h.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: h.gildadisplay,
      paragraphFont: h.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: h.oswald,
      paragraphFont: h.arimo
    },
    {
      packs: ["minimal"],
      headingFont: h.epilogue,
      paragraphFont: h.poppins
    }
  ],
  vibrant: [
    {
      packs: ["vibrant"],
      headingFont: h.shrikhand,
      paragraphFont: h.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: h.concertone,
      paragraphFont: h.syne
    },
    {
      packs: ["vibrant"],
      headingFont: h.youngserif,
      paragraphFont: h.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: h.capriola,
      paragraphFont: h.syne
    },
    {
      packs: ["vibrant"],
      headingFont: h.lilitaone,
      paragraphFont: h.ibmplexmono
    },
    {
      packs: ["vibrant"],
      headingFont: h.trocchi,
      paragraphFont: h.syne
    },
    {
      packs: ["vibrant"],
      headingFont: h.averiaseriflibre,
      paragraphFont: h.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: h.agbalumo,
      paragraphFont: h.ptserif
    },
    {
      packs: ["vibrant"],
      headingFont: h.bungee,
      paragraphFont: h.spacegrotesk
    },
    {
      packs: ["vibrant"],
      headingFont: h.bebasneue,
      paragraphFont: h.familjengrotesk
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
      paragraphFont: h.poppins
    },
    {
      packs: ["vibrant"],
      headingFont: {
        ...h.syne,
        style: {
          ...h.syne.style,
          fontWeight: 800
        }
      },
      paragraphFont: h.spacemono,
      headerFont: h.silkscreen
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      headingFont: h.librebaskerville,
      paragraphFont: h.almarai
    },
    {
      packs: ["neutral"],
      headingFont: h.tenorsans,
      paragraphFont: h.pontanosans
    },
    {
      packs: ["neutral"],
      headingFont: h.marcellus,
      paragraphFont: h.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: h.alice,
      paragraphFont: h.almarai
    },
    {
      packs: ["neutral"],
      headingFont: h.neuton,
      paragraphFont: h.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: h.newsreader,
      paragraphFont: h.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: h.ovo,
      paragraphFont: h.almarai
    },
    {
      packs: ["neutral"],
      headingFont: h.epilogue,
      paragraphFont: h.pontanosans
    }
  ],
  modern: [
    {
      packs: ["modern"],
      headingFont: h.asap,
      paragraphFont: h.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: h.comfortaa,
      paragraphFont: h.worksans
    },
    {
      packs: ["modern"],
      headingFont: h.sansita,
      paragraphFont: h.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: h.rubik,
      paragraphFont: h.nunitosans
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      headingFont: h.climatecrisis,
      paragraphFont: h.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: h.ultra,
      paragraphFont: h.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: h.modak,
      paragraphFont: h.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: h.modak,
      paragraphFont: h.familjengrotesk
    },
    {
      packs: ["adventurous"],
      headingFont: h.goblinone,
      paragraphFont: h.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: h.delagothicone,
      paragraphFont: h.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: h.archivoblack,
      paragraphFont: h.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: h.coiny,
      paragraphFont: h.familjengrotesk
    }
  ]
}, ms = Object.values(bn).flatMap((e) => e), Z = (e, t) => bn[e][t], vn = {
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
}, hs = Object.values(vn).flatMap((e) => e), q = (e, t) => vn[e][t], qt = [
  // Default: matches the current Clarkson/pink site design
  {
    pack: "custom",
    name: "clarkson_pink",
    color: {
      packs: ["custom"],
      palette: ["#FFFFFF", "#e8b4b3", "#c48988", "#8b5e5d", "#000000"],
      background: 2,
      headings: 0,
      buttons: [0, 2],
      buttonsNoFill: [0, 2],
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
      primary: { fill: !1, shape: "pill", borderRadius: ["1em", "1em", "1em", "1em"], padding: { x: "1.5em", y: "1em" }, outline: "1px" },
      secondary: { fill: !1, shape: "pill", borderRadius: ["1em", "1em", "1em", "1em"], padding: { x: "1.5em", y: "1em" }, outline: "1px" },
      tertiary: { fill: !1, shape: "underline", borderRadius: ["0em", "0em", "0em", "0em"], padding: { x: "1.5em", y: "1em" }, outline: "1px" }
    },
    form: {
      packs: ["custom"],
      input: { fill: !1, shape: "underline", outline: "1px", borderRadius: ["0em", "0em", "0em", "0em"] },
      option: { button: !1, fill: !1, shape: "circle", outline: "1px", borderRadius: ["1em", "1em", "1em", "1em"] }
    }
  },
  {
    pack: "vibrant",
    name: "vibrant_04",
    color: G("vibrant", 9),
    buttons: j("vibrant", 8),
    form: q("vibrant", 6),
    fonts: Z("vibrant", 11)
  },
  {
    pack: "vibrant",
    name: "vibrant_04",
    color: G("vibrant", 10),
    buttons: j("vibrant", 8),
    form: q("vibrant", 6),
    fonts: Z("vibrant", 12)
  },
  {
    pack: "vibrant",
    name: "vibrant_03",
    color: G("vibrant", 8),
    buttons: j("vibrant", 8),
    form: q("vibrant", 6),
    fonts: Z("vibrant", 10)
  },
  {
    pack: "vibrant",
    name: "vibrant_01",
    color: G("vibrant", 0),
    buttons: j("vibrant", 0),
    form: q("vibrant", 0),
    fonts: Z("vibrant", 0)
  },
  {
    pack: "vibrant",
    name: "vibrant_02",
    color: G("vibrant", 1),
    buttons: j("vibrant", 1),
    form: q("vibrant", 4),
    fonts: Z("vibrant", 2)
  },
  {
    pack: "neutral",
    name: "neutral_01",
    color: G("neutral", 0),
    buttons: j("neutral", 0),
    form: q("neutral", 0),
    fonts: Z("neutral", 0)
  },
  {
    pack: "neutral",
    name: "neutral_02",
    color: G("neutral", 1),
    buttons: j("neutral", 1),
    form: q("neutral", 3),
    fonts: Z("neutral", 2)
  },
  {
    pack: "modern",
    name: "modern_01",
    color: G("modern", 0),
    buttons: j("modern", 0),
    form: q("modern", 0),
    fonts: Z("modern", 0)
  },
  {
    pack: "modern",
    name: "modern_02",
    color: G("modern", 1),
    buttons: j("modern", 1),
    form: q("modern", 3),
    fonts: Z("modern", 2)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: G("minimal", 0),
    buttons: j("minimal", 0),
    form: q("minimal", 0),
    fonts: Z("minimal", 0)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: G("minimal", 2),
    buttons: j("minimal", 0),
    form: q("minimal", 4),
    fonts: Z("minimal", 2)
  },
  {
    pack: "adventurous",
    name: "adventurous_01",
    color: G("adventurous", 0),
    buttons: j("adventurous", 0),
    form: q("adventurous", 0),
    fonts: Z("adventurous", 0)
  },
  {
    pack: "adventurous",
    name: "adventurous_02",
    color: G("adventurous", 3),
    buttons: j("adventurous", 1),
    form: q("adventurous", 3),
    fonts: Z("adventurous", 4)
  }
], Yt = /* @__PURE__ */ new Set();
function fs(e) {
  if (!e || Yt.has(e)) return;
  Yt.add(e);
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = `https://fonts.googleapis.com/css2?family=${e}&display=swap`, document.head.appendChild(t);
}
function gs(e) {
  e.forEach((t) => {
    t.googleFontsQuery && fs(t.googleFontsQuery);
  });
}
function Ps() {
  const [e, t] = w({ ...qt[0] }), { themePacks: n, fontPacks: r, colorPacks: i, buttonPacks: a, formPacks: l } = _(() => {
    const s = e.pack;
    return {
      themePacks: qt,
      fontPacks: ms.filter((d) => d.packs.includes(s)),
      colorPacks: ps.filter((d) => d.packs.includes(s)),
      buttonPacks: us.filter((d) => d.packs.includes(s)),
      formPacks: hs.filter((d) => d.packs.includes(s))
    };
  }, [e]), c = F((s) => {
    t({ ...s });
  }, []);
  return I(() => {
    const { color: s, fonts: d } = e, u = document.body;
    u.style.setProperty("--background-color", s.palette[s.background]), u.style.setProperty("--color-heading", s.palette[s.headings]), u.style.setProperty(
      "--color-paragraph",
      s.palette[s.body !== void 0 ? s.body : s.headings]
    ), u.style.setProperty("--font-family-heading", d.headingFont.style.fontFamily), u.style.setProperty("--font-family-body", d.paragraphFont.style.fontFamily), u.style.setProperty(
      "--font-family-header",
      d.headerFont ? d.headerFont.style.fontFamily : d.paragraphFont.style.fontFamily
    );
    const p = at(s.palette);
    Object.entries(p).forEach(([b, f]) => {
      u.style.setProperty(b, f);
    });
    const m = [d.headingFont, d.paragraphFont];
    d.headerFont && m.push(d.headerFont), gs(m);
  }, [e]), _(
    () => ({
      userTheme: e,
      setPack: c,
      themePacks: n,
      fontPacks: r,
      colorPacks: i,
      buttonPacks: a,
      formPacks: l
    }),
    [e, c, n, r, i, a, l]
  );
}
export {
  $n as AddBlockToolbar,
  As as AddSectionDivider,
  Sn as AlignTopIcon,
  Fn as AnimatedSearchIcon,
  Fs as BlockAnnotationBar,
  Ms as BlockHover,
  On as BlockPicker,
  we as COLOR_KEYS,
  xs as ChevronDownIcon,
  Rn as CodeIcon,
  An as DesktopIcon,
  En as DuplicateIcon,
  zn as EditHeaderButton,
  Kt as EditIcon,
  Qe as FE_COLUMNS,
  vt as FE_COL_GAP,
  et as FE_MARGIN,
  _e as FE_ROW_GAP,
  Cs as FluidEngineGrid,
  Tn as GlobalContentGlyphIcon,
  Ns as GridOverlay,
  Ds as HANDLE_POSITIONS,
  ks as HeaderSectionWrapper,
  Nn as MobileIcon,
  Cn as PinIcon,
  In as PlayIcon,
  Jt as PlusIcon,
  Ls as PortaledAnnotationBar,
  Ln as RedoIcon,
  ws as SearchGlyphIcon,
  _s as SectionWrapper,
  Os as SiteThemes,
  hn as SiteThemesContext,
  Ss as SiteToolbar,
  Es as ThemeProvider,
  en as Tooltip,
  Mn as UndoIcon,
  nt as feBrickHeight,
  yt as feBrickWidth,
  Zn as feRowsHeight,
  Rs as feSnapHeight,
  Yn as feSnapLeft,
  qn as feSnapTop,
  j as getButtonPack,
  G as getColorPack,
  Z as getFontPack,
  q as getFormPack,
  Ts as getRosettaTheme,
  h as googleFonts,
  Hs as hex,
  gs as loadFontsForTheme,
  fs as loadGoogleFont,
  at as makeColorVariables,
  Bs as rosetta,
  sr as rosettaDark,
  nn as rosettaLight,
  us as themeButtons,
  ps as themeColors,
  ms as themeFonts,
  hs as themeForms,
  qt as themePacks,
  Qn as useBlockDrag,
  rt as useDelayedActiveState,
  Is as usePanelDrag,
  Ps as useSiteThemes,
  Fe as useSiteThemesContext,
  Ee as useTemporaryActiveState,
  tn as useTooltip
};
//# sourceMappingURL=index.js.map
