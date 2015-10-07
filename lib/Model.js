var DataStore = require('./DataStore');

function Model(schema) {

  this.schema = schema;
  this.id = null;

  for (var key in schema) {

    this[key] = null;

  }

  if (!DataStore.store.hasOwnProperty('Model')) {

    DataStore.store.Model = [];

  }

}

Model.getNextId = function() {

  var highest = null;
  var length = DataStore.store[this.name].length;

  for (var i = 0; i < length; i++ ) {

    if (DataStore.store[this.name].id[i] > highest) {

      highest = DataStore.store[this.name].id[i];

    }

  }

  return highest + 1;

};

Model.find = function(id) {

  var collection = DataStore.store[this.name];

  //console.log(collection);

  for (var i = 0; i < collection.length; i++) {

    if (collection[i].id === id) {

      return collection[i].id;

    }

  }

  return null;

};

Model.prototype.save = function() {

  if (this.id === null) {

    console.log(this.constructor.getNextId());
    this.id = this.constructor.getNextId();

  }

};

Model.prototype.destroy = function(id) {

  if (id !== null) {

    id = null;

  }

};

module.exports = Model;
