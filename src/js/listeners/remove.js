/* global window */
'use strict';

/**
* FUNCTION: removeListeners()
*	Removes event listeners.
*
* @returns {Object} context
*/
function removeListeners() {
	/* jshint validthis:true */
	this.editor.session.removeAllListeners( 'change' );
	return this;
} // end FUNCTION removeListeners()


// EXPORTS //

module.exports = removeListeners;
