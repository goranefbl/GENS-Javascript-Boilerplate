(function() {

	'use strict';

	window.GENSPlugin = function () {

		// Global element references, to reference piece of plugin anywhere
	    this.someElement = null;

		// Default Options
		var defaults = {
	        firstOption  : true,
	        secondOption : 1
		}

		// Create options by extending defaults with the passed in arguments
	    if (arguments[0] && typeof arguments[0] === "object") {
	      this.options = extendDefaults(defaults, arguments[0]);
	    }

	}

	// Public Method
	GENSPlugin.prototype.init = function() { 
		
	}

	// Private Methods
	function somePrivateMethod() {

	}

	// Extend default Options
	function extendDefaults(defaults, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				defaults[property] = properties[property];
			}
		}
		return defaults;
	}

}());

var GENSplugin = new GENSPlugin({
	firstOption  : false,
	secondOption : 5 
});
GENSplugin.init();