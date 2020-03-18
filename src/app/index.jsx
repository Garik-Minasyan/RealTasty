import React, {Component} from 'react';

import Header from './header';
import Paragraph from './paragraph';
import Content from './content';

import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      {label:'Really Tast', id: 1}
    ]
  };
  maxId = 100;

  onItemAdded = (text) => {
    const newItem = {
      label:text,
       id:this.maxId++
  };

  this.setState(({ todoData }) => {
    const newArr = [...todoData, newItem];
    return {
      todoData:newArr
    };
  });
  }
  
  render() {
    return(
      <div className='appDiv'>
         <div className='generalDiv'>
           <Header />
           <Paragraph />
           <Content todos={this.state.todoData} onItemAdded={this.onItemAdded}/>
         </div>
      </div>
    );
  }
};
