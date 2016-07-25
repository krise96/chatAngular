(function () {	
    var module = angular.module('app');

	module.controller('ChatController', ChatController);

	function ChatController($scope, $http) {
        $scope.getData = getData;
        $scope.text = "";
        $scope.mesText = "";
        
        $scope.delMes = delMes;
        
        function delMes(author, text){
            console.log(author, text);
            var data = {
                author: author,
                text: text
            }
            http = new XMLHttpRequest();
			http.open('DELETE', '/messages', true);
            http.setRequestHeader('Content-Type', 'application/json');
			http.send(JSON.stringify(data));
           	http.onreadystatechange = function() {
				if(http.status == 200 && http.readyState === 4) {
					getData();
				}
			};
        }
        
        
        
        function getData() {
                $http.get('/messages').success(function(data){
                $scope.data = data;
            }).error(function(){
                console.log("Ohhh...");
            });
        }
           
        $scope.sendData = sendData;
        
        function sendData(author, text) {
			$scope.text = text;
			console.log(author + ": " + text);
            $http.post("/messages", {'author': author, 'text': text}).success(function() {
                console.log('ok');
                getData();
            })
		}
     
        
        getData();
    }
})();