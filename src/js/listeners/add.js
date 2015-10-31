/* global window */
'use strict';

/**
* FUNCTION: addListeners()
*	Adds event listeners.
*
* @returns {Object} context
*/
function addListeners() {
	/* jshint validthis:true */
	this._removeListeners();
	this.editor.getSession().on( 'change', this._codeChange );
	return this;
} // end FUNCTION addListeners()


// EXPORTS //

module.exports = addListeners;
