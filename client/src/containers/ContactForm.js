import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { submitContactReqToServer } from '../actions/submitContactReq';
import EmailMsg from './EmailMsg';
import './ContactForm.css';


class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // this.props.submitContactReqToServer('/contacts', this.state)
    this.setState({name: '', email: '', message: ''})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      <div>
        <form className="contact-form" onSubmit={this.handleOnSubmit}>
          <h2> CONTACT US </h2>
          <div className="form-field">
            <label htmlFor="name">
              <div className="label-content">Name:</div>
              <input type="text" name="name" required onChange={this.handleOnChange} value={this.state.name}/>
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="email">
              <div className="label-content">Email:</div>
              <input type="email" name="email" required onChange={this.handleOnChange} value={this.state.email}/>
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              <div className="label-content">Message:</div>
              <textarea className="stretch" name="message" rows="5" required onChange={this.handleOnChange} value={this.state.message}/>
            </label>
          </div>

          <button type="submit">Send</button>
        </form>

        <div>
        </div>

      </div>
    );
  };
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ submitContactReqToServer }, dispatch);
// };
export default ContactForm;
// export default connect(null, mapDispatchToProps)(ContactForm);
