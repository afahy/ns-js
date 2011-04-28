(function(global) {
    function _add(obj, base) {
        return base[obj] || (base[obj] = {});
    }

    function _extend(base, obj) {
        for (data in obj) {
            if (obj.hasOwnProperty(data)) {
                base[data] = obj[data];
            }
        }
    }

    function _generate(ns, base, data) {
        var ns_split;
        if (typeof ns !== 'string') { throw "_namespace :: invalid argument not a string value"; }
        if (typeof base === 'undefined') { base = global; }
        ns_split = ns.split('.');

        for (var i = 0, j = ns_split.length; i < j; i++) {
            base = _add(ns_split[i], base);
        }
        if (data) { _extend(base, data); }
    }

    global._package = function(ns, data, base) {
        _generate(ns, base, data);
    }
    global._namespace = function(ns, base) {
        _generate(ns, base, null);
    }

}(this));

