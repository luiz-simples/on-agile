var ObjectBase = require('../../../src/base/object');
var oneAssert = 1
var nameObjectBase = "ObjectBase"
var nameClassInherited = "ClassInherited"

exports.ObjectBase = {
  setUp: function (callback) {
    this.objectBase = new ObjectBase();
    callback();
  },

  "Should return the class name 'ObjectBase' when not extend ObjectBase class": function(test) {
    test.expect(oneAssert);
    test.equal(this.objectBase.className(), nameObjectBase);
    test.done();
  },

  "Should return itself class name when extend ObjectBase class": function(test) {
    function ClassInherited() {
      ObjectBase.apply(this, arguments);
    };

    var classInherited = new ClassInherited();

    test.expect(oneAssert);
    test.equal(classInherited.className(), nameClassInherited);
    test.done();
  }
};
