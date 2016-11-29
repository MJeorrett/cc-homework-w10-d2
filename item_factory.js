var arrayIncludes = require('array-includes')

var itemFactory = {
  items: {
    Bananas: { name: "Bananas", price: 0.99, bogof: false },
    Cheese: { name: "Cheese", price: 5.00 },
    Bacon: { name: "Bacon", price: 3.50 },
    Sausages: { name: "Sausages", price: 4.15 },
    Turkey: { name: "Turkey", price: 12.99 }
  },
  getItem: function( itemName ) {

    var item = undefined;

    if ( this.items.hasOwnProperty( itemName ) ) {

      item = this.items[ itemName ];
    }

    return item;
  }
};

module.exports = itemFactory;
