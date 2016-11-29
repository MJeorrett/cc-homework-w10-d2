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

  it( "bananas should have name bananas", function() {

    assert.equal( "Bananas", bananas.name );
  });
});
