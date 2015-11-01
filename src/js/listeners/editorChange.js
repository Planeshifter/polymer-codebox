'use strict';

/**
* FUNCTION: onEditorChange( evt )
*	Event handler invoked on a 'editorChange' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onEditorChange( evt ) {
	/* jshint validthis:true */
	if ( this.silent !== true ) {
		this.code = this.editor.getValue();
	}
	return true;
} // end FUNCTION onEditorChange()


// EXPORTS //

module.exports = onEditorChange;
