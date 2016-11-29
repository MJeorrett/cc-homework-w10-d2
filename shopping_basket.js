var shoppingBasket = {
  items: [],
  totalPrice: function( applyLoyaltyDiscount ) {
    var total = 0.00;

    var paidForItemNames = [];
    var indexOfItem = null;

    for ( var item of this.items ) {

      indexOfItem = paidForItemNames.indexOf( item.name );

      if ( indexOfItem === -1 ) {

        total += item.price;
        paidForItemNames.push( item.name );

      } else {

        paidForItemNames.splice( indexOfItem, 1 );
      }
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

    if ( itemIndex !== -1 ) {
      
      this.items.splice( itemIndex, 1 );
    }
  },
  empty: function() {
    this.items = [];
  }
};

module.exports = shoppingBasket;
