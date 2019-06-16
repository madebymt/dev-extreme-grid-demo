import React from 'react';
import"@devexpress/dx-react-grid";
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
          {name:'name',title: 'name'},
          {name:'email',title: 'Email'},
          {name:'body',title: 'body'}
        ]}/>
      <Table/>

    </div>
  );
}

export default App;
