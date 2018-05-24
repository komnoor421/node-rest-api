import React from 'react';
import { Link } from 'react-router-dom';

export class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      employees: []
    }
  }

  componentDidMount() {
    fetch('/employees')
      .then(res => res.json())
      .then(employees => this.setState(
        { employees, loading: false },
        () => console.log('Employees fetched...', employees))
      );
  }

  goToEditEmployee(id) {
    this.props.history.push('/employee/' + id);
  }

  render() {
    if (this.state.loading === true) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <div>
          <h2>Employees</h2>
          <table className='table table-hover table-dark'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Phone #</th>
                <th>Email</th>
                <th>Hire Date</th>
                <th>Dept ID</th>
                <th>Job Title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map(employee => {
                return (
                  <tr key={employee._id} onClick={this.goToEditEmployee.bind(this, employee._id)}>
                    <td>{employee.name}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.hireDate}</td>
                    <td>{employee.departmentId}</td>
                    <td>{employee.jobTitle}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Link to='/'><button type="button" className="btn btn-warning">Change View</button></Link>
          <Link to='/employees/add'><button type="button" className="btn btn-info">Add Employee</button></Link>
        </div>
      );
    }
  }
}
