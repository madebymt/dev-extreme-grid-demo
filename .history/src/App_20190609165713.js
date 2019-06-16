import React from 'react';
import logo from './logo.svg';
import {Grid, TableView } from '@devexpress/dx-react-grid-bootstrap3'
import './App.css';
import data from './data'


function App() {
  return (
    <div className="App">
      <Grid 
        rows={data}
        columns={[

        ]}/>
    </div>
  );
}

export default App;
