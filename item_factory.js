var arrayIncludes = require('array-includes')

var itemFactory = {
  itemNames: [ "Bananas", "Cheese" ],
  itemCosts: {
    Bananas: 0.99,
    Cheese: 5.00
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
