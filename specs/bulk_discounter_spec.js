var assert = require('assert');
var bulk_discounter = require('../bulk_discounter');

describe( "Discounter", function() {

  it( "Should have an applyBulkDiscount method that takes 10% off if total is over £20", function() {
    assert.equal( 19.80, bulk_discounter.apply( 22.00 ) );
  });
});
