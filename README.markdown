# ns-js :: A basic routine for JavaScript namespace declaration #

The `_namespace` function should create a namespaced object if it does not already exist

- Accepts a string for the namespace to create
- You may also provide an optional base object to extend (otherwise, it extends global ns)

## How to use: ##

`_namespace(String Namespace [, Object Base])`

    _namespace('foo.bar');
    // > foo.bar

    _namespace('baz', foo.bar);
    // > foo.bar.baz

## ##