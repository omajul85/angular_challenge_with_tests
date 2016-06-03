describe('toDoService', function(){

	beforeEach(module('toDoApp'));

	var toDoService, httpBackend;
	var apiData = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

	beforeEach(inject(function(_toDoService_, _toDoFactory_, $httpBackend) {
		toDoService = _toDoService_;
    toDoFactory = _toDoFactory_;
    httpBackend = $httpBackend;
  }));

	it('Retrieves a list of todos from an API', function(){
		// Mock out the http call
		httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(apiData);

		var todo1 = new toDoFactory('ToDo1',true);
		var todo2 = new toDoFactory('ToDo2');

  	toDoService.getAll().then(function(todos){
  		// Wait for the response to come back before doing the expectation
  		expect(todos).toEqual([todo1, todo2]);
  	});

  	// Flush which allows the test to explicitly flush pending requests. This preserves the 
  	//async api of the backend, while allowing the test to execute synchronously.
  	httpBackend.flush();
	});

});