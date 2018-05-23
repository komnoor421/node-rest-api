import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Employees } from './components/Employees';

import 'bootstrap/dist/css/bootstrap.min.css';
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
                    <button type="button" className="view-button btn btn-primary btn-lg"><i className="fas fa-user"></i>Employees</button>
                    <button type="button" className="view-button btn btn-primary btn-lg"><i className="fas fa-building"></i>Departments</button>
                  </div>
                </div>
              )}/>
              <Route path='/employees' component={Employees} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
