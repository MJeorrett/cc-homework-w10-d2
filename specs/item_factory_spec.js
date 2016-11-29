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
});
