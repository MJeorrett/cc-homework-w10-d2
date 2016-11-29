var assert = require('assert');
var itemFactory = require('../item_factory');

describe( "ItemFactory", function() {

  var bananas = null;

  beforeEach( function() {

    bananas = itemFactory.getItem( "Bananas" );
  });

  it( "should return an object when passed name is recognised", function() {
    var actual = itemFactory.getItem( "Bananas" );
    assert.equal( "object", typeof( actual ) );
  });

  it( "should return 'undefined' when name is not recognised", function() {
    var actual = itemFactory.getItem( "gobbledegook" );
    assert.equal( "undefined", typeof( actual ) );
  });

  it( "should return object with name 'Bananas' when asked for Bananas", function() {
    assert.equal( "Bananas", bananas.name );
  });

  it( "should return object with price 0.99 when asked for Bananas", function() {
    assert.equal( 0.99, bananas.price );
  })

  it( "should return object with name 'Cheese' and price 5.00 when asked for 'Cheese'", function() {
    var cheese = itemFactory.getItem( "Cheese" );
    assert.equal( "Cheese", cheese.name );
    assert.equal( 5.00, cheese.price );
  });

  it( "should return object with name 'Bacon' and price 3.50 when asked for 'Bacon'", function() {
    var cheese = itemFactory.getItem( "Bacon" );
    assert.equal( "Bacon", cheese.name );
    assert.equal( 3.50, cheese.price );
  });

  it( "should return object with name 'Sausages' and price 4.15 when asked for 'Sausages'", function() {
    var cheese = itemFactory.getItem( "Sausages" );
    assert.equal( "Sausages", cheese.name );
    assert.equal( 4.15, cheese.price );
  });

  it( "should return object with name 'Turkey' and price 12.99 when asked for 'Turkey'", function() {
    var cheese = itemFactory.getItem( "Turkey" );
    assert.equal( "Turkey", cheese.name );
    assert.equal( 12.99, cheese.price );
  });
});
