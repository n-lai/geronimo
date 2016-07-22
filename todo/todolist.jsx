const React = require('react');
const TodoListItem = require('./todo_list_item');

const TodoList = React.createClass({
  render() {
    const createItem = function(itemText) {
      return (
        <TodoListItem>{itemText}</TodoListItem>
      );
    };

    return (
      <ul>
        {this.props.tasks.map(createItem)}
      </ul>
    );
  }
});

module.exports = TodoList;
