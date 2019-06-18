//react
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import {Navbar,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
// extreme grid
import "@devexpress/dx-react-grid";
import { Grid, Table,TableHeaderRow,PagingPanel} from '@devexpress/dx-react-grid-bootstrap4';
import { PagingState, SortingState ,IntegratedPaging, IntegratedSorting} from '@devexpress/dx-react-grid' 
//others
import './App.css';
import data from './data'
//import { threadId } from 'worker_threads';

const HomeView =()=>(
  <h1>Hello!</h1>
)

class GridView extends Component {
  constructor(){
    super();
    this.state={
      sorting:[
        {columnName: 'name',direction:'asc'}
      ]
    }
  render(){
    return(
      <Grid
        rows={data}
        columns={[
          { name: 'id', title: 'ID' },
          { name: 'name', title: 'name' },
          { name: 'email', title: 'email' },
          { name: 'body', title: 'Message' },
        ]}>
      <PagingState defaultPageSize={15} defaultCurrentPage={4} />
      <SortingState defaultSorting={[{columnName:'name',direction:'asc'}]}/>
      <IntegratedPaging/>
      <IntegratedSorting/>
      <Table />
      <TableHeaderRow showSortingControls/>
      <PagingPanel/>
    </Grid>
    )
  }
}

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
