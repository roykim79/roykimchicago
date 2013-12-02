var $todoList = $("#todo"),
    $todoInput = $("#todo-input"),
    $li = $("#todo-item").html(),
    template = _.template($li);

$todoInput.focus();

var list = {
  todos: [],
  add: function(task){
    this.todos.push(task);
    $(window).trigger("modelChanged");
  },
  remove: function (id) {
    this.todos = _.reject(this.todos, function (task) {
      return task.id === id;
    });
    $.each(this.todos, function(i, task){
      task.id = i;
      i++;
    });
    $(window).trigger("modelChanged");
  },
  count: function(){
    $("#todo-count").text(this.todos.length);
    $("#doing-count").text($todoList.find(".doing").length);
    $("#done-count").text($todoList.find(".done").length);

  },
  doingCount: function(){

  },
  updateName: function(id, newVal){
    var task = _.findWhere(this.todos, {id: id});
  
    task.name = newVal;
    $(window).trigger("modelChanged");
  },
  updateStatus: function(id, newVal){
    var task = _.findWhere(this.todos, {id: id});
  
    task.status = newVal;
            console.log(task);

   $(window).trigger("modelChanged");
  }
};

// modelChanged event
$(window).on("modelChanged", function () {
  // Create the TODO list
  $todoList.empty();  // clear the list
  
  $.each(list.todos, function(i, task){
    $todoList.append(template(task));
  });
  
  // Update task count
  list.count();
  $todoInput.focus();

});


// Adding a new item
$("#new-task").submit(function(){
  var todoID = list.todos.length,
      task = {
        id: todoID,
        name: $todoInput.val(),
        status: "do"
      };
  
  list.add(task);
  
  $todoInput.val("");
  return false;
  
});

// Remove item
$("#todo").on("click", ".remove", function(){
  var $this = $(this),
      id = $this.closest("li").data("id");
  list.remove(id);
});

// Edit task name
$todoList.on("click", "span.name", function(e){
  var $name = $(this).closest("li").find(".name"),
      $edit = $name.next(".edit-name"),
      editField = $edit.find("input"),
      val = $name.text();
  
  $name.hide();
  $edit.show();
  editField.val(val).focus();
});
// Edit task name
$todoList.on("blur", "span.edit-name", function(e){
  var $edit = $(this).closest("li").find("span.edit-name"),
      $name = $edit.prev(".name");
  
  $name.show();
  $edit.hide();
});

// Submit new task name
$("#todo").on("submit", ".edit-name form", function(e){
  var $this = $(this),
      id = $this.closest("li").data("id"),
      $input = $this.find("input"),
      newVal = $input.val(),
      curVal = $this.closest("span").prev().text();
    
  list.updateName(id, newVal);
 
  return false;
});

// Edit status
$todoList.on("click", "span.status", function(e){
  var $status = $(this).closest("li").find("span.status"),
      $edit = $status.next(".edit-status"),
      editField = $edit.find("select"),
      val = $status.text();
  
  $status.hide();
  $edit.show();
  editField.val(val).focus();
});
// Edit status
$todoList.on("blur", "span.edit-status", function(e){
  var $edit = $(this).closest("li").find("span.edit-status"),
      $status = $edit.prev(".status");
  
  $status.show();
  $edit.hide();
});

// Update Status

$("#todo").on("change", ".edit-status form", function(e){
  var $this = $(this),
      id = $this.closest("li").data("id"),
      $input = $this.find("select"),
      newVal = $input.val(),
      curVal = $this.closest("span").prev().text();
    
  list.updateStatus(id, newVal);
  $input.val(newVal);
  $this.closest("li").removeClass("do", "doing", "done");
  //$this.closest("li").removeClass("doing");
  //$this.closest("li").removeClass("done");

  $this.closest("li").addClass(newVal);

});





















