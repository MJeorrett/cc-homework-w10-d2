var assert = require('assert');
var bulk_discounter = require('../bulk_discounter');

describe( "Discounter", function() {

  it( "should have an 'apply' method that takes 10% off if total is over 20.00", function() {
    assert.equal( 19.80, bulk_discounter.apply( 22.00 ) );
  });

  it( "should have an 'apply' method that returns the original total if it is <= 20.00", function() {
    assert.equal( 20.00, bulk_discounter.apply( 20.00 ) );
  });
});
