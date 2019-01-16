import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  state = {
    showContact: true
  };

  onShowClick = id => {
    this.setState({
      showContact: !this.state.showContact
    });
  };

  onDeleteClick = async (dispatch, id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    } catch (e) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContact } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                  onClick={this.onShowClick.bind(this, id)}
                />

                <Link to={`/contact/edit/${id}`}>
                  <i className="fas-fa-pencil-alt" /> Edit
                </Link>

                <i
                  className="fas fa-times"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: '#ff0000'
                  }}
                  onClick={this.onDeleteClick.bind(this, dispatch, id)}
                />
              </h4>

              {showContact ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
