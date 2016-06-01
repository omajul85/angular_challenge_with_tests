toDoApp.controller('toDoController', [function() {
	var self = this;
	
	self.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }];

	self.addToDo = function(task){
		self.todos.push({text: task, completed: false});
	};

	self.removeToDo = function(){
		self.todos.pop();
	};

}]);