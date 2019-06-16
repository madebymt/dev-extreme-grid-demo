import React from 'react';
import {Grid} from '@devexpress/dx-react-grid-bootstrap4'
import './App.css';
import data from './data'


function App() {
  return (
    <div className="App">
      <Grid 
        rows={data}
        columns={[
          {name:'postId',title: 'ID'},
          {name:'Name',title: 'name'},
          {name:'Email',title: 'Email'},
          {name:'Body',title: 'body'}
        ]}/>
      

    </div>
  );
}

export default App;
