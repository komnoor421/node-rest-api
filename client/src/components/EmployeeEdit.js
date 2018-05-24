import React from 'react';
import { Link } from 'react-router-dom';

export class EmployeeEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      employee: {}
    }
  }

  async componentDidMount() {
    const { match } = this.props;
    let id = match.params.id;
    await fetch('/employees/' + id)
      .then(res => res.json())
      .then(employee => this.setState(
        { employee, loading: false },
        () => console.log('Employee fetched...'))
      );
  }

  editEmployee(e) {
    e.preventDefault();
    //console.log(this.state.employee._id);
    const alterEmployee = {
      name: this.refs.name.value,
      gender: this.refs.gender.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      jobTitle: this.refs.job.value
    }
    //console.log(JSON.stringify(alterEmployee));
    fetch('/employees/' + this.state.employee._id, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(alterEmployee)
    })
    .then(res => res.json())
    .then(changeEm => console.log(changeEm));

    this.refs.name.value = null;
    this.refs.gender.value = null;
    this.refs.phone.value = null;
    this.refs.email.value = null;
    this.refs.job.value = null;
  }

  deleteEmployee(e) {
    e.preventDefault();
    fetch('/employees/' + this.state.employee._id, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => console.log(result));
  }

  toEmployees() {
    this.props.history.push('/employees');
  }

  render() {
    if (this.state.loading === true) {
      return (<h1>Loading...</h1>)
    } else {
      return (
        <div className='employeeWrapper'>
          <h2>Edit Employee</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input
                ref="name"
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Full Name"
                defaultValue={this.state.employee.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genderInput">Gender</label>
              <input
                ref="gender"
                type="text"
                className="form-control"
                id="genderInput"
                placeholder="Gender"
                defaultValue={this.state.employee.gender}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneInput">Phone</label>
              <input
                ref="phone"
                type="phone"
                className="form-control"
                id="phoneInput"
                placeholder="Phone"
                defaultValue={this.state.employee.phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              <input
                ref="email"
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Email"
                defaultValue={this.state.employee.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobInput">Job Title</label>
              <input
                ref="job"
                type="text"
                className="form-control"
                id="jobInput"
                placeholder="Job Title"
                defaultValue={this.state.employee.jobTitle}
              />
            </div>
            <Link to='/employees'><button className="btn btn-secondary">Cancel</button></Link>
            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#changedModal" onClick={this.editEmployee.bind(this)}>Save</button>
            <button type="submit" className="btn btn-danger" data-toggle="modal" data-target="#deletedModal" onClick={this.deleteEmployee.bind(this)}>Delete</button>
          </form>

          <div className="modal fade" id="changedModal" tabIndex="-1" data-backdrop="static">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Employee Changed!</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.toEmployees.bind(this)}>OK</button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="deletedModal" tabIndex="-1" data-backdrop="static">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Employee Deleted!</h5>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.toEmployees.bind(this)}>OK</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
