import React from 'react';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
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
