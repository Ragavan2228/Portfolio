let o;
var w = (r) => {
    if (!o) {
        let e = function(t, n) {
            return r.createElement("svg", {width: "100%", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", ref: n, ...t}, r.createElement("path", {d: "M15.5 7L12 10.5 8.5 7M15.5 13L12 16.5 8.5 13", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}));
        };
        o = r.forwardRef(e);
    }
    return o;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, w as default };