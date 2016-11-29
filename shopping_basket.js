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
  },
  removeItemByName: function( itemName ) {

    var item = null;
    var itemIndex = -1;

    for ( var i = 0; i < this.items.length; i++ ) {

      item = this.items[i];
      if ( item.name === itemName ) {

        itemIndex = i;
      }
    }

    this.items.splice( itemIndex, 1 );
  }
};

module.exports = shoppingBasket;
