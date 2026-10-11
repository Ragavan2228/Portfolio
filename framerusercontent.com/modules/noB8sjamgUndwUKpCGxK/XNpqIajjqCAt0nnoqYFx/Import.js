let o;
var f = (r) => {
    if (!o) {
        let e = function(t, n) {
            return r.createElement("svg", {width: "100%", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", ref: n, ...t}, r.createElement("path", {d: "M4 13v6a2 2 0 002 2h12a2 2 0 002-2v-6M12 3v12m0 0l-3.5-3.5M12 15l3.5-3.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}));
        };
        o = r.forwardRef(e);
    }
    return o;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, f as default };