const React = require('react');
const TodoList = require('./todolist');
const TodoForm = require('./todo_form');

const App = React.createClass({
  getInitialState() {
    return { tasks: [] };
  },

  updateTasks(newTask) {
    debugger
    const allTasks = this.state.tasks.concat([newTask]);
    this.setState({ tasks: allTasks });
    this.sync();
  },

  componentDidMount() {
    const that = this;
    chrome.storage.onChanged.addListener(function(todo, local) {
      that.setState({ tasks: that.fetchTasks() });
    });
    debugger
  },

  fetchTasks() {
    let taskList;

    chrome.storage.local.get('todo', tasks => {
      if (tasks.todo != null) {
        taskList = tasks
        // for (let i = 0; i < that.tasks.length; i++) {
        //   that.tasks[i]['id'] = i + 1;
        // }
        // cb(that.tasks);
      }
    });
    debugger
    return taskList;
  },

  sync() {
    chrome.storage.local.set({todo: this.state.tasks}, function() {
      console.log('chrome storage has been updated')
    });
  },

  render() {
    return (
      <div className='todo-list'>
        <h3>To Do List</h3>
        <TodoList tasks={this.state.tasks} />
        <TodoForm onFormSubmit={this.updateTasks}/>
      </div>
    );
  }
});

module.exports = App;
