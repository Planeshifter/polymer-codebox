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
	this.editor.setValue( this.code );
	this.editor.clearSelection();
	return this;
} // end FUNCTION init()


// EXPORTS //

module.exports = init;
