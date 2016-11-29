var shoppingBasket = {
  items: [],
  totalPrice: function() {
    var total = 0.00;

    for ( var item of this.items ) {
      total += item.price;
    }

    return total;
  },
  itemCount: function() {
    return this.items.length;
  },
  addItem: function( itemToAdd ) {
    this.items.push( itemToAdd );
  }
};

module.exports = shoppingBasket;
