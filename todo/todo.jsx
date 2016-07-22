const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./app');
const TodoList = require('./todolist');
const TodoForm = require('./todo_form');


const Todo = React.createClass({
  render() {
    return (
      <div className='root'>
        <App/>
        {this.props.children}
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('to-do-list');
  ReactDOM.render(<Todo />, root);
});
