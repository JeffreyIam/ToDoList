var AppModel = Backbone.Model.extend({
  initialize:function(){
    this.set('toDoCollection', new ToDoCollection());
  }

})