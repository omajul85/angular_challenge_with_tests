describe('toDoController', function() {
  
  beforeEach(module('toDoApp'));

  var ctrl;

  /*inject is a built-in Angular function that allows us to access
  the Angular app and our controller from inside our tests*/
  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoController');
  }));

  it('initialises with a toDo', function() {
  	expect(ctrl.todo).toEqual("ToDo1");
  });
});