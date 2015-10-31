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


// OBSERVERS //


// MANIPULATE //


// UTILS //


// EXPORTS //

module.exports = element;
