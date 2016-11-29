var arrayIncludes = require('array-includes')

var itemFactory = {
  itemNames: [ "Bananas" ],
  itemCosts: {
    Bananas: 0.99
  },
  getItem: function( itemName ) {

    var item = undefined;

    if ( arrayIncludes( this.itemNames, itemName ) ) {

      var itemCost = this.itemCosts[itemName];

      item = {
        name: itemName,
        price: itemCost
      };
    }

    return item;
  }
};

module.exports = itemFactory;
