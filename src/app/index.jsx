import React,{Component} from 'react';

import Header from './header';
import Paragraph from './paragraph';
import Content from './content';

import './app.css';

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      {label:'Really Tast', id: 1}
      ]

  }
  onItemAdded = (text) => {
  const newItem = {
    label:text,
    id:this.maxId++
  }
  this.setState(({todoData}) => {
    const newarr = [...todoData, newItem]
    return{
      todoData:newarr
    }
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
