function ObjectBase() {
  this.className = function() {
    return this.constructor.name;
  }
}

module.exports = ObjectBase
