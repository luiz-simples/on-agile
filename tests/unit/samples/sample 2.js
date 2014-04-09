exports["Test Something 1"] = function(test) {
  test.expect(2);
  test.ok(true);
  test.ok(true);
  test.done();
};

exports["Test Something 2"] = function(test) {
  test.expect(3);
  test.ok(true);
  test.ok(true);
  test.ok(true);
  test.done();
};
