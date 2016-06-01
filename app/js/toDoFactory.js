toDoApp.factory('toDoFactory', function() {
  var Todo = function(todoTask, completed){
    this.text = todoTask;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  Todo.prototype.complete = function(){
    this.completed = true;
  };
  return Todo;
});