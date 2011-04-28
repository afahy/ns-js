(function(global, undefined){
  var singleLevel = 'foo',
      multiLevel = 'foo.bar.baz.bing';

  function getBaseObj() {
    return { bang : {} }
  }

  module("_namespace");

  test("Can create one namespace level", function() {
    _namespace(singleLevel);

    notEqual(foo, undefined, "Single-level object exists");
    delete foo;
  });

  test("Can create multiple namespace levels", function() {
    _namespace(multiLevel);

    notEqual(foo.bar.baz.bing, undefined, "Multi-level object exists");
    delete foo;
  });

  test("Can pass in another object as base object", function() {
    base = getBaseObj();
    _namespace(multiLevel, base);

    notEqual(base.foo.bar.baz.bing, undefined, "Object exists in base object");
    delete base;
  });

  test("Will not override properties in base object", function() {
    base = getBaseObj();
    _namespace(multiLevel, base);

    notEqual(base.bang, undefined, "Previously-defined property exists in base object");
    delete base;
  });

}(this));