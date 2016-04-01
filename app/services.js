angular.module('services', []).factory('shang', function($window) {
	var msgs = [];
//	this.myFun = function(x) {
//		return x;
//	}
	 return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			$window.alert(msgs.join("\n"));
			msgs = [];
		}
	};
})