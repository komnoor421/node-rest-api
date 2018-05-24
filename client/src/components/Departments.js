import React from 'react';
import { Link } from 'react-router-dom';

export class Departments extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      departments: []
    }
  }

  componentDidMount() {
    fetch('/departments')
      .then(res => res.json())
      .then(departments => this.setState(
        { departments, loading: false },
        () => console.log('Departments fetched...', departments))
      );
  }

  render() {
    if (this.state.loading === true) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <div>
          <h2>Departments</h2>
          <table className='table table-dark'>
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
          <Link to='/'><button type="button" className="btn btn-warning">Change View</button></Link>
          <Link to='/departments/add'><button type="button" className="btn btn-info">Add Department</button></Link>
        </div>
      );
    }
  }
}
