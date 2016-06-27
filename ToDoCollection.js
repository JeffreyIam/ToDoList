var ToDoCollection = Backbone.Collection.extend({


  model: ToDoModel,

  addTodo: function(text) {
    this.add(text);
    this.trigger('addTodo', this);
  },

  removeTodo: function(text) {
    this.remove(text);
    this.trigger('removeTodo', this);
  }

});