'use strict';

// ELEMENT //

var element = {};


// NAME //

element.is = require( './name' );


// PROPERTIES //

element.properties = require( './properties' );


// LIFECYCLE //

element.created = require( './lifecycle/created.js' );

element.ready = require( './lifecycle/ready.js' );

element.attached = require( './lifecycle/attached.js' );

element.detached = require( './lifecycle/detached.js' );


// INIT //

element._init = require( './init' );

// LISTENERS //

element._addListeners = require( './listeners/add.js' );

element._removeListeners = require( './listeners/remove.js' );

element.onEditorChange = require( './listeners/editorChange.js' );

// OBSERVERS //

element._widthChanged = require( './observers/width.js' );

element._codeChanged = require( './observers/code.js' );


// MANIPULATE //


// UTILS //


// EXPORTS //

module.exports = element;
