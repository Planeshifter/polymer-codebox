'use strict';

// MODULES //

var ace = require( 'brace' );
require( 'brace/mode/javascript' );
require( 'brace/theme/chrome' );


// INIT //

/**
* FUNCTION: init()
*	Initialization.
*/
function init() {
	/* jshint validthis:true */
	var self = this;
	this.editor = ace.edit( this.$.jsEditor );
	this.editor.getSession().setMode( 'ace/mode/javascript' );
	this.editor.setTheme( 'ace/theme/chrome' );
	// [0] Set editor value:
	this.editor.setValue( this.code );
	this.editor.clearSelection();
	// [1] Set Output:
	try {
		this._setOutput( JSON.stringify( eval( this.code ), function replacer( key, val ) {
			return val.toFixed ? Number( val.toFixed(4) ) : val;
		}, 1 ) );
	} catch ( err ) {
		this._setOutput( 'Invalid expression' );
	}
	return this;
} // end FUNCTION init()


// EXPORTS //

module.exports = init;
