import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmailMsg extends Component {

  showLocationInfo = () => {
    const { response, message, sendingEmail } = this.props
    return response === true ? <div><h2 className='uk-text-center uk-position-center textDown'>{message.message}</h2></div> : sendingEmail === true ?
      <div><h2 className='uk-text-center uk-position-center textDown'> Sending Your Email to Matteo Piccini </h2></div> :
      <div></div>
    }

  render() {
    return (
      <div>
        {this.showLocationInfo()}
      </div>
    )
  }

 }

function mapStateToProps(state){
  console.log(state.contacts)
  return {
    message: state.contacts.message,
    sendingEmail: state.contacts.makeReq,
    response: state.contacts.recvdResp
  }
}

export default connect(mapStateToProps, null)(EmailMsg)
