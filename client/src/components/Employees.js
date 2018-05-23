import React from 'react';

export class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch('/employees')
      .then(res => res.json())
      .then(employees => this.setState(
        { employees },
        () => console.log('Employees fetched...', employees))
      );
  }

  render() {
    return (
      <div>
        <h2>Employees</h2>
      </div>
    );
  }
}
