var assert = require('assert');
var shoppingBasket = require('../shopping_basket');
var itemFactory = require('../item_factory');

describe( "Shopping Basket", function() {

  it( "should start with totalPrice of 0.00", function() {
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  });

  it( "should start with itemCount of 0", function() {
    assert.equal( 0, shoppingBasket.itemCount() );
  });

  it( "should increase itemCount when item is added", function() {
    var bananas = itemFactory.getItem( "Bananas" );
    shoppingBasket.addItem( bananas );
    assert.equal( 1, shoppingBasket.itemCount() );
  });

  it( "should have totalPrice of 0.99 after adding bananas", function() {
    assert.equal( 0.99, shoppingBasket.totalPrice() );
  });

  it( "totalPrice is 5.99 and itemCont is 2 after adding Cheese", function() {
    var cheese = itemFactory.getItem( "Cheese" );
    shoppingBasket.addItem( cheese );
    assert.equal( 5.99, shoppingBasket.totalPrice() );
    assert.equal( 2, shoppingBasket.itemCount() );
  });
});
