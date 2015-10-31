'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive' );


// OBSERVER //

/**
* FUNCTION: widthChanged( newVal, oldVal )
*	Event handler invoked when the `width` property changes.
*
* @param {Number} newVal - new value
* @param {Number} oldVal - old value
*/
function widthChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var width,
		range,
		err;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isPositive( newVal ) ) {
			err = new TypeError( 'width::invalid assignment. Must be a positive number. Value: `' + newVal + '`.' );
			this.fire( 'err', err );
			this.$.main.style.width  = oldVal;
			return;
	}
	this.$.main.style.width = newValue;

	this.fire( 'width', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'width',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION widthChanged()


// EXPORTS //

module.exports = widthChanged;
