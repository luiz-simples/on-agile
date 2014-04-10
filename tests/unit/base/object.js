var ObjectBase = require('../../../src/base/object');
var oneHit = 1
var twoHits = 2
var nameObjectBase = "ObjectBase"
var nameClassInherited = "ClassInherited"

exports.ObjectBase = {
  setUp: function (callback) {
    this.objectBase = new ObjectBase();
    callback();
  },

  "Should be type Object and ObjectBase": function(test) {
    test.expect(twoHits);
    test.ok(this.objectBase instanceof Object);
    test.ok(this.objectBase instanceof ObjectBase);
    test.done();
  },

  "Should return the class name 'ObjectBase' when not extend ObjectBase class": function(test) {
    test.expect(oneHit);
    test.equal(this.objectBase.className(), nameObjectBase);
    test.done();
  },

  "Should return itself class name when extend ObjectBase class": function(test) {
    function ClassInherited() {
      ObjectBase.apply(this, arguments);
    };

    var classInherited = new ClassInherited();

    test.expect(oneHit);
    test.equal(classInherited.className(), nameClassInherited);
    test.done();
  }
};
