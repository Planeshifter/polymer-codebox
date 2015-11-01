'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// OBSERVER //

/**
* FUNCTION: codeChanged( newVal, oldVal )
*	Event handler invoked when the `code` property changes.
*
* @param {String} newVal - new value
* @param {String} oldVal - old value
*/
function codeChanged( newVal, oldVal ) {
	/* jshint validthis: true */
	var width,
		range,
		err,
		evalFun,
		elem;
	if ( oldVal === void 0 ) {
		return;
	}
	if ( !isString( newVal ) ) {
			err = new TypeError( 'code::invalid assignment. Must be a string. Value: `' + newVal + '`.' );
			this.fire( 'err', err );
			this.code  = oldVal;
			return;
	}
	this.silent = true;
	if ( this.editor.getValue() !== newVal ) {
		this.editor.setValue( newVal );
	}
	this.silent = false;
	// Update Output:
	try {
		this._setOutput( JSON.stringify( eval( this.code ), function replacer( key, val ) {
			return val.toFixed ? Number( val.toFixed(4) ) : val;
		}, 1 ) );
	} catch ( err ) {
		this._setOutput( 'Invalid expression' );
	}
	this.fire( 'code', {
		'type': 'change'
	});
	this.fire( 'change', {
		'attr': 'code',
		'prev': oldVal,
		'curr': newVal
	});
} // end FUNCTION codeChanged()


// EXPORTS //

module.exports = codeChanged;
