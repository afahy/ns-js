# ns-js :: A basic routine for JavaScript namespace declaration #

## _namespace ##

The `_namespace` function should create a namespaced object if it does not already exist

- Accepts a string for the namespace to create
- You may also provide an optional base object to extend (otherwise, it extends global ns)

## How to use: ##

`_namespace(String Namespace [, Object Base])`

```js
_namespace('foo.bar');
// > foo.bar

_namespace('baz', foo.bar);
// > foo.bar.baz
```
## _package ##

The `_package` function should create or navigate a namespace and attach an object (package) at its terminus.

- Accepts a string for the namespace to which it should attach
- Accepts an object reference to populate the namespace
- You may also provide an optional base object, per _namespace

## How to use: ##

`_package(String Namespace, Object Data [, Object Base])`

```js
_package('foo.bar', { baz: true });
// > foo.bar.baz [true]

_package('bar.baz', { bing: true }, foo);
// > foo.bar.baz.bing [true]
```

