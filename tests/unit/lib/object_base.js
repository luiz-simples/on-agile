var ObjectBase = require('../../../src/lib/object_base');

exports.ObjectBase = {
  setUp: function (callback) {
    this.objectBase = new ObjectBase();
    callback();
  },

  tearDown: function (callback) {
    this.objectBase = null;
    callback();
  },

  "Should return the class name 'ObjectBase' when not inherit another class.": function(test) {
    test.expect(1);
    test.equal(this.objectBase.className(), "ObjectBase");
    test.done();
  },

  "Should return itself class name  when inherit class ObjectBase": function(test) {
    function ClassInherited() {
      ObjectBase.apply(this, arguments);
    };

    var classInherited = new ClassInherited();

    test.expect(1);
    test.equal(classInherited.className(), "ClassInherited");
    test.done();
  }
};
