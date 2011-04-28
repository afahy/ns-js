(function(global, undefined){
  var singleLevel = 'foo',
      multiLevel = 'foo.bar.baz.bing';

  function getBaseObj() {
    return { bang : {} }
  }
  function getDeepObj() {
    return { bash : { bang : { booze : { bam : {} } } } }
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
    var base = getBaseObj();
    _namespace(multiLevel, base);

    notEqual(base.foo.bar.baz.bing, undefined, "Object exists in base object");
    delete base;
  });

  test("Will not override properties in base object", function() {
    var base = getBaseObj();
    _namespace(multiLevel, base);

    notEqual(base.bang, undefined, "Previously-defined property exists in base object");
    delete base;
  });

  module("_package");

  test("Can crete a package from one namespace level", function() {
    _package(singleLevel, { bar: 'baz' });

    equal(foo.bar, 'baz', "Single-level package exists");
    delete foo;
  });

  test("Can crete a package from multiple namespace levels", function() {
    _package(multiLevel, { bash: 'bang' });

    equal(foo.bar.baz.bing.bash, 'bang', "Multi-level package exists");
    delete foo;
  });

  test("Can crete a package given a deep object reference", function() {
    _package(multiLevel, getDeepObj());

    notEqual(foo.bar.baz.bing.bash.bang.booze.bam, undefined, "Multi-level package exists");
    delete foo;
  });

}(this));