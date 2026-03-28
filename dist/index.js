import { jsxs as g, jsx as o, Fragment as ke } from "react/jsx-runtime";
import { useState as v, useRef as w, useEffect as A, useCallback as C, useMemo as k, memo as D, createContext as Jt, Children as xn, useLayoutEffect as wn, useContext as kn } from "react";
import { createPortal as ot } from "react-dom";
function _n({
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
function Fn(e) {
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
function Rn(e) {
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
function Sn(e) {
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
          d: "M3.82838 4L7.82838 0H4.99995L0 4.99995L5.00005 10H7.82847L3.82847 6H12.9102C14.8432 6 16.4102 7.567 16.4102 9.5C16.4102 11.433 14.8432 13 12.9102 13H9.41016V15H12.9102C15.9477 15 18.4102 12.5376 18.4102 9.5C18.4102 6.46243 15.9477 4 12.9102 4H3.82838Z",
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
function An(e) {
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
function vs(e) {
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
function Qe(e) {
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
function ys(e) {
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
const Ie = 11, Hn = {
  fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "22px"
}, _t = {
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
}, Dn = "/assets/block-icons", Ft = [
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
  const [r, i] = v(""), a = w(null), l = w(null);
  A(() => {
    const s = setTimeout(() => {
      var d;
      return (d = a.current) == null ? void 0 : d.focus();
    }, 50);
    return () => clearTimeout(s);
  }, []), A(() => {
    function s(d) {
      l.current && !l.current.contains(d.target) && t();
    }
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [t]);
  const c = r ? Ft.map((s) => ({
    ...s,
    blocks: s.blocks.filter((d) => d.name.toLowerCase().includes(r.toLowerCase()))
  })).filter((s) => s.blocks.length > 0) : Ft;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: l,
      className: "block-picker-enter",
      style: {
        width: 320,
        background: "var(--rosetta-bg-base)",
        borderRadius: Ie,
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
          gap: Ie,
          padding: "0 12px",
          borderBottom: "1px solid var(--rosetta-border-default)",
          flexShrink: 0
        }, children: [
          /* @__PURE__ */ o("div", { style: { width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }, children: /* @__PURE__ */ o(_n, { expanded: !0, size: 16, color: "var(--rosetta-fg-muted)" }) }),
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
                ..._t,
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
          padding: `${Ie}px`
        }, children: [
          c.length === 0 && /* @__PURE__ */ g("p", { style: {
            ..._t,
            color: "var(--rosetta-fg-muted)",
            padding: `${Ie}px 0`,
            textAlign: "center"
          }, children: [
            'No blocks matching "',
            r,
            '"'
          ] }),
          c.map((s, d) => /* @__PURE__ */ g("div", { style: { marginTop: d > 0 ? 16 : 0 }, children: [
            /* @__PURE__ */ o("p", { style: {
              ...Hn,
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
        gap: Ie,
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
function $n({ onAddBlock: e }) {
  const [t, n] = v(!1), [r, i] = v(0), a = w(null), l = C((c) => {
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
            /* @__PURE__ */ o("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ o(Qe, {}) }),
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
function zn({ onClick: e }) {
  const [t, n] = v(!1);
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
        gap: Ie,
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
const Wn = "#0072f0", ut = 3, Ct = 11;
function xs({
  sectionId: e,
  sectionLabel: t,
  children: n,
  onBlockPicked: r,
  disabled: i = !1,
  style: a
}) {
  const [l, c] = v(!1), [s, d] = v(!1), [u, p] = v(!1), h = w(null), f = C(() => {
    i || (c(!0), p(!1));
  }, [i]), m = C(() => {
    s || (c(!1), p(!1));
  }, [s]), _ = C(() => {
    d(!0), p(!1);
  }, []), L = C(() => {
    if (d(!1), p(!0), h.current) {
      const F = h.current.getBoundingClientRect(), H = N.current;
      H && (H.x < F.left || H.x > F.right || H.y < F.top || H.y > F.bottom) && c(!1);
    }
  }, []), I = C((F) => {
    d(!1), c(!1), r(e, F);
  }, [e, r]), N = w(null), x = C((F) => {
    N.current = { x: F.clientX, y: F.clientY };
  }, []), R = (l || s) && !i, M = w(null);
  return A(() => {
    if (!R) return;
    const F = h.current, H = M.current;
    if (!F || !H) return;
    let W = F.parentElement;
    for (; W; ) {
      const { overflow: B, overflowY: j } = getComputedStyle(W);
      if (B === "auto" || B === "scroll" || j === "auto" || j === "scroll") break;
      W = W.parentElement;
    }
    const G = W || window, $ = () => {
      const B = F.getBoundingClientRect(), q = B.height * 0.1, U = B.bottom - 16 - 40;
      U < q ? H.style.opacity = `${Math.max(0, U / q)}` : H.style.opacity = "1";
    };
    return G.addEventListener("scroll", $, { passive: !0 }), $(), () => G.removeEventListener("scroll", $);
  }, [R]), /* @__PURE__ */ g(
    "div",
    {
      ref: h,
      onMouseEnter: f,
      onMouseLeave: m,
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
              border: `${ut}px solid ${R ? Wn : "transparent"}`,
              zIndex: 101,
              pointerEvents: "none",
              transition: "border-color 0.15s ease"
            }
          }
        ),
        R && /* @__PURE__ */ o(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: ut + Ct,
              bottom: 0,
              zIndex: 102,
              pointerEvents: "none",
              paddingTop: ut + Ct
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
                          onAddBlock: _
                        }
                      )
                    }
                  ),
                  s && /* @__PURE__ */ o(
                    On,
                    {
                      onSelect: I,
                      onClose: L
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
function ws({
  children: e,
  disabled: t = !1,
  style: n
}) {
  const [r, i] = v(!1), a = C(() => {
    t || i(!0);
  }, [t]), l = C(() => {
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
                const h = document.createElement("div");
                h.style.cssText = `position:fixed;width:6px;height:6px;pointer-events:none;z-index:99999;background:#0E0E0E;left:${d}px;top:${u}px;`;
                const f = Math.random() * Math.PI * 2, m = 60 + Math.random() * 100;
                h.animate([
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  { transform: `translate(${Math.cos(f) * m}px,${Math.sin(f) * m}px) scale(0)`, opacity: 0 }
                ], { duration: 500 + Math.random() * 300, easing: "cubic-bezier(0,0.5,0.5,1)", fill: "forwards" }), document.body.appendChild(h), setTimeout(() => h.remove(), 900);
              }
            } }) })
          }
        )
      ]
    }
  );
}
const Be = 8;
function Qt({
  text: e,
  anchorRef: t,
  visible: n
}) {
  const r = w(null), [i, a] = v(null);
  return A(() => {
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
      let h = c.bottom + 6;
      h + s.height > p - Be && (h = c.top - s.height - 6), u < Be && (u = Be), u + s.width > d - Be && (u = d - Be - s.width), a({ top: h, left: u });
    });
    return () => cancelAnimationFrame(l);
  }, [n, t]), n ? ot(
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
function en(e = 600) {
  const t = w(null), [n, r] = v(!1), [i, a] = v(!1), l = w(null), c = C(() => {
    r(!0), l.current = setTimeout(() => a(!0), e);
  }, [e]), s = C(() => {
    r(!1), a(!1), l.current && (clearTimeout(l.current), l.current = null);
  }, []);
  return A(() => () => {
    l.current && clearTimeout(l.current);
  }, []), { ref: t, hovered: n, showTooltip: i, onMouseEnter: c, onMouseLeave: s };
}
const Rt = {
  background: "var(--rosetta-bg-base)",
  borderRadius: 11,
  height: 44,
  display: "flex",
  alignItems: "center",
  padding: "0 4px",
  boxShadow: "var(--shadows-200)"
};
function ks({
  onOpenIDE: e,
  onOpenDesignPanel: t,
  onDelete: n,
  isExiting: r
}) {
  return /* @__PURE__ */ g("div", { className: r ? "annotation-exit" : "annotation-enter", style: { display: "flex", alignItems: "center", gap: 8 }, children: [
    /* @__PURE__ */ o("div", { style: Rt, children: /* @__PURE__ */ o(xe, { onClick: e, title: "Open code editor", children: /* @__PURE__ */ o(Fn, { style: { width: 22, height: 18 } }) }) }),
    /* @__PURE__ */ g("div", { style: { ...Rt, gap: 4 }, children: [
      /* @__PURE__ */ o(xe, { onClick: t, title: "Edit", children: /* @__PURE__ */ o(Kt, { style: { width: 18.5, height: 18.5 } }) }),
      /* @__PURE__ */ o(St, {}),
      /* @__PURE__ */ o(xe, { title: "Pin", children: /* @__PURE__ */ o(Cn, { style: { width: 17.7, height: 17.7 } }) }),
      /* @__PURE__ */ o(xe, { title: "Align top", children: /* @__PURE__ */ o(Rn, { style: { width: 18, height: 14 } }) }),
      /* @__PURE__ */ o(xe, { title: "Move forward", children: /* @__PURE__ */ o(Un, {}) }),
      /* @__PURE__ */ o(xe, { title: "Move backward", children: /* @__PURE__ */ o(jn, {}) }),
      /* @__PURE__ */ o(St, {}),
      /* @__PURE__ */ o(xe, { title: "Duplicate", children: /* @__PURE__ */ o(Sn, { style: { width: 18, height: 18 } }) }),
      /* @__PURE__ */ o(xe, { onClick: n, title: "Delete", danger: !0, children: /* @__PURE__ */ o(Vn, {}) })
    ] })
  ] });
}
function xe({
  children: e,
  onClick: t,
  title: n,
  danger: r
}) {
  const { ref: i, hovered: a, showTooltip: l, onMouseEnter: c, onMouseLeave: s } = en();
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
        n && /* @__PURE__ */ o(Qt, { text: n, anchorRef: i, visible: l })
      ]
    }
  );
}
function St() {
  return /* @__PURE__ */ o("div", { style: { width: 1, height: 20, background: "var(--rosetta-border-default)", flexShrink: 0 } });
}
function Un() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" })
  ] });
}
function jn() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", children: [
    /* @__PURE__ */ o("rect", { x: "7", y: "7", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5" }),
    /* @__PURE__ */ o("rect", { x: "2", y: "2", width: "13", height: "13", fill: "var(--rosetta-bg-base, white)", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 2" })
  ] });
}
function Vn() {
  return /* @__PURE__ */ g("svg", { width: "22", height: "22", viewBox: "0 0 18 18", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ o("path", { d: "M3 5h12" }),
    /* @__PURE__ */ o("path", { d: "M7 5V3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5" }),
    /* @__PURE__ */ o("path", { d: "M4.5 5l.5 9.5a1 1 0 0 0 1 .5h6a1 1 0 0 0 1-.5L14 5" }),
    /* @__PURE__ */ o("path", { d: "M7.5 8v4.5" }),
    /* @__PURE__ */ o("path", { d: "M10.5 8v4.5" })
  ] });
}
const tt = 12, xt = 33, Re = 16, nt = 33, Gn = 3;
function wt(e) {
  return (e - nt * 2 - xt * (tt - 1)) / tt;
}
function at(e) {
  return wt(e) / 2;
}
function qn(e, t) {
  const n = at(t);
  return e * n + (e - 1) * Re;
}
function _s(e, t) {
  const r = at(t) + Re, i = Math.ceil((e + Re) / r);
  return qn(i, t);
}
function Zn(e, t) {
  const r = at(t) + Re;
  return Math.round(e / r) * r;
}
function Yn(e, t) {
  const r = wt(t) + xt;
  return nt + Math.round((e - nt) / r) * r;
}
function Fs({ fadeIn: e = !1 }) {
  const t = w(null), [n, r] = v({ width: 0, height: 0 });
  A(() => {
    const d = t.current;
    if (!d) return;
    const u = new ResizeObserver(([p]) => {
      const { width: h, height: f } = p.contentRect;
      r({ width: h, height: f });
    });
    return u.observe(d), () => u.disconnect();
  }, []);
  const i = n.width > 0 ? wt(n.width) : 0, a = i / 2, l = a > 0 ? Math.round((n.height + Re) / (a + Re)) : 0, c = tt * l, s = k(() => c <= 0 ? null : Array.from({ length: c }, (d, u) => /* @__PURE__ */ o(
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
            gridTemplateColumns: `repeat(${tt}, 1fr)`,
            gridTemplateRows: `repeat(${l}, 1fr)`,
            columnGap: xt,
            rowGap: Re,
            padding: `0 ${nt}px`,
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
function Xn({ style: e }) {
  return /* @__PURE__ */ o("svg", { style: e, width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M8.64445 2.55279C8.39746 2.05881 7.79679 1.85859 7.30281 2.10558C6.80883 2.35257 6.60861 2.95324 6.8556 3.44722L9.68128 9.09859L5.06655 5.92596C4.61145 5.61308 3.98887 5.72837 3.67598 6.18348C3.3631 6.63858 3.47839 7.26116 3.9335 7.57405L9.40503 11.3357L3.05258 11.0014C2.50106 10.9724 2.03043 11.3959 2.00141 11.9474C1.97238 12.499 2.39594 12.9696 2.94747 12.9986L8.74187 13.3036L4.44532 16.168C3.9858 16.4743 3.86162 17.0952 4.16797 17.5547C4.47433 18.0142 5.0952 18.1384 5.55473 17.8321L9.19687 15.404L6.68629 18.9188C6.36528 19.3682 6.46937 19.9927 6.91879 20.3137C7.3682 20.6347 7.99275 20.5307 8.31376 20.0812L11.3471 15.8345L10.5136 20.8356C10.4228 21.3804 10.7909 21.8956 11.3356 21.9864C11.8804 22.0772 12.3956 21.7092 12.4864 21.1644L13.2883 16.3532L15.6588 20.0408C15.9575 20.5053 16.5762 20.6398 17.0408 20.3412C17.5054 20.0425 17.6399 19.4238 17.3412 18.9592L15.5553 16.1812L18.3217 18.7348C18.7276 19.1094 19.3602 19.0841 19.7348 18.6783C20.1094 18.2725 20.0841 17.6398 19.6783 17.2652L16.6427 14.4631L20.876 14.9923C21.424 15.0608 21.9238 14.6721 21.9923 14.124C22.0608 13.576 21.6721 13.0762 21.1241 13.0077L16.9342 12.484L21.2291 11.4734C21.7667 11.3469 22.0999 10.8086 21.9734 10.271C21.8469 9.73336 21.3086 9.40009 20.771 9.52659L15.1819 10.8417L19.2863 5.61783C19.6276 5.18356 19.5521 4.5549 19.1178 4.21369C18.6836 3.87247 18.0549 3.94791 17.7137 4.38218L13.8574 9.29015L14.738 3.65438C14.8233 3.10872 14.4501 2.59725 13.9044 2.51199C13.3587 2.42673 12.8473 2.79996 12.762 3.34563L11.876 9.01594L8.64445 2.55279Z" }) });
}
function Cs({
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
  const [h, f] = v(!1), m = w(null);
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
      /* @__PURE__ */ o("button", { onClick: e, style: Jn, children: "Save" }),
      /* @__PURE__ */ o(Kn, { onClick: t, label: "Exit" }),
      /* @__PURE__ */ g("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
        /* @__PURE__ */ o(Ze, { onClick: n, title: "Undo", children: /* @__PURE__ */ o(En, { style: { width: 18, height: 15 } }) }),
        /* @__PURE__ */ o(Ze, { onClick: void 0, title: "Redo", disabled: !0, children: /* @__PURE__ */ o(Mn, { style: { width: 18, height: 15, opacity: 0.28 } }) })
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
      transform: p ? "translateY(-56px)" : "translateY(0)",
      transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
    }, children: [
      /* @__PURE__ */ o(Qn, { title: "Adrienne", subtitle: "Page · Published" }),
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
        opacity: p ? 0.35 : 1,
        pointerEvents: p ? "none" : void 0
      }, children: ["desktop", "mobile"].map((_) => /* @__PURE__ */ o(
        "button",
        {
          onClick: () => a == null ? void 0 : a(_),
          title: _,
          disabled: !!p,
          style: {
            flex: 1,
            height: 32,
            background: i === _ ? "var(--rosetta-bg-base)" : "transparent",
            border: "none",
            borderRadius: 4,
            cursor: p ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease"
          },
          children: _ === "desktop" ? /* @__PURE__ */ o(Ln, { style: { width: 18, height: 17 } }) : /* @__PURE__ */ o(An, { style: { width: 12, height: 20 } })
        },
        _
      )) }),
      u && /* @__PURE__ */ g(ke, { children: [
        /* @__PURE__ */ g("div", { ref: m, style: { position: "relative" }, children: [
          /* @__PURE__ */ o(Ze, { onClick: () => f((_) => !_), title: "AI", active: h, children: /* @__PURE__ */ o(Xn, { style: { width: 20, height: 20 } }) }),
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
          er,
          {
            open: h,
            anchorRef: m,
            apiKey: d,
            onSave: (_) => {
              u == null || u(_), f(!1);
            },
            onClose: () => f(!1)
          }
        )
      ] }),
      /* @__PURE__ */ o(Ze, { onClick: c, title: "Site Styles", active: s, children: /* @__PURE__ */ o(In, { style: { width: 20, height: 20 } }) })
    ] })
  ] });
}
function Ze({
  children: e,
  onClick: t,
  title: n,
  disabled: r,
  active: i
}) {
  const { ref: a, hovered: l, showTooltip: c, onMouseEnter: s, onMouseLeave: d } = en();
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
        n && /* @__PURE__ */ o(Qt, { text: n, anchorRef: a, visible: c })
      ]
    }
  );
}
const Jn = {
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
  const [n, r] = v(!1);
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
function Qn({ title: e, subtitle: t }) {
  const [n, r] = v(!1);
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
function er({
  open: e,
  anchorRef: t,
  apiKey: n,
  onSave: r,
  onClose: i
}) {
  const [a, l] = v(n ?? ""), [c, s] = v(null), d = w(null), u = w(null);
  if (A(() => {
    e && l(n ?? "");
  }, [e, n]), A(() => {
    if (!e || !t.current) {
      s(null);
      return;
    }
    const f = t.current.getBoundingClientRect();
    s({ top: f.bottom + 6, right: window.innerWidth - f.right });
    const m = setTimeout(() => {
      var _;
      return (_ = u.current) == null ? void 0 : _.focus();
    }, 60);
    return () => clearTimeout(m);
  }, [e, t]), A(() => {
    if (!e) return;
    function f(_) {
      d.current && !d.current.contains(_.target) && t.current && !t.current.contains(_.target) && i();
    }
    function m(_) {
      _.key === "Escape" && i();
    }
    return document.addEventListener("mousedown", f), document.addEventListener("keydown", m), () => {
      document.removeEventListener("mousedown", f), document.removeEventListener("keydown", m);
    };
  }, [e, i, t]), !e || !c) return null;
  const p = n ? n.slice(0, 7) + "..." + n.slice(-4) : "", h = a.trim().startsWith("sk-");
  return ot(
    /* @__PURE__ */ g(
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
          /* @__PURE__ */ g("div", { style: { padding: "14px 14px 0" }, children: [
            /* @__PURE__ */ o("div", { style: { fontSize: 12, fontWeight: 600, letterSpacing: 0.4, textTransform: "uppercase", color: "var(--rosetta-fg-muted, #666)", marginBottom: 10 }, children: "Anthropic API Key" }),
            n && /* @__PURE__ */ g("div", { style: {
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
                onChange: (f) => l(f.target.value),
                onKeyDown: (f) => {
                  f.key === "Enter" && h && r(a.trim());
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
              onClick: () => h && r(a.trim()),
              disabled: !h,
              style: {
                height: 32,
                padding: "0 14px",
                background: h ? "#0E0E0E" : "rgba(14,14,14,0.08)",
                color: h ? "#fff" : "rgba(14,14,14,0.32)",
                border: "none",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 0.4,
                textTransform: "uppercase",
                cursor: h ? "pointer" : "default",
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
function Rs({ cssString: e, children: t }) {
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
function tr({
  initialLeft: e,
  initialTop: t,
  width: n,
  height: r,
  containerWidth: i,
  sectionHeight: a,
  enabled: l = !0,
  onDrop: c
}) {
  const [s, d] = v(!1), [u, p] = v(!1), [h, f] = v({ x: 0, y: 0 }), [m, _] = v({ left: e, top: t }), L = w({ x: 0, y: 0 }), I = w({ left: e, top: t }), N = w({ x: 0, y: 0 }), x = w({ left: e, top: t });
  A(() => {
    !s && !u && _({ left: e, top: t });
  }, [e, t, s, u]);
  const R = C((M) => {
    if (!l || M.button !== 0) return;
    M.preventDefault(), L.current = { x: M.clientX, y: M.clientY }, I.current = { left: e, top: t }, N.current = { x: 0, y: 0 }, x.current = { left: e, top: t };
    let F = !1;
    const H = 4, W = ($) => {
      const B = $.clientX - L.current.x, j = $.clientY - L.current.y;
      if (!F) {
        if (Math.abs(B) < H && Math.abs(j) < H) return;
        F = !0, d(!0), p(!1), f({ x: 0, y: 0 }), _({ left: e, top: t });
      }
      let q = j;
      if (a != null && i > 0) {
        const T = at(i), Z = 0, se = a - T, Me = I.current.top + j;
        Me < Z && (q = Z - I.current.top), Me > se && (q = se - I.current.top);
      }
      N.current = { x: B, y: q }, f({ x: B, y: q });
      const U = I.current.left + B, Y = I.current.top + q, te = Yn(U, i), S = Zn(Y, i);
      x.current = { left: te, top: S }, _({ left: te, top: S });
    }, G = () => {
      if (document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", G), !F) return;
      const $ = x.current;
      c == null || c($.left, $.top), d(!1), p(!0), f({ x: 0, y: 0 }), setTimeout(() => {
        p(!1);
      }, 300);
    };
    document.addEventListener("mousemove", W), document.addEventListener("mouseup", G);
  }, [l, e, t, n, r, i, a, c]);
  return {
    isDragging: s,
    naturalOffset: h,
    snappedPosition: m,
    isSettling: u,
    dragHandleProps: { onMouseDown: R }
  };
}
function Ss({
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
  const [u, p] = v(!1), h = w(null), f = w(!1), [m, _] = v(null);
  A(() => {
    const U = h.current;
    if (!U || !U.offsetParent) return;
    const Y = () => {
      U.offsetParent && _({
        left: U.offsetLeft,
        top: U.offsetTop,
        width: U.offsetWidth,
        height: U.offsetHeight
      });
    };
    Y();
    const te = new ResizeObserver(Y);
    return te.observe(U), () => te.disconnect();
  }, [r, i, c]);
  const L = i ?? 0, I = !t && L > 0 && m !== null, N = C((U, Y) => {
    l && s && s(l, U, Y);
  }, [l, s]), {
    isDragging: x,
    naturalOffset: R,
    snappedPosition: M,
    isSettling: F,
    dragHandleProps: H
  } = tr({
    initialLeft: (m == null ? void 0 : m.left) ?? 0,
    initialTop: (m == null ? void 0 : m.top) ?? 0,
    width: (m == null ? void 0 : m.width) ?? 0,
    height: (m == null ? void 0 : m.height) ?? 0,
    containerWidth: L,
    sectionHeight: a,
    enabled: I,
    onDrop: N
  });
  A(() => {
    x !== f.current && (f.current = x, d == null || d(x));
  }, [x, d]);
  const W = (u || x) && !t, G = W && !x, $ = c ? { ...r, left: c.left, top: c.top } : { ...r }, B = x ? {
    ...$,
    position: "absolute",
    left: M.left,
    top: M.top,
    width: m == null ? void 0 : m.width,
    height: (r == null ? void 0 : r.height) ?? (m == null ? void 0 : m.height),
    zIndex: 1e3,
    cursor: "grabbing",
    right: void 0,
    bottom: void 0
  } : { position: "relative", cursor: I ? "grab" : "default", zIndex: 2, ...$ }, j = x ? `translate(${R.x - (M.left - ((m == null ? void 0 : m.left) ?? 0))}px, ${R.y - (M.top - ((m == null ? void 0 : m.top) ?? 0))}px)` : void 0;
  return /* @__PURE__ */ g(
    "div",
    {
      ref: h,
      onMouseEnter: () => {
        t || p(!0);
      },
      onMouseLeave: () => {
        x || p(!1);
      },
      ...I ? H : {},
      style: B,
      children: [
        /* @__PURE__ */ o("div", { style: {
          transform: j,
          transition: F ? "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)" : x ? "none" : void 0,
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
        W && /* @__PURE__ */ g(ke, { children: [
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
          G && /* @__PURE__ */ o("div", { style: {
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
function Es({
  blockRef: e,
  children: t
}) {
  const [n, r] = v(null);
  return A(() => {
    const i = e.current;
    if (!i) return;
    const a = () => {
      const l = i.getBoundingClientRect();
      r({ top: l.top - 12, left: l.left });
    };
    return a(), window.addEventListener("scroll", a, !0), window.addEventListener("resize", a), () => {
      window.removeEventListener("scroll", a, !0), window.removeEventListener("resize", a);
    };
  }, [e]), n ? ot(
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
function Et(e) {
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
function pt(e) {
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
function nr(e, t, n, r) {
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
const rr = nr(0.25, 0.1, 0.25, 1), Mt = "0px 0px 1px 0px rgba(0,0,0,0.08), 0px 4px 16px 0px rgba(0,0,0,0.12)";
function Ms({ onClick: e, onPromptSubmit: t, aiStatesPath: n = "/assets/ai-states" }) {
  const [r, i] = v(!1), [a, l] = v(!1), [c, s] = v(!1), [d, u] = v(!1), [p, h] = v(!1), f = w(null), [m, _] = v(!1), [L, I] = v(!1), [N, x] = v(!1), [R, M] = v(""), [F, H] = v(54), W = w(null), G = w(null), $ = w(null), B = p || m;
  A(() => {
    if (m) {
      const S = setTimeout(() => {
        var T;
        return (T = W.current) == null ? void 0 : T.focus();
      }, 80);
      return () => clearTimeout(S);
    }
  }, [m]);
  const j = w(0);
  A(() => {
    if (!$.current) return;
    let T = $.current.parentElement;
    for (; T; ) {
      const { overflow: X, overflowY: J } = getComputedStyle(T);
      if (X === "auto" || X === "scroll" || J === "auto" || J === "scroll") break;
      T = T.parentElement;
    }
    if (!T) return;
    const se = (m ? F + 175 : 0) / 2, Me = se - j.current;
    j.current = se;
    const O = 400, ue = T.scrollTop, he = performance.now();
    function fe(X) {
      const J = Math.min((X - he) / O, 1);
      T.scrollTop = ue + Me * rr(J), J < 1 && requestAnimationFrame(fe);
    }
    requestAnimationFrame(fe);
  }, [m, F]);
  const q = C(() => {
    I(!0), setTimeout(() => {
      I(!1), x(!0), _(!1), h(!1), M(""), H(54), requestAnimationFrame(() => x(!1));
    }, 200);
  }, []), U = C((S) => {
    S.stopPropagation(), I(!1), _(!0);
  }, []);
  A(() => {
    if (!m) return;
    function S(Z) {
      G.current && !G.current.contains(Z.target) && q();
    }
    function T(Z) {
      Z.key === "Escape" && q();
    }
    return document.addEventListener("mousedown", S), document.addEventListener("keydown", T), () => {
      document.removeEventListener("mousedown", S), document.removeEventListener("keydown", T);
    };
  }, [m, q]), A(() => {
    if (!B) {
      const T = f.current;
      T && (T.style.transform = "");
      return;
    }
    const S = (T) => {
      const Z = f.current;
      if (!Z) return;
      const se = (T.clientX / window.innerWidth - 0.5) * 2;
      Z.style.transform = `translateX(${se * (t ? 6 : 3)}px)`;
    };
    return document.addEventListener("mousemove", S), () => document.removeEventListener("mousemove", S);
  }, [B]);
  const Y = C((S) => {
    S.stopPropagation(), t ? t(R) : e == null || e(S), _(!1), M(""), H(54);
  }, [e, t, R]), te = C((S) => {
    S.key === "Enter" && !S.shiftKey && R.trim() && (S.preventDefault(), t && t(R), _(!1), M(""), H(54));
  }, [t, R]);
  return /* @__PURE__ */ g(ke, { children: [
    /* @__PURE__ */ g("div", { style: {
      position: "relative",
      height: 0,
      zIndex: 9,
      overflow: "visible",
      pointerEvents: "none"
    }, children: [
      /* @__PURE__ */ o("div", { style: {
        position: "absolute",
        top: -1,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(to right, #0072f0 0%, #0072f0 40%, #182224 50%, #0072f0 60%, #0072f0 100%)",
        opacity: B && !m ? 1 : 0,
        transition: "opacity 0.15s ease"
      } }),
      /* @__PURE__ */ o("div", { style: {
        position: "absolute",
        top: -1,
        left: 0,
        right: 0,
        height: 1,
        background: "rgba(255,255,255,0.18)",
        opacity: m ? 1 : 0,
        transition: "opacity 0.4s ease"
      } })
    ] }),
    /* @__PURE__ */ g(
      "div",
      {
        onMouseEnter: () => h(!0),
        onMouseLeave: () => {
          h(!1);
        },
        ref: $,
        style: {
          position: "relative",
          height: m ? F + 175 : 0,
          zIndex: 10,
          background: m ? "#E7E7E7" : "transparent",
          transition: "height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.3s ease"
        },
        children: [
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            bottom: -1,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(255,255,255,0.11)",
            pointerEvents: "none",
            opacity: m ? 1 : 0,
            transition: "opacity 0.4s ease"
          } }),
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.06) 30%, transparent 100%)",
            pointerEvents: "none",
            opacity: m ? 1 : 0,
            transition: "opacity 0.4s ease"
          } }),
          /* @__PURE__ */ o("div", { style: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            background: "linear-gradient(to top, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 30%, transparent 100%)",
            pointerEvents: "none",
            opacity: m ? 1 : 0,
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
          }, children: /* @__PURE__ */ g(
            "div",
            {
              ref: G,
              style: {
                opacity: B && !N ? 1 : 0,
                pointerEvents: B && !N ? "auto" : "none",
                transition: N ? "none" : "opacity 0.15s ease"
              },
              children: [
                !m && /* @__PURE__ */ g(ke, { children: [
                  /* @__PURE__ */ o("style", { children: `
              @keyframes aiIconEntrance {
                from { transform: scale(0.92); opacity: 0; }
                to   { transform: scale(1); opacity: 1; }
              }
            ` }),
                  /* @__PURE__ */ g(
                    "div",
                    {
                      ref: f,
                      className: B ? "section-divider-enter" : void 0,
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
                            onClick: (S) => {
                              S.stopPropagation(), e == null || e(S);
                            },
                            onMouseEnter: () => l(!0),
                            onMouseLeave: () => l(!1),
                            style: {
                              position: "relative",
                              height: 40,
                              borderRadius: 11,
                              background: "#FAFAFA",
                              border: "1px solid #E7E7E7",
                              boxShadow: Mt,
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
                              /* @__PURE__ */ o("div", { style: { position: "relative", width: 14, height: 14, marginRight: 10, color: "#0E0E0E" }, children: /* @__PURE__ */ o(Qe, {}) }),
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
                        t && B && /* @__PURE__ */ o("div", { style: {
                          animation: "aiIconEntrance 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
                          flexShrink: 0
                        }, children: /* @__PURE__ */ g(
                          "div",
                          {
                            onClick: U,
                            onMouseEnter: () => i(!0),
                            onMouseLeave: () => i(!1),
                            style: {
                              width: 42,
                              height: 42,
                              borderRadius: 30,
                              background: "#0E0E0E",
                              border: "1px solid #000",
                              boxShadow: Mt,
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
                              }, children: /* @__PURE__ */ o(pt, {}) }),
                              /* @__PURE__ */ o("div", { style: {
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
                        ) })
                      ]
                    }
                  )
                ] }),
                m && /* @__PURE__ */ g("div", { style: {
                  width: 560,
                  minHeight: 54,
                  borderRadius: F > 54 ? 24 : 33,
                  background: "#FAFAFA",
                  border: "1px solid rgba(0,0,0,0.11)",
                  boxShadow: "0px 227px 64px 0px rgba(0,0,0,0), 0px 145px 58px 0px rgba(0,0,0,0.01), 0px 82px 49px 0px rgba(0,0,0,0.02), 0px 36px 36px 0px rgba(0,0,0,0.04), 0px 9px 20px 0px rgba(0,0,0,0.05)",
                  animation: L ? "promptCollapse 200ms cubic-bezier(0.55, 0, 1, 0.45) forwards" : "promptUnfurl 500ms cubic-bezier(0.22, 1.15, 0.36, 1) forwards",
                  transition: "border-radius 0.25s ease"
                }, children: [
                  /* @__PURE__ */ o("style", { children: `
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
                  /* @__PURE__ */ g("div", { style: {
                    display: "flex",
                    flexDirection: F > 54 ? "column" : "row",
                    alignItems: F > 54 ? "stretch" : "center",
                    padding: F > 54 ? "16px 16px 8px" : "6px",
                    gap: F > 54 ? 0 : 6
                  }, children: [
                    F <= 54 && /* @__PURE__ */ o(
                      "button",
                      {
                        onClick: (S) => {
                          S.stopPropagation(), e == null || e(S);
                        },
                        onMouseEnter: () => u(!0),
                        onMouseLeave: () => u(!1),
                        style: {
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          border: "none",
                          background: d ? "rgba(0,0,0,0.06)" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flexShrink: 0,
                          padding: 0,
                          color: "#666",
                          transition: "background 0.15s ease"
                        },
                        children: /* @__PURE__ */ o("div", { style: { width: 12, height: 12 }, children: /* @__PURE__ */ o(Qe, {}) })
                      }
                    ),
                    /* @__PURE__ */ o(
                      "textarea",
                      {
                        ref: W,
                        value: R,
                        onChange: (S) => {
                          M(S.target.value);
                          const T = S.target;
                          T.style.height = "auto";
                          const Z = T.scrollHeight, se = Z > 22;
                          T.style.height = se ? Z + "px" : "", H(se ? Z + 68 : 54);
                        },
                        onKeyDown: te,
                        placeholder: "Make it real",
                        rows: 1,
                        style: {
                          flex: F > 54 ? void 0 : 1,
                          width: F > 54 ? "100%" : void 0,
                          border: "none",
                          background: "transparent",
                          outline: "none",
                          resize: "none",
                          fontFamily: 'Clarkson, "Helvetica Neue", Helvetica, Arial, sans-serif',
                          fontWeight: 400,
                          fontSize: 15,
                          lineHeight: "20px",
                          color: "#0E0E0E",
                          overflow: "visible",
                          padding: F > 54 ? "0 0 8px" : 0,
                          margin: 0,
                          boxSizing: "border-box"
                        }
                      }
                    ),
                    F > 54 ? /* @__PURE__ */ g("div", { style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          onClick: (S) => {
                            S.stopPropagation(), e == null || e(S);
                          },
                          onMouseEnter: () => u(!0),
                          onMouseLeave: () => u(!1),
                          style: {
                            width: 42,
                            height: 42,
                            borderRadius: "50%",
                            border: "none",
                            background: d ? "rgba(0,0,0,0.06)" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            flexShrink: 0,
                            padding: 0,
                            color: "#666",
                            transition: "background 0.15s ease"
                          },
                          children: /* @__PURE__ */ o("div", { style: { width: 12, height: 12 }, children: /* @__PURE__ */ o(Qe, {}) })
                        }
                      ),
                      /* @__PURE__ */ g(
                        "button",
                        {
                          onClick: Y,
                          onMouseEnter: () => s(!0),
                          onMouseLeave: () => s(!1),
                          style: {
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
                            flexShrink: 0,
                            position: "relative",
                            overflow: "hidden",
                            transform: c ? "scale(1.048)" : "scale(1)",
                            transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
                          },
                          children: [
                            /* @__PURE__ */ o("div", { style: {
                              position: "absolute",
                              width: 48,
                              height: 48,
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              pointerEvents: "none"
                            }, children: /* @__PURE__ */ o(pt, {}) }),
                            /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, mixBlendMode: "difference", color: "#fff", width: 10, height: 13 }, children: /* @__PURE__ */ o(Et, {}) })
                          ]
                        }
                      )
                    ] }) : (
                      /* Submit button inline — single line mode */
                      /* @__PURE__ */ g(
                        "button",
                        {
                          onClick: Y,
                          onMouseEnter: () => s(!0),
                          onMouseLeave: () => s(!1),
                          style: {
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
                            flexShrink: 0,
                            position: "relative",
                            overflow: "hidden",
                            transform: c ? "scale(1.048)" : "scale(1)",
                            transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)"
                          },
                          children: [
                            /* @__PURE__ */ o("div", { style: {
                              position: "absolute",
                              width: 48,
                              height: 48,
                              left: "50%",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              pointerEvents: "none"
                            }, children: /* @__PURE__ */ o(pt, {}) }),
                            /* @__PURE__ */ o("div", { style: { position: "relative", zIndex: 1, mixBlendMode: "difference", color: "#fff", width: 10, height: 13 }, children: /* @__PURE__ */ o(Et, {}) })
                          ]
                        }
                      )
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
function Ls() {
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
const Lt = 2, mt = 0.15, be = 575, Ye = 11, or = 0.07;
function As({
  panelRef: e,
  containerSize: t,
  panelState: n,
  basePosition: r,
  onSnap: i,
  onUnsnap: a,
  enabled: l = !0
}) {
  const [c, s] = v(!1), [d, u] = v(!1), [p, h] = v({ x: 0, y: 0 }), [f, m] = v(null), [_, L] = v(!1), [I, N] = v(0), x = w(null), R = w({ x: 0, y: 0 }), M = w(!1), F = w(!1), H = w(!1), W = w(i);
  W.current = i;
  const G = w(a);
  G.current = a;
  const $ = w(n);
  $.current = n;
  const B = w(t);
  B.current = t;
  const j = w(r);
  j.current = r;
  const q = w(() => {
  }), U = w(() => {
  });
  q.current = (O) => {
    var kt;
    if (!x.current) return;
    const ue = O.clientX - x.current.x, he = O.clientY - x.current.y;
    if (!M.current) {
      if (Math.abs(ue) < Lt && Math.abs(he) < Lt) return;
      if (M.current = !0, s(!0), m(null), H.current) {
        const vn = $.current, yn = B.current.w;
        let Ge, qe;
        vn === "snapped-left" ? (Ge = Ye, qe = Ye) : (Ge = yn - be - Ye, qe = Ye), R.current = { x: Ge, y: qe }, j.current.current = { x: Ge, y: qe }, u(!0), G.current(), setTimeout(() => u(!1), 450);
      }
    }
    const fe = R.current.x + ue, X = R.current.y + he, J = B.current.w, Le = B.current.h, ge = Math.max(0, Math.min(J - be, fe)), je = Math.max(0, Math.min(Le - 100, X));
    h({ x: ge, y: je });
    const He = (kt = e.current) == null ? void 0 : kt.parentElement, ct = (He == null ? void 0 : He.getBoundingClientRect().left) ?? 0, Te = O.clientX - ct;
    Te < J * mt ? m("left") : Te > J * (1 - mt) ? m("right") : m(null);
    const dt = ge + be / 2, Ve = Math.max(-1, Math.min(1, (Te - dt) / (be / 2)));
    N(Ve);
  }, U.current = (O) => {
    var ue, he, fe;
    if (F.current = !1, document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", te), M.current) {
      const X = (ue = e.current) == null ? void 0 : ue.parentElement, J = (X == null ? void 0 : X.getBoundingClientRect().left) ?? 0, Le = O.clientX - J, ge = B.current.w, je = ge * mt;
      if (Le < je)
        W.current("left");
      else if (Le > ge - je)
        W.current("right");
      else {
        const He = O.clientX - (((he = x.current) == null ? void 0 : he.x) ?? O.clientX), ct = O.clientY - (((fe = x.current) == null ? void 0 : fe.y) ?? O.clientY), Te = R.current.x + He, dt = R.current.y + ct, Ve = {
          x: Math.max(0, Math.min(ge - be, Te)),
          y: Math.max(0, Math.min(B.current.h - 100, dt))
        };
        j.current.current = Ve, h(Ve);
      }
    }
    s(!1), m(null), x.current = null, M.current = !1, H.current = !1;
  };
  const Y = w((O) => q.current(O)).current, te = w((O) => U.current(O)).current, S = C((O) => {
    !l || !e.current || (O.preventDefault(), O.stopPropagation(), F.current = !0, x.current = { x: O.clientX, y: O.clientY }, R.current = { ...j.current.current }, M.current = !1, H.current = $.current !== "floating", document.addEventListener("mousemove", Y), document.addEventListener("mouseup", te));
  }, [l, e, Y, te]), T = w(null), Z = C(() => {
    T.current && (clearTimeout(T.current), T.current = null), l && L(!0);
  }, [l]), se = C(() => {
    F.current || (T.current = setTimeout(() => {
      L(!1), m(null), N(0), T.current = null;
    }, 50));
  }, []), Me = C((O) => {
    if (!l || c) return;
    const ue = e.current;
    if (!ue) return;
    const he = O.currentTarget.getBoundingClientRect();
    if (O.clientY > he.bottom) return;
    const fe = ue.getBoundingClientRect(), X = O.clientX - fe.left, J = be * or, Le = Math.max(-1, Math.min(1, (X - be / 2) / (be / 2)));
    N(Le);
    const ge = $.current;
    X < J && ge !== "snapped-left" ? m("left") : X > be - J && ge !== "snapped-right" ? m("right") : m(null);
  }, [l, c, e]);
  return A(() => {
    c || h(r.current);
  }, [r.current.x, r.current.y, c]), A(() => () => {
    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", te);
  }, [Y, te]), A(() => {
    l || (s(!1), m(null), L(!1), N(0));
  }, [l]), {
    position: p,
    isDragging: c,
    isUnsnapping: d,
    snapHint: f,
    isExpanded: _,
    snapBarPosition: I,
    dragRegionProps: { onMouseDown: S },
    hoverZoneProps: {
      onMouseEnter: Z,
      onMouseLeave: se,
      onMouseMove: Me
    }
  };
}
const tn = {
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
}, ar = {
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
  return typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? ar : tn;
}
const Ns = tn;
function Hs(e) {
  return e.replace("#", "");
}
const Ts = [
  { key: "tl", style: { top: -4, left: -4 } },
  { key: "tc", style: { top: -5, left: "calc(50% - 5px)" } },
  { key: "tr", style: { top: -4, right: -4 } },
  { key: "ml", style: { top: "calc(50% - 5px)", left: -5 } },
  { key: "mr", style: { top: "calc(50% - 5px)", right: -5 } },
  { key: "bl", style: { bottom: -4, left: -4 } },
  { key: "bc", style: { bottom: -5, left: "calc(50% - 5px)" } },
  { key: "br", style: { bottom: -4, right: -4 } }
];
function it(e, t = 0, n = 0) {
  const [r, i] = v(e);
  return A(() => {
    const a = e ? t : n;
    if (a <= 0) {
      i(e);
      return;
    }
    const l = setTimeout(() => i(e), a * 1e3);
    return () => clearTimeout(l);
  }, [e, t, n]), r;
}
function ir(e, t) {
  const [n, r] = v(["site-styles"]), [i, a] = v(0);
  A(() => {
    const c = e.current;
    if (!c) return;
    const s = (d) => {
      const u = d.target;
      if (u.tagName === "A" && u.getAttribute("href")) {
        const p = u.getAttribute("href");
        if (p.startsWith("/")) {
          const h = p.replace("/config/", "").split("/");
          r((f) => {
            const m = [...f];
            return h.forEach((_, L) => {
              m[L] = _;
            }), m;
          }), a(h.length - 1), d.preventDefault();
        }
      }
    };
    return c.addEventListener("click", s), () => c.removeEventListener("click", s);
  }, [e]);
  const l = C(() => {
    a((c) => Math.max(0, c - 1));
  }, []);
  return A(() => {
    t && (r(["site-styles"]), a(0));
  }, [t]), k(() => ({ route: n, depth: i, onBack: l }), [n, i, l]);
}
const sr = "_container_191aw_1", lr = "_active_191aw_25", cr = "_current_191aw_29", dr = "_header_191aw_33", Xe = {
  container: sr,
  active: lr,
  current: cr,
  header: dr
}, ur = (...e) => e.filter(Boolean).join(" ");
function pr({ children: e, title: t, description: n, depth: r = 0, isActive: i = !1 }) {
  const a = k(
    () => ur(Xe.container, i && Xe.active, i && Xe.current),
    [i]
  );
  return /* @__PURE__ */ o("div", { className: a, style: { "--depth": r }, children: i && /* @__PURE__ */ g(ke, { children: [
    (t || n) && /* @__PURE__ */ g("div", { className: Xe.header, children: [
      t && /* @__PURE__ */ o("h1", { children: t }),
      n && /* @__PURE__ */ o("h2", { children: n })
    ] }),
    e
  ] }) });
}
const mr = D(pr), hr = "_container_thqg8_1", fr = "_wrap_thqg8_7", gr = "_content_thqg8_7", br = "_fadeup_thqg8_13", vr = "_fadeoutdown_thqg8_19", yr = "_label_thqg8_46", xr = "_buttonBox_thqg8_66", wr = "_active_thqg8_109", kr = "_disclosure_thqg8_119", _r = "_disclosureWrapper_thqg8_133", ce = {
  container: hr,
  wrap: fr,
  content: gr,
  fadeup: br,
  fadeoutdown: vr,
  label: yr,
  buttonBox: xr,
  active: wr,
  disclosure: kr,
  disclosureWrapper: _r
}, vt = (...e) => e.filter(Boolean).join(" ");
function At({
  active: e = !1,
  children: t,
  className: n,
  onClick: r,
  tag: i = "button",
  ...a
}) {
  const [l, c] = v(!1), s = k(
    () => vt(n, ce.buttonBox, l && "hover", e && ce.active),
    [n, l, e]
  ), d = C(() => c(!0), []), u = C(() => c(!1), []);
  return /* @__PURE__ */ o(
    i,
    {
      className: s,
      onMouseEnter: d,
      onMouseLeave: u,
      onClick: (h) => {
        c(!1), r == null || r(h);
      },
      tabIndex: 0,
      ...a,
      children: t
    }
  );
}
function Fr() {
  return /* @__PURE__ */ o("svg", { viewBox: "0 0 8 14", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o("path", { d: "M1 1l6 6-6 6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function Cr({
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
  const d = k(
    () => vt(
      ce.container,
      i && ce.wrap,
      c && s && ce.fadeup,
      c && !s && ce.fadeoutdown
    ),
    [i, s, c]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: d,
      style: { "--animation-delay": `${l}s` },
      children: [
        /* @__PURE__ */ g(At, { active: e, onClick: t, children: [
          /* @__PURE__ */ o("div", { className: ce.label, children: a }),
          /* @__PURE__ */ o("div", { className: ce.content, children: n })
        ] }),
        r && /* @__PURE__ */ o("div", { className: ce.disclosureWrapper, children: /* @__PURE__ */ o(
          At,
          {
            tag: "a",
            className: vt(ce.buttonBox, ce.disclosure),
            href: r,
            children: /* @__PURE__ */ o(Fr, {})
          }
        ) })
      ]
    }
  );
}
const De = D(Cr), Rr = "_container_1bxjx_1", Sr = "_label_1bxjx_20", Er = "_suffix_1bxjx_25", Mr = "_chevron_1bxjx_30", Je = {
  container: Rr,
  label: Sr,
  suffix: Er,
  chevron: Mr
};
function Lr() {
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
function Ar({ label: e, suffix: t, href: n, ...r }) {
  return /* @__PURE__ */ g("a", { className: Je.container, href: n, ...r, children: [
    /* @__PURE__ */ o("div", { className: Je.label, children: e }),
    t && /* @__PURE__ */ o("div", { className: Je.suffix, children: t }),
    /* @__PURE__ */ o("div", { className: Je.chevron, children: /* @__PURE__ */ o(Lr, {}) })
  ] });
}
const It = D(Ar), Ir = "_container_19xa4_3", Nr = "_item_19xa4_17", Hr = "_directionInUp_19xa4_31", Tr = "_directionInDown_19xa4_35", Br = "_directionInLeft_19xa4_39", Dr = "_directionInRight_19xa4_43", Or = "_directionOutUp_19xa4_49", Pr = "_directionOutDown_19xa4_53", $r = "_directionOutLeft_19xa4_57", zr = "_directionOutRight_19xa4_61", Wr = "_visible_19xa4_67", Ur = "_animateIn_19xa4_76", jr = "_hidden_19xa4_85", Vr = "_useOpacity_19xa4_99", ee = {
  container: Ir,
  item: Nr,
  directionInUp: Hr,
  directionInDown: Tr,
  directionInLeft: Br,
  directionInRight: Dr,
  directionOutUp: Or,
  directionOutDown: Pr,
  directionOutLeft: $r,
  directionOutRight: zr,
  visible: Wr,
  animateIn: Ur,
  hidden: jr,
  useOpacity: Vr
};
function nn(...e) {
  return e.filter(Boolean).join(" ");
}
const Gr = {
  up: ee.directionInUp,
  down: ee.directionInDown,
  left: ee.directionInLeft,
  right: ee.directionInRight
}, qr = {
  up: ee.directionOutUp,
  down: ee.directionOutDown,
  left: ee.directionOutLeft,
  right: ee.directionOutRight
}, Zr = Jt({
  isHidden: !1
}), Yr = D(function(t) {
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
    isShown: h,
    onRemoved: f
  } = t, [m, _] = v(!1), [L, I] = v(!1), N = w(null), x = w(), R = w(), M = w(!1), F = w(!1), H = C(() => {
    if (clearTimeout(x.current), clearTimeout(R.current), !s) {
      _(!0);
      return;
    }
    R.current = setTimeout(() => {
      I(!1), _(!0);
    }, 30 + (i + a) * 1e3);
  }, [s, i, a]), W = C(() => {
    clearTimeout(x.current), clearTimeout(R.current), I(!0), x.current = setTimeout(() => {
      f();
    }, (i + l) * 1e3);
  }, [f, i, l]);
  A(() => {
    if (h) {
      if (M.current)
        return;
      F.current = !1, M.current = !0, H();
      return;
    }
    F.current || (M.current = !1, F.current = !0, W());
  }, [h, H, W]);
  const G = k(
    () => nn(
      r,
      ee.item,
      m && ee.visible,
      L && ee.hidden,
      p && ee.useOpacity,
      s && ee.animateIn,
      Gr[d],
      qr[u]
    ),
    [r, m, L, d, u, s, p]
  ), $ = k(
    () => ({
      "--swap-duration": `${l}s`,
      "--swap-distance": `${c}rem`
    }),
    [l, c]
  ), B = k(
    () => ({
      isHidden: !m || L
    }),
    [m, L]
  );
  return /* @__PURE__ */ o(Zr.Provider, { value: B, children: /* @__PURE__ */ o("div", { ref: N, style: $, className: G, children: n }) });
});
function Xr(e) {
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
    useOpacity: h = !0,
    ...f
  } = e, m = w(!0), [_, L] = v([]), I = C((N) => {
    L((x) => x.filter((R) => R.child !== N));
  }, []);
  return A(() => {
    m.current = !0;
  }, []), A(() => {
    if (!r) {
      L(
        (x) => x.map((R) => ({
          ...R,
          isShown: !1,
          animateIn: !1
        }))
      );
      return;
    }
    const N = n ? !0 : !m.current;
    L((x) => {
      const R = xn.map(r, (F, H) => ({
        child: F,
        key: F.key || H.toString(),
        animateIn: N,
        isShown: !0,
        delayShow: s,
        directionIn: u,
        directionOut: p
      }));
      return [...x.filter((F) => R.every((H) => H.key !== F.key)).map((F) => ({
        ...F,
        isShown: !1,
        delayShow: s,
        animateIn: !1
      })), ...R];
    }), m.current = !1;
  }, [n, r, u, p, s]), /* @__PURE__ */ o(t, { className: nn(i, ee.container), ...f, children: _.map(({ animateIn: N, child: x, isShown: R, delayShow: M }) => /* @__PURE__ */ o(
    Yr,
    {
      className: a,
      child: x,
      animateIn: N,
      isShown: R,
      directionIn: u,
      directionOut: p,
      duration: c,
      distance: d,
      onRemoved: () => I(x),
      delayShow: M,
      delayHide: l,
      useOpacity: h
    },
    x.key || "defaultKey"
  )) });
}
const me = D(Xr), Ce = [
  "white-hsl",
  "lightaccent-hsl",
  "accent-hsl",
  "darkaccent-hsl",
  "black-hsl"
];
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
}
var Jr = /^\s+/, Kr = /\s+$/;
function y(e, t) {
  if (e = e || "", t = t || {}, e instanceof y)
    return e;
  if (!(this instanceof y))
    return new y(e, t);
  var n = Qr(e);
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
    return this._a = rn(t), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var t = Ht(this._r, this._g, this._b);
    return {
      h: t.h * 360,
      s: t.s,
      v: t.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var t = Ht(this._r, this._g, this._b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), i = Math.round(t.v * 100);
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
    return ro(this._r, this._g, this._b, this._a, t);
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
      r: Math.round(P(this._r, 255) * 100) + "%",
      g: Math.round(P(this._g, 255) * 100) + "%",
      b: Math.round(P(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(P(this._r, 255) * 100) + "%, " + Math.round(P(this._g, 255) * 100) + "%, " + Math.round(P(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(P(this._r, 255) * 100) + "%, " + Math.round(P(this._g, 255) * 100) + "%, " + Math.round(P(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : go[Tt(this._r, this._g, this._b, !0)] || !1;
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
    return this._applyModification(so, arguments);
  },
  brighten: function() {
    return this._applyModification(lo, arguments);
  },
  darken: function() {
    return this._applyModification(co, arguments);
  },
  desaturate: function() {
    return this._applyModification(oo, arguments);
  },
  saturate: function() {
    return this._applyModification(ao, arguments);
  },
  greyscale: function() {
    return this._applyModification(io, arguments);
  },
  spin: function() {
    return this._applyModification(uo, arguments);
  },
  _applyCombination: function(t, n) {
    return t.apply(null, [this].concat([].slice.call(n)));
  },
  analogous: function() {
    return this._applyCombination(ho, arguments);
  },
  complement: function() {
    return this._applyCombination(po, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(fo, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(mo, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(Dt, [3]);
  },
  tetrad: function() {
    return this._applyCombination(Dt, [4]);
  }
};
y.fromRatio = function(e, t) {
  if (rt(e) == "object") {
    var n = {};
    for (var r in e)
      e.hasOwnProperty(r) && (r === "a" ? n[r] = e[r] : n[r] = ze(e[r]));
    e = n;
  }
  return y(e, t);
};
function Qr(e) {
  var t = {
    r: 0,
    g: 0,
    b: 0
  }, n = 1, r = null, i = null, a = null, l = !1, c = !1;
  return typeof e == "string" && (e = xo(e)), rt(e) == "object" && (ve(e.r) && ve(e.g) && ve(e.b) ? (t = eo(e.r, e.g, e.b), l = !0, c = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ve(e.h) && ve(e.s) && ve(e.v) ? (r = ze(e.s), i = ze(e.v), t = no(e.h, r, i), l = !0, c = "hsv") : ve(e.h) && ve(e.s) && ve(e.l) && (r = ze(e.s), a = ze(e.l), t = to(e.h, r, a), l = !0, c = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = rn(n), {
    ok: l,
    format: e.format || c,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
function eo(e, t, n) {
  return {
    r: P(e, 255) * 255,
    g: P(t, 255) * 255,
    b: P(n, 255) * 255
  };
}
function Nt(e, t, n) {
  e = P(e, 255), t = P(t, 255), n = P(n, 255);
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
function to(e, t, n) {
  var r, i, a;
  e = P(e, 360), t = P(t, 100), n = P(n, 100);
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
function Ht(e, t, n) {
  e = P(e, 255), t = P(t, 255), n = P(n, 255);
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
function no(e, t, n) {
  e = P(e, 360) * 6, t = P(t, 100), n = P(n, 100);
  var r = Math.floor(e), i = e - r, a = n * (1 - t), l = n * (1 - i * t), c = n * (1 - (1 - i) * t), s = r % 6, d = [n, l, a, a, c, n][s], u = [c, n, n, l, a, a][s], p = [a, a, c, n, n, l][s];
  return {
    r: d * 255,
    g: u * 255,
    b: p * 255
  };
}
function Tt(e, t, n, r) {
  var i = [de(Math.round(e).toString(16)), de(Math.round(t).toString(16)), de(Math.round(n).toString(16))];
  return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function ro(e, t, n, r, i) {
  var a = [de(Math.round(e).toString(16)), de(Math.round(t).toString(16)), de(Math.round(n).toString(16)), de(on(r))];
  return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Bt(e, t, n, r) {
  var i = [de(on(r)), de(Math.round(e).toString(16)), de(Math.round(t).toString(16)), de(Math.round(n).toString(16))];
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
function oo(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.s -= t / 100, n.s = st(n.s), y(n);
}
function ao(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.s += t / 100, n.s = st(n.s), y(n);
}
function io(e) {
  return y(e).desaturate(100);
}
function so(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.l += t / 100, n.l = st(n.l), y(n);
}
function lo(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toRgb();
  return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), y(n);
}
function co(e, t) {
  t = t === 0 ? 0 : t || 10;
  var n = y(e).toHsl();
  return n.l -= t / 100, n.l = st(n.l), y(n);
}
function uo(e, t) {
  var n = y(e).toHsl(), r = (n.h + t) % 360;
  return n.h = r < 0 ? 360 + r : r, y(n);
}
function po(e) {
  var t = y(e).toHsl();
  return t.h = (t.h + 180) % 360, y(t);
}
function Dt(e, t) {
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
function mo(e) {
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
function ho(e, t, n) {
  t = t || 6, n = n || 30;
  var r = y(e).toHsl(), i = 360 / n, a = [y(e)];
  for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
    r.h = (r.h + i) % 360, a.push(y(r));
  return a;
}
function fo(e, t) {
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
  switch (a = !1, i = wo(n), i.level + i.size) {
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
var yt = y.names = {
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
}, go = y.hexNames = bo(yt);
function bo(e) {
  var t = {};
  for (var n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n);
  return t;
}
function rn(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function P(e, t) {
  vo(e) && (e = "100%");
  var n = yo(e);
  return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function st(e) {
  return Math.min(1, Math.max(0, e));
}
function ie(e) {
  return parseInt(e, 16);
}
function vo(e) {
  return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function yo(e) {
  return typeof e == "string" && e.indexOf("%") != -1;
}
function de(e) {
  return e.length == 1 ? "0" + e : "" + e;
}
function ze(e) {
  return e <= 1 && (e = e * 100 + "%"), e;
}
function on(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Ot(e) {
  return ie(e) / 255;
}
var le = (function() {
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
function ve(e) {
  return !!le.CSS_UNIT.exec(e);
}
function xo(e) {
  e = e.replace(Jr, "").replace(Kr, "").toLowerCase();
  var t = !1;
  if (yt[e])
    e = yt[e], t = !0;
  else if (e == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var n;
  return (n = le.rgb.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3]
  } : (n = le.rgba.exec(e)) ? {
    r: n[1],
    g: n[2],
    b: n[3],
    a: n[4]
  } : (n = le.hsl.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3]
  } : (n = le.hsla.exec(e)) ? {
    h: n[1],
    s: n[2],
    l: n[3],
    a: n[4]
  } : (n = le.hsv.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3]
  } : (n = le.hsva.exec(e)) ? {
    h: n[1],
    s: n[2],
    v: n[3],
    a: n[4]
  } : (n = le.hex8.exec(e)) ? {
    r: ie(n[1]),
    g: ie(n[2]),
    b: ie(n[3]),
    a: Ot(n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex6.exec(e)) ? {
    r: ie(n[1]),
    g: ie(n[2]),
    b: ie(n[3]),
    format: t ? "name" : "hex"
  } : (n = le.hex4.exec(e)) ? {
    r: ie(n[1] + "" + n[1]),
    g: ie(n[2] + "" + n[2]),
    b: ie(n[3] + "" + n[3]),
    a: Ot(n[4] + "" + n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex3.exec(e)) ? {
    r: ie(n[1] + "" + n[1]),
    g: ie(n[2] + "" + n[2]),
    b: ie(n[3] + "" + n[3]),
    format: t ? "name" : "hex"
  } : !1;
}
function wo(e) {
  var t, n;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), n !== "small" && n !== "large" && (n = "small"), {
    level: t,
    size: n
  };
}
function lt(e) {
  return e.reduce((t, n, r) => {
    const i = y(n).toHsl(), a = `${i.h}deg, ${Math.round(i.s * 100)}%, ${Math.round(i.l * 100)}%`;
    return t[`--${Ce[r] || "default"}`] = a, t;
  }, {});
}
function Ne(e, t = 1) {
  const [n, r] = v(!1);
  return A(() => {
    if (e) {
      r(!0);
      const i = setTimeout(() => r(!1), t * 1e3);
      return () => clearTimeout(i);
    }
  }, [e, t]), n;
}
const ko = "_container_62cx0_1", _o = "_measure_62cx0_6", Fo = "_wrapper_62cx0_13", Co = "_virtual_62cx0_19", Ro = "_scale_62cx0_25", Oe = {
  container: ko,
  measure: _o,
  wrapper: Fo,
  virtual: Co,
  scale: Ro
};
function So(...e) {
  return e.filter(Boolean).join(" ");
}
function Eo(e) {
  const {
    className: t,
    Tag: n = "div",
    input: r,
    children: i,
    upscale: a = !1,
    contain: l = !1,
    style: c = {},
    ...s
  } = e, d = k(() => So(t, Oe.container), [t]), u = w(null), p = w(null), h = w(null), f = w(null), [m, _] = v(1), [L, I] = v(1), N = C(() => {
    if (!p.current || !f.current || !h.current)
      return;
    const x = p.current.clientWidth / f.current.clientWidth, R = Number(
      (h.current.clientHeight / f.current.clientHeight).toFixed(3)
    ), M = l ? Math.min(x, R) : x;
    _(l ? 1 + Math.max(0, x - M) : x), !a && M >= 1 ? I(1) : I(Math.max(0.1, M));
  }, [l, a]);
  return wn(() => {
    if (!h.current || !p.current || !f.current)
      return;
    const x = new ResizeObserver(N);
    return x.observe(h.current), x.observe(p.current), x.observe(f.current), window.addEventListener("resize", N), N(), () => {
      x.disconnect(), window.removeEventListener("resize", N);
    };
  }, [N]), A(() => {
    var x;
    (x = u.current) != null && x.parentNode && u.current.parentNode.style.setProperty("--max-scale", String(m));
  }, [m]), /* @__PURE__ */ o(
    n,
    {
      ref: u,
      className: d,
      style: {
        "--scale": L,
        "--max-scale": m,
        ...c
      },
      ...s,
      children: /* @__PURE__ */ g("div", { ref: p, className: Oe.measure, children: [
        /* @__PURE__ */ o("div", { ref: h, className: Oe.wrapper, children: /* @__PURE__ */ o("div", { ref: f, className: Oe.virtual, children: r || i }) }),
        /* @__PURE__ */ o("div", { className: Oe.scale, children: i })
      ] })
    }
  );
}
const Se = D(Eo), Mo = "_container_1rv8h_3", Lo = "_active_1rv8h_36", Ao = "_contracted_1rv8h_40", Pe = {
  container: Mo,
  active: Lo,
  contracted: Ao
}, Io = 0.2;
function No(e) {
  const { colors: t = [], isInteractive: n = !1 } = e, r = w(null), i = k(
    () => /* @__PURE__ */ o(ke, { children: t.map((a, l) => /* @__PURE__ */ o(
      "div",
      {
        style: { "--color": a, zIndex: -l }
      },
      l
    )) }),
    [t]
  );
  return A(() => {
    const a = r.current ? Array.from(r.current.children) : [];
    let l = null;
    const c = () => {
      a.forEach((s) => {
        s.classList.remove(Pe.active), s.classList.remove(Pe.contracted);
      });
    };
    if (c(), n) {
      let s = 1;
      const d = () => {
        a.forEach((u, p) => {
          u.classList.toggle(Pe.active, p === s), u.classList.toggle(Pe.contracted, p < s);
        }), s >= a.length ? (l && clearInterval(l), c()) : s += 1;
      };
      d(), l = setInterval(d, Io * 1e3);
    }
    return () => {
      l && clearInterval(l);
    };
  }, [n, t.length]), /* @__PURE__ */ o("div", { ref: r, className: Pe.container, children: i });
}
const an = D(No), Ho = "_container_1mm99_3", To = "_shapePill_1mm99_26", Bo = "_shapeOval_1mm99_30", Do = "_shapeSquare_1mm99_34", Oo = "_shapeUnderline_1mm99_38", Po = "_fill_1mm99_47", $o = "_cardBackgroundMatch_1mm99_64", zo = "_hover_1mm99_73", Wo = "_outer_1mm99_83", Uo = "_inner_1mm99_87", pe = {
  container: Ho,
  shapePill: To,
  shapeOval: Bo,
  shapeSquare: Do,
  shapeUnderline: Oo,
  fill: Po,
  cardBackgroundMatch: $o,
  hover: zo,
  outer: Wo,
  inner: Uo
};
function jo(...e) {
  return e.filter(Boolean).join(" ");
}
const Vo = {
  pill: pe.shapePill,
  oval: pe.shapeOval,
  square: pe.shapeSquare,
  underline: pe.shapeUnderline
};
function Go(e) {
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
    secondaryColorNoFill: h,
    textTransform: f = "none",
    isHover: m = !1,
    ..._
  } = e, L = k(
    () => jo(
      pe.container,
      r && pe.fill,
      l ? Vo[l] : void 0,
      m && pe.hover
    ),
    [r, l, m]
  ), I = k(
    () => ({
      "--color-primary-hsl": r ? i ? p : c : s,
      "--color-secondary-hsl": r ? i ? c : p : h,
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
      h
    ]
  ), N = k(
    () => `${n}_${f}_${u}`,
    [n, f, u]
  );
  return /* @__PURE__ */ g(
    "div",
    {
      className: L,
      style: I,
      tabIndex: -1,
      ..._,
      children: [
        /* @__PURE__ */ o("div", { className: pe.cardBackgroundMatch }),
        /* @__PURE__ */ o(me, { className: pe.outer, classNameContent: pe.inner, children: /* @__PURE__ */ o(
          "span",
          {
            className: n,
            style: {
              textTransform: f,
              fontWeight: u
            },
            children: t
          },
          N
        ) })
      ]
    }
  );
}
const et = D(Go), qo = "_container_bx5fz_3", Zo = "_heading_bx5fz_18", Yo = "_text_bx5fz_33", Xo = "_swatch_bx5fz_38", Jo = "_button_bx5fz_43", Ko = "_swap_bx5fz_55", _e = {
  container: qo,
  heading: Zo,
  text: Yo,
  swatch: Xo,
  button: Jo,
  swap: Ko
}, Qo = 1.15, ea = 1.2, Pt = 0.04;
function ta(e) {
  const { color: t, fonts: n, buttons: r } = e, [i, a] = v(!1), l = it(i, Qo), c = Ne(l, ea), s = k(() => {
    const h = (f, m) => `var(--${Ce[(f || t.buttons)[m]]})`;
    return {
      primaryColor: h(t.buttons, 0),
      secondaryColor: h(t.buttons, 1),
      ...t.buttonsNoFill ? {
        primaryColorNoFill: h(t.buttonsNoFill, 0),
        secondaryColorNoFill: h(t.buttonsNoFill, 1)
      } : {
        primaryColorNoFill: h(t.buttons, 1),
        secondaryColorNoFill: h(t.buttons, 0)
      }
    };
  }, [t]), d = k(
    () => ({
      "--color-background": t.palette[t.background],
      "--color-heading": t.palette[t.headings]
    }),
    [t]
  ), u = k(
    () => lt(t.palette),
    [t]
  ), p = k(
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
      className: _e.container,
      style: d,
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        /* @__PURE__ */ o("div", { className: _e.heading, children: /* @__PURE__ */ o(Se, { children: /* @__PURE__ */ o(me, { classNameContent: _e.text, children: /* @__PURE__ */ o("div", { className: n.headingFont.className, children: "Aa" }, p.heading) }) }) }),
        /* @__PURE__ */ o("div", { className: _e.swatch, children: /* @__PURE__ */ o(me, { className: _e.swap, delayHide: Pt, children: /* @__PURE__ */ o(
          an,
          {
            colors: t.palette,
            isInteractive: i
          },
          p.swatch
        ) }) }),
        /* @__PURE__ */ o("div", { className: _e.button, style: u, children: /* @__PURE__ */ o(
          me,
          {
            className: _e.swap,
            delayHide: Pt * 2,
            children: /* @__PURE__ */ o(Se, { children: /* @__PURE__ */ o(
              et,
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
const sn = D(ta), na = "_container_1brv3_3", ra = "_hoverHeading_1brv3_16", oa = "_heading_1brv3_16", aa = "_paragraph_1brv3_21", ia = "_hoverParagraph_1brv3_26", sa = "_swap_1brv3_36", la = "_text_1brv3_69", we = {
  container: na,
  hoverHeading: ra,
  heading: oa,
  paragraph: aa,
  hoverParagraph: ia,
  swap: sa,
  text: la
}, ca = 0.2, da = 0.75, ht = ca + da;
function ft(...e) {
  return e.filter(Boolean).join(" ");
}
function ua(e) {
  const { color: t, fonts: n } = e, [r, i] = v(!1), a = it(r, ht), l = Ne(r, ht), c = Ne(a, ht), s = k(
    () => ft(
      we.container,
      l && we.hoverHeading,
      c && we.hoverParagraph
    ),
    [l, c]
  ), d = k(
    () => ({
      "--color": t.palette[4]
    }),
    [t.palette]
  ), [u, p] = k(
    () => [
      ft(n.headingFont.className, we.text),
      ft(n.paragraphFont.className, we.text)
    ],
    [n.headingFont.className, n.paragraphFont.className]
  ), h = k(
    () => `${u}_${p}`,
    [u, p]
  );
  return /* @__PURE__ */ o(
    me,
    {
      className: s,
      style: d,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ g("div", { className: we.swap, children: [
        /* @__PURE__ */ o("div", { className: we.heading, children: /* @__PURE__ */ o(Se, { upscale: !0, contain: !0, children: /* @__PURE__ */ o("div", { className: u, children: "Heading" }) }) }),
        /* @__PURE__ */ o("div", { className: we.paragraph, children: /* @__PURE__ */ o(Se, { children: /* @__PURE__ */ o("div", { className: p, children: "This is your paragraph." }) }) })
      ] }, h)
    }
  );
}
const ln = D(ua), pa = "_container_1pxtn_3", ma = {
  container: pa
};
function ha(e) {
  const { color: t } = e, { palette: n } = t, [r, i] = v(!1), a = k(() => JSON.stringify(n), [n]);
  return /* @__PURE__ */ o(
    "div",
    {
      className: ma.container,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      children: /* @__PURE__ */ o(me, { children: /* @__PURE__ */ o(an, { colors: n, isInteractive: r }, a) })
    }
  );
}
const cn = D(ha), fa = "_container_1j81e_3", ga = "_interactive_1j81e_19", ba = "_button_1j81e_19", va = "_primary_1j81e_23", ya = "_secondary_1j81e_27", xa = "_tertiary_1j81e_32", wa = "_buttons_1j81e_39", ye = {
  container: fa,
  interactive: ga,
  button: ba,
  primary: va,
  secondary: ya,
  tertiary: xa,
  buttons: wa
}, ka = 0.2, _a = 1.5;
function Ke(...e) {
  return e.filter(Boolean).join(" ");
}
function Fa(e) {
  const { buttons: t, color: n, fonts: r } = e, [i, a] = v(!1), l = Ne(
    i,
    ka + _a
  ), c = k(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = k(
    () => Ke(ye.container, l && ye.interactive),
    [l]
  ), d = k(
    () => lt(n.palette),
    [n.palette]
  ), u = k(() => {
    const p = l ? "Primary" : "Button", h = (m, _) => `var(--${Ce[(m || n.buttons)[_]]})`, f = {
      primaryColor: h(n.buttonsPreview, 0),
      secondaryColor: h(n.buttonsPreview, 1),
      primaryColorNoFill: h(n.buttonsNoFillPreview, 0),
      secondaryColorNoFill: h(n.buttonsNoFillPreview, 1)
    };
    return /* @__PURE__ */ g(ke, { children: [
      /* @__PURE__ */ o(Se, { className: Ke(ye.button, ye.tertiary), children: /* @__PURE__ */ o(
        et,
        {
          className: r.paragraphFont.className,
          ...t.tertiary,
          ...f,
          children: "Tertiary"
        }
      ) }),
      /* @__PURE__ */ o(Se, { className: Ke(ye.button, ye.secondary), children: /* @__PURE__ */ o(
        et,
        {
          className: r.paragraphFont.className,
          ...t.secondary,
          ...f,
          children: "Secondary"
        }
      ) }),
      /* @__PURE__ */ o(Se, { className: Ke(ye.button, ye.primary), children: /* @__PURE__ */ o(
        et,
        {
          className: r.paragraphFont.className,
          ...t.primary,
          ...f,
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
      children: /* @__PURE__ */ o(me, { children: /* @__PURE__ */ o("div", { className: ye.buttons, children: u }, c) })
    }
  );
}
const dn = D(Fa), Ca = "_container_1i7v7_3", Ra = "_sizeSmall_1i7v7_20", Sa = "_inputFill_1i7v7_27", Ea = "_input_1i7v7_27", Ma = "_optionFill_1i7v7_40", La = "_option_1i7v7_40", Aa = "_inputShapePill_1i7v7_51", Ia = "_inputShapeSquare_1i7v7_55", Na = "_inputShapeUnderline_1i7v7_59", Ha = "_optionShapePill_1i7v7_67", Ta = "_optionShapeSquare_1i7v7_71", Ba = "_optionShapeCircle_1i7v7_75", Da = "_optionButton_1i7v7_81", Oa = "_optionInvert_1i7v7_82", Pa = "_hoverInput_1i7v7_88", $a = "_hoverOption_1i7v7_93", za = "_label_1i7v7_152", V = {
  container: Ca,
  sizeSmall: Ra,
  inputFill: Sa,
  input: Ea,
  optionFill: Ma,
  option: La,
  inputShapePill: Aa,
  inputShapeSquare: Ia,
  inputShapeUnderline: Na,
  optionShapePill: Ha,
  optionShapeSquare: Ta,
  optionShapeCircle: Ba,
  optionButton: Da,
  optionInvert: Oa,
  hoverInput: Pa,
  hoverOption: $a,
  label: za
}, $t = "Field";
function Wa(e) {
  const { isInteractive: t, inputRate: n = 100 } = e, [r, i] = v(""), [a, l] = v(!1);
  return A(() => {
    if (t) {
      const c = $t;
      let s = 0;
      const d = setInterval(() => {
        s <= c.length ? (i(c.substring(0, s)), l(!0), s++) : (l(!1), clearInterval(d));
      }, n);
      return () => clearInterval(d);
    } else
      i($t), l(!1);
  }, [t, n]), /* @__PURE__ */ g("span", { children: [
    r,
    a && "|"
  ] });
}
const Ua = D(Wa), gt = 1;
function zt(...e) {
  return e.filter(Boolean).join(" ");
}
const ja = {
  pill: V.inputShapePill,
  square: V.inputShapeSquare,
  underline: V.inputShapeUnderline
}, Va = {
  pill: V.optionShapePill,
  square: V.optionShapeSquare,
  circle: V.optionShapeCircle
};
function Ga() {
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
  } = e, u = it(i, gt), p = Ne(i, gt), h = Ne(u, gt), f = k(
    () => zt(
      t,
      V.container,
      n.fill && V.inputFill,
      p && V.hoverInput,
      h && V.hoverOption,
      r.button && V.optionButton,
      r.fill && V.optionFill,
      r.inverted && V.optionInvert,
      ja[n.shape],
      Va[r.shape],
      a === "small" && V.sizeSmall
    ),
    [t, n, r, a, p, h]
  ), m = k(
    () => zt(V.option, r.button && V.label),
    [r.button]
  ), _ = k(
    () => ({
      "--input-border-width": n.outline,
      "--input-border-radius": n.borderRadius.join(" "),
      "--option-border-width": r.outline,
      "--option-border-radius": r.borderRadius.join(" ")
    }),
    [n.borderRadius, n.outline, r.borderRadius, r.outline]
  ), L = k(
    () => ({
      "--color-primary-hsl": l,
      "--color-secondary-hsl": c
    }),
    [l, c]
  ), I = k(
    () => ({
      "--color-primary-hsl": s,
      "--color-secondary-hsl": d
    }),
    [s, d]
  );
  return /* @__PURE__ */ g("div", { className: f, style: _, children: [
    /* @__PURE__ */ o("div", { className: V.input, style: L, children: /* @__PURE__ */ o(Ua, { isInteractive: i }) }),
    /* @__PURE__ */ o("div", { className: m, style: I, children: r.button ? "Option" : /* @__PURE__ */ o(Ga, {}) })
  ] });
}
const Za = D(qa), Ya = "_container_8tn8q_3", Xa = "_swap_8tn8q_12", Ja = "_form_8tn8q_16", bt = {
  container: Ya,
  swap: Xa,
  form: Ja
};
function Ka(e) {
  const { form: t, color: n, fonts: r, previewSize: i = "standard" } = e, [a, l] = v(!1), c = k(
    () => JSON.stringify({ ...t, fonts: r }),
    [t, r]
  ), s = k(
    () => lt(n.palette),
    [n.palette]
  ), d = k(
    () => /* @__PURE__ */ o(
      Za,
      {
        className: r.paragraphFont.className,
        ...t,
        size: i,
        primaryColor: `var(--${Ce[n.form[0]]})`,
        secondaryColor: `var(--${Ce[n.form[1]]})`,
        buttonPrimaryColor: `var(--${Ce[n.form[2]]})`,
        buttonSecondaryColor: `var(--${Ce[n.form[3]]})`,
        isInteractive: a
      }
    ),
    [a, n.form, r.paragraphFont.className, t, i]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: bt.container,
      style: s,
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: /* @__PURE__ */ o(me, { className: bt.swap, children: /* @__PURE__ */ o("div", { className: bt.form, children: d }, c) })
    }
  );
}
const un = D(Ka), Qa = "_container_pfdmi_3", ei = "_undocked_pfdmi_17", ti = "_hidden_pfdmi_21", ni = "_wrapper_pfdmi_27", ri = "_background_pfdmi_35", oi = "_backgroundBox_pfdmi_47", ai = "_box_pfdmi_55", ii = "_panel_pfdmi_68", si = "_header_pfdmi_80", li = "_body_pfdmi_98", ci = "_padding_pfdmi_113", di = "_padBottom_pfdmi_118", ui = "_padTop_pfdmi_122", Q = {
  container: Qa,
  undocked: ei,
  hidden: ti,
  wrapper: ni,
  background: ri,
  backgroundBox: oi,
  box: ai,
  panel: ii,
  header: si,
  body: li,
  padding: ci,
  padBottom: di,
  padTop: ui
}, pn = (...e) => e.filter(Boolean).join(" ");
function pi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: Q.panel, children: e });
}
function mi({ children: e }) {
  return /* @__PURE__ */ o("div", { className: Q.header, children: e });
}
function hi({
  children: e,
  padding: t = !1,
  padTop: n = !1,
  padBottom: r = !0
}) {
  const i = k(
    () => pn(
      Q.body,
      t && Q.padding,
      n && Q.padTop,
      r && Q.padBottom
    ),
    [t, n, r]
  );
  return /* @__PURE__ */ o("div", { className: i, children: e });
}
function fi({
  children: e,
  attachment: t,
  undocked: n = !1,
  isHidden: r = !1,
  mode: i = "light"
}) {
  const a = w(null);
  A(() => {
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
  const l = k(
    () => pn(
      Q.container,
      n && Q.undocked,
      r && Q.hidden,
      Q[`mode-${i}`]
    ),
    [n, r, i]
  ), c = /* @__PURE__ */ o("dialog", { ref: a, className: l, open: !0, children: /* @__PURE__ */ g("div", { className: Q.wrapper, children: [
    /* @__PURE__ */ o("div", { className: Q.background, children: /* @__PURE__ */ o("div", { className: Q.backgroundBox }) }),
    /* @__PURE__ */ o("div", { className: Q.box, children: e })
  ] }) });
  return ot(c, document.body);
}
const z = D(fi);
z.Panel = D(pi);
z.Header = D(mi);
z.Body = D(hi);
const gi = "_container_17wzg_1", bi = "_shimmer_17wzg_44", vi = "_hover_17wzg_49", yi = "_active_17wzg_53", xi = "_fadeup_17wzg_62", wi = "_content_17wzg_129", ki = "_wrap_17wzg_138", Fe = {
  container: gi,
  shimmer: bi,
  hover: vi,
  active: yi,
  fadeup: xi,
  content: wi,
  wrap: ki
}, _i = (...e) => e.filter(Boolean).join(" ");
function Fi({
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
  const [d, u] = v(!1), p = k(
    () => _i(
      e,
      Fe.container,
      d && Fe.hover,
      n && Fe.active,
      c && Fe.fadeup
    ),
    [e, d, n, c]
  ), h = C(() => {
    u(!0);
  }, []), f = C(() => {
    u(!1);
  }, []);
  return /* @__PURE__ */ g(
    "button",
    {
      className: p,
      onMouseEnter: h,
      onMouseLeave: f,
      onClick: (_) => {
        u(!1), a == null || a(_);
      },
      style: { "--animation-delay": `${l}s` },
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Fe.content, children: i ? /* @__PURE__ */ o("div", { className: Fe.wrap, children: t }) : t }),
        r && /* @__PURE__ */ o("div", { className: Fe.shimmer, "aria-hidden": "true" })
      ]
    }
  );
}
const We = D(Fi), Ci = {
  display: "grid",
  gap: "11px"
}, Ri = {
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
function Si({
  items: e,
  getItem: t,
  columns: n = 1,
  max: r = 8
}) {
  const [i, a] = v(!1), l = k(
    () => e.slice(0, r).map((p, h) => t(p, h)),
    [e, t, r]
  ), c = k(
    () => e.slice(r).map((p, h) => t(p, h + r)),
    [e, t, r]
  ), s = c.length > 0, d = C(
    (p) => {
      p.stopPropagation(), a((h) => !h);
    },
    []
  ), u = k(
    () => ({
      display: "grid",
      gap: "inherit",
      gridTemplateColumns: `repeat(${n}, 1fr)`
    }),
    [n]
  );
  return /* @__PURE__ */ g("div", { style: Ci, children: [
    /* @__PURE__ */ g("div", { style: u, children: [
      l,
      i && c
    ] }),
    s && /* @__PURE__ */ o("button", { style: Ri, onClick: d, children: i ? "Show Less" : "Show All" })
  ] });
}
const Ue = D(Si), Wt = 1, Ei = 0.04;
function Mi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, themePacks: i, setPack: a } = Ee(), l = k(() => r.name, [r]), c = C(
    (s, d) => {
      const u = s.name, p = Math.floor(d / Wt);
      return /* @__PURE__ */ o(
        We,
        {
          active: l === u,
          onClick: () => a(s),
          wrap: !0,
          delayShow: (p + 1) * Ei,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            sn,
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
  return /* @__PURE__ */ o(z, { attachment: e, undocked: t, children: /* @__PURE__ */ g(z.Panel, { children: [
    /* @__PURE__ */ o(z.Header, { children: "Themes" }),
    /* @__PURE__ */ o(z.Body, { padding: !0, children: /* @__PURE__ */ o(
      Ue,
      {
        items: i,
        getItem: c,
        columns: Wt,
        max: 8
      }
    ) })
  ] }) });
}
const Li = D(Mi), Ut = 2, Ai = 0.04;
function Ii({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, fontPacks: i, setPack: a } = Ee(), l = k(
    () => `${r.fonts.headingFont.name}_${r.fonts.paragraphFont.name}`,
    [r]
  ), c = C(
    (s, d) => {
      const u = `${s.headingFont.name}_${s.paragraphFont.name}`, p = {
        ...r,
        fonts: { ...s }
      }, h = Math.floor(d / Ut);
      return /* @__PURE__ */ o(
        We,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (h + 1) * Ai,
          animateReveal: !0,
          children: /* @__PURE__ */ o(ln, { color: p.color, fonts: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(z, { attachment: e, undocked: t, children: /* @__PURE__ */ g(z.Panel, { children: [
    /* @__PURE__ */ o(z.Header, { children: "Recommended Font Packs" }),
    /* @__PURE__ */ o(z.Body, { padding: !0, children: /* @__PURE__ */ o(
      Ue,
      {
        items: i,
        getItem: c,
        columns: Ut,
        max: 8
      }
    ) })
  ] }) });
}
const Ni = D(Ii), jt = 2, Hi = 0.04;
function Ti({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, colorPacks: i, setPack: a } = Ee(), l = k(
    () => JSON.stringify(r.color),
    [r]
  ), c = C(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        color: { ...s }
      }, h = Math.floor(d / jt);
      return /* @__PURE__ */ o(
        We,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (h + 1) * Hi,
          animateReveal: !0,
          children: /* @__PURE__ */ o(cn, { color: s })
        },
        `${u}_${d}`
      );
    },
    [l, r, a]
  );
  return /* @__PURE__ */ o(z, { attachment: e, undocked: t, children: /* @__PURE__ */ g(z.Panel, { children: [
    /* @__PURE__ */ o(z.Header, { children: "Recommended Color Packs" }),
    /* @__PURE__ */ o(z.Body, { padding: !0, children: /* @__PURE__ */ o(
      Ue,
      {
        items: i,
        getItem: c,
        columns: jt,
        max: 8
      }
    ) })
  ] }) });
}
const Bi = D(Ti), Vt = 2, Di = 0.04;
function Oi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, buttonPacks: i, setPack: a } = Ee(), l = k(
    () => JSON.stringify(r.buttons),
    [r]
  ), c = C(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        buttons: { ...s }
      }, h = Math.floor(d / Vt);
      return /* @__PURE__ */ o(
        We,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (h + 1) * Di,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            dn,
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
  return /* @__PURE__ */ o(z, { attachment: e, undocked: t, children: /* @__PURE__ */ g(z.Panel, { children: [
    /* @__PURE__ */ o(z.Header, { children: "Recommended Button Packs" }),
    /* @__PURE__ */ o(z.Body, { padding: !0, children: /* @__PURE__ */ o(
      Ue,
      {
        items: i,
        getItem: c,
        columns: Vt,
        max: 8
      }
    ) })
  ] }) });
}
const Pi = D(Oi), Gt = 2, $i = 0.04;
function zi({ attachment: e, undocked: t, onClose: n }) {
  const { userTheme: r, formPacks: i, setPack: a } = Ee(), l = k(
    () => JSON.stringify(r.form),
    [r]
  ), c = C(
    (s, d) => {
      const u = JSON.stringify(s), p = {
        ...r,
        form: { ...s }
      }, h = Math.floor(d / Gt);
      return /* @__PURE__ */ o(
        We,
        {
          active: l === u,
          onClick: () => a(p),
          delayShow: (h + 1) * $i,
          animateReveal: !0,
          children: /* @__PURE__ */ o(
            un,
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
  return /* @__PURE__ */ o(z, { attachment: e, undocked: t, children: /* @__PURE__ */ g(z.Panel, { children: [
    /* @__PURE__ */ o(z.Header, { children: "Recommended Form Packs" }),
    /* @__PURE__ */ o(z.Body, { padding: !0, children: /* @__PURE__ */ o(
      Ue,
      {
        items: i,
        getItem: c,
        columns: Gt,
        max: 8
      }
    ) })
  ] }) });
}
const Wi = D(zi), Ui = "_fadeup_1my1f_31", ji = "_fadeoutdown_1my1f_36", qt = {
  fadeup: Ui,
  fadeoutdown: ji
}, $e = !0, Vi = 0.35, Gi = 0.04;
function qi({ depth: e = 0, isActive: t = !1 }) {
  const { userTheme: n } = Ee(), [r, i] = v(null), [a, l] = v(null), c = w(), s = w(null), d = C(
    (f, m) => {
      f.preventDefault(), f.stopPropagation();
      const L = { current: f.currentTarget };
      i(L), l((I) => (clearTimeout(c.current), s.current = I === m ? null : m, s.current)), clearTimeout(c.current);
    },
    []
  );
  A(() => {
    t || (l(null), i(null));
  }, [t]);
  const u = C(
    (f, m) => t ? f * 0.04 : (m - f) * 0.04,
    [t]
  ), p = C((f) => (c.current = setTimeout(() => {
    s.current === f && l(null);
  }, 0), () => {
    clearTimeout(c.current);
  }), []), h = k(() => r ? a === "themes" ? /* @__PURE__ */ o(
    Li,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("themes")
    },
    "themes"
  ) : a === "fonts" ? /* @__PURE__ */ o(
    Ni,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("fonts")
    },
    "fonts"
  ) : a === "colors" ? /* @__PURE__ */ o(
    Bi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("colors")
    },
    "colors"
  ) : a === "buttons" ? /* @__PURE__ */ o(
    Pi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("buttons")
    },
    "buttons"
  ) : a === "forms" ? /* @__PURE__ */ o(
    Wi,
    {
      attachment: r,
      undocked: !0,
      onClose: () => p("forms")
    },
    "forms"
  ) : null : null, [a, r, p]);
  return /* @__PURE__ */ g(mr, { title: "Styles", depth: e, isActive: t, children: [
    /* @__PURE__ */ o(
      De,
      {
        label: "Themes",
        isShown: t,
        onClick: (f) => d(f, "themes"),
        active: a === "themes",
        wrap: !0,
        delayShow: u(0, 5),
        animateReveal: $e,
        children: /* @__PURE__ */ o(
          sn,
          {
            color: n.color,
            fonts: n.fonts,
            buttons: n.buttons
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      De,
      {
        disclosure: "/config/site-styles/fonts",
        label: "Fonts",
        isShown: t,
        onClick: (f) => d(f, "fonts"),
        active: a === "fonts",
        delayShow: u(1, 5),
        animateReveal: $e,
        children: /* @__PURE__ */ o(ln, { color: n.color, fonts: n.fonts })
      }
    ),
    /* @__PURE__ */ o(
      De,
      {
        disclosure: "/config/site-styles/colors",
        label: "Colors",
        isShown: t,
        onClick: (f) => d(f, "colors"),
        active: a === "colors",
        delayShow: u(2, 5),
        animateReveal: $e,
        children: /* @__PURE__ */ o(cn, { color: n.color })
      }
    ),
    /* @__PURE__ */ o(
      De,
      {
        disclosure: "/config/site-styles/buttons",
        label: "Buttons",
        isShown: t,
        onClick: (f) => d(f, "buttons"),
        active: a === "buttons",
        delayShow: u(3, 5),
        animateReveal: $e,
        children: /* @__PURE__ */ o(
          dn,
          {
            buttons: n.buttons,
            color: n.color,
            fonts: n.fonts
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      De,
      {
        disclosure: "/config/site-styles/forms",
        label: "Forms",
        isShown: t,
        onClick: (f) => d(f, "forms"),
        active: a === "forms",
        delayShow: u(4, 5),
        animateReveal: $e,
        children: /* @__PURE__ */ o(
          un,
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
        className: t ? qt.fadeup : qt.fadeoutdown,
        style: { "--animation-delay": `${u(4, 5)}s` },
        children: [
          /* @__PURE__ */ o(It, { label: "Animations", href: "/config/site-styles/animations" }),
          /* @__PURE__ */ o(It, { label: "Spacing", href: "/config/site-styles/spacing" })
        ]
      }
    ),
    /* @__PURE__ */ o(
      me,
      {
        animateFirst: !0,
        directionOut: "down",
        delayShow: Gi,
        distance: 0,
        duration: Vi,
        useOpacity: !1,
        children: h
      }
    )
  ] });
}
const Zi = D(qi), Yi = "_container_goi2l_3", Xi = "_backButton_goi2l_7", Zt = {
  container: Yi,
  backButton: Xi
};
function Ji() {
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
function Ki(e) {
  return e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(" ");
}
function Qi() {
  const { route: e, depth: t, onBack: n } = Ee(), r = k(() => {
    if (t === 0) return null;
    const i = Ki(e[t] ?? "Back");
    return /* @__PURE__ */ g("button", { className: Zt.backButton, onClick: n, children: [
      /* @__PURE__ */ o(Ji, {}),
      i
    ] }, "back");
  }, [e, t, n]);
  return /* @__PURE__ */ o("div", { className: Zt.container, children: /* @__PURE__ */ o(me, { directionIn: "left", directionOut: "left", children: r }) });
}
const es = D(Qi), ts = "_container_1anux_3", ns = "_open_1anux_14", rs = "_header_1anux_18", os = "_bar_1anux_31", as = "_body_1anux_38", is = "_panels_1anux_48", Ae = {
  container: ts,
  open: ns,
  header: rs,
  bar: os,
  body: as,
  panels: is
}, ss = (...e) => e.filter(Boolean).join(" "), mn = Jt(
  {}
), Ee = () => kn(mn);
function ls({ isOpen: e, themeState: t, className: n, onClose: r }) {
  const i = w(null), a = it(e, 0.01, 0.5), { route: l, depth: c, onBack: s } = ir(i, e), d = k(
    () => ss(n, Ae.container, e && Ae.open),
    [n, e]
  ), u = k(
    () => ({
      ...t,
      route: l,
      depth: c,
      onBack: s
    }),
    [t, l, c, s]
  ), p = k(() => l.map((h, f) => /* @__PURE__ */ o(Zi, { depth: f, isActive: c === f && e }, f)), [l, c, e]);
  return /* @__PURE__ */ o(mn.Provider, { value: u, children: /* @__PURE__ */ o("div", { ref: i, className: d, children: a && /* @__PURE__ */ g(ke, { children: [
    /* @__PURE__ */ o("div", { className: Ae.header, children: /* @__PURE__ */ g("div", { className: Ae.bar, style: { justifyContent: "flex-start" }, children: [
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
      /* @__PURE__ */ o(es, {})
    ] }) }),
    /* @__PURE__ */ o("div", { className: Ae.body, children: /* @__PURE__ */ o(
      "div",
      {
        className: Ae.panels,
        style: { "--depth": c },
        children: p
      }
    ) })
  ] }) }) });
}
const Bs = D(ls), hn = {
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
}, cs = Object.values(hn).flatMap((e) => e), ne = (e, t) => hn[e][t], fn = {
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
}, ds = Object.values(fn).flatMap((e) => e), re = (e, t) => fn[e][t];
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
function K(e, t, n = 400, r) {
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
const b = {
  // Vibrant heading fonts
  shrikhand: E("Shrikhand", "Shrikhand", 400, "Shrikhand:wght@400"),
  concertone: E("Concert One", "Concert One", 400, "Concert+One:wght@400"),
  youngserif: K("Young Serif", "Young Serif", 400, "Young+Serif:wght@400"),
  capriola: E("Capriola", "Capriola", 400, "Capriola:wght@400"),
  lilitaone: E("Lilita One", "Lilita One", 400, "Lilita+One:wght@400"),
  trocchi: K("Trocchi", "Trocchi", 400, "Trocchi:wght@400"),
  averiaseriflibre: K("Averia Serif Libre", "Averia Serif Libre", 400, "Averia+Serif+Libre:wght@400"),
  agbalumo: E("Agbalumo", "Agbalumo", 400, "Agbalumo:wght@400"),
  bungee: E("Bungee", "Bungee", 400, "Bungee:wght@400"),
  bebasneue: E("Bebas Neue", "Bebas Neue", 400, "Bebas+Neue:wght@400"),
  // Vibrant body fonts
  bitter: K("Bitter", "Bitter", 400, "Bitter:wght@400"),
  syne: E("Syne", "Syne", 400, "Syne:wght@400;800"),
  ibmplexmono: E("IBM Plex Mono", "IBM Plex Mono", 400, "IBM+Plex+Mono:wght@400"),
  spacegrotesk: E("Space Grotesk", "Space Grotesk", 400, "Space+Grotesk:wght@400"),
  spacemono: E("Space Mono", "Space Mono", 400, "Space+Mono:wght@400"),
  silkscreen: E("Silkscreen", "Silkscreen", 400, "Silkscreen:wght@400"),
  // Neutral heading fonts
  librebaskerville: K("Libre Baskerville", "Libre Baskerville", 400, "Libre+Baskerville:wght@400"),
  tenorsans: E("Tenor Sans", "Tenor Sans", 400, "Tenor+Sans:wght@400"),
  marcellus: K("Marcellus", "Marcellus", 400, "Marcellus:wght@400"),
  alice: K("Alice", "Alice", 400, "Alice:wght@400"),
  neuton: K("Neuton", "Neuton", 400, "Neuton:wght@400"),
  newsreader: K("Newsreader", "Newsreader", 400, "Newsreader:wght@400"),
  ovo: K("Ovo", "Ovo", 400, "Ovo:wght@400"),
  // Neutral body fonts
  almarai: E("Almarai", "Almarai", 400, "Almarai:wght@400"),
  pontanosans: E("Pontano Sans", "Pontano Sans", 400, "Pontano+Sans:wght@400"),
  ptserif: K("PT Serif", "PT Serif", 400, "PT+Serif:wght@400"),
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
  instrumentserif: K("Instrument Serif", "Instrument Serif", 400, "Instrument+Serif:wght@400"),
  familjengrotesk: E("Familjen Grotesk", "Familjen Grotesk", 400, "Familjen+Grotesk:wght@400"),
  arimo: E("Arimo", "Arimo", 400, "Arimo:wght@400"),
  archivo: E("Archivo", "Archivo", 400, "Archivo:wght@400;700"),
  gildadisplay: K("Gilda Display", "Gilda Display", 400, "Gilda+Display:wght@400"),
  oswald: E("Oswald", "Oswald", 400, "Oswald:wght@400;700"),
  epilogue: E("Epilogue", "Epilogue", 400, "Epilogue:wght@400;700"),
  // Adventurous fonts
  climatecrisis: E("Climate Crisis", "Climate Crisis", 400, "Climate+Crisis:wght@400"),
  ultra: K("Ultra", "Ultra", 400, "Ultra:wght@400"),
  modak: E("Modak", "Modak", 400, "Modak:wght@400"),
  goblinone: E("Goblin One", "Goblin One", 400, "Goblin+One:wght@400"),
  delagothicone: E("Dela Gothic One", "Dela Gothic One", 400, "Dela+Gothic+One:wght@400"),
  archivoblack: E("Archivo Black", "Archivo Black", 400, "Archivo+Black:wght@400"),
  coiny: E("Coiny", "Coiny", 400, "Coiny:wght@400")
}, gn = {
  minimal: [
    {
      packs: ["minimal"],
      headingFont: b.manrope,
      paragraphFont: b.poppins
    },
    {
      packs: ["minimal"],
      headingFont: b.urbanist,
      paragraphFont: b.poppins
    },
    {
      packs: ["minimal"],
      headingFont: b.instrumentserif,
      paragraphFont: b.newsreader
    },
    {
      packs: ["minimal"],
      headingFont: b.familjengrotesk,
      paragraphFont: b.arimo
    },
    {
      packs: ["minimal"],
      headingFont: b.archivo,
      paragraphFont: b.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: b.gildadisplay,
      paragraphFont: b.ptserif
    },
    {
      packs: ["minimal"],
      headingFont: b.oswald,
      paragraphFont: b.arimo
    },
    {
      packs: ["minimal"],
      headingFont: b.epilogue,
      paragraphFont: b.poppins
    }
  ],
  vibrant: [
    {
      packs: ["vibrant"],
      headingFont: b.shrikhand,
      paragraphFont: b.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: b.concertone,
      paragraphFont: b.syne
    },
    {
      packs: ["vibrant"],
      headingFont: b.youngserif,
      paragraphFont: b.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: b.capriola,
      paragraphFont: b.syne
    },
    {
      packs: ["vibrant"],
      headingFont: b.lilitaone,
      paragraphFont: b.ibmplexmono
    },
    {
      packs: ["vibrant"],
      headingFont: b.trocchi,
      paragraphFont: b.syne
    },
    {
      packs: ["vibrant"],
      headingFont: b.averiaseriflibre,
      paragraphFont: b.bitter
    },
    {
      packs: ["vibrant"],
      headingFont: b.agbalumo,
      paragraphFont: b.ptserif
    },
    {
      packs: ["vibrant"],
      headingFont: b.bungee,
      paragraphFont: b.spacegrotesk
    },
    {
      packs: ["vibrant"],
      headingFont: b.bebasneue,
      paragraphFont: b.familjengrotesk
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
      paragraphFont: b.poppins
    },
    {
      packs: ["vibrant"],
      headingFont: {
        ...b.syne,
        style: {
          ...b.syne.style,
          fontWeight: 800
        }
      },
      paragraphFont: b.spacemono,
      headerFont: b.silkscreen
    }
  ],
  neutral: [
    {
      packs: ["neutral"],
      headingFont: b.librebaskerville,
      paragraphFont: b.almarai
    },
    {
      packs: ["neutral"],
      headingFont: b.tenorsans,
      paragraphFont: b.pontanosans
    },
    {
      packs: ["neutral"],
      headingFont: b.marcellus,
      paragraphFont: b.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: b.alice,
      paragraphFont: b.almarai
    },
    {
      packs: ["neutral"],
      headingFont: b.neuton,
      paragraphFont: b.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: b.newsreader,
      paragraphFont: b.ptserif
    },
    {
      packs: ["neutral"],
      headingFont: b.ovo,
      paragraphFont: b.almarai
    },
    {
      packs: ["neutral"],
      headingFont: b.epilogue,
      paragraphFont: b.pontanosans
    }
  ],
  modern: [
    {
      packs: ["modern"],
      headingFont: b.asap,
      paragraphFont: b.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: b.comfortaa,
      paragraphFont: b.worksans
    },
    {
      packs: ["modern"],
      headingFont: b.sansita,
      paragraphFont: b.nunitosans
    },
    {
      packs: ["modern"],
      headingFont: b.rubik,
      paragraphFont: b.nunitosans
    }
  ],
  adventurous: [
    {
      packs: ["adventurous"],
      headingFont: b.climatecrisis,
      paragraphFont: b.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: b.ultra,
      paragraphFont: b.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: b.modak,
      paragraphFont: b.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: b.modak,
      paragraphFont: b.familjengrotesk
    },
    {
      packs: ["adventurous"],
      headingFont: b.goblinone,
      paragraphFont: b.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: b.delagothicone,
      paragraphFont: b.worksans
    },
    {
      packs: ["adventurous"],
      headingFont: b.archivoblack,
      paragraphFont: b.archivo
    },
    {
      packs: ["adventurous"],
      headingFont: b.coiny,
      paragraphFont: b.familjengrotesk
    }
  ]
}, us = Object.values(gn).flatMap((e) => e), oe = (e, t) => gn[e][t], bn = {
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
}, ps = Object.values(bn).flatMap((e) => e), ae = (e, t) => bn[e][t], Yt = [
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
    color: re("vibrant", 9),
    buttons: ne("vibrant", 8),
    form: ae("vibrant", 6),
    fonts: oe("vibrant", 11)
  },
  {
    pack: "vibrant",
    name: "vibrant_04",
    color: re("vibrant", 10),
    buttons: ne("vibrant", 8),
    form: ae("vibrant", 6),
    fonts: oe("vibrant", 12)
  },
  {
    pack: "vibrant",
    name: "vibrant_03",
    color: re("vibrant", 8),
    buttons: ne("vibrant", 8),
    form: ae("vibrant", 6),
    fonts: oe("vibrant", 10)
  },
  {
    pack: "vibrant",
    name: "vibrant_01",
    color: re("vibrant", 0),
    buttons: ne("vibrant", 0),
    form: ae("vibrant", 0),
    fonts: oe("vibrant", 0)
  },
  {
    pack: "vibrant",
    name: "vibrant_02",
    color: re("vibrant", 1),
    buttons: ne("vibrant", 1),
    form: ae("vibrant", 4),
    fonts: oe("vibrant", 2)
  },
  {
    pack: "neutral",
    name: "neutral_01",
    color: re("neutral", 0),
    buttons: ne("neutral", 0),
    form: ae("neutral", 0),
    fonts: oe("neutral", 0)
  },
  {
    pack: "neutral",
    name: "neutral_02",
    color: re("neutral", 1),
    buttons: ne("neutral", 1),
    form: ae("neutral", 3),
    fonts: oe("neutral", 2)
  },
  {
    pack: "modern",
    name: "modern_01",
    color: re("modern", 0),
    buttons: ne("modern", 0),
    form: ae("modern", 0),
    fonts: oe("modern", 0)
  },
  {
    pack: "modern",
    name: "modern_02",
    color: re("modern", 1),
    buttons: ne("modern", 1),
    form: ae("modern", 3),
    fonts: oe("modern", 2)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: re("minimal", 0),
    buttons: ne("minimal", 0),
    form: ae("minimal", 0),
    fonts: oe("minimal", 0)
  },
  {
    pack: "minimal",
    name: "minimal_01",
    color: re("minimal", 2),
    buttons: ne("minimal", 0),
    form: ae("minimal", 4),
    fonts: oe("minimal", 2)
  },
  {
    pack: "adventurous",
    name: "adventurous_01",
    color: re("adventurous", 0),
    buttons: ne("adventurous", 0),
    form: ae("adventurous", 0),
    fonts: oe("adventurous", 0)
  },
  {
    pack: "adventurous",
    name: "adventurous_02",
    color: re("adventurous", 3),
    buttons: ne("adventurous", 1),
    form: ae("adventurous", 3),
    fonts: oe("adventurous", 4)
  }
], Xt = /* @__PURE__ */ new Set();
function ms(e) {
  if (!e || Xt.has(e)) return;
  Xt.add(e);
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = `https://fonts.googleapis.com/css2?family=${e}&display=swap`, document.head.appendChild(t);
}
function hs(e) {
  e.forEach((t) => {
    t.googleFontsQuery && ms(t.googleFontsQuery);
  });
}
function Ds() {
  const [e, t] = v({ ...Yt[0] }), { themePacks: n, fontPacks: r, colorPacks: i, buttonPacks: a, formPacks: l } = k(() => {
    const s = e.pack;
    return {
      themePacks: Yt,
      fontPacks: us.filter((d) => d.packs.includes(s)),
      colorPacks: ds.filter((d) => d.packs.includes(s)),
      buttonPacks: cs.filter((d) => d.packs.includes(s)),
      formPacks: ps.filter((d) => d.packs.includes(s))
    };
  }, [e]), c = C((s) => {
    t({ ...s });
  }, []);
  return A(() => {
    const { color: s, fonts: d } = e, u = document.body;
    u.style.setProperty("--background-color", s.palette[s.background]), u.style.setProperty("--color-heading", s.palette[s.headings]), u.style.setProperty(
      "--color-paragraph",
      s.palette[s.body !== void 0 ? s.body : s.headings]
    ), u.style.setProperty("--font-family-heading", d.headingFont.style.fontFamily), u.style.setProperty("--font-family-body", d.paragraphFont.style.fontFamily), u.style.setProperty(
      "--font-family-header",
      d.headerFont ? d.headerFont.style.fontFamily : d.paragraphFont.style.fontFamily
    );
    const p = lt(s.palette);
    Object.entries(p).forEach(([f, m]) => {
      u.style.setProperty(f, m);
    });
    const h = [d.headingFont, d.paragraphFont];
    d.headerFont && h.push(d.headerFont), hs(h);
  }, [e]), k(
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
  Ms as AddSectionDivider,
  Rn as AlignTopIcon,
  _n as AnimatedSearchIcon,
  ks as BlockAnnotationBar,
  Ss as BlockHover,
  On as BlockPicker,
  Ce as COLOR_KEYS,
  vs as ChevronDownIcon,
  Fn as CodeIcon,
  Ln as DesktopIcon,
  Sn as DuplicateIcon,
  zn as EditHeaderButton,
  Kt as EditIcon,
  tt as FE_COLUMNS,
  xt as FE_COL_GAP,
  nt as FE_MARGIN,
  Re as FE_ROW_GAP,
  Fs as FluidEngineGrid,
  Nn as GlobalContentGlyphIcon,
  Ls as GridOverlay,
  Ts as HANDLE_POSITIONS,
  ws as HeaderSectionWrapper,
  An as MobileIcon,
  Cn as PinIcon,
  In as PlayIcon,
  Qe as PlusIcon,
  Es as PortaledAnnotationBar,
  Mn as RedoIcon,
  ys as SearchGlyphIcon,
  xs as SectionWrapper,
  Bs as SiteThemes,
  mn as SiteThemesContext,
  Cs as SiteToolbar,
  Rs as ThemeProvider,
  Qt as Tooltip,
  En as UndoIcon,
  at as feBrickHeight,
  wt as feBrickWidth,
  qn as feRowsHeight,
  _s as feSnapHeight,
  Yn as feSnapLeft,
  Zn as feSnapTop,
  ne as getButtonPack,
  re as getColorPack,
  oe as getFontPack,
  ae as getFormPack,
  Is as getRosettaTheme,
  b as googleFonts,
  Hs as hex,
  hs as loadFontsForTheme,
  ms as loadGoogleFont,
  lt as makeColorVariables,
  Ns as rosetta,
  ar as rosettaDark,
  tn as rosettaLight,
  cs as themeButtons,
  ds as themeColors,
  us as themeFonts,
  ps as themeForms,
  Yt as themePacks,
  tr as useBlockDrag,
  it as useDelayedActiveState,
  As as usePanelDrag,
  Ds as useSiteThemes,
  Ee as useSiteThemesContext,
  Ne as useTemporaryActiveState,
  en as useTooltip
};
//# sourceMappingURL=index.js.map
