var shoppingBasket = {
  items: [],
  totalPrice: function( applyLoyaltyDiscount ) {
    var total = 0.00;

    for ( var item of this.items ) {
      total += item.price;
    }

    if ( total > 20.00 ) {

      total = total * 0.9;
    }

    if ( applyLoyaltyDiscount ) {

      total = (total * 0.95);
    }

    return total.toFixed( 2 );
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
  },
  empty: function() {
    this.items = [];
  }
};

module.exports = shoppingBasket;
