const React = require('react');

const TodoListItem = React.createClass({
  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
});

module.exports = TodoListItem;
