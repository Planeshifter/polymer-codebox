'use strict';

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
	this.editor.getSession().on( 'change', function(e) {
		self._refresh();
	});
	this.editor.session.setNewLineMode( 'unix' );
	this.editor.setValue( this.code );
	return this;
} // end FUNCTION init()


// EXPORTS //

module.exports = init;
