describe('toDoController', function() {
  
  beforeEach(module('toDoApp'));

  var ctrl;

  /*inject is a built-in Angular function that allows us to access
  the Angular app and our controller from inside our tests*/
  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController');
  }));

  it('initialises with several todos', function() {
  	var todos = [
  		{text: "ToDo1", completed: true},
  		{text: "ToDo2", completed: false}
  	];
  	expect(ctrl.todos).toEqual(todos);
  });

  it('adds a new todo', function(){
  	var todos = ctrl.todos;
  	ctrl.addToDo('ToDo3');
  	expect(todos.length).toEqual(3);
  });

	it('removes last todo', function(){
  	var todos = ctrl.todos;
  	ctrl.removeToDo();
  	expect(todos.length).toEqual(1);
  });  

});