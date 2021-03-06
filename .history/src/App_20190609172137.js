import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import "@devexpress/dx-react-grid";
import { Grid, Table,TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import './App.css';
import data from './data'


function App() {
  return (
    <div className="App">
     <Grid
    rows={data}
    columns={[
      { name: 'id', title: 'ID' },
      { name: 'name', title: 'name' },
      { name: 'email', title: 'email' },
      { name: 'body', title: 'Message' },
    ]}>
    <Table />
    <TableHeaderRow />
  </Grid>

    </div>
  );
}

export default App;
