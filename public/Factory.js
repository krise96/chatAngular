(function () {
    var module = angular.module('app');

	module.factory('Factory', Factory);

    function Factory() {
        return{
            author: ""
        }
    }
    
})();