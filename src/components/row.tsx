import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props extends ToDos {
      

}

function Row({userId, id, title, completed}: Props) {
  return (
    <div >    
        <p>
          User ID: {userId}
        </p>
       <p>
          ID: {id}
        </p>
        <p>
            Title: {title}
        </p>
        <p>
            Status: {completed} 
        </p>
    </div>
  );
}
