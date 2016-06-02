toDoApp.service('toDoService', ['$http', 'toDoFactory', function($http, toDoFactory){

	var self = this;

	self.getAll = function(){
		return $http.get("http://quiet-beach-24792.herokuapp.com/todos.json")
		.then(_handleResponseFromApi);
	};

	function _handleResponseFromApi(response){
		return response.data.map(function(toDoData){
			return new toDoFactory(toDoData.text, toDoData.completed);
		});
	}
}]);