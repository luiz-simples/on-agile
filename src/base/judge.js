var ObjectBase = require("./object");

function Judge(evidence, actionTrue, actionFalse) {
  var result = evidence ? actionTrue() : actionFalse();

  this.verify = function() {
    return result;
  };

  ObjectBase.apply(this, arguments);
};

module.exports = Judge;
