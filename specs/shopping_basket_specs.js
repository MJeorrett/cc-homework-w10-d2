var assert = require('assert');
var shoppingBasket = require('../shopping_basket');

describe( "Shopping Basket", function() {

  it( "should start with totalPrice of 0.00", function() {
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  });

  it( "should start with itemCount of 0", function() {
    assert.equal( 0, shoppingBasket.itemCount() );
  });
});
