var assert = require('assert');
var shoppingBasket = require('../shopping_basket');
var itemFactory = require('../item_factory');

describe( "Shopping Basket", function() {

  var bananas = null;
  var cheese = null;
  var bacon = null;
  var sausages = null;
  var turkey = null;

  beforeEach( function() {
    bananas = itemFactory.getItem( "Bananas" );
    cheese = itemFactory.getItem( "Cheese" );
    bacon = itemFactory.getItem( "Bacon" );
    sausages = itemFactory.getItem( "Sausages" );
    turkey = itemFactory.getItem( "Turkey" );
  });

  it( "should start with totalPrice of 0.00", function() {
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  });

  it( "should start with itemCount of 0", function() {
    assert.equal( 0, shoppingBasket.itemCount() );
  });

  it( "should have 0 itemCount and 0 totalPrice when emptied", function() {
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    shoppingBasket.empty();
    assert.equal( 0, shoppingBasket.itemCount() );
    assert.equal( 0.00, shoppingBasket.totalPrice() );
  });

  it( "should increase itemCount when item is added", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    assert.equal( 1, shoppingBasket.itemCount() );
  });

  it( "should have totalPrice of 0.99 after adding bananas", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    assert.equal( 0.99, shoppingBasket.totalPrice() );
  });

  it( "should have totalPrice 5.99 and itemCount 2 after adding bananas and cheese", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    assert.equal( 5.99, shoppingBasket.totalPrice() );
    assert.equal( 2, shoppingBasket.itemCount() );
  });

  it( "should discount by 5% when true passed to totalPrice", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    assert.equal( 5.69, shoppingBasket.totalPrice( true ) );
  });

  it( "should decrease totalPrice and itemCount when item removed successfully", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );

    shoppingBasket.removeItemByName( "Bananas" );
    assert.equal( 5.00, shoppingBasket.totalPrice() );
    assert.equal( 1, shoppingBasket.itemCount() );
  });

  it( "should not decrease totalPrice or itemCount when item removed is not found", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );

    shoppingBasket.removeItemByName( "Turkey" );
    assert.equal( 5.99, shoppingBasket.totalPrice() );
    assert.equal( 2, shoppingBasket.itemCount() );
  });

  it( "should apply 10% discount when total price is over 20", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    shoppingBasket.addItem( bacon );
    shoppingBasket.addItem( sausages );
    shoppingBasket.addItem( turkey );

    assert.equal( 23.97, shoppingBasket.totalPrice() );
  });

  it( "should apply loyalty discount and bulk discount", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    shoppingBasket.addItem( bacon );
    shoppingBasket.addItem( sausages );
    shoppingBasket.addItem( turkey );

    assert.equal( 22.77, shoppingBasket.totalPrice( true ) );
  });

  it( "should not count second item in totalPrice when two items with same name are added", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    assert.equal( 0.99, shoppingBasket.totalPrice() );
  });

  it( "should charge for two items when three of the same type are added", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    assert.equal( 1.98, shoppingBasket.totalPrice() );
  });

  it( "should calculate loyalty after bogof", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    assert.equal( 1.88, shoppingBasket.totalPrice( true ) );
  });

  it( "should calculate complex basket", function() {
    shoppingBasket.empty();
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( bananas );
    shoppingBasket.addItem( cheese );
    shoppingBasket.addItem( cheese );
    shoppingBasket.addItem( cheese );
    shoppingBasket.addItem( bacon );
    shoppingBasket.addItem( sausages );
    shoppingBasket.addItem( turkey );

    assert.equal( 27.04, shoppingBasket.totalPrice( true ) );
  });
});
