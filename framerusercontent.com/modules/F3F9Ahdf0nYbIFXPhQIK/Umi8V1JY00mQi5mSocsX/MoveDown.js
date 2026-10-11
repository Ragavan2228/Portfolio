let r;
var f = (o) => {
    if (!r) {
        let e = function(n, t) {
            return o.createElement("svg", {width: "100%", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", ref: t, ...n}, o.createElement("path", {d: "M12 6a2 2 0 110-4 2 2 0 010 4zM12 9v13m0 0l3-3m-3 3l-3-3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round"}));
        };
        r = o.forwardRef(e);
    }
    return r;
};
const __FramerMetadata__ = {exports: {default: {type: "reactComponent", slots: [], annotations: {framerContractVersion: "1"}}, __FramerMetadata__: {type: "variable"}}};
export { __FramerMetadata__, f as default };