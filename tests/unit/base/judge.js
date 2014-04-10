var Judge = require('../../../src/base/judge');
var oneHit = 1
var yes = true
var nothing = false

exports.Judge = {
  "Should return yes when call method execute block true": function(test) {
    var judge = new Judge(yes, function() { return yes; }, function() { return nothing; });

    test.expect(oneHit);
    test.ok(judge.verify());
    test.done();
  },

  "Should return nothing when call method execute block false": function(test) {
    var judge = new Judge(nothing, function() { return yes; }, function() { return nothing; });

    test.expect(oneHit);
    test.equals(judge.verify(), nothing);
    test.done();
  }
};
