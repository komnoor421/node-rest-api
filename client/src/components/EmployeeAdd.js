import React from 'react';

export class EmployeeAdd extends React.Component {
  addEmployee(e) {
    e.preventDefault();

    const newEmployee = {
      name: this.refs.name.value,
      gender: this.refs.gender.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      hireDate: Date.now(),
      jobTitle: this.refs.job.value
    }

    console.log(JSON.stringify(newEmployee));
    fetch('/employees', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newEmployee)
    })
    .then(res => res.json())
    .then(newEm => console.log(newEm));

    this.refs.name.value = null;
    this.refs.gender.value = null;
    this.refs.phone.value = null;
    this.refs.email.value = null;
    this.refs.job.value = null;
  }


  render() {
    return (
      <div className='employeeWrapper'>
        <h2>Add Employee</h2>
        <form onSubmit={this.addEmployee.bind(this)}>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input
              ref="name"
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Full Name"
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
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.addEmployee.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
}
