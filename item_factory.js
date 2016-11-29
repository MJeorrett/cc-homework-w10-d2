var arrayIncludes = require('array-includes')

var itemFactory = {
  itemNames: [ "Bananas", "Cheese", "Bacon", "Sausages", "Turkey" ],
  itemCosts: {
    Bananas: 0.99,
    Cheese: 5.00,
    Bacon: 3.50,
    Sausages: 4.15,
    Turkey: 12.99
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
