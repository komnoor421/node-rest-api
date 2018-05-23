import React from 'react';
import { Link } from 'react-router-dom';

export class Departments extends React.Component {
  constructor() {
    super();
    this.state = {
      departments: []
    }
  }

  componentDidMount() {
    fetch('/departments')
      .then(res => res.json())
      .then(departments => this.setState(
        { departments },
        () => console.log('Departments fetched...', departments))
      );
  }

  render() {
    return (
      <div>
        <h2>Departments</h2>
        <table className='table table-hover table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.departments.map(department => {
              return (
                <tr key={department._id}>
                  <td>{department.departmentId}</td>
                  <td>{department.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Link to='/'><button type="button" className="btn btn-info">Add Department</button></Link>
      </div>
    );
  }
}
