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

  it( "should return 5.99 from totalPrice after adding cheese", function() {
    var cheese = itemFactory.getItem( "Cheese" );
    shoppingBasket.addItem( cheese );
    assert.equal( 5.99, shoppingBasket.totalPrice() );
  });

  it( "should have itemCount of 2 after addding cheese" , function() {
    assert.equal( 2, shoppingBasket.itemCount() );
  });

  it( "should return 5.69 from totalPrice when passed true", function() {
    assert.equal( 5.69, shoppingBasket.totalPrice( true ) );
  });

  it( "should decrease itemCount when item removed successfully", function() {
    shoppingBasket.removeItemByName( "Bananas" );
    assert.equal( 1, shoppingBasket.itemCount() );
  });

  it( "should decrease totalPrice when item removed successfully", function() {
    assert.equal( 5.00, shoppingBasket.totalPrice() );
  });

  it( "should have 0 itemCount and 0 totalPrice when emptied", function() {
    shoppingBasket.empty();
    assert.equal( 0, shoppingBasket.itemCount() );
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  })
});
