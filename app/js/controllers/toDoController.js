toDoApp.controller('toDoController', ['toDoFactory', function(toDoFactory) {
	var self = this;

	self.todos = [new toDoFactory('ToDo1',true), new toDoFactory('ToDo2')];

	self.addToDo = function(task){
		self.todos.push(new toDoFactory(task));
	};

	self.removeToDo = function(){
		self.todos.pop();
	};

}]);