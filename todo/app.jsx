const React = require('react');
const TodoList = require('./todolist');
const TodoForm = require('./todo_form');

const App = React.createClass({
  getInitialState() {
    return { tasks: [] };
  },

  componentDidMount() {
    const that = this;
    this.fetchTasks();
    chrome.storage.onChanged.addListener(function(todo, local) {
      that.fetchTasks();
    });
  },

  updateTasks(newTask) {
    const newTaskObject = {
      id: this.state.tasks.length + 1,
      completed: false,
      task: newTask
    }
    const allTasks = this.state.tasks.concat([newTaskObject]);
    this.setState({ tasks: allTasks });
    this.sync(allTasks);
  },

  fetchTasks() {
    chrome.storage.local.get('todo', tasks => {
      if (tasks.todo != null) {
        this.setState({ tasks: tasks.todo });
      }
    });
  },

  sync(tasks) {
    chrome.storage.local.set({todo: tasks}, function() {
    });
  },

  _completeTask(taskId) {
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id === taskId) {
        this.state.tasks[i].completed = !this.state.tasks[i].completed;
      }
    }

    this.sync(this.state.tasks);
  },

  _destroyTask(taskId) {
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id === taskId) {
        this.state.tasks.splice(i, 1);
      }
    }
    this.sync(this.state.tasks);
  },

  render() {
    return (
      <div className='todo-list'>
        <div>
          <h3>To Do List</h3>
          <TodoList tasks={this.state.tasks} destroy={this._destroyTask} complete={this._completeTask}/>
        </div>
        <TodoForm className='form' tasksLength={this.state.tasks.length} onFormSubmit={this.updateTasks}/>
      </div>
    );
  }
});

module.exports = App;
