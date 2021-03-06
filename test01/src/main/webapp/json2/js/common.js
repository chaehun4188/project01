var contextRoot = '/web02';

window.moduleMap = {};
window.moduleLoadEvent = {};

function define(moduleName, func) {
	window.moduleMap[moduleName] = func();
}

function	requirejs(moduleName, cb) {
	if (window.moduleMap[moduleName] == undefined) {
		window.moduleLoadEvent[moduleName] = cb;
		 $('<script>')
		    .attr('src', contextRoot + '/json2/sub/' + moduleName + '.js')
		    .attr('async', true)
		    .attr('type', 'test/javascript')
		    .appendTo('#content');
		 $('<script>')
		 .attr('async', true)
		 .attr('type', 'test/javascript')
		 .html('window.moduleLoadEvent["' + moduleName + '"]' 
				 + '(window.moduleMap["' + moduleName + '"]);')
		 .appendTo('#content');
		 
		 
	} else {
		cb(window.moduleMap[moduleName]);
	}
};