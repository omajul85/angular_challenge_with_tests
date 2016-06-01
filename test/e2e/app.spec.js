describe('Todos tracker', function() {
  it('has severals todos', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	expect(todos.first().getText()).toEqual('ToDo1: completed');
  	expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });

  it('adds a new todo', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	$("#todo_name").sendKeys("Clean the garage");
  	$("#add_todo").click();
  	expect(todos.last().getText()).toEqual('Clean the garage: not completed');
  });

  it('removes the last todo', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	$("#remove_todo").click();
  	expect(todos.last().getText()).toEqual('ToDo1: completed');
  	expect(todos.count()).toEqual(1);
  });
});