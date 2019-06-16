//react
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
// extreme grid
import "@devexpress/dx-react-grid";
import { Grid, Table,TableHeaderRow,PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import { PagingState, SortingState ,IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid' 
//others
import './App.css';
import data from './data'

const HomeView =()=>(
  <h1>Hello!</h1>
)

const GridView =()=>(
  <Grid
    rows={data}
    columns={[
      { name: 'id', title: 'ID' },
      { name: 'name', title: 'name' },
      { name: 'email', title: 'email' },
      { name: 'body', title: 'Message' },
    ]}>
      <PagingState defaultPageSize={15}/>
     <IntegratedPaging/>
    <Table />
    <TableHeaderRow />
    <PagingPanel/>
  </Grid>
)

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <LinkContainer exact={true} to="/">
          <Nav.Link href="#home">Home</Nav.Link>
        </LinkContainer>
          <Nav.Link href="/grid">Grid</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Route exact path="/" component={HomeView}/>
        <Route path="/grid" component={GridView} />
      
        </Router>
    </div>
  );
}

export default App;
