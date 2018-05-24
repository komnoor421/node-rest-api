import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Employees } from './components/Employees';
import { EmployeeAdd } from './components/EmployeeAdd';
import { EmployeeEdit } from './components/EmployeeEdit';
import { DepartmentAdd } from './components/DepartmentAdd';
import { Departments } from './components/Departments';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">RESTful API Web App</h1>
        </header>
        <div id="main-body">
          <BrowserRouter>
            <div>
              <Route exact path='/' render={() => (
                <div>
                  <h2>Click to View</h2>
                  <div className='button-group'>
                    <Link to='/employees'><button type="button" className="view-button btn btn-primary btn-lg"><i className="fas fa-user"></i>Employees</button></Link>
                    <Link to='/departments'><button type="button" className="view-button btn btn-primary btn-lg"><i className="fas fa-building"></i>Departments</button></Link>
                  </div>
                </div>
              )}/>
              <Route exact path='/employees' component={Employees} />
              <Route exact path='/employees/add' component={EmployeeAdd} />
              <Route exact path='/employee/:id' component={EmployeeEdit} />
              <Route exact path='/departments' component={Departments} />
              <Route exact path='/departments/add' component={DepartmentAdd} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
