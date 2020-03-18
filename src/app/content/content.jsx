import React  from 'react';

import ItemText from './../itemText';
import InputPanel from './../inputPanel';

import './content.css';

export default function Content({ todos, onItemAdded }) {
  const elements = todos.map((item) => {
     return (
      <li className='lidiv' key={item.id} >
         <ItemText label={item.label}/>   
      </li>
    );
  } )
  
    return (
      <div className='contentDiv'>
        <ol className='oldiv'>
          {elements}
          <li>
             <InputPanel  onItemAdded={onItemAdded} />
          </li>
        </ol>  
      </div>
    );
};

