(function() {
        var module = angular.module('app', ['ngRoute']);


	module
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: './index.html',
				})
		}]);
})();


