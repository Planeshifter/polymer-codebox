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
	this.editor = ace.edit( this.$.code );
	this.editor.setTheme( 'ace/theme/chrome' );
	this.editor.getSession().setMode( 'ace/mode/javascript' );
	this.editor.setValue( this.code );
	return this;
} // end FUNCTION init()


// EXPORTS //

module.exports = init;
