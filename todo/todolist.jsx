const React = require('react');
const TodoListItem = require('./todo_list_item');

const TodoList = React.createClass({
  _handleDestroy(e) {
    e.preventDefault();
    this.props.destroy(parseInt(e.target.value));
  },

  render() {
    if (this.props.length === 0) {
      return <div></div>;
    }

    const that = this;
    const createItem = function(id, itemText) {
      return (
        <div>
          <TodoListItem>{itemText}</TodoListItem>
          <button className='destroy' onClick={that._handleDestroy} value={id}>Destroy</button>
        </div>
      );
    };

    return (
      <ul>
        {this.props.tasks.map(task => {
          return createItem(task.id, task.task);
        })}
      </ul>
    );
  }
});

module.exports = TodoList;
