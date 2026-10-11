let o;
var s = (r) => {
    if (!o) {
        let e = function(n, t) {
            return r.createElement("svg", {width: "100%", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", ref: t, ...n}, r.createElement("path", {d: "M19 13.5L15.5 17 12 13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}), r.createElement("path", {d: "M15.5 17v-6a4 4 0 00-4-4h-7", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}));
        };
        o = r.forwardRef(e);
    }
    return o;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, s as default };