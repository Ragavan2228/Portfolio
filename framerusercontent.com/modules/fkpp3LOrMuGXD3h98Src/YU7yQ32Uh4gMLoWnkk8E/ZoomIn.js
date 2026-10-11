let r;
var f = (o) => {
    if (!r) {
        let e = function(n, t) {
            return o.createElement("svg", {width: "100%", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", ref: t, ...n}, o.createElement("path", {d: "M9 11h2m2 0h-2m0 0V9m0 2v2M16 16l4 4M4 11a7 7 0 1014 0 7 7 0 00-14 0z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}));
        };
        r = o.forwardRef(e);
    }
    return r;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, f as default };