(function () {	
	var module = angular.module('app');

	module.controller('ShowController', ShowController);

	function ShowController($scope, Factory) {
		$scope.logShow = true;
		$scope.chatShow = false;
		$scope.onClickLog = onClickLog;
		$scope.Factory = Factory;
		
		function onClickLog(text) {
			if(text.length < 3){
				alert('false data. Try again');
				return;
			}
			$scope.uName = text;
			$scope.logShow = false;
			$scope.chatShow = true;
		}
	}
})();