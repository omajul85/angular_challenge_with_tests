describe('Todos tracker', function() {
  // it('has a todo', function() {
  //   browser.get('/');
  //   var todo = $('#todo');
  //   expect(todo.getText()).toEqual('ToDo1');
  // });

  it('has severals todos', function(){
  	browser.get('/');
  	var todos = $$('#todos p');
  	expect(todos.first().getText()).toEqual('ToDo1: completed');
  	expect(todos.last().getText()).toEqual('ToDo2: not completed');
  });
});