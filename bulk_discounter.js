var bulk_discounter = {
  threshold: 20.00,
  percentage: 0.10,
  apply: function( grossTotal ) {

    if ( grossTotal > this.threshold ) {

      grossTotal -= this.percentage * grossTotal;
    }

    return grossTotal;
  }
};

module.exports = bulk_discounter;
