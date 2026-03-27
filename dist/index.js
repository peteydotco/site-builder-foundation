import { jsxs as b, jsx as o, Fragment as Le } from "react/jsx-runtime";
import { useState as y, useRef as _, useEffect as N, useCallback as R, useMemo as F, memo as T, createContext as Xt, Children as yn, useLayoutEffect as xn, useContext as wn } from "react";
import { createPortal as rt } from "react-dom";
function kn({
  expanded: e = !1,
  size: t = 16,
  color: n = "var(--rosetta-fg-muted)"
}) {
  const r = "0.28s cubic-bezier(0.22, 1, 0.36, 1)";
  return /* @__PURE__ */ b(
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
function _n(e) {
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
      children: /* @__PURE__ */ b("g", { id: "Icon", children: [
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
function Jt(e) {
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
function Fn(e) {
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
function Cn(e) {
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
      children: /* @__PURE__ */ b("g", { id: "Icon", children: [
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
function Rn(e) {
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
function Sn(e) {
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
function En(e) {
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
function Ln(e) {
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
function Mn(e) {
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
      children: /* @__PURE__ */ b("g", { id: "Icon", children: [
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
function An(e) {
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
function ys(e) {
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
function Nn(e) {
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
function gt(e) {
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
function xs(e) {
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
const Se = 11, In = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "22px"
}, kt = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22px"
}, Tn = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px"
}, Bn = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: "22px",
  letterSpacing: 0.5
}, Hn = "/assets/block-icons", _t = [
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
function Dn({ onSelect: e, onClose: t, blockIconBasePath: n = Hn }) {
  const [r, i] = y(""), a = _(null), l = _(null);
  N(() => {
    const s = setTimeout(() => {
      var d;
      return (d = a.current) == null ? void 0 : d.focus();
    }, 50);
    return () => clearTimeout(s);
  }, []), N(() => {
    function s(d) {
      l.current && !l.current.contains(d.target) && t();
    }
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [t]);
  const c = r ? _t.map((s) => ({
    ...s,
    blocks: s.blocks.filter((d) => d.name.toLowerCase().includes(r.toLowerCase()))
  })).filter((s) => s.blocks.length > 0) : _t;
  return /* @__PURE__ */ b(
    "div",
    {
      ref: l,
      className: "block-picker-enter",
      style: {
        width: 320,
        background: "var(--rosetta-bg-base)",
        borderRadius: Se,
        boxShadow: "var(--shadows-200)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      },
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ b("div", { style: {
          height: 50,
          display: "flex",
          alignItems: "center",
          gap: Se,
          padding: "0 12px",
          borderBottom: "1px solid var(--rosetta-border-default)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ o("div", { style: { width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(kn, { expanded: !0, size: 16, color: "var(--rosetta-fg-muted)" }) }),
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
                ...kt,
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
        /* @__PURE__ */ b("div", { style: {
          overflow: "auto",
          maxHeight: "min(480px, calc(100vh - 200px))",
          padding: `${Se}px`
        }, children: [
          c.length === 0 && /* @__PURE__ */ b("p", { style: {
            ...kt,
            color: "var(--rosetta-fg-muted)",
            padding: `${Se}px 0`,
            textAlign: "center"
          }, children: [
            'No blocks matching "',
            r,
            '"'
          ] }),
          c.map((s, d) => /* @__PURE__ */ b("div", { style: { marginTop: d > 0 ? 16 : 0 }, children: [
            /* @__PURE__ */ o("p", { style: {
              ...In,
              color: "var(--rosetta-fg-default)",
              marginBottom: 6
            }, children: s.label }),
            /* @__PURE__ */ o("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
            }, children: s.blocks.map((u) => /* @__PURE__ */ o(On, { block: u, onSelect: e, blockIconBasePath: n }, u.name)) })
          ] }, s.label))
        ] })
      ]
    }
  );
}
function On({ block: e, onSelect: t, blockIconBasePath: n }) {
  return /* @__PURE__ */ b(
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
        gap: Se,
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
          ...Tn,
          color: "var(--rosetta-fg-default)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: e.name })
      ]
    }
  );
}
function Pn({ onAddBlock: e }) {
  const [t, n] = y(!1), [r, i] = y(0), a = _(null), l = R((c) => {
    const s = a.current;
    if (!s) return;
    const d = s.getBoundingClientRect(), u = ((c.clientX - d.left) / d.width - 0.5) * 2;
    i(u * 3);
  }, []);
  return /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      onMouseMove: l,
      onMouseLeave: () => {
        n(!1), i(0);
      },
      style: {
        display: "flex",
        alignItems: "center"
      },
      children: /* @__PURE__ */ b(
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
            transform: `translateX(${r}px)`,
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
          },
          children: [
            /* @__PURE__ */ o("div", { style: {
              position: "absolute",
              inset: 3,
              borderRadius: 8,
              background: "rgba(0,0,0,0.05)",
              opacity: t ? 1 : 0,
              transition: "opacity 0.15s ease",
              pointerEvents: "none"
            } }),
            /* @__PURE__ */ o("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ o(gt, {}) }),
            /* @__PURE__ */ o("span", { style: {
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
function $n({ onClick: e }) {
  const [t, n] = y(!1);
  return /* @__PURE__ */ b(
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
        gap: Se,
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
          ...Bn,
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
const zn = "#0072f0", dt = 3, Ft = 11;
function ws({
  sectionId: e,
  sectionLabel: t,
  children: n,
  onBlockPicked: r,
  disabled: i = !1,
  style: a
}) {
  const [l, c] = y(!1), [s, d] = y(!1), [u, p] = y(!1), m = _(null), h = R(() => {
    i || (c(!0), p(!1));
  }, [i]), f = R(() => {
    s || (c(!1), p(!1));
  }, [s]), C = R(() => {
    d(!0), p(!1);
  }, []), S = R(() => {
    if (d(!1), p(!0), m.current) {
      const k = m.current.getBoundingClientRect(), M = I.current;
      M && (M.x < k.left || M.x > k.right || M.y < k.top || M.y > k.bottom) && c(!1);
    }
  }, []), L = R((k) => {
    d(!1), c(!1), r(e, k);
  }, [e, r]), I = _(null), w = R((k) => {
    I.current = { x: k.clientX, y: k.clientY };
  }, []), A = (l || s) && !i, v = _(null);
  return N(() => {
    if (!A) return;
    const k = m.current, M = v.current;
    if (!k || !M) return;
    let O = k.parentElement;
    for (; O; ) {
      const { overflow: B, overflowY: z } = getComputedStyle(O);
      if (B === "auto" || B === "scroll" || z === "auto" || z === "scroll") break;
      O = O.parentElement;
    }
    const j = O || window, $ = () => {
      const B = k.getBoundingClientRect(), W = B.height * 0.1, U = B.bottom - 16 - 40;
      U < W ? M.style.opacity = `${Math.max(0, U / W)}` : M.style.opacity = "1";
    };
    return j.addEventListener("scroll", $, { passive: !0 }), $(), () => j.removeEventListener("scroll", $);
  }, [A]), /* @__PURE__ */ b(
    "div",
    {
      ref: m,
      onMouseEnter: h,
      onMouseLeave: f,
      onMouseMove: w,
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
              border: `${dt}px solid ${A ? zn : "transparent"}`,
              zIndex: 101,
              pointerEvents: "none",
              transition: "border-color 0.15s ease"
            }
          }
        ),
        A && /* @__PURE__ */ o(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: dt + Ft,
              bottom: 0,
              zIndex: 102,
              pointerEvents: "none",
              paddingTop: dt + Ft
            },
            children: /* @__PURE__ */ b(
              "div",
              {
                ref: v,
                style: {
                  position: "sticky",
                  top: 16,
                  pointerEvents: "auto",
                  transition: "opacity 0.15s ease"
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
                        Pn,
                        {
                          onAddBlock: C
                        }
                      )
                    }
                  ),
                  s && /* @__PURE__ */ o(
                    Dn,
                    {
                      onSelect: L,
                      onClose: S
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
function ks({
  children: e,
  disabled: t = !1,
  style: n
}) {
  const [r, i] = y(!1), a = R(() => {
    t || i(!0);
  }, [t]), l = R(() => {
    i(!1);
  }, []), c = r && !t;
  return /* @__PURE__ */ b(
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
            children: /* @__PURE__ */ o("div", { className: "header-btn-enter", children: /* @__PURE__ */ o($n, { onClick: (s) => {
              const d = s.clientX, u = s.clientY;
              for (let p = 0; p < 14; p++) {
                const m = document.createElement("div");
                m.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${d}px;top:${u}px;`;
                const h = Math.random() * Math.PI * 2, f = 60 + Math.random() * 100;
                m.animate([
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  { transform: `translate(${Math.cos(h) * f}px,${Math.sin(h) * f}px) scale(0)`, opacity: 0 }
                ], { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0,0.5,0.5,1)", fill: "forwards" }), document.body.appendChild(m), setTimeout(() => m.remove(), 900);
              }
            } }) })
          }
        )
      ]
    }
  );
}
const Ie = 8;
function Kt({
  text: e,
  anchorRef: t,
  visible: n
}) {
  const r = _(null), [i, a] = y(null);
  return N(() => {
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
      m + s.height > p - Ie && (m = c.top - s.height - 6), u < Ie && (u = Ie), u + s.width > d - Ie && (u = d - Ie - s.width), a({ top: m, left: u });
    });
    return () => cancelAnimationFrame(l);
  }, [n, t]), n ? rt(
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
function Qt(e = 600) {
  const t = _(null), [n, r] = y(!1), [i, a] = y(!1), l = _(null), c = R(() => {
    r(!0), l.current = setTimeout(() => a(!0), e);
  }, [e]), s = R(() => {
    r(!1), a(!1), l.current && (clearTimeout(l.current), l.current = null);
  }, []);
  return N(() => () => {
    l.current && clearTimeout(l.current);
  }, []), { ref: t, hovered: n, showTooltip: i, onMouseEnter: c, onMouseLeave: s };
}
const Ct = {
  background: "var(--rosetta-bg-base)",
  borderRadius: 11,
  height: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  boxShadow: "var(--shadows-200)"
};
function _s({
  onOpenIDE: e,
  onOpenDesignPanel: t,
  onDelete: n,
  isExiting: r
}) {
  return /* @__PURE__ */ b("div", { className: r ? "annotation-exit" : "annotation-enter", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ o("div", { style: Ct, children: /* @__PURE__ */ o(he, { onClick: e, title: "Open code editor", children: /* @__PURE__ */ o(_n, { style: { width: 22, height: 18 } }) }) }),
    /* @__PURE__ */ b("div", { style: { ...Ct, gap: 4 }, children: [
      /* @__PURE__ */ o(he, { onClick: t, title: "Edit", children: /* @__PURE__ */ o(Jt, { style: { width: 18.5, height: 18.5 } }) }),
      /* @__PURE__ */ o(Rt, {}),
      /* @__PURE__ */ o(he, { title: "Pin", children: /* @__PURE__ */ o(Fn, { style: { width: 17.7, height: 17.7 } }) }),
      /* @__PURE__ */ o(he, { title: "Align top", children: /* @__PURE__ */ o(Cn, { style: { width: 18, height: 14 } }) }),
      /* @__PURE__ */ o(he, { title: "Move forward", children: /* @__PURE__ */ o(Wn, {}) }),
      /* @__PURE__ */ o(he, { title: "Move backward", children: /* @__PURE__ */ o(Un, {}) }),
      /* @__PURE__ */ o(Rt, {}),
      /* @__PURE__ */ o(he, { title: "Duplicate", children: /* @__PURE__ */ o(Rn, { style: { width: 18, height: 18 } }) }),
      /* @__PURE__ */ o(he, { onClick: n, title: "Delete", danger: !0, children: /* @__PURE__ */ o(Vn, {}) })
    ] })
  ] });
}
function he({
  children: e,
  onClick: t,
  title: n,
  danger: r
}) {
  const { ref: i, hovered: a, showTooltip: l, onMouseEnter: c, onMouseLeave: s } = Qt();
  return /* @__PURE__ */ b(
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
        n && /* @__PURE__ */ o(Kt, { text: n, anchorRef: i, visible: l })
      ]
    }
  );
}
function Rt() {
  return /* @__PURE__ */ o("div", { style: { width: 1, height: 20, background: "var(--rosetta-border-default)", flexShrink: 0 } });
}
function Wn() {
  return /* @__PURE__ */ b("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
}
function Un() {
  return /* @__PURE__ */ b("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" })
  ] });
}
function Vn() {
  return /* @__PURE__ */ b("svg", { width: "22", height: "22", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ o("path", { d: "M3 5h12" }),
    /* @__PURE__ */ o("path", { d: "M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" }),
    /* @__PURE__ */ o("path", { d: "M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" }),
    /* @__PURE__ */ o("path", { d: "M7.5 8v4.5" }),
    /* @__PURE__ */ o("path", { d: "M10.5 8v4.5" })
  ] });
}
const et = 12, yt = 33, we = 16, tt = 33, jn = 3;
function xt(e) {
  return (e - tt * 2 - yt * (et - 1)) / et;
}
function ot(e) {
  return xt(e) / 2;
}
function Gn(e, t) {
  const n = ot(t);
  return e * n + (e - 1) * we;
}
function Fs(e, t) {
  const r = ot(t) + we, i = Math.ceil((e + we) / r);
  return Gn(i, t);
}
function Zn(e, t) {
  const r = ot(t) + we;
  return Math.round(e / r) * r;
}
function qn(e, t) {
  const r = xt(t) + yt;
  return tt + Math.round((e - tt) / r) * r;
}
function Cs({ fadeIn: e = !1 }) {
  const t = _(null), [n, r] = y({ width: 0, height: 0 });
  N(() => {
    const d = t.current;
    if (!d) return;
    const u = new ResizeObserver(([p]) => {
      const { width: m, height: h } = p.contentRect;
      r({ width: m, height: h });
    });
    return u.observe(d), () => u.disconnect();
  }, []);
  const i = n.width > 0 ? xt(n.width) : 0, a = i / 2, l = a > 0 ? Math.round((n.height + we) / (a + we)) : 0, c = et * l, s = F(() => c <= 0 ? null : Array.from({ length: c }, (d, u) => /* @__PURE__ */ o(
    "div",
    {
      style: {
        borderRadius: jn,
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
            gridTemplateColumns: `repeat(${et}, 1fr)`,
            gridTemplateRows: `repeat(${l}, 1fr)`,
            columnGap: yt,
            rowGap: we,
            padding: `0 ${tt}px`,
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
function Yn({ style: e }) {
  return /* @__PURE__ */ o("svg", { style: e, width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M8.64445 2.55279C8.39746 2.05881 7.79679 1.85859 7.30281 2.10558C6.80883 2.35257 6.60861 2.95324 6.8556 3.44722L9.68128 9.09859L5.06655 5.92596C4.61145 5.61308 3.98887 5.72837 3.67598 6.18348C3.3631 6.63858 3.47839 7.26116 3.9335 7.57405L9.40503 11.3357L3.05258 11.0014C2.50106 10.9724 2.03043 11.3959 2.00141 11.9474C1.97238 12.499 2.39594 12.9696 2.94747 12.9986L8.74187 13.3036L4.44532 16.168C3.9858 16.4743 3.86162 17.0952 4.16797 17.5547C4.47433 18.0142 5.0952 18.1384 5.55473 17.8321L9.19687 15.404L6.68629 18.9188C6.36528 19.3682 6.46937 19.9927 6.91879 20.3137C7.3682 20.6347 7.99275 20.5307 8.31376 20.0812L11.3471 15.8345L10.5136 20.8356C10.4228 21.3804 10.7909 21.8956 11.3356 21.9864C11.8804 22.0772 12.3956 21.7092 12.4864 21.1644L13.2883 16.3532L15.6588 20.0408C15.9575 20.5053 16.5762 20.6398 17.0408 20.3412C17.5054 20.0425 17.6399 19.4238 17.3412 18.9592L15.5553 16.1812L18.3217 18.7348C18.7276 19.1094 19.3602 19.0841 19.7348 18.6783C20.1094 18.2725 20.0841 17.6398 19.6783 17.2652L16.6427 14.4631L20.876 14.9923C21.424 15.0608 21.9238 14.6721 21.9923 14.124C22.0608 13.576 21.6721 13.0762 21.1241 13.0077L16.9342 12.484L21.2291 11.4734C21.7667 11.3469 22.0999 10.8086 21.9734 10.271C21.8469 9.73336 21.3086 9.40009 20.771 9.52659L15.1819 10.8417L19.2863 5.61783C19.6276 5.18356 19.5521 4.5549 19.1178 4.21369C18.6836 3.87247 18.0549 3.94791 17.7137 4.38218L13.8574 9.29015L14.738 3.65438C14.8233 3.10872 14.4501 2.59725 13.9044 2.51199C13.3587 2.42673 12.8473 2.79996 12.762 3.34563L11.876 9.01594L8.64445 2.55279Z" }) });
}
function Rs({
  onSave: e,
  onExit: t,
  onUndo: n,
  onRedo: r,
  activeBreakpoint: i = "desktop",
  onBreakpointChange: a,
  onRun: l,
  onStyles: c,
  isSiteStylesOpen: s,
  apiKey: d,
  onApiKeySave: u,
  componentName: p
}) {
  const [m, h] = y(!1), f = _(null);
  return /* @__PURE__ */ b("header", { "data-theme": "light", style: {
    position: "relative",
    height: 56,
    background: "var(--rosetta-bg-base)",
    borderBottom: "1px solid var(--rosetta-bg-default)",
    flexShrink: 0,
    transition: "background 0.3s ease, border-color 0.3s ease"
  }, children: [
    /* @__PURE__ */ b("div", { style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }, children: [
      /* @__PURE__ */ o("button", { onClick: e, style: Xn, children: "Save" }),
      /* @__PURE__ */ o(Jn, { onClick: t, label: "Exit" }),
      /* @__PURE__ */ b("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ o(qe, { onClick: n, title: "Undo", children: /* @__PURE__ */ o(Sn, { style: { width: 18, height: 15 } }) }),
        /* @__PURE__ */ o(qe, { onClick: void 0, title: "Redo", disabled: !0, children: /* @__PURE__ */ o(En, { style: { width: 18, height: 15, opacity: 0.28 } }) })
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
    }, children: /* @__PURE__ */ b("div", { style: {
      transform: p ? "translateY(-56px)" : "translateY(0)",
      transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
    }, children: [
      /* @__PURE__ */ o(Kn, { title: "Adrienne", subtitle: "Page · Published" }),
      /* @__PURE__ */ b("div", { style: {
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
        }, children: p ?? "Component" }),
        /* @__PURE__ */ o("div", { style: {
          fontSize: 12,
          fontWeight: 400,
          color: "var(--rosetta-fg-muted)",
          lineHeight: "16px",
          transition: "color 0.3s ease"
        }, children: "Editing global component" })
      ] })
    ] }) }),
    /* @__PURE__ */ b("div", { style: {
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
        opacity: p ? 0.35 : 1,
        pointerEvents: p ? "none" : void 0
      }, children: ["desktop", "mobile"].map((C) => /* @__PURE__ */ o(
        "button",
        {
          onClick: () => a == null ? void 0 : a(C),
          title: C,
          disabled: !!p,
          style: {
            flex: 1,
            height: 32,
            background: i === C ? "var(--rosetta-bg-base)" : "transparent",
            border: "none",
            borderRadius: 4,
            cursor: p ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease"
          },
          children: C === "desktop" ? /* @__PURE__ */ o(Ln, { style: { width: 18, height: 17 } }) : /* @__PURE__ */ o(Mn, { style: { width: 12, height: 20 } })
        },
        C
      )) }),
      u && /* @__PURE__ */ b(Le, { children: [
        /* @__PURE__ */ b("div", { ref: f, style: { position: "relative" }, children: [
          /* @__PURE__ */ o(qe, { onClick: () => h((C) => !C), title: "AI", active: m, children: /* @__PURE__ */ o(Yn, { style: { width: 20, height: 20 } }) }),
          !!d && /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            top: 2,
            right: 2,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#22c55e",
            border: "2px solid var(--rosetta-bg-base)",
            pointerEvents: "none"
          } })
        ] }),
        /* @__PURE__ */ o(
          Qn,
          {
            open: m,
            anchorRef: f,
            apiKey: d,
            onSave: (C) => {
              u == null || u(C), h(!1);
            },
            onClose: () => h(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o(qe, { onClick: c, title: "Site Styles", active: s, children: /* @__PURE__ */ o(An, { style: { width: 20, height: 20 } }) })
    ] })
  ] });
}
function qe({
  children: e,
  onClick: t,
  title: n,
  disabled: r,
  active: i
}) {
  const { ref: a, hovered: l, showTooltip: c, onMouseEnter: s, onMouseLeave: d } = Qt();
  return /* @__PURE__ */ b(
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
        n && /* @__PURE__ */ o(Kt, { text: n, anchorRef: a, visible: c })
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
function Jn({ onClick: e, label: t }) {
  const [n, r] = y(!1);
  return /* @__PURE__ */ b(
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
function Kn({ title: e, subtitle: t }) {
  const [n, r] = y(!1);
  return /* @__PURE__ */ b(
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
function Qn({
  open: e,
  anchorRef: t,
  apiKey: n,
  onSave: r,
  onClose: i
}) {
  const [a, l] = y(n ?? ""), [c, s] = y(null), d = _(null), u = _(null);
  if (N(() => {
    e && l(n ?? "");
  }, [e, n]), N(() => {
    if (!e || !t.current) {
      s(null);
      return;
    }
    const h = t.current.getBoundingClientRect();
    s({ top: h.bottom + 6, right: window.innerWidth - h.right });
    const f = setTimeout(() => {
      var C;
      return (C = u.current) == null ? void 0 : C.focus();
    }, 60);
    return () => clearTimeout(f);
  }, [e, t]), N(() => {
    if (!e) return;
    function h(C) {
      d.current && !d.current.contains(C.target) && t.current && !t.current.contains(C.target) && i();
    }
    function f(C) {
      C.key === "Escape" && i();
    }
    return document.addEventListener("mousedown", h), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", h), document.removeEventListener("keydown", f);
    };
  }, [e, i, t]), !e || !c) return null;
  const p = n ? n.slice(0, 7) + "..." + n.slice(-4) : "", m = a.trim().startsWith("sk-");
  return rt(
    /* @__PURE__ */ b(
      "div",
      {
        ref: d,
        style: {
          position: "fixed",
          top: c.top,
          right: c.right,
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
          /* @__PURE__ */ o("style", { children: `
        @keyframes siteToolbarDropdownIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      ` }),
          /* @__PURE__ */ b("div", { style: { padding: "14px 14px 0" }, children: [
            /* @__PURE__ */ o("div", { style: { fontSize: 12, fontWeight: 600, letterSpacing: 0.4, textTransform: "uppercase", color: "var(--rosetta-fg-muted, #666)", marginBottom: 10 }, children: "Anthropic API Key" }),
            n && /* @__PURE__ */ b("div", { style: {
              fontSize: 12,
              color: "#22c55e",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 5
            }, children: [
              /* @__PURE__ */ o("div", { style: { width: 6, height: 6, borderRadius: "50%", background: "#22c55e", flexShrink: 0 } }),
              "Connected · ",
              p
            ] }),
            /* @__PURE__ */ o(
              "input",
              {
                ref: u,
                type: "password",
                value: a,
                onChange: (h) => l(h.target.value),
                onKeyDown: (h) => {
                  h.key === "Enter" && m && r(a.trim());
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
          /* @__PURE__ */ o("div", { style: { padding: "12px 14px 14px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ o(
            "button",
            {
              onClick: () => m && r(a.trim()),
              disabled: !m,
              style: {
                height: 32,
                padding: "0 14px",
                background: m ? "#0E0E0E" : "rgba(14,14,14,0.08)",
                color: m ? "#fff" : "rgba(14,14,14,0.32)",
                border: "none",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                cursor: m ? "pointer" : "default",
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
function Ss({ cssString: e, children: t }) {
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
function er({
  initialLeft: e,
  initialTop: t,
  width: n,
  height: r,
  containerWidth: i,
  sectionHeight: a,
  enabled: l = !0,
  onDrop: c
}) {
  const [s, d] = y(!1), [u, p] = y(!1), [m, h] = y({ x: 0, y: 0 }), [f, C] = y({ left: e, top: t }), S = _({ x: 0, y: 0 }), L = _({ left: e, top: t }), I = _({ x: 0, y: 0 }), w = _({ left: e, top: t });
  N(() => {
    !s && !u && C({ left: e, top: t });
  }, [e, t, s, u]);
  const A = R((v) => {
    if (!l || v.button !== 0) return;
    v.preventDefault(), S.current = { x: v.clientX, y: v.clientY }, L.current = { left: e, top: t }, I.current = { x: 0, y: 0 }, w.current = { left: e, top: t };
    let k = !1;
    const M = 4, O = ($) => {
      const B = $.clientX - S.current.x, z = $.clientY - S.current.y;
      if (!k) {
        if (Math.abs(B) < M && Math.abs(z) < M) return;
        k = !0, d(!0), p(!1), h({ x: 0, y: 0 }), C({ left: e, top: t });
      }
      let W = z;
      if (a != null && i > 0) {
        const ge = ot(i), ze = 0, We = a - ge, Ue = L.current.top + z;
        Ue < ze && (W = ze - L.current.top), Ue > We && (W = We - L.current.top);
      }
      I.current = { x: B, y: W }, h({ x: B, y: W });
      const U = L.current.left + B, ee = L.current.top + W, te = qn(U, i), Me = Zn(ee, i);
      w.current = { left: te, top: Me }, C({ left: te, top: Me });
    }, j = () => {
      if (document.removeEventListener("mousemove", O), document.removeEventListener("mouseup", j), !k) return;
      const $ = w.current;
      c == null || c($.left, $.top), d(!1), p(!0), h({ x: 0, y: 0 }), setTimeout(() => {
        p(!1);
      }, 300);
    };
    document.addEventListener("mousemove", O), document.addEventListener("mouseup", j);
  }, [l, e, t, n, r, i, a, c]);
  return {
    isDragging: s,
    naturalOffset: m,
    snappedPosition: f,
    isSettling: u,
    dragHandleProps: { onMouseDown: A }
  };
}
function Es({
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
  const [u, p] = y(!1), m = _(null), h = _(!1), [f, C] = y(null);
  N(() => {
    const U = m.current;
    if (!U || !U.offsetParent) return;
    const ee = () => {
      U.offsetParent && C({
        left: U.offsetLeft,
        top: U.offsetTop,
        width: U.offsetWidth,
        height: U.offsetHeight
      });
    };
    ee();
    const te = new ResizeObserver(ee);
    return te.observe(U), () => te.disconnect();
  }, [r, i, c]);
  const S = i ?? 0, L = !t && S > 0 && f !== null, I = R((U, ee) => {
    l && s && s(l, U, ee);
  }, [l, s]), {
    isDragging: w,
    naturalOffset: A,
    snappedPosition: v,
    isSettling: k,
    dragHandleProps: M
  } = er({
    initialLeft: (f == null ? void 0 : f.left) ?? 0,
    initialTop: (f == null ? void 0 : f.top) ?? 0,
    width: (f == null ? void 0 : f.width) ?? 0,
    height: (f == null ? void 0 : f.height) ?? 0,
    containerWidth: S,
    sectionHeight: a,
    enabled: L,
    onDrop: I
  });
  N(() => {
    w !== h.current && (h.current = w, d == null || d(w));
  }, [w, d]);
  const O = (u || w) && !t, j = O && !w, $ = c ? { ...r, left: c.left, top: c.top } : { ...r }, B = w ? {
    ...$,
    position: "absolute",
    left: v.left,
    top: v.top,
    width: f == null ? void 0 : f.width,
    height: (r == null ? void 0 : r.height) ?? (f == null ? void 0 : f.height),
    zIndex: 1e3,
    cursor: "grabbing",
    right: void 0,
    bottom: void 0
  } : { position: "relative", cursor: L ? "grab" : "default", zIndex: 2, ...$ }, z = w ? `translate(${A.x - (v.left - ((f == null ? void 0 : f.left) ?? 0))}px, ${A.y - (v.top - ((f == null ? void 0 : f.top) ?? 0))}px)` : void 0;
  return /* @__PURE__ */ b(
    "div",
    {
      ref: m,
      onMouseEnter: () => {
        t || p(!0);
      },
      onMouseLeave: () => {
        w || p(!1);
      },
      ...L ? M : {},
      style: B,
      children: [
        /* @__PURE__ */ o("div", { style: {
          transform: z,
          transition: k ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" : w ? "none" : void 0,
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
        O && /* @__PURE__ */ b(Le, { children: [
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
          j && /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            left: 0,
            top: -22,
            zIndex: 100,
            pointerEvents: "none"
          }, children: /* @__PURE__ */ b("div", { style: {
            background: "#0072f0",
            borderRadius: 9999,
            display: "flex",
            alignItems: "center",
            gap: 3,
            height: 16,
            padding: "0.25px 6px 0.75px"
          }, children: [
            e !== "Text" && /* @__PURE__ */ o(Nn, { style: { width: 10, height: 10 } }),
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
  const [n, r] = y(null);
  return N(() => {
    const i = e.current;
    if (!i) return;
    const a = () => {
      const l = i.getBoundingClientRect();
      r({ top: l.top - 12, left: l.left });
    };
    return a(), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
      window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
    };
  }, [e]), n ? rt(
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
function tr(e) {
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
function nr(e) {
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
function St(e) {
  return /* @__PURE__ */ b(
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
        /* @__PURE__ */ b("g", { children: [
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "#081939" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-0)", fillOpacity: "0.9" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-1)", fillOpacity: "0.85" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-2)", fillOpacity: "0.8" }),
          /* @__PURE__ */ o("path", { d: "M49.2049 24.6025C49.2049 38.19 38.19 49.2049 24.6025 49.2049C11.0149 49.2049 0 38.19 0 24.6025C0 11.0149 11.0149 0 24.6025 0C38.19 0 49.2049 11.0149 49.2049 24.6025Z", fill: "url(#beacon-grad-3)", fillOpacity: "0.88" })
        ] }),
        /* @__PURE__ */ b("defs", { children: [
          /* @__PURE__ */ b("radialGradient", { id: "beacon-grad-0", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(16.5958 8.07961) rotate(63.1327) scale(18.5222 21.9723)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#7D7194" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#7D7194", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ b("radialGradient", { id: "beacon-grad-1", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(47.8949 16.6687) rotate(161.19) scale(24.6066)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#4A8F9F" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#4A8F9F", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ b("radialGradient", { id: "beacon-grad-2", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(32.7549 47.895) rotate(-108.939) scale(15.6987)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#5C4763" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#5C4763", stopOpacity: "0" })
          ] }),
          /* @__PURE__ */ b("radialGradient", { id: "beacon-grad-3", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-2.18364 33.4828) rotate(-18.3418) scale(28.2198 39.2263)", children: [
            /* @__PURE__ */ o("stop", { stopColor: "#3D3041" }),
            /* @__PURE__ */ o("stop", { offset: "1", stopColor: "#3D3041", stopOpacity: "0" })
          ] })
        ] })
      ]
    }
  );
}
function rr(e, t, n, r) {
  return function(i) {
    let a = i;
    for (let l = 0; l < 8; l++) {
      const c = 3 * e * (1 - a) * (1 - a) * a + 3 * n * (1 - a) * a * a + a * a * a - i, s = 3 * e * (1 - 2 * a + a * a) + 6 * (n - e) * a * (1 - a) + 3 * (1 - n) * a * a;
      if (Math.abs(s) < 1e-6) break;
      a -= c / (s || 1e-6);
    }
    return a = Math.max(0, Math.min(1, a)), 3 * t * (1 - a) * (1 - a) * a + 3 * r * (1 - a) * a * a + a * a * a;
  };
}
const or = rr(0.25, 0.1, 0.25, 1), Et = "0px 0px 1px 0px rgba(0,0,0,0.08), 0px 4px 16px 0px rgba(0,0,0,0.12)";
function Ms({ onClick: e, onPromptSubmit: t, aiStatesPath: n = "/assets/ai-states" }) {
  const [r, i] = y(!1), [a, l] = y(!1), [c, s] = y(!1), d = _(null), [u, p] = y(!1), [m, h] = y(""), f = _(null), C = _(null), S = _(null), L = c || u;
  N(() => {
    if (u) {
      const v = setTimeout(() => {
        var k;
        return (k = f.current) == null ? void 0 : k.focus();
      }, 80);
      return () => clearTimeout(v);
    }
  }, [u]), N(() => {
    if (!S.current) return;
    let k = S.current.parentElement;
    for (; k; ) {
      const { overflow: z, overflowY: W } = getComputedStyle(k);
      if (z === "auto" || z === "scroll" || W === "auto" || W === "scroll") break;
      k = k.parentElement;
    }
    if (!k) return;
    const M = u ? 110 : -110, O = 400, j = k.scrollTop, $ = performance.now();
    function B(z) {
      const W = Math.min((z - $) / O, 1);
      k.scrollTop = j + M * or(W), W < 1 && requestAnimationFrame(B);
    }
    requestAnimationFrame(B);
  }, [u]), N(() => {
    if (!u) return;
    function v(M) {
      C.current && !C.current.contains(M.target) && (p(!1), h(""));
    }
    function k(M) {
      M.key === "Escape" && (p(!1), h(""));
    }
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", k), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", k);
    };
  }, [u]), N(() => {
    if (!L) {
      const k = d.current;
      k && (k.style.transform = "");
      return;
    }
    const v = (k) => {
      const M = d.current;
      if (!M) return;
      const O = (k.clientX / window.innerWidth - 0.5) * 2;
      M.style.transform = `translateX(${O * (t ? 6 : 3)}px)`;
    };
    return document.addEventListener("mousemove", v), () => document.removeEventListener("mousemove", v);
  }, [L]);
  const I = R((v) => {
    v.stopPropagation(), p(!0);
  }, []), w = R((v) => {
    v.stopPropagation(), t ? t(m) : e == null || e(v), p(!1), h("");
  }, [e, t, m]), A = R((v) => {
    v.key === "Enter" && m.trim() && (v.preventDefault(), t && t(m), p(!1), h(""));
  }, [t, m]);
  return /* @__PURE__ */ b(
    "div",
    {
      onMouseEnter: () => s(!0),
      onMouseLeave: () => {
        s(!1);
      },
      ref: S,
      style: {
        position: "relative",
        height: u ? 220 : 0,
        zIndex: 10,
        background: u ? "#E7E7E7" : "transparent",
        transition: "height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s ease"
      },
      children: [
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          top: -1,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(14,14,14,0.08)",
          pointerEvents: "none",
          opacity: u ? 1 : 0,
          transition: "opacity 0.4s ease"
        } }),
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,255,255,0.18)",
          pointerEvents: "none",
          opacity: u ? 1 : 0,
          transition: "opacity 0.4s ease"
        } }),
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 40,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 30%, transparent 100%)",
          pointerEvents: "none",
          opacity: u ? 1 : 0,
          transition: "opacity 0.4s ease"
        } }),
        /* @__PURE__ */ o("div", { style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          background: "linear-gradient(to top, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 30%, transparent 100%)",
          pointerEvents: "none",
          opacity: u ? 1 : 0,
          transition: "opacity 0.4s ease"
        } }),
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
        }, children: /* @__PURE__ */ b(
          "div",
          {
            ref: C,
            style: {
              opacity: L ? 1 : 0,
              pointerEvents: L ? "auto" : "none",
              transition: "opacity 0.15s ease"
            },
            children: [
              !u && /* @__PURE__ */ b(
                "div",
                {
                  ref: d,
                  className: L ? "section-divider-enter" : void 0,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
                  },
                  children: [
                    /* @__PURE__ */ b(
                      "button",
                      {
                        onClick: (v) => {
                          v.stopPropagation(), e == null || e(v);
                        },
                        onMouseEnter: () => l(!0),
                        onMouseLeave: () => l(!1),
                        style: {
                          position: "relative",
                          height: 40,
                          borderRadius: 11,
                          background: "#FAFAFA",
                          border: "1px solid #E7E7E7",
                          boxShadow: Et,
                          cursor: "pointer",
                          padding: "0 20px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden"
                        },
                        children: [
                          /* @__PURE__ */ o("div", { style: {
                            position: "absolute",
                            inset: 3,
                            borderRadius: 8,
                            background: "rgba(0,0,0,0.05)",
                            opacity: a ? 1 : 0,
                            transition: "opacity 0.15s ease",
                            pointerEvents: "none"
                          } }),
                          /* @__PURE__ */ o("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ o(gt, {}) }),
                          /* @__PURE__ */ o("span", { style: {
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
                    t && /* @__PURE__ */ b(
                      "div",
                      {
                        onClick: I,
                        onMouseEnter: () => i(!0),
                        onMouseLeave: () => i(!1),
                        style: {
                          width: 42,
                          height: 42,
                          borderRadius: 30,
                          background: "#0E0E0E",
                          border: "1px solid #000",
                          boxShadow: Et,
                          flexShrink: 0,
                          position: "relative",
                          cursor: "pointer",
                          overflow: "hidden",
                          transform: r ? "scale(1.048)" : "scale(1)",
                          transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
                        },
                        children: [
                          /* @__PURE__ */ o("div", { style: {
                            position: "absolute",
                            width: 49,
                            height: 49,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none"
                          }, children: /* @__PURE__ */ o(St, {}) }),
                          /* @__PURE__ */ o("div", { style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mixBlendMode: "difference"
                          }, children: /* @__PURE__ */ b("div", { style: {
                            width: 27,
                            height: 27,
                            borderRadius: 34,
                            overflow: "hidden",
                            transform: "rotate(45deg)",
                            position: "relative"
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
              u && /* @__PURE__ */ b("div", { style: {
                width: 495,
                height: 45,
                borderRadius: 33,
                background: "#FAFAFA",
                border: "1px solid rgba(0,0,0,0.11)",
                boxShadow: "0px 227px 64px 0px rgba(0,0,0,0), 0px 145px 58px 0px rgba(0,0,0,0.01), 0px 82px 49px 0px rgba(0,0,0,0.02), 0px 36px 36px 0px rgba(0,0,0,0.04), 0px 9px 20px 0px rgba(0,0,0,0.05)",
                overflow: "hidden",
                animation: "promptUnfurl 500ms cubic-bezier(0.22, 1.15, 0.36, 1) forwards"
              }, children: [
                /* @__PURE__ */ o("style", { children: `
                @keyframes promptUnfurl {
                  from { width: 50px; opacity: 0; }
                  15%  { opacity: 1; }
                  to   { width: 495px; opacity: 1; }
                }
              ` }),
                /* @__PURE__ */ b("div", { style: {
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
                      children: /* @__PURE__ */ o("div", { style: { width: 12, height: 12 }, children: /* @__PURE__ */ o(gt, {}) })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "input",
                    {
                      ref: f,
                      type: "text",
                      value: m,
                      onChange: (v) => h(v.target.value),
                      onKeyDown: A,
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
                      children: /* @__PURE__ */ o("div", { style: { width: 9, height: 16 }, children: /* @__PURE__ */ o(tr, {}) })
                    }
                  ),
                  /* @__PURE__ */ b(
                    "button",
                    {
                      onClick: w,
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
                        }, children: /* @__PURE__ */ o(St, {}) }),
                        /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, mixBlendMode: "difference", color: "#fff", width: 10, height: 13 }, children: /* @__PURE__ */ o(nr, {}) })
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
  );
}
function As() {
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
const Lt = 2, ut = 0.15, ce = 575, Ye = 11, ar = 0.07;
function Ns({
  panelRef: e,
  containerSize: t,
  panelState: n,
  basePosition: r,
  onSnap: i,
  onUnsnap: a,
  enabled: l = !0
}) {
  const [c, s] = y(!1), [d, u] = y(!1), [p, m] = y({ x: 0, y: 0 }), [h, f] = y(null), [C, S] = y(!1), [L, I] = y(0), w = _(null), A = _({ x: 0, y: 0 }), v = _(!1), k = _(!1), M = _(!1), O = _(i);
  O.current = i;
  const j = _(a);
  j.current = a;
  const $ = _(n);
  $.current = n;
  const B = _(t);
  B.current = t;
  const z = _(r);
  z.current = r;
  const W = _(() => {
  }), U = _(() => {
  });
  W.current = (P) => {
    var wt;
    if (!w.current) return;
    const pe = P.clientX - w.current.x, be = P.clientY - w.current.y;
    if (!v.current) {
      if (Math.abs(pe) < Lt && Math.abs(be) < Lt) return;
      if (v.current = !0, s(!0), f(null), M.current) {
        const bn = $.current, vn = B.current.w;
        let Ge, Ze;
        bn === "snapped-left" ? (Ge = Ye, Ze = Ye) : (Ge = vn - ce - Ye, Ze = Ye), A.current = { x: Ge, y: Ze }, z.current.current = { x: Ge, y: Ze }, u(!0), j.current(), setTimeout(() => u(!1), 450);
      }
    }
    const Fe = A.current.x + pe, se = A.current.y + be, me = B.current.w, Ce = B.current.h, le = Math.max(0, Math.min(me - ce, Fe)), Ve = Math.max(0, Math.min(Ce - 100, se));
    m({ x: le, y: Ve });
    const Ae = (wt = e.current) == null ? void 0 : wt.parentElement, lt = (Ae == null ? void 0 : Ae.getBoundingClientRect().left) ?? 0, Ne = P.clientX - lt;
    Ne < me * ut ? f("left") : Ne > me * (1 - ut) ? f("right") : f(null);
    const ct = le + ce / 2, je = Math.max(-1, Math.min(1, (Ne - ct) / (ce / 2)));
    I(je);
  }, U.current = (P) => {
    var pe, be, Fe;
    if (k.current = !1, document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", te), v.current) {
      const se = (pe = e.current) == null ? void 0 : pe.parentElement, me = (se == null ? void 0 : se.getBoundingClientRect().left) ?? 0, Ce = P.clientX - me, le = B.current.w, Ve = le * ut;
      if (Ce < Ve)
        O.current("left");
      else if (Ce > le - Ve)
        O.current("right");
      else {
        const Ae = P.clientX - (((be = w.current) == null ? void 0 : be.x) ?? P.clientX), lt = P.clientY - (((Fe = w.current) == null ? void 0 : Fe.y) ?? P.clientY), Ne = A.current.x + Ae, ct = A.current.y + lt, je = {
          x: Math.max(0, Math.min(le - ce, Ne)),
          y: Math.max(0, Math.min(B.current.h - 100, ct))
        };
        z.current.current = je, m(je);
      }
    }
    s(!1), f(null), w.current = null, v.current = !1, M.current = !1;
  };
  const ee = _((P) => W.current(P)).current, te = _((P) => U.current(P)).current, Me = R((P) => {
    !l || !e.current || (P.preventDefault(), P.stopPropagation(), k.current = !0, w.current = { x: P.clientX, y: P.clientY }, A.current = { ...z.current.current }, v.current = !1, M.current = $.current !== "floating", document.addEventListener("mousemove", ee), document.addEventListener("mouseup", te));
  }, [l, e, ee, te]), ge = _(null), ze = R(() => {
    ge.current && (clearTimeout(ge.current), ge.current = null), l && S(!0);
  }, [l]), We = R(() => {
    k.current || (ge.current = setTimeout(() => {
      S(!1), f(null), I(0), ge.current = null;
    }, 50));
  }, []), Ue = R((P) => {
    if (!l || c) return;
    const pe = e.current;
    if (!pe) return;
    const be = P.currentTarget.getBoundingClientRect();
    if (P.clientY > be.bottom) return;
    const Fe = pe.getBoundingClientRect(), se = P.clientX - Fe.left, me = ce * ar, Ce = Math.max(-1, Math.min(1, (se - ce / 2) / (ce / 2)));
    I(Ce);
    const le = $.current;
    se < me && le !== "snapped-left" ? f("left") : se > ce - me && le !== "snapped-right" ? f("right") : f(null);
  }, [l, c, e]);
  return N(() => {
    c || m(r.current);
  }, [r.current.x, r.current.y, c]), N(() => () => {
    document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", te);
  }, [ee, te]), N(() => {
    l || (s(!1), f(null), S(!1), I(0));
  }, [l]), {
    position: p,
    isDragging: c,
    isUnsnapping: d,
    snapHint: h,
    isExpanded: C,
    snapBarPosition: L,
    dragRegionProps: { onMouseDown: Me },
    hoverZoneProps: {
      onMouseEnter: ze,
      onMouseLeave: We,
      onMouseMove: Ue
    }
  };
}
const en = {
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
}, ir = {
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
function Is() {
  return typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? ir : en;
}
const Ts = en;
function Bs(e) {
  return e.replace("#", "");
}
const Hs = [
  { key: "tl", style: { top: -4, left: -4 } },
  { key: "tc", style: { top: -5, left: "calc(50% - 5px)" } },
  { key: "tr", style: { top: -4, right: -4 } },
  { key: "ml", style: { top: "calc(50% - 5px)", left: -5 } },
  { key: "mr", style: { top: "calc(50% - 5px)", right: -5 } },
  { key: "bl", style: { bottom: -4, left: -4 } },
  { key: "bc", style: { bottom: -5, left: "calc(50% - 5px)" } },
  { key: "br", style: { bottom: -4, right: -4 } }
];
function at(e, t = 0, n = 0) {
  const [r, i] = y(e);
  return N(() => {
    const a = e ? t : n;
    if (a <= 0) {
      i(e);
      return;
    }
    const l = setTimeout(() => i(e), a * 1e3);
    return () => clearTimeout(l);
  }, [e, t, n]), r;
}
function sr(e, t) {
  const [n, r] = y(["site-styles"]), [i, a] = y(0);
  N(() => {
    const c = e.current;
    if (!c) return;
    const s = (d) => {
      const u = d.target;
      if (u.tagName === "A" && u.getAttribute("href")) {
        const p = u.getAttribute("href");
        if (p.startsWith("/")) {
          const m = p.replace("/config/", "").split("/");
          r((h) => {
            const f = [...h];
            return m.forEach((C, S) => {
              f[S] = C;
            }), f;
          }), a(m.length - 1), d.preventDefault();
        }
      }
    };
    return c.addEventListener("click", s), () => c.removeEventListener("click", s);
  }, [e]);
  const l = R(() => {
    a((c) => Math.max(0, c - 1));
  }, []);
  return N(() => {
    t && (r(["site-styles"]), a(0));
  }, [t]), F(() => ({ route: n, depth: i, onBack: l }), [n, i, l]);
}
const lr = "_container_191aw_1", cr = "_active_191aw_25", dr = "_current_191aw_29", ur = "_header_191aw_33", Xe = {
  container: lr,
  active: cr,
  current: dr,
  header: ur
}, pr = (...e) => e.filter(Boolean).join(" ");
function mr({ children: e, title: t, description: n, depth: r = 0, isActive: i = !1 }) {
  const a = F(
    () => pr(Xe.container, i && Xe.active, i && Xe.current),
    [i]
  );
  return /* @__PURE__ */ o("div", { className: a, style: { "--depth": r }, children: i && /* @__PURE__ */ b(Le, { children: [
    (t || n) && /* @__PURE__ */ b("div", { className: Xe.header, children: [
      t && /* @__PURE__ */ o("h1", { children: t }),
      n && /* @__PURE__ */ o("h2", { children: n })
    ] }),
    e
  ] }) });
}
const hr = T(mr), fr = "_container_thqg8_1", gr = "_wrap_thqg8_7", br = "_content_thqg8_7", vr = "_fadeup_thqg8_13", yr = "_fadeoutdown_thqg8_19", xr = "_label_thqg8_46", wr = "_buttonBox_thqg8_66", kr = "_active_thqg8_109", _r = "_disclosure_thqg8_119", Fr = "_disclosureWrapper_thqg8_133", re = {
  container: fr,
  wrap: gr,
  content: br,
  fadeup: vr,
  fadeoutdown: yr,
  label: xr,
  buttonBox: wr,
  active: kr,
  disclosure: _r,
  disclosureWrapper: Fr
}, bt = (...e) => e.filter(Boolean).join(" ");
function Mt({
  active: e = !1,
  children: t,
  className: n,
  onClick: r,
  tag: i = "button",
  ...a
}) {
  const [l, c] = y(!1), s = F(
    () => bt(n, re.buttonBox, l && "hover", e && re.active),
    [n, l, e]
  ), d = R(() => c(!0), []), u = R(() => c(!1), []);
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
function Rr({
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
  const d = F(
    () => bt(
      re.container,
      i && re.wrap,
      c && s && re.fadeup,
      c && !s && re.fadeoutdown
    ),
    [i, s, c]
  );
  return /* @__PURE__ */ b(
    "div",
    {
      className: d,
      style: { "--animation-delay": `${l}s` },
      children: [
        /* @__PURE__ */ b(Mt, { active: e, onClick: t, children: [
          /* @__PURE__ */ o("div", { className: re.label, children: a }),
          /* @__PURE__ */ o("div", { className: re.content, children: n })
        ] }),
        r && /* @__PURE__ */ o("div", { className: re.disclosureWrapper, children: /* @__PURE__ */ o(
          Mt,
          {
            tag: "a",
            className: bt(re.buttonBox, re.disclosure),
            href: r,
            children: /* @__PURE__ */ o(Cr, {})
          }
        ) })
      ]
    }
  );
}
const Te = T(Rr), Sr = "_container_1bxjx_1", Er = "_label_1bxjx_20", Lr = "_suffix_1bxjx_25", Mr = "_chevron_1bxjx_30", Je = {
  container: Sr,
  label: Er,
  suffix: Lr,
  chevron: Mr
};
function Ar() {
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
function Nr({ label: e, suffix: t, href: n, ...r }) {
  return /* @__PURE__ */ b("a", { className: Je.container, href: n, ...r, children: [
    /* @__PURE__ */ o("div", { className: Je.label, children: e }),
    t && /* @__PURE__ */ o("div", { className: Je.suffix, children: t }),
    /* @__PURE__ */ o("div", { className: Je.chevron, children: /* @__PURE__ */ o(Ar, {}) })
  ] });
}
const At = T(Nr), Ir = "_container_19xa4_3", Tr = "_item_19xa4_17", Br = "_directionInUp_19xa4_31", Hr = "_directionInDown_19xa4_35", Dr = "_directionInLeft_19xa4_39", Or = "_directionInRight_19xa4_43", Pr = "_directionOutUp_19xa4_49", $r = "_directionOutDown_19xa4_53", zr = "_directionOutLeft_19xa4_57", Wr = "_directionOutRight_19xa4_61", Ur = "_visible_19xa4_67", Vr = "_animateIn_19xa4_76", jr = "_hidden_19xa4_85", Gr = "_useOpacity_19xa4_99", q = {
  container: Ir,
  item: Tr,
  directionInUp: Br,
  directionInDown: Hr,
  directionInLeft: Dr,
  directionInRight: Or,
  directionOutUp: Pr,
  directionOutDown: $r,
  directionOutLeft: zr,
  directionOutRight: Wr,
  visible: Ur,
  animateIn: Vr,
  hidden: jr,
  useOpacity: Gr
};
function tn(...e) {
  return e.filter(Boolean).join(" ");
}
const Zr = {
  up: q.directionInUp,
  down: q.directionInDown,
  left: q.directionInLeft,
  right: q.directionInRight
}, qr = {
  up: q.directionOutUp,
  down: q.directionOutDown,
  left: q.directionOutLeft,
  right: q.directionOutRight
}, Yr = Xt({
  isHidden: !1
}), Xr = T(function(t) {
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
    onRemoved: h
  } = t, [f, C] = y(!1), [S, L] = y(!1), I = _(null), w = _(), A = _(), v = _(!1), k = _(!1), M = R(() => {
    if (clearTimeout(w.current), clearTimeout(A.current), !s) {
      C(!0);
      return;
    }
    A.current = setTimeout(() => {
      L(!1), C(!0);
    }, 30 + (i + a) * 1e3);
  }, [s, i, a]), O = R(() => {
    clearTimeout(w.current), clearTimeout(A.current), L(!0), w.current = setTimeout(() => {
      h();
    }, (i + l) * 1e3);
  }, [h, i, l]);
  N(() => {
    if (m) {
      if (v.current)
        return;
      k.current = !1, v.current = !0, M();
      return;
    }
    k.current || (v.current = !1, k.current = !0, O());
  }, [m, M, O]);
  const j = F(
    () => tn(
      r,
      q.item,
      f && q.visible,
      S && q.hidden,
      p && q.useOpacity,
      s && q.animateIn,
      Zr[d],
      qr[u]
    ),
    [r, f, S, d, u, s, p]
  ), $ = F(
    () => ({
      "--swap-duration": `${l}s`,
      "--swap-distance": `${c}rem`
    }),
    [l, c]
  ), B = F(
    () => ({
      isHidden: !f || S
    }),
    [f, S]
  );
  return /* @__PURE__ */ o(Yr.Provider, { value: B, children: /* @__PURE__ */ o("div", { ref: I, style: $, className: j, children: n }) });
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
    ...h
  } = e, f = _(!0), [C, S] = y([]), L = R((I) => {
    S((w) => w.filter((A) => A.child !== I));
  }, []);
  return N(() => {
    f.current = !0;
  }, []), N(() => {
    if (!r) {
      S(
        (w) => w.map((A) => ({
          ...A,
          isShown: !1,
          animateIn: !1
        }))
      );
      return;
    }
    const I = n ? !0 : !f.current;
    S((w) => {
      const A = yn.map(r, (k, M) => ({
        child: k,
        key: k.key || M.toString(),
        animateIn: I,
        isShown: !0,
        delayShow: s,
        directionIn: u,
        directionOut: p
      }));
      return [...w.filter((k) => A.every((M) => M.key !== k.key)).map((k) => ({
        ...k,
        isShown: !1,
        delayShow: s,
        animateIn: !1
      })), ...A];
    }), f.current = !1;
  }, [n, r, u, p, s]), /* @__PURE__ */ o(t, { className: tn(i, q.container), ...h, children: C.map(({ animateIn: I, child: w, isShown: A, delayShow: v }) => /* @__PURE__ */ o(
    Xr,
    {
      className: a,
      child: w,
      animateIn: I,
      isShown: A,
      directionIn: u,
      directionOut: p,
      duration: c,
      distance: d,
      onRemoved: () => L(w),
      delayShow: v,
      delayHide: l,
      useOpacity: m
    },
    w.key || "defaultKey"
  )) });
}
const ie = T(Jr), xe = [
  "white-hsl",
  "lightaccent-hsl",
  "accent-hsl",
  "darkaccent-hsl",
  "black-hsl"
];
function nt(e) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nt(e);
}
var Kr = /^\s+/, Qr = /\s+$/;
function x(e, t) {
  if (e = e || "", t = t || {}, e instanceof x)
    return e;
  if (!(this instanceof x))
    return new x(e, t);
  var n = eo(e);
  this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n.ok;
}
x.prototype = {
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
    return this._a = nn(t), this._roundA = Math.round(100 * this._a) / 100, this;
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
    return oo(this._r, this._g, this._b, this._a, t);
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
      r: Math.round(H(this._r, 255) * 100) + "%",
      g: Math.round(H(this._g, 255) * 100) + "%",
      b: Math.round(H(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(H(this._r, 255) * 100) + "%, " + Math.round(H(this._g, 255) * 100) + "%, " + Math.round(H(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(H(this._r, 255) * 100) + "%, " + Math.round(H(this._g, 255) * 100) + "%, " + Math.round(H(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : bo[Tt(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(t) {
    var n = "#" + Bt(this._r, this._g, this._b, this._a), r = n, i = this._gradientType ? "GradientType = 1, " : "";
    if (t) {
      var a = x(t);
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
    return x(this.toString());
  },
  _applyModification: function(t, n) {
    var r = t.apply(null, [this].concat([].slice.call(n)));
    return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this;
  },
  lighten: function() {
    return this._applyModification(lo, arguments);
  },
  brighten: function() {
    return this._applyModification(co, arguments);
  },
  darken: function() {
    return this._applyModification(uo, arguments);
  },
  desaturate: function() {
    return this._applyModification(ao, arguments);
  },
  saturate: function() {
    return this._applyModification(io, arguments);
  },
  greyscale: function() {
    return this._applyModification(so, arguments);
  },
  spin: function() {
    return this._applyModification(po, arguments);
  },
  _applyCombination: function(t, n) {
    return t.apply(null, [this].concat([].slice.call(n)));
  },
  analogous: function() {
    return this._applyCombination(fo, arguments);
  },
  complement: function() {
    return this._applyCombination(mo, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(go, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(ho, arguments);
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
x.fromRatio = function(e, t) {
  if (nt(e) == "object") {
    var n = {};
    for (var r in e)
      e.hasOwnProperty(r) && (r === "a" ? n[r] = e[r] : n[r] = Oe(e[r]));
    e = n;
  }
  return x(e, t);
};
function eo(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, n = 1, r = null, i = null, a = null, l = !1, c = !1;
  return typeof e == "string" && (e = wo(e)), nt(e) == "object" && (de(e.r) && de(e.g) && de(e.b) ? (t = to(e.r, e.g, e.b), l = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : de(e.h) && de(e.s) && de(e.v) ? (r = Oe(e.s), i = Oe(e.v), t = ro(e.h, r, i), l = !0, c = "hsv") : de(e.h) && de(e.s) && de(e.l) && (r = Oe(e.s), a = Oe(e.l), t = no(e.h, r, a), l = !0, c = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = nn(n), {
    ok: l,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
function to(e, t, n) {
  return {
    r: H(e, 255) * 255,
    g: H(t, 255) * 255,
    b: H(n, 255) * 255
  };
}
function Nt(e, t, n) {
  e = H(e, 255), t = H(t, 255), n = H(n, 255);
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
function no(e, t, n) {
  var r, i, a;
  e = H(e, 360), t = H(t, 100), n = H(n, 100);
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
  e = H(e, 255), t = H(t, 255), n = H(n, 255);
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
function ro(e, t, n) {
  e = H(e, 360) * 6, t = H(t, 100), n = H(n, 100);
  var r = Math.floor(e), i = e - r, a = n * (1 - t), l = n * (1 - i * t), c = n * (1 - (1 - i) * t), s = r % 6, d = [n, l, a, a, c, n][s], u = [c, n, n, l, a, a][s], p = [a, a, c, n, n, l][s];
  return {
    r: d * 255,
    g: u * 255,
    b: p * 255
  };
}
function Tt(e, t, n, r) {
  var i = [oe(Math.round(e).toString(16)), oe(Math.round(t).toString(16)), oe(Math.round(n).toString(16))];
  return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function oo(e, t, n, r, i) {
  var a = [oe(Math.round(e).toString(16)), oe(Math.round(t).toString(16)), oe(Math.round(n).toString(16)), oe(rn(r))];
  return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Bt(e, t, n, r) {
  var i = [oe(rn(r)), oe(Math.round(e).toString(16)), oe(Math.round(t).toString(16)), oe(Math.round(n).toString(16))];
  return i.join("");
}
x.equals = function(e, t) {
  return !e || !t ? !1 : x(e).toRgbString() == x(t).toRgbString();
};
x.random = function() {
  return x.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function ao(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = x(e).toHsl();
  return n.s -= t / 100, n.s = it(n.s), x(n);
}
function io(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = x(e).toHsl();
  return n.s += t / 100, n.s = it(n.s), x(n);
}
function so(e) {
  return x(e).desaturate(100);
}
function lo(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = x(e).toHsl();
  return n.l += t / 100, n.l = it(n.l), x(n);
}
function co(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = x(e).toRgb();
  return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), x(n);
}
function uo(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = x(e).toHsl();
  return n.l -= t / 100, n.l = it(n.l), x(n);
}
function po(e, t) {
  var n = x(e).toHsl(), r = (n.h + t) % 360;
  return n.h = r < 0 ? 360 + r : r, x(n);
}
function mo(e) {
  var t = x(e).toHsl();
  return t.h = (t.h + 180) % 360, x(t);
}
function Ht(e, t) {
  if (isNaN(t) || t <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var n = x(e).toHsl(), r = [x(e)], i = 360 / t, a = 1; a < t; a++)
    r.push(x({
      h: (n.h + a * i) % 360,
      s: n.s,
      l: n.l
    }));
  return r;
}
function ho(e) {
  var t = x(e).toHsl(), n = t.h;
  return [x(e), x({
    h: (n + 72) % 360,
    s: t.s,
    l: t.l
  }), x({
    h: (n + 216) % 360,
    s: t.s,
    l: t.l
  })];
}
function fo(e, t, n) {
  t = t || 6, n = n || 30;
  var r = x(e).toHsl(), i = 360 / n, a = [x(e)];
  for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
    r.h = (r.h + i) % 360, a.push(x(r));
  return a;
}
function go(e, t) {
  t = t || 6;
  for (var n = x(e).toHsv(), r = n.h, i = n.s, a = n.v, l = [], c = 1 / t; t--; )
    l.push(x({
      h: r,
      s: i,
      v: a
    })), a = (a + c) % 1;
  return l;
}
x.mix = function(e, t, n) {
  n = n === 0 ? 0 : n || 50;
  var r = x(e).toRgb(), i = x(t).toRgb(), a = n / 100, l = {
    r: (i.r - r.r) * a + r.r,
    g: (i.g - r.g) * a + r.g,
    b: (i.b - r.b) * a + r.b,
    a: (i.a - r.a) * a + r.a
  };
  return x(l);
};
x.readability = function(e, t) {
  var n = x(e), r = x(t);
  return (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(n.getLuminance(), r.getLuminance()) + 0.05);
};
x.isReadable = function(e, t, n) {
  var r = x.readability(e, t), i, a;
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
x.mostReadable = function(e, t, n) {
  var r = null, i = 0, a, l, c, s;
  n = n || {}, l = n.includeFallbackColors, c = n.level, s = n.size;
  for (var d = 0; d < t.length; d++)
    a = x.readability(e, t[d]), a > i && (i = a, r = x(t[d]));
  return x.isReadable(e, r, {
    level: c,
    size: s
  }) || !l ? r : (n.includeFallbackColors = !1, x.mostReadable(e, ["#fff", "#000"], n));
};
var vt = x.names = {
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
}, bo = x.hexNames = vo(vt);
function vo(e) {
  var t = {};
  for (var n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function nn(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function H(e, t) {
  yo(e) && (e = "100%");
  var n = xo(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function it(e) {
  return Math.min(1, Math.max(0, e));
}
function Q(e) {
  return parseInt(e, 16);
}
function yo(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function xo(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function oe(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function Oe(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function rn(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Dt(e) {
  return Q(e) / 255;
}
var ne = (function() {
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
  return !!ne.CSS_UNIT.exec(e);
}
function wo(e) {
  e = e.replace(Kr, "").replace(Qr, "").toLowerCase();
  var t = !1;
  if (vt[e])
    e = vt[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var n;
  return (n = ne.rgb.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3]
  } : (n = ne.rgba.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3],
    a: n[4]
  } : (n = ne.hsl.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3]
  } : (n = ne.hsla.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3],
    a: n[4]
  } : (n = ne.hsv.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3]
  } : (n = ne.hsva.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3],
    a: n[4]
  } : (n = ne.hex8.exec(e)) ? {
    r: Q(n[1]),
    g: Q(n[2]),
    b: Q(n[3]),
    a: Dt(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ne.hex6.exec(e)) ? {
    r: Q(n[1]),
    g: Q(n[2]),
    b: Q(n[3]),
    format: t ? "name" : "hex"
  } : (n = ne.hex4.exec(e)) ? {
    r: Q(n[1] + "" + n[1]),
    g: Q(n[2] + "" + n[2]),
    b: Q(n[3] + "" + n[3]),
    a: Dt(n[4] + "" + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ne.hex3.exec(e)) ? {
    r: Q(n[1] + "" + n[1]),
    g: Q(n[2] + "" + n[2]),
    b: Q(n[3] + "" + n[3]),
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
function st(e) {
  return e.reduce((t, n, r) => {
    const i = x(n).toHsl(), a = `${i.h}deg, ${Math.round(i.s * 100)}%, ${Math.round(i.l * 100)}%`;
    return t[`--${xe[r] || "default"}`] = a, t;
  }, {});
}
function Ee(e, t = 1) {
  const [n, r] = y(!1);
  return N(() => {
    if (e) {
      r(!0);
      const i = setTimeout(() => r(!1), t * 1e3);
      return () => clearTimeout(i);
    }
  }, [e, t]), n;
}
const _o = "_container_62cx0_1", Fo = "_measure_62cx0_6", Co = "_wrapper_62cx0_13", Ro = "_virtual_62cx0_19", So = "_scale_62cx0_25", Be = {
  container: _o,
  measure: Fo,
  wrapper: Co,
  virtual: Ro,
  scale: So
};
function Eo(...e) {
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
  } = e, d = F(() => Eo(t, Be.container), [t]), u = _(null), p = _(null), m = _(null), h = _(null), [f, C] = y(1), [S, L] = y(1), I = R(() => {
    if (!p.current || !h.current || !m.current)
      return;
    const w = p.current.clientWidth / h.current.clientWidth, A = Number(
      (m.current.clientHeight / h.current.clientHeight).toFixed(3)
    ), v = l ? Math.min(w, A) : w;
    C(l ? 1 + Math.max(0, w - v) : w), !a && v >= 1 ? L(1) : L(Math.max(0.1, v));
  }, [l, a]);
  return xn(() => {
    if (!m.current || !p.current || !h.current)
      return;
    const w = new ResizeObserver(I);
    return w.observe(m.current), w.observe(p.current), w.observe(h.current), window.addEventListener("resize", I), I(), () => {
      w.disconnect(), window.removeEventListener("resize", I);
    };
  }, [I]), N(() => {
    var w;
    (w = u.current) != null && w.parentNode && u.current.parentNode.style.setProperty("--max-scale", String(f));
  }, [f]), /* @__PURE__ */ o(
    n,
    {
      ref: u,
      className: d,
      style: {
        "--scale": S,
        "--max-scale": f,
        ...c
      },
      ...s,
      children: /* @__PURE__ */ b("div", { ref: p, className: Be.measure, children: [
        /* @__PURE__ */ o("div", { ref: m, className: Be.wrapper, children: /* @__PURE__ */ o("div", { ref: h, className: Be.virtual, children: r || i }) }),
        /* @__PURE__ */ o("div", { className: Be.scale, children: i })
      ] })
    }
  );
}
const ke = T(Lo), Mo = "_container_1rv8h_3", Ao = "_active_1rv8h_36", No = "_contracted_1rv8h_40", He = {
  container: Mo,
  active: Ao,
  contracted: No
}, Io = 0.2;
function To(e) {
  const { colors: t = [], isInteractive: n = !1 } = e, r = _(null), i = F(
    () => /* @__PURE__ */ o(Le, { children: t.map((a, l) => /* @__PURE__ */ o(
      "div",
      {
        style: { "--color": a, zIndex: -l }
      },
      l
    )) }),
    [t]
  );
  return N(() => {
    const a = r.current ? Array.from(r.current.children) : [];
    let l = null;
    const c = () => {
      a.forEach((s) => {
        s.classList.remove(He.active), s.classList.remove(He.contracted);
      });
    };
    if (c(), n) {
      let s = 1;
      const d = () => {
        a.forEach((u, p) => {
          u.classList.toggle(He.active, p === s), u.classList.toggle(He.contracted, p < s);
        }), s >= a.length ? (l && clearInterval(l), c()) : s += 1;
      };
      d(), l = setInterval(d, Io * 1e3);
    }
    return () => {
      l && clearInterval(l);
    };
  }, [n, t.length]), /* @__PURE__ */ o("div", { ref: r, className: He.container, children: i });
}
const on = T(To), Bo = "_container_1mm99_3", Ho = "_shapePill_1mm99_26", Do = "_shapeOval_1mm99_30", Oo = "_shapeSquare_1mm99_34", Po = "_shapeUnderline_1mm99_38", $o = "_fill_1mm99_47", zo = "_cardBackgroundMatch_1mm99_64", Wo = "_hover_1mm99_73", Uo = "_outer_1mm99_83", Vo = "_inner_1mm99_87", ae = {
  container: Bo,
  shapePill: Ho,
  shapeOval: Do,
  shapeSquare: Oo,
  shapeUnderline: Po,
  fill: $o,
  cardBackgroundMatch: zo,
  hover: Wo,
  outer: Uo,
  inner: Vo
};
function jo(...e) {
  return e.filter(Boolean).join(" ");
}
const Go = {
  pill: ae.shapePill,
  oval: ae.shapeOval,
  square: ae.shapeSquare,
  underline: ae.shapeUnderline
};
function Zo(e) {
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
    textTransform: h = "none",
    isHover: f = !1,
    ...C
  } = e, S = F(
    () => jo(
      ae.container,
      r && ae.fill,
      l ? Go[l] : void 0,
      f && ae.hover
    ),
    [r, l, f]
  ), L = F(
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
  ), I = F(
    () => `${n}_${h}_${u}`,
    [n, h, u]
  );
  return /* @__PURE__ */ b(
    "div",
    {
      className: S,
      style: L,
      tabIndex: -1,
      ...C,
      children: [
        /* @__PURE__ */ o("div", { className: ae.cardBackgroundMatch }),
        /* @__PURE__ */ o(ie, { className: ae.outer, classNameContent: ae.inner, children: /* @__PURE__ */ o(
          "span",
          {
            className: n,
            style: {
              textTransform: h,
              fontWeight: u
            },
            children: t
          },
          I
        ) })
      ]
    }
  );
}
const Qe = T(Zo), qo = "_container_bx5fz_3", Yo = "_heading_bx5fz_18", Xo = "_text_bx5fz_33", Jo = "_swatch_bx5fz_38", Ko = "_button_bx5fz_43", Qo = "_swap_bx5fz_55", ve = {
  container: qo,
  heading: Yo,
  text: Xo,
  swatch: Jo,
  button: Ko,
  swap: Qo
}, ea = 1.15, ta = 1.2, Ot = 0.04;
function na(e) {
  const { color: t, fonts: n, buttons: r } = e, [i, a] = y(!1), l = at(i, ea), c = Ee(l, ta), s = F(() => {
    const m = (h, f) => `var(--${xe[(h || t.buttons)[f]]})`;
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
  }, [t]), d = F(
    () => ({
      "--color-background": t.palette[t.background],
      "--color-heading": t.palette[t.headings]
    }),
    [t]
  ), u = F(
    () => st(t.palette),
    [t]
  ), p = F(
    () => ({
      heading: n.headingFont.className,
      swatch: JSON.stringify(t.palette),
      button: JSON.stringify({ ...r.primary, fonts: n })
    }),
    [t.palette, r.primary, n]
  );
  return /* @__PURE__ */ b(
    "div",
    {
      className: ve.container,
      style: d,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        /* @__PURE__ */ o("div", { className: ve.heading, children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o(ie, { classNameContent: ve.text, children: /* @__PURE__ */ o("div", { className: n.headingFont.className, children: "Aa" }, p.heading) }) }) }),
        /* @__PURE__ */ o("div", { className: ve.swatch, children: /* @__PURE__ */ o(ie, { className: ve.swap, delayHide: Ot, children: /* @__PURE__ */ o(
          on,
          {
            colors: t.palette,
            isInteractive: i
          },
          p.swatch
        ) }) }),
        /* @__PURE__ */ o("div", { className: ve.button, style: u, children: /* @__PURE__ */ o(
          ie,
          {
            className: ve.swap,
            delayHide: Ot * 2,
            children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o(
              Qe,
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
const an = T(na), ra = "_container_1brv3_3", oa = "_hoverHeading_1brv3_16", aa = "_heading_1brv3_16", ia = "_paragraph_1brv3_21", sa = "_hoverParagraph_1brv3_26", la = "_swap_1brv3_36", ca = "_text_1brv3_69", fe = {
  container: ra,
  hoverHeading: oa,
  heading: aa,
  paragraph: ia,
  hoverParagraph: sa,
  swap: la,
  text: ca
}, da = 0.2, ua = 0.75, pt = da + ua;
function mt(...e) {
  return e.filter(Boolean).join(" ");
}
function pa(e) {
  const { color: t, fonts: n } = e, [r, i] = y(!1), a = at(r, pt), l = Ee(r, pt), c = Ee(a, pt), s = F(
    () => mt(
      fe.container,
      l && fe.hoverHeading,
      c && fe.hoverParagraph
    ),
    [l, c]
  ), d = F(
    () => ({
      "--color": t.palette[4]
    }),
    [t.palette]
  ), [u, p] = F(
    () => [
      mt(n.headingFont.className, fe.text),
      mt(n.paragraphFont.className, fe.text)
    ],
    [n.headingFont.className, n.paragraphFont.className]
  ), m = F(
    () => `${u}_${p}`,
    [u, p]
  );
  return /* @__PURE__ */ o(
    ie,
    {
      className: s,
      style: d,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ b("div", { className: fe.swap, children: [
        /* @__PURE__ */ o("div", { className: fe.heading, children: /* @__PURE__ */ o(ke, { upscale: !0, contain: !0, children: /* @__PURE__ */ o("div", { className: u, children: "Heading" }) }) }),
        /* @__PURE__ */ o("div", { className: fe.paragraph, children: /* @__PURE__ */ o(ke, { children: /* @__PURE__ */ o("div", { className: p, children: "This is your paragraph." }) }) })
      ] }, m)
    }
  );
}
const sn = T(pa), ma = "_container_1pxtn_3", ha = {
  container: ma
};
function fa(e) {
  const { color: t } = e, { palette: n } = t, [r, i] = y(!1), a = F(() => JSON.stringify(n), [n]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: ha.container,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ o(ie, { children: /* @__PURE__ */ o(on, { colors: n, isInteractive: r }, a) })
    }
  );
}
const ln = T(fa), ga = "_container_1j81e_3", ba = "_interactive_1j81e_19", va = "_button_1j81e_19", ya = "_primary_1j81e_23", xa = "_secondary_1j81e_27", wa = "_tertiary_1j81e_32", ka = "_buttons_1j81e_39", ue = {
  container: ga,
  interactive: ba,
  button: va,
  primary: ya,
  secondary: xa,
  tertiary: wa,
  buttons: ka
}, _a = 0.2, Fa = 1.5;
function Ke(...e) {
  return e.filter(Boolean).join(" ");
}
function Ca(e) {
  const { buttons: t, color: n, fonts: r } = e, [i, a] = y(!1), l = Ee(
    i,
    _a + Fa
  ), c = F(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = F(
    () => Ke(ue.container, l && ue.interactive),
    [l]
  ), d = F(
    () => st(n.palette),
    [n.palette]
  ), u = F(() => {
    const p = l ? "Primary" : "Button", m = (f, C) => `var(--${xe[(f || n.buttons)[C]]})`, h = {
      primaryColor: m(n.buttonsPreview, 0),
      secondaryColor: m(n.buttonsPreview, 1),
      primaryColorNoFill: m(n.buttonsNoFillPreview, 0),
      secondaryColorNoFill: m(n.buttonsNoFillPreview, 1)
    };
    return /* @__PURE__ */ b(Le, { children: [
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.tertiary), children: /* @__PURE__ */ o(
        Qe,
        {
          className: r.paragraphFont.className,
          ...t.tertiary,
          ...h,
          children: "Tertiary"
        }
      ) }),
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.secondary), children: /* @__PURE__ */ o(
        Qe,
        {
          className: r.paragraphFont.className,
          ...t.secondary,
          ...h,
          children: "Secondary"
        }
      ) }),
      /* @__PURE__ */ o(ke, { className: Ke(ue.button, ue.primary), children: /* @__PURE__ */ o(
        Qe,
        {
          className: r.paragraphFont.className,
          ...t.primary,
          ...h,
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
      children: /* @__PURE__ */ o(ie, { children: /* @__PURE__ */ o("div", { className: ue.buttons, children: u }, c) })
    }
  );
}
const cn = T(Ca), Ra = "_container_1i7v7_3", Sa = "_sizeSmall_1i7v7_20", Ea = "_inputFill_1i7v7_27", La = "_input_1i7v7_27", Ma = "_optionFill_1i7v7_40", Aa = "_option_1i7v7_40", Na = "_inputShapePill_1i7v7_51", Ia = "_inputShapeSquare_1i7v7_55", Ta = "_inputShapeUnderline_1i7v7_59", Ba = "_optionShapePill_1i7v7_67", Ha = "_optionShapeSquare_1i7v7_71", Da = "_optionShapeCircle_1i7v7_75", Oa = "_optionButton_1i7v7_81", Pa = "_optionInvert_1i7v7_82", $a = "_hoverInput_1i7v7_88", za = "_hoverOption_1i7v7_93", Wa = "_label_1i7v7_152", V = {
  container: Ra,
  sizeSmall: Sa,
  inputFill: Ea,
  input: La,
  optionFill: Ma,
  option: Aa,
  inputShapePill: Na,
  inputShapeSquare: Ia,
  inputShapeUnderline: Ta,
  optionShapePill: Ba,
  optionShapeSquare: Ha,
  optionShapeCircle: Da,
  optionButton: Oa,
  optionInvert: Pa,
  hoverInput: $a,
  hoverOption: za,
  label: Wa
}, Pt = "Field";
function Ua(e) {
  const { isInteractive: t, inputRate: n = 100 } = e, [r, i] = y(""), [a, l] = y(!1);
  return N(() => {
    if (t) {
      const c = Pt;
      let s = 0;
      const d = setInterval(() => {
        s <= c.length ? (i(c.substring(0, s)), l(!0), s++) : (l(!1), clearInterval(d));
      }, n);
      return () => clearInterval(d);
    } else
      i(Pt), l(!1);
  }, [t, n]), /* @__PURE__ */ b("span", { children: [
    r,
    a && "|"
  ] });
}
const Va = T(Ua), ht = 1;
function $t(...e) {
  return e.filter(Boolean).join(" ");
}
const ja = {
  pill: V.inputShapePill,
  square: V.inputShapeSquare,
  underline: V.inputShapeUnderline
}, Ga = {
  pill: V.optionShapePill,
  square: V.optionShapeSquare,
  circle: V.optionShapeCircle
};
function Za() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" }) });
}
function qa(e) {
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
  } = e, u = at(i, ht), p = Ee(i, ht), m = Ee(u, ht), h = F(
    () => $t(
      t,
      V.container,
      n.fill && V.inputFill,
      p && V.hoverInput,
      m && V.hoverOption,
      r.button && V.optionButton,
      r.fill && V.optionFill,
      r.inverted && V.optionInvert,
      ja[n.shape],
      Ga[r.shape],
      a === "small" && V.sizeSmall
    ),
    [t, n, r, a, p, m]
  ), f = F(
    () => $t(V.option, r.button && V.label),
    [r.button]
  ), C = F(
    () => ({
      "--input-border-width": n.outline,
      "--input-border-radius": n.borderRadius.join(" "),
      "--option-border-width": r.outline,
      "--option-border-radius": r.borderRadius.join(" ")
    }),
    [n.borderRadius, n.outline, r.borderRadius, r.outline]
  ), S = F(
    () => ({
      "--color-primary-hsl": l,
      "--color-secondary-hsl": c
    }),
    [l, c]
  ), L = F(
    () => ({
      "--color-primary-hsl": s,
      "--color-secondary-hsl": d
    }),
    [s, d]
  );
  return /* @__PURE__ */ b("div", { className: h, style: C, children: [
    /* @__PURE__ */ o("div", { className: V.input, style: S, children: /* @__PURE__ */ o(Va, { isInteractive: i }) }),
    /* @__PURE__ */ o("div", { className: f, style: L, children: r.button ? "Option" : /* @__PURE__ */ o(Za, {}) })
  ] });
}
const Ya = T(qa), Xa = "_container_8tn8q_3", Ja = "_swap_8tn8q_12", Ka = "_form_8tn8q_16", ft = {
  container: Xa,
  swap: Ja,
  form: Ka
};
function Qa(e) {
  const { form: t, color: n, fonts: r, previewSize: i = "standard" } = e, [a, l] = y(!1), c = F(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = F(
    () => st(n.palette),
    [n.palette]
  ), d = F(
    () => /* @__PURE__ */ o(
      Ya,
      {
        className: r.paragraphFont.className,
        ...t,
        size: i,
        primaryColor: `var(--${xe[n.form[0]]})`,
        secondaryColor: `var(--${xe[n.form[1]]})`,
        buttonPrimaryColor: `var(--${xe[n.form[2]]})`,
        buttonSecondaryColor: `var(--${xe[n.form[3]]})`,
        isInteractive: a
      }
    ),
    [a, n.form, r.paragraphFont.className, t, i]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: ft.container,
      style: s,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: /* @__PURE__ */ o(ie, { className: ft.swap, children: /* @__PURE__ */ o("div", { className: ft.form, children: d }, c) })
    }
  );
}
const dn = T(Qa), ei = "_container_pfdmi_3", ti = "_undocked_pfdmi_17", ni = "_hidden_pfdmi_21", ri = "_wrapper_pfdmi_27", oi = "_background_pfdmi_35", ai = "_backgroundBox_pfdmi_47", ii = "_box_pfdmi_55", si = "_panel_pfdmi_68", li = "_header_pfdmi_80", ci = "_body_pfdmi_98", di = "_padding_pfdmi_113", ui = "_padBottom_pfdmi_118", pi = "_padTop_pfdmi_122", Z = {
  container: ei,
  undocked: ti,
  hidden: ni,
  wrapper: ri,
  background: oi,
  backgroundBox: ai,
  box: ii,
  panel: si,
  header: li,
  body: ci,
  padding: di,
  padBottom: ui,
  padTop: pi
}, un = (...e) => e.filter(Boolean).join(" ");
function mi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: Z.panel, children: e });
}
function hi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: Z.header, children: e });
}
function fi({
  children: e,
  padding: t = !1,
  padTop: n = !1,
  padBottom: r = !0
}) {
  const i = F(
    () => un(
      Z.body,
      t && Z.padding,
      n && Z.padTop,
      r && Z.padBottom
    ),
    [t, n, r]
  );
  return /* @__PURE__ */ o("div", { className: i, children: e });
}
function gi({
  children: e,
  attachment: t,
  undocked: n = !1,
  isHidden: r = !1,
  mode: i = "light"
}) {
  const a = _(null);
  N(() => {
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
  const l = F(
    () => un(
      Z.container,
      n && Z.undocked,
      r && Z.hidden,
      Z[`mode-${i}`]
    ),
    [n, r, i]
  ), c = /* @__PURE__ */ o("dialog", { ref: a, className: l, open: !0, children: /* @__PURE__ */ b("div", { className: Z.wrapper, children: [
    /* @__PURE__ */ o("div", { className: Z.background, children: /* @__PURE__ */ o("div", { className: Z.backgroundBox }) }),
    /* @__PURE__ */ o("div", { className: Z.box, children: e })
  ] }) });
  return rt(c, document.body);
}
const D = T(gi);
D.Panel = T(mi);
D.Header = T(hi);
D.Body = T(fi);
const bi = "_container_17wzg_1", vi = "_shimmer_17wzg_44", yi = "_hover_17wzg_49", xi = "_active_17wzg_53", wi = "_fadeup_17wzg_62", ki = "_content_17wzg_129", _i = "_wrap_17wzg_138", ye = {
  container: bi,
  shimmer: vi,
  hover: yi,
  active: xi,
  fadeup: wi,
  content: ki,
  wrap: _i
}, Fi = (...e) => e.filter(Boolean).join(" ");
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
  const [d, u] = y(!1), p = F(
    () => Fi(
      e,
      ye.container,
      d && ye.hover,
      n && ye.active,
      c && ye.fadeup
    ),
    [e, d, n, c]
  ), m = R(() => {
    u(!0);
  }, []), h = R(() => {
    u(!1);
  }, []);
  return /* @__PURE__ */ b(
    "button",
    {
      className: p,
      onMouseEnter: m,
      onMouseLeave: h,
      onClick: (C) => {
        u(!1), a == null || a(C);
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
const Pe = T(Ci), Ri = {
  display: "grid",
  gap: "11px"
}, Si = {
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
function Ei({
  items: e,
  getItem: t,
  columns: n = 1,
  max: r = 8
}) {
  const [i, a] = y(!1), l = F(
    () => e.slice(0, r).map((p, m) => t(p, m)),
    [e, t, r]
  ), c = F(
    () => e.slice(r).map((p, m) => t(p, m + r)),
    [e, t, r]
  ), s = c.length > 0, d = R(
    (p) => {
      p.stopPropagation(), a((m) => !m);
    },
    []
  ), u = F(
    () => ({
      display: "grid",
      gap: "inherit",
      gridTemplateColumns: `repeat(${n}, 1fr)`
    }),
    [n]
  );
  return /* @__PURE__ */ b("div", { style: Ri, children: [
    /* @__PURE__ */ b("div", { style: u, children: [
      l,
      i && c
    ] }),
    s && /* @__PURE__ */ o("button", { style: Si, onClick: d, children: i ? "Show Less" : "Show All" })
  ] });
}
const $e = T(Ei), zt = 1, Li = 0.04;
function Mi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, themePacks: i, setPack: a } = _e(), l = F(() => r.name, [r]), c = R(
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
            an,
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
  return /* @__PURE__ */ o(D, { attachment: e, undocked: t, children: /* @__PURE__ */ b(D.Panel, { children: [
    /* @__PURE__ */ o(D.Header, { children: "Themes" }),
    /* @__PURE__ */ o(D.Body, { padding: !0, children: /* @__PURE__ */ o(
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
const Ai = T(Mi), Wt = 2, Ni = 0.04;
function Ii({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, fontPacks: i, setPack: a } = _e(), l = F(
    () => `${r.fonts.headingFont.name}_${r.fonts.paragraphFont.name}`,
    [r]
  ), c = R(
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
          delayShow: (m + 1) * Ni,
          animateReveal: !0,
          children: /* @__PURE__ */ o(sn, { color: p.color, fonts: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(D, { attachment: e, undocked: t, children: /* @__PURE__ */ b(D.Panel, { children: [
    /* @__PURE__ */ o(D.Header, { children: "Recommended Font Packs" }),
    /* @__PURE__ */ o(D.Body, { padding: !0, children: /* @__PURE__ */ o(
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
const Ti = T(Ii), Ut = 2, Bi = 0.04;
function Hi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, colorPacks: i, setPack: a } = _e(), l = F(
    () => JSON.stringify(r.color),
    [r]
  ), c = R(
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
          delayShow: (m + 1) * Bi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(ln, { color: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(D, { attachment: e, undocked: t, children: /* @__PURE__ */ b(D.Panel, { children: [
    /* @__PURE__ */ o(D.Header, { children: "Recommended Color Packs" }),
    /* @__PURE__ */ o(D.Body, { padding: !0, children: /* @__PURE__ */ o(
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
const Di = T(Hi), Vt = 2, Oi = 0.04;
function Pi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, buttonPacks: i, setPack: a } = _e(), l = F(
    () => JSON.stringify(r.buttons),
    [r]
  ), c = R(
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
          delayShow: (m + 1) * Oi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            cn,
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
  return /* @__PURE__ */ o(D, { attachment: e, undocked: t, children: /* @__PURE__ */ b(D.Panel, { children: [
    /* @__PURE__ */ o(D.Header, { children: "Recommended Button Packs" }),
    /* @__PURE__ */ o(D.Body, { padding: !0, children: /* @__PURE__ */ o(
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
const $i = T(Pi), jt = 2, zi = 0.04;
function Wi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, formPacks: i, setPack: a } = _e(), l = F(
    () => JSON.stringify(r.form),
    [r]
  ), c = R(
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
          delayShow: (m + 1) * zi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            dn,
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
  return /* @__PURE__ */ o(D, { attachment: e, undocked: t, children: /* @__PURE__ */ b(D.Panel, { children: [
    /* @__PURE__ */ o(D.Header, { children: "Recommended Form Packs" }),
    /* @__PURE__ */ o(D.Body, { padding: !0, children: /* @__PURE__ */ o(
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
const Ui = T(Wi), Vi = "_fadeup_1my1f_31", ji = "_fadeoutdown_1my1f_36", Gt = {
  fadeup: Vi,
  fadeoutdown: ji
}, De = !0, Gi = 0.35, Zi = 0.04;
function qi({ depth: e = 0, isActive: t = !1 }) {
  const { userTheme: n } = _e(), [r, i] = y(null), [a, l] = y(null), c = _(), s = _(null), d = R(
    (h, f) => {
      h.preventDefault(), h.stopPropagation();
      const S = { current: h.currentTarget };
      i(S), l((L) => (clearTimeout(c.current), s.current = L === f ? null : f, s.current)), clearTimeout(c.current);
    },
    []
  );
  N(() => {
    t || (l(null), i(null));
  }, [t]);
  const u = R(
    (h, f) => t ? h * 0.04 : (f - h) * 0.04,
    [t]
  ), p = R((h) => (c.current = setTimeout(() => {
    s.current === h && l(null);
  }, 0), () => {
    clearTimeout(c.current);
  }), []), m = F(() => r ? a === "themes" ? /* @__PURE__ */ o(
    Ai,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("themes")
    },
    "themes"
  ) : a === "fonts" ? /* @__PURE__ */ o(
    Ti,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("fonts")
    },
    "fonts"
  ) : a === "colors" ? /* @__PURE__ */ o(
    Di,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("colors")
    },
    "colors"
  ) : a === "buttons" ? /* @__PURE__ */ o(
    $i,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("buttons")
    },
    "buttons"
  ) : a === "forms" ? /* @__PURE__ */ o(
    Ui,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("forms")
    },
    "forms"
  ) : null : null, [a, r, p]);
  return /* @__PURE__ */ b(hr, { title: "Styles", depth: e, isActive: t, children: [
    /* @__PURE__ */ o(
      Te,
      {
        label: "Themes",
        isShown: t,
        onClick: (h) => d(h, "themes"),
        active: a === "themes",
        wrap: !0,
        delayShow: u(0, 5),
        animateReveal: De,
        children: /* @__PURE__ */ o(
          an,
          {
            color: n.color,
            fonts: n.fonts,
            buttons: n.buttons
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      Te,
      {
        disclosure: "/config/site-styles/fonts",
        label: "Fonts",
        isShown: t,
        onClick: (h) => d(h, "fonts"),
        active: a === "fonts",
        delayShow: u(1, 5),
        animateReveal: De,
        children: /* @__PURE__ */ o(sn, { color: n.color, fonts: n.fonts })
      }
    ),
    /* @__PURE__ */ o(
      Te,
      {
        disclosure: "/config/site-styles/colors",
        label: "Colors",
        isShown: t,
        onClick: (h) => d(h, "colors"),
        active: a === "colors",
        delayShow: u(2, 5),
        animateReveal: De,
        children: /* @__PURE__ */ o(ln, { color: n.color })
      }
    ),
    /* @__PURE__ */ o(
      Te,
      {
        disclosure: "/config/site-styles/buttons",
        label: "Buttons",
        isShown: t,
        onClick: (h) => d(h, "buttons"),
        active: a === "buttons",
        delayShow: u(3, 5),
        animateReveal: De,
        children: /* @__PURE__ */ o(
          cn,
          {
            buttons: n.buttons,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      Te,
      {
        disclosure: "/config/site-styles/forms",
        label: "Forms",
        isShown: t,
        onClick: (h) => d(h, "forms"),
        active: a === "forms",
        delayShow: u(4, 5),
        animateReveal: De,
        children: /* @__PURE__ */ o(
          dn,
          {
            form: n.form,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ b(
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
      ie,
      {
        animateFirst: !0,
        directionOut: "down",
        delayShow: Zi,
        distance: 0,
        duration: Gi,
        useOpacity: !1,
        children: m
      }
    )
  ] });
}
const Yi = T(qi), Xi = "_container_goi2l_3", Ji = "_backButton_goi2l_7", Zt = {
  container: Xi,
  backButton: Ji
};
function Ki() {
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
function Qi(e) {
  return e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function es() {
  const { route: e, depth: t, onBack: n } = _e(), r = F(() => {
    if (t === 0) return null;
    const i = Qi(e[t] ?? "Back");
    return /* @__PURE__ */ b("button", { className: Zt.backButton, onClick: n, children: [
      /* @__PURE__ */ o(Ki, {}),
      i
    ] }, "back");
  }, [e, t, n]);
  return /* @__PURE__ */ o("div", { className: Zt.container, children: /* @__PURE__ */ o(ie, { directionIn: "left", directionOut: "left", children: r }) });
}
const ts = T(es), ns = "_container_1anux_3", rs = "_open_1anux_14", os = "_header_1anux_18", as = "_bar_1anux_31", is = "_body_1anux_38", ss = "_panels_1anux_48", Re = {
  container: ns,
  open: rs,
  header: os,
  bar: as,
  body: is,
  panels: ss
}, ls = (...e) => e.filter(Boolean).join(" "), pn = Xt(
  {}
), _e = () => wn(pn);
function cs({ isOpen: e, themeState: t, className: n, onClose: r }) {
  const i = _(null), a = at(e, 0.01, 0.5), { route: l, depth: c, onBack: s } = sr(i, e), d = F(
    () => ls(n, Re.container, e && Re.open),
    [n, e]
  ), u = F(
    () => ({
      ...t,
      route: l,
      depth: c,
      onBack: s
    }),
    [t, l, c, s]
  ), p = F(() => l.map((m, h) => /* @__PURE__ */ o(Yi, { depth: h, isActive: c === h && e }, h)), [l, c, e]);
  return /* @__PURE__ */ o(pn.Provider, { value: u, children: /* @__PURE__ */ o("div", { ref: i, className: d, children: a && /* @__PURE__ */ b(Le, { children: [
    /* @__PURE__ */ o("div", { className: Re.header, children: /* @__PURE__ */ b("div", { className: Re.bar, style: { justifyContent: "flex-start" }, children: [
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
      /* @__PURE__ */ o(ts, {})
    ] }) }),
    /* @__PURE__ */ o("div", { className: Re.body, children: /* @__PURE__ */ o(
      "div",
      {
        className: Re.panels,
        style: { "--depth": c },
        children: p
      }
    ) })
  ] }) }) });
}
const Ds = T(cs), mn = {
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
}, ds = Object.values(mn).flatMap((e) => e), Y = (e, t) => mn[e][t], hn = {
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
}, us = Object.values(hn).flatMap((e) => e), X = (e, t) => hn[e][t];
function E(e, t, n = 400, r) {
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
function G(e, t, n = 400, r) {
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
const g = {
  // Vibrant heading fonts
  shrikhand: E("Shrikhand", "Shrikhand", 400, "Shrikhand:wght@400"),
  concertone: E("Concert One", "Concert One", 400, "Concert+One:wght@400"),
  youngserif: G("Young Serif", "Young Serif", 400, "Young+Serif:wght@400"),
  capriola: E("Capriola", "Capriola", 400, "Capriola:wght@400"),
  lilitaone: E("Lilita One", "Lilita One", 400, "Lilita+One:wght@400"),
  trocchi: G("Trocchi", "Trocchi", 400, "Trocchi:wght@400"),
  averiaseriflibre: G("Averia Serif Libre", "Averia Serif Libre", 400, "Averia+Serif+Libre:wght@400"),
  agbalumo: E("Agbalumo", "Agbalumo", 400, "Agbalumo:wght@400"),
  bungee: E("Bungee", "Bungee", 400, "Bungee:wght@400"),
  bebasneue: E("Bebas Neue", "Bebas Neue", 400, "Bebas+Neue:wght@400"),
  // Vibrant body fonts
  bitter: G("Bitter", "Bitter", 400, "Bitter:wght@400"),
  syne: E("Syne", "Syne", 400, "Syne:wght@400;800"),
  ibmplexmono: E("IBM Plex Mono", "IBM Plex Mono", 400, "IBM+Plex+Mono:wght@400"),
  spacegrotesk: E("Space Grotesk", "Space Grotesk", 400, "Space+Grotesk:wght@400"),
  spacemono: E("Space Mono", "Space Mono", 400, "Space+Mono:wght@400"),
  silkscreen: E("Silkscreen", "Silkscreen", 400, "Silkscreen:wght@400"),
  // Neutral heading fonts
  librebaskerville: G("Libre Baskerville", "Libre Baskerville", 400, "Libre+Baskerville:wght@400"),
  tenorsans: E("Tenor Sans", "Tenor Sans", 400, "Tenor+Sans:wght@400"),
  marcellus: G("Marcellus", "Marcellus", 400, "Marcellus:wght@400"),
  alice: G("Alice", "Alice", 400, "Alice:wght@400"),
  neuton: G("Neuton", "Neuton", 400, "Neuton:wght@400"),
  newsreader: G("Newsreader", "Newsreader", 400, "Newsreader:wght@400"),
  ovo: G("Ovo", "Ovo", 400, "Ovo:wght@400"),
  // Neutral body fonts
  almarai: E("Almarai", "Almarai", 400, "Almarai:wght@400"),
  pontanosans: E("Pontano Sans", "Pontano Sans", 400, "Pontano+Sans:wght@400"),
  ptserif: G("PT Serif", "PT Serif", 400, "PT+Serif:wght@400"),
  // Modern fonts
  asap: E("Asap", "Asap", 400, "Asap:wght@400;600"),
  sansita: E("Sansita", "Sansita", 400, "Sansita:wght@400"),
  nunitosans: E("Nunito Sans", "Nunito Sans", 400, "Nunito+Sans:wght@400;600"),
  comfortaa: E("Comfortaa", "Comfortaa", 400, "Comfortaa:wght@400"),
  worksans: E("Work Sans", "Work Sans", 400, "Work+Sans:wght@400"),
  rubik: E("Rubik", "Rubik", 400, "Rubik:wght@400"),
  // Minimal fonts
  manrope: E("Manrope", "Manrope", 400, "Manrope:wght@400;700"),
  poppins: E("Poppins", "Poppins", 400, "Poppins:wght@400;600"),
  urbanist: E("Urbanist", "Urbanist", 400, "Urbanist:wght@400;700"),
  instrumentserif: G("Instrument Serif", "Instrument Serif", 400, "Instrument+Serif:wght@400"),
  familjengrotesk: E("Familjen Grotesk", "Familjen Grotesk", 400, "Familjen+Grotesk:wght@400"),
  arimo: E("Arimo", "Arimo", 400, "Arimo:wght@400"),
  archivo: E("Archivo", "Archivo", 400, "Archivo:wght@400;700"),
  gildadisplay: G("Gilda Display", "Gilda Display", 400, "Gilda+Display:wght@400"),
  oswald: E("Oswald", "Oswald", 400, "Oswald:wght@400;700"),
  epilogue: E("Epilogue", "Epilogue", 400, "Epilogue:wght@400;700"),
  // Adventurous fonts
  climatecrisis: E("Climate Crisis", "Climate Crisis", 400, "Climate+Crisis:wght@400"),
  ultra: G("Ultra", "Ultra", 400, "Ultra:wght@400"),
  modak: E("Modak", "Modak", 400, "Modak:wght@400"),
  goblinone: E("Goblin One", "Goblin One", 400, "Goblin+One:wght@400"),
  delagothicone: E("Dela Gothic One", "Dela Gothic One", 400, "Dela+Gothic+One:wght@400"),
  archivoblack: E("Archivo Black", "Archivo Black", 400, "Archivo+Black:wght@400"),
  coiny: E("Coiny", "Coiny", 400, "Coiny:wght@400")
}, fn = {
  minimal: [
    {
      packs: ["minimal"],
      headingFont: g.manrope,
      paragraphFont: g.poppins
    },
    {
      packs: ["minimal"],
      headingFont: g.urbanist,
      paragraphFont: g.poppins
    },
    {
      packs: ["minimal"],
      headingFont: g.instrumentserif,
      paragraphFont: g.newsreader
    },
    {
      packs: ["minimal"],
      headingFont: g.familjengrotesk,
      paragraphFont: g.arimo
    },
    {
      packs: ["minimal"],
      headingFont: g.archivo,
      paragraphFont: g.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: g.gildadisplay,
      paragraphFont: g.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: g.oswald,
      paragraphFont: g.arimo
    },
    {
      packs: ["minimal"],
      headingFont: g.epilogue,
      paragraphFont: g.poppins
    }
  ],
  vibrant: [
    {
      packs: ["vibrant"],
      headingFont: g.shrikhand,
      paragraphFont: g.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: g.concertone,
      paragraphFont: g.syne
    },
    {
      packs: ["vibrant"],
      headingFont: g.youngserif,
      paragraphFont: g.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: g.capriola,
      paragraphFont: g.syne
    },
    {
      packs: ["vibrant"],
      headingFont: g.lilitaone,
      paragraphFont: g.ibmplexmono
    },
    {
      packs: ["vibrant"],
      headingFont: g.trocchi,
      paragraphFont: g.syne
    },
    {
      packs: ["vibrant"],
      headingFont: g.averiaseriflibre,
      paragraphFont: g.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: g.agbalumo,
      paragraphFont: g.ptserif
    },
    {
      packs: ["vibrant"],
      headingFont: g.bungee,
      paragraphFont: g.spacegrotesk
    },
    {
      packs: ["vibrant"],
      headingFont: g.bebasneue,
      paragraphFont: g.familjengrotesk
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
      paragraphFont: g.poppins
    },
    {
      packs: ["vibrant"],
      headingFont: {
        ...g.syne,
        style: {
          ...g.syne.style,
          fontWeight: 800
        }
      },
      paragraphFont: g.spacemono,
      headerFont: g.silkscreen
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      headingFont: g.librebaskerville,
      paragraphFont: g.almarai
    },
    {
      packs: ["neutral"],
      headingFont: g.tenorsans,
      paragraphFont: g.pontanosans
    },
    {
      packs: ["neutral"],
      headingFont: g.marcellus,
      paragraphFont: g.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: g.alice,
      paragraphFont: g.almarai
    },
    {
      packs: ["neutral"],
      headingFont: g.neuton,
      paragraphFont: g.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: g.newsreader,
      paragraphFont: g.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: g.ovo,
      paragraphFont: g.almarai
    },
    {
      packs: ["neutral"],
      headingFont: g.epilogue,
      paragraphFont: g.pontanosans
    }
  ],
  modern: [
    {
      packs: ["modern"],
      headingFont: g.asap,
      paragraphFont: g.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: g.comfortaa,
      paragraphFont: g.worksans
    },
    {
      packs: ["modern"],
      headingFont: g.sansita,
      paragraphFont: g.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: g.rubik,
      paragraphFont: g.nunitosans
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      headingFont: g.climatecrisis,
      paragraphFont: g.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: g.ultra,
      paragraphFont: g.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: g.modak,
      paragraphFont: g.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: g.modak,
      paragraphFont: g.familjengrotesk
    },
    {
      packs: ["adventurous"],
      headingFont: g.goblinone,
      paragraphFont: g.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: g.delagothicone,
      paragraphFont: g.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: g.archivoblack,
      paragraphFont: g.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: g.coiny,
      paragraphFont: g.familjengrotesk
    }
  ]
}, ps = Object.values(fn).flatMap((e) => e), J = (e, t) => fn[e][t], gn = {
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
}, ms = Object.values(gn).flatMap((e) => e), K = (e, t) => gn[e][t], qt = [
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
    color: X("vibrant", 9),
    buttons: Y("vibrant", 8),
    form: K("vibrant", 6),
    fonts: J("vibrant", 11)
  },
  {
    pack: "vibrant",
    name: "vibrant_04",
    color: X("vibrant", 10),
    buttons: Y("vibrant", 8),
    form: K("vibrant", 6),
    fonts: J("vibrant", 12)
  },
  {
    pack: "vibrant",
    name: "vibrant_03",
    color: X("vibrant", 8),
    buttons: Y("vibrant", 8),
    form: K("vibrant", 6),
    fonts: J("vibrant", 10)
  },
  {
    pack: "vibrant",
    name: "vibrant_01",
    color: X("vibrant", 0),
    buttons: Y("vibrant", 0),
    form: K("vibrant", 0),
    fonts: J("vibrant", 0)
  },
  {
    pack: "vibrant",
    name: "vibrant_02",
    color: X("vibrant", 1),
    buttons: Y("vibrant", 1),
    form: K("vibrant", 4),
    fonts: J("vibrant", 2)
  },
  {
    pack: "neutral",
    name: "neutral_01",
    color: X("neutral", 0),
    buttons: Y("neutral", 0),
    form: K("neutral", 0),
    fonts: J("neutral", 0)
  },
  {
    pack: "neutral",
    name: "neutral_02",
    color: X("neutral", 1),
    buttons: Y("neutral", 1),
    form: K("neutral", 3),
    fonts: J("neutral", 2)
  },
  {
    pack: "modern",
    name: "modern_01",
    color: X("modern", 0),
    buttons: Y("modern", 0),
    form: K("modern", 0),
    fonts: J("modern", 0)
  },
  {
    pack: "modern",
    name: "modern_02",
    color: X("modern", 1),
    buttons: Y("modern", 1),
    form: K("modern", 3),
    fonts: J("modern", 2)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: X("minimal", 0),
    buttons: Y("minimal", 0),
    form: K("minimal", 0),
    fonts: J("minimal", 0)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: X("minimal", 2),
    buttons: Y("minimal", 0),
    form: K("minimal", 4),
    fonts: J("minimal", 2)
  },
  {
    pack: "adventurous",
    name: "adventurous_01",
    color: X("adventurous", 0),
    buttons: Y("adventurous", 0),
    form: K("adventurous", 0),
    fonts: J("adventurous", 0)
  },
  {
    pack: "adventurous",
    name: "adventurous_02",
    color: X("adventurous", 3),
    buttons: Y("adventurous", 1),
    form: K("adventurous", 3),
    fonts: J("adventurous", 4)
  }
], Yt = /* @__PURE__ */ new Set();
function hs(e) {
  if (!e || Yt.has(e)) return;
  Yt.add(e);
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = `https://fonts.googleapis.com/css2?family=${e}&display=swap`, document.head.appendChild(t);
}
function fs(e) {
  e.forEach((t) => {
    t.googleFontsQuery && hs(t.googleFontsQuery);
  });
}
function Os() {
  const [e, t] = y({ ...qt[0] }), { themePacks: n, fontPacks: r, colorPacks: i, buttonPacks: a, formPacks: l } = F(() => {
    const s = e.pack;
    return {
      themePacks: qt,
      fontPacks: ps.filter((d) => d.packs.includes(s)),
      colorPacks: us.filter((d) => d.packs.includes(s)),
      buttonPacks: ds.filter((d) => d.packs.includes(s)),
      formPacks: ms.filter((d) => d.packs.includes(s))
    };
  }, [e]), c = R((s) => {
    t({ ...s });
  }, []);
  return N(() => {
    const { color: s, fonts: d } = e, u = document.body;
    u.style.setProperty("--background-color", s.palette[s.background]), u.style.setProperty("--color-heading", s.palette[s.headings]), u.style.setProperty(
      "--color-paragraph",
      s.palette[s.body !== void 0 ? s.body : s.headings]
    ), u.style.setProperty("--font-family-heading", d.headingFont.style.fontFamily), u.style.setProperty("--font-family-body", d.paragraphFont.style.fontFamily), u.style.setProperty(
      "--font-family-header",
      d.headerFont ? d.headerFont.style.fontFamily : d.paragraphFont.style.fontFamily
    );
    const p = st(s.palette);
    Object.entries(p).forEach(([h, f]) => {
      u.style.setProperty(h, f);
    });
    const m = [d.headingFont, d.paragraphFont];
    d.headerFont && m.push(d.headerFont), fs(m);
  }, [e]), F(
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
  Pn as AddBlockToolbar,
  Ms as AddSectionDivider,
  Cn as AlignTopIcon,
  kn as AnimatedSearchIcon,
  _s as BlockAnnotationBar,
  Es as BlockHover,
  Dn as BlockPicker,
  xe as COLOR_KEYS,
  ys as ChevronDownIcon,
  _n as CodeIcon,
  Ln as DesktopIcon,
  Rn as DuplicateIcon,
  $n as EditHeaderButton,
  Jt as EditIcon,
  et as FE_COLUMNS,
  yt as FE_COL_GAP,
  tt as FE_MARGIN,
  we as FE_ROW_GAP,
  Cs as FluidEngineGrid,
  Nn as GlobalContentGlyphIcon,
  As as GridOverlay,
  Hs as HANDLE_POSITIONS,
  ks as HeaderSectionWrapper,
  Mn as MobileIcon,
  Fn as PinIcon,
  An as PlayIcon,
  gt as PlusIcon,
  Ls as PortaledAnnotationBar,
  En as RedoIcon,
  xs as SearchGlyphIcon,
  ws as SectionWrapper,
  Ds as SiteThemes,
  pn as SiteThemesContext,
  Rs as SiteToolbar,
  Ss as ThemeProvider,
  Kt as Tooltip,
  Sn as UndoIcon,
  ot as feBrickHeight,
  xt as feBrickWidth,
  Gn as feRowsHeight,
  Fs as feSnapHeight,
  qn as feSnapLeft,
  Zn as feSnapTop,
  Y as getButtonPack,
  X as getColorPack,
  J as getFontPack,
  K as getFormPack,
  Is as getRosettaTheme,
  g as googleFonts,
  Bs as hex,
  fs as loadFontsForTheme,
  hs as loadGoogleFont,
  st as makeColorVariables,
  Ts as rosetta,
  ir as rosettaDark,
  en as rosettaLight,
  ds as themeButtons,
  us as themeColors,
  ps as themeFonts,
  ms as themeForms,
  qt as themePacks,
  er as useBlockDrag,
  at as useDelayedActiveState,
  Ns as usePanelDrag,
  Os as useSiteThemes,
  _e as useSiteThemesContext,
  Ee as useTemporaryActiveState,
  Qt as useTooltip
};
//# sourceMappingURL=index.js.map
