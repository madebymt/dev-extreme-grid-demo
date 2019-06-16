import React from 'react';
import {Grid, TableView } from '@devexpress/dx-react-grid-bootstrap3'
import './App.css';
import data from './data'


function App() {
  return (
    <div className="App">
      <Grid 
        rows={data}
        columns={[
          {}

        ]}/>
        <TableView/>
    </div>
  );
}

export default App;
