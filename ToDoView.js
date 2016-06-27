var ToDoView = Backbone.View.extend({

  initialize: function() {

    this.listenTo(this.collection, 'addTodo', function() {
      this.render();
    });

    this.listenTo(this.collection, 'removeTodo', function() {
      this.render();
    });

    this.listenTo(this.collection, 'removeTodoEntry', function(cid) {
      debugger;
      this.collection.removeTodo(cid);
      this.render();
    });
  },

  events: {
    'click button': function(e) {
      this.collection.addTodo(document.getElementById('entry').value);
    }
  },

  render: function() {
    console.log('rendered')
    return this.$el.html('<input id="entry"/>' + '<button>Add</button>').append(
      this.collection.map(function(model) {
        return new ToDoEntryView({model: model}).render();
      })
    );
  }

})