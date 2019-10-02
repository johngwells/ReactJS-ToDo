import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>
          <input
            name='item'
            value={this.state.item}
            type='text'
            placeholder='+ todo'
            onChange={this.handleChange}
          />
          <button type='submit'>Add</button>
          <button onClick={this.props.clearItem}>
            Remove
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
