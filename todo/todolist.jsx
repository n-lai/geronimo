const React = require('react');
const TodoListItem = require('./todo_list_item');

const TodoList = React.createClass({
  _handleDestroy(taskId) {
    this.props.destroy(taskId);
  },

  _handleComplete(taskId) {
    this.props.complete(taskId);
  },

  render() {
    if (this.props.tasks.length === 0) {
      return <div></div>;
    }

    const that = this;

    return (
      <ul>
        {
          this.props.tasks.map(task => {
            return (
              <li key={task.id}>
                <TodoListItem
                  task={task}
                  handleDestroy={that._handleDestroy.bind(null, task.id)}
                  handleComplete={that._handleComplete.bind(null, task.id)}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
});

module.exports = TodoList;
