var CommandBase = require('../../../src/base/command');
var oneAssert = 1
var yes = true
var nothing = false

exports.CommandBase = {
  "Should return yes when call method execute block": function(test) {
    var commandBase = new CommandBase(function() {
      return yes;
    });

    test.expect(oneAssert);
    test.ok(commandBase.execute());
    test.done();
  },

  "Should return false when call method execute block": function(test) {
    var commandBase = new CommandBase(function() {
      return nothing;
    });

    test.expect(oneAssert);
    test.equal(commandBase.execute(), nothing);
    test.done();
  },

  "should perform the action when extend Command class": function(test) {
    function TempAction(dataAction) {
      CommandBase.call(this, function() {
        return dataAction;
      });
    };

    var randomData = Date.now();
    var tempAction = new TempAction(randomData);

    test.expect(oneAssert);
    test.equal(tempAction.execute(), randomData);
    test.done();
  }
};
