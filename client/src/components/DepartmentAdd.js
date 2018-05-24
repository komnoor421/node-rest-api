import React from 'react';
import { Link } from 'react-router-dom';

export class DepartmentAdd extends React.Component {
  addDepartment(e) {
    e.preventDefault();

    const newDepartment = {
      name: this.refs.name.value
    }

    fetch('/departments', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newDepartment)
    })
    .then(res => res.json())
    .then(newDept => console.log(newDept));

    this.refs.name.value = null;
  }

  toDepartments() {
    this.props.history.push('/departments');
  }

  render() {
    return (
      <div className='employeeWrapper'>
        <h2>Add Department</h2>
        <form onSubmit={this.addDepartment.bind(this)}>
          <div className="form-group">
            <label htmlFor="nameInput">Name</label>
            <input
              ref="name"
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Department Name"
            />
          </div>
          <Link to='/departments'><button className="btn btn-secondary">Cancel</button></Link>
          <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#addedModal" onClick={this.addDepartment.bind(this)}>Add</button>
        </form>

        <div className="modal fade" id="addedModal" tabIndex="-1" data-backdrop="static">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Department Added!</h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.toDepartments.bind(this)}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
