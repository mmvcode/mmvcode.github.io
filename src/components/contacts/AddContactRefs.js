import React, { Component } from 'react';

class AddContactRefs extends Component {
  constructor() {
    super();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '888-888-8888'
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact (Uncontrolled Fields)</div>

        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                id="name"
                placeholder="e.g. John Doe"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                id="email"
                placeholder="e.g. jdoe@gmail.com"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                id="phone"
                placeholder="e.g. 555-555-5555"
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContactRefs;
