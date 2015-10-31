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
	type: String
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

// EXPORTS //

module.exports = props;
