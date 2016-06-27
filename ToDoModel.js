var ToDoModel = Backbone.Model.extend({
  initialize: function(text) {
    this.set({todo: text});
  }

})