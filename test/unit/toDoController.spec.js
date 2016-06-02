describe('toDoController', function() {

  beforeEach(module('toDoApp'));

  var ctrl, toDoFactory, httpBackend;
  var apiData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller,_toDoFactory_) {
    ctrl = $controller('toDoController');
    toDoFactory = _toDoFactory_;
    httpBackend = $httpBackend;

    // Mock out the http call
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(apiData);

    // We have to flush straight away here so that by the time we do our tests
    // the ToDos have been set to `self.todos`
    httpBackend.flush();
  }));

  it('initialises with several todos', function() {
  	var todos = [
  		new toDoFactory('ToDo1', true),
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