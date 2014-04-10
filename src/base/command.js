var Judge      = require("./judge"),
    ObjectBase = require("./object");

function CommandBase() {
  ObjectBase.apply(this, arguments);

  var evidence    = arguments.length > 0,
      actionTrue  = arguments[0],
      actionFalse = function() { return false; };

  this.execute = function() {
    return (new Judge(evidence, actionTrue, actionFalse)).verify();
  };
};

module.exports = CommandBase;
