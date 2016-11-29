function sumItemsWithBogOf( items ) {
  var total = 0.00;

  var paidForItemNames = [];
  var indexOfItem = null;

  for ( var item of items ) {

    indexOfItem = paidForItemNames.indexOf( item.name );

    if ( indexOfItem === -1 ) {

      total += item.price;
      paidForItemNames.push( item.name );

    } else {

      paidForItemNames.splice( indexOfItem, 1 );
    }
  }

  return total;
}

var discounter = {
  discountThreshold: 20.00,
  bulkDiscountPercentage: 0.10,
  loyaltyDiscountPercentage: 0.05,
  applyLoyaltyDiscount: false,
  apply: function( total ) {

    if ( total > this.discountThreshold ) {
      total -= total * this.bulkDiscountPercentage;
    }

    if ( this.applyLoyaltyDiscount ) {
      total -= total * this.loyaltyDiscountPercentage;
    }

    return total;
  }
}

var shoppingBasket = {
  items: [],
  totalPrice: function( loyaltyCardHeld ) {

    var total = sumItemsWithBogOf( this.items );
    discounter.applyLoyaltyDiscount = loyaltyCardHeld;
    total = discounter.apply( total );

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
