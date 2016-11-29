var assert = require('assert');
var shoppingBasket = require('../shopping_basket');
var itemFactory = require('../item_factory');

describe( "Shopping Basket", function() {

  var bananas = null;

  beforeEach( function() {
    bananas = itemFactory.getItem( "Bananas" );
  });

  it( "should start with totalPrice of 0.00", function() {
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  });

  it( "should start with itemCount of 0", function() {
    assert.equal( 0, shoppingBasket.itemCount() );
  });

  it( "should increase itemCount when item is added", function() {
    shoppingBasket.addItem( bananas );
    assert.equal( 1, shoppingBasket.itemCount() );
  });

  it( "should have totalPrice of 0.99 after adding bananas", function() {
    assert.equal( 0.99, shoppingBasket.totalPrice() );
  });
});
