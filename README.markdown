Function should create a namespaced object if it does not already exist

`_namespace(String Namespace [, Object Base])`

  _namespace('foo.bar');
  // > foo.bar

  _namespace('baz', foo.bar);
  // > foo.bar.baz
