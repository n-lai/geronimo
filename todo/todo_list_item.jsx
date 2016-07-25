const React = require('react');

const TodoListItem = React.createClass({
  _handleCheck(e) {
    e.preventDefault();
    this.props.handleComplete();
  },

  _handleDestroy(e) {
    e.preventDefault();
    this.props.handleDestroy();
  },

  render() {
    let completed = "";

    if (this.props.task.completed) {
      completed = "completed";
    }

    return (
      <div className='task'>
        <div>
          <input className='toggle' type='checkbox' onChange={this._handleCheck} checked={this.props.task.completed}/>
          <span className={completed}>{this.props.task.task}</span>
        </div>
        <button className='destroy' onClick={this._handleDestroy}>x</button>
      </div>
    );
  }
});

module.exports = TodoListItem;
