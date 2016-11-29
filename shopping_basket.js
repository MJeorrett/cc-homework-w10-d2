var shoppingBasket = {
  items: [],
  totalPrice: function( applyLoyaltyDiscount ) {
    var total = 0.00;

    for ( var item of this.items ) {
      total += item.price;
    }

    if ( applyLoyaltyDiscount ) {

      total = (total * 0.95).toFixed( 2 );
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
