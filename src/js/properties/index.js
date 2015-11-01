'use strict';

// MODULES //


// PROPERTIES //

var props = {};

/**
* Element width.
*
* @type {Number}
* @default 500
*/
props.width = {
	type: Number,
	value: 500,
	observer: '_widthChanged'
};

/**
* Background color of editor.
*
* @type {String}
* @default #FFFFFF
*/
props.backgroundColor = {
	type: String,
	value: '#FFFFFF'
};

/**
* Code to be evaluated.
*
* @type {String}
* @default undefined
*/
props.code = {
	type: String,
	observer: '_codeChanged'
};

/**
* Returned value of code evaluation.
*
* @type {String}
* @default empty string
*/
props.output = {
	type: String,
	readOnly: true,
	value: ''
};

/**
* ACE-Editor object.
*
* @type {Object}
* @default undefined
*/
props.editor = {
	type: Object
}

/**
* Whether ACE-editor event listeners are invoked or not.
*
* @type {Boolean}
* @default false
*/
props.silent = {
	type: Boolean,
	value: false
}

// EXPORTS //

module.exports = props;
