import React ,{Component} from 'react';

import './inputPanel.css';

export default class InputPanel extends Component  {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  };

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.label}
          className='inputPanel'
          placeholder='text'
          type="text"
          onChange={this.onLabelChange}
        />
      </form>
    );
  }
};