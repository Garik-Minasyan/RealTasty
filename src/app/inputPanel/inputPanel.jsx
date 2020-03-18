import React ,{Component} from 'react';

import './inputPanel.css';

export default class InputPanel extends Component  {
  state = {
    label:''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };
  onSubmit = (e) => {
    this.props.onItemAdded(this.state.label)
    this.refs.someName.value = '';
    e.preventDefault()
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input className='inputPanel' placeholder='text' type="text"
        onChange={this.onLabelChange} ref='someName'/>
      </form>
    );
  }
};