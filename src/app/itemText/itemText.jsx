import React,{Component} from 'react';
import './itemText.css';

export default class ItemText extends Component{
  render() {
     return(
       <div>
         <span>{this.props.label}</span>
       </div>
     ); 
  }
};