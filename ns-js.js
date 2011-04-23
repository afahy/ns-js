var _namespace = (function(global) {
    var _add = function(next, obj) {
        if (obj[next]) { return obj[next]; }
        return obj[next] = {};
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

