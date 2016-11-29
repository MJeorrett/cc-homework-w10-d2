var assert = require('assert');
var itemFactory = require('../item_factory');

describe( "ItemFactory", function() {

  var bananas = null;

  beforeEach( function() {

    bananas = itemFactory.getItem( "Bananas" );
  });

  it( "bananas should have name bananas", function() {

    assert.equal( "Bananas", bananas.name );
  });
});
