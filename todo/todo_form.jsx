const React = require('react');
const ReactDOM = require('react-dom');

const TodoForm = React.createClass({
  getInitialState() {
    return { task: "" };
  },

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({ task: "" });
    ReactDOM.findDOMNode(this.refs.task).focus();
    this.props.onFormSubmit(this.state.task);
  },

  _onChange(e) {
    this.setState({ task: e.target.value });
  },

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="text" ref="task" onChange={this._onChange} placeholder='Add a todo' value={this.state.task} className='form-input'/>
        <input type="submit" value="Add" className='submit-button'/>
      </form>
    );
  }
});

module.exports = TodoForm;
