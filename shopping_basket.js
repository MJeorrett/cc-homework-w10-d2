var shoppingBasket = {
  items: [],
  totalPrice: function() {
    return 0.00;
  },
  itemCount: function() {
    return this.items.length;
  },
  addItem: function( itemToAdd ) {
    this.items.push( itemToAdd );
  }
};

module.exports = shoppingBasket;
