describe('toDoFactory', function(){
  beforeEach(module('toDoApp'))

  var Todo;

  beforeEach(inject(function(toDoFactory){
    Todo = new toDoFactory('Todo4')
  }));

  it('is not completed', function(){
    expect(Todo.completed).toBe(false);
  });

  it('is called Todo4', function(){
    expect(Todo.text).toEqual('Todo4');
  });

  it('can be completed', function(){
    Todo.complete();
    expect(Todo.completed).toBe(true);
  });

})