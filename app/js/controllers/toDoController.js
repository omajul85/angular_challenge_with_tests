toDoApp.controller('toDoController', ['toDoService', 'toDoFactory', function(toDoService, toDoFactory) {
	
	var self = this;

	// Use the toDoService to fetch the list from API
	toDoService.getAll().then(function(todos){
		self.todos = todos;
	});

	self.addToDo = function(task){
		self.todos.push(new toDoFactory(task));
	};

	self.removeToDo = function(){
		self.todos.pop();
	};

}]);