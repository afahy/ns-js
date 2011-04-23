var _namespace = (function(global) {
    var _add = function(next, obj) {
        if (obj[next]) { return obj[next]; }
        return obj[next] = {};
    }
        
    return function(ns, base) {
        var objs = ns.split('.');
        if (typeof base === 'undefined') { base = global; }

        for (var i = 0, j = objs.length; i < j; i++) {
            base = _add(objs[i], base);
        }
    }

}(this));

