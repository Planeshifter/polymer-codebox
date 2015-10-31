'use strict';

/**
* FUNCTION: onCodeChange( evt )
*	Event handler invoked on a 'dropdownClose' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onCodeChange( evt ) {
	/* jshint validthis:true */
	var code,
		evalFun,
		elem;
	code = this.editor.getValue();
	try {
		elem = this.$.output;
		elem.innerHTML = JSON.stringify( eval( code ), function replacer( key, val ) {
			return val.toFixed ? Number( val.toFixed(4) ) : val;
		}, 1 );
	} catch ( err ) {
		elem = this.$.output;
		elem.innerHTML = 'Invalid expression';
	}
	return true;
} // end FUNCTION onCodeChange()


// EXPORTS //

module.exports = onResize;
