describe('toDoController', function() {

  beforeEach(module('toDoApp'));

  var ctrl;
  var toDoFactory;

  beforeEach(inject(function($controller,_toDoFactory_) {
    ctrl = $controller('toDoController');
    toDoFactory = _toDoFactory_;
  }));

  it('initialises with several todos', function() {
  	var todos = [
  		new toDoFactory('ToDo1',true),
  		new toDoFactory('ToDo2')
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