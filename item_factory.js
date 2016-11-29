var arrayIncludes = require('array-includes')

var itemFactory = {
  itemNames: [ "Bananas" ],
  getItem: function( itemName ) {

    var item = undefined;

    if ( arrayIncludes( this.itemNames, itemName ) ) {

      item = {
        name: itemName
      };
    }

    return item;
  }
};

module.exports = itemFactory;
