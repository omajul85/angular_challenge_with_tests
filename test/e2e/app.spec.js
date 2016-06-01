describe('Todos tracker', function() {
  it('has severals todos', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	expect(todos.first().getText()).toMatch('ToDo1: completed');
  	expect(todos.last().getText()).toMatch('ToDo2: not completed');
  });

  it('adds a new todo', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	$("#todo_name").sendKeys("Clean the garage");
  	$("#add_todo").click();
  	expect(todos.last().getText()).toMatch('Clean the garage: not completed');
  });

  it('removes the last todo', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	$("#remove_todo").click();
  	expect(todos.last().getText()).toMatch('ToDo1: completed');
  	expect(todos.count()).toEqual(1);
  });

  it('can mark a todo as complete', function(){
  	browser.get('/');
  	var todo = $$('#todos p').last();
  	todo.element(by.css('.complete')).click();
  	expect(todo.getText()).toMatch('ToDo2: completed');
  });

});