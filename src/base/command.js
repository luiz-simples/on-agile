var ObjectBase = require('./object');

function CommandBase(blockExecution) {
  ObjectBase.apply(this, arguments);

  this.execute = function() {
    return blockExecution();
  }
};

module.exports = CommandBase;
