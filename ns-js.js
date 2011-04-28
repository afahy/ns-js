var _namespace = (function(global) {
    function _add(obj, base) {
        return base[obj] || (base[obj] = {});
    }
    function _override(obj, base) {
        for (data in obj) {
            if (obj.hasOwnProperty(data)) {
                base[data] = obj[data];
            }
        }
    }

    return function(ns, base) {
        var ns_split;
        if (typeof ns !== 'string') { throw "_namespace :: invalid argument not a string value"; }
        if (typeof base === 'undefined') { base = global; }
        ns_split = ns.split('.');

        for (var i = 0, j = ns_split.length; i < j; i++) {
            base = _add(ns_split[i], base);
        }
    }

}(this));

