var ToDoEntryView = Backbone.View.extend({

  events: {
    'click': function() {
      // this.collection.removeTodo(this.model.cid);
      this.trigger('removeTodoEntry', this.model.cid);
    }
  },

  template: _.template('<li><%= todo %></li>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

})