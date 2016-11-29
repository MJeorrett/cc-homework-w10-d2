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

  it( "should return object with bogof = false when asked for Bananas", function() {
    var result = bananas.bogof;
    assert.equal( 'boolean', typeof( result ) );
    assert.equal( false, result );
  });

  it( "should return object with name 'Cheese', bogof = true and price 5.00 when asked for 'Cheese'", function() {
    var cheese = itemFactory.getItem( "Cheese" );
    assert.equal( "Cheese", cheese.name );
    assert.equal( 5.00, cheese.price );
    assert.equal( 'boolean', typeof( cheese.bogof ) );
    assert.equal( true, cheese.bogof );
  });

  it( "should return object with name 'Bacon', bogof = true and price 3.50 when asked for 'Bacon'", function() {
    var bacon = itemFactory.getItem( "Bacon" );
    assert.equal( "Bacon", bacon.name );
    assert.equal( 3.50, bacon.price );
    assert.equal( 'boolean', typeof( bacon.bogof ) );
    assert.equal( true, bacon.bogof );
  });

  it( "should return object with name 'Sausages', bogof = false and price 4.15 when asked for 'Sausages'", function() {
    var sausages = itemFactory.getItem( "Sausages" );
    assert.equal( "Sausages", sausages.name );
    assert.equal( 4.15, sausages.price );
    assert.equal( 'boolean', typeof( sausages.bogof ) );
    assert.equal( false, sausages.bogof );
  });

  it( "should return object with name 'Turkey', bogof = false and price 12.99 when asked for 'Turkey'", function() {
    var turkey = itemFactory.getItem( "Turkey" );
    assert.equal( "Turkey", turkey.name );
    assert.equal( 12.99, turkey.price );
    assert.equal( 'boolean', typeof( turkey.bogof ) );
    assert.equal( false, turkey.bogof );
  });
});
